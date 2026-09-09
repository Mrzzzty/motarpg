/**
 * 战斗系统（规格 2.3）：战斗公式、回合流程、掉落结算。
 * 战斗为瞬时自动结算（经典魔塔式），完整日志供UI展示。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import { Boss } from '../entities/Boss';
import { Monster } from '../entities/Monster';
import { StatusEffectManager } from './StatusEffectManager';
import type { BattleForecast, BattleLogLine, BattleResult, Combatant } from '../types';
import { rng } from '../utils/MathUtils';

interface SimContext {
  playerAtk: number;
  playerDef: number;
  playerCrit: number;
  playerDodge: number;
  playerDamageBonus: number;
  lifesteal: number;
  fireDamage: number;
  poisonOnHit: number;
  thorns: number;
  bossDamage: number;
}

export class BattleSystem {
  private static instance: BattleSystem;
  private statusManager = StatusEffectManager.getInstance();
  private currentIsBossBattle = false;

  private constructor() {}

  static getInstance(): BattleSystem {
    if (!BattleSystem.instance) {
      BattleSystem.instance = new BattleSystem();
    }
    return BattleSystem.instance;
  }

  get isBossBattle(): boolean {
    return this.currentIsBossBattle;
  }

  /** 组装玩家战斗上下文（含装备词条与藏品修正） */
  private playerContext(player: Player): SimContext {
    const mods = player.getCombatModifiers();
    return {
      playerAtk: player.getFinalAttack(),
      playerDef: player.getFinalDefense(),
      playerCrit: player.getFinalCritRate(),
      playerDodge: player.getFinalDodgeRate(),
      playerDamageBonus: player.getFinalDamageBonus(),
      lifesteal: mods.lifesteal,
      fireDamage: mods.fireDamage,
      poisonOnHit: mods.poisonOnHit,
      thorns: mods.thorns,
      bossDamage: mods.bossDamage,
    };
  }

  /** 战斗预测（死亡确认用），不修改任何状态 */
  forecast(player: Player, monster: Monster): BattleForecast {
    const snapshot = monster.refreshStats();
    void snapshot;
    monster.hp = monster.maxHp;
    // 快照玩家状态效果，预测后恢复（避免DOT等副作用泄漏）
    const statusBackup = player.statusEffects.map(s => ({ ...s }));
    const hpBackup = player.hp;
    const boss = monster instanceof Boss ? monster : null;
    const flagsBackup = boss ? { ...boss.affixFlags } : null;
    const sim = this.simulate(player, monster, false);
    player.statusEffects = statusBackup.map(s => ({ ...s }));
    player.hp = hpBackup;
    if (boss && flagsBackup) boss.affixFlags = flagsBackup;
    return {
      win: sim.win,
      damageTaken: sim.damageTaken,
      turns: sim.turns,
      remainingHp: player.hp - sim.damageTaken,
    };
  }

  /** 正式结算：修改玩家状态并产出奖励 */
  resolve(player: Player, monster: Monster): BattleResult {
    this.currentIsBossBattle = monster instanceof Boss;
    monster.refreshStats();
    monster.hp = monster.maxHp;
    const sim = this.simulate(player, monster, true);

    const result: BattleResult = {
      win: sim.win,
      log: sim.log,
      damageTaken: sim.damageTaken,
      turns: sim.turns,
      expGained: 0,
      goldGained: 0,
      soulGained: 0,
      droppedItems: [],
      droppedEquipmentIds: [],
      droppedCollectibleId: null,
      isBoss: monster instanceof Boss,
      monsterName: monster.name,
    };

    if (!sim.win) {
      return result;
    }

    // 奖励结算（经验/金币已含楼层×深度×难度倍率，此处叠加玩家加成）
    const mods = player.getCombatModifiers();
    const expBonus = 1 + mods.expBonus;
    const goldBonus = 1 + mods.goldBonus;
    const soulBonus = 1 + mods.soulBonus;
    const endlessReward = 1 + (monster instanceof Boss && monster.endlessFloor > 0
      ? dataManager.config.endless.rewardBonus : 0);

    result.expGained = Math.round(monster.expReward * expBonus * (monster instanceof Boss ? endlessReward : 1));
    result.goldGained = Math.round(monster.goldReward * goldBonus * (monster instanceof Boss ? endlessReward : 1));

    const dropCfg = dataManager.config.monsterDrop;
    if (monster instanceof Boss) {
      result.soulGained = Math.max(1, Math.round(monster.bossReward.soul * soulBonus));
    } else if (monster.isElite || rng.chance(dropCfg.soulChance)) {
      result.soulGained = Math.max(1, Math.round((monster.isElite ? 2 : 1) * soulBonus));
    }

    // 战斗后清除玩家战斗内状态效果
    this.statusManager.clearAll(player as unknown as Combatant);
    this.currentIsBossBattle = false;
    return result;
  }

  // ================================================================
  // 回合模拟核心
  // ================================================================

  private simulate(player: Player, monster: Monster, applyToPlayer: boolean): {
    win: boolean; damageTaken: number; turns: number; log: BattleLogLine[];
  } {
    const cfg = dataManager.config.battle;
    const ctx = this.playerContext(player);
    const log: BattleLogLine[] = [];
    let playerHp = player.hp;
    const playerMaxHp = player.maxHp;
    const shieldPool = { value: this.statusManager.stacksOf(player as unknown as Combatant, 'shield') > 0 ? player.getFinalDefense() * 2 : 0 };
    let damageTaken = 0;
    let turns = 0;
    let win = false;

    // Boss战力修正（以弱制强：最少回合数）
    const boss = monster instanceof Boss ? monster : null;
    const underdogCap = boss && boss.modifier === 'underdog'
      ? Math.ceil(monster.maxHp / cfg.underdogMinTurns) : Infinity;
    if (boss) {
      // 诅咒词缀：玩家暴击减半
      if (boss.hasAffix('boss_cursed')) ctx.playerCrit *= 0.5;
    }

    let turn = 0;
    while (turn < cfg.maxTurns) {
      turn += 1;
      turns = turn;

      // ---- 玩家回合开始（DOT/冰冻） ----
      const playerFrozen = this.statusManager.processTurnStart(
        player as unknown as Combatant, monster.floor,
        l => log.push({ turn, text: l.text, kind: 'status' }),
      );
      if (playerHp <= 0) break;

      if (!playerFrozen && monster.isAlive()) {
        // 玩家攻击
        if (rng.next() < monster.dodgeRate) {
          log.push({ turn, text: `${monster.name} 闪避了你的攻击`, kind: 'monster' });
        } else {
          let damage = Math.max(1, ctx.playerAtk - monster.getFinalDefense() * cfg.defenseMitigation);
          const isCrit = rng.next() < ctx.playerCrit;
          if (isCrit) damage *= cfg.critMultiplier;
          let finalDamage = damage * (1 + ctx.playerDamageBonus);
          if (boss) finalDamage *= 1 + ctx.bossDamage;
          if (ctx.fireDamage > 0) finalDamage += ctx.fireDamage;
          finalDamage = Math.floor(finalDamage);
          // 以弱制强：单回合伤害上限
          finalDamage = Math.min(finalDamage, underdogCap);

          // 不朽词缀：生命首次低于10%时保留1回合无敌
          if (boss && boss.hasAffix('boss_immortal') && !boss.affixFlags.immortalUsed
            && monster.hp - finalDamage < monster.maxHp * 0.1) {
            boss.affixFlags.immortalUsed = true;
            finalDamage = Math.max(0, monster.hp - Math.ceil(monster.maxHp * 0.1));
            log.push({ turn, text: `${monster.name} 触发【不朽】，圣光护住了它`, kind: 'status' });
          }

          monster.takeDamage(finalDamage);
          log.push({
            turn,
            text: isCrit ? `暴击！你对 ${monster.name} 造成了 ${finalDamage} 点伤害` : `你对 ${monster.name} 造成了 ${finalDamage} 点伤害`,
            kind: 'player',
          });

          // 吸血
          if (ctx.lifesteal > 0 && finalDamage > 0) {
            const heal = Math.floor(finalDamage * ctx.lifesteal);
            playerHp = Math.min(playerMaxHp, playerHp + heal);
            log.push({ turn, text: `生命偷取回复 ${heal} 点生命`, kind: 'player' });
          }
          // 中毒攻击词条
          if (ctx.poisonOnHit > 0 && rng.next() < ctx.poisonOnHit && monster.isAlive()) {
            this.statusManager.apply(monster as unknown as Combatant, 'poison', 1);
            log.push({ turn, text: `${monster.name} 中毒了`, kind: 'status' });
          }
          // 荆棘词缀（Boss反弹）
          if (boss && boss.hasAffix('boss_thorns') && finalDamage > 0) {
            const reflect = Math.floor(finalDamage * 0.1);
            playerHp -= reflect;
            damageTaken += reflect;
            log.push({ turn, text: `荆棘反噬，你受到 ${reflect} 点伤害`, kind: 'monster' });
          }
        }
      }

      if (!monster.isAlive()) {
        win = true;
        log.push({ turn, text: `${monster.name} 被击败了！`, kind: 'reward' });
        break;
      }

      // ---- 怪物回合 ----
      const monsterFrozen = this.statusManager.processTurnStart(
        monster as unknown as Combatant, player.level,
        l => log.push({ turn, text: l.text, kind: 'status' }),
      );
      // Boss护盾词缀：每回合恢复2%生命
      if (boss && boss.hasAffix('boss_shield') && monster.isAlive()) {
        const regen = Math.floor(monster.maxHp * 0.02);
        if (regen > 0 && monster.hp < monster.maxHp) {
          monster.hp = Math.min(monster.maxHp, monster.hp + regen);
          log.push({ turn, text: `${monster.name} 恢复了 ${regen} 点生命`, kind: 'status' });
        }
      }

      if (!monsterFrozen) {
        if (rng.next() < ctx.playerDodge) {
          log.push({ turn, text: '你闪避了攻击', kind: 'player' });
        } else {
          let mdamage = Math.max(1, monster.getFinalAttack() - ctx.playerDef * cfg.defenseMitigation);
          const mcrit = rng.next() < monster.critRate;
          if (mcrit) mdamage *= cfg.critMultiplier;
          mdamage = Math.floor(mdamage);
          mdamage = this.statusManager.applyReceiveModifiers(player as unknown as Combatant, mdamage, shieldPool);
          if (mdamage > 0) {
            playerHp -= mdamage;
            damageTaken += mdamage;
            log.push({
              turn,
              text: mcrit ? `${monster.name} 暴击，你受到 ${mdamage} 点伤害` : `${monster.name} 对你造成了 ${mdamage} 点伤害`,
              kind: 'monster',
            });

            // 吸血鬼词缀
            if (boss && boss.hasAffix('boss_vampire')) {
              const heal = Math.floor(mdamage * 0.05);
              monster.hp = Math.min(monster.maxHp, monster.hp + heal);
            }
            // 剧毒词缀
            if (boss && boss.hasAffix('boss_poison')) {
              this.statusManager.apply(player as unknown as Combatant, 'poison', 1);
              log.push({ turn, text: '你中了剧毒', kind: 'status' });
            }
            // 冰霜词缀
            if (boss && boss.hasAffix('boss_frozen') && rng.next() < 0.1) {
              this.statusManager.apply(player as unknown as Combatant, 'freeze', 1, 1);
              log.push({ turn, text: '寒气冻结了你', kind: 'status' });
            }
            // 玩家荆棘藏品反弹
            if (ctx.thorns > 0) {
              const reflect = Math.floor(mdamage * ctx.thorns);
              if (reflect > 0) {
                monster.takeDamage(reflect);
                log.push({ turn, text: `荆棘之心反弹 ${reflect} 点伤害`, kind: 'player' });
              }
            }
          } else if (mdamage === 0) {
            log.push({ turn, text: '护盾完全吸收了伤害', kind: 'player' });
          }
        }
      }

      // 回合结束：状态递减
      this.statusManager.processTurnEnd(player as unknown as Combatant);
      this.statusManager.processTurnEnd(monster as unknown as Combatant);

      if (playerHp <= 0) {
        win = false;
        log.push({ turn, text: '你倒下了……', kind: 'system' });
        break;
      }
    }

    if (applyToPlayer) {
      player.hp = Math.max(0, Math.min(playerHp, player.maxHp));
      eventBus.emit('hpChanged', { oldValue: player.hp + damageTaken, newValue: player.hp, delta: -damageTaken });
    }

    return { win, damageTaken, turns, log };
  }

  /** 战斗日志（接口兼容） */
  getBattleLog(result: BattleResult): string[] {
    return result.log.map(l => `[回合${l.turn}] ${l.text}`);
  }
}

export type { Combatant };
