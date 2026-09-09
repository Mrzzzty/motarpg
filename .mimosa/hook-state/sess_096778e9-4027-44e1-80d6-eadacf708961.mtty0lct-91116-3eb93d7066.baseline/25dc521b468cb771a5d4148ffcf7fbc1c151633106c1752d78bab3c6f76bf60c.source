/**
 * 世界管理器（规格 2.1 / 7.1）：当前楼层/房间加载与切换、实体状态覆盖层。
 * 楼层生成委托 FloorManager；本类负责"当前在哪、房间里有什么、状态如何"。
 */
import { eventBus } from './EventBus';
import { gameState } from './GameState';
import type {
  EntityPersistState, FloorInstance, GameMode, Room, RoomEntity,
} from '../types';
import { Logger } from '../utils/Logger';
import { Player } from '../entities/Player';

export class WorldManager {
  private static instance: WorldManager;

  currentFloor: FloorInstance | null = null;
  currentRoom: Room | null = null;
  /** 实体运行时状态覆盖层（存档持久化） */
  private entityStates = new Map<string, EntityPersistState>();
  /** 已击败的楼层Boss：floorId -> true（主线） */
  private defeatedBossFloors = new Set<number>();

  private constructor() {}

  static getInstance(): WorldManager {
    if (!WorldManager.instance) {
      WorldManager.instance = new WorldManager();
    }
    return WorldManager.instance;
  }

  // ============ 实体状态覆盖层 ============

  getEntityState(mode: GameMode, floorId: number, roomId: string, entityId: string): EntityPersistState | undefined {
    return this.entityStates.get(gameState.entityKey(mode, floorId, roomId, entityId));
  }

  markEntityState(mode: GameMode, floorId: number, roomId: string, entityId: string, patch: EntityPersistState): void {
    const key = gameState.entityKey(mode, floorId, roomId, entityId);
    const existing = this.entityStates.get(key) ?? {};
    this.entityStates.set(key, { ...existing, ...patch });
  }

  removeEntityState(mode: GameMode, floorId: number, roomId: string, entityId: string): void {
    this.entityStates.delete(gameState.entityKey(mode, floorId, roomId, entityId));
  }

  getAllEntityStates(): Record<string, EntityPersistState> {
    return Object.fromEntries(this.entityStates);
  }

  loadEntityStates(states: Record<string, EntityPersistState>): void {
    this.entityStates = new Map(Object.entries(states));
  }

  /** 当前模式/楼层上下文下的实体是否仍存活/可用 */
  isEntityLive(entity: RoomEntity, room: Room): boolean {
    const st = this.getEntityState(gameState.mode, room.floorId, room.roomId, entity.id);
    if (!st) return true;
    switch (entity.type) {
      case 'monster':
      case 'boss':
        return st.isAlive !== false && st.isDefeated !== true;
      case 'chest':
        return st.isOpened !== true;
      case 'item':
      case 'collectible':
        return st.isFound !== true;
      case 'spring':
      case 'heal_point':
        return st.isUsed !== true;
      case 'npc':
      case 'merchant':
      case 'stair':
      case 'portal':
        return st.isAlive !== false;
      default:
        return true;
    }
  }

  /** 房间内当前活跃实体列表 */
  getLiveEntities(room: Room): RoomEntity[] {
    return room.entities.filter(e => this.isEntityLive(e, room));
  }

  /** 指定格子的活跃实体（含可踏上的） */
  entitiesAt(room: Room, x: number, y: number): RoomEntity[] {
    return this.getLiveEntities(room).filter(e => e.x === x && e.y === y);
  }

  /** 阻挡移动的实体类型 */
  isBlockingEntity(entity: RoomEntity): boolean {
    return entity.type === 'monster' || entity.type === 'boss' || entity.type === 'npc'
      || entity.type === 'merchant' || entity.type === 'chest';
  }

  // ============ Boss楼层进度 ============

  markBossFloorDefeated(floorId: number, defeatedAt: string): void {
    this.defeatedBossFloors.add(floorId);
  }

  isBossFloorDefeated(floorId: number): boolean {
    return this.defeatedBossFloors.has(floorId);
  }

  getDefeatedBossFloors(): { floorId: number; isDefeated: boolean; defeatedAt: string }[] {
    return [...this.defeatedBossFloors].map(f => ({ floorId: f, isDefeated: true, defeatedAt: '' }));
  }

  loadDefeatedBossFloors(list: { floorId: number }[] | undefined): void {
    this.defeatedBossFloors = new Set((list ?? []).map(b => b.floorId));
  }

  // ============ 房间切换 ============

  setCurrentFloor(floor: FloorInstance, roomId: string, entryX?: number, entryY?: number): void {
    this.currentFloor = floor;
    const room = this.getRoom(roomId);
    if (!room) {
      Logger.error(`[WorldManager] 房间不存在: ${roomId}`);
      return;
    }
    this.currentRoom = room;
    Player.getInstance().currentRoomId = room.roomId;
    if (entryX !== undefined && entryY !== undefined) {
      Player.getInstance().position.x = entryX;
      Player.getInstance().position.y = entryY;
    }
    this.emitRoomEntered(room);
  }

  getRoom(roomId: string): Room | null {
    return this.currentFloor ? this.getRoomsOfFloor().get(roomId) ?? null : null;
  }

  private floorRooms = new Map<string, Map<string, Room>>();

  setFloorRooms(key: string, rooms: Map<string, Room>): void {
    this.floorRooms.set(key, rooms);
  }

  getFloorRoomMap(key: string): Map<string, Room> | undefined {
    return this.floorRooms.get(key);
  }

  getRoomsOfFloor(): Map<string, Room> {
    if (!this.currentFloor) return new Map();
    const key = `${gameState.mode}:${this.currentFloor.floorId}`;
    let rooms = this.floorRooms.get(key);
    if (!rooms) {
      rooms = new Map();
      this.floorRooms.set(key, rooms);
    }
    return rooms;
  }

  clearCaches(): void {
    this.floorRooms.clear();
    this.currentFloor = null;
    this.currentRoom = null;
    this.entityStates.clear();
    this.defeatedBossFloors.clear();
  }

  switchRoom(targetRoomId: string, entryX?: number, entryY?: number): void {
    const target = this.getRoom(targetRoomId);
    if (!target || !this.currentFloor) {
      Logger.error(`[WorldManager] 无法切换到不存在的房间: ${targetRoomId}`);
      return;
    }
    this.currentRoom = target;
    Player.getInstance().currentRoomId = target.roomId;
    if (entryX !== undefined && entryY !== undefined) {
      Player.getInstance().position.x = entryX;
      Player.getInstance().position.y = entryY;
    }
    this.emitRoomEntered(target);
  }

  private emitRoomEntered(room: Room): void {
    eventBus.emit('roomEntered', {
      roomId: room.roomId,
      floor: room.floorId,
      depth: room.depth,
      mode: gameState.mode,
    });
  }
}
