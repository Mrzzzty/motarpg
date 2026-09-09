/**
 * 楼梯实体（规格 2.1.6）：上楼=前往更深楼层(floorId+1)，下楼=返回(floorId-1)。
 */
import type { RoomEntity, StairDirection } from '../types';

export class Stair {
  constructor(public entity: RoomEntity) {}

  get id(): string { return this.entity.id; }
  get x(): number { return this.entity.x; }
  get y(): number { return this.entity.y; }
  get direction(): StairDirection { return this.entity.stairDirection ?? 'up'; }
  get targetFloor(): number { return this.entity.targetFloor ?? 0; }
  get targetRoomId(): string { return this.entity.targetRoomId ?? ''; }
  get targetX(): number { return this.entity.targetX ?? 1; }
  get targetY(): number { return this.entity.targetY ?? 1; }
  get groupId(): string { return this.entity.stairGroupId ?? 'A'; }

  get label(): string {
    return this.direction === 'up' ? `前往第 ${this.targetFloor} 层` : `返回第 ${this.targetFloor} 层`;
  }
}
