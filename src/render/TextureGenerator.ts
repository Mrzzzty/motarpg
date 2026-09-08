/**
 * 纹理生成器（迁移文档 5.4）：
 * 用现有 Canvas 2D 绘制逻辑（PlaceholderArt / 房间配色）在离屏画布上烘焙纹理，
 * 产出 HTMLCanvasElement 供渲染层（Three）包装为 CanvasTexture，按变体键缓存，只生成一次。
 * 底部阴影/自发光光晕由渲染层的精灵/光源叠加，不在纹理内。
 */
// 纹理以 HTMLCanvasElement 形式产出，由渲染层包装成引擎所需纹理类型（Three: CanvasHTMLCanvasElement）
import { dataManager } from '../core/DataManager';
import { projection } from './Projection';
import { placeholderArt } from './PlaceholderArt';
import type { MapEntity, MonsterDef, RoomData } from '../types';

/** 房间类型地面色（与旧渲染器一致，保持明亮可读） */
export const FLOOR_COLORS: Record<string, { base: string; alt: string; line: string }> = {
  start:    { base: '#8a97a8', alt: '#8290a2', line: 'rgba(255,255,255,0.10)' },
  end:      { base: '#8fa3b8', alt: '#869bb0', line: 'rgba(255,255,255,0.10)' },
  combat:   { base: '#6f7987', alt: '#687280', line: 'rgba(255,255,255,0.08)' },
  elite:    { base: '#8e7a78', alt: '#867270', line: 'rgba(255,255,255,0.08)' },
  chest:    { base: '#9a9184', alt: '#928a7d', line: 'rgba(255,255,255,0.10)' },
  merchant: { base: '#9a8f7e', alt: '#928779', line: 'rgba(255,255,255,0.10)' },
  witch:    { base: '#7d6f9a', alt: '#766893', line: 'rgba(230,200,255,0.14)' },
  boss:     { base: '#8a6f6f', alt: '#826868', line: 'rgba(255,255,255,0.08)' },
  rest:     { base: '#87987f', alt: '#809178', line: 'rgba(255,255,255,0.10)' },
  corridor: { base: '#75808f', alt: '#6f7a89', line: 'rgba(255,255,255,0.07)' },
};

function bake(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil(w));
  canvas.height = Math.max(1, Math.ceil(h));
  const ctx = canvas.getContext('2d')!;
  draw(ctx);
  return canvas;
}

/** 颜色工具（与 PlaceholderArt 内部一致） */
function mix(a: string, b: string, t: number): string {
  const p = (hex: string) => {
    const m = hex.replace('#', '');
    return { r: parseInt(m.slice(0, 2), 16), g: parseInt(m.slice(2, 4), 16), b: parseInt(m.slice(4, 6), 16) };
  };
  const pa = p(a);
  const pb = p(b);
  return `rgb(${Math.round(pa.r + (pb.r - pa.r) * t)},${Math.round(pa.g + (pb.g - pa.g) * t)},${Math.round(pa.b + (pb.b - pa.b) * t)})`;
}

class HTMLCanvasElementGenerator {
  private floorCache = new Map<string, HTMLCanvasElement>();
  private wallCache = new Map<string, HTMLCanvasElement>();
  private entityCache = new Map<string, HTMLCanvasElement>();
  private glowCache = new Map<string, HTMLCanvasElement>();
  private vignette: HTMLCanvasElement | null = null;
  private cone: HTMLCanvasElement | null = null;

  private get tile(): number { return projection.tileSize; }

  /** 地砖（棋盘格两色 + 网格线） */
  floor(roomType: string, checker: 0 | 1): HTMLCanvasElement {
    const key = `floor_${roomType}_${checker}`;
    let tex = this.floorCache.get(key);
    if (!tex) {
      const palette = FLOOR_COLORS[roomType] ?? FLOOR_COLORS.corridor;
      const color = checker === 0 ? palette.base : palette.alt;
      const s = this.tile;
      tex = bake(s, s, ctx => {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, s, s);
        ctx.strokeStyle = palette.line;
        ctx.lineWidth = dataManager.config.render.gridLineWidth;
        ctx.strokeRect(0.5, 0.5, s - 1, s - 1);
      });
      this.floorCache.set(key, tex);
    }
    return tex;
  }

  /** 地毯 */
  carpet(): HTMLCanvasElement {
    const key = 'carpet';
    let tex = this.floorCache.get(key);
    if (!tex) {
      const s = this.tile;
      tex = bake(s, s, ctx => {
        const half = s / 2 * 0.92;
        ctx.fillStyle = 'rgba(160,60,60,0.55)';
        ctx.fillRect(s / 2 - half, s / 2 - half, half * 2, half * 2);
        ctx.strokeStyle = 'rgba(220,150,80,0.5)';
        ctx.lineWidth = 2;
        ctx.strokeRect(s / 2 - half, s / 2 - half, half * 2, half * 2);
      });
      this.floorCache.set(key, tex);
    }
    return tex;
  }

  /**
   * 墙壁盒（从地面立起 + 底部投影）：纹理高 = tileSize + height，
   * sprite 以 anchor(0.5,1) 置于格子底边即可对齐旧绘制。
   */
  wall(height: number, inRoom: boolean, isPillar: boolean): HTMLCanvasElement {
    const key = `wall_${height}_${inRoom ? 1 : 0}_${isPillar ? 1 : 0}`;
    let tex = this.wallCache.get(key);
    if (!tex) {
      const s = this.tile;
      const half = s / 2;
      tex = bake(s, s + height, ctx => {
        // 底部投影（静态影子，光影文档 5.1：向下偏移 2-4px，透明度 0.15-0.25）
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, s + height - 2 + 3, s, 5);
        ctx.translate(half, half + height); // 原点移到 (cx, cy)
        const left = isPillar ? '#6d6d75' : inRoom ? '#565d6b' : '#4b515e';
        const top = isPillar ? '#9d9da6' : inRoom ? '#7d8697' : '#6f7889';
        ctx.fillStyle = left;
        ctx.fillRect(-half, -half - height, s, height);
        ctx.fillStyle = isPillar ? '#7d7d86' : inRoom ? '#646c7b' : '#565d6b';
        ctx.fillRect(-half, -half, s, s);
        ctx.fillStyle = top;
        ctx.fillRect(-half, -half - height, s, s);
        ctx.strokeStyle = 'rgba(20,24,32,0.55)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(-half, -half - height, s, height + s);
        ctx.strokeStyle = 'rgba(15,18,26,0.35)';
        ctx.lineWidth = 1;
        for (const frac of [0.35, 0.7]) {
          const y = -half - height * frac;
          ctx.beginPath();
          ctx.moveTo(-half, y);
          ctx.lineTo(half, y);
          ctx.stroke();
        }
      });
      this.wallCache.set(key, tex);
    }
    return tex;
  }

  /**
   * 实体精灵（含标签与脚下椭圆阴影，无动画光晕——光晕由渲染层叠加）。
   * 纹理高 = tileSize + height + 48（上方标签余量），anchor(0.5,1) 对齐格子底边。
   * chestOpened：宝箱开启状态（影响纹理变体）。
   */
  entity(e: MapEntity, room: RoomData, monsterDef: MonsterDef | undefined, height: number, chestOpened = false): HTMLCanvasElement {
    this.chestOpened = chestOpened;
    const key = this.entityKey(e, room, monsterDef, height);
    let tex = this.entityCache.get(key);
    if (tex) return tex;
    const s = this.tile;
    const W = s + 110; // 加宽：容纳放大后的中文名标签（如"远古巨龙"）
    const H = s + height + 70;
    tex = bake(W, H, ctx => {
      const cx = W / 2;
      const cy = H - s / 2; // 脚底锚点；脚下阴影改由渲染层的贴地 Mesh 提供
      ctx.save();
      ctx.translate(cx, cy);
      switch (e.kind) {
        case 'monster': {
          const def = monsterDef;
          if (def) {
            if (def.id === 'slime') {
              // 史莱姆保留原软体方块样式（不做人形纸片人）
              placeholderArt.drawBox(ctx, 0, 0, height, e.isElite ? 0.78 : 0.6, {
                top: mix(def.color, '#ffffff', 0.35),
                left: mix(def.color, '#000000', 0.35),
                right: mix(def.color, '#000000', 0.2),
                border: e.isElite ? '#ff8800' : def.color,
              }, { label: def.name, labelColor: e.isElite ? '#ffcc44' : '#ffffff' });
            } else {
              placeholderArt.drawPaperDoll(ctx, 0, 0, height, {
                body: def.color,
                border: e.isElite ? '#ff8800' : mix(def.color, '#000000', 0.45),
                accent: e.isElite ? '#ffcc44' : mix(def.color, '#ffffff', 0.42),
                label: def.name,
                labelColor: e.isElite ? '#ffcc44' : '#ffffff',
                weapon: 'claw',
                elite: !!e.isElite,
                horns: !!e.isElite,
              });
            }
          }
          break;
        }
        case 'boss': {
          const def = monsterDef;
          if (def) {
            placeholderArt.drawPaperDoll(ctx, 0, 0, height, {
              body: def.color,
              border: '#ff0044',
              accent: '#ff6b7a',
              label: def.name,
              labelColor: '#ff8a95',
              weapon: 'claw',
              elite: true,
              horns: true,
            });
          }
          break;
        }
        case 'chest': {
          const openedNow = this.chestOpened;
          const grand = e.chestTier === 'grand';
          const h = dataManager.config.heights.chest + (grand ? 8 : 0);
          placeholderArt.drawBox(ctx, 0, 0, h, grand ? 0.7 : 0.55, {
            top: openedNow ? '#aaaaaa' : '#ffe066',
            left: openedNow ? '#666666' : '#b8860b',
            right: openedNow ? '#777777' : '#daa520',
            border: openedNow ? '#888888' : '#ffcc00',
          }, { label: openedNow ? '' : grand ? '大宝箱' : '宝箱', labelColor: '#ffcc00' });
          break;
        }
        case 'potion': {
          const def = dataManager.getPotion(e.potionTier ?? '');
          const color = def?.color ?? '#ff5a7a';
          const h = dataManager.config.heights.potion;
          placeholderArt.drawBox(ctx, 0, 0, h, 0.36, {
            top: mix(color, '#ffffff', 0.6),
            left: mix(color, '#000000', 0.4),
            right: color,
            border: mix(color, '#ffffff', 0.75),
          }, { label: '药水', labelColor: color });
          break;
        }
        case 'cauldron': {
          const h = dataManager.config.heights.cauldron;
          placeholderArt.drawBox(ctx, 0, 0, h, 0.58, {
            top: '#4a3a63', left: '#241d30', right: '#332844', border: '#8a63d6',
          }, { label: '熬药大锅', labelColor: '#c9a3ff' });
          // 锅中翻涌的魔药
          ctx.fillStyle = 'rgba(126,255,178,0.9)';
          ctx.beginPath();
          ctx.ellipse(0, -h, s * 0.2, s * 0.09, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(220,255,235,0.85)';
          ctx.beginPath();
          ctx.ellipse(-s * 0.05, -h - 1, s * 0.05, s * 0.025, 0, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
        case 'shelf': {
          const h = dataManager.config.heights.shelf;
          placeholderArt.drawBox(ctx, 0, 0, h, 0.5, {
            top: '#8a6a45', left: '#4a3624', right: '#6b4e31', border: '#a9825a',
          }, { label: '药架', labelColor: '#ffd9a0' });
          // 架上陈列的彩色药瓶
          const bottleColors = ['#ff6b8a', '#6bd6ff', '#8aff9e', '#ffd166'];
          for (let i = 0; i < bottleColors.length; i++) {
            ctx.fillStyle = bottleColors[i];
            ctx.fillRect(-s * 0.28 + i * s * 0.16, -h - s * 0.14, s * 0.1, s * 0.14);
          }
          break;
        }
        case 'fountain': {
          const h = dataManager.config.heights.fountain;
          placeholderArt.drawBox(ctx, 0, 0, h, 0.66, {
            top: '#cfe0e6', left: '#7f949c', right: '#a3b7bf', border: '#e6f7ff',
          }, { label: '治疗泉', labelColor: '#8ff0ff' });
          // 清澈的泉水
          ctx.fillStyle = 'rgba(110,235,255,0.92)';
          ctx.beginPath();
          ctx.ellipse(0, -h, s * 0.24, s * 0.1, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(235,255,255,0.9)';
          ctx.beginPath();
          ctx.ellipse(0, -h - 1, s * 0.08, s * 0.035, 0, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
        case 'npc': {
          const def = dataManager.getNpc(e.npcId ?? '');

          const color = def?.color ?? '#44dd66';
          placeholderArt.drawPaperDoll(ctx, 0, 0, dataManager.config.heights.npc, {
            body: color,
            border: mix(color, '#000000', 0.42),
            accent: mix(color, '#ffffff', 0.45),
            label: def?.name ?? 'NPC',
            weapon: 'staff',
          });
          break;
        }
        case 'stair': {
          const w = s * 0.35;
          ctx.fillStyle = '#44ddff';
          ctx.fillRect(-w, -w, w * 2, w * 2);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#aaffff';
          ctx.strokeRect(-w, -w, w * 2, w * 2);
          ctx.font = 'bold 13px "Microsoft YaHei", sans-serif';
          ctx.textAlign = 'center';
          ctx.lineWidth = 3;
          ctx.strokeStyle = 'rgba(0,0,0,0.75)';
          const target = e.targetFloor ?? room.floorId + 1;
          ctx.strokeText(`▼${target}`, 0, -w - 8);
          ctx.fillStyle = '#44ddff';
          ctx.fillText(`▼${target}`, 0, -w - 8);
          break;
        }
        case 'torch': {
          const wallH = dataManager.config.heights.wallByRoom[room.type] ?? dataManager.config.heights.corridorWall;
          placeholderArt.drawTorch(ctx, 0, 0, wallH);
          break;
        }
        case 'pillar': {
          placeholderArt.drawPillar(ctx, 0, 0);
          break;
        }
        default:
          break;
      }
      ctx.restore();
    });
    this.entityCache.set(key, tex);
    return tex;
  }

  private chestOpened = false;

  /** 玩家精灵（人形纸片人 + 勇者标签；脚下阴影由渲染层贴地 Mesh 提供） */
  player(): HTMLCanvasElement {
    const key = 'player';
    let tex = this.entityCache.get(key);
    if (tex) return tex;
    const s = this.tile;
    const h = dataManager.config.heights.player;
    const W = s + 110;
    const H = s + h + 70;
    tex = bake(W, H, ctx => {
      const cx = W / 2;
      const cy = H - s / 2; // 脚底锚点；脚下阴影改由渲染层的贴地 Mesh 提供
      ctx.save();
      ctx.translate(cx, cy);
      placeholderArt.drawPaperDoll(ctx, 0, 0, h, {
        body: '#3f7fd6',
        head: '#f0c8a0',
        accent: '#ffd24a',
        border: '#1b4a91',
        label: '勇者',
        labelColor: '#ffffff',
        weapon: 'sword',
        elite: true,
      });
      ctx.restore();
    });
    this.entityCache.set(key, tex);
    return tex;
  }

  private entityKey(e: MapEntity, room: RoomData, def: MonsterDef | undefined, height: number): string {
    switch (e.kind) {
      case 'monster': return `m_${def?.id ?? '?'}_${e.isElite ? 1 : 0}`;
      case 'boss': return `b_${def?.id ?? '?'}`;
      case 'chest': return `c_${this.chestOpened ? 1 : 0}_${e.chestTier === 'grand' ? 1 : 0}`;
      case 'npc': return `n_${e.npcId ?? '?'}`;
      case 'stair': return `s_${e.targetFloor ?? room.floorId + 1}`;
      case 'torch': return `t_${room.type}`;
      case 'pillar': return 'p';
      case 'potion': return `po_${e.potionTier ?? '?'}`;
      case 'cauldron': return 'cauldron';
      case 'shelf': return 'shelf';
      case 'fountain': return 'fountain';
      default: return `x_${e.kind}`;
    }
    void height;
  }

  /** 自发光光晕纹理（径向渐变圆，按色相缓存，'add' 叠加 + 缩放调色） */
  glow(color: string): HTMLCanvasElement {
    let tex = this.glowCache.get(color);
    if (!tex) {
      tex = bake(128, 128, ctx => {
        const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 128, 128);
      });
      this.glowCache.set(color, tex);
    }
    return tex;
  }

  /** 丁达尔光锥（梯形渐变，白染色，可 tint/scale） */
  coneTex(): HTMLCanvasElement {
    if (!this.cone) {
      const w = 128;
      const h = 256;
      this.cone = bake(w, h, ctx => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, 'rgba(255,255,255,0.55)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(w * 0.42, 0);
        ctx.lineTo(w * 0.58, 0);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.closePath();
        ctx.fill();
      });
    }
    return this.cone;
  }

  /** 屏幕暗角（径向渐变，multiply 覆盖层） */
  vignetteTex(): HTMLCanvasElement {
    if (!this.vignette) {
      const size = 512;
      this.vignette = bake(size, size, ctx => {
        const g = ctx.createRadialGradient(size / 2, size / 2, size * 0.22, size / 2, size / 2, size * 0.62);
        g.addColorStop(0, '#ffffff');
        g.addColorStop(0.55, '#dfe2ea');
        g.addColorStop(1, '#9aa0b0');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, size, size);
      });
    }
    return this.vignette;
  }
}

export const textureGen = new HTMLCanvasElementGenerator();
