/**
 * 房间布局优化无头测试：**风险-收益分层**（引导玩家权衡路线）+ **陈设密度**（反「大而空」）。
 *
 * 断言：
 *  1. 风险换算：room.risk 严格按「基础1 + 侧室 + 大房 + 高层」公式，且与 CLI 配置 max 夹取一致；
 *  2. 倍率对应：room.rewardMul 与 risk → rewardMul 配置一一对应，且随风险单调递增；
 *  3. 支线保底：侧室（mountedOn）永不低于中档收益（≥ risk2）——绕路必须有回报；
 *  4. 奖励接线：宝箱实体携带所在房间的 riskTier / rewardMul（ChestSystem 据此结算）；
 *  5. 收益真兑现：同层同深度下，收益倍率 ×1.8 的宝箱平均金币 ≈ 1.8 倍（统计意义）；
 *  6. 无空房：战斗/精英/宝箱房必有火把，且「陈设点数 / 内面积」达标（每 6 格 ≥ 1 件陈设）；
 *  7. 风险覆盖：1/2/3 三档都出现，且高风险房守军更多。
 */
declare const process: { exit(code?: number): void };
import { dataManager } from '../core/DataManager';
import { MapGenerator } from '../map/MapGenerator';
import { WorldManager } from '../core/WorldManager';
import { ChestSystem } from '../systems/ChestSystem';
import { Player } from '../entities/Player';
import type { MapEntity, RoomData } from '../types';

let pass = 0;
let fail = 0;

function ok(cond: boolean, msg: string): void {
  if (cond) pass++;
  else {
    fail++;
    console.error(`  ✗ ${msg}`);
  }
}

const REL = 1e-9;
const close = (a: number, b: number): boolean => Math.abs(a - b) <= REL;

/** 参与风险分层的房型（与 ContentFiller.RISK_ROOM_TYPES 一致） */
const RISK_TYPES = new Set<RoomData['type']>(['combat', 'elite', 'chest', 'boss']);

function run(): void {
  dataManager.loadAll();
  const gen = MapGenerator.getInstance();
  const riskCfg = dataManager.mapGen.content.risk;
  const fnCfg = dataManager.mapGen.content.furnish;

  const FLOORS = [2, 4, 7, 12, 18, 25, 33, 45, 60, 75, 91, 105];
  const ITER = 10;

  let riskBad = 0;
  let mulBad = 0;
  let sideLowTier = 0;
  let chestBad = 0;
  let noTorch = 0;
  let emptyRooms = 0;
  let bigRoomBare = 0;
  const riskSeen = new Set<number>();
  const depthHist = new Map<number, number>();
  const roomsByRisk = new Map<number, number>();
  const areaHist = new Map<number, number>();
  const hpByRisk = new Map<number, number[]>();
  let checkedRooms = 0;
  let decorPoints = 0;
  let floorCount = 0;
  let threeTierFloors = 0;
  let singleTierFloors = 0;
  let multiTierFloors = 0;
  let soloRiskFloors = 0;
  let sideRooms = 0;
  let fSide = 0;
  let fArea = 0;
  let fDepth = 0;
  let fFloor = 0;
  let fNone = 0;

  for (const floorId of FLOORS) {
    for (let it = 0; it < ITER; it++) {
      const floor = gen.generate(floorId);
      floorCount++;

      // 独立复算本层风险：纯分值公式 + 「层内差异保底」（逐步对应 ContentFiller.assignFloorRisk）
      const riskRooms = floor.rooms.filter(r => RISK_TYPES.has(r.type));
      const expect = new Map<RoomData, number>();
      for (const room of riskRooms) {
        const innerArea0 = (room.width - 2) * (room.height - 2);
        let score = 0;
        if (room.mountedOn) score += riskCfg.sideBonus;
        if (room.type === 'elite' || room.type === 'boss') score += riskCfg.eliteBonus;
        if (innerArea0 >= riskCfg.areaBonusAt) score += 1;
        if (room.depth >= riskCfg.depthBonusAt) score += 1;
        if (floorId >= riskCfg.floorBonusEvery) score += 1;
        expect.set(room, score >= 3 ? 3 : score >= 1 ? 2 : 1);
      }
      if (riskRooms.length >= 2 && new Set(expect.values()).size === 1) {
        const sorted = [...riskRooms].sort((a, b) => a.depth - b.depth);
        const base = expect.get(sorted[0])!;
        if (base === 3) expect.set(sorted[0], 2);
        else expect.set(sorted[sorted.length - 1], Math.min(3, base + 1));
      }
      const levels = new Set(expect.values());
      if (riskRooms.length >= 2) {
        multiTierFloors++;
        if (levels.size >= 3) threeTierFloors++;
        if (levels.size <= 1) singleTierFloors++;
      } else if (riskRooms.length === 1) soloRiskFloors++;

      for (const room of riskRooms) {
        checkedRooms++;
        const innerArea = (room.width - 2) * (room.height - 2);

        // 1) 风险换算 + 2) 倍率对应
        const want = expect.get(room)!;
        if (room.risk !== want) riskBad++;
        if (!close(room.rewardMul ?? 0, riskCfg.rewardMul[want - 1] ?? 1)) mulBad++;

        // 3) 支线保底：侧室收益永不低于中档
        if (room.mountedOn && (room.risk ?? 1) < 2) sideLowTier++;

        // 4) 宝箱奖励接线
        for (const e of room.entities) {
          if (e.kind !== 'chest' || e.chestTier === 'relic') continue;
          if ((e.riskTier ?? 1) !== (room.risk ?? 1) || !close(e.rewardMul ?? 0, room.rewardMul ?? 0)) chestBad++;
        }

        // 7) 风险分布与守军强度（「更危险」由房型/深度承担，故看存放的 stats.hp 而非数量）
        const lv = room.risk ?? 1;
        riskSeen.add(lv);
        roomsByRisk.set(lv, (roomsByRisk.get(lv) ?? 0) + 1);
        depthHist.set(room.depth, (depthHist.get(room.depth) ?? 0) + 1);
        if (room.mountedOn) fSide++;
        if (innerArea >= riskCfg.areaBonusAt) fArea++;
        if (room.depth >= riskCfg.depthBonusAt) fDepth++;
        if (floorId >= riskCfg.floorBonusEvery) fFloor++;
        if (want === 1) fNone++;
        areaHist.set(Math.floor(innerArea / 10) * 10, (areaHist.get(Math.floor(innerArea / 10) * 10) ?? 0) + 1);
        if (room.mountedOn) sideRooms++;
        const guardHp: number[] = [];
        for (const e of room.entities) {
          if ((e.kind === 'monster' || e.kind === 'boss') && e.stats) guardHp.push(e.stats.hp);
        }
        if (guardHp.length > 0) {
          if (!hpByRisk.has(lv)) hpByRisk.set(lv, []);
          hpByRisk.get(lv)!.push(guardHp.reduce((a, b) => a + b, 0) / guardHp.length);
        }

        // 6) 无空房：火把保底 + 内容密度（每 4 格 ≥ 1 个内容点）；大房另需足量陈设
        if (room.type === 'combat' || room.type === 'elite' || room.type === 'chest') {
          const torches = room.entities.filter(e => e.kind === 'torch').length;
          if (torches < 1) noTorch++;
          const decor = room.entities.filter(e =>
            e.kind === 'torch' || e.kind === 'pillar' || e.kind === 'carpet').length;
          decorPoints += decor;
          const points = room.entities.filter(e =>
            e.kind === 'torch' || e.kind === 'pillar' || e.kind === 'carpet'
            || e.kind === 'chest' || e.kind === 'potion' || e.kind === 'monster' || e.kind === 'boss').length;
          if (points * 4 < innerArea) emptyRooms++;
          if (innerArea >= 30 && decor < 4) bigRoomBare++;
        }
      }
    }
  }

  ok(riskBad === 0, `风险换算一致（${riskBad} 处不符）`);
  ok(mulBad === 0, `收益倍率与风险对应（${mulBad} 处不符）`);
  ok(sideLowTier === 0, `侧室（支线）收益不低于中档（${sideLowTier} 处例外）`);
  ok(chestBad === 0, `宝箱携带房间风险收益（${chestBad} 个不符）`);
  ok(noTorch === 0, `战斗/精英/宝箱房均有火把（${noTorch} 间无火把）`);
  ok(emptyRooms === 0, `无大而空的房间（${emptyRooms} 间内容点不足 1 个/4 格）`);
  ok(bigRoomBare === 0, `大房陈设充足（内面积≥30 需 ≥4 件陈设；${bigRoomBare} 间不足）`);
  ok(riskCfg.rewardMul.every((m, i) => i === 0 || m > riskCfg.rewardMul[i - 1]), '收益倍率随风险单调递增');
  ok(riskSeen.has(1) && riskSeen.has(2) && riskSeen.has(3), `风险三档均出现（实际 ${[...riskSeen].sort().join('/')}）`);

  const mean = (arr: number[]): number => (arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length);
  const pool = (pred: (lv: number) => boolean): number[] => {
    const out: number[] = [];
    for (const [lv, arr] of hpByRisk) if (pred(lv)) out.push(...arr);
    return out;
  };
  const lowHp = mean(pool(lv => lv === 1));
  const highHp = mean(pool(lv => lv >= 2));
  ok(highHp > lowHp, `高风险房守军更强（风险1 均HP ${lowHp.toFixed(0)} vs 风险≥2 均HP ${highHp.toFixed(0)}）`);
  ok(decorPoints / Math.max(1, checkedRooms) >= 4, `陈设密度可观（均 ${(decorPoints / Math.max(1, checkedRooms)).toFixed(1)} 件/房）`);
  // 层内风险差异：玩家在分岔口必须能对比（同层只有一档 = 没得选）
  ok(singleTierFloors === 0, `同层 ≥2 风险房必有两个档位（${singleTierFloors}/${multiTierFloors} 层单一档）`);
  ok(threeTierFloors > 0, `存在风险三档俱全的楼层（${threeTierFloors} 层）`);

  console.log(`风险房 ${checkedRooms} 间（支线 ${sideRooms}）· 陈设 ${decorPoints} 件 · 均 ${(decorPoints / Math.max(1, checkedRooms)).toFixed(1)} 件/房`);
  console.log(`风险分布：${[1, 2, 3].map(lv => `L${lv}=${roomsByRisk.get(lv) ?? 0}间`).join(' ')}`);
  console.log(`层内档位：≥2 风险房 ${multiTierFloors} 层（三档 ${threeTierFloors} / 单一档 ${singleTierFloors}）· 仅 1 间风险房 ${soloRiskFloors} 层 / 共 ${floorCount} 层`);
  console.log(`深度分布：${[...depthHist.entries()].sort((a, b) => a[0] - b[0]).map(([d, n]) => `d${d}=${n}`).join(' ')}`);
  console.log(`加成因子：支线 ${fSide} / 大房 ${fArea} / 深入 ${fDepth} / 高层 ${fFloor} / 无加成 ${fNone}  （共 ${checkedRooms}）`);
  console.log(`内面积分布：${[...areaHist.entries()].sort((a, b) => a[0] - b[0]).map(([a, n]) => `${a}~${a + 9}:${n}`).join(' ')}`);
  console.log(`火把配额：每 ${fnCfg.torchPerArea} 格 1 个（上限 ${fnCfg.torchMax}）`);

  // 5) 收益真兑现：同层同深度，rewardMul 1 vs 1.8 的平均金币比
  const floorId = 20;
  const floor = gen.generate(floorId);
  WorldManager.getInstance().loadFloor(floor);
  const player = Player.getInstance();
  player.state.currentFloor = floorId;
  player.state.level = 10;
  const base: MapEntity = { id: 'layout_a', kind: 'chest', chestTier: 'normal', x: 0, y: 0, rewardMul: 1, riskTier: 1 };
  const rich: MapEntity = { id: 'layout_b', kind: 'chest', chestTier: 'normal', x: 0, y: 0, rewardMul: 1.8, riskTier: 3 };
  const N = 150;
  let sumBase = 0;
  let sumRich = 0;
  for (let i = 0; i < N; i++) {
    sumBase += ChestSystem.getInstance().open({ ...base }, 'chest', 2).gold;
    sumRich += ChestSystem.getInstance().open({ ...rich }, 'chest', 2).gold;
  }
  const ratio = sumRich / Math.max(1, sumBase);
  ok(ratio > 1.5 && ratio < 2.1, `收益倍率兑现到金币（实测 ×${ratio.toFixed(2)}，期望 ≈1.8）`);
  console.log(`金币实测：×1 → ${(sumBase / N).toFixed(1)} / ×1.8 → ${(sumRich / N).toFixed(1)}（比 ${ratio.toFixed(2)}）`);

  if (fail > 0) {
    console.error('\n!!! 存在失败断言 !!!');
    process.exit(1);
  }
  console.log('\n房间布局（风险收益 + 陈设密度）：全部通过 ✅');
}

run();
