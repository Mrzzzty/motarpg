/**
 * 存档系统（文档五 一）：
 * - 自动存档：仅到达新楼层时（第1层不触发）；设置中可关闭
 * - 手动存档：S键 / 菜单按钮，任何时刻有效
 * - 无种子系统：当前楼层地图整体序列化
 */
import type { SaveData } from '../types';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { FloorManager } from '../core/FloorManager';
import { CameraController } from '../core/CameraController';
import { Player } from '../entities/Player';
import { QuestManager } from './QuestManager';
import { BestiaryManager } from './BestiaryManager';
import { AchievementSystem } from './AchievementSystem';
import { GuidanceSystem } from './GuidanceSystem';
import { Logger } from '../utils/Logger';

export class SaveManager {
  private static instance: SaveManager;
  private stats = { totalMonstersDefeated: 0, totalBossesDefeated: 0, totalChestsOpened: 0, steps: 0 };

  private constructor() {
    // 自动存档：仅楼层切换时（初始层第1层不触发）
    eventBus.on('floorChanged', p => {
      if (p.toFloor > dataManager.mapGen.initialFloor) this.autoSave();
    });
    eventBus.on('monsterDefeated', () => { this.stats.totalMonstersDefeated++; });
    eventBus.on('bossDefeated', () => { this.stats.totalBossesDefeated++; });
    eventBus.on('chestOpened', () => { this.stats.totalChestsOpened++; });
    eventBus.on('playerMoved', () => { this.stats.steps++; });
  }

  static getInstance(): SaveManager {
    if (!SaveManager.instance) SaveManager.instance = new SaveManager();
    return SaveManager.instance;
  }

  private get storageKey(): string { return dataManager.config.save.key; }

  autoSave(): void {
    if (!gameState.settings.autoSave) return;
    this.save('auto');
  }

  save(trigger: 'auto' | 'manual'): boolean {
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    if (!floor) return false;
    const player = Player.getInstance();
    const data: SaveData = {
      version: dataManager.config.save.version,
      lastSaved: new Date().toISOString(),
      player: { ...player.state, potions: { ...player.state.potions }, bag: [...player.state.bag] },
      quests: QuestManager.getInstance().exportStates(),
      bestiary: BestiaryManager.getInstance().export(),
      floor,
      entityStates: world.exportEntityStates(),
      guidance: GuidanceSystem.getInstance().export(),
      settings: { ...gameState.settings },
      achievements: AchievementSystem.getInstance().export(),
      stats: { ...this.stats },
    };
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      eventBus.emit('saveCompleted', { trigger });
      Logger.info(`[Save] ${trigger === 'auto' ? '自动' : '手动'}存档完成（楼层${floor.floorId}）`);
      return true;
    } catch (err) {
      Logger.error('[Save] 存档失败', err);
      eventBus.emit('notification', { message: '存档失败：存储空间不足', type: 'error', icon: '💾' });
      return false;
    }
  }

  hasSave(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  load(): boolean {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return false;
    try {
      const data = JSON.parse(raw) as SaveData;
      if (data.version !== dataManager.config.save.version) {
        Logger.warn(`[Save] 版本不匹配 ${data.version} → ${dataManager.config.save.version}`);
      }
      // 旧存档兼容：补默认快捷栏
      if (!Array.isArray(data.player.hotbar) || data.player.hotbar.length !== 5) {
        data.player.hotbar = [null, null, null, null, null];
      }
      Player.getInstance().restore(data.player);
      FloorManager.getInstance().restoreFloor(data.floor);
      WorldManager.getInstance().loadFloor(data.floor, data.entityStates);
      QuestManager.getInstance().restoreStates(data.quests, data.player.currentFloor);
      BestiaryManager.getInstance().restore(data.bestiary);
      GuidanceSystem.getInstance().restore(data.guidance);
      // 旧存档兼容：缺省的设置项用默认值补齐（如新增的 fpsCap）
      gameState.settings = { ...dataManager.settings.defaults, ...data.settings };
      this.stats = { ...data.stats };
      AchievementSystem.getInstance().restore(data.achievements ?? {}, this.stats);
      CameraController.getInstance().snapToPlayer();
      eventBus.emit('saveLoaded', {});
      Logger.info(`[Save] 读档完成（楼层${data.floor.floorId}）`);
      return true;
    } catch (err) {
      Logger.error('[Save] 读档失败', err);
      return false;
    }
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
    eventBus.emit('saveCleared', {});
  }

  get playStats() { return this.stats; }
}
