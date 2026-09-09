/**
 * 成就系统：统计型成就 + 解锁物品获取权（商人高阶药水/装备品质上架门槛）。
 * 进度随存档持久化；解锁时发 achievementUnlocked + notification。
 * 商人（MerchantSystem）通过 isUnlocked() 查询获取权。
 */
import { eventBus } from '../core/EventBus';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import { Logger } from '../utils/Logger';

/** 成就解锁 → 物品获取权 ID（MerchantSystem 用） */
export const UNLOCK = {
  POTION_QUALITY: 'potion_quality', // 优质药水
  POTION_STRONG: 'potion_strong',   // 强效药水
  POTION_HOLY: 'potion_holy',       // 圣药
  EQUIP_RARE: 'equip_rare',         // 商人上架稀有装备
  EQUIP_EPIC: 'equip_epic',         // 商人上架史诗装备
} as const;

interface AchievementDef {
  id: string;
  name: string;
  desc: string;
  /** 达成后解锁的获取权（展示用文案） */
  unlock: string;
  /** 达成条件（基于累计统计） */
  check: (s: { kills: number; bosses: number; chests: number; maxFloor: number }) => boolean;
}

const DEFS: AchievementDef[] = [
  {
    id: 'first_kills', name: '初出茅庐', desc: '累计击败 10 只怪物',
    unlock: `解锁商人『优质药水』购买权`, check: s => s.kills >= 10,
  },
  {
    id: 'hunter_30', name: '百战猎人', desc: '累计击败 30 只怪物',
    unlock: `解锁商人『强效药水』购买权`, check: s => s.kills >= 30,
  },
  {
    id: 'dragon_slayer', name: '弑龙者', desc: '击败任意 Boss',
    unlock: `解锁商人『圣药』购买权`, check: s => s.bosses >= 1,
  },
  {
    id: 'explorer_5', name: '探塔者', desc: '到达第 5 层',
    unlock: `解锁商人『稀有装备』上架权`, check: s => s.maxFloor >= 5,
  },
  {
    id: 'treasure_8', name: '寻宝家', desc: '累计开启 8 个宝箱',
    unlock: `解锁商人『史诗装备』上架权`, check: s => s.chests >= 8,
  },
];

export class AchievementSystem {
  private static instance: AchievementSystem;
  private constructor() {
    this.bindEvents();
  }
  static getInstance(): AchievementSystem {
    if (!AchievementSystem.instance) AchievementSystem.instance = new AchievementSystem();
    return AchievementSystem.instance;
  }

  private unlocked = new Set<string>();
  private kills = 0;
  private bosses = 0;
  private chests = 0;
  private maxFloor = 1;

  private bindEvents(): void {
    eventBus.on('monsterDefeated', p => {
      this.kills++;
      if (p.isBoss) this.bosses++;
      this.evaluate();
    });
    eventBus.on('bossDefeated', () => {
      this.bosses++;
      this.evaluate();
    });
    eventBus.on('chestOpened', () => {
      this.chests++;
      this.evaluate();
    });
    eventBus.on('floorChanged', p => {
      this.maxFloor = Math.max(this.maxFloor, p.toFloor);
      this.evaluate();
    });
    eventBus.on('gameRestarted', () => this.resetProgress());
  }

  /** 读档恢复（未达成的成就按历史统计重新评估） */
  restore(saved: Record<string, boolean>, stats: { totalMonstersDefeated: number; totalBossesDefeated: number; totalChestsOpened: number }): void {
    this.unlocked = new Set(Object.keys(saved).filter(k => saved[k]));
    this.kills = stats.totalMonstersDefeated;
    this.bosses = stats.totalBossesDefeated;
    this.chests = stats.totalChestsOpened;
    this.maxFloor = Math.max(1, Player.getInstance().state.currentFloor);
    this.evaluate(true);
  }

  export(): Record<string, boolean> {
    return Object.fromEntries([...this.unlocked].map(id => [id, true]));
  }

  isUnlocked(unlockId: string): boolean {
    return this.unlocked.has(unlockId) || this.checkByUnlockId(unlockId);
  }

  private checkByUnlockId(unlockId: string): boolean {
    const s = { kills: this.kills, bosses: this.bosses, chests: this.chests, maxFloor: this.maxFloor };
    return DEFS.some(d => d.unlock.includes(UNLOCK[unlockId as keyof typeof UNLOCK] ?? '\u0000') && d.check(s));
  }

  /** 全部成就定义（成就面板展示） */
  list(): { id: string; name: string; desc: string; unlock: string; done: boolean }[] {
    const s = { kills: this.kills, bosses: this.bosses, chests: this.chests, maxFloor: this.maxFloor };
    return DEFS.map(d => ({ id: d.id, name: d.name, desc: d.desc, unlock: d.unlock, done: d.check(s) }));
  }

  /** 重新开始：清空进度（成就属于本局成长线） */
  resetProgress(): void {
    this.unlocked.clear();
    this.kills = 0;
    this.bosses = 0;
    this.chests = 0;
    this.maxFloor = 1;
  }

  private evaluate(silent = false): void {
    const s = { kills: this.kills, bosses: this.bosses, chests: this.chests, maxFloor: this.maxFloor };
    for (const d of DEFS) {
      if (this.unlocked.has(d.id) || !d.check(s)) continue;
      this.unlocked.add(d.id);
      if (!silent) {
        Logger.info(`[成就] ${d.name} 解锁：${d.unlock}`);
        eventBus.emit('achievementUnlocked', { id: d.id, name: d.name, unlock: d.unlock });
        eventBus.emit('notification', { message: `🏆 成就达成「${d.name}」：${d.unlock}`, type: 'success', icon: '🏆' });
      }
    }
    void dataManager;
  }
}
