/**
 * 左栏：角色信息（头像/等级/血量/属性/货币/状态/藏品进度）。
 */
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import { StatCalculator } from '../utils/StatCalculator';
import { StatusEffectManager } from '../systems/StatusEffectManager';
import { CollectibleSystem } from '../systems/CollectibleSystem';
import { dataManager } from '../core/DataManager';

export class LeftPanel {
  private static instance: LeftPanel;
  private root: HTMLElement;

  private constructor(container: HTMLElement) {
    this.root = document.createElement('aside');
    this.root.id = 'left-panel';
    container.appendChild(this.root);
    this.render();
    eventBus.on('playerStatsChanged', () => this.render());
    eventBus.on('hpChanged', () => this.render());
    eventBus.on('goldChanged', () => this.render());
    eventBus.on('soulChanged', () => this.render());
    eventBus.on('expChanged', () => this.render());
    eventBus.on('levelUp', () => this.render());
    eventBus.on('statusApplied', () => this.render());
    eventBus.on('statusRemoved', () => this.render());
    eventBus.on('difficultyChanged', () => this.render());
    eventBus.on('collectibleCollected', () => this.render());
  }

  static init(container: HTMLElement): LeftPanel {
    if (!LeftPanel.instance) {
      LeftPanel.instance = new LeftPanel(container);
    }
    return LeftPanel.instance;
  }

  static getInstance(): LeftPanel {
    return LeftPanel.instance;
  }

  render(): void {
    const player = Player.getInstance();
    const expNeed = StatCalculator.expToNextLevel(player.level);
    const hpPct = Math.max(0, Math.min(100, player.hp / Math.max(1, player.maxHp) * 100));
    const expPct = Math.max(0, Math.min(100, player.exp / Math.max(1, expNeed) * 100));
    const statusManager = StatusEffectManager.getInstance();
    const statusHtml = player.statusEffects.length === 0
      ? '<span style="color:#555c70;font-size:11px">无状态效果</span>'
      : player.statusEffects.map(inst => {
        const info = statusManager.describe(inst);
        if (!info) return '';
        return `<span class="status-chip ${info.def.type}" title="${info.def.description}">${info.def.icon} ${info.label}</span>`;
      }).join('');

    const diff = dataManager.getDifficulty(player.currentDifficulty);
    const colTotal = CollectibleSystem.getInstance().getAllCollectibles().length;

    this.root.innerHTML = `
      <div class="player-header">
        <div class="player-avatar">🧝</div>
        <div style="flex:1">
          <div class="player-name-line">
            <span>勇士</span>
            <span class="level-badge">Lv.${player.level}</span>
          </div>
          <div style="font-size:11px;color:var(--text-dim)">${diff?.icon ?? ''} ${diff?.name ?? ''} · 战力 ${player.combatPower()}</div>
        </div>
      </div>
      <div>
        <div class="bar"><div class="bar-fill hp" style="width:${hpPct}%"></div><div class="bar-text">${player.hp} / ${player.maxHp}</div></div>
        <div class="bar"><div class="bar-fill exp" style="width:${expPct}%"></div><div class="bar-text">EXP ${player.exp} / ${expNeed}</div></div>
      </div>
      <div class="currency-line">
        <span class="gold">🪙 ${player.gold}</span>
        <span class="soul">💎 ${player.soul}</span>
      </div>
      <div>
        <div class="panel-section-title">属性</div>
        <div class="stat-grid">
          <span class="stat-label">攻击力</span><span class="stat-value">${player.attack}</span>
          <span class="stat-label">防御力</span><span class="stat-value">${player.defense}</span>
          <span class="stat-label">暴击率</span><span class="stat-value">${(player.critRate * 100).toFixed(1)}%</span>
          <span class="stat-label">闪避率</span><span class="stat-value">${(player.dodgeRate * 100).toFixed(1)}%</span>
          <span class="stat-label">伤害加成</span><span class="stat-value">${(player.damageBonus * 100).toFixed(0)}%</span>
        </div>
      </div>
      <div>
        <div class="panel-section-title">状态效果</div>
        <div class="status-icons">${statusHtml}</div>
      </div>
      <div>
        <div class="panel-section-title">藏品</div>
        <div class="stat-grid">
          <span class="stat-label">已收集</span>
          <span class="stat-value">${player.collectibles.length} / ${colTotal}</span>
        </div>
      </div>
    `;
  }
}
