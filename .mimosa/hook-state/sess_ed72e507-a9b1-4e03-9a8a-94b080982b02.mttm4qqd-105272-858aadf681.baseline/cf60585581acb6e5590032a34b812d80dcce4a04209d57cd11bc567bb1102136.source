/**
 * 主UI控制器：三栏布局构建、面板注册与切换、对话队列、
 * 战斗结算/确认弹窗、Boss警告、游戏结束、Esc处理。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { CameraController } from '../core/CameraController';
import { InputManager } from '../core/InputManager';
import { Renderer } from '../core/Renderer';
import { GameController } from '../core/GameController';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import { EventManager } from '../systems/EventManager';
import { SaveManager } from '../systems/SaveManager';
import type { BattleResult, EquipSlot } from '../types';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { BottomBar } from './BottomBar';
import { InventoryPanel } from './InventoryPanel';
import { CharacterPanel } from './CharacterPanel';
import { QuestPanel } from './QuestPanel';
import { BestiaryPanel } from './BestiaryPanel';
import { CollectiblePanel } from './CollectiblePanel';
import { ShopPanel } from './ShopPanel';
import { MenuPanel } from './MenuPanel';
import { EventPanel } from './EventPanel';
import { BossWarningUI } from './BossWarningUI';
import { Notification } from './Notification';
import { bindTooltipToCanvas } from './Tooltip';
import { GameStarter } from './GameStarter';

export class GameUI {
  private static instance: GameUI;
  private canvas!: HTMLCanvasElement;
  private overlay!: HTMLElement;
  private panels = new Map<string, OverlayPanelLike>();
  private shopPanel!: ShopPanel;
  private menuPanel!: MenuPanel;
  private bottomBar!: BottomBar;

  private dialogState: { name: string; icon: string; lines: string[]; index: number } | null = null;
  private dialogEl: HTMLElement | null = null;

  private constructor() {}

  static getInstance(): GameUI {
    if (!GameUI.instance) {
      GameUI.instance = new GameUI();
    }
    return GameUI.instance;
  }

  /** 构建布局与全部UI（仅一次） */
  build(): void {
    const app = document.getElementById('app')!;
    app.innerHTML = '';

    Notification.getInstance();

    const layout = document.createElement('div');
    layout.id = 'game-layout';
    app.appendChild(layout);

    // 左栏
    LeftPanel.init(layout);

    // 中间区
    const center = document.createElement('main');
    center.id = 'center-area';
    layout.appendChild(center);

    const canvasWrap = document.createElement('div');
    canvasWrap.id = 'canvas-wrap';
    center.appendChild(canvasWrap);

    this.canvas = document.createElement('canvas');
    this.canvas.id = 'game-canvas';
    this.canvas.width = dataManager.config.viewportWidth;
    this.canvas.height = dataManager.config.viewportHeight;
    canvasWrap.appendChild(this.canvas);

    this.overlay = document.createElement('div');
    this.overlay.id = 'overlay-layer';
    canvasWrap.appendChild(this.overlay);

    // 右栏
    RightPanel.init(layout);

    // 底栏
    this.bottomBar = BottomBar.init(center);

    // 覆盖面板
    this.shopPanel = new ShopPanel(this.overlay);
    this.menuPanel = new MenuPanel(this.overlay);
    this.panels.set('inventory', new InventoryPanel(this.overlay));
    this.panels.set('character', new CharacterPanel(this.overlay));
    this.panels.set('quest', new QuestPanel(this.overlay));
    this.panels.set('bestiary', new BestiaryPanel(this.overlay));
    this.panels.set('collectible', new CollectiblePanel(this.overlay));
    this.panels.set('menu', this.menuPanel);

    // 事件面板 / Boss警告
    EventPanel.init(this.overlay);
    BossWarningUI.init(this.overlay);

    // 输入与Tooltip
    const input = InputManager.getInstance();
    input.bind(this.canvas);
    bindTooltipToCanvas(this.canvas);

    input.onPanelToggle = panel => this.togglePanel(panel);
    input.onSaveKey = () => SaveManager.getInstance().save();
    input.onPauseKey = () => this.togglePanel('menu');
    input.onQuickUse = slot => this.bottomBar.quickUse(slot);

    this.bottomBar.onPanelRequest = panel => this.togglePanel(panel);
    this.bottomBar.onSaveRequest = () => SaveManager.getInstance().save();

    // Esc：关闭面板/对话框
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.handleEscape();
      }
    });

    Renderer.init(this.canvas);
    this.bindGameCallbacks();
  }

  private bindGameCallbacks(): void {
    const controller = GameController.getInstance();
    const eventManager = EventManager.getInstance();

    // 事件面板
    eventManager.bindPanel((event, options, choose) => {
      EventPanel.init(this.overlay).show(event, options, choose);
    });

    // 战斗确认（预测战败）
    controller.confirmBattle = (monsterName, forecastText, onConfirm) => {
      const panel = this.modal(`⚔️ 挑战 ${monsterName}？`, `
        <div style="font-size:13.5px;line-height:1.8;color:#e0a0a0;white-space:pre-wrap">${forecastText}</div>`,
        [
          { label: '还是撤吧', className: '', action: () => undefined },
          { label: '决一死战', className: 'danger', action: onConfirm },
        ]);
      void panel;
    };

    // 战斗结算
    controller.showBattleResult = (result, bonusText) => {
      const logHtml = result.log.map(line => `<div class="log-${line.kind}">[回合${line.turn}] ${line.text}</div>`).join('');
      const chips = [
        `经验 +${result.expGained}`,
        `金币 +${result.goldGained}`,
        `损失生命 ${result.damageTaken}`,
        ...bonusText,
      ].filter(Boolean).map(t => `<span class="battle-chip">${t}</span>`).join('');
      this.modal(`⚔️ 战斗结算 — ${result.isBoss ? '🏆 ' : ''}${result.monsterName}`, `
        <div class="battle-log">${logHtml}</div>
        <div class="battle-summary">${chips}</div>`,
        [{ label: '继续冒险', className: 'primary', action: () => undefined }]);
    };

    // NPC对话
    controller.showNpcDialog = (name, icon, lines) => {
      this.startDialog(name, icon, lines);
    };

    // Boss警告
    import('../systems/BossSystem').then(({ BossSystem }) => {
      BossSystem.getInstance().onBossWarning = (boss, warningText) => {
        gameState.paused = true;
        BossWarningUI.init(this.overlay).show(boss, warningText, () => {
          gameState.paused = false;
        });
      };
    });

    // 商店
    eventBus.on('shopOpened', p => {
      this.closeAllPanels();
      this.shopPanel.openFor(p.merchantEntityId);
    });

    // 死亡
    eventBus.on('playerDied', p => {
      this.showGameOver(p.cause);
    });

    // 对话队列（事件系统show_dialog效果）
    eventBus.on('dialogQueued', () => this.pumpDialogQueue());
  }

  // ============ 面板管理 ============

  togglePanel(name: string): void {
    const panel = this.panels.get(name);
    if (!panel) return;
    if (panel.isVisible) {
      panel.hide();
    } else {
      this.closeAllPanels();
      panel.show();
    }
    this.syncInputLock();
  }

  closeAllPanels(): void {
    for (const panel of this.panels.values()) {
      panel.hide();
    }
    this.shopPanel.hide();
    this.syncInputLock();
  }

  private syncInputLock(): void {
    const anyOpen = [...this.panels.values()].some(p => p.isVisible)
      || this.shopPanel.isVisible
      || [...this.overlay.querySelectorAll('.overlay-panel:not(.hidden)')].length > 0;
    gameState.inputLocked = anyOpen;
  }

  private handleEscape(): void {
    if (this.dialogState) {
      this.advanceDialog();
      return;
    }
    const anyOpen = [...this.panels.values()].some(p => p.isVisible) || this.shopPanel.isVisible;
    if (anyOpen) {
      this.closeAllPanels();
    } else {
      this.togglePanel('menu');
    }
  }

  // ============ 通用弹窗 ============

  modal(title: string, bodyHtml: string, buttons: { label: string; className?: string; action: () => void }[]): HTMLElement {
    const el = document.createElement('div');
    el.className = 'overlay-panel';
    el.innerHTML = `
      <div class="panel-head"><div class="panel-title">${title}</div></div>
      <div class="panel-body">${bodyHtml}</div>
      <div style="display:flex;gap:8px;justify-content:flex-end;padding:10px 16px">
        ${buttons.map((b, i) => `<button class="btn ${b.className ?? ''}" data-btn="${i}">${b.label}</button>`).join('')}
      </div>`;
    this.overlay.appendChild(el);
    gameState.inputLocked = true;
    buttons.forEach((b, i) => {
      el.querySelector(`[data-btn="${i}"]`)!.addEventListener('click', () => {
        el.remove();
        this.syncInputLock();
        b.action();
      });
    });
    return el;
  }

  // ============ 对话 ============

  private showDialogLine(): void {
    if (!this.dialogState) return;
    const { name, icon, lines, index } = this.dialogState;
    if (!this.dialogEl) {
      this.dialogEl = document.createElement('div');
      this.dialogEl.id = 'npc-dialog';
      this.overlay.appendChild(this.dialogEl);
      this.dialogEl.addEventListener('click', () => this.advanceDialog());
    }
    gameState.inputLocked = true;
    this.dialogEl.innerHTML = `
      <div class="npc-name">${icon} ${name}</div>
      <div class="npc-line">${lines[index] ?? '……'}</div>
      <div class="dialog-hint">点击或按 Esc 继续（${index + 1}/${lines.length}）</div>`;
    this.dialogEl.classList.remove('hidden');
  }

  /** 开始（或排队等待）一段对话 */
  private startDialog(name: string, icon: string, lines: string[]): void {
    if (this.dialogState) {
      this.pendingDialogs.push({ name, icon, lines });
      return;
    }
    this.dialogState = { name, icon, lines, index: 0 };
    this.showDialogLine();
  }

  private advanceDialog(): void {
    if (!this.dialogState) return;
    this.dialogState.index += 1;
    if (this.dialogState.index >= this.dialogState.lines.length) {
      this.dialogState = null;
      // 依次播放排队对话与事件系统对话
      const next = this.pendingDialogs.shift();
      if (next) {
        this.startDialog(next.name, next.icon, next.lines);
        return;
      }
      this.pumpDialogQueue();
      if (!this.dialogState) {
        this.dialogEl?.classList.add('hidden');
        gameState.inputLocked = [...this.panels.values()].some(p => p.isVisible) || this.shopPanel.isVisible;
      }
    } else {
      this.showDialogLine();
    }
  }

  private pendingDialogs: { name: string; icon: string; lines: string[] }[] = [];

  /** 从事件系统对话队列取一批（不覆盖进行中的对话） */
  private pumpDialogQueue(): void {
    if (this.dialogState) return;
    const queue = EventManager.getInstance().dialogQueue;
    if (queue.length === 0) return;
    const lines = queue.splice(0, queue.length);
    this.startDialog('神秘的声音', '📖', lines);
  }

  // ============ 游戏结束 ============

  private showGameOver(cause: string): void {
    gameState.paused = true;
    const el = document.createElement('div');
    el.id = 'game-over';
    el.innerHTML = `
      <div class="go-title">你归尘了</div>
      <div class="go-sub">${dataManager.text('deathLine')} —— 终结者：${cause}</div>
      <div style="display:flex;gap:12px">
        <button class="btn primary" id="go-load">从上次存档复活</button>
        <button class="btn" id="go-new">重新开始</button>
      </div>`;
    this.overlay.appendChild(el);
    el.querySelector('#go-load')!.addEventListener('click', () => {
      el.remove();
      gameState.paused = false;
      GameStarter.respawnFromSave();
    });
    el.querySelector('#go-new')!.addEventListener('click', () => {
      el.remove();
      gameState.paused = false;
      GameStarter.newGame();
    });
  }
}

interface OverlayPanelLike {
  isVisible: boolean;
  show(): void;
  hide(): void;
}

export type { EquipSlot, BattleResult };
export { WorldManager, Player, CameraController };
