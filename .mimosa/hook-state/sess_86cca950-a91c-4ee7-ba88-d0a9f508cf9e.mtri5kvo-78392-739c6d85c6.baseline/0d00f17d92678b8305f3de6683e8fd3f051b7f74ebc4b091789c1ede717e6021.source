/**
 * 任务面板（J键）：进行中/已完成标签页 + 追踪开关。
 */
import { OverlayPanel } from './OverlayPanel';
import { QuestManager } from '../systems/QuestManager';
import { dataManager } from '../core/DataManager';

export class QuestPanel extends OverlayPanel {
  private tab: 'active' | 'completed' = 'active';

  constructor(parent: HTMLElement) {
    super(parent, '📜 任务');
  }

  render(): void {
    this.clearBody();
    const manager = QuestManager.getInstance();

    const tabs = document.createElement('div');
    tabs.className = 'panel-tabs';
    for (const key of ['active', 'completed'] as const) {
      const btn = document.createElement('button');
      btn.className = `panel-tab ${this.tab === key ? 'active' : ''}`;
      btn.textContent = key === 'active' ? `进行中（${manager.activeQuests.length}）` : `已完成（${manager.completedQuests.length}）`;
      btn.addEventListener('click', () => {
        this.tab = key;
        this.render();
      });
      tabs.appendChild(btn);
    }
    this.body.appendChild(tabs);

    const list = this.tab === 'active' ? manager.activeQuests : manager.completedQuests;
    if (list.length === 0) {
      this.body.insertAdjacentHTML('beforeend', '<div style="color:var(--text-dim)">暂无任务</div>');
      return;
    }

    for (const quest of list) {
      const card = document.createElement('div');
      card.className = 'quest-track-item';
      const objectives = quest.objectives.map(o => {
        const done = o.currentProgress >= o.quantity;
        return `<div class="quest-objective ${done ? 'done' : ''}">
          <span>${this.objectiveLabel(o.type, o.targetId)}</span>
          <span>${o.currentProgress}/${o.quantity}</span>
        </div>`;
      }).join('');
      const rewards = quest.rewards.map(r => {
        switch (r.type) {
          case 'exp': return `经验+${r.value}`;
          case 'gold': return `金币+${r.value}`;
          case 'soul': return `魂晶+${r.value}`;
          case 'item': return `${dataManager.getItem(String(r.value))?.name ?? r.value}×${r.quantity ?? 1}`;
          case 'collectible': return `藏品:${dataManager.getCollectible(String(r.value))?.name ?? r.value}`;
          default: return r.type;
        }
      }).join('，');
      card.innerHTML = `
        <div class="quest-name">${quest.type === 'main' ? '⭐' : '🔸'} ${quest.name} ${quest.isTracked && this.tab === 'active' ? '<span style="font-size:10px;color:var(--accent)">[追踪中]</span>' : ''}</div>
        <div style="font-size:12px;color:var(--text-dim);margin:3px 0">${quest.description}</div>
        ${objectives}
        <div style="font-size:11.5px;color:var(--text-gold);margin-top:4px">奖励：${rewards}</div>`;
      if (this.tab === 'active') {
        const trackBtn = document.createElement('button');
        trackBtn.className = 'btn small';
        trackBtn.style.marginTop = '6px';
        trackBtn.textContent = quest.isTracked ? '取消追踪' : '追踪';
        trackBtn.addEventListener('click', () => {
          manager.trackQuest(quest.id);
          this.render();
        });
        card.appendChild(trackBtn);
      }
      this.body.appendChild(card);
    }
  }

  private objectiveLabel(type: string, targetId: string): string {
    switch (type) {
      case 'defeat_monster': return targetId === 'any' ? '击败任意怪物' : `击败 ${dataManager.getMonster(targetId)?.name ?? targetId}`;
      case 'defeat_boss': return '击败Boss';
      case 'collect_item': return `收集 ${dataManager.getItem(targetId)?.name ?? targetId}`;
      case 'reach_floor': return /^\d+$/.test(targetId) ? `到达第${targetId}层` : '探索更多楼层';
      case 'explore_room': return '到达目标房间';
      case 'talk_npc': return `与 ${dataManager.getNpc(targetId)?.name ?? 'NPC'} 对话`;
      case 'level_up': return '提升等级';
      case 'collect_collectible': return targetId === 'any' ? '收集任意藏品' : `收集 ${dataManager.getCollectible(targetId)?.name ?? targetId}`;
      case 'open_chest': return '打开宝箱';
      case 'equip_item': return '穿戴装备';
      default: return type;
    }
  }
}
