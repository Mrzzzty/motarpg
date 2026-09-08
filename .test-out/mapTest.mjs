// src/data/gameConfig.json
var gameConfig_default = {
  playerBase: {
    maxHp: 1e3,
    attack: 30,
    defense: 15,
    critRate: 5,
    dodgeRate: 3
  },
  expFormula: { base: 20, power: 1.5 },
  growthTable: [
    { minLevel: 1, maxLevel: 5, hp: 125, attack: 6, defense: 3 },
    { minLevel: 6, maxLevel: 10, hp: 260, attack: 10, defense: 5 },
    { minLevel: 11, maxLevel: 15, hp: 250, attack: 12, defense: 6 },
    { minLevel: 16, maxLevel: 20, hp: 260, attack: 14, defense: 7 },
    { minLevel: 21, maxLevel: 25, hp: 100, attack: 16, defense: 8 },
    { minLevel: 26, maxLevel: 30, hp: 100, attack: 18, defense: 9 },
    { minLevel: 31, maxLevel: 35, hp: 230, attack: 22, defense: 11 },
    { minLevel: 36, maxLevel: 40, hp: 500, attack: 26, defense: 13 },
    { minLevel: 41, maxLevel: 45, hp: 1e3, attack: 30, defense: 15 },
    { minLevel: 46, maxLevel: 50, hp: 1e3, attack: 34, defense: 17 },
    { minLevel: 51, maxLevel: 999, hp: 1200, attack: 38, defense: 19 }
  ],
  floorAnchors: {
    floors: [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    hp: [165, 310, 485, 685, 900, 1175, 1500, 1900, 2400, 3100, 4150],
    atk: [40, 75, 120, 200, 280, 340, 420, 520, 680, 950, 1300],
    def: [7, 14, 21, 30, 40, 52, 66, 84, 106, 136, 183],
    exp: [15, 40, 100, 180, 280, 400, 550, 720, 900, 1100, 1350],
    gold: [20, 20, 45, 90, 90, 160, 160, 275, 275, 425, 425],
    overflowPerFloor: { hp: 0.08, atk: 0.05, def: 0.05, exp: 0.08, gold: 0.05 }
  },
  bossStatBonus: { hp: 0, atk: 0, def: 0 },
  battle: {
    damageJitter: 0.1,
    critMultiplier: 1.8,
    maxTurns: 60,
    minDamage: 1
  },
  chestRewards: {
    goldBands: [
      { minFloor: 1, maxFloor: 5, min: 1, max: 5 },
      { minFloor: 6, maxFloor: 10, min: 5, max: 15 },
      { minFloor: 11, maxFloor: 20, min: 15, max: 40 },
      { minFloor: 21, maxFloor: 30, min: 40, max: 80 },
      { minFloor: 31, maxFloor: 40, min: 80, max: 150 },
      { minFloor: 41, maxFloor: 9999, min: 150, max: 250 }
    ],
    equipmentChance: 0.6,
    potionChance: 0.15,
    goldAlways: true
  },
  monsterDrops: {
    equipmentChance: 0.03,
    potionChance: 0.02
  },
  revive: { goldPenaltyRate: 0.2, hpRestorePct: 1 },
  merchant: {
    potionCountMin: 2,
    potionCountMax: 4,
    keyPriceBase: 50,
    keyPricePer10Floors: 30,
    keyCountMin: 1,
    keyCountMax: 3,
    equipmentCountMin: 1,
    equipmentCountMax: 2
  },
  render: {
    tileWidth: 64,
    tileHeight: 32,
    vignetteMax: 0.3,
    maxLights: 6,
    maxParticles: 50,
    gridLineWidth: 1
  },
  shadow: {
    staticAlpha: 0.2,
    staticOffset: 3,
    baseOffset: 6,
    maxDynamic: 20,
    tyndall: { length: 150, width: 30, alpha: 0.13, dustMin: 5, dustMax: 10 }
  },
  heights: {
    player: 45,
    monsterNormal: 38,
    monsterElite: 52,
    boss: 70,
    chest: 18,
    torch: 55,
    pillar: 70,
    npc: 42,
    stair: 10,
    carpet: 4,
    wallByRoom: {
      start: 60,
      combat: 65,
      elite: 75,
      chest: 55,
      merchant: 55,
      boss: 90,
      rest: 55,
      end: 60
    },
    corridorWall: 75
  },
  raycast: { level: 2 },
  camera: { lerp: 0.12, transitionMs: 400, roomPaddingPx: 24 },
  hover: { showDelayMs: 200, hideDelayMs: 300, offsetX: 12, offsetY: 12 },
  save: { key: "motarpg_v2_save", version: "2.0.0", autosaveDefault: true },
  input: { moveRepeatMs: 110, moveBufferMs: 120 }
};

// src/data/mapGeneration.json
var mapGeneration_default = {
  cellSpacingX: 13,
  cellSpacingY: 11,
  gridRadius: 2,
  floorRoomCounts: [
    { minFloor: 2, maxFloor: 5, min: 4, max: 6 },
    { minFloor: 6, maxFloor: 10, min: 4, max: 8 },
    { minFloor: 11, maxFloor: 20, min: 6, max: 8 },
    { minFloor: 21, maxFloor: 9999, min: 6, max: 12 }
  ],
  maxRooms: 12,
  bossFloorInterval: 5,
  initialFloor: 1,
  roomSpecs: {
    start: { width: 5, height: 5 },
    end: { width: 6, height: 5 },
    combat: { width: [6, 7], height: [5, 6] },
    elite: { width: [7, 8], height: [6, 7] },
    chest: { width: 5, height: 5 },
    merchant: { width: 6, height: 6 },
    boss: { width: [9, 10], height: [7, 8] },
    rest: { width: 5, height: 5 }
  },
  minRoomWidth: 4,
  minRoomHeight: 4,
  tension: {
    weights: { combat: 1, elite: 3, chest: -1, merchant: -2 },
    forcePositiveAt: 4,
    forceNegativeAt: -3
  },
  merchantLimit: { fewMaxRooms: 7, fewCount: 1, manyCount: 2 },
  path: { maxLengthDiff: 2 },
  corridor: { extraChance: 0.25, extraMax: 2, adjacentManhattan: 1 },
  content: {
    monsterMinDistFromEntry: 3,
    smallAreaMax: 30,
    mediumAreaMax: 42,
    density: { small: 2, medium: 3, large: 4 },
    chestRoomMin: 2,
    chestRoomMax: 3,
    otherRoomChestChance: 0.35,
    eliteRoomEliteMin: 1,
    eliteRoomEliteMax: 2,
    bossRoomAddsMin: 0,
    bossRoomAddsMax: 2
  },
  decor: {
    torchCorridorEvery: 4,
    pillarMinRoomWidth: 7,
    carpetRooms: ["chest", "boss"]
  },
  generation: { maxAttempts: 40 }
};

// src/data/monsters.json
var monsters_default = {
  monsters: [
    {
      id: "slime",
      name: "\u53F2\u83B1\u59C6",
      shape: "circle",
      color: "#44cc44",
      category: "normal",
      floorMin: 1,
      floorMax: 5,
      weight: 30,
      hpMul: 1,
      atkMul: 0.9,
      defMul: 0.8,
      goldMul: 1,
      expMul: 1,
      height: 32,
      description: "\u6700\u5F31\u5C0F\u7684\u9B54\u7269\uFF0C\u67D4\u8F6F\u65E0\u9AA8\u3002"
    },
    {
      id: "bat",
      name: "\u8759\u8760",
      shape: "circle",
      color: "#9955cc",
      category: "normal",
      floorMin: 1,
      floorMax: 10,
      weight: 25,
      hpMul: 0.7,
      atkMul: 1.1,
      defMul: 0.5,
      goldMul: 1,
      expMul: 1,
      height: 30,
      description: "\u76D8\u65CB\u7684\u6697\u5F71\uFF0C\u653B\u51FB\u5201\u94BB\u3002"
    },
    {
      id: "skeleton",
      name: "\u9AB7\u9AC5\u5175",
      shape: "square",
      color: "#dddddd",
      category: "normal",
      floorMin: 3,
      floorMax: 15,
      weight: 25,
      hpMul: 1.2,
      atkMul: 1,
      defMul: 1.2,
      goldMul: 1.1,
      expMul: 1.1,
      height: 36,
      description: "\u4E0D\u673D\u7684\u536B\u5175\uFF0C\u9AA8\u5934\u62FC\u6210\u7684\u6218\u8EAF\u3002"
    },
    {
      id: "gargoyle",
      name: "\u77F3\u50CF\u9B3C",
      shape: "square",
      color: "#888899",
      category: "normal",
      floorMin: 8,
      floorMax: 25,
      weight: 22,
      hpMul: 1.5,
      atkMul: 0.9,
      defMul: 1.3,
      goldMul: 1.2,
      expMul: 1.2,
      height: 42,
      description: "\u77F3\u5316\u7684\u5B88\u536B\uFF0C\u76AE\u7CD9\u8089\u539A\u3002"
    },
    {
      id: "shadow_wolf",
      name: "\u6697\u5F71\u72FC",
      shape: "square",
      color: "#3344aa",
      category: "normal",
      floorMin: 12,
      floorMax: 35,
      weight: 22,
      hpMul: 1.1,
      atkMul: 1.4,
      defMul: 0.8,
      goldMul: 1.2,
      expMul: 1.2,
      height: 40,
      description: "\u5F71\u4E2D\u75BE\u884C\u7684\u730E\u624B\uFF0C\u6495\u54AC\u81F4\u547D\u3002"
    },
    {
      id: "hellhound",
      name: "\u5730\u72F1\u72AC",
      shape: "square",
      color: "#ff6622",
      category: "normal",
      floorMin: 18,
      floorMax: 45,
      weight: 20,
      hpMul: 1.3,
      atkMul: 1.5,
      defMul: 1,
      goldMul: 1.3,
      expMul: 1.3,
      height: 44,
      description: "\u71C3\u70E7\u7684\u6076\u72AC\uFF0C\u5410\u606F\u707C\u4EBA\u3002"
    },
    {
      id: "dark_knight",
      name: "\u6697\u9ED1\u9A91\u58EB",
      shape: "square",
      color: "#aa1133",
      category: "normal",
      floorMin: 25,
      floorMax: 9999,
      weight: 20,
      hpMul: 1.8,
      atkMul: 1.2,
      defMul: 1.4,
      goldMul: 1.4,
      expMul: 1.4,
      height: 48,
      description: "\u5815\u843D\u7684\u9A91\u58EB\uFF0C\u653B\u9632\u517C\u5907\u3002"
    },
    {
      id: "ancient_dragon",
      name: "\u8FDC\u53E4\u5DE8\u9F99",
      shape: "big_square",
      color: "#cc1122",
      category: "boss",
      floorMin: 5,
      floorMax: 9999,
      weight: 0,
      hpMul: 5,
      atkMul: 0.95,
      defMul: 1.2,
      goldMul: 5,
      expMul: 8,
      height: 70,
      description: "\u6C89\u7720\u4E8E\u5854\u5E95\u7684\u707E\u5384\uFF0C\u7FFC\u5F71\u853D\u65E5\u3002"
    }
  ],
  eliteStatMultiplier: 1.25,
  eliteGoldMultiplier: 2,
  eliteExpMultiplier: 2.5
};

// src/data/potions.json
var potions_default = {
  potions: [
    { tier: "crude", name: "\u52A3\u8D28\u836F\u6C34", healPct: 0.2, price: 20, color: "#dd6688", minFloor: 1, maxFloor: 5, icon: "\u{1F9EA}" },
    { tier: "normal", name: "\u666E\u901A\u836F\u6C34", healPct: 0.3, price: 40, color: "#ee3344", minFloor: 3, maxFloor: 15, icon: "\u{1F9EA}" },
    { tier: "quality", name: "\u4F18\u8D28\u836F\u6C34", healPct: 0.45, price: 100, color: "#bb1133", minFloor: 10, maxFloor: 30, icon: "\u{1F9EA}" },
    { tier: "strong", name: "\u5F3A\u6548\u836F\u6C34", healPct: 0.6, price: 250, color: "#990033", minFloor: 25, maxFloor: 40, icon: "\u2697\uFE0F" },
    { tier: "holy", name: "\u5723\u836F", healPct: 0.8, price: 600, color: "#ffdd44", minFloor: 40, maxFloor: 9999, icon: "\u2697\uFE0F" }
  ]
};

// src/data/equipmentTables.json
var equipmentTables_default = {
  qualityOrder: ["poor", "common", "fine", "rare", "epic", "legendary", "mythic"],
  quality: {
    poor: { name: "\u7834\u70C2", color: "#9e9e9e", statMultiplier: 0.6, affixCount: 0, affixCountMax: 0, sellMultiplier: 0.2, prefix: "\u7834\u65E7\u7684", basePrice: 5 },
    common: { name: "\u666E\u901A", color: "#ffffff", statMultiplier: 1, affixCount: 0, affixCountMax: 0, sellMultiplier: 1, prefix: "", basePrice: 10 },
    fine: { name: "\u4F18\u79C0", color: "#4488ff", statMultiplier: 1.4, affixCount: 1, affixCountMax: 1, sellMultiplier: 2, prefix: "\u7CBE\u826F\u7684", basePrice: 30 },
    rare: { name: "\u7A00\u6709", color: "#aa44ff", statMultiplier: 1.9, affixCount: 2, affixCountMax: 3, sellMultiplier: 4, prefix: "\u4F18\u8D28\u7684", basePrice: 80, affixExtra: [{ atEquipLevel: 20, add: 1 }] },
    epic: { name: "\u53F2\u8BD7", color: "#ffaa00", statMultiplier: 2.5, affixCount: 3, affixCountMax: 5, sellMultiplier: 8, prefix: "\u7CBE\u5236\u7684", basePrice: 200, affixExtra: [{ atEquipLevel: 15, add: 1 }] },
    legendary: { name: "\u4F20\u8BF4", color: "#ff5533", statMultiplier: 3.5, affixCount: 4, affixCountMax: 7, sellMultiplier: 16, prefix: "\u5B8C\u7F8E\u7684", basePrice: 500, affixExtra: [{ atEquipLevel: 10, add: 1 }] },
    mythic: { name: "\u795E\u8BDD", color: "#ff44dd", statMultiplier: 5, affixCount: 4, affixCountMax: 4, sellMultiplier: 35, prefix: "\u65E0\u53CC\u7684", basePrice: 1200 }
  },
  qualityByFloor: [
    { minFloor: 1, maxFloor: 5, weights: { poor: 45, common: 40, fine: 12, rare: 3, epic: 0, legendary: 0, mythic: 0 } },
    { minFloor: 6, maxFloor: 10, weights: { poor: 10, common: 50, fine: 28, rare: 10, epic: 2, legendary: 0, mythic: 0 } },
    { minFloor: 11, maxFloor: 20, weights: { poor: 1, common: 35, fine: 35, rare: 20, epic: 8, legendary: 1, mythic: 0 } },
    { minFloor: 21, maxFloor: 30, weights: { poor: 1, common: 15, fine: 31, rare: 30, epic: 18, legendary: 5, mythic: 0 } },
    { minFloor: 31, maxFloor: 40, weights: { poor: 0, common: 5, fine: 20, rare: 30, epic: 30, legendary: 15, mythic: 0 } },
    { minFloor: 41, maxFloor: 50, weights: { poor: 0, common: 0, fine: 10, rare: 25, epic: 35, legendary: 29.5, mythic: 0.5 } },
    { minFloor: 51, maxFloor: 9999, weights: { poor: 0, common: 0, fine: 8, rare: 22, epic: 33, legendary: 35, mythic: 2 } }
  ],
  affixes: [
    { type: "sharp", name: "\u950B\u5229", minQuality: "fine", isPercent: false, bands: [{ maxEquipLevel: 10, min: 3, max: 8 }, { maxEquipLevel: 25, min: 8, max: 20 }, { maxEquipLevel: 40, min: 20, max: 40 }, { maxEquipLevel: 50, min: 40, max: 70 }], description: "\u653B\u51FB +{v}" },
    { type: "sturdy", name: "\u575A\u56FA", minQuality: "fine", isPercent: false, bands: [{ maxEquipLevel: 10, min: 2, max: 5 }, { maxEquipLevel: 25, min: 5, max: 12 }, { maxEquipLevel: 40, min: 12, max: 25 }, { maxEquipLevel: 50, min: 25, max: 45 }], description: "\u9632\u5FA1 +{v}" },
    { type: "vitality", name: "\u6D3B\u529B", minQuality: "fine", isPercent: false, bands: [{ maxEquipLevel: 10, min: 15, max: 40 }, { maxEquipLevel: 25, min: 40, max: 100 }, { maxEquipLevel: 40, min: 100, max: 200 }, { maxEquipLevel: 50, min: 200, max: 350 }], description: "\u751F\u547D +{v}" },
    { type: "precision", name: "\u7CBE\u51C6", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 3 }, { maxEquipLevel: 25, min: 3, max: 5 }, { maxEquipLevel: 40, min: 5, max: 7 }, { maxEquipLevel: 50, min: 7, max: 10 }], description: "\u66B4\u51FB\u7387 +{v}%" },
    { type: "agility", name: "\u7075\u5DE7", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 2 }, { maxEquipLevel: 25, min: 2, max: 4 }, { maxEquipLevel: 40, min: 4, max: 6 }, { maxEquipLevel: 50, min: 6, max: 8 }], description: "\u95EA\u907F\u7387 +{v}%" },
    { type: "savage", name: "\u5F3A\u653B", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 2, max: 4 }, { maxEquipLevel: 25, min: 4, max: 7 }, { maxEquipLevel: 40, min: 7, max: 10 }, { maxEquipLevel: 50, min: 10, max: 15 }], description: "\u653B\u51FB +{v}%" },
    { type: "fortress", name: "\u94C1\u58C1", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 3 }, { maxEquipLevel: 25, min: 3, max: 5 }, { maxEquipLevel: 40, min: 5, max: 8 }, { maxEquipLevel: 50, min: 8, max: 12 }], description: "\u9632\u5FA1 +{v}%" },
    { type: "lifesteal", name: "\u55DC\u8840", minQuality: "epic", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 2 }, { maxEquipLevel: 25, min: 2, max: 3 }, { maxEquipLevel: 40, min: 3, max: 4 }, { maxEquipLevel: 50, min: 4, max: 6 }], description: "\u653B\u51FB\u56DE\u590D\u751F\u547D {v}%" },
    { type: "hellfire", name: "\u4E1A\u706B", minQuality: "rare", isPercent: false, bands: [{ maxEquipLevel: 10, min: 3, max: 8 }, { maxEquipLevel: 25, min: 8, max: 18 }, { maxEquipLevel: 40, min: 18, max: 35 }, { maxEquipLevel: 50, min: 35, max: 60 }], description: "\u9644\u52A0\u706B\u7130\u4F24\u5BB3 {v}" },
    { type: "greed", name: "\u8D2A\u5A6A", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 5, max: 10 }, { maxEquipLevel: 25, min: 10, max: 15 }, { maxEquipLevel: 40, min: 15, max: 20 }, { maxEquipLevel: 50, min: 20, max: 30 }], description: "\u91D1\u5E01\u83B7\u53D6 +{v}%" },
    { type: "wisdom", name: "\u535A\u5B66", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 5, max: 10 }, { maxEquipLevel: 25, min: 10, max: 15 }, { maxEquipLevel: 40, min: 15, max: 20 }, { maxEquipLevel: 50, min: 20, max: 30 }], description: "\u7ECF\u9A8C\u83B7\u53D6 +{v}%" },
    { type: "dragonslayer", name: "\u5C60\u9F99", minQuality: "epic", isPercent: true, bands: [{ maxEquipLevel: 10, min: 5, max: 10 }, { maxEquipLevel: 25, min: 10, max: 15 }, { maxEquipLevel: 40, min: 15, max: 20 }, { maxEquipLevel: 50, min: 20, max: 30 }], description: "\u5BF9Boss\u4F24\u5BB3 +{v}%" }
  ],
  weaponTable: [
    { minEquipLevel: 1, maxEquipLevel: 5, values: { poor: [2, 5], common: [4, 8], fine: [8, 15], rare: [15, 25], epic: null, legendary: null } },
    { minEquipLevel: 6, maxEquipLevel: 10, values: { poor: [5, 8], common: [8, 15], fine: [15, 25], rare: [25, 40], epic: [40, 55], legendary: null } },
    { minEquipLevel: 11, maxEquipLevel: 20, values: { poor: null, common: [15, 25], fine: [25, 40], rare: [40, 60], epic: [60, 85], legendary: [85, 120] } },
    { minEquipLevel: 21, maxEquipLevel: 30, values: { poor: null, common: [25, 35], fine: [35, 55], rare: [55, 80], epic: [80, 110], legendary: [110, 160] } },
    { minEquipLevel: 31, maxEquipLevel: 40, values: { poor: null, common: null, fine: [45, 65], rare: [65, 95], epic: [95, 140], legendary: [140, 200] } },
    { minEquipLevel: 41, maxEquipLevel: 50, values: { poor: null, common: null, fine: [60, 80], rare: [80, 120], epic: [120, 180], legendary: [180, 280] } }
  ],
  armorTable: [
    { minEquipLevel: 1, maxEquipLevel: 5, values: { poor: [1, 3], common: [2, 5], fine: [4, 8], rare: [6, 12], epic: null, legendary: null } },
    { minEquipLevel: 6, maxEquipLevel: 10, values: { poor: [2, 4], common: [4, 8], fine: [8, 14], rare: [12, 20], epic: [18, 28], legendary: null } },
    { minEquipLevel: 11, maxEquipLevel: 20, values: { poor: null, common: [8, 14], fine: [14, 22], rare: [20, 30], epic: [30, 45], legendary: [45, 60] } },
    { minEquipLevel: 21, maxEquipLevel: 30, values: { poor: null, common: [14, 20], fine: [20, 30], rare: [30, 45], epic: [45, 60], legendary: [60, 85] } },
    { minEquipLevel: 31, maxEquipLevel: 40, values: { poor: null, common: null, fine: [25, 35], rare: [35, 55], epic: [55, 75], legendary: [75, 110] } },
    { minEquipLevel: 41, maxEquipLevel: 50, values: { poor: null, common: null, fine: [35, 45], rare: [45, 65], epic: [65, 95], legendary: [95, 140] } }
  ],
  mythicFromLegendary: 1.43,
  baseNames: {
    weapon: [
      { minEquipLevel: 1, maxEquipLevel: 10, names: ["\u94C1\u5251"] },
      { minEquipLevel: 11, maxEquipLevel: 20, names: ["\u9614\u5251"] },
      { minEquipLevel: 21, maxEquipLevel: 30, names: ["\u957F\u5251"] },
      { minEquipLevel: 31, maxEquipLevel: 40, names: ["\u7B26\u6587\u5251"] },
      { minEquipLevel: 41, maxEquipLevel: 50, names: ["\u9F99\u9B42\u5251"] }
    ],
    armor: [
      { minEquipLevel: 1, maxEquipLevel: 10, names: ["\u80F8\u7532"] },
      { minEquipLevel: 11, maxEquipLevel: 20, names: ["\u9CDE\u7532"] },
      { minEquipLevel: 21, maxEquipLevel: 30, names: ["\u677F\u7532"] },
      { minEquipLevel: 31, maxEquipLevel: 40, names: ["\u7B26\u6587\u7532"] },
      { minEquipLevel: 41, maxEquipLevel: 50, names: ["\u9F99\u9CDE\u7532"] }
    ]
  },
  equipLevelFormula: { playerLevelFactor: 0.5, floorFactor: 1, randomMin: -2, randomMax: 3, min: 1, max: 50 },
  buyPriceRule: { sellMultiplier: 1.6, min: 100, max: 5e3 },
  affixSpecial: { mythicAffixCount: 4 }
};

// src/data/npcs.json
var npcs_default = {
  npcs: [
    {
      id: "npc_guide",
      name: "\u5F15\u5BFC\u8005\xB7\u827E\u767B",
      color: "#44dd99",
      lines: [
        "\u6B22\u8FCE\u6765\u5230\u65E0\u5C3D\u4E4B\u5854\uFF0C\u52C7\u8005\u3002\u8FD9\u5EA7\u5854\u6BCF\u5C42\u90FD\u7531\u65E0\u6570\u623F\u95F4\u6784\u6210\uFF0C\u8DEF\u5F84\u7531\u4F60\u9009\u62E9\u3002",
        "\u7528 WASD \u6216\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u649E\u4E0A\u602A\u7269\u5373\u4F1A\u5C55\u5F00\u6218\u6597\u3002\u5DE6\u952E\u4E5F\u80FD\u76F4\u63A5\u70B9\u9009\u76EE\u6807\u3002",
        "\u5B9D\u7BB1\u4E0E\u5546\u4EBA\u4F1A\u7ED9\u4F60\u8865\u7ED9\u3002\u88C5\u5907\u54C1\u8D28\u4ECE\u7834\u70C2\u5230\u795E\u8BDD\u5171\u4E03\u6863\uFF0C\u4ED4\u7EC6\u5BF9\u6BD4\u518D\u7A7F\u6234\u3002",
        "\u697C\u68AF\u5728\u7EC8\u70B9\u623F\u95F4\u3002\u613F\u4F60\u811A\u4E0B\u751F\u98CE\uFF0C\u5251\u4E0B\u65E0\u60C5\u3002",
        "\u5BF9\u4E86\u2014\u2014\u6B7B\u4EA1\u4E0D\u662F\u7EC8\u70B9\u3002\u5854\u4F1A\u7ED9\u4F60\u91CD\u6765\u7684\u673A\u4F1A\uFF0C\u4F46\u4F1A\u6536\u8D70\u4E00\u90E8\u5206\u91D1\u5E01\u3002"
      ]
    },
    {
      id: "npc_merchant",
      name: "\u5546\u4EBA\xB7\u8001\u53E4",
      color: "#44dd66",
      isMerchant: true,
      lines: [
        "\u54DF\uFF0C\u5BA2\u4EBA\uFF01\u7A00\u7F55\u7269\u4EF6\u5E94\u6709\u5C3D\u6709\uFF0C\u770B\u770B\uFF1F",
        "\u836F\u6C34\u6309\u697C\u5C42\u8FDB\u65B0\u8D27\uFF0C\u65E9\u4E70\u65E9\u5B89\u5FC3\u3002",
        "\u94A5\u5319\u4E0D\u5ACC\u591A\uFF0C\u5B9D\u7BB1\u53EF\u7B49\u4E0D\u4E86\u4EBA\u3002"
      ]
    }
  ]
};

// src/data/quests.json
var quests_default = {
  quests: [
    {
      id: "quest_talk_guide",
      name: "\u521D\u6765\u4E4D\u5230",
      description: "\u4E0E\u8D77\u70B9\u7684\u5F15\u5BFC\u8005\u827E\u767B\u5BF9\u8BDD\uFF0C\u4E86\u89E3\u8FD9\u5EA7\u5854\u7684\u89C4\u5219\u3002",
      objectives: [{ type: "talk_npc", targetId: "npc_guide", quantity: 1 }],
      rewards: [{ type: "potion", tier: "crude", value: 2 }],
      prerequisites: [],
      guidance: "\u8D70\u5230\u7EFF\u8272\u65B9\u5757\u65C1\uFF0C\u5DE6\u952E\u5BF9\u8BDD\u3002"
    },
    {
      id: "quest_first_blood",
      name: "\u521D\u8BD5\u950B\u8292",
      description: "\u51FB\u8D25\u4E00\u53EA\u53F2\u83B1\u59C6\u3002",
      objectives: [{ type: "defeat_monster", targetId: "slime", quantity: 1 }],
      rewards: [{ type: "gold", value: 30 }],
      prerequisites: ["quest_talk_guide"],
      guidance: "\u649E\u5411\u7EA2\u8272\u65B9\u5757\u5373\u8FDB\u5165\u6218\u6597\u3002"
    },
    {
      id: "quest_first_chest",
      name: "\u5F00\u7BB1\u6709\u559C",
      description: "\u6253\u5F00\u4E00\u4E2A\u5B9D\u7BB1\u3002",
      objectives: [{ type: "open_chest", quantity: 1 }],
      rewards: [{ type: "gold", value: 20 }],
      prerequisites: ["quest_talk_guide"],
      guidance: "\u5DE6\u952E\u70B9\u51FB\u91D1\u8272\u5B9D\u7BB1\u3002"
    },
    {
      id: "quest_first_equip",
      name: "\u62AB\u6302\u4E0A\u9635",
      description: "\u7A7F\u6234\u4E00\u4EF6\u88C5\u5907\u3002",
      objectives: [{ type: "equip_item", quantity: 1 }],
      rewards: [{ type: "equipment", quality: "poor" }],
      prerequisites: ["quest_first_chest"],
      guidance: "\u6309 B \u6253\u5F00\u80CC\u5305\uFF0C\u53CC\u51FB\u88C5\u5907\u7A7F\u6234\u3002"
    },
    {
      id: "quest_descend",
      name: "\u66F4\u4E0B\u4E00\u5C42",
      description: "\u901A\u8FC7\u7EC8\u70B9\u697C\u68AF\u5230\u8FBE\u7B2C 2 \u5C42\u3002",
      objectives: [{ type: "reach_floor", value: 2, quantity: 1 }],
      rewards: [
        { type: "gold", value: 50 },
        { type: "potion", tier: "crude", value: 1 }
      ],
      prerequisites: ["quest_first_blood"],
      guidance: "\u627E\u5230\u623F\u95F4\u89D2\u843D\u7684\u53D1\u5149\u697C\u68AF\u3002"
    }
  ]
};

// src/data/economy.json
var economy_default = {
  placeholder: true
};

// src/data/events.json
var events_default = {
  events: [
    {
      id: "ev_gold_fairy",
      name: "\u91D1\u5E01\u5996\u7CBE",
      icon: "\u{1F9DA}",
      minFloor: 2,
      chance: 0.07,
      roomTypes: ["combat", "chest"],
      description: "\u4E00\u53EA\u91D1\u5E01\u5996\u7CBE\u4ECE\u9634\u5F71\u91CC\u7A9C\u51FA\uFF0C\u7FC5\u8180\u4E0A\u6D12\u843D\u7740\u91D1\u7C89\u3002",
      options: [
        { text: "\u4F38\u624B\u53BB\u6293", effects: [{ type: "gold", value: 30, perFloor: 6 }] },
        { text: "\u76EE\u9001\u5B83\u79BB\u5F00", effects: [] }
      ]
    },
    {
      id: "ev_trap",
      name: "\u53EF\u7591\u7684\u8E0F\u677F",
      icon: "\u26A0\uFE0F",
      minFloor: 3,
      chance: 0.06,
      roomTypes: ["combat", "elite"],
      description: "\u811A\u4E0B\u7684\u77F3\u677F\u5FFD\u7136\u4E0B\u9677\u2014\u2014\u662F\u9677\u9631\uFF01",
      options: [
        { text: "\u786C\u6297", effects: [{ type: "damagePct", value: 8 }] },
        { text: "\u7FFB\u6EDA\u95EA\u907F\uFF08\u6D88\u8017\u4F53\u529B\uFF09", effects: [{ type: "damagePct", value: 3 }] }
      ]
    },
    {
      id: "ev_spring",
      name: "\u795E\u79D8\u6CC9\u6C34",
      icon: "\u26F2",
      minFloor: 2,
      chance: 0.06,
      roomTypes: ["chest", "merchant", "end"],
      description: "\u89D2\u843D\u91CC\u6D8C\u51FA\u4E00\u6C6A\u6CDB\u7740\u5FAE\u5149\u7684\u6CC9\u6C34\u3002",
      options: [
        { text: "\u996E\u4E0B\u6CC9\u6C34", effects: [{ type: "healPct", value: 20 }] },
        { text: "\u8C28\u614E\u8D77\u89C1\uFF0C\u4E0D\u559D", effects: [] }
      ]
    },
    {
      id: "ev_scroll",
      name: "\u53E4\u8001\u7684\u5377\u8F74",
      icon: "\u{1F4DC}",
      minFloor: 4,
      chance: 0.05,
      roomTypes: ["combat", "chest", "elite"],
      description: "\u5899\u4E0A\u5D4C\u7740\u4E00\u5377\u53E4\u65E7\u7684\u5377\u8F74\uFF0C\u5B57\u8FF9\u4F9D\u7A00\u53EF\u8FA8\u3002",
      options: [
        { text: "\u7814\u8BFB\u5377\u8F74", effects: [{ type: "exp", value: 25, perFloor: 5 }] },
        { text: "\u6CA1\u6709\u5174\u8DA3", effects: [] }
      ]
    }
  ]
};

// src/data/texts.json
var texts_default = {
  roomNames: {
    start: "\u8D77\u70B9\u5927\u5385",
    end: "\u7EC8\u70B9\u4E4B\u95F4",
    combat: "\u6218\u6597\u5BA4",
    elite: "\u7CBE\u82F1\u6BBF\u5802",
    chest: "\u5B9D\u85CF\u95F4",
    merchant: "\u5546\u4EBA\u8425\u5730",
    boss: "Boss\u5DE2\u7A74",
    rest: "\u4F11\u6574\u8425\u5730"
  },
  hints: {
    attack: "\u5DE6\u952E\u653B\u51FB",
    pickup: "\u5DE6\u952E\u62FE\u53D6",
    talk: "\u5DE6\u952E\u5BF9\u8BDD",
    open: "\u5DE6\u952E\u6253\u5F00",
    stair: "\u70B9\u51FB\u6216\u8D70\u4E0A\u697C\u68AF",
    trade: "\u5DE6\u952E\u4EA4\u6613"
  },
  titles: {
    gameTitle: "\u65E0\u5C3D\u4E4B\u5854",
    floor: "\u7B2C {floor} \u5C42",
    depth: "\u6DF1\u5EA6 {depth}",
    pathA: "\u8DEF\u5F84A\uFF08\u9AD8\u5371\uFF09",
    pathB: "\u8DEF\u5F84B\uFF08\u7A33\u5065\uFF09"
  },
  guidance: {
    firstEquipment: "\u83B7\u5F97\u88C5\u5907\uFF01\u6309 B \u6253\u5F00\u80CC\u5305\u67E5\u770B\uFF0C\u53CC\u51FB\u53EF\u7A7F\u6234\u3002\u88C5\u5907\u5BF9\u6BD4\u4E2D\u7EFF\u8272\u4E3A\u63D0\u5347\u3002",
    firstDeath: "\u4F60\u5012\u4E0B\u4E86\u2026\u2026\u4F46\u5854\u7ED9\u4E88\u4F60\u91CD\u6765\u7684\u673A\u4F1A\uFF1A\u5728\u672C\u5C42\u8D77\u70B9\u590D\u6D3B\uFF0C\u635F\u5931 20% \u91D1\u5E01\u3002",
    tutorialWelcome: "\u6B22\u8FCE\u6765\u5230\u65E0\u5C3D\u4E4B\u5854\u3002\u8DDF\u968F\u53F3\u4FA7\u4EFB\u52A1\u6307\u5F15\u5F00\u59CB\u5192\u9669\u5427\u3002"
  },
  labels: {
    player: "\u52C7\u8005",
    merchant: "\u5546\u4EBA",
    guide: "\u5F15\u5BFC\u8005",
    chest: "\u5B9D\u7BB1",
    chestOpened: "\u7A7A\u5B9D\u7BB1",
    stair: "\u901A\u5F80\u7B2C {floor} \u5C42",
    carpet: "\u5730\u6BEF",
    pillar: "\u77F3\u67F1",
    torch: "\u706B\u628A"
  }
};

// src/data/settings.json
var settings_default = {
  defaults: {
    autoSave: true
  }
};

// src/core/DataManager.ts
var DataManager = class _DataManager {
  static instance;
  loaded = false;
  constructor() {
  }
  static getInstance() {
    if (!_DataManager.instance) _DataManager.instance = new _DataManager();
    return _DataManager.instance;
  }
  loadAll() {
    this.loaded = true;
  }
  get config() {
    return gameConfig_default;
  }
  get mapGen() {
    return mapGeneration_default;
  }
  get monsters() {
    return monsters_default;
  }
  get potions() {
    return potions_default;
  }
  get equipment() {
    return equipmentTables_default;
  }
  get npcs() {
    return npcs_default;
  }
  get quests() {
    return quests_default;
  }
  get economy() {
    return economy_default;
  }
  get events() {
    return events_default;
  }
  get texts() {
    return texts_default;
  }
  get settings() {
    return settings_default;
  }
  getMonster(id) {
    return this.monsters.monsters.find((m) => m.id === id);
  }
  getPotion(tier) {
    return this.potions.potions.find((p) => p.tier === tier);
  }
  getNpc(id) {
    return this.npcs.npcs.find((n) => n.id === id);
  }
  getQuest(id) {
    return this.quests.quests.find((q) => q.id === id);
  }
  get isLoaded() {
    return this.loaded;
  }
};
var dataManager = DataManager.getInstance();

// src/utils/MathUtils.ts
var MathUtils = class {
  static clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  static lerp(a, b, t) {
    return a + (b - a) * t;
  }
  /** 曼哈顿距离 */
  static manhattan(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  /** 欧氏距离 */
  static dist(x1, y1, x2, y2) {
    return Math.hypot(x1 - x2, y1 - y2);
  }
};
var rng = {
  next() {
    return Math.random();
  },
  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  randFloat(min, max) {
    return Math.random() * (max - min) + min;
  },
  chance(p) {
    return Math.random() < p;
  },
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  pickWeighted(arr, weightFn) {
    const weights = arr.map(weightFn);
    const total = weights.reduce((s, w) => s + w, 0);
    if (total <= 0) return arr[0];
    let roll = Math.random() * total;
    for (let i = 0; i < arr.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return arr[i];
    }
    return arr[arr.length - 1];
  },
  shuffle(arr) {
    const r = [...arr];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }
};

// src/utils/Logger.ts
var Logger = class _Logger {
  static level = "info";
  static order = { debug: 0, info: 1, warn: 2, error: 3 };
  static setLevel(level) {
    _Logger.level = level;
  }
  static shouldLog(level) {
    return _Logger.order[level] >= _Logger.order[_Logger.level];
  }
  static debug(...args) {
    if (_Logger.shouldLog("debug")) console.log("[DEBUG]", ...args);
  }
  static info(...args) {
    if (_Logger.shouldLog("info")) console.log("[INFO]", ...args);
  }
  static warn(...args) {
    if (_Logger.shouldLog("warn")) console.warn("[WARN]", ...args);
  }
  static error(...args) {
    if (_Logger.shouldLog("error")) console.error("[ERROR]", ...args);
  }
};

// src/map/FloorGenerator.ts
var FloorGenerator = class _FloorGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_FloorGenerator.instance) _FloorGenerator.instance = new _FloorGenerator();
    return _FloorGenerator.instance;
  }
  /** 判定楼层类型：第1层固定初始层；楼层号%5===0 为Boss层 */
  getFloorKind(floorId) {
    const cfg = dataManager.mapGen;
    if (floorId === cfg.initialFloor) return "initial";
    if (floorId % cfg.bossFloorInterval === 0) return "boss";
    return "normal";
  }
  /**
   * 分配楼层房间类型。
   * 初始层与Boss层不参与随机分配，直接返回固定结构。
   */
  allocate(floorId) {
    const kind = this.getFloorKind(floorId);
    if (kind === "initial") {
      return { floorId, kind, roomTypes: ["start", "end"] };
    }
    if (kind === "boss") {
      return { floorId, kind, roomTypes: ["rest", "boss", "end"] };
    }
    const count = this.rollRoomCount(floorId);
    const allocatable = count - 2;
    const middle = this.allocateByTension(floorId, allocatable);
    return { floorId, kind, roomTypes: ["start", ...middle, "end"] };
  }
  /** 普通楼层房间数量（文档二 2.2） */
  rollRoomCount(floorId) {
    const cfg = dataManager.mapGen;
    const band = cfg.floorRoomCounts.find((b) => floorId >= b.minFloor && floorId <= b.maxFloor) ?? cfg.floorRoomCounts[cfg.floorRoomCounts.length - 1];
    const count = rng.randInt(band.min, band.max);
    return Math.min(count, cfg.maxRooms);
  }
  /**
   * 运气平衡器（文档二 2.4）：张力值 Tension 机制。
   * 正面概率 = 1/(1+e^(-Tension))；Tension≥4 强制正面，≤-3 强制负面；每层重置。
   * 特殊约束：商人数量限制（总数≤7 最多1个，8-12 最多2个），优先级高于平衡器。
   */
  allocateByTension(floorId, allocatable) {
    const cfg = dataManager.mapGen;
    const weights = cfg.tension.weights;
    let tension = 0;
    let merchantCount = 0;
    const result = [];
    for (let i = 0; i < allocatable; i++) {
      const totalSoFar = result.length + 2;
      const merchantCap = totalSoFar <= cfg.merchantLimit.fewMaxRooms ? cfg.merchantLimit.fewCount : cfg.merchantLimit.manyCount;
      let positive;
      if (tension >= cfg.tension.forcePositiveAt) {
        positive = true;
      } else if (tension <= cfg.tension.forceNegativeAt) {
        positive = false;
      } else {
        positive = rng.chance(1 / (1 + Math.exp(-tension)));
      }
      let type;
      if (positive) {
        const merchantAllowed = merchantCount < merchantCap;
        type = merchantAllowed && rng.chance(0.3) ? "merchant" : "chest";
        if (type === "merchant") merchantCount++;
      } else {
        type = rng.chance(0.3) ? "elite" : "combat";
      }
      result.push(type);
      tension += weights[type] ?? 0;
    }
    Logger.debug(`[FloorGen] \u697C\u5C42${floorId} \u7C7B\u578B\u5206\u914D=${result.join(",")} \u7EC8\u6001Tension=${tension}`);
    return result;
  }
};

// src/map/PathGenerator.ts
var PathGenerator = class _PathGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_PathGenerator.instance) _PathGenerator.instance = new _PathGenerator();
    return _PathGenerator.instance;
  }
  plan(alloc) {
    const middle = alloc.roomTypes.slice(1, -1);
    if (alloc.kind !== "normal" || middle.length < 2) {
      return alloc.roomTypes.map((type, i) => ({
        type,
        rail: i === 0 ? "S" : i === alloc.roomTypes.length - 1 ? "E" : "A",
        railIndex: Math.max(0, i - 1),
        mountIndex: -1,
        isTrunk: true
      }));
    }
    const trunkCandidates = middle.filter((t) => t === "combat" || t === "elite");
    const sideRooms = middle.filter((t) => t === "chest" || t === "merchant");
    const sorted = [...trunkCandidates];
    sorted.sort((a, b) => (a === "elite" ? 0 : 1) - (b === "elite" ? 0 : 1));
    const railA = [];
    const railB = [];
    sorted.forEach((t, i) => {
      if (i % 2 === 0) railA.push(t);
      else railB.push(t);
    });
    if (railB.length === 0 && railA.length >= 2) railB.push(railA.pop());
    if (railA.length === 0 && railB.length >= 2) railA.push(railB.pop());
    const trunkLen = railA.length + railB.length;
    const mounts = sideRooms.map((type) => {
      const midOffset = type === "merchant" ? Math.floor(trunkLen / 2) : rng.randInt(Math.ceil(trunkLen / 2), trunkLen - 1);
      return { type, mountIndex: Math.min(midOffset, trunkLen - 1) };
    });
    const chain = [{
      type: alloc.roomTypes[0],
      rail: "S",
      railIndex: 0,
      mountIndex: -1,
      isTrunk: true
    }];
    const pushTrunk = (type, rail, railIndex) => {
      chain.push({ type, rail, railIndex, mountIndex: -1, isTrunk: true });
      const trunkOrder = railIndex * 2 + (rail === "A" ? 0 : 1);
      const sidesHere = mounts.map((m, mi) => ({ ...m, mi })).filter((m) => m.mountIndex === trunkOrder);
      for (const s of sidesHere) {
        chain.push({ type: s.type, rail: "side", railIndex: -1, mountIndex: trunkOrder, isTrunk: false });
      }
    };
    const n = Math.max(railA.length, railB.length);
    for (let i = 0; i < n; i++) {
      if (i < railA.length) pushTrunk(railA[i], "A", i);
      if (i < railB.length) pushTrunk(railB[i], "B", i);
    }
    for (const s of mounts) {
      const trunkOrder = s.mountIndex;
      const already = chain.some((c) => c.rail === "side" && c.mountIndex === trunkOrder && c.type === s.type);
      if (!already && !chain.some((c) => c.mountIndex === trunkOrder && c.rail === "side")) {
        chain.splice(chain.length - 1, 0, { type: s.type, rail: "side", railIndex: -1, mountIndex: trunkOrder, isTrunk: false });
      }
    }
    chain.push({ type: "end", rail: "E", railIndex: 0, mountIndex: -1, isTrunk: true });
    return chain;
  }
  /** 长度差校验值：路径A与路径B的房间数差（文档要求 ≤2） */
  pathLengthDiff(plan) {
    const a = plan.filter((p) => p.rail === "A").length;
    const b = plan.filter((p) => p.rail === "B").length;
    return Math.abs(a - b);
  }
  /** 校验配置约束（冗余保险，ceil/floor 分配已保证） */
  validateDiff(plan) {
    return this.pathLengthDiff(plan) <= dataManager.mapGen.path.maxLengthDiff;
  }
};

// src/utils/IdGenerator.ts
var IdGenerator = class _IdGenerator {
  static counter = 0;
  static reset() {
    _IdGenerator.counter = 0;
  }
  static next(prefix) {
    _IdGenerator.counter += 1;
    return `${prefix}_${_IdGenerator.counter.toString(36)}`;
  }
  /** 装备实例唯一ID */
  static equipmentId() {
    _IdGenerator.counter += 1;
    return `eq_${Date.now().toString(36)}_${_IdGenerator.counter.toString(36)}_${Math.floor(Math.random() * 1e6).toString(36)}`;
  }
};

// src/map/RoomGenerator.ts
var DIR_VECTORS = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 }
};
var OPPOSITE = {
  north: "south",
  south: "north",
  east: "west",
  west: "east"
};
var RoomGenerator = class _RoomGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_RoomGenerator.instance) _RoomGenerator.instance = new _RoomGenerator();
    return _RoomGenerator.instance;
  }
  /**
   * 按链顺序放置房间。返回 null 表示放置失败（由上层重试整层）。
   */
  place(floorId, plan) {
    const cfg = dataManager.mapGen;
    const R = cfg.gridRadius;
    const maxW = this.maxSpecWidth();
    const maxH = this.maxSpecHeight();
    const gridW = 2 * R * cfg.cellSpacingX + maxW;
    const gridH = 2 * R * cfg.cellSpacingY + maxH;
    const occupied = /* @__PURE__ */ new Map();
    const rooms = [];
    const dirHistory = [];
    const railPos = /* @__PURE__ */ new Map();
    for (let i = 0; i < plan.length; i++) {
      const planned = plan[i];
      let gx = 0;
      let gy = 0;
      let fromDirection = null;
      if (i === 0) {
        gx = 0;
        gy = 0;
      } else {
        const prev = rooms[i - 1];
        const target = this.biasTarget(planned, plan, rooms, railPos);
        const choice = this.chooseCell(prev.gx, prev.gy, occupied, dirHistory, target);
        if (!choice) return null;
        gx = choice.gx;
        gy = choice.gy;
        fromDirection = choice.direction;
      }
      const key = `${gx},${gy}`;
      if (occupied.has(key)) return null;
      occupied.set(key, i);
      const size = this.rollSize(planned.type);
      const x = (gx + R) * cfg.cellSpacingX;
      const y = (gy + R) * cfg.cellSpacingY;
      const room = {
        id: `room_${floorId}_${i}`,
        floorId,
        type: planned.type,
        order: i,
        gx,
        gy,
        width: size.width,
        height: size.height,
        x,
        y,
        centerX: x + Math.floor(size.width / 2),
        centerY: y + Math.floor(size.height / 2),
        fromDirection,
        depth: 0,
        onPathA: planned.rail === "A",
        onPathB: planned.rail === "B",
        mountedOn: planned.rail === "side" ? this.mountedOnId(plan, planned, floorId) : null,
        doors: [],
        entities: []
      };
      rooms.push(room);
      if (planned.rail === "A" || planned.rail === "B") {
        railPos.set(`${planned.rail}${planned.railIndex}`, { gx, gy });
      }
      if (fromDirection) dirHistory.push(fromDirection);
    }
    const grid = Array.from({ length: gridH }, () => Array.from({ length: gridW }, () => -1));
    for (const room of rooms) {
      for (let ry = room.y; ry <= room.y + room.height - 1; ry++) {
        for (let rx = room.x; rx <= room.x + room.width - 1; rx++) {
          grid[ry][rx] = 1;
        }
      }
      for (let ry = room.y + 1; ry <= room.y + room.height - 2; ry++) {
        for (let rx = room.x + 1; rx <= room.x + room.width - 2; rx++) {
          grid[ry][rx] = 0;
        }
      }
    }
    void IdGenerator.next("gen");
    return { rooms, grid };
  }
  /** 计算偏置目标格：同路径前驱 / 起点闭合边 / 终点闭合边 */
  biasTarget(planned, plan, rooms, railPos) {
    if (planned.rail === "A" && planned.railIndex > 0) {
      return railPos.get(`A${planned.railIndex - 1}`) ?? null;
    }
    if (planned.rail === "B" && planned.railIndex > 0) {
      return railPos.get(`B${planned.railIndex - 1}`) ?? null;
    }
    if (planned.rail === "B" && planned.railIndex === 0) {
      return { gx: 0, gy: 0 };
    }
    if (planned.rail === "E") {
      const lastA = plan.filter((p) => p.rail === "A").length - 1;
      if (lastA >= 0) return railPos.get(`A${lastA}`) ?? null;
    }
    return null;
  }
  /**
   * 方向选择：先应用硬约束（禁止重合 + 距离≤2√2 + 边界），
   * 再按放宽阶梯应用软约束（禁止折返 → 连续直走限制），带偏置评分。
   */
  chooseCell(px, py, occupied, dirHistory, bias) {
    const cfg = dataManager.mapGen;
    const R = cfg.gridRadius;
    const maxDist = 2 * Math.SQRT2 + 1e-9;
    const lastDir = dirHistory[dirHistory.length - 1] ?? null;
    const allDirs = ["north", "south", "east", "west"];
    const shuffled = rng.shuffle(allDirs);
    const inBounds = (gx, gy) => Math.abs(gx) <= R && Math.abs(gy) <= R;
    const tryPick = (allowReverse, allowStraight) => {
      const candidates = [];
      for (const dir of shuffled) {
        if (!allowReverse && lastDir && dir === OPPOSITE[lastDir]) continue;
        if (!allowStraight && this.isThirdStraight(dir, dirHistory)) continue;
        const { dx, dy } = DIR_VECTORS[dir];
        const gx = px + dx;
        const gy = py + dy;
        if (occupied.has(`${gx},${gy}`)) continue;
        if (!inBounds(gx, gy)) continue;
        if (MathUtils.dist(gx, gy, 0, 0) > maxDist) continue;
        let score = rng.next();
        if (bias && MathUtils.manhattan(gx, gy, bias.gx, bias.gy) <= 1) score += 3;
        candidates.push({ gx, gy, direction: dir, score });
      }
      if (candidates.length === 0) return null;
      candidates.sort((a, b) => b.score - a.score);
      return candidates[0];
    };
    return tryPick(false, false) ?? tryPick(true, false) ?? tryPick(true, true) ?? this.nearestFreeCell(px, py, occupied, R);
  }
  /** 第3次连续同向判定 */
  isThirdStraight(dir, history) {
    const n = history.length;
    if (n < 2) return false;
    return history[n - 1] === dir && history[n - 2] === dir;
  }
  /** 强制选择：打破常规约束（折返/直走/优先级），取距离约束内最近的空白方向 */
  nearestFreeCell(px, py, occupied, R) {
    let best = null;
    let bestD = Infinity;
    for (const dir of Object.keys(DIR_VECTORS)) {
      const { dx, dy } = DIR_VECTORS[dir];
      const gx = px + dx;
      const gy = py + dy;
      if (occupied.has(`${gx},${gy}`)) continue;
      if (Math.abs(gx) > R || Math.abs(gy) > R) continue;
      if (MathUtils.dist(gx, gy, 0, 0) > 2 * Math.SQRT2 + 1e-9) continue;
      const d = MathUtils.dist(gx, gy, 0, 0);
      if (d < bestD) {
        bestD = d;
        best = { gx, gy, direction: dir };
      }
    }
    return best;
  }
  /**
   * 房间规格（文档二 4.1）：表中数值 = 内部可活动空间（不含外圈墙壁），
   * 实际占地 = 规格 + 2（四面各一圈墙）。
   */
  rollSize(type) {
    const spec = dataManager.mapGen.roomSpecs[type];
    const roll = (v) => Array.isArray(v) ? rng.randInt(v[0], v[1]) : v;
    const innerW = Math.max(dataManager.mapGen.minRoomWidth, roll(spec.width));
    const innerH = Math.max(dataManager.mapGen.minRoomHeight, roll(spec.height));
    return { width: innerW + 2, height: innerH + 2 };
  }
  maxSpecWidth() {
    let max = 0;
    for (const spec of Object.values(dataManager.mapGen.roomSpecs)) {
      const w = Array.isArray(spec.width) ? spec.width[1] : spec.width;
      max = Math.max(max, w);
    }
    return max + 2;
  }
  maxSpecHeight() {
    let max = 0;
    for (const spec of Object.values(dataManager.mapGen.roomSpecs)) {
      const h = Array.isArray(spec.height) ? spec.height[1] : spec.height;
      max = Math.max(max, h);
    }
    return max + 2;
  }
  /** 侧室挂载的主干房间ID（挂载点在链上的前一个主干房间） */
  mountedOnId(plan, planned, floorId) {
    const idx = plan.indexOf(planned);
    for (let i = idx - 1; i >= 0; i--) {
      if (plan[i].isTrunk) return `room_${floorId}_${i}`;
    }
    return null;
  }
};

// src/map/CorridorGenerator.ts
var CorridorGenerator = class _CorridorGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_CorridorGenerator.instance) _CorridorGenerator.instance = new _CorridorGenerator();
    return _CorridorGenerator.instance;
  }
  connect(rooms, grid) {
    const corridors = [];
    const connections = [];
    const connected = /* @__PURE__ */ new Set();
    const byId = new Map(rooms.map((r) => [r.id, r]));
    const markConnected = (a, b) => {
      connected.add(this.pairKey(a, b));
      connected.add(this.pairKey(b, a));
    };
    const isConnected = (a, b) => connected.has(this.pairKey(a, b));
    for (let i = 0; i + 1 < rooms.length; i++) {
      const a = rooms[i];
      const b = rooms[i + 1];
      const carved = this.carveCorridor(a, b, grid);
      if (!carved) continue;
      corridors.push({ id: IdGenerator.next("corr"), fromRoomId: a.id, toRoomId: b.id, tiles: carved.tiles, extra: false });
      connections.push({ from: a.id, to: b.id });
      markConnected(a.id, b.id);
    }
    const cfg = dataManager.mapGen.corridor;
    const adjacentPairs = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const a = rooms[i];
        const b = rooms[j];
        if (isConnected(a.id, b.id)) continue;
        if (MathUtils.manhattan(a.gx, a.gy, b.gx, b.gy) > cfg.adjacentManhattan) continue;
        adjacentPairs.push({ a, b, priority: this.shortcutPriority(a, b, rooms) });
      }
    }
    adjacentPairs.sort((p, q) => p.priority - q.priority || rng.next() - 0.5);
    let extraCount = 0;
    let hasLoopShortcut = false;
    for (const pair of adjacentPairs) {
      if (extraCount >= cfg.extraMax) break;
      const roll = rng.chance(cfg.extraChance);
      if (!roll) continue;
      const carved = this.carveCorridor(pair.a, pair.b, grid);
      if (!carved) continue;
      corridors.push({ id: IdGenerator.next("corr"), fromRoomId: pair.a.id, toRoomId: pair.b.id, tiles: carved.tiles, extra: true });
      connections.push({ from: pair.a.id, to: pair.b.id });
      markConnected(pair.a.id, pair.b.id);
      extraCount++;
      if (pair.priority <= 1) hasLoopShortcut = true;
    }
    if (!hasLoopShortcut) {
      const fallback = adjacentPairs.find((p) => p.priority <= 1 && !isConnected(p.a.id, p.b.id) && extraCount < cfg.extraMax) ?? adjacentPairs.find((p) => p.priority <= 2 && !isConnected(p.a.id, p.b.id) && extraCount < cfg.extraMax);
      if (fallback) {
        const carved = this.carveCorridor(fallback.a, fallback.b, grid);
        if (carved) {
          corridors.push({ id: IdGenerator.next("corr"), fromRoomId: fallback.a.id, toRoomId: fallback.b.id, tiles: carved.tiles, extra: true });
          connections.push({ from: fallback.a.id, to: fallback.b.id });
          markConnected(fallback.a.id, fallback.b.id);
        }
      }
    }
    return { corridors, connections };
  }
  /** 捷径优先级：0=同路径相邻捷径 1=闭合边 2=其余 */
  shortcutPriority(a, b, rooms) {
    const sameRailAdjacent = a.onPathA && b.onPathA || a.onPathB && b.onPathB;
    const isStart = rooms[0];
    const isEnd = rooms[rooms.length - 1];
    const closingEdge = a === isStart && b.onPathB || b === isStart && a.onPathB || a === isEnd && b.onPathA || b === isEnd && a.onPathA;
    if (sameRailAdjacent) {
      return this.railGap(a, b) === 1 ? 0 : 2;
    }
    if (closingEdge) return 1;
    return 2;
  }
  /** 同路径序号差（非同路径返回 -1） */
  railGap(a, b) {
    return Math.abs(a.order - b.order);
  }
  /**
   * 在两个几何相邻房间之间挖一条直线走廊（含两侧开门）。
   * 返回走廊地面格；两房间非轴向相邻时返回 null。
   */
  carveCorridor(a, b, grid) {
    if (a.gy === b.gy && a.gx !== b.gx) {
      const west = a.gx < b.gx ? a : b;
      const east = a.gx < b.gx ? b : a;
      const rowTop = Math.max(west.y + 1, east.y + 1);
      const rowBottom = Math.min(west.y + west.height - 2, east.y + east.height - 2);
      if (rowTop > rowBottom) return null;
      const row = Math.floor((rowTop + rowBottom) / 2);
      const tiles = [];
      for (let x = west.x + west.width; x < east.x; x++) {
        if (this.insideGrid(grid, x, row)) {
          grid[row][x] = 0;
          tiles.push({ x, y: row });
        }
      }
      this.carveDoor(west, east, row, "east", grid);
      this.carveDoor(east, west, row, "west", grid);
      return { tiles };
    }
    if (a.gx === b.gx && a.gy !== b.gy) {
      const north = a.gy < b.gy ? a : b;
      const south = a.gy < b.gy ? b : a;
      const colLeft = Math.max(north.x + 1, south.x + 1);
      const colRight = Math.min(north.x + north.width - 2, south.x + south.width - 2);
      if (colLeft > colRight) return null;
      const col = Math.floor((colLeft + colRight) / 2);
      const tiles = [];
      for (let y = north.y + north.height; y < south.y; y++) {
        if (this.insideGrid(grid, col, y)) {
          grid[y][col] = 0;
          tiles.push({ x: col, y });
        }
      }
      this.carveDoor(north, south, col, "south", grid);
      this.carveDoor(south, north, col, "north", grid);
      return { tiles };
    }
    return null;
  }
  /** 在房间墙上开门并记录 */
  carveDoor(room, other, line, dir, grid) {
    let dx = 0;
    let dy = 0;
    if (dir === "east") {
      dx = room.x + room.width - 1;
      dy = line;
    } else if (dir === "west") {
      dx = room.x;
      dy = line;
    } else if (dir === "south") {
      dx = line;
      dy = room.y + room.height - 1;
    } else {
      dx = line;
      dy = room.y;
    }
    if (!this.insideGrid(grid, dx, dy)) return;
    if (dir === "east" || dir === "west") {
      if (dy <= room.y || dy >= room.y + room.height - 1) return;
    } else {
      if (dx <= room.x || dx >= room.x + room.width - 1) return;
    }
    grid[dy][dx] = 0;
    room.doors.push({ x: dx, y: dy, direction: dir, toRoomId: other.id });
  }
  insideGrid(grid, x, y) {
    return y >= 0 && y < grid.length && x >= 0 && x < grid[0].length;
  }
  pairKey(a, b) {
    return `${a}|${b}`;
  }
};

// src/map/ContentFiller.ts
var ContentFiller = class _ContentFiller {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_ContentFiller.instance) _ContentFiller.instance = new _ContentFiller();
    return _ContentFiller.instance;
  }
  fill(rooms, corridors, grid, floorId, kind) {
    const ccfg = dataManager.mapGen.content;
    const monsterPool = dataManager.monsters.monsters.filter(
      (m) => m.category === "normal" && floorId >= m.floorMin && floorId <= m.floorMax
    );
    for (const room of rooms) {
      const spots = this.freeSpots(room, grid);
      const taken = /* @__PURE__ */ new Set();
      const put = (e) => {
        room.entities.push({ ...e, id: IdGenerator.next("ent") });
        taken.add(`${e.x},${e.y}`);
      };
      const freeAt = (x, y) => grid[y]?.[x] === 0 && !taken.has(`${x},${y}`) && !room.entities.some((en) => en.x === x && en.y === y);
      switch (room.type) {
        case "start":
          if (kind === "initial") {
            put({ kind: "npc", npcId: "npc_guide", x: room.centerX, y: room.y + 1 });
          }
          break;
        case "end": {
          put({ kind: "stair", x: room.centerX, y: room.centerY, targetFloor: floorId + 1 });
          if (kind === "initial") {
            put({ kind: "chest", chestTier: "normal", x: room.x + 1, y: room.y + 1 });
            const far = spots.filter((s) => s.dist >= ccfg.monsterMinDistFromEntry && !taken.has(`${s.x},${s.y}`));
            if (far.length > 0) {
              const pick = far[Math.floor(far.length / 2)];
              put({ kind: "monster", monsterId: "slime", x: pick.x, y: pick.y });
            }
          } else if (kind === "boss") {
            put({ kind: "chest", chestTier: "grand", x: room.x + 1, y: room.y + 1 });
            put({ kind: "chest", chestTier: "grand", x: room.x + room.width - 2, y: room.y + room.height - 2 });
          } else if (rng.chance(ccfg.otherRoomChestChance)) {
            this.placeCornerChest(room, put, freeAt);
          }
          break;
        }
        case "rest":
          break;
        case "merchant": {
          put({ kind: "npc", npcId: "npc_merchant", x: room.centerX, y: room.centerY });
          if (rng.chance(ccfg.otherRoomChestChance)) this.placeCornerChest(room, put, freeAt);
          break;
        }
        case "chest": {
          const count = rng.randInt(ccfg.chestRoomMin, ccfg.chestRoomMax);
          const corners = this.innerCorners(room).filter((c) => freeAt(c.x, c.y));
          const chosen = rng.shuffle(corners).slice(0, count);
          chosen.forEach((c, i) => {
            if (i === 0) put({ kind: "carpet", x: c.x, y: c.y });
            put({ kind: "chest", chestTier: "normal", x: c.x, y: c.y });
          });
          break;
        }
        case "combat": {
          const cap = this.densityCap(room);
          const count = rng.randInt(Math.ceil(cap / 2), cap);
          this.placeMonsters(room, grid, count, false, monsterPool, put, taken, spots);
          if (rng.chance(ccfg.otherRoomChestChance)) this.placeCornerChest(room, put, freeAt);
          break;
        }
        case "elite": {
          const eliteCount = rng.randInt(ccfg.eliteRoomEliteMin, ccfg.eliteRoomEliteMax);
          this.placeMonsters(room, grid, eliteCount, true, monsterPool, put, taken, spots);
          if (rng.chance(0.5)) this.placeMonsters(room, grid, 1, false, monsterPool, put, taken, spots);
          break;
        }
        case "boss": {
          put({ kind: "carpet", x: room.centerX, y: room.centerY });
          put({ kind: "boss", monsterId: "ancient_dragon", x: room.centerX, y: room.centerY });
          const adds = rng.randInt(ccfg.bossRoomAddsMin, ccfg.bossRoomAddsMax);
          if (adds > 0) this.placeMonsters(room, grid, adds, false, monsterPool, put, taken, spots);
          break;
        }
      }
      if (room.width - 2 >= dataManager.mapGen.decor.pillarMinRoomWidth) {
        for (const c of this.innerCorners(room)) {
          if (grid[c.y][c.x] === 0 && !room.entities.some((en) => en.x === c.x && en.y === c.y)) {
            put({ kind: "pillar", x: c.x, y: c.y });
            grid[c.y][c.x] = 2;
          }
        }
      }
      for (const door of room.doors) {
        for (const side of this.doorSideTiles(room, door.x, door.y, door.direction)) {
          if (grid[side.y]?.[side.x] === 1 && !room.entities.some((en) => en.x === side.x && en.y === side.y)) {
            put({ kind: "torch", x: side.x, y: side.y });
          }
        }
      }
    }
    const every = dataManager.mapGen.decor.torchCorridorEvery;
    for (const corridor of corridors) {
      corridor.tiles.forEach((tile, i) => {
        if (i % every !== Math.floor(every / 2)) return;
        const side = grid[tile.y - 1]?.[tile.x] === 1 ? { x: tile.x, y: tile.y - 1 } : grid[tile.y + 1]?.[tile.x] === 1 ? { x: tile.x, y: tile.y + 1 } : null;
        if (side && !this.entityAt(rooms, side.x, side.y)) {
          const host = rooms.find((r) => r.id === corridor.fromRoomId);
          host?.entities.push({ id: IdGenerator.next("ent"), kind: "torch", x: side.x, y: side.y });
        }
      });
    }
  }
  /** 怪物密度上限（按房间内面积） */
  densityCap(room) {
    const c = dataManager.mapGen.content;
    const area = (room.width - 2) * (room.height - 2);
    if (area <= c.smallAreaMax) return c.density.small;
    if (area <= c.mediumAreaMax) return c.density.medium;
    return c.density.large;
  }
  /** 放置怪物：距入口≥3格，从合法点位随机挑选，不与已有实体重叠 */
  placeMonsters(room, grid, count, isElite, pool, put, taken, spots) {
    if (pool.length === 0) return;
    const minDist = dataManager.mapGen.content.monsterMinDistFromEntry;
    const candidates = spots.filter((s) => s.dist >= minDist);
    const use = candidates.length > 0 ? candidates : spots;
    const picked = rng.shuffle(use).slice(0, count);
    for (const spot of picked) {
      if (taken.has(`${spot.x},${spot.y}`)) continue;
      const monsterId = rng.pickWeighted(pool, (m) => m.weight).id;
      put({ kind: "monster", monsterId, isElite, x: spot.x, y: spot.y });
    }
  }
  /** 宝箱放房间角落 */
  placeCornerChest(room, put, freeAt) {
    const corners = this.innerCorners(room).filter((c2) => freeAt(c2.x, c2.y));
    if (corners.length === 0) return;
    const c = rng.pick(corners);
    put({ kind: "chest", chestTier: "normal", x: c.x, y: c.y });
  }
  /** 房间内侧四角 */
  innerCorners(room) {
    return [
      { x: room.x + 1, y: room.y + 1 },
      { x: room.x + room.width - 2, y: room.y + 1 },
      { x: room.x + 1, y: room.y + room.height - 2 },
      { x: room.x + room.width - 2, y: room.y + room.height - 2 }
    ];
  }
  /** 门两侧的墙砖（用于挂火把） */
  doorSideTiles(room, dx, dy, dir) {
    if (dir === "east" || dir === "west") {
      return [{ x: dx, y: dy - 1 }, { x: dx, y: dy + 1 }];
    }
    return [{ x: dx - 1, y: dy }, { x: dx + 1, y: dy }];
  }
  /**
   * 计算房间内自由点位及其距入口（门）的BFS距离。
   * 入口=房间所有门的位置；无门房间以中心为入口。
   */
  freeSpots(room, grid) {
    const entries = room.doors.map((d) => ({ x: d.x, y: d.y }));
    if (entries.length === 0) entries.push({ x: room.centerX, y: room.centerY });
    const dist = /* @__PURE__ */ new Map();
    const queue = [];
    for (const e of entries) {
      if (this.inRoom(room, e.x, e.y)) {
        dist.set(`${e.x},${e.y}`, 0);
        queue.push(e);
      }
    }
    while (queue.length > 0) {
      const cur = queue.shift();
      const d = dist.get(`${cur.x},${cur.y}`) ?? 0;
      for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        const key = `${nx},${ny}`;
        if (!this.inRoom(room, nx, ny)) continue;
        if (grid[ny][nx] !== 0) continue;
        if (dist.has(key)) continue;
        dist.set(key, d + 1);
        queue.push({ x: nx, y: ny });
      }
    }
    const spots = [];
    for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
      for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
        if (grid[y][x] !== 0) continue;
        spots.push({ x, y, dist: dist.get(`${x},${y}`) ?? 99 });
      }
    }
    return spots;
  }
  inRoom(room, x, y) {
    return x >= room.x && x < room.x + room.width && y >= room.y && y < room.y + room.height;
  }
  entityAt(rooms, x, y) {
    return rooms.some((r) => r.entities.some((e) => e.x === x && e.y === y));
  }
};

// src/map/MapValidator.ts
var MAX_PATH_ENUM = 500;
var MapValidator = class _MapValidator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_MapValidator.instance) _MapValidator.instance = new _MapValidator();
    return _MapValidator.instance;
  }
  /** 特殊层（初始/Boss）只验证连通性 */
  validate(rooms, connections, isNormal) {
    const errors = [];
    const adj = this.buildAdjacency(rooms, connections);
    const start = rooms[0];
    const end = rooms[rooms.length - 1];
    const dist = this.bfs(start.id, adj);
    for (const room of rooms) {
      const neighbors = adj.get(room.id) ?? [];
      if (neighbors.length === 0) errors.push(`\u623F\u95F4${room.id}\u65E0\u8FDE\u63A5\uFF08\u5B64\u7ACB\uFF09`);
      if (!dist.has(room.id)) errors.push(`\u623F\u95F4${room.id}\u4E0D\u53EF\u4ECE\u8D77\u70B9\u5230\u8FBE`);
    }
    let pathLengths = [];
    if (isNormal) {
      pathLengths = this.enumeratePaths(start.id, end.id, adj);
      if (pathLengths.length < 2) {
        errors.push(`\u8D77\u70B9\u5230\u7EC8\u70B9\u4EC5${pathLengths.length}\u6761\u8DEF\u5F84\uFF08\u8981\u6C42\u22652\uFF09`);
      } else {
        let ok = false;
        for (let i = 0; i < pathLengths.length && !ok; i++) {
          for (let j = i + 1; j < pathLengths.length && !ok; j++) {
            if (Math.abs(pathLengths[i] - pathLengths[j]) <= dataManager.mapGen.path.maxLengthDiff) ok = true;
          }
        }
        if (!ok) errors.push(`\u8DEF\u5F84\u957F\u5EA6\u5DEE\u5747>${dataManager.mapGen.path.maxLengthDiff}\uFF1A[${pathLengths.join(",")}]`);
      }
      const hasTrunkBattle = rooms.some((r) => (r.onPathA || r.onPathB) && (r.type === "combat" || r.type === "elite"));
      if (!hasTrunkBattle) errors.push("\u4E3B\u5E72\u4E0A\u6CA1\u6709\u6218\u6597\u623F\u95F4");
    }
    return { pass: errors.length === 0, errors, pathLengths };
  }
  /** BFS 距离表（也用于房间 depth） */
  bfs(fromId, adj) {
    const dist = /* @__PURE__ */ new Map([[fromId, 0]]);
    const queue = [fromId];
    while (queue.length > 0) {
      const cur = queue.shift();
      const d = dist.get(cur);
      for (const next of adj.get(cur) ?? []) {
        if (dist.has(next)) continue;
        dist.set(next, d + 1);
        queue.push(next);
      }
    }
    return dist;
  }
  /** 枚举起点→终点全部简单路径长度（封顶防爆炸） */
  enumeratePaths(fromId, toId, adj) {
    const lengths = [];
    const visited = /* @__PURE__ */ new Set([fromId]);
    const dfs = (node, depth) => {
      if (node === toId) {
        lengths.push(depth);
        return lengths.length >= MAX_PATH_ENUM;
      }
      for (const next of adj.get(node) ?? []) {
        if (visited.has(next)) continue;
        visited.add(next);
        const stop = dfs(next, depth + 1);
        visited.delete(next);
        if (stop) return true;
      }
      return false;
    };
    dfs(fromId, 1);
    return lengths;
  }
  buildAdjacency(rooms, connections) {
    const adj = new Map(rooms.map((r) => [r.id, []]));
    for (const conn of connections) {
      adj.get(conn.from)?.push(conn.to);
      adj.get(conn.to)?.push(conn.from);
    }
    return adj;
  }
};

// src/map/MapGenerator.ts
var MapGenerator = class _MapGenerator {
  static instance;
  /** 最近一次生成成功的尝试次数（诊断重试率） */
  lastAttempts = 1;
  constructor() {
  }
  static getInstance() {
    if (!_MapGenerator.instance) _MapGenerator.instance = new _MapGenerator();
    return _MapGenerator.instance;
  }
  generate(floorId) {
    const maxAttempts = dataManager.mapGen.generation.maxAttempts;
    let lastErrors = [];
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const floor = this.tryGenerate(floorId);
        if (floor) {
          this.lastAttempts = attempt;
          return floor;
        }
      } catch (err) {
        lastErrors = [String(err)];
      }
      if (attempt === 5 || attempt === 20) {
        Logger.warn(`[MapGen] \u697C\u5C42${floorId} \u7B2C${attempt}\u6B21\u5C1D\u8BD5\u5931\u8D25\uFF1A${lastErrors.join("; ") || "\u62D3\u6251\u9A8C\u8BC1\u672A\u901A\u8FC7"}`);
      }
    }
    throw new Error(`\u697C\u5C42${floorId}\u751F\u6210\u5931\u8D25\uFF08${maxAttempts}\u6B21\u5C1D\u8BD5\uFF09\uFF1A${lastErrors.join("; ")}`);
  }
  tryGenerate(floorId) {
    const floorGen = FloorGenerator.getInstance();
    const pathGen = PathGenerator.getInstance();
    const roomGen = RoomGenerator.getInstance();
    const corridorGen = CorridorGenerator.getInstance();
    const filler = ContentFiller.getInstance();
    const validator = MapValidator.getInstance();
    const alloc = floorGen.allocate(floorId);
    const plan = pathGen.plan(alloc);
    if (!pathGen.validateDiff(plan)) return null;
    const placed = roomGen.place(floorId, plan);
    if (!placed) return null;
    const rooms = placed.rooms;
    const grid = placed.grid;
    const corridorResult = corridorGen.connect(rooms, grid);
    const connections = corridorResult.connections;
    const adj = new Map(rooms.map((r) => [r.id, []]));
    for (const c of connections) {
      adj.get(c.from)?.push(c.to);
      adj.get(c.to)?.push(c.from);
    }
    const depths = validator.bfs(rooms[0].id, adj);
    for (const room of rooms) room.depth = depths.get(room.id) ?? 0;
    const check = validator.validate(rooms, connections, alloc.kind === "normal");
    if (!check.pass) {
      if (alloc.kind === "normal") return null;
      throw new Error(`\u7279\u6B8A\u5C42\u6821\u9A8C\u5931\u8D25: ${check.errors.join("; ")}`);
    }
    filler.fill(rooms, corridorResult.corridors, grid, floorId, alloc.kind);
    const start = rooms[0];
    return {
      floorId,
      kind: alloc.kind,
      rooms,
      corridors: corridorResult.corridors,
      connections,
      grid,
      width: grid[0].length,
      height: grid.length,
      entryX: start.centerX,
      entryY: start.centerY
    };
  }
  /** 调试辅助：控制台输出整层结构摘要 */
  describe(floor) {
    const lines = [];
    lines.push(`=== \u697C\u5C42 ${floor.floorId}\uFF08${floor.kind}\uFF09 ${floor.rooms.length}\u4E2A\u623F\u95F4 ${floor.corridors.length}\u6761\u8D70\u5ECA ===`);
    for (const room of this.roomsSorted(floor)) {
      const path = room.onPathA ? "A" : room.onPathB ? "B" : room.mountedOn ? "\u4FA7\u5BA4" : "-";
      lines.push(
        `#${room.order} ${room.type.padEnd(8, "\u3000")} \u7F51\u683C(${room.gx},${room.gy}) \u4E16\u754C(${room.x},${room.y}) ${room.width}x${room.height} \u6DF1${room.depth} \u8DEF\u5F84${path} \u6765\u6E90${room.fromDirection ?? "\u6839"} \u95E8${room.doors.length} \u5B9E\u4F53${room.entities.length}`
      );
    }
    lines.push(`\u5165\u53E3: (${floor.entryX},${floor.entryY}) \u8DEF\u5F84\u6570: \u89C1\u9A8C\u8BC1\u5668`);
    return lines.join("\n");
  }
  roomsSorted(floor) {
    return [...floor.rooms].sort((a, b) => a.order - b.order);
  }
};

// src/test/mapTest.ts
function emptyStats() {
  return {
    attempts: 0,
    failures: 0,
    retryReasons: {},
    roomCountHist: {},
    typeCount: {},
    merchantViolations: 0,
    extraCorridorHist: {},
    pathCountHist: {},
    monsterDistViolations: 0,
    gridReachFailures: 0,
    overlapViolations: 0,
    eliteOutsideEliteRoom: 0,
    chestRoomChestViolations: 0,
    totalAttempts: 0,
    maxAttemptsSeen: 0
  };
}
function gridReachable(floor) {
  const { grid } = floor;
  const seen = /* @__PURE__ */ new Set();
  const queue = [{ x: floor.entryX, y: floor.entryY }];
  if (grid[floor.entryY][floor.entryX] !== 0) return false;
  seen.add(`${floor.entryX},${floor.entryY}`);
  while (queue.length > 0) {
    const cur = queue.shift();
    for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (ny < 0 || ny >= floor.height || nx < 0 || nx >= floor.width) continue;
      if (grid[ny][nx] !== 0) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  for (const room of floor.rooms) {
    for (const door of room.doors) {
      if (!seen.has(`${door.x},${door.y}`)) return false;
    }
    for (const e of room.entities) {
      if ((e.kind === "stair" || e.kind === "npc" || e.kind === "chest" || e.kind === "monster" || e.kind === "boss") && !seen.has(`${e.x},${e.y}`)) return false;
    }
  }
  return true;
}
function noOverlap(floor) {
  for (let i = 0; i < floor.rooms.length; i++) {
    for (let j = i + 1; j < floor.rooms.length; j++) {
      const a = floor.rooms[i];
      const b = floor.rooms[j];
      const overlap = a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;
      if (overlap) return false;
    }
  }
  return true;
}
function run() {
  dataManager.loadAll();
  const gen = MapGenerator.getInstance();
  const validator = MapValidator.getInstance();
  const stats = emptyStats();
  const cfg = dataManager.mapGen;
  const FLOORS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 15, 19, 20, 21, 25, 30, 35, 40, 45, 50, 60];
  const ITER = 300;
  for (const floorId of FLOORS) {
    for (let it = 0; it < ITER; it++) {
      stats.attempts++;
      const floor = gen.generate(floorId);
      stats.totalAttempts += gen.lastAttempts;
      stats.maxAttemptsSeen = Math.max(stats.maxAttemptsSeen, gen.lastAttempts);
      if (floor.rooms.length < 4 && floorId !== 1 && floorId % 5 !== 0) stats.failures++;
      if (floor.rooms.length > cfg.maxRooms) stats.failures++;
      if (!noOverlap(floor)) {
        stats.overlapViolations++;
        stats.failures++;
      }
      if (!gridReachable(floor)) {
        stats.gridReachFailures++;
        stats.failures++;
      }
      const merchants = floor.rooms.filter((r) => r.type === "merchant").length;
      const cap = floor.rooms.length <= cfg.merchantLimit.fewMaxRooms ? cfg.merchantLimit.fewCount : cfg.merchantLimit.manyCount;
      if (merchants > cap) {
        stats.merchantViolations++;
        stats.failures++;
      }
      for (const room of floor.rooms) {
        stats.typeCount[room.type] = (stats.typeCount[room.type] ?? 0) + 1;
      }
      stats.roomCountHist[floor.rooms.length] = (stats.roomCountHist[floor.rooms.length] ?? 0) + 1;
      if (floorId === 1) {
        if (!(floor.kind === "initial" && floor.rooms.length === 2 && floor.rooms[0].type === "start" && floor.rooms[1].type === "end")) stats.failures++;
      } else if (floorId % 5 === 0) {
        if (!(floor.kind === "boss" && floor.rooms.length === 3 && floor.rooms[0].type === "rest" && floor.rooms[1].type === "boss" && floor.rooms[2].type === "end")) stats.failures++;
      }
      const extras = floor.corridors.filter((c) => c.extra).length;
      if (extras > cfg.corridor.extraMax) {
        stats.failures++;
      }
      stats.extraCorridorHist[extras] = (stats.extraCorridorHist[extras] ?? 0) + 1;
      if (floor.kind === "normal") {
        const check = validator.validate(floor.rooms, floor.connections, true);
        if (!check.pass) {
          stats.failures++;
        }
        stats.pathCountHist[check.pathLengths.length] = (stats.pathCountHist[check.pathLengths.length] ?? 0) + 1;
        const roomIds = floor.rooms.map((r) => r.id);
      }
      for (const room of floor.rooms) {
        const monsters = room.entities.filter((e) => e.kind === "monster");
        for (const m of monsters) {
          if (m.isElite && room.type !== "elite") {
            stats.eliteOutsideEliteRoom++;
            stats.failures++;
          }
        }
        if (room.type === "chest") {
          const chests = room.entities.filter((e) => e.kind === "chest").length;
          if (chests < cfg.content.chestRoomMin || chests > cfg.content.chestRoomMax) {
            stats.chestRoomChestViolations++;
            stats.failures++;
          }
        }
        const seen = /* @__PURE__ */ new Set();
        for (const e of room.entities) {
          const key = `${e.x},${e.y}`;
          if (seen.has(key) && e.kind !== "carpet") {
            stats.failures++;
          }
          if (e.kind !== "carpet") seen.add(key);
        }
      }
      const endRoom = floor.rooms[floor.rooms.length - 1];
      if (!endRoom.entities.some((e) => e.kind === "stair")) stats.failures++;
    }
  }
  console.log("=== \u9636\u6BB5\u4E00\u5730\u56FE\u751F\u6210\u538B\u529B\u6D4B\u8BD5 ===");
  console.log(`\u751F\u6210\u6B21\u6570: ${stats.attempts}  \u5931\u8D25\u65AD\u8A00: ${stats.failures}`);
  console.log(`\u5E73\u5747\u5C1D\u8BD5\u6B21\u6570: ${(stats.totalAttempts / stats.attempts).toFixed(2)}  \u6700\u5DEE: ${stats.maxAttemptsSeen}`);
  console.log(`\u623F\u95F4\u91CD\u53E0: ${stats.overlapViolations}  \u7F51\u683C\u4E0D\u53EF\u8FBE: ${stats.gridReachFailures}`);
  console.log(`\u5546\u4EBA\u8D85\u9650: ${stats.merchantViolations}  \u7CBE\u82F1\u623F\u5916\u7CBE\u82F1: ${stats.eliteOutsideEliteRoom}  \u5B9D\u7BB1\u623F\u6570\u91CF\u8FDD\u89C4: ${stats.chestRoomChestViolations}`);
  console.log("\u623F\u95F4\u6570\u5206\u5E03:", JSON.stringify(stats.roomCountHist));
  console.log("\u989D\u5916\u901A\u9053\u5206\u5E03:", JSON.stringify(stats.extraCorridorHist));
  console.log("\u8DEF\u5F84\u6570\u5206\u5E03:", JSON.stringify(stats.pathCountHist));
  console.log("\u623F\u95F4\u7C7B\u578B\u7EDF\u8BA1:", JSON.stringify(stats.typeCount));
  console.log("\n--- \u6837\u4F8B\uFF1A\u7B2C7\u5C42 ---");
  const sample = gen.generate(7);
  console.log(gen.describe(sample));
  console.log("\n--- \u6837\u4F8B\uFF1A\u7B2C5\u5C42\uFF08Boss\u5C42\uFF09 ---");
  console.log(gen.describe(gen.generate(5)));
  if (stats.failures > 0) {
    console.error("\n!!! \u5B58\u5728\u5931\u8D25\u65AD\u8A00 !!!");
    process.exit(1);
  } else {
    console.log("\n\u5168\u90E8\u901A\u8FC7 \u2714");
  }
}
run();
