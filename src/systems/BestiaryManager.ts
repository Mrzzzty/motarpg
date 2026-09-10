/**
 * 图鉴系统：怪物击杀计数与解锁（见过=遭遇并击败）。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';

export class BestiaryManager {
  private static instance: BestiaryManager;
  private kills = new Map<string, number>();

  private constructor() {
    eventBus.on('monsterDefeated', p => {
      const entity = p.entityId;
      void entity;
      // monsterDefeated 携带名称；按名称反查怪物ID
      const def = dataManager.monsters.monsters.find(m => p.name.includes(m.name));
      if (def) this.kills.set(def.id, (this.kills.get(def.id) ?? 0) + 1);
    });
    eventBus.on('bossDefeated', p => {
      const def = dataManager.monsters.monsters.find(m => m.category === 'boss' && p.name.includes(m.name));
      if (def) this.kills.set(def.id, (this.kills.get(def.id) ?? 0) + 1);
    });
  }

  static getInstance(): BestiaryManager {
    if (!BestiaryManager.instance) BestiaryManager.instance = new BestiaryManager();
    return BestiaryManager.instance;
  }

  getKillCount(monsterId: string): number { return this.kills.get(monsterId) ?? 0; }

  /** 是否已解锁（调试点亮开启时全部视作已解锁） */
  isUnlocked(monsterId: string): boolean {
    return gameState.debugUnlockAll || this.getKillCount(monsterId) > 0;
  }

  /** 图鉴条目：全部怪物（未解锁显示???） */
  entries(): { def: typeof dataManager.monsters.monsters[number]; kills: number; unlocked: boolean }[] {
    return dataManager.monsters.monsters
      .filter(m => m.weight > 0 || m.category === 'boss')
      .map(def => ({ def, kills: this.getKillCount(def.id), unlocked: this.isUnlocked(def.id) }));
  }

  export(): Record<string, number> { return Object.fromEntries(this.kills); }

  restore(data: Record<string, number>): void {
    this.kills.clear();
    for (const [k, v] of Object.entries(data)) this.kills.set(k, v);
  }
}
