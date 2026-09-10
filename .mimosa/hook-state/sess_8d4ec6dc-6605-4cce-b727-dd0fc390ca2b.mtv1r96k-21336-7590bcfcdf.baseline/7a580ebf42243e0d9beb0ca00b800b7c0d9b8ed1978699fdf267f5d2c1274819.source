/**
 * 数学工具：种子随机（可重现楼层生成）、通用数值函数。
 */
export class MathUtils {
  /** 将任意字符串哈希为32位整数（楼层种子派生） */
  static hashString(str: string): number {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }
}

/** mulberry32 种子随机数生成器 */
export class SeededRNG {
  private state: number;

  constructor(seed: number) {
    this.state = seed >>> 0;
  }

  /** [0, 1) 浮点 */
  next(): number {
    this.state = (this.state + 0x6d2b79f5) >>> 0;
    let t = this.state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** [min, max] 整数 */
  randInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  /** [min, max) 浮点 */
  randFloat(min: number, max: number): number {
    return this.next() * (max - min) + min;
  }

  chance(p: number): boolean {
    return this.next() < p;
  }

  pick<T>(arr: readonly T[]): T {
    return arr[Math.floor(this.next() * arr.length)];
  }

  /** 按权重随机挑选 */
  pickWeighted<T>(arr: readonly T[], weightFn: (item: T) => number): T {
    const weights = arr.map(weightFn);
    const total = weights.reduce((s, w) => s + w, 0);
    if (total <= 0) return arr[0];
    let roll = this.next() * total;
    for (let i = 0; i < arr.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return arr[i];
    }
    return arr[arr.length - 1];
  }

  shuffle<T>(arr: T[]): T[] {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}

/** 全局非种子随机（战斗掷骰等，无需可重现性） */
export const rng = {
  next(): number { return Math.random(); },
  randInt(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1)) + min; },
  randFloat(min: number, max: number): number { return Math.random() * (max - min) + min; },
  chance(p: number): boolean { return Math.random() < p; },
  pick<T>(arr: readonly T[]): T { return arr[Math.floor(Math.random() * arr.length)]; },
  pickWeighted<T>(arr: readonly T[], weightFn: (item: T) => number): T {
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
  shuffle<T>(arr: T[]): T[] {
    const r = [...arr];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  },
};
