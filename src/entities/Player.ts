/**
 * 玩家：状态、成长、装备穿戴、药水使用、金币（单例）。
 */
import type {
  AffixInstance, Equipment, EquipSlot, PlayerState, PlayerStats, PotionTier, Quality,
} from '../types';
import { eventBus } from '../core/EventBus';
import { dataManager } from '../core/DataManager';
import { StatCalculator } from '../utils/StatCalculator';
import { RelicManager } from '../systems/RelicManager';

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
      accessoryId: null,
      bag: [],
      relics: [],
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
    const { weaponId, armorId, accessoryId } = this.state;
    return this.state.bag.filter(e => e.id === weaponId || e.id === armorId || e.id === accessoryId);
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
      // 饰品主属性：暴击率 / 闪避率（百分点）
      if (equip.accessoryStat === 'crit') critRate += equip.accessoryValue ?? 0;
      else if (equip.accessoryStat === 'dodge') dodgeRate += equip.accessoryValue ?? 0;
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

    // ===== 遗物加成（按当前生命比例聚合：含低血/高血条件与组合质变） =====
    const relics = RelicManager.getInstance();
    const hpRatio = maxHp > 0 ? this.state.hp / maxHp : 1;
    const snap = relics.snapshot(hpRatio);
    const F = snap.flat;
    const P = snap.pct;
    let critDamage = 0;
    let damageReduction = 0;
    let damageTaken = 0;
    let thorns = 0;
    let armorPen = 0;
    let eliteBossDamage = 0;
    let monsterAttackUp = 0;
    let potionBonus = 0;
    let potionExtraPct = 0;
    let pctMaxHp = 0;

    attack += F.attack ?? 0; pctAtk += P.attack ?? 0;
    defense += F.defense ?? 0; pctDef += P.defense ?? 0;
    maxHp += F.maxHp ?? 0; pctMaxHp += P.maxHp ?? 0;
    critRate += F.critRate ?? 0;
    dodgeRate += F.dodgeRate ?? 0;
    lifesteal += F.lifesteal ?? 0;
    fireDamage += F.fireDamage ?? 0;
    goldBonus += F.goldBonus ?? 0;
    expBonus += F.expBonus ?? 0;
    bossDamage += F.bossDamage ?? 0;
    critDamage += F.critDamage ?? 0;
    damageReduction += F.damageReduction ?? 0;
    damageTaken += F.damageTaken ?? 0;
    thorns += F.thorns ?? 0;
    armorPen += F.armorPen ?? 0;
    eliteBossDamage += F.eliteBossDamage ?? 0;
    monsterAttackUp += F.monsterAttackUp ?? 0;
    potionBonus += F.potionBonus ?? 0;
    potionExtraPct += F.potionExtraPct ?? 0;

    let finalMaxHp = Math.round(maxHp * (1 + pctMaxHp / 100));
    // 献祭组合：生命上限锁定为 1
    if (snap.combos.includes('sacrifice')) finalMaxHp = 1;

    let finalAttack = Math.round(attack * (1 + pctAtk / 100));
    // 血怒组合：生命低于 35% 时攻击 ×2（覆盖狂战士之血的 +45%）
    if (snap.combos.includes('bloodrage') && hpRatio < 0.35) finalAttack *= 2;

    return {
      maxHp: Math.max(1, finalMaxHp),
      attack: finalAttack,
      defense: Math.round(defense * (1 + pctDef / 100)),
      critRate: Math.min(75, critRate),
      dodgeRate: Math.min(50, dodgeRate),
      lifesteal,
      fireDamage,
      goldBonus,
      expBonus,
      bossDamage,
      critDamage,
      damageReduction,
      damageTaken,
      thorns,
      armorPen,
      eliteBossDamage,
      monsterAttackUp,
      potionBonus,
      potionExtraPct,
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

  /** 生命上限变化后夹取当前生命（如遗物降低上限） */
  clampHp(): void {
    const max = this.maxHp;
    if (this.state.hp > max) {
      const before = this.state.hp;
      this.state.hp = max;
      eventBus.emit('hpChanged', { oldValue: before, newValue: this.state.hp, delta: this.state.hp - before });
    }
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

  /** 使用药水：百分比回复（含遗物药水加成；贪婪之匣禁止用药） */
  usePotion(tier: PotionTier): boolean {
    if (this.getPotionCount(tier) <= 0) return false;
    if (RelicManager.getInstance().value('noPotion') > 0) return false;
    const def = dataManager.getPotion(tier);
    if (!def) return false;
    this.state.potions[tier] -= 1;
    const s = this.stats();
    const pct = def.healPct * (1 + s.potionBonus / 100);
    const extra = s.potionExtraPct > 0 ? this.maxHp * s.potionExtraPct / 100 : 0;
    const healed = this.heal(Math.round(this.maxHp * pct + extra));
    eventBus.emit('potionUsed', { tier, healed });
    return true;
  }

  /** 自动选最优药水（战斗中扣血超过其回复量时用；贪婪之匣禁用） */
  bestPotionFor(missing: number): PotionTier | null {
    if (RelicManager.getInstance().value('noPotion') > 0) return null;
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
  get accessory(): Equipment | null { return this.state.bag.find(e => e.id === this.state.accessoryId) ?? null; }

  /** 背包中未穿戴的装备 */
  get unequippedBag(): Equipment[] {
    const { weaponId, armorId, accessoryId } = this.state;
    return this.state.bag.filter(e => e.id !== weaponId && e.id !== armorId && e.id !== accessoryId);
  }

  addEquipment(equip: Equipment): void {
    this.state.bag.push(equip);
    eventBus.emit('equipmentGenerated', { equipment: equip, source: equip.source });
  }

  /** 槽位当前穿戴的装备 ID（未知槽位 → null） */
  private equippedIdOf(slot: EquipSlot): string | null {
    if (slot === 'weapon') return this.state.weaponId;
    if (slot === 'armor') return this.state.armorId;
    if (slot === 'accessory') return this.state.accessoryId;
    return null;
  }

  private setEquippedId(slot: EquipSlot, id: string | null): void {
    if (slot === 'weapon') this.state.weaponId = id;
    else if (slot === 'armor') this.state.armorId = id;
    else if (slot === 'accessory') this.state.accessoryId = id;
  }

  equip(equipId: string): boolean {
    const equip = this.state.bag.find(e => e.id === equipId);
    if (!equip) return false;
    const slot: EquipSlot = equip.slot;
    const current = this.equippedIdOf(slot);
    if (current === equipId) return false;
    this.setEquippedId(slot, equipId);
    eventBus.emit('equipmentEquipped', { slot, equipmentId: equipId, oldId: current });
    return true;
  }

  unequip(slot: EquipSlot): void {
    this.setEquippedId(slot, null);
    eventBus.emit('equipmentEquipped', { slot, equipmentId: '', oldId: null });
  }

  removeEquipment(equipId: string): Equipment | null {
    const idx = this.state.bag.findIndex(e => e.id === equipId);
    if (idx < 0) return null;
    if (this.state.weaponId === equipId) this.state.weaponId = null;
    if (this.state.armorId === equipId) this.state.armorId = null;
    if (this.state.accessoryId === equipId) this.state.accessoryId = null;
    const [removed] = this.state.bag.splice(idx, 1);
    return removed;
  }

  qualityRank(q: Quality): number { return QUALITY_ORDER.indexOf(q); }
}
