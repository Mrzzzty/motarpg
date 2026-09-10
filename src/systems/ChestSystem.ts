/**
 * 宝箱系统：开启宝箱 → 金币（楼层段位表）+ 装备（概率）+ 药水（小概率）。
 * 大宝箱（Boss奖励房）金币翻倍且必出装备。
 */
import type { Equipment, MapEntity, PotionTier, Quality, RelicDef, RoomType } from '../types';
import { Player } from '../entities/Player';
import { WorldManager } from '../core/WorldManager';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { rng } from '../utils/MathUtils';
import { StatCalculator } from '../utils/StatCalculator';
import { ParticleSystem } from '../effects/ParticleSystem';
import { EquipmentGenerator } from './EquipmentGenerator';
import { RelicManager } from './RelicManager';

export interface ChestRewards {
  gold: number;
  equipment: boolean;
  /** 开出的装备（含品质，供获得提示展示；无装备时为 null） */
  equip: Equipment | null;
  potion: string | null;
  /** 开出的遗物（无则 null） */
  relic: RelicDef | null;
}

export class ChestSystem {
  private static instance: ChestSystem;
  private constructor() {}
  static getInstance(): ChestSystem {
    if (!ChestSystem.instance) ChestSystem.instance = new ChestSystem();
    return ChestSystem.instance;
  }

  /** 楼层段位金币 */
  goldForFloor(floorId: number): number {
    const bands = dataManager.config.chestRewards.goldBands;
    const band = bands.find(b => floorId >= b.minFloor && floorId <= b.maxFloor) ?? bands[bands.length - 1];
    return rng.randInt(band.min, band.max);
  }

  /** 开箱：金币按楼层段位 × 房间深度倍率；装备品质下限随深度提升（P0-1）。depth 缺省 1 = 原行为 */
  open(entity: MapEntity, roomType: RoomType, depth = 1): ChestRewards {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const cfg = dataManager.config.chestRewards;
    const grand = entity.chestTier === 'grand';
    const floorId = player.state.currentFloor;

    // 遗物宝箱（区段末奖励）：不出金币/装备/药水，改为「三选一」交由 UI 抉择
    if (entity.chestTier === 'relic') {
      world.markOpened(entity.id);
      ParticleSystem.getInstance().sparkle(entity.x, entity.y, '#d9a6ff', 14);
      eventBus.emit('relicChoiceRequested', { entityId: entity.id, floor: floorId, count: 3 });
      eventBus.emit('chestOpened', { entityId: entity.id, roomType });
      return { gold: 0, equipment: false, equip: null, potion: null, relic: null };
    }

    // 风险收益（路线权衡的兑现端）：高风险房的宝箱带 rewardMul / riskTier（ContentFiller 按房间风险写入）
    const riskMul = Math.max(1, entity.rewardMul ?? 1);
    const riskTier = Math.max(1, entity.riskTier ?? 1);
    const depthMul = StatCalculator.getInstance().depthMultiplier(floorId, depth);
    const gold = Math.round(this.goldForFloor(floorId) * depthMul * (grand ? 2.5 : 1) * riskMul);
    const rewards: ChestRewards = { gold, equipment: false, equip: null, potion: null, relic: null };

    if (cfg.goldAlways && gold > 0) player.gainGold(gold);
    // 装备：风险越高，出装备概率与「深度品质下限」同步提升（风险房才配得上绕路）
    const effDepth = depth + (riskTier - 1);
    if (grand || rng.chance(Math.min(1, cfg.equipmentChance * riskMul))) {
      const source = grand ? 'boss' : 'chest';
      let equip = EquipmentGenerator.getInstance().generate(source, { floorId, depth: effDepth });
      // 遗物「鉴赏家之眼 / 乞者之囊」调整开出装备品质
      const shift = RelicManager.getInstance().value('chestQualityUp');
      if (shift !== 0) {
        const order = dataManager.equipment.qualityOrder as Quality[];
        const idx = Math.max(0, Math.min(order.length - 1, order.indexOf(equip.quality) + shift));
        equip = EquipmentGenerator.getInstance().generate(source, { floorId, depth: effDepth, forcedQuality: order[idx] });
      }
      player.addEquipment(equip);
      rewards.equipment = true;
      rewards.equip = equip;
    }
    if (rng.chance(cfg.potionChance)) {
      const tier = this.potionTierForFloor(floorId);
      if (tier) {
        player.addPotion(tier, 1);
        rewards.potion = tier;
      }
    }
    // 遗物掉落（各稀有度独立判定，见 relics.json dropChances）；风险房掉率倍率更高
    const relicMul = dataManager.mapGen.content.risk.relicMul[riskTier - 1] ?? 1;
    rewards.relic = RelicManager.getInstance().rollDrop('chest', relicMul);

    world.markOpened(entity.id);
    const pt = { x: entity.x, y: entity.y };
    void pt;
    ParticleSystem.getInstance().sparkle(entity.x, entity.y, '#ffdd44', 10);
    eventBus.emit('chestOpened', { entityId: entity.id, roomType });
    return rewards;
  }

  /** 楼层对应品质药水（当前楼层可用的最高档） */
  potionTierForFloor(floorId: number): PotionTier | null {
    const list = dataManager.potions.potions
      .filter(p => floorId >= p.minFloor && floorId <= p.maxFloor)
      .sort((a, b) => b.healPct - a.healPct);
    return list[0]?.tier ?? null;
  }

  /** 比当前楼层最高档低 steps 档的药水（怪物掉落用） */
  potionTierLower(floorId: number, steps: number): PotionTier | null {
    const list = dataManager.potions.potions
      .filter(p => floorId >= p.minFloor && floorId <= p.maxFloor)
      .sort((a, b) => b.healPct - a.healPct);
    const idx = Math.min(steps, list.length - 1);
    return list[idx]?.tier ?? null;
  }
}
