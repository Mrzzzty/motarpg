/**
 * 数值计算器：楼层锚点插值（怪物属性/金币/经验）、玩家成长、升级经验。
 */
import type { MonsterDef, MonsterStats } from '../types';
import { dataManager } from '../core/DataManager';
import type { GameConfig } from '../core/DataManager';

export class StatCalculator {
  private static instance: StatCalculator;
  private constructor() {}
  static getInstance(): StatCalculator {
    if (!StatCalculator.instance) StatCalculator.instance = new StatCalculator();
    return StatCalculator.instance;
  }

  private get anchors(): GameConfig['floorAnchors'] { return dataManager.config.floorAnchors; }

  /** 楼层锚点分段线性插值；超出末锚点后按 overflow 比例增长 */
  anchorValue(series: number[], floorId: number, overflowRate: number): number {
    const floors = this.anchors.floors;
    const last = floors.length - 1;
    if (floorId <= floors[0]) return series[0];
    if (floorId >= floors[last]) {
      const over = floorId - floors[last];
      return series[last] * Math.pow(1 + overflowRate, over);
    }
    for (let i = 0; i < last; i++) {
      if (floorId >= floors[i] && floorId <= floors[i + 1]) {
        const t = (floorId - floors[i]) / (floors[i + 1] - floors[i]);
        return series[i] + (series[i + 1] - series[i]) * t;
      }
    }
    return series[last];
  }

  /** 怪物战斗属性：楼层基准 × 怪物倍率 × 精英加成 */
  monsterStats(def: MonsterDef, floorId: number, isElite: boolean): MonsterStats {
    const cfg = dataManager.config;
    const a = this.anchors;
    const round = (v: number) => Math.max(1, Math.round(v));
    const isBoss = def.category === 'boss';
    let hp = this.anchorValue(a.hp, floorId, a.overflowPerFloor.hp) * def.hpMul;
    let atk = this.anchorValue(a.atk, floorId, a.overflowPerFloor.atk) * def.atkMul;
    let defv = this.anchorValue(a.def, floorId, a.overflowPerFloor.def) * def.defMul;
    let exp = this.anchorValue(a.exp, floorId, a.overflowPerFloor.exp) * def.expMul;
    let gold = this.anchorValue(a.gold, floorId, a.overflowPerFloor.gold) * def.goldMul;

    if (isBoss) {
      // Boss在楼层基准上额外放大（bossStatBonus.hp 为乘法加成基数）
      hp *= 1 + cfg.bossStatBonus.hp;
      atk *= 1 + cfg.bossStatBonus.atk;
      defv *= 1 + cfg.bossStatBonus.def;
    } else if (isElite) {
      hp *= dataManager.monsters.eliteStatMultiplier;
      atk *= dataManager.monsters.eliteStatMultiplier;
      defv *= dataManager.monsters.eliteStatMultiplier;
      gold *= dataManager.monsters.eliteGoldMultiplier;
      exp *= dataManager.monsters.eliteExpMultiplier;
    }

    return {
      name: isElite ? `精英·${def.name}` : def.name,
      hp: round(hp),
      attack: round(atk),
      defense: round(defv),
      exp: round(exp),
      gold: round(gold),
      isElite,
      isBoss,
    };
  }

  /** 玩家到达某等级时的基础属性（不含装备） */
  playerBaseAt(level: number): { maxHp: number; attack: number; defense: number } {
    const cfg = dataManager.config;
    const base = cfg.playerBase;
    let hp = base.maxHp;
    let atk = base.attack;
    let def = base.defense;
    for (let lv = 2; lv <= level; lv++) {
      const row = cfg.growthTable.find(g => lv >= g.minLevel && lv <= g.maxLevel)
        ?? cfg.growthTable[cfg.growthTable.length - 1];
      hp += row.hp;
      atk += row.attack;
      def += row.defense;
    }
    return { maxHp: hp, attack: atk, defense: def };
  }

  /** 升到下一级所需经验 */
  expToNext(level: number): number {
    const { base, power } = dataManager.config.expFormula;
    return Math.round(base * Math.pow(level, power));
  }
}
