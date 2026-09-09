/**
 * 微操战斗面板（文案规格 §5 [已确认]）：
 * - 顶部半透明「战斗模式：托管 ⇄ 微操」分段开关；战中切到托管 → 当场自动打完。
 * - 敌我血条：卡通阶跃配色（绿≥60% / 黄≥30% / 红<30%，硬切换非平滑渐变）。
 * - 回合日志：等宽字体，逐行打字机浮现。
 * - 30% 阈值与托管自动喝药判定同源：低于 30% 时血条转红 + 药水按钮警示。
 * 面板在战斗结束前不可关闭（无 ✕/遮罩点击/Esc 通道）。
 */
import type { BattleResult } from '../types';
import { Player } from '../entities/Player';
import { dataManager } from '../core/DataManager';
import { gameState } from '../core/GameState';
import type { BattleSession } from '../systems/BattleSystem';

/** 打字机渲染队列：逐行逐字浮现 */
class TypeQueue {
  private el: HTMLElement;
  private queue: { text: string; kind: string }[] = [];
  private busy = false;
  private done: (() => void) | null = null;

  constructor(el: HTMLElement) { this.el = el; }

  push(lines: { text: string; kind: string }[], onIdle?: () => void): void {
    this.queue.push(...lines);
    if (onIdle) this.done = onIdle;
    if (!this.busy) this.next();
  }

  private next(): void {
    const item = this.queue.shift();
    if (!item) {
      this.busy = false;
      const cb = this.done;
      this.done = null;
      cb?.();
      return;
    }
    this.busy = true;
    const line = document.createElement('div');
    line.className = `log-line ${item.kind}`;
    this.el.appendChild(line);
    // 逐字打字机（等宽字体）
    let i = 0;
    const step = (): void => {
      i++;
      line.textContent = item.text.slice(0, i);
      this.el.scrollTop = this.el.scrollHeight;
      if (i < item.text.length) window.setTimeout(step, 16);
      else window.setTimeout(() => this.next(), 110);
    };
    step();
  }

  /** 立即吐空队列（战中切托管自动收尾时使用） */
  flushAll(lines: { text: string; kind: string }[]): void {
    for (const item of lines) {
      const line = document.createElement('div');
      line.className = `log-line ${item.kind}`;
      line.textContent = item.text;
      this.el.appendChild(line);
    }
    this.queue = [];
    this.el.scrollTop = this.el.scrollHeight;
  }

  clear(): void {
    this.el.innerHTML = '';
    this.queue = [];
    this.busy = false;
    this.done = null;
  }
}

export class BattlePanel {
  private static instance: BattlePanel;
  static getInstance(): BattlePanel {
    if (!BattlePanel.instance) BattlePanel.instance = new BattlePanel();
    return BattlePanel.instance;
  }

  private el: HTMLElement | null = null;
  private session: BattleSession | null = null;
  private onEnd: ((result: BattleResult) => void) | null = null;
  private typer: TypeQueue | null = null;
  private nameEl!: HTMLElement;
  private playerFill!: HTMLElement;
  private playerNum!: HTMLElement;
  private playerBarRow!: HTMLElement;
  private monsterFill!: HTMLElement;
  private monsterNum!: HTMLElement;
  private logEl!: HTMLElement;
  private actionsEl!: HTMLElement;
  private potionBtn!: HTMLButtonElement;
  private closeBtn!: HTMLButtonElement;

  private constructor() {}

  init(layer: HTMLElement): void {
    if (this.el) return;
    const el = document.createElement('div');
    el.className = 'overlay-panel hidden';
    el.dataset.panel = 'battle';
    el.innerHTML = `
      <div class="battle-box">
        <div class="battle-mode-strip">
          <span class="bms-label">战斗模式</span>
          <div class="seg-control">
            <button data-mode="auto">托管</button>
            <button data-mode="manual">微操</button>
          </div>
        </div>
        <div class="battle-title">⚔️ <span id="bp-mon"></span></div>
        <div class="battle-bars">
          <div class="bb-row" id="bp-row-player">
            <span class="bb-name">勇者</span>
            <div class="bb-bar"><div class="bb-fill" id="bp-fill-player"></div></div>
            <span class="bb-num" id="bp-num-player"></span>
          </div>
          <div class="bb-row">
            <span class="bb-name" id="bp-mon2"></span>
            <div class="bb-bar"><div class="bb-fill" id="bp-fill-mon"></div></div>
            <span class="bb-num" id="bp-num-mon"></span>
          </div>
        </div>
        <div class="battle-log" id="bp-log"></div>
        <div class="battle-actions" id="bp-actions">
          <button data-act="attack" class="bp-attack">⚔️ 攻击</button>
          <button data-act="potion" class="bp-potion">🧪 喝药</button>
          <button data-act="flee" class="bp-flee">🏃 撤退</button>
        </div>
        <div class="battle-foot">
          <button class="btn-primary hidden" id="bp-close">继续</button>
        </div>
      </div>`;
    layer.appendChild(el);
    this.el = el;
    this.nameEl = el.querySelector('#bp-mon')!;
    this.playerFill = el.querySelector('#bp-fill-player')!;
    this.playerNum = el.querySelector('#bp-num-player')!;
    this.playerBarRow = el.querySelector('#bp-row-player')!;
    this.monsterFill = el.querySelector('#bp-fill-mon')!;
    this.monsterNum = el.querySelector('#bp-num-mon')!;
    this.logEl = el.querySelector('#bp-log')!;
    this.actionsEl = el.querySelector('#bp-actions')!;
    this.potionBtn = el.querySelector('[data-act="potion"]') as HTMLButtonElement;
    this.closeBtn = el.querySelector('#bp-close') as HTMLButtonElement;
    this.typer = new TypeQueue(this.logEl);

    el.querySelectorAll<HTMLButtonElement>('.seg-control button').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode as 'auto' | 'manual';
        if (mode === gameState.settings.battleMode) return;
        gameState.setSetting('battleMode', mode);
        this.syncModeStrip();
        // 战中切到托管：当场自动打完（日志快速补齐）
        if (mode === 'auto' && this.session && !this.session.finished) {
          this.session.runAuto();
          this.typer?.flushAll(this.session.drainNewLines().map(l => ({ text: l.text, kind: l.kind })));
          this.finish();
        }
      });
    });
    this.actionsEl.querySelectorAll<HTMLButtonElement>('button[data-act]').forEach(btn => {
      btn.addEventListener('click', () => this.act(btn.dataset.act as 'attack' | 'potion' | 'flee'));
    });
    this.closeBtn.addEventListener('click', () => this.close());
  }

  /** 打开微操战斗（GameController.doBattle 在 manual 模式下调用） */
  begin(session: BattleSession, onEnd: (result: BattleResult) => void): void {
    if (!this.el || !this.typer) return;
    this.session = session;
    this.onEnd = onEnd;
    this.el.classList.remove('hidden');
    gameState.pushModal();
    const tag = session.mon.isBoss ? ' · Boss' : session.mon.isElite ? ' · 精英' : '';
    this.nameEl.textContent = `${session.mon.name}${tag}`;
    (this.el.querySelector('#bp-mon2') as HTMLElement).textContent = session.mon.name;
    this.typer.clear();
    this.logEl.innerHTML = '';
    this.actionsEl.classList.remove('hidden');
    this.closeBtn.classList.add('hidden');
    this.syncModeStrip();
    this.refreshBars();
    this.typer.push(session.drainNewLines().map(l => ({ text: l.text, kind: l.kind })));
  }

  private act(action: 'attack' | 'potion' | 'flee'): void {
    const s = this.session;
    if (!s || s.finished || !this.typer) return;
    this.actionsEl.classList.add('bp-waiting'); // 回合结算中暂锁按钮
    const lines = s.stepManual({ type: action });
    this.typer.push(lines.map(l => ({ text: l.text, kind: l.kind })), () => {
      this.actionsEl.classList.remove('bp-waiting');
      this.refreshBars();
      if (s.finished) this.finish();
    });
    this.refreshBars();
  }

  /** 战斗结束：收起行动按钮，展示继续 */
  private finish(): void {
    const s = this.session;
    if (!s) return;
    this.refreshBars();
    this.actionsEl.classList.add('hidden');
    this.closeBtn.classList.remove('hidden');
  }

  private close(): void {
    if (!this.el) return;
    const s = this.session;
    if (s && !s.finished) return; // 未分胜负不可关闭
    this.el.classList.add('hidden');
    gameState.popModal();
    const cb = this.onEnd;
    const result = s?.result ?? null;
    this.session = null;
    this.onEnd = null;
    if (cb && result) cb(result);
  }

  /** 敌我血条刷新：阶跃配色（绿/黄/红硬切换）+ 30% 警示 */
  private refreshBars(): void {
    const s = this.session;
    const player = Player.getInstance();
    const pPct = Math.max(0, Math.min(100, (player.state.hp / player.maxHp) * 100));
    this.playerFill.style.width = `${pPct}%`;
    this.playerFill.className = `bb-fill ${stepClass(pPct)}`;
    this.playerNum.textContent = `${Math.ceil(Math.max(0, player.state.hp))} / ${player.maxHp}`;
    this.playerBarRow.classList.toggle('bb-danger', s !== null && !s.finished && s.hpBelowAutoPotionThreshold());
    if (s) {
      const mPct = Math.max(0, Math.min(100, (s.monsterHp / s.monsterMaxHp) * 100));
      this.monsterFill.style.width = `${mPct}%`;
      this.monsterFill.className = `bb-fill ${stepClass(mPct)}`;
      this.monsterNum.textContent = `${Math.ceil(s.monsterHp)} / ${s.monsterMaxHp}`;
    }
    // 药水按钮：最优药水 + 数量；低于 30% 时警示
    const tier = s && !s.finished ? s.bestPotion() : null;
    const def = tier ? dataManager.getPotion(tier) : null;
    const count = tier ? player.getPotionCount(tier) : 0;
    this.potionBtn.disabled = !tier;
    const warn = s !== null && !s.finished && s.hpBelowAutoPotionThreshold();
    this.potionBtn.classList.toggle('bp-warn', !!warn);
    this.potionBtn.innerHTML = def
      ? `🧪 ${def.name} ×${count}${warn ? '<span class="bp-warn-tag">生命&lt;30%</span>' : ''}`
      : '🧪 无药水';
  }

  private syncModeStrip(): void {
    if (!this.el) return;
    this.el.querySelectorAll<HTMLButtonElement>('.seg-control button').forEach(btn => {
      const on = btn.dataset.mode === gameState.settings.battleMode;
      btn.classList.toggle('on', on);
    });
  }
}

/** 阶跃配色：绿≥60% / 黄≥30% / 红<30%（非平滑，卡通阶跃） */
function stepClass(pct: number): string {
  if (pct >= 60) return 'bb-ok';
  if (pct >= 30) return 'bb-mid';
  return 'bb-low';
}
