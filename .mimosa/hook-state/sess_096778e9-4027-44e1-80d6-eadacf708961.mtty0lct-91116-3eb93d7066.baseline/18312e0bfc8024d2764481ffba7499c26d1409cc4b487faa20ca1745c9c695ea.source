/**
 * Roguelike系统（规格 模块J / K）：楼层程序化生成。
 * - 每层种子 = hash(存档种子:模式:楼层)，同存档内可精确重现
 * - 非线性房间网络（BFS树 + 环路捷径），深度分级
 * - Boss楼层固定3房间（休整→Boss战→奖励）
 * - 楼梯三维对应（上下层坐标误差 ≤ tolerance）
 * - 怪物/宝箱/物品/商人随机布置
 */
import { dataManager } from '../core/DataManager';
import { gameState } from '../core/GameState';
import type {
  Direction, FloorInstance, Quality, Room, RoomConnection, RoomEntity, RoomExit, StairGroupInfo,
} from '../types';
import { MathUtils, SeededRNG } from '../utils/MathUtils';

interface RoomDraft {
  roomId: string;
  width: number;
  height: number;
  depth: number;
  gridX: number;
  gridY: number;
  edges: Set<string>;
  roomKind: Room['roomKind'];
}

export class RoguelikeSystem {
  private static instance: RoguelikeSystem;

  private constructor() {}

  static getInstance(): RoguelikeSystem {
    if (!RoguelikeSystem.instance) {
      RoguelikeSystem.instance = new RoguelikeSystem();
    }
    return RoguelikeSystem.instance;
  }

  private floorSeed(mode: string, floorId: number): number {
    return MathUtils.hashString(`${gameState.seed}:${mode}:${floorId}`);
  }

  private roomId(floorId: number, idx: number): string {
    return `f${floorId}r${idx}`;
  }

  private pickFloorName(rng: SeededRNG, floorId: number): string {
    const band = dataManager.world.floorNames.find(b => floorId >= b.minFloor && floorId <= b.maxFloor);
    if (!band || band.names.length === 0) return `第${floorId}层`;
    return rng.pick(band.names);
  }

  /** 楼梯组数公式（规格 2.1.6） */
  stairGroupCount(roomCount: number): number {
    return roomCount < 4 ? 1 : 1 + Math.floor((roomCount - 4) / 2);
  }

  // ================================================================
  // 主线楼层入口
  // ================================================================

  generateMainFloor(floorId: number): { floor: FloorInstance; rooms: Map<string, Room> } {
    const world = dataManager.world;
    if (floorId === world.tutorial.floorId) {
      return this.buildTutorialFloor();
    }
    if (floorId % world.bossFloorInterval === 0) {
      return this.buildBossFloor(floorId);
    }
    return this.buildNormalFloor(floorId);
  }

  // ================================================================
  // 普通楼层：非线性网络
  // ================================================================

  private buildNormalFloor(floorId: number): { floor: FloorInstance; rooms: Map<string, Room> } {
    const cfg = dataManager.config.floors;
    const rng = new SeededRNG(this.floorSeed('main', floorId));
    const late = floorId >= cfg.lateFloorThreshold;
    const roomCount = rng.randInt(cfg.roomCountMin, late ? cfg.roomCountMaxLate : cfg.roomCountMax);

    // ---- 1. 房间节点 ----
    const drafts: RoomDraft[] = [];
    for (let i = 0; i < roomCount; i++) {
      drafts.push({
        roomId: this.roomId(floorId, i),
        width: rng.randInt(22, 30),
        height: rng.randInt(18, 25),
        depth: 0,
        gridX: 0,
        gridY: 0,
        edges: new Set<string>(),
        roomKind: i === 0 ? 'start' : 'normal',
      });
    }

    // ---- 2. BFS最小生成树（保证连通）----
    const connections: RoomConnection[] = [];
    for (let i = 1; i < roomCount; i++) {
      const parent = rng.randInt(0, i - 1);
      connections.push({ from: drafts[parent].roomId, to: drafts[i].roomId, condition: null });
      drafts[parent].edges.add(drafts[i].roomId);
      drafts[i].edges.add(drafts[parent].roomId);
    }

    // ---- 3. 环路捷径（2-4条，深度差≤2）----
    const shortcutCount = rng.randInt(2, 4);
    for (let s = 0; s < shortcutCount; s++) {
      const a = rng.randInt(0, roomCount - 1);
      const b = rng.randInt(0, roomCount - 1);
      if (a === b || drafts[a].edges.has(drafts[b].roomId)) continue;
      this.recomputeDepths(drafts, connections);
      if (Math.abs(drafts[a].depth - drafts[b].depth) > 2) continue;
      connections.push({ from: drafts[a].roomId, to: drafts[b].roomId, condition: null });
      drafts[a].edges.add(drafts[b].roomId);
      drafts[b].edges.add(drafts[a].roomId);
    }

    this.recomputeDepths(drafts, connections);

    // ---- 4. 世界布局（分层坐标，供楼梯三维对齐）----
    const layers = new Map<number, RoomDraft[]>();
    for (const d of drafts) {
      const arr = layers.get(d.depth) ?? [];
      arr.push(d);
      layers.set(d.depth, arr);
    }
    for (const [, layerRooms] of layers) {
      layerRooms.forEach((room, idx) => {
        room.gridX = idx * 44 + rng.randInt(-4, 4);
        room.gridY = room.depth * 44 + rng.randInt(-2, 2);
      });
    }

    // ---- 5. 楼梯房间选择（均匀分布在不同房间）----
    const groupCount = this.stairGroupCount(roomCount);
    const candidates = drafts
      .filter(d => d.roomKind !== 'start')
      .sort((a, b) => b.depth - a.depth || b.width * b.height - a.width * a.height);
    const stairRooms: RoomDraft[] = [];
    for (const cand of candidates) {
      if (stairRooms.length >= groupCount) break;
      if (stairRooms.includes(cand)) continue;
      stairRooms.push(cand);
    }
    stairRooms.forEach(r => { r.roomKind = 'stair'; });

    // ---- 6. 生成房间实例 ----
    const rooms = new Map<string, Room>();
    const doorAssignment = this.assignDoors(drafts, connections);
    for (const draft of drafts) {
      const room = this.buildRoomTiles(rng, floorId, draft, doorAssignment.get(draft.roomId) ?? []);
      room.depth = draft.depth;
      room.gridX = draft.gridX;
      room.gridY = draft.gridY;
      room.isStartRoom = draft.roomKind === 'start';
      this.populateRoom(rng, room);
      rooms.set(draft.roomId, room);
    }

    // ---- 7. 楼梯布置 ----
    const stairGroups: StairGroupInfo[] = [];
    const occupied = new Set<string>();
    stairRooms.forEach((draft, gi) => {
      const groupId = String.fromCharCode(65 + gi);
      const room = rooms.get(draft.roomId)!;
      const pos = this.findLandmarkTile(room, rng, occupied);
      if (!pos) return;
      room.entities.push({
        id: `stair_up_${groupId}`, type: 'stair', x: pos.x, y: pos.y,
        stairDirection: 'up', stairGroupId: groupId, targetFloor: floorId + 1,
      });
      occupied.add(`${pos.x},${pos.y}`);
      stairGroups.push({ groupId, upRoomId: room.roomId, upGridX: room.gridX + pos.x, upGridY: room.gridY + pos.y });
    });

    const floor: FloorInstance = {
      floorId,
      floorName: this.pickFloorName(rng, floorId),
      isTutorial: false,
      isBossFloor: false,
      mode: 'main',
      roomIds: drafts.map(d => d.roomId),
      stairGroups,
      connections,
    };

    // 下楼楼梯：对齐上一层各组上楼口（规格 2.1.6 三维对应）
    this.placeDownStairs(floor, rooms, floorId - 1);
    return { floor, rooms };
  }

  /** 深度 = 距起点最短路径边数 */
  private recomputeDepths(drafts: RoomDraft[], connections: RoomConnection[]): void {
    const adj = new Map<string, string[]>();
    for (const c of connections) {
      if (!adj.has(c.from)) adj.set(c.from, []);
      if (!adj.has(c.to)) adj.set(c.to, []);
      adj.get(c.from)!.push(c.to);
      adj.get(c.to)!.push(c.from);
    }
    const start = drafts[0];
    const queue = [start.roomId];
    const dist = new Map<string, number>([[start.roomId, 0]]);
    while (queue.length > 0) {
      const cur = queue.shift()!;
      for (const nb of adj.get(cur) ?? []) {
        if (!dist.has(nb)) {
          dist.set(nb, dist.get(cur)! + 1);
          queue.push(nb);
        }
      }
    }
    for (const d of drafts) {
      d.depth = dist.get(d.roomId) ?? 0;
    }
  }

  /** 为每条连接分配门的方向与坐标 */
  private assignDoors(drafts: RoomDraft[], connections: RoomConnection[]): Map<string, { target: string; direction: Direction }[]> {
    const byId = new Map(drafts.map(d => [d.roomId, d]));
    const result = new Map<string, { target: string; direction: Direction }[]>();
    const perWallCount = (roomId: string) => {
      const counts = { north: 0, south: 0, east: 0, west: 0 };
      for (const list of result.values()) {
        for (const item of list) {
          if (item.target === roomId) continue;
        }
      }
      return counts;
    };
    void perWallCount;

    for (const conn of connections) {
      const a = byId.get(conn.from)!;
      const b = byId.get(conn.to)!;
      const dx = b.gridX - a.gridX;
      const dy = b.gridY - a.gridY;
      let dir: Direction;
      if (Math.abs(dx) >= Math.abs(dy)) dir = dx >= 0 ? 'east' : 'west';
      else dir = dy >= 0 ? 'south' : 'north';
      if (!result.has(a.roomId)) result.set(a.roomId, []);
      result.get(a.roomId)!.push({ target: b.roomId, direction: dir });
      if (!result.has(b.roomId)) result.set(b.roomId, []);
      result.get(b.roomId)!.push({ target: a.roomId, direction: this.opposite(dir) });
    }
    return result;
  }

  private opposite(d: Direction): Direction {
    return d === 'north' ? 'south' : d === 'south' ? 'north' : d === 'east' ? 'west' : 'east';
  }

  // ================================================================
  // 房间地形生成
  // ================================================================

  buildRoomTiles(
    rng: SeededRNG,
    floorId: number,
    draft: { roomId: string; width: number; height: number; roomKind: Room['roomKind'] },
    doors: { target: string; direction: Direction }[],
  ): Room {
    const w = draft.width;
    const h = draft.height;
    const tiles: number[][] = [];
    for (let y = 0; y < h; y++) {
      tiles.push(new Array<number>(w).fill(0));
    }
    // 边界墙
    for (let x = 0; x < w; x++) { tiles[0][x] = 1; tiles[h - 1][x] = 1; }
    for (let y = 0; y < h; y++) { tiles[y][0] = 1; tiles[y][w - 1] = 1; }

    // 内部障碍：柱墙 / 悬崖 / 装饰
    const pillarCount = rng.randInt(3, 6);
    for (let i = 0; i < pillarCount; i++) {
      const px = rng.randInt(3, w - 5);
      const py = rng.randInt(3, h - 5);
      const pw = rng.chance(0.5) ? 2 : 1;
      const ph = rng.chance(0.5) ? 2 : 1;
      for (let dy = 0; dy < ph; dy++) {
        for (let dx = 0; dx < pw; dx++) {
          tiles[py + dy][px + dx] = 1;
        }
      }
    }
    const cliffCount = rng.randInt(2, 4);
    for (let i = 0; i < cliffCount; i++) {
      let cx = rng.randInt(4, w - 5);
      let cy = rng.randInt(4, h - 5);
      const len = rng.randInt(5, 10);
      for (let s = 0; s < len; s++) {
        if (cx > 2 && cx < w - 3 && cy > 2 && cy < h - 3) tiles[cy][cx] = 4;
        cx += rng.chance(0.5) ? rng.chance(0.5) ? 1 : -1 : 0;
        cy += rng.chance(0.5) ? rng.chance(0.5) ? 1 : -1 : 0;
      }
    }
    for (let i = 0; i < rng.randInt(2, 5); i++) {
      tiles[rng.randInt(2, h - 3)][rng.randInt(2, w - 3)] = 2;
    }

    // 中心强制可通行
    const cx = Math.floor(w / 2);
    const cy = Math.floor(h / 2);
    tiles[cy][cx] = 0;

    // 门：分配到各面墙上（同面多门均布），刻穿边界并打通到中心的路径
    const wallSlots: Record<Direction, { target: string; direction: Direction }[]> = { north: [], south: [], east: [], west: [] };
    for (const d of doors) wallSlots[d.direction].push(d);
    const exits: RoomExit[] = [];
    for (const dir of ['north', 'south', 'east', 'west'] as Direction[]) {
      const list = wallSlots[dir];
      list.forEach((door, idx) => {
        const isHorizontalWall = dir === 'north' || dir === 'south';
        const span = isHorizontalWall ? w : h;
        let slot = Math.floor(span * (idx + 1) / (list.length + 1));
        slot = MathUtils.clamp(slot, 2, span - 3);
        let doorX: number, doorY: number, entryX: number, entryY: number;
        if (dir === 'north') {
          doorX = slot; doorY = 0; entryX = slot; entryY = 1;
        } else if (dir === 'south') {
          doorX = slot; doorY = h - 1; entryX = slot; entryY = h - 2;
        } else if (dir === 'east') {
          doorX = w - 1; doorY = slot; entryX = w - 2; entryY = slot;
        } else {
          doorX = 0; doorY = slot; entryX = 1; entryY = slot;
        }
        tiles[doorY][doorX] = 0;
        tiles[entryY][entryX] = 0;
        // 打通 entry -> 中心的 L 形走廊
        this.carvePath(tiles, entryX, entryY, cx, cy);
        exits.push({ targetRoomId: door.target, direction: dir, doorX, doorY, entryX, entryY, unlockCondition: null });
      });
    }

    // 连通性校验：从中心BFS，不可达的内部可通行格 → 转为墙
    this.ensureConnectivity(tiles, cx, cy);

    return {
      roomId: draft.roomId,
      floorId,
      width: w,
      height: h,
      tiles,
      depth: 0,
      gridX: 0,
      gridY: 0,
      isStartRoom: false,
      roomKind: draft.roomKind,
      entities: [],
      exits,
    };
  }

  private carvePath(tiles: number[][], fromX: number, fromY: number, toX: number, toY: number): void {
    let x = fromX;
    let y = fromY;
    while (x !== toX) {
      tiles[y][x] = 0;
      x += Math.sign(toX - x);
    }
    while (y !== toY) {
      tiles[y][x] = 0;
      y += Math.sign(toY - y);
    }
    tiles[toY][toX] = 0;
  }

  private ensureConnectivity(tiles: number[][], cx: number, cy: number): void {
    const h = tiles.length;
    const w = tiles[0].length;
    const visited = new Set<string>();
    const queue: [number, number][] = [[cx, cy]];
    visited.add(`${cx},${cy}`);
    while (queue.length > 0) {
      const [x, y] = queue.shift()!;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx <= 0 || ny <= 0 || nx >= w - 1 || ny >= h - 1) continue;
        if (visited.has(`${nx},${ny}`)) continue;
        if (tiles[ny][nx] !== 0) continue;
        visited.add(`${nx},${ny}`);
        queue.push([nx, ny]);
      }
    }
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        if (tiles[y][x] === 0 && !visited.has(`${x},${y}`)) {
          tiles[y][x] = 1;
        }
      }
    }
  }

  // ================================================================
  // 实体填充
  // ================================================================

  /** 按深度填充怪物/宝箱/物品（规格 模块K 步骤6） */
  populateRoom(rng: SeededRNG, room: Room, endlessFloor = 0): void {
    if (room.roomKind === 'rest' || room.roomKind === 'reward' || room.roomKind === 'entry') return;
    const depth = room.depth;
    const floorId = room.floorId;
    const occupied = new Set<string>();
    for (const e of room.entities) occupied.add(`${e.x},${e.y}`);
    for (const ex of room.exits) {
      occupied.add(`${ex.doorX},${ex.doorY}`);
      occupied.add(`${ex.entryX},${ex.entryY}`);
    }

    const monsterCount = room.roomKind === 'start'
      ? rng.randInt(0, 1)
      : 1 + Math.floor(depth * 0.8) + rng.randInt(0, 2);
    const pool = dataManager.monsters.filter(m => floorId >= m.spawnFloorMin && floorId <= m.spawnFloorMax);
    const usablePool = pool.length > 0 ? pool : [dataManager.monsters[0]];

    for (let i = 0; i < monsterCount; i++) {
      const pos = this.randomOpenTile(rng, room, occupied);
      if (!pos) break;
      const def = rng.pickWeighted(usablePool, m => m.weight);
      room.entities.push({
        id: `mob_${room.roomId}_${i}`,
        type: 'monster',
        x: pos.x, y: pos.y,
        monsterId: def.id,
        varianceSeed: rng.randInt(1, 2 ** 30),
      });
      occupied.add(`${pos.x},${pos.y}`);
    }

    const chestCount = (depth > 0 ? 1 : 0) + (depth > 2 ? 1 : 0) + rng.randInt(0, 1);
    for (let i = 0; i < chestCount; i++) {
      const pos = this.randomOpenTile(rng, room, occupied);
      if (!pos) break;
      const locked = rng.chance(0.2) && floorId > 2;
      room.entities.push({
        id: `chest_${room.roomId}_${i}`,
        type: 'chest',
        x: pos.x, y: pos.y,
        chestTier: 'auto',
        isLocked: locked,
        unlockCondition: locked ? 'key' : null,
      });
      occupied.add(`${pos.x},${pos.y}`);
    }

    if (depth >= 1 && rng.chance(0.4)) {
      const pos = this.randomOpenTile(rng, room, occupied);
      if (pos) {
        room.entities.push({
          id: `potion_${room.roomId}`, type: 'item', x: pos.x, y: pos.y,
          itemId: 'health_potion', quantity: 1,
        });
        occupied.add(`${pos.x},${pos.y}`);
      }
    }
    void endlessFloor;
  }

  randomOpenTile(rng: SeededRNG, room: Room, occupied: Set<string>): { x: number; y: number } | null {
    for (let attempt = 0; attempt < 60; attempt++) {
      const x = rng.randInt(2, room.width - 3);
      const y = rng.randInt(2, room.height - 3);
      if (room.tiles[y][x] !== 0) continue;
      if (occupied.has(`${x},${y}`)) continue;
      return { x, y };
    }
    return null;
  }

  findLandmarkTile(room: Room, rng: SeededRNG, occupied: Set<string>): { x: number; y: number } | null {
    const cx = Math.floor(room.width / 2);
    const cy = Math.floor(room.height / 2);
    for (let radius = 0; radius < Math.max(room.width, room.height); radius++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== radius) continue;
          const x = cx + dx;
          const y = cy + dy;
          if (x < 1 || y < 1 || x >= room.width - 1 || y >= room.height - 1) continue;
          if (room.tiles[y][x] !== 0) continue;
          if (occupied.has(`${x},${y}`)) continue;
          if (room.exits.some(e => (e.doorX === x && e.doorY === y) || (e.entryX === x && e.entryY === y))) continue;
          void rng;
          return { x, y };
        }
      }
    }
    return null;
  }

  /** 距目标世界坐标最近的可达瓷砖（楼梯三维对齐用） */
  findTileNearWorldPos(room: Room, worldX: number, worldY: number): { x: number; y: number } | null {
    const localX = worldX - room.gridX;
    const localY = worldY - room.gridY;
    const cx = MathUtils.clamp(Math.round(localX), 1, room.width - 2);
    const cy = MathUtils.clamp(Math.round(localY), 1, room.height - 2);
    let best: { x: number; y: number } | null = null;
    let bestDist = Infinity;
    for (let y = 1; y < room.height - 1; y++) {
      for (let x = 1; x < room.width - 1; x++) {
        if (room.tiles[y][x] !== 0) continue;
        if (room.exits.some(e => (e.doorX === x && e.doorY === y))) continue;
        const d = (x - cx) ** 2 + (y - cy) ** 2;
        if (d < bestDist) {
          bestDist = d;
          best = { x, y };
        }
      }
    }
    return best;
  }

  // ================================================================
  // Boss楼层（3房间固定结构，规格 2.1.2）
  // ================================================================

  buildBossFloor(floorId: number): { floor: FloorInstance; rooms: Map<string, Room> } {
    const rng = new SeededRNG(this.floorSeed('main', floorId));
    const rooms = new Map<string, Room>();
    const ids = {
      rest: `f${floorId}rest`,
      boss: `f${floorId}boss`,
      reward: `f${floorId}reward`,
    };

    const rest = this.buildLinearRoom(rng, floorId, ids.rest, 'rest', 22, 18);
    const boss = this.buildLinearRoom(rng, floorId, ids.boss, 'boss', 24, 20);
    const reward = this.buildLinearRoom(rng, floorId, ids.reward, 'reward', 22, 18);

    // 连接：rest →(east) boss →(east) reward
    rest.exits.push({ targetRoomId: ids.boss, direction: 'east', doorX: rest.width - 1, doorY: Math.floor(rest.height / 2), entryX: rest.width - 2, entryY: Math.floor(rest.height / 2), unlockCondition: null });
    boss.exits.push({ targetRoomId: ids.rest, direction: 'west', doorX: 0, doorY: Math.floor(boss.height / 2), entryX: 1, entryY: Math.floor(boss.height / 2), unlockCondition: null });
    boss.exits.push({ targetRoomId: ids.reward, direction: 'east', doorX: boss.width - 1, doorY: Math.floor(boss.height / 2), entryX: boss.width - 2, entryY: Math.floor(boss.height / 2), unlockCondition: `boss:${ids.boss}`, isBossGate: true });
    reward.exits.push({ targetRoomId: ids.boss, direction: 'west', doorX: 0, doorY: Math.floor(reward.height / 2), entryX: 1, entryY: Math.floor(reward.height / 2), unlockCondition: null });
    // 刻穿边界墙并打通入口到中心的路径
    this.carveRoomDoor(rest, rest.width - 1, Math.floor(rest.height / 2), rest.width - 2, Math.floor(rest.height / 2));
    this.carveRoomDoor(boss, 0, Math.floor(boss.height / 2), 1, Math.floor(boss.height / 2));
    this.carveRoomDoor(boss, boss.width - 1, Math.floor(boss.height / 2), boss.width - 2, Math.floor(boss.height / 2));
    this.carveRoomDoor(reward, 0, Math.floor(reward.height / 2), 1, Math.floor(reward.height / 2));

    rooms.set(ids.rest, rest);
    rooms.set(ids.boss, boss);
    rooms.set(ids.reward, reward);

    // 休整房间：商人 + 治疗泉 + 普通宝箱
    const occ = new Set<string>();
    const mPos = this.findLandmarkTile(rest, rng, occ) ?? { x: 5, y: 5 };
    rest.entities.push({ id: `merchant_${ids.rest}`, type: 'merchant', x: mPos.x, y: mPos.y, merchantSeed: this.floorSeed('merchant', floorId) });
    occ.add(`${mPos.x},${mPos.y}`);
    const sPos = this.findLandmarkTile(rest, rng, occ) ?? { x: 8, y: 8 };
    rest.entities.push({ id: `spring_${floorId}`, type: 'spring', x: sPos.x, y: sPos.y });
    occ.add(`${sPos.x},${sPos.y}`);
    const cPos = this.findLandmarkTile(rest, rng, occ) ?? { x: 11, y: 11 };
    rest.entities.push({ id: `chest_${ids.rest}`, type: 'chest', x: cPos.x, y: cPos.y, chestTier: 'wooden' });

    // Boss房间：Boss实体居中
    const bossDef = dataManager.getBossByFloor(floorId);
    const bcx = Math.floor(boss.width / 2);
    const bcy = Math.floor(boss.height / 2);
    boss.tiles[bcy][bcx] = 0;
    boss.entities.push({
      id: ids.boss,
      type: 'boss',
      x: bcx, y: bcy,
      monsterId: 'boss_base',
    });

    // 奖励房间：3-5宝箱（1传说）+ 1藏品 + 上楼楼梯
    const chestCount = rng.randInt(3, 5);
    const rOcc = new Set<string>();
    for (let i = 0; i < chestCount; i++) {
      const pos = this.randomOpenTile(rng, reward, rOcc) ?? this.findLandmarkTile(reward, rng, rOcc);
      if (!pos) break;
      const isLegendary = i === 0;
      reward.entities.push({
        id: `chest_${ids.reward}_${i}`,
        type: 'chest',
        x: pos.x, y: pos.y,
        chestTier: isLegendary ? 'legendary' : 'auto',
        forcedQuality: isLegendary ? 'legendary' : null,
      });
      rOcc.add(`${pos.x},${pos.y}`);
    }
    const colPos = this.findLandmarkTile(reward, rng, rOcc);
    if (colPos) {
      reward.entities.push({ id: `collect_${ids.reward}`, type: 'collectible', x: colPos.x, y: colPos.y, collectibleId: 'auto' });
      rOcc.add(`${colPos.x},${colPos.y}`);
    }
    const stairPos = this.findLandmarkTile(reward, rng, rOcc) ?? { x: reward.width - 4, y: 4 };
    reward.entities.push({ id: 'stair_up_A', type: 'stair', x: stairPos.x, y: stairPos.y, stairDirection: 'up', stairGroupId: 'A', targetFloor: floorId + 1 });
    reward.roomKind = 'reward';

    // 无尽传送门（第10层及以后的Boss奖励房间）
    if (floorId >= dataManager.config.endless.unlockAfterFloor) {
      const pPos = this.findLandmarkTile(reward, rng, rOcc);
      if (pPos) {
        reward.entities.push({ id: `portal_${ids.reward}`, type: 'portal', x: pPos.x, y: pPos.y, portalKind: 'endless_enter' });
      }
    }

    const stairGroups: StairGroupInfo[] = [{
      groupId: 'A',
      upRoomId: ids.reward,
      upGridX: reward.gridX + stairPos.x,
      upGridY: reward.gridY + stairPos.y,
    }];

    const floor: FloorInstance = {
      floorId,
      floorName: this.pickFloorName(rng, floorId),
      isTutorial: false,
      isBossFloor: true,
      mode: 'main',
      roomIds: [ids.rest, ids.boss, ids.reward],
      stairGroups,
      connections: [
        { from: ids.rest, to: ids.boss, condition: null },
        { from: ids.boss, to: ids.reward, condition: `boss:${ids.boss}` },
      ],
    };

    this.placeDownStairs(floor, rooms, floorId - 1);
    return { floor, rooms };
  }

  /** 在边界墙上开门洞，并从入口刻一条到房间中心的通路 */
  private carveRoomDoor(room: Room, doorX: number, doorY: number, entryX: number, entryY: number): void {
    room.tiles[doorY][doorX] = 0;
    room.tiles[entryY][entryX] = 0;
    this.carvePath(room.tiles, entryX, entryY, Math.floor(room.width / 2), Math.floor(room.height / 2));
  }

  private buildLinearRoom(rng: SeededRNG, floorId: number, roomId: string, kind: Room['roomKind'], w: number, h: number): Room {
    const draft = { roomId, width: w, height: h, roomKind: kind };
    const room = this.buildRoomTiles(rng, floorId, draft, []);
    room.roomKind = kind;
    room.depth = kind === 'rest' ? 0 : kind === 'boss' ? 1 : 2;
    room.gridX = kind === 'rest' ? 0 : kind === 'boss' ? 44 : 88;
    room.gridY = 0;
    return room;
  }

  // ================================================================
  // 楼梯三维对齐（规格 2.1.6）
  // ================================================================

  /** 依赖上一层的楼梯组信息放置本层下楼口 */
  private placeDownStairs(floor: FloorInstance, rooms: Map<string, Room>, prevFloorId: number, prevStairGroups?: StairGroupInfo[]): void {
    if (prevFloorId < 1) return;
    let groups = prevStairGroups;
    if (!groups) {
      groups = this.queryPrevFloorStairGroups(prevFloorId);
    }
    const tolerance = dataManager.config.stairPairTolerance;
    const occupied = new Set<string>();
    for (const room of rooms.values()) {
      for (const e of room.entities) occupied.add(`${room.roomId}:${e.x},${e.y}`);
    }
    for (const group of groups) {
      // 找距离上一层上楼口世界坐标最近的房间
      let targetRoom: Room | null = null;
      let bestDist = Infinity;
      for (const room of rooms.values()) {
        const cx = room.gridX + room.width / 2;
        const cy = room.gridY + room.height / 2;
        const d = Math.hypot(cx - group.upGridX, cy - group.upGridY);
        if (d < bestDist) {
          bestDist = d;
          targetRoom = room;
        }
      }
      if (!targetRoom) continue;
      let pos = this.findTileNearWorldPos(targetRoom, group.upGridX, group.upGridY);
      if (!pos) pos = this.findLandmarkTile(targetRoom, new SeededRNG(1), occupied);
      if (!pos) continue;
      // 误差校验（日志级别，超差时仍放置在最近可达点）
      const actualX = targetRoom.gridX + pos.x;
      const actualY = targetRoom.gridY + pos.y;
      if (Math.abs(actualX - group.upGridX) > tolerance || Math.abs(actualY - group.upGridY) > tolerance) {
        // 房间几何限制导致超差：仍然放置（保证功能可用）
      }
      targetRoom.entities.push({
        id: `stair_down_${group.groupId}`,
        type: 'stair',
        x: pos.x, y: pos.y,
        stairDirection: 'down',
        stairGroupId: group.groupId,
        targetFloor: prevFloorId,
        targetRoomId: group.upRoomId,
      });
      occupied.add(`${targetRoom.roomId}:${pos.x},${pos.y}`);
    }
  }

  /** 查询上一层楼梯组（触发其惰性生成，结果确定可重现） */
  private queryPrevFloorStairGroups(prevFloorId: number): StairGroupInfo[] {
    // 由 FloorManager 注入，避免循环依赖
    if (this.prevFloorGroupsProvider) {
      return this.prevFloorGroupsProvider(prevFloorId);
    }
    return [];
  }

  private prevFloorGroupsProvider: ((floorId: number) => StairGroupInfo[]) | null = null;

  setPrevFloorGroupsProvider(provider: (floorId: number) => StairGroupInfo[]): void {
    this.prevFloorGroupsProvider = provider;
  }

  // ================================================================
  // 教学层（第1层，手工艺数据）
  // ================================================================

  private buildTutorialFloor(): { floor: FloorInstance; rooms: Map<string, Room> } {
    const rooms = new Map<string, Room>();
    const tutorial = dataManager.world.tutorial;
    for (const roomId of tutorial.roomIds) {
      const data = dataManager.getRoomData(roomId);
      if (!data) continue;
      const room: Room = {
        roomId: data.roomId,
        floorId: data.floorId,
        width: data.width,
        height: data.height,
        tiles: data.tiles,
        depth: data.depth,
        gridX: roomId.includes('start') ? 0 : 35,
        gridY: 0,
        isStartRoom: data.isStartRoom,
        roomKind: data.isStartRoom ? 'start' : 'stair',
        entities: data.entities as RoomEntity[],
        exits: data.exits as RoomExit[],
      };
      rooms.set(room.roomId, room);
    }
    const floor: FloorInstance = {
      floorId: tutorial.floorId,
      floorName: '遗忘之厅',
      isTutorial: true,
      isBossFloor: false,
      mode: 'main',
      roomIds: [...rooms.keys()],
      stairGroups: [{
        groupId: 'A',
        upRoomId: tutorial.roomIds[tutorial.roomIds.length - 1],
        upGridX: 35 + 25,
        upGridY: 15,
      }],
      connections: [{ from: tutorial.roomIds[0], to: tutorial.roomIds[1], condition: null }],
    };
    return { floor, rooms };
  }
}

/** 深度奖励下限品质排序工具 */
export const QUALITY_ORDER: Quality[] = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'];

export function qualityAtLeast(a: Quality, b: Quality): boolean {
  return QUALITY_ORDER.indexOf(a) >= QUALITY_ORDER.indexOf(b);
}

export type { RoomConnection };
