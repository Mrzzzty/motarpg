/**
 * 游戏控制器：移动、交互（战斗/宝箱/NPC/楼梯）、房间进入检测、死亡复活、点击寻路。
 */
import type { MapEntity } from '../types';
import { Player } from '../entities/Player';
import { WorldManager } from './WorldManager';
import { FloorManager } from './FloorManager';
import { BattleSystem } from '../systems/BattleSystem';
import { ChestSystem } from '../systems/ChestSystem';
import { eventBus } from './EventBus';
import { gameState } from './GameState';
import { dataManager } from './DataManager';
import { ParticleSystem } from '../effects/ParticleSystem';
import { projection } from '../render/Projection';
import { CameraController } from './CameraController';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { BattlePanel } from '../ui/BattlePanel';
import { SummitCinematic } from '../ui/SummitCinematic';
import { RelicManager } from '../systems/RelicManager';
import { DifficultySystem } from '../systems/DifficultySystem';
import { DIRS4, manhattan } from '../utils/Grid';

export class GameController {
  private static instance: GameController;
  private lastRoomId = '';
  /** 点击寻路队列 */
  private pathQueue: { x: number; y: number }[] = [];
  private moving = false;
  /** 移动缓冲（ms）：每次移动后短暂锁定，避免一次输入移动多格 */
  private moveBlockMs = 0;
  /** 调试：点击传送模式（DebugConsole 开关）——点击地板瞬移，无视寻路 */
  public teleportMode = false;

  private constructor() {
    // 死亡处理统一由事件驱动（任何战斗入口都能触发复活）
    eventBus.on('playerDied', () => this.handleDeath());
  }
  static getInstance(): GameController {
    if (!GameController.instance) GameController.instance = new GameController();
    return GameController.instance;
  }

  /** 输入是否可用（未开始/暂停/模态框打开/死亡时屏蔽） */
  get inputBlocked(): boolean {
    return !gameState.started || gameState.paused || gameState.modalOpen || !Player.getInstance().isAlive;
  }

  // ============ 移动 ============

  /** 键盘单步移动（撞向实体=交互）。受移动缓冲限制：缓冲期内忽略新移动 */
  tryMove(dx: number, dy: number): void {
    if (this.inputBlocked || this.moveBlockMs > 0) return;
    this.pathQueue = []; // 键盘打断寻路
    const player = Player.getInstance();
    const nx = player.state.x + dx;
    const ny = player.state.y + dy;
    const world = WorldManager.getInstance();

    const entity = world.getEntityAt(nx, ny);
    if (entity) {
      this.interact(entity);
      this.startMoveBuffer();
      return;
    }
    // Boss 铁门：Boss 未击败时封锁，给出明确提示而不是静默卡住
    if (world.isGateLocked(nx, ny)) {
      eventBus.emit('notification', {
        message: '铁门紧闭——击败 Boss 后才会开启',
        type: 'warning', icon: '🚪',
      });
      this.startMoveBuffer();
      return;
    }
    if (world.isWalkable(nx, ny)) {
      player.state.x = nx;
      player.state.y = ny;
      eventBus.emit('playerMoved', { x: nx, y: ny });
      this.startMoveBuffer();
      this.afterStep();
    }
  }

  /** 启动移动缓冲：缓冲时间内所有移动请求（按键/寻路）都被忽略 */
  private startMoveBuffer(): void {
    this.moveBlockMs = dataManager.config.input.moveBufferMs;
  }

  /**
   * 点击自动移动：BFS 寻路后角色沿路径自动前往目标格（按移动缓冲节奏逐格走）。
   * 实体目标自动走近并交互；键盘移动会打断自动寻路。
   */
  moveTo(targetX: number, targetY: number): void {
    if (this.inputBlocked) return;
    const world = WorldManager.getInstance();
    if (!world.inBounds(targetX, targetY)) return;
    const player = Player.getInstance();
    // 点击自身所在格：忽略
    if (player.state.x === targetX && player.state.y === targetY) return;

    // 调试传送模式：直接落位（目标不可走/有实体 → 落到相邻可走格），不走寻路
    if (this.teleportMode) {
      this.pathQueue = [];
      this.pendingInteract = null;
      let tx = targetX;
      let ty = targetY;
      const blocked = !world.isWalkable(tx, ty) || !!world.getEntityAt(tx, ty);
      if (blocked) {
        const adj = DIRS4
          .map(([dx, dy]) => ({ x: tx + dx, y: ty + dy }))
          .find(p => world.isWalkable(p.x, p.y) && !world.getEntityAt(p.x, p.y));
        if (!adj) {
          eventBus.emit('notification', { message: '该处无法落脚', type: 'warning', icon: '🚫' });
          return;
        }
        tx = adj.x;
        ty = adj.y;
      }
      player.state.x = tx;
      player.state.y = ty;
      eventBus.emit('playerMoved', { x: tx, y: ty });
      this.afterStep();
      return;
    }

    const entity = world.getEntityAt(targetX, targetY);
    if (entity) {
      // 邻接直接交互，否则寻路走近
      if (Math.abs(player.state.x - targetX) + Math.abs(player.state.y - targetY) === 1) {
        this.interact(entity);
        return;
      }
      const path = this.findPath(targetX, targetY, { stopAdjacent: true });
      if (path) {
        this.pathQueue = path;
        this.pendingInteract = entity;
      }
      return;
    }
    if (!world.isWalkable(targetX, targetY)) return;
    // 自动移动：沿完整路径逐格前往
    const path = this.findPath(targetX, targetY, { stopAdjacent: false });
    if (path && path.length > 0) this.pathQueue = path;
  }

  private pendingInteract: MapEntity | null = null;

  /** 每帧驱动寻路队列 + 房间进入检测（幂等）。寻路步进同样受移动缓冲限制 */
  update(deltaTime = 0): void {
    if (this.moveBlockMs > 0) this.moveBlockMs -= deltaTime;
    if (this.inputBlocked) { this.pathQueue = []; return; }
    this.checkRoomEnter();
    if (this.moving || this.pathQueue.length === 0 || this.moveBlockMs > 0) return;
    const next = this.pathQueue.shift()!;
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const entity = world.getEntityAt(next.x, next.y);
    if (entity) {
      this.pathQueue = [];
      this.interact(entity);
      return;
    }
    if (!world.isWalkable(next.x, next.y)) {
      this.pathQueue = [];
      return;
    }
    player.state.x = next.x;
    player.state.y = next.y;
    eventBus.emit('playerMoved', { x: next.x, y: next.y });
    this.startMoveBuffer();
    this.afterStep();
    // 到达终点且有待交互实体
    if (this.pathQueue.length === 0 && this.pendingInteract) {
      const target = this.pendingInteract;
      this.pendingInteract = null;
      if (world.getEntityAt(target.x, target.y)?.id === target.id) this.interact(target);
    }
  }

  /** BFS 寻路（四方向；目标格有实体时寻到相邻格） */
  private findPath(targetX: number, targetY: number, opts: { stopAdjacent: boolean }): { x: number; y: number }[] | null {
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    const player = Player.getInstance();
    if (!floor) return null;
    const start = { x: player.state.x, y: player.state.y };
    const key = (x: number, y: number) => `${x},${y}`;
    const prev = new Map<string, { x: number; y: number } | null>([[key(start.x, start.y), null]]);
    const queue: { x: number; y: number }[] = [start];
    const isGoal = (x: number, y: number) =>
      opts.stopAdjacent
        ? Math.abs(x - targetX) + Math.abs(y - targetY) === 1
        : x === targetX && y === targetY;

    while (queue.length > 0) {
      const cur = queue.shift()!;
      if (isGoal(cur.x, cur.y)) {
        const path: { x: number; y: number }[] = [];
        let k: { x: number; y: number } | null = cur;
        while (k) {
          path.unshift(k);
          k = prev.get(key(k.x, k.y)) ?? null;
        }
        path.shift(); // 去掉起点
        return path;
      }
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        const k = key(nx, ny);
        if (prev.has(k)) continue;
        if (!world.isWalkable(nx, ny)) continue;
        if (world.getEntityAt(nx, ny)) continue; // 绕开实体
        prev.set(k, cur);
        queue.push({ x: nx, y: ny });
      }
    }
    return null;
  }

  // ============ 交互 ============

  interact(entity: MapEntity): void {
    if (this.inputBlocked) return;
    // 供事件系统的 on_interact 触发（数据侧按 roomTypes 决定是否响应）
    eventBus.emit('entityInteracted', { kind: entity.kind, entityId: entity.id });
    const world = WorldManager.getInstance();
    const player = Player.getInstance();
    const confirm = ConfirmDialog.getInstance();
    switch (entity.kind) {
      case 'monster':
      case 'boss': {
        const def = dataManager.getMonster(entity.monsterId ?? '');
        const name = def?.name ?? '敌人';
        const isBoss = entity.kind === 'boss';
        confirm.ask(
          isBoss ? '⚠️ Boss 战' : '⚔️ 战斗确认',
          `确定攻击 <b style="color:${def?.color ?? '#ff9999'}">${name}</b>${entity.isElite ? '（精英）' : ''} 吗？<br/><span class="dim">战败将在楼层起点复活并损失20%金币</span>`,
          () => this.doBattle(entity),
          '⚔️ 攻击',
        );
        break;
      }
      case 'potion': {
        // 药水：撞上去即拾取（不弹确认框）
        world.markUsed(entity.id);
        const tier = entity.potionTier ?? 'crude';
        player.addPotion(tier);
        const def = dataManager.getPotion(tier);
        ParticleSystem.getInstance().floatText(entity.x, entity.y, `+${def?.name ?? '药水'}`, def?.color ?? '#ff5a7a');
        eventBus.emit('potionPicked', { entityId: entity.id, tier, name: def?.name ?? '药水' });
        break;
      }
      case 'fountain': {
        // 治疗泉：支付金币回满生命，每层一次
        if (world.getEntityState(entity.id).isUsed === true) {
          eventBus.emit('notification', { message: '治疗泉已枯竭', type: 'info', icon: '💧' });
          break;
        }
        const fcfg = dataManager.config.witch;
        const cost = fcfg.fountainCostBase + player.state.currentFloor * fcfg.fountainCostPerFloor;
        if (player.state.gold < cost) {
          eventBus.emit('notification', { message: `需要 ${cost} 金币才能汲取泉水`, type: 'warning', icon: '💰' });
          break;
        }
        confirm.ask(
          '💧 治疗泉',
          `支付 <b>${cost}</b> 金币，恢复全部生命？`,
          () => {
            player.spendGold(cost);
            const healed = player.heal(player.maxHp);
            world.markUsed(entity.id);
            ParticleSystem.getInstance().floatText(entity.x, entity.y, `+${healed} HP`, '#66ffcc');
            eventBus.emit('fountainUsed', { cost, healed });
          },
          '💧 治疗',
        );
        break;
      }
      case 'chest': {
        // 直接开箱（不再二次确认）；战利品由 toast 弹窗提示
        this.doOpenChest(entity);
        break;
      }
      case 'npc': {
        const def = dataManager.getNpc(entity.npcId ?? '');
        if (def) {
          eventBus.emit('npcTalked', { npcId: def.id, name: def.name });
        }
        break;
      }
      case 'stair': {
        const target = entity.targetFloor ?? player.state.currentFloor + 1;
        confirm.ask(
          '🪜 楼梯',
          `确定前往<b>第 ${target} 层</b>吗？`,
          () => {
            FloorManager.getInstance().enterFloor(target);
            CameraController.getInstance().snapToPlayer();
            this.afterFloorChange();
          },
          '🪜 前往',
        );
        break;
      }
      case 'gate': {
        // 塔顶终局之门（§4 假终点 + 反转揭示）
        const cine = SummitCinematic.getInstance();
        if (cine.revealed) {
          eventBus.emit('notification', {
            message: '门后空无一物。风，从很深的下面吹上来……',
            type: 'info', icon: '🚪',
          });
        } else {
          void cine.play();
        }
        break;
      }
      default:
        break;
    }
  }

  /** 确认后执行：战斗（托管=自动结算；微操=逐回合面板，§5 [已确认]） */
  private doBattle(entity: MapEntity): void {
    const player = Player.getInstance();
    if (gameState.settings.battleMode === 'manual') {
      const session = BattleSystem.getInstance().beginManual(entity);
      BattlePanel.getInstance().begin(session, result => this.battleFloats(entity, result));
      return;
    }
    const result = BattleSystem.getInstance().battle(entity);
    this.battleFloats(entity, result);
    // 死亡复活由 playerDied 事件统一处理
  }

  /** 战后飘字（两模式共用） */
  private battleFloats(entity: MapEntity, result: { win: boolean; goldGained: number }): void {
    const player = Player.getInstance();
    if (result.win) {
      ParticleSystem.getInstance().floatText(entity.x, entity.y, `+${result.goldGained}💰`, '#ffdd44');
    } else if (player.state.hp > 0) {
      ParticleSystem.getInstance().floatText(player.state.x, player.state.y, '撤退！', '#ffaa44');
    }
  }

  /** 直接执行：开宝箱（无确认），战利品逐项 toast 提示后自动收回 */
  private doOpenChest(entity: MapEntity): void {
    const world = WorldManager.getInstance();
    const room = world.getRoomAt(entity.x, entity.y);
    const rewards = ChestSystem.getInstance().open(entity, room?.type ?? 'combat', room?.depth ?? 1);
    // 遗物宝箱：三选一面板由 RelicChoicePanel 接管，这里只给飘字反馈
    if (entity.chestTier === 'relic') {
      ParticleSystem.getInstance().floatText(entity.x, entity.y, '遗物宝箱！', '#d9a6ff');
      return;
    }
    let text = `+${rewards.gold} 金币`;
    if (rewards.potion) text += ` +${dataManager.getPotion(rewards.potion)?.name ?? '药水'}`;
    if (rewards.equipment) text += ' +装备';
    if (rewards.relic) text += ' +遗物';
    ParticleSystem.getInstance().floatText(entity.x, entity.y, text, '#ffdd44');
    // 获得提示（右上角 toast，2.8s 自动收回）
    if (rewards.gold > 0) {
      eventBus.emit('notification', { message: `获得 ${rewards.gold} 金币`, type: 'success', icon: '💰' });
    }
    if (rewards.equip) {
      const qName = dataManager.equipment.quality[rewards.equip.quality]?.name;
      eventBus.emit('notification', {
        message: `获得 ${rewards.equip.name}${qName ? `（${qName}）` : ''}`,
        type: 'success', icon: '⚔️',
      });
    }
    if (rewards.potion) {
      eventBus.emit('notification', {
        message: `获得 ${dataManager.getPotion(rewards.potion)?.name ?? '药水'}`,
        type: 'success', icon: '🧪',
      });
    }
  }

  // ============ 房间/楼层事件 ============

  private afterStep(): void {
    this.checkRoomEnter();
    this.checkHiddenDiscovery();
  }

  private afterFloorChange(): void {
    this.lastRoomId = '';
    this.checkRoomEnter();
    this.checkHiddenDiscovery();
    this.applyRelicFloorEffects();
  }

  /** 遗物进层 / 事件型灾厄 钩子 */
  private applyRelicFloorEffects(): void {
    const rm = RelicManager.getInstance();
    const floorId = Player.getInstance().state.currentFloor;
    // 进层触发（再生符文 / 暖炉 / 钥匙串 / 点金指 等）
    for (const line of rm.onFloorEnter()) {
      eventBus.emit('notification', { message: line, type: 'info', icon: '🏺' });
    }
    // C 类·事件型灾厄：前期（第 8 层起，中层前）低概率获得，尚未持有时
    const hasEventCurse = rm.owned().some(d => d.subtype === 'event');
    if (!hasEventCurse && floorId >= 8 && floorId < 41 && Math.random() < 0.25) {
      const curse = rm.grantEventCurse();
      if (curse) eventBus.emit('notification', { message: `事件灾厄：${curse.name}（第 41 层后可净化）`, type: 'warning', icon: '☠️' });
    }
  }

  /**
   * 隐藏房间发现检测（P1-1）：玩家移动到隐藏入口相邻格（含斜向同曼哈顿1）时自动触发——
   * 挖开入口墙、房间并入当前楼层，广播事件与提示。
   */
  private checkHiddenDiscovery(): void {
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    if (!floor || !floor.hiddenRooms || floor.hiddenRooms.length === 0) return;
    const p = Player.getInstance().state;
    for (const room of [...floor.hiddenRooms]) {
      const ent = room.hiddenEntrance;
      if (!ent) continue;
      if (manhattan(p, ent) <= 1) {
        world.revealHiddenRoom(room);
        eventBus.emit('hiddenRoomDiscovered', { roomId: room.id, x: ent.x, y: ent.y });
        eventBus.emit('notification', { message: '墙后传来微光——发现了一间隐藏房间！', type: 'success', icon: '🕯️' });
        ParticleSystem.getInstance().floatText(ent.x, ent.y, '发现隐藏房间！', '#ffdd44');
      }
    }
  }

  /** 房间进入检测：房间名/深度事件 + 休整房回血 + Boss房警告（幂等，每帧调用） */
  checkRoomEnter(): void {
    const world = WorldManager.getInstance();
    const player = Player.getInstance();
    const room = world.getRoomAt(player.state.x, player.state.y);
    const roomId = room?.id ?? '';
    if (roomId === this.lastRoomId) return;
    this.lastRoomId = roomId;
    if (!room) return;

    player.state.currentRoomId = roomId;
    const name = dataManager.texts.roomNames?.[room.type] ?? room.type;
    eventBus.emit('roomEntered', {
      roomId, roomType: room.type, depth: room.depth, name,
      risk: room.risk ?? 1, rewardMul: room.rewardMul ?? 1,
    });

    // 休整房：首次进入回复30%生命
    if (room.type === 'rest' && world.getEntityState(`rest_${roomId}`).isUsed !== true) {
      world.markUsed(`rest_${roomId}`);
      const healed = player.heal(Math.round(player.maxHp * 0.3));
      if (healed > 0) {
        ParticleSystem.getInstance().floatText(player.state.x, player.state.y, `休整 +${healed}`, '#66ff88');
      }
    }

    // Boss房：警告（存活Boss）
    const boss = room.entities.find(e => e.kind === 'boss' && world.isEntityAlive(e));
    if (boss) {
      const def = dataManager.getMonster(boss.monsterId ?? '');
      eventBus.emit('bossWarning', { floor: room.floorId, name: def?.name ?? 'Boss' });
    }
  }

  // ============ 死亡/复活 ============

  /** 死亡处理由 playerDied 事件触发（BattleSystem 等发出）；此处只做复活结算 */
  handleDeath(): void {
    const player = Player.getInstance();
    // 遗物复活（不灭之魂 / 不朽壁垒）：本轮一次
    const rm = RelicManager.getInstance();
    const revivePct = rm.value('revive');
    const reviveOnce = rm.value('reviveOnce');
    if (!player.state.relicReviveUsed && (revivePct > 0 || reviveOnce > 0)) {
      player.state.relicReviveUsed = true;
      const pct = revivePct > 0 ? revivePct : 30;
      const healed = player.heal(Math.round(player.maxHp * pct / 100));
      eventBus.emit('notification', { message: `不灭之魂：原地复活（+${healed}）`, type: 'success', icon: '💫' });
      eventBus.emit('playerRevived', { penaltyGold: 0 });
      return;
    }
    const cfg = dataManager.config.revive;
    const penalty = Math.round(player.state.gold * cfg.goldPenaltyRate);
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    if (floor) {
      player.state.x = floor.entryX;
      player.state.y = floor.entryY;
    }
    player.spendGold(Math.min(player.state.gold, penalty));
    player.heal(Math.round(player.maxHp * cfg.hpRestorePct));
    this.lastRoomId = '';
    this.checkRoomEnter();
    CameraController.getInstance().snapToPlayer();
    eventBus.emit('playerRevived', { penaltyGold: penalty });
  }

  /**
   * 新一局开始：重置玩家与遗物运行时，并按当前难度授予开局灾厄（A 类）与专属遗物
   * （摇篮曲 → 摇篮 R065 / 天堂 → 命定之死 X009）。
   * 标题屏「开始新游戏」与暂停菜单「重新开始」都必须调用此方法，否则开局遗物不会发放。
   */
  startNewRun(): void {
    Player.getInstance().restore({
      ...Player.getInstance().state,
      level: 1, exp: 0, hp: dataManager.config.playerBase.maxHp,
      baseMaxHp: dataManager.config.playerBase.maxHp,
      baseAttack: dataManager.config.playerBase.attack,
      baseDefense: dataManager.config.playerBase.defense,
      gold: 0, keys: 0,
      potions: { crude: 0, normal: 0, quality: 0, strong: 0, holy: 0 },
      weaponId: null, armorId: null, accessoryId: null, bag: [],
      relics: [], relicReviveUsed: false,
    });
    // 遗物：重置运行时 + 高难度开局灾厄（A 类）
    RelicManager.getInstance().resetRun();
    const startCurses = DifficultySystem.getInstance().startCurseCount();
    if (startCurses > 0) {
      for (const c of RelicManager.getInstance().grantStartCurses(startCurses)) {
        eventBus.emit('notification', { message: `开局灾厄：${c.name}`, type: 'warning', icon: '☠️' });
      }
    }
    // 难度专属开局遗物（摇篮曲 → 摇篮 / 天堂 → 命定之死）
    for (const id of DifficultySystem.getInstance().startRelics()) {
      const relic = RelicManager.getInstance().def(id);
      if (!relic || !RelicManager.getInstance().add(id, { silent: true })) continue;
      eventBus.emit('notification', { message: `开局遗物：${relic.name}`, type: 'info', icon: '🏺' });
    }
  }

  /** 重开新局 */
  restart(): void {
    FloorManager.getInstance().clearPregen(); // 新一局：清掉旧预生成楼层
    this.startNewRun();
    FloorManager.getInstance().enterFloor(1, false);
    CameraController.getInstance().snapToPlayer();
    this.lastRoomId = '';
    this.checkRoomEnter();
    eventBus.emit('gameRestarted', {});
    void projection;
  }
}
