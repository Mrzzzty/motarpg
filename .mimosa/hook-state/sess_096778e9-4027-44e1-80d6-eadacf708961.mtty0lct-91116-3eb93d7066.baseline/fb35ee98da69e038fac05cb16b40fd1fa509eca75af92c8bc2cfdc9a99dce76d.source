/**
 * 事件面板：随机事件触发时自动弹出（进入房间按概率判定），选项应用效果。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import { ParticleSystem } from '../effects/ParticleSystem';
import { rng } from '../utils/MathUtils';
import type { RoomType } from '../types';

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
  chance: number;
  roomTypes: string[];
  description: string;
  options: { text: string; effects: EventEffectDef[] }[];
}

export class EventPanel {
  private el: HTMLElement;
  private triggeredRooms = new Set<string>();

  constructor(layer: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'overlay-panel hidden event-panel';
    layer.appendChild(this.el);

    eventBus.on('roomEntered', p => this.maybeTrigger(p.roomId, p.roomType));
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this.el.classList.contains('hidden')) this.close();
    });
  }

  private maybeTrigger(roomId: string, roomType: RoomType): void {
    if (gameState.modalOpen) return;
    const key = `${Player.getInstance().state.currentFloor}:${roomId}`;
    if (this.triggeredRooms.has(key)) return;
    this.triggeredRooms.add(key);

    const floor = Player.getInstance().state.currentFloor;
    const events = (dataManager.events as { events: RandomEventDef[] }).events;
    const candidates = events.filter(ev =>
      floor >= ev.minFloor && ev.roomTypes.includes(roomType) && rng.chance(ev.chance),
    );
    const ev = candidates[0];
    if (ev) this.show(ev);
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
