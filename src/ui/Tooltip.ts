/**
 * 鼠标悬浮信息窗（文档五 三）：跟随鼠标，偏移(12,12)；
 * 仅可交互实体显示（敌人/物品/NPC/楼梯/宝箱），空地/墙/装饰不显示。
 */
import type { MapEntity } from '../types';
import type { HoverInfo } from '../core/InputManager';
import { dataManager } from '../core/DataManager';
import { WorldManager } from '../core/WorldManager';
import { BattleSystem } from '../systems/BattleSystem';
import { StatCalculator } from '../utils/StatCalculator';

export class Tooltip {
  private el: HTMLElement;
  private lastKey = '';

  constructor(el: HTMLElement) {
    this.el = el;
    document.addEventListener('mousemove', e => {
      if (!this.el.classList.contains('hidden')) {
        this.position(e.clientX, e.clientY);
      }
    });
  }

  update(hover: HoverInfo | null): void {
    if (!hover?.entity) {
      if (!this.el.classList.contains('hidden')) {
        this.el.classList.add('hidden');
        this.lastKey = '';
      }
      return;
    }
    const e = hover.entity;
    const key = `${e.id}:${WorldManager.getInstance().getEntityState(e.id).isOpened ? 1 : 0}`;
    if (key === this.lastKey) return;
    this.lastKey = key;
    this.el.innerHTML = this.renderContent(e);
    this.el.classList.remove('hidden');
  }

  private renderContent(e: MapEntity): string {
    const hints = dataManager.texts.hints ?? {};
    switch (e.kind) {
      case 'monster':
      case 'boss': {
        const def = dataManager.getMonster(e.monsterId ?? '');
        if (!def) return '';
        const stats = StatCalculator.getInstance().monsterStats(
          def, WorldManager.getInstance().currentFloor?.floorId ?? 1, e.kind !== 'boss' && !!e.isElite,
        );
        const forecast = BattleSystem.getInstance().forecast(e);
        const verdict = forecast.winnable
          ? `<span class="ok">预计损耗 ${forecast.estDamage} HP</span>`
          : `<span class="bad">危险！预计损耗 ${forecast.estDamage} HP</span>`;
        return `
          <div class="tt-title" style="color:${def.color}">${stats.name}</div>
          <div>❤️ ${stats.hp}　⚔️ ${stats.attack}　🛡️ ${stats.defense}</div>
          <div class="dim">掉落：${stats.gold}金币 / ${stats.exp}经验${e.kind === 'boss' ? ' / 必掉装备' : ''}</div>
          <div>${verdict}</div>
          <div class="tt-hint">（${hints.attack ?? '左键攻击'}）</div>
        `;
      }
      case 'potion': {
        const def = dataManager.getPotion(e.potionTier ?? '');
        return `
          <div class="tt-title" style="color:${def?.color ?? '#ff5a7a'}">${def?.name ?? '药水'}</div>
          <div class="dim">回复 ${Math.round((def?.healPct ?? 0) * 100)}% 生命</div>
          <div class="tt-hint">（${hints.pickup ?? '左键拾取'}）</div>
        `;
      }
      case 'chest': {
        const opened = WorldManager.getInstance().isChestOpened(e);
        const relicChest = e.chestTier === 'relic';
        const title = relicChest ? '🏺 遗物宝箱' : e.chestTier === 'grand' ? '大宝箱' : '宝箱';
        const color = relicChest ? '#d9a6ff' : '#ffcc00';
        const loot = relicChest ? '三选一：从三件遗物中挑选一件' : '金币 / 装备 / 药水';
        return `
          <div class="tt-title" style="color:${color}">${title}${opened ? '（已开启）' : ''}</div>
          ${opened ? '<div class="dim">空空如也</div>' : `<div class="dim">${loot}</div>`}
          ${opened ? '' : `<div class="tt-hint">（${hints.open ?? '左键打开'}）</div>`}
        `;
      }
      case 'npc': {
        const def = dataManager.getNpc(e.npcId ?? '');
        if (!def) return '';
        return `
          <div class="tt-title" style="color:${def.color}">${def.name}</div>
          <div class="dim">“${def.lines[0]}”</div>
          ${def.isWitch ? '<div class="dim">可交易秘制药水</div>' : ''}
          <div class="tt-hint">（${def.isMerchant || def.isWitch ? hints.trade ?? '左键交易' : hints.talk ?? '左键对话'}）</div>
        `;
      }
      case 'fountain': {
        const wm = WorldManager.getInstance();
        const used = wm.getEntityState(e.id).isUsed === true;
        const cfg = dataManager.config.witch;
        const cost = cfg.fountainCostBase + (wm.currentFloor?.floorId ?? 1) * cfg.fountainCostPerFloor;
        return `
          <div class="tt-title" style="color:#8ff0ff">治疗泉${used ? '（已枯竭）' : ''}</div>
          ${used ? '<div class="dim">泉水已干涸</div>'
            : `<div class="dim">回复全部生命（💰 ${cost}）</div>`}
          ${used ? '' : `<div class="tt-hint">（${hints.heal ?? '左键治疗'}）</div>`}
        `;
      }
      case 'stair': {
        return `
          <div class="tt-title" style="color:#44ddff">通往第 ${e.targetFloor} 层</div>
          <div class="tt-hint">（${hints.stair ?? '点击前往'}）</div>
        `;
      }
      default:
        return '';
    }
  }

  private position(clientX: number, clientY: number): void {
    const cfg = dataManager.config.hover;
    const rect = this.el.getBoundingClientRect();
    let x = clientX + cfg.offsetX;
    let y = clientY + cfg.offsetY;
    if (x + rect.width > window.innerWidth - 8) x = clientX - rect.width - cfg.offsetX;
    if (y + rect.height > window.innerHeight - 8) y = clientY - rect.height - cfg.offsetY;
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }
}
