/**
 * 简化难度系数系统（原 v1 模块 I 的落地版，见 docs/未完成.md §二·七）：
 * 把设置中的 difficulty(1–7) 接成实际倍率，作用于：
 * - 怪物属性（StatCalculator.monsterStats）
 * - Boss 额外强度
 * - 高难度开局灾厄（A 类，数量见 startCurses）
 * 「天堂」难度 Boss 必带词缀等细节待 Boss 词缀系统落地后接入。
 */
import { gameState } from '../core/GameState';

export interface DifficultyConfig {
  id: string;
  name: string;
  /** 怪物属性倍率 */
  monster: number;
  exp: number;
  gold: number;
  /** Boss 额外强度（叠加在 monster 之上） */
  boss: number;
  /** 开局赋予的 A 类灾厄数量 */
  startCurses: number;
  /** 开局必定授予的遗物 id（难度专属 / 剧情遗物，不进随机掉落池） */
  startRelics?: string[];
}

/** 难度表索引：1 摇篮曲 ~ 7 天堂 */
const TABLE: DifficultyConfig[] = [
  { id: 'lullaby',   name: '摇篮曲', monster: 0.4, exp: 1.5, gold: 1.5, boss: 0.7,  startCurses: 0, startRelics: ['R065'] },
  { id: 'normal',    name: '普通',   monster: 1.0, exp: 1.0, gold: 1.0, boss: 1.0,  startCurses: 0 },
  { id: 'hard',      name: '困难',   monster: 1.3, exp: 1.3, gold: 1.4, boss: 1.15, startCurses: 0 },
  { id: 'nightmare', name: '噩梦',   monster: 1.7, exp: 1.6, gold: 1.8, boss: 1.3,  startCurses: 0 },
  { id: 'hell',      name: '地狱',   monster: 2.2, exp: 2.0, gold: 2.2, boss: 1.5,  startCurses: 1 },
  { id: 'purgatory', name: '炼狱',   monster: 3.0, exp: 2.5, gold: 3.0, boss: 1.8,  startCurses: 1 },
  { id: 'haven',     name: '天堂',   monster: 5.0, exp: 3.5, gold: 3.5, boss: 2.5,  startCurses: 2, startRelics: ['X009'] },
];

export class DifficultySystem {
  private static instance: DifficultySystem;
  private constructor() {}
  static getInstance(): DifficultySystem {
    if (!DifficultySystem.instance) DifficultySystem.instance = new DifficultySystem();
    return DifficultySystem.instance;
  }

  /** 当前难度等级 1–7 */
  get level(): number { return Math.max(1, Math.min(7, gameState.difficulty)); }
  config(): DifficultyConfig { return TABLE[this.level - 1]; }

  monsterMul(): number { return this.config().monster; }
  expMul(): number { return this.config().exp; }
  goldMul(): number { return this.config().gold; }
  bossMul(): number { return this.config().boss; }
  startCurseCount(): number { return this.config().startCurses; }

  /** 开局必定授予的专属遗物（摇篮曲→摇篮 / 天堂→命定之死） */
  startRelics(): string[] { return this.config().startRelics ?? []; }
}

export const DIFFICULTY_TABLE = TABLE;
