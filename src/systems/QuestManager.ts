/**
 * 任务系统：教学引导任务链（自动接取：前置完成后自动激活）。
 *
 * 优化要点（让任务能"正确引导玩家"）：
 * - 支持**多目标**任务：`objectives` 顺序推进，`state.progress` 为当前目标内的进度，
 *   `state.objectiveIndex` 记录推进到第几个目标；
 * - 事件到达时**推进所有**「已接取未完成且当前目标匹配」的任务（旧实现只推进首个匹配项，
 *   多条并行任务会有一条永远不涨进度）；
 * - 击杀按**怪物 id** 精确匹配（`monsterDefeated` 已携带 `monsterId`），避免同名/包含误判；
 * - 补齐 `descend_stair`（向下换层）目标；`reach_floor` 按历史最高楼层判定；
 * - 提供 `guideFor()`：给出**目标位置**（房间 / 楼层 / 坐标）与下一步提示，供右栏追踪、
 *   任务面板与小地图高亮指路。
 */
import type { MapEntity, QuestDef, QuestObjective, QuestReward, QuestState } from '../types';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import { EquipmentGenerator } from './EquipmentGenerator';
import { Logger } from '../utils/Logger';

/** 任务引导信息（供右栏追踪 / 任务面板 / 小地图高亮） */
export interface QuestGuide {
  /** 当前目标的一句话（含进度） */
  objective: string;
  /** 下一步提示（去哪儿 / 做什么） */
  hint: string;
  /** 目标所在楼层（与当前层不同 → 需要乘楼梯前往） */
  floor?: number;
  /** 目标位置（仅当目标在当前层时给出坐标，用于小地图高亮） */
  target?: { roomId: string; roomName: string; x: number; y: number };
}

/** 事件上下文（用于目标匹配） */
interface MatchCtx {
  npcId?: string;
  monsterId?: string;
  name?: string;
}

export class QuestManager {
  private static instance: QuestManager;
  private quests = new Map<string, QuestState>();
  /** 楼层型任务记录的最高楼层 */
  private maxFloorReached = 1;

  private constructor() {
    for (const def of dataManager.quests.quests) {
      this.quests.set(def.id, {
        id: def.id, progress: 0, isCompleted: false,
        isAccepted: def.prerequisites.length === 0,
        objectiveIndex: 0,
      });
    }
    this.bindEvents();
  }

  static getInstance(): QuestManager {
    if (!QuestManager.instance) QuestManager.instance = new QuestManager();
    return QuestManager.instance;
  }

  private bindEvents(): void {
    eventBus.on('npcTalked', p => this.progressEvent('talk_npc', { npcId: p.npcId }));
    eventBus.on('monsterDefeated', p => this.progressEvent('defeat_monster', { monsterId: p.monsterId, name: p.name }));
    eventBus.on('chestOpened', () => this.progressEvent('open_chest', {}));
    // 卸下装备也会发 equipmentEquipped（equipmentId 为空）→ 仅装配时计数
    eventBus.on('equipmentEquipped', p => { if (p.equipmentId) this.progressEvent('equip_item', {}); });
    eventBus.on('potionUsed', () => this.progressEvent('use_potion', {}));
    eventBus.on('floorChanged', p => this.onFloorChanged(p.fromFloor, p.toFloor));
  }

  // ============ 目标推进 ============

  /** 当前目标（越界时取最后一个） */
  private currentObjective(def: QuestDef, st: QuestState): QuestObjective {
    const idx = Math.min(st.objectiveIndex ?? 0, def.objectives.length - 1);
    return def.objectives[idx];
  }

  /** 目标是否匹配本次事件 */
  private matches(obj: QuestObjective, ctx: MatchCtx): boolean {
    switch (obj.type) {
      case 'talk_npc':
        return !obj.targetId || obj.targetId === ctx.npcId;
      case 'defeat_monster': {
        if (!obj.targetId) return true;
        if (ctx.monsterId) return obj.targetId === ctx.monsterId;
        // 兜底（旧事件无 monsterId）：按怪物名匹配
        const mon = dataManager.getMonster(obj.targetId);
        return !!mon && !!ctx.name && (ctx.name === mon.name || ctx.name.includes(mon.name));
      }
      default:
        return true;
    }
  }

  /** 推进所有「已接取未完成且当前目标类型/目标匹配」的任务 */
  private progressEvent(type: QuestObjective['type'], ctx: MatchCtx): void {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id)!;
      if (!st.isAccepted || st.isCompleted) continue;
      const obj = this.currentObjective(def, st);
      if (obj.type !== type) continue;
      if (!this.matches(obj, ctx)) continue;
      this.advance(def, st, obj);
    }
  }

  /** 楼层变化：处理 reach_floor / descend_stair 目标 */
  private onFloorChanged(fromFloor: number, toFloor: number): void {
    this.maxFloorReached = Math.max(this.maxFloorReached, toFloor);
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id)!;
      if (!st.isAccepted || st.isCompleted) continue;
      const obj = this.currentObjective(def, st);
      const reached = (obj.type === 'reach_floor' && obj.value !== undefined && this.maxFloorReached >= obj.value)
        || (obj.type === 'descend_stair' && toFloor > fromFloor);
      if (reached) this.advance(def, st, obj);
    }
  }

  /** 目标 +1；达标则切换到下一个目标或完成任务 */
  private advance(def: QuestDef, st: QuestState, obj: QuestObjective): void {
    st.progress += 1;
    if (st.progress < obj.quantity) {
      eventBus.emit('questUpdated', { questId: def.id, progress: st.progress, total: obj.quantity });
      return;
    }
    const next = (st.objectiveIndex ?? 0) + 1;
    if (next < def.objectives.length) {
      st.objectiveIndex = next;
      st.progress = 0;
      const no = this.currentObjective(def, st);
      eventBus.emit('questUpdated', { questId: def.id, progress: 0, total: no.quantity });
      return;
    }
    st.progress = obj.quantity;
    this.complete(def, st);
  }

  private complete(def: QuestDef, st: QuestState): void {
    if (st.isCompleted) return;
    st.isCompleted = true;
    this.grantRewards(def.rewards);
    eventBus.emit('questCompleted', { questId: def.id, name: def.name });
    Logger.debug(`[Quest] 完成 ${def.name}`);
    this.autoAcceptNext();
  }

  /** 前置全部完成 → 自动接取（并广播，供 UI 提示 / 刷新） */
  private autoAcceptNext(): void {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id)!;
      if (st.isAccepted) continue;
      if (def.prerequisites.every(pid => this.quests.get(pid)?.isCompleted)) {
        st.isAccepted = true;
        st.objectiveIndex = 0;
        st.progress = 0;
        eventBus.emit('questAccepted', { questId: def.id });
      }
    }
  }

  private grantRewards(rewards: QuestReward[]): void {
    const player = Player.getInstance();
    for (const r of rewards) {
      switch (r.type) {
        case 'gold': player.gainGold(r.value ?? 0); break;
        case 'exp': player.gainExp(r.value ?? 0); break;
        case 'keys': player.state.keys += r.value ?? 1; break;
        case 'potion': if (r.tier) player.addPotion(r.tier, r.value ?? 1); break;
        case 'equipment': {
          const equip = EquipmentGenerator.getInstance().generate('quest', { forcedQuality: r.quality ?? 'common' });
          player.addEquipment(equip);
          break;
        }
        default: break;
      }
    }
  }

  // ============ 查询接口 ============

  /** 当前追踪的任务（首个已接取未完成） */
  get trackedQuest(): { def: QuestState; quest: QuestDef } | null {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id)!;
      if (st.isAccepted && !st.isCompleted) return { def: st, quest: def };
    }
    return null;
  }

  /** 全部进行中的任务（已接取未完成，按数据顺序） */
  activeQuests(): { state: QuestState; def: QuestDef }[] {
    return dataManager.quests.quests
      .filter(def => {
        const st = this.quests.get(def.id)!;
        return st.isAccepted && !st.isCompleted;
      })
      .map(def => ({ state: this.quests.get(def.id)!, def }));
  }

  all(): { state: QuestState; def: QuestDef }[] {
    return dataManager.quests.quests.map(def => ({ state: this.quests.get(def.id)!, def }));
  }

  /** 目标的一句话文案（不含进度） */
  objectiveLabel(obj: QuestObjective): string {
    switch (obj.type) {
      case 'talk_npc': return `与「${dataManager.getNpc(obj.targetId ?? '')?.name ?? 'NPC'}」对话`;
      case 'defeat_monster': return `击败「${obj.targetId ? (dataManager.getMonster(obj.targetId)?.name ?? '目标') : '敌人'}」`;
      case 'open_chest': return '开启一个宝箱';
      case 'equip_item': return '穿戴一件装备';
      case 'use_potion': return '使用一次药水';
      case 'reach_floor': return `到达第 ${obj.value ?? '?'} 层`;
      case 'descend_stair': return '向下一层前进';
    }
  }

  /** 引导信息：目标位置 + 下一步提示 */
  guideFor(def: QuestDef, st: QuestState): QuestGuide {
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    const curFloor = floor?.floorId ?? Player.getInstance().state.currentFloor;
    const obj = this.currentObjective(def, st);
    const objective = `${this.objectiveLabel(obj)}（${Math.min(st.progress, obj.quantity)}/${obj.quantity}）`;

    const roomName = (roomId: string): string => {
      const r = world.getRoom(roomId);
      return dataManager.texts.roomNames?.[r?.type ?? ''] ?? r?.type ?? '未知区域';
    };
    /** 在当前层查找首个满足条件的「可交互且未失效」实体 */
    const findIn = (pred: (e: MapEntity) => boolean): { roomId: string; x: number; y: number } | null => {
      if (!floor) return null;
      for (const room of floor.rooms) {
        for (const e of room.entities) {
          if (!pred(e)) continue;
          if ((e.kind === 'monster' || e.kind === 'boss') && !world.isEntityAlive(e)) continue;
          if (e.kind === 'chest' && world.isChestOpened(e)) continue;
          return { roomId: room.id, x: e.x, y: e.y };
        }
      }
      return null;
    };
    const asTarget = (hit: { roomId: string; x: number; y: number }) =>
      ({ roomId: hit.roomId, roomName: roomName(hit.roomId), x: hit.x, y: hit.y });

    switch (obj.type) {
      case 'talk_npc': {
        const hit = findIn(e => e.kind === 'npc' && (!obj.targetId || e.npcId === obj.targetId));
        if (hit) return { objective, hint: `前往【${roomName(hit.roomId)}】与其对话`, target: asTarget(hit) };
        return { objective, hint: '本层没有目标 NPC，继续深入塔中寻找' };
      }
      case 'defeat_monster': {
        const monName = obj.targetId ? (dataManager.getMonster(obj.targetId)?.name ?? '目标') : '敌人';
        const hit = findIn(e => (e.kind === 'monster' || e.kind === 'boss') && (!obj.targetId || e.monsterId === obj.targetId));
        if (hit) return { objective, hint: `前往【${roomName(hit.roomId)}】击败「${monName}」`, target: asTarget(hit) };
        return { objective, hint: `本层暂无「${monName}」，继续深入塔中寻找` };
      }
      case 'open_chest': {
        const hit = findIn(e => e.kind === 'chest');
        if (hit) return { objective, hint: `前往【${roomName(hit.roomId)}】开启宝箱`, target: asTarget(hit) };
        return { objective, hint: '本层暂无可开启宝箱，前往下一层继续寻找' };
      }
      case 'equip_item': {
        const has = Player.getInstance().unequippedBag.length > 0;
        return { objective, hint: has ? '按 B 打开背包，双击装备即可穿戴' : '先开箱 / 击败怪物获得装备，再按 B 穿戴' };
      }
      case 'use_potion': {
        const has = Object.values(Player.getInstance().state.potions).some(n => n > 0);
        return { objective, hint: has ? '按 B 打开背包 → 药水页点击「使用」，或拖到底部快捷栏后按数字键' : '先开箱 / 向商人购买药水，再按 B 使用' };
      }
      case 'reach_floor': {
        const v = obj.value ?? curFloor + 1;
        if (curFloor >= v) return { objective, hint: `已到达第 ${v} 层` };
        const hit = findIn(e => e.kind === 'stair');
        if (hit) return { objective, hint: `走【${roomName(hit.roomId)}】的楼梯前往第 ${v} 层`, target: asTarget(hit) };
        return { objective, hint: `寻找楼梯前往第 ${v} 层` };
      }
      case 'descend_stair': {
        const hit = findIn(e => e.kind === 'stair');
        if (hit) return { objective, hint: `走【${roomName(hit.roomId)}】的楼梯向下前进`, target: asTarget(hit) };
        return { objective, hint: '寻找向下的楼梯继续前进' };
      }
    }
  }

  // ============ 存档 ============

  exportStates(): QuestState[] {
    return [...this.quests.values()];
  }

  restoreStates(states: QuestState[], maxFloor: number): void {
    for (const st of states) {
      this.quests.set(st.id, { objectiveIndex: 0, ...st });
    }
    this.maxFloorReached = maxFloor;
    this.autoAcceptNext();
  }
}
