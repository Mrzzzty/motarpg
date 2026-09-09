/**
 * 预制地图无头测试：验证字符解析、实体归属、连通性（相邻但不连通的房间不被误连）。
 * 运行：node scripts/run-headless.mjs src/test/prefabTest.ts
 */
import { dataManager } from '../core/DataManager';
import { buildPrefabFloor, type PrefabMapDef } from '../map/PrefabMap';
import { MapGenerator } from '../map/MapGenerator';

declare const process: { exit(code?: number): void };

// 布局：r0(起点) —走廊— r1(战斗) —走廊— r2(商人)
//                    r1 与 r3(宝箱) 相邻（共享一堵墙）但墙上无门 → 不连通
const def: PrefabMapDef = {
  floorId: 1,
  kind: 'normal',
  rooms: [
    { x: 1, y: 1, w: 5, h: 5, type: 'start', name: '起点' },
    { x: 10, y: 1, w: 5, h: 5, type: 'combat', name: '战斗房' },
    { x: 19, y: 1, w: 5, h: 5, type: 'merchant', name: '商店' },
    { x: 10, y: 8, w: 5, h: 4, type: 'chest', name: '宝物间' },
  ],
  rows: [
    '1111111111111111111111111',
    '1     1111     1111     1',
    '1     1111  2  1111  5  1',
    '1  S                    1',
    '1     1111     1111     1',
    '1111111111111111111111111',
    '1111111111111111111111111',
    '1111111111111111111111111',
    '1111111111  4  1111111111',
    '1111111111     1111111111',
    '1111111111     1111111111',
    '1111111111111111111111111',
  ],
};

dataManager.loadAll();
const floor = buildPrefabFloor(def);

let failed = 0;
const check = (name: string, ok: boolean, detail = ''): void => {
  console.log(`${ok ? '✔' : '✘'} ${name}${ok ? '' : ` —— ${detail}`}`);
  if (!ok) failed++;
};

const ids = (t: string) => floor.rooms.filter(r => r.type === t).map(r => r.id);

check('网格尺寸 25×12', floor.width === 25 && floor.height === 12);
check('4个房间', floor.rooms.length === 4);
check('入口在起点房(S)', floor.grid[floor.entryY][floor.entryX] === 0);
check('r0—r1 连通', floor.connections.some(c => c.from === ids('start')[0] && c.to === ids('combat')[0]));
check('r1—r2 连通', floor.connections.some(c => c.from === ids('combat')[0] && c.to === ids('merchant')[0]));
check(
  'r1 与 r3 相邻但不连通（无通道不误连）',
  !floor.connections.some(c =>
    (c.from === ids('combat')[0] && c.to === ids('chest')[0]) ||
    (c.from === ids('chest')[0] && c.to === ids('combat')[0])),
);
const monsterCount = floor.rooms.flatMap(r => r.entities).filter(e => e.kind === 'monster' && !e.isElite).length;
check('敌人已放置（monster=1）', monsterCount === 1, `实际 ${monsterCount}`);
const chest = floor.rooms.flatMap(r => r.entities).find(e => e.kind === 'chest');
check('宝箱归属宝物间', !!chest && chest.x === 12 && chest.y === 8);
const merchant = floor.rooms.flatMap(r => r.entities).find(e => e.kind === 'npc');
check('商人在商店房', !!merchant && merchant.x === 21 && merchant.y === 2);

console.log('\n' + MapGenerator.getInstance().describe(floor));
if (failed > 0) {
  console.error(`\n${failed} 项失败`);
  process.exit(1);
}
console.log('\n全部通过');
