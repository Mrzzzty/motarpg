/**
 * NPC实体：对话数据包装。
 */
import { dataManager } from '../core/DataManager';
import type { NpcDef } from '../types';

export class NPC {
  constructor(
    public entityId: string,
    public npcId: string,
    public x: number,
    public y: number,
  ) {}

  get def(): NpcDef | undefined {
    return dataManager.getNpc(this.npcId);
  }

  get name(): string {
    return this.def?.name ?? '???';
  }

  get icon(): string {
    return this.def?.icon ?? '🧑';
  }

  get lines(): string[] {
    return this.def?.lines ?? ['……'];
  }
}
