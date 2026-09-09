/**
 * 物品实体：地面上的消耗品/装备拾取物。
 */
import { dataManager } from '../core/DataManager';
import type { RoomEntity } from '../types';

export class Item {
  constructor(public entity: RoomEntity) {}

  get id(): string { return this.entity.id; }
  get x(): number { return this.entity.x; }
  get y(): number { return this.entity.y; }
  get itemId(): string { return this.entity.itemId ?? ''; }
  get quantity(): number { return this.entity.quantity ?? 1; }

  get def() {
    return dataManager.getItem(this.itemId);
  }

  get name(): string {
    return this.def?.name ?? this.itemId;
  }

  get icon(): string {
    return this.def?.icon ?? '❓';
  }
}
