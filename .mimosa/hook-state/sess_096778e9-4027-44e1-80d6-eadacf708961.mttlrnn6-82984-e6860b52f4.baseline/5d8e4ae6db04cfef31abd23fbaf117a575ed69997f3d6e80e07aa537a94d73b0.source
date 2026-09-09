/**
 * 玩家：状态、成长、装备穿戴、药水使用、金币（单例）。
 */
import type {
  AffixInstance, Equipment, EquipSlot, PlayerState, PlayerStats, PotionTier, Quality,
} from '../types';
import { eventBus } from '../core/EventBus';
import { dataManager } from '../core/DataManager';
import { StatCalculator } from '../utils/StatCalculator';

const QUALITY_ORDER: Quality[] = ['poor', 'common', 'fine', 'rare', 'epic', 'legendary', 'mythic'];

export class Player {
  private static instance: Player;

  public state: PlayerState;

  private constructor() {
    const base = dataManager.config.playerBase;
    this.state = {
      level: 1,
      exp: 0,
      hp: base.maxHp,
      baseMaxHp: base.maxHp,
      baseAttack: base.attack,
      baseDefense: base.defense,
      baseCritRate: base.critRate,
      baseDodgeRate: base.dodgeRate,
      gold: 0,
      keys: 0,
      potions: { crude: 0, normal: 0, quality: 0, strong: 0, holy: 0 },
      hotbar: [null, null, null, null, null],
      weaponId: null,
      armorId: null,
      bag: [],
      x: 0,
      y: 0,
      currentFloor: 1,
      currentRoomId: '',
    };
  }

  static getInstance(): Player {
    if (!Player.instance) Player.instance = new Player();
    return Player.instance;
  }

  /** 存档恢复 */
  restore(state: PlayerState): void {
    this.state = state;
  }

  get pos(): { x: number; y: number } { return { x: this.state.x, y: this.state.y }; }

  // ============ 属性聚合（基础 + 装备 + 词条） ============

  private equipped(): Equipment[] {
    return this.state.bag.filter(e => e.id === this.state.weaponId || e.id === this.state.armorId);
  }

  stats(): PlayerStats {
    let attack = this.state.baseAttack;
    let defense = this.state.baseDefense;
    let maxHp = this.state.baseMaxHp;
    let critRate = this.state.baseCritRate;
    let dodgeRate = this.state.baseDodgeRate;
    let lifesteal = 0;
    let fireDamage = 0;
    let goldBonus = 0;
    let expBonus = 0;
    let bossDamage = 0;
    let pctAtk = 0;
    let pctDef = 0;

    for (const equip of this.equipped()) {
      attack += equip.attack;
      defense += equip.defense;
    }
    const affixes: AffixInstance[] = this.equipped().flatMap(e => e.affixes);
    for (const a of affixes) {
      switch (a.type) {
        case 'sharp': attack += a.value; break;
        case 'sturdy': defense += a.value; break;
        case 'vitality': maxHp += a.value; break;
        case 'precision': critRate += a.value; break;
        case 'agility': dodgeRate += a.value; break;
        case 'savage': pctAtk += a.value; break;
        case 'fortress': pctDef += a.value; break;
        case 'lifesteal': lifesteal += a.value; break;
        case 'hellfire': fireDamage += a.value; break;
        case 'greed': goldBonus += a.value; break;
        case 'wisdom': expBonus += a.value; break;
        case 'dragonslayer': bossDamage += a.value; break;
      }
    }
    return {
      maxHp: Math.round(maxHp),
      attack: Math.round(attack * (1 + pctAtk / 100)),
      defense: Math.round(defense * (1 + pctDef / 100)),
      critRate: Math.min(75, critRate),
      dodgeRate: Math.min(50, dodgeRate),
      lifesteal,
      fireDamage,
      goldBonus,
      expBonus,
      bossDamage,
    };
  }

  get maxHp(): number { return this.stats().maxHp; }
  get attack(): number { return this.stats().attack; }
  get defense(): number { return this.stats().defense; }
  get isAlive(): boolean { return this.state.hp > 0; }

  // ============ 生命 / 经验 / 金币 ============

  heal(amount: number): number {
    const max = this.maxHp;
    const before = this.state.hp;
    this.state.hp = Math.min(max, this.state.hp + amount);
    const healed = this.state.hp - before;
    if (healed > 0) eventBus.emit('hpChanged', { oldValue: before, newValue: this.state.hp, delta: healed });
    return healed;
  }

  damage(amount: number): void {
    const before = this.state.hp;
    this.state.hp = Math.max(0, this.state.hp - amount);
    eventBus.emit('hpChanged', { oldValue: before, newValue: this.state.hp, delta: this.state.hp - before });
  }

  gainExp(amount: number): void {
    const bonus = 1 + this.stats().expBonus / 100;
    const gained = Math.round(amount * bonus);
    const before = this.state.exp;
    this.state.exp += gained;
    eventBus.emit('expChanged', { oldValue: before, newValue: this.state.exp, delta: gained });
    this.checkLevelUp();
  }

  private checkLevelUp(): void {
    const calc = StatCalculator.getInstance();
    let need = calc.expToNext(this.state.level);
    while (this.state.exp >= need && this.state.level < 999) {
      this.state.exp -= need;
      const oldLevel = this.state.level;
      this.state.level += 1;
      const base = calc.playerBaseAt(this.state.level);
      const gainedHp = base.maxHp - this.state.baseMaxHp;
      const gainedAtk = base.attack - this.state.baseAttack;
      const gainedDef = base.defense - this.state.baseDefense;
      this.state.baseMaxHp = base.maxHp;
      this.state.baseAttack = base.attack;
      this.state.baseDefense = base.defense;
      this.state.hp += gainedHp; // 升级回复增量生命
      eventBus.emit('levelUp', { oldLevel, newLevel: this.state.level, gainedHp, gainedAttack: gainedAtk, gainedDefense: gainedDef });
      need = calc.expToNext(this.state.level);
    }
  }

  gainGold(amount: number): void {
    const bonus = 1 + this.stats().goldBonus / 100;
    const gained = Math.round(amount * bonus);
    const old = this.state.gold;
    this.state.gold += gained;
    eventBus.emit('goldChanged', { oldValue: old, newValue: this.state.gold, delta: gained });
  }

  spendGold(amount: number): boolean {
    if (this.state.gold < amount) return false;
    const old = this.state.gold;
    this.state.gold -= amount;
    eventBus.emit('goldChanged', { oldValue: old, newValue: this.state.gold, delta: -amount });
    return true;
  }

  // ============ 药水 ============

  getPotionCount(tier: PotionTier): number { return this.state.potions[tier] ?? 0; }

  /** 绑定快捷栏槽位（拖拽药水到快捷栏） */
  setHotbarSlot(slot: number, tier: PotionTier | null): void {
    if (slot < 0 || slot >= this.state.hotbar.length) return;
    this.state.hotbar[slot] = tier;
  }

  /** 交换/移动两个快捷栏槽位的绑定 */
  swapHotbar(from: number, to: number): void {
    const hb = this.state.hotbar;
    if (from < 0 || from >= hb.length || to < 0 || to >= hb.length) return;
    [hb[from], hb[to]] = [hb[to], hb[from]];
  }

  addPotion(tier: PotionTier, count = 1): void {
    this.state.potions[tier] = this.getPotionCount(tier) + count;
  }

  /** 使用药水：百分比回复 */
  usePotion(tier: PotionTier): boolean {
    if (this.getPotionCount(tier) <= 0) return false;
    const def = dataManager.getPotion(tier);
    if (!def) return false;
    this.state.potions[tier] -= 1;
    const healed = this.heal(Math.round(this.maxHp * def.healPct));
    eventBus.emit('potionUsed', { tier, healed });
    return true;
  }

  /** 自动选最优药水（战斗中扣血超过其回复量时用） */
  bestPotionFor(missing: number): PotionTier | null {
    const order: PotionTier[] = ['crude', 'normal', 'quality', 'strong', 'holy'];
    for (const tier of order) {
      const def = dataManager.getPotion(tier);
      if (!def) continue;
      if (this.getPotionCount(tier) > 0 && Math.round(this.maxHp * def.healPct) <= missing) return tier;
    }
    // 没有恰好覆盖的就用手里最小的
    for (const tier of order) {
      if (this.getPotionCount(tier) > 0) return tier;
    }
    return null;
  }

  // ============ 装备 ============

  get weapon(): Equipment | null { return this.state.bag.find(e => e.id === this.state.weaponId) ?? null; }
  get armor(): Equipment | null { return this.state.bag.find(e => e.id === this.state.armorId) ?? null; }

  /** 背包中未穿戴的装备 */
  get unequippedBag(): Equipment[] {
    return this.state.bag.filter(e => e.id !== this.state.weaponId && e.id !== this.state.armorId);
  }

  addEquipment(equip: Equipment): void {
    this.state.bag.push(equip);
    eventBus.emit('equipmentGenerated', { equipment: equip, source: equip.source });
  }

  equip(equipId: string): boolean {
    const equip = this.state.bag.find(e => e.id === equipId);
    if (!equip) return false;
    const slot: EquipSlot = equip.slot;
    const current = slot === 'weapon' ? this.state.weaponId : this.state.armorId;
    if (current === equipId) return false;
    if (slot === 'weapon') this.state.weaponId = equipId;
    else this.state.armorId = equipId;
    eventBus.emit('equipmentEquipped', { slot, equipmentId: equipId, oldId: current });
    return true;
  }

  unequip(slot: EquipSlot): void {
    if (slot === 'weapon') this.state.weaponId = null;
    else this.state.armorId = null;
    eventBus.emit('equipmentEquipped', { slot, equipmentId: '', oldId: null });
  }

  removeEquipment(equipId: string): Equipment | null {
    const idx = this.state.bag.findIndex(e => e.id === equipId);
    if (idx < 0) return null;
    if (this.state.weaponId === equipId) this.state.weaponId = null;
    if (this.state.armorId === equipId) this.state.armorId = null;
    const [removed] = this.state.bag.splice(idx, 1);
    return removed;
  }

  qualityRank(q: Quality): number { return QUALITY_ORDER.indexOf(q); }
}
