/**
 * ID 生成器：实体ID / 装备实例ID。
 */
export class IdGenerator {
  private static counter = 0;

  static reset(): void {
    IdGenerator.counter = 0;
  }

  static next(prefix: string): string {
    IdGenerator.counter += 1;
    return `${prefix}_${IdGenerator.counter.toString(36)}`;
  }

  /** 装备实例唯一ID */
  static equipmentId(): string {
    IdGenerator.counter += 1;
    return `eq_${Date.now().toString(36)}_${IdGenerator.counter.toString(36)}_${Math.floor(Math.random() * 1e6).toString(36)}`;
  }
}
