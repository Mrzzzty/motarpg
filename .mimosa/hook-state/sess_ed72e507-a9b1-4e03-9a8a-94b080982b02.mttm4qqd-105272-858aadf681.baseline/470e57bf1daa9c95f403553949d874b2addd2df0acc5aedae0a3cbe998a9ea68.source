/**
 * 确认对话框：所有世界事件（攻击敌人/开宝箱/下楼梯）先弹出确认选项，
 * 确认后才执行；取消/关闭/Esc 均不执行。打开期间 gameState.modalOpen 屏蔽移动输入。
 */
import { gameState } from '../core/GameState';

export class ConfirmDialog {
  private static instance: ConfirmDialog;
  private el!: HTMLElement;
  private onConfirm: (() => void) | null = null;

  constructor(layer: HTMLElement) {
    if (ConfirmDialog.instance) return;
    ConfirmDialog.instance = this;
    this.el = document.createElement('div');
    this.el.className = 'overlay-panel hidden confirm-panel';
    layer.appendChild(this.el);
    window.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !this.el.classList.contains('hidden')) this.confirm();
      if (e.key === 'Escape' && !this.el.classList.contains('hidden')) this.cancel();
    });
  }

  static getInstance(): ConfirmDialog {
    if (!ConfirmDialog.instance) throw new Error('ConfirmDialog 尚未初始化（需在 GameUI.build 中构造）');
    return ConfirmDialog.instance;
  }

  /** 弹出确认；action 在点击确定/回车后执行 */
  ask(title: string, bodyHtml: string, action: () => void, confirmLabel = '✔ 确定', cancelLabel = '✖ 取消'): void {
    this.onConfirm = action;
    gameState.pushModal();
    this.el.classList.remove('hidden');
    this.el.innerHTML = `
      <div class="dialog-box confirm-box">
        <div class="dialog-name">${title}</div>
        <div class="dialog-text">${bodyHtml}</div>
        <div class="dim confirm-hint">（Enter 确认 · Esc 取消）</div>
        <div class="dialog-actions">
          <button id="confirm-cancel">${cancelLabel}</button>
          <button id="confirm-ok" class="btn-primary">${confirmLabel}</button>
        </div>
      </div>
    `;
    this.el.querySelector('#confirm-ok')!.addEventListener('click', () => this.confirm());
    this.el.querySelector('#confirm-cancel')!.addEventListener('click', () => this.cancel());
    (this.el.querySelector('#confirm-ok') as HTMLElement).focus();
  }

  private confirm(): void {
    const action = this.onConfirm;
    this.close();
    action?.();
  }

  private cancel(): void {
    this.close();
  }

  private close(): void {
    if (this.el.classList.contains('hidden')) return;
    this.onConfirm = null;
    this.el.classList.add('hidden');
    gameState.popModal();
  }
}
