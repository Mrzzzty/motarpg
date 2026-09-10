/**
 * 通口类型（ExitPattern）——**纯数据层**（无 DOM、可无头测试）。
 *
 * 房间的「入口类型」离散化为 5 类出口模式。判定只看**全部门（含入口）的边关系**，
 * 与「南入口固定」的编辑器约定解耦，因此对任意入口方向都成立：
 *
 *   单口       1 条边相通（死路房 / 目标房）
 *   上下通口   2 条**对边**相通（直穿：南北 / 东西）
 *   对角通口   2 条**邻边**相通（L 形拐角）
 *   T型通口    3 条边相通
 *   四方通口   4 条边全通（十字）
 *
 * 用途：正式游戏生成楼层时，按「房间类型 + 通口类型」从设计者提供的手工房间库里抽取
 * （见 `src/map/RoomLibrary.ts`）；同类型多间房再由 `tension` 张力值区分体验。
 */
import type { Direction, ExitPattern } from '../types';

/** 通口类型元数据：中文标签 + 一句说明（UI 与摘要共用，避免两处各写一份文案） */
export const EXIT_PATTERN_INFO: Record<ExitPattern, { label: string; desc: string }> = {
  single: { label: '单口', desc: '仅入口（死路房 / 目标房）' },
  vertical: { label: '上下通口', desc: '一对对边相通（直穿）' },
  diagonal: { label: '对角通口', desc: '一对邻边相通（L 形拐角）' },
  tee: { label: 'T型通口', desc: '三边相通（T 字）' },
  cross: { label: '四方通口', desc: '四边全通（十字）' },
};

/** 全部通口类型（UI 下拉的固定顺序） */
export const EXIT_PATTERNS: ExitPattern[] = ['single', 'vertical', 'diagonal', 'tee', 'cross'];

const OPPOSITE: Record<Direction, Direction> = { north: 'south', south: 'north', east: 'west', west: 'east' };

/**
 * 通口类型 → 具体出口方向集合。**南入口为固定基准**（与「南进」的编辑器约定一致）。
 * 编辑器点选某个通口类型时用它填 `exits`；之后仍可用「北/东/西」开关微调。
 */
export const EXIT_PATTERN_PRESETS: Record<ExitPattern, Direction[]> = {
  single: ['south'],
  vertical: ['south', 'north'],
  diagonal: ['south', 'east'],
  tee: ['south', 'east', 'west'],
  cross: ['south', 'north', 'east', 'west'],
};

/** 按出口方向集合判定通口类型（去重后按数量与对边关系分类；空集视为单口） */
export function patternFromExits(exits: Direction[]): ExitPattern {
  const set = [...new Set(exits)];
  const n = set.length;
  if (n <= 1) return 'single';
  if (n === 2) return OPPOSITE[set[0]] === set[1] ? 'vertical' : 'diagonal';
  if (n === 3) return 'tee';
  return 'cross';
}

/** 中文标签（未知类型回退原值） */
export function patternLabel(p: ExitPattern): string {
  return EXIT_PATTERN_INFO[p]?.label ?? p;
}

/** 出口集合是否与某通口类型的预设**完全一致**（用于 UI 回显；不一致返回 null = 自定义） */
export function matchPattern(exits: Direction[]): ExitPattern | null {
  const set = [...new Set(exits)].sort();
  for (const p of EXIT_PATTERNS) {
    const ps = [...EXIT_PATTERN_PRESETS[p]].sort();
    if (ps.length === set.length && ps.every((d, i) => d === set[i])) return p;
  }
  return null;
}

/** 出口集合 → 汉字方向串（如 `南东北`），用于状态栏与摘要 */
export function exitsLabel(exits: Direction[]): string {
  const L: Record<Direction, string> = { north: '北', east: '东', south: '南', west: '西' };
  return ['north', 'east', 'south', 'west'].filter(d => exits.includes(d as Direction)).map(d => L[d as Direction]).join('');
}
