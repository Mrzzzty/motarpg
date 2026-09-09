/**
 * 右栏：任务追踪 + 房间信息（楼层/深度/剩余敌人）+ 无尽进度。
 */
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { QuestManager } from '../systems/QuestManager';
import { EndlessSystem } from '../systems/EndlessSystem';
import { dataManager } from '../core/DataManager';

export class RightPanel {
  private static instance: RightPanel;
  private root: HTMLElement;

  private constructor(container: HTMLElement) {
    this.root = document.createElement('aside');
    this.root.id = 'right-panel';
    container.appendChild(this.root);
    this.render();
    eventBus.on('questUpdated', () => this.render());
    eventBus.on('questCompleted', () => this.render());
    eventBus.on('questAccepted', () => this.render());
    eventBus.on('roomEntered', () => this.render());
    eventBus.on('floorChanged', () => this.render());
    eventBus.on('monsterDefeated', () => this.render());
    eventBus.on('bossDefeated', () => this.render());
    eventBus.on('endlessEntered', () => this.render());
    eventBus.on('endlessExited', () => this.render());
  }

  static init(container: HTMLElement): RightPanel {
    if (!RightPanel.instance) {
      RightPanel.instance = new RightPanel(container);
    }
    return RightPanel.instance;
  }

  render(): void {
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    const floor = world.currentFloor;
    const questManager = QuestManager.getInstance();
    const tracked = questManager.getTrackedQuests();

    const questHtml = tracked.length === 0
      ? '<div style="color:#555c70;font-size:12px">暂无追踪中的任务</div>'
      : tracked.map(quest => {
        const objectives = quest.objectives.map(o => {
          const done = o.currentProgress >= o.quantity;
          return `<div class="quest-objective ${done ? 'done' : ''}">
            <span>${this.objectiveLabel(o)}</span>
            <span>${o.currentProgress}/${o.quantity}</span>
          </div>`;
        }).join('');
        return `<div class="quest-track-item">
          <div class="quest-name">${quest.name}</div>
          ${objectives}
        </div>`;
      }).join('');

    let roomHtml = '<div style="color:#555c70;font-size:12px">…</div>';
    if (room && floor) {
      const enemies = world.getLiveEntities(room).filter(e => e.type === 'monster' || e.type === 'boss').length;
      const isBossFloor = floor.isBossFloor;
      const kindLabel: Record<string, string> = {
        start: '入口', normal: '普通', stair: '楼梯间', rest: '休整营地', boss: 'Boss巢穴', reward: '宝藏室',
        gate_battle: '战斗之门', gate_treasure: '宝藏之门', gate_advance: '前进之门', entry: '回廊入口',
      };
      roomHtml = `
        <div class="room-info">
          <div class="floor-name">${gameState.mode === 'endless' ? '🌀 ' : ''}${floor.floorName} <span style="font-size:12px;color:var(--text-dim)">第${floor.floorId}层${isBossFloor ? ' · Boss层' : ''}</span></div>
          <div>
            <span class="depth-tag">深度 ${room.depth}</span>
            <span class="depth-tag">${kindLabel[room.roomKind] ?? room.roomKind}</span>
          </div>
          <div>剩余敌人 <span class="enemy-count">${enemies}</span></div>
          <div style="color:var(--text-dim);font-size:11.5px;margin-top:2px">${dataManager.world.worldName} · ${gameState.mode === 'endless' ? `无尽最高 ${EndlessSystem.getInstance().bestFloor} 层` : `最高 ${gameState.maxFloorReached} 层`}</div>
        </div>
      `;
    }

    this.root.innerHTML = `
      <div>
        <div class="panel-section-title">当前楼层</div>
        ${roomHtml}
      </div>
      <div>
        <div class="panel-section-title">任务追踪</div>
        ${questHtml}
      </div>
      <div style="margin-top:auto;font-size:11px;color:#555c70;line-height:1.8">
        <div>方向键/WASD 移动 · 撞击敌人战斗</div>
        <div>站上楼梯按 ↑/↓ 换层 · 空格交互</div>
        <div>B背包 C角色 J任务 G图鉴 H藏品 M菜单 S存档</div>
      </div>
    `;
  }

  private objectiveLabel(o: { type: string; targetId: string; quantity: number }): string {
    switch (o.type) {
      case 'defeat_monster': return o.targetId === 'any' ? `击败任意怪物 ×${o.quantity}` : `击败 ${dataManager.getMonster(o.targetId)?.name ?? o.targetId}`;
      case 'defeat_boss': return o.targetId === 'any' ? `击败任意Boss` : `击败Boss`;
      case 'collect_item': return `收集物品 ×${o.quantity}`;
      case 'reach_floor': return /^\d+$/.test(o.targetId) ? `到达第${o.targetId}层` : `探索更多楼层`;
      case 'explore_room': return `到达目标房间`;
      case 'talk_npc': return `与NPC对话`;
      case 'level_up': return `提升等级`;
      case 'collect_collectible': return o.targetId === 'any' ? `收集藏品 ×${o.quantity}` : `收集指定藏品`;
      case 'open_chest': return `打开宝箱 ×${o.quantity}`;
      case 'equip_item': return `穿戴装备`;
      default: return o.type;
    }
  }
}
