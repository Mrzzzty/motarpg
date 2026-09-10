/**
 * 魔塔RPG v2 —— 全局类型定义（待办v1.md）
 * 地图与房间系统 / 2.5D光影 / 装备与药水 / 界面整合 共享类型集中于此。
 */

// ============ 基础枚举 ============

/** 装备品质：7档（破烂/普通/优秀/稀有/史诗/传说/神话） */
export type Quality = 'poor' | 'common' | 'fine' | 'rare' | 'epic' | 'legendary' | 'mythic';

/** 装备槽位：武器 / 胸甲 / 饰品（饰品提供暴击或闪避，数值随品质与等级成长） */
export type EquipSlot = 'weapon' | 'armor' | 'accessory';

/** 饰品主属性：暴击率 / 闪避率（百分点） */
export type AccessoryStat = 'crit' | 'dodge';

/** 词条类型：12种（锋利/坚固/活力/精准/灵巧/强攻/铁壁/嗜血/业火/贪婪/博学/屠龙） */
export type AffixType =
  | 'sharp' | 'sturdy' | 'vitality'       // 锋利 攻击+ / 坚固 防御+ / 活力 生命+
  | 'precision' | 'agility'               // 精准 暴击% / 灵巧 闪避%
  | 'savage' | 'fortress'                 // 强攻 攻击% / 铁壁 防御%
  | 'lifesteal' | 'hellfire'              // 嗜血 吸血% / 业火 火伤+
  | 'greed' | 'wisdom' | 'dragonslayer';  // 贪婪 金币% / 博学 经验% / 屠龙 Boss伤%

/** 药水品质：5档（劣质/普通/优质/强效/圣药） */
export type PotionTier = 'crude' | 'normal' | 'quality' | 'strong' | 'holy';

// ============ 遗物（docs/遗物系统设计.md） ============

/** 遗物稀有度：-1 灾厄造物 / 0 尘芥 / 1 尘世遗物 / 2 圣遗物 / 3 神祇遗物 / 4 天堂（预留） */
export type RelicRarity = -1 | 0 | 1 | 2 | 3 | 4;

/** 遗物类别 */
export type RelicCategory = 'combat' | 'survival' | 'economy' | 'explore' | 'risk' | 'fun';

/** 灾厄造物子类型：start 开局灾厄 / risk 高风险中收益 / event 事件型（可净化） */
export type CurseSubtype = 'start' | 'risk' | 'event';

/** 遗物效果类型（声明式） */
export type RelicEffectType =
  | 'stat'          // 数值加成（flat/percent，可配 onLowHp/onHighHp 条件）
  | 'onKill'        // 击杀触发
  | 'onFloorEnter'  // 进层触发
  | 'onLowHp'       // 低血条件 + stat
  | 'onHighHp'      // 高血条件 + stat
  | 'onCrit'        // 暴击触发
  | 'passive'       // 常驻规则
  | 'none';         // 趣味类（无效果）

/** 遗物可影响的属性键 */
export type RelicStatKey =
  | 'attack' | 'defense' | 'maxHp'
  | 'critRate' | 'critDamage' | 'dodgeRate'
  | 'lifesteal' | 'thorns' | 'damageReduction' | 'damageTaken'
  | 'fireDamage' | 'bossDamage' | 'eliteBossDamage' | 'armorPen'
  | 'followUp' | 'firstStrikeDouble' | 'revive' | 'reviveOnce' | 'shieldEvery5'
  | 'goldBonus' | 'expBonus' | 'killGold' | 'potionBonus' | 'potionExtraPct'
  | 'merchantDiscount' | 'chestQualityUp' | 'monsterAttackUp'
  | 'revealStairs' | 'revealMap' | 'revealElite' | 'revealChest' | 'revealHidden'
  | 'revealAround' | 'teleport' | 'regenStep' | 'soulBonus' | 'showMonsterHp'
  | 'noPotion' | 'potionPerBattle' | 'chaos' | 'resetBuffOnFloor' | 'ambush' | 'firstStrikeBoost';

/** 单条遗物效果 */
export interface RelicEffect {
  type: RelicEffectType;
  /** 影响属性（stat/passive/onLowHp/onHighHp/onCrit 用） */
  stat?: RelicStatKey;
  value?: number;
  /** flat = 加法（默认）；percent = 百分比 */
  mode?: 'flat' | 'percent';
  /** 条件阈值（低血/高血比例，0~1） */
  threshold?: number;
  /** onFloorEnter/onKill 的动作：healPct/heal/key/hpLossPct/loseHp/gold/monsterAttackUp */
  action?: string;
  note?: string;
}

/** 遗物定义（relics.json） */
export interface RelicDef {
  id: string;
  name: string;
  rarity: RelicRarity;
  category: RelicCategory;
  /** 灾厄子类型（rarity === -1） */
  subtype?: CurseSubtype;
  /** C 类灾厄：专属净化目标 id（一对一） */
  purifyTo?: string;
  /** 参与的质变组合名 */
  combos?: string[];
  desc: string;
  effects: RelicEffect[];
  /** 图标：emoji 或图片路径（如 "img/relic/r001.png"）；缺省按类别给默认 emoji */
  icon?: string;
  /** 备注（进阶链 / 组合名 / 来源） */
  note?: string;
  /** 介绍 / 风味文案（图鉴与物品详情页展示） */
  lore?: string;
  /** 稀有度/数值未定标记 */
  tbd?: boolean;
  /** 专属遗物：不进任何随机掉落池（由剧情 / 难度开局指定授予） */
  exclusive?: boolean;
}

/** 物品详情页请求：点击遗物 / 装备 / 药水 / 钥匙 时发出 */
export type ItemDetailRequest =
  | { kind: 'relic'; id: string }
  | { kind: 'equipment'; id: string }
  | { kind: 'potion'; tier: PotionTier }
  | { kind: 'key' };

/** 房间类型：起点/终点/战斗/精英/宝箱/商人/女巫/Boss/休整 */
/** 房间类型：起点/终点/战斗/精英/宝箱/商人/女巫/铁匠/Boss/休整 */
export type RoomType = 'start' | 'end' | 'combat' | 'elite' | 'chest' | 'merchant' | 'witch' | 'blacksmith' | 'boss' | 'rest';

/** 楼层类型：初始层(第1层固定) / Boss层(每5层) / 塔顶层(第110层固定·假终点) / 普通层 */
export type FloorKind = 'initial' | 'boss' | 'summit' | 'normal';

/** 方向 */
export type Direction = 'north' | 'south' | 'east' | 'west';

/**
 * 通口类型（出口模式）——房间「有几条边相通、如何相通」的拓扑分类，是「入口类型」的离散化。
 * 依据**全部门（含入口）的边关系**自动判定（见 `src/map/ExitPattern.ts`）：
 *   单口(1) / 上下通口(一对对边,2) / 对角通口(一对邻边,2) / T型通口(3) / 四方通口(4)。
 * 运行时用于按「房间类型 + 通口类型」从手工房间库中抽取（见 `src/map/RoomLibrary.ts`）。
 */
export type ExitPattern = 'single' | 'vertical' | 'diagonal' | 'tee' | 'cross';

/** 地形编码：-1虚空（不绘制，显示背景色） 0空地 1墙 2装饰 4悬崖（不可通行深渊） */
export type TileCode = -1 | 0 | 1 | 2 | 4;

// ============ 地图与房间（文档二） ============

/** 地图实体（静态数据；运行时状态由 WorldManager 覆盖层管理） */
export interface MapEntity {
  id: string;
  kind: 'monster' | 'boss' | 'chest' | 'npc' | 'stair' | 'torch' | 'pillar' | 'carpet' | 'potion'
    | 'cauldron' | 'shelf' | 'fountain' | 'gate';
  x: number;
  y: number;
  /** 怪物/Boss：怪物定义ID */
  monsterId?: string;
  /** 精英标记（怪物） */
  isElite?: boolean;
  /** 所在房间深度（P0-1 深度倍率；缺省 = 1，兼容旧存档/旧调用） */
  depth?: number;
  /** 填充期计算的怪物属性（含深度倍率与同层收敛结果）；战斗时优先使用，缺省则实时计算（P0-2） */
  stats?: MonsterStats;
  /** NPC定义ID */
  npcId?: string;
  /** 宝箱档次：普通 / 大宝箱（Boss奖励房） / 遗物宝箱（三选一） */
  chestTier?: 'normal' | 'grand' | 'relic';
  /** 药水档次（kind === 'potion' 时有效） */
  potionTier?: PotionTier;
  /** 楼梯目标楼层 */
  targetFloor?: number;
  /** 楼梯跨度：2 = 2×2 主实体（渲染整座阶梯）；1 = 2×2 占位从属格（只阻挡/触发，不渲染）；缺省 = 旧版单格 */
  stairSpan?: number;
  /** 宝箱：所在房间风险级（收益结算用；缺省 1 = 旧行为） */
  riskTier?: number;
  /** 宝箱：收益倍率（ContentFiller 按房间风险写入；缺省 1 = 旧行为） */
  rewardMul?: number;
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
  /** 隐藏房间入口（P1-1：走廊侧墙的 1 格；玩家相邻时触发发现，发现后挖开） */
  hiddenEntrance?: { x: number; y: number };
  /** 门（墙上开口，世界格坐标 + 朝向 + 通向房间） */
  doors: RoomDoor[];
  entities: MapEntity[];
  /** 内容布局模式（战斗/精英房由 ContentFiller 填充时记录：barrier/double/arena/scattered/throne） */
  layout?: string;
  /** 风险等级 1~3（侧室 / 大房 / 高层更高）：守军更强、奖励更好——玩家据此权衡路线 */
  risk?: 1 | 2 | 3;
  /** 收益倍率（= 风险级对应 rewardMul；开箱结算 / UI 提示用） */
  rewardMul?: number;
  /**
   * 张力值：本房对路径张力的贡献（与 `mapGeneration.tension.weights` 同尺度，正=加压 / 负=泄压）。
   * 运行时为**已解析的最终值**（预制房可显式标注覆盖房型默认）。**保留给后续「房间类型决定」使用**
   * ——例如按张力梯度决定战斗/精英/安全房的落位，使手工房也能参与运气平衡器。
   */
  tension?: number;
  /**
   * 通口类型（由本房全部门方向判定）：与 `type` 一起构成「从手工房间库抽取」的键
   * （同一类型 + 同一通口类型仍可有多间房，用 `tension` 区分体验）。
   */
  pattern?: ExitPattern;
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
  /**
   * 隐藏房间（P1-1）：未发现的封闭侧室，不进入 rooms 列表（渲染/小地图天然不可见）；
   * 玩家走到入口相邻格触发发现后挖开并入 rooms。随楼层整体序列化，旧存档缺省为无。
   */
  hiddenRooms?: RoomData[];
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
  /** 饰品主属性类型（仅 slot === 'accessory'）：暴击 / 闪避 */
  accessoryStat?: AccessoryStat;
  /** 饰品主属性数值（百分点，一位小数；仅 slot === 'accessory'） */
  accessoryValue?: number;
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
  /** 饰品（旧存档无此字段 → 视为未装备） */
  accessoryId: string | null;
  bag: Equipment[];
  /** 持有遗物 ID 列表（永久绑定，本轮爬塔内持续生效；获取时可选丢弃） */
  relics: string[];
  /** 遗物复活（不灭之魂 / 不朽壁垒）本轮是否已用 */
  relicReviveUsed?: boolean;
  x: number;
  y: number;
  currentFloor: number;
  currentRoomId: string;
}

/** 玩家聚合属性（基础 + 装备 + 词条 + 遗物） */
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
  /** 额外暴击伤害（百分点，叠在基础暴击倍率上） */
  critDamage: number;
  /** 受到伤害减免（百分比） */
  damageReduction: number;
  /** 受到伤害增加（百分比，负面） */
  damageTaken: number;
  /** 反弹所受伤害（百分比） */
  thorns: number;
  /** 无视目标防御（百分比） */
  armorPen: number;
  /** 对精英与 Boss 伤害加成（百分比） */
  eliteBossDamage: number;
  /** 怪物攻击加成（百分比，负面） */
  monsterAttackUp: number;
  /** 药水回复量加成（百分比） */
  potionBonus: number;
  /** 药水额外回复最大生命（百分比） */
  potionExtraPct: number;
}

// ============ 战斗 ============

/** 战斗模式（文案规格 §5 [已确认]）：托管=自动打完+30%自动喝药；微操=逐回合手动 */
export type BattleMode = 'auto' | 'manual';

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
  /** 对话立绘（显示在对话框左侧，部分被对话框遮挡） */
  portrait?: string;
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
  /** 当前目标的进度（多目标任务时为「当前目标」内的进度） */
  progress: number;
  isCompleted: boolean;
  isAccepted: boolean;
  /** 多目标任务：当前推进到的目标序号（缺省 0） */
  objectiveIndex?: number;
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
  /** 战斗模式：托管 / 微操（文案规格 §5） */
  battleMode: BattleMode;
}

// ============ 事件总线载荷 ============
export interface GameEventMap {
  gameStarted: Record<string, never>;
  floorChanged: { fromFloor: number; toFloor: number };
  roomEntered: {
    roomId: string; roomType: RoomType; depth: number; name: string;
    /** 风险等级 1~3（>1 时 UI 提示「危险度 / 收益」，安全房为 1） */
    risk?: number;
    /** 收益倍率（与风险对应，开箱结算同一系数） */
    rewardMul?: number;
  };
  /** 发现隐藏房间（P1-1）：入口墙格被挖开，房间并入当前楼层 */
  hiddenRoomDiscovered: { roomId: string; x: number; y: number };
  playerMoved: { x: number; y: number };
  /** 主动交互（撞向 / 点击实体）——供 on_interact 事件触发 */
  entityInteracted: { kind: MapEntity['kind']; entityId: string };
  stepsChanged: { steps: number };
  /** manual=true 时战斗结果面板不自动弹出（微操面板自行收尾） */
  battleEnded: { result: BattleResult; manual?: boolean };
  /** 登顶反转演出播完（§4 假终点揭示，一次性旗标随存档） */
  summitRevealed: Record<string, never>;
  monsterDefeated: { entityId: string; name: string; monsterId?: string; isElite: boolean; isBoss: boolean };
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
  /** 获得遗物 */
  relicGained: { id: string; name: string; rarity: number };
  /** 发现遗物（掉落 / 开箱）：交给玩家抉择「收下 / 丢弃」，尚未入账 */
  relicOffered: { id: string; name: string; rarity: number; source: string };
  /** 请求遗物「三选一」（遗物宝箱） */
  relicChoiceRequested: { entityId: string; floor: number; count: number };
  /** 丢弃/净化遗物 */
  relicRemoved: { id: string; name: string };
  /** 组合质变觉醒 */
  relicComboTriggered: { combo: string; name: string; desc: string };
  /** C 类灾厄净化（灾厄形态 → 净化形态） */
  relicPurified: { from: string; to: string; name: string };
  /** 点击物品 → 打开物品详情页（信息卡片） */
  itemDetailRequested: ItemDetailRequest;
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
  /** 调试开关变化（点亮图鉴等），面板据此实时刷新 */
  debugFlagsChanged: Record<string, never>;
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
