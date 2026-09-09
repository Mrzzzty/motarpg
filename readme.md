好的，你提的这两个难度很有意思——“摇篮曲”是给新手或想轻松体验的玩家，而“天堂”是100层之后解锁的终极挑战。我把它们完整地加入难度系统，同时把整个文档从“与之前一致”的缩略模式展开，**完整呈现全部内容**。

考虑到文档总长度很大，我会分成几段发出，每段覆盖一个完整的逻辑部分。你收到后可以根据需要合并或分段喂给Agent。

---

> ## 📌 状态说明（2026-09-09 同步）
> 本文件为 **v1 技术规格书**（早期设计意图记录），**并非实时状态文档**。
> **当前代码实际状态请以 `魔塔RPG_整合设计文档.md`（唯一总文档）为准。**
> 关键差异（本文件与代码不符处）：
> - **渲染引擎**：本文件写的是 `HTML5 Canvas 2D`（§1.2），代码实际已是 **Three.js 0.185.1「3渲2」WebGL**（见整合文档 §16）；PixiJS 方案（整合文档 §15）亦已作废。
> - **已实现**：成就系统、女巫酿药间+治疗泉、铁匠铺、点击寻路、小地图、桌面版 Electron、主角动画图集、Boss 铁门、Three.js 原生光照/阴影/后处理。
> - **仍未实现**：藏品系统、难度系统、无尽模式、状态效果、Boss 词缀、魂晶货币、房间深度战斗数值、多组楼梯、存档导入导出、种子系统。
> - 未在本文件标注 ⚠️/❌ 的段落均为"设计意图"，编码前请先对照整合设计文档确认现状。

---

## 📄 魔塔RPG技术规格书（AI Agent完整版）—— 第一部分

# 第一部分：项目概述与技术选型

## 1.1 游戏概念

玩家控制英雄，进入一座神秘的“无尽之塔”。塔内分为多个风格各异的“房间”，每个房间都是一个独立的挑战场景。玩家需通过战斗、解谜、交易、收集藏品来不断强化自己，挑战越来越强大的敌人，并持续前往更深楼层，探索塔中的无尽秘密。

**核心目标：不断向下探索更深楼层，挑战更强敌人，获得更好装备与藏品，循环往复，永无止境。**

## 1.2 技术栈

| 项目               | 选型                     | 说明                             |
| :----------------- | :----------------------- | :------------------------------- |
| **平台**     | Web（PC / 移动端浏览器） | 跨平台，无需安装                 |
| **语言**     | TypeScript               | 强类型，AI友好，减少运行时错误   |
| **渲染**     | HTML5 Canvas 2D          | 性能足够，兼容性好               |
| **UI框架**   | 原生 HTML + CSS          | 无额外依赖，控制力强             |
| **构建工具** | Vite                     | 极速冷启动，热更新快             |
| **数据格式** | JSON                     | 数据与代码分离，便于调整和热更新 |

## 1.3 核心设计原则

- **数据驱动**：所有游戏数值（怪物属性、物品效果、任务配置、藏品数据）存放在独立的JSON文件中，代码只负责逻辑处理。
- **模块化**：每个系统（战斗、背包、任务、藏品、Boss等）独立成文件夹/文件，通过事件总线（EventBus）通信。
- **单例模式**：核心管理器（WorldManager、PlayerManager、QuestManager等）全局唯一，便于访问。
- **Roguelike属性**：楼层布局、怪物配置、宝箱品质、事件、商人库存、Boss词缀均包含随机元素，确保每次冒险体验不同。

---

# 第二部分：核心架构（必须最先实现）

## 2.1 世界与地图系统

采用“世界-房间-楼层”三层模型。

### 2.1.1 楼层、房间与连接网络

**楼层（Floor）** 是垂直维度的基本单位，每层包含若干 **房间（Room）**。房间之间的连接是 **非线性的网络拓扑结构**——允许多条路径、分支和汇合。

```
楼层结构示意（第 N 层，共 7 个房间）：

                    ┌─────────────┐
                    │  房间 A     │ ← 起点房间（玩家进入本层时出现）
                    │  深度: 0    │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    ┌───────────┐   ┌───────────┐   ┌───────────┐
    │  房间 B   │   │  房间 C   │   │  房间 D   │
    │  深度: 1  │   │  深度: 1  │   │  深度: 1  │
    └─────┬─────┘   └─────┬─────┘   └─────┬─────┘
          │               │               │
          └───────┬───────┴───────┬───────┘
                  │               │
                  ▼               ▼
          ┌───────────┐   ┌───────────┐
          │  房间 E   │───│  房间 F   │ ← 环路连接（深度同为2）
          │  深度: 2  │   │  深度: 2  │
          └─────┬─────┘   └─────┬─────┘
                │               │
                └───────┬───────┘
                        │
                        ▼
                  ┌───────────┐
                  │  房间 G   │ ← 终点房间（包含通往下层的楼梯）
                  │  深度: 3  │
                  └───────────┘
```

**房间深度（Room Depth）定义**：

- 起点房间的深度为 `0`。
- 从起点房间出发，每经过一个房间连接，深度 `+1`。
- 深度反映玩家在当前楼层中的**探索进度**，也是怪物强度和奖励的重要决定因素。

**深度与难度/收益的关系**：

| 深度          | 怪物强度倍率          | 金币倍率              | 经验倍率              | 装备掉落品质下限 | 藏品掉落率修正        |
| :------------ | :-------------------- | :-------------------- | :-------------------- | :--------------- | :-------------------- |
| 0（起点房间） | 0.7×                 | 0.5×                 | 0.6×                 | 普通             | 0.5×                 |
| 1             | 1.0×（基准）         | 1.0×                 | 1.0×                 | 普通             | 1.0×                 |
| 2             | 1.3×                 | 1.5×                 | 1.4×                 | 优秀             | 1.3×                 |
| 3             | 1.7×                 | 2.2×                 | 1.9×                 | 稀有             | 1.7×                 |
| 4             | 2.2×                 | 3.2×                 | 2.5×                 | 稀有             | 2.2×                 |
| 5+            | 2.8× + (深度-5)×0.4 | 4.5× + (深度-5)×0.8 | 3.2× + (深度-5)×0.5 | 史诗（深度≥5）  | 2.8× + (深度-5)×0.3 |

**设计意图**：

- 玩家可以选择“直通终点”（只走浅层房间，难度低、收益低），也可以选择“深入探索”（走深层房间，难度高、收益高）。
- 每条路径形成“风险 vs 回报”的决策点——这是魔塔策略性的核心。
- **游戏核心目标**：不断前往更深楼层，因此终点房间（楼梯所在房间）的深度可能为 1~3 之间，玩家可自行决定是否深入探索本层后再上楼。

**设计原则**：

- 每个房间至少有 1 个出口，最多 4 个出口（东南西北各一）。
- 允许环路，提供多种探索顺序。
- 至少有一条从起点到终点的“主线路径”，支线路径通向深层高收益房间。
- 终点房间（包含楼梯）的深度可以是 1 到 最大深度 之间的任意值——玩家可选择“速通”（走浅层直达）或“全清”（探索所有房间）。

### 2.1.2 Boss楼层特殊设计

**Boss楼层出现规则**：

- 每 **5层** 出现一次Boss楼层（第5、10、15、20、25…层）。
- Boss楼层**不可绕过**——玩家必须击败Boss才能继续向下。
- Boss楼层的房间数固定为 3 个，不参与常规房间数计算。

**Boss楼层结构**（固定3个房间，线性连接）：

```
Boss楼层布局（3个房间）：

┌────────────────────┐      ┌────────────────────┐      ┌────────────────────┐
│   休整房间          │      │   Boss战斗房间     │      │   终点奖励房间      │
│   ──────────────    │      │   ──────────────    │      │   ──────────────    │
│   • 商人（1个）     │─────→│   • Boss实体        │─────→│   • 下楼楼梯        │
│   • 治疗泉（1次）   │      │   • 不可绕过        │      │   • 3-5个宝箱       │
│   • 无怪物          │      │   • 击败后解锁出口  │      │   • 1个传说宝箱     │
│   • 1个普通宝箱     │      │   • 有Boss词缀      │      │   • 无怪物          │
│   • 可调整装备      │      │   • 战力检测        │      │   • 1个藏品         │
└────────────────────┘      └────────────────────┘      └────────────────────┘
```

**Boss数值检测机制（防速通）**：

在玩家进入Boss房间前，系统计算玩家的 **综合战力值（Combat Power）** ：

```
综合战力 = 攻击力 × 1.5 + 防御力 × 1.2 + (最大生命值 / 10) + 装备品质修正 + 藏品修正
装备品质修正 = (优秀×1 + 稀有×2 + 史诗×4 + 传说×8) × 装备等级 / 5
藏品修正 = 持有藏品数量 × 3 + 传说藏品数量 × 10
```

**检测逻辑**：

- 若玩家综合战力 **低于** 当前Boss层建议战力的 **70%**：
  - Boss获得 **“势不可挡”** 增益：攻击+50%，防御+30%，生命+40%
  - 战斗开始前弹出警告：“你的实力尚不足以挑战此Boss，但勇气可嘉。”
- 若玩家综合战力在建议战力的 **70%~100%** 之间：
  - Boss为标准属性（无修正）
- 若玩家综合战力 **高于** 建议战力的 **120%**：
  - Boss获得 **“以弱制强”** 修正：防御+20%
  - 至少需要 3 回合才能击败Boss

**Boss属性公式**：

```
Boss基础攻击 = 常规怪物攻击 × (2.0 + 楼层/20) × 难度系数
Boss基础防御 = 常规怪物防御 × (1.5 + 楼层/30) × 难度系数
Boss基础生命 = 常规怪物生命 × (4.0 + 楼层/10) × 难度系数
Boss经验奖励 = 常规怪物经验 × 10 × 难度经验系数
Boss金币奖励 = 常规怪物金币 × 15 × 难度金币系数
Boss魂晶奖励 = 3 + floor(楼层/5)
```

**Boss击败奖励**：

- 大量经验（足够升 1-2 级）
- 大量金币（约等于 10 只普通怪物的总和）
- 魂晶 3~8 个
- 必定掉落 1 件稀有及以上品质装备
- 100% 概率掉落 1 个藏品（品质不低于稀有）
- 解锁下一楼层区间的「更高难度」
- 解锁成就进度

### 2.1.3 教学层（第1层）特殊设计

**目标**：让玩家在安全、引导充分的环境中掌握所有核心操作。

**第1层由2个房间组成**（房间A + 房间B），房间数 < 4，因此只有 **1 组楼梯**（仅上楼口，无下楼口，因为第0层不存在）。

| 房间                    | 内容                                                          | 教学目的               |
| :---------------------- | :------------------------------------------------------------ | :--------------------- |
| **房间A（起点）** | 玩家出生点、1只弱史莱姆、1瓶生命药水、1个NPC（引导者）        | 移动、战斗、拾取、对话 |
| **走廊**          | 无怪物，视野开阔                                              | 感受房间切换           |
| **房间B（终点）** | 2只史莱姆、1把“生锈的铁剑”（攻击+5）、上楼楼梯（通往第2层） | 成长反馈、使用楼梯     |

**教学流程**：

1. 玩家进入房间A → NPC自动对话：“勇士，穿过这片废墟，找到通往上一层的楼梯。”
2. 击败史莱姆 → 获得经验 + 金币
3. 拾取药水 → 背包中出现药水
4. 穿过走廊 → 摄像机滚动，进入房间B
5. 击败 2 只史莱姆 → 获得足够经验升到 2 级
6. 拾取铁剑 → 攻击力提升
7. 走上楼梯 → 提示“按 ↑ 键或点击楼梯进入第2层”

### 2.1.4 世界配置（`world.json`）

```json
{
  "worldName": "无尽之塔",
  "maxFloors": 999,
  "maxRoomsPerFloor": 16,
  "bossFloorInterval": 5,
  "difficultyUnlockFloor": 10,
  "havenUnlockFloor": 100,
  "floors": [
    {
      "floorId": 1,
      "floorName": "遗忘之厅",
      "isTutorial": true,
      "isBossFloor": false,
      "roomCount": 2,
      "stairGroups": 1,
      "rooms": ["room_1A_start", "room_1B_end"]
    },
    {
      "floorId": 5,
      "floorName": "暗影王座",
      "isTutorial": false,
      "isBossFloor": true,
      "roomCount": 3,
      "stairGroups": 1,
      "rooms": ["room_5_rest", "room_5_boss", "room_5_reward"]
    }
  ],
  "rooms": {
    "room_1A_start": {
      "gridX": 0,
      "gridY": 0,
      "width": 30,
      "height": 25,
      "tileMap": "rooms/room_1A.json",
      "depth": 0,
      "isStartRoom": true
    },
    "room_1B_end": {
      "gridX": 35,
      "gridY": 0,
      "width": 30,
      "height": 25,
      "tileMap": "rooms/room_1B.json",
      "depth": 1,
      "hasStairUp": true
    }
  },
  "roomConnections": [
    { "from": "room_1A_start", "to": "room_1B_end", "condition": null }
  ]
}
```

### 2.1.5 房间地图数据（`room_xxx.json`）

```json
{
  "roomId": "room_1A_start",
  "width": 30,
  "height": 25,
  "tiles": [
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ],
  "entities": [
    { "type": "monster", "id": "slime_tutorial", "x": 12, "y": 10, "isAlive": true },
    { "type": "item", "id": "health_potion", "x": 5, "y": 15 },
    { "type": "npc", "id": "guide_old_man", "x": 20, "y": 18 },
    { "type": "chest", "id": "chest_tutorial", "x": 25, "y": 8, "isOpened": false }
  ],
  "exits": [
    {
      "targetRoomId": "room_1B_end",
      "entryX": 0,
      "entryY": 12,
      "triggerX": 29,
      "triggerY": 12,
      "unlockCondition": null
    }
  ]
}
```

**地形编码**：

- `0` = 空地（可通行）
- `1` = 墙壁（不可通行）
- `2` = 装饰（不可通行，如柱子、雕像）
- `4` = **悬崖（不可通行）**——视觉上表现为边缘带阴影或渐变，用于制造纵深感，与墙壁区别在于更开放、更自然，玩家可看到悬崖下方的“虚空”或底层纹理，增加场景层次。

**地图设计原则**：每个房间至少包含 2–3 条内部路径分支，避免单一走廊。悬崖围绕路径边缘布置，既限制移动又提供视觉深度。地图生成算法应确保所有可通行区域连通，且分支最终汇合到出口，避免死胡同过多。

### 2.1.6 楼梯系统

**楼梯实体（`type: "stair"`）**：

```json
{
  "type": "stair",
  "id": "stair_up_A",
  "x": 25,
  "y": 15,
  "direction": "up",
  "targetFloor": 2,
  "targetRoomId": "room_2A_entry",
  "targetX": 5,
  "targetY": 12,
  "stairGroupId": "A",
  "pairedStairId": "stair_down_A",
  "isLocked": false,
  "unlockCondition": null
}
```

**楼梯数量规则**：

```
楼梯组数 = 1 + floor((房间数 - 4) / 2)
```

| 房间数 | 楼梯组数 | 上楼口数量 | 下楼口数量       |
| :----- | :------- | :--------- | :--------------- |
| 1–3   | 1        | 1          | 1（第2层及以上） |
| 4–5   | 2        | 2          | 2                |
| 6–7   | 3        | 3          | 3                |
| 8–9   | 4        | 4          | 4                |
| 10–11 | 5        | 5          | 5                |
| 12–13 | 6        | 6          | 6                |
| 14–16 | 7        | 7          | 7                |

**三维对应原则（核心）**：

> 第 N 层的「上楼口」与第 N+1 层的「下楼口」在三维空间中的 XZ 坐标（即 `gridX` 和 `gridY`）必须大致对齐（误差 ≤ 2 格），使玩家在垂直移动时感受到空间位置的连续性，而非随机传送。

**配对示例**：

```
第 2 层（5个房间，2组楼梯）：
  楼梯组 A（位于房间A，gridX=10, gridY=20）：
    - 第2层上楼口 A：位置 (10, 20) → 通往第3层
    - 第3层下楼口 A：位置 (11, 19) ← 从第2层上来，坐标近似（误差 ≤ 2）
  
  楼梯组 B（位于房间C，gridX=45, gridY=20）：
    - 第2层上楼口 B：位置 (45, 20) → 通往第3层
    - 第3层下楼口 B：位置 (44, 21) ← 从第2层上来，坐标近似

第 3 层（5个房间，2组楼梯）：
  楼梯组 A：
    - 第3层下楼口 A：位置 (11, 19)  ← 对应第2层上楼口 A
    - 第3层上楼口 A：位置 (12, 18)  → 通往第4层（与下楼口坐标独立）
```

**分配原则**：

- 楼梯组应**均匀分布**在不同房间中，避免所有楼梯集中在同一房间。
- 优先放置在有“地标性”的房间（如大厅、广场），增加辨识度。
- 上楼口和下楼口在**同一楼层内可以位于不同房间**，但跨楼层时必须满足三维对应。

**视觉标识**：

- 上楼口（▲）：金色箭头，带有向上发光效果
- 下楼口（▼）：蓝色箭头，带有向下发光效果
- 悬停时显示：“通往第 X 层” 或 “返回第 X 层”

**交互方式**：玩家走到楼梯格上时，按 `↑` 键（上楼）或 `↓` 键（下楼），触发楼层切换动画（屏幕淡出 → 加载新楼层 → 淡入，`500ms`）。

### 2.1.7 摄像机系统

- **核心逻辑**：摄像机以玩家为焦点，边界锁定在当前房间的矩形范围内（`room.width * tileSize`, `room.height * tileSize`）。
- **房间切换**：当玩家移动到房间边界并满足 `exits` 条件时：
  1. 将玩家瞬移到目标房间的 `entryX/entryY` 位置。
  2. 摄像机切换到目标房间的视图。
  3. 世界管理器更新当前激活的房间，卸载远处房间的渲染（保留数据）。
- **楼层切换**：通过楼梯触发时，执行淡入淡出过渡动画（`500ms`），确保切换平滑。
- **震屏功能**：受到大伤害、Boss被击败、爆炸陷阱时触发。

**接口定义**：

```typescript
interface CameraController {
  x: number;
  y: number;
  width: number;
  height: number;
  target: { x: number, y: number };
  follow(target: { x: number, y: number }): void;
  setBounds(width: number, height: number): void;
  switchToRoom(room: Room): void;
  shake(intensity: number, duration: number): void;
  fadeIn(duration: number): void;
  fadeOut(duration: number): void;
}
```

## 2.2 玩家系统

### 2.2.1 玩家属性（初始值）

- **生命值**：`1000`（无上限，可无限增长）
- **攻击力**：`8`
- **防御力**：`2`
- **暴击率**：`5%`
- **闪避率**：`5%`
- **伤害加成**：`0%`
- **等级**：`1`
- **经验**：`0`
- **金币**：`0`
- **魂晶**：`0`

**设计意图**：玩家初始仅靠高生命值“换血”击败怪物，攻击和防御均较低，迫使玩家谨慎选择战斗顺序，并借助装备和升级逐步提升输出能力。

```typescript
interface Player {
  // 基础属性
  level: number;
  exp: number;
  expToNextLevel: number;
  maxHp: number;   // 无上限，初始1000
  hp: number;
  gold: number;
  soul: number;

  // 战斗属性
  attack: number;   // 初始8
  defense: number;  // 初始2
  critRate: number; // 0.05
  dodgeRate: number;// 0.05
  damageBonus: number; // 0

  // 当前楼层/房间
  currentFloor: number;
  currentRoomId: string;
  currentDifficulty: Difficulty;

  // 状态与背包
  statusEffects: StatusEffectInstance[];
  inventory: Inventory;
  equipment: EquipmentSlots;
  collectibles: string[];  // 已获得的藏品ID列表
}
```

### 2.2.2 成长曲线

升级所需经验公式：`expToLevel = level * 120 + Math.pow(level, 1.5) * 15`

| 等级范围 | 升级生命成长 | 升级攻击成长   | 升级防御成长   |
| :------- | :----------- | :------------- | :------------- |
| 1-10     | +80          | +3             | +1             |
| 11-20    | +60          | +1             | +1             |
| 21-30    | +40          | +0（仅靠装备） | +0（仅靠装备） |
| 31+      | +30          | +0（仅靠装备） | +0（仅靠装备） |

**说明**：生命成长始终较高，攻击和防御在后期基本停止自然增长，必须通过武器、防具、藏品和宝石提升，从而维持“换血”战术的挑战性。

## 2.3 战斗系统

### 2.3.1 战斗公式

```
基础伤害 = max(1, 攻击者攻击力 - 目标防御力 * 0.5)
暴击判定：若 random() < 攻击者暴击率，基础伤害 *= 2
闪避判定：若 random() < 目标闪避率，最终伤害 = 0
最终伤害 = Math.floor(基础伤害 * (1 + 攻击者伤害加成))
```

### 2.3.2 敌人数值振幅（楼层 × 深度 × 难度 三维度）

敌人属性由 **基础值 × 楼层系数 × 深度倍率 × 难度系数** 共同决定：

```
实际怪物攻击 = 基础攻击 × 楼层系数(楼层) × 深度倍率(深度) × 难度怪物倍率(难度)
实际怪物防御 = 基础防御 × 楼层系数(楼层) × 深度倍率(深度) × 0.9 × 难度怪物倍率(难度)
实际怪物生命 = 基础生命 × 楼层系数(楼层) × 深度倍率(深度) × 1.2 × 难度怪物倍率(难度)
实际怪物经验 = 基础经验 × 楼层系数(楼层) × 经验倍率(深度) × 难度经验倍率(难度)
实际怪物金币 = 基础金币 × 楼层系数(楼层) × 金币倍率(深度) × 难度金币倍率(难度)
```

**楼层系数表**：

| 楼层范围 | 攻击系数     | 防御系数     | 生命系数     | 经验系数     | 金币系数     |
| :------- | :----------- | :----------- | :----------- | :----------- | :----------- |
| 1-5      | 1.0          | 1.0          | 1.0          | 1.0          | 1.0          |
| 6-10     | 1.4          | 1.3          | 1.5          | 1.3          | 1.2          |
| 11-15    | 1.9          | 1.7          | 2.2          | 1.7          | 1.5          |
| 16-20    | 2.5          | 2.2          | 3.0          | 2.2          | 1.9          |
| 21-30    | 3.5          | 3.0          | 4.5          | 3.0          | 2.5          |
| 31-40    | 5.0          | 4.0          | 6.5          | 4.0          | 3.5          |
| 41-50    | 7.0          | 5.5          | 9.0          | 5.5          | 5.0          |
| 51-70    | 10.0         | 7.5          | 13.0         | 7.5          | 7.0          |
| 71-100   | 15.0         | 11.0         | 20.0         | 11.0         | 10.0         |
| 101-150  | 22.0         | 16.0         | 30.0         | 16.0         | 15.0         |
| 151-200  | 35.0         | 25.0         | 50.0         | 25.0         | 22.0         |
| 200+     | 楼层 × 0.18 | 楼层 × 0.13 | 楼层 × 0.25 | 楼层 × 0.13 | 楼层 × 0.12 |

**深度倍率表**（见 2.1.1 节深度与难度/收益关系）

**教学层（第1层）怪物属性**（不受任何倍率影响，固定安全值）：

| 怪物           | 生命 | 攻击 | 防御 | 经验 | 金币 |
| :------------- | :--- | :--- | :--- | :--- | :--- |
| 史莱姆（教学） | 30   | 8    | 1    | 15   | 3    |

**第2层起正常怪物基础值**：

| 怪物                 | 生命 | 攻击 | 防御 | 经验 | 金币 |
| :------------------- | :--- | :--- | :--- | :--- | :--- |
| 史莱姆               | 50   | 10   | 2    | 20   | 5    |
| 蝙蝠                 | 40   | 12   | 1    | 25   | 8    |
| 骷髅兵               | 70   | 15   | 3    | 40   | 12   |
| 石像鬼               | 100  | 20   | 6    | 60   | 20   |
| 暗影狼               | 120  | 25   | 4    | 80   | 25   |
| 地狱犬               | 150  | 30   | 8    | 100  | 35   |
| 暗黑骑士             | 200  | 40   | 12   | 150  | 50   |
| 远古巨龙（Boss基础） | 500  | 55   | 20   | 500  | 200  |

### 2.3.3 战斗流程

1. 玩家攻击怪物：计算玩家伤害，扣除怪物生命。
2. 如果怪物存活，怪物反击：计算怪物伤害，扣除玩家生命。
3. 检查双方状态效果（中毒、冰冻、灼烧等），在回合开始/结束时触发。
4. 如果任意一方生命归零，战斗结束。
5. 战斗结束后触发事件：`monsterDefeated` 或 `bossDefeated`。

### 2.3.4 接口定义

```typescript
interface Combatant {
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  critRate: number;
  dodgeRate: number;
  damageBonus: number;
  statusEffects: StatusEffectInstance[];
  isAlive(): boolean;
  takeDamage(damage: number): void;
  getFinalAttack(): number;   // 计算所有加成后的最终攻击
  getFinalDefense(): number;  // 计算所有加成后的最终防御
}

interface BattleSystem {
  startBattle(player: Combatant, monster: Combatant): void;
  playerTurn(): void;
  monsterTurn(): void;
  endBattle(): void;
  isBossBattle: boolean;      // 是否为Boss战
  getBattleLog(): string[];   // 战斗日志
}
```

---

# 第三部分：扩展模块（按优先级依次实现）

## 模块A：状态效果系统

### A.1 数据结构

```typescript
interface StatusEffect {
  id: string;               // "poison", "rage", "shield", "freeze"
  name: string;
  type: 'buff' | 'debuff';
  duration: number;         // 持续回合数，-1表示永久
  stackable: boolean;
  maxStacks?: number;
  icon?: string;            // 显示图标
  description: string;

  // 效果钩子
  onTurnStart?: (target: Combatant, instance: StatusEffectInstance) => void;
  onTurnEnd?: (target: Combatant, instance: StatusEffectInstance) => void;
  onDamageDealt?: (damage: number, source: Combatant, target: Combatant, instance: StatusEffectInstance) => number;
  onDamageReceived?: (damage: number, target: Combatant, source: Combatant, instance: StatusEffectInstance) => number;
  onApply?: (target: Combatant, instance: StatusEffectInstance) => void;
  onRemove?: (target: Combatant, instance: StatusEffectInstance) => void;
}

interface StatusEffectInstance {
  effectId: string;
  stacks: number;
  remainingTurns: number;
}
```

### A.2 核心逻辑

**StatusEffectManager 单例**：

- `applyStatus(target: Combatant, effectId: string, stacks?: number, duration?: number): void`
  - 如果目标已有同类效果且 `stackable=true`，增加 `stacks` 并重置 `remainingTurns`。
  - 否则新增一个效果实例，调用 `onApply`。
- `removeStatus(target: Combatant, effectId: string): void`
  - 移除效果，调用 `onRemove`。
- `processTurnStart(target: Combatant): void`
  - 遍历所有效果，调用 `onTurnStart`，减少 `remainingTurns`，归零则移除。
- `processTurnEnd(target: Combatant): void`
  - 遍历所有效果，调用 `onTurnEnd`。
- `getActiveEffects(target: Combatant): StatusEffectInstance[]`
  - 返回目标当前所有激活的效果。

### A.3 预置效果清单

| effectId   | 名称 | 类型   | 持续时间             | 效果描述                                                  |
| :--------- | :--- | :----- | :------------------- | :-------------------------------------------------------- |
| `poison` | 中毒 | debuff | 3回合                | 每回合损失最大生命值的5%，可叠加（最多3层）               |
| `rage`   | 狂暴 | buff   | 3回合                | 攻击+30%，防御-20%                                        |
| `shield` | 护盾 | buff   | -1（永久直到被击破） | 吸收下一次伤害，吸收量=防御力×2                          |
| `freeze` | 冰冻 | debuff | 1回合                | 目标下回合无法行动                                        |
| `burn`   | 灼烧 | debuff | 2回合                | 每回合损失固定伤害（10+攻击者等级×2），可叠加（最多5层） |
| `haste`  | 急速 | buff   | 5回合                | 闪避率+15%                                                |
| `bless`  | 祝福 | buff   | 3回合                | 伤害加成+10%                                              |
| `curse`  | 诅咒 | debuff | 3回合                | 攻击力-15%，不可叠加                                      |

### A.4 状态效果配置（`statusEffects.json`）

```json
{
  "statusEffects": [
    {
      "id": "poison",
      "name": "中毒",
      "type": "debuff",
      "duration": 3,
      "stackable": true,
      "maxStacks": 3,
      "icon": "☠️",
      "description": "每回合损失最大生命值的5%"
    },
    {
      "id": "rage",
      "name": "狂暴",
      "type": "buff",
      "duration": 3,
      "stackable": false,
      "icon": "🔥",
      "description": "攻击+30%，防御-20%"
    }
  ]
}
```

## 模块B：任务与成就系统

### B.1 数据结构

```typescript
interface Quest {
  id: string;
  name: string;
  description: string;
  type: 'main' | 'side' | 'daily';
  objectives: QuestObjective[];
  rewards: QuestReward[];
  isRepeatable: boolean;
  prerequisites?: string[];   // 前置任务ID列表
  isCompleted: boolean;
  isTracked: boolean;         // 是否在右栏追踪显示
}

interface QuestObjective {
  type: 'defeat_monster' | 'defeat_boss' | 'collect_item' | 'reach_floor' |
        'explore_room' | 'talk_npc' | 'level_up' | 'collect_collectible' |
        'open_chest' | 'equip_item';
  targetId: string;           // 怪物ID / 物品ID / 房间ID / NPC ID
  quantity: number;
  currentProgress: number;
}

interface QuestReward {
  type: 'exp' | 'gold' | 'soul' | 'item' | 'attribute' | 'title' | 'collectible';
  value: number | string;
  quantity?: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: AchievementCondition;
  reward: QuestReward;
  isHidden: boolean;
  isUnlocked: boolean;
  unlockedAt?: string;        // 解锁时间戳
}

type AchievementCondition =
  | { type: 'level', value: number }
  | { type: 'total_gold', value: number }
  | { type: 'total_soul', value: number }
  | { type: 'defeat_monster', monsterId: string, quantity: number }
  | { type: 'reach_floor', value: number }
  | { type: 'defeat_boss', quantity: number }
  | { type: 'equip_legendary', quantity: number }
  | { type: 'collect_series', seriesId: string }
  | { type: 'status_applied', effectId: string, quantity: number }
  | { type: 'collect_collectibles', quantity: number }
  | { type: 'complete_quests', quantity: number }
  | { type: 'play_time', value: number };  // 游戏时长（小时）
```

### B.2 核心逻辑

**QuestManager 单例**：

- 维护 `activeQuests: Quest[]` 和 `completedQuests: Quest[]`。
- 监听全局事件：`monsterDefeated`、`bossDefeated`、`itemCollected`、`roomEntered`、`levelUp`、`collectibleCollected`、`chestOpened` 等。
- 事件触发时，遍历所有激活任务，更新对应目标的 `currentProgress`。
- 当某个任务的所有 `objectives` 都达成时，调用 `completeQuest(questId)`，发放奖励。
- 提供 `trackQuest(questId: string)` 和 `untrackQuest(questId: string)` 方法控制追踪。

**AchievementManager 单例**：

- 维护 `achievements: Achievement[]`。
- 同样监听全局事件，当条件满足时解锁成就。
- 解锁时触发 UI 弹窗提示，并发放奖励。
- 隐藏成就在解锁前不显示任何信息。

### B.3 任务示例（`quests.json`）

```json
{
  "quests": [
    {
      "id": "quest_tutorial_1",
      "name": "初识战斗",
      "description": "击败房间A中的史莱姆，学习战斗。",
      "type": "main",
      "objectives": [
        { "type": "defeat_monster", "targetId": "slime_tutorial", "quantity": 1, "currentProgress": 0 }
      ],
      "rewards": [
        { "type": "exp", "value": 30 },
        { "type": "gold", "value": 5 }
      ],
      "isRepeatable": false,
      "prerequisites": [],
      "isCompleted": false,
      "isTracked": true
    },
    {
      "id": "quest_tutorial_2",
      "name": "踏上征程",
      "description": "穿过走廊，到达房间B，找到通往上一层的楼梯。",
      "type": "main",
      "objectives": [
        { "type": "explore_room", "targetId": "room_1B_end", "quantity": 1, "currentProgress": 0 }
      ],
      "rewards": [
        { "type": "exp", "value": 50 },
        { "type": "gold", "value": 10 }
      ],
      "isRepeatable": false,
      "prerequisites": ["quest_tutorial_1"],
      "isCompleted": false,
      "isTracked": true
    },
    {
      "id": "quest_first_boss",
      "name": "暗影阻击",
      "description": "击败第5层的Boss：暗影领主。",
      "type": "main",
      "objectives": [
        { "type": "defeat_boss", "targetId": "shadow_lord", "quantity": 1, "currentProgress": 0 }
      ],
      "rewards": [
        { "type": "exp", "value": 500 },
        { "type": "gold", "value": 200 },
        { "type": "soul", "value": 5 }
      ],
      "isRepeatable": false,
      "prerequisites": ["quest_tutorial_2"],
      "isCompleted": false,
      "isTracked": true
    },
    {
      "id": "quest_collect_5",
      "name": "藏品收集者",
      "description": "收集5件不同藏品。",
      "type": "side",
      "objectives": [
        { "type": "collect_collectible", "targetId": "any", "quantity": 5, "currentProgress": 0 }
      ],
      "rewards": [
        { "type": "collectible", "value": "collect_gold", "quantity": 1 }
      ],
      "isRepeatable": false,
      "prerequisites": [],
      "isCompleted": false,
      "isTracked": false
    }
  ]
}
```

## 模块C：图鉴与收集系统

### C.1 数据结构

```typescript
interface BestiaryEntry {
  monsterId: string;
  name: string;
  description: string;       // 初始隐藏，击败N次后解锁
  defeatCount: number;
  unlockThreshold: number;   // 击败多少次解锁完整信息（默认5次）
  isUnlocked: boolean;
  weakness: string[];        // 如 ["fire"]，击败后显示
  drops: string[];           // 可能掉落的物品ID
  sprite?: string;           // 怪物图片引用
  spawnFloorMin: number;     // 出现的最低楼层
  spawnFloorMax: number;     // 出现的最高楼层
}

interface CollectibleEntry {
  id: string;
  name: string;
  description: string;
  lore: string;              // 背景故事
  location: string;          // 发现位置描述
  isFound: boolean;
  series: string;            // 所属系列ID
}

interface CollectionSeries {
  id: string;
  name: string;
  description: string;
  reward: QuestReward;
  totalCount: number;
  foundCount: number;
  isComplete: boolean;
}
```

### C.2 核心逻辑

**BestiaryManager 单例**：

- 每次击败怪物时，更新对应 `defeatCount`。
- 当 `defeatCount >= unlockThreshold` 时，解锁该怪物图鉴的详细信息和弱点。
- 提供 `getBestiaryProgress()` 返回已解锁/总数。
- 提供 `getMonsterDrops(monsterId: string): string[]` 返回可能掉落物。

**CollectibleManager 单例**：

- 玩家拾取 `type: 'collectible'` 的实体时，将对应 `isFound` 设为 `true`。
- 检查所属系列是否全部收集完成，若是则触发系列奖励。
- 提供 `getCollectionProgress(seriesId: string)` 返回该系列进度。
- 提供 `getAllCollectibles()` 返回所有可收集品列表。

## 模块D：动态事件系统

### D.1 数据结构

```typescript
interface RoomEvent {
  id: string;
  roomId: string | null;    // null表示全局随机事件
  triggerType: 'on_enter' | 'on_step' | 'on_interact' | 'on_defeat_all';
  triggerProbability: number; // 0-1
  condition?: string;        // 额外条件，如 "hasItem:red_key"
  options: EventOption[];
  once: boolean;            // 是否只能触发一次
  isTriggered: boolean;
  minFloor?: number;        // 触发最低楼层
  maxFloor?: number;        // 触发最高楼层
}

interface EventOption {
  text: string;
  condition?: string;       // 显示该选项的条件
  effects: EventEffect[];
}

interface EventEffect {
  type: 'damage' | 'heal' | 'add_item' | 'remove_item' | 'add_status' |
        'remove_status' | 'spawn_monster' | 'show_dialog' | 'add_exp' |
        'change_room' | 'teleport' | 'give_quest' | 'complete_quest' |
        'add_collectible' | 'add_soul' | 'open_chest' | 'heal_full';
  value: any;
  quantity?: number;
  target?: 'player' | 'all';
}
```

### D.2 核心逻辑

**EventManager 单例**：

- 加载所有 `RoomEvent` 配置。
- 在玩家进入房间（`on_enter`）、每走一步（`on_step`）、主动交互（`on_interact`）时，检查当前房间是否匹配事件。
- 按 `triggerProbability` 决定是否触发。
- 触发时，暂停游戏主循环，弹出事件面板展示 `options`，等待玩家选择。
- 玩家选择后，按顺序执行 `effects`。
- 执行完毕后，若 `once=true`，将 `isTriggered` 设为 `true`。

### D.3 事件示例（`events.json`）

```json
{
  "events": [
    {
      "id": "event_tutorial_guide",
      "roomId": "room_1A_start",
      "triggerType": "on_enter",
      "triggerProbability": 1.0,
      "options": [
        {
          "text": "继续",
          "effects": [
            { "type": "show_dialog", "value": "老守卫：勇士，你终于醒了。这座塔被黑暗力量侵蚀，你必须往上走，找到光之源头。" },
            { "type": "show_dialog", "value": "老守卫：前方有一只史莱姆，试试你的剑。击败它，你就能获得经验和金币。" },
            { "type": "give_quest", "value": "quest_tutorial_1" }
          ]
        }
      ],
      "once": true,
      "isTriggered": false
    },
    {
      "id": "event_trapped_traveler",
      "roomId": null,
      "triggerType": "on_enter",
      "triggerProbability": 0.15,
      "minFloor": 2,
      "maxFloor": 20,
      "condition": "hasCollectible:false",
      "options": [
        {
          "text": "救下旅人",
          "effects": [
            { "type": "add_item", "value": "health_potion", "quantity": 2 },
            { "type": "show_dialog", "value": "旅人感激地递给你两瓶药水。" }
          ]
        },
        {
          "text": "无视他",
          "effects": [
            { "type": "damage", "value": 15 },
            { "type": "show_dialog", "value": "你转身离去，暗处的毒虫咬了你一口。" }
          ]
        }
      ],
      "once": true,
      "isTriggered": false
    },
    {
      "id": "event_mysterious_shrine",
      "roomId": null,
      "triggerType": "on_enter",
      "triggerProbability": 0.08,
      "minFloor": 10,
      "options": [
        {
          "text": "献上100金币祈求祝福",
          "condition": "gold>=100",
          "effects": [
            { "type": "remove_item", "value": "gold", "quantity": 100 },
            { "type": "add_status", "value": "bless", "duration": 5 },
            { "type": "show_dialog", "value": "神像发出光芒，你获得了祝福！" }
          ]
        },
        {
          "text": "触摸神像",
          "effects": [
            { "type": "heal_full", "value": 0 },
            { "type": "show_dialog", "value": "神像的力量治愈了你所有的伤口。" }
          ]
        }
      ],
      "once": true,
      "isTriggered": false
    }
  ]
}
```

## 模块E：宝箱系统

### E.1 宝箱实体（`type: "chest"`）

```json
{
  "type": "chest",
  "id": "chest_01",
  "x": 15,
  "y": 10,
  "isOpened": false,
  "isLocked": false,
  "unlockCondition": null,
  "rewardTier": "auto",
  "forcedQuality": null
}
```

### E.2 宝箱奖励生成逻辑

当玩家打开宝箱时，根据 **当前楼层** 和 **当前房间深度** 生成奖励内容：

```typescript
interface ChestReward {
  gold?: number;
  exp?: number;
  items?: ChestItem[];
  soul?: number;
  collectible?: string;      // 可掉落的藏品ID
  forcedQuality?: Quality;   // 强制品质（传说宝箱用）
}

interface ChestItem {
  itemId: string;
  quantity: number;
  isEquipment: boolean;
  equipmentQuality?: Quality;
}
```

**奖励生成公式**：

```
基础金币 = 楼层 × 5 + 深度 × 8 + random(0, 20)
基础经验 = 楼层 × 3 + 深度 × 5 + random(0, 15)
装备掉落概率 = 15% + 楼层 × 0.5% + 深度 × 2%（上限65%）
药水掉落概率 = 30%（固定）
魂晶掉落概率 = 5% + 楼层 × 0.2%（上限25%）
藏品掉落概率 = 5% + 楼层 × 0.3% + 深度 × 1%（上限35%）
```

**宝箱品质表**（决定奖励丰厚程度）：

| 宝箱类型         | 出现概率 | 金币倍率 | 经验倍率 | 装备品质下限 | 额外词条机会 | 藏品掉落倍率 |
| :--------------- | :------- | :------- | :------- | :----------- | :----------- | :----------- |
| 木质宝箱（普通） | 50%      | 1.0×    | 1.0×    | 普通         | 0            | 0.5×        |
| 铁质宝箱（优秀） | 30%      | 1.8×    | 1.5×    | 优秀         | +1           | 1.0×        |
| 黄金宝箱（稀有） | 14%      | 3.0×    | 2.5×    | 稀有         | +2           | 1.8×        |
| 暗金宝箱（史诗） | 5%       | 5.0×    | 4.0×    | 史诗         | +3           | 3.0×        |
| 传说宝箱（传说） | 1%       | 10.0×   | 8.0×    | 传说         | +4           | 5.0×        |

**宝箱类型决定方式**：

1. 若 `rewardTier` 为 `"auto"`，根据楼层随机：楼层越高，高级宝箱概率越高（楼层每增加10，稀有及以上宝箱概率+1.5%）。
2. 若手动指定了 `rewardTier`，则固定为该类型。
3. Boss楼层终点房间的传说宝箱为强制 `rewardTier: "legendary"`。

**奖励内容生成步骤**：

1. 确定宝箱类型 → 获得对应的倍率和品质下限。
2. 生成金币：`基础金币 × 金币倍率 × 难度金币倍率`。
3. 生成经验：`基础经验 × 经验倍率 × 难度经验倍率`。
4. 判定是否掉落装备：`random(0, 100) < 装备掉落概率`，若掉落则调用装备生成系统，品质下限为宝箱品质表指定的值。
5. 判定是否掉落药水：`random(0, 100) < 药水掉落概率`，若成功则掉落 1-2 瓶。
6. 判定是否掉落魂晶：`random(0, 100) < 魂晶掉落概率`，若成功则掉落 1-3 个。
7. 判定是否掉落藏品：`random(0, 100) < 藏品掉落概率 × 藏品掉落倍率`，若成功则从藏品池中随机抽取一个（优先未拥有的）。

### E.3 宝箱系统接口

```typescript
interface ChestSystem {
  openChest(chestId: string, player: Player): ChestReward;
  getChestType(rewardTier: string, floor: number): ChestTier;
  isChestLocked(chestId: string): boolean;
  unlockChest(chestId: string, keyId: string): boolean;
}
```

## 模块F：装备与品质系统

### F.1 装备数据结构

```typescript
interface Equipment {
  id: string;
  baseItemId: string;
  name: string;
  type: 'weapon' | 'shield' | 'helmet' | 'chest' | 'boots' | 'accessory';
  slot: 'main_hand' | 'off_hand' | 'head' | 'body' | 'feet' | 'accessory_1' | 'accessory_2';

  // 三大核心维度
  level: number;
  quality: Quality;
  affixes: Affix[];

  // 基础属性
  baseAttack: number;
  baseDefense: number;
  baseHpBonus: number;

  // 最终属性（基础 + 词条加成）
  finalAttack: number;
  finalDefense: number;
  finalHpBonus: number;

  // 商业价值
  sellPrice: number;
  buyPrice: number;

  // 元数据
  generatedAt: string;       // 生成时间
  source: 'chest' | 'merchant' | 'craft' | 'boss' | 'quest';
}

type Quality = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';

interface Affix {
  id: string;
  name: string;
  type: 'flat_atk' | 'flat_def' | 'flat_hp' | 'pct_atk' | 'pct_def' |
        'crit_rate' | 'dodge_rate' | 'lifesteal' | 'fire_damage' |
        'poison_on_hit' | 'gold_bonus' | 'exp_bonus' | 'boss_damage';
  value: number;
  description: string;
}
```

### F.2 品质系统

**品质等级与属性**：

| 品质              | 颜色            | 出现概率（基础） | 词条数量 | 属性倍率 | 回收价倍率 | 商店价倍率 |
| :---------------- | :-------------- | :--------------- | :------- | :------- | :--------- | :--------- |
| 普通（Common）    | 灰色`#9e9e9e` | 45%              | 0        | 1.0×    | 1.0×      | 2.0×      |
| 优秀（Uncommon）  | 蓝色`#4fc3f7` | 30%              | 1        | 1.3×    | 2.0×      | 4.0×      |
| 稀有（Rare）      | 紫色`#ab47bc` | 16%              | 2        | 1.7×    | 4.0×      | 8.0×      |
| 史诗（Epic）      | 金色`#ffd700` | 6%               | 3        | 2.3×    | 8.0×      | 16.0×     |
| 传说（Legendary） | 橙红`#ff6f00` | 2.5%             | 4-5      | 3.2×    | 16.0×     | 32.0×     |
| 神话（Mythic）    | 彩虹渐变色      | 0.5%             | 6-7      | 4.5×    | 30.0×     | 60.0×     |

**品质修正概率**（随楼层和深度变化）：

```
实际品质概率:
  普通 = 基础概率 × max(0.3, 1 - 楼层/150)
  优秀 = 基础概率 × (1 + 楼层/300)
  稀有 = 基础概率 × (1 + 楼层/200 + 深度/50)
  史诗 = 基础概率 × (1 + 楼层/100 + 深度/30)
  传说 = 基础概率 × (1 + 楼层/60 + 深度/20)
  神话 = 基础概率 × (1 + 楼层/30 + 深度/10)  // 仅100层后可能出现

  归一化：确保所有品质概率之和 = 100%
```

### F.3 装备等级

装备等级由以下因素决定：

- **玩家等级**：权重 50%
- **当前楼层**：权重 35%
- **房间深度**：权重 15%

```
装备等级 = floor(
  玩家等级 × 0.5 +
  楼层 × 1.4 +
  深度 × 0.6 +
  random(-3, 4)
)
最小值为 1，最大值为 150。
```

**等级对基础属性的影响**：

```
基础攻击 = 武器基础攻击 × (1 + 装备等级 × 0.08)
基础防御 = 防具基础防御 × (1 + 装备等级 × 0.08)
基础生命加成 = 基础生命 × (1 + 装备等级 × 0.06)
```

### F.4 词条系统

**词条类型与数值范围**：

| 词条ID            | 名称       | 类型   | 效果范围（随等级提升）      | 出现品质下限 |
| :---------------- | :--------- | :----- | :-------------------------- | :----------- |
| `flat_atk`      | 攻击力     | 主属性 | +2~8 × (1 + 等级×0.05)    | 优秀         |
| `flat_def`      | 防御力     | 主属性 | +1~4 × (1 + 等级×0.05)    | 优秀         |
| `flat_hp`       | 生命值     | 主属性 | +10~40 × (1 + 等级×0.06)  | 优秀         |
| `pct_atk`       | 百分比攻击 | 百分比 | +2%~8%                      | 稀有         |
| `pct_def`       | 百分比防御 | 百分比 | +1%~5%                      | 稀有         |
| `crit_rate`     | 暴击率     | 副属性 | +1%~6%                      | 稀有         |
| `dodge_rate`    | 闪避率     | 副属性 | +1%~5%                      | 稀有         |
| `lifesteal`     | 生命偷取   | 特殊   | 攻击回复生命 1%~5%          | 史诗         |
| `fire_damage`   | 火焰伤害   | 特殊   | 附加 3~15 火焰伤害          | 稀有         |
| `poison_on_hit` | 中毒攻击   | 特殊   | 攻击 15%~30% 概率使目标中毒 | 史诗         |
| `gold_bonus`    | 金币加成   | 特殊   | 金币获取 +5%~20%            | 稀有         |
| `exp_bonus`     | 经验加成   | 特殊   | 经验获取 +5%~20%            | 稀有         |
| `boss_damage`   | 对Boss伤害 | 特殊   | 对Boss伤害 +5%~25%          | 史诗         |

**词条数量决定因素**：

| 品质 | 基础词条数 | 品质额外 | 等级额外（每15级+1） | 深度额外（每3级+1） | 最大词条数 |
| :--- | :--------- | :------- | :------------------- | :------------------ | :--------- |
| 普通 | 0          | 0        | 0                    | 0                   | 0          |
| 优秀 | 1          | 0        | 0                    | 0                   | 1          |
| 稀有 | 2          | 0        | +1（≥25级）         | 0                   | 3          |
| 史诗 | 3          | 0        | +1（≥15级）         | +1（≥深度2）       | 5          |
| 传说 | 4          | +1       | +1（≥10级）         | +1（≥深度1）       | 7          |
| 神话 | 5          | +2       | +1（≥5级）          | +1（≥深度1）       | 9          |

**词条生成规则**：

1. 从可用词条池中随机抽取（不重复）。
2. 主属性词条（攻击/防御/生命）出现的概率是副属性的 2 倍。
3. 特殊词条（火焰伤害、金币加成等）仅在稀有及以上品质出现。
4. 词条的数值在其范围内随机浮动，等级越高，数值越偏向上限。
5. 同一件装备上不会出现互相矛盾的词条（如同时出现百分比攻击和固定攻击是允许的，同时出现百分比防御和固定防御也是允许的）。

### F.5 装备生成函数

```typescript
function generateEquipment(
  baseItemId: string,
  playerLevel: number,
  floor: number,
  depth: number,
  qualityFloor?: Quality,
  forcedLevel?: number
): Equipment {
  // 1. 确定品质
  let quality = qualityFloor || rollQuality(floor, depth);

  // 2. 确定装备等级
  const level = forcedLevel || Math.floor(
    playerLevel * 0.5 + floor * 1.4 + depth * 0.6 + random(-3, 4)
  );

  // 3. 从基础物品模板获取基础属性
  const base = getItemTemplate(baseItemId);

  // 4. 计算基础属性（受品质和等级影响）
  const qualityMultiplier = QUALITY_MULTIPLIERS[quality];
  const baseAttack = (base.attack || 0) * (1 + level * 0.08) * qualityMultiplier;
  const baseDefense = (base.defense || 0) * (1 + level * 0.08) * qualityMultiplier;
  const baseHpBonus = (base.hpBonus || 0) * (1 + level * 0.06) * qualityMultiplier;

  // 5. 生成词条
  const affixCount = getAffixCount(quality, level, depth);
  const affixes = [];
  const availableAffixes = getAvailableAffixes(quality);
  const usedAffixTypes = new Set();

  for (let i = 0; i < affixCount; i++) {
    const affix = pickRandomAffix(availableAffixes, usedAffixTypes);
    usedAffixTypes.add(affix.type);
    affixes.push({
      ...affix,
      value: calculateAffixValue(affix, level, quality)
    });
  }

  // 6. 计算最终属性
  let finalAttack = baseAttack;
  let finalDefense = baseDefense;
  let finalHpBonus = baseHpBonus;

  // 应用固定值词条
  const flatAtk = affixes.filter(a => a.type === 'flat_atk').reduce((sum, a) => sum + a.value, 0);
  const flatDef = affixes.filter(a => a.type === 'flat_def').reduce((sum, a) => sum + a.value, 0);
  const flatHp = affixes.filter(a => a.type === 'flat_hp').reduce((sum, a) => sum + a.value, 0);

  // 应用百分比词条
  const pctAtk = affixes.filter(a => a.type === 'pct_atk').reduce((sum, a) => sum + a.value, 0);
  const pctDef = affixes.filter(a => a.type === 'pct_def').reduce((sum, a) => sum + a.value, 0);

  finalAttack = (baseAttack + flatAtk) * (1 + pctAtk / 100);
  finalDefense = (baseDefense + flatDef) * (1 + pctDef / 100);
  finalHpBonus = baseHpBonus + flatHp;

  // 7. 计算价格
  const levelFactor = 1 + level * 0.02;
  const affixFactor = 1 + affixes.length * 0.1;
  const basePrice = base.sellPrice || 10;
  const sellPrice = Math.floor(
    basePrice * QUALITY_SELL_MULTIPLIERS[quality] * levelFactor * affixFactor * random(0.9, 1.1)
  );
  const buyPrice = Math.floor(sellPrice * (2 + qualityFactor(quality)));

  // 8. 生成名称
  const name = generateItemName(base.name, quality, affixes);

  return {
    id: generateUUID(),
    baseItemId,
    name,
    type: base.type,
    slot: base.slot,
    level,
    quality,
    affixes,
    baseAttack,
    baseDefense,
    baseHpBonus,
    finalAttack,
    finalDefense,
    finalHpBonus,
    sellPrice,
    buyPrice,
    generatedAt: new Date().toISOString(),
    source: 'chest'
  };
}
```

### F.6 装备名称生成规则

```
名称模板 = [前缀] + 基础名称 + [后缀]

前缀（根据品质和词条）:
  - 普通: 无前缀
  - 优秀: "精良的"、"锋利的"、"坚固的"、"轻盈的"
  - 稀有: "暗影"、"烈焰"、"冰霜"、"雷霆"、"毒蛇"、"铁壁"
  - 史诗: "龙息"、"虚空"、"永恒"、"末日"、"星辰"、"深渊"
  - 传说: "众神之"、"灭世"、"创世"、"不朽"、"天启"
  - 神话: "原始"、"混沌"、"终焉"、"起源"

后缀（根据词条）:
  - 攻击词条 → "之力"
  - 防御词条 → "之盾"
  - 暴击词条 → "之刃"
  - 生命偷取 → "之噬"
  - 火焰伤害 → "之焰"
  - 中毒攻击 → "之毒"
  - 无词条 → 无后缀

示例:
  - 普通铁剑 → "铁剑"
  - 优秀铁剑 + 攻击词条 → "精良的铁剑之力"
  - 稀有铁剑 + 火焰伤害 + 暴击率 → "烈焰铁剑之焰"
  - 史诗铁剑 + 攻击% + 生命偷取 + 暴击率 → "龙息铁剑之噬"
  - 传说铁剑 + 4个词条 → "众神的铁剑"
  - 神话铁剑 + 6个词条 → "原始铁剑"
```

## 模块G：商人系统

### G.1 商人库存生成

商人出售的武器/装备也使用 **Roll 生成**，规则如下：

```typescript
function generateMerchantInventory(floor: number, difficulty: Difficulty): MerchantItem[] {
  const baseCount = 3 + Math.floor(floor / 4);
  const count = Math.min(baseCount, 12);
  const items = [];

  // 固定商品：药水、钥匙
  items.push({ type: 'potion', price: 20 + floor * 2, quantity: 3 + floor % 5 });
  if (floor > 3) {
    items.push({ type: 'key', price: 50 + floor * 3, quantity: 1 });
  }

  // 随机装备
  for (let i = 0; i < count; i++) {
    const quality = rollMerchantQuality(floor);
    const level = Math.floor(floor * 0.7 + random(-3, 5));
    const base = pickRandomItemTemplate(floor);
    const equipment = generateEquipment(base.id, level, floor, 0, quality);
    // 商人价格有浮动
    equipment.buyPrice = Math.floor(equipment.buyPrice * random(0.8, 1.2));
    items.push({ type: 'equipment', equipment, price: equipment.buyPrice });
  }

  // 魂晶商品（稀有）
  if (floor > 5 && random() < 0.3) {
    const rareQuality = rollMerchantQuality(floor + 5);
    const base = pickRandomItemTemplate(floor + 3);
    const equipment = generateEquipment(base.id, floor + 2, floor, 0, rareQuality);
    const soulPrice = 1 + Math.floor(floor / 10) + (rareQuality === 'epic' ? 3 : rareQuality === 'legendary' ? 8 : 0);
    items.push({ type: 'soul_equipment', equipment, soulPrice });
  }

  // 藏品（魂晶购买）
  if (floor > 10 && random() < 0.15) {
    const collectible = pickRandomCollectible(['common', 'uncommon', 'rare']);
    const soulPrice = 2 + Math.floor(floor / 15);
    items.push({ type: 'soul_collectible', collectible, soulPrice });
  }

  return items;
}

function rollMerchantQuality(floor: number): Quality {
  const probs = {
    common: Math.max(15, 45 - floor * 0.3),
    uncommon: Math.max(20, 35 + floor * 0.2),
    rare: Math.max(10, 17 + floor * 0.3),
    epic: Math.max(2, 3 + floor * 0.15),
    legendary: Math.max(0.1, floor * 0.04)
  };
  // 归一化后随机
}
```

### G.2 回收价（出售给商人）

玩家将装备出售给商人时，价格由 **品质主导**：

```
回收价 = 基础回收价 × 品质倍率 × (1 + 装备等级 × 0.02) × (1 + 词条数 × 0.1) × 随机(0.9, 1.1)
```

| 品质 | 基础回收价 | 品质倍率 |
| :--- | :--------- | :------- |
| 普通 | 10         | 1.0×    |
| 优秀 | 30         | 2.0×    |
| 稀有 | 80         | 4.5×    |
| 史诗 | 200        | 10.0×   |
| 传说 | 500        | 25.0×   |
| 神话 | 1200       | 50.0×   |

**示例**：一把史诗品质、等级10、带3个词条的剑 → 回收价 = 200 × 10.0 × (1+10×0.02) × (1+3×0.1) × 1.05 = 200 × 10 × 1.2 × 1.3 × 1.05 ≈ 3276 金币

### G.3 商人界面

```
+-------------------------------------------------------------+
│  ✕  铁匠铺 - 第 5 层           🪙 1500  💎 5               │
+-------------------------------------------------------------+
│  出售（点击购买）               你的背包（点击出售）          │
│  ┌─────────────────────────┐  ┌─────────────────────────┐   │
│  │ ❤️ 生命药水 x3    50G   │  │ ❤️ 药水 x3              │   │
│  │ 🗡️ 精良的铁剑   150G   │  │ 🔑 钥匙 x1              │   │
│  │    攻击+12  优秀        │  │ 🗡️ 烈焰铁剑  回收 876G │   │
│  │ 🛡️ 坚固的木盾   280G   │  │    (史诗·火焰伤害+8)    │   │
│  │    防御+8   稀有        │  │ 💎 力量印记  回收 120G  │   │
│  │ 💎 力量指环   💎2      │  │    (藏品·攻击+5)        │   │
│  │    (藏品·攻击+8)       │  │                         │   │
│  └─────────────────────────┘  └─────────────────────────┘   │
│  点击购买/出售  品质颜色边框标示等级                         │
└-------------------------------------------------------------┘
```

## 模块H：藏品系统

**藏品（Collectible）** 是玩家可永久持有的特殊物品，提供被动效果。藏品一旦获得，永久生效，无法出售或丢弃。同类藏品只能持有一个（唯一性）。

### H.1 藏品数据结构

```typescript
interface Collectible {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: CollectibleType;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
  effect: CollectibleEffect;
  maxStack: number;           // 通常为1
  stackCount: number;
  isUnique: boolean;          // 是否唯一（同类只可持有一个）
  series?: string;            // 所属系列
  acquisitionHint: string;    // 获取提示
}

type CollectibleType =
  | 'attribute'      // 属性加成
  | 'combat'         // 战斗特效
  | 'resource'       // 资源加成
  | 'special';       // 特殊效果

interface CollectibleEffect {
  type: 'attack_bonus' | 'defense_bonus' | 'hp_bonus' | 'crit_bonus' | 'dodge_bonus' |
        'damage_reduction' | 'lifesteal' | 'thorns' | 'gold_bonus' | 'exp_bonus' |
        'soul_bonus' | 'health_regen' | 'poison_resist' | 'fire_resist' | 'freeze_resist' |
        'chest_quality_up' | 'merchant_discount' | 'boss_damage_bonus' | 'stair_skip' |
        'auto_heal';
  value: number;
  description: string;
}
```

### H.2 藏品获取渠道

| 渠道         | 概率/规则 | 品质倾向       |
| :----------- | :-------- | :------------- |
| 宝箱（普通） | 5%        | 普通/优秀      |
| 宝箱（铁质） | 12%       | 优秀/稀有      |
| 宝箱（黄金） | 25%       | 稀有/史诗      |
| 宝箱（暗金） | 40%       | 史诗/传说      |
| 宝箱（传说） | 70%       | 传说/神话      |
| 击败普通怪物 | 2%        | 普通/优秀      |
| 击败精英怪物 | 8%        | 优秀/稀有      |
| 击败Boss     | 100%      | 稀有/史诗/传说 |
| 商人         | 魂晶购买  | 按价格         |
| 事件奖励     | 随机      | 随机           |
| 任务奖励     | 固定      | 按任务         |

### H.3 藏品效果列表

| 藏品ID                    | 名称       | 类型      | 效果                  | 品质 |
| :------------------------ | :--------- | :-------- | :-------------------- | :--- |
| `collect_atk_1`         | 力量印记   | attribute | 攻击力+5              | 普通 |
| `collect_atk_2`         | 力量徽章   | attribute | 攻击力+15             | 优秀 |
| `collect_atk_3`         | 力量圣印   | attribute | 攻击力+35             | 稀有 |
| `collect_atk_4`         | 力量神印   | attribute | 攻击力+70             | 史诗 |
| `collect_def_1`         | 守护印记   | attribute | 防御力+3              | 普通 |
| `collect_def_2`         | 守护徽章   | attribute | 防御力+10             | 优秀 |
| `collect_def_3`         | 守护圣印   | attribute | 防御力+25             | 稀有 |
| `collect_def_4`         | 守护神印   | attribute | 防御力+50             | 史诗 |
| `collect_hp_1`          | 生命印记   | attribute | 生命上限+80           | 普通 |
| `collect_hp_2`          | 生命徽章   | attribute | 生命上限+200          | 优秀 |
| `collect_hp_3`          | 生命圣印   | attribute | 生命上限+500          | 稀有 |
| `collect_hp_4`          | 生命神印   | attribute | 生命上限+1200         | 史诗 |
| `collect_crit`          | 精准之眼   | attribute | 暴击率+5%             | 稀有 |
| `collect_dodge`         | 风之轻语   | attribute | 闪避率+5%             | 稀有 |
| `collect_lifesteal`     | 血之契约   | combat    | 攻击回复生命2%        | 史诗 |
| `collect_thorns`        | 荆棘之心   | combat    | 反弹5%伤害            | 稀有 |
| `collect_gold`          | 贪婪之手   | resource  | 金币获取+15%          | 优秀 |
| `collect_exp`           | 智慧之书   | resource  | 经验获取+10%          | 优秀 |
| `collect_soul`          | 灵魂容器   | resource  | 魂晶获取+20%          | 稀有 |
| `collect_regen`         | 生命源泉   | resource  | 每走10步恢复2%生命    | 史诗 |
| `collect_poison_resist` | 净化护符   | special   | 中毒抗性+50%          | 稀有 |
| `collect_fire_resist`   | 炎之屏障   | special   | 火焰抗性+50%          | 稀有 |
| `collect_chest_up`      | 幸运币     | special   | 宝箱品质提升一级      | 传说 |
| `collect_discount`      | 商人之友   | special   | 商店价格-10%          | 稀有 |
| `collect_boss_damage`   | 屠龙者之印 | combat    | 对Boss伤害+15%        | 传说 |
| `collect_auto_heal`     | 愈合之心   | special   | 战斗外每2秒恢复1%生命 | 史诗 |
| `collect_thorns_2`      | 荆棘之铠   | combat    | 反弹12%伤害           | 传说 |

### H.4 藏品系统接口

```typescript
interface CollectibleManager {
  // 藏品操作
  addCollectible(player: Player, collectibleId: string): boolean;
  hasCollectible(player: Player, collectibleId: string): boolean;
  getCollectible(collectibleId: string): Collectible | null;
  getAllCollectibles(player: Player): Collectible[];
  getCollectibleCount(player: Player): number;

  // 效果计算
  getActiveEffects(player: Player): CollectibleEffect[];
  applyAttributeModifiers(player: Player): void;
  getCombatModifiers(player: Player): CombatModifiers;
  getResourceModifiers(player: Player): ResourceModifiers;

  // 筛选
  getCollectiblesByRarity(rarity: Quality): Collectible[];
  getCollectiblesByType(type: CollectibleType): Collectible[];
  getCollectiblesBySeries(seriesId: string): Collectible[];
}
```

## 模块I：难度系统

### I.1 难度等级

难度系统在玩家到达第 **10层** 后解锁。

| 难度ID        | 名称          | 解锁条件              | 怪物倍率      | 经验倍率        | 金币倍率        | 装备品质修正    | 藏品掉落率      | Boss额外强度    |
| :------------ | :------------ | :-------------------- | :------------ | :-------------- | :-------------- | :-------------- | :-------------- | :-------------- |
| `lullaby`   | 摇篮曲        | 默认                  | 0.4×         | 1.5×           | 1.5×           | +2级            | 1.5×           | 0.7×           |
| `normal`    | 普通          | 默认                  | 1.0×         | 1.0×           | 1.0×           | 0               | 1.0×           | 1.0×           |
| `hard`      | 困难          | 默认                  | 1.3×         | 1.3×           | 1.4×           | +2级            | 1.3×           | 1.15×          |
| `nightmare` | 噩梦          | 到达第15层            | 1.7×         | 1.6×           | 1.8×           | +3级            | 1.7×           | 1.3×           |
| `hell`      | 地狱          | 到达第20层            | 2.2×         | 2.0×           | 2.2×           | +4级            | 2.2×           | 1.5×           |
| `purgatory` | 炼狱          | 到达第30层            | 3.0×         | 2.5×           | 3.0×           | +5级            | 3.0×           | 1.8×           |
| `haven`     | 天堂（HAVEN） | **到达第100层** | **5×** | **3.5×** | **3.5×** | **+10级** | **4.5×** | **2.5×** |

**摇篮曲（Lullaby）说明**：

- 专为新手或休闲玩家设计
- 怪物极其脆弱，伤害极低
- 玩家几乎不会死亡，可轻松体验剧情和探索
- 适合不了解游戏机制的玩家快速上手
- 在此难度下，Boss不会获得“势不可挡”增益（战力检测跳过）

**天堂（HAVEN）说明**：

- 100层之后解锁的终极挑战难度
- 怪物拥有极高的属性倍率
- 对玩家的装备、藏品、操作有极高要求
- 奖励同样丰厚（经验、金币、装备品质、藏品掉落均为最高）
- 在此难度下，Boss必定附带 2 个词缀（额外+1强制词缀）
- 唯一能产出 **神话（Mythic）品质** 装备的难度（概率极低，但存在）
- 解锁后，主界面会显示特殊的天堂标识

```typescript
type Difficulty =
  | 'lullaby'   // 摇篮曲（超级低难度）
  | 'normal'    // 普通
  | 'hard'      // 困难
  | 'nightmare' // 噩梦
  | 'hell'      // 地狱
  | 'purgatory' // 炼狱
  | 'haven';    // 天堂（超级高难度）

interface DifficultyConfig {
  id: Difficulty;
  name: string;
  description: string;
  monsterMultiplier: number;
  expMultiplier: number;
  goldMultiplier: number;
  qualityBonus: number;        // 装备品质等级加成（影响roll品质时的偏移）
  collectibleDropRate: number;
  bossMultiplier: number;
  unlockFloor: number;          // 解锁所需楼层，0表示默认解锁
  icon: string;
  color: string;
  isEndgame: boolean;           // true=天堂
}
```

### I.2 难度切换

```typescript
interface DifficultySystem {
  currentDifficulty: Difficulty;
  unlockedDifficulties: Difficulty[];
  switchDifficulty(newDifficulty: Difficulty): boolean;
  getDifficultyConfig(difficulty: Difficulty): DifficultyConfig;
  getAvailableDifficulties(playerFloor: number): Difficulty[];
  getDifficultyMultiplier(difficulty: Difficulty): {
    monster: number;
    exp: number;
    gold: number;
    quality: number;
    collectible: number;
    boss: number;
  };
}
```

### I.3 难度切换UI

在主菜单或游戏内暂停菜单中显示：

```
+-------------------------------------------------------------+
│  难度选择                                                    │
│  ┌───────────────────────────────────────────────────────┐     │
│  │  🌙 摇篮曲   - 超级低难度，适合新手                  │     │
│  │  ⭐ 普通     - 标准游戏体验                         │     │
│  │  🔥 困难     - 有挑战性，奖励更丰富                 │     │
│  │  💀 噩梦     - 极具挑战，高风险高回报               │     │
│  │  👿 地狱     - 只有强者才能生存                     │     │
│  │  ⚔️ 炼狱     - 非人哉（30层解锁）                  │     │
│  │  🕊️ 天堂     - 终极试炼（100层解锁）               │     │
│  └───────────────────────────────────────────────────────┘     │
└-------------------------------------------------------------+
```

## 模块J：Roguelike属性系统

为游戏注入Roguelike的随机性和重复可玩性，以下元素在每次进入楼层时随机生成：

### J.1 Roguelike随机元素清单

| 元素     | 随机内容                           | 实现方式                      |
| :------- | :--------------------------------- | :---------------------------- |
| 房间布局 | 房间数量、连接方式、房间大小       | 程序化生成算法                |
| 怪物配置 | 怪物类型、位置、数量               | 从怪物池中按深度/楼层筛选随机 |
| 怪物属性 | 额外随机±10%浮动                  | 生成时增加随机偏移            |
| 宝箱品质 | 宝箱类型和品质                     | 按楼层概率随机Roll            |
| 藏品掉落 | 掉落何种藏品                       | 从藏品池中按品质权重随机      |
| 商人库存 | 出售的装备和物品                   | 随机生成，每次不同            |
| 事件类型 | 触发何种事件                       | 从事件池中随机                |
| Boss词缀 | 额外附加0-2个词缀                  | 随机附加                      |
| 地板效果 | 部分房间有特殊效果（毒雾、治愈等） | 随机附加                      |

### J.2 Boss词缀系统

每次生成Boss时，有概率附加 0-2 个随机词缀（天堂难度下必定附加 2 个）：

| 词缀ID             | 名称   | 效果                                | 出现概率 |
| :----------------- | :----- | :---------------------------------- | :------- |
| `boss_rage`      | 狂暴   | Boss生命低于30%时，攻击+50%         | 20%      |
| `boss_shield`    | 护盾   | Boss每回合恢复2%生命                | 15%      |
| `boss_thorns`    | 荆棘   | 反弹10%伤害                         | 15%      |
| `boss_poison`    | 剧毒   | 攻击附带中毒效果（3层）             | 10%      |
| `boss_fast`      | 敏捷   | Boss闪避率+20%                      | 10%      |
| `boss_giant`     | 巨人   | Boss生命+50%，体型变大              | 15%      |
| `boss_cursed`    | 诅咒   | 玩家在Boss战中暴击率减半            | 10%      |
| `boss_legendary` | 传奇   | Boss属性+30%，掉落品质提升两级      | 5%       |
| `boss_vampire`   | 吸血鬼 | Boss攻击回复生命5%                  | 8%       |
| `boss_frozen`    | 冰霜   | 玩家在Boss战中每回合有10%概率被冰冻 | 7%       |
| `boss_berserk`   | 狂战   | Boss攻击+80%，但防御-30%            | 10%      |
| `boss_immortal`  | 不朽   | Boss生命低于10%时，无敌一回合       | 5%       |

### J.3 Roguelike配置

```typescript
interface RoguelikeConfig {
  seed: number;                    // 每层随机种子
  enableRandomGeneration: boolean;
  bossAffixCount: { min: number; max: number };
  specialRoomChance: number;       // 特殊房间出现概率
  monsterStatVariance: number;     // 怪物属性浮动范围 ±%
  floorEffectChance: number;       // 地板效果出现概率
}

interface BossAffix {
  id: string;
  name: string;
  description: string;
  icon: string;
  apply(boss: Monster): void;
  onPlayerTurn?: (player: Player, boss: Monster) => void;
  onBossTurn?: (boss: Monster, player: Player) => void;
}

interface FloorEffect {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'poison' | 'heal' | 'slow' | 'haste' | 'gold' | 'exp';
  value: number;
  duration: 'floor' | 'permanent';
}
```

## 模块K：房间连接生成算法（程序化生成用）

在无尽模式或程序化生成楼层时，使用以下算法确保**非线性连接**和**深度分级**：

```
输入: 房间数量 N (4 ≤ N ≤ 16)
输出: 房间连接图（保证连通、有深度分级）

算法步骤:
1. 生成 N 个房间节点，标记起点房间（深度0）和终点房间
2. 使用 BFS 生成一棵"最小生成树"，确保所有房间连通:
   - 起点深度 = 0
   - 每扩展一层，深度+1
   - 终点房间深度不超过 最小(最大深度, N/2)
3. 额外添加 2~4 条"捷径"连接（环路），增加路径选择:
   - 随机选择两个深度差 ≤ 2 的房间，添加双向连接
   - 确保不产生负深度（不会让深度降低）
4. 为每条连接分配解锁条件（可选）:
   - 20% 概率需要钥匙解锁
   - 10% 概率需要击败特定怪物
5. 验证: 所有房间可到达终点房间，且至少存在 2 条不同路径
6. 为每个房间分配怪物和宝箱:
   - 怪物数量 = 1 + floor(深度 × 0.8) + random(0, 2)
   - 宝箱数量 = (深度 > 0 ? 1 : 0) + (深度 > 2 ? 1 : 0) + random(0, 1)
   - 深度越深，怪物越强，宝箱品质越高
```

**深度计算的简化公式**（房间连接生成时自动计算）：

```
房间深度 = 从起点房间出发的最短路径长度（边数）
```

## 模块L：视觉体验增强（粒子特效与屏幕震动）

### L.1 粒子系统

**用途**：

- 拾取物品时飘出 "+50 Gold" 文字动画
- 暴击时爆出红色 "暴击！" 大字
- 火焰陷阱上持续燃烧的火苗粒子
- 升级时的金色光环粒子
- Boss战胜利时的金色烟花
- 藏品拾取时的紫色星光特效

**接口定义**：

```typescript
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  type: 'text' | 'circle' | 'spark' | 'star' | 'glow';
  text?: string;
  opacity: number;
  gravity?: number;
  scale?: number;
}

interface ParticleSystem {
  emit(particle: Particle): void;
  emitText(x: number, y: number, text: string, color?: string, size?: number): void;
  emitBurst(x: number, y: number, count: number, color?: string, spread?: number): void;
  emitVictory(x: number, y: number): void;      // Boss战胜利特效
  emitCollectible(x: number, y: number): void;  // 藏品拾取特效
  emitLevelUp(x: number, y: number): void;      // 升级特效
  update(deltaTime: number): void;
  render(ctx: CanvasRenderingContext2D): void;
  clear(): void;
}
```

**性能要求**：

- 所有粒子在 100-500 毫秒内自然消亡
- 单次粒子数量不超过 80 个
- 总粒子数不超过 200 个

### L.2 屏幕震动

**触发条件**：

- 玩家受到超过当前生命值 30% 的单次伤害
- Boss 释放技能
- 爆炸类陷阱触发
- Boss 被击败

**实现方式**：

```typescript
class CameraController {
  private shakeIntensity: number = 0;
  private shakeDuration: number = 0;
  private shakeTimer: number = 0;
  private shakeDecay: number = 0.9;  // 衰减速度

  shake(intensity: number, duration: number): void {
    this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    this.shakeDuration = Math.max(this.shakeDuration, duration);
    this.shakeTimer = this.shakeDuration;
  }

  update(deltaTime: number): void {
    if (this.shakeTimer > 0) {
      const offsetX = (Math.random() - 0.5) * this.shakeIntensity * 2 * (this.shakeTimer / this.shakeDuration);
      const offsetY = (Math.random() - 0.5) * this.shakeIntensity * 2 * (this.shakeTimer / this.shakeDuration);
      this.x += offsetX;
      this.y += offsetY;
      this.shakeTimer -= deltaTime;
      if (this.shakeTimer <= 0) {
        this.shakeIntensity = 0;
        this.shakeTimer = 0;
      }
    }
  }
}
```

---

# 第五部分：无尽模式逻辑

## 5.1 触发条件

- 玩家通关主线第10层后，在某个特定房间出现“无尽传送门”实体。
- 进入传送门后，进入无尽模式。
- 无尽模式与主线模式共享同一存档，但进度独立记录。

## 5.2 无尽模式房间生成算法

无尽模式采用 **“门控式三选一”** 结构，每层包含三个房间：

```
无尽模式单层布局：

                    ┌─────────────────────┐
                    │   入口房间           │
                    │   （传送点）         │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
    │  门 A           │ │  门 B           │ │  门 C           │
    │  ⚔️ 战斗房间    │ │  💰 宝藏房间    │ │  🚪 前进房间    │
    │  精英怪物       │ │  大量宝箱       │ │  普通怪物       │
    │  高收益         │ │  高收益         │ │  通往下一层     │
    └─────────────────┘ └─────────────────┘ └─────────────────┘
```

**三道门说明**：

| 门                    | 类型           | 内容                                                    | 风险 | 收益                     |
| :-------------------- | :------------- | :------------------------------------------------------ | :--- | :----------------------- |
| **门A（战斗）** | 精英怪物房间   | 1个精英怪物（属性=普通×1.8），击败后掉落魂晶和稀有装备 | 高   | 魂晶、稀有装备、大量经验 |
| **门B（宝藏）** | 安全的宝库房间 | 2-4个宝箱（品质随机），1个藏品                          | 无   | 金币、药水、藏品、装备   |
| **门C（前进）** | 普通房间       | 2-3个普通怪物，1个出口通往下一层                        | 低   | 常规经验/金币            |

**生成规则**：

```
单层生成步骤:
1. 生成3个房间，大小 15×15 至 25×25
2. 入口房间 → 三个门房间（线性连接，不分支）
3. 怪物属性根据无尽层数缩放:
   怪物攻击 = 基础攻击 × (1 + 无尽层数 × 0.018)
   怪物防御 = 基础防御 × (1 + 无尽层数 × 0.015)
   怪物生命 = 基础生命 × (1 + 无尽层数 × 0.025)
4. 宝箱品质随无尽层数提升:
   稀有宝箱概率 = 10% + 无尽层数 × 0.5%（上限60%）
   传说宝箱概率 = 0.5% + 无尽层数 × 0.05%（上限10%）
5. 每5层插入一个Boss房间（结构同主线Boss层）
6. 每10层插入一个商人房间（休整）
```

**无尽Boss属性公式**（每5层出现）：

```
无尽Boss攻击 = 基础Boss攻击 × (1 + 无尽层数 × 0.025)
无尽Boss防御 = 基础Boss防御 × (1 + 无尽层数 × 0.02)
无尽Boss生命 = 基础Boss生命 × (1 + 无尽层数 × 0.035)
```

**无尽Boss奖励**（相比主线Boss额外加成）：

- 经验 +50%
- 金币 +50%
- 必定掉落传说品质装备（无尽层数 ≥ 30）
- 必定掉落藏品（无尽层数 ≥ 20）

## 5.3 无尽层数与难度联动

无尽模式的难度受当前 **全局难度设置** 影响：

```
无尽模式实际难度 = 全局难度 × (1 + 无尽层数 × 0.005)
```

| 全局难度        | 无尽层数1 | 无尽层数50 | 无尽层数100 |
| :-------------- | :-------- | :--------- | :---------- |
| 摇篮曲（0.4×） | 0.4×     | 0.5×      | 0.6×       |
| 普通（1.0×）   | 1.0×     | 1.25×     | 1.5×       |
| 困难（1.3×）   | 1.3×     | 1.63×     | 1.95×      |
| 噩梦（1.7×）   | 1.7×     | 2.13×     | 2.55×      |
| 地狱（2.2×）   | 2.2×     | 2.75×     | 3.3×       |
| 炼狱（3.0×）   | 3.0×     | 3.75×     | 4.5×       |
| 天堂（4.5×）   | 4.5×     | 5.63×     | 6.75×      |

## 5.4 无尽存档

- 玩家可在无尽模式中随时退出，进度保存在存档中。
- 下次进入无尽模式时，从上次退出的层数继续。
- 无尽模式进度与主线进度互不影响，但在同一存档文件中保存。
- 无尽模式中获得的装备、金币、藏品、经验全部保留。

# 第六部分：数据存储与存档

## 6.1 存档结构

```typescript
interface SaveData {
  // 版本信息
  version: string;
  lastSaved: string;          // ISO时间戳

  // 玩家数据
  player: {
    level: number;
    exp: number;
    hp: number;
    maxHp: number;
    gold: number;
    soul: number;
    attack: number;
    defense: number;
    critRate: number;
    dodgeRate: number;
    damageBonus: number;
    statusEffects: StatusEffectInstance[];
    equipment: {
      main_hand: string | null;   // 装备ID
      off_hand: string | null;
      head: string | null;
      body: string | null;
      feet: string | null;
      accessory_1: string | null;
      accessory_2: string | null;
    };
    currentFloor: number;
    currentRoomId: string;
    playerX: number;
    playerY: number;
    currentDifficulty: Difficulty;
  };

  // 背包
  inventory: InventoryItem[];

  // 藏品
  collectibles: string[];     // 已拥有的藏品ID列表

  // 世界状态
  world: {
    rooms: {
      roomId: string;
      entities: {
        id: string;
        type: string;
        isAlive: boolean;     // 怪物
        isOpened: boolean;    // 宝箱
        isTriggered: boolean; // 事件
        isDefeated: boolean;  // Boss
        isFound: boolean;     // 收集品
        state?: any;          // 自定义状态
      }[];
    }[];
  };

  // 任务
  quests: {
    activeQuestIds: string[];
    completedQuestIds: string[];
    questProgress: Record<string, number>;  // questId → 进度值
  };

  // 成就
  achievements: {
    unlockedAchievementIds: string[];
  };

  // 图鉴
  bestiary: {
    monsterId: string;
    defeatCount: number;
    isUnlocked: boolean;
  }[];
  collectibles: {
    collectibleId: string;
    isFound: boolean;
  }[];

  // 无尽模式
  endless: {
    currentFloor: number;
    isActive: boolean;
    bestFloor: number;        // 历史最高层数
  };

  // Boss楼层进度
  bossFloors: {
    floorId: number;
    isDefeated: boolean;
    defeatedAt: string;
  }[];

  // 统计信息
  stats: {
    totalMonstersDefeated: number;
    totalBossesDefeated: number;
    totalChestsOpened: number;
    totalGoldEarned: number;
    totalSoulEarned: number;
    totalCollectiblesFound: number;
    playTimeSeconds: number;
    floorsExplored: number;
  };
}
```

## 6.2 存档操作

| 操作               | 触发时机                                       | 说明                               |
| :----------------- | :--------------------------------------------- | :--------------------------------- |
| **自动存档** | 进入新房间、完成Boss战、打开传说宝箱、切换楼层 | 每30秒自动存档一次                 |
| **手动存档** | 按 S 键                                        | 快速存档，显示“已存档”提示       |
| **读档**     | 游戏启动时                                     | 自动读取最新存档，若无则开始新游戏 |
| **存档位置** | 浏览器本地存储（`localStorage`）             | 键名：`tower_rpg_save`           |
| **导出存档** | 菜单选项                                       | 导出为JSON文件，可备份             |
| **导入存档** | 菜单选项                                       | 从JSON文件导入存档                 |

## 6.3 存档安全

```typescript
interface SaveManager {
  save(): void;
  load(): SaveData | null;
  autoSave(): void;
  exportSave(): string;        // 导出为JSON字符串
  importSave(jsonString: string): boolean;
  hasSave(): boolean;
  clearSave(): void;
  getLastSaveTime(): string | null;
  getStats(): SaveData['stats'];
  isSaveValid(saveData: any): boolean;  // 校验存档完整性
}
```

# 第七部分：编码规范与约束

## 7.1 项目结构

```
src/
├── core/
│   ├── WorldManager.ts          # 世界管理器（加载/卸载房间）
│   ├── FloorManager.ts          # 楼层管理器（楼层切换/生成）
│   ├── CameraController.ts      # 摄像机控制
│   ├── GameLoop.ts              # 主游戏循环
│   └── EventBus.ts              # 全局事件总线
│
├── entities/
│   ├── Player.ts                # 玩家实体
│   ├── Monster.ts               # 怪物实体
│   ├── Boss.ts                  # Boss实体（继承Monster）
│   ├── NPC.ts                   # NPC实体
│   ├── Item.ts                  # 物品实体
│   ├── Stair.ts                 # 楼梯实体
│   └── Chest.ts                 # 宝箱实体
│
├── systems/
│   ├── BattleSystem.ts          # 战斗系统
│   ├── StatusEffectManager.ts   # 状态效果管理
│   ├── QuestManager.ts          # 任务管理
│   ├── AchievementManager.ts    # 成就管理
│   ├── BestiaryManager.ts       # 图鉴管理
│   ├── CollectibleSystem.ts     # 藏品系统
│   ├── EventManager.ts          # 事件系统
│   ├── InventoryManager.ts      # 背包管理
│   ├── SaveManager.ts           # 存档管理
│   ├── EquipmentGenerator.ts    # 装备生成器
│   ├── ChestSystem.ts           # 宝箱系统
│   ├── DifficultySystem.ts      # 难度系统
│   ├── RoguelikeSystem.ts       # Roguelike系统
│   ├── BossSystem.ts            # Boss系统
│   └── MerchantSystem.ts        # 商人系统
│
├── ui/
│   ├── GameUI.ts                # 主UI控制器
│   ├── LeftPanel.ts             # 左栏（角色信息）
│   ├── RightPanel.ts            # 右栏（任务追踪+房间信息）
│   ├── BottomBar.ts             # 底部栏（快捷槽+功能按钮）
│   ├── InventoryPanel.ts        # 背包面板（B键）
│   ├── CharacterPanel.ts        # 角色面板（C键）
│   ├── ShopPanel.ts             # 商店面板
│   ├── QuestPanel.ts            # 任务面板（J键）
│   ├── BestiaryPanel.ts         # 图鉴面板（G键）
│   ├── CollectiblePanel.ts      # 藏品面板（H键）
│   ├── EventPanel.ts            # 事件面板
│   ├── BossWarningUI.ts         # Boss战警告
│   ├── Tooltip.ts               # 悬停悬浮窗
│   ├── Notification.ts          # 通知提示
│   └── styles/
│       ├── main.css
│       ├── panels.css
│       ├── tooltip.css
│       └── animations.css
│
├── effects/
│   ├── LightSystem.ts           # 光影渲染系统
│   └── ParticleSystem.ts        # 粒子系统
│
├── data/
│   ├── world.json               # 世界配置
│   ├── floors/                  # 楼层配置
│   │   ├── floor_1.json
│   │   └── ...
│   ├── rooms/                   # 房间地图数据
│   │   ├── room_1A.json
│   │   └── ...
│   ├── monsters.json            # 怪物基础数据
│   ├── items.json               # 物品基础数据
│   ├── itemTemplates.json       # 装备模板
│   ├── quests.json              # 任务配置
│   ├── achievements.json        # 成就配置
│   ├── statusEffects.json       # 状态效果配置
│   ├── events.json              # 事件配置
│   ├── bestiary.json            # 图鉴配置
│   ├── collectibles.json        # 藏品配置
│   ├── bossAffixes.json         # Boss词缀配置
│   └── difficultyConfig.json    # 难度配置
│
├── utils/
│   ├── MathUtils.ts             # 数学工具（随机、插值等）
│   ├── Helpers.ts               # 通用辅助函数
│   ├── IdGenerator.ts           # ID生成器
│   └── Logger.ts                # 日志工具
│
├── types/
│   └── index.ts                 # 所有TypeScript类型/接口定义
│
├── main.ts                      # 游戏入口
└── style.css                    # 全局样式
```

## 7.2 命名规范

| 类型          | 规范                        | 示例                                        |
| :------------ | :-------------------------- | :------------------------------------------ |
| 类名          | 大驼峰（PascalCase）        | `WorldManager`, `BattleSystem`          |
| 方法名/变量名 | 小驼峰（camelCase）         | `loadWorld`, `switchFloor`, `playerX` |
| 常量          | 全大写下划线（UPPER_SNAKE） | `MAX_INVENTORY_SIZE`, `BASE_DAMAGE`     |
| 接口          | 大驼峰（PascalCase）        | `StatusEffect`, `Quest`, `Player`     |
| 枚举          | 大驼峰（PascalCase）        | `Quality`, `Difficulty`                 |
| 枚举值        | 全小写                      | `common`, `epic`, `normal`, `haven` |
| 私有属性      | 下划线前缀（可选）          | `_instance`, `_state`                   |
| 文件名        | 大驼峰（PascalCase）        | `WorldManager.ts`, `BattleSystem.ts`    |

## 7.3 单例模式规范

所有核心管理器使用单例模式：

```typescript
class WorldManager {
  private static instance: WorldManager;
  private constructor() {}

  static getInstance(): WorldManager {
    if (!WorldManager.instance) {
      WorldManager.instance = new WorldManager();
    }
    return WorldManager.instance;
  }

  // 实例方法...
}
```

**例外**：实体类（`Player`、`Monster`、`Boss`等）不使用单例，而是通过工厂函数或构造函数创建实例。

## 7.4 事件通信规范

使用全局事件总线（EventBus）进行模块间通信，**禁止模块之间直接调用方法**（除管理器内部）。

```typescript
// 触发事件
EventBus.emit('monsterDefeated', {
  monsterId: 'slime',
  expGained: 50,
  goldGained: 10,
  position: { x: 10, y: 20 }
});

// 监听事件
EventBus.on('monsterDefeated', (data) => {
  // 更新任务进度、图鉴、统计数据等
  QuestManager.getInstance().onMonsterDefeated(data);
  BestiaryManager.getInstance().onMonsterDefeated(data);
});
```

**预定义事件列表**：

| 事件名                   | 数据载荷                                                          | 说明           |
| :----------------------- | :---------------------------------------------------------------- | :------------- |
| `monsterDefeated`      | `{ monsterId, expGained, goldGained, position }`                | 普通怪物被击败 |
| `bossDefeated`         | `{ bossId, floor, expGained, goldGained, soulGained }`          | Boss被击败     |
| `bossEntered`          | `{ bossId, floor, bossName }`                                   | 进入Boss房间   |
| `itemCollected`        | `{ itemId, quantity, position }`                                | 物品被拾取     |
| `collectibleCollected` | `{ collectibleId, name, position }`                             | 藏品被拾取     |
| `roomEntered`          | `{ roomId, floor, depth }`                                      | 进入新房间     |
| `floorChanged`         | `{ fromFloor, toFloor, viaStair }`                              | 楼层切换       |
| `difficultyChanged`    | `{ from, to }`                                                  | 难度变更       |
| `levelUp`              | `{ oldLevel, newLevel, gainedAttack, gainedDefense, gainedHp }` | 玩家升级       |
| `statusApplied`        | `{ target, effectId, stacks, duration }`                        | 状态效果被施加 |
| `statusRemoved`        | `{ target, effectId }`                                          | 状态效果被移除 |
| `questCompleted`       | `{ questId, rewards }`                                          | 任务完成       |
| `questUpdated`         | `{ questId, objectiveIndex, progress, total }`                  | 任务进度更新   |
| `achievementUnlocked`  | `{ achievementId, name, reward }`                               | 成就解锁       |
| `goldChanged`          | `{ oldValue, newValue, delta }`                                 | 金币变化       |
| `soulChanged`          | `{ oldValue, newValue, delta }`                                 | 魂晶变化       |
| `chestOpened`          | `{ chestId, tier, rewards }`                                    | 宝箱被打开     |
| `merchantTrade`        | `{ itemId, price, type }`                                       | 商人交易       |
| `equipmentEquipped`    | `{ slot, equipmentId, oldId }`                                  | 装备穿戴       |
| `gamePaused`           | `{}`                                                            | 游戏暂停       |
| `gameResumed`          | `{}`                                                            | 游戏恢复       |

## 7.5 错误处理规范

```typescript
// 使用自定义错误类型
class GameError extends Error {
  constructor(
    public code: string,
    message: string,
    public recoverable: boolean = false
  ) {
    super(message);
    this.name = 'GameError';
  }
}

// 错误处理
try {
  // 操作...
} catch (error) {
  if (error instanceof GameError) {
    Logger.error(`[${error.code}] ${error.message}`);
    if (!error.recoverable) {
      // 显示错误弹窗，引导玩家重新加载
      UI.showErrorDialog(error.message);
    }
  } else {
    Logger.error('Unexpected error:', error);
  }
}
```

## 7.6 性能约束

| 指标         | 限制    | 说明                          |
| :----------- | :------ | :---------------------------- |
| 帧率         | 60 FPS  | 使用`requestAnimationFrame` |
| 最大粒子数   | 200     | 超过时自动清理最早的粒子      |
| 最大光源数   | 5       | 超过时按优先级取舍            |
| 存档大小     | < 1MB   | 超过时压缩数据                |
| 地图加载时间 | < 100ms | 异步加载，避免卡顿            |
| 内存占用     | < 200MB | 及时清理未使用的资源          |

# 第八部分：AI开发指令模板

## 8.1 各阶段开发指令

### Phase 1 - 核心架构

```
请实现魔塔RPG的核心架构。按以下顺序生成代码：

1. types/index.ts - 定义所有接口（Player, Room, Floor, Quest, Stair, Chest, Boss, Equipment, Quality, Affix, Collectible, Difficulty等）
2. core/EventBus.ts - 全局事件总线
3. core/WorldManager.ts - 世界管理器，加载world.json，提供getCurrentRoom/switchRoom
4. core/FloorManager.ts - 楼层管理器，管理楼层切换和房间加载
5. core/CameraController.ts - 摄像机控制，支持边界锁定、切换房间、shake和fade方法
6. entities/Player.ts - 玩家类，包含所有属性和移动逻辑
7. entities/Stair.ts - 楼梯实体
8. entities/Chest.ts - 宝箱实体
9. entities/Boss.ts - Boss实体（继承Monster）
10. systems/BattleSystem.ts - 战斗系统，实现战斗公式和回合流程
11. systems/DifficultySystem.ts - 难度系统，包含7个难度等级
12. utils/IdGenerator.ts - ID生成器
13. main.ts - 游戏入口，初始化所有管理器并启动游戏循环
```

### Phase 2 - 状态效果系统

```
请实现状态效果系统。

1. 在types中完善StatusEffect相关接口
2. 实现systems/StatusEffectManager.ts
3. 预置6种效果（中毒、狂暴、护盾、冰冻、灼烧、急速）
4. 集成到BattleSystem中，在战斗循环中正确触发效果
5. 提供效果配置数据在data/statusEffects.json
6. 实现效果UI显示（左栏状态区域）
```

### Phase 3 - 任务与成就系统

```
请实现任务与成就系统。

1. 实现systems/QuestManager.ts
2. 实现systems/AchievementManager.ts
3. 监听EventBus事件，自动更新任务进度
4. 任务完成时发放奖励
5. 成就解锁时弹窗提示
6. 提供示例任务和成就的JSON配置（data/quests.json, data/achievements.json）
7. 支持任务追踪功能
```

### Phase 4 - 图鉴与收集系统

```
请实现图鉴与收集系统。

1. 实现systems/BestiaryManager.ts
2. 实现systems/CollectibleManager.ts
3. 击败怪物时更新图鉴进度，达到阈值解锁详细信息
4. 拾取收集品时更新进度，系列完成时发放奖励
5. 提供图鉴数据配置
```

### Phase 5 - 动态事件系统

```
请实现动态事件系统。

1. 实现systems/EventManager.ts
2. 实现ui/EventPanel.ts - 事件选择UI
3. 支持on_enter/on_step/on_interact/on_defeat_all四种触发类型
4. 支持所有事件效果类型（伤害、加物品、刷怪、加藏品等）
5. 事件触发时暂停游戏，显示选项，等待玩家选择
6. 提供事件配置数据在data/events.json
```

### Phase 6 - 宝箱与装备品质系统

```
请实现宝箱系统和装备品质系统。

【宝箱系统】
1. systems/ChestSystem.ts - 宝箱打开逻辑
2. 根据楼层和深度生成奖励
3. 支持5种宝箱类型（木质/铁质/黄金/暗金/传说）
4. 宝箱可带解锁条件

【装备品质系统】
1. systems/EquipmentGenerator.ts - 装备生成核心
2. data/itemTemplates.json - 基础装备模板
3. 品质系统（普通/优秀/稀有/史诗/传说/神话）
4. 词条系统（13种词条，按品质和等级决定数量）
5. 装备等级计算（玩家等级×0.5 + 楼层×1.4 + 深度×0.6）
6. 装备名称生成（前缀+基础名+后缀）
7. 回收价和商店价计算
```

### Phase 7 - 藏品系统

```
请实现藏品系统。

1. data/collectibles.json - 藏品配置数据（20+种藏品）
2. systems/CollectibleSystem.ts - 藏品核心逻辑
3. 藏品获取渠道（宝箱、怪物、商人、事件、Boss）
4. 藏品效果应用到玩家属性（攻击/防御/生命/暴击/闪避/抗性等）
5. ui/CollectiblePanel.ts - 藏品UI面板（H键打开）
6. 效果类型：属性加成、战斗特效、资源加成、特殊效果
7. 藏品唯一性保证（同类只能持有一个）
```

### Phase 8 - Boss系统

```
请实现Boss系统。

1. systems/BossSystem.ts - Boss核心逻辑
2. Boss楼层生成（3个房间固定结构：休整→Boss战→奖励）
3. Boss数值检测（综合战力检查，防速通）
4. Boss词缀系统（随机0-2个词缀，天堂难度下强制2个）
5. data/bossAffixes.json - Boss词缀配置（12种）
6. Boss击败奖励（大量经验/金币/魂晶/装备/藏品）
7. ui/BossWarningUI.ts - Boss战前警告界面
8. Boss特殊属性（比普通怪物强2-4倍基础值）
```

### Phase 9 - Roguelike系统

```
请实现Roguelike系统。

1. systems/RoguelikeSystem.ts - 随机生成核心
2. 每层房间布局随机生成（程序化生成算法）
3. 怪物配置随机（从怪物池筛选）
4. 宝箱品质随机Roll
5. 事件随机触发
6. Boss词缀随机附加
7. 商人库存随机生成
8. 使用种子确保可重现性
9. 地板效果随机（毒雾/治愈/加速等）
```

### Phase 10 - 商人系统

```
请实现商人系统。

1. systems/MerchantSystem.ts - 商人核心逻辑
2. 商人库存生成（使用Roll，随楼层提升品质）
3. 回收价计算（品质主导，等级和词条为辅）
4. 魂晶商品（稀有装备和藏品）
5. ui/ShopPanel.ts - 商店UI（双栏：库存 vs 背包）
6. 支持金币和魂晶两种货币交易
```

### Phase 11 - 难度系统

```
请实现难度系统（已在Phase 1中建立基础，此处完善）。

1. 完善systems/DifficultySystem.ts
2. 7个难度等级：摇篮曲、普通、困难、噩梦、地狱、炼狱、天堂
3. 摇篮曲为超级低难度（0.4×怪物，1.5×收益）
4. 天堂为100层解锁的超级高难度（5×怪物，3.5×收益）
5. 难度切换UI
6. 难度影响：怪物倍率、经验倍率、金币倍率、装备品质修正、藏品掉落率、Boss额外强度
7. 难度解锁条件检查
8. 难度切换时重新生成当前楼层
```

### Phase 12 - 无尽模式

```
请实现无尽模式。

1. 触发条件（通关主线第10层）
2. 门控式三选一生成算法
3. 无尽层数与难度联动
4. 无尽Boss（每5层出现）
5. 无尽模式存档（进度独立记录）
6. 历史最高层数记录
7. 无尽模式退出和继续
```

### Phase 13 - UI系统（完整实现）

```
请实现所有UI系统。

【布局】
1. 左中右三栏布局（CSS Flexbox）
2. ui/LeftPanel.ts - 左栏（角色信息：头像、等级、血量条、属性、货币、状态、藏品进度）
3. ui/RightPanel.ts - 右栏（任务追踪、房间信息含楼层/深度、敌人预警）
4. ui/BottomBar.ts - 底部快捷栏（1-4物品槽 + 功能按钮）

【覆盖层面板】
5. ui/InventoryPanel.ts - 背包面板（B键），网格布局，支持物品使用/丢弃
6. ui/CharacterPanel.ts - 角色面板（C键），显示详细属性和装备栏
7. ui/ShopPanel.ts - 商店面板
8. ui/QuestPanel.ts - 任务面板（J键），进行中/已完成标签
9. ui/BestiaryPanel.ts - 图鉴面板（G键），怪物/收集品标签
10. ui/CollectiblePanel.ts - 藏品面板（H键），按品质/类型筛选
11. ui/EventPanel.ts - 事件面板

【交互】
12. ui/Tooltip.ts - 悬浮窗（延迟200ms显示，离开300ms消失）
13. ui/BossWarningUI.ts - Boss战警告界面
14. ui/Notification.ts - 通知系统

【样式】
15. 遵循设计风格规范（暗色调地下城主题）
16. CSS变量统一管理色彩方案
17. 响应式支持
```

### Phase 14 - 粒子与震动

```
请实现视觉增强效果。

1. effects/ParticleSystem.ts - 粒子系统
   - 飘字动画（"+50 Gold"）
   - 暴击特效（"暴击！"大字）
   - 升级特效（金色光环）
   - Boss胜利特效（金色烟花）
   - 藏品拾取特效（紫色星光）
2. 在CameraController中集成shake方法
3. 在BattleSystem中触发震动（大伤害时）
4. 在ChestSystem中触发粒子（宝箱打开时）
5. 在CollectibleSystem中触发特效（藏品拾取时）
```

### Phase 15 - 数据驱动完善

```
请完善所有数据配置。

1. data/monsters.json - 完整怪物数据（10+种）
2. data/items.json - 完整物品数据（药水、钥匙等）
3. data/itemTemplates.json - 完整装备模板（武器、防具、饰品等）
4. data/quests.json - 完整任务数据（主线+支线）
5. data/achievements.json - 完整成就数据
6. data/collectibles.json - 完整藏品数据（20+种）
7. data/bossAffixes.json - 完整Boss词缀数据（12种）
8. data/events.json - 完整事件数据（20+个）
9. data/difficultyConfig.json - 完整难度配置（7档）
10. data/statusEffects.json - 完整状态效果配置
```

## 8.2 通用约束

- 所有代码使用TypeScript，严格类型检查（`strict: true`）
- 每个模块必须包含完整的 `import/export` 语句
- 不修改已有的核心架构代码（WorldManager、CameraController等）
- 新功能通过EventBus与现有模块通信
- 所有游戏数据从JSON加载，不硬编码
- UI代码遵循设计风格规范（暗色调、现代简洁、地下城风格）
- 光影渲染使用Canvas实现，不需要WebGL
- 地图设计必须包含至少2-3条分支路径
- 教学层必须易于上手，怪物属性极低
- 难度系统在10层后解锁
- 天堂难度在100层后解锁
- 游戏核心目标是不断探索更深楼层

# 第九部分：给AI Agent的初始提示词

**请将以下内容作为与AI Agent对话的第一条消息发送：**

---

```
我将开发一款魔塔RPG游戏，请根据以下《魔塔RPG技术规格书》逐步实现。

这是一份完整的技术规格文档，涵盖了从核心架构到扩展模块的全部设计。文档结构如下：

第一部分：项目概述与技术选型（TypeScript + Vite + Canvas）
第二部分：核心架构（世界地图、玩家系统、战斗系统、敌人数值振幅、Boss楼层、教学层、楼梯系统、摄像机）
第三部分：扩展模块（状态效果、任务、图鉴、事件、宝箱、装备品质、商人、藏品、难度、Roguelike、房间生成、视觉特效）
第四部分：UI系统（左中右三栏、悬浮窗、光影渲染、所有覆盖层面板、Boss警告）
第五部分：无尽模式逻辑（门控式三选一、无尽Boss、层数联动）
第六部分：数据存储与存档（完整存档结构、自动存档）
第七部分：编码规范与约束（项目结构、命名规范、事件通信、性能约束）
第八部分：AI开发指令模板（15个Phase，从核心到完整功能）
第九部分：初始提示词（本消息）

本项目的核心设计要点：
1. 敌人属性由「楼层系数 × 深度倍率 × 难度系数」三维度共同决定
2. 每5层出现Boss楼层（3房间结构：休整→Boss战→奖励）
3. Boss战前检测玩家综合战力，防止速通
4. 7个难度等级：摇篮曲（超低）、普通、困难、噩梦、地狱、炼狱、天堂（100层解锁）
5. 藏品系统提供永久被动效果（属性/战斗/资源/特殊四类，20+种）
6. Roguelike属性：楼层布局/怪物/宝箱/事件/商人均随机生成
7. Boss词缀系统：每次Boss随机附加0-2个词缀（天堂难度下强制2个）
8. 装备三维模型：等级 + 品质（6档） + 词条（13种）
9. 无尽模式：门控式三选一，每5层Boss，难度与全局联动
10. 核心目标：不断探索更深楼层

请从 Phase 1（核心架构）开始实现。遵循以下约束：
1. 所有代码使用TypeScript，严格类型检查
2. 数据与代码分离，所有配置从JSON加载
3. 使用单例模式管理所有核心管理器
4. 模块间通过EventBus通信，避免直接耦合
5. 每次输出一个完整模块的代码，并附带简要说明

请先输出 Phase 1 的实现计划，然后开始生成代码。
```

---

## 第十部分：用词点缀原则（宗教神秘学作为氛围调料）

### 10.1 核心原则：RPG主体，神秘学点缀

> **“看得懂”优先于“显得高级”。** 玩家不需要在属性面板上猜半天才知道“圣恩值”就是血量。

| 分层                            | 内容范围                                                                    | 用词风格                               | 占比  |
| :------------------------------ | :-------------------------------------------------------------------------- | :------------------------------------- | :---- |
| **系统层（永久固定）**    | 属性名称（攻击/防御/生命/暴击）、品质名称（普通/稀有/史诗）、难度名称、货币 | **保持RPG直白术语**，不替换      | 约80% |
| **内容层（可变/叙事性）** | Boss名称、藏品名称/描述、成就名称、装备命名、特殊事件文案、UI彩蛋           | **适度植入神秘学词汇**，点缀氛围 | 约20% |

### 10.2 系统层用词（保持RPG直白，不替换）

| 系统项                                       | 用词                                                       | 说明                                   |
| :------------------------------------------- | :--------------------------------------------------------- | :------------------------------------- |
| 生命值                                       | **生命值** / HP                                      | 不改，直白                             |
| 攻击力                                       | **攻击力**                                           | 不改，直白                             |
| 防御力                                       | **防御力**                                           | 不改，直白                             |
| 暴击率                                       | **暴击率**                                           | 不改，直白                             |
| 闪避率                                       | **闪避率**                                           | 不改，直白                             |
| 伤害加成                                     | **伤害加成**                                         | 不改，直白                             |
| 经验值                                       | **经验值**                                           | 不改，直白                             |
| 金币 / 魂晶                                  | **金币 / 魂晶**                                      | 直白，魂晶作为稀有货币名可保留         |
| 等级                                         | **等级**                                             | 不改                                   |
| 品质（普通/优秀/稀有/史诗/传说）             | **普通 / 优秀 / 稀有 / 史诗 / 传说**                 | 不改，RPG通用                          |
| 难度（摇篮曲/普通/困难/噩梦/地狱/炼狱/天堂） | **摇篮曲 / 普通 / 困难 / 噩梦 / 地狱 / 炼狱 / 天堂** | 不改，“摇篮曲”和“天堂”本身已有风味 |
| 普通怪物 / 精英 / Boss                       | **怪物 / 精英 / Boss**                               | 不改                                   |
| 任务                                         | **任务**                                             | 不改                                   |
| 成就                                         | **成就**                                             | 不改                                   |
| 藏品                                         | **藏品**                                             | 不改                                   |
| 图鉴                                         | **图鉴**                                             | 不改                                   |

### 10.3 内容层点缀（神秘学词汇植入范围）

以下场景/对象使用神秘学风格词汇，其余保持RPG直白：

#### 10.3.1 Boss 名称

格式：`[神秘学前缀] + [核心名]`

| 楼层   | Boss名称                    | 词汇来源 |
| :----- | :-------------------------- | :------- |
| 第5层  | **昔年天使 耶利哥**   | 圣经地名 |
| 第10层 | **大罪司教 别西卜**   | 堕天使   |
| 第15层 | **圣骸看守者 亚巴顿** | 深渊天使 |
| 第20层 | **真理裁决官 加百列** | 天使长   |
| 第25层 | **终末使徒 路西法**   | 堕天之王 |
| 第30层 | **虚空凝视者 利维坦** | 深渊巨兽 |
| 第35层 | **原初罪业 摩洛克**   | 古代神祇 |
| 第40层 | **圣杯腐蚀者 该隐**   | 圣经人物 |
| 第45层 | **天启第四骑 苍白**   | 启示录   |
| 第50层 | **永恒终末 巴德尔**   | 北欧神祇 |

#### 10.3.2 藏品名称

格式：`[核心词] + [后缀]` 或 `[前缀] + [核心词]`

| 藏品ID                  | 名称                 | 点缀程度 |
| :---------------------- | :------------------- | :------- |
| `collect_atk_1`       | **力量印记**   | 轻度     |
| `collect_atk_2`       | **力量圣印**   | 轻度     |
| `collect_def_1`       | **守护印记**   | 轻度     |
| `collect_def_2`       | **守护圣印**   | 轻度     |
| `collect_hp_1`        | **生命印记**   | 轻度     |
| `collect_hp_2`        | **生命圣印**   | 轻度     |
| `collect_crit`        | **真知之瞳**   | 中度     |
| `collect_dodge`       | **虚相步法**   | 中度     |
| `collect_lifesteal`   | **血之契约**   | 中度     |
| `collect_thorns`      | **荆棘之心**   | 中度     |
| `collect_gold`        | **贪婪之手**   | 中度     |
| `collect_exp`         | **智慧之书**   | 中度     |
| `collect_regen`       | **生命源泉**   | 中度     |
| `collect_chest_up`    | **命运之币**   | 中度     |
| `collect_boss_damage` | **屠龙者之印** | 中度     |
| `collect_auto_heal`   | **愈合之心**   | 轻度     |

> 所有藏品描述保持叙事性，植入神秘学气息，例如：“传说中，此物曾属于某位朝圣者，他在深渊的边缘窥见了真理的一角。”——但主体仍是清晰的效果说明。

#### 10.3.3 装备词缀（仅名称，数值保持直白）

| 词缀类型 | 原味      | 神秘学点缀         |
| :------- | :-------- | :----------------- |
| 攻击词条 | 攻击力+   | **裁决之力** |
| 防御词条 | 防御力+   | **圣盾护佑** |
| 生命词条 | 生命值+   | **生命圣印** |
| 暴击词条 | 暴击率+   | **天启预兆** |
| 闪避词条 | 闪避率+   | **恩典虚相** |
| 火焰伤害 | 火焰伤害+ | **业火之息** |
| 生命偷取 | 生命偷取+ | **血契噬命** |

> 装备最终名称格式：`[词缀] + [基础名] + [品质]`，例如：**裁决铁剑（优秀）**、**业火之息长弓（史诗）**。词缀是内容层点缀，但数值标签仍保持直白显示。

#### 10.3.4 成就名称（仅称号部分点缀）

| 成就ID                  | 原味       | 神秘学点缀           |
| :---------------------- | :--------- | :------------------- |
| `ach_first_blood`     | 初战告捷   | **初罪**       |
| `ach_level_10`        | 十级达人   | **灵阶·十**   |
| `ach_level_50`        | 五十级传奇 | **圣阶·五十** |
| `ach_boss_1`          | 首杀Boss   | **使徒陨落**   |
| `ach_boss_10`         | 十杀Boss   | **使徒·十诫** |
| `ach_floor_100`       | 百层探索者 | **天阶百重**   |
| `ach_collect_10`      | 十件藏品   | **圣物·十诫** |
| `ach_legendary_equip` | 传说装备   | **圣典载录**   |
| `ach_haven_unlock`    | 解锁天堂   | **圣座之巅**   |

> 成就描述保持RPG直白：“击败第5层的Boss”，但称号本身带神秘学色彩。

#### 10.3.5 特殊场景UI文案（彩蛋级点缀）

以下场景出现神秘学+网络梗混搭的文案，作为氛围调味：

| 场景         | 文案                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| 进入Boss房   | **“你已踏入使徒的圣所。前方，是裁决，是试炼——也是……更好的掉落。”**       |
| 战力不足提示 | **“圣座低语：你的灵阶尚未触及此地的门槛。建议变强后再来，或者……赌一把。”** |
| 击败Boss     | **“使徒陨落。你站在残骸中，喘了口气。”**                                     |
| 死亡         | **“你归尘了。安息……或再冲一次。”**                                         |
| 升级         | **“灵阶突破！你感觉力量涌了上来。”**                                         |
| 拾取藏品     | **“圣物显现。你捡到了一件……好东西。”**                                     |
| 打开传说宝箱 | **“封印开启。圣光之下，一件神赐之物静静躺着。”**                             |
| 存档成功     | **“已铭刻。进度刻在了圣典里。”**                                             |
| 解锁天堂难度 | **“圣座之巅为你敞开。准备好面对真正的试炼了么？”**                           |
| 进入摇篮曲   | **“摇篮曲模式。怪物在摸鱼，你在散步。享受。”**                               |
| 进入无尽模式 | **“你踏入了深渊回廊。没有终点，只有更深的黑暗与更好的装备。”**               |

### 10.4 应用清单（AI开发时参考）

| 内容类型                                         | 用词风格                                            | 是否需要神秘学点缀                        |
| :----------------------------------------------- | :-------------------------------------------------- | :---------------------------------------- |
| 属性面板（攻击/防御/生命等）                     | 直白RPG术语                                         | ❌ 否                                     |
| 品质名称（普通/稀有/史诗/传说）                  | 直白RPG术语                                         | ❌ 否                                     |
| 难度名称（摇篮曲/普通/困难/噩梦/地狱/炼狱/天堂） | 直白RPG术语                                         | ❌ 否（但“摇篮曲”“天堂”本身已含风味） |
| 怪物名称（普通/精英）                            | 直白RPG术语                                         | ❌ 否                                     |
| Boss名称                                         | 神秘学前缀+核心名                                   | ✅ 是                                     |
| 藏品名称                                         | 核心词+圣印/印记/契约/之心等后缀                    | ✅ 轻度-中度                              |
| 装备词缀                                         | 原味词缀名+神秘学别名（别名用于显示，数值保持直白） | ✅ 是                                     |
| 成就称号                                         | 原味+RPG直白描述                                    | ✅ 轻度（仅称号）                         |
| 场景UI文案                                       | 直白为主，特定场景点缀神秘学+微梗                   | ✅ 彩蛋级                                 |
| 任务描述                                         | 直白RPG叙事                                         | ❌ 否                                     |
| 图鉴描述                                         | 直白叙事                                            | ❌ 否                                     |
| NPC对话                                          | 直白+少量神秘学风味                                 | ✅ 轻度                                   |

### 10.5 总结：用词坐标图

```
神秘学浓度
    ↑
    │  ● Boss名称
    │  ● 装备词缀别名
    │  ● 成就称号
    │  ● 藏品名称
    │  ● 特殊UI文案（彩蛋）
    │  ● NPC对话（轻度）
    │
    │  ● 难度名称（摇篮曲/天堂自带）
    │
    │  ● 属性名称（攻击/防御/生命）
    │  ● 品质名称（普通/稀有/史诗）
    │  ● 任务/图鉴描述
    │  ● 常规UI文案
    └──────────────────────────────────────→
    直白                        神秘学点缀
    RPG主体                      氛围调料
```

---

“在完成所有功能代码后，请根据 **第十部分·用词点缀原则** ，更新以下配置文件的显示名称和描述文案：`bossAffixes.json`、`collectibles.json`、`achievements.json`、`itemTemplates.json`中的`affixName`字段。保持数据结构不变，只改显示用的字符串。”

# 附录：快速参考表

## 难度速查表

| 难度   | 解锁楼层 | 怪物倍率 | 经验倍率 | 金币倍率 | 装备品质修正 |
| :----- | :------- | :------- | :------- | :------- | :----------- |
| 摇篮曲 | 默认     | 0.4×    | 1.5×    | 1.5×    | +2级         |
| 普通   | 默认     | 1.0×    | 1.0×    | 1.0×    | 0            |
| 困难   | 默认     | 1.3×    | 1.3×    | 1.4×    | +2级         |
| 噩梦   | 15       | 1.7×    | 1.6×    | 1.8×    | +3级         |
| 地狱   | 20       | 2.2×    | 2.0×    | 2.2×    | +4级         |
| 炼狱   | 30       | 3.0×    | 2.5×    | 3.0×    | +5级         |
| 天堂   | 100      | 5×      | 3.5×    | 3.5×    | +10级        |

## 装备品质速查表

| 品质 | 颜色 | 词条数 | 属性倍率 | 回收价倍率 |
| :--- | :--- | :----- | :------- | :--------- |
| 普通 | 灰色 | 0      | 1.0×    | 1.0×      |
| 优秀 | 蓝色 | 1      | 1.3×    | 2.0×      |
| 稀有 | 紫色 | 2      | 1.7×    | 4.0×      |
| 史诗 | 金色 | 3      | 2.3×    | 8.0×      |
| 传说 | 橙红 | 4-5    | 3.2×    | 16.0×     |
| 神话 | 彩虹 | 6-7    | 4.5×    | 30.0×     |

## 快捷键速查表

| 按键           | 功能               |
| :------------- | :----------------- |
| 方向键 / WASD  | 移动角色           |
| ↑（在楼梯上） | 上楼梯             |
| ↓（在楼梯上） | 下楼梯             |
| B              | 打开/关闭背包      |
| C              | 打开/关闭角色面板  |
| J              | 打开/关闭任务面板  |
| G              | 打开/关闭图鉴面板  |
| H              | 打开/关闭藏品面板  |
| S              | 快速存档           |
| Esc            | 关闭当前面板       |
| 1-4            | 使用快捷栏对应物品 |
| 空格 / Enter   | 确认/交互          |
| P              | 暂停游戏           |

---

## 预制地图格式（开发中）

手工设计固定地图用，字符图例（每字符一格）：

| 字符    | 含义                         |
| :------ | :--------------------------- |
| 0 / 空格 | 空地（可通行）               |
| 1       | 墙壁                         |
| 2       | 敌人（按楼层权重随机普通怪） |
| 3       | 精英怪                       |
| 4       | 宝箱                         |
| 5       | 商人                         |
| S       | 玩家入口（可省略）           |
| B       | Boss                         |
| D       | 通往下一层的楼梯             |
| 其他    | 按墙壁处理（附警告）         |

要点：房间用 `PrefabRoomDef` 矩形标注；**只有被空地实际连通的房间才生成连接**——相邻但无通道的房间不会被误连（连通性由网格 BFS 实测）。实现见 `src/map/PrefabMap.ts`；控制台可用 `__motaDebug.loadPrefab(def)` 载入试玩；示例测试：`node scripts/run-headless.mjs src/test/prefabTest.ts`。

**文档结束**
