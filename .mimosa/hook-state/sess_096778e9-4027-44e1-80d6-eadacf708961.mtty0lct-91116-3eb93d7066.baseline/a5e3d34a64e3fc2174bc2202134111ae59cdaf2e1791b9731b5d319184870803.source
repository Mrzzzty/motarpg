/**
 * 魔塔RPG · 无尽之塔 —— 游戏入口
 * 初始化顺序：数据 → UI → 存档/新游戏 → 游戏循环。
 */
import './style.css';
import { dataManager } from './core/DataManager';
import { eventBus } from './core/EventBus';
import { CameraController } from './core/CameraController';
import { FloorManager } from './core/FloorManager';
import { GameController } from './core/GameController';
import { gameState } from './core/GameState';
import { InputManager } from './core/InputManager';
import { GameLoop } from './core/GameLoop';
import { WorldManager } from './core/WorldManager';
import { Player } from './entities/Player';
import { MerchantSystem } from './systems/MerchantSystem';
import { ChestSystem } from './systems/ChestSystem';
import { BattleSystem } from './systems/BattleSystem';
import { BossSystem } from './systems/BossSystem';
import { EndlessSystem } from './systems/EndlessSystem';
import { SaveManager } from './systems/SaveManager';
import { InventoryManager } from './systems/InventoryManager';
import { CollectibleSystem } from './systems/CollectibleSystem';
import { EquipmentGenerator } from './systems/EquipmentGenerator';
import { GameUI } from './ui/GameUI';
import { GameStarter } from './ui/GameStarter';
import { TitleScreen } from './ui/TitleScreen';
import { DifficultySystem } from './systems/DifficultySystem';
import { Logger } from './utils/Logger';

function bootstrap(): void {
  // 1. 数据加载
  dataManager.loadAll();

  // 2. UI与渲染
  const ui = GameUI.getInstance();
  ui.build();

  // 3. 摄像机跟随玩家
  CameraController.getInstance().follow(Player.getInstance().position);

  // 4. 里程碑联动：楼层推进 → 难度/天堂解锁
  eventBus.on('floorChanged', p => {
    if (p.mode === 'main') {
      DifficultySystem.getInstance().checkUnlocksOnFloorReached(p.toFloor);
    }
  });

  // 5. 显示首页，玩家选择后再开始（新游戏或读档）
  const title = new TitleScreen(document.getElementById('overlay-layer')!);
  title.show(() => {
    CameraController.getInstance().snapTo(Player.getInstance().position.x, Player.getInstance().position.y);
    eventBus.emit('gameResumed', {});
  });

  // 6. 启动主循环
  GameLoop.getInstance().start();
  InputManager.getInstance(); // 确保输入已绑定

  // 调试钩子（生产环境无害，便于自动化测试与排障）
  (window as unknown as Record<string, unknown>).__motaDebug = {
    get gameState() { return gameState; },
    get player() { return Player.getInstance(); },
    get world() { return WorldManager.getInstance(); },
    gameLoop: GameLoop.getInstance(),
    input: InputManager.getInstance(),
    gameController: GameController.getInstance(),
    floorManager: FloorManager.getInstance(),
    merchant: MerchantSystem.getInstance(),
    chest: ChestSystem.getInstance(),
    battle: BattleSystem.getInstance(),
    boss: BossSystem.getInstance(),
    endless: EndlessSystem.getInstance(),
    save: SaveManager.getInstance(),
    inventory: InventoryManager.getInstance(),
    collectibleSystem: CollectibleSystem.getInstance(),
    equipGen: EquipmentGenerator.getInstance(),
  };

  Logger.info('无尽之塔 · 启动完成');
}

bootstrap();
