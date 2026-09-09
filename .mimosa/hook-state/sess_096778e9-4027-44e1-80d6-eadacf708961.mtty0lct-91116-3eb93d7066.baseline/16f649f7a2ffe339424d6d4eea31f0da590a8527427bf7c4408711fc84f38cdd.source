/**
 * 覆盖层面板基类：标题栏+关闭按钮+内容区，show/hide/toggle。
 */
export abstract class OverlayPanel {
  protected root: HTMLDivElement;
  protected body: HTMLDivElement;
  private visible = false;

  constructor(
    parent: HTMLElement,
    title: string,
    className = '',
  ) {
    this.root = document.createElement('div');
    this.root.className = `overlay-panel hidden ${className}`;

    const head = document.createElement('div');
    head.className = 'panel-head';
    const titleEl = document.createElement('div');
    titleEl.className = 'panel-title';
    titleEl.textContent = title;
    const close = document.createElement('button');
    close.className = 'close-btn';
    close.textContent = '✕';
    close.addEventListener('click', () => this.hide());
    head.append(titleEl, close);

    this.body = document.createElement('div');
    this.body.className = 'panel-body';

    this.root.append(head, this.body);
    parent.appendChild(this.root);
  }

  show(): void {
    this.root.classList.remove('hidden');
    this.visible = true;
    this.render();
  }

  hide(): void {
    this.root.classList.add('hidden');
    this.visible = false;
  }

  toggle(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  get isVisible(): boolean {
    return this.visible;
  }

  /** 每次打开/刷新时重绘内容 */
  abstract render(): void;

  protected clearBody(): void {
    this.body.innerHTML = '';
  }
}
