/**
 * 底部栏：1-4快捷药水槽 + 功能按钮。
 */
import { eventBus } from '../core/EventBus';
import { InventoryManager } from '../systems/InventoryManager';
import { dataManager } from '../core/DataManager';

export class BottomBar {
  private static instance: BottomBar;
  private root: HTMLElement;
  onPanelRequest: ((panel: string) => void) | null = null;
  onSaveRequest: (() => void) | null = null;

  private constructor(container: HTMLElement) {
    this.root = document.createElement('footer');
    this.root.id = 'bottom-bar';
    container.appendChild(this.root);
    this.render();
    eventBus.on('itemCollected', () => this.render());
    eventBus.on('notification', () => undefined);
  }

  static init(container: HTMLElement): BottomBar {
    if (!BottomBar.instance) {
      BottomBar.instance = new BottomBar(container);
    }
    return BottomBar.instance;
  }

  /** 快捷使用槽位（1-4） */
  quickUse(slot: number): void {
    const items = InventoryManager.getInstance().quickUseItems();
    const item = items[slot];
    if (!item) return;
    InventoryManager.getInstance().useItem(item.itemId);
    this.render();
  }

  render(): void {
    const inv = InventoryManager.getInstance();
    const potions = inv.quickUseItems();
    const potionDef = dataManager.getItem('health_potion');

    const slots = [0, 1, 2, 3].map(i => {
      const item = potions[i];
      return `<div class="quick-slot" data-quick="${i}" title="${item ? `使用 ${potionDef?.name ?? '药水'}` : '空槽'}">
        <span class="slot-key">${i + 1}</span>
        <span class="slot-icon">${item ? (dataManager.getItem(item.itemId)?.icon ?? '🧪') : ''}</span>
        ${item ? `<span class="slot-count">${item.quantity}</span>` : ''}
      </div>`;
    }).join('');

    this.root.innerHTML = `
      ${slots}
      <div class="bottom-buttons">
        <button class="btn" data-panel="inventory">背包 B</button>
        <button class="btn" data-panel="character">角色 C</button>
        <button class="btn" data-panel="quest">任务 J</button>
        <button class="btn" data-panel="bestiary">图鉴 G</button>
        <button class="btn" data-panel="collectible">藏品 H</button>
        <button class="btn primary" data-panel="menu">菜单 M</button>
      </div>
    `;

    this.root.querySelectorAll<HTMLDivElement>('[data-quick]').forEach(el => {
      el.addEventListener('click', () => this.quickUse(Number(el.dataset.quick)));
    });
    this.root.querySelectorAll<HTMLButtonElement>('[data-panel]').forEach(el => {
      el.addEventListener('click', () => this.onPanelRequest?.(el.dataset.panel ?? ''));
    });
  }
}
