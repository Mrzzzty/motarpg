/**
 * 调试控制台（开发者/测试用，`~` 键开关）：
 * 1. 直接前往任意楼层（1..110，无视楼梯）。
 * 2. 一键获得调试武器+胸甲（数值 999999 拉满并自动穿戴）。
 * 3. 点击传送开关：开启后点击地板 = 瞬移到该格（无视寻路）。
 */
import { eventBus } from '../core/EventBus';
import { FloorManager } from '../core/FloorManager';
import { CameraController } from '../core/CameraController';
import { GameController } from '../core/GameController';
import { Player } from '../entities/Player';
import { MAX_FLOOR } from '../data/tiers';
import type { Equipment } from '../types';
import { IdGenerator } from '../utils/IdGenerator';

/** 构造一件调试装备（数值拉满） */
function debugEquipment(slot: 'weapon' | 'armor', name: string): Equipment {
  const id = IdGenerator.equipmentId();
  return {
    id,
    slot,
    baseName: name,
    name: `[调试] ${name}`,
    level: 110,
    quality: 'mythic',
    affixes: [
      { type: 'precision', name: '精准', value: 100, isPercent: true },
      { type: 'agility', name: '灵巧', value: 100, isPercent: true },
      { type: 'lifesteal', name: '嗜血', value: 100, isPercent: true },
      { type: 'dragonslayer', name: '屠龙', value: 999999, isPercent: true },
    ],
    attack: 999999,
    defense: 999999,
    sellPrice: 1,
    buyPrice: 0,
    source: 'tutorial', // 不触发"首次获得装备"引导提示
  };
}

export class DebugConsole {
  private static instance: DebugConsole;
  static getInstance(): DebugConsole {
    if (!DebugConsole.instance) DebugConsole.instance = new DebugConsole();
    return DebugConsole.instance;
  }

  private el: HTMLElement | null = null;
  private floorInput: HTMLInputElement | null = null;
  private teleportCheck: HTMLInputElement | null = null;

  private constructor() {}

  init(host: HTMLElement): void {
    if (this.el) return;
    const el = document.createElement('div');
    el.id = 'debug-console';
    el.className = 'hidden';
    el.innerHTML = `
      <div class="dc-head">调试控制台 <span class="dim">~ 开关</span></div>
      <div class="dc-row">
        <span class="dc-label">楼层</span>
        <input id="dc-floor" type="number" min="1" max="${MAX_FLOOR}" value="1" />
        <button id="dc-goto">前往</button>
      </div>
      <div class="dc-row">
        <button id="dc-equip">⚔️ 调试装备 ×999999</button>
      </div>
      <label class="dc-row">
        <input type="checkbox" id="dc-teleport" />
        <span>点击传送（无视寻路）</span>
      </label>`;
    host.appendChild(el);
    this.el = el;
    this.floorInput = el.querySelector('#dc-floor');
    this.teleportCheck = el.querySelector('#dc-teleport');

    el.querySelector('#dc-goto')!.addEventListener('click', () => this.gotoFloor());
    this.floorInput!.addEventListener('keydown', e => {
      if (e.key === 'Enter') this.gotoFloor();
      e.stopPropagation(); // 输入框内按键不触发游戏快捷键
    });
    el.querySelector('#dc-equip')!.addEventListener('click', () => this.giveDebugGear());
    this.teleportCheck!.addEventListener('change', () => {
      GameController.getInstance().teleportMode = this.teleportCheck!.checked;
      eventBus.emit('notification', {
        message: this.teleportCheck!.checked ? '点击传送：已开启（点击地板即瞬移）' : '点击传送：已关闭',
        type: 'info', icon: '🧪',
      });
    });

    window.addEventListener('keydown', e => {
      if (e.key !== '`' && e.key !== '~') return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      e.preventDefault();
      this.toggle();
    });
  }

  toggle(): void {
    this.el?.classList.toggle('hidden');
  }

  /** 直接跳层（1..110 封顶内取整） */
  private gotoFloor(): void {
    const raw = parseInt(this.floorInput?.value ?? '1', 10);
    if (!Number.isFinite(raw)) return;
    const floorId = Math.max(1, Math.min(MAX_FLOOR, raw));
    FloorManager.getInstance().enterFloor(floorId);
    CameraController.getInstance().snapToPlayer();
    eventBus.emit('notification', { message: `已传送到第 ${floorId} 层`, type: 'info', icon: '🧪' });
  }

  /** 调试武器+胸甲（拉满并自动穿戴） */
  private giveDebugGear(): void {
    const player = Player.getInstance();
    const weapon = debugEquipment('weapon', '万物斩');
    const armor = debugEquipment('armor', '不朽甲');
    player.addEquipment(weapon);
    player.addEquipment(armor);
    player.equip(weapon.id);
    player.equip(armor.id);
    eventBus.emit('notification', {
      message: `已装备 [调试] 万物斩 / 不朽甲（攻防 999999）`,
      type: 'success', icon: '⚔️',
    });
  }
}
