/**
 * 楼层管理器（规格 2.1 / 7.1）：楼层缓存、楼梯跨层切换、进入点解析。
 * 主线楼层 → RoguelikeSystem；无尽楼层 → EndlessSystem。
 */
import { dataManager } from './DataManager';
import { eventBus } from './EventBus';
import { gameState } from './GameState';
import { WorldManager } from './WorldManager';
import { CameraController } from './CameraController';
import { RoguelikeSystem } from '../systems/RoguelikeSystem';
import { EndlessSystem } from '../systems/EndlessSystem';
import { Player } from '../entities/Player';
import type { FloorInstance, GameMode, Room, StairGroupInfo } from '../types';
import { Logger } from '../utils/Logger';

export class FloorManager {
  private static instance: FloorManager;
  private floorCache = new Map<string, FloorInstance>();

  private constructor() {
    RoguelikeSystem.getInstance().setPrevFloorGroupsProvider(floorId => this.getStairGroups('main', floorId));
    EndlessSystem.getInstance().switchFloorProvider = (floor, targetRoomId) => {
      this.switchFloor(floor, { targetRoomId });
    };
  }

  static getInstance(): FloorManager {
    if (!FloorManager.instance) {
      FloorManager.instance = new FloorManager();
    }
    return FloorManager.instance;
  }

  private cacheKey(mode: GameMode, floorId: number): string {
    return `${mode}:${floorId}`;
  }

  getFloor(floorId: number, mode: GameMode = gameState.mode): FloorInstance {
    const key = this.cacheKey(mode, floorId);
    let floor = this.floorCache.get(key);
    if (!floor) {
      floor = this.generateFloor(mode, floorId);
      this.floorCache.set(key, floor);
    }
    return floor;
  }

  getStairGroups(mode: GameMode, floorId: number): StairGroupInfo[] {
    return this.getFloor(floorId, mode).stairGroups;
  }

  private generateFloor(mode: GameMode, floorId: number): FloorInstance {
    const world = dataManager.world;
    if (mode === 'endless') {
      return EndlessSystem.getInstance().generateEndlessFloor(floorId);
    }
    const clamped = Math.min(floorId, world.maxFloors);
    const { floor, rooms } = RoguelikeSystem.getInstance().generateMainFloor(clamped);
    WorldManager.getInstance().setFloorRooms(`${mode}:${clamped}`, rooms);
    return floor;

  }

  getRoomsOfFloor(floorId: number, mode: GameMode = gameState.mode): Map<string, Room> {
    this.getFloor(floorId, mode); // 确保已生成
    return WorldManager.getInstance().getFloorRoomMap(`${mode}:${floorId}`) ?? new Map();
  }

  // ============ 楼层切换 ============

  /**
   * 切换楼层。
   * @param options.viaStair 触发方向
   * @param options.groupId 经由的楼梯组（用于定位下层下楼口）
   * @param options.targetRoomId/targetX/targetY 显式进入点（下楼口直连）
   */
  switchFloor(targetFloor: number, options: {
    viaStair?: 'up' | 'down';
    groupId?: string;
    targetRoomId?: string;
    targetX?: number;
    targetY?: number;
  } = {}): void {
    if (gameState.transitionActive) return;
    const player = Player.getInstance();
    const fromFloor = player.currentFloor;
    const camera = CameraController.getInstance();
    gameState.transitionActive = true;

    camera.fadeOut(dataManager.config.camera.transitionMs);
    window.setTimeout(() => {
      try {
        const floor = this.getFloor(targetFloor);
        const world = WorldManager.getInstance();
        // 无显式进入点：按楼梯组定位本层下楼口旁
        let entryRoomId = options.targetRoomId;
        let entryX = options.targetX;
        let entryY = options.targetY;
        // 指定了房间但未指定坐标：落到该房间中心附近的空格
        if (entryRoomId && (entryX === undefined || entryY === undefined)) {
          const rooms0 = this.getRoomsOfFloor(targetFloor);
          const r0 = rooms0.get(entryRoomId);
          if (r0) {
            const spawn = this.findSpawnTile(r0);
            entryX = spawn.x;
            entryY = spawn.y;
          }
        }
        if (!entryRoomId && options.groupId) {
          const rooms = this.getRoomsOfFloor(targetFloor);
          for (const room of rooms.values()) {
            const stair = room.entities.find(
              e => e.type === 'stair' && e.stairDirection === 'down' && e.stairGroupId === options.groupId,
            );
            if (stair) {
              entryRoomId = room.roomId;
              entryX = Math.min(room.width - 2, stair.x + 1);
              entryY = stair.y;
              break;
            }
          }
        }
        // 兜底：起点房间中心（避开阻挡实体/楼梯）
        if (!entryRoomId) {
          const rooms = this.getRoomsOfFloor(targetFloor);
          const startRoom = rooms.get(floor.roomIds[0]) ?? rooms.values().next().value;
          if (!startRoom) {
            Logger.error(`[FloorManager] 楼层 ${targetFloor} 无可用房间`);
            return;
          }
          entryRoomId = startRoom.roomId;
          const spawn = this.findSpawnTile(startRoom);
          entryX = spawn.x;
          entryY = spawn.y;
        }

        player.currentFloor = targetFloor;
        world.setCurrentFloor(floor, entryRoomId, entryX, entryY);
        camera.setRoomBounds(world.currentRoom!);
        camera.snapTo(player.position.x, player.position.y);

        eventBus.emit('floorChanged', {
          fromFloor,
          toFloor: targetFloor,
          viaStair: options.viaStair ?? 'up',
          mode: gameState.mode,
        });
        if (gameState.mode === 'main' && targetFloor > gameState.maxFloorReached) {
          gameState.maxFloorReached = targetFloor;
        }
      } finally {
        camera.fadeIn(dataManager.config.camera.transitionMs);
        window.setTimeout(() => {
          gameState.transitionActive = false;
        }, dataManager.config.camera.transitionMs);
      }
    }, dataManager.config.camera.transitionMs);
  }

  /** 楼梯交互：解析目标并切换 */
  useStair(stairEntity: { stairDirection?: string; targetFloor?: number; targetRoomId?: string; targetX?: number; targetY?: number; stairGroupId?: string }): void {
    const dir = stairEntity.stairDirection === 'down' ? 'down' : 'up';
    const player = Player.getInstance();
    const targetFloor = stairEntity.targetFloor
      ?? (dir === 'up' ? player.currentFloor + 1 : player.currentFloor - 1);
    if (dir === 'down' && targetFloor < 1) {
      eventBus.emit('notification', { message: '塔的入口在上方，没有更低的楼层了。', type: 'info' });
      return;
    }
    if (dir === 'up' && targetFloor > dataManager.world.maxFloors) {
      eventBus.emit('notification', { message: '已到达塔顶限制。', type: 'info' });
      return;
    }
    this.switchFloor(targetFloor, {
      viaStair: dir,
      groupId: stairEntity.stairGroupId,
      targetRoomId: stairEntity.targetRoomId,
      targetX: stairEntity.targetX,
      targetY: stairEntity.targetY,
    });
  }

  /** 中心扩散寻找无阻挡实体的可通行格（出生点用） */
  private findSpawnTile(room: Room): { x: number; y: number } {
    const cx = Math.floor(room.width / 2);
    const cy = Math.floor(room.height / 2);
    const world = WorldManager.getInstance();
    for (let radius = 0; radius < Math.max(room.width, room.height); radius++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== radius) continue;
          const x = cx + dx;
          const y = cy + dy;
          if (x < 1 || y < 1 || x >= room.width - 1 || y >= room.height - 1) continue;
          if (room.tiles[y][x] !== 0) continue;
          const crowded = world.entitiesAt(room, x, y).length > 0;
          if (crowded) continue;
          return { x, y };
        }
      }
    }
    return { x: cx, y: cy };
  }

  clearCache(): void {
    this.floorCache.clear();
  }
}
