/**
 * 房间编辑器（开发工具，**F2** 开关）——亲手设计房间并立即在 3D 里预览。
 *
 * 设计要点（完整规范见 `docs/房间编辑器.md`）：
 *   1. **方向是一等公民**：四边各有「门（出口）」开关与「入口方向」。
 *      导出时会在墙外自动补 2 格走廊「门槽」——否则 PrefabMap 无法把墙上的洞认成门
 *      （门的判定是「房间边界上的空地格，且房外相邻格也是空地」）。
 *   2. **种类**：房间类型决定内容规范（战斗房必须阻塞主路径、宝箱房必须有守卫、安全房不放怪…）。
 *   3. 画布存的就是 `PrefabMap` 的**图例字符**，导出即字符图，二者永不脱节：
 *      编辑器 → 字符图 → `buildPrefabFloor` 是一条单链路。
 *
 * 交互：左键绘制 / 按住拖拽连续画；**右键固定涂成空地**（快速清障，与当前工具无关）；
 * 工具=画笔 / 橡皮 / 取色；**实时 3D 预览改为点击按钮开启 / 可关闭**——开启后编辑约 0.2 秒
 * 自动把当前设计通过 `buildPrefabFloor` 载入为预览楼层（3D 实景，含光照与建模）。
 *
 * 面板是**浮动窗口**（不铺满整屏，可拖标题栏移动 / 右下角缩放），这样设计时仍能看见四周的游戏画面。
 */
import { eventBus } from '../core/EventBus';
import { gameState } from '../core/GameState';
import { dataManager } from '../core/DataManager';
import { FloorManager } from '../core/FloorManager';
import { CameraController } from '../core/CameraController';
import { Player } from '../entities/Player';
import { WorldManager } from '../core/WorldManager';
import { buildPrefabFloor, resolveRoomTension, type PrefabMapDef } from '../map/PrefabMap';
import { loadStore, removeRoom, saveRoom, type RoomsStore, type StoredRoom } from '../map/RoomStore';
import {
  TEMPLATE_MARGIN as MARGIN, canvasSize, defaultCellAt, doorCell, entryInnerCell,
  isInside, stubCells, templateRows, templateToPrefab, type RoomTemplate,
} from '../map/RoomTemplate';
import {
  EXIT_PATTERN_INFO, EXIT_PATTERN_PRESETS, EXIT_PATTERNS, exitsLabel, matchPattern, patternFromExits,
} from '../map/ExitPattern';
import type { Direction, EntityRuntimeState, ExitPattern, FloorMap, RoomType } from '../types';

/** 画布单元格 = PrefabMap 图例的单个字符 */
type Cell = string;

interface PaletteItem {
  ch: Cell;
  label: string;
  color: string;
  glyph?: string;
}

const DIRS: Direction[] = ['north', 'east', 'south', 'west'];
const DIR_LABEL: Record<Direction, string> = { north: '北', east: '东', south: '南', west: '西' };
/** 画布缩放档（格边长 px） */
const ZOOM_STEPS = [10, 14, 18, 22, 26, 34];
const DEFAULT_CELL_PX = 26;
/** 房间尺寸范围（格，含墙圈）：3 = 1×1 内空间；64 = 超大房（配合滚动与缩放） */
const MIN_SIZE = 3;
const MAX_SIZE = 64;
const DRAFT_KEY = 'motarpg_room_editor_draft';

const TERRAIN: PaletteItem[] = [
  { ch: '0', label: '空地', color: '#3a4356' },
  { ch: '1', label: '墙', color: '#1d2330' },
  { ch: 'p', label: '柱子', color: '#6b6152', glyph: '▮' },
  { ch: 'x', label: '悬崖', color: '#0d1016', glyph: '≈' },
];

const ENTITY: PaletteItem[] = [
  { ch: '2', label: '怪物', color: '#3a4356', glyph: '☠' },
  { ch: '3', label: '精英', color: '#3a4356', glyph: '❗' },
  { ch: '4', label: '宝箱', color: '#3a4356', glyph: '▣' },
  { ch: 'g', label: '大宝箱', color: '#3a4356', glyph: '◆' },
  { ch: 'r', label: '遗物箱', color: '#3a4356', glyph: '✦' },
  { ch: 'D', label: '楼梯', color: '#3a4356', glyph: '↓' },
  { ch: 'S', label: '入口', color: '#3a4356', glyph: '↑' },
  { ch: 'B', label: 'Boss', color: '#3a4356', glyph: '☠' },
  { ch: 't', label: '火把', color: '#1d2330', glyph: '🕯' },
  { ch: 'c', label: '地毯', color: '#3a4356', glyph: '▭' },
  { ch: 'q', label: '药水', color: '#3a4356', glyph: '🧪' },
  { ch: 'f', label: '治疗泉', color: '#3a4356', glyph: '♨' },
  { ch: '5', label: '商人', color: '#3a4356', glyph: '$' },
  { ch: 'w', label: '女巫', color: '#3a4356', glyph: '⚗' },
  { ch: 'k', label: '铁匠', color: '#3a4356', glyph: '⚒' },
  { ch: 'u', label: '引导者', color: '#3a4356', glyph: '☺' },
  { ch: 'o', label: '大锅', color: '#6b6152', glyph: '◉' },
  { ch: 'h', label: '药架', color: '#6b6152', glyph: '☰' },
];

/**
 * 张力值参考档位（仅作提示文案）。张力**改为自定义数字输入**，便于后续更精细地划分；
 * 空 = 跟随房型默认，显式填写则让手工房偏离房型默认、参与运气平衡器。
 */
const TENSION_HINTS = '参考档位：−3 大泄压 / −2 解压 / −1 泄压 / 0 中性 / +1 加压 / +2 高压 / +3 极压';

/** 张力值格式化：正数带 + 号 */
const fmtTension = (v: number): string => (v > 0 ? `+${v}` : `${v}`);

const ROOM_TYPES: { id: RoomType; label: string }[] = [
  { id: 'combat', label: '战斗房' },
  { id: 'elite', label: '精英房' },
  { id: 'chest', label: '宝箱房' },
  { id: 'merchant', label: '商栈' },
  { id: 'witch', label: '女巫酿药间' },
  { id: 'blacksmith', label: '铁匠铺' },
  { id: 'boss', label: 'Boss 房' },
  { id: 'rest', label: '休整房' },
  { id: 'start', label: '起点房' },
  { id: 'end', label: '终点房' },
];

const LEGEND = new Map<Cell, PaletteItem>();
for (const it of [...TERRAIN, ...ENTITY]) LEGEND.set(it.ch, it);

type Tool = 'paint' | 'erase' | 'pick';

export class RoomEditor {
  private static instance: RoomEditor;
  static getInstance(): RoomEditor {
    if (!RoomEditor.instance) RoomEditor.instance = new RoomEditor();
    return RoomEditor.instance;
  }

  private el: HTMLElement | null = null;
  private gridEl: HTMLElement | null = null;
  private terrainEl: HTMLElement | null = null;
  private entityEl: HTMLElement | null = null;
  private toolsEl: HTMLElement | null = null;
  private dirsEl: HTMLElement | null = null;
  private rowsEl: HTMLTextAreaElement | null = null;
  private statusEl: HTMLElement | null = null;
  private typeSel: HTMLSelectElement | null = null;
  private riskSel: HTMLSelectElement | null = null;
  /** 通口类型（出口模式）下拉：单口 / 上下通口 / 对角通口 / T型通口 / 四方通口（+ 自定义） */
  private patternSel: HTMLSelectElement | null = null;
  private patternInfoEl: HTMLElement | null = null;
  /** 张力值：**自定义数字输入**（空 = 跟随房型默认） */
  private tensionInput: HTMLInputElement | null = null;
  private tensionInfoEl: HTMLElement | null = null;
  private canvasScrollEl: HTMLElement | null = null;
  private panelEl: HTMLElement | null = null;
  private nameInput: HTMLInputElement | null = null;
  private noteInput: HTMLTextAreaElement | null = null;
  private wInput: HTMLInputElement | null = null;
  private hInput: HTMLInputElement | null = null;
  private previewSlot: HTMLElement | null = null;
  private previewInfoEl: HTMLElement | null = null;
  /** 预览开关按钮（标题栏）与「未开启」占位层 */
  private previewToggleBtn: HTMLButtonElement | null = null;
  private previewOffEl: HTMLElement | null = null;
  private roomListEl: HTMLSelectElement | null = null;
  private storeInfoEl: HTMLElement | null = null;

  // ============ 实时预览（把 3D 视口搬进面板，复用真实模型/光照） ============
  /** 预览是否已接管 3D 视口 */
  private previewActive = false;
  private previewTimer: number | null = null;
  /** 上次预览的设计指纹：没变就不重建（拖拽绘制时不浪费） */
  private previewKey = '';
  /** 预览用的"内容楼层"（决定怪物池/药水档位；开局取玩家当前层，否则第 1 层） */
  private contentFloor = 1;
  /** 进入预览前的运行状态快照（关闭时原样还原，预览绝不写进度） */
  private runSnapshot: {
    floor: FloorMap | null;
    states: Record<string, EntityRuntimeState>;
    floorId: number; x: number; y: number; roomId: string;
  } | null = null;
  private titleWasHidden = true;

  private opened = false;
  private painting = false;
  /** 本次拖拽是否为右键「涂空地」模式（与 tool 无关） */
  private rightErase = false;
  private draftLoaded = false;
  /** 画布缩放（格边长 px）；大房间可手动调小 + 滚动查看 */
  private cellPx = DEFAULT_CELL_PX;
  /** 手动调过缩放后不再自动适配 */
  private manualZoom = false;
  /** 画布格元素缓存：原地更新，避免大房间拖拽时反复重建上千节点 */
  private gridCells: HTMLElement[] = [];
  private gridKey = '';
  private zoomInfoEl: HTMLElement | null = null;

  // ============ 设计状态 ============
  private w = 7;
  private h = 6;
  private cells: Cell[] = [];
  private roomType: RoomType = 'combat';
  private roomName = '';
  /** 入口**固定为南**（玩家总是从下方进入）；设计变量是其它出口（见 ENT_MOVABLE） */
  private entry: Direction | null = 'south';
  private exits = new Set<Direction>(['south']);
  /** 风险档 1~3（null = 不结算，缺省）；标了则房内普通宝箱按 rewardMul 结算 */
  private risk: 1 | 2 | 3 | null = null;
  /**
   * 张力值（本房对路径张力的贡献；null = 跟随房型默认权重）。与 `mapGeneration.tension.weights`
   * 同尺度，是**后续「房间类型决定」**的输入维度。
   */
  private tension: number | null = null;
  private note = '';
  /** 浮动面板相对居中位置的位移（拖标题栏移动；双击标题栏复位） */
  private panelShift = { x: 0, y: 0 };
  private tool: Tool = 'paint';
  private brush: Cell = '1';

  private constructor() {}

  init(host: HTMLElement): void {
    if (this.el) return;
    const el = document.createElement('div');
    el.id = 'room-editor';
    el.className = 'hidden';
    el.innerHTML = `
      <div class="re-panel">
        <div class="re-head">
          <span>🏗 房间编辑器</span>
          <span class="dim">F2 开关 · 左键绘制 / 右键涂空地 · 拖标题栏移动 · 右下角缩放 · 3D 预览需点开</span>
          <span class="spacer"></span>
          <button class="re-btn" id="re-new">新建</button>
          <button class="re-btn" id="re-load">载入草稿</button>
          <button class="re-btn" id="re-save">保存草稿</button>
          <button class="re-btn primary" id="re-save-file">💾 保存到文件</button>
          <button class="re-btn" id="re-close">关闭</button>
        </div>
        <div class="re-body">
          <div class="re-col">
            <div class="re-title">地形</div>
            <div class="re-palette" id="re-terrain"></div>
            <div class="re-title">实体</div>
            <div class="re-palette" id="re-entity"></div>
            <div class="re-title">工具</div>
            <div class="re-palette" id="re-tools"></div>
            <div class="re-title">方向语义</div>
            <div class="re-hint">
              <b>入口固定在南边</b>（玩家总是从下方进入），所以设计变量是<b>其它出口</b>：<br>
              勾北 / 东 / 西门后，导出会自动在墙外补 2 格走廊门槽（门必须在房间边界且房外有路，否则 PrefabMap 不认）。<br>
              出口不同 → 玩家的「进入侧 → 去路」不同 → 主路径、守军摆位、装饰朝向都该随之变化。
            </div>
          </div>
          <div class="re-col re-canvas-wrap">
            <div class="re-dirbar" id="re-dirs"></div>
            <div class="re-patternbar">
              <span class="re-hint">通口类型</span>
              <select id="re-pattern"></select>
              <span class="re-hint" id="re-pattern-info">—</span>
            </div>
            <div class="re-zoombar">
              <button class="re-btn" id="re-zoom-out">−</button>
              <span class="re-hint" id="re-zoom-info">缩放 —</span>
              <button class="re-btn" id="re-zoom-in">＋</button>
              <button class="re-btn" id="re-fit">自适应</button>
            </div>
            <div class="re-canvas-scroll" id="re-canvas-scroll">
              <div class="re-grid" id="re-grid"></div>
            </div>
            <div class="re-hint">金色描边 = 门（南门是固定入口） · 虚线格 = 自动补偿的走廊门槽 · 大房间可滚动 / 缩放 · 右键涂空地</div>
          </div>
          <div class="re-col re-preview-col">
            <div class="re-title">
              <span>3D 预览</span>
              <span class="spacer"></span>
              <button class="re-btn" id="re-preview-toggle">▶ 打开预览</button>
            </div>
            <div class="re-preview-slot" id="re-preview">
              <div class="re-preview-off" id="re-preview-off">
                <div class="re-preview-off-title">预览未开启</div>
                <button class="re-btn primary" id="re-preview-open">▶ 打开 3D 预览</button>
                <div class="re-hint">开启后编辑约 0.2 秒自动重建（真实模型 / 光照 / 阴影）；可随时关闭</div>
              </div>
            </div>
            <div class="re-hint" id="re-preview-info">预览未开启 · 点上方「打开预览」加载 3D 实景</div>
          </div>
          <div class="re-col">
            <div class="re-title">房间属性</div>
            <div class="re-field"><label>种类</label><select id="re-type"></select></div>
            <div class="re-field"><label>名称</label><input id="re-name" placeholder="如：断桥守卫" /></div>
            <div class="re-field">
              <label>尺寸</label>
              <input id="re-w" type="number" min="3" max="64" />
              <span class="re-hint">×</span>
              <input id="re-h" type="number" min="3" max="64" />
              <button class="re-btn" id="re-apply">应用</button>
            </div>
            <div class="re-btnrow" style="margin-top:-2px">
              <button class="re-btn" data-preset="5x5">5×5</button>
              <button class="re-btn" data-preset="7x6">7×6</button>
              <button class="re-btn" data-preset="9x7">9×7</button>
              <button class="re-btn" data-preset="11x9">11×9</button>
              <button class="re-btn" data-preset="16x12">16×12</button>
            </div>
            <div class="re-hint" style="margin-bottom:8px">
              尺寸 = 含墙圈的整块矩形（3~64）；内空间 = 尺寸 − 2。墙圈之外还会留 2 格门槽外圈。
            </div>
            <div class="re-field"><label>入口</label><span class="re-fixed">南（固定）</span></div>
            <div class="re-field"><label>风险</label><select id="re-risk"></select></div>
            <div class="re-field">
              <label>张力</label>
              <input id="re-tension" type="number" step="any" placeholder="跟随房型" />
              <button class="re-btn" id="re-tension-default">默认</button>
            </div>
            <div class="re-hint" id="re-tension-info">张力值 = 本房对路径张力的贡献（正=加压 / 负=泄压），改为自定义数字输入以便更精细划分。</div>
            <div class="re-title">备注（写给 AI 看）</div>
            <textarea class="re-note" id="re-note"
              placeholder="例：这是区段末的高风险房。守军要挡在「南入口 → 北出口」的主路径上；只留北门。请据此补内容与掉落。"></textarea>
            <div class="re-title">房间档案 · src/data/rooms.json</div>
            <div class="re-field">
              <select id="re-room-list"></select>
              <button class="re-btn" id="re-room-load">载入</button>
              <button class="re-btn" id="re-room-del">删除</button>
            </div>
            <div class="re-hint" id="re-store-info">—</div>
            <div class="re-title">导出（字符图 + TypeScript）</div>
            <textarea class="re-rows" id="re-rows" readonly></textarea>
            <div class="re-btnrow">
              <button class="re-btn" id="re-copy">复制代码</button>
              <button class="re-btn" id="re-copy-rows">复制字符图</button>
            </div>
          </div>
        </div>
        <div class="re-status" id="re-status"></div>
      </div>`;
    host.appendChild(el);
    this.el = el;

    this.gridEl = el.querySelector('#re-grid');
    this.terrainEl = el.querySelector('#re-terrain');
    this.entityEl = el.querySelector('#re-entity');
    this.toolsEl = el.querySelector('#re-tools');
    this.dirsEl = el.querySelector('#re-dirs');
    this.rowsEl = el.querySelector('#re-rows');
    this.statusEl = el.querySelector('#re-status');
    this.zoomInfoEl = el.querySelector('#re-zoom-info');
    this.typeSel = el.querySelector('#re-type');
    this.riskSel = el.querySelector('#re-risk');
    this.patternSel = el.querySelector('#re-pattern');
    this.patternInfoEl = el.querySelector('#re-pattern-info');
    this.tensionInput = el.querySelector('#re-tension');
    this.tensionInfoEl = el.querySelector('#re-tension-info');
    this.canvasScrollEl = el.querySelector('#re-canvas-scroll');
    this.nameInput = el.querySelector('#re-name');
    this.noteInput = el.querySelector('#re-note');
    this.wInput = el.querySelector('#re-w');
    this.hInput = el.querySelector('#re-h');
    this.previewSlot = el.querySelector('#re-preview');
    this.previewInfoEl = el.querySelector('#re-preview-info');
    this.previewToggleBtn = el.querySelector('#re-preview-toggle');
    this.previewOffEl = el.querySelector('#re-preview-off');
    this.roomListEl = el.querySelector('#re-room-list');
    this.storeInfoEl = el.querySelector('#re-store-info');

    // 种类下拉
    for (const t of ROOM_TYPES) {
      const o = document.createElement('option');
      o.value = t.id;
      o.textContent = t.label;
      this.typeSel!.appendChild(o);
    }
    this.typeSel!.value = this.roomType;

    // 风险档下拉（倍率直接取自配置，避免文档/代码脱节）
    const rm = dataManager.mapGen.content.risk.rewardMul;
    for (const o of [
      { v: '', label: '不结算（缺省）' },
      { v: '1', label: `低 ×${(rm[0] ?? 1).toFixed(2)}` },
      { v: '2', label: `中 ×${(rm[1] ?? 1).toFixed(2)}` },
      { v: '3', label: `高 ×${(rm[2] ?? 1).toFixed(2)}` },
    ]) {
      const opt = document.createElement('option');
      opt.value = o.v;
      opt.textContent = o.label;
      this.riskSel!.appendChild(opt);
    }

    // 通口类型下拉：5 种预设 +「自定义」（手动微调后自动切到自定义）
    for (const p of EXIT_PATTERNS) {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = `${EXIT_PATTERN_INFO[p].label}（${exitsLabel(EXIT_PATTERN_PRESETS[p])}）`;
      this.patternSel!.appendChild(opt);
    }
    const customOpt = document.createElement('option');
    customOpt.value = 'custom';
    customOpt.textContent = '自定义（手动微调）';
    this.patternSel!.appendChild(customOpt);

    this.buildPalette(this.terrainEl!, TERRAIN);
    this.buildPalette(this.entityEl!, ENTITY);
    this.buildToolPalette();

    // 门（出口）开关：南门是固定入口，其余三边可选
    for (const d of DIRS) {
      const b = document.createElement('div');
      b.className = 're-dirbtn';
      b.dataset.dir = d;
      b.textContent = d === 'south' ? '南门·入口（固定）' : `${DIR_LABEL[d]}门`;
      b.addEventListener('click', () => { this.toggleExit(d); });
      this.dirsEl!.appendChild(b);
    }

    this.bindPanel(el);
    this.bindDrag(el);
    this.bindGrid();
    this.newRoom(this.w, this.h);
    this.setStatus('入口固定南边 · 选通口类型或勾北/东/西出口 · 右键涂空地 · 3D 预览点开 · 「保存到文件」写入 src/data/rooms.json');
  }

  // ============ DOM 绑定 ============

  private bindPanel(el: HTMLElement): void {
    // 面板内按键不冒泡到游戏快捷键（B/C/I/方向键…）
    el.addEventListener('keydown', e => e.stopPropagation());

    el.querySelector('#re-close')!.addEventListener('click', () => this.hide());
    el.querySelector('#re-new')!.addEventListener('click', () => {
      this.newRoom(this.w, this.h);
      this.setStatus(`已新建 ${this.w}×${this.h} 空房`);
    });
    el.querySelector('#re-save')!.addEventListener('click', () => this.saveDraft());
    el.querySelector('#re-load')!.addEventListener('click', () => {
      if (this.loadDraft()) this.setStatus('已从本地草稿恢复');
      else this.setStatus('没有可用的本地草稿', true);
    });
    el.querySelector('#re-apply')!.addEventListener('click', () => this.applySize());
    // 尺寸输入框回车即应用（省一次点击）
    for (const input of [this.wInput, this.hInput]) {
      input!.addEventListener('keydown', e => {
        e.stopPropagation();
        if (e.key === 'Enter') this.applySize();
      });
    }
    // 尺寸预设
    for (const btn of Array.from(el.querySelectorAll('[data-preset]')) as HTMLElement[]) {
      btn.addEventListener('click', () => {
        const [w, h] = (btn.dataset.preset ?? '').split('x').map(Number);
        if (!Number.isFinite(w) || !Number.isFinite(h)) return;
        this.manualZoom = false;
        this.resize(w, h);
        this.setStatus(`尺寸 → ${w}×${h}（内空间 ${w - 2}×${h - 2}）`);
      });
    }
    // 画布缩放
    el.querySelector('#re-zoom-out')!.addEventListener('click', () => this.zoomBy(-1));
    el.querySelector('#re-zoom-in')!.addEventListener('click', () => this.zoomBy(1));
    el.querySelector('#re-fit')!.addEventListener('click', () => {
      this.manualZoom = false;
      this.refresh();
      this.setStatus('画布已自适应窗口');
    });
    el.querySelector('#re-copy')!.addEventListener('click', () => this.copyToClipboard(this.exportText(), '代码'));
    el.querySelector('#re-copy-rows')!.addEventListener('click', () => this.copyToClipboard(this.buildRows().join('\n'), '字符图'));
    // 保存到工程文件（立即写入 src/data/rooms.json）
    el.querySelector('#re-save-file')!.addEventListener('click', () => { void this.saveToFile(); });
    el.querySelector('#re-room-load')!.addEventListener('click', () => { void this.loadFromFile(); });
    el.querySelector('#re-room-del')!.addEventListener('click', () => { void this.deleteFromFile(); });

    this.typeSel!.addEventListener('change', () => {
      this.roomType = this.typeSel!.value as RoomType;
      if (!this.roomName) this.nameInput!.placeholder = ROOM_TYPES.find(t => t.id === this.roomType)?.label ?? '';
      this.refresh();
    });
    this.nameInput!.addEventListener('input', () => { this.roomName = this.nameInput!.value; this.refresh(); });
    // 备注是「写给 AI 看」的通道：只存不进渲染，改完自动纳入预览指纹（无需重建，见 schedulePreview 的 key）
    this.noteInput!.addEventListener('input', () => { this.note = this.noteInput!.value; });
    this.riskSel!.addEventListener('change', () => {
      const v = this.riskSel!.value;
      this.risk = v === '' ? null : (Number(v) as 1 | 2 | 3);
      this.refresh();
    });
    // 通口类型：点选预设 = 批量开关北/东/西出口（南门恒开）；再手动微调会自动变成「自定义」
    this.patternSel!.addEventListener('change', () => {
      const v = this.patternSel!.value;
      if (v !== 'custom') this.applyPattern(v as ExitPattern);
    });
    // 张力值：自定义数字输入（空 = 跟随房型默认 null；非法输入回退默认）
    this.tensionInput!.addEventListener('input', () => {
      const raw = this.tensionInput!.value.trim();
      if (raw === '') {
        this.tension = null;
      } else {
        const n = Number(raw);
        if (!Number.isFinite(n)) return; // 正在输入中（如 "-" / "1."）先不改
        this.tension = n;
      }
      this.refresh();
    });
    this.tensionInput!.addEventListener('change', () => {
      this.setStatus(this.tension === null
        ? `张力值 → 跟随房型默认（${fmtTension(resolveRoomTension(this.roomType))}）`
        : `张力值 → ${fmtTension(this.tension)}（自定义）`);
    });
    el.querySelector('#re-tension-default')!.addEventListener('click', () => {
      this.tension = null;
      if (this.tensionInput) this.tensionInput.value = '';
      this.refresh();
      this.setStatus(`张力值 → 跟随房型默认（${fmtTension(resolveRoomTension(this.roomType))}）`);
    });
    // 3D 预览：点击开启 / 关闭（标题栏按钮与占位层按钮同效）
    this.previewToggleBtn!.addEventListener('click', () => this.togglePreview());
    el.querySelector('#re-preview-open')!.addEventListener('click', () => this.togglePreview());

    window.addEventListener('keydown', e => {
      if (e.key !== 'F2') return;
      const t = e.target;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) return;
      e.preventDefault();
      this.toggle();
    });
  }

  /** 浮动面板：拖标题栏移动（双击复位）——面板不铺满整屏，移动后仍能看见四周游戏画面 */
  private bindDrag(el: HTMLElement): void {
    const panel = el.querySelector('.re-panel') as HTMLElement | null;
    const head = el.querySelector('.re-head') as HTMLElement | null;
    if (!panel || !head) return;
    this.panelEl = panel;
    let sx = 0; let sy = 0; let ox = 0; let oy = 0; let dragging = false;
    head.addEventListener('mousedown', e => {
      const t = e.target as HTMLElement;
      if (t.closest('button, input, select, textarea, a')) return; // 标题栏上的按钮不触发拖拽
      dragging = true;
      sx = e.clientX; sy = e.clientY; ox = this.panelShift.x; oy = this.panelShift.y;
      head.classList.add('dragging');
      e.preventDefault();
    });
    window.addEventListener('mousemove', e => {
      if (!dragging) return;
      this.panelShift = { x: ox + (e.clientX - sx), y: oy + (e.clientY - sy) };
      this.applyPanelShift();
    });
    window.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      head.classList.remove('dragging');
    });
    head.addEventListener('dblclick', e => {
      const t = e.target as HTMLElement;
      if (t.closest('button, input, select, textarea')) return;
      this.panelShift = { x: 0, y: 0 };
      this.applyPanelShift();
    });
    this.applyPanelShift();
  }

  private applyPanelShift(): void {
    if (this.panelEl) this.panelEl.style.transform = `translate(${this.panelShift.x}px, ${this.panelShift.y}px)`;
  }

  private bindGrid(): void {
    this.gridEl!.addEventListener('mousedown', e => {
      const c = (e.target as HTMLElement).closest('.re-cell') as HTMLElement | null;
      if (!c) return;
      e.preventDefault();
      const cx = Number(c.dataset.cx);
      const cy = Number(c.dataset.cy);
      // 右键：**固定涂成空地**（与当前工具/画笔无关），支持按住连续涂
      if (e.button === 2) {
        this.rightErase = true;
        this.painting = true;
        this.paintFloorAt(cx, cy);
        this.refresh();
        return;
      }
      if (e.button !== 0) return;
      this.rightErase = false;
      this.painting = this.tool !== 'pick';
      this.paintAt(cx, cy);
      this.refresh();
    });
    // 屏蔽右键菜单，让右键专用于「涂空地」
    this.gridEl!.addEventListener('contextmenu', e => e.preventDefault());
    window.addEventListener('mousemove', e => {
      if (!this.painting || !this.opened) return;
      const hit = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const c = hit?.closest?.('.re-cell') as HTMLElement | null;
      if (!c) return;
      const cx = Number(c.dataset.cx);
      const cy = Number(c.dataset.cy);
      if (this.rightErase) this.paintFloorAt(cx, cy);
      else this.paintAt(cx, cy);
      this.refresh();
    });
    window.addEventListener('mouseup', () => { this.painting = false; this.rightErase = false; });
  }

  private buildPalette(host: HTMLElement, items: PaletteItem[]): void {
    for (const it of items) {
      const b = document.createElement('div');
      b.className = 're-swatch';
      b.dataset.ch = it.ch;
      b.innerHTML = `<span class="chip" style="background:${it.color}">${it.glyph ?? ''}</span>`
        + `<span>${it.label}</span><span class="k">${it.ch === ' ' ? '␠' : it.ch}</span>`;
      b.addEventListener('click', () => {
        this.brush = it.ch;
        this.tool = 'paint';
        this.refresh();
      });
      host.appendChild(b);
    }
  }

  private buildToolPalette(): void {
    const tools: { id: Tool; label: string; glyph: string }[] = [
      { id: 'paint', label: '画笔', glyph: '✎' },
      { id: 'erase', label: '橡皮', glyph: '⌫' },
      { id: 'pick', label: '取色', glyph: '⛏' },
    ];
    for (const t of tools) {
      const b = document.createElement('div');
      b.className = 're-swatch';
      b.dataset.tool = t.id;
      b.innerHTML = `<span class="chip">${t.glyph}</span><span>${t.label}</span>`;
      b.addEventListener('click', () => { this.tool = t.id; this.refresh(); });
      this.toolsEl!.appendChild(b);
    }
  }

  // ============ 房间状态 ============

  private newRoom(w: number, h: number): void {
    this.w = w;
    this.h = h;
    this.cells = Array.from({ length: w * h }, (_, i) => defaultCellAt(w, h, i % w, Math.floor(i / w)));
    this.exits.clear();
    this.risk = null;
    this.tension = null;
    this.manualZoom = false;
    this.forceSouthEntrance();
    if (!this.roomName) this.nameInput && (this.nameInput.value = '');
    if (this.wInput) this.wInput.value = String(w);
    if (this.hInput) this.hInput.value = String(h);
    this.refresh();
  }

  /**
   * 固定南入口：南门永远是门（入口），并把 `S` 标在南门内侧格。
   * 其余三边由设计者用「北/东/西门」开关决定——它们才是设计变量。
   */
  private forceSouthEntrance(): void {
    this.entry = 'south';
    this.exits.add('south');
    const door = doorCell(this.template(), 'south');
    this.cells[(door.y - MARGIN) * this.w + (door.x - MARGIN)] = '0';
    this.setEntry('south');
  }

  private resize(w: number, h: number): void {
    const old = this.cells;
    const ow = this.w;
    const oh = this.h;
    this.w = w;
    this.h = h;
    this.cells = Array.from({ length: w * h }, (_, i) => defaultCellAt(w, h, i % w, Math.floor(i / w)));
    for (let y = 0; y < Math.min(oh, h); y++) {
      for (let x = 0; x < Math.min(ow, w); x++) {
        this.cells[y * w + x] = old[y * ow + x] ?? '0';
      }
    }
    if (this.wInput) this.wInput.value = String(w);
    if (this.hInput) this.hInput.value = String(h);
    this.refresh();
  }

  /** 当前设计 → 纯数据模板（`RoomTemplate` 是编辑器与 PrefabMap 的唯一桥梁，逻辑集中在那里） */
  private template(): RoomTemplate {
    return {
      w: this.w, h: this.h, cells: this.cells, type: this.roomType,
      name: this.roomName, entry: this.entry, exits: [...this.exits],
      risk: this.risk, tension: this.tension, note: this.note,
    };
  }

  /** 开关某个出口（南门固定入口，恒开、不可关） */
  private setExit(d: Direction, open: boolean): void {
    if (d === 'south') return; // 南入口恒开
    const door = doorCell(this.template(), d);
    const i = (door.y - MARGIN) * this.w + (door.x - MARGIN);
    if (open) {
      this.exits.add(d);
      // 开门：把边界中点开成空地（门必须在边界上且是空地，否则 PrefabMap 不认）
      this.cells[i] = '0';
    } else {
      this.exits.delete(d);
      // 关门：把门格恢复为墙（仅当它仍是空地，避免覆盖用户手绘内容）
      if (this.cells[i] === '0' || this.cells[i] === 'S') this.cells[i] = '1';
    }
  }

  private toggleExit(d: Direction): void {
    if (d === 'south') {
      this.setStatus('南边是固定入口，不可关闭；要设计的是北 / 东 / 西出口', true);
      return;
    }
    const open = !this.exits.has(d);
    this.setExit(d, open);
    this.setStatus(open
      ? `${DIR_LABEL[d]}门：已开启（导出时会在墙外补走廊门槽）`
      : `${DIR_LABEL[d]}门：已关闭`);
    this.refresh();
  }

  /** 点选通口类型：批量开关北/东/西出口（南门恒开），一次到位 */
  private applyPattern(p: ExitPattern): void {
    const preset = EXIT_PATTERN_PRESETS[p];
    for (const d of DIRS) this.setExit(d, preset.includes(d));
    this.setStatus(`通口类型 → ${EXIT_PATTERN_INFO[p].label}（${exitsLabel(preset)}）；可再手动微调`);
    this.refresh();
  }

  private setEntry(d: Direction | null): void {
    for (let i = 0; i < this.cells.length; i++) if (this.cells[i] === 'S') this.cells[i] = '0';
    this.entry = d;
    if (!d) return;
    const inner = entryInnerCell(this.template(), d);
    const rx = inner.x - MARGIN;
    const ry = inner.y - MARGIN;
    if (rx >= 0 && rx < this.w && ry >= 0 && ry < this.h) this.cells[ry * this.w + rx] = 'S';
  }

  private paintAt(cx: number, cy: number): void {
    const rx = cx - MARGIN;
    const ry = cy - MARGIN;
    if (rx < 0 || rx >= this.w || ry < 0 || ry >= this.h) return;
    const i = ry * this.w + rx;
    if (this.tool === 'pick') {
      this.brush = this.cells[i];
      this.tool = 'paint';
      this.setStatus(`取色：${LEGEND.get(this.brush)?.label ?? this.brush}（'${this.brush}'）`);
      return;
    }
    if (this.tool === 'erase') { this.cells[i] = defaultCellAt(this.w, this.h, rx, ry); return; }
    this.cells[i] = this.brush;
  }

  /** 右键专用：无论当前工具，固定把该格涂成空地（固定为空地） */
  private paintFloorAt(cx: number, cy: number): void {
    const rx = cx - MARGIN;
    const ry = cy - MARGIN;
    if (rx < 0 || rx >= this.w || ry < 0 || ry >= this.h) return;
    this.cells[ry * this.w + rx] = '0';
  }

  // ============ 渲染 ============

  private refresh(): void {
    this.renderGrid();
    this.renderDirs();
    this.renderPaletteActive();
    this.renderRows();
    this.schedulePreview();
  }

  private renderGrid(): void {
    const host = this.gridEl;
    if (!host) return;
    if (!this.manualZoom) this.fitZoom();
    const t = this.template();
    const size = canvasSize(t);

    // 画布尺寸变化时才重建 DOM（大房间：原地更新，拖拽绘制不卡）
    const key = `${size.w}x${size.h}`;
    if (this.gridKey !== key) {
      host.innerHTML = '';
      this.gridCells = [];
      for (let cy = 0; cy < size.h; cy++) {
        for (let cx = 0; cx < size.w; cx++) {
          const div = document.createElement('div');
          div.dataset.cx = String(cx);
          div.dataset.cy = String(cy);
          host.appendChild(div);
          this.gridCells.push(div);
        }
      }
      this.gridKey = key;
    }
    host.style.setProperty('--re-cell', `${this.cellPx}px`);
    host.style.gridTemplateColumns = `repeat(${size.w}, ${this.cellPx}px)`;

    const stub = new Set<string>();
    for (const d of this.exits) for (const p of stubCells(t, d)) stub.add(`${p.x},${p.y}`);
    const door = new Set<string>();
    for (const d of this.exits) { const p = doorCell(t, d); door.add(`${p.x},${p.y}`); }

    for (let cy = 0; cy < size.h; cy++) {
      for (let cx = 0; cx < size.w; cx++) {
        const div = this.gridCells[cy * size.w + cx];
        let cls = 're-cell';
        let bg = '';
        let text = '';
        let title = '';
        if (isInside(t, cx, cy)) {
          cls += ' inside';
          const own = this.cells[(cy - MARGIN) * this.w + (cx - MARGIN)] ?? '0';
          const item = LEGEND.get(own);
          bg = item?.color ?? '#3a4356';
          text = item?.glyph ?? '';
          title = `${own} ${item?.label ?? ''}`;
        } else if (stub.has(`${cx},${cy}`)) {
          cls += ' stub';
          title = '走廊门槽（导出自动生成，用于让 PrefabMap 认出这道门）';
        } else {
          cls += ' margin';
        }
        if (door.has(`${cx},${cy}`)) cls += ' door';
        if (div.className !== cls) div.className = cls;
        if (div.style.background !== bg) div.style.background = bg;
        if (div.textContent !== text) div.textContent = text;
        if (div.title !== title) div.title = title;
      }
    }
    this.updateZoomInfo();
  }

  // ============ 尺寸与缩放 ============

  /** 应用右侧「尺寸」输入（3~64，含墙圈）；越界不静默夹取，而是报错并回填当前值 */
  private applySize(): void {
    const w = Math.round(Number(this.wInput?.value));
    const h = Math.round(Number(this.hInput?.value));
    if (!Number.isFinite(w) || !Number.isFinite(h)) {
      this.setStatus('尺寸必须是数字', true);
      return;
    }
    if (w < MIN_SIZE || w > MAX_SIZE || h < MIN_SIZE || h > MAX_SIZE) {
      this.setStatus(`尺寸需在 ${MIN_SIZE}~${MAX_SIZE} 之间（含墙圈）。当前内空间 ${this.w - 2}×${this.h - 2}`, true);
      if (this.wInput) this.wInput.value = String(this.w);
      if (this.hInput) this.hInput.value = String(this.h);
      return;
    }
    this.manualZoom = false;
    this.resize(w, h);
    this.setStatus(`尺寸 → ${w}×${h}（内空间 ${w - 2}×${h - 2}）`);
  }

  /** 按**画布列的实际宽度**自动选格边长（大房间自动缩小；手动调过则不再覆盖） */
  private fitZoom(): void {
    const size = canvasSize(this.template());
    // 面板可缩放：以画布滚动区实测宽度为准（拿不到时退回按视口估算）
    const hostW = this.canvasScrollEl?.clientWidth ?? 0;
    const avail = Math.max(120, (hostW > 0 ? hostW : Math.floor(window.innerWidth * 0.24)) - 20);
    const fit = Math.floor(avail / size.w);
    this.cellPx = Math.max(ZOOM_STEPS[0], Math.min(DEFAULT_CELL_PX, fit));
  }

  private zoomBy(dir: 1 | -1): void {
    const cur = Math.max(0, ZOOM_STEPS.findIndex(v => v >= this.cellPx));
    this.cellPx = ZOOM_STEPS[Math.max(0, Math.min(ZOOM_STEPS.length - 1, cur + dir))];
    this.manualZoom = true;
    this.renderGrid();
    this.setStatus(`缩放 ${this.cellPx}px / 格`);
  }

  private updateZoomInfo(): void {
    if (!this.zoomInfoEl) return;
    const size = canvasSize(this.template());
    this.zoomInfoEl.textContent = `缩放 ${this.cellPx}px · 画布 ${size.w}×${size.h}`;
  }

  private renderDirs(): void {
    if (!this.dirsEl) return;
    for (const b of Array.from(this.dirsEl.children) as HTMLElement[]) {
      const d = b.dataset.dir as Direction;
      b.classList.toggle('active', this.exits.has(d));
      b.classList.toggle('fixed', d === 'south'); // 固定入口：视觉上不可关
    }
    if (this.riskSel) this.riskSel.value = this.risk ? String(this.risk) : '';
    this.renderPattern();
    this.renderTension();
  }

  /** 通口类型回显：出口集合与某预设**完全一致** → 显示该预设；否则「自定义」 */
  private renderPattern(): void {
    const dirs = DIRS.filter(d => this.exits.has(d));
    const matched = matchPattern(dirs);
    if (this.patternSel) this.patternSel.value = matched ?? 'custom';
    if (this.patternInfoEl) {
      const label = matched ? EXIT_PATTERN_INFO[matched].label : '自定义';
      this.patternInfoEl.textContent = `${label} · 出口 ${exitsLabel(dirs)}`;
    }
  }

  /** 张力值自定义输入 + 提示：空 = 跟随房型默认（让设计者看得见「默认是多少」） */
  private renderTension(): void {
    const def = resolveRoomTension(this.roomType);
    // 正在输入时不回写输入框，避免打断（"1." / "-" 等中间态）
    if (this.tensionInput && document.activeElement !== this.tensionInput) {
      this.tensionInput.value = this.tension === null ? '' : String(this.tension);
    }
    if (this.tensionInfoEl) {
      const eff = resolveRoomTension(this.roomType, this.tension);
      this.tensionInfoEl.textContent = this.tension === null
        ? `当前张力值：${fmtTension(eff)}（${this.roomType} 默认）。${TENSION_HINTS}`
        : `当前张力值：${fmtTension(eff)}（自定义，已覆盖 ${this.roomType} 默认 ${fmtTension(def)}）。${TENSION_HINTS}`;
    }
  }

  private renderPaletteActive(): void {
    for (const host of [this.terrainEl, this.entityEl]) {
      if (!host) continue;
      for (const b of Array.from(host.children) as HTMLElement[]) {
        b.classList.toggle('active', this.tool === 'paint' && b.dataset.ch === this.brush);
      }
    }
    if (this.toolsEl) {
      for (const b of Array.from(this.toolsEl.children) as HTMLElement[]) {
        b.classList.toggle('active', b.dataset.tool === this.tool);
      }
    }
  }

  private renderRows(): void {
    if (!this.rowsEl) return;
    this.rowsEl.value = this.exportText();
  }

  // ============ 导出 ============

  /** 画布 → 字符图（含门口与走廊门槽）；实现集中在 RoomTemplate.templateRows */
  private buildRows(): string[] {
    return templateRows(this.template());
  }

  /** 当前设计 → 预制地图定义（floorId 取玩家当前楼层，便于生成同层的预览） */
  private buildDef(): PrefabMapDef {
    return templateToPrefab(this.template(), Player.getInstance().state.currentFloor);
  }

  private exportText(): string {
    const def = this.buildDef();
    const r = def.rooms[0];
    const opt = (k: string, v: unknown): string => (v === undefined ? '' : `, ${k}: ${JSON.stringify(v)}`);
    const rows = def.rows.map(line => `    '${line}',`).join('\n');
    return `// 房间编辑器导出 —— 图例见 src/map/PrefabMap.ts 顶部注释；设计规范见 docs/房间编辑器.md
const roomDef: PrefabMapDef = {
  floorId: ${def.floorId},
  kind: 'normal',
  rooms: [
    { x: ${r.x}, y: ${r.y}, w: ${r.w}, h: ${r.h}, type: '${r.type}'${opt('name', r.name)}${opt('entry', r.entry)}${opt('exits', r.exits)}${opt('pattern', r.pattern)}${opt('risk', r.risk)}${opt('tension', r.tension)}${opt('note', r.note)} },
  ],
  rows: [
${rows}
  ],
};`;
  }

  // ============ 实时 3D 预览 ============
  //
  // 做法：把游戏的 3D 视口（#game-container）**搬进编辑器面板**，并把设计好的房间作为
  // 预制楼层交给真实渲染器 —— 于是预览用的就是游戏同一套模型（三档宝箱 / 怪物纸片人 /
  // 火把光源 / 墙体 / 地面）、同一套光照与阴影，零重复实现。
  //
  // 编辑器**不依赖存档**：没有存档时 contentFloor 取第 1 层照样能预览；有存档时进来会
  // 完整快照（FloorMap + 实体运行时状态 + 玩家位置），关闭时原样还原；
  // 预览期间 `gameState.editorPreview = true`，SaveManager 不会把预览写进存档。

  private startPreview(): void {
    if (this.previewActive) return;
    const container = document.getElementById('game-container');
    if (!container || !this.previewSlot) return;

    const world = WorldManager.getInstance();
    const player = Player.getInstance();
    this.runSnapshot = {
      floor: world.currentFloor,
      states: world.exportEntityStates(),
      floorId: player.state.currentFloor,
      x: player.state.x, y: player.state.y, roomId: player.state.currentRoomId,
    };
    this.contentFloor = gameState.started ? player.state.currentFloor : 1;

    gameState.editorPreview = true;
    const title = document.getElementById('title-screen');
    this.titleWasHidden = title?.classList.contains('hidden') ?? true;
    title?.classList.add('hidden'); // 预览期间让标题屏退场
    this.previewSlot.appendChild(container); // 3D 视口搬进面板（ResizeObserver 会自动 resize）
    this.previewActive = true;
    this.previewKey = '';
    this.renderPreviewToggle();
    this.syncPreview(true);
  }

  /** 预览开关：点开 / 关闭（关闭只收起 3D 视口，编辑器面板保留） */
  private togglePreview(): void {
    if (this.previewActive) {
      this.stopPreview();
      this.setStatus('已关闭 3D 预览（编辑继续；点「打开预览」可再次加载）');
      return;
    }
    this.startPreview();
    if (this.previewActive) this.setStatus('已打开 3D 预览：编辑约 0.2 秒后自动重建');
    else this.setStatus('无法打开预览：未找到 3D 视口（#game-container）', true);
  }

  /** 同步预览开关的按钮文案与「未开启」占位层显隐 */
  private renderPreviewToggle(): void {
    if (this.previewToggleBtn) this.previewToggleBtn.textContent = this.previewActive ? '⏹ 关闭预览' : '▶ 打开预览';
    this.previewSlot?.classList.toggle('active', this.previewActive);
    this.previewOffEl?.classList.toggle('hidden', this.previewActive);
    if (!this.previewActive && this.previewInfoEl) {
      this.previewInfoEl.textContent = '预览未开启 · 点「打开预览」加载 3D 实景';
    }
  }

  private stopPreview(): void {
    if (!this.previewActive) return;
    if (this.previewTimer !== null) { window.clearTimeout(this.previewTimer); this.previewTimer = null; }

    const container = document.getElementById('game-container');
    const home = document.getElementById('center-area');
    if (container && home) home.appendChild(container); // 视口搬回去
    this.previewActive = false;
    gameState.editorPreview = false;

    // 还原运行状态
    const snap = this.runSnapshot;
    this.runSnapshot = null;
    const player = Player.getInstance();
    if (snap?.floor) {
      const world = WorldManager.getInstance();
      world.loadFloor(snap.floor, snap.states); // 连同"已开箱/已击败"的运行时状态一起还原
      player.state.currentFloor = snap.floorId;
      player.state.x = snap.x;
      player.state.y = snap.y;
      player.state.currentRoomId = snap.roomId;
      eventBus.emit('floorChanged', { fromFloor: this.contentFloor, toFloor: snap.floorId });
      CameraController.getInstance().snapToPlayer();
    } else {
      WorldManager.getInstance().reset();
      eventBus.emit('floorChanged', { fromFloor: this.contentFloor, toFloor: 0 });
    }
    if (!this.titleWasHidden) document.getElementById('title-screen')?.classList.remove('hidden');
    this.renderPreviewToggle();
    window.dispatchEvent(new Event('resize'));
  }

  /** 设计变了就重建预览（200ms 防抖：拖拽绘制时不会每格重建一次） */
  private schedulePreview(): void {
    if (!this.previewActive) return;
    if (this.previewTimer !== null) window.clearTimeout(this.previewTimer);
    this.previewTimer = window.setTimeout(() => {
      this.previewTimer = null;
      this.syncPreview();
    }, 200);
  }

  private syncPreview(force = false): void {
    if (!this.previewActive) return;
    // 指纹只含"影响 3D 的部分"：备注/名称改了不必重建几何；
    // 张力值不改几何，但纳入指纹可让下方说明文案随之刷新（改动很稀疏，代价可忽略）
    const key = JSON.stringify({
      w: this.w, h: this.h, cells: this.cells, type: this.roomType,
      entry: this.entry, exits: [...this.exits].sort(), risk: this.risk, tension: this.tension,
    });
    if (!force && key === this.previewKey) return;
    this.previewKey = key;
    try {
      const floor = buildPrefabFloor(templateToPrefab(this.template(), this.contentFloor));
      FloorManager.getInstance().enterPrefabFloor(floor);
      // 相机对准房间中心（入口在南侧，直接看入口会让大房间看不全）
      const room = floor.rooms[0];
      const player = Player.getInstance();
      player.state.x = room.centerX;
      player.state.y = room.centerY;
      CameraController.getInstance().snapToPlayer();
      if (this.previewInfoEl) {
        const label = ROOM_TYPES.find(t => t.id === this.roomType)?.label ?? this.roomType;
        const dirs = DIRS.filter(d => this.exits.has(d));
        this.previewInfoEl.textContent =
          `${this.w}×${this.h} · ${label} · 张力 ${fmtTension(resolveRoomTension(this.roomType, this.tension))} · 通口 ${EXIT_PATTERN_INFO[patternFromExits(dirs)].label}（${exitsLabel(dirs)}）`;
      }
    } catch (err) {
      if (this.previewInfoEl) this.previewInfoEl.textContent =
        `预览失败：${err instanceof Error ? err.message : String(err)}（检查南门/出口是否为墙、房间是否封闭）`;
    }
  }

  // ============ 房间档案（写入 src/data/rooms.json） ============

  /** 档案 id：默认取房间名（同名即覆盖同一间房） */
  private roomId(): string {
    const slug = (this.roomName || '').trim().replace(/\s+/g, '_').replace(/[^\w\u4e00-\u9fa5-]/g, '');
    return slug || 'room';
  }

  private toStoredRoom(): StoredRoom {
    return {
      id: this.roomId(),
      name: this.roomName.trim() || '未命名',
      type: this.roomType,
      w: this.w,
      h: this.h,
      cells: [...this.cells],
      rows: this.buildRows(),
      entry: this.entry,
      exits: DIRS.filter(d => this.exits.has(d)),
      pattern: patternFromExits(DIRS.filter(d => this.exits.has(d))),
      risk: this.risk,
      tension: this.tension,
      note: this.note.trim(),
      updatedAt: new Date().toISOString(),
    };
  }

  private applyStoredRoom(r: StoredRoom): void {
    if (!r || r.w * r.h !== (r.cells?.length ?? 0)) {
      this.setStatus('档案数据损坏（cells 与尺寸不匹配）', true);
      return;
    }
    this.w = r.w;
    this.h = r.h;
    this.cells = [...r.cells];
    this.roomType = r.type ?? 'combat';
    this.roomName = r.name ?? '';
    this.note = r.note ?? '';
    this.risk = r.risk ?? null;
    this.tension = typeof r.tension === 'number' ? r.tension : null;
    this.exits = new Set<Direction>((r.exits ?? ['south']).filter(d => DIRS.includes(d)));
    this.entry = 'south';
    this.exits.add('south');
    this.manualZoom = false;
    if (this.typeSel) this.typeSel.value = this.roomType;
    if (this.nameInput) this.nameInput.value = this.roomName;
    if (this.noteInput) this.noteInput.value = this.note;
    if (this.wInput) this.wInput.value = String(this.w);
    if (this.hInput) this.hInput.value = String(this.h);
    this.refresh();
  }

  /** 保存当前设计到工程文件（同名覆盖） */
  private async saveToFile(): Promise<void> {
    const room = this.toStoredRoom();
    this.setStatus('正在写入 src/data/rooms.json …');
    const res = await saveRoom(room);
    this.setStatus(res.message, !res.ok);
    if (res.store) this.renderRoomList(res.store);
    if (res.ok && res.source === 'file') {
      eventBus.emit('notification', {
        message: `房间「${room.name}」已存入 src/data/rooms.json`, type: 'success', icon: '💾',
      });
    }
  }

  private async loadFromFile(): Promise<void> {
    const store = this.lastStore;
    const id = this.roomListEl?.value;
    if (!store || !id) { this.setStatus('档案列表为空', true); return; }
    const room = store.rooms.find(r => r.id === id);
    if (!room) { this.setStatus(`档案里没有「${id}」`, true); return; }
    this.applyStoredRoom(room);
    this.previewKey = '';
    this.syncPreview(true);
    this.setStatus(`已载入档案「${room.name}」（备注：${room.note || '空'}）`);
  }

  private async deleteFromFile(): Promise<void> {
    const id = this.roomListEl?.value;
    if (!id) { this.setStatus('档案列表为空', true); return; }
    const res = await removeRoom(id);
    this.setStatus(res.message, !res.ok);
    if (res.store) this.renderRoomList(res.store);
  }

  private lastStore: RoomsStore | null = null;

  private async refreshRoomList(): Promise<void> {
    const res = await loadStore();
    if (res.store) this.renderRoomList(res.store, res.message);
  }

  private renderRoomList(store: RoomsStore, hint?: string): void {
    this.lastStore = store;
    const sel = this.roomListEl;
    if (sel) {
      const keep = sel.value;
      sel.innerHTML = '';
      if (store.rooms.length === 0) {
        const o = document.createElement('option');
        o.value = '';
        o.textContent = '（还没有档案）';
        sel.appendChild(o);
      }
      for (const r of store.rooms) {
        const o = document.createElement('option');
        o.value = r.id;
        o.textContent = `${r.name}｜${r.type}｜${r.w}×${r.h}`;
        sel.appendChild(o);
      }
      if (keep && store.rooms.some(r => r.id === keep)) sel.value = keep;
    }
    if (this.storeInfoEl) {
      this.storeInfoEl.textContent = hint ?? `档案：${store.rooms.length} 间 · 更新 ${store.updatedAt?.slice(0, 19).replace('T', ' ') ?? '—'}`;
    }
  }

  // ============ 草稿与剪贴板 ============

  private saveDraft(): void {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        w: this.w, h: this.h, cells: this.cells, type: this.roomType, name: this.roomName,
        entry: this.entry, exits: [...this.exits], risk: this.risk, tension: this.tension, note: this.note,
      }));
      this.setStatus('草稿已保存到本地（下次打开自动恢复）');
    } catch {
      this.setStatus('保存失败：localStorage 不可用', true);
    }
  }

  private loadDraft(): boolean {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return false;
      const d = JSON.parse(raw) as {
        w: number; h: number; cells: Cell[]; type: RoomType; name: string;
        entry: Direction | null; exits: Direction[]; risk: 1 | 2 | 3 | null;
        tension?: number | null; note: string;
      };
      this.w = Math.max(MIN_SIZE, Math.min(MAX_SIZE, d.w));
      this.h = Math.max(MIN_SIZE, Math.min(MAX_SIZE, d.h));
      this.cells = Array.isArray(d.cells) && d.cells.length === this.w * this.h
        ? d.cells
        : Array.from({ length: this.w * this.h }, (_, i) => defaultCellAt(this.w, this.h, i % this.w, Math.floor(i / this.w)));
      this.roomType = d.type ?? 'combat';
      this.roomName = d.name ?? '';
      this.note = d.note ?? '';
      this.exits = new Set<Direction>((d.exits ?? []).filter(x => DIRS.includes(x)));
      this.risk = d.risk ?? null;
      this.tension = typeof d.tension === 'number' ? d.tension : null;
      this.manualZoom = false;
      this.forceSouthEntrance(); // 入口恒为南（旧草稿里没有南门也会被补上）
      if (this.typeSel) this.typeSel.value = this.roomType;
      if (this.nameInput) this.nameInput.value = this.roomName;
      if (this.noteInput) this.noteInput.value = this.note;
      if (this.wInput) this.wInput.value = String(this.w);
      if (this.hInput) this.hInput.value = String(this.h);
      this.refresh();
      return true;
    } catch {
      return false;
    }
  }

  private copyToClipboard(text: string, what: string): void {
    const done = (): void => this.setStatus(`${what}已复制到剪贴板`);
    const fail = (): void => this.setStatus(`复制失败，请手动从文本框选取${what}`, true);
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fail);
      return;
    }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    } catch { fail(); }
  }

  private setStatus(msg: string, err = false): void {
    if (!this.statusEl) return;
    this.statusEl.textContent = msg;
    this.statusEl.classList.toggle('err', err);
  }

  // ============ 开关 ============

  toggle(): void { if (this.opened) this.hide(); else this.show(); }

  private show(): void {
    if (!this.el) return;
    // 只在**首次打开**时恢复本地草稿：否则每次 F2 都会把当前未保存的设计悄悄覆盖掉
    if (!this.draftLoaded) {
      this.draftLoaded = true;
      if (this.loadDraft()) this.setStatus('已恢复上次保存的草稿（点「新建」可清空）');
    }
    this.el.classList.remove('hidden');
    this.opened = true;
    gameState.pushModal();
    this.forceSouthEntrance();
    this.refresh();
    // 3D 预览不再自动开启：只同步「未开启」占位与按钮文案，需点击才加载
    this.renderPreviewToggle();
    void this.refreshRoomList();
  }

  private hide(): void {
    if (!this.el || !this.opened) return;
    this.stopPreview();
    this.el.classList.add('hidden');
    this.opened = false;
    gameState.popModal();
  }

  get isOpen(): boolean { return this.opened; }
}
