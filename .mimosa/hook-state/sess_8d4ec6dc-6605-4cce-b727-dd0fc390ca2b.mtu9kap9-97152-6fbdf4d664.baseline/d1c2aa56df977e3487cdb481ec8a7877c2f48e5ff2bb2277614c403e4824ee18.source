/**
 * 宝箱系统（规格 模块E）：类型roll、奖励生成、解锁条件。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import type { ChestTierDef, Quality, Room, RoomEntity } from '../types';
import { StatCalculator } from '../utils/StatCalculator';
import { rng } from '../utils/MathUtils';
import { EquipmentGenerator } from './EquipmentGenerator';
import { InventoryManager } from './InventoryManager';
import { CollectibleSystem } from './CollectibleSystem';

export interface ChestRewardSummary {
  gold: number;
  exp: number;
  soul: number;
  potions: number;
  equipmentName: string | null;
  equipmentQuality: Quality | null;
  collectibleName: string | null;
  tierName: string;
}

export class ChestSystem {
  private static instance: ChestSystem;

  private constructor() {}

  static getInstance(): ChestSystem {
    if (!ChestSystem.instance) {
      ChestSystem.instance = new ChestSystem();
    }
    return ChestSystem.instance;
  }

  /** 宝箱类型解析：auto 时按楼层roll（稀有+概率随楼层提升） */
  getChestTier(rewardTier: string, floor: number): ChestTierDef {
    const tiers = dataManager.config.chest;
    if (rewardTier !== 'auto') {
      const fixed = tiers.find(t => t.tier === rewardTier);
      if (fixed) return fixed;
    }
    const upgrade = dataManager.config.chestDrop.rareUpgradePer10Floors;
    const bonus = (floor / 10) * upgrade;
    const adjusted = tiers.map(t => ({
      def: t,
      weight: t.tier === 'wooden' ? t.probability - bonus * 2
        : t.tier === 'iron' ? t.probability - bonus
        : t.tier === 'golden' ? t.probability + bonus
        : t.tier === 'dark_gold' ? t.probability + bonus * 0.8
        : t.probability + bonus * 0.5,
    }));
    return rng.pickWeighted(adjusted, a => Math.max(0.1, a.weight)).def;
  }

  isChestLocked(room: Room, entity: RoomEntity): boolean {
    if (!entity.isLocked) return false;
    const state = WorldManager.getInstance().getEntityState(gameState.mode, room.floorId, room.roomId, entity.id);
    return !state?.state;
  }

  /** 用钥匙开锁 */
  unlockChest(room: Room, entity: RoomEntity): boolean {
    const inv = InventoryManager.getInstance();
    if (inv.hasItem('key', 1)) {
      inv.removeItem('key', 1);
      WorldManager.getInstance().markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { state: 'unlocked' });
      eventBus.emit('notification', { message: '用钥匙打开了宝箱锁', type: 'info', icon: '🗝️' });
      return true;
    }
    eventBus.emit('notification', { message: '宝箱被锁住了，需要一把钥匙。', type: 'warning', icon: '🔒' });
    return false;
  }

  /** 打开宝箱：生成并发放奖励（规格 E.2 奖励生成步骤） */
  openChest(room: Room, entity: RoomEntity): ChestRewardSummary {
    const player = Player.getInstance();
    const floor = room.floorId;
    const depth = room.depth;
    const drop = dataManager.config.chestDrop;
    const diff = dataManager.getDifficulty(player.currentDifficulty);
    const collectibleSys = CollectibleSystem.getInstance();

    // 1. 宝箱类型（幸运币藏品：品质提升一级）
    let tier = this.getChestTier(entity.chestTier ?? 'auto', floor);
    if (player.hasCollectible('collect_chest_up') && tier.tier !== 'legendary') {
      const order: ChestTierDef['tier'][] = ['wooden', 'iron', 'golden', 'dark_gold', 'legendary'];
      const idx = order.indexOf(tier.tier);
      tier = dataManager.config.chest.find(t => t.tier === order[Math.min(order.length - 1, idx + 1)]) ?? tier;
    }

    // 2-3. 金币/经验
    const gold = Math.max(1, Math.floor((floor * drop.goldBase + depth * drop.goldPerFloor + rng.randInt(0, drop.goldRandom)) * tier.goldMultiplier * (diff?.goldMultiplier ?? 1) * (1 + player.getCombatModifiers().goldBonus)));
    const exp = Math.max(1, Math.floor((floor * drop.expBase + depth * drop.expPerFloor + rng.randInt(0, drop.expRandom)) * tier.expMultiplier * (diff?.expMultiplier ?? 1) * (1 + player.getCombatModifiers().expBonus)));

    const summary: ChestRewardSummary = {
      gold, exp, soul: 0, potions: 0,
      equipmentName: null, equipmentQuality: null, collectibleName: null,
      tierName: tier.name,
    };

    // 4. 装备
    const equipChance = Math.min(drop.equipCap, drop.equipBase + floor * drop.equipPerFloor + depth * drop.equipPerDepth);
    const forcedQuality = entity.forcedQuality ?? null;
    if (forcedQuality || rng.chance(equipChance / 100)) {
      const equipGen = EquipmentGenerator.getInstance();
      const templateId = equipGen.pickTemplate(floor);
      const equip = equipGen.generate({
        baseItemId: templateId,
        floor,
        depth,
        qualityFloor: forcedQuality ?? undefined,
        minQuality: tier.minQuality,
        source: 'chest',
      });
      // 宝箱品质额外词条机会
      if (tier.extraAffixes > 0 && equip.affixes.length > 0) {
        const bonusAffix = equip.affixes[0];
        equip.affixes.push({ ...bonusAffix, id: `${bonusAffix.id}b`, value: Math.round(bonusAffix.value * 0.6) });
      }
      InventoryManager.getInstance().addEquipment(equip);
      summary.equipmentName = equip.name;
      summary.equipmentQuality = equip.quality;
    }

    // 5. 药水
    if (rng.chance(drop.potionChance / 100)) {
      const qty = rng.randInt(drop.potionMin, drop.potionMax);
      InventoryManager.getInstance().addItem('health_potion', qty);
      summary.potions = qty;
    }

    // 6. 魂晶
    const soulChance = Math.min(drop.soulCap, drop.soulBase + floor * drop.soulPerFloor);
    if (rng.chance(soulChance / 100)) {
      const qty = rng.randInt(drop.soulMin, drop.soulMax);
      summary.soul = qty;
    }

    // 7. 藏品
    const depthBonus = StatCalculator.depthMultiplier(depth).collectible;
    const colChance = Math.min(drop.collectibleCap, (drop.collectibleBase + floor * drop.collectiblePerFloor + depth * drop.collectiblePerDepth) * tier.collectibleMultiplier * depthBonus * (diff?.collectibleDropRate ?? 1));
    if (rng.chance(colChance / 100)) {
      const collectible = collectibleSys.pickRandomCollectible(collectibleSys.chestDropRarities(tier.tier));
      if (collectible) {
        collectibleSys.addCollectible(collectible.id);
        summary.collectibleName = collectible.name;
      }
    }

    // 发放
    player.gainGold(gold);
    player.addExp(exp);
    if (summary.soul > 0) player.gainSoul(summary.soul);

    // 标记开启
    WorldManager.getInstance().markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { isOpened: true });
    eventBus.emit('chestOpened', { chestId: entity.id, tier: tier.tier, rewards: summary });
    if (tier.tier === 'legendary') {
      eventBus.emit('notification', { message: dataManager.text('legendaryChest'), type: 'success', icon: '🎁' });
    }
    return summary;
  }
}
