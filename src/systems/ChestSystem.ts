/**
 * 宝箱系统：开启宝箱 → 金币（楼层段位表）+ 装备（概率）+ 药水（小概率）。
 * 大宝箱（Boss奖励房）金币翻倍且必出装备。
 */
import type { Equipment, MapEntity, PotionTier, RoomType } from '../types';
import { Player } from '../entities/Player';
import { WorldManager } from '../core/WorldManager';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { rng } from '../utils/MathUtils';
import { ParticleSystem } from '../effects/ParticleSystem';
import { EquipmentGenerator } from './EquipmentGenerator';

export interface ChestRewards {
  gold: number;
  equipment: boolean;
  /** 开出的装备（含品质，供获得提示展示；无装备时为 null） */
  equip: Equipment | null;
  potion: string | null;
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

  open(entity: MapEntity, roomType: RoomType): ChestRewards {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const cfg = dataManager.config.chestRewards;
    const grand = entity.chestTier === 'grand';
    const floorId = player.state.currentFloor;

    const gold = Math.round(this.goldForFloor(floorId) * (grand ? 2.5 : 1));
    const rewards: ChestRewards = { gold, equipment: false, equip: null, potion: null };

    if (cfg.goldAlways && gold > 0) player.gainGold(gold);
    if (grand || rng.chance(cfg.equipmentChance)) {
      const equip = EquipmentGenerator.getInstance().generate(grand ? 'boss' : 'chest', { floorId });
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
