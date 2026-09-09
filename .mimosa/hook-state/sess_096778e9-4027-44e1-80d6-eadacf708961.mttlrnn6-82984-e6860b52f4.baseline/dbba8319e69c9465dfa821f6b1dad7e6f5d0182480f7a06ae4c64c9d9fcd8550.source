/**
 * 动态事件系统（规格 模块D）：on_enter/on_step/on_interact/on_defeat_all 触发、
 * 条件DSL、17种效果执行、一次性标记。触发时暂停游戏并弹出事件面板。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { FloorManager } from '../core/FloorManager';
import { Player } from '../entities/Player';
import { Monster } from '../entities/Monster';
import type { EventEffect, EventOption, Room, RoomEntity, RoomEventDef } from '../types';
import { rng } from '../utils/MathUtils';
import { InventoryManager } from './InventoryManager';
import { CollectibleSystem } from './CollectibleSystem';
import { QuestManager } from './QuestManager';
import { StatusEffectManager } from './StatusEffectManager';
import { ChestSystem } from './ChestSystem';
import { Logger } from '../utils/Logger';

export class EventManager {
  private static instance: EventManager;
  /** 已触发的一次性事件 */
  triggeredOnce = new Set<string>();
  /** 事件面板回调（由UI注入）：显示选项，选择后 resolve */
  private showPanel: ((event: RoomEventDef, options: EventOption[], choose: (index: number) => void) => void) | null = null;
  private activeEvent: RoomEventDef | null = null;
  /** 待播放的对话队列 */
  dialogQueue: string[] = [];

  private constructor() {
    eventBus.on('roomEntered', p => this.onRoomEntered(p.roomId, p.floor));
  }

  static getInstance(): EventManager {
    if (!EventManager.instance) {
      EventManager.instance = new EventManager();
    }
    return EventManager.instance;
  }

  bindPanel(show: (event: RoomEventDef, options: EventOption[], choose: (index: number) => void) => void): void {
    this.showPanel = show;
  }

  // ============ 触发入口 ============

  private onRoomEntered(roomId: string, floor: number): void {
    // on_enter 事件
    this.tryTrigger('on_enter', roomId, floor);
    // on_defeat_all 检查挂在战斗结束后（GameController调用）
  }

  /** 玩家每走一步 */
  onStep(room: Room): void {
    this.tryTrigger('on_step', room.roomId, room.floorId);
  }

  /** 房间怪物清空 */
  onDefeatAll(room: Room): void {
    this.tryTrigger('on_defeat_all', room.roomId, room.floorId);
  }

  /** 主动交互（NPC/可疑物体） */
  onInteract(room: Room): void {
    this.tryTrigger('on_interact', room.roomId, room.floorId);
  }

  private tryTrigger(triggerType: RoomEventDef['triggerType'], roomId: string, floor: number): void {
    if (this.activeEvent) return;
    for (const def of dataManager.events) {
      if (def.triggerType !== triggerType) continue;
      if (def.roomId !== null && def.roomId !== roomId) continue;
      if (def.minFloor !== undefined && floor < def.minFloor) continue;
      if (def.maxFloor !== undefined && floor > def.maxFloor) continue;
      if (def.once && this.triggeredOnce.has(this.instanceKey(def.id))) continue;
      if (def.condition && !this.checkCondition(def.condition)) continue;
      if (!rng.chance(def.triggerProbability)) continue;
      this.fire(def);
      return; // 每次只触发一个
    }
  }

  private instanceKey(eventId: string): string {
    // 全局事件按存档一次性；房间事件按房间一次性
    const def = dataManager.events.find(e => e.id === eventId);
    if (def?.roomId) {
      return `${gameState.seed}:${gameState.mode}:${eventId}`;
    }
    return `${gameState.seed}:${eventId}`;
  }

  fire(def: RoomEventDef): void {
    this.activeEvent = def;
    gameState.paused = true;
    eventBus.emit('eventTriggered', { eventId: def.id });

    const options = def.options.filter(opt => !opt.condition || this.checkCondition(opt.condition));
    const usable = options.length > 0 ? options : [{ text: '离开', effects: [] }];

    if (this.showPanel) {
      this.showPanel(def, usable, index => {
        this.executeEffects(usable[index].effects);
        this.finish(def);
      });
    } else {
      // 无UI时直接执行第一项（保险）
      this.executeEffects(usable[0].effects);
      this.finish(def);
    }
  }

  private finish(def: RoomEventDef): void {
    if (def.once) {
      this.triggeredOnce.add(this.instanceKey(def.id));
    }
    this.activeEvent = null;
    gameState.paused = false;
    eventBus.emit('gameResumed', {});
  }

  // ============ 条件DSL ============

  checkCondition(condition: string): boolean {
    const player = Player.getInstance();
    // 格式：a>=b / a<=b / hasItem:id / hasCollectible:true|false
    const ge = condition.match(/^(\w+)>=(\d+)$/);
    if (ge) {
      const value = this.getOperand(ge[1]);
      return value >= Number(ge[2]);
    }
    const le = condition.match(/^(\w+)<=(\d+)$/);
    if (le) {
      const value = this.getOperand(le[1]);
      return value <= Number(le[2]);
    }
    const hasItem = condition.match(/^hasItem:(\w+)$/);
    if (hasItem) {
      return InventoryManager.getInstance().hasItem(hasItem[1]);
    }
    const hasKey = condition.match(/^hasKey$/);
    if (hasKey) {
      return InventoryManager.getInstance().hasItem('key');
    }
    const hasCol = condition.match(/^hasCollectible:(true|false)$/);
    if (hasCol) {
      const any = player.collectibles.length > 0;
      return hasCol[1] === 'true' ? any : !any;
    }
    const hasColId = condition.match(/^hasCollectible:(\w+)$/);
    if (hasColId) {
      return player.hasCollectible(hasColId[1]);
    }
    Logger.warn(`[EventManager] 未知条件: ${condition}`);
    return true;
  }

  private getOperand(name: string): number {
    const player = Player.getInstance();
    switch (name) {
      case 'gold': return player.gold;
      case 'soul': return player.soul;
      case 'level': return player.level;
      case 'hp': return player.hp;
      case 'hpPct': return Math.floor(player.hp / player.maxHp * 100);
      case 'floor': return player.currentFloor;
      default: return 0;
    }
  }

  // ============ 效果执行器 ============

  executeEffects(effects: EventEffect[]): void {
    const player = Player.getInstance();
    for (const effect of effects) {
      try {
        this.executeEffect(effect, player);
      } catch (err) {
        Logger.error('[EventManager] 效果执行失败', effect, err);
      }
    }
    eventBus.emit('playerStatsChanged', {});
  }

  private executeEffect(effect: EventEffect, player: Player): void {
    const world = WorldManager.getInstance();
    const room = world.currentRoom;
    switch (effect.type) {
      case 'damage': {
        const dmg = Number(effect.value);
        player.takeDamage(dmg);
        eventBus.emit('hpChanged', { oldValue: player.hp + dmg, newValue: player.hp, delta: -dmg });
        break;
      }
      case 'heal':
        player.heal(Number(effect.value));
        break;
      case 'heal_full':
        player.healFull();
        break;
      case 'add_item':
        InventoryManager.getInstance().addItem(String(effect.value), effect.quantity ?? 1);
        break;
      case 'remove_item':
        if (String(effect.value) === 'gold') {
          player.gainGold(-(effect.quantity ?? Number(effect.value)));
        } else {
          InventoryManager.getInstance().removeItem(String(effect.value), effect.quantity ?? 1);
        }
        break;
      case 'add_status':
        StatusEffectManager.getInstance().apply(player, String(effect.value), 1, effect.duration);
        break;
      case 'remove_status':
        StatusEffectManager.getInstance().remove(player, String(effect.value));
        break;
      case 'spawn_monster': {
        if (!room) break;
        const monsterId = String(effect.value);
        const id = `event_mob_${monsterId}_${Date.now() % 100000}`;
        const pos = this.findFreeTile(room, player.position.x, player.position.y);
        if (pos) {
          room.entities.push({
            id, type: 'monster', x: pos.x, y: pos.y,
            monsterId, varianceSeed: Math.floor(Math.random() * 2 ** 30),
          });
          eventBus.emit('monsterSpawned', { monsterId, roomId: room.roomId });
          // 预构建怪物供图鉴/掉落（不强制战斗）
          void Monster;
        }
        break;
      }
      case 'show_dialog':
        this.dialogQueue.push(String(effect.value));
        eventBus.emit('dialogQueued', {});
        break;
      case 'add_exp':
        player.addExp(Number(effect.value));
        break;
      case 'add_gold':
        player.gainGold(Number(effect.value) * (effect.quantity ?? 1));
        break;
      case 'add_soul':
        player.gainSoul(Number(effect.value));
        break;
      case 'add_collectible':
        CollectibleSystem.getInstance().addCollectible(String(effect.value));
        break;
      case 'give_quest':
        QuestManager.getInstance().acceptQuest(String(effect.value));
        break;
      case 'complete_quest':
        QuestManager.getInstance().completeQuest(String(effect.value));
        break;
      case 'change_room': {
        const parts = String(effect.value).split(':');
        if (parts.length >= 3 && room) {
          world.switchRoom(parts[0], Number(parts[1]), Number(parts[2]));
        }
        break;
      }
      case 'teleport': {
        const parts = String(effect.value).split(':');
        // floor:room:x:y 或 room:x:y
        if (parts.length === 4) {
          FloorManager.getInstance().switchFloor(Number(parts[0]), {
            targetRoomId: parts[1],
            targetX: Number(parts[2]),
            targetY: Number(parts[3]),
          });
        } else if (parts.length === 3 && room) {
          world.switchRoom(parts[0], Number(parts[1]), Number(parts[2]));
        }
        break;
      }
      case 'open_chest': {
        if (!room) break;
        // 在玩家旁生成一个宝箱实体（玩家走近即可打开）
        const chestId = `event_chest_${Date.now() % 100000}`;
        const pos = this.findFreeTile(room, player.position.x, player.position.y);
        if (pos) {
          room.entities.push({
            id: chestId, type: 'chest', x: pos.x, y: pos.y,
            chestTier: (effect.value === 'auto' ? 'auto' : String(effect.value)) as RoomEntityChestTier,
          });
          void ChestSystem;
        }
        break;
      }
      default:
        Logger.warn(`[EventManager] 未实现的效果类型: ${(effect as { type: string }).type}`);
        break;
    }
  }

  private findFreeTile(room: Room, nearX: number, nearY: number): { x: number; y: number } | null {
    for (let radius = 2; radius < 8; radius++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const x = nearX + dx;
          const y = nearY + dy;
          if (x < 1 || y < 1 || x >= room.width - 1 || y >= room.height - 1) continue;
          if (room.tiles[y][x] !== 0) continue;
          if (world.hasEntityAt(room, x, y)) continue;
          return { x, y };
        }
      }
    }
    return null;
  }

  exportState(): string[] {
    return [...this.triggeredOnce];
  }

  loadState(triggered: string[]): void {
    this.triggeredOnce = new Set(triggered);
  }

  reset(): void {
    this.triggeredOnce.clear();
    this.dialogQueue = [];
    this.activeEvent = null;
  }
}

type RoomEntityChestTier = NonNullable<RoomEntity['chestTier']>;

// 简化实体占位检查的模块级引用
const world = {
  hasEntityAt(room: Room, x: number, y: number): boolean {
    const wm = WorldManager.getInstance();
    return wm.entitiesAt(room, x, y).some(e => e.type !== 'stair');
  },
};
