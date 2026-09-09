/**
 * 魔塔RPG v2 —— 全局类型定义（待办v1.md）
 * 地图与房间系统 / 2.5D光影 / 装备与药水 / 界面整合 共享类型集中于此。
 */

// ============ 基础枚举 ============

/** 装备品质：7档（破烂/普通/优秀/稀有/史诗/传说/神话） */
export type Quality = 'poor' | 'common' | 'fine' | 'rare' | 'epic' | 'legendary' | 'mythic';

/** 装备槽位：武器 / 胸甲（共2个） */
export type EquipSlot = 'weapon' | 'armor';

/** 词条类型：12种（锋利/坚固/活力/精准/灵巧/强攻/铁壁/嗜血/业火/贪婪/博学/屠龙） */
export type AffixType =
  | 'sharp' | 'sturdy' | 'vitality'       // 锋利 攻击+ / 坚固 防御+ / 活力 生命+
  | 'precision' | 'agility'               // 精准 暴击% / 灵巧 闪避%
  | 'savage' | 'fortress'                 // 强攻 攻击% / 铁壁 防御%
  | 'lifesteal' | 'hellfire'              // 嗜血 吸血% / 业火 火伤+
  | 'greed' | 'wisdom' | 'dragonslayer';  // 贪婪 金币% / 博学 经验% / 屠龙 Boss伤%

/** 药水品质：5档（劣质/普通/优质/强效/圣药） */
export type PotionTier = 'crude' | 'normal' | 'quality' | 'strong' | 'holy';

/** 房间类型：起点/终点/战斗/精英/宝箱/商人/女巫/Boss/休整 */
/** 房间类型：起点/终点/战斗/精英/宝箱/商人/女巫/铁匠/Boss/休整 */
export type RoomType = 'start' | 'end' | 'combat' | 'elite' | 'chest' | 'merchant' | 'witch' | 'blacksmith' | 'boss' | 'rest';

/** 楼层类型：初始层(第1层固定) / Boss层(每5层) / 普通层 */
export type FloorKind = 'initial' | 'boss' | 'normal';

/** 方向 */
export type Direction = 'north' | 'south' | 'east' | 'west';

/** 地形编码：-1虚空（不绘制，显示背景色） 0空地 1墙 2装饰 */
export type TileCode = -1 | 0 | 1 | 2;

// ============ 地图与房间（文档二） ============

/** 地图实体（静态数据；运行时状态由 WorldManager 覆盖层管理） */
export interface MapEntity {
  id: string;
  kind: 'monster' | 'boss' | 'chest' | 'npc' | 'stair' | 'torch' | 'pillar' | 'carpet' | 'potion'
    | 'cauldron' | 'shelf' | 'fountain';
  x: number;
  y: number;
  /** 怪物/Boss：怪物定义ID */
  monsterId?: string;
  /** 精英标记（怪物） */
  isElite?: boolean;
  /** NPC定义ID */
  npcId?: string;
  /** 宝箱档次：普通 / 大宝箱（Boss奖励房） */
  chestTier?: 'normal' | 'grand';
  /** 药水档次（kind === 'potion' 时有效） */
  potionTier?: PotionTier;
  /** 楼梯目标楼层 */
  targetFloor?: number;
  /** 楼梯跨度：2 = 2×2 主实体（渲染整座阶梯）；1 = 2×2 占位从属格（只阻挡/触发，不渲染）；缺省 = 旧版单格 */
  stairSpan?: number;
}

/** 房间数据（文档二 4.3 输出） */
export interface RoomData {
  id: string;
  floorId: number;
  type: RoomType;
  /** 生成顺序（第几个生成，0起始） */
  order: number;
  /** 房间网格坐标（起点为 0,0） */
  gx: number;
  gy: number;
  /** 尺寸（格） */
  width: number;
  height: number;
  /** 世界格坐标（左上角，含墙壁圈） */
  x: number;
  y: number;
  /** 世界格中心 */
  centerX: number;
  centerY: number;
  /** 来源方向（相对上一个房间；起点房为 null） */
  fromDirection: Direction | null;
  /** 深度：连接图中距起点的房间数 */
  depth: number;
  /** 路径A主干成员 */
  onPathA: boolean;
  /** 路径B主干成员 */
  onPathB: boolean;
  /** 挂载目标（侧室挂到主干的房间ID） */
  mountedOn: string | null;
  /** 门（墙上开口，世界格坐标 + 朝向 + 通向房间） */
  doors: RoomDoor[];
  entities: MapEntity[];
  /** 内容布局模式（战斗/精英房由 ContentFiller 填充时记录：barrier/double/arena/scattered/throne） */
  layout?: string;
}

export interface RoomDoor {
  x: number;
  y: number;
  direction: Direction;
  toRoomId: string;
}

/** 走廊（文档二 第五节） */
export interface CorridorData {
  id: string;
  fromRoomId: string;
  toRoomId: string;
  /** 走廊地面格（世界坐标，不含两端门） */
  tiles: { x: number; y: number }[];
  /** true = 额外通道（固定通道之外） */
  extra: boolean;
}

/** 房间连接（拓扑图边） */
export interface RoomConnection {
  from: string;
  to: string;
}

/** 楼层地图（完整生成结果） */
export interface FloorMap {
  floorId: number;
  kind: FloorKind;
  rooms: RoomData[];
  corridors: CorridorData[];
  connections: RoomConnection[];
  /** 全楼层瓦片网格（含所有房间与走廊，1=墙 0=空地） */
  grid: TileCode[][];
  width: number;
  height: number;
  /** 玩家进入点（起点房中心） */
  entryX: number;
  entryY: number;
}

/** 实体运行时状态（存档用） */
export interface EntityRuntimeState {
  isAlive?: boolean;   // 怪物/Boss
  isOpened?: boolean;  // 宝箱
  isUsed?: boolean;    // 楼梯等一次性
  isTalked?: boolean;  // NPC
}

// ============ 怪物 ============

/** 怪物定义（monsters.json，文档五 5.2.1 占位敌人表） */
export interface MonsterDef {
  id: string;
  name: string;
  shape: 'circle' | 'square' | 'big_square';
  color: string;
  category: 'normal' | 'boss';
  floorMin: number;
  floorMax: number;
  weight: number;
  /** 相对楼层基准系数的倍率 */
  hpMul: number;
  atkMul: number;
  defMul: number;
  goldMul: number;
  expMul: number;
  /** 高度（2.5D，像素） */
  height: number;
  description: string;
}

/** 运行时怪物战斗属性（楼层系数 × 倍率 × 精英加成 实时计算） */
export interface MonsterStats {
  name: string;
  hp: number;
  attack: number;
  defense: number;
  exp: number;
  gold: number;
  isElite: boolean;
  isBoss: boolean;
}

// ============ 装备与药水（文档四） ============

/** 词条定义（equipmentTables.json） */
export interface AffixDef {
  type: AffixType;
  name: string;
  /** 品质下限（该品质及以上才可能出现） */
  minQuality: Quality;
  /** 数值是否为百分比 */
  isPercent: boolean;
  /** 数值区间按装备等级分4档：1-10 / 11-25 / 26-40 / 41-50 */
  bands: { maxEquipLevel: number; min: number; max: number }[];
  description: string;
}

/** 词条实例 */
export interface AffixInstance {
  type: AffixType;
  name: string;
  value: number;
  isPercent: boolean;
}

/** 装备实例 */
export interface Equipment {
  id: string;
  slot: EquipSlot;
  baseName: string;
  /** 显示名：品质前缀 + 基础名 + ·词条名 */
  name: string;
  level: number;
  quality: Quality;
  affixes: AffixInstance[];
  attack: number;
  defense: number;
  sellPrice: number;
  buyPrice: number;
  source: 'chest' | 'monster' | 'boss' | 'merchant' | 'quest' | 'tutorial';
  /** 收藏标记：置顶显示且无法回收 */
  isFavorite?: boolean;
}

/** 药水定义（potions.json） */
export interface PotionDef {
  tier: PotionTier;
  name: string;
  /** 回复最大生命百分比（0.2/0.3/0.45/0.6/0.8） */
  healPct: number;
  price: number;
  color: string;
  minFloor: number;
  maxFloor: number;
  icon: string;
}

// ============ 玩家 ============

/** 玩家运行时数据 */
export interface PlayerState {
  level: number;
  exp: number;
  hp: number;
  baseMaxHp: number;
  baseAttack: number;
  baseDefense: number;
  baseCritRate: number;
  baseDodgeRate: number;
  gold: number;
  keys: number;
  potions: Record<PotionTier, number>;
  /** 快捷栏绑定：5个槽位，可拖入药水（null=空） */
  hotbar: (PotionTier | null)[];
  weaponId: string | null;
  armorId: string | null;
  bag: Equipment[];
  x: number;
  y: number;
  currentFloor: number;
  currentRoomId: string;
}

/** 玩家聚合属性（基础 + 装备 + 词条） */
export interface PlayerStats {
  maxHp: number;
  attack: number;
  defense: number;
  critRate: number;
  dodgeRate: number;
  lifesteal: number;
  fireDamage: number;
  goldBonus: number;
  expBonus: number;
  bossDamage: number;
}

// ============ 战斗 ============

export interface BattleLogLine {
  turn: number;
  text: string;
  kind: 'player' | 'monster' | 'reward' | 'system';
}

export interface BattleResult {
  win: boolean;
  log: BattleLogLine[];
  damageTaken: number;
  turns: number;
  expGained: number;
  goldGained: number;
  monsterName: string;
  isBoss: boolean;
  isElite: boolean;
}

// ============ 2.5D 光影（光线追踪系统） ============
// 光源类型与数据结构：光照已由 Three.js 原生光源（Ambient/Directional/Point）实现。

/** 物体高度表（像素，文档三 4.1/4.2） */
export interface HeightConfig {
  player: number;
  monsterNormal: number;
  monsterElite: number;
  boss: number;
  chest: number;
  potion: number;
  torch: number;
  pillar: number;
  npc: number;
  stair: number;
  carpet: number;
  cauldron: number;
  shelf: number;
  fountain: number;
  wallByRoom: Record<RoomType, number | [number, number]>;
  corridorWall: number | [number, number];
}

// ============ NPC / 任务 ============

export interface NpcDef {
  id: string;
  name: string;
  color: string;
  lines: string[];
  /** 商人NPC标记 */
  isMerchant?: boolean;
  /** 铁匠标记（锻造服务） */
  isBlacksmith?: boolean;
  /** 女巫NPC标记（特殊药水交易） */
  isWitch?: boolean;
}

export interface QuestObjective {
  type: 'talk_npc' | 'defeat_monster' | 'open_chest' | 'equip_item' | 'use_potion' | 'reach_floor' | 'descend_stair';
  targetId?: string;
  /** reach_floor 目标楼层等数值参数 */
  value?: number;
  quantity: number;
}

export interface QuestReward {
  type: 'gold' | 'potion' | 'equipment' | 'keys' | 'exp';
  value?: number;
  tier?: PotionTier;
  quality?: Quality;
}

export interface QuestDef {
  id: string;
  name: string;
  description: string;
  objectives: QuestObjective[];
  rewards: QuestReward[];
  prerequisites: string[];
  guidance: string;
}

export interface QuestState {
  id: string;
  progress: number;
  isCompleted: boolean;
  isAccepted: boolean;
}

// ============ 粒子 ============

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  type: 'text' | 'circle';
  text?: string;
  opacity: number;
}

// ============ 存档（文档五 一） ============

export interface SaveData {
  version: string;
  lastSaved: string;
  player: PlayerState;
  quests: QuestState[];
  bestiary: Record<string, number>;
  /** 成就解锁表（成就ID → true） */
  achievements: Record<string, boolean>;
  /** 当前楼层完整布局（无种子系统，地图需整体序列化） */
  floor: FloorMap;
  entityStates: Record<string, EntityRuntimeState>;
  /** 引导标志：首次获得装备/首次死亡 等 */
  guidance: Record<string, boolean>;
  settings: GameSettings;
  stats: {
    totalMonstersDefeated: number;
    totalBossesDefeated: number;
    totalChestsOpened: number;
    steps: number;
  };
}

export interface GameSettings {
  autoSave: boolean;
  /** 帧率上限（每秒渲染帧数；0 = 不限制） */
  fpsCap: number;
}

// ============ 事件总线载荷 ============
export interface GameEventMap {
  gameStarted: Record<string, never>;
  floorChanged: { fromFloor: number; toFloor: number };
  roomEntered: { roomId: string; roomType: RoomType; depth: number; name: string };
  playerMoved: { x: number; y: number };
  stepsChanged: { steps: number };
  battleEnded: { result: BattleResult };
  monsterDefeated: { entityId: string; name: string; isElite: boolean; isBoss: boolean };
  bossDefeated: { floor: number; name: string };
  bossWarning: { floor: number; name: string };
  chestOpened: { entityId: string; roomType: RoomType };
  potionPicked: { entityId: string; tier: PotionTier; name: string };
  goldChanged: { oldValue: number; newValue: number; delta: number };
  hpChanged: { oldValue: number; newValue: number; delta: number };
  expChanged: { oldValue: number; newValue: number; delta: number };
  levelUp: { oldLevel: number; newLevel: number; gainedHp: number; gainedAttack: number; gainedDefense: number };
  equipmentGenerated: { equipment: Equipment; source: string };
  equipmentEquipped: { slot: EquipSlot; equipmentId: string; oldId: string | null };
  equipmentSold: { equipmentId: string; price: number };
  potionUsed: { tier: PotionTier; healed: number };
  potionPurchased: { tier: PotionTier; price: number };
  keyPurchased: { price: number };
  merchantOpened: { npcId: string; roomId: string };
  blacksmithOpened: { npcId: string; roomId: string };
  /** 女巫治疗泉：消耗金币回满生命（每层一次） */
  fountainUsed: { cost: number; healed: number };
  npcTalked: { npcId: string; name: string };
  playerDied: { cause: string };
  playerRevived: { penaltyGold: number };
  questAccepted: { questId: string };
  questUpdated: { questId: string; progress: number; total: number };
  questCompleted: { questId: string; name: string };
  saveCompleted: { trigger: 'auto' | 'manual' };
  achievementUnlocked: { id: string; name: string; unlock: string };
  returnToTitle: Record<string, never>;
  saveLoaded: Record<string, never>;
  saveCleared: Record<string, never>;
  settingsChanged: { key: string; value: unknown };
  notification: { message: string; type: 'info' | 'success' | 'warning' | 'error'; icon?: string };
  firstEquipmentGained: { equipment: Equipment };
  panelToggled: { panel: string; open: boolean };
  floatText: { x: number; y: number; text: string; color: string };
  gameRestarted: Record<string, never>;
}

// ============ 桌面端（Electron preload 暴露的能力） ============
declare global {
  interface Window {
    motaDesktop?: {
      isDesktop: boolean;
      setDisplayMode(opts: { mode: 'windowed' | 'fullscreen' | 'borderless'; resolution: string }): void;
      quit(): void;
    };
  }
}
