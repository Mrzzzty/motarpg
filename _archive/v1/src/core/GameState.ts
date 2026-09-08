/**
 * 游戏全局状态：模式、种子、暂停、进度标记、统计。
 * 玩家数值状态在 Player 实例上，此处只放跨系统共享的轻量状态。
 */
import type { GameMode } from '../types';

export class GameState {
  private static instance: GameState;

  mode: GameMode = 'main';
  seed = 0;
  paused = false;
  /** UI面板/对话框打开时阻断移动 */
  inputLocked = false;
  endlessUnlocked = false;
  difficultySystemUnlocked = false;
  havenUnlocked = false;
  endlessReturn = { floor: 1, roomId: '' };
  transitionActive = false;
  /** 主线历史最高楼层（难度解锁判定） */
  maxFloorReached = 1;

  private constructor() {}

  static getInstance(): GameState {
    if (!GameState.instance) {
      GameState.instance = new GameState();
    }
    return GameState.instance;
  }

  reset(seed: number): void {
    this.mode = 'main';
    this.seed = seed;
    this.paused = false;
    this.inputLocked = false;
    this.endlessUnlocked = false;
    this.difficultySystemUnlocked = false;
    this.havenUnlocked = false;
    this.endlessReturn = { floor: 1, roomId: '' };
    this.transitionActive = false;
    this.maxFloorReached = 1;
  }

  /** 楼层实体状态的存档键 */
  entityKey(mode: GameMode, floorId: number, roomId: string, entityId: string): string {
    return `${mode}:${floorId}:${roomId}:${entityId}`;
  }
}

export const gameState = GameState.getInstance();
