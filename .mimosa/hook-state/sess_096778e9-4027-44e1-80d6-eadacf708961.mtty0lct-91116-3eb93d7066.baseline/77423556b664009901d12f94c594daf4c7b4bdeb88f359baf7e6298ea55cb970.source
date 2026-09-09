/**
 * 角色面板（C键）：详细属性、装备槽管理、战力、货币与加成一览。
 */
import { OverlayPanel } from './OverlayPanel';
import { dataManager } from '../core/DataManager';
import { Player } from '../entities/Player';
import { InventoryManager } from '../systems/InventoryManager';
import type { EquipSlot } from '../types';

const SLOT_LABELS: Record<EquipSlot, string> = {
  main_hand: '主手武器', off_hand: '副手/盾牌', head: '头盔', body: '护甲', feet: '靴子', accessory_1: '饰品 1', accessory_2: '饰品 2',
};

export class CharacterPanel extends OverlayPanel {
  constructor(parent: HTMLElement) {
    super(parent, '🧝 角色面板');
  }

  render(): void {
    this.clearBody();
    const player = Player.getInstance();
    const inv = InventoryManager.getInstance();
    const mods = player.getCombatModifiers();

    const slotGrid = document.createElement('div');
    slotGrid.className = 'equip-grid';
    for (const slot of Object.keys(SLOT_LABELS) as EquipSlot[]) {
      const eq = player.getEquipped(slot);
      const cell = document.createElement('div');
      cell.className = 'equip-slot';
      if (eq) {
        const qName = dataManager.config.quality[eq.quality].name;
        cell.innerHTML = `
          <div class="slot-name">${SLOT_LABELS[slot]}</div>
          <div class="q-${eq.quality}">${eq.name} <span style="font-size:11px">Lv.${eq.level} ${qName}</span></div>
          <div style="font-size:11.5px;color:var(--text-dim)">
            ${eq.finalAttack > 0 ? `攻+${eq.finalAttack} ` : ''}${eq.finalDefense > 0 ? `防+${eq.finalDefense} ` : ''}${eq.finalHpBonus > 0 ? `血+${eq.finalHpBonus}` : ''}
          </div>`;
        const btn = document.createElement('button');
        btn.className = 'btn small';
        btn.textContent = '卸下';
        btn.style.marginTop = '4px';
        btn.addEventListener('click', () => {
          inv.unequip(slot);
          this.render();
        });
        cell.appendChild(btn);
      } else {
        cell.innerHTML = `<div class="slot-name">${SLOT_LABELS[slot]}</div><div style="color:#555c70">空</div>`;
      }
      slotGrid.appendChild(cell);
    }

    const bonusLines: string[] = [];
    if (mods.lifesteal > 0) bonusLines.push(`生命偷取 ${(mods.lifesteal * 100).toFixed(1)}%`);
    if (mods.fireDamage > 0) bonusLines.push(`火焰伤害 +${Math.round(mods.fireDamage)}`);
    if (mods.poisonOnHit > 0) bonusLines.push(`攻击附带中毒 ${(mods.poisonOnHit * 100).toFixed(0)}%`);
    if (mods.thorns > 0) bonusLines.push(`伤害反弹 ${(mods.thorns * 100).toFixed(0)}%`);
    if (mods.goldBonus > 0) bonusLines.push(`金币加成 +${(mods.goldBonus * 100).toFixed(0)}%`);
    if (mods.expBonus > 0) bonusLines.push(`经验加成 +${(mods.expBonus * 100).toFixed(0)}%`);
    if (mods.soulBonus > 0) bonusLines.push(`魂晶加成 +${(mods.soulBonus * 100).toFixed(0)}%`);
    if (mods.bossDamage > 0) bonusLines.push(`对Boss伤害 +${(mods.bossDamage * 100).toFixed(0)}%`);

    this.body.innerHTML = `
      <div class="stat-grid" style="grid-template-columns:1fr 1fr 1fr;font-size:13.5px;margin-bottom:10px">
        <span class="stat-label">等级</span><span></span><span class="stat-value">${player.level}</span>
        <span class="stat-label">生命</span><span></span><span class="stat-value">${player.hp} / ${player.maxHp}</span>
        <span class="stat-label">攻击力</span><span></span><span class="stat-value">${player.attack}</span>
        <span class="stat-label">防御力</span><span></span><span class="stat-value">${player.defense}</span>
        <span class="stat-label">暴击率</span><span></span><span class="stat-value">${(player.critRate * 100).toFixed(1)}%</span>
        <span class="stat-label">闪避率</span><span></span><span class="stat-value">${(player.dodgeRate * 100).toFixed(1)}%</span>
        <span class="stat-label">伤害加成</span><span></span><span class="stat-value">${(player.damageBonus * 100).toFixed(0)}%</span>
        <span class="stat-label">金币</span><span></span><span class="stat-value">${player.gold}</span>
        <span class="stat-label">魂晶</span><span></span><span class="stat-value">${player.soul}</span>
        <span class="stat-label">综合战力</span><span></span><span class="stat-value" style="color:var(--text-gold)">${player.combatPower()}</span>
      </div>
      <div class="panel-section-title">装备栏</div>
    `;
    this.body.appendChild(slotGrid);
    if (bonusLines.length > 0) {
      const bonusEl = document.createElement('div');
      bonusEl.innerHTML = `<div class="panel-section-title" style="margin-top:10px">特殊加成（装备词条 + 藏品）</div>
        <div style="font-size:12.5px;line-height:1.9">${bonusLines.join('<br>')}</div>`;
      this.body.appendChild(bonusEl);
    }
  }
}
