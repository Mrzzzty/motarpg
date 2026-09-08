/**
 * 地图生成总装配：楼层 → 路径 → 房间 → 走廊 → 内容 → 验证。
 * 验证失败自动重试整层（上限 maxAttempts 次）。
 */
import type { FloorMap, RoomConnection, RoomData, TileCode } from '../types';
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

    // 6. 内容填充
    filler.fill(rooms, corridorResult.corridors, grid, floorId, alloc.kind);

    const start = rooms[0];
    return {
      floorId,
      kind: alloc.kind,
      rooms,
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

  private roomsSorted(floor: FloorMap): RoomData[] {
    return [...floor.rooms].sort((a, b) => a.order - b.order);
  }
}
