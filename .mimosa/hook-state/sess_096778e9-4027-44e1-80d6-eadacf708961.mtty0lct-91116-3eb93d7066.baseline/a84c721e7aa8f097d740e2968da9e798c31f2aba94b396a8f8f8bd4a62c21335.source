/**
 * 摄像机控制（规格 2.1.7）：边界锁定跟随、房间切换、震屏、淡入淡出。
 */
import { dataManager } from './DataManager';
import { MathUtils } from '../utils/MathUtils';

export class CameraController {
  private static instance: CameraController;

  x = 0;
  y = 0;
  width: number;
  height: number;
  target = { x: 0, y: 0 };
  tileSize: number;

  private boundsWidth = 0;
  private boundsHeight = 0;
  private shakeIntensity = 0;
  private shakeDuration = 0;
  private shakeTimer = 0;
  private fadeAlpha = 0;
  private fadeDelta = 0;
  private _transitioning = false;

  private constructor() {
    const cfg = dataManager.config;
    this.width = cfg.viewportWidth;
    this.height = cfg.viewportHeight;
    this.tileSize = cfg.tileSize;
  }

  static getInstance(): CameraController {
    if (!CameraController.instance) {
      CameraController.instance = new CameraController();
    }
    return CameraController.instance;
  }

  follow(target: { x: number; y: number }): void {
    this.target = target;
  }

  setBounds(width: number, height: number): void {
    this.boundsWidth = width;
    this.boundsHeight = height;
  }

  setRoomBounds(room: { width: number; height: number }): void {
    this.setBounds(room.width * this.tileSize, room.height * this.tileSize);
  }

  switchToRoom(room: { width: number; height: number }, focus?: { x: number; y: number }): void {
    this.setRoomBounds(room);
    if (focus) this.snapTo(focus.x, focus.y);
  }

  snapTo(tileX: number, tileY: number): void {
    this.target = { x: tileX, y: tileY };
    const px = tileX * this.tileSize + this.tileSize / 2;
    const py = tileY * this.tileSize + this.tileSize / 2;
    this.x = this.clampX(px - this.width / 2);
    this.y = this.clampY(py - this.height / 2);
  }

  private clampX(x: number): number {
    if (this.boundsWidth <= this.width) return (this.boundsWidth - this.width) / 2;
    return MathUtils.clamp(x, 0, this.boundsWidth - this.width);
  }

  private clampY(y: number): number {
    if (this.boundsHeight <= this.height) return (this.boundsHeight - this.height) / 2;
    return MathUtils.clamp(y, 0, this.boundsHeight - this.height);
  }

  shake(intensity: number, duration: number): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeDuration = Math.max(this.shakeDuration, duration);
    this.shakeTimer = this.shakeDuration;
  }

  fadeIn(duration: number): void {
    this.fadeAlpha = 1;
    this.fadeDelta = -1 / Math.max(1, duration);
    this._transitioning = true;
  }

  fadeOut(duration: number): void {
    this.fadeAlpha = 0;
    this.fadeDelta = 1 / Math.max(1, duration);
    this._transitioning = true;
  }

  get transitioning(): boolean {
    return this._transitioning;
  }

  get fadeOverlayAlpha(): number {
    return MathUtils.clamp(this.fadeAlpha, 0, 1);
  }

  /** 每帧更新（deltaTime 毫秒） */
  update(deltaTime: number): void {
    const px = this.target.x * this.tileSize + this.tileSize / 2;
    const py = this.target.y * this.tileSize + this.tileSize / 2;
    const lerp = 1 - Math.pow(1 - dataManager.config.camera.lerp, deltaTime / 16.67);
    this.x = MathUtils.lerp(this.x, this.clampX(px - this.width / 2), lerp);
    this.y = MathUtils.lerp(this.y, this.clampY(py - this.height / 2), lerp);

    if (this.shakeTimer > 0) {
      const ratio = this.shakeTimer / this.shakeDuration;
      const offset = (Math.random() - 0.5) * this.shakeIntensity * 2 * ratio;
      this.x += offset;
      this.y += (Math.random() - 0.5) * this.shakeIntensity * 2 * ratio;
      this.shakeTimer -= deltaTime;
      if (this.shakeTimer <= 0) {
        this.shakeTimer = 0;
        this.shakeIntensity = 0;
      }
    }

    if (this.fadeDelta !== 0) {
      this.fadeAlpha += this.fadeDelta * deltaTime;
      if (this.fadeAlpha <= 0) {
        this.fadeAlpha = 0;
        this.fadeDelta = 0;
        this._transitioning = false;
      } else if (this.fadeAlpha >= 1) {
        this.fadeAlpha = 1;
      }
    }
  }

  /** 世界坐标 → 视口坐标 */
  worldToScreen(worldX: number, worldY: number): { x: number; y: number } {
    return { x: worldX - this.x, y: worldY - this.y };
  }

  /** 屏幕坐标 → 瓦片坐标 */
  screenToTile(screenX: number, screenY: number): { x: number; y: number } {
    return {
      x: Math.floor((screenX + this.x) / this.tileSize),
      y: Math.floor((screenY + this.y) / this.tileSize),
    };
  }
}
