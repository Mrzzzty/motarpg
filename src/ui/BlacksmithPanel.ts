/**
 * 铁匠铺面板：重铸词条 / 锤炼升级 / 淬火提品质（史诗以下）。
 * 交互模式与 ShopPanel 一致（对话面板点「锻造」触发，Esc 关闭）。
 * 服务直接修改背包中的装备对象（保留 id，已穿戴的装备服务后依然生效）。
 */
import type { Equipment, Quality } from '../types';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import { EquipmentGenerator } from '../systems/EquipmentGenerator';

const QUALITY_RANK: Record<Quality, number> = {
  poor: 0, common: 1, fine: 2, rare: 3, epic: 4, legendary: 5, mythic: 6,
};

export class BlacksmithPanel {
  private el: HTMLElement;
  private npcId = '';
  private selectedId: string | null = null;

  constructor(layer: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'overlay-panel hidden';
    layer.appendChild(this.el);
    eventBus.on('blacksmithOpened', p => this.show(p.npcId));
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this.el.classList.contains('hidden')) this.close();
    });
  }

  private show(npcId: string): void {
    this.npcId = npcId;
    gameState.pushModal();
    this.el.classList.remove('hidden');
    this.render();
  }

  private render(): void {
    const player = Player.getInstance();
    const gen = EquipmentGenerator.getInstance();
    const bag = player.state.bag;
    const sel = bag.find(e => e.id === this.selectedId) ?? null;

    const rows = bag.length === 0
      ? '<div class="dim inv-empty">背包里没有装备</div>'
      : [...bag]
          .sort((a, b) => Number(!!b.isFavorite) - Number(!!a.isFavorite))
          .map(e => {
            const q = dataManager.equipment.quality[e.quality];
            const equipped = e.id === player.state.weaponId || e.id === player.state.armorId
              || e.id === player.state.accessoryId;
            return `<div class="bag-cell ${e.id === this.selectedId ? 'active' : ''}" data-id="${e.id}"
                         style="border-color:${q.color};background:rgba(30,34,42,0.9)">
              <div class="cell-icon" style="border-color:${q.color}">${e.slot === 'weapon' ? '🗡️' : e.slot === 'armor' ? '🛡️' : '💍'}</div>
              <div class="cell-name" style="color:${q.color}">${e.name}</div>
              <div class="cell-sub dim">Lv.${e.level}${equipped ? ' 已穿戴' : ''}</div>
            </div>`;
          }).join('');

    let detail = '<div class="dim">选择一件装备进行锻造</div>';
    if (sel) {
      const q = dataManager.equipment.quality[sel.quality];
      const canQuality = QUALITY_RANK[sel.quality] < QUALITY_RANK.epic;
      const costReforge = 20 + sel.level * 10;
      const costLevel = 40 + sel.level * 30;
      const costQuality = canQuality ? dataManager.equipment.quality[qualityUp(sel.quality)].basePrice * 3 + sel.level * 15 : 0;
      detail = `
        <div class="eq-detail">
          <div class="eq-title" style="color:${q.color}">${sel.slot === 'weapon' ? '🗡️' : sel.slot === 'armor' ? '🛡️' : '💍'} ${sel.name}</div>
          <div class="dim">品质：${q.name} · Lv.${sel.level}${sel.id === player.state.weaponId || sel.id === player.state.armorId || sel.id === player.state.accessoryId ? ' · 已穿戴' : ''}</div>
          <div class="eq-stats">
            ${sel.slot === 'accessory'
              ? `<div>${sel.accessoryStat === 'crit' ? '🎯 暴击率' : '🌀 闪避率'} <b>${sel.accessoryValue ?? 0}%</b></div>`
              : `<div>⚔️ 攻击力 <b>${sel.attack}</b></div>
                 <div>🛡️ 防御力 <b>${sel.defense}</b></div>`}
          </div>
          ${sel.affixes.length > 0 ? `<div class="affix-list">${sel.affixes.map(a => `<div class="affix-row">✦ ${a.name} ${a.value}${a.isPercent ? '%' : ''}</div>`).join('')}</div>` : ''}
          <div class="eq-actions bs-actions">
            <button data-forge="reforge" ${player.state.gold < costReforge ? 'disabled' : ''}>🔨 重铸词条<br/><span class="dim">${costReforge} 💰</span></button>
            <button data-forge="level" ${sel.level >= 50 || player.state.gold < costLevel ? 'disabled' : ''}>⚡ 锤炼升级<br/><span class="dim">${sel.level >= 50 ? '已满级' : costLevel + ' 💰'}</span></button>
            <button data-forge="quality" ${!canQuality || player.state.gold < costQuality ? 'disabled' : ''}>🔥 淬火提品质<br/><span class="dim">${canQuality ? `${qualityUp(sel.quality) === 'epic' ? '→ 史诗 ' : '→ ' + dataManager.equipment.quality[qualityUp(sel.quality)].name + ' '}${costQuality} 💰` : '史诗以上不可淬火'}</span></button>
          </div>
          <div class="dim bs-hint">锻造会覆盖原词条/数值，失败不扣费（必定成功）。</div>
        </div>
      `;
    }

    this.el.innerHTML = `
      <div class="op-box op-box-inv">
        <div class="op-head"><span>⚒️ 铁匠铺·霍恩的锻炉</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="shop-header">
            <div class="shop-gold">持有金币：💰 ${player.state.gold}</div>
            <div class="dim">选择装备 → 选择锻造服务</div>
          </div>
          <div class="inv-main">
            <div class="inv-middle" style="height:100%"><div class="inv-list">${rows}</div></div>
            <div></div>
            <div class="inv-detail">${detail}</div>
          </div>
        </div>
      </div>
    `;
    this.el.querySelector('.op-close')!.addEventListener('click', () => this.close());
    this.el.querySelectorAll('.bag-cell').forEach(item => {
      item.addEventListener('click', () => {
        this.selectedId = (item as HTMLElement).dataset.id!;
        this.render();
      });
    });
    this.el.querySelectorAll('[data-forge]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!sel) return;
        this.forge(sel, (btn as HTMLElement).dataset.forge!);
      });
    });
  }

  /** 执行锻造服务：扣费 → 生成新属性覆盖原对象 → 通知 + 刷新 */
  private forge(e: Equipment, service: string): void {
    const player = Player.getInstance();
    const gen = EquipmentGenerator.getInstance();
    let cost = 0;
    let next: Equipment | null = null;
    let label = '';
    if (service === 'reforge') {
      cost = 20 + e.level * 10;
      next = gen.reforge(e);
      label = '词条已重铸';
    } else if (service === 'level') {
      cost = 40 + e.level * 30;
      next = gen.upgradeLevel(e);
      label = `锤炼至 Lv.${e.level + 1}`;
    } else if (service === 'quality') {
      const order = dataManager.equipment.qualityOrder as Quality[];
      const nq = order[order.indexOf(e.quality) + 1];
      cost = dataManager.equipment.quality[nq].basePrice * 3 + e.level * 15;
      next = gen.upgradeQuality(e);
      label = `淬火至「${dataManager.equipment.quality[nq].name}」`;
    }
    if (!next) {
      eventBus.emit('notification', { message: '这件装备已到服务上限', type: 'warning', icon: '⚒️' });
      return;
    }
    if (!player.spendGold(cost)) {
      eventBus.emit('notification', { message: '金币不足', type: 'warning', icon: '💰' });
      return;
    }
    // 原地覆盖：保留 id 与背包/穿戴引用
    Object.assign(e, next);
    eventBus.emit('equipmentEquipped', {
      slot: e.slot,
      equipmentId: e.id,
      oldId: e.id,
    });
    eventBus.emit('notification', { message: `⚒️ ${label}！`, type: 'success', icon: '⚒️' });
    this.render();
  }

  private close(): void {
    this.el.classList.add('hidden');
    gameState.popModal();
  }
}

/** 品质升一档 */
function qualityUp(q: Quality): Quality {
  const order = dataManager.equipment.qualityOrder as Quality[];
  return order[Math.min(order.length - 1, order.indexOf(q) + 1)];
}
