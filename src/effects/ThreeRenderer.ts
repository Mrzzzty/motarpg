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
import { canvasTexture, brickTexture } from './ThreeTextures';
import { ParticleSystem } from './ParticleSystem';
import { ThreeParticleSystem } from './ThreeParticleSystem';
import { postProcessing } from './PostProcessing';
import type { MapEntity, MonsterDef, RoomData } from '../types';

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
  witch: 0xc78cff,    // 神秘紫
  boss: 0xff5a4a,     // 暗红
  end: 0xbcd8ff,      // 蓝白
  rest: 0xffe9c4,     // 暖白
  corridor: 0xff8844, // 走廊默认暖橙
};
/** 点光源阴影为 6 面立方体贴图，开销大：仅最近的若干个投射阴影 */
const MAX_SHADOW_TORCH = 4;
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
  private hoverMesh: THREE.Mesh | null = null;
  /** 玩家纸片人（Player 单例不在 allEntities() 中，需单独维护） */
  private playerSprite: THREE.Sprite | null = null;
  /** 玩家贴地阴影 */
  private playerShadow: THREE.Mesh | null = null;
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

  private ambient: THREE.AmbientLight | null = null;
  private dirLight: THREE.DirectionalLight | null = null;
  private playerTorch: THREE.PointLight | null = null;
  private torchLights = new Map<string, THREE.PointLight>();
  /** 氛围点光源（宝箱/Boss/楼梯），不投影 */
  private glowLights = new Map<string, THREE.PointLight>();
  /** 自发光脉动精灵（精英/Boss/未开宝箱/楼梯），由 render 每帧驱动 */
  private glowSprites: { sprite: THREE.Sprite; base: number; speed: number; phase: number }[] = [];
  /** 丁达尔飘尘（火把光锥内缓慢上升的浮尘） */
  private dustItems: {
    sprite: THREE.Sprite; baseX: number; baseZ: number; baseY: number; phase: number; speed: number;
  }[] = [];

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

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (err) {
      console.error('[Three] WebGL 初始化失败', err);
      container.innerHTML = '<div style="padding:24px;color:#ff8888">当前环境不支持 WebGL，无法启动游戏渲染。</div>';
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.id = 'game-canvas';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.cursor = 'crosshair';
    container.appendChild(renderer.domElement);
    this.renderer = renderer;

    this.setupLights();
    scene.add(this.floorGroup, this.wallGroup, this.entityGroup, this.particleGroup);
    this.buildHoverMesh();

    // 后期处理（辉光 / 暗角 / 颜色校正）
    postProcessing.init(renderer, scene, camera, w, h);

    InputManager.getInstance().attachCanvas(renderer.domElement);

    this.ready = true;
    this.rebuildFloor();

    eventBus.on('floorChanged', () => this.rebuildFloor());
    eventBus.on('saveLoaded', () => this.rebuildFloor());
    eventBus.on('gameRestarted', () => this.rebuildFloor());
    eventBus.on('monsterDefeated', () => this.rebuildEntities());
    eventBus.on('chestOpened', () => this.rebuildEntities());
    eventBus.on('potionPicked', () => this.rebuildEntities());
    // 屏幕震动（文档 L.2）：受大伤害 / Boss 被击败 / 玩家阵亡
    eventBus.on('battleEnded', p => {
      if (p.result.damageTaken > Player.getInstance().maxHp * 0.3) this.shake(0.3, 320);
    });
    eventBus.on('bossDefeated', () => this.shake(0.45, 520));
    eventBus.on('playerDied', () => this.shake(0.35, 420));
    window.addEventListener('resize', () => this.resize());
  }

  /** 光照（文档 4.2 / 四）：环境光 + 方向光（主光源投影）+ 玩家火炬 */
  private setupLights(): void {
    if (!this.scene) return;
    this.ambient = new THREE.AmbientLight(0x404060, 0.6);
    this.scene.add(this.ambient);

    const dir = new THREE.DirectionalLight(0xffeedd, 0.8);
    dir.position.set(10, 20, 5);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.near = 0.5;
    dir.shadow.camera.far = 120;
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

    this.playerTorch = new THREE.PointLight(0xffcc66, 1.5, 10);
    this.playerTorch.castShadow = true;
    this.playerTorch.shadow.mapSize.set(1024, 1024);
    this.playerTorch.shadow.bias = -0.002;
    this.scene.add(this.playerTorch);
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

  /** 整层重建（换层/读档）：地板 + 墙/柱 + 实体 */
  private rebuildFloor(): void {
    if (!this.ready) return;
    const floor = WorldManager.getInstance().currentFloor;
    if (!floor) return;
    this.builtFloorId = floor.floorId;
    this.focusInit = false; // 换层时相机直接定位，避免从旧楼层平滑"飞"过去

    // 墙将重建：旧实例映射失效，先归还全部虚化槽位
    for (const key of [...this.fadeCells.keys()]) this.releaseFadeWall(key);
    this.fadeCells.clear();
    this.clearGroup(this.floorGroup);
    this.clearGroup(this.wallGroup);
    this.buildFloorTiles(floor);
    this.buildWalls(floor);
    this.rebuildEntities();
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

  /** 地板：按 (房间配色 + 棋盘格) 分组，每组一个 InstancedMesh（避免上千 draw call） */
  private buildFloorTiles(floor: { grid: number[][]; width: number; height: number; rooms: RoomData[] }): void {
    const roomGrid = this.roomGridOf(floor);
    const groups = new Map<string, { roomKey: string; checker: 0 | 1; cells: [number, number][] }>();
    for (let row = 0; row < floor.height; row++) {
      for (let col = 0; col < floor.width; col++) {
        if (floor.grid[row][col] !== 0) continue; // 仅地板（1/2 为墙/柱，4 为悬崖）
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
      });
      const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, FLOOR_THICKNESS, 1), mat, g.cells.length);
      inst.receiveShadow = true;
      g.cells.forEach(([col, row], i) => {
        dummy.position.set(col + 0.5, -FLOOR_THICKNESS / 2, row + 0.5);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.floorGroup.add(inst);
    }
  }

  /** 墙（1）与柱（2）：按高度/房间分组的 InstancedMesh，纯色 MeshStandardMaterial */
  private buildWalls(floor: { grid: number[][]; width: number; height: number; rooms: RoomData[] }): void {
    const roomGrid = this.roomGridOf(floor);
    const heights = dataManager.config.heights;
    const ts = projection.tileSize;
    const wallGroups = new Map<string, { h: number; cells: [number, number][] }>();
    const pillarGroups = new Map<string, { h: number; cells: [number, number][] }>();
    /** 不属于任何房间的墙 → 走廊边界，改用栅栏包裹（不封死视野） */
    const fenceCells: [number, number][] = [];

    for (let row = 0; row < floor.height; row++) {
      for (let col = 0; col < floor.width; col++) {
        const tile = floor.grid[row][col];
        if (tile !== 1 && tile !== 2) continue;
        const isPillar = tile === 2;
        const roomKey = roomGrid[`${col},${row}`];
        if (!isPillar && !roomKey) {
          fenceCells.push([col, row]);
          continue;
        }
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
    for (const g of wallGroups.values()) {
      // 砖缝纹理（文档 5.3：Canvas → Texture，无外部图片依赖）
      const mat = new THREE.MeshStandardMaterial({
        map: brickTexture(), roughness: 0.8, metalness: 0.08,
      });
      const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(1, g.h, 1), mat, g.cells.length);
      inst.castShadow = true;
      inst.receiveShadow = true;
      g.cells.forEach(([col, row], i) => {
        dummy.position.set(col + 0.5, g.h / 2, row + 0.5);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
        // 记录格子 → 实例，供"遮挡虚化"单独隐藏 / 恢复
        this.wallCells.set(`${col},${row}`, { mesh: inst, index: i, col, row, h: g.h });
      });
      inst.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(inst);
    }
    for (const g of pillarGroups.values()) {
      const mat = new THREE.MeshStandardMaterial({ color: 0x9d9da6, roughness: 0.7, metalness: 0.12 });
      const inst = new THREE.InstancedMesh(new THREE.BoxGeometry(0.4, g.h, 0.4), mat, g.cells.length);
      inst.castShadow = true;
      inst.receiveShadow = true;
      g.cells.forEach(([col, row], i) => {
        dummy.position.set(col + 0.5, g.h / 2, row + 0.5);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      });
      inst.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(inst);
    }

    // 走廊栅栏：代替实心墙包裹走廊两侧
    if (fenceCells.length > 0) {
      this.buildFences(fenceCells, Math.max(0.5, heights.corridorWall / ts), floor.grid);
    }
  }

  /**
   * 走廊栅栏：竖条 + 顶部横梁，代替实心墙包裹走廊两侧。
   * 按墙走向（沿 X / 沿 Z）分组，保证栅栏与走廊平行。
   */
  private buildFences(cells: [number, number][], wallH: number, grid: number[][]): void {
    const alongX: [number, number][] = [];
    const alongZ: [number, number][] = [];
    for (const [col, row] of cells) {
      const horiz = grid[row]?.[col - 1] === 1 || grid[row]?.[col + 1] === 1;
      (horiz ? alongX : alongZ).push([col, row]);
    }
    const barH = Math.max(0.4, wallH * 0.62); // 比实心墙矮，留出上方视野
    const mat = new THREE.MeshStandardMaterial({
      color: 0x6b6152, roughness: 0.75, metalness: 0.25,
    });
    const dummy = new THREE.Object3D();

    const strip = (list: [number, number][], vertical: boolean): void => {
      if (list.length === 0) return;
      // 竖条：每格 2 根
      const bars = new THREE.InstancedMesh(
        new THREE.BoxGeometry(0.08, barH, 0.08), mat, list.length * 2,
      );
      bars.castShadow = true;
      bars.receiveShadow = true;
      let i = 0;
      for (const [col, row] of list) {
        for (const off of [-0.24, 0.24]) {
          dummy.position.set(
            col + 0.5 + (vertical ? 0 : off),
            barH / 2,
            row + 0.5 + (vertical ? off : 0),
          );
          dummy.updateMatrix();
          bars.setMatrixAt(i++, dummy.matrix);
        }
      }
      bars.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(bars);

      // 顶部横梁：每格 1 根
      const beams = new THREE.InstancedMesh(
        new THREE.BoxGeometry(vertical ? 0.1 : 0.98, 0.08, vertical ? 0.98 : 0.1), mat, list.length,
      );
      beams.castShadow = true;
      let j = 0;
      for (const [col, row] of list) {
        dummy.position.set(col + 0.5, barH * 0.86, row + 0.5);
        dummy.updateMatrix();
        beams.setMatrixAt(j++, dummy.matrix);
      }
      beams.instanceMatrix.needsUpdate = true;
      this.wallGroup.add(beams);
    };

    strip(alongX, false);
    strip(alongZ, true);
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

    /** 只虚化实心砖墙：走廊栅栏不在 wallCells 中，保持通透 */
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
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshStandardMaterial({
            map: brickTexture(), roughness: 0.8, metalness: 0.08,
            transparent: true, opacity: 1, depthWrite: false,
          }),
        );
        mesh.castShadow = false; // 半透明墙不投实心阴影，避免又挡住视线
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
    for (const light of this.torchLights.values()) this.scene?.remove(light);
    this.torchLights.clear();
    for (const light of this.glowLights.values()) this.scene?.remove(light);
    this.glowLights.clear();
    this.glowSprites = []; // 精灵已随 clearGroup 释放，此处只清引用
    this.dustItems = [];
    this.playerSprite = null;
    this.playerShadow = null;
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

    // 玩家（单例不在 allEntities 中）
    const canvas = textureGen.player();
    const pScale = Math.max(1.35, (heights.player / ts) * 1.6);
    this.playerSprite = this.makePaperSprite(canvas, pScale);
    this.playerShadow = this.addGroundShadow(0, 0, pScale * 0.3); // 位置由 syncPlayer 跟随
    this.syncPlayer();
    this.entityGroup.add(this.playerSprite);

    // Boss 铁门：Boss 存活时封锁出口，击败后自动开启
    this.buildGates(prevGates);
  }

  /** 单个实体的 3D 表现：静态物 → Mesh；动态实体 → 纸片人 Sprite */
  private addEntity(
    entity: MapEntity, room: RoomData, def: MonsterDef | undefined, heightPx: number, ts: number,
  ): void {
    const cx = entity.x + 0.5;
    const cz = entity.y + 0.5;
    const opened = entity.kind === 'chest' && WorldManager.getInstance().isChestOpened(entity);

    if (entity.kind === 'torch') {
      // 火把：杆 + 火焰球 + PointLight（文档 3.3 / 四）
      const pole = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.8, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x6b4a2a, roughness: 0.9 }),
      );
      pole.position.set(cx, 0.4, cz);
      pole.castShadow = true;
      this.entityGroup.add(pole);

      const flame = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xffaa33 }),
      );
      flame.position.set(cx, 0.9, cz);
      this.entityGroup.add(flame);

      // 丁达尔光锥：火焰向下的可见光柱（additive，氛围级透明度，不遮挡物体）
      const cfgT = dataManager.config.shadow.tyndall;
      const coneH = Math.min(0.95, cfgT.length / ts); // 不超出火焰高度，避免穿地
      const coneW = Math.max(0.35, cfgT.width / ts);
      const cone = new THREE.Sprite(new THREE.SpriteMaterial({
        map: canvasTexture(textureGen.coneTex()),
        color: 0xffaa55,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        opacity: cfgT.alpha,
      }));
      cone.scale.set(coneW, coneH, 1);
      cone.position.set(cx, coneH / 2, cz);
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
          sprite: dust, baseX: cx, baseZ: cz, baseY: 0.1,
          phase: Math.random(), speed: 0.12 + Math.random() * 0.1,
        });
      }

      if (this.torchLights.size < MAX_TORCH_LIGHTS) {
        const light = new THREE.PointLight(ROOM_LIGHT_COLORS[room.type] ?? 0xff8844, 1.0, 8);
        light.position.set(cx, 1.0, cz);
        light.castShadow = this.torchLights.size < MAX_SHADOW_TORCH;
        if (light.castShadow) light.shadow.mapSize.set(512, 512);
        this.scene?.add(light);
        this.torchLights.set(entity.id, light);
      }
      return;
    }

    if (entity.kind === 'chest') {
      // 宝箱：木箱身 + 半圆柱拱盖 + 金属包边 + 正面锁扣（开启时盖子向后掀开）
      const chest = this.buildChest(opened, entity.chestTier === 'grand');
      chest.position.set(cx, 0, cz);
      this.entityGroup.add(chest);
      // 未开启的宝箱：金色氛围光 + 急促闪烁（文档：宝箱光 #ffdd44）
      if (!opened) {
        this.addGlowLight(entity.id, 0xffcc44, 0.9, 6, cx, 0.7, cz);
        this.addGlow('#ffcc44', 0.55, cx, 0.45, cz, 3.0);
      }
      return;
    }

    if (entity.kind === 'stair') {
      // 楼梯：4 级递增台阶（文档 3.3）
      for (let i = 0; i < 4; i++) {
        const step = new THREE.Mesh(
          new THREE.BoxGeometry(0.86, 0.12, 0.22),
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

    // 玩家/怪物/NPC/其他 → 纸片人 Sprite（始终面向摄像机）
    const canvas = textureGen.entity(entity, room, def, heightPx, opened);
    // 整体放大：3D 内原尺寸过小；同时保留 普通 < 精英 < Boss 的体型差
    const spriteScale = Math.max(1.05, Math.min(2.6, (heightPx / ts) * 1.6));
    const sprite = this.makePaperSprite(canvas, spriteScale);
    sprite.position.set(cx, this.footedY(sprite), cz); // 脚底贴地，避免悬空
    this.entityGroup.add(sprite);
    // 贴地阴影：Sprite 无法投射真实阴影，用水平面片模拟
    this.addGroundShadow(cx, cz, spriteScale * 0.3);

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
    } else if (entity.kind === 'fountain') {
      // 治疗泉：青蓝呼吸光，突出可交互的治疗服务
      this.addGlow('#6bebff', 0.4, cx, sprite.position.y + sprite.scale.y * 0.25, cz, 1.4);
      this.addGlowLight(entity.id, 0x6bebff, 0.5, 4, cx, 0.6, cz);
    } else if (entity.kind === 'cauldron') {
      // 熬药大锅：魔药绿光，强化女巫房身份
      this.addGlow('#7effb2', 0.32, cx, sprite.position.y + sprite.scale.y * 0.4, cz, 2.2);
    }
  }

  /** 氛围点光源（不投影，受 MAX_GLOW_LIGHTS 限制，避免过多点光源拖慢着色） */
  private addGlowLight(
    id: string, color: number, intensity: number, distance: number,
    x: number, y: number, z: number,
  ): void {
    if (this.glowLights.has(id) || this.glowLights.size >= MAX_GLOW_LIGHTS) return;
    const light = new THREE.PointLight(color, intensity, distance);
    light.position.set(x, y, z);
    light.castShadow = false;
    this.scene?.add(light);
    this.glowLights.set(id, light);
  }

  /** 自发光光晕（additive 叠加；登记后由 render 每帧驱动脉动） */
  private addGlow(
    color: string, radius: number, x: number, y: number, z: number, speed: number,
  ): void {
    const size = radius * 2;
    const mat = new THREE.SpriteMaterial({
      map: canvasTexture(textureGen.glow(color)),
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      opacity: 0.8,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(size, size, 1);
    sprite.position.set(x, y, z);
    sprite.renderOrder = 2;
    this.entityGroup.add(sprite);
    this.glowSprites.push({ sprite, base: size, speed, phase: Math.random() * Math.PI * 2 });
  }

  /**
   * 宝箱：木质箱身 + 半圆柱拱形盖 + 金属包边 + 正面锁扣。
   * 开启时盖子绕后沿向后掀开（约 115°）；grand（Boss 奖励大宝箱）整体放大 1.25 倍。
   */
  private buildChest(opened: boolean, grand: boolean): THREE.Group {
    const g = new THREE.Group();
    const s = grand ? 1.25 : 1;
    const bw = 0.66 * s; // 宽（X）
    const bh = 0.32 * s; // 箱身高
    const bd = 0.46 * s; // 深（Z）

    const woodMat = new THREE.MeshStandardMaterial({
      color: opened ? 0x6b573a : 0x8a5a2b, roughness: 0.78, metalness: 0.08,
    });
    const lidMat = new THREE.MeshStandardMaterial({
      color: opened ? 0x4a3d26 : 0x5f3b1a, roughness: 0.72, metalness: 0.12,
    });
    const metalMat = new THREE.MeshStandardMaterial({
      color: opened ? 0x7c7c7c : 0xd9a92b, roughness: 0.35, metalness: 0.85,
    });

    // 箱身
    const body = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), woodMat);
    body.position.y = bh / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    // 拱形盖：半圆柱沿 X 延伸（rotation.z = π/2 把圆柱轴由 Y 转到 X，半圆朝上）
    const pivot = new THREE.Group();
    pivot.position.set(0, bh, -bd / 2); // 铰链在箱身后上沿
    const lidR = bd / 2;
    const lid = new THREE.Mesh(
      new THREE.CylinderGeometry(lidR, lidR, bw, 20, 1, false, 0, Math.PI),
      lidMat,
    );
    lid.rotation.z = Math.PI / 2;
    lid.position.z = bd / 2;
    lid.castShadow = true;
    pivot.add(lid);

    // 盖子上的金属箍（半圆环，绕 X 轴方向）
    for (const ox of [-bw * 0.28, bw * 0.28]) {
      const band = new THREE.Mesh(
        new THREE.TorusGeometry(lidR * 1.02, 0.018 * s, 8, 18, Math.PI),
        metalMat,
      );
      band.rotation.y = Math.PI / 2; // 环平面由 XY 转到 ZY
      band.position.set(ox, 0, bd / 2);
      pivot.add(band);
    }

    if (opened) pivot.rotation.x = -2.0; // 开启：向后掀开约 115°
    g.add(pivot);

    // 箱身四角金属包边
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const strip = new THREE.Mesh(
          new THREE.BoxGeometry(0.035 * s, bh, 0.035 * s),
          metalMat,
        );
        strip.position.set(sx * (bw / 2 - 0.02 * s), bh / 2, sz * (bd / 2 - 0.02 * s));
        strip.castShadow = true;
        g.add(strip);
      }
    }

    // 正面锁扣
    const lock = new THREE.Mesh(
      new THREE.BoxGeometry(0.11 * s, 0.1 * s, 0.03 * s),
      new THREE.MeshStandardMaterial({
        color: opened ? 0x5a5a5a : 0xffd75e, roughness: 0.3, metalness: 0.9,
      }),
    );
    lock.position.set(0, bh * 0.8, bd / 2 + 0.012 * s);
    g.add(lock);

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

  /**
   * 贴地阴影：Sprite 不写深度、无法投射真实阴影，用水平面片 + 径向渐变模拟。
   * 水平放置后会随透视压缩成椭圆，比把阴影画在竖直贴图上自然得多。
   */
  private addGroundShadow(x: number, z: number, radius: number, opacity = 0.42): THREE.Mesh {
    const mat = new THREE.MeshBasicMaterial({
      map: canvasTexture(textureGen.glow('#000000')),
      transparent: true,
      opacity,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.015, z);
    mesh.renderOrder = 1;
    this.entityGroup.add(mesh);
    return mesh;
  }

  /** 铁栅栏：5 根竖条 + 2 根横梁（深灰金属） */
  private buildGateMesh(vertical: boolean): THREE.Group {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
      color: 0x59606b, roughness: 0.45, metalness: 0.85,
    });
    for (let i = 0; i < 5; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), mat);
      bar.position.set((i - 2) * 0.21, 0.6, 0);
      bar.castShadow = true;
      g.add(bar);
    }
    for (const by of [0.28, 0.95]) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(1.06, 0.11, 0.13), mat);
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
      group.position.set(baseX, 0, baseZ);
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

  /** 玩家纸片人位置同步 */
  private syncPlayer(): void {
    if (!this.playerSprite) return;
    const p = Player.getInstance().pos;
    this.playerSprite.position.set(p.x + 0.5, this.footedY(this.playerSprite), p.y + 0.5);
    if (this.playerShadow) this.playerShadow.position.set(p.x + 0.5, 0.015, p.y + 0.5);
  }

  /** 每帧：相机跟随 + 光源跟随 + 悬浮高亮 + 渲染 */
  render(timeMs: number): void {
    if (!this.ready || !this.renderer || !this.scene || !this.camera) return;
    const floor = WorldManager.getInstance().currentFloor;
    if (!floor) return;
    if (floor.floorId !== this.builtFloorId) this.rebuildFloor();

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

    // 遮挡虚化：挡住玩家 / 可交互物的墙与其左右两块渐隐（碰撞仍是实体）
    this.updateWallFade(dt);

    // 正对房间南面：相机位于房间上方，沿 +Z 略后退，斜向下观察（机位由 camera3D 配置驱动）
    const cam3d = dataManager.config.camera3D;
    this.camera.position.set(this.focusX, cam3d.height, this.focusZ + cam3d.distance);
    this.camera.lookAt(this.focusX, 0, this.focusZ);

    // 主光源跟随视口，保证阴影相机始终覆盖可见区域
    if (this.dirLight) {
      this.dirLight.position.set(this.focusX + 4, 26, this.focusZ + 6);
      this.dirLight.target.position.set(this.focusX, 0, this.focusZ);
      this.dirLight.target.updateMatrixWorld();
    }

    // 玩家火炬跟随（p 已在注视点计算处定义）
    this.syncPlayer();
    if (this.playerTorch) {
      this.playerTorch.position.set(p.x + 0.5, 1.5, p.y + 0.5);
      this.playerTorch.intensity = 1.5 * (0.9 + 0.1 * Math.sin(timeMs / 110));
    }

    // 墙壁火把闪烁（避免每帧改 uniform，直接调 intensity）
    let i = 0;
    for (const light of this.torchLights.values()) {
      light.intensity = 1.0 * (0.85 + 0.15 * Math.sin(timeMs / 130 + i * 1.7));
      i++;
    }

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

    // 自发光脉动（精英 / Boss / 未开宝箱 / 楼梯）
    const tSec = timeMs / 1000;
    for (const g of this.glowSprites) {
      const k = 0.72 + 0.28 * Math.sin(tSec * g.speed + g.phase);
      (g.sprite.material as THREE.SpriteMaterial).opacity = k;
      const s = g.base * (0.88 + 0.12 * k);
      g.sprite.scale.set(s, s, 1);
    }

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
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    postProcessing.setSize(w, h);
  }

  /** 清空容器并释放几何体/材质（贴图由 ThreeTextures 缓存共享，不在此销毁） */
  private clearGroup(group: THREE.Group): void {
    for (let i = group.children.length - 1; i >= 0; i--) {
      const child = group.children[i];
      group.remove(child);
      // 组合体（如宝箱：箱身 + 盖子 + 包边）需递归释放，否则换层会累积泄漏
      const asGroup = child as THREE.Group;
      if (asGroup.children && asGroup.children.length > 0) this.clearGroup(asGroup);
      const obj = child as THREE.Mesh | THREE.InstancedMesh | THREE.Sprite;
      if (obj.geometry) obj.geometry.dispose();
      const mat = (obj as THREE.Mesh).material;
      if (Array.isArray(mat)) mat.forEach(m => m.dispose());
      else mat?.dispose();
    }
  }
}
