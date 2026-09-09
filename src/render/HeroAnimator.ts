/**
 * 主角动作分解（帧动画）：按「动作 + 朝向」分组播放图集帧。
 * 单 CanvasTexture + UV offset/repeat 切换帧，零分配。
 *
 * 逐行目检图集（6 列 × 13 行，帧号 = 行×6+列；侧面帧原生朝右，经放大目检确认）：
 *   row0  = 连击攻击（0-5）
 *   row1  = 突进重击（6-11）
 *   row3  = 正面呼吸/站立微动（18-23）→ idle 主力
 *   row4  = 倒地（24-26）
 *   row6  = 施法举手（36-38）
 *   row8  = 侧面行走（48-53，原生朝右）
 *   row9  = 背面行走（54-59，向远离镜头方向 = 上）
 *   row10 = 正面行走（60-65，向靠近镜头方向 = 下）
 *   row11 = 受击踉跄（66-71）
 */
import type { Texture } from 'three';
import { applyHeroFrame } from './HeroAtlas';

export type HeroAction = 'idle' | 'walk' | 'run' | 'attack' | 'cast' | 'hurt' | 'death';

/** 移动朝向（决定 walk 用哪一行图集帧与镜像） */
export type HeroFacing = 'left' | 'right' | 'up' | 'down';

export interface HeroActionDef {
  /** 帧索引数组（图集 0..77，索引 = 行×6 + 列） */
  frames: number[];
  /** 每秒播放帧数 */
  fps: number;
  /** 是否循环 */
  loop: boolean;
}

/** walk 按朝向取行：side=row8（原生朝右）/ up=row9（背面）/ down=row10（正面） */
const WALK_BY_FACING: Record<HeroFacing, number[]> = {
  right: [48, 49, 50, 51, 52, 53],
  left: [48, 49, 50, 51, 52, 53],
  up: [54, 55, 56, 57, 58, 59],
  down: [60, 61, 62, 63, 64, 65],
};

export const HERO_ACTION_FRAMES: Record<HeroAction, HeroActionDef> = {
  // 呼吸微动（row3）：低频循环，静止不再是死帧
  idle:   { frames: [18, 19, 20, 21, 22, 23], fps: 4,  loop: true  },
  walk:   { frames: [48, 49, 50, 51, 52, 53], fps: 10, loop: true  }, // 实际帧由朝向覆盖
  run:    { frames: [48, 49, 50, 51, 52, 53], fps: 14, loop: true  },
  attack: { frames: [0, 1, 2, 3, 4, 5],       fps: 14, loop: false },
  cast:   { frames: [36, 37, 38],             fps: 8,  loop: false },
  hurt:   { frames: [66, 67, 68, 69, 70, 71], fps: 10, loop: false },
  death:  { frames: [24, 25, 26],             fps: 6,  loop: false },
};

export class HeroAnimator {
  private readonly texture: Texture;
  private action: HeroAction = 'idle';
  private facing: HeroFacing = 'down';
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

  /** walk/run 的朝向（决定用侧面/背面/正面行；不影响其它动作） */
  setFacing(f: HeroFacing): void {
    if (f === this.facing) return;
    this.facing = f;
    // 行走中切换朝向：帧序列长度一致，保持相位不打断
    if (this.action === 'walk' || this.action === 'run') {
      this.frameIdx = this.frameIdx % this.walkFrames().length;
      this.applyCurrent();
    }
  }

  getFacing(): HeroFacing { return this.facing; }

  setAction(a: HeroAction): void {
    if (a === this.action && !this.done) return;
    this.action = a;
    this.frameIdx = 0;
    this.elapsed = 0;
    this.done = false;
    this.applyCurrent();
  }

  private walkFrames(): number[] {
    return WALK_BY_FACING[this.facing];
  }

  private activeDef(): { frames: number[]; fps: number; loop: boolean } {
    const def = HERO_ACTION_FRAMES[this.action];
    if (this.action === 'walk' || this.action === 'run') {
      return { frames: this.walkFrames(), fps: def.fps, loop: def.loop };
    }
    return def;
  }

  /** dtMs：距上一帧的毫秒数（GameLoop 的渲染间隔）。 */
  update(dtMs: number): void {
    const def = this.activeDef();
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
    const def = this.activeDef();
    const frame = def.frames[Math.min(this.frameIdx, def.frames.length - 1)];
    applyHeroFrame(this.texture, frame);
  }
}
