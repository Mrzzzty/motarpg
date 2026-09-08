/**
 * 通知（toast）：右上角堆叠，自动消失。
 */
import { eventBus } from '../core/EventBus';

export class Notification {
  private static host: HTMLElement | null = null;

  static init(host: HTMLElement): void {
    this.host = host;
    eventBus.on('notification', p => this.show(p.message, p.type, p.icon));
    eventBus.on('questCompleted', p => this.show(`任务完成：${p.name}`, 'success', '📋'));
    eventBus.on('levelUp', p => this.show(`升级！Lv.${p.newLevel}（攻击+${p.gainedAttack} 防御+${p.gainedDefense} 生命+${p.gainedHp}）`, 'success', '⬆️'));
    eventBus.on('saveCompleted', p => this.show(p.trigger === 'auto' ? '已自动存档' : '已手动存档', 'info', '💾'));
    eventBus.on('bossDefeated', p => this.show(`击败Boss：${p.name}！`, 'success', '🏆'));
    eventBus.on('questAccepted', () => undefined);
  }

  static show(message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info', icon = 'ℹ️'): void {
    if (!this.host) return;
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    el.innerHTML = `<span class="nt-icon">${icon}</span><span>${message}</span>`;
    this.host.appendChild(el);
    window.setTimeout(() => {
      el.classList.add('fade-out');
      window.setTimeout(() => el.remove(), 400);
    }, 2800);
  }
}
