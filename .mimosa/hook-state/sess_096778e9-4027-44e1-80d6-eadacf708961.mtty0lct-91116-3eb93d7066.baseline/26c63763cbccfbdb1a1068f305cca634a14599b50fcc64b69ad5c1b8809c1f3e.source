/**
 * Three 粒子系统（原 PixiParticleSystem，迁移文档 5.6 / 技术方案 Phase 5）：
 * 爆发粒子（受击/拾取/升级）。保留原 API（burst/update/syncTo/clear/count），
 * 渲染由 Pixi 精灵改为 Three Sprite，坐标沿用世界像素（syncTo 时换算为世界单位）。
 */
import * as THREE from 'three';
import { dataManager } from '../core/DataManager';
import { projection } from '../render/Projection';

interface GpuParticle {
  /** 世界像素坐标（与逻辑层一致，避免改动调用方） */
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  view: THREE.Sprite | null;
}

let circleTex: THREE.CanvasTexture | null = null;
function getCircleTexture(): THREE.CanvasTexture {
  if (!circleTex) {
    const c = document.createElement('canvas');
    c.width = 16;
    c.height = 16;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(8, 8, 7, 0, Math.PI * 2);
    ctx.fill();
    circleTex = new THREE.CanvasTexture(c);
    circleTex.colorSpace = THREE.SRGBColorSpace;
  }
  return circleTex;
}

export class ThreeParticleSystem {
  private static instance: ThreeParticleSystem;
  private items: GpuParticle[] = [];

  private constructor() {}
  static getInstance(): ThreeParticleSystem {
    if (!ThreeParticleSystem.instance) ThreeParticleSystem.instance = new ThreeParticleSystem();
    return ThreeParticleSystem.instance;
  }

  get count(): number { return this.items.length; }

  /** 在 (x, y) 世界像素处爆发 count 个粒子 */
  burst(
    x: number, y: number, color: string, count: number,
    opts?: { speed?: number; life?: number; size?: number },
  ): void {
    const cap = dataManager.config.render.maxParticles;
    const speed = opts?.speed ?? 0.08;
    const life = opts?.life ?? 600;
    const size = opts?.size ?? 4;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const sp = speed * (0.6 + Math.random() * 0.8);
      this.items.push({
        x, y,
        vx: Math.cos(angle) * sp,
        vy: Math.sin(angle) * sp,
        life, maxLife: life,
        color, size, view: null,
      });
    }
    while (this.items.length > cap) this.removeAt(0);
  }

  update(deltaTime: number): void {
    const alive: GpuParticle[] = [];
    for (const p of this.items) {
      p.life -= deltaTime;
      p.x += p.vx * deltaTime;
      p.y += p.vy * deltaTime;
      p.vy += 0.00008 * deltaTime; // 轻微重力
      if (p.life > 0) alive.push(p);
      else this.disposeView(p);
    }
    this.items = alive;
  }

  /** 每帧由 ThreeRenderer 调用：挂到粒子层并同步世界坐标 */
  syncTo(group: THREE.Group): void {
    const ts = projection.tileSize;
    for (const p of this.items) {
      if (!p.view) {
        const s = (p.size * 2) / ts;
        p.view = new THREE.Sprite(new THREE.SpriteMaterial({
          map: getCircleTexture(),
          color: new THREE.Color(p.color),
          transparent: true,
          depthTest: true,
          depthWrite: false,
        }));
        p.view.scale.set(s, s, 1);
        p.view.renderOrder = 3;
      }
      if (p.view.parent !== group) group.add(p.view);
      const progress = 1 - p.life / p.maxLife;
      p.view.position.set(p.x / ts, 0.5 + progress * 0.6, p.y / ts);
      p.view.material.opacity = Math.max(0, Math.min(1, p.life / p.maxLife));
    }
  }

  clear(): void {
    for (const p of this.items) this.disposeView(p);
    this.items = [];
  }

  private removeAt(index: number): void {
    const p = this.items[index];
    if (p) {
      this.disposeView(p);
      this.items.splice(index, 1);
    }
  }

  private disposeView(p: GpuParticle): void {
    if (!p.view) return;
    p.view.parent?.remove(p.view);
    p.view.material.dispose();
    p.view = null;
  }
}
