/**
 * 首页界面：游戏标题 + 继续冒险 / 新的冒险 / 操作说明。
 * 玩家选择后才初始化世界并进入游戏。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { SaveManager } from '../systems/SaveManager';
import { GameStarter } from './GameStarter';

export class TitleScreen {
  private root: HTMLElement;
  private onDismiss: (() => void) | null = null;

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.id = 'title-screen';
    parent.appendChild(this.root);
  }

  /** 显示首页；玩家做出选择后回调 */
  show(onDismiss: () => void): void {
    this.onDismiss = onDismiss;
    const save = SaveManager.getInstance();
    const hasSave = save.hasSave();
    let lastSaved: string | null = null;
    try {
      const raw = localStorage.getItem(dataManager.config.saveKey);
      if (raw) lastSaved = (JSON.parse(raw) as { lastSaved?: string }).lastSaved ?? null;
    } catch { /* ignore */ }

    this.root.innerHTML = `
      <div class="title-bg"></div>
      <div class="title-content">
        <div class="title-crest">🗼</div>
        <h1 class="title-name">${dataManager.world.worldName}</h1>
        <div class="title-sub">—— 魔塔 RPG · 无尽深渊 awaiting ——</div>
        <div class="title-desc">
          怪物守着塔层，词缀缠着王座。<br>
          往上走，一直往上——直到天堂为你开门。
        </div>
        <div class="title-buttons">
          <button class="title-btn primary" id="btn-continue" ${hasSave ? '' : 'disabled'}>
            📖 继续冒险
            ${lastSaved ? `<span class="title-btn-sub">上次冒险 · ${lastSaved.slice(0, 16).replace('T', ' ')}</span>` : '<span class="title-btn-sub">暂无存档</span>'}
          </button>
          <button class="title-btn" id="btn-new">
            ⚔️ 新的冒险
            <span class="title-btn-sub">从遗忘之厅开始</span>
          </button>
        </div>
        <div class="title-help">
          方向键 / WASD 移动 · 撞击怪物战斗 · 站上楼梯按 ↑/↓ 换层<br>
          B 背包 · C 角色 · J 任务 · G 图鉴 · H 藏品 · M 菜单 · S 存档
        </div>
      </div>`;
    this.root.classList.remove('hidden');

    const dismiss = (fn: () => void) => {
      this.root.classList.add('hidden');
      this.onDismiss = null;
      fn();
      onDismiss();
    };

    this.root.querySelector('#btn-new')!.addEventListener('click', () => {
      dismiss(() => GameStarter.newGame());
    });
    const cont = this.root.querySelector('#btn-continue');
    if (hasSave) {
      cont!.addEventListener('click', () => {
        dismiss(() => {
          if (!GameStarter.loadGame()) {
            eventBus.emit('notification', { message: '存档读取失败，已开始新的冒险。', type: 'warning' });
            GameStarter.newGame();
          }
        });
      });
    }
  }

  get isVisible(): boolean {
    return !this.root.classList.contains('hidden');
  }
}
