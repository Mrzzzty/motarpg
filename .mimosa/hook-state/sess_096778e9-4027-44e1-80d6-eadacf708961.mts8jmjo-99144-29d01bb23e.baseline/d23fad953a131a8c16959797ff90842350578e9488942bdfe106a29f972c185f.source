/**
 * 任务系统：教学引导任务链（自动接取：前置完成后自动激活）。
 * 目标类型：对话/击杀/开箱/穿戴/用药/到达楼层。
 */
import type { QuestDef, QuestReward, QuestState } from '../types';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import { EquipmentGenerator } from './EquipmentGenerator';
import { Logger } from '../utils/Logger';

export class QuestManager {
  private static instance: QuestManager;
  private quests = new Map<string, QuestState>();
  /** 楼层型任务记录的最高楼层 */
  private maxFloorReached = 1;

  private constructor() {
    for (const def of dataManager.quests.quests) {
      this.quests.set(def.id, { id: def.id, progress: 0, isCompleted: false, isAccepted: def.prerequisites.length === 0 });
    }
    this.bindEvents();
  }

  static getInstance(): QuestManager {
    if (!QuestManager.instance) QuestManager.instance = new QuestManager();
    return QuestManager.instance;
  }

  private bindEvents(): void {
    eventBus.on('npcTalked', p => this.progress('talk_npc', p.npcId));
    eventBus.on('monsterDefeated', p => {
      const def = this.findObjective('defeat_monster');
      if (def && (!def.objectives[0].targetId || def.objectives[0].targetId === p.entityId || this.matchByName(def, p.name))) {
        this.progress('defeat_monster');
      }
    });
    eventBus.on('chestOpened', () => this.progress('open_chest'));
    eventBus.on('equipmentEquipped', () => this.progress('equip_item'));
    eventBus.on('potionUsed', () => this.progress('use_potion'));
    eventBus.on('floorChanged', p => {
      this.maxFloorReached = Math.max(this.maxFloorReached, p.toFloor);
      for (const def of dataManager.quests.quests) {
        const obj = def.objectives[0];
        if (obj.type === 'reach_floor' && obj.value !== undefined) {
          const st = this.quests.get(def.id)!;
          if (st.isAccepted && !st.isCompleted && this.maxFloorReached >= obj.value) {
            this.complete(def);
          }
        }
      }
    });
  }

  /** 击杀目标按怪物名匹配（史莱姆等） */
  private matchByName(def: QuestDef, defeatedName: string): boolean {
    const targetId = def.objectives[0].targetId;
    const mon = dataManager.getMonster(targetId ?? '');
    return mon?.name === defeatedName || defeatedName.includes(mon?.name ?? '\u0000');
  }

  private findObjective(type: string): QuestDef | null {
    return dataManager.quests.quests.find(d => {
      const st = this.quests.get(d.id)!;
      return st.isAccepted && !st.isCompleted && d.objectives[0].type === type;
    }) ?? null;
  }

  private progress(type: string, targetId?: string): void {
    const def = this.findObjective(type);
    if (!def) return;
    const obj = def.objectives[0];
    if (obj.type !== type) return;
    if (type === 'talk_npc' && obj.targetId && obj.targetId !== targetId) return;
    const st = this.quests.get(def.id)!;
    st.progress += 1;
    eventBus.emit('questUpdated', { questId: def.id, progress: Math.min(st.progress, obj.quantity), total: obj.quantity });
    if (st.progress >= obj.quantity) this.complete(def);
  }

  private complete(def: QuestDef): void {
    const st = this.quests.get(def.id)!;
    if (st.isCompleted) return;
    st.isCompleted = true;
    this.grantRewards(def.rewards);
    eventBus.emit('questCompleted', { questId: def.id, name: def.name });
    Logger.debug(`[Quest] 完成 ${def.name}`);
    this.autoAcceptNext();
  }

  private autoAcceptNext(): void {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id)!;
      if (st.isAccepted) continue;
      if (def.prerequisites.every(pid => this.quests.get(pid)?.isCompleted)) {
        st.isAccepted = true;
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

  /** 当前追踪的任务（首个已接取未完成） */
  get trackedQuest(): { def: QuestState; quest: QuestDef } | null {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id)!;
      if (st.isAccepted && !st.isCompleted) return { def: st, quest: def };
    }
    return null;
  }

  all(): { state: QuestState; def: QuestDef }[] {
    return dataManager.quests.quests.map(def => ({ state: this.quests.get(def.id)!, def }));
  }

  exportStates(): QuestState[] {
    return [...this.quests.values()];
  }

  restoreStates(states: QuestState[], maxFloor: number): void {
    for (const st of states) this.quests.set(st.id, { ...st });
    this.maxFloorReached = maxFloor;
    this.autoAcceptNext();
  }
}
