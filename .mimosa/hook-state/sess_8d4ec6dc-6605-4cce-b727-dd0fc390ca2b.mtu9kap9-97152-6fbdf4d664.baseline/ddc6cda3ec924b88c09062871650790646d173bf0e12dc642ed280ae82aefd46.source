/**
 * 数据管理器：统一加载 data/ 目录下所有 JSON 配置（数据与代码分离）。
 * 静态导入：Vite 构建期打包、esbuild 无头测试可运行、运行期零请求。
 */
import type {
  AffixDef, GameSettings, MonsterDef, NpcDef, PotionDef, QuestDef,
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
  };
  decor: {
    torchCorridorEvery: number;
    pillarMinRoomWidth: number;
    carpetRooms: string[];
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
  battle: { damageJitter: number; critMultiplier: number; maxTurns: number; minDamage: number };
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
  baseNames: {
    weapon: { minEquipLevel: number; maxEquipLevel: number; names: string[] }[];
    armor: { minEquipLevel: number; maxEquipLevel: number; names: string[] }[];
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

  get isLoaded(): boolean { return this.loaded; }
}

export const dataManager = DataManager.getInstance();
