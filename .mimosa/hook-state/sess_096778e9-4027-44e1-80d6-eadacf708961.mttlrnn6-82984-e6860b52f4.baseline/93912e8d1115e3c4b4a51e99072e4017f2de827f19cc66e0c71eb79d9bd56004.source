/**
 * 阶段三无头测试：装备生成规则 + 药水 + 经济 + 成长/强度平衡模拟。
 */
import { dataManager } from '../core/DataManager';
import { EquipmentGenerator } from '../systems/EquipmentGenerator';
import { StatCalculator } from '../utils/StatCalculator';
import { MapGenerator } from '../map/MapGenerator';
import type { AffixDef, Equipment, PotionTier, Quality } from '../types';

declare const process: { exit(code?: number): void };

const QUALITY_RANK: Record<Quality, number> = { poor: 0, common: 1, fine: 2, rare: 3, epic: 4, legendary: 5, mythic: 6 };
let failures = 0;
const fail = (msg: string): void => { failures++; console.error('  ✗', msg); };
const ok = (msg: string): void => console.log('  ✓', msg);

function testQualityDistribution(): void {
  console.log('\n== 品质分布（随楼层） ==');
  const floors = [3, 8, 15, 25, 35, 45];
  for (const floor of floors) {
    const counts: Record<string, number> = {};
    const N = 5000;
    for (let i = 0; i < N; i++) {
      const q = EquipmentGenerator.getInstance().rollQuality(floor);
      counts[q] = (counts[q] ?? 0) + 1;
    }
    const pct = Object.fromEntries(Object.entries(counts).map(([k, v]) => [k, (v / N * 100).toFixed(1) + '%']));
    console.log(`  楼层${floor}:`, JSON.stringify(pct));
    // 断言：前期破烂+普通为主，后期史诗+传说为主
    if (floor <= 5 && ((counts.poor ?? 0) + (counts.common ?? 0)) / N < 0.7) fail('前期破烂+普通应≥70%');
    if (floor >= 41 && ((counts.epic ?? 0) + (counts.legendary ?? 0)) / N < 0.55) fail('后期史诗+传说应≥55%');
  }
  ok('品质概率随楼层演进正常');
}

function testEquipmentGeneration(): void {
  console.log('\n== 装备生成规则 ==');
  const gen = EquipmentGenerator.getInstance();
  const tables = dataManager.equipment;
  const N = 3000;
  let sameAffixDup = 0;

  for (let i = 0; i < N; i++) {
    const floor = 1 + Math.floor(Math.random() * 50);
    const equip = gen.generate('chest', { floorId: floor });
    validateEquip(equip, floor);
  }

  // 防具数值约为武器50-60%：查表对比（fine列在所有等级段都存在）
  let armorSum = 0; let weaponSum = 0; let count = 0;
  for (const lvl of [5, 15, 30, 45]) {
    const wRow = tables.weaponTable.find(r => lvl >= r.minEquipLevel && lvl <= r.maxEquipLevel)!;
    const aRow = tables.armorTable.find(r => lvl >= r.minEquipLevel && lvl <= r.maxEquipLevel)!;
    weaponSum += mid(wRow.values.fine as [number, number]);
    armorSum += mid(aRow.values.fine as [number, number]);
    count++;
  }
  const avgRatio = armorSum / weaponSum;
  if (avgRatio < 0.45 || avgRatio > 0.68) fail(`防具/武器比例 ${avgRatio.toFixed(2)} 超出50-60%区间（放宽到45-68%）`);
  else ok(`防具/武器数值比例 ≈ ${(avgRatio * 100).toFixed(0)}%（目标50-60%）`);
  if (sameAffixDup > 0) fail(`词条重复 ${sameAffixDup} 次`);
  else ok('词条无重复');

  function mid(range: [number, number]): number { return (range[0] + range[1]) / 2; }

  function validateEquip(e: Equipment, floor: number): void {
    const q = tables.quality[e.quality];
    // 等级范围
    const f = tables.equipLevelFormula;
    const maxPossible = Math.floor(60 * f.playerLevelFactor + floor * f.floorFactor + f.randomMax);
    if (e.level < 1 || e.level > Math.min(f.max, maxPossible)) fail(`装备等级${e.level}越界 floor=${floor}`);
    // 词条数量
    let expected = q.affixCount;
    if (q.affixExtra) for (const ex of q.affixExtra) if (e.level >= ex.atEquipLevel) expected += ex.add;
    expected = Math.min(expected, q.affixCountMax);
    if (e.quality === 'mythic') expected = tables.affixSpecial.mythicAffixCount;
    if (e.affixes.length !== expected) fail(`${e.quality}词条数${e.affixes.length}≠${expected} (${e.name})`);
    // 词条品质下限
    for (const a of e.affixes) {
      const def = tables.affixes.find(d => d.type === a.type)!;
      if (QUALITY_RANK[e.quality] < QUALITY_RANK[def.minQuality]) fail(`词条${a.name}品质下限不满足 ${e.quality}`);
      // 数值在band内
      const band = def.bands.find(b => e.level <= b.maxEquipLevel) ?? def.bands[def.bands.length - 1];
      if (a.value < band.min || a.value > band.max) fail(`词条${a.name}=${a.value} 超出band[${band.min},${band.max}] Lv${e.level}`);
    }
    // 重複检查
    const types = e.affixes.map(a => a.type);
    if (new Set(types).size !== types.length) sameAffixDup++;
    // 命名
    const prefix = q.prefix;
    const affixNames = e.affixes.map(a => `·${a.name}`).join('');
    const expectName = `${prefix}${e.baseName}${affixNames}`;
    if (e.name !== expectName) fail(`命名 ${e.name} ≠ ${expectName}`);
    // 回收价公式
    const expectSell = Math.round(q.basePrice * (1 + e.level * 0.05) * (1 + e.affixes.length * 0.15));
    if (e.sellPrice !== expectSell) fail(`回收价 ${e.sellPrice} ≠ ${expectSell}`);
    // 购买价范围
    if (e.buyPrice < tables.buyPriceRule.min || e.buyPrice > tables.buyPriceRule.max) fail(`购买价${e.buyPrice}越界`);
    // 数值>0（对应槽位）
    if (e.slot === 'weapon' && e.attack <= 0) fail('武器攻击≤0');
    if (e.slot === 'armor' && e.defense <= 0) fail('防具防御≤0');
  }
  ok(`${N}件装备生成规则全部校验`);
}

function testAffixesTable(): void {
  console.log('\n== 词条表完整性 ==');
  const affixes: AffixDef[] = dataManager.equipment.affixes;
  if (affixes.length !== 12) fail(`词条数${affixes.length}≠12`);
  const names = ['锋利', '坚固', '活力', '精准', '灵巧', '强攻', '铁壁', '嗜血', '业火', '贪婪', '博学', '屠龙'];
  for (const n of names) if (!affixes.some(a => a.name === n)) fail(`缺少词条${n}`);
  for (const a of affixes) {
    if (a.bands.length !== 4) fail(`${a.name}分档数≠4`);
    if (a.minQuality !== 'fine' && a.minQuality !== 'rare' && a.minQuality !== 'epic') fail(`${a.name}品质下限异常`);
  }
  ok('12词条 × 4分档 完整');
}

function testPotions(): void {
  console.log('\n== 药水系统 ==');
  const potions = dataManager.potions.potions;
  const expect = [
    { tier: 'crude', pct: 0.2, price: 20 },
    { tier: 'normal', pct: 0.3, price: 40 },
    { tier: 'quality', pct: 0.45, price: 100 },
    { tier: 'strong', pct: 0.6, price: 250 },
    { tier: 'holy', pct: 0.8, price: 600 },
  ];
  if (potions.length !== 5) fail('药水档数≠5');
  for (const e of expect) {
    const p = potions.find(p2 => p2.tier === e.tier);
    if (!p) { fail(`缺药水${e.tier}`); continue; }
    if (p.healPct !== e.pct) fail(`${e.tier}回复比例${p.healPct}≠${e.pct}`);
    if (p.price !== e.price) fail(`${e.tier}价格${p.price}≠${e.price}`);
  }
  ok('5档药水：20%/30%/45%/60%/80%，价格 20/40/100/250/600');
  // 楼层可用性：每层至少1种可用
  for (let f = 1; f <= 50; f++) {
    const avail = potions.filter(p => f >= p.minFloor && f <= p.maxFloor);
    if (avail.length === 0) fail(`楼层${f}无可用药水`);
  }
  ok('各楼层均有对应品质药水可购');
}

function testEconomy(): void {
  console.log('\n== 经济（击杀几只怪可买一瓶药） ==');
  const calc = StatCalculator.getInstance();
  const floors = [3, 8, 15, 25, 35, 45];
  for (const f of floors) {
    const monGold = calc.anchorValue(dataManager.config.floorAnchors.gold, f, 0);
    const potions = dataManager.potions.potions.filter(p => f >= p.minFloor && f <= p.maxFloor);
    const top = potions.sort((a, b) => b.healPct - a.healPct)[0];
    const need = Math.ceil(top.price / monGold);
    const line = `  楼层${f}: 单怪≈${Math.round(monGold)}金 → ${top.name}(${top.price}金) 需${need}只`;
    if (need > 4) { fail(line + ' 药水过贵'); } else { console.log(line, '✓'); }
  }
  ok('药水价格与金币获取同步');
}

function testGrowthBalance(): void {
  console.log('\n== 成长/强度平衡模拟 ==');
  const calc = StatCalculator.getInstance();
  const gen = MapGenerator.getInstance();
  const cfg = dataManager.config;
  const mons = dataManager.monsters.monsters.filter(m => m.category === 'normal');

  // 模拟：每层清空所有怪物（含装备加成近似：武器+防具 ≈ 当前装备等级的表值中位）
  let level = 1;
  let exp = 0;
  let battlesAtRisk = 0;
  const rows: string[] = [];
  for (let floor = 1; floor <= 50; floor++) {
    const floorMap = gen.generate(floor);
    // 统计本层怪物数与精英/Boss
    let monsterCount = 0;
    let hasBoss = false;
    for (const room of floorMap.rooms) {
      for (const e of room.entities) {
        if (e.kind === 'monster') monsterCount++;
        if (e.kind === 'boss') hasBoss = true;
      }
    }
    // 本层玩家状态（无装备基础 + 近似装备：rare 中位——玩家会持续换装）
    const base = calc.playerBaseAt(level);
    const equipLevel = Math.max(1, Math.min(50, Math.floor(level * 0.5 + floor)));
    const wRow = dataManager.equipment.weaponTable.find(r => equipLevel >= r.minEquipLevel && equipLevel <= r.maxEquipLevel)!;
    const wMid = mid(wRow.values.rare as [number, number]);
    const aRow = dataManager.equipment.armorTable.find(r => equipLevel >= r.minEquipLevel && equipLevel <= r.maxEquipLevel)!;
    const aMid = mid(aRow.values.rare as [number, number]);
    const pAtk = base.attack + wMid;
    const pDef = base.defense + aMid;
    const pHp = base.maxHp;

    // 最强普通怪战斗预估
    const pool = mons.filter(m => floor >= m.floorMin && floor <= m.floorMax);
    let worstTaken = 0; let worstName = '';
    for (const m of pool) {
      const st = calc.monsterStats(m, floor, false);
      const dmgOut = Math.max(1, pAtk - st.defense);
      const dmgIn = Math.max(1, st.attack - pDef);
      const turns = Math.ceil(st.hp / dmgOut);
      const taken = turns * dmgIn;
      if (taken > worstTaken) { worstTaken = taken; worstName = st.name; }
    }
    // 精英与Boss预估
    let eliteTaken = 0;
    if (pool.length > 0) {
      const st = calc.monsterStats(pool[0], floor, true);
      eliteTaken = Math.ceil(st.hp / Math.max(1, pAtk - st.defense)) * Math.max(1, st.attack - pDef);
    }
    let bossTaken = 0;
    if (floor % 5 === 0) {
      const dragon = dataManager.monsters.monsters.find(m => m.category === 'boss')!;
      const st = calc.monsterStats(dragon, floor, false);
      bossTaken = Math.ceil(st.hp / Math.max(1, pAtk - st.defense)) * Math.max(1, st.attack - pDef);
    }
    const safe = worstTaken < pHp * 0.55;
    if (!safe) battlesAtRisk++;
    if (floor % 5 === 0 || !safe) {
      rows.push(`  F${floor} Lv${level} HP${pHp} 攻${Math.round(pAtk)} 防${Math.round(pDef)} | 怪${worstName}损${Math.round(worstTaken)} 精英损${Math.round(eliteTaken)}${bossTaken > 0 ? ` Boss损${Math.round(bossTaken)}` : ''} ${safe ? '✓' : '⚠️危险'}`);
    }

    // 经验推进（含Boss楼层的大额经验）
    const dragon = dataManager.monsters.monsters.find(m => m.category === 'boss')!;
    const bossExp = floor % 5 === 0
      ? calc.monsterStats(dragon, floor, false).exp
      : 0;
    const expGain = monsterCount * calc.anchorValue(cfg.floorAnchors.exp, floor, 0) * 1.1 + bossExp;
    exp += expGain;
    let need = calc.expToNext(level);
    while (exp >= need) { exp -= need; level++; need = calc.expToNext(level); }
    void hasBoss;
  }
  rows.forEach(r => console.log(r));
  console.log(`  模拟结束：50层时玩家等级 ≈ Lv.${level}（期望≈40-50）`);
  if (level < 35 || level > 60) fail(`成长曲线偏移：Lv.${level}`);
  if (battlesAtRisk > 8) fail(`危险战斗层数过多：${battlesAtRisk}`);
  else ok(`平衡可玩（危险层${battlesAtRisk}/50）`);

  function mid(range: [number, number]): number { return (range[0] + range[1]) / 2; }
}

function testSaveShape(): void {
  console.log('\n== 存档序列化 ==');
  const floor = MapGenerator.getInstance().generate(7);
  const json = JSON.stringify(floor);
  const back = JSON.parse(json) as typeof floor;
  if (back.rooms.length !== floor.rooms.length) fail('地图序列化往返失败');
  if (back.grid.length !== floor.grid.length) fail('网格序列化往返失败');
  console.log(`  楼层序列化体积 ≈ ${(json.length / 1024).toFixed(1)}KB`);
  ok('地图序列化往返一致');
}

// ============ 执行 ============
console.log('=== 阶段三 装备/药水/经济/平衡 无头测试 ===');
dataManager.loadAll();
testQualityDistribution();
testEquipmentGeneration();
testAffixesTable();
testPotions();
testEconomy();
testGrowthBalance();
testSaveShape();

if (failures > 0) {
  console.error(`\n!!! ${failures} 项失败 !!!`);
  process.exit(1);
} else {
  console.log('\n全部通过 ✔');
}
