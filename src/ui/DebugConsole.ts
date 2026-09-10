/**
 * 调试控制台（开发者/测试用，`~` 键开关）：
 * 1. 直接前往任意楼层（1..110，无视楼梯）。
 * 2. 一键获得调试武器+胸甲（数值 999999 拉满并自动穿戴）。
 * 3. 点击传送开关：开启后点击地板 = 瞬移到该格（无视寻路）。
 */
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { FloorManager } from '../core/FloorManager';
import { ThreeRenderer } from '../effects/ThreeRenderer';
import { CameraController } from '../core/CameraController';
import { GameController } from '../core/GameController';
import { Player } from '../entities/Player';
import { MAX_FLOOR } from '../data/tiers';
import { RoomEditor } from './RoomEditor';
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
  private unlockAllCheck: HTMLInputElement | null = null;
  private perfEl: HTMLElement | null = null;
  private perfTimer: number | null = null;

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
      <div class="dc-row">
        <button id="dc-editor">🏗 房间编辑器（F2）</button>
      </div>
      <label class="dc-row">
        <input type="checkbox" id="dc-teleport" />
        <span>点击传送（无视寻路）</span>
      </label>
      <label class="dc-row">
        <input type="checkbox" id="dc-unlockall" ${gameState.debugUnlockAll ? 'checked' : ''} />
        <span>点亮所有图鉴（遗物图鉴可点击获取）</span>
      </label>
      <div class="dc-perf dim" id="dc-perf">性能：—</div>`;
    host.appendChild(el);
    this.el = el;
    this.floorInput = el.querySelector('#dc-floor');
    this.teleportCheck = el.querySelector('#dc-teleport');
    this.unlockAllCheck = el.querySelector('#dc-unlockall');
    this.perfEl = el.querySelector('#dc-perf');

    el.querySelector('#dc-goto')!.addEventListener('click', () => this.gotoFloor());
    this.floorInput!.addEventListener('keydown', e => {
      if (e.key === 'Enter') this.gotoFloor();
      e.stopPropagation(); // 输入框内按键不触发游戏快捷键
    });
    el.querySelector('#dc-equip')!.addEventListener('click', () => this.giveDebugGear());
    el.querySelector('#dc-editor')!.addEventListener('click', () => {
      RoomEditor.getInstance().toggle();
    });
    this.teleportCheck!.addEventListener('change', () => {
      GameController.getInstance().teleportMode = this.teleportCheck!.checked;
      eventBus.emit('notification', {
        message: this.teleportCheck!.checked ? '点击传送：已开启（点击地板即瞬移）' : '点击传送：已关闭',
        type: 'info', icon: '🧪',
      });
    });
    this.unlockAllCheck!.addEventListener('change', () => {
      gameState.debugUnlockAll = this.unlockAllCheck!.checked;
      eventBus.emit('debugFlagsChanged', {});
      eventBus.emit('notification', {
        message: gameState.debugUnlockAll
          ? '图鉴：已全部点亮（遗物图鉴可点击直接获取）'
          : '图鉴：已恢复为正常进度',
        type: 'info', icon: '📖',
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
    const hidden = this.el?.classList.toggle('hidden');
    if (hidden) this.stopPerf();
    else this.startPerf();
  }

  /** 面板打开时轮询渲染统计（关闭即停 → 平时零开销） */
  private startPerf(): void {
    if (this.perfTimer !== null) return;
    const update = (): void => {
      if (!this.perfEl) return;
      const s = ThreeRenderer.getInstance().stats();
      this.perfEl.textContent =
        `性能：${(1000 / Math.max(1, s.frameMs)).toFixed(0)} FPS（${s.frameMs.toFixed(1)} ms）`
        + ` · draw ${s.calls} · 三角 ${(s.triangles / 1000).toFixed(0)}k`
        + ` · program ${s.programs} · 几何 ${s.geometries} · 纹理 ${s.textures}`;
    };
    update();
    this.perfTimer = window.setInterval(update, 500);
  }

  private stopPerf(): void {
    if (this.perfTimer === null) return;
    window.clearInterval(this.perfTimer);
    this.perfTimer = null;
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
