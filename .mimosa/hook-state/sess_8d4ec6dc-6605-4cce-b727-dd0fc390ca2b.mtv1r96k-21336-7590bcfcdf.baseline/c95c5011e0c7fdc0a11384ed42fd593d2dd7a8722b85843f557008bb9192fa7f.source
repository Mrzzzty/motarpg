/**
 * 登顶反转演出（文案规格 §4，结构 [已确认]；台词原文标注「见前 v1」但未随库提供，
 * 以下旁白按已确认结构拟写：空无一物 → 引导者虚影「笑」→ 真相在下方）：
 *
 * A 广角：空旷白金平台上镜头拉远，孤独感（无敌人、无杂物）。
 * B 反转：画面色彩骤冷（LUT 切青蓝）+ 引导者虚影浮现并「笑」（光影形变）+ 字幕逐字浮现。
 * C 转折：色彩反转闪爆 + 镜头猛然下摇穿透塔基（快速缩放 + 下坠）。
 * D 揭示：黑幕 →「第一幕 · 完」+ 地下段入口预告（地下四区待定，仅预告不落地）。
 */
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { ThreeRenderer } from '../effects/ThreeRenderer';
import { postProcessing } from '../effects/PostProcessing';
import { GuidanceSystem } from '../systems/GuidanceSystem';

/** 反转旁白（逐字浮现；结构 [已确认]） */
const REVEAL_LINES = [
  '你到了塔顶。',
  '这里，什么都没有。',
  '呵呵……呵呵呵……',
  '你以为，真相在天上吗？',
  '往下看——塔的根基之下，才是真正的起点。',
];

const wait = (ms: number): Promise<void> => new Promise(res => window.setTimeout(res, ms));

export class SummitCinematic {
  private static instance: SummitCinematic;
  static getInstance(): SummitCinematic {
    if (!SummitCinematic.instance) SummitCinematic.instance = new SummitCinematic();
    return SummitCinematic.instance;
  }

  private el: HTMLElement | null = null;
  private playing = false;
  /** 点击字幕区跳过：所有等待立即放行，直接进入尾声卡 */
  private skipped = false;
  private skipResolve: (() => void) | null = null;
  private skipPromise: Promise<void> = new Promise<void>(() => {}); // 永不 resolve 的哨兵

  private constructor() {}

  private ensureDom(): void {
    if (this.el) return;
    const el = document.createElement('div');
    el.id = 'summit-cinematic';
    el.className = 'hidden';
    el.innerHTML = `
      <div class="sc-skip dim">点击画面跳过 ›</div>
      <div class="sc-subtitle"></div>
      <div class="sc-flash"></div>
      <div class="sc-black hidden">
        <div class="sc-card">
          <div class="sc-act">第一幕 · 完</div>
          <div class="sc-line">塔基之下，另有深渊。</div>
          <div class="sc-tease">—— 地下篇 · 待启 ——</div>
          <div class="sc-actions">
            <button class="btn-primary" data-sc="stay">回到塔顶</button>
            <button data-sc="title">返回标题</button>
          </div>
        </div>
      </div>`;
    const host = document.getElementById('game-root') ?? document.body;
    host.appendChild(el);
    this.el = el;
    // 点击字幕区（尾声卡按钮之外）→ 跳过当前阶段直接进入尾声
    el.addEventListener('click', e => {
      if ((e.target as HTMLElement).closest('.sc-actions')) return;
      this.requestSkip();
    });
  }

  /** 请求跳过：放行所有进行中的等待 */
  private requestSkip(): void {
    if (this.skipped || !this.playing) return;
    this.skipped = true;
    this.skipResolve?.();
  }

  /** 可被跳过中断的等待 */
  private wait(ms: number): Promise<void> {
    if (this.skipped) return Promise.resolve();
    return Promise.race([wait(ms), this.skipPromise]);
  }

  /** 是否已看过反转（门后续交互走短提示） */
  get revealed(): boolean {
    return GuidanceSystem.getInstance().flags.summitRevealed;
  }

  /** 播放完整演出（塔顶终局之门交互触发；点击画面可跳过至尾声卡） */
  async play(): Promise<void> {
    if (this.playing) return;
    this.playing = true;
    this.skipped = false;
    this.skipPromise = new Promise<void>(res => { this.skipResolve = res; });
    this.ensureDom();
    const el = this.el!;
    const renderer = ThreeRenderer.getInstance();
    gameState.pushModal(); // 演出期间屏蔽游戏输入

    el.classList.remove('hidden');
    el.querySelector('.sc-black')!.classList.add('hidden');
    const subtitle = el.querySelector('.sc-subtitle') as HTMLElement;
    subtitle.textContent = '';

    try {
      // A 登顶广角：空旷平台上的孤独感
      renderer.playSummitWide();
      await this.wait(2300);

      // B 反转：色彩骤冷（青蓝 LUT）+ 引导者虚影浮现并「笑」+ 逐字字幕
      if (!this.skipped) {
        postProcessing.setCinematicTint([0.58, 0.82, 1.1], 0.34, 0.08);
        renderer.spawnGuidePhantom();
      }
      for (const line of REVEAL_LINES) {
        await this.typeLine(subtitle, line);
        await this.wait(line.length > 6 ? 1050 : 750);
      }
      subtitle.textContent = '';

      // C 转折：色彩反转闪爆 + 镜头猛然下摇穿透塔基
      const flash = el.querySelector('.sc-flash') as HTMLElement;
      flash.classList.add('on');
      renderer.fadeOutPhantoms();
      renderer.playSummitDive();
      await this.wait(1700);
      flash.classList.remove('on');

      // D 揭示：黑幕 + 尾声卡（地下段仅预告——四区主题为[待定项]，不落地）
      const black = el.querySelector('.sc-black') as HTMLElement;
      black.classList.remove('hidden');
      GuidanceSystem.getInstance().setFlag('summitRevealed', true);
      eventBus.emit('summitRevealed', {});

      await new Promise<void>(resolve => {
        const stay = black.querySelector('[data-sc="stay"]') as HTMLButtonElement;
        const title = black.querySelector('[data-sc="title"]') as HTMLButtonElement;
        stay.onclick = () => resolve();
        title.onclick = () => {
          resolve();
          eventBus.emit('returnToTitle', {});
        };
      });
    } finally {
      // 无论正常收尾、跳过还是异常，都必须回落色温/机位并解除输入屏蔽（防软锁）
      this.teardown(renderer);
    }
  }

  /** 逐字浮现一行字幕（跳过时立即补全） */
  private async typeLine(el: HTMLElement, text: string): Promise<void> {
    if (this.skipped) {
      el.textContent = text;
      return;
    }
    el.textContent = '';
    for (let i = 1; i <= text.length; i++) {
      if (this.skipped) {
        el.textContent = text;
        return;
      }
      el.textContent = text.slice(0, i);
      await this.wait(46);
    }
  }

  /** 收尾：回落色温/机位、收起虚影与遮罩、解除输入屏蔽 */
  private teardown(renderer: ThreeRenderer): void {
    this.playing = false;
    this.skipped = false;
    this.skipResolve = null;
    renderer.clearCamFx();
    renderer.fadeOutPhantoms();
    postProcessing.clearCinematicTint();
    this.el?.classList.add('hidden');
    gameState.popModal();
  }
}
