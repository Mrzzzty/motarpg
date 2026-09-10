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
import { RelicManager } from '../systems/RelicManager';
import { SaveManager } from '../systems/SaveManager';
import type { PotionTier } from '../types';
import { Tooltip } from './Tooltip';
import { Notification } from './Notification';
import { Panels } from './Panels';
import { DialogPanel } from './DialogPanel';
import { ShopPanel } from './ShopPanel';
import { BlacksmithPanel } from './BlacksmithPanel';
import { EventPanel } from './EventPanel';
import { RelicChoicePanel } from './RelicChoicePanel';
import { relicCardHtml } from './relicCard';
import { TitleScreen } from './TitleScreen';
import { MiniMap } from './MiniMap';
import { ConfirmDialog } from './ConfirmDialog';
import { BattlePanel } from './BattlePanel';
import { TierTitle } from './TierTitle';
import { DebugConsole } from './DebugConsole';
import { RoomEditor } from './RoomEditor';

export class GameUI {
  private static instance: GameUI;
  private leftHpFill!: HTMLElement;
  private leftHpText!: HTMLElement;
  private leftExpFill!: HTMLElement;
  private leftExpText: HTMLElement | null = null;
  /** 上一次的血量/经验（用于变化时触发闪光与弹跳动效） */
  private lastHp: number | null = null;
  private lastExp: number | null = null;
  private leftStats!: HTMLElement;
  private leftEquips!: HTMLElement;
  private leftRelics!: HTMLElement;
  private roomInfoEl!: HTMLElement;
  private questTrackEl!: HTMLElement;
  private bottomPotions!: HTMLElement;
  private bossWarningEl!: HTMLElement;
  private topRelics!: HTMLElement;
  private relicTooltip!: HTMLElement;
  /** 左栏遗物卡片折叠状态（会话级） */
  private leftRelicsCollapsed = false;
  /** 悬浮窗当前展示的遗物 id（刷新时据此判断是否需要关闭） */
  private relicTipId: string | null = null;
  private panels!: Panels;
  private tooltip!: Tooltip;
  private miniMap!: MiniMap;
  private titleScreen: TitleScreen | null = null;

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
          <div id="left-relics" class="relic-left"></div>
        </aside>
        <main id="center-area">
          <div id="top-bar">
            <div id="room-info" class="room-info"></div>
            <div id="top-relics" class="top-relics empty"></div>
          </div>
          <div id="game-container"></div>
          <div id="tooltip" class="hidden"></div>
          <div id="relic-tooltip" class="hidden"></div>
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
            <button data-panel="achievements">🏆 成就</button>
            <button data-panel="relics">🏺 遗物</button>
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
    new BlacksmithPanel(document.getElementById('overlay-layer')!);
    new EventPanel(document.getElementById('overlay-layer')!);
    new RelicChoicePanel(document.getElementById('overlay-layer')!);
    new ConfirmDialog(document.getElementById('overlay-layer')!);
    BattlePanel.getInstance().init(document.getElementById('overlay-layer')!);
    new TierTitle(document.getElementById('center-area')!);
    DebugConsole.getInstance().init(document.getElementById('center-area')!);
    // 挂到 <body>：编辑器是全屏浮层（#center-area 有 overflow:hidden 会把它裁掉）
    RoomEditor.getInstance().init(document.body);
    this.titleScreen = new TitleScreen(document.getElementById('title-screen')!);

    // 引用缓存
    this.leftHpFill = document.getElementById('hp-fill')!;
    this.leftHpText = document.getElementById('hp-text')!;
    this.leftExpFill = document.getElementById('exp-fill')!;
    this.leftExpText = document.getElementById('exp-text');
    this.leftStats = document.getElementById('left-stats')!;
    this.leftEquips = document.getElementById('left-equips')!;
    this.leftRelics = document.getElementById('left-relics')!;
    this.roomInfoEl = document.getElementById('room-info')!;
    this.topRelics = document.getElementById('top-relics')!;
    this.questTrackEl = document.getElementById('quest-track')!;
    this.bottomPotions = document.getElementById('quick-potions')!;
    this.bossWarningEl = document.getElementById('boss-warning')!;
    this.relicTooltip = document.getElementById('relic-tooltip')!;

    // 顶部遗物栏：悬停图标 → 悬浮窗显示该遗物效果（事件委托，innerHTML 重建后依然有效）
    this.topRelics.addEventListener('mouseover', e => {
      const chip = (e.target as HTMLElement).closest('.top-relic') as HTMLElement | null;
      if (chip?.dataset.relic) this.showRelicTip(chip.dataset.relic);
    });
    this.topRelics.addEventListener('mousemove', e => this.moveRelicTip(e.clientX, e.clientY));
    this.topRelics.addEventListener('mouseout', e => {
      const to = e.relatedTarget as HTMLElement | null;
      if (!to || !to.closest?.('.top-relic')) this.hideRelicTip();
    });
    // 点击图标 → 打开物品详情页
    this.topRelics.addEventListener('click', e => {
      const chip = (e.target as HTMLElement).closest('.top-relic') as HTMLElement | null;
      if (chip?.dataset.relic) eventBus.emit('itemDetailRequested', { kind: 'relic', id: chip.dataset.relic });
    });
    // 左栏遗物：点击标题折叠 / 展开；点击卡片 → 打开物品详情页
    this.leftRelics.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-relic-toggle]')) {
        this.leftRelicsCollapsed = !this.leftRelicsCollapsed;
        this.refreshRelics();
        return;
      }
      const card = target.closest('[data-relic]') as HTMLElement | null;
      if (card?.dataset.relic) eventBus.emit('itemDetailRequested', { kind: 'relic', id: card.dataset.relic });
    });
    // 左栏装备：点击 → 打开物品详情页
    this.leftEquips.addEventListener('click', e => {
      const row = (e.target as HTMLElement).closest('[data-equip]') as HTMLElement | null;
      if (row?.dataset.equip) eventBus.emit('itemDetailRequested', { kind: 'equipment', id: row.dataset.equip });
    });

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
    for (const ev of ['hpChanged', 'goldChanged', 'expChanged', 'levelUp', 'potionUsed', 'potionPurchased', 'equipmentEquipped', 'equipmentGenerated', 'equipmentSold', 'keyPurchased', 'saveLoaded', 'gameRestarted', 'playerRevived', 'relicGained', 'relicRemoved', 'relicPurified', 'relicComboTriggered'] as const) {
      eventBus.on(ev, refresh);
    }
    // 遗物获得 / 组合质变 / 净化 提示
    eventBus.on('relicGained', p => Notification.show(`获得遗物【${p.name}】`, 'success', '🏺'));
    eventBus.on('relicComboTriggered', p => Notification.show(`组合质变觉醒：${p.name}`, 'success', '✦'));
    eventBus.on('relicPurified', p => Notification.show(`灾厄净化 → ${p.name}`, 'success', '✨'));
    eventBus.on('roomEntered', p => {
      // 风险-收益提示：玩家在分岔口据此权衡走哪条路（安全房风险=1，不显示）
      const risk = p.risk ?? 1;
      const tag = risk > 1
        ? ` · 危险${'★'.repeat(risk)}${'☆'.repeat(Math.max(0, 3 - risk))} · 收益 ×${(p.rewardMul ?? 1).toFixed(2)}`
        : '';
      this.roomInfoEl.textContent = `${p.name} · 深度${p.depth}${tag}`;
      this.refreshRight();
    });
    eventBus.on('floorChanged', p => {
      this.refreshRight();
      this.roomInfoEl.textContent = `第 ${p.toFloor} 层`;
    });
    eventBus.on('questUpdated', () => this.refreshRight());
    eventBus.on('questCompleted', () => this.refreshRight());
    eventBus.on('questAccepted', p => {
      this.refreshRight();
      const q = QuestManager.getInstance().all().find(x => x.def.id === p.questId);
      if (q) Notification.show(`新任务：${q.def.name}`, 'info', '📋');
    });
    // 世界状态变化会影响「任务目标位置」→ 刷新追踪
    for (const ev of ['monsterDefeated', 'chestOpened', 'potionUsed', 'equipmentEquipped'] as const) {
      eventBus.on(ev, () => this.refreshRight());
    }
    eventBus.on('bossWarning', p => this.showBossWarning(p.floor, p.name));
    eventBus.on('playerDied', () => this.showDeathNotice());
    // 设置面板「回到首页」：自动存档并重新渲染标题屏
    eventBus.on('returnToTitle', () => this.returnToTitle());
    // 面板快捷键（含关闭逻辑）
    eventBus.on('panelToggled', p => {
      if (p.open) this.panels.open(p.panel);
    });
    // Esc：统一切换语义（有面板→各面板自身监听与OverlayPanel栈负责关闭；
    // 无面板且无其他模态（微操战斗/登顶演出）→ 打开设置）
    window.addEventListener('keydown', e => {
      if (e.key !== 'Escape' || !gameState.started) return;
      const anyOpen = document.querySelector('.overlay-panel:not(.hidden)');
      if (!anyOpen && !gameState.modalOpen) this.panels.open('settings');
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
    // 低血脉动警示（<30%）+ 数值变化的一次性闪光/弹跳
    this.leftHpFill.classList.toggle('low', hpPct < 30 && player.state.hp > 0);
    if (this.lastHp !== null && Math.ceil(player.state.hp) !== this.lastHp) {
      this.pulse(this.leftHpFill);
      this.pulse(this.leftHpText);
    }
    this.lastHp = Math.ceil(player.state.hp);

    const expNeed = StatCalculator.getInstance().expToNext(player.state.level);
    this.leftExpFill.style.width = `${Math.min(100, (player.state.exp / expNeed) * 100)}%`;
    if (this.lastExp !== null && player.state.exp !== this.lastExp) {
      this.pulse(this.leftExpFill);
      if (this.leftExpText) this.pulse(this.leftExpText);
    }
    this.lastExp = player.state.exp;
    if (this.leftExpText) this.leftExpText.textContent = `✨ ${player.state.exp} / ${expNeed}`;
    this.leftStats.innerHTML = `
      <div>Lv.${player.state.level} <span class="dim">(${player.state.exp}/${expNeed} 经验)</span></div>
      <div>⚔️ 攻击 ${stats.attack} <span class="dim">(基础${player.state.baseAttack})</span></div>
      <div>🛡️ 防御 ${stats.defense} <span class="dim">(基础${player.state.baseDefense})</span></div>
      <div>🎯 暴击 ${stats.critRate.toFixed(0)}%　💨 闪避 ${stats.dodgeRate.toFixed(0)}%</div>
      ${stats.lifesteal > 0 ? `<div>🩸 嗜血 ${stats.lifesteal}%</div>` : ''}
      ${stats.fireDamage > 0 ? `<div>🔥 业火 +${stats.fireDamage}</div>` : ''}
      ${stats.bossDamage > 0 ? `<div>🐉 屠龙 +${stats.bossDamage}%</div>` : ''}
      <div>💰 金币 ${player.state.gold}　🗝️ 钥匙 ${player.state.keys}</div>
    `;
    const equipRow = (label: string, equip: { id: string; name: string; quality: string; slot?: string; accessoryStat?: string; accessoryValue?: number } | null) => {
      if (!equip) return `<div class="equip-item dim">${label}：未装备</div>`;
      const q = dataManager.equipment.quality[equip.quality];
      const sub = equip.slot === 'accessory'
        ? ` <span class="dim">(${equip.accessoryStat === 'crit' ? '暴击' : '闪避'}+${equip.accessoryValue ?? 0}%)</span>`
        : '';
      return `<div class="equip-item" data-equip="${equip.id}" style="cursor:pointer" title="点击查看详情">${label}：<span style="color:${q?.color ?? '#fff'}">${equip.name}</span>${sub}</div>`;
    };
    this.leftEquips.innerHTML =
      equipRow('🗡️', player.weapon) + equipRow('🛡️', player.armor) + equipRow('💍', player.accessory);
    this.refreshRelics();

    // 快捷栏数量刷新（槽位DOM在build()中创建一次）
    this.refreshHotbar();

    this.refreshRight();
  }

  /**
   * 遗物 UI 刷新：
   * - 左栏：长方形卡片，直接显示效果文字，可点击标题折叠 / 展开；
   * - 顶部：图标条「点→线→面」展开——先向右排，放不下自动换行向下，不遮挡其他部件。
   */
  private refreshRelics(): void {
    const rm = RelicManager.getInstance();
    const owned = rm.owned();

    // 悬浮窗对应的遗物已不在持有列表 → 关闭，避免内容过期
    if (this.relicTipId && !owned.some(d => d.id === this.relicTipId)) this.hideRelicTip();

    // —— 左栏：卡片 + 折叠 ——
    const caret = this.leftRelicsCollapsed ? '▸' : '▾';
    const head = (count: number) => `
      <div class="relic-left-head" data-relic-toggle title="点击折叠 / 展开">
        <span class="sub-title">遗物 <span class="dim">(${count})</span></span>
        <span class="relic-caret">${caret}</span>
      </div>`;
    if (owned.length === 0) {
      this.leftRelics.innerHTML = `${head(0)}<div class="dim">暂无遗物</div>`;
    } else {
      const cards = owned.map(d => relicCardHtml(d, rm, {
        cls: 'relic-card',
        iconCls: 'relic-card-icon',
        descCls: 'relic-card-desc',
        style: `border-left-color:${rm.rarityColor(d.rarity)}`,
        attrs: `data-relic="${d.id}" title="点击查看详情"`,
      })).join('');
      this.leftRelics.innerHTML =
        `${head(owned.length)}<div class="relic-left-body${this.leftRelicsCollapsed ? ' hidden' : ''}">${cards}</div>`;
    }

    // —— 顶部图标条 ——
    if (owned.length === 0) {
      this.topRelics.classList.add('empty');
      this.topRelics.innerHTML = '';
    } else {
      this.topRelics.classList.remove('empty');
      this.topRelics.innerHTML = owned.map(d => {
        const color = rm.rarityColor(d.rarity);
        return `<span class="top-relic" data-relic="${d.id}" style="border-color:${color}">${rm.iconHtml(d, 'top-relic-icon')}</span>`;
      }).join('');
    }
  }

  /** 顶部图标悬停：显示该遗物效果的悬浮窗 */
  private showRelicTip(id: string): void {
    const rm = RelicManager.getInstance();
    const d = rm.def(id);
    if (!d || !this.relicTooltip) return;
    const color = rm.rarityColor(d.rarity);
    this.relicTipId = id;
    this.relicTooltip.innerHTML = `
      <div class="tt-title" style="color:${color}">${d.name}</div>
      <div class="dim">${rm.rarityName(d.rarity)}${d.exclusive ? ' · 专属' : ''}</div>
      <div>${d.desc}</div>
      ${d.note ? `<div class="dim" style="margin-top:3px">${d.note}</div>` : ''}`;
    this.relicTooltip.classList.remove('hidden');
  }

  /** 悬浮窗跟随鼠标（超出窗口边缘时自动翻到另一侧） */
  private moveRelicTip(x: number, y: number): void {
    if (!this.relicTooltip || this.relicTooltip.classList.contains('hidden')) return;
    const rect = this.relicTooltip.getBoundingClientRect();
    let px = x + 14;
    let py = y + 14;
    if (px + rect.width > window.innerWidth - 8) px = x - rect.width - 14;
    if (py + rect.height > window.innerHeight - 8) py = y - rect.height - 14;
    this.relicTooltip.style.left = `${px}px`;
    this.relicTooltip.style.top = `${py}px`;
  }

  private hideRelicTip(): void {
    this.relicTipId = null;
    this.relicTooltip?.classList.add('hidden');
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
        if (tier && player.getPotionCount(tier) > 0) {
          player.usePotion(tier);
          // 使用成功的一次性脉冲反馈（加类 → 动画结束移除）
          el.classList.remove('used');
          void (el as HTMLElement).offsetWidth;
          el.classList.add('used');
          window.setTimeout(() => el.classList.remove('used'), 400);
        }
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

  /** 一次性强调动效：加类 → 动画结束移除（可重复触发） */
  private pulse(el: HTMLElement): void {
    el.classList.remove('bump');
    // 强制重排以便同名动画能重放
    void el.offsetWidth;
    el.classList.add('bump');
    window.setTimeout(() => el.classList.remove('bump'), 520);
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
        content.innerHTML = `${dataManager.potionIconImg(tier, 'potion-icon hotbar-icon')}<span class="count">${count}</span>`;
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
      const kindText = floor.kind === 'initial' ? '初始层'
        : floor.kind === 'boss' ? 'Boss层'
        : floor.kind === 'summit' ? '塔顶' : '';
      floorEl.innerHTML = `<div class="floor-big">第 ${floor.floorId} 层</div><div class="dim">${kindText} · ${floor.rooms.length}个房间</div>`;
    }

    // 任务追踪：列出全部进行中的任务（首个为主），附「当前目标 + 目标位置」引导
    const qm = QuestManager.getInstance();
    const active = qm.activeQuests();
    if (active.length === 0) {
      this.questTrackEl.innerHTML = `<div class="dim">暂无进行中的任务</div>`;
    } else {
      this.questTrackEl.innerHTML = active.slice(0, 3).map(({ state, def }, i) => {
        const g = qm.guideFor(def, state);
        return `<div class="quest-item ${i === 0 ? 'primary' : 'secondary'}">
          <div class="quest-name">${i === 0 ? '📌' : '•'} ${def.name}</div>
          <div class="quest-desc dim">${def.description}</div>
          <div class="quest-progress">${g.objective}</div>
          <div class="quest-guide">💡 ${g.hint}</div>
        </div>`;
      }).join('');
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

  /** 回到首页：先自动存档，停掉游戏态并重新渲染标题屏（设置面板「🏠 回到首页」触发） */
  returnToTitle(): void {
    SaveManager.getInstance().save('manual');
    gameState.started = false;
    WorldManager.getInstance().reset();
    document.getElementById('game-root')!.classList.add('hidden');
    document.getElementById('title-screen')!.classList.remove('hidden');
    this.titleScreen?.show();
  }
}
