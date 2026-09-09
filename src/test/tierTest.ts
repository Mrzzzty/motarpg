/**
 * 区段主题 + 塔顶封顶 + 托管/微操战斗 无头测试（文案规格 v1）。
 * 覆盖：
 * 1. 楼层 → 区段映射边界与区段起点集合（1/16/41/61/81/101）。
 * 2. 第 110 层 = 塔顶：kind=summit、有终局之门、无怪无楼梯无杂物；第 109 层楼梯指向 110。
 * 3. 全区段样例楼层可正常生成（青砖/苔园/书海/观星/钟楼/塔顶）。
 * 4. 托管 battle() 与微操 stepManual() 均能正常结算且数值同源（胜负一致、事件齐全）。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { MapGenerator } from '../map/MapGenerator';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import { BattleSystem } from '../systems/BattleSystem';
import { eventBus } from '../core/EventBus';
import { tierOfFloor, isTierStartFloor, TIERS, MAX_FLOOR } from '../data/tiers';
import type { FloorMap, MapEntity, PlayerState } from '../types';

let failures = 0;
function check(name: string, ok: boolean, detail = ''): void {
  if (!ok) {
    failures++;
    console.error(`  ✗ ${name}${detail ? `：${detail}` : ''}`);
  } else {
    console.log(`  ✓ ${name}`);
  }
}

function strongPlayerState(floor: number): PlayerState {
  const p = Player.getInstance().state;
  return {
    ...p,
    level: 40,
    hp: 100000,
    baseMaxHp: 100000,
    baseAttack: 3000,
    baseDefense: 800,
    x: 1,
    y: 1,
    currentFloor: floor,
    currentRoomId: '',
    potions: { ...p.potions, crude: 5 },
  };
}

// ============ 1. 区段映射 ============
console.log('=== 区段主题映射 ===');
const expectTier: [number, string][] = [
  [1, 'base'], [15, 'base'], [16, 'garden'], [40, 'garden'], [41, 'library'], [60, 'library'],
  [61, 'observatory'], [80, 'observatory'], [81, 'clock'], [100, 'clock'],
  [101, 'summit'], [MAX_FLOOR, 'summit'], [MAX_FLOOR + 9, 'summit'],
];
for (const [floor, id] of expectTier) {
  check(`第${floor}层 → ${id}`, tierOfFloor(floor).id === id, `实际 ${tierOfFloor(floor).id}`);
}
const startFloors = TIERS.map(t => t.fromFloor);
check(`区段起点集合 = [1,16,41,61,81,101]`, startFloors.join(',') === '1,16,41,61,81,101', startFloors.join(','));
check('isTierStartFloor(16)=true / (17)=false', isTierStartFloor(16) && !isTierStartFloor(17));
check('塔顶区段覆盖 101–110', MAX_FLOOR === 110 && TIERS[TIERS.length - 1].toFloor === 110);

// ============ 2. 塔顶层 ============
console.log('=== 塔顶封顶（第110层） ===');
const summitFloor = MapGenerator.getInstance().generate(MAX_FLOOR);
check('110层 kind = summit', summitFloor.kind === 'summit', summitFloor.kind);
const allEntities: MapEntity[] = summitFloor.rooms.flatMap(r => r.entities);
const gates = allEntities.filter(e => e.kind === 'gate');
check('110层存在终局之门', gates.length === 1, `实际 ${gates.length}`);
check('110层无怪物/Boss', allEntities.every(e => e.kind !== 'monster' && e.kind !== 'boss'));
check('110层无楼梯（门取代向上通道）', allEntities.every(e => e.kind !== 'stair'));
check('110层无宝箱/药水（空旷无杂物）', allEntities.every(e => e.kind !== 'chest' && e.kind !== 'potion'));
const endRoom = summitFloor.rooms.find(r => r.type === 'end')!;
check('塔顶平台为大房间（≥11×9）', endRoom.width >= 11 && endRoom.height >= 9, `${endRoom.width}x${endRoom.height}`);

const floor109 = MapGenerator.getInstance().generate(MAX_FLOOR - 1);
const stair109 = floor109.rooms.flatMap(r => r.entities).find(e => e.kind === 'stair');
check('109层楼梯指向110', stair109?.targetFloor === MAX_FLOOR, String(stair109?.targetFloor));
check('109层非塔顶层', floor109.kind !== 'summit', floor109.kind);

// ============ 3. 各区段样例楼层生成 ============
console.log('=== 各区段样例楼层生成 ===');
for (const f of [1, 2, 15, 16, 40, 41, 60, 61, 80, 81, 100, 101, 109]) {
  try {
    const floor: FloorMap = f === MAX_FLOOR ? summitFloor : MapGenerator.getInstance().generate(f);
    check(`第${f}层生成（${tierOfFloor(f).id}）`, floor.rooms.length >= 2 && floor.grid.length > 0);
  } catch (err) {
    check(`第${f}层生成`, false, String(err));
  }
}

// ============ 4. 托管/微操战斗同源 ============
console.log('=== 托管/微操战斗 ===');
dataManager.loadAll();
const battleFloor = MapGenerator.getInstance().generate(3);
WorldManager.getInstance().loadFloor(battleFloor);
const monsterEntity = battleFloor.rooms.flatMap(r => r.entities).find(e => e.kind === 'monster')!;

// 托管
Player.getInstance().restore(strongPlayerState(3));
let autoEnded: unknown = null;
eventBus.on('battleEnded', p => { autoEnded = p; });
const autoResult = BattleSystem.getInstance().battle(monsterEntity);
check('托管：自动结算胜利', autoResult.win === true);
check('托管：battleEnded 事件 manual=false', (autoEnded as { manual?: boolean } | null)?.manual === false);

// 微操（同一只怪重生一只新的：重新生成楼层拿新实体）
const manualFloor = MapGenerator.getInstance().generate(3);
WorldManager.getInstance().loadFloor(manualFloor);
const manualEntity = manualFloor.rooms.flatMap(r => r.entities).find(e => e.kind === 'monster')!;
Player.getInstance().restore(strongPlayerState(3));
let manualEnded: unknown = null;
eventBus.on('battleEnded', p => { manualEnded = p; });
const session = BattleSystem.getInstance().beginManual(manualEntity);
let guard = 0;
while (!session.finished && guard < 200) {
  session.stepManual({ type: 'attack' });
  guard++;
}
check('微操：逐回合攻击可打完', session.finished && session.result !== null);
check('微操：胜利结果与托管一致', session.result?.win === true);
check('微操：battleEnded 事件 manual=true', (manualEnded as { manual?: boolean } | null)?.manual === true);
check('微操：获得经验与金币', (session.result?.expGained ?? 0) > 0 && (session.result?.goldGained ?? 0) > 0);

// 微操撤退
const fleeFloor = MapGenerator.getInstance().generate(3);
WorldManager.getInstance().loadFloor(fleeFloor);
const fleeEntity = fleeFloor.rooms.flatMap(r => r.entities).find(e => e.kind === 'monster')!;
Player.getInstance().restore(strongPlayerState(3));
const fleeSession = BattleSystem.getInstance().beginManual(fleeEntity);
fleeSession.stepManual({ type: 'flee' });
check('微操：撤退即结束且不计胜', fleeSession.finished && fleeSession.result?.win === false);

// 微操多回合（回归：此前每回合误结算导致一回合即"胶着撤退"）
const multiFloor = MapGenerator.getInstance().generate(4);
WorldManager.getInstance().loadFloor(multiFloor);
const multiEntity = multiFloor.rooms.flatMap(r => r.entities).find(e => e.kind === 'monster')!;
Player.getInstance().restore({ ...strongPlayerState(4), baseAttack: 60, baseDefense: 500, hp: 9000, baseMaxHp: 9000 });
const multiSession = BattleSystem.getInstance().beginManual(multiEntity);
multiSession.stepManual({ type: 'attack' });
check('微操：一回合后不提前结算', !multiSession.finished, `finished=${multiSession.finished}`);
let multiTurns = 1;
while (!multiSession.finished && multiTurns < 90) {
  multiSession.stepManual({ type: 'attack' });
  multiTurns++;
}
check('微操：多回合打完并获胜', multiSession.finished && multiSession.result?.win === true && multiTurns > 2, `turns=${multiTurns}`);

// 30% 阈值同源：hpBelowAutoPotionThreshold 与 0.3 硬编码一致
Player.getInstance().restore({ ...strongPlayerState(3), hp: 29999 });
const s2 = BattleSystem.getInstance().beginManual(
  fleeFloor.rooms.flatMap(r => r.entities).find(e => e.kind === 'monster')!);
check('30%阈值判定（hp 29.999% → true）', s2.hpBelowAutoPotionThreshold() === true);
Player.getInstance().restore({ ...strongPlayerState(3), hp: 30001 });
check('30%阈值判定（hp 30.001% → false）', s2.hpBelowAutoPotionThreshold() === false);

// ============ 结果 ============
console.log(failures === 0 ? '\n区段/塔顶/战斗 全部通过 ✔' : `\n!!! ${failures} 项失败 !!!`);
if (failures > 0) process.exit(1);
