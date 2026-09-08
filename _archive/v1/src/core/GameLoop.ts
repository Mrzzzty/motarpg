/**
 * 主游戏循环（规格 7.6：60FPS，requestAnimationFrame）。
 */
import { CameraController } from './CameraController';
import { InputManager } from './InputManager';
import { Renderer } from './Renderer';
import { ParticleSystem } from '../effects/ParticleSystem';
import { SaveManager } from '../systems/SaveManager';
import { AchievementManager } from '../systems/AchievementManager';
import { Player } from '../entities/Player';
import { dataManager } from './DataManager';

export class GameLoop {
  private static instance: GameLoop;
  private running = false;
  private lastTime = 0;
  /** 自动回血计时（愈合之心藏品） */
  private autoHealTimer = 0;

  private constructor() {}

  static getInstance(): GameLoop {
    if (!GameLoop.instance) {
      GameLoop.instance = new GameLoop();
    }
    return GameLoop.instance;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame(t => this.frame(t));
  }

  stop(): void {
    this.running = false;
  }

  private frame(time: number): void {
    if (!this.running) return;
    const deltaTime = Math.min(50, time - this.lastTime);
    this.lastTime = time;

    const camera = CameraController.getInstance();
    const input = InputManager.getInstance();
    const renderer = Renderer.getInstance();
    const particles = ParticleSystem.getInstance();
    const save = SaveManager.getInstance();

    camera.update(deltaTime);
    input.update(deltaTime);
    particles.update(deltaTime);
    save.tick(deltaTime);
    AchievementManager.getInstance().tickPlayTime(deltaTime / 1000);
    this.tickAutoHeal(deltaTime);

    renderer.render();
    requestAnimationFrame(t => this.frame(t));
  }

  /** 战斗外自动回血（愈合之心藏品：每2秒+1%） */
  private tickAutoHeal(deltaTime: number): void {
    const player = Player.getInstance();
    if (!player.hasCollectible('collect_auto_heal')) return;
    if (player.hp >= player.maxHp) return;
    this.autoHealTimer += deltaTime;
    const interval = dataManager.config.regen.autoHealIntervalMs;
    if (this.autoHealTimer >= interval) {
      this.autoHealTimer = 0;
      player.heal(Math.max(1, Math.floor(player.maxHp * 0.01)));
    }
  }
}
