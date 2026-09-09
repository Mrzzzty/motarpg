/**
 * 数学工具：通用数值函数 + 全局随机（种子系统暂不实现，统一 Math.random）。
 */
export class MathUtils {
  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }

  static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  /** 曼哈顿距离 */
  static manhattan(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  /** 欧氏距离 */
  static dist(x1: number, y1: number, x2: number, y2: number): number {
    return Math.hypot(x1 - x2, y1 - y2);
  }
}

/** 全局随机（待办v1.md：种子系统暂不实现，全部使用 Math.random） */
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
