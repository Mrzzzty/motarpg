/**
 * 验证器（文档二 第七节）
 * 1 房间连通：所有房间可从起点到达
 * 2 路径数量：≥2条起点到终点的不同路径（普通层）
 * 3 路径长度差：≤2个房间（普通层）
 * 4 战斗保底：至少1个战斗房间在主干上
 * 5 无孤立：每个房间至少1个连接
 */
import type { RoomConnection, RoomData } from '../types';
import { dataManager } from '../core/DataManager';

export interface ValidationResult {
  pass: boolean;
  errors: string[];
  pathLengths: number[];
}

const MAX_PATH_ENUM = 500;

export class MapValidator {
  private static instance: MapValidator;
  private constructor() {}
  static getInstance(): MapValidator {
    if (!MapValidator.instance) MapValidator.instance = new MapValidator();
    return MapValidator.instance;
  }

  /** 特殊层（初始/Boss）只验证连通性 */
  validate(rooms: RoomData[], connections: RoomConnection[], isNormal: boolean): ValidationResult {
    const errors: string[] = [];
    const adj = this.buildAdjacency(rooms, connections);
    const start = rooms[0];
    const end = rooms[rooms.length - 1];

    // 1 & 5：连通 + 无孤立
    const dist = this.bfs(start.id, adj);
    for (const room of rooms) {
      const neighbors = adj.get(room.id) ?? [];
      if (neighbors.length === 0) errors.push(`房间${room.id}无连接（孤立）`);
      if (!dist.has(room.id)) errors.push(`房间${room.id}不可从起点到达`);
    }

    let pathLengths: number[] = [];
    if (isNormal) {
      // 2 & 3：起点→终点 路径数量与长度差
      pathLengths = this.enumeratePaths(start.id, end.id, adj);
      if (pathLengths.length < 2) {
        errors.push(`起点到终点仅${pathLengths.length}条路径（要求≥2）`);
      } else {
        let ok = false;
        for (let i = 0; i < pathLengths.length && !ok; i++) {
          for (let j = i + 1; j < pathLengths.length && !ok; j++) {
            if (Math.abs(pathLengths[i] - pathLengths[j]) <= dataManager.mapGen.path.maxLengthDiff) ok = true;
          }
        }
        if (!ok) errors.push(`路径长度差均>${dataManager.mapGen.path.maxLengthDiff}：[${pathLengths.join(',')}]`);
      }

      // 4：战斗保底（战斗/精英房间在主干上）
      const hasTrunkBattle = rooms.some(r => (r.onPathA || r.onPathB) && (r.type === 'combat' || r.type === 'elite'));
      if (!hasTrunkBattle) errors.push('主干上没有战斗房间');
    }

    return { pass: errors.length === 0, errors, pathLengths };
  }

  /** BFS 距离表（也用于房间 depth） */
  bfs(fromId: string, adj: Map<string, string[]>): Map<string, number> {
    const dist = new Map<string, number>([[fromId, 0]]);
    const queue = [fromId];
    while (queue.length > 0) {
      const cur = queue.shift()!;
      const d = dist.get(cur)!;
      for (const next of adj.get(cur) ?? []) {
        if (dist.has(next)) continue;
        dist.set(next, d + 1);
        queue.push(next);
      }
    }
    return dist;
  }

  /** 枚举起点→终点全部简单路径长度（封顶防爆炸） */
  private enumeratePaths(fromId: string, toId: string, adj: Map<string, string[]>): number[] {
    const lengths: number[] = [];
    const visited = new Set<string>([fromId]);

    const dfs = (node: string, depth: number): boolean => {
      if (node === toId) {
        lengths.push(depth);
        return lengths.length >= MAX_PATH_ENUM;
      }
      for (const next of adj.get(node) ?? []) {
        if (visited.has(next)) continue;
        visited.add(next);
        const stop = dfs(next, depth + 1);
        visited.delete(next);
        if (stop) return true;
      }
      return false;
    };

    dfs(fromId, 1);
    return lengths;
  }

  private buildAdjacency(rooms: RoomData[], connections: RoomConnection[]): Map<string, string[]> {
    const adj = new Map<string, string[]>(rooms.map(r => [r.id, [] as string[]]));
    for (const conn of connections) {
      adj.get(conn.from)?.push(conn.to);
      adj.get(conn.to)?.push(conn.from);
    }
    return adj;
  }
}
