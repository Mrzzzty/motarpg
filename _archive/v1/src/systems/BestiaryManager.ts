/**
 * 图鉴管理器（规格 模块C）：击败计数、解锁阈值、掉落物查询、进度。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import type { MonsterDef } from '../types';

export class BestiaryManager {
  private static instance: BestiaryManager;

  defeatCounts = new Map<string, number>();

  private constructor() {
    eventBus.on('monsterDefeated', p => this.recordDefeat(p.monsterId));
    eventBus.on('bossDefeated', p => this.recordDefeat(p.bossId));
  }

  static getInstance(): BestiaryManager {
    if (!BestiaryManager.instance) {
      BestiaryManager.instance = new BestiaryManager();
    }
    return BestiaryManager.instance;
  }

  recordDefeat(monsterId: string): void {
    this.defeatCounts.set(monsterId, (this.defeatCounts.get(monsterId) ?? 0) + 1);
  }

  getDefeatCount(monsterId: string): number {
    return this.defeatCounts.get(monsterId) ?? 0;
  }

  /** 是否解锁详细图鉴（默认击败5次，规格 C.2） */
  isUnlocked(monsterId: string): boolean {
    const def = dataManager.getMonster(monsterId);
    const threshold = def?.unlockThreshold ?? 5;
    return this.getDefeatCount(monsterId) >= threshold;
  }

  /** 图鉴条目（未解锁时隐藏弱点与描述） */
  getEntry(monsterId: string): {
    def: MonsterDef | null;
    defeatCount: number;
    isUnlocked: boolean;
    weakness: string[] | null;
    drops: string[] | null;
  } {
    const def = dataManager.getMonster(monsterId) ?? null;
    const unlocked = this.isUnlocked(monsterId);
    return {
      def,
      defeatCount: this.getDefeatCount(monsterId),
      isUnlocked: unlocked,
      weakness: unlocked ? def?.weakness ?? [] : null,
      drops: unlocked ? def?.drops ?? [] : null,
    };
  }

  getMonsterDrops(monsterId: string): string[] {
    return dataManager.getMonster(monsterId)?.drops ?? [];
  }

  /** 图鉴总进度 */
  getBestiaryProgress(): { unlocked: number; total: number; encountered: number } {
    const total = dataManager.monsters.length;
    let unlocked = 0;
    let encountered = 0;
    for (const m of dataManager.monsters) {
      const count = this.getDefeatCount(m.id);
      if (count > 0) encountered++;
      if (count >= (m.unlockThreshold || 5)) unlocked++;
    }
    return { unlocked, total, encountered };
  }

  /** 展示用列表 */
  listEntries(): { monster: MonsterDef; count: number; unlocked: boolean }[] {
    return dataManager.monsters.map(m => ({
      monster: m,
      count: this.getDefeatCount(m.id),
      unlocked: this.isUnlocked(m.id),
    }));
  }

  exportState(): Record<string, number> {
    return Object.fromEntries(this.defeatCounts);
  }

  loadState(counts: Record<string, number>): void {
    this.defeatCounts = new Map(Object.entries(counts));
  }

  reset(): void {
    this.defeatCounts.clear();
  }
}
