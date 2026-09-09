/**
 * 俯视图投影（视角调整文档 2.1）：
 * screenX = col * tileSize
 * screenY = row * tileSize - z
 * 正方形网格；z 为物体高度偏移（像素），物体仍有"立起来"的高度感。
 * 逻辑层始终使用 (row, col) 俯视坐标，渲染层负责翻译。
 */
import { dataManager } from '../core/DataManager';

export interface ScreenPoint {
  x: number;
  y: number;
}

export class Projection {
  private static instance: Projection;
  private constructor() {}
  static getInstance(): Projection {
    if (!Projection.instance) Projection.instance = new Projection();
    return Projection.instance;
  }

  /** 格子边长（正方形，像素） */
  get tileSize(): number { return dataManager.config.render.tileWidth; }
  /** 兼容旧字段 */
  get tileWidth(): number { return this.tileSize; }
  get tileHeight(): number { return this.tileSize; }

  /** 世界格坐标 → 屏幕坐标（z 为物体高度偏移，像素） */
  worldToScreen(row: number, col: number, z = 0): ScreenPoint {
    return {
      x: col * this.tileSize,
      y: row * this.tileSize - z,
    };
  }

  /** 格中心（用于实体站立点） */
  tileCenter(row: number, col: number, z = 0): ScreenPoint {
    return this.worldToScreen(row + 0.5, col + 0.5, z);
  }

  /** 屏幕坐标 → 世界格坐标（取地面 z=0 平面，含小数） */
  screenToWorld(sx: number, sy: number): { row: number; col: number } {
    return {
      col: sx / this.tileSize,
      row: sy / this.tileSize,
    };
  }
}

export const projection = Projection.getInstance();
