/**
 * 战斗系统：撞怪/点击怪物触发的自动回合制战斗。
 * 公式：伤害 = max(1, 攻击×(1±浮动) − 防御) + 业火附加；暴击×1.8；闪避完全规避；
 * 嗜血按造成伤害回复；屠龙对Boss增伤；血量<30%自动喝最优药水。
 */
import type { BattleLogLine, BattleResult, MapEntity } from '../types';
import { Player } from '../entities/Player';
import { WorldManager } from '../core/WorldManager';
import { StatCalculator } from '../utils/StatCalculator';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { rng } from '../utils/MathUtils';
import { EquipmentGenerator } from './EquipmentGenerator';
import { ChestSystem } from './ChestSystem';

export class BattleSystem {
  private static instance: BattleSystem;
  private constructor() {}
  static getInstance(): BattleSystem {
    if (!BattleSystem.instance) BattleSystem.instance = new BattleSystem();
    return BattleSystem.instance;
  }

  /** 执行战斗并结算（返回结果；胜利时调用方标记实体消亡） */
  battle(entity: MapEntity): BattleResult {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const def = dataManager.getMonster(entity.monsterId ?? '');
    const floorId = player.state.currentFloor;
    if (!def) throw new Error(`未知怪物: ${entity.monsterId}`);
    const mon = StatCalculator.getInstance().monsterStats(def, floorId, entity.kind === 'boss' ? false : !!entity.isElite);

    const cfg = dataManager.config.battle;
    const stats = player.stats();
    const log: BattleLogLine[] = [];
    let monHp = mon.hp;
    let damageTaken = 0;
    let turns = 0;
    let potionUsed: string | null = null;

    const line = (text: string, kind: BattleLogLine['kind']) => log.push({ turn: turns, text, kind });
    line(`遭遇 ${mon.name}！`, 'system');

    while (player.state.hp > 0 && monHp > 0 && turns < cfg.maxTurns) {
      turns++;
      // 玩家回合
      let dealt = 0;
      if (rng.chance(mon.isBoss ? stats.critRate / 100 : stats.critRate / 100)) {
        const base = Math.max(cfg.minDamage, Math.round((stats.attack - mon.defense) * (1 + (Math.random() * 2 - 1) * cfg.damageJitter)));
        dealt = Math.round(base * cfg.critMultiplier) + stats.fireDamage;
        line(`暴击！对${mon.name}造成 ${dealt} 点伤害`, 'player');
      } else {
        const base = Math.max(cfg.minDamage, Math.round((stats.attack - mon.defense) * (1 + (Math.random() * 2 - 1) * cfg.damageJitter)));
        dealt = base + stats.fireDamage;
        line(`对${mon.name}造成 ${dealt} 点伤害${stats.fireDamage > 0 ? `（业火+${stats.fireDamage}）` : ''}`, 'player');
      }
      if (mon.isBoss) dealt = Math.round(dealt * (1 + stats.bossDamage / 100));
      monHp -= dealt;
      if (stats.lifesteal > 0 && player.state.hp < player.maxHp) {
        const heal = Math.round(dealt * stats.lifesteal / 100);
        if (heal > 0) {
          player.heal(heal);
          line(`嗜血回复 ${heal} 生命`, 'player');
        }
      }
      if (monHp <= 0) break;

      // 怪物回合
      if (rng.chance(stats.dodgeRate / 100)) {
        line(`闪避了${mon.name}的攻击`, 'player');
      } else {
        const raw = Math.max(cfg.minDamage, Math.round((mon.attack - stats.defense) * (1 + (Math.random() * 2 - 1) * cfg.damageJitter)));
        player.damage(raw);
        damageTaken += raw;
        line(`${mon.name}对你造成 ${raw} 点伤害`, 'monster');
      }

      // 自动喝药（生命<30%时）
      if (player.state.hp > 0 && player.state.hp < player.maxHp * 0.3) {
        const tier = player.bestPotionFor(player.maxHp - player.state.hp);
        if (tier) {
          const potionDef = dataManager.getPotion(tier)!;
          player.usePotion(tier);
          potionUsed = potionDef.name;
          line(`自动饮下${potionDef.name}`, 'system');
        }
      }
    }

    const timeout = turns >= cfg.maxTurns;
    const win = monHp <= 0 || (timeout && monHp / mon.hp < player.state.hp / player.maxHp);

    const result: BattleResult = {
      win,
      log,
      damageTaken,
      turns,
      expGained: 0,
      goldGained: 0,
      monsterName: mon.name,
      isBoss: mon.isBoss,
      isElite: mon.isElite,
    };

    if (win) {
      result.expGained = mon.exp;
      result.goldGained = mon.gold;
      player.gainExp(mon.exp);
      player.gainGold(mon.gold);
      world.markDefeated(entity.id);
      line(`击败${mon.name}！获得 ${mon.exp} 经验、${mon.gold} 金币`, 'reward');
      // 掉落：Boss必掉装备；普通怪3%装备、2%低档药水
      const dropCfg = dataManager.config.monsterDrops;
      if (mon.isBoss || rng.chance(dropCfg.equipmentChance)) {
        const equip = EquipmentGenerator.getInstance().generate(mon.isBoss ? 'boss' : 'monster', { floorId });
        player.addEquipment(equip);
        line(`掉落了 ${equip.name}`, 'reward');
      }
      if (!mon.isBoss && rng.chance(dropCfg.potionChance)) {
        const tier = ChestSystem.getInstance().potionTierLower(floorId, rng.randInt(1, 2));
        if (tier) {
          player.addPotion(tier, 1);
          line(`掉落了 ${dataManager.getPotion(tier)?.name}`, 'reward');
        }
      }
      if (potionUsed) line(`战斗中消耗了${potionUsed}`, 'system');
      eventBus.emit('monsterDefeated', {
        entityId: entity.id, name: mon.name, isElite: mon.isElite, isBoss: mon.isBoss,
      });
      if (mon.isBoss) eventBus.emit('bossDefeated', { floor: floorId, name: mon.name });
    } else if (player.state.hp <= 0) {
      line(`你被${mon.name}击败了……`, 'monster');
      eventBus.emit('playerDied', { cause: mon.name });
    } else {
      line(`战斗胶着，你被迫撤退`, 'system');
      // 撤退：不消灭怪物，玩家留在原地
    }

    eventBus.emit('battleEnded', { result });
    return result;
  }

  /** 战斗预测（悬浮窗展示：能否获胜/预计损血） */
  forecast(entity: MapEntity): { winnable: boolean; estDamage: number } {
    const player = Player.getInstance();
    const def = dataManager.getMonster(entity.monsterId ?? '');
    if (!def) return { winnable: false, estDamage: 0 };
    const mon = StatCalculator.getInstance().monsterStats(def, player.state.currentFloor, !!entity.isElite);
    const stats = player.stats();
    const dmgOut = Math.max(1, stats.attack - mon.defense) + stats.fireDamage;
    const dmgIn = Math.max(1, mon.attack - stats.defense);
    const turnsToKill = Math.ceil(mon.hp / dmgOut);
    const estDamage = turnsToKill * dmgIn * (1 - stats.dodgeRate / 100);
    return { winnable: estDamage < player.state.hp, estDamage: Math.round(estDamage) };
  }
}
