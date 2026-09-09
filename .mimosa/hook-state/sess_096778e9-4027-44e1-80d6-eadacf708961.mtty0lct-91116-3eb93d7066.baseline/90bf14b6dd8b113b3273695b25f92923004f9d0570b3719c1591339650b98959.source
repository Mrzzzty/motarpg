/**
 * 粒子系统（Three 版，迁移文档 5.6 / 技术方案 Phase 5）：
 * 伤害数字 / 拾取飘字 / 闪光粒子。逻辑与旧 API 完全一致（游戏层零改动），
 * 渲染由 Pixi 精灵/文本改为 Three Sprite：
 * - 文本：Canvas 2D 烘焙成贴图后缓存（同一文本/颜色/字号只烘焙一次）
 * - 圆形粒子：共享圆点贴图 + color 着色
 * 每帧由 ThreeRenderer 调用 syncTo 同步到世界坐标粒子层。
 */
import * as THREE from 'three';
import type { Particle } from '../types';
import { dataManager } from '../core/DataManager';
import { projection } from '../render/Projection';
import { ThreeParticleSystem } from './ThreeParticleSystem';

interface ActiveParticle extends Particle {
  view: THREE.Sprite;
}

/** 文本贴图缓存：同一 (文本/颜色/字号) 只烘焙一次 */
const textCache = new Map<string, THREE.CanvasTexture>();

function getTextTexture(text: string, color: string, size: number): THREE.CanvasTexture {
  const key = `${text}|${color}|${size}`;
  let tex = textCache.get(key);
  if (!tex) {
    const font = `bold ${size * 2}px "Microsoft YaHei", sans-serif`;
    const measure = document.createElement('canvas').getContext('2d')!;
    measure.font = font;
    const w = Math.max(8, Math.ceil(measure.measureText(text).width) + 20);
    const h = Math.ceil(size * 2 + 18);
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#000000';
    ctx.strokeText(text, w / 2, h / 2);
    ctx.fillStyle = color;
    ctx.fillText(text, w / 2, h / 2);
    tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    textCache.set(key, tex);
  }
  return tex;
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

export class ParticleSystem {
  private static instance: ParticleSystem;
  private particles: ActiveParticle[] = [];

  private constructor() {}
  static getInstance(): ParticleSystem {
    if (!ParticleSystem.instance) ParticleSystem.instance = new ParticleSystem();
    return ParticleSystem.instance;
  }

  /** 飘字（世界格坐标） */
  floatText(col: number, row: number, text: string, color = '#ffffff'): void {
    const p = projection.tileCenter(row, col);
    this.push({
      x: p.x, y: p.y - 30, vx: 0, vy: -0.03, life: 1100, maxLife: 1100,
      color, size: 15, type: 'text', text, opacity: 1,
    });
  }

  /** 闪光粒子（拾取/升级），世界格坐标 —— 交由 GPU 批渲染系统 */
  sparkle(col: number, row: number, color = '#ffdd44', count = 8): void {
    const p = projection.tileCenter(row, col);
    ThreeParticleSystem.getInstance().burst(p.x, p.y, color, count, { speed: 0.08, life: 600, size: 4 });
  }

  private push(p: Particle): void {
    // 文字粒子为独立贴图，上限取 GPU 粒子容量的一半，避免贴图对象堆积
    const cap = Math.max(50, Math.floor(dataManager.config.render.maxParticles / 2));
    if (this.particles.length >= cap) this.destroyView(this.particles.shift()!);
    const ts = projection.tileSize;
    let view: THREE.Sprite;
    if (p.type === 'text' && p.text) {
      const tex = getTextTexture(p.text, p.color, p.size);
      const img = tex.image as HTMLCanvasElement;
      const hUnits = (p.size * 2) / ts;
      view = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex, transparent: true, depthTest: true, depthWrite: false,
      }));
      view.scale.set(hUnits * (img.width / img.height), hUnits, 1);
    } else {
      const hUnits = (p.size * 2) / ts;
      view = new THREE.Sprite(new THREE.SpriteMaterial({
        map: getCircleTexture(), color: new THREE.Color(p.color),
        transparent: true, depthTest: true, depthWrite: false,
      }));
      view.scale.set(hUnits, hUnits, 1);
    }
    view.renderOrder = 4; // 飘字/粒子始终显示在场景之上
    this.particles.push({ ...p, view });
  }

  update(deltaTime: number): void {
    for (const p of this.particles) {
      p.life -= deltaTime;
      p.x += p.vx * deltaTime;
      p.y += p.vy * deltaTime;
      if (p.type === 'circle') p.vy += 0.0001 * deltaTime;
      p.opacity = Math.max(0, Math.min(1, p.life / p.maxLife));
      if (p.life <= 0) this.destroyView(p);
    }
    this.particles = this.particles.filter(p => p.life > 0);
  }

  /** 由 ThreeRenderer 每帧调用：挂到粒子层并同步世界坐标 */
  syncTo(group: THREE.Group): void {
    const ts = projection.tileSize;
    for (const p of this.particles) {
      if (p.view.parent !== group) group.add(p.view);
      const progress = 1 - p.life / p.maxLife;
      // 飘字从 1.2 高度继续上升；圆形粒子贴近地面
      const y = p.type === 'text' ? 1.2 + progress * 0.9 : 0.6 + progress * 0.4;
      p.view.position.set(p.x / ts, y, p.y / ts);
      p.view.material.opacity = p.opacity;
    }
  }

  private destroyView(p: ActiveParticle): void {
    p.view.parent?.remove(p.view);
    p.view.material.dispose();
  }

  clear(): void {
    for (const p of this.particles) this.destroyView(p);
    this.particles = [];
  }
}
