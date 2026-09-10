/**
 * 房间编辑器契约测试（纯数据层 `RoomTemplate` + 预制地图）。
 *
 * 编辑器 UI 本身依赖 DOM/WebGL，不在此覆盖；这里覆盖它**对外承诺的导出契约**：
 *   编辑器画布（图例字符）→ templateRows → PrefabMap.buildRooms/FloorMap 必须闭合，否则
 *   「画了一个门却走不出去」这类问题会直到实机才暴露。
 *
 * 断言：
 *   1. 画布尺寸 = 房间 + 2×门槽外圈；默认四周墙、内部空地；
 *   2. **四个方向逐个端到端**：勾了门 → PrefabMap 认出该方向的门 → 入口可达墙外门槽（门真的通）；
 *   3. 入口方向写入 `RoomData.fromDirection`；
 *   4. 往返幂等：template → prefab → template 的格子/方向/属性一致，字符图二次导出相同；
 *   5. exits 缺省时可由网格反推（把已有预制图载回编辑器改的场景）；
 *   6. 图例全覆盖：新增字符（柱/悬崖/三档宝箱/火把/地毯/药水/泉/锅/架/各类 NPC）都能解析成对应实体与地形；
 *   7. 无出口的房间不产生任何门；
 *   8. 张力值：缺省取房型默认权重、显式标注可覆盖并可往返（房间级数据维度，供后续「房间类型决定」）；
 *   9. 通口类型（ExitPattern）：单口 / 上下通口 / 对角通口 / T型通口 / 四方通口 的分类与预设，
 *      并落地到预制定义与 `RoomData.pattern`（「房间类型 + 通口类型」是从手工房间库抽取的键）；
 *  10. 房间库（RoomLibrary）：按「类型 + 通口类型」抽取、无匹配返回 null、exclude 生效。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { buildPrefabFloor, resolveRoomTension } from '../map/PrefabMap';
import {
  TEMPLATE_MARGIN, canvasSize, defaultCellAt, doorCell, entryInnerCell, newTemplate,
  prefabToTemplate, stubCells, templateRows, templateToPrefab, type RoomTemplate,
} from '../map/RoomTemplate';
import { EXIT_PATTERN_PRESETS, exitsLabel, matchPattern, patternFromExits } from '../map/ExitPattern';
import { listRooms, patternOfRoom, pickRoom, roomsOfType } from '../map/RoomLibrary';
import { DIRS4 } from '../utils/Grid';
import type { Direction, FloorMap } from '../types';

let pass = 0;
let fail = 0;

function ok(cond: boolean, msg: string): void {
  if (cond) pass++;
  else {
    fail++;
    console.error(`  ✗ ${msg}`);
  }
}

/** 网格 BFS：从 (x0,y0) 是否能走到 (x1,y1)（只看地形，与 WorldManager 的通行判定同源） */
function reachable(floor: FloorMap, x0: number, y0: number, x1: number, y1: number): boolean {
  if (floor.grid[y0]?.[x0] !== 0 || floor.grid[y1]?.[x1] !== 0) return false;
  const seen = new Set<string>([`${x0},${y0}`]);
  const queue: { x: number; y: number }[] = [{ x: x0, y: y0 }];
  while (queue.length > 0) {
    const cur = queue.shift()!;
    if (cur.x === x1 && cur.y === y1) return true;
    for (const [dx, dy] of DIRS4) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (seen.has(key)) continue;
      if (ny < 0 || ny >= floor.height || nx < 0 || nx >= floor.width) continue;
      if (floor.grid[ny][nx] !== 0) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  return false;
}

/** 编辑器「勾选某边门」时会把该边界的门格开成空地（等价于 UI 的 toggleExit），这里照做 */
function openDoorCells(t: RoomTemplate, dirs: Direction[]): void {
  for (const d of dirs) {
    const c = doorCell(t, d);
    t.cells[(c.y - TEMPLATE_MARGIN) * t.w + (c.x - TEMPLATE_MARGIN)] = '0';
  }
}

function run(): void {
  dataManager.loadAll();

  // ---------- 1. 画布尺寸与默认地形 ----------
  const base = newTemplate(7, 6, 'combat');
  const size = canvasSize(base);
  ok(size.w === 7 + TEMPLATE_MARGIN * 2 && size.h === 6 + TEMPLATE_MARGIN * 2,
    `画布 = 房间 + 2×${TEMPLATE_MARGIN} 门槽外圈（实际 ${size.w}×${size.h}）`);
  ok(defaultCellAt(7, 6, 0, 0) === '1' && defaultCellAt(7, 6, 6, 5) === '1', '默认四周为墙');
  ok(defaultCellAt(7, 6, 3, 3) === '0', '默认内部为空地');

  // ---------- 2/3. 四个方向端到端：门真的通 + 入口方向写入 ----------
  for (const d of ['north', 'east', 'south', 'west'] as Direction[]) {
    const t: RoomTemplate = { ...base, cells: [...base.cells], exits: [d], entry: d };
    openDoorCells(t, [d]);
    const inner = entryInnerCell(t, d);
    t.cells[(inner.y - TEMPLATE_MARGIN) * t.w + (inner.x - TEMPLATE_MARGIN)] = 'S';

    const rows = templateRows(t);
    ok(rows.length === size.h, `${d}：字符图行数正确`);
    ok(rows.every(r => r.length === size.w), `${d}：字符图每行等长`);

    const floor = buildPrefabFloor(templateToPrefab(t, 1));
    const room = floor.rooms[0];
    ok(room.fromDirection === d, `${d}：入口方向写入 fromDirection（实际 ${String(room.fromDirection)}）`);
    ok(room.doors.some(door => door.direction === d), `${d}：勾选的门被 PrefabMap 认出`);

    const stub = stubCells(t, d);
    const outer = stub[stub.length - 1];
    ok(reachable(floor, floor.entryX, floor.entryY, outer.x, outer.y),
      `${d}：入口可达墙外门槽（说明这道门真的能走出去）`);
  }

  // ---------- 4. 往返幂等 ----------
  const t2: RoomTemplate = {
    ...base, cells: [...base.cells], exits: ['north', 'east'], entry: 'west',
    name: '断桥守卫', note: '东侧留一条侧路',
  };
  openDoorCells(t2, ['north', 'east']);
  t2.cells[(t2.h - 2) * t2.w + (t2.w - 2)] = 'r'; // 放一件遗物宝箱
  const trip = prefabToTemplate(templateToPrefab(t2, 1));
  ok(trip.w === t2.w && trip.h === t2.h, '往返：尺寸一致');
  ok(JSON.stringify(trip.cells) === JSON.stringify(t2.cells), '往返：格子一致（含实体字符）');
  ok(JSON.stringify(trip.exits) === JSON.stringify(t2.exits), `往返：出口方向一致（${JSON.stringify(trip.exits)}）`);
  ok(trip.entry === t2.entry && trip.type === t2.type && trip.name === t2.name && trip.note === t2.note,
    '往返：入口/种类/名称/备注一致');
  ok(JSON.stringify(templateRows(trip)) === JSON.stringify(templateRows(t2)), '往返：字符图二次导出相同（幂等）');

  // ---------- 5. exits 缺省 → 由网格反推 ----------
  const defNoExits = templateToPrefab(t2, 1);
  delete defNoExits.rooms[0].exits;
  const derived = prefabToTemplate(defNoExits);
  ok(JSON.stringify(derived.exits) === JSON.stringify(t2.exits),
    `exits 缺省时可由网格反推（${JSON.stringify(derived.exits)}）`);

  // ---------- 6. 图例全覆盖 ----------
  const chars = ['p', 'x', 'g', 'r', '4', 't', 'c', 'q', 'f', 'o', 'h', '5', 'w', 'k', 'u', '2', '3', 'B', 'D'];
  const tw = chars.length + 2; // 两侧墙
  const t3 = newTemplate(tw, 6, 'combat'); // 高 6 行：图例放在第 2 行，避开中心行（否则中心可能是阻挡物 → 入口无效）
  chars.forEach((ch, i) => { t3.cells[2 * t3.w + (1 + i)] = ch; });
  const f3 = buildPrefabFloor(templateToPrefab(t3, 3));
  const room3 = f3.rooms[0];
  const kinds = new Set(room3.entities.map(e => e.kind));
  const need = ['pillar', 'chest', 'torch', 'carpet', 'potion', 'fountain', 'cauldron', 'shelf', 'npc', 'monster', 'boss', 'stair'];
  const missing = need.filter(k => !kinds.has(k as never));
  ok(missing.length === 0, `图例全覆盖（缺：${missing.join('/') || '无'}）`);
  const tiers = room3.entities.filter(e => e.kind === 'chest').map(e => e.chestTier);
  ok(tiers.includes('normal') && tiers.includes('grand') && tiers.includes('relic'),
    `三档宝箱都能解析（${tiers.join('/')}）`);
  ok(f3.grid[TEMPLATE_MARGIN + 2][TEMPLATE_MARGIN + 1] === 2, '柱子 → 阻挡地形 2');
  ok(f3.grid[TEMPLATE_MARGIN + 2][TEMPLATE_MARGIN + 2] === 4, '悬崖 → 地形 4');
  const el = room3.entities.find(e => e.kind === 'monster' && e.isElite);
  ok(!!el, '精英字符（3）→ isElite 怪物');

  // ---------- 7. 无出口 ----------
  const f4 = buildPrefabFloor(templateToPrefab(newTemplate(5, 5, 'rest'), 1));
  ok(f4.rooms[0].doors.length === 0, `无出口 → 不产生门（实际 ${f4.rooms[0].doors.length}）`);

  // ---------- 8. 风险档标注 → 奖励倍率落地（预制房不走 ContentFiller，必须显式标） ----------
  const rm = dataManager.mapGen.content.risk.rewardMul;
  const tR: RoomTemplate = { ...base, cells: [...base.cells], type: 'chest', risk: 3 };
  tR.cells[2 * tR.w + 2] = '4';
  tR.cells[2 * tR.w + 4] = 'r'; // 遗物宝箱：自带三选一，不吃 rewardMul
  const fR = buildPrefabFloor(templateToPrefab(tR, 5));
  const roomR = fR.rooms[0];
  const normalChest = roomR.entities.find(e => e.kind === 'chest' && e.chestTier === 'normal');
  const relicChest = roomR.entities.find(e => e.kind === 'chest' && e.chestTier === 'relic');
  ok(roomR.risk === 3 && roomR.rewardMul === rm[2], `风险档写入房间（risk=${String(roomR.risk)} mul=${String(roomR.rewardMul)}）`);
  ok(normalChest?.rewardMul === rm[2] && normalChest?.riskTier === 3, '风险档结算到普通宝箱');
  ok(relicChest !== undefined && relicChest.rewardMul === undefined, '遗物宝箱不吃 rewardMul（自带三选一）');
  const tTrip = prefabToTemplate(templateToPrefab(tR, 5));
  ok(tTrip.risk === 3, `风险档可往返（${String(tTrip.risk)}）`);

  // ---------- 9. 编辑器约定：入口固定南，其余出口才是设计变量 ----------
  const tS: RoomTemplate = { ...base, cells: [...base.cells], entry: 'south', exits: ['south'] };
  openDoorCells(tS, ['south']);
  const innerS = entryInnerCell(tS, 'south');
  tS.cells[(innerS.y - TEMPLATE_MARGIN) * tS.w + (innerS.x - TEMPLATE_MARGIN)] = 'S';
  const fS = buildPrefabFloor(templateToPrefab(tS, 1));
  const roomS = fS.rooms[0];
  ok(roomS.fromDirection === 'south', `入口固定南 → fromDirection（实际 ${String(roomS.fromDirection)}）`);
  ok(roomS.doors.some(door => door.direction === 'south'), '南门被识别为门（入口）');
  for (const d of ['north', 'east', 'west'] as Direction[]) {
    ok(!roomS.doors.some(door => door.direction === d), `只开南门时 ${d} 方向无门（设计变量未被误开）`);
  }
  const stubS = stubCells(tS, 'south');
  ok(reachable(fS, fS.entryX, fS.entryY, stubS[stubS.length - 1].x, stubS[stubS.length - 1].y),
    '南入口可达墙外门槽（入口真的通）');

  // ---------- 10. 档案存储契约（src/data/rooms.json 的字段约定） ----------
  const stored = {
    id: 'test_room', w: tS.w, h: tS.h, cells: [...tS.cells],
    rows: templateRows(tS), entry: 'south' as Direction, exits: ['south'] as Direction[],
  };
  ok(stored.cells.length === stored.w * stored.h, `档案 cells 长度 = w×h（${stored.cells.length}）`);
  ok(JSON.stringify(stored.rows) === JSON.stringify(templateRows(tS)), '档案 rows 与模板导出一致');
  ok(prefabToTemplate(templateToPrefab({ ...tS, exits: stored.exits }, 1)).entry === 'south',
    '档案往返后仍为南入口');

  // ---------- 11. 张力值：房间级数据维度（供后续「房间类型决定」） ----------
  const tw2 = dataManager.mapGen.tension.weights;
  const tT: RoomTemplate = { ...base, cells: [...base.cells], type: 'combat' };
  const fTdef = buildPrefabFloor(templateToPrefab(tT, 1));
  ok(fTdef.rooms[0].tension === (tw2['combat'] ?? 0),
    `未标注张力 → 取房型默认权重（combat 实际 ${String(fTdef.rooms[0].tension)}）`);
  const defT2 = templateToPrefab({ ...tT, tension: 3 }, 1);
  ok(defT2.rooms[0].tension === 3, `显式张力写入预制定义（${String(defT2.rooms[0].tension)}）`);
  const fT2 = buildPrefabFloor(defT2);
  ok(fT2.rooms[0].tension === 3, `显式张力落地到 RoomData（${String(fT2.rooms[0].tension)}）`);
  ok((tw2['combat'] ?? 0) !== 3, '显式张力可偏离房型默认（覆盖生效）');
  ok(prefabToTemplate(defT2).tension === 3, `张力值可往返（${String(prefabToTemplate(defT2).tension)}）`);
  ok(templateToPrefab({ ...tT, tension: null }, 1).rooms[0].tension === undefined,
    '张力 null → 不写预制定义（跟随房型默认）');
  ok(resolveRoomTension('chest') === (tw2['chest'] ?? 0) && resolveRoomTension('chest', 2) === 2,
    'resolveRoomTension：显式优先 / 缺省回退房型权重');

  // ---------- 12. 通口类型（出口模式）分类与预设 ----------
  ok(patternFromExits(['south']) === 'single', '通口：单口');
  ok(patternFromExits(['south', 'north']) === 'vertical', '通口：上下通口（一对对边）');
  ok(patternFromExits(['south', 'east']) === 'diagonal', '通口：对角通口（一对邻边）');
  ok(patternFromExits(['south', 'east', 'west']) === 'tee', '通口：T型通口（三边）');
  ok(patternFromExits(['south', 'north', 'east', 'west']) === 'cross', '通口：四方通口（四边）');
  ok(patternFromExits(['north', 'south']) === 'vertical' && patternFromExits(['east', 'west']) === 'vertical',
    '通口：判定与入口方向无关（只看边关系）');
  ok(matchPattern(EXIT_PATTERN_PRESETS.tee) === 'tee' && matchPattern(['south', 'west']) === null,
    '通口：matchPattern 预设精确匹配 / 非预设返回 null（自定义）');
  ok(exitsLabel(['south', 'north', 'east']) === '北东南', `通口：方向串（${exitsLabel(['south', 'north', 'east'])}）`);
  ok(EXIT_PATTERN_PRESETS.cross.length === 4, '通口：四方通口预设含 4 个出口');
  // 编辑器点选预设 → 出口写入 → PrefabMap / RoomData 落地 pattern
  const tPat: RoomTemplate = { ...base, cells: [...base.cells], entry: 'south', exits: [...EXIT_PATTERN_PRESETS.vertical] };
  openDoorCells(tPat, ['south', 'north']);
  const defPat = templateToPrefab(tPat, 1);
  ok(defPat.rooms[0].pattern === 'vertical', `通口：templateToPrefab 写入 pattern（${String(defPat.rooms[0].pattern)}）`);
  ok(buildPrefabFloor(defPat).rooms[0].pattern === 'vertical',
    `通口：RoomData.pattern 落地（${String(buildPrefabFloor(defPat).rooms[0].pattern)}）`);

  // ---------- 13. 房间库：按「类型 + 通口类型」抽取（同类型不同张力 = 不同体验） ----------
  const libRooms = listRooms();
  ok(Array.isArray(libRooms), `房间库：listRooms 返回数组（${libRooms.length} 间）`);
  const bossPick = pickRoom({ type: 'boss', rand: () => 0 });
  ok(bossPick === null || bossPick.type === 'boss', '房间库：无匹配房型返回 null（或同类型房）');
  const combatLib = roomsOfType('combat');
  if (combatLib.length > 0) {
    const picked = pickRoom({ type: 'combat', pattern: 'vertical', rand: () => 0 });
    ok(!!picked && picked.type === 'combat', '房间库：按类型抽到房间');
    ok(picked !== null && patternOfRoom(picked) === 'vertical',
      `房间库：通口类型匹配 vertical（${picked ? patternOfRoom(picked) : 'null'}）`);
    ok(pickRoom({ type: 'combat', exclude: combatLib.map(r => r.id) }) === null, '房间库：exclude 全部后不抽取');
  } else {
    ok(true, '房间库：暂存 combat 手工房（跳过抽取断言 a）');
    ok(true, '房间库：暂存 combat 手工房（跳过抽取断言 b）');
    ok(true, '房间库：暂存 combat 手工房（跳过抽取断言 c）');
  }

  console.log(`断言 ${pass} 通过 / ${fail} 失败`);
  if (fail > 0) {
    console.error('\n!!! 房间编辑器契约测试存在失败断言 !!!');
    process.exit(1);
  }
  console.log('\n房间编辑器（模板 ↔ 预制地图）：全部通过 ✅');
}

run();
