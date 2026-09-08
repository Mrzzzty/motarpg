/**
 * 游戏UI总装（文档五 阶段五）：
 * 左栏=角色信息，中间=游戏Canvas，右栏=任务追踪+房间信息，底部=快捷栏+功能按钮。
 * 面板：背包B / 角色C / 任务J / 图鉴G / 设置Esc，事件面板自动弹出，Boss战警告。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import { WorldManager } from '../core/WorldManager';
import { InputManager } from '../core/InputManager';
import { ThreeRenderer } from '../effects/ThreeRenderer';
import { StatCalculator } from '../utils/StatCalculator';
import { QuestManager } from '../systems/QuestManager';
import { SaveManager } from '../systems/SaveManager';
import type { PotionTier } from '../types';
import { Tooltip } from './Tooltip';
import { Notification } from './Notification';
import { Panels } from './Panels';
import { DialogPanel } from './DialogPanel';
import { ShopPanel } from './ShopPanel';
import { EventPanel } from './EventPanel';
import { TitleScreen } from './TitleScreen';
import { MiniMap } from './MiniMap';
import { ConfirmDialog } from './ConfirmDialog';

export class GameUI {
  private static instance: GameUI;
  private leftHpFill!: HTMLElement;
  private leftHpText!: HTMLElement;
  private leftExpFill!: HTMLElement;
  private leftStats!: HTMLElement;
  private leftEquips!: HTMLElement;
  private roomInfoEl!: HTMLElement;
  private questTrackEl!: HTMLElement;
  private bottomPotions!: HTMLElement;
  private bossWarningEl!: HTMLElement;
  private panels!: Panels;
  private tooltip!: Tooltip;
  private miniMap!: MiniMap;

  private constructor() {}
  static getInstance(): GameUI {
    if (!GameUI.instance) GameUI.instance = new GameUI();
    return GameUI.instance;
  }

  build(): void {
    const app = document.getElementById('app')!;
    app.innerHTML = `
      <div id="title-screen"></div>
      <div id="game-root" class="hidden">
        <aside id="left-panel" class="side-panel">
          <h2 class="panel-title">👤 勇者</h2>
          <div class="hp-wrap">
            <div class="hp-bar"><div id="hp-fill" class="hp-fill"></div></div>
            <div id="hp-text" class="hp-text"></div>
          </div>
          <div class="exp-wrap">
            <div class="exp-bar"><div id="exp-fill" class="exp-fill"></div></div>
            <div id="exp-text" class="exp-text"></div>
          </div>
          <div id="left-stats" class="stat-list"></div>
          <h3 class="sub-title">装备</h3>
          <div id="left-equips" class="equip-list"></div>
        </aside>
        <main id="center-area">
          <div id="room-info" class="room-info"></div>
          <div id="game-container"></div>
          <div id="tooltip" class="hidden"></div>
          <div id="notifications"></div>
          <div id="boss-warning" class="hidden"></div>
        </main>
        <aside id="right-panel" class="side-panel">
          <h2 class="panel-title">📋 任务追踪</h2>
          <div id="quest-track"></div>
          <h2 class="panel-title" style="margin-top:12px">🗺️ 当前位置</h2>
          <div id="floor-info"></div>
        </aside>
        <footer id="bottom-bar">
          <div id="quick-potions"></div>
          <div id="func-buttons">
            <button data-panel="inventory">📦 背包(B)</button>
            <button data-panel="character">👤 角色(C)</button>
            <button data-panel="quest">📋 任务(J)</button>
            <button data-panel="bestiary">📖 图鉴(G)</button>
            <button data-panel="settings">⚙️ 设置(Esc)</button>
            <button id="btn-save">💾 存档(K)</button>
          </div>
        </footer>
        <div id="overlay-layer"></div>
      </div>
    `;

    // Three.js 渲染器挂载（异步初始化，画布就绪后自动接管输入绑定）
    ThreeRenderer.getInstance().init(document.getElementById('game-container')!);

    // 子UI
    this.tooltip = new Tooltip(document.getElementById('tooltip')!);
    Notification.init(document.getElementById('notifications')!);
    this.panels = new Panels(document.getElementById('overlay-layer')!);
    new DialogPanel(document.getElementById('overlay-layer')!);
    new ShopPanel(document.getElementById('overlay-layer')!);
    new EventPanel(document.getElementById('overlay-layer')!);
    new ConfirmDialog(document.getElementById('overlay-layer')!);
    new TitleScreen(document.getElementById('title-screen')!);

    // 引用缓存
    this.leftHpFill = document.getElementById('hp-fill')!;
    this.leftHpText = document.getElementById('hp-text')!;
    this.leftExpFill = document.getElementById('exp-fill')!;
    this.leftStats = document.getElementById('left-stats')!;
    this.leftEquips = document.getElementById('left-equips')!;
    this.roomInfoEl = document.getElementById('room-info')!;
    this.questTrackEl = document.getElementById('quest-track')!;
    this.bottomPotions = document.getElementById('quick-potions')!;
    this.bossWarningEl = document.getElementById('boss-warning')!;

    // 快捷栏：5个可自定义槽位（背包拖入药水绑定；点击使用；右键解绑）——DOM只创建一次
    this.bottomPotions.innerHTML = [0, 1, 2, 3, 4].map(i =>
      `<div class="hotbar-slot" data-slot="${i}" title="快捷栏 ${i + 1}：从背包拖入药水绑定；点击使用；右键解绑">
        <span class="key-num">${i + 1}</span>
        <span class="slot-content"></span>
      </div>`,
    ).join('');
    this.bindHotbarEvents();

    // 功能按钮
    document.querySelectorAll('#func-buttons button[data-panel]').forEach(btn => {
      btn.addEventListener('click', () => {
        eventBus.emit('panelToggled', { panel: (btn as HTMLElement).dataset.panel!, open: true });
      });
    });
    document.getElementById('btn-save')!.addEventListener('click', () => {
      SaveManager.getInstance().save('manual');
    });

    // 小地图（居中区域右上角）
    this.miniMap = new MiniMap(document.getElementById('center-area')!);

    this.bindEvents();
    this.refreshAll();
    this.miniMap.refresh();
  }

  private bindEvents(): void {
    const refresh = () => this.refreshAll();
    for (const ev of ['hpChanged', 'goldChanged', 'expChanged', 'levelUp', 'potionUsed', 'potionPurchased', 'equipmentEquipped', 'equipmentGenerated', 'equipmentSold', 'keyPurchased', 'saveLoaded', 'gameRestarted', 'playerRevived'] as const) {
      eventBus.on(ev, refresh);
    }
    eventBus.on('roomEntered', p => {
      this.roomInfoEl.textContent = `${p.name} · 深度${p.depth}`;
      this.refreshRight();
    });
    eventBus.on('floorChanged', p => {
      this.refreshRight();
      this.roomInfoEl.textContent = `第 ${p.toFloor} 层`;
    });
    eventBus.on('questUpdated', () => this.refreshRight());
    eventBus.on('questCompleted', () => this.refreshRight());
    eventBus.on('bossWarning', p => this.showBossWarning(p.floor, p.name));
    eventBus.on('playerDied', () => this.showDeathNotice());
    // 面板快捷键（含关闭逻辑）
    eventBus.on('panelToggled', p => {
      if (p.open) this.panels.open(p.panel);
    });
    // Esc：统一切换语义（有面板→各面板自身监听与OverlayPanel栈负责关闭；无面板→打开设置）
    window.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || !gameState.started) return;
      const anyOpen = document.querySelector('.overlay-panel:not(.hidden)');
      if (!anyOpen) this.panels.open('settings');
      else this.panels.handleEscape();
    });
  }

  /** 每帧：悬浮窗刷新 */
  updateHover(): void {
    const hover = InputManager.getInstance().hover;
    this.tooltip.update(hover);
  }

  private refreshAll(): void {
    const player = Player.getInstance();
    const stats = player.stats();
    const hpPct = Math.max(0, Math.min(100, (player.state.hp / stats.maxHp) * 100));
    this.leftHpFill.style.width = `${hpPct}%`;
    this.leftHpText.textContent = `❤️ ${Math.ceil(player.state.hp)} / ${stats.maxHp}`;
    const expNeed = StatCalculator.getInstance().expToNext(player.state.level);
    this.leftExpFill.style.width = `${Math.min(100, (player.state.exp / expNeed) * 100)}%`;
    this.leftStats.innerHTML = `
      <div>Lv.${player.state.level} <span id="exp-text" class="dim">(${player.state.exp}/${expNeed} 经验)</span></div>
      <div>⚔️ 攻击 ${stats.attack} <span class="dim">(基础${player.state.baseAttack})</span></div>
      <div>🛡️ 防御 ${stats.defense} <span class="dim">(基础${player.state.baseDefense})</span></div>
      <div>🎯 暴击 ${stats.critRate.toFixed(0)}%　💨 闪避 ${stats.dodgeRate.toFixed(0)}%</div>
      ${stats.lifesteal > 0 ? `<div>🩸 嗜血 ${stats.lifesteal}%</div>` : ''}
      ${stats.fireDamage > 0 ? `<div>🔥 业火 +${stats.fireDamage}</div>` : ''}
      ${stats.bossDamage > 0 ? `<div>🐉 屠龙 +${stats.bossDamage}%</div>` : ''}
      <div>🪙 金币 ${player.state.gold}　🗝️ 钥匙 ${player.state.keys}</div>
    `;
    const equipRow = (label: string, equip: { name: string; quality: string } | null) => {
      if (!equip) return `<div class="equip-item dim">${label}：未装备</div>`;
      const q = dataManager.equipment.quality[equip.quality];
      return `<div class="equip-item">${label}：<span style="color:${q?.color ?? '#fff'}">${equip.name}</span></div>`;
    };
    this.leftEquips.innerHTML =
      equipRow('🗡️', player.weapon) + equipRow('🛡️', player.armor);

    // 快捷栏数量刷新（槽位DOM在build()中创建一次）
    this.refreshHotbar();

    this.refreshRight();
  }

  /** 快捷栏交互（拖入/点击/右键），一次性绑定 */
  private hotbarBound = false;
  private bindHotbarEvents(): void {
    if (this.hotbarBound) return;
    this.hotbarBound = true;
    const player = Player.getInstance();
    this.bottomPotions.querySelectorAll('.hotbar-slot').forEach(el => {
      const slot = parseInt((el as HTMLElement).dataset.slot!, 10);
      el.addEventListener('dragover', e => { e.preventDefault(); el.classList.add('drag-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
      el.addEventListener('drop', ev => {
        ev.preventDefault();
        el.classList.remove('drag-over');
        const tier = (ev as DragEvent).dataTransfer?.getData('potion-tier') as PotionTier | '';
        if (tier) {
          player.setHotbarSlot(slot, tier);
          this.refreshHotbar();
        }
      });
      el.addEventListener('click', () => {
        const tier = player.state.hotbar[slot];
        if (tier && player.getPotionCount(tier) > 0) player.usePotion(tier);
      });
      el.addEventListener('contextmenu', e => {
        e.preventDefault();
        if (player.state.hotbar[slot]) {
          player.setHotbarSlot(slot, null);
          this.refreshHotbar();
        }
      });
    });
  }

  /** 刷新快捷栏显示（每帧属性变化时调用） */
  private refreshHotbar(): void {
    const player = Player.getInstance();
    this.bottomPotions.querySelectorAll('.hotbar-slot').forEach(el => {
      const slot = parseInt((el as HTMLElement).dataset.slot!, 10);
      const tier = player.state.hotbar[slot];
      const content = el.querySelector('.slot-content') as HTMLElement;
      if (tier) {
        const def = dataManager.getPotion(tier)!;
        const count = player.getPotionCount(tier);
        el.classList.toggle('empty', count === 0);
        content.innerHTML = `${def.icon}<span class="count">${count}</span>`;
        (el as HTMLElement).title = `${def.name}：回复${Math.round(def.healPct * 100)}%生命（按此键使用；右键解绑）`;
      } else {
        el.classList.add('empty');
        content.innerHTML = '';
      }
    });
  }

  private refreshRight(): void {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    const floorEl = document.getElementById('floor-info')!;
    if (floor) {
      const kindText = floor.kind === 'initial' ? '初始层' : floor.kind === 'boss' ? 'Boss层' : '';
      floorEl.innerHTML = `<div class="floor-big">第 ${floor.floorId} 层</div><div class="dim">${kindText} · ${floor.rooms.length}个房间</div>`;
    }

    // 任务追踪
    const quest = QuestManager.getInstance().trackedQuest;
    if (!quest) {
      this.questTrackEl.innerHTML = `<div class="dim">暂无进行中的任务</div>`;
    } else {
      const obj = quest.quest.objectives[0];
      this.questTrackEl.innerHTML = `
        <div class="quest-name">📌 ${quest.quest.name}</div>
        <div class="quest-desc">${quest.quest.description}</div>
        <div class="quest-progress">${Math.min(quest.def.progress, obj.quantity)} / ${obj.quantity}</div>
        <div class="quest-guide dim">💡 ${quest.quest.guidance}</div>
      `;
    }
    void player;
  }

  private showBossWarning(floor: number, name: string): void {
    this.bossWarningEl.innerHTML = `<div class="boss-warning-text">⚠️ 警告：${name} 盘踞于此（第${floor}层Boss）</div>`;
    this.bossWarningEl.classList.remove('hidden');
    this.bossWarningEl.classList.add('flash');
    window.setTimeout(() => {
      this.bossWarningEl.classList.add('hidden');
      this.bossWarningEl.classList.remove('flash');
    }, 2600);
  }

  private showDeathNotice(): void {
    Notification.show('你倒下了……在楼层起点复活（金币-20%）', 'warning', '💀');
  }

  /** 显示标题屏后开始游戏 */
  showGame(): void {
    document.getElementById('title-screen')!.classList.add('hidden');
    document.getElementById('game-root')!.classList.remove('hidden');
    this.refreshAll();
  }
}
