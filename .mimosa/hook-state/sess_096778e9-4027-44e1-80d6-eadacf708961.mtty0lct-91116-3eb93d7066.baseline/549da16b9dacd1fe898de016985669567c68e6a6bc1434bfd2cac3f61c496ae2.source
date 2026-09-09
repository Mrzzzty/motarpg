/**
 * 楼层管理器：楼层进入/切换生命周期（生成或恢复）、入口定位、楼层事件。
 */
import type { FloorMap } from '../types';
import { MapGenerator } from '../map/MapGenerator';
import { WorldManager } from './WorldManager';
import { Player } from '../entities/Player';
import { eventBus } from './EventBus';
import { Logger } from '../utils/Logger';

export class FloorManager {
  private static instance: FloorManager;
  private constructor() {}
  static getInstance(): FloorManager {
    if (!FloorManager.instance) FloorManager.instance = new FloorManager();
    return FloorManager.instance;
  }

  /** 生成并进入新楼层（下行楼梯） */
  enterFloor(floorId: number, viaStair = true): FloorMap {
    const player = Player.getInstance();
    const fromFloor = player.state.currentFloor;
    const floor = MapGenerator.getInstance().generate(floorId);
    WorldManager.getInstance().loadFloor(floor);

    player.state.currentFloor = floorId;
    player.state.x = floor.entryX;
    player.state.y = floor.entryY;
    const startRoom = WorldManager.getInstance().getRoomAt(floor.entryX, floor.entryY);
    player.state.currentRoomId = startRoom?.id ?? floor.rooms[0].id;

    eventBus.emit('floorChanged', { fromFloor, toFloor: floorId });
    if (!viaStair) Logger.debug(`[Floor] 直接载入楼层${floorId}`);
    return floor;
  }

  /** 读档恢复楼层（使用已序列化的地图，不重新生成） */
  restoreFloor(floor: FloorMap): void {
    const player = Player.getInstance();
    WorldManager.getInstance().loadFloor(floor);
    player.state.currentFloor = floor.floorId;
    const room = WorldManager.getInstance().getRoomAt(player.state.x, player.state.y);
    player.state.currentRoomId = room?.id ?? floor.rooms[0].id;
  }

  /** 载入预制地图（调试/未来关卡用）：玩家置于入口并广播楼层事件 */
  enterPrefabFloor(floor: FloorMap): FloorMap {
    const player = Player.getInstance();
    const fromFloor = player.state.currentFloor;
    WorldManager.getInstance().loadFloor(floor);
    player.state.currentFloor = floor.floorId;
    player.state.x = floor.entryX;
    player.state.y = floor.entryY;
    const startRoom = WorldManager.getInstance().getRoomAt(floor.entryX, floor.entryY);
    player.state.currentRoomId = startRoom?.id ?? floor.rooms[0].id;
    eventBus.emit('floorChanged', { fromFloor, toFloor: floor.floorId });
    Logger.debug(`[Floor] 载入预制楼层${floor.floorId}`);
    return floor;
  }
}
