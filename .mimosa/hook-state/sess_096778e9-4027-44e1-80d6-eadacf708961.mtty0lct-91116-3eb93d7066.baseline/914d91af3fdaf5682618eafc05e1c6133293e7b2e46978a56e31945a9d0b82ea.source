/**
 * 数值计算器：楼层系数 / 深度倍率 / 难度系数 / 成长曲线 / Boss公式（规格 2.2、2.3、2.1.1）。
 * 全部纯函数，配置来自 gameConfig.json，不在代码中硬编码数值。
 */
import { dataManager } from '../core/DataManager';
import type { Difficulty, MonsterDef, Quality } from '../types';
import { SeededRNG } from './MathUtils';

export interface ScaledMonsterStats {
  hp: number; atk: number; def: number; exp: number; gold: number;
}

export class StatCalculator {
  /** 楼层系数行（200+ 溢出公式） */
  static floorCoefficient(floor: number): { atk: number; def: number; hp: number; exp: number; gold: number } {
    const table = dataManager.config.floorCoefficients;
    const row = table.find(r => floor >= r.minFloor && floor <= r.maxFloor);
    if (row) return { atk: row.atk, def: row.def, hp: row.hp, exp: row.exp, gold: row.gold };
    const f = dataManager.config.floorOverflowFactor;
    return {
      atk: floor * f.atk,
      def: floor * f.def,
      hp: floor * f.hp,
      exp: floor * f.exp,
      gold: floor * f.gold,
    };
  }

  /** 深度倍率（深度5+ 溢出公式） */
  static depthMultiplier(depth: number): { monster: number; gold: number; exp: number; minQuality: Quality | 'none'; collectible: number } {
    const table = dataManager.config.depthTable;
    if (depth <= 0) {
      const r = table[0];
      return { monster: r.monster, gold: r.gold, exp: r.exp, minQuality: r.minQuality, collectible: r.collectible };
    }
    const row = table.find(r => r.depth === depth);
    if (row) return { monster: row.monster, gold: row.gold, exp: row.exp, minQuality: row.minQuality, collectible: row.collectible };
    const base = table[table.length - 1];
    const ov = dataManager.config.depthOverflow;
    const over = depth - 5;
    return {
      monster: base.monster + over * ov.monsterStep,
      gold: base.gold + over * ov.goldStep,
      exp: base.exp + over * ov.expStep,
      minQuality: 'epic',
      collectible: base.collectible + over * ov.collectibleStep,
    };
  }

  /** 怪物实际属性 = 基础 × 楼层系数 × 深度倍率 × 难度系数（规格 2.3.2） */
  static monsterStats(
    def: MonsterDef,
    floor: number,
    depth: number,
    difficulty: Difficulty,
    varianceSeed?: number,
    isElite = false,
    endlessFloor = 0,
  ): ScaledMonsterStats {
    const cfg = dataManager.config;
    // 教学层怪物：固定安全值，不受任何倍率影响
    if (floor === dataManager.world.tutorial.floorId) {
      return { hp: def.baseHp, atk: def.baseAtk, def: def.baseDef, exp: def.baseExp, gold: def.baseGold };
    }
    const fc = this.floorCoefficient(floor);
    const dm = this.depthMultiplier(depth);
    const diff = dataManager.getDifficulty(difficulty);
    const monMul = (diff?.monsterMultiplier ?? 1) * (1 + endlessFloor * cfg.endless.difficultyLinkPerFloor);
    const eliteMul = isElite ? cfg.endless.eliteStatMultiplier : 1;

    // Roguelike ±10% 属性浮动（种子决定，可重现）
    let variance = 1;
    if (varianceSeed !== undefined) {
      const r = new SeededRNG(varianceSeed);
      variance = r.randFloat(0.9, 1.1);
    }

    return {
      hp: Math.max(1, Math.round(def.baseHp * fc.hp * dm.monster * 1.2 * monMul * eliteMul * variance)),
      atk: Math.max(1, Math.round(def.baseAtk * fc.atk * dm.monster * monMul * eliteMul * variance * (1 + endlessFloor * cfg.endless.monsterAtkPerFloor))),
      def: Math.max(0, Math.round(def.baseDef * fc.def * dm.monster * 0.9 * monMul * eliteMul * variance * (1 + endlessFloor * cfg.endless.monsterDefPerFloor))),
      exp: Math.max(1, Math.round(def.baseExp * fc.exp * dm.exp * (diff?.expMultiplier ?? 1) * eliteMul * variance * (1 + endlessFloor * cfg.endless.monsterHpPerFloor))),
      gold: Math.max(1, Math.round(def.baseGold * fc.gold * dm.gold * (diff?.goldMultiplier ?? 1) * eliteMul * variance)),
    };
  }

  /** Boss属性公式（规格 2.1.2） */
  static bossStats(
    def: MonsterDef,
    floor: number,
    difficulty: Difficulty,
    endlessFloor = 0,
  ): ScaledMonsterStats {
    const cfg = dataManager.config.boss;
    const fc = this.floorCoefficient(floor);
    const diff = dataManager.getDifficulty(difficulty);
    const diffBoss = (diff?.bossMultiplier ?? 1) * (diff?.monsterMultiplier ?? 1);
    const endlessAtk = 1 + endlessFloor * dataManager.config.endless.bossAtkPerFloor;
    const endlessDef = 1 + endlessFloor * dataManager.config.endless.bossDefPerFloor;
    const endlessHp = 1 + endlessFloor * dataManager.config.endless.bossHpPerFloor;

    return {
      hp: Math.round(def.baseHp * fc.hp * (cfg.hpBase + floor / 10) * diffBoss * endlessHp),
      atk: Math.round(def.baseAtk * fc.atk * (cfg.atkBase + floor / 20) * diffBoss * endlessAtk),
      def: Math.round(def.baseDef * fc.def * (cfg.defBase + floor / 30) * diffBoss * endlessDef),
      exp: Math.round(def.baseExp * fc.exp * cfg.expMultiplier * (diff?.expMultiplier ?? 1) * (1 + endlessFloor * dataManager.config.endless.rewardBonus)),
      gold: Math.round(def.baseGold * fc.gold * cfg.goldMultiplier * (diff?.goldMultiplier ?? 1) * (1 + endlessFloor * dataManager.config.endless.rewardBonus)),
    };
  }

  /** Boss魂晶奖励 */
  static bossSoul(floor: number, endlessFloor = 0): number {
    const cfg = dataManager.config.boss;
    return cfg.soulBase + Math.floor(floor / 5) + (endlessFloor > 0 ? 2 : 0);
  }

  /** 升级所需经验：level*120 + level^1.5*15（规格 2.2.2） */
  static expToNextLevel(level: number): number {
    const f = dataManager.config.expFormula;
    return Math.floor(level * f.linear + Math.pow(level, f.powerExp) * f.power + f.base);
  }

  /** 某等级升级成长 */
  static growthForLevel(level: number): { hp: number; attack: number; defense: number } {
    const row = dataManager.config.growthTable.find(g => level >= g.minLevel && level <= g.maxLevel)
      ?? dataManager.config.growthTable[dataManager.config.growthTable.length - 1];
    return { hp: row.hp, attack: row.attack, defense: row.defense };
  }

  /** 综合战力（规格 2.1.2 防速通检测） */
  static combatPower(c: { attack: number; defense: number; maxHp: number }, equipBonus = 0, collectibleBonus = 0): number {
    return Math.round(c.attack * 1.5 + c.defense * 1.2 + c.maxHp / 10 + equipBonus + collectibleBonus);
  }
}
