/**
 * 输入管理器：键盘（移动/快捷键/楼梯）+ 鼠标点击移动（相邻格/自身格交互）。
 */
import { dataManager } from './DataManager';
import { eventBus } from './EventBus';
import { gameState } from './GameState';
import { CameraController } from './CameraController';
import { Player } from '../entities/Player';
import { GameController } from './GameController';

type PanelKey = 'inventory' | 'character' | 'quest' | 'bestiary' | 'collectible' | 'shop' | 'menu';

export class InputManager {
  private static instance: InputManager;
  private moveCooldown = 0;
  private readonly MOVE_INTERVAL = 145;
  private heldKeys = new Set<string>();
  onPanelToggle: ((panel: PanelKey) => void) | null = null;
  onSaveKey: (() => void) | null = null;
  onPauseKey: (() => void) | null = null;
  onQuickUse: ((slot: number) => void) | null = null;

  private constructor() {}

  static getInstance(): InputManager {
    if (!InputManager.instance) {
      InputManager.instance = new InputManager();
    }
    return InputManager.instance;
  }

  bind(canvas: HTMLCanvasElement): void {
    window.addEventListener('keydown', e => this.onKeyDown(e));
    window.addEventListener('keyup', e => this.heldKeys.delete(e.key));
    canvas.addEventListener('click', e => this.onCanvasClick(e, canvas));
    canvas.addEventListener('mousemove', e => this.onCanvasHover(e, canvas));
  }

  update(deltaTime: number): void {
    this.moveCooldown -= deltaTime;
    if (this.moveCooldown > 0) return;
    const controller = GameController.getInstance();
    if (!controller.canAct) return;

    // 楼梯优先：站在楼梯上按↑/↓
    const stair = controller.stairUnderPlayer();
    if (stair) {
      const up = this.heldKeys.has('ArrowUp') || this.heldKeys.has('w') || this.heldKeys.has('W');
      const down = this.heldKeys.has('ArrowDown') || this.heldKeys.has('s') || this.heldKeys.has('S');
      if (up && stair.stairDirection === 'up') {
        this.moveCooldown = this.MOVE_INTERVAL;
        controller.useStairIfStanding();
        return;
      }
      if (down && stair.stairDirection === 'down') {
        this.moveCooldown = this.MOVE_INTERVAL;
        controller.useStairIfStanding();
        return;
      }
    }

    let dx = 0;
    let dy = 0;
    if (this.heldKeys.has('ArrowLeft') || this.heldKeys.has('a') || this.heldKeys.has('A')) dx -= 1;
    else if (this.heldKeys.has('ArrowRight') || this.heldKeys.has('d') || this.heldKeys.has('D')) dx += 1;
    else if (this.heldKeys.has('ArrowUp') || this.heldKeys.has('w') || this.heldKeys.has('W')) dy -= 1;
    else if (this.heldKeys.has('ArrowDown') || this.heldKeys.has('s') || this.heldKeys.has('S')) dy += 1;

    if (dx !== 0 || dy !== 0) {
      this.moveCooldown = this.MOVE_INTERVAL;
      controller.tryMove(dx, dy);
    }
  }

  private onKeyDown(e: KeyboardEvent): void {
    // 文本输入框内不触发游戏快捷键
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }
    const controller = GameController.getInstance();
    this.heldKeys.add(e.key);

    // 方向键：立即响应一次（避免点按落在两帧之间被keyup清除）
    const dir = this.directionOf(e.key);
    if (dir && !e.repeat && this.moveCooldown <= 0 && controller.canAct) {
      // 楼梯优先：站在楼梯上按对应方向键触发换层而非移动
      const stair = controller.stairUnderPlayer();
      if (stair) {
        if (dir.dy < 0 && stair.stairDirection === 'up') {
          this.moveCooldown = this.MOVE_INTERVAL;
          controller.useStairIfStanding();
          return;
        }
        if (dir.dy > 0 && stair.stairDirection === 'down') {
          this.moveCooldown = this.MOVE_INTERVAL;
          controller.useStairIfStanding();
          return;
        }
      }
      this.moveCooldown = this.MOVE_INTERVAL;
      controller.tryMove(dir.dx, dir.dy);
    }

    // 面板快捷键在任何时刻生效（Esc由UI处理）
    switch (e.key.toLowerCase()) {
      case 'b': this.onPanelToggle?.('inventory'); return;
      case 'c': this.onPanelToggle?.('character'); return;
      case 'j': this.onPanelToggle?.('quest'); return;
      case 'g': this.onPanelToggle?.('bestiary'); return;
      case 'h': this.onPanelToggle?.('collectible'); return;
      case 'm': this.onPanelToggle?.('menu'); return;
      case 's':
        // S既是快速存档也是WASD下移：仅在首次按下（非按键重复）时存档
        if (!e.repeat && !e.ctrlKey && !e.metaKey) this.onSaveKey?.();
        return;
      case 'p': this.onPauseKey?.(); return;
      case '1': this.onQuickUse?.(0); return;
      case '2': this.onQuickUse?.(1); return;
      case '3': this.onQuickUse?.(2); return;
      case '4': this.onQuickUse?.(3); return;
      default: break;
    }

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (controller.canAct) controller.interact();
      return;
    }
    // 阻止方向键滚动页面
    if (e.key.startsWith('Arrow')) e.preventDefault();
  }

  private directionOf(key: string): { dx: number; dy: number } | null {
    switch (key) {
      case 'ArrowLeft': case 'a': case 'A': return { dx: -1, dy: 0 };
      case 'ArrowRight': case 'd': case 'D': return { dx: 1, dy: 0 };
      case 'ArrowUp': case 'w': case 'W': return { dx: 0, dy: -1 };
      case 'ArrowDown': return { dx: 0, dy: 1 };
      default: return null;
    }
  }

  private onCanvasClick(e: MouseEvent, canvas: HTMLCanvasElement): void {
    const controller = GameController.getInstance();
    if (!controller.canAct) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = dataManager.config.viewportWidth / rect.width;
    const scaleY = dataManager.config.viewportHeight / rect.height;
    const screenX = (e.clientX - rect.left) * scaleX;
    const screenY = (e.clientY - rect.top) * scaleY;
    const tile = CameraController.getInstance().screenToTile(screenX, screenY);
    const player = Player.getInstance();
    const dx = tile.x - player.position.x;
    const dy = tile.y - player.position.y;
    if (dx === 0 && dy === 0) {
      controller.interact();
      return;
    }
    if (Math.abs(dx) + Math.abs(dy) === 1) {
      controller.tryMove(dx, dy);
    }
  }

  hoverTile: { x: number; y: number } | null = null;

  private onCanvasHover(e: MouseEvent, canvas: HTMLCanvasElement): void {
    const rect = canvas.getBoundingClientRect();
    const scaleX = dataManager.config.viewportWidth / rect.width;
    const scaleY = dataManager.config.viewportHeight / rect.height;
    const screenX = (e.clientX - rect.left) * scaleX;
    const screenY = (e.clientY - rect.top) * scaleY;
    this.hoverTile = CameraController.getInstance().screenToTile(screenX, screenY);
    void gameState;
  }
}
