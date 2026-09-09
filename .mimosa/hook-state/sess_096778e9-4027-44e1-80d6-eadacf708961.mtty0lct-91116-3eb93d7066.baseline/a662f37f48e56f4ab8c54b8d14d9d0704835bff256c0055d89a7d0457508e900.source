/**
 * 事件面板：事件标题/描述/选项，选择后执行效果。
 */
import type { EventOption, RoomEventDef } from '../types';

export class EventPanel {
  private static instance: EventPanel;
  private root: HTMLElement;

  private constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.className = 'overlay-panel event-panel hidden';
    parent.appendChild(this.root);
  }

  static init(parent: HTMLElement): EventPanel {
    if (!EventPanel.instance) {
      EventPanel.instance = new EventPanel(parent);
    }
    return EventPanel.instance;
  }

  show(event: RoomEventDef, options: EventOption[], onChoose: (index: number) => void): void {
    this.root.innerHTML = `
      <div class="panel-head">
        <div class="panel-title">✨ 遭遇事件</div>
      </div>
      <div class="panel-body">
        <div class="event-icon">${event.icon}</div>
        <div class="event-title">${event.title}</div>
        <div class="event-desc">${event.description}</div>
        <div class="event-options"></div>
      </div>`;
    const optionWrap = this.root.querySelector('.event-options')!;
    options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'event-option';
      btn.textContent = `▸ ${opt.text}`;
      btn.addEventListener('click', () => {
        this.hide();
        onChoose(idx);
      });
      optionWrap.appendChild(btn);
    });
    this.root.classList.remove('hidden');
  }

  hide(): void {
    this.root.classList.add('hidden');
  }
}
