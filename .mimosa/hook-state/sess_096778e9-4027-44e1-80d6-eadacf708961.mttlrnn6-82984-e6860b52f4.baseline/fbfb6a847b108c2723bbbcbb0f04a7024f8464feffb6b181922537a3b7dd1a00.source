/**
 * 日志工具（规格 7.5）：分级输出 + GameError 自定义错误类型。
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export class Logger {
  private static level: LogLevel = 'info';
  private static readonly order: Record<LogLevel, number> = { debug: 0, info: 1, warn: 2, error: 3 };

  static setLevel(level: LogLevel): void {
    Logger.level = level;
  }

  private static shouldLog(level: LogLevel): boolean {
    return Logger.order[level] >= Logger.order[Logger.level];
  }

  static debug(...args: unknown[]): void {
    if (Logger.shouldLog('debug')) console.log('[DEBUG]', ...args);
  }

  static info(...args: unknown[]): void {
    if (Logger.shouldLog('info')) console.log('[INFO]', ...args);
  }

  static warn(...args: unknown[]): void {
    if (Logger.shouldLog('warn')) console.warn('[WARN]', ...args);
  }

  static error(...args: unknown[]): void {
    if (Logger.shouldLog('error')) console.error('[ERROR]', ...args);
  }
}

/** 自定义游戏错误（规格 7.5） */
export class GameError extends Error {
  constructor(
    public code: string,
    message: string,
    public recoverable: boolean = false,
  ) {
    super(message);
    this.name = 'GameError';
  }
}
