/**
 * 引导系统（文档五 6.2）：首次获得装备说明、首次死亡重生提示、教学欢迎。
 */
import { eventBus } from '../core/EventBus';
import { dataManager } from '../core/DataManager';

export class GuidanceSystem {
  private static instance: GuidanceSystem;
  flags = {
    firstEquipment: false,
    firstDeath: false,
    welcomed: false,
  };

  private constructor() {
    eventBus.on('equipmentGenerated', p => {
      if (p.source === 'tutorial') return;
      if (!this.flags.firstEquipment) {
        this.flags.firstEquipment = true;
        eventBus.emit('firstEquipmentGained', { equipment: p.equipment });
        eventBus.emit('notification', {
          message: dataManager.texts.guidance?.firstEquipment ?? '获得装备！',
          type: 'info', icon: '🗡️',
        });
      }
    });
    eventBus.on('playerDied', () => {
      if (!this.flags.firstDeath) {
        this.flags.firstDeath = true;
        eventBus.emit('notification', {
          message: dataManager.texts.guidance?.firstDeath ?? '死亡后在本层起点复活，损失部分金币。',
          type: 'warning', icon: '💀',
        });
      }
    });
  }

  static getInstance(): GuidanceSystem {
    if (!GuidanceSystem.instance) GuidanceSystem.instance = new GuidanceSystem();
    return GuidanceSystem.instance;
  }

  export(): Record<string, boolean> { return { ...this.flags }; }

  restore(flags: Record<string, boolean>): void { this.flags = { ...this.flags, ...flags }; }
}
