/**
 * 预制地图（Prefab Map）支持 —— 为手工设计的固定地图准备。
 * 房间编辑器（`ui/RoomEditor.ts`，F2 开关）的导出格式即此；用法见 `docs/房间编辑器.md`。
 *
 * 字符图例（rows 中每个字符 = 一格）：
 *   地形：'0' 或 ' ' = 空地 · '1' = 墙壁 · 'p' = 柱子（阻挡装饰） · 'x' = 悬崖（深渊）
 *   实体：'2' = 普通怪（按楼层权重随机） · '3' = 精英怪 · '4' = 宝箱 · 'g' = 大宝箱 ·
 *        'r' = 遗物宝箱 · '5' = 商人NPC · 'w' = 女巫NPC · 'k' = 铁匠NPC · 'u' = 引导者NPC ·
 *        'B' = Boss（固定 ancient_dragon） · 'D' = 通往下一层的楼梯 · 'q' = 药水 ·
 *        'f' = 治疗泉 · 'o' = 熬药大锅 · 'h' = 药架
 *   装饰：'t' = 火把（挂墙） · 'c' = 地毯（不阻挡）
 *   标记：'S' = 玩家入口（可省略，默认第一个房间中心）
 *   其他字符 = 按墙壁处理（并输出警告）
 *
 * 重要约定：
 *   1. 只有字符图中用空地实际连通的房间才算连通。房间矩形只是标注（用于房间名/类型/进入检测），
 *      两房间即使相邻，若中间没有可通行的地面格，则不生成连接。连通性由网格 BFS 实测得出。
 *   2. **方向是一等公民**：`PrefabRoomDef.entry`（入口方向）/ `exits`（出口方向）由编辑器显式记录。
 *      出口不同 → 玩家进入侧与去路不同 → 主路径、守军摆位、装饰朝向都应随之不同（详见文档 §方向语义）。
 */
import type { Direction, ExitPattern, FloorKind, FloorMap, MapEntity, RoomData, RoomDoor, RoomType, TileCode } from '../types';
import { dataManager } from '../core/DataManager';
import { IdGenerator } from '../utils/IdGenerator';
import { rng } from '../utils/MathUtils';
import { Logger } from '../utils/Logger';
import { patternFromExits } from './ExitPattern';

/** 预制地图中的一个房间标注（网格坐标，含于字符图同坐标系） */
export interface PrefabRoomDef {
  x: number;
  y: number;
  w: number;
  h: number;
  type: RoomType;
  name?: string;
  /**
   * 出口方向（编辑器显式记录；缺省则由网格实际门口按墙推导）。
   * 与网格不一致时输出警告——方向是设计输入，不应只是"事后观察到的事实"。
   */
  exits?: Direction[];
  /** 入口方向（玩家从哪边进房）→ 写入 `RoomData.fromDirection`，供主路径/守军朝向使用 */
  entry?: Direction;
  /**
   * 通口类型（由 `exits` 判定，见 `ExitPattern.ts`）。编辑器导出时写入，
   * 与 `type` 一起作为「从手工房间库抽取」的键。
   */
  pattern?: ExitPattern;
  /**
   * 风险档 1~3（可选）：预制房的内容是手绘的、不经过 `ContentFiller`，
   * 因此风险必须显式标注；标了以后房内普通宝箱按同一 `rewardMul` 结算（与自动生成房同源）。
   */
  risk?: 1 | 2 | 3;
  /**
   * 张力值（可选）：本房对路径张力的贡献，与 `mapGeneration.tension.weights` **同一尺度**
   * （正=加压 / 负=泄压）。省略时取该 `type` 的默认权重——显式标注用于让手工房偏离房型默认。
   */
  tension?: number;
  /** 设计备注（编辑器里写意图；运行时忽略） */
  note?: string;
}

/** 预制地图定义 */
export interface PrefabMapDef {
  floorId: number;
  kind?: FloorKind;
  /** 字符行数组，每行等宽（可不等宽，短行右侧按墙壁补齐） */
  rows: string[];
  /** 房间标注列表 */
  rooms: PrefabRoomDef[];
  /** 玩家入口（省略则用 'S' 或第一个房间中心） */
  entry?: { x: number; y: number };
}

/**
 * 解析房间的**张力值贡献**：显式 `tension` 优先，否则回退到房型默认权重
 * （读 `mapGeneration.tension.weights`，与 `FloorGenerator` 的运气平衡器同源，避免两处各写一份）。
 */
export function resolveRoomTension(type: RoomType, explicit?: number | null): number {
  if (typeof explicit === 'number' && Number.isFinite(explicit)) return explicit;
  return dataManager.mapGen.tension.weights[type] ?? 0;
}

const DIRS: { d: Direction; dx: number; dy: number }[] = [
  { d: 'north', dx: 0, dy: -1 },
  { d: 'south', dx: 0, dy: 1 },
  { d: 'west', dx: -1, dy: 0 },
  { d: 'east', dx: 1, dy: 0 },
];

/** 解析字符行 → 网格 + 实体 */
function parseRows(rows: string[], floorId: number): { grid: TileCode[][]; entities: MapEntity[] } {
  const height = rows.length;
  const width = Math.max(...rows.map(r => r.length));
  const grid: TileCode[][] = Array.from({ length: height }, () => Array<TileCode>(width).fill(1));
  const entities: MapEntity[] = [];

  const monsterPool = dataManager.monsters.monsters.filter(
    m => m.category === 'normal' && floorId >= m.floorMin && floorId <= m.floorMax,
  );

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const ch = rows[y][x] ?? '1';
      switch (ch) {
        case '0': case ' ':
          grid[y][x] = 0;
          break;
        case '1':
          grid[y][x] = 1;
          break;
        case '2': case '3': {
          grid[y][x] = 0;
          if (monsterPool.length === 0) break;
          const def = rng.pickWeighted(monsterPool, m => m.weight);
          entities.push({
            id: IdGenerator.next('ent'), kind: 'monster', x, y,
            monsterId: def.id, isElite: ch === '3',
          });
          break;
        }
        case '4':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'chest', x, y, chestTier: 'normal' });
          break;
        case '5':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'npc', x, y, npcId: 'npc_merchant' });
          break;
        case 'B':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'boss', x, y, monsterId: 'ancient_dragon' });
          break;
        case 'D':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'stair', x, y, targetFloor: floorId + 1 });
          break;
        case 'S':
          grid[y][x] = 0;
          break;
        case 'p': // 柱子（阻挡装饰 → 地形 2）
          grid[y][x] = 2;
          entities.push({ id: IdGenerator.next('ent'), kind: 'pillar', x, y });
          break;
        case 'x': // 悬崖 / 深渊（地形 4，不可通行、不绘制地板）
          grid[y][x] = 4;
          break;
        case 'g': case 'r': // 大宝箱 / 遗物宝箱（三档造型见 ThreeRenderer.buildChest）
          grid[y][x] = 0;
          entities.push({
            id: IdGenerator.next('ent'), kind: 'chest', x, y,
            chestTier: ch === 'g' ? 'grand' : 'relic',
          });
          break;
        case 't': // 火把：置为墙格并挂墙（与 ContentFiller.placeRoomTorches 的落点约定一致）
          grid[y][x] = 1;
          entities.push({ id: IdGenerator.next('ent'), kind: 'torch', x, y });
          break;
        case 'c': // 地毯（地面装饰，不阻挡）
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'carpet', x, y });
          break;
        case 'w': case 'k': case 'u': // 女巫 / 铁匠 / 引导者
          grid[y][x] = 0;
          entities.push({
            id: IdGenerator.next('ent'), kind: 'npc', x, y,
            npcId: ch === 'w' ? 'npc_witch' : ch === 'k' ? 'npc_blacksmith' : 'npc_guide',
          });
          break;
        case 'q': { // 药水：档次取该楼层可用的最高档（与 ChestSystem.potionTierForFloor 同规则）
          grid[y][x] = 0;
          const best = dataManager.potions.potions
            .filter(p => floorId >= p.minFloor && floorId <= p.maxFloor)
            .sort((a, b) => b.healPct - a.healPct)[0];
          entities.push({ id: IdGenerator.next('ent'), kind: 'potion', x, y, potionTier: best?.tier ?? 'normal' });
          break;
        }
        case 'f': // 治疗泉
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'fountain', x, y });
          break;
        case 'o': // 熬药大锅（阻挡）
          grid[y][x] = 2;
          entities.push({ id: IdGenerator.next('ent'), kind: 'cauldron', x, y });
          break;
        case 'h': // 药架（阻挡）
          grid[y][x] = 2;
          entities.push({ id: IdGenerator.next('ent'), kind: 'shelf', x, y });
          break;
        default:
          Logger.warn(`[Prefab] 楼层${floorId} (${x},${y}) 非法字符 '${ch}'，按墙壁处理`);
          grid[y][x] = 1;
          break;
      }
    }
  }
  return { grid, entities };
}

/** 房间标注 → RoomData（含门检测：房间边界上与外部空地相邻的地面格） */
function buildRooms(defs: PrefabRoomDef[], floorId: number, entities: MapEntity[], grid: TileCode[][]): RoomData[] {
  const roomAt = (x: number, y: number): RoomData | null =>
    defs.reduce<RoomData | null>((acc, r, i) => {
      if (acc) return acc;
      if (x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h) {
        return { id: `pf${floorId}_r${i}` } as RoomData;
      }
      return null;
    }, null);

  return defs.map((r, i) => {
    const roomId = `pf${floorId}_r${i}`;
    const isInside = (x: number, y: number) => x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h;
    const doors: RoomDoor[] = [];
    // 边界一圈：地面格且正交相邻的房格外空地 → 门（指向该格所属房间）
    for (let y = r.y; y < r.y + r.h; y++) {
      for (let x = r.x; x < r.x + r.w; x++) {
        const onEdge = x === r.x || x === r.x + r.w - 1 || y === r.y || y === r.y + r.h - 1;
        if (!onEdge || grid[y]?.[x] !== 0) continue;
        for (const { d, dx, dy } of DIRS) {
          const ox = x + dx;
          const oy = y + dy;
          if (isInside(ox, oy)) continue;
          if (grid[oy]?.[ox] !== 0) continue;
          doors.push({ x, y, direction: d, toRoomId: roomAt(ox, oy)?.id ?? '' });
        }
      }
    }
    // 方向一致性校验：显式 exits 必须与网格实际门口一致（方向是设计输入，不是事后观察）
    if (r.exits && r.exits.length > 0) {
      const derived = new Set(doors.map(d => d.direction));
      for (const d of r.exits) {
        if (!derived.has(d)) Logger.warn(`[Prefab] 房间 ${roomId} 声明出口「${d}」但网格上无对应门口`);
      }
      for (const d of derived) {
        if (!r.exits.includes(d)) Logger.warn(`[Prefab] 房间 ${roomId} 网格上有「${d}」向门口但未在 exits 中声明`);
      }
    }

    const mine = entities.filter(e => e.x >= r.x && e.x < r.x + r.w && e.y >= r.y && e.y < r.y + r.h);
    // 风险-收益：显式标注的风险档 → 房内普通宝箱按同一倍率结算（与 ContentFiller 同源，relic 宝箱自带三选一）
    const rewardMul = dataManager.mapGen.content.risk.rewardMul;
    if (r.risk) {
      for (const e of mine) {
        if (e.kind === 'chest' && e.chestTier !== 'relic') {
          e.riskTier = r.risk;
          e.rewardMul = rewardMul[r.risk - 1] ?? 1;
        }
      }
    }

    const room: RoomData = {
      id: roomId,
      floorId,
      type: r.type,
      order: i,
      gx: r.x,
      gy: r.y,
      width: r.w,
      height: r.h,
      x: r.x,
      y: r.y,
      centerX: r.x + Math.floor(r.w / 2),
      centerY: r.y + Math.floor(r.h / 2),
      // 入口方向由编辑器显式给出（缺省 null）；出口方向体现为 doors 的 direction 集合
      fromDirection: r.entry ?? null,
      depth: 0,
      onPathA: false,
      onPathB: false,
      mountedOn: null,
      doors,
      entities: mine,
    };
    if (r.risk) {
      room.risk = r.risk;
      room.rewardMul = rewardMul[r.risk - 1] ?? 1;
    }
    // 张力值：显式标注优先，否则按房型默认权重解析成具体数值（后续「房间类型决定」直接读这个值）
    room.tension = resolveRoomTension(r.type, r.tension);
    // 通口类型：显式 exits 优先，否则由网格实际门口方向反推（空集则不标注）
    const patternDirs = r.exits && r.exits.length > 0 ? r.exits : doors.map(d => d.direction);
    if (patternDirs.length > 0) room.pattern = patternFromExits(patternDirs);
    return room;
  });
}

/** 在网格上做 BFS：返回从 (sx,sy) 出发可达的所有空地格 */
function reachableTiles(grid: TileCode[][], sx: number, sy: number): Set<string> {
  const seen = new Set<string>();
  if (grid[sy]?.[sx] !== 0) return seen;
  const queue: { x: number; y: number }[] = [{ x: sx, y: sy }];
  seen.add(`${sx},${sy}`);
  while (queue.length > 0) {
    const cur = queue.shift()!;
    for (const { dx, dy } of DIRS) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (seen.has(key)) continue;
      if (grid[ny]?.[nx] !== 0) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  return seen;
}

/**
 * 预制地图 → FloorMap。
 * 连接（connections）按实际可通行路径计算：从每个房间中心 BFS，
 * 能走到的其他房间才算连通 —— 相邻但无通道的房间不会被误连。
 */
export function buildPrefabFloor(def: PrefabMapDef): FloorMap {
  const { grid, entities } = parseRows(def.rows, def.floorId);
  const width = grid[0]?.length ?? 0;
  const height = grid.length;

  // 未标注的入口：'S' 字符位置（parseRows 不记录，这里再扫一遍）
  let entry = def.entry ?? null;
  if (!entry) {
    for (let y = 0; y < height && !entry; y++) {
      for (let x = 0; x < width && !entry; x++) {
        if ((def.rows[y]?.[x] ?? '1') === 'S') entry = { x, y };
      }
    }
  }

  const rooms = buildRooms(def.rooms, def.floorId, entities, grid);
  if (rooms.length === 0) throw new Error(`[Prefab] 楼层${def.floorId} 未定义任何房间`);

  // 入口落点：entry → 'S' → 第一个房间中心（都要求是空地）
  const entryPoint = [entry, rooms[0] ? { x: rooms[0].centerX, y: rooms[0].centerY } : null]
    .find((p): p is { x: number; y: number } => !!p && grid[p.y]?.[p.x] === 0);
  if (!entryPoint) throw new Error(`[Prefab] 楼层${def.floorId} 入口无效（必须是空地）`);

  // 实体归属：落在任何房间矩形外的实体挂到最近房间（否则 WorldManager 查询不到）
  for (const e of entities) {
    const inRoom = rooms.some(r => e.x >= r.x && e.x < r.x + r.width && e.y >= r.y && e.y < r.y + r.height);
    if (inRoom) continue;
    let nearest = rooms[0];
    let best = Infinity;
    for (const r of rooms) {
      const d = Math.abs(r.centerX - e.x) + Math.abs(r.centerY - e.y);
      if (d < best) { best = d; nearest = r; }
    }
    Logger.warn(`[Prefab] 楼层${def.floorId} 实体 ${e.id} (${e.x},${e.y}) 在所有房间外，挂到 ${nearest.id}`);
    nearest.entities.push(e);
  }

  // 连接：从每个房间中心 BFS，可达的其他房间中心 → 连通
  const connections: { from: string; to: string }[] = [];
  const seenPairs = new Set<string>();
  for (const r of rooms) {
    const start = grid[r.centerY]?.[r.centerX] === 0
      ? { x: r.centerX, y: r.centerY }
      : rooms.map(rr => ({ x: rr.centerX, y: rr.centerY })).find(p => grid[p.y]?.[p.x] === 0);
    if (!start) continue;
    const reach = reachableTiles(grid, start.x, start.y);
    for (const other of rooms) {
      if (other.id === r.id) continue;
      if (grid[other.centerY]?.[other.centerX] !== 0) continue;
      if (!reach.has(`${other.centerX},${other.centerY}`)) continue;
      const key = [r.id, other.id].sort().join('|');
      if (seenPairs.has(key)) continue;
      seenPairs.add(key);
      connections.push({ from: r.id, to: other.id });
    }
  }

  return {
    floorId: def.floorId,
    kind: def.kind ?? 'normal',
    rooms,
    corridors: [], // 预制地图的走廊直接体现在网格空地里，无需单独数据
    connections,
    grid,
    width,
    height,
    entryX: entryPoint.x,
    entryY: entryPoint.y,
  };
}
