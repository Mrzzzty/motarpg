/**
 * 战斗系统（文案规格 §5 [已确认]：托管/微操双模式，30% 阈值硬编码一致）：
 * 公式：伤害 = max(1, 攻击×(1±浮动) − 防御) + 业火附加；暴击×1.8；闪避完全规避；
 * 嗜血按造成伤害回复；屠龙对Boss增伤。
 * - 托管（默认）：BattleSystem.battle() 一口气自动打完，血量<30% 自动喝最优药水（原行为）。
 * - 微操：BattleSystem.beginManual() 建立会话，BattlePanel 逐回合驱动 stepManual()
 *   （攻击/用药水/撤退）；微操不自动喝药，30% 阈值由 UI 高亮提示。
 * 回合结构与结算（胜负判定/掉落/事件）两种模式同源，保证数值一致。
 */
import type { BattleLogLine, BattleResult, MapEntity, MonsterStats, PotionTier } from '../types';
import { Player } from '../entities/Player';
import { WorldManager } from '../core/WorldManager';
import { StatCalculator } from '../utils/StatCalculator';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { rng } from '../utils/MathUtils';
import { EquipmentGenerator } from './EquipmentGenerator';
import { ChestSystem } from './ChestSystem';
import { RelicManager } from './RelicManager';

/** 微操回合的玩家行动 */
export type BattleAction = { type: 'attack' } | { type: 'potion' } | { type: 'flee' };

/**
 * 一次战斗会话：托管模式在内部一口气推进；微操模式由 UI 每回合喂数据。
 * 结算（奖励/掉落/事件）收敛在 settle* 方法，两条路径共用。
 */
export class BattleSession {
  readonly entity: MapEntity;
  readonly mon: MonsterStats;
  private log: BattleLogLine[] = [];
  private logCursor = 0;
  private monHp: number;
  private turnCount = 0;
  private dmgTaken = 0;
  private potionUsedName: string | null = null;
  /** 本场战斗剩余的「用药资格」：一次资格 = 一次补满生命的机会（默认 1，赫尔墨斯双蛇杖可提升） */
  private potionUsesLeft: number;
  private outcome: BattleResult | null = null;

  constructor(entity: MapEntity, mon: MonsterStats) {
    this.entity = entity;
    this.mon = mon;
    this.monHp = mon.hp;
    this.potionUsesLeft = Math.max(
      dataManager.config.battle.potionUsesPerBattle,
      RelicManager.getInstance().value('potionPerBattle'),
    );
    this.line(`遭遇 ${mon.name}！`, 'system');
  }

  get monsterHp(): number { return Math.max(0, this.monHp); }
  get monsterMaxHp(): number { return this.mon.hp; }
  get turns(): number { return this.turnCount; }
  get finished(): boolean { return this.outcome !== null; }
  get result(): BattleResult | null { return this.outcome; }

  /** 本场剩余用药资格（UI 展示 / 按钮禁用判定） */
  get potionUses(): number { return this.potionUsesLeft; }
  /** 当前是否还能使用回复药剂（有资格 + 有可用药水） */
  get potionAvailable(): boolean { return this.potionUsesLeft > 0 && !!this.bestPotion(); }

  /** 自上次调用以来的新增日志行（面板增量渲染用） */
  drainNewLines(): BattleLogLine[] {
    const out = this.log.slice(this.logCursor);
    this.logCursor = this.log.length;
    return out;
  }

  /** 当前最优药水（不够回满则不算） */
  bestPotion(): PotionTier | null {
    const p = Player.getInstance();
    return p.bestPotionFor(p.maxHp - p.state.hp);
  }

  /** 生命是否低于托管自动喝药阈值（30%，与托管判定同源） */
  hpBelowAutoPotionThreshold(): boolean {
    const p = Player.getInstance();
    return p.state.hp > 0 && p.state.hp < p.maxHp * 0.3;
  }

  /** 托管：一口气打完整场（保持原行为/公式/30%自动喝药） */
  runAuto(): BattleResult {
    if (this.outcome) return this.outcome;
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    while (player.state.hp > 0 && this.monHp > 0 && this.turnCount < cfg.maxTurns) {
      this.turnCount++;
      this.playerAttack();
      if (this.monHp <= 0) break;
      this.monsterTurn();
      // 自动喝药（生命<30%时）：消耗一次用药资格，一次补满
      if (player.state.hp > 0 && player.state.hp < player.maxHp * 0.3 && this.potionUsesLeft > 0) {
        this.usePotionQualification(true);
      }
    }
    this.settle(this.turnCount >= cfg.maxTurns);
    return this.outcome!;
  }

  /** 微操：执行玩家回合行动 →（怪物存活则）怪物回合；返回本回合新增日志 */
  stepManual(action: BattleAction): BattleLogLine[] {
    if (this.outcome) return [];
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    this.turnCount++;

    if (action.type === 'flee') {
      this.line('你选择了撤退', 'system');
      this.settle(false, true);
      return this.drainNewLines();
    }
    if (action.type === 'potion') {
      if (this.potionUsesLeft <= 0) {
        this.line('本场战斗的用药机会已经用完了', 'system');
        this.turnCount--; // 无效行动不消耗回合
        return this.drainNewLines();
      }
      if (!this.bestPotion()) {
        this.line('没有可用的药水', 'system');
        this.turnCount--; // 无效行动不消耗回合
        return this.drainNewLines();
      }
      const used = this.usePotionQualification(false);
      this.line(`用掉一次用药机会，共饮下 ${used} 瓶，生命已补满`, 'system');
    } else {
      this.playerAttack();
    }

    if (!this.outcome && this.monHp > 0 && player.state.hp > 0) {
      this.monsterTurn(); // 微操不自动喝药：30% 阈值由血条高亮与按钮警示呈现
    }
    // 终局判定：击杀 / 阵亡 / 超过最大回合数（此前每回合误结算→一回合即"胶着撤退"）
    if (!this.outcome && (this.monHp <= 0 || player.state.hp <= 0 || this.turnCount >= cfg.maxTurns)) {
      this.settle(this.turnCount >= cfg.maxTurns);
    }
    return this.drainNewLines();
  }

  // ============ 回合内部 ============

  private line(text: string, kind: BattleLogLine['kind']): void {
    this.log.push({ turn: this.turnCount, text, kind });
  }

  /** 玩家攻击回合（暴击/业火/屠龙/嗜血 + 遗物：暴击伤害/破防/精英增伤/追击/首击） */
  private playerAttack(): void {
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    const stats = player.stats();
    const rm = RelicManager.getInstance();
    const monDef = Math.max(0, this.mon.defense * (1 - stats.armorPen / 100));
    const jitter = 1 + (Math.random() * 2 - 1) * cfg.damageJitter;
    const crit = rng.chance(stats.critRate / 100);
    const base = Math.max(cfg.minDamage, Math.round((stats.attack - monDef) * jitter));
    let dealt = crit ? Math.round(base * (cfg.critMultiplier + stats.critDamage / 100)) : base;

    // 每层首击加成（先攻之刃 ×2 / 疾影之靴 ×1.5）
    const first = rm.consumeFirstStrike(player.state.currentFloor);
    let firstMul = 1;
    if (first) {
      if (rm.value('firstStrikeDouble') >= 2) firstMul *= 2;
      const boost = rm.value('firstStrikeBoost');
      if (boost > 1) firstMul *= boost;
    }
    if (firstMul !== 1) dealt = Math.round(dealt * firstMul);

    dealt += stats.fireDamage;
    if (this.mon.isBoss) dealt = Math.round(dealt * (1 + stats.bossDamage / 100));
    if (this.mon.isElite || this.mon.isBoss) dealt = Math.round(dealt * (1 + stats.eliteBossDamage / 100));

    // 连击徽章：概率追击（50% 伤害）
    if (rm.value('followUp') > 0 && rng.chance(rm.value('followUp') / 100)) {
      const extra = Math.round(dealt * 0.5);
      dealt += extra;
      this.line(`连击徽章：追加 ${extra} 点伤害`, 'player');
    }

    this.monHp -= dealt;
    const tag = `${firstMul !== 1 ? '首击·' : ''}${crit ? '暴击！' : ''}`;
    this.line(`${tag}对${this.mon.name}造成 ${dealt} 点伤害${stats.fireDamage > 0 ? `（业火+${stats.fireDamage}）` : ''}`, 'player');
    if (stats.lifesteal > 0 && player.state.hp < player.maxHp) {
      const heal = Math.round(dealt * stats.lifesteal / 100);
      if (heal > 0) {
        player.heal(heal);
        this.line(`嗜血回复 ${heal} 生命`, 'player');
      }
    }
  }

  /** 怪物攻击回合（闪避判定 + 遗物：怪物攻击/减伤/增伤/荆棘反伤） */
  private monsterTurn(): void {
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    const stats = player.stats();
    if (rng.chance(stats.dodgeRate / 100)) {
      this.line(`闪避了${this.mon.name}的攻击`, 'player');
      return;
    }
    const monAtk = this.mon.attack * (1 + stats.monsterAttackUp / 100);
    let raw = Math.max(cfg.minDamage, Math.round((monAtk - stats.defense) * (1 + (Math.random() * 2 - 1) * cfg.damageJitter)));
    raw = Math.max(cfg.minDamage, Math.round(raw * (1 - stats.damageReduction / 100) * (1 + stats.damageTaken / 100)));
    player.damage(raw);
    this.dmgTaken += raw;
    this.line(`${this.mon.name}对你造成 ${raw} 点伤害`, 'monster');
    // 荆棘反伤
    if (stats.thorns > 0 && this.monHp > 0) {
      const reflect = Math.max(1, Math.round(raw * stats.thorns / 100));
      this.monHp -= reflect;
      this.line(`荆棘之甲反弹 ${reflect} 点伤害`, 'player');
    }
  }

  /** 喝药（托管自动 / 微操手动共用） */
  private drinkPotion(tier: PotionTier, auto: boolean): void {
    const player = Player.getInstance();
    const potionDef = dataManager.getPotion(tier)!;
    player.usePotion(tier);
    this.potionUsedName = potionDef.name;
    this.line(`${auto ? '自动' : ''}饮下${potionDef.name}`, 'system');
  }

  /**
   * 用掉一次「用药资格」：连续饮用回复药剂，直至生命补满或药水耗尽。
   * 一次资格 = 一次补满生命的机会（同次机会内不限瓶数）；资格耗尽后本场战斗不能再用药。
   */
  private usePotionQualification(auto: boolean): number {
    const player = Player.getInstance();
    if (this.potionUsesLeft <= 0) return 0;
    let used = 0;
    while (player.state.hp > 0 && player.state.hp < player.maxHp) {
      const tier = this.bestPotion();
      if (!tier) break;
      const before = player.state.hp;
      this.drinkPotion(tier, auto);
      used++;
      if (player.state.hp <= before) break; // 兜底：药水无效则停止，避免死循环
    }
    if (used > 0) this.potionUsesLeft--;
    return used;
  }

  // ============ 结算（托管/微操同源） ============

  private settle(timeout: boolean, fled = false): void {
    if (this.outcome) return;
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const floorId = player.state.currentFloor;

    const win = this.monHp <= 0 || (timeout && this.monHp / this.mon.hp < player.state.hp / player.maxHp);
    const result: BattleResult = {
      win,
      log: this.log,
      damageTaken: this.dmgTaken,
      turns: this.turnCount,
      expGained: 0,
      goldGained: 0,
      monsterName: this.mon.name,
      isBoss: this.mon.isBoss,
      isElite: this.mon.isElite,
    };

    if (win) {
      result.expGained = this.mon.exp;
      result.goldGained = this.mon.gold;
      player.gainExp(this.mon.exp);
      player.gainGold(this.mon.gold);
      world.markDefeated(this.entity.id);
      this.line(`击败${this.mon.name}！获得 ${this.mon.exp} 经验、${this.mon.gold} 金币`, 'reward');
      // 掉落：Boss必掉装备；普通怪3%装备、2%低档药水（装备品质下限随房间深度提升 P0-1）
      const dropCfg = dataManager.config.monsterDrops;
      const dropDepth = this.entity.depth ?? 1;
      if (this.mon.isBoss || rng.chance(dropCfg.equipmentChance)) {
        const equip = EquipmentGenerator.getInstance().generate(this.mon.isBoss ? 'boss' : 'monster', { floorId, depth: dropDepth });
        player.addEquipment(equip);
        this.line(`掉落了 ${equip.name}`, 'reward');
      }
      if (!this.mon.isBoss && rng.chance(dropCfg.potionChance)) {
        const tier = ChestSystem.getInstance().potionTierLower(floorId, rng.randInt(1, 2));
        if (tier) {
          player.addPotion(tier, 1);
          this.line(`掉落了 ${dataManager.getPotion(tier)?.name}`, 'reward');
        }
      }
      // 遗物掉落：Boss 必掉、精英低概率（relics.json 概率表）
      if (this.mon.isBoss) {
        const relic = RelicManager.getInstance().rollDrop('boss');
        if (relic) this.line(`掉落了遗物【${relic.name}】`, 'reward');
      } else if (this.mon.isElite) {
        const relic = RelicManager.getInstance().rollDrop('elite');
        if (relic) this.line(`掉落了遗物【${relic.name}】`, 'reward');
      }
      if (this.potionUsedName) this.line(`战斗中消耗了${this.potionUsedName}`, 'system');
      // 遗物击杀钩子（吸血獠牙 / 拾荒者 / 窃命之契）
      for (const l of RelicManager.getInstance().onKill()) this.line(l, 'reward');
      eventBus.emit('monsterDefeated', {
        entityId: this.entity.id, name: this.mon.name, monsterId: this.entity.monsterId,
        isElite: this.mon.isElite, isBoss: this.mon.isBoss,
      });
      if (this.mon.isBoss) eventBus.emit('bossDefeated', { floor: floorId, name: this.mon.name });
    } else if (player.state.hp <= 0) {
      this.line(`你被${this.mon.name}击败了……`, 'monster');
      eventBus.emit('playerDied', { cause: this.mon.name });
    } else {
      this.line(fled ? '你退出了战斗' : '战斗胶着，你被迫撤退', 'system');
      // 撤退：不消灭怪物，玩家留在原地
    }

    this.outcome = result;
    eventBus.emit('battleEnded', { result, manual: this.manual });
  }

  /** 微操会话标记（结算事件里区分面板行为）；托管会话保持 false */
  manual = false;
}

export class BattleSystem {
  private static instance: BattleSystem;
  private constructor() {}
  static getInstance(): BattleSystem {
    if (!BattleSystem.instance) BattleSystem.instance = new BattleSystem();
    return BattleSystem.instance;
  }

  /** 解析实体 → 战斗属性（填充期收敛属性优先，缺省实时计算） */
  private resolveStats(entity: MapEntity): MonsterStats {
    const player = Player.getInstance();
    const def = dataManager.getMonster(entity.monsterId ?? '');
    if (!def) throw new Error(`未知怪物: ${entity.monsterId}`);
    // 填充期已按房间深度计算并收敛的属性优先；旧存档实体无 stats 时按深度实时计算（缺省 1 = 原行为）
    return entity.stats
      ?? StatCalculator.getInstance().monsterStats(
        def, player.state.currentFloor, entity.kind === 'boss' ? false : !!entity.isElite, entity.depth ?? 1);
  }

  /** 托管：执行战斗并结算（返回结果；胜利时调用方标记实体消亡） */
  battle(entity: MapEntity): BattleResult {
    const mon = this.resolveStats(entity);
    const session = new BattleSession(entity, mon);
    return session.runAuto();
  }

  /** 微操：建立战斗会话，由 BattlePanel 逐回合驱动 */
  beginManual(entity: MapEntity): BattleSession {
    const mon = this.resolveStats(entity);
    const session = new BattleSession(entity, mon);
    session.manual = true;
    return session;
  }

  /** 战斗预测（悬浮窗展示：能否获胜/预计损血） */
  forecast(entity: MapEntity): { winnable: boolean; estDamage: number } {
    const player = Player.getInstance();
    const def = dataManager.getMonster(entity.monsterId ?? '');
    if (!def) return { winnable: false, estDamage: 0 };
    const mon = entity.stats
      ?? StatCalculator.getInstance().monsterStats(def, player.state.currentFloor, !!entity.isElite, entity.depth ?? 1);
    const stats = player.stats();
    const dmgOut = Math.max(1, stats.attack - mon.defense) + stats.fireDamage;
    const dmgIn = Math.max(1, mon.attack - stats.defense);
    const turnsToKill = Math.ceil(mon.hp / dmgOut);
    const estDamage = turnsToKill * dmgIn * (1 - stats.dodgeRate / 100);
    return { winnable: estDamage < player.state.hp, estDamage: Math.round(estDamage) };
  }
}
