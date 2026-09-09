/**
 * 输入管理器：键盘（WASD/方向键移动、面板快捷键、K 或 Ctrl+S 存档、数字键药水）
 * + 鼠标（悬浮检测 200ms 延迟显示 / 300ms 延迟消失、左键交互/寻路）。
 */
import { dataManager } from './DataManager';
import { eventBus } from './EventBus';
import { gameState } from './GameState';
import { GameController } from './GameController';
import { CameraController } from './CameraController';
import { WorldManager } from './WorldManager';
import { Player } from '../entities/Player';
import { projection } from '../render/Projection';
import { ThreeRenderer } from '../effects/ThreeRenderer';
import type { MapEntity } from '../types';
import { SaveManager } from '../systems/SaveManager';

export interface HoverInfo {
  entity: MapEntity | null;
  tile: { x: number; y: number };
  tileType: number | null;
}

export class InputManager {
  private static instance: InputManager;
  private heldDirs = new Set<string>();
  private repeatTimer = 0;
  private mouseClient: { x: number; y: number } | null = null;
  /** 当前悬浮（去抖后生效的）信息 */
  public hover: HoverInfo | null = null;
  private hoverShowTimer: number | null = null;
  private hoverHideTimer: number | null = null;
  private pendingHover: HoverInfo | null = null;

  private constructor() {
    this.bindKeyboard();
  }

  /** 渲染画布就绪后由 ThreeRenderer 调用（3渲2：Canvas 替换为 WebGL 画布） */
  attachCanvas(canvas: HTMLCanvasElement): void {
    canvas.addEventListener('mousemove', e => {
      this.mouseClient = { x: e.clientX, y: e.clientY };
    });
    canvas.addEventListener('mouseleave', () => {
      this.mouseClient = null;
      this.scheduleHide();
    });
    canvas.addEventListener('click', e => {
      const tile = this.clientToTile(e.clientX, e.clientY);
      if (!tile) return;
      GameController.getInstance().moveTo(tile.x, tile.y);
    });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  static getInstance(): InputManager {
    if (!InputManager.instance) InputManager.instance = new InputManager();
    return InputManager.instance;
  }

  private bindKeyboard(): void {
    window.addEventListener('keydown', e => {
      if (e.repeat) return;
      const key = e.key.toLowerCase();
      // 面板快捷键：仅游戏进行中且无模态框时打开（Esc 由 GameUI 统一处理切换语义）
      if (gameState.started && !gameState.modalOpen) {
        switch (key) {
          case 'b': eventBus.emit('panelToggled', { panel: 'inventory', open: true }); return;
          case 'c': eventBus.emit('panelToggled', { panel: 'character', open: true }); return;
          case 'j': eventBus.emit('panelToggled', { panel: 'quest', open: true }); return;
          case 'g': eventBus.emit('panelToggled', { panel: 'bestiary', open: true }); return;
          default: break;
        }
      }
      if (key === 'escape') return;
      // 手动存档：K 键（S 已归还给 WASD 的向下移动，避免"想往下走却存了档"）
      if (key === 'k' && !e.ctrlKey && !e.metaKey && gameState.started) {
        SaveManager.getInstance().save('manual');
        return;
      }
      // Ctrl/Cmd+S：沿用"保存"的通用直觉，需拦截浏览器"保存网页"默认行为
      if (key === 's' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (gameState.started) SaveManager.getInstance().save('manual');
        return;
      }
      // 快捷栏 1-5：使用对应槽位绑定的药水
      const num = parseInt(key, 10);
      if (num >= 1 && num <= 5) {
        const player = Player.getInstance();
        const tier = player.state.hotbar[num - 1];
        if (tier && player.getPotionCount(tier) > 0) player.usePotion(tier);
        return;
      }
      // 移动键：WASD 与方向键等价（含 S / ↓ 向下）
      const dir = this.keyToDir(key);
      if (dir) {
        this.heldDirs.add(`${dir[0]},${dir[1]}`);
        // 缓冲：首按移动一次，重复移动由 update() 按 moveRepeatMs 节奏触发（避免一次按键多格）
        this.repeatTimer = dataManager.config.input.moveRepeatMs;
        GameController.getInstance().tryMove(dir[0], dir[1]);
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', e => {
      const dir = this.keyToDir(e.key.toLowerCase());
      if (dir) this.heldDirs.delete(`${dir[0]},${dir[1]}`);
    });

    window.addEventListener('blur', () => this.heldDirs.clear());
  }

  private keyToDir(key: string): [number, number] | null {
    switch (key) {
      case 'w': case 'arrowup': return [0, -1];
      case 'a': case 'arrowleft': return [-1, 0];
      case 'd': case 'arrowright': return [1, 0];
      case 's': case 'arrowdown': return [0, 1];
      default: return null;
    }
  }

  /** 画布客户端坐标 → 世界格 */
  private clientToTile(cx: number, cy: number): { x: number; y: number } | null {
    // 3渲2：透视相机下屏幕→世界不再是线性映射，改用 Raycaster 与 y=0 地面求交
    const hit = ThreeRenderer.getInstance().screenToTile(cx, cy);
    if (hit) return hit;
    // 渲染器尚未就绪时降级为原 2D 线性映射
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const sx = cx - rect.left - rect.width / 2 + CameraController.getInstance().x;
    const sy = cy - rect.top - rect.height / 2 + CameraController.getInstance().y;
    const world = projection.screenToWorld(sx, sy);
    return { x: Math.floor(world.col), y: Math.floor(world.row) };
  }

  /** 每帧：按键重复移动 + 悬浮去抖 */
  update(deltaTime: number): void {
    // 长按连续移动
    if (this.heldDirs.size > 0) {
      this.repeatTimer -= deltaTime;
      if (this.repeatTimer <= 0) {
        this.repeatTimer = dataManager.config.input.moveRepeatMs;
        const dir = [...this.heldDirs][this.heldDirs.size - 1];
        const v = this.dirVector(dir);
        if (v) GameController.getInstance().tryMove(v[0], v[1]);
      }
    }

    this.updateHover();
  }

  private dirVector(name: string): [number, number] | null {
    switch (name) {
      case '0,-1': return [0, -1];
      case '0,1': return [0, 1];
      case '-1,0': return [-1, 0];
      case '1,0': return [1, 0];
      default: return null;
    }
  }

  /** 悬浮检测：200ms 延迟显示，300ms 延迟消失（文档五 三） */
  private updateHover(): void {
    const cfg = dataManager.config.hover;
    if (!this.mouseClient) {
      this.scheduleHide();
      return;
    }
    const tile = this.clientToTile(this.mouseClient.x, this.mouseClient.y);
    const world = WorldManager.getInstance();
    if (!tile || !world.inBounds(tile.x, tile.y)) {
      this.scheduleHide();
      return;
    }
    // 空地/墙壁/悬崖/装饰物不显示（只对可交互实体显示）
    const entity = world.getEntityAt(tile.x, tile.y);
    const info: HoverInfo = { entity, tile, tileType: world.tileAt(tile.x, tile.y) };
    this.pendingHover = info;
    ThreeRenderer.getInstance().hoverTile = tile;

    if (this.hoverHideTimer !== null) {
      window.clearTimeout(this.hoverHideTimer);
      this.hoverHideTimer = null;
    }
    if (this.hoverShowTimer === null) {
      this.hoverShowTimer = window.setTimeout(() => {
        this.hoverShowTimer = null;
        if (this.pendingHover?.entity) this.hover = this.pendingHover;
        else this.hover = null;
      }, cfg.showDelayMs);
    }
  }

  private scheduleHide(): void {
    if (this.hoverShowTimer !== null) {
      window.clearTimeout(this.hoverShowTimer);
      this.hoverShowTimer = null;
    }
    if (this.hoverHideTimer === null && this.hover) {
      this.hoverHideTimer = window.setTimeout(() => {
        this.hoverHideTimer = null;
        this.hover = null;
      }, dataManager.config.hover.hideDelayMs);
    }
  }
}
