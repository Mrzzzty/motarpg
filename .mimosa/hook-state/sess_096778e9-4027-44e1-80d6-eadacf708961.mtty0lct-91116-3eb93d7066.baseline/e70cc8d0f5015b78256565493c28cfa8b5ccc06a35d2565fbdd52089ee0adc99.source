/**
 * 商人系统（规格 模块G）：库存生成（Roll）、金币/魂晶双货币交易、回收价。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import type { MerchantItem } from '../types';
import { SeededRNG } from '../utils/MathUtils';
import { EquipmentGenerator } from './EquipmentGenerator';
import { InventoryManager } from './InventoryManager';
import { CollectibleSystem } from './CollectibleSystem';
import { IdGenerator } from '../utils/IdGenerator';

/** 每个商人实体的库存缓存（entityId → 库存） */
const inventoryCache = new Map<string, MerchantItem[]>();

export class MerchantSystem {
  private static instance: MerchantSystem;

  private constructor() {}

  static getInstance(): MerchantSystem {
    if (!MerchantSystem.instance) {
      MerchantSystem.instance = new MerchantSystem();
    }
    return MerchantSystem.instance;
  }

  /** 生成商人库存（规格 G.1，种子决定可重现） */
  generateInventory(merchantEntityId: string, seed: number, floor: number): MerchantItem[] {
    const cached = inventoryCache.get(merchantEntityId);
    if (cached) return cached;

    const rng = new SeededRNG(seed >>> 0);
    const cfg = dataManager.config.merchant;
    const equipGen = EquipmentGenerator.getInstance();
    const player = Player.getInstance();
    const hasDiscount = player.hasCollectible('collect_discount');
    const priceMul = hasDiscount ? 0.9 : 1;
    const items: MerchantItem[] = [];

    // 固定商品：药水
    const potionPrice = Math.max(1, Math.floor((cfg.potionBase + floor * cfg.potionPerFloor) * priceMul));
    items.push({
      kind: 'potion', id: 'health_potion', name: dataManager.getItem('health_potion')?.name ?? '生命药水',
      icon: '🧪', price: potionPrice, currency: 'gold',
      quantity: cfg.potionQtyBase + (floor % 5), sold: false,
      description: dataManager.getItem('health_potion')?.description ?? '',
    });

    // 固定商品：钥匙
    if (floor > cfg.keyMinFloor) {
      items.push({
        kind: 'key', id: 'key', name: dataManager.getItem('key')?.name ?? '钥匙',
        icon: '🗝️', price: Math.max(1, Math.floor((cfg.keyBase + floor * cfg.keyPerFloor) * priceMul)),
        currency: 'gold', quantity: 1, sold: false,
        description: dataManager.getItem('key')?.description ?? '',
      });
    }

    // 随机装备（生成时暂存于商品条目，购买时才注册进背包）
    const count = Math.min(cfg.maxCount, cfg.baseCount + Math.floor(floor / cfg.perFloorDivisor));
    for (let i = 0; i < count; i++) {
      const templateId = equipGen.pickTemplate(floor);
      const equip = equipGen.generate({
        baseItemId: templateId,
        floor,
        depth: 0,
        source: 'merchant',
      });
      equip.buyPrice = Math.max(1, Math.floor(equip.buyPrice * rng.randFloat(cfg.priceJitterMin, cfg.priceJitterMax)));
      items.push({
        kind: 'equipment', id: equip.id, name: equip.name,
        icon: dataManager.getTemplate(equip.baseItemId)?.icon ?? '🗡️',
        price: Math.max(1, Math.floor(equip.buyPrice * priceMul)),
        currency: 'gold', quantity: 1, equipment: equip, sold: false,
        description: `等级${equip.level}`,
      });
    }

    // 魂晶装备（稀有）
    if (floor > cfg.soulEquipMinFloor && rng.chance(cfg.soulEquipChance)) {
      const templateId = equipGen.pickTemplate(floor + 3);
      const equip = equipGen.generate({
        baseItemId: templateId,
        floor: floor + 3,
        depth: 1,
        minQuality: 'rare',
        source: 'merchant',
      });
      const soulPrice = cfg.soulPriceBase + Math.floor(floor / 10)
        + (equip.quality === 'epic' ? 3 : equip.quality === 'legendary' ? 8 : 0);
      items.push({
        kind: 'soul_equipment', id: equip.id, name: equip.name,
        icon: dataManager.getTemplate(equip.baseItemId)?.icon ?? '🗡️',
        price: soulPrice, currency: 'soul', quantity: 1, equipment: equip, sold: false,
        description: `等级${equip.level}`,
      });
    }

    // 魂晶藏品
    if (floor > cfg.collectibleMinFloor && rng.chance(cfg.collectibleChance)) {
      const col = CollectibleSystem.getInstance().pickRandomCollectible(['common', 'uncommon', 'rare']);
      if (col) {
        items.push({
          kind: 'soul_collectible', id: IdGenerator.next('mcol'), name: col.name,
          icon: col.icon,
          price: cfg.collectibleSoulBase + Math.floor(floor / 15),
          currency: 'soul', quantity: 1, collectibleId: col.id, sold: false,
          description: col.effect.description,
        });
      }
    }

    inventoryCache.set(merchantEntityId, items);
    return items;
  }

  getInventory(merchantEntityId: string): MerchantItem[] {
    return inventoryCache.get(merchantEntityId) ?? [];
  }

  /** 购买 */
  buy(merchantEntityId: string, itemId: string): boolean {
    const items = this.getInventory(merchantEntityId);
    const item = items.find(i => i.id === itemId && !i.sold);
    if (!item) return false;
    const player = Player.getInstance();
    if (item.currency === 'gold') {
      if (player.gold < item.price) {
        eventBus.emit('notification', { message: '金币不足。', type: 'warning', icon: '🪙' });
        return false;
      }
      player.gainGold(-item.price);
    } else {
      if (player.soul < item.price) {
        eventBus.emit('notification', { message: '魂晶不足。', type: 'warning', icon: '💎' });
        return false;
      }
      player.gainSoul(-item.price);
    }
    item.sold = true;
    switch (item.kind) {
      case 'potion':
      case 'key':
        InventoryManager.getInstance().addItem(item.id, 1);
        break;
      case 'equipment':
      case 'soul_equipment':
        // 购买时才把装备实例注册进玩家仓库
        if (item.equipment) {
          InventoryManager.getInstance().addEquipment(item.equipment);
        }
        break;
      case 'soul_collectible':
        if (item.collectibleId) CollectibleSystem.getInstance().addCollectible(item.collectibleId);
        break;
      default: break;
    }
    eventBus.emit('merchantTrade', { itemId: item.id, price: item.price, type: 'buy' });
    eventBus.emit('notification', { message: `购买了 ${item.name}`, type: 'success', icon: item.icon });
    return true;
  }

  /** 出售背包装备给商人 */
  sell(equipmentId: string): boolean {
    const price = InventoryManager.getInstance().sellEquipment(equipmentId);
    if (price <= 0) {
      eventBus.emit('notification', { message: '无法出售该装备。', type: 'warning' });
      return false;
    }
    eventBus.emit('notification', { message: `出售装备，获得 ${price} 金币`, type: 'success', icon: '🪙' });
    return true;
  }

  reset(): void {
    inventoryCache.clear();
  }
}
