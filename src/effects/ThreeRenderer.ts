/**
 * Three.js 渲染器（3渲2 技术方案 v1.0）：
 * - 固定等距视角 PerspectiveCamera，跟随玩家平移但不旋转。
 * - 静态物体（地板/墙/柱/宝箱/楼梯/火把）→ 3D 几何体；
 *   动态实体（玩家/怪物/NPC）→ Sprite 纸片人，始终面向摄像机。
 * - 光照与阴影全部由 Three 原生提供（Ambient/Directional/Point + PCFSoftShadowMap），
 *   不再手写光线追踪着色器。
 *
 * 坐标映射（文档 3.1）：3D 坐标 = (col, y, row)；格子 (row,col) 中心 = (col+0.5, y, row+0.5)。
 * CameraController 输出的是投影像素坐标，除以 tileSize 即得世界单位。
 */
import * as THREE from 'three';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { CameraController } from '../core/CameraController';
import { InputManager } from '../core/InputManager';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import { dataManager } from '../core/DataManager';
import { projection } from '../render/Projection';
import { textureGen } from '../render/TextureGenerator';
import { getHeroAtlas } from '../render/HeroAtlas';
import { HeroAnimator, type HeroAction, type HeroFacing } from '../render/HeroAnimator';
import {
  canvasTexture, wallTexture, windowTexture, groundTexture, setMaxAnisotropy,
  applyRelief, propNormal, propRoughness, PROP_NOISE,
} from './ThreeTextures';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { roundedBox, cyl, sphere, torus } from './ThreeGeometry';
import {
  makeDecorMats, planRoomDecor, planRoomLandmark, buildDecorObject, seededRand,
  decorBaseY, type DecorMats,
} from './ThreeDecor';
import { getNpcPortrait } from '../render/NpcArt';
import { ParticleSystem } from './ParticleSystem';
import { ThreeParticleSystem } from './ThreeParticleSystem';
import { AmbientParticles } from './AmbientParticles';
import { postProcessing } from './PostProcessing';
import { tierOfFloor, isTierStartFloor, type TierTheme, type TierCorridor } from '../data/tiers';
import type { CorridorData, MapEntity, MonsterDef, RoomData } from '../types';

/**
 * 3D 相机机位（实际值取自 gameConfig.camera3D，此处仅说明几何关系）：
 * 正对房间南面，仅沿 +Z 水平后退，斜向下俯视；俯角 = atan(height / distance)。
 * 当前 height=12.5 / distance=5 → 俯角 ≈ 68°；同时调小这两个值即可拉近镜头。
 */
/** 玩家距房间边缘小于该格数时相机才开始跟随；房间内固定观察房间中心 */
const ROOM_FOLLOW_MARGIN = 2;
/**
 * 遮挡虚化的最大距离（格）：只有紧贴目标的墙才虚化（1.0 = 正对相邻，1.5 覆盖斜角）。
 * 相机俯角约 68°，离墙还远时视线从墙顶上方掠过、并不遮挡，不应提前把墙变透明。
 */
const OCCLUDE_MAX_DIST = 1.5;

/** 房间氛围光色（文档 附录 参考卡）：不同房间用不同光色强化身份感 */
const ROOM_LIGHT_COLORS: Record<string, number> = {
  start: 0xfff2dd,    // 自然光
  combat: 0xffb347,   // 暖黄
  elite: 0xff9a3c,    // 橙黄
  chest: 0xffd166,    // 金色
  merchant: 0xffe9c4, // 暖白
  blacksmith: 0xffb060, // 锻炉暖橙
  witch: 0xc78cff,    // 神秘紫
  boss: 0xff5a4a,     // 暗红
  end: 0xbcd8ff,      // 蓝白
  rest: 0xffe9c4,     // 暖白
  corridor: 0xff8844, // 走廊默认暖橙
};
/** 场景点光源总数上限（超出只保留最近的） */
const MAX_TORCH_LIGHTS = 12;
/** 氛围光（宝箱/Boss/楼梯）上限：不投影，只贡献颜色氛围 */
const MAX_GLOW_LIGHTS = 6;

/** Boss 铁门的开合动画状态 */
interface GateAnim {
  group: THREE.Group;
  baseX: number;
  baseZ: number;
  /** 开启时的滑移方向（沿墙面切线） */
  offX: number;
  offZ: number;
  /** 当前 / 目标开合进度 0=关闭 1=全开 */
  open: number;
  target: number;
}

/** 地板厚度与墙基准（文档 3.2） */
const FLOOR_THICKNESS = 0.1;
/** 走廊地板厚度：让走廊呈现可供通行的实体桥感 */
const CORRIDOR_THICKNESS = 0.55;
/**
 * 外部世界地面（设定：房间/走廊之外是正常世界）：
 * 以地图边界外扩该格数为界平铺地面（单 InstancedMesh，一次 draw call——
 * 有边界、非无限），顶面 y = GROUND_Y，略低于房间地板底（-0.1）。
 */
const GROUND_MARGIN = 16;
const GROUND_Y = -0.12;
const GROUND_THICKNESS = 0.24;

export class ThreeRenderer {
  private static instance: ThreeRenderer;
  private constructor() {}
  static getInstance(): ThreeRenderer {
    if (!ThreeRenderer.instance) ThreeRenderer.instance = new ThreeRenderer();
    return ThreeRenderer.instance;
  }

  /** 鼠标悬浮格（InputManager 写入） */
  hoverTile: { x: number; y: number } | null = null;

  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private container: HTMLElement | null = null;
  private raycaster = new THREE.Raycaster();
  private ready = false;
  private builtFloorId = -1;

  private floorGroup = new THREE.Group();
  private wallGroup = new THREE.Group();
  private entityGroup = new THREE.Group();
  private particleGroup = new THREE.Group();
  /** 环境陈设层（木桶/书堆/旗帜/贴片…；纯装饰，不参与逻辑） */
  private decorGroup = new THREE.Group();
  /** 玩家所在组：独立于 entityGroup，实体重建时不被清理（避免重建精灵与重传图集纹理） */
  private playerGroup = new THREE.Group();
  /** 实体层脏标记（同帧多次事件合并为一次重建） */
  private entitiesDirty = false;
  /** 着色器是否已异步预热（每次运行只做一次） */
  private shaderPrecompiled = false;
  /** 平滑帧时（ms），供调试面板展示 */
  private frameMsAvg = 16.7;
  /** 本层陈设材质调色板（随区段主题重建） */
  private decorMats: DecorMats | null = null;
  private hoverMesh: THREE.Mesh | null = null;
  /** 玩家纸片人（Player 单例不在 allEntities() 中，需单独维护） */
  private playerSprite: THREE.Sprite | null = null;
  /** 主角帧动画控制器（用图集时启用；图集缺失则为 null） */
  private heroAnimator: HeroAnimator | null = null;
  /** 主角基准宽度（scale.x 绝对值），镜像时仅翻转符号 */
  private heroBaseW = 1;
  /**
   * 主角朝向。图集侧面帧（row8）原生朝右（放大目检确认）：
   * 向右 = 不镜像，向左 = 水平镜像；上下行走用背面/正面行、不镜像。
   */
  private heroFacing: HeroFacing = 'down';
  /** 玩家贴地阴影 */
  private playerShadow: THREE.Mesh | null = null;
  /** 主角 contact AO：更小更深的贴地暗斑（光影 v2 §3） */
  private playerContact: THREE.Mesh | null = null;
  /** Boss 铁门（含开合动画进度） */
  private gates: GateAnim[] = [];
  /** 墙格 → InstancedMesh 实例（供"遮挡虚化"单独隐藏 / 恢复） */
  private wallCells = new Map<string, {
    mesh: THREE.InstancedMesh; index: number; col: number; row: number; h: number;
  }>();
  /** 遮挡虚化状态：key → 进度(0=实体, 1=虚化) */
  private fadeCells = new Map<string, { progress: number; target: number }>();
  /** 虚化墙显示池（复用 Mesh，挂在 scene 上避免被 clearGroup 清除） */
  private fadePool: { mesh: THREE.Mesh; key: string | null }[] = [];
  /** 遮挡集合重算节流计时（ms） */
  private fadeScanTimer = 0;

  /** 相机注视点（世界坐标，指数平滑跟随） */
  private focusX = 0;
  private focusZ = 0;
  private focusInit = false;
  private lastTimeMs = 0;
  /** 屏幕震动：剩余时长 / 总时长 / 强度（世界单位） */
  private shakeTime = 0;
  private shakeTotal = 0;
  private shakeIntensity = 0;

  private ambient: THREE.HemisphereLight | null = null;
  private dirLight: THREE.DirectionalLight | null = null;
  /** 星空（Points，随相机平移 = 无穷远天空；uTime 驱动闪烁） */
  private starField: THREE.Points | null = null;
  private starMat: THREE.ShaderMaterial | null = null;
  /** 月亮（本体 + 光晕精灵），固定跟随注视点上方，方向与月光一致 */
  private moonGroup: THREE.Group | null = null;
  /** 月亮相对注视点的偏移（与月光入射方向一致：光从月亮洒下）。水平分量大 → 倾斜角约 39°，影子被拉长 */
  private static readonly MOON_OFFSET = { x: 16, y: 34, z: 22 };
  private playerTorch: THREE.PointLight | null = null;
  private torchLights = new Map<string, THREE.PointLight>();
  /** 氛围点光源（宝箱/Boss/楼梯），不投影 */
  private glowLights = new Map<string, THREE.PointLight>();
  /**
   * 灯光池：场景内点光源数量恒定，火把/氛围光只复用池中灯（改位置/颜色/强度）。
   * 动态增删 PointLight 会触发 Three 全场景着色器重编译 → 开宝箱/战斗后明显卡顿。
   */
  private torchPool: THREE.PointLight[] = [];
  private glowPool: THREE.PointLight[] = [];
  private torchCursor = 0;
  private glowCursor = 0;
  /** 自发光光晕精灵（精英/Boss/未开宝箱/楼梯），亮度恒定（无逐帧驱动） */
  private glowSprites: { sprite: THREE.Sprite; base: number; speed: number; phase: number }[] = [];
  /** 纸片人假受光登记（光影优化：Sprite 材质不受光，按周围光源逐帧调明暗） */
  private litSprites: { sprite: THREE.Sprite }[] = [];
  /** 丁达尔飘尘（火把光锥内缓慢上升的浮尘） */
  private dustItems: {
    sprite: THREE.Sprite; baseX: number; baseZ: number; baseY: number; phase: number; speed: number;
  }[] = [];
  /** 引导者灵体特效（第1层）：微光描边光晕 + 缓升灰白光点 + 呼吸浮动 */
  private spiritFx: { halo: THREE.Sprite; sprite: THREE.Sprite; baseY: number } | null = null;
  private spiritDots: { sprite: THREE.Sprite; baseX: number; baseZ: number; phase: number; speed: number }[] = [];
  /** 塔顶反转：引导者虚影（淡入→光影形变「笑」→淡出） */
  private phantoms: {
    group: THREE.Group; sprite: THREE.Sprite | null; halo: THREE.Sprite;
    t: number; state: 'in' | 'hold' | 'out'; flickTimer: number;
  }[] = [];
  /** 当前楼层区段主题（换层时更新；墙纹理/光照/粒子/后处理均读它） */
  private currentTier: TierTheme = tierOfFloor(1);
  /** 窗景云海 UV 滚动纹理（钟楼） */
  private windowScrollers: { tex: THREE.Texture; speed: number }[] = [];
  /** 相机演出：intro=开场缓升 / sway=标题卡缓推摇移 / wide=登顶广角 / dive=下摇俯冲 */
  private camFx: { kind: 'intro' | 'sway' | 'wide' | 'dive'; t: number; dur: number; hold: boolean } | null = null;
  private baseFov = 45;

  /** 初始化场景/相机/渲染器/光照（对应原 PixiRenderer.init） */
  async init(container: HTMLElement): Promise<void> {
    this.container = container;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // 虚空：纯黑（无天空盒贴图）
    this.scene = scene;

    const cam3d = dataManager.config.camera3D;
    const camera = new THREE.PerspectiveCamera(cam3d.fov, w / h, 0.1, 200);
    this.camera = camera;
    this.baseFov = cam3d.fov;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (err) {
      console.error('[Three] WebGL 初始化失败', err);
      container.innerHTML = '<div style="padding:24px;color:#ff8888">当前环境不支持 WebGL，无法启动游戏渲染。</div>';
      return;
    }
    renderer.setPixelRatio(window.devicePixelRatio); // 1:1 物理像素（强制超采样会使画面变软）
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    // 阴影采样：three r165+ 已废弃 PCFSoftShadowMap —— 传入后会被静默降级成 PCFShadowMap
    // 并每次渲染打一条弃用警告（即此前"以为在用柔化阴影、实际用的是硬 PCF"）。
    // 这里显式写 PCFShadowMap，与真实生效的效果保持一致；VSM 虽能柔化但边缘发糊（早前已否决）。
    // 注意：PCF 下 shadow.radius 不生效，柔化程度只能靠 shadow.mapSize 提升。
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // 电影感色调映射：高光柔和过渡（火把不再死白炸开），暗部保留细节
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35; // 光影 v2 §4：1.15 → 1.35，补偿 ACES 中间调压暗
    renderer.domElement.id = 'game-canvas';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.cursor = 'crosshair';
    container.appendChild(renderer.domElement);
    this.renderer = renderer;

    // 纹理各向异性拉满（斜视地面/墙面纹理更清晰）
    setMaxAnisotropy(renderer.capabilities.getMaxAnisotropy());

    this.setupLights();
    scene.add(
      this.floorGroup, this.wallGroup, this.decorGroup,
      this.playerGroup, this.entityGroup, this.particleGroup,
    );
    this.buildHoverMesh();
    this.buildStars();

    // 后期处理（辉光 / 暗角 / 颜色校正）
    postProcessing.init(renderer, scene, camera, w, h);

    InputManager.getInstance().attachCanvas(renderer.domElement);

    this.ready = true;
    this.rebuildFloor();

    eventBus.on('floorChanged', p => {
      this.rebuildFloor();
      // 标题卡期间相机缓推近并轻微摇移（§0 相机 [已确认]）；
      // 第1层由 gameStarted 时的「地面缓升」开场镜头接管，不再叠加摇移
      if (isTierStartFloor(p.toFloor) && p.toFloor !== 1) this.playTierSway();
    });
    // 新游戏第1层：镜头由地面缓升至半身（§1 引导者登场）
    eventBus.on('gameStarted', () => {
      if (WorldManager.getInstance().currentFloor?.floorId === 1) this.playIntroRise();
    });
    eventBus.on('saveLoaded', () => this.rebuildFloor());
    eventBus.on('gameRestarted', () => this.rebuildFloor());
    // 实体层重建改为「标记脏 + 下一帧统一重建」：一次战斗结算/开箱常同时触发多个事件，
    // 逐个同步全量重建会造成多次卡顿（此前直接调用 rebuildEntities）
    eventBus.on('monsterDefeated', () => { this.entitiesDirty = true; });
    eventBus.on('chestOpened', () => { this.entitiesDirty = true; });
    eventBus.on('potionPicked', () => { this.entitiesDirty = true; });
    // 隐藏房间发现：地形（墙圈雕刻）与新实体（大宝箱等）需要整体重建才会可见。
    // 此前无消费者 → 进入隐藏房间后一切内容"透明"（逻辑存在、渲染缺失）
    eventBus.on('hiddenRoomDiscovered', () => this.rebuildFloor());
    // 屏幕震动（文档 L.2）：受大伤害 / Boss 被击败 / 玩家阵亡
    eventBus.on('battleEnded', p => {
      if (p.result.damageTaken > Player.getInstance().maxHp * 0.3) this.shake(0.3, 320);
    });
    eventBus.on('bossDefeated', () => this.shake(0.45, 520));
    eventBus.on('playerDied', () => this.shake(0.35, 420));
    window.addEventListener('resize', () => this.resize());
    // 容器尺寸观测（修复开局画面偏移）：标题屏阶段 game-root 隐藏 → 容器 0×0，
    // 画布按窗口兜底尺寸创建；进入游戏容器获得真实尺寸时由此自动触发 resize
    if (typeof ResizeObserver !== 'undefined' && container) {
      this.containerObserver = new ResizeObserver(() => this.resize());
      this.containerObserver.observe(container);
    }
  }

  /**
   * 光照（文档 4.2 / 四 + 月光全局光照）：
   * - 月光：白偏暖的巨型月亮自天洒落（DirectionalLight 平行光，主投影光源），
   *   墙壁/柱体在地板上投下大片冷影，为塔内蒙上一层影子。
   * - 环境光：偏冷蓝灰，与暖月光形成补色对比，暗部仍可辨认。
   * - 玩家火炬：暖橙点光源，贴身补光。
   */
  private setupLights(): void {
    if (!this.scene) return;
    // 半球光替代纯环境光：天光冷蓝 / 地面反光暖褐，明暗有方向层次而非死平
    this.ambient = new THREE.HemisphereLight(0x4d5a72, 0x241b12, 0.6);
    this.scene.add(this.ambient);

    // 月光：冷调淡蓝白（#dfe9ff），昏暗斜洒；柔和阴影边缘
    const dir = new THREE.DirectionalLight(0xdfe9ff, 0.55);
    dir.position.set(ThreeRenderer.MOON_OFFSET.x, ThreeRenderer.MOON_OFFSET.y, ThreeRenderer.MOON_OFFSET.z);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.near = 0.5;
    dir.shadow.camera.far = 140;
    const d = 24; // 阴影正交范围需覆盖视口周边；镜头拉近后收紧，换取更高阴影精度
    dir.shadow.camera.left = -d;
    dir.shadow.camera.right = d;
    dir.shadow.camera.top = d;
    dir.shadow.camera.bottom = -d;
    dir.shadow.bias = -0.0006;
    dir.shadow.normalBias = 0.02;
    this.scene.add(dir);
    this.scene.add(dir.target);
    this.dirLight = dir;

    // 月亮本体 + 光晕（Sprite 始终面向相机；Bloom 让辉光自然溢出）
    this.moonGroup = new THREE.Group();
    const disc = new THREE.Sprite(new THREE.SpriteMaterial({
      map: canvasTexture(textureGen.moonDisc()),
      transparent: true,
      depthWrite: false,
      fog: false,
    }));
    disc.scale.set(7, 7, 1);
    this.moonGroup.add(disc);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: canvasTexture(textureGen.glow('rgba(225,235,255,0.85)')),
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      fog: false,
      opacity: 0.38,
    }));
    halo.scale.set(24, 24, 1);
    halo.renderOrder = -1;
    this.moonGroup.add(halo);
    this.moonGroup.position.set(ThreeRenderer.MOON_OFFSET.x, ThreeRenderer.MOON_OFFSET.y, ThreeRenderer.MOON_OFFSET.z);
    this.scene.add(this.moonGroup);

    // 点光源不投影（光影 v2 §2）：点光是放射状投影，与月光平行投影方向冲突；
    // 且 cube shadow map = 6 面 pass，开销极重。补光只保留颜色/强度，阴影统一由月光投射。
    this.playerTorch = new THREE.PointLight(0xff9a3d, 1.7, 11);
    this.playerTorch.decay = 1.5;
    this.playerTorch.castShadow = false;
    this.scene.add(this.playerTorch);

    // 灯光池：一次性建满，运行时只改参数（数量恒定 → 永不触发着色器重编译）
    for (let i = 0; i < MAX_TORCH_LIGHTS; i++) {
      const l = new THREE.PointLight(0xff9040, 0, 10);
      l.decay = 1.6;
      this.scene.add(l);
      this.torchPool.push(l);
    }
    for (let i = 0; i < MAX_GLOW_LIGHTS; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 6);
      this.scene.add(l);
      this.glowPool.push(l);
    }
  }

  /** 星空：随机球壳分布的闪烁星点（ShaderMaterial 逐星相位闪烁，加色混合） */
  private buildStars(): void {
    if (!this.scene) return;
    const count = 520;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // 均匀球壳分布（半径 110~170，相机 far=200 内）
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r = 110 + Math.random() * 60;
      const s = Math.sqrt(1 - u * u);
      positions[i * 3] = r * s * Math.cos(theta);
      positions[i * 3 + 1] = r * u;
      positions[i * 3 + 2] = r * s * Math.sin(theta);
      phases[i] = Math.random();
      sizes[i] = 1.2 + Math.random() * Math.random() * 4.5; // 少量亮星
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    this.starMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        attribute float aPhase;
        attribute float aSize;
        uniform float uTime;
        varying float vTwinkle;
        varying float vWarm;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          // 双频闪烁：慢呼吸 + 快闪（每星相位不同）
          float t = uTime * 0.001 + aPhase * 6.2831;
          vTwinkle = 0.45 + 0.35 * sin(t * 1.7) + 0.2 * sin(t * 5.3 + 1.4);
          vWarm = fract(aPhase * 7.31);
          gl_PointSize = max(1.5, aSize * (420.0 / -mv.z));
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vTwinkle;
        varying float vWarm;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.06, length(d));
          // 大部分冷白星，少量暖星
          vec3 tint = mix(vec3(0.87, 0.92, 1.0), vec3(1.0, 0.94, 0.82), step(0.82, vWarm));
          gl_FragColor = vec4(tint, a * (0.3 + 0.7 * max(0.05, vTwinkle)));
        }
      `,
    });
    this.starField = new THREE.Points(geo, this.starMat);
    this.starField.frustumCulled = false;
    this.scene.add(this.starField);
  }

  /**
   * 纯色道具材质：挂一层噪声法线（石 / 木 / 金属 各自种子）。
   * 纯色大面在光下毫无细节，是"塑料感"的主因；噪声法线让石料有颗粒、木料有纤维、铁件有磨痕。
   */
  private propDetail(
    mat: THREE.MeshStandardMaterial,
    kind: keyof typeof PROP_NOISE,
    repeat = 3,
    strength = 1.1,
  ): THREE.MeshStandardMaterial {
    const seed = PROP_NOISE[kind];
    mat.normalMap = propNormal(seed, repeat, strength);
    // 粗糙度同步斑驳化：镜面高光沿表面起伏，金属/石材不再"整面一块塑料"
    mat.roughnessMap = propRoughness(seed, repeat, mat.roughness, 0.18);
    mat.roughness = 1;
    mat.needsUpdate = true;
    return mat;
  }

  /** 给标准材质挂上程序化法线 / 粗糙度（源画布 = 其 colorMap 的同一张画布，UV 像素级对齐） */
  private attachRelief(
    mat: THREE.MeshStandardMaterial,
    tex: THREE.Texture,
    opts: { normal?: number; rough?: number; roughRange?: number },
  ): void {
    const src = tex.image as HTMLCanvasElement | undefined;
    if (src && typeof src.getContext === 'function') applyRelief(mat, src, opts);
  }

  /** 悬浮格高亮（贴合地面的方框） */
  private buildHoverMesh(): void {
    const geo = new THREE.RingGeometry(0.34, 0.46, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.PI / 4;
    mesh.position.y = 0.06;
    mesh.visible = false;
    mesh.renderOrder = 2;
    this.hoverMesh = mesh;
    this.scene?.add(mesh);
  }

  /** 整层重建（换层/读档）：地板 + 墙/柱 + 实体 + 区段主题 */
  private rebuildFloor(): void {
    if (!this.ready) return;
    const floor = WorldManager.getInstance().currentFloor;
    if (!floor) return;
    this.builtFloorId = floor.floorId;
    this.applyTier(floor.floorId);
    this.focusInit = false; // 换层时相机直接定位，避免从旧楼层平滑"飞"过去
    this.heroVis.init = false; // 换层后主角直接落位（不做跨层插值）

    // 墙将重建：旧实例映射失效，先归还全部虚化槽位
    for (const key of [...this.fadeCells.keys()]) this.releaseFadeWall(key);
    this.fadeCells.clear();
    this.clearGroup(this.floorGroup);
    this.clearGroup(this.wallGroup);
    this.clearGroup(this.decorGroup);
    this.buildGround(floor);
    this.buildFloorTiles(floor);
    this.buildRoomCarpets(floor);
    this.buildWalls(floor);
    this.buildCorridorRailings(floor); // 走廊栏杆：由走廊开放边缘推导（含隐藏房入口的"连续无缺口"处理）
    this.buildWindows(floor);
    this.buildRoomDecor(floor);
    this.buildDoorFrames(floor);
    this.mergeStaticDraws(); // 静态件按材质合并：draw call 与阴影 pass 开销大降

    // 着色器异步预热（只做一次）：three 会在「某材质特征首次出现在视野里」时同步编译 program，
    // 表现为首次遇怪 / 开箱 / 换区段时突然卡一下。这里提前把 program 编译掉（不阻塞主线程）。
    if (!this.shaderPrecompiled && this.renderer && this.scene && this.camera) {
      this.shaderPrecompiled = true;
      const r = this.renderer as THREE.WebGLRenderer & {
        compileAsync?: (s: THREE.Scene, c: THREE.Camera) => Promise<unknown>;
      };
      if (typeof r.compileAsync === 'function') {
        void r.compileAsync(this.scene, this.camera).catch(() => { /* 不支持则忽略 */ });
      }
    }
    this.rebuildEntities();
    // 悬崖最后构建：井口阴影贴地，且不依赖 entityGroup（战斗重建不清除）
    this.buildCliffs(floor);
  }

  /**
   * 外部世界地面（设定：房间/走廊之外是正常世界，塔矗立在地面上）：
   * 以地图边界外扩 GROUND_MARGIN 格为界平铺地砖（有边界、非无限渲染），
   * 单 InstancedMesh + 一次 draw call；顶面 y=GROUND_Y 略低于房间地板底。
   * 房间/走廊地板天然盖在其上（走廊呈 0.12 台基感）；
   * 2×2 楼梯竖井处留洞（下行阶梯不地面封底）；承接月光 VSM 阴影。
   */
  private buildGround(floor: { grid: number[][]; width: number; height: number; rooms: RoomData[] }): void {
    // 楼梯竖井留洞（与 buildFloorTiles 相同的挖空集合）
    const holes = new Set<string>();
    for (const room of floor.rooms) {
      for (const e of room.entities) {
        if (e.kind === 'stair' && e.stairSpan === 2) {
          for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
            holes.add(`${e.x + dx},${e.y + dy}`);
          }
        }
      }
    }
    // 悬崖格（编码 4）同样留洞：深渊向下贯通，不铺世界地面
    for (let row = 0; row < floor.height; row++) {
      for (let col = 0; col < floor.width; col++) {
        if (floor.grid[row][col] === 4) holes.add(`${col},${row}`);
      }
    }
    const cells: [number, number][] = [];
    for (let row = -GROUND_MARGIN; row < floor.height + GROUND_MARGIN; row++) {
      for (let col = -GROUND_MARGIN; col < floor.width + GROUND_MARGIN; col++) {
        const inside = row >= 0 && row < floor.height && col >= 0 && col < floor.width;
        if (inside && holes.has(`${col},${row}`)) continue; // 楼梯井
        cells.push([col, row]);
      }
    }
    const mat = new THREE.MeshStandardMaterial({
      map: groundTexture(), roughness: 0.92, metalness: 0.02,
      color: this.currentTier.floorTint, // 与室内地板同一区段色温倾向
    });
    this.attachRelief(mat, groundTexture(), { normal: 1.5, rough: 0.92, roughRange: 0.14 });
    const inst = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, GROUND_THICKNESS, 1), mat, cells.length,
    );
    inst.receiveShadow = true; // 墙/栅栏的月光软影落在世界地面上
    const dummy = new THREE.Object3D();
    const jitter = new THREE.Color();
    cells.forEach(([col, row], i) => {
      dummy.position.set(col + 0.5, GROUND_Y - GROUND_THICKNESS / 2, row + 0.5);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
      // 室外地面保留轻微抖动（±4%：自然地貌感；光照交互弱于室内）
      const h = Math.sin(col * 127.1 + row * 311.7 + 7.7) * 43758.5453;
      const frac = h - Math.floor(h);
      jitter.setScalar(0.96 + frac * 0.08);
      inst.setColorAt(i, jitter);
    });
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    this.floorGroup.add(inst);
  }

  /**
   * 应用区段主题（§0/§3）：光照色/强度、虚空底色、星空可见性、
   * 后处理色温+暗角、氛围粒子、地板色温倾向。墙/窗材质在各自 build 时读取 currentTier。
   */
  private applyTier(floorId: number): void {
    const tier = tierOfFloor(floorId);
    this.currentTier = tier;
    if (this.ambient) {
      this.ambient.color.setHex(tier.light.hemiSky);
      this.ambient.groundColor.setHex(tier.light.hemiGround);
      this.ambient.intensity = tier.light.hemiIntensity;
    }
    if (this.dirLight) this.dirLight.color.setHex(tier.light.dirColor);
    if (this.dirLight) this.dirLight.intensity = tier.light.dirIntensity;
    if (this.scene) this.scene.background = new THREE.Color(tier.bgColor);
    // 离天更近的区段才看得见星空与月亮（§3：观星台/塔顶）
    if (this.starField) this.starField.visible = tier.sky;
    if (this.moonGroup) this.moonGroup.visible = tier.sky;
    postProcessing.setTier(tier);
    AmbientParticles.getInstance().configure(tier.particle);
    this.windowScrollers = [];
  }

  /**
   * 商人/女巫房整铺红地毯：金色双框缝线 + 四角金菱 + 中央金环。
   * 覆盖房间内部地板（去掉墙圈），微高于地面避免 z-fighting，接收月光阴影。
   */
  private buildRoomCarpets(floor: { rooms: RoomData[] }): void {
    const CARPET_ROOMS = new Set(['merchant', 'witch']);
    for (const room of floor.rooms) {
      if (!CARPET_ROOMS.has(room.type)) continue;
      const w = room.width - 2;  // 去掉墙圈
      const h = room.height - 2;
      if (w <= 0 || h <= 0) continue;
      const carpet = textureGen.roomCarpet(w, h);
      const carpetMat = new THREE.MeshStandardMaterial({
        map: canvasTexture(carpet),
        roughness: 0.94, metalness: 0.02,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
      });
      // 地毯不做程序化凹凸：其为平面织物、视觉收益小，而 Sobel 派生贴图要占用**启动**时间
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), carpetMat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(room.x + 1 + w / 2, 0.012, room.y + 1 + h / 2);
      mesh.receiveShadow = true;
      this.floorGroup.add(mesh);
    }
  }

  /**
   * 悬崖（地形编码 4，规格 2.1.5）：八角形深渊井。
   * - 井壁：开口八棱柱向下延伸，每格随机朝向 + 半径微差 → 井口边缘「锯齿化」；
   * - 井底：深色封底（避免透到世界背景）；
   * - 渐变阴影：井口覆盖一张径向黑渐变贴图，形成深渊周边的 AO 过渡。
   * 该格不铺地板（buildFloorTiles 只画 code 0）、不铺世界地面（buildGround 留洞）。
   */
  private buildCliffs(floor: { grid: number[][]; width: number; height: number }): void {
    const cells: [number, number][] = [];
    for (let row = 0; row < floor.height; row++) {
      for (let col = 0; col < floor.width; col++) {
        if (floor.grid[row][col] === 4) cells.push([col, row]);
      }
    }
    if (cells.length === 0) return;

    const DEPTH = 1.2;
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x191c22, roughness: 0.98, metalness: 0.02, side: THREE.DoubleSide,
    });
    const bottomMat = new THREE.MeshBasicMaterial({ color: 0x04060a });
    const shadowMat = new THREE.MeshBasicMaterial({
      map: canvasTexture(textureGen.glow('#000000')),
      transparent: true, opacity: 0.5, depthWrite: false,
    });

    for (const [col, row] of cells) {
      const r = 0.60 + ((col * 37 + row * 61) % 11) * 0.012; // 半径微差 → 边缘不齐
      const rotY = ((col * 13 + row * 29) % 8) * (Math.PI / 8); // 随机朝向 → 锯齿状井口

      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(r * 1.18, r, DEPTH, 8, 1, true), wallMat,
      );
      shaft.position.set(col + 0.5, 0.02 - DEPTH / 2, row + 0.5);
      shaft.rotation.y = rotY;
      shaft.receiveShadow = true;
      this.floorGroup.add(shaft);

      // 井底（半径略大于井壁，避免旋转造成的缝隙）
      const bottom = new THREE.Mesh(new THREE.CircleGeometry(r * 1.25, 8), bottomMat);
      bottom.rotation.x = -Math.PI / 2;
      bottom.rotation.z = rotY;
      bottom.position.set(col + 0.5, 0.02 - DEPTH + 0.03, row + 0.5);
      this.floorGroup.add(bottom);

      // 井口渐变阴影（贴在地板层，周边 AO）
      const shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2), shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(col + 0.5, 0.014, row + 0.5);
      shadow.renderOrder = 1;
      this.floorGroup.add(shadow);
    }
  }

  /** 每格所属房间类型 */
  private roomGridOf(floor: { rooms: RoomData[] }): Record<string, string> {
    const roomGrid: Record<string, string> = {};
    for (const room of floor.rooms) {
      for (let y = room.y; y < room.y + room.height; y++) {
        for (let x = room.x; x < room.x + room.width; x++) roomGrid[`${x},${y}`] = room.type;
      }
    }
    return roomGrid;
  }

  /** 地板：按 (房间配色 + 棋盘格) 分组，每组一个 InstancedMesh（避免上千 draw call）。楼梯 2×2 区域挖空 */
  private buildFloorTiles(floor: { grid: number[][]; width: number; height: number; rooms: RoomData[] }): void {
    // 2×2 大楼梯的地板挖空区
    const holes = new Set<string>();
    for (const room of floor.rooms) {
      for (const e of room.entities) {
        if (e.kind === 'stair' && e.stairSpan === 2) {
          for (const [dx, dy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) {
            holes.add(`${e.x + dx},${e.y + dy}`);
          }
        }
      }
    }
    const roomGrid = this.roomGridOf(floor);
    const groups = new Map<string, { roomKey: string; checker: 0 | 1; cells: [number, number][] }>();
    for (let row = 0; row < floor.height; row++) {
      for (let col = 0; col < floor.width; col++) {
        if (floor.grid[row][col] !== 0) continue; // 仅地板（1/2 为墙/柱，4 为悬崖）
        if (holes.has(`${col},${row}`)) continue; // 楼梯竖井
        const roomKey = roomGrid[`${col},${row}`] ?? 'corridor';
        const checker: 0 | 1 = (row + col) % 2 === 0 ? 0 : 1;
        const key = `${roomKey}_${checker}`;
        let g = groups.get(key);
        if (!g) {
          g = { roomKey, checker, cells: [] };
          groups.set(key, g);
        }
        g.cells.push([col, row]);
      }
    }

    const dummy = new THREE.Object3D();
    for (const g of groups.values()) {
      const canvas = textureGen.floor(g.roomKey, g.checker);
      const mat = new THREE.MeshStandardMaterial({
        map: canvasTexture(canvas), roughness: 0.85, metalness: 0.05,
        color: this.currentTier.floorTint, // 区段色温倾向（乘法叠加在房间配色上）
      });
      // 地砖缝凹陷 + 砖面略光滑：受光后出现真实的地面起伏（此前只有一张平贴图）
      this.attachRelief(mat, canvasTexture(canvas), { normal: 1.9, rough: 0.85, roughRange: 0.2 });
      // 走廊地板加厚：呈现悬空栈道的体积感（顶面仍与房间地面平齐）
      const thick = g.roomKey === 'corridor' ? CORRIDOR_THICKNESS : FLOOR_THICKNESS;
      const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, thick, 1), mat, g.cells.length);
      inst.receiveShadow = true;
      // 注意：室内地板不做逐格亮度抖动——抖动会与任何亮度分级叠加，
      // 把点光的连续径向渐变碎裂成砖形色斑（光照块状问题根因）
      g.cells.forEach(([col, row], i) => {
        dummy.position.set(col + 0.5, -thick / 2, row + 0.5);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.floorGroup.add(inst);
    }
  }

  /** 墙（1）与柱（2）：按高度/房间分组的 InstancedMesh，纯色 MeshStandardMaterial */
  private buildWalls(floor: { grid: number[][]; width: number; height: number; rooms: RoomData[]; hiddenRooms?: RoomData[] }): void {
    const roomGrid = this.roomGridOf(floor);
    const heights = dataManager.config.heights;
    const ts = projection.tileSize;
    const wallGroups = new Map<string, { h: number; cells: [number, number][] }>();
    const pillarGroups = new Map<string, { h: number; cells: [number, number][] }>();
    /** 隐藏房入口：地形上是一格墙，但渲染必须与周围**虚空一致（什么都不画）**，否则暗门一眼可辨 */
    const hiddenEntrances = new Set<string>();
    for (const h of floor.hiddenRooms ?? []) {
      if (h.hiddenEntrance) hiddenEntrances.add(`${h.hiddenEntrance.x},${h.hiddenEntrance.y}`);
    }

    for (let row = 0; row < floor.height; row++) {
      for (let col = 0; col < floor.width; col++) {
        const tile = floor.grid[row][col];
        if (tile !== 1 && tile !== 2) continue;
        if (hiddenEntrances.has(`${col},${row}`)) continue; // 隐藏房入口：不渲染（与周围虚空一致）
        const isPillar = tile === 2;
        const roomKey = roomGrid[`${col},${row}`];
        const wallH = isPillar ? heights.pillar : heights.wallByRoom[roomKey] ?? heights.corridorWall;
        const h = Math.max(0.5, wallH / ts);
        const key = h.toFixed(2);
        const map = isPillar ? pillarGroups : wallGroups;
        let g = map.get(key);
        if (!g) {
          g = { h, cells: [] };
          map.set(key, g);
        }
        g.cells.push([col, row]);
      }
    }

    const dummy = new THREE.Object3D();
    this.wallCells.clear();
    // 区段主题墙面纹理（青砖/苔绿/书架/星岩/黄铜/白金，§2/§3）
    const wallMat = new THREE.MeshStandardMaterial({
      map: wallTexture(this.currentTier.wall), roughness: 0.8, metalness: 0.08,
    });
    // 砖缝凹陷 + 砖面反射差异：砌体在月光下呈现真实凹凸，而非一张平贴纸
    this.attachRelief(wallMat, wallTexture(this.currentTier.wall), { normal: 2.6, rough: 0.8, roughRange: 0.26 });
    for (const g of wallGroups.values()) {
      // 砖缝纹理（文档 5.3：Canvas → Texture，无外部图片依赖）
      const mat = wallMat;
      const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, g.h + 0.16, 1), mat, g.cells.length);
      inst.castShadow = true;
      inst.receiveShadow = true;
      g.cells.forEach(([col, row], i) => {
        // 向下多筑 0.16：底部沉入外部地面（-0.12）之下，避免墙脚悬空露缝
        dummy.position.set(col + 0.5, (g.h - 0.16) / 2, row + 0.5);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
        // 记录格子 → 实例，供"遮挡虚化"单独隐藏 / 恢复
        this.wallCells.set(`${col},${row}`, { mesh: inst, index: i, col, row, h: g.h });
      });
      inst.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(inst);

      // 塔身截面已移除（改为外部世界地面，见 buildGround）
    }
    // 墙柱：与室内装饰柱共用同一套形体语言（基座 + 线脚 + 收分柱身 + 柱冠）。
    // 材质提到循环外：此前每根柱子各建一份材质实例，白白增加状态切换。
    const stone = this.propDetail(
      new THREE.MeshStandardMaterial({ color: 0x6f7f74, roughness: 0.72, metalness: 0.12 }), 'stone', 3, 1.0,
    );
    const stoneDark = this.propDetail(
      new THREE.MeshStandardMaterial({ color: 0x57655c, roughness: 0.8, metalness: 0.1 }), 'stone', 3, 0.9,
    );
    for (const g of pillarGroups.values()) {
      for (const [col, row] of g.cells) {
        const pillar = this.buildPillarMesh(g.h, stone, stoneDark);
        pillar.position.set(col + 0.5, -0.14, row + 0.5); // 柱基沉入外部地面，避免悬空
        this.wallGroup.add(pillar);
      }
    }

  }

  /**
   * 立柱建模（墙柱 / 室内装饰柱共用）：方础 → 圆线脚 → 收分柱身 → 颈环 → 方冠。
   * 全部倒角或带线脚，转角接光形成高光线，比"方盒 + 光杆"精致得多。
   */
  private buildPillarMesh(totalH: number, stone: THREE.Material, stoneDark: THREE.Material): THREE.Group {
    const g = new THREE.Group();
    const baseH = 0.14;
    const capH = 0.12;
    const base = new THREE.Mesh(roundedBox(0.52, baseH, 0.52, 0.028), stoneDark);
    base.position.y = baseH / 2;
    const plinth = new THREE.Mesh(cyl(0.205, 0.225, 0.05), stone); // 柱础线脚
    plinth.position.y = baseH + 0.025;
    const shaftTop = baseH + 0.05;
    const shaftH = Math.max(0.2, totalH - shaftTop - capH - 0.1);
    const shaft = new THREE.Mesh(cyl(0.145, 0.19, shaftH), stone); // 收分柱身（下粗上细）
    shaft.position.y = shaftTop + shaftH / 2;
    const neck = new THREE.Mesh(cyl(0.195, 0.15, 0.055), stone); // 柱头颈环
    neck.position.y = shaftTop + shaftH + 0.028;
    const cap = new THREE.Mesh(roundedBox(0.46, capH, 0.46, 0.028), stoneDark);
    cap.position.y = shaftTop + shaftH + 0.055 + capH / 2;
    for (const m of [base, plinth, shaft, neck, cap]) {
      m.castShadow = true;
      m.receiveShadow = true;
      g.add(m);
    }
    return g;
  }

  /** 栏杆材质：按区段走廊样式（配色 / 金属度 / 自发光）+ 石料噪声法线 */
  private railingMats(cfg: TierCorridor): {
    post: THREE.MeshStandardMaterial; rail: THREE.MeshStandardMaterial; accent: THREE.MeshStandardMaterial | null;
  } {
    const post = this.propDetail(new THREE.MeshStandardMaterial({
      color: cfg.postColor, roughness: cfg.roughness, metalness: cfg.metalness,
    }), 'stone', 3, 1.0);
    const rail = this.propDetail(new THREE.MeshStandardMaterial({
      color: cfg.railColor, roughness: Math.max(0.22, cfg.roughness - 0.08), metalness: cfg.metalness,
    }), 'stone', 3, 0.9);
    let accent: THREE.MeshStandardMaterial | null = null;
    if (cfg.glow) {
      // 星辉 / 黄铜暖光：金属段更亮
      const e = cfg.metalness > 0.5 ? 0.45 : 0.24;
      rail.emissive = new THREE.Color(cfg.glow);
      rail.emissiveIntensity = e;
      post.emissive = new THREE.Color(cfg.glow);
      post.emissiveIntensity = e * 0.3;
      accent = new THREE.MeshStandardMaterial({
        color: cfg.glow, emissive: new THREE.Color(cfg.glow), emissiveIntensity: 0.9,
        roughness: 0.4, metalness: 0.35,
      });
    }
    return { post, rail, accent };
  }

  /**
   * 一段栏杆（**按区段样式**建模：栏柱式 / 木质横板式 / 栏板式 + 柱头 + 点缀）。
   * `vertical=true` 表示沿 Z 走向、`fixed` 为 X 坐标；否则沿 X 走向、`fixed` 为 Z 坐标；
   * `a0..a0+len` 为沿走向的起止（**格边界**，间距 1）→ 立柱天然落在两端。
   */
  private addRailingRun(
    vertical: boolean, fixed: number, a0: number, len: number,
    cfg: TierCorridor,
    mats: { post: THREE.Material; rail: THREE.Material; accent: THREE.Material | null },
    railH: number,
  ): void {
    const mid = a0 + len / 2;
    const px = vertical ? fixed : mid;
    const pz = vertical ? mid : fixed;
    // 金属 / 观星段更纤细，石质段更厚重
    const slim = cfg.metalness > 0.5;
    const postW = cfg.variant === 'panel' ? 0.16 : (slim ? 0.12 : 0.15);
    const railW = slim ? 0.1 : 0.14;
    const at = (a: number): { x: number; z: number } => ({ x: vertical ? fixed : a, z: vertical ? a : fixed });
    const addRail = (geo: THREE.BufferGeometry, mat: THREE.Material, y: number, recv = true): void => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, y, pz);
      m.castShadow = true;
      m.receiveShadow = recv;
      this.wallGroup.add(m);
    };

    // 上扶手 + 下横档（三种变体共有）
    addRail(roundedBox(vertical ? railW : len + 0.12, railW * 0.72, vertical ? len + 0.12 : railW, 0.03), mats.rail, railH);
    addRail(roundedBox(vertical ? 0.09 : len, 0.07, vertical ? len : 0.09, 0.02), mats.post, 0.12);

    const dummy = new THREE.Object3D();
    if (cfg.variant === 'timber') {
      // 木质：两道横板（代替栏柱）
      for (const y of [railH * 0.42, railH * 0.72]) {
        addRail(roundedBox(vertical ? 0.055 : len, 0.085, vertical ? len : 0.055, 0.02), mats.rail, y, false);
      }
    } else if (cfg.variant === 'panel') {
      // 栏板：实心薄板 + 顶部线脚（书架侧板感）
      const panelH = Math.max(0.2, railH - 0.26);
      addRail(roundedBox(vertical ? 0.05 : len, panelH, vertical ? len : 0.05, 0.015), mats.rail, 0.12 + panelH / 2, false);
      addRail(roundedBox(vertical ? 0.085 : len, 0.055, vertical ? len : 0.085, 0.018), mats.post, 0.12 + panelH, false);
    } else {
      // 栏柱式：中横档 + 逐格均分的细栏柱
      addRail(roundedBox(vertical ? 0.07 : len, 0.045, vertical ? len : 0.07, 0.016), mats.rail, railH * 0.55, false);
      const perCell = Math.max(2, cfg.balusters);
      const balH = Math.max(0.2, railH - 0.18);
      const bw = slim ? 0.032 : 0.05;
      const bals = new THREE.InstancedMesh(roundedBox(bw, balH, bw, bw * 0.35), mats.rail, len * perCell);
      bals.castShadow = true;
      let bi = 0;
      for (let i = 0; i < len; i++) {
        for (let k = 0; k < perCell; k++) {
          const p = at(a0 + i + (k + 0.5) / perCell);
          dummy.position.set(p.x, 0.1 + balH / 2, p.z);
          dummy.updateMatrix();
          bals.setMatrixAt(bi++, dummy.matrix);
        }
      }
      bals.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(bals);
    }

    // 立柱（格子边界，两端各封一根）+ 可选柱头
    const posts = new THREE.InstancedMesh(roundedBox(postW, railH + 0.06, postW, 0.03), mats.post, len + 1);
    posts.castShadow = true;
    posts.receiveShadow = true;
    const finials = cfg.finial ? new THREE.InstancedMesh(sphere(postW * 0.38), mats.rail, len + 1) : null;
    for (let i = 0; i <= len; i++) {
      const p = at(a0 + i);
      dummy.position.set(p.x, (railH + 0.06) / 2, p.z);
      dummy.updateMatrix();
      posts.setMatrixAt(i, dummy.matrix);
      if (finials) {
        dummy.position.set(p.x, railH + 0.06 + postW * 0.3, p.z);
        dummy.updateMatrix();
        finials.setMatrixAt(i, dummy.matrix);
      }
    }
    posts.instanceMatrix.needsUpdate = true;
    this.wallGroup.add(posts);
    if (finials) {
      finials.castShadow = true;
      finials.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(finials);
    }

    // 点缀：黄铜铆钉 / 观星符文（沿扶手等距排布）
    if (mats.accent && cfg.accents) {
      const step = cfg.accents === 'rune' ? 2 : 0.5;
      const n = Math.max(1, Math.floor(len / step));
      const acc = new THREE.InstancedMesh(
        cfg.accents === 'rune' ? roundedBox(0.07, 0.07, 0.07, 0.02) : sphere(0.028),
        mats.accent, n,
      );
      acc.castShadow = cfg.accents === 'rune';
      for (let i = 0; i < n; i++) {
        const a = a0 + (i + 0.5) * step;
        if (a > a0 + len) break;
        const p = at(a);
        dummy.position.set(p.x, railH + (cfg.accents === 'rune' ? 0.1 : 0.05), p.z);
        dummy.updateMatrix();
        acc.setMatrixAt(i, dummy.matrix);
      }
      acc.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(acc);
    }
  }

  /**
   * 走廊栏杆：沿走廊**两侧开放边缘**生成（立柱 + 上/中/下横档 + 栏柱）。
   *
   * 为什么不能"按墙格生成"：程序化地图初始全是**虚空(-1)**，走廊是从虚空里开凿的 0 线，
   * 两侧本就是虚空、没有可依附的墙；地图上唯一的"非房间墙格"其实是**隐藏房入口**——
   * 按墙格生成栏杆 = 只在暗门处冒出一段栏杆，等于把秘密标出来。
   *
   * 因此栏杆改为**由走廊边缘推导**：
   *   - 开放边缘 = 走廊格四邻里「虚空(-1) / 悬崖(4) / 隐藏房入口」；
   *   - 隐藏房入口同样按开放边处理 → 栏杆**连续无缺口**，暗门不会因缺一段栏而暴露；
   *   - 相邻是房间墙/门 → 不开栏（那儿本来就有墙，也是走廊两端的出入口）。
   */
  private buildCorridorRailings(floor: { grid: number[][]; corridors: CorridorData[]; hiddenRooms?: RoomData[] }): void {
    if (!floor.corridors || floor.corridors.length === 0) return;
    const hidden = new Set<string>();
    for (const h of floor.hiddenRooms ?? []) {
      if (h.hiddenEntrance) hidden.add(`${h.hiddenEntrance.x},${h.hiddenEntrance.y}`);
    }
    const corridor = new Set<string>();
    for (const c of floor.corridors) for (const t of c.tiles) corridor.add(`${t.x},${t.y}`);

    // 开放边缘 → 1 格长的边界线段，按「走向 + 固定坐标」归组成可连成段的集合
    const groups = new Map<string, { vertical: boolean; fixed: number; alongs: number[] }>();
    const dirs: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const c of floor.corridors) {
      for (const t of c.tiles) {
        for (const [dx, dy] of dirs) {
          const nx = t.x + dx, ny = t.y + dy;
          if (corridor.has(`${nx},${ny}`)) continue;              // 相邻也是走廊 → 内部，无栏
          const tile = floor.grid[ny]?.[nx];
          const open = tile === -1 || tile === 4 || hidden.has(`${nx},${ny}`);
          if (!open) continue;                                     // 相邻是房间墙/门 → 不开栏
          const vertical = dx !== 0;
          const fixed = vertical ? t.x + 0.5 + dx * 0.5 : t.y + 0.5 + dy * 0.5;
          const along = vertical ? t.y : t.x;
          const key = `${vertical ? 1 : 0}|${fixed}`;
          let g = groups.get(key);
          if (!g) { g = { vertical, fixed, alongs: [] }; groups.set(key, g); }
          g.alongs.push(along);
        }
      }
    }
    if (groups.size === 0) return;

    const ts = projection.tileSize;
    const railH = Math.min(0.95, Math.max(0.55, (dataManager.config.heights.corridorWall / ts) * 0.72));
    const cfg = this.currentTier.corridor;
    const mats = this.railingMats(cfg);
    for (const g of groups.values()) {
      const alongs = [...new Set(g.alongs)].sort((a, b) => a - b);
      let start = alongs[0];
      let prev = alongs[0];
      const flush = (s: number, e: number): void => this.addRailingRun(g.vertical, g.fixed, s, e - s + 1, cfg, mats, railH);
      for (let i = 1; i < alongs.length; i++) {
        if (alongs[i] === prev + 1) { prev = alongs[i]; continue; }
        flush(start, prev);
        start = alongs[i];
        prev = alongs[i];
      }
      flush(start, prev);
    }
  }

  /**
   * 墙面开窗（§3 区段环境：窗外/远景）：房间环形墙朝内一面挂「窗景面片」，
   * 内容为当前区段窗景纹理（雾层楼顶/藤蔓炉火/云雾柔光/星空/齿轮云海/纯光）。
   * 位置由墙格坐标哈希决定（确定性，重渲染不跳变），每房至多 3 扇、隔 5 格选一。
   */
  private buildWindows(floor: { grid: number[][]; rooms: RoomData[] }): void {
    const tier = this.currentTier;
    const viewTex = windowTexture(tier.windowView);
    if (tier.windowView === 'gears') {
      this.windowScrollers.push({ tex: viewTex, speed: 0.012 }); // 云海缓慢 UV 滚动
    }
    // 窗景自发光（光影 v2 §6 [建议]）：Basic 材质不受光也不发光，
    // 改为 emissiveMap + 区段冷/暖色自发光——窗自身发亮，经 bloom 向室内轻微溢光
    const glowMat = new THREE.MeshStandardMaterial({
      map: viewTex,
      emissive: new THREE.Color(tier.windowGlow),
      emissiveMap: viewTex,
      emissiveIntensity: 0.75,
      roughness: 0.9,
    });
    const frameMat = new THREE.MeshStandardMaterial({
      color: tier.wall === 'brass' ? 0x8a6d3f : 0x4a3826,
      roughness: 0.7, metalness: tier.wall === 'brass' ? 0.55 : 0.2,
    });
    const WIN_W = 0.72;
    const WIN_H = 0.92;

    for (const room of floor.rooms) {
      if (room.width < 5) continue; // 小房间不开窗
      let placed = 0;
      for (let wy = room.y; wy < room.y + room.height && placed < 3; wy++) {
        for (let wx = room.x; wx < room.x + room.width && placed < 3; wx++) {
          const onRing = wx === room.x || wx === room.x + room.width - 1
            || wy === room.y || wy === room.y + room.height - 1;
          if (!onRing || floor.grid[wy]?.[wx] !== 1) continue;
          // 确定性稀疏选取（同层同位置稳定）
          if ((wx * 31 + wy * 17) % 5 !== 0) continue;
          // 朝向：墙格的相邻房内地板方向
          let dirX = 0;
          let dirZ = 0;
          if (floor.grid[wy + 1]?.[wx] === 0 && wy === room.y) dirZ = 1;        // 北墙朝南
          else if (floor.grid[wy - 1]?.[wx] === 0 && wy === room.y + room.height - 1) dirZ = -1; // 南墙朝北
          else if (floor.grid[wy]?.[wx + 1] === 0 && wx === room.x) dirX = 1;    // 西墙朝东
          else if (floor.grid[wy]?.[wx - 1] === 0 && wx === room.x + room.width - 1) dirX = -1;  // 东墙朝西
          else continue;

          const cell = this.wallCells.get(`${wx},${wy}`);
          const wallH = cell?.h ?? 2;
          const cy = Math.min(wallH * 0.52, 1.85);
          const g = new THREE.Group();
          const plane = new THREE.Mesh(new THREE.PlaneGeometry(WIN_W, WIN_H), glowMat);
          g.add(plane);
          // 窗框：上下横梃 + 左右竖梃 + 中十字棂
          const bar = 0.07;
          const parts: [number, number, number, number, number][] = [
            [0, WIN_H / 2 + bar / 2, WIN_W + bar * 2, bar, bar],
            [0, -WIN_H / 2 - bar / 2, WIN_W + bar * 2, bar, bar],
            [-WIN_W / 2 - bar / 2, 0, bar, WIN_H, bar],
            [WIN_W / 2 + bar / 2, 0, bar, WIN_H, bar],
            [0, 0, WIN_W, bar * 0.55, bar * 0.6],
            [0, 0, bar * 0.55, WIN_H, bar * 0.6],
          ];
          for (const [ox, oy, sx, sy, sz] of parts) {
            const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), frameMat);
            m.position.set(ox, oy, 0.015);
            m.castShadow = true;
            g.add(m);
          }
          // 位置与朝向：贴墙内表面
          g.position.set(wx + 0.5 + dirX * 0.545, cy, wy + 0.5 + dirZ * 0.545);
          g.rotation.y = dirZ === 1 ? 0 : dirZ === -1 ? Math.PI : dirX === 1 ? Math.PI / 2 : -Math.PI / 2;
          this.wallGroup.add(g);
          placed++;
        }
      }
    }
  }

  /**
   * 门洞门套（2026-09-10）：给每个房门加石制门套（两侧门柱 + 过梁 + 拱券），
   * 让门从「墙上的一个缺口」变成真正的门洞，房间之间的过渡更有建筑感。
   * 门格本身是可通行地板（不在 wallCells 中），故墙高取自相邻墙格。
   */
  private buildDoorFrames(floor: { grid: number[][]; rooms: RoomData[] }): void {
    const stone = this.propDetail(new THREE.MeshStandardMaterial({
      color: 0x7f8a84, roughness: 0.78, metalness: 0.1,
    }), 'stone', 2, 0.9);
    const trim = this.propDetail(new THREE.MeshStandardMaterial({
      color: 0x6a7570, roughness: 0.6, metalness: 0.25,
    }), 'stone', 2, 0.8);
    const wallHeightNear = (x: number, y: number): number => {
      let h = 0;
      for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as const) {
        const c = this.wallCells.get(`${x + dx},${y + dy}`);
        if (c && c.h > h) h = c.h;
      }
      return h > 0 ? h : 1.2;
    };
    const built = new Set<string>();
    for (const room of floor.rooms) {
      for (const d of room.doors) {
        const key = `${d.x},${d.y}`;
        if (built.has(key)) continue; // 一道门两侧房间都会列出，去重
        built.add(key);
        const vertical = d.direction === 'east' || d.direction === 'west'; // 墙沿 Z 走向
        const h = wallHeightNear(d.x, d.y);
        const g = new THREE.Group();
        const jambH = Math.max(0.5, h - 0.12);
        for (const s of [-1, 1]) {
          const jamb = new THREE.Mesh(
            roundedBox(vertical ? 0.14 : 0.1, jambH, vertical ? 0.1 : 0.14, 0.022), stone,
          );
          jamb.position.set(vertical ? 0 : s * 0.5, jambH / 2, vertical ? s * 0.5 : 0);
          jamb.castShadow = true;
          g.add(jamb);
        }
        const lintel = new THREE.Mesh(
          roundedBox(vertical ? 0.18 : 1.14, 0.12, vertical ? 1.14 : 0.18, 0.03), trim,
        );
        lintel.position.y = jambH + 0.06;
        lintel.castShadow = true;
        g.add(lintel);
        if (h >= 1.05) {
          const arch = new THREE.Mesh(torus(0.44, 0.05, Math.PI), trim);
          arch.position.y = jambH + 0.1;
          arch.rotation.y = vertical ? Math.PI / 2 : 0;
          g.add(arch);
        }
        g.position.set(d.x + 0.5, 0, d.y + 0.5);
        this.wallGroup.add(g);
      }
    }
  }

  /**
   * 房间环境陈设（2026-09-10 新增，见 `effects/ThreeDecor.ts`）：
   * 按「房间类型 + 区段主题」在墙根摆陈设、在墙面挂旗帜 / 壁烛 / 蛛网、在地面撒贴片，
   * 补上此前"每房只有墙 + 地板 + 功能实体"的空旷感。
   *
   * 纯装饰层：不写入 `room.entities`，不影响寻路、碰撞与战斗；
   * 位置 / 种类由房间坐标哈希决定 → 同层重渲染不跳变。密度见 `render.roomDecorDensity`（0 = 关闭）。
   */
  private buildRoomDecor(floor: { grid: number[][]; rooms: RoomData[]; floorId: number }): void {
    const density = dataManager.config.render.roomDecorDensity;
    if (!density || density <= 0) return;
    const mats = makeDecorMats(this.currentTier);
    this.decorMats = mats;
    for (const room of floor.rooms) {
      const items = planRoomDecor(room, floor.grid, floor.floorId, this.currentTier, density);
      const landmark = planRoomLandmark(room, floor.grid, floor.floorId); // 每房地标（王座/篝火/吊灯）
      if (landmark) items.push(landmark);
      for (const item of items) {
        const g = buildDecorObject(item.kind, mats, seededRand(item.seed));
        g.position.set(item.wx, decorBaseY(item.kind), item.wz);
        g.rotation.y = item.yaw;
        // 墙面挂饰：按所依附墙格的实际高度抬到墙上（旗帜偏高、蛛网靠顶、壁烛腰高）
        if (item.cellX !== undefined && item.cellY !== undefined) {
          const h = this.wallCells.get(`${item.cellX},${item.cellY}`)?.h ?? 1.2;
          const ratio = item.kind === 'web' ? 0.8 : item.kind === 'banner' ? 0.6 : 0.5;
          g.position.y = Math.max(0.3, Math.min(h * ratio, h - 0.1));
        }
        this.decorGroup.add(g);
      }
    }
  }

  /**
   * 计算需要虚化的墙格。
   * 相机位于注视点南侧上方，遮挡玩家 / 可交互物的墙 = 相机到该目标的视线穿过的墙格，
   * 且只取紧贴目标的那些（OCCLUDE_MAX_DIST）——玩家走到墙前一格才虚化，隔着一格地板不虚化。
   * 做法：从目标格中心沿视线做栅格采样，收集穿过的墙格（连同左右各一块一起虚化），
   * 正对 / 斜向的紧贴遮挡都能覆盖，也避免"半截实墙"的突兀边界。
   */
  private computeOccludedWalls(): Set<string> {
    const set = new Set<string>();
    const floor = WorldManager.getInstance().currentFloor;
    if (!floor) return set;
    const grid = floor.grid;
    const cam3d = dataManager.config.camera3D;
    // 相机在 XZ 平面的落点（注视点沿 +Z 后退 camera3D.distance）
    const camX = this.focusX;
    const camZ = this.focusZ + cam3d.distance;

    /** 只虚化实心砖墙：走廊栏杆不在 wallCells 中，保持通透 */
    const mark = (c: number, r: number): void => {
      if (grid[r]?.[c] !== 1) return;
      const key = `${c},${r}`;
      if (this.wallCells.has(key)) set.add(key);
    };

    const addAround = (tx: number, ty: number): void => {
      const ox = tx + 0.5;
      const oz = ty + 0.5;
      const dx = camX - ox;
      const dz = camZ - oz;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.001) return;
      const nx = dx / dist;
      const nz = dz / dist;
      const step = 0.2; // 小于 1 格，保证不跳过任何格子
      const maxT = Math.min(dist, OCCLUDE_MAX_DIST);
      for (let t = 0.5; t <= maxT; t += step) {
        const c = Math.floor(ox + nx * t);
        const r = Math.floor(oz + nz * t);
        if (r < 0 || r >= floor.height || c < 0 || c >= floor.width) break;
        if (grid[r][c] !== 1) continue;
        mark(c, r);
        mark(c - 1, r);
        mark(c + 1, r);
      }
    };
    const p = Player.getInstance().pos;
    addAround(p.x, p.y);
    for (const { entity } of WorldManager.getInstance().allEntities()) {
      if (entity.kind === 'monster' || entity.kind === 'boss' || entity.kind === 'chest'
        || entity.kind === 'npc' || entity.kind === 'stair') {
        addAround(entity.x, entity.y);
      }
    }
    return set;
  }

  /** 每帧推进遮挡虚化：进度插值 → 隐藏实体墙实例 + 显示半透明替代（保留碰撞） */
  private updateWallFade(deltaMs: number): void {
    // 遮挡集合按节流重算，避免每帧遍历全部实体
    this.fadeScanTimer -= deltaMs;
    if (this.fadeScanTimer <= 0) {
      this.fadeScanTimer = 120;
      const occluded = this.computeOccludedWalls();
      for (const key of occluded) {
        const rec = this.fadeCells.get(key);
        if (rec) rec.target = 1;
        else this.fadeCells.set(key, { progress: 0, target: 1 });
      }
      for (const [key, rec] of this.fadeCells) {
        if (!occluded.has(key)) rec.target = 0;
      }
    }

    const k = Math.min(1, deltaMs / 180); // 虚化过渡动画速度
    const done: string[] = [];
    for (const [key, rec] of this.fadeCells) {
      const before = rec.progress;
      rec.progress += (rec.target - rec.progress) * k;
      if (Math.abs(rec.target - rec.progress) < 0.01) rec.progress = rec.target;
      const cell = this.wallCells.get(key);
      if (!cell) { done.push(key); continue; }
      if (before === rec.progress) continue;

      if (rec.progress > 0.02) {
        this.setWallInstanceHidden(cell, true);
        this.showFadeWall(key, cell, rec.progress);
      } else {
        this.setWallInstanceHidden(cell, false);
        this.releaseFadeWall(key);
        if (rec.target === 0) done.push(key);
      }
    }
    for (const key of done) this.fadeCells.delete(key);
  }

  /** 把某个墙实例移出视野（虚化期间由半透明替代显示）或还原 */
  private setWallInstanceHidden(
    cell: { mesh: THREE.InstancedMesh; index: number; col: number; row: number; h: number },
    hidden: boolean,
  ): void {
    const dummy = new THREE.Object3D();
    if (hidden) {
      dummy.position.set(0, -999, 0);
      dummy.scale.set(0.0001, 0.0001, 0.0001);
    } else {
      dummy.position.set(cell.col + 0.5, cell.h / 2, cell.row + 0.5);
      dummy.scale.set(1, 1, 1);
    }
    dummy.updateMatrix();
    cell.mesh.setMatrixAt(cell.index, dummy.matrix);
    cell.mesh.instanceMatrix.needsUpdate = true;
  }

  /** 从池中取一个半透明墙替代显示（opacity 随虚化进度降低，仍可看出是实体墙） */
  private showFadeWall(
    key: string,
    cell: { col: number; row: number; h: number },
    progress: number,
  ): void {
    let slot = this.fadePool.find(s => s.key === key);
    if (!slot) {
      slot = this.fadePool.find(s => s.key === null);
      if (!slot) {
        const fadeMat = new THREE.MeshStandardMaterial({
          map: wallTexture(this.currentTier.wall), roughness: 0.8, metalness: 0.08,
          transparent: true, opacity: 1, depthWrite: false,
        });
        // 与实心墙同款细节：虚化过程中墙面质感不发生跳变
        this.attachRelief(fadeMat, wallTexture(this.currentTier.wall), { normal: 2.6, rough: 0.8, roughRange: 0.26 });
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), fadeMat);
        mesh.castShadow = true; // 虚化期间仍投影：实心实例已移出视野，若替代墙不投影，墙影会突然消失
        slot = { mesh, key: null };
        this.fadePool.push(slot);
        this.scene?.add(mesh);
      }
      slot.key = key;
    }
    slot.mesh.visible = true;
    slot.mesh.scale.set(1, cell.h, 1);
    slot.mesh.position.set(cell.col + 0.5, cell.h / 2, cell.row + 0.5);
    (slot.mesh.material as THREE.MeshStandardMaterial).opacity = 1 - progress * 0.78;
  }

  /** 归还虚化墙槽位 */
  private releaseFadeWall(key: string): void {
    const slot = this.fadePool.find(s => s.key === key);
    if (!slot) return;
    slot.key = null;
    slot.mesh.visible = false;
  }

  /** 实体层重建（怪物死亡/开箱等状态变化） */
  private rebuildEntities(): void {
    if (!this.ready) return;
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    if (!floor) return;
    if (floor.floorId !== this.builtFloorId) {
      this.rebuildFloor();
      return;
    }
    this.clearGroup(this.entityGroup);
    // 灯光池归零复用（不增删灯光 → 不触发着色器重编译）
    this.torchCursor = 0;
    this.glowCursor = 0;
    this.torchLights.clear();
    this.glowLights.clear();
    for (const l of this.torchPool) l.intensity = 0;
    for (const l of this.glowPool) l.intensity = 0;
    this.glowSprites = []; // 精灵已随 clearGroup 释放，此处只清引用
    this.dustItems = [];
    this.spiritFx = null; // 引导者灵体特效随实体重建（下方 addEntity 重新登记）
    this.spiritDots = [];
    // 玩家不在 entityGroup 内（常驻 playerGroup），此处不得置空 —— 见 ensurePlayerSprite()
    this.litSprites = []; // 纸片人已随 clearGroup 释放，登记表一并清空
    const prevGates = this.gates; // 保留铁门开合进度，避免重建时瞬间跳变
    this.gates = [];

    const heights = dataManager.config.heights;
    const ts = projection.tileSize;

    for (const { entity, room } of world.allEntities()) {
      if (entity.kind === 'carpet') continue;
      const def: MonsterDef | undefined = entity.kind === 'monster' || entity.kind === 'boss'
        ? dataManager.getMonster(entity.monsterId ?? '') : undefined;
      const height = entity.kind === 'boss' ? heights.boss
        : entity.kind === 'monster' ? (entity.isElite ? heights.monsterElite : def?.height ?? heights.monsterNormal)
        : entity.kind === 'chest' ? heights.chest + (entity.chestTier === 'grand' ? 8 : 0)
        : entity.kind === 'npc' ? heights.npc
        : entity.kind === 'potion' ? heights.potion
        : entity.kind === 'cauldron' ? heights.cauldron
        : entity.kind === 'shelf' ? heights.shelf
        : entity.kind === 'fountain' ? heights.fountain
        : entity.kind === 'pillar' ? heights.pillar
        : heights.torch;
      this.addEntity(entity, room, def, height, ts);
    }

    // 玩家（单例不在 allEntities 中）：常驻 playerGroup，仅首次创建（见 ensurePlayerSprite）
    this.ensurePlayerSprite();
    this.syncPlayer();
    if (this.playerSprite) this.litSprites.push({ sprite: this.playerSprite });

    // Boss 铁门：Boss 存活时封锁出口，击败后自动开启
    this.buildGates(prevGates);
  }

  /**
   * 玩家纸片人：**只创建一次**，常驻 `playerGroup`（不参与实体重建）。
   *
   * 此前玩家随 `rebuildEntities()` 重建，而重建会：
   *   ① 新建 Sprite 材质；② 对图集纹理置 `needsUpdate` → **整张 384×832 图集重传 GPU**（约 1.3MB）；
   *   ③ 重建 `HeroAnimator`。开箱 / 击杀后都要走一遍 → 表现为「偶发卡一下」。
   */
  private ensurePlayerSprite(): void {
    if (this.playerSprite) return;
    // 优先用精灵图集（帧动画），加载失败回退原烘焙纹理
    const atlas = getHeroAtlas();
    const heights = dataManager.config.heights;
    const ts = projection.tileSize;
    // 图集帧为 64×64 方格（角色约占格高 5/6），世界高度单独定；旧烘焙贴图沿用原比例
    const heroH = atlas ? 2.0 : Math.max(1.35, (heights.player / ts) * 1.6);
    this.playerSprite = this.makePaperSprite(atlas ?? textureGen.player(), heroH);
    if (atlas) {
      // 图集帧是 64×64 方格：makePaperSprite 按整图宽高比(384/832≈0.46)算宽会把角色压窄，这里覆盖为 1:1
      this.playerSprite.scale.set(heroH, heroH, 1);
      this.playerSprite.userData.footRatio = 5 / 64; // 帧内角色脚底约在第 59/64 行
      // 图集用 UV 裁格取帧：开 mipmap 会在低层级混入相邻帧（串帧），关 mipmap 只用线性放大
      const tex = this.playerSprite.material.map as THREE.Texture;
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      this.heroAnimator = new HeroAnimator(tex);
    } else {
      this.heroAnimator = null;
    }
    this.heroBaseW = Math.abs(this.playerSprite.scale.x);
    this.playerShadow = this.addGroundShadow(0, 0, heroH * 0.28, undefined, this.playerGroup);
    // 主角 contact AO（光影 v2 §3 [建议]）：点光源关闭投影后补偿体积感——更小更深一层
    this.playerContact = this.addGroundShadow(
      0, 0, heroH * 0.28 * 0.6,
      Math.min(0.85, dataManager.config.shadow.staticAlpha * 1.3), this.playerGroup);
    this.playerGroup.add(this.playerSprite);
  }

  /** 单个实体的 3D 表现：静态物 → Mesh；动态实体 → 纸片人 Sprite */
  private addEntity(
    entity: MapEntity, room: RoomData, def: MonsterDef | undefined, heightPx: number, ts: number,
  ): void {
    const cx = entity.x + 0.5;
    const cz = entity.y + 0.5;
    const opened = entity.kind === 'chest' && WorldManager.getInstance().isChestOpened(entity);

    if (entity.kind === 'torch') {
      // 火把挂在墙格上：贴到朝向地板一侧的墙面边缘，而不是埋在墙体中心
      const floor = WorldManager.getInstance().currentFloor;
      let tx = cx;
      let tz = cz;
      for (const [dx, dz] of [[0, -1], [0, 1], [-1, 0], [1, 0]] as const) {
        if (floor?.grid[entity.y + dz]?.[entity.x + dx] === 0) {
          tx = cx + dx * 0.44; // 墙格半宽 0.5，留 0.06 让火把杆贴住墙面
          tz = cz + dz * 0.44;
          break;
        }
      }

      // 壁挂火把：支架固定在墙面上，短杆斜挑 + 火焰悬在半空（不再立在地上）
      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.06, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x3d3d42, roughness: 0.5, metalness: 0.7 }),
      );
      bracket.position.set(tx - (tx - cx) * 0.35, 0.58, tz - (tz - cz) * 0.35);
      this.entityGroup.add(bracket);

      const pole = new THREE.Mesh(
        new THREE.BoxGeometry(0.07, 0.34, 0.07),
        new THREE.MeshStandardMaterial({ color: 0x6b4a2a, roughness: 0.9 }),
      );
      pole.position.set(tx, 0.72, tz);
      pole.castShadow = true;
      this.entityGroup.add(pole);

      const flame = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xff8c1a }),
      );
      flame.position.set(tx, 0.98, tz);
      this.entityGroup.add(flame);

      // 丁达尔光锥：火焰向下的可见光柱（additive，氛围级透明度，不遮挡物体）
      const cfgT = dataManager.config.shadow.tyndall;
      const coneH = Math.min(0.95, cfgT.length / ts); // 不超出火焰高度，避免穿地
      const coneW = Math.max(0.35, cfgT.width / ts);
      const cone = new THREE.Sprite(new THREE.SpriteMaterial({
        map: canvasTexture(textureGen.coneTex()),
        color: 0xff9944,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        opacity: cfgT.alpha,
      }));
      cone.scale.set(coneW, coneH, 1);
      cone.position.set(tx, coneH / 2, tz);
      cone.renderOrder = 2;
      this.entityGroup.add(cone);

      // 光锥内浮尘：缓慢上升循环，强化体积光质感
      const dustCount = Math.max(0, Math.min(cfgT.dustMax, cfgT.dustMin));
      for (let i = 0; i < dustCount; i++) {
        const dust = new THREE.Sprite(new THREE.SpriteMaterial({
          map: canvasTexture(textureGen.glow('#ffcc88')),
          blending: THREE.AdditiveBlending,
          transparent: true,
          depthWrite: false,
          opacity: 0,
        }));
        dust.scale.set(0.06, 0.06, 1);
        dust.renderOrder = 3;
        this.entityGroup.add(dust);
        this.dustItems.push({
          sprite: dust, baseX: tx, baseZ: tz, baseY: 0.1,
          phase: Math.random(), speed: 0.12 + Math.random() * 0.1,
        });
      }

      // 从灯光池取灯（数量恒定，无重编译）
      if (this.torchCursor < this.torchPool.length) {
        const light = this.torchPool[this.torchCursor++];
        light.color.setHex(ROOM_LIGHT_COLORS[room.type] ?? 0xff9040);
        light.intensity = 1.5; // 光影优化：火把是室内主光源
        light.distance = 10;
        light.position.set(tx, 0.95, tz);
        this.torchLights.set(entity.id, light);
      }
      return;
    }

    if (entity.kind === 'chest') {
      // 宝箱：三档独立造型（普通 / 大宝箱 / 遗物），开启时盖子向后掀开
      const tier = entity.chestTier ?? 'normal';
      const chest = this.buildChest(opened, tier);
      chest.position.set(cx, 0, cz);
      this.entityGroup.add(chest);
      // 未开启的宝箱：氛围光（普通/大宝箱金色，遗物紫辉）
      if (!opened) {
        this.addGlowLight(entity.id, tier === 'relic' ? 0xd9a6ff : 0xffcc44, 0.55, 5, cx, 0.7, cz);
      }
      return;
    }

    if (entity.kind === 'stair') {
      if (entity.stairSpan === 1) return; // 2×2 从属占位格：只阻挡/触发，不渲染
      if (entity.stairSpan === 2) {
        // 2×2 大阶梯：挖空区域内向下延伸约 1 格，下行方向朝北（远离镜头）
        this.buildStaircase(entity.x, entity.y);
        this.addGlowLight(entity.id, 0x44ddff, 0.8, 6, cx, 0.7, cz);
        // 沿 2×2 格子边缘一圈蓝光：贴地方形光环（additive 染色，静态无脉动）
        const ring = new THREE.Mesh(
          new THREE.PlaneGeometry(2.9, 2.9),
          new THREE.MeshBasicMaterial({
            map: canvasTexture(textureGen.stairRing()),
            color: 0x44ddff,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.55,
            depthWrite: false,
          }),
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(cx + 0.5, 0.045, cz + 0.5);
        ring.renderOrder = 2;
        this.entityGroup.add(ring);
        return;
      }
      // 旧版单格楼梯：4 级递增台阶（文档 3.3，兼容旧存档/预制图）
      for (let i = 0; i < 4; i++) {
        const step = new THREE.Mesh(
          roundedBox(0.86, 0.12, 0.22, 0.028), // 圆角石阶：棱线接光，不再是无细节的方块
          new THREE.MeshStandardMaterial({ color: 0x8899aa, roughness: 0.8 }),
        );
        step.position.set(cx, 0.06 + i * 0.12, cz - 0.33 + i * 0.22);
        step.castShadow = true;
        step.receiveShadow = true;
        this.entityGroup.add(step);
      }
      // 楼梯：蓝白指引光 + 稳定呼吸（文档：终点楼梯光 #44ddff）
      this.addGlowLight(entity.id, 0x44ddff, 0.8, 6, cx, 0.8, cz);
      this.addGlow('#44ddff', 0.5, cx, 0.35, cz, 1.2);
      return;
    }

    // 女巫大锅：3D 建模（圆锅 + 锅沿 + 三足 + 药液面），替代纸片人
    if (entity.kind === 'cauldron') {
      const g = new THREE.Group();
      const iron = this.propDetail(
        new THREE.MeshStandardMaterial({ color: 0x2c2f33, roughness: 0.55, metalness: 0.75 }), 'iron', 3, 0.9,
      );
      const pot = new THREE.Mesh(sphere(0.34, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.65), iron);
      pot.position.y = 0.36;
      pot.castShadow = true;
      const rim = new THREE.Mesh(torus(0.3, 0.035), iron);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.55;
      g.add(pot, rim);
      for (const a of [0, 2.1, 4.2]) {
        const leg = new THREE.Mesh(cyl(0.03, 0.045, 0.3), iron);
        leg.position.set(Math.cos(a) * 0.2, 0.15, Math.sin(a) * 0.2);
        g.add(leg);
      }
      const brew = new THREE.Mesh(
        new THREE.CircleGeometry(0.27, 20),
        new THREE.MeshStandardMaterial({ color: 0x46d97a, emissive: 0x1f8a4a, emissiveIntensity: 0.8, roughness: 0.3 }),
      );
      brew.rotation.x = -Math.PI / 2;
      brew.position.y = 0.53;
      g.add(brew);
      g.position.set(cx, 0, cz);
      this.entityGroup.add(g);
      this.addGlow('#7effb2', 0.5, cx, 0.62, cz, 2.2);
      return;
    }

    // 药架：木架 + 三层隔板 + 彩色药瓶排，替代纸片人
    if (entity.kind === 'shelf') {
      const g = new THREE.Group();
      const wood = this.propDetail(new THREE.MeshStandardMaterial({ color: 0x5f452c, roughness: 0.8 }), 'wood', 3, 1.0);
      const frame = new THREE.Mesh(roundedBox(0.86, 1.0, 0.16, 0.02), wood);
      frame.position.y = 0.5;
      frame.castShadow = true;
      g.add(frame);
      const bottleColors = [0x9a4ddb, 0x3fae6a, 0xd9553f, 0x3f7fd9, 0xd9a92b, 0x64d93f];
      for (let lvl = 0; lvl < 3; lvl++) {
        const board = new THREE.Mesh(roundedBox(0.8, 0.05, 0.26, 0.018), wood);
        board.position.set(0, 0.22 + lvl * 0.34, 0.08);
        board.castShadow = true;
        g.add(board);
        for (let b = 0; b < 3; b++) {
          const glass = new THREE.MeshStandardMaterial({
            color: bottleColors[(lvl * 3 + b) % bottleColors.length],
            roughness: 0.25, metalness: 0.1, emissive: bottleColors[(lvl * 3 + b) % bottleColors.length],
            emissiveIntensity: 0.25,
          });
          const bottle = new THREE.Mesh(cyl(0.035, 0.045, 0.13, 12), glass);
          bottle.position.set(-0.26 + b * 0.26, 0.32 + lvl * 0.34, 0.08);
          g.add(bottle);
        }
      }
      g.position.set(cx, 0, cz);
      this.entityGroup.add(g);
      return;
    }

    // 治疗喷泉：石盆 + 内层水面 + 中柱涌泉，替代纸片人
    if (entity.kind === 'fountain') {
      const g = new THREE.Group();
      const stone = this.propDetail(new THREE.MeshStandardMaterial({ color: 0x7d8a94, roughness: 0.75 }), 'stone', 2, 0.9);
      const basin = new THREE.Mesh(cyl(0.42, 0.48, 0.22, 32), stone);
      basin.position.y = 0.11;
      basin.castShadow = true;
      basin.receiveShadow = true;
      const water = new THREE.Mesh(
        new THREE.CircleGeometry(0.36, 28),
        new THREE.MeshStandardMaterial({ color: 0x59d8e8, emissive: 0x1f7a8a, emissiveIntensity: 0.7, roughness: 0.2 }),
      );
      water.rotation.x = -Math.PI / 2;
      water.position.y = 0.2;
      const column = new THREE.Mesh(cyl(0.06, 0.1, 0.42), stone);
      column.position.y = 0.4;
      const top = new THREE.Mesh(sphere(0.09),
        new THREE.MeshStandardMaterial({ color: 0x9fe8f2, emissive: 0x3fb8cc, emissiveIntensity: 0.9, roughness: 0.2 }));
      top.position.y = 0.64;
      g.add(basin, water, column, top);
      g.position.set(cx, 0, cz);
      this.entityGroup.add(g);
      this.addGlow('#6bebff', 0.5, cx, 0.5, cz, 1.4);
      this.addGlowLight(entity.id, 0x6bebff, 0.5, 4, cx, 0.6, cz);
      return;
    }

    // 塔顶终点之门（§4 假终点）：白金石门 + 空莹门扉微光（第110层）
    if (entity.kind === 'gate') {
      const g = new THREE.Group();
      const stoneMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c0, roughness: 0.55, metalness: 0.12 });
      const goldMat = new THREE.MeshStandardMaterial({ color: 0xd4af6a, roughness: 0.32, metalness: 0.82 });
      for (const px of [-0.62, 0.62]) {
        const pillar = new THREE.Mesh(roundedBox(0.26, 2.7, 0.26, 0.035), stoneMat);
        pillar.position.set(px, 1.35, 0);
        pillar.castShadow = true;
        g.add(pillar);
        const cap = new THREE.Mesh(roundedBox(0.34, 0.12, 0.34, 0.03), goldMat);
        cap.position.set(px, 2.76, 0);
        g.add(cap);
      }
      const lintel = new THREE.Mesh(roundedBox(1.78, 0.28, 0.3, 0.04), stoneMat);
      lintel.position.set(0, 2.85, 0);
      lintel.castShadow = true;
      g.add(lintel);
      const keystone = new THREE.Mesh(roundedBox(0.3, 0.24, 0.26, 0.035), goldMat);
      keystone.position.set(0, 3.08, 0);
      g.add(keystone);
      // 门扉：纯光面（空无一物的暗示），微微透亮
      const door = new THREE.Mesh(
        new THREE.PlaneGeometry(1.0, 2.42),
        new THREE.MeshBasicMaterial({ color: 0xf7f2e2, transparent: true, opacity: 0.82 }),
      );
      door.position.set(0, 1.25, 0.02);
      g.add(door);
      g.position.set(cx, 0, cz);
      this.entityGroup.add(g);
      this.addGlowLight(entity.id, 0xfff0c8, 1.0, 7, cx, 1.5, cz);
      this.addGlow('#fff2cf', 1.0, cx, 1.3, cz, 0.4);
      return;
    }

    // 配了立绘的 NPC（如引导者·艾登）：直接用立绘作为 3D 纸片人，替换占位方块
    if (entity.kind === 'npc') {
      const npcDef = dataManager.getNpc(entity.npcId ?? '');
      const portraitCanvas = npcDef?.portrait ? getNpcPortrait(npcDef.portrait) : null;
      if (portraitCanvas) {
        const scale = 2.1;
        const sprite = this.makePaperSprite(portraitCanvas, scale);
        sprite.userData.footRatio = 6 / portraitCanvas.height; // 立绘底部 6px 余量
        sprite.position.set(cx, this.footedY(sprite), cz);
        this.entityGroup.add(sprite);
        this.litSprites.push({ sprite }); // NPC 同样参与假受光
        this.addGroundShadow(cx, cz, scale * 0.26);

        // 引导者灵质化（§1 [已确认]美术）：半透明灵质感 + 边缘微光描边 +
        // 周身缓慢上浮的灰白光点（密度极低）+ 暖烛光与冷环境光对撞
        if (entity.npcId === 'npc_guide') {
          sprite.material.opacity = 0.85;
          const halo = new THREE.Sprite(new THREE.SpriteMaterial({
            map: canvasTexture(textureGen.glow('#9fc8d8')),
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthWrite: false,
            opacity: 0.3,
          }));
          halo.scale.set(scale * 1.5, scale * 1.5, 1);
          halo.position.set(cx, sprite.position.y + scale * 0.45, cz);
          halo.renderOrder = 2;
          this.entityGroup.add(halo);
          this.spiritFx = { halo, sprite, baseY: sprite.position.y };
          for (let i = 0; i < 5; i++) {
            const dot = new THREE.Sprite(new THREE.SpriteMaterial({
              map: canvasTexture(textureGen.glow('#e8f0f2')),
              blending: THREE.AdditiveBlending,
              transparent: true,
              depthWrite: false,
              opacity: 0,
            }));
            dot.scale.set(0.09, 0.09, 1);
            dot.renderOrder = 3;
            this.entityGroup.add(dot);
            this.spiritDots.push({
              sprite: dot, baseX: cx, baseZ: cz,
              phase: Math.random(), speed: 0.1 + Math.random() * 0.08,
            });
          }
          // 单一暖色烛光点光源（青砖长廊中的冷调环境光对撞，硬阴影拉长）
          this.addGlowLight(`${entity.id}_candle`, 0xffb45e, 1.15, 8, cx + 1.1, 0.9, cz + 0.7);
        }
        return;
      }
    }

    // 室内装饰柱：真实 3D 立柱（基座 + 收分柱身 + 柱冠，与墙柱同款语言）。
    // 投真实月光 VSM 阴影（影随形）；不再用纸片人 + 圆形 AO 斑（影形不符）。
    if (entity.kind === 'pillar') {
      const totalH = Math.max(0.6, heightPx / ts);
      const tint = new THREE.Color(this.currentTier.floorTint);
      const stone = this.propDetail(new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x77877c).multiply(tint), roughness: 0.72, metalness: 0.12,
      }), 'stone', 3, 1.0);
      const stoneDark = this.propDetail(new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x5d6b62).multiply(tint), roughness: 0.8, metalness: 0.1,
      }), 'stone', 3, 0.9);
      const g = this.buildPillarMesh(totalH, stone, stoneDark);
      g.position.set(cx, 0, cz);
      this.entityGroup.add(g);
      return;
    }

    // 玩家/怪物/NPC/其他 → 纸片人 Sprite（始终面向摄像机）
    const canvas = textureGen.entity(entity, room, def, heightPx, opened);
    // 整体放大：3D 内原尺寸过小；同时保留 普通 < 精英 < Boss 的体型差
    const spriteScale = Math.max(1.05, Math.min(2.6, (heightPx / ts) * 1.6));
    const sprite = this.makePaperSprite(canvas, spriteScale);
    sprite.position.set(cx, this.footedY(sprite), cz); // 脚底贴地，避免悬空
    this.entityGroup.add(sprite);
    this.litSprites.push({ sprite }); // 假受光登记
    // 贴地阴影：Sprite 无法投射真实阴影，用水平面片模拟。
    // 光影 v2 §3：半径 0.3 → 0.42；主角/精英/Boss 叠一层更小更深的 contact AO 强化落地感
    this.addGroundShadow(cx, cz, spriteScale * 0.42);
    if (entity.kind === 'boss' || (entity.kind === 'monster' && entity.isElite)) {
      const aoAlpha = Math.min(0.85, dataManager.config.shadow.staticAlpha * 1.3);
      this.addGroundShadow(cx, cz, spriteScale * 0.42 * 0.6, aoAlpha);
    }

    // Boss：暗红威胁光 + 缓慢脉动；精英：橙色自发光（不额外占点光源预算）
    if (entity.kind === 'boss') {
      this.addGlowLight(entity.id, 0xff2244, 1.2, 9, cx, 1.2, cz);
      this.addGlow('#ff2244', 1.1, cx, sprite.position.y + sprite.scale.y * 0.2, cz, 0.8);
    } else if (entity.kind === 'monster' && entity.isElite) {
      this.addGlow('#ff8800', 0.42, cx, sprite.position.y + sprite.scale.y * 0.2, cz, 2.0);
    } else if (entity.kind === 'potion') {
      // 药水：按档次颜色的轻微呼吸光（自发光，不占点光源预算）
      const potion = dataManager.getPotion(entity.potionTier ?? '');
      this.addGlow(potion?.color ?? '#ff5a7a', 0.3, cx, sprite.position.y + sprite.scale.y * 0.3, cz, 1.8);
    }
  }

  /**
   * 2×2 下行大阶梯：起点房地板挖空 2×2，6 级台阶向北（远离镜头）下行，
   * 总落差约 1 格（每级 0.17）；台阶为实心楔（各自落到井底），配两侧沿壁 + 南缘压条。
   * @param x 阶梯左上格 X（占 2×2：x..x+1）
   * @param y 阶梯左上格 Y
   */
  private buildStaircase(x: number, y: number): void {
    const steps = 6;
    const depth = 2;
    const pitBottom = -1.15;
    const stepMat = new THREE.MeshStandardMaterial({ color: 0x8093a3, roughness: 0.82 });
    for (let i = 0; i < steps; i++) {
      const top = -0.1 - i * 0.17;
      const h = top - pitBottom;
      const step = new THREE.Mesh(roundedBox(2, h, depth / steps, 0.02), stepMat);
      step.position.set(x + 1, top - h / 2, y + 2 - (i + 0.5) * (depth / steps));
      step.castShadow = true;
      step.receiveShadow = true;
      this.entityGroup.add(step);
    }
    // 两侧沿壁（盖住地板截面的细缝，也强化"竖井"感）
    const sideMat = this.propDetail(new THREE.MeshStandardMaterial({ color: 0x4c5a66, roughness: 0.9 }), 'stone', 2, 0.9);
    for (const sx of [x + 0.04, x + 1.96]) {
      const wall = new THREE.Mesh(roundedBox(0.09, 1.32, 2.08, 0.02), sideMat);
      wall.position.set(sx, -0.55, y + 1);
      this.entityGroup.add(wall);
    }
    // 南缘压条（入口处遮住 0.1 厚的地板侧缝）
    const lip = new THREE.Mesh(roundedBox(2, 0.26, 0.1, 0.02), sideMat);
    lip.position.set(x + 1, -0.13, y + 2.02);
    this.entityGroup.add(lip);
  }

  /** 氛围点光源：从灯光池获取（不投影；池耗尽则跳过），颜色/强度/位置原地更新 */
  private addGlowLight(
    id: string, color: number, intensity: number, distance: number,
    x: number, y: number, z: number,
  ): void {
    if (this.glowLights.has(id) || this.glowCursor >= this.glowPool.length) return;
    const light = this.glowPool[this.glowCursor++];
    light.color.setHex(color);
    light.intensity = intensity;
    light.distance = distance;
    light.position.set(x, y, z);
    this.glowLights.set(id, light);
  }

  /** 自发光光晕（additive 叠加；登记后由 render 每帧驱动脉动） */
  private addGlow(
    color: string, radius: number, x: number, y: number, z: number, speed: number,
    opacity = 0.8, centerAlpha = 1,
  ): void {
    const size = radius * 2;
    const mat = new THREE.SpriteMaterial({
      map: canvasTexture(textureGen.glow(color, centerAlpha)),
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      opacity,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(size, size, 1);
    sprite.position.set(x, y, z);
    sprite.renderOrder = 2;
    this.entityGroup.add(sprite);
    this.glowSprites.push({ sprite, base: size, speed, phase: Math.random() * Math.PI * 2 });
  }

  /**
   * 宝箱：木箱身 + 拱形盖 + 金属包边 + 合页 + 锁扣，**三档独立造型**——
   *   normal 普通（橡木 + 黄铜）／grand 大宝箱（1.25× 红木 + 镀金 + 三道箍 + 宝石锁）／
   *   relic 遗物宝箱（1.25× 紫檀 + 秘银 + 星辉宝石，自发光）。
   * 开启时盖子绕后沿向后掀开约 115°，可看到内衬（绒布）。
   */
  private buildChest(opened: boolean, tier: 'normal' | 'grand' | 'relic'): THREE.Group {
    const g = new THREE.Group();
    const s = tier === 'normal' ? 1 : 1.25;
    const bw = 0.66 * s; // 宽（X）
    const bh = 0.32 * s; // 箱身高
    const bd = 0.46 * s; // 深（Z）

    // 分档配色：普通=橡木黄铜 / 大宝箱=红木镀金 / 遗物=紫檀秘银
    const P = tier === 'relic'
      ? { wood: 0x3d2a5e, lid: 0x2b1c45, metal: 0xc9a6ff, lock: 0xe8d4ff, lining: 0x1c1030, gem: 0xd9a6ff }
      : tier === 'grand'
        ? { wood: 0x6d3f1d, lid: 0x4e2a12, metal: 0xf0c552, lock: 0xffe08a, lining: 0x3a1420, gem: 0xffdd66 }
        : { wood: 0x8a5a2b, lid: 0x5f3b1a, metal: 0xd9a92b, lock: 0xffd75e, lining: 0x2f2013, gem: 0 };
    const shade = (c: number, k: number): number => new THREE.Color(c).multiplyScalar(k).getHex();

    const woodMat = this.propDetail(new THREE.MeshStandardMaterial({
      color: opened ? shade(P.wood, 0.78) : P.wood, roughness: 0.8, metalness: 0.06,
    }), 'wood', 2, 1.0);
    const lidMat = this.propDetail(new THREE.MeshStandardMaterial({
      color: opened ? shade(P.lid, 0.85) : P.lid, roughness: 0.74, metalness: 0.1,
    }), 'wood', 2, 1.0);
    const metalMat = this.propDetail(new THREE.MeshStandardMaterial({
      color: opened ? 0x7c7c7c : P.metal, roughness: 0.34, metalness: 0.88,
    }), 'metal', 3, 0.8);

    // ① 底座木台：避免箱子"浮"在地板上
    const base = new THREE.Mesh(roundedBox(bw * 1.08, 0.055 * s, bd * 1.08, 0.018), lidMat);
    base.position.y = 0.0275 * s;
    base.castShadow = true;
    base.receiveShadow = true;
    g.add(base);
    const y0 = 0.055 * s; // 箱身底面

    // ② 箱身
    const body = new THREE.Mesh(roundedBox(bw, bh, bd, 0.03), woodMat);
    body.position.y = y0 + bh / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    // ③ 箱身竖板：前后各 2 道木条（木板拼缝的立体感）
    for (const sz of [-1, 1]) {
      for (const ox of [-bw * 0.31, bw * 0.31]) {
        const batten = new THREE.Mesh(roundedBox(0.045 * s, bh * 0.84, 0.018 * s, 0.006), lidMat);
        batten.position.set(ox, y0 + bh / 2, sz * (bd / 2 + 0.004 * s));
        batten.castShadow = true;
        g.add(batten);
      }
    }

    // ④ 上沿金属口条 + 四角包边
    const rim = new THREE.Mesh(roundedBox(bw * 1.02, 0.03 * s, bd * 1.02, 0.008), metalMat);
    rim.position.y = y0 + bh - 0.012 * s;
    rim.castShadow = true;
    g.add(rim);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const strip = new THREE.Mesh(roundedBox(0.035 * s, bh, 0.035 * s, 0.01), metalMat);
        strip.position.set(sx * (bw / 2 - 0.02 * s), y0 + bh / 2, sz * (bd / 2 - 0.02 * s));
        strip.castShadow = true;
        g.add(strip);
      }
    }

    // ⑤ 拱形盖（半圆柱沿 X 延伸）+ 金属箍 + 合页
    const pivot = new THREE.Group();
    pivot.position.set(0, y0 + bh, -bd / 2); // 铰链在箱身后上沿
    const lidR = bd / 2;
    const lid = new THREE.Mesh(
      new THREE.CylinderGeometry(lidR, lidR, bw, 32, 1, false, 0, Math.PI), // 拱盖加密：弧面不再有折线
      lidMat,
    );
    lid.rotation.z = Math.PI / 2;
    lid.position.z = bd / 2;
    lid.castShadow = true;
    pivot.add(lid);

    // 盖面金属箍：普通 2 道，大宝箱/遗物 3 道（更华丽）
    for (const ox of tier === 'normal' ? [-bw * 0.28, bw * 0.28] : [-bw * 0.34, 0, bw * 0.34]) {
      const band = new THREE.Mesh(torus(lidR * 1.02, 0.018 * s, Math.PI), metalMat);
      band.rotation.y = Math.PI / 2; // 环平面由 XY 转到 ZY
      band.position.set(ox, 0, bd / 2);
      pivot.add(band);
    }
    // 合页：两片铰链板 + 贯穿铰链轴
    for (const ox of [-bw * 0.3, bw * 0.3]) {
      const plate = new THREE.Mesh(roundedBox(0.07 * s, 0.05 * s, 0.03 * s, 0.008), metalMat);
      plate.position.set(ox, -0.008 * s, 0.014 * s);
      plate.castShadow = true;
      pivot.add(plate);
    }
    const pin = new THREE.Mesh(cyl(0.014 * s, 0.014 * s, bw * 0.74, 12), metalMat);
    pin.rotation.z = Math.PI / 2;
    pivot.add(pin);
    // 宝箱宝石（盖子顶面）：大宝箱镀金宝石 / 遗物星辉宝石（自发光）
    if (P.gem) {
      const gem = new THREE.Mesh(sphere(0.052 * s), new THREE.MeshStandardMaterial({
        color: P.gem, emissive: new THREE.Color(P.gem), emissiveIntensity: 0.8, roughness: 0.2, metalness: 0.5,
      }));
      gem.position.set(0, lidR * 0.96, bd / 2);
      gem.castShadow = true;
      pivot.add(gem);
    }
    if (opened) pivot.rotation.x = -2.0; // 开启：向后掀开约 115°
    g.add(pivot);

    // ⑥ 开启态：可见内衬（绒布）+ 内部余光
    if (opened) {
      const lining = new THREE.Mesh(roundedBox(bw * 0.84, 0.07 * s, bd * 0.66, 0.02),
        new THREE.MeshStandardMaterial({
          color: P.lining, roughness: 0.96, metalness: 0,
          emissive: new THREE.Color(P.lining), emissiveIntensity: 0.3,
        }));
      lining.position.y = y0 + bh * 0.62;
      g.add(lining);
    }

    // ⑦ 正面锁扣：锁板 + 吊环 + 钥匙孔
    const lockMat = new THREE.MeshStandardMaterial({
      color: opened ? 0x5a5a5a : P.lock, roughness: 0.3, metalness: 0.9,
    });
    const lock = new THREE.Mesh(roundedBox(0.12 * s, 0.11 * s, 0.028 * s, 0.012), lockMat);
    lock.position.set(0, y0 + bh * 0.8, bd / 2 + 0.014 * s);
    lock.castShadow = true;
    g.add(lock);
    const ring = new THREE.Mesh(torus(0.036 * s, 0.011 * s, Math.PI * 1.55), lockMat);
    ring.rotation.y = Math.PI / 2; // 吊环面朝前
    ring.position.set(0, y0 + bh * 0.64, bd / 2 + 0.03 * s);
    ring.castShadow = true;
    g.add(ring);
    const keyhole = new THREE.Mesh(roundedBox(0.016 * s, 0.032 * s, 0.012, 0.004),
      new THREE.MeshStandardMaterial({ color: 0x140d06, roughness: 0.9, metalness: 0.2 }));
    keyhole.position.set(0, y0 + bh * 0.81, bd / 2 + 0.03 * s);
    g.add(keyhole);

    return g;
  }

  /** 纸片人：SpriteMaterial（transparent + depthTest，不写深度避免半透明排序问题） */
  private makePaperSprite(canvas: HTMLCanvasElement, worldHeight: number): THREE.Sprite {
    const aspect = canvas.width / canvas.height;
    const mat = new THREE.SpriteMaterial({
      map: canvasTexture(canvas),
      transparent: true,
      depthTest: true,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(worldHeight * aspect, worldHeight, 1);
    sprite.renderOrder = 1; // 半透明纸片人在不透明物体之后渲染
    // 贴图底部预留了脚下阴影的余量（tileSize/2 像素），记录比例供贴地定位
    sprite.userData.footRatio = (projection.tileSize / 2) / canvas.height;
    return sprite;
  }

  /** 纸片人贴地时中心应处的高度：使贴图内的"脚底"正好落在 y = 0 */
  private footedY(sprite: THREE.Sprite): number {
    const footRatio = (sprite.userData.footRatio as number | undefined) ?? 0;
    return sprite.scale.y * (0.5 - footRatio);
  }

  /** 切换主角动作（外部由状态机/输入驱动；当前默认 idle 循环） */
  setHeroAction(a: HeroAction): void { this.heroAnimator?.setAction(a); }
  /** 获取当前主角动作；图集缺失时返回 null */
  getHeroAction(): HeroAction | null { return this.heroAnimator?.getAction() ?? null; }

  /**
   * 贴地阴影：Sprite 不写深度、无法投射真实阴影，用水平面片 + 径向渐变模拟。
   * 水平放置后会随透视压缩成椭圆，比把阴影画在竖直贴图上自然得多。
   * 默认不透明度取配置 shadow.staticAlpha（光影 v2 §3：0.2 → 0.45，此前配置未被消费）。
   */
  private addGroundShadow(
    x: number, z: number, radius: number, opacity?: number, group: THREE.Group = this.entityGroup,
  ): THREE.Mesh {
    const alpha = opacity ?? dataManager.config.shadow.staticAlpha;
    const mat = new THREE.MeshBasicMaterial({
      map: canvasTexture(textureGen.glow('#000000')),
      transparent: true,
      opacity: alpha,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.015, z);
    mesh.renderOrder = 1;
    group.add(mesh);
    return mesh;
  }

  /** 铁栅栏：5 根竖条 + 2 根横梁（深灰金属） */
  private buildGateMesh(vertical: boolean): THREE.Group {
    const g = new THREE.Group();
    const mat = this.propDetail(new THREE.MeshStandardMaterial({
      color: 0x59606b, roughness: 0.45, metalness: 0.85,
    }), 'metal', 2, 0.8);
    for (let i = 0; i < 5; i++) {
      const bar = new THREE.Mesh(roundedBox(0.1, 1.2, 0.1, 0.022), mat);
      bar.position.set((i - 2) * 0.21, 0.6, 0);
      bar.castShadow = true;
      g.add(bar);
    }
    for (const by of [0.28, 0.95]) {
      const beam = new THREE.Mesh(roundedBox(1.06, 0.11, 0.13, 0.025), mat);
      beam.position.set(0, by, 0);
      beam.castShadow = true;
      g.add(beam);
    }
    if (vertical) g.rotation.y = Math.PI / 2; // 贴合东西向墙面
    return g;
  }

  /**
   * Boss 铁门：架在 Boss 房通往终点房的门口。
   * Boss 存活 → 关闭并阻挡通行；击败后 opened=true，门沿墙面滑入墙体（自动打开）。
   */
  private buildGates(prev?: GateAnim[]): void {
    const world = WorldManager.getInstance();
    for (const g of world.getGates()) {
      const vertical = g.direction === 'east' || g.direction === 'west'; // 墙面沿 Z 延伸
      const group = this.buildGateMesh(vertical);
      const baseX = g.x + 0.5;
      const baseZ = g.y + 0.5;
      const prevGate = prev?.find(o => o.baseX === baseX && o.baseZ === baseZ);
      group.position.set(baseX, -0.13, baseZ); // 铁门栅脚沉入外部地面
      this.entityGroup.add(group);
      this.gates.push({
        group,
        baseX,
        baseZ,
        offX: vertical ? 0 : 1, // 南北墙 → 沿 X 滑开
        offZ: vertical ? 1 : 0, // 东西墙 → 沿 Z 滑开
        open: prevGate ? prevGate.open : (g.opened ? 1 : 0),
        target: g.opened ? 1 : 0,
      });
    }
  }

  /** 玩家纸片人位置同步（视觉位置向逻辑格中心平滑插值 = 平滑移动） */
  private heroVis = { x: 0, z: 0, init: false };
  private syncPlayer(dt = 16.67): void {
    if (!this.playerSprite) return;
    const p = Player.getInstance().pos;
    const tx = p.x + 0.5;
    const tz = p.y + 0.5;
    if (!this.heroVis.init) {
      this.heroVis.x = tx;
      this.heroVis.z = tz;
      this.heroVis.init = true;
    }
    // 指数插值：约 120ms 收敛到目标格，格间移动肉眼平滑
    const k = 1 - Math.exp(-dt / 45);
    const dist = Math.hypot(tx - this.heroVis.x, tz - this.heroVis.z);
    this.heroVis.x += (tx - this.heroVis.x) * k;
    this.heroVis.z += (tz - this.heroVis.z) * k;
    this.playerSprite.position.set(this.heroVis.x, this.footedY(this.playerSprite), this.heroVis.z);
    if (this.playerShadow) this.playerShadow.position.set(this.heroVis.x, 0.015, this.heroVis.z);
    if (this.playerContact) this.playerContact.position.set(this.heroVis.x, 0.02, this.heroVis.z);
    // 朝向：以「目标格 - 视觉位置」的位移向量判定四向（侧面行原生朝右）
    const dx = tx - this.heroVis.x;
    const dz = tz - this.heroVis.z;
    let newFacing: HeroFacing | null = null;
    if (Math.abs(dx) > 0.005 || Math.abs(dz) > 0.005) {
      if (Math.abs(dx) >= Math.abs(dz)) newFacing = dx > 0 ? 'right' : 'left';
      else newFacing = dz > 0 ? 'down' : 'up';
    }
    if (newFacing) {
      this.heroFacing = newFacing;
      this.heroAnimator?.setFacing(newFacing);
    }
    // 侧面行镜像：原生朝右 → 向左才镜像；上下行保持正向
    const mirrored = this.heroFacing === 'left';
    this.playerSprite.scale.x = mirrored ? -this.heroBaseW : this.heroBaseW;
    // 主角动作自动切换：视觉位移中 → 行走帧（按朝向取行），到位静止 → 呼吸待机
    if (this.heroAnimator) {
      const moving = dist > 0.02;
      const cur = this.heroAnimator.getAction();
      if ((cur === 'idle' || cur === 'walk' || cur === 'run') && moving !== (cur === 'walk' || cur === 'run')) {
        this.setHeroAction(moving ? 'walk' : 'idle');
      }
    }
  }

  /**
   * 纸片人假受光（光影优化）：SpriteMaterial 不参与光照，角色此前在黑暗中"自发光"。
   * 按「环境基准 + 玩家火炬/墙壁火把的距离衰减」逐帧计算明暗系数（0.4~1.0），
   * 火光本身的闪烁会同步反映在角色身上。
   */
  private updateSpriteLighting(): void {
    if (!this.playerTorch) return;
    const base = 0.56; // 月光冷环境 + 半球环境合计的基准亮度
    const pt = this.playerTorch;
    const px = pt.position.x;
    const pz = pt.position.z;
    for (const { sprite } of this.litSprites) {
      const sx = sprite.position.x;
      const sz = sprite.position.z;
      let light = base;
      const dp = Math.hypot(sx - px, sz - pz);
      light += pt.intensity * 0.85 * Math.pow(Math.max(0, 1 - dp / 11), 1.5);
      for (const l of this.torchLights.values()) {
        if (l.intensity <= 0.01) continue;
        const d = Math.hypot(sx - l.position.x, sz - l.position.z);
        light += l.intensity * 0.85 * Math.pow(Math.max(0, 1 - d / 10), 1.5);
      }
      const f = Math.min(1, Math.max(0.4, light));
      (sprite.material as THREE.SpriteMaterial).color.setScalar(f);
    }
  }

  /** 每帧：相机跟随 + 光源跟随 + 悬浮高亮 + 渲染 */
  /** 上一帧使用的容器尺寸（检测"进入游戏时容器才获得实际尺寸"的变化） */
  private lastContainerW = 0;
  private lastContainerH = 0;
  /** 容器尺寸观测器（容器可见性/布局变化时自动 resize） */
  private containerObserver: ResizeObserver | null = null;

  render(timeMs: number): void {
    if (!this.ready || !this.renderer || !this.scene || !this.camera) return;
    // 容器尺寸变化即同步（进入游戏时 game-root 才显示，首帧前容器尺寸为 0/窗口兜底值 → 歪斜根因）。
    // 任一维 >0 即触发（修复：容器高度曾恒为 0 导致 ch>0 永不成立、监测失效）
    const cw = this.container?.clientWidth ?? 0;
    const ch = this.container?.clientHeight ?? 0;
    if ((cw > 0 || ch > 0) && (cw !== this.lastContainerW || ch !== this.lastContainerH)) {
      this.lastContainerW = cw;
      this.lastContainerH = ch;
      this.resize();
    }
    const floor = WorldManager.getInstance().currentFloor;
    if (!floor) return;
    if (floor.floorId !== this.builtFloorId) this.rebuildFloor();
    // 实体层脏标记：击杀 / 开箱 / 拾取在同一帧内的多次触发合并为一次重建
    if (this.entitiesDirty) {
      this.entitiesDirty = false;
      this.rebuildEntities();
    }

    // 相机注视点（世界坐标）：
    // 不采用 CameraController 的 cam.x/cam.y —— 那套是 2D 投影像素，camY 含物体高度 wallH 偏移，
    // 而 3D 中 Z 只对应 row。这里按「房间中心 + 安全区」直接算世界坐标，并自行做指数平滑。
    const world = WorldManager.getInstance();
    const p = Player.getInstance().pos;
    const room = world.getRoomAt(p.x, p.y);
    let targetX: number;
    let targetZ: number;
    if (room) {
      // 房间内：注视房间中心（玩家贴近边缘时只做小幅补偿，避免自己走出画面）
      const cx = room.x + room.width / 2;
      const cz = room.y + room.height / 2;
      const dx = p.x + 0.5 - cx;
      const dz = p.y + 0.5 - cz;
      const outX = Math.max(0, Math.abs(dx) - (room.width / 2 - ROOM_FOLLOW_MARGIN));
      const outZ = Math.max(0, Math.abs(dz) - (room.height / 2 - ROOM_FOLLOW_MARGIN));
      targetX = cx + Math.sign(dx) * outX;
      targetZ = cz + Math.sign(dz) * outZ;
    } else {
      // 走廊：注视所在走廊的中心（不是跟随玩家）；走进下个房间时再切到那个房间中心
      const c = this.corridorCenterAt(p.x, p.y);
      targetX = c ? c.x : p.x + 0.5;
      targetZ = c ? c.z : p.y + 0.5;
    }
    // 平滑（帧率无关的指数插值，与 CameraController 同款）
    const dt = this.lastTimeMs ? Math.min(50, timeMs - this.lastTimeMs) : 16.67;
    const t = 1 - Math.pow(1 - 0.12, dt / 16.67);
    if (!this.focusInit) {
      this.focusX = targetX;
      this.focusZ = targetZ;
      this.focusInit = true;
    } else {
      this.focusX += (targetX - this.focusX) * t;
      this.focusZ += (targetZ - this.focusZ) * t;
    }
    this.lastTimeMs = timeMs;
    this.frameMsAvg += (dt - this.frameMsAvg) * 0.1; // 平滑帧时（调试面板展示用）

    // 遮挡虚化：挡住玩家 / 可交互物的墙与其左右两块渐隐（碰撞仍是实体）
    this.updateWallFade(dt);

    // 正对房间南面：相机位于房间上方，沿 +Z 略后退，斜向下观察（机位由 camera3D 配置驱动）
    const cam3d = dataManager.config.camera3D;
    this.camera.position.set(this.focusX, cam3d.height, this.focusZ + cam3d.distance);
    this.camera.lookAt(this.focusX, 0, this.focusZ);

    // 相机演出（开场缓升 / 标题卡缓推摇移 / 登顶广角 / 反转俯冲）覆盖机位
    this.applyCamFx(dt, cam3d);

    // 星空跟随相机（无穷远天空，无视差）+ 推进闪烁时间
    if (this.starField && this.starMat) {
      this.starField.position.copy(this.camera.position);
      this.starMat.uniforms.uTime.value = timeMs;
    }

    // 月光与月亮跟随视口：光从月亮方向洒落，阴影相机始终覆盖可见区域
    if (this.dirLight) {
      const mo = ThreeRenderer.MOON_OFFSET;
      this.dirLight.position.set(this.focusX + mo.x, mo.y, this.focusZ + mo.z);
      this.dirLight.target.position.set(this.focusX, 0, this.focusZ);
      this.dirLight.target.updateMatrixWorld();
    }
    if (this.moonGroup) {
      const mo = ThreeRenderer.MOON_OFFSET;
      this.moonGroup.position.set(this.focusX + mo.x, mo.y, this.focusZ + mo.z);
    }

    // 玩家火炬跟随（p 已在注视点计算处定义）：恒定强度与位置（去除律动）
    this.syncPlayer(dt);
    if (this.heroAnimator) this.heroAnimator.update(dt);
    if (this.playerTorch) {
      this.playerTorch.intensity = 1.7;
      this.playerTorch.position.set(p.x + 0.5, 1.5, p.y + 0.5);
    }
    // 纸片人假受光（在火炬/火把强度更新后计算）
    this.updateSpriteLighting();

    // 悬浮格高亮
    if (this.hoverMesh) {
      const show = !!this.hoverTile && gameState.started;
      this.hoverMesh.visible = show;
      if (show && this.hoverTile) {
        this.hoverMesh.position.set(this.hoverTile.x + 0.5, 0.06, this.hoverTile.y + 0.5);
      }
    }

    // 粒子/飘字（世界坐标，由相机自动投影，无需屏幕空间换算）
    ParticleSystem.getInstance().syncTo(this.particleGroup);
    ThreeParticleSystem.getInstance().syncTo(this.particleGroup);

    const tSec = timeMs / 1000;
    // 自发光光晕（精英/Boss/未开宝箱/楼梯/喷泉/药水）：恒定亮度与尺寸（去除脉动），
    // 保持创建时 addGlow 设置的 opacity 与 scale，无需逐帧驱动

    // 丁达尔飘尘：沿火把光锥缓慢上升并循环（中段最亮，两端淡出）
    for (const d of this.dustItems) {
      const t = (tSec * d.speed + d.phase) % 1;
      d.sprite.position.set(
        d.baseX + Math.sin(t * 6 + d.phase * 9) * 0.06,
        d.baseY + t * 0.85,
        d.baseZ,
      );
      (d.sprite.material as THREE.SpriteMaterial).opacity = Math.sin(t * Math.PI) * 0.3;
    }

    // 窗景云海 UV 滚动（钟楼：巨型齿轮轮廓在云海缓转的横移感）
    for (const sc of this.windowScrollers) sc.tex.offset.x = (sc.tex.offset.x + sc.speed * dt / 1000) % 1;

    // 区段氛围粒子（孢子/火星、暖尘、星屑+流星、冷蓝光斑）
    AmbientParticles.getInstance().syncTo(this.particleGroup);
    AmbientParticles.getInstance().update(dt / 1000, this.focusX, this.focusZ, tSec);

    // 引导者灵体：轻微悬浮 + 恒定微光（光晕呼吸已去除）+ 灰白光点缓慢上浮
    if (this.spiritFx) {
      const bob = Math.sin(tSec * 1.3) * 0.05;
      this.spiritFx.sprite.position.y = this.spiritFx.baseY + bob;
      this.spiritFx.halo.position.y = this.spiritFx.baseY + bob + 0.95;
      (this.spiritFx.halo.material as THREE.SpriteMaterial).opacity = 0.28;
    }
    for (const dot of this.spiritDots) {
      const t = (tSec * dot.speed + dot.phase) % 1;
      dot.sprite.position.set(
        dot.baseX + Math.sin(dot.phase * 8.5 + t * 4) * 0.55,
        0.25 + t * 2.1,
        dot.baseZ + Math.cos(dot.phase * 6.2 + t * 3.4) * 0.4,
      );
      (dot.sprite.material as THREE.SpriteMaterial).opacity = Math.sin(t * Math.PI) * 0.5;
    }

    // 塔顶虚影：淡入 → 光影形变「笑」（明暗抖动+纵向颤动）→ 淡出
    for (const ph of [...this.phantoms]) this.updatePhantom(ph, dt, tSec);

    // 后处理色温/暗角逐帧过渡（区段基线 ⇄ 演出骤冷）
    postProcessing.tick(dt);

    // Boss 铁门开合：击败 Boss 后 target 变 1，门沿墙面滑入墙体
    for (const gt of this.gates) {
      if (Math.abs(gt.open - gt.target) < 0.002) continue;
      gt.open += (gt.target - gt.open) * Math.min(1, dt / 260);
      gt.group.position.x = gt.baseX + gt.offX * gt.open * 1.15;
      gt.group.position.z = gt.baseZ + gt.offZ * gt.open * 1.15;
    }

    // 屏幕震动：叠加在本帧相机位置之上
    this.applyShake(dt);

    // 后期处理可用时走 composer（辉光/暗角/调色），否则回退直接渲染
    if (postProcessing.ready) postProcessing.render();
    else this.renderer.render(this.scene, this.camera);
  }

  // ============ 相机演出（§0/§1/§4） ============

  /** 新游戏第1层：镜头由地面缓升至半身（引导者登场） */
  playIntroRise(): void {
    this.camFx = { kind: 'intro', t: 0, dur: 2400, hold: false };
  }

  /** 标题卡期间：相机缓推近并轻微摇移（数秒后归位） */
  playTierSway(): void {
    this.camFx = { kind: 'sway', t: 0, dur: 2800, hold: false };
  }

  /** 登顶广角拉远：空旷白金平台上的孤独感；hold 到 dive/clear */
  playSummitWide(): void {
    this.camFx = { kind: 'wide', t: 0, dur: 2200, hold: true };
  }

  /** 反转俯冲：镜头猛然下摇穿透塔基（快速缩放 + 下坠） */
  playSummitDive(): void {
    this.camFx = { kind: 'dive', t: 0, dur: 1700, hold: false };
    this.shake(0.3, 1700);
  }

  /** 结束一切相机演出（恢复默认机位与 fov） */
  clearCamFx(): void {
    this.camFx = null;
    if (this.camera) {
      this.camera.fov = this.baseFov;
      this.camera.updateProjectionMatrix();
    }
  }

  /** 每帧应用相机演出偏移（在默认机位/lookAt 之后调用） */
  private applyCamFx(dt: number, cam3d: { fov: number; distance: number; height: number }): void {
    const fx = this.camFx;
    if (!fx || !this.camera) return;
    fx.t += dt;
    const p = Math.min(1, fx.t / fx.dur);
    const easeOut = 1 - Math.pow(1 - p, 3);
    const easeIn = p * p;
    if (fx.kind === 'intro') {
      // 地面(1.5m) → 标准机位；末端轻微摇移收敛
      this.camera.position.y = 1.5 + (cam3d.height - 1.5) * easeOut;
      this.camera.position.z = this.focusZ + cam3d.distance * (0.42 + 0.58 * easeOut);
      this.camera.position.x += Math.sin(p * Math.PI * 2) * 0.3 * (1 - p);
      this.camera.lookAt(this.focusX, 0, this.focusZ);
    } else if (fx.kind === 'sway') {
      // 缓推近（距离×0.88）+ 轻微左右摇移，中段最强、两端归零
      const s = Math.sin(p * Math.PI);
      const dist = cam3d.distance * (1 - 0.12 * s);
      this.camera.position.z = this.focusZ + dist;
      this.camera.position.x += Math.sin(p * Math.PI * 2) * 0.45 * s;
      this.camera.lookAt(this.focusX, 0, this.focusZ);
    } else if (fx.kind === 'wide') {
      // 广角拉远并轻微升高（孤独感），hold 保持
      const dist = cam3d.distance * (1 + 0.62 * easeOut);
      const h = cam3d.height * (1 + 0.32 * easeOut);
      this.camera.position.z = this.focusZ + dist;
      this.camera.position.y = h;
      this.camera.lookAt(this.focusX, 0, this.focusZ);
    } else if (fx.kind === 'dive') {
      // 快速缩放（fov 拉大）+ 下坠穿透塔基 + 视点压向地底
      this.camera.fov = this.baseFov + 24 * easeIn;
      this.camera.updateProjectionMatrix();
      this.camera.position.y = cam3d.height * (1 - easeIn) - 22 * easeIn;
      this.camera.position.z = this.focusZ + cam3d.distance * (1 - 0.45 * easeIn);
      this.camera.lookAt(this.focusX, -14 * easeIn, this.focusZ);
    }
    if (p >= 1 && !fx.hold) this.clearCamFx();
  }

  // ============ 塔顶虚影（§4 反转：引导者虚影浮现并「笑」） ============

  /**
   * 在玩家身旁浮现引导者虚影（半透明 + 青灰光晕；「笑」用光影形变表现：
   * 明暗抖动 + 纵向颤动，非写实表情）。淡入完成后保持，等 fadeOutPhantoms()。
   */
  spawnGuidePhantom(): void {
    if (!this.scene) return;
    const p = Player.getInstance().pos;
    const px = p.x + 0.5 + 1.6;
    const pz = p.y + 0.5 - 0.4;
    const group = new THREE.Group();
    const npcDef = dataManager.getNpc('npc_guide');
    const portrait = npcDef?.portrait ? getNpcPortrait(npcDef.portrait) : null;
    let sprite: THREE.Sprite | null = null;
    if (portrait) {
      sprite = this.makePaperSprite(portrait, 2.6);
      sprite.material.opacity = 0;
      group.add(sprite);
    }
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: canvasTexture(textureGen.glow('#9fc8d8')),
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      opacity: 0,
    }));
    halo.scale.set(4.2, 4.2, 1);
    halo.position.y = 1.2;
    group.add(halo);
    group.position.set(px, 0.15, pz);
    this.scene.add(group);
    this.phantoms.push({ group, sprite, halo, t: 0, state: 'in', flickTimer: 0 });
  }

  /** 虚影开始淡出（演出收尾） */
  fadeOutPhantoms(): void {
    for (const ph of this.phantoms) ph.state = 'out';
  }

  private updatePhantom(
    ph: { group: THREE.Group; sprite: THREE.Sprite | null; halo: THREE.Sprite; t: number; state: 'in' | 'hold' | 'out'; flickTimer: number },
    dt: number, tSec: number,
  ): void {
    ph.t += dt;
    const mat = ph.sprite?.material as THREE.SpriteMaterial | undefined;
    const haloMat = ph.halo.material as THREE.SpriteMaterial;
    if (ph.state === 'in') {
      const k = Math.min(1, ph.t / 1300);
      if (mat) mat.opacity = 0.55 * k;
      haloMat.opacity = 0.4 * k;
      if (k >= 1) ph.state = 'hold';
    } else if (ph.state === 'hold') {
      // 「笑」：光影形变——明暗抖动 + 纵向颤动 + 光晕胀缩
      ph.flickTimer -= dt;
      if (ph.flickTimer <= 0) ph.flickTimer = 110 + Math.random() * 90;
      const jitter = ph.flickTimer < 60 ? 1 : 0.62;
      if (mat) mat.opacity = (0.42 + Math.random() * 0.22) * jitter + 0.12;
      haloMat.opacity = 0.3 + 0.18 * Math.sin(tSec * 7.3);
      const sy = 1 + Math.sin(tSec * 18) * 0.035;
      if (ph.sprite) ph.sprite.scale.y = 2.6 * sy;
      ph.halo.scale.setScalar(4.2 * (1 + Math.sin(tSec * 5.1) * 0.08));
    } else {
      const k = Math.max(0, 1 - ph.t / 900);
      if (mat) mat.opacity = 0.55 * k;
      haloMat.opacity = 0.4 * k;
      if (k <= 0) {
        this.scene?.remove(ph.group);
        ph.group.traverse(obj => {
          const s = obj as THREE.Sprite;
          s.material?.dispose();
        });
        this.phantoms.splice(this.phantoms.indexOf(ph), 1);
      }
    }
  }

  /**
   * 触发屏幕震动：更强的震动可打断较弱的，避免连续小震打断大震。
   * @param intensity 振幅（世界单位，建议 0.2~0.5）
   * @param durationMs 持续时长
   */
  shake(intensity: number, durationMs = 280): void {
    if (this.shakeTime <= 0 || intensity >= this.shakeIntensity) {
      this.shakeIntensity = intensity;
      this.shakeTotal = durationMs;
      this.shakeTime = durationMs;
    }
  }

  /** 每帧把震动偏移叠加到相机（须在 lookAt 之后调用，否则朝向会抵消位移） */
  private applyShake(deltaMs: number): void {
    if (this.shakeTime <= 0 || !this.camera) return;
    this.shakeTime = Math.max(0, this.shakeTime - deltaMs);
    const k = this.shakeTotal > 0 ? this.shakeTime / this.shakeTotal : 0;
    const amp = this.shakeIntensity * k;
    if (amp > 0.0001) {
      this.camera.position.x += (Math.random() - 0.5) * 2 * amp;
      this.camera.position.y += (Math.random() - 0.5) * 2 * amp;
      this.camera.position.z += (Math.random() - 0.5) * 2 * amp;
    }
    if (this.shakeTime <= 0) this.shakeIntensity = 0;
  }

  /** 玩家所在走廊的中心（世界坐标）；不在任何走廊上则返回 null */
  private corridorCenterAt(x: number, y: number): { x: number; z: number } | null {
    const floor = WorldManager.getInstance().currentFloor;
    if (!floor) return null;
    for (const c of floor.corridors) {
      if (!c.tiles.some(t => t.x === x && t.y === y)) continue;
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const t of c.tiles) {
        if (t.x < minX) minX = t.x;
        if (t.x > maxX) maxX = t.x;
        if (t.y < minY) minY = t.y;
        if (t.y > maxY) maxY = t.y;
      }
      return { x: (minX + maxX + 1) / 2, z: (minY + maxY + 1) / 2 };
    }
    return null;
  }

  /** 屏幕坐标 → 世界格（Raycaster 与 y=0 地面求交；透视相机下不能用线性映射） */
  screenToTile(clientX: number, clientY: number): { x: number; y: number } | null {
    if (!this.ready || !this.renderer || !this.camera) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    this.raycaster.setFromCamera(ndc, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hit = new THREE.Vector3();
    if (!this.raycaster.ray.intersectPlane(plane, hit)) return null;
    return { x: Math.floor(hit.x), y: Math.floor(hit.z) };
  }

  private resize(): void {
    if (!this.ready || !this.renderer || !this.camera || !this.container) return;
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    if (w <= 0 || h <= 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    postProcessing.setSize(w, h);
  }

  /** 清空容器并释放几何体/材质（贴图由 ThreeTextures 缓存共享，不在此销毁） */
  /**
   * 静态绘制合并（性能优化）：
   * 装饰 / 门套 / 窗框 / 柱子这类**静态**件按「材质」合并成少量 Mesh。
   *
   * 此前一层有数百个 Mesh（装饰平均 5.9 件/房 × 每件 2~13 个 Mesh + 门套 + 窗框 + 柱件），
   * 每个 Mesh 在主渲染 **和** 月光阴影 pass 里各要一次 draw call —— 集显上这是帧时大头。
   * 合并后收敛到十几件（按材质），两侧开销同时下降一个数量级。
   *
   * 只合并静态件：`InstancedMesh`（墙 / 柱 / 栏杆）与 `Sprite` 原样保留。
   * 合并前先 `updateMatrixWorld`，几何做**世界变换后**合并，故画面位置不变。
   */
  private mergeStaticDraws(): void {
    const sources = [this.decorGroup, this.wallGroup];
    for (const g of sources) g.updateMatrixWorld(true);
    // 先快照原始静态子对象：合并结果稍后也挂进 decorGroup，
    // 收尾时必须「只移除快照里的原始对象」，否则会把刚合并好的结果一起删掉。
    const originals = sources.map(g => ({ group: g, kids: [...g.children] }));

    // 分桶键 = 材质 + 属性签名：只有「材质与属性集都一致」的几何才能合并，
    // 否则 mergeGeometries 会失败并打告警（这里提前分桶，直接规避）
    const meshBuckets = new Map<string, {
      mat: THREE.Material; geos: THREE.BufferGeometry[]; cast: boolean; recv: boolean;
    }>();
    const lineBuckets = new Map<THREE.Material, number[]>();
    const tmp = new THREE.Vector3();

    const visit = (o: THREE.Object3D): void => {
      for (const child of o.children) {
        const line = child as THREE.LineSegments;
        if (line.isLineSegments) {
          const pos = line.geometry.getAttribute('position');
          if (pos) {
            const arr = lineBuckets.get(line.material as THREE.Material) ?? [];
            for (let i = 0; i < pos.count; i++) {
              tmp.fromBufferAttribute(pos as THREE.BufferAttribute, i).applyMatrix4(line.matrixWorld);
              arr.push(tmp.x, tmp.y, tmp.z);
            }
            lineBuckets.set(line.material as THREE.Material, arr);
          }
          continue;
        }
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && !(mesh as unknown as THREE.InstancedMesh).isInstancedMesh) {
          const mat = mesh.material as THREE.Material;
          const sig = Object.keys(mesh.geometry.attributes).sort().join(',');
          const key = `${mat.uuid}|${sig}`;
          let b = meshBuckets.get(key);
          if (!b) {
            b = { mat, geos: [], cast: false, recv: false };
            meshBuckets.set(key, b);
          }
          const clone = mesh.geometry.clone();
          clone.applyMatrix4(mesh.matrixWorld);
          b.geos.push(clone.index ? clone.toNonIndexed() : clone);
          b.cast = b.cast || mesh.castShadow;
          b.recv = b.recv || mesh.receiveShadow;
          continue;
        }
        if (child.children.length > 0) visit(child);
      }
    };
    for (const g of sources) visit(g);

    // 先只产出结果、不动现场：任一步失败都直接放弃合并（保留原有对象，绝不半合并）
    const results: THREE.Object3D[] = [];
    try {
      for (const b of meshBuckets.values()) {
        const merged = mergeGeometries(b.geos, false);
        if (merged) {
          const mesh = new THREE.Mesh(merged, b.mat);
          mesh.castShadow = b.cast;
          mesh.receiveShadow = b.recv;
          results.push(mesh);
        } else {
          // 兼容性异常：该桶退回逐个 Mesh（不丢内容）
          for (const geo of b.geos) {
            const mesh = new THREE.Mesh(geo, b.mat);
            mesh.castShadow = b.cast;
            mesh.receiveShadow = b.recv;
            results.push(mesh);
          }
        }
      }
      for (const [mat, arr] of lineBuckets) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(arr), 3));
        results.push(new THREE.LineSegments(geo, mat));
      }
    } catch (err) {
      console.warn('[Three] 静态合并失败，退回未合并渲染', err);
      return;
    }

    for (const obj of results) this.decorGroup.add(obj);
    // 合并完成：移除并入前的原始对象（InstancedMesh / Sprite 保留）
    for (const { group, kids } of originals) {
      for (const child of kids) {
        const inst = child as THREE.InstancedMesh;
        if (inst.isInstancedMesh || (child as THREE.Sprite).isSprite) continue;
        group.remove(child);
        this.disposeSubtreeGeometries(child);
      }
    }
  }

  /** 释放被合并掉的子树中「非共享」的几何（材质已被合并结果复用，不释放） */
  private disposeSubtreeGeometries(node: THREE.Object3D): void {
    const geo = (node as THREE.Mesh).geometry;
    if (geo && !geo.userData?.shared) geo.dispose();
    for (const child of node.children) this.disposeSubtreeGeometries(child);
  }

  /** 渲染统计（调试面板 `~` 展示）：帧时 / draw call / 三角面 / program / 几何 / 纹理 */
  stats(): {
    frameMs: number; calls: number; triangles: number;
    programs: number; geometries: number; textures: number;
  } {
    const info = this.renderer?.info;
    return {
      frameMs: this.frameMsAvg,
      calls: info?.render.calls ?? 0,
      triangles: info?.render.triangles ?? 0,
      programs: info?.programs?.length ?? 0,
      geometries: info?.memory.geometries ?? 0,
      textures: info?.memory.textures ?? 0,
    };
  }

  private clearGroup(group: THREE.Group): void {
    for (let i = group.children.length - 1; i >= 0; i--) {
      const child = group.children[i];
      group.remove(child);
      // 组合体（如宝箱：箱身 + 盖子 + 包边）需递归释放，否则换层会累积泄漏
      const asGroup = child as THREE.Group;
      if (asGroup.children && asGroup.children.length > 0) this.clearGroup(asGroup);
      const obj = child as THREE.Mesh | THREE.InstancedMesh | THREE.Sprite;
      // ⚠️ 只释放「本对象独占」的资源：几何/材质可能来自共享缓存
      // （ThreeGeometry 的圆角盒/圆柱、ThreeTextures 的贴图），
      // 误 dispose 会让下一层/下一次重建重新上传 GPU buffer，是换层与开箱卡顿的来源之一。
      if (obj.geometry && !obj.geometry.userData?.shared) obj.geometry.dispose();
      const mat = (obj as THREE.Mesh).material;
      if (Array.isArray(mat)) mat.forEach(m => { if (!m.userData?.shared) m.dispose(); });
      else if (mat && !mat.userData?.shared) mat.dispose();
    }
  }
}
