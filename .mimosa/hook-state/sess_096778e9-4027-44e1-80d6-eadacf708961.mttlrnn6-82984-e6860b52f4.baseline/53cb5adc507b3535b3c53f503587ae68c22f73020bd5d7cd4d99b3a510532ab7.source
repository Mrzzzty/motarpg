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
import type { CorridorData, FloorKind, MapEntity, PotionTier, RoomData, RoomDoor, TileCode } from '../types';
import { dataManager } from '../core/DataManager';
import type { ContentBand } from '../core/DataManager';
import { rng } from '../utils/MathUtils';
import { IdGenerator } from '../utils/IdGenerator';

interface Spot {
  x: number;
  y: number;
  /** 距最近门（入口）的 BFS 距离 */
  dist: number;
}

interface P {
  x: number;
  y: number;
}

interface PoolEntry {
  id: string;
  weight: number;
}

const DIRS4: [number, number][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];

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
    if (this.taken.has(`${x},${y}`)) return false;
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
      const p = this.innerOfDoor(d);
      return `${p.x},${p.y}`;
    }));
    for (let step = 0; step <= this.room.width; step++) {
      const off = step === 0 ? 0 : (step % 2 === 1 ? (step + 1) / 2 : -(step / 2));
      const ax = this.room.centerX - 1 + off;
      if (ax < this.room.x + 1 || ax + 1 > this.room.x + this.room.width - 2) continue;
      const cells = [0, 1].flatMap(dz => [0, 1].map(dx => ({ x: ax + dx, y: ay + dz })));
      if (!cells.every(p => this.freeAt(p.x, p.y))) continue;
      if (cells.some(p => doorInners.has(`${p.x},${p.y}`))) continue;
      this.put({ kind: 'stair', x: ax, y: ay, targetFloor, stairSpan: 2 });
      this.put({ kind: 'stair', x: ax + 1, y: ay, targetFloor, stairSpan: 1 });
      this.put({ kind: 'stair', x: ax, y: ay + 1, targetFloor, stairSpan: 1 });
      this.put({ kind: 'stair', x: ax + 1, y: ay + 1, targetFloor, stairSpan: 1 });
      return true;
    }
    return false;
  }

  private monsterAt(id: string, isElite: boolean, p: P): void {
    this.put({ kind: 'monster', monsterId: id, isElite, x: p.x, y: p.y });
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
        spots.push({ x, y, dist: dist.get(`${x},${y}`) ?? 99 });
      }
    }
    return spots;
  }

  /** 门朝向房间内侧的格 */
  private innerOfDoor(d: RoomDoor): P {
    switch (d.direction) {
      case 'east': return { x: d.x - 1, y: d.y };
      case 'west': return { x: d.x + 1, y: d.y };
      case 'north': return { x: d.x, y: d.y + 1 };
      default: return { x: d.x, y: d.y - 1 };
    }
  }

  /**
   * 入口→出口主路径（房间内格序列）。
   * 入口/出口 = 房间门内侧格中相距最远的一对；单门时取「门 → 距门最远格」。
   */
  mainPath(): P[] {
    const inners = this.room.doors
      .map(d => this.innerOfDoor(d))
      .filter(p => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 0);
    if (inners.length === 0) return [{ x: this.room.centerX, y: this.room.centerY }];
    if (inners.length === 1) return this.bfsPath(inners[0], this.farthestFrom(inners[0]));

    let best: [P, P] = [inners[0], inners[1]];
    let bestD = -1;
    for (let i = 0; i < inners.length; i++) {
      for (let j = i + 1; j < inners.length; j++) {
        const d = Math.abs(inners[i].x - inners[j].x) + Math.abs(inners[i].y - inners[j].y);
        if (d > bestD) { bestD = d; best = [inners[i], inners[j]]; }
      }
    }
    const path = this.bfsPath(best[0], best[1]);
    return path.length > 0 ? path : [best[0]];
  }

  /** 房间内 BFS 路径（只看地形，忽略实体） */
  private bfsPath(from: P, to: P): P[] {
    const key = (x: number, y: number): string => `${x},${y}`;
    const prev = new Map<string, string | null>();
    const queue: P[] = [from];
    prev.set(key(from.x, from.y), null);
    while (queue.length > 0) {
      const cur = queue.shift()!;
      if (cur.x === to.x && cur.y === to.y) break;
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        if (!this.inRoom(nx, ny)) continue;
        if (this.grid[ny]?.[nx] !== 0) continue;
        const k = key(nx, ny);
        if (prev.has(k)) continue;
        prev.set(k, key(cur.x, cur.y));
        queue.push({ x: nx, y: ny });
      }
    }
    const end = key(to.x, to.y);
    if (!prev.has(end)) return [];
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
    const usable = cells.filter(c => Math.abs(c.x - entry.x) + Math.abs(c.y - entry.y) >= 2);
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
      const p = this.innerOfDoor(d);
      return `${p.x},${p.y}`;
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
        if (this.taken.has(`${x},${y}`)) continue;
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
      const p = this.innerOfDoor(d);
      protectedCells.add(`${p.x},${p.y}`);
    }
    for (const p of this.mainPath()) protectedCells.add(`${p.x},${p.y}`);

    const placeable = ring.filter(p =>
      this.inRoom(p.x, p.y)
      && this.freeAt(p.x, p.y)
      && !protectedCells.has(`${p.x},${p.y}`));
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
      this.put({ kind: 'chest', chestTier: 'normal', x: c.x, y: c.y });
      out.push(c);
    });
    return out;
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
    const cd = (p: P): number => Math.min(...corners.map(c => Math.abs(p.x - c.x) + Math.abs(p.y - c.y)));
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

  /**
   * 女巫酿药间（安全房）：中央女巫 + 朝门一侧的熬药大锅 + 两侧药架 + 角落治疗泉。
   * 女巫提供特殊药水交易，治疗泉提供治疗服务（交互在世界层处理）。
   */
  placeWitchRoom(shelves: number): void {
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const entry = this.mainPath()[0] ?? { x: cx, y: cy + 1 };

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
    if (this.freeAt(cauldron.x, cauldron.y)) this.putBlocking('cauldron', cauldron.x, cauldron.y);

    // 药架：垂直于「入口方向」的两侧各一，不足时用四角补齐
    const perp: P[] = dx !== 0
      ? [{ x: 0, y: 1 }, { x: 0, y: -1 }]
      : [{ x: 1, y: 0 }, { x: -1, y: 0 }];
    let placed = 0;
    for (const p of perp) {
      if (placed >= shelves) break;
      const sx = cx + p.x * 2;
      const sy = cy + p.y * 2;
      if (this.freeAt(sx, sy)) { this.putBlocking('shelf', sx, sy); placed++; }
    }
    if (placed < shelves) {
      for (const c of rng.shuffle(this.innerCorners())) {
        if (placed >= shelves) break;
        if (this.freeAt(c.x, c.y)) { this.putBlocking('shelf', c.x, c.y); placed++; }
      }
    }

    // 治疗泉：离入口最远的角落（越深入越珍贵）
    const corners = rng.shuffle(this.innerCorners()).sort((a, b) =>
      (Math.abs(b.x - entry.x) + Math.abs(b.y - entry.y))
      - (Math.abs(a.x - entry.x) + Math.abs(a.y - entry.y)));
    for (const c of corners) {
      if (this.freeAt(c.x, c.y)) { this.put({ kind: 'fountain', x: c.x, y: c.y }); break; }
    }
  }

  /** 战斗房按深度取档位（文档五 深度与难度对应） */
  bandFor(bands: ContentBand[]): ContentBand {
    const depth = this.room.depth;
    return bands.find(b => depth <= b.maxDepth) ?? bands[bands.length - 1];
  }

  // ============ 内容验证（文档六 6.1） ============

  /**
   * 验证并就地修复：
   *   战斗不可绕过 —— 把怪物/柱子当障碍后入口仍能到出口/楼梯 = 可绕过 → 主路径中点补怪
   *   宝箱被守护   —— 宝箱 guard.chestRadius 格内无怪 → 邻格补怪
   *   楼梯被守护   —— 楼梯 guard.stairRadius 格内无怪 → 楼梯前补怪
   *   无重叠/可到达 —— 放置阶段已由 freeAt 保证（装饰地毯除外）
   * 返回未修复的失败项（调用方记日志）。
   */
  validate(roomType: RoomData['type'], pool: PoolEntry[]): string[] {
    const issues: string[] = [];
    const g = dataManager.mapGen.content.guard;
    const hasMonster = (): boolean => this.room.entities.some(e => e.kind === 'monster' || e.kind === 'boss');

    // 1) 战斗不可绕过（战斗房 / 精英房）
    if ((roomType === 'combat' || roomType === 'elite') && pool.length > 0) {
      if (!hasMonster() || this.canBypass()) {
        const path = this.mainPath();
        const mid = path[Math.floor(path.length / 2)] ?? { x: this.room.centerX, y: this.room.centerY };
        if (this.freeAt(mid.x, mid.y)) {
          this.monsterAt(rng.pickWeighted(pool, m => m.weight).id, false, mid);
        } else {
          issues.push('可绕过且无空位补怪');
        }
      }
    }

    // 2) 宝箱被守护
    for (const chest of this.room.entities.filter(e => e.kind === 'chest')) {
      const guarded = this.room.entities.some(e =>
        (e.kind === 'monster' || e.kind === 'boss')
        && Math.abs(e.x - chest.x) + Math.abs(e.y - chest.y) <= g.chestRadius);
      if (!guarded && pool.length > 0) {
        if (this.guardAround(chest.x, chest.y, 1, pool, false, 1) === 0) issues.push('宝箱无守护且无空位');
      }
    }

    // 3) 楼梯被守护
    for (const stair of this.room.entities.filter(e => e.kind === 'stair')) {
      const guarded = this.room.entities.some(e =>
        (e.kind === 'monster' || e.kind === 'boss')
        && Math.abs(e.x - stair.x) + Math.abs(e.y - stair.y) <= g.stairRadius);
      if (!guarded && pool.length > 0) {
        if (this.guardStair(1, pool) === 0) issues.push('楼梯无守护且无空位');
      }
    }

    return issues;
  }

  /** 把怪物/柱子视为障碍后，入口仍能走到出口/楼梯 → 说明挡路不成立 */
  private canBypass(): boolean {
    const path = this.mainPath();
    const target = this.room.entities.find(e => e.kind === 'stair') ?? path[path.length - 1];
    const entry = path[0];
    if (!target || !entry) return false;

    const blocked = new Set(
      this.room.entities
        .filter(e => e.kind === 'monster' || e.kind === 'boss' || e.kind === 'pillar')
        .map(e => `${e.x},${e.y}`),
    );
    const seen = new Set<string>([`${entry.x},${entry.y}`]);
    const queue: P[] = [entry];
    while (queue.length > 0) {
      const cur = queue.shift()!;
      if (cur.x === target.x && cur.y === target.y) return true;
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        const k = `${nx},${ny}`;
        if (!this.inRoom(nx, ny)) continue;
        if (this.grid[ny]?.[nx] !== 0) continue;
        if (blocked.has(k) || seen.has(k)) continue;
        seen.add(k);
        queue.push({ x: nx, y: ny });
      }
    }
    return false;
  }
}

/** 内容填充器：逐房间按类型填充（阻塞模式 + 文档物品清单） */
export class ContentFiller {
  private static instance: ContentFiller;
  private constructor() {}
  static getInstance(): ContentFiller {
    if (!ContentFiller.instance) ContentFiller.instance = new ContentFiller();
    return ContentFiller.instance;
  }

  fill(rooms: RoomData[], corridors: CorridorData[], grid: TileCode[][], floorId: number, kind: FloorKind): void {
    const c = dataManager.mapGen.content;
    const all = dataManager.monsters.monsters.filter(m => m.category === 'normal');
    const avail = all.filter(m => floorId >= m.floorMin && floorId <= m.floorMax);
    const pool: PoolEntry[] = (avail.length > 0 ? avail : all).map(m => ({ id: m.id, weight: m.weight }));

    for (const room of rooms) {
      const rf = new RoomFill(room, grid, floorId);

      switch (room.type) {
        case 'start': {
          if (kind === 'initial') {
            rf.put({ kind: 'npc', npcId: 'npc_guide', x: room.centerX, y: room.y + 1 });
          }
          rf.placePotions(rng.randInt(c.startRoom.potions[0], c.startRoom.potions[1]));
          break;
        }

        case 'end': {
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
          } else {
            // 守卫型：楼梯前 0-1 只守门怪
            rf.guardStair(rng.randInt(c.exitRoom.guards[0], c.exitRoom.guards[1]), pool);
            rf.placeCornerChests(rng.randInt(c.exitRoom.chests[0], c.exitRoom.chests[1]));
          }
          rf.placePotions(rng.randInt(c.exitRoom.potions[0], c.exitRoom.potions[1]));
          break;
        }

        case 'rest':
          break; // 休整房：安全区，无内容（回血由世界层处理）

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
          // 围宝型：宝箱放角落，怪物占据邻格
          const chests = rf.placeCornerChests(rng.randInt(c.treasureRoom.chests[0], c.treasureRoom.chests[1]), true);
          let guards = rng.randInt(c.treasureRoom.monsters[0], c.treasureRoom.monsters[1]);
          for (const ch of chests) {
            if (guards <= 0) break;
            guards -= rf.guardAround(ch.x, ch.y, 1, pool, false, 1);
          }
          rf.placePotions(rng.randInt(c.treasureRoom.potions[0], c.treasureRoom.potions[1]));
          break;
        }

        case 'combat': {
          // 布局随机（大房解锁更多排列）：挡路 / 双重屏障 / 竞技场立柱 / 游散
          const band = rf.bandFor(c.combatByDepth);
          const cap = this.densityCap(room);
          const want = Math.max(1, Math.min(rng.randInt(band.monsters[0], band.monsters[1]), cap));
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
          const elites = rng.randInt(band.elites[0], band.elites[1]);
          if (elites > 0) rf.placeMonsters(elites, true, pool);
          rf.placeCornerChests(rng.randInt(band.chests[0], band.chests[1]));
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
          // 护卫杂兵：王座型分立在精英两侧，其余布局随机散布
          const adds = rng.randInt(c.eliteRoom.monsters[0], c.eliteRoom.monsters[1]);
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
          const chests = rf.placeCornerChests(rng.randInt(c.eliteRoom.chests[0], c.eliteRoom.chests[1]), true);
          for (const ch of chests) rf.guardAround(ch.x, ch.y, 1, pool, false, 1);
          rf.placePotions(rng.randInt(c.eliteRoom.potions[0], c.eliteRoom.potions[1]));
          break;
        }

        case 'boss': {
          rf.put({ kind: 'carpet', x: room.centerX, y: room.centerY });
          rf.put({ kind: 'boss', monsterId: 'ancient_dragon', x: room.centerX, y: room.centerY });
          // 守卫型辅助：Boss 两侧 0-2 精英
          rf.guardAround(room.centerX, room.centerY, rng.randInt(c.bossRoom.elites[0], c.bossRoom.elites[1]), pool, true, 2);
          rf.placeCornerChests(rng.randInt(c.bossRoom.chests[0], c.bossRoom.chests[1]));
          rf.placePotions(rng.randInt(c.bossRoom.potions[0], c.bossRoom.potions[1]));
          break;
        }
      }

      rf.placeRoomTorches();
      if (room.type !== 'witch') rf.placePillars(); // 女巫房用大锅/药架立身份，不立柱子

      // 文档六 6.2：逐房间验证，失败项就地修复并记录日志
      if (!(room.type === 'end' && (kind === 'initial' || kind === 'boss'))) {
        const issues = rf.validate(room.type, pool);
        if (issues.length > 0) {
          console.warn(`[ContentFiller] 房间 ${room.id}(${room.type}) 内容验证未通过：${issues.join('、')}`);
        }
      }
    }

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

  /** 怪物密度上限（按房间内面积） */
  private densityCap(room: RoomData): number {
    const c = dataManager.mapGen.content;
    const area = (room.width - 2) * (room.height - 2);
    if (area <= c.smallAreaMax) return c.density.small;
    if (area <= c.mediumAreaMax) return c.density.medium;
    return c.density.large;
  }

  private entityAt(rooms: RoomData[], x: number, y: number): boolean {
    return rooms.some(r => r.entities.some(e => e.x === x && e.y === y));
  }
}
