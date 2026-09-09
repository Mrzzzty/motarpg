/**
 * 标题屏：开始新游戏（→ 新游戏配置页）/ 继续游戏（读档）/ 退出。
 * 配置页：选择难度（1摇篮曲~7天堂）+ 种子输入（敬请期待，未开放）。
 */
import { gameState } from '../core/GameState';
import { SaveManager } from '../systems/SaveManager';
import { FloorManager } from '../core/FloorManager';
import { CameraController } from '../core/CameraController';
import { GameController } from '../core/GameController';
import { eventBus } from '../core/EventBus';
import { dataManager } from '../core/DataManager';
import { GameUI } from './GameUI';

/** 难度定义（待办v1 种子系统段位表；难度数值系统待模块 I 实装） */
const DIFFICULTIES: { id: number; name: string; desc: string }[] = [
  { id: 1, name: '摇篮曲', desc: '轻松体验' },
  { id: 2, name: '普通', desc: '标准平衡' },
  { id: 3, name: '困难', desc: '挑战加大' },
  { id: 4, name: '噩梦', desc: '高强度' },
  { id: 5, name: '地狱', desc: '极限数值' },
  { id: 6, name: '炼狱', desc: '几乎无解' },
  { id: 7, name: '天堂', desc: '终极挑战' },
];

export class TitleScreen {
  private el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
    this.show();
  }

  show(): void {
    const hasSave = SaveManager.getInstance().hasSave();
    this.el.classList.remove('hidden');
    this.el.innerHTML = `
      <div class="title-box">
        <h1>${dataManager.texts.titles?.gameTitle ?? '无尽之塔'}</h1>
        <div class="title-sub">魔塔RPG · 2.5D</div>
        <div class="title-buttons">
          <button id="title-new" class="btn-primary">⚔️ 开始新游戏</button>
          <button id="title-continue" ${hasSave ? '' : 'disabled'}>📂 继续冒险</button>
          <button id="title-exit">🚪 退出游戏</button>
        </div>
        <div class="title-help dim">
          方向键/WASD 移动 · 点击地板走一步 · 点击怪物/宝箱交互 · 悬浮查看信息<br/>
          B 背包 · C 角色 · J 任务 · G 图鉴 · Esc 设置 · K 存档 · 1-5 快捷栏
        </div>
      </div>
    `;
    this.el.querySelector('#title-new')!.addEventListener('click', () => this.showSetup());
    this.el.querySelector('#title-continue')!.addEventListener('click', () => this.start(true));
    this.el.querySelector('#title-exit')!.addEventListener('click', () => {
      // 桌面版：走 Electron 退出；浏览器版：尝试 window.close（多数浏览器仅允许关闭脚本打开的窗口）
      if (window.motaDesktop) window.motaDesktop.quit();
      else {
        window.close();
        window.setTimeout(() => {
          const btn = this.el.querySelector('#title-exit') as HTMLButtonElement | null;
          if (btn) btn.textContent = '浏览器请用 Ctrl+W / Alt+F4 关闭';
        }, 300);
      }
    });
  }

  /** 新游戏配置页：难度选择 + 种子（敬请期待） */
  private showSetup(): void {
    const cur = gameState.difficulty;
    this.el.innerHTML = `
      <div class="title-box">
        <h1 class="setup-title">新的冒险</h1>
        <div class="title-sub">选择难度</div>
        <div class="diff-grid">
          ${DIFFICULTIES.map(d => `
            <button class="diff-card ${d.id === cur ? 'sel' : ''}" data-d="${d.id}">
              <span class="diff-name">${d.name}</span>
              <span class="diff-desc dim">${d.desc}</span>
            </button>`).join('')}
        </div>
        <div class="setup-row">
          <label class="setup-label" for="setup-seed">种子</label>
          <input id="setup-seed" class="setup-seed" type="text" placeholder="敬请期待" disabled />
        </div>
        <div class="dim setup-hint">种子系统开发中：同一种子将生成完全相同的世界</div>
        <div class="title-buttons setup-actions">
          <button id="setup-start" class="btn-primary">⚔️ 开始冒险</button>
          <button id="setup-back">← 返回</button>
        </div>
      </div>
    `;
    for (const card of Array.from(this.el.querySelectorAll('.diff-card'))) {
      card.addEventListener('click', () => {
        this.el.querySelectorAll('.diff-card').forEach(c => c.classList.remove('sel'));
        card.classList.add('sel');
        gameState.setDifficulty(Number((card as HTMLElement).dataset.d));
      });
    }
    this.el.querySelector('#setup-start')!.addEventListener('click', () => this.start(false));
    this.el.querySelector('#setup-back')!.addEventListener('click', () => this.show());
  }

  private start(cont: boolean): void {
    if (cont && SaveManager.getInstance().load()) {
      // 读档成功
    } else if (!cont) {
      FloorManager.getInstance().enterFloor(1, false);
    } else {
      return; // 继续冒险但读档失败：留在标题屏
    }
    this.enterGame();
  }

  /** 进入游戏的公共尾部：切 UI、置状态、发事件 */
  private enterGame(): void {
    CameraController.getInstance().snapToPlayer();
    GameController.getInstance(); // 确保控制器就绪
    this.el.classList.add('hidden');
    GameUI.getInstance().showGame();
    gameState.started = true;
    eventBus.emit('gameStarted', {});
    eventBus.emit('notification', {
      message: (dataManager.texts.guidance?.tutorialWelcome ?? '欢迎来到无尽之塔'),
      type: 'info', icon: '🏰',
    });
  }
}
