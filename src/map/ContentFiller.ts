/**
 * 第5层：内容填充器（房间设计原则完整文档 v1.0）
 *
 * 核心原则：必须换血 / 不可绕过 / 风险收益对应 / 房间有身份感。
 * 阻塞模式（文档二）：
 *   挡路型 —— 战斗房/精英房：入口→出口主路径中段架一道屏障（怪物 + 柱子补满），必须打掉才能过
 *   围宝型 —— 宝箱房/精英房：怪物占据宝箱邻格
 *   守卫型 —— 终点房/Boss房：楼梯、Boss 前方放怪
 * 物品清单（文档四 4.1）：按房间类型 + 深度从 mapGeneration.content 读取。
 * 装饰：火把（房间四角/门两侧 + 走廊每4格）、柱子（宽≥7房间四角）、地毯（宝箱/Boss 下方）。
 */
import type { CorridorData, FloorKind, MapEntity, PotionTier, RoomData, TileCode } from '../types';
import { dataManager } from '../core/DataManager';
import type { ContentBand, MapGenConfig } from '../core/DataManager';
import { rng } from '../utils/MathUtils';
import { IdGenerator } from '../utils/IdGenerator';
import { StatCalculator } from '../utils/StatCalculator';
import { isTierStartFloor } from '../data/tiers';
import type { MonsterStats } from '../types';
import { DIRS4, manhattan, doorInner, cellKey, ptKey, type Pt } from '../utils/Grid';

interface Spot {
  x: number;
  y: number;
  /** 距最近门（入口）的 BFS 距离 */
  dist: number;
}

/** 平面坐标（`utils/Grid.Pt` 的本地别名，避免重复声明） */
type P = Pt;

/** 参与「风险-收益」分层的房型（安全房不设风险，避免误导路线选择） */
const RISK_ROOM_TYPES = new Set<RoomData['type']>(['combat', 'elite', 'chest', 'boss']);

interface PoolEntry {
  id: string;
  weight: number;
}

/**
 * 单个房间的填充上下文。
 * 统一管理：可通行判断、占位记录、地形改动（柱子）、路径计算、各类放置方法。
 */
class RoomFill {
  readonly room: RoomData;
  private readonly grid: TileCode[][];
  private readonly floorId: number;
  private readonly spots: Spot[];
  private readonly taken = new Set<string>();

  constructor(room: RoomData, grid: TileCode[][], floorId: number) {
    this.room = room;
    this.grid = grid;
    this.floorId = floorId;
    this.spots = this.computeSpots();
  }

  // ============ 基础 ============

  /** 放置实体（不做占位校验；调用方用 freeAt / taken 自行判断） */
  put(e: Omit<MapEntity, 'id'>): void {
    this.room.entities.push({ ...e, id: IdGenerator.next('ent') });
    this.taken.add(`${e.x},${e.y}`);
  }

  /** 放置阻挡型装饰（柱子/大锅/药架）：实体 + 地形改为装饰格（阻挡通行） */
  private putBlocking(kind: MapEntity['kind'], x: number, y: number): void {
    this.put({ kind, x, y });
    if (this.grid[y]?.[x] === 0) this.grid[y][x] = 2;
  }

  /** 该格是否可放主实体（空地 + 未被占 + 无既有实体） */
  freeAt(x: number, y: number): boolean {
    if (this.grid[y]?.[x] !== 0) return false;
    if (this.taken.has(cellKey(x, y))) return false;
    return !this.room.entities.some(en => en.x === x && en.y === y);
  }

  inRoom(x: number, y: number): boolean {
    return x >= this.room.x && x < this.room.x + this.room.width
      && y >= this.room.y && y < this.room.y + this.room.height;
  }

  /**
   * 下行楼梯贴墙放置（2×2）：贴北墙、水平居中，逐格外移避开所有门的内侧格
   * （防止从门进来第一格就踩到楼梯直接下落）。放不下返回 false，由调用方兜底。
   */
  placeStairAgainstWall(targetFloor: number): boolean {
    const ay = this.room.y + 1; // 第一行地面格，紧贴上墙
    const doorInners = new Set(this.room.doors.map(d => {
      const p = doorInner(d);
      return ptKey(p);
    }));
    for (let step = 0; step <= this.room.width; step++) {
      const off = step === 0 ? 0 : (step % 2 === 1 ? (step + 1) / 2 : -(step / 2));
      const ax = this.room.centerX - 1 + off;
      if (ax < this.room.x + 1 || ax + 1 > this.room.x + this.room.width - 2) continue;
      const cells = [0, 1].flatMap(dz => [0, 1].map(dx => ({ x: ax + dx, y: ay + dz })));
      if (!cells.every(p => this.freeAt(p.x, p.y))) continue;
      if (cells.some(p => doorInners.has(ptKey(p)))) continue;
      this.put({ kind: 'stair', x: ax, y: ay, targetFloor, stairSpan: 2 });
      this.put({ kind: 'stair', x: ax + 1, y: ay, targetFloor, stairSpan: 1 });
      this.put({ kind: 'stair', x: ax, y: ay + 1, targetFloor, stairSpan: 1 });
      this.put({ kind: 'stair', x: ax + 1, y: ay + 1, targetFloor, stairSpan: 1 });
      return true;
    }
    return false;
  }

  /** 放置怪物：按房间深度计算属性并随实体存储（P0-1/P0-2；战斗时优先读取） */
  private monsterAt(id: string, isElite: boolean, p: P): void {
    const def = dataManager.getMonster(id);
    const stats: MonsterStats | undefined = def
      ? StatCalculator.getInstance().monsterStats(def, this.floorId, isElite, this.room.depth)
      : undefined;
    this.put({ kind: 'monster', monsterId: id, isElite, x: p.x, y: p.y, depth: this.room.depth, stats });
  }

  /** 当前怪物数（密度上限校验用） */
  monsterCount(): number {
    return this.room.entities.filter(e => e.kind === 'monster' || e.kind === 'boss').length;
  }

  /** (x,y) 曼哈顿 radius 格内是否有怪物/Boss */
  monsterNear(x: number, y: number, radius: number): boolean {
    return this.room.entities.some(e =>
      (e.kind === 'monster' || e.kind === 'boss')
      && manhattan(e, { x, y }) <= radius);
  }

  /**
   * 覆盖式守卫放置（P1-4）：在能同时守护最多目标点（曼哈顿≤radius）的空格放 1 只怪。
   * 5×5 宝箱房的宝箱在内角，两只同墙宝箱的墙中点可一格双守（中心格罩不到角落）。
   * 返回是否放置成功。
   */
  placeGuardCovering(targets: P[], pool: PoolEntry[], radius: number): boolean {
    if (pool.length === 0 || targets.length === 0) return false;
    let best: P | null = null;
    let bestCover = 0;
    for (const s of this.spots) {
      if (!this.freeAt(s.x, s.y)) continue;
      let cover = 0;
      for (const t of targets) {
        if (manhattan(t, s) <= radius) cover++;
      }
      if (cover > bestCover) { bestCover = cover; best = { x: s.x, y: s.y }; }
    }
    if (!best) return false;
    this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, false, best);
    return true;
  }

  /** 放置 Boss（属性同怪物按深度计算存储；铁门/掉落逻辑不变） */
  bossAt(id: string, p: P): void {
    const def = dataManager.getMonster(id);
    const stats: MonsterStats | undefined = def
      ? StatCalculator.getInstance().monsterStats(def, this.floorId, false, this.room.depth)
      : undefined;
    this.put({ kind: 'boss', monsterId: id, x: p.x, y: p.y, depth: this.room.depth, stats });
  }

  // ============ 路径与几何（挡路型 / 守卫型 用） ============

  /** 房间内自由点位 + 距入口（门）的 BFS 距离；无门房间以中心为入口 */
  private computeSpots(): Spot[] {
    const entries: P[] = this.room.doors.map(d => ({ x: d.x, y: d.y }));
    if (entries.length === 0) entries.push({ x: this.room.centerX, y: this.room.centerY });

    const dist = new Map<string, number>();
    const queue: P[] = [];
    for (const e of entries) {
      if (this.inRoom(e.x, e.y) && this.grid[e.y]?.[e.x] === 0) {
        dist.set(`${e.x},${e.y}`, 0);
        queue.push(e);
      }
    }
    while (queue.length > 0) {
      const cur = queue.shift()!;
      const d = dist.get(`${cur.x},${cur.y}`) ?? 0;
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        const key = `${nx},${ny}`;
        if (!this.inRoom(nx, ny)) continue;
        if (this.grid[ny]?.[nx] !== 0) continue;
        if (dist.has(key)) continue;
        dist.set(key, d + 1);
        queue.push({ x: nx, y: ny });
      }
    }

    const spots: Spot[] = [];
    for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
      for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
        if (this.grid[y][x] !== 0) continue;
        spots.push({ x, y, dist: dist.get(cellKey(x, y)) ?? 99 });
      }
    }
    return spots;
  }

  /** 房间各门的内侧格（须为可通行地板） */
  private doorInners(): P[] {
    return this.room.doors
      .map(d => doorInner(d))
      .filter(p => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 0);
  }

  /**
   * 门内侧格中曼哈顿距离最远的一对（= 主路径入口 / 出口）。
   * 不足两个门时返回 null —— 主路径与绕过检测共用，此前两处各写了一遍。
   */
  private farthestDoorPair(): [P, P] | null {
    const inners = this.doorInners();
    if (inners.length < 2) return null;
    let best: [P, P] = [inners[0], inners[1]];
    let bestD = -1;
    for (let i = 0; i < inners.length; i++) {
      for (let j = i + 1; j < inners.length; j++) {
        const d = manhattan(inners[i], inners[j]);
        if (d > bestD) { bestD = d; best = [inners[i], inners[j]]; }
      }
    }
    return best;
  }

  /**
   * 入口→出口主路径（房间内格序列）。
   * 入口/出口 = 房间门内侧格中相距最远的一对；单门时取「门 → 距门最远格」。
   */
  mainPath(): P[] {
    const inners = this.doorInners();
    if (inners.length === 0) return [{ x: this.room.centerX, y: this.room.centerY }];
    const pair = this.farthestDoorPair();
    if (!pair) return this.bfsPath(inners[0], this.farthestFrom(inners[0])) ?? [inners[0]];
    return this.bfsPath(pair[0], pair[1]) ?? [pair[0]];
  }

  /**
   * 房间内 BFS 路线（只看地形，忽略实体）。
   * `blocked` 为额外视为障碍的格（怪物 / 柱子）；不可达返回 null。
   * 原先 bfsPath / bfsRoute 两份实现只差一个 blocked 参数，已合并。
   */
  private bfsPath(from: P, to: P, blocked?: Set<string>): P[] | null {
    const prev = new Map<string, string | null>([[ptKey(from), null]]);
    const queue: P[] = [from];
    while (queue.length > 0) {
      const cur = queue.shift()!;
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        if (!this.inRoom(nx, ny)) continue;
        if (this.grid[ny]?.[nx] !== 0) continue;
        const k = cellKey(nx, ny);
        if (prev.has(k)) continue;
        if (blocked?.has(k)) continue;
        prev.set(k, ptKey(cur));
        queue.push({ x: nx, y: ny });
      }
    }
    const end = ptKey(to);
    if (!prev.has(end)) return null;
    const out: P[] = [];
    let cur: string | null = end;
    while (cur) {
      const [x, y] = cur.split(',').map(Number);
      out.push({ x, y });
      cur = prev.get(cur) ?? null;
    }
    return out.reverse();
  }

  /** 距 from 最远的可达格（BFS） */
  private farthestFrom(from: P): P {
    let best: P = from;
    let bestD = -1;
    for (const s of this.spots) {
      if (s.dist > bestD) { bestD = s.dist; best = { x: s.x, y: s.y }; }
    }
    return best;
  }

  /** 房间内侧四角（贴墙的地面格） */
  private innerCorners(): P[] {
    const r = this.room;
    return [
      { x: r.x + 1, y: r.y + 1 },
      { x: r.x + r.width - 2, y: r.y + 1 },
      { x: r.x + 1, y: r.y + r.height - 2 },
      { x: r.x + r.width - 2, y: r.y + r.height - 2 },
    ];
  }

  // ============ 阻塞模式（文档二） ============

  /**
   * 挡路型：在入口→出口主路径上架一道横跨房间的屏障。
   * ratio：屏障落在路径的什么位置（0=入口侧，0.5=中段默认，0.7=偏出口侧），双屏障布局用不同 ratio 架两道。
   * 怪物占 N 格，其余格用柱子补满（barrier.fillWithPillars）→ 必须打掉至少 1 只怪才能通过。
   * 返回实际放置的怪物数（0 = 无法架设，调用方需兜底）。
   */
  blockPath(count: number, pool: PoolEntry[], isElite: boolean, ratio = 0.5): number {
    if (count <= 0 || pool.length === 0) return 0;
    const path = this.mainPath();
    if (path.length < 3) return 0;

    const i = Math.max(1, Math.min(path.length - 2, Math.round(path.length * ratio)));
    const cur = path[i];
    const nxt = path[i + 1] ?? path[i - 1];
    const alongX = cur.y === nxt.y; // 路径沿 x 走 → 屏障是竖线（固定 x）
    const cells: P[] = [];
    if (alongX) {
      for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
        if (this.grid[y]?.[cur.x] === 0) cells.push({ x: cur.x, y });
      }
    } else {
      for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
        if (this.grid[cur.y]?.[x] === 0) cells.push({ x, y: cur.y });
      }
    }
    if (cells.length === 0) return 0;

    // 避开入口侧 2 格内（不贴脸）
    const entry = path[0];
    const usable = cells.filter(c => manhattan(c, entry) >= 2);
    const line = usable.length > 0 ? usable : cells;

    const chosen = rng.shuffle(line).slice(0, Math.min(count, line.length));
    let placed = 0;
    for (const c of chosen) {
      if (this.taken.has(`${c.x},${c.y}`)) continue;
      this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, isElite, c);
      placed++;
    }
    // 柱子补满屏障（仅在怪物成功落下时才补，避免封死房间）；
    // 门内侧格绝不立柱——柱子改地形(2)会封死那扇门
    if (placed > 0 && dataManager.mapGen.content.barrier.fillWithPillars) {
      const doorInners = this.doorInnerCells();
      for (const c of line) {
        if (this.taken.has(`${c.x},${c.y}`)) continue;
        if (doorInners.has(`${c.x},${c.y}`)) continue;
        this.put({ kind: 'pillar', x: c.x, y: c.y });
        this.grid[c.y][c.x] = 2; // 装饰地形：阻挡
      }
    }
    return placed;
  }

  /** 所有门的内侧格（立柱禁区：柱子改地形会封门） */
  private doorInnerCells(): Set<string> {
    return new Set(this.room.doors.map(d => {
      const p = doorInner(d);
      return ptKey(p);
    }));
  }

  /** 围宝型 / 守卫型：在目标周围 radius 格内的空位放怪，返回实际数量 */
  guardAround(cx: number, cy: number, count: number, pool: PoolEntry[], isElite: boolean, radius = 1): number {
    if (count <= 0 || pool.length === 0) return 0;
    const cells: P[] = [];
    for (let y = cy - radius; y <= cy + radius; y++) {
      for (let x = cx - radius; x <= cx + radius; x++) {
        if (x === cx && y === cy) continue;
        if (!this.inRoom(x, y)) continue;
        if (this.grid[y]?.[x] !== 0) continue;
        if (this.taken.has(cellKey(x, y))) continue;
        cells.push({ x, y });
      }
    }
    const picked = rng.shuffle(cells).slice(0, Math.min(count, cells.length));
    for (const c of picked) this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, isElite, c);
    return picked.length;
  }

  /** 守卫型：在目标（楼梯/Boss）朝向入口一侧 1-2 格放怪 */
  guardStair(count: number, pool: PoolEntry[], isElite = false): number {
    if (count <= 0 || pool.length === 0) return 0;
    const stair = this.room.entities.find(e => e.kind === 'stair');
    const target = stair ? { x: stair.x, y: stair.y } : { x: this.room.centerX, y: this.room.centerY };
    const entry = this.mainPath()[0] ?? { x: target.x, y: target.y + 1 };
    const dx = Math.sign(entry.x - target.x);
    const dy = Math.sign(entry.y - target.y);
    const cand: P[] = [];
    if (dx !== 0) cand.push({ x: target.x + dx, y: target.y }, { x: target.x + dx * 2, y: target.y });
    if (dy !== 0) cand.push({ x: target.x, y: target.y + dy }, { x: target.x, y: target.y + dy * 2 });

    let placed = 0;
    for (const p of cand) {
      if (placed >= count) break;
      if (!this.freeAt(p.x, p.y)) continue;
      this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, isElite, p);
      placed++;
    }
    return placed;
  }

  /** 精确放置：王座型精英/护卫用（目标格被占则返回 false，由调用方兜底） */
  placeMonsterAt(id: string, isElite: boolean, p: P): boolean {
    if (!this.freeAt(p.x, p.y)) return false;
    this.monsterAt(id, isElite, p);
    return true;
  }

  /**
   * 隐藏房间专用放置（P1-1）：房间发现前不雕刻地形（内部为虚空格），
   * 跳过地形校验，仅做边界/占用检查。
   */
  placeMonsterUnchecked(id: string, isElite: boolean, p: P): boolean {
    if (p.x <= this.room.x || p.x >= this.room.x + this.room.width - 1) return false;
    if (p.y <= this.room.y || p.y >= this.room.y + this.room.height - 1) return false;
    if (this.taken.has(ptKey(p))) return false;
    if (this.room.entities.some(en => en.x === p.x && en.y === p.y)) return false;
    this.monsterAt(id, isElite, p);
    return true;
  }

  /** 从怪池取一只（不放置）；空池返回 null */
  pickMonsterId(pool: PoolEntry[]): string | null {
    return pool.length > 0 ? rng.pickWeighted(pool, m => m.weight).id : null;
  }

  /**
   * 竞技场型：中轴对称立柱圈（3×3 外圈留四正位），中央留空给怪物群。
   * 柱子避开主路径格与门内侧格，保证所有门可达；可立柱不足 4 根视为失败。
   */
  placeArenaPillars(): boolean {
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const ring: P[] = [
      { x: cx - 2, y: cy }, { x: cx + 2, y: cy },
      { x: cx, y: cy - 2 }, { x: cx, y: cy + 2 },
      { x: cx - 2, y: cy - 2 }, { x: cx + 2, y: cy - 2 },
      { x: cx - 2, y: cy + 2 }, { x: cx + 2, y: cy + 2 },
    ];
    const protectedCells = new Set<string>();
    for (const d of this.room.doors) {
      const p = doorInner(d);
      protectedCells.add(ptKey(p));
    }
    for (const p of this.mainPath()) protectedCells.add(ptKey(p));

    const placeable = ring.filter(p =>
      this.inRoom(p.x, p.y)
      && this.freeAt(p.x, p.y)
      && !protectedCells.has(ptKey(p)));
    if (placeable.length < 4) return false;
    for (const p of placeable) this.putBlocking('pillar', p.x, p.y);
    return true;
  }

  // ============ 物品与装饰 ============

  /** 普通放置：距入口 ≥ monsterMinDistFromEntry 的空位随机放怪 */
  placeMonsters(count: number, isElite: boolean, pool: PoolEntry[]): number {
    if (count <= 0 || pool.length === 0) return 0;
    const minDist = dataManager.mapGen.content.monsterMinDistFromEntry;
    const far = this.spots.filter(s => s.dist >= minDist && this.freeAt(s.x, s.y));
    const use = far.length >= count ? far : this.spots.filter(s => this.freeAt(s.x, s.y));
    const picked = rng.shuffle(use).slice(0, count);
    for (const s of picked) this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, isElite, s);
    return picked.length;
  }

  /** 宝箱放内侧四角；carpet=true 时首个宝箱下方铺地毯（房间身份感） */
  placeCornerChests(count: number, carpet = false): P[] {
    const out: P[] = [];
    if (count <= 0) return out;
    const corners = this.innerCorners().filter(c => this.freeAt(c.x, c.y));
    const picked = rng.shuffle(corners).slice(0, Math.min(count, corners.length));
    picked.forEach((c, i) => {
      if (carpet && i === 0) this.put({ kind: 'carpet', x: c.x, y: c.y });
      // 风险收益：宝箱记录所在房间的风险级 / 收益倍率，开箱时结算（路线权衡的兑现端）
      this.put({
        kind: 'chest', chestTier: 'normal', x: c.x, y: c.y,
        riskTier: this.risk(), rewardMul: this.room.rewardMul ?? 1,
      });
      out.push(c);
    });
    return out;
  }

  /** 房间风险级（1~3；未分级 = 1 = 旧行为） */
  risk(): number {
    return this.room.risk ?? 1;
  }

  /**
   * 风险兑现（另一半）：按风险级掷骰，把首个宝箱升级为「大宝箱」
   * （必出装备、金币 ×2.5）→ 让高风险房值得绕路。
   */
  rollVault(chests: P[]): boolean {
    if (chests.length === 0) return false;
    const chance = dataManager.mapGen.content.risk.vaultChance[this.risk() - 1] ?? 0;
    if (chance <= 0 || !rng.chance(chance)) return false;
    const first = chests[0];
    const ent = this.room.entities.find(e => e.kind === 'chest' && e.x === first.x && e.y === first.y);
    if (!ent) return false;
    ent.chestTier = 'grand';
    return true;
  }

  /** 药水：优先放入口附近（1-4 格），不足时用任意空位 */
  placePotions(count: number): number {
    if (count <= 0) return 0;
    const near = this.spots.filter(s => s.dist >= 1 && s.dist <= 4 && this.freeAt(s.x, s.y));
    const use = near.length >= count ? near : this.spots.filter(s => this.freeAt(s.x, s.y));
    const picked = rng.shuffle(use).slice(0, Math.min(count, use.length));
    for (const s of picked) {
      this.put({ kind: 'potion', potionTier: this.pickPotionTier(), x: s.x, y: s.y });
    }
    return picked.length;
  }

  /** 按楼层挑选药水档次（低档权重更高） */
  private pickPotionTier(): PotionTier {
    const all = dataManager.potions.potions;
    const avail = all.filter(p => this.floorId >= p.minFloor && this.floorId <= p.maxFloor);
    const pool = avail.length > 0 ? avail : all;
    const weighted = pool.map((p, i) => ({ tier: p.tier, weight: pool.length - i }));
    return rng.pickWeighted(weighted, w => w.weight).tier;
  }

  /** 火把：按房间类型的数量，优先挂房间四角，再沿墙扩散 */
  placeRoomTorches(): void {
    const range = dataManager.mapGen.content.roomTorches[this.room.type];
    if (!range) return;
    const want = rng.randInt(range[0], range[1]);
    if (want <= 0) return;
    let placed = 0;
    for (const p of this.wallRing()) {
      if (placed >= want) break;
      if (this.grid[p.y]?.[p.x] !== 1) continue;
      if (this.room.entities.some(e => e.x === p.x && e.y === p.y)) continue;
      this.put({ kind: 'torch', x: p.x, y: p.y });
      placed++;
    }
  }

  /** 房间边界墙格，按「距四角近」排序 */
  private wallRing(): P[] {
    const r = this.room;
    const pts: P[] = [];
    for (let x = r.x; x < r.x + r.width; x++) {
      pts.push({ x, y: r.y }, { x, y: r.y + r.height - 1 });
    }
    for (let y = r.y + 1; y < r.y + r.height - 1; y++) {
      pts.push({ x: r.x, y }, { x: r.x + r.width - 1, y });
    }
    const corners: P[] = [
      { x: r.x, y: r.y },
      { x: r.x + r.width - 1, y: r.y },
      { x: r.x, y: r.y + r.height - 1 },
      { x: r.x + r.width - 1, y: r.y + r.height - 1 },
    ];
    const cd = (p: P): number => Math.min(...corners.map(c => manhattan(p, c)));
    return pts.sort((a, b) => cd(a) - cd(b));
  }

  /** 装饰：宽≥7 的房间四角立柱子（阻挡通行；门内侧格豁免避免封门） */
  placePillars(): void {
    if (this.room.width - 2 < dataManager.mapGen.decor.pillarMinRoomWidth) return;
    const doorInners = this.doorInnerCells();
    for (const c of this.innerCorners()) {
      if (!this.freeAt(c.x, c.y)) continue;
      if (doorInners.has(`${c.x},${c.y}`)) continue;
      this.put({ kind: 'pillar', x: c.x, y: c.y });
      this.grid[c.y][c.x] = 2;
    }
  }

  // ============ 陈设填充（反「大而空」） ============

  /**
   * 陈设填充：内容落定后、`validate()` 之前执行——让每个房间都有「陈设密度」，而非大而空。
   *   ① 配光保底：按内面积补足火把（沿周长均匀，绝不上门格 / 已占格）；
   *   ② 列柱：内宽/内高均达标的房间，沿两条长墙等距列柱（对称，避开主路径与门内侧）；
   *   ③ 引导地毯：入口 → 房间中心铺 2~3 格地毯，给出动线暗示（非阻挡）。
   * 列柱是阻挡地形，其连通/不可绕过后果由随后 `validate()` 的校验统一兜底修复。
   */
  furnish(): void {
    const f = dataManager.mapGen.content.furnish;
    const innerW = this.room.width - 2;
    const innerH = this.room.height - 2;
    this.furnishTorches(Math.min(f.torchMax, Math.max(1, Math.round((innerW * innerH) / f.torchPerArea))));
    this.furnishColonnade(f, innerW, innerH);
    if (f.guideCarpet) this.furnishGuideCarpet();
  }

  /** 房间边界墙格（按周长顺序排列 → 等分取点即「沿墙均匀分布」） */
  private wallPerimeter(): P[] {
    const r = this.room;
    const pts: P[] = [];
    for (let x = r.x; x < r.x + r.width; x++) pts.push({ x, y: r.y });
    for (let y = r.y + 1; y < r.y + r.height - 1; y++) pts.push({ x: r.x + r.width - 1, y });
    for (let x = r.x + r.width - 1; x >= r.x; x--) pts.push({ x, y: r.y + r.height - 1 });
    for (let y = r.y + r.height - 2; y > r.y; y--) pts.push({ x: r.x, y });
    return pts;
  }

  /** ① 配光保底：沿墙周长等分补火把到目标数量（门格地形为 0，天然排除） */
  private furnishTorches(want: number): void {
    let need = want - this.room.entities.filter(e => e.kind === 'torch').length;
    if (need <= 0) return;
    const ring = this.wallPerimeter().filter(p =>
      this.grid[p.y]?.[p.x] === 1
      && !this.room.entities.some(e => e.x === p.x && e.y === p.y));
    if (ring.length === 0) return;
    for (let i = 0; i < need; i++) {
      const idx = Math.floor(((i + 1) * ring.length) / (need + 1));
      const p = ring[Math.min(idx, ring.length - 1)];
      if (!p || this.room.entities.some(e => e.x === p.x && e.y === p.y)) continue;
      this.put({ kind: 'torch', x: p.x, y: p.y });
    }
  }

  /** ② 列柱：长边两侧等距立柱（对称、避主路径/门内侧/角落宝箱位） */
  private furnishColonnade(f: MapGenConfig['content']['furnish'], innerW: number, innerH: number): void {
    if (innerW < f.colonnadeMinInnerW || innerH < f.colonnadeMinInnerH) return;
    const r = this.room;
    const horizontal = innerW >= innerH; // 长边在上下 → 沿上下两行立柱
    const span = horizontal ? innerW : innerH;
    const step = Math.max(2, f.colonnadeSpacing);
    const offsets: number[] = [];
    for (let i = step; i <= span - 1; i += step) offsets.push(i);
    if (offsets.length === 0) offsets.push(Math.ceil(span / 2));

    const protectedCells = new Set<string>(this.doorInnerCells());
    for (const p of this.mainPath()) protectedCells.add(ptKey(p));

    let placed = 0;
    const lanes = horizontal ? [r.y + 1, r.y + r.height - 2] : [r.x + 1, r.x + r.width - 2];
    for (const off of offsets) {
      if (placed >= f.colonnadeMax) break;
      for (const lane of lanes) {
        if (placed >= f.colonnadeMax) break;
        const x = horizontal ? r.x + off : lane;
        const y = horizontal ? lane : r.y + off;
        if (!this.inRoom(x, y) || !this.freeAt(x, y)) continue;
        if (protectedCells.has(ptKey({ x, y }))) continue;
        this.putBlocking('pillar', x, y);
        placed++;
      }
    }
  }

  /** ③ 引导地毯：入口 → 中心（先 x 后 y 的 L 形），每 2 格 1 块，最多 3 块 */
  private furnishGuideCarpet(): void {
    const entry = this.mainPath()[0];
    if (!entry) return;
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const steps: P[] = [{ x: entry.x, y: entry.y }];
    let x = entry.x;
    let y = entry.y;
    while (x !== cx) { x += Math.sign(cx - x); steps.push({ x, y }); }
    while (y !== cy) { y += Math.sign(cy - y); steps.push({ x, y }); }
    let placed = 0;
    for (let i = 1; i < steps.length && placed < 3; i += 2) {
      const p = steps[i];
      if (!this.freeAt(p.x, p.y)) continue;
      this.put({ kind: 'carpet', x: p.x, y: p.y });
      placed++;
    }
  }

  /**
   * 女巫酿药间（安全房）：中央女巫 + 朝门一侧的熬药大锅 + 两侧药架 + 角落治疗泉。
   * 女巫提供特殊药水交易，治疗泉提供治疗服务（交互在世界层处理）。
   * 大锅/药架为阻挡装饰：绝不落在门内侧格（会封死房门，P0-5 连通修复教训）。
   */
  placeWitchRoom(shelves: number): void {
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const entry = this.mainPath()[0] ?? { x: cx, y: cy + 1 };
    const doorInners = this.doorInnerCells();
    const blockable = (x: number, y: number): boolean =>
      this.freeAt(x, y) && !doorInners.has(cellKey(x, y));

    // 女巫：优先居中，居中不可用则退到离入口最远的空位
    if (this.freeAt(cx, cy)) {
      this.put({ kind: 'npc', npcId: 'npc_witch', x: cx, y: cy });
    } else {
      const fallback = [...this.spots]
        .filter(s => this.freeAt(s.x, s.y))
        .sort((a, b) => b.dist - a.dist)[0];
      if (fallback) this.put({ kind: 'npc', npcId: 'npc_witch', x: fallback.x, y: fallback.y });
    }

    // 大锅：女巫朝向入口的一侧
    const dx = Math.sign(entry.x - cx);
    const dy = Math.sign(entry.y - cy);
    const cauldron = dx !== 0
      ? { x: cx + dx, y: cy }
      : { x: cx, y: cy + (dy || 1) };
    if (blockable(cauldron.x, cauldron.y)) this.putBlocking('cauldron', cauldron.x, cauldron.y);

    // 药架：垂直于「入口方向」的两侧各一，不足时用四角补齐
    const perp: P[] = dx !== 0
      ? [{ x: 0, y: 1 }, { x: 0, y: -1 }]
      : [{ x: 1, y: 0 }, { x: -1, y: 0 }];
    let placed = 0;
    for (const p of perp) {
      if (placed >= shelves) break;
      const sx = cx + p.x * 2;
      const sy = cy + p.y * 2;
      if (blockable(sx, sy)) { this.putBlocking('shelf', sx, sy); placed++; }
    }
    if (placed < shelves) {
      for (const c of rng.shuffle(this.innerCorners())) {
        if (placed >= shelves) break;
        if (blockable(c.x, c.y)) { this.putBlocking('shelf', c.x, c.y); placed++; }
      }
    }

    // 治疗泉：离入口最远的角落（越深入越珍贵）
    const corners = rng.shuffle(this.innerCorners())
      .sort((a, b) => manhattan(b, entry) - manhattan(a, entry));
    for (const c of corners) {
      if (this.freeAt(c.x, c.y)) { this.put({ kind: 'fountain', x: c.x, y: c.y }); break; }
    }
  }

  /** 战斗房按深度取档位（文档五 深度与难度对应） */
  bandFor(bands: ContentBand[]): ContentBand {
    const depth = this.room.depth;
    return bands.find(b => depth <= b.maxDepth) ?? bands[bands.length - 1];
  }

  // ============ 内容验证（文档六 6.1 + P0-5 强化） ============

  /**
   * 验证并就地修复：
   *   地形连通       —— 柱子/装饰封死地板口袋 → 撤柱开通（P0-5 配套修复）
   *   楼梯被守护     —— 楼梯 guard.stairRadius 格内无怪 → 楼梯前补怪（受密度上限约束）
   *   宝箱被守护     —— 宝箱 guard.chestRadius 格内无怪 → 邻格补怪（受密度上限约束）
   *   战斗不可绕过   —— 怪物/柱子为障碍时任意两门内侧仍连通 = 可绕过 → 沿开路线中点循环补怪封堵
   *                     （P0-5：战斗/精英/Boss 房均执行；补怪不超过密度上限）
   *   精英房主路径   —— 主路径上至少 1 只精英怪，不足则补/升级（P0-5）
   * 执行顺序：守卫（楼梯→宝箱）先占用密度余量，「不可绕过」最后执行——余量不足时退化为柱线封堵。
   *   无重叠/可到达 —— 放置阶段已由 freeAt 保证（装饰地毯除外）
   * 返回未修复的失败项（调用方记日志），不中断生成流程。
   */
  validate(roomType: RoomData['type'], pool: PoolEntry[], densityCap = Infinity): string[] {
    const issues: string[] = [];
    const g = dataManager.mapGen.content.guard;
    const monsterCount = (): number =>
      this.room.entities.filter(e => e.kind === 'monster' || e.kind === 'boss').length;

    // 0) 地形连通修复：先开通口袋，再判断是否因开通产生绕过（绕过由下方补怪封堵）
    this.ensureReachable();

    // 1) 楼梯被守护（P1-4：楼梯是进度关键，优先占用密度余量）
    for (const stair of this.room.entities.filter(e => e.kind === 'stair')) {
      const guarded = this.monsterNear(stair.x, stair.y, g.stairRadius);
      if (!guarded && pool.length > 0 && monsterCount() < densityCap) {
        // guardStair 朝向入口放置失败时，用覆盖式放置在半径内找任意空位兜底
        if (this.guardStair(1, pool) === 0
          && !this.placeGuardCovering([{ x: stair.x, y: stair.y }], pool, g.stairRadius)) {
          issues.push('楼梯无守护（无可放置格）');
        }
      }
    }

    // 2) 宝箱被守护（P1-4：覆盖式补守卫；Boss 房奖励宝箱不受此限制）
    //    必须排在「不可绕过」之前：否则反绕过补怪会先把密度余量吃光，宝箱永远等不到守卫。
    if (roomType !== 'boss') {
      const chests = this.room.entities.filter(e => e.kind === 'chest') as { x: number; y: number }[];
      let unguarded = chests.filter(c => !this.monsterNear(c.x, c.y, g.chestRadius));
      while (unguarded.length > 0 && pool.length > 0 && monsterCount() < densityCap) {
        if (!this.placeGuardCovering(unguarded, pool, g.chestRadius)) break;
        unguarded = chests.filter(c => !this.monsterNear(c.x, c.y, g.chestRadius));
      }
      if (unguarded.length > 0) {
        issues.push(monsterCount() >= densityCap
          ? `宝箱无守护（密度上限已满 ${monsterCount()}/${densityCap}，未守护 ${unguarded.length} 座）`
          : '宝箱无守护（无可放置格）');
      }
    }

    // 3) 战斗不可绕过（战斗房 / 精英房 / Boss房 —— P0-5 扩展至 Boss）
    //    排在守卫之后：余量不足时退化为柱线封堵（柱子不计怪物密度上限）。
    //    Boss 房特殊处理：通往终点房的门由 Boss 铁门机制锁闭（击败 Boss 才开启），
    //    进度不可跳过已有系统保证，因此只在房内毫无守卫时补 1 只、绝不上柱线封路——
    //    Boss 层是 rest→boss→end 线性链，无冗余通路，封路会截断整层。
    if (roomType === 'boss' && pool.length > 0) {
      if (this.bypassRoute() && monsterCount() === 0) {
        const spot = this.freeSpotOnRoute(this.mainPath());
        if (spot) this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, false, spot);
      }
    } else if ((roomType === 'combat' || roomType === 'elite') && pool.length > 0) {
      let route = this.bypassRoute();
      let added = 0;
      let sealedByPillar = false;
      while (route && added < 12) {
        const spot = monsterCount() < densityCap ? this.freeSpotOnRoute(route) : null;
        if (spot) {
          this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, false, spot);
        } else {
          // 怪物达上限或路线无空位：在路线中点架整条柱线封堵（柱子不计怪物密度上限）；
          // 主朝向失败时尝试正交朝向（斜向路线两个朝向均可切断）
          const mid = route[Math.floor(route.length / 2)];
          const vertical = Math.abs(route[route.length - 1].x - route[0].x)
            >= Math.abs(route[route.length - 1].y - route[0].y);
          const ends: [P, P] = [route[0], route[route.length - 1]];
          if (this.sealWithPillarLine(mid, vertical, ends)
            || this.sealWithPillarLine(mid, !vertical, ends)) {
            sealedByPillar = true;
          } else {
            // 架线失败（候选线均穿门内侧或含非阻挡实体）：退回单柱封路线上空格
            const pspot = this.freeSpotOnRoute(route, this.doorInnerCells());
            if (!pspot) break;
            this.put({ kind: 'pillar', x: pspot.x, y: pspot.y });
            this.grid[pspot.y][pspot.x] = 2;
            sealedByPillar = true;
          }
        }
        added++;
        // 每轮封堵后立即修复口袋：撤柱可能重开路线，交由下一轮继续封堵
        if (sealedByPillar) this.ensureReachable();
        route = this.bypassRoute();
      }
      if (route) issues.push('可绕过且无空位补怪');

      // 精英房额外校验（P0-5）：主路径上必须至少 1 只精英怪
      if (roomType === 'elite') this.ensureEliteOnPath(this.mainPath(), pool, densityCap);
    }

    // 收尾再修一次连通（幂等）：反绕过柱线/悬崖可能在上一步重新围出口袋
    this.ensureReachable();
    return issues;
  }

  /**
   * 障碍感知绕过路线（P0-5，文档 2a）：怪物/柱子/装饰地形视为障碍后，
   * 曼哈顿距离最远的一对门内侧格（= 主路径入口/出口）之间仍存在的通行路线。
   * 返回该路线用于精确封堵；无门对或已阻断返回 null。
   */
  private bypassRoute(): P[] | null {
    const pair = this.farthestDoorPair();
    if (!pair) return null;

    const blocked = new Set(
      this.room.entities
        .filter(e => e.kind === 'monster' || e.kind === 'boss' || e.kind === 'pillar')
        .map(e => ptKey(e)),
    );
    return this.bfsPath(pair[0], pair[1], blocked);
  }

  /** 开放路线上自中点向外第一个可放置格（封堵补怪/立柱用；forbidden 内的格子跳过） */
  private freeSpotOnRoute(route: P[], forbidden?: Set<string>): P | null {
    const mid = Math.floor(route.length / 2);
    for (let off = 0; off < route.length; off++) {
      for (const i of [mid + off, mid - off]) {
        const p = route[i];
        if (!p || !this.freeAt(p.x, p.y)) continue;
        if (forbidden?.has(ptKey(p))) continue;
        return p;
      }
    }
    return null;
  }

  /**
   * 沿整条线立柱封堵（P0-5 密度上限时的封路手段）：
   * vertical=true 立竖线（固定 x），否则横线（固定 y）。
   * 候选线必须严格位于路线两端点的坐标区间内（BFS 最短路不会超出端点包围盒，
   * 区间外的线切不断路线）；且不穿门内侧格、不含药水/宝箱等非阻挡实体。
   * 线上已有怪物/柱子的格子保持不变；若整条线没有「两侧开阔」的怪物缺口，
   * 则把房间内一只怪物移到线中段的让路格——柱子是永久地形，必须保留一个
   * 击杀后可通行的缺口，否则无冗余通路时整层会被截断。
   * 返回是否成功立柱。
   */
  private sealWithPillarLine(mid: P, vertical: boolean, routeEnds: [P, P]): boolean {
    const doorInners = this.doorInnerCells();
    const hasMonsterAt = (x: number, y: number): boolean =>
      this.room.entities.some(e => e.kind === 'monster' && e.x === x && e.y === y);
    const isBlocking = (x: number, y: number): boolean => {
      const ent = this.room.entities.find(e => e.x === x && e.y === y);
      return !ent || ent.kind === 'monster' || ent.kind === 'boss' || ent.kind === 'pillar';
    };
    const tryLine = (line: number): boolean => {
      const cells: P[] = [];
      if (vertical) {
        for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
          if (this.grid[y]?.[line] === 0) cells.push({ x: line, y });
        }
      } else {
        for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
          if (this.grid[line]?.[x] === 0) cells.push({ x, y: line });
        }
      }
      if (cells.length === 0) return false;
      // 穿门内侧格或含非阻挡实体的线会留缺口，直接弃用
      if (cells.some(c => doorInners.has(`${c.x},${c.y}`) || !isBlocking(c.x, c.y))) return false;

      // 让路格判定：怪物占位且垂直于线方向的两侧邻格均为空地（真通道，击杀后可横穿）
      const openFloor = (x: number, y: number): boolean =>
        this.inRoom(x, y) && this.grid[y]?.[x] === 0;
      const isPassage = (c: P): boolean => {
        if (!hasMonsterAt(c.x, c.y)) return false;
        return vertical
          ? openFloor(c.x - 1, c.y) && openFloor(c.x + 1, c.y)
          : openFloor(c.x, c.y - 1) && openFloor(c.x, c.y + 1);
      };
      const freePassageCell = (c: P): boolean =>
        this.freeAt(c.x, c.y)
        && (vertical
          ? openFloor(c.x - 1, c.y) && openFloor(c.x + 1, c.y)
          : openFloor(c.x, c.y - 1) && openFloor(c.x, c.y + 1));

      if (!cells.some(isPassage)) {
        // 线上没有可通行的怪物缺口：移一只怪到线中段的真通道格
        const gap = cells.slice(Math.floor(cells.length / 2)).find(freePassageCell)
          ?? cells.find(freePassageCell);
        if (!gap || !this.relocateMonsterTo(gap)) return false; // 无法保证击杀通路，弃用该线
      }

      let placed = false;
      for (const c of cells) {
        if (!this.freeAt(c.x, c.y)) continue; // 已有怪物/柱子的格子不再立柱
        this.put({ kind: 'pillar', x: c.x, y: c.y });
        this.grid[c.y][c.x] = 2;
        placed = true;
      }
      return placed;
    };
    const coord = (p: P): number => vertical ? p.x : p.y;
    const lo = Math.min(coord(routeEnds[0]), coord(routeEnds[1]));
    const hi = Math.max(coord(routeEnds[0]), coord(routeEnds[1]));
    const base = vertical ? mid.x : mid.y;
    // 候选线 = 端点开区间内所有平行线，按离路线中点从近到远依次尝试
    const candidates: number[] = [];
    for (let line = lo + 1; line < hi; line++) candidates.push(line);
    candidates.sort((a, b) => Math.abs(a - base) - Math.abs(b - base));
    for (const line of candidates) {
      if (vertical && (line <= this.room.x || line >= this.room.x + this.room.width - 1)) continue;
      if (!vertical && (line <= this.room.y || line >= this.room.y + this.room.height - 1)) continue;
      if (tryLine(line)) return true;
    }
    return false;
  }

  /** 把房间内一只不在目标格的怪物移到目标格（数量不变不破密度上限；更新占位记录） */
  private relocateMonsterTo(target: P): boolean {
    const m = this.room.entities.find(e =>
      e.kind === 'monster' && !(e.x === target.x && e.y === target.y));
    if (!m) return false;
    this.taken.delete(`${m.x},${m.y}`);
    m.x = target.x;
    m.y = target.y;
    this.taken.add(`${target.x},${target.y}`);
    return true;
  }

  /**
   * 精英房主路径精英校验（P0-5）：主路径格子上有精英怪即通过；
   * 不足时优先在路径中点附近补 1 只精英（不超过密度上限），
   * 超上限则把主路径上的一只普通怪升级为精英（保留位置与掉落规则）。
   */
  private ensureEliteOnPath(path: P[], pool: PoolEntry[], densityCap: number): void {
    const onPath = new Set(path.map(p => ptKey(p)));
    const onPathElite = this.room.entities.some(e =>
      (e.kind === 'monster' || e.kind === 'boss') && e.isElite && onPath.has(`${e.x},${e.y}`));
    if (onPathElite) return;

    const count = this.room.entities.filter(e => e.kind === 'monster' || e.kind === 'boss').length;
    if (count < densityCap && pool.length > 0) {
      const spot = this.freeSpotOnRoute(path);
      if (spot) {
        this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, true, spot);
        return;
      }
    }
    // 无余量/无空位：升级主路径上的普通怪为精英
    const up = this.room.entities.find(e =>
      e.kind === 'monster' && !e.isElite && onPath.has(`${e.x},${e.y}`));
    if (up) this.upgradeToElite(up);
  }

  /** 普通怪升精英：保留位置/类型/掉落规则，按深度重算属性（收敛遍历会再次封顶） */
  private upgradeToElite(e: MapEntity): void {
    e.isElite = true;
    const def = dataManager.getMonster(e.monsterId ?? '');
    if (def) e.stats = StatCalculator.getInstance().monsterStats(def, this.floorId, true, this.room.depth);
  }

  /**
   * 地形连通修复：柱子/装饰可能把部分地板（及其上的实体/门内侧）封成口袋。
   * 以首个门的内侧格为单源 BFS（怪物格是地形空地，BFS 可穿过「让路怪」——
   * 封堵线的击杀缺口不会被误拆）；存在不可达地板时逐个撤除口袋边界的
   * 阻挡装饰（柱子/大锅/药架）直到全部可达。撤柱产生的缺口由「不可绕过」校验封堵。
   */
  private ensureReachable(): void {
    // 门内侧格必须是地板：任何阻挡装饰落在门内侧都会封死房门（撤除）
    for (const d of this.room.doors) {
      const p = doorInner(d);
      if (!this.inRoom(p.x, p.y) || this.grid[p.y]?.[p.x] === 0) continue;
      const blocker = this.room.entities.find(e =>
        (e.kind === 'pillar' || e.kind === 'cauldron' || e.kind === 'shelf')
        && e.x === p.x && e.y === p.y);
      if (blocker) {
        this.room.entities = this.room.entities.filter(en => en !== blocker);
        this.grid[p.y][p.x] = 0;
      }
    }

    const floorCells: P[] = [];
    for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
      for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
        if (this.grid[y]?.[x] === 0) floorCells.push({ x, y });
      }
    }
    if (floorCells.length === 0) return;
    const firstInner = this.room.doors
      .map(d => doorInner(d))
      .find(p => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 0);
    const source = firstInner ?? floorCells[Math.floor(floorCells.length / 2)];

    for (let round = 0; round < 64; round++) {
      const seen = new Set<string>([`${source.x},${source.y}`]);
      const queue: P[] = [source];
      while (queue.length > 0) {
        const cur = queue.shift()!;
        for (const [dx, dy] of DIRS4) {
          const nx = cur.x + dx;
          const ny = cur.y + dy;
          const k = `${nx},${ny}`;
          if (!this.inRoom(nx, ny)) continue;
          if (this.grid[ny]?.[nx] !== 0) continue;
          if (seen.has(k)) continue;
          seen.add(k);
          queue.push({ x: nx, y: ny });
        }
      }
      const pockets = floorCells.filter(c => !seen.has(`${c.x},${c.y}`));
      if (pockets.length === 0) return; // 全部可达
      // 撤除口袋边界任意一个阻挡装饰（柱子/大锅/药架），下一轮重算
      const blocker = this.room.entities.find(e =>
        (e.kind === 'pillar' || e.kind === 'cauldron' || e.kind === 'shelf')
        && pockets.some(c => manhattan(e, c) === 1));
      if (blocker) {
        this.room.entities = this.room.entities.filter(en => en !== blocker);
        this.grid[blocker.y][blocker.x] = 0;
        continue;
      }
      // 无装饰可撤：口袋被悬崖（编码 4）与墙围死（悬崖先于内容填充生成，
      // 反绕过柱线落到旁边就可能合围）→ 回填贴口袋的悬崖为地板，彻底消灭死格。
      const cliff = pockets
        .flatMap(c => DIRS4.map(([dx, dy]) => ({ x: c.x + dx, y: c.y + dy })))
        .find(p => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 4);
      if (!cliff) return; // 由墙圈封死（理论上不会发生）
      this.grid[cliff.y][cliff.x] = 0;
    }
  }

  /**
   * 障碍感知绕过判定已由 bypassRoute 取代（P0-5）：返回开放路线而非布尔值，
   * 便于把补怪精确落在实际可通行路线上。
   */
}

/** 内容填充器：逐房间按类型填充（阻塞模式 + 文档物品清单） */
export class ContentFiller {
  private static instance: ContentFiller;
  private constructor() {}
  static getInstance(): ContentFiller {
    if (!ContentFiller.instance) ContentFiller.instance = new ContentFiller();
    return ContentFiller.instance;
  }

  fill(rooms: RoomData[], corridors: CorridorData[], grid: TileCode[][], floorId: number, kind: FloorKind, hiddenRooms: RoomData[] = []): void {
    const c = dataManager.mapGen.content;
    const all = dataManager.monsters.monsters.filter(m => m.category === 'normal');
    const avail = all.filter(m => floorId >= m.floorMin && floorId <= m.floorMax);
    const pool: PoolEntry[] = (avail.length > 0 ? avail : all).map(m => ({ id: m.id, weight: m.weight }));

    this.assignFloorRisk(rooms, floorId); // 风险-收益分层（含层内差异保底）：先定风险，内容再按风险强化
    for (const room of rooms) {
      const rf = new RoomFill(room, grid, floorId);

      switch (room.type) {
        case 'start': {
          if (kind === 'initial') {
            rf.put({ kind: 'npc', npcId: 'npc_guide', x: room.centerX, y: room.y + 1 });
          }
          if (kind !== 'summit') {
            // 塔顶层无杂物（§4：空旷白金平台）
            rf.placePotions(rng.randInt(c.startRoom.potions[0], c.startRoom.potions[1]));
          }
          break;
        }

        case 'end': {
          if (kind === 'summit') {
            // 塔顶（§4 假终点）：终局之门取代楼梯，贴北墙居中；无守卫无宝箱无药水
            const gateSpot = { x: room.centerX, y: room.y + 1 };
            if (rf.freeAt(gateSpot.x, gateSpot.y)) {
              rf.put({ kind: 'gate', x: gateSpot.x, y: gateSpot.y });
            } else {
              rf.put({ kind: 'gate', x: room.centerX, y: room.centerY });
            }
            break;
          }
          // 下行楼梯：2×2 大阶梯优先贴北墙（进门不直踩）；空间不足回退旧版中央 2×2，再回退单格
          if (!rf.placeStairAgainstWall(floorId + 1)) {
            const ax = room.centerX - 1;
            const ay = room.centerY - 1;
            const span2 = [0, 1].flatMap(dz => [0, 1].map(dx => ({ x: ax + dx, y: ay + dz })));
            if (span2.every(p => rf.freeAt(p.x, p.y))) {
              rf.put({ kind: 'stair', x: ax, y: ay, targetFloor: floorId + 1, stairSpan: 2 });
              rf.put({ kind: 'stair', x: ax + 1, y: ay, targetFloor: floorId + 1, stairSpan: 1 });
              rf.put({ kind: 'stair', x: ax, y: ay + 1, targetFloor: floorId + 1, stairSpan: 1 });
              rf.put({ kind: 'stair', x: ax + 1, y: ay + 1, targetFloor: floorId + 1, stairSpan: 1 });
            } else {
              const wallSpot = { x: room.centerX, y: room.y + 1 };
              if (rf.freeAt(wallSpot.x, wallSpot.y)) {
                rf.put({ kind: 'stair', x: wallSpot.x, y: wallSpot.y, targetFloor: floorId + 1 });
              } else {
                rf.put({ kind: 'stair', x: room.centerX, y: room.centerY, targetFloor: floorId + 1 });
              }
            }
          }
          if (kind === 'initial') {
            rf.put({ kind: 'chest', chestTier: 'normal', x: room.x + 1, y: room.y + 1 });
            rf.guardStair(1, pool);
          } else if (kind === 'boss') {
            rf.put({ kind: 'chest', chestTier: 'grand', x: room.x + 1, y: room.y + 1 });
            rf.put({ kind: 'chest', chestTier: 'grand', x: room.x + room.width - 2, y: room.y + room.height - 2 });
            // 区段最后一个 Boss 层（下一层即新区段起点）：终点房**必定**再给一个「遗物宝箱」
            if (isTierStartFloor(floorId + 1)) {
              const spot = this.relicChestSpot(rf, room);
              if (spot) rf.put({ kind: 'chest', chestTier: 'relic', x: spot.x, y: spot.y });
            }
          } else {
            // 守卫型：先给宝箱配守卫并预留 1 个密度余量给楼梯守卫，再放楼梯守卫——
            // 否则楼梯守卫会先吃掉余量，宝箱永远无守护（终点房密度上限仅 3）。
            const cap = this.densityCap(room);
            const chests = rf.placeCornerChests(rng.randInt(c.exitRoom.chests[0], c.exitRoom.chests[1]));
            for (const ch of chests) {
              if (rf.monsterCount() >= cap - 1) break;
              rf.placeGuardCovering([ch], pool, c.guard.chestRadius);
            }
            rf.guardStair(rng.randInt(c.exitRoom.guards[0], c.exitRoom.guards[1]), pool);
          }
          rf.placePotions(rng.randInt(c.exitRoom.potions[0], c.exitRoom.potions[1]));
          break;
        }

        case 'rest':
          // 休整房：安全区（回血由世界层处理）。
          // P1-3 保底休憩点：普通层插入的休憩房固定 1 瓶当前楼层最高档药水，无怪物无宝箱
          if (kind === 'normal' && rf.freeAt(room.centerX, room.centerY)) {
            const best = dataManager.potions.potions
              .filter(p => floorId >= p.minFloor && floorId <= p.maxFloor)
              .sort((a, b) => b.healPct - a.healPct)[0];
            if (best) rf.put({ kind: 'potion', potionTier: best.tier, x: room.centerX, y: room.centerY });
          }
          break;

        case 'merchant': {
          rf.put({ kind: 'npc', npcId: 'npc_merchant', x: room.centerX, y: room.centerY });
          rf.placePotions(rng.randInt(c.merchantRoom.potions[0], c.merchantRoom.potions[1]));
          rf.placeCornerChests(rng.randInt(c.merchantRoom.chests[0], c.merchantRoom.chests[1]));
          break;
        }

        case 'blacksmith': {
          // 安全房：铁匠（重铸/升级/提品质），无战斗无掉落
          rf.put({ kind: 'npc', npcId: 'npc_blacksmith', x: room.centerX, y: room.centerY });
          break;
        }

        case 'witch': {
          // 安全房：女巫（特殊药水交易）+ 治疗泉（治疗服务），无战斗
          // 物品清单对齐文档 4.1：女巫1 / 药架2 / 治疗泉1 / 大锅1 / 火把4（药水为商店库存，不落地）
          rf.placeWitchRoom(rng.randInt(c.witchRoom.shelves[0], c.witchRoom.shelves[1]));
          break;
        }

        case 'chest': {
          // 围宝型：宝箱放角落，守卫用覆盖式放置（同墙两箱的墙中点一格双守，P1-4），
          // 数量受密度上限约束
          // 风险收益：最高风险宝箱房在**配置上限内**多 1 座宝箱（不突破 chestRoomMax），且可能开出「大宝箱」
          const baseChests = rng.randInt(c.treasureRoom.chests[0], c.treasureRoom.chests[1]);
          const bonusChest = rf.risk() >= 3 && baseChests < c.treasureRoom.chests[1] ? 1 : 0;
          const chests = rf.placeCornerChests(baseChests + bonusChest, true);
          rf.rollVault(chests);
          const cap = this.densityCap(room);
          let guards = Math.min(rng.randInt(c.treasureRoom.monsters[0], c.treasureRoom.monsters[1]), cap - rf.monsterCount());
          let unguarded = chests.filter(ch => !rf.monsterNear(ch.x, ch.y, 2));
          while (guards > 0 && unguarded.length > 0) {
            if (!rf.placeGuardCovering(unguarded, pool, 2)) break;
            guards--;
            unguarded = chests.filter(ch => !rf.monsterNear(ch.x, ch.y, 2));
          }
          rf.placePotions(rng.randInt(c.treasureRoom.potions[0], c.treasureRoom.potions[1]));
          break;
        }

        case 'combat': {
          // 布局随机（大房解锁更多排列）：挡路 / 双重屏障 / 竞技场立柱 / 游散
          const band = rf.bandFor(c.combatByDepth);
          const cap = this.densityCap(room);
          // 预留密度余量：1 给「不可绕过」校验补怪（P0-5），1 给「宝箱守卫」（P1-4）
          const want = Math.max(1, Math.min(rng.randInt(band.monsters[0], band.monsters[1]), cap - 2));
          const bigW = room.width - 2 >= 8;
          const bigH = room.height - 2 >= 7;
          const layouts: { id: string; weight: number }[] = [
            { id: 'barrier', weight: 4 },
            { id: 'double', weight: bigW ? 2 : 0 },
            { id: 'arena', weight: bigW && bigH ? 2 : 0 },
            { id: 'scattered', weight: 2 },
          ];
          const layout = rng.pickWeighted(layouts, l => l.weight).id;
          room.layout = layout;
          let placed = 0;
          if (layout === 'double') {
            // 两道屏障夹出一条杀走廊：前轻后重
            const first = Math.max(1, Math.floor(want / 2));
            placed = rf.blockPath(first, pool, false, 0.32)
              + rf.blockPath(want - first, pool, false, 0.68);
          } else if (layout === 'arena') {
            if (rf.placeArenaPillars()) {
              placed = rf.guardAround(room.centerX, room.centerY, want, pool, false, 2);
            }
          } else if (layout === 'barrier') {
            placed = rf.blockPath(want, pool, false);
          } else {
            placed = rf.placeMonsters(want, false, pool);
          }
          if (placed === 0) rf.placeMonsters(want, false, pool); // 布局架设失败兜底
          // 精英同样受密度约束，并给宝箱守卫留 1 个余量
          const elites = Math.min(rng.randInt(band.elites[0], band.elites[1]), Math.max(0, cap - rf.monsterCount() - 1));
          if (elites > 0) rf.placeMonsters(elites, true, pool);
          const chests = rf.placeCornerChests(rng.randInt(band.chests[0], band.chests[1]));
          rf.rollVault(chests); // 高风险房概率升级出「大宝箱」
          rf.placePotions(rng.randInt(band.potions[0], band.potions[1]));
          break;
        }

        case 'elite': {
          // 布局随机：挡路 / 王座（精英镇守主路径最深格） / 竞技场（立柱围精英）
          const bigW = room.width - 2 >= 9;
          const bigH = room.height - 2 >= 7;
          const layouts: { id: string; weight: number }[] = [
            { id: 'barrier', weight: 3 },
            { id: 'throne', weight: bigH ? 3 : 0 },
            { id: 'arena', weight: bigW && bigH ? 2 : 0 },
          ];
          const layout = rng.pickWeighted(layouts, l => l.weight).id;
          room.layout = `elite_${layout}`;
          const path = rf.mainPath();
          const seat = path[path.length - 1] ?? { x: room.centerX, y: room.centerY };
          const eid = rf.pickMonsterId(pool);
          if (layout === 'throne' && eid) {
            const ok = rf.placeMonsterAt(eid, true, seat)
              || rf.placeMonsterAt(eid, true, { x: seat.x, y: seat.y - 1 })
              || rf.placeMonsterAt(eid, true, { x: seat.x, y: seat.y + 1 })
              || rf.placeMonsterAt(eid, true, { x: seat.x - 1, y: seat.y });
            if (!ok) rf.blockPath(1, pool, true);
          } else if (layout === 'arena' && eid) {
            if (!rf.placeArenaPillars()
              || !rf.placeMonsterAt(eid, true, { x: room.centerX, y: room.centerY })) {
              rf.placeMonsters(1, true, pool);
            }
          } else {
            // barrier 布局（含 throne/arena 因无怪池等原因落入此处的兜底）
            if (rf.blockPath(1, pool, true) === 0) rf.placeMonsters(1, true, pool);
          }
          // 护宝预算（风险强化守军后尤其必要）：先定宝箱数量，为「宝箱守卫」预留密度余量——
          // 否则守军会把密度上限吃满，宝箱必然无人看守（validate 报「宝箱无守护」）。
          const eliteCap = this.densityCap(room);
          const chestPlan = rng.randInt(c.eliteRoom.chests[0], c.eliteRoom.chests[1]);
          const spare = Math.max(0, eliteCap - rf.monsterCount());
          const addRoom = Math.max(0, spare - Math.min(chestPlan, spare));
          // 护卫杂兵：王座型分立在精英两侧，其余布局随机散布；风险越高越多（受护宝预算约束）
          const adds = Math.min(rng.randInt(c.eliteRoom.monsters[0], c.eliteRoom.monsters[1]), addRoom);
          if (layout === 'throne') {
            const mid = rf.pickMonsterId(pool);
            let n = 0;
            if (mid) {
              for (const off of [-1, 1]) {
                if (n >= adds) break;
                if (rf.placeMonsterAt(mid, false, { x: seat.x + off, y: seat.y })) n++;
                else if (rf.placeMonsterAt(mid, false, { x: seat.x, y: seat.y + off })) n++;
              }
            }
            if (n < adds) rf.placeMonsters(adds - n, false, pool);
          } else {
            rf.placeMonsters(adds, false, pool);
          }
          const chests = rf.placeCornerChests(chestPlan, true);
          rf.rollVault(chests);
          for (const ch of chests) {
            if (rf.monsterCount() >= eliteCap) break; // 守护怪不突破密度上限
            rf.guardAround(ch.x, ch.y, 1, pool, false, 1);
          }
          rf.placePotions(rng.randInt(c.eliteRoom.potions[0], c.eliteRoom.potions[1]));
          break;
        }

        case 'boss': {
          // P1-2 Boss 房结构变体：按楼层解锁 标准型 / 竞技场型(15层起) / 关卡型(20层起)，
          // 实体全部复用现有怪物/柱子/宝箱类型；Boss 铁门与终点奖励房逻辑不变
          const bossId = this.bossIdForFloor(floorId);
          const variants: string[] = ['standard'];
          if (floorId >= 15) variants.push('arena');
          if (floorId >= 20) variants.push('gauntlet');
          let variant = rng.pick(variants);
          const cx = room.centerX;
          const cy = room.centerY;

          if (variant === 'arena') {
            // 竞技场型：四周立柱圈，Boss 居中，2 只小怪分守东西两侧
            // （(cx±2,cy) 恰是立柱环位，守卫放环内对角 (cx±1,cy±1)，失败逐格外移）
            if (!rf.placeArenaPillars()) {
              variant = 'standard'; // 立柱圈架设失败，回退标准型
            } else {
              rf.put({ kind: 'carpet', x: cx, y: cy });
              rf.bossAt(bossId, { x: cx, y: cy });
              const mid = rf.pickMonsterId(pool);
              if (mid) {
                const flanks: { x: number; y: number }[][] = [
                  [{ x: cx - 1, y: cy - 1 }, { x: cx - 2, y: cy - 1 }, { x: cx - 2, y: cy + 1 }],
                  [{ x: cx + 1, y: cy + 1 }, { x: cx + 2, y: cy + 1 }, { x: cx + 2, y: cy - 1 }],
                ];
                let placedGuards = 0;
                for (const chain of flanks) {
                  for (const p of chain) {
                    if (rf.placeMonsterAt(mid, false, p)) { placedGuards++; break; }
                  }
                }
                if (placedGuards < 2) rf.placeMonsters(2 - placedGuards, false, pool);
              }
            }
          }

          if (variant === 'gauntlet') {
            // 关卡型：房间分前后两段——入口区先放 2 只小怪，Boss 镇守最深处。
            // 战斗为撞触触发（无主动激怒系统）：Boss 位于主路径末端，
            // 入口区小怪横在必经之路上，以位置门控实现「清完小怪才面对 Boss」。
            const path = rf.mainPath();
            const seat = path[Math.max(0, path.length - 2)] ?? { x: cx, y: cy };
            const mid = rf.pickMonsterId(pool);
            if (mid) {
              rf.placeMonsterAt(mid, false, path[1] ?? { x: cx, y: cy });
              rf.placeMonsterAt(mid, false, path[2] ?? { x: cx, y: cy });
            }
            rf.put({ kind: 'carpet', x: seat.x, y: seat.y });
            rf.bossAt(bossId, seat);
            variant = 'gauntlet_done';
          }

          if (variant === 'standard') {
            // 标准型：中心 Boss + 0~2 只精英护卫 + 角落宝箱
            rf.put({ kind: 'carpet', x: cx, y: cy });
            rf.bossAt(bossId, { x: cx, y: cy });
            rf.guardAround(cx, cy, rng.randInt(c.bossRoom.elites[0], c.bossRoom.elites[1]), pool, true, 2);
          }
          room.layout = `boss_${variant === 'gauntlet_done' ? 'gauntlet' : variant}`;
          rf.placeCornerChests(rng.randInt(c.bossRoom.chests[0], c.bossRoom.chests[1]));
          rf.placePotions(rng.randInt(c.bossRoom.potions[0], c.bossRoom.potions[1]));
          break;
        }
      }

      rf.placeRoomTorches();
      if (room.type !== 'witch') rf.placePillars(); // 女巫房用大锅/药架立身份，不立柱子
      rf.furnish(); // 陈设填充（反「大而空」）：配光保底 + 长墙列柱 + 入口引导地毯

      // 文档六 6.2 + P0-5：逐房间验证（含不可绕过/精英主路径/连通修复），失败项就地修复并记录日志
      if (!(room.type === 'end' && (kind === 'initial' || kind === 'boss'))) {
        const issues = rf.validate(room.type, pool, this.densityCap(room));
        if (issues.length > 0) {
          console.warn(`[ContentFiller] 房间 ${room.id}(${room.type}) 内容验证未通过：${issues.join('、')}`);
        }
      }
    }

    // 隐藏房间（P1-1）：1 只精英 + 1 个大宝箱（固定内容，不参与主路径校验）
    for (const hidden of hiddenRooms) this.fillHiddenRoom(hidden, grid, floorId);

    // 同层怪物数值收敛（P0-2）：全部房间（含隐藏房间与验证补怪）落定后统一执行
    this.convergeFloorStats([...rooms, ...hiddenRooms], floorId);

    // 装饰：走廊每 N 格壁挂火把
    const every = dataManager.mapGen.decor.torchCorridorEvery;
    for (const corridor of corridors) {
      corridor.tiles.forEach((tile, i) => {
        if (i % every !== Math.floor(every / 2)) return;
        const side = grid[tile.y - 1]?.[tile.x] === 1 ? { x: tile.x, y: tile.y - 1 }
          : grid[tile.y + 1]?.[tile.x] === 1 ? { x: tile.x, y: tile.y + 1 }
          : null;
        if (side && !this.entityAt(rooms, side.x, side.y)) {
          const host = rooms.find(r => r.id === corridor.fromRoomId);
          host?.entities.push({ id: IdGenerator.next('ent'), kind: 'torch', x: side.x, y: side.y });
        }
      });
    }
  }

  /**
   * 按楼层挑 Boss（每个层级有自己的 Boss）：
   * 命中 floorMin~floorMax 区间者优先；未命中则回落列表首个（远古巨龙，覆盖塔顶与外推楼层）。
   */
  private bossIdForFloor(floorId: number): string {
    const bosses = dataManager.monsters.monsters.filter(m => m.category === 'boss');
    const hit = bosses.find(b => floorId >= b.floorMin && floorId <= b.floorMax);
    return hit?.id ?? bosses[0]?.id ?? 'ancient_dragon';
  }

  /**
   * 遗物宝箱落点：优先对角空位，其次房间中心；仍被占用则扫全房取第一个空位。
   * 「必定生成」是设计约束，因此最后一步一定兜底（房间内几乎总有空格）。
   */
  private relicChestSpot(rf: RoomFill, room: RoomData): { x: number; y: number } | null {
    const preferred = [
      { x: room.x + room.width - 2, y: room.y + 1 },
      { x: room.x + 1, y: room.y + room.height - 2 },
      { x: room.centerX, y: room.centerY },
    ];
    for (const p of preferred) if (rf.freeAt(p.x, p.y)) return p;
    for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
      for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
        if (rf.freeAt(x, y)) return { x, y };
      }
    }
    return null;
  }

  /**
   * 房间「风险-收益」分层（引导玩家权衡路线）：按累积分值定档 ——
   *   支线绕路 +sideBonus（最重）／精英·Boss 房 +eliteBonus／大房（内面积 ≥ areaBonusAt）+1／深入（深度 ≥ depthBonusAt）+1／高层 +1；
   *   分值 ≥3 → 风险 3；1~2 → 风险 2；0 → 风险 1。
   * 风险 → 宝箱收益更高（rewardMul）、更易出「大宝箱」（vaultChance）、遗物掉率更高（relicMul，开箱时结算）。
   * 注意：**刻意不按风险增加怪物数量**——怪物数量直接决定经验收入，一旦膨胀就会冲垮整体成长曲线
   * （equipTest 会因此失败）。风险房「更危险」由房型（精英/Boss）、大房、深度本身承担。
   * 只有战斗/精英/宝箱/Boss 房参与：安全房（商栈/女巫/休整/铁匠）不设风险，避免误导路线判断。
   */
  private riskScore(room: RoomData, floorId: number): 1 | 2 | 3 {
    const r = dataManager.mapGen.content.risk;
    const innerArea = (room.width - 2) * (room.height - 2);
    let score = 0;
    if (room.mountedOn) score += r.sideBonus;                                  // 支线：绕路 → 最险
    if (room.type === 'elite' || room.type === 'boss') score += r.eliteBonus;  // 房型本身更凶险
    if (innerArea >= r.areaBonusAt) score += 1;                                // 大房：守军铺得开
    if (room.depth >= r.depthBonusAt) score += 1;                              // 深入：离起点越远越险
    if (r.floorBonusEvery > 0 && floorId >= r.floorBonusEvery) score += 1;      // 高层：整体更险
    return score >= 3 ? 3 : score >= 1 ? 2 : 1;
  }

  /**
   * 楼层级风险分配 + **层内差异保底**：
   *   ① 逐房间按 `riskScore` 定档；
   *   ② 同层风险房 ≥2 且档位全同时，提最深一间（或全 3 时降最浅一间）——
   *      否则玩家在一层里根本无从权衡「安全低收益 vs 危险高收益」。
   * 保底规则本身也是可学习的：**越往深处越危险**。
   */
  private assignFloorRisk(rooms: RoomData[], floorId: number): void {
    const riskRooms = rooms.filter(r => RISK_ROOM_TYPES.has(r.type));
    for (const room of riskRooms) room.risk = this.riskScore(room, floorId);
    if (riskRooms.length >= 2 && new Set(riskRooms.map(r => r.risk)).size === 1) {
      const sorted = [...riskRooms].sort((a, b) => a.depth - b.depth);
      const base = sorted[0].risk ?? 1;
      if (base === 3) sorted[0].risk = 2;                              // 全 3 → 最浅一间降档，给出稳妥路线
      else sorted[sorted.length - 1].risk = (base + 1) as 1 | 2 | 3;   // 否则提最深一间
    }
    const mul = dataManager.mapGen.content.risk.rewardMul;
    for (const room of riskRooms) room.rewardMul = mul[(room.risk ?? 1) - 1] ?? 1;
  }

  /** 怪物密度上限（按房间内面积） */
  private densityCap(room: RoomData): number {
    const c = dataManager.mapGen.content;
    const area = (room.width - 2) * (room.height - 2);
    if (area <= c.smallAreaMax) return c.density.small;
    if (area <= c.mediumAreaMax) return c.density.medium;
    return c.density.large;
  }

  /**
   * 隐藏房间内容（P1-1）：1 个 grand 大宝箱 + 1 只精英贴身守护（5×5 内面积 9 → 密度上限 2，恰不超）。
   * 宝箱放距入口最远的角落，精英守在宝箱邻侧（取宝必先过精英，满足 P1-4 守护半径）；
   * 火把 ×2 点缀。奖励随房间深度吃深度倍率（P0-1）。
   */
  private fillHiddenRoom(room: RoomData, grid: TileCode[][], floorId: number): void {
    const rf = new RoomFill(room, grid, floorId);
    const all = dataManager.monsters.monsters.filter(m => m.category === 'normal');
    const avail = all.filter(m => floorId >= m.floorMin && floorId <= m.floorMax);
    const pool: PoolEntry[] = (avail.length > 0 ? avail : all).map(m => ({ id: m.id, weight: m.weight }));
    const mid = rf.pickMonsterId(pool);

    // 大宝箱：距入口最远的内侧角落
    const ent = room.hiddenEntrance;
    const corners = [
      { x: room.x + 1, y: room.y + 1 },
      { x: room.x + room.width - 2, y: room.y + 1 },
      { x: room.x + 1, y: room.y + room.height - 2 },
      { x: room.x + room.width - 2, y: room.y + room.height - 2 },
    ].sort((a, b) => (ent
      ? manhattan(b, ent) - manhattan(a, ent)
      : 0));
    const corner = corners.find(p => rf.freeAt(p.x, p.y)) ?? corners[0];
    rf.put({ kind: 'chest', chestTier: 'grand', x: corner.x, y: corner.y });

    // 精英：宝箱邻侧贴身守护（免地形校验放置；失败退到房间中央）
    if (mid) {
      const guardSpots = [
        { x: corner.x, y: corner.y + 1 }, { x: corner.x + 1, y: corner.y },
        { x: corner.x, y: corner.y - 1 }, { x: corner.x - 1, y: corner.y },
        { x: room.centerX, y: room.centerY },
      ];
      for (const p of guardSpots) {
        if (rf.placeMonsterUnchecked(mid, true, p)) break;
      }
    }
    // 火把 ×2：房间两对角墙格
    let torches = 0;
    for (const p of [
      { x: room.x + 1, y: room.y }, { x: room.x + room.width - 2, y: room.y + room.height - 1 },
    ]) {
      if (torches >= 2) break;
      if (grid[p.y]?.[p.x] === 1 && !room.entities.some(e => e.x === p.x && e.y === p.y)) {
        rf.put({ kind: 'torch', x: p.x, y: p.y });
        torches++;
      }
    }
  }

  /**
   * 同层怪物数值收敛（P0-2）：约束同一楼层内怪物基础属性差距，避免数值断层。
   *   - 普通怪物属性极差（最大/最小）≤ 1.4
   *   - 全怪物（含精英）属性极差 ≤ 1.8
   *   - 精英软封顶：≤ 同楼层自身深度=1 普通基准 × 1.5
   * 仅约束 hp/攻击/防御；金币/经验掉落不受收敛影响。
   * 只向下修正（含深度≥4 深层房间：优先保证下限、不向上突破上限），
   * 取整用 floor 保证修正后不越过约束边界；怪物类型/精英标签/掉落规则均不变。
   * 实现为「全部落定后统一校验」：与逐个生成时记录极值等价，且能保证最终整层满足约束。
   */
  private convergeFloorStats(rooms: RoomData[], floorId: number): void {
    const monsters = rooms
      .flatMap(r => r.entities.filter(e => e.kind === 'monster' && e.stats))
      .map(e => e as (typeof e & { stats: NonNullable<(typeof e)['stats']> }));
    if (monsters.length === 0) return;
    const attrs = ['hp', 'attack', 'defense'] as const;
    const clampTo = (e: { stats: NonNullable<MapEntity['stats']> }, attr: typeof attrs[number], cap: number): void => {
      if (e.stats[attr] > cap) e.stats[attr] = Math.max(1, Math.floor(cap));
    };

    // 1) 普通怪极差 ≤ 1.4（以同层普通怪最小值为基准；无普通怪时退用全怪最小值）
    const normals = monsters.filter(e => !e.isElite);
    const basePool = normals.length > 0 ? normals : monsters;
    for (const attr of attrs) {
      const min = Math.min(...basePool.map(e => e.stats[attr]));
      for (const e of normals) clampTo(e, attr, min * 1.4);
    }

    // 2) 精英软封顶 ≤ 自身深度=1 普通基准 × 1.5（掉落倍率不受影响）
    const statCalc = StatCalculator.getInstance();
    for (const e of monsters.filter(m => m.isElite)) {
      const def = dataManager.getMonster(e.monsterId ?? '');
      if (!def) continue;
      const base = statCalc.monsterStats(def, floorId, false, 1);
      for (const attr of attrs) clampTo(e, attr, base[attr] * 1.5);
    }

    // 3) 全怪极差 ≤ 1.8（以最终全怪最小值为基准）
    for (const attr of attrs) {
      const min = Math.min(...monsters.map(e => e.stats[attr]));
      for (const e of monsters) clampTo(e, attr, min * 1.8);
    }
  }

  private entityAt(rooms: RoomData[], x: number, y: number): boolean {
    return rooms.some(r => r.entities.some(e => e.x === x && e.y === y));
  }
}
