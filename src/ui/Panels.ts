/**
 * 面板集合：背包(B，含装备对比) / 角色(C) / 任务(J) / 图鉴(G) / 设置(Esc) / 战斗结果。
 * OverlayPanel 基类管理模态栈（打开时屏蔽游戏输入，Esc逐层关闭）。
 */
import type { Equipment, Quality } from '../types';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import { StatCalculator } from '../utils/StatCalculator';
import { QuestManager } from '../systems/QuestManager';
import { BestiaryManager } from '../systems/BestiaryManager';
import { SaveManager } from '../systems/SaveManager';
import { MerchantSystem } from '../systems/MerchantSystem';
import { AchievementSystem } from '../systems/AchievementSystem';
import { GameController } from '../core/GameController';

const QUALITY_RANK: Record<Quality, number> = {
  poor: 0, common: 1, fine: 2, rare: 3, epic: 4, legendary: 5, mythic: 6,
};

/** 品质色 → 半透明背景（边框用原色，总是比背景更鲜艳） */
function qualityBg(hex: string, alpha = 0.16): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

class OverlayPanel {
  protected el: HTMLElement;
  private readonly name: string;
  private static stack: OverlayPanel[] = [];

  constructor(layer: HTMLElement, name: string, title: string) {
    this.name = name;
    this.el = document.createElement('div');
    this.el.className = 'overlay-panel hidden';
    this.el.dataset.panel = name;
    this.el.innerHTML = `<div class="op-box"><div class="op-head"><span>${title}</span><button class="op-close">✕</button></div><div class="op-body"></div></div>`;
    layer.appendChild(this.el);
    this.el.querySelector('.op-close')!.addEventListener('click', () => this.close());
    this.el.addEventListener('click', e => {
      if (e.target === this.el) this.close();
    });
  }

  get body(): HTMLElement { return this.el.querySelector('.op-body') as HTMLElement; }
  get isOpen(): boolean { return !this.el.classList.contains('hidden'); }

  open(): void {
    if (this.isOpen) return;
    this.el.classList.remove('hidden');
    OverlayPanel.stack.push(this);
    gameState.pushModal();
    this.onOpen();
  }

  close(): void {
    if (!this.isOpen) return;
    this.el.classList.add('hidden');
    OverlayPanel.stack = OverlayPanel.stack.filter(p => p !== this);
    gameState.popModal();
  }

  protected onOpen(): void { /* 子类刷新内容 */ }

  /** Esc：关闭最上层 */
  static closeTop(): boolean {
    const top = OverlayPanel.stack[OverlayPanel.stack.length - 1];
    if (!top) return false;
    top.close();
    return true;
  }
}

export class Panels {
  private inventory: InventoryPanelImpl;
  private character: CharacterPanelImpl;
  private quest: QuestPanelImpl;
  private bestiary: BestiaryPanelImpl;
  private achievements: AchievementPanelImpl;
  private settings: SettingsPanelImpl;
  private battleLog: BattleLogPanelImpl;

  constructor(layer: HTMLElement) {
    this.inventory = new InventoryPanelImpl(layer);
    this.character = new CharacterPanelImpl(layer);
    this.quest = new QuestPanelImpl(layer);
    this.bestiary = new BestiaryPanelImpl(layer);
    this.achievements = new AchievementPanelImpl(layer);
    this.settings = new SettingsPanelImpl(layer);
    this.battleLog = new BattleLogPanelImpl(layer);
  }

  open(name: string): void {
    switch (name) {
      case 'inventory': this.inventory.open(); break;
      case 'character': this.character.open(); break;
      case 'quest': this.quest.open(); break;
      case 'bestiary': this.bestiary.open(); break;
      case 'achievements': this.achievements.open(); break;
      case 'settings': this.settings.open(); break;
      default: break;
    }
  }

  handleEscape(): void {
    OverlayPanel.closeTop();
  }
}

// ============ 背包（全部内容 + 分类筛选 + 装备对比 + 拖拽绑快捷栏） ============

type InvFilter = 'all' | 'weapon' | 'armor' | 'potion' | 'other';

class InventoryPanelImpl extends OverlayPanel {
  private selected: Equipment | null = null;
  private filter: InvFilter = 'all';

  constructor(layer: HTMLElement) {
    super(layer, 'inventory', '📦 背包');
    // 固定大尺寸面板（不随物品数量变化）
    (this.el.querySelector('.op-box') as HTMLElement).classList.add('op-box-inv');
    eventBus.on('equipmentGenerated', () => { if (this.isOpen) this.render(); });
    eventBus.on('equipmentEquipped', () => { if (this.isOpen) this.render(); });
    eventBus.on('equipmentSold', () => { if (this.isOpen) this.render(); });
    eventBus.on('potionUsed', () => { if (this.isOpen) this.render(); });
    eventBus.on('potionPurchased', () => { if (this.isOpen) this.render(); });
  }

  protected onOpen(): void { this.render(); }

  private render(): void {
    const player = Player.getInstance();
    const bag = player.state.bag;
    this.selected = bag.find(e => e.id === this.selected?.id) ?? null;

    const filtered = bag.filter(e => {
      if (this.filter === 'weapon') return e.slot === 'weapon';
      if (this.filter === 'armor') return e.slot === 'armor';
      if (this.filter === 'potion' || this.filter === 'other') return false;
      return true;
    });

    const tabs: { key: InvFilter; label: string; count: number }[] = [
      { key: 'all', label: '全部', count: bag.length },
      { key: 'weapon', label: '🗡️ 武器', count: bag.filter(e => e.slot === 'weapon').length },
      { key: 'armor', label: '🛡️ 胸甲', count: bag.filter(e => e.slot === 'armor').length },
      { key: 'potion', label: '🧪 药水', count: Object.values(player.state.potions).reduce((s, n) => s + n, 0) },
      { key: 'other', label: '🗝️ 其他', count: player.state.keys > 0 ? 1 : 0 },
    ];

    // 收藏置顶，其余按背包顺序
    const sorted = [...filtered].sort((a, b) => Number(!!b.isFavorite) - Number(!!a.isFavorite));
    const listHtml = sorted.length === 0
      ? '<div class="dim inv-empty">此类没有物品</div>'
      : sorted.map(e => {
        const q = dataManager.equipment.quality[e.quality];
        const equipped = e.id === player.state.weaponId || e.id === player.state.armorId;
        return `<div class="bag-cell ${e.id === this.selected?.id ? 'active' : ''} ${e.isFavorite ? 'fav' : ''}"
                     draggable="true" data-id="${e.id}"
                     style="border-color:${q.color};background:${qualityBg(q.color)}"
                     title="拖到左侧装备栏穿戴；点击查看详情">
          <div class="cell-icon" style="border-color:${q.color}">${e.slot === 'weapon' ? '🗡️' : '🛡️'}</div>
          <div class="cell-name" style="color:${q.color}">${e.name}${e.isFavorite ? ' ⭐' : ''}</div>
          <div class="cell-sub dim">Lv.${e.level}${equipped ? ' 已穿戴' : ''}</div>
        </div>`;
      }).join('');

    const potionRows = ['crude', 'normal', 'quality', 'strong', 'holy'].map(tier => {
      const def = dataManager.getPotion(tier as never)!;
      const count = player.getPotionCount(tier as never);
      return `<div class="potion-row" draggable="${count > 0}" data-tier="${tier}"
                  title="${count > 0 ? '拖到底部快捷栏绑定；点击使用' : '数量为0'}">
        <span class="potion-name">${dataManager.potionIconImg(tier as never)} ${def.name}</span>
        <span>×${count} <span class="dim">(${Math.round(def.healPct * 100)}%)</span></span>
        <button class="potion-use" data-tier-use="${tier}" ${count === 0 ? 'disabled' : ''}>使用</button>
      </div>`;
    }).join('');

    const otherHtml = `
      <div class="potion-row"><span>🗝️ 钥匙</span><span>×${player.state.keys}</span><span></span></div>
    `;

    const middleHtml = this.filter === 'potion'
      ? `<div class="inv-potions"><div class="dim hotbar-hint">💡 将药水拖到底部快捷栏槽位绑定（数字键1-5快速使用）</div>${potionRows}</div>`
      : this.filter === 'other'
        ? `<div class="inv-potions">${otherHtml}</div>`
        : `<div class="inv-list">${listHtml}</div>`;

    // 装备栏（武器/胸甲两个大方格，支持从背包拖入穿戴）
    const equipSlotHtml = (slot: 'weapon' | 'armor'): string => {
      const equipped = slot === 'weapon' ? player.weapon : player.armor;
      const q = equipped ? dataManager.equipment.quality[equipped.quality] : null;
      return `<div class="equip-slot ${equipped ? 'filled' : 'empty-slot'}" data-eslot="${slot}">
        <div class="equip-slot-icon">${slot === 'weapon' ? '🗡️' : '🛡️'}</div>
        ${equipped && q
          ? `<div class="equip-slot-name" style="color:${q.color}">${equipped.name}</div>
             <button class="equip-slot-unequip" data-unequip="${slot}">卸下</button>`
          : '<div class="equip-slot-name dim">空</div>'}
      </div>`;
    };

    this.body.innerHTML = `
      <div class="inv-tabs">${tabs.map(t =>
        `<button class="inv-tab ${this.filter === t.key ? 'active' : ''}" data-filter="${t.key}">${t.label} <span class="dim">${t.count}</span></button>`,
      ).join('')}</div>
      <div class="inv-main">
        <div class="inv-equip-col">
          <h3 class="sub-title">装备栏</h3>
          ${equipSlotHtml('weapon')}
          ${equipSlotHtml('armor')}
          <div class="dim equip-hint">💡 拖动背包中的装备到对应栏位穿戴</div>
        </div>
        <div class="inv-middle">${middleHtml}</div>
        <div class="inv-detail">${this.filter === 'potion' || this.filter === 'other' ? '<div class="dim">选择装备查看详情与对比</div>' : this.selected ? this.detailHtml(this.selected) : '<div class="dim">选择一件装备查看详情与对比</div>'}</div>
      </div>
    `;

    // 筛选切换
    this.body.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filter = (btn as HTMLElement).dataset.filter as InvFilter;
        this.render();
      });
    });
    // 收藏切换（不影响选中）
    this.body.querySelectorAll('[data-fav]').forEach(btn => {
      btn.addEventListener('click', ev => {
        ev.stopPropagation();
        const equip = bag.find(e => e.id === (btn as HTMLElement).dataset.fav);
        if (equip) equip.isFavorite = !equip.isFavorite;
        this.render();
      });
    });
    // 装备选中
    this.body.querySelectorAll('.bag-cell').forEach(item => {
      const el = item as HTMLElement;
      el.addEventListener('click', () => {
        this.selected = bag.find(e => e.id === el.dataset.id) ?? null;
        this.render();
      });
      // 拖拽源：拖到左侧装备栏穿戴
      el.addEventListener('dragstart', ev => {
        const de = ev as DragEvent;
        de.dataTransfer?.setData('equip-id', el.dataset.id!);
        if (de.dataTransfer) de.dataTransfer.effectAllowed = 'move';
      });
    });
    // 装备栏：放置穿戴 + 卸下
    this.body.querySelectorAll('.equip-slot').forEach(slotEl => {
      const slot = (slotEl as HTMLElement).dataset.eslot as 'weapon' | 'armor';
      slotEl.addEventListener('dragover', ev => {
        ev.preventDefault();
        slotEl.classList.add('drag-over');
      });
      slotEl.addEventListener('dragleave', () => slotEl.classList.remove('drag-over'));
      slotEl.addEventListener('drop', ev => {
        ev.preventDefault();
        slotEl.classList.remove('drag-over');
        const id = (ev as DragEvent).dataTransfer?.getData('equip-id');
        const equip = id ? bag.find(e => e.id === id) : null;
        if (equip && equip.slot === slot) {
          Player.getInstance().equip(id!);
        } else if (equip) {
          eventBus.emit('notification', { message: '该装备类型与此栏位不符', type: 'warning', icon: '⚠️' });
        }
      });
    });
    this.body.querySelectorAll('[data-unequip]').forEach(btn => {
      btn.addEventListener('click', () => {
        Player.getInstance().unequip((btn as HTMLElement).dataset.unequip as 'weapon' | 'armor');
        this.render();
      });
    });
    const sel = this.selected;
    this.body.querySelectorAll('[data-act="equip"]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (sel) Player.getInstance().equip(sel.id);
      });
    });
    this.body.querySelectorAll('[data-act="sell"]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!sel) return;
        MerchantSystem.getInstance().sell(sel.id);
      });
    });
    // 药水使用
    this.body.querySelectorAll('[data-tier-use]').forEach(btn => {
      btn.addEventListener('click', () => {
        Player.getInstance().usePotion((btn as HTMLElement).dataset.tierUse as never);
        this.render();
      });
    });
    // 药水拖拽源：拖到底部快捷栏绑定
    this.body.querySelectorAll('.potion-row[draggable="true"]').forEach(row => {
      row.addEventListener('dragstart', ev => {
        const de = ev as DragEvent;
        de.dataTransfer?.setData('potion-tier', (row as HTMLElement).dataset.tier!);
        if (de.dataTransfer) de.dataTransfer.effectAllowed = 'copy';
      });
    });
  }

  /** 装备详情 + 与已穿戴对比（数值/词条/品质 变化，绿升红降） */
  private detailHtml(e: Equipment): string {
    const player = Player.getInstance();
    const q = dataManager.equipment.quality[e.quality];
    const current = e.slot === 'weapon' ? player.weapon : player.armor;

    const cmpValue = (label: string, v: number, cv: number): string => {
      const d = v - cv;
      const cls = d > 0 ? 'up' : d < 0 ? 'down' : 'dim';
      const arrow = d > 0 ? ` <span class="${cls}">(▲${d} vs 已穿戴)</span>` : d < 0 ? ` <span class="${cls}">(▼${Math.abs(d)} vs 已穿戴)</span>` : '';
      return `<div>${label} ${v}${arrow}</div>`;
    };

    // 词条对比：新增/缺失
    const curAffixes = current?.affixes ?? [];
    const affixRows = e.affixes.map(a => {
      const same = curAffixes.find(c => c.type === a.type);
      const isNew = !same;
      return `<div class="affix-row ${isNew ? 'new-affix' : ''}">✦ ${a.name} Lv.${e.level}　${this.affixDesc(a)}${isNew ? ' <span class="up">[新]</span>' : same && same.value !== a.value ? ` <span class="${a.value > same.value ? 'up' : 'down'}">(${a.value > same.value ? '▲' : '▼'}${Math.abs(a.value - same.value)})</span>` : ''}</div>`;
    });
    const lostAffixes = curAffixes.filter(c => !e.affixes.some(a => a.type === c.type));
    const lostHtml = lostAffixes.map(c => `<div class="affix-row down">✦ ${c.name} ${this.affixDesc(c)} <span>[缺失]</span></div>`).join('');

    // 品质对比
    let qualityCmp = '';
    if (current) {
      const d = QUALITY_RANK[e.quality] - QUALITY_RANK[current.quality];
      if (d !== 0) qualityCmp = `<span class="${d > 0 ? 'up' : 'down'}">（${d > 0 ? '品质提升▲' : '品质下降▼'}）</span>`;
    }

    return `
      <div class="eq-detail">
        <div class="eq-title-row">
          <div class="eq-title" style="color:${q.color}">${e.slot === 'weapon' ? '🗡️' : '🛡️'} ${e.name}</div>
          <button class="fav-star detail-fav ${e.isFavorite ? 'on' : ''}" data-fav="${e.id}"
                  title="${e.isFavorite ? '取消收藏' : '收藏：置顶显示且无法回收'}">${e.isFavorite ? '⭐ 已收藏' : '☆ 收藏'}</button>
        </div>
        <div class="dim">品质：${q.name}${qualityCmp}　装备等级：${e.level}</div>
        <div class="eq-stats">
          ${cmpValue('⚔️ 攻击力', e.attack, current?.attack ?? 0)}
          ${cmpValue('🛡️ 防御力', e.defense, current?.defense ?? 0)}
        </div>
        ${e.affixes.length > 0 || lostAffixes.length > 0 ? `<div class="affix-list">${affixRows.join('')}${lostHtml}</div>` : ''}
        <div class="dim">回收价：${e.sellPrice} 金币</div>
        <div class="eq-actions">
          <button data-act="equip" class="btn-primary">${current ? '替换穿戴（旧装回背包）' : '穿戴'}</button>
          <button data-act="sell" ${e.isFavorite ? 'disabled title="已收藏的装备无法回收"' : ''}>出售 +${e.sellPrice}💰</button>
        </div>
      </div>
    `;
  }

  private affixDesc(a: { name: string; value: number; isPercent: boolean }): string {
    const def = dataManager.equipment.affixes.find(d => d.name === a.name);
    return def?.description?.replace('{v}', String(a.value)) ?? `${a.name}+${a.value}`;
  }
}

// ============ 角色 ============

class CharacterPanelImpl extends OverlayPanel {
  constructor(layer: HTMLElement) {
    super(layer, 'character', '👤 角色');
  }

  protected onOpen(): void {
    const player = Player.getInstance();
    const stats = player.stats();
    const eqRow = (slot: string, equip: Equipment | null) => equip
      ? `<div class="char-equip" data-slot="${slot}"><span>${slot === 'weapon' ? '🗡️ 武器' : '🛡️ 胸甲'}</span><span style="color:${dataManager.equipment.quality[equip.quality].color}">${equip.name}</span><button data-unequip="${slot}">卸下</button></div>`
      : `<div class="char-equip dim"><span>${slot === 'weapon' ? '🗡️ 武器' : '🛡️ 胸甲'}</span><span>未装备</span></div>`;

    this.body.innerHTML = `
      <div class="char-grid">
        <div>等级</div><div>Lv.${player.state.level}（${player.state.exp}/${StatCalculator.getInstance().expToNext(player.state.level)} 经验）</div>
        <div>生命</div><div>${Math.ceil(player.state.hp)} / ${stats.maxHp}</div>
        <div>攻击</div><div>${stats.attack} <span class="dim">(基础 ${player.state.baseAttack})</span></div>
        <div>防御</div><div>${stats.defense} <span class="dim">(基础 ${player.state.baseDefense})</span></div>
        <div>暴击率</div><div>${stats.critRate.toFixed(0)}%</div>
        <div>闪避率</div><div>${stats.dodgeRate.toFixed(0)}%</div>
        ${stats.lifesteal > 0 ? `<div>嗜血</div><div>${stats.lifesteal}%</div>` : ''}
        ${stats.fireDamage > 0 ? `<div>业火</div><div>+${stats.fireDamage}</div>` : ''}
        ${stats.goldBonus > 0 ? `<div>贪婪</div><div>+${stats.goldBonus}%</div>` : ''}
        ${stats.expBonus > 0 ? `<div>博学</div><div>+${stats.expBonus}%</div>` : ''}
        ${stats.bossDamage > 0 ? `<div>屠龙</div><div>+${stats.bossDamage}%</div>` : ''}
        <div>金币</div><div>💰 ${player.state.gold}</div>
        <div>钥匙</div><div>🗝️ ${player.state.keys}</div>
        <div>楼层</div><div>第 ${player.state.currentFloor} 层</div>
      </div>
      <h3 class="sub-title">装备槽（共2个）</h3>
      ${eqRow('weapon', player.weapon)}
      ${eqRow('armor', player.armor)}
    `;
    this.body.querySelectorAll('[data-unequip]').forEach(btn => {
      btn.addEventListener('click', () => {
        Player.getInstance().unequip((btn as HTMLElement).dataset.unequip as 'weapon' | 'armor');
        this.onOpen();
      });
    });
  }
}

// ============ 任务 ============

class QuestPanelImpl extends OverlayPanel {
  constructor(layer: HTMLElement) {
    super(layer, 'quest', '📋 任务');
  }

  protected onOpen(): void {
    const rows = QuestManager.getInstance().all().map(({ state, def }) => {
      const status = state.isCompleted
        ? '<span class="ok">✔ 已完成</span>'
        : state.isAccepted
          ? `<span class="dim">进行中 ${Math.min(state.progress, def.objectives[0].quantity)}/${def.objectives[0].quantity}</span>`
          : '<span class="dim">未解锁</span>';
      const rewards = def.rewards.map(r => {
        switch (r.type) {
          case 'gold': return `${r.value}金币`;
          case 'potion': return `${dataManager.getPotion(r.tier ?? 'crude')?.name}×${r.value ?? 1}`;
          case 'equipment': return '装备';
          case 'exp': return `${r.value}经验`;
          case 'keys': return `钥匙×${r.value ?? 1}`;
          default: return '';
        }
      }).join('、');
      return `<div class="quest-row ${state.isCompleted ? 'done' : state.isAccepted ? 'active-quest' : 'locked'}">
        <div class="quest-name">${state.isAccepted || state.isCompleted ? '📌' : '🔒'} ${def.name} ${status}</div>
        <div class="dim">${def.description}</div>
        <div class="dim">奖励：${rewards}</div>
      </div>`;
    }).join('');
    this.body.innerHTML = rows;
  }
}

// ============ 图鉴 ============

class BestiaryPanelImpl extends OverlayPanel {
  constructor(layer: HTMLElement) {
    super(layer, 'bestiary', '📖 图鉴');
  }

  protected onOpen(): void {
    const floor = Player.getInstance().state.currentFloor;
    const rows = BestiaryManager.getInstance().entries().map(({ def, kills, unlocked }) => {
      if (!unlocked) {
        return `<div class="bestiary-row locked"><span>？？？</span><span class="dim">尚未遭遇</span></div>`;
      }
      const stats = StatCalculator.getInstance().monsterStats(def, floor, false);
      return `<div class="bestiary-row">
        <span style="color:${def.color}">● ${def.name}${def.category === 'boss' ? '（Boss）' : ''}</span>
        <span class="dim">❤️${stats.hp} ⚔️${stats.attack} 🛡️${stats.defense}</span>
        <span class="dim">击杀×${kills}</span>
      </div>`;
    }).join('');
    this.body.innerHTML = rows;
  }
}

// ============ 成就（解锁物品获取权） ============

class AchievementPanelImpl extends OverlayPanel {
  constructor(layer: HTMLElement) {
    super(layer, 'achievements', '🏆 成就');
    eventBus.on('achievementUnlocked', () => { if (this.isOpen) this.render(); });
  }

  protected onOpen(): void { this.render(); }

  private render(): void {
    const rows = AchievementSystem.getInstance().list().map(a => `
      <div class="quest-row ${a.done ? 'done' : ''} achievement-row">
        <div class="quest-name">${a.done ? '🏆' : '🔒'} ${a.name}</div>
        <div class="dim">${a.desc}</div>
        <div class="${a.done ? 'ok' : 'dim'}">🎁 ${a.unlock}${a.done ? '（已生效）' : ''}</div>
      </div>
    `).join('');
    const doneCount = AchievementSystem.getInstance().list().filter(a => a.done).length;
    this.body.innerHTML = `
      <div class="dim" style="margin-bottom:8px">达成进度：${doneCount} / ${AchievementSystem.getInstance().list().length}。
      达成成即可解锁商人/女巫的高阶物品获取权。</div>
      ${rows}
    `;
  }
}

// ============ 设置 ============

class SettingsPanelImpl extends OverlayPanel {
  constructor(layer: HTMLElement) {
    super(layer, 'settings', '⚙️ 设置');
  }

  protected onOpen(): void {
    this.body.innerHTML = `
      <div class="settings-rows">
        <label class="setting-row">
          <span>自动存档（到达新楼层时）</span>
          <input type="checkbox" id="opt-autosave" ${gameState.settings.autoSave ? 'checked' : ''} />
        </label>
        <label class="setting-row">
          <span>帧率限制（省电/降温）</span>
          <select id="opt-fpscap" class="fps-select">
            <option value="0" ${gameState.settings.fpsCap === 0 ? 'selected' : ''}>不限制</option>
            <option value="60" ${gameState.settings.fpsCap === 60 ? 'selected' : ''}>60 FPS</option>
            <option value="45" ${gameState.settings.fpsCap === 45 ? 'selected' : ''}>45 FPS</option>
            <option value="30" ${gameState.settings.fpsCap === 30 ? 'selected' : ''}>30 FPS</option>
          </select>
        </label>
        <div class="setting-row dim">手动存档：任意时刻按 S 键或点击 💾 按钮</div>
      </div>
      <h3 class="sub-title">显示</h3>
      <div class="settings-rows">
        <label class="setting-row">
          <span>显示模式</span>
          <select id="opt-display" class="fps-select">
            <option value="windowed">窗口化</option>
            <option value="fullscreen">全屏</option>
            <option value="borderless">无边框窗口</option>
          </select>
        </label>
        <label class="setting-row">
          <span>分辨率（窗口尺寸）</span>
          <select id="opt-resolution" class="fps-select">
            <option value="1280x720">1280 × 720</option>
            <option value="1600x900">1600 × 900</option>
            <option value="1920x1080">1920 × 1080</option>
            <option value="2560x1440">2560 × 1440</option>
          </select>
        </label>
        <div class="setting-row dim" id="display-hint">全屏可随时用 F11 或改回窗口化退出；无边框窗口切换会自动存档并重载游戏。</div>
      </div>
      <div class="eq-actions">
        <button id="opt-save" class="btn-primary">💾 手动存档</button>
        <button id="opt-load">📂 读取存档</button>
        <button id="opt-title" class="btn-danger">🏠 回到首页</button>
        <button id="opt-clear" class="btn-danger">🗑️ 清除存档</button>
        <button id="opt-restart" class="btn-danger">🔄 重新开始</button>
      </div>
      <h3 class="sub-title">操作说明</h3>
      <div class="dim help-text">
        方向键/WASD移动 · 点击地板走一步 · 点击怪物/宝箱自动走近交互 · 悬浮查看信息<br/>
        B背包 C角色 J任务 G图鉴 Esc设置 K存档（或Ctrl+S）· 数字键1-5使用快捷栏（背包拖入药水绑定，右键解绑）<br/>
        撞向怪物即战斗 · 走上楼梯进入下一层
      </div>
    `;
    const autosave = this.body.querySelector('#opt-autosave') as HTMLInputElement;
    autosave.addEventListener('change', () => {
      gameState.setSetting('autoSave', autosave.checked);
    });
    const fpsCap = this.body.querySelector('#opt-fpscap') as HTMLSelectElement;
    fpsCap.addEventListener('change', () => {
      gameState.setSetting('fpsCap', parseInt(fpsCap.value, 10));
    });
    // 显示设置：桌面端走 Electron 主进程；浏览器端仅支持 HTML5 全屏
    this.initDisplaySettings();
    this.body.querySelector('#opt-save')!.addEventListener('click', () => SaveManager.getInstance().save('manual'));
    this.body.querySelector('#opt-load')!.addEventListener('click', () => {
      if (SaveManager.getInstance().load()) this.close();
    });
    this.body.querySelector('#opt-clear')!.addEventListener('click', () => {
      if (window.confirm('确定清除存档？不可恢复。')) SaveManager.getInstance().clear();
    });
    this.body.querySelector('#opt-title')!.addEventListener('click', () => {
      if (window.confirm('回到首页？当前进度将自动存档。')) {
        this.close();
        eventBus.emit('returnToTitle', {});
      }
    });
    this.body.querySelector('#opt-restart')!.addEventListener('click', () => {
      if (window.confirm('确定重新开始？当前进度将丢失（请先存档）。')) {
        GameController.getInstance().restart();
        this.close();
      }
    });
  }

  /** 显示设置：读写 localStorage（motarpg_display），桌面端经 Electron 应用；无边框切换需重建窗口（先存档） */
  private initDisplaySettings(): void {
    const displaySel = this.body.querySelector('#opt-display') as HTMLSelectElement;
    const resSel = this.body.querySelector('#opt-resolution') as HTMLSelectElement;
    const hint = this.body.querySelector('#display-hint') as HTMLElement;
    const desktop = window.motaDesktop;

    let saved: { mode: string; resolution: string } = { mode: 'windowed', resolution: '1600x900' };
    try {
      saved = { ...saved, ...JSON.parse(localStorage.getItem('motarpg_display') || '{}') };
    } catch { /* 忽略损坏的显示配置 */ }
    displaySel.value = saved.mode;
    resSel.value = saved.resolution;
    if (!desktop) {
      hint.textContent = '浏览器环境：仅支持全屏/退出全屏（无边框窗口与分辨率为桌面版功能）。';
    }

    const apply = (): void => {
      const mode = displaySel.value as 'windowed' | 'fullscreen' | 'borderless';
      const resolution = resSel.value;
      localStorage.setItem('motarpg_display', JSON.stringify({ mode, resolution }));
      if (desktop) {
        // 无边框需重建窗口：先存档再切（窗口重载后从标题屏「继续冒险」接回）
        if (mode === 'borderless' && saved.mode !== 'borderless') {
          SaveManager.getInstance().save('manual');
        }
        desktop.setDisplayMode({ mode, resolution });
      } else if (mode === 'fullscreen') {
        document.documentElement.requestFullscreen?.().catch(() => { /* 用户拒绝或不可用 */ });
      } else if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => { /* 忽略 */ });
      }
      saved = { mode, resolution };
    };
    displaySel.addEventListener('change', apply);
    resSel.addEventListener('change', apply);
  }
}

// ============ 战斗结果 ============

class BattleLogPanelImpl extends OverlayPanel {
  constructor(layer: HTMLElement) {
    super(layer, 'battleLog', '⚔️ 战斗');
    eventBus.on('battleEnded', p => {
      this.show(p.result.win ? '🏆 战斗胜利' : '💀 战斗失败', p.result.log.map(l => `<div class="log-line ${l.kind}">${l.text}</div>`).join(''));
    });
  }

  show(title: string, contentHtml: string): void {
    (this.el.querySelector('.op-head span') as HTMLElement).textContent = title;
    this.body.innerHTML = `${contentHtml}<div class="eq-actions"><button class="btn-primary op-close2">继续</button></div>`;
    this.open();
    this.body.querySelector('.op-close2')!.addEventListener('click', () => this.close());
  }
}
