/**
 * 房间库（Room Library）——**纯数据层**（可无头测试）。
 *
 * 「编辑器产出的手工房」与「正式游戏楼层生成」之间的取用接口：
 * 楼层生成时若需要某类房间，调 `pickRoom({ type, pattern })` 即可拿到一间**匹配的手工房**。
 * 同一 `type` + 同一 `pattern` 可以有多间房，由 `tension` 张力值区分体验——
 * 这正是「即使是同样的类型也有不同的体验」的落地点。
 *
 * 数据来源：`src/data/rooms.json`（编辑器「保存到文件」由 vite 中间件写入）。
 * 这里**构建期直接 import** 进包，因此前端运行时与无头测试都能读到，无需网络。
 * 注意：编辑器未连开发服务器时会退到 localStorage 暂存，那份草稿**不进库**（进程内临时数据）。
 */
import roomsFile from '../data/rooms.json';
import type { ExitPattern, RoomType } from '../types';
import type { StoredRoom } from './RoomStore';
import { patternFromExits } from './ExitPattern';

interface RoomsFileShape {
  version?: number;
  updatedAt?: string;
  rooms?: StoredRoom[];
}

const ALL: StoredRoom[] = Array.isArray((roomsFile as RoomsFileShape).rooms)
  ? ((roomsFile as RoomsFileShape).rooms as StoredRoom[])
  : [];

/** 房间库里的全部房间（只读副本） */
export function listRooms(): StoredRoom[] {
  return [...ALL];
}

/** 指定房间类型的手工房 */
export function roomsOfType(type: RoomType): StoredRoom[] {
  return ALL.filter(r => r.type === type);
}

/** 房间的通口类型：优先用档案显式字段，否则按 `exits` 反推（与导出规则同源） */
export function patternOfRoom(r: StoredRoom): ExitPattern {
  return r.pattern ?? patternFromExits(r.exits ?? []);
}

export interface PickRoomQuery {
  /** 需要的房间类型（主键） */
  type: RoomType;
  /** 需要的通口类型（次键）：给了就优先按它过滤；过滤后为空则退回该类型的全部候选 */
  pattern?: ExitPattern;
  /**
   * 目标张力（可选）：在同类型候选里优先挑张力最接近的一间，
   * 让「同类型不同张力」的手工房按当前运气平衡需要被选中。
   */
  preferTension?: number;
  /** 已用过的房间 id（避免同层重复用同一间；用 `exclude` 逐个排除即可遍历整库） */
  exclude?: Iterable<string>;
  /** 随机源（默认 `Math.random`；测试可注入确定性 rng） */
  rand?: () => number;
}

/**
 * 抽取一间手工房：
 *   1. 候选 = 该 `type` 的房间（去掉 `exclude`）；
 *   2. 给了 `pattern` → 先按通口类型过滤（过滤后为空则退回全部候选）；
 *   3. 给了 `preferTension` → 取张力最接近者（并列用 `rand` 随机）；
 *   4. 否则用 `rand` 随机。
 * 返回 `null` = 库里没有该类房间，调用方应回退到程序化生成。
 */
export function pickRoom(q: PickRoomQuery): StoredRoom | null {
  const rand = q.rand ?? Math.random;
  const excluded = new Set(q.exclude ?? []);
  let pool = ALL.filter(r => r.type === q.type && !excluded.has(r.id));
  if (pool.length === 0) return null;

  if (q.pattern) {
    const byPattern = pool.filter(r => patternOfRoom(r) === q.pattern);
    if (byPattern.length > 0) pool = byPattern;
  }

  if (typeof q.preferTension === 'number') {
    let best = Infinity;
    let bucket: StoredRoom[] = [];
    for (const r of pool) {
      const d = Math.abs((r.tension ?? 0) - q.preferTension);
      if (d < best - 1e-9) { best = d; bucket = [r]; }
      else if (Math.abs(d - best) <= 1e-9) bucket.push(r);
    }
    if (bucket.length > 0) pool = bucket;
  }

  const idx = Math.min(pool.length - 1, Math.floor(rand() * pool.length));
  return pool[idx] ?? pool[0];
}
