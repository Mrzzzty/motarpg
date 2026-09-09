/**
 * 全局事件总线（规格 7.4）：模块间唯一通信通道。
 * 所有事件名与载荷类型在 GameEventMap 中集中定义。
 */
import type { GameEventMap } from '../types';

type EventHandler<K extends keyof GameEventMap> = (payload: GameEventMap[K]) => void;

export class EventBus {
  private static instance: EventBus;
  private handlers = new Map<string, Set<(payload: unknown) => void>>();

  private constructor() {}

  static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  on<K extends keyof GameEventMap>(event: K, handler: EventHandler<K>): void {
    let set = this.handlers.get(event as string);
    if (!set) {
      set = new Set();
      this.handlers.set(event as string, set);
    }
    set.add(handler as (payload: unknown) => void);
  }

  once<K extends keyof GameEventMap>(event: K, handler: EventHandler<K>): void {
    const wrapped = (payload: GameEventMap[K]) => {
      this.off(event, wrapped);
      handler(payload);
    };
    this.on(event, wrapped);
  }

  off<K extends keyof GameEventMap>(event: K, handler: EventHandler<K>): void {
    const set = this.handlers.get(event as string);
    if (set) {
      set.delete(handler as (payload: unknown) => void);
    }
  }

  emit<K extends keyof GameEventMap>(event: K, payload: GameEventMap[K]): void {
    const set = this.handlers.get(event as string);
    if (!set) return;
    for (const handler of [...set]) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[EventBus] handler error on "${String(event)}"`, err);
      }
    }
  }

  clear(): void {
    this.handlers.clear();
  }
}

/** 便捷导出：模块级直接引用的总线实例 */
export const eventBus = EventBus.getInstance();
