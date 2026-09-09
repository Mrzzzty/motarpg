/**
 * 玩家实体（规格 2.2）：基础属性、成长、装备穿戴、藏品被动、状态效果。
 * 实现 Combatant 接口参与战斗。全局唯一实例（便于系统访问）。
 */
import { eventBus } from '../core/EventBus';
import { dataManager } from '../core/DataManager';
import type {
  CombatModifiers, Combatant, Difficulty, Equipment, EquipSlot, PositionPayload,
  Quality, StatusEffectInstance,
} from '../types';
import { StatCalculator } from '../utils/StatCalculator';
import { IdGenerator } from '../utils/IdGenerator';

type EquipmentResolver = (id: string) => Equipment | undefined;

export class Player implements Combatant {
  private static instance: Player | null = null;

  uid = 'player';
  name = '勇士';

  level = 1;
  exp = 0;
  gold = 0;
  soul = 0;

  /** 等级成长带来的基础攻防（初始为配置初始值） */
  baseAttack = 8;
  baseDefense = 2;
  baseCritRate = 0.05;
  baseDodgeRate = 0.05;
  baseDamageBonus = 0;
  baseMaxHp = 1000;

  hp = 1000;

  currentFloor = 1;
  currentRoomId = '';
  currentDifficulty: Difficulty = 'normal';
  position: PositionPayload = { x: 0, y: 0 };
  facing = 'south';

  statusEffects: StatusEffectInstance[] = [];
  collectibles: string[] = [];
  equipment: Record<EquipSlot, string | null> = {
    main_hand: null, off_hand: null, head: null, body: null, feet: null, accessory_1: null, accessory_2: null,
  };

  /** 派生属性（基础 + 装备 + 藏品，recalc 时更新） */
  maxHp = 1000;
  attack = 8;
  defense = 2;
  critRate = 0.05;
  dodgeRate = 0.05;
  damageBonus = 0;

  private equipmentResolver: EquipmentResolver = () => undefined;
  private stepsSinceRegen = 0;

  private constructor() {}

  static createNew(): Player {
    const p = new Player();
    const base = dataManager.config.playerBase;
    p.level = base.level;
    p.exp = base.exp;
    p.gold = base.gold;
    p.soul = base.soul;
    p.baseAttack = base.attack;
    p.baseDefense = base.defense;
    p.baseCritRate = base.critRate;
    p.baseDodgeRate = base.dodgeRate;
    p.baseDamageBonus = base.damageBonus;
    p.baseMaxHp = base.maxHp;
    p.hp = base.maxHp;
    p.statusEffects = [];
    p.collectibles = [];
    for (const slot of Object.keys(p.equipment) as EquipSlot[]) {
      p.equipment[slot] = null;
    }
    p.recalc();
    Player.instance = p;
    return p;
  }

  static getInstance(): Player {
    if (!Player.instance) {
      return Player.createNew();
    }
    return Player.instance;
  }

  static hasInstance(): boolean {
    return Player.instance !== null;
  }

  static destroyInstance(): void {
    Player.instance = null;
  }

  setEquipmentResolver(resolver: EquipmentResolver): void {
    this.equipmentResolver = resolver;
    this.recalc();
  }

  getEquipped(slot: EquipSlot): Equipment | undefined {
    const id = this.equipment[slot];
    return id ? this.equipmentResolver(id) : undefined;
  }

  getEquippedAll(): Equipment[] {
    return (Object.keys(this.equipment) as EquipSlot[])
      .map(slot => this.getEquipped(slot))
      .filter((e): e is Equipment => e !== undefined);
  }

  // ============ 藏品效果聚合（数据驱动，直接读配置） ============

  private collectibleEffects(): { type: string; value: number }[] {
    return this.collectibles
      .map(id => dataManager.getCollectible(id))
      .filter((c): c is NonNullable<ReturnType<typeof dataManager.getCollectible>> => c !== undefined)
      .map(c => ({ type: c.effect.type, value: c.effect.value }));
  }

  hasCollectible(id: string): boolean {
    return this.collectibles.includes(id);
  }

  /** 装备词条 + 藏品的战斗修正聚合 */
  getCombatModifiers(): CombatModifiers {
    const mods: CombatModifiers = {
      lifesteal: 0, fireDamage: 0, poisonOnHit: 0, thorns: 0,
      goldBonus: 0, expBonus: 0, soulBonus: 0, bossDamage: 0,
    };
    for (const eq of this.getEquippedAll()) {
      for (const affix of eq.affixes) {
        switch (affix.type) {
          case 'lifesteal': mods.lifesteal += affix.value / 100; break;
          case 'fire_damage': mods.fireDamage += affix.value; break;
          case 'poison_on_hit': mods.poisonOnHit += affix.value / 100; break;
          case 'gold_bonus': mods.goldBonus += affix.value / 100; break;
          case 'exp_bonus': mods.expBonus += affix.value / 100; break;
          case 'boss_damage': mods.bossDamage += affix.value / 100; break;
          default: break;
        }
      }
    }
    for (const eff of this.collectibleEffects()) {
      switch (eff.type) {
        case 'lifesteal': mods.lifesteal += eff.value / 100; break;
        case 'thorns': mods.thorns += eff.value / 100; break;
        case 'gold_bonus': mods.goldBonus += eff.value / 100; break;
        case 'exp_bonus': mods.expBonus += eff.value / 100; break;
        case 'soul_bonus': mods.soulBonus += eff.value / 100; break;
        case 'boss_damage': mods.bossDamage += eff.value / 100; break;
        default: break;
      }
    }
    return mods;
  }

  /** 重算派生属性 = 等级基础 + 装备 + 藏品 */
  recalc(): void {
    let bonusAtk = 0, bonusDef = 0, bonusHp = 0, bonusCrit = 0, bonusDodge = 0;
    for (const eq of this.getEquippedAll()) {
      bonusAtk += eq.finalAttack;
      bonusDef += eq.finalDefense;
      bonusHp += eq.finalHpBonus;
    }
    for (const eff of this.collectibleEffects()) {
      switch (eff.type) {
        case 'attack_bonus': bonusAtk += eff.value; break;
        case 'defense_bonus': bonusDef += eff.value; break;
        case 'hp_bonus': bonusHp += eff.value; break;
        case 'crit_bonus': bonusCrit += eff.value / 100; break;
        case 'dodge_bonus': bonusDodge += eff.value / 100; break;
        default: break;
      }
    }
    const oldMax = this.maxHp;
    this.maxHp = this.baseMaxHp + bonusHp;
    this.attack = this.baseAttack + bonusAtk;
    this.defense = this.baseDefense + bonusDef;
    this.critRate = this.baseCritRate + bonusCrit;
    this.dodgeRate = this.baseDodgeRate + bonusDodge;
    this.damageBonus = this.baseDamageBonus;
    if (this.maxHp > oldMax && oldMax > 0) {
      this.hp += this.maxHp - oldMax;
    }
    this.hp = Math.min(this.hp, this.maxHp);
  }

  // ============ Combatant 实现（含状态效果修正） ============

  isAlive(): boolean {
    return this.hp > 0;
  }

  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

  private statusStacks(effectId: string): number {
    return this.statusEffects.find(s => s.effectId === effectId)?.stacks ?? 0;
  }

  /** 战斗中的最终攻击（狂暴+30% / 诅咒-15%） */
  getFinalAttack(): number {
    let atk = this.attack;
    if (this.statusStacks('rage') > 0) atk *= 1.3;
    if (this.statusStacks('curse') > 0) atk *= 0.85;
    return Math.round(atk);
  }

  /** 战斗中的最终防御（狂暴-20%） */
  getFinalDefense(): number {
    let def = this.defense;
    if (this.statusStacks('rage') > 0) def *= 0.8;
    return Math.round(def);
  }

  getFinalCritRate(): number {
    return this.critRate;
  }

  getFinalDodgeRate(): number {
    let dodge = this.dodgeRate;
    if (this.statusStacks('haste') > 0) dodge += 0.15;
    return dodge;
  }

  getFinalDamageBonus(): number {
    let bonus = this.damageBonus;
    if (this.statusStacks('bless') > 0) bonus += 0.1;
    return bonus;
  }

  // ============ 资源与成长 ============

  gainGold(amount: number): void {
    if (amount === 0) return;
    const old = this.gold;
    this.gold = Math.max(0, this.gold + amount);
    eventBus.emit('goldChanged', { oldValue: old, newValue: this.gold, delta: this.gold - old });
  }

  gainSoul(amount: number): void {
    if (amount === 0) return;
    const old = this.soul;
    this.soul = Math.max(0, this.soul + amount);
    eventBus.emit('soulChanged', { oldValue: old, newValue: this.soul, delta: this.soul - old });
  }

  heal(amount: number): void {
    const old = this.hp;
    this.hp = Math.min(this.maxHp, this.hp + amount);
    if (this.hp !== old) {
      eventBus.emit('hpChanged', { oldValue: old, newValue: this.hp, delta: this.hp - old });
    }
  }

  healFull(): void {
    this.heal(this.maxHp - this.hp);
  }

  addExp(amount: number): void {
    if (amount <= 0) return;
    const old = this.exp;
    this.exp += amount;
    eventBus.emit('expChanged', { oldValue: old, newValue: this.exp, delta: amount });
    let guard = 0;
    while (this.exp >= StatCalculator.expToNextLevel(this.level) && guard < 100) {
      this.levelUp();
      guard++;
    }
    eventBus.emit('playerStatsChanged', {});
  }

  private levelUp(): void {
    const oldLevel = this.level;
    const need = StatCalculator.expToNextLevel(this.level);
    this.exp -= need;
    this.level += 1;
    const growth = StatCalculator.growthForLevel(oldLevel);
    this.baseMaxHp += growth.hp;
    this.baseAttack += growth.attack;
    this.baseDefense += growth.defense;
    this.hp = Math.min(this.hp + growth.hp, this.baseMaxHp + 99999);
    this.recalc();
    this.heal(growth.hp);
    eventBus.emit('levelUp', {
      oldLevel,
      newLevel: this.level,
      gainedAttack: growth.attack,
      gainedDefense: growth.defense,
      gainedHp: growth.hp,
    });
  }

  /** 应用状态效果 */
  applyStatus(effectId: string, stacks = 1, duration?: number): void {
    const def = dataManager.getStatusEffect(effectId);
    if (!def) return;
    const existing = this.statusEffects.find(s => s.effectId === effectId);
    if (existing) {
      if (def.stackable) {
        existing.stacks = Math.min((def.maxStacks ?? 99), existing.stacks + stacks);
        existing.remainingTurns = duration ?? def.duration;
      } else {
        existing.remainingTurns = Math.max(existing.remainingTurns, duration ?? def.duration);
      }
    } else {
      this.statusEffects.push({ effectId, stacks: def.stackable ? Math.min(stacks, def.maxStacks ?? 99) : 1, remainingTurns: duration ?? def.duration });
    }
    eventBus.emit('statusApplied', { targetId: this.uid, effectId, stacks, duration: duration ?? def.duration });
  }

  removeStatus(effectId: string): void {
    const idx = this.statusEffects.findIndex(s => s.effectId === effectId);
    if (idx >= 0) {
      this.statusEffects.splice(idx, 1);
      eventBus.emit('statusRemoved', { targetId: this.uid, effectId });
    }
  }

  clearStatuses(): void {
    for (const s of [...this.statusEffects]) {
      this.removeStatus(s.effectId);
    }
  }

  /** 装备品质修正（综合战力用，规格 2.1.2） */
  equipmentQualityBonus(): number {
    const weights: Record<Quality, number> = { common: 0, uncommon: 1, rare: 2, epic: 4, legendary: 8, mythic: 12 };
    let sum = 0;
    for (const eq of this.getEquippedAll()) {
      sum += (weights[eq.quality] ?? 0) * eq.level / 5;
    }
    return Math.round(sum);
  }

  /** 藏品修正（综合战力用） */
  collectiblePowerBonus(): number {
    let count = this.collectibles.length * 3;
    for (const id of this.collectibles) {
      const c = dataManager.getCollectible(id);
      if (c && (c.rarity === 'legendary' || c.rarity === 'mythic')) count += 10;
    }
    return count;
  }

  /** 综合战力 */
  combatPower(): number {
    return StatCalculator.combatPower(
      { attack: this.attack, defense: this.defense, maxHp: this.maxHp },
      this.equipmentQualityBonus(),
      this.collectiblePowerBonus(),
    );
  }

  /** 走步回调（生命源泉藏品：每10步回2%） */
  onStep(): void {
    this.stepsSinceRegen++;
    if (this.hasCollectible('collect_regen')) {
      if (this.stepsSinceRegen % dataManager.config.regen.regenCollectibleSteps === 0) {
        this.heal(Math.round(this.maxHp * 0.02));
      }
    }
  }

  /** 装备对比用：下一个可用饰品槽 */
  freeAccessorySlot(): EquipSlot | null {
    if (!this.equipment.accessory_1) return 'accessory_1';
    if (!this.equipment.accessory_2) return 'accessory_2';
    return null;
  }

  newId(): string {
    return IdGenerator.next('player');
  }
}
