/**
 * Canvas 渲染器：地形、实体（emoji图标）、楼梯/门、血条、暗幕淡入淡出。
 */
import { dataManager } from '../core/DataManager';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { CameraController } from '../core/CameraController';
import { Player } from '../entities/Player';
import { ParticleSystem } from '../effects/ParticleSystem';
import { StatCalculator } from '../utils/StatCalculator';

export class Renderer {
  private static instance: Renderer;
  private ctx: CanvasRenderingContext2D;
  private camera = CameraController.getInstance();
  private particles = ParticleSystem.getInstance();

  private constructor(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('[Renderer] Canvas 2D 上下文不可用');
    this.ctx = ctx;
  }

  static init(canvas: HTMLCanvasElement): Renderer {
    if (!Renderer.instance) {
      Renderer.instance = new Renderer(canvas);
    }
    return Renderer.instance;
  }

  static getInstance(): Renderer {
    if (!Renderer.instance) throw new Error('[Renderer] 尚未初始化');
    return Renderer.instance;
  }

  render(): void {
    const ctx = this.ctx;
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    const player = Player.getInstance();
    const cfg = dataManager.config;
    const T = cfg.tileSize;

    ctx.clearRect(0, 0, cfg.viewportWidth, cfg.viewportHeight);

    if (!room) {
      this.renderFade();
      return;
    }

    const camX = Math.round(this.camera.x);
    const camY = Math.round(this.camera.y);

    // ---- 可视瓦片范围 ----
    const x0 = Math.max(0, Math.floor(camX / T));
    const y0 = Math.max(0, Math.floor(camY / T));
    const x1 = Math.min(room.width - 1, Math.ceil((camX + cfg.viewportWidth) / T));
    const y1 = Math.min(room.height - 1, Math.ceil((camY + cfg.viewportHeight) / T));

    // ---- 地形 ----
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const sx = x * T - camX;
        const sy = y * T - camY;
        const tile = room.tiles[y][x];
        this.drawTile(ctx, sx, sy, tile, x, y);
      }
    }

    // ---- 门 ----
    for (const exit of room.exits) {
      const sx = exit.doorX * T - camX;
      const sy = exit.doorY * T - camY;
      ctx.save();
      ctx.fillStyle = exit.isBossGate ? 'rgba(255,80,80,0.35)' : 'rgba(120,200,255,0.18)';
      ctx.fillRect(sx, sy, T, T);
      ctx.font = `${T * 0.6}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🚪', sx + T / 2, sy + T / 2);
      ctx.restore();
    }

    // ---- 实体 ----
    const entities = world.getLiveEntities(room);
    // 阴影
    for (const e of entities) {
      const sx = e.x * T - camX + T / 2;
      const sy = e.y * T - camY + T * 0.85;
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.beginPath();
      ctx.ellipse(sx, sy, T * 0.3, T * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const e of entities) {
      this.drawEntity(ctx, e, camX, camY, room);
    }

    // ---- 玩家 ----
    this.drawPlayer(ctx, player, camX, camY);

    // ---- 楼梯提示（站在楼梯上） ----
    const stairHere = entities.find(e => e.type === 'stair' && e.x === player.position.x && e.y === player.position.y);
    if (stairHere) {
      ctx.save();
      ctx.font = 'bold 15px "Microsoft YaHei", sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.95)';
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.lineWidth = 4;
      ctx.textAlign = 'center';
      const label = stairHere.stairDirection === 'up'
        ? `↑ 前往第${stairHere.targetFloor ?? player.currentFloor + 1}层`
        : `↓ 返回第${stairHere.targetFloor ?? player.currentFloor - 1}层`;
      const px = player.position.x * T - camX + T / 2;
      const py = player.position.y * T - camY - 12;
      ctx.strokeText(label, px, py);
      ctx.fillText(label, px, py);
      ctx.restore();
    }

    // ---- 粒子 ----
    this.particles.render(ctx);

    // ---- 淡入淡出 ----
    this.renderFade();
  }

  private renderFade(): void {
    const alpha = this.camera.fadeOverlayAlpha;
    if (alpha > 0.01) {
      this.ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      this.ctx.fillRect(0, 0, dataManager.config.viewportWidth, dataManager.config.viewportHeight);
    }
  }

  private drawTile(ctx: CanvasRenderingContext2D, sx: number, sy: number, tile: number, x: number, y: number): void {
    const T = dataManager.config.tileSize;
    switch (tile) {
      case 0: {
        // 石板地面：微棋盘纹
        const even = (x + y) % 2 === 0;
        ctx.fillStyle = even ? '#2b2f3d' : '#262a37';
        ctx.fillRect(sx, sy, T, T);
        ctx.strokeStyle = 'rgba(255,255,255,0.03)';
        ctx.strokeRect(sx + 0.5, sy + 0.5, T - 1, T - 1);
        break;
      }
      case 1: {
        // 墙壁：砖块
        ctx.fillStyle = '#41465a';
        ctx.fillRect(sx, sy, T, T);
        ctx.fillStyle = '#4c5268';
        ctx.fillRect(sx + 2, sy + 2, T - 4, T / 2 - 3);
        ctx.strokeStyle = '#2e3344';
        ctx.lineWidth = 1;
        ctx.strokeRect(sx + 0.5, sy + 0.5, T - 1, T - 1);
        ctx.beginPath();
        ctx.moveTo(sx, sy + T / 2);
        ctx.lineTo(sx + T, sy + T / 2);
        ctx.stroke();
        break;
      }
      case 2: {
        // 装饰柱
        ctx.fillStyle = '#2b2f3d';
        ctx.fillRect(sx, sy, T, T);
        ctx.fillStyle = '#5a6178';
        ctx.beginPath();
        ctx.ellipse(sx + T / 2, sy + T / 2, T * 0.3, T * 0.36, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#6d7590';
        ctx.beginPath();
        ctx.ellipse(sx + T / 2, sy + T / 2 - 2, T * 0.22, T * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 4: {
        // 悬崖：虚空渐变
        ctx.fillStyle = '#14161f';
        ctx.fillRect(sx, sy, T, T);
        const grad = ctx.createLinearGradient(sx, sy, sx, sy + T);
        grad.addColorStop(0, 'rgba(40,46,66,0.9)');
        grad.addColorStop(1, 'rgba(10,12,20,0.2)');
        ctx.fillStyle = grad;
        ctx.fillRect(sx, sy, T, T);
        ctx.strokeStyle = 'rgba(100,110,140,0.25)';
        ctx.beginPath();
        ctx.moveTo(sx, sy + 3);
        ctx.lineTo(sx + T, sy + 3);
        ctx.stroke();
        break;
      }
      default:
        ctx.fillStyle = '#2b2f3d';
        ctx.fillRect(sx, sy, T, T);
        break;
    }
  }

  private drawEntity(ctx: CanvasRenderingContext2D, e: import('../types').RoomEntity, camX: number, camY: number, room: import('../types').Room): void {
    const T = dataManager.config.tileSize;
    const sx = e.x * T - camX;
    const sy = e.y * T - camY;
    const cx = sx + T / 2;
    const cy = sy + T / 2;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    switch (e.type) {
      case 'monster': {
        const def = dataManager.getMonster(e.monsterId ?? '');
        ctx.font = `${T * (e.isElite ? 0.85 : 0.7)}px serif`;
        ctx.fillText(def?.icon ?? '👾', cx, cy);
        if (e.isElite) {
          ctx.font = 'bold 10px "Microsoft YaHei", sans-serif';
          ctx.fillStyle = '#ffb300';
          ctx.fillText('精英', cx, sy - 4);
        }
        break;
      }
      case 'boss': {
        const bossDef = dataManager.getBossByFloor(room.floorId);
        ctx.font = `${T * 1.0}px serif`;
        ctx.shadowColor = '#ff5252';
        ctx.shadowBlur = 14;
        ctx.fillText(bossDef?.icon ?? '🐲', cx, cy);
        ctx.shadowBlur = 0;
        break;
      }
      case 'chest': {
        const tierDef = e.chestTier && e.chestTier !== 'auto'
          ? dataManager.config.chest.find(c => c.tier === e.chestTier)
          : null;
        ctx.font = `${T * 0.7}px serif`;
        if (tierDef) {
          ctx.shadowColor = tierDef.color;
          ctx.shadowBlur = tierDef.tier === 'legendary' ? 16 : 6;
        }
        ctx.fillText('🧰', cx, cy);
        ctx.shadowBlur = 0;
        break;
      }
      case 'stair': {
        const isUp = (e.stairDirection ?? 'up') === 'up';
        ctx.save();
        ctx.shadowColor = isUp ? '#ffd700' : '#4fc3f7';
        ctx.shadowBlur = 12;
        ctx.font = `bold ${T * 0.72}px "Microsoft YaHei", sans-serif`;
        ctx.fillStyle = isUp ? '#ffd700' : '#4fc3f7';
        ctx.fillText(isUp ? '▲' : '▼', cx, cy);
        ctx.restore();
        break;
      }
      case 'npc': {
        const npc = dataManager.getNpc(e.npcId ?? '');
        ctx.font = `${T * 0.72}px serif`;
        ctx.fillText(npc?.icon ?? '🧑', cx, cy);
        break;
      }
      case 'merchant': {
        ctx.font = `${T * 0.75}px serif`;
        ctx.fillText('🧔', cx, cy);
        ctx.font = 'bold 11px "Microsoft YaHei", sans-serif';
        ctx.fillStyle = '#ffd700';
        ctx.fillText('商店', cx, sy - 4);
        break;
      }
      case 'item': {
        const def = dataManager.getItem(e.itemId ?? '');
        ctx.font = `${T * 0.62}px serif`;
        ctx.fillText(def?.icon ?? '❓', cx, cy);
        break;
      }
      case 'collectible': {
        ctx.save();
        ctx.shadowColor = '#b388ff';
        ctx.shadowBlur = 10;
        ctx.font = `${T * 0.68}px serif`;
        ctx.fillText('💎', cx, cy);
        ctx.restore();
        break;
      }
      case 'spring': {
        ctx.font = `${T * 0.72}px serif`;
        ctx.fillText('⛲', cx, cy);
        break;
      }
      case 'portal': {
        const time = performance.now() / 500;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time % (Math.PI * 2));
        ctx.font = `${T * 0.8}px serif`;
        ctx.fillText('🌀', 0, 0);
        ctx.restore();
        break;
      }
      default:
        break;
    }
  }

  private drawPlayer(ctx: CanvasRenderingContext2D, player: Player, camX: number, camY: number): void {
    const T = dataManager.config.tileSize;
    const sx = player.position.x * T - camX;
    const sy = player.position.y * T - camY;
    // 阴影
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(sx + T / 2, sy + T * 0.85, T * 0.3, T * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = `${T * 0.75}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🧝', sx + T / 2, sy + T / 2);
  }
}
