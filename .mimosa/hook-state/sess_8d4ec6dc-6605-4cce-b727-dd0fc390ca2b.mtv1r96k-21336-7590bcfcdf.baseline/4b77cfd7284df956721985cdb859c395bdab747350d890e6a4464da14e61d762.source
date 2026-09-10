/**
 * 装备生成器（规格 模块F）：品质roll、等级计算、词条生成、名称合成、定价。
 * 三维模型：等级 + 品质(6档) + 词条(13种)。
 */
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import type { Affix, AffixDef, Equipment, EquipType, EquipSlot, Quality } from '../types';
import { QUALITY_ORDER } from './RoguelikeSystem';
import { rng } from '../utils/MathUtils';
import { IdGenerator } from '../utils/IdGenerator';

const QUALITY_INDEX: Record<Quality, number> = {
  common: 0, uncommon: 1, rare: 2, epic: 3, legendary: 4, mythic: 5,
};

export class EquipmentGenerator {
  private static instance: EquipmentGenerator;

  private constructor() {}

  static getInstance(): EquipmentGenerator {
    if (!EquipmentGenerator.instance) {
      EquipmentGenerator.instance = new EquipmentGenerator();
    }
    return EquipmentGenerator.instance;
  }

  // ============ 品质Roll（规格 F.2） ============

  rollQuality(floor: number, depth: number, minQuality: Quality = 'common'): Quality {
    const q = dataManager.config.quality;
    const factor = dataManager.config.qualityFloorFactor;
    const havenOnly = floor > 100;
    const weights: Record<Quality, number> = {
      common: q.common.probability * Math.max(0.3, 1 - floor / 150),
      uncommon: q.uncommon.probability * (1 + floor / 300),
      rare: q.rare.probability * (1 + floor / 200 + depth / 50),
      epic: q.epic.probability * (1 + floor / 100 + depth / 30),
      legendary: q.legendary.probability * (1 + floor / 60 + depth / 20),
      mythic: havenOnly ? q.mythic.probability * (1 + factor.mythic.floor + depth / 10) : 0,
    };
    let pool = (Object.keys(weights) as Quality[]).filter(k => QUALITY_INDEX[k] >= QUALITY_INDEX[minQuality]);
    if (pool.length === 0) pool = [minQuality];
    return rng.pickWeighted(pool, k => weights[k]);
  }

  /** 品质提升N级（幸运币/Boss传奇词缀用） */
  upgradeQuality(quality: Quality, steps: number): Quality {
    const idx = Math.min(QUALITY_ORDER.length - 1, QUALITY_INDEX[quality] + steps);
    return QUALITY_ORDER[idx];
  }

  // ============ 词条（规格 F.4） ============

  getAvailableAffixes(quality: Quality): AffixDef[] {
    return dataManager.affixDefs.filter(a => QUALITY_INDEX[quality] >= QUALITY_INDEX[a.minQuality]);
  }

  getAffixCount(quality: Quality, level: number, depth: number): number {
    const q = dataManager.config.quality[quality];
    const bonus = dataManager.config.affixCountBonus[quality];
    let count = q.affixCount + q.affixBonus;
    if (level >= bonus.levelThreshold) count += Math.floor(level / 15);
    if (depth >= bonus.depthThreshold) count += Math.floor(depth / 3);
    const maxByQuality = quality === 'legendary' ? 7 : quality === 'mythic' ? 9 : quality === 'epic' ? 5 : quality === 'rare' ? 3 : 1;
    return Math.max(0, Math.min(count, maxByQuality));
  }

  private rollAffixValue(def: AffixDef, level: number): number {
    // 等级越高数值越偏向上限
    const t = Math.min(1, level / 60);
    const bias = rng.randFloat(0, 1) * (1 - t * 0.4) + rng.randFloat(0, 1) * t * 1.4;
    const base = def.min + (def.max - def.min) * MathUtils_clamp01(bias / 2 + 0.25);
    const scaled = def.perLevel > 0 ? base * (1 + level * def.perLevel) : base;
    return def.format === 'pct'
      ? Math.round(scaled * 10) / 10
      : Math.max(1, Math.round(scaled));
  }

  // ============ 主生成函数（规格 F.5） ============

  generate(opts: {
    baseItemId: string;
    floor: number;
    depth?: number;
    qualityFloor?: Quality;
    forcedLevel?: number;
    source?: Equipment['source'];
    minQuality?: Quality;
  }): Equipment {
    const base = dataManager.getTemplate(opts.baseItemId) ?? dataManager.templates[0];
    const depth = opts.depth ?? 0;
    const difficultyId = Player.hasInstance() ? Player.getInstance().currentDifficulty : 'normal';
    const difficulty = dataManager.getDifficulty(difficultyId);
    const qualityBonusLevels = difficulty?.qualityBonus ?? 0;

    // 1. 品质
    const quality = opts.qualityFloor
      ? this.maxQuality(opts.qualityFloor, opts.minQuality ?? 'common')
      : this.rollQuality(opts.floor, depth, opts.minQuality ?? 'common');

    // 2. 等级（玩家等级×0.5 + 楼层×1.4 + 深度×0.6 + 随机浮动，含难度品质加成）
    const playerLevel = Player.hasInstance() ? Player.getInstance().level : 1;
    const rawLevel = opts.forcedLevel
      ?? playerLevel * 0.5 + opts.floor * 1.4 + depth * 0.6 + rng.randInt(-3, 4);
    const level = MathUtils_clampInt(Math.floor(rawLevel) + qualityBonusLevels, 1, 150);

    // 3. 基础属性（等级与品质倍率）
    const qualityMul = dataManager.config.quality[quality].statMultiplier;
    const baseAttack = Math.round((base.attack || 0) * (1 + level * 0.08) * qualityMul);
    const baseDefense = Math.round((base.defense || 0) * (1 + level * 0.08) * qualityMul);
    const baseHpBonus = Math.round((base.hpBonus || 0) * (1 + level * 0.06) * qualityMul);

    // 4. 词条
    const affixCount = this.getAffixCount(quality, level, depth);
    const available = this.getAvailableAffixes(quality);
    const usedTypes = new Set<string>();
    const affixes: Affix[] = [];
    for (let i = 0; i < affixCount && available.length > 0; i++) {
      // 主属性权重×2（规格 F.4 生成规则2）
      const def = rng.pickWeighted(available, a => (usedTypes.has(a.type) ? 0 : a.category === 'primary' ? a.weight * 2 : a.weight));
      if (usedTypes.has(def.type)) break;
      usedTypes.add(def.type);
      const value = this.rollAffixValue(def, level);
      affixes.push({
        id: IdGenerator.next('affix'),
        type: def.type,
        name: def.affixName,
        value,
        description: def.description,
      });
    }

    // 5. 最终属性（固定值 + 百分比）
    const sum = (type: string) => affixes.filter(a => a.type === type).reduce((s, a) => s + a.value, 0);
    const finalAttack = Math.round((baseAttack + sum('flat_atk')) * (1 + sum('pct_atk') / 100));
    const finalDefense = Math.round((baseDefense + sum('flat_def')) * (1 + sum('pct_def') / 100));
    const finalHpBonus = baseHpBonus + sum('flat_hp');

    // 6. 价格（规格 F.5 第7步 + G.2 回收价表）
    const qCfg = dataManager.config.quality[quality];
    const levelFactor = 1 + level * 0.02;
    const affixFactor = 1 + affixes.length * 0.1;
    const basePrice = base.sellPrice || 10;
    const sellPrice = Math.max(1, Math.floor(basePrice * qCfg.sellMultiplier * levelFactor * affixFactor * rng.randFloat(0.9, 1.1)));
    const buyPrice = Math.max(sellPrice + 1, Math.floor(sellPrice * qCfg.buyMultiplier));

    // 7. 名称：[词缀]·[基础名]（规格 10.3.3 格式，词缀名即 affixName）
    const name = affixes.length > 0
      ? `${affixes[0].name}·${base.name}`
      : base.name;

    return {
      id: IdGenerator.equipmentId(),
      baseItemId: base.id,
      name,
      type: base.type,
      slot: base.slot,
      level,
      quality,
      affixes,
      baseAttack,
      baseDefense,
      baseHpBonus,
      finalAttack,
      finalDefense,
      finalHpBonus,
      sellPrice,
      buyPrice,
      generatedAt: new Date().toISOString(),
      source: opts.source ?? 'chest',
    };
  }

  private maxQuality(a: Quality, min: Quality): Quality {
    return QUALITY_INDEX[a] >= QUALITY_INDEX[min] ? a : min;
  }

  /** 按楼层随机挑选基础模板（类型偏好可指定） */
  pickTemplate(floor: number, preferType?: EquipType): string {
    const pool = dataManager.templates.filter(t => floor >= t.spawnFloorMin && (!preferType || t.type === preferType));
    const usable = pool.length > 0 ? pool : dataManager.templates;
    return rng.pick(usable).id;
  }

  /** 装备对比提示（回收价展示用） */
  slotLabel(slot: EquipSlot): string {
    const map: Record<EquipSlot, string> = {
      main_hand: '主手', off_hand: '副手', head: '头部', body: '身体', feet: '脚部', accessory_1: '饰品1', accessory_2: '饰品2',
    };
    return map[slot];
  }
}

function MathUtils_clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

function MathUtils_clampInt(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.floor(v)));
}
