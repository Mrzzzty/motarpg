/**
 * 主游戏循环：60FPS requestAnimationFrame。
 * 更新顺序：摄像机 → 输入 → 控制器（寻路/交互） → 粒子 → 渲染 → UI悬浮。
 */
import { CameraController } from './CameraController';
import { gameState } from './GameState';
import { InputManager } from './InputManager';
import { GameController } from './GameController';
import { ParticleSystem } from '../effects/ParticleSystem';
import { ThreeParticleSystem } from '../effects/ThreeParticleSystem';
import { ThreeRenderer } from '../effects/ThreeRenderer';
import { GameUI } from '../ui/GameUI';

export class GameLoop {
  private static instance: GameLoop;
  private running = false;
  private lastTime = 0;
  private lastProcessedTime = 0;
  /** 上一帧实际渲染时刻（帧率限制用） */
  private lastRenderTime = 0;
  /** rAF 停摆兜底（自动化/后台标签页）：帧超时未更新则由定时器驱动 */
  private watchdog: number | null = null;

  private constructor() {}
  static getInstance(): GameLoop {
    if (!GameLoop.instance) GameLoop.instance = new GameLoop();
    return GameLoop.instance;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(t => this.frame(t));
    this.watchdog = window.setInterval(() => {
      if (this.running && performance.now() - this.lastTime > 120) {
        this.frame(performance.now());
      }
    }, 50);
  }

  stop(): void {
    this.running = false;
    if (this.watchdog !== null) {
      window.clearInterval(this.watchdog);
      this.watchdog = null;
    }
  }

  private frame(time: number): void {
    if (!this.running) return;
    if (time <= this.lastProcessedTime) return; // 帧去重（watchdog与rAF竞态）
    this.lastProcessedTime = time;

    // 帧率限制：未到下帧时刻则跳过本次更新（渲染/逻辑/输入统一降频，省电降温）
    const cap = gameState.settings.fpsCap;
    if (cap > 0 && time - this.lastRenderTime < 1000 / cap - 1.5) {
      requestAnimationFrame(t => this.frame(t));
      return;
    }
    this.lastRenderTime = time;

    const deltaTime = Math.min(50, time - this.lastTime);
    this.lastTime = time;

    CameraController.getInstance().update(deltaTime);
    InputManager.getInstance().update(deltaTime);
    GameController.getInstance().update(deltaTime);
    ParticleSystem.getInstance().update(deltaTime);
    ThreeParticleSystem.getInstance().update(deltaTime);
    ThreeRenderer.getInstance().render(time);
    GameUI.getInstance().updateHover();

    requestAnimationFrame(t => this.frame(t));
  }
}
