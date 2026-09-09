/**
 * 藏品面板（H键）：已持有藏品展示 + 按类型筛选 + 系列进度。
 */
import { OverlayPanel } from './OverlayPanel';
import { CollectibleSystem } from '../systems/CollectibleSystem';
import { dataManager } from '../core/DataManager';
import type { CollectibleType } from '../types';

const TYPE_LABELS: Record<CollectibleType, string> = {
  attribute: '属性', combat: '战斗', resource: '资源', special: '特殊',
};

export class CollectiblePanel extends OverlayPanel {
  private filter: 'all' | CollectibleType = 'all';

  constructor(parent: HTMLElement) {
    super(parent, '💎 藏品');
  }

  render(): void {
    this.clearBody();
    const system = CollectibleSystem.getInstance();
    const owned = system.getOwnedCollectibles();

    const tabs = document.createElement('div');
    tabs.className = 'panel-tabs';
    const options: ('all' | CollectibleType)[] = ['all', 'attribute', 'combat', 'resource', 'special'];
    for (const key of options) {
      const btn = document.createElement('button');
      btn.className = `panel-tab ${this.filter === key ? 'active' : ''}`;
      btn.textContent = key === 'all' ? `全部（${owned.length}）` : `${TYPE_LABELS[key]}（${owned.filter(c => c.type === key).length}）`;
      btn.addEventListener('click', () => {
        this.filter = key;
        this.render();
      });
      tabs.appendChild(btn);
    }
    this.body.appendChild(tabs);

    const grid = document.createElement('div');
    grid.className = 'entry-grid';
    const filtered = this.filter === 'all' ? owned : owned.filter(c => c.type === this.filter);
    if (filtered.length === 0) {
      grid.innerHTML = '<div style="color:var(--text-dim)">暂无该类藏品——击败Boss与开启高级宝箱是主要来源</div>';
    }
    for (const def of filtered) {
      const card = document.createElement('div');
      card.className = 'entry-card';
      card.innerHTML = `
        <div class="entry-head">
          <span class="q-${def.rarity}">${def.icon} ${def.name}</span>
          <span class="q-${def.rarity}" style="font-size:11px">${dataManager.config.quality[def.rarity].name}</span>
        </div>
        <div class="entry-desc">${def.effect.description}</div>
        <div class="entry-desc" style="font-style:italic;opacity:0.75">${def.lore}</div>`;
      grid.appendChild(card);
    }
    this.body.appendChild(grid);

    // 系列进度
    const seriesTitle = document.createElement('div');
    seriesTitle.className = 'panel-section-title';
    seriesTitle.style.marginTop = '12px';
    seriesTitle.textContent = '系列进度';
    this.body.appendChild(seriesTitle);
    for (const series of dataManager.series) {
      const progress = system.getSeriesProgress(series.id);
      if (!progress) continue;
      const done = progress.owned >= progress.total;
      const el = document.createElement('div');
      el.className = 'quest-track-item';
      el.innerHTML = `
        <div class="quest-objective ${done ? 'done' : ''}">
          <span>${series.name} ${done ? '✅' : ''}</span>
          <span>${progress.owned}/${progress.total}</span>
        </div>
        <div class="entry-desc">${series.description}</div>`;
      this.body.appendChild(el);
    }
  }
}
