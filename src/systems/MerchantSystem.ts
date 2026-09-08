/**
 * 商人系统：商人NPC库存（药水/钥匙/装备）与购买。库存按楼层刷新。
 */
import type { Equipment, PotionTier } from '../types';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import { eventBus } from '../core/EventBus';
import { EquipmentGenerator } from './EquipmentGenerator';
import { rng } from '../utils/MathUtils';

export interface ShopEntry {
  kind: 'potion' | 'key' | 'equipment';
  tier?: PotionTier;
  name: string;
  icon: string;
  price: number;
  quantity: number; // 剩余数量（-1 不限）
  equipment?: Equipment;
  desc: string;
}

export class MerchantSystem {
  private static instance: MerchantSystem;
  /** npcId → 库存 */
  private shops = new Map<string, ShopEntry[]>();

  private constructor() {}
  static getInstance(): MerchantSystem {
    if (!MerchantSystem.instance) MerchantSystem.instance = new MerchantSystem();
    return MerchantSystem.instance;
  }

  /** 打开/生成商店库存（同层同NPC复用）；女巫与商人共用此入口 */
  openShop(npcId: string, floorId: number): ShopEntry[] {
    const key = `${npcId}@${floorId}`;
    const existing = this.shops.get(key);
    if (existing) return existing;

    const stock = npcId === 'npc_witch'
      ? this.buildWitchStock(floorId)
      : this.buildMerchantStock(floorId);
    this.shops.set(key, stock);
    return stock;
  }

  /** 女巫·薇薇安：只卖秘制药水（当前楼层可用档位中的最高两档，数量少而精） */
  private buildWitchStock(floorId: number): ShopEntry[] {
    const cfg = dataManager.config.witch;
    const tiers = dataManager.potions.potions
      .filter(p => floorId >= p.minFloor && floorId <= p.maxFloor)
      .sort((a, b) => b.healPct - a.healPct);
    const pool = tiers.length > 0 ? tiers : dataManager.potions.potions;
    return pool.slice(0, 2).map(p => ({
      kind: 'potion' as const, tier: p.tier, name: p.name, icon: p.icon,
      price: Math.round(p.price * 1.2), // 女巫秘制：略高于市价
      quantity: rng.randInt(cfg.potionCountMin, cfg.potionCountMax),
      desc: `回复 ${Math.round(p.healPct * 100)}% 生命（女巫秘制）`,
    }));
  }

  /** 商人·老古：药水 / 钥匙 / 装备 */
  private buildMerchantStock(floorId: number): ShopEntry[] {
    const cfg = dataManager.config.merchant;
    const player = Player.getInstance();
    const stock: ShopEntry[] = [];

    // 药水：当前楼层对应品质（可用档位中最高与次高各备一些）
    const tiers = dataManager.potions.potions
      .filter(p => floorId >= p.minFloor && floorId <= p.maxFloor)
      .sort((a, b) => b.healPct - a.healPct);
    const top = tiers[0];
    if (top) {
      stock.push({
        kind: 'potion', tier: top.tier, name: top.name, icon: top.icon,
        price: top.price, quantity: rng.randInt(cfg.potionCountMin, cfg.potionCountMax),
        desc: `回复 ${Math.round(top.healPct * 100)}% 生命`,
      });
    }
    const second = tiers[1];
    if (second) {
      stock.push({
        kind: 'potion', tier: second.tier, name: second.name, icon: second.icon,
        price: second.price, quantity: rng.randInt(cfg.potionCountMin, cfg.potionCountMax),
        desc: `回复 ${Math.round(second.healPct * 100)}% 生命`,
      });
    }

    // 钥匙：50-200 随楼层递增
    const keyPrice = Math.round(cfg.keyPriceBase + cfg.keyPricePer10Floors * Math.floor(floorId / 10));
    stock.push({
      kind: 'key', name: '钥匙', icon: '🗝️',
      price: keyPrice, quantity: rng.randInt(cfg.keyCountMin, cfg.keyCountMax),
      desc: '开启上锁的宝箱',
    });

    // 装备：1-2件，品质按楼层概率
    const equipCount = rng.randInt(cfg.equipmentCountMin, cfg.equipmentCountMax);
    for (let i = 0; i < equipCount; i++) {
      const equip = EquipmentGenerator.getInstance().generate('merchant', { floorId });
      stock.push({
        kind: 'equipment', name: equip.name, icon: equip.slot === 'weapon' ? '🗡️' : '🛡️',
        price: equip.buyPrice, quantity: 1, equipment: equip,
        desc: equip.slot === 'weapon' ? `攻击 +${equip.attack}` : `防御 +${equip.defense}`,
      });
    }

    void player;
    return stock;
  }

  /** 购买：金币结算 */
  buy(npcId: string, floorId: number, index: number): { ok: boolean; reason?: string } {
    const stock = this.openShop(npcId, floorId);
    const entry = stock[index];
    if (!entry) return { ok: false, reason: '无此商品' };
    if (entry.quantity === 0) return { ok: false, reason: '已售罄' };
    const player = Player.getInstance();
    if (!player.spendGold(entry.price)) return { ok: false, reason: '金币不足' };

    if (entry.kind === 'potion' && entry.tier) {
      player.addPotion(entry.tier, 1);
      eventBus.emit('potionPurchased', { tier: entry.tier, price: entry.price });
    } else if (entry.kind === 'key') {
      player.state.keys += 1;
      eventBus.emit('keyPurchased', { price: entry.price });
    } else if (entry.kind === 'equipment' && entry.equipment) {
      player.addEquipment(entry.equipment);
    }
    if (entry.quantity > 0) entry.quantity -= 1;
    return { ok: true };
  }

  /** 出售装备（回收价）。收藏与正在穿戴的装备不可回收 */
  sell(equipmentId: string): { ok: boolean; price: number; reason?: string } {
    const player = Player.getInstance();
    const equip = player.state.bag.find(e => e.id === equipmentId);
    if (!equip) return { ok: false, price: 0, reason: '无此装备' };
    if (equip.isFavorite) return { ok: false, price: 0, reason: '已收藏的装备无法回收' };
    if (player.state.weaponId === equipmentId || player.state.armorId === equipmentId) {
      return { ok: false, price: 0, reason: '正在穿戴的装备无法回收' };
    }
    player.removeEquipment(equipmentId);
    player.gainGold(equip.sellPrice);
    eventBus.emit('equipmentSold', { equipmentId, price: equip.sellPrice });
    return { ok: true, price: equip.sellPrice };
  }
}
