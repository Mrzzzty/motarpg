/**
 * 通知系统：顶部toast堆栈。
 */
import { eventBus } from '../core/EventBus';

export class Notification {
  private static instance: Notification;
  private stack: HTMLElement;

  private constructor() {
    this.stack = document.createElement('div');
    this.stack.id = 'notification-stack';
    document.body.appendChild(this.stack);
    eventBus.on('notification', p => this.show(p.message, p.type, p.icon));
  }

  static getInstance(): Notification {
    if (!Notification.instance) {
      Notification.instance = new Notification();
    }
    return Notification.instance;
  }

  show(message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info', icon?: string): void {
    const el = document.createElement('div');
    el.className = `notification ${type}`;
    el.textContent = icon ? `${icon} ${message}` : message;
    this.stack.appendChild(el);
    // 最多同时5条
    while (this.stack.children.length > 5) {
      this.stack.firstChild?.remove();
    }
    window.setTimeout(() => {
      el.style.transition = 'opacity 0.4s';
      el.style.opacity = '0';
      window.setTimeout(() => el.remove(), 400);
    }, 2600);
  }
}
