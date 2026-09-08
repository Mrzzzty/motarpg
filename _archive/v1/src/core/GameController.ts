/**
 * 交互控制器：移动碰撞、战斗触发、宝箱/物品/NPC交互、楼梯、传送门、治疗泉。
 * 连接 InputManager（输入）与各系统（通过 EventBus 或直接管理器调用）。
 */
import { dataManager } from './DataManager';
import { eventBus } from './EventBus';
import { gameState } from './GameState';
import { WorldManager } from './WorldManager';
import { FloorManager } from './FloorManager';
import { CameraController } from './CameraController';
import { Player } from '../entities/Player';
import { Monster } from '../entities/Monster';
import { Boss } from '../entities/Boss';
import type { BattleResult, Room, RoomEntity } from '../types';
import { BattleSystem } from '../systems/BattleSystem';
import { BossSystem } from '../systems/BossSystem';
import { ChestSystem } from '../systems/ChestSystem';
import { InventoryManager } from '../systems/InventoryManager';
import { CollectibleSystem } from '../systems/CollectibleSystem';
import { EventManager } from '../systems/EventManager';
import { MerchantSystem } from '../systems/MerchantSystem';
import { EndlessSystem } from '../systems/EndlessSystem';
import { SaveManager } from '../systems/SaveManager';
import { BestiaryManager } from '../systems/BestiaryManager';
import { EquipmentGenerator } from '../systems/EquipmentGenerator';
import { rng } from '../utils/MathUtils';

export class GameController {
  private static instance: GameController;
  /** UI注入：战斗结算面板 */
  showBattleResult: ((result: BattleResult, bonusText: string[]) => void) | null = null;
  /** UI注入：死亡确认（预测战败时） */
  confirmBattle: ((monsterName: string, forecastText: string, onConfirm: () => void) => void) | null = null;
  /** UI注入：NPC对话 */
  showNpcDialog: ((npcName: string, icon: string, lines: string[]) => void) | null = null;

  private lastBossRoomId = '';

  private constructor() {
    eventBus.on('roomEntered', p => {
      const world = WorldManager.getInstance();
      const room = world.currentRoom;
      if (room && room.roomKind === 'boss' && p.roomId !== this.lastBossRoomId) {
        this.lastBossRoomId = p.roomId;
        BossSystem.getInstance().onBossRoomEntered(room);
      }
      if (room) {
        EventManager.getInstance().onDefeatAll(room);
      }
      // 敌人清空事件检查
      SaveManager.getInstance().autoSaveTrigger();
    });
  }

  static getInstance(): GameController {
    if (!GameController.instance) {
      GameController.instance = new GameController();
    }
    return GameController.instance;
  }

  get canAct(): boolean {
    return !gameState.paused && !gameState.inputLocked && !gameState.transitionActive;
  }

  /** 尝试朝方向移动一格 */
  tryMove(dx: number, dy: number): void {
    if (!this.canAct) return;
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    if (!room) return;

    player.facing = dy > 0 ? 'south' : dy < 0 ? 'north' : dx > 0 ? 'east' : 'west';
    const nx = player.position.x + dx;
    const ny = player.position.y + dy;

    // 边界
    if (nx < 0 || ny < 0 || nx >= room.width || ny >= room.height) return;

    // 地形
    const tile = room.tiles[ny][nx];
    if (tile !== 0) return;

    // 出口门（门优先于实体）
    const exit = room.exits.find(e => e.doorX === nx && e.doorY === ny);
    if (exit) {
      if (exit.unlockCondition && !BossSystem.getInstance().isBossGateOpen(room, exit.unlockCondition)) {
        eventBus.emit('notification', { message: '大门紧闭——先击败这个房间的Boss。', type: 'warning', icon: '🚪' });
        return;
      }
      // 落点 = 目标房间中指向本房间的出口的入口格（避免落到错误坐标）
      const targetRoom = world.getRoom(exit.targetRoomId);
      let lx = exit.entryX;
      let ly = exit.entryY;
      if (targetRoom) {
        const backExit = targetRoom.exits.find(e2 => e2.targetRoomId === room.roomId);
        if (backExit) {
          lx = backExit.entryX;
          ly = backExit.entryY;
        } else {
          lx = Math.floor(targetRoom.width / 2);
          ly = Math.floor(targetRoom.height / 2);
        }
      }
      world.switchRoom(exit.targetRoomId, lx, ly);
      CameraController.getInstance().setRoomBounds(world.currentRoom!);
      CameraController.getInstance().snapTo(player.position.x, player.position.y);
      return;
    }

    // 实体交互
    const entities = world.entitiesAt(room, nx, ny);
    for (const entity of entities) {
      if (world.isBlockingEntity(entity)) {
        this.interactBlocking(entity, room);
        return;
      }
    }

    // 移动
    player.position.x = nx;
    player.position.y = ny;
    player.onStep();
    eventBus.emit('stepsChanged', { steps: SaveManager.getInstance().stats.steps + 1 });
    EventManager.getInstance().onStep(room);

    // 踏上触发型实体
    for (const entity of world.entitiesAt(room, nx, ny)) {
      this.onStepEntity(entity, room);
    }
  }

  private interactBlocking(entity: RoomEntity, room: Room): void {
    switch (entity.type) {
      case 'monster':
      case 'boss':
        this.startBattle(entity, room);
        break;
      case 'chest':
        this.openChest(entity, room);
        break;
      case 'npc':
        this.talkNpc(entity);
        break;
      case 'merchant':
        this.openShop(entity, room);
        break;
      default:
        break;
    }
  }

  private onStepEntity(entity: RoomEntity, room: Room): void {
    const world = WorldManager.getInstance();
    const player = Player.getInstance();
    switch (entity.type) {
      case 'item': {
        const itemId = entity.itemId ?? '';
        const def = dataManager.getItem(itemId);
        if (def) {
          InventoryManager.getInstance().addItem(itemId, entity.quantity ?? 1);
          world.markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { isFound: true });
          eventBus.emit('notification', { message: `拾取了 ${def.name}${(entity.quantity ?? 1) > 1 ? ` ×${entity.quantity}` : ''}`, type: 'info', icon: def.icon });
        } else if (dataManager.getTemplate(itemId)) {
          // 装备模板拾取物（如教学层的生锈铁剑）：生成装备实例并自动穿戴
          const equip = EquipmentGenerator.getInstance().generate({
            baseItemId: itemId,
            floor: room.floorId,
            depth: room.depth,
            qualityFloor: 'common',
            forcedLevel: 1,
            source: 'quest',
          });
          InventoryManager.getInstance().addEquipment(equip);
          if (!player.equipment[equip.slot] || (equip.type === 'accessory' && player.freeAccessorySlot())) {
            InventoryManager.getInstance().equip(equip.id);
            eventBus.emit('notification', { message: `获得了 ${equip.name} 并装备上了！攻击力提升`, type: 'success', icon: '🗡️' });
          } else {
            eventBus.emit('notification', { message: `获得了 ${equip.name}（背包中）`, type: 'success', icon: '🗡️' });
          }
          world.markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { isFound: true });
        }
        break;
      }
      case 'collectible': {
        const collectibleSys = CollectibleSystem.getInstance();
        const id = entity.collectibleId === 'auto' || !entity.collectibleId
          ? collectibleSys.pickRandomCollectible(['rare', 'epic', 'legendary'])?.id
          : entity.collectibleId;
        if (id) {
          collectibleSys.addCollectible(id);
          world.markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { isFound: true });
        }
        break;
      }
      case 'spring': {
        player.healFull();
        world.markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { isUsed: true });
        eventBus.emit('notification', { message: '治疗泉的暖流治愈了你所有的伤口。', type: 'success', icon: '⛲' });
        break;
      }
      case 'portal':
        if (entity.portalKind === 'endless_exit') {
          EndlessSystem.getInstance().exit();
        } else {
          this.enterEndless();
        }
        break;
      default:
        break;
    }
  }

  private enterEndless(): void {
    if (!gameState.endlessUnlocked) {
      eventBus.emit('notification', { message: '传送门沉寂着——似乎需要更深层的力量（击败第10层Boss）。', type: 'info', icon: '🌀' });
      return;
    }
    EndlessSystem.getInstance().enter();
  }

  // ============ 战斗 ============

  buildMonsterFrom(entity: RoomEntity, room: Room): Monster {
    const player = Player.getInstance();
    if (entity.type === 'boss') {
      return BossSystem.getInstance().buildBoss(entity, room.floorId, gameState.mode === 'endless' ? room.floorId : 0);
    }
    return new Monster({
      entityId: entity.id,
      monsterId: entity.monsterId ?? 'slime',
      floor: room.floorId,
      depth: room.depth,
      difficulty: player.currentDifficulty,
      varianceSeed: entity.varianceSeed,
      isElite: entity.isElite,
      endlessFloor: gameState.mode === 'endless' ? room.floorId : 0,
    });
  }

  private startBattle(entity: RoomEntity, room: Room): void {
    const player = Player.getInstance();
    const battle = BattleSystem.getInstance();
    const monster = this.buildMonsterFrom(entity, room);

    // Boss战前再次战力检测（玩家可能变强/变弱后回来）
    if (monster instanceof Boss) {
      if (player.currentDifficulty !== 'lullaby') {
        (monster as Boss).applyPowerCheck(player.combatPower());
      }
    }

    const forecast = battle.forecast(player, monster);
    if (!forecast.win) {
      const forecastText = `预计战斗 ${forecast.turns} 回合后你将倒下（剩余生命 0）。\n${dataManager.text('bossUnderpowerGamble')}`;
      if (this.confirmBattle) {
        this.confirmBattle(monster.name, forecastText, () => {
          this.resolveBattle(entity, room, monster);
        });
        return;
      }
    }
    this.resolveBattle(entity, room, monster);
  }

  private resolveBattle(entity: RoomEntity, room: Room, monster: Monster): void {
    const player = Player.getInstance();
    const battle = BattleSystem.getInstance();
    const result = battle.resolve(player, monster);

    if (!result.win) {
      eventBus.emit('playerDied', { cause: monster.name });
      return;
    }

    const world = WorldManager.getInstance();
    const bonusText: string[] = [];

    // 标记实体死亡
    world.markEntityState(gameState.mode, room.floorId, room.roomId, entity.id, { isAlive: false, isDefeated: true });

    // 奖励
    player.gainGold(result.goldGained);
    player.addExp(result.expGained);
    if (result.soulGained > 0) {
      player.gainSoul(result.soulGained);
      bonusText.push(`魂晶 +${result.soulGained}`);
    }

    // 掉落：装备/药水（Boss掉落在BossSystem单独处理）
    const isBoss = monster instanceof Boss;
    if (!isBoss) {
      const dropCfg = dataManager.config.monsterDrop;
      if (rng.chance(dropCfg.equipCap / 100)) {
        const equipGen = EquipmentGenerator.getInstance();
        const equip = equipGen.generate({
          baseItemId: equipGen.pickTemplate(room.floorId),
          floor: room.floorId,
          depth: room.depth,
          source: 'monster',
        });
        InventoryManager.getInstance().addEquipment(equip);
        result.droppedEquipmentIds.push(equip.id);
        bonusText.push(`获得装备：${equip.name}`);
      }
      if (rng.chance(dropCfg.potionChance)) {
        InventoryManager.getInstance().addItem('health_potion', 1);
        result.droppedItems.push({ itemId: 'health_potion', quantity: 1 });
        bonusText.push('获得 生命药水 ×1');
      }
      const colChance = monster.isElite ? dropCfg.eliteCollectibleChance : dropCfg.collectibleChance;
      if (rng.chance(colChance / 100)) {
        const col = CollectibleSystem.getInstance().pickRandomCollectible(
          CollectibleSystem.getInstance().monsterDropRarities(monster.isElite, false),
        );
        if (col) {
          CollectibleSystem.getInstance().addCollectible(col.id);
          result.droppedCollectibleId = col.id;
          bonusText.push(`获得藏品：${col.name}`);
        }
      }
    } else {
      const bossResult = BossSystem.getInstance().rollBossDrops(room.floorId, gameState.mode === 'endless' ? room.floorId : 0);
      if (bossResult.equipmentName) bonusText.push(`获得装备：${bossResult.equipmentName}（${bossResult.quality}）`);
      if (bossResult.collectibleName) bonusText.push(`获得藏品：${bossResult.collectibleName}`);
      BossSystem.getInstance().onBossDefeated(room, entity);
    }

    // 图鉴与事件
    BestiaryManager.getInstance().recordDefeat(entity.monsterId ?? entity.id);
    if (isBoss) {
      BestiaryManager.getInstance().recordDefeat(entity.id);
      eventBus.emit('bossDefeated', {
        bossId: entity.id,
        floor: room.floorId,
        name: monster.name,
        expGained: result.expGained,
        goldGained: result.goldGained,
        soulGained: result.soulGained,
        mode: gameState.mode,
      });
      CameraController.getInstance().shake(12, 500);
      eventBus.emit('notification', { message: dataManager.text('bossDefeated'), type: 'success', icon: '🏆' });
      SaveManager.getInstance().autoSaveTrigger();
    } else {
      eventBus.emit('monsterDefeated', {
        monsterId: entity.monsterId ?? entity.id,
        name: monster.name,
        expGained: result.expGained,
        goldGained: result.goldGained,
        position: { x: entity.x, y: entity.y },
        isElite: entity.isElite ?? false,
      });
    }

    eventBus.emit('battleEnded', { result });
    eventBus.emit('playerStatsChanged', {});

    if (this.showBattleResult) {
      this.showBattleResult(result, bonusText);
    }

    // 房间怪物清空 → on_defeat_all 事件
    const remaining = world.getLiveEntities(room).some(e => e.type === 'monster' || e.type === 'boss');
    if (!remaining) {
      EventManager.getInstance().onDefeatAll(room);
    }
  }

  // ============ 其他交互 ============

  private openChest(entity: RoomEntity, room: Room): void {
    const chestSystem = ChestSystem.getInstance();
    if (chestSystem.isChestLocked(room, entity)) {
      chestSystem.unlockChest(room, entity);
      return;
    }
    const summary = chestSystem.openChest(room, entity);
    const lines: string[] = [
      `金币 +${summary.gold}`,
      `经验 +${summary.exp}`,
    ];
    if (summary.soul > 0) lines.push(`魂晶 +${summary.soul}`);
    if (summary.potions > 0) lines.push(`生命药水 ×${summary.potions}`);
    if (summary.equipmentName) lines.push(`装备：${summary.equipmentName}（${dataManager.config.quality[summary.equipmentQuality ?? 'common'].name}）`);
    if (summary.collectibleName) lines.push(`藏品：${summary.collectibleName}`);
    eventBus.emit('notification', { message: `打开了${summary.tierName}：${lines.join('，')}`, type: 'success', icon: '📦' });
    eventBus.emit('playerStatsChanged', {});
    if (summary.tierName.includes('传说')) {
      SaveManager.getInstance().autoSaveTrigger();
    }
  }

  private talkNpc(entity: RoomEntity): void {
    const npc = dataManager.getNpc(entity.npcId ?? '');
    if (!npc) return;
    if (this.showNpcDialog) {
      this.showNpcDialog(npc.name, npc.icon, npc.lines);
    }
  }

  private openShop(entity: RoomEntity, room: Room): void {
    if (entity.merchantSeed !== undefined) {
      MerchantSystem.getInstance().generateInventory(entity.id, entity.merchantSeed, room.floorId);
    }
    eventBus.emit('shopOpened', { merchantEntityId: entity.id });
  }

  /** 站在楼梯上按键 */
  useStairIfStanding(): void {
    if (!this.canAct) return;
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    if (!room) return;
    const stair = world.entitiesAt(room, player.position.x, player.position.y).find(e => e.type === 'stair');
    if (!stair) return;
    if (gameState.mode === 'endless' && stair.stairDirection === 'up') {
      EndlessSystem.getInstance().advanceTo((stair.targetFloor ?? player.currentFloor + 1));
    }
    FloorManager.getInstance().useStair(stair);
  }

  /** 玩家当前所在格子的楼梯（UI提示用） */
  stairUnderPlayer(): RoomEntity | null {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    if (!room) return null;
    return world.entitiesAt(room, player.position.x, player.position.y).find(e => e.type === 'stair') ?? null;
  }

  /** 交互键（空格/回车）：楼梯/NPC/脚下实体 */
  interact(): void {
    const stair = this.stairUnderPlayer();
    if (stair) {
      this.useStairIfStanding();
      return;
    }
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    if (!room) return;
    // 面向的相邻格子NPC
    const dirMap: Record<string, [number, number]> = { south: [0, 1], north: [0, -1], east: [1, 0], west: [-1, 0] };
    const [dx, dy] = dirMap[player.facing] ?? [0, 1];
    const nx = player.position.x + dx;
    const ny = player.position.y + dy;
    for (const entity of world.entitiesAt(room, nx, ny)) {
      this.interactBlocking(entity, room);
      return;
    }
  }
}
