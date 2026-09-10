/**
 * 任务管理器（规格 模块B）：监听全局事件自动推进目标、完成发放奖励、追踪。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import type { Quest, QuestObjective, QuestReward } from '../types';
import { InventoryManager } from './InventoryManager';
import { CollectibleSystem } from './CollectibleSystem';

export class QuestManager {
  private static instance: QuestManager;

  activeQuests: Quest[] = [];
  completedQuests: Quest[] = [];
  /** 累计计数型条件（如击败任意怪物数） */
  private counters: Record<string, number> = {};

  private constructor() {
    this.bindEvents();
  }

  static getInstance(): QuestManager {
    if (!QuestManager.instance) {
      QuestManager.instance = new QuestManager();
    }
    return QuestManager.instance;
  }

  /** 新游戏：载入无前置的主线任务 */
  initForNewGame(): void {
    this.activeQuests = [];
    this.completedQuests = [];
    this.counters = {};
    for (const quest of dataManager.quests) {
      if (quest.prerequisites.length === 0) {
        this.acceptQuest(quest.id, true);
      }
    }
  }

  acceptQuest(questId: string, silent = false): boolean {
    if (this.activeQuests.some(q => q.id === questId) || this.completedQuests.some(q => q.id === questId)) {
      return false;
    }
    const def = dataManager.getQuest(questId);
    if (!def) return false;
    // 前置检查
    if (def.prerequisites.some(p => !this.completedQuests.some(q => q.id === p))) {
      return false;
    }
    this.activeQuests.push(structuredClone(def));
    if (!silent) {
      eventBus.emit('notification', { message: `接受任务：${def.name}`, type: 'info', icon: '📜' });
    }
    eventBus.emit('questAccepted', { questId });
    return true;
  }

  /** 任务完成时自动解锁后续任务 */
  private unlockFollowUps(questId: string): void {
    for (const quest of dataManager.quests) {
      if (quest.prerequisites.includes(questId) && quest.prerequisites.every(p => this.completedQuests.some(q => q.id === p))) {
        this.acceptQuest(quest.id, true);
      }
    }
  }

  // ============ 事件驱动进度更新 ============

  private bindEvents(): void {
    eventBus.on('monsterDefeated', p => {
      this.bumpCounter('defeat_any', 1);
      this.progress('defeat_monster', p.monsterId);
    });
    eventBus.on('bossDefeated', p => {
      this.bumpCounter('boss_any', 1);
      this.progress('defeat_boss', p.bossId);
    });
    eventBus.on('itemCollected', p => {
      this.bumpCounter('collect_any', p.quantity);
      this.progress('collect_item', p.itemId, p.quantity);
    });
    eventBus.on('roomEntered', p => {
      this.progress('explore_room', p.roomId);
    });
    eventBus.on('levelUp', p => {
      this.bumpCounter('level', p.newLevel - p.oldLevel);
      this.progress('level_up', 'any', p.newLevel - p.oldLevel);
    });
    eventBus.on('collectibleCollected', p => {
      this.bumpCounter('collectible_any', 1);
      this.progress('collect_collectible', p.collectibleId);
    });
    eventBus.on('chestOpened', () => {
      this.bumpCounter('chest_any', 1);
      this.progress('open_chest', 'any');
    });
    eventBus.on('equipmentEquipped', p => {
      const eq = InventoryManager.getInstance().getEquipment(p.equipmentId);
      if (eq) this.progress('equip_item', eq.baseItemId);
    });
    eventBus.on('floorChanged', p => {
      if (p.mode === 'main' && p.toFloor > p.fromFloor) {
        this.progress('reach_floor', 'any', p.toFloor - p.fromFloor);
      }
    });
  }

  private bumpCounter(key: string, amount: number): void {
    this.counters[key] = (this.counters[key] ?? 0) + amount;
    // 目标为 any 的计数型任务
    for (const quest of this.activeQuests) {
      for (let i = 0; i < quest.objectives.length; i++) {
        const obj = quest.objectives[i];
        if (obj.targetId !== 'any') continue;
        if (!this.counterMatchesObjective(key, obj)) continue;
        if (obj.currentProgress >= obj.quantity) continue;
        obj.currentProgress = Math.min(obj.quantity, obj.currentProgress + amount);
        this.emitProgress(quest, i, obj);
        this.tryComplete(quest);
      }
    }
  }

  private counterMatchesObjective(counterKey: string, obj: QuestObjective): boolean {
    const map: Record<string, QuestObjectiveType2> = {
      'defeat_any': 'defeat_monster',
      'boss_any': 'defeat_boss',
      'collect_any': 'collect_item',
      'level': 'level_up',
      'collectible_any': 'collect_collectible',
      'chest_any': 'open_chest',
    };
    return map[counterKey] === obj.type && obj.targetId === 'any';
  }

  private progress(type: string, targetId: string, amount = 1): void {
    const player = Player.getInstance();
    for (const quest of this.activeQuests) {
      for (let i = 0; i < quest.objectives.length; i++) {
        const obj = quest.objectives[i];
        if (obj.type !== type) continue;
        if (obj.currentProgress >= obj.quantity) continue;
        if (type === 'reach_floor' && /^\d+$/.test(obj.targetId)) {
          // 目标为具体楼层：到达即完成
          const target = parseInt(obj.targetId, 10);
          if (player.currentFloor >= target) {
            obj.currentProgress = obj.quantity;
          }
        } else if (obj.targetId === targetId) {
          obj.currentProgress = Math.min(obj.quantity, obj.currentProgress + amount);
        } else {
          continue;
        }
        this.emitProgress(quest, i, obj);
        this.tryComplete(quest);
      }
    }
  }

  private emitProgress(quest: Quest, objectiveIndex: number, obj: QuestObjective): void {
    eventBus.emit('questUpdated', {
      questId: quest.id,
      objectiveIndex,
      progress: obj.currentProgress,
      total: obj.quantity,
    });
  }

  private tryComplete(quest: Quest): void {
    if (!quest.objectives.every(o => o.currentProgress >= o.quantity)) return;
    this.completeQuest(quest.id);
  }

  completeQuest(questId: string): void {
    const idx = this.activeQuests.findIndex(q => q.id === questId);
    if (idx < 0) return;
    const quest = this.activeQuests.splice(idx, 1)[0];
    quest.isCompleted = true;
    this.completedQuests.push(quest);
    this.grantRewards(quest.rewards);
    eventBus.emit('questCompleted', { questId, rewards: quest.rewards });
    eventBus.emit('notification', { message: `任务完成：${quest.name}`, type: 'success', icon: '📜' });
    this.unlockFollowUps(questId);
  }

  private grantRewards(rewards: QuestReward[]): void {
    const player = Player.getInstance();
    for (const reward of rewards) {
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
  }

  trackQuest(questId: string): void {
    const q = this.activeQuests.find(x => x.id === questId);
    if (q) q.isTracked = !q.isTracked;
  }

  getTrackedQuests(): Quest[] {
    return this.activeQuests.filter(q => q.isTracked);
  }

  exportState(): { activeQuestIds: string[]; completedQuestIds: string[]; questProgress: Record<string, number> } {
    const questProgress: Record<string, number> = {};
    for (const q of this.activeQuests) {
      q.objectives.forEach((o, i) => {
        questProgress[`${q.id}:${i}`] = o.currentProgress;
      });
    }
    return {
      activeQuestIds: this.activeQuests.map(q => q.id),
      completedQuestIds: this.completedQuests.map(q => q.id),
      questProgress,
    };
  }

  loadState(activeQuestIds: string[], completedQuestIds: string[], questProgress: Record<string, number>): void {
    this.activeQuests = [];
    this.completedQuests = [];
    for (const id of completedQuestIds) {
      const def = dataManager.getQuest(id);
      if (def) this.completedQuests.push({ ...def, isCompleted: true });
    }
    for (const id of activeQuestIds) {
      const def = dataManager.getQuest(id);
      if (!def) continue;
      const quest = structuredClone(def);
      quest.objectives.forEach((o, i) => {
        const saved = questProgress[`${id}:${i}`];
        if (saved !== undefined) o.currentProgress = saved;
      });
      this.activeQuests.push(quest);
    }
  }
}

type QuestObjectiveType2 = QuestObjective['type'];
