/**
 * 悬浮窗（规格 Phase 13）：Canvas实体悬停信息，含战斗预测。
 */
import { dataManager } from '../core/DataManager';
import { WorldManager } from '../core/WorldManager';
import { CameraController } from '../core/CameraController';
import { Player } from '../entities/Player';
import { GameController } from '../core/GameController';
import { BattleSystem } from '../systems/BattleSystem';
import { StatCalculator } from '../utils/StatCalculator';

export class Tooltip {
  private static instance: Tooltip;
  private el: HTMLElement;
  private hideTimer: number | null = null;
  private showTimer: number | null = null;
  private lastHoverKey = '';

  private constructor() {
    this.el = document.createElement('div');
    this.el.id = 'tooltip';
    this.el.classList.add('hidden');
    document.body.appendChild(this.el);
  }

  static getInstance(): Tooltip {
    if (!Tooltip.instance) {
      Tooltip.instance = new Tooltip();
    }
    return Tooltip.instance;
  }

  /** Canvas鼠标悬停入口（由GameUI转发mousemove） */
  onHoverTile(tile: { x: number; y: number } | null, screenX: number, screenY: number): void {
    if (!tile) {
      this.scheduleHide();
      return;
    }
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    if (!room) return;
    const entities = world.entitiesAt(room, tile.x, tile.y);
    if (entities.length === 0) {
      this.scheduleHide();
      return;
    }
    const entity = entities[0];
    const key = `${room.roomId}:${entity.id}:${Player.getInstance().level}:${Player.getInstance().hp}`;
    if (key === this.lastHoverKey && !this.el.classList.contains('hidden')) {
      this.position(screenX, screenY);
      return;
    }
    this.lastHoverKey = key;
    this.scheduleHide();
    if (this.showTimer !== null) window.clearTimeout(this.showTimer);
    this.showTimer = window.setTimeout(() => {
      const html = this.buildContent(entity, room);
      if (!html) return;
      this.el.innerHTML = html;
      this.el.classList.remove('hidden');
      this.position(screenX, screenY);
      // 300ms后离开隐藏
    }, 200);
  }

  private position(x: number, y: number): void {
    const rect = this.el.getBoundingClientRect();
    let left = x + 16;
    let top = y + 16;
    if (left + rect.width > window.innerWidth - 8) left = x - rect.width - 12;
    if (top + rect.height > window.innerHeight - 8) top = y - rect.height - 12;
    this.el.style.left = `${Math.max(4, left)}px`;
    this.el.style.top = `${Math.max(4, top)}px`;
  }

  scheduleHide(): void {
    if (this.showTimer !== null) {
      window.clearTimeout(this.showTimer);
      this.showTimer = null;
    }
    if (this.hideTimer === null) {
      this.hideTimer = window.setTimeout(() => {
        this.el.classList.add('hidden');
        this.lastHoverKey = '';
        this.hideTimer = null;
      }, 300);
    }
  }

  private buildContent(entity: import('../types').RoomEntity, room: import('../types').Room): string | null {
    const player = Player.getInstance();
    const controller = GameController.getInstance();
    switch (entity.type) {
      case 'monster':
      case 'boss': {
        const monster = controller.buildMonsterFrom(entity, room);
        const forecast = BattleSystem.getInstance().forecast(player, monster);
        const stats = StatCalculator.monsterStats(
          monster.def, room.floorId, room.depth, player.currentDifficulty,
          entity.varianceSeed, entity.isElite, 0,
        );
        void stats;
        const hpLine = `生命 ${monster.maxHp} · 攻击 ${monster.attack} · 防御 ${monster.defense}`;
        const forecastLine = forecast.win
          ? `<span class="tt-success">预计胜利 · 受到 ${forecast.damageTaken} 点伤害（${forecast.turns}回合）</span>`
          : `<span class="tt-danger">预计战败！（坚持 ${forecast.turns} 回合）</span>`;
        const elite = entity.isElite ? '（精英 ×1.8）' : '';
        return `<div class="tt-title">${monster.icon} ${monster.name}${elite}</div>
          <div class="tt-dim">${hpLine}</div>
          <div>${forecastLine}</div>
          <div class="tt-dim" style="margin-top:4px">经验 +${monster.expReward} · 金币 +${monster.goldReward}</div>`;
      }
      case 'chest': {
        const locked = entity.isLocked;
        const tierName = entity.chestTier && entity.chestTier !== 'auto'
          ? dataManager.config.chest.find(c => c.tier === entity.chestTier)?.name ?? '宝箱'
          : '未知宝箱';
        return `<div class="tt-title">🧰 ${tierName}</div>
          <div class="tt-dim">${locked ? '🔒 需要钥匙打开' : '走向它以打开'}</div>
          <div class="tt-gold">品质越高的宝箱奖励越丰厚</div>`;
      }
      case 'stair': {
        const isUp = (entity.stairDirection ?? 'up') === 'up';
        const target = entity.targetFloor ?? (isUp ? player.currentFloor + 1 : player.currentFloor - 1);
        return `<div class="tt-title">${isUp ? '▲' : '▼'} ${isUp ? '通往' : '返回'}第 ${target} 层</div>
          <div class="tt-dim">站上后按 ${isUp ? '↑' : '↓'} 键使用楼梯</div>`;
      }
      case 'npc': {
        const npc = dataManager.getNpc(entity.npcId ?? '');
        return `<div class="tt-title">${npc?.icon ?? '🧑'} ${npc?.name ?? '陌生人'}</div>
          <div class="tt-dim">点击或走向他对话</div>`;
      }
      case 'merchant':
        return `<div class="tt-title">🧔 商人</div><div class="tt-dim">走向他打开商店</div>`;
      case 'item': {
        const def = dataManager.getItem(entity.itemId ?? '');
        return `<div class="tt-title">${def?.icon ?? '❓'} ${def?.name ?? ''}</div><div class="tt-dim">${def?.description ?? ''}</div>`;
      }
      case 'collectible':
        return `<div class="tt-title">💎 神秘藏品</div><div class="tt-dim">走上去拾取</div>`;
      case 'spring':
        return `<div class="tt-title">⛲ 治疗泉</div><div class="tt-dim">走上去完全恢复生命（一次性）</div>`;
      case 'portal':
        return `<div class="tt-title">🌀 传送门</div><div class="tt-dim">${entity.portalKind === 'endless_exit' ? '返回主线塔层' : '通往深渊回廊（无尽模式）'}</div>`;
      default:
        return null;
    }
  }
}

// 事件转发的便捷绑定（GameUI调用）
export function bindTooltipToCanvas(canvas: HTMLCanvasElement): void {
  const tooltip = Tooltip.getInstance();
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = dataManager.config.viewportWidth / rect.width;
    const scaleY = dataManager.config.viewportHeight / rect.height;
    const tile = CameraController.getInstance().screenToTile((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
    tooltip.onHoverTile(tile, e.clientX, e.clientY);
  });
  canvas.addEventListener('mouseleave', () => tooltip.scheduleHide());
}
