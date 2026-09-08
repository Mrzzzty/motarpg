/**
 * 摄像机（文档五 二 + 文档三 2.5D适配）：
 * - 房间屏幕投影 ≤ 视口 → 固定显示整个房间（玩家画面内自由移动）
 * - 房间大于屏幕 → 跟随玩家，边界锁定不超出房间边缘（每轴独立判定）
 * - 走廊中 → 自由跟随（边界锁定到整层范围）
 * 相机坐标为投影后屏幕坐标（像素），渲染时以画布中心为原点偏移。
 */
import { dataManager } from './DataManager';
import { Player } from '../entities/Player';
import { WorldManager } from './WorldManager';
import { projection } from '../render/Projection';
import { MathUtils } from '../utils/MathUtils';
import type { RoomData } from '../types';

export class CameraController {
  private static instance: CameraController;
  /** 相机注视的屏幕坐标（投影空间） */
  private camX = 0;
  private camY = 0;
  private targetX = 0;
  private targetY = 0;
  private snapped = false;

  private constructor() {}
  static getInstance(): CameraController {
    if (!CameraController.instance) CameraController.instance = new CameraController();
    return CameraController.instance;
  }

  get x(): number { return this.camX; }
  get y(): number { return this.camY; }

  snapToPlayer(): void {
    const p = Player.getInstance().pos;
    const pt = projection.tileCenter(p.y, p.x);
    this.camX = pt.x;
    this.camY = pt.y;
    this.targetX = pt.x;
    this.targetY = pt.y;
    this.snapped = true;
  }

  /** 房间矩形在屏幕空间的包围盒（俯视投影：正方形；含墙壁高度与内边距） */
  private roomScreenBounds(room: RoomData): { minX: number; maxX: number; minY: number; maxY: number } {
    const h = dataManager.config.heights;
    const wallH = Math.max(h.wallByRoom[room.type] ?? 60, h.corridorWall);
    const ts = projection.tileSize;
    const pad = dataManager.config.camera.roomPaddingPx;
    return {
      minX: room.x * ts - pad,
      maxX: (room.x + room.width) * ts + pad,
      minY: room.y * ts - wallH - pad,
      maxY: (room.y + room.height) * ts + pad,
    };
  }

  update(deltaTime: number): void {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const p = player.pos;
    const pt = projection.tileCenter(p.y, p.x);
    this.targetX = pt.x;
    this.targetY = pt.y;

    // 视口半宽高（像素；canvas 尺寸由渲染器维护，此处用窗口近似，渲染器会再传精确值）
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement | null;
    const halfW = (canvas?.clientWidth ?? window.innerWidth) / 2;
    const halfH = (canvas?.clientHeight ?? window.innerHeight) / 2;

    const room = world.getRoomAt(p.x, p.y);
    if (room) {
      const bounds = this.roomScreenBounds(room);
      const roomW = bounds.maxX - bounds.minX;
      const roomH = bounds.maxY - bounds.minY;
      if (roomW <= halfW * 2 && roomH <= halfH * 2) {
        // 房间整体可见 → 固定在房间中心
        this.targetX = (bounds.minX + bounds.maxX) / 2;
        this.targetY = (bounds.minY + bounds.maxY) / 2;
      } else {
        // 大于屏幕 → 边界锁定跟随（分轴：宽超屏水平跟随/高不超屏垂直居中，反之亦然）
        const centerX = (bounds.minX + bounds.maxX) / 2;
        const centerY = (bounds.minY + bounds.maxY) / 2;
        if (roomW <= halfW * 2) this.targetX = centerX;
        else this.targetX = MathUtils.clamp(this.targetX, bounds.minX + halfW, bounds.maxX - halfW);
        if (roomH <= halfH * 2) this.targetY = centerY;
        else this.targetY = MathUtils.clamp(this.targetY, bounds.minY + halfH, bounds.maxY - halfH);
      }
    } else {
      // 走廊：锁定到整层边界
      const floor = world.currentFloor;
      if (floor) {
        const bounds = this.roomScreenBounds({
          x: 0, y: 0, width: floor.width, height: floor.height, type: 'combat',
        } as RoomData);
        this.targetX = MathUtils.clamp(this.targetX, bounds.minX + halfW, bounds.maxX - halfW);
        this.targetY = MathUtils.clamp(this.targetY, bounds.minY + halfH, bounds.maxY - halfH);
      }
    }

    if (!this.snapped) {
      this.camX = this.targetX;
      this.camY = this.targetY;
      this.snapped = true;
    } else {
      const t = 1 - Math.pow(1 - dataManager.config.camera.lerp, deltaTime / 16.67);
      this.camX = MathUtils.lerp(this.camX, this.targetX, t);
      this.camY = MathUtils.lerp(this.camY, this.targetY, t);
    }
  }
}
