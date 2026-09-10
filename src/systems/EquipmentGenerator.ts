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
  AccessoryStat, AffixInstance, Equipment, EquipSlot, Quality,
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

  /** 生成一件装备（opts.depth：房间深度，品质下限随深度提升，P0-1；缺省不生效） */
  generate(source: Equipment['source'], opts: { floorId?: number; forcedQuality?: Quality; slot?: EquipSlot; depth?: number } = {}): Equipment {
    const player = Player.getInstance();
    const floorId = opts.floorId ?? player.state.currentFloor;
    let quality = opts.forcedQuality ?? this.rollQuality(floorId);
    if (!opts.forcedQuality && opts.depth !== undefined && opts.depth > 1) {
      quality = this.applyDepthQualityFloor(quality, opts.depth);
    }
    const slot: EquipSlot = opts.slot ?? this.rollSlot();
    const level = this.rollEquipLevel(player.state.level, floorId);

    // 基础数值（武器=攻击 / 胸甲=防御 / 饰品=暴击或闪避百分点）
    const value = this.rollBaseValue(slot, quality, level);
    const attack = slot === 'weapon' ? value : 0;
    const defense = slot === 'armor' ? value : 0;
    const accessoryStat = slot === 'accessory' ? this.rollAccessoryStat() : undefined;

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
      accessoryStat,
      accessoryValue: accessoryStat ? value : undefined,
      sellPrice,
      buyPrice,
      source,
    };
  }

  /** 槽位掷骰（配置驱动：武器/胸甲/饰品；缺省回退 50/50 无饰品） */
  private rollSlot(): EquipSlot {
    const w = dataManager.equipment.slotWeights;
    if (!w) return rng.chance(0.5) ? 'weapon' : 'armor';
    const entries = Object.entries(w).filter(([, v]) => v > 0) as [EquipSlot, number][];
    if (entries.length === 0) return 'weapon';
    return rng.pickWeighted(entries, ([, v]) => v)[0];
  }

  /** 饰品主属性掷骰（暴击 / 闪避） */
  private rollAccessoryStat(): AccessoryStat {
    const w = dataManager.equipment.accessoryStatWeights ?? { crit: 50, dodge: 50 };
    const entries = Object.entries(w).filter(([, v]) => v > 0) as [AccessoryStat, number][];
    if (entries.length === 0) return 'crit';
    return rng.pickWeighted(entries, ([, v]) => v)[0];
  }

  /** 教学关固定基础装备（破烂铁剑） */
  tutorialWeapon(): Equipment {
    return this.generate('tutorial', { forcedQuality: 'poor', slot: 'weapon', floorId: 1 });
  }

  /**
   * 深度品质下限（P0-1）：深度每 +2 品质下限提升 1 档（基准为破烂），下限封顶史诗。
   * 最终品质 = max(掷骰品质, 深度下限)。
   */
  private applyDepthQualityFloor(quality: Quality, depth: number): Quality {
    const order = dataManager.equipment.qualityOrder as Quality[];
    const epicIdx = order.indexOf('epic');
    const floorIdx = Math.min(Math.floor((depth - 1) / 2), epicIdx);
    return order[Math.max(order.indexOf(quality), floorIdx)];
  }

  // ============ 铁匠服务（BlacksmithPanel 调用） ============

  /** 重铸词条：同品质同等级重掷词条与命名（保底：poor/common 无词条则无变化） */
  reforge(e: Equipment): Equipment {
    return this.rebuild(e, { affixes: this.rollAffixes(e.quality, e.level) });
  }

  /** 锤炼升级：等级 +1（上限50），基础值与词条按新等级重掷 */
  upgradeLevel(e: Equipment): Equipment | null {
    if (e.level >= 50) return null;
    const level = e.level + 1;
    return this.rebuild(e, {
      level,
      value: this.rollBaseValue(e.slot, e.quality, level),
      affixes: this.rollAffixes(e.quality, level),
    });
  }

  /** 淬火提品质：向上一档（仅限史诗以下，稀有可到史诗）；到顶返回 null */
  upgradeQuality(e: Equipment): Equipment | null {
    const order = dataManager.equipment.qualityOrder as Quality[];
    const i = order.indexOf(e.quality);
    const next = order[i + 1];
    if (!next || i + 1 > order.indexOf('epic')) return null;
    return this.rebuild(e, {
      quality: next,
      value: this.rollBaseValue(e.slot, next, e.level),
      affixes: this.rollAffixes(next, e.level),
    });
  }

  /** 以原装备为基底重建（保留 id/slot/source，可覆盖品质/等级/基础值/词条，并重算名称与价格） */
  private rebuild(
    e: Equipment,
    over: { quality?: Quality; level?: number; value?: number; affixes?: AffixInstance[] },
  ): Equipment {
    const quality = over.quality ?? e.quality;
    const level = over.level ?? e.level;
    const value = over.value
      ?? (e.slot === 'weapon' ? e.attack : e.slot === 'armor' ? e.defense : (e.accessoryValue ?? 0));
    const affixes = over.affixes ?? e.affixes;
    const q = dataManager.equipment.quality[quality];
    const name = this.buildName(q.prefix, e.baseName, affixes);
    const sellPrice = Math.round(q.basePrice * (1 + level * 0.05) * (1 + affixes.length * 0.15));
    const rule = dataManager.equipment.buyPriceRule;
    const buyPrice = Math.max(rule.min, Math.min(rule.max, Math.round(sellPrice * rule.sellMultiplier)));
    return {
      ...e,
      name, level, quality, affixes,
      attack: e.slot === 'weapon' ? value : 0,
      defense: e.slot === 'armor' ? value : 0,
      accessoryValue: e.slot === 'accessory' ? value : undefined,
      sellPrice, buyPrice,
    };
  }

  /** 基础数值：等级段×品质范围；空缺(null)回退到更低的可用品质；神话=传说×1.43。
   *  饰品为百分点（一位小数，前期约 1% 起，随品质与等级成长）。 */
  private rollBaseValue(slot: EquipSlot, quality: Quality, level: number): number {
    const tables = dataManager.equipment;
    const table = slot === 'weapon' ? tables.weaponTable
      : slot === 'armor' ? tables.armorTable
      : tables.accessoryTable;
    const row = table.find(r => level >= r.minEquipLevel && level <= r.maxEquipLevel)
      ?? table[table.length - 1];
    const values = row.values as Record<string, [number, number] | null>;
    let range = values[quality] ?? null;
    if (!range && quality === 'mythic') {
      const leg = values['legendary'];
      if (leg) {
        const f = tables.mythicFromLegendary;
        range = slot === 'accessory'
          ? [this.dec1(leg[0] * f), this.dec1(leg[1] * f)]
          : [Math.round(leg[0] * f), Math.round(leg[1] * f)];
      }
    }
    // 空缺品质回退：向更低品质寻找
    const order = tables.qualityOrder;
    let qi = order.indexOf(quality);
    while (!range && qi > 0) {
      qi -= 1;
      range = values[order[qi]] ?? null;
    }
    if (!range) range = slot === 'accessory' ? [0.5, 1] : [1, 2];
    if (slot === 'accessory') {
      // 百分点取一位小数（整数化会把手感压成 0/1 跳变）
      return this.dec1(range[0] + Math.random() * (range[1] - range[0]));
    }
    return rng.randInt(range[0], range[1]);
  }

  /** 保留一位小数 */
  private dec1(v: number): number { return Math.round(v * 10) / 10; }

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
    const names = dataManager.equipment.baseNames;
    const table = (slot === 'weapon' ? names.weapon : slot === 'armor' ? names.armor : names.accessory)
      ?? names.weapon;
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
