/**
 * 存档管理器（规格 第六部分）：localStorage持久化、自动存档、导入导出、校验。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import type { SaveData } from '../types';
import { QuestManager } from '../systems/QuestManager';
import { AchievementManager } from '../systems/AchievementManager';
import { BestiaryManager } from '../systems/BestiaryManager';
import { InventoryManager } from '../systems/InventoryManager';
import { CollectibleSystem } from '../systems/CollectibleSystem';
import { EventManager } from '../systems/EventManager';
import { EndlessSystem } from '../systems/EndlessSystem';
import { Logger } from '../utils/Logger';

export class SaveManager {
  private static instance: SaveManager;
  private autoSaveTimer = 0;
  private lastSaveTime: string | null = null;

  /** 统计信息（规格 6.1 stats） */
  stats: SaveData['stats'] = {
    totalMonstersDefeated: 0,
    totalBossesDefeated: 0,
    totalChestsOpened: 0,
    totalGoldEarned: 0,
    totalSoulEarned: 0,
    totalCollectiblesFound: 0,
    playTimeSeconds: 0,
    floorsExplored: 0,
    steps: 0,
  };

  private constructor() {
    this.bindStatsEvents();
  }

  static getInstance(): SaveManager {
    if (!SaveManager.instance) {
      SaveManager.instance = new SaveManager();
    }
    return SaveManager.instance;
  }

  private bindStatsEvents(): void {
    eventBus.on('monsterDefeated', () => { this.stats.totalMonstersDefeated++; });
    eventBus.on('bossDefeated', () => { this.stats.totalBossesDefeated++; });
    eventBus.on('chestOpened', () => { this.stats.totalChestsOpened++; });
    eventBus.on('goldChanged', p => { if (p.delta > 0) this.stats.totalGoldEarned += p.delta; });
    eventBus.on('soulChanged', p => { if (p.delta > 0) this.stats.totalSoulEarned += p.delta; });
    eventBus.on('collectibleCollected', () => { this.stats.totalCollectiblesFound++; });
    eventBus.on('roomEntered', p => {
      const key = `__visited:${gameState.mode}:${p.floor}`;
      if (!this.visitedRooms.has(key)) {
        this.visitedRooms.add(key);
        this.stats.floorsExplored++;
      }
    });
    eventBus.on('stepsChanged', p => { this.stats.steps = p.steps; });
  }

  private visitedRooms = new Set<string>();

  /** GameLoop心跳（毫秒） */
  tick(deltaMs: number): void {
    this.stats.playTimeSeconds += deltaMs / 1000;
    this.autoSaveTimer += deltaMs;
    if (this.autoSaveTimer >= dataManager.config.autosaveIntervalMs) {
      this.autoSaveTimer = 0;
      this.autoSave();
    }
  }

  // ============ 序列化 ============

  buildSaveData(): SaveData {
    const player = Player.getInstance();
    const inv = InventoryManager.getInstance();
    const questState = QuestManager.getInstance().exportState();
    const endless = EndlessSystem.getInstance().exportState();
    return {
      version: dataManager.config.saveVersion,
      lastSaved: new Date().toISOString(),
      seed: gameState.seed,
      player: {
        level: player.level,
        exp: player.exp,
        hp: player.hp,
        maxHp: player.maxHp,
        gold: player.gold,
        soul: player.soul,
        baseAttack: player.baseAttack,
        baseDefense: player.baseDefense,
        critRate: player.baseCritRate,
        dodgeRate: player.baseDodgeRate,
        damageBonus: player.baseDamageBonus,
        statusEffects: player.statusEffects.map(s => ({ ...s })),
        equipment: { ...player.equipment },
        currentFloor: player.currentFloor,
        currentRoomId: player.currentRoomId,
        playerX: player.position.x,
        playerY: player.position.y,
        currentDifficulty: player.currentDifficulty,
      },
      inventory: inv.items,
      equipmentInstances: [...inv.equipmentInstances.values()],
      collectibles: [...player.collectibles],
      seriesRewarded: CollectibleSystem.getInstance().exportState(),
      world: {
        entityStates: WorldManager.getInstance().getAllEntityStates(),
      },
      quests: questState,
      achievements: {
        unlockedAchievementIds: [...AchievementManager.getInstance().unlocked],
      },
      bestiary: BestiaryManager.getInstance().exportState(),
      foundCollectibles: [...player.collectibles],
      endless,
      bossFloors: WorldManager.getInstance().getDefeatedBossFloors(),
      stats: { ...this.stats },
      // 附加运行时状态（结构兼容：额外字段）
      ...({
        gameStateFlags: {
          endlessUnlocked: gameState.endlessUnlocked,
          difficultySystemUnlocked: gameState.difficultySystemUnlocked,
          havenUnlocked: gameState.havenUnlocked,
          maxFloorReached: gameState.maxFloorReached,
        },
        achStats: AchievementManager.getInstance().exportState(),
        triggeredEvents: EventManager.getInstance().exportState(),
      } as unknown as Partial<SaveData>),
    };
  }

  // ============ 存/读/删 ============

  save(showToast = true): boolean {
    if (!Player.hasInstance()) return false;
    try {
      const data = this.buildSaveData();
      const json = JSON.stringify(data);
      localStorage.setItem(dataManager.config.saveKey, json);
      this.lastSaveTime = data.lastSaved;
      if (showToast) {
        eventBus.emit('notification', { message: dataManager.text('saveSuccess'), type: 'success', icon: '💾' });
      }
      eventBus.emit('saveCompleted', {});
      return true;
    } catch (err) {
      Logger.error('[SaveManager] 存档失败', err);
      eventBus.emit('notification', { message: '存档失败：存储空间不足或数据异常。', type: 'error' });
      return false;
    }
  }

  autoSave(): void {
    this.save(false);
  }

  /** 触发式自动存档节点（规格 6.2） */
  autoSaveTrigger(): void {
    this.save(false);
  }

  load(): SaveData | null {
    const json = localStorage.getItem(dataManager.config.saveKey);
    if (!json) return null;
    try {
      const data = JSON.parse(json) as SaveData & Record<string, unknown>;
      if (!this.isSaveValid(data)) return null;
      return data;
    } catch {
      return null;
    }
  }

  hasSave(): boolean {
    return localStorage.getItem(dataManager.config.saveKey) !== null;
  }

  clearSave(): void {
    localStorage.removeItem(dataManager.config.saveKey);
    this.lastSaveTime = null;
  }

  getLastSaveTime(): string | null {
    if (this.lastSaveTime) return this.lastSaveTime;
    try {
      const json = localStorage.getItem(dataManager.config.saveKey);
      if (!json) return null;
      const data = JSON.parse(json) as SaveData;
      return data.lastSaved ?? null;
    } catch {
      return null;
    }
  }

  isSaveValid(data: unknown): boolean {
    if (!data || typeof data !== 'object') return false;
    const d = data as Partial<SaveData>;
    return typeof d.version === 'string'
      && d.player !== undefined
      && d.stats !== undefined
      && Array.isArray(d.collectibles);
  }

  // ============ 导入/导出 ============

  exportSave(): string {
    return JSON.stringify(this.buildSaveData(), null, 2);
  }

  importSave(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString) as SaveData;
      if (!this.isSaveValid(data)) return false;
      localStorage.setItem(dataManager.config.saveKey, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }

  /** 下载存档文件 */
  downloadSaveFile(): void {
    const blob = new Blob([this.exportSave()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mota_save_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  getStats(): SaveData['stats'] {
    return { ...this.stats };
  }
}
