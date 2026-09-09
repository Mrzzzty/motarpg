/**
 * 成就管理器（规格 模块B）：条件检测、解锁、奖励、隐藏成就。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import type { AchievementCondition, AchievementDef, QuestReward } from '../types';
import { InventoryManager } from './InventoryManager';
import { CollectibleSystem } from './CollectibleSystem';

export interface AchievementStats {
  totalGoldEarned: number;
  totalSoulEarned: number;
  totalBosses: number;
  totalMonsters: number;
  totalQuests: number;
  totalChests: number;
  totalCollectibles: number;
  legendaryEquipped: number;
  playTimeHours: number;
}

export class AchievementManager {
  private static instance: AchievementManager;

  unlocked = new Set<string>();
  private playTimeAccumulator = 0;
  /** 统计快照（由 SaveManager 每30秒/事件同步） */
  stats: AchievementStats = {
    totalGoldEarned: 0,
    totalSoulEarned: 0,
    totalBosses: 0,
    totalMonsters: 0,
    totalQuests: 0,
    totalChests: 0,
    totalCollectibles: 0,
    legendaryEquipped: 0,
    playTimeHours: 0,
  };

  private constructor() {
    this.bindEvents();
  }

  static getInstance(): AchievementManager {
    if (!AchievementManager.instance) {
      AchievementManager.instance = new AchievementManager();
    }
    return AchievementManager.instance;
  }

  private bindEvents(): void {
    eventBus.on('monsterDefeated', () => { this.stats.totalMonsters++; this.checkAll(); });
    eventBus.on('bossDefeated', () => { this.stats.totalBosses++; this.checkAll(); });
    eventBus.on('goldChanged', p => { if (p.delta > 0) this.stats.totalGoldEarned += p.delta; });
    eventBus.on('soulChanged', p => { if (p.delta > 0) this.stats.totalSoulEarned += p.delta; this.checkAll(); });
    eventBus.on('chestOpened', () => { this.stats.totalChests++; this.checkAll(); });
    eventBus.on('questCompleted', () => { this.stats.totalQuests++; this.checkAll(); });
    eventBus.on('collectibleCollected', () => { this.stats.totalCollectibles++; this.checkAll(); });
    eventBus.on('levelUp', () => this.checkAll());
    eventBus.on('floorChanged', p => { if (p.mode === 'main') this.checkAll(); });
    eventBus.on('statusApplied', p => {
      // status_applied 条件
      for (const ach of dataManager.achievements) {
        if (this.unlocked.has(ach.id)) continue;
        if (ach.condition.type !== 'status_applied') continue;
        if (ach.condition.effectId !== p.effectId) continue;
        this.statusCounts[p.effectId] = (this.statusCounts[p.effectId] ?? 0) + 1;
        this.checkAll();
      }
    });
    eventBus.on('equipmentEquipped', p => {
      const eq = InventoryManager.getInstance().getEquipment(p.equipmentId);
      if (eq && (eq.quality === 'legendary' || eq.quality === 'mythic')) {
        this.stats.legendaryEquipped++;
        this.checkAll();
      }
    });
  }

  private statusCounts: Record<string, number> = {};

  /** 游戏时间心跳（GameLoop调用，秒） */
  tickPlayTime(deltaSeconds: number): void {
    this.playTimeAccumulator += deltaSeconds;
    const threshold = 30;
    if (this.playTimeAccumulator >= threshold) {
      this.stats.playTimeHours = this.stats.playTimeHours + this.playTimeAccumulator / 3600;
      this.playTimeAccumulator = 0;
      this.checkAll();
    }
  }

  checkAll(): void {
    const player = Player.hasInstance() ? Player.getInstance() : null;
    for (const ach of dataManager.achievements) {
      if (this.unlocked.has(ach.id)) continue;
      if (this.isConditionMet(ach.condition, player)) {
        this.unlock(ach);
      }
    }
  }

  private isConditionMet(cond: AchievementCondition, player: Player | null): boolean {
    switch (cond.type) {
      case 'level': return (player?.level ?? 1) >= cond.value;
      case 'total_gold': return this.stats.totalGoldEarned >= cond.value;
      case 'total_soul': return this.stats.totalSoulEarned >= cond.value;
      case 'defeat_monster': return this.monsterDefeatCounts[cond.monsterId] >= cond.quantity;
      case 'reach_floor': return gameState.maxFloorReached >= cond.value;
      case 'defeat_boss': return this.stats.totalBosses >= cond.quantity;
      case 'equip_legendary': return this.stats.legendaryEquipped >= cond.quantity;
      case 'collect_series': {
        const progress = CollectibleSystem.getInstance().getSeriesProgress(cond.seriesId);
        return progress !== null && progress.owned >= progress.total;
      }
      case 'status_applied': return (this.statusCounts[cond.effectId] ?? 0) >= cond.quantity;
      case 'collect_collectibles': return (player?.collectibles.length ?? 0) >= cond.quantity;
      case 'complete_quests': return this.stats.totalQuests >= cond.quantity;
      case 'open_chests': return this.stats.totalChests >= cond.quantity;
      case 'play_time': return this.stats.playTimeHours >= cond.value;
      default: return false;
    }
  }

  private monsterDefeatCounts: Record<string, number> = {};

  /** 图鉴系统同步的击败计数 */
  recordMonsterDefeat(monsterId: string): void {
    this.monsterDefeatCounts[monsterId] = (this.monsterDefeatCounts[monsterId] ?? 0) + 1;
    this.checkAll();
  }

  private unlock(ach: AchievementDef): void {
    this.unlocked.add(ach.id);
    this.grantReward(ach.reward);
    eventBus.emit('achievementUnlocked', { achievementId: ach.id, name: ach.name, reward: ach.reward });
    eventBus.emit('notification', {
      message: `成就解锁：${ach.name}${ach.isHidden ? '' : ` — ${ach.description}`}`,
      type: 'success',
      icon: ach.icon,
    });
  }

  private grantReward(reward: QuestReward): void {
    if (!Player.hasInstance()) return;
    const player = Player.getInstance();
    switch (reward.type) {
      case 'exp': player.addExp(Number(reward.value)); break;
      case 'gold': player.gainGold(Number(reward.value)); break;
      case 'soul': player.gainSoul(Number(reward.value)); break;
      case 'item':
        InventoryManager.getInstance().addItem(String(reward.value), reward.quantity ?? 1);
        break;
      case 'collectible':
        CollectibleSystem.getInstance().addCollectible(String(reward.value));
        break;
      default: break;
    }
  }

  /** 展示列表（隐藏成就解锁前不显示信息） */
  getDisplayList(): { ach: AchievementDef; isUnlocked: boolean }[] {
    return dataManager.achievements.map(ach => ({
      ach,
      isUnlocked: this.unlocked.has(ach.id),
    })).map(({ ach, isUnlocked }) => ({
      ach: isUnlocked || !ach.isHidden ? ach : { ...ach, name: '???', description: '隐藏成就', icon: '❓' },
      isUnlocked,
    }));
  }

  getProgressText(ach: AchievementDef): string {
    const cond = ach.condition;
    switch (cond.type) {
      case 'level': return `等级 ${Player.getInstance().level}/${cond.value}`;
      case 'total_gold': return `累计金币 ${Math.floor(this.stats.totalGoldEarned)}/${cond.value}`;
      case 'total_soul': return `累计魂晶 ${Math.floor(this.stats.totalSoulEarned)}/${cond.value}`;
      case 'defeat_boss': return `击败Boss ${this.stats.totalBosses}/${cond.quantity}`;
      case 'reach_floor': return `最高楼层 ${gameState.maxFloorReached}/${cond.value}`;
      case 'collect_collectibles': return `藏品 ${Player.getInstance().collectibles.length}/${cond.quantity}`;
      case 'complete_quests': return `完成任务 ${this.stats.totalQuests}/${cond.quantity}`;
      case 'open_chests': return `开启宝箱 ${this.stats.totalChests}/${cond.quantity}`;
      case 'play_time': return `游戏时长 ${Math.floor(this.stats.playTimeHours)}h/${cond.value}h`;
      default: return '';
    }
  }

  exportState(): { unlocked: string[]; stats: AchievementStats; monsterDefeatCounts: Record<string, number>; statusCounts: Record<string, number> } {
    return {
      unlocked: [...this.unlocked],
      stats: { ...this.stats },
      monsterDefeatCounts: { ...this.monsterDefeatCounts },
      statusCounts: { ...this.statusCounts },
    };
  }

  loadState(unlocked: string[], stats: AchievementStats, monsterDefeatCounts: Record<string, number>, statusCounts: Record<string, number>): void {
    this.unlocked = new Set(unlocked);
    this.stats = { ...stats };
    this.monsterDefeatCounts = { ...monsterDefeatCounts };
    this.statusCounts = { ...statusCounts };
  }

  reset(): void {
    this.unlocked.clear();
    this.stats = {
      totalGoldEarned: 0, totalSoulEarned: 0, totalBosses: 0, totalMonsters: 0,
      totalQuests: 0, totalChests: 0, totalCollectibles: 0, legendaryEquipped: 0, playTimeHours: 0,
    };
    this.monsterDefeatCounts = {};
    this.statusCounts = {};
    this.playTimeAccumulator = 0;
  }
}
