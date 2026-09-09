/**
 * 魔法瓶美术图加载与绘制（迁移文档 5.4）：
 * 预加载 public/img/p_{tier}.png（透明 PNG 瓶身），在 TextureGenerator 的
 * potion 分支用 drawImage 绘制，未加载完成/失败时回退到 PlaceholderArt 占位盒。
 */
import type { PotionTier } from '../types';

const BASE: string = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
const TIERS: PotionTier[] = ['crude', 'normal', 'quality', 'strong', 'holy'];

const images = new Map<PotionTier, HTMLImageElement>();
let loadPromise: Promise<void> | null = null;

/** 预加载全部 5 档魔法瓶图片（失败不阻塞，回退占位盒）。应在 bootstrap 早期 await。 */
export function loadPotionArts(): Promise<void> {
  if (loadPromise) return loadPromise;
  loadPromise = Promise.all(
    TIERS.map(
      tier =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.onload = () => {
            images.set(tier, img);
            resolve();
          };
          img.onerror = () => {
            console.warn(`[PotionArt] 加载失败，回退占位盒: p_${tier}.png`);
            resolve();
          };
          img.src = `${BASE}img/p_${tier}.png`;
        }),
    ),
  ).then(() => undefined);
  return loadPromise;
}

export function getPotionImage(tier: PotionTier): HTMLImageElement | null {
  return images.get(tier) ?? null;
}

/**
 * 在 (x,y)（脚底中心）绘制魔法瓶图片，按实体高度 h 缩放（保持宽高比）。
 * 返回 true 表示已绘制；false 表示图片未就绪，调用方应回退占位盒。
 */
export function drawPotion(
  ctx: CanvasRenderingContext2D,
  tier: PotionTier,
  x: number,
  y: number,
  h: number,
): boolean {
  const img = getPotionImage(tier);
  if (!img || !img.complete || img.naturalWidth === 0) return false;
  const ratio = img.naturalWidth / img.naturalHeight;
  const th = h;
  const tw = th * ratio;
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, x - tw / 2, y - th, tw, th);
  ctx.restore();
  return true;
}
