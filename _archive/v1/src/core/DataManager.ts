/**
 * 数据管理器：统一加载 data/ 目录下所有 JSON 配置（数据与代码分离，规格 1.3）。
 * 使用 Vite import.meta.glob 静态收集，构建期打包、运行期零请求。
 */
import type {
  AchievementDef, AffixDef, BossAffixDef, BossDef, CollectibleDef, CollectibleSeries,
  DifficultyConfig, GameConfig, ItemDef, ItemTemplate, MonsterDef, NpcDef,
  Quest, RoomEventDef, StatusEffectDef, WorldConfig,
} from '../types';

interface RoomDataFile {
  roomId: string;
  floorId: number;
  width: number;
  height: number;
  tiles: number[][];
  depth: number;
  isStartRoom: boolean;
  entities: unknown[];
  exits: unknown[];
}

interface DataIndex {
  world: WorldConfig;
  gameConfig: GameConfig;
  monsters: { monsters: MonsterDef[] };
  items: { items: ItemDef[] };
  itemTemplates: { templates: ItemTemplate[]; affixes: AffixDef[] };
  quests: { quests: Quest[] };
  achievements: { achievements: AchievementDef[] };
  statusEffects: { statusEffects: StatusEffectDef[] };
  events: { events: RoomEventDef[] };
  collectibles: { collectibles: CollectibleDef[]; series: CollectibleSeries[] };
  bossAffixes: { affixes: BossAffixDef[] };
  bossNames: { bosses: BossDef[]; endlessPool: { bossId: string; name: string; title: string; icon: string; color: string }[] };
  difficultyConfig: { difficulties: DifficultyConfig[] };
  npcs: { npcs: NpcDef[] };
  texts: Record<string, string>;
}

export class DataManager {
  private static instance: DataManager;
  private data!: DataIndex;
  private roomData = new Map<string, RoomDataFile>();
  private loaded = false;

  private constructor() {}

  static getInstance(): DataManager {
    if (!DataManager.instance) {
      DataManager.instance = new DataManager();
    }
    return DataManager.instance;
  }

  loadAll(): void {
    if (this.loaded) return;
    const modules = import.meta.glob('../data/**/*.json', { eager: true, import: 'default' }) as Record<string, unknown>;
    const byName = new Map<string, unknown>();
    for (const [path, content] of Object.entries(modules)) {
      const fileName = path.split('/').pop() ?? path;
      byName.set(fileName.replace('.json', ''), content);
      // 手工艺房间（data/rooms/*.json）按 roomId 索引
      if (path.includes('/rooms/') && content && typeof content === 'object' && 'roomId' in content) {
        const room = content as RoomDataFile;
        this.roomData.set(room.roomId, room);
      }
    }
    this.data = {
      world: byName.get('world') as WorldConfig,
      gameConfig: byName.get('gameConfig') as GameConfig,
      monsters: byName.get('monsters') as DataIndex['monsters'],
      items: byName.get('items') as DataIndex['items'],
      itemTemplates: byName.get('itemTemplates') as DataIndex['itemTemplates'],
      quests: byName.get('quests') as DataIndex['quests'],
      achievements: byName.get('achievements') as DataIndex['achievements'],
      statusEffects: byName.get('statusEffects') as DataIndex['statusEffects'],
      events: byName.get('events') as DataIndex['events'],
      collectibles: byName.get('collectibles') as DataIndex['collectibles'],
      bossAffixes: byName.get('bossAffixes') as DataIndex['bossAffixes'],
      bossNames: byName.get('bossNames') as DataIndex['bossNames'],
      difficultyConfig: byName.get('difficultyConfig') as DataIndex['difficultyConfig'],
      npcs: byName.get('npcs') as DataIndex['npcs'],
      texts: byName.get('texts') as Record<string, string>,
    };
    this.loaded = true;
  }

  get world(): WorldConfig { return this.data.world; }
  get config(): GameConfig { return this.data.gameConfig; }
  get monsters(): MonsterDef[] { return this.data.monsters.monsters; }
  get items(): ItemDef[] { return this.data.items.items; }
  get templates(): ItemTemplate[] { return this.data.itemTemplates.templates; }
  get affixDefs(): AffixDef[] { return this.data.itemTemplates.affixes; }
  get quests(): Quest[] { return this.data.quests.quests; }
  get achievements(): AchievementDef[] { return this.data.achievements.achievements; }
  get statusEffects(): StatusEffectDef[] { return this.data.statusEffects.statusEffects; }
  get events(): RoomEventDef[] { return this.data.events.events; }
  get collectibles(): CollectibleDef[] { return this.data.collectibles.collectibles; }
  get series(): CollectibleSeries[] { return this.data.collectibles.series; }
  get bossAffixes(): BossAffixDef[] { return this.data.bossAffixes.affixes; }
  get bosses(): BossDef[] { return this.data.bossNames.bosses; }
  get endlessBossPool(): DataIndex['bossNames']['endlessPool'] { return this.data.bossNames.endlessPool; }
  get difficulties(): DifficultyConfig[] { return this.data.difficultyConfig.difficulties; }
  get npcs(): NpcDef[] { return this.data.npcs.npcs; }
  get texts(): Record<string, string> { return this.data.texts; }

  getMonster(id: string): MonsterDef | undefined { return this.monsters.find(m => m.id === id); }
  getItem(id: string): ItemDef | undefined { return this.items.find(i => i.id === id); }
  getTemplate(id: string): ItemTemplate | undefined { return this.templates.find(t => t.id === id); }
  getQuest(id: string): Quest | undefined { return this.quests.find(q => q.id === id); }
  getAchievement(id: string): AchievementDef | undefined { return this.achievements.find(a => a.id === id); }
  getStatusEffect(id: string): StatusEffectDef | undefined { return this.statusEffects.find(s => s.id === id); }
  getCollectible(id: string): CollectibleDef | undefined { return this.collectibles.find(c => c.id === id); }
  getSeries(id: string): CollectibleSeries | undefined { return this.series.find(s => s.id === id); }
  getBossAffix(id: string): BossAffixDef | undefined { return this.bossAffixes.find(a => a.id === id); }
  getBossByFloor(floor: number): BossDef | undefined { return this.bosses.find(b => b.floor === floor); }
  getDifficulty(id: string): DifficultyConfig | undefined { return this.difficulties.find(d => d.id === id); }
  getNpc(id: string): NpcDef | undefined { return this.npcs.find(n => n.id === id); }
  getRoomData(roomId: string): RoomDataFile | undefined { return this.roomData.get(roomId); }
  text(key: string): string { return this.data.texts[key] ?? key; }
}

export const dataManager = DataManager.getInstance();
