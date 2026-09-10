/**
 * 房间陈设规划无头测试（覆盖规划层，不构建几何——几何需要 DOM/WebGL，由实机截图覆盖）。
 *
 * 断言：
 *  1. 确定性：同层同房间两次规划结果完全一致（重渲染不跳变）；
 *  2. 不压交互物：陈设格绝不与实体（怪物/宝箱/楼梯/NPC…）同格；
 *  3. 立体陈设不落门内侧（不挡门）；
 *  4. 密度开关：`roomDecorDensity = 0` 时零产出；
 *  5. 地标规则：Boss 房出王座、休整房出篝火；
 *  6. 规模：真实楼层上确有可观数量的陈设产出。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { MapGenerator } from '../map/MapGenerator';
import { planRoomDecor, planRoomLandmark, decorBaseY } from '../effects/ThreeDecor';
import { tierOfFloor } from '../data/tiers';
import { doorInner } from '../utils/Grid';

let pass = 0;
let fail = 0;

function ok(cond: boolean, msg: string): void {
  if (cond) pass++;
  else {
    fail++;
    console.error(`  ✗ ${msg}`);
  }
}

function run(): void {
  dataManager.loadAll();
  const gen = MapGenerator.getInstance();
  const FLOORS = [1, 3, 5, 16, 22, 41, 50, 61, 81, 90, 101, 110];
  const ITER = 8;

  let rooms = 0;
  let items = 0;
  let determinism = 0;
  let densityOffLeaks = 0;
  let occupiedConflicts = 0;
  let doorConflicts = 0;
  let outOfRoom = 0;
  let landmarks = 0;
  let bossThrone = 0;
  let restFire = 0;
  let chandeliers = 0;
  const kindSeen = new Set<string>();

  for (const floorId of FLOORS) {
    for (let it = 0; it < ITER; it++) {
      const floor = gen.generate(floorId);
      const tier = tierOfFloor(floorId);
      for (const room of floor.rooms) {
        rooms++;
        const a = planRoomDecor(room, floor.grid, floor.floorId, tier, 1);
        const b = planRoomDecor(room, floor.grid, floor.floorId, tier, 1);
        if (JSON.stringify(a) !== JSON.stringify(b)) determinism++;
        items += a.length;

        if (planRoomDecor(room, floor.grid, floor.floorId, tier, 0).length !== 0) densityOffLeaks++;

        const occ = new Set(room.entities.map(e => `${e.x},${e.y}`));
        const doors = new Set(room.doors.map(d => {
          const p = doorInner(d);
          return `${p.x},${p.y}`;
        }));
        for (const item of a) {
          kindSeen.add(item.kind);
          const cx = Math.floor(item.wx);
          const cy = Math.floor(item.wz);
          if (occ.has(`${cx},${cy}`)) occupiedConflicts++;
          if (item.cellX === undefined && doors.has(`${cx},${cy}`)) doorConflicts++;
          if (cx < room.x || cx >= room.x + room.width || cy < room.y || cy >= room.y + room.height) outOfRoom++;
        }

        const lm = planRoomLandmark(room, floor.grid, floor.floorId);
        if (lm) {
          landmarks++;
          if (lm.kind === 'throne' && room.type === 'boss') bossThrone++;
          else if (lm.kind === 'campfire' && room.type === 'rest') restFire++;
          else if (lm.kind === 'chandelier') chandeliers++;
          if (decorBaseY(lm.kind) < 0) outOfRoom++;
        }
      }
    }
  }

  ok(determinism === 0, `规划确定性（${determinism} 次不一致）`);
  ok(densityOffLeaks === 0, `密度 0 时零产出（${densityOffLeaks} 处泄漏）`);
  ok(occupiedConflicts === 0, `陈设不压交互物（${occupiedConflicts} 处冲突）`);
  ok(doorConflicts === 0, `立体陈设不落门内侧（${doorConflicts} 处）`);
  ok(outOfRoom === 0, `陈设不越出房间（${outOfRoom} 处）`);
  ok(items > 0 && rooms > 0, `确有产出（${items} 件 / ${rooms} 房）`);
  ok(bossThrone > 0, `Boss 房产出王座（${bossThrone}）`);
  ok(restFire > 0, `休整房产出篝火（${restFire}）`);
  ok(kindSeen.size >= 8, `陈设种类丰富（实际 ${kindSeen.size} 种）`);

  console.log(`房间 ${rooms} · 陈设 ${items} 件 · 平均 ${(items / Math.max(1, rooms)).toFixed(1)} 件/房`);
  console.log(`地标 ${landmarks}（王座 ${bossThrone} / 篝火 ${restFire} / 吊灯 ${chandeliers}）`);
  console.log(`种类：${[...kindSeen].sort().join(', ')}`);

  if (fail > 0) {
    console.error('\n!!! 存在失败断言 !!!');
    process.exit(1);
  }
  console.log('\n房间陈设规划：全部通过 ✅');
}

run();
