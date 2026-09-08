/**
 * 背包面板（B键）：消耗品使用 + 装备穿戴/出售。
 */
import { OverlayPanel } from './OverlayPanel';
import { dataManager } from '../core/DataManager';
import { InventoryManager } from '../systems/InventoryManager';
import { Player } from '../entities/Player';
import { eventBus } from '../core/EventBus';
import type { Equipment } from '../types';

export class InventoryPanel extends OverlayPanel {
  constructor(parent: HTMLElement) {
    super(parent, '🎒 背包');
  }

  render(): void {
    this.clearBody();
    const inv = InventoryManager.getInstance();
    const player = Player.getInstance();

    // 消耗品
    const consumables = inv.items.filter(i => {
      const def = dataManager.getItem(i.itemId);
      return def && def.type !== 'special';
    });
    const equipList = inv.getBackpackEquipments();

    const itemGrid = document.createElement('div');
    itemGrid.className = 'inv-grid';
    if (consumables.length === 0) {
      itemGrid.innerHTML = '<div style="color:var(--text-dim);font-size:12.5px">没有可用物品</div>';
    }
    for (const item of consumables) {
      const def = dataManager.getItem(item.itemId)!;
      const card = document.createElement('div');
      card.className = 'inv-item';
      card.innerHTML = `
        <div class="item-title"><span>${def.icon} ${def.name}</span><span>×${item.quantity}</span></div>
        <div class="item-sub">${def.description}</div>
        <div class="item-actions"></div>`;
      if (def.effect) {
        const useBtn = document.createElement('button');
        useBtn.className = 'btn small primary';
        useBtn.textContent = '使用';
        useBtn.addEventListener('click', () => {
          inv.useItem(item.itemId);
          this.render();
        });
        card.querySelector('.item-actions')?.appendChild(useBtn);
      }
      itemGrid.appendChild(card);
    }

    // 装备
    const equipGrid = document.createElement('div');
    equipGrid.className = 'inv-grid';
    if (equipList.length === 0) {
      equipGrid.innerHTML = '<div style="color:var(--text-dim);font-size:12.5px">背包中没有装备</div>';
    }
    for (const eq of equipList) {
      equipGrid.appendChild(this.equipCard(eq, player));
    }

    const title1 = document.createElement('div');
    title1.className = 'panel-section-title';
    title1.textContent = `消耗品与材料（${consumables.length}）`;
    const title2 = document.createElement('div');
    title2.className = 'panel-section-title';
    title2.style.marginTop = '10px';
    title2.textContent = `装备（${equipList.length}）——点击穿戴`;

    this.body.append(title1, itemGrid, title2, equipGrid);
  }

  equipCard(eq: Equipment, player: Player): HTMLElement {
    const qName = dataManager.config.quality[eq.quality].name;
    const qColor = `q-${eq.quality}`;
    const card = document.createElement('div');
    card.className = 'inv-item';
    const statParts: string[] = [];
    if (eq.finalAttack > 0) statParts.push(`攻+${eq.finalAttack}`);
    if (eq.finalDefense > 0) statParts.push(`防+${eq.finalDefense}`);
    if (eq.finalHpBonus > 0) statParts.push(`血+${eq.finalHpBonus}`);
    const affixParts = eq.affixes.map(a => `${a.name}${a.value}`).join('，');
    const tpl = dataManager.getTemplate(eq.baseItemId);
    card.innerHTML = `
      <div class="item-title"><span>${tpl?.icon ?? '🗡️'} <span class="${qColor}">${eq.name}</span></span><span class="item-sub">Lv.${eq.level}</span></div>
      <div class="item-sub">${statParts.join(' · ')} · ${qName}${affixParts ? `<br>${affixParts}` : ''}</div>
      <div class="item-actions"></div>`;
    const actions = card.querySelector('.item-actions')!;
    const equipBtn = document.createElement('button');
    equipBtn.className = 'btn small primary';
    equipBtn.textContent = '穿戴';
    equipBtn.addEventListener('click', () => {
      inv().equip(eq.id);
      eventBus.emit('notification', { message: `装备了 ${eq.name}`, type: 'success' });
      this.render();
    });
    const sellBtn = document.createElement('button');
    sellBtn.className = 'btn small';
    sellBtn.textContent = `出售 ${eq.sellPrice}G`;
    sellBtn.addEventListener('click', () => {
      inv().sellEquipment(eq.id);
      this.render();
    });
    actions.append(equipBtn, sellBtn);
    void player;
    return card;
  }
}

function inv() {
  return InventoryManager.getInstance();
}
