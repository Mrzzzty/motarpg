/**
 * 遗物系统核心（docs/遗物系统设计.md）：
 * - 持有 / 丢弃 / 净化（C 类灾厄）；
 * - 声明式效果聚合（stat / passive / onLowHp / onHighHp），输出快照供 Player.stats() 使用；
 * - 7 套组合质变（血怒/刺客/不朽之泉/富可敌国/铁壁堡垒/全知/献祭）；
 * - 进层 / 击杀 触发钩子；
 * - 掉落掷骰（宝箱 / Boss / 精英）。
 * 玩家侧战斗加成统一走 Player.stats()（单一聚合点），本管理器只提供数据。
 */
import type { CurseSubtype, RelicCategory, RelicDef, RelicEffect, RelicRarity, RelicStatKey } from '../types';
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { Player } from '../entities/Player';
import { rng } from '../utils/MathUtils';

export interface RelicSnapshot {
  flat: Partial<Record<RelicStatKey, number>>;
  pct: Partial<Record<RelicStatKey, number>>;
  combos: string[];
}

/** 类别默认图标（relics.json 未填 icon 时使用） */
const CATEGORY_ICON: Record<RelicCategory, string> = {
  combat: '⚔️', survival: '❤️', economy: '💰', explore: '🗺️', risk: '⚠️', fun: '🎲',
};

/** 组合质变的数值加成（特殊规则在代码中单列） */
const COMBO_BONUS: Record<string, {
  flat?: Partial<Record<RelicStatKey, number>>;
  pct?: Partial<Record<RelicStatKey, number>>;
}> = {
  assassin: { flat: { critRate: 10 } },
  immortal: { flat: { maxHp: 80 } },
  rich: { flat: { goldBonus: 50, merchantDiscount: 50, chestQualityUp: 1 } },
  fortress: { flat: { thorns: 30, damageReduction: 15 } },
  sacrifice: { pct: { attack: 100, defense: 60 }, flat: { goldBonus: 150 } },
};

export class RelicManager {
  private static instance: RelicManager;
  private constructor() {}
  static getInstance(): RelicManager {
    if (!RelicManager.instance) RelicManager.instance = new RelicManager();
    return RelicManager.instance;
  }

  get all(): RelicDef[] { return dataManager.relics.relics; }
  get comboDefs(): { id: string; name: string; requires: string[]; desc: string }[] {
    return dataManager.relics.combos;
  }

  def(id: string): RelicDef | undefined { return dataManager.getRelic(id); }

  ownedIds(): string[] { return Player.getInstance().state.relics; }
  owned(): RelicDef[] {
    return this.ownedIds().map(id => this.def(id)).filter((d): d is RelicDef => !!d);
  }
  has(id: string): boolean { return this.ownedIds().includes(id); }

  rarityName(r: RelicRarity): string { return dataManager.relics.rarityNames[String(r)] ?? ''; }
  rarityColor(r: RelicRarity): string { return dataManager.relics.rarityColors[String(r)] ?? '#fff'; }

  /** 遗物图标（emoji 或图片路径）：单件 icon > icons 映射 > 类别默认 */
  iconOf(d: RelicDef): string {
    return d.icon ?? dataManager.relics.icons?.[d.id] ?? CATEGORY_ICON[d.category] ?? '🏺';
  }

  /** 图标渲染为 HTML（图片路径 → <img>；否则 emoji 文本） */
  iconHtml(d: RelicDef, cls = 'relic-icon'): string {
    const icon = this.iconOf(d);
    return /\.(png|jpe?g|webp|gif|svg)$/i.test(icon)
      ? `<img class="${cls}" src="${icon}" alt="" draggable="false">`
      : `<span class="${cls}">${icon}</span>`;
  }

  // ============ 持有 / 丢弃 / 净化 ============

  /** 获得遗物（同类唯一，不可重复持有） */
  add(id: string, opts: { silent?: boolean } = {}): boolean {
    const d = this.def(id);
    if (!d) return false;
    const p = Player.getInstance();
    if (p.state.relics.includes(id)) return false;
    p.state.relics.push(id);
    p.clampHp();
    if (!opts.silent) eventBus.emit('relicGained', { id, name: d.name, rarity: d.rarity });
    this.announceNewCombos();
    return true;
  }

  /**
   * 掉落 / 开箱发现遗物：**不直接入账**，广播给 UI 让玩家抉择（收下 / 丢弃）。
   * 玩家确认收下后由 UI 调 `add()` 真正入账；丢弃则什么也不发生。
   */
  offer(id: string, source = 'drop'): boolean {
    const d = this.def(id);
    if (!d || this.has(id)) return false;
    eventBus.emit('relicOffered', { id, name: d.name, rarity: d.rarity, source });
    return true;
  }

  /**
   * 遗物宝箱候选：抽 n 件互不重复的**正向**遗物（排除专属 / 未定稿 / 已持有）。
   * 稀有度带权重（圣 > 神祇 > 尘世），保证三选一里有机会出好东西但不至于全是神祇。
   */
  randomCandidates(n: number): RelicDef[] {
    const weights: { rarity: RelicRarity; weight: number }[] = [
      { rarity: 3, weight: 3 }, { rarity: 2, weight: 5 }, { rarity: 1, weight: 3 },
    ];
    const out: RelicDef[] = [];
    const taken = new Set<string>();
    for (let i = 0; i < n; i++) {
      const pool = this.pickablePool(r => r.rarity >= 0 && !r.tbd && !taken.has(r.id));
      if (pool.length === 0) break;
      const want = rng.pickWeighted(weights, w => w.weight).rarity;
      const prefer = pool.filter(r => r.rarity === want);
      const from = prefer.length > 0 ? prefer : pool;
      const pick = from[rng.randInt(0, from.length - 1)];
      taken.add(pick.id);
      out.push(pick);
    }
    return out;
  }

  remove(id: string, silent = false): boolean {
    const p = Player.getInstance();
    const idx = p.state.relics.indexOf(id);
    if (idx < 0) return false;
    p.state.relics.splice(idx, 1);
    p.clampHp();
    const d = this.def(id);
    if (!silent && d) eventBus.emit('relicRemoved', { id, name: d.name });
    return true;
  }

  /** C 类灾厄净化：灾厄形态 → 专属对应的纯正面遗物（一对一） */
  purify(curseId: string): boolean {
    const d = this.def(curseId);
    if (!d || d.subtype !== 'event' || !d.purifyTo || !this.has(curseId)) return false;
    this.remove(curseId, true);
    const p = Player.getInstance();
    p.state.relics.push(d.purifyTo);
    p.clampHp();
    const target = this.def(d.purifyTo);
    this.purifiedCount++;
    eventBus.emit('relicPurified', { from: curseId, to: d.purifyTo, name: target?.name ?? '' });
    this.announceNewCombos();
    return true;
  }

  /** 可净化的灾厄列表（UI / 事件用） */
  purifiable(): RelicDef[] {
    return this.owned().filter(d => d.subtype === 'event' && !!d.purifyTo);
  }

  /** 本轮已净化次数（每轮上限见 UI 提示） */
  private purifiedCount = 0;
  get purified(): number { return this.purifiedCount; }

  /** 荡魔义旗：本轮击杀累积的攻击百分比（resetRun 清零） */
  private killAttackStack = 0;
  get killAttackPct(): number { return this.killAttackStack; }

  /** 新一局重置运行时状态 */
  resetRun(): void {
    this.lastCombos = [];
    this.firstStrikeFloor = -1;
    this.purifiedCount = 0;
    this.killAttackStack = 0;
  }

  // ============ 组合质变 ============

  activeCombos(): string[] {
    const owned = new Set(this.ownedIds());
    return this.comboDefs.filter(c => c.requires.every(r => owned.has(r))).map(c => c.id);
  }
  hasCombo(id: string): boolean { return this.activeCombos().includes(id); }

  private lastCombos: string[] = [];
  private firstStrikeFloor = -1;
  /** 每层首次攻击（先攻之刃 / 疾影之靴）：每层仅返回一次 true */
  consumeFirstStrike(floorId: number): boolean {
    if (this.firstStrikeFloor === floorId) return false;
    this.firstStrikeFloor = floorId;
    return true;
  }
  /** 检测新增组合并广播（供 UI 提示"XX 已觉醒"） */
  private announceNewCombos(): void {
    const now = this.activeCombos();
    for (const cid of now) {
      if (!this.lastCombos.includes(cid)) {
        const c = this.comboDefs.find(x => x.id === cid);
        if (c) eventBus.emit('relicComboTriggered', { combo: c.id, name: c.name, desc: c.desc });
      }
    }
    this.lastCombos = now;
  }

  // ============ 效果聚合 ============

  /** 效果快照：按当前生命比例聚合（含低血/高血条件 + 组合加成） */
  snapshot(hpRatio: number): RelicSnapshot {
    const flat: Partial<Record<RelicStatKey, number>> = {};
    const pct: Partial<Record<RelicStatKey, number>> = {};
    const addFlat = (k: RelicStatKey | undefined, v: number | undefined) => {
      if (k && v) flat[k] = (flat[k] ?? 0) + v;
    };
    const addPct = (k: RelicStatKey | undefined, v: number | undefined) => {
      if (k && v) pct[k] = (pct[k] ?? 0) + v;
    };
    for (const d of this.owned()) {
      for (const e of d.effects) this.applyEffect(e, hpRatio, addFlat, addPct);
    }
    for (const cid of this.activeCombos()) {
      const b = COMBO_BONUS[cid];
      if (!b) continue;
      if (b.flat) for (const k of Object.keys(b.flat)) addFlat(k as RelicStatKey, b.flat[k as RelicStatKey]);
      if (b.pct) for (const k of Object.keys(b.pct)) addPct(k as RelicStatKey, b.pct[k as RelicStatKey]);
    }
    if (this.killAttackStack) addPct('attack', this.killAttackStack); // 荡魔义旗：击杀累积攻击
    return { flat, pct, combos: this.activeCombos() };
  }

  private applyEffect(
    e: RelicEffect, hpRatio: number,
    addFlat: (k: RelicStatKey | undefined, v: number | undefined) => void,
    addPct: (k: RelicStatKey | undefined, v: number | undefined) => void,
  ): void {
    switch (e.type) {
      case 'stat':
        if (e.mode === 'percent') addPct(e.stat, e.value); else addFlat(e.stat, e.value);
        break;
      case 'passive':
        addFlat(e.stat, e.value ?? 1);
        break;
      case 'onLowHp':
        if (hpRatio < (e.threshold ?? 0.35)) {
          if (e.mode === 'percent') addPct(e.stat, e.value); else addFlat(e.stat, e.value);
        }
        break;
      case 'onHighHp':
        if (hpRatio > (e.threshold ?? 0.75)) {
          if (e.mode === 'percent') addPct(e.stat, e.value); else addFlat(e.stat, e.value);
        }
        break;
      default:
        break; // onKill / onFloorEnter / onCrit / none 不参与静态聚合
    }
  }

  /** 读取某项被动值（无则 0；hpRatio 默认 1，避免依赖 Player.maxHp 造成重算） */
  value(key: RelicStatKey, hpRatio = 1): number {
    return this.snapshot(hpRatio).flat[key] ?? 0;
  }

  // ============ 触发钩子 ============

  /** 进层触发：再生符文 / 暖炉 / 钥匙串 / 点金指 / 诅咒之镜 / 血债之刃 / 永恒心核 等 */
  onFloorEnter(): string[] {
    const p = Player.getInstance();
    const log: string[] = [];
    for (const d of this.owned()) {
      for (const e of d.effects) {
        if (e.type !== 'onFloorEnter') continue;
        switch (e.action) {
          case 'healPct': { const h = p.heal(Math.round(p.maxHp * (e.value ?? 0) / 100)); if (h > 0) log.push(`${d.name}：回复 ${h} 生命`); break; }
          case 'heal': { const h = p.heal(e.value ?? 0); if (h > 0) log.push(`${d.name}：回复 ${h} 生命`); break; }
          case 'key': { p.state.keys += (e.value ?? 1); log.push(`${d.name}：获得 ${e.value ?? 1} 把钥匙`); break; }
          case 'hpLossPct': { const loss = Math.max(1, Math.round(p.maxHp * (e.value ?? 0) / 100)); p.damage(loss); log.push(`${d.name}：损失 ${loss} 生命`); break; }
          default: break;
        }
      }
    }
    return log;
  }

  /** 击杀触发：吸血獠牙 / 拾荒者 / 窃命之契 */
  onKill(): string[] {
    const p = Player.getInstance();
    const floorId = p.state.currentFloor;
    const log: string[] = [];
    for (const d of this.owned()) {
      for (const e of d.effects) {
        if (e.type !== 'onKill') continue;
        switch (e.action) {
          case 'heal': { const h = p.heal(e.value ?? 0); if (h > 0) log.push(`${d.name}：回复 ${h} 生命`); break; }
          case 'healPct': { const h = p.heal(Math.round(p.maxHp * (e.value ?? 0) / 100)); if (h > 0) log.push(`${d.name}：回复 ${h} 生命`); break; }
          case 'loseHp': { p.damage(e.value ?? 0); log.push(`${d.name}：损失 ${e.value ?? 0} 生命`); break; }
          case 'killGold': { const g = Math.round(2 + floorId * 0.8); p.gainGold(g); log.push(`${d.name}：额外掉落 ${g} 金币`); break; }
          case 'killAttackPct': { this.killAttackStack += (e.value ?? 0); log.push(`${d.name}：攻击 +${e.value ?? 0}%（累计 +${this.killAttackStack}%）`); break; }
          default: break;
        }
      }
    }
    return log;
  }

  // ============ 掉落掷骰 ============

  /**
   * 可随机授予的遗物池：统一排除「专属（难度 / 剧情指定）」与「已持有」。
   * 所有随机渠道（掉落 / 灾厄 / 开局 / 三选一）都必须经由此处，避免规则分叉。
   */
  private pickablePool(filter?: (d: RelicDef) => boolean): RelicDef[] {
    return this.all.filter(r => !r.exclusive && !this.has(r.id) && (!filter || filter(r)));
  }

  /** 从池中均匀取一件（空池返回 null） */
  private pickOne<T>(pool: T[]): T | null {
    return pool.length > 0 ? pool[rng.randInt(0, pool.length - 1)] : null;
  }

  /** 随机取得某稀有度的遗物（排除已持有；可选排除灾厄） */
  randomOfRarity(rarity: RelicRarity, excludeCurses = true): RelicDef | null {
    return this.pickOne(this.pickablePool(r =>
      r.rarity === rarity
      && r.id !== 'X007' // 迷途之足等纯负面 A 类仅通过难度开局赋予
      && (!excludeCurses || r.rarity !== -1)));
  }

  /**
   * 按渠道掷骰掉落。返回获得的遗物（无则 null）。
   * kind：chest 通用渠道（各稀有度独立判定）/ boss / elite
   * chanceMul：掉率倍率（风险房收益用；缺省 1 = 旧行为）
   */
  rollDrop(kind: 'chest' | 'boss' | 'elite', chanceMul = 1): RelicDef | null {
    const rf = dataManager.relics;
    const table = kind === 'boss' ? rf.bossDropChances
      : kind === 'elite' ? rf.eliteDropChances
        : rf.dropChances;
    // 从高稀有度往低判定（先判更稀有，命中即得；独立概率同时判定取最高档更符合"稀有"预期）
    const order: RelicRarity[] = [4, 3, 2, 1, 0];
    for (const rar of order) {
      const chance = (table[String(rar)] ?? 0) * chanceMul;
      if (chance > 0 && rng.chance(chance)) {
        const relic = this.randomOfRarity(rar, true);
        // 掉落改为「先给玩家抉择」：UI 弹获取界面，收下才入账（RelicManager.offer）
        if (relic) { this.offer(relic.id, kind); return relic; }
      }
    }
    return null;
  }

  /** 灾厄掉落（宝箱/事件）：B 类高风险中收益 */
  rollRiskCurse(): RelicDef | null {
    const relic = this.pickOne(this.pickablePool(r => r.subtype === 'risk'));
    if (!relic) return null;
    this.add(relic.id);
    return relic;
  }

  /** 开局灾厄：A 类随机抽取 n 件 */
  grantStartCurses(n: number): RelicDef[] {
    const pool = this.pickablePool(r => r.subtype === 'start');
    const picked: RelicDef[] = [];
    for (let i = 0; i < n && pool.length > 0; i++) {
      const idx = rng.randInt(0, pool.length - 1);
      const relic = pool.splice(idx, 1)[0];
      this.add(relic.id, { silent: true });
      picked.push(relic);
    }
    return picked;
  }

  /** C 类事件型灾厄：授予指定灾厄（净化目标需专一） */
  grantEventCurse(): RelicDef | null {
    const relic = this.pickOne(this.pickablePool(r => r.subtype === 'event'));
    if (!relic) return null;
    this.add(relic.id);
    return relic;
  }
}
