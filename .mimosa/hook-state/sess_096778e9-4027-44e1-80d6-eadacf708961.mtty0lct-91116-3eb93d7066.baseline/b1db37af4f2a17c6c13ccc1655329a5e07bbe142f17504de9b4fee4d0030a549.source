/**
 * 藏品系统（规格 模块H）：永久被动效果、唯一性、系列收集奖励。
 * 效果应用在 Player.recalc() 与 getCombatModifiers() 中聚合，本系统负责获取/查询/系列。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import type { CollectibleDef, CollectibleSeries, Quality } from '../types';
import { rng } from '../utils/MathUtils';

export class CollectibleSystem {
  private static instance: CollectibleSystem;

  /** 已发放系列奖励 */
  seriesRewarded = new Set<string>();

  private constructor() {}

  static getInstance(): CollectibleSystem {
    if (!CollectibleSystem.instance) {
      CollectibleSystem.instance = new CollectibleSystem();
    }
    return CollectibleSystem.instance;
  }

  getCollectible(collectibleId: string): CollectibleDef | null {
    return dataManager.getCollectible(collectibleId) ?? null;
  }

  getAllCollectibles(): CollectibleDef[] {
    return dataManager.collectibles;
  }

  hasCollectible(collectibleId: string): boolean {
    return Player.getInstance().hasCollectible(collectibleId);
  }

  getCollectibleCount(): number {
    return Player.getInstance().collectibles.length;
  }

  getOwnedCollectibles(): CollectibleDef[] {
    return Player.getInstance().collectibles
      .map(id => dataManager.getCollectible(id))
      .filter((c): c is CollectibleDef => c !== undefined);
  }

  /** 获得藏品（唯一性保证：同类只能持有一个） */
  addCollectible(collectibleId: string, silent = false): boolean {
    const def = dataManager.getCollectible(collectibleId);
    if (!def) return false;
    const player = Player.getInstance();
    if (player.collectibles.includes(collectibleId)) {
      if (!silent) {
        // 重复藏品转化为魂晶
        player.gainSoul(1);
        eventBus.emit('notification', { message: `已拥有「${def.name}」，转化为 1 魂晶`, type: 'info', icon: def.icon });
      }
      return false;
    }
    player.collectibles.push(collectibleId);
    player.recalc();
    eventBus.emit('collectibleCollected', { collectibleId, name: def.name, position: { x: player.position.x, y: player.position.y } });
    if (!silent) {
      eventBus.emit('notification', { message: `${dataManager.text('collectibleGet')}「${def.name}」 — ${def.effect.description}`, type: 'success', icon: def.icon });
    }
    this.checkSeriesCompletion();
    eventBus.emit('playerStatsChanged', {});
    return true;
  }

  /** 系列收集完成检查（发放一次性奖励） */
  private checkSeriesCompletion(): void {
    const player = Player.getInstance();
    for (const series of dataManager.series) {
      if (this.seriesRewarded.has(series.id)) continue;
      const owned = series.memberIds.filter(id => player.collectibles.includes(id)).length;
      if (owned >= series.memberIds.length) {
        this.seriesRewarded.add(series.id);
        this.grantReward(series);
        eventBus.emit('notification', { message: `系列「${series.name}」收集完成！获得系列奖励`, type: 'success', icon: '🏆' });
      }
    }
  }

  private grantReward(series: CollectibleSeries): void {
    const player = Player.getInstance();
    const reward = series.reward;
    switch (reward.type) {
      case 'exp': player.addExp(Number(reward.value)); break;
      case 'gold': player.gainGold(Number(reward.value)); break;
      case 'soul': player.gainSoul(Number(reward.value)); break;
      case 'item':
        // 延迟导入避免循环
        import('../systems/InventoryManager').then(({ InventoryManager }) => {
          InventoryManager.getInstance().addItem(String(reward.value), reward.quantity ?? 1);
        });
        break;
      case 'collectible':
        this.addCollectible(String(reward.value), true);
        break;
      default: break;
    }
  }

  getSeriesProgress(seriesId: string): { series: CollectibleSeries; owned: number; total: number } | null {
    const series = dataManager.getSeries(seriesId);
    if (!series) return null;
    const player = Player.getInstance();
    const owned = series.memberIds.filter(id => player.collectibles.includes(id)).length;
    return { series, owned, total: series.memberIds.length };
  }

  /** 按稀有度筛选 */
  getCollectiblesByRarity(rarity: Quality): CollectibleDef[] {
    return dataManager.collectibles.filter(c => c.rarity === rarity);
  }

  /**
   * 随机掉落一个藏品（优先未拥有）
   * @param rarities 允许的稀有度池
   */
  pickRandomCollectible(rarities?: Quality[]): CollectibleDef | null {
    if (dataManager.collectibles.length === 0) return null;
    let pool = dataManager.collectibles;
    if (rarities && rarities.length > 0) {
      const filtered = pool.filter(c => rarities.includes(c.rarity));
      if (filtered.length > 0) pool = filtered;
    }
    const player = Player.getInstance();
    const unowned = pool.filter(c => !player.collectibles.includes(c.id));
    // 优先未拥有（75%），否则全池
    if (unowned.length > 0 && rng.chance(0.75)) {
      return rng.pick(unowned);
    }
    return rng.pick(pool);
  }

  /** 宝箱掉落渠道的稀有度倾向（规格 H.2） */
  chestDropRarities(tier: string): Quality[] {
    switch (tier) {
      case 'wooden': return ['common', 'uncommon'];
      case 'iron': return ['uncommon', 'rare'];
      case 'golden': return ['rare', 'epic'];
      case 'dark_gold': return ['epic', 'legendary'];
      case 'legendary': return ['legendary', 'mythic'];
      default: return ['common', 'uncommon'];
    }
  }

  /** 怪物掉落稀有度 */
  monsterDropRarities(isElite: boolean, isBoss: boolean): Quality[] {
    if (isBoss) return ['rare', 'epic', 'legendary'];
    if (isElite) return ['uncommon', 'rare'];
    return ['common', 'uncommon'];
  }

  /** 存档 */
  exportState(): string[] {
    return [...this.seriesRewarded];
  }

  loadState(seriesRewarded: string[]): void {
    this.seriesRewarded = new Set(seriesRewarded);
  }

  reset(): void {
    this.seriesRewarded.clear();
  }

  /** 藏品掉落率修正（深度+藏品自身效果） */
  collectibleDropMultiplier(depthBonus: number): number {
    return depthBonus;
  }

  isFound(collectibleId: string): boolean {
    return this.hasCollectible(collectibleId);
  }

  get mode(): string {
    return gameState.mode;
  }
}
