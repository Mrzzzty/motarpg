/**
 * 粒子系统（规格 模块L.1）：飘字、暴击、升级光环、胜利烟花、藏品星光。
 * 性能约束：单次≤80，总量≤200，100-500ms消亡。
 */
import type { Particle } from '../types';
import { eventBus } from '../core/EventBus';

const MAX_PARTICLES = 200;

export class ParticleSystem {
  private static instance: ParticleSystem;
  private particles: Particle[] = [];

  private constructor() {
    this.bindEvents();
  }

  static getInstance(): ParticleSystem {
    if (!ParticleSystem.instance) {
      ParticleSystem.instance = new ParticleSystem();
    }
    return ParticleSystem.instance;
  }

  private bindEvents(): void {
    eventBus.on('goldChanged', p => {
      if (p.delta > 0) this.emitText(this.playerScreenX(), this.playerScreenY() - 20, `+${p.delta} 金币`, '#ffd700');
    });
    eventBus.on('expChanged', p => {
      if (p.delta > 0) this.emitText(this.playerScreenX() + 20, this.playerScreenY() - 40, `+${p.delta} 经验`, '#7ec8ff');
    });
    eventBus.on('hpChanged', p => {
      if (p.delta < 0) this.emitText(this.playerScreenX() - 10, this.playerScreenY() - 10, `${p.delta}`, '#ff5252');
      else if (p.delta > 0) this.emitText(this.playerScreenX() - 10, this.playerScreenY() - 10, `+${p.delta}`, '#66bb6a');
    });
    eventBus.on('soulChanged', p => {
      if (p.delta > 0) this.emitText(this.playerScreenX() + 10, this.playerScreenY() - 55, `+${p.delta} 魂晶`, '#b388ff');
    });
    eventBus.on('levelUp', () => this.emitLevelUp(this.playerScreenX(), this.playerScreenY()));
    eventBus.on('collectibleCollected', p => {
      void p;
      this.emitCollectible(this.playerScreenX(), this.playerScreenY());
    });
    eventBus.on('bossDefeated', () => this.emitVictory(this.playerScreenX(), this.playerScreenY()));
    eventBus.on('chestOpened', () => this.emitBurst(this.playerScreenX(), this.playerScreenY() - 20, 24, '#ffd700', 3));
  }

  private playerScreenX(): number { return 480; }
  private playerScreenY(): number { return 320; }

  emit(particle: Particle): void {
    if (this.particles.length >= MAX_PARTICLES) {
      this.particles.shift();
    }
    this.particles.push(particle);
  }

  emitText(x: number, y: number, text: string, color = '#ffffff', size = 16): void {
    this.emit({
      x, y, vx: 0, vy: -0.05, life: 900, maxLife: 900,
      color, size, type: 'text', text, opacity: 1,
    });
  }

  emitBurst(x: number, y: number, count: number, color = '#ffd700', spread = 2): void {
    const n = Math.min(count, 80);
    for (let i = 0; i < n; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.05 + Math.random() * 0.2) * spread;
      this.emit({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 0.05,
        life: 400 + Math.random() * 200, maxLife: 600,
        color, size: 2 + Math.random() * 3, type: 'spark', opacity: 1, gravity: 0.0004,
      });
    }
  }

  emitLevelUp(x: number, y: number): void {
    this.emitText(x, y - 60, '升级！', '#ffd700', 24);
    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * i) / 40;
      this.emit({
        x: x + Math.cos(angle) * 14, y: y + Math.sin(angle) * 14,
        vx: Math.cos(angle) * 0.08, vy: Math.sin(angle) * 0.08,
        life: 500, maxLife: 500, color: '#ffe082', size: 3, type: 'star', opacity: 1,
      });
    }
  }

  emitVictory(x: number, y: number): void {
    this.emitText(x, y - 70, '使徒陨落！', '#ff6f00', 26);
    const colors = ['#ffd700', '#ff6f00', '#fff176', '#ffab40'];
    for (let round = 0; round < 3; round++) {
      window.setTimeout(() => {
        this.emitBurst(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 80, 26, colors[round % colors.length], 3);
      }, round * 180);
    }
  }

  emitCollectible(x: number, y: number): void {
    this.emitText(x, y - 50, '圣物显现', '#b388ff', 20);
    for (let i = 0; i < 26; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 10 + Math.random() * 24;
      this.emit({
        x: x + Math.cos(angle) * dist, y: y + Math.sin(angle) * dist,
        vx: -Math.cos(angle) * 0.04, vy: -Math.sin(angle) * 0.04,
        life: 450, maxLife: 450, color: '#ce93d8', size: 2.5, type: 'star', opacity: 1,
      });
    }
  }

  /** 暴击大字（战斗面板内展示坐标由UI传入） */
  emitCrit(x: number, y: number): void {
    this.emitText(x, y, '暴击！', '#ff5252', 22);
  }

  update(deltaTime: number): void {
    for (const p of this.particles) {
      p.life -= deltaTime;
      p.x += p.vx * deltaTime;
      p.y += p.vy * deltaTime;
      if (p.gravity) p.vy += p.gravity * deltaTime;
      p.opacity = Math.max(0, p.life / p.maxLife);
    }
    this.particles = this.particles.filter(p => p.life > 0);
  }

  render(ctx: CanvasRenderingContext2D): void {
    for (const p of this.particles) {
      ctx.save();
      ctx.globalAlpha = p.opacity;
      switch (p.type) {
        case 'text':
          ctx.font = `bold ${p.size}px "Microsoft YaHei", sans-serif`;
          ctx.fillStyle = p.color;
          ctx.strokeStyle = 'rgba(0,0,0,0.7)';
          ctx.lineWidth = 3;
          ctx.textAlign = 'center';
          ctx.strokeText(p.text ?? '', p.x, p.y);
          ctx.fillText(p.text ?? '', p.x, p.y);
          break;
        case 'circle':
        case 'glow':
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'spark': {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 40, p.y - p.vy * 40);
          ctx.stroke();
          break;
        }
        case 'star': {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            const outer = p.size * 2;
            const inner = p.size * 0.8;
            ctx.lineTo(p.x + Math.cos(a) * outer, p.y + Math.sin(a) * outer);
            ctx.lineTo(p.x + Math.cos(a + Math.PI / 5) * inner, p.y + Math.sin(a + Math.PI / 5) * inner);
          }
          ctx.closePath();
          ctx.fill();
          break;
        }
        default:
          break;
      }
      ctx.restore();
    }
  }

  clear(): void {
    this.particles = [];
  }

  get count(): number {
    return this.particles.length;
  }
}
