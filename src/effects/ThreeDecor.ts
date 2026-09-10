/**
 * 房间陈设与装饰（纯程序化 3D，无外部资源）。
 *
 * 此前每个房间只有「墙 + 地板 + 若干功能性实体」，画面因此非常空旷单调。
 * 本模块补上**不参与逻辑**的环境陈设层：
 *   - 立体陈设：木桶 / 木箱 / 麻袋 / 书堆 / 烛台 / 吊灯 / 火盆 / 骷髅堆 / 碎砾 /
 *     蘑菇丛 / 星晶 / 齿轮 / 陶瓮 / 长凳 / 铁砧；
 *   - 墙面挂饰：旗帜 / 壁烛台 / 蛛网 / 墙缝；
 *   - 地面贴片：积水 / 苔斑 / 地裂 / 符文（透明贴地，不挡视线）。
 *
 * 关键约定：
 *   - **纯渲染层**：不写入 `room.entities`，不影响寻路、碰撞与战斗（放置时只避开已占用格）；
 *   - **确定性**：位置与种类由房间坐标哈希出的伪随机决定 → 同层重渲染不跳变；
 *   - **贴墙安放**：只落在「紧邻墙的地板格」并朝房间中心偏移，保持中间通行区清爽；
 *   - 几何走 `ThreeGeometry` 缓存工厂，材质按区段主题生成一次并复用。
 */
import * as THREE from 'three';
import type { RoomData, RoomType } from '../types';
import type { TierTheme } from '../data/tiers';
import { roundedBox, cyl, sphere, torus } from './ThreeGeometry';
import { propNormal, propRoughness, PROP_NOISE } from './ThreeTextures';
import { doorInner } from '../utils/Grid';

// ============ 类型 ============

export type DecorKind =
  // 立体陈设
  | 'barrel' | 'crate' | 'sack' | 'bookStack' | 'candlestick' | 'lantern'
  | 'brazier' | 'skullPile' | 'rubble' | 'mushroom' | 'crystal' | 'gear'
  | 'urn' | 'bench' | 'anvil' | 'coal' | 'bones' | 'weaponRack'
  // 房间地标（每房至多一件，身份感最强）
  | 'throne' | 'campfire' | 'chandelier'
  // 墙面挂饰（贴墙内表面）
  | 'banner' | 'sconce' | 'web' | 'wallCrack'
  // 地面贴片
  | 'puddle' | 'mossPatch' | 'floorCrack' | 'rune';

/** 立体物件（占一格、贴墙）；其余为墙面/地面贴饰 */
const SOLID: ReadonlySet<DecorKind> = new Set<DecorKind>([
  'barrel', 'crate', 'sack', 'bookStack', 'candlestick', 'lantern',
  'brazier', 'skullPile', 'rubble', 'mushroom', 'crystal', 'gear',
  'urn', 'bench', 'anvil', 'coal', 'bones', 'weaponRack',
  'throne', 'campfire', 'chandelier',
]);

/** 陈设基准高度（世界 y）：吊灯悬于房间上方，其余落地 */
export function decorBaseY(kind: DecorKind): number {
  return kind === 'chandelier' ? 2.1 : 0;
}

/** 墙面挂饰（需要朝向：贴墙内表面） */
const ON_WALL: ReadonlySet<DecorKind> = new Set<DecorKind>(['banner', 'sconce', 'web', 'wallCrack']);
const ON_FLOOR: ReadonlySet<DecorKind> = new Set<DecorKind>(['puddle', 'mossPatch', 'floorCrack', 'rune']);

export interface RoomDecorItem {
  kind: DecorKind;
  /** 世界坐标（格中心 + 已算好的贴墙偏移） */
  wx: number;
  wz: number;
  /** 绕 Y 轴朝向（立体物件：背对墙；墙面挂饰：面朝房间内） */
  yaw: number;
  /** 所依附的墙格（墙面挂饰据此取墙高定位） */
  cellX?: number;
  cellY?: number;
  /** 伪随机数，交给构建函数做尺寸/数量扰动 */
  seed: number;
}

// ============ 材质调色板（按区段主题生成一次） ============

export interface DecorMats {
  wood: THREE.MeshStandardMaterial;
  woodDark: THREE.MeshStandardMaterial;
  iron: THREE.MeshStandardMaterial;
  ironDark: THREE.MeshStandardMaterial;
  stone: THREE.MeshStandardMaterial;
  stoneDark: THREE.MeshStandardMaterial;
  bone: THREE.MeshStandardMaterial;
  leaf: THREE.MeshStandardMaterial;
  cloth: THREE.MeshStandardMaterial;
  clothDark: THREE.MeshStandardMaterial;
  glass: THREE.MeshStandardMaterial;
  coal: THREE.MeshStandardMaterial;
  /** 金饰（王座 / 拱门 / 柱头） */
  gold: THREE.MeshStandardMaterial;
  /** 自发光核心（烛火/炉火/星晶） */
  ember: THREE.MeshBasicMaterial;
  /** 主色（来自区段标题卡主色，用于旗帜/符文） */
  accent: THREE.Color;
  glowCss: string;
}

/** 挂一层噪声法线/粗糙度（与建筑同款"非塑料"处理） */
function grained(
  mat: THREE.MeshStandardMaterial, seed: number, repeat = 2, strength = 1.0,
): THREE.MeshStandardMaterial {
  mat.normalMap = propNormal(seed, repeat, strength);
  mat.roughnessMap = propRoughness(seed, repeat, mat.roughness, 0.16);
  mat.roughness = 1;
  return mat;
}

/**
 * 装饰内部的小件材质缓存（书脊 / 蘑菇伞盖 / 贴片 / 线段）。
 * 这些材质原先按"每一件"新建：既浪费内存，又会让后续的**按材质合并**被打散成一件一 Mesh。
 */
const pieceMatCache = new Map<string, THREE.Material>();

function cachedPieceMat<T extends THREE.Material>(key: string, make: () => T): T {
  let m = pieceMatCache.get(key) as T | undefined;
  if (!m) {
    m = make();
    m.userData.shared = true; // 跨层复用：清层时不得 dispose
    pieceMatCache.set(key, m);
  }
  return m;
}

export function makeDecorMats(tier: TierTheme): DecorMats {
  const tint = new THREE.Color(tier.floorTint);
  const accent = new THREE.Color(tier.titleCard.main);
  const stone = 0x8a8f88;
  const stoneDark = 0x62665f;
  return {
    wood: grained(new THREE.MeshStandardMaterial({ color: 0x6b4a2a, roughness: 0.85, metalness: 0.05 }), PROP_NOISE.wood, 2),
    woodDark: grained(new THREE.MeshStandardMaterial({ color: 0x47311d, roughness: 0.9, metalness: 0.05 }), PROP_NOISE.wood, 3),
    iron: grained(new THREE.MeshStandardMaterial({ color: 0x3c4147, roughness: 0.5, metalness: 0.8 }), PROP_NOISE.iron, 3, 0.9),
    ironDark: grained(new THREE.MeshStandardMaterial({ color: 0x282c31, roughness: 0.62, metalness: 0.7 }), PROP_NOISE.iron, 3, 0.9),
    stone: grained(new THREE.MeshStandardMaterial({
      color: new THREE.Color(stone).multiply(tint), roughness: 0.82, metalness: 0.06,
    }), PROP_NOISE.stone, 2),
    stoneDark: grained(new THREE.MeshStandardMaterial({
      color: new THREE.Color(stoneDark).multiply(tint), roughness: 0.88, metalness: 0.05,
    }), PROP_NOISE.stone, 2, 0.9),
    bone: grained(new THREE.MeshStandardMaterial({ color: 0xd9d3be, roughness: 0.78, metalness: 0.02 }), PROP_NOISE.stone, 4, 0.7),
    leaf: new THREE.MeshStandardMaterial({ color: 0x4f7a38, roughness: 0.9, metalness: 0.0 }),
    cloth: new THREE.MeshStandardMaterial({
      color: accent, roughness: 0.94, metalness: 0.0, side: THREE.DoubleSide,
    }),
    clothDark: new THREE.MeshStandardMaterial({
      color: accent.clone().multiplyScalar(0.55), roughness: 0.95, metalness: 0.0, side: THREE.DoubleSide,
    }),
    glass: new THREE.MeshStandardMaterial({
      color: 0xbfe8ff, roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.72,
      emissive: new THREE.Color(tier.windowGlow), emissiveIntensity: 0.5,
    }),
    coal: new THREE.MeshStandardMaterial({ color: 0x2a2320, roughness: 0.9, emissive: 0xff5a18, emissiveIntensity: 0.9 }),
    gold: grained(new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xd4af6a).lerp(accent, 0.35), roughness: 0.3, metalness: 0.85,
    }), PROP_NOISE.metal, 2, 0.7),
    ember: new THREE.MeshBasicMaterial({ color: 0xffb45e }),
    accent,
    glowCss: tier.titleCard.glow,
  };
}

// ============ 确定性伪随机 ============

/** 32 位哈希 → [0,1) */
function hash01(...nums: number[]): number {
  let h = 2166136261;
  for (const n of nums) {
    h ^= Math.imul(n | 0, 374761393);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
  }
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** 由 0..1 种子构造确定性随机序列（供构建函数扰动尺寸 / 数量，保证同层稳定） */
export function seededRand(seed: number): () => number {
  return lcg(seed);
}

/** 线性同余发生器（同一 seed 必得同一序列） */
function lcg(seed: number): () => number {
  let s = Math.floor(seed * 4294967296) || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// ============ 放置规划 ============

/** 房间类型 → 陈设池（房间身份感） */
const ROOM_POOL: Record<RoomType, DecorKind[]> = {
  start: ['barrel', 'crate', 'candlestick', 'sack', 'banner'],
  combat: ['rubble', 'crate', 'barrel', 'bones', 'skullPile', 'web', 'floorCrack', 'weaponRack'],
  elite: ['skullPile', 'rubble', 'brazier', 'crate', 'web', 'floorCrack', 'weaponRack'],
  chest: ['crate', 'sack', 'barrel', 'candlestick', 'web', 'puddle'],
  merchant: ['crate', 'barrel', 'sack', 'lantern', 'bookStack'],
  witch: ['urn', 'candlestick', 'skullPile', 'sack', 'puddle', 'web'],
  blacksmith: ['anvil', 'rubble', 'barrel', 'brazier', 'coal'],
  boss: ['skullPile', 'bones', 'brazier', 'urn', 'banner', 'floorCrack'],
  rest: ['bench', 'brazier', 'sack', 'candlestick', 'puddle'],
  end: ['urn', 'candlestick', 'rune', 'crystal', 'banner'],
};

/** 区段主题 → 追加陈设（同区段内一致的地域风貌） */
const TIER_POOL: Record<string, DecorKind[]> = {
  brick: ['web', 'puddle', 'wallCrack', 'sconce'],
  moss: ['mushroom', 'rubble', 'mossPatch', 'web', 'sconce', 'puddle'],
  shelf: ['bookStack', 'candlestick', 'web', 'sconce', 'banner'],
  starstone: ['crystal', 'rune', 'puddle', 'sconce'],
  brass: ['gear', 'lantern', 'brazier', 'sconce'],
  marble: ['urn', 'candlestick', 'rune', 'banner', 'sconce'],
};

/** 房内格子是否被功能性实体占用（陈设必须让开） */
function occupied(room: RoomData): Set<string> {
  const set = new Set<string>();
  for (const e of room.entities) {
    set.add(`${e.x},${e.y}`);
    if (e.kind === 'stair' && e.stairSpan === 2) {
      // 2×2 阶梯整体占位
      for (const [dx, dy] of [[1, 0], [0, 1], [1, 1]]) set.add(`${e.x + dx},${e.y + dy}`);
    }
  }
  return set;
}

/**
 * 规划一个房间的环境陈设。
 * @param density 0 = 关闭；1 = 标准（配置 `render.roomDecorDensity`）
 */
export function planRoomDecor(
  room: RoomData,
  grid: number[][],
  floorId: number,
  tier: TierTheme,
  density = 1,
): RoomDecorItem[] {
  if (density <= 0) return [];
  const rand = lcg(hash01(room.x, room.y, room.width, room.height, floorId, room.type.length));
  const out: RoomDecorItem[] = [];
  const taken = occupied(room);
  const doorInnerKeys = new Set(room.doors.map(d => {
    const p = doorInner(d);
    return `${p.x},${p.y}`;
  }));

  // 池键必须用 `tier.wall`（墙面变体名），而不是 `tier.id`（区段名 base/garden/…）——
  // 用错键会让区段专属陈设与全部墙面挂饰静默失效
  const pool = [...ROOM_POOL[room.type], ...(TIER_POOL[tier.wall] ?? [])];
  const solidPool = pool.filter(k => SOLID.has(k));
  const floorPool = pool.filter(k => ON_FLOOR.has(k));
  const wallPool = pool.filter(k => ON_WALL.has(k));

  // —— 收集「紧邻墙的地板格」——
  const wallSide: { x: number; y: number; nx: number; ny: number; wallH: number }[] = [];
  for (let y = room.y + 1; y < room.y + room.height - 1; y++) {
    for (let x = room.x + 1; x < room.x + room.width - 1; x++) {
      if (grid[y]?.[x] !== 0) continue;
      const key = `${x},${y}`;
      if (taken.has(key) || doorInnerKeys.has(key)) continue;
      for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]] as const) {
        if (grid[y + dy]?.[x + dx] !== 1) continue;
        wallSide.push({ x, y, nx: -dx, ny: -dy, wallH: 0 });
        break;
      }
    }
  }
  if (wallSide.length === 0) return [];

  // —— 立体陈设：按周长定数量，贴墙安放并向房内偏移，保持中间通行区清爽 ——
  const perimeter = (room.width - 2) * 2 + (room.height - 2) * 2;
  const solidCount = solidPool.length === 0
    ? 0
    : Math.max(1, Math.min(5, Math.round((perimeter / 9) * density)));
  const usedCells = new Set<string>();
  let placedSolids = 0;
  let guard = 0;
  while (placedSolids < solidCount && guard++ < 40) {
    const cell = wallSide[Math.floor(rand() * wallSide.length)];
    const key = `${cell.x},${cell.y}`;
    if (usedCells.has(key)) continue;
    usedCells.add(key);
    out.push({
      kind: solidPool[Math.floor(rand() * solidPool.length)],
      wx: cell.x + 0.5 + cell.nx * 0.3,
      wz: cell.y + 0.5 + cell.ny * 0.3,
      yaw: Math.atan2(cell.nx, cell.ny) + (rand() - 0.5) * 0.5,
      seed: rand(),
    });
    placedSolids++;
  }

  // —— 地面贴片：1~2 处，铺在墙根 ——
  const decalCount = room.width * room.height >= 40 ? 2 : 1;
  for (let i = 0; i < decalCount && floorPool.length > 0; i++) {
    const cell = wallSide[Math.floor(rand() * wallSide.length)];
    out.push({
      kind: floorPool[Math.floor(rand() * floorPool.length)],
      wx: cell.x + 0.5 + cell.nx * 0.18,
      wz: cell.y + 0.5 + cell.ny * 0.18,
      yaw: rand() * Math.PI * 2,
      seed: rand(),
    });
  }

  // —— 墙面挂饰：大房间挂 1~2 件（与窗户同一套贴墙逻辑，只取墙面格）——
  if (room.width >= 5 && room.height >= 5 && wallPool.length > 0) {
    const count = room.width * room.height >= 60 ? 2 : 1;
    let placed = 0;
    for (let wy = room.y; wy < room.y + room.height && placed < count; wy++) {
      for (let wx = room.x; wx < room.x + room.width && placed < count; wx++) {
        const onRing = wx === room.x || wx === room.x + room.width - 1
          || wy === room.y || wy === room.y + room.height - 1;
        if (!onRing || grid[wy]?.[wx] !== 1) continue;
        if (rand() > 0.16) continue; // 稀疏
        let nx = 0;
        let nz = 0;
        if (grid[wy + 1]?.[wx] === 0 && wy === room.y) nz = 1;
        else if (grid[wy - 1]?.[wx] === 0 && wy === room.y + room.height - 1) nz = -1;
        else if (grid[wy]?.[wx + 1] === 0 && wx === room.x) nx = 1;
        else if (grid[wy]?.[wx - 1] === 0 && wx === room.x + room.width - 1) nx = -1;
        else continue;
        // 挂饰会贴在这面墙的内侧，若该内侧格被怪物/宝箱/楼梯/NPC 占用（或正对门洞），跳过
        const innerKey = `${wx + nx},${wy + nz}`;
        if (taken.has(innerKey) || doorInnerKeys.has(innerKey)) continue;
        out.push({
          kind: wallPool[Math.floor(rand() * wallPool.length)],
          wx: wx + 0.5 + nx * 0.545, // 与开窗同一套「贴墙内表面」偏移
          wz: wy + 0.5 + nz * 0.545,
          yaw: Math.atan2(nx, nz),
          cellX: wx,
          cellY: wy,
          seed: rand(),
        });
        placed++;
      }
    }
  }
  return out;
}

/**
 * 房间地标：每房至多一件，带强身份感。
 * - Boss 房 → **王座**（北墙中央，面朝房间）
 * - 休整房 → **篝火**（北墙中央）
 * - 大房间 → **吊灯**（房间正上方，不落地、不挡通行）
 * 只放在北墙中央或房间上方，确保不遮挡通行路线与交互物。
 */
export function planRoomLandmark(
  room: RoomData,
  grid: number[][],
  floorId: number,
): RoomDecorItem | null {
  if (room.width < 5 || room.height < 5) return null;
  const rand = lcg(hash01(room.x * 3 + 1, room.y * 5 + 2, room.width, floorId, 90210));
  const taken = occupied(room);
  const cx = room.x + Math.floor(room.width / 2);
  const ny = room.y + 1;
  const free = (x: number, y: number): boolean => grid[y]?.[x] === 0 && !taken.has(`${x},${y}`);
  if (room.type === 'boss' && free(cx, ny)) {
    return { kind: 'throne', wx: cx + 0.5, wz: ny + 0.5 - 0.32, yaw: (rand() - 0.5) * 0.2, seed: rand() };
  }
  if (room.type === 'rest' && free(cx, ny)) {
    return { kind: 'campfire', wx: cx + 0.5, wz: ny + 0.5 - 0.3, yaw: rand() * Math.PI * 2, seed: rand() };
  }
  // 吊灯：只有大房间才挂，且并非每间都挂（否则一层十几盏反而单调）
  if (room.width >= 7 && room.height >= 7 && rand() < 0.34) {
    return {
      kind: 'chandelier',
      wx: room.x + room.width / 2,
      wz: room.y + room.height / 2,
      yaw: rand() * Math.PI * 2,
      seed: rand(),
    };
  }
  return null;
}

// ============ 构建（程序化几何） ============

/** 摆放一个子件（返回该件本身，便于继续调试旋转等） */
function put<T extends THREE.Object3D>(
  g: THREE.Object3D, m: T, x = 0, y = 0, z = 0, shadow = true,
): T {
  m.position.set(x, y, z);
  if (shadow) m.castShadow = true;
  g.add(m);
  return m;
}

/** 按种类构建一件陈设（原点在格中心、y=0 为地面） */
export function buildDecorObject(kind: DecorKind, mats: DecorMats, rand: () => number): THREE.Object3D {
  const g = new THREE.Group();
  switch (kind) {
    case 'barrel': {
      const h = 0.52 + rand() * 0.1;
      put(g, new THREE.Mesh(cyl(0.2, 0.225, h, 20), mats.wood), 0, h / 2, 0);
      // 三道铁箍（Torus 默认在 XY 平面，绕 X 转 90° 后水平）
      for (const y of [h * 0.2, h * 0.5, h * 0.8]) {
        put(g, new THREE.Mesh(torus(0.222, 0.018), mats.iron), 0, y, 0).rotation.x = Math.PI / 2;
      }
      put(g, new THREE.Mesh(cyl(0.19, 0.19, 0.02, 20), mats.woodDark), 0, h, 0, false);
      break;
    }
    case 'bones': {
      // 散落骨骸：几根细骨 + 一颗头骨（贴地堆放）
      for (let i = 0; i < 3; i++) {
        const len = 0.24 + rand() * 0.16;
        const bone = new THREE.Mesh(cyl(0.018, 0.022, len, 8), mats.bone);
        bone.position.set((rand() - 0.5) * 0.4, 0.024, (rand() - 0.5) * 0.4);
        bone.rotation.set(Math.PI / 2, rand() * Math.PI, 0);
        bone.castShadow = true;
        g.add(bone);
      }
      const s = 0.1;
      put(g, new THREE.Mesh(sphere(s), mats.bone), (rand() - 0.5) * 0.3, s, (rand() - 0.5) * 0.3);
      break;
    }
    case 'crate': {
      const s = 0.4 + rand() * 0.1;
      put(g, new THREE.Mesh(roundedBox(s, s, s, 0.02), mats.wood), 0, s / 2, 0);
      // 四角包边
      for (const [sx, sz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]]) {
        put(g, new THREE.Mesh(roundedBox(0.045, s, 0.045, 0.012), mats.woodDark), sx * s * 0.44, s / 2, sz * s * 0.44, false);
      }
      break;
    }
    case 'sack': {
      const s = 0.34 + rand() * 0.1;
      const body = new THREE.Mesh(sphere(s * 0.5, 0, Math.PI * 2, 0, Math.PI * 0.78), mats.wood);
      body.scale.set(1, 1.15, 1);
      put(g, body, 0, s * 0.44, 0);
      put(g, new THREE.Mesh(cyl(0.05, 0.09, 0.12, 12), mats.woodDark), 0, s * 0.9, 0, false);
      break;
    }
    case 'bookStack': {
      const n = 3 + Math.floor(rand() * 3);
      const colors = [0x8a4b3a, 0x55684a, 0x7a5560, 0x4c5a6e, 0x8a6a2e];
      let y = 0;
      for (let i = 0; i < n; i++) {
        const h = 0.05 + rand() * 0.03;
        const color = colors[Math.floor(rand() * colors.length)];
        const mat = cachedPieceMat(`book${color}`, () => grained(new THREE.MeshStandardMaterial({
          color, roughness: 0.88, metalness: 0.02,
        }), PROP_NOISE.wood, 3, 0.6));
        put(g, new THREE.Mesh(roundedBox(0.34, h, 0.24, 0.008), mat), (rand() - 0.5) * 0.05, y + h / 2, (rand() - 0.5) * 0.05);
        g.children[g.children.length - 1].rotation.y = (rand() - 0.5) * 0.5;
        y += h;
      }
      break;
    }
    case 'candlestick': {
      const h = 0.5 + rand() * 0.3;
      put(g, new THREE.Mesh(cyl(0.1, 0.13, 0.04, 20), mats.ironDark), 0, 0.02, 0);
      put(g, new THREE.Mesh(cyl(0.022, 0.03, h, 14), mats.iron), 0, h / 2, 0);
      put(g, new THREE.Mesh(cyl(0.07, 0.05, 0.03, 18), mats.ironDark), 0, h, 0, false);
      put(g, new THREE.Mesh(cyl(0.028, 0.03, 0.11, 12), mats.bone), 0, h + 0.07, 0, false);
      put(g, new THREE.Mesh(sphere(0.028), mats.ember), 0, h + 0.145, 0, false);
      break;
    }
    case 'lantern': {
      const drop = 0.3 + rand() * 0.5;
      put(g, new THREE.Mesh(cyl(0.012, 0.012, drop, 8), mats.ironDark), 0, 2.05 - drop / 2, 0, false);
      const y = 2.05 - drop;
      put(g, new THREE.Mesh(cyl(0.1, 0.12, 0.03, 14), mats.ironDark), 0, y - 0.11, 0, false);
      put(g, new THREE.Mesh(cyl(0.09, 0.11, 0.18, 14), mats.glass), 0, y, 0, false);
      put(g, new THREE.Mesh(cyl(0.115, 0.115, 0.02, 14), mats.iron), 0, y + 0.1, 0, false);
      put(g, new THREE.Mesh(sphere(0.045), mats.ember), 0, y, 0, false);
      break;
    }
    case 'brazier': {
      for (const a of [0, 2.09, 4.19]) {
        const leg = new THREE.Mesh(cyl(0.016, 0.022, 0.3, 10), mats.ironDark);
        leg.position.set(Math.cos(a) * 0.14, 0.15, Math.sin(a) * 0.14);
        leg.rotation.z = Math.cos(a) * 0.18;
        leg.rotation.x = -Math.sin(a) * 0.18;
        leg.castShadow = true;
        g.add(leg);
      }
      put(g, new THREE.Mesh(sphere(0.24, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5), mats.iron), 0, 0.32, 0);
      put(g, new THREE.Mesh(torus(0.235, 0.02), mats.ironDark), 0, 0.4, 0, false);
      for (const m of g.children) if (m instanceof THREE.Mesh && m.geometry.type === 'TorusGeometry') m.rotation.x = Math.PI / 2;
      for (let i = 0; i < 4; i++) {
        put(g, new THREE.Mesh(sphere(0.05 + rand() * 0.03), mats.coal),
          (rand() - 0.5) * 0.2, 0.38 + rand() * 0.04, (rand() - 0.5) * 0.2, false);
      }
      break;
    }
    case 'skullPile': {
      for (let i = 0; i < 4; i++) {
        const s = 0.09 + rand() * 0.04;
        const skull = new THREE.Mesh(sphere(s), mats.bone);
        skull.position.set((rand() - 0.5) * 0.34, s + i * 0.03, (rand() - 0.5) * 0.34);
        skull.rotation.set(rand(), rand(), rand());
        skull.castShadow = true;
        g.add(skull);
      }
      put(g, new THREE.Mesh(cyl(0.06, 0.07, 0.34, 8), mats.bone), 0.16, 0.06, -0.16, false).rotation.z = Math.PI / 2.4;
      break;
    }
    case 'rubble': {
      const n = 4 + Math.floor(rand() * 4);
      for (let i = 0; i < n; i++) {
        const s = 0.1 + rand() * 0.16;
        const m = new THREE.Mesh(roundedBox(s, s * (0.6 + rand() * 0.6), s * (0.7 + rand() * 0.6), 0.014), mats.stoneDark);
        m.position.set((rand() - 0.5) * 0.5, s * 0.3, (rand() - 0.5) * 0.5);
        m.rotation.set(rand() * 0.4, rand() * Math.PI, rand() * 0.4);
        m.castShadow = true;
        g.add(m);
      }
      break;
    }
    case 'mushroom': {
      const n = 3 + Math.floor(rand() * 4);
      const cap = cachedPieceMat(`shroom${rand() < 0.5 ? 'a' : 'b'}`, () => new THREE.MeshStandardMaterial({
        color: rand() < 0.5 ? 0x9c5a46 : 0x7f9a5a, roughness: 0.85,
        emissive: 0x2f5a3a, emissiveIntensity: 0.35,
      }));
      for (let i = 0; i < n; i++) {
        const s = 0.05 + rand() * 0.06;
        const h = 0.12 + rand() * 0.16;
        const x = (rand() - 0.5) * 0.42;
        const z = (rand() - 0.5) * 0.42;
        put(g, new THREE.Mesh(cyl(s * 0.5, s * 0.7, h, 10), mats.bone), x, h / 2, z, false);
        const capMesh = new THREE.Mesh(sphere(s * 1.9, 0, Math.PI * 2, 0, Math.PI * 0.6), cap);
        capMesh.position.set(x, h, z);
        capMesh.castShadow = true;
        g.add(capMesh);
      }
      break;
    }
    case 'crystal': {
      const s = 0.16 + rand() * 0.1;
      const c = new THREE.Mesh(new THREE.OctahedronGeometry(s, 0), mats.glass);
      c.position.y = 0.3;
      c.rotation.set(rand() * 0.4, rand(), rand() * 0.4);
      c.castShadow = true;
      g.add(c);
      put(g, new THREE.Mesh(cyl(0.14, 0.18, 0.1, 12), mats.stoneDark), 0, 0.05, 0, true);
      break;
    }
    case 'gear': {
      const r = 0.2 + rand() * 0.16;
      const body = new THREE.Mesh(torus(r, 0.05), mats.iron);
      body.rotation.x = Math.PI / 2;
      body.position.y = r + 0.08;
      body.castShadow = true;
      g.add(body);
      const teeth = 10;
      for (let i = 0; i < teeth; i++) {
        const a = (Math.PI * 2 * i) / teeth;
        const t = new THREE.Mesh(roundedBox(r * 0.2, 0.07, r * 0.14, 0.01), mats.iron);
        t.position.set(Math.cos(a) * r, r + 0.08, Math.sin(a) * r);
        t.rotation.y = -a;
        g.add(t);
      }
      put(g, new THREE.Mesh(cyl(0.05, 0.06, 0.1, 10), mats.ironDark), 0, r + 0.08, 0, false).rotation.x = Math.PI / 2;
      break;
    }
    case 'urn': {
      const h = 0.36 + rand() * 0.16;
      const body = new THREE.Mesh(sphere(h * 0.42, 0, Math.PI * 2, 0, Math.PI * 0.85), mats.stone);
      body.scale.set(1, 1.25, 1);
      put(g, body, 0, h * 0.52, 0);
      put(g, new THREE.Mesh(cyl(0.09, 0.13, 0.09, 14), mats.stoneDark), 0, h * 0.94, 0, false);
      put(g, new THREE.Mesh(cyl(0.17, 0.19, 0.05, 16), mats.stoneDark), 0, 0.025, 0, true);
      break;
    }
    case 'bench': {
      put(g, new THREE.Mesh(roundedBox(0.86, 0.07, 0.3, 0.02), mats.wood), 0, 0.26, 0);
      for (const sx of [-1, 1]) {
        put(g, new THREE.Mesh(roundedBox(0.07, 0.26, 0.26, 0.014), mats.woodDark), sx * 0.36, 0.13, 0, false);
      }
      break;
    }
    case 'anvil': {
      put(g, new THREE.Mesh(roundedBox(0.4, 0.12, 0.2, 0.02), mats.iron), 0, 0.32, 0);
      put(g, new THREE.Mesh(roundedBox(0.16, 0.2, 0.14, 0.02), mats.ironDark), 0, 0.16, 0, false);
      put(g, new THREE.Mesh(roundedBox(0.42, 0.08, 0.26, 0.02), mats.woodDark), 0, 0.04, 0, true);
      break;
    }
    case 'coal': {
      for (let i = 0; i < 5; i++) {
        const s = 0.06 + rand() * 0.08;
        put(g, new THREE.Mesh(roundedBox(s, s * 0.7, s, 0.012), mats.coal),
          (rand() - 0.5) * 0.34, s * 0.35, (rand() - 0.5) * 0.34, false);
      }
      break;
    }
    case 'banner': {
      // 尺寸收在「挂在墙腰、不拖到地面」的范围（墙高仅 0.9~1.4 世界单位）
      const w = 0.44;
      const h = 0.82;
      const cloth = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mats.cloth);
      cloth.position.set(0, 0, 0.012);
      g.add(cloth);
      // 顶部横杆 + 两端球饰
      const rod = new THREE.Mesh(cyl(0.022, 0.022, w + 0.16, 10), mats.ironDark);
      rod.rotation.z = Math.PI / 2;
      rod.position.y = h / 2 + 0.02;
      rod.castShadow = true;
      g.add(rod);
      for (const sx of [-1, 1]) put(g, new THREE.Mesh(sphere(0.035), mats.iron), sx * (w / 2 + 0.08), h / 2 + 0.02, 0, false);
      // 下摆三角（深色）
      const tail = new THREE.Mesh(new THREE.PlaneGeometry(w, 0.26), mats.clothDark);
      tail.position.set(0, -h / 2 - 0.02, 0.012);
      tail.rotation.z = Math.PI;
      g.add(tail);
      break;
    }
    case 'sconce': {
      put(g, new THREE.Mesh(roundedBox(0.09, 0.16, 0.06, 0.012), mats.ironDark), 0, -0.02, 0.03, false);
      put(g, new THREE.Mesh(cyl(0.03, 0.045, 0.1, 12), mats.ironDark), 0, 0.1, 0.12, false);
      put(g, new THREE.Mesh(cyl(0.024, 0.026, 0.13, 10), mats.bone), 0, 0.22, 0.12, false);
      put(g, new THREE.Mesh(sphere(0.03), mats.ember), 0, 0.3, 0.12, false);
      break;
    }
    case 'web': {
      const size = 0.5 + rand() * 0.25;
      const pts: number[] = [];
      const spokes = 5;
      for (let i = 0; i < spokes; i++) {
        const a = (Math.PI / 2) * (i / (spokes - 1));
        pts.push(0, 0, 0, Math.cos(a) * size, -Math.sin(a) * size, 0);
      }
      for (let r = 1; r <= 3; r++) {
        const rr = (size * r) / 3;
        for (let i = 0; i < spokes - 1; i++) {
          const a0 = (Math.PI / 2) * (i / (spokes - 1));
          const a1 = (Math.PI / 2) * ((i + 1) / (spokes - 1));
          pts.push(Math.cos(a0) * rr, -Math.sin(a0) * rr, 0, Math.cos(a1) * rr, -Math.sin(a1) * rr, 0);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
      g.add(new THREE.LineSegments(geo, cachedPieceMat('webLine', () =>
        new THREE.LineBasicMaterial({ color: 0xd8d8d8, transparent: true, opacity: 0.32 }))));
      break;
    }
    case 'wallCrack': {
      const pts: number[] = [];
      let x = 0;
      let y = 0.5;
      for (let i = 0; i < 7; i++) {
        const nx = x + (rand() - 0.5) * 0.26;
        const ny = y - 0.16 - rand() * 0.1;
        pts.push(x, y, 0, nx, ny, 0);
        x = nx;
        y = ny;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
      g.add(new THREE.LineSegments(geo, cachedPieceMat('crackLine', () =>
        new THREE.LineBasicMaterial({ color: 0x0a0d12, transparent: true, opacity: 0.5 }))));
      break;
    }
    case 'puddle': {
      const r = 0.26 + rand() * 0.16;
      const m = new THREE.Mesh(new THREE.CircleGeometry(r, 26), cachedPieceMat('puddle', () =>
        new THREE.MeshStandardMaterial({
          color: 0x2a3a44, roughness: 0.12, metalness: 0.35,
          transparent: true, opacity: 0.72, depthWrite: false,
        })));
      m.rotation.x = -Math.PI / 2;
      m.position.y = 0.012;
      g.add(m);
      break;
    }
    case 'mossPatch': {
      const r = 0.24 + rand() * 0.2;
      const m = new THREE.Mesh(new THREE.CircleGeometry(r, 20), cachedPieceMat('moss', () =>
        new THREE.MeshStandardMaterial({
          color: 0x4a7038, roughness: 0.95, transparent: true, opacity: 0.6, depthWrite: false,
        })));
      m.rotation.x = -Math.PI / 2;
      m.position.y = 0.01;
      g.add(m);
      break;
    }
    case 'floorCrack': {
      const pts: number[] = [];
      let x = -0.3;
      let z = (rand() - 0.5) * 0.3;
      for (let i = 0; i < 6; i++) {
        const nx = x + 0.12;
        const nz = z + (rand() - 0.5) * 0.22;
        pts.push(x, 0.014, z, nx, 0.014, nz);
        x = nx;
        z = nz;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
      g.add(new THREE.LineSegments(geo, cachedPieceMat('floorCrackLine', () =>
        new THREE.LineBasicMaterial({ color: 0x0b0e13, transparent: true, opacity: 0.55 }))));
      break;
    }
    case 'rune': {
      const r = 0.3;
      const m = new THREE.Mesh(new THREE.RingGeometry(r * 0.72, r, 28), cachedPieceMat(`rune${mats.accent.getHexString()}`, () =>
        new THREE.MeshBasicMaterial({
          color: mats.accent, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending,
          depthWrite: false, side: THREE.DoubleSide,
        })));
      m.rotation.x = -Math.PI / 2;
      m.position.y = 0.014;
      g.add(m);
      break;
    }
    case 'weaponRack': {
      // 武器架：两立柱 + 两道横梁 + 剑 / 斧 / 长矛
      const h = 0.86;
      for (const sx of [-1, 1]) put(g, new THREE.Mesh(roundedBox(0.08, h, 0.08, 0.018), mats.woodDark), sx * 0.3, h / 2, 0);
      for (const y of [h * 0.4, h * 0.82]) {
        put(g, new THREE.Mesh(roundedBox(0.68, 0.06, 0.07, 0.014), mats.wood), 0, y, 0, false);
      }
      put(g, new THREE.Mesh(roundedBox(0.05, 0.48, 0.02, 0.008), mats.iron), -0.18, h * 0.66, 0.06, false);
      put(g, new THREE.Mesh(roundedBox(0.15, 0.03, 0.04, 0.008), mats.ironDark), -0.18, h * 0.44, 0.06, false);
      put(g, new THREE.Mesh(cyl(0.018, 0.018, 0.5, 8), mats.wood), 0.02, h * 0.62, 0.06, false);
      put(g, new THREE.Mesh(roundedBox(0.16, 0.13, 0.03, 0.012), mats.iron), 0.1, h * 0.8, 0.06, false);
      put(g, new THREE.Mesh(cyl(0.014, 0.014, 0.7, 8), mats.wood), 0.2, h * 0.6, 0.06, false);
      put(g, new THREE.Mesh(new THREE.OctahedronGeometry(0.045, 0), mats.iron), 0.2, h * 0.95, 0.06, false);
      break;
    }
    case 'throne': {
      // 王座：石基 + 木座 + 高靠背 + 金饰（Boss 房地标，靠北墙面向房间）
      const seatH = 0.34;
      put(g, new THREE.Mesh(roundedBox(0.68, 0.08, 0.62, 0.02), mats.stoneDark), 0, 0.04, 0);
      put(g, new THREE.Mesh(roundedBox(0.58, 0.12, 0.52, 0.02), mats.woodDark), 0, seatH, 0);
      put(g, new THREE.Mesh(roundedBox(0.58, 0.92, 0.12, 0.032), mats.woodDark), 0, seatH + 0.46, -0.22);
      for (const sx of [-1, 1]) {
        put(g, new THREE.Mesh(roundedBox(0.1, 0.26, 0.5, 0.02), mats.woodDark), sx * 0.25, seatH + 0.19, 0.02, false);
        put(g, new THREE.Mesh(sphere(0.045), mats.gold), sx * 0.25, seatH + 0.07, 0.24, false);
      }
      put(g, new THREE.Mesh(roundedBox(0.5, 0.08, 0.06, 0.02), mats.gold), 0, seatH + 0.86, -0.16, false);
      put(g, new THREE.Mesh(new THREE.OctahedronGeometry(0.075, 0), mats.gold), 0, seatH + 1.0, -0.2, false);
      break;
    }
    case 'campfire': {
      // 篝火：石圈 + 交叠木柴 + 余烬（休整房地标）
      for (let i = 0; i < 8; i++) {
        const a = (Math.PI * 2 * i) / 8;
        const s = 0.1 + rand() * 0.04;
        const st = new THREE.Mesh(roundedBox(s, s * 0.7, s, 0.016), mats.stone);
        st.position.set(Math.cos(a) * 0.34, s * 0.34, Math.sin(a) * 0.34);
        st.rotation.y = rand() * Math.PI;
        st.castShadow = true;
        g.add(st);
      }
      for (let i = 0; i < 4; i++) {
        const a = (Math.PI * 2 * i) / 4 + 0.3;
        const log = new THREE.Mesh(cyl(0.035, 0.04, 0.46, 10), mats.wood);
        log.position.set(Math.cos(a) * 0.1, 0.2, Math.sin(a) * 0.1);
        log.rotation.set(Math.cos(a) * 0.5, 0, -Math.sin(a) * 0.5);
        log.castShadow = true;
        g.add(log);
      }
      put(g, new THREE.Mesh(sphere(0.1), mats.ember), 0, 0.16, 0, false);
      put(g, new THREE.Mesh(sphere(0.06), mats.coal), 0.06, 0.1, -0.05, false);
      break;
    }
    case 'chandelier': {
      // 吊灯：吊链 + 铁环 + 六支蜡烛（悬于大房间上方）
      const ringR = 0.42 + rand() * 0.14;
      put(g, new THREE.Mesh(cyl(0.015, 0.015, 0.95, 8), mats.ironDark), 0, 0.64, 0, false);
      const ring = new THREE.Mesh(torus(ringR, 0.028), mats.iron);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.16;
      ring.castShadow = true;
      g.add(ring);
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI * 2 * i) / 6;
        put(g, new THREE.Mesh(cyl(0.022, 0.026, 0.1, 10), mats.bone),
          Math.cos(a) * ringR, 0.22, Math.sin(a) * ringR, false);
        put(g, new THREE.Mesh(sphere(0.026), mats.ember),
          Math.cos(a) * ringR, 0.285, Math.sin(a) * ringR, false);
      }
      break;
    }
    default:
      break;
  }
  return g;
}

/** 该种类是否为立体陈设（决定是否需要贴地阴影与是否遮挡） */
export function isSolidDecor(kind: DecorKind): boolean {
  return SOLID.has(kind);
}
