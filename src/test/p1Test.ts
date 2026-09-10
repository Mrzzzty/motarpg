/**
 * P1 验收测试：隐藏房间（P1-1）、Boss 房变体（P1-2）、保底休憩点（P1-3）、守护校验（P1-4）。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { MapGenerator } from '../map/MapGenerator';
import { WorldManager } from '../core/WorldManager';
import { PathGenerator } from '../map/PathGenerator';
import { DIRS4, manhattan } from '../utils/Grid';
import type { FloorAllocation } from '../map/FloorGenerator';
import type { FloorMap, RoomData } from '../types';

let failed = 0;
function check(name: string, cond: boolean, detail = ''): void {
  if (!cond) {
    failed++;
    console.error(`✗ ${name} ${detail}`);
  }
}

dataManager.loadAll();
const gen = MapGenerator.getInstance();
const floors = [3, 6, 8, 11, 14, 16, 19, 21, 24, 27, 31, 36, 42, 47, 53, 5, 10, 15, 20, 25, 40];
const ITER = 40;

let hiddenSeen = 0;
let restRoomsSeen = 0;
let chestRoomsChecked = 0;
let bossLayouts: Record<string, number> = {};

for (const f of floors) {
  for (let it = 0; it < ITER; it++) {
    const floor = gen.generate(f);

    // ============ P1-1：隐藏房间 ============
    const hidden = floor.hiddenRooms ?? [];
    for (const h of hidden) {
      hiddenSeen++;
      // 未发现：不在 rooms 列表、入口为墙、内部为虚空
      check('隐藏房不在rooms', !floor.rooms.some(r => r.id === h.id));
      const ent = h.hiddenEntrance!;
      check('隐藏入口为墙', floor.grid[ent.y][ent.x] === 1, `${ent}`);
      let innerVoid = true;
      for (let y = h.y + 1; y < h.y + h.height - 1 && innerVoid; y++) {
        for (let x = h.x + 1; x < h.x + h.width - 1; x++) {
          if (floor.grid[y][x] !== -1) { innerVoid = false; break; }
        }
      }
      check('隐藏内部为虚空', innerVoid, h.id);
      check('隐藏房深度>0', h.depth > 0);
      check('隐藏房实体=精英+大宝箱', h.entities.filter(e => e.kind === 'monster' && e.isElite).length === 1
        && h.entities.filter(e => e.kind === 'chest' && e.chestTier === 'grand').length === 1, h.id);
      const elite = h.entities.find(e => e.kind === 'monster');
      check('隐藏精英吃深度倍率', elite?.depth === h.depth && !!elite?.stats);
      // 模拟发现：并入 rooms、挖开地形、入口连通
      const world = WorldManager.getInstance();
      world.loadFloor(floor);
      const entranceAdj = { x: ent.x + (ent.x === h.centerX ? 0 : Math.sign(h.centerX - ent.x)), y: ent.y + (ent.y === h.centerY ? 0 : Math.sign(h.centerY - ent.y)) };
      world.revealHiddenRoom(h);
      check('发现后并入rooms', floor.rooms.some(r => r.id === h.id));
      check('发现后入口挖开', floor.grid[ent.y][ent.x] === 0);
      check('发现后内部地板', floor.grid[h.centerY][h.centerX] === 0);
      check('发现后围墙成型', floor.grid[h.y][h.x] === 1 && floor.grid[h.y + h.height - 1][h.x + h.width - 1] === 1);
      // 入口连通：从入口内侧可走到房间中心
      const seen = new Set<string>([`${ent.x},${ent.y}`]);
      const queue = [{ x: ent.x, y: ent.y }];
      let reached = false;
      while (queue.length > 0 && !reached) {
        const cur = queue.shift()!;
        for (const [dx, dy] of DIRS4) {
          const nx = cur.x + dx, ny = cur.y + dy;
          if (nx < 0 || ny < 0 || nx >= floor.width || ny >= floor.height) continue;
          if (floor.grid[ny][nx] !== 0) continue;
          const k = `${nx},${ny}`;
          if (seen.has(k)) continue;
          if (nx === h.centerX && ny === h.centerY) { reached = true; break; }
          seen.add(k);
          queue.push({ x: nx, y: ny });
        }
      }
      check('发现后入口连通中心', reached, `${h.id} 入口${JSON.stringify(ent)}`);
      void entranceAdj;
    }

    // ============ P1-3：保底休憩点 ============
    for (const room of floor.rooms) {
      if (room.type !== 'rest' || floor.kind !== 'normal') continue;
      restRoomsSeen++;
      const monsters = room.entities.filter(e => e.kind === 'monster' || e.kind === 'boss').length;
      const chests = room.entities.filter(e => e.kind === 'chest').length;
      const potions = room.entities.filter(e => e.kind === 'potion').length;
      check('休憩房无怪无箱', monsters === 0 && chests === 0, `${monsters}怪${chests}箱`);
      check('休憩房恰1药水', potions === 1, `${potions}`);
      check('房间总数不超上限', floor.rooms.length <= dataManager.mapGen.maxRooms, `${floor.rooms.length}`);
    }
    if (floor.kind === 'normal') {
      // 每条路径：战斗+精英每满4个后应有休憩房；房数已顶 maxRooms（配额耗尽）时允许不插入
      const atCap = floor.rooms.length >= dataManager.mapGen.maxRooms;
      for (const railKey of ['onPathA', 'onPathB'] as const) {
        const seq = floor.rooms.filter(r => r[railKey]).sort((a, b) => a.order - b.order).map(r => r.type);
        let battles = 0, rests = 0;
        for (const t of seq) {
          if (t === 'rest') { rests++; battles = 0; continue; }
          if (t === 'combat' || t === 'elite') battles++;
          check('连续战斗不超4', battles <= 4 || atCap, seq.join(','));
        }
        if (!atCap && seq.filter(t => t === 'combat' || t === 'elite').length >= 4) {
          check('长路径含休憩房', rests >= 1, seq.join(','));
        }
      }
    }

    // ============ P1-4：守护校验 ============
    for (const room of floor.rooms) {
      if (room.type === 'chest') {
        chestRoomsChecked++;
        for (const chest of room.entities.filter(e => e.kind === 'chest')) {
          const guarded = room.entities.some(e =>
            (e.kind === 'monster' || e.kind === 'boss')
            && manhattan(e, chest) <= 2);
          check('宝箱2格内有守卫', guarded, `f${f} ${room.id}`);
        }
      }
      if (room.type === 'end' && floor.kind === 'normal') {
        const stair = room.entities.find(e => e.kind === 'stair');
        if (stair) {
          const guarded = room.entities.some(e =>
            (e.kind === 'monster' || e.kind === 'boss')
            && manhattan(e, stair) <= 3);
          check('楼梯3格内有守门怪', guarded, `f${f} ${room.id}`);
        }
      }
    }

    // ============ P1-2：Boss 房结构变体 ============
    if (floor.kind === 'boss') {
      const bossRoom = floor.rooms.find(r => r.type === 'boss')!;
      const layout = bossRoom.layout ?? 'boss_standard';
      bossLayouts[layout] = (bossLayouts[layout] ?? 0) + 1;
      check('Boss房布局标记', layout.startsWith('boss_'), layout);
      if (f < 15) check('15层前仅标准型', layout === 'boss_standard', `${f}:${layout}`);
      if (f >= 15 && f < 20) check('15-19层无关卡型', layout !== 'boss_gauntlet', `${f}:${layout}`);
      check('Boss实体存在', bossRoom.entities.some(e => e.kind === 'boss'));
      // 关卡型：入口区有 2 只小怪；竞技场型：中心 Boss + 两侧小怪
      if (layout === 'boss_gauntlet') {
        const normals = bossRoom.entities.filter(e => e.kind === 'monster' && !e.isElite).length;
        check('关卡型入口2小怪', normals === 2, `${normals}`);
      }
      if (layout === 'boss_arena') {
        const normals = bossRoom.entities.filter(e => e.kind === 'monster' && !e.isElite);
        check('竞技场两侧2小怪', normals.length === 2, `${normals.length}`);
        const pillars = bossRoom.entities.filter(e => e.kind === 'pillar').length;
        check('竞技场有立柱圈', pillars >= 4, `${pillars}`);
      }
    }
  }
}

check('隐藏房间有生成', hiddenSeen > 5, `${hiddenSeen}`);
check('Boss布局已采样', Object.keys(bossLayouts).length >= 1, JSON.stringify(bossLayouts));
check('标准型存在', (bossLayouts['boss_standard'] ?? 0) > 0, JSON.stringify(bossLayouts));
const gauntletSeen = (bossLayouts['boss_gauntlet'] ?? 0) > 0;
const arenaSeen = (bossLayouts['boss_arena'] ?? 0) > 0;
console.log('隐藏房生成数:', hiddenSeen, ' 休憩房:', restRoomsSeen, ' Boss布局:', JSON.stringify(bossLayouts));

// ============ P1-3 机制单测：单路径累计 4 个战斗/精英房强制插入休憩房 ============
{
  const pathGen = PathGenerator.getInstance();
  // 路径A：战斗 战斗 宝箱 战斗 战斗（P0-4 下不允许 4 连战斗，穿插宝箱位）
  const alloc: FloorAllocation = {
    floorId: 30,
    kind: 'normal',
    roomTypes: ['start', 'combat', 'combat', 'combat', 'combat', 'chest', 'combat', 'combat', 'end'],
    railHints: [null, 'A', 'B', 'A', 'B', 'A', 'A', 'A', null],
  };
  const plan = pathGen.plan(alloc);
  const railA = plan.filter(p => p.rail === 'A').map(p => p.type);
  check('路径A含休憩房', railA.includes('rest'), railA.join(','));
  check('休憩房在第4战斗后', railA.indexOf('rest') === 5, railA.join(','));
  check('路径B无休憩(仅2战斗)', !plan.filter(p => p.rail === 'B').map(p => p.type).includes('rest'));
  check('总房数不超上限', plan.length <= dataManager.mapGen.maxRooms, `${plan.length}`);
}
check('竞技场型已出现(15+层)', arenaSeen, JSON.stringify(bossLayouts));
check('关卡型已出现(20+层)', gauntletSeen, JSON.stringify(bossLayouts));

console.log(failed === 0 ? 'P1 全部通过 ✔' : `P1 失败 ${failed} 项`);
if (failed > 0) process.exit(1);
