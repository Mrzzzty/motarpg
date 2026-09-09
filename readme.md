# 魔塔RPG · 无尽之塔

一座「无尽向下」的魔塔 Roguelike。基于 **Three.js 的「3 渲 2」WebGL** 渲染（3D 场景 + 2D 纸片人精灵），数据驱动、模块化系统。

- 程序化生成楼层 / 房间 / 走廊，每次冒险布局不同
- 自动回合制战斗（暴击 / 闪避 / 词条 / 损耗预测 / 残血自动喝药）
- 装备系统：7 档品质、12 种词条，铁匠重铸 / 锤炼 / 淬火
- 经济与 NPC：商人、女巫、铁匠、治疗泉、钥匙
- 任务 / 图鉴 / 宝箱 / 动态事件 / 成就 / 新手引导
- 主角精灵帧动画（idle / walk / attack / hurt / death）
- 视觉增强：原生光照阴影、Bloom、暗角、丁达尔光锥、星空、屏幕震动、墙体遮挡虚化
- 小地图 + 多档存档（到达新层自动 / 手动）

## 技术栈

| 项目 | 选型 |
| :--- | :--- |
| 语言 | TypeScript 5 |
| 构建 | Vite 5 |
| 渲染 | Three.js 0.185（3 渲 2 WebGL） |
| UI | 原生 HTML + CSS |
| 桌面端 | Electron 44 |
| 数据 | 11 个 JSON 配置（`src/data/`） |

## 快速开始

### 环境要求
- Node.js 18+

### 安装与运行

```bash
npm install          # 安装依赖
npm run dev          # 启动 Web 开发服务器
npm run build        # 类型检查 + 生产构建
npm run preview      # 预览构建产物
npm run electron:dev # 桌面版（需先 build）
```

> Windows 用户可直接双击根目录批处理：`启动游戏.bat`、`启动桌面版.bat`、`桌面版开发模式.bat`、`打包游戏.bat`、`玩发布版.bat`。

## 操作说明

- **鼠标点击地面**：寻路移动
- **触碰怪物 / NPC / 宝箱**：自动交互；战斗为一次性结算 + 日志面板
- **K**：手动存档
- **调试钩子**：浏览器控制台 `__motaDebug`（player / world / camera / battle / quest / loadPrefab …）

## 项目结构

```
src/
  core/      核心：主循环、输入、全局状态、事件总线、数据管理、单例
  data/      11 个游戏数值 JSON 配置
  render/    纹理生成、精灵图集、投影
  effects/   Three.js 渲染器、粒子、后期处理、纹理
  entities/  玩家 / 实体
  map/       楼层 / 路径 / 房间 / 走廊 / 内容生成、预制地图
  systems/   战斗 / 任务 / 图鉴 / 宝箱 / 商人 / 成就 / 引导 / 存档
  ui/        HTML/CSS 面板与对话框
  utils/     数学 / 工具
  types/     全局类型与事件映射
```

## 开发说明

- **数据驱动**：数值集中在 `src/data/*.json`，调参无需改动逻辑。
- **事件通信**：强类型 `EventBus`（约 35 个事件）。
- **单例管理器**：核心模块通过 `Xxx.getInstance()` 访问。
- **美术资源**：已接入主角图集 `public/frames64.png` 与 5 档药水瓶 `public/img/p_*.png`；其余实体（怪物 / 宝箱 / NPC / 装饰）仍为程序化占位。

## 文档

- [魔塔RPG_整合设计文档.md](./魔塔RPG_整合设计文档.md) — 唯一总文档，含实现进度标注
- [docs/美术素材提示词.md](./docs/美术素材提示词.md) — 美术资源生成提示词
- [docs/3D渲染2D风格输出_技术方案.md](./docs/3D渲染2D风格输出_技术方案.md) — 3 渲 2 技术方案
- [docs/技术规格书_v1_AI版.md](./docs/技术规格书_v1_AI版.md) — 早期 v1 技术规格书（历史参考）
