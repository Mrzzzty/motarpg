/**
 * 第3层：房间生成器（文档二 第四节）
 * 决定：每个房间的位置、大小、排列方向。
 *
 * 排列规则：起点固定(0,0)，后续房间放在上一房间相邻位（相距1个房间单位）。
 * 方向约束（优先级）：1禁止重合 2与起点距离≤2√2 3禁止折返 4连续2次同向后必须转弯 5边界限制。
 * 极端情况：所有方向被排除 → 强制最近空白方向；生成失败由上层重试。
 */
import type { Direction, RoomData, RoomType, TileCode } from '../types';
import { dataManager } from '../core/DataManager';
import { rng, MathUtils } from '../utils/MathUtils';
import { IdGenerator } from '../utils/IdGenerator';
import type { PlannedRoom } from './PathGenerator';

const DIR_VECTORS: Record<Direction, { dx: number; dy: number }> = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 },
};

const OPPOSITE: Record<Direction, Direction> = {
  north: 'south', south: 'north', east: 'west', west: 'east',
};

export interface PlacementResult {
  rooms: RoomData[];
  grid: TileCode[][];
}

export class RoomGenerator {
  private static instance: RoomGenerator;
  private constructor() {}
  static getInstance(): RoomGenerator {
    if (!RoomGenerator.instance) RoomGenerator.instance = new RoomGenerator();
    return RoomGenerator.instance;
  }

  /**
   * 按链顺序放置房间。返回 null 表示放置失败（由上层重试整层）。
   */
  place(floorId: number, plan: PlannedRoom[]): PlacementResult | null {
    const cfg = dataManager.mapGen;
    const R = cfg.gridRadius;
    const maxW = this.maxSpecWidth();
    const maxH = this.maxSpecHeight();
    const gridW = 2 * R * cfg.cellSpacingX + maxW;
    const gridH = 2 * R * cfg.cellSpacingY + maxH;

    const occupied = new Map<string, number>(); // "gx,gy" -> room index
    const rooms: RoomData[] = [];
    const dirHistory: Direction[] = [];

    // 偏置目标：让同路径相邻房间几何相邻（为走廊捷径创造条件）
    const railPos = new Map<string, { gx: number; gy: number }>(); // "A0","B1"...

    for (let i = 0; i < plan.length; i++) {
      const planned = plan[i];
      let gx = 0;
      let gy = 0;
      let fromDirection: Direction | null = null;

      if (i === 0) {
        gx = 0; gy = 0; // 起点固定 (0,0)
      } else {
        const prev = rooms[i - 1];
        const target = this.biasTarget(planned, plan, rooms, railPos);
        const choice = this.chooseCell(prev.gx, prev.gy, occupied, dirHistory, target);
        if (!choice) return null;
        gx = choice.gx;
        gy = choice.gy;
        fromDirection = choice.direction;
      }

      const key = `${gx},${gy}`;
      if (occupied.has(key)) return null;
      occupied.set(key, i);

      const size = this.rollSize(planned.type);
      const x = (gx + R) * cfg.cellSpacingX;
      const y = (gy + R) * cfg.cellSpacingY;
      const room: RoomData = {
        id: `room_${floorId}_${i}`,
        floorId,
        type: planned.type,
        order: i,
        gx, gy,
        width: size.width,
        height: size.height,
        x, y,
        centerX: x + Math.floor(size.width / 2),
        centerY: y + Math.floor(size.height / 2),
        fromDirection,
        depth: 0,
        onPathA: planned.rail === 'A',
        onPathB: planned.rail === 'B',
        mountedOn: planned.rail === 'side' ? this.mountedOnId(plan, planned, floorId) : null,
        doors: [],
        entities: [],
      };
      rooms.push(room);
      if (planned.rail === 'A' || planned.rail === 'B') {
        railPos.set(`${planned.rail}${planned.railIndex}`, { gx, gy });
      }
      if (fromDirection) dirHistory.push(fromDirection);
    }

    // 组装网格：全部初始化为虚空(-1)，房间区域挖出（内圈地板0，外圈墙1）
    const grid: TileCode[][] = Array.from({ length: gridH }, () => Array.from({ length: gridW }, () => -1));
    for (const room of rooms) {
      // 外圈墙
      for (let ry = room.y; ry <= room.y + room.height - 1; ry++) {
        for (let rx = room.x; rx <= room.x + room.width - 1; rx++) {
          grid[ry][rx] = 1;
        }
      }
      // 内部地板
      for (let ry = room.y + 1; ry <= room.y + room.height - 2; ry++) {
        for (let rx = room.x + 1; rx <= room.x + room.width - 2; rx++) {
          grid[ry][rx] = 0;
        }
      }
    }
    void IdGenerator.next('gen'); // 保持计数器节奏（布局重生成时ID稳定递增）
    return { rooms, grid };
  }

  /** 计算偏置目标格：同路径前驱 / 起点闭合边 / 终点闭合边 */
  private biasTarget(
    planned: PlannedRoom,
    plan: PlannedRoom[],
    rooms: RoomData[],
    railPos: Map<string, { gx: number; gy: number }>,
  ): { gx: number; gy: number } | null {
    if (planned.rail === 'A' && planned.railIndex > 0) {
      return railPos.get(`A${planned.railIndex - 1}`) ?? null;
    }
    if (planned.rail === 'B' && planned.railIndex > 0) {
      return railPos.get(`B${planned.railIndex - 1}`) ?? null;
    }
    if (planned.rail === 'B' && planned.railIndex === 0) {
      return { gx: 0, gy: 0 }; // b0 靠近起点（闭合边 S↔b0）
    }
    if (planned.rail === 'E') {
      const lastA = plan.filter(p => p.rail === 'A').length - 1;
      if (lastA >= 0) return railPos.get(`A${lastA}`) ?? null;
    }
    void rooms;
    return null;
  }

  /**
   * 方向选择：先应用硬约束（禁止重合 + 距离≤2√2 + 边界），
   * 再按放宽阶梯应用软约束（禁止折返 → 连续直走限制），带偏置评分。
   */
  private chooseCell(
    px: number, py: number,
    occupied: Map<string, number>,
    dirHistory: Direction[],
    bias: { gx: number; gy: number } | null,
  ): { gx: number; gy: number; direction: Direction } | null {
    const cfg = dataManager.mapGen;
    const R = cfg.gridRadius;
    const maxDist = 2 * Math.SQRT2 + 1e-9;
    const lastDir = dirHistory[dirHistory.length - 1] ?? null;

    const allDirs: Direction[] = ['north', 'south', 'east', 'west'];
    const shuffled = rng.shuffle(allDirs);

    const inBounds = (gx: number, gy: number) => Math.abs(gx) <= R && Math.abs(gy) <= R;

    const tryPick = (allowReverse: boolean, allowStraight: boolean) => {
      const candidates: { gx: number; gy: number; direction: Direction; score: number }[] = [];
      for (const dir of shuffled) {
        if (!allowReverse && lastDir && dir === OPPOSITE[lastDir]) continue; // 禁止折返
        if (!allowStraight && this.isThirdStraight(dir, dirHistory)) continue; // 连续直走限制
        const { dx, dy } = DIR_VECTORS[dir];
        const gx = px + dx;
        const gy = py + dy;
        if (occupied.has(`${gx},${gy}`)) continue;               // 禁止重合
        if (!inBounds(gx, gy)) continue;                          // 边界限制
        if (MathUtils.dist(gx, gy, 0, 0) > maxDist) continue;     // 与起点距离 ≤ 2√2
        let score = rng.next(); // 随机打底
        if (bias && MathUtils.manhattan(gx, gy, bias.gx, bias.gy) <= 1) score += 3; // 偏置：与同路径前驱相邻
        candidates.push({ gx, gy, direction: dir, score });
      }
      if (candidates.length === 0) return null;
      candidates.sort((a, b) => b.score - a.score);
      return candidates[0];
    };

    // 放宽阶梯：全约束 → 放开直走限制 → 放开折返限制 → 强制最近空白方向（均在网格边界内）
    return tryPick(false, false)
      ?? tryPick(true, false)
      ?? tryPick(true, true)
      ?? this.nearestFreeCell(px, py, occupied, R);
  }

  /** 第3次连续同向判定 */
  private isThirdStraight(dir: Direction, history: Direction[]): boolean {
    const n = history.length;
    if (n < 2) return false;
    return history[n - 1] === dir && history[n - 2] === dir;
  }

  /** 强制选择：打破常规约束（折返/直走/优先级），取距离约束内最近的空白方向 */
  private nearestFreeCell(px: number, py: number, occupied: Map<string, number>, R: number) {
    let best: { gx: number; gy: number; direction: Direction } | null = null;
    let bestD = Infinity;
    for (const dir of Object.keys(DIR_VECTORS) as Direction[]) {
      const { dx, dy } = DIR_VECTORS[dir];
      const gx = px + dx;
      const gy = py + dy;
      if (occupied.has(`${gx},${gy}`)) continue;
      if (Math.abs(gx) > R || Math.abs(gy) > R) continue;
      if (MathUtils.dist(gx, gy, 0, 0) > 2 * Math.SQRT2 + 1e-9) continue;
      const d = MathUtils.dist(gx, gy, 0, 0);
      if (d < bestD) { bestD = d; best = { gx, gy, direction: dir }; }
    }
    return best;
  }

  /**
   * 房间规格（文档二 4.1）：表中数值 = 内部可活动空间（不含外圈墙壁），
   * 实际占地 = 规格 + 2（四面各一圈墙）。
   */
  private rollSize(type: RoomType): { width: number; height: number } {
    const spec = dataManager.mapGen.roomSpecs[type];
    const roll = (v: number | number[]) => Array.isArray(v) ? rng.randInt(v[0], v[1]) : v;
    const innerW = Math.max(dataManager.mapGen.minRoomWidth, roll(spec.width));
    const innerH = Math.max(dataManager.mapGen.minRoomHeight, roll(spec.height));
    return { width: innerW + 2, height: innerH + 2 };
  }

  private maxSpecWidth(): number {
    let max = 0;
    for (const spec of Object.values(dataManager.mapGen.roomSpecs)) {
      const w = Array.isArray(spec.width) ? spec.width[1] : spec.width;
      max = Math.max(max, w);
    }
    return max + 2; // 含外墙圈
  }

  private maxSpecHeight(): number {
    let max = 0;
    for (const spec of Object.values(dataManager.mapGen.roomSpecs)) {
      const h = Array.isArray(spec.height) ? spec.height[1] : spec.height;
      max = Math.max(max, h);
    }
    return max + 2; // 含外墙圈
  }

  /** 侧室挂载的主干房间ID（挂载点在链上的前一个主干房间） */
  private mountedOnId(plan: PlannedRoom[], planned: PlannedRoom, floorId: number): string | null {
    const idx = plan.indexOf(planned);
    for (let i = idx - 1; i >= 0; i--) {
      if (plan[i].isTrunk) return `room_${floorId}_${i}`;
    }
    return null;
  }
}
