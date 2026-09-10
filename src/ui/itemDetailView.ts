/**
 * 物品详情页内容（点击遗物 / 装备 / 药水 / 钥匙 打开的信息卡片）。
 *
 * 纯函数，只产出 HTML；模态承载与事件绑定由 `Panels.ItemDetailPanelImpl` 负责。
 * 信息维度：图标 · 名称 · 稀有度/品质 · 数值 · 效果 · 介绍 · 获取方式 · 组合质变。
 */
import type { Equipment, EquipSlot, ItemDetailRequest, PotionTier, RelicDef } from '../types';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import { RelicManager } from '../systems/RelicManager';

const SLOT_META: Record<EquipSlot, { icon: string; label: string }> = {
  weapon: { icon: '🗡️', label: '武器' },
  armor: { icon: '🛡️', label: '胸甲' },
  accessory: { icon: '💍', label: '饰品' },
};

const CATEGORY_LABEL: Record<string, string> = {
  combat: '战斗', survival: '生存', economy: '经济', explore: '探索', risk: '风险', fun: '趣味',
};

/** 装备来源 → 获取方式文案 */
const EQUIP_SOURCE: Record<Equipment['source'], string> = {
  chest: '宝箱开出',
  monster: '普通怪物掉落（低概率）',
  boss: 'Boss 击杀掉落（必出装备）',
  merchant: '商人·老古 处购买',
  quest: '任务奖励',
  tutorial: '新手教学获得',
};

function fmtNum(v: number): string {
  const r = Math.round(v * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
}

/** 概率（0~1）→ 百分比文案 */
function pctText(v: number): string {
  const p = v * 100;
  if (p >= 10) return `${Math.round(p)}%`;
  if (p >= 1) return `${p.toFixed(1).replace(/\.0$/, '')}%`;
  return `${p.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')}%`;
}

function section(title: string, bodyHtml: string): string {
  return bodyHtml ? `<div class="id-sec"><div class="id-sec-title">${title}</div><div class="id-sec-body">${bodyHtml}</div></div>` : '';
}

function statRow(label: string, value: string): string {
  return `<div class="id-stat"><span class="id-stat-k">${label}</span><span class="id-stat-v">${value}</span></div>`;
}

function hero(icon: string, name: string, color: string, sub: string, tags: string[]): string {
  const tagHtml = tags.filter(Boolean).map(t => `<span class="id-tag">${t}</span>`).join('');
  return `<div class="id-hero">
    <div class="id-icon" style="border-color:${color}">${icon}</div>
    <div class="id-hero-main">
      <div class="id-name" style="color:${color}">${name}</div>
      <div class="id-sub dim">${sub}</div>
      ${tagHtml ? `<div class="id-tags">${tagHtml}</div>` : ''}
    </div>
  </div>`;
}

function card(heroHtml: string, sections: string[]): string {
  return `<div class="item-detail">${heroHtml}${sections.filter(Boolean).join('')}</div>`;
}

// ============ 遗物 ============

/** 遗物获取方式文案 */
function relicAcquireText(d: RelicDef): string {
  if (d.rarity === 4) return '天堂遗物：当前无常规获取途径，仅成就 / 真结局路径解锁（预留档）。';
  if (d.exclusive) return '专属遗物：由难度或剧情指定授予，不进入任何随机掉落池。';
  if (d.rarity === -1) {
    switch (d.subtype) {
      case 'start': return '开局灾厄：超高难度开局随机获得（难度越高数量越多）。';
      case 'risk': return '高风险中收益：宝箱 / 事件中获得。';
      case 'event': return '事件型灾厄：前期事件获得；第 41 层后可通过专属事件净化为纯正面遗物。';
      default: return '灾厄造物：特殊渠道获得。';
    }
  }
  return '正向遗物：宝箱 / 精英怪 / Boss 掉落，或区段末「遗物宝箱」三选一；稀有度越高越稀有（商人与女巫不出售遗物）。';
}

/** 遗物各渠道掷骰概率（参考） */
function relicDropLine(d: RelicDef): string {
  if (d.exclusive || d.rarity < 0 || d.rarity === 4) return '';
  const rf = dataManager.relics;
  const key = String(d.rarity);
  const parts: string[] = [];
  const chest = rf.dropChances?.[key];
  const elite = rf.eliteDropChances?.[key];
  const boss = rf.bossDropChances?.[key];
  if (chest != null) parts.push(`宝箱 ${pctText(chest)}`);
  if (elite != null) parts.push(`精英 ${pctText(elite)}`);
  if (boss != null) parts.push(`Boss ${pctText(boss)}`);
  return parts.length ? `参考掉落概率：${parts.join(' · ')}` : '';
}

export function relicDetailHtml(id: string): string {
  const rm = RelicManager.getInstance();
  const d = rm.def(id);
  if (!d) return '<div class="item-detail"><div class="id-empty">未找到该遗物。</div></div>';
  const color = rm.rarityColor(d.rarity);
  const owned = rm.has(id);
  const combos = (d.combos ?? [])
    .map(cid => rm.comboDefs.find(c => c.id === cid))
    .filter((c): c is { id: string; name: string; requires: string[]; desc: string } => !!c);
  const active = new Set(rm.activeCombos());

  const tags: string[] = [];
  if (d.exclusive) tags.push('专属');
  if (d.rarity === -1 && d.subtype) tags.push(d.subtype === 'start' ? '开局灾厄' : d.subtype === 'risk' ? '高风险中收益' : '可净化');
  if (d.tbd) tags.push('稀有度待定');
  tags.push(owned ? '已持有' : '未获得');

  const heroHtml = hero(rm.iconHtml(d, 'id-icon-img'), d.name, color,
    `${rm.rarityName(d.rarity)} · ${CATEGORY_LABEL[d.category] ?? d.category}`, tags);

  const comboHtml = combos.length
    ? combos.map(c => `<div class="id-combo">✦ <b>${c.name}</b>${active.has(c.id) ? '<span class="ok">（已觉醒）</span>' : '<span class="dim">（未集齐）</span>'} — <span class="dim">${c.desc}</span></div>`).join('')
    : '';

  const dropLine = relicDropLine(d);
  const acquire = `<div class="id-acquire">${relicAcquireText(d)}${dropLine ? `<span class="dim">${dropLine}</span>` : ''}</div>`;

  return card(heroHtml, [
    section('📊 数值', `<div class="id-stats">${statRow('稀有度', rm.rarityName(d.rarity))}${statRow('类别', CATEGORY_LABEL[d.category] ?? d.category)}${statRow('持有状态', owned ? '已持有' : '未获得')}${d.tbd ? statRow('备注', '数值 / 稀有度待定') : ''}</div>`),
    section('✦ 效果', `<div class="id-text">${d.desc}</div>`),
    d.lore ? section('📖 介绍', `<div class="id-text id-lore">${d.lore}</div>`) : '',
    d.note ? section('🗒️ 备注', `<div class="id-text dim">${d.note}</div>`) : '',
    comboHtml ? section('🔗 组合质变', comboHtml) : '',
    section('🗺️ 获取方式', acquire),
  ]);
}

// ============ 装备 ============

export function equipmentDetailHtml(id: string): string {
  const player = Player.getInstance();
  const e = player.state.bag.find(x => x.id === id);
  if (!e) return '<div class="item-detail"><div class="id-empty">未找到该装备。</div></div>';
  const q = dataManager.equipment.quality[e.quality];
  const meta = SLOT_META[e.slot];
  const equipped = e.id === player.state.weaponId || e.id === player.state.armorId || e.id === player.state.accessoryId;

  const tags = [equipped ? '已穿戴' : '', e.isFavorite ? '⭐ 已收藏' : '', e.source === 'boss' ? 'Boss 产出' : ''].filter(Boolean);

  const heroHtml = hero(meta.icon, e.name, q.color, `${q.name} · ${meta.label} · Lv.${e.level}`, tags);

  const stats = e.slot === 'accessory'
    ? `${statRow(e.accessoryStat === 'crit' ? '🎯 暴击率' : '🌀 闪避率', `+${fmtNum(e.accessoryValue ?? 0)}%`)}`
    : `${statRow('⚔️ 攻击力', String(e.attack))}${statRow('🛡️ 防御力', String(e.defense))}`;

  const affixHtml = e.affixes.length
    ? e.affixes.map(a => {
      const def = dataManager.equipment.affixes.find(d => d.name === a.name);
      const text = def?.description?.replace('{v}', String(a.value)) ?? `${a.name}+${a.value}`;
      return `<div class="id-stat"><span class="id-stat-k">✦ ${a.name}</span><span class="id-stat-v">${text}</span></div>`;
    }).join('')
    : '<div class="dim">无词条</div>';

  return card(heroHtml, [
    section('📊 数值', `<div class="id-stats">${stats}${statRow('装备等级', `Lv.${e.level}`)}${statRow('品质', q.name)}${statRow('类型', meta.label)}</div>`),
    section('✦ 词条', `<div class="id-stats">${affixHtml}</div>`),
    section('💰 价值', `<div class="id-stats">${statRow('回收价', `${e.sellPrice} 金币`)}${statRow('购买价', `${e.buyPrice} 金币`)}</div>`),
    section('🗺️ 获取方式', `<div class="id-acquire">${EQUIP_SOURCE[e.source] ?? '未知途径'}</div>`),
  ]);
}

// ============ 药水 ============

export function potionDetailHtml(tier: PotionTier): string {
  const def = dataManager.getPotion(tier);
  if (!def) return '<div class="item-detail"><div class="id-empty">未找到该药水。</div></div>';
  const count = Player.getInstance().getPotionCount(tier);
  const floorText = def.maxFloor >= 9999 ? `${def.minFloor} 层以上` : `第 ${def.minFloor}–${def.maxFloor} 层`;

  const heroHtml = hero(
    dataManager.potionIconImg(tier, 'id-icon-img'),
    def.name, def.color,
    `药水 · ${floorText}`,
    [count > 0 ? `持有 ×${count}` : '未持有'],
  );

  return card(heroHtml, [
    section('📊 数值', `<div class="id-stats">${statRow('回复量', `${Math.round(def.healPct * 100)}% 最大生命`)}${statRow('售价', `${def.price} 金币`)}${statRow('出现楼层', floorText)}${statRow('持有数量', `×${count}`)}</div>`),
    section('✦ 效果', `<div class="id-text">使用后立即回复 ${Math.round(def.healPct * 100)}% 最大生命（受遗物「药水回复量」加成影响）。</div>`),
    section('🗺️ 获取方式', `<div class="id-acquire">商人·老古 / 女巫·薇薇安 处购买；宝箱开出；怪物掉落（低 1–2 档）；任务奖励。</div>`),
  ]);
}

// ============ 钥匙 ============

export function keyDetailHtml(): string {
  const player = Player.getInstance();
  const price = Math.round(50 + 30 * Math.floor(player.state.currentFloor / 10));
  const heroHtml = hero('🗝️', '钥匙', '#ffaa00', '通用道具 · 消耗品', [player.state.keys > 0 ? `持有 ×${player.state.keys}` : '未持有']);
  return card(heroHtml, [
    section('📊 数值', `<div class="id-stats">${statRow('持有数量', `×${player.state.keys}`)}${statRow('当前单价', `${price} 金币`)}</div>`),
    section('✦ 效果', `<div class="id-text">用于开启上锁的宝箱与机关门。</div>`),
    section('🗺️ 获取方式', `<div class="id-acquire">商人·老古 处购买（价格随楼层递增：50 + 30×⌊楼层/10⌋）；遗物「钥匙串」每层开始时提供 1 把。</div>`),
  ]);
}

// ============ 路由 ============

export function itemDetailHtml(req: ItemDetailRequest): string {
  switch (req.kind) {
    case 'relic': return relicDetailHtml(req.id);
    case 'equipment': return equipmentDetailHtml(req.id);
    case 'potion': return potionDetailHtml(req.tier);
    case 'key': return keyDetailHtml();
  }
}

export function itemDetailTitle(req: ItemDetailRequest): string {
  switch (req.kind) {
    case 'relic': return RelicManager.getInstance().def(req.id)?.name ?? '遗物';
    case 'equipment': return Player.getInstance().state.bag.find(x => x.id === req.id)?.name ?? '装备';
    case 'potion': return dataManager.getPotion(req.tier)?.name ?? '药水';
    case 'key': return '钥匙';
  }
}
