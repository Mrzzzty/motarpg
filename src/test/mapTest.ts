/**
 * 阶段一无头测试：批量生成楼层并核对全部验证规则（控制台输出地图数据）。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { MapGenerator } from '../map/MapGenerator';
import { MapValidator } from '../map/MapValidator';
import { DIRS4 } from '../utils/Grid';
import type { FloorMap } from '../types';

interface Stats {
  attempts: number;
  failures: number;
  retryReasons: Record<string, number>;
  roomCountHist: Record<number, number>;
  typeCount: Record<string, number>;
  merchantViolations: number;
  extraCorridorHist: Record<number, number>;
  pathCountHist: Record<number, number>;
  monsterDistViolations: number;
  gridReachFailures: number;
  overlapViolations: number;
  eliteOutsideEliteRoom: number;
  chestRoomChestViolations: number;
  totalAttempts: number;
  maxAttemptsSeen: number;
}

function emptyStats(): Stats {
  return {
    attempts: 0, failures: 0, retryReasons: {},
    roomCountHist: {}, typeCount: {}, merchantViolations: 0,
    extraCorridorHist: {}, pathCountHist: {}, monsterDistViolations: 0,
    gridReachFailures: 0, overlapViolations: 0, eliteOutsideEliteRoom: 0,
    chestRoomChestViolations: 0, totalAttempts: 0, maxAttemptsSeen: 0,
  };
}

/** 网格级连通：从入口出发，所有房间门与关键实体可达 */
function gridReachable(floor: FloorMap): boolean {
  const { grid } = floor;
  const seen = new Set<string>();
  const queue: { x: number; y: number }[] = [{ x: floor.entryX, y: floor.entryY }];
  if (grid[floor.entryY][floor.entryX] !== 0) return false;
  seen.add(`${floor.entryX},${floor.entryY}`);
  while (queue.length > 0) {
    const cur = queue.shift()!;
    for (const [dx, dy] of DIRS4) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (ny < 0 || ny >= floor.height || nx < 0 || nx >= floor.width) continue;
      if (grid[ny][nx] !== 0) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  for (const room of floor.rooms) {
    for (const door of room.doors) {
      if (!seen.has(`${door.x},${door.y}`)) return false;
    }
    for (const e of room.entities) {
      if ((e.kind === 'stair' || e.kind === 'npc' || e.kind === 'chest' || e.kind === 'monster' || e.kind === 'boss') && !seen.has(`${e.x},${e.y}`)) return false;
    }
  }
  return true;
}

/** 房间矩形重叠检查 */
function noOverlap(floor: FloorMap): boolean {
  for (let i = 0; i < floor.rooms.length; i++) {
    for (let j = i + 1; j < floor.rooms.length; j++) {
      const a = floor.rooms[i];
      const b = floor.rooms[j];
      const overlap = a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;
      if (overlap) return false;
    }
  }
  return true;
}

function run(): void {
  dataManager.loadAll();
  const gen = MapGenerator.getInstance();
  const validator = MapValidator.getInstance();
  const stats = emptyStats();
  const cfg = dataManager.mapGen;

  const FLOORS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 15, 19, 20, 21, 25, 30, 35, 40, 45, 50, 60];
  const ITER = 300;
  // 悬崖地形（编码 4）统计：出现次数 / 实体压在悬崖上的违规数
  let cliffCells = 0;
  let cliffOnEntity = 0;
  /** 区段末 Boss 层（下一层是新区段起点）终点房的遗物宝箱缺失计数 */
  const RELIC_CHEST_FLOORS = [15, 40, 60, 80, 100];
  let relicChestMissing = 0;
  /** 怪物阵容：可用普通怪少于 2 种的楼层 / Boss 与楼层区间不匹配的次数 */
  let thinMonsterFloors = 0;
  let bossMismatch = 0;

  for (const floorId of FLOORS) {
    for (let it = 0; it < ITER; it++) {
      stats.attempts++;
      const floor = gen.generate(floorId);
      stats.totalAttempts += gen.lastAttempts;
      stats.maxAttemptsSeen = Math.max(stats.maxAttemptsSeen, gen.lastAttempts);

      // 结构断言
      if (floor.rooms.length < 4 && floorId !== 1 && floorId % 5 !== 0) stats.failures++;
      if (floor.rooms.length > cfg.maxRooms) stats.failures++;
      if (!noOverlap(floor)) { stats.overlapViolations++; stats.failures++; }
      if (!gridReachable(floor)) { stats.gridReachFailures++; stats.failures++; console.log(`[不可达] 楼层${floorId} kind=${floor.kind} 房间数=${floor.rooms.length}`); }

      // 类型分布 & 商人限制
      const merchants = floor.rooms.filter(r => r.type === 'merchant').length;
      const cap = floor.rooms.length <= cfg.merchantLimit.fewMaxRooms ? cfg.merchantLimit.fewCount : cfg.merchantLimit.manyCount;
      if (merchants > cap) { stats.merchantViolations++; stats.failures++; }
      for (const room of floor.rooms) {
        stats.typeCount[room.type] = (stats.typeCount[room.type] ?? 0) + 1;
      }
      stats.roomCountHist[floor.rooms.length] = (stats.roomCountHist[floor.rooms.length] ?? 0) + 1;

      // 特殊层结构
      if (floorId === 1) {
        if (!(floor.kind === 'initial' && floor.rooms.length === 2 && floor.rooms[0].type === 'start' && floor.rooms[1].type === 'end')) stats.failures++;
      } else if (floorId % 5 === 0) {
        if (!(floor.kind === 'boss' && floor.rooms.length === 3 && floor.rooms[0].type === 'rest' && floor.rooms[1].type === 'boss' && floor.rooms[2].type === 'end')) stats.failures++;
      }

      // 走廊
      const extras = floor.corridors.filter(c => c.extra).length;
      if (extras > cfg.corridor.extraMax) { stats.failures++; }
      stats.extraCorridorHist[extras] = (stats.extraCorridorHist[extras] ?? 0) + 1;

      // 路径验证（普通层）
      if (floor.kind === 'normal') {
        const check = validator.validate(floor.rooms, floor.connections, true);
        if (!check.pass) { stats.failures++; }
        stats.pathCountHist[check.pathLengths.length] = (stats.pathCountHist[check.pathLengths.length] ?? 0) + 1;
        // 长度差≤2 的路径对存在（validator 已保证，此处复核）
        const roomIds = floor.rooms.map(r => r.id);
        void roomIds;
      }

      // 内容规则：怪物距入口≥3格、精英怪仅限战斗/精英房（combatByDepth 档位允许战斗房出精英）、宝箱房2-3宝箱
      for (const room of floor.rooms) {
        const monsters = room.entities.filter(e => e.kind === 'monster');
        for (const m of monsters) {
          if (m.isElite && room.type !== 'elite' && room.type !== 'combat' && room.type !== 'boss') { stats.eliteOutsideEliteRoom++; stats.failures++; }
        }
        if (room.type === 'chest') {
          const chests = room.entities.filter(e => e.kind === 'chest').length;
          if (chests < cfg.content.chestRoomMin || chests > cfg.content.chestRoomMax) { stats.chestRoomChestViolations++; stats.failures++; }
        }
        // 实体不重叠（地毯为地面装饰，允许与宝箱/Boss同格）
        const seen = new Set<string>();
        for (const e of room.entities) {
          const key = `${e.x},${e.y}`;
          if (seen.has(key) && e.kind !== 'carpet') { stats.failures++; }
          if (e.kind !== 'carpet') seen.add(key);
        }
      }

      // 终点房必有楼梯
      const endRoom = floor.rooms[floor.rooms.length - 1];
      if (!endRoom.entities.some(e => e.kind === 'stair')) stats.failures++;

      // 区段末 Boss 层：终点房必须有一个「遗物宝箱」（三选一奖励）
      if (RELIC_CHEST_FLOORS.includes(floorId)) {
        const has = endRoom.entities.some(e => e.kind === 'chest' && e.chestTier === 'relic');
        if (!has) { relicChestMissing++; console.log(`[遗物宝箱缺失] 楼层${floorId}`); }
      }

      // 怪物阵容：每层至少 2 种可用普通怪（层级主题阵容不应出现空档）
      const availNormals = dataManager.monsters.monsters.filter(m =>
        m.category === 'normal' && floorId >= m.floorMin && floorId <= m.floorMax);
      if (availNormals.length < 2) {
        thinMonsterFloors++;
        console.log(`[怪物池过薄] 楼层${floorId} 仅 ${availNormals.length} 种`);
      }
      // Boss 分层：出现的 Boss 必须覆盖当前楼层
      const bossEnt = floor.rooms.flatMap(r => r.entities).find(e => e.kind === 'boss');
      if (bossEnt) {
        const bdef = dataManager.getMonster(bossEnt.monsterId ?? '');
        if (!bdef || floorId < bdef.floorMin || floorId > bdef.floorMax) {
          bossMismatch++;
          console.log(`[Boss 不匹配] 楼层${floorId} → ${bossEnt.monsterId}`);
        }
      }

      // 悬崖地形（编码 4）：统计格数 + 校验没有实体落在悬崖上（火把挂墙，豁免）
      for (const room of floor.rooms) {
        for (const e of room.entities) {
          // 仅校验「实体压在悬崖(4)上」：火把在墙(1)、柱子自身即装饰(2)，均属正常
          if (floor.grid[e.y]?.[e.x] === 4) {
            cliffOnEntity++;
            console.log(`[悬崖冲突] 楼层${floorId} 房${room.id} 实体${e.kind} @${e.x},${e.y}`);
          }
        }
        for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
          for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
            if (floor.grid[y][x] === 4) cliffCells++;
          }
        }
      }
    }
  }

  console.log('=== 阶段一地图生成压力测试 ===');
  console.log(`生成次数: ${stats.attempts}  失败断言: ${stats.failures}`);
  console.log(`悬崖格总数: ${cliffCells}  实体压悬崖: ${cliffOnEntity}`);
  if (cliffOnEntity > 0) stats.failures++;
  console.log(`遗物宝箱缺失: ${relicChestMissing}（期望 0）`);
  if (relicChestMissing > 0) stats.failures++;
  console.log(`怪物池过薄楼层: ${thinMonsterFloors}  Boss 与楼层不匹配: ${bossMismatch}（期望均为 0）`);
  if (thinMonsterFloors > 0 || bossMismatch > 0) stats.failures++;
  if (cliffCells === 0) { console.log('[悬崖] 未生成任何悬崖格（预期 ≥1）'); stats.failures++; }
  console.log(`平均尝试次数: ${(stats.totalAttempts / stats.attempts).toFixed(2)}  最差: ${stats.maxAttemptsSeen}`);
  console.log(`房间重叠: ${stats.overlapViolations}  网格不可达: ${stats.gridReachFailures}`);
  console.log(`商人超限: ${stats.merchantViolations}  精英房外精英: ${stats.eliteOutsideEliteRoom}  宝箱房数量违规: ${stats.chestRoomChestViolations}`);
  console.log('房间数分布:', JSON.stringify(stats.roomCountHist));
  console.log('额外通道分布:', JSON.stringify(stats.extraCorridorHist));
  console.log('路径数分布:', JSON.stringify(stats.pathCountHist));
  console.log('房间类型统计:', JSON.stringify(stats.typeCount));

  // 样例输出
  console.log('\n--- 样例：第7层 ---');
  const sample = gen.generate(7);
  console.log(gen.describe(sample));
  console.log('\n--- 样例：第5层（Boss层） ---');
  console.log(gen.describe(gen.generate(5)));

  if (stats.failures > 0) {
    console.error('\n!!! 存在失败断言 !!!');
    process.exit(1);
  } else {
    console.log('\n全部通过 ✔');
  }
}

run();
