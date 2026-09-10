// src/data/gameConfig.json
var gameConfig_default = {
  playerBase: {
    maxHp: 1e3,
    attack: 30,
    defense: 15,
    critRate: 5,
    dodgeRate: 3
  },
  expFormula: {
    base: 20,
    power: 1.5
  },
  growthTable: [
    {
      minLevel: 1,
      maxLevel: 5,
      hp: 125,
      attack: 6,
      defense: 3
    },
    {
      minLevel: 6,
      maxLevel: 10,
      hp: 260,
      attack: 10,
      defense: 5
    },
    {
      minLevel: 11,
      maxLevel: 15,
      hp: 250,
      attack: 12,
      defense: 6
    },
    {
      minLevel: 16,
      maxLevel: 20,
      hp: 260,
      attack: 14,
      defense: 7
    },
    {
      minLevel: 21,
      maxLevel: 25,
      hp: 100,
      attack: 16,
      defense: 8
    },
    {
      minLevel: 26,
      maxLevel: 30,
      hp: 100,
      attack: 18,
      defense: 9
    },
    {
      minLevel: 31,
      maxLevel: 35,
      hp: 230,
      attack: 22,
      defense: 11
    },
    {
      minLevel: 36,
      maxLevel: 40,
      hp: 500,
      attack: 26,
      defense: 13
    },
    {
      minLevel: 41,
      maxLevel: 45,
      hp: 1e3,
      attack: 30,
      defense: 15
    },
    {
      minLevel: 46,
      maxLevel: 50,
      hp: 1e3,
      attack: 34,
      defense: 17
    },
    {
      minLevel: 51,
      maxLevel: 999,
      hp: 1200,
      attack: 38,
      defense: 19
    }
  ],
  floorAnchors: {
    floors: [
      1,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50
    ],
    hp: [
      165,
      310,
      485,
      685,
      900,
      1175,
      1500,
      1900,
      2400,
      3100,
      4150
    ],
    atk: [
      40,
      75,
      120,
      200,
      280,
      340,
      420,
      520,
      680,
      950,
      1300
    ],
    def: [
      7,
      14,
      21,
      30,
      40,
      52,
      66,
      84,
      106,
      136,
      183
    ],
    exp: [
      15,
      40,
      100,
      180,
      280,
      400,
      550,
      720,
      900,
      1100,
      1350
    ],
    gold: [
      20,
      20,
      45,
      90,
      90,
      160,
      160,
      275,
      275,
      425,
      425
    ],
    overflowPerFloor: {
      hp: 0.08,
      atk: 0.05,
      def: 0.05,
      exp: 0.08,
      gold: 0.05
    }
  },
  bossStatBonus: {
    hp: 0,
    atk: 0,
    def: 0
  },
  battle: {
    damageJitter: 0.1,
    critMultiplier: 1.8,
    maxTurns: 60,
    minDamage: 1,
    potionUsesPerBattle: 1
  },
  chestRewards: {
    goldBands: [
      {
        minFloor: 1,
        maxFloor: 5,
        min: 1,
        max: 5
      },
      {
        minFloor: 6,
        maxFloor: 10,
        min: 5,
        max: 15
      },
      {
        minFloor: 11,
        maxFloor: 20,
        min: 15,
        max: 40
      },
      {
        minFloor: 21,
        maxFloor: 30,
        min: 40,
        max: 80
      },
      {
        minFloor: 31,
        maxFloor: 40,
        min: 80,
        max: 150
      },
      {
        minFloor: 41,
        maxFloor: 9999,
        min: 150,
        max: 250
      }
    ],
    equipmentChance: 0.6,
    potionChance: 0.15,
    goldAlways: true
  },
  monsterDrops: {
    equipmentChance: 0.03,
    potionChance: 0.02
  },
  revive: {
    goldPenaltyRate: 0.2,
    hpRestorePct: 1
  },
  merchant: {
    potionCountMin: 2,
    potionCountMax: 4,
    keyPriceBase: 50,
    keyPricePer10Floors: 30,
    keyCountMin: 1,
    keyCountMax: 3,
    equipmentCountMin: 1,
    equipmentCountMax: 2
  },
  witch: {
    potionCountMin: 2,
    potionCountMax: 3,
    fountainCostBase: 40,
    fountainCostPerFloor: 12
  },
  render: {
    tileWidth: 64,
    tileHeight: 32,
    vignetteMax: 0.3,
    maxLights: 20,
    maxParticles: 1e3,
    gridLineWidth: 1,
    roomDecorDensity: 1
  },
  postProcess: {
    bloom: {
      enabled: true,
      strength: 0.5,
      radius: 0.45,
      threshold: 0.82
    },
    vignette: {
      enabled: true,
      strength: 0.3,
      offset: 1,
      darkness: 1.1
    },
    adjustment: {
      enabled: true,
      gamma: 1.05,
      contrast: 1.05,
      saturation: 1.1,
      brightness: 1
    }
  },
  shadow: {
    staticAlpha: 0.45,
    staticOffset: 3,
    baseOffset: 6,
    maxDynamic: 20,
    samples: 3,
    penumbra: 6,
    tyndall: {
      length: 150,
      width: 30,
      alpha: 0.13,
      dustMin: 5,
      dustMax: 10
    }
  },
  heights: {
    player: 45,
    monsterNormal: 38,
    monsterElite: 52,
    boss: 70,
    chest: 18,
    potion: 14,
    torch: 55,
    pillar: 70,
    npc: 42,
    stair: 10,
    carpet: 4,
    cauldron: 26,
    shelf: 46,
    fountain: 16,
    wallByRoom: {
      start: 60,
      combat: 65,
      elite: 75,
      chest: 55,
      merchant: 55,
      witch: 58,
      boss: 90,
      rest: 55,
      end: 60,
      blacksmith: 65
    },
    corridorWall: 75
  },
  raycast: {
    level: 2
  },
  camera: {
    lerp: 0.12,
    transitionMs: 400,
    roomPaddingPx: 24
  },
  camera3D: {
    fov: 45,
    distance: 5,
    height: 12.5
  },
  hover: {
    showDelayMs: 200,
    hideDelayMs: 300,
    offsetX: 12,
    offsetY: 12
  },
  save: {
    key: "motarpg_v2_save",
    version: "2.0.0",
    autosaveDefault: true
  },
  input: {
    moveRepeatMs: 110,
    moveBufferMs: 120
  }
};

// src/data/mapGeneration.json
var mapGeneration_default = {
  cellSpacingX: 13,
  cellSpacingY: 11,
  gridRadius: 2,
  floorRoomCounts: [
    {
      minFloor: 2,
      maxFloor: 5,
      min: 4,
      max: 6
    },
    {
      minFloor: 6,
      maxFloor: 10,
      min: 4,
      max: 8
    },
    {
      minFloor: 11,
      maxFloor: 20,
      min: 6,
      max: 8
    },
    {
      minFloor: 21,
      maxFloor: 9999,
      min: 6,
      max: 12
    }
  ],
  maxRooms: 12,
  bossFloorInterval: 5,
  initialFloor: 1,
  roomSpecs: {
    start: {
      width: 5,
      height: 5
    },
    end: {
      width: 6,
      height: 5
    },
    combat: {
      width: [
        7,
        9
      ],
      height: [
        6,
        7
      ]
    },
    elite: {
      width: [
        9,
        10
      ],
      height: [
        7,
        8
      ]
    },
    chest: {
      width: 5,
      height: 5
    },
    merchant: {
      width: 6,
      height: 6
    },
    witch: {
      width: [
        7,
        8
      ],
      height: [
        6,
        7
      ]
    },
    boss: {
      width: [
        9,
        10
      ],
      height: [
        7,
        8
      ]
    },
    rest: {
      width: 5,
      height: 5
    },
    blacksmith: {
      width: 6,
      height: 6
    }
  },
  minRoomWidth: 4,
  minRoomHeight: 4,
  tension: {
    weights: {
      combat: 1,
      elite: 2,
      chest: -1,
      merchant: -2,
      witch: -2,
      blacksmith: -2
    },
    forcePositiveAt: 5,
    forceNegativeAt: -4
  },
  merchantLimit: {
    fewMaxRooms: 7,
    fewCount: 1,
    manyCount: 2
  },
  witchLimit: {
    minFloor: 6,
    interval: 6
  },
  path: {
    maxLengthDiff: 2
  },
  corridor: {
    extraChance: 0.25,
    extraMax: 2,
    adjacentManhattan: 1
  },
  content: {
    monsterMinDistFromEntry: 3,
    smallAreaMax: 30,
    mediumAreaMax: 42,
    largeAreaMax: 56,
    density: {
      small: 3,
      medium: 4,
      large: 5,
      xlarge: 5
    },
    chestRoomMin: 2,
    chestRoomMax: 3,
    otherRoomChestChance: 0.35,
    eliteRoomEliteMin: 1,
    eliteRoomEliteMax: 2,
    bossRoomAddsMin: 0,
    bossRoomAddsMax: 2,
    combatByDepth: [
      {
        maxDepth: 1,
        monsters: [
          1,
          2
        ],
        elites: [
          0,
          0
        ],
        chests: [
          0,
          1
        ],
        potions: [
          0,
          1
        ]
      },
      {
        maxDepth: 2,
        monsters: [
          2,
          2
        ],
        elites: [
          0,
          1
        ],
        chests: [
          0,
          1
        ],
        potions: [
          1,
          1
        ]
      },
      {
        maxDepth: 3,
        monsters: [
          2,
          3
        ],
        elites: [
          1,
          1
        ],
        chests: [
          1,
          1
        ],
        potions: [
          1,
          1
        ]
      },
      {
        maxDepth: 9999,
        monsters: [
          3,
          4
        ],
        elites: [
          1,
          1
        ],
        chests: [
          1,
          1
        ],
        potions: [
          1,
          1
        ]
      }
    ],
    eliteRoom: {
      elites: [
        1,
        1
      ],
      monsters: [
        1,
        2
      ],
      chests: [
        1,
        2
      ],
      potions: [
        1,
        1
      ]
    },
    treasureRoom: {
      chests: [
        2,
        3
      ],
      monsters: [
        1,
        2
      ],
      potions: [
        1,
        2
      ]
    },
    merchantRoom: {
      chests: [
        0,
        1
      ],
      potions: [
        1,
        2
      ]
    },
    witchRoom: {
      shelves: [
        2,
        2
      ]
    },
    bossRoom: {
      elites: [
        0,
        2
      ],
      chests: [
        2,
        3
      ],
      potions: [
        2,
        4
      ]
    },
    exitRoom: {
      guards: [
        0,
        1
      ],
      chests: [
        0,
        2
      ],
      potions: [
        1,
        1
      ]
    },
    startRoom: {
      potions: [
        1,
        1
      ]
    },
    guard: {
      chestRadius: 2,
      stairRadius: 3
    },
    barrier: {
      fillWithPillars: true
    },
    roomTorches: {
      start: [
        2,
        4
      ],
      merchant: [
        4,
        4
      ],
      witch: [
        4,
        4
      ],
      boss: [
        6,
        8
      ],
      end: [
        4,
        4
      ],
      blacksmith: [
        3,
        3
      ]
    },
    furnish: {
      torchPerArea: 12,
      torchMax: 8,
      colonnadeMinInnerW: 5,
      colonnadeMinInnerH: 4,
      colonnadeSpacing: 3,
      colonnadeMax: 8,
      guideCarpet: true
    },
    risk: {
      sideBonus: 2,
      eliteBonus: 1,
      areaBonusAt: 70,
      depthBonusAt: 3,
      floorBonusEvery: 60,
      max: 3,
      rewardMul: [1, 1.35, 1.8],
      vaultChance: [0, 0.25, 0.6],
      relicMul: [1, 1.6, 2.4]
    }
  },
  decor: {
    torchCorridorEvery: 4,
    pillarMinRoomWidth: 7,
    carpetRooms: [
      "chest",
      "boss"
    ]
  },
  cliff: {
    minFloor: 4,
    chance: 0.3,
    minInnerArea: 20,
    patchMin: 1,
    patchMax: 3
  },
  generation: {
    maxAttempts: 40
  },
  blacksmithLimit: {
    minFloor: 4,
    interval: 4
  }
};

// src/data/monsters.json
var monsters_default = {
  monsters: [
    {
      id: "ancient_dragon",
      name: "\u8FDC\u53E4\u5DE8\u9F99",
      shape: "big_square",
      color: "#cc1122",
      category: "boss",
      floorMin: 101,
      floorMax: 9999,
      weight: 0,
      hpMul: 5,
      atkMul: 0.95,
      defMul: 1.2,
      goldMul: 5,
      expMul: 8,
      height: 70,
      description: "\u6C89\u7720\u4E8E\u5854\u9876\u4E4B\u4E0B\u7684\u707E\u5384\uFF0C\u7FFC\u5F71\u853D\u65E5\u3002"
    },
    {
      id: "slime",
      name: "\u53F2\u83B1\u59C6",
      shape: "circle",
      color: "#44cc44",
      category: "normal",
      floorMin: 1,
      floorMax: 8,
      weight: 30,
      hpMul: 1,
      atkMul: 0.9,
      defMul: 0.8,
      goldMul: 1,
      expMul: 1,
      height: 32,
      description: "\u6700\u5F31\u5C0F\u7684\u9B54\u7269\uFF0C\u67D4\u8F6F\u65E0\u9AA8\u3002\u5854\u5E95\u7816\u7F1D\u91CC\u5230\u5904\u90FD\u662F\u3002"
    },
    {
      id: "bat",
      name: "\u8759\u8760",
      shape: "circle",
      color: "#9955cc",
      category: "normal",
      floorMin: 1,
      floorMax: 12,
      weight: 26,
      hpMul: 0.7,
      atkMul: 1.1,
      defMul: 0.5,
      goldMul: 1,
      expMul: 1,
      height: 30,
      description: "\u7ED5\u7740\u9752\u7816\u62F1\u9876\u76D8\u65CB\u7684\u6697\u5F71\uFF0C\u653B\u51FB\u5201\u94BB\u3002"
    },
    {
      id: "skeleton",
      name: "\u9AB7\u9AC5\u5175",
      shape: "square",
      color: "#dddddd",
      category: "normal",
      floorMin: 3,
      floorMax: 15,
      weight: 24,
      hpMul: 1.2,
      atkMul: 1,
      defMul: 1.2,
      goldMul: 1.1,
      expMul: 1.1,
      height: 36,
      description: "\u780C\u8FDB\u7816\u5899\u7684\u65E7\u65E5\u5B88\u536B\uFF0C\u9AA8\u5934\u62FC\u6210\u7684\u6218\u8EAF\u3002"
    },
    {
      id: "brick_golem",
      name: "\u9752\u7816\u5080\u5121",
      shape: "square",
      color: "#6f7f8f",
      category: "normal",
      floorMin: 6,
      floorMax: 18,
      weight: 20,
      hpMul: 1.5,
      atkMul: 0.85,
      defMul: 1.35,
      goldMul: 1.2,
      expMul: 1.15,
      height: 42,
      description: "\u7531\u5854\u5E95\u9752\u7816\u81EA\u884C\u5806\u53E0\u800C\u6210\uFF0C\u6C89\u91CD\u800C\u8FDF\u949D\u3002"
    },
    {
      id: "gargoyle",
      name: "\u77F3\u50CF\u9B3C",
      shape: "square",
      color: "#888899",
      category: "normal",
      floorMin: 8,
      floorMax: 22,
      weight: 20,
      hpMul: 1.5,
      atkMul: 0.9,
      defMul: 1.3,
      goldMul: 1.2,
      expMul: 1.2,
      height: 42,
      description: "\u8E72\u5728\u6A90\u89D2\u7684\u77F3\u50CF\u7A81\u7136\u7741\u773C\uFF0C\u76AE\u7CD9\u8089\u539A\u3002"
    },
    {
      id: "sporeling",
      name: "\u5B62\u5B50\u5E7C\u82D7",
      shape: "circle",
      color: "#9ad97a",
      category: "normal",
      floorMin: 14,
      floorMax: 30,
      weight: 24,
      hpMul: 0.9,
      atkMul: 1,
      defMul: 0.8,
      goldMul: 1.1,
      expMul: 1.1,
      height: 34,
      description: "\u82D4\u56ED\u91CC\u4F1A\u8D70\u8DEF\u7684\u5B62\u5B50\u56CA\uFF0C\u9760\u8FD1\u4FBF\u70B8\u5F00\u3002"
    },
    {
      id: "vine_lasher",
      name: "\u85E4\u8513\u97AD\u7B1E\u8005",
      shape: "square",
      color: "#4f8a3a",
      category: "normal",
      floorMin: 16,
      floorMax: 34,
      weight: 22,
      hpMul: 1.25,
      atkMul: 1.3,
      defMul: 1,
      goldMul: 1.2,
      expMul: 1.2,
      height: 40,
      description: "\u7F20\u6EE1\u9508\u652F\u67B6\u7684\u85E4\u8513\uFF0C\u62BD\u6253\u8D77\u6765\u5E26\u7740\u98CE\u58F0\u3002"
    },
    {
      id: "shadow_wolf",
      name: "\u6697\u5F71\u72FC",
      shape: "square",
      color: "#3344aa",
      category: "normal",
      floorMin: 12,
      floorMax: 35,
      weight: 22,
      hpMul: 1.1,
      atkMul: 1.4,
      defMul: 0.8,
      goldMul: 1.2,
      expMul: 1.2,
      height: 40,
      description: "\u5728\u82D4\u5F84\u95F4\u75BE\u884C\u7684\u730E\u624B\uFF0C\u6495\u54AC\u81F4\u547D\u3002"
    },
    {
      id: "hellhound",
      name: "\u5730\u72F1\u72AC",
      shape: "square",
      color: "#ff6622",
      category: "normal",
      floorMin: 18,
      floorMax: 40,
      weight: 20,
      hpMul: 1.3,
      atkMul: 1.5,
      defMul: 1,
      goldMul: 1.3,
      expMul: 1.3,
      height: 44,
      description: "\u4ECE\u953B\u7089\u91CC\u722C\u51FA\u6765\u7684\u6076\u72AC\uFF0C\u5410\u606F\u707C\u4EBA\u3002"
    },
    {
      id: "anvil_husk",
      name: "\u94C1\u7827\u6B8B\u8EAF",
      shape: "square",
      color: "#6b7280",
      category: "normal",
      floorMin: 28,
      floorMax: 42,
      weight: 18,
      hpMul: 1.7,
      atkMul: 1.05,
      defMul: 1.5,
      goldMul: 1.3,
      expMul: 1.25,
      height: 46,
      description: "\u88AB\u953B\u9524\u7838\u788E\u53C8\u81EA\u5DF1\u62FC\u56DE\u7684\u9020\u7269\uFF0C\u51E0\u4E4E\u6253\u4E0D\u70C2\u3002"
    },
    {
      id: "paper_wisp",
      name: "\u7EB8\u9875\u5E7D\u5F71",
      shape: "circle",
      color: "#e8e2d0",
      category: "normal",
      floorMin: 38,
      floorMax: 52,
      weight: 24,
      hpMul: 0.85,
      atkMul: 1.2,
      defMul: 0.7,
      goldMul: 1.2,
      expMul: 1.2,
      height: 34,
      description: "\u6495\u788E\u7684\u9875\u5F20\u805A\u6210\u5F71\uFF0C\u7EB8\u7F18\u950B\u5229\u5982\u5203\u3002"
    },
    {
      id: "ink_blot",
      name: "\u58A8\u6E0D\u602A",
      shape: "circle",
      color: "#3a3f6b",
      category: "normal",
      floorMin: 40,
      floorMax: 56,
      weight: 22,
      hpMul: 1.2,
      atkMul: 1.15,
      defMul: 1.1,
      goldMul: 1.25,
      expMul: 1.25,
      height: 36,
      description: "\u6253\u7FFB\u7684\u58A8\u6C60\u751F\u4E86\u7075\uFF0C\u9ECF\u7A20\u96BE\u7F20\u3002"
    },
    {
      id: "tome_guardian",
      name: "\u5178\u7C4D\u5B88\u536B",
      shape: "square",
      color: "#8a6a3a",
      category: "normal",
      floorMin: 44,
      floorMax: 60,
      weight: 20,
      hpMul: 1.6,
      atkMul: 1.1,
      defMul: 1.45,
      goldMul: 1.3,
      expMul: 1.3,
      height: 44,
      description: "\u5408\u62E2\u7684\u5DE8\u518C\u7ACB\u8D77\u6765\uFF0C\u4E66\u810A\u5C31\u662F\u5B83\u7684\u76FE\u3002"
    },
    {
      id: "forbidden_script",
      name: "\u7981\u4E66\u94ED\u6587",
      shape: "square",
      color: "#7a3fbf",
      category: "normal",
      floorMin: 52,
      floorMax: 64,
      weight: 18,
      hpMul: 1.05,
      atkMul: 1.5,
      defMul: 0.95,
      goldMul: 1.35,
      expMul: 1.35,
      height: 38,
      description: "\u4E0D\u8BE5\u88AB\u8BFB\u51FA\u7684\u5B57\u53E5\u6D6E\u5728\u7A7A\u6C14\u91CC\uFF0C\u8D8A\u5FF5\u8D8A\u51F6\u3002"
    },
    {
      id: "stardust_sprite",
      name: "\u661F\u5C51\u7CBE\u7075",
      shape: "circle",
      color: "#bcd4ff",
      category: "normal",
      floorMin: 58,
      floorMax: 72,
      weight: 24,
      hpMul: 0.8,
      atkMul: 1.3,
      defMul: 0.75,
      goldMul: 1.3,
      expMul: 1.3,
      height: 34,
      description: "\u4ECE\u89C2\u661F\u53F0\u7684\u7A79\u9876\u843D\u4E0B\u7684\u788E\u661F\uFF0C\u5FFD\u660E\u5FFD\u6697\u3002"
    },
    {
      id: "comet_hound",
      name: "\u5F57\u661F\u730E\u72AC",
      shape: "circle",
      color: "#6ea8ff",
      category: "normal",
      floorMin: 60,
      floorMax: 76,
      weight: 22,
      hpMul: 1.15,
      atkMul: 1.45,
      defMul: 0.9,
      goldMul: 1.3,
      expMul: 1.3,
      height: 40,
      description: "\u62D6\u7740\u957F\u957F\u5149\u5C3E\u6251\u6765\uFF0C\u649E\u4E0A\u4FBF\u662F\u707C\u75D5\u3002"
    },
    {
      id: "orrery_sentinel",
      name: "\u6D51\u5929\u4EEA\u54E8\u536B",
      shape: "square",
      color: "#4a5b8a",
      category: "normal",
      floorMin: 66,
      floorMax: 80,
      weight: 20,
      hpMul: 1.6,
      atkMul: 1.15,
      defMul: 1.5,
      goldMul: 1.35,
      expMul: 1.35,
      height: 46,
      description: "\u73AF\u73AF\u76F8\u5957\u7684\u94DC\u4EEA\u81EA\u884C\u8F6C\u52A8\uFF0C\u628A\u95EF\u5165\u8005\u5708\u8FDB\u661F\u8F68\u3002"
    },
    {
      id: "void_gazer",
      name: "\u865A\u7A7A\u51DD\u89C6\u8005",
      shape: "square",
      color: "#2a2550",
      category: "normal",
      floorMin: 72,
      floorMax: 84,
      weight: 18,
      hpMul: 1.3,
      atkMul: 1.35,
      defMul: 1.1,
      goldMul: 1.4,
      expMul: 1.4,
      height: 44,
      description: "\u661F\u4E0E\u661F\u4E4B\u95F4\u7684\u7A7A\u767D\u7741\u5F00\u4E86\u773C\u3002"
    },
    {
      id: "gear_hound",
      name: "\u9F7F\u8F6E\u730E\u72AC",
      shape: "square",
      color: "#9aa6b4",
      category: "normal",
      floorMin: 78,
      floorMax: 92,
      weight: 24,
      hpMul: 1.05,
      atkMul: 1.35,
      defMul: 1,
      goldMul: 1.35,
      expMul: 1.35,
      height: 40,
      description: "\u54AC\u5408\u7740\u4E0B\u4E00\u679A\u9F7F\u8F6E\u5954\u8DD1\uFF0C\u9F7F\u7259\u5C31\u662F\u5B83\u7684\u5634\u3002"
    },
    {
      id: "pendulum_husk",
      name: "\u949F\u6446\u884C\u5211\u8005",
      shape: "square",
      color: "#6f5a3a",
      category: "normal",
      floorMin: 80,
      floorMax: 96,
      weight: 22,
      hpMul: 1.5,
      atkMul: 1.4,
      defMul: 1.15,
      goldMul: 1.4,
      expMul: 1.4,
      height: 46,
      description: "\u60AC\u5728\u949F\u5BA4\u7684\u5DE8\u6446\u6709\u4E86\u610F\u5FD7\uFF0C\u8D77\u843D\u5373\u5224\u51B3\u3002"
    },
    {
      id: "chime_wraith",
      name: "\u949F\u9E23\u6028\u7075",
      shape: "circle",
      color: "#a0b0c8",
      category: "normal",
      floorMin: 84,
      floorMax: 100,
      weight: 20,
      hpMul: 1.15,
      atkMul: 1.5,
      defMul: 0.95,
      goldMul: 1.4,
      expMul: 1.4,
      height: 38,
      description: "\u6BCF\u4E00\u58F0\u949F\u9E23\u90FD\u4F1A\u5E26\u8D70\u4E00\u4E2A\u540D\u5B57\u3002"
    },
    {
      id: "clockwork_sentinel",
      name: "\u53D1\u6761\u54E8\u5175",
      shape: "square",
      color: "#8d99a8",
      category: "normal",
      floorMin: 90,
      floorMax: 100,
      weight: 18,
      hpMul: 1.9,
      atkMul: 1.1,
      defMul: 1.6,
      goldMul: 1.5,
      expMul: 1.5,
      height: 48,
      description: "\u4E0A\u4E86\u53D1\u6761\u7684\u5B88\u536B\uFF0C\u8D70\u5B8C\u6700\u540E\u4E00\u6B65\u4E5F\u4E0D\u4F1A\u505C\u3002"
    },
    {
      id: "dark_knight",
      name: "\u6697\u9ED1\u9A91\u58EB",
      shape: "square",
      color: "#aa1133",
      category: "normal",
      floorMin: 81,
      floorMax: 9999,
      weight: 18,
      hpMul: 1.8,
      atkMul: 1.2,
      defMul: 1.4,
      goldMul: 1.4,
      expMul: 1.4,
      height: 48,
      description: "\u5815\u843D\u7684\u9A91\u58EB\u5728\u949F\u58F0\u91CC\u5F98\u5F8A\uFF0C\u653B\u9632\u517C\u5907\u3002"
    },
    {
      id: "light_simulacrum",
      name: "\u5149\u4E4B\u62DF\u50CF",
      shape: "circle",
      color: "#f0e9d8",
      category: "normal",
      floorMin: 96,
      floorMax: 9999,
      weight: 24,
      hpMul: 1.2,
      atkMul: 1.45,
      defMul: 1.05,
      goldMul: 1.5,
      expMul: 1.5,
      height: 38,
      description: "\u4E0E\u4F60\u4E00\u6A21\u4E00\u6837\u7684\u5149\u5F71\uFF0C\u8FDE\u547C\u5438\u90FD\u5B66\u5F97\u4F1A\u3002"
    },
    {
      id: "tower_spirit",
      name: "\u5854\u7075",
      shape: "circle",
      color: "#cfd8ff",
      category: "normal",
      floorMin: 101,
      floorMax: 9999,
      weight: 22,
      hpMul: 1.5,
      atkMul: 1.3,
      defMul: 1.35,
      goldMul: 1.5,
      expMul: 1.5,
      height: 42,
      description: "\u6574\u5EA7\u5854\u7684\u610F\u5FD7\u51DD\u6210\u4EBA\u5F62\uFF0C\u8BA4\u5F97\u6BCF\u4E00\u4E2A\u6500\u767B\u8005\u3002"
    },
    {
      id: "fate_weaver",
      name: "\u547D\u8FD0\u7EC7\u8005",
      shape: "square",
      color: "#b47ad6",
      category: "normal",
      floorMin: 101,
      floorMax: 9999,
      weight: 20,
      hpMul: 1.3,
      atkMul: 1.55,
      defMul: 1.1,
      goldMul: 1.55,
      expMul: 1.55,
      height: 44,
      description: "\u5728\u5854\u9876\u62BD\u4E1D\u5F15\u7EBF\uFF0C\u628A\u4F60\u7684\u6BCF\u4E00\u6B65\u90FD\u7B97\u8FDB\u53BB\u3002"
    },
    {
      id: "final_shade",
      name: "\u7EC8\u7109\u4E4B\u5F71",
      shape: "square",
      color: "#1c1f2e",
      category: "normal",
      floorMin: 101,
      floorMax: 9999,
      weight: 16,
      hpMul: 2,
      atkMul: 1.35,
      defMul: 1.7,
      goldMul: 1.6,
      expMul: 1.6,
      height: 50,
      description: "\u5854\u9876\u4E4B\u5916\u7684\u4E1C\u897F\u6295\u4E0B\u7684\u5F71\u5B50\uFF0C\u770B\u4E0D\u771F\u5207\u3002"
    },
    {
      id: "brick_colossus",
      name: "\u9752\u7816\u5DE8\u50CF",
      shape: "big_square",
      color: "#5d6b7a",
      category: "boss",
      floorMin: 5,
      floorMax: 15,
      weight: 0,
      hpMul: 4.2,
      atkMul: 0.95,
      defMul: 1.15,
      goldMul: 4.2,
      expMul: 7,
      height: 64,
      description: "\u5854\u5E95\u7816\u77F3\u7684\u96C6\u5408\u610F\u5FD7\uFF0C\u6491\u8D77\u4E86\u6574\u5EA7\u5854\u7684\u7B2C\u4E00\u5C42\u3002"
    },
    {
      id: "furnace_titan",
      name: "\u7194\u7089\u5DE8\u50CF",
      shape: "big_square",
      color: "#d0662a",
      category: "boss",
      floorMin: 20,
      floorMax: 40,
      weight: 0,
      hpMul: 4.6,
      atkMul: 1,
      defMul: 1.2,
      goldMul: 4.4,
      expMul: 7.2,
      height: 66,
      description: "\u953B\u7A9F\u7684\u5FC3\u810F\uFF0C\u80F8\u8154\u91CC\u70E7\u7740\u6C38\u4E0D\u7184\u706D\u7684\u7089\u706B\u3002"
    },
    {
      id: "index_warden",
      name: "\u7D22\u5F15\u5178\u5B88",
      shape: "big_square",
      color: "#8a6a3a",
      category: "boss",
      floorMin: 45,
      floorMax: 60,
      weight: 0,
      hpMul: 4.5,
      atkMul: 1,
      defMul: 1.15,
      goldMul: 4.4,
      expMul: 7.4,
      height: 66,
      description: "\u56FE\u4E66\u9986\u6240\u6709\u4E66\u9875\u7684\u7D22\u5F15\uFF0C\u8BB0\u5F55\u7740\u4F60\u4E0D\u8BE5\u77E5\u9053\u7684\u540D\u5B57\u3002"
    },
    {
      id: "star_forger",
      name: "\u94F8\u661F\u8005",
      shape: "big_square",
      color: "#6ea8ff",
      category: "boss",
      floorMin: 65,
      floorMax: 80,
      weight: 0,
      hpMul: 4.8,
      atkMul: 1,
      defMul: 1.2,
      goldMul: 4.6,
      expMul: 7.6,
      height: 68,
      description: "\u5728\u89C2\u661F\u53F0\u4E0A\u6572\u6253\u771F\u6B63\u7684\u661F\u661F\uFF0C\u706B\u82B1\u843D\u6210\u6D41\u661F\u3002"
    },
    {
      id: "gear_overlord",
      name: "\u9F7F\u8F6E\u9738\u4E3B",
      shape: "big_square",
      color: "#9aa6b4",
      category: "boss",
      floorMin: 85,
      floorMax: 100,
      weight: 0,
      hpMul: 5,
      atkMul: 1,
      defMul: 1.25,
      goldMul: 4.8,
      expMul: 7.8,
      height: 70,
      description: "\u949F\u697C\u5168\u90E8\u9F7F\u8F6E\u7684\u7EDF\u5FA1\u8005\uFF0C\u5B83\u7684\u5FC3\u8DF3\u5C31\u662F\u5854\u7684\u8282\u62CD\u3002"
    }
  ],
  eliteStatMultiplier: 1.25,
  eliteGoldMultiplier: 2,
  eliteExpMultiplier: 2.5
};

// src/data/potions.json
var potions_default = {
  potions: [
    { tier: "crude", name: "\u52A3\u8D28\u836F\u6C34", healPct: 0.2, price: 20, color: "#dd6688", minFloor: 1, maxFloor: 5, icon: "\u{1F9EA}" },
    { tier: "normal", name: "\u666E\u901A\u836F\u6C34", healPct: 0.3, price: 40, color: "#ee3344", minFloor: 3, maxFloor: 15, icon: "\u{1F9EA}" },
    { tier: "quality", name: "\u4F18\u8D28\u836F\u6C34", healPct: 0.45, price: 100, color: "#bb1133", minFloor: 10, maxFloor: 30, icon: "\u{1F9EA}" },
    { tier: "strong", name: "\u5F3A\u6548\u836F\u6C34", healPct: 0.6, price: 250, color: "#990033", minFloor: 25, maxFloor: 40, icon: "\u2697\uFE0F" },
    { tier: "holy", name: "\u5723\u836F", healPct: 0.8, price: 600, color: "#ffdd44", minFloor: 40, maxFloor: 9999, icon: "\u2697\uFE0F" }
  ]
};

// src/data/equipmentTables.json
var equipmentTables_default = {
  qualityOrder: ["poor", "common", "fine", "rare", "epic", "legendary", "mythic"],
  quality: {
    poor: { name: "\u7834\u70C2", color: "#9e9e9e", statMultiplier: 0.6, affixCount: 0, affixCountMax: 0, sellMultiplier: 0.2, prefix: "\u7834\u65E7\u7684", basePrice: 5 },
    common: { name: "\u666E\u901A", color: "#ffffff", statMultiplier: 1, affixCount: 0, affixCountMax: 0, sellMultiplier: 1, prefix: "", basePrice: 10 },
    fine: { name: "\u4F18\u79C0", color: "#4488ff", statMultiplier: 1.4, affixCount: 1, affixCountMax: 1, sellMultiplier: 2, prefix: "\u7CBE\u826F\u7684", basePrice: 30 },
    rare: { name: "\u7A00\u6709", color: "#aa44ff", statMultiplier: 1.9, affixCount: 2, affixCountMax: 3, sellMultiplier: 4, prefix: "\u4F18\u8D28\u7684", basePrice: 80, affixExtra: [{ atEquipLevel: 20, add: 1 }] },
    epic: { name: "\u53F2\u8BD7", color: "#ffaa00", statMultiplier: 2.5, affixCount: 3, affixCountMax: 5, sellMultiplier: 8, prefix: "\u7CBE\u5236\u7684", basePrice: 200, affixExtra: [{ atEquipLevel: 15, add: 1 }] },
    legendary: { name: "\u4F20\u8BF4", color: "#ff5533", statMultiplier: 3.5, affixCount: 4, affixCountMax: 7, sellMultiplier: 16, prefix: "\u5B8C\u7F8E\u7684", basePrice: 500, affixExtra: [{ atEquipLevel: 10, add: 1 }] },
    mythic: { name: "\u795E\u8BDD", color: "#ff44dd", statMultiplier: 5, affixCount: 4, affixCountMax: 4, sellMultiplier: 35, prefix: "\u65E0\u53CC\u7684", basePrice: 1200 }
  },
  qualityByFloor: [
    { minFloor: 1, maxFloor: 5, weights: { poor: 45, common: 40, fine: 12, rare: 3, epic: 0, legendary: 0, mythic: 0 } },
    { minFloor: 6, maxFloor: 10, weights: { poor: 10, common: 50, fine: 28, rare: 10, epic: 2, legendary: 0, mythic: 0 } },
    { minFloor: 11, maxFloor: 20, weights: { poor: 1, common: 35, fine: 35, rare: 20, epic: 8, legendary: 1, mythic: 0 } },
    { minFloor: 21, maxFloor: 30, weights: { poor: 1, common: 15, fine: 31, rare: 30, epic: 18, legendary: 5, mythic: 0 } },
    { minFloor: 31, maxFloor: 40, weights: { poor: 0, common: 5, fine: 20, rare: 30, epic: 30, legendary: 15, mythic: 0 } },
    { minFloor: 41, maxFloor: 50, weights: { poor: 0, common: 0, fine: 10, rare: 25, epic: 35, legendary: 29.5, mythic: 0.5 } },
    { minFloor: 51, maxFloor: 9999, weights: { poor: 0, common: 0, fine: 8, rare: 22, epic: 33, legendary: 35, mythic: 2 } }
  ],
  affixes: [
    { type: "sharp", name: "\u950B\u5229", minQuality: "fine", isPercent: false, bands: [{ maxEquipLevel: 10, min: 3, max: 8 }, { maxEquipLevel: 25, min: 8, max: 20 }, { maxEquipLevel: 40, min: 20, max: 40 }, { maxEquipLevel: 50, min: 40, max: 70 }], description: "\u653B\u51FB +{v}" },
    { type: "sturdy", name: "\u575A\u56FA", minQuality: "fine", isPercent: false, bands: [{ maxEquipLevel: 10, min: 2, max: 5 }, { maxEquipLevel: 25, min: 5, max: 12 }, { maxEquipLevel: 40, min: 12, max: 25 }, { maxEquipLevel: 50, min: 25, max: 45 }], description: "\u9632\u5FA1 +{v}" },
    { type: "vitality", name: "\u6D3B\u529B", minQuality: "fine", isPercent: false, bands: [{ maxEquipLevel: 10, min: 15, max: 40 }, { maxEquipLevel: 25, min: 40, max: 100 }, { maxEquipLevel: 40, min: 100, max: 200 }, { maxEquipLevel: 50, min: 200, max: 350 }], description: "\u751F\u547D +{v}" },
    { type: "precision", name: "\u7CBE\u51C6", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 3 }, { maxEquipLevel: 25, min: 3, max: 5 }, { maxEquipLevel: 40, min: 5, max: 7 }, { maxEquipLevel: 50, min: 7, max: 10 }], description: "\u66B4\u51FB\u7387 +{v}%" },
    { type: "agility", name: "\u7075\u5DE7", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 2 }, { maxEquipLevel: 25, min: 2, max: 4 }, { maxEquipLevel: 40, min: 4, max: 6 }, { maxEquipLevel: 50, min: 6, max: 8 }], description: "\u95EA\u907F\u7387 +{v}%" },
    { type: "savage", name: "\u5F3A\u653B", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 2, max: 4 }, { maxEquipLevel: 25, min: 4, max: 7 }, { maxEquipLevel: 40, min: 7, max: 10 }, { maxEquipLevel: 50, min: 10, max: 15 }], description: "\u653B\u51FB +{v}%" },
    { type: "fortress", name: "\u94C1\u58C1", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 3 }, { maxEquipLevel: 25, min: 3, max: 5 }, { maxEquipLevel: 40, min: 5, max: 8 }, { maxEquipLevel: 50, min: 8, max: 12 }], description: "\u9632\u5FA1 +{v}%" },
    { type: "lifesteal", name: "\u55DC\u8840", minQuality: "epic", isPercent: true, bands: [{ maxEquipLevel: 10, min: 1, max: 2 }, { maxEquipLevel: 25, min: 2, max: 3 }, { maxEquipLevel: 40, min: 3, max: 4 }, { maxEquipLevel: 50, min: 4, max: 6 }], description: "\u653B\u51FB\u56DE\u590D\u751F\u547D {v}%" },
    { type: "hellfire", name: "\u4E1A\u706B", minQuality: "rare", isPercent: false, bands: [{ maxEquipLevel: 10, min: 3, max: 8 }, { maxEquipLevel: 25, min: 8, max: 18 }, { maxEquipLevel: 40, min: 18, max: 35 }, { maxEquipLevel: 50, min: 35, max: 60 }], description: "\u9644\u52A0\u706B\u7130\u4F24\u5BB3 {v}" },
    { type: "greed", name: "\u8D2A\u5A6A", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 5, max: 10 }, { maxEquipLevel: 25, min: 10, max: 15 }, { maxEquipLevel: 40, min: 15, max: 20 }, { maxEquipLevel: 50, min: 20, max: 30 }], description: "\u91D1\u5E01\u83B7\u53D6 +{v}%" },
    { type: "wisdom", name: "\u535A\u5B66", minQuality: "rare", isPercent: true, bands: [{ maxEquipLevel: 10, min: 5, max: 10 }, { maxEquipLevel: 25, min: 10, max: 15 }, { maxEquipLevel: 40, min: 15, max: 20 }, { maxEquipLevel: 50, min: 20, max: 30 }], description: "\u7ECF\u9A8C\u83B7\u53D6 +{v}%" },
    { type: "dragonslayer", name: "\u5C60\u9F99", minQuality: "epic", isPercent: true, bands: [{ maxEquipLevel: 10, min: 5, max: 10 }, { maxEquipLevel: 25, min: 10, max: 15 }, { maxEquipLevel: 40, min: 15, max: 20 }, { maxEquipLevel: 50, min: 20, max: 30 }], description: "\u5BF9Boss\u4F24\u5BB3 +{v}%" }
  ],
  weaponTable: [
    { minEquipLevel: 1, maxEquipLevel: 5, values: { poor: [2, 5], common: [4, 8], fine: [8, 15], rare: [15, 25], epic: null, legendary: null } },
    { minEquipLevel: 6, maxEquipLevel: 10, values: { poor: [5, 8], common: [8, 15], fine: [15, 25], rare: [25, 40], epic: [40, 55], legendary: null } },
    { minEquipLevel: 11, maxEquipLevel: 20, values: { poor: null, common: [15, 25], fine: [25, 40], rare: [40, 60], epic: [60, 85], legendary: [85, 120] } },
    { minEquipLevel: 21, maxEquipLevel: 30, values: { poor: null, common: [25, 35], fine: [35, 55], rare: [55, 80], epic: [80, 110], legendary: [110, 160] } },
    { minEquipLevel: 31, maxEquipLevel: 40, values: { poor: null, common: null, fine: [45, 65], rare: [65, 95], epic: [95, 140], legendary: [140, 200] } },
    { minEquipLevel: 41, maxEquipLevel: 50, values: { poor: null, common: null, fine: [60, 80], rare: [80, 120], epic: [120, 180], legendary: [180, 280] } }
  ],
  armorTable: [
    { minEquipLevel: 1, maxEquipLevel: 5, values: { poor: [1, 3], common: [2, 5], fine: [4, 8], rare: [6, 12], epic: null, legendary: null } },
    { minEquipLevel: 6, maxEquipLevel: 10, values: { poor: [2, 4], common: [4, 8], fine: [8, 14], rare: [12, 20], epic: [18, 28], legendary: null } },
    { minEquipLevel: 11, maxEquipLevel: 20, values: { poor: null, common: [8, 14], fine: [14, 22], rare: [20, 30], epic: [30, 45], legendary: [45, 60] } },
    { minEquipLevel: 21, maxEquipLevel: 30, values: { poor: null, common: [14, 20], fine: [20, 30], rare: [30, 45], epic: [45, 60], legendary: [60, 85] } },
    { minEquipLevel: 31, maxEquipLevel: 40, values: { poor: null, common: null, fine: [25, 35], rare: [35, 55], epic: [55, 75], legendary: [75, 110] } },
    { minEquipLevel: 41, maxEquipLevel: 50, values: { poor: null, common: null, fine: [35, 45], rare: [45, 65], epic: [65, 95], legendary: [95, 140] } }
  ],
  mythicFromLegendary: 1.43,
  accessoryTable: [
    { minEquipLevel: 1, maxEquipLevel: 5, values: { poor: [0.5, 1], common: [1, 1.5], fine: [1.5, 2.5], rare: [2.5, 4], epic: null, legendary: null } },
    { minEquipLevel: 6, maxEquipLevel: 10, values: { poor: [0.8, 1.5], common: [1.5, 2.5], fine: [2.5, 4], rare: [4, 6], epic: [6, 8], legendary: null } },
    { minEquipLevel: 11, maxEquipLevel: 20, values: { poor: null, common: [2, 3.5], fine: [3.5, 5.5], rare: [5.5, 8], epic: [8, 11], legendary: [11, 14] } },
    { minEquipLevel: 21, maxEquipLevel: 30, values: { poor: null, common: [2.5, 4.5], fine: [4.5, 7], rare: [7, 10], epic: [10, 14], legendary: [14, 18] } },
    { minEquipLevel: 31, maxEquipLevel: 40, values: { poor: null, common: null, fine: [5.5, 8.5], rare: [8.5, 12], epic: [12, 16], legendary: [16, 21] } },
    { minEquipLevel: 41, maxEquipLevel: 50, values: { poor: null, common: null, fine: [6.5, 10], rare: [10, 14], epic: [14, 19], legendary: [19, 24] } }
  ],
  slotWeights: { weapon: 40, armor: 40, accessory: 20 },
  accessoryStatWeights: { crit: 50, dodge: 50 },
  baseNames: {
    weapon: [
      { minEquipLevel: 1, maxEquipLevel: 10, names: ["\u94C1\u5251"] },
      { minEquipLevel: 11, maxEquipLevel: 20, names: ["\u9614\u5251"] },
      { minEquipLevel: 21, maxEquipLevel: 30, names: ["\u957F\u5251"] },
      { minEquipLevel: 31, maxEquipLevel: 40, names: ["\u7B26\u6587\u5251"] },
      { minEquipLevel: 41, maxEquipLevel: 50, names: ["\u9F99\u9B42\u5251"] }
    ],
    armor: [
      { minEquipLevel: 1, maxEquipLevel: 10, names: ["\u80F8\u7532"] },
      { minEquipLevel: 11, maxEquipLevel: 20, names: ["\u9CDE\u7532"] },
      { minEquipLevel: 21, maxEquipLevel: 30, names: ["\u677F\u7532"] },
      { minEquipLevel: 31, maxEquipLevel: 40, names: ["\u7B26\u6587\u7532"] },
      { minEquipLevel: 41, maxEquipLevel: 50, names: ["\u9F99\u9CDE\u7532"] }
    ],
    accessory: [
      { minEquipLevel: 1, maxEquipLevel: 10, names: ["\u62A4\u7B26"] },
      { minEquipLevel: 11, maxEquipLevel: 20, names: ["\u6307\u73AF"] },
      { minEquipLevel: 21, maxEquipLevel: 30, names: ["\u5FBD\u8BB0"] },
      { minEquipLevel: 31, maxEquipLevel: 40, names: ["\u7B26\u77F3"] },
      { minEquipLevel: 41, maxEquipLevel: 50, names: ["\u661F\u73AF"] }
    ]
  },
  equipLevelFormula: { playerLevelFactor: 0.5, floorFactor: 1, randomMin: -2, randomMax: 3, min: 1, max: 50 },
  buyPriceRule: { sellMultiplier: 1.6, min: 100, max: 5e3 },
  affixSpecial: { mythicAffixCount: 4 }
};

// src/data/npcs.json
var npcs_default = {
  npcs: [
    {
      id: "npc_guide",
      name: "\u5F15\u5BFC\u8005\xB7\u827E\u767B",
      color: "#44dd99",
      lines: [
        "\u6B22\u8FCE\u6765\u5230\u65E0\u5C3D\u4E4B\u5854\uFF0C\u52C7\u8005\u3002\u8FD9\u5EA7\u5854\u6BCF\u5C42\u90FD\u7531\u65E0\u6570\u623F\u95F4\u6784\u6210\uFF0C\u8DEF\u5F84\u7531\u4F60\u9009\u62E9\u3002",
        "\u7528 WASD \u6216\u65B9\u5411\u952E\u79FB\u52A8\uFF0C\u649E\u4E0A\u602A\u7269\u5373\u4F1A\u5C55\u5F00\u6218\u6597\u3002\u5DE6\u952E\u4E5F\u80FD\u76F4\u63A5\u70B9\u9009\u76EE\u6807\u3002",
        "\u5B9D\u7BB1\u4E0E\u5546\u4EBA\u4F1A\u7ED9\u4F60\u8865\u7ED9\u3002\u88C5\u5907\u54C1\u8D28\u4ECE\u7834\u70C2\u5230\u795E\u8BDD\u5171\u4E03\u6863\uFF0C\u4ED4\u7EC6\u5BF9\u6BD4\u518D\u7A7F\u6234\u3002",
        "\u697C\u68AF\u5728\u7EC8\u70B9\u623F\u95F4\u3002\u613F\u4F60\u811A\u4E0B\u751F\u98CE\uFF0C\u5251\u4E0B\u65E0\u60C5\u3002",
        "\u5BF9\u4E86\u2014\u2014\u6B7B\u4EA1\u4E0D\u662F\u7EC8\u70B9\u3002\u5854\u4F1A\u7ED9\u4F60\u91CD\u6765\u7684\u673A\u4F1A\uFF0C\u4F46\u4F1A\u6536\u8D70\u4E00\u90E8\u5206\u91D1\u5E01\u3002"
      ],
      portrait: "img/eden.png"
    },
    {
      id: "npc_merchant",
      name: "\u5546\u4EBA\xB7\u8001\u53E4",
      color: "#44dd66",
      isMerchant: true,
      lines: [
        "\u54DF\uFF0C\u5BA2\u4EBA\uFF01\u7A00\u7F55\u7269\u4EF6\u5E94\u6709\u5C3D\u6709\uFF0C\u770B\u770B\uFF1F",
        "\u836F\u6C34\u6309\u697C\u5C42\u8FDB\u65B0\u8D27\uFF0C\u65E9\u4E70\u65E9\u5B89\u5FC3\u3002",
        "\u94A5\u5319\u4E0D\u5ACC\u591A\uFF0C\u5B9D\u7BB1\u53EF\u7B49\u4E0D\u4E86\u4EBA\u3002"
      ]
    },
    {
      id: "npc_witch",
      name: "\u5973\u5DEB\xB7\u8587\u8587\u5B89",
      color: "#c78cff",
      isWitch: true,
      lines: [
        "\u5618\u2014\u2014\u522B\u78B0\u6211\u7684\u9505\uFF0C\u90A3\u6C64\u836F\u8FD8\u6CA1\u9192\u3002",
        "\u5854\u91CC\u7684\u602A\u7269\u8D8A\u6DF1\u8D8A\u51F6\uFF0C\u6211\u7684\u836F\u6C34\u5374\u8D8A\u6DF1\u8D8A\u7075\u3002\u8981\u8BD5\u8BD5\u5417\uFF1F",
        "\u65C1\u8FB9\u90A3\u53E3\u6CC9\u6C34\u80FD\u6D17\u53BB\u4F60\u7684\u4F24\uFF0C\u4E0D\u8FC7\u2026\u2026\u5F97\u4ED8\u70B9\u91D1\u5B50\u3002"
      ]
    },
    {
      id: "npc_blacksmith",
      name: "\u94C1\u5320\xB7\u970D\u6069",
      color: "#ff9a3d",
      isBlacksmith: true,
      lines: [
        "\u94C1\u7827\u4E0D\u9A97\u4EBA\u3002\u5251\u662F\u597D\u5251\uFF0C\u5C31\u662F\u8FD8\u5DEE\u53E3\u6C14\u2014\u2014\u4EA4\u7ED9\u6211\u3002",
        "\u91CD\u94F8\u8BCD\u6761\u3001\u9524\u70BC\u7B49\u7EA7\u3001\u6DEC\u706B\u63D0\u54C1\u8D28\uFF0C\u90FD\u884C\uFF0C\u6536\u8D39\u516C\u9053\u3002",
        "\u5148\u8BF4\u597D\uFF1A\u53F2\u8BD7\u5F80\u4E0A\u7684\u795E\u5175\u6211\u4E0D\u78B0\uFF0C\u51E1\u706B\u6DEC\u4E0D\u52A8\u3002"
      ]
    }
  ]
};

// src/data/quests.json
var quests_default = {
  quests: [
    {
      id: "quest_talk_guide",
      name: "\u521D\u6765\u4E4D\u5230",
      description: "\u4E0E\u8D77\u70B9\u7684\u5F15\u5BFC\u8005\u827E\u767B\u5BF9\u8BDD\uFF0C\u4E86\u89E3\u8FD9\u5EA7\u5854\u7684\u89C4\u5219\u3002",
      objectives: [{ type: "talk_npc", targetId: "npc_guide", quantity: 1 }],
      rewards: [{ type: "potion", tier: "crude", value: 2 }],
      prerequisites: [],
      guidance: "\u8D70\u5230\u7EFF\u8272\u65B9\u5757\u65C1\uFF0C\u5DE6\u952E\u5BF9\u8BDD\u3002"
    },
    {
      id: "quest_first_blood",
      name: "\u521D\u8BD5\u950B\u8292",
      description: "\u51FB\u8D25\u4E00\u53EA\u53F2\u83B1\u59C6\u3002",
      objectives: [{ type: "defeat_monster", targetId: "slime", quantity: 1 }],
      rewards: [{ type: "gold", value: 30 }],
      prerequisites: ["quest_talk_guide"],
      guidance: "\u649E\u5411\u7EA2\u8272\u65B9\u5757\u5373\u8FDB\u5165\u6218\u6597\u3002"
    },
    {
      id: "quest_first_chest",
      name: "\u5F00\u7BB1\u6709\u559C",
      description: "\u6253\u5F00\u4E00\u4E2A\u5B9D\u7BB1\u3002",
      objectives: [{ type: "open_chest", quantity: 1 }],
      rewards: [{ type: "gold", value: 20 }],
      prerequisites: ["quest_talk_guide"],
      guidance: "\u5DE6\u952E\u70B9\u51FB\u91D1\u8272\u5B9D\u7BB1\u3002"
    },
    {
      id: "quest_first_equip",
      name: "\u62AB\u6302\u4E0A\u9635",
      description: "\u7A7F\u6234\u4E00\u4EF6\u88C5\u5907\u3002",
      objectives: [{ type: "equip_item", quantity: 1 }],
      rewards: [{ type: "equipment", quality: "poor" }],
      prerequisites: ["quest_first_chest"],
      guidance: "\u6309 B \u6253\u5F00\u80CC\u5305\uFF0C\u53CC\u51FB\u88C5\u5907\u7A7F\u6234\u3002"
    },
    {
      id: "quest_descend",
      name: "\u66F4\u4E0B\u4E00\u5C42",
      description: "\u901A\u8FC7\u7EC8\u70B9\u697C\u68AF\u5230\u8FBE\u7B2C 2 \u5C42\u3002",
      objectives: [{ type: "reach_floor", value: 2, quantity: 1 }],
      rewards: [
        { type: "gold", value: 50 },
        { type: "potion", tier: "crude", value: 1 }
      ],
      prerequisites: ["quest_first_blood"],
      guidance: "\u627E\u5230\u623F\u95F4\u89D2\u843D\u7684\u53D1\u5149\u697C\u68AF\u3002"
    },
    {
      id: "quest_use_potion",
      name: "\u836F\u5230\u75C5\u9664",
      description: "\u4F7F\u7528\u4E00\u6B21\u836F\u6C34\uFF0C\u5B66\u4F1A\u5FEB\u901F\u56DE\u590D\u3002",
      objectives: [{ type: "use_potion", quantity: 1 }],
      rewards: [{ type: "gold", value: 20 }],
      prerequisites: ["quest_talk_guide"],
      guidance: "\u6309 B \u6253\u5F00\u80CC\u5305 \u2192 \u836F\u6C34\u9875\u70B9\u51FB\u300C\u4F7F\u7528\u300D\uFF1B\u6216\u628A\u836F\u6C34\u62D6\u5230\u5E95\u90E8\u5FEB\u6377\u680F\u540E\u6309\u6570\u5B57\u952E 1-5\u3002"
    },
    {
      id: "quest_deeper",
      name: "\u6DF1\u5165\u5854\u4E2D",
      description: "\u51FB\u8D25 2 \u540D\u654C\u4EBA\u5E76\u5230\u8FBE\u7B2C 3 \u5C42\u3002",
      objectives: [
        { type: "defeat_monster", quantity: 2 },
        { type: "reach_floor", value: 3, quantity: 1 }
      ],
      rewards: [
        { type: "gold", value: 80 },
        { type: "potion", tier: "normal", value: 1 }
      ],
      prerequisites: ["quest_descend"],
      guidance: "\u7EE7\u7EED\u6E05\u527F\u602A\u7269\uFF0C\u5E76\u6CBF\u697C\u68AF\u62B5\u8FBE\u7B2C 3 \u5C42\u3002"
    }
  ]
};

// src/data/economy.json
var economy_default = {
  placeholder: true
};

// src/data/events.json
var events_default = {
  events: [
    {
      id: "ev_gold_fairy",
      name: "\u91D1\u5E01\u5996\u7CBE",
      icon: "\u{1F9DA}",
      trigger: "on_enter",
      minFloor: 2,
      chance: 0.07,
      roomTypes: ["combat", "chest"],
      description: "\u4E00\u53EA\u91D1\u5E01\u5996\u7CBE\u4ECE\u9634\u5F71\u91CC\u7A9C\u51FA\uFF0C\u7FC5\u8180\u4E0A\u6D12\u843D\u7740\u91D1\u7C89\u3002",
      options: [
        { text: "\u4F38\u624B\u53BB\u6293", effects: [{ type: "gold", value: 30, perFloor: 6 }] },
        { text: "\u76EE\u9001\u5B83\u79BB\u5F00", effects: [] }
      ]
    },
    {
      id: "ev_trap",
      name: "\u53EF\u7591\u7684\u8E0F\u677F",
      icon: "\u26A0\uFE0F",
      trigger: "on_step",
      minFloor: 3,
      chance: 0.02,
      roomTypes: ["combat", "elite"],
      description: "\u811A\u4E0B\u7684\u77F3\u677F\u5FFD\u7136\u4E0B\u9677\u2014\u2014\u662F\u9677\u9631\uFF01",
      options: [
        { text: "\u786C\u6297", effects: [{ type: "damagePct", value: 8 }] },
        { text: "\u7FFB\u6EDA\u95EA\u907F\uFF08\u6D88\u8017\u4F53\u529B\uFF09", effects: [{ type: "damagePct", value: 3 }] }
      ]
    },
    {
      id: "ev_spring",
      name: "\u795E\u79D8\u6CC9\u6C34",
      icon: "\u26F2",
      trigger: "on_enter",
      minFloor: 2,
      chance: 0.06,
      roomTypes: ["chest", "merchant", "end"],
      description: "\u89D2\u843D\u91CC\u6D8C\u51FA\u4E00\u6C6A\u6CDB\u7740\u5FAE\u5149\u7684\u6CC9\u6C34\u3002",
      options: [
        { text: "\u996E\u4E0B\u6CC9\u6C34", effects: [{ type: "healPct", value: 20 }] },
        { text: "\u8C28\u614E\u8D77\u89C1\uFF0C\u4E0D\u559D", effects: [] }
      ]
    },
    {
      id: "ev_scroll",
      name: "\u53E4\u8001\u7684\u5377\u8F74",
      icon: "\u{1F4DC}",
      trigger: "on_enter",
      minFloor: 4,
      chance: 0.05,
      roomTypes: ["combat", "chest", "elite"],
      description: "\u5899\u4E0A\u5D4C\u7740\u4E00\u5377\u53E4\u65E7\u7684\u5377\u8F74\uFF0C\u5B57\u8FF9\u4F9D\u7A00\u53EF\u8FA8\u3002",
      options: [
        { text: "\u7814\u8BFB\u5377\u8F74", effects: [{ type: "exp", value: 25, perFloor: 5 }] },
        { text: "\u6CA1\u6709\u5174\u8DA3", effects: [] }
      ]
    },
    {
      id: "ev_loose_brick",
      name: "\u677E\u52A8\u7684\u7816",
      icon: "\u{1F9F1}",
      trigger: "on_interact",
      minFloor: 4,
      chance: 0.1,
      roomTypes: ["combat", "chest", "merchant", "elite"],
      description: "\u4F60\u89E6\u53CA\u7684\u5899\u9762\u6709\u4E00\u5757\u7816\u5FAE\u5FAE\u677E\u52A8\uFF0C\u7F1D\u9699\u91CC\u900F\u51FA\u4E00\u70B9\u5FAE\u5149\u3002",
      options: [
        { text: "\u7528\u529B\u64AC\u5F00", effects: [{ type: "gold", value: 25, perFloor: 4 }, { type: "damagePct", value: 3 }] },
        { text: "\u4E0D\u53BB\u7BA1\u5B83", effects: [] }
      ]
    },
    {
      id: "ev_hollow_echo",
      name: "\u7A7A\u8361\u7684\u56DE\u54CD",
      icon: "\u{1F56F}\uFE0F",
      trigger: "on_defeat_all",
      minFloor: 5,
      chance: 0.1,
      roomTypes: ["combat", "elite"],
      description: "\u6700\u540E\u4E00\u53EA\u602A\u7269\u5012\u4E0B\uFF0C\u623F\u95F4\u91CC\u53EA\u5269\u4F60\u4E0E\u70DB\u706B\u7684\u547C\u5438\u58F0\u3002",
      options: [
        { text: "\u9759\u7ACB\u7247\u523B\uFF0C\u6E05\u70B9\u6240\u5F97", effects: [{ type: "exp", value: 20, perFloor: 6 }] },
        { text: "\u7ACB\u523B\u8D76\u5F80\u4E0B\u4E00\u5904", effects: [] }
      ]
    }
  ]
};

// src/data/texts.json
var texts_default = {
  roomNames: {
    start: "\u8D77\u70B9\u5927\u5385",
    end: "\u7EC8\u70B9\u4E4B\u95F4",
    combat: "\u6218\u6597\u5BA4",
    elite: "\u7CBE\u82F1\u6BBF\u5802",
    chest: "\u5B9D\u85CF\u95F4",
    merchant: "\u5546\u4EBA\u8425\u5730",
    blacksmith: "\u94C1\u5320\u94FA",
    witch: "\u5973\u5DEB\u917F\u836F\u95F4",
    boss: "Boss\u5DE2\u7A74",
    rest: "\u4F11\u6574\u8425\u5730"
  },
  hints: {
    attack: "\u5DE6\u952E\u653B\u51FB",
    pickup: "\u5DE6\u952E\u62FE\u53D6",
    talk: "\u5DE6\u952E\u5BF9\u8BDD",
    open: "\u5DE6\u952E\u6253\u5F00",
    stair: "\u70B9\u51FB\u6216\u8D70\u4E0A\u697C\u68AF",
    trade: "\u5DE6\u952E\u4EA4\u6613",
    heal: "\u5DE6\u952E\u6CBB\u7597"
  },
  titles: {
    gameTitle: "\u65E0\u5C3D\u4E4B\u5854",
    floor: "\u7B2C {floor} \u5C42",
    depth: "\u6DF1\u5EA6 {depth}",
    pathA: "\u8DEF\u5F84A\uFF08\u9AD8\u5371\uFF09",
    pathB: "\u8DEF\u5F84B\uFF08\u7A33\u5065\uFF09"
  },
  guidance: {
    firstEquipment: "\u83B7\u5F97\u88C5\u5907\uFF01\u6309 B \u6253\u5F00\u80CC\u5305\u67E5\u770B\uFF0C\u53CC\u51FB\u53EF\u7A7F\u6234\u3002\u88C5\u5907\u5BF9\u6BD4\u4E2D\u7EFF\u8272\u4E3A\u63D0\u5347\u3002",
    firstDeath: "\u4F60\u5012\u4E0B\u4E86\u2026\u2026\u4F46\u5854\u7ED9\u4E88\u4F60\u91CD\u6765\u7684\u673A\u4F1A\uFF1A\u5728\u672C\u5C42\u8D77\u70B9\u590D\u6D3B\uFF0C\u635F\u5931 20% \u91D1\u5E01\u3002",
    tutorialWelcome: "\u6B22\u8FCE\u6765\u5230\u65E0\u5C3D\u4E4B\u5854\u3002\u8DDF\u968F\u53F3\u4FA7\u4EFB\u52A1\u6307\u5F15\u5F00\u59CB\u5192\u9669\u5427\u3002"
  },
  labels: {
    player: "\u52C7\u8005",
    merchant: "\u5546\u4EBA",
    guide: "\u5F15\u5BFC\u8005",
    chest: "\u5B9D\u7BB1",
    chestOpened: "\u7A7A\u5B9D\u7BB1",
    stair: "\u901A\u5F80\u7B2C {floor} \u5C42",
    carpet: "\u5730\u6BEF",
    pillar: "\u77F3\u67F1",
    potion: "\u836F\u6C34",
    torch: "\u706B\u628A",
    cauldron: "\u71AC\u836F\u5927\u9505",
    shelf: "\u836F\u67B6",
    fountain: "\u6CBB\u7597\u6CC9"
  }
};

// src/data/settings.json
var settings_default = {
  defaults: {
    autoSave: true,
    fpsCap: 0,
    battleMode: "auto"
  }
};

// src/data/relics.json
var relics_default = {
  rarityNames: { "-1": "\u707E\u5384\u9020\u7269", "0": "\u5C18\u82A5", "1": "\u5C18\u4E16\u9057\u7269", "2": "\u5723\u9057\u7269", "3": "\u795E\u7947\u9057\u7269", "4": "\u5929\u5802" },
  rarityColors: { "-1": "#8b1a1a", "0": "#9a8f7a", "1": "#4a90d9", "2": "#a04ad9", "3": "#e03030", "4": "#ffffff" },
  dropChances: { "0": 0.05, "1": 0.03, "2": 0.01, "3": 5e-3, "4": 0 },
  bossDropChances: { "0": 0.5, "1": 0.3, "2": 0.18, "3": 0.02 },
  eliteDropChances: { "0": 0.02, "1": 0.01, "2": 3e-3, "3": 1e-3 },
  _icons\u8BF4\u660E: "\u9057\u7269\u56FE\u6807\u5360\u4F4D\uFF1Aemoji \u6216\u56FE\u7247\u8DEF\u5F84\uFF08\u5982 img/relic/r001.png\uFF09\u3002\u5C06\u6765\u66FF\u6362\u4E3A\u6B63\u5F0F\u56FE\u7247\u65F6\uFF0C\u628A\u503C\u6539\u6210\u8DEF\u5F84\u5373\u53EF\uFF0CUI \u81EA\u52A8\u6E32\u67D3 <img>\u3002\u4E5F\u53EF\u5728\u5355\u4EF6\u9057\u7269\u5BF9\u8C61\u91CC\u52A0 icon \u5B57\u6BB5\u8986\u76D6\u3002",
  icons: {
    R001: "\u{1F5E1}\uFE0F",
    R002: "\u{1FAA8}",
    R003: "\u{1F6E1}\uFE0F",
    R004: "\u{1F4FF}",
    R005: "\u{1F50D}",
    R006: "\u{1F94A}",
    R007: "\u{1F462}",
    R008: "\u{1FA78}",
    R009: "\u{1F4DC}",
    R010: "\u2692\uFE0F",
    R011: "\u{1F396}\uFE0F",
    R012: "\u26A1",
    R013: "\u{1F335}",
    R014: "\u{1F9B7}",
    R015: "\u{1F528}",
    R016: "\u{1F9FF}",
    R017: "\u{1F48E}",
    R018: "\u{1F33F}",
    R019: "\u{1F9EA}",
    R020: "\u{1FAA8}",
    R021: "\u{1F6E1}\uFE0F",
    R022: "\u{1F497}",
    R023: "\u{1F47B}",
    R024: "\u{1F525}",
    R025: "\u{1F331}",
    R026: "\u{1FA99}",
    R027: "\u{1F590}\uFE0F",
    R028: "\u{1F5DD}\uFE0F",
    R029: "\u{1F9D0}",
    R030: "\u{1F91D}",
    R031: "\u{1F4DA}",
    R032: "\u{1F9FA}",
    R033: "\u2728",
    R034: "\u{1F9ED}",
    R035: "\u{1F5FA}\uFE0F",
    R036: "\u{1F4E1}",
    R037: "\u{1F5DD}\uFE0F",
    R038: "\u{1F3EE}",
    R039: "\u{1FAA8}",
    R040: "\u{1F300}",
    R041: "\u{1FA9E}",
    R042: "\u{1F4E6}",
    R043: "\u{1F3B2}",
    R044: "\u{1F48D}",
    R045: "\u26D3\uFE0F",
    R046: "\u23F3",
    R047: "\u{1F9E6}",
    R048: "\u{1F511}",
    R049: "\u{1FAA8}",
    R050: "\u{1F5BC}\uFE0F",
    R051: "\u{1F37E}",
    R052: "\u{1F6AC}",
    D101: "\u{1FA99}",
    D102: "\u{1F56F}\uFE0F",
    D103: "\u{1F34E}",
    D104: "\u{1F9F5}",
    D105: "\u{1F517}",
    D106: "\u{1F380}",
    D107: "\u{1F3FA}",
    D108: "\u{1F33F}",
    R053: "\u{1F5E1}\uFE0F",
    R054: "\u2694\uFE0F",
    R055: "\u{1F6E1}\uFE0F",
    R056: "\u{1F3F0}",
    R057: "\u{1F4FF}",
    R058: "\u{1F4A0}",
    R059: "\u{1F3B2}",
    R060: "\u{1F3A1}",
    R061: "\u{1F441}\uFE0F",
    R062: "\u{1F9FF}",
    R063: "\u26F2",
    R064: "\u{1F3C6}",
    X001: "\u{1FA78}",
    X002: "\u{1F529}",
    X003: "\u{1F6E1}\uFE0F",
    X004: "\u{1F494}",
    X005: "\u{1F4B8}",
    X006: "\u{1F6AB}",
    X007: "\u{1F463}",
    X008: "\u{1F40C}",
    X011: "\u{1F5E1}\uFE0F",
    X012: "\u{1F4A2}",
    X013: "\u{1F537}",
    X014: "\u{1F4DC}",
    X015: "\u{1F300}",
    X016: "\u{1F451}",
    X017: "\u{1F525}",
    X018: "\u{1F45D}",
    X021: "\u271D\uFE0F",
    X021P: "\u271D\uFE0F",
    X022: "\u{1FA9E}",
    X022P: "\u{1FA9E}",
    X023: "\u{1F512}",
    X023P: "\u{1F513}",
    X024: "\u{1F525}",
    X024P: "\u{1F33E}",
    X025: "\u{1F52A}",
    X025P: "\u2694\uFE0F",
    X026: "\u{1F56F}\uFE0F",
    X026P: "\u{1F526}",
    X027: "\u{1F462}",
    X027P: "\u{1F45F}",
    H001: "\u{1F6A9}",
    H002: "\u{1F40D}",
    R065: "\u{1F37C}",
    R066: "\u{1F30B}",
    X009: "\u{1F480}"
  },
  relics: [
    { id: "R001", name: "\u9508\u5251\u300C\u65E0\u540D\u300D", rarity: 1, category: "combat", combos: [], desc: "\u653B\u51FB +3", effects: [{ type: "stat", stat: "attack", value: 3, mode: "flat" }], note: "\u5251\u94FE\xB7\u4E0B\u4F4D\uFF08\u8FDB\u9636\u6682\u4E0D\u5B9E\u73B0\uFF09" },
    { id: "R002", name: "\u78E8\u5200\u77F3", rarity: 1, category: "combat", desc: "\u653B\u51FB +6\uFF0C\u751F\u547D\u4E0A\u9650 -8", effects: [{ type: "stat", stat: "attack", value: 6, mode: "flat" }, { type: "stat", stat: "maxHp", value: -8, mode: "flat" }] },
    { id: "R003", name: "\u94C1\u536B\u5FBD\u8BB0", rarity: 1, category: "combat", desc: "\u9632\u5FA1 +4", effects: [{ type: "stat", stat: "defense", value: 4, mode: "flat" }], note: "\u536B\u94FE\xB7\u4E0B\u4F4D" },
    { id: "R004", name: "\u517D\u9AA8\u9879\u94FE", rarity: 1, category: "combat", desc: "\u751F\u547D\u4E0A\u9650 +200", effects: [{ type: "stat", stat: "maxHp", value: 200, mode: "flat" }], note: "\u547D\u94FE\xB7\u4E0B\u4F4D\uFF08\u4E0E\u751F\u5B58\u7C7B\u91CD\u590D\uFF0C\u62DF\u5220\u9664\uFF09" },
    { id: "R005", name: "\u7CBE\u51C6\u900F\u955C", rarity: 1, category: "combat", combos: ["assassin"], desc: "\u66B4\u51FB\u7387 +8%", effects: [{ type: "stat", stat: "critRate", value: 8, mode: "flat" }], note: "\u773C\u94FE\xB7\u4E0B\u4F4D\uFF1B\u523A\u5BA2\u7EC4\u5408\u4EF6" },
    { id: "R006", name: "\u81F4\u547D\u624B\u8155", rarity: 2, category: "combat", combos: ["assassin"], desc: "\u66B4\u51FB\u4F24\u5BB3 +40%", effects: [{ type: "stat", stat: "critDamage", value: 40, mode: "flat" }], note: "\u523A\u5BA2\u7EC4\u5408\u4EF6" },
    { id: "R007", name: "\u75BE\u98CE\u4E4B\u9774", rarity: 1, category: "combat", combos: ["assassin"], desc: "\u95EA\u907F +7%", effects: [{ type: "stat", stat: "dodgeRate", value: 7, mode: "flat" }], note: "\u523A\u5BA2\u7EC4\u5408\u4EF6" },
    { id: "R008", name: "\u72C2\u6218\u58EB\u4E4B\u8840", rarity: 2, category: "combat", combos: ["bloodrage"], desc: "\u751F\u547D\u4F4E\u4E8E 35% \u65F6\u653B\u51FB +45%\uFF1B\u53D7\u5230\u4F24\u5BB3 +15%", effects: [{ type: "onLowHp", stat: "attack", value: 45, mode: "percent", threshold: 0.35 }, { type: "stat", stat: "damageTaken", value: 15, mode: "percent" }], note: "\u8840\u6012\u7EC4\u5408\u4EF6" },
    { id: "R009", name: "\u6B7B\u6597\u5951\u7EA6", rarity: 2, category: "combat", combos: ["bloodrage", "sacrifice"], desc: "\u653B\u51FB +40%\uFF0C\u751F\u547D\u4E0A\u9650 -25%", effects: [{ type: "stat", stat: "attack", value: 40, mode: "percent" }, { type: "stat", stat: "maxHp", value: -25, mode: "percent" }], note: "\u8840\u6012\u7EC4\u5408\u4EF6\uFF1B\u91CD\u4EE3\u4EF7" },
    { id: "R010", name: "\u7834\u7532\u9525", rarity: 2, category: "combat", desc: "\u65E0\u89C6\u76EE\u6807 30% \u9632\u5FA1", effects: [{ type: "passive", stat: "armorPen", value: 30 }] },
    { id: "R011", name: "\u8FDE\u51FB\u5FBD\u7AE0", rarity: 3, category: "combat", desc: "\u653B\u51FB\u6709 20% \u6982\u7387\u8FFD\u52A0\u4E00\u6B21 50% \u4F24\u5BB3\u7684\u8FFD\u51FB", effects: [{ type: "passive", stat: "followUp", value: 20, note: "\u8FFD\u4F24 50%" }] },
    { id: "R012", name: "\u5148\u653B\u4E4B\u5203", rarity: 2, category: "combat", desc: "\u6BCF\u5C42\u9996\u6B21\u653B\u51FB\u4F24\u5BB3 \xD71.5", effects: [{ type: "passive", stat: "firstStrikeBoost", value: 1.5 }] },
    { id: "R013", name: "\u8346\u68D8\u7532", rarity: 2, category: "combat", combos: ["fortress"], desc: "\u53CD\u5F39\u6240\u53D7\u4F24\u5BB3\u7684 12%", effects: [{ type: "stat", stat: "thorns", value: 12, mode: "flat" }], note: "\u5821\u5792\u7EC4\u5408\u4EF6" },
    { id: "R014", name: "\u5438\u8840\u7360\u7259", rarity: 1, category: "combat", combos: ["bloodrage"], desc: "\u6BCF\u6B21\u51FB\u6740\u56DE\u590D 8% \u751F\u547D", effects: [{ type: "onKill", action: "healPct", value: 8 }], note: "\u8840\u6012\u7EC4\u5408\u4EF6" },
    { id: "R015", name: "\u91CD\u9524", rarity: 2, category: "combat", desc: "\u653B\u51FB +10%\uFF0C\u95EA\u907F -5%", effects: [{ type: "stat", stat: "attack", value: 10, mode: "percent" }, { type: "stat", stat: "dodgeRate", value: -5, mode: "flat" }] },
    { id: "R016", name: "\u730E\u738B\u5FBD\u8BB0", rarity: 3, category: "combat", desc: "\u5BF9\u7CBE\u82F1\u4E0E Boss \u7684\u4F24\u5BB3 +25%", effects: [{ type: "passive", stat: "eliteBossDamage", value: 25 }] },
    { id: "R017", name: "\u751F\u547D\u7ED3\u6676", rarity: 1, category: "survival", combos: ["immortal"], desc: "\u751F\u547D\u4E0A\u9650 +60", effects: [{ type: "stat", stat: "maxHp", value: 60, mode: "flat" }], note: "\u4E0D\u673D\u7EC4\u5408\u4EF6" },
    { id: "R018", name: "\u518D\u751F\u7B26\u6587", rarity: 1, category: "survival", combos: ["immortal"], desc: "\u6BCF\u5C42\u5F00\u59CB\u56DE\u590D 4% \u6700\u5927\u751F\u547D", effects: [{ type: "onFloorEnter", action: "healPct", value: 4 }], note: "\u4E0D\u673D\u7EC4\u5408\u4EF6" },
    { id: "R019", name: "\u5723\u6CC9\u4E4B\u74F6", rarity: 2, category: "survival", combos: ["immortal"], desc: "\u836F\u6C34\u56DE\u590D\u91CF +10%", effects: [{ type: "stat", stat: "potionBonus", value: 10, mode: "flat" }], note: "\u6CC9\u94FE\xB7\u4E0B\u4F4D\uFF1B\u4E0D\u673D\u7EC4\u5408\u4EF6" },
    { id: "R020", name: "\u77F3\u80A4", rarity: 1, category: "survival", combos: ["fortress"], desc: "\u53D7\u5230\u4F24\u5BB3 -6%", effects: [{ type: "stat", stat: "damageReduction", value: 6, mode: "flat" }], note: "\u5821\u5792\u7EC4\u5408\u4EF6" },
    { id: "R021", name: "\u575A\u5B88\u8005", rarity: 2, category: "survival", combos: ["fortress"], desc: "\u751F\u547D\u9AD8\u4E8E 75% \u65F6\u9632\u5FA1 +30%", effects: [{ type: "onHighHp", stat: "defense", value: 30, mode: "percent", threshold: 0.75 }], note: "\u5821\u5792\u7EC4\u5408\u4EF6" },
    { id: "R022", name: "\u6FD2\u6B7B\u672C\u80FD", rarity: 2, category: "survival", desc: "\u751F\u547D\u4F4E\u4E8E 25% \u65F6\u95EA\u907F +30%", effects: [{ type: "onLowHp", stat: "dodgeRate", value: 30, mode: "flat", threshold: 0.25 }] },
    { id: "R023", name: "\u91CD\u751F\u4E4B\u9B42", rarity: 3, category: "survival", desc: "\u6B7B\u4EA1\u65F6\u539F\u5730\u590D\u6D3B\u5E76\u6062\u590D 45% \u751F\u547D\uFF08\u6BCF\u8F6E\u722C\u5854\u9650\u4E00\u6B21\uFF09", effects: [{ type: "passive", stat: "revive", value: 45 }], lore: "\u4E00\u76CF\u660E\u706F\u5F15\u5BFC\u4F60\u7684\u7075\u9B42\u56DE\u5F52", note: "\u5F3A\u529B" },
    { id: "R024", name: "\u6696\u7089", rarity: 1, category: "survival", desc: "\u6BCF\u5C42\u56DE\u590D 3 \u70B9\u751F\u547D", effects: [{ type: "onFloorEnter", action: "heal", value: 3 }] },
    { id: "R025", name: "\u62A4\u4F51", rarity: 3, category: "survival", desc: "\u6BCF 5 \u5C42\u53E0\u52A0\u4E00\u5C42\u62A4\u76FE\uFF0C\u4E00\u5C42\u53EF\u5438\u6536 20 \u70B9\u4F24\u5BB3\uFF0C\u62A4\u76FE\u5728\u6BCF\u6B21\u6218\u6597\u524D\u90FD\u4F1A\u91CD\u7F6E", effects: [{ type: "passive", stat: "shieldEvery5", value: 20 }] },
    { id: "R026", name: "\u5E78\u8FD0\u786C\u5E01", rarity: 1, category: "economy", combos: ["rich"], desc: "\u91D1\u5E01\u83B7\u53D6 +15%", effects: [{ type: "stat", stat: "goldBonus", value: 15, mode: "flat" }], note: "\u91D1\u94FE\xB7\u4E0B\u4F4D\uFF1B\u5BCC\u5546\u7EC4\u5408\u4EF6" },
    { id: "R027", name: "\u8D2A\u5A6A\u4E4B\u624B", rarity: 2, category: "economy", desc: "\u91D1\u5E01\u83B7\u53D6 +30%\uFF0C\u6536\u5230\u7684\u4F24\u5BB3 +10%", effects: [{ type: "stat", stat: "goldBonus", value: 30, mode: "flat" }, { type: "stat", stat: "damageTaken", value: 10, mode: "percent" }] },
    { id: "R028", name: "\u94A5\u5319\u4E32", rarity: 2, category: "economy", desc: "\u6BCF\u5C42\u5F00\u59CB\u65F6\u83B7\u5F97 1 \u628A\u94A5\u5319", effects: [{ type: "onFloorEnter", action: "key", value: 1 }] },
    { id: "R029", name: "\u9274\u8D4F\u5BB6\u4E4B\u773C", rarity: 3, category: "economy", combos: ["rich"], desc: "\u5B9D\u7BB1\u5F00\u51FA\u7684\u88C5\u5907\u54C1\u8D28 +1 \u6863", effects: [{ type: "passive", stat: "chestQualityUp", value: 1 }], note: "\u5BCC\u5546\u7EC4\u5408\u4EF6" },
    { id: "R030", name: "\u5546\u4EBA\u53CB\u8C0A\u8BA4\u8BC1\u4FE1", rarity: 2, category: "economy", combos: ["rich"], desc: "\u5546\u5E97\u4EF7\u683C -20%", effects: [{ type: "stat", stat: "merchantDiscount", value: 20, mode: "flat" }], note: "\u5BCC\u5546\u7EC4\u5408\u4EF6" },
    { id: "R031", name: "\u5B66\u8BC6\u6C34\u6676", rarity: 2, category: "economy", desc: "\u7ECF\u9A8C\u83B7\u53D6 +20%", effects: [{ type: "stat", stat: "expBonus", value: 20, mode: "flat" }] },
    { id: "R032", name: "\u62FE\u8352\u8005", rarity: 3, category: "economy", desc: "\u51FB\u6740\u602A\u7269\u989D\u5916\u6389\u843D\u91D1\u5E01\uFF08\u968F\u5C42\u6570\u9012\u589E\uFF09", effects: [{ type: "onKill", action: "killGold" }] },
    { id: "R033", name: "\u70B9\u91D1\u6307", rarity: 3, category: "economy", desc: "\u91D1\u5E01\u83B7\u53D6 +30%\uFF0C\u4F46\u6BCF\u5C42\u635F\u5931 2% \u6700\u5927\u751F\u547D\uFF08\u540C\u6B65\u6263\u9664\u8840\u91CF\uFF09", effects: [{ type: "stat", stat: "goldBonus", value: 30, mode: "flat" }, { type: "onFloorEnter", action: "hpLossPct", value: 2 }] },
    { id: "R034", name: "\u63A2\u8DEF\u8005\u7F57\u76D8", rarity: 2, category: "explore", combos: ["omniscient"], desc: "\u663E\u793A\u672C\u5C42\u697C\u68AF\u4F4D\u7F6E", effects: [{ type: "passive", stat: "revealStairs", value: 1 }], note: "\u5168\u77E5\u7EC4\u5408\u4EF6\uFF1B\u7A00\u6709\u5EA6\u63A8\u65AD" },
    { id: "R035", name: "\u5730\u56FE\u6B8B\u5377", rarity: 2, category: "explore", combos: ["omniscient"], desc: "\u663E\u793A\u672C\u5C42\u5B8C\u6574\u5730\u56FE", effects: [{ type: "passive", stat: "revealMap", value: 1 }], note: "\u5168\u77E5\u7EC4\u5408\u4EF6\uFF1B\u7A00\u6709\u5EA6\u63A8\u65AD" },
    { id: "R036", name: "\u56DE\u54CD\u77F3", rarity: 2, category: "explore", combos: ["omniscient"], desc: "\u663E\u793A\u672C\u5C42\u7CBE\u82F1\u4E0E Boss \u4F4D\u7F6E", effects: [{ type: "passive", stat: "revealElite", value: 1 }], note: "\u5168\u77E5\u7EC4\u5408\u4EF6\uFF1B\u7A00\u6709\u5EA6\u63A8\u65AD" },
    { id: "R037", name: "\u79D8\u95E8\u94A5\u5319", rarity: 2, category: "explore", desc: "\u53EF\u5F00\u542F\u9690\u85CF\u95E8", effects: [{ type: "passive", stat: "revealHidden", value: 1 }], note: "\u4F9D\u8D56\u9690\u85CF\u95E8\u73A9\u6CD5" },
    { id: "R038", name: "\u5FAE\u5149\u63D0\u706F", rarity: 1, category: "explore", desc: "\u8FDB\u5165\u65B0\u5C42\u65F6\u81EA\u52A8\u63ED\u793A\u5468\u56F4 2 \u683C\u623F\u95F4", effects: [{ type: "passive", stat: "revealAround", value: 2 }], note: "\u7A00\u6709\u5EA6\u63A8\u65AD" },
    { id: "R039", name: "\u5854\u57FA\u4E4B\u77F3", rarity: 1, category: "explore", combos: ["omniscient"], desc: "\u663E\u793A\u672C\u5C42\u5B9D\u7BB1\u4F4D\u7F6E", effects: [{ type: "passive", stat: "revealChest", value: 1 }], note: "\u5168\u77E5\u7EC4\u5408\u4EF6" },
    { id: "R040", name: "\u4F20\u9001\u7B26", rarity: 1, category: "explore", desc: "\u53EF\u4F20\u9001\u81F3\u672C\u5C42\u5DF2\u63A2\u7D22\u7684\u4EFB\u610F\u623F\u95F4\uFF08\u6BCF\u5C42 1 \u6B21\uFF09", effects: [{ type: "passive", stat: "teleport", value: 1 }] },
    { id: "R041", name: "\u8BC5\u5492\u4E4B\u955C", rarity: 2, category: "risk", desc: "\u653B\u51FB +20%\uFF0C\u4F46\u6BCF\u5C42\u5F00\u59CB\u635F\u5931 2% \u6700\u5927\u751F\u547D", effects: [{ type: "stat", stat: "attack", value: 20, mode: "percent" }, { type: "onFloorEnter", action: "hpLossPct", value: 2 }] },
    { id: "R042", name: "\u8D2A\u5A6A\u4E4B\u5323", rarity: 3, category: "risk", combos: ["sacrifice"], desc: "\u91D1\u5E01\u83B7\u53D6 +100%\uFF0C\u4F46\u65E0\u6CD5\u4F7F\u7528\u836F\u6C34", effects: [{ type: "stat", stat: "goldBonus", value: 100, mode: "flat" }, { type: "passive", stat: "noPotion", value: 1 }] },
    { id: "R043", name: "\u6DF7\u6C8C\u9AB0\u5B50", rarity: 3, category: "risk", desc: "\u6BCF\u6B21\u6218\u6597\u968F\u673A\u4F7F\u4E00\u9879\u5C5E\u6027 +20% \u6216 -20%", effects: [{ type: "passive", stat: "chaos", value: 1 }] },
    { id: "R044", name: "\u865A\u65E0\u4E4B\u6212", rarity: 3, category: "risk", combos: ["sacrifice"], desc: "\u751F\u547D\u4E0A\u9650 -50%\uFF0C\u653B\u51FB\u4E0E\u9632\u5FA1\u5404 +30%", effects: [{ type: "stat", stat: "maxHp", value: -50, mode: "percent" }, { type: "stat", stat: "attack", value: 30, mode: "percent" }, { type: "stat", stat: "defense", value: 30, mode: "percent" }] },
    { id: "R045", name: "\u6C89\u6CA6\u77F3", rarity: 3, category: "risk", desc: "\u9632\u5FA1 +40%\uFF0C\u95EA\u907F -30%", effects: [{ type: "stat", stat: "defense", value: 40, mode: "percent" }, { type: "stat", stat: "dodgeRate", value: -30, mode: "flat" }] },
    { id: "R046", name: "\u5012\u7F6E\u7684\u6C99\u6F0F", rarity: 3, category: "risk", desc: "\u6BCF\u5C42\u5F00\u59CB\u65F6\uFF0C\u968F\u673A\u91CD\u7F6E\u4E00\u9879\u5DF2\u6709\u7684\u4E34\u65F6\u589E\u76CA", effects: [{ type: "passive", stat: "resetBuffOnFloor", value: 1 }] },
    { id: "R047", name: "\u7834\u65E7\u7684\u889C\u5B50", rarity: 0, category: "fun", desc: "\u65E0\u4EFB\u4F55\u6548\u679C", effects: [{ type: "none" }], note: "\u7EAF\u6536\u85CF" },
    { id: "R048", name: "\u751F\u9508\u7684\u94A5\u5319", rarity: 0, category: "fun", desc: "\u65E0\u4EFB\u4F55\u6548\u679C", effects: [{ type: "none" }], note: "\u7EAF\u6536\u85CF" },
    { id: "R049", name: "\u5947\u602A\u7684\u77F3\u5934", rarity: 0, category: "fun", desc: "\u65E0\u4EFB\u4F55\u6548\u679C", effects: [{ type: "none" }], note: "\u7EAF\u6536\u85CF" },
    { id: "R050", name: "\u892A\u8272\u7684\u5408\u5F71", rarity: 0, category: "fun", desc: "\u65E0\u4EFB\u4F55\u6548\u679C", effects: [{ type: "none" }], note: "\u7EAF\u6536\u85CF" },
    { id: "R051", name: "\u7A7A\u836F\u74F6", rarity: 0, category: "fun", desc: "\u65E0\u4EFB\u4F55\u6548\u679C", effects: [{ type: "none" }], note: "\u7EAF\u6536\u85CF" },
    { id: "R052", name: "\u827E\u767B\u7684\u70DF\u6597", rarity: 0, category: "fun", desc: "\u65E0\u4EFB\u4F55\u6548\u679C\uFF08\u5F15\u5BFC\u8005\u5F69\u86CB\uFF09", effects: [{ type: "none" }], lore: "\u5438\u70DF\u6709\u5BB3\u5065\u5EB7", note: "\u5F69\u86CB\uFF1B\u4E0E NPC \u827E\u767B\u547C\u5E94" },
    { id: "D101", name: "\u78E8\u635F\u7684\u94DC\u5E01", rarity: 0, category: "fun", desc: "\u91D1\u5E01\u83B7\u53D6 +1%", effects: [{ type: "stat", stat: "goldBonus", value: 1, mode: "flat" }] },
    { id: "D102", name: "\u534A\u622A\u8721\u70DB", rarity: 0, category: "fun", desc: "\u653B\u51FB +1", effects: [{ type: "stat", stat: "attack", value: 1, mode: "flat" }] },
    { id: "D103", name: "\u5E72\u762A\u7684\u679C\u5B50", rarity: 0, category: "fun", desc: "\u751F\u547D\u4E0A\u9650 +5", effects: [{ type: "stat", stat: "maxHp", value: 5, mode: "flat" }] },
    { id: "D104", name: "\u7834\u5E03\u6761", rarity: 0, category: "fun", desc: "\u9632\u5FA1 +1", effects: [{ type: "stat", stat: "defense", value: 1, mode: "flat" }] },
    { id: "D105", name: "\u751F\u9508\u7684\u9876\u9488", rarity: 0, category: "fun", desc: "\u53D7\u5230\u4F24\u5BB3 -1%", effects: [{ type: "stat", stat: "damageReduction", value: 1, mode: "flat" }] },
    { id: "D106", name: "\u892A\u8272\u7684\u4E1D\u5E26", rarity: 0, category: "fun", desc: "\u95EA\u907F +1%", effects: [{ type: "stat", stat: "dodgeRate", value: 1, mode: "flat" }] },
    { id: "D107", name: "\u7F3A\u89D2\u9676\u7247", rarity: 0, category: "fun", desc: "\u66B4\u51FB\u7387 +1%", effects: [{ type: "stat", stat: "critRate", value: 1, mode: "flat" }] },
    { id: "D108", name: "\u5E72\u71E5\u7684\u82D4\u85D3", rarity: 0, category: "fun", desc: "\u6BCF\u5C42\u56DE\u590D 1 \u70B9\u751F\u547D", effects: [{ type: "onFloorEnter", action: "heal", value: 1 }] },
    { id: "R053", name: "\u950B\u9510\u957F\u5251", rarity: 2, category: "combat", desc: "\u653B\u51FB +10", effects: [{ type: "stat", stat: "attack", value: 10, mode: "flat" }], note: "\u5251\u94FE\xB7\u4E2D\u4F4D\uFF08\u8FDB\u9636\u6682\u4E0D\u5B9E\u73B0\uFF09" },
    { id: "R054", name: "\u795E\u88C1\u4E4B\u5203", rarity: 3, category: "combat", desc: "\u653B\u51FB +25\uFF0C\u4E14\u653B\u51FB\u6709 15% \u6982\u7387\u65E0\u89C6\u76EE\u6807\u5168\u90E8\u9632\u5FA1", effects: [{ type: "stat", stat: "attack", value: 25, mode: "flat" }, { type: "passive", stat: "armorPen", value: 15, note: "\u65E0\u89C6\u5168\u90E8\u9632\u5FA1" }], note: "\u5251\u94FE\xB7\u4E0A\u4F4D" },
    { id: "R055", name: "\u5723\u6BBF\u536B\u5FBD", rarity: 2, category: "combat", desc: "\u9632\u5FA1 +12\uFF0C\u53D7\u5230\u4F24\u5BB3 -5%", effects: [{ type: "stat", stat: "defense", value: 12, mode: "flat" }, { type: "stat", stat: "damageReduction", value: 5, mode: "flat" }], note: "\u536B\u94FE\xB7\u4E2D\u4F4D" },
    { id: "R056", name: "\u4E0D\u673D\u58C1\u5792", rarity: 3, category: "combat", desc: "\u9632\u5FA1 +30\uFF0C\u53D7\u5230\u4F24\u5BB3 -12%\uFF0C\u4E14\u514D\u75AB\u4E00\u6B21\u81F4\u547D\u4F24\uFF08\u6BCF\u8F6E\u4E00\u6B21\uFF09", effects: [{ type: "stat", stat: "defense", value: 30, mode: "flat" }, { type: "stat", stat: "damageReduction", value: 12, mode: "flat" }, { type: "passive", stat: "reviveOnce", value: 1 }], note: "\u536B\u94FE\xB7\u4E0A\u4F4D" },
    { id: "R057", name: "\u751F\u547D\u62A4\u7B26", rarity: 2, category: "survival", desc: "\u751F\u547D\u4E0A\u9650 +70", effects: [{ type: "stat", stat: "maxHp", value: 70, mode: "flat" }], note: "\u547D\u94FE\xB7\u4E2D\u4F4D" },
    { id: "R058", name: "\u6C38\u6052\u5FC3\u6838", rarity: 3, category: "survival", desc: "\u751F\u547D\u4E0A\u9650 +150\uFF0C\u6BCF\u5C42\u56DE\u590D 2% \u6700\u5927\u751F\u547D", effects: [{ type: "stat", stat: "maxHp", value: 150, mode: "flat" }, { type: "onFloorEnter", action: "healPct", value: 2 }], note: "\u547D\u94FE\xB7\u4E0A\u4F4D" },
    { id: "R059", name: "\u9EC4\u91D1\u9AB0\u5B50", rarity: 2, category: "economy", desc: "\u91D1\u5E01\u83B7\u53D6 +40%", effects: [{ type: "stat", stat: "goldBonus", value: 40, mode: "flat" }], note: "\u91D1\u94FE\xB7\u4E2D\u4F4D" },
    { id: "R060", name: "\u547D\u8FD0\u4E4B\u8F6E", rarity: 3, category: "economy", desc: "\u91D1\u5E01\u83B7\u53D6 +80%\uFF0C\u4E14\u5546\u5E97\u4EF7\u683C -15%", effects: [{ type: "stat", stat: "goldBonus", value: 80, mode: "flat" }, { type: "stat", stat: "merchantDiscount", value: 15, mode: "flat" }], note: "\u91D1\u94FE\xB7\u4E0A\u4F4D" },
    { id: "R061", name: "\u6D1E\u6089\u4E4B\u77B3", rarity: 2, category: "combat", desc: "\u66B4\u51FB\u7387 +15%\uFF0C\u66B4\u51FB\u4F24\u5BB3 +20%", effects: [{ type: "stat", stat: "critRate", value: 15, mode: "flat" }, { type: "stat", stat: "critDamage", value: 20, mode: "flat" }], note: "\u773C\u94FE\xB7\u4E2D\u4F4D" },
    { id: "R062", name: "\u5168\u89C6\u4E4B\u773C", rarity: 3, category: "combat", desc: "\u66B4\u51FB\u7387 +25%\uFF0C\u66B4\u51FB\u4F24\u5BB3 +50%\uFF0C\u4E14\u663E\u793A\u602A\u7269\u8840\u91CF\u6570\u503C", effects: [{ type: "stat", stat: "critRate", value: 25, mode: "flat" }, { type: "stat", stat: "critDamage", value: 50, mode: "flat" }, { type: "passive", stat: "showMonsterHp", value: 1 }], note: "\u773C\u94FE\xB7\u4E0A\u4F4D" },
    { id: "R063", name: "\u751F\u547D\u4E4B\u6CC9", rarity: 2, category: "survival", desc: "\u836F\u6C34\u56DE\u590D\u91CF +50%", effects: [{ type: "stat", stat: "potionBonus", value: 50, mode: "flat" }], note: "\u6CC9\u94FE\xB7\u4E2D\u4F4D" },
    { id: "R064", name: "\u4E0D\u706D\u5723\u676F", rarity: 3, category: "survival", desc: "\u836F\u6C34\u56DE\u590D\u91CF +100%\uFF0C\u4E14\u836F\u6C34\u4F7F\u7528\u65F6\u989D\u5916\u56DE\u590D 5% \u6700\u5927\u751F\u547D", effects: [{ type: "stat", stat: "potionBonus", value: 100, mode: "flat" }, { type: "stat", stat: "potionExtraPct", value: 5, mode: "flat" }], note: "\u6CC9\u94FE\xB7\u4E0A\u4F4D" },
    { id: "X001", name: "\u6E83\u70C2\u4E4B\u8840", rarity: -1, subtype: "start", category: "risk", desc: "\u751F\u547D\u4E0A\u9650 -20%", effects: [{ type: "stat", stat: "maxHp", value: -20, mode: "percent" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X002", name: "\u9508\u8680\u4E4B\u8EAF", rarity: -1, subtype: "start", category: "risk", desc: "\u653B\u51FB -15%", effects: [{ type: "stat", stat: "attack", value: -15, mode: "percent" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X003", name: "\u7834\u788E\u4E4B\u7532", rarity: -1, subtype: "start", category: "risk", desc: "\u9632\u5FA1 -15%", effects: [{ type: "stat", stat: "defense", value: -15, mode: "percent" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X004", name: "\u8106\u5F31\u4E4B\u9B42", rarity: -1, subtype: "start", category: "risk", desc: "\u53D7\u5230\u4F24\u5BB3 +15%", effects: [{ type: "stat", stat: "damageTaken", value: 15, mode: "percent" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X005", name: "\u8D2A\u5A6A\u4E4B\u5492", rarity: -1, subtype: "start", category: "risk", desc: "\u91D1\u5E01\u83B7\u53D6 -30%", effects: [{ type: "stat", stat: "goldBonus", value: -30, mode: "flat" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X006", name: "\u836F\u77F3\u65E0\u7075", rarity: -1, subtype: "start", category: "risk", desc: "\u836F\u6C34\u56DE\u590D\u91CF -40%", effects: [{ type: "stat", stat: "potionBonus", value: -40, mode: "flat" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X007", name: "\u8FF7\u9014\u4E4B\u8DB3", rarity: -1, subtype: "start", category: "risk", desc: "\u672C\u5C42\u697C\u68AF\u4F4D\u7F6E\u4E0D\u518D\u81EA\u52A8\u663E\u793A", effects: [{ type: "passive", stat: "revealStairs", value: 0 }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X008", name: "\u611A\u949D\u4E4B\u5FC3", rarity: -1, subtype: "start", category: "risk", desc: "\u7ECF\u9A8C\u83B7\u53D6 -25%", effects: [{ type: "stat", stat: "expBonus", value: -25, mode: "flat" }], note: "A \u7C7B\xB7\u5F00\u5C40\u707E\u5384" },
    { id: "X011", name: "\u8840\u503A\u4E4B\u5203", rarity: -1, subtype: "risk", category: "risk", desc: "\u653B\u51FB +35%\uFF0C\u4F46\u6BCF\u5C42\u5F00\u59CB\u635F\u5931 3% \u6700\u5927\u751F\u547D", effects: [{ type: "stat", stat: "attack", value: 35, mode: "percent" }, { type: "onFloorEnter", action: "hpLossPct", value: 3 }], note: "B \u7C7B\xB7\u9AD8\u98CE\u9669\u4E2D\u6536\u76CA" },
    { id: "X012", name: "\u72C2\u4E71\u4E4B\u5FC3", rarity: -1, subtype: "risk", category: "risk", desc: "\u653B\u51FB +25%\uFF0C\u9632\u5FA1 -20%", effects: [{ type: "stat", stat: "attack", value: 25, mode: "percent" }, { type: "stat", stat: "defense", value: -20, mode: "percent" }], note: "B \u7C7B" },
    { id: "X013", name: "\u7409\u7483\u4E4B\u8EAF", rarity: -1, subtype: "risk", category: "risk", desc: "\u9632\u5FA1 +40%\uFF0C\u751F\u547D\u4E0A\u9650 -20%", effects: [{ type: "stat", stat: "defense", value: 40, mode: "percent" }, { type: "stat", stat: "maxHp", value: -20, mode: "percent" }], note: "B \u7C7B" },
    { id: "X014", name: "\u7A83\u547D\u4E4B\u5951", rarity: -1, subtype: "risk", category: "risk", desc: "\u653B\u51FB +20%\uFF0C\u6BCF\u6B21\u51FB\u6740\u635F\u5931 2 \u70B9\u751F\u547D", effects: [{ type: "stat", stat: "attack", value: 20, mode: "percent" }, { type: "onKill", action: "loseHp", value: 2 }], note: "B \u7C7B" },
    { id: "X015", name: "\u6DF7\u6C8C\u4E4B\u77B3", rarity: -1, subtype: "risk", category: "risk", desc: "\u66B4\u51FB\u7387 +20%\uFF0C\u95EA\u907F -15%", effects: [{ type: "stat", stat: "critRate", value: 20, mode: "flat" }, { type: "stat", stat: "dodgeRate", value: -15, mode: "flat" }], note: "B \u7C7B" },
    { id: "X016", name: "\u6C89\u91CD\u4E4B\u51A0", rarity: -1, subtype: "risk", category: "risk", desc: "\u9632\u5FA1 +30%\uFF0C\u95EA\u907F -25%", effects: [{ type: "stat", stat: "defense", value: 30, mode: "percent" }, { type: "stat", stat: "dodgeRate", value: -25, mode: "flat" }], note: "B \u7C7B" },
    { id: "X017", name: "\u71C3\u8840\u4E4B\u7EB9", rarity: -1, subtype: "risk", category: "risk", desc: "\u653B\u51FB +30%\uFF0C\u53D7\u5230\u4F24\u5BB3 +20%", effects: [{ type: "stat", stat: "attack", value: 30, mode: "percent" }, { type: "stat", stat: "damageTaken", value: 20, mode: "percent" }], note: "B \u7C7B" },
    { id: "X018", name: "\u4E5E\u8005\u4E4B\u56CA", rarity: -1, subtype: "risk", category: "risk", desc: "\u91D1\u5E01\u83B7\u53D6 +60%\uFF0C\u4F46\u5B9D\u7BB1\u5F00\u51FA\u7684\u88C5\u5907\u54C1\u8D28 -1 \u6863", effects: [{ type: "stat", stat: "goldBonus", value: 60, mode: "flat" }, { type: "passive", stat: "chestQualityUp", value: -1 }], note: "B \u7C7B" },
    { id: "X021", name: "\u65AD\u88C2\u7684\u5723\u5FBD", rarity: -1, subtype: "event", category: "risk", purifyTo: "X021P", desc: "\u9632\u5FA1 -10%", effects: [{ type: "stat", stat: "defense", value: -10, mode: "percent" }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X021P", name: "\u91CD\u94F8\u5723\u5FBD", rarity: 2, category: "survival", tbd: true, desc: "\u9632\u5FA1 +15%\uFF0C\u53D7\u5230\u4F24\u5BB3 -5%", effects: [{ type: "stat", stat: "defense", value: 15, mode: "percent" }, { type: "stat", stat: "damageReduction", value: 5, mode: "flat" }], note: "X021 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "X022", name: "\u8499\u5C18\u4E4B\u955C", rarity: -1, subtype: "event", category: "risk", purifyTo: "X022P", desc: "\u95EA\u907F -10%", effects: [{ type: "stat", stat: "dodgeRate", value: -10, mode: "flat" }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X022P", name: "\u660E\u6F88\u4E4B\u955C", rarity: 2, category: "combat", tbd: true, desc: "\u95EA\u907F +12%\uFF0C\u66B4\u51FB\u7387 +5%", effects: [{ type: "stat", stat: "dodgeRate", value: 12, mode: "flat" }, { type: "stat", stat: "critRate", value: 5, mode: "flat" }], note: "X022 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "X023", name: "\u5C01\u5370\u4E4B\u9501", rarity: -1, subtype: "event", category: "risk", purifyTo: "X023P", desc: "\u751F\u547D\u4E0A\u9650 -15%", effects: [{ type: "stat", stat: "maxHp", value: -15, mode: "percent" }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X023P", name: "\u89E3\u5C01\u4E4B\u94A5", rarity: 2, category: "survival", tbd: true, desc: "\u751F\u547D\u4E0A\u9650 +80\uFF0C\u6BCF\u5C42\u56DE\u590D 2%", effects: [{ type: "stat", stat: "maxHp", value: 80, mode: "flat" }, { type: "onFloorEnter", action: "healPct", value: 2 }], note: "X023 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "X024", name: "\u8D2A\u5A6A\u70D9\u5370", rarity: -1, subtype: "event", category: "risk", purifyTo: "X024P", desc: "\u91D1\u5E01\u83B7\u53D6 -25%", effects: [{ type: "stat", stat: "goldBonus", value: -25, mode: "flat" }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X024P", name: "\u4E30\u9976\u5370\u8BB0", rarity: 2, category: "economy", tbd: true, desc: "\u91D1\u5E01\u83B7\u53D6 +40%", effects: [{ type: "stat", stat: "goldBonus", value: 40, mode: "flat" }], note: "X024 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "X025", name: "\u6B8B\u7834\u4E4B\u5203", rarity: -1, subtype: "event", category: "risk", purifyTo: "X025P", desc: "\u653B\u51FB -10%", effects: [{ type: "stat", stat: "attack", value: -10, mode: "percent" }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X025P", name: "\u6DEC\u706B\u4E4B\u5203", rarity: 2, category: "combat", tbd: true, desc: "\u653B\u51FB +18%\uFF0C\u65E0\u89C6 20% \u9632\u5FA1", effects: [{ type: "stat", stat: "attack", value: 18, mode: "percent" }, { type: "passive", stat: "armorPen", value: 20 }], note: "X025 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "X026", name: "\u54D1\u706B\u4E4B\u706F", rarity: -1, subtype: "event", category: "risk", purifyTo: "X026P", desc: "\u7ECF\u9A8C\u83B7\u53D6 -20%", effects: [{ type: "stat", stat: "expBonus", value: -20, mode: "flat" }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X026P", name: "\u542F\u660E\u4E4B\u706F", rarity: 2, category: "explore", tbd: true, desc: "\u7ECF\u9A8C +30%\uFF0C\u4E14\u663E\u793A\u672C\u5C42\u697C\u68AF\u4E0E\u5B9D\u7BB1\u4F4D\u7F6E", effects: [{ type: "stat", stat: "expBonus", value: 30, mode: "flat" }, { type: "passive", stat: "revealStairs", value: 1 }, { type: "passive", stat: "revealChest", value: 1 }], note: "X026 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "X027", name: "\u6EDE\u91CD\u4E4B\u9774", rarity: -1, subtype: "event", category: "risk", purifyTo: "X027P", desc: "\u95EA\u907F -12%\uFF0C\u4E14\u6BCF\u5C42\u9996\u6B21\u9047\u654C\u5FC5\u88AB\u5148\u653B", effects: [{ type: "stat", stat: "dodgeRate", value: -12, mode: "flat" }, { type: "passive", stat: "ambush", value: 1 }], note: "C \u7C7B\xB7\u4E8B\u4EF6\u578B\u707E\u5384\uFF08\u53EF\u51C0\u5316\uFF09" },
    { id: "X027P", name: "\u75BE\u5F71\u4E4B\u9774", rarity: 2, category: "combat", tbd: true, desc: "\u95EA\u907F +15%\uFF0C\u6BCF\u5C42\u9996\u6B21\u653B\u51FB\u4F24\u5BB3 \xD71.5", effects: [{ type: "stat", stat: "dodgeRate", value: 15, mode: "flat" }, { type: "passive", stat: "firstStrikeBoost", value: 1.5 }], note: "X027 \u51C0\u5316\u5F62\u6001\uFF08\u7A00\u6709\u5EA6\u5F85\u5B9A\uFF09" },
    { id: "H001", name: "\u8361\u9B54\u4E49\u65D7", rarity: 4, category: "combat", desc: "\u6BCF\u51FB\u6740\u4E00\u540D\u654C\u4EBA\uFF0C\u653B\u51FB\u529B +2%\uFF08\u672C\u8F6E\u6301\u7EED\u7D2F\u79EF\uFF09", effects: [{ type: "onKill", action: "killAttackPct", value: 2 }], lore: "\u4F20\u95FB\u53E4\u4EE3\u66FE\u53D1\u8D77 60 \u5E74\u8361\u9B54\u6240\u7559\u4E0B\u7684\u65D7\u5E1C", note: "\u5929\u5802\u9057\u7269\xB7\u5360\u4F4D/\u6D4B\u8BD5\u7528" },
    { id: "H002", name: "\u8D6B\u5C14\u58A8\u65AF\u53CC\u86C7\u6756", rarity: 4, category: "survival", desc: "\u6BCF\u6B21\u6218\u6597\u53EF\u4F7F\u7528 2 \u6B21\u836F\u5242", effects: [{ type: "passive", stat: "potionPerBattle", value: 2 }], note: "\u5929\u5802\u9057\u7269\xB7\u5360\u4F4D/\u6D4B\u8BD5\u7528\uFF1B\u6BCF\u6218\u7528\u836F\u8D44\u683C\u63D0\u5347\u81F3 2 \u6B21" },
    { id: "R065", name: "\u6447\u7BEE", rarity: 3, category: "survival", exclusive: true, desc: "\u751F\u547D\u4E0A\u9650 +100%\uFF0C\u653B\u51FB +20%\uFF0C\u9632\u5FA1 +20%\uFF0C\u7ECF\u9A8C\u83B7\u53D6 +20%\uFF0C\u91D1\u5E01\u83B7\u53D6 +50%", effects: [{ type: "stat", stat: "maxHp", value: 100, mode: "percent" }, { type: "stat", stat: "attack", value: 20, mode: "percent" }, { type: "stat", stat: "defense", value: 20, mode: "percent" }, { type: "stat", stat: "expBonus", value: 20, mode: "flat" }, { type: "stat", stat: "goldBonus", value: 50, mode: "flat" }], lore: "\u68A6\u4E2D\u7684\u6447\u7BEE", note: "\u300C\u6447\u7BEE\u66F2\u300D\u96BE\u5EA6\u5F00\u5C40\u4E13\u5C5E\uFF08\u4E0D\u968F\u673A\u6389\u843D\uFF09" },
    { id: "R066", name: "\u71C3\u70E7\u7684\u4E16\u754C", rarity: 3, category: "risk", desc: "\u653B\u51FB\u529B +120%\uFF0C\u53D7\u5230\u7684\u4F24\u5BB3 +100%", effects: [{ type: "stat", stat: "attack", value: 120, mode: "percent" }, { type: "stat", stat: "damageTaken", value: 100, mode: "percent" }], note: "\u6781\u7AEF\u795E\u7947\u9057\u7269\uFF1B\u9AD8\u98CE\u9669\u9AD8\u6536\u76CA" },
    { id: "X009", name: "\u547D\u5B9A\u4E4B\u6B7B", rarity: -1, subtype: "start", category: "risk", exclusive: true, desc: "\u7B49\u5F85\u4F60\u7684\u6B7B\u4EA1\u7684\u5230\u6765", effects: [{ type: "none" }], lore: "\u547D\u8FD0\u4E3B\u5BB0\u6240\u6709\u4EBA\uFF01", note: "\u5267\u60C5\u9057\u7269\xB7\u65E0\u5B9E\u9645\u6548\u679C\uFF1B\u300C\u5929\u5802\u300D\u96BE\u5EA6\u5F00\u5C40\u6301\u6709" }
  ],
  combos: [
    { id: "bloodrage", name: "\u8840\u6012", requires: ["R014", "R008", "R009"], desc: "\u751F\u547D\u4F4E\u4E8E 35% \u65F6\u653B\u51FB \xD72\uFF08\u4E0D\u518D\u662F +45%\uFF09\uFF0C\u4E14\u6BCF\u6B21\u51FB\u6740\u56DE\u590D 15% \u6700\u5927\u751F\u547D" },
    { id: "assassin", name: "\u523A\u5BA2", requires: ["R005", "R006", "R007"], desc: "\u66B4\u51FB\u540E\u5FC5\u5B9A\u95EA\u907F\u4E0B\u4E00\u6B21\u653B\u51FB\uFF1B\u66B4\u51FB\u7387\u989D\u5916 +10%" },
    { id: "immortal", name: "\u4E0D\u673D\u4E4B\u6CC9", requires: ["R019", "R018", "R017"], desc: "\u6BCF\u5C42\u5F00\u59CB\u56DE\u590D 15% \u6700\u5927\u751F\u547D\uFF0C\u751F\u547D\u4E0A\u9650\u989D\u5916 +80" },
    { id: "rich", name: "\u5BCC\u53EF\u654C\u56FD", requires: ["R026", "R029", "R030"], desc: "\u91D1\u5E01\u83B7\u53D6 +50%\uFF0C\u88C5\u5907\u54C1\u8D28 +1 \u6863\uFF0C\u5546\u5E97\u4EF7\u683C -50%" },
    { id: "fortress", name: "\u94C1\u58C1\u5821\u5792", requires: ["R013", "R020", "R021"], desc: "\u53CD\u5F39\u6240\u53D7\u4F24\u5BB3 30%\uFF0C\u53D7\u5230\u4F24\u5BB3 -15%\uFF0C\u751F\u547D\u9AD8\u4E8E 75% \u65F6\u9632\u5FA1 +50%" },
    { id: "omniscient", name: "\u5168\u77E5", requires: ["R034", "R035", "R036", "R039"], desc: "\u663E\u793A\u672C\u5C42\u5B8C\u6574\u4FE1\u606F\uFF1A\u5730\u56FE\u3001\u697C\u68AF\u3001\u5B9D\u7BB1\u3001\u7CBE\u82F1\u4E0E Boss \u4F4D\u7F6E\u5168\u90E8\u6807\u8BB0" },
    { id: "sacrifice", name: "\u732E\u796D", requires: ["R044", "R009", "R042"], desc: "\u653B\u51FB +100%\uFF0C\u9632\u5FA1 +60%\uFF0C\u91D1\u5E01 +150%\uFF1B\u4F46\u751F\u547D\u4E0A\u9650\u9501\u5B9A\u4E3A 1" }
  ]
};

// src/core/DataManager.ts
var DataManager = class _DataManager {
  static instance;
  loaded = false;
  constructor() {
  }
  static getInstance() {
    if (!_DataManager.instance) _DataManager.instance = new _DataManager();
    return _DataManager.instance;
  }
  loadAll() {
    this.loaded = true;
  }
  get config() {
    return gameConfig_default;
  }
  /** 药水素材图路径（public/img/p_<tier>.png；素材统一放 public/img，短文件名） */
  potionIconSrc(tier) {
    return `img/p_${tier}.png`;
  }
  /** 药水素材 <img> 标签（UI 通用） */
  potionIconImg(tier, cls = "potion-icon") {
    return `<img class="${cls}" src="${this.potionIconSrc(tier)}" alt="${tier}" draggable="false">`;
  }
  get mapGen() {
    return mapGeneration_default;
  }
  get monsters() {
    return monsters_default;
  }
  get potions() {
    return potions_default;
  }
  get equipment() {
    return equipmentTables_default;
  }
  get npcs() {
    return npcs_default;
  }
  get quests() {
    return quests_default;
  }
  get economy() {
    return economy_default;
  }
  get events() {
    return events_default;
  }
  get texts() {
    return texts_default;
  }
  get settings() {
    return settings_default;
  }
  get relics() {
    return relics_default;
  }
  getMonster(id) {
    return this.monsters.monsters.find((m) => m.id === id);
  }
  getPotion(tier) {
    return this.potions.potions.find((p) => p.tier === tier);
  }
  getNpc(id) {
    return this.npcs.npcs.find((n) => n.id === id);
  }
  getQuest(id) {
    return this.quests.quests.find((q) => q.id === id);
  }
  getRelic(id) {
    return this.relics.relics.find((r) => r.id === id);
  }
  get isLoaded() {
    return this.loaded;
  }
};
var dataManager = DataManager.getInstance();

// src/utils/MathUtils.ts
var MathUtils = class {
  static clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  static lerp(a, b, t) {
    return a + (b - a) * t;
  }
  /** 曼哈顿距离 */
  static manhattan(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  /** 欧氏距离 */
  static dist(x1, y1, x2, y2) {
    return Math.hypot(x1 - x2, y1 - y2);
  }
};
var rng = {
  next() {
    return Math.random();
  },
  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  randFloat(min, max) {
    return Math.random() * (max - min) + min;
  },
  chance(p) {
    return Math.random() < p;
  },
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  pickWeighted(arr, weightFn) {
    const weights = arr.map(weightFn);
    const total = weights.reduce((s, w) => s + w, 0);
    if (total <= 0) return arr[0];
    let roll = Math.random() * total;
    for (let i = 0; i < arr.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return arr[i];
    }
    return arr[arr.length - 1];
  },
  shuffle(arr) {
    const r = [...arr];
    for (let i = r.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [r[i], r[j]] = [r[j], r[i]];
    }
    return r;
  }
};

// src/utils/Grid.ts
var DIRS4 = [[0, 1], [0, -1], [1, 0], [-1, 0]];
function manhattan(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function cellKey(x, y) {
  return `${x},${y}`;
}
function ptKey(p) {
  return cellKey(p.x, p.y);
}
function doorInner(d) {
  switch (d.direction) {
    case "east":
      return { x: d.x - 1, y: d.y };
    case "west":
      return { x: d.x + 1, y: d.y };
    case "north":
      return { x: d.x, y: d.y + 1 };
    default:
      return { x: d.x, y: d.y - 1 };
  }
}

// src/utils/Logger.ts
var Logger = class _Logger {
  static level = "info";
  static order = { debug: 0, info: 1, warn: 2, error: 3 };
  static setLevel(level) {
    _Logger.level = level;
  }
  static shouldLog(level) {
    return _Logger.order[level] >= _Logger.order[_Logger.level];
  }
  static debug(...args) {
    if (_Logger.shouldLog("debug")) console.log("[DEBUG]", ...args);
  }
  static info(...args) {
    if (_Logger.shouldLog("info")) console.log("[INFO]", ...args);
  }
  static warn(...args) {
    if (_Logger.shouldLog("warn")) console.warn("[WARN]", ...args);
  }
  static error(...args) {
    if (_Logger.shouldLog("error")) console.error("[ERROR]", ...args);
  }
};

// src/data/tiers.ts
var MAX_FLOOR = 110;
var TIERS = [
  {
    id: "base",
    name: "\u5854\u697C\u5E95\u90E8",
    fullName: "\u5854\u697C\u5E95\u90E8 \xB7 \u9752\u7816\u4E16\u754C",
    fromFloor: 1,
    toFloor: 15,
    titleCard: {
      big: "\u9752\u7816\u4E4B\u57FA",
      vibe: "\u51B0\u51B7\u7684\u7816\u77F3\u56F4\u6210\u4E00\u4E2A\u4E16\u754C\uFF0C\u4F60\u4ECE\u8FD9\u91CC\u9192\u6765\u3002\u5411\u4E0A\uFF0C\u662F\u552F\u4E00\u7684\u51FA\u8DEF\u3002",
      main: "#6b7b8c",
      sub: "#2b3a4a",
      glow: "#dfe9f4",
      fontClass: "tt-stone",
      bg: "brick"
    },
    light: { hemiSky: 5069426, hemiGround: 2366226, hemiIntensity: 0.45, dirColor: 14674431, dirIntensity: 0.38 },
    grade: { tint: [0.88, 0.96, 1.12], tintStrength: 0.22, vignette: 0.1 },
    bgColor: 329741,
    sky: false,
    wall: "brick",
    windowView: "rooftops",
    particle: "none",
    floorTint: 16777215,
    windowGlow: 9414848,
    uiAccent: "#8fb3d9",
    uiAccentCool: "#5a7ba0",
    corridor: {
      variant: "balustrade",
      postColor: 4608607,
      railColor: 7043980,
      metalness: 0.2,
      roughness: 0.72,
      balusters: 3,
      finial: true
    }
  },
  {
    id: "garden",
    name: "\u5E95\u5C42",
    fullName: "\u5E95\u5C42 \xB7 \u82D4\u56ED\u4E0E\u953B\u7A9F",
    fromFloor: 16,
    toFloor: 40,
    titleCard: {
      big: "\u82D4\u56ED\u953B\u706B",
      vibe: "\u85E4\u8513\u6500\u4E0A\u7194\u7089\uFF0C\u8349\u6728\u4E0E\u94C1\u7827\u5171\u751F\u3002\u6B64\u5904\u4E07\u7269\u90FD\u5728\u88AB\u953B\u9020\u2014\u2014\u5305\u62EC\u4F60\u3002",
      main: "#7db56a",
      sub: "#d9722e",
      glow: "#ffd9a0",
      fontClass: "tt-vine",
      bg: "moss"
    },
    light: { hemiSky: 5929560, hemiGround: 3153935, hemiIntensity: 0.5, dirColor: 16771529, dirIntensity: 0.42 },
    grade: { tint: [1.06, 1, 0.88], tintStrength: 0.18, vignette: 0.2 },
    bgColor: 462601,
    sky: false,
    wall: "moss",
    windowView: "garden",
    particle: "spore",
    floorTint: 15398367,
    windowGlow: 14250542,
    uiAccent: "#8fc77a",
    uiAccentCool: "#d9722e",
    corridor: {
      variant: "timber",
      postColor: 5126696,
      railColor: 7296566,
      metalness: 0.06,
      roughness: 0.85,
      balusters: 0,
      finial: false
    },
    whisper: "\u8FD8\u5728\u5411\u4E0A\u4E48\uFF1F\u2026\u2026\u4E5F\u597D\u3002"
  },
  {
    id: "library",
    name: "\u4E2D\u5C42",
    fullName: "\u4E2D\u5C42 \xB7 \u56FE\u4E66\u9986",
    fromFloor: 41,
    toFloor: 60,
    titleCard: {
      big: "\u9759\u9ED8\u4E66\u6D77",
      vibe: "\u4E66\u9875\u7684\u6C14\u606F\u6F2B\u8FC7\u77F3\u9636\uFF0C\u5343\u4E07\u5377\u6C89\u9ED8\u7684\u77E5\u8BC6\u5728\u7B49\u4F60\u7FFB\u9605\u3002",
      main: "#e8dcc0",
      sub: "#7a5a3a",
      glow: "#ffe9bd",
      fontClass: "tt-serif",
      bg: "book"
    },
    light: { hemiSky: 6969928, hemiGround: 2759696, hemiIntensity: 0.48, dirColor: 16767392, dirIntensity: 0.4 },
    grade: { tint: [1.1, 1, 0.82], tintStrength: 0.2, vignette: 0.22 },
    bgColor: 854534,
    sky: false,
    wall: "shelf",
    windowView: "clouds",
    particle: "dust",
    floorTint: 16115922,
    windowGlow: 15260864,
    uiAccent: "#e0c294",
    uiAccentCool: "#a0785a",
    corridor: {
      variant: "panel",
      postColor: 4601127,
      railColor: 8018490,
      metalness: 0.14,
      roughness: 0.8,
      balusters: 0,
      finial: true
    },
    whisper: "\u4E66\u9875\u7FFB\u52A8\u7684\u65F6\u5019\uFF0C\u5854\u4E5F\u5728\u8BFB\u4F60\u3002"
  },
  {
    id: "observatory",
    name: "\u9AD8\u5C42",
    fullName: "\u9AD8\u5C42 \xB7 \u89C2\u661F\u53F0",
    fromFloor: 61,
    toFloor: 80,
    titleCard: {
      big: "\u661F\u5782\u65F7\u91CE",
      vibe: "\u5934\u9876\u662F\u65CB\u8F6C\u7684\u661F\u6CB3\uFF0C\u811A\u4E0B\u662F\u6E3A\u5C0F\u7684\u5854\u8EAB\u3002\u79BB\u5929\uFF0C\u4F3C\u4E4E\u8FD1\u4E86\u4E00\u6B65\u3002",
      main: "#8fb0e8",
      sub: "#5a3a7a",
      glow: "#b8c8ff",
      fontClass: "tt-star",
      bg: "stars",
      letterSpacing: 0.5
    },
    light: { hemiSky: 3820146, hemiGround: 1577512, hemiIntensity: 0.44, dirColor: 12110079, dirIntensity: 0.38 },
    grade: { tint: [0.86, 0.92, 1.16], tintStrength: 0.25, vignette: 0.26 },
    bgColor: 461074,
    sky: true,
    wall: "starstone",
    windowView: "starry",
    particle: "stardust",
    floorTint: 14673141,
    windowGlow: 9416936,
    uiAccent: "#9ab8ea",
    uiAccentCool: "#8d7ad0",
    corridor: {
      variant: "balustrade",
      postColor: 2503249,
      railColor: 9416936,
      metalness: 0.55,
      roughness: 0.34,
      balusters: 4,
      finial: true,
      glow: 9416936,
      accents: "rune"
    },
    whisper: "\u661F\u661F\u4E0D\u8BF4\u8BDD\u3002\u5B83\u4EEC\u53EA\u662F\u5728\u770B\u3002"
  },
  {
    id: "clock",
    name: "\u949F\u697C",
    fullName: "\u9876\u90E8\u524D\u8FC7\u6E21 \xB7 \u949F\u697C",
    fromFloor: 81,
    toFloor: 100,
    titleCard: {
      big: "\u65F6\u8F6E\u4E4B\u5DC5",
      vibe: "\u5DE8\u5927\u7684\u9F7F\u8F6E\u5728\u5934\u9876\u54AC\u5408\uFF0C\u65F6\u95F4\u88AB\u62E7\u6210\u53D1\u6761\u3002\u518D\u5F80\u4E0A\uFF0C\u4FBF\u662F\u7EC8\u70B9\u3002",
      main: "#d9b878",
      sub: "#b08d57",
      glow: "#ffe2a8",
      fontClass: "tt-brass",
      bg: "gears"
    },
    light: { hemiSky: 6050368, hemiGround: 2366480, hemiIntensity: 0.46, dirColor: 15258272, dirIntensity: 0.4 },
    grade: { tint: [1.1, 0.98, 0.8], tintStrength: 0.2, vignette: 0.28 },
    bgColor: 723206,
    sky: false,
    wall: "brass",
    windowView: "gears",
    particle: "ember",
    floorTint: 15786696,
    windowGlow: 14268536,
    uiAccent: "#d9b878",
    uiAccentCool: "#7a9ec4",
    corridor: {
      variant: "balustrade",
      postColor: 5981472,
      railColor: 14268536,
      metalness: 0.78,
      roughness: 0.3,
      balusters: 2,
      finial: true,
      glow: 14268536,
      accents: "rivet"
    },
    whisper: "\u53D1\u6761\u62E7\u7D27\u4E86\u3002\u4F60\u542C\u89C1\u4E86\u5417\u3002"
  },
  {
    id: "summit",
    name: "\u5854\u9876",
    fullName: "\u5854\u9876",
    fromFloor: 101,
    toFloor: MAX_FLOOR,
    titleCard: {
      big: "\u767B\u3000\u9876",
      vibe: "\u4F60\u4EE5\u4E3A\u62B5\u8FBE\u4E86\u7EC8\u70B9\u3002\u95E8\u540E\u5374\u7A7A\u65E0\u4E00\u7269\u2014\u2014\u6216\u8005\u8BF4\uFF0C\u662F\u53E6\u4E00\u6BB5\u65C5\u7A0B\u7684\u8D77\u70B9\u3002",
      main: "#f0e9d8",
      sub: "#d4af6a",
      glow: "#fff7e0",
      fontClass: "tt-minimal",
      bg: "halo",
      letterSpacing: 0.9
    },
    light: { hemiSky: 9078904, hemiGround: 3815470, hemiIntensity: 0.58, dirColor: 16774880, dirIntensity: 0.5 },
    grade: { tint: [1.06, 1.04, 0.97], tintStrength: 0.12, vignette: 0.3 },
    bgColor: 1184282,
    sky: true,
    wall: "marble",
    windowView: "light",
    particle: "none",
    floorTint: 16775402,
    windowGlow: 16773839,
    uiAccent: "#e6ddc4",
    uiAccentCool: "#d4af6a",
    corridor: {
      variant: "balustrade",
      postColor: 14471864,
      railColor: 15788504,
      metalness: 0.12,
      roughness: 0.52,
      balusters: 3,
      finial: true,
      glow: 16775136
    }
  }
];
function isTierStartFloor(floorId) {
  return TIERS.some((t) => t.fromFloor === floorId);
}

// src/map/FloorGenerator.ts
var RAIL_TENSION_FACTOR = {
  A: { combat: 0.8, elite: 0.7 },
  B: { combat: 1, elite: 1.2 }
};
var RAIL_ELITE_CHANCE = { A: 0.45, B: 0.15 };
var FloorGenerator = class _FloorGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_FloorGenerator.instance) _FloorGenerator.instance = new _FloorGenerator();
    return _FloorGenerator.instance;
  }
  /** 判定楼层类型：第1层固定初始层；第110层固定塔顶（假终点）；楼层号%5===0 为Boss层 */
  getFloorKind(floorId) {
    const cfg = dataManager.mapGen;
    if (floorId === cfg.initialFloor) return "initial";
    if (floorId === MAX_FLOOR) return "summit";
    if (floorId % cfg.bossFloorInterval === 0) return "boss";
    return "normal";
  }
  /**
   * 分配楼层房间类型。
   * 初始层/Boss层/塔顶层不参与随机分配，直接返回固定结构。
   */
  allocate(floorId) {
    const kind = this.getFloorKind(floorId);
    if (kind === "initial") {
      return { floorId, kind, roomTypes: ["start", "end"] };
    }
    if (kind === "boss") {
      return { floorId, kind, roomTypes: ["rest", "boss", "end"] };
    }
    if (kind === "summit") {
      return { floorId, kind, roomTypes: ["start", "end"] };
    }
    const count = this.rollRoomCount(floorId);
    const allocatable = count - 2;
    const { types, hints } = this.allocateByTension(floorId, allocatable);
    this.guaranteeEliteRoomsFloor(types, hints);
    return {
      floorId,
      kind,
      roomTypes: ["start", ...types, "end"],
      railHints: [null, ...hints, null]
    };
  }
  /** 普通楼层房间数量（文档二 2.2） */
  rollRoomCount(floorId) {
    const cfg = dataManager.mapGen;
    const band = cfg.floorRoomCounts.find((b) => floorId >= b.minFloor && floorId <= b.maxFloor) ?? cfg.floorRoomCounts[cfg.floorRoomCounts.length - 1];
    const count = rng.randInt(band.min, band.max);
    return Math.min(count, cfg.maxRooms);
  }
  /**
   * 运气平衡器（文档二 2.4 / P0-3 修订）：张力值 Tension 机制。
   * 正面概率 = 1/(1+e^(-Tension))；Tension≥5 强制正面，≤-4 强制负面；每层重置。
   * 双路径独立计算：主干槽位在 A/B 间轮转（A 先拿，保证路径长度差≤1），
   * 正负判定用当前归属路径的 Tension；负面权重乘路径系数，正面/侧室按原值计入。
   * 特殊约束：商人数量限制（总数≤7 最多1个，8-12 最多2个），优先级高于平衡器。
   */
  allocateByTension(floorId, allocatable) {
    const cfg = dataManager.mapGen;
    const weights = cfg.tension.weights;
    const tension = { A: 0, B: 0 };
    let merchantCount = 0;
    const result = [];
    const hints = [];
    let rail = "A";
    const addTension = (value) => {
      tension[rail] += value;
    };
    for (let i = 0; i < allocatable; i++) {
      const totalSoFar = result.length + 2;
      const merchantCap = totalSoFar <= cfg.merchantLimit.fewMaxRooms ? cfg.merchantLimit.fewCount : cfg.merchantLimit.manyCount;
      let positive;
      if (tension[rail] >= cfg.tension.forcePositiveAt) {
        positive = true;
      } else if (tension[rail] <= cfg.tension.forceNegativeAt) {
        positive = false;
      } else {
        positive = rng.chance(1 / (1 + Math.exp(-tension[rail])));
      }
      let type;
      if (positive) {
        const merchantAllowed = merchantCount < merchantCap;
        type = merchantAllowed && rng.chance(0.3) ? "merchant" : "chest";
        if (type === "merchant") merchantCount++;
        addTension(weights[type] ?? 0);
        result.push(type);
        hints.push(null);
      } else {
        type = rng.chance(RAIL_ELITE_CHANCE[rail]) ? "elite" : "combat";
        const factor = type === "elite" ? RAIL_TENSION_FACTOR[rail].elite : RAIL_TENSION_FACTOR[rail].combat;
        addTension((weights[type] ?? 0) * factor);
        result.push(type);
        hints.push(rail);
        rail = rail === "A" ? "B" : "A";
      }
    }
    if (this.isWitchFloor(floorId)) {
      const idx = result.findIndex((t) => t === "chest");
      const target = idx >= 0 ? idx : result.length - 1;
      if (target >= 0) {
        this.swapSafeRoom(result, hints, target, "witch", tension);
      }
    }
    if (this.isBlacksmithFloor(floorId) && !this.isWitchFloor(floorId)) {
      const idx = result.findIndex((t) => t === "chest");
      const target = idx >= 0 ? idx : result.length - 1;
      if (target >= 0) {
        this.swapSafeRoom(result, hints, target, "blacksmith", tension);
      }
    }
    Logger.debug(`[FloorGen] \u697C\u5C42${floorId} \u7C7B\u578B\u5206\u914D=${result.join(",")} \u7EC8\u6001Tension A=${tension.A} B=${tension.B}`);
    return { types: result, hints };
  }
  /** 安全房替换宝箱位：张力按原值差量同步到双路径（侧室为全层安全阀） */
  swapSafeRoom(types, hints, idx, type, tension) {
    const weights = dataManager.mapGen.tension.weights;
    const delta = (weights[type] ?? 0) - (weights[types[idx]] ?? 0);
    tension.A += delta;
    tension.B += delta;
    types[idx] = type;
    hints[idx] = null;
  }
  /**
   * 精英房数量保底（P0-3）：普通楼层且房间总数≥6 时，每层 1~2 个精英房。
   * 不足时优先把路径 A 中第 2 个战斗房替换为精英房（避开相邻精英，防连续违规）；
   * 超出时保留最深的 2 个，多余者降为战斗房。初始层/Boss 层不执行（入口处已分流）。
   */
  guaranteeEliteRoomsFloor(types, hints) {
    if (types.length + 2 < 6) return;
    const eliteIdx = types.reduce((acc, t, i) => {
      if (t === "elite") acc.push(i);
      return acc;
    }, []);
    if (eliteIdx.length > 2) {
      for (const i of eliteIdx.slice(0, eliteIdx.length - 2)) {
        types[i] = "combat";
      }
      return;
    }
    if (eliteIdx.length > 0) return;
    const railSeq = (rail) => types.reduce((acc, _t, i) => {
      if (hints[i] === rail) acc.push(i);
      return acc;
    }, []);
    const noEliteNeighbor = (seq, pos) => (pos <= 0 || types[seq[pos - 1]] !== "elite") && (pos + 1 >= seq.length || types[seq[pos + 1]] !== "elite");
    const pickFrom = (rail, minSeqPos) => {
      const seq = railSeq(rail);
      const combatPos = seq.map((ti, pos) => ({ ti, pos })).filter((p) => types[p.ti] === "combat");
      if (combatPos.length >= 2 && combatPos[1].pos >= minSeqPos && noEliteNeighbor(seq, combatPos[1].pos)) {
        return combatPos[1].ti;
      }
      for (let k = combatPos.length - 1; k >= 0; k--) {
        if (combatPos[k].pos >= minSeqPos && noEliteNeighbor(seq, combatPos[k].pos)) return combatPos[k].ti;
      }
      return -1;
    };
    let pick = pickFrom("A", 1);
    if (pick < 0) pick = pickFrom("B", 1);
    if (pick < 0) pick = pickFrom("A", 0);
    if (pick >= 0) {
      types[pick] = "elite";
    } else {
      const last = types.length - 1;
      if (last >= 0) {
        types[last] = "elite";
        hints[last] = "A";
      }
    }
  }
  /** 女巫酿药间出现楼层：最早 minFloor 起，每 interval 层一间（5~8 层区间内） */
  isWitchFloor(floorId) {
    const cfg = dataManager.mapGen.witchLimit;
    return floorId >= cfg.minFloor && (floorId - cfg.minFloor) % cfg.interval === 0;
  }
  /** 铁匠铺出现楼层：最早 minFloor 起，每 interval 层一间 */
  isBlacksmithFloor(floorId) {
    const cfg = dataManager.mapGen.blacksmithLimit;
    return floorId >= cfg.minFloor && (floorId - cfg.minFloor) % cfg.interval === 0;
  }
};

// src/map/PathGenerator.ts
var PathGenerator = class _PathGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_PathGenerator.instance) _PathGenerator.instance = new _PathGenerator();
    return _PathGenerator.instance;
  }
  plan(alloc) {
    const middle = alloc.roomTypes.slice(1, -1);
    if (alloc.kind !== "normal" || middle.length < 2) {
      return alloc.roomTypes.map((type, i) => ({
        type,
        rail: i === 0 ? "S" : i === alloc.roomTypes.length - 1 ? "E" : "A",
        railIndex: Math.max(0, i - 1),
        mountIndex: -1,
        isTrunk: true
      }));
    }
    const railA = [];
    const railB = [];
    const sideRooms = [];
    const hints = alloc.railHints;
    if (hints) {
      middle.forEach((type, i) => {
        const h = hints[i + 1];
        if (h === "A") railA.push(type);
        else if (h === "B") railB.push(type);
        else sideRooms.push(type);
      });
    } else {
      const trunkCandidates = middle.filter((t) => t === "combat" || t === "elite");
      sideRooms.push(...middle.filter((t) => t === "chest" || t === "merchant" || t === "witch" || t === "blacksmith"));
      const sorted = [...trunkCandidates];
      sorted.sort((a, b) => (a === "elite" ? 0 : 1) - (b === "elite" ? 0 : 1));
      sorted.forEach((t, i) => {
        if (i % 2 === 0) railA.push(t);
        else railB.push(t);
      });
    }
    if (railB.length === 0 && railA.length >= 2) railB.push(railA.shift());
    if (railA.length === 0 && railB.length >= 2) railA.push(railB.shift());
    this.deferLeadingElites(railA);
    this.deferLeadingElites(railB);
    this.enforceRailConstraints(railA);
    this.enforceRailConstraints(railB);
    this.deferLeadingElites(railA);
    this.deferLeadingElites(railB);
    this.guaranteeEliteRooms(railA, railB, middle.length + 2);
    this.insertRestRooms(railA, railB, middle.length + 2);
    const trunkLen = railA.length + railB.length;
    const mounts = sideRooms.map((type) => {
      const midOffset = type === "merchant" || type === "witch" || type === "blacksmith" ? Math.floor(trunkLen / 2) : rng.randInt(Math.ceil(trunkLen / 2), trunkLen - 1);
      return { type, mountIndex: Math.min(midOffset, trunkLen - 1) };
    });
    const chain = [{
      type: alloc.roomTypes[0],
      rail: "S",
      railIndex: 0,
      mountIndex: -1,
      isTrunk: true
    }];
    const pushTrunk = (type, rail, railIndex) => {
      chain.push({ type, rail, railIndex, mountIndex: -1, isTrunk: true });
      const trunkOrder = railIndex * 2 + (rail === "A" ? 0 : 1);
      const sidesHere = mounts.map((m, mi) => ({ ...m, mi })).filter((m) => m.mountIndex === trunkOrder);
      for (const s of sidesHere) {
        chain.push({ type: s.type, rail: "side", railIndex: -1, mountIndex: trunkOrder, isTrunk: false });
      }
    };
    const n = Math.max(railA.length, railB.length);
    for (let i = 0; i < n; i++) {
      if (i < railA.length) pushTrunk(railA[i], "A", i);
      if (i < railB.length) pushTrunk(railB[i], "B", i);
    }
    for (const s of mounts) {
      const trunkOrder = s.mountIndex;
      const already = chain.some((c) => c.rail === "side" && c.mountIndex === trunkOrder && c.type === s.type);
      if (!already && !chain.some((c) => c.mountIndex === trunkOrder && c.rail === "side")) {
        chain.splice(chain.length - 1, 0, { type: s.type, rail: "side", railIndex: -1, mountIndex: trunkOrder, isTrunk: false });
      }
    }
    chain.push({ type: "end", rail: "E", railIndex: 0, mountIndex: -1, isTrunk: true });
    this.logRailTension(alloc.floorId, railA, railB);
    return chain;
  }
  /** 精英房避开路径首位：与后方最近的非精英房间互换（深度不足时顺延；无可换则保持） */
  deferLeadingElites(rail) {
    if (rail.length < 2 || rail[0] !== "elite") return;
    for (let j = 1; j < rail.length; j++) {
      if (rail[j] !== "elite") {
        [rail[0], rail[j]] = [rail[j], rail[0]];
        return;
      }
    }
  }
  /**
   * 路径内连续硬约束（P0-4）：
   *   禁止连续 2 个精英房；禁止连续 3 个战斗房。
   * 触发违规时，将序列中最后一个违规房间强制替换为宝箱房（房间仍留在主干上）。
   */
  enforceRailConstraints(rail) {
    for (let i = 1; i < rail.length; i++) {
      if (rail[i] === "elite" && rail[i - 1] === "elite") rail[i] = "chest";
    }
    for (let i = 2; i < rail.length; i++) {
      if (rail[i] === "combat" && rail[i - 1] === "combat" && rail[i - 2] === "combat") rail[i] = "chest";
    }
  }
  /**
   * 精英保底复核（P0-3 步骤3与 P0-4 步骤7 协同）：
   * 普通楼层（房间总数≥6）在连续约束替换后仍保持 1~2 个精英房；
   * 优先在路径 A 的战斗房上补（避开精英邻居防连续违规），无战斗房时占用最深主干槽位。
   */
  guaranteeEliteRooms(railA, railB, totalRooms) {
    if (totalRooms < 6) return;
    const count = railA.filter((t) => t === "elite").length + railB.filter((t) => t === "elite").length;
    if (count >= 1) {
      if (count > 2) {
        const downgrade = (rail2) => {
          const lastIdx = rail2.map((t, i) => ({ t, i })).filter((p) => p.t === "elite").pop()?.i ?? -1;
          for (let i = 0; i < rail2.length; i++) {
            if (rail2[i] === "elite" && i !== lastIdx) rail2[i] = "combat";
          }
        };
        downgrade(railA);
        downgrade(railB);
      }
      return;
    }
    const spotOn = (rail2, requireDeep) => {
      const start = requireDeep ? 1 : 0;
      for (let i = rail2.length - 1; i >= start; i--) {
        if (rail2[i] !== "combat") continue;
        const prevElite = i > 0 && rail2[i - 1] === "elite";
        const nextElite = i + 1 < rail2.length && rail2[i + 1] === "elite";
        if (!prevElite && !nextElite) return i;
      }
      return -1;
    };
    let rail = railA;
    let idx = spotOn(railA, true);
    if (idx < 0) {
      rail = railB;
      idx = spotOn(railB, true);
    }
    if (idx < 0) {
      rail = railA;
      idx = spotOn(railA, false);
    }
    if (idx >= 0) {
      rail[idx] = "elite";
      this.enforceRailConstraints(rail);
      return;
    }
    const target = railA.length > 0 ? railA : railB;
    if (target.length > 0) target[target.length - 1] = "elite";
    else railA.push("elite");
  }
  /**
   * 保底休憩点（P1-3）：单条路径内每累计 4 个战斗/精英房，在其后插入 1 个休憩房（5×5）。
   * 双路径独立累计、互不影响；休憩房不占基础房间名额，从额外房间配额
   * （maxRooms − 楼层基础房间总数）中扣除，配额不足时停止插入。
   */
  insertRestRooms(railA, railB, baseTotal) {
    const quota = { left: Math.max(0, dataManager.mapGen.maxRooms - baseTotal) };
    const insertInto = (rail) => {
      let battles = 0;
      for (let i = 0; i < rail.length; i++) {
        if (rail[i] !== "combat" && rail[i] !== "elite") continue;
        battles++;
        if (battles % 4 === 0 && quota.left > 0) {
          rail.splice(i + 1, 0, "rest");
          quota.left--;
          i++;
        }
      }
    };
    insertInto(railA);
    insertInto(railB);
  }
  /** 替换后回退重算各路径 Tension（P0-3 新权重与路径系数；仅用于日志/验证） */
  logRailTension(floorId, railA, railB) {
    const weights = dataManager.mapGen.tension.weights;
    const factors = {
      A: { combat: 0.8, elite: 0.7 },
      B: { combat: 1, elite: 1.2 }
    };
    const calc2 = (rail, f) => rail.reduce((t, type) => {
      const w = weights[type] ?? 0;
      const factor = type === "combat" ? f.combat : type === "elite" ? f.elite : 1;
      return t + w * factor;
    }, 0);
    Logger.debug(`[PathGen] \u697C\u5C42${floorId} A=[${railA.join(",")}] T=${calc2(railA, factors.A).toFixed(1)} | B=[${railB.join(",")}] T=${calc2(railB, factors.B).toFixed(1)}`);
  }
  /** 长度差校验值：路径A与路径B的房间数差（文档要求 ≤2） */
  pathLengthDiff(plan) {
    const a = plan.filter((p) => p.rail === "A").length;
    const b = plan.filter((p) => p.rail === "B").length;
    return Math.abs(a - b);
  }
  /** 校验配置约束（冗余保险，ceil/floor 分配已保证） */
  validateDiff(plan) {
    return this.pathLengthDiff(plan) <= dataManager.mapGen.path.maxLengthDiff;
  }
};

// src/utils/IdGenerator.ts
var IdGenerator = class _IdGenerator {
  static counter = 0;
  static reset() {
    _IdGenerator.counter = 0;
  }
  static next(prefix) {
    _IdGenerator.counter += 1;
    return `${prefix}_${_IdGenerator.counter.toString(36)}`;
  }
  /** 装备实例唯一ID */
  static equipmentId() {
    _IdGenerator.counter += 1;
    return `eq_${Date.now().toString(36)}_${_IdGenerator.counter.toString(36)}_${Math.floor(Math.random() * 1e6).toString(36)}`;
  }
};

// src/map/RoomGenerator.ts
var DIR_VECTORS = {
  north: { dx: 0, dy: -1 },
  south: { dx: 0, dy: 1 },
  east: { dx: 1, dy: 0 },
  west: { dx: -1, dy: 0 }
};
var OPPOSITE = {
  north: "south",
  south: "north",
  east: "west",
  west: "east"
};
var RoomGenerator = class _RoomGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_RoomGenerator.instance) _RoomGenerator.instance = new _RoomGenerator();
    return _RoomGenerator.instance;
  }
  /**
   * 按链顺序放置房间。返回 null 表示放置失败（由上层重试整层）。
   */
  place(floorId, plan) {
    const cfg = dataManager.mapGen;
    const R = cfg.gridRadius;
    const maxW = this.maxSpecWidth();
    const maxH = this.maxSpecHeight();
    const gridW = 2 * R * cfg.cellSpacingX + maxW;
    const gridH = 2 * R * cfg.cellSpacingY + maxH;
    const occupied = /* @__PURE__ */ new Map();
    const rooms = [];
    const dirHistory = [];
    const railPos = /* @__PURE__ */ new Map();
    for (let i = 0; i < plan.length; i++) {
      const planned = plan[i];
      let gx = 0;
      let gy = 0;
      let fromDirection = null;
      if (i === 0) {
        gx = 0;
        gy = 0;
      } else {
        const prev = rooms[i - 1];
        const target = this.biasTarget(planned, plan, rooms, railPos);
        const choice = this.chooseCell(prev.gx, prev.gy, occupied, dirHistory, target);
        if (!choice) return null;
        gx = choice.gx;
        gy = choice.gy;
        fromDirection = choice.direction;
      }
      const key = `${gx},${gy}`;
      if (occupied.has(key)) return null;
      occupied.set(key, i);
      const size = this.rollSize(planned.type, floorId);
      const x = (gx + R) * cfg.cellSpacingX;
      const y = (gy + R) * cfg.cellSpacingY;
      const room = {
        id: `room_${floorId}_${i}`,
        floorId,
        type: planned.type,
        order: i,
        gx,
        gy,
        width: size.width,
        height: size.height,
        x,
        y,
        centerX: x + Math.floor(size.width / 2),
        centerY: y + Math.floor(size.height / 2),
        fromDirection,
        depth: 0,
        onPathA: planned.rail === "A",
        onPathB: planned.rail === "B",
        mountedOn: planned.rail === "side" ? this.mountedOnId(plan, planned, floorId) : null,
        doors: [],
        entities: []
      };
      rooms.push(room);
      if (planned.rail === "A" || planned.rail === "B") {
        railPos.set(`${planned.rail}${planned.railIndex}`, { gx, gy });
      }
      if (fromDirection) dirHistory.push(fromDirection);
    }
    const grid = Array.from({ length: gridH }, () => Array.from({ length: gridW }, () => -1));
    for (const room of rooms) {
      for (let ry = room.y; ry <= room.y + room.height - 1; ry++) {
        for (let rx = room.x; rx <= room.x + room.width - 1; rx++) {
          grid[ry][rx] = 1;
        }
      }
      for (let ry = room.y + 1; ry <= room.y + room.height - 2; ry++) {
        for (let rx = room.x + 1; rx <= room.x + room.width - 2; rx++) {
          grid[ry][rx] = 0;
        }
      }
    }
    void IdGenerator.next("gen");
    return { rooms, grid };
  }
  /** 计算偏置目标格：同路径前驱 / 起点闭合边 / 终点闭合边 */
  biasTarget(planned, plan, rooms, railPos) {
    if (planned.rail === "A" && planned.railIndex > 0) {
      return railPos.get(`A${planned.railIndex - 1}`) ?? null;
    }
    if (planned.rail === "B" && planned.railIndex > 0) {
      return railPos.get(`B${planned.railIndex - 1}`) ?? null;
    }
    if (planned.rail === "B" && planned.railIndex === 0) {
      return { gx: 0, gy: 0 };
    }
    if (planned.rail === "E") {
      const lastA = plan.filter((p) => p.rail === "A").length - 1;
      if (lastA >= 0) return railPos.get(`A${lastA}`) ?? null;
    }
    return null;
  }
  /**
   * 方向选择：先应用硬约束（禁止重合 + 距离≤2√2 + 边界），
   * 再按放宽阶梯应用软约束（禁止折返 → 连续直走限制），带偏置评分。
   */
  chooseCell(px, py, occupied, dirHistory, bias) {
    const cfg = dataManager.mapGen;
    const R = cfg.gridRadius;
    const maxDist = 2 * Math.SQRT2 + 1e-9;
    const lastDir = dirHistory[dirHistory.length - 1] ?? null;
    const allDirs = ["north", "south", "east", "west"];
    const shuffled = rng.shuffle(allDirs);
    const inBounds = (gx, gy) => Math.abs(gx) <= R && Math.abs(gy) <= R;
    const tryPick = (allowReverse, allowStraight) => {
      const candidates = [];
      for (const dir of shuffled) {
        if (!allowReverse && lastDir && dir === OPPOSITE[lastDir]) continue;
        if (!allowStraight && this.isThirdStraight(dir, dirHistory)) continue;
        const { dx, dy } = DIR_VECTORS[dir];
        const gx = px + dx;
        const gy = py + dy;
        if (occupied.has(`${gx},${gy}`)) continue;
        if (!inBounds(gx, gy)) continue;
        if (MathUtils.dist(gx, gy, 0, 0) > maxDist) continue;
        let score = rng.next();
        if (bias && MathUtils.manhattan(gx, gy, bias.gx, bias.gy) <= 1) score += 3;
        candidates.push({ gx, gy, direction: dir, score });
      }
      if (candidates.length === 0) return null;
      candidates.sort((a, b) => b.score - a.score);
      return candidates[0];
    };
    return tryPick(false, false) ?? tryPick(true, false) ?? tryPick(true, true) ?? this.nearestFreeCell(px, py, occupied, R);
  }
  /** 第3次连续同向判定 */
  isThirdStraight(dir, history) {
    const n = history.length;
    if (n < 2) return false;
    return history[n - 1] === dir && history[n - 2] === dir;
  }
  /** 强制选择：打破常规约束（折返/直走/优先级），取距离约束内最近的空白方向 */
  nearestFreeCell(px, py, occupied, R) {
    let best = null;
    let bestD = Infinity;
    for (const dir of Object.keys(DIR_VECTORS)) {
      const { dx, dy } = DIR_VECTORS[dir];
      const gx = px + dx;
      const gy = py + dy;
      if (occupied.has(`${gx},${gy}`)) continue;
      if (Math.abs(gx) > R || Math.abs(gy) > R) continue;
      if (MathUtils.dist(gx, gy, 0, 0) > 2 * Math.SQRT2 + 1e-9) continue;
      const d = MathUtils.dist(gx, gy, 0, 0);
      if (d < bestD) {
        bestD = d;
        best = { gx, gy, direction: dir };
      }
    }
    return best;
  }
  /**
   * 房间规格（文档二 4.1）：表中数值 = 内部可活动空间（不含外圈墙壁），
   * 实际占地 = 规格 + 2（四面各一圈墙）。
   */
  rollSize(type, floorId = 0) {
    if (floorId === MAX_FLOOR && type === "end") {
      return { width: 11 + 2, height: 9 + 2 };
    }
    const spec = dataManager.mapGen.roomSpecs[type];
    const roll = (v) => Array.isArray(v) ? rng.randInt(v[0], v[1]) : v;
    const innerW = Math.max(dataManager.mapGen.minRoomWidth, roll(spec.width));
    const innerH = Math.max(dataManager.mapGen.minRoomHeight, roll(spec.height));
    return { width: innerW + 2, height: innerH + 2 };
  }
  maxSpecWidth() {
    let max = 0;
    for (const spec of Object.values(dataManager.mapGen.roomSpecs)) {
      const w = Array.isArray(spec.width) ? spec.width[1] : spec.width;
      max = Math.max(max, w);
    }
    return max + 2;
  }
  maxSpecHeight() {
    let max = 0;
    for (const spec of Object.values(dataManager.mapGen.roomSpecs)) {
      const h = Array.isArray(spec.height) ? spec.height[1] : spec.height;
      max = Math.max(max, h);
    }
    return max + 2;
  }
  /** 侧室挂载的主干房间ID（挂载点在链上的前一个主干房间） */
  mountedOnId(plan, planned, floorId) {
    const idx = plan.indexOf(planned);
    for (let i = idx - 1; i >= 0; i--) {
      if (plan[i].isTrunk) return `room_${floorId}_${i}`;
    }
    return null;
  }
};

// src/map/CorridorGenerator.ts
var CorridorGenerator = class _CorridorGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_CorridorGenerator.instance) _CorridorGenerator.instance = new _CorridorGenerator();
    return _CorridorGenerator.instance;
  }
  connect(rooms, grid) {
    const corridors = [];
    const connections = [];
    const connected = /* @__PURE__ */ new Set();
    const byId = new Map(rooms.map((r) => [r.id, r]));
    const markConnected = (a, b) => {
      connected.add(this.pairKey(a, b));
      connected.add(this.pairKey(b, a));
    };
    const isConnected = (a, b) => connected.has(this.pairKey(a, b));
    for (let i = 0; i + 1 < rooms.length; i++) {
      const a = rooms[i];
      const b = rooms[i + 1];
      const carved = this.carveCorridor(a, b, grid);
      if (!carved) continue;
      corridors.push({ id: IdGenerator.next("corr"), fromRoomId: a.id, toRoomId: b.id, tiles: carved.tiles, extra: false });
      connections.push({ from: a.id, to: b.id });
      markConnected(a.id, b.id);
    }
    const cfg = dataManager.mapGen.corridor;
    const adjacentPairs = [];
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const a = rooms[i];
        const b = rooms[j];
        if (isConnected(a.id, b.id)) continue;
        if (MathUtils.manhattan(a.gx, a.gy, b.gx, b.gy) > cfg.adjacentManhattan) continue;
        adjacentPairs.push({ a, b, priority: this.shortcutPriority(a, b, rooms) });
      }
    }
    adjacentPairs.sort((p, q) => p.priority - q.priority || rng.next() - 0.5);
    let extraCount = 0;
    let hasLoopShortcut = false;
    for (const pair of adjacentPairs) {
      if (extraCount >= cfg.extraMax) break;
      const roll = rng.chance(cfg.extraChance);
      if (!roll) continue;
      const carved = this.carveCorridor(pair.a, pair.b, grid);
      if (!carved) continue;
      corridors.push({ id: IdGenerator.next("corr"), fromRoomId: pair.a.id, toRoomId: pair.b.id, tiles: carved.tiles, extra: true });
      connections.push({ from: pair.a.id, to: pair.b.id });
      markConnected(pair.a.id, pair.b.id);
      extraCount++;
      if (pair.priority <= 1) hasLoopShortcut = true;
    }
    if (!hasLoopShortcut) {
      const fallback = adjacentPairs.find((p) => p.priority <= 1 && !isConnected(p.a.id, p.b.id) && extraCount < cfg.extraMax) ?? adjacentPairs.find((p) => p.priority <= 2 && !isConnected(p.a.id, p.b.id) && extraCount < cfg.extraMax);
      if (fallback) {
        const carved = this.carveCorridor(fallback.a, fallback.b, grid);
        if (carved) {
          corridors.push({ id: IdGenerator.next("corr"), fromRoomId: fallback.a.id, toRoomId: fallback.b.id, tiles: carved.tiles, extra: true });
          connections.push({ from: fallback.a.id, to: fallback.b.id });
          markConnected(fallback.a.id, fallback.b.id);
        }
      }
    }
    return { corridors, connections };
  }
  /**
   * 隐藏房间生成（P1-1）：每条额外通道 15% 概率在走廊侧墙外尝试生成一间封闭侧室。
   *   - 固定 5×5（含墙 7×7），入口 = 走廊侧面墙的 1 格（保留墙形态，靠近才挖开）
   *   - 内部区域必须完全处于虚空（-1），外墙圈不得切断既有走廊/房间地板（0）
   *   - 深度 = 相邻走廊两端房间深度的较小值 + 1
   *   - 不雕刻任何地形（发现前完全不可见）、不写 doors、不计入 Tension
   * 返回生成的隐藏房间列表（可能为空）。
   */
  spawnHiddenRooms(rooms, corridors, grid, floorId) {
    const byId = new Map(rooms.map((r) => [r.id, r]));
    const result = [];
    let index = 0;
    for (const corridor of corridors.filter((c) => c.extra)) {
      if (!rng.chance(0.15) || corridor.tiles.length === 0) continue;
      const room = this.trySpawnHidden(corridor, rooms, byId, grid, floorId, index);
      if (room) {
        result.push(room);
        index++;
      }
    }
    return result;
  }
  /** 单次尝试：随机走廊格 + 随机侧向，能放下 5×5 隐藏室则构建 RoomData（不雕刻地形） */
  trySpawnHidden(corridor, rooms, byId, grid, floorId, index) {
    const cfg = dataManager.mapGen;
    const dirs = rng.shuffle([
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 }
    ]);
    const tiles = rng.shuffle([...corridor.tiles]);
    for (const tile of tiles) {
      for (const d of dirs) {
        const ex = tile.x + d.dx;
        const ey = tile.y + d.dy;
        if (!this.insideGrid(grid, ex, ey) || grid[ey][ex] === 0) continue;
        const ix = ex + d.dx + (d.dx === 0 ? -2 : 0);
        const iy = ey + d.dy + (d.dy === 0 ? -2 : 0);
        const x = ix - 1;
        const y = iy - 1;
        const width = 7;
        const height = 7;
        if (!this.rectFitsHidden(grid, x, y, width, height, ex, ey)) continue;
        grid[ey][ex] = 1;
        const dA = byId.get(corridor.fromRoomId)?.depth ?? 1;
        const dB = byId.get(corridor.toRoomId)?.depth ?? 1;
        const depth = Math.min(dA, dB) + 1;
        return {
          id: `hidden_${floorId}_${index}`,
          floorId,
          type: "chest",
          order: rooms.length + index,
          gx: Math.round((x - 0) / cfg.cellSpacingX - cfg.gridRadius),
          gy: Math.round((y - 0) / cfg.cellSpacingY - cfg.gridRadius),
          width,
          height,
          x,
          y,
          centerX: x + Math.floor(width / 2),
          centerY: y + Math.floor(height / 2),
          fromDirection: null,
          depth,
          onPathA: false,
          onPathB: false,
          mountedOn: null,
          hiddenEntrance: { x: ex, y: ey },
          doors: [],
          entities: [],
          layout: "hidden"
        };
      }
    }
    return null;
  }
  /**
   * 隐藏室落位校验：整个 7×7 范围在网格内；
   * 内部 5×5 全为虚空（-1，绝不覆盖既有结构）；外墙圈除入口外只能是虚空或墙（-1/1），
   * 任何地板格（0）都说明切进了走廊/房间，弃用。
   */
  rectFitsHidden(grid, x, y, width, height, ex, ey) {
    for (let gy = y; gy < y + height; gy++) {
      for (let gx = x; gx < x + width; gx++) {
        if (!this.insideGrid(grid, gx, gy)) return false;
        const t = grid[gy][gx];
        if (gx > x && gx < x + width - 1 && gy > y && gy < y + height - 1) {
          if (t !== -1) return false;
        } else if (gx === ex && gy === ey) {
          continue;
        } else if (t === 0) {
          return false;
        }
      }
    }
    return true;
  }
  /** 捷径优先级：0=同路径相邻捷径 1=闭合边 2=其余 */
  shortcutPriority(a, b, rooms) {
    const sameRailAdjacent = a.onPathA && b.onPathA || a.onPathB && b.onPathB;
    const isStart = rooms[0];
    const isEnd = rooms[rooms.length - 1];
    const closingEdge = a === isStart && b.onPathB || b === isStart && a.onPathB || a === isEnd && b.onPathA || b === isEnd && a.onPathA;
    if (sameRailAdjacent) {
      return this.railGap(a, b) === 1 ? 0 : 2;
    }
    if (closingEdge) return 1;
    return 2;
  }
  /** 同路径序号差（非同路径返回 -1） */
  railGap(a, b) {
    return Math.abs(a.order - b.order);
  }
  /**
   * 在两个几何相邻房间之间挖一条直线走廊（含两侧开门）。
   * 返回走廊地面格；两房间非轴向相邻时返回 null。
   */
  carveCorridor(a, b, grid) {
    if (a.gy === b.gy && a.gx !== b.gx) {
      const west = a.gx < b.gx ? a : b;
      const east = a.gx < b.gx ? b : a;
      const rowTop = Math.max(west.y + 1, east.y + 1);
      const rowBottom = Math.min(west.y + west.height - 2, east.y + east.height - 2);
      if (rowTop > rowBottom) return null;
      const row = Math.floor((rowTop + rowBottom) / 2);
      const tiles = [];
      for (let x = west.x + west.width; x < east.x; x++) {
        if (this.insideGrid(grid, x, row)) {
          grid[row][x] = 0;
          tiles.push({ x, y: row });
        }
      }
      this.carveDoor(west, east, row, "east", grid);
      this.carveDoor(east, west, row, "west", grid);
      return { tiles };
    }
    if (a.gx === b.gx && a.gy !== b.gy) {
      const north = a.gy < b.gy ? a : b;
      const south = a.gy < b.gy ? b : a;
      const colLeft = Math.max(north.x + 1, south.x + 1);
      const colRight = Math.min(north.x + north.width - 2, south.x + south.width - 2);
      if (colLeft > colRight) return null;
      const col = Math.floor((colLeft + colRight) / 2);
      const tiles = [];
      for (let y = north.y + north.height; y < south.y; y++) {
        if (this.insideGrid(grid, col, y)) {
          grid[y][col] = 0;
          tiles.push({ x: col, y });
        }
      }
      this.carveDoor(north, south, col, "south", grid);
      this.carveDoor(south, north, col, "north", grid);
      return { tiles };
    }
    return null;
  }
  /** 在房间墙上开门并记录 */
  carveDoor(room, other, line, dir, grid) {
    let dx = 0;
    let dy = 0;
    if (dir === "east") {
      dx = room.x + room.width - 1;
      dy = line;
    } else if (dir === "west") {
      dx = room.x;
      dy = line;
    } else if (dir === "south") {
      dx = line;
      dy = room.y + room.height - 1;
    } else {
      dx = line;
      dy = room.y;
    }
    if (!this.insideGrid(grid, dx, dy)) return;
    if (dir === "east" || dir === "west") {
      if (dy <= room.y || dy >= room.y + room.height - 1) return;
    } else {
      if (dx <= room.x || dx >= room.x + room.width - 1) return;
    }
    grid[dy][dx] = 0;
    room.doors.push({ x: dx, y: dy, direction: dir, toRoomId: other.id });
  }
  insideGrid(grid, x, y) {
    return y >= 0 && y < grid.length && x >= 0 && x < grid[0].length;
  }
  pairKey(a, b) {
    return `${a}|${b}`;
  }
};

// src/core/EventBus.ts
var EventBus = class _EventBus {
  static instance;
  handlers = /* @__PURE__ */ new Map();
  constructor() {
  }
  static getInstance() {
    if (!_EventBus.instance) {
      _EventBus.instance = new _EventBus();
    }
    return _EventBus.instance;
  }
  on(event, handler) {
    let set = this.handlers.get(event);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      this.handlers.set(event, set);
    }
    set.add(handler);
  }
  once(event, handler) {
    const wrapped = (payload) => {
      this.off(event, wrapped);
      handler(payload);
    };
    this.on(event, wrapped);
  }
  off(event, handler) {
    const set = this.handlers.get(event);
    if (set) {
      set.delete(handler);
    }
  }
  emit(event, payload) {
    const set = this.handlers.get(event);
    if (!set) return;
    for (const handler of [...set]) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[EventBus] handler error on "${String(event)}"`, err);
      }
    }
  }
  clear() {
    this.handlers.clear();
  }
};
var eventBus = EventBus.getInstance();

// src/core/GameState.ts
var GameState = class _GameState {
  static instance;
  started = false;
  paused = false;
  /** 打开中的模态面板数（>0 时屏蔽移动/交互输入） */
  modalCount = 0;
  settings;
  /** 新开局难度 1摇篮曲~7天堂（难度系统实装前的配置预留，随本地存储持久化） */
  difficulty = 2;
  /**
   * 调试：点亮全部图鉴（会话级，不入存档）。
   * 开启后怪物图鉴全部解锁、遗物图鉴全部可见且可点击直接获取。
   */
  debugUnlockAll = false;
  /**
   * 房间编辑器预览中（会话级）：
   * 预览会把 3D 视口切到「正在设计的房间」，此时**绝不能写存档**——
   * `SaveManager` 的自动存档监听 `floorChanged`，必须屏蔽，否则会把预览房当成玩家所在层存下来。
   */
  editorPreview = false;
  constructor() {
    this.settings = { ...dataManager.settings.defaults };
    if (typeof localStorage !== "undefined") {
      const saved = Number(localStorage.getItem("motarpg_difficulty"));
      if (saved >= 1 && saved <= 7) this.difficulty = saved;
    }
  }
  static getInstance() {
    if (!_GameState.instance) _GameState.instance = new _GameState();
    return _GameState.instance;
  }
  get modalOpen() {
    return this.modalCount > 0;
  }
  pushModal() {
    this.modalCount++;
  }
  popModal() {
    this.modalCount = Math.max(0, this.modalCount - 1);
  }
  setSetting(key, value) {
    this.settings[key] = value;
    eventBus.emit("settingsChanged", { key, value });
  }
  setDifficulty(n) {
    this.difficulty = Math.max(1, Math.min(7, n));
    if (typeof localStorage !== "undefined") localStorage.setItem("motarpg_difficulty", String(this.difficulty));
  }
};
var gameState = GameState.getInstance();

// src/systems/DifficultySystem.ts
var TABLE = [
  { id: "lullaby", name: "\u6447\u7BEE\u66F2", monster: 0.4, exp: 1.5, gold: 1.5, boss: 0.7, startCurses: 0, startRelics: ["R065"] },
  { id: "normal", name: "\u666E\u901A", monster: 1, exp: 1, gold: 1, boss: 1, startCurses: 0 },
  { id: "hard", name: "\u56F0\u96BE", monster: 1.3, exp: 1.3, gold: 1.4, boss: 1.15, startCurses: 0 },
  { id: "nightmare", name: "\u5669\u68A6", monster: 1.7, exp: 1.6, gold: 1.8, boss: 1.3, startCurses: 0 },
  { id: "hell", name: "\u5730\u72F1", monster: 2.2, exp: 2, gold: 2.2, boss: 1.5, startCurses: 1 },
  { id: "purgatory", name: "\u70BC\u72F1", monster: 3, exp: 2.5, gold: 3, boss: 1.8, startCurses: 1 },
  { id: "haven", name: "\u5929\u5802", monster: 5, exp: 3.5, gold: 3.5, boss: 2.5, startCurses: 2, startRelics: ["X009"] }
];
var DifficultySystem = class _DifficultySystem {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_DifficultySystem.instance) _DifficultySystem.instance = new _DifficultySystem();
    return _DifficultySystem.instance;
  }
  /** 当前难度等级 1–7 */
  get level() {
    return Math.max(1, Math.min(7, gameState.difficulty));
  }
  config() {
    return TABLE[this.level - 1];
  }
  monsterMul() {
    return this.config().monster;
  }
  expMul() {
    return this.config().exp;
  }
  goldMul() {
    return this.config().gold;
  }
  bossMul() {
    return this.config().boss;
  }
  startCurseCount() {
    return this.config().startCurses;
  }
  /** 开局必定授予的专属遗物（摇篮曲→摇篮 / 天堂→命定之死） */
  startRelics() {
    return this.config().startRelics ?? [];
  }
};

// src/utils/StatCalculator.ts
var StatCalculator = class _StatCalculator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_StatCalculator.instance) _StatCalculator.instance = new _StatCalculator();
    return _StatCalculator.instance;
  }
  get anchors() {
    return dataManager.config.floorAnchors;
  }
  /**
   * 深度倍率基准表（P0-1）：同楼层不同深度房间的难度与收益梯度。
   * depth=1 为基准（倍率恒为 1.0，与未接入深度时完全一致）；
   * 按楼层区间差异化梯度（1~10 / 11~30 / 31+），depth≥4 线性增长。
   */
  depthMultiplier(floorId, depth) {
    const band = floorId <= 10 ? 0 : floorId <= 30 ? 1 : 2;
    if (depth <= 0) return [0.8, 0.75, 0.7][band];
    if (depth === 1) return 1;
    if (depth === 2) return [1, 1.1, 1.1][band];
    if (depth === 3) return [1.1, 1.1, 1.2][band];
    const over = depth - 4;
    return [1.15 + over * 0.1, 1.15 + over * 0.15, 1.2 + over * 0.2][band];
  }
  /** 楼层锚点分段线性插值；超出末锚点后按 overflow 比例增长 */
  anchorValue(series, floorId, overflowRate) {
    const floors = this.anchors.floors;
    const last = floors.length - 1;
    if (floorId <= floors[0]) return series[0];
    if (floorId >= floors[last]) {
      const over = floorId - floors[last];
      return series[last] * Math.pow(1 + overflowRate, over);
    }
    for (let i = 0; i < last; i++) {
      if (floorId >= floors[i] && floorId <= floors[i + 1]) {
        const t = (floorId - floors[i]) / (floors[i + 1] - floors[i]);
        return series[i] + (series[i + 1] - series[i]) * t;
      }
    }
    return series[last];
  }
  /**
   * 怪物战斗属性：楼层基准 × 怪物倍率 × 深度倍率 × 精英/Boss 加成。
   * depth 缺省 1（倍率 1.0）：所有旧调用行为与接入深度前完全一致。
   * 深度倍率同时作用于金币/经验掉落（P0-1：风险收益对应）。
   */
  monsterStats(def, floorId, isElite, depth = 1) {
    const cfg = dataManager.config;
    const a = this.anchors;
    const round = (v) => Math.max(1, Math.round(v));
    const isBoss = def.category === "boss";
    const depthMul = this.depthMultiplier(floorId, depth);
    const diff = DifficultySystem.getInstance();
    const dmul = diff.monsterMul();
    let hp = this.anchorValue(a.hp, floorId, a.overflowPerFloor.hp) * def.hpMul * depthMul * dmul;
    let atk = this.anchorValue(a.atk, floorId, a.overflowPerFloor.atk) * def.atkMul * depthMul * dmul;
    let defv = this.anchorValue(a.def, floorId, a.overflowPerFloor.def) * def.defMul * depthMul * dmul;
    let exp = this.anchorValue(a.exp, floorId, a.overflowPerFloor.exp) * def.expMul * depthMul * diff.expMul();
    let gold = this.anchorValue(a.gold, floorId, a.overflowPerFloor.gold) * def.goldMul * depthMul * diff.goldMul();
    if (isBoss) {
      const bmul = diff.bossMul();
      hp *= (1 + cfg.bossStatBonus.hp) * bmul;
      atk *= (1 + cfg.bossStatBonus.atk) * bmul;
      defv *= (1 + cfg.bossStatBonus.def) * bmul;
    } else if (isElite) {
      hp *= dataManager.monsters.eliteStatMultiplier;
      atk *= dataManager.monsters.eliteStatMultiplier;
      defv *= dataManager.monsters.eliteStatMultiplier;
      gold *= dataManager.monsters.eliteGoldMultiplier;
      exp *= dataManager.monsters.eliteExpMultiplier;
    }
    return {
      name: isElite ? `\u7CBE\u82F1\xB7${def.name}` : def.name,
      hp: round(hp),
      attack: round(atk),
      defense: round(defv),
      exp: round(exp),
      gold: round(gold),
      isElite,
      isBoss
    };
  }
  /** 玩家到达某等级时的基础属性（不含装备） */
  playerBaseAt(level) {
    const cfg = dataManager.config;
    const base = cfg.playerBase;
    let hp = base.maxHp;
    let atk = base.attack;
    let def = base.defense;
    for (let lv = 2; lv <= level; lv++) {
      const row = cfg.growthTable.find((g) => lv >= g.minLevel && lv <= g.maxLevel) ?? cfg.growthTable[cfg.growthTable.length - 1];
      hp += row.hp;
      atk += row.attack;
      def += row.defense;
    }
    return { maxHp: hp, attack: atk, defense: def };
  }
  /** 升到下一级所需经验 */
  expToNext(level) {
    const { base, power } = dataManager.config.expFormula;
    return Math.round(base * Math.pow(level, power));
  }
};

// src/map/ContentFiller.ts
var RISK_ROOM_TYPES = /* @__PURE__ */ new Set(["combat", "elite", "chest", "boss"]);
var RoomFill = class {
  room;
  grid;
  floorId;
  spots;
  taken = /* @__PURE__ */ new Set();
  constructor(room, grid, floorId) {
    this.room = room;
    this.grid = grid;
    this.floorId = floorId;
    this.spots = this.computeSpots();
  }
  // ============ 基础 ============
  /** 放置实体（不做占位校验；调用方用 freeAt / taken 自行判断） */
  put(e) {
    this.room.entities.push({ ...e, id: IdGenerator.next("ent") });
    this.taken.add(`${e.x},${e.y}`);
  }
  /** 放置阻挡型装饰（柱子/大锅/药架）：实体 + 地形改为装饰格（阻挡通行） */
  putBlocking(kind, x, y) {
    this.put({ kind, x, y });
    if (this.grid[y]?.[x] === 0) this.grid[y][x] = 2;
  }
  /** 该格是否可放主实体（空地 + 未被占 + 无既有实体） */
  freeAt(x, y) {
    if (this.grid[y]?.[x] !== 0) return false;
    if (this.taken.has(cellKey(x, y))) return false;
    return !this.room.entities.some((en) => en.x === x && en.y === y);
  }
  inRoom(x, y) {
    return x >= this.room.x && x < this.room.x + this.room.width && y >= this.room.y && y < this.room.y + this.room.height;
  }
  /**
   * 下行楼梯贴墙放置（2×2）：贴北墙、水平居中，逐格外移避开所有门的内侧格
   * （防止从门进来第一格就踩到楼梯直接下落）。放不下返回 false，由调用方兜底。
   */
  placeStairAgainstWall(targetFloor) {
    const ay = this.room.y + 1;
    const doorInners = new Set(this.room.doors.map((d) => {
      const p = doorInner(d);
      return ptKey(p);
    }));
    for (let step = 0; step <= this.room.width; step++) {
      const off = step === 0 ? 0 : step % 2 === 1 ? (step + 1) / 2 : -(step / 2);
      const ax = this.room.centerX - 1 + off;
      if (ax < this.room.x + 1 || ax + 1 > this.room.x + this.room.width - 2) continue;
      const cells = [0, 1].flatMap((dz) => [0, 1].map((dx) => ({ x: ax + dx, y: ay + dz })));
      if (!cells.every((p) => this.freeAt(p.x, p.y))) continue;
      if (cells.some((p) => doorInners.has(ptKey(p)))) continue;
      this.put({ kind: "stair", x: ax, y: ay, targetFloor, stairSpan: 2 });
      this.put({ kind: "stair", x: ax + 1, y: ay, targetFloor, stairSpan: 1 });
      this.put({ kind: "stair", x: ax, y: ay + 1, targetFloor, stairSpan: 1 });
      this.put({ kind: "stair", x: ax + 1, y: ay + 1, targetFloor, stairSpan: 1 });
      return true;
    }
    return false;
  }
  /** 放置怪物：按房间深度计算属性并随实体存储（P0-1/P0-2；战斗时优先读取） */
  monsterAt(id, isElite, p) {
    const def = dataManager.getMonster(id);
    const stats = def ? StatCalculator.getInstance().monsterStats(def, this.floorId, isElite, this.room.depth) : void 0;
    this.put({ kind: "monster", monsterId: id, isElite, x: p.x, y: p.y, depth: this.room.depth, stats });
  }
  /** 当前怪物数（密度上限校验用） */
  monsterCount() {
    return this.room.entities.filter((e) => e.kind === "monster" || e.kind === "boss").length;
  }
  /** (x,y) 曼哈顿 radius 格内是否有怪物/Boss */
  monsterNear(x, y, radius) {
    return this.room.entities.some((e) => (e.kind === "monster" || e.kind === "boss") && manhattan(e, { x, y }) <= radius);
  }
  /**
   * 覆盖式守卫放置（P1-4）：在能同时守护最多目标点（曼哈顿≤radius）的空格放 1 只怪。
   * 5×5 宝箱房的宝箱在内角，两只同墙宝箱的墙中点可一格双守（中心格罩不到角落）。
   * 返回是否放置成功。
   */
  placeGuardCovering(targets, pool, radius) {
    if (pool.length === 0 || targets.length === 0) return false;
    let best = null;
    let bestCover = 0;
    for (const s of this.spots) {
      if (!this.freeAt(s.x, s.y)) continue;
      let cover = 0;
      for (const t of targets) {
        if (manhattan(t, s) <= radius) cover++;
      }
      if (cover > bestCover) {
        bestCover = cover;
        best = { x: s.x, y: s.y };
      }
    }
    if (!best) return false;
    this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, false, best);
    return true;
  }
  /** 放置 Boss（属性同怪物按深度计算存储；铁门/掉落逻辑不变） */
  bossAt(id, p) {
    const def = dataManager.getMonster(id);
    const stats = def ? StatCalculator.getInstance().monsterStats(def, this.floorId, false, this.room.depth) : void 0;
    this.put({ kind: "boss", monsterId: id, x: p.x, y: p.y, depth: this.room.depth, stats });
  }
  // ============ 路径与几何（挡路型 / 守卫型 用） ============
  /** 房间内自由点位 + 距入口（门）的 BFS 距离；无门房间以中心为入口 */
  computeSpots() {
    const entries = this.room.doors.map((d) => ({ x: d.x, y: d.y }));
    if (entries.length === 0) entries.push({ x: this.room.centerX, y: this.room.centerY });
    const dist = /* @__PURE__ */ new Map();
    const queue = [];
    for (const e of entries) {
      if (this.inRoom(e.x, e.y) && this.grid[e.y]?.[e.x] === 0) {
        dist.set(`${e.x},${e.y}`, 0);
        queue.push(e);
      }
    }
    while (queue.length > 0) {
      const cur = queue.shift();
      const d = dist.get(`${cur.x},${cur.y}`) ?? 0;
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        const key = `${nx},${ny}`;
        if (!this.inRoom(nx, ny)) continue;
        if (this.grid[ny]?.[nx] !== 0) continue;
        if (dist.has(key)) continue;
        dist.set(key, d + 1);
        queue.push({ x: nx, y: ny });
      }
    }
    const spots = [];
    for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
      for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
        if (this.grid[y][x] !== 0) continue;
        spots.push({ x, y, dist: dist.get(cellKey(x, y)) ?? 99 });
      }
    }
    return spots;
  }
  /** 房间各门的内侧格（须为可通行地板） */
  doorInners() {
    return this.room.doors.map((d) => doorInner(d)).filter((p) => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 0);
  }
  /**
   * 门内侧格中曼哈顿距离最远的一对（= 主路径入口 / 出口）。
   * 不足两个门时返回 null —— 主路径与绕过检测共用，此前两处各写了一遍。
   */
  farthestDoorPair() {
    const inners = this.doorInners();
    if (inners.length < 2) return null;
    let best = [inners[0], inners[1]];
    let bestD = -1;
    for (let i = 0; i < inners.length; i++) {
      for (let j = i + 1; j < inners.length; j++) {
        const d = manhattan(inners[i], inners[j]);
        if (d > bestD) {
          bestD = d;
          best = [inners[i], inners[j]];
        }
      }
    }
    return best;
  }
  /**
   * 入口→出口主路径（房间内格序列）。
   * 入口/出口 = 房间门内侧格中相距最远的一对；单门时取「门 → 距门最远格」。
   */
  mainPath() {
    const inners = this.doorInners();
    if (inners.length === 0) return [{ x: this.room.centerX, y: this.room.centerY }];
    const pair = this.farthestDoorPair();
    if (!pair) return this.bfsPath(inners[0], this.farthestFrom(inners[0])) ?? [inners[0]];
    return this.bfsPath(pair[0], pair[1]) ?? [pair[0]];
  }
  /**
   * 房间内 BFS 路线（只看地形，忽略实体）。
   * `blocked` 为额外视为障碍的格（怪物 / 柱子）；不可达返回 null。
   * 原先 bfsPath / bfsRoute 两份实现只差一个 blocked 参数，已合并。
   */
  bfsPath(from, to, blocked) {
    const prev = /* @__PURE__ */ new Map([[ptKey(from), null]]);
    const queue = [from];
    while (queue.length > 0) {
      const cur2 = queue.shift();
      for (const [dx, dy] of DIRS4) {
        const nx = cur2.x + dx;
        const ny = cur2.y + dy;
        if (!this.inRoom(nx, ny)) continue;
        if (this.grid[ny]?.[nx] !== 0) continue;
        const k = cellKey(nx, ny);
        if (prev.has(k)) continue;
        if (blocked?.has(k)) continue;
        prev.set(k, ptKey(cur2));
        queue.push({ x: nx, y: ny });
      }
    }
    const end = ptKey(to);
    if (!prev.has(end)) return null;
    const out = [];
    let cur = end;
    while (cur) {
      const [x, y] = cur.split(",").map(Number);
      out.push({ x, y });
      cur = prev.get(cur) ?? null;
    }
    return out.reverse();
  }
  /** 距 from 最远的可达格（BFS） */
  farthestFrom(from) {
    let best = from;
    let bestD = -1;
    for (const s of this.spots) {
      if (s.dist > bestD) {
        bestD = s.dist;
        best = { x: s.x, y: s.y };
      }
    }
    return best;
  }
  /** 房间内侧四角（贴墙的地面格） */
  innerCorners() {
    const r = this.room;
    return [
      { x: r.x + 1, y: r.y + 1 },
      { x: r.x + r.width - 2, y: r.y + 1 },
      { x: r.x + 1, y: r.y + r.height - 2 },
      { x: r.x + r.width - 2, y: r.y + r.height - 2 }
    ];
  }
  // ============ 阻塞模式（文档二） ============
  /**
   * 挡路型：在入口→出口主路径上架一道横跨房间的屏障。
   * ratio：屏障落在路径的什么位置（0=入口侧，0.5=中段默认，0.7=偏出口侧），双屏障布局用不同 ratio 架两道。
   * 怪物占 N 格，其余格用柱子补满（barrier.fillWithPillars）→ 必须打掉至少 1 只怪才能通过。
   * 返回实际放置的怪物数（0 = 无法架设，调用方需兜底）。
   */
  blockPath(count, pool, isElite, ratio = 0.5) {
    if (count <= 0 || pool.length === 0) return 0;
    const path = this.mainPath();
    if (path.length < 3) return 0;
    const i = Math.max(1, Math.min(path.length - 2, Math.round(path.length * ratio)));
    const cur = path[i];
    const nxt = path[i + 1] ?? path[i - 1];
    const alongX = cur.y === nxt.y;
    const cells = [];
    if (alongX) {
      for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
        if (this.grid[y]?.[cur.x] === 0) cells.push({ x: cur.x, y });
      }
    } else {
      for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
        if (this.grid[cur.y]?.[x] === 0) cells.push({ x, y: cur.y });
      }
    }
    if (cells.length === 0) return 0;
    const entry = path[0];
    const usable = cells.filter((c) => manhattan(c, entry) >= 2);
    const line = usable.length > 0 ? usable : cells;
    const chosen = rng.shuffle(line).slice(0, Math.min(count, line.length));
    let placed = 0;
    for (const c of chosen) {
      if (this.taken.has(`${c.x},${c.y}`)) continue;
      this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, isElite, c);
      placed++;
    }
    if (placed > 0 && dataManager.mapGen.content.barrier.fillWithPillars) {
      const doorInners = this.doorInnerCells();
      for (const c of line) {
        if (this.taken.has(`${c.x},${c.y}`)) continue;
        if (doorInners.has(`${c.x},${c.y}`)) continue;
        this.put({ kind: "pillar", x: c.x, y: c.y });
        this.grid[c.y][c.x] = 2;
      }
    }
    return placed;
  }
  /** 所有门的内侧格（立柱禁区：柱子改地形会封门） */
  doorInnerCells() {
    return new Set(this.room.doors.map((d) => {
      const p = doorInner(d);
      return ptKey(p);
    }));
  }
  /** 围宝型 / 守卫型：在目标周围 radius 格内的空位放怪，返回实际数量 */
  guardAround(cx, cy, count, pool, isElite, radius = 1) {
    if (count <= 0 || pool.length === 0) return 0;
    const cells = [];
    for (let y = cy - radius; y <= cy + radius; y++) {
      for (let x = cx - radius; x <= cx + radius; x++) {
        if (x === cx && y === cy) continue;
        if (!this.inRoom(x, y)) continue;
        if (this.grid[y]?.[x] !== 0) continue;
        if (this.taken.has(cellKey(x, y))) continue;
        cells.push({ x, y });
      }
    }
    const picked = rng.shuffle(cells).slice(0, Math.min(count, cells.length));
    for (const c of picked) this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, isElite, c);
    return picked.length;
  }
  /** 守卫型：在目标（楼梯/Boss）朝向入口一侧 1-2 格放怪 */
  guardStair(count, pool, isElite = false) {
    if (count <= 0 || pool.length === 0) return 0;
    const stair = this.room.entities.find((e) => e.kind === "stair");
    const target = stair ? { x: stair.x, y: stair.y } : { x: this.room.centerX, y: this.room.centerY };
    const entry = this.mainPath()[0] ?? { x: target.x, y: target.y + 1 };
    const dx = Math.sign(entry.x - target.x);
    const dy = Math.sign(entry.y - target.y);
    const cand = [];
    if (dx !== 0) cand.push({ x: target.x + dx, y: target.y }, { x: target.x + dx * 2, y: target.y });
    if (dy !== 0) cand.push({ x: target.x, y: target.y + dy }, { x: target.x, y: target.y + dy * 2 });
    let placed = 0;
    for (const p of cand) {
      if (placed >= count) break;
      if (!this.freeAt(p.x, p.y)) continue;
      this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, isElite, p);
      placed++;
    }
    return placed;
  }
  /** 精确放置：王座型精英/护卫用（目标格被占则返回 false，由调用方兜底） */
  placeMonsterAt(id, isElite, p) {
    if (!this.freeAt(p.x, p.y)) return false;
    this.monsterAt(id, isElite, p);
    return true;
  }
  /**
   * 隐藏房间专用放置（P1-1）：房间发现前不雕刻地形（内部为虚空格），
   * 跳过地形校验，仅做边界/占用检查。
   */
  placeMonsterUnchecked(id, isElite, p) {
    if (p.x <= this.room.x || p.x >= this.room.x + this.room.width - 1) return false;
    if (p.y <= this.room.y || p.y >= this.room.y + this.room.height - 1) return false;
    if (this.taken.has(ptKey(p))) return false;
    if (this.room.entities.some((en) => en.x === p.x && en.y === p.y)) return false;
    this.monsterAt(id, isElite, p);
    return true;
  }
  /** 从怪池取一只（不放置）；空池返回 null */
  pickMonsterId(pool) {
    return pool.length > 0 ? rng.pickWeighted(pool, (m) => m.weight).id : null;
  }
  /**
   * 竞技场型：中轴对称立柱圈（3×3 外圈留四正位），中央留空给怪物群。
   * 柱子避开主路径格与门内侧格，保证所有门可达；可立柱不足 4 根视为失败。
   */
  placeArenaPillars() {
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const ring = [
      { x: cx - 2, y: cy },
      { x: cx + 2, y: cy },
      { x: cx, y: cy - 2 },
      { x: cx, y: cy + 2 },
      { x: cx - 2, y: cy - 2 },
      { x: cx + 2, y: cy - 2 },
      { x: cx - 2, y: cy + 2 },
      { x: cx + 2, y: cy + 2 }
    ];
    const protectedCells = /* @__PURE__ */ new Set();
    for (const d of this.room.doors) {
      const p = doorInner(d);
      protectedCells.add(ptKey(p));
    }
    for (const p of this.mainPath()) protectedCells.add(ptKey(p));
    const placeable = ring.filter((p) => this.inRoom(p.x, p.y) && this.freeAt(p.x, p.y) && !protectedCells.has(ptKey(p)));
    if (placeable.length < 4) return false;
    for (const p of placeable) this.putBlocking("pillar", p.x, p.y);
    return true;
  }
  // ============ 物品与装饰 ============
  /** 普通放置：距入口 ≥ monsterMinDistFromEntry 的空位随机放怪 */
  placeMonsters(count, isElite, pool) {
    if (count <= 0 || pool.length === 0) return 0;
    const minDist = dataManager.mapGen.content.monsterMinDistFromEntry;
    const far = this.spots.filter((s) => s.dist >= minDist && this.freeAt(s.x, s.y));
    const use = far.length >= count ? far : this.spots.filter((s) => this.freeAt(s.x, s.y));
    const picked = rng.shuffle(use).slice(0, count);
    for (const s of picked) this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, isElite, s);
    return picked.length;
  }
  /** 宝箱放内侧四角；carpet=true 时首个宝箱下方铺地毯（房间身份感） */
  placeCornerChests(count, carpet = false) {
    const out = [];
    if (count <= 0) return out;
    const corners = this.innerCorners().filter((c) => this.freeAt(c.x, c.y));
    const picked = rng.shuffle(corners).slice(0, Math.min(count, corners.length));
    picked.forEach((c, i) => {
      if (carpet && i === 0) this.put({ kind: "carpet", x: c.x, y: c.y });
      this.put({
        kind: "chest",
        chestTier: "normal",
        x: c.x,
        y: c.y,
        riskTier: this.risk(),
        rewardMul: this.room.rewardMul ?? 1
      });
      out.push(c);
    });
    return out;
  }
  /** 房间风险级（1~3；未分级 = 1 = 旧行为） */
  risk() {
    return this.room.risk ?? 1;
  }
  /**
   * 风险兑现（另一半）：按风险级掷骰，把首个宝箱升级为「大宝箱」
   * （必出装备、金币 ×2.5）→ 让高风险房值得绕路。
   */
  rollVault(chests) {
    if (chests.length === 0) return false;
    const chance = dataManager.mapGen.content.risk.vaultChance[this.risk() - 1] ?? 0;
    if (chance <= 0 || !rng.chance(chance)) return false;
    const first = chests[0];
    const ent = this.room.entities.find((e) => e.kind === "chest" && e.x === first.x && e.y === first.y);
    if (!ent) return false;
    ent.chestTier = "grand";
    return true;
  }
  /** 药水：优先放入口附近（1-4 格），不足时用任意空位 */
  placePotions(count) {
    if (count <= 0) return 0;
    const near = this.spots.filter((s) => s.dist >= 1 && s.dist <= 4 && this.freeAt(s.x, s.y));
    const use = near.length >= count ? near : this.spots.filter((s) => this.freeAt(s.x, s.y));
    const picked = rng.shuffle(use).slice(0, Math.min(count, use.length));
    for (const s of picked) {
      this.put({ kind: "potion", potionTier: this.pickPotionTier(), x: s.x, y: s.y });
    }
    return picked.length;
  }
  /** 按楼层挑选药水档次（低档权重更高） */
  pickPotionTier() {
    const all = dataManager.potions.potions;
    const avail = all.filter((p) => this.floorId >= p.minFloor && this.floorId <= p.maxFloor);
    const pool = avail.length > 0 ? avail : all;
    const weighted = pool.map((p, i) => ({ tier: p.tier, weight: pool.length - i }));
    return rng.pickWeighted(weighted, (w) => w.weight).tier;
  }
  /** 火把：按房间类型的数量，优先挂房间四角，再沿墙扩散 */
  placeRoomTorches() {
    const range = dataManager.mapGen.content.roomTorches[this.room.type];
    if (!range) return;
    const want = rng.randInt(range[0], range[1]);
    if (want <= 0) return;
    let placed = 0;
    for (const p of this.wallRing()) {
      if (placed >= want) break;
      if (this.grid[p.y]?.[p.x] !== 1) continue;
      if (this.room.entities.some((e) => e.x === p.x && e.y === p.y)) continue;
      this.put({ kind: "torch", x: p.x, y: p.y });
      placed++;
    }
  }
  /** 房间边界墙格，按「距四角近」排序 */
  wallRing() {
    const r = this.room;
    const pts = [];
    for (let x = r.x; x < r.x + r.width; x++) {
      pts.push({ x, y: r.y }, { x, y: r.y + r.height - 1 });
    }
    for (let y = r.y + 1; y < r.y + r.height - 1; y++) {
      pts.push({ x: r.x, y }, { x: r.x + r.width - 1, y });
    }
    const corners = [
      { x: r.x, y: r.y },
      { x: r.x + r.width - 1, y: r.y },
      { x: r.x, y: r.y + r.height - 1 },
      { x: r.x + r.width - 1, y: r.y + r.height - 1 }
    ];
    const cd = (p) => Math.min(...corners.map((c) => manhattan(p, c)));
    return pts.sort((a, b) => cd(a) - cd(b));
  }
  /** 装饰：宽≥7 的房间四角立柱子（阻挡通行；门内侧格豁免避免封门） */
  placePillars() {
    if (this.room.width - 2 < dataManager.mapGen.decor.pillarMinRoomWidth) return;
    const doorInners = this.doorInnerCells();
    for (const c of this.innerCorners()) {
      if (!this.freeAt(c.x, c.y)) continue;
      if (doorInners.has(`${c.x},${c.y}`)) continue;
      this.put({ kind: "pillar", x: c.x, y: c.y });
      this.grid[c.y][c.x] = 2;
    }
  }
  // ============ 陈设填充（反「大而空」） ============
  /**
   * 陈设填充：内容落定后、`validate()` 之前执行——让每个房间都有「陈设密度」，而非大而空。
   *   ① 配光保底：按内面积补足火把（沿周长均匀，绝不上门格 / 已占格）；
   *   ② 列柱：内宽/内高均达标的房间，沿两条长墙等距列柱（对称，避开主路径与门内侧）；
   *   ③ 引导地毯：入口 → 房间中心铺 2~3 格地毯，给出动线暗示（非阻挡）。
   * 列柱是阻挡地形，其连通/不可绕过后果由随后 `validate()` 的校验统一兜底修复。
   */
  furnish() {
    const f = dataManager.mapGen.content.furnish;
    const innerW = this.room.width - 2;
    const innerH = this.room.height - 2;
    this.furnishTorches(Math.min(f.torchMax, Math.max(1, Math.round(innerW * innerH / f.torchPerArea))));
    this.furnishColonnade(f, innerW, innerH);
    if (f.guideCarpet) this.furnishGuideCarpet();
  }
  /** 房间边界墙格（按周长顺序排列 → 等分取点即「沿墙均匀分布」） */
  wallPerimeter() {
    const r = this.room;
    const pts = [];
    for (let x = r.x; x < r.x + r.width; x++) pts.push({ x, y: r.y });
    for (let y = r.y + 1; y < r.y + r.height - 1; y++) pts.push({ x: r.x + r.width - 1, y });
    for (let x = r.x + r.width - 1; x >= r.x; x--) pts.push({ x, y: r.y + r.height - 1 });
    for (let y = r.y + r.height - 2; y > r.y; y--) pts.push({ x: r.x, y });
    return pts;
  }
  /** ① 配光保底：沿墙周长等分补火把到目标数量（门格地形为 0，天然排除） */
  furnishTorches(want) {
    let need = want - this.room.entities.filter((e) => e.kind === "torch").length;
    if (need <= 0) return;
    const ring = this.wallPerimeter().filter((p) => this.grid[p.y]?.[p.x] === 1 && !this.room.entities.some((e) => e.x === p.x && e.y === p.y));
    if (ring.length === 0) return;
    for (let i = 0; i < need; i++) {
      const idx = Math.floor((i + 1) * ring.length / (need + 1));
      const p = ring[Math.min(idx, ring.length - 1)];
      if (!p || this.room.entities.some((e) => e.x === p.x && e.y === p.y)) continue;
      this.put({ kind: "torch", x: p.x, y: p.y });
    }
  }
  /** ② 列柱：长边两侧等距立柱（对称、避主路径/门内侧/角落宝箱位） */
  furnishColonnade(f, innerW, innerH) {
    if (innerW < f.colonnadeMinInnerW || innerH < f.colonnadeMinInnerH) return;
    const r = this.room;
    const horizontal = innerW >= innerH;
    const span = horizontal ? innerW : innerH;
    const step = Math.max(2, f.colonnadeSpacing);
    const offsets = [];
    for (let i = step; i <= span - 1; i += step) offsets.push(i);
    if (offsets.length === 0) offsets.push(Math.ceil(span / 2));
    const protectedCells = new Set(this.doorInnerCells());
    for (const p of this.mainPath()) protectedCells.add(ptKey(p));
    let placed = 0;
    const lanes = horizontal ? [r.y + 1, r.y + r.height - 2] : [r.x + 1, r.x + r.width - 2];
    for (const off of offsets) {
      if (placed >= f.colonnadeMax) break;
      for (const lane of lanes) {
        if (placed >= f.colonnadeMax) break;
        const x = horizontal ? r.x + off : lane;
        const y = horizontal ? lane : r.y + off;
        if (!this.inRoom(x, y) || !this.freeAt(x, y)) continue;
        if (protectedCells.has(ptKey({ x, y }))) continue;
        this.putBlocking("pillar", x, y);
        placed++;
      }
    }
  }
  /** ③ 引导地毯：入口 → 中心（先 x 后 y 的 L 形），每 2 格 1 块，最多 3 块 */
  furnishGuideCarpet() {
    const entry = this.mainPath()[0];
    if (!entry) return;
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const steps = [{ x: entry.x, y: entry.y }];
    let x = entry.x;
    let y = entry.y;
    while (x !== cx) {
      x += Math.sign(cx - x);
      steps.push({ x, y });
    }
    while (y !== cy) {
      y += Math.sign(cy - y);
      steps.push({ x, y });
    }
    let placed = 0;
    for (let i = 1; i < steps.length && placed < 3; i += 2) {
      const p = steps[i];
      if (!this.freeAt(p.x, p.y)) continue;
      this.put({ kind: "carpet", x: p.x, y: p.y });
      placed++;
    }
  }
  /**
   * 女巫酿药间（安全房）：中央女巫 + 朝门一侧的熬药大锅 + 两侧药架 + 角落治疗泉。
   * 女巫提供特殊药水交易，治疗泉提供治疗服务（交互在世界层处理）。
   * 大锅/药架为阻挡装饰：绝不落在门内侧格（会封死房门，P0-5 连通修复教训）。
   */
  placeWitchRoom(shelves) {
    const cx = this.room.centerX;
    const cy = this.room.centerY;
    const entry = this.mainPath()[0] ?? { x: cx, y: cy + 1 };
    const doorInners = this.doorInnerCells();
    const blockable = (x, y) => this.freeAt(x, y) && !doorInners.has(cellKey(x, y));
    if (this.freeAt(cx, cy)) {
      this.put({ kind: "npc", npcId: "npc_witch", x: cx, y: cy });
    } else {
      const fallback = [...this.spots].filter((s) => this.freeAt(s.x, s.y)).sort((a, b) => b.dist - a.dist)[0];
      if (fallback) this.put({ kind: "npc", npcId: "npc_witch", x: fallback.x, y: fallback.y });
    }
    const dx = Math.sign(entry.x - cx);
    const dy = Math.sign(entry.y - cy);
    const cauldron = dx !== 0 ? { x: cx + dx, y: cy } : { x: cx, y: cy + (dy || 1) };
    if (blockable(cauldron.x, cauldron.y)) this.putBlocking("cauldron", cauldron.x, cauldron.y);
    const perp = dx !== 0 ? [{ x: 0, y: 1 }, { x: 0, y: -1 }] : [{ x: 1, y: 0 }, { x: -1, y: 0 }];
    let placed = 0;
    for (const p of perp) {
      if (placed >= shelves) break;
      const sx = cx + p.x * 2;
      const sy = cy + p.y * 2;
      if (blockable(sx, sy)) {
        this.putBlocking("shelf", sx, sy);
        placed++;
      }
    }
    if (placed < shelves) {
      for (const c of rng.shuffle(this.innerCorners())) {
        if (placed >= shelves) break;
        if (blockable(c.x, c.y)) {
          this.putBlocking("shelf", c.x, c.y);
          placed++;
        }
      }
    }
    const corners = rng.shuffle(this.innerCorners()).sort((a, b) => manhattan(b, entry) - manhattan(a, entry));
    for (const c of corners) {
      if (this.freeAt(c.x, c.y)) {
        this.put({ kind: "fountain", x: c.x, y: c.y });
        break;
      }
    }
  }
  /** 战斗房按深度取档位（文档五 深度与难度对应） */
  bandFor(bands) {
    const depth = this.room.depth;
    return bands.find((b) => depth <= b.maxDepth) ?? bands[bands.length - 1];
  }
  // ============ 内容验证（文档六 6.1 + P0-5 强化） ============
  /**
   * 验证并就地修复：
   *   地形连通       —— 柱子/装饰封死地板口袋 → 撤柱开通（P0-5 配套修复）
   *   楼梯被守护     —— 楼梯 guard.stairRadius 格内无怪 → 楼梯前补怪（受密度上限约束）
   *   宝箱被守护     —— 宝箱 guard.chestRadius 格内无怪 → 邻格补怪（受密度上限约束）
   *   战斗不可绕过   —— 怪物/柱子为障碍时任意两门内侧仍连通 = 可绕过 → 沿开路线中点循环补怪封堵
   *                     （P0-5：战斗/精英/Boss 房均执行；补怪不超过密度上限）
   *   精英房主路径   —— 主路径上至少 1 只精英怪，不足则补/升级（P0-5）
   * 执行顺序：守卫（楼梯→宝箱）先占用密度余量，「不可绕过」最后执行——余量不足时退化为柱线封堵。
   *   无重叠/可到达 —— 放置阶段已由 freeAt 保证（装饰地毯除外）
   * 返回未修复的失败项（调用方记日志），不中断生成流程。
   */
  validate(roomType, pool, densityCap = Infinity) {
    const issues = [];
    const g = dataManager.mapGen.content.guard;
    const monsterCount = () => this.room.entities.filter((e) => e.kind === "monster" || e.kind === "boss").length;
    this.ensureReachable();
    for (const stair of this.room.entities.filter((e) => e.kind === "stair")) {
      const guarded = this.monsterNear(stair.x, stair.y, g.stairRadius);
      if (!guarded && pool.length > 0 && monsterCount() < densityCap) {
        if (this.guardStair(1, pool) === 0 && !this.placeGuardCovering([{ x: stair.x, y: stair.y }], pool, g.stairRadius)) {
          issues.push("\u697C\u68AF\u65E0\u5B88\u62A4\uFF08\u65E0\u53EF\u653E\u7F6E\u683C\uFF09");
        }
      }
    }
    if (roomType !== "boss") {
      const chests = this.room.entities.filter((e) => e.kind === "chest");
      let unguarded = chests.filter((c) => !this.monsterNear(c.x, c.y, g.chestRadius));
      while (unguarded.length > 0 && pool.length > 0 && monsterCount() < densityCap) {
        if (!this.placeGuardCovering(unguarded, pool, g.chestRadius)) break;
        unguarded = chests.filter((c) => !this.monsterNear(c.x, c.y, g.chestRadius));
      }
      if (unguarded.length > 0) {
        issues.push(monsterCount() >= densityCap ? `\u5B9D\u7BB1\u65E0\u5B88\u62A4\uFF08\u5BC6\u5EA6\u4E0A\u9650\u5DF2\u6EE1 ${monsterCount()}/${densityCap}\uFF0C\u672A\u5B88\u62A4 ${unguarded.length} \u5EA7\uFF09` : "\u5B9D\u7BB1\u65E0\u5B88\u62A4\uFF08\u65E0\u53EF\u653E\u7F6E\u683C\uFF09");
      }
    }
    if (roomType === "boss" && pool.length > 0) {
      if (this.bypassRoute() && monsterCount() === 0) {
        const spot = this.freeSpotOnRoute(this.mainPath());
        if (spot) this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, false, spot);
      }
    } else if ((roomType === "combat" || roomType === "elite") && pool.length > 0) {
      let route = this.bypassRoute();
      let added = 0;
      let sealedByPillar = false;
      while (route && added < 12) {
        const spot = monsterCount() < densityCap ? this.freeSpotOnRoute(route) : null;
        if (spot) {
          this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, false, spot);
        } else {
          const mid = route[Math.floor(route.length / 2)];
          const vertical = Math.abs(route[route.length - 1].x - route[0].x) >= Math.abs(route[route.length - 1].y - route[0].y);
          const ends = [route[0], route[route.length - 1]];
          if (this.sealWithPillarLine(mid, vertical, ends) || this.sealWithPillarLine(mid, !vertical, ends)) {
            sealedByPillar = true;
          } else {
            const pspot = this.freeSpotOnRoute(route, this.doorInnerCells());
            if (!pspot) break;
            this.put({ kind: "pillar", x: pspot.x, y: pspot.y });
            this.grid[pspot.y][pspot.x] = 2;
            sealedByPillar = true;
          }
        }
        added++;
        if (sealedByPillar) this.ensureReachable();
        route = this.bypassRoute();
      }
      if (route) issues.push("\u53EF\u7ED5\u8FC7\u4E14\u65E0\u7A7A\u4F4D\u8865\u602A");
      if (roomType === "elite") this.ensureEliteOnPath(this.mainPath(), pool, densityCap);
    }
    this.ensureReachable();
    return issues;
  }
  /**
   * 障碍感知绕过路线（P0-5，文档 2a）：怪物/柱子/装饰地形视为障碍后，
   * 曼哈顿距离最远的一对门内侧格（= 主路径入口/出口）之间仍存在的通行路线。
   * 返回该路线用于精确封堵；无门对或已阻断返回 null。
   */
  bypassRoute() {
    const pair = this.farthestDoorPair();
    if (!pair) return null;
    const blocked = new Set(
      this.room.entities.filter((e) => e.kind === "monster" || e.kind === "boss" || e.kind === "pillar").map((e) => ptKey(e))
    );
    return this.bfsPath(pair[0], pair[1], blocked);
  }
  /** 开放路线上自中点向外第一个可放置格（封堵补怪/立柱用；forbidden 内的格子跳过） */
  freeSpotOnRoute(route, forbidden) {
    const mid = Math.floor(route.length / 2);
    for (let off = 0; off < route.length; off++) {
      for (const i of [mid + off, mid - off]) {
        const p = route[i];
        if (!p || !this.freeAt(p.x, p.y)) continue;
        if (forbidden?.has(ptKey(p))) continue;
        return p;
      }
    }
    return null;
  }
  /**
   * 沿整条线立柱封堵（P0-5 密度上限时的封路手段）：
   * vertical=true 立竖线（固定 x），否则横线（固定 y）。
   * 候选线必须严格位于路线两端点的坐标区间内（BFS 最短路不会超出端点包围盒，
   * 区间外的线切不断路线）；且不穿门内侧格、不含药水/宝箱等非阻挡实体。
   * 线上已有怪物/柱子的格子保持不变；若整条线没有「两侧开阔」的怪物缺口，
   * 则把房间内一只怪物移到线中段的让路格——柱子是永久地形，必须保留一个
   * 击杀后可通行的缺口，否则无冗余通路时整层会被截断。
   * 返回是否成功立柱。
   */
  sealWithPillarLine(mid, vertical, routeEnds) {
    const doorInners = this.doorInnerCells();
    const hasMonsterAt = (x, y) => this.room.entities.some((e) => e.kind === "monster" && e.x === x && e.y === y);
    const isBlocking = (x, y) => {
      const ent = this.room.entities.find((e) => e.x === x && e.y === y);
      return !ent || ent.kind === "monster" || ent.kind === "boss" || ent.kind === "pillar";
    };
    const tryLine = (line) => {
      const cells = [];
      if (vertical) {
        for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
          if (this.grid[y]?.[line] === 0) cells.push({ x: line, y });
        }
      } else {
        for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
          if (this.grid[line]?.[x] === 0) cells.push({ x, y: line });
        }
      }
      if (cells.length === 0) return false;
      if (cells.some((c) => doorInners.has(`${c.x},${c.y}`) || !isBlocking(c.x, c.y))) return false;
      const openFloor = (x, y) => this.inRoom(x, y) && this.grid[y]?.[x] === 0;
      const isPassage = (c) => {
        if (!hasMonsterAt(c.x, c.y)) return false;
        return vertical ? openFloor(c.x - 1, c.y) && openFloor(c.x + 1, c.y) : openFloor(c.x, c.y - 1) && openFloor(c.x, c.y + 1);
      };
      const freePassageCell = (c) => this.freeAt(c.x, c.y) && (vertical ? openFloor(c.x - 1, c.y) && openFloor(c.x + 1, c.y) : openFloor(c.x, c.y - 1) && openFloor(c.x, c.y + 1));
      if (!cells.some(isPassage)) {
        const gap = cells.slice(Math.floor(cells.length / 2)).find(freePassageCell) ?? cells.find(freePassageCell);
        if (!gap || !this.relocateMonsterTo(gap)) return false;
      }
      let placed = false;
      for (const c of cells) {
        if (!this.freeAt(c.x, c.y)) continue;
        this.put({ kind: "pillar", x: c.x, y: c.y });
        this.grid[c.y][c.x] = 2;
        placed = true;
      }
      return placed;
    };
    const coord = (p) => vertical ? p.x : p.y;
    const lo = Math.min(coord(routeEnds[0]), coord(routeEnds[1]));
    const hi = Math.max(coord(routeEnds[0]), coord(routeEnds[1]));
    const base = vertical ? mid.x : mid.y;
    const candidates = [];
    for (let line = lo + 1; line < hi; line++) candidates.push(line);
    candidates.sort((a, b) => Math.abs(a - base) - Math.abs(b - base));
    for (const line of candidates) {
      if (vertical && (line <= this.room.x || line >= this.room.x + this.room.width - 1)) continue;
      if (!vertical && (line <= this.room.y || line >= this.room.y + this.room.height - 1)) continue;
      if (tryLine(line)) return true;
    }
    return false;
  }
  /** 把房间内一只不在目标格的怪物移到目标格（数量不变不破密度上限；更新占位记录） */
  relocateMonsterTo(target) {
    const m = this.room.entities.find((e) => e.kind === "monster" && !(e.x === target.x && e.y === target.y));
    if (!m) return false;
    this.taken.delete(`${m.x},${m.y}`);
    m.x = target.x;
    m.y = target.y;
    this.taken.add(`${target.x},${target.y}`);
    return true;
  }
  /**
   * 精英房主路径精英校验（P0-5）：主路径格子上有精英怪即通过；
   * 不足时优先在路径中点附近补 1 只精英（不超过密度上限），
   * 超上限则把主路径上的一只普通怪升级为精英（保留位置与掉落规则）。
   */
  ensureEliteOnPath(path, pool, densityCap) {
    const onPath = new Set(path.map((p) => ptKey(p)));
    const onPathElite = this.room.entities.some((e) => (e.kind === "monster" || e.kind === "boss") && e.isElite && onPath.has(`${e.x},${e.y}`));
    if (onPathElite) return;
    const count = this.room.entities.filter((e) => e.kind === "monster" || e.kind === "boss").length;
    if (count < densityCap && pool.length > 0) {
      const spot = this.freeSpotOnRoute(path);
      if (spot) {
        this.monsterAt(rng.pickWeighted(pool, (m) => m.weight).id, true, spot);
        return;
      }
    }
    const up = this.room.entities.find((e) => e.kind === "monster" && !e.isElite && onPath.has(`${e.x},${e.y}`));
    if (up) this.upgradeToElite(up);
  }
  /** 普通怪升精英：保留位置/类型/掉落规则，按深度重算属性（收敛遍历会再次封顶） */
  upgradeToElite(e) {
    e.isElite = true;
    const def = dataManager.getMonster(e.monsterId ?? "");
    if (def) e.stats = StatCalculator.getInstance().monsterStats(def, this.floorId, true, this.room.depth);
  }
  /**
   * 地形连通修复：柱子/装饰可能把部分地板（及其上的实体/门内侧）封成口袋。
   * 以首个门的内侧格为单源 BFS（怪物格是地形空地，BFS 可穿过「让路怪」——
   * 封堵线的击杀缺口不会被误拆）；存在不可达地板时逐个撤除口袋边界的
   * 阻挡装饰（柱子/大锅/药架）直到全部可达。撤柱产生的缺口由「不可绕过」校验封堵。
   */
  ensureReachable() {
    for (const d of this.room.doors) {
      const p = doorInner(d);
      if (!this.inRoom(p.x, p.y) || this.grid[p.y]?.[p.x] === 0) continue;
      const blocker = this.room.entities.find((e) => (e.kind === "pillar" || e.kind === "cauldron" || e.kind === "shelf") && e.x === p.x && e.y === p.y);
      if (blocker) {
        this.room.entities = this.room.entities.filter((en) => en !== blocker);
        this.grid[p.y][p.x] = 0;
      }
    }
    const floorCells = [];
    for (let y = this.room.y + 1; y <= this.room.y + this.room.height - 2; y++) {
      for (let x = this.room.x + 1; x <= this.room.x + this.room.width - 2; x++) {
        if (this.grid[y]?.[x] === 0) floorCells.push({ x, y });
      }
    }
    if (floorCells.length === 0) return;
    const firstInner = this.room.doors.map((d) => doorInner(d)).find((p) => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 0);
    const source = firstInner ?? floorCells[Math.floor(floorCells.length / 2)];
    for (let round = 0; round < 64; round++) {
      const seen = /* @__PURE__ */ new Set([`${source.x},${source.y}`]);
      const queue = [source];
      while (queue.length > 0) {
        const cur = queue.shift();
        for (const [dx, dy] of DIRS4) {
          const nx = cur.x + dx;
          const ny = cur.y + dy;
          const k = `${nx},${ny}`;
          if (!this.inRoom(nx, ny)) continue;
          if (this.grid[ny]?.[nx] !== 0) continue;
          if (seen.has(k)) continue;
          seen.add(k);
          queue.push({ x: nx, y: ny });
        }
      }
      const pockets = floorCells.filter((c) => !seen.has(`${c.x},${c.y}`));
      if (pockets.length === 0) return;
      const blocker = this.room.entities.find((e) => (e.kind === "pillar" || e.kind === "cauldron" || e.kind === "shelf") && pockets.some((c) => manhattan(e, c) === 1));
      if (blocker) {
        this.room.entities = this.room.entities.filter((en) => en !== blocker);
        this.grid[blocker.y][blocker.x] = 0;
        continue;
      }
      const cliff = pockets.flatMap((c) => DIRS4.map(([dx, dy]) => ({ x: c.x + dx, y: c.y + dy }))).find((p) => this.inRoom(p.x, p.y) && this.grid[p.y]?.[p.x] === 4);
      if (!cliff) return;
      this.grid[cliff.y][cliff.x] = 0;
    }
  }
  /**
   * 障碍感知绕过判定已由 bypassRoute 取代（P0-5）：返回开放路线而非布尔值，
   * 便于把补怪精确落在实际可通行路线上。
   */
};
var ContentFiller = class _ContentFiller {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_ContentFiller.instance) _ContentFiller.instance = new _ContentFiller();
    return _ContentFiller.instance;
  }
  fill(rooms, corridors, grid, floorId, kind, hiddenRooms = []) {
    const c = dataManager.mapGen.content;
    const all = dataManager.monsters.monsters.filter((m) => m.category === "normal");
    const avail = all.filter((m) => floorId >= m.floorMin && floorId <= m.floorMax);
    const pool = (avail.length > 0 ? avail : all).map((m) => ({ id: m.id, weight: m.weight }));
    this.assignFloorRisk(rooms, floorId);
    for (const room of rooms) {
      const rf = new RoomFill(room, grid, floorId);
      switch (room.type) {
        case "start": {
          if (kind === "initial") {
            rf.put({ kind: "npc", npcId: "npc_guide", x: room.centerX, y: room.y + 1 });
          }
          if (kind !== "summit") {
            rf.placePotions(rng.randInt(c.startRoom.potions[0], c.startRoom.potions[1]));
          }
          break;
        }
        case "end": {
          if (kind === "summit") {
            const gateSpot = { x: room.centerX, y: room.y + 1 };
            if (rf.freeAt(gateSpot.x, gateSpot.y)) {
              rf.put({ kind: "gate", x: gateSpot.x, y: gateSpot.y });
            } else {
              rf.put({ kind: "gate", x: room.centerX, y: room.centerY });
            }
            break;
          }
          if (!rf.placeStairAgainstWall(floorId + 1)) {
            const ax = room.centerX - 1;
            const ay = room.centerY - 1;
            const span2 = [0, 1].flatMap((dz) => [0, 1].map((dx) => ({ x: ax + dx, y: ay + dz })));
            if (span2.every((p) => rf.freeAt(p.x, p.y))) {
              rf.put({ kind: "stair", x: ax, y: ay, targetFloor: floorId + 1, stairSpan: 2 });
              rf.put({ kind: "stair", x: ax + 1, y: ay, targetFloor: floorId + 1, stairSpan: 1 });
              rf.put({ kind: "stair", x: ax, y: ay + 1, targetFloor: floorId + 1, stairSpan: 1 });
              rf.put({ kind: "stair", x: ax + 1, y: ay + 1, targetFloor: floorId + 1, stairSpan: 1 });
            } else {
              const wallSpot = { x: room.centerX, y: room.y + 1 };
              if (rf.freeAt(wallSpot.x, wallSpot.y)) {
                rf.put({ kind: "stair", x: wallSpot.x, y: wallSpot.y, targetFloor: floorId + 1 });
              } else {
                rf.put({ kind: "stair", x: room.centerX, y: room.centerY, targetFloor: floorId + 1 });
              }
            }
          }
          if (kind === "initial") {
            rf.put({ kind: "chest", chestTier: "normal", x: room.x + 1, y: room.y + 1 });
            rf.guardStair(1, pool);
          } else if (kind === "boss") {
            rf.put({ kind: "chest", chestTier: "grand", x: room.x + 1, y: room.y + 1 });
            rf.put({ kind: "chest", chestTier: "grand", x: room.x + room.width - 2, y: room.y + room.height - 2 });
            if (isTierStartFloor(floorId + 1)) {
              const spot = this.relicChestSpot(rf, room);
              if (spot) rf.put({ kind: "chest", chestTier: "relic", x: spot.x, y: spot.y });
            }
          } else {
            const cap = this.densityCap(room);
            const chests = rf.placeCornerChests(rng.randInt(c.exitRoom.chests[0], c.exitRoom.chests[1]));
            for (const ch of chests) {
              if (rf.monsterCount() >= cap - 1) break;
              rf.placeGuardCovering([ch], pool, c.guard.chestRadius);
            }
            rf.guardStair(rng.randInt(c.exitRoom.guards[0], c.exitRoom.guards[1]), pool);
          }
          rf.placePotions(rng.randInt(c.exitRoom.potions[0], c.exitRoom.potions[1]));
          break;
        }
        case "rest":
          if (kind === "normal" && rf.freeAt(room.centerX, room.centerY)) {
            const best = dataManager.potions.potions.filter((p) => floorId >= p.minFloor && floorId <= p.maxFloor).sort((a, b) => b.healPct - a.healPct)[0];
            if (best) rf.put({ kind: "potion", potionTier: best.tier, x: room.centerX, y: room.centerY });
          }
          break;
        case "merchant": {
          rf.put({ kind: "npc", npcId: "npc_merchant", x: room.centerX, y: room.centerY });
          rf.placePotions(rng.randInt(c.merchantRoom.potions[0], c.merchantRoom.potions[1]));
          rf.placeCornerChests(rng.randInt(c.merchantRoom.chests[0], c.merchantRoom.chests[1]));
          break;
        }
        case "blacksmith": {
          rf.put({ kind: "npc", npcId: "npc_blacksmith", x: room.centerX, y: room.centerY });
          break;
        }
        case "witch": {
          rf.placeWitchRoom(rng.randInt(c.witchRoom.shelves[0], c.witchRoom.shelves[1]));
          break;
        }
        case "chest": {
          const baseChests = rng.randInt(c.treasureRoom.chests[0], c.treasureRoom.chests[1]);
          const bonusChest = rf.risk() >= 3 && baseChests < c.treasureRoom.chests[1] ? 1 : 0;
          const chests = rf.placeCornerChests(baseChests + bonusChest, true);
          rf.rollVault(chests);
          const cap = this.densityCap(room);
          let guards = Math.min(rng.randInt(c.treasureRoom.monsters[0], c.treasureRoom.monsters[1]), cap - rf.monsterCount());
          let unguarded = chests.filter((ch) => !rf.monsterNear(ch.x, ch.y, 2));
          while (guards > 0 && unguarded.length > 0) {
            if (!rf.placeGuardCovering(unguarded, pool, 2)) break;
            guards--;
            unguarded = chests.filter((ch) => !rf.monsterNear(ch.x, ch.y, 2));
          }
          rf.placePotions(rng.randInt(c.treasureRoom.potions[0], c.treasureRoom.potions[1]));
          break;
        }
        case "combat": {
          const band = rf.bandFor(c.combatByDepth);
          const cap = this.densityCap(room);
          const want = Math.max(1, Math.min(rng.randInt(band.monsters[0], band.monsters[1]), cap - 2));
          const bigW = room.width - 2 >= 8;
          const bigH = room.height - 2 >= 7;
          const layouts = [
            { id: "barrier", weight: 4 },
            { id: "double", weight: bigW ? 2 : 0 },
            { id: "arena", weight: bigW && bigH ? 2 : 0 },
            { id: "scattered", weight: 2 }
          ];
          const layout = rng.pickWeighted(layouts, (l) => l.weight).id;
          room.layout = layout;
          let placed = 0;
          if (layout === "double") {
            const first = Math.max(1, Math.floor(want / 2));
            placed = rf.blockPath(first, pool, false, 0.32) + rf.blockPath(want - first, pool, false, 0.68);
          } else if (layout === "arena") {
            if (rf.placeArenaPillars()) {
              placed = rf.guardAround(room.centerX, room.centerY, want, pool, false, 2);
            }
          } else if (layout === "barrier") {
            placed = rf.blockPath(want, pool, false);
          } else {
            placed = rf.placeMonsters(want, false, pool);
          }
          if (placed === 0) rf.placeMonsters(want, false, pool);
          const elites = Math.min(rng.randInt(band.elites[0], band.elites[1]), Math.max(0, cap - rf.monsterCount() - 1));
          if (elites > 0) rf.placeMonsters(elites, true, pool);
          const chests = rf.placeCornerChests(rng.randInt(band.chests[0], band.chests[1]));
          rf.rollVault(chests);
          rf.placePotions(rng.randInt(band.potions[0], band.potions[1]));
          break;
        }
        case "elite": {
          const bigW = room.width - 2 >= 9;
          const bigH = room.height - 2 >= 7;
          const layouts = [
            { id: "barrier", weight: 3 },
            { id: "throne", weight: bigH ? 3 : 0 },
            { id: "arena", weight: bigW && bigH ? 2 : 0 }
          ];
          const layout = rng.pickWeighted(layouts, (l) => l.weight).id;
          room.layout = `elite_${layout}`;
          const path = rf.mainPath();
          const seat = path[path.length - 1] ?? { x: room.centerX, y: room.centerY };
          const eid = rf.pickMonsterId(pool);
          if (layout === "throne" && eid) {
            const ok = rf.placeMonsterAt(eid, true, seat) || rf.placeMonsterAt(eid, true, { x: seat.x, y: seat.y - 1 }) || rf.placeMonsterAt(eid, true, { x: seat.x, y: seat.y + 1 }) || rf.placeMonsterAt(eid, true, { x: seat.x - 1, y: seat.y });
            if (!ok) rf.blockPath(1, pool, true);
          } else if (layout === "arena" && eid) {
            if (!rf.placeArenaPillars() || !rf.placeMonsterAt(eid, true, { x: room.centerX, y: room.centerY })) {
              rf.placeMonsters(1, true, pool);
            }
          } else {
            if (rf.blockPath(1, pool, true) === 0) rf.placeMonsters(1, true, pool);
          }
          const eliteCap = this.densityCap(room);
          const chestPlan = rng.randInt(c.eliteRoom.chests[0], c.eliteRoom.chests[1]);
          const spare = Math.max(0, eliteCap - rf.monsterCount());
          const addRoom = Math.max(0, spare - Math.min(chestPlan, spare));
          const adds = Math.min(rng.randInt(c.eliteRoom.monsters[0], c.eliteRoom.monsters[1]), addRoom);
          if (layout === "throne") {
            const mid = rf.pickMonsterId(pool);
            let n = 0;
            if (mid) {
              for (const off of [-1, 1]) {
                if (n >= adds) break;
                if (rf.placeMonsterAt(mid, false, { x: seat.x + off, y: seat.y })) n++;
                else if (rf.placeMonsterAt(mid, false, { x: seat.x, y: seat.y + off })) n++;
              }
            }
            if (n < adds) rf.placeMonsters(adds - n, false, pool);
          } else {
            rf.placeMonsters(adds, false, pool);
          }
          const chests = rf.placeCornerChests(chestPlan, true);
          rf.rollVault(chests);
          for (const ch of chests) {
            if (rf.monsterCount() >= eliteCap) break;
            rf.guardAround(ch.x, ch.y, 1, pool, false, 1);
          }
          rf.placePotions(rng.randInt(c.eliteRoom.potions[0], c.eliteRoom.potions[1]));
          break;
        }
        case "boss": {
          const bossId = this.bossIdForFloor(floorId);
          const variants = ["standard"];
          if (floorId >= 15) variants.push("arena");
          if (floorId >= 20) variants.push("gauntlet");
          let variant = rng.pick(variants);
          const cx = room.centerX;
          const cy = room.centerY;
          if (variant === "arena") {
            if (!rf.placeArenaPillars()) {
              variant = "standard";
            } else {
              rf.put({ kind: "carpet", x: cx, y: cy });
              rf.bossAt(bossId, { x: cx, y: cy });
              const mid = rf.pickMonsterId(pool);
              if (mid) {
                const flanks = [
                  [{ x: cx - 1, y: cy - 1 }, { x: cx - 2, y: cy - 1 }, { x: cx - 2, y: cy + 1 }],
                  [{ x: cx + 1, y: cy + 1 }, { x: cx + 2, y: cy + 1 }, { x: cx + 2, y: cy - 1 }]
                ];
                let placedGuards = 0;
                for (const chain of flanks) {
                  for (const p of chain) {
                    if (rf.placeMonsterAt(mid, false, p)) {
                      placedGuards++;
                      break;
                    }
                  }
                }
                if (placedGuards < 2) rf.placeMonsters(2 - placedGuards, false, pool);
              }
            }
          }
          if (variant === "gauntlet") {
            const path = rf.mainPath();
            const seat = path[Math.max(0, path.length - 2)] ?? { x: cx, y: cy };
            const mid = rf.pickMonsterId(pool);
            if (mid) {
              rf.placeMonsterAt(mid, false, path[1] ?? { x: cx, y: cy });
              rf.placeMonsterAt(mid, false, path[2] ?? { x: cx, y: cy });
            }
            rf.put({ kind: "carpet", x: seat.x, y: seat.y });
            rf.bossAt(bossId, seat);
            variant = "gauntlet_done";
          }
          if (variant === "standard") {
            rf.put({ kind: "carpet", x: cx, y: cy });
            rf.bossAt(bossId, { x: cx, y: cy });
            rf.guardAround(cx, cy, rng.randInt(c.bossRoom.elites[0], c.bossRoom.elites[1]), pool, true, 2);
          }
          room.layout = `boss_${variant === "gauntlet_done" ? "gauntlet" : variant}`;
          rf.placeCornerChests(rng.randInt(c.bossRoom.chests[0], c.bossRoom.chests[1]));
          rf.placePotions(rng.randInt(c.bossRoom.potions[0], c.bossRoom.potions[1]));
          break;
        }
      }
      rf.placeRoomTorches();
      if (room.type !== "witch") rf.placePillars();
      rf.furnish();
      if (!(room.type === "end" && (kind === "initial" || kind === "boss"))) {
        const issues = rf.validate(room.type, pool, this.densityCap(room));
        if (issues.length > 0) {
          console.warn(`[ContentFiller] \u623F\u95F4 ${room.id}(${room.type}) \u5185\u5BB9\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF1A${issues.join("\u3001")}`);
        }
      }
    }
    for (const hidden of hiddenRooms) this.fillHiddenRoom(hidden, grid, floorId);
    this.convergeFloorStats([...rooms, ...hiddenRooms], floorId);
    const every = dataManager.mapGen.decor.torchCorridorEvery;
    for (const corridor of corridors) {
      corridor.tiles.forEach((tile, i) => {
        if (i % every !== Math.floor(every / 2)) return;
        const side = grid[tile.y - 1]?.[tile.x] === 1 ? { x: tile.x, y: tile.y - 1 } : grid[tile.y + 1]?.[tile.x] === 1 ? { x: tile.x, y: tile.y + 1 } : null;
        if (side && !this.entityAt(rooms, side.x, side.y)) {
          const host = rooms.find((r) => r.id === corridor.fromRoomId);
          host?.entities.push({ id: IdGenerator.next("ent"), kind: "torch", x: side.x, y: side.y });
        }
      });
    }
  }
  /**
   * 按楼层挑 Boss（每个层级有自己的 Boss）：
   * 命中 floorMin~floorMax 区间者优先；未命中则回落列表首个（远古巨龙，覆盖塔顶与外推楼层）。
   */
  bossIdForFloor(floorId) {
    const bosses = dataManager.monsters.monsters.filter((m) => m.category === "boss");
    const hit = bosses.find((b) => floorId >= b.floorMin && floorId <= b.floorMax);
    return hit?.id ?? bosses[0]?.id ?? "ancient_dragon";
  }
  /**
   * 遗物宝箱落点：优先对角空位，其次房间中心；仍被占用则扫全房取第一个空位。
   * 「必定生成」是设计约束，因此最后一步一定兜底（房间内几乎总有空格）。
   */
  relicChestSpot(rf, room) {
    const preferred = [
      { x: room.x + room.width - 2, y: room.y + 1 },
      { x: room.x + 1, y: room.y + room.height - 2 },
      { x: room.centerX, y: room.centerY }
    ];
    for (const p of preferred) if (rf.freeAt(p.x, p.y)) return p;
    for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
      for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
        if (rf.freeAt(x, y)) return { x, y };
      }
    }
    return null;
  }
  /**
   * 房间「风险-收益」分层（引导玩家权衡路线）：按累积分值定档 ——
   *   支线绕路 +sideBonus（最重）／精英·Boss 房 +eliteBonus／大房（内面积 ≥ areaBonusAt）+1／深入（深度 ≥ depthBonusAt）+1／高层 +1；
   *   分值 ≥3 → 风险 3；1~2 → 风险 2；0 → 风险 1。
   * 风险 → 宝箱收益更高（rewardMul）、更易出「大宝箱」（vaultChance）、遗物掉率更高（relicMul，开箱时结算）。
   * 注意：**刻意不按风险增加怪物数量**——怪物数量直接决定经验收入，一旦膨胀就会冲垮整体成长曲线
   * （equipTest 会因此失败）。风险房「更危险」由房型（精英/Boss）、大房、深度本身承担。
   * 只有战斗/精英/宝箱/Boss 房参与：安全房（商栈/女巫/休整/铁匠）不设风险，避免误导路线判断。
   */
  riskScore(room, floorId) {
    const r = dataManager.mapGen.content.risk;
    const innerArea = (room.width - 2) * (room.height - 2);
    let score = 0;
    if (room.mountedOn) score += r.sideBonus;
    if (room.type === "elite" || room.type === "boss") score += r.eliteBonus;
    if (innerArea >= r.areaBonusAt) score += 1;
    if (room.depth >= r.depthBonusAt) score += 1;
    if (r.floorBonusEvery > 0 && floorId >= r.floorBonusEvery) score += 1;
    return score >= 3 ? 3 : score >= 1 ? 2 : 1;
  }
  /**
   * 楼层级风险分配 + **层内差异保底**：
   *   ① 逐房间按 `riskScore` 定档；
   *   ② 同层风险房 ≥2 且档位全同时，提最深一间（或全 3 时降最浅一间）——
   *      否则玩家在一层里根本无从权衡「安全低收益 vs 危险高收益」。
   * 保底规则本身也是可学习的：**越往深处越危险**。
   */
  assignFloorRisk(rooms, floorId) {
    const riskRooms = rooms.filter((r) => RISK_ROOM_TYPES.has(r.type));
    for (const room of riskRooms) room.risk = this.riskScore(room, floorId);
    if (riskRooms.length >= 2 && new Set(riskRooms.map((r) => r.risk)).size === 1) {
      const sorted = [...riskRooms].sort((a, b) => a.depth - b.depth);
      const base = sorted[0].risk ?? 1;
      if (base === 3) sorted[0].risk = 2;
      else sorted[sorted.length - 1].risk = base + 1;
    }
    const mul = dataManager.mapGen.content.risk.rewardMul;
    for (const room of riskRooms) room.rewardMul = mul[(room.risk ?? 1) - 1] ?? 1;
  }
  /** 怪物密度上限（按房间内面积） */
  densityCap(room) {
    const c = dataManager.mapGen.content;
    const area = (room.width - 2) * (room.height - 2);
    if (area <= c.smallAreaMax) return c.density.small;
    if (area <= c.mediumAreaMax) return c.density.medium;
    return c.density.large;
  }
  /**
   * 隐藏房间内容（P1-1）：1 个 grand 大宝箱 + 1 只精英贴身守护（5×5 内面积 9 → 密度上限 2，恰不超）。
   * 宝箱放距入口最远的角落，精英守在宝箱邻侧（取宝必先过精英，满足 P1-4 守护半径）；
   * 火把 ×2 点缀。奖励随房间深度吃深度倍率（P0-1）。
   */
  fillHiddenRoom(room, grid, floorId) {
    const rf = new RoomFill(room, grid, floorId);
    const all = dataManager.monsters.monsters.filter((m) => m.category === "normal");
    const avail = all.filter((m) => floorId >= m.floorMin && floorId <= m.floorMax);
    const pool = (avail.length > 0 ? avail : all).map((m) => ({ id: m.id, weight: m.weight }));
    const mid = rf.pickMonsterId(pool);
    const ent = room.hiddenEntrance;
    const corners = [
      { x: room.x + 1, y: room.y + 1 },
      { x: room.x + room.width - 2, y: room.y + 1 },
      { x: room.x + 1, y: room.y + room.height - 2 },
      { x: room.x + room.width - 2, y: room.y + room.height - 2 }
    ].sort((a, b) => ent ? manhattan(b, ent) - manhattan(a, ent) : 0);
    const corner = corners.find((p) => rf.freeAt(p.x, p.y)) ?? corners[0];
    rf.put({ kind: "chest", chestTier: "grand", x: corner.x, y: corner.y });
    if (mid) {
      const guardSpots = [
        { x: corner.x, y: corner.y + 1 },
        { x: corner.x + 1, y: corner.y },
        { x: corner.x, y: corner.y - 1 },
        { x: corner.x - 1, y: corner.y },
        { x: room.centerX, y: room.centerY }
      ];
      for (const p of guardSpots) {
        if (rf.placeMonsterUnchecked(mid, true, p)) break;
      }
    }
    let torches = 0;
    for (const p of [
      { x: room.x + 1, y: room.y },
      { x: room.x + room.width - 2, y: room.y + room.height - 1 }
    ]) {
      if (torches >= 2) break;
      if (grid[p.y]?.[p.x] === 1 && !room.entities.some((e) => e.x === p.x && e.y === p.y)) {
        rf.put({ kind: "torch", x: p.x, y: p.y });
        torches++;
      }
    }
  }
  /**
   * 同层怪物数值收敛（P0-2）：约束同一楼层内怪物基础属性差距，避免数值断层。
   *   - 普通怪物属性极差（最大/最小）≤ 1.4
   *   - 全怪物（含精英）属性极差 ≤ 1.8
   *   - 精英软封顶：≤ 同楼层自身深度=1 普通基准 × 1.5
   * 仅约束 hp/攻击/防御；金币/经验掉落不受收敛影响。
   * 只向下修正（含深度≥4 深层房间：优先保证下限、不向上突破上限），
   * 取整用 floor 保证修正后不越过约束边界；怪物类型/精英标签/掉落规则均不变。
   * 实现为「全部落定后统一校验」：与逐个生成时记录极值等价，且能保证最终整层满足约束。
   */
  convergeFloorStats(rooms, floorId) {
    const monsters2 = rooms.flatMap((r) => r.entities.filter((e) => e.kind === "monster" && e.stats)).map((e) => e);
    if (monsters2.length === 0) return;
    const attrs = ["hp", "attack", "defense"];
    const clampTo = (e, attr, cap) => {
      if (e.stats[attr] > cap) e.stats[attr] = Math.max(1, Math.floor(cap));
    };
    const normals = monsters2.filter((e) => !e.isElite);
    const basePool = normals.length > 0 ? normals : monsters2;
    for (const attr of attrs) {
      const min = Math.min(...basePool.map((e) => e.stats[attr]));
      for (const e of normals) clampTo(e, attr, min * 1.4);
    }
    const statCalc = StatCalculator.getInstance();
    for (const e of monsters2.filter((m) => m.isElite)) {
      const def = dataManager.getMonster(e.monsterId ?? "");
      if (!def) continue;
      const base = statCalc.monsterStats(def, floorId, false, 1);
      for (const attr of attrs) clampTo(e, attr, base[attr] * 1.5);
    }
    for (const attr of attrs) {
      const min = Math.min(...monsters2.map((e) => e.stats[attr]));
      for (const e of monsters2) clampTo(e, attr, min * 1.8);
    }
  }
  entityAt(rooms, x, y) {
    return rooms.some((r) => r.entities.some((e) => e.x === x && e.y === y));
  }
};

// src/map/MapValidator.ts
var MAX_PATH_ENUM = 500;
var MapValidator = class _MapValidator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_MapValidator.instance) _MapValidator.instance = new _MapValidator();
    return _MapValidator.instance;
  }
  /** 特殊层（初始/Boss）只验证连通性 */
  validate(rooms, connections, isNormal) {
    const errors = [];
    const adj = this.buildAdjacency(rooms, connections);
    const start = rooms[0];
    const end = rooms[rooms.length - 1];
    const dist = this.bfs(start.id, adj);
    for (const room of rooms) {
      const neighbors = adj.get(room.id) ?? [];
      if (neighbors.length === 0) errors.push(`\u623F\u95F4${room.id}\u65E0\u8FDE\u63A5\uFF08\u5B64\u7ACB\uFF09`);
      if (!dist.has(room.id)) errors.push(`\u623F\u95F4${room.id}\u4E0D\u53EF\u4ECE\u8D77\u70B9\u5230\u8FBE`);
    }
    let pathLengths = [];
    if (isNormal) {
      pathLengths = this.enumeratePaths(start.id, end.id, adj);
      if (pathLengths.length < 2) {
        errors.push(`\u8D77\u70B9\u5230\u7EC8\u70B9\u4EC5${pathLengths.length}\u6761\u8DEF\u5F84\uFF08\u8981\u6C42\u22652\uFF09`);
      } else {
        let ok = false;
        for (let i = 0; i < pathLengths.length && !ok; i++) {
          for (let j = i + 1; j < pathLengths.length && !ok; j++) {
            if (Math.abs(pathLengths[i] - pathLengths[j]) <= dataManager.mapGen.path.maxLengthDiff) ok = true;
          }
        }
        if (!ok) errors.push(`\u8DEF\u5F84\u957F\u5EA6\u5DEE\u5747>${dataManager.mapGen.path.maxLengthDiff}\uFF1A[${pathLengths.join(",")}]`);
      }
      const hasTrunkBattle = rooms.some((r) => (r.onPathA || r.onPathB) && (r.type === "combat" || r.type === "elite"));
      if (!hasTrunkBattle) errors.push("\u4E3B\u5E72\u4E0A\u6CA1\u6709\u6218\u6597\u623F\u95F4");
    }
    return { pass: errors.length === 0, errors, pathLengths };
  }
  /** BFS 距离表（也用于房间 depth） */
  bfs(fromId, adj) {
    const dist = /* @__PURE__ */ new Map([[fromId, 0]]);
    const queue = [fromId];
    while (queue.length > 0) {
      const cur = queue.shift();
      const d = dist.get(cur);
      for (const next of adj.get(cur) ?? []) {
        if (dist.has(next)) continue;
        dist.set(next, d + 1);
        queue.push(next);
      }
    }
    return dist;
  }
  /** 枚举起点→终点全部简单路径长度（封顶防爆炸） */
  enumeratePaths(fromId, toId, adj) {
    const lengths = [];
    const visited = /* @__PURE__ */ new Set([fromId]);
    const dfs = (node, depth) => {
      if (node === toId) {
        lengths.push(depth);
        return lengths.length >= MAX_PATH_ENUM;
      }
      for (const next of adj.get(node) ?? []) {
        if (visited.has(next)) continue;
        visited.add(next);
        const stop = dfs(next, depth + 1);
        visited.delete(next);
        if (stop) return true;
      }
      return false;
    };
    dfs(fromId, 1);
    return lengths;
  }
  buildAdjacency(rooms, connections) {
    const adj = new Map(rooms.map((r) => [r.id, []]));
    for (const conn of connections) {
      adj.get(conn.from)?.push(conn.to);
      adj.get(conn.to)?.push(conn.from);
    }
    return adj;
  }
};

// src/map/MapGenerator.ts
var MapGenerator = class _MapGenerator {
  static instance;
  /** 最近一次生成成功的尝试次数（诊断重试率） */
  lastAttempts = 1;
  constructor() {
  }
  static getInstance() {
    if (!_MapGenerator.instance) _MapGenerator.instance = new _MapGenerator();
    return _MapGenerator.instance;
  }
  generate(floorId) {
    const maxAttempts = dataManager.mapGen.generation.maxAttempts;
    let lastErrors = [];
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const floor = this.tryGenerate(floorId);
        if (floor) {
          this.lastAttempts = attempt;
          return floor;
        }
      } catch (err) {
        lastErrors = [String(err)];
      }
      if (attempt === 5 || attempt === 20) {
        Logger.warn(`[MapGen] \u697C\u5C42${floorId} \u7B2C${attempt}\u6B21\u5C1D\u8BD5\u5931\u8D25\uFF1A${lastErrors.join("; ") || "\u62D3\u6251\u9A8C\u8BC1\u672A\u901A\u8FC7"}`);
      }
    }
    throw new Error(`\u697C\u5C42${floorId}\u751F\u6210\u5931\u8D25\uFF08${maxAttempts}\u6B21\u5C1D\u8BD5\uFF09\uFF1A${lastErrors.join("; ")}`);
  }
  tryGenerate(floorId) {
    const floorGen = FloorGenerator.getInstance();
    const pathGen = PathGenerator.getInstance();
    const roomGen = RoomGenerator.getInstance();
    const corridorGen = CorridorGenerator.getInstance();
    const filler = ContentFiller.getInstance();
    const validator = MapValidator.getInstance();
    const alloc = floorGen.allocate(floorId);
    const plan = pathGen.plan(alloc);
    if (!pathGen.validateDiff(plan)) return null;
    const placed = roomGen.place(floorId, plan);
    if (!placed) return null;
    const rooms = placed.rooms;
    const grid = placed.grid;
    const corridorResult = corridorGen.connect(rooms, grid);
    const connections = corridorResult.connections;
    const adj = new Map(rooms.map((r) => [r.id, []]));
    for (const c of connections) {
      adj.get(c.from)?.push(c.to);
      adj.get(c.to)?.push(c.from);
    }
    const depths = validator.bfs(rooms[0].id, adj);
    for (const room of rooms) room.depth = depths.get(room.id) ?? 0;
    const check2 = validator.validate(rooms, connections, alloc.kind === "normal");
    if (!check2.pass) {
      if (alloc.kind === "normal") return null;
      throw new Error(`\u7279\u6B8A\u5C42\u6821\u9A8C\u5931\u8D25: ${check2.errors.join("; ")}`);
    }
    const hiddenRooms = alloc.kind === "normal" ? corridorGen.spawnHiddenRooms(rooms, corridorResult.corridors, grid, floorId) : [];
    this.carveCliffs(rooms, grid, floorId);
    filler.fill(rooms, corridorResult.corridors, grid, floorId, alloc.kind, hiddenRooms);
    const start = rooms[0];
    return {
      floorId,
      kind: alloc.kind,
      rooms,
      hiddenRooms,
      corridors: corridorResult.corridors,
      connections,
      grid,
      width: grid[0].length,
      height: grid.length,
      entryX: start.centerX,
      entryY: start.centerY
    };
  }
  /** 调试辅助：控制台输出整层结构摘要 */
  describe(floor) {
    const lines = [];
    lines.push(`=== \u697C\u5C42 ${floor.floorId}\uFF08${floor.kind}\uFF09 ${floor.rooms.length}\u4E2A\u623F\u95F4 ${floor.corridors.length}\u6761\u8D70\u5ECA ===`);
    for (const room of this.roomsSorted(floor)) {
      const path = room.onPathA ? "A" : room.onPathB ? "B" : room.mountedOn ? "\u4FA7\u5BA4" : "-";
      lines.push(
        `#${room.order} ${room.type.padEnd(8, "\u3000")} \u7F51\u683C(${room.gx},${room.gy}) \u4E16\u754C(${room.x},${room.y}) ${room.width}x${room.height} \u6DF1${room.depth} \u8DEF\u5F84${path} \u6765\u6E90${room.fromDirection ?? "\u6839"} \u95E8${room.doors.length} \u5B9E\u4F53${room.entities.length}`
      );
    }
    lines.push(`\u5165\u53E3: (${floor.entryX},${floor.entryY}) \u8DEF\u5F84\u6570: \u89C1\u9A8C\u8BC1\u5668`);
    return lines.join("\n");
  }
  /**
   * 悬崖地形（编码 4，规格 2.1.5）：在部分房间内挖出不可通行的不规则深渊。
   *
   * 约束：
   * - 只作用于非关键房（战斗 / 精英 / 宝箱 / 商人 / 女巫 / 铁匠），起点、终点、Boss、休整房不挖；
   * - 避开「门内侧格及其邻域」，保证进出房间的通道不被切断；
   * - 每块深渊落地后立刻校验「房间内可行走格仍单连通且各门内侧可达」，不通过则**回滚**——
   *   深渊绝不允许把房间切成两半或制造无法到达的口袋（内容校验器只能撤柱，救不了悬崖）。
   */
  carveCliffs(rooms, grid, floorId) {
    const cfg = dataManager.mapGen.cliff;
    if (floorId < cfg.minFloor) return;
    const allowance = /* @__PURE__ */ new Set(["combat", "elite", "chest", "merchant", "witch", "blacksmith"]);
    for (const room of rooms) {
      if (!allowance.has(room.type)) continue;
      const area = (room.width - 2) * (room.height - 2);
      if (area < cfg.minInnerArea || !rng.chance(cfg.chance)) continue;
      const doorInners = room.doors.map((d) => doorInner(d));
      const candidates = [];
      for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
        for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
          if (grid[y]?.[x] !== 0) continue;
          if (doorInners.some((p) => Math.abs(x - p.x) <= 1 && Math.abs(y - p.y) <= 1)) continue;
          if (Math.abs(x - room.centerX) <= 1 && Math.abs(y - room.centerY) <= 1) continue;
          candidates.push({ x, y });
        }
      }
      if (candidates.length === 0) continue;
      for (let attempt = 0; attempt < 2; attempt++) {
        const size = rng.randInt(cfg.patchMin, cfg.patchMax);
        const anchor = candidates[rng.randInt(0, candidates.length - 1)];
        const patch = this.growCliffPatch(anchor, size, candidates);
        if (patch.length === 0) continue;
        for (const p of patch) grid[p.y][p.x] = 4;
        if (this.roomStillConnected(room, grid)) break;
        for (const p of patch) grid[p.y][p.x] = 0;
      }
    }
  }
  /** 从锚点向四邻生长一小块连通深渊（仅取候选格 → 形状不规则且贴着可行走区） */
  growCliffPatch(anchor, size, allowed) {
    const key = (p) => `${p.x},${p.y}`;
    const allowedSet = new Set(allowed.map(key));
    const patch = [anchor];
    const inPatch = /* @__PURE__ */ new Set([key(anchor)]);
    while (patch.length < size) {
      const frontier = allowed.filter((p) => allowedSet.has(key(p)) && !inPatch.has(key(p)) && patch.some((q) => manhattan(q, p) === 1));
      if (frontier.length === 0) break;
      const pick = frontier[rng.randInt(0, frontier.length - 1)];
      patch.push(pick);
      inPatch.add(key(pick));
    }
    return patch;
  }
  /** 房间内可行走格是否仍单连通，且各门内侧格都可达 */
  roomStillConnected(room, grid) {
    const cells = [];
    for (let y = room.y + 1; y <= room.y + room.height - 2; y++) {
      for (let x = room.x + 1; x <= room.x + room.width - 2; x++) {
        if (grid[y]?.[x] === 0) cells.push({ x, y });
      }
    }
    if (cells.length === 0) return true;
    const doorInners = room.doors.map((d) => doorInner(d)).filter((p) => grid[p.y]?.[p.x] === 0);
    const source = doorInners[0] ?? cells[0];
    const seen = /* @__PURE__ */ new Set([`${source.x},${source.y}`]);
    const queue = [source];
    while (queue.length > 0) {
      const cur = queue.shift();
      for (const [dx, dy] of DIRS4) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        if (nx < room.x + 1 || nx > room.x + room.width - 2) continue;
        if (ny < room.y + 1 || ny > room.y + room.height - 2) continue;
        const k = `${nx},${ny}`;
        if (seen.has(k) || grid[ny]?.[nx] !== 0) continue;
        seen.add(k);
        queue.push({ x: nx, y: ny });
      }
    }
    return seen.size === cells.length && doorInners.every((p) => seen.has(`${p.x},${p.y}`));
  }
  roomsSorted(floor) {
    return [...floor.rooms].sort((a, b) => a.order - b.order);
  }
};

// src/systems/RelicManager.ts
var CATEGORY_ICON = {
  combat: "\u2694\uFE0F",
  survival: "\u2764\uFE0F",
  economy: "\u{1F4B0}",
  explore: "\u{1F5FA}\uFE0F",
  risk: "\u26A0\uFE0F",
  fun: "\u{1F3B2}"
};
var COMBO_BONUS = {
  assassin: { flat: { critRate: 10 } },
  immortal: { flat: { maxHp: 80 } },
  rich: { flat: { goldBonus: 50, merchantDiscount: 50, chestQualityUp: 1 } },
  fortress: { flat: { thorns: 30, damageReduction: 15 } },
  sacrifice: { pct: { attack: 100, defense: 60 }, flat: { goldBonus: 150 } }
};
var RelicManager = class _RelicManager {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_RelicManager.instance) _RelicManager.instance = new _RelicManager();
    return _RelicManager.instance;
  }
  get all() {
    return dataManager.relics.relics;
  }
  get comboDefs() {
    return dataManager.relics.combos;
  }
  def(id) {
    return dataManager.getRelic(id);
  }
  ownedIds() {
    return Player.getInstance().state.relics;
  }
  owned() {
    return this.ownedIds().map((id) => this.def(id)).filter((d) => !!d);
  }
  has(id) {
    return this.ownedIds().includes(id);
  }
  rarityName(r) {
    return dataManager.relics.rarityNames[String(r)] ?? "";
  }
  rarityColor(r) {
    return dataManager.relics.rarityColors[String(r)] ?? "#fff";
  }
  /** 遗物图标（emoji 或图片路径）：单件 icon > icons 映射 > 类别默认 */
  iconOf(d) {
    return d.icon ?? dataManager.relics.icons?.[d.id] ?? CATEGORY_ICON[d.category] ?? "\u{1F3FA}";
  }
  /** 图标渲染为 HTML（图片路径 → <img>；否则 emoji 文本） */
  iconHtml(d, cls = "relic-icon") {
    const icon = this.iconOf(d);
    return /\.(png|jpe?g|webp|gif|svg)$/i.test(icon) ? `<img class="${cls}" src="${icon}" alt="" draggable="false">` : `<span class="${cls}">${icon}</span>`;
  }
  // ============ 持有 / 丢弃 / 净化 ============
  /** 获得遗物（同类唯一，不可重复持有） */
  add(id, opts = {}) {
    const d = this.def(id);
    if (!d) return false;
    const p = Player.getInstance();
    if (p.state.relics.includes(id)) return false;
    p.state.relics.push(id);
    p.clampHp();
    if (!opts.silent) eventBus.emit("relicGained", { id, name: d.name, rarity: d.rarity });
    this.announceNewCombos();
    return true;
  }
  /**
   * 掉落 / 开箱发现遗物：**不直接入账**，广播给 UI 让玩家抉择（收下 / 丢弃）。
   * 玩家确认收下后由 UI 调 `add()` 真正入账；丢弃则什么也不发生。
   */
  offer(id, source = "drop") {
    const d = this.def(id);
    if (!d || this.has(id)) return false;
    eventBus.emit("relicOffered", { id, name: d.name, rarity: d.rarity, source });
    return true;
  }
  /**
   * 遗物宝箱候选：抽 n 件互不重复的**正向**遗物（排除专属 / 未定稿 / 已持有）。
   * 稀有度带权重（圣 > 神祇 > 尘世），保证三选一里有机会出好东西但不至于全是神祇。
   */
  randomCandidates(n) {
    const weights = [
      { rarity: 3, weight: 3 },
      { rarity: 2, weight: 5 },
      { rarity: 1, weight: 3 }
    ];
    const out = [];
    const taken = /* @__PURE__ */ new Set();
    for (let i = 0; i < n; i++) {
      const pool = this.pickablePool((r) => r.rarity >= 0 && !r.tbd && !taken.has(r.id));
      if (pool.length === 0) break;
      const want = rng.pickWeighted(weights, (w) => w.weight).rarity;
      const prefer = pool.filter((r) => r.rarity === want);
      const from = prefer.length > 0 ? prefer : pool;
      const pick = from[rng.randInt(0, from.length - 1)];
      taken.add(pick.id);
      out.push(pick);
    }
    return out;
  }
  remove(id, silent = false) {
    const p = Player.getInstance();
    const idx = p.state.relics.indexOf(id);
    if (idx < 0) return false;
    p.state.relics.splice(idx, 1);
    p.clampHp();
    const d = this.def(id);
    if (!silent && d) eventBus.emit("relicRemoved", { id, name: d.name });
    return true;
  }
  /** C 类灾厄净化：灾厄形态 → 专属对应的纯正面遗物（一对一） */
  purify(curseId) {
    const d = this.def(curseId);
    if (!d || d.subtype !== "event" || !d.purifyTo || !this.has(curseId)) return false;
    this.remove(curseId, true);
    const p = Player.getInstance();
    p.state.relics.push(d.purifyTo);
    p.clampHp();
    const target = this.def(d.purifyTo);
    this.purifiedCount++;
    eventBus.emit("relicPurified", { from: curseId, to: d.purifyTo, name: target?.name ?? "" });
    this.announceNewCombos();
    return true;
  }
  /** 可净化的灾厄列表（UI / 事件用） */
  purifiable() {
    return this.owned().filter((d) => d.subtype === "event" && !!d.purifyTo);
  }
  /** 本轮已净化次数（每轮上限见 UI 提示） */
  purifiedCount = 0;
  get purified() {
    return this.purifiedCount;
  }
  /** 荡魔义旗：本轮击杀累积的攻击百分比（resetRun 清零） */
  killAttackStack = 0;
  get killAttackPct() {
    return this.killAttackStack;
  }
  /** 新一局重置运行时状态 */
  resetRun() {
    this.lastCombos = [];
    this.firstStrikeFloor = -1;
    this.purifiedCount = 0;
    this.killAttackStack = 0;
  }
  // ============ 组合质变 ============
  activeCombos() {
    const owned = new Set(this.ownedIds());
    return this.comboDefs.filter((c) => c.requires.every((r) => owned.has(r))).map((c) => c.id);
  }
  hasCombo(id) {
    return this.activeCombos().includes(id);
  }
  lastCombos = [];
  firstStrikeFloor = -1;
  /** 每层首次攻击（先攻之刃 / 疾影之靴）：每层仅返回一次 true */
  consumeFirstStrike(floorId) {
    if (this.firstStrikeFloor === floorId) return false;
    this.firstStrikeFloor = floorId;
    return true;
  }
  /** 检测新增组合并广播（供 UI 提示"XX 已觉醒"） */
  announceNewCombos() {
    const now = this.activeCombos();
    for (const cid of now) {
      if (!this.lastCombos.includes(cid)) {
        const c = this.comboDefs.find((x) => x.id === cid);
        if (c) eventBus.emit("relicComboTriggered", { combo: c.id, name: c.name, desc: c.desc });
      }
    }
    this.lastCombos = now;
  }
  // ============ 效果聚合 ============
  /** 效果快照：按当前生命比例聚合（含低血/高血条件 + 组合加成） */
  snapshot(hpRatio) {
    const flat = {};
    const pct = {};
    const addFlat = (k, v) => {
      if (k && v) flat[k] = (flat[k] ?? 0) + v;
    };
    const addPct = (k, v) => {
      if (k && v) pct[k] = (pct[k] ?? 0) + v;
    };
    for (const d of this.owned()) {
      for (const e of d.effects) this.applyEffect(e, hpRatio, addFlat, addPct);
    }
    for (const cid of this.activeCombos()) {
      const b = COMBO_BONUS[cid];
      if (!b) continue;
      if (b.flat) for (const k of Object.keys(b.flat)) addFlat(k, b.flat[k]);
      if (b.pct) for (const k of Object.keys(b.pct)) addPct(k, b.pct[k]);
    }
    if (this.killAttackStack) addPct("attack", this.killAttackStack);
    return { flat, pct, combos: this.activeCombos() };
  }
  applyEffect(e, hpRatio, addFlat, addPct) {
    switch (e.type) {
      case "stat":
        if (e.mode === "percent") addPct(e.stat, e.value);
        else addFlat(e.stat, e.value);
        break;
      case "passive":
        addFlat(e.stat, e.value ?? 1);
        break;
      case "onLowHp":
        if (hpRatio < (e.threshold ?? 0.35)) {
          if (e.mode === "percent") addPct(e.stat, e.value);
          else addFlat(e.stat, e.value);
        }
        break;
      case "onHighHp":
        if (hpRatio > (e.threshold ?? 0.75)) {
          if (e.mode === "percent") addPct(e.stat, e.value);
          else addFlat(e.stat, e.value);
        }
        break;
      default:
        break;
    }
  }
  /** 读取某项被动值（无则 0；hpRatio 默认 1，避免依赖 Player.maxHp 造成重算） */
  value(key, hpRatio = 1) {
    return this.snapshot(hpRatio).flat[key] ?? 0;
  }
  // ============ 触发钩子 ============
  /** 进层触发：再生符文 / 暖炉 / 钥匙串 / 点金指 / 诅咒之镜 / 血债之刃 / 永恒心核 等 */
  onFloorEnter() {
    const p = Player.getInstance();
    const log = [];
    for (const d of this.owned()) {
      for (const e of d.effects) {
        if (e.type !== "onFloorEnter") continue;
        switch (e.action) {
          case "healPct": {
            const h = p.heal(Math.round(p.maxHp * (e.value ?? 0) / 100));
            if (h > 0) log.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "heal": {
            const h = p.heal(e.value ?? 0);
            if (h > 0) log.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "key": {
            p.state.keys += e.value ?? 1;
            log.push(`${d.name}\uFF1A\u83B7\u5F97 ${e.value ?? 1} \u628A\u94A5\u5319`);
            break;
          }
          case "hpLossPct": {
            const loss = Math.max(1, Math.round(p.maxHp * (e.value ?? 0) / 100));
            p.damage(loss);
            log.push(`${d.name}\uFF1A\u635F\u5931 ${loss} \u751F\u547D`);
            break;
          }
          default:
            break;
        }
      }
    }
    return log;
  }
  /** 击杀触发：吸血獠牙 / 拾荒者 / 窃命之契 */
  onKill() {
    const p = Player.getInstance();
    const floorId = p.state.currentFloor;
    const log = [];
    for (const d of this.owned()) {
      for (const e of d.effects) {
        if (e.type !== "onKill") continue;
        switch (e.action) {
          case "heal": {
            const h = p.heal(e.value ?? 0);
            if (h > 0) log.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "healPct": {
            const h = p.heal(Math.round(p.maxHp * (e.value ?? 0) / 100));
            if (h > 0) log.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "loseHp": {
            p.damage(e.value ?? 0);
            log.push(`${d.name}\uFF1A\u635F\u5931 ${e.value ?? 0} \u751F\u547D`);
            break;
          }
          case "killGold": {
            const g = Math.round(2 + floorId * 0.8);
            p.gainGold(g);
            log.push(`${d.name}\uFF1A\u989D\u5916\u6389\u843D ${g} \u91D1\u5E01`);
            break;
          }
          case "killAttackPct": {
            this.killAttackStack += e.value ?? 0;
            log.push(`${d.name}\uFF1A\u653B\u51FB +${e.value ?? 0}%\uFF08\u7D2F\u8BA1 +${this.killAttackStack}%\uFF09`);
            break;
          }
          default:
            break;
        }
      }
    }
    return log;
  }
  // ============ 掉落掷骰 ============
  /**
   * 可随机授予的遗物池：统一排除「专属（难度 / 剧情指定）」与「已持有」。
   * 所有随机渠道（掉落 / 灾厄 / 开局 / 三选一）都必须经由此处，避免规则分叉。
   */
  pickablePool(filter) {
    return this.all.filter((r) => !r.exclusive && !this.has(r.id) && (!filter || filter(r)));
  }
  /** 从池中均匀取一件（空池返回 null） */
  pickOne(pool) {
    return pool.length > 0 ? pool[rng.randInt(0, pool.length - 1)] : null;
  }
  /** 随机取得某稀有度的遗物（排除已持有；可选排除灾厄） */
  randomOfRarity(rarity, excludeCurses = true) {
    return this.pickOne(this.pickablePool((r) => r.rarity === rarity && r.id !== "X007" && (!excludeCurses || r.rarity !== -1)));
  }
  /**
   * 按渠道掷骰掉落。返回获得的遗物（无则 null）。
   * kind：chest 通用渠道（各稀有度独立判定）/ boss / elite
   * chanceMul：掉率倍率（风险房收益用；缺省 1 = 旧行为）
   */
  rollDrop(kind, chanceMul = 1) {
    const rf = dataManager.relics;
    const table = kind === "boss" ? rf.bossDropChances : kind === "elite" ? rf.eliteDropChances : rf.dropChances;
    const order = [4, 3, 2, 1, 0];
    for (const rar of order) {
      const chance = (table[String(rar)] ?? 0) * chanceMul;
      if (chance > 0 && rng.chance(chance)) {
        const relic = this.randomOfRarity(rar, true);
        if (relic) {
          this.offer(relic.id, kind);
          return relic;
        }
      }
    }
    return null;
  }
  /** 灾厄掉落（宝箱/事件）：B 类高风险中收益 */
  rollRiskCurse() {
    const relic = this.pickOne(this.pickablePool((r) => r.subtype === "risk"));
    if (!relic) return null;
    this.add(relic.id);
    return relic;
  }
  /** 开局灾厄：A 类随机抽取 n 件 */
  grantStartCurses(n) {
    const pool = this.pickablePool((r) => r.subtype === "start");
    const picked = [];
    for (let i = 0; i < n && pool.length > 0; i++) {
      const idx = rng.randInt(0, pool.length - 1);
      const relic = pool.splice(idx, 1)[0];
      this.add(relic.id, { silent: true });
      picked.push(relic);
    }
    return picked;
  }
  /** C 类事件型灾厄：授予指定灾厄（净化目标需专一） */
  grantEventCurse() {
    const relic = this.pickOne(this.pickablePool((r) => r.subtype === "event"));
    if (!relic) return null;
    this.add(relic.id);
    return relic;
  }
};

// src/entities/Player.ts
var QUALITY_ORDER = ["poor", "common", "fine", "rare", "epic", "legendary", "mythic"];
var Player = class _Player {
  static instance;
  state;
  constructor() {
    const base = dataManager.config.playerBase;
    this.state = {
      level: 1,
      exp: 0,
      hp: base.maxHp,
      baseMaxHp: base.maxHp,
      baseAttack: base.attack,
      baseDefense: base.defense,
      baseCritRate: base.critRate,
      baseDodgeRate: base.dodgeRate,
      gold: 0,
      keys: 0,
      potions: { crude: 0, normal: 0, quality: 0, strong: 0, holy: 0 },
      hotbar: [null, null, null, null, null],
      weaponId: null,
      armorId: null,
      accessoryId: null,
      bag: [],
      relics: [],
      x: 0,
      y: 0,
      currentFloor: 1,
      currentRoomId: ""
    };
  }
  static getInstance() {
    if (!_Player.instance) _Player.instance = new _Player();
    return _Player.instance;
  }
  /** 存档恢复 */
  restore(state) {
    this.state = state;
  }
  get pos() {
    return { x: this.state.x, y: this.state.y };
  }
  // ============ 属性聚合（基础 + 装备 + 词条） ============
  equipped() {
    const { weaponId, armorId, accessoryId } = this.state;
    return this.state.bag.filter((e) => e.id === weaponId || e.id === armorId || e.id === accessoryId);
  }
  stats() {
    let attack = this.state.baseAttack;
    let defense = this.state.baseDefense;
    let maxHp = this.state.baseMaxHp;
    let critRate = this.state.baseCritRate;
    let dodgeRate = this.state.baseDodgeRate;
    let lifesteal = 0;
    let fireDamage = 0;
    let goldBonus = 0;
    let expBonus = 0;
    let bossDamage = 0;
    let pctAtk = 0;
    let pctDef = 0;
    for (const equip of this.equipped()) {
      attack += equip.attack;
      defense += equip.defense;
      if (equip.accessoryStat === "crit") critRate += equip.accessoryValue ?? 0;
      else if (equip.accessoryStat === "dodge") dodgeRate += equip.accessoryValue ?? 0;
    }
    const affixes = this.equipped().flatMap((e) => e.affixes);
    for (const a of affixes) {
      switch (a.type) {
        case "sharp":
          attack += a.value;
          break;
        case "sturdy":
          defense += a.value;
          break;
        case "vitality":
          maxHp += a.value;
          break;
        case "precision":
          critRate += a.value;
          break;
        case "agility":
          dodgeRate += a.value;
          break;
        case "savage":
          pctAtk += a.value;
          break;
        case "fortress":
          pctDef += a.value;
          break;
        case "lifesteal":
          lifesteal += a.value;
          break;
        case "hellfire":
          fireDamage += a.value;
          break;
        case "greed":
          goldBonus += a.value;
          break;
        case "wisdom":
          expBonus += a.value;
          break;
        case "dragonslayer":
          bossDamage += a.value;
          break;
      }
    }
    const relics = RelicManager.getInstance();
    const hpRatio = maxHp > 0 ? this.state.hp / maxHp : 1;
    const snap = relics.snapshot(hpRatio);
    const F = snap.flat;
    const P = snap.pct;
    let critDamage = 0;
    let damageReduction = 0;
    let damageTaken = 0;
    let thorns = 0;
    let armorPen = 0;
    let eliteBossDamage = 0;
    let monsterAttackUp = 0;
    let potionBonus = 0;
    let potionExtraPct = 0;
    let pctMaxHp = 0;
    attack += F.attack ?? 0;
    pctAtk += P.attack ?? 0;
    defense += F.defense ?? 0;
    pctDef += P.defense ?? 0;
    maxHp += F.maxHp ?? 0;
    pctMaxHp += P.maxHp ?? 0;
    critRate += F.critRate ?? 0;
    dodgeRate += F.dodgeRate ?? 0;
    lifesteal += F.lifesteal ?? 0;
    fireDamage += F.fireDamage ?? 0;
    goldBonus += F.goldBonus ?? 0;
    expBonus += F.expBonus ?? 0;
    bossDamage += F.bossDamage ?? 0;
    critDamage += F.critDamage ?? 0;
    damageReduction += F.damageReduction ?? 0;
    damageTaken += F.damageTaken ?? 0;
    thorns += F.thorns ?? 0;
    armorPen += F.armorPen ?? 0;
    eliteBossDamage += F.eliteBossDamage ?? 0;
    monsterAttackUp += F.monsterAttackUp ?? 0;
    potionBonus += F.potionBonus ?? 0;
    potionExtraPct += F.potionExtraPct ?? 0;
    let finalMaxHp = Math.round(maxHp * (1 + pctMaxHp / 100));
    if (snap.combos.includes("sacrifice")) finalMaxHp = 1;
    let finalAttack = Math.round(attack * (1 + pctAtk / 100));
    if (snap.combos.includes("bloodrage") && hpRatio < 0.35) finalAttack *= 2;
    return {
      maxHp: Math.max(1, finalMaxHp),
      attack: finalAttack,
      defense: Math.round(defense * (1 + pctDef / 100)),
      critRate: Math.min(75, critRate),
      dodgeRate: Math.min(50, dodgeRate),
      lifesteal,
      fireDamage,
      goldBonus,
      expBonus,
      bossDamage,
      critDamage,
      damageReduction,
      damageTaken,
      thorns,
      armorPen,
      eliteBossDamage,
      monsterAttackUp,
      potionBonus,
      potionExtraPct
    };
  }
  get maxHp() {
    return this.stats().maxHp;
  }
  get attack() {
    return this.stats().attack;
  }
  get defense() {
    return this.stats().defense;
  }
  get isAlive() {
    return this.state.hp > 0;
  }
  // ============ 生命 / 经验 / 金币 ============
  heal(amount) {
    const max = this.maxHp;
    const before = this.state.hp;
    this.state.hp = Math.min(max, this.state.hp + amount);
    const healed = this.state.hp - before;
    if (healed > 0) eventBus.emit("hpChanged", { oldValue: before, newValue: this.state.hp, delta: healed });
    return healed;
  }
  damage(amount) {
    const before = this.state.hp;
    this.state.hp = Math.max(0, this.state.hp - amount);
    eventBus.emit("hpChanged", { oldValue: before, newValue: this.state.hp, delta: this.state.hp - before });
  }
  /** 生命上限变化后夹取当前生命（如遗物降低上限） */
  clampHp() {
    const max = this.maxHp;
    if (this.state.hp > max) {
      const before = this.state.hp;
      this.state.hp = max;
      eventBus.emit("hpChanged", { oldValue: before, newValue: this.state.hp, delta: this.state.hp - before });
    }
  }
  gainExp(amount) {
    const bonus = 1 + this.stats().expBonus / 100;
    const gained = Math.round(amount * bonus);
    const before = this.state.exp;
    this.state.exp += gained;
    eventBus.emit("expChanged", { oldValue: before, newValue: this.state.exp, delta: gained });
    this.checkLevelUp();
  }
  checkLevelUp() {
    const calc2 = StatCalculator.getInstance();
    let need = calc2.expToNext(this.state.level);
    while (this.state.exp >= need && this.state.level < 999) {
      this.state.exp -= need;
      const oldLevel = this.state.level;
      this.state.level += 1;
      const base = calc2.playerBaseAt(this.state.level);
      const gainedHp = base.maxHp - this.state.baseMaxHp;
      const gainedAtk = base.attack - this.state.baseAttack;
      const gainedDef = base.defense - this.state.baseDefense;
      this.state.baseMaxHp = base.maxHp;
      this.state.baseAttack = base.attack;
      this.state.baseDefense = base.defense;
      this.state.hp += gainedHp;
      eventBus.emit("levelUp", { oldLevel, newLevel: this.state.level, gainedHp, gainedAttack: gainedAtk, gainedDefense: gainedDef });
      need = calc2.expToNext(this.state.level);
    }
  }
  gainGold(amount) {
    const bonus = 1 + this.stats().goldBonus / 100;
    const gained = Math.round(amount * bonus);
    const old = this.state.gold;
    this.state.gold += gained;
    eventBus.emit("goldChanged", { oldValue: old, newValue: this.state.gold, delta: gained });
  }
  spendGold(amount) {
    if (this.state.gold < amount) return false;
    const old = this.state.gold;
    this.state.gold -= amount;
    eventBus.emit("goldChanged", { oldValue: old, newValue: this.state.gold, delta: -amount });
    return true;
  }
  // ============ 药水 ============
  getPotionCount(tier) {
    return this.state.potions[tier] ?? 0;
  }
  /** 绑定快捷栏槽位（拖拽药水到快捷栏） */
  setHotbarSlot(slot, tier) {
    if (slot < 0 || slot >= this.state.hotbar.length) return;
    this.state.hotbar[slot] = tier;
  }
  /** 交换/移动两个快捷栏槽位的绑定 */
  swapHotbar(from, to) {
    const hb = this.state.hotbar;
    if (from < 0 || from >= hb.length || to < 0 || to >= hb.length) return;
    [hb[from], hb[to]] = [hb[to], hb[from]];
  }
  addPotion(tier, count = 1) {
    this.state.potions[tier] = this.getPotionCount(tier) + count;
  }
  /** 使用药水：百分比回复（含遗物药水加成；贪婪之匣禁止用药） */
  usePotion(tier) {
    if (this.getPotionCount(tier) <= 0) return false;
    if (RelicManager.getInstance().value("noPotion") > 0) return false;
    const def = dataManager.getPotion(tier);
    if (!def) return false;
    this.state.potions[tier] -= 1;
    const s = this.stats();
    const pct = def.healPct * (1 + s.potionBonus / 100);
    const extra = s.potionExtraPct > 0 ? this.maxHp * s.potionExtraPct / 100 : 0;
    const healed = this.heal(Math.round(this.maxHp * pct + extra));
    eventBus.emit("potionUsed", { tier, healed });
    return true;
  }
  /** 自动选最优药水（战斗中扣血超过其回复量时用；贪婪之匣禁用） */
  bestPotionFor(missing) {
    if (RelicManager.getInstance().value("noPotion") > 0) return null;
    const order = ["crude", "normal", "quality", "strong", "holy"];
    for (const tier of order) {
      const def = dataManager.getPotion(tier);
      if (!def) continue;
      if (this.getPotionCount(tier) > 0 && Math.round(this.maxHp * def.healPct) <= missing) return tier;
    }
    for (const tier of order) {
      if (this.getPotionCount(tier) > 0) return tier;
    }
    return null;
  }
  // ============ 装备 ============
  get weapon() {
    return this.state.bag.find((e) => e.id === this.state.weaponId) ?? null;
  }
  get armor() {
    return this.state.bag.find((e) => e.id === this.state.armorId) ?? null;
  }
  get accessory() {
    return this.state.bag.find((e) => e.id === this.state.accessoryId) ?? null;
  }
  /** 背包中未穿戴的装备 */
  get unequippedBag() {
    const { weaponId, armorId, accessoryId } = this.state;
    return this.state.bag.filter((e) => e.id !== weaponId && e.id !== armorId && e.id !== accessoryId);
  }
  addEquipment(equip) {
    this.state.bag.push(equip);
    eventBus.emit("equipmentGenerated", { equipment: equip, source: equip.source });
  }
  /** 槽位当前穿戴的装备 ID（未知槽位 → null） */
  equippedIdOf(slot) {
    if (slot === "weapon") return this.state.weaponId;
    if (slot === "armor") return this.state.armorId;
    if (slot === "accessory") return this.state.accessoryId;
    return null;
  }
  setEquippedId(slot, id) {
    if (slot === "weapon") this.state.weaponId = id;
    else if (slot === "armor") this.state.armorId = id;
    else if (slot === "accessory") this.state.accessoryId = id;
  }
  equip(equipId) {
    const equip = this.state.bag.find((e) => e.id === equipId);
    if (!equip) return false;
    const slot = equip.slot;
    const current = this.equippedIdOf(slot);
    if (current === equipId) return false;
    this.setEquippedId(slot, equipId);
    eventBus.emit("equipmentEquipped", { slot, equipmentId: equipId, oldId: current });
    return true;
  }
  unequip(slot) {
    this.setEquippedId(slot, null);
    eventBus.emit("equipmentEquipped", { slot, equipmentId: "", oldId: null });
  }
  removeEquipment(equipId) {
    const idx = this.state.bag.findIndex((e) => e.id === equipId);
    if (idx < 0) return null;
    if (this.state.weaponId === equipId) this.state.weaponId = null;
    if (this.state.armorId === equipId) this.state.armorId = null;
    if (this.state.accessoryId === equipId) this.state.accessoryId = null;
    const [removed] = this.state.bag.splice(idx, 1);
    return removed;
  }
  qualityRank(q) {
    return QUALITY_ORDER.indexOf(q);
  }
};

// src/systems/EquipmentGenerator.ts
var QUALITY_RANK = {
  poor: 0,
  common: 1,
  fine: 2,
  rare: 3,
  epic: 4,
  legendary: 5,
  mythic: 6
};
var EquipmentGenerator = class _EquipmentGenerator {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_EquipmentGenerator.instance) _EquipmentGenerator.instance = new _EquipmentGenerator();
    return _EquipmentGenerator.instance;
  }
  /** 品质掷骰：随楼层变化的权重表 */
  rollQuality(floorId) {
    const bands = dataManager.equipment.qualityByFloor;
    const band = bands.find((b) => floorId >= b.minFloor && floorId <= b.maxFloor) ?? bands[bands.length - 1];
    const entries = Object.entries(band.weights);
    return rng.pickWeighted(entries, ([, w]) => w)[0];
  }
  /** 装备等级公式 */
  rollEquipLevel(playerLevel, floorId) {
    const f = dataManager.equipment.equipLevelFormula;
    const level = Math.floor(playerLevel * f.playerLevelFactor + floorId * f.floorFactor + rng.randInt(f.randomMin, f.randomMax));
    return Math.max(f.min, Math.min(f.max, level));
  }
  /** 生成一件装备（opts.depth：房间深度，品质下限随深度提升，P0-1；缺省不生效） */
  generate(source, opts = {}) {
    const player = Player.getInstance();
    const floorId = opts.floorId ?? player.state.currentFloor;
    let quality = opts.forcedQuality ?? this.rollQuality(floorId);
    if (!opts.forcedQuality && opts.depth !== void 0 && opts.depth > 1) {
      quality = this.applyDepthQualityFloor(quality, opts.depth);
    }
    const slot = opts.slot ?? this.rollSlot();
    const level = this.rollEquipLevel(player.state.level, floorId);
    const value = this.rollBaseValue(slot, quality, level);
    const attack = slot === "weapon" ? value : 0;
    const defense = slot === "armor" ? value : 0;
    const accessoryStat = slot === "accessory" ? this.rollAccessoryStat() : void 0;
    const affixes = this.rollAffixes(quality, level);
    const q = dataManager.equipment.quality[quality];
    const baseName = this.baseName(slot, level);
    const name = this.buildName(q.prefix, baseName, affixes);
    const sellPrice = Math.round(q.basePrice * (1 + level * 0.05) * (1 + affixes.length * 0.15));
    const rule = dataManager.equipment.buyPriceRule;
    const buyPrice = Math.max(rule.min, Math.min(rule.max, Math.round(sellPrice * rule.sellMultiplier)));
    return {
      id: IdGenerator.equipmentId(),
      slot,
      baseName,
      name,
      level,
      quality,
      affixes,
      attack,
      defense,
      accessoryStat,
      accessoryValue: accessoryStat ? value : void 0,
      sellPrice,
      buyPrice,
      source
    };
  }
  /** 槽位掷骰（配置驱动：武器/胸甲/饰品；缺省回退 50/50 无饰品） */
  rollSlot() {
    const w = dataManager.equipment.slotWeights;
    if (!w) return rng.chance(0.5) ? "weapon" : "armor";
    const entries = Object.entries(w).filter(([, v]) => v > 0);
    if (entries.length === 0) return "weapon";
    return rng.pickWeighted(entries, ([, v]) => v)[0];
  }
  /** 饰品主属性掷骰（暴击 / 闪避） */
  rollAccessoryStat() {
    const w = dataManager.equipment.accessoryStatWeights ?? { crit: 50, dodge: 50 };
    const entries = Object.entries(w).filter(([, v]) => v > 0);
    if (entries.length === 0) return "crit";
    return rng.pickWeighted(entries, ([, v]) => v)[0];
  }
  /** 教学关固定基础装备（破烂铁剑） */
  tutorialWeapon() {
    return this.generate("tutorial", { forcedQuality: "poor", slot: "weapon", floorId: 1 });
  }
  /**
   * 深度品质下限（P0-1）：深度每 +2 品质下限提升 1 档（基准为破烂），下限封顶史诗。
   * 最终品质 = max(掷骰品质, 深度下限)。
   */
  applyDepthQualityFloor(quality, depth) {
    const order = dataManager.equipment.qualityOrder;
    const epicIdx = order.indexOf("epic");
    const floorIdx = Math.min(Math.floor((depth - 1) / 2), epicIdx);
    return order[Math.max(order.indexOf(quality), floorIdx)];
  }
  // ============ 铁匠服务（BlacksmithPanel 调用） ============
  /** 重铸词条：同品质同等级重掷词条与命名（保底：poor/common 无词条则无变化） */
  reforge(e) {
    return this.rebuild(e, { affixes: this.rollAffixes(e.quality, e.level) });
  }
  /** 锤炼升级：等级 +1（上限50），基础值与词条按新等级重掷 */
  upgradeLevel(e) {
    if (e.level >= 50) return null;
    const level = e.level + 1;
    return this.rebuild(e, {
      level,
      value: this.rollBaseValue(e.slot, e.quality, level),
      affixes: this.rollAffixes(e.quality, level)
    });
  }
  /** 淬火提品质：向上一档（仅限史诗以下，稀有可到史诗）；到顶返回 null */
  upgradeQuality(e) {
    const order = dataManager.equipment.qualityOrder;
    const i = order.indexOf(e.quality);
    const next = order[i + 1];
    if (!next || i + 1 > order.indexOf("epic")) return null;
    return this.rebuild(e, {
      quality: next,
      value: this.rollBaseValue(e.slot, next, e.level),
      affixes: this.rollAffixes(next, e.level)
    });
  }
  /** 以原装备为基底重建（保留 id/slot/source，可覆盖品质/等级/基础值/词条，并重算名称与价格） */
  rebuild(e, over) {
    const quality = over.quality ?? e.quality;
    const level = over.level ?? e.level;
    const value = over.value ?? (e.slot === "weapon" ? e.attack : e.slot === "armor" ? e.defense : e.accessoryValue ?? 0);
    const affixes = over.affixes ?? e.affixes;
    const q = dataManager.equipment.quality[quality];
    const name = this.buildName(q.prefix, e.baseName, affixes);
    const sellPrice = Math.round(q.basePrice * (1 + level * 0.05) * (1 + affixes.length * 0.15));
    const rule = dataManager.equipment.buyPriceRule;
    const buyPrice = Math.max(rule.min, Math.min(rule.max, Math.round(sellPrice * rule.sellMultiplier)));
    return {
      ...e,
      name,
      level,
      quality,
      affixes,
      attack: e.slot === "weapon" ? value : 0,
      defense: e.slot === "armor" ? value : 0,
      accessoryValue: e.slot === "accessory" ? value : void 0,
      sellPrice,
      buyPrice
    };
  }
  /** 基础数值：等级段×品质范围；空缺(null)回退到更低的可用品质；神话=传说×1.43。
   *  饰品为百分点（一位小数，前期约 1% 起，随品质与等级成长）。 */
  rollBaseValue(slot, quality, level) {
    const tables = dataManager.equipment;
    const table = slot === "weapon" ? tables.weaponTable : slot === "armor" ? tables.armorTable : tables.accessoryTable;
    const row = table.find((r) => level >= r.minEquipLevel && level <= r.maxEquipLevel) ?? table[table.length - 1];
    const values = row.values;
    let range = values[quality] ?? null;
    if (!range && quality === "mythic") {
      const leg = values["legendary"];
      if (leg) {
        const f = tables.mythicFromLegendary;
        range = slot === "accessory" ? [this.dec1(leg[0] * f), this.dec1(leg[1] * f)] : [Math.round(leg[0] * f), Math.round(leg[1] * f)];
      }
    }
    const order = tables.qualityOrder;
    let qi = order.indexOf(quality);
    while (!range && qi > 0) {
      qi -= 1;
      range = values[order[qi]] ?? null;
    }
    if (!range) range = slot === "accessory" ? [0.5, 1] : [1, 2];
    if (slot === "accessory") {
      return this.dec1(range[0] + Math.random() * (range[1] - range[0]));
    }
    return rng.randInt(range[0], range[1]);
  }
  /** 保留一位小数 */
  dec1(v) {
    return Math.round(v * 10) / 10;
  }
  /** 词条生成：数量按品质（含高等级加成），不重复，品质下限过滤 */
  rollAffixes(quality, level) {
    const q = dataManager.equipment.quality[quality];
    let count = q.affixCount;
    if (q.affixExtra) {
      for (const extra of q.affixExtra) {
        if (level >= extra.atEquipLevel) count += extra.add;
      }
    }
    count = Math.min(count, q.affixCountMax);
    if (quality === "mythic") count = dataManager.equipment.affixSpecial.mythicAffixCount;
    const pool = dataManager.equipment.affixes.filter((a) => QUALITY_RANK[quality] >= QUALITY_RANK[a.minQuality]);
    if (pool.length === 0) return [];
    const picked = rng.shuffle(pool).slice(0, count);
    return picked.map((def) => {
      const band = def.bands.find((b) => level <= b.maxEquipLevel) ?? def.bands[def.bands.length - 1];
      const value = rng.randInt(band.min, band.max);
      return { type: def.type, name: def.name, value, isPercent: def.isPercent };
    });
  }
  baseName(slot, level) {
    const names = dataManager.equipment.baseNames;
    const table = (slot === "weapon" ? names.weapon : slot === "armor" ? names.armor : names.accessory) ?? names.weapon;
    const row = table.find((r) => level >= r.minEquipLevel && level <= r.maxEquipLevel) ?? table[table.length - 1];
    return row.names[0];
  }
  /** 命名：[品质前缀][基础名][·词条1][·词条2]（普通无前缀） */
  buildName(prefix, baseName, affixes) {
    let name = prefix ? `${prefix}${baseName}` : baseName;
    for (const a of affixes) name += `\xB7${a.name}`;
    return name;
  }
};

// src/test/p0Test.ts
var failed = 0;
function check(name, cond, detail = "") {
  if (!cond) {
    failed++;
    console.error(`\u2717 ${name} ${detail}`);
  }
}
function approx(a, b, eps = 1e-9) {
  return Math.abs(a - b) < eps;
}
dataManager.loadAll();
var calc = StatCalculator.getInstance();
var monsters = dataManager.monsters.monsters.filter((m) => m.category === "normal");
var slime = monsters[0];
var mulCases = [
  [5, 0, 0.8],
  [7, 2, 1],
  [8, 3, 1.1],
  [9, 4, 1.15],
  [10, 6, 1.15 + 0.2],
  [15, 0, 0.75],
  [20, 2, 1.1],
  [25, 3, 1.1],
  [30, 4, 1.15],
  [30, 7, 1.15 + 0.45],
  [31, 0, 0.7],
  [40, 2, 1.1],
  [50, 3, 1.2],
  [60, 4, 1.2],
  [80, 9, 1.2 + 1]
];
for (const [f, d, want] of mulCases) {
  check(
    `\u500D\u7387\u8868 floor${f} depth${d}`,
    approx(calc.depthMultiplier(f, d), want),
    `got=${calc.depthMultiplier(f, d)} want=${want}`
  );
}
check("depth1 \u6052\u4E3A\u57FA\u51C61.0", [1, 5, 15, 30, 31, 99].every((f) => approx(calc.depthMultiplier(f, 1), 1)));
for (const f of [3, 12, 33, 55]) {
  const a = calc.monsterStats(slime, f, false);
  const b = calc.monsterStats(slime, f, false, 1);
  check(`\u4E0D\u4F20depth\u517C\u5BB9 floor${f}`, a.hp === b.hp && a.attack === b.attack && a.defense === b.defense && a.gold === b.gold && a.exp === b.exp);
}
for (const f of [7, 20, 45]) {
  const d0 = calc.monsterStats(slime, f, false, 0).hp;
  const d1 = calc.monsterStats(slime, f, false, 1).hp;
  const d2 = calc.monsterStats(slime, f, false, 2).hp;
  const d3 = calc.monsterStats(slime, f, false, 3).hp;
  const d4 = calc.monsterStats(slime, f, false, 4).hp;
  check(
    `\u6DF1\u5EA6\u68AF\u5EA6 floor${f}`,
    d0 < d1 && d1 <= d2 && d2 <= d3 && d3 <= d4 && d1 < d4,
    `${d0},${d1},${d2},${d3},${d4}`
  );
}
{
  const g1 = calc.monsterStats(slime, 25, false, 1).gold;
  const g4 = calc.monsterStats(slime, 25, false, 4).gold;
  const e1 = calc.monsterStats(slime, 25, false, 1).exp;
  const e4 = calc.monsterStats(slime, 25, false, 4).exp;
  check("\u6389\u843D\u968F\u6DF1\u5EA6\u9012\u589E", g4 > g1 && e4 > e1, `gold ${g1}->${g4} exp ${e1}->${e4}`);
}
{
  const em = dataManager.monsters;
  const n = calc.monsterStats(slime, 12, false, 4).hp;
  const e = calc.monsterStats(slime, 12, true, 4).hp;
  check("\u7CBE\u82F1\u53E0\u52A0\u987A\u5E8F", Math.abs(e - n * em.eliteStatMultiplier) <= 1, `${n}\xD7${em.eliteStatMultiplier}\u2248${e}`);
}
{
  const eg = EquipmentGenerator.getInstance();
  for (let i = 0; i < 20; i++) {
    const q = eg.generate("chest", { floorId: 5, depth: 9 }).quality;
    const order = dataManager.equipment.qualityOrder;
    check("\u6DF1\u5EA6\u54C1\u8D28\u4E0B\u9650\u2265epic", order.indexOf(q) >= order.indexOf("epic"), `got=${q}`);
  }
  let sawLow = false;
  for (let i = 0; i < 60; i++) {
    const q = eg.generate("chest", { floorId: 5 }).quality;
    if (q === "poor" || q === "common") sawLow = true;
  }
  check("\u65E0\u6DF1\u5EA6\u53C2\u6570\u4E0D\u5F3A\u5236\u54C1\u8D28", sawLow);
}
{
  const gen = MapGenerator.getInstance();
  let checked = 0;
  for (const f of [6, 14, 27]) {
    const floor = gen.generate(f);
    for (const room of floor.rooms) {
      for (const e of room.entities) {
        if (e.kind !== "monster") continue;
        const def = dataManager.getMonster(e.monsterId);
        check("\u5B9E\u4F53\u643A\u5E26depth", e.depth === room.depth, `room=${room.id} e.depth=${e.depth}`);
        check("\u5B9E\u4F53\u643A\u5E26stats", !!e.stats);
        if (def && e.stats) {
          const want = calc.monsterStats(def, f, !!e.isElite, room.depth);
          check(
            "stats\u4E0E\u6DF1\u5EA6\u8BA1\u7B97\u4E00\u81F4",
            e.stats.hp <= want.hp && e.stats.attack <= want.attack && e.stats.defense <= want.defense && e.stats.gold === want.gold,
            `${e.stats.hp}/${want.hp}`
          );
        }
        checked++;
      }
    }
  }
  check("\u6709\u602A\u7269\u88AB\u68C0\u67E5", checked > 10, `checked=${checked}`);
}
{
  const gen = MapGenerator.getInstance();
  const calc2 = StatCalculator.getInstance();
  const EPS = 1e-9;
  let floorsChecked = 0;
  let inverted = 0, pairsChecked = 0;
  for (const f of [2, 4, 6, 8, 11, 14, 18, 22, 27, 33, 41, 55]) {
    for (let it = 0; it < 12; it++) {
      const floor = gen.generate(f);
      const mons = floor.rooms.flatMap((r) => r.entities.filter((e) => e.kind === "monster" && e.stats).map((e) => ({
        room: r,
        isElite: !!e.isElite,
        def: e.monsterId ?? "",
        stats: e.stats
      })));
      if (mons.length === 0) continue;
      floorsChecked++;
      for (const attr of ["hp", "attack", "defense"]) {
        const normals = mons.filter((m) => !m.isElite);
        if (normals.length > 0) {
          const nMin = Math.min(...normals.map((m) => m.stats[attr]));
          const nMax = Math.max(...normals.map((m) => m.stats[attr]));
          check(`\u666E\u901A\u6781\u5DEE\u22641.4 f${f}`, nMax <= nMin * 1.4 + EPS, `${attr} ${nMin}~${nMax}`);
        }
        const aMin = Math.min(...mons.map((m) => m.stats[attr]));
        const aMax = Math.max(...mons.map((m) => m.stats[attr]));
        check(`\u5168\u602A\u6781\u5DEE\u22641.8 f${f}`, aMax <= aMin * 1.8 + EPS, `${attr} ${aMin}~${aMax}`);
      }
      for (const m of mons.filter((x) => x.isElite)) {
        const def = dataManager.getMonster(m.def);
        if (!def) continue;
        const base = calc2.monsterStats(def, f, false, 1);
        for (const attr of ["hp", "attack", "defense"]) {
          check(
            `\u7CBE\u82F1\u2264\u57FA\u51C61.5\u500D f${f}`,
            m.stats[attr] <= base[attr] * 1.5 + EPS,
            `${attr} ${m.stats[attr]} cap=${base[attr] * 1.5}`
          );
        }
        const em = dataManager.monsters;
        const baseD = calc2.monsterStats(def, f, false, m.room.depth);
        check(
          "\u7CBE\u82F1\u6389\u843D\u672A\u88AB\u5C01\u9876",
          Math.abs(m.stats.gold - baseD.gold * em.eliteGoldMultiplier) <= 2 && Math.abs(m.stats.exp - baseD.exp * em.eliteExpMultiplier) <= 2,
          `gold ${m.stats.gold}\u2248${baseD.gold * em.eliteGoldMultiplier} exp ${m.stats.exp}\u2248${baseD.exp * em.eliteExpMultiplier}`
        );
      }
      const byDef = /* @__PURE__ */ new Map();
      for (const m of mons) {
        const g = byDef.get(m.def) ?? [];
        g.push(m);
        byDef.set(m.def, g);
      }
      for (const g of byDef.values()) {
        for (let i = 0; i < g.length; i++) {
          for (let j = 0; j < g.length; j++) {
            if (i === j) continue;
            const a = g[i], b = g[j];
            let hi = a, lo = b;
            if (a.isElite === b.isElite) {
              if (a.room.depth <= b.room.depth) continue;
            } else if (a.room.depth === b.room.depth && a.room.depth <= 3) {
              if (!a.isElite) continue;
            } else continue;
            pairsChecked++;
            const ok = hi.stats.hp >= lo.stats.hp && hi.stats.attack >= lo.stats.attack && hi.stats.defense >= lo.stats.defense;
            if (!ok) inverted++;
          }
        }
      }
    }
  }
  check("\u6536\u655B\u68C0\u67E5\u8986\u76D6\u8DB3\u591F\u697C\u5C42", floorsChecked > 50, `${floorsChecked}`);
  check("\u540C\u5C42\u540C\u602A\u65E0\u6DF1\u5EA6\u5012\u6302", inverted === 0, `\u5012\u6302${inverted}/${pairsChecked}\u5BF9`);
}
{
  const t = dataManager.mapGen.tension;
  check("\u6743\u91CD elite=2", t.weights.elite === 2);
  check("\u6743\u91CD combat=1", t.weights.combat === 1);
  check("\u6743\u91CD chest=-1", t.weights.chest === -1);
  check("\u6743\u91CD merchant=-2", t.weights.merchant === -2);
  check("\u6743\u91CD witch=-2", t.weights.witch === -2);
  check("\u6743\u91CD blacksmith=-2", t.weights.blacksmith === -2);
  check("\u5F3A\u5236\u6B63\u9762\u9608\u503C=5", t.forcePositiveAt === 5);
  check("\u5F3A\u5236\u8D1F\u9762\u9608\u503C=-4", t.forceNegativeAt === -4);
  const gen = MapGenerator.getInstance();
  let eligibleFloors = 0;
  let elitesA = 0, elitesB = 0;
  for (const f of [2, 3, 4, 6, 7, 8, 9, 11, 13, 16, 17, 19, 21, 23, 26, 28, 31, 34, 37, 42, 47, 53]) {
    for (let it = 0; it < 40; it++) {
      const floor = gen.generate(f);
      if (floor.kind !== "normal") continue;
      const rooms = floor.rooms;
      const eliteRooms = rooms.filter((r) => r.type === "elite");
      if (rooms.length >= 6) {
        eligibleFloors++;
        check(
          `\u7CBE\u82F1\u623F\u4FDD\u5E951~2 f${f}`,
          eliteRooms.length >= 1 && eliteRooms.length <= 2,
          `rooms=${rooms.length} elites=${eliteRooms.length}`
        );
      }
      for (const er of eliteRooms) {
        check("\u7CBE\u82F1\u623F\u5728\u4E3B\u5E72", er.onPathA || er.onPathB, er.id);
        if (er.onPathA) elitesA++;
        else elitesB++;
      }
      const railSeq = (rail) => rooms.filter((r) => r[rail]).sort((a, b) => a.order - b.order);
      for (const [name, seq] of [["A", railSeq("onPathA")], ["B", railSeq("onPathB")]]) {
        const types = seq.map((r) => r.type);
        for (let i = 1; i < types.length; i++) {
          check(
            `\u65E0\u8FDE\u7EED\u7CBE\u82F1 \u8DEF\u5F84${name} f${f}`,
            !(types[i] === "elite" && types[i - 1] === "elite"),
            types.join(",")
          );
        }
        for (let i = 2; i < types.length; i++) {
          check(
            `\u65E0\u8FDE\u7EED3\u6218\u6597 \u8DEF\u5F84${name} f${f}`,
            !(types[i] === "combat" && types[i - 1] === "combat" && types[i - 2] === "combat"),
            types.join(",")
          );
        }
        if (types.length >= 2) {
          check(`\u7CBE\u82F1\u907F\u5F00\u9996\u69FD \u8DEF\u5F84${name} f${f}`, types[0] !== "elite", types.join(","));
        }
      }
      const la = railSeq("onPathA").length, lb = railSeq("onPathB").length;
      check(`\u8DEF\u5F84\u957F\u5EA6\u5DEE\u22642 f${f}`, Math.abs(la - lb) <= 2, `A=${la} B=${lb}`);
    }
  }
  check("\u4FDD\u5E95\u68C0\u67E5\u8986\u76D6\u8DB3\u591F", eligibleFloors > 200, `${eligibleFloors}`);
  check(
    "\u8DEF\u5F84A\u7CBE\u82F1\u5360\u6BD4\u663E\u8457\u9AD8\u4E8EB",
    elitesA > elitesB && elitesA / (elitesA + elitesB) > 0.6,
    `A=${elitesA} B=${elitesB}`
  );
}
{
  const gen = MapGenerator.getInstance();
  const innerOf = (d) => {
    switch (d.direction) {
      case "east":
        return { x: d.x - 1, y: d.y };
      case "west":
        return { x: d.x + 1, y: d.y };
      case "north":
        return { x: d.x, y: d.y + 1 };
      default:
        return { x: d.x, y: d.y - 1 };
    }
  };
  let roomsChecked = 0;
  for (const f of [3, 7, 12, 18, 24, 33, 46]) {
    for (let it = 0; it < 25; it++) {
      const floor = gen.generate(f);
      for (const room of floor.rooms) {
        const monCount = room.entities.filter((e) => e.kind === "monster" || e.kind === "boss").length;
        const c = dataManager.mapGen.content;
        const area = (room.width - 2) * (room.height - 2);
        const cap = area <= c.smallAreaMax ? c.density.small : area <= c.mediumAreaMax ? c.density.medium : c.density.large;
        if (room.type !== "boss") check(`\u5BC6\u5EA6\u4E0A\u9650 ${room.type}`, monCount <= cap, `${monCount}>${cap} ${room.id}`);
        if (room.type !== "combat" && room.type !== "elite") continue;
        roomsChecked++;
        const inRoom = (x, y) => x >= room.x && x < room.x + room.width && y >= room.y && y < room.y + room.height;
        const blocked = new Set(room.entities.filter((e) => e.kind === "monster" || e.kind === "boss" || e.kind === "pillar").map((e) => `${e.x},${e.y}`));
        const inners = room.doors.map(innerOf).filter((p) => inRoom(p.x, p.y) && floor.grid[p.y][p.x] === 0);
        if (inners.length >= 2) {
          let pair = [inners[0], inners[1]];
          let bestD = -1;
          for (let i = 0; i < inners.length; i++) {
            for (let j = i + 1; j < inners.length; j++) {
              const d = Math.abs(inners[i].x - inners[j].x) + Math.abs(inners[i].y - inners[j].y);
              if (d > bestD) {
                bestD = d;
                pair = [inners[i], inners[j]];
              }
            }
          }
          const [from, to] = pair;
          const seen = /* @__PURE__ */ new Set([`${from.x},${from.y}`]);
          const queue = [from];
          let connected = false;
          while (queue.length > 0 && !connected) {
            const cur = queue.shift();
            for (const [dx, dy] of DIRS4) {
              const nx = cur.x + dx, ny = cur.y + dy, k = `${nx},${ny}`;
              if (!inRoom(nx, ny) || connected) continue;
              if (floor.grid[ny][nx] !== 0 || blocked.has(k) || seen.has(k)) continue;
              if (nx === to.x && ny === to.y) {
                connected = true;
                break;
              }
              seen.add(k);
              queue.push({ x: nx, y: ny });
            }
          }
          check(`\u4E0D\u53EF\u7ED5\u8FC7 ${room.type} f${f}`, !connected, `${room.id} \u4E3B\u8DEF\u5F84\u95E8\u5BF9\u8FDE\u901A`);
        }
        if (room.type === "elite") {
          check("\u7CBE\u82F1\u623F\u542B\u7CBE\u82F1\u602A", room.entities.some((e) => e.kind === "monster" && e.isElite), room.id);
        }
      }
    }
  }
  check("\u4E0D\u53EF\u7ED5\u8FC7\u68C0\u67E5\u8986\u76D6\u8DB3\u591F", roomsChecked > 150, `${roomsChecked}`);
}
console.log(failed === 0 ? "P0 \u5168\u90E8\u901A\u8FC7 \u2714" : `P0 \u5931\u8D25 ${failed} \u9879`);
if (failed > 0) process.exit(1);
