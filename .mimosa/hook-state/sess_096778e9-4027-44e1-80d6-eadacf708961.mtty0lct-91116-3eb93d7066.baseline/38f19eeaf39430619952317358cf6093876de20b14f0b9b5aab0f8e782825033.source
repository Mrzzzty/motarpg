/**
 * 小地图（当前层级房间类型概览）：
 * 居中区域右上角，每个房间 = 灰色正方形 + 类型图标（初始↑ 敌怪☠ 精英❗ 商人$ 宝币💰 Boss💀 出口↓ 休整♨），
 * 房间连接以线段同步显示，主角所在房间用金色方框高亮。
 */
import { eventBus } from '../core/EventBus';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import type { RoomData, RoomType } from '../types';

/** 房间类型 → 图标与颜色 */
const ROOM_ICONS: Record<RoomType, { icon: string; color: string }> = {
  start: { icon: '↑', color: '#e8eaf0' },
  combat: { icon: '☠', color: '#ff9999' },
  elite: { icon: '!', color: '#ff3344' },
  merchant: { icon: '$', color: '#55dd77' },
  blacksmith: { icon: '⚒️', color: '#ffb060' },
  witch: { icon: '🧪', color: '#c78cff' },
  chest: { icon: '💰', color: '#ffdd44' },
  boss: { icon: '💀', color: '#ff5555' },
  end: { icon: '↓', color: '#aaddff' },
  rest: { icon: '♨', color: '#ffaa66' },
};

export class MiniMap {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('div');
    this.container.id = 'minimap';
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'minimap-canvas';
    this.container.appendChild(this.canvas);
    parent.appendChild(this.container);

    eventBus.on('roomEntered', () => this.refresh());
    eventBus.on('floorChanged', () => this.refresh());
    eventBus.on('saveLoaded', () => this.refresh());
    eventBus.on('gameRestarted', () => this.refresh());
  }

  refresh(): void {
    const floor = WorldManager.getInstance().currentFloor;
    const ctx = this.canvas.getContext('2d')!;
    if (!floor || floor.rooms.length === 0) {
      this.container.classList.add('hidden');
      return;
    }
    this.container.classList.remove('hidden');

    // 网格包围盒（按房间网格坐标 gx,gy 布局）
    const minGx = Math.min(...floor.rooms.map(r => r.gx));
    const maxGx = Math.max(...floor.rooms.map(r => r.gx));
    const minGy = Math.min(...floor.rooms.map(r => r.gy));
    const maxGy = Math.max(...floor.rooms.map(r => r.gy));
    const cols = maxGx - minGx + 1;
    const rows = maxGy - minGy + 1;
    // 限制整体尺寸：房间过多时缩小格子
    const cell = Math.max(12, Math.min(24, Math.floor(260 / Math.max(cols, rows))));
    const pad = 10;
    const w = cols * cell + pad * 2;
    const h = rows * cell + pad * 2;

    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = w * dpr;
    this.canvas.height = h * dpr;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const pos = (r: RoomData) => ({
      x: pad + (r.gx - minGx) * cell,
      y: pad + (r.gy - minGy) * cell,
    });

    // 连接线（房间中心之间）
    ctx.strokeStyle = '#6a7590';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (const c of floor.connections) {
      const a = floor.rooms.find(r => r.id === c.from);
      const b = floor.rooms.find(r => r.id === c.to);
      if (!a || !b) continue;
      const pa = pos(a);
      const pb = pos(b);
      ctx.moveTo(pa.x + cell / 2, pa.y + cell / 2);
      ctx.lineTo(pb.x + cell / 2, pb.y + cell / 2);
    }
    ctx.stroke();

    // 当前房间
    const currentId = Player.getInstance().state.currentRoomId;

    // 房间方块 + 图标
    for (const room of floor.rooms) {
      const p = pos(room);
      // 灰色底
      ctx.fillStyle = room.id === currentId ? '#5a6070' : '#444a58';
      ctx.fillRect(p.x, p.y, cell, cell);
      // 图标
      const { icon, color } = ROOM_ICONS[room.type];
      ctx.fillStyle = color;
      ctx.font = `${Math.floor(cell * 0.62)}px "Microsoft YaHei", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(icon, p.x + cell / 2, p.y + cell / 2 + 1);
    }

    // 主角所在房间：金色外框（单独最后画，避免被相邻房间覆盖）
    const cur = floor.rooms.find(r => r.id === currentId);
    if (cur) {
      const p = pos(cur);
      ctx.strokeStyle = '#ffdd44';
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x - 2.5, p.y - 2.5, cell + 5, cell + 5);
    }
  }
}
