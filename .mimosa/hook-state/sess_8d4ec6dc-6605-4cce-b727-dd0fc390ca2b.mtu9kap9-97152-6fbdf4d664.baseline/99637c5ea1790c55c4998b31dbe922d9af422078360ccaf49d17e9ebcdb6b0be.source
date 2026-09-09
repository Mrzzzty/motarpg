/**
 * 宝箱实体（规格 模块E）：品质类型 + 解锁条件 + 开启状态。
 */
import type { ChestTierDef, RoomEntity } from '../types';
import { dataManager } from '../core/DataManager';

export class Chest {
  isOpened = false;

  constructor(public entity: RoomEntity) {}

  get id(): string { return this.entity.id; }
  get x(): number { return this.entity.x; }
  get y(): number { return this.entity.y; }
  get isLocked(): boolean { return this.entity.isLocked ?? false; }
  get unlockCondition(): string | null { return this.entity.unlockCondition ?? null; }

  get tierId(): NonNullable<RoomEntity['chestTier']> {
    return this.entity.chestTier ?? 'auto';
  }

  /** 宝箱类型定义（auto 时由 ChestSystem 按楼层roll） */
  getTierDef(): ChestTierDef | null {
    if (this.tierId === 'auto') return null;
    return dataManager.config.chest.find(c => c.tier === this.tierId) ?? null;
  }
}
