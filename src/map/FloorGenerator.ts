/**
 * 第1层：楼层生成器（文档二 第二节）
 * 决定：特殊楼层判定、普通楼层房间数量、房间类型分配（运气平衡器 Tension 机制）、商人数量限制。
 */
import type { FloorKind, RoomType } from '../types';
import { dataManager } from '../core/DataManager';
import { rng } from '../utils/MathUtils';
import { Logger } from '../utils/Logger';

export interface FloorAllocation {
  floorId: number;
  kind: FloorKind;
  /** 按生成顺序的房间类型列表（首个为起点/休整，末尾为终点） */
  roomTypes: RoomType[];
}

export class FloorGenerator {
  private static instance: FloorGenerator;

  private constructor() {}
  static getInstance(): FloorGenerator {
    if (!FloorGenerator.instance) FloorGenerator.instance = new FloorGenerator();
    return FloorGenerator.instance;
  }

  /** 判定楼层类型：第1层固定初始层；楼层号%5===0 为Boss层 */
  getFloorKind(floorId: number): FloorKind {
    const cfg = dataManager.mapGen;
    if (floorId === cfg.initialFloor) return 'initial';
    if (floorId % cfg.bossFloorInterval === 0) return 'boss';
    return 'normal';
  }

  /**
   * 分配楼层房间类型。
   * 初始层与Boss层不参与随机分配，直接返回固定结构。
   */
  allocate(floorId: number): FloorAllocation {
    const kind = this.getFloorKind(floorId);

    if (kind === 'initial') {
      // 初始层：起点 → 终点
      return { floorId, kind, roomTypes: ['start', 'end'] };
    }
    if (kind === 'boss') {
      // Boss层：休整房 → Boss房 → 终点奖励房
      return { floorId, kind, roomTypes: ['rest', 'boss', 'end'] };
    }

    const count = this.rollRoomCount(floorId);
    const allocatable = count - 2; // 起点、终点固定
    const middle = this.allocateByTension(floorId, allocatable);
    return { floorId, kind, roomTypes: ['start', ...middle, 'end'] };
  }

  /** 普通楼层房间数量（文档二 2.2） */
  private rollRoomCount(floorId: number): number {
    const cfg = dataManager.mapGen;
    const band = cfg.floorRoomCounts.find(b => floorId >= b.minFloor && floorId <= b.maxFloor)
      ?? cfg.floorRoomCounts[cfg.floorRoomCounts.length - 1];
    const count = rng.randInt(band.min, band.max);
    return Math.min(count, cfg.maxRooms);
  }

  /**
   * 运气平衡器（文档二 2.4）：张力值 Tension 机制。
   * 正面概率 = 1/(1+e^(-Tension))；Tension≥4 强制正面，≤-3 强制负面；每层重置。
   * 特殊约束：商人数量限制（总数≤7 最多1个，8-12 最多2个），优先级高于平衡器。
   */
  private allocateByTension(floorId: number, allocatable: number): RoomType[] {
    const cfg = dataManager.mapGen;
    const weights = cfg.tension.weights;
    let tension = 0;
    let merchantCount = 0;
    const result: RoomType[] = [];

    for (let i = 0; i < allocatable; i++) {
      const totalSoFar = result.length + 2; // 含起点终点
      const merchantCap = totalSoFar <= cfg.merchantLimit.fewMaxRooms
        ? cfg.merchantLimit.fewCount
        : cfg.merchantLimit.manyCount;

      // 正面/负面判定
      let positive: boolean;
      if (tension >= cfg.tension.forcePositiveAt) {
        positive = true; // 强制干预：正面
      } else if (tension <= cfg.tension.forceNegativeAt) {
        positive = false; // 强制干预：负面
      } else {
        positive = rng.chance(1 / (1 + Math.exp(-tension)));
      }

      let type: RoomType;
      if (positive) {
        // 正面分类：宝箱 / 商人（商人受数量限制）
        const merchantAllowed = merchantCount < merchantCap;
        type = merchantAllowed && rng.chance(0.3) ? 'merchant' : 'chest';
        if (type === 'merchant') merchantCount++;
      } else {
        // 负面分类：战斗（70%）/ 精英（30%）
        type = rng.chance(0.3) ? 'elite' : 'combat';
      }

      result.push(type);
      tension += (weights[type] ?? 0);
    }

    // 女巫酿药间：按间隔强制安排一间安全房（优先替换宝箱位，保证玩家能遇到）
    if (this.isWitchFloor(floorId)) {
      const idx = result.findIndex(t => t === 'chest');
      const target = idx >= 0 ? idx : result.length - 1;
      if (target >= 0) {
        tension -= (weights[result[target]] ?? 0);
        result[target] = 'witch';
        tension += (weights.witch ?? 0);
      }
    }

    Logger.debug(`[FloorGen] 楼层${floorId} 类型分配=${result.join(',')} 终态Tension=${tension}`);
    return result;
  }

  /** 女巫酿药间出现楼层：最早 minFloor 起，每 interval 层一间（5~8 层区间内） */
  private isWitchFloor(floorId: number): boolean {
    const cfg = dataManager.mapGen.witchLimit;
    return floorId >= cfg.minFloor && (floorId - cfg.minFloor) % cfg.interval === 0;
  }
}
