/**
 * 第4层：走廊生成器（文档二 第五节）
 * 固定通道：按生成顺序 room_0 ↔ room_1 ↔ ... ↔ room_N-1。
 * 额外通道：几何相邻（房间网格曼哈顿距离≤1）的未连接对，25%概率打通，最多2条；
 * 其中优先尝试同路径捷径（a_i↔a_{i+1}、b_i↔b_{i+1}）与闭合边（起点↔b0、a末↔终点），
 * 用于满足"≥2条起点到终点路径"的硬性验证（验证失败由上层重试整层）。
 */
import type { CorridorData, Direction, RoomConnection, RoomData, TileCode } from '../types';
import { dataManager } from '../core/DataManager';
import { rng, MathUtils } from '../utils/MathUtils';
import { IdGenerator } from '../utils/IdGenerator';

export interface CorridorResult {
  corridors: CorridorData[];
  connections: RoomConnection[];
}

export class CorridorGenerator {
  private static instance: CorridorGenerator;
  private constructor() {}
  static getInstance(): CorridorGenerator {
    if (!CorridorGenerator.instance) CorridorGenerator.instance = new CorridorGenerator();
    return CorridorGenerator.instance;
  }

  connect(rooms: RoomData[], grid: TileCode[][]): CorridorResult {
    const corridors: CorridorData[] = [];
    const connections: RoomConnection[] = [];
    const connected = new Set<string>(); // "idA|idB" 已连接（有序对双方）
    const byId = new Map(rooms.map(r => [r.id, r]));

    const markConnected = (a: string, b: string) => {
      connected.add(this.pairKey(a, b));
      connected.add(this.pairKey(b, a));
    };
    const isConnected = (a: string, b: string) => connected.has(this.pairKey(a, b));

    // 1. 固定通道：链上相邻
    for (let i = 0; i + 1 < rooms.length; i++) {
      const a = rooms[i];
      const b = rooms[i + 1];
      const carved = this.carveCorridor(a, b, grid);
      if (!carved) continue; // 链上相邻房间必然轴向对齐，不会失败
      corridors.push({ id: IdGenerator.next('corr'), fromRoomId: a.id, toRoomId: b.id, tiles: carved.tiles, extra: false });
      connections.push({ from: a.id, to: b.id });
      markConnected(a.id, b.id);
    }

    // 2. 额外通道候选：几何相邻且未连接的房间对
    const cfg = dataManager.mapGen.corridor;
    const adjacentPairs: { a: RoomData; b: RoomData; priority: number }[] = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const a = rooms[i];
        const b = rooms[j];
        if (isConnected(a.id, b.id)) continue;
        if (MathUtils.manhattan(a.gx, a.gy, b.gx, b.gy) > cfg.adjacentManhattan) continue;
        adjacentPairs.push({ a, b, priority: this.shortcutPriority(a, b, rooms) });
      }
    }
    // 捷径对优先（priority 小者优先），其余随机
    adjacentPairs.sort((p, q) => p.priority - q.priority || rng.next() - 0.5);

    let extraCount = 0;
    let hasLoopShortcut = false;
    for (const pair of adjacentPairs) {
      if (extraCount >= cfg.extraMax) break;
      const roll = rng.chance(cfg.extraChance);
      if (!roll) continue;
      const carved = this.carveCorridor(pair.a, pair.b, grid);
      if (!carved) continue;
      corridors.push({ id: IdGenerator.next('corr'), fromRoomId: pair.a.id, toRoomId: pair.b.id, tiles: carved.tiles, extra: true });
      connections.push({ from: pair.a.id, to: pair.b.id });
      markConnected(pair.a.id, pair.b.id);
      extraCount++;
      if (pair.priority <= 1) hasLoopShortcut = true;
    }

    // 3. 验证兜底：若一个环捷径都没有，强制打通优先级最高的捷径对
    //    （保证"起点→终点≥2条路径"硬性规则；仍计入最多2条额外通道）
    if (!hasLoopShortcut) {
      const fallback = adjacentPairs.find(p => p.priority <= 1 && !isConnected(p.a.id, p.b.id) && extraCount < cfg.extraMax)
        ?? adjacentPairs.find(p => p.priority <= 2 && !isConnected(p.a.id, p.b.id) && extraCount < cfg.extraMax);
      if (fallback) {
        const carved = this.carveCorridor(fallback.a, fallback.b, grid);
        if (carved) {
          corridors.push({ id: IdGenerator.next('corr'), fromRoomId: fallback.a.id, toRoomId: fallback.b.id, tiles: carved.tiles, extra: true });
          connections.push({ from: fallback.a.id, to: fallback.b.id });
          markConnected(fallback.a.id, fallback.b.id);
        }
      }
    }

    void byId;
    return { corridors, connections };
  }

  /** 捷径优先级：0=同路径相邻捷径 1=闭合边 2=其余 */
  private shortcutPriority(a: RoomData, b: RoomData, rooms: RoomData[]): number {
    const sameRailAdjacent =
      (a.onPathA && b.onPathA) || (a.onPathB && b.onPathB);
    const isStart = rooms[0];
    const isEnd = rooms[rooms.length - 1];
    const closingEdge =
      (a === isStart && b.onPathB) || (b === isStart && a.onPathB) ||
      (a === isEnd && b.onPathA) || (b === isEnd && a.onPathA);
    if (sameRailAdjacent) {
      // 同路径但序号差>1 的不算捷径捷径候选（避免跨越式连接）
      return this.railGap(a, b) === 1 ? 0 : 2;
    }
    if (closingEdge) return 1;
    return 2;
  }

  /** 同路径序号差（非同路径返回 -1） */
  private railGap(a: RoomData, b: RoomData): number {
    return Math.abs(a.order - b.order); // 链上同路径房间按序排列，用生成序差近似路径序差
  }

  /**
   * 在两个几何相邻房间之间挖一条直线走廊（含两侧开门）。
   * 返回走廊地面格；两房间非轴向相邻时返回 null。
   */
  private carveCorridor(a: RoomData, b: RoomData, grid: TileCode[][]): { tiles: { x: number; y: number }[] } | null {
    if (a.gy === b.gy && a.gx !== b.gx) {
      const west = a.gx < b.gx ? a : b;
      const east = a.gx < b.gx ? b : a;
      // 公共内侧行（同房间网格行 → y 相同，取内侧行交集的中线）
      const rowTop = Math.max(west.y + 1, east.y + 1);
      const rowBottom = Math.min(west.y + west.height - 2, east.y + east.height - 2);
      if (rowTop > rowBottom) return null;
      const row = Math.floor((rowTop + rowBottom) / 2);
      const tiles: { x: number; y: number }[] = [];
      for (let x = west.x + west.width; x < east.x; x++) {
        if (this.insideGrid(grid, x, row)) { grid[row][x] = 0; tiles.push({ x, y: row }); }
      }
      this.carveDoor(west, east, row, 'east', grid);
      this.carveDoor(east, west, row, 'west', grid);
      return { tiles };
    }
    if (a.gx === b.gx && a.gy !== b.gy) {
      const north = a.gy < b.gy ? a : b;
      const south = a.gy < b.gy ? b : a;
      const colLeft = Math.max(north.x + 1, south.x + 1);
      const colRight = Math.min(north.x + north.width - 2, south.x + south.width - 2);
      if (colLeft > colRight) return null;
      const col = Math.floor((colLeft + colRight) / 2);
      const tiles: { x: number; y: number }[] = [];
      for (let y = north.y + north.height; y < south.y; y++) {
        if (this.insideGrid(grid, col, y)) { grid[y][col] = 0; tiles.push({ x: col, y }); }
      }
      this.carveDoor(north, south, col, 'south', grid);
      this.carveDoor(south, north, col, 'north', grid);
      return { tiles };
    }
    return null; // 对角相邻无法直连
  }

  /** 在房间墙上开门并记录 */
  private carveDoor(room: RoomData, other: RoomData, line: number, dir: Direction, grid: TileCode[][]): void {
    let dx = 0;
    let dy = 0;
    if (dir === 'east') { dx = room.x + room.width - 1; dy = line; }
    else if (dir === 'west') { dx = room.x; dy = line; }
    else if (dir === 'south') { dx = line; dy = room.y + room.height - 1; }
    else { dx = line; dy = room.y; }
    if (!this.insideGrid(grid, dx, dy)) return;
    // 门必须在房间边墙上（不在角落）
    if (dir === 'east' || dir === 'west') {
      if (dy <= room.y || dy >= room.y + room.height - 1) return;
    } else {
      if (dx <= room.x || dx >= room.x + room.width - 1) return;
    }
    grid[dy][dx] = 0;
    room.doors.push({ x: dx, y: dy, direction: dir, toRoomId: other.id });
  }

  private insideGrid(grid: TileCode[][], x: number, y: number): boolean {
    return y >= 0 && y < grid.length && x >= 0 && x < grid[0].length;
  }

  private pairKey(a: string, b: string): string {
    return `${a}|${b}`;
  }
}
