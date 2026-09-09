/**
 * 主角动作分解（帧动画）：把图集中的 64 帧按动作分组并以 fps 播放。
 * 单 CanvasTexture + UV offset/repeat 切换帧，零分配。
 */
import type { Texture } from 'three';
import { applyHeroFrame } from './HeroAtlas';

export type HeroAction = 'idle' | 'walk' | 'run' | 'attack' | 'cast' | 'hurt' | 'death';

export interface HeroActionDef {
  /** 帧索引数组（图集 0..77，索引 = 行×6 + 列） */
  frames: number[];
  /** 每秒播放帧数 */
  fps: number;
  /** 是否循环 */
  loop: boolean;
}

/**
 * 逐行目检图集后的动作映射（6 列 × 13 行，帧号 = 行×6+列）：
 *   row0  = 连击攻击（0-5，6帧，挥拳组合）
 *   row1  = 突进重击（6-11，6帧，前冲下劈）
 *   row2  = 站立+出手过渡（12-17，混合，暂不用）
 *   row3  = 站立微动（18-23，备用站姿）
 *   row4  = 倒地（24-26，3帧：踉跄→半跪→趴下；27-29 空）
 *   row5  = 站立呼吸（30-35，6帧，备用 idle）
 *   row6  = 施法举手（36-38，3帧；39-41 空）
 *   row7  = 站立微动（42-47，备用）
 *   row8  = 跑步（48-53，6帧，大跨步腾空）
 *   row9  = 背影暗色（54-59，背对镜头）
 *   row10 = 正面站立（60-65，双手自然下垂 → idle 主力）
 *   row11 = 受击踉跄（66-71，6帧）
 *   row12 = 背面站立（72-77）
 */
export const HERO_ACTION_FRAMES: Record<HeroAction, HeroActionDef> = {
  idle:   { frames: [60],                     fps: 1,  loop: true  }, // 静止帧：待机不播动画
  walk:   { frames: [48, 49, 50, 51, 52, 53], fps: 6,  loop: true  },
  run:    { frames: [48, 49, 50, 51, 52, 53], fps: 12, loop: true },
  attack: { frames: [0, 1, 2, 3, 4, 5],       fps: 14, loop: false },
  cast:   { frames: [36, 37, 38],             fps: 8,  loop: false },
  hurt:   { frames: [66, 67, 68, 69, 70, 71], fps: 10, loop: false },
  death:  { frames: [24, 25, 26],             fps: 6,  loop: false },
};

export class HeroAnimator {
  private readonly texture: Texture;
  private action: HeroAction = 'idle';
  private frameIdx = 0;
  private elapsed = 0;
  /** 非循环动作播完标记 */
  private done = false;

  constructor(texture: Texture) {
    this.texture = texture;
    this.applyCurrent();
  }

  getAction(): HeroAction { return this.action; }
  isFinished(): boolean { return this.done; }

  setAction(a: HeroAction): void {
    if (a === this.action && !this.done) return;
    this.action = a;
    this.frameIdx = 0;
    this.elapsed = 0;
    this.done = false;
    this.applyCurrent();
  }

  /** dtMs：距上一帧的毫秒数（GameLoop 的渲染间隔）。 */
  update(dtMs: number): void {
    const def = HERO_ACTION_FRAMES[this.action];
    this.elapsed += dtMs;
    const interval = 1000 / def.fps;
    let guard = 0;
    while (this.elapsed >= interval && guard++ < 8) {
      this.elapsed -= interval;
      if (this.frameIdx + 1 < def.frames.length) {
        this.frameIdx += 1;
        this.applyCurrent();
      } else if (def.loop) {
        this.frameIdx = 0;
        this.applyCurrent();
      } else {
        this.done = true;
        break;
      }
    }
  }

  private applyCurrent(): void {
    const def = HERO_ACTION_FRAMES[this.action];
    applyHeroFrame(this.texture, def.frames[this.frameIdx]);
  }
}