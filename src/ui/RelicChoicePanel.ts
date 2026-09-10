/**
 * 遗物抉择面板（模态）：
 * 1. 发现遗物（掉落 / 开箱）：展示该遗物详情，玩家选择「收下」或「丢弃」；
 * 2. 遗物宝箱：展示 3 件候选遗物，玩家「三选一」。
 *
 * 事件驱动（`relicOffered` / `relicChoiceRequested`），队列串行处理；
 * 若此刻已有其它模态框（战斗结算、事件等），自动等待其关闭后再弹出。
 */
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { RelicManager } from '../systems/RelicManager';
import { relicCardHtml } from './relicCard';
import type { RelicDef } from '../types';

type QueueItem =
  | { kind: 'offer'; id: string }
  | { kind: 'choice'; count: number };

/** 已有其它模态框时的重试间隔 */
const RETRY_MS = 220;

export class RelicChoicePanel {
  private el: HTMLElement;
  private queue: QueueItem[] = [];
  private showing = false;

  constructor(layer: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'overlay-panel hidden relic-choice';
    layer.appendChild(this.el);

    eventBus.on('relicOffered', p => {
      this.queue.push({ kind: 'offer', id: p.id });
      this.schedulePump();
    });
    eventBus.on('relicChoiceRequested', p => {
      this.queue.push({ kind: 'choice', count: p.count });
      this.schedulePump();
    });
  }

  /** 稍后推进队列：给同一帧内的其它模态框（战斗结算等）先开的机会 */
  private schedulePump(): void {
    window.setTimeout(() => this.pump(), 200);
  }

  /** 队列推进：无正在展示 + 无其它模态框时，弹出下一件 */
  private pump(): void {
    if (this.showing || this.queue.length === 0) return;
    if (gameState.modalOpen) {
      window.setTimeout(() => this.pump(), RETRY_MS);
      return;
    }
    const next = this.queue.shift()!;
    this.showing = true;
    if (next.kind === 'offer') this.showOffer(next.id);
    else this.showChoice(next.count);
  }

  private open(html: string): void {
    gameState.pushModal();
    this.el.classList.remove('hidden');
    this.el.innerHTML = html;
  }

  private close(): void {
    this.el.classList.add('hidden');
    this.el.innerHTML = '';
    this.showing = false;
    gameState.popModal();
    window.setTimeout(() => this.pump(), 80);
  }

  /** 遗物卡片（pickable=true 时带「选择此件」按钮） */
  private card(d: RelicDef, rm: RelicManager, pickable: boolean, index: number): string {
    return relicCardHtml(d, rm, {
      cls: 'rc-card',
      headCls: 'rc-card-head',
      iconCls: 'rc-icon',
      nameCls: 'rc-name',
      descCls: 'rc-desc',
      actions: pickable ? `<button class="rc-pick" data-pick="${index}">选择此件</button>` : '',
    });
  }

  /** 单件：收下 / 丢弃 */
  private showOffer(id: string): void {
    const rm = RelicManager.getInstance();
    const d = rm.def(id);
    if (!d) { this.close(); return; }
    this.open(`
      <div class="op-box rc-box">
        <div class="op-head"><span>🏺 发现遗物</span></div>
        <div class="op-body">
          <div class="rc-hint dim">收下后本轮永久生效（不可卸下）；也可以选择丢弃。</div>
          <div class="rc-cards">${this.card(d, rm, false, 0)}</div>
          <div class="rc-actions">
            <button class="btn-primary" data-act="take">收下</button>
            <button data-act="drop">丢弃</button>
          </div>
        </div>
      </div>`);
    this.el.querySelector('[data-act="take"]')!.addEventListener('click', () => {
      rm.add(id);
      this.close();
    });
    this.el.querySelector('[data-act="drop"]')!.addEventListener('click', () => {
      eventBus.emit('notification', { message: `丢弃了遗物【${d.name}】`, type: 'info', icon: '🗑️' });
      this.close();
    });
  }

  /** 遗物宝箱：三选一（必须选一件） */
  private showChoice(count: number): void {
    const rm = RelicManager.getInstance();
    const cands = rm.randomCandidates(count);
    if (cands.length === 0) { this.close(); return; }
    this.open(`
      <div class="op-box rc-box">
        <div class="op-head"><span>🏺 遗物宝箱 · 三选一</span></div>
        <div class="op-body">
          <div class="rc-hint dim">从下列遗物中挑选<b>一件</b>带走，其余会消散。</div>
          <div class="rc-cards rc-three">${cands.map((d, i) => this.card(d, rm, true, i)).join('')}</div>
        </div>
      </div>`);
    this.el.querySelectorAll('[data-pick]').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt((btn as HTMLElement).dataset.pick!, 10);
        rm.add(cands[i].id);
        this.close();
      });
    });
  }
}
