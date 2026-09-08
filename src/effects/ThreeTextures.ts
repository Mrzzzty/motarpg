/**
 * Three 纹理工厂：把 TextureGenerator 产出的 HTMLCanvasElement 包装为 THREE.CanvasTexture。
 *
 * 纹理本体（Canvas）由 textureGen 按变体键缓存，此处只负责引擎侧包装与采样设置，
 * 保证同一个 canvas 始终复用同一个 GPU 纹理实例（避免重复上传）。
 */
import * as THREE from 'three';

const cache = new WeakMap<HTMLCanvasElement, THREE.CanvasTexture>();

/** Canvas → CanvasTexture（同 canvas 复用同一纹理实例） */
export function canvasTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  let t = cache.get(canvas);
  if (!t) {
    t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    // 像素风：放大用 Nearest 保持锐利，缩小用 mipmap 避免闪烁
    t.magFilter = THREE.NearestFilter;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.anisotropy = 4;
    cache.set(canvas, t);
  }
  return t;
}

/** 纯色 1x1 贴图（程序化材质用，避免为纯色重复建 canvas） */
const solidCache = new Map<number, THREE.CanvasTexture>();
export function solidTexture(hex: number): THREE.CanvasTexture {
  let t = solidCache.get(hex);
  if (!t) {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = `#${hex.toString(16).padStart(6, '0')}`;
    ctx.fillRect(0, 0, 1, 1);
    t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    t.magFilter = THREE.NearestFilter;
    solidCache.set(hex, t);
  }
  return t;
}

/** 地面/墙面砖块纹理（文档 5.3：Canvas → Texture，无外部图片） */
let brickTex: THREE.CanvasTexture | null = null;
export function brickTexture(): THREE.CanvasTexture {
  if (!brickTex) {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#8a7a6a';
    ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = '#6a5a4a';
    ctx.lineWidth = 2;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const x = col * 16 + (row % 2) * 8;
        ctx.strokeRect(x, row * 16, 16, 16);
      }
    }
    brickTex = new THREE.CanvasTexture(canvas);
    brickTex.colorSpace = THREE.SRGBColorSpace;
    brickTex.wrapS = THREE.RepeatWrapping;
    brickTex.wrapT = THREE.RepeatWrapping;
  }
  return brickTex;
}
