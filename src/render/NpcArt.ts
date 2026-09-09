/**
 * NPC 立绘/模型贴图加载：把 npcs.json 中配置了 portrait 的立绘
 * 预加载为离屏 canvas，供 ThreeRenderer 作为纸片人纹理使用（同步取缓存）。
 */
import { dataManager } from '../core/DataManager';

const cache = new Map<string, HTMLCanvasElement>();
let loadPromise: Promise<void> | null = null;

function loadImage(src: string): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      c.getContext('2d')!.drawImage(img, 0, 0);
      cache.set(src, c);
      resolve(c);
    };
    img.onerror = () => reject(new Error(`[NpcArt] 立绘加载失败: ${src}`));
    img.src = src;
  });
}

/** 启动时预加载全部 NPC 立绘（失败不阻塞，回退占位模型） */
export function loadNpcPortraits(): Promise<void> {
  if (loadPromise) return loadPromise;
  const srcs = [...new Set(dataManager.npcs.npcs.filter(n => n.portrait).map(n => n.portrait!))];
  loadPromise = Promise.allSettled(srcs.map(loadImage)).then(() => undefined);
  return loadPromise;
}

/** 已加载的立绘 canvas（未加载/不存在返回 null） */
export function getNpcPortrait(src: string): HTMLCanvasElement | null {
  return cache.get(src) ?? null;
}
