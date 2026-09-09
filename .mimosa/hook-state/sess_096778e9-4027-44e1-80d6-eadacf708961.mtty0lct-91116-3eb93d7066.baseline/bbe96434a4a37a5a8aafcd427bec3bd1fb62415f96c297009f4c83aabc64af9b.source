/**
 * 商店面板：双栏（商人库存 vs 你的背包），支持金币/魂晶交易。
 */
import { OverlayPanel } from './OverlayPanel';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import { MerchantSystem } from '../systems/MerchantSystem';
import { InventoryManager } from '../systems/InventoryManager';

export class ShopPanel extends OverlayPanel {
  private merchantEntityId = '';

  constructor(parent: HTMLElement) {
    super(parent, '🏪 商店');
  }

  openFor(merchantEntityId: string): void {
    this.merchantEntityId = merchantEntityId;
    this.show();
  }

  render(): void {
    this.clearBody();
    const player = Player.getInstance();
    const merchant = MerchantSystem.getInstance();
    const inv = InventoryManager.getInstance();
    const items = merchant.getInventory(this.merchantEntityId);

    this.root.querySelector('.panel-title')!.textContent = `🏪 商店　🪙${player.gold}　💎${player.soul}`;

    const columns = document.createElement('div');
    columns.className = 'shop-columns';

    // 左：商人库存
    const left = document.createElement('div');
    left.innerHTML = '<div class="shop-column-title">出售中（点击购买）</div>';
    if (items.length === 0) {
      left.insertAdjacentHTML('beforeend', '<div style="color:var(--text-dim);font-size:12px">库存为空</div>');
    }
    for (const item of items) {
      const card = document.createElement('div');
      card.className = `inv-item ${item.sold ? 'locked' : ''}`;
      const currencyIcon = item.currency === 'gold' ? '🪙' : '💎';
      const desc = item.kind === 'equipment' || item.kind === 'soul_equipment'
        ? `${item.description} · ${item.name}`
        : item.description;
      card.innerHTML = `
        <div class="item-title">
          <span>${item.icon} ${item.name}</span>
          <span style="color:var(--text-gold)">${currencyIcon} ${item.price}</span>
        </div>
        <div class="item-sub">${desc}</div>`;
      if (!item.sold) {
        card.addEventListener('click', () => {
          if (merchant.buy(this.merchantEntityId, item.id)) {
            this.render();
          }
        });
      } else {
        card.insertAdjacentHTML('beforeend', '<div class="item-sub" style="color:var(--text-dim)">已售出</div>');
      }
      left.appendChild(card);
    }

    // 右：背包装备出售
    const right = document.createElement('div');
    right.innerHTML = '<div class="shop-column-title">你的装备（点击出售）</div>';
    const backpack = inv.getBackpackEquipments();
    if (backpack.length === 0) {
      right.insertAdjacentHTML('beforeend', '<div style="color:var(--text-dim);font-size:12px">背包中没有装备</div>');
    }
    for (const eq of backpack) {
      const card = document.createElement('div');
      card.className = 'inv-item';
      const qName = dataManager.config.quality[eq.quality].name;
      card.innerHTML = `
        <div class="item-title">
          <span class="q-${eq.quality}">${eq.name}</span>
          <span style="color:var(--text-gold)">🪙 ${eq.sellPrice}</span>
        </div>
        <div class="item-sub">Lv.${eq.level} · ${qName}</div>`;
      card.addEventListener('click', () => {
        if (merchant.sell(eq.id)) {
          this.render();
        }
      });
      right.appendChild(card);
    }

    columns.append(left, right);
    this.body.appendChild(columns);
  }
}
