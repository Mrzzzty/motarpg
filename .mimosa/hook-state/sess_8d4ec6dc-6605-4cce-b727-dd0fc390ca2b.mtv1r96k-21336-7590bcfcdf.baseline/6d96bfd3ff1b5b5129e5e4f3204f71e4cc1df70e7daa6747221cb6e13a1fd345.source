/**
 * 无尽模式（规格 第五部分）：门控式三选一、无尽Boss、层数难度联动、进度记录。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import type { FloorInstance, Room, RoomEntity, StairGroupInfo } from '../types';
import { SeededRNG } from '../utils/MathUtils';
import { RoguelikeSystem } from './RoguelikeSystem';
import { MerchantSystem } from './MerchantSystem';
import { MathUtils } from '../utils/MathUtils';

export class EndlessSystem {
  private static instance: EndlessSystem;

  /** 无尽进度（持久化） */
  currentFloor = 1;
  bestFloor = 0;
  isActive = false;
  returnPoint = { floor: 1, roomId: '' };
  /** 由 FloorManager 注入的楼层切换回调（避免循环依赖） */
  switchFloorProvider: ((floor: number, targetRoomId?: string) => void) | null = null;

  private constructor() {}

  static getInstance(): EndlessSystem {
    if (!EndlessSystem.instance) {
      EndlessSystem.instance = new EndlessSystem();
    }
    return EndlessSystem.instance;
  }

  get isUnlocked(): boolean {
    return gameState.endlessUnlocked;
  }

  /** 进入无尽模式（从主线某位置） */
  enter(): void {
    if (!this.isUnlocked) {
      eventBus.emit('notification', { message: '尚未发现深渊回廊的入口。', type: 'info', icon: '🌀' });
      return;
    }
    const player = Player.getInstance();
    this.returnPoint = {
      floor: player.currentFloor,
      roomId: player.currentRoomId,
    };
    this.isActive = true;
    gameState.mode = 'endless';
    gameState.endlessReturn = { ...this.returnPoint };
    eventBus.emit('endlessEntered', { floor: this.currentFloor });
    eventBus.emit('notification', { message: dataManager.text('endlessEnter'), type: 'success', icon: '🌀' });

    if (this.switchFloorProvider) {
      this.switchFloorProvider(this.currentFloor);
    }
  }

  /** 退出无尽模式，回到主线记录点 */
  exit(): void {
    const player = Player.getInstance();
    this.isActive = false;
    this.bestFloor = Math.max(this.bestFloor, this.currentFloor);
    gameState.mode = 'main';
    eventBus.emit('endlessExited', { bestFloor: this.bestFloor });

    if (this.switchFloorProvider) {
      this.switchFloorProvider(this.returnPoint.floor, this.returnPoint.roomId || undefined);
    }
    void player;
  }

  /** 无尽楼层推进（走上楼楼梯时由 GameController 调用） */
  advanceTo(floor: number): void {
    this.currentFloor = floor;
    this.bestFloor = Math.max(this.bestFloor, floor - 1);
  }

  // ================================================================
  // 门控式三选一生成（规格 5.2）
  // ================================================================

  generateEndlessFloor(floorId: number): FloorInstance {
    const rng = new SeededRNG(MathUtils.hashString(`${gameState.seed}:endless:${floorId}`));
    const rooms = new Map<string, Room>();
    const roguelike = RoguelikeSystem.getInstance();
    const isBossFloor = floorId % dataManager.world.bossFloorInterval === 0;

    if (isBossFloor) {
      return this.buildEndlessBossFloor(floorId, rng, rooms, roguelike);
    }
    return this.buildEndlessGateFloor(floorId, rng, rooms, roguelike);
  }

  /** 普通无尽层：入口 + 三道门 */
  private buildEndlessGateFloor(floorId: number, rng: SeededRNG, rooms: Map<string, Room>, roguelike: RoguelikeSystem): FloorInstance {
    const ids = {
      entry: `e${floorId}entry`,
      battle: `e${floorId}battle`,
      treasure: `e${floorId}treasure`,
      advance: `e${floorId}advance`,
    };

    const entry = this.makeRoom(rng, floorId, ids.entry, 'entry', 18, 16);
    const battle = this.makeRoom(rng, floorId, ids.battle, 'gate_battle', 20, 18);
    const treasure = this.makeRoom(rng, floorId, ids.treasure, 'gate_treasure', 20, 18);
    const advance = this.makeRoom(rng, floorId, ids.advance, 'gate_advance', 20, 18);

    // 入口三个北门 → 三个门房
    const slot = (i: number, w: number) => Math.floor(w * (i + 1) / 4);
    [
      { target: ids.battle, i: 0, room: battle },
      { target: ids.treasure, i: 1, room: treasure },
      { target: ids.advance, i: 2, room: advance },
    ].forEach(({ target, i, room }) => {
      const dxe = slot(i, entry.width);
      entry.exits.push({ targetRoomId: target, direction: 'north', doorX: dxe, doorY: 0, entryX: dxe, entryY: 1, unlockCondition: null });
      entry.tiles[0][dxe] = 0;
      const dxi = Math.floor(room.width / 2);
      room.exits.push({ targetRoomId: ids.entry, direction: 'south', doorX: dxi, doorY: room.height - 1, entryX: dxi, entryY: room.height - 2, unlockCondition: null });
      room.tiles[room.height - 1][dxi] = 0;
    });

    // 入口：返回传送门（+每10层商人）
    const portalPos = roguelike.findLandmarkTile(entry, rng, new Set()) ?? { x: 3, y: 3 };
    entry.entities.push({ id: `eportal_${floorId}`, type: 'portal', x: portalPos.x, y: portalPos.y, portalKind: 'endless_exit' });
    if (floorId % 10 === 0) {
      const mPos = roguelike.findLandmarkTile(entry, rng, new Set([`${portalPos.x},${portalPos.y}`]));
      if (mPos) {
        entry.entities.push({ id: `emerchant_${floorId}`, type: 'merchant', x: mPos.x, y: mPos.y, merchantSeed: MathUtils.hashString(`${gameState.seed}:em:${floorId}`) });
      }
    }

    // 门A（战斗）：精英怪 + 小怪，精英掉魂晶（掉落在战斗结算中处理）
    const pool = dataManager.monsters.filter(m => floorId >= m.spawnFloorMin && floorId <= m.spawnFloorMax);
    const usable = pool.length > 0 ? pool : [dataManager.monsters[0]];
    const occ = new Set<string>();
    const elitePos = roguelike.randomOpenTile(rng, battle, occ);
    if (elitePos) {
      battle.entities.push({
        id: `elite_${floorId}`, type: 'monster', x: elitePos.x, y: elitePos.y,
        monsterId: rng.pickWeighted(usable, m => m.weight).id,
        isElite: true, varianceSeed: rng.randInt(1, 2 ** 30),
      });
      occ.add(`${elitePos.x},${elitePos.y}`);
    }
    for (let i = 0; i < rng.randInt(1, 2); i++) {
      const pos = roguelike.randomOpenTile(rng, battle, occ);
      if (!pos) break;
      battle.entities.push({
        id: `gmob_${floorId}_${i}`, type: 'monster', x: pos.x, y: pos.y,
        monsterId: rng.pickWeighted(usable, m => m.weight).id,
        varianceSeed: rng.randInt(1, 2 ** 30),
      });
      occ.add(`${pos.x},${pos.y}`);
    }

    // 门B（宝藏）：2-4宝箱 + 藏品概率
    const chestCount = rng.randInt(2, 4);
    const tOcc = new Set<string>();
    for (let i = 0; i < chestCount; i++) {
      const pos = roguelike.randomOpenTile(rng, treasure, tOcc);
      if (!pos) break;
      const rareChance = Math.min(0.6, 0.1 + floorId * dataManager.config.endless.rareChestPerFloor);
      const legChance = Math.min(0.1, 0.005 + floorId * dataManager.config.endless.legendaryChestPerFloor);
      const roll = rng.next();
      const tier = roll < legChance ? 'legendary' : roll < legChance + rareChance ? 'golden' : 'auto';
      treasure.entities.push({
        id: `echest_${floorId}_${i}`, type: 'chest', x: pos.x, y: pos.y, chestTier: tier,
      });
      tOcc.add(`${pos.x},${pos.y}`);
    }

    // 门C（前进）：2-3普通怪
    const aOcc = new Set<string>();
    for (let i = 0; i < rng.randInt(2, 3); i++) {
      const pos = roguelike.randomOpenTile(rng, advance, aOcc);
      if (!pos) break;
      advance.entities.push({
        id: `amob_${floorId}_${i}`, type: 'monster', x: pos.x, y: pos.y,
        monsterId: rng.pickWeighted(usable, m => m.weight).id,
        varianceSeed: rng.randInt(1, 2 ** 30),
      });
      aOcc.add(`${pos.x},${pos.y}`);
    }

    // 三个门房都有上楼楼梯（通往下一无尽层）
    for (const room of [battle, treasure, advance]) {
      const pos = roguelike.findLandmarkTile(room, rng, new Set());
      if (pos) {
        room.entities.push({
          id: 'stair_up_A', type: 'stair', x: pos.x, y: pos.y,
          stairDirection: 'up', stairGroupId: 'A', targetFloor: floorId + 1,
        });
      }
    }

    rooms.set(ids.entry, entry);
    rooms.set(ids.battle, battle);
    rooms.set(ids.treasure, treasure);
    rooms.set(ids.advance, advance);

    const floor: FloorInstance = {
      floorId,
      floorName: `深渊回廊 · ${floorId}`,
      isTutorial: false,
      isBossFloor: false,
      mode: 'endless',
      roomIds: [ids.entry, ids.battle, ids.treasure, ids.advance],
      stairGroups: [{ groupId: 'A', upRoomId: ids.advance, upGridX: 0, upGridY: 0 }],
      connections: [
        { from: ids.entry, to: ids.battle, condition: null },
        { from: ids.entry, to: ids.treasure, condition: null },
        { from: ids.entry, to: ids.advance, condition: null },
      ],
    };
    WorldManager.getInstance().setFloorRooms(`endless:${floorId}`, rooms);
    return floor;
  }

  /** 无尽Boss层：休整→Boss→奖励（同主线结构，无尽缩放） */
  private buildEndlessBossFloor(floorId: number, rng: SeededRNG, rooms: Map<string, Room>, roguelike: RoguelikeSystem): FloorInstance {
    const ids = {
      rest: `e${floorId}rest`,
      boss: `e${floorId}boss`,
      reward: `e${floorId}reward`,
    };
    const rest = this.makeRoom(rng, floorId, ids.rest, 'rest', 20, 16);
    const boss = this.makeRoom(rng, floorId, ids.boss, 'boss', 22, 18);
    const reward = this.makeRoom(rng, floorId, ids.reward, 'reward', 20, 16);

    rest.exits.push({ targetRoomId: ids.boss, direction: 'east', doorX: rest.width - 1, doorY: Math.floor(rest.height / 2), entryX: rest.width - 2, entryY: Math.floor(rest.height / 2), unlockCondition: null });
    boss.exits.push({ targetRoomId: ids.rest, direction: 'west', doorX: 0, doorY: Math.floor(boss.height / 2), entryX: 1, entryY: Math.floor(boss.height / 2), unlockCondition: null });
    boss.exits.push({ targetRoomId: ids.reward, direction: 'east', doorX: boss.width - 1, doorY: Math.floor(boss.height / 2), entryX: boss.width - 2, entryY: Math.floor(boss.height / 2), unlockCondition: `boss:${ids.boss}`, isBossGate: true });
    reward.exits.push({ targetRoomId: ids.boss, direction: 'west', doorX: 0, doorY: Math.floor(reward.height / 2), entryX: 1, entryY: Math.floor(reward.height / 2), unlockCondition: null });
    // 刻穿边界墙并打通入口到中心的路径
    const carve = (room: Room, dx: number, dy: number, ex: number, ey: number) => {
      room.tiles[dy][dx] = 0;
      room.tiles[ey][ex] = 0;
      let cx = ex, cy = ey;
      const mx = Math.floor(room.width / 2), my = Math.floor(room.height / 2);
      while (cx !== mx) { room.tiles[cy][cx] = 0; cx += Math.sign(mx - cx); }
      while (cy !== my) { room.tiles[cy][cx] = 0; cy += Math.sign(my - cy); }
      room.tiles[my][mx] = 0;
    };
    carve(rest, rest.width - 1, Math.floor(rest.height / 2), rest.width - 2, Math.floor(rest.height / 2));
    carve(boss, 0, Math.floor(boss.height / 2), 1, Math.floor(boss.height / 2));
    carve(boss, boss.width - 1, Math.floor(boss.height / 2), boss.width - 2, Math.floor(boss.height / 2));
    carve(reward, 0, Math.floor(reward.height / 2), 1, Math.floor(reward.height / 2));

    // 休整：商人 + 治疗泉 + 返回传送门
    const occ = new Set<string>();
    const mPos = roguelike.findLandmarkTile(rest, rng, occ) ?? { x: 4, y: 4 };
    rest.entities.push({ id: `emerchant_${floorId}`, type: 'merchant', x: mPos.x, y: mPos.y, merchantSeed: MathUtils.hashString(`${gameState.seed}:em:${floorId}`) });
    occ.add(`${mPos.x},${mPos.y}`);
    const sPos = roguelike.findLandmarkTile(rest, rng, occ) ?? { x: 7, y: 7 };
    rest.entities.push({ id: `espring_${floorId}`, type: 'spring', x: sPos.x, y: sPos.y });
    occ.add(`${sPos.x},${sPos.y}`);
    const pPos = roguelike.findLandmarkTile(rest, rng, occ);
    if (pPos) {
      rest.entities.push({ id: `eportal_${floorId}`, type: 'portal', x: pPos.x, y: pPos.y, portalKind: 'endless_exit' });
    }

    // Boss实体
    const bcx = Math.floor(boss.width / 2);
    const bcy = Math.floor(boss.height / 2);
    boss.tiles[bcy][bcx] = 0;
    boss.entities.push({ id: ids.boss, type: 'boss', x: bcx, y: bcy, monsterId: 'boss_base' });

    // 奖励：宝箱 + 藏品 + 上楼
    const rOcc = new Set<string>();
    for (let i = 0; i < rng.randInt(3, 4); i++) {
      const pos = roguelike.randomOpenTile(rng, reward, rOcc);
      if (!pos) break;
      reward.entities.push({
        id: `echest_${floorId}_${i}`, type: 'chest', x: pos.x, y: pos.y,
        chestTier: i === 0 ? 'legendary' : 'auto', forcedQuality: i === 0 ? 'legendary' : null,
      });
      rOcc.add(`${pos.x},${pos.y}`);
    }
    const stairPos = roguelike.findLandmarkTile(reward, rng, rOcc) ?? { x: 4, y: 4 };
    reward.entities.push({ id: 'stair_up_A', type: 'stair', x: stairPos.x, y: stairPos.y, stairDirection: 'up', stairGroupId: 'A', targetFloor: floorId + 1 });

    rooms.set(ids.rest, rest);
    rooms.set(ids.boss, boss);
    rooms.set(ids.reward, reward);

    const floor: FloorInstance = {
      floorId,
      floorName: `深渊回廊 · ${floorId}（Boss）`,
      isTutorial: false,
      isBossFloor: true,
      mode: 'endless',
      roomIds: [ids.rest, ids.boss, ids.reward],
      stairGroups: [{ groupId: 'A', upRoomId: ids.reward, upGridX: 0, upGridY: 0 }],
      connections: [
        { from: ids.rest, to: ids.boss, condition: null },
        { from: ids.boss, to: ids.reward, condition: `boss:${ids.boss}` },
      ],
    };
    WorldManager.getInstance().setFloorRooms(`endless:${floorId}`, rooms);
    return floor;
  }

  private makeRoom(rng: SeededRNG, floorId: number, roomId: string, kind: Room['roomKind'], w: number, h: number): Room {
    const roguelike = RoguelikeSystem.getInstance();
    const room = roguelike.buildRoomTiles(rng, floorId, { roomId, width: w, height: h, roomKind: kind }, []);
    room.roomKind = kind;
    room.depth = kind === 'entry' || kind === 'rest' ? 0 : kind === 'boss' ? 1 : 2;
    room.gridX = 0;
    room.gridY = 0;
    return room;
  }

  /** 无尽难度联动倍率（规格 5.3，展示用） */
  endlessDifficultyMultiplier(): number {
    const base = dataManager.getDifficulty(Player.getInstance().currentDifficulty)?.monsterMultiplier ?? 1;
    return base * (1 + this.currentFloor * dataManager.config.endless.difficultyLinkPerFloor);
  }

  /** 商人预热（生成无尽楼层后调用，保证库存确定） */
  warmMerchant(room: Room, entity: RoomEntity): void {
    if (entity.merchantSeed !== undefined) {
      MerchantSystem.getInstance().generateInventory(entity.id, entity.merchantSeed, room.floorId);
    }
  }

  exportState(): { currentFloor: number; isActive: boolean; bestFloor: number; returnFloor: number; returnRoomId: string } {
    return {
      currentFloor: this.currentFloor,
      isActive: this.isActive,
      bestFloor: Math.max(this.bestFloor, this.currentFloor - (this.isActive ? 0 : 1)),
      returnFloor: this.returnPoint.floor,
      returnRoomId: this.returnPoint.roomId,
    };
  }

  loadState(state: { currentFloor: number; isActive: boolean; bestFloor: number; returnFloor: number; returnRoomId: number | string }): void {
    this.currentFloor = state.currentFloor;
    this.isActive = false; // 读档后总是从入口继续，避免直接落入危险区
    this.bestFloor = state.bestFloor;
    this.returnPoint = { floor: state.returnFloor, roomId: String(state.returnRoomId ?? '') };
  }

  reset(): void {
    this.currentFloor = 1;
    this.bestFloor = 0;
    this.isActive = false;
    this.returnPoint = { floor: 1, roomId: '' };
  }
}

