/**
 * P0 验收测试：深度倍率（P0-1）、同层数值收敛（P0-2）断言。
 * 全部通过输出 PASS，任一失败 exit 1。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { MapGenerator } from '../map/MapGenerator';
import { StatCalculator } from '../utils/StatCalculator';
import { EquipmentGenerator } from '../systems/EquipmentGenerator';
import type { RoomData } from '../types';

let failed = 0;
function check(name: string, cond: boolean, detail = ''): void {
  if (!cond) {
    failed++;
    console.error(`✗ ${name} ${detail}`);
  }
}

function approx(a: number, b: number, eps = 1e-9): boolean {
  return Math.abs(a - b) < eps;
}

dataManager.loadAll();
const calc = StatCalculator.getInstance();
const monsters = dataManager.monsters.monsters.filter(m => m.category === 'normal');
const slime = monsters[0];

// ============ P0-1：深度倍率 ============

// 1) 倍率基准表抽查
const mulCases: [number, number, number][] = [
  [5, 0, 0.8], [7, 2, 1.0], [8, 3, 1.1], [9, 4, 1.15], [10, 6, 1.15 + 0.2],
  [15, 0, 0.75], [20, 2, 1.1], [25, 3, 1.1], [30, 4, 1.15], [30, 7, 1.15 + 0.45],
  [31, 0, 0.7], [40, 2, 1.1], [50, 3, 1.2], [60, 4, 1.2], [80, 9, 1.2 + 1.0],
];
for (const [f, d, want] of mulCases) {
  check(`倍率表 floor${f} depth${d}`, approx(calc.depthMultiplier(f, d), want),
    `got=${calc.depthMultiplier(f, d)} want=${want}`);
}
check('depth1 恒为基准1.0', [1, 5, 15, 30, 31, 99].every(f => approx(calc.depthMultiplier(f, 1), 1)));

// 2) 不传 depth 与 depth=1 完全一致（兼容性）
for (const f of [3, 12, 33, 55]) {
  const a = calc.monsterStats(slime, f, false);
  const b = calc.monsterStats(slime, f, false, 1);
  check(`不传depth兼容 floor${f}`, a.hp === b.hp && a.attack === b.attack && a.defense === b.defense
    && a.gold === b.gold && a.exp === b.exp);
}

// 3) 同楼层深度梯度：depth0 < depth1 < depth3
for (const f of [7, 20, 45]) {
  const d0 = calc.monsterStats(slime, f, false, 0).hp;
  const d1 = calc.monsterStats(slime, f, false, 1).hp;
  const d2 = calc.monsterStats(slime, f, false, 2).hp;
  const d3 = calc.monsterStats(slime, f, false, 3).hp;
  const d4 = calc.monsterStats(slime, f, false, 4).hp;
  check(`深度梯度 floor${f}`, d0 < d1 && d1 <= d2 && d2 <= d3 && d3 <= d4 && d1 < d4,
    `${d0},${d1},${d2},${d3},${d4}`);
}

// 4) 掉落同倍率：gold/exp 随深度递增
{
  const g1 = calc.monsterStats(slime, 25, false, 1).gold;
  const g4 = calc.monsterStats(slime, 25, false, 4).gold;
  const e1 = calc.monsterStats(slime, 25, false, 1).exp;
  const e4 = calc.monsterStats(slime, 25, false, 4).exp;
  check('掉落随深度递增', g4 > g1 && e4 > e1, `gold ${g1}->${g4} exp ${e1}->${e4}`);
}

// 5) 精英倍率在深度倍率之后叠加（elite 深度4 = normal 深度4 × eliteStat）
{
  const em = dataManager.monsters;
  const n = calc.monsterStats(slime, 12, false, 4).hp;
  const e = calc.monsterStats(slime, 12, true, 4).hp;
  // 取整顺序：先乘精英倍率再取整，与「先取整再乘」允许 ±1 误差
  check('精英叠加顺序', Math.abs(e - n * em.eliteStatMultiplier) <= 1, `${n}×${em.eliteStatMultiplier}≈${e}`);
}

// 6) 装备品质下限：depth 9 → 必 ≥ 史诗；depth 缺省 → 不强制
{
  const eg = EquipmentGenerator.getInstance();
  for (let i = 0; i < 20; i++) {
    const q = eg.generate('chest', { floorId: 5, depth: 9 }).quality;
    const order = dataManager.equipment.qualityOrder as string[];
    check('深度品质下限≥epic', order.indexOf(q) >= order.indexOf('epic'), `got=${q}`);
  }
  let sawLow = false;
  for (let i = 0; i < 60; i++) {
    const q = eg.generate('chest', { floorId: 5 }).quality;
    if (q === 'poor' || q === 'common') sawLow = true;
  }
  check('无深度参数不强制品质', sawLow);
}

// 7) 生成图怪物实体携带 depth 与 stats，且 stats 等于按房间深度计算的值
{
  const gen = MapGenerator.getInstance();
  let checked = 0;
  for (const f of [6, 14, 27]) {
    const floor = gen.generate(f);
    for (const room of floor.rooms) {
      for (const e of room.entities) {
        if (e.kind !== 'monster') continue;
        const def = dataManager.getMonster(e.monsterId!);
        check('实体携带depth', e.depth === room.depth, `room=${room.id} e.depth=${e.depth}`);
        check('实体携带stats', !!e.stats);
        if (def && e.stats) {
          const want = calc.monsterStats(def, f, !!e.isElite, room.depth);
          // P0-2 收敛只向下修正：存储值 ≤ 原始深度计算值；掉落完全一致
          check('stats与深度计算一致', e.stats.hp <= want.hp && e.stats.attack <= want.attack
            && e.stats.defense <= want.defense && e.stats.gold === want.gold,
            `${e.stats.hp}/${want.hp}`);
        }
        checked++;
      }
    }
  }
  check('有怪物被检查', checked > 10, `checked=${checked}`);
}

// ============ P0-2：同层数值收敛 ============
{
  const gen = MapGenerator.getInstance();
  const calc2 = StatCalculator.getInstance();
  const EPS = 1e-9;
  let floorsChecked = 0;
  // 无倒挂断言：同层同怪物定义，深度更深的实例属性 ≥ 更浅的实例（收敛 cap 相同，min(raw,cap) 单调）
  let inverted = 0, pairsChecked = 0;
  for (const f of [2, 4, 6, 8, 11, 14, 18, 22, 27, 33, 41, 55]) {
    for (let it = 0; it < 12; it++) {
      const floor = gen.generate(f);
      const mons = floor.rooms
        .flatMap(r => r.entities.filter(e => e.kind === 'monster' && e.stats).map(e => ({
          room: r, isElite: !!e.isElite, def: e.monsterId ?? '', stats: e.stats!,
        })));
      if (mons.length === 0) continue;
      floorsChecked++;
      for (const attr of ['hp', 'attack', 'defense'] as const) {
        const normals = mons.filter(m => !m.isElite);
        const pool = normals.length > 0 ? normals : mons;
        const nMin = Math.min(...pool.map(m => m.stats[attr]));
        const nMax = Math.max(...pool.map(m => m.stats[attr]));
        check(`普通极差≤1.4 f${f}`, nMax <= nMin * 1.4 + EPS, `${attr} ${nMin}~${nMax}`);
        const aMin = Math.min(...mons.map(m => m.stats[attr]));
        const aMax = Math.max(...mons.map(m => m.stats[attr]));
        check(`全怪极差≤1.8 f${f}`, aMax <= aMin * 1.8 + EPS, `${attr} ${aMin}~${aMax}`);
      }
      for (const m of mons.filter(x => x.isElite)) {
        const def = dataManager.getMonster(m.def);
        if (!def) continue;
        const base = calc2.monsterStats(def, f, false, 1);
        for (const attr of ['hp', 'attack', 'defense'] as const) {
          check(`精英≤基准1.5倍 f${f}`, m.stats[attr] <= base[attr] * 1.5 + EPS,
            `${attr} ${m.stats[attr]} cap=${base[attr] * 1.5}`);
        }
        // 精英掉落不受封顶影响：金币/经验仍按「同深度普通基准 × 精英掉落倍率」（仅取整容差）
        const em = dataManager.monsters;
        const baseD = calc2.monsterStats(def, f, false, m.room.depth);
        check('精英掉落未被封顶', Math.abs(m.stats.gold - baseD.gold * em.eliteGoldMultiplier) <= 2
          && Math.abs(m.stats.exp - baseD.exp * em.eliteExpMultiplier) <= 2,
          `gold ${m.stats.gold}≈${baseD.gold * em.eliteGoldMultiplier} exp ${m.stats.exp}≈${baseD.exp * em.eliteExpMultiplier}`);
      }
      // 无倒挂（限同怪物定义内）：
      //  a) 同精英状态：深度更深者属性 ≥ 更浅者（各收敛cap对该def恒定，min(raw,cap)单调）
      //  b) 同深度且深度≤3：精英 ≥ 普通（倍率≤1.2<1.25精英乘数可证；深层封顶例外属设计允许）
      const byDef = new Map<string, typeof mons>();
      for (const m of mons) {
        const g = byDef.get(m.def) ?? [];
        g.push(m);
        byDef.set(m.def, g);
      }
      for (const g of byDef.values()) {
        for (let i = 0; i < g.length; i++) {
          for (let j = 0; j < g.length; j++) {
            if (i === j) continue;
            const a = g[i], b = g[j];
            let hi = a, lo = b;
            if (a.isElite === b.isElite) {
              if (a.room.depth <= b.room.depth) continue;
            } else if (a.room.depth === b.room.depth && a.room.depth <= 3) {
              if (!a.isElite) continue;
            } else continue;
            pairsChecked++;
            const ok = hi.stats.hp >= lo.stats.hp && hi.stats.attack >= lo.stats.attack
              && hi.stats.defense >= lo.stats.defense;
            if (!ok) inverted++;
          }
        }
      }
    }
  }
  check('收敛检查覆盖足够楼层', floorsChecked > 50, `${floorsChecked}`);
  check('同层同怪无深度倒挂', inverted === 0, `倒挂${inverted}/${pairsChecked}对`);
}

// ============ P0-3 / P0-4：Tension 权重、精英保底、路径连续约束 ============
{
  // 配置值核对（P0-3 全局替换）
  const t = dataManager.mapGen.tension;
  check('权重 elite=2', t.weights.elite === 2);
  check('权重 combat=1', t.weights.combat === 1);
  check('权重 chest=-1', t.weights.chest === -1);
  check('权重 merchant=-2', t.weights.merchant === -2);
  check('权重 witch=-2', t.weights.witch === -2);
  check('权重 blacksmith=-2', t.weights.blacksmith === -2);
  check('强制正面阈值=5', t.forcePositiveAt === 5);
  check('强制负面阈值=-4', t.forceNegativeAt === -4);

  const gen = MapGenerator.getInstance();
  let eligibleFloors = 0;
  let elitesA = 0, elitesB = 0;
  for (const f of [2, 3, 4, 6, 7, 8, 9, 11, 13, 16, 17, 19, 21, 23, 26, 28, 31, 34, 37, 42, 47, 53]) {
    for (let it = 0; it < 40; it++) {
      const floor = gen.generate(f);
      if (floor.kind !== 'normal') continue;
      const rooms = floor.rooms;
      const eliteRooms = rooms.filter(r => r.type === 'elite');
      if (rooms.length >= 6) {
        eligibleFloors++;
        // 保底：1~2 个精英房
        check(`精英房保底1~2 f${f}`, eliteRooms.length >= 1 && eliteRooms.length <= 2,
          `rooms=${rooms.length} elites=${eliteRooms.length}`);
      }
      // 精英房应位于主干
      for (const er of eliteRooms) {
        check('精英房在主干', er.onPathA || er.onPathB, er.id);
        if (er.onPathA) elitesA++; else elitesB++;
      }
      // 路径连续约束（P0-4）：主干房间按生成序构成路径序列
      const railSeq = (rail: 'onPathA' | 'onPathB'): RoomData[] =>
        rooms.filter(r => r[rail]).sort((a, b) => a.order - b.order);
      for (const [name, seq] of [['A', railSeq('onPathA')], ['B', railSeq('onPathB')]] as const) {
        const types = seq.map(r => r.type);
        for (let i = 1; i < types.length; i++) {
          check(`无连续精英 路径${name} f${f}`, !(types[i] === 'elite' && types[i - 1] === 'elite'),
            types.join(','));
        }
        for (let i = 2; i < types.length; i++) {
          check(`无连续3战斗 路径${name} f${f}`,
            !(types[i] === 'combat' && types[i - 1] === 'combat' && types[i - 2] === 'combat'),
            types.join(','));
        }
        // 精英不居路径首位（深度分布；单房路径除外）
        if (types.length >= 2) {
          check(`精英避开首槽 路径${name} f${f}`, types[0] !== 'elite', types.join(','));
        }
      }
      // 路径长度差 ≤ 2
      const la = railSeq('onPathA').length, lb = railSeq('onPathB').length;
      check(`路径长度差≤2 f${f}`, Math.abs(la - lb) <= 2, `A=${la} B=${lb}`);
    }
  }
  check('保底检查覆盖足够', eligibleFloors > 200, `${eligibleFloors}`);
  check('路径A精英占比显著高于B', elitesA > elitesB && elitesA / (elitesA + elitesB) > 0.6,
    `A=${elitesA} B=${elitesB}`);
}

// ============ P0-5：战斗不可绕过 ============
{
  const gen = MapGenerator.getInstance();
  const innerOf = (d: { x: number; y: number; direction: string }) => {
    switch (d.direction) {
      case 'east': return { x: d.x - 1, y: d.y };
      case 'west': return { x: d.x + 1, y: d.y };
      case 'north': return { x: d.x, y: d.y + 1 };
      default: return { x: d.x, y: d.y - 1 };
    }
  };
  let roomsChecked = 0;
  for (const f of [3, 7, 12, 18, 24, 33, 46]) {
    for (let it = 0; it < 25; it++) {
      const floor = gen.generate(f);
      for (const room of floor.rooms) {
        // 密度上限（全部房间）
        const monCount = room.entities.filter(e => e.kind === 'monster' || e.kind === 'boss').length;
        const c = dataManager.mapGen.content;
        const area = (room.width - 2) * (room.height - 2);
        const cap = area <= c.smallAreaMax ? c.density.small : area <= c.mediumAreaMax ? c.density.medium : c.density.large;
        if (room.type !== 'boss') check(`密度上限 ${room.type}`, monCount <= cap, `${monCount}>${cap} ${room.id}`);

        if (room.type !== 'combat' && room.type !== 'elite') continue; // Boss 房由铁门机制保证不可跳过
        roomsChecked++;
        const inRoom = (x: number, y: number) => x >= room.x && x < room.x + room.width
          && y >= room.y && y < room.y + room.height;
        const blocked = new Set(room.entities
          .filter(e => e.kind === 'monster' || e.kind === 'boss' || e.kind === 'pillar')
          .map(e => `${e.x},${e.y}`));
        const inners = room.doors.map(innerOf).filter(p => inRoom(p.x, p.y) && floor.grid[p.y][p.x] === 0);
        // 主路径入口/出口 = 曼哈顿距离最远的门内侧对（P0-5 文档 2a）；怪物/柱子为障碍后必须不可通行
        if (inners.length >= 2) {
          let pair: [typeof inners[number], typeof inners[number]] = [inners[0], inners[1]];
          let bestD = -1;
          for (let i = 0; i < inners.length; i++) {
            for (let j = i + 1; j < inners.length; j++) {
              const d = Math.abs(inners[i].x - inners[j].x) + Math.abs(inners[i].y - inners[j].y);
              if (d > bestD) { bestD = d; pair = [inners[i], inners[j]]; }
            }
          }
          const [from, to] = pair;
          const seen = new Set<string>([`${from.x},${from.y}`]);
          const queue = [from];
          let connected = false;
          while (queue.length > 0 && !connected) {
            const cur = queue.shift()!;
            for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]] as const) {
              const nx = cur.x + dx, ny = cur.y + dy, k = `${nx},${ny}`;
              if (!inRoom(nx, ny) || connected) continue;
              if (floor.grid[ny][nx] !== 0 || blocked.has(k) || seen.has(k)) continue;
              if (nx === to.x && ny === to.y) { connected = true; break; }
              seen.add(k);
              queue.push({ x: nx, y: ny });
            }
          }
          check(`不可绕过 ${room.type} f${f}`, !connected, `${room.id} 主路径门对连通`);
        }
        // 精英房必须有精英怪
        if (room.type === 'elite') {
          check('精英房含精英怪', room.entities.some(e => e.kind === 'monster' && e.isElite), room.id);
        }
      }
    }
  }
  check('不可绕过检查覆盖足够', roomsChecked > 150, `${roomsChecked}`);
}

console.log(failed === 0 ? 'P0 全部通过 ✔' : `P0 失败 ${failed} 项`);
if (failed > 0) process.exit(1);
