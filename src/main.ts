/**
 * 魔塔RPG · 无尽之塔 2.5D —— 游戏入口
 * 初始化顺序：数据 → UI → 单例预热 → 标题屏（新游戏/读档）→ 游戏循环。
 */
import './style.css';
import { dataManager } from './core/DataManager';
import { GameUI } from './ui/GameUI';
import { GameLoop } from './core/GameLoop';
import { InputManager } from './core/InputManager';
import { GameController } from './core/GameController';
import { CameraController } from './core/CameraController';
import { WorldManager } from './core/WorldManager';
import { FloorManager } from './core/FloorManager';
import { Player } from './entities/Player';
import { BattleSystem } from './systems/BattleSystem';
import { ChestSystem } from './systems/ChestSystem';
import { EquipmentGenerator } from './systems/EquipmentGenerator';
import { QuestManager } from './systems/QuestManager';
import { BestiaryManager } from './systems/BestiaryManager';
import { MerchantSystem } from './systems/MerchantSystem';
import { SaveManager } from './systems/SaveManager';
import { AchievementSystem } from './systems/AchievementSystem';
import { GuidanceSystem } from './systems/GuidanceSystem';
import { MapGenerator } from './map/MapGenerator';
import { buildPrefabFloor } from './map/PrefabMap';
import { Logger } from './utils/Logger';
import { loadPotionArts } from './render/PotionArt';
import { loadHeroAtlas } from './render/HeroAtlas';

async function bootstrap(): Promise<void> {
  // 0. 预加载魔法瓶美术图（失败回退占位盒，不阻塞）
  await loadPotionArts();

  // 0b. 预加载主角精灵图集（失败回退烘焙纹理，不阻塞）
  try { await loadHeroAtlas(); } catch (e) { console.warn('[main] 主角图集加载失败，回退烘焙纹理', e); }

  // 1. 数据加载
  dataManager.loadAll();

  // 2. UI与渲染（含标题屏）
  GameUI.getInstance().build();

  // 2b. 恢复上次的显示模式（仅桌面版；无边框模式会重建窗口）
  try {
    const saved = localStorage.getItem('motarpg_display');
    if (saved && window.motaDesktop) window.motaDesktop.setDisplayMode(JSON.parse(saved));
  } catch { /* 忽略损坏配置 */ }

  // 3. 单例预热（事件绑定就绪）
  QuestManager.getInstance();
  BestiaryManager.getInstance();
  AchievementSystem.getInstance();
  GuidanceSystem.getInstance();
  SaveManager.getInstance();
  InputManager.getInstance(); // 绑定键盘鼠标（在Canvas创建之后）

  // 4. 启动主循环（标题屏覆盖在最上层，选单后 gameState.started = true）
  GameLoop.getInstance().start();

  // 调试钩子（自动化测试与排障用）
  (window as unknown as Record<string, unknown>).__motaDebug = {
    get player() { return Player.getInstance(); },
    get world() { return WorldManager.getInstance(); },
    get camera() { return CameraController.getInstance(); },
    gameLoop: GameLoop.getInstance(),
    gameController: GameController.getInstance(),
    floorManager: FloorManager.getInstance(),
    mapGenerator: MapGenerator.getInstance(),
    battle: BattleSystem.getInstance(),
    chest: ChestSystem.getInstance(),
    equipGen: EquipmentGenerator.getInstance(),
    quest: QuestManager.getInstance(),
    bestiary: BestiaryManager.getInstance(),
    merchant: MerchantSystem.getInstance(),
    save: SaveManager.getInstance(),
    guidance: GuidanceSystem.getInstance(),
    describeFloor(): string {
      return MapGenerator.getInstance().describe(WorldManager.getInstance().currentFloor!);
    },
    /** 载入预制地图（字符图例见 src/map/PrefabMap.ts 顶部注释） */
    loadPrefab(def: import('./map/PrefabMap').PrefabMapDef): void {
      FloorManager.getInstance().enterPrefabFloor(buildPrefabFloor(def));
      CameraController.getInstance().snapToPlayer();
    },
  };

  Logger.info('无尽之塔 2.5D · 启动完成');
}

void bootstrap();
