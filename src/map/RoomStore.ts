/**
 * 房间档案存储：把编辑器里的设计写进**工程文件** `src/data/rooms.json`。
 *
 * - 开发服务器（`npm run dev`）提供 `/__rooms` 端点 → 点「保存到文件」**立即写工程文件**
 *   （同时刷新给 AI 读的摘要 `docs/房间设计笔记.md`）
 * - 端点不可用（生产构建 / 静态托管 / file://）→ 自动回退 localStorage，并在结果里说明来源
 *
 * 存储结构（与 `vite.config.ts` 的中间件、`src/data/rooms.json` 一致）：
 * ```
 * { version, updatedAt, rooms: [ { id, name, type, w, h, cells, rows, entry, exits, pattern, risk, tension, note, updatedAt } ] }
 * ```
 * `rows` 是含门槽的字符图（便于在文件/摘要里直接看出布局）；`note` 是设计者写给 AI 的备注。
 */
import type { Direction, ExitPattern, RoomType } from '../types';

export interface StoredRoom {
  /** 档案 id（默认取房间名，同名即覆盖） */
  id: string;
  name: string;
  type: RoomType;
  /** 含墙圈的房间尺寸 */
  w: number;
  h: number;
  /** 房间矩形内的图例字符（行优先，长度 w×h） */
  cells: string[];
  /** 导出的字符图（含墙外 2 格门槽外圈） */
  rows: string[];
  /** 入口方向：本编辑器固定为 south */
  entry: Direction | null;
  /** 全部门（含固定的南入口） */
  exits: Direction[];
  /**
   * 通口类型（由 `exits` 判定，见 `src/map/ExitPattern.ts`）：与 `type` 一起作为
   * 「按类型 + 通口抽房间」的键；同一类型 + 同一通口可有多间房，用 `tension` 区分体验。
   */
  pattern?: ExitPattern;
  risk: 1 | 2 | 3 | null;
  /**
   * 张力值（本房对路径张力的贡献，正=加压 / 负=泄压）：`null` = 跟随房型默认权重。
   * 与 `mapGeneration.tension.weights` 同尺度，供后续「房间类型决定」读取。
   */
  tension: number | null;
  /** **写给 AI 看的备注**：想让我据此做什么，写这里 */
  note: string;
  updatedAt: string;
}

export interface RoomsStore {
  version: number;
  updatedAt: string;
  rooms: StoredRoom[];
}

export type StoreSource = 'file' | 'local';

export interface StoreResult {
  ok: boolean;
  source: StoreSource;
  message: string;
  store?: RoomsStore;
}

const ENDPOINT = '/__rooms';
const LS_KEY = 'motarpg_room_store';

function readLocal(): RoomsStore {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return { version: 1, updatedAt: new Date().toISOString(), rooms: [] };
    const parsed = JSON.parse(raw) as RoomsStore;
    if (!Array.isArray(parsed.rooms)) parsed.rooms = [];
    return parsed;
  } catch {
    return { version: 1, updatedAt: new Date().toISOString(), rooms: [] };
  }
}

function writeLocal(store: RoomsStore): void {
  try {
    store.updatedAt = new Date().toISOString();
    localStorage.setItem(LS_KEY, JSON.stringify(store));
  } catch { /* localStorage 不可用：忽略（调用方已在消息里说明） */ }
}

/** 读取全部房间档案 */
export async function loadStore(): Promise<StoreResult> {
  try {
    const res = await fetch(ENDPOINT, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as { ok: boolean; store: RoomsStore };
    if (!data.ok || !data.store) throw new Error('响应格式异常');
    return { ok: true, source: 'file', store: data.store, message: `已读取工程文件（${data.store.rooms.length} 间房）` };
  } catch {
    const store = readLocal();
    return { ok: true, source: 'local', store, message: `未连接开发服务器：读取浏览器本地（${store.rooms.length} 间房）` };
  }
}

/** 保存（同名覆盖）——成功即已写入 `src/data/rooms.json` */
export async function saveRoom(room: StoredRoom): Promise<StoreResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(room),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as { ok: boolean; store: RoomsStore; total: number; error?: string };
    if (!data.ok) throw new Error(data.error ?? '保存被拒绝');
    return {
      ok: true, source: 'file', store: data.store,
      message: `已写入 src/data/rooms.json（共 ${data.total} 间；备注已同步到 docs/房间设计笔记.md）`,
    };
  } catch (e) {
    const store = readLocal();
    const saved: StoredRoom = { ...room, updatedAt: new Date().toISOString() };
    const idx = store.rooms.findIndex(r => r.id === saved.id);
    if (idx >= 0) store.rooms[idx] = saved;
    else store.rooms.push(saved);
    writeLocal(store);
    return {
      ok: true, source: 'local', store,
      message: `未连接开发服务器，已暂存浏览器本地（${e instanceof Error ? e.message : ''}）—— 用 npm run dev 启动才能写工程文件`,
    };
  }
}

/** 删除某间房 */
export async function removeRoom(id: string): Promise<StoreResult> {
  try {
    const res = await fetch(`${ENDPOINT}?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as { ok: boolean; store: RoomsStore; removed: number };
    if (!data.ok) throw new Error('删除失败');
    return { ok: true, source: 'file', store: data.store, message: `已从工程文件删除「${id}」` };
  } catch {
    const store = readLocal();
    store.rooms = store.rooms.filter(r => r.id !== id);
    writeLocal(store);
    return { ok: true, source: 'local', store, message: `已从浏览器本地删除「${id}」` };
  }
}
