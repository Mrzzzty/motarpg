import { defineConfig, type Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

/** 房间编辑器存储格式（与前端 src/map/RoomStore.ts 保持一致） */
interface StoredRoomFile {
  id: string;
  name: string;
  type: string;
  w: number;
  h: number;
  cells: string[];
  rows: string[];
  entry: string | null;
  exits: string[];
  /** 通口类型（由 exits 判定：single 单口 / vertical 上下 / diagonal 对角 / tee T型 / cross 四方） */
  pattern?: string | null;
  risk: number | null;
  /** 张力值：null = 跟随房型默认权重（见 mapGeneration.tension.weights） */
  tension?: number | null;
  /** 写给 AI 看的备注 */
  note: string;
  updatedAt: string;
}
interface RoomsFile {
  version: number;
  updatedAt: string;
  note?: string;
  rooms: StoredRoomFile[];
}

/**
 * 房间编辑器存储端点（**仅开发服务器**）：
 *   GET    /__rooms       → 读取 `src/data/rooms.json`
 *   POST   /__rooms       → 覆盖写入该文件（同时刷新给 AI 读的摘要 `docs/房间设计笔记.md`）
 *   DELETE /__rooms?id=x  → 删除某间房
 *
 * 为什么走 vite 中间件：编辑器是网页，浏览器无法直接写工程文件；
 * 开发服务器可以。生产构建没有该端点时，前端自动回退 localStorage（见 RoomStore）。
 */
function roomEditorStore(): Plugin {
  const jsonFile = path.resolve(process.cwd(), 'src/data/rooms.json');
  const mdFile = path.resolve(process.cwd(), 'docs/房间设计笔记.md');
  const mapGenFile = path.resolve(process.cwd(), 'src/data/mapGeneration.json');

  /** 房型 → 默认张力权重：读 mapGeneration.json（与运行时同一份配置，避免两处各写一份） */
  const tensionWeights = (): Record<string, number> => {
    try {
      const parsed = JSON.parse(fs.readFileSync(mapGenFile, 'utf8')) as { tension?: { weights?: Record<string, number> } };
      return parsed.tension?.weights ?? {};
    } catch {
      return {};
    }
  };

  const readStore = (): RoomsFile => {
    try {
      if (!fs.existsSync(jsonFile)) return { version: 1, updatedAt: new Date().toISOString(), rooms: [] };
      const parsed = JSON.parse(fs.readFileSync(jsonFile, 'utf8')) as RoomsFile;
      if (!Array.isArray(parsed.rooms)) parsed.rooms = [];
      return parsed;
    } catch {
      return { version: 1, updatedAt: new Date().toISOString(), rooms: [] };
    }
  };

  /** 人类 / AI 可读摘要：把 rows 画成字符图，并高亮 note */
  const digest = (store: RoomsFile): string => {
    const lines: string[] = [
      '# 房间设计笔记（房间编辑器自动生成）',
      '',
      '> 本文件由「房间编辑器 → 保存到文件」**自动覆盖写入**，请勿手工编辑。',
      '> 机器可读数据在 `src/data/rooms.json`；这里是它的可读摘要——**每间房的「备注」就是设计者写给 AI 的意图**。',
      '',
      `最后更新：${store.updatedAt} · 共 ${store.rooms.length} 间房`,
      '',
    ];
    const weights = tensionWeights();
    const fmtTension = (v: number): string => (v > 0 ? `+${v}` : `${v}`);
    // 通口类型：room 里显式字段优先，否则按 exits 边关系反推（与 src/map/ExitPattern.ts 同规则）
    const patternLabel = (r: StoredRoomFile): string => {
      const set = [...new Set(r.exits ?? [])];
      const n = set.length;
      let id: string;
      if (n <= 1) id = 'single';
      else if (n === 2) {
        const opp: Record<string, string> = { north: 'south', south: 'north', east: 'west', west: 'east' };
        id = opp[set[0]] === set[1] ? 'vertical' : 'diagonal';
      } else if (n === 3) id = 'tee';
      else id = 'cross';
      const label: Record<string, string> = { single: '单口', vertical: '上下通口', diagonal: '对角通口', tee: 'T型通口', cross: '四方通口' };
      return `${label[id] ?? id}（${id}）`;
    };
    for (const r of store.rooms) {
      // 张力值：显式标注优先，否则解析成该房型的默认权重（正=加压 / 负=泄压）
      const explicit = typeof r.tension === 'number';
      const tv = explicit ? (r.tension as number) : (weights[r.type] ?? 0);
      lines.push(`## ${r.name || '未命名'}（id: ${r.id}）`, '');
      lines.push(`- 种类：\`${r.type}\` · 尺寸：${r.w}×${r.h}（含墙圈，内空间 ${r.w - 2}×${r.h - 2}）`);
      lines.push(`- 入口：${r.entry ?? '—'}（固定南） · 其他出口：${r.exits.filter(e => e !== 'south').join('、') || '无'}`);
      lines.push(`- 通口类型：${patternLabel(r)} · 全部门：${(r.exits ?? []).join('、') || '无'}`);
      lines.push(`- 风险档：${r.risk ?? '未标注'} · 张力值：${fmtTension(tv)}（${explicit ? '显式标注' : `${r.type} 默认`}） · 更新：${r.updatedAt}`);
      lines.push(`- **备注（写给 AI）**：${r.note?.trim() ? r.note.trim() : '（空）'}`);
      lines.push('', '```');
      for (const row of r.rows) lines.push(row);
      lines.push('```', '');
    }
    return lines.join('\n');
  };

  const writeStore = (store: RoomsFile): void => {
    store.updatedAt = new Date().toISOString();
    fs.mkdirSync(path.dirname(jsonFile), { recursive: true });
    fs.mkdirSync(path.dirname(mdFile), { recursive: true });
    fs.writeFileSync(jsonFile, `${JSON.stringify(store, null, 2)}\n`, 'utf8');
    fs.writeFileSync(mdFile, `${digest(store)}\n`, 'utf8');
  };

  const json = (res: { setHeader: (k: string, v: string) => void; end: (b: string) => void }, body: unknown, code = 200): void => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    void code;
    res.end(JSON.stringify(body));
  };

  return {
    name: 'room-editor-store',
    configureServer(server) {
      server.middlewares.use('/__rooms', (req, res) => {
        const url = req.url ?? '/';
        const method = req.method ?? 'GET';

        if (method === 'GET') {
          json(res, { ok: true, store: readStore(), file: 'src/data/rooms.json' });
          return;
        }

        if (method === 'DELETE') {
          const id = decodeURIComponent((url.split('id=')[1] ?? '').split('&')[0]);
          if (!id) { json(res, { ok: false, error: '缺少 id' }); return; }
          const store = readStore();
          const before = store.rooms.length;
          store.rooms = store.rooms.filter(r => r.id !== id);
          writeStore(store);
          json(res, { ok: true, removed: before - store.rooms.length, store, file: 'src/data/rooms.json' });
          return;
        }

        if (method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const incoming = JSON.parse(body) as StoredRoomFile;
              if (!incoming?.id) throw new Error('缺少 id');
              const store = readStore();
              incoming.updatedAt = new Date().toISOString();
              const idx = store.rooms.findIndex(r => r.id === incoming.id);
              if (idx >= 0) store.rooms[idx] = incoming;
              else store.rooms.push(incoming);
              writeStore(store);
              json(res, {
                ok: true, store, file: 'src/data/rooms.json',
                digest: 'docs/房间设计笔记.md', total: store.rooms.length,
              });
            } catch (err) {
              json(res, { ok: false, error: err instanceof Error ? err.message : String(err) });
            }
          });
          return;
        }

        json(res, { ok: false, error: `不支持的方法 ${method}` });
      });
    },
  };
}

export default defineConfig({
  plugins: [roomEditorStore()],
  base: './',
  server: {
    port: 5173,
    host: '127.0.0.1',
    watch: {
      // 忽略工具产生的临时锁文件/状态目录（扫描中消失的文件会让 watcher 崩溃退出）
      ignored: ['**/.mimosa/**'],
    },
  },
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
  },
});
