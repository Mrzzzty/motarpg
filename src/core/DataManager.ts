/**
 * 数据管理器：统一加载 data/ 目录下所有 JSON 配置（数据与代码分离）。
 * 静态导入：Vite 构建期打包、esbuild 无头测试可运行、运行期零请求。
 */
import type {
  AffixDef, GameSettings, MonsterDef, NpcDef, PotionDef, QuestDef, RelicDef,
} from '../types';
import gameConfigJson from '../data/gameConfig.json';
import mapGenerationJson from '../data/mapGeneration.json';
import monstersJson from '../data/monsters.json';
import potionsJson from '../data/potions.json';
import equipmentTablesJson from '../data/equipmentTables.json';
import npcsJson from '../data/npcs.json';
import questsJson from '../data/quests.json';
import economyJson from '../data/economy.json';
import eventsJson from '../data/events.json';
import textsJson from '../data/texts.json';
import settingsJson from '../data/settings.json';
import relicsJson from '../data/relics.json';

/** 内容数量区间（房间设计原则完整文档 4.1 / 五） */
export interface ContentBand {
  /** 适用深度上限（含），取第一个满足 depth <= maxDepth 的档位 */
  maxDepth: number;
  monsters: number[];
  elites: number[];
  chests: number[];
  potions: number[];
}

/** 地图生成配置（mapGeneration.json） */
export interface MapGenConfig {
  cellSpacingX: number;
  cellSpacingY: number;
  gridRadius: number;
  floorRoomCounts: { minFloor: number; maxFloor: number; min: number; max: number }[];
  maxRooms: number;
  bossFloorInterval: number;
  initialFloor: number;
  roomSpecs: Record<string, { width: number | number[]; height: number | number[] }>;
  minRoomWidth: number;
  minRoomHeight: number;
  tension: {
    weights: Record<string, number>;
    forcePositiveAt: number;
    forceNegativeAt: number;
  };
  merchantLimit: { fewMaxRooms: number; fewCount: number; manyCount: number };
  /** 女巫酿药间出现约束：最早楼层 + 出现间隔（每 interval 层一间，落在 5~8 层区间内） */
  witchLimit: { minFloor: number; interval: number };
  /** 铁匠铺出现约束：最早楼层 + 出现间隔（错开女巫楼层） */
  blacksmithLimit: { minFloor: number; interval: number };
  path: { maxLengthDiff: number };
  corridor: { extraChance: number; extraMax: number; adjacentManhattan: number };
  content: {
    monsterMinDistFromEntry: number;
    smallAreaMax: number;
    mediumAreaMax: number;
    /** 大房上限：内面积 > largeAreaMax 走 xlarge 密度档 */
    largeAreaMax: number;
    density: { small: number; medium: number; large: number; xlarge: number };
    chestRoomMin: number;
    chestRoomMax: number;
    otherRoomChestChance: number;
    eliteRoomEliteMin: number;
    eliteRoomEliteMax: number;
    bossRoomAddsMin: number;
    bossRoomAddsMax: number;
    /** 战斗房按深度（距起点房间数）的怪物/精英/宝箱/药水数量区间（房间设计原则文档 4.1） */
    combatByDepth: ContentBand[];
    eliteRoom: { elites: number[]; monsters: number[]; chests: number[]; potions: number[] };
    treasureRoom: { chests: number[]; monsters: number[]; potions: number[] };
    merchantRoom: { chests: number[]; potions: number[] };
    /** 女巫酿药间：药架数量区间（药水为商店库存，不落地；文档 4.1） */
    witchRoom: { shelves: number[] };
    bossRoom: { elites: number[]; chests: number[]; potions: number[] };
    exitRoom: { guards: number[]; chests: number[]; potions: number[] };
    startRoom: { potions: number[] };
    /** 守卫规则：宝箱/楼梯周围 N 格内必须有怪（验证清单） */
    guard: { chestRadius: number; stairRadius: number };
    /** 挡路屏障：怪物不足时用柱子补满整条线 */
    barrier: { fillWithPillars: boolean };
    /** 按房间类型的火把数量区间（放房间四角 / 楼梯两侧） */
    roomTorches: Record<string, number[]>;
    /** 陈设填充（反「大而空」）：按内面积给陈设预算 */
    furnish: {
      /** 每 N 格内面积保底 1 个火把（所有房型配光，避免大片暗空地面） */
      torchPerArea: number;
      /** 单房火把上限 */
      torchMax: number;
      /** 列柱所需的最小内宽 / 内高 */
      colonnadeMinInnerW: number;
      colonnadeMinInnerH: number;
      /** 长墙列柱间距（格） */
      colonnadeSpacing: number;
      /** 单房列柱上限 */
      colonnadeMax: number;
      /** 入口 → 房间中心 的引导地毯 */
      guideCarpet: boolean;
    };
    /** 风险-收益分层：风险越高 → 守军越强、奖励越好（引导玩家权衡路线） */
    risk: {
      /** 侧室（支线房间）风险分值加成（最重，绕路必须有回报） */
      sideBonus: number;
      /** 精英 / Boss 房风险分值加成（房型本身更凶险） */
      eliteBonus: number;
      /** 内面积 ≥ 此值 +1 风险分值 */
      areaBonusAt: number;
      /** 房间深度 ≥ 此值 +1 风险分值（离起点越远越险） */
      depthBonusAt: number;
      /** 楼层 ≥ 此值整体 +1 风险级（高层更险） */
      floorBonusEvery: number;
      /** 风险级上限 */
      max: number;
      /** 各风险级的收益倍率（金币 / 装备品质 / 掉率） */
      rewardMul: number[];
      /** 各风险级把普通宝箱升级为「大宝箱」的概率 */
      vaultChance: number[];
      /** 各风险级的遗物掉率倍率 */
      relicMul: number[];
    };
  };
  decor: {
    torchCorridorEvery: number;
    pillarMinRoomWidth: number;
    carpetRooms: string[];
  };
  /** 悬崖地形（编码 4）：不通行深渊的生成约束 */
  cliff: {
    /** 最早出现楼层 */
    minFloor: number;
    /** 每个候选房间的生成概率 */
    chance: number;
    /** 房间内面积下限（太小不挖） */
    minInnerArea: number;
    /** 单块深渊格数区间 */
    patchMin: number;
    patchMax: number;
  };
  generation: { maxAttempts: number };
}

/** 核心数值配置（gameConfig.json） */
export interface GameConfig {
  playerBase: { maxHp: number; attack: number; defense: number; critRate: number; dodgeRate: number };
  expFormula: { base: number; power: number };
  growthTable: { minLevel: number; maxLevel: number; hp: number; attack: number; defense: number }[];
  floorAnchors: {
    floors: number[];
    hp: number[];
    atk: number[];
    def: number[];
    exp: number[];
    gold: number[];
    overflowPerFloor: { hp: number; atk: number; def: number; exp: number; gold: number };
  };
  bossStatBonus: { hp: number; atk: number; def: number };
  battle: {
    damageJitter: number; critMultiplier: number; maxTurns: number; minDamage: number;
    /** 每场战斗的「用药资格」数（一次资格 = 一次补满生命的机会，同次机会内不限瓶数） */
    potionUsesPerBattle: number;
  };
  chestRewards: {
    goldBands: { minFloor: number; maxFloor: number; min: number; max: number }[];
    equipmentChance: number;
    potionChance: number;
    goldAlways: boolean;
  };
  monsterDrops: { equipmentChance: number; potionChance: number };
  revive: { goldPenaltyRate: number; hpRestorePct: number };
  merchant: {
    potionCountMin: number; potionCountMax: number;
    keyPriceBase: number; keyPricePer10Floors: number;
    keyCountMin: number; keyCountMax: number;
    equipmentCountMin: number; equipmentCountMax: number;
  };
  /** 女巫：特殊药水交易 + 治疗泉价格 */
  witch: {
    potionCountMin: number; potionCountMax: number;
    /** 治疗泉基础价格 + 每层递增 */
    fountainCostBase: number; fountainCostPerFloor: number;
  };
  render: {
    tileWidth: number; tileHeight: number; vignetteMax: number;
    maxLights: number; maxParticles: number; gridLineWidth: number;
    /** 房间环境陈设密度（0 = 关闭；1 = 标准）；见 ThreeDecor */
    roomDecorDensity: number;
  };
  /** 后期特效：辉光(Bloom) / 暗角(vignette, 强度≤0.3 保持明亮) / 颜色校正 */
  postProcess: {
    bloom: { enabled: boolean; strength: number; radius: number; threshold: number };
    vignette: { enabled: boolean; strength: number; offset: number; darkness: number };
    adjustment: { enabled: boolean; gamma: number; contrast: number; saturation: number; brightness: number };
  };
  shadow: {
    staticAlpha: number; staticOffset: number;
    baseOffset: number; maxDynamic: number;
    /** 软阴影半影采样数（1=硬阴影，3~5=软阴影） */
    samples: number;
    /** 半影偏移（世界px，0=硬阴影） */
    penumbra: number;
    tyndall: { length: number; width: number; alpha: number; dustMin: number; dustMax: number };
  };
  heights: {
    player: number; monsterNormal: number; monsterElite: number; boss: number;
    chest: number; potion: number; torch: number; pillar: number; npc: number; stair: number; carpet: number;
    cauldron: number; shelf: number; fountain: number;
    wallByRoom: Record<string, number>;
    corridorWall: number;
  };
  raycast: { level: number };
  camera: { lerp: number; transitionMs: number; roomPaddingPx: number };
  /** 3D 相机机位（ThreeRenderer）：distance=水平后退，height=高度，fov=视场角 */
  camera3D: { fov: number; distance: number; height: number };
  hover: { showDelayMs: number; hideDelayMs: number; offsetX: number; offsetY: number };
  save: { key: string; version: string; autosaveDefault: boolean };
  input: { moveRepeatMs: number; moveBufferMs: number };
}

/** 装备数值表（equipmentTables.json，文档四） */
export interface EquipmentTables {
  qualityOrder: string[];
  quality: Record<string, {
    name: string; color: string; statMultiplier: number;
    affixCount: number; affixCountMax: number; sellMultiplier: number;
    affixExtra?: { atEquipLevel: number; add: number }[];
    prefix: string;
    basePrice: number;
  }>;
  qualityByFloor: { minFloor: number; maxFloor: number; weights: Record<string, number> }[];
  affixes: AffixDef[];
  weaponTable: { minEquipLevel: number; maxEquipLevel: number; values: Record<string, [number, number]> }[];
  armorTable: { minEquipLevel: number; maxEquipLevel: number; values: Record<string, [number, number]> }[];
  /** 饰品数值表（百分点，一位小数；同等级段×品质） */
  accessoryTable: { minEquipLevel: number; maxEquipLevel: number; values: Record<string, [number, number]> }[];
  /** 装备槽位掷骰权重（武器/胸甲/饰品） */
  slotWeights: Record<string, number>;
  /** 饰品主属性掷骰权重（暴击/闪避） */
  accessoryStatWeights: Record<string, number>;
  baseNames: {
    weapon: { minEquipLevel: number; maxEquipLevel: number; names: string[] }[];
    armor: { minEquipLevel: number; maxEquipLevel: number; names: string[] }[];
    accessory: { minEquipLevel: number; maxEquipLevel: number; names: string[] }[];
  };
  equipLevelFormula: { playerLevelFactor: number; floorFactor: number; randomMin: number; randomMax: number; min: number; max: number };
  affixSpecial: { mythicAffixCount: number };
  mythicFromLegendary: number;
  buyPriceRule: { sellMultiplier: number; min: number; max: number };
}

export interface MonstersFile {
  monsters: MonsterDef[];
  eliteStatMultiplier: number;
  eliteGoldMultiplier: number;
  eliteExpMultiplier: number;
}

/** 文案配置（texts.json） */
export interface TextsFile {
  roomNames: Record<string, string>;
  hints: Record<string, string>;
  titles: Record<string, string>;
  guidance: Record<string, string>;
  labels: Record<string, string>;
}

/** 遗物数据文件（relics.json，docs/遗物系统设计.md） */
export interface RelicsFile {
  rarityNames: Record<string, string>;
  rarityColors: Record<string, string>;
  /** 宝箱等通用渠道：各稀有度独立判定概率 */
  dropChances: Record<string, number>;
  /** Boss 击杀掉落概率（按稀有度） */
  bossDropChances: Record<string, number>;
  /** 精英怪掉落概率（按稀有度） */
  eliteDropChances: Record<string, number>;
  /** 遗物无售卖渠道：不再提供 merchantPrices（遗物只进不出） */
  /** 遗物图标占位映射（id → emoji 或图片路径） */
  icons?: Record<string, string>;
  relics: RelicDef[];
  combos: { id: string; name: string; requires: string[]; desc: string }[];
}

export class DataManager {
  private static instance: DataManager;
  private loaded = false;

  private constructor() {}
  static getInstance(): DataManager {
    if (!DataManager.instance) DataManager.instance = new DataManager();
    return DataManager.instance;
  }

  loadAll(): void {
    this.loaded = true; // 静态导入，数据随模块就绪
  }

  get config(): GameConfig { return gameConfigJson as GameConfig; }

  /** 药水素材图路径（public/img/p_<tier>.png；素材统一放 public/img，短文件名） */
  potionIconSrc(tier: string): string {
    return `img/p_${tier}.png`;
  }

  /** 药水素材 <img> 标签（UI 通用） */
  potionIconImg(tier: string, cls = 'potion-icon'): string {
    return `<img class="${cls}" src="${this.potionIconSrc(tier)}" alt="${tier}" draggable="false">`;
  }

  get mapGen(): MapGenConfig { return mapGenerationJson as MapGenConfig; }
  get monsters(): MonstersFile { return monstersJson as MonstersFile; }
  get potions(): { potions: PotionDef[] } { return potionsJson as unknown as { potions: PotionDef[] }; }
  get equipment(): EquipmentTables { return equipmentTablesJson as unknown as EquipmentTables; }
  get npcs(): { npcs: NpcDef[] } { return npcsJson as unknown as { npcs: NpcDef[] }; }
  get quests(): { quests: QuestDef[] } { return questsJson as unknown as { quests: QuestDef[] }; }
  get economy(): Record<string, unknown> { return economyJson as Record<string, unknown>; }
  get events(): { events: unknown[] } { return eventsJson as unknown as { events: unknown[] }; }
  get texts(): TextsFile { return textsJson as TextsFile; }
  get settings(): { defaults: GameSettings } { return settingsJson as unknown as { defaults: GameSettings }; }
  get relics(): RelicsFile { return relicsJson as unknown as RelicsFile; }

  getMonster(id: string): MonsterDef | undefined {
    return this.monsters.monsters.find(m => m.id === id);
  }
  getPotion(tier: string): PotionDef | undefined {
    return this.potions.potions.find(p => p.tier === tier);
  }
  getNpc(id: string): NpcDef | undefined {
    return this.npcs.npcs.find(n => n.id === id);
  }
  getQuest(id: string): QuestDef | undefined {
    return this.quests.quests.find(q => q.id === id);
  }
  getRelic(id: string): RelicDef | undefined {
    return this.relics.relics.find(r => r.id === id);
  }

  get isLoaded(): boolean { return this.loaded; }
}

export const dataManager = DataManager.getInstance();
