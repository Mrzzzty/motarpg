/**
 * 区段主题表（游戏文案 + 美术规格 v1 §0/§2/§3）：
 * 塔身向上「由压抑到空灵」，整体色温从冷转暖再归冷。
 * 渲染（ThreeRenderer/PostProcessing）、UI（TierTitle/GameUI CSS 变量）、
 * 地图（塔顶封顶）三侧共用此单一数据源，勿在别处另抄配色/文案。
 *
 * 状态标记对应文案规格：大字/氛围为[推荐稿]，呈现规则为[已确认]。
 */

/** 塔总层数：110 层封顶（第 110 层为塔顶·假终点，地下段待定不落地） */
export const MAX_FLOOR = 110;

/** 墙面材质变体（ThreeTextures 按此产出程序化纹理） */
export type TierWall = 'brick' | 'moss' | 'shelf' | 'starstone' | 'brass' | 'marble';

/** 窗景变体（窗外/远景，§3） */
export type TierWindow = 'rooftops' | 'garden' | 'clouds' | 'starry' | 'gears' | 'light';

/** 氛围粒子基调（§0：低密度、风格化，圆点/方形 sprite） */
export type TierParticle = 'none' | 'spore' | 'dust' | 'stardust' | 'ember';

/** 标题卡背景美术类型 */
export type TierCardBg = 'brick' | 'moss' | 'book' | 'stars' | 'gears' | 'halo';

export interface TierTheme {
  id: string;
  /** 区段短名（进层提示「进入【…】」用） */
  name: string;
  /** 区段全名（标题卡上方小字） */
  fullName: string;
  fromFloor: number;
  toFloor: number;

  titleCard: {
    /** 大字（[推荐稿]） */
    big: string;
    /** 氛围文案（[推荐稿]） */
    vibe: string;
    /** 主题主色 / 副色 */
    main: string;
    sub: string;
    /** 光晕色（冷白 / 暖金 / 紫辉…） */
    glow: string;
    /** 字体风格 class（style.css 内定义各区段字形） */
    fontClass: 'tt-stone' | 'tt-vine' | 'tt-serif' | 'tt-star' | 'tt-brass' | 'tt-minimal';
    bg: TierCardBg;
    /** 大字间距（em）：观星台/塔顶拉宽 */
    letterSpacing?: number;
  };

  /** 光照（§0：风格化定向光 + 软阴影；允许非自然光色） */
  light: {
    hemiSky: number;
    hemiGround: number;
    hemiIntensity: number;
    dirColor: number;
    dirIntensity: number;
  };

  /** 后处理（§0：色温偏移轻量 LUT + 暗角随层级上调） */
  grade: {
    /** RGB 乘法色温（>1 增强该通道） */
    tint: [number, number, number];
    tintStrength: number;
    vignette: number;
  };

  /** 场景虚空底色（无天空盒时的背景） */
  bgColor: number;
  /** 是否可见星空与月亮（观星台/塔顶离天更近） */
  sky: boolean;

  /** 窗景自发光色（光影 v2 §6：窗面 emissive，随区段冷/暖） */
  windowGlow: number;

  wall: TierWall;
  windowView: TierWindow;
  particle: TierParticle;
  /** 地板材质乘法色（整体色温倾向） */
  floorTint: number;

  /** UI 强调色（CSS --accent / --accent-cool，§5 战斗面板随层级配色） */
  uiAccent: string;
  uiAccentCool: string;

  /** 引导者低语（§6 [推荐稿]，可选；区段进入后画面边缘手写体浮现） */
  whisper?: string;
}

export const TIERS: TierTheme[] = [
  {
    id: 'base',
    name: '塔楼底部',
    fullName: '塔楼底部 · 青砖世界',
    fromFloor: 1,
    toFloor: 15,
    titleCard: {
      big: '青砖之基',
      vibe: '冰冷的砖石围成一个世界，你从这里醒来。向上，是唯一的出路。',
      main: '#6b7b8c',
      sub: '#2b3a4a',
      glow: '#dfe9f4',
      fontClass: 'tt-stone',
      bg: 'brick',
    },
    light: { hemiSky: 0x4d5a72, hemiGround: 0x241b12, hemiIntensity: 0.45, dirColor: 0xdfe9ff, dirIntensity: 0.38 },
    grade: { tint: [0.88, 0.96, 1.12], tintStrength: 0.22, vignette: 0.1 },
    bgColor: 0x05080d,
    sky: false,
    wall: 'brick',
    windowView: 'rooftops',
    particle: 'none',
    floorTint: 0xffffff,
    windowGlow: 0x8fa8c0,
    uiAccent: '#8fb3d9',
    uiAccentCool: '#5a7ba0',
  },
  {
    id: 'garden',
    name: '底层',
    fullName: '底层 · 苔园与锻窟',
    fromFloor: 16,
    toFloor: 40,
    titleCard: {
      big: '苔园锻火',
      vibe: '藤蔓攀上熔炉，草木与铁砧共生。此处万物都在被锻造——包括你。',
      main: '#7db56a',
      sub: '#d9722e',
      glow: '#ffd9a0',
      fontClass: 'tt-vine',
      bg: 'moss',
    },
    light: { hemiSky: 0x5a7a58, hemiGround: 0x30200f, hemiIntensity: 0.5, dirColor: 0xffe9c9, dirIntensity: 0.42 },
    grade: { tint: [1.06, 1.0, 0.88], tintStrength: 0.18, vignette: 0.2 },
    bgColor: 0x070f09,
    sky: false,
    wall: 'moss',
    windowView: 'garden',
    particle: 'spore',
    floorTint: 0xeaf5df,
    windowGlow: 0xd9722e,
    uiAccent: '#8fc77a',
    uiAccentCool: '#d9722e',
    whisper: '还在向上么？……也好。',
  },
  {
    id: 'library',
    name: '中层',
    fullName: '中层 · 图书馆',
    fromFloor: 41,
    toFloor: 60,
    titleCard: {
      big: '静默书海',
      vibe: '书页的气息漫过石阶，千万卷沉默的知识在等你翻阅。',
      main: '#e8dcc0',
      sub: '#7a5a3a',
      glow: '#ffe9bd',
      fontClass: 'tt-serif',
      bg: 'book',
    },
    light: { hemiSky: 0x6a5a48, hemiGround: 0x2a1c10, hemiIntensity: 0.48, dirColor: 0xffd9a0, dirIntensity: 0.4 },
    grade: { tint: [1.1, 1.0, 0.82], tintStrength: 0.2, vignette: 0.22 },
    bgColor: 0x0d0a06,
    sky: false,
    wall: 'shelf',
    windowView: 'clouds',
    particle: 'dust',
    floorTint: 0xf5e8d2,
    windowGlow: 0xe8dcc0,
    uiAccent: '#e0c294',
    uiAccentCool: '#a0785a',
    whisper: '书页翻动的时候，塔也在读你。',
  },
  {
    id: 'observatory',
    name: '高层',
    fullName: '高层 · 观星台',
    fromFloor: 61,
    toFloor: 80,
    titleCard: {
      big: '星垂旷野',
      vibe: '头顶是旋转的星河，脚下是渺小的塔身。离天，似乎近了一步。',
      main: '#8fb0e8',
      sub: '#5a3a7a',
      glow: '#b8c8ff',
      fontClass: 'tt-star',
      bg: 'stars',
      letterSpacing: 0.5,
    },
    light: { hemiSky: 0x3a4a72, hemiGround: 0x181228, hemiIntensity: 0.44, dirColor: 0xb8c8ff, dirIntensity: 0.38 },
    grade: { tint: [0.86, 0.92, 1.16], tintStrength: 0.25, vignette: 0.26 },
    bgColor: 0x070912,
    sky: true,
    wall: 'starstone',
    windowView: 'starry',
    particle: 'stardust',
    floorTint: 0xdfe4f5,
    windowGlow: 0x8fb0e8,
    uiAccent: '#9ab8ea',
    uiAccentCool: '#8d7ad0',
    whisper: '星星不说话。它们只是在看。',
  },
  {
    id: 'clock',
    name: '钟楼',
    fullName: '顶部前过渡 · 钟楼',
    fromFloor: 81,
    toFloor: 100,
    titleCard: {
      big: '时轮之巅',
      vibe: '巨大的齿轮在头顶咬合，时间被拧成发条。再往上，便是终点。',
      main: '#d9b878',
      sub: '#b08d57',
      glow: '#ffe2a8',
      fontClass: 'tt-brass',
      bg: 'gears',
    },
    light: { hemiSky: 0x5c5240, hemiGround: 0x241c10, hemiIntensity: 0.46, dirColor: 0xe8d2a0, dirIntensity: 0.4 },
    grade: { tint: [1.1, 0.98, 0.8], tintStrength: 0.2, vignette: 0.28 },
    bgColor: 0x0b0906,
    sky: false,
    wall: 'brass',
    windowView: 'gears',
    particle: 'ember',
    floorTint: 0xf0e2c8,
    windowGlow: 0xd9b878,
    uiAccent: '#d9b878',
    uiAccentCool: '#7a9ec4',
    whisper: '发条拧紧了。你听见了吗。',
  },
  {
    id: 'summit',
    name: '塔顶',
    fullName: '塔顶',
    fromFloor: 101,
    toFloor: MAX_FLOOR,
    titleCard: {
      big: '登　顶',
      vibe: '你以为抵达了终点。门后却空无一物——或者说，是另一段旅程的起点。',
      main: '#f0e9d8',
      sub: '#d4af6a',
      glow: '#fff7e0',
      fontClass: 'tt-minimal',
      bg: 'halo',
      letterSpacing: 0.9,
    },
    light: { hemiSky: 0x8a8878, hemiGround: 0x3a382e, hemiIntensity: 0.58, dirColor: 0xfff6e0, dirIntensity: 0.5 },
    grade: { tint: [1.06, 1.04, 0.97], tintStrength: 0.12, vignette: 0.3 },
    bgColor: 0x12121a,
    sky: true,
    wall: 'marble',
    windowView: 'light',
    particle: 'none',
    floorTint: 0xfff8ea,
    windowGlow: 0xfff2cf,
    uiAccent: '#e6ddc4',
    uiAccentCool: '#d4af6a',
  },
];

/** 楼层 → 所属区段（越界向下取最近区段；>110 归塔顶，防御旧存档/异常值） */
export function tierOfFloor(floorId: number): TierTheme {
  let hit = TIERS[0];
  for (const t of TIERS) {
    if (floorId >= t.fromFloor) hit = t;
    else break;
  }
  return hit;
}

/** 是否区段起点楼层（触发全屏艺术字标题卡，§2 [已确认]） */
export function isTierStartFloor(floorId: number): boolean {
  return TIERS.some(t => t.fromFloor === floorId);
}
