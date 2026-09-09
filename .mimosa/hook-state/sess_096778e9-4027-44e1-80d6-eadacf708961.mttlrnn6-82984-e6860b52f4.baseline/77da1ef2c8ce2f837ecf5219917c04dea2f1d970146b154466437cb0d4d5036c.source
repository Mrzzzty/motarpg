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

/** 地面/墙面砖块纹理（文档 5.3：Canvas → Texture，无外部图片）。青砖质感：青灰绿砖体 + 深色灰缝 */
let brickTex: THREE.CanvasTexture | null = null;
export function brickTexture(): THREE.CanvasTexture {
  if (!brickTex) {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    // 灰缝底色（深青灰）
    ctx.fillStyle = '#39423c';
    ctx.fillRect(0, 0, size, size);
    const bw = 32;
    const bh = 16;
    for (let row = 0; row < size / bh; row++) {
      for (let col = -1; col < size / bw + 1; col++) {
        const x = col * bw + (row % 2) * (bw / 2);
        const y = row * bh;
        // 青砖体：每块微调青灰绿色相，模拟窑变
        const v = 0.88 + ((row * 7 + col * 13) % 5) * 0.06;
        const r = Math.round(84 * v);
        const g = Math.round(100 * v);
        const b = Math.round(88 * v);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x + 1, y + 1, bw - 2, bh - 2);
        // 砖面高光边（上/左）+ 暗边（下/右），增加立体感
        ctx.fillStyle = 'rgba(210,225,210,0.16)';
        ctx.fillRect(x + 1, y + 1, bw - 2, 1);
        ctx.fillRect(x + 1, y + 1, 1, bh - 2);
        ctx.fillStyle = 'rgba(10,16,12,0.28)';
        ctx.fillRect(x + 1, y + bh - 2, bw - 2, 1);
        ctx.fillRect(x + bw - 2, y + 1, 1, bh - 2);
        // 风化斑点
        if ((row * 3 + col * 5) % 4 === 0) {
          ctx.fillStyle = 'rgba(30,42,34,0.3)';
          ctx.beginPath();
          ctx.arc(x + 8 + ((row * 11 + col * 7) % 16), y + 4 + ((row * 5 + col * 3) % 8), 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    brickTex = new THREE.CanvasTexture(canvas);
    brickTex.colorSpace = THREE.SRGBColorSpace;
    brickTex.wrapS = THREE.RepeatWrapping;
    brickTex.wrapT = THREE.RepeatWrapping;
  }
  return brickTex;
}
