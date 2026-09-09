/**
 * Boss实体（继承Monster）：Boss公式缩放 + 词缀 + 战力检测修正（规格 2.1.2 / J.2）。
 */
import { dataManager } from '../core/DataManager';
import type { BossRuntimeInfo, Combatant, Difficulty, MonsterDef, StatusEffectInstance } from '../types';
import { rng, SeededRNG } from '../utils/MathUtils';
import { StatCalculator } from '../utils/StatCalculator';
import { Monster } from './Monster';

export class Boss extends Monster implements Combatant {
  bossId: string;
  bossName: string;
  title: string;
  bossIcon: string;
  color: string;
  affixes: string[] = [];
  suggestedPower = 0;
  modifier: BossRuntimeInfo['modifier'] = 'standard';
  affixFlags: { rageTriggered: boolean; immortalUsed: boolean; legendaryMul: number } = {
    rageTriggered: false, immortalUsed: false, legendaryMul: 1,
  };

  constructor(opts: {
    entityId: string;
    baseMonsterId: string;
    bossId: string;
    bossName: string;
    title: string;
    icon: string;
    color: string;
    floor: number;
    difficulty: Difficulty;
    forcedAffixCount?: number | null;
    endlessFloor?: number;
  }) {
    const def: MonsterDef = dataManager.getMonster(opts.baseMonsterId)
      ?? { id: opts.baseMonsterId, name: '远古巨龙', icon: '🐉', baseHp: 500, baseAtk: 55, baseDef: 20, baseExp: 500, baseGold: 200, weakness: [], drops: [], spawnFloorMin: 1, spawnFloorMax: 9999, weight: 0, unlockThreshold: 5, description: '' };
    super({
      entityId: opts.entityId,
      monsterId: def.id,
      floor: opts.floor,
      depth: 2,
      difficulty: opts.difficulty,
      endlessFloor: opts.endlessFloor ?? 0,
    });
    this.bossId = opts.bossId;
    this.bossName = opts.bossName;
    this.title = opts.title;
    this.bossIcon = opts.icon;
    this.color = opts.color;
    this.critRate = 0.05;
    this.rollAffixes(opts.forcedAffixCount ?? null, opts.entityId);
    this.applyBossFormulas();
  }

  override get name(): string {
    return `${this.title} ${this.bossName}`;
  }

  override get icon(): string {
    return this.bossIcon;
  }

  /** 随机附加0-2个词缀（天堂难度强制2个，规格 J.2） */
  private rollAffixes(forcedCount: number | null, seedSource: string): void {
    const cfg = dataManager.config.boss;
    let count: number;
    if (forcedCount !== null) {
      count = forcedCount;
    } else {
      const roll = rng.next();
      count = roll < 0.3 ? 0 : roll < 0.8 ? 1 : 2;
      count = Math.min(count, cfg.affixMax);
    }
    if (count <= 0) return;
    const seeded = new SeededRNG(0xdeadbeef ^ StatCalculator.expToNextLevel(1) ^ Math.abs(this.hashStr(seedSource)));
    const pool = [...dataManager.bossAffixes];
    for (let i = 0; i < count && pool.length > 0; i++) {
      const affix = seeded.pickWeighted(pool, a => a.weight);
      this.affixes.push(affix.id);
      pool.splice(pool.indexOf(affix), 1);
    }
    if (this.affixes.includes('boss_legendary')) {
      this.affixFlags.legendaryMul = 1.3;
    }
  }

  private hashStr(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (Math.imul(h, 31) + s.charCodeAt(i)) | 0;
    }
    return h;
  }

  /** Boss公式属性 + 战力检测修正（防速通，规格 2.1.2） */
  private applyBossFormulas(): void {
    const stats = StatCalculator.bossStats(this.def, this.floor, this.difficulty, this.endlessFloor);
    let hp = stats.hp, atk = stats.atk, def = stats.def;

    // 词缀属性修正
    if (this.affixes.includes('boss_giant')) hp = Math.round(hp * 1.5);
    if (this.affixes.includes('boss_berserk')) { atk = Math.round(atk * 1.8); def = Math.round(def * 0.7); }
    if (this.affixes.includes('boss_fast')) this.dodgeRate = 0.2;
    atk = Math.round(atk * this.affixFlags.legendaryMul);
    def = Math.round(def * this.affixFlags.legendaryMul);
    hp = Math.round(hp * this.affixFlags.legendaryMul);

    // 战力检测修正
    if (this.modifier === 'unstoppable') {
      atk = Math.round(atk * 1.5);
      def = Math.round(def * 1.3);
      hp = Math.round(hp * 1.4);
    } else if (this.modifier === 'underdog') {
      def = Math.round(def * 1.2);
    }

    this.maxHp = hp;
    this.hp = hp;
    this.attack = atk;
    this.defense = def;
    this.suggestedPower = StatCalculator.combatPower({ attack: atk, defense: def, maxHp: hp });
    this._baseRewards = stats;
  }

  private _baseRewards: { exp: number; gold: number } = { exp: 0, gold: 0 };

  /** 依据玩家战力应用修正（进入Boss房间时调用） */
  applyPowerCheck(playerPower: number): void {
    const cfg = dataManager.config.battle;
    const ratio = playerPower / Math.max(1, this.suggestedPower);
    if (ratio < cfg.underpoweredThreshold) {
      this.modifier = 'unstoppable';
      this.attack = Math.round(this.attack * (1 + cfg.unstoppableAtk));
      this.defense = Math.round(this.defense * (1 + cfg.unstoppableDef));
      this.maxHp = Math.round(this.maxHp * (1 + cfg.unstoppableHp));
      this.hp = this.maxHp;
    } else if (ratio > cfg.overpoweredThreshold) {
      this.modifier = 'underdog';
      this.defense = Math.round(this.defense * (1 + cfg.underdogDef));
    } else {
      this.modifier = 'standard';
    }
  }

  get powerRatioLabel(): string {
    return this.modifier === 'unstoppable' ? '势不可挡' : this.modifier === 'underdog' ? '以弱制强' : '标准';
  }

  get bossReward(): { exp: number; gold: number; soul: number } {
    return {
      exp: this._baseRewards.exp,
      gold: this._baseRewards.gold,
      soul: StatCalculator.bossSoul(this.floor, this.endlessFloor),
    };
  }

  hasAffix(id: string): boolean {
    return this.affixes.includes(id);
  }

  runtimeInfo(): BossRuntimeInfo {
    return {
      bossId: this.bossId,
      name: this.bossName,
      title: this.title,
      icon: this.bossIcon,
      affixes: [...this.affixes],
      suggestedPower: this.suggestedPower,
      modifier: this.modifier,
    };
  }

  // Boss不吃楼层浮动，重写刷新逻辑防止覆盖Boss公式
  override refreshStats(): { hp: number; atk: number; def: number; exp: number; gold: number } {
    // 构造期（_baseRewards未初始化时）由父类调用：返回占位值，稍后 applyBossFormulas 覆盖
    const rewards = this._baseRewards ?? { exp: 0, gold: 0 };
    return { hp: this.hp, atk: this.attack, def: this.defense, exp: rewards.exp, gold: rewards.gold };
  }

  // 怪物基类的状态方法对Boss同样适用
  override getFinalAttack(): number {
    let atk = this.attack;
    // 词缀：狂暴（生命<30%时攻击+50%）
    if (this.hasAffix('boss_rage') && !this.affixFlags.rageTriggered && this.hp < this.maxHp * 0.3) {
      this.affixFlags.rageTriggered = true;
    }
    if (this.affixFlags.rageTriggered) atk *= 1.5;
    if (this.hasStatus('curse')) atk *= 0.85;
    return Math.round(atk);
  }

  override getFinalDefense(): number {
    return this.defense;
  }
}

// 保持类型兼容（Boss的statusEffects继承自Monster）
export type BossStatusEffect = StatusEffectInstance;
