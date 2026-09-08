/**
 * 背包管理器：消耗品堆叠、装备实例仓库、穿脱/使用/出售。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import type { Equipment, EquipSlot, InventoryItem } from '../types';
import { StatCalculator } from '../utils/StatCalculator';

export class InventoryManager {
  private static instance: InventoryManager;

  items: InventoryItem[] = [];
  equipmentInstances = new Map<string, Equipment>();

  private constructor() {}

  static getInstance(): InventoryManager {
    if (!InventoryManager.instance) {
      InventoryManager.instance = new InventoryManager();
    }
    return InventoryManager.instance;
  }

  // ============ 消耗品 ============

  addItem(itemId: string, quantity = 1): void {
    const def = dataManager.getItem(itemId);
    if (!def) return;
    const existing = this.items.find(i => i.itemId === itemId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ itemId, quantity });
    }
    eventBus.emit('itemCollected', { itemId, quantity, position: { x: 0, y: 0 } });
  }

  removeItem(itemId: string, quantity = 1): boolean {
    const idx = this.items.findIndex(i => i.itemId === itemId);
    if (idx < 0) return false;
    if (this.items[idx].quantity < quantity) return false;
    this.items[idx].quantity -= quantity;
    if (this.items[idx].quantity <= 0) this.items.splice(idx, 1);
    return true;
  }

  itemCount(itemId: string): number {
    return this.items.find(i => i.itemId === itemId)?.quantity ?? 0;
  }

  hasItem(itemId: string, quantity = 1): boolean {
    return this.itemCount(itemId) >= quantity;
  }

  /** 使用消耗品（药水/钥匙不直接使用） */
  useItem(itemId: string): boolean {
    const def = dataManager.getItem(itemId);
    if (!def?.effect) return false;
    const player = Player.getInstance();
    switch (def.effect.type) {
      case 'heal':
        player.heal(def.effect.value);
        break;
      case 'heal_pct':
        player.heal(Math.floor(player.maxHp * def.effect.value / 100));
        break;
      case 'add_gold':
        player.gainGold(def.effect.value);
        break;
      case 'add_soul':
        player.gainSoul(def.effect.value);
        break;
      case 'add_exp':
        player.addExp(def.effect.value);
        break;
      default:
        return false;
    }
    this.removeItem(itemId, 1);
    eventBus.emit('notification', { message: `使用了 ${def.name}`, type: 'info', icon: def.icon });
    eventBus.emit('playerStatsChanged', {});
    return true;
  }

  // ============ 装备实例 ============

  addEquipment(equipment: Equipment): Equipment {
    this.equipmentInstances.set(equipment.id, equipment);
    eventBus.emit('equipmentGenerated', { equipment });
    return equipment;
  }

  getEquipment(id: string): Equipment | undefined {
    return this.equipmentInstances.get(id);
  }

  getBackpackEquipments(): Equipment[] {
    const player = Player.getInstance();
    const equippedIds = new Set(Object.values(player.equipment).filter((v): v is string => v !== null));
    return [...this.equipmentInstances.values()].filter(e => !equippedIds.has(e.id));
  }

  /** 穿戴装备（同槽自动卸下），饰品优先空槽 */
  equip(equipmentId: string): boolean {
    const eq = this.getEquipment(equipmentId);
    const player = Player.getInstance();
    if (!eq) return false;
    let slot: EquipSlot = eq.slot;
    if (eq.type === 'accessory') {
      const free = player.freeAccessorySlot();
      if (free) slot = free;
    }
    const oldId = player.equipment[slot];
    if (oldId) {
      player.equipment[slot] = null;
    }
    player.equipment[slot] = eq.id;
    player.recalc();
    eventBus.emit('equipmentEquipped', { slot, equipmentId: eq.id, oldId: oldId ?? null });
    eventBus.emit('playerStatsChanged', {});
    return true;
  }

  unequip(slot: EquipSlot): void {
    const player = Player.getInstance();
    if (!player.equipment[slot]) return;
    player.equipment[slot] = null;
    player.recalc();
    eventBus.emit('playerStatsChanged', {});
  }

  /** 出售装备（回收价公式 G.2） */
  sellEquipment(equipmentId: string): number {
    const eq = this.getEquipment(equipmentId);
    if (!eq) return 0;
    const player = Player.getInstance();
    // 已穿戴不可直接出售
    if (Object.values(player.equipment).includes(equipmentId)) return 0;
    this.equipmentInstances.delete(equipmentId);
    const price = this.sellPriceOf(eq);
    player.gainGold(price);
    eventBus.emit('merchantTrade', { itemId: equipmentId, price, type: 'sell' });
    return price;
  }

  /** 回收价：生成时已按 G.2 公式算好（基础×品质倍率×等级/词条因子×浮动） */
  sellPriceOf(eq: Equipment): number {
    return Math.max(1, eq.sellPrice);
  }

  // ============ 存档 ============

  exportState(): { items: InventoryItem[]; equipmentInstances: Equipment[] } {
    return {
      items: this.items.map(i => ({ ...i })),
      equipmentInstances: [...this.equipmentInstances.values()].map(e => ({ ...e, affixes: e.affixes.map(a => ({ ...a })) })),
    };
  }

  loadState(items: InventoryItem[], equipmentInstances: Equipment[]): void {
    this.items = items.map(i => ({ ...i }));
    this.equipmentInstances = new Map(equipmentInstances.map(e => [e.id, e]));
  }

  reset(): void {
    this.items = [];
    this.equipmentInstances.clear();
  }

  /** 快捷栏：药水类物品列表 */
  quickUseItems(): InventoryItem[] {
    return this.items.filter(i => dataManager.getItem(i.itemId)?.type === 'potion');
  }

  /** 背包容量检查 */
  isFull(): boolean {
    return this.items.length >= dataManager.config.maxInventorySlots;
  }

  /** 综合战力备用：装备经验贡献 */
  equipmentPowerSummary(): { totalAttack: number; totalDefense: number; totalHp: number } {
    const player = Player.getInstance();
    const all = player.getEquippedAll();
    return {
      totalAttack: all.reduce((s, e) => s + e.finalAttack, 0),
      totalDefense: all.reduce((s, e) => s + e.finalDefense, 0),
      totalHp: all.reduce((s, e) => s + e.finalHpBonus, 0),
    };
  }

  /** 经验加成展示（供UI） */
  describeBonus(): string {
    const mods = Player.getInstance().getCombatModifiers();
    const parts: string[] = [];
    if (mods.goldBonus > 0) parts.push(`金币+${Math.round(mods.goldBonus * 100)}%`);
    if (mods.expBonus > 0) parts.push(`经验+${Math.round(mods.expBonus * 100)}%`);
    return parts.join(' ');
  }
}

// 战力工具引用（保持规格中的综合战力公式单一来源）
export { StatCalculator };
