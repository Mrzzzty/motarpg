/**
 * 菜单面板（M键/Esc）：难度切换、存档管理（导出/导入）、无尽模式入口、新游戏、统计。
 */
import { OverlayPanel } from './OverlayPanel';
import { dataManager } from '../core/DataManager';
import { gameState } from '../core/GameState';
import { Player } from '../entities/Player';
import { DifficultySystem } from '../systems/DifficultySystem';
import { SaveManager } from '../systems/SaveManager';
import { EndlessSystem } from '../systems/EndlessSystem';
import { GameStarter } from './GameStarter';

export class MenuPanel extends OverlayPanel {
  onNewGame: (() => void) | null = null;

  constructor(parent: HTMLElement) {
    super(parent, '⚙️ 菜单');
  }

  render(): void {
    this.clearBody();
    const player = Player.getInstance();
    const diffSystem = DifficultySystem.getInstance();
    const save = SaveManager.getInstance();
    const endless = EndlessSystem.getInstance();

    // 难度区
    const diffTitle = document.createElement('div');
    diffTitle.className = 'panel-section-title';
    diffTitle.textContent = gameState.difficultySystemUnlocked
      ? '难度选择'
      : `难度选择（到达第 ${dataManager.world.difficultyUnlockFloor} 层解锁）`;
    this.body.appendChild(diffTitle);

    for (const diff of dataManager.difficulties) {
      const unlocked = gameState.difficultySystemUnlocked && diffSystem.isUnlocked(diff.id, gameState.maxFloorReached);
      const isCurrent = player.currentDifficulty === diff.id;
      const row = document.createElement('div');
      row.className = `difficulty-row ${isCurrent ? 'current' : ''} ${unlocked ? '' : 'locked'}`;
      row.innerHTML = `
        <span>${diff.icon} ${diff.name}</span>
        <span style="font-size:11.5px;color:var(--text-dim)">${unlocked ? diff.description : `第 ${diff.unlockFloor} 层解锁`}</span>`;
      if (unlocked && !isCurrent) {
        const btn = document.createElement('button');
        btn.className = 'btn small primary';
        btn.textContent = '切换';
        btn.addEventListener('click', () => {
          if (diffSystem.switchDifficulty(diff.id)) {
            this.render();
          }
        });
        row.appendChild(btn);
      } else if (isCurrent) {
        row.insertAdjacentHTML('beforeend', '<span style="color:var(--text-gold);font-size:12px">当前</span>');
      }
      this.body.appendChild(row);
    }

    // 无尽模式
    if (gameState.mode === 'main') {
      const endlessEl = document.createElement('div');
      endlessEl.className = 'panel-section-title';
      endlessEl.style.marginTop = '12px';
      endlessEl.textContent = '深渊回廊（无尽模式）';
      this.body.appendChild(endlessEl);
      const endlessRow = document.createElement('div');
      endlessRow.className = 'difficulty-row';
      endlessRow.innerHTML = `<span>🌀 无尽回廊</span><span style="font-size:11.5px;color:var(--text-dim)">${endless.isUnlocked ? `历史最高 ${endless.bestFloor} 层` : `击败第 ${dataManager.config.endless.unlockAfterFloor} 层Boss解锁`}</span>`;
      if (endless.isUnlocked) {
        const btn = document.createElement('button');
        btn.className = 'btn small primary';
        btn.textContent = '进入';
        btn.addEventListener('click', () => {
          this.hide();
          endless.enter();
        });
        endlessRow.appendChild(btn);
      }
      this.body.appendChild(endlessRow);
    }

    // 统计
    const statsTitle = document.createElement('div');
    statsTitle.className = 'panel-section-title';
    statsTitle.style.marginTop = '12px';
    statsTitle.textContent = '冒险统计';
    this.body.appendChild(statsTitle);
    const stats = save.getStats();
    const statsEl = document.createElement('div');
    statsEl.className = 'menu-stats';
    statsEl.innerHTML = `
      <span style="color:var(--text-dim)">击败怪物</span><span>${stats.totalMonstersDefeated}</span>
      <span style="color:var(--text-dim)">击败Boss</span><span>${stats.totalBossesDefeated}</span>
      <span style="color:var(--text-dim)">开启宝箱</span><span>${stats.totalChestsOpened}</span>
      <span style="color:var(--text-dim)">累计金币</span><span>${Math.floor(stats.totalGoldEarned)}</span>
      <span style="color:var(--text-dim)">累计魂晶</span><span>${Math.floor(stats.totalSoulEarned)}</span>
      <span style="color:var(--text-dim)">发现藏品</span><span>${stats.totalCollectiblesFound}</span>
      <span style="color:var(--text-dim)">探索楼层</span><span>${stats.floorsExplored}</span>
      <span style="color:var(--text-dim)">游戏时长</span><span>${Math.floor(stats.playTimeSeconds / 60)} 分钟</span>
    `;
    this.body.appendChild(statsEl);

    // 存档管理
    const saveTitle = document.createElement('div');
    saveTitle.className = 'panel-section-title';
    saveTitle.style.marginTop = '12px';
    saveTitle.textContent = '存档管理';
    this.body.appendChild(saveTitle);
    const saveRow = document.createElement('div');
    saveRow.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn';
    saveBtn.textContent = '💾 存档';
    saveBtn.addEventListener('click', () => save.save());

    const exportBtn = document.createElement('button');
    exportBtn.className = 'btn';
    exportBtn.textContent = '📤 导出存档';
    exportBtn.addEventListener('click', () => {
      save.downloadSaveFile();
      event_notify('存档已导出为JSON文件', 'success');
    });

    const importBtn = document.createElement('button');
    importBtn.className = 'btn';
    importBtn.textContent = '📥 导入存档';
    importBtn.addEventListener('click', () => this.showImportDialog());

    const newGameBtn = document.createElement('button');
    newGameBtn.className = 'btn danger';
    newGameBtn.textContent = '🔄 重新开始';
    newGameBtn.addEventListener('click', () => {
      if (window.confirm('确定要放弃当前进度，重新开始吗？（此操作会清除存档）')) {
        this.hide();
        GameStarter.newGame();
      }
    });

    saveRow.append(saveBtn, exportBtn, importBtn, newGameBtn);
    this.body.appendChild(saveRow);
  }

  private showImportDialog(): void {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin-top:10px';
    wrap.innerHTML = `
      <textarea class="import-textarea" style="width:100%;height:90px;background:var(--bg-input);color:var(--text-primary);border:1px solid var(--border-dim);border-radius:6px;padding:8px;font-size:12px" placeholder="粘贴存档JSON，或使用下方按钮选择文件"></textarea>
      <div style="display:flex;gap:8px;margin-top:6px">
        <button class="btn small primary import-confirm">导入</button>
        <button class="btn small import-file">选择文件…</button>
      </div>`;
    this.body.appendChild(wrap);

    const textarea = wrap.querySelector('textarea')!;
    wrap.querySelector('.import-confirm')!.addEventListener('click', () => {
      const json = textarea.value.trim();
      if (!json) {
        event_notify('请先粘贴存档内容或选择文件', 'warning');
        return;
      }
      if (SaveManager.getInstance().importSave(json)) {
        event_notify('导入成功，即将重新加载…', 'success');
        window.setTimeout(() => GameStarter.loadGame(), 600);
      } else {
        event_notify('存档无效或格式错误', 'error');
      }
    });
    wrap.querySelector('.import-file')!.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.addEventListener('change', () => {
        const file = input.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          textarea.value = String(reader.result ?? '');
        };
        reader.readAsText(file);
      });
      input.click();
    });
  }
}

function event_notify(message: string, type: 'info' | 'success' | 'warning' | 'error'): void {
  import('../core/EventBus').then(({ eventBus }) => {
    eventBus.emit('notification', { message, type });
  });
}
