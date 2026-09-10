/**
 * 游戏全局状态：运行/暂停、模态框计数（面板打开时屏蔽游戏输入）、设置。
 */
import type { GameSettings } from '../types';
import { dataManager } from './DataManager';
import { eventBus } from './EventBus';

export class GameState {
  private static instance: GameState;
  started = false;
  paused = false;
  /** 打开中的模态面板数（>0 时屏蔽移动/交互输入） */
  modalCount = 0;
  settings: GameSettings;
  /** 新开局难度 1摇篮曲~7天堂（难度系统实装前的配置预留，随本地存储持久化） */
  difficulty = 2;
  /**
   * 调试：点亮全部图鉴（会话级，不入存档）。
   * 开启后怪物图鉴全部解锁、遗物图鉴全部可见且可点击直接获取。
   */
  debugUnlockAll = false;
  /**
   * 房间编辑器预览中（会话级）：
   * 预览会把 3D 视口切到「正在设计的房间」，此时**绝不能写存档**——
   * `SaveManager` 的自动存档监听 `floorChanged`，必须屏蔽，否则会把预览房当成玩家所在层存下来。
   */
  editorPreview = false;

  private constructor() {
    this.settings = { ...dataManager.settings.defaults };
    // 无头测试等环境可能没有 localStorage
    if (typeof localStorage !== 'undefined') {
      const saved = Number(localStorage.getItem('motarpg_difficulty'));
      if (saved >= 1 && saved <= 7) this.difficulty = saved;
    }
  }

  static getInstance(): GameState {
    if (!GameState.instance) GameState.instance = new GameState();
    return GameState.instance;
  }

  get modalOpen(): boolean { return this.modalCount > 0; }

  pushModal(): void { this.modalCount++; }

  popModal(): void { this.modalCount = Math.max(0, this.modalCount - 1); }

  setSetting<K extends keyof GameSettings>(key: K, value: GameSettings[K]): void {
    this.settings[key] = value;
    eventBus.emit('settingsChanged', { key, value });
  }

  setDifficulty(n: number): void {
    this.difficulty = Math.max(1, Math.min(7, n));
    if (typeof localStorage !== 'undefined') localStorage.setItem('motarpg_difficulty', String(this.difficulty));
  }
}

export const gameState = GameState.getInstance();
