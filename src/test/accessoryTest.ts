/**
 * 饰品槽无头测试（2026-09-09 新增）：
 * 1. 生成器：饰品槽位可掷出，主属性为暴击/闪避，数值为百分点一位小数。
 * 2. 数值成长：前期极小（约 0.5~1.5%），随品质与等级提升。
 * 3. 属性聚合：装备饰品后暴击/闪避生效；卸下后失效；词条（精准/灵巧）与之叠加。
 * 4. 旧存档兼容：缺少 accessoryId 的旧档读入后不报错（视为未装备）。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { EquipmentGenerator } from '../systems/EquipmentGenerator';
import { Player } from '../entities/Player';
import type { Equipment, PlayerState, Quality } from '../types';

let failures = 0;
function check(name: string, ok: boolean, detail = ''): void {
  if (!ok) {
    failures++;
    console.error(`  ✗ ${name}${detail ? `：${detail}` : ''}`);
  } else {
    console.log(`  ✓ ${name}`);
  }
}

dataManager.loadAll();
const gen = EquipmentGenerator.getInstance();
const player = Player.getInstance();

// ============ 1. 饰品生成 ============
console.log('=== 饰品生成 ===');
const accessories: Equipment[] = [];
for (let i = 0; i < 400; i++) {
  const e = gen.generate('monster', { slot: 'accessory', floorId: 5 });
  accessories.push(e);
}
check('饰品槽位可生成', accessories.length === 400 && accessories.every(e => e.slot === 'accessory'));
check('主属性为暴击或闪避',
  accessories.every(e => e.accessoryStat === 'crit' || e.accessoryStat === 'dodge'),
  String(accessories[0]?.accessoryStat));
check('主属性数值为一位小数以内的正数',
  accessories.every(e => {
    const v = e.accessoryValue ?? 0;
    return v > 0 && Math.abs(v * 10 - Math.round(v * 10)) < 1e-6;
  }),
  String(accessories[0]?.accessoryValue));
check('饰品不提供攻防（攻防为 0）', accessories.every(e => e.attack === 0 && e.defense === 0));
check('饰品命名使用饰品基础名',
  accessories.every(e => /护符|指环|徽记|符石|星环/.test(e.baseName)),
  accessories[0]?.baseName);

// 槽位权重：三槽位都应出现（400 次抽样）
const slotCount = { weapon: 0, armor: 0, accessory: 0 };
for (let i = 0; i < 400; i++) slotCount[gen.generate('monster', { floorId: 8 }).slot]++;
check('随机生成时三种槽位均会出现',
  slotCount.weapon > 0 && slotCount.armor > 0 && slotCount.accessory > 0,
  JSON.stringify(slotCount));

// ============ 2. 数值成长 ============
console.log('=== 数值成长 ===');
function avgValue(quality: Quality, level: number, n = 200): number {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const e = gen.generate('monster', {
      slot: 'accessory', forcedQuality: quality, floorId: level, depth: 1,
    });
    sum += e.accessoryValue ?? 0;
  }
  return sum / n;
}
// 用强制等级难以直接控制（等级由玩家等级/楼层决定），改为比较相邻品质
const poor = avgValue('poor', 3);
const common = avgValue('common', 3);
const fine = avgValue('fine', 3);
const rare = avgValue('rare', 3);
console.log(`  1-5 级段均值：破烂 ${poor.toFixed(2)}% / 普通 ${common.toFixed(2)}% / 优秀 ${fine.toFixed(2)}% / 稀有 ${rare.toFixed(2)}%`);
check('前期饰品数值很小（破烂 <1.5%）', poor < 1.5, poor.toFixed(2));
check('数值随品质递增', poor < common && common < fine && fine < rare);
const highEpic = avgValue('epic', 45);
console.log(`  45 级段史诗均值：${highEpic.toFixed(2)}%`);
check('高等级高品质数值显著更大', highEpic > rare * 2, `${highEpic.toFixed(2)} vs ${rare.toFixed(2)}`);

// ============ 3. 属性聚合 ============
console.log('=== 属性聚合 ===');
const base: PlayerState = {
  ...player.state,
  level: 10, exp: 0, hp: 500, baseMaxHp: 500, baseAttack: 30, baseDefense: 15,
  baseCritRate: 5, baseDodgeRate: 3,
  gold: 0, keys: 0,
  potions: { crude: 0, normal: 0, quality: 0, strong: 0, holy: 0 },
  hotbar: [null, null, null, null, null],
  weaponId: null, armorId: null, accessoryId: null, bag: [],
  x: 0, y: 0, currentFloor: 10, currentRoomId: '',
};
player.restore({ ...base, bag: [] });
const critAcc: Equipment = {
  id: 'test_acc_crit', slot: 'accessory', baseName: '护符', name: '测试护符',
  level: 10, quality: 'fine', affixes: [], attack: 0, defense: 0,
  accessoryStat: 'crit', accessoryValue: 4.5,
  sellPrice: 10, buyPrice: 20, source: 'tutorial',
};
const dodgeAcc: Equipment = { ...critAcc, id: 'test_acc_dodge', accessoryStat: 'dodge', accessoryValue: 3.2 };
player.addEquipment(critAcc);
player.addEquipment(dodgeAcc);

const beforeStats = player.stats();
check('未装备饰品时为基础值', beforeStats.critRate === 5 && beforeStats.dodgeRate === 3,
  `crit=${beforeStats.critRate} dodge=${beforeStats.dodgeRate}`);

player.equip(critAcc.id);
const withCrit = player.stats();
check('装备暴击饰品 → 暴击 +4.5', Math.abs(withCrit.critRate - 9.5) < 1e-6, String(withCrit.critRate));
check('装备暴击饰品不影响闪避', Math.abs(withCrit.dodgeRate - 3) < 1e-6, String(withCrit.dodgeRate));

player.equip(dodgeAcc.id);
const withBoth = player.stats();
check('换装闪避饰品后暴击回落、闪避上升',
  Math.abs(withBoth.critRate - 5) < 1e-6 && Math.abs(withBoth.dodgeRate - 6.2) < 1e-6,
  `crit=${withBoth.critRate} dodge=${withBoth.dodgeRate}`);

player.unequip('accessory');
const afterUnequip = player.stats();
check('卸下饰品后回归基础值', afterUnequip.critRate === 5 && afterUnequip.dodgeRate === 3);
check('未穿戴列表包含卸下的饰品', player.unequippedBag.length === 2);

// 词条叠加（精准=暴击 / 灵巧=闪避）
const affixAcc: Equipment = {
  ...critAcc, id: 'test_acc_affix', accessoryValue: 2.0,
  affixes: [
    { type: 'precision', name: '精准', value: 3, isPercent: true },
    { type: 'agility', name: '灵巧', value: 2, isPercent: true },
  ],
};
player.state.bag.push(affixAcc);
player.equip(affixAcc.id);
const withAffix = player.stats();
check('饰品主属性与词条叠加（暴击 5+2+3=10，闪避 3+2=5）',
  Math.abs(withAffix.critRate - 10) < 1e-6 && Math.abs(withAffix.dodgeRate - 5) < 1e-6,
  `crit=${withAffix.critRate} dodge=${withAffix.dodgeRate}`);

// ============ 4. 旧存档兼容 ============
console.log('=== 旧存档兼容 ===');
const legacy = { ...base } as unknown as PlayerState;
delete (legacy as unknown as Record<string, unknown>).accessoryId;
let legacyOk = true;
try {
  // 模拟 SaveManager 的旧档补默认值
  (legacy as unknown as { accessoryId?: string | null }).accessoryId ??= null;
  player.restore(legacy);
} catch {
  legacyOk = false;
}
check('缺少 accessoryId 的旧档可安全读入', legacyOk && player.state.accessoryId === null);

console.log(failures === 0 ? '\n饰品系统 全部通过 ✔' : `\n!!! ${failures} 项失败 !!!`);
if (failures > 0) process.exit(1);
