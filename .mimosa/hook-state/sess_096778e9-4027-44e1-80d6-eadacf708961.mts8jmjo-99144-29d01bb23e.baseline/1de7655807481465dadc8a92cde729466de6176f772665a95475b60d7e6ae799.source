/**
 * 状态效果管理器（规格 模块A）：施加/移除/回合钩子。
 * 效果元数据来自 statusEffects.json，数值逻辑按 effectId 分发。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import type { Combatant, StatusEffectDef, StatusEffectInstance } from '../types';

export class StatusEffectManager {
  private static instance: StatusEffectManager;

  private constructor() {}

  static getInstance(): StatusEffectManager {
    if (!StatusEffectManager.instance) {
      StatusEffectManager.instance = new StatusEffectManager();
    }
    return StatusEffectManager.instance;
  }

  getDef(effectId: string): StatusEffectDef | undefined {
    return dataManager.getStatusEffect(effectId);
  }

  apply(target: Combatant, effectId: string, stacks = 1, duration?: number): void {
    const def = this.getDef(effectId);
    if (!def) return;
    const existing = target.statusEffects.find(s => s.effectId === effectId);
    if (existing) {
      if (def.stackable) {
        existing.stacks = Math.min(def.maxStacks ?? 99, existing.stacks + stacks);
        existing.remainingTurns = duration ?? def.duration;
      } else {
        existing.remainingTurns = Math.max(existing.remainingTurns, duration ?? def.duration);
      }
    } else {
      target.statusEffects.push({
        effectId,
        stacks: def.stackable ? Math.min(stacks, def.maxStacks ?? 99) : 1,
        remainingTurns: duration ?? def.duration,
      });
    }
    eventBus.emit('statusApplied', { targetId: target.uid, effectId, stacks, duration: duration ?? def.duration });
  }

  remove(target: Combatant, effectId: string): void {
    const idx = target.statusEffects.findIndex(s => s.effectId === effectId);
    if (idx >= 0) {
      target.statusEffects.splice(idx, 1);
      eventBus.emit('statusRemoved', { targetId: target.uid, effectId });
    }
  }

  stacksOf(target: Combatant, effectId: string): number {
    return target.statusEffects.find(s => s.effectId === effectId)?.stacks ?? 0;
  }

  /**
   * 回合开始：DOT伤害（中毒/灼烧）、冰冻跳过判定。
   * 返回 true 表示该目标本回合被冻结无法行动。
   */
  processTurnStart(target: Combatant, attackerLevel = 1, log?: (line: { text: string; kind: string }) => void): boolean {
    let frozen = false;
    for (const inst of [...target.statusEffects]) {
      const def = this.getDef(inst.effectId);
      if (!def) continue;
      switch (inst.effectId) {
        case 'poison': {
          const dmg = Math.max(1, Math.floor(target.maxHp * 0.05 * inst.stacks));
          target.takeDamage(dmg);
          log?.({ text: `${target.name} 因中毒损失 ${dmg} 点生命`, kind: 'status' });
          break;
        }
        case 'burn': {
          const dmg = Math.max(1, Math.floor((10 + attackerLevel * 2) * inst.stacks));
          target.takeDamage(dmg);
          log?.({ text: `${target.name} 被灼烧，损失 ${dmg} 点生命`, kind: 'status' });
          break;
        }
        case 'freeze':
          frozen = true;
          log?.({ text: `${target.name} 被冰冻，无法行动`, kind: 'status' });
          break;
        default:
          break;
      }
    }
    return frozen;
  }

  /** 回合结束：持续时间递减，归零移除 */
  processTurnEnd(target: Combatant): void {
    for (const inst of [...target.statusEffects]) {
      if (inst.remainingTurns < 0) continue; // 永久
      inst.remainingTurns -= 1;
      if (inst.remainingTurns <= 0) {
        // 护盾被击破或自然消失均移除
        this.remove(target, inst.effectId);
      }
    }
  }

  /** 伤害接收修正（护盾吸收） */
  applyReceiveModifiers(target: Combatant, damage: number, shieldPool: { value: number }): number {
    const shieldStacks = this.stacksOf(target, 'shield');
    if (shieldStacks > 0 && shieldPool.value > 0 && damage > 0) {
      const absorbed = Math.min(shieldPool.value, damage);
      shieldPool.value -= absorbed;
      const rest = damage - absorbed;
      if (shieldPool.value <= 0) {
        this.remove(target, 'shield');
      }
      return rest;
    }
    return damage;
  }

  /** 清除目标全部效果 */
  clearAll(target: Combatant): void {
    for (const inst of [...target.statusEffects]) {
      this.remove(target, inst.effectId);
    }
  }

  /** 图标+剩余回合的展示信息 */
  describe(inst: StatusEffectInstance): { def: StatusEffectDef; label: string } | null {
    const def = this.getDef(inst.effectId);
    if (!def) return null;
    const label = def.stackable && inst.stacks > 1
      ? `${def.name}×${inst.stacks}`
      : def.name;
    return { def, label };
  }
}
