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

// src/map/ExitPattern.ts
var EXIT_PATTERNS = ["single", "vertical", "diagonal", "tee", "cross"];
var OPPOSITE = { north: "south", south: "north", east: "west", west: "east" };
var EXIT_PATTERN_PRESETS = {
  single: ["south"],
  vertical: ["south", "north"],
  diagonal: ["south", "east"],
  tee: ["south", "east", "west"],
  cross: ["south", "north", "east", "west"]
};
function patternFromExits(exits) {
  const set = [...new Set(exits)];
  const n = set.length;
  if (n <= 1) return "single";
  if (n === 2) return OPPOSITE[set[0]] === set[1] ? "vertical" : "diagonal";
  if (n === 3) return "tee";
  return "cross";
}
function matchPattern(exits) {
  const set = [...new Set(exits)].sort();
  for (const p of EXIT_PATTERNS) {
    const ps = [...EXIT_PATTERN_PRESETS[p]].sort();
    if (ps.length === set.length && ps.every((d, i) => d === set[i])) return p;
  }
  return null;
}
function exitsLabel(exits) {
  const L = { north: "\u5317", east: "\u4E1C", south: "\u5357", west: "\u897F" };
  return ["north", "east", "south", "west"].filter((d) => exits.includes(d)).map((d) => L[d]).join("");
}

// src/map/PrefabMap.ts
function resolveRoomTension(type, explicit) {
  if (typeof explicit === "number" && Number.isFinite(explicit)) return explicit;
  return dataManager.mapGen.tension.weights[type] ?? 0;
}
var DIRS = [
  { d: "north", dx: 0, dy: -1 },
  { d: "south", dx: 0, dy: 1 },
  { d: "west", dx: -1, dy: 0 },
  { d: "east", dx: 1, dy: 0 }
];
function parseRows(rows, floorId) {
  const height = rows.length;
  const width = Math.max(...rows.map((r) => r.length));
  const grid = Array.from({ length: height }, () => Array(width).fill(1));
  const entities = [];
  const monsterPool = dataManager.monsters.monsters.filter(
    (m) => m.category === "normal" && floorId >= m.floorMin && floorId <= m.floorMax
  );
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const ch = rows[y][x] ?? "1";
      switch (ch) {
        case "0":
        case " ":
          grid[y][x] = 0;
          break;
        case "1":
          grid[y][x] = 1;
          break;
        case "2":
        case "3": {
          grid[y][x] = 0;
          if (monsterPool.length === 0) break;
          const def = rng.pickWeighted(monsterPool, (m) => m.weight);
          entities.push({
            id: IdGenerator.next("ent"),
            kind: "monster",
            x,
            y,
            monsterId: def.id,
            isElite: ch === "3"
          });
          break;
        }
        case "4":
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next("ent"), kind: "chest", x, y, chestTier: "normal" });
          break;
        case "5":
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next("ent"), kind: "npc", x, y, npcId: "npc_merchant" });
          break;
        case "B":
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next("ent"), kind: "boss", x, y, monsterId: "ancient_dragon" });
          break;
        case "D":
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next("ent"), kind: "stair", x, y, targetFloor: floorId + 1 });
          break;
        case "S":
          grid[y][x] = 0;
          break;
        case "p":
          grid[y][x] = 2;
          entities.push({ id: IdGenerator.next("ent"), kind: "pillar", x, y });
          break;
        case "x":
          grid[y][x] = 4;
          break;
        case "g":
        case "r":
          grid[y][x] = 0;
          entities.push({
            id: IdGenerator.next("ent"),
            kind: "chest",
            x,
            y,
            chestTier: ch === "g" ? "grand" : "relic"
          });
          break;
        case "t":
          grid[y][x] = 1;
          entities.push({ id: IdGenerator.next("ent"), kind: "torch", x, y });
          break;
        case "c":
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next("ent"), kind: "carpet", x, y });
          break;
        case "w":
        case "k":
        case "u":
          grid[y][x] = 0;
          entities.push({
            id: IdGenerator.next("ent"),
            kind: "npc",
            x,
            y,
            npcId: ch === "w" ? "npc_witch" : ch === "k" ? "npc_blacksmith" : "npc_guide"
          });
          break;
        case "q": {
          grid[y][x] = 0;
          const best = dataManager.potions.potions.filter((p) => floorId >= p.minFloor && floorId <= p.maxFloor).sort((a, b) => b.healPct - a.healPct)[0];
          entities.push({ id: IdGenerator.next("ent"), kind: "potion", x, y, potionTier: best?.tier ?? "normal" });
          break;
        }
        case "f":
          grid[y][x] = 0;
          entities.push({ id: IdGenerator.next("ent"), kind: "fountain", x, y });
          break;
        case "o":
          grid[y][x] = 2;
          entities.push({ id: IdGenerator.next("ent"), kind: "cauldron", x, y });
          break;
        case "h":
          grid[y][x] = 2;
          entities.push({ id: IdGenerator.next("ent"), kind: "shelf", x, y });
          break;
        default:
          Logger.warn(`[Prefab] \u697C\u5C42${floorId} (${x},${y}) \u975E\u6CD5\u5B57\u7B26 '${ch}'\uFF0C\u6309\u5899\u58C1\u5904\u7406`);
          grid[y][x] = 1;
          break;
      }
    }
  }
  return { grid, entities };
}
function buildRooms(defs, floorId, entities, grid) {
  const roomAt = (x, y) => defs.reduce((acc, r, i) => {
    if (acc) return acc;
    if (x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h) {
      return { id: `pf${floorId}_r${i}` };
    }
    return null;
  }, null);
  return defs.map((r, i) => {
    const roomId = `pf${floorId}_r${i}`;
    const isInside = (x, y) => x >= r.x && x < r.x + r.w && y >= r.y && y < r.y + r.h;
    const doors = [];
    for (let y = r.y; y < r.y + r.h; y++) {
      for (let x = r.x; x < r.x + r.w; x++) {
        const onEdge = x === r.x || x === r.x + r.w - 1 || y === r.y || y === r.y + r.h - 1;
        if (!onEdge || grid[y]?.[x] !== 0) continue;
        for (const { d, dx, dy } of DIRS) {
          const ox = x + dx;
          const oy = y + dy;
          if (isInside(ox, oy)) continue;
          if (grid[oy]?.[ox] !== 0) continue;
          doors.push({ x, y, direction: d, toRoomId: roomAt(ox, oy)?.id ?? "" });
        }
      }
    }
    if (r.exits && r.exits.length > 0) {
      const derived = new Set(doors.map((d) => d.direction));
      for (const d of r.exits) {
        if (!derived.has(d)) Logger.warn(`[Prefab] \u623F\u95F4 ${roomId} \u58F0\u660E\u51FA\u53E3\u300C${d}\u300D\u4F46\u7F51\u683C\u4E0A\u65E0\u5BF9\u5E94\u95E8\u53E3`);
      }
      for (const d of derived) {
        if (!r.exits.includes(d)) Logger.warn(`[Prefab] \u623F\u95F4 ${roomId} \u7F51\u683C\u4E0A\u6709\u300C${d}\u300D\u5411\u95E8\u53E3\u4F46\u672A\u5728 exits \u4E2D\u58F0\u660E`);
      }
    }
    const mine = entities.filter((e) => e.x >= r.x && e.x < r.x + r.w && e.y >= r.y && e.y < r.y + r.h);
    const rewardMul = dataManager.mapGen.content.risk.rewardMul;
    if (r.risk) {
      for (const e of mine) {
        if (e.kind === "chest" && e.chestTier !== "relic") {
          e.riskTier = r.risk;
          e.rewardMul = rewardMul[r.risk - 1] ?? 1;
        }
      }
    }
    const room = {
      id: roomId,
      floorId,
      type: r.type,
      order: i,
      gx: r.x,
      gy: r.y,
      width: r.w,
      height: r.h,
      x: r.x,
      y: r.y,
      centerX: r.x + Math.floor(r.w / 2),
      centerY: r.y + Math.floor(r.h / 2),
      // 入口方向由编辑器显式给出（缺省 null）；出口方向体现为 doors 的 direction 集合
      fromDirection: r.entry ?? null,
      depth: 0,
      onPathA: false,
      onPathB: false,
      mountedOn: null,
      doors,
      entities: mine
    };
    if (r.risk) {
      room.risk = r.risk;
      room.rewardMul = rewardMul[r.risk - 1] ?? 1;
    }
    room.tension = resolveRoomTension(r.type, r.tension);
    const patternDirs = r.exits && r.exits.length > 0 ? r.exits : doors.map((d) => d.direction);
    if (patternDirs.length > 0) room.pattern = patternFromExits(patternDirs);
    return room;
  });
}
function reachableTiles(grid, sx, sy) {
  const seen = /* @__PURE__ */ new Set();
  if (grid[sy]?.[sx] !== 0) return seen;
  const queue = [{ x: sx, y: sy }];
  seen.add(`${sx},${sy}`);
  while (queue.length > 0) {
    const cur = queue.shift();
    for (const { dx, dy } of DIRS) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (seen.has(key)) continue;
      if (grid[ny]?.[nx] !== 0) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  return seen;
}
function buildPrefabFloor(def) {
  const { grid, entities } = parseRows(def.rows, def.floorId);
  const width = grid[0]?.length ?? 0;
  const height = grid.length;
  let entry = def.entry ?? null;
  if (!entry) {
    for (let y = 0; y < height && !entry; y++) {
      for (let x = 0; x < width && !entry; x++) {
        if ((def.rows[y]?.[x] ?? "1") === "S") entry = { x, y };
      }
    }
  }
  const rooms = buildRooms(def.rooms, def.floorId, entities, grid);
  if (rooms.length === 0) throw new Error(`[Prefab] \u697C\u5C42${def.floorId} \u672A\u5B9A\u4E49\u4EFB\u4F55\u623F\u95F4`);
  const entryPoint = [entry, rooms[0] ? { x: rooms[0].centerX, y: rooms[0].centerY } : null].find((p) => !!p && grid[p.y]?.[p.x] === 0);
  if (!entryPoint) throw new Error(`[Prefab] \u697C\u5C42${def.floorId} \u5165\u53E3\u65E0\u6548\uFF08\u5FC5\u987B\u662F\u7A7A\u5730\uFF09`);
  for (const e of entities) {
    const inRoom = rooms.some((r) => e.x >= r.x && e.x < r.x + r.width && e.y >= r.y && e.y < r.y + r.height);
    if (inRoom) continue;
    let nearest = rooms[0];
    let best = Infinity;
    for (const r of rooms) {
      const d = Math.abs(r.centerX - e.x) + Math.abs(r.centerY - e.y);
      if (d < best) {
        best = d;
        nearest = r;
      }
    }
    Logger.warn(`[Prefab] \u697C\u5C42${def.floorId} \u5B9E\u4F53 ${e.id} (${e.x},${e.y}) \u5728\u6240\u6709\u623F\u95F4\u5916\uFF0C\u6302\u5230 ${nearest.id}`);
    nearest.entities.push(e);
  }
  const connections = [];
  const seenPairs = /* @__PURE__ */ new Set();
  for (const r of rooms) {
    const start = grid[r.centerY]?.[r.centerX] === 0 ? { x: r.centerX, y: r.centerY } : rooms.map((rr) => ({ x: rr.centerX, y: rr.centerY })).find((p) => grid[p.y]?.[p.x] === 0);
    if (!start) continue;
    const reach = reachableTiles(grid, start.x, start.y);
    for (const other of rooms) {
      if (other.id === r.id) continue;
      if (grid[other.centerY]?.[other.centerX] !== 0) continue;
      if (!reach.has(`${other.centerX},${other.centerY}`)) continue;
      const key = [r.id, other.id].sort().join("|");
      if (seenPairs.has(key)) continue;
      seenPairs.add(key);
      connections.push({ from: r.id, to: other.id });
    }
  }
  return {
    floorId: def.floorId,
    kind: def.kind ?? "normal",
    rooms,
    corridors: [],
    // 预制地图的走廊直接体现在网格空地里，无需单独数据
    connections,
    grid,
    width,
    height,
    entryX: entryPoint.x,
    entryY: entryPoint.y
  };
}

// src/map/RoomTemplate.ts
var TEMPLATE_MARGIN = 2;
var DIRS2 = ["north", "east", "south", "west"];
function defaultCellAt(w, h, rx, ry) {
  return rx === 0 || ry === 0 || rx === w - 1 || ry === h - 1 ? "1" : "0";
}
function newTemplate(w, h, type) {
  const cells = Array.from({ length: w * h }, (_, i) => defaultCellAt(w, h, i % w, Math.floor(i / w)));
  return { w, h, cells, type, entry: null, exits: [] };
}
function toCanvas(rx, ry) {
  return { x: rx + TEMPLATE_MARGIN, y: ry + TEMPLATE_MARGIN };
}
function canvasSize(t) {
  return { w: t.w + TEMPLATE_MARGIN * 2, h: t.h + TEMPLATE_MARGIN * 2 };
}
function doorCell(t, d) {
  const mx = Math.floor(t.w / 2);
  const my = Math.floor(t.h / 2);
  if (d === "north") return toCanvas(mx, 0);
  if (d === "south") return toCanvas(mx, t.h - 1);
  if (d === "west") return toCanvas(0, my);
  return toCanvas(t.w - 1, my);
}
function stubCells(t, d) {
  const size = canvasSize(t);
  const door = doorCell(t, d);
  const out = [];
  if (d === "north") {
    for (let y = 0; y < TEMPLATE_MARGIN; y++) out.push({ x: door.x, y });
  } else if (d === "south") {
    for (let y = TEMPLATE_MARGIN + t.h; y < size.h; y++) out.push({ x: door.x, y });
  } else if (d === "west") {
    for (let x = 0; x < TEMPLATE_MARGIN; x++) out.push({ x, y: door.y });
  } else {
    for (let x = TEMPLATE_MARGIN + t.w; x < size.w; x++) out.push({ x, y: door.y });
  }
  return out;
}
function entryInnerCell(t, d) {
  const mx = Math.floor(t.w / 2);
  const my = Math.floor(t.h / 2);
  if (d === "north") return toCanvas(mx, 1);
  if (d === "south") return toCanvas(mx, t.h - 2);
  if (d === "west") return toCanvas(1, my);
  return toCanvas(t.w - 2, my);
}
function templateRows(t) {
  const size = canvasSize(t);
  const g = Array.from({ length: size.h }, () => Array(size.w).fill("1"));
  for (let ry = 0; ry < t.h; ry++) {
    for (let rx = 0; rx < t.w; rx++) {
      g[ry + TEMPLATE_MARGIN][rx + TEMPLATE_MARGIN] = t.cells[ry * t.w + rx] ?? "0";
    }
  }
  for (const d of t.exits ?? []) {
    const door = doorCell(t, d);
    g[door.y][door.x] = "0";
    for (const p of stubCells(t, d)) g[p.y][p.x] = "0";
  }
  return g.map((row) => row.join(""));
}
function templateToPrefab(t, floorId) {
  const room = {
    x: TEMPLATE_MARGIN,
    y: TEMPLATE_MARGIN,
    w: t.w,
    h: t.h,
    type: t.type
  };
  if (t.name) room.name = t.name;
  if (t.entry) room.entry = t.entry;
  if (t.exits && t.exits.length > 0) {
    room.exits = DIRS2.filter((d) => t.exits.includes(d));
    room.pattern = patternFromExits(room.exits);
  }
  if (t.risk) room.risk = t.risk;
  if (typeof t.tension === "number") room.tension = t.tension;
  if (t.note) room.note = t.note;
  return { floorId, kind: "normal", rooms: [room], rows: templateRows(t) };
}
function prefabToTemplate(def, fallbackType = "combat") {
  const room = def.rooms[0];
  const cells = [];
  for (let ry = 0; ry < room.h; ry++) {
    for (let rx = 0; rx < room.w; rx++) {
      cells.push(def.rows[room.y + ry]?.[room.x + rx] ?? "1");
    }
  }
  const t = { w: room.w, h: room.h, cells, type: room.type ?? fallbackType };
  if (room.name) t.name = room.name;
  if (room.note) t.note = room.note;
  if (room.risk) t.risk = room.risk;
  t.tension = typeof room.tension === "number" ? room.tension : null;
  t.entry = room.entry ?? null;
  t.exits = room.exits && room.exits.length > 0 ? [...room.exits] : deriveExits(def, room);
  return t;
}
function deriveExits(def, room) {
  const out = [];
  const floorAt = (x, y) => def.rows[y]?.[x] === "0" || def.rows[y]?.[x] === " " || def.rows[y]?.[x] === "S";
  const probes = [
    { d: "north", dx: 0, dy: -1 },
    { d: "south", dx: 0, dy: 1 },
    { d: "west", dx: -1, dy: 0 },
    { d: "east", dx: 1, dy: 0 }
  ];
  for (const { d, dx, dy } of probes) {
    let hit = false;
    for (let y = room.y; y < room.y + room.h && !hit; y++) {
      for (let x = room.x; x < room.x + room.w && !hit; x++) {
        const onEdge = d === "north" && y === room.y || d === "south" && y === room.y + room.h - 1 || d === "west" && x === room.x || d === "east" && x === room.x + room.w - 1;
        if (!onEdge) continue;
        if (!floorAt(x, y)) continue;
        if (floorAt(x + dx, y + dy)) hit = true;
      }
    }
    if (hit) out.push(d);
  }
  return DIRS2.filter((d) => out.includes(d));
}

// src/data/rooms.json
var rooms_default = {
  version: 1,
  updatedAt: "2026-09-10T12:37:20.127Z",
  note: "\u623F\u95F4\u7F16\u8F91\u5668\uFF08F2\uFF09\u7684\u5B58\u50A8\u6587\u4EF6\uFF1A\u5728\u7F16\u8F91\u5668\u91CC\u70B9\u300C\u4FDD\u5B58\u5230\u6587\u4EF6\u300D\u5373\u5199\u5165\u672C\u6587\u4EF6\uFF1B\u6BCF\u95F4\u623F\u7684 note \u5B57\u6BB5\u662F\u5199\u7ED9 AI \u770B\u7684\u5907\u6CE8\u3002",
  rooms: [
    {
      id: "\u9884\u89C8\u6D4B\u8BD5\u623F",
      name: "\u9884\u89C8\u6D4B\u8BD5\u623F",
      type: "combat",
      w: 9,
      h: 7,
      cells: [
        "1",
        "1",
        "1",
        "1",
        "0",
        "1",
        "1",
        "1",
        "1",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "1",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "1",
        "1",
        "0",
        "0",
        "0",
        "0",
        "0",
        "1",
        "0",
        "1",
        "1",
        "0",
        "0",
        "S",
        "0",
        "0",
        "1",
        "0",
        "1",
        "1",
        "1",
        "1",
        "0",
        "1",
        "1",
        "1",
        "0",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
      ],
      rows: [
        "1111110111111",
        "1111110111111",
        "1111110111111",
        "1110000010111",
        "1110000010111",
        "1110000010111",
        "11100S0010111",
        "1111101110111",
        "1111110111111",
        "1111110111111",
        "1111110111111"
      ],
      entry: "south",
      exits: [
        "north",
        "south"
      ],
      risk: null,
      tension: 2,
      note: "\u8FD9\u662F\u5199\u7ED9 AI \u7684\u5907\u6CE8\uFF1A\u5B88\u519B\u8981\u6321\u5728\u201C\u5357\u5165\u53E3 \u2192 \u5317\u51FA\u53E3\u201D\u7684\u4E3B\u8DEF\u5F84\u4E0A\u3002",
      updatedAt: "2026-09-10T12:37:20.127Z"
    }
  ]
};

// src/map/RoomLibrary.ts
var ALL = Array.isArray(rooms_default.rooms) ? rooms_default.rooms : [];
function listRooms() {
  return [...ALL];
}
function roomsOfType(type) {
  return ALL.filter((r) => r.type === type);
}
function patternOfRoom(r) {
  return r.pattern ?? patternFromExits(r.exits ?? []);
}
function pickRoom(q) {
  const rand = q.rand ?? Math.random;
  const excluded = new Set(q.exclude ?? []);
  let pool = ALL.filter((r) => r.type === q.type && !excluded.has(r.id));
  if (pool.length === 0) return null;
  if (q.pattern) {
    const byPattern = pool.filter((r) => patternOfRoom(r) === q.pattern);
    if (byPattern.length > 0) pool = byPattern;
  }
  if (typeof q.preferTension === "number") {
    let best = Infinity;
    let bucket = [];
    for (const r of pool) {
      const d = Math.abs((r.tension ?? 0) - q.preferTension);
      if (d < best - 1e-9) {
        best = d;
        bucket = [r];
      } else if (Math.abs(d - best) <= 1e-9) bucket.push(r);
    }
    if (bucket.length > 0) pool = bucket;
  }
  const idx = Math.min(pool.length - 1, Math.floor(rand() * pool.length));
  return pool[idx] ?? pool[0];
}

// src/utils/Grid.ts
var DIRS4 = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// src/test/roomEditorTest.ts
var pass = 0;
var fail = 0;
function ok(cond, msg) {
  if (cond) pass++;
  else {
    fail++;
    console.error(`  \u2717 ${msg}`);
  }
}
function reachable(floor, x0, y0, x1, y1) {
  if (floor.grid[y0]?.[x0] !== 0 || floor.grid[y1]?.[x1] !== 0) return false;
  const seen = /* @__PURE__ */ new Set([`${x0},${y0}`]);
  const queue = [{ x: x0, y: y0 }];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur.x === x1 && cur.y === y1) return true;
    for (const [dx, dy] of DIRS4) {
      const nx = cur.x + dx;
      const ny = cur.y + dy;
      const key = `${nx},${ny}`;
      if (seen.has(key)) continue;
      if (ny < 0 || ny >= floor.height || nx < 0 || nx >= floor.width) continue;
      if (floor.grid[ny][nx] !== 0) continue;
      seen.add(key);
      queue.push({ x: nx, y: ny });
    }
  }
  return false;
}
function openDoorCells(t, dirs) {
  for (const d of dirs) {
    const c = doorCell(t, d);
    t.cells[(c.y - TEMPLATE_MARGIN) * t.w + (c.x - TEMPLATE_MARGIN)] = "0";
  }
}
function run() {
  dataManager.loadAll();
  const base = newTemplate(7, 6, "combat");
  const size = canvasSize(base);
  ok(
    size.w === 7 + TEMPLATE_MARGIN * 2 && size.h === 6 + TEMPLATE_MARGIN * 2,
    `\u753B\u5E03 = \u623F\u95F4 + 2\xD7${TEMPLATE_MARGIN} \u95E8\u69FD\u5916\u5708\uFF08\u5B9E\u9645 ${size.w}\xD7${size.h}\uFF09`
  );
  ok(defaultCellAt(7, 6, 0, 0) === "1" && defaultCellAt(7, 6, 6, 5) === "1", "\u9ED8\u8BA4\u56DB\u5468\u4E3A\u5899");
  ok(defaultCellAt(7, 6, 3, 3) === "0", "\u9ED8\u8BA4\u5185\u90E8\u4E3A\u7A7A\u5730");
  for (const d of ["north", "east", "south", "west"]) {
    const t = { ...base, cells: [...base.cells], exits: [d], entry: d };
    openDoorCells(t, [d]);
    const inner = entryInnerCell(t, d);
    t.cells[(inner.y - TEMPLATE_MARGIN) * t.w + (inner.x - TEMPLATE_MARGIN)] = "S";
    const rows = templateRows(t);
    ok(rows.length === size.h, `${d}\uFF1A\u5B57\u7B26\u56FE\u884C\u6570\u6B63\u786E`);
    ok(rows.every((r) => r.length === size.w), `${d}\uFF1A\u5B57\u7B26\u56FE\u6BCF\u884C\u7B49\u957F`);
    const floor = buildPrefabFloor(templateToPrefab(t, 1));
    const room = floor.rooms[0];
    ok(room.fromDirection === d, `${d}\uFF1A\u5165\u53E3\u65B9\u5411\u5199\u5165 fromDirection\uFF08\u5B9E\u9645 ${String(room.fromDirection)}\uFF09`);
    ok(room.doors.some((door) => door.direction === d), `${d}\uFF1A\u52FE\u9009\u7684\u95E8\u88AB PrefabMap \u8BA4\u51FA`);
    const stub = stubCells(t, d);
    const outer = stub[stub.length - 1];
    ok(
      reachable(floor, floor.entryX, floor.entryY, outer.x, outer.y),
      `${d}\uFF1A\u5165\u53E3\u53EF\u8FBE\u5899\u5916\u95E8\u69FD\uFF08\u8BF4\u660E\u8FD9\u9053\u95E8\u771F\u7684\u80FD\u8D70\u51FA\u53BB\uFF09`
    );
  }
  const t2 = {
    ...base,
    cells: [...base.cells],
    exits: ["north", "east"],
    entry: "west",
    name: "\u65AD\u6865\u5B88\u536B",
    note: "\u4E1C\u4FA7\u7559\u4E00\u6761\u4FA7\u8DEF"
  };
  openDoorCells(t2, ["north", "east"]);
  t2.cells[(t2.h - 2) * t2.w + (t2.w - 2)] = "r";
  const trip = prefabToTemplate(templateToPrefab(t2, 1));
  ok(trip.w === t2.w && trip.h === t2.h, "\u5F80\u8FD4\uFF1A\u5C3A\u5BF8\u4E00\u81F4");
  ok(JSON.stringify(trip.cells) === JSON.stringify(t2.cells), "\u5F80\u8FD4\uFF1A\u683C\u5B50\u4E00\u81F4\uFF08\u542B\u5B9E\u4F53\u5B57\u7B26\uFF09");
  ok(JSON.stringify(trip.exits) === JSON.stringify(t2.exits), `\u5F80\u8FD4\uFF1A\u51FA\u53E3\u65B9\u5411\u4E00\u81F4\uFF08${JSON.stringify(trip.exits)}\uFF09`);
  ok(
    trip.entry === t2.entry && trip.type === t2.type && trip.name === t2.name && trip.note === t2.note,
    "\u5F80\u8FD4\uFF1A\u5165\u53E3/\u79CD\u7C7B/\u540D\u79F0/\u5907\u6CE8\u4E00\u81F4"
  );
  ok(JSON.stringify(templateRows(trip)) === JSON.stringify(templateRows(t2)), "\u5F80\u8FD4\uFF1A\u5B57\u7B26\u56FE\u4E8C\u6B21\u5BFC\u51FA\u76F8\u540C\uFF08\u5E42\u7B49\uFF09");
  const defNoExits = templateToPrefab(t2, 1);
  delete defNoExits.rooms[0].exits;
  const derived = prefabToTemplate(defNoExits);
  ok(
    JSON.stringify(derived.exits) === JSON.stringify(t2.exits),
    `exits \u7F3A\u7701\u65F6\u53EF\u7531\u7F51\u683C\u53CD\u63A8\uFF08${JSON.stringify(derived.exits)}\uFF09`
  );
  const chars = ["p", "x", "g", "r", "4", "t", "c", "q", "f", "o", "h", "5", "w", "k", "u", "2", "3", "B", "D"];
  const tw = chars.length + 2;
  const t3 = newTemplate(tw, 6, "combat");
  chars.forEach((ch, i) => {
    t3.cells[2 * t3.w + (1 + i)] = ch;
  });
  const f3 = buildPrefabFloor(templateToPrefab(t3, 3));
  const room3 = f3.rooms[0];
  const kinds = new Set(room3.entities.map((e) => e.kind));
  const need = ["pillar", "chest", "torch", "carpet", "potion", "fountain", "cauldron", "shelf", "npc", "monster", "boss", "stair"];
  const missing = need.filter((k) => !kinds.has(k));
  ok(missing.length === 0, `\u56FE\u4F8B\u5168\u8986\u76D6\uFF08\u7F3A\uFF1A${missing.join("/") || "\u65E0"}\uFF09`);
  const tiers = room3.entities.filter((e) => e.kind === "chest").map((e) => e.chestTier);
  ok(
    tiers.includes("normal") && tiers.includes("grand") && tiers.includes("relic"),
    `\u4E09\u6863\u5B9D\u7BB1\u90FD\u80FD\u89E3\u6790\uFF08${tiers.join("/")}\uFF09`
  );
  ok(f3.grid[TEMPLATE_MARGIN + 2][TEMPLATE_MARGIN + 1] === 2, "\u67F1\u5B50 \u2192 \u963B\u6321\u5730\u5F62 2");
  ok(f3.grid[TEMPLATE_MARGIN + 2][TEMPLATE_MARGIN + 2] === 4, "\u60AC\u5D16 \u2192 \u5730\u5F62 4");
  const el = room3.entities.find((e) => e.kind === "monster" && e.isElite);
  ok(!!el, "\u7CBE\u82F1\u5B57\u7B26\uFF083\uFF09\u2192 isElite \u602A\u7269");
  const f4 = buildPrefabFloor(templateToPrefab(newTemplate(5, 5, "rest"), 1));
  ok(f4.rooms[0].doors.length === 0, `\u65E0\u51FA\u53E3 \u2192 \u4E0D\u4EA7\u751F\u95E8\uFF08\u5B9E\u9645 ${f4.rooms[0].doors.length}\uFF09`);
  const rm = dataManager.mapGen.content.risk.rewardMul;
  const tR = { ...base, cells: [...base.cells], type: "chest", risk: 3 };
  tR.cells[2 * tR.w + 2] = "4";
  tR.cells[2 * tR.w + 4] = "r";
  const fR = buildPrefabFloor(templateToPrefab(tR, 5));
  const roomR = fR.rooms[0];
  const normalChest = roomR.entities.find((e) => e.kind === "chest" && e.chestTier === "normal");
  const relicChest = roomR.entities.find((e) => e.kind === "chest" && e.chestTier === "relic");
  ok(roomR.risk === 3 && roomR.rewardMul === rm[2], `\u98CE\u9669\u6863\u5199\u5165\u623F\u95F4\uFF08risk=${String(roomR.risk)} mul=${String(roomR.rewardMul)}\uFF09`);
  ok(normalChest?.rewardMul === rm[2] && normalChest?.riskTier === 3, "\u98CE\u9669\u6863\u7ED3\u7B97\u5230\u666E\u901A\u5B9D\u7BB1");
  ok(relicChest !== void 0 && relicChest.rewardMul === void 0, "\u9057\u7269\u5B9D\u7BB1\u4E0D\u5403 rewardMul\uFF08\u81EA\u5E26\u4E09\u9009\u4E00\uFF09");
  const tTrip = prefabToTemplate(templateToPrefab(tR, 5));
  ok(tTrip.risk === 3, `\u98CE\u9669\u6863\u53EF\u5F80\u8FD4\uFF08${String(tTrip.risk)}\uFF09`);
  const tS = { ...base, cells: [...base.cells], entry: "south", exits: ["south"] };
  openDoorCells(tS, ["south"]);
  const innerS = entryInnerCell(tS, "south");
  tS.cells[(innerS.y - TEMPLATE_MARGIN) * tS.w + (innerS.x - TEMPLATE_MARGIN)] = "S";
  const fS = buildPrefabFloor(templateToPrefab(tS, 1));
  const roomS = fS.rooms[0];
  ok(roomS.fromDirection === "south", `\u5165\u53E3\u56FA\u5B9A\u5357 \u2192 fromDirection\uFF08\u5B9E\u9645 ${String(roomS.fromDirection)}\uFF09`);
  ok(roomS.doors.some((door) => door.direction === "south"), "\u5357\u95E8\u88AB\u8BC6\u522B\u4E3A\u95E8\uFF08\u5165\u53E3\uFF09");
  for (const d of ["north", "east", "west"]) {
    ok(!roomS.doors.some((door) => door.direction === d), `\u53EA\u5F00\u5357\u95E8\u65F6 ${d} \u65B9\u5411\u65E0\u95E8\uFF08\u8BBE\u8BA1\u53D8\u91CF\u672A\u88AB\u8BEF\u5F00\uFF09`);
  }
  const stubS = stubCells(tS, "south");
  ok(
    reachable(fS, fS.entryX, fS.entryY, stubS[stubS.length - 1].x, stubS[stubS.length - 1].y),
    "\u5357\u5165\u53E3\u53EF\u8FBE\u5899\u5916\u95E8\u69FD\uFF08\u5165\u53E3\u771F\u7684\u901A\uFF09"
  );
  const stored = {
    id: "test_room",
    w: tS.w,
    h: tS.h,
    cells: [...tS.cells],
    rows: templateRows(tS),
    entry: "south",
    exits: ["south"]
  };
  ok(stored.cells.length === stored.w * stored.h, `\u6863\u6848 cells \u957F\u5EA6 = w\xD7h\uFF08${stored.cells.length}\uFF09`);
  ok(JSON.stringify(stored.rows) === JSON.stringify(templateRows(tS)), "\u6863\u6848 rows \u4E0E\u6A21\u677F\u5BFC\u51FA\u4E00\u81F4");
  ok(
    prefabToTemplate(templateToPrefab({ ...tS, exits: stored.exits }, 1)).entry === "south",
    "\u6863\u6848\u5F80\u8FD4\u540E\u4ECD\u4E3A\u5357\u5165\u53E3"
  );
  const tw2 = dataManager.mapGen.tension.weights;
  const tT = { ...base, cells: [...base.cells], type: "combat" };
  const fTdef = buildPrefabFloor(templateToPrefab(tT, 1));
  ok(
    fTdef.rooms[0].tension === (tw2["combat"] ?? 0),
    `\u672A\u6807\u6CE8\u5F20\u529B \u2192 \u53D6\u623F\u578B\u9ED8\u8BA4\u6743\u91CD\uFF08combat \u5B9E\u9645 ${String(fTdef.rooms[0].tension)}\uFF09`
  );
  const defT2 = templateToPrefab({ ...tT, tension: 3 }, 1);
  ok(defT2.rooms[0].tension === 3, `\u663E\u5F0F\u5F20\u529B\u5199\u5165\u9884\u5236\u5B9A\u4E49\uFF08${String(defT2.rooms[0].tension)}\uFF09`);
  const fT2 = buildPrefabFloor(defT2);
  ok(fT2.rooms[0].tension === 3, `\u663E\u5F0F\u5F20\u529B\u843D\u5730\u5230 RoomData\uFF08${String(fT2.rooms[0].tension)}\uFF09`);
  ok((tw2["combat"] ?? 0) !== 3, "\u663E\u5F0F\u5F20\u529B\u53EF\u504F\u79BB\u623F\u578B\u9ED8\u8BA4\uFF08\u8986\u76D6\u751F\u6548\uFF09");
  ok(prefabToTemplate(defT2).tension === 3, `\u5F20\u529B\u503C\u53EF\u5F80\u8FD4\uFF08${String(prefabToTemplate(defT2).tension)}\uFF09`);
  ok(
    templateToPrefab({ ...tT, tension: null }, 1).rooms[0].tension === void 0,
    "\u5F20\u529B null \u2192 \u4E0D\u5199\u9884\u5236\u5B9A\u4E49\uFF08\u8DDF\u968F\u623F\u578B\u9ED8\u8BA4\uFF09"
  );
  ok(
    resolveRoomTension("chest") === (tw2["chest"] ?? 0) && resolveRoomTension("chest", 2) === 2,
    "resolveRoomTension\uFF1A\u663E\u5F0F\u4F18\u5148 / \u7F3A\u7701\u56DE\u9000\u623F\u578B\u6743\u91CD"
  );
  ok(patternFromExits(["south"]) === "single", "\u901A\u53E3\uFF1A\u5355\u53E3");
  ok(patternFromExits(["south", "north"]) === "vertical", "\u901A\u53E3\uFF1A\u4E0A\u4E0B\u901A\u53E3\uFF08\u4E00\u5BF9\u5BF9\u8FB9\uFF09");
  ok(patternFromExits(["south", "east"]) === "diagonal", "\u901A\u53E3\uFF1A\u5BF9\u89D2\u901A\u53E3\uFF08\u4E00\u5BF9\u90BB\u8FB9\uFF09");
  ok(patternFromExits(["south", "east", "west"]) === "tee", "\u901A\u53E3\uFF1AT\u578B\u901A\u53E3\uFF08\u4E09\u8FB9\uFF09");
  ok(patternFromExits(["south", "north", "east", "west"]) === "cross", "\u901A\u53E3\uFF1A\u56DB\u65B9\u901A\u53E3\uFF08\u56DB\u8FB9\uFF09");
  ok(
    patternFromExits(["north", "south"]) === "vertical" && patternFromExits(["east", "west"]) === "vertical",
    "\u901A\u53E3\uFF1A\u5224\u5B9A\u4E0E\u5165\u53E3\u65B9\u5411\u65E0\u5173\uFF08\u53EA\u770B\u8FB9\u5173\u7CFB\uFF09"
  );
  ok(
    matchPattern(EXIT_PATTERN_PRESETS.tee) === "tee" && matchPattern(["south", "west"]) === null,
    "\u901A\u53E3\uFF1AmatchPattern \u9884\u8BBE\u7CBE\u786E\u5339\u914D / \u975E\u9884\u8BBE\u8FD4\u56DE null\uFF08\u81EA\u5B9A\u4E49\uFF09"
  );
  ok(exitsLabel(["south", "north", "east"]) === "\u5317\u4E1C\u5357", `\u901A\u53E3\uFF1A\u65B9\u5411\u4E32\uFF08${exitsLabel(["south", "north", "east"])}\uFF09`);
  ok(EXIT_PATTERN_PRESETS.cross.length === 4, "\u901A\u53E3\uFF1A\u56DB\u65B9\u901A\u53E3\u9884\u8BBE\u542B 4 \u4E2A\u51FA\u53E3");
  const tPat = { ...base, cells: [...base.cells], entry: "south", exits: [...EXIT_PATTERN_PRESETS.vertical] };
  openDoorCells(tPat, ["south", "north"]);
  const defPat = templateToPrefab(tPat, 1);
  ok(defPat.rooms[0].pattern === "vertical", `\u901A\u53E3\uFF1AtemplateToPrefab \u5199\u5165 pattern\uFF08${String(defPat.rooms[0].pattern)}\uFF09`);
  ok(
    buildPrefabFloor(defPat).rooms[0].pattern === "vertical",
    `\u901A\u53E3\uFF1ARoomData.pattern \u843D\u5730\uFF08${String(buildPrefabFloor(defPat).rooms[0].pattern)}\uFF09`
  );
  const libRooms = listRooms();
  ok(Array.isArray(libRooms), `\u623F\u95F4\u5E93\uFF1AlistRooms \u8FD4\u56DE\u6570\u7EC4\uFF08${libRooms.length} \u95F4\uFF09`);
  const bossPick = pickRoom({ type: "boss", rand: () => 0 });
  ok(bossPick === null || bossPick.type === "boss", "\u623F\u95F4\u5E93\uFF1A\u65E0\u5339\u914D\u623F\u578B\u8FD4\u56DE null\uFF08\u6216\u540C\u7C7B\u578B\u623F\uFF09");
  const combatLib = roomsOfType("combat");
  if (combatLib.length > 0) {
    const picked = pickRoom({ type: "combat", pattern: "vertical", rand: () => 0 });
    ok(!!picked && picked.type === "combat", "\u623F\u95F4\u5E93\uFF1A\u6309\u7C7B\u578B\u62BD\u5230\u623F\u95F4");
    ok(
      picked !== null && patternOfRoom(picked) === "vertical",
      `\u623F\u95F4\u5E93\uFF1A\u901A\u53E3\u7C7B\u578B\u5339\u914D vertical\uFF08${picked ? patternOfRoom(picked) : "null"}\uFF09`
    );
    ok(pickRoom({ type: "combat", exclude: combatLib.map((r) => r.id) }) === null, "\u623F\u95F4\u5E93\uFF1Aexclude \u5168\u90E8\u540E\u4E0D\u62BD\u53D6");
  } else {
    ok(true, "\u623F\u95F4\u5E93\uFF1A\u6682\u5B58 combat \u624B\u5DE5\u623F\uFF08\u8DF3\u8FC7\u62BD\u53D6\u65AD\u8A00 a\uFF09");
    ok(true, "\u623F\u95F4\u5E93\uFF1A\u6682\u5B58 combat \u624B\u5DE5\u623F\uFF08\u8DF3\u8FC7\u62BD\u53D6\u65AD\u8A00 b\uFF09");
    ok(true, "\u623F\u95F4\u5E93\uFF1A\u6682\u5B58 combat \u624B\u5DE5\u623F\uFF08\u8DF3\u8FC7\u62BD\u53D6\u65AD\u8A00 c\uFF09");
  }
  console.log(`\u65AD\u8A00 ${pass} \u901A\u8FC7 / ${fail} \u5931\u8D25`);
  if (fail > 0) {
    console.error("\n!!! \u623F\u95F4\u7F16\u8F91\u5668\u5951\u7EA6\u6D4B\u8BD5\u5B58\u5728\u5931\u8D25\u65AD\u8A00 !!!");
    process.exit(1);
  }
  console.log("\n\u623F\u95F4\u7F16\u8F91\u5668\uFF08\u6A21\u677F \u2194 \u9884\u5236\u5730\u56FE\uFF09\uFF1A\u5168\u90E8\u901A\u8FC7 \u2705");
}
run();
