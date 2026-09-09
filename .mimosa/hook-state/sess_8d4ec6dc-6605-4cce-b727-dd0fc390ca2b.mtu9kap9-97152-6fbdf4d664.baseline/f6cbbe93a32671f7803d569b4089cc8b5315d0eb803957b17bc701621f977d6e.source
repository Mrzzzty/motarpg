/**
 * 区段氛围粒子（游戏文案+美术规格 v1 §0/§2）：
 * 低密度、风格化粒子（方形/圆点 sprite，禁写实烟雾），用于氛围而非遮挡。
 *
 * - spore    苔园锻窟（16–40）：悬浮孢子（绿点）+ 炉火火星（橙点）缓升
 * - dust     图书馆（41–60）：暖色微尘缓慢漂移（斜射尘埃光束的静态质感）
 * - stardust 观星台（61–80）：星点缓慢漂移 + 偶发流星（细长划痕）
 * - ember    钟楼（81–100）：机械冷蓝光斑明灭
 */
import * as THREE from 'three';
import type { TierParticle } from '../data/tiers';

interface AmbientItem {
  sprite: THREE.Sprite;
  /** 0..1 循环相位 */
  phase: number;
  /** 循环速度（1/s） */
  speed: number;
  /** 水平漂移幅度 */
  drift: number;
  /** 颜色序号（多色配置时轮换） */
  colorIdx: number;
  baseSize: number;
}

interface AmbientSpec {
  colors: string[];
  count: number;
  /** 粒子上升速度（世界单位/秒，可负=下沉） */
  rise: number;
  drift: number;
  size: [number, number];
  shape: 'dot' | 'square';
  /** 流星概率（次/秒），>0 时额外生成拖长划痕 */
  meteorPerSec?: number;
}

const SPECS: Record<Exclude<TierParticle, 'none'>, AmbientSpec> = {
  spore: {
    colors: ['#9ad97a', '#ffb060', '#9ad97a', '#e8954a'],
    count: 26, rise: 0.32, drift: 0.5, size: [0.05, 0.11], shape: 'dot',
  },
  dust: {
    colors: ['#ffe9c0', '#e8d0a0'],
    count: 22, rise: 0.05, drift: 0.3, size: [0.04, 0.09], shape: 'dot',
  },
  stardust: {
    colors: ['#cfe0ff', '#e8eaff', '#b0c0ff'],
    count: 30, rise: -0.04, drift: 0.55, size: [0.04, 0.1], shape: 'dot',
    meteorPerSec: 0.22,
  },
  ember: {
    colors: ['#7ab8ff', '#a0d0ff', '#5a9ae8'],
    count: 20, rise: 0.1, drift: 0.22, size: [0.05, 0.1], shape: 'square',
  },
};

/** 圆点 / 方形 两张白模贴图（着色复用） */
function shapeTexture(shape: 'dot' | 'square'): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 16;
  c.height = 16;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  if (shape === 'dot') {
    ctx.beginPath();
    ctx.arc(8, 8, 7, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillRect(2, 2, 12, 12);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class AmbientParticles {
  private static instance: AmbientParticles;
  static getInstance(): AmbientParticles {
    if (!AmbientParticles.instance) AmbientParticles.instance = new AmbientParticles();
    return AmbientParticles.instance;
  }

  private group: THREE.Group | null = null;
  private items: AmbientItem[] = [];
  private spec: AmbientSpec | null = null;
  private texCache = new Map<string, THREE.CanvasTexture>();
  /** 流星（细长拉伸 sprite，一次性） */
  private meteor: { sprite: THREE.Sprite; vx: number; vz: number; life: number; maxLife: number } | null = null;
  private meteorCooldown = 0;
  /** 覆盖注视点的活动半径（世界单位） */
  private static readonly RADIUS = 13;

  private constructor() {}

  /** 切换区段粒子基调；'none' 清空 */
  configure(kind: TierParticle): void {
    if (this.spec === (kind === 'none' ? null : SPECS[kind])) return;
    this.clear();
    if (kind === 'none') return;
    this.spec = SPECS[kind];
    for (let i = 0; i < this.spec.count; i++) this.items.push(this.makeItem(this.spec, i));
  }

  private makeItem(spec: AmbientSpec, i: number): AmbientItem {
    const texKey = `t_${spec.shape}`;
    let tex = this.texCache.get(texKey);
    if (!tex) { tex = shapeTexture(spec.shape); this.texCache.set(texKey, tex); }
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex,
      color: new THREE.Color(spec.colors[i % spec.colors.length]),
      transparent: true,
      opacity: 0,
      depthTest: true,
      depthWrite: false,
    }));
    sprite.renderOrder = 3;
    const [smin, smax] = spec.size;
    return {
      sprite,
      phase: Math.random(),
      speed: 0.05 + Math.random() * 0.08,
      drift: spec.drift * (0.5 + Math.random()),
      colorIdx: i % spec.colors.length,
      baseSize: smin + Math.random() * (smax - smin),
    };
  }

  /** 挂到渲染粒子层（ThreeRenderer 每帧调用） */
  syncTo(group: THREE.Group): void {
    if (this.group !== group) {
      this.group = group;
      for (const it of this.items) group.add(it.sprite);
      if (this.meteor) group.add(this.meteor.sprite);
    }
  }

  /** 每帧推进：围绕相机注视点 (fx,fz) 循环漂浮 */
  update(dtSec: number, fx: number, fz: number, timeSec: number): void {
    const spec = this.spec;
    if (!spec || !this.group) return;
    const R = AmbientParticles.RADIUS;
    for (const it of this.items) {
      it.phase = (it.phase + it.speed * dtSec) % 1;
      const p = it.phase;
      // 活动范围：注视点周围环形区域，随相位循环
      const ang = it.phase * Math.PI * 2 + it.colorIdx * 1.7;
      const x = fx + Math.sin(ang) * R * (0.35 + (it.drift / 2) * 0.65);
      const z = fz + Math.cos(ang * 0.8 + 1.3) * R * 0.75;
      const y = 0.3 + p * (2.6 + (it.colorIdx % 3) * 0.8);
      // 上升（rise 可为负=缓降）+ 水平微漂（正弦，粒子不重合）
      it.sprite.position.set(
        x + Math.sin(timeSec * 0.6 + it.colorIdx * 2.1) * it.drift,
        spec.rise >= 0 ? y : 3.4 - y,
        z + Math.cos(timeSec * 0.5 + it.colorIdx * 1.3) * it.drift * 0.6,
      );
      // 两端淡出、中段最亮（低密度氛围，不遮挡）
      const mat = it.sprite.material;
      mat.opacity = Math.sin(p * Math.PI) * 0.75;
      const s = it.baseSize * (0.8 + 0.3 * Math.sin(timeSec * 1.1 + it.colorIdx));
      it.sprite.scale.set(s, s, 1);
    }

    // 偶发流星（观星台）：细长 sprite 斜划
    if (spec.meteorPerSec && spec.meteorPerSec > 0) {
      this.meteorCooldown -= dtSec;
      if (!this.meteor && this.meteorCooldown <= 0) {
        this.meteorCooldown = 1 / spec.meteorPerSec * (0.6 + Math.random());
        this.spawnMeteor(fx, fz);
      }
    }
    if (this.meteor) {
      const m = this.meteor;
      m.life -= dtSec;
      if (m.life <= 0) {
        this.group.remove(m.sprite);
        m.sprite.material.dispose();
        this.meteor = null;
      } else {
        m.sprite.position.x += m.vx * dtSec;
        m.sprite.position.z += m.vz * dtSec;
        m.sprite.position.y -= 5.5 * dtSec;
        m.sprite.material.opacity = Math.min(1, m.life / m.maxLife * 1.6) * 0.9;
      }
    }
  }

  private spawnMeteor(fx: number, fz: number): void {
    if (!this.group) return;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.items[0]?.sprite.material.map ?? shapeTexture('dot'),
      color: new THREE.Color('#eaf2ff'),
      transparent: true,
      opacity: 0.9,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    // 细长拉伸：用 scale 表现划痕
    sprite.scale.set(0.5, 0.05, 1);
    const fromX = fx + (Math.random() - 0.5) * 10;
    sprite.position.set(fromX, 9 + Math.random() * 4, fz - 4 - Math.random() * 4);
    sprite.renderOrder = 4;
    this.group.add(sprite);
    const dir = Math.random() > 0.5 ? 1 : -1;
    this.meteor = { sprite, vx: dir * (3.5 + Math.random() * 2), vz: 1.2, life: 0.9, maxLife: 0.9 };
  }

  clear(): void {
    for (const it of this.items) {
      it.sprite.parent?.remove(it.sprite);
      it.sprite.material.dispose();
    }
    this.items = [];
    if (this.meteor) {
      this.meteor.sprite.parent?.remove(this.meteor.sprite);
      this.meteor.sprite.material.dispose();
      this.meteor = null;
    }
    this.spec = null;
  }
}
