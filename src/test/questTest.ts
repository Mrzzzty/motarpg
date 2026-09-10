/**
 * 任务系统无头测试：自动接取链、并行任务、精确匹配、多目标任务、楼层目标、位置引导结构。
 * 运行：node scripts/run-headless.mjs src/test/questTest.ts
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { QuestManager } from '../systems/QuestManager';

let passed = 0;
function ok(cond: boolean, msg: string): void {
  if (cond) { passed++; } else { console.error('✗ ' + msg); process.exit(1); }
}

dataManager.loadAll();
const qm = QuestManager.getInstance();
const state = (id: string) => qm.all().find(x => x.def.id === id)!.state;

// ---- 初始 ----
ok(state('quest_talk_guide').isAccepted, '初始接取「初来乍到」');
ok(qm.activeQuests().length === 1, `初始仅 1 条进行中任务（实际 ${qm.activeQuests().length}）`);

// ---- 对话引导者 → 完成，并行任务自动接取 ----
eventBus.emit('npcTalked', { npcId: 'npc_guide', name: '引导者·艾登' });
ok(state('quest_talk_guide').isCompleted, '对话后「初来乍到」完成');
ok(state('quest_first_blood').isAccepted && state('quest_first_chest').isAccepted && state('quest_use_potion').isAccepted,
  '并行任务（初试锋芒/开箱有喜/药到病除）自动接取');
ok(qm.activeQuests().length === 3, `进行中 3 条（实际 ${qm.activeQuests().length}）`);

// ---- 精确匹配：击杀非目标怪不应推进 ----
eventBus.emit('monsterDefeated', { entityId: 'e1', name: '蝙蝠', monsterId: 'bat', isElite: false, isBoss: false });
ok(state('quest_first_blood').progress === 0, '击杀非目标怪（蝙蝠）不推进「初试锋芒」');

eventBus.emit('monsterDefeated', { entityId: 'e2', name: '史莱姆', monsterId: 'slime', isElite: false, isBoss: false });
ok(state('quest_first_blood').isCompleted, '击杀史莱姆完成「初试锋芒」');
ok(state('quest_descend').isAccepted, '「更下一层」自动接取');

// ---- 开箱 → 接取披挂上阵 ----
eventBus.emit('chestOpened', { entityId: 'c1', roomType: 'chest' });
ok(state('quest_first_chest').isCompleted, '开箱完成「开箱有喜」');
ok(state('quest_first_equip').isAccepted, '「披挂上阵」自动接取');

// ---- 穿戴计数：卸下（equipmentId 空）不推进 ----
eventBus.emit('equipmentEquipped', { slot: 'weapon', equipmentId: '', oldId: 'x' });
ok(state('quest_first_equip').progress === 0, '卸下装备不推进穿戴任务');
eventBus.emit('equipmentEquipped', { slot: 'weapon', equipmentId: 'eq1', oldId: null });
ok(state('quest_first_equip').isCompleted, '穿戴完成「披挂上阵」');

// ---- 用药 ----
eventBus.emit('potionUsed', { tier: 'crude', healed: 10 });
ok(state('quest_use_potion').isCompleted, '使用药水完成「药到病除」');

// ---- 楼层目标 ----
eventBus.emit('floorChanged', { fromFloor: 1, toFloor: 2 });
ok(state('quest_descend').isCompleted, '到达第 2 层完成「更下一层」');
ok(state('quest_deeper').isAccepted, '「深入塔中」自动接取');

// ---- 多目标任务：先击败 2 名敌人，再到达第 3 层 ----
eventBus.emit('monsterDefeated', { entityId: 'e3', name: '蝙蝠', monsterId: 'bat', isElite: false, isBoss: false });
ok(!state('quest_deeper').isCompleted && state('quest_deeper').progress === 1, '「深入塔中」目标1 进度 1/2');
eventBus.emit('monsterDefeated', { entityId: 'e4', name: '蝙蝠', monsterId: 'bat', isElite: false, isBoss: false });
ok((state('quest_deeper').objectiveIndex ?? 0) === 1, '目标1 达标后推进到目标2');
eventBus.emit('floorChanged', { fromFloor: 2, toFloor: 3 });
ok(state('quest_deeper').isCompleted, '到达第 3 层完成「深入塔中」');

// ---- 位置引导结构 ----
const guide = qm.guideFor(dataManager.quests.quests[0], state('quest_talk_guide'));
ok(typeof guide.objective === 'string' && guide.objective.length > 0, 'guideFor 返回目标文案');
ok(typeof guide.hint === 'string' && guide.hint.length > 0, 'guideFor 返回下一步提示');

console.log(`✓ questTest 通过（${passed} 项断言）`);
