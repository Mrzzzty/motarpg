/**
 * 事件面板：随机事件触发时自动弹出，选项应用效果。
 *
 * 触发类型（events.json 的 `trigger` 字段，缺省 `on_enter`）：
 *   on_enter      进入房间时 —— 每房间每层只判定一次（原行为）
 *   on_step       在房间内每走一步时 —— 按步判定（chance 为「每步概率」），成功触发后本房间不再判定
 *   on_interact   与实体交互时（撞向 / 点击怪物、宝箱、NPC 等）
 *   on_defeat_all 房间内怪物被清空时
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import { ParticleSystem } from '../effects/ParticleSystem';
import { rng } from '../utils/MathUtils';
import type { RoomType } from '../types';

/** 事件触发类型 */
type EventTrigger = 'on_enter' | 'on_step' | 'on_interact' | 'on_defeat_all';

interface EventEffectDef {
  type: 'gold' | 'healPct' | 'exp' | 'damagePct';
  value: number;
  perFloor?: number;
}

interface RandomEventDef {
  id: string;
  name: string;
  icon: string;
  minFloor: number;
  /** 触发方式；缺省 on_enter */
  trigger?: EventTrigger;
  chance: number;
  roomTypes: string[];
  description: string;
  options: { text: string; effects: EventEffectDef[] }[];
}

export class EventPanel {
  private el: HTMLElement;
  /** 已成功触发过的「楼层:房间:触发类型」（同房间同类触发不重复弹窗） */
  private triggered = new Set<string>();
  /** on_enter 已判定过的键（保持"每房间每层只判定一次"的原行为） */
  private attempted = new Set<string>();

  constructor(layer: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'overlay-panel hidden event-panel';
    layer.appendChild(this.el);

    eventBus.on('roomEntered', p => this.tryTrigger('on_enter', p.roomId, p.roomType));
    eventBus.on('playerMoved', p => this.onPlayerMoved(p.x, p.y));
    eventBus.on('entityInteracted', () => this.onInteract());
    eventBus.on('monsterDefeated', p => this.onMonsterDefeated(p.entityId));

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this.el.classList.contains('hidden')) this.close();
    });
  }

  /** 走一步：按所在房间判定 on_step */
  private onPlayerMoved(x: number, y: number): void {
    const room = WorldManager.getInstance().getRoomAt(x, y);
    if (room) this.tryTrigger('on_step', room.id, room.type);
  }

  /** 交互：按玩家所在房间判定 on_interact */
  private onInteract(): void {
    const p = Player.getInstance();
    const room = WorldManager.getInstance().getRoomAt(p.state.x, p.state.y);
    if (room) this.tryTrigger('on_interact', room.id, room.type);
  }

  /** 击败怪物：该房间怪物清空时判定 on_defeat_all */
  private onMonsterDefeated(entityId: string): void {
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    if (!floor) return;
    const room = floor.rooms.find(r => r.entities.some(e => e.id === entityId));
    if (!room) return;
    const stillAlive = room.entities.some(e =>
      (e.kind === 'monster' || e.kind === 'boss') && world.isEntityAlive(e));
    if (stillAlive) return;
    this.tryTrigger('on_defeat_all', room.id, room.type);
  }

  /** 判定并触发指定类型的事件（走廊 / 模态框打开时不触发） */
  private tryTrigger(trigger: EventTrigger, roomId: string | undefined, roomType: RoomType | undefined): void {
    if (gameState.modalOpen || !roomId || !roomType) return;
    const floor = Player.getInstance().state.currentFloor;
    const key = `${floor}:${roomId}:${trigger}`;
    if (this.triggered.has(key)) return;
    if (trigger === 'on_enter') {
      if (this.attempted.has(key)) return; // 每房间每层只判定一次
      this.attempted.add(key);
    }

    const events = (dataManager.events as { events: RandomEventDef[] }).events;
    const ev = events.find(e =>
      (e.trigger ?? 'on_enter') === trigger
      && floor >= e.minFloor
      && e.roomTypes.includes(roomType)
      && rng.chance(e.chance));
    if (!ev) return;
    this.triggered.add(key);
    this.show(ev);
  }

  private show(ev: RandomEventDef): void {
    gameState.pushModal();
    this.el.classList.remove('hidden');
    const floor = Player.getInstance().state.currentFloor;
    this.el.innerHTML = `
      <div class="op-box">
        <div class="op-head"><span>${ev.icon} ${ev.name}</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="event-desc">${ev.description}</div>
          ${ev.options.map((opt, i) => `<button class="event-option" data-opt="${i}">${opt.text}</button>`).join('')}
        </div>
      </div>
    `;
    this.el.querySelector('.op-close')!.addEventListener('click', () => this.close());
    this.el.querySelectorAll('[data-opt]').forEach(btn => {
      btn.addEventListener('click', () => {
        const opt = ev.options[parseInt((btn as HTMLElement).dataset.opt!, 10)];
        this.applyEffects(opt.effects, floor);
        this.close();
      });
    });
  }

  private applyEffects(effects: EventEffectDef[], floor: number): void {
    const player = Player.getInstance();
    const messages: string[] = [];
    for (const eff of effects) {
      const scale = eff.perFloor ? eff.value + eff.perFloor * floor : eff.value;
      switch (eff.type) {
        case 'gold':
          player.gainGold(Math.round(scale));
          messages.push(`获得 ${Math.round(scale)} 金币`);
          break;
        case 'exp':
          player.gainExp(Math.round(scale));
          messages.push(`获得 ${Math.round(scale)} 经验`);
          break;
        case 'healPct': {
          const healed = player.heal(Math.round(player.maxHp * scale / 100));
          messages.push(`回复 ${healed} 生命`);
          break;
        }
        case 'damagePct': {
          const dmg = Math.round(player.maxHp * scale / 100);
          player.damage(dmg);
          messages.push(`损失 ${dmg} 生命`);
          break;
        }
        default: break;
      }
    }
    if (messages.length > 0) {
      ParticleSystem.getInstance().floatText(player.state.x, player.state.y, messages.join('，'), '#ffdd66');
      eventBus.emit('notification', { message: `${messages.join('，')}`, type: 'info', icon: '✨' });
    }
  }

  private close(): void {
    this.el.classList.add('hidden');
    gameState.popModal();
  }
}
