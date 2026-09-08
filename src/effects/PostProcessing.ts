/**
 * 后期处理管线（迁移文档 5.7 / 技术方案 Phase 4）：
 *   RenderPass → UnrealBloomPass(辉光) → OutputPass(色彩空间) → GradePass(暗角 + 颜色校正)
 *
 * 亮度原则（文档 11.2）：暗角最大压暗量受 render.vignetteMax(0.3) 硬约束，
 * 保证"场景始终明亮、不制造不可见区域"；辉光阈值调高，只让火焰/自发光溢出。
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { dataManager } from '../core/DataManager';

/** 暗角 + 颜色校正（合并为单个 pass，少一次全屏绘制） */
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uVignetteStrength: { value: 0.3 },
    uVignetteOffset: { value: 1.0 },
    uVignetteDarkness: { value: 1.1 },
    uGamma: { value: 1.05 },
    uContrast: { value: 1.05 },
    uSaturation: { value: 1.1 },
    uBrightness: { value: 1.0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uVignetteStrength;
    uniform float uVignetteOffset;
    uniform float uVignetteDarkness;
    uniform float uGamma;
    uniform float uContrast;
    uniform float uSaturation;
    uniform float uBrightness;
    varying vec2 vUv;

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 color = max(tex.rgb, vec3(0.0));

      // 颜色校正：gamma → 对比度 → 饱和度 → 亮度
      color = pow(color, vec3(1.0 / max(uGamma, 0.001)));
      color = (color - 0.5) * uContrast + 0.5;
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color = mix(vec3(luma), color, uSaturation);
      color *= uBrightness;

      // 暗角：径向压暗，最大压暗量 = uVignetteStrength（≤0.3，保证整体可读）
      vec2 p = (vUv - 0.5) * uVignetteOffset;
      float vig = smoothstep(0.35, 0.85, length(p) * uVignetteDarkness);
      color *= 1.0 - vig * uVignetteStrength;

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), tex.a);
    }
  `,
};

export class PostProcessing {
  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private gradePass: ShaderPass | null = null;

  get ready(): boolean { return this.composer !== null; }

  /** 初始化（渲染器/场景/相机就绪后调用） */
  init(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    width: number,
    height: number,
  ): void {
    const cfg = dataManager.config.postProcess;

    const composer = new EffectComposer(renderer);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));

    // 辉光：threshold 调高，只让火焰/自发光溢出，避免整屏发白
    const bloom = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      cfg.bloom.strength,
      cfg.bloom.radius,
      cfg.bloom.threshold,
    );
    bloom.enabled = cfg.bloom.enabled;
    composer.addPass(bloom);
    this.bloomPass = bloom;

    // 色调映射 + sRGB 输出（之后再做调色，符合"所见即所得"）
    composer.addPass(new OutputPass());

    const grade = new ShaderPass(GradeShader);
    const u = grade.uniforms;
    // 暗角不得超过 vignetteMax，守住"始终明亮"底线
    u.uVignetteStrength.value = Math.min(cfg.vignette.strength, dataManager.config.render.vignetteMax);
    u.uVignetteOffset.value = cfg.vignette.offset;
    u.uVignetteDarkness.value = cfg.vignette.darkness;
    u.uGamma.value = cfg.adjustment.gamma;
    u.uContrast.value = cfg.adjustment.contrast;
    u.uSaturation.value = cfg.adjustment.saturation;
    u.uBrightness.value = cfg.adjustment.brightness;
    grade.enabled = cfg.vignette.enabled || cfg.adjustment.enabled;
    composer.addPass(grade);
    this.gradePass = grade;

    this.composer = composer;
  }

  setSize(width: number, height: number): void {
    this.composer?.setSize(width, height);
    this.bloomPass?.setSize(width, height);
  }

  render(): void {
    this.composer?.render();
  }

  dispose(): void {
    this.bloomPass?.dispose();
    this.gradePass?.dispose();
    this.composer?.dispose();
    this.composer = null;
    this.bloomPass = null;
    this.gradePass = null;
  }
}

export const postProcessing = new PostProcessing();
