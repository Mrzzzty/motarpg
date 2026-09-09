/**
 * Boss系统（规格 2.1.2 / 模块J.2）：Boss构建、战力检测、词缀、警告、击败奖励、门控解锁。
 */
import { dataManager } from '../core/DataManager';
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { WorldManager } from '../core/WorldManager';
import { Player } from '../entities/Player';
import { Boss } from '../entities/Boss';
import type { Room, RoomEntity } from '../types';
import { EquipmentGenerator } from './EquipmentGenerator';
import { InventoryManager } from './InventoryManager';
import { CollectibleSystem } from './CollectibleSystem';
import { MathUtils } from '../utils/MathUtils';

export class BossSystem {
  private static instance: BossSystem;

  /** UI注入：Boss警告显示回调 */
  onBossWarning: ((boss: Boss, warningText: string) => void) | null = null;

  private constructor() {}

  static getInstance(): BossSystem {
    if (!BossSystem.instance) {
      BossSystem.instance = new BossSystem();
    }
    return BossSystem.instance;
  }

  /** 从房间实体构建Boss实例（词缀由实体ID种子决定，可重现） */
  buildBoss(entity: RoomEntity, floor: number, endlessFloor = 0): Boss {
    const player = Player.getInstance();
    let bossDef = dataManager.getBossByFloor(floor);
    if (gameState.mode === 'endless' || !bossDef) {
      // 无尽或超出配置表：从无尽池循环取名
      const pool = dataManager.endlessBossPool;
      const pick = pool[Math.abs(MathUtils.hashString(`boss:${gameState.seed}:${gameState.mode}:${floor}`)) % pool.length];
      bossDef = {
        floor,
        bossId: pick.bossId,
        name: pick.name,
        title: gameState.mode === 'endless' ? `深渊回廊·${pick.title}` : pick.title,
        icon: pick.icon,
        color: pick.color,
      };
    }

    const havenForced = player.currentDifficulty === 'haven';
    const boss = new Boss({
      entityId: entity.id,
      baseMonsterId: entity.monsterId ?? 'boss_base',
      bossId: bossDef.bossId,
      bossName: bossDef.name,
      title: bossDef.title,
      icon: bossDef.icon,
      color: bossDef.color,
      floor,
      difficulty: player.currentDifficulty,
      forcedAffixCount: havenForced ? 2 : null,
      endlessFloor,
    });
    return boss;
  }

  /** 进入Boss房间：战力检测 + 警告UI（规格 2.1.2 防速通） */
  onBossRoomEntered(room: Room): void {
    const entity = room.entities.find(e => e.type === 'boss');
    if (!entity) return;
    const world = WorldManager.getInstance();
    if (!world.isEntityLive(entity, room)) return; // 已击败

    const player = Player.getInstance();
    const boss = this.buildBoss(entity, room.floorId, gameState.mode === 'endless' ? room.floorId : 0);
    // 摇篮曲难度跳过战力检测（规格 I.1）
    if (player.currentDifficulty !== 'lullaby') {
      boss.applyPowerCheck(player.combatPower());
    }

    const ratio = Math.round(player.combatPower() / Math.max(1, boss.suggestedPower) * 100);
    let warningText = '';
    if (boss.modifier === 'unstoppable') {
      warningText = dataManager.text('bossUnderpower');
    } else if (boss.modifier === 'underdog') {
      warningText = dataManager.text('bossOverpower');
    }

    eventBus.emit('bossEntered', {
      bossId: boss.bossId,
      floor: room.floorId,
      bossName: boss.name,
      powerRatio: ratio,
      modifier: boss.modifier,
    });

    if (this.onBossWarning) {
      this.onBossWarning(boss, warningText);
    }
  }

  /** Boss被击败后的门控解锁与里程碑 */
  onBossDefeated(room: Room, entity: RoomEntity): void {
    const world = WorldManager.getInstance();
    if (gameState.mode === 'main') {
      world.markBossFloorDefeated(room.floorId, new Date().toISOString());
      // 第10层Boss击败 → 解锁无尽模式
      if (room.floorId >= dataManager.config.endless.unlockAfterFloor && !gameState.endlessUnlocked) {
        gameState.endlessUnlocked = true;
        eventBus.emit('notification', { message: '无尽回廊的入口已开启……在Boss奖励房间的传送门处进入。', type: 'success', icon: '🌀' });
      }
    }
  }

  /** Boss击败掉落（必掉稀有+装备与藏品，规格 2.1.2） */
  rollBossDrops(floor: number, endlessFloor: number): {
    equipmentName: string | null;
    collectibleName: string | null;
    quality: string | null;
  } {
    const player = Player.getInstance();
    const equipGen = EquipmentGenerator.getInstance();
    let minQuality: import('../types').Quality = 'rare';
    if (endlessFloor >= dataManager.config.endless.legendaryEquipMinFloor) {
      minQuality = 'legendary';
    }

    const equip = equipGen.generate({
      baseItemId: equipGen.pickTemplate(floor),
      floor,
      depth: 2,
      minQuality,
      source: 'boss',
    });
    // 传奇词缀：掉落品质提升两级
    InventoryManager.getInstance().addEquipment(equip);

    let collectibleName: string | null = null;
    const guaranteedCollectible = endlessFloor === 0 || endlessFloor >= dataManager.config.endless.guaranteedCollectibleMinFloor;
    if (guaranteedCollectible) {
      const col = CollectibleSystem.getInstance().pickRandomCollectible(
        CollectibleSystem.getInstance().monsterDropRarities(false, true),
      );
      if (col) {
        CollectibleSystem.getInstance().addCollectible(col.id);
        collectibleName = col.name;
      }
    } else {
      // 早期无尽层按小概率掉落
      const col = CollectibleSystem.getInstance().pickRandomCollectible(['rare', 'epic']);
      if (col && Math.random() < 0.3) {
        CollectibleSystem.getInstance().addCollectible(col.id);
        collectibleName = col.name;
      }
    }
    void player;

    return {
      equipmentName: equip.name,
      collectibleName,
      quality: equip.quality,
    };
  }

  /** Boss房门是否解锁 */
  isBossGateOpen(room: Room, unlockCondition: string | null): boolean {
    if (!unlockCondition) return true;
    const match = unlockCondition.match(/^boss:(.+)$/);
    if (match) {
      const bossEntityId = match[1];
      const bossEntity = room.entities.find(e => e.id === bossEntityId);
      if (!bossEntity) return true;
      return !WorldManager.getInstance().isEntityLive(bossEntity, room);
    }
    return true;
  }
}
