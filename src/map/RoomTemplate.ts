/**
 * 房间模板（Room Template）——**纯数据层**，无 DOM，可无头测试。
 *
 * 它是「房间编辑器」与「预制地图（PrefabMap）」之间的唯一桥梁：
 *
 *   编辑器画布（cells：图例字符）── templateRows() ──▶ 字符图 rows
 *                                   └─ templateToPrefab() ─▶ PrefabMapDef ─▶ buildPrefabFloor() ─▶ FloorMap
 *
 * 为什么必须经过这一层：门的判定（PrefabMap.buildRooms）是「房间边界上的空地格，且房外相邻格也是空地」。
 * 编辑器只画房间本身，因此导出时要在墙外补 `TEMPLATE_MARGIN` 格走廊「门槽」，否则门上没路 = 不算门。
 * 方向（entry / exits）在这里是**显式字段**，不是从网格事后观察出来的——出口不同，玩家的进入侧
 * 与去路就不同，主路径/守军摆位/装饰朝向都应随之变化（设计规范见 `docs/房间编辑器.md`）。
 *
 * `risk` / `tension` / `note` 同理是设计者显式标注的**设计维度**：`tension`（张力值）与
 * `mapGeneration.tension.weights` 同尺度，是**后续「房间类型决定」**的输入（手工房也能参与运气平衡器）。
 */
import type { Direction, RoomType } from '../types';
import type { PrefabMapDef, PrefabRoomDef } from './PrefabMap';
import { patternFromExits } from './ExitPattern';

/** 房间矩形到画布的内边距（格）：外圈用于自动生成走廊门槽 */
export const TEMPLATE_MARGIN = 2;

/** 房间模板：`cells` 为行优先的图例字符数组（长度 w×h，含四周墙圈） */
export interface RoomTemplate {
  w: number;
  h: number;
  cells: string[];
  type: RoomType;
  name?: string;
  /** 入口方向：玩家从哪边进房（写入 `RoomData.fromDirection`） */
  entry?: Direction | null;
  /** 出口方向（门所在边）；导出时自动在墙外补走廊门槽 */
  exits?: Direction[];
  /**
   * 风险档 1~3（可选）：标了就按 `mapGeneration.content.risk.rewardMul` 结算房内宝箱收益。
   * 预制房不走 `ContentFiller`（内容是手绘的），所以风险必须由设计者显式标注。
   */
  risk?: 1 | 2 | 3 | null;
  /**
   * 张力值（可选）：本房对路径张力的贡献，与 `mapGeneration.tension.weights` 同尺度
   * （正=加压 / 负=泄压）。`null`/缺省 = 跟随房型默认权重；显式标注可让房间偏离房型默认，
   * 供**后续「房间类型决定」**（例如按张力梯度安排战斗/精英/安全房）使用。
   */
  tension?: number | null;
  note?: string;
}

const DIRS: Direction[] = ['north', 'east', 'south', 'west'];

/** 四周一圈默认墙、内部默认空地 */
export function defaultCellAt(w: number, h: number, rx: number, ry: number): string {
  return (rx === 0 || ry === 0 || rx === w - 1 || ry === h - 1) ? '1' : '0';
}

/** 新建一个尺寸 w×h 的空房间模板 */
export function newTemplate(w: number, h: number, type: RoomType): RoomTemplate {
  const cells = Array.from({ length: w * h }, (_, i) => defaultCellAt(w, h, i % w, Math.floor(i / w)));
  return { w, h, cells, type, entry: null, exits: [] };
}

/** 房间坐标 → 画布坐标 */
export function toCanvas(rx: number, ry: number): { x: number; y: number } {
  return { x: rx + TEMPLATE_MARGIN, y: ry + TEMPLATE_MARGIN };
}

/** 画布宽高（含门槽外圈） */
export function canvasSize(t: RoomTemplate): { w: number; h: number } {
  return { w: t.w + TEMPLATE_MARGIN * 2, h: t.h + TEMPLATE_MARGIN * 2 };
}

/** 格是否在房间矩形内（画布坐标） */
export function isInside(t: RoomTemplate, cx: number, cy: number): boolean {
  return cx >= TEMPLATE_MARGIN && cx < TEMPLATE_MARGIN + t.w
    && cy >= TEMPLATE_MARGIN && cy < TEMPLATE_MARGIN + t.h;
}

/** 该方向「门」所在的房间边界格（画布坐标） */
export function doorCell(t: RoomTemplate, d: Direction): { x: number; y: number } {
  const mx = Math.floor(t.w / 2);
  const my = Math.floor(t.h / 2);
  if (d === 'north') return toCanvas(mx, 0);
  if (d === 'south') return toCanvas(mx, t.h - 1);
  if (d === 'west') return toCanvas(0, my);
  return toCanvas(t.w - 1, my);
}

/** 该方向的走廊门槽（画布坐标，房间外 TEMPLATE_MARGIN 格） */
export function stubCells(t: RoomTemplate, d: Direction): { x: number; y: number }[] {
  const size = canvasSize(t);
  const door = doorCell(t, d);
  const out: { x: number; y: number }[] = [];
  if (d === 'north') { for (let y = 0; y < TEMPLATE_MARGIN; y++) out.push({ x: door.x, y }); }
  else if (d === 'south') { for (let y = TEMPLATE_MARGIN + t.h; y < size.h; y++) out.push({ x: door.x, y }); }
  else if (d === 'west') { for (let x = 0; x < TEMPLATE_MARGIN; x++) out.push({ x, y: door.y }); }
  else { for (let x = TEMPLATE_MARGIN + t.w; x < size.w; x++) out.push({ x, y: door.y }); }
  return out;
}

/** 入口标记的内侧格（画布坐标） */
export function entryInnerCell(t: RoomTemplate, d: Direction): { x: number; y: number } {
  const mx = Math.floor(t.w / 2);
  const my = Math.floor(t.h / 2);
  if (d === 'north') return toCanvas(mx, 1);
  if (d === 'south') return toCanvas(mx, t.h - 2);
  if (d === 'west') return toCanvas(1, my);
  return toCanvas(t.w - 2, my);
}

/** 模板 → 字符图（含门口与走廊门槽；门格强制为空地，否则 PrefabMap 认不出门） */
export function templateRows(t: RoomTemplate): string[] {
  const size = canvasSize(t);
  const g: string[][] = Array.from({ length: size.h }, () => Array<string>(size.w).fill('1'));
  for (let ry = 0; ry < t.h; ry++) {
    for (let rx = 0; rx < t.w; rx++) {
      g[ry + TEMPLATE_MARGIN][rx + TEMPLATE_MARGIN] = t.cells[ry * t.w + rx] ?? '0';
    }
  }
  for (const d of t.exits ?? []) {
    const door = doorCell(t, d);
    g[door.y][door.x] = '0';
    for (const p of stubCells(t, d)) g[p.y][p.x] = '0';
  }
  return g.map(row => row.join(''));
}

/** 模板 → 预制地图定义（floorId 由调用方给；kind 缺省 normal） */
export function templateToPrefab(t: RoomTemplate, floorId: number): PrefabMapDef {
  const room: PrefabRoomDef = {
    x: TEMPLATE_MARGIN, y: TEMPLATE_MARGIN, w: t.w, h: t.h, type: t.type,
  };
  if (t.name) room.name = t.name;
  if (t.entry) room.entry = t.entry;
  if (t.exits && t.exits.length > 0) {
    room.exits = DIRS.filter(d => t.exits!.includes(d));
    room.pattern = patternFromExits(room.exits);
  }
  if (t.risk) room.risk = t.risk;
  if (typeof t.tension === 'number') room.tension = t.tension;
  if (t.note) room.note = t.note;
  return { floorId, kind: 'normal', rooms: [room], rows: templateRows(t) };
}

/**
 * 预制地图定义 → 模板（取第一个房间）。用于「把已有预制图载回编辑器继续改」。
 * 与 `templateToPrefab` 构成往返：`prefabToTemplate(templateToPrefab(t))` 应等价于 `t`。
 */
export function prefabToTemplate(def: PrefabMapDef, fallbackType: RoomType = 'combat'): RoomTemplate {
  const room = def.rooms[0];
  const cells: string[] = [];
  for (let ry = 0; ry < room.h; ry++) {
    for (let rx = 0; rx < room.w; rx++) {
      cells.push(def.rows[room.y + ry]?.[room.x + rx] ?? '1');
    }
  }
  const t: RoomTemplate = { w: room.w, h: room.h, cells, type: room.type ?? fallbackType };
  if (room.name) t.name = room.name;
  if (room.note) t.note = room.note;
  if (room.risk) t.risk = room.risk;
  t.tension = typeof room.tension === 'number' ? room.tension : null;
  t.entry = room.entry ?? null;
  // exits：优先用显式声明；否则按网格实际门口（边界空地 + 房外空地）反推
  t.exits = room.exits && room.exits.length > 0 ? [...room.exits] : deriveExits(def, room);
  return t;
}

/** 按网格反推出口方向（与 PrefabMap.buildRooms 的门判定同规则） */
export function deriveExits(def: PrefabMapDef, room: PrefabRoomDef): Direction[] {
  const out: Direction[] = [];
  const floorAt = (x: number, y: number): boolean => def.rows[y]?.[x] === '0' || def.rows[y]?.[x] === ' '
    || def.rows[y]?.[x] === 'S';
  const probes: { d: Direction; dx: number; dy: number }[] = [
    { d: 'north', dx: 0, dy: -1 }, { d: 'south', dx: 0, dy: 1 },
    { d: 'west', dx: -1, dy: 0 }, { d: 'east', dx: 1, dy: 0 },
  ];
  for (const { d, dx, dy } of probes) {
    let hit = false;
    for (let y = room.y; y < room.y + room.h && !hit; y++) {
      for (let x = room.x; x < room.x + room.w && !hit; x++) {
        const onEdge = (d === 'north' && y === room.y) || (d === 'south' && y === room.y + room.h - 1)
          || (d === 'west' && x === room.x) || (d === 'east' && x === room.x + room.w - 1);
        if (!onEdge) continue;
        if (!floorAt(x, y)) continue;
        if (floorAt(x + dx, y + dy)) hit = true;
      }
    }
    if (hit) out.push(d);
  }
  return DIRS.filter(d => out.includes(d));
}
