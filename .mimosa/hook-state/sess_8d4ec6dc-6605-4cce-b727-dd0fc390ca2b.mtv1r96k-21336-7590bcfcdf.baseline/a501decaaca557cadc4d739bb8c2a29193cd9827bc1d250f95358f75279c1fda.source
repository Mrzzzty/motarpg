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

  private constructor() {
    this.settings = { ...dataManager.settings.defaults };
    const saved = Number(localStorage.getItem('motarpg_difficulty'));
    if (saved >= 1 && saved <= 7) this.difficulty = saved;
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
    localStorage.setItem('motarpg_difficulty', String(this.difficulty));
  }
}

export const gameState = GameState.getInstance();
