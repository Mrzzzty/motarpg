/**
 * 第2层：路径生成器（文档二 第三节）
 * 决定：双主干路径结构（A/B路线）、侧室挂载、路径差异化与长度差约束。
 *
 * 路径A：更多精英房间（高风险高收益）；路径B：更多普通战斗（低风险中收益）。
 * 长度差 ≤ 2（用 ceil/floor 均分保证 ≤1）。
 * 商人/宝箱等侧室挂载到主干路径的中间节点上。
 */
import type { RoomType } from '../types';
import { rng } from '../utils/MathUtils';
import { dataManager } from '../core/DataManager';
import type { FloorAllocation } from './FloorGenerator';

export type Rail = 'S' | 'A' | 'B' | 'E' | 'side';

export interface PlannedRoom {
  type: RoomType;
  /** S=起点 E=终点 A/B=主干成员 side=侧室 */
  rail: Rail;
  /** 主干上的序号（rail=A/B 时有效，0起始） */
  railIndex: number;
  /** 侧室挂载的目标（挂到链上哪个主干房间之后） */
  mountIndex: number;
  /** 是否在主干上（S/A/B/E 均视为主干节点） */
  isTrunk: boolean;
}

/**
 * 构建生成顺序链：S, a0, [sides(a0)], b0, [sides(b0)], a1, ... , E
 * 链上相邻房间即固定走廊的连接对象。
 */
export class PathGenerator {
  private static instance: PathGenerator;
  private constructor() {}
  static getInstance(): PathGenerator {
    if (!PathGenerator.instance) PathGenerator.instance = new PathGenerator();
    return PathGenerator.instance;
  }

  plan(alloc: FloorAllocation): PlannedRoom[] {
    const middle = alloc.roomTypes.slice(1, -1);

    if (alloc.kind !== 'normal' || middle.length < 2) {
      // 初始层 / Boss层 / 极小楼层：线性链，全部视为主干
      return alloc.roomTypes.map((type, i) => ({
        type,
        rail: (i === 0 ? 'S' : i === alloc.roomTypes.length - 1 ? 'E' : 'A') as Rail,
        railIndex: Math.max(0, i - 1),
        mountIndex: -1,
        isTrunk: true,
      }));
    }

    // 1. 分类：战斗/精英 → 主干候选；宝箱 → 灵活（本实现挂为主干填充或侧室）；商人/女巫/铁匠 → 侧室
    const trunkCandidates: RoomType[] = middle.filter(t => t === 'combat' || t === 'elite');
    const sideRooms: RoomType[] = middle.filter(t => t === 'chest' || t === 'merchant' || t === 'witch' || t === 'blacksmith');

    // 2. 主干候选排序：精英靠前（分配给路径A），再轮流分配
    const sorted = [...trunkCandidates];
    sorted.sort((a, b) => (a === 'elite' ? 0 : 1) - (b === 'elite' ? 0 : 1));
    const railA: RoomType[] = [];
    const railB: RoomType[] = [];
    // 轮流分配且A先拿：A 得到 ceil(k/2) 个（含更多精英），B 得到 floor(k/2) 个（更多普通战斗）
    sorted.forEach((t, i) => {
      if (i % 2 === 0) railA.push(t); else railB.push(t);
    });
    // 兜底：若某一侧为空则挪一个（k≥2 时不会发生）
    if (railB.length === 0 && railA.length >= 2) railB.push(railA.pop()!);
    if (railA.length === 0 && railB.length >= 2) railA.push(railB.pop()!);

    // 3. 侧室挂载：挂在主干中间节点上（宝箱偏向主干尾部，商人偏向主干中部）
    const trunkLen = railA.length + railB.length;
    const mounts = sideRooms.map(type => {
      const midOffset = (type === 'merchant' || type === 'witch' || type === 'blacksmith')
        ? Math.floor(trunkLen / 2)            // 商人/女巫/铁匠挂主干正中
        : rng.randInt(Math.ceil(trunkLen / 2), trunkLen - 1); // 宝箱挂主干后半段
      return { type, mountIndex: Math.min(midOffset, trunkLen - 1) };
    });

    // 4. 组装链顺序：S, a0, sides(a0), b0, sides(b0), a1, ...
    const chain: PlannedRoom[] = [{
      type: alloc.roomTypes[0], rail: 'S', railIndex: 0, mountIndex: -1, isTrunk: true,
    }];

    const pushTrunk = (type: RoomType, rail: 'A' | 'B', railIndex: number) => {
      chain.push({ type, rail, railIndex, mountIndex: -1, isTrunk: true });
      // 该主干房间的序号（trunk 中的第几个）
      const trunkOrder = railIndex * 2 + (rail === 'A' ? 0 : 1);
      const sidesHere = mounts.map((m, mi) => ({ ...m, mi })).filter(m => m.mountIndex === trunkOrder);
      for (const s of sidesHere) {
        chain.push({ type: s.type, rail: 'side', railIndex: -1, mountIndex: trunkOrder, isTrunk: false });
      }
    };

    const n = Math.max(railA.length, railB.length);
    for (let i = 0; i < n; i++) {
      if (i < railA.length) pushTrunk(railA[i], 'A', i);
      if (i < railB.length) pushTrunk(railB[i], 'B', i);
    }
    // 未匹配挂载点（防御性）：直接挂链尾主干之后
    for (const s of mounts) {
      const trunkOrder = s.mountIndex;
      const already = chain.some(c => c.rail === 'side' && c.mountIndex === trunkOrder && c.type === s.type);
      if (!already && !chain.some(c => c.mountIndex === trunkOrder && c.rail === 'side')) {
        chain.splice(chain.length - 1, 0, { type: s.type, rail: 'side', railIndex: -1, mountIndex: trunkOrder, isTrunk: false });
      }
    }

    chain.push({ type: 'end', rail: 'E', railIndex: 0, mountIndex: -1, isTrunk: true });
    return chain;
  }

  /** 长度差校验值：路径A与路径B的房间数差（文档要求 ≤2） */
  pathLengthDiff(plan: PlannedRoom[]): number {
    const a = plan.filter(p => p.rail === 'A').length;
    const b = plan.filter(p => p.rail === 'B').length;
    return Math.abs(a - b);
  }

  /** 校验配置约束（冗余保险，ceil/floor 分配已保证） */
  validateDiff(plan: PlannedRoom[]): boolean {
    return this.pathLengthDiff(plan) <= dataManager.mapGen.path.maxLengthDiff;
  }
}
