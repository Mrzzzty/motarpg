/**
 * 预制地图（Prefab Map）支持 —— 为手工设计的固定地图准备。
 *
 * 字符图例（rows 中每个字符 = 一格）：
 *   '0' 或 ' ' = 空地（可通行）
 *   '1'        = 墙壁
 *   '2'        = 敌人（普通怪物，站在空地上，按楼层权重随机）
 *   '3'        = 精英怪（isElite）
 *   '4'        = 宝箱
 *   '5'        = 商人NPC
 *   'S'        = 玩家入口（可省略，默认第一个房间中心）
 *   'B'        = Boss（固定 ancient_dragon）
 *   'D'        = 通往下一层的楼梯
 *   其他字符    = 按墙壁处理（并输出警告）
 *
 * 重要约定：只有字符图中用空地实际连通的房间才算连通。
 * 房间矩形只是标注（用于房间名/类型/进入检测），两房间即使相邻，
 * 若中间没有可通行的地面格，则不生成连接（connections 不含该边）。
 * 连通性通过在网格上做 BFS 实测得出。
 */
import type { Direction, FloorKind, FloorMap, MapEntity, RoomData, RoomDoor, RoomType, TileCode } from '../types';
import { dataManager } from '../core/DataManager';
import { IdGenerator } from '../utils/IdGenerator';
import { rng } from '../utils/MathUtils';
import { Logger } from '../utils/Logger';

/** 预制地图中的一个房间标注（网格坐标，含于字符图同坐标系） */
export interface PrefabRoomDef {
  x: number;
  y: number;
  w: number;
  h: number;
  type: RoomType;
  name?: string;
}

/** 预制地图定义 */
export interface PrefabMapDef {
  floorId: number;
  kind?: FloorKind;
  /** 字符行数组，每行等宽（可不等宽，短行右侧按墙壁补齐） */
  rows: string[];
  /** 房间标注列表 */
  rooms: PrefabRoomDef[];
  /** 玩家入口（省略则用 'S' 或第一个房间中心） */
  entry?: { x: number; y: number };
}

const DIRS: { d: Direction; dx: number; dy: number }[] = [
  { d: 'north', dx: 0, dy: -1 },
  { d: 'south', dx: 0, dy: 1 },
  { d: 'west', dx: -1, dy: 0 },
  { d: 'east', dx: 1, dy: 0 },
];

/** 解析字符行 → 网格 + 实体 */
function parseRows(rows: string[], floorId: number): { grid: TileCode[][]; entities: MapEntity[] } {
  const height = rows.length;
  const width = Math.max(...rows.map(r => r.length));
  const grid: TileCode[][] = Array.from({ length: height }, () => Array<TileCode>(width).fill(1));
  const entities: MapEntity[] = [];

  const monsterPool = dataManager.monsters.monsters.filter(
    m => m.category === 'normal' && floorId >= m.floorMin && floorId <= m.floorMax,
  );

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const ch = rows[y][x] ?? '1';
      switch (ch) {
        case '0': case ' ':
          grid[y][x] = 0;
          break;
        case '1':
          grid[y][x] = 1;
          break;
        case '2': case '3': {
          grid[y][x] = 0;
          if (monsterPool.length === 0) break;
          const def = rng.pickWeighted(monsterPool, m => m.weight);
          entities.push({
            id: IdGenerator.next('ent'), kind: 'monster', x, y,
            monsterId: def.id, isElite: ch === '3',
          });
          break;
        }
        case '4':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'chest', x, y, chestTier: 'normal' });
          break;
        case '5':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'npc', x, y, npcId: 'npc_merchant' });
          break;
        case 'B':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'boss', x, y, monsterId: 'ancient_dragon' });
          break;
        case 'D':
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next('ent'), kind: 'stair', x, y, targetFloor: floorId + 1 });
          break;
        case 'S':
          grid[y][x] = 0;
          break;
        default:
          Logger.warn(`[Prefab] 楼层${floorId} (${x},${y}) 非法字符 '${ch}'，按墙壁处理`);
          grid[y][x] = 1;
          break;
      }
    }
  }
  return { grid, entities };
}

/** 房间标注 → RoomData（含门检测：房间边界上与外部空地相邻的地面格） */
function buildRooms(defs: PrefabRoomDef[], floorId: number, entities: MapEntity[], grid: TileCode[][]): RoomData[] {
  const roomAt = (x: number, y: number): RoomData | null =>
    defs.reduce<RoomData | null>((acc, r, i) => {
      if (acc) return acc;
      if (x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h) {
        return { id: `pf${floorId}_r${i}` } as RoomData;
      }
      return null;
    }, null);

  return defs.map((r, i) => {
    const roomId = `pf${floorId}_r${i}`;
    const isInside = (x: number, y: number) => x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h;
    const doors: RoomDoor[] = [];
    // 边界一圈：地面格且正交相邻的房格外空地 → 门（指向该格所属房间）
    for (let y = r.y; y < r.y + r.h; y++) {
      for (let x = r.x; x < r.x + r.w; x++) {
        const onEdge = x === r.x || x === r.x + r.w - 1 || y === r.y || y === r.y + r.h - 1;
        if (!onEdge || grid[y]?.[x] !== 0) continue;
        for (const { d, dx, dy } of DIRS) {
          const ox = x + dx;
          const oy = y + dy;
          if (isInside(ox, oy)) continue;
          if (grid[oy]?.[ox] !== 0) continue;
          doors.push({ x, y, direction: d, toRoomId: roomAt(ox, oy)?.id ?? '' });
        }
      }
    }
    return {
      id: roomId,
      floorId,
      type: r.type,
      order: i,
      gx: r.x,
      gy: r.y,
      width: r.w,
      height: r.h,
      x: r.x,
      y: r.y,
      centerX: r.x + Math.floor(r.w / 2),
      centerY: r.y + Math.floor(r.h / 2),
      fromDirection: null,
      depth: 0,
      onPathA: false,
      onPathB: false,
      mountedOn: null,
      doors,
      entities: entities.filter(e => e.x >= r.x && e.x < r.x + r.w && e.y >= r.y && e.y < r.y + r.h),
    };
  });
}

/** 在网格上做 BFS：返回从 (sx,sy) 出发可达的所有空地格 */
function reachableTiles(grid: TileCode[][], sx: number, sy: number): Set<string> {
  const seen = new Set<string>();
  if (grid[sy]?.[sx] !== 0) return seen;
  const queue: { x: number; y: number }[] = [{ x: sx, y: sy }];
  seen.add(`${sx},${sy}`);
  while (queue.length > 0) {
    const cur = queue.shift()!;
    for (const { dx, dy } of DIRS) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (seen.has(key)) continue;
      if (grid[ny]?.[nx] !== 0) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  return seen;
}

/**
 * 预制地图 → FloorMap。
 * 连接（connections）按实际可通行路径计算：从每个房间中心 BFS，
 * 能走到的其他房间才算连通 —— 相邻但无通道的房间不会被误连。
 */
export function buildPrefabFloor(def: PrefabMapDef): FloorMap {
  const { grid, entities } = parseRows(def.rows, def.floorId);
  const width = grid[0]?.length ?? 0;
  const height = grid.length;

  // 未标注的入口：'S' 字符位置（parseRows 不记录，这里再扫一遍）
  let entry = def.entry ?? null;
  if (!entry) {
    for (let y = 0; y < height && !entry; y++) {
      for (let x = 0; x < width && !entry; x++) {
        if ((def.rows[y]?.[x] ?? '1') === 'S') entry = { x, y };
      }
    }
  }

  const rooms = buildRooms(def.rooms, def.floorId, entities, grid);
  if (rooms.length === 0) throw new Error(`[Prefab] 楼层${def.floorId} 未定义任何房间`);

  // 入口落点：entry → 'S' → 第一个房间中心（都要求是空地）
  const entryPoint = [entry, rooms[0] ? { x: rooms[0].centerX, y: rooms[0].centerY } : null]
    .find((p): p is { x: number; y: number } => !!p && grid[p.y]?.[p.x] === 0);
  if (!entryPoint) throw new Error(`[Prefab] 楼层${def.floorId} 入口无效（必须是空地）`);

  // 实体归属：落在任何房间矩形外的实体挂到最近房间（否则 WorldManager 查询不到）
  for (const e of entities) {
    const inRoom = rooms.some(r => e.x >= r.x && e.x < r.x + r.width && e.y >= r.y && e.y < r.y + r.height);
    if (inRoom) continue;
    let nearest = rooms[0];
    let best = Infinity;
    for (const r of rooms) {
      const d = Math.abs(r.centerX - e.x) + Math.abs(r.centerY - e.y);
      if (d < best) { best = d; nearest = r; }
    }
    Logger.warn(`[Prefab] 楼层${def.floorId} 实体 ${e.id} (${e.x},${e.y}) 在所有房间外，挂到 ${nearest.id}`);
    nearest.entities.push(e);
  }

  // 连接：从每个房间中心 BFS，可达的其他房间中心 → 连通
  const connections: { from: string; to: string }[] = [];
  const seenPairs = new Set<string>();
  for (const r of rooms) {
    const start = grid[r.centerY]?.[r.centerX] === 0
      ? { x: r.centerX, y: r.centerY }
      : rooms.map(rr => ({ x: rr.centerX, y: rr.centerY })).find(p => grid[p.y]?.[p.x] === 0);
    if (!start) continue;
    const reach = reachableTiles(grid, start.x, start.y);
    for (const other of rooms) {
      if (other.id === r.id) continue;
      if (grid[other.centerY]?.[other.centerX] !== 0) continue;
      if (!reach.has(`${other.centerX},${other.centerY}`)) continue;
      const key = [r.id, other.id].sort().join('|');
      if (seenPairs.has(key)) continue;
      seenPairs.add(key);
      connections.push({ from: r.id, to: other.id });
    }
  }

  return {
    floorId: def.floorId,
    kind: def.kind ?? 'normal',
    rooms,
    corridors: [], // 预制地图的走廊直接体现在网格空地里，无需单独数据
    connections,
    grid,
    width,
    height,
    entryX: entryPoint.x,
    entryY: entryPoint.y,
  };
}
