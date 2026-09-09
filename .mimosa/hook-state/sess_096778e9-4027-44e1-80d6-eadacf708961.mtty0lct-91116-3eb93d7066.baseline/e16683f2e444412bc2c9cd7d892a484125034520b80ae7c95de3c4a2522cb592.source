/**
 * 怪物实体：包装 MonsterDef + 楼层/深度/难度上下文。
 * 属性在战斗开始时按三维度公式实时计算（难度切换即时生效）。
 */
import { dataManager } from '../core/DataManager';
import type { Combatant, Difficulty, MonsterDef, StatusEffectInstance } from '../types';
import { StatCalculator, type ScaledMonsterStats } from '../utils/StatCalculator';

export class Monster implements Combatant {
  uid: string;
  entityId: string;
  def: MonsterDef;
  floor: number;
  depth: number;
  difficulty: Difficulty;
  varianceSeed: number;
  isElite: boolean;
  endlessFloor: number;

  hp = 1;
  maxHp = 1;
  attack = 1;
  defense = 0;
  critRate = 0.02;
  dodgeRate = 0;
  damageBonus = 0;
  statusEffects: StatusEffectInstance[] = [];

  constructor(opts: {
    entityId: string;
    monsterId: string;
    floor: number;
    depth: number;
    difficulty: Difficulty;
    varianceSeed?: number;
    isElite?: boolean;
    endlessFloor?: number;
  }) {
    const def = dataManager.getMonster(opts.monsterId);
    if (!def) {
      throw new Error(`[Monster] 未知怪物ID: ${opts.monsterId}`);
    }
    this.uid = opts.entityId;
    this.entityId = opts.entityId;
    this.def = def;
    this.floor = opts.floor;
    this.depth = opts.depth;
    this.difficulty = opts.difficulty;
    this.varianceSeed = opts.varianceSeed ?? 0;
    this.isElite = opts.isElite ?? false;
    this.endlessFloor = opts.endlessFloor ?? 0;
    this.refreshStats();
  }

  get name(): string {
    return this.isElite ? `精英·${this.def.name}` : this.def.name;
  }

  get icon(): string {
    return this.def.icon;
  }

  /** 计算并应用缩放属性（战斗前刷新） */
  refreshStats(): ScaledMonsterStats {
    const stats = StatCalculator.monsterStats(
      this.def, this.floor, this.depth, this.difficulty,
      this.varianceSeed, this.isElite, this.endlessFloor,
    );
    this.maxHp = stats.hp;
    this.hp = stats.hp;
    this.attack = stats.atk;
    this.defense = stats.def;
    return stats;
  }

  get expReward(): number {
    return this.refreshStats().exp;
  }

  get goldReward(): number {
    return this.refreshStats().gold;
  }

  isAlive(): boolean {
    return this.hp > 0;
  }

  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }

  getFinalAttack(): number {
    let atk = this.attack;
    if (this.hasStatus('rage')) atk *= 1.3;
    if (this.hasStatus('curse')) atk *= 0.85;
    return Math.round(atk);
  }

  getFinalDefense(): number {
    let def = this.defense;
    if (this.hasStatus('rage')) def *= 0.8;
    return Math.round(def);
  }

  hasStatus(effectId: string): boolean {
    return this.statusEffects.some(s => s.effectId === effectId);
  }

  applyStatus(effectId: string, stacks = 1, duration?: number): void {
    const def = dataManager.getStatusEffect(effectId);
    if (!def) return;
    const existing = this.statusEffects.find(s => s.effectId === effectId);
    if (existing) {
      if (def.stackable) {
        existing.stacks = Math.min((def.maxStacks ?? 99), existing.stacks + stacks);
      }
      existing.remainingTurns = duration ?? def.duration;
    } else {
      this.statusEffects.push({ effectId, stacks, remainingTurns: duration ?? def.duration });
    }
  }

  removeStatus(effectId: string): void {
    const idx = this.statusEffects.findIndex(s => s.effectId === effectId);
    if (idx >= 0) this.statusEffects.splice(idx, 1);
  }
}
