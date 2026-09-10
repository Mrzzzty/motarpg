/**
 * 地图生成总装配：楼层 → 路径 → 房间 → 走廊 → 内容 → 验证。
 * 验证失败自动重试整层（上限 maxAttempts 次）。
 */
import type { FloorMap, RoomConnection, RoomData, TileCode } from '../types';
import { rng } from '../utils/MathUtils';
import { DIRS4, manhattan, doorInner } from '../utils/Grid';
import { FloorGenerator } from './FloorGenerator';
import { PathGenerator } from './PathGenerator';
import { RoomGenerator } from './RoomGenerator';
import { CorridorGenerator } from './CorridorGenerator';
import { ContentFiller } from './ContentFiller';
import { MapValidator } from './MapValidator';
import { Logger } from '../utils/Logger';
import { dataManager } from '../core/DataManager';

export class MapGenerator {
  private static instance: MapGenerator;
  /** 最近一次生成成功的尝试次数（诊断重试率） */
  public lastAttempts = 1;
  private constructor() {}
  static getInstance(): MapGenerator {
    if (!MapGenerator.instance) MapGenerator.instance = new MapGenerator();
    return MapGenerator.instance;
  }

  generate(floorId: number): FloorMap {
    const maxAttempts = dataManager.mapGen.generation.maxAttempts;
    let lastErrors: string[] = [];

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const floor = this.tryGenerate(floorId);
        if (floor) {
          this.lastAttempts = attempt;
          return floor;
        }
      } catch (err) {
        lastErrors = [String(err)];
      }
      if (attempt === 5 || attempt === 20) {
        Logger.warn(`[MapGen] 楼层${floorId} 第${attempt}次尝试失败：${lastErrors.join('; ') || '拓扑验证未通过'}`);
      }
    }
    throw new Error(`楼层${floorId}生成失败（${maxAttempts}次尝试）：${lastErrors.join('; ')}`);
  }

  private tryGenerate(floorId: number): FloorMap | null {
    const floorGen = FloorGenerator.getInstance();
    const pathGen = PathGenerator.getInstance();
    const roomGen = RoomGenerator.getInstance();
    const corridorGen = CorridorGenerator.getInstance();
    const filler = ContentFiller.getInstance();
    const validator = MapValidator.getInstance();

    // 1-2. 楼层 + 路径规划
    const alloc = floorGen.allocate(floorId);
    const plan = pathGen.plan(alloc);
    if (!pathGen.validateDiff(plan)) return null;

    // 3. 房间放置
    const placed = roomGen.place(floorId, plan);
    if (!placed) return null;
    const rooms = placed.rooms;
    const grid = placed.grid;

    // 4. 走廊
    const corridorResult = corridorGen.connect(rooms, grid);
    const connections: RoomConnection[] = corridorResult.connections;

    // 深度：连接图中距起点的房间数
    const adj = new Map<string, string[]>(rooms.map(r => [r.id, [] as string[]]));
    for (const c of connections) {
      adj.get(c.from)?.push(c.to);
      adj.get(c.to)?.push(c.from);
    }
    const depths = validator.bfs(rooms[0].id, adj);
    for (const room of rooms) room.depth = depths.get(room.id) ?? 0;

    // 5. 验证（内容填充前先验证拓扑）
    const check = validator.validate(rooms, connections, alloc.kind === 'normal');
    if (!check.pass) {
      if (alloc.kind === 'normal') return null;
      // 特殊层固定结构必过连通校验，失败视为异常
      throw new Error(`特殊层校验失败: ${check.errors.join('; ')}`);
    }

    // 5.5 隐藏房间（P1-1）：验证通过后生成（不参与连通性校验、不影响 Tension），
    //     深度按相邻走廊两端房间计算，内容随主填充一起落地并纳入同层收敛
    const hiddenRooms = alloc.kind === 'normal'
      ? corridorGen.spawnHiddenRooms(rooms, corridorResult.corridors, grid, floorId)
      : [];

    // 5.6 悬崖地形（编码 4）：不可通行深渊；校验通过才落地，内容填充紧随其后自然避开
    this.carveCliffs(rooms, grid, floorId);

    // 6. 内容填充
    filler.fill(rooms, corridorResult.corridors, grid, floorId, alloc.kind, hiddenRooms);

    const start = rooms[0];
    return {
      floorId,
      kind: alloc.kind,
      rooms,
      hiddenRooms,
      corridors: corridorResult.corridors,
      connections,
      grid,
      width: grid[0].length,
      height: grid.length,
      entryX: start.centerX,
      entryY: start.centerY,
    };
  }

  /** 调试辅助：控制台输出整层结构摘要 */
  describe(floor: FloorMap): string {
    const lines: string[] = [];
    lines.push(`=== 楼层 ${floor.floorId}（${floor.kind}） ${floor.rooms.length}个房间 ${floor.corridors.length}条走廊 ===`);
    for (const room of this.roomsSorted(floor)) {
      const path = room.onPathA ? 'A' : room.onPathB ? 'B' : room.mountedOn ? '侧室' : '-';
      lines.push(
        `#${room.order} ${room.type.padEnd(8, '　')} 网格(${room.gx},${room.gy}) ` +
        `世界(${room.x},${room.y}) ${room.width}x${room.height} 深${room.depth} ` +
        `路径${path} 来源${room.fromDirection ?? '根'} 门${room.doors.length} 实体${room.entities.length}`,
      );
    }
    lines.push(`入口: (${floor.entryX},${floor.entryY}) 路径数: 见验证器`);
    return lines.join('\n');
  }

  /**
   * 悬崖地形（编码 4，规格 2.1.5）：在部分房间内挖出不可通行的不规则深渊。
   *
   * 约束：
   * - 只作用于非关键房（战斗 / 精英 / 宝箱 / 商人 / 女巫 / 铁匠），起点、终点、Boss、休整房不挖；
   * - 避开「门内侧格及其邻域」，保证进出房间的通道不被切断；
   * - 每块深渊落地后立刻校验「房间内可行走格仍单连通且各门内侧可达」，不通过则**回滚**——
   *   深渊绝不允许把房间切成两半或制造无法到达的口袋（内容校验器只能撤柱，救不了悬崖）。
   */
  private carveCliffs(rooms: RoomData[], grid: TileCode[][], floorId: number): void {
    const cfg = dataManager.mapGen.cliff;
    if (floorId < cfg.minFloor) return;
    const allowance = new Set(['combat', 'elite', 'chest', 'merchant', 'witch', 'blacksmith']);

    for (const room of rooms) {
      if (!allowance.has(room.type)) continue;
      const area = (room.width - 2) * (room.height - 2);
      if (area < cfg.minInnerArea || !rng.chance(cfg.chance)) continue;

      const doorInners = room.doors.map(d => doorInner(d));
      const candidates: { x: number; y: number }[] = [];
      for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
        for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
          if (grid[y]?.[x] !== 0) continue;
          // 门内侧格及其邻域：保住进出通道不被切断
          if (doorInners.some(p => Math.abs(x - p.x) <= 1 && Math.abs(y - p.y) <= 1)) continue;
          // 房间中心及其邻域：商人 / 铁匠 / 女巫 / 竞技场精英等按中心固定落位，必须留空
          if (Math.abs(x - room.centerX) <= 1 && Math.abs(y - room.centerY) <= 1) continue;
          candidates.push({ x, y });
        }
      }
      if (candidates.length === 0) continue;

      for (let attempt = 0; attempt < 2; attempt++) {
        const size = rng.randInt(cfg.patchMin, cfg.patchMax);
        const anchor = candidates[rng.randInt(0, candidates.length - 1)];
        const patch = this.growCliffPatch(anchor, size, candidates);
        if (patch.length === 0) continue;
        for (const p of patch) grid[p.y][p.x] = 4;
        if (this.roomStillConnected(room, grid)) break; // 落地成功
        for (const p of patch) grid[p.y][p.x] = 0;      // 回滚后重试
      }
    }
  }

  /** 从锚点向四邻生长一小块连通深渊（仅取候选格 → 形状不规则且贴着可行走区） */
  private growCliffPatch(
    anchor: { x: number; y: number },
    size: number,
    allowed: { x: number; y: number }[],
  ): { x: number; y: number }[] {
    const key = (p: { x: number; y: number }): string => `${p.x},${p.y}`;
    const allowedSet = new Set(allowed.map(key));
    const patch = [anchor];
    const inPatch = new Set([key(anchor)]);
    while (patch.length < size) {
      const frontier = allowed.filter(p => allowedSet.has(key(p)) && !inPatch.has(key(p))
        && patch.some(q => manhattan(q, p) === 1));
      if (frontier.length === 0) break;
      const pick = frontier[rng.randInt(0, frontier.length - 1)];
      patch.push(pick);
      inPatch.add(key(pick));
    }
    return patch;
  }

  /** 房间内可行走格是否仍单连通，且各门内侧格都可达 */
  private roomStillConnected(room: RoomData, grid: TileCode[][]): boolean {
    const cells: { x: number; y: number }[] = [];
    for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
      for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
        if (grid[y]?.[x] === 0) cells.push({ x, y });
      }
    }
    if (cells.length === 0) return true;
    const doorInners = room.doors
      .map(d => doorInner(d))
      .filter(p => grid[p.y]?.[p.x] === 0);
    const source = doorInners[0] ?? cells[0];
    const seen = new Set([`${source.x},${source.y}`]);
    const queue = [source];
    while (queue.length > 0) {
      const cur = queue.shift()!;
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        if (nx < room.x + 1 || nx > room.x + room.width - 2) continue;
        if (ny < room.y + 1 || ny > room.y + room.height - 2) continue;
        const k = `${nx},${ny}`;
        if (seen.has(k) || grid[ny]?.[nx] !== 0) continue;
        seen.add(k);
        queue.push({ x: nx, y: ny });
      }
    }
    return seen.size === cells.length && doorInners.every(p => seen.has(`${p.x},${p.y}`));
  }

  private roomsSorted(floor: FloorMap): RoomData[] {
    return [...floor.rooms].sort((a, b) => a.order - b.order);
  }
}
