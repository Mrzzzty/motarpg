/**
 * 网格几何公共工具（地图生成 / 内容填充 / 寻路 / 渲染 通用）。
 *
 * 抽出来的原因：四方向偏移、曼哈顿距离、门内侧格、格子键在此之前
 * 在 `MapGenerator` / `ContentFiller` / `GameController` / 各测试里各写了一份。
 */
import type { RoomDoor } from '../types';

/** 平面坐标 */
export interface Pt {
  x: number;
  y: number;
}

/** 四方向偏移（下 / 上 / 右 / 左），与 y 向下为增的网格坐标一致 */
export const DIRS4: ReadonlyArray<readonly [number, number]> = [[0, 1], [0, -1], [1, 0], [-1, 0]];

/** 曼哈顿距离 */
export function manhattan(a: Pt, b: Pt): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

/** 格子键（用于 Set / Map 去重） */
export function cellKey(x: number, y: number): string {
  return `${x},${y}`;
}

/** 格子键（坐标对象重载） */
export function ptKey(p: Pt): string {
  return cellKey(p.x, p.y);
}

/** 门朝向房间内侧的格 */
export function doorInner(d: RoomDoor): Pt {
  switch (d.direction) {
    case 'east': return { x: d.x - 1, y: d.y };
    case 'west': return { x: d.x + 1, y: d.y };
    case 'north': return { x: d.x, y: d.y + 1 };
    default: return { x: d.x, y: d.y - 1 };
  }
}
