/**
 * 占位符美术（文档三 第七节 + 文档五 4.3/4.4/4.5）：
 * 所有实体用带高度感的彩色方块/圆 + 2px边框 + 标签（≥12px）绘制。
 * 顶部略亮于侧面模拟立体；不同类型用颜色区分；重要物品发光；交互物脉动。
 * 正式素材按"素材ID命名规范"直接替换绘制函数，不动逻辑。
 */
import { projection } from './Projection';
import { dataManager } from '../core/DataManager';

export interface BoxColors {
  top: string;
  left: string;
  right: string;
  border: string;
}

/** 颜色表（文档五 4.5） */
export const PLACEHOLDER_COLORS = {
  player: '#4488ff',
  enemyNormal: '#ff4444',
  enemyElite: '#ff8800',
  enemyBoss: '#ff0044',
  npcMerchant: '#44dd66',
  npcOther: '#44aaff',
  chestClosed: '#ffcc00',
  chestOpened: '#888888',
  stairUp: '#ffdd00',
  stairDown: '#44ddff',
} as const;

export class PlaceholderArt {
  private static instance: PlaceholderArt | null = null;
  private constructor() {}
  static getInstance(): PlaceholderArt {
    if (!PlaceholderArt.instance) PlaceholderArt.instance = new PlaceholderArt();
    return PlaceholderArt.instance;
  }

  private get half(): number { return projection.tileSize / 2; }

  /**
   * 绘制俯视+高度的盒子（视角调整文档 2.3）：
   * 正方形底面 + 正面立起的侧身 + 顶面（略亮），底部在地面，顶部在 `地面 - height`。
   * baseX/baseY 为格子中心的地面投影坐标，height 为 z 高度（px），foot 为占格比例(0-1]。
   */
  drawBox(
    ctx: CanvasRenderingContext2D,
    baseX: number, baseY: number,
    height: number, foot: number,
    colors: BoxColors,
    opts: { label?: string; labelColor?: string; glow?: string; pulse?: number; alpha?: number } = {},
  ): void {
    const half = this.half * foot;
    const pulseScale = opts.pulse ? 1 + 0.06 * opts.pulse : 1;
    const w = half * pulseScale;

    ctx.save();
    if (opts.alpha !== undefined) ctx.globalAlpha = opts.alpha;

    // 外发光（重要物品：白色/彩色半透明外层）
    if (opts.glow) {
      ctx.save();
      ctx.globalAlpha = (opts.alpha ?? 1) * 0.35 * (0.7 + 0.3 * Math.sin(performance.now() / 300));
      ctx.fillStyle = opts.glow;
      ctx.beginPath();
      ctx.ellipse(baseX, baseY - height / 2, w * 1.6, w * 1.6 + height / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 正面立身（底部在地面，顶部在 地面-height）
    ctx.fillStyle = colors.left;
    ctx.fillRect(baseX - w, baseY - w - height, w * 2, height);

    // 底座（地面处的脚印）
    ctx.fillStyle = colors.right;
    ctx.fillRect(baseX - w, baseY - w, w * 2, w * 2);

    // 顶面（略亮，覆盖立身顶端）
    ctx.fillStyle = colors.top;
    ctx.fillRect(baseX - w, baseY - w - height, w * 2, w * 2);

    // 2px 边框（类型色）
    ctx.lineWidth = 2;
    ctx.strokeStyle = colors.border;
    ctx.strokeRect(baseX - w, baseY - w - height, w * 2, height + w * 2);

    // 标签（物体上方，≥12px）
    if (opts.label) {
      ctx.font = 'bold 13px "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.75)';
      ctx.strokeText(opts.label, baseX, baseY - w - height - 8);
      ctx.fillStyle = opts.labelColor ?? '#ffffff';
      ctx.fillText(opts.label, baseX, baseY - w - height - 8);
    }
    ctx.restore();
  }

  /**
   * 纸片人（3渲2 billboard）：始终正面朝向摄像机的简笔人形，替代原来的"俯视方块"。
   * 以脚底中心为原点，向上为 -y。分层：腿 → 躯干 → 手臂/武器 → 头 → 标签。
   */
  drawPaperDoll(
    ctx: CanvasRenderingContext2D,
    baseX: number, baseY: number,
    height: number,
    opts: {
      body: string;
      head?: string;
      accent?: string;
      border?: string;
      label?: string;
      labelColor?: string;
      weapon?: 'sword' | 'claw' | 'staff' | 'none';
      horns?: boolean;
      elite?: boolean;
    },
  ): void {
    const H = Math.max(16, height);
    const headR = H * 0.16;
    const headCy = -H * 0.86;
    const shoulderY = headCy + headR * 1.15;
    const hipY = -H * 0.38;
    const bodyHW = H * 0.16;

    const bodyCol = opts.body;
    const headCol = opts.head ?? this.lighten(bodyCol, 0.3);
    const accent = opts.accent ?? this.lighten(bodyCol, 0.45);
    const border = opts.border ?? this.darken(bodyCol, 0.45);

    ctx.save();
    ctx.translate(baseX, baseY);
    ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(1.5, H * 0.035);
    ctx.strokeStyle = border;

    // 腿
    ctx.fillStyle = this.darken(bodyCol, 0.4);
    const legW = H * 0.075;
    const legGap = H * 0.055;
    for (const sgn of [-1, 1]) {
      ctx.beginPath();
      ctx.rect(sgn * legGap - legW / 2, hipY, legW, -hipY);
      ctx.fill();
      ctx.stroke();
    }

    // 躯干（上宽下窄梯形）
    ctx.fillStyle = bodyCol;
    ctx.beginPath();
    ctx.moveTo(-bodyHW * 1.05, shoulderY);
    ctx.lineTo(bodyHW * 1.05, shoulderY);
    ctx.lineTo(bodyHW * 0.82, hipY);
    ctx.lineTo(-bodyHW * 0.82, hipY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 腰带
    ctx.fillStyle = accent;
    ctx.fillRect(-bodyHW * 0.9, hipY - H * 0.06, bodyHW * 1.8, H * 0.05);

    // 手臂
    ctx.fillStyle = this.darken(bodyCol, 0.16);
    const armW = H * 0.06;
    const armLen = (hipY - shoulderY) * 0.84;
    for (const sgn of [-1, 1]) {
      const ax = sgn > 0 ? bodyHW * 1.02 : -bodyHW * 1.02 - armW;
      ctx.beginPath();
      ctx.rect(ax, shoulderY + H * 0.02, armW, armLen);
      ctx.fill();
      ctx.stroke();
    }

    // 肩甲（精英 / 玩家）
    if (opts.elite) {
      ctx.fillStyle = accent;
      for (const sgn of [-1, 1]) {
        ctx.beginPath();
        ctx.ellipse(sgn * bodyHW * 1.05, shoulderY + H * 0.02, H * 0.075, H * 0.05, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    // 头
    ctx.fillStyle = headCol;
    ctx.beginPath();
    ctx.arc(0, headCy, headR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // 角（Boss / 精英）
    if (opts.horns) {
      ctx.fillStyle = accent;
      for (const sgn of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(sgn * headR * 0.72, headCy - headR * 0.42);
        ctx.lineTo(sgn * headR * 1.55, headCy - headR * 1.95);
        ctx.lineTo(sgn * headR * 0.22, headCy - headR * 0.92);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }

    // 眼睛（保证能看出正面朝向）
    ctx.fillStyle = 'rgba(20,20,28,0.9)';
    for (const sgn of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(sgn * headR * 0.36, headCy + headR * 0.06, headR * 0.15, headR * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 武器
    if (opts.weapon === 'sword') {
      const hx = bodyHW * 1.32;
      ctx.fillStyle = '#dfe6f2';
      ctx.beginPath();
      ctx.rect(hx, headCy - H * 0.01, H * 0.055, (hipY - headCy) * 0.96);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = accent;
      ctx.fillRect(hx - H * 0.05, hipY - H * 0.11, H * 0.155, H * 0.035);
      ctx.fillStyle = '#6b4a2a';
      ctx.fillRect(hx + H * 0.005, hipY - H * 0.08, H * 0.045, H * 0.09);
    } else if (opts.weapon === 'claw') {
      ctx.strokeStyle = accent;
      ctx.lineWidth = Math.max(1.5, H * 0.03);
      for (let i = 0; i < 3; i++) {
        const yy = shoulderY + H * 0.03 + i * H * 0.05;
        ctx.beginPath();
        ctx.moveTo(bodyHW * 1.08, yy);
        ctx.lineTo(bodyHW * 1.72, yy + H * 0.035);
        ctx.stroke();
      }
      ctx.strokeStyle = border;
      ctx.lineWidth = Math.max(1.5, H * 0.035);
    } else if (opts.weapon === 'staff') {
      ctx.strokeStyle = '#7a5230';
      ctx.lineWidth = Math.max(2, H * 0.045);
      ctx.beginPath();
      ctx.moveTo(-bodyHW * 1.42, hipY);
      ctx.lineTo(-bodyHW * 1.42, headCy - headR * 0.5);
      ctx.stroke();
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(-bodyHW * 1.42, headCy - headR * 1.05, H * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = border;
      ctx.lineWidth = Math.max(1.5, H * 0.035);
    }

    // 标签（头顶上方）
    if (opts.label) {
      // 3D 内文字需要足够大才可读（贴图会被缩放），并同步加粗描边
      const fontSize = Math.max(18, Math.round(H * 0.44));
      ctx.font = `bold ${fontSize}px "Microsoft YaHei", sans-serif`;
      ctx.textAlign = 'center';
      ctx.lineWidth = Math.max(3, fontSize * 0.18);
      ctx.strokeStyle = 'rgba(0,0,0,0.78)';
      const ly = headCy - headR - (opts.horns ? H * 0.13 : H * 0.06);
      ctx.strokeText(opts.label, 0, ly);
      ctx.fillStyle = opts.labelColor ?? '#ffffff';
      ctx.fillText(opts.label, 0, ly);
    }
    ctx.restore();
  }

  /** 玩家：蓝色方块 + 标签"勇者" + 闪烁光标感 */
  drawPlayer(ctx: CanvasRenderingContext2D, baseX: number, baseY: number): void {
    const h = dataManager.config.heights.player;
    this.drawBox(ctx, baseX, baseY, h, 0.62, {
      top: '#66aaff', left: '#2266cc', right: '#3177dd', border: PLACEHOLDER_COLORS.player,
    }, { label: '勇者', glow: '#4488ff' });
  }

  /** 怪物：红/橙方块，按强度区分大小，精英金边框，Boss最大红边框 */
  drawMonster(
    ctx: CanvasRenderingContext2D, baseX: number, baseY: number,
    name: string, color: string, isElite: boolean, isBoss: boolean, height: number,
  ): void {
    const foot = isBoss ? 0.95 : isElite ? 0.78 : 0.6;
    const border = isBoss ? PLACEHOLDER_COLORS.enemyBoss : isElite ? PLACEHOLDER_COLORS.enemyElite : color;
    this.drawBox(ctx, baseX, baseY, height, foot, {
      top: this.lighten(color, 0.35), left: this.darken(color, 0.35), right: this.darken(color, 0.2), border,
    }, {
      label: name,
      labelColor: isBoss ? '#ff5566' : isElite ? '#ffcc44' : '#ffffff',
      glow: isBoss ? '#ff2244' : undefined,
    });
  }

  /** 宝箱：金色方块（开启后变灰），交互物脉动 */
  drawChest(ctx: CanvasRenderingContext2D, baseX: number, baseY: number, opened: boolean, grand: boolean): void {
    const h = dataManager.config.heights.chest + (grand ? 8 : 0);
    const color = opened ? PLACEHOLDER_COLORS.chestOpened : PLACEHOLDER_COLORS.chestClosed;
    const pulse = opened ? 0 : 0.5 + 0.5 * Math.sin(performance.now() / 400);
    this.drawBox(ctx, baseX, baseY, h, grand ? 0.7 : 0.55, {
      top: opened ? '#aaaaaa' : '#ffe066', left: opened ? '#666666' : '#b8860b', right: opened ? '#777777' : '#daa520', border: color,
    }, { label: opened ? '' : grand ? '大宝箱' : '宝箱', labelColor: '#ffcc00', pulse });
  }

  /** NPC：绿色方块 + 标签 */
  drawNpc(ctx: CanvasRenderingContext2D, baseX: number, baseY: number, name: string, color: string): void {
    const h = dataManager.config.heights.npc;
    this.drawBox(ctx, baseX, baseY, h, 0.62, {
      top: this.lighten(color, 0.35), left: this.darken(color, 0.3), right: this.darken(color, 0.15), border: color,
    }, { label: name, labelColor: '#ffffff', pulse: 0.5 + 0.5 * Math.sin(performance.now() / 500) });
  }

  /** 楼梯：下楼层发光方块（▼ 标记，蓝白光），脉动 */
  drawStair(ctx: CanvasRenderingContext2D, baseX: number, baseY: number, targetFloor: number): void {
    const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 600);
    const w = this.half * 0.7;
    ctx.save();
    // 光晕
    ctx.globalAlpha = 0.3 + 0.25 * pulse;
    ctx.fillStyle = PLACEHOLDER_COLORS.stairDown;
    ctx.beginPath();
    ctx.ellipse(baseX, baseY, w * 1.6, w * 1.6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    // 主体：地面发光方块 + ▼ 标记
    ctx.fillStyle = '#44ddff';
    ctx.fillRect(baseX - w, baseY - w, w * 2, w * 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#aaffff';
    ctx.strokeRect(baseX - w, baseY - w, w * 2, w * 2);
    ctx.font = 'bold 22px "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(0,0,0,0.78)';
    ctx.strokeText(`▼${targetFloor}`, baseX, baseY - w - 12);
    ctx.fillStyle = '#44ddff';
    ctx.fillText(`▼${targetFloor}`, baseX, baseY - w - 8);
    ctx.restore();
  }

  /** 火把：立杆 + 火焰（壁挂火把贴墙，装饰火把立地） */
  drawTorch(ctx: CanvasRenderingContext2D, baseX: number, baseY: number, wallH: number): void {
    const h = dataManager.config.heights.torch;
    const topY = baseY - h;
    ctx.save();
    // 火把杆
    ctx.strokeStyle = '#7a5230';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(baseX, baseY - (wallH > 0 ? wallH * 0.55 : 0));
    ctx.lineTo(baseX, topY);
    ctx.stroke();
    // 火焰（闪烁）
    const flick = 0.7 + 0.3 * Math.abs(Math.sin(performance.now() / 90));
    ctx.fillStyle = '#ff8833';
    ctx.beginPath();
    ctx.ellipse(baseX, topY - 4, 5 * flick, 9 * flick, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffcc66';
    ctx.beginPath();
    ctx.ellipse(baseX, topY - 2, 3 * flick, 5 * flick, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  /** 柱子：细高石柱 */
  drawPillar(ctx: CanvasRenderingContext2D, baseX: number, baseY: number): void {
    this.drawBox(ctx, baseX, baseY, dataManager.config.heights.pillar, 0.4, {
      top: '#cccccc', left: '#777777', right: '#999999', border: '#aaaaaa',
    });
  }

  private lighten(hex: string, amount: number): string {
    return this.mix(hex, '#ffffff', amount);
  }

  private darken(hex: string, amount: number): string {
    return this.mix(hex, '#000000', amount);
  }

  private mix(a: string, b: string, t: number): string {
    const pa = this.parseHex(a);
    const pb = this.parseHex(b);
    const r = Math.round(pa.r + (pb.r - pa.r) * t);
    const g = Math.round(pa.g + (pb.g - pa.g) * t);
    const bl = Math.round(pa.b + (pb.b - pa.b) * t);
    return `rgb(${r},${g},${bl})`;
  }

  private parseHex(hex: string): { r: number; g: number; b: number } {
    const m = hex.replace('#', '');
    return {
      r: parseInt(m.substring(0, 2), 16),
      g: parseInt(m.substring(2, 4), 16),
      b: parseInt(m.substring(4, 6), 16),
    };
  }
}

export const placeholderArt = (() => PlaceholderArt.getInstance())();
