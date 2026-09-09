/**
 * Boss战警告界面（规格 Phase 13）：Boss信息 + 词缀 + 战力提示。
 */
import type { Boss } from '../entities/Boss';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';

export class BossWarningUI {
  private static instance: BossWarningUI;
  private root: HTMLElement;

  private constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.id = 'boss-warning';
    this.root.classList.add('hidden');
    parent.appendChild(this.root);
  }

  static init(parent: HTMLElement): BossWarningUI {
    if (!BossWarningUI.instance) {
      BossWarningUI.instance = new BossWarningUI(parent);
    }
    return BossWarningUI.instance;
  }

  show(boss: Boss, warningText: string, onClose: () => void): void {
    const player = Player.getInstance();
    const ratio = Math.round(player.combatPower() / Math.max(1, boss.suggestedPower) * 100);
    const affixes = boss.affixes
      .map(id => dataManager.getBossAffix(id))
      .filter((a): a is NonNullable<ReturnType<typeof dataManager.getBossAffix>> => a !== undefined)
      .map(a => `<div class="bw-affix">${a.icon} ${a.name} — ${a.description}</div>`)
      .join('') || '<div class="bw-affix" style="opacity:0.6">无词缀</div>';

    this.root.innerHTML = `
      <div class="bw-icon">${boss.icon}</div>
      <div class="bw-title">${boss.name}</div>
      <div class="bw-sub">${dataManager.text('bossRoomEnter')}</div>
      <div class="bw-affixes">${affixes}</div>
      <div class="bw-stats">生命 ${boss.maxHp} · 攻击 ${boss.attack} · 防御 ${boss.defense} ｜ 建议战力 ${boss.suggestedPower} · 你的战力 ${player.combatPower()}（${ratio}%）</div>
      ${warningText ? `<div class="bw-warning">${warningText}</div>` : ''}
      <button class="btn primary" id="bw-continue">踏入圣所</button>
    `;
    this.root.classList.remove('hidden');
    this.root.querySelector('#bw-continue')!.addEventListener('click', () => {
      this.hide();
      onClose();
    });
  }

  hide(): void {
    this.root.classList.add('hidden');
  }
}
