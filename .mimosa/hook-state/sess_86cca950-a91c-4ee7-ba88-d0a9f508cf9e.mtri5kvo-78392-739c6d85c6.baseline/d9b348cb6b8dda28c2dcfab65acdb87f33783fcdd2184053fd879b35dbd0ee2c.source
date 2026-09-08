/**
 * 游戏启动器：新游戏 / 读档恢复，负责各管理器的重置与状态装配。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { FloorManager } from '../core/FloorManager';
import { CameraController } from '../core/CameraController';
import { Player } from '../entities/Player';
import { InventoryManager } from '../systems/InventoryManager';
import { CollectibleSystem } from '../systems/CollectibleSystem';
import { QuestManager } from '../systems/QuestManager';
import { AchievementManager } from '../systems/AchievementManager';
import { BestiaryManager } from '../systems/BestiaryManager';
import { EventManager } from '../systems/EventManager';
import { EndlessSystem } from '../systems/EndlessSystem';
import { MerchantSystem } from '../systems/MerchantSystem';
import { SaveManager } from '../systems/SaveManager';
import type { SaveData } from '../types';

interface RuntimeExtras {
  gameStateFlags?: {
    endlessUnlocked: boolean;
    difficultySystemUnlocked: boolean;
    havenUnlocked: boolean;
    maxFloorReached: number;
  };
  achStats?: {
    unlocked: string[];
    stats: import('../systems/AchievementManager').AchievementStats;
    monsterDefeatCounts: Record<string, number>;
    statusCounts: Record<string, number>;
  };
  triggeredEvents?: string[];
}

export class GameStarter {
  /** 开始新游戏 */
  static newGame(): void {
    GameStarter.resetWorld();

    const seed = (Date.now() ^ (Math.random() * 0xffffffff)) >>> 0;
    gameState.reset(seed);
    Player.createNew();
    GameStarter.wirePlayer();

    QuestManager.getInstance().initForNewGame();
    SaveManager.getInstance().autoSaveTrigger();

    GameStarter.enterFloor(dataManager.world.tutorial.floorId);
    eventBus.emit('notification', { message: '冒险开始！用方向键移动，撞向怪物即触发战斗。', type: 'info', icon: '⚔️' });
  }

  /** 读取存档继续游戏 */
  static loadGame(): boolean {
    const save = SaveManager.getInstance().load();
    if (!save) return false;
    GameStarter.resetWorld();

    const extras = save as SaveData & RuntimeExtras;
    gameState.reset(save.seed);
    if (extras.gameStateFlags) {
      gameState.endlessUnlocked = extras.gameStateFlags.endlessUnlocked;
      gameState.difficultySystemUnlocked = extras.gameStateFlags.difficultySystemUnlocked;
      gameState.havenUnlocked = extras.gameStateFlags.havenUnlocked;
      gameState.maxFloorReached = extras.gameStateFlags.maxFloorReached || 1;
    }

    // 玩家
    Player.createNew();
    GameStarter.wirePlayer();
    const player = Player.getInstance();
    const sp = save.player;
    player.level = sp.level;
    player.exp = sp.exp;
    player.gold = sp.gold;
    player.soul = sp.soul;
    player.baseAttack = sp.baseAttack;
    player.baseDefense = sp.baseDefense;
    player.baseMaxHp = Math.max(1, sp.maxHp - 0); // maxHp由recalc重算，这里恢复基准
    player.baseCritRate = sp.critRate;
    player.baseDodgeRate = sp.dodgeRate;
    player.baseDamageBonus = sp.damageBonus;
    player.statusEffects = sp.statusEffects?.map(s => ({ ...s })) ?? [];
    player.equipment = { ...sp.equipment };
    player.currentDifficulty = sp.currentDifficulty;
    player.currentFloor = sp.currentFloor;
    player.currentRoomId = sp.currentRoomId;
    player.collectibles = [...save.collectibles];

    // 背包与装备实例
    InventoryManager.getInstance().loadState(save.inventory ?? [], save.equipmentInstances ?? []);
    player.recalc();
    player.hp = Math.min(sp.hp, player.maxHp);

    // 各系统
    CollectibleSystem.getInstance().loadState(save.seriesRewarded ?? []);
    QuestManager.getInstance().loadState(
      save.quests?.activeQuestIds ?? [],
      save.quests?.completedQuestIds ?? [],
      save.quests?.questProgress ?? {},
    );
    WorldManager.getInstance().loadEntityStates(save.world?.entityStates ?? {});
    WorldManager.getInstance().loadDefeatedBossFloors(save.bossFloors);
    BestiaryManager.getInstance().loadState(save.bestiary ?? {});
    EventManager.getInstance().loadState(extras.triggeredEvents ?? []);
    if (extras.achStats) {
      AchievementManager.getInstance().loadState(
        extras.achStats.unlocked ?? save.achievements?.unlockedAchievementIds ?? [],
        extras.achStats.stats,
        extras.achStats.monsterDefeatCounts ?? {},
        extras.achStats.statusCounts ?? {},
      );
    }
    EndlessSystem.getInstance().loadState(save.endless);
    Object.assign(SaveManager.getInstance().stats, save.stats);

    // 恢复位置：无尽模式激活 → 回廊入口；否则原房间
    const endless = EndlessSystem.getInstance();
    if (save.endless?.isActive) {
      gameState.mode = 'endless';
      endless.isActive = true;
      GameStarter.enterFloor(save.endless.currentFloor, save.player.currentRoomId || undefined);
    } else {
      gameState.mode = 'main';
      GameStarter.enterFloor(sp.currentFloor, sp.currentRoomId || undefined, sp.playerX, sp.playerY);
    }
    eventBus.emit('saveLoaded', {});
    eventBus.emit('notification', { message: `存档已读取 —— 欢迎回来，勇士（${save.lastSaved.slice(0, 16).replace('T', ' ')}）。`, type: 'success', icon: '📖' });
    return true;
  }

  /** 读取存档失败后的死亡复活 */
  static respawnFromSave(): void {
    if (!GameStarter.loadGame()) {
      GameStarter.newGame();
    }
  }

  private static resetWorld(): void {
    WorldManager.getInstance().clearCaches();
    FloorManager.getInstance().clearCache();
    InventoryManager.getInstance().reset();
    CollectibleSystem.getInstance().reset();
    BestiaryManager.getInstance().reset();
    EventManager.getInstance().reset();
    MerchantSystem.getInstance().reset();
    EndlessSystem.getInstance().reset();
    AchievementManager.getInstance().reset();
  }

  private static wirePlayer(): void {
    Player.getInstance().setEquipmentResolver(id => InventoryManager.getInstance().getEquipment(id));
  }

  /** 进入指定楼层（默认起点/指定房间） */
  private static enterFloor(floorId: number, roomId?: string, x?: number, y?: number): void {
    const floorManager = FloorManager.getInstance();
    const floor = floorManager.getFloor(floorId);
    const rooms = floorManager.getRoomsOfFloor(floorId);
    const world = WorldManager.getInstance();
    const player = Player.getInstance();

    const targetRoom = (roomId && rooms.get(roomId)) || rooms.get(floor.roomIds[0]);
    if (!targetRoom) {
      console.error('[GameStarter] 无可用房间', floorId);
      return;
    }
    let px = x;
    let py = y;
    if (px === undefined || py === undefined) {
      if (targetRoom.isStartRoom || targetRoom.roomKind === 'entry' || targetRoom.roomKind === 'rest') {
        px = Math.floor(targetRoom.width / 2);
        py = Math.floor(targetRoom.height / 2);
      } else {
        px = Math.max(1, Math.min(targetRoom.width - 2, x ?? Math.floor(targetRoom.width / 2)));
        py = Math.max(1, Math.min(targetRoom.height - 2, y ?? Math.floor(targetRoom.height / 2)));
      }
    }
    player.currentFloor = floorId;
    world.setCurrentFloor(floor, targetRoom.roomId, px, py);
    player.currentRoomId = targetRoom.roomId;
    const camera = CameraController.getInstance();
    camera.setRoomBounds(world.currentRoom!);
    camera.snapTo(player.position.x, player.position.y);
  }
}
