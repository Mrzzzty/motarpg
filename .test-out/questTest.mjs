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

// src/core/WorldManager.ts
var WorldManager = class _WorldManager {
  static instance;
  floor = null;
  states = /* @__PURE__ */ new Map();
  /** Boss 铁门：Boss 存活时锁闭的格子（key "x,y"） */
  gateKeys = /* @__PURE__ */ new Set();
  constructor() {
  }
  static getInstance() {
    if (!_WorldManager.instance) _WorldManager.instance = new _WorldManager();
    return _WorldManager.instance;
  }
  loadFloor(floor, states) {
    this.floor = floor;
    this.states.clear();
    if (states) {
      for (const [id, st] of Object.entries(states)) this.states.set(id, st);
    }
    this.recomputeGates();
    Logger.info(`[World] \u8FDB\u5165\u697C\u5C42${floor.floorId}\uFF08${floor.kind}\uFF09 ${floor.rooms.length}\u4E2A\u623F\u95F4`);
  }
  get currentFloor() {
    return this.floor;
  }
  inBounds(x, y) {
    if (!this.floor) return false;
    return x >= 0 && x < this.floor.width && y >= 0 && y < this.floor.height;
  }
  /** 可通行：空地格（0）；墙(1)/装饰(2)阻挡；未开启的 Boss 铁门阻挡 */
  isWalkable(x, y) {
    if (!this.floor || !this.inBounds(x, y)) return false;
    if (this.floor.grid[y][x] !== 0) return false;
    if (this.gateKeys.has(`${x},${y}`)) return false;
    return true;
  }
  /** 地形编码 */
  tileAt(x, y) {
    if (!this.inBounds(x, y)) return null;
    return this.floor.grid[y][x];
  }
  getRoomAt(x, y) {
    if (!this.floor) return null;
    for (const room of this.floor.rooms) {
      if (x >= room.x && x < room.x + room.width && y >= room.y && y < room.y + room.height) {
        return room;
      }
    }
    return null;
  }
  getRoom(roomId) {
    return this.floor?.rooms.find((r) => r.id === roomId) ?? null;
  }
  /**
   * 发现隐藏房间（P1-1）：雕刻地形（外墙圈立墙、内部地板、入口挖开），
   * 把房间从 hiddenRooms 移入 rooms —— 渲染/小地图/交互随即生效。
   */
  revealHiddenRoom(room) {
    const floor = this.floor;
    if (!floor) return;
    const list = floor.hiddenRooms ?? [];
    const idx = list.indexOf(room);
    if (idx < 0) return;
    for (let y = room.y; y < room.y + room.height; y++) {
      for (let x = room.x; x < room.x + room.width; x++) {
        if (!this.inBounds(x, y)) continue;
        const inner = x > room.x && x < room.x + room.width - 1 && y > room.y && y < room.y + room.height - 1;
        this.floor.grid[y][x] = inner ? 0 : 1;
      }
    }
    const ent = room.hiddenEntrance;
    if (ent && this.inBounds(ent.x, ent.y)) this.floor.grid[ent.y][ent.x] = 0;
    list.splice(idx, 1);
    floor.rooms.push(room);
    Logger.info(`[World] \u53D1\u73B0\u9690\u85CF\u623F\u95F4 ${room.id}\uFF08\u6DF1\u5EA6${room.depth}\uFF09`);
  }
  getEntityState(id) {
    return this.states.get(id) ?? {};
  }
  setState(id, patch) {
    this.states.set(id, { ...this.getEntityState(id), ...patch });
  }
  markDefeated(id) {
    this.setState(id, { isAlive: false });
    this.recomputeGates();
  }
  markOpened(id) {
    this.setState(id, { isOpened: true });
  }
  markTalked(id) {
    this.setState(id, { isTalked: true });
  }
  markUsed(id) {
    this.setState(id, { isUsed: true });
  }
  /** 重新计算锁闭的 Boss 铁门（换层 / Boss 被击败时调用） */
  recomputeGates() {
    this.gateKeys.clear();
    if (!this.floor || this.floor.kind !== "boss") return;
    const bossRoom = this.floor.rooms.find((r) => r.type === "boss");
    if (!bossRoom) return;
    const bossAlive = bossRoom.entities.some((e) => e.kind === "boss" && this.isEntityAlive(e));
    if (!bossAlive) return;
    for (const d of bossRoom.doors) {
      if (this.getRoom(d.toRoomId)?.type !== "end") continue;
      this.gateKeys.add(`${d.x},${d.y}`);
    }
  }
  /** 该格是否为未开启的铁门（阻挡通行） */
  isGateLocked(x, y) {
    return this.gateKeys.has(`${x},${y}`);
  }
  /** Boss 铁门列表（渲染层用）：Boss 房通向终点房的门，含开启状态 */
  getGates() {
    if (!this.floor || this.floor.kind !== "boss") return [];
    const bossRoom = this.floor.rooms.find((r) => r.type === "boss");
    if (!bossRoom) return [];
    return bossRoom.doors.filter((d) => this.getRoom(d.toRoomId)?.type === "end").map((d) => ({
      x: d.x,
      y: d.y,
      direction: d.direction,
      opened: !this.gateKeys.has(`${d.x},${d.y}`)
    }));
  }
  isEntityAlive(entity) {
    if (entity.kind === "monster" || entity.kind === "boss") return this.getEntityState(entity.id).isAlive !== false;
    return true;
  }
  isChestOpened(entity) {
    return this.getEntityState(entity.id).isOpened === true;
  }
  /** 位置上的活跃实体（怪物/宝箱/NPC/楼梯；装饰不算） */
  getEntityAt(x, y) {
    if (!this.floor) return null;
    for (const room of this.floor.rooms) {
      if (x < room.x - 1 || x > room.x + room.width || y < room.y - 1 || y > room.y + room.height) continue;
      for (const e of room.entities) {
        if (e.x !== x || e.y !== y) continue;
        if (e.kind === "monster" || e.kind === "boss") {
          if (!this.isEntityAlive(e)) continue;
        } else if (e.kind === "chest") {
          if (this.isChestOpened(e)) continue;
        } else if (e.kind === "potion" || e.kind === "fountain") {
          if (this.getEntityState(e.id).isUsed === true) continue;
        }
        if (e.kind === "pillar" || e.kind === "carpet" || e.kind === "torch" || e.kind === "cauldron" || e.kind === "shelf") continue;
        return e;
      }
    }
    return null;
  }
  /** 是否有可交互实体占据该格（阻挡移动，走上去触发交互） */
  hasBlockingEntity(x, y) {
    return this.getEntityAt(x, y) !== null;
  }
  /** 全楼层活跃实体（渲染/光源用） */
  allEntities() {
    const result = [];
    if (!this.floor) return result;
    for (const room of this.floor.rooms) {
      for (const e of room.entities) {
        if ((e.kind === "monster" || e.kind === "boss") && !this.isEntityAlive(e)) continue;
        if ((e.kind === "potion" || e.kind === "fountain") && this.getEntityState(e.id).isUsed === true) continue;
        result.push({ entity: e, room });
      }
    }
    return result;
  }
  /** 存档导出 */
  exportEntityStates() {
    return Object.fromEntries(this.states);
  }
  /** 重生：恢复本层怪物与宝箱？——不恢复（ defeated 保持），仅位置重置由上层处理 */
  reset() {
    this.floor = null;
    this.states.clear();
  }
};

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

// src/utils/MathUtils.ts
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
  restore(state2) {
    this.state = state2;
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
    const calc = StatCalculator.getInstance();
    let need = calc.expToNext(this.state.level);
    while (this.state.exp >= need && this.state.level < 999) {
      this.state.exp -= need;
      const oldLevel = this.state.level;
      this.state.level += 1;
      const base = calc.playerBaseAt(this.state.level);
      const gainedHp = base.maxHp - this.state.baseMaxHp;
      const gainedAtk = base.attack - this.state.baseAttack;
      const gainedDef = base.defense - this.state.baseDefense;
      this.state.baseMaxHp = base.maxHp;
      this.state.baseAttack = base.attack;
      this.state.baseDefense = base.defense;
      this.state.hp += gainedHp;
      eventBus.emit("levelUp", { oldLevel, newLevel: this.state.level, gainedHp, gainedAttack: gainedAtk, gainedDefense: gainedDef });
      need = calc.expToNext(this.state.level);
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

// src/systems/QuestManager.ts
var QuestManager = class _QuestManager {
  static instance;
  quests = /* @__PURE__ */ new Map();
  /** 楼层型任务记录的最高楼层 */
  maxFloorReached = 1;
  constructor() {
    for (const def of dataManager.quests.quests) {
      this.quests.set(def.id, {
        id: def.id,
        progress: 0,
        isCompleted: false,
        isAccepted: def.prerequisites.length === 0,
        objectiveIndex: 0
      });
    }
    this.bindEvents();
  }
  static getInstance() {
    if (!_QuestManager.instance) _QuestManager.instance = new _QuestManager();
    return _QuestManager.instance;
  }
  bindEvents() {
    eventBus.on("npcTalked", (p) => this.progressEvent("talk_npc", { npcId: p.npcId }));
    eventBus.on("monsterDefeated", (p) => this.progressEvent("defeat_monster", { monsterId: p.monsterId, name: p.name }));
    eventBus.on("chestOpened", () => this.progressEvent("open_chest", {}));
    eventBus.on("equipmentEquipped", (p) => {
      if (p.equipmentId) this.progressEvent("equip_item", {});
    });
    eventBus.on("potionUsed", () => this.progressEvent("use_potion", {}));
    eventBus.on("floorChanged", (p) => this.onFloorChanged(p.fromFloor, p.toFloor));
  }
  // ============ 目标推进 ============
  /** 当前目标（越界时取最后一个） */
  currentObjective(def, st) {
    const idx = Math.min(st.objectiveIndex ?? 0, def.objectives.length - 1);
    return def.objectives[idx];
  }
  /** 目标是否匹配本次事件 */
  matches(obj, ctx) {
    switch (obj.type) {
      case "talk_npc":
        return !obj.targetId || obj.targetId === ctx.npcId;
      case "defeat_monster": {
        if (!obj.targetId) return true;
        if (ctx.monsterId) return obj.targetId === ctx.monsterId;
        const mon = dataManager.getMonster(obj.targetId);
        return !!mon && !!ctx.name && (ctx.name === mon.name || ctx.name.includes(mon.name));
      }
      default:
        return true;
    }
  }
  /** 推进所有「已接取未完成且当前目标类型/目标匹配」的任务 */
  progressEvent(type, ctx) {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id);
      if (!st.isAccepted || st.isCompleted) continue;
      const obj = this.currentObjective(def, st);
      if (obj.type !== type) continue;
      if (!this.matches(obj, ctx)) continue;
      this.advance(def, st, obj);
    }
  }
  /** 楼层变化：处理 reach_floor / descend_stair 目标 */
  onFloorChanged(fromFloor, toFloor) {
    this.maxFloorReached = Math.max(this.maxFloorReached, toFloor);
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id);
      if (!st.isAccepted || st.isCompleted) continue;
      const obj = this.currentObjective(def, st);
      const reached = obj.type === "reach_floor" && obj.value !== void 0 && this.maxFloorReached >= obj.value || obj.type === "descend_stair" && toFloor > fromFloor;
      if (reached) this.advance(def, st, obj);
    }
  }
  /** 目标 +1；达标则切换到下一个目标或完成任务 */
  advance(def, st, obj) {
    st.progress += 1;
    if (st.progress < obj.quantity) {
      eventBus.emit("questUpdated", { questId: def.id, progress: st.progress, total: obj.quantity });
      return;
    }
    const next = (st.objectiveIndex ?? 0) + 1;
    if (next < def.objectives.length) {
      st.objectiveIndex = next;
      st.progress = 0;
      const no = this.currentObjective(def, st);
      eventBus.emit("questUpdated", { questId: def.id, progress: 0, total: no.quantity });
      return;
    }
    st.progress = obj.quantity;
    this.complete(def, st);
  }
  complete(def, st) {
    if (st.isCompleted) return;
    st.isCompleted = true;
    this.grantRewards(def.rewards);
    eventBus.emit("questCompleted", { questId: def.id, name: def.name });
    Logger.debug(`[Quest] \u5B8C\u6210 ${def.name}`);
    this.autoAcceptNext();
  }
  /** 前置全部完成 → 自动接取（并广播，供 UI 提示 / 刷新） */
  autoAcceptNext() {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id);
      if (st.isAccepted) continue;
      if (def.prerequisites.every((pid) => this.quests.get(pid)?.isCompleted)) {
        st.isAccepted = true;
        st.objectiveIndex = 0;
        st.progress = 0;
        eventBus.emit("questAccepted", { questId: def.id });
      }
    }
  }
  grantRewards(rewards) {
    const player = Player.getInstance();
    for (const r of rewards) {
      switch (r.type) {
        case "gold":
          player.gainGold(r.value ?? 0);
          break;
        case "exp":
          player.gainExp(r.value ?? 0);
          break;
        case "keys":
          player.state.keys += r.value ?? 1;
          break;
        case "potion":
          if (r.tier) player.addPotion(r.tier, r.value ?? 1);
          break;
        case "equipment": {
          const equip = EquipmentGenerator.getInstance().generate("quest", { forcedQuality: r.quality ?? "common" });
          player.addEquipment(equip);
          break;
        }
        default:
          break;
      }
    }
  }
  // ============ 查询接口 ============
  /** 当前追踪的任务（首个已接取未完成） */
  get trackedQuest() {
    for (const def of dataManager.quests.quests) {
      const st = this.quests.get(def.id);
      if (st.isAccepted && !st.isCompleted) return { def: st, quest: def };
    }
    return null;
  }
  /** 全部进行中的任务（已接取未完成，按数据顺序） */
  activeQuests() {
    return dataManager.quests.quests.filter((def) => {
      const st = this.quests.get(def.id);
      return st.isAccepted && !st.isCompleted;
    }).map((def) => ({ state: this.quests.get(def.id), def }));
  }
  all() {
    return dataManager.quests.quests.map((def) => ({ state: this.quests.get(def.id), def }));
  }
  /** 目标的一句话文案（不含进度） */
  objectiveLabel(obj) {
    switch (obj.type) {
      case "talk_npc":
        return `\u4E0E\u300C${dataManager.getNpc(obj.targetId ?? "")?.name ?? "NPC"}\u300D\u5BF9\u8BDD`;
      case "defeat_monster":
        return `\u51FB\u8D25\u300C${obj.targetId ? dataManager.getMonster(obj.targetId)?.name ?? "\u76EE\u6807" : "\u654C\u4EBA"}\u300D`;
      case "open_chest":
        return "\u5F00\u542F\u4E00\u4E2A\u5B9D\u7BB1";
      case "equip_item":
        return "\u7A7F\u6234\u4E00\u4EF6\u88C5\u5907";
      case "use_potion":
        return "\u4F7F\u7528\u4E00\u6B21\u836F\u6C34";
      case "reach_floor":
        return `\u5230\u8FBE\u7B2C ${obj.value ?? "?"} \u5C42`;
      case "descend_stair":
        return "\u5411\u4E0B\u4E00\u5C42\u524D\u8FDB";
    }
  }
  /** 引导信息：目标位置 + 下一步提示 */
  guideFor(def, st) {
    const world = WorldManager.getInstance();
    const floor = world.currentFloor;
    const curFloor = floor?.floorId ?? Player.getInstance().state.currentFloor;
    const obj = this.currentObjective(def, st);
    const objective = `${this.objectiveLabel(obj)}\uFF08${Math.min(st.progress, obj.quantity)}/${obj.quantity}\uFF09`;
    const roomName = (roomId) => {
      const r = world.getRoom(roomId);
      return dataManager.texts.roomNames?.[r?.type ?? ""] ?? r?.type ?? "\u672A\u77E5\u533A\u57DF";
    };
    const findIn = (pred) => {
      if (!floor) return null;
      for (const room of floor.rooms) {
        for (const e of room.entities) {
          if (!pred(e)) continue;
          if ((e.kind === "monster" || e.kind === "boss") && !world.isEntityAlive(e)) continue;
          if (e.kind === "chest" && world.isChestOpened(e)) continue;
          return { roomId: room.id, x: e.x, y: e.y };
        }
      }
      return null;
    };
    const asTarget = (hit) => ({ roomId: hit.roomId, roomName: roomName(hit.roomId), x: hit.x, y: hit.y });
    switch (obj.type) {
      case "talk_npc": {
        const hit = findIn((e) => e.kind === "npc" && (!obj.targetId || e.npcId === obj.targetId));
        if (hit) return { objective, hint: `\u524D\u5F80\u3010${roomName(hit.roomId)}\u3011\u4E0E\u5176\u5BF9\u8BDD`, target: asTarget(hit) };
        return { objective, hint: "\u672C\u5C42\u6CA1\u6709\u76EE\u6807 NPC\uFF0C\u7EE7\u7EED\u6DF1\u5165\u5854\u4E2D\u5BFB\u627E" };
      }
      case "defeat_monster": {
        const monName = obj.targetId ? dataManager.getMonster(obj.targetId)?.name ?? "\u76EE\u6807" : "\u654C\u4EBA";
        const hit = findIn((e) => (e.kind === "monster" || e.kind === "boss") && (!obj.targetId || e.monsterId === obj.targetId));
        if (hit) return { objective, hint: `\u524D\u5F80\u3010${roomName(hit.roomId)}\u3011\u51FB\u8D25\u300C${monName}\u300D`, target: asTarget(hit) };
        return { objective, hint: `\u672C\u5C42\u6682\u65E0\u300C${monName}\u300D\uFF0C\u7EE7\u7EED\u6DF1\u5165\u5854\u4E2D\u5BFB\u627E` };
      }
      case "open_chest": {
        const hit = findIn((e) => e.kind === "chest");
        if (hit) return { objective, hint: `\u524D\u5F80\u3010${roomName(hit.roomId)}\u3011\u5F00\u542F\u5B9D\u7BB1`, target: asTarget(hit) };
        return { objective, hint: "\u672C\u5C42\u6682\u65E0\u53EF\u5F00\u542F\u5B9D\u7BB1\uFF0C\u524D\u5F80\u4E0B\u4E00\u5C42\u7EE7\u7EED\u5BFB\u627E" };
      }
      case "equip_item": {
        const has = Player.getInstance().unequippedBag.length > 0;
        return { objective, hint: has ? "\u6309 B \u6253\u5F00\u80CC\u5305\uFF0C\u53CC\u51FB\u88C5\u5907\u5373\u53EF\u7A7F\u6234" : "\u5148\u5F00\u7BB1 / \u51FB\u8D25\u602A\u7269\u83B7\u5F97\u88C5\u5907\uFF0C\u518D\u6309 B \u7A7F\u6234" };
      }
      case "use_potion": {
        const has = Object.values(Player.getInstance().state.potions).some((n) => n > 0);
        return { objective, hint: has ? "\u6309 B \u6253\u5F00\u80CC\u5305 \u2192 \u836F\u6C34\u9875\u70B9\u51FB\u300C\u4F7F\u7528\u300D\uFF0C\u6216\u62D6\u5230\u5E95\u90E8\u5FEB\u6377\u680F\u540E\u6309\u6570\u5B57\u952E" : "\u5148\u5F00\u7BB1 / \u5411\u5546\u4EBA\u8D2D\u4E70\u836F\u6C34\uFF0C\u518D\u6309 B \u4F7F\u7528" };
      }
      case "reach_floor": {
        const v = obj.value ?? curFloor + 1;
        if (curFloor >= v) return { objective, hint: `\u5DF2\u5230\u8FBE\u7B2C ${v} \u5C42` };
        const hit = findIn((e) => e.kind === "stair");
        if (hit) return { objective, hint: `\u8D70\u3010${roomName(hit.roomId)}\u3011\u7684\u697C\u68AF\u524D\u5F80\u7B2C ${v} \u5C42`, target: asTarget(hit) };
        return { objective, hint: `\u5BFB\u627E\u697C\u68AF\u524D\u5F80\u7B2C ${v} \u5C42` };
      }
      case "descend_stair": {
        const hit = findIn((e) => e.kind === "stair");
        if (hit) return { objective, hint: `\u8D70\u3010${roomName(hit.roomId)}\u3011\u7684\u697C\u68AF\u5411\u4E0B\u524D\u8FDB`, target: asTarget(hit) };
        return { objective, hint: "\u5BFB\u627E\u5411\u4E0B\u7684\u697C\u68AF\u7EE7\u7EED\u524D\u8FDB" };
      }
    }
  }
  // ============ 存档 ============
  exportStates() {
    return [...this.quests.values()];
  }
  restoreStates(states, maxFloor) {
    for (const st of states) {
      this.quests.set(st.id, { objectiveIndex: 0, ...st });
    }
    this.maxFloorReached = maxFloor;
    this.autoAcceptNext();
  }
};

// src/test/questTest.ts
var passed = 0;
function ok(cond, msg) {
  if (cond) {
    passed++;
  } else {
    console.error("\u2717 " + msg);
    process.exit(1);
  }
}
dataManager.loadAll();
var qm = QuestManager.getInstance();
var state = (id) => qm.all().find((x) => x.def.id === id).state;
ok(state("quest_talk_guide").isAccepted, "\u521D\u59CB\u63A5\u53D6\u300C\u521D\u6765\u4E4D\u5230\u300D");
ok(qm.activeQuests().length === 1, `\u521D\u59CB\u4EC5 1 \u6761\u8FDB\u884C\u4E2D\u4EFB\u52A1\uFF08\u5B9E\u9645 ${qm.activeQuests().length}\uFF09`);
eventBus.emit("npcTalked", { npcId: "npc_guide", name: "\u5F15\u5BFC\u8005\xB7\u827E\u767B" });
ok(state("quest_talk_guide").isCompleted, "\u5BF9\u8BDD\u540E\u300C\u521D\u6765\u4E4D\u5230\u300D\u5B8C\u6210");
ok(
  state("quest_first_blood").isAccepted && state("quest_first_chest").isAccepted && state("quest_use_potion").isAccepted,
  "\u5E76\u884C\u4EFB\u52A1\uFF08\u521D\u8BD5\u950B\u8292/\u5F00\u7BB1\u6709\u559C/\u836F\u5230\u75C5\u9664\uFF09\u81EA\u52A8\u63A5\u53D6"
);
ok(qm.activeQuests().length === 3, `\u8FDB\u884C\u4E2D 3 \u6761\uFF08\u5B9E\u9645 ${qm.activeQuests().length}\uFF09`);
eventBus.emit("monsterDefeated", { entityId: "e1", name: "\u8759\u8760", monsterId: "bat", isElite: false, isBoss: false });
ok(state("quest_first_blood").progress === 0, "\u51FB\u6740\u975E\u76EE\u6807\u602A\uFF08\u8759\u8760\uFF09\u4E0D\u63A8\u8FDB\u300C\u521D\u8BD5\u950B\u8292\u300D");
eventBus.emit("monsterDefeated", { entityId: "e2", name: "\u53F2\u83B1\u59C6", monsterId: "slime", isElite: false, isBoss: false });
ok(state("quest_first_blood").isCompleted, "\u51FB\u6740\u53F2\u83B1\u59C6\u5B8C\u6210\u300C\u521D\u8BD5\u950B\u8292\u300D");
ok(state("quest_descend").isAccepted, "\u300C\u66F4\u4E0B\u4E00\u5C42\u300D\u81EA\u52A8\u63A5\u53D6");
eventBus.emit("chestOpened", { entityId: "c1", roomType: "chest" });
ok(state("quest_first_chest").isCompleted, "\u5F00\u7BB1\u5B8C\u6210\u300C\u5F00\u7BB1\u6709\u559C\u300D");
ok(state("quest_first_equip").isAccepted, "\u300C\u62AB\u6302\u4E0A\u9635\u300D\u81EA\u52A8\u63A5\u53D6");
eventBus.emit("equipmentEquipped", { slot: "weapon", equipmentId: "", oldId: "x" });
ok(state("quest_first_equip").progress === 0, "\u5378\u4E0B\u88C5\u5907\u4E0D\u63A8\u8FDB\u7A7F\u6234\u4EFB\u52A1");
eventBus.emit("equipmentEquipped", { slot: "weapon", equipmentId: "eq1", oldId: null });
ok(state("quest_first_equip").isCompleted, "\u7A7F\u6234\u5B8C\u6210\u300C\u62AB\u6302\u4E0A\u9635\u300D");
eventBus.emit("potionUsed", { tier: "crude", healed: 10 });
ok(state("quest_use_potion").isCompleted, "\u4F7F\u7528\u836F\u6C34\u5B8C\u6210\u300C\u836F\u5230\u75C5\u9664\u300D");
eventBus.emit("floorChanged", { fromFloor: 1, toFloor: 2 });
ok(state("quest_descend").isCompleted, "\u5230\u8FBE\u7B2C 2 \u5C42\u5B8C\u6210\u300C\u66F4\u4E0B\u4E00\u5C42\u300D");
ok(state("quest_deeper").isAccepted, "\u300C\u6DF1\u5165\u5854\u4E2D\u300D\u81EA\u52A8\u63A5\u53D6");
eventBus.emit("monsterDefeated", { entityId: "e3", name: "\u8759\u8760", monsterId: "bat", isElite: false, isBoss: false });
ok(!state("quest_deeper").isCompleted && state("quest_deeper").progress === 1, "\u300C\u6DF1\u5165\u5854\u4E2D\u300D\u76EE\u68071 \u8FDB\u5EA6 1/2");
eventBus.emit("monsterDefeated", { entityId: "e4", name: "\u8759\u8760", monsterId: "bat", isElite: false, isBoss: false });
ok((state("quest_deeper").objectiveIndex ?? 0) === 1, "\u76EE\u68071 \u8FBE\u6807\u540E\u63A8\u8FDB\u5230\u76EE\u68072");
eventBus.emit("floorChanged", { fromFloor: 2, toFloor: 3 });
ok(state("quest_deeper").isCompleted, "\u5230\u8FBE\u7B2C 3 \u5C42\u5B8C\u6210\u300C\u6DF1\u5165\u5854\u4E2D\u300D");
var guide = qm.guideFor(dataManager.quests.quests[0], state("quest_talk_guide"));
ok(typeof guide.objective === "string" && guide.objective.length > 0, "guideFor \u8FD4\u56DE\u76EE\u6807\u6587\u6848");
ok(typeof guide.hint === "string" && guide.hint.length > 0, "guideFor \u8FD4\u56DE\u4E0B\u4E00\u6B65\u63D0\u793A");
console.log(`\u2713 questTest \u901A\u8FC7\uFF08${passed} \u9879\u65AD\u8A00\uFF09`);
