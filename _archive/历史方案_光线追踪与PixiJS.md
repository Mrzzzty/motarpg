# 历史方案存档：早期光线追踪 与 PixiJS 迁移

> **状态：** ⏭ 已作废（仅作历史记录，**请勿据此编码**）｜**归档时间：** 2026-09-10
> **来源：** `docs/已完成.md` 的「早期光线追踪设计方案」与「第十五部分：渲染引擎迁移 PixiJS」；
> 其中光线追踪全文与 `想法.md` 中原有副本完全重复（该副本同步删除，仅保留本档一份）。
> **路线演进：** 阶段 0「CPU 2D 光线追踪」→ PixiJS → **Three.js（现行，见 `docs/已完成.md` §16）**。

---

# 早期光线追踪设计方案（来自想法.md）⏭
# 光线追踪系统设计文档（完整版）

> **版本：** v1.0 | **状态：** 已确定，纳入开发范围


## 一、系统概述

### 1.1 技术定位

本系统实现 **2D 光线投射（2D Ray Casting）** 算法，作为物理光线追踪在正交投影游戏空间中的近似实现。

**核心机制：** 从光源原点向圆周方向发射采样射线，对每条射线执行碰撞检测，根据碰撞结果构建光照多边形，生成带有硬阴影边界的动态光照纹理。

### 1.2 设计目标

| 指标 | 目标值 | 说明 |
| :--- | :--- | :--- |
| 光照真实性 | 高 | 光线被墙壁物理遮挡，产生精确阴影边界 |
| 渲染性能 | 60 FPS | 标准配置下（72条射线）稳定运行 |
| 可扩展性 | 高 | 支持多光源，支持动态添加/移除光源 |
| 可调节性 | 高 | 通过性能配置系统适配不同硬件 |
| 缓存效率 | >70% | 静态光源命中率，减少重复计算 |


## 二、核心算法规范

### 2.1 光线投射算法

```
输入：
  - origin: Vec2（光源位置）
  - rayCount: int（采样射线数量）
  - maxDistance: float（最大光照半径）
  - obstacles: AABB[]（障碍物列表，即墙壁的轴对齐包围盒）

输出：
  - hitPoints: Vec2[]（每个射线与障碍物的碰撞点集合）

算法流程：
  for each angle in [0, 2π) step (2π / rayCount):
    direction = Vec2(cos(angle), sin(angle))
    for distance = 0 to maxDistance step stepSize:
      testPoint = origin + direction × distance
      if isInsideAnyAABB(testPoint, obstacles):
        hitPoints.push(testPoint)
        break  // 终止该射线
```

### 2.2 碰撞检测规范

碰撞检测采用 **AABB 点测试（Axis-Aligned Bounding Box Point Test）** ：

```
function isInsideAABB(point: Vec2, box: AABB): boolean:
  return point.x ≥ box.minX AND point.x ≤ box.maxX
     AND point.y ≥ box.minY AND point.y ≤ box.maxY
```

**优化策略：**
- 只检测当前活动房间内的墙壁
- 对墙壁按网格索引进行空间分区
- 采用步进式采样（而非逐像素），采样步长由性能配置决定

### 2.3 光线衰减函数

光照强度随距离增加而平滑衰减，模拟真实光源的物理特性。

```
衰减公式（混合衰减）：
  t = distance / maxDistance          // 归一化距离 0-1
  intensity = 1 / (1 + t² × 8)       // 平方衰减 + 常数修正
  intensity = max(0, intensity)       // 确保非负

参数建议：
  火把：   最大距离 200-300px，衰减系数 0.003-0.005
  窗口光： 最大距离 300-400px，衰减系数 0.001-0.002
  Boss光： 最大距离 250-350px，衰减系数 0.002-0.004
```

**衰减曲线对比：**

| 衰减类型 | 公式 | 效果 | 适用场景 |
| :--- | :--- | :--- | :--- |
| 线性衰减 | `1 - d/max` | 均匀减弱，边缘锐利 | 不推荐 |
| 平方衰减 | `1 / d²` | 快速衰减，光晕小 | 火把、点光源 |
| 混合衰减 | `1 / (d + d²)` | 平滑衰减，光晕自然 | **推荐（本系统使用）** |

### 2.4 阴影楔形绘制

阴影边界通过从光源位置向碰撞点绘制“楔形”实现：

```
输入：
  - origin: Vec2（光源位置）
  - hitPoint: Vec2（射线碰撞点）
  - angle: float（射线角度）
  - spreadAngle: float（楔形张角，默认为相邻射线角度的一半）

绘制方式：
  1. 计算 wedgeRadius = distance(origin, hitPoint)
  2. 以 origin 为顶点，沿 angle ± spreadAngle 方向延伸至 wedgeRadius
  3. 填充该扇形区域为阴影颜色（由光源颜色计算得出）
  4. 使用离屏 Canvas 叠加绘制，混合模式为 Multiply
```

### 2.5 多光源叠加机制

多个光源的光照纹理通过 **线性叠加（Linear Blending）** 合成：

```
最终光照 = Σ(光源光照 × 光源强度)

实现方式：
  1. 每个光源独立计算其光照纹理（离屏Canvas）
  2. 所有纹理通过 globalCompositeOperation = 'lighter' 叠加
  3. 叠加结果作为最终光照遮罩
```


## 三、光源颜色与阴影色彩

### 3.1 光源颜色体系

每种光源类型有独立的颜色配置，影响光照区域颜色和阴影色调。

**光源颜色定义：**

| 光源类型 | 光晕颜色 (RGB) | 色温 | 十六进制 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| 玩家火炬 | (255, 200, 100) | 暖黄 | `#ffc864` | 标准火焰色 |
| 壁挂火把 | (255, 180, 80) | 橙黄 | `#ffb450` | 略暗，偏橙 |
| 窗口光（冷） | (180, 220, 255) | 冷白/淡蓝 | `#b4dcff` | 月光/天空光 |
| 窗口光（暖） | (255, 220, 180) | 暖白/金黄 | `#ffdcb4` | 黄昏/烛光 |
| Boss 光 | (220, 40, 60) | 暗红 | `#dc283c` | 威胁感 |
| 宝箱光 | (255, 200, 50) | 金色 | `#ffc832` | 吸引注意 |
| 传送门光 | (120, 80, 255) | 紫蓝 | `#7850ff` | 神秘感 |
| 终点楼梯光 | (80, 200, 255) | 天蓝 | `#50c8ff` | 指引感 |

### 3.2 阴影色彩规则

**阴影不是纯黑色**，而是根据光源颜色计算出的深色变体。

```typescript
function calculateShadowColor(lightColor: Color, distance: number, maxDistance: number): Color {
  // 计算光照强度
  const t = distance / maxDistance;
  const intensity = 1 / (1 + t * t * 8);
  const shadowFactor = 1 - intensity; // 距离越远，阴影越深

  // 光源颜色的反色 + 压暗
  const complementary = {
    r: 255 - lightColor.r,
    g: 255 - lightColor.g,
    b: 255 - lightColor.b
  };

  return {
    r: complementary.r * shadowFactor * 0.5,
    g: complementary.g * shadowFactor * 0.5,
    b: complementary.b * shadowFactor * 0.5 + 10 // 保留一点亮度
  };
}
```

### 3.3 光源-阴影颜色对照表

| 光源类型 | 光晕颜色 | 阴影颜色（完全遮挡时） | 阴影RGB |
| :--- | :--- | :--- | :--- |
| 玩家火炬 | `#ffc864` | 深蓝灰 | `(20, 25, 35)` |
| 壁挂火把 | `#ffb450` | 深蓝灰 | `(25, 30, 40)` |
| 窗口光（冷） | `#b4dcff` | 深灰蓝 | `(30, 35, 45)` |
| 窗口光（暖） | `#ffdcb4` | 深蓝灰 | `(20, 25, 35)` |
| Boss 光 | `#dc283c` | 深红灰 | `(40, 20, 22)` |
| 宝箱光 | `#ffc832` | 深蓝绿 | `(20, 30, 35)` |
| 传送门光 | `#7850ff` | 深紫灰 | `(25, 20, 35)` |

### 3.4 暖光源 vs 冷光源对比

| 属性 | 暖光源（火把） | 冷光源（窗口月光） |
| :--- | :--- | :--- |
| 色温 | 1800-3000K | 5000-8000K |
| RGB倾向 | R > G > B | B > G > R |
| 阴影色调 | 偏蓝/紫（补色） | 偏黄/橙（补色） |
| 氛围 | 温暖、安全 | 冷清、神秘 |
| 光照梯度 | `#ffcc88 → #ffaa44 → #886622` | `#b4dcff → #88bbee → #446688` |
| 阴影梯度 | `#223344 → #111a22` | `#443322 → #221811` |


## 四、性能配置系统

### 4.1 性能配置接口

```typescript
interface PerformanceConfig {
  // 射线采样参数
  rayCount: number;              // 每光源射线采样数量
  stepSize: number;             // 射线步进检测粒度（像素）
  maxDistance: number;          // 最大光照半径（像素）

  // 渲染参数
  resolutionScale: number;      // 离屏渲染缩放比 [0.25, 1.0]
  shadowSoftness: number;       // 阴影边缘模糊程度 [0, 1]

  // 调度参数
  updateInterval: number;       // 光源更新间隔（帧数）
  maxActiveLights: number;      // 最大同屏光源数量
  cacheStrategy: CacheStrategy; // 缓存策略
}
```

### 4.2 预置性能等级

| 等级 | 标识 | rayCount | stepSize | maxDistance | resolutionScale | updateInterval | maxActiveLights |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | 极致性能 | 24 | 8 | 200 | 0.25 | 5 | 2 |
| 1 | 高性能 | 48 | 6 | 250 | 0.33 | 3 | 4 |
| 2 | 平衡（默认） | 72 | 4 | 300 | 0.50 | 2 | 6 |
| 3 | 高质量 | 96 | 3 | 350 | 0.75 | 1 | 8 |
| 4 | 极致质量 | 120 | 2 | 400 | 1.00 | 1 | 10 |

### 4.3 光源分辨率倍率

不同光源类型使用独立分辨率倍率，作用于基础 rayCount：

| 光源类型 | 分辨率倍率 | 说明 |
| :--- | :--- | :--- |
| 玩家火炬 | 1.0× | 最高优先级，全精度 |
| Boss 光 | 0.8× | 高优先级，略降精度 |
| 窗口光 | 0.7× | 中高优先级 |
| 壁挂火把 | 0.5× | 环境光，低精度 |
| 传送门光 | 0.6× | 中低优先级 |
| 宝箱光 | 0.3× | 仅自发光，极低精度 |

**实际射线数 = 基础射线数 × 分辨率倍率**

### 4.4 自适应分辨率机制

系统实现动态分辨率调整，以维持目标帧率：

```
目标帧率：60 FPS
调整幅度：每帧 ±5%

逻辑：
  当帧率 < 55 FPS：
    resolutionScale = max(0.25, resolutionScale × 0.95)
  当帧率 ≥ 60 FPS AND resolutionScale < 上限：
    resolutionScale = min(1.0, resolutionScale × 1.05)

保护边界：
  resolutionScale ∈ [0.25, 1.0]
  调整间隔：不少于 10 帧，避免频繁波动
```


## 五、预渲染与缓存策略

### 5.1 核心思路

**只有发生变化时才重新计算光影。**

触发重新计算的场景：
- 玩家移动（火炬位置变化）
- 敌人死亡（光源消失/变化）
- 宝箱开启（光源状态变化）
- 火把被点亮/熄灭
- 楼层切换

### 5.2 缓存层级

| 层级 | 缓存内容 | 更新条件 | 性能收益 |
| :--- | :--- | :--- | :--- |
| L1 | 静态光源光照贴图 | 永不变化（楼层固定） | 极高 |
| L2 | 动态光源光照贴图 | 光源位置变化时更新 | 高 |
| L3 | 阴影贴图 | 光源或遮挡物变化时更新 | 中 |
| L4 | 复合光照贴图 | 任何光源变化时更新 | 中 |

### 5.3 静态光源预渲染

**适用对象：** 壁挂火把、窗口光等位置固定的光源。

```typescript
class StaticLightCache {
  private cache: Map<string, ImageData> = new Map();

  renderLight(lightId: string, light: LightSource, map: MapData): ImageData {
    if (this.cache.has(lightId)) {
      return this.cache.get(lightId)!;
    }

    // 首次渲染：计算完整光照
    const result = this.computeLight(light, map);
    this.cache.set(lightId, result);
    return result;
  }

  invalidate(lightId: string) {
    this.cache.delete(lightId);
  }
}
```

### 5.4 动态光源优化

**适用对象：** 玩家火炬、Boss光等位置变化的光源。

| 策略 | 说明 | 效果 |
| :--- | :--- | :--- |
| 降低更新频率 | 每2-3帧更新一次 | 减少50%计算量 |
| 降低采样率 | 移动时使用低精度，静止时全精度 | 动态平衡 |
| 增量更新 | 只重新计算变化区域 | 高效但实现复杂 |
| 分帧计算 | 一帧计算，一帧使用 | 稳定帧率 |

### 5.5 光照贴图复用判定

当前帧与上一帧的差异度小于阈值时，直接复用上一帧的光照贴图。

```typescript
function shouldReuseCache(currentFrame: FrameData, previousFrame: FrameData): boolean {
  // 检查光源位置变化量
  const maxMovement = 5; // 像素
  if (distance(currentFrame.playerPos, previousFrame.playerPos) > maxMovement) {
    return false;
  }

  // 检查敌人/光源数量变化
  if (currentFrame.lightSources.length !== previousFrame.lightSources.length) {
    return false;
  }

  return true; // 复用缓存
}
```


## 六、更新调度系统

### 6.1 更新优先级

| 优先级 | 光源类型 | 更新条件 | 更新频率 |
| :--- | :--- | :--- | :--- |
| P0 | 玩家火炬 | 玩家每移动一格 | 每帧 |
| P1 | 动态敌人/Boss | 位置变化时 | 每帧 |
| P2 | 壁挂火把 | 固定位置 | 每3帧 |
| P3 | 窗口光 | 固定位置 | 仅楼层加载时 |
| P4 | 静态装饰光 | 固定位置 | 仅楼层加载时 |

### 6.2 性能预算

| 性能等级 | 每帧光源计算量 | 缓存命中目标 |
| :--- | :--- | :--- |
| 极致性能 | 1-2个动态光源 | >90% |
| 高性能 | 2-3个动态光源 | >80% |
| 平衡 | 3-5个动态光源 | >70% |
| 高质量 | 5-8个动态光源 | >60% |
| 极致质量 | 全部光源 | >50% |


## 七、数据结构定义

### 7.1 光源对象

```typescript
interface LightSource {
  id: string;
  position: Vec2;                // 世界坐标
  type: LightType;               // Player | Torch | WindowCold | WindowWarm | Boss | Chest | Portal
  intensity: number;             // 光照强度 [0, 1]
  color: Color;                  // RGB 颜色值
  shadowColor: Color;            // 阴影颜色值（由光源颜色计算）
  radius: number;                // 光照半径（像素）
  attenuation: number;           // 衰减系数
  isActive: boolean;             // 是否激活
  updateCounter: number;         // 更新计数器（用于帧间隔控制）
  priority: number;              // 更新优先级 0-4
}
```

### 7.2 光线投射结果

```typescript
interface RayCastResult {
  hitPoints: Vec2[];            // 碰撞点数组
  hitDistances: number[];       // 对应的碰撞距离
  hitIntensities: number[];     // 对应的光照强度（衰减后）
  maxDistance: number;          // 该光源的最大检测距离
  timestamp: number;            // 计算时间戳（用于缓存）
}
```

### 7.3 光照纹理

```typescript
interface LightTexture {
  canvas: OffscreenCanvas;      // 离屏渲染画布
  resolution: Vec2;             // 实际渲染尺寸
  scale: number;                // 缩放比例
  dirty: boolean;               // 是否需要重新渲染
  lastUpdate: number;           // 最后更新时间（帧数）
  cacheKey: string;             // 缓存键（用于复用判定）
}
```

### 7.4 光源配置

```typescript
interface LightConfig {
  type: LightType;
  color: Color;
  shadowColor: Color;
  intensity: number;
  radius: number;
  attenuation: number;
  resolutionMultiplier: number;
  flicker: {
    enabled: boolean;
    speed: number;
    amplitude: number;
  };
}

const LIGHT_CONFIGS: Record<LightType, LightConfig> = {
  torch: {
    type: 'torch',
    color: { r: 255, g: 200, b: 100 },
    shadowColor: { r: 20, g: 25, b: 35 },
    intensity: 0.8,
    radius: 200,
    attenuation: 0.004,
    resolutionMultiplier: 1.0,
    flicker: { enabled: true, speed: 2.0, amplitude: 0.08 }
  },
  window_cold: {
    type: 'window_cold',
    color: { r: 180, g: 220, b: 255 },
    shadowColor: { r: 30, g: 35, b: 45 },
    intensity: 0.9,
    radius: 350,
    attenuation: 0.0015,
    resolutionMultiplier: 0.7,
    flicker: { enabled: false, speed: 0, amplitude: 0 }
  },
  window_warm: {
    type: 'window_warm',
    color: { r: 255, g: 220, b: 180 },
    shadowColor: { r: 20, g: 25, b: 35 },
    intensity: 0.85,
    radius: 300,
    attenuation: 0.002,
    resolutionMultiplier: 0.7,
    flicker: { enabled: false, speed: 0, amplitude: 0 }
  },
  boss: {
    type: 'boss',
    color: { r: 220, g: 40, b: 60 },
    shadowColor: { r: 40, g: 20, b: 22 },
    intensity: 0.6,
    radius: 250,
    attenuation: 0.003,
    resolutionMultiplier: 0.8,
    flicker: { enabled: true, speed: 0.5, amplitude: 0.15 }
  },
  chest: {
    type: 'chest',
    color: { r: 255, g: 200, b: 50 },
    shadowColor: { r: 20, g: 30, b: 35 },
    intensity: 0.3,
    radius: 80,
    attenuation: 0.008,
    resolutionMultiplier: 0.3,
    flicker: { enabled: true, speed: 3.0, amplitude: 0.2 }
  }
};
```


## 八、渲染管线规范

### 8.1 完整绘制顺序

```
1. 背景色（虚空/纯色）
2. 环境光暗角（夜间氛围）
3. 预计算静态阴影（墙壁投影）
4. 地面图层渲染
5. 光线投射阴影（动态光照纹理）
6. 地面光晕叠加（径向渐变）
7. 动态物体阴影（角色投影）
8. 墙壁图层渲染
9. 墙壁光晕叠加
10. 动态物体渲染
11. 自发光光晕叠加
12. 丁达尔效应（光锥+灰尘粒子）
13. UI图层渲染
```

### 8.2 离屏渲染流程

```
对每个需要更新的光源：

  1. 从缓存中获取光源配置（颜色、阴影颜色、半径等）
  2. 在离屏 Canvas 上绘制径向渐变（光晕基础），应用衰减
  3. 执行光线投射算法
  4. 遍历所有碰撞点，使用阴影颜色绘制楔形
  5. 应用边缘模糊（如启用）
  6. 标记为“已更新”

  渲染完成后，将离屏纹理叠加到主 Canvas：
  1. 将离屏 Canvas 缩放至屏幕尺寸
  2. 使用 multiply 混合模式绘制
  3. 应用光源强度调整
```


## 九、验证标准

### 9.1 功能验证

| 测试项 | 验证方法 | 通过标准 |
| :--- | :--- | :--- |
| 光线遮挡 | 光源与墙壁之间放置遮挡物 | 遮挡物背后出现阴影 |
| 阴影方向 | 观察阴影与光源的相对位置 | 阴影在光源的相反方向 |
| 多光源叠加 | 放置两个光源，观测重叠区域 | 重叠区域亮度叠加 |
| 边缘平滑度 | 观察阴影边界 | 72条射线及以上无明显锯齿 |
| 光源颜色 | 不同光源类型颜色正确 | 暖光源偏黄/橙，冷光源偏蓝/白 |
| 阴影颜色 | 阴影不是纯黑色 | 阴影带有光源补色倾向 |

### 9.2 性能验证

| 测试场景 | 指标 | 标准 |
| :--- | :--- | :--- |
| 单光源（平衡配置） | FPS | ≥ 60 |
| 6光源（平衡配置） | FPS | ≥ 55 |
| 6光源（极致性能配置） | FPS | ≥ 60 |
| 6光源（极致质量配置） | FPS | ≥ 45 |
| 静态光源缓存命中率 | % | ≥ 70% |

### 9.3 降级验证

| 测试项 | 验证方法 | 通过标准 |
| :--- | :--- | :--- |
| 自适应降级 | 模拟低帧率场景 | resolutionScale 自动下降 |
| 自动恢复 | 恢复高帧率场景 | resolutionScale 自动恢复 |


## 十、实现约束

### 10.1 技术约束

1. **渲染引擎**：Canvas 2D API，不使用 WebGL
2. **混合模式**：
   - 光源叠加：`globalCompositeOperation = 'lighter'`
   - 阴影叠加：`globalCompositeOperation = 'multiply'`
3. **离屏渲染**：使用 `OffscreenCanvas` 或不可见 Canvas 元素
4. **坐标系**：世界坐标 → 屏幕坐标，不涉及矩阵变换

### 10.2 性能约束

1. 所有动态光源更新总耗时 < 5ms（平衡配置）
2. 离屏 Canvas 尺寸不超过 `屏幕尺寸 × resolutionScale`
3. 碰撞检测不跨越房间边界
4. 步进采样不检测装饰性物体（非碰撞体）
5. 静态光源光照贴图预渲染并缓存

### 10.3 行为约束

1. 光源不穿透墙壁（被墙壁完全阻断）
2. 光源之间不相互影响（线性叠加）
3. 阴影不影响 UI 元素
4. 性能等级切换不影响游戏逻辑（仅为渲染优化）
5. 光线强度随距离衰减（不再恒定）
6. 阴影颜色随距离渐变（靠近光源浅，远离深）


## 十一、实现指令

> **根据以上规范，请实现完整的光线追踪系统：**
>
> **1. 核心算法：**
> - 实现光线投射算法，包含射线发射、AABB碰撞检测、碰撞点记录
> - 实现光线衰减函数（混合衰减公式）
> - 实现阴影楔形绘制
>
> **2. 光源管理：**
> - 实现 LightSource 数据结构
> - 实现 LIGHT_CONFIGS 配置表（所有光源类型）
> - 支持动态添加/移除/更新光源
>
> **3. 颜色系统：**
> - 每种光源类型定义独立的 RGB 颜色值
> - 阴影颜色根据光源颜色计算（补色+压暗）
> - 暖光源阴影偏蓝灰，冷光源阴影偏黄褐
>
> **4. 性能配置：**
> - 实现 PerformanceConfig 接口（5个预置等级）
> - 各光源类型使用独立分辨率倍率
> - 实现自适应分辨率机制
>
> **5. 预渲染缓存：**
> - 静态光源（壁挂火把、窗口光）光照贴图预渲染并缓存
> - 检测光源变化，变化小于阈值时复用缓存
> - 实现更新优先级调度（P0-P4）
>
> **6. 验证测试：**
> - 功能验证：光线遮挡、阴影方向、多光源叠加
> - 性能验证：各等级下帧率稳定
> - 缓存验证：静态光源命中率 >70%


## 附录：性能等级速查表

| 等级 | rayCount | stepSize | maxDistance | resolutionScale | updateInterval | maxActiveLights |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| L0 极致性能 | 24 | 8 | 200 | 0.25 | 5 | 2 |
| L1 高性能 | 48 | 6 | 250 | 0.33 | 3 | 4 |
| L2 平衡 | 72 | 4 | 300 | 0.50 | 2 | 6 |
| L3 高质量 | 96 | 3 | 350 | 0.75 | 1 | 8 |
| L4 极致质量 | 120 | 2 | 400 | 1.00 | 1 | 10 |


**文档结束**

---

# 第十五部分：渲染引擎迁移 —— Canvas 2D → PixiJS (WebGL) ⏭（技术路线已变更：改为 §16 Three.js）

> # ⛔ 本部分（§15）已作废 —— 仅作历史方案存档
> 技术路线最终采用 **§16 Three.js（3渲2）**，`pixi.js` 与 `@pixi/*` 依赖**从未安装**，`PixiRenderer`/`PixiLightSystem`/`PixiParticleSystem` 均未创建。
> 当前渲染实现、光照、阴影、粒子、后处理一律以 **§16 + 正文 §1.3 / §11.5** 为准。请勿按本节指令编码。

> **来源：** 《技术路线迁移文档 v2.0》（**取代**原 `想法.md` 的 CPU 光线追踪方案；该方案全文已收录于上文「早期光线追踪设计方案」章节）
> **状态：** 已确定，纳入开发范围；**代码实现 ❌ 未开始（且已被 §16 取代）**
> **迁移目标（原）：** 渲染引擎从原生 Canvas 2D 替换为 PixiJS (WebGL)
> **预期效果（原）：** 性能提升 10–100 倍，像素级光照精度，支持后期特效

### 15.0 与现行代码的对照（整合补充）

| 项 | 现状 |
| :--- | :--- |
| 依赖 | ❌ `package.json` **未安装** `pixi.js` 及任何 `@pixi/*` 插件 |
| 渲染入口 | `ui/GameUI.ts` 创建 `<canvas id="game-canvas">`，`render/IsometricRenderer.attach()` 挂载 |
| 主循环 | `core/GameLoop.ts`（✅ 按文档保留） |
| 逻辑层 | `core/WorldManager` / `FloorManager` / `entities/` / `systems/` / `data/` / `ui/` / `utils/` / `types/`（✅ 按文档保留） |

**⚠️ 文档中的模块路径需按下表校正后再执行：**

| 文档写法 | 实际路径 |
| :--- | :--- |
| `effects/Renderer.ts` | `render/IsometricRenderer.ts` |
| `effects/LightSystem.ts` | `render/LightSystem.ts` |
| `effects/ShadowSystem.ts` | `render/ShadowSystem.ts` |
| `effects/ParticleSystem.ts` | `effects/ParticleSystem.ts` ✅ 一致 |

**⚠️ 冲突裁决（必须遵守）：** §11.2「亮度原则」在迁移后**继续有效** —— 场景始终明亮、暗角 ≤30%、不得制造不可见区域。因此 §15.5 着色器中 `blocked → alpha 0.6` 的硬阴影在落地时必须**调低为氛围级**（建议 ≤0.25），否则与已确定的视觉规范冲突。

---

## 15.1 为什么必须迁移

### 15.1.1 当前 Canvas 2D 方案的致命问题

| 问题 | 表现 | 根因 |
| :--- | :--- | :--- |
| 光照精度受限 | 72 条射线，边缘锯齿明显 | CPU 串行计算，无法增加射线数 |
| 帧率不稳 | 复杂场景掉帧至 30–40 FPS | CPU 渲染，无法利用 GPU 并行能力 |
| 粒子数量受限 | 超过 50 个粒子开始卡顿 | 每帧 CPU 更新 + 绘制 |
| 无后期特效 | 无法实现辉光、模糊、颜色校正 | Canvas 2D 不支持着色器 |
| 无法扩展 | 未来无法支持复杂视觉效果 | 已到达 Canvas 2D 性能天花板 |

> **代码现状佐证：** `gameConfig.render.maxParticles = 50`、`maxLights = 6`；`ShadowSystem` 靠离屏 Canvas 缓存静态影子维持帧率；`LightSystem` 注释已注明"俯视图适配 → 正圆光晕"（椭圆未做）。

### 15.1.2 PixiJS 方案的核心优势

| 特性 | PixiJS 实现 | 性能提升 |
| :--- | :--- | :--- |
| 光照计算 | GPU 像素着色器并行计算 | 100 倍+ |
| 粒子系统 | GPU 加速粒子，支持数千粒子 | 20 倍+ |
| 后期特效 | 内置滤镜（辉光/模糊/颜色校正） | 原生支持 |
| 渲染吞吐 | WebGL 批量绘制 | 10 倍+ |
| 纹理管理 | GPU 纹理缓存 | 即时 |
| 开发效率 | 声明式 API，组件化 | 显著提升 |

## 15.2 技术选型 ❌（依赖未安装）

### 15.2.1 核心引擎

| 组件 | 选型 | 版本 | 说明 |
| :--- | :--- | :--- | :--- |
| 渲染引擎 | PixiJS | v8.x | 最新 WebGL 2.0 渲染引擎 |
| 语言 | TypeScript | 5.x | 保持不变 ✅（当前 `^5.5.4`） |
| 构建工具 | Vite | 5.x | 保持不变 ✅（当前 `^5.4.8`） |
| UI 框架 | 原生 HTML + CSS | — | 保持不变（覆盖层） ✅ |

### 15.2.2 插件依赖

| 插件 | 用途 | 说明 |
| :--- | :--- | :--- |
| `@pixi/particle-emitter` | 粒子系统 | 替代手动粒子绘制 |
| `@pixi/filter-glow` | 辉光特效 | 光照增强、自发光 |
| `@pixi/filter-blur` | 模糊效果 | 阴影柔化、景深 |
| `@pixi/filter-adjustment` | 颜色校正 | 整体色调控制 |

## 15.3 架构变更 ❌

### 15.3.1 渲染架构对比

**原架构（Canvas 2D）：**

```
Game Loop
    ↓
Canvas 2D Context (CPU)
    ↓
绘制命令队列
    ↓
逐个执行绘制 (串行)
    ↓
输出到屏幕
```

**新架构（PixiJS WebGL）：**

```
Game Loop
    ↓
PixiJS Application (WebGL 2.0)
    ↓
场景图 (Scene Graph)
    ├── Container (地图)
    │   ├── Sprite (地面)
    │   ├── Sprite (墙壁)
    │   └── Sprite (装饰)
    ├── Container (实体)
    │   ├── Sprite (玩家)
    │   ├── Sprite (怪物)
    │   └── Sprite (物品)
    ├── Container (光照)
    │   ├── RenderTexture (光照贴图)
    │   └── Sprite (光晕)
    └── Filters (后期处理)
         ├── GlowFilter
         └── BlurFilter
    ↓
GPU 并行渲染
    ↓
输出到屏幕
```

### 15.3.2 数据流变更

**原方案：**

```
数据变化 → 清空 Canvas → 重绘所有内容 → 输出
```

**新方案：**

```
数据变化 → 更新场景图 (只更新变化部分) → GPU 自动渲染 → 输出
```

## 15.4 迁移范围

### 15.4.1 保留不变的模块（约 70% 代码）✅

| 模块 | 说明 | 状态 |
| :--- | :--- | :--- |
| `core/GameLoop.ts` | 游戏循环 | ✅ 保留 |
| `core/EventBus.ts` | 事件系统 | ✅ 保留 |
| `core/WorldManager.ts` | 世界管理（逻辑层） | ✅ 保留 |
| `core/FloorManager.ts` | 楼层管理 | ✅ 保留 |
| `entities/` | 所有实体类 | ✅ 保留 |
| `systems/` | 所有系统逻辑 | ✅ 保留 |
| `data/` | 所有数据配置 | ✅ 保留 |
| `ui/` | UI 覆盖层 | ✅ 保留 |
| `utils/` | 工具函数 | ✅ 保留 |
| `types/` | 类型定义 | ✅ 保留（可能小幅扩展） |

### 15.4.2 需要替换的模块（约 30% 代码）❌

| 原模块 | 新模块 | 状态 |
| :--- | :--- | :--- |
| `render/IsometricRenderer.ts` | `effects/PixiRenderer.ts` | 🔄 重写（PixiJS API） |
| `render/LightSystem.ts` | `effects/PixiLightSystem.ts` | 🔄 完全重写（着色器方案） |
| `render/ShadowSystem.ts` | 合并到 LightSystem | 🔄 重写 |
| `effects/ParticleSystem.ts` | `effects/PixiParticleSystem.ts` | 🔄 重写（PixiJS 粒子插件） |
| `core/CameraController.ts` | 适配 PixiJS 视口 | ⚠️ 小幅适配 |
| `main.ts` | 初始化 PixiJS Application | ⚠️ 小幅重写 |

> **附加影响（文档未列，迁移时需注意）：** `render/Projection.ts` 的 `worldToScreen/screenToWorld` 被 `InputManager`（鼠标拾取）、`CameraController`、`LightSystem`、`ShadowSystem`、`MiniMap` 依赖；`render/PlaceholderArt.ts` 的绘制逻辑需改为纹理生成（见 §15.5.4）。

## 15.5 详细实现规范 ❌

### 15.5.1 PixiJS 应用初始化

```typescript
// main.ts (新)

import { Application } from 'pixi.js';
import { PixiRenderer } from './effects/PixiRenderer';

const app = new Application({
  width: window.innerWidth - 240,  // 左右栏预留
  height: window.innerHeight - 64, // 底栏预留
  backgroundColor: 0x0f0e17,
  antialias: true,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
});

document.getElementById('game-container')!.appendChild(app.view as any);

const renderer = new PixiRenderer(app);
renderer.start();
```

### 15.5.2 场景图结构

```typescript
// effects/PixiRenderer.ts

export class PixiRenderer {
  private app: Application;
  private stage: Container;
  
  // 各层容器（按绘制顺序）
  private backgroundLayer: Container;
  private groundLayer: Container;
  private wallLayer: Container;
  private entityLayer: Container;
  private lightLayer: Container;
  private effectLayer: Container;
  private uiLayer: Container;

  constructor(app: Application) {
    this.app = app;
    this.stage = app.stage;
    this.setupLayers();
  }

  private setupLayers() {
    // 从下到上
    this.backgroundLayer = new Container();
    this.groundLayer = new Container();
    this.wallLayer = new Container();
    this.entityLayer = new Container();
    this.lightLayer = new Container();
    this.effectLayer = new Container();
    this.uiLayer = new Container();

    this.stage.addChild(this.backgroundLayer);
    this.stage.addChild(this.groundLayer);
    this.stage.addChild(this.wallLayer);
    this.stage.addChild(this.entityLayer);
    this.stage.addChild(this.lightLayer);
    this.stage.addChild(this.effectLayer);
    this.stage.addChild(this.uiLayer);
  }

  // 每帧更新
  public update(deltaTime: number) {
    // 更新实体位置
    // 更新光源
    // 更新粒子
  }
}
```

> **等距视角适配提醒：** 现行渲染按 `screenY` 排序做前后遮挡（§11.6）。PixiJS 场景图同样可用 `sortableChildren = true` + `zIndex = screenY` 实现，迁移时不要丢失这一层。

### 15.5.3 地形渲染

**原方案：**

```typescript
// Canvas 2D
ctx.fillStyle = '#3a3a4a';
ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
```

**新方案（PixiJS）：**

```typescript
// 方案A：使用 Graphics（适用于动态生成）
const g = new Graphics();
g.rect(0, 0, tileSize, tileSize);
g.fill({ color: 0x3a3a4a });
g.x = col * tileSize;
g.y = row * tileSize;

// 方案B：使用 Sprite + 纹理（高性能，推荐）
// 预生成纹理
const texture = generateTileTexture(tileType);
const sprite = new Sprite(texture);
sprite.x = col * tileSize;
sprite.y = row * tileSize;
```

### 15.5.4 纹理生成

```typescript
// utils/TextureGenerator.ts

export function generateTileTexture(type: TileType): Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;

  // 用 Canvas 2D 绘制纹理内容
  // （可以沿用现有的绘制逻辑，只是输出到纹理而非直接上屏）

  return Texture.from(canvas);
}
```

**关键点：** 纹理生成逻辑可以复用现有的 Canvas 2D 绘制代码，只是绘制目标从屏幕变成了纹理。（对应复用 `render/PlaceholderArt.ts` 的现有绘制函数。）

### 15.5.5 光照系统（核心变更）

**原方案：** CPU 光线投射（72 条射线步进检测）
**新方案：** GPU 着色器（像素级并行计算）

#### 着色器实现

```glsl
// shaders/light.frag

uniform vec2 u_lightPosition;
uniform vec3 u_lightColor;
uniform float u_maxDistance;
uniform sampler2D u_wallTexture;
uniform vec2 u_textureSize;

varying vec2 v_uv;

void main() {
    vec2 pixelPos = v_uv * u_textureSize;
    vec2 dir = pixelPos - u_lightPosition;
    float dist = length(dir);
    vec2 dirNorm = dir / dist;
    
    // 步进检测
    float stepSize = 2.0;
    float currentDist = 0.0;
    bool blocked = false;
    
    for (float d = 0.0; d < u_maxDistance; d += stepSize) {
        vec2 samplePos = u_lightPosition + dirNorm * d;
        vec4 wallSample = texture2D(u_wallTexture, samplePos / u_textureSize);
        if (wallSample.a > 0.5) {
            blocked = true;
            break;
        }
    }
    
    if (blocked) {
        // 阴影区域
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.6);
    } else {
        // 光照区域
        float intensity = 1.0 / (1.0 + (dist / u_maxDistance) * (dist / u_maxDistance) * 8.0);
        gl_FragColor = vec4(u_lightColor * intensity, intensity * 0.8);
    }
}
```

> ⚠️ **落地时必须修改：** 阴影 `alpha 0.6` 与 §11.2「始终明亮、暗角 ≤30%」冲突，应下调为氛围级（建议 ≤0.25）并保留光源补色倾向，不得制造不可辨认的黑暗区域。

#### PixiJS 集成

```typescript
// effects/PixiLightSystem.ts

import { RenderTexture, Sprite, Filter, Application } from 'pixi.js';
import lightShader from './shaders/light.frag?raw';

export class PixiLightSystem {
  private app: Application;
  private lightTextures: Map<string, RenderTexture> = new Map();
  private lightSprites: Map<string, Sprite> = new Map();

  constructor(app: Application) {
    this.app = app;
  }

  // 为每个光源创建光照纹理
  renderLight(light: LightSource) {
    const filter = new Filter(undefined, lightShader, {
      u_lightPosition: [light.x, light.y],
      u_lightColor: [light.color.r / 255, light.color.g / 255, light.color.b / 255],
      u_maxDistance: light.radius,
      u_wallTexture: this.wallTexture,
      u_textureSize: [this.app.screen.width, this.app.screen.height]
    });

    const texture = RenderTexture.create({
      width: this.app.screen.width,
      height: this.app.screen.height,
    });

    // 应用滤镜到纹理
    // ...
  }
}
```

**迁移后需沿用现行光源配置**（§11.5 表 + `gameConfig.json`）：玩家火炬 / 壁挂火把 / Boss / 宝箱 / 传送门 / 终点楼梯的半径、颜色与动态行为；优先级 玩家1 > Boss2 > 传送门楼梯3 > 火把4 > 宝箱5（迁移后可放宽到 ≥20 光源）。

### 15.5.6 粒子系统

**原方案：** 手动维护粒子数组，每帧更新位置 + 绘制
**新方案：** 使用 PixiJS Particle Emitter

```typescript
// effects/PixiParticleSystem.ts

import { Container } from 'pixi.js';
import { Emitter, UpgradeSystem } from '@pixi/particle-emitter';

export class PixiParticleSystem {
  private emitter: Emitter;
  private container: Container;
  private elapsed = 0;

  constructor(container: Container) {
    this.container = container;
    this.emitter = new Emitter(container, {
      frequency: 0.1,
      emitterLifetime: -1,
      maxParticles: 500,
      pos: { x: 0, y: 0 },
      particles: [
        {
          life: { min: 0.5, max: 1.5 },
          speed: { min: 10, max: 30 },
          scale: { start: 0.5, end: 0.1 },
          color: { start: '#ffcc88', end: '#ff8833' },
        }
      ]
    });
  }

  update(deltaTime: number) {
    this.elapsed += deltaTime;
    this.emitter.update(this.elapsed);
    this.elapsed = 0;
  }

  emit(x: number, y: number, config: Partial<EmitterConfig>) {
    this.emitter.pos.x = x;
    this.emitter.pos.y = y;
    this.emitter.emit = true;
  }
}
```

**需保持的接口契约**（现有调用方 `GameController` / `ChestSystem` 等）：`floatText(x, y, text, color)`、`emitBurst`、`emitLevelUp`、`emitVictory`、`emitCollectible`、`update(dt)`、`render()`、`clear()`。

### 15.5.7 后期特效

```typescript
// effects/PixiPostProcessing.ts

import { GlowFilter } from '@pixi/filter-glow';
import { BlurFilter } from '@pixi/filter-blur';
import { AdjustmentFilter } from '@pixi/filter-adjustment';

export function setupPostProcessing(lightLayer: Container) {
  // 辉光效果（光源发光）
  const glow = new GlowFilter({
    distance: 15,
    outerStrength: 2,
    innerStrength: 1,
    color: 0xffaa44,
  });
  
  // 模糊效果（阴影柔化）
  const blur = new BlurFilter({
    strength: 4,
    quality: 4,
  });
  
  // 颜色校正（整体氛围）
  const adjustment = new AdjustmentFilter({
    gamma: 1.1,
    contrast: 1.05,
    brightness: 1.0,
  });

  lightLayer.filters = [glow, blur, adjustment];
}
```

## 15.6 迁移步骤（按优先级）❌ 全部未开始

### Phase 1：基础搭建（P0 - 必须最先完成）

| # | 步骤 | 任务 | 产出 | 时间 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.1 | 安装 PixiJS 及插件依赖 | `npm i pixi.js @pixi/particle-emitter @pixi/filter-glow @pixi/filter-blur @pixi/filter-adjustment` | `package.json` 更新 | 0.5天 | ❌ |
| 1.2 | 创建 PixiJS Application，替换 Canvas | — | 游戏画面出现 | 1天 | ❌ |
| 1.3 | 实现纹理生成器（地面/墙壁/实体占位符） | 复用 `PlaceholderArt` | 纹理可复用 | 1天 | ❌ |
| 1.4 | 实现场景图层结构 | — | 渲染管线建立 | 0.5天 | ❌ |

### Phase 2：核心渲染（P1）

| # | 步骤 | 任务 | 产出 | 时间 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 2.1 | 地形渲染（地面 + 墙壁） | — | 地图可见 | 1.5天 | ❌ |
| 2.2 | 实体渲染（玩家 + 怪物 + 物品） | — | 所有物体可见 | 1.5天 | ❌ |
| 2.3 | 摄像机适配（视口跟随玩家） | 保留"整房显示"逻辑 | 房间滚动正确 | 1天 | ❌ |

### Phase 3：光照系统（P1 - 核心价值）

| # | 步骤 | 任务 | 产出 | 时间 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 3.1 | 编写光源着色器 | — | 基础光照可见 | 2天 | ❌ |
| 3.2 | 实现光源管理（多光源支持） | 沿用 §11.5 光源表 | 所有光源生效 | 1天 | ❌ |
| 3.3 | 实现阴影（着色器步进检测） | 阴影 alpha 需按 §15.0 裁决下调 | 墙壁遮挡阴影 | 2天 | ❌ |
| 3.4 | 软阴影 + 光晕优化 | 地面光恢复椭圆（垂直 ×0.5） | 视觉效果达标 | 1天 | ❌ |

### Phase 4：特效系统（P2）

| # | 步骤 | 任务 | 产出 | 时间 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 4.1 | 粒子系统（PixiJS Particle Emitter） | 保持 `floatText` 等接口 | 粒子特效正常 | 1天 | ❌ |
| 4.2 | 后期特效（辉光/模糊/颜色校正） | — | 整体氛围提升 | 1天 | ❌ |
| 4.3 | 丁达尔效应（光柱） | 现有 `ShadowSystem` 已有实现 | 视觉效果完整 | 0.5天 | ❌ |

### Phase 5：集成与优化（P3）

| # | 步骤 | 任务 | 产出 | 时间 | 状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 5.1 | UI 整合（HTML 覆盖层适配） | Tooltip / 输入拾取需改用 Pixi 视口坐标 | 交互正常 | 1天 | ❌ |
| 5.2 | 性能优化（帧率稳定 60 FPS） | — | 性能达标 | 1天 | ❌ |
| 5.3 | 旧代码清理（删除 `render/*` Canvas 2D 版本） | — | 代码库整洁 | 0.5天 | ❌ |

**合计约 17 人天。**

## 15.7 验收标准 ❌（待执行）

### 15.7.1 功能验收

| 验收项 | 标准 |
| :--- | :--- |
| 地图渲染 | 地面、墙壁、装饰正确显示 |
| 实体渲染 | 玩家、怪物、物品正确显示，位置正确 |
| 玩家移动 | 平滑移动，摄像机跟随 |
| 光照 | 光源正确照亮周围，墙壁遮挡产生阴影 |
| 粒子 | 粒子特效正常运行，性能良好 |
| UI | 所有覆盖层交互正常，快捷键正常 |

### 15.7.2 性能验收

| 指标 | 目标值 |
| :--- | :--- |
| 帧率（空闲） | ≥ 60 FPS |
| 帧率（6 光源 + 粒子） | ≥ 55 FPS |
| 帧率（极限场景） | ≥ 45 FPS |
| 内存占用 | ≤ 200MB |
| 加载时间 | ≤ 1s |

### 15.7.3 视觉验收

| 验收项 | 标准 |
| :--- | :--- |
| 光照平滑度 | 无明显锯齿（像素级平滑） |
| 阴影清晰度 | 阴影边界清晰，位置正确 |
| 颜色准确度 | 暖光源偏黄，冷光源偏蓝 |
| 整体氛围 | 暗角 + 辉光 + 颜色校正共同营造地下城氛围 |
| **可读性**（补充） | 仍满足 §11.2：暗角 ≤30%，所有交互元素始终可辨识 |

## 15.8 新旧方案对比

| 对比项 | Canvas 2D（旧 / 当前） | PixiJS WebGL（新 / 目标） |
| :--- | :--- | :--- |
| 光照精度 | 72 条射线，锯齿明显 | 像素级平滑 |
| 光源数量 | ≤6 | ≥20 |
| 粒子数量 | ≤50 | ≥1000 |
| 后期特效 | 不支持 | 辉光/模糊/颜色校正 |
| 帧率 | 不稳（30–60） | 稳定（60） |
| 开发效率 | 高（初期） | 中（初期），高（后期） |
| 扩展性 | 差 | 好 |
| 最终效果 | 一般 | 优秀 |

## 15.9 给 AI Agent 的指令

> **请按以下要求将项目渲染引擎从 Canvas 2D 替换为 PixiJS (WebGL)：**
>
> **1. 安装依赖：**
> ```bash
> npm install pixi.js
> npm install @pixi/particle-emitter
> npm install @pixi/filter-glow @pixi/filter-blur @pixi/filter-adjustment
> ```
>
> **2. 迁移范围（路径以 §15.0 校正表为准）：**
> - 将 `render/IsometricRenderer.ts` 替换为 `effects/PixiRenderer.ts`
> - 将 `render/LightSystem.ts` 替换为 `effects/PixiLightSystem.ts`（使用着色器）
> - 将 `render/ShadowSystem.ts` 合并进新的 LightSystem
> - 将 `effects/ParticleSystem.ts` 替换为 `effects/PixiParticleSystem.ts`
> - 将 `core/CameraController.ts` 适配 PixiJS 视口
> - 更新 `main.ts` 使用 PixiJS Application
> - 更新 `index.html` 添加游戏容器
>
> **3. 保留不变：**
> - 所有游戏逻辑（移动、战斗、AI、地图生成、背包、装备）
> - 所有数据层（JSON 配置、存档、事件）
> - 所有 UI 覆盖层（HTML + CSS）
> - 快捷键系统
> - 等距投影公式 `screenX=(col−row)×64/2`、`screenY=(col+row)×32/2−z`（§11.3）
> - `screenY` 排序的前后遮挡（§11.6）
>
> **4. 验证标准：**
> - 地图渲染正确
> - 实体渲染正确
> - 光照效果像素级平滑
> - 帧率稳定 ≥ 55 FPS
> - 所有快捷键和交互正常
> - **暗角 ≤30%，不产生不可见区域**（§11.2）
>
> **5. 调试支持：**
> - 保留开发环境热更新
> - 添加性能监控（FPS 显示）
> - 保留 `__motaDebug` 调试钩子（现有：`player`/`world`/`camera`/`battle`/`loadPrefab` 等）
>
> **6. 代码规范：**
> - 所有新代码使用 TypeScript
> - 遵循现有命名规范（§第七部分）
> - 添加必要的注释

## 15.10 风险与应对

| 风险 | 概率 | 影响 | 应对 |
| :--- | :--- | :--- | :--- |
| 学习曲线 | 中 | 开发周期延长 | 参考 PixiJS 官方示例和文档 |
| 兼容性问题 | 低 | 部分设备无法运行 | 降级方案：检测 WebGL 支持，否则显示提示 |
| 着色器调试困难 | 中 | 光照效果不如预期 | 使用 Chrome 开发者工具 + Spector.js 调试 WebGL |
| 迁移时间超预期 | 中 | 项目延期 | 分阶段交付，每阶段可独立验证 |
| **等距投影 + 深度排序丢失**（补充） | 中 | 遮挡关系错乱 | 用 `zIndex = screenY` + `sortableChildren` 复刻 §11.6 顺序 |
| **存档/地图生成耦合**（补充） | 低 | 换层闪烁 | 楼层数据（`FloorMap`）与渲染层解耦，逻辑层不改动 |

---

