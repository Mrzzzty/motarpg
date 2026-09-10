/**
 * 魔塔RPG —— 全局类型定义
 * 所有系统共享的接口/枚举均集中于此（规格书 7.1 项目结构）。
 */

// ============ 基础枚举 ============

/** 装备品质（6档，规格 F.2） */
export type Quality = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';

/** 难度等级（7档，规格 I.1） */
export type Difficulty = 'lullaby' | 'normal' | 'hard' | 'nightmare' | 'hell' | 'purgatory' | 'haven';

/** 装备槽位 */
export type EquipSlot = 'main_hand' | 'off_hand' | 'head' | 'body' | 'feet' | 'accessory_1' | 'accessory_2';

/** 装备大类 */
export type EquipType = 'weapon' | 'shield' | 'helmet' | 'chest' | 'boots' | 'accessory';

/** 词条类型（13种，规格 F.4） */
export type AffixType =
  | 'flat_atk' | 'flat_def' | 'flat_hp'
  | 'pct_atk' | 'pct_def'
  | 'crit_rate' | 'dodge_rate'
  | 'lifesteal' | 'fire_damage' | 'poison_on_hit'
  | 'gold_bonus' | 'exp_bonus' | 'boss_damage';

/** 藏品类型（规格 H.1） */
export type CollectibleType = 'attribute' | 'combat' | 'resource' | 'special';

/** 游戏模式：主线 / 无尽 */
export type GameMode = 'main' | 'endless';

/** 楼梯方向：up = 前往更深楼层 */
export type StairDirection = 'up' | 'down';

// ============ 地图与世界 ============

/** 地形编码：0空地 1墙 2装饰 4悬崖（规格 2.1.5） */
export type TileCode = 0 | 1 | 2 | 4;

/** 房间连接方向 */
export type Direction = 'north' | 'south' | 'east' | 'west';

/** 房间出口（门） */
export interface RoomExit {
  targetRoomId: string;
  direction: Direction;
  doorX: number;
  doorY: number;
  entryX: number;
  entryY: number;
  unlockCondition: string | null;
  isBossGate?: boolean;
}

/** 房间内实体（序列化数据，运行时状态由 SaveManager 覆盖层管理） */
export interface RoomEntity {
  id: string;
  type: 'monster' | 'item' | 'npc' | 'chest' | 'stair' | 'collectible' | 'portal' | 'spring' | 'merchant' | 'boss' | 'heal_point';
  x: number;
  y: number;
  /** 怪物/Boss */
  monsterId?: string;
  isElite?: boolean;
  varianceSeed?: number;
  /** 物品 */
  itemId?: string;
  quantity?: number;
  /** NPC */
  npcId?: string;
  /** 宝箱 */
  chestTier?: 'auto' | 'wooden' | 'iron' | 'golden' | 'dark_gold' | 'legendary';
  forcedQuality?: Quality | null;
  isLocked?: boolean;
  unlockCondition?: string | null;
  /** 楼梯 */
  stairDirection?: StairDirection;
  targetFloor?: number;
  targetRoomId?: string;
  targetX?: number;
  targetY?: number;
  stairGroupId?: string;
  /** 藏品 */
  collectibleId?: string;
  /** 商人 */
  merchantSeed?: number;
  /** 传送门类型：进入无尽 / 从无尽返回 */
  portalKind?: 'endless_enter' | 'endless_exit';
}

/** 房间实例 */
export interface Room {
  roomId: string;
  floorId: number;
  width: number;
  height: number;
  tiles: number[][];
  depth: number;
  gridX: number;
  gridY: number;
  isStartRoom: boolean;
  roomKind: 'start' | 'normal' | 'stair' | 'rest' | 'boss' | 'reward' | 'gate_battle' | 'gate_treasure' | 'gate_advance' | 'entry';
  entities: RoomEntity[];
  exits: RoomExit[];
}

/** 楼梯组信息（跨层配对用，规格 2.1.6） */
export interface StairGroupInfo {
  groupId: string;
  upRoomId: string;
  upGridX: number;
  upGridY: number;
}

/** 房间连接（拓扑图） */
export interface RoomConnection {
  from: string;
  to: string;
  condition: string | null;
}

/** 楼层实例 */
export interface FloorInstance {
  floorId: number;
  floorName: string;
  isTutorial: boolean;
  isBossFloor: boolean;
  mode: GameMode;
  roomIds: string[];
  stairGroups: StairGroupInfo[];
  connections: RoomConnection[];
}

// ============ 玩家与战斗 ============

/** 状态效果实例（规格 A.1） */
export interface StatusEffectInstance {
  effectId: string;
  stacks: number;
  remainingTurns: number;
}

/** 状态效果定义（statusEffects.json） */
export interface StatusEffectDef {
  id: string;
  name: string;
  type: 'buff' | 'debuff';
  duration: number;
  stackable: boolean;
  maxStacks?: number;
  icon: string;
  description: string;
}

/** 战斗参与者（规格 2.3.4） */
export interface Combatant {
  uid: string;
  name: string;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  critRate: number;
  dodgeRate: number;
  damageBonus: number;
  statusEffects: StatusEffectInstance[];
  isAlive(): boolean;
  takeDamage(damage: number): void;
}

/** 战斗修正（装备词条+藏品聚合） */
export interface CombatModifiers {
  lifesteal: number;
  fireDamage: number;
  poisonOnHit: number;
  thorns: number;
  goldBonus: number;
  expBonus: number;
  soulBonus: number;
  bossDamage: number;
  bossDamageReduction?: number;
}

/** 资源修正 */
export interface ResourceModifiers {
  goldBonus: number;
  expBonus: number;
  soulBonus: number;
}

/** 战斗日志行 */
export interface BattleLogLine {
  turn: number;
  text: string;
  kind: 'player' | 'monster' | 'status' | 'reward' | 'system';
}

/** 战斗结算 */
export interface BattleResult {
  win: boolean;
  log: BattleLogLine[];
  damageTaken: number;
  turns: number;
  expGained: number;
  goldGained: number;
  soulGained: number;
  droppedItems: { itemId: string; quantity: number }[];
  droppedEquipmentIds: string[];
  droppedCollectibleId: string | null;
  isBoss: boolean;
  monsterName: string;
}

/** 战斗预测（用于死亡确认） */
export interface BattleForecast {
  win: boolean;
  damageTaken: number;
  turns: number;
  remainingHp: number;
}

// ============ 怪物与Boss ============

/** 怪物定义（monsters.json） */
export interface MonsterDef {
  id: string;
  name: string;
  icon: string;
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  baseExp: number;
  baseGold: number;
  weakness: string[];
  drops: string[];
  spawnFloorMin: number;
  spawnFloorMax: number;
  weight: number;
  unlockThreshold: number;
  description: string;
}

/** Boss定义（bossNames.json 条目） */
export interface BossDef {
  floor: number;
  bossId: string;
  name: string;
  title: string;
  icon: string;
  color: string;
}

/** Boss词缀定义（bossAffixes.json，规格 J.2） */
export interface BossAffixDef {
  id: string;
  name: string;
  description: string;
  icon: string;
  weight: number;
}

/** Boss运行时信息 */
export interface BossRuntimeInfo {
  bossId: string;
  name: string;
  title: string;
  icon: string;
  affixes: string[];
  suggestedPower: number;
  modifier: 'unstoppable' | 'standard' | 'underdog';
}

// ============ 物品与装备 ============

/** 消耗品/材料定义（items.json） */
export interface ItemDef {
  id: string;
  name: string;
  icon: string;
  type: 'potion' | 'key' | 'material' | 'special';
  effect?: { type: 'heal' | 'heal_pct' | 'add_soul' | 'add_gold' | 'add_exp'; value: number };
  buyPrice: number;
  sellPrice: number;
  description: string;
}

/** 装备模板（itemTemplates.json） */
export interface ItemTemplate {
  id: string;
  name: string;
  icon: string;
  type: EquipType;
  slot: EquipSlot;
  attack: number;
  defense: number;
  hpBonus: number;
  sellPrice: number;
  spawnFloorMin: number;
  description: string;
}

/** 词条定义（itemTemplates.json -> affixes） */
export interface AffixDef {
  type: AffixType;
  affixName: string;
  category: 'primary' | 'percent' | 'secondary' | 'special';
  min: number;
  max: number;
  minQuality: Quality;
  weight: number;
  perLevel: number;
  format: 'flat' | 'pct';
  description: string;
}

/** 装备词条实例 */
export interface Affix {
  id: string;
  type: AffixType;
  name: string;
  value: number;
  description: string;
}

/** 装备实例（规格 F.1） */
export interface Equipment {
  id: string;
  baseItemId: string;
  name: string;
  type: EquipType;
  slot: EquipSlot;
  level: number;
  quality: Quality;
  affixes: Affix[];
  baseAttack: number;
  baseDefense: number;
  baseHpBonus: number;
  finalAttack: number;
  finalDefense: number;
  finalHpBonus: number;
  sellPrice: number;
  buyPrice: number;
  generatedAt: string;
  source: 'chest' | 'merchant' | 'craft' | 'boss' | 'quest' | 'monster';
}

/** 背包物品 */
export interface InventoryItem {
  itemId: string;
  quantity: number;
}

// ============ 藏品 ============

/** 藏品效果（规格 H.1） */
export interface CollectibleEffect {
  type: string;
  value: number;
  description: string;
}

/** 藏品定义（collectibles.json） */
export interface CollectibleDef {
  id: string;
  name: string;
  description: string;
  lore: string;
  icon: string;
  type: CollectibleType;
  rarity: Quality;
  effect: CollectibleEffect;
  isUnique: boolean;
  series?: string;
  acquisitionHint: string;
}

/** 藏品系列 */
export interface CollectibleSeries {
  id: string;
  name: string;
  description: string;
  reward: QuestReward;
  memberIds: string[];
}

// ============ 任务与成就 ============

export type QuestObjectiveType =
  | 'defeat_monster' | 'defeat_boss' | 'collect_item' | 'reach_floor'
  | 'explore_room' | 'talk_npc' | 'level_up' | 'collect_collectible'
  | 'open_chest' | 'equip_item';

export interface QuestObjective {
  type: QuestObjectiveType;
  targetId: string;
  quantity: number;
  currentProgress: number;
}

export interface QuestReward {
  type: 'exp' | 'gold' | 'soul' | 'item' | 'attribute' | 'title' | 'collectible';
  value: number | string;
  quantity?: number;
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  type: 'main' | 'side' | 'daily';
  objectives: QuestObjective[];
  rewards: QuestReward[];
  isRepeatable: boolean;
  prerequisites: string[];
  isCompleted: boolean;
  isTracked: boolean;
}

export type AchievementCondition =
  | { type: 'level'; value: number }
  | { type: 'total_gold'; value: number }
  | { type: 'total_soul'; value: number }
  | { type: 'defeat_monster'; monsterId: string; quantity: number }
  | { type: 'reach_floor'; value: number }
  | { type: 'defeat_boss'; quantity: number }
  | { type: 'equip_legendary'; quantity: number }
  | { type: 'collect_series'; seriesId: string }
  | { type: 'status_applied'; effectId: string; quantity: number }
  | { type: 'collect_collectibles'; quantity: number }
  | { type: 'complete_quests'; quantity: number }
  | { type: 'open_chests'; quantity: number }
  | { type: 'play_time'; value: number };

export interface AchievementDef {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: AchievementCondition;
  reward: QuestReward;
  isHidden: boolean;
}

// ============ 事件系统 ============

export type EventEffectType =
  | 'damage' | 'heal' | 'add_item' | 'remove_item' | 'add_status'
  | 'remove_status' | 'spawn_monster' | 'show_dialog' | 'add_exp'
  | 'change_room' | 'teleport' | 'give_quest' | 'complete_quest'
  | 'add_collectible' | 'add_soul' | 'open_chest' | 'heal_full'
  | 'add_gold';

export interface EventEffect {
  type: EventEffectType;
  value: unknown;
  quantity?: number;
  target?: 'player' | 'all';
  duration?: number;
}

export interface EventOption {
  text: string;
  condition?: string;
  effects: EventEffect[];
}

export interface RoomEventDef {
  id: string;
  roomId: string | null;
  triggerType: 'on_enter' | 'on_step' | 'on_interact' | 'on_defeat_all';
  triggerProbability: number;
  condition?: string;
  title: string;
  description: string;
  icon: string;
  options: EventOption[];
  once: boolean;
  minFloor?: number;
  maxFloor?: number;
}

// ============ NPC与对话 ============

export interface NpcDef {
  id: string;
  name: string;
  icon: string;
  lines: string[];
}

// ============ 难度 ============

export interface DifficultyConfig {
  id: Difficulty;
  name: string;
  description: string;
  monsterMultiplier: number;
  expMultiplier: number;
  goldMultiplier: number;
  qualityBonus: number;
  collectibleDropRate: number;
  bossMultiplier: number;
  unlockFloor: number;
  icon: string;
  color: string;
  isEndgame: boolean;
}

// ============ 数值表（gameConfig.json） ============

export interface FloorCoefficientRow {
  minFloor: number;
  maxFloor: number;
  atk: number;
  def: number;
  hp: number;
  exp: number;
  gold: number;
}

export interface DepthMultiplierRow {
  depth: number;
  monster: number;
  gold: number;
  exp: number;
  minQuality: Quality | 'none';
  collectible: number;
}

export interface GrowthRow {
  minLevel: number;
  maxLevel: number;
  hp: number;
  attack: number;
  defense: number;
}

export interface ChestTierDef {
  tier: 'wooden' | 'iron' | 'golden' | 'dark_gold' | 'legendary';
  name: string;
  probability: number;
  goldMultiplier: number;
  expMultiplier: number;
  minQuality: Quality;
  extraAffixes: number;
  collectibleMultiplier: number;
  color: string;
  icon: string;
}

export interface GameConfig {
  tileSize: number;
  viewportWidth: number;
  viewportHeight: number;
  playerBase: {
    maxHp: number; attack: number; defense: number;
    critRate: number; dodgeRate: number; damageBonus: number;
    level: number; exp: number; gold: number; soul: number;
  };
  expFormula: { base: number; linear: number; power: number; powerExp: number };
  growthTable: GrowthRow[];
  depthTable: DepthMultiplierRow[];
  depthOverflow: { monsterBase: number; monsterStep: number; goldBase: number; goldStep: number; expBase: number; expStep: number; collectibleBase: number; collectibleStep: number };
  floorCoefficients: FloorCoefficientRow[];
  floorOverflowFactor: { atk: number; def: number; hp: number; exp: number; gold: number };
  battle: {
    defenseMitigation: number;
    critMultiplier: number;
    maxTurns: number;
    underpoweredThreshold: number;
    overpoweredThreshold: number;
    unstoppableAtk: number;
    unstoppableDef: number;
    unstoppableHp: number;
    underdogDef: number;
    underdogMinTurns: number;
  };
  boss: {
    atkBase: number; atkPerFloor: number;
    defBase: number; defPerFloor: number;
    hpBase: number; hpPerFloor: number;
    expMultiplier: number;
    goldMultiplier: number;
    soulBase: number;
    soulPerFloor: number;
    affixMin: number;
    affixMax: number;
  };
  chest: ChestTierDef[];
  chestDrop: {
    goldBase: number; goldPerFloor: number; goldPerDepth: number; goldRandom: number;
    expBase: number; expPerFloor: number; expPerDepth: number; expRandom: number;
    equipBase: number; equipPerFloor: number; equipPerDepth: number; equipCap: number;
    potionChance: number; potionMin: number; potionMax: number;
    soulBase: number; soulPerFloor: number; soulCap: number; soulMin: number; soulMax: number;
    collectibleBase: number; collectiblePerFloor: number; collectiblePerDepth: number; collectibleCap: number;
    rareUpgradePer10Floors: number;
  };
  monsterDrop: {
    equipBase: number; equipPerFloor: number; equipCap: number;
    potionChance: number;
    collectibleChance: number; eliteCollectibleChance: number;
    soulChance: number; eliteSoulChance: number;
  };
  merchant: {
    baseCount: number; perFloorDivisor: number; maxCount: number;
    potionBase: number; potionPerFloor: number; potionQtyBase: number;
    keyMinFloor: number; keyBase: number; keyPerFloor: number;
    soulEquipMinFloor: number; soulEquipChance: number; soulPriceBase: number; soulPricePer10Floors: number;
    collectibleMinFloor: number; collectibleChance: number; collectibleSoulBase: number; collectiblePer15Floors: number;
    priceJitterMin: number; priceJitterMax: number;
  };
  endless: {
    unlockAfterFloor: number;
    monsterAtkPerFloor: number;
    monsterDefPerFloor: number;
    monsterHpPerFloor: number;
    rareChestBase: number; rareChestPerFloor: number; rareChestCap: number;
    legendaryChestBase: number; legendaryChestPerFloor: number; legendaryChestCap: number;
    bossAtkPerFloor: number; bossDefPerFloor: number; bossHpPerFloor: number;
    rewardBonus: number;
    legendaryEquipMinFloor: number;
    guaranteedCollectibleMinFloor: number;
    difficultyLinkPerFloor: number;
    eliteStatMultiplier: number;
  };
  quality: Record<Quality, {
    name: string; color: string; probability: number; affixCount: number;
    affixBonus: number; statMultiplier: number; sellMultiplier: number; buyMultiplier: number;
  }>;
  qualityFloorFactor: Record<Quality, { floor: number; depth: number }>;
  affixCountBonus: Record<Quality, { per15Levels: number; levelThreshold: number; per3Depth: number; depthThreshold: number }>;
  namePrefixes: Record<Quality, string[]>;
  floors: {
    roomCountMin: number;
    roomCountMax: number;
    roomCountMaxLate: number;
    lateFloorThreshold: number;
    tutorialRoomCount: number;
    bossFloorInterval: number;
  };
  regen: {
    regenCollectibleSteps: number;
    autoHealIntervalMs: number;
  };
  camera: { lerp: number; transitionMs: number };
  autosaveIntervalMs: number;
  saveKey: string;
  saveVersion: string;
  stairPairTolerance: number;
  maxInventorySlots: number;
}

// ============ 世界配置 ============

export interface WorldConfig {
  worldName: string;
  maxFloors: number;
  maxRoomsPerFloor: number;
  bossFloorInterval: number;
  difficultyUnlockFloor: number;
  havenUnlockFloor: number;
  tutorial: {
    floorId: number;
    roomIds: string[];
  };
  floorNames: { minFloor: number; maxFloor: number; names: string[] }[];
}

// ============ 图鉴 ============

export interface BestiaryEntry {
  monsterId: string;
  defeatCount: number;
  isUnlocked: boolean;
}

export interface CollectibleEntry {
  collectibleId: string;
  isFound: boolean;
}

// ============ 存档（规格第六部分） ============

export interface EntityPersistState {
  isAlive?: boolean;
  isOpened?: boolean;
  isTriggered?: boolean;
  isDefeated?: boolean;
  isFound?: boolean;
  isUsed?: boolean;
  state?: unknown;
}

export interface SaveData {
  version: string;
  lastSaved: string;
  seed: number;
  player: {
    level: number;
    exp: number;
    hp: number;
    maxHp: number;
    gold: number;
    soul: number;
    baseAttack: number;
    baseDefense: number;
    critRate: number;
    dodgeRate: number;
    damageBonus: number;
    statusEffects: StatusEffectInstance[];
    equipment: Record<EquipSlot, string | null>;
    currentFloor: number;
    currentRoomId: string;
    playerX: number;
    playerY: number;
    currentDifficulty: Difficulty;
  };
  inventory: InventoryItem[];
  equipmentInstances: Equipment[];
  collectibles: string[];
  seriesRewarded: string[];
  world: {
    entityStates: Record<string, EntityPersistState>;
  };
  quests: {
    activeQuestIds: string[];
    completedQuestIds: string[];
    questProgress: Record<string, number>;
  };
  achievements: {
    unlockedAchievementIds: string[];
  };
  bestiary: Record<string, number>;
  foundCollectibles: string[];
  endless: {
    currentFloor: number;
    isActive: boolean;
    bestFloor: number;
    returnFloor: number;
    returnRoomId: string;
  };
  bossFloors: { floorId: number; isDefeated: boolean; defeatedAt: string }[];
  stats: {
    totalMonstersDefeated: number;
    totalBossesDefeated: number;
    totalChestsOpened: number;
    totalGoldEarned: number;
    totalSoulEarned: number;
    totalCollectiblesFound: number;
    playTimeSeconds: number;
    floorsExplored: number;
    steps: number;
  };
}

// ============ 事件总线载荷（规格 7.4 预定义事件） ============

export interface PositionPayload { x: number; y: number; }

export interface GameEventMap {
  monsterDefeated: { monsterId: string; name: string; expGained: number; goldGained: number; position: PositionPayload; isElite: boolean };
  bossDefeated: { bossId: string; floor: number; name: string; expGained: number; goldGained: number; soulGained: number; mode: GameMode };
  bossEntered: { bossId: string; floor: number; bossName: string; powerRatio: number; modifier: string };
  itemCollected: { itemId: string; quantity: number; position: PositionPayload };
  collectibleCollected: { collectibleId: string; name: string; position: PositionPayload };
  roomEntered: { roomId: string; floor: number; depth: number; mode: GameMode };
  floorChanged: { fromFloor: number; toFloor: number; viaStair: StairDirection; mode: GameMode };
  difficultyChanged: { from: Difficulty; to: Difficulty };
  levelUp: { oldLevel: number; newLevel: number; gainedAttack: number; gainedDefense: number; gainedHp: number };
  statusApplied: { targetId: string; effectId: string; stacks: number; duration: number };
  statusRemoved: { targetId: string; effectId: string };
  questCompleted: { questId: string; rewards: QuestReward[] };
  questUpdated: { questId: string; objectiveIndex: number; progress: number; total: number };
  questAccepted: { questId: string };
  achievementUnlocked: { achievementId: string; name: string; reward: QuestReward };
  goldChanged: { oldValue: number; newValue: number; delta: number };
  soulChanged: { oldValue: number; newValue: number; delta: number };
  hpChanged: { oldValue: number; newValue: number; delta: number };
  expChanged: { oldValue: number; newValue: number; delta: number };
  chestOpened: { chestId: string; tier: string; rewards: unknown };
  merchantTrade: { itemId: string; price: number; type: string };
  equipmentEquipped: { slot: EquipSlot; equipmentId: string; oldId: string | null };
  equipmentGenerated: { equipment: Equipment };
  gamePaused: Record<string, never>;
  gameResumed: Record<string, never>;
  playerDied: { cause: string };
  playerStatsChanged: Record<string, never>;
  stepsChanged: { steps: number };
  saveCompleted: Record<string, never>;
  saveLoaded: Record<string, never>;
  notification: { message: string; type: 'info' | 'success' | 'warning' | 'error'; icon?: string };
  eventTriggered: { eventId: string };
  endlessEntered: { floor: number };
  endlessExited: { bestFloor: number };
  shopOpened: { merchantEntityId: string };
  dialogQueued: Record<string, never>;
  battleEnded: { result: BattleResult };
  monsterSpawned: { monsterId: string; roomId: string };
  havenUnlocked: Record<string, never>;
  gameOver: Record<string, never>;
}

// ============ 商人 ============

export interface MerchantItem {
  kind: 'potion' | 'key' | 'equipment' | 'soul_equipment' | 'soul_collectible';
  id: string;
  name: string;
  icon: string;
  price: number;
  currency: 'gold' | 'soul';
  quantity: number;
  equipment?: Equipment;
  collectibleId?: string;
  description: string;
  sold: boolean;
}

// ============ 粒子与特效 ============

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  type: 'text' | 'circle' | 'spark' | 'star' | 'glow';
  text?: string;
  opacity: number;
  gravity?: number;
  scale?: number;
}
