/**
 * 主角精灵图集（hero sprite atlas）
 * 实测规格（逐行切图核对）：6 列 × 13 行 = 78 格，每格 64×64（图集总尺寸 384×832），
 * 部分格子为空（透明）。单格宽高比 1:1，用「整张图集 + UV offset/repeat 裁剪单格」。
 * 注意：不要按 8×8/48×104 切——会把角色拦腰切开并混入邻格，帧动画会疯狂跳动。
 */
import type { Texture } from 'three';

const BASE: string = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
const ATLAS_URL = `${BASE}frames64.png`;
export const ATLAS_COLS = 6;
export const ATLAS_ROWS = 13;
export const ATLAS_FRAMES = ATLAS_COLS * ATLAS_ROWS;

let atlasCanvas: HTMLCanvasElement | null = null;
let loadPromise: Promise<HTMLCanvasElement> | null = null;

/** 预加载主角图集（透明 PNG），原尺寸写入 canvas 供引擎复用。 */
export function loadHeroAtlas(): Promise<HTMLCanvasElement> {
  if (loadPromise) return loadPromise;
  loadPromise = new Promise<HTMLCanvasElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext('2d')!;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0);
      atlasCanvas = c;
      resolve(c);
    };
    img.onerror = () => reject(new Error(`[HeroAtlas] 加载失败: ${ATLAS_URL}`));
    img.src = ATLAS_URL;
  });
  return loadPromise;
}

export function getHeroAtlas(): HTMLCanvasElement | null {
  return atlasCanvas;
}

/** 将 texture 的 UV 偏移切到指定帧（0..77）。CanvasTexture 默认 flipY=true。 */
export function applyHeroFrame(tex: Texture, frame: number): void {
  const f = Math.max(0, Math.min(ATLAS_FRAMES - 1, frame | 0));
  const col = f % ATLAS_COLS;
  const row = Math.floor(f / ATLAS_COLS);
  const cw = 1 / ATLAS_COLS;
  const ch = 1 / ATLAS_ROWS;
  tex.offset.set(col * cw, 1 - (row + 1) * ch);
  tex.repeat.set(cw, ch);
}