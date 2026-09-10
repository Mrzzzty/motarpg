/**
 * 遗物系统无头测试：数据加载 / 效果聚合 / 组合质变 / 净化 / 难度系数。
 * 运行：node scripts/run-headless.mjs src/test/relicTest.ts
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import { RelicManager } from '../systems/RelicManager';
import { DifficultySystem } from '../systems/DifficultySystem';
import { gameState } from '../core/GameState';
import { StatCalculator } from '../utils/StatCalculator';

let passed = 0;
function ok(cond: boolean, msg: string): void {
  if (cond) { passed++; } else { console.error('✗ ' + msg); process.exit(1); }
}
function eq(a: unknown, b: unknown, msg: string): void {
  if (a === b) { passed++; } else { console.error(`✗ ${msg}: 期望 ${b}，实际 ${a}`); process.exit(1); }
}

dataManager.loadAll();
const rm = RelicManager.getInstance();
const player = Player.getInstance();

// ---- 数据层 ----
ok(dataManager.relics.relics.length >= 60, `遗物条目数 >= 60（实际 ${dataManager.relics.relics.length}）`);
ok(!!dataManager.getRelic('R001'), 'getRelic(R001) 可用');
ok(!!dataManager.getRelic('X021')?.purifyTo, 'X021 有净化目标');
ok(dataManager.relics.combos.length === 7, '组合质变 7 套');

// ---- 重置为无遗物 ----
player.state.relics = [];
player.state.hp = player.maxHp;
const attack0 = player.stats().attack;
ok(rm.owned().length === 0, '初始无遗物');

// ---- 单件平加（R001 攻击+3）----
rm.add('R001');
eq(player.stats().attack, attack0 + 3, 'R001 攻击 +3');
ok(rm.has('R001'), '持有 R001');
// 同类唯一
ok(rm.add('R001') === false, '同类遗物不可重复持有');

// ---- 多件叠加 + 百分比（R015 攻击+10%）----
const before15 = player.stats().attack;
rm.add('R015');
// R001(+3) + R015(+10%) → (base+3)*1.10
ok(player.stats().attack > before15, 'R015 百分比攻击生效');

// ---- 生命上限（R004 +200）----
const hpBefore = player.stats().maxHp;
rm.add('R004');
eq(player.stats().maxHp, hpBefore + 200, 'R004 生命上限 +200');

// ---- 组合质变：血怒（R014+R008+R009）----
rm.add('R014'); rm.add('R008'); rm.add('R009');
ok(rm.hasCombo('bloodrage'), '血怒组合已激活');
// 低血：攻击 ×2（组合）叠加
player.state.hp = 1;
const lowAtk = player.stats().attack;
player.state.hp = player.stats().maxHp;
const highAtk = player.stats().attack;
ok(lowAtk > highAtk, '低血时攻击更高（狂战士之血 + 血怒）');

// ---- 灾厄净化：X021 → X021P ----
rm.add('X021');
ok(rm.has('X021'), '持有灾厄 X021');
ok(rm.purify('X021'), '净化成功');
ok(!rm.has('X021') && rm.has('X021P'), 'X021 已转为 X021P');
ok(rm.purified === 1, '净化计数为 1');

// ---- 丢弃 ----
ok(rm.remove('R001'), '丢弃 R001');
ok(!rm.has('R001'), 'R001 已移除');

// ---- 难度系数 ----
gameState.setDifficulty(2);
const normalMul = DifficultySystem.getInstance().monsterMul();
eq(normalMul, 1.0, '普通难度怪物倍率 1.0');
gameState.setDifficulty(7);
eq(DifficultySystem.getInstance().monsterMul(), 5.0, '天堂难度怪物倍率 5.0');
eq(DifficultySystem.getInstance().startCurseCount(), 2, '天堂开局灾厄 2 件');

const def = dataManager.monsters.monsters[0];
const hpNormal = StatCalculator.getInstance().monsterStats(def, 10, false, 1).hp;
gameState.setDifficulty(2);
const hpN = StatCalculator.getInstance().monsterStats(def, 10, false, 1).hp;
gameState.setDifficulty(7);
const hpH = StatCalculator.getInstance().monsterStats(def, 10, false, 1).hp;
ok(hpH > hpN, `天堂难度怪物更强（${hpH} > ${hpN}）`);
void hpNormal;

// ---- 开局遗物（难度专属；两条开局入口共用 GameController.startNewRun）----
gameState.setDifficulty(1);
eq(DifficultySystem.getInstance().startRelics().join(','), 'R065', '摇篮曲开局遗物=摇篮');
gameState.setDifficulty(7);
eq(DifficultySystem.getInstance().startRelics().join(','), 'X009', '天堂开局遗物=命定之死');
gameState.setDifficulty(2);
eq(DifficultySystem.getInstance().startRelics().length, 0, '普通难度无开局遗物');

// ---- 开局灾厄 ----
gameState.setDifficulty(7);
rm.resetRun();
player.state.relics = [];
const curses = rm.grantStartCurses(2);
eq(curses.length, 2, '开局灾厄抽取 2 件');
ok(curses.every(c => c.rarity === -1 && c.subtype === 'start'), '开局灾厄均为 A 类');
ok(!curses.some(c => c.exclusive), '专属剧情遗物不参与随机开局灾厄');

// ---- 天堂遗物（稀有度 4）与击杀叠攻 ----
const heaven = rm.all.filter(d => d.rarity === 4);
eq(heaven.length, 2, `天堂遗物 2 件（实际 ${heaven.length}）`);
ok(heaven.every(d => !!rm.iconOf(d) && !!d.desc), '天堂遗物均有图标与描述');
rm.add('H001', { silent: true });
const atkBeforeKill = player.stats().attack;
for (let i = 0; i < 10; i++) rm.onKill();
ok(player.stats().attack > atkBeforeKill, `荡魔义旗：击杀叠攻生效（${atkBeforeKill} → ${player.stats().attack}）`);
eq(rm.killAttackPct, 20, '荡魔义旗累计攻击 +20%');
rm.resetRun();
eq(rm.killAttackPct, 0, 'resetRun 清零击杀累积');

// ---- 掉落掷骰不抛错 ----
player.state.relics = [];
rm.rollDrop('chest');
rm.rollDrop('boss');
rm.rollDrop('elite');

// ---- 获取遗物抉择（offer 不入账）+ 遗物宝箱三选一候选 ----
player.state.relics = [];
let offeredId = '';
eventBus.on('relicOffered', p => { offeredId = p.id; });
eq(rm.offer('R001'), true, 'offer() 返回 true');
eq(offeredId, 'R001', 'offer 广播 relicOffered');
ok(!rm.has('R001'), 'offer 不直接入账（等玩家抉择）');
rm.add('R001', { silent: true });
eq(rm.offer('R001'), false, '已持有的遗物不再 offer');
const cands = rm.randomCandidates(3);
eq(cands.length, 3, `三选一抽出 3 件候选（实际 ${cands.length}）`);
eq(new Set(cands.map(c => c.id)).size, 3, '候选互不重复');
ok(cands.every(c => c.rarity >= 0 && !c.exclusive && !rm.has(c.id)), '候选均为未持有的正向遗物');

// ---- 图标覆盖 ----
ok(rm.all.every(d => !!rm.iconOf(d)), '全部遗物均有图标（映射或类别默认）');
const missingIcons = rm.all.filter(d => !dataManager.relics.icons?.[d.id]).map(d => d.id);
ok(missingIcons.length === 0, `icons 映射覆盖全部遗物（缺：${missingIcons.join(',') || '无'}）`);
console.log(`  · 遗物总数 ${rm.all.length}，图标映射 ${Object.keys(dataManager.relics.icons ?? {}).length} 条`);

// ---- 收尾 ----
gameState.setDifficulty(2);
console.log(`✓ relicTest 通过（${passed} 项断言）`);
