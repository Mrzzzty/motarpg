/**
 * 装备生成器（文档四）：
 * - 品质：7档，随楼层变化的概率表
 * - 装备等级 = floor(玩家等级×0.5 + 楼层×1.0 + rand(-2,3))，clamp 1-50
 * - 武器/防具数值：按等级段×品质取范围随机；防具约为武器的50-60%；神话=传说×1.43
 * - 词条：12种，按品质下限与装备等级取值，不重复，数量按品质（稀有≥20级+1、史诗≥15级+1、传说≥10级+1）
 * - 命名：[品质前缀][基础名][·词条1][·词条2]...
 * - 回收价 = 基础价(品质) × (1+等级×0.05) × (1+词条数×0.15)
 */
import type {
  AffixInstance, Equipment, EquipSlot, Quality,
} from '../types';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import { rng } from '../utils/MathUtils';
import { IdGenerator } from '../utils/IdGenerator';

const QUALITY_RANK: Record<Quality, number> = {
  poor: 0, common: 1, fine: 2, rare: 3, epic: 4, legendary: 5, mythic: 6,
};

export class EquipmentGenerator {
  private static instance: EquipmentGenerator;
  private constructor() {}
  static getInstance(): EquipmentGenerator {
    if (!EquipmentGenerator.instance) EquipmentGenerator.instance = new EquipmentGenerator();
    return EquipmentGenerator.instance;
  }

  /** 品质掷骰：随楼层变化的权重表 */
  rollQuality(floorId: number): Quality {
    const bands = dataManager.equipment.qualityByFloor;
    const band = bands.find(b => floorId >= b.minFloor && floorId <= b.maxFloor) ?? bands[bands.length - 1];
    const entries = Object.entries(band.weights) as [Quality, number][];
    return rng.pickWeighted(entries, ([, w]) => w)[0];
  }

  /** 装备等级公式 */
  rollEquipLevel(playerLevel: number, floorId: number): number {
    const f = dataManager.equipment.equipLevelFormula;
    const level = Math.floor(playerLevel * f.playerLevelFactor + floorId * f.floorFactor + rng.randInt(f.randomMin, f.randomMax));
    return Math.max(f.min, Math.min(f.max, level));
  }

  /** 生成一件装备 */
  generate(source: Equipment['source'], opts: { floorId?: number; forcedQuality?: Quality; slot?: EquipSlot } = {}): Equipment {
    const player = Player.getInstance();
    const floorId = opts.floorId ?? player.state.currentFloor;
    const quality = opts.forcedQuality ?? this.rollQuality(floorId);
    const slot: EquipSlot = opts.slot ?? (rng.chance(0.5) ? 'weapon' : 'armor');
    const level = this.rollEquipLevel(player.state.level, floorId);

    // 基础数值
    const value = this.rollBaseValue(slot, quality, level);
    const attack = slot === 'weapon' ? value : 0;
    const defense = slot === 'armor' ? value : 0;

    // 词条
    const affixes = this.rollAffixes(quality, level);

    const q = dataManager.equipment.quality[quality];
    const baseName = this.baseName(slot, level);
    const name = this.buildName(q.prefix, baseName, affixes);

    const sellPrice = Math.round(q.basePrice * (1 + level * 0.05) * (1 + affixes.length * 0.15));
    const rule = dataManager.equipment.buyPriceRule;
    const buyPrice = Math.max(rule.min, Math.min(rule.max, Math.round(sellPrice * rule.sellMultiplier)));

    return {
      id: IdGenerator.equipmentId(),
      slot,
      baseName,
      name,
      level,
      quality,
      affixes,
      attack,
      defense,
      sellPrice,
      buyPrice,
      source,
    };
  }

  /** 教学关固定基础装备（破烂铁剑） */
  tutorialWeapon(): Equipment {
    return this.generate('tutorial', { forcedQuality: 'poor', slot: 'weapon', floorId: 1 });
  }

  /** 基础数值：等级段×品质范围；空缺(null)回退到更低的可用品质；神话=传说×1.43 */
  private rollBaseValue(slot: EquipSlot, quality: Quality, level: number): number {
    const table = slot === 'weapon' ? dataManager.equipment.weaponTable : dataManager.equipment.armorTable;
    const row = table.find(r => level >= r.minEquipLevel && level <= r.maxEquipLevel)
      ?? table[table.length - 1];
    const values = row.values as Record<string, [number, number] | null>;
    let range = values[quality] ?? null;
    if (!range && quality === 'mythic') {
      const leg = values['legendary'];
      if (leg) {
        const mythicFactor = dataManager.equipment.mythicFromLegendary;
        range = [Math.round(leg[0] * mythicFactor), Math.round(leg[1] * mythicFactor)];
      }
    }
    // 空缺品质回退：向更低品质寻找
    const order = dataManager.equipment.qualityOrder;
    let qi = order.indexOf(quality);
    while (!range && qi > 0) {
      qi -= 1;
      range = values[order[qi]] ?? null;
    }
    if (!range) range = [1, 2];
    return rng.randInt(range[0], range[1]);
  }

  /** 词条生成：数量按品质（含高等级加成），不重复，品质下限过滤 */
  private rollAffixes(quality: Quality, level: number): AffixInstance[] {
    const q = dataManager.equipment.quality[quality];
    let count = q.affixCount;
    if (q.affixExtra) {
      for (const extra of q.affixExtra) {
        if (level >= extra.atEquipLevel) count += extra.add;
      }
    }
    count = Math.min(count, q.affixCountMax);
    if (quality === 'mythic') count = dataManager.equipment.affixSpecial.mythicAffixCount;

    const pool = dataManager.equipment.affixes.filter(a => QUALITY_RANK[quality] >= QUALITY_RANK[a.minQuality as Quality]);
    if (pool.length === 0) return [];
    const picked = rng.shuffle(pool).slice(0, count);

    return picked.map(def => {
      const band = def.bands.find(b => level <= b.maxEquipLevel) ?? def.bands[def.bands.length - 1];
      const value = rng.randInt(band.min, band.max);
      return { type: def.type, name: def.name, value, isPercent: def.isPercent };
    });
  }

  private baseName(slot: EquipSlot, level: number): string {
    const table = slot === 'weapon' ? dataManager.equipment.baseNames.weapon : dataManager.equipment.baseNames.armor;
    const row = table.find(r => level >= r.minEquipLevel && level <= r.maxEquipLevel) ?? table[table.length - 1];
    return row.names[0];
  }

  /** 命名：[品质前缀][基础名][·词条1][·词条2]（普通无前缀） */
  private buildName(prefix: string, baseName: string, affixes: AffixInstance[]): string {
    let name = prefix ? `${prefix}${baseName}` : baseName;
    for (const a of affixes) name += `·${a.name}`;
    return name;
  }
}
