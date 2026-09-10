/**
 * 遗物条目 HTML 的唯一实现。
 *
 * 此前「左栏持有卡片 / 遗物面板持有列表 / 遗物图鉴 / 遗物三选一」各自拼了一遍
 * 完全同构的标记（图标 + 名称 + 稀有度 + 标签 + 右侧动作 + 效果 + 备注），
 * 这里统一为 `relicCardHtml()`，各调用方只传样式类名与动作区。
 */
import type { RelicDef } from '../types';
import type { RelicManager } from '../systems/RelicManager';

export interface RelicCardParts {
  /** 容器类名（默认 `relic-card`；子类名默认由它派生） */
  cls?: string;
  /** 头部容器类名（默认 `${cls}-head`） */
  headCls?: string;
  /** 图标类名（默认 `relic-icon`） */
  iconCls?: string;
  /** 名称类名（默认 `${cls}-name`） */
  nameCls?: string;
  /** 效果描述类名（默认 `dim`） */
  descCls?: string;
  /** 容器行内样式（默认 `border-color:<稀有度色>`） */
  style?: string;
  /** 名称颜色（默认稀有度色；显式传值可覆盖，如未获得时用灰） */
  nameColor?: string;
  /** 名称后的标签（如「专属」） */
  tags?: string[];
  /** 右侧动作区 HTML（按钮组） */
  actions?: string;
  /** 容器附加属性串（`data-*` / `title` 等，原样输出） */
  attrs?: string;
  /** 是否输出效果描述行（默认输出） */
  withDesc?: boolean;
}

/** 遗物条目（卡片 / 行）HTML —— 全站唯一实现 */
export function relicCardHtml(d: RelicDef, rm: RelicManager, parts: RelicCardParts = {}): string {
  const color = rm.rarityColor(d.rarity);
  const cls = parts.cls ?? 'relic-card';
  const headCls = parts.headCls ?? `${cls}-head`;
  const nameCls = parts.nameCls ?? `${cls}-name`;
  const descCls = parts.descCls ?? 'dim';
  const style = parts.style ?? `border-color:${color}`;
  const tags = (parts.tags ?? []).map(t => `<span class="dim relic-rarity">${t}</span>`).join('');
  const desc = parts.withDesc === false
    ? ''
    : `<div class="${descCls}">${d.desc}${d.note ? `　<i>${d.note}</i>` : ''}</div>`;
  return `<div class="${cls}" ${parts.attrs ?? ''} style="${style}">
      <div class="${headCls}">
        ${rm.iconHtml(d, parts.iconCls)}
        <span class="${nameCls}" style="color:${parts.nameColor ?? color}">${d.name}</span>
        <span class="dim relic-rarity">${rm.rarityName(d.rarity)}</span>
        ${tags}
        <span style="flex:1"></span>
        ${parts.actions ?? ''}
      </div>
      ${desc}
    </div>`;
}
