/**
 * 图鉴面板（G键）：怪物图鉴 + 收集品图鉴标签页。
 */
import { OverlayPanel } from './OverlayPanel';
import { BestiaryManager } from '../systems/BestiaryManager';
import { CollectibleSystem } from '../systems/CollectibleSystem';
import { dataManager } from '../core/DataManager';

export class BestiaryPanel extends OverlayPanel {
  private tab: 'monsters' | 'collectibles' = 'monsters';

  constructor(parent: HTMLElement) {
    super(parent, '📖 图鉴');
  }

  render(): void {
    this.clearBody();
    const tabs = document.createElement('div');
    tabs.className = 'panel-tabs';
    const bestiaryProgress = BestiaryManager.getInstance().getBestiaryProgress();
    const colProgress = CollectibleSystem.getInstance();

    for (const key of ['monsters', 'collectibles'] as const) {
      const btn = document.createElement('button');
      btn.className = `panel-tab ${this.tab === key ? 'active' : ''}`;
      btn.textContent = key === 'monsters'
        ? `怪物（${bestiaryProgress.unlocked}/${bestiaryProgress.total}）`
        : `收集品（${colProgress.getCollectibleCount()}/${colProgress.getAllCollectibles().length}）`;
      btn.addEventListener('click', () => {
        this.tab = key;
        this.render();
      });
      tabs.appendChild(btn);
    }
    this.body.appendChild(tabs);

    if (this.tab === 'monsters') {
      this.renderMonsters();
    } else {
      this.renderCollectibles();
    }
  }

  private renderMonsters(): void {
    const grid = document.createElement('div');
    grid.className = 'entry-grid';
    for (const { monster, count, unlocked } of BestiaryManager.getInstance().listEntries()) {
      const card = document.createElement('div');
      card.className = `entry-card ${count === 0 ? 'locked' : ''}`;
      card.innerHTML = `
        <div class="entry-head">
          <span>${count === 0 ? '❓' : monster.icon} ${count === 0 ? '未知怪物' : monster.name}</span>
          <span style="font-size:11px;color:var(--text-dim)">击败 ${count}/${monster.unlockThreshold}</span>
        </div>
        <div class="entry-desc">${unlocked ? monster.description : count > 0 ? '再次击败可解锁详细信息' : '尚未遭遇'}</div>
        ${unlocked ? `<div class="entry-desc" style="color:var(--quality-rare)">弱点：${monster.weakness.length ? monster.weakness.join('、') : '无'} · 掉落：${monster.drops.length ? monster.drops.map(d => dataManager.getItem(d)?.name ?? d).join('、') : '无'}</div>` : ''}
      `;
      grid.appendChild(card);
    }
    this.body.appendChild(grid);
  }

  private renderCollectibles(): void {
    const grid = document.createElement('div');
    grid.className = 'entry-grid';
    const system = CollectibleSystem.getInstance();
    for (const def of system.getAllCollectibles()) {
      const found = system.isFound(def.id);
      const card = document.createElement('div');
      card.className = `entry-card ${found ? '' : 'locked'}`;
      card.innerHTML = `
        <div class="entry-head">
          <span class="q-${def.rarity}">${found ? `${def.icon} ${def.name}` : '🔒 未知藏品'}</span>
          <span class="q-${def.rarity}" style="font-size:11px">${dataManager.config.quality[def.rarity].name}</span>
        </div>
        <div class="entry-desc">${found ? def.effect.description : def.acquisitionHint}</div>
      `;
      grid.appendChild(card);
    }
    this.body.appendChild(grid);
  }
}
