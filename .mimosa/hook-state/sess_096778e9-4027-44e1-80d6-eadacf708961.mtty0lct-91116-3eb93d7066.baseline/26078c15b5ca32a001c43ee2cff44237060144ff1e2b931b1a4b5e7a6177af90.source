/**
 * 难度系统（规格 模块I）：7档难度、解锁条件、倍率查询、切换。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import type { Difficulty, DifficultyConfig } from '../types';

export class DifficultySystem {
  private static instance: DifficultySystem;

  private constructor() {}

  static getInstance(): DifficultySystem {
    if (!DifficultySystem.instance) {
      DifficultySystem.instance = new DifficultySystem();
    }
    return DifficultySystem.instance;
  }

  get currentDifficulty(): Difficulty {
    return Player.getInstance().currentDifficulty;
  }

  getDifficultyConfig(difficulty: Difficulty): DifficultyConfig {
    const cfg = dataManager.getDifficulty(difficulty);
    if (!cfg) throw new Error(`[DifficultySystem] 未知难度: ${difficulty}`);
    return cfg;
  }

  getDifficultyMultiplier(difficulty: Difficulty): {
    monster: number; exp: number; gold: number; quality: number; collectible: number; boss: number;
  } {
    const cfg = this.getDifficultyConfig(difficulty);
    return {
      monster: cfg.monsterMultiplier,
      exp: cfg.expMultiplier,
      gold: cfg.goldMultiplier,
      quality: cfg.qualityBonus,
      collectible: cfg.collectibleDropRate,
      boss: cfg.bossMultiplier,
    };
  }

  /** 按已到达楼层返回可用难度 */
  getAvailableDifficulties(maxFloorReached: number): DifficultyConfig[] {
    return dataManager.difficulties.filter(d => d.unlockFloor === 0 || maxFloorReached >= d.unlockFloor);
  }

  isUnlocked(difficulty: Difficulty, maxFloorReached: number): boolean {
    const cfg = this.getDifficultyConfig(difficulty);
    return cfg.unlockFloor === 0 || maxFloorReached >= cfg.unlockFloor;
  }

  /** 难度系统整体解锁（到达第10层，规格 I.1） */
  isSystemUnlocked(): boolean {
    return gameState.difficultySystemUnlocked;
  }

  /** 切换难度（系统解锁后允许） */
  switchDifficulty(newDifficulty: Difficulty): boolean {
    const player = Player.getInstance();
    const from = player.currentDifficulty;
    if (from === newDifficulty) return true;
    if (!gameState.difficultySystemUnlocked) {
      eventBus.emit('notification', { message: `难度选择将在到达第 ${dataManager.world.difficultyUnlockFloor} 层后解锁。`, type: 'info' });
      return false;
    }
    const stats = gameState.maxFloorReached;
    if (!this.isUnlocked(newDifficulty, stats)) {
      const cfg = this.getDifficultyConfig(newDifficulty);
      eventBus.emit('notification', { message: `难度「${cfg.name}」尚未解锁（需到达第 ${cfg.unlockFloor} 层）。`, type: 'warning' });
      return false;
    }
    player.currentDifficulty = newDifficulty;
    const cfg = this.getDifficultyConfig(newDifficulty);
    eventBus.emit('difficultyChanged', { from, to: newDifficulty });
    eventBus.emit('notification', { message: `难度已切换为「${cfg.name}」${cfg.id === 'lullaby' ? ' — ' + dataManager.text('lullabyEnter') : ''}`, type: 'success', icon: cfg.icon });
    return true;
  }

  /** 楼层推进时检查解锁（由 floorChanged 事件触发） */
  checkUnlocksOnFloorReached(floor: number): void {
    if (!gameState.difficultySystemUnlocked && floor >= dataManager.world.difficultyUnlockFloor) {
      gameState.difficultySystemUnlocked = true;
      eventBus.emit('notification', { message: `难度系统解锁！你现在可以在菜单中选择难度了。`, type: 'success', icon: '⚔️' });
    }
    if (!gameState.havenUnlocked && floor >= dataManager.world.havenUnlockFloor) {
      gameState.havenUnlocked = true;
      eventBus.emit('havenUnlocked', {});
      eventBus.emit('notification', { message: dataManager.text('havenUnlock'), type: 'success', icon: '🕊️' });
    }
  }
}
