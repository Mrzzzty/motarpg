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
function tierOfFloor(floorId) {
  let hit = TIERS[0];
  for (const t of TIERS) {
    if (floorId >= t.fromFloor) hit = t;
    else break;
  }
  return hit;
}
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
    const calc = (rail, f) => rail.reduce((t, type) => {
      const w = weights[type] ?? 0;
      const factor = type === "combat" ? f.combat : type === "elite" ? f.elite : 1;
      return t + w * factor;
    }, 0);
    Logger.debug(`[PathGen] \u697C\u5C42${floorId} A=[${railA.join(",")}] T=${calc(railA, factors.A).toFixed(1)} | B=[${railB.join(",")}] T=${calc(railB, factors.B).toFixed(1)}`);
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
    const monsters = rooms.flatMap((r) => r.entities.filter((e) => e.kind === "monster" && e.stats)).map((e) => e);
    if (monsters.length === 0) return;
    const attrs = ["hp", "attack", "defense"];
    const clampTo = (e, attr, cap) => {
      if (e.stats[attr] > cap) e.stats[attr] = Math.max(1, Math.floor(cap));
    };
    const normals = monsters.filter((e) => !e.isElite);
    const basePool = normals.length > 0 ? normals : monsters;
    for (const attr of attrs) {
      const min = Math.min(...basePool.map((e) => e.stats[attr]));
      for (const e of normals) clampTo(e, attr, min * 1.4);
    }
    const statCalc = StatCalculator.getInstance();
    for (const e of monsters.filter((m) => m.isElite)) {
      const def = dataManager.getMonster(e.monsterId ?? "");
      if (!def) continue;
      const base = statCalc.monsterStats(def, floorId, false, 1);
      for (const attr of attrs) clampTo(e, attr, base[attr] * 1.5);
    }
    for (const attr of attrs) {
      const min = Math.min(...monsters.map((e) => e.stats[attr]));
      for (const e of monsters) clampTo(e, attr, min * 1.8);
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
    const log2 = [];
    for (const d of this.owned()) {
      for (const e of d.effects) {
        if (e.type !== "onFloorEnter") continue;
        switch (e.action) {
          case "healPct": {
            const h = p.heal(Math.round(p.maxHp * (e.value ?? 0) / 100));
            if (h > 0) log2.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "heal": {
            const h = p.heal(e.value ?? 0);
            if (h > 0) log2.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "key": {
            p.state.keys += e.value ?? 1;
            log2.push(`${d.name}\uFF1A\u83B7\u5F97 ${e.value ?? 1} \u628A\u94A5\u5319`);
            break;
          }
          case "hpLossPct": {
            const loss = Math.max(1, Math.round(p.maxHp * (e.value ?? 0) / 100));
            p.damage(loss);
            log2.push(`${d.name}\uFF1A\u635F\u5931 ${loss} \u751F\u547D`);
            break;
          }
          default:
            break;
        }
      }
    }
    return log2;
  }
  /** 击杀触发：吸血獠牙 / 拾荒者 / 窃命之契 */
  onKill() {
    const p = Player.getInstance();
    const floorId = p.state.currentFloor;
    const log2 = [];
    for (const d of this.owned()) {
      for (const e of d.effects) {
        if (e.type !== "onKill") continue;
        switch (e.action) {
          case "heal": {
            const h = p.heal(e.value ?? 0);
            if (h > 0) log2.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "healPct": {
            const h = p.heal(Math.round(p.maxHp * (e.value ?? 0) / 100));
            if (h > 0) log2.push(`${d.name}\uFF1A\u56DE\u590D ${h} \u751F\u547D`);
            break;
          }
          case "loseHp": {
            p.damage(e.value ?? 0);
            log2.push(`${d.name}\uFF1A\u635F\u5931 ${e.value ?? 0} \u751F\u547D`);
            break;
          }
          case "killGold": {
            const g = Math.round(2 + floorId * 0.8);
            p.gainGold(g);
            log2.push(`${d.name}\uFF1A\u989D\u5916\u6389\u843D ${g} \u91D1\u5E01`);
            break;
          }
          case "killAttackPct": {
            this.killAttackStack += e.value ?? 0;
            log2.push(`${d.name}\uFF1A\u653B\u51FB +${e.value ?? 0}%\uFF08\u7D2F\u8BA1 +${this.killAttackStack}%\uFF09`);
            break;
          }
          default:
            break;
        }
      }
    }
    return log2;
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

// node_modules/three/build/three.core.js
var REVISION = "185";
var PCFShadowMap = 1;
var VSMShadowMap = 3;
var FrontSide = 0;
var NormalBlending = 1;
var AddEquation = 100;
var SrcAlphaFactor = 204;
var OneMinusSrcAlphaFactor = 205;
var NeverDepth = 0;
var AlwaysDepth = 1;
var LessDepth = 2;
var LessEqualDepth = 3;
var EqualDepth = 4;
var GreaterEqualDepth = 5;
var GreaterDepth = 6;
var NotEqualDepth = 7;
var MultiplyOperation = 0;
var MixOperation = 1;
var AddOperation = 2;
var LinearToneMapping = 1;
var ReinhardToneMapping = 2;
var CineonToneMapping = 3;
var ACESFilmicToneMapping = 4;
var CustomToneMapping = 5;
var AgXToneMapping = 6;
var NeutralToneMapping = 7;
var UVMapping = 300;
var CubeReflectionMapping = 301;
var CubeRefractionMapping = 302;
var CubeUVReflectionMapping = 306;
var RepeatWrapping = 1e3;
var ClampToEdgeWrapping = 1001;
var MirroredRepeatWrapping = 1002;
var LinearFilter = 1006;
var LinearMipmapLinearFilter = 1008;
var UnsignedByteType = 1009;
var FloatType = 1015;
var RGBAFormat = 1023;
var InterpolateDiscrete = 2300;
var InterpolateLinear = 2301;
var InterpolateSmooth = 2302;
var InterpolateBezier = 2303;
var ZeroCurvatureEnding = 2400;
var ZeroSlopeEnding = 2401;
var WrapAroundEnding = 2402;
var NoColorSpace = "";
var SRGBColorSpace = "srgb";
var LinearSRGBColorSpace = "srgb-linear";
var LinearTransfer = "linear";
var SRGBTransfer = "srgb";
var KeepStencilOp = 7680;
var AlwaysStencilFunc = 519;
var StaticDrawUsage = 35044;
var WebGLCoordinateSystem = 2e3;
var WebGPUCoordinateSystem = 2001;
function arrayNeedsUint32(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] >= 65535) return true;
  }
  return false;
}
function isTypedArray(array) {
  return ArrayBuffer.isView(array) && !(array instanceof DataView);
}
function createElementNS(name) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", name);
}
var _cache = {};
var _setConsoleFunction = null;
function log(...params) {
  const message = "THREE." + params.shift();
  if (_setConsoleFunction) {
    _setConsoleFunction("log", message, ...params);
  } else {
    console.log(message, ...params);
  }
}
function enhanceLogMessage(params) {
  const message = params[0];
  if (typeof message === "string" && message.startsWith("TSL:")) {
    const stackTrace = params[1];
    if (stackTrace && stackTrace.isStackTrace) {
      params[0] += " " + stackTrace.getLocation();
    } else {
      params[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
    }
  }
  return params;
}
function warn(...params) {
  params = enhanceLogMessage(params);
  const message = "THREE." + params.shift();
  if (_setConsoleFunction) {
    _setConsoleFunction("warn", message, ...params);
  } else {
    const stackTrace = params[0];
    if (stackTrace && stackTrace.isStackTrace) {
      console.warn(stackTrace.getError(message));
    } else {
      console.warn(message, ...params);
    }
  }
}
function error(...params) {
  params = enhanceLogMessage(params);
  const message = "THREE." + params.shift();
  if (_setConsoleFunction) {
    _setConsoleFunction("error", message, ...params);
  } else {
    const stackTrace = params[0];
    if (stackTrace && stackTrace.isStackTrace) {
      console.error(stackTrace.getError(message));
    } else {
      console.error(message, ...params);
    }
  }
}
function warnOnce(...params) {
  const message = params.join(" ");
  if (message in _cache) return;
  _cache[message] = true;
  warn(...params);
}
var ReversedDepthFuncs = {
  [NeverDepth]: AlwaysDepth,
  [LessDepth]: GreaterDepth,
  [EqualDepth]: NotEqualDepth,
  [LessEqualDepth]: GreaterEqualDepth,
  [AlwaysDepth]: NeverDepth,
  [GreaterDepth]: LessDepth,
  [NotEqualDepth]: EqualDepth,
  [GreaterEqualDepth]: LessEqualDepth
};
var EventDispatcher = class {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(type, listener) {
    if (this._listeners === void 0) this._listeners = {};
    const listeners = this._listeners;
    if (listeners[type] === void 0) {
      listeners[type] = [];
    }
    if (listeners[type].indexOf(listener) === -1) {
      listeners[type].push(listener);
    }
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(type, listener) {
    const listeners = this._listeners;
    if (listeners === void 0) return false;
    return listeners[type] !== void 0 && listeners[type].indexOf(listener) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(type, listener) {
    const listeners = this._listeners;
    if (listeners === void 0) return;
    const listenerArray = listeners[type];
    if (listenerArray !== void 0) {
      const index = listenerArray.indexOf(listener);
      if (index !== -1) {
        listenerArray.splice(index, 1);
      }
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(event) {
    const listeners = this._listeners;
    if (listeners === void 0) return;
    const listenerArray = listeners[event.type];
    if (listenerArray !== void 0) {
      event.target = this;
      const array = listenerArray.slice(0);
      for (let i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
      event.target = null;
    }
  }
};
var _lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  const uuid = _lut[d0 & 255] + _lut[d0 >> 8 & 255] + _lut[d0 >> 16 & 255] + _lut[d0 >> 24 & 255] + "-" + _lut[d1 & 255] + _lut[d1 >> 8 & 255] + "-" + _lut[d1 >> 16 & 15 | 64] + _lut[d1 >> 24 & 255] + "-" + _lut[d2 & 63 | 128] + _lut[d2 >> 8 & 255] + "-" + _lut[d2 >> 16 & 255] + _lut[d2 >> 24 & 255] + _lut[d3 & 255] + _lut[d3 >> 8 & 255] + _lut[d3 >> 16 & 255] + _lut[d3 >> 24 & 255];
  return uuid.toLowerCase();
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function euclideanModulo(n, m) {
  return (n % m + m) % m;
}
function lerp(x, y, t) {
  return (1 - t) * x + t * y;
}
function denormalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return value / 4294967295;
    case Uint16Array:
      return value / 65535;
    case Uint8Array:
      return value / 255;
    case Int32Array:
      return Math.max(value / 2147483647, -1);
    case Int16Array:
      return Math.max(value / 32767, -1);
    case Int8Array:
      return Math.max(value / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function normalize(value, array) {
  switch (array.constructor) {
    case Float32Array:
      return value;
    case Uint32Array:
      return Math.round(value * 4294967295);
    case Uint16Array:
      return Math.round(value * 65535);
    case Uint8Array:
      return Math.round(value * 255);
    case Int32Array:
      return Math.round(value * 2147483647);
    case Int16Array:
      return Math.round(value * 32767);
    case Int8Array:
      return Math.round(value * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
var Vector2 = class _Vector2 {
  static {
    _Vector2.prototype.isVector2 = true;
  }
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(value) {
    this.x = value;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(value) {
    this.y = value;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    return this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(x) {
    this.x = x;
    return this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(y) {
    this.y = y;
    return this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + index);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + index);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(s) {
    this.x += s;
    this.y += s;
    return this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    return this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    return this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(m) {
    const x = this.x, y = this.y;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6];
    this.y = e[1] * x + e[4] * y + e[7];
    return this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    return this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    return this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(min, max) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    return this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(minVal, maxVal) {
    this.x = clamp(this.x, minVal, maxVal);
    this.y = clamp(this.y, minVal, maxVal);
    return this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    return this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(v) {
    return this.x * v.y - this.y * v.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    const angle = Math.atan2(-this.y, -this.x) + Math.PI;
    return angle;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y;
    return dx * dx + dy * dy;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    return this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(v) {
    return v.x === this.x && v.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    return this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    return array;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    return this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(center, angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }
};
var Quaternion = class {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.isQuaternion = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
    let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
    let x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
    if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
      let dot = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1;
      if (dot < 0) {
        x1 = -x1;
        y1 = -y1;
        z1 = -z1;
        w1 = -w1;
        dot = -dot;
      }
      let s = 1 - t;
      if (dot < 0.9995) {
        const theta = Math.acos(dot);
        const sin = Math.sin(theta);
        s = Math.sin(s * theta) / sin;
        t = Math.sin(t * theta) / sin;
        x0 = x0 * s + x1 * t;
        y0 = y0 * s + y1 * t;
        z0 = z0 * s + z1 * t;
        w0 = w0 * s + w1 * t;
      } else {
        x0 = x0 * s + x1 * t;
        y0 = y0 * s + y1 * t;
        z0 = z0 * s + z1 * t;
        w0 = w0 * s + w1 * t;
        const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
        x0 *= f;
        y0 *= f;
        z0 *= f;
        w0 *= f;
      }
    }
    dst[dstOffset] = x0;
    dst[dstOffset + 1] = y0;
    dst[dstOffset + 2] = z0;
    dst[dstOffset + 3] = w0;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
    const x0 = src0[srcOffset0];
    const y0 = src0[srcOffset0 + 1];
    const z0 = src0[srcOffset0 + 2];
    const w0 = src0[srcOffset0 + 3];
    const x1 = src1[srcOffset1];
    const y1 = src1[srcOffset1 + 1];
    const z1 = src1[srcOffset1 + 2];
    const w1 = src1[srcOffset1 + 3];
    dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
    dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
    dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
    dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
    return dst;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(value) {
    this._w = value;
    this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(x, y, z, w) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._onChangeCallback();
    return this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(quaternion) {
    this._x = quaternion.x;
    this._y = quaternion.y;
    this._z = quaternion.z;
    this._w = quaternion.w;
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(euler, update = true) {
    const x = euler._x, y = euler._y, z = euler._z, order = euler._order;
    const cos = Math.cos;
    const sin = Math.sin;
    const c1 = cos(x / 2);
    const c2 = cos(y / 2);
    const c3 = cos(z / 2);
    const s1 = sin(x / 2);
    const s22 = sin(y / 2);
    const s3 = sin(z / 2);
    switch (order) {
      case "XYZ":
        this._x = s1 * c2 * c3 + c1 * s22 * s3;
        this._y = c1 * s22 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s22 * c3;
        this._w = c1 * c2 * c3 - s1 * s22 * s3;
        break;
      case "YXZ":
        this._x = s1 * c2 * c3 + c1 * s22 * s3;
        this._y = c1 * s22 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s22 * c3;
        this._w = c1 * c2 * c3 + s1 * s22 * s3;
        break;
      case "ZXY":
        this._x = s1 * c2 * c3 - c1 * s22 * s3;
        this._y = c1 * s22 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s22 * c3;
        this._w = c1 * c2 * c3 - s1 * s22 * s3;
        break;
      case "ZYX":
        this._x = s1 * c2 * c3 - c1 * s22 * s3;
        this._y = c1 * s22 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s22 * c3;
        this._w = c1 * c2 * c3 + s1 * s22 * s3;
        break;
      case "YZX":
        this._x = s1 * c2 * c3 + c1 * s22 * s3;
        this._y = c1 * s22 * c3 + s1 * c2 * s3;
        this._z = c1 * c2 * s3 - s1 * s22 * c3;
        this._w = c1 * c2 * c3 - s1 * s22 * s3;
        break;
      case "XZY":
        this._x = s1 * c2 * c3 - c1 * s22 * s3;
        this._y = c1 * s22 * c3 - s1 * c2 * s3;
        this._z = c1 * c2 * s3 + s1 * s22 * c3;
        this._w = c1 * c2 * c3 + s1 * s22 * s3;
        break;
      default:
        warn("Quaternion: .setFromEuler() encountered an unknown order: " + order);
    }
    if (update === true) this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(axis, angle) {
    const halfAngle = angle / 2, s = Math.sin(halfAngle);
    this._x = axis.x * s;
    this._y = axis.y * s;
    this._z = axis.z * s;
    this._w = Math.cos(halfAngle);
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(m) {
    const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      this._w = 0.25 / s;
      this._x = (m32 - m23) * s;
      this._y = (m13 - m31) * s;
      this._z = (m21 - m12) * s;
    } else if (m11 > m22 && m11 > m33) {
      const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
      this._w = (m32 - m23) / s;
      this._x = 0.25 * s;
      this._y = (m12 + m21) / s;
      this._z = (m13 + m31) / s;
    } else if (m22 > m33) {
      const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
      this._w = (m13 - m31) / s;
      this._x = (m12 + m21) / s;
      this._y = 0.25 * s;
      this._z = (m23 + m32) / s;
    } else {
      const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
      this._w = (m21 - m12) / s;
      this._x = (m13 + m31) / s;
      this._y = (m23 + m32) / s;
      this._z = 0.25 * s;
    }
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(vFrom, vTo) {
    let r = vFrom.dot(vTo) + 1;
    if (r < 1e-8) {
      r = 0;
      if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
        this._x = -vFrom.y;
        this._y = vFrom.x;
        this._z = 0;
        this._w = r;
      } else {
        this._x = 0;
        this._y = -vFrom.z;
        this._z = vFrom.y;
        this._w = r;
      }
    } else {
      this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
      this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
      this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
      this._w = r;
    }
    return this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(q) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(q, step) {
    const angle = this.angleTo(q);
    if (angle === 0) return this;
    const t = Math.min(1, step / angle);
    this.slerp(q, t);
    return this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v) {
    return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let l = this.length();
    if (l === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      l = 1 / l;
      this._x = this._x * l;
      this._y = this._y * l;
      this._z = this._z * l;
      this._w = this._w * l;
    }
    this._onChangeCallback();
    return this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(q) {
    return this.multiplyQuaternions(this, q);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(q) {
    return this.multiplyQuaternions(q, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(a, b) {
    const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
    const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
    this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
    this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
    this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
    this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
    this._onChangeCallback();
    return this;
  }
  /**
   * Performs a spherical linear interpolation between this quaternion and the target quaternion.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor. A value in the range `[0,1]` will interpolate. A value outside the range `[0,1]` will extrapolate.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(qb, t) {
    let x = qb._x, y = qb._y, z = qb._z, w = qb._w;
    let dot = this.dot(qb);
    if (dot < 0) {
      x = -x;
      y = -y;
      z = -z;
      w = -w;
      dot = -dot;
    }
    let s = 1 - t;
    if (dot < 0.9995) {
      const theta = Math.acos(dot);
      const sin = Math.sin(theta);
      s = Math.sin(s * theta) / sin;
      t = Math.sin(t * theta) / sin;
      this._x = this._x * s + x * t;
      this._y = this._y * s + y * t;
      this._z = this._z * s + z * t;
      this._w = this._w * s + w * t;
      this._onChangeCallback();
    } else {
      this._x = this._x * s + x * t;
      this._y = this._y * s + y * t;
      this._z = this._z * s + z * t;
      this._w = this._w * s + w * t;
      this.normalize();
    }
    return this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(qa, qb, t) {
    return this.copy(qa).slerp(qb, t);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const theta1 = 2 * Math.PI * Math.random();
    const theta2 = 2 * Math.PI * Math.random();
    const x0 = Math.random();
    const r1 = Math.sqrt(1 - x0);
    const r2 = Math.sqrt(x0);
    return this.set(
      r1 * Math.sin(theta1),
      r1 * Math.cos(theta1),
      r2 * Math.sin(theta2),
      r2 * Math.cos(theta2)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(quaternion) {
    return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(array, offset = 0) {
    this._x = array[offset];
    this._y = array[offset + 1];
    this._z = array[offset + 2];
    this._w = array[offset + 3];
    this._onChangeCallback();
    return this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._w;
    return array;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(attribute, index) {
    this._x = attribute.getX(index);
    this._y = attribute.getY(index);
    this._z = attribute.getZ(index);
    this._w = attribute.getW(index);
    this._onChangeCallback();
    return this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._w;
  }
};
var Vector3 = class _Vector3 {
  static {
    _Vector3.prototype.isVector3 = true;
  }
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(x, y, z) {
    if (z === void 0) z = this.z;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    return this;
  }
  /**
   * Sets the vector's x component to the given value.
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(x) {
    this.x = x;
    return this;
  }
  /**
   * Sets the vector's y component to the given value.
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(y) {
    this.y = y;
    return this;
  }
  /**
   * Sets the vector's z component to the given value.
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(z) {
    this.z = z;
    return this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + index);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + index);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    return this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    return this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    return this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    return this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(euler) {
    return this.applyQuaternion(_quaternion$5.setFromEuler(euler));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(axis, angle) {
    return this.applyQuaternion(_quaternion$5.setFromAxisAngle(axis, angle));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[3] * y + e[6] * z;
    this.y = e[1] * x + e[4] * y + e[7] * z;
    this.z = e[2] * x + e[5] * y + e[8] * z;
    return this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(m) {
    return this.applyMatrix3(m).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(q) {
    const vx = this.x, vy = this.y, vz = this.z;
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    const tx = 2 * (qy * vz - qz * vy);
    const ty = 2 * (qz * vx - qx * vz);
    const tz = 2 * (qx * vy - qy * vx);
    this.x = vx + qw * tx + qy * tz - qz * ty;
    this.y = vy + qw * ty + qz * tx - qx * tz;
    this.z = vz + qw * tz + qx * ty - qy * tx;
    return this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(camera) {
    return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(camera) {
    return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(m) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z;
    this.y = e[1] * x + e[5] * y + e[9] * z;
    this.z = e[2] * x + e[6] * y + e[10] * z;
    return this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    return this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    return this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(min, max) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    this.z = clamp(this.z, min.z, max.z);
    return this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(minVal, maxVal) {
    this.x = clamp(this.x, minVal, maxVal);
    this.y = clamp(this.y, minVal, maxVal);
    this.z = clamp(this.z, minVal, maxVal);
    return this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    return this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    return this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(v) {
    return this.crossVectors(this, v);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(a, b) {
    const ax = a.x, ay = a.y, az = a.z;
    const bx = b.x, by = b.y, bz = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(v) {
    const denominator = v.lengthSq();
    if (denominator === 0) return this.set(0, 0, 0);
    const scalar = v.dot(this) / denominator;
    return this.copy(v).multiplyScalar(scalar);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(planeNormal) {
    _vector$c.copy(this).projectOnVector(planeNormal);
    return this.sub(_vector$c);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(normal) {
    return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(v) {
    const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
    if (denominator === 0) return Math.PI / 2;
    const theta = this.dot(v) / denominator;
    return Math.acos(clamp(theta, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(v) {
    return Math.sqrt(this.distanceToSquared(v));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(v) {
    const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(v) {
    return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(s) {
    return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(radius, phi, theta) {
    const sinPhiRadius = Math.sin(phi) * radius;
    this.x = sinPhiRadius * Math.sin(theta);
    this.y = Math.cos(phi) * radius;
    this.z = sinPhiRadius * Math.cos(theta);
    return this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(c) {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(radius, theta, y) {
    this.x = radius * Math.sin(theta);
    this.y = y;
    this.z = radius * Math.cos(theta);
    return this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    return this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(m) {
    const sx = this.setFromMatrixColumn(m, 0).length();
    const sy = this.setFromMatrixColumn(m, 1).length();
    const sz = this.setFromMatrixColumn(m, 2).length();
    this.x = sx;
    this.y = sy;
    this.z = sz;
    return this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(m, index) {
    return this.fromArray(m.elements, index * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(m, index) {
    return this.fromArray(m.elements, index * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    this.x = e._x;
    this.y = e._y;
    this.z = e._z;
    return this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(c) {
    this.x = c.r;
    this.y = c.g;
    this.z = c.b;
    return this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    return array;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    return this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const theta = Math.random() * Math.PI * 2;
    const u = Math.random() * 2 - 1;
    const c = Math.sqrt(1 - u * u);
    this.x = c * Math.cos(theta);
    this.y = u;
    this.z = c * Math.sin(theta);
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
  }
};
var _vector$c = /* @__PURE__ */ new Vector3();
var _quaternion$5 = /* @__PURE__ */ new Quaternion();
var Matrix3 = class _Matrix3 {
  static {
    _Matrix3.prototype.isMatrix3 = true;
  }
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
    }
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    const te = this.elements;
    te[0] = n11;
    te[1] = n21;
    te[2] = n31;
    te[3] = n12;
    te[4] = n22;
    te[5] = n32;
    te[6] = n13;
    te[7] = n23;
    te[8] = n33;
    return this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    return this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrix3Column(this, 0);
    yAxis.setFromMatrix3Column(this, 1);
    zAxis.setFromMatrix3Column(this, 2);
    return this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(m) {
    const me = m.elements;
    this.set(
      me[0],
      me[4],
      me[8],
      me[1],
      me[5],
      me[9],
      me[2],
      me[6],
      me[10]
    );
    return this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];
    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[3] *= s;
    te[6] *= s;
    te[1] *= s;
    te[4] *= s;
    te[7] *= s;
    te[2] *= s;
    te[5] *= s;
    te[8] *= s;
    return this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const te = this.elements;
    const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i = te[8];
    return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = t11 * detInv;
    te[1] = (n31 * n23 - n33 * n21) * detInv;
    te[2] = (n32 * n21 - n31 * n22) * detInv;
    te[3] = t12 * detInv;
    te[4] = (n33 * n11 - n31 * n13) * detInv;
    te[5] = (n31 * n12 - n32 * n11) * detInv;
    te[6] = t13 * detInv;
    te[7] = (n21 * n13 - n23 * n11) * detInv;
    te[8] = (n22 * n11 - n21 * n12) * detInv;
    return this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let tmp;
    const m = this.elements;
    tmp = m[1];
    m[1] = m[3];
    m[3] = tmp;
    tmp = m[2];
    m[2] = m[6];
    m[6] = tmp;
    tmp = m[5];
    m[5] = m[7];
    m[7] = tmp;
    return this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(matrix4) {
    return this.setFromMatrix4(matrix4).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(r) {
    const m = this.elements;
    r[0] = m[0];
    r[1] = m[3];
    r[2] = m[6];
    r[3] = m[1];
    r[4] = m[4];
    r[5] = m[7];
    r[6] = m[2];
    r[7] = m[5];
    r[8] = m[8];
    return this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
    const c = Math.cos(rotation);
    const s = Math.sin(rotation);
    this.set(
      sx * c,
      sx * s,
      -sx * (c * cx + s * cy) + cx + tx,
      -sy * s,
      sy * c,
      -sy * (-s * cx + c * cy) + cy + ty,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @deprecated
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(sx, sy) {
    warnOnce("Matrix3: .scale() is deprecated. Use .makeScale() instead.");
    this.premultiply(_m3.makeScale(sx, sy));
    return this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @deprecated
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(theta) {
    warnOnce("Matrix3: .rotate() is deprecated. Use .makeRotation() instead.");
    this.premultiply(_m3.makeRotation(-theta));
    return this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @deprecated
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(tx, ty) {
    warnOnce("Matrix3: .translate() is deprecated. Use .makeTranslation() instead.");
    this.premultiply(_m3.makeTranslation(tx, ty));
    return this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(x, y) {
    if (x.isVector2) {
      this.set(
        1,
        0,
        x.x,
        0,
        1,
        x.y,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        x,
        0,
        1,
        y,
        0,
        0,
        1
      );
    }
    return this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(theta) {
    const c = Math.cos(theta);
    const s = Math.sin(theta);
    this.set(
      c,
      -s,
      0,
      s,
      c,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(x, y) {
    this.set(
      x,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 9; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(array, offset = 0) {
    for (let i = 0; i < 9; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    return array;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
var _m3 = /* @__PURE__ */ new Matrix3();
var LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
);
var XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function createColorManagement() {
  const ColorManagement2 = {
    enabled: true,
    workingColorSpace: LinearSRGBColorSpace,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(color, sourceColorSpace, targetColorSpace) {
      if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
        return color;
      }
      if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
        color.r = SRGBToLinear(color.r);
        color.g = SRGBToLinear(color.g);
        color.b = SRGBToLinear(color.b);
      }
      if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
        color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
        color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
      }
      if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
        color.r = LinearToSRGB(color.r);
        color.g = LinearToSRGB(color.g);
        color.b = LinearToSRGB(color.b);
      }
      return color;
    },
    workingToColorSpace: function(color, targetColorSpace) {
      return this.convert(color, this.workingColorSpace, targetColorSpace);
    },
    colorSpaceToWorking: function(color, sourceColorSpace) {
      return this.convert(color, sourceColorSpace, this.workingColorSpace);
    },
    getPrimaries: function(colorSpace) {
      return this.spaces[colorSpace].primaries;
    },
    getTransfer: function(colorSpace) {
      if (colorSpace === NoColorSpace) return LinearTransfer;
      return this.spaces[colorSpace].transfer;
    },
    getToneMappingMode: function(colorSpace) {
      return this.spaces[colorSpace].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
      return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
    },
    define: function(colorSpaces) {
      Object.assign(this.spaces, colorSpaces);
    },
    // Internal APIs
    _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
      return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(colorSpace) {
      return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
      return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(color, targetColorSpace) {
      warnOnce("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
      return ColorManagement2.workingToColorSpace(color, targetColorSpace);
    },
    toWorkingColorSpace: function(color, sourceColorSpace) {
      warnOnce("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
      return ColorManagement2.colorSpaceToWorking(color, sourceColorSpace);
    }
  };
  const REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
  const REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
  const D65 = [0.3127, 0.329];
  ColorManagement2.define({
    [LinearSRGBColorSpace]: {
      primaries: REC709_PRIMARIES,
      whitePoint: D65,
      transfer: LinearTransfer,
      toXYZ: LINEAR_REC709_TO_XYZ,
      fromXYZ: XYZ_TO_LINEAR_REC709,
      luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
      workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
      outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
    },
    [SRGBColorSpace]: {
      primaries: REC709_PRIMARIES,
      whitePoint: D65,
      transfer: SRGBTransfer,
      toXYZ: LINEAR_REC709_TO_XYZ,
      fromXYZ: XYZ_TO_LINEAR_REC709,
      luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
      outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
    }
  });
  return ColorManagement2;
}
var ColorManagement = /* @__PURE__ */ createColorManagement();
function SRGBToLinear(c) {
  return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
}
function LinearToSRGB(c) {
  return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
}
var _canvas;
var ImageUtils = class {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(image, type = "image/png") {
    if (/^data:/i.test(image.src)) {
      return image.src;
    }
    if (typeof HTMLCanvasElement === "undefined") {
      return image.src;
    }
    let canvas;
    if (image instanceof HTMLCanvasElement) {
      canvas = image;
    } else {
      if (_canvas === void 0) _canvas = createElementNS("canvas");
      _canvas.width = image.width;
      _canvas.height = image.height;
      const context = _canvas.getContext("2d");
      if (image instanceof ImageData) {
        context.putImageData(image, 0, 0);
      } else {
        context.drawImage(image, 0, 0, image.width, image.height);
      }
      canvas = _canvas;
    }
    return canvas.toDataURL(type);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(image) {
    if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
      const canvas = createElementNS("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      const imageData = context.getImageData(0, 0, image.width, image.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i++) {
        data[i] = SRGBToLinear(data[i] / 255) * 255;
      }
      context.putImageData(imageData, 0, 0);
      return canvas;
    } else if (image.data) {
      const data = image.data.slice(0);
      for (let i = 0; i < data.length; i++) {
        if (data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
          data[i] = Math.floor(SRGBToLinear(data[i] / 255) * 255);
        } else {
          data[i] = SRGBToLinear(data[i]);
        }
      }
      return {
        data,
        width: image.width,
        height: image.height
      };
    } else {
      warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");
      return image;
    }
  }
};
var _sourceId = 0;
var Source = class {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(data = null) {
    this.isSource = true;
    Object.defineProperty(this, "id", { value: _sourceId++ });
    this.uuid = generateUUID();
    this.data = data;
    this.dataReady = true;
    this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(target) {
    const data = this.data;
    if (typeof HTMLVideoElement !== "undefined" && data instanceof HTMLVideoElement) {
      target.set(data.videoWidth, data.videoHeight, 0);
    } else if (typeof VideoFrame !== "undefined" && data instanceof VideoFrame) {
      target.set(data.displayWidth, data.displayHeight, 0);
    } else if (data !== null) {
      target.set(data.width, data.height, data.depth || 0);
    } else {
      target.set(0, 0, 0);
    }
    return target;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.images[this.uuid] !== void 0) {
      return meta.images[this.uuid];
    }
    const output = {
      uuid: this.uuid,
      url: ""
    };
    const data = this.data;
    if (data !== null) {
      let url;
      if (Array.isArray(data)) {
        url = [];
        for (let i = 0, l = data.length; i < l; i++) {
          if (data[i].isDataTexture) {
            url.push(serializeImage(data[i].image));
          } else {
            url.push(serializeImage(data[i]));
          }
        }
      } else {
        url = serializeImage(data);
      }
      output.url = url;
    }
    if (!isRootObject) {
      meta.images[this.uuid] = output;
    }
    return output;
  }
};
function serializeImage(image) {
  if (typeof HTMLImageElement !== "undefined" && image instanceof HTMLImageElement || typeof HTMLCanvasElement !== "undefined" && image instanceof HTMLCanvasElement || typeof ImageBitmap !== "undefined" && image instanceof ImageBitmap) {
    return ImageUtils.getDataURL(image);
  } else {
    if (image.data) {
      return {
        data: Array.from(image.data),
        width: image.width,
        height: image.height,
        type: image.data.constructor.name
      };
    } else {
      warn("Texture: Unable to serialize Texture.");
      return {};
    }
  }
}
var _textureId = 0;
var _tempVec3 = /* @__PURE__ */ new Vector3();
var Texture = class _Texture extends EventDispatcher {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(image = _Texture.DEFAULT_IMAGE, mapping = _Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = _Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace) {
    super();
    this.isTexture = true;
    Object.defineProperty(this, "id", { value: _textureId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.source = new Source(image);
    this.mipmaps = [];
    this.mapping = mapping;
    this.channel = 0;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.magFilter = magFilter;
    this.minFilter = minFilter;
    this.anisotropy = anisotropy;
    this.format = format;
    this.internalFormat = null;
    this.type = type;
    this.offset = new Vector2(0, 0);
    this.repeat = new Vector2(1, 1);
    this.center = new Vector2(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = true;
    this.matrix = new Matrix3();
    this.generateMipmaps = true;
    this.premultiplyAlpha = false;
    this.flipY = true;
    this.unpackAlignment = 4;
    this.colorSpace = colorSpace;
    this.userData = {};
    this.updateRanges = [];
    this.version = 0;
    this.onUpdate = null;
    this.renderTarget = null;
    this.isRenderTargetTexture = false;
    this.isArrayTexture = image && image.depth && image.depth > 1 ? true : false;
    this.pmremVersion = 0;
    this.normalized = false;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(_tempVec3).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(_tempVec3).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(_tempVec3).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(value) {
    this.source.data = value;
  }
  /**
   * Updates the texture transformation matrix from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(source) {
    this.name = source.name;
    this.source = source.source;
    this.mipmaps = source.mipmaps.slice(0);
    this.mapping = source.mapping;
    this.channel = source.channel;
    this.wrapS = source.wrapS;
    this.wrapT = source.wrapT;
    this.magFilter = source.magFilter;
    this.minFilter = source.minFilter;
    this.anisotropy = source.anisotropy;
    this.format = source.format;
    this.internalFormat = source.internalFormat;
    this.type = source.type;
    this.normalized = source.normalized;
    this.offset.copy(source.offset);
    this.repeat.copy(source.repeat);
    this.center.copy(source.center);
    this.rotation = source.rotation;
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrix.copy(source.matrix);
    this.generateMipmaps = source.generateMipmaps;
    this.premultiplyAlpha = source.premultiplyAlpha;
    this.flipY = source.flipY;
    this.unpackAlignment = source.unpackAlignment;
    this.colorSpace = source.colorSpace;
    this.renderTarget = source.renderTarget;
    this.isRenderTargetTexture = source.isRenderTargetTexture;
    this.isArrayTexture = source.isArrayTexture;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    this.needsUpdate = true;
    return this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(values) {
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        warn(`Texture.setValues(): parameter '${key}' has value of undefined.`);
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        warn(`Texture.setValues(): property '${key}' does not exist.`);
        continue;
      }
      if (currentValue && newValue && (currentValue.isVector2 && newValue.isVector2)) {
        currentValue.copy(newValue);
      } else if (currentValue && newValue && (currentValue.isVector3 && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else if (currentValue && newValue && (currentValue.isMatrix3 && newValue.isMatrix3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (!isRootObject && meta.textures[this.uuid] !== void 0) {
      return meta.textures[this.uuid];
    }
    const output = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(meta).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (Object.keys(this.userData).length > 0) output.userData = this.userData;
    if (!isRootObject) {
      meta.textures[this.uuid] = output;
    }
    return output;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(uv) {
    if (this.mapping !== UVMapping) return uv;
    uv.applyMatrix3(this.matrix);
    if (uv.x < 0 || uv.x > 1) {
      switch (this.wrapS) {
        case RepeatWrapping:
          uv.x = uv.x - Math.floor(uv.x);
          break;
        case ClampToEdgeWrapping:
          uv.x = uv.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.x) % 2) === 1) {
            uv.x = Math.ceil(uv.x) - uv.x;
          } else {
            uv.x = uv.x - Math.floor(uv.x);
          }
          break;
      }
    }
    if (uv.y < 0 || uv.y > 1) {
      switch (this.wrapT) {
        case RepeatWrapping:
          uv.y = uv.y - Math.floor(uv.y);
          break;
        case ClampToEdgeWrapping:
          uv.y = uv.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(uv.y) % 2) === 1) {
            uv.y = Math.ceil(uv.y) - uv.y;
          } else {
            uv.y = uv.y - Math.floor(uv.y);
          }
          break;
      }
    }
    if (this.flipY) {
      uv.y = 1 - uv.y;
    }
    return uv;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) {
      this.version++;
      this.source.needsUpdate = true;
    }
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(value) {
    if (value === true) {
      this.pmremVersion++;
    }
  }
};
Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;
var Vector4 = class _Vector4 {
  static {
    _Vector4.prototype.isVector4 = true;
  }
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(value) {
    this.z = value;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(value) {
    this.w = value;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(scalar) {
    this.x = scalar;
    this.y = scalar;
    this.z = scalar;
    this.w = scalar;
    return this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(x) {
    this.x = x;
    return this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(y) {
    this.y = y;
    return this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(z) {
    this.z = z;
    return this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(w) {
    this.w = w;
    return this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(index, value) {
    switch (index) {
      case 0:
        this.x = value;
        break;
      case 1:
        this.y = value;
        break;
      case 2:
        this.z = value;
        break;
      case 3:
        this.w = value;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + index);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + index);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(v) {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w !== void 0 ? v.w : 1;
    return this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
    this.w += s;
    return this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(v, s) {
    this.x += v.x * s;
    this.y += v.y * s;
    this.z += v.z * s;
    this.w += v.w * s;
    return this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(s) {
    this.x -= s;
    this.y -= s;
    this.z -= s;
    this.w -= s;
    return this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    this.w *= v.w;
    return this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(m) {
    const x = this.x, y = this.y, z = this.z, w = this.w;
    const e = m.elements;
    this.x = e[0] * x + e[4] * y + e[8] * z + e[12] * w;
    this.y = e[1] * x + e[5] * y + e[9] * z + e[13] * w;
    this.z = e[2] * x + e[6] * y + e[10] * z + e[14] * w;
    this.w = e[3] * x + e[7] * y + e[11] * z + e[15] * w;
    return this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(v) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    this.w /= v.w;
    return this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(q) {
    this.w = 2 * Math.acos(q.w);
    const s = Math.sqrt(1 - q.w * q.w);
    if (s < 1e-4) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = q.x / s;
      this.y = q.y / s;
      this.z = q.z / s;
    }
    return this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(m) {
    let angle, x, y, z;
    const epsilon = 0.01, epsilon2 = 0.1, te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10];
    if (Math.abs(m12 - m21) < epsilon && Math.abs(m13 - m31) < epsilon && Math.abs(m23 - m32) < epsilon) {
      if (Math.abs(m12 + m21) < epsilon2 && Math.abs(m13 + m31) < epsilon2 && Math.abs(m23 + m32) < epsilon2 && Math.abs(m11 + m22 + m33 - 3) < epsilon2) {
        this.set(1, 0, 0, 0);
        return this;
      }
      angle = Math.PI;
      const xx = (m11 + 1) / 2;
      const yy = (m22 + 1) / 2;
      const zz = (m33 + 1) / 2;
      const xy = (m12 + m21) / 4;
      const xz = (m13 + m31) / 4;
      const yz = (m23 + m32) / 4;
      if (xx > yy && xx > zz) {
        if (xx < epsilon) {
          x = 0;
          y = 0.707106781;
          z = 0.707106781;
        } else {
          x = Math.sqrt(xx);
          y = xy / x;
          z = xz / x;
        }
      } else if (yy > zz) {
        if (yy < epsilon) {
          x = 0.707106781;
          y = 0;
          z = 0.707106781;
        } else {
          y = Math.sqrt(yy);
          x = xy / y;
          z = yz / y;
        }
      } else {
        if (zz < epsilon) {
          x = 0.707106781;
          y = 0.707106781;
          z = 0;
        } else {
          z = Math.sqrt(zz);
          x = xz / z;
          y = yz / z;
        }
      }
      this.set(x, y, z, angle);
      return this;
    }
    let s = Math.sqrt((m32 - m23) * (m32 - m23) + (m13 - m31) * (m13 - m31) + (m21 - m12) * (m21 - m12));
    if (Math.abs(s) < 1e-3) s = 1;
    this.x = (m32 - m23) / s;
    this.y = (m13 - m31) / s;
    this.z = (m21 - m12) / s;
    this.w = Math.acos((m11 + m22 + m33 - 1) / 2);
    return this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(m) {
    const e = m.elements;
    this.x = e[12];
    this.y = e[13];
    this.z = e[14];
    this.w = e[15];
    return this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(v) {
    this.x = Math.min(this.x, v.x);
    this.y = Math.min(this.y, v.y);
    this.z = Math.min(this.z, v.z);
    this.w = Math.min(this.w, v.w);
    return this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(v) {
    this.x = Math.max(this.x, v.x);
    this.y = Math.max(this.y, v.y);
    this.z = Math.max(this.z, v.z);
    this.w = Math.max(this.w, v.w);
    return this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(min, max) {
    this.x = clamp(this.x, min.x, max.x);
    this.y = clamp(this.y, min.y, max.y);
    this.z = clamp(this.z, min.z, max.z);
    this.w = clamp(this.w, min.w, max.w);
    return this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(minVal, maxVal) {
    this.x = clamp(this.x, minVal, maxVal);
    this.y = clamp(this.y, minVal, maxVal);
    this.z = clamp(this.z, minVal, maxVal);
    this.w = clamp(this.w, minVal, maxVal);
    return this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(min, max) {
    const length = this.length();
    return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    this.x = Math.trunc(this.x);
    this.y = Math.trunc(this.y);
    this.z = Math.trunc(this.z);
    this.w = Math.trunc(this.w);
    return this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(length) {
    return this.normalize().multiplyScalar(length);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(v, alpha) {
    this.x += (v.x - this.x) * alpha;
    this.y += (v.y - this.y) * alpha;
    this.z += (v.z - this.z) * alpha;
    this.w += (v.w - this.w) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(v1, v2, alpha) {
    this.x = v1.x + (v2.x - v1.x) * alpha;
    this.y = v1.y + (v2.y - v1.y) * alpha;
    this.z = v1.z + (v2.z - v1.z) * alpha;
    this.w = v1.w + (v2.w - v1.w) * alpha;
    return this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(v) {
    return v.x === this.x && v.y === this.y && v.z === this.z && v.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(array, offset = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    this.w = array[offset + 3];
    return this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.x;
    array[offset + 1] = this.y;
    array[offset + 2] = this.z;
    array[offset + 3] = this.w;
    return array;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(attribute, index) {
    this.x = attribute.getX(index);
    this.y = attribute.getY(index);
    this.z = attribute.getZ(index);
    this.w = attribute.getW(index);
    return this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  }
  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }
};
var Matrix4 = class _Matrix4 {
  static {
    _Matrix4.prototype.isMatrix4 = true;
  }
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
    }
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    const te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new _Matrix4().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0];
    te[1] = me[1];
    te[2] = me[2];
    te[3] = me[3];
    te[4] = me[4];
    te[5] = me[5];
    te[6] = me[6];
    te[7] = me[7];
    te[8] = me[8];
    te[9] = me[9];
    te[10] = me[10];
    te[11] = me[11];
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    te[15] = me[15];
    return this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(m) {
    const te = this.elements, me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(m) {
    const me = m.elements;
    this.set(
      me[0],
      me[3],
      me[6],
      0,
      me[1],
      me[4],
      me[7],
      0,
      me[2],
      me[5],
      me[8],
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(xAxis, yAxis, zAxis) {
    if (this.determinantAffine() === 0) {
      xAxis.set(1, 0, 0);
      yAxis.set(0, 1, 0);
      zAxis.set(0, 0, 1);
      return this;
    }
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(xAxis, yAxis, zAxis) {
    this.set(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(m) {
    if (m.determinantAffine() === 0) {
      return this.identity();
    }
    const te = this.elements;
    const me = m.elements;
    const scaleX = 1 / _v1$7.setFromMatrixColumn(m, 0).length();
    const scaleY = 1 / _v1$7.setFromMatrixColumn(m, 1).length();
    const scaleZ = 1 / _v1$7.setFromMatrixColumn(m, 2).length();
    te[0] = me[0] * scaleX;
    te[1] = me[1] * scaleX;
    te[2] = me[2] * scaleX;
    te[3] = 0;
    te[4] = me[4] * scaleY;
    te[5] = me[5] * scaleY;
    te[6] = me[6] * scaleY;
    te[7] = 0;
    te[8] = me[8] * scaleZ;
    te[9] = me[9] * scaleZ;
    te[10] = me[10] * scaleZ;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(euler) {
    const te = this.elements;
    const x = euler.x, y = euler.y, z = euler.z;
    const a = Math.cos(x), b = Math.sin(x);
    const c = Math.cos(y), d = Math.sin(y);
    const e = Math.cos(z), f = Math.sin(z);
    if (euler.order === "XYZ") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;
      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;
      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === "YXZ") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;
      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;
      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === "ZXY") {
      const ce = c * e, cf = c * f, de = d * e, df = d * f;
      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;
      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;
      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === "ZYX") {
      const ae = a * e, af = a * f, be = b * e, bf = b * f;
      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;
      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;
      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === "YZX") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;
      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;
      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === "XZY") {
      const ac = a * c, ad = a * d, bc = b * c, bd = b * d;
      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;
      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;
      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    }
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(q) {
    return this.compose(_zero, q, _one);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(eye, target, up) {
    const te = this.elements;
    _z.subVectors(eye, target);
    if (_z.lengthSq() === 0) {
      _z.z = 1;
    }
    _z.normalize();
    _x.crossVectors(up, _z);
    if (_x.lengthSq() === 0) {
      if (Math.abs(up.z) === 1) {
        _z.x += 1e-4;
      } else {
        _z.z += 1e-4;
      }
      _z.normalize();
      _x.crossVectors(up, _z);
    }
    _x.normalize();
    _y.crossVectors(_z, _x);
    te[0] = _x.x;
    te[4] = _y.x;
    te[8] = _z.x;
    te[1] = _x.y;
    te[5] = _y.y;
    te[9] = _z.y;
    te[2] = _x.z;
    te[6] = _y.z;
    te[10] = _z.z;
    return this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(m) {
    return this.multiplyMatrices(this, m);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(m) {
    return this.multiplyMatrices(m, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(a, b) {
    const ae = a.elements;
    const be = b.elements;
    const te = this.elements;
    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(s) {
    const te = this.elements;
    te[0] *= s;
    te[4] *= s;
    te[8] *= s;
    te[12] *= s;
    te[1] *= s;
    te[5] *= s;
    te[9] *= s;
    te[13] *= s;
    te[2] *= s;
    te[6] *= s;
    te[10] *= s;
    te[14] *= s;
    te[3] *= s;
    te[7] *= s;
    te[11] *= s;
    te[15] *= s;
    return this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).
   *
   * @return {number} The determinant.
   */
  determinant() {
    const te = this.elements;
    const n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
    const n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
    const n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
    const n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];
    const t11 = n23 * n34 - n24 * n33;
    const t12 = n22 * n34 - n24 * n32;
    const t13 = n22 * n33 - n23 * n32;
    const t21 = n21 * n34 - n24 * n31;
    const t22 = n21 * n33 - n23 * n31;
    const t23 = n21 * n32 - n22 * n31;
    return n11 * (n42 * t11 - n43 * t12 + n44 * t13) - n12 * (n41 * t11 - n43 * t21 + n44 * t22) + n13 * (n41 * t12 - n42 * t21 + n44 * t23) - n14 * (n41 * t13 - n42 * t22 + n43 * t23);
  }
  /**
   * Computes and returns the determinant of the 4x4 matrix, but assumes the
   * matrix is affine, saving some computations.
   *
   * For affine matrices (like an object's world matrix), this value equals the
   * full 4x4 {@link Matrix4#determinant} but is cheaper to compute.
   *
   * Assumes the bottom row is [0, 0, 0, 1].
   *
   * @return {number} The determinant of the matrix.
   */
  determinantAffine() {
    const te = this.elements;
    const n11 = te[0], n12 = te[4], n13 = te[8];
    const n21 = te[1], n22 = te[5], n23 = te[9];
    const n31 = te[2], n32 = te[6], n33 = te[10];
    return n11 * (n22 * n33 - n23 * n32) - n12 * (n21 * n33 - n23 * n31) + n13 * (n21 * n32 - n22 * n31);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const te = this.elements;
    let tmp;
    tmp = te[1];
    te[1] = te[4];
    te[4] = tmp;
    tmp = te[2];
    te[2] = te[8];
    te[8] = tmp;
    tmp = te[6];
    te[6] = te[9];
    te[9] = tmp;
    tmp = te[3];
    te[3] = te[12];
    te[12] = tmp;
    tmp = te[7];
    te[7] = te[13];
    te[13] = tmp;
    tmp = te[11];
    te[11] = te[14];
    te[14] = tmp;
    return this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(x, y, z) {
    const te = this.elements;
    if (x.isVector3) {
      te[12] = x.x;
      te[13] = x.y;
      te[14] = x.z;
    } else {
      te[12] = x;
      te[13] = y;
      te[14] = z;
    }
    return this;
  }
  /**
   * Inverts this matrix, using the [analytic method](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n41 = te[3], n12 = te[4], n22 = te[5], n32 = te[6], n42 = te[7], n13 = te[8], n23 = te[9], n33 = te[10], n43 = te[11], n14 = te[12], n24 = te[13], n34 = te[14], n44 = te[15], t1 = n11 * n22 - n21 * n12, t2 = n11 * n32 - n31 * n12, t3 = n11 * n42 - n41 * n12, t4 = n21 * n32 - n31 * n22, t5 = n21 * n42 - n41 * n22, t6 = n31 * n42 - n41 * n32, t7 = n13 * n24 - n23 * n14, t8 = n13 * n34 - n33 * n14, t9 = n13 * n44 - n43 * n14, t10 = n23 * n34 - n33 * n24, t11 = n23 * n44 - n43 * n24, t12 = n33 * n44 - n43 * n34;
    const det = t1 * t12 - t2 * t11 + t3 * t10 + t4 * t9 - t5 * t8 + t6 * t7;
    if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const detInv = 1 / det;
    te[0] = (n22 * t12 - n32 * t11 + n42 * t10) * detInv;
    te[1] = (n31 * t11 - n21 * t12 - n41 * t10) * detInv;
    te[2] = (n24 * t6 - n34 * t5 + n44 * t4) * detInv;
    te[3] = (n33 * t5 - n23 * t6 - n43 * t4) * detInv;
    te[4] = (n32 * t9 - n12 * t12 - n42 * t8) * detInv;
    te[5] = (n11 * t12 - n31 * t9 + n41 * t8) * detInv;
    te[6] = (n34 * t3 - n14 * t6 - n44 * t2) * detInv;
    te[7] = (n13 * t6 - n33 * t3 + n43 * t2) * detInv;
    te[8] = (n12 * t11 - n22 * t9 + n42 * t7) * detInv;
    te[9] = (n21 * t9 - n11 * t11 - n41 * t7) * detInv;
    te[10] = (n14 * t5 - n24 * t3 + n44 * t1) * detInv;
    te[11] = (n23 * t3 - n13 * t5 - n43 * t1) * detInv;
    te[12] = (n22 * t8 - n12 * t10 - n32 * t7) * detInv;
    te[13] = (n11 * t10 - n21 * t8 + n31 * t7) * detInv;
    te[14] = (n24 * t2 - n14 * t4 - n34 * t1) * detInv;
    te[15] = (n13 * t4 - n23 * t2 + n33 * t1) * detInv;
    return this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(v) {
    const te = this.elements;
    const x = v.x, y = v.y, z = v.z;
    te[0] *= x;
    te[4] *= y;
    te[8] *= z;
    te[1] *= x;
    te[5] *= y;
    te[9] *= z;
    te[2] *= x;
    te[6] *= y;
    te[10] *= z;
    te[3] *= x;
    te[7] *= y;
    te[11] *= z;
    return this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(x, y, z) {
    if (x.isVector3) {
      this.set(
        1,
        0,
        0,
        x.x,
        0,
        1,
        0,
        x.y,
        0,
        0,
        1,
        x.z,
        0,
        0,
        0,
        1
      );
    } else {
      this.set(
        1,
        0,
        0,
        x,
        0,
        1,
        0,
        y,
        0,
        0,
        1,
        z,
        0,
        0,
        0,
        1
      );
    }
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      1,
      0,
      0,
      0,
      0,
      c,
      -s,
      0,
      0,
      s,
      c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      c,
      0,
      s,
      0,
      0,
      1,
      0,
      0,
      -s,
      0,
      c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(theta) {
    const c = Math.cos(theta), s = Math.sin(theta);
    this.set(
      c,
      -s,
      0,
      0,
      s,
      c,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(axis, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const x = axis.x, y = axis.y, z = axis.z;
    const tx = t * x, ty = t * y;
    this.set(
      tx * x + c,
      tx * y - s * z,
      tx * z + s * y,
      0,
      tx * y + s * z,
      ty * y + c,
      ty * z - s * x,
      0,
      tx * z - s * y,
      ty * z + s * x,
      t * z * z + c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(x, y, z) {
    this.set(
      x,
      0,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      0,
      z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(xy, xz, yx, yz, zx, zy) {
    this.set(
      1,
      yx,
      zx,
      0,
      xy,
      1,
      zy,
      0,
      xz,
      yz,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(position, quaternion, scale) {
    const te = this.elements;
    const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const sx = scale.x, sy = scale.y, sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(position, quaternion, scale) {
    const te = this.elements;
    position.x = te[12];
    position.y = te[13];
    position.z = te[14];
    const det = this.determinantAffine();
    if (det === 0) {
      scale.set(1, 1, 1);
      quaternion.identity();
      return this;
    }
    let sx = _v1$7.set(te[0], te[1], te[2]).length();
    const sy = _v1$7.set(te[4], te[5], te[6]).length();
    const sz = _v1$7.set(te[8], te[9], te[10]).length();
    if (det < 0) sx = -sx;
    _m1$2.copy(this);
    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;
    _m1$2.elements[0] *= invSX;
    _m1$2.elements[1] *= invSX;
    _m1$2.elements[2] *= invSX;
    _m1$2.elements[4] *= invSY;
    _m1$2.elements[5] *= invSY;
    _m1$2.elements[6] *= invSY;
    _m1$2.elements[8] *= invSZ;
    _m1$2.elements[9] *= invSZ;
    _m1$2.elements[10] *= invSZ;
    quaternion.setFromRotationMatrix(_m1$2);
    scale.x = sx;
    scale.y = sy;
    scale.z = sz;
    return this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false) {
    const te = this.elements;
    const x = 2 * near / (right - left);
    const y = 2 * near / (top - bottom);
    const a = (right + left) / (right - left);
    const b = (top + bottom) / (top - bottom);
    let c, d;
    if (reversedDepth) {
      c = near / (far - near);
      d = far * near / (far - near);
    } else {
      if (coordinateSystem === WebGLCoordinateSystem) {
        c = -(far + near) / (far - near);
        d = -2 * far * near / (far - near);
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        c = -far / (far - near);
        d = -far * near / (far - near);
      } else {
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + coordinateSystem);
      }
    }
    te[0] = x;
    te[4] = 0;
    te[8] = a;
    te[12] = 0;
    te[1] = 0;
    te[5] = y;
    te[9] = b;
    te[13] = 0;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = -1;
    te[15] = 0;
    return this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem, reversedDepth = false) {
    const te = this.elements;
    const x = 2 / (right - left);
    const y = 2 / (top - bottom);
    const a = -(right + left) / (right - left);
    const b = -(top + bottom) / (top - bottom);
    let c, d;
    if (reversedDepth) {
      c = 1 / (far - near);
      d = far / (far - near);
    } else {
      if (coordinateSystem === WebGLCoordinateSystem) {
        c = -2 / (far - near);
        d = -(far + near) / (far - near);
      } else if (coordinateSystem === WebGPUCoordinateSystem) {
        c = -1 / (far - near);
        d = -near / (far - near);
      } else {
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + coordinateSystem);
      }
    }
    te[0] = x;
    te[4] = 0;
    te[8] = 0;
    te[12] = a;
    te[1] = 0;
    te[5] = y;
    te[9] = 0;
    te[13] = b;
    te[2] = 0;
    te[6] = 0;
    te[10] = c;
    te[14] = d;
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[15] = 1;
    return this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;
    for (let i = 0; i < 16; i++) {
      if (te[i] !== me[i]) return false;
    }
    return true;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(array, offset = 0) {
    for (let i = 0; i < 16; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(array = [], offset = 0) {
    const te = this.elements;
    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];
    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];
    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];
    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];
    return array;
  }
};
var _v1$7 = /* @__PURE__ */ new Vector3();
var _m1$2 = /* @__PURE__ */ new Matrix4();
var _zero = /* @__PURE__ */ new Vector3(0, 0, 0);
var _one = /* @__PURE__ */ new Vector3(1, 1, 1);
var _x = /* @__PURE__ */ new Vector3();
var _y = /* @__PURE__ */ new Vector3();
var _z = /* @__PURE__ */ new Vector3();
var _matrix$2 = /* @__PURE__ */ new Matrix4();
var _quaternion$4 = /* @__PURE__ */ new Quaternion();
var Euler = class _Euler {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(x = 0, y = 0, z = 0, order = _Euler.DEFAULT_ORDER) {
    this.isEuler = true;
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(value) {
    this._x = value;
    this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(value) {
    this._y = value;
    this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(value) {
    this._z = value;
    this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(value) {
    this._order = value;
    this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(x, y, z, order = this._order) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._order = order;
    this._onChangeCallback();
    return this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(euler) {
    this._x = euler._x;
    this._y = euler._y;
    this._z = euler._z;
    this._order = euler._order;
    this._onChangeCallback();
    return this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(m, order = this._order, update = true) {
    const te = m.elements;
    const m11 = te[0], m12 = te[4], m13 = te[8];
    const m21 = te[1], m22 = te[5], m23 = te[9];
    const m31 = te[2], m32 = te[6], m33 = te[10];
    switch (order) {
      case "XYZ":
        this._y = Math.asin(clamp(m13, -1, 1));
        if (Math.abs(m13) < 0.9999999) {
          this._x = Math.atan2(-m23, m33);
          this._z = Math.atan2(-m12, m11);
        } else {
          this._x = Math.atan2(m32, m22);
          this._z = 0;
        }
        break;
      case "YXZ":
        this._x = Math.asin(-clamp(m23, -1, 1));
        if (Math.abs(m23) < 0.9999999) {
          this._y = Math.atan2(m13, m33);
          this._z = Math.atan2(m21, m22);
        } else {
          this._y = Math.atan2(-m31, m11);
          this._z = 0;
        }
        break;
      case "ZXY":
        this._x = Math.asin(clamp(m32, -1, 1));
        if (Math.abs(m32) < 0.9999999) {
          this._y = Math.atan2(-m31, m33);
          this._z = Math.atan2(-m12, m22);
        } else {
          this._y = 0;
          this._z = Math.atan2(m21, m11);
        }
        break;
      case "ZYX":
        this._y = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < 0.9999999) {
          this._x = Math.atan2(m32, m33);
          this._z = Math.atan2(m21, m11);
        } else {
          this._x = 0;
          this._z = Math.atan2(-m12, m22);
        }
        break;
      case "YZX":
        this._z = Math.asin(clamp(m21, -1, 1));
        if (Math.abs(m21) < 0.9999999) {
          this._x = Math.atan2(-m23, m22);
          this._y = Math.atan2(-m31, m11);
        } else {
          this._x = 0;
          this._y = Math.atan2(m13, m33);
        }
        break;
      case "XZY":
        this._z = Math.asin(-clamp(m12, -1, 1));
        if (Math.abs(m12) < 0.9999999) {
          this._x = Math.atan2(m32, m22);
          this._y = Math.atan2(m13, m11);
        } else {
          this._x = Math.atan2(-m23, m33);
          this._y = 0;
        }
        break;
      default:
        warn("Euler: .setFromRotationMatrix() encountered an unknown order: " + order);
    }
    this._order = order;
    if (update === true) this._onChangeCallback();
    return this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(q, order, update) {
    _matrix$2.makeRotationFromQuaternion(q);
    return this.setFromRotationMatrix(_matrix$2, order, update);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(v, order = this._order) {
    return this.set(v.x, v.y, v.z, order);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(newOrder) {
    _quaternion$4.setFromEuler(this);
    return this.setFromQuaternion(_quaternion$4, newOrder);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(euler) {
    return euler._x === this._x && euler._y === this._y && euler._z === this._z && euler._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(array) {
    this._x = array[0];
    this._y = array[1];
    this._z = array[2];
    if (array[3] !== void 0) this._order = array[3];
    this._onChangeCallback();
    return this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this._x;
    array[offset + 1] = this._y;
    array[offset + 2] = this._z;
    array[offset + 3] = this._order;
    return array;
  }
  _onChange(callback) {
    this._onChangeCallback = callback;
    return this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x;
    yield this._y;
    yield this._z;
    yield this._order;
  }
};
Euler.DEFAULT_ORDER = "XYZ";
var Layers = class {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1 | 0;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(layer) {
    this.mask = (1 << layer | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(layer) {
    this.mask |= 1 << layer | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = 4294967295 | 0;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(layer) {
    this.mask ^= 1 << layer | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(layer) {
    this.mask &= ~(1 << layer | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(layers) {
    return (this.mask & layers.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(layer) {
    return (this.mask & (1 << layer | 0)) !== 0;
  }
};
var _object3DId = 0;
var _v1$6 = /* @__PURE__ */ new Vector3();
var _q1 = /* @__PURE__ */ new Quaternion();
var _m1$1 = /* @__PURE__ */ new Matrix4();
var _target = /* @__PURE__ */ new Vector3();
var _position$4 = /* @__PURE__ */ new Vector3();
var _scale$3 = /* @__PURE__ */ new Vector3();
var _quaternion$3 = /* @__PURE__ */ new Quaternion();
var _xAxis = /* @__PURE__ */ new Vector3(1, 0, 0);
var _yAxis = /* @__PURE__ */ new Vector3(0, 1, 0);
var _zAxis = /* @__PURE__ */ new Vector3(0, 0, 1);
var _addedEvent = { type: "added" };
var _removedEvent = { type: "removed" };
var _childaddedEvent = { type: "childadded", child: null };
var _childremovedEvent = { type: "childremoved", child: null };
var Object3D = class _Object3D extends EventDispatcher {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super();
    this.isObject3D = true;
    Object.defineProperty(this, "id", { value: _object3DId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = _Object3D.DEFAULT_UP.clone();
    const position = new Vector3();
    const rotation = new Euler();
    const quaternion = new Quaternion();
    const scale = new Vector3(1, 1, 1);
    function onRotationChange() {
      quaternion.setFromEuler(rotation, false);
    }
    function onQuaternionChange() {
      rotation.setFromQuaternion(quaternion, void 0, false);
    }
    rotation._onChange(onRotationChange);
    quaternion._onChange(onQuaternionChange);
    Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: true,
        enumerable: true,
        value: position
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: true,
        enumerable: true,
        value: rotation
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: true,
        enumerable: true,
        value: quaternion
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: true,
        enumerable: true,
        value: scale
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new Matrix4()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Matrix3()
      }
    });
    this.matrix = new Matrix4();
    this.matrixWorld = new Matrix4();
    this.matrixAutoUpdate = _Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
    this.matrixWorldAutoUpdate = _Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;
    this.matrixWorldNeedsUpdate = false;
    this.layers = new Layers();
    this.visible = true;
    this.castShadow = false;
    this.receiveShadow = false;
    this.frustumCulled = true;
    this.renderOrder = 0;
    this.animations = [];
    this.customDepthMaterial = void 0;
    this.customDistanceMaterial = void 0;
    this.static = false;
    this.userData = {};
    this.pivot = null;
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(matrix) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    this.matrix.premultiply(matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(q) {
    this.quaternion.premultiply(q);
    return this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(axis, angle) {
    this.quaternion.setFromAxisAngle(axis, angle);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(euler) {
    this.quaternion.setFromEuler(euler, true);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(m) {
    this.quaternion.setFromRotationMatrix(m);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(q) {
    this.quaternion.copy(q);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.multiply(_q1);
    return this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(axis, angle) {
    _q1.setFromAxisAngle(axis, angle);
    this.quaternion.premultiply(_q1);
    return this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(angle) {
    return this.rotateOnAxis(_xAxis, angle);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(angle) {
    return this.rotateOnAxis(_yAxis, angle);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(angle) {
    return this.rotateOnAxis(_zAxis, angle);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(axis, distance) {
    _v1$6.copy(axis).applyQuaternion(this.quaternion);
    this.position.add(_v1$6.multiplyScalar(distance));
    return this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(distance) {
    return this.translateOnAxis(_xAxis, distance);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(distance) {
    return this.translateOnAxis(_yAxis, distance);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(distance) {
    return this.translateOnAxis(_zAxis, distance);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's world space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(vector) {
    this.updateWorldMatrix(true, false);
    return vector.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(x, y, z) {
    if (x.isVector3) {
      _target.copy(x);
    } else {
      _target.set(x, y, z);
    }
    const parent = this.parent;
    this.updateWorldMatrix(true, false);
    _position$4.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      _m1$1.lookAt(_position$4, _target, this.up);
    } else {
      _m1$1.lookAt(_target, _position$4, this.up);
    }
    this.quaternion.setFromRotationMatrix(_m1$1);
    if (parent) {
      _m1$1.extractRotation(parent.matrixWorld);
      _q1.setFromRotationMatrix(_m1$1);
      this.quaternion.premultiply(_q1.invert());
    }
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    if (object === this) {
      error("Object3D.add: object can't be added as a child of itself.", object);
      return this;
    }
    if (object && object.isObject3D) {
      object.removeFromParent();
      object.parent = this;
      this.children.push(object);
      object.dispatchEvent(_addedEvent);
      _childaddedEvent.child = object;
      this.dispatchEvent(_childaddedEvent);
      _childaddedEvent.child = null;
    } else {
      error("Object3D.add: object not an instance of THREE.Object3D.", object);
    }
    return this;
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(object) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) {
        this.remove(arguments[i]);
      }
      return this;
    }
    const index = this.children.indexOf(object);
    if (index !== -1) {
      object.parent = null;
      this.children.splice(index, 1);
      object.dispatchEvent(_removedEvent);
      _childremovedEvent.child = object;
      this.dispatchEvent(_childremovedEvent);
      _childremovedEvent.child = null;
    }
    return this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const parent = this.parent;
    if (parent !== null) {
      parent.remove(this);
    }
    return this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(object) {
    this.updateWorldMatrix(true, false);
    _m1$1.copy(this.matrixWorld).invert();
    if (object.parent !== null) {
      object.parent.updateWorldMatrix(true, false);
      _m1$1.multiply(object.parent.matrixWorld);
    }
    object.applyMatrix4(_m1$1);
    object.removeFromParent();
    object.parent = this;
    this.children.push(object);
    object.updateWorldMatrix(false, true);
    object.dispatchEvent(_addedEvent);
    _childaddedEvent.child = object;
    this.dispatchEvent(_childaddedEvent);
    _childaddedEvent.child = null;
    return this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(id) {
    return this.getObjectByProperty("id", id);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(name) {
    return this.getObjectByProperty("name", name);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(name, value) {
    if (this[name] === value) return this;
    for (let i = 0, l = this.children.length; i < l; i++) {
      const child = this.children[i];
      const object = child.getObjectByProperty(name, value);
      if (object !== void 0) {
        return object;
      }
    }
    return void 0;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(name, value, result = []) {
    if (this[name] === value) result.push(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].getObjectsByProperty(name, value, result);
    }
    return result;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(target) {
    this.updateWorldMatrix(true, false);
    return target.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$4, target, _scale$3);
    return target;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(target) {
    this.updateWorldMatrix(true, false);
    this.matrixWorld.decompose(_position$4, _quaternion$3, target);
    return target;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(target) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return target.set(e[8], e[9], e[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(callback) {
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverse(callback);
    }
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(callback) {
    if (this.visible === false) return;
    callback(this);
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].traverseVisible(callback);
    }
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(callback) {
    const parent = this.parent;
    if (parent !== null) {
      callback(parent);
      parent.traverseAncestors(callback);
    }
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const pivot = this.pivot;
    if (pivot !== null) {
      const px = pivot.x, py = pivot.y, pz = pivot.z;
      const te = this.matrix.elements;
      te[12] += px - te[0] * px - te[4] * py - te[8] * pz;
      te[13] += py - te[1] * px - te[5] * py - te[9] * pz;
      te[14] += pz - te[2] * px - te[6] * py - te[10] * pz;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || force) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      force = true;
    }
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      const child = children[i];
      child.updateMatrixWorld(force);
    }
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldNeedsUpdate} is `false`.
   */
  updateWorldMatrix(updateParents, updateChildren, force = false) {
    const parent = this.parent;
    if (updateParents === true && parent !== null) {
      parent.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || force) {
      if (this.matrixWorldAutoUpdate === true) {
        if (this.parent === null) {
          this.matrixWorld.copy(this.matrix);
        } else {
          this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
        }
      }
      this.matrixWorldNeedsUpdate = false;
      force = true;
    }
    if (updateChildren === true) {
      const children = this.children;
      for (let i = 0, l = children.length; i < l; i++) {
        const child = children[i];
        child.updateWorldMatrix(false, true, force);
      }
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    const output = {};
    if (isRootObject) {
      meta = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      };
      output.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    const object = {};
    object.uuid = this.uuid;
    object.type = this.type;
    if (this.name !== "") object.name = this.name;
    if (this.castShadow === true) object.castShadow = true;
    if (this.receiveShadow === true) object.receiveShadow = true;
    if (this.visible === false) object.visible = false;
    if (this.frustumCulled === false) object.frustumCulled = false;
    if (this.renderOrder !== 0) object.renderOrder = this.renderOrder;
    if (this.static !== false) object.static = this.static;
    if (Object.keys(this.userData).length > 0) object.userData = this.userData;
    object.layers = this.layers.mask;
    object.matrix = this.matrix.toArray();
    object.up = this.up.toArray();
    if (this.pivot !== null) object.pivot = this.pivot.toArray();
    if (this.matrixAutoUpdate === false) object.matrixAutoUpdate = false;
    if (this.morphTargetDictionary !== void 0) object.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary);
    if (this.morphTargetInfluences !== void 0) object.morphTargetInfluences = this.morphTargetInfluences.slice();
    if (this.isInstancedMesh) {
      object.type = "InstancedMesh";
      object.count = this.count;
      object.instanceMatrix = this.instanceMatrix.toJSON();
      if (this.instanceColor !== null) object.instanceColor = this.instanceColor.toJSON();
    }
    if (this.isBatchedMesh) {
      object.type = "BatchedMesh";
      object.perObjectFrustumCulled = this.perObjectFrustumCulled;
      object.sortObjects = this.sortObjects;
      object.drawRanges = this._drawRanges;
      object.reservedRanges = this._reservedRanges;
      object.geometryInfo = this._geometryInfo.map((info) => ({
        ...info,
        boundingBox: info.boundingBox ? info.boundingBox.toJSON() : void 0,
        boundingSphere: info.boundingSphere ? info.boundingSphere.toJSON() : void 0
      }));
      object.instanceInfo = this._instanceInfo.map((info) => ({ ...info }));
      object.availableInstanceIds = this._availableInstanceIds.slice();
      object.availableGeometryIds = this._availableGeometryIds.slice();
      object.nextIndexStart = this._nextIndexStart;
      object.nextVertexStart = this._nextVertexStart;
      object.geometryCount = this._geometryCount;
      object.maxInstanceCount = this._maxInstanceCount;
      object.maxVertexCount = this._maxVertexCount;
      object.maxIndexCount = this._maxIndexCount;
      object.geometryInitialized = this._geometryInitialized;
      object.matricesTexture = this._matricesTexture.toJSON(meta);
      object.indirectTexture = this._indirectTexture.toJSON(meta);
      if (this._colorsTexture !== null) {
        object.colorsTexture = this._colorsTexture.toJSON(meta);
      }
      if (this.boundingSphere !== null) {
        object.boundingSphere = this.boundingSphere.toJSON();
      }
      if (this.boundingBox !== null) {
        object.boundingBox = this.boundingBox.toJSON();
      }
    }
    function serialize(library, element) {
      if (library[element.uuid] === void 0) {
        library[element.uuid] = element.toJSON(meta);
      }
      return element.uuid;
    }
    if (this.isScene) {
      if (this.background) {
        if (this.background.isColor) {
          object.background = this.background.toJSON();
        } else if (this.background.isTexture) {
          object.background = this.background.toJSON(meta).uuid;
        }
      }
      if (this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true) {
        object.environment = this.environment.toJSON(meta).uuid;
      }
    } else if (this.isMesh || this.isLine || this.isPoints) {
      object.geometry = serialize(meta.geometries, this.geometry);
      const parameters = this.geometry.parameters;
      if (parameters !== void 0 && parameters.shapes !== void 0) {
        const shapes = parameters.shapes;
        if (Array.isArray(shapes)) {
          for (let i = 0, l = shapes.length; i < l; i++) {
            const shape = shapes[i];
            serialize(meta.shapes, shape);
          }
        } else {
          serialize(meta.shapes, shapes);
        }
      }
    }
    if (this.isSkinnedMesh) {
      object.bindMode = this.bindMode;
      object.bindMatrix = this.bindMatrix.toArray();
      if (this.skeleton !== void 0) {
        serialize(meta.skeletons, this.skeleton);
        object.skeleton = this.skeleton.uuid;
      }
    }
    if (this.material !== void 0) {
      if (Array.isArray(this.material)) {
        const uuids = [];
        for (let i = 0, l = this.material.length; i < l; i++) {
          uuids.push(serialize(meta.materials, this.material[i]));
        }
        object.material = uuids;
      } else {
        object.material = serialize(meta.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      object.children = [];
      for (let i = 0; i < this.children.length; i++) {
        object.children.push(this.children[i].toJSON(meta).object);
      }
    }
    if (this.animations.length > 0) {
      object.animations = [];
      for (let i = 0; i < this.animations.length; i++) {
        const animation = this.animations[i];
        object.animations.push(serialize(meta.animations, animation));
      }
    }
    if (isRootObject) {
      const geometries = extractFromCache(meta.geometries);
      const materials = extractFromCache(meta.materials);
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      const shapes = extractFromCache(meta.shapes);
      const skeletons = extractFromCache(meta.skeletons);
      const animations = extractFromCache(meta.animations);
      const nodes = extractFromCache(meta.nodes);
      if (geometries.length > 0) output.geometries = geometries;
      if (materials.length > 0) output.materials = materials;
      if (textures.length > 0) output.textures = textures;
      if (images.length > 0) output.images = images;
      if (shapes.length > 0) output.shapes = shapes;
      if (skeletons.length > 0) output.skeletons = skeletons;
      if (animations.length > 0) output.animations = animations;
      if (nodes.length > 0) output.nodes = nodes;
    }
    output.object = object;
    return output;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data = cache[key];
        delete data.metadata;
        values.push(data);
      }
      return values;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(recursive) {
    return new this.constructor().copy(this, recursive);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(source, recursive = true) {
    this.name = source.name;
    this.up.copy(source.up);
    this.position.copy(source.position);
    this.rotation.order = source.rotation.order;
    this.quaternion.copy(source.quaternion);
    this.scale.copy(source.scale);
    this.pivot = source.pivot !== null ? source.pivot.clone() : null;
    this.matrix.copy(source.matrix);
    this.matrixWorld.copy(source.matrixWorld);
    this.matrixAutoUpdate = source.matrixAutoUpdate;
    this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
    this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;
    this.layers.mask = source.layers.mask;
    this.visible = source.visible;
    this.castShadow = source.castShadow;
    this.receiveShadow = source.receiveShadow;
    this.frustumCulled = source.frustumCulled;
    this.renderOrder = source.renderOrder;
    this.static = source.static;
    this.animations = source.animations.slice();
    this.userData = JSON.parse(JSON.stringify(source.userData));
    if (recursive === true) {
      for (let i = 0; i < source.children.length; i++) {
        const child = source.children[i];
        this.add(child.clone());
      }
    }
    return this;
  }
};
Object3D.DEFAULT_UP = /* @__PURE__ */ new Vector3(0, 1, 0);
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var _colorKeywords = {
  "aliceblue": 15792383,
  "antiquewhite": 16444375,
  "aqua": 65535,
  "aquamarine": 8388564,
  "azure": 15794175,
  "beige": 16119260,
  "bisque": 16770244,
  "black": 0,
  "blanchedalmond": 16772045,
  "blue": 255,
  "blueviolet": 9055202,
  "brown": 10824234,
  "burlywood": 14596231,
  "cadetblue": 6266528,
  "chartreuse": 8388352,
  "chocolate": 13789470,
  "coral": 16744272,
  "cornflowerblue": 6591981,
  "cornsilk": 16775388,
  "crimson": 14423100,
  "cyan": 65535,
  "darkblue": 139,
  "darkcyan": 35723,
  "darkgoldenrod": 12092939,
  "darkgray": 11119017,
  "darkgreen": 25600,
  "darkgrey": 11119017,
  "darkkhaki": 12433259,
  "darkmagenta": 9109643,
  "darkolivegreen": 5597999,
  "darkorange": 16747520,
  "darkorchid": 10040012,
  "darkred": 9109504,
  "darksalmon": 15308410,
  "darkseagreen": 9419919,
  "darkslateblue": 4734347,
  "darkslategray": 3100495,
  "darkslategrey": 3100495,
  "darkturquoise": 52945,
  "darkviolet": 9699539,
  "deeppink": 16716947,
  "deepskyblue": 49151,
  "dimgray": 6908265,
  "dimgrey": 6908265,
  "dodgerblue": 2003199,
  "firebrick": 11674146,
  "floralwhite": 16775920,
  "forestgreen": 2263842,
  "fuchsia": 16711935,
  "gainsboro": 14474460,
  "ghostwhite": 16316671,
  "gold": 16766720,
  "goldenrod": 14329120,
  "gray": 8421504,
  "green": 32768,
  "greenyellow": 11403055,
  "grey": 8421504,
  "honeydew": 15794160,
  "hotpink": 16738740,
  "indianred": 13458524,
  "indigo": 4915330,
  "ivory": 16777200,
  "khaki": 15787660,
  "lavender": 15132410,
  "lavenderblush": 16773365,
  "lawngreen": 8190976,
  "lemonchiffon": 16775885,
  "lightblue": 11393254,
  "lightcoral": 15761536,
  "lightcyan": 14745599,
  "lightgoldenrodyellow": 16448210,
  "lightgray": 13882323,
  "lightgreen": 9498256,
  "lightgrey": 13882323,
  "lightpink": 16758465,
  "lightsalmon": 16752762,
  "lightseagreen": 2142890,
  "lightskyblue": 8900346,
  "lightslategray": 7833753,
  "lightslategrey": 7833753,
  "lightsteelblue": 11584734,
  "lightyellow": 16777184,
  "lime": 65280,
  "limegreen": 3329330,
  "linen": 16445670,
  "magenta": 16711935,
  "maroon": 8388608,
  "mediumaquamarine": 6737322,
  "mediumblue": 205,
  "mediumorchid": 12211667,
  "mediumpurple": 9662683,
  "mediumseagreen": 3978097,
  "mediumslateblue": 8087790,
  "mediumspringgreen": 64154,
  "mediumturquoise": 4772300,
  "mediumvioletred": 13047173,
  "midnightblue": 1644912,
  "mintcream": 16121850,
  "mistyrose": 16770273,
  "moccasin": 16770229,
  "navajowhite": 16768685,
  "navy": 128,
  "oldlace": 16643558,
  "olive": 8421376,
  "olivedrab": 7048739,
  "orange": 16753920,
  "orangered": 16729344,
  "orchid": 14315734,
  "palegoldenrod": 15657130,
  "palegreen": 10025880,
  "paleturquoise": 11529966,
  "palevioletred": 14381203,
  "papayawhip": 16773077,
  "peachpuff": 16767673,
  "peru": 13468991,
  "pink": 16761035,
  "plum": 14524637,
  "powderblue": 11591910,
  "purple": 8388736,
  "rebeccapurple": 6697881,
  "red": 16711680,
  "rosybrown": 12357519,
  "royalblue": 4286945,
  "saddlebrown": 9127187,
  "salmon": 16416882,
  "sandybrown": 16032864,
  "seagreen": 3050327,
  "seashell": 16774638,
  "sienna": 10506797,
  "silver": 12632256,
  "skyblue": 8900331,
  "slateblue": 6970061,
  "slategray": 7372944,
  "slategrey": 7372944,
  "snow": 16775930,
  "springgreen": 65407,
  "steelblue": 4620980,
  "tan": 13808780,
  "teal": 32896,
  "thistle": 14204888,
  "tomato": 16737095,
  "turquoise": 4251856,
  "violet": 15631086,
  "wheat": 16113331,
  "white": 16777215,
  "whitesmoke": 16119285,
  "yellow": 16776960,
  "yellowgreen": 10145074
};
var _hslA = { h: 0, s: 0, l: 0 };
var _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
  return p;
}
var Color = class {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(r, g, b) {
    this.isColor = true;
    this.r = 1;
    this.g = 1;
    this.b = 1;
    return this.set(r, g, b);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(r, g, b) {
    if (g === void 0 && b === void 0) {
      const value = r;
      if (value && value.isColor) {
        this.copy(value);
      } else if (typeof value === "number") {
        this.setHex(value);
      } else if (typeof value === "string") {
        this.setStyle(value);
      }
    } else {
      this.setRGB(r, g, b);
    }
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(scalar) {
    this.r = scalar;
    this.g = scalar;
    this.b = scalar;
    return this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(hex, colorSpace = SRGBColorSpace) {
    hex = Math.floor(hex);
    this.r = (hex >> 16 & 255) / 255;
    this.g = (hex >> 8 & 255) / 255;
    this.b = (hex & 255) / 255;
    ColorManagement.colorSpaceToWorking(this, colorSpace);
    return this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
    this.r = r;
    this.g = g;
    this.b = b;
    ColorManagement.colorSpaceToWorking(this, colorSpace);
    return this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
    h = euclideanModulo(h, 1);
    s = clamp(s, 0, 1);
    l = clamp(l, 0, 1);
    if (s === 0) {
      this.r = this.g = this.b = l;
    } else {
      const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
      const q = 2 * l - p;
      this.r = hue2rgb(q, p, h + 1 / 3);
      this.g = hue2rgb(q, p, h);
      this.b = hue2rgb(q, p, h - 1 / 3);
    }
    ColorManagement.colorSpaceToWorking(this, colorSpace);
    return this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(style, colorSpace = SRGBColorSpace) {
    function handleAlpha(string) {
      if (string === void 0) return;
      if (parseFloat(string) < 1) {
        warn("Color: Alpha component of " + style + " will be ignored.");
      }
    }
    let m;
    if (m = /^(\w+)\(([^\)]*)\)/.exec(style)) {
      let color;
      const name = m[1];
      const components = m[2];
      switch (name) {
        case "rgb":
        case "rgba":
          if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setRGB(
              Math.min(255, parseInt(color[1], 10)) / 255,
              Math.min(255, parseInt(color[2], 10)) / 255,
              Math.min(255, parseInt(color[3], 10)) / 255,
              colorSpace
            );
          }
          if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setRGB(
              Math.min(100, parseInt(color[1], 10)) / 100,
              Math.min(100, parseInt(color[2], 10)) / 100,
              Math.min(100, parseInt(color[3], 10)) / 100,
              colorSpace
            );
          }
          break;
        case "hsl":
        case "hsla":
          if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
            handleAlpha(color[4]);
            return this.setHSL(
              parseFloat(color[1]) / 360,
              parseFloat(color[2]) / 100,
              parseFloat(color[3]) / 100,
              colorSpace
            );
          }
          break;
        default:
          warn("Color: Unknown color model " + style);
      }
    } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
      const hex = m[1];
      const size = hex.length;
      if (size === 3) {
        return this.setRGB(
          parseInt(hex.charAt(0), 16) / 15,
          parseInt(hex.charAt(1), 16) / 15,
          parseInt(hex.charAt(2), 16) / 15,
          colorSpace
        );
      } else if (size === 6) {
        return this.setHex(parseInt(hex, 16), colorSpace);
      } else {
        warn("Color: Invalid hex color " + style);
      }
    } else if (style && style.length > 0) {
      return this.setColorName(style, colorSpace);
    }
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(style, colorSpace = SRGBColorSpace) {
    const hex = _colorKeywords[style.toLowerCase()];
    if (hex !== void 0) {
      this.setHex(hex, colorSpace);
    } else {
      warn("Color: Unknown color " + style);
    }
    return this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    return this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(color) {
    this.r = SRGBToLinear(color.r);
    this.g = SRGBToLinear(color.g);
    this.b = SRGBToLinear(color.b);
    return this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(color) {
    this.r = LinearToSRGB(color.r);
    this.g = LinearToSRGB(color.g);
    this.b = LinearToSRGB(color.b);
    return this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    this.copySRGBToLinear(this);
    return this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    this.copyLinearToSRGB(this);
    return this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(colorSpace = SRGBColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    return Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(colorSpace = SRGBColorSpace) {
    return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    const r = _color.r, g = _color.g, b = _color.b;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue, saturation;
    const lightness = (min + max) / 2;
    if (min === max) {
      hue = 0;
      saturation = 0;
    } else {
      const delta = max - min;
      saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
      switch (max) {
        case r:
          hue = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / delta + 2;
          break;
        case b:
          hue = (r - g) / delta + 4;
          break;
      }
      hue /= 6;
    }
    target.h = hue;
    target.s = saturation;
    target.l = lightness;
    return target;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    target.r = _color.r;
    target.g = _color.g;
    target.b = _color.b;
    return target;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(colorSpace = SRGBColorSpace) {
    ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
    const r = _color.r, g = _color.g, b = _color.b;
    if (colorSpace !== SRGBColorSpace) {
      return `color(${colorSpace} ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)})`;
    }
    return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(h, s, l) {
    this.getHSL(_hslA);
    return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(color) {
    this.r += color.r;
    this.g += color.g;
    this.b += color.b;
    return this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(color1, color2) {
    this.r = color1.r + color2.r;
    this.g = color1.g + color2.g;
    this.b = color1.b + color2.b;
    return this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(s) {
    this.r += s;
    this.g += s;
    this.b += s;
    return this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(color) {
    this.r = Math.max(0, this.r - color.r);
    this.g = Math.max(0, this.g - color.g);
    this.b = Math.max(0, this.b - color.b);
    return this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(color) {
    this.r *= color.r;
    this.g *= color.g;
    this.b *= color.b;
    return this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(s) {
    this.r *= s;
    this.g *= s;
    this.b *= s;
    return this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(color, alpha) {
    this.r += (color.r - this.r) * alpha;
    this.g += (color.g - this.g) * alpha;
    this.b += (color.b - this.b) * alpha;
    return this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(color1, color2, alpha) {
    this.r = color1.r + (color2.r - color1.r) * alpha;
    this.g = color1.g + (color2.g - color1.g) * alpha;
    this.b = color1.b + (color2.b - color1.b) * alpha;
    return this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(color, alpha) {
    this.getHSL(_hslA);
    color.getHSL(_hslB);
    const h = lerp(_hslA.h, _hslB.h, alpha);
    const s = lerp(_hslA.s, _hslB.s, alpha);
    const l = lerp(_hslA.l, _hslB.l, alpha);
    this.setHSL(h, s, l);
    return this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(v) {
    this.r = v.x;
    this.g = v.y;
    this.b = v.z;
    return this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(m) {
    const r = this.r, g = this.g, b = this.b;
    const e = m.elements;
    this.r = e[0] * r + e[3] * g + e[6] * b;
    this.g = e[1] * r + e[4] * g + e[7] * b;
    this.b = e[2] * r + e[5] * g + e[8] * b;
    return this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(c) {
    return c.r === this.r && c.g === this.g && c.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(array, offset = 0) {
    this.r = array[offset];
    this.g = array[offset + 1];
    this.b = array[offset + 2];
    return this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(array = [], offset = 0) {
    array[offset] = this.r;
    array[offset + 1] = this.g;
    array[offset + 2] = this.b;
    return array;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(attribute, index) {
    this.r = attribute.getX(index);
    this.g = attribute.getY(index);
    this.b = attribute.getZ(index);
    return this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r;
    yield this.g;
    yield this.b;
  }
};
var _color = /* @__PURE__ */ new Color();
Color.NAMES = _colorKeywords;
var _v0$2 = /* @__PURE__ */ new Vector3();
var _v1$5 = /* @__PURE__ */ new Vector3();
var _v2$4 = /* @__PURE__ */ new Vector3();
var _v3$2 = /* @__PURE__ */ new Vector3();
var _vab = /* @__PURE__ */ new Vector3();
var _vac = /* @__PURE__ */ new Vector3();
var _vbc = /* @__PURE__ */ new Vector3();
var _vap = /* @__PURE__ */ new Vector3();
var _vbp = /* @__PURE__ */ new Vector3();
var _vcp = /* @__PURE__ */ new Vector3();
var _v40 = /* @__PURE__ */ new Vector4();
var _v41 = /* @__PURE__ */ new Vector4();
var _v42 = /* @__PURE__ */ new Vector4();
var Triangle = class _Triangle {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(a, b, c, target) {
    target.subVectors(c, b);
    _v0$2.subVectors(a, b);
    target.cross(_v0$2);
    const targetLengthSq = target.lengthSq();
    if (targetLengthSq > 0) {
      return target.multiplyScalar(1 / Math.sqrt(targetLengthSq));
    }
    return target.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(point, a, b, c, target) {
    _v0$2.subVectors(c, a);
    _v1$5.subVectors(b, a);
    _v2$4.subVectors(point, a);
    const dot00 = _v0$2.dot(_v0$2);
    const dot01 = _v0$2.dot(_v1$5);
    const dot02 = _v0$2.dot(_v2$4);
    const dot11 = _v1$5.dot(_v1$5);
    const dot12 = _v1$5.dot(_v2$4);
    const denom = dot00 * dot11 - dot01 * dot01;
    if (denom === 0) {
      target.set(0, 0, 0);
      return null;
    }
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return target.set(1 - u - v, v, u);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(point, a, b, c) {
    if (this.getBarycoord(point, a, b, c, _v3$2) === null) {
      return false;
    }
    return _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(point, p1, p2, p3, v1, v2, v3, target) {
    if (this.getBarycoord(point, p1, p2, p3, _v3$2) === null) {
      target.x = 0;
      target.y = 0;
      if ("z" in target) target.z = 0;
      if ("w" in target) target.w = 0;
      return null;
    }
    target.setScalar(0);
    target.addScaledVector(v1, _v3$2.x);
    target.addScaledVector(v2, _v3$2.y);
    target.addScaledVector(v3, _v3$2.z);
    return target;
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(attr, i1, i2, i3, barycoord, target) {
    _v40.setScalar(0);
    _v41.setScalar(0);
    _v42.setScalar(0);
    _v40.fromBufferAttribute(attr, i1);
    _v41.fromBufferAttribute(attr, i2);
    _v42.fromBufferAttribute(attr, i3);
    target.setScalar(0);
    target.addScaledVector(_v40, barycoord.x);
    target.addScaledVector(_v41, barycoord.y);
    target.addScaledVector(_v42, barycoord.z);
    return target;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(a, b, c, direction) {
    _v0$2.subVectors(c, b);
    _v1$5.subVectors(a, b);
    return _v0$2.cross(_v1$5).dot(direction) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(points, i0, i1, i2) {
    this.a.copy(points[i0]);
    this.b.copy(points[i1]);
    this.c.copy(points[i2]);
    return this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(attribute, i0, i1, i2) {
    this.a.fromBufferAttribute(attribute, i0);
    this.b.fromBufferAttribute(attribute, i1);
    this.c.fromBufferAttribute(attribute, i2);
    return this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(triangle) {
    this.a.copy(triangle.a);
    this.b.copy(triangle.b);
    this.c.copy(triangle.c);
    return this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    _v0$2.subVectors(this.c, this.b);
    _v1$5.subVectors(this.a, this.b);
    return _v0$2.cross(_v1$5).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(target) {
    return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(target) {
    return _Triangle.getNormal(this.a, this.b, this.c, target);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(target) {
    return target.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(point, target) {
    return _Triangle.getBarycoord(point, this.a, this.b, this.c, target);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(point, v1, v2, v3, target) {
    return _Triangle.getInterpolation(point, this.a, this.b, this.c, v1, v2, v3, target);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(point) {
    return _Triangle.containsPoint(point, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(direction) {
    return _Triangle.isFrontFacing(this.a, this.b, this.c, direction);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(box) {
    return box.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(p, target) {
    const a = this.a, b = this.b, c = this.c;
    let v, w;
    _vab.subVectors(b, a);
    _vac.subVectors(c, a);
    _vap.subVectors(p, a);
    const d1 = _vab.dot(_vap);
    const d2 = _vac.dot(_vap);
    if (d1 <= 0 && d2 <= 0) {
      return target.copy(a);
    }
    _vbp.subVectors(p, b);
    const d3 = _vab.dot(_vbp);
    const d4 = _vac.dot(_vbp);
    if (d3 >= 0 && d4 <= d3) {
      return target.copy(b);
    }
    const vc = d1 * d4 - d3 * d2;
    if (vc <= 0 && d1 >= 0 && d3 <= 0) {
      v = d1 / (d1 - d3);
      return target.copy(a).addScaledVector(_vab, v);
    }
    _vcp.subVectors(p, c);
    const d5 = _vab.dot(_vcp);
    const d6 = _vac.dot(_vcp);
    if (d6 >= 0 && d5 <= d6) {
      return target.copy(c);
    }
    const vb = d5 * d2 - d1 * d6;
    if (vb <= 0 && d2 >= 0 && d6 <= 0) {
      w = d2 / (d2 - d6);
      return target.copy(a).addScaledVector(_vac, w);
    }
    const va = d3 * d6 - d5 * d4;
    if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      _vbc.subVectors(c, b);
      w = (d4 - d3) / (d4 - d3 + (d5 - d6));
      return target.copy(b).addScaledVector(_vbc, w);
    }
    const denom = 1 / (va + vb + vc);
    v = vb * denom;
    w = vc * denom;
    return target.copy(a).addScaledVector(_vab, v).addScaledVector(_vac, w);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(triangle) {
    return triangle.a.equals(this.a) && triangle.b.equals(this.b) && triangle.c.equals(this.c);
  }
};
var Box3 = class {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(min = new Vector3(Infinity, Infinity, Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
    this.isBox3 = true;
    this.min = min;
    this.max = max;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(array) {
    this.makeEmpty();
    for (let i = 0, il = array.length; i < il; i += 3) {
      this.expandByPoint(_vector$b.fromArray(array, i));
    }
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(attribute) {
    this.makeEmpty();
    for (let i = 0, il = attribute.count; i < il; i++) {
      this.expandByPoint(_vector$b.fromBufferAttribute(attribute, i));
    }
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(points) {
    this.makeEmpty();
    for (let i = 0, il = points.length; i < il; i++) {
      this.expandByPoint(points[i]);
    }
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(center, size) {
    const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
    this.min.copy(center).sub(halfSize);
    this.max.copy(center).add(halfSize);
    return this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * Note: To compute the correct bounding box, make sure the given 3D object
   * has an up-to-date world matrix that reflects the current transformation of its
   * ancestor nodes. Call `object.updateWorldMatrix( true, false )` beforehand if
   * you're unsure.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(object, precise = false) {
    this.makeEmpty();
    return this.expandByObject(object, precise);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(box) {
    this.min.copy(box.min);
    this.max.copy(box.max);
    return this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(target) {
    return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(point) {
    this.min.min(point);
    this.max.max(point);
    return this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(vector) {
    this.min.sub(vector);
    this.max.add(vector);
    return this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(scalar) {
    this.min.addScalar(-scalar);
    this.max.addScalar(scalar);
    return this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(object, precise = false) {
    object.updateWorldMatrix(false, false);
    const geometry = object.geometry;
    if (geometry !== void 0) {
      const positionAttribute = geometry.getAttribute("position");
      if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
        for (let i = 0, l = positionAttribute.count; i < l; i++) {
          if (object.isMesh === true) {
            object.getVertexPosition(i, _vector$b);
          } else {
            _vector$b.fromBufferAttribute(positionAttribute, i);
          }
          _vector$b.applyMatrix4(object.matrixWorld);
          this.expandByPoint(_vector$b);
        }
      } else {
        if (object.boundingBox !== void 0) {
          if (object.boundingBox === null) {
            object.computeBoundingBox();
          }
          _box$4.copy(object.boundingBox);
        } else {
          if (geometry.boundingBox === null) {
            geometry.computeBoundingBox();
          }
          _box$4.copy(geometry.boundingBox);
        }
        _box$4.applyMatrix4(object.matrixWorld);
        this.union(_box$4);
      }
    }
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
      this.expandByObject(children[i], precise);
    }
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(point) {
    return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(box) {
    return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(point, target) {
    return target.set(
      (point.x - this.min.x) / (this.max.x - this.min.x),
      (point.y - this.min.y) / (this.max.y - this.min.y),
      (point.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(box) {
    return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(sphere) {
    this.clampPoint(sphere.center, _vector$b);
    return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(plane) {
    let min, max;
    if (plane.normal.x > 0) {
      min = plane.normal.x * this.min.x;
      max = plane.normal.x * this.max.x;
    } else {
      min = plane.normal.x * this.max.x;
      max = plane.normal.x * this.min.x;
    }
    if (plane.normal.y > 0) {
      min += plane.normal.y * this.min.y;
      max += plane.normal.y * this.max.y;
    } else {
      min += plane.normal.y * this.max.y;
      max += plane.normal.y * this.min.y;
    }
    if (plane.normal.z > 0) {
      min += plane.normal.z * this.min.z;
      max += plane.normal.z * this.max.z;
    } else {
      min += plane.normal.z * this.max.z;
      max += plane.normal.z * this.min.z;
    }
    return min <= -plane.constant && max >= -plane.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(triangle) {
    if (this.isEmpty()) {
      return false;
    }
    this.getCenter(_center);
    _extents.subVectors(this.max, _center);
    _v0$1.subVectors(triangle.a, _center);
    _v1$4.subVectors(triangle.b, _center);
    _v2$3.subVectors(triangle.c, _center);
    _f0.subVectors(_v1$4, _v0$1);
    _f1.subVectors(_v2$3, _v1$4);
    _f2.subVectors(_v0$1, _v2$3);
    let axes = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0
    ];
    if (!satForAxes(axes, _v0$1, _v1$4, _v2$3, _extents)) {
      return false;
    }
    axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (!satForAxes(axes, _v0$1, _v1$4, _v2$3, _extents)) {
      return false;
    }
    _triangleNormal.crossVectors(_f0, _f1);
    axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
    return satForAxes(axes, _v0$1, _v1$4, _v2$3, _extents);
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(point, target) {
    return target.copy(point).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(point) {
    return this.clampPoint(point, _vector$b).distanceTo(point);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
    } else {
      this.getCenter(target.center);
      target.radius = this.getSize(_vector$b).length() * 0.5;
    }
    return target;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(box) {
    this.min.max(box.min);
    this.max.min(box.max);
    if (this.isEmpty()) this.makeEmpty();
    return this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(box) {
    this.min.min(box.min);
    this.max.max(box.max);
    return this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(matrix) {
    if (this.isEmpty()) return this;
    _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
    _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
    _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
    _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
    _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
    this.setFromPoints(_points);
    return this;
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(offset) {
    this.min.add(offset);
    this.max.add(offset);
    return this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(box) {
    return box.min.equals(this.min) && box.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(json) {
    this.min.fromArray(json.min);
    this.max.fromArray(json.max);
    return this;
  }
};
var _points = [
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3(),
  /* @__PURE__ */ new Vector3()
];
var _vector$b = /* @__PURE__ */ new Vector3();
var _box$4 = /* @__PURE__ */ new Box3();
var _v0$1 = /* @__PURE__ */ new Vector3();
var _v1$4 = /* @__PURE__ */ new Vector3();
var _v2$3 = /* @__PURE__ */ new Vector3();
var _f0 = /* @__PURE__ */ new Vector3();
var _f1 = /* @__PURE__ */ new Vector3();
var _f2 = /* @__PURE__ */ new Vector3();
var _center = /* @__PURE__ */ new Vector3();
var _extents = /* @__PURE__ */ new Vector3();
var _triangleNormal = /* @__PURE__ */ new Vector3();
var _testAxis = /* @__PURE__ */ new Vector3();
function satForAxes(axes, v0, v1, v2, extents) {
  for (let i = 0, j = axes.length - 3; i <= j; i += 3) {
    _testAxis.fromArray(axes, i);
    const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
    const p0 = v0.dot(_testAxis);
    const p1 = v1.dot(_testAxis);
    const p2 = v2.dot(_testAxis);
    if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
      return false;
    }
  }
  return true;
}
var _vector$a = /* @__PURE__ */ new Vector3();
var _vector2$1 = /* @__PURE__ */ new Vector2();
var _id$2 = 0;
var BufferAttribute = class extends EventDispatcher {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized = false) {
    super();
    if (Array.isArray(array)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.isBufferAttribute = true;
    Object.defineProperty(this, "id", { value: _id$2++ });
    this.name = "";
    this.array = array;
    this.itemSize = itemSize;
    this.count = array !== void 0 ? array.length / itemSize : 0;
    this.normalized = normalized;
    this.usage = StaticDrawUsage;
    this.updateRanges = [];
    this.gpuType = FloatType;
    this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(value) {
    this.usage = value;
    return this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(source) {
    this.name = source.name;
    this.array = new source.array.constructor(source.array);
    this.itemSize = source.itemSize;
    this.count = source.count;
    this.normalized = source.normalized;
    this.usage = source.usage;
    this.gpuType = source.gpuType;
    return this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(index1, attribute, index2) {
    index1 *= this.itemSize;
    index2 *= attribute.itemSize;
    for (let i = 0, l = this.itemSize; i < l; i++) {
      this.array[index1 + i] = attribute.array[index2 + i];
    }
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(array) {
    this.array.set(array);
    return this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(m) {
    if (this.itemSize === 2) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector2$1.fromBufferAttribute(this, i);
        _vector2$1.applyMatrix3(m);
        this.setXY(i, _vector2$1.x, _vector2$1.y);
      }
    } else if (this.itemSize === 3) {
      for (let i = 0, l = this.count; i < l; i++) {
        _vector$a.fromBufferAttribute(this, i);
        _vector$a.applyMatrix3(m);
        this.setXYZ(i, _vector$a.x, _vector$a.y, _vector$a.z);
      }
    }
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$a.fromBufferAttribute(this, i);
      _vector$a.applyMatrix4(m);
      this.setXYZ(i, _vector$a.x, _vector$a.y, _vector$a.z);
    }
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$a.fromBufferAttribute(this, i);
      _vector$a.applyNormalMatrix(m);
      this.setXYZ(i, _vector$a.x, _vector$a.y, _vector$a.z);
    }
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$a.fromBufferAttribute(this, i);
      _vector$a.transformDirection(m);
      this.setXYZ(i, _vector$a.x, _vector$a.y, _vector$a.z);
    }
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(index, component) {
    let value = this.array[index * this.itemSize + component];
    if (this.normalized) value = denormalize(value, this.array);
    return value;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(index, component, value) {
    if (this.normalized) value = normalize(value, this.array);
    this.array[index * this.itemSize + component] = value;
    return this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(index) {
    let x = this.array[index * this.itemSize];
    if (this.normalized) x = denormalize(x, this.array);
    return x;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(index, x) {
    if (this.normalized) x = normalize(x, this.array);
    this.array[index * this.itemSize] = x;
    return this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(index) {
    let y = this.array[index * this.itemSize + 1];
    if (this.normalized) y = denormalize(y, this.array);
    return y;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(index, y) {
    if (this.normalized) y = normalize(y, this.array);
    this.array[index * this.itemSize + 1] = y;
    return this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(index) {
    let z = this.array[index * this.itemSize + 2];
    if (this.normalized) z = denormalize(z, this.array);
    return z;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(index, z) {
    if (this.normalized) z = normalize(z, this.array);
    this.array[index * this.itemSize + 2] = z;
    return this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(index) {
    let w = this.array[index * this.itemSize + 3];
    if (this.normalized) w = denormalize(w, this.array);
    return w;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(index, w) {
    if (this.normalized) w = normalize(w, this.array);
    this.array[index * this.itemSize + 3] = w;
    return this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(index, x, y) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    return this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(index, x, y, z) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    return this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(index, x, y, z, w) {
    index *= this.itemSize;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
      w = normalize(w, this.array);
    }
    this.array[index + 0] = x;
    this.array[index + 1] = y;
    this.array[index + 2] = z;
    this.array[index + 3] = w;
    return this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const data = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    if (this.name !== "") data.name = this.name;
    if (this.usage !== StaticDrawUsage) data.usage = this.usage;
    return data;
  }
  /**
   * Disposes of the buffer attribute. Available only in {@link WebGPURenderer}.
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var Uint16BufferAttribute = class extends BufferAttribute {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized) {
    super(new Uint16Array(array), itemSize, normalized);
  }
};
var Uint32BufferAttribute = class extends BufferAttribute {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized) {
    super(new Uint32Array(array), itemSize, normalized);
  }
};
var Float32BufferAttribute = class extends BufferAttribute {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(array, itemSize, normalized) {
    super(new Float32Array(array), itemSize, normalized);
  }
};
var _box$3 = /* @__PURE__ */ new Box3();
var _v1$3 = /* @__PURE__ */ new Vector3();
var _v2$2 = /* @__PURE__ */ new Vector3();
var Sphere = class {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(center = new Vector3(), radius = -1) {
    this.isSphere = true;
    this.center = center;
    this.radius = radius;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(points, optionalCenter) {
    const center = this.center;
    if (optionalCenter !== void 0) {
      center.copy(optionalCenter);
    } else {
      _box$3.setFromPoints(points).getCenter(center);
    }
    let maxRadiusSq = 0;
    for (let i = 0, il = points.length; i < il; i++) {
      maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(points[i]));
    }
    this.radius = Math.sqrt(maxRadiusSq);
    return this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(sphere) {
    this.center.copy(sphere.center);
    this.radius = sphere.radius;
    return this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(point) {
    return point.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(point) {
    return point.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(sphere) {
    const radiusSum = this.radius + sphere.radius;
    return sphere.center.distanceToSquared(this.center) <= radiusSum * radiusSum;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(box) {
    return box.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(plane) {
    return Math.abs(plane.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(point, target) {
    const deltaLengthSq = this.center.distanceToSquared(point);
    target.copy(point);
    if (deltaLengthSq > this.radius * this.radius) {
      target.sub(this.center).normalize();
      target.multiplyScalar(this.radius).add(this.center);
    }
    return target;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(target) {
    if (this.isEmpty()) {
      target.makeEmpty();
      return target;
    }
    target.set(this.center, this.center);
    target.expandByScalar(this.radius);
    return target;
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(matrix) {
    this.center.applyMatrix4(matrix);
    this.radius = this.radius * matrix.getMaxScaleOnAxis();
    return this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(offset) {
    this.center.add(offset);
    return this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(point) {
    if (this.isEmpty()) {
      this.center.copy(point);
      this.radius = 0;
      return this;
    }
    _v1$3.subVectors(point, this.center);
    const lengthSq = _v1$3.lengthSq();
    if (lengthSq > this.radius * this.radius) {
      const length = Math.sqrt(lengthSq);
      const delta = (length - this.radius) * 0.5;
      this.center.addScaledVector(_v1$3, delta / length);
      this.radius += delta;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(sphere) {
    if (sphere.isEmpty()) {
      return this;
    }
    if (this.isEmpty()) {
      this.copy(sphere);
      return this;
    }
    if (this.center.equals(sphere.center) === true) {
      this.radius = Math.max(this.radius, sphere.radius);
    } else {
      _v2$2.subVectors(sphere.center, this.center).setLength(sphere.radius);
      this.expandByPoint(_v1$3.copy(sphere.center).add(_v2$2));
      this.expandByPoint(_v1$3.copy(sphere.center).sub(_v2$2));
    }
    return this;
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(sphere) {
    return sphere.center.equals(this.center) && sphere.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Sphere} A reference to this bounding sphere.
   */
  fromJSON(json) {
    this.radius = json.radius;
    this.center.fromArray(json.center);
    return this;
  }
};
var _id$1 = 0;
var _m1 = /* @__PURE__ */ new Matrix4();
var _obj = /* @__PURE__ */ new Object3D();
var _offset = /* @__PURE__ */ new Vector3();
var _box$2 = /* @__PURE__ */ new Box3();
var _boxMorphTargets = /* @__PURE__ */ new Box3();
var _vector$9 = /* @__PURE__ */ new Vector3();
var BufferGeometry = class _BufferGeometry extends EventDispatcher {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super();
    this.isBufferGeometry = true;
    Object.defineProperty(this, "id", { value: _id$1++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.indirect = null;
    this.indirectOffset = 0;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = false;
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
    this._transformed = false;
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(index) {
    if (Array.isArray(index)) {
      this.index = new (arrayNeedsUint32(index) ? Uint32BufferAttribute : Uint16BufferAttribute)(index, 1);
    } else {
      this.index = index;
    }
    return this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @param {number|Array<number>} [indirectOffset=0] - The offset, in bytes, into the indirect drawing buffer where the value data begins. If an array is provided, multiple indirect draw calls will be made for each offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(indirect, indirectOffset = 0) {
    this.indirect = indirect;
    this.indirectOffset = indirectOffset;
    return this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(name) {
    return this.attributes[name];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(name, attribute) {
    this.attributes[name] = attribute;
    return this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(name) {
    delete this.attributes[name];
    return this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(name) {
    return this.attributes[name] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(start, count, materialIndex = 0) {
    this.groups.push({
      start,
      count,
      materialIndex
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(matrix) {
    const position = this.attributes.position;
    if (position !== void 0) {
      position.applyMatrix4(matrix);
      position.needsUpdate = true;
    }
    const normal = this.attributes.normal;
    if (normal !== void 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(matrix);
      normal.applyNormalMatrix(normalMatrix);
      normal.needsUpdate = true;
    }
    const tangent = this.attributes.tangent;
    if (tangent !== void 0) {
      tangent.transformDirection(matrix);
      tangent.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    this._transformed = true;
    return this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(q) {
    _m1.makeRotationFromQuaternion(q);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(angle) {
    _m1.makeRotationX(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(angle) {
    _m1.makeRotationY(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(angle) {
    _m1.makeRotationZ(angle);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(x, y, z) {
    _m1.makeTranslation(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(x, y, z) {
    _m1.makeScale(x, y, z);
    this.applyMatrix4(_m1);
    return this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(vector) {
    _obj.lookAt(vector);
    _obj.updateMatrix();
    this.applyMatrix4(_obj.matrix);
    return this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    this.computeBoundingBox();
    this.boundingBox.getCenter(_offset).negate();
    this.translate(_offset.x, _offset.y, _offset.z);
    return this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(points) {
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute === void 0) {
      const position = [];
      for (let i = 0, l = points.length; i < l; i++) {
        const point = points[i];
        position.push(point.x, point.y, point.z || 0);
      }
      this.setAttribute("position", new Float32BufferAttribute(position, 3));
    } else {
      const l = Math.min(points.length, positionAttribute.count);
      for (let i = 0; i < l; i++) {
        const point = points[i];
        positionAttribute.setXYZ(i, point.x, point.y, point.z || 0);
      }
      if (points.length > positionAttribute.count) {
        warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");
      }
      positionAttribute.needsUpdate = true;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this);
      this.boundingBox.set(
        new Vector3(-Infinity, -Infinity, -Infinity),
        new Vector3(Infinity, Infinity, Infinity)
      );
      return;
    }
    if (position !== void 0) {
      this.boundingBox.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _box$2.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$9.addVectors(this.boundingBox.min, _box$2.min);
            this.boundingBox.expandByPoint(_vector$9);
            _vector$9.addVectors(this.boundingBox.max, _box$2.max);
            this.boundingBox.expandByPoint(_vector$9);
          } else {
            this.boundingBox.expandByPoint(_box$2.min);
            this.boundingBox.expandByPoint(_box$2.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      error('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    const position = this.attributes.position;
    const morphAttributesPosition = this.morphAttributes.position;
    if (position && position.isGLBufferAttribute) {
      error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this);
      this.boundingSphere.set(new Vector3(), Infinity);
      return;
    }
    if (position) {
      const center = this.boundingSphere.center;
      _box$2.setFromBufferAttribute(position);
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          _boxMorphTargets.setFromBufferAttribute(morphAttribute);
          if (this.morphTargetsRelative) {
            _vector$9.addVectors(_box$2.min, _boxMorphTargets.min);
            _box$2.expandByPoint(_vector$9);
            _vector$9.addVectors(_box$2.max, _boxMorphTargets.max);
            _box$2.expandByPoint(_vector$9);
          } else {
            _box$2.expandByPoint(_boxMorphTargets.min);
            _box$2.expandByPoint(_boxMorphTargets.max);
          }
        }
      }
      _box$2.getCenter(center);
      let maxRadiusSq = 0;
      for (let i = 0, il = position.count; i < il; i++) {
        _vector$9.fromBufferAttribute(position, i);
        maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$9));
      }
      if (morphAttributesPosition) {
        for (let i = 0, il = morphAttributesPosition.length; i < il; i++) {
          const morphAttribute = morphAttributesPosition[i];
          const morphTargetsRelative = this.morphTargetsRelative;
          for (let j = 0, jl = morphAttribute.count; j < jl; j++) {
            _vector$9.fromBufferAttribute(morphAttribute, j);
            if (morphTargetsRelative) {
              _offset.fromBufferAttribute(position, j);
              _vector$9.add(_offset);
            }
            maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(_vector$9));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(maxRadiusSq);
      if (isNaN(this.boundingSphere.radius)) {
        error('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const index = this.index;
    const attributes = this.attributes;
    if (index === null || attributes.position === void 0 || attributes.normal === void 0 || attributes.uv === void 0) {
      error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const positionAttribute = attributes.position;
    const normalAttribute = attributes.normal;
    const uvAttribute = attributes.uv;
    let tangentAttribute = this.getAttribute("tangent");
    if (tangentAttribute === void 0 || tangentAttribute.count !== positionAttribute.count) {
      tangentAttribute = new BufferAttribute(new Float32Array(4 * positionAttribute.count), 4);
      this.setAttribute("tangent", tangentAttribute);
    }
    const tan1 = [], tan2 = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      tan1[i] = new Vector3();
      tan2[i] = new Vector3();
    }
    const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), uvA = new Vector2(), uvB = new Vector2(), uvC = new Vector2(), sdir = new Vector3(), tdir = new Vector3();
    function handleTriangle(a, b, c) {
      vA.fromBufferAttribute(positionAttribute, a);
      vB.fromBufferAttribute(positionAttribute, b);
      vC.fromBufferAttribute(positionAttribute, c);
      uvA.fromBufferAttribute(uvAttribute, a);
      uvB.fromBufferAttribute(uvAttribute, b);
      uvC.fromBufferAttribute(uvAttribute, c);
      vB.sub(vA);
      vC.sub(vA);
      uvB.sub(uvA);
      uvC.sub(uvA);
      const r = 1 / (uvB.x * uvC.y - uvC.x * uvB.y);
      if (!isFinite(r)) return;
      sdir.copy(vB).multiplyScalar(uvC.y).addScaledVector(vC, -uvB.y).multiplyScalar(r);
      tdir.copy(vC).multiplyScalar(uvB.x).addScaledVector(vB, -uvC.x).multiplyScalar(r);
      tan1[a].add(sdir);
      tan1[b].add(sdir);
      tan1[c].add(sdir);
      tan2[a].add(tdir);
      tan2[b].add(tdir);
      tan2[c].add(tdir);
    }
    let groups = this.groups;
    if (groups.length === 0) {
      groups = [{
        start: 0,
        count: index.count
      }];
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleTriangle(
          index.getX(j + 0),
          index.getX(j + 1),
          index.getX(j + 2)
        );
      }
    }
    const tmp = new Vector3(), tmp2 = new Vector3();
    const n = new Vector3(), n2 = new Vector3();
    function handleVertex(v) {
      n.fromBufferAttribute(normalAttribute, v);
      n2.copy(n);
      const t = tan1[v];
      tmp.copy(t);
      tmp.sub(n.multiplyScalar(n.dot(t))).normalize();
      tmp2.crossVectors(n2, t);
      const test = tmp2.dot(tan2[v]);
      const w = test < 0 ? -1 : 1;
      tangentAttribute.setXYZW(v, tmp.x, tmp.y, tmp.z, w);
    }
    for (let i = 0, il = groups.length; i < il; ++i) {
      const group = groups[i];
      const start = group.start;
      const count = group.count;
      for (let j = start, jl = start + count; j < jl; j += 3) {
        handleVertex(index.getX(j + 0));
        handleVertex(index.getX(j + 1));
        handleVertex(index.getX(j + 2));
      }
    }
    this._transformed = true;
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const index = this.index;
    const positionAttribute = this.getAttribute("position");
    if (positionAttribute !== void 0) {
      let normalAttribute = this.getAttribute("normal");
      if (normalAttribute === void 0 || normalAttribute.count !== positionAttribute.count) {
        normalAttribute = new BufferAttribute(new Float32Array(positionAttribute.count * 3), 3);
        this.setAttribute("normal", normalAttribute);
      } else {
        for (let i = 0, il = normalAttribute.count; i < il; i++) {
          normalAttribute.setXYZ(i, 0, 0, 0);
        }
      }
      const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
      const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
      const cb = new Vector3(), ab = new Vector3();
      if (index) {
        for (let i = 0, il = index.count; i < il; i += 3) {
          const vA = index.getX(i + 0);
          const vB = index.getX(i + 1);
          const vC = index.getX(i + 2);
          pA.fromBufferAttribute(positionAttribute, vA);
          pB.fromBufferAttribute(positionAttribute, vB);
          pC.fromBufferAttribute(positionAttribute, vC);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          nA.fromBufferAttribute(normalAttribute, vA);
          nB.fromBufferAttribute(normalAttribute, vB);
          nC.fromBufferAttribute(normalAttribute, vC);
          nA.add(cb);
          nB.add(cb);
          nC.add(cb);
          normalAttribute.setXYZ(vA, nA.x, nA.y, nA.z);
          normalAttribute.setXYZ(vB, nB.x, nB.y, nB.z);
          normalAttribute.setXYZ(vC, nC.x, nC.y, nC.z);
        }
      } else {
        for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
          pA.fromBufferAttribute(positionAttribute, i + 0);
          pB.fromBufferAttribute(positionAttribute, i + 1);
          pC.fromBufferAttribute(positionAttribute, i + 2);
          cb.subVectors(pC, pB);
          ab.subVectors(pA, pB);
          cb.cross(ab);
          normalAttribute.setXYZ(i + 0, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 1, cb.x, cb.y, cb.z);
          normalAttribute.setXYZ(i + 2, cb.x, cb.y, cb.z);
        }
      }
      this.normalizeNormals();
      normalAttribute.needsUpdate = true;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const normals = this.attributes.normal;
    for (let i = 0, il = normals.count; i < il; i++) {
      _vector$9.fromBufferAttribute(normals, i);
      _vector$9.normalize();
      normals.setXYZ(i, _vector$9.x, _vector$9.y, _vector$9.z);
    }
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function convertBufferAttribute(attribute, indices2) {
      const array = attribute.array;
      const itemSize = attribute.itemSize;
      const normalized = attribute.normalized;
      const array2 = new array.constructor(indices2.length * itemSize);
      let index = 0, index2 = 0;
      for (let i = 0, l = indices2.length; i < l; i++) {
        if (attribute.isInterleavedBufferAttribute) {
          index = indices2[i] * attribute.data.stride + attribute.offset;
        } else {
          index = indices2[i] * itemSize;
        }
        for (let j = 0; j < itemSize; j++) {
          array2[index2++] = array[index++];
        }
      }
      return new BufferAttribute(array2, itemSize, normalized);
    }
    if (this.index === null) {
      warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");
      return this;
    }
    const geometry2 = new _BufferGeometry();
    const indices = this.index.array;
    const attributes = this.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      const newAttribute = convertBufferAttribute(attribute, indices);
      geometry2.setAttribute(name, newAttribute);
    }
    const morphAttributes = this.morphAttributes;
    for (const name in morphAttributes) {
      const morphArray = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, il = morphAttribute.length; i < il; i++) {
        const attribute = morphAttribute[i];
        const newAttribute = convertBufferAttribute(attribute, indices);
        morphArray.push(newAttribute);
      }
      geometry2.morphAttributes[name] = morphArray;
    }
    geometry2.morphTargetsRelative = this.morphTargetsRelative;
    const groups = this.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      geometry2.addGroup(group.start, group.count, group.materialIndex);
    }
    return geometry2;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const data = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.parameters !== void 0 && this._transformed === true ? "BufferGeometry" : this.type;
    if (this.name !== "") data.name = this.name;
    if (Object.keys(this.userData).length > 0) data.userData = this.userData;
    if (this.parameters !== void 0 && this._transformed !== true) {
      const parameters = this.parameters;
      for (const key in parameters) {
        if (parameters[key] !== void 0) data[key] = parameters[key];
      }
      return data;
    }
    data.data = { attributes: {} };
    const index = this.index;
    if (index !== null) {
      data.data.index = {
        type: index.array.constructor.name,
        array: Array.prototype.slice.call(index.array)
      };
    }
    const attributes = this.attributes;
    for (const key in attributes) {
      const attribute = attributes[key];
      data.data.attributes[key] = attribute.toJSON(data.data);
    }
    const morphAttributes = {};
    let hasMorphAttributes = false;
    for (const key in this.morphAttributes) {
      const attributeArray = this.morphAttributes[key];
      const array = [];
      for (let i = 0, il = attributeArray.length; i < il; i++) {
        const attribute = attributeArray[i];
        array.push(attribute.toJSON(data.data));
      }
      if (array.length > 0) {
        morphAttributes[key] = array;
        hasMorphAttributes = true;
      }
    }
    if (hasMorphAttributes) {
      data.data.morphAttributes = morphAttributes;
      data.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    const groups = this.groups;
    if (groups.length > 0) {
      data.data.groups = JSON.parse(JSON.stringify(groups));
    }
    const boundingSphere = this.boundingSphere;
    if (boundingSphere !== null) {
      data.data.boundingSphere = boundingSphere.toJSON();
    }
    return data;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(source) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    const data = {};
    this.name = source.name;
    const index = source.index;
    if (index !== null) {
      this.setIndex(index.clone());
    }
    const attributes = source.attributes;
    for (const name in attributes) {
      const attribute = attributes[name];
      this.setAttribute(name, attribute.clone(data));
    }
    const morphAttributes = source.morphAttributes;
    for (const name in morphAttributes) {
      const array = [];
      const morphAttribute = morphAttributes[name];
      for (let i = 0, l = morphAttribute.length; i < l; i++) {
        array.push(morphAttribute[i].clone(data));
      }
      this.morphAttributes[name] = array;
    }
    this.morphTargetsRelative = source.morphTargetsRelative;
    const groups = source.groups;
    for (let i = 0, l = groups.length; i < l; i++) {
      const group = groups[i];
      this.addGroup(group.start, group.count, group.materialIndex);
    }
    const boundingBox = source.boundingBox;
    if (boundingBox !== null) {
      this.boundingBox = boundingBox.clone();
    }
    const boundingSphere = source.boundingSphere;
    if (boundingSphere !== null) {
      this.boundingSphere = boundingSphere.clone();
    }
    this.drawRange.start = source.drawRange.start;
    this.drawRange.count = source.drawRange.count;
    this.userData = source.userData;
    this._transformed = source._transformed;
    return this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var InterleavedBuffer = class {
  /**
   * Constructs a new interleaved buffer.
   *
   * @param {TypedArray} array - A typed array with a shared buffer storing attribute data.
   * @param {number} stride - The number of typed-array elements per vertex.
   */
  constructor(array, stride) {
    this.isInterleavedBuffer = true;
    this.array = array;
    this.stride = stride;
    this.count = array !== void 0 ? array.length / stride : 0;
    this.usage = StaticDrawUsage;
    this.updateRanges = [];
    this.version = 0;
    this.uuid = generateUUID();
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute array
   * data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
  /**
   * Sets the usage of this interleaved buffer.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {InterleavedBuffer} A reference to this interleaved buffer.
   */
  setUsage(value) {
    this.usage = value;
    return this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(start, count) {
    this.updateRanges.push({ start, count });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given interleaved buffer to this instance.
   *
   * @param {InterleavedBuffer} source - The interleaved buffer to copy.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copy(source) {
    this.array = new source.array.constructor(source.array);
    this.count = source.count;
    this.stride = source.stride;
    this.usage = source.usage;
    return this;
  }
  /**
   * Copies a vector from the given interleaved buffer to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this interleaved buffer.
   * @param {InterleavedBuffer} interleavedBuffer - The interleaved buffer to copy from.
   * @param {number} index2 - The source index into the given interleaved buffer.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  copyAt(index1, interleavedBuffer, index2) {
    index1 *= this.stride;
    index2 *= interleavedBuffer.stride;
    for (let i = 0, l = this.stride; i < l; i++) {
      this.array[index1 + i] = interleavedBuffer.array[index2 + i];
    }
    return this;
  }
  /**
   * Sets the given array data in the interleaved buffer.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this interleaved buffer's array.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  set(value, offset = 0) {
    this.array.set(value, offset);
    return this;
  }
  /**
   * Returns a new interleaved buffer with copied values from this instance.
   *
   * @param {Object} [data] - An object with shared array buffers that allows to retain shared structures.
   * @return {InterleavedBuffer} A clone of this instance.
   */
  clone(data) {
    if (data.arrayBuffers === void 0) {
      data.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === void 0) {
      this.array.buffer._uuid = generateUUID();
    }
    if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
      data.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
    }
    const array = new this.array.constructor(data.arrayBuffers[this.array.buffer._uuid]);
    const ib = new this.constructor(array, this.stride);
    ib.setUsage(this.usage);
    return ib;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the array data to the GPU. Can be used to perform clean-up operations after
   * the upload when data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {InterleavedBuffer} A reference to this instance.
   */
  onUpload(callback) {
    this.onUploadCallback = callback;
    return this;
  }
  /**
   * Serializes the interleaved buffer into JSON.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized interleaved buffer.
   */
  toJSON(data) {
    if (data.arrayBuffers === void 0) {
      data.arrayBuffers = {};
    }
    if (this.array.buffer._uuid === void 0) {
      this.array.buffer._uuid = generateUUID();
    }
    if (data.arrayBuffers[this.array.buffer._uuid] === void 0) {
      data.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer));
    }
    return {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
};
var _vector$8 = /* @__PURE__ */ new Vector3();
var InterleavedBufferAttribute = class _InterleavedBufferAttribute {
  /**
   * Constructs a new interleaved buffer attribute.
   *
   * @param {InterleavedBuffer} interleavedBuffer - The buffer holding the interleaved data.
   * @param {number} itemSize - The item size.
   * @param {number} offset - The attribute offset into the buffer.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(interleavedBuffer, itemSize, offset, normalized = false) {
    this.isInterleavedBufferAttribute = true;
    this.name = "";
    this.data = interleavedBuffer;
    this.itemSize = itemSize;
    this.offset = offset;
    this.normalized = normalized;
  }
  /**
   * The item count of this buffer attribute.
   *
   * @type {number}
   * @readonly
   */
  get count() {
    return this.data.count;
  }
  /**
   * The array holding the interleaved buffer attribute data.
   *
   * @type {TypedArray}
   */
  get array() {
    return this.data.array;
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    this.data.needsUpdate = value;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyMatrix4(m) {
    for (let i = 0, l = this.data.count; i < l; i++) {
      _vector$8.fromBufferAttribute(this, i);
      _vector$8.applyMatrix4(m);
      this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$8.fromBufferAttribute(this, i);
      _vector$8.applyNormalMatrix(m);
      this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  transformDirection(m) {
    for (let i = 0, l = this.count; i < l; i++) {
      _vector$8.fromBufferAttribute(this, i);
      _vector$8.transformDirection(m);
      this.setXYZ(i, _vector$8.x, _vector$8.y, _vector$8.z);
    }
    return this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(index, component) {
    let value = this.array[index * this.data.stride + this.offset + component];
    if (this.normalized) value = denormalize(value, this.array);
    return value;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setComponent(index, component, value) {
    if (this.normalized) value = normalize(value, this.array);
    this.data.array[index * this.data.stride + this.offset + component] = value;
    return this;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setX(index, x) {
    if (this.normalized) x = normalize(x, this.array);
    this.data.array[index * this.data.stride + this.offset] = x;
    return this;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setY(index, y) {
    if (this.normalized) y = normalize(y, this.array);
    this.data.array[index * this.data.stride + this.offset + 1] = y;
    return this;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setZ(index, z) {
    if (this.normalized) z = normalize(z, this.array);
    this.data.array[index * this.data.stride + this.offset + 2] = z;
    return this;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setW(index, w) {
    if (this.normalized) w = normalize(w, this.array);
    this.data.array[index * this.data.stride + this.offset + 3] = w;
    return this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(index) {
    let x = this.data.array[index * this.data.stride + this.offset];
    if (this.normalized) x = denormalize(x, this.array);
    return x;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(index) {
    let y = this.data.array[index * this.data.stride + this.offset + 1];
    if (this.normalized) y = denormalize(y, this.array);
    return y;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(index) {
    let z = this.data.array[index * this.data.stride + this.offset + 2];
    if (this.normalized) z = denormalize(z, this.array);
    return z;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(index) {
    let w = this.data.array[index * this.data.stride + this.offset + 3];
    if (this.normalized) w = denormalize(w, this.array);
    return w;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXY(index, x, y) {
    index = index * this.data.stride + this.offset;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
    }
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    return this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZ(index, x, y, z) {
    index = index * this.data.stride + this.offset;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
    }
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    return this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {InterleavedBufferAttribute} A reference to this instance.
   */
  setXYZW(index, x, y, z, w) {
    index = index * this.data.stride + this.offset;
    if (this.normalized) {
      x = normalize(x, this.array);
      y = normalize(y, this.array);
      z = normalize(z, this.array);
      w = normalize(w, this.array);
    }
    this.data.array[index + 0] = x;
    this.data.array[index + 1] = y;
    this.data.array[index + 2] = z;
    this.data.array[index + 3] = w;
    return this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An object with interleaved buffers that allows to retain the interleaved property.
   * @return {BufferAttribute|InterleavedBufferAttribute} A clone of this instance.
   */
  clone(data) {
    if (data === void 0) {
      log("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const array = [];
      for (let i = 0; i < this.count; i++) {
        const index = i * this.data.stride + this.offset;
        for (let j = 0; j < this.itemSize; j++) {
          array.push(this.data.array[index + j]);
        }
      }
      return new BufferAttribute(new this.array.constructor(array), this.itemSize, this.normalized);
    } else {
      if (data.interleavedBuffers === void 0) {
        data.interleavedBuffers = {};
      }
      if (data.interleavedBuffers[this.data.uuid] === void 0) {
        data.interleavedBuffers[this.data.uuid] = this.data.clone(data);
      }
      return new _InterleavedBufferAttribute(data.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
    }
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.
   *
   * @param {Object} [data] - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON(data) {
    if (data === void 0) {
      log("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const array = [];
      for (let i = 0; i < this.count; i++) {
        const index = i * this.data.stride + this.offset;
        for (let j = 0; j < this.itemSize; j++) {
          array.push(this.data.array[index + j]);
        }
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array,
        normalized: this.normalized
      };
    } else {
      if (data.interleavedBuffers === void 0) {
        data.interleavedBuffers = {};
      }
      if (data.interleavedBuffers[this.data.uuid] === void 0) {
        data.interleavedBuffers[this.data.uuid] = this.data.toJSON(data);
      }
      return {
        isInterleavedBufferAttribute: true,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
    }
  }
};
var _materialId = 0;
var Material = class extends EventDispatcher {
  /**
   * Constructs a new material.
   */
  constructor() {
    super();
    this.isMaterial = true;
    Object.defineProperty(this, "id", { value: _materialId++ });
    this.uuid = generateUUID();
    this.name = "";
    this.type = "Material";
    this.blending = NormalBlending;
    this.side = FrontSide;
    this.vertexColors = false;
    this.opacity = 1;
    this.transparent = false;
    this.alphaHash = false;
    this.blendSrc = SrcAlphaFactor;
    this.blendDst = OneMinusSrcAlphaFactor;
    this.blendEquation = AddEquation;
    this.blendSrcAlpha = null;
    this.blendDstAlpha = null;
    this.blendEquationAlpha = null;
    this.blendColor = new Color(0, 0, 0);
    this.blendAlpha = 0;
    this.depthFunc = LessEqualDepth;
    this.depthTest = true;
    this.depthWrite = true;
    this.stencilWriteMask = 255;
    this.stencilFunc = AlwaysStencilFunc;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilFail = KeepStencilOp;
    this.stencilZFail = KeepStencilOp;
    this.stencilZPass = KeepStencilOp;
    this.stencilWrite = false;
    this.clippingPlanes = null;
    this.clipIntersection = false;
    this.clipShadows = false;
    this.shadowSide = null;
    this.colorWrite = true;
    this.precision = null;
    this.polygonOffset = false;
    this.polygonOffsetFactor = 0;
    this.polygonOffsetUnits = 0;
    this.dithering = false;
    this.alphaToCoverage = false;
    this.premultipliedAlpha = false;
    this.forceSinglePass = false;
    this.allowOverride = true;
    this.visible = true;
    this.toneMapped = true;
    this.userData = {};
    this.version = 0;
    this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(value) {
    if (this._alphaTest > 0 !== value > 0) {
      this.version++;
    }
    this._alphaTest = value;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(values) {
    if (values === void 0) return;
    for (const key in values) {
      const newValue = values[key];
      if (newValue === void 0) {
        warn(`Material: parameter '${key}' has value of undefined.`);
        continue;
      }
      const currentValue = this[key];
      if (currentValue === void 0) {
        warn(`Material: '${key}' is not a property of THREE.${this.type}.`);
        continue;
      }
      if (currentValue && currentValue.isColor) {
        currentValue.set(newValue);
      } else if (currentValue && currentValue.isVector2 && (newValue && newValue.isVector2) || currentValue && currentValue.isEuler && (newValue && newValue.isEuler) || currentValue && currentValue.isVector3 && (newValue && newValue.isVector3)) {
        currentValue.copy(newValue);
      } else {
        this[key] = newValue;
      }
    }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(meta) {
    const isRootObject = meta === void 0 || typeof meta === "string";
    if (isRootObject) {
      meta = {
        textures: {},
        images: {}
      };
    }
    const data = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    data.uuid = this.uuid;
    data.type = this.type;
    if (this.name !== "") data.name = this.name;
    if (this.color && this.color.isColor) data.color = this.color.getHex();
    if (this.roughness !== void 0) data.roughness = this.roughness;
    if (this.metalness !== void 0) data.metalness = this.metalness;
    if (this.sheen !== void 0) data.sheen = this.sheen;
    if (this.sheenColor && this.sheenColor.isColor) data.sheenColor = this.sheenColor.getHex();
    if (this.sheenRoughness !== void 0) data.sheenRoughness = this.sheenRoughness;
    if (this.emissive && this.emissive.isColor) data.emissive = this.emissive.getHex();
    if (this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1) data.emissiveIntensity = this.emissiveIntensity;
    if (this.specular && this.specular.isColor) data.specular = this.specular.getHex();
    if (this.specularIntensity !== void 0) data.specularIntensity = this.specularIntensity;
    if (this.specularColor && this.specularColor.isColor) data.specularColor = this.specularColor.getHex();
    if (this.shininess !== void 0) data.shininess = this.shininess;
    if (this.clearcoat !== void 0) data.clearcoat = this.clearcoat;
    if (this.clearcoatRoughness !== void 0) data.clearcoatRoughness = this.clearcoatRoughness;
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      data.clearcoatMap = this.clearcoatMap.toJSON(meta).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      data.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(meta).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      data.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(meta).uuid;
      data.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.sheenColorMap && this.sheenColorMap.isTexture) {
      data.sheenColorMap = this.sheenColorMap.toJSON(meta).uuid;
    }
    if (this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture) {
      data.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(meta).uuid;
    }
    if (this.dispersion !== void 0) data.dispersion = this.dispersion;
    if (this.iridescence !== void 0) data.iridescence = this.iridescence;
    if (this.iridescenceIOR !== void 0) data.iridescenceIOR = this.iridescenceIOR;
    if (this.iridescenceThicknessRange !== void 0) data.iridescenceThicknessRange = this.iridescenceThicknessRange;
    if (this.iridescenceMap && this.iridescenceMap.isTexture) {
      data.iridescenceMap = this.iridescenceMap.toJSON(meta).uuid;
    }
    if (this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture) {
      data.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(meta).uuid;
    }
    if (this.anisotropy !== void 0) data.anisotropy = this.anisotropy;
    if (this.anisotropyRotation !== void 0) data.anisotropyRotation = this.anisotropyRotation;
    if (this.anisotropyMap && this.anisotropyMap.isTexture) {
      data.anisotropyMap = this.anisotropyMap.toJSON(meta).uuid;
    }
    if (this.map && this.map.isTexture) data.map = this.map.toJSON(meta).uuid;
    if (this.matcap && this.matcap.isTexture) data.matcap = this.matcap.toJSON(meta).uuid;
    if (this.alphaMap && this.alphaMap.isTexture) data.alphaMap = this.alphaMap.toJSON(meta).uuid;
    if (this.lightMap && this.lightMap.isTexture) {
      data.lightMap = this.lightMap.toJSON(meta).uuid;
      data.lightMapIntensity = this.lightMapIntensity;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      data.aoMap = this.aoMap.toJSON(meta).uuid;
      data.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      data.bumpMap = this.bumpMap.toJSON(meta).uuid;
      data.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      data.normalMap = this.normalMap.toJSON(meta).uuid;
      data.normalMapType = this.normalMapType;
      data.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      data.displacementMap = this.displacementMap.toJSON(meta).uuid;
      data.displacementScale = this.displacementScale;
      data.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) data.roughnessMap = this.roughnessMap.toJSON(meta).uuid;
    if (this.metalnessMap && this.metalnessMap.isTexture) data.metalnessMap = this.metalnessMap.toJSON(meta).uuid;
    if (this.emissiveMap && this.emissiveMap.isTexture) data.emissiveMap = this.emissiveMap.toJSON(meta).uuid;
    if (this.specularMap && this.specularMap.isTexture) data.specularMap = this.specularMap.toJSON(meta).uuid;
    if (this.specularIntensityMap && this.specularIntensityMap.isTexture) data.specularIntensityMap = this.specularIntensityMap.toJSON(meta).uuid;
    if (this.specularColorMap && this.specularColorMap.isTexture) data.specularColorMap = this.specularColorMap.toJSON(meta).uuid;
    if (this.envMap && this.envMap.isTexture) {
      data.envMap = this.envMap.toJSON(meta).uuid;
      if (this.combine !== void 0) data.combine = this.combine;
    }
    if (this.envMapRotation !== void 0) data.envMapRotation = this.envMapRotation.toArray();
    if (this.envMapIntensity !== void 0) data.envMapIntensity = this.envMapIntensity;
    if (this.reflectivity !== void 0) data.reflectivity = this.reflectivity;
    if (this.refractionRatio !== void 0) data.refractionRatio = this.refractionRatio;
    if (this.gradientMap && this.gradientMap.isTexture) {
      data.gradientMap = this.gradientMap.toJSON(meta).uuid;
    }
    if (this.transmission !== void 0) data.transmission = this.transmission;
    if (this.transmissionMap && this.transmissionMap.isTexture) data.transmissionMap = this.transmissionMap.toJSON(meta).uuid;
    if (this.thickness !== void 0) data.thickness = this.thickness;
    if (this.thicknessMap && this.thicknessMap.isTexture) data.thicknessMap = this.thicknessMap.toJSON(meta).uuid;
    if (this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity) data.attenuationDistance = this.attenuationDistance;
    if (this.attenuationColor !== void 0) data.attenuationColor = this.attenuationColor.getHex();
    if (this.size !== void 0) data.size = this.size;
    if (this.shadowSide !== null) data.shadowSide = this.shadowSide;
    if (this.sizeAttenuation !== void 0) data.sizeAttenuation = this.sizeAttenuation;
    if (this.blending !== NormalBlending) data.blending = this.blending;
    if (this.side !== FrontSide) data.side = this.side;
    if (this.vertexColors === true) data.vertexColors = true;
    if (this.opacity < 1) data.opacity = this.opacity;
    if (this.transparent === true) data.transparent = true;
    if (this.blendSrc !== SrcAlphaFactor) data.blendSrc = this.blendSrc;
    if (this.blendDst !== OneMinusSrcAlphaFactor) data.blendDst = this.blendDst;
    if (this.blendEquation !== AddEquation) data.blendEquation = this.blendEquation;
    if (this.blendSrcAlpha !== null) data.blendSrcAlpha = this.blendSrcAlpha;
    if (this.blendDstAlpha !== null) data.blendDstAlpha = this.blendDstAlpha;
    if (this.blendEquationAlpha !== null) data.blendEquationAlpha = this.blendEquationAlpha;
    if (this.blendColor && this.blendColor.isColor) data.blendColor = this.blendColor.getHex();
    if (this.blendAlpha !== 0) data.blendAlpha = this.blendAlpha;
    if (this.depthFunc !== LessEqualDepth) data.depthFunc = this.depthFunc;
    if (this.depthTest === false) data.depthTest = this.depthTest;
    if (this.depthWrite === false) data.depthWrite = this.depthWrite;
    if (this.colorWrite === false) data.colorWrite = this.colorWrite;
    if (this.stencilWriteMask !== 255) data.stencilWriteMask = this.stencilWriteMask;
    if (this.stencilFunc !== AlwaysStencilFunc) data.stencilFunc = this.stencilFunc;
    if (this.stencilRef !== 0) data.stencilRef = this.stencilRef;
    if (this.stencilFuncMask !== 255) data.stencilFuncMask = this.stencilFuncMask;
    if (this.stencilFail !== KeepStencilOp) data.stencilFail = this.stencilFail;
    if (this.stencilZFail !== KeepStencilOp) data.stencilZFail = this.stencilZFail;
    if (this.stencilZPass !== KeepStencilOp) data.stencilZPass = this.stencilZPass;
    if (this.stencilWrite === true) data.stencilWrite = this.stencilWrite;
    if (this.rotation !== void 0 && this.rotation !== 0) data.rotation = this.rotation;
    if (this.polygonOffset === true) data.polygonOffset = true;
    if (this.polygonOffsetFactor !== 0) data.polygonOffsetFactor = this.polygonOffsetFactor;
    if (this.polygonOffsetUnits !== 0) data.polygonOffsetUnits = this.polygonOffsetUnits;
    if (this.linewidth !== void 0 && this.linewidth !== 1) data.linewidth = this.linewidth;
    if (this.dashSize !== void 0) data.dashSize = this.dashSize;
    if (this.gapSize !== void 0) data.gapSize = this.gapSize;
    if (this.scale !== void 0) data.scale = this.scale;
    if (this.dithering === true) data.dithering = true;
    if (this.alphaTest > 0) data.alphaTest = this.alphaTest;
    if (this.alphaHash === true) data.alphaHash = true;
    if (this.alphaToCoverage === true) data.alphaToCoverage = true;
    if (this.premultipliedAlpha === true) data.premultipliedAlpha = true;
    if (this.forceSinglePass === true) data.forceSinglePass = true;
    if (this.allowOverride === false) data.allowOverride = false;
    if (this.wireframe === true) data.wireframe = true;
    if (this.wireframeLinewidth > 1) data.wireframeLinewidth = this.wireframeLinewidth;
    if (this.wireframeLinecap !== "round") data.wireframeLinecap = this.wireframeLinecap;
    if (this.wireframeLinejoin !== "round") data.wireframeLinejoin = this.wireframeLinejoin;
    if (this.flatShading === true) data.flatShading = true;
    if (this.visible === false) data.visible = false;
    if (this.toneMapped === false) data.toneMapped = false;
    if (this.fog === false) data.fog = false;
    if (Object.keys(this.userData).length > 0) data.userData = this.userData;
    function extractFromCache(cache) {
      const values = [];
      for (const key in cache) {
        const data2 = cache[key];
        delete data2.metadata;
        values.push(data2);
      }
      return values;
    }
    if (isRootObject) {
      const textures = extractFromCache(meta.textures);
      const images = extractFromCache(meta.images);
      if (textures.length > 0) data.textures = textures;
      if (images.length > 0) data.images = images;
    }
    return data;
  }
  /**
   * Deserializes the material from the given JSON.
   *
   * @param {Object} json - The JSON holding the serialized material.
   * @param {Object<string,Texture>} textures - A dictionary holding textures referenced by the material.
   * @return {Material} A reference to this material.
   */
  fromJSON(json, textures) {
    if (json.uuid !== void 0) this.uuid = json.uuid;
    if (json.name !== void 0) this.name = json.name;
    if (json.color !== void 0 && this.color !== void 0) this.color.setHex(json.color);
    if (json.roughness !== void 0) this.roughness = json.roughness;
    if (json.metalness !== void 0) this.metalness = json.metalness;
    if (json.sheen !== void 0) this.sheen = json.sheen;
    if (json.sheenColor !== void 0) this.sheenColor = new Color().setHex(json.sheenColor);
    if (json.sheenRoughness !== void 0) this.sheenRoughness = json.sheenRoughness;
    if (json.emissive !== void 0 && this.emissive !== void 0) this.emissive.setHex(json.emissive);
    if (json.specular !== void 0 && this.specular !== void 0) this.specular.setHex(json.specular);
    if (json.specularIntensity !== void 0) this.specularIntensity = json.specularIntensity;
    if (json.specularColor !== void 0 && this.specularColor !== void 0) this.specularColor.setHex(json.specularColor);
    if (json.shininess !== void 0) this.shininess = json.shininess;
    if (json.clearcoat !== void 0) this.clearcoat = json.clearcoat;
    if (json.clearcoatRoughness !== void 0) this.clearcoatRoughness = json.clearcoatRoughness;
    if (json.dispersion !== void 0) this.dispersion = json.dispersion;
    if (json.iridescence !== void 0) this.iridescence = json.iridescence;
    if (json.iridescenceIOR !== void 0) this.iridescenceIOR = json.iridescenceIOR;
    if (json.iridescenceThicknessRange !== void 0) this.iridescenceThicknessRange = json.iridescenceThicknessRange;
    if (json.transmission !== void 0) this.transmission = json.transmission;
    if (json.thickness !== void 0) this.thickness = json.thickness;
    if (json.attenuationDistance !== void 0) this.attenuationDistance = json.attenuationDistance;
    if (json.attenuationColor !== void 0 && this.attenuationColor !== void 0) this.attenuationColor.setHex(json.attenuationColor);
    if (json.anisotropy !== void 0) this.anisotropy = json.anisotropy;
    if (json.anisotropyRotation !== void 0) this.anisotropyRotation = json.anisotropyRotation;
    if (json.fog !== void 0) this.fog = json.fog;
    if (json.flatShading !== void 0) this.flatShading = json.flatShading;
    if (json.blending !== void 0) this.blending = json.blending;
    if (json.combine !== void 0) this.combine = json.combine;
    if (json.side !== void 0) this.side = json.side;
    if (json.shadowSide !== void 0) this.shadowSide = json.shadowSide;
    if (json.opacity !== void 0) this.opacity = json.opacity;
    if (json.transparent !== void 0) this.transparent = json.transparent;
    if (json.alphaTest !== void 0) this.alphaTest = json.alphaTest;
    if (json.alphaHash !== void 0) this.alphaHash = json.alphaHash;
    if (json.depthFunc !== void 0) this.depthFunc = json.depthFunc;
    if (json.depthTest !== void 0) this.depthTest = json.depthTest;
    if (json.depthWrite !== void 0) this.depthWrite = json.depthWrite;
    if (json.colorWrite !== void 0) this.colorWrite = json.colorWrite;
    if (json.blendSrc !== void 0) this.blendSrc = json.blendSrc;
    if (json.blendDst !== void 0) this.blendDst = json.blendDst;
    if (json.blendEquation !== void 0) this.blendEquation = json.blendEquation;
    if (json.blendSrcAlpha !== void 0) this.blendSrcAlpha = json.blendSrcAlpha;
    if (json.blendDstAlpha !== void 0) this.blendDstAlpha = json.blendDstAlpha;
    if (json.blendEquationAlpha !== void 0) this.blendEquationAlpha = json.blendEquationAlpha;
    if (json.blendColor !== void 0 && this.blendColor !== void 0) this.blendColor.setHex(json.blendColor);
    if (json.blendAlpha !== void 0) this.blendAlpha = json.blendAlpha;
    if (json.stencilWriteMask !== void 0) this.stencilWriteMask = json.stencilWriteMask;
    if (json.stencilFunc !== void 0) this.stencilFunc = json.stencilFunc;
    if (json.stencilRef !== void 0) this.stencilRef = json.stencilRef;
    if (json.stencilFuncMask !== void 0) this.stencilFuncMask = json.stencilFuncMask;
    if (json.stencilFail !== void 0) this.stencilFail = json.stencilFail;
    if (json.stencilZFail !== void 0) this.stencilZFail = json.stencilZFail;
    if (json.stencilZPass !== void 0) this.stencilZPass = json.stencilZPass;
    if (json.stencilWrite !== void 0) this.stencilWrite = json.stencilWrite;
    if (json.wireframe !== void 0) this.wireframe = json.wireframe;
    if (json.wireframeLinewidth !== void 0) this.wireframeLinewidth = json.wireframeLinewidth;
    if (json.wireframeLinecap !== void 0) this.wireframeLinecap = json.wireframeLinecap;
    if (json.wireframeLinejoin !== void 0) this.wireframeLinejoin = json.wireframeLinejoin;
    if (json.rotation !== void 0) this.rotation = json.rotation;
    if (json.linewidth !== void 0) this.linewidth = json.linewidth;
    if (json.dashSize !== void 0) this.dashSize = json.dashSize;
    if (json.gapSize !== void 0) this.gapSize = json.gapSize;
    if (json.scale !== void 0) this.scale = json.scale;
    if (json.polygonOffset !== void 0) this.polygonOffset = json.polygonOffset;
    if (json.polygonOffsetFactor !== void 0) this.polygonOffsetFactor = json.polygonOffsetFactor;
    if (json.polygonOffsetUnits !== void 0) this.polygonOffsetUnits = json.polygonOffsetUnits;
    if (json.dithering !== void 0) this.dithering = json.dithering;
    if (json.alphaToCoverage !== void 0) this.alphaToCoverage = json.alphaToCoverage;
    if (json.premultipliedAlpha !== void 0) this.premultipliedAlpha = json.premultipliedAlpha;
    if (json.forceSinglePass !== void 0) this.forceSinglePass = json.forceSinglePass;
    if (json.allowOverride !== void 0) this.allowOverride = json.allowOverride;
    if (json.visible !== void 0) this.visible = json.visible;
    if (json.toneMapped !== void 0) this.toneMapped = json.toneMapped;
    if (json.userData !== void 0) this.userData = json.userData;
    if (json.vertexColors !== void 0) {
      if (typeof json.vertexColors === "number") {
        this.vertexColors = json.vertexColors > 0;
      } else {
        this.vertexColors = json.vertexColors;
      }
    }
    if (json.size !== void 0) this.size = json.size;
    if (json.sizeAttenuation !== void 0) this.sizeAttenuation = json.sizeAttenuation;
    if (json.map !== void 0) this.map = textures[json.map] || null;
    if (json.matcap !== void 0) this.matcap = textures[json.matcap] || null;
    if (json.alphaMap !== void 0) this.alphaMap = textures[json.alphaMap] || null;
    if (json.bumpMap !== void 0) this.bumpMap = textures[json.bumpMap] || null;
    if (json.bumpScale !== void 0) this.bumpScale = json.bumpScale;
    if (json.normalMap !== void 0) this.normalMap = textures[json.normalMap] || null;
    if (json.normalMapType !== void 0) this.normalMapType = json.normalMapType;
    if (json.normalScale !== void 0) {
      let normalScale = json.normalScale;
      if (Array.isArray(normalScale) === false) {
        normalScale = [normalScale, normalScale];
      }
      this.normalScale = new Vector2().fromArray(normalScale);
    }
    if (json.displacementMap !== void 0) this.displacementMap = textures[json.displacementMap] || null;
    if (json.displacementScale !== void 0) this.displacementScale = json.displacementScale;
    if (json.displacementBias !== void 0) this.displacementBias = json.displacementBias;
    if (json.roughnessMap !== void 0) this.roughnessMap = textures[json.roughnessMap] || null;
    if (json.metalnessMap !== void 0) this.metalnessMap = textures[json.metalnessMap] || null;
    if (json.emissiveMap !== void 0) this.emissiveMap = textures[json.emissiveMap] || null;
    if (json.emissiveIntensity !== void 0) this.emissiveIntensity = json.emissiveIntensity;
    if (json.specularMap !== void 0) this.specularMap = textures[json.specularMap] || null;
    if (json.specularIntensityMap !== void 0) this.specularIntensityMap = textures[json.specularIntensityMap] || null;
    if (json.specularColorMap !== void 0) this.specularColorMap = textures[json.specularColorMap] || null;
    if (json.envMap !== void 0) this.envMap = textures[json.envMap] || null;
    if (json.envMapRotation !== void 0) this.envMapRotation.fromArray(json.envMapRotation);
    if (json.envMapIntensity !== void 0) this.envMapIntensity = json.envMapIntensity;
    if (json.reflectivity !== void 0) this.reflectivity = json.reflectivity;
    if (json.refractionRatio !== void 0) this.refractionRatio = json.refractionRatio;
    if (json.lightMap !== void 0) this.lightMap = textures[json.lightMap] || null;
    if (json.lightMapIntensity !== void 0) this.lightMapIntensity = json.lightMapIntensity;
    if (json.aoMap !== void 0) this.aoMap = textures[json.aoMap] || null;
    if (json.aoMapIntensity !== void 0) this.aoMapIntensity = json.aoMapIntensity;
    if (json.gradientMap !== void 0) this.gradientMap = textures[json.gradientMap] || null;
    if (json.clearcoatMap !== void 0) this.clearcoatMap = textures[json.clearcoatMap] || null;
    if (json.clearcoatRoughnessMap !== void 0) this.clearcoatRoughnessMap = textures[json.clearcoatRoughnessMap] || null;
    if (json.clearcoatNormalMap !== void 0) this.clearcoatNormalMap = textures[json.clearcoatNormalMap] || null;
    if (json.clearcoatNormalScale !== void 0) this.clearcoatNormalScale = new Vector2().fromArray(json.clearcoatNormalScale);
    if (json.iridescenceMap !== void 0) this.iridescenceMap = textures[json.iridescenceMap] || null;
    if (json.iridescenceThicknessMap !== void 0) this.iridescenceThicknessMap = textures[json.iridescenceThicknessMap] || null;
    if (json.transmissionMap !== void 0) this.transmissionMap = textures[json.transmissionMap] || null;
    if (json.thicknessMap !== void 0) this.thicknessMap = textures[json.thicknessMap] || null;
    if (json.anisotropyMap !== void 0) this.anisotropyMap = textures[json.anisotropyMap] || null;
    if (json.sheenColorMap !== void 0) this.sheenColorMap = textures[json.sheenColorMap] || null;
    if (json.sheenRoughnessMap !== void 0) this.sheenRoughnessMap = textures[json.sheenRoughnessMap] || null;
    return this;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(source) {
    this.name = source.name;
    this.blending = source.blending;
    this.side = source.side;
    this.vertexColors = source.vertexColors;
    this.opacity = source.opacity;
    this.transparent = source.transparent;
    this.blendSrc = source.blendSrc;
    this.blendDst = source.blendDst;
    this.blendEquation = source.blendEquation;
    this.blendSrcAlpha = source.blendSrcAlpha;
    this.blendDstAlpha = source.blendDstAlpha;
    this.blendEquationAlpha = source.blendEquationAlpha;
    this.blendColor.copy(source.blendColor);
    this.blendAlpha = source.blendAlpha;
    this.depthFunc = source.depthFunc;
    this.depthTest = source.depthTest;
    this.depthWrite = source.depthWrite;
    this.stencilWriteMask = source.stencilWriteMask;
    this.stencilFunc = source.stencilFunc;
    this.stencilRef = source.stencilRef;
    this.stencilFuncMask = source.stencilFuncMask;
    this.stencilFail = source.stencilFail;
    this.stencilZFail = source.stencilZFail;
    this.stencilZPass = source.stencilZPass;
    this.stencilWrite = source.stencilWrite;
    const srcPlanes = source.clippingPlanes;
    let dstPlanes = null;
    if (srcPlanes !== null) {
      const n = srcPlanes.length;
      dstPlanes = new Array(n);
      for (let i = 0; i !== n; ++i) {
        dstPlanes[i] = srcPlanes[i].clone();
      }
    }
    this.clippingPlanes = dstPlanes;
    this.clipIntersection = source.clipIntersection;
    this.clipShadows = source.clipShadows;
    this.shadowSide = source.shadowSide;
    this.colorWrite = source.colorWrite;
    this.precision = source.precision;
    this.polygonOffset = source.polygonOffset;
    this.polygonOffsetFactor = source.polygonOffsetFactor;
    this.polygonOffsetUnits = source.polygonOffsetUnits;
    this.dithering = source.dithering;
    this.alphaTest = source.alphaTest;
    this.alphaHash = source.alphaHash;
    this.alphaToCoverage = source.alphaToCoverage;
    this.premultipliedAlpha = source.premultipliedAlpha;
    this.forceSinglePass = source.forceSinglePass;
    this.allowOverride = source.allowOverride;
    this.visible = source.visible;
    this.toneMapped = source.toneMapped;
    this.userData = JSON.parse(JSON.stringify(source.userData));
    return this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(value) {
    if (value === true) this.version++;
  }
};
var SpriteMaterial = class extends Material {
  /**
   * Constructs a new sprite material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(parameters) {
    super();
    this.isSpriteMaterial = true;
    this.type = "SpriteMaterial";
    this.color = new Color(16777215);
    this.map = null;
    this.alphaMap = null;
    this.rotation = 0;
    this.sizeAttenuation = true;
    this.transparent = true;
    this.fog = true;
    this.setValues(parameters);
  }
  copy(source) {
    super.copy(source);
    this.color.copy(source.color);
    this.map = source.map;
    this.alphaMap = source.alphaMap;
    this.rotation = source.rotation;
    this.sizeAttenuation = source.sizeAttenuation;
    this.fog = source.fog;
    return this;
  }
};
var _geometry;
var _intersectPoint = /* @__PURE__ */ new Vector3();
var _worldScale = /* @__PURE__ */ new Vector3();
var _mvPosition = /* @__PURE__ */ new Vector3();
var _alignedPosition = /* @__PURE__ */ new Vector2();
var _rotatedPosition = /* @__PURE__ */ new Vector2();
var _viewWorldMatrix = /* @__PURE__ */ new Matrix4();
var _vA$1 = /* @__PURE__ */ new Vector3();
var _vB$1 = /* @__PURE__ */ new Vector3();
var _vC$1 = /* @__PURE__ */ new Vector3();
var _uvA = /* @__PURE__ */ new Vector2();
var _uvB = /* @__PURE__ */ new Vector2();
var _uvC = /* @__PURE__ */ new Vector2();
var Sprite = class extends Object3D {
  /**
   * Constructs a new sprite.
   *
   * @param {(SpriteMaterial|SpriteNodeMaterial)} [material] - The sprite material.
   */
  constructor(material = new SpriteMaterial()) {
    super();
    this.isSprite = true;
    this.type = "Sprite";
    if (_geometry === void 0) {
      _geometry = new BufferGeometry();
      const float32Array = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]);
      const interleavedBuffer = new InterleavedBuffer(float32Array, 5);
      _geometry.setIndex([0, 1, 2, 0, 2, 3]);
      _geometry.setAttribute("position", new InterleavedBufferAttribute(interleavedBuffer, 3, 0, false));
      _geometry.setAttribute("uv", new InterleavedBufferAttribute(interleavedBuffer, 2, 3, false));
    }
    this.geometry = _geometry;
    this.material = material;
    this.center = new Vector2(0.5, 0.5);
    this.count = 1;
  }
  /**
   * Computes intersection points between a casted ray and this sprite.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(raycaster, intersects) {
    if (raycaster.camera === null) {
      error('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
    }
    _worldScale.setFromMatrixScale(this.matrixWorld);
    _viewWorldMatrix.copy(raycaster.camera.matrixWorld);
    this.modelViewMatrix.multiplyMatrices(raycaster.camera.matrixWorldInverse, this.matrixWorld);
    _mvPosition.setFromMatrixPosition(this.modelViewMatrix);
    if (raycaster.camera.isPerspectiveCamera && this.material.sizeAttenuation === false) {
      _worldScale.multiplyScalar(-_mvPosition.z);
    }
    const rotation = this.material.rotation;
    let sin, cos;
    if (rotation !== 0) {
      cos = Math.cos(rotation);
      sin = Math.sin(rotation);
    }
    const center = this.center;
    transformVertex(_vA$1.set(-0.5, -0.5, 0), _mvPosition, center, _worldScale, sin, cos);
    transformVertex(_vB$1.set(0.5, -0.5, 0), _mvPosition, center, _worldScale, sin, cos);
    transformVertex(_vC$1.set(0.5, 0.5, 0), _mvPosition, center, _worldScale, sin, cos);
    _uvA.set(0, 0);
    _uvB.set(1, 0);
    _uvC.set(1, 1);
    let intersect = raycaster.ray.intersectTriangle(_vA$1, _vB$1, _vC$1, false, _intersectPoint);
    if (intersect === null) {
      transformVertex(_vB$1.set(-0.5, 0.5, 0), _mvPosition, center, _worldScale, sin, cos);
      _uvB.set(0, 1);
      intersect = raycaster.ray.intersectTriangle(_vA$1, _vC$1, _vB$1, false, _intersectPoint);
      if (intersect === null) {
        return;
      }
    }
    const distance = raycaster.ray.origin.distanceTo(_intersectPoint);
    if (distance < raycaster.near || distance > raycaster.far) return;
    intersects.push({
      distance,
      point: _intersectPoint.clone(),
      uv: Triangle.getInterpolation(_intersectPoint, _vA$1, _vB$1, _vC$1, _uvA, _uvB, _uvC, new Vector2()),
      face: null,
      object: this
    });
  }
  copy(source, recursive) {
    super.copy(source, recursive);
    if (source.center !== void 0) this.center.copy(source.center);
    this.material = source.material;
    return this;
  }
};
function transformVertex(vertexPosition, mvPosition, center, scale, sin, cos) {
  _alignedPosition.subVectors(vertexPosition, center).addScalar(0.5).multiply(scale);
  if (sin !== void 0) {
    _rotatedPosition.x = cos * _alignedPosition.x - sin * _alignedPosition.y;
    _rotatedPosition.y = sin * _alignedPosition.x + cos * _alignedPosition.y;
  } else {
    _rotatedPosition.copy(_alignedPosition);
  }
  vertexPosition.copy(mvPosition);
  vertexPosition.x += _rotatedPosition.x;
  vertexPosition.y += _rotatedPosition.y;
  vertexPosition.applyMatrix4(_viewWorldMatrix);
}
var CanvasTexture = class extends Texture {
  /**
   * Constructs a new texture.
   *
   * @param {HTMLCanvasElement} [canvas] - The HTML canvas element.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   */
  constructor(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy) {
    super(canvas, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy);
    this.isCanvasTexture = true;
    this.needsUpdate = true;
  }
};
function cloneUniforms(src) {
  const dst = {};
  for (const u in src) {
    dst[u] = {};
    for (const p in src[u]) {
      const property = src[u][p];
      if (isThreeObject(property)) {
        if (property.isRenderTargetTexture) {
          warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");
          dst[u][p] = null;
        } else {
          dst[u][p] = property.clone();
        }
      } else if (Array.isArray(property)) {
        if (isThreeObject(property[0])) {
          const clonedProperty = [];
          for (let i = 0, l = property.length; i < l; i++) {
            clonedProperty[i] = property[i].clone();
          }
          dst[u][p] = clonedProperty;
        } else {
          dst[u][p] = property.slice();
        }
      } else {
        dst[u][p] = property;
      }
    }
  }
  return dst;
}
function mergeUniforms(uniforms) {
  const merged = {};
  for (let u = 0; u < uniforms.length; u++) {
    const tmp = cloneUniforms(uniforms[u]);
    for (const p in tmp) {
      merged[p] = tmp[p];
    }
  }
  return merged;
}
function isThreeObject(property) {
  return property && (property.isColor || property.isMatrix3 || property.isMatrix4 || property.isVector2 || property.isVector3 || property.isVector4 || property.isTexture || property.isQuaternion);
}
function convertArray(array, type) {
  if (!array || array.constructor === type) return array;
  if (typeof type.BYTES_PER_ELEMENT === "number") {
    return new type(array);
  }
  return Array.prototype.slice.call(array);
}
var Interpolant = class {
  /**
   * Constructs a new interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    this.parameterPositions = parameterPositions;
    this._cachedIndex = 0;
    this.resultBuffer = resultBuffer !== void 0 ? resultBuffer : new sampleValues.constructor(sampleSize);
    this.sampleValues = sampleValues;
    this.valueSize = sampleSize;
    this.settings = null;
    this.DefaultSettings_ = {};
  }
  /**
   * Evaluate the interpolant at position `t`.
   *
   * @param {number} t - The interpolation factor.
   * @return {TypedArray} The result buffer.
   */
  evaluate(t) {
    const pp = this.parameterPositions;
    let i1 = this._cachedIndex, t1 = pp[i1], t0 = pp[i1 - 1];
    validate_interval: {
      seek: {
        let right;
        linear_scan: {
          forward_scan: if (!(t < t1)) {
            for (let giveUpAt = i1 + 2; ; ) {
              if (t1 === void 0) {
                if (t < t0) break forward_scan;
                i1 = pp.length;
                this._cachedIndex = i1;
                return this.copySampleValue_(i1 - 1);
              }
              if (i1 === giveUpAt) break;
              t0 = t1;
              t1 = pp[++i1];
              if (t < t1) {
                break seek;
              }
            }
            right = pp.length;
            break linear_scan;
          }
          if (!(t >= t0)) {
            const t1global = pp[1];
            if (t < t1global) {
              i1 = 2;
              t0 = t1global;
            }
            for (let giveUpAt = i1 - 2; ; ) {
              if (t0 === void 0) {
                this._cachedIndex = 0;
                return this.copySampleValue_(0);
              }
              if (i1 === giveUpAt) break;
              t1 = t0;
              t0 = pp[--i1 - 1];
              if (t >= t0) {
                break seek;
              }
            }
            right = i1;
            i1 = 0;
            break linear_scan;
          }
          break validate_interval;
        }
        while (i1 < right) {
          const mid = i1 + right >>> 1;
          if (t < pp[mid]) {
            right = mid;
          } else {
            i1 = mid + 1;
          }
        }
        t1 = pp[i1];
        t0 = pp[i1 - 1];
        if (t0 === void 0) {
          this._cachedIndex = 0;
          return this.copySampleValue_(0);
        }
        if (t1 === void 0) {
          i1 = pp.length;
          this._cachedIndex = i1;
          return this.copySampleValue_(i1 - 1);
        }
      }
      this._cachedIndex = i1;
      this.intervalChanged_(i1, t0, t1);
    }
    return this.interpolate_(i1, t0, t, t1);
  }
  /**
   * Returns the interpolation settings.
   *
   * @return {Object} The interpolation settings.
   */
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  /**
   * Copies a sample value to the result buffer.
   *
   * @param {number} index - An index into the sample value buffer.
   * @return {TypedArray} The result buffer.
   */
  copySampleValue_(index) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset = index * stride;
    for (let i = 0; i !== stride; ++i) {
      result[i] = values[offset + i];
    }
    return result;
  }
  /**
   * Copies a sample value to the result buffer.
   *
   * @abstract
   * @param {number} i1 - An index into the sample value buffer.
   * @param {number} t0 - The previous interpolation factor.
   * @param {number} t - The current interpolation factor.
   * @param {number} t1 - The next interpolation factor.
   * @return {TypedArray} The result buffer.
   */
  interpolate_() {
    throw new Error("THREE.Interpolant: Call to abstract method.");
  }
  /**
   * Optional method that is executed when the interval has changed.
   *
   * @param {number} i1 - An index into the sample value buffer.
   * @param {number} t0 - The previous interpolation factor.
   * @param {number} t - The current interpolation factor.
   */
  intervalChanged_() {
  }
};
var CubicInterpolant = class extends Interpolant {
  /**
   * Constructs a new cubic interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    this._weightPrev = -0;
    this._offsetPrev = -0;
    this._weightNext = -0;
    this._offsetNext = -0;
    this.DefaultSettings_ = {
      endingStart: ZeroCurvatureEnding,
      endingEnd: ZeroCurvatureEnding
    };
  }
  intervalChanged_(i1, t0, t1) {
    const pp = this.parameterPositions;
    let iPrev = i1 - 2, iNext = i1 + 1, tPrev = pp[iPrev], tNext = pp[iNext];
    if (tPrev === void 0) {
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          iPrev = i1;
          tPrev = 2 * t0 - t1;
          break;
        case WrapAroundEnding:
          iPrev = pp.length - 2;
          tPrev = t0 + pp[iPrev] - pp[iPrev + 1];
          break;
        default:
          iPrev = i1;
          tPrev = t1;
      }
    }
    if (tNext === void 0) {
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          iNext = i1;
          tNext = 2 * t1 - t0;
          break;
        case WrapAroundEnding:
          iNext = 1;
          tNext = t1 + pp[1] - pp[0];
          break;
        default:
          iNext = i1 - 1;
          tNext = t0;
      }
    }
    const halfDt = (t1 - t0) * 0.5, stride = this.valueSize;
    this._weightPrev = halfDt / (t0 - tPrev);
    this._weightNext = halfDt / (tNext - t1);
    this._offsetPrev = iPrev * stride;
    this._offsetNext = iNext * stride;
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, o1 = i1 * stride, o0 = o1 - stride, oP = this._offsetPrev, oN = this._offsetNext, wP = this._weightPrev, wN = this._weightNext, p = (t - t0) / (t1 - t0), pp = p * p, ppp = pp * p;
    const sP = -wP * ppp + 2 * wP * pp - wP * p;
    const s0 = (1 + wP) * ppp + (-1.5 - 2 * wP) * pp + (-0.5 + wP) * p + 1;
    const s1 = (-1 - wN) * ppp + (1.5 + wN) * pp + 0.5 * p;
    const sN = wN * ppp - wN * pp;
    for (let i = 0; i !== stride; ++i) {
      result[i] = sP * values[oP + i] + s0 * values[o0 + i] + s1 * values[o1 + i] + sN * values[oN + i];
    }
    return result;
  }
};
var LinearInterpolant = class extends Interpolant {
  /**
   * Constructs a new linear interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, offset1 = i1 * stride, offset0 = offset1 - stride, weight1 = (t - t0) / (t1 - t0), weight0 = 1 - weight1;
    for (let i = 0; i !== stride; ++i) {
      result[i] = values[offset0 + i] * weight0 + values[offset1 + i] * weight1;
    }
    return result;
  }
};
var DiscreteInterpolant = class extends Interpolant {
  /**
   * Constructs a new discrete interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1) {
    return this.copySampleValue_(i1 - 1);
  }
};
var BezierInterpolant = class extends Interpolant {
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer;
    const values = this.sampleValues;
    const stride = this.valueSize;
    const offset1 = i1 * stride;
    const offset0 = offset1 - stride;
    const inTangents = this.inTangents;
    const outTangents = this.outTangents;
    if (!inTangents || !outTangents) {
      const weight1 = (t - t0) / (t1 - t0);
      const weight0 = 1 - weight1;
      for (let i = 0; i !== stride; ++i) {
        result[i] = values[offset0 + i] * weight0 + values[offset1 + i] * weight1;
      }
      return result;
    }
    const tangentStride = stride * 2;
    const i0 = i1 - 1;
    for (let i = 0; i !== stride; ++i) {
      const v0 = values[offset0 + i];
      const v1 = values[offset1 + i];
      const outTangentOffset = i0 * tangentStride + i * 2;
      const c0x = outTangents[outTangentOffset];
      const c0y = outTangents[outTangentOffset + 1];
      const inTangentOffset = i1 * tangentStride + i * 2;
      const c1x = inTangents[inTangentOffset];
      const c1y = inTangents[inTangentOffset + 1];
      let s = (t - t0) / (t1 - t0);
      let s22, s3, oneMinusS, oneMinusS2, oneMinusS3;
      for (let iter = 0; iter < 8; iter++) {
        s22 = s * s;
        s3 = s22 * s;
        oneMinusS = 1 - s;
        oneMinusS2 = oneMinusS * oneMinusS;
        oneMinusS3 = oneMinusS2 * oneMinusS;
        const bx = oneMinusS3 * t0 + 3 * oneMinusS2 * s * c0x + 3 * oneMinusS * s22 * c1x + s3 * t1;
        const error2 = bx - t;
        if (Math.abs(error2) < 1e-10) break;
        const dbx = 3 * oneMinusS2 * (c0x - t0) + 6 * oneMinusS * s * (c1x - c0x) + 3 * s22 * (t1 - c1x);
        if (Math.abs(dbx) < 1e-10) break;
        s = s - error2 / dbx;
        s = Math.max(0, Math.min(1, s));
      }
      result[i] = oneMinusS3 * v0 + 3 * oneMinusS2 * s * c0y + 3 * oneMinusS * s22 * c1y + s3 * v1;
    }
    return result;
  }
};
var KeyframeTrack = class {
  /**
   * Constructs a new keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number|string|boolean>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth|InterpolateBezier)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    if (name === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (times === void 0 || times.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + name);
    this.name = name;
    this.times = convertArray(times, this.TimeBufferType);
    this.values = convertArray(values, this.ValueBufferType);
    this.setInterpolation(interpolation || this.DefaultInterpolation);
  }
  /**
   * Converts the keyframe track to JSON.
   *
   * @static
   * @param {KeyframeTrack} track - The keyframe track to serialize.
   * @return {Object} The serialized keyframe track as JSON.
   */
  static toJSON(track) {
    const trackType = track.constructor;
    let json;
    if (trackType.toJSON !== this.toJSON) {
      json = trackType.toJSON(track);
    } else {
      json = {
        "name": track.name,
        "times": convertArray(track.times, Array),
        "values": convertArray(track.values, Array)
      };
      const interpolation = track.getInterpolation();
      if (interpolation !== track.DefaultInterpolation) {
        json.interpolation = interpolation;
      }
    }
    json.type = track.ValueTypeName;
    return json;
  }
  /**
   * Factory method for creating a new discrete interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {DiscreteInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodDiscrete(result) {
    return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  /**
   * Factory method for creating a new linear interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {LinearInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodLinear(result) {
    return new LinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  /**
   * Factory method for creating a new smooth interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {CubicInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodSmooth(result) {
    return new CubicInterpolant(this.times, this.values, this.getValueSize(), result);
  }
  /**
   * Factory method for creating a new Bezier interpolant.
   *
   * The Bezier interpolant requires tangent data to be set via the `settings` property
   * on the track before creating the interpolant. The settings should contain:
   * - `inTangents`: Float32Array with [time, value] pairs per keyframe per component
   * - `outTangents`: Float32Array with [time, value] pairs per keyframe per component
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {BezierInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodBezier(result) {
    const interpolant = new BezierInterpolant(this.times, this.values, this.getValueSize(), result);
    if (this.settings) {
      interpolant.inTangents = this.settings.inTangents;
      interpolant.outTangents = this.settings.outTangents;
    }
    return interpolant;
  }
  /**
   * Defines the interpolation factor method for this keyframe track.
   *
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth|InterpolateBezier)} interpolation - The interpolation type.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  setInterpolation(interpolation) {
    let factoryMethod;
    switch (interpolation) {
      case InterpolateDiscrete:
        factoryMethod = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        factoryMethod = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        factoryMethod = this.InterpolantFactoryMethodSmooth;
        break;
      case InterpolateBezier:
        factoryMethod = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (factoryMethod === void 0) {
      const message = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) {
        if (interpolation !== this.DefaultInterpolation) {
          this.setInterpolation(this.DefaultInterpolation);
        } else {
          throw new Error(message);
        }
      }
      warn("KeyframeTrack:", message);
      return this;
    }
    this.createInterpolant = factoryMethod;
    return this;
  }
  /**
   * Returns the current interpolation type.
   *
   * @return {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth|InterpolateBezier)} The interpolation type.
   */
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
      case this.InterpolantFactoryMethodBezier:
        return InterpolateBezier;
    }
  }
  /**
   * Returns the value size.
   *
   * @return {number} The value size.
   */
  getValueSize() {
    return this.values.length / this.times.length;
  }
  /**
   * Moves all keyframes either forward or backward in time.
   *
   * @param {number} timeOffset - The offset to move the time values.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  shift(timeOffset) {
    if (timeOffset !== 0) {
      const times = this.times;
      for (let i = 0, n = times.length; i !== n; ++i) {
        times[i] += timeOffset;
      }
    }
    return this;
  }
  /**
   * Scale all keyframe times by a factor (useful for frame - seconds conversions).
   *
   * @param {number} timeScale - The time scale.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  scale(timeScale) {
    if (timeScale !== 1) {
      const times = this.times;
      for (let i = 0, n = times.length; i !== n; ++i) {
        times[i] *= timeScale;
      }
    }
    return this;
  }
  /**
   * Removes keyframes before and after animation without changing any values within the defined time range.
   *
   * Note: The method does not shift around keys to the start of the track time, because for interpolated
   * keys this will change their values
   *
   * @param {number} startTime - The start time.
   * @param {number} endTime - The end time.
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  trim(startTime, endTime) {
    const times = this.times, nKeys = times.length;
    let from = 0, to = nKeys - 1;
    while (from !== nKeys && times[from] < startTime) {
      ++from;
    }
    while (to !== -1 && times[to] > endTime) {
      --to;
    }
    ++to;
    if (from !== 0 || to !== nKeys) {
      if (from >= to) {
        to = Math.max(to, 1);
        from = to - 1;
      }
      const stride = this.getValueSize();
      this.times = times.slice(from, to);
      this.values = this.values.slice(from * stride, to * stride);
    }
    return this;
  }
  /**
   * Performs minimal validation on the keyframe track. Returns `true` if the values
   * are valid.
   *
   * @return {boolean} Whether the keyframes are valid or not.
   */
  validate() {
    let valid = true;
    const valueSize = this.getValueSize();
    if (valueSize - Math.floor(valueSize) !== 0) {
      error("KeyframeTrack: Invalid value size in track.", this);
      valid = false;
    }
    const times = this.times, values = this.values, nKeys = times.length;
    if (nKeys === 0) {
      error("KeyframeTrack: Track is empty.", this);
      valid = false;
    }
    let prevTime = null;
    for (let i = 0; i !== nKeys; i++) {
      const currTime = times[i];
      if (typeof currTime === "number" && isNaN(currTime)) {
        error("KeyframeTrack: Time is not a valid number.", this, i, currTime);
        valid = false;
        break;
      }
      if (prevTime !== null && prevTime > currTime) {
        error("KeyframeTrack: Out of order keys.", this, i, currTime, prevTime);
        valid = false;
        break;
      }
      prevTime = currTime;
    }
    if (values !== void 0) {
      if (isTypedArray(values)) {
        for (let i = 0, n = values.length; i !== n; ++i) {
          const value = values[i];
          if (isNaN(value)) {
            error("KeyframeTrack: Value is not a valid number.", this, i, value);
            valid = false;
            break;
          }
        }
      }
    }
    return valid;
  }
  /**
   * Optimizes this keyframe track by removing equivalent sequential keys (which are
   * common in morph target sequences).
   *
   * @return {KeyframeTrack} A reference to this keyframe track.
   */
  optimize() {
    const times = this.times.slice(), values = this.values.slice(), stride = this.getValueSize(), smoothInterpolation = this.getInterpolation() === InterpolateSmooth, lastIndex = times.length - 1;
    let writeIndex = 1;
    for (let i = 1; i < lastIndex; ++i) {
      let keep = false;
      const time = times[i];
      const timeNext = times[i + 1];
      if (time !== timeNext && (i !== 1 || time !== times[0])) {
        if (!smoothInterpolation) {
          const offset = i * stride, offsetP = offset - stride, offsetN = offset + stride;
          for (let j = 0; j !== stride; ++j) {
            const value = values[offset + j];
            if (value !== values[offsetP + j] || value !== values[offsetN + j]) {
              keep = true;
              break;
            }
          }
        } else {
          keep = true;
        }
      }
      if (keep) {
        if (i !== writeIndex) {
          times[writeIndex] = times[i];
          const readOffset = i * stride, writeOffset = writeIndex * stride;
          for (let j = 0; j !== stride; ++j) {
            values[writeOffset + j] = values[readOffset + j];
          }
        }
        ++writeIndex;
      }
    }
    if (lastIndex > 0) {
      times[writeIndex] = times[lastIndex];
      for (let readOffset = lastIndex * stride, writeOffset = writeIndex * stride, j = 0; j !== stride; ++j) {
        values[writeOffset + j] = values[readOffset + j];
      }
      ++writeIndex;
    }
    if (writeIndex !== times.length) {
      this.times = times.slice(0, writeIndex);
      this.values = values.slice(0, writeIndex * stride);
    } else {
      this.times = times;
      this.values = values;
    }
    return this;
  }
  /**
   * Returns a new keyframe track with copied values from this instance.
   *
   * @return {KeyframeTrack} A clone of this instance.
   */
  clone() {
    const times = this.times.slice();
    const values = this.values.slice();
    const TypedKeyframeTrack = this.constructor;
    const track = new TypedKeyframeTrack(this.name, times, values);
    track.createInterpolant = this.createInterpolant;
    return track;
  }
};
KeyframeTrack.prototype.ValueTypeName = "";
KeyframeTrack.prototype.TimeBufferType = Float32Array;
KeyframeTrack.prototype.ValueBufferType = Float32Array;
KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
var BooleanKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new boolean keyframe track.
   *
   * This keyframe track type has no `interpolation` parameter because the
   * interpolation is always discrete.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<boolean>} values - A list of keyframe values.
   */
  constructor(name, times, values) {
    super(name, times, values);
  }
};
BooleanKeyframeTrack.prototype.ValueTypeName = "bool";
BooleanKeyframeTrack.prototype.ValueBufferType = Array;
BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var ColorKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new color keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
};
ColorKeyframeTrack.prototype.ValueTypeName = "color";
var NumberKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new number keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
};
NumberKeyframeTrack.prototype.ValueTypeName = "number";
var QuaternionLinearInterpolant = class extends Interpolant {
  /**
   * Constructs a new SLERP interpolant.
   *
   * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
   * @param {TypedArray} sampleValues - The sample values.
   * @param {number} sampleSize - The sample size
   * @param {TypedArray} [resultBuffer] - The result buffer.
   */
  constructor(parameterPositions, sampleValues, sampleSize, resultBuffer) {
    super(parameterPositions, sampleValues, sampleSize, resultBuffer);
  }
  interpolate_(i1, t0, t, t1) {
    const result = this.resultBuffer, values = this.sampleValues, stride = this.valueSize, alpha = (t - t0) / (t1 - t0);
    let offset = i1 * stride;
    for (let end = offset + stride; offset !== end; offset += 4) {
      Quaternion.slerpFlat(result, 0, values, offset - stride, values, offset, alpha);
    }
    return result;
  }
};
var QuaternionKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new Quaternion keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
  /**
   * Overwritten so the method returns Quaternion based interpolant.
   *
   * @static
   * @param {TypedArray} [result] - The result buffer.
   * @return {QuaternionLinearInterpolant} The new interpolant.
   */
  InterpolantFactoryMethodLinear(result) {
    return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), result);
  }
};
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion";
QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var StringKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new string keyframe track.
   *
   * This keyframe track type has no `interpolation` parameter because the
   * interpolation is always discrete.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<string>} values - A list of keyframe values.
   */
  constructor(name, times, values) {
    super(name, times, values);
  }
};
StringKeyframeTrack.prototype.ValueTypeName = "string";
StringKeyframeTrack.prototype.ValueBufferType = Array;
StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0;
StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var VectorKeyframeTrack = class extends KeyframeTrack {
  /**
   * Constructs a new vector keyframe track.
   *
   * @param {string} name - The keyframe track's name.
   * @param {Array<number>} times - A list of keyframe times.
   * @param {Array<number>} values - A list of keyframe values.
   * @param {(InterpolateLinear|InterpolateDiscrete|InterpolateSmooth)} [interpolation] - The interpolation type.
   */
  constructor(name, times, values, interpolation) {
    super(name, times, values, interpolation);
  }
};
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
var LoadingManager = class {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(onLoad, onProgress, onError) {
    const scope = this;
    let isLoading = false;
    let itemsLoaded = 0;
    let itemsTotal = 0;
    let urlModifier = void 0;
    const handlers = [];
    this.onStart = void 0;
    this.onLoad = onLoad;
    this.onProgress = onProgress;
    this.onError = onError;
    this._abortController = null;
    this.itemStart = function(url) {
      itemsTotal++;
      if (isLoading === false) {
        if (scope.onStart !== void 0) {
          scope.onStart(url, itemsLoaded, itemsTotal);
        }
      }
      isLoading = true;
    };
    this.itemEnd = function(url) {
      itemsLoaded++;
      if (scope.onProgress !== void 0) {
        scope.onProgress(url, itemsLoaded, itemsTotal);
      }
      if (itemsLoaded === itemsTotal) {
        isLoading = false;
        if (scope.onLoad !== void 0) {
          scope.onLoad();
        }
      }
    };
    this.itemError = function(url) {
      if (scope.onError !== void 0) {
        scope.onError(url);
      }
    };
    this.resolveURL = function(url) {
      url = url.normalize("NFC");
      if (urlModifier) {
        return urlModifier(url);
      }
      return url;
    };
    this.setURLModifier = function(transform) {
      urlModifier = transform;
      return this;
    };
    this.addHandler = function(regex, loader) {
      handlers.push(regex, loader);
      return this;
    };
    this.removeHandler = function(regex) {
      const index = handlers.indexOf(regex);
      if (index !== -1) {
        handlers.splice(index, 2);
      }
      return this;
    };
    this.getHandler = function(file) {
      for (let i = 0, l = handlers.length; i < l; i += 2) {
        const regex = handlers[i];
        const loader = handlers[i + 1];
        if (regex.global) regex.lastIndex = 0;
        if (regex.test(file)) {
          return loader;
        }
      }
      return null;
    };
    this.abort = function() {
      this.abortController.abort();
      this._abortController = null;
      return this;
    };
  }
  // TODO: Revert this back to a single member variable once this issue has been fixed
  // https://github.com/cloudflare/workerd/issues/3657
  /**
   * Used for aborting ongoing requests in loaders using this manager.
   *
   * @type {AbortController}
   */
  get abortController() {
    if (!this._abortController) {
      this._abortController = new AbortController();
    }
    return this._abortController;
  }
};
var DefaultLoadingManager = /* @__PURE__ */ new LoadingManager();
var Loader = class {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(manager) {
    this.manager = manager !== void 0 ? manager : DefaultLoadingManager;
    this.crossOrigin = "anonymous";
    this.withCredentials = false;
    this.path = "";
    this.resourcePath = "";
    this.requestHeader = {};
    if (typeof __THREE_DEVTOOLS__ !== "undefined") {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @abstract
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(url, onProgress) {
    const scope = this;
    return new Promise(function(resolve, reject) {
      scope.load(url, resolve, onProgress, reject);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @abstract
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(crossOrigin) {
    this.crossOrigin = crossOrigin;
    return this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(value) {
    this.withCredentials = value;
    return this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(path) {
    this.path = path;
    return this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
    return this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(requestHeader) {
    this.requestHeader = requestHeader;
    return this;
  }
  /**
   * This method can be implemented in loaders for aborting ongoing requests.
   *
   * @abstract
   * @return {Loader} A reference to this instance.
   */
  abort() {
    return this;
  }
};
Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var _RESERVED_CHARS_RE = "\\[\\]\\.:\\/";
var _reservedRe = new RegExp("[" + _RESERVED_CHARS_RE + "]", "g");
var _wordChar = "[^" + _RESERVED_CHARS_RE + "]";
var _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]";
var _directoryRe = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", _wordChar);
var _nodeRe = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot);
var _objectRe = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar);
var _propertyRe = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar);
var _trackRe = new RegExp(
  "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
);
var _supportedObjectNames = ["material", "materials", "bones", "map"];
var Composite = class {
  constructor(targetGroup, path, optionalParsedPath) {
    const parsedPath = optionalParsedPath || PropertyBinding.parseTrackName(path);
    this._targetGroup = targetGroup;
    this._bindings = targetGroup.subscribe_(path, parsedPath);
  }
  getValue(array, offset) {
    this.bind();
    const firstValidIndex = this._targetGroup.nCachedObjects_, binding = this._bindings[firstValidIndex];
    if (binding !== void 0) binding.getValue(array, offset);
  }
  setValue(array, offset) {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].setValue(array, offset);
    }
  }
  bind() {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].bind();
    }
  }
  unbind() {
    const bindings = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = bindings.length; i !== n; ++i) {
      bindings[i].unbind();
    }
  }
};
var PropertyBinding = class _PropertyBinding {
  /**
   * Constructs a new property binding.
   *
   * @param {Object} rootNode - The root node.
   * @param {string} path - The path.
   * @param {?Object} [parsedPath] - The parsed path.
   */
  constructor(rootNode, path, parsedPath) {
    this.path = path;
    this.parsedPath = parsedPath || _PropertyBinding.parseTrackName(path);
    this.node = _PropertyBinding.findNode(rootNode, this.parsedPath.nodeName);
    this.rootNode = rootNode;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
  /**
   * Factory method for creating a property binding from the given parameters.
   *
   * @static
   * @param {Object} root - The root node.
   * @param {string} path - The path.
   * @param {?Object} [parsedPath] - The parsed path.
   * @return {PropertyBinding|Composite} The created property binding or composite.
   */
  static create(root, path, parsedPath) {
    if (!(root && root.isAnimationObjectGroup)) {
      return new _PropertyBinding(root, path, parsedPath);
    } else {
      return new _PropertyBinding.Composite(root, path, parsedPath);
    }
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name - Node name to be sanitized.
   * @return {string} The sanitized node name.
   */
  static sanitizeNodeName(name) {
    return name.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  /**
   * Parses the given track name (an object path to an animated property) and
   * returns an object with information about the path. Matches strings in the following forms:
   *
   * - nodeName.property
   * - nodeName.property[accessor]
   * - nodeName.material.property[accessor]
   * - uuid.property[accessor]
   * - uuid.objectName[objectIndex].propertyName[propertyIndex]
   * - parentName/nodeName.property
   * - parentName/parentName/nodeName.property[index]
   * - .bone[Armature.DEF_cog].position
   * - scene:helium_balloon_model:helium_balloon_model.position
   *
   * @static
   * @param {string} trackName - The track name to parse.
   * @return {Object} The parsed track name as an object.
   */
  static parseTrackName(trackName) {
    const matches = _trackRe.exec(trackName);
    if (matches === null) {
      throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + trackName);
    }
    const results = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: matches[2],
      objectName: matches[3],
      objectIndex: matches[4],
      propertyName: matches[5],
      // required
      propertyIndex: matches[6]
    };
    const lastDot = results.nodeName && results.nodeName.lastIndexOf(".");
    if (lastDot !== void 0 && lastDot !== -1) {
      const objectName = results.nodeName.substring(lastDot + 1);
      if (_supportedObjectNames.indexOf(objectName) !== -1) {
        results.nodeName = results.nodeName.substring(0, lastDot);
        results.objectName = objectName;
      }
    }
    if (results.propertyName === null || results.propertyName.length === 0) {
      throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + trackName);
    }
    return results;
  }
  /**
   * Searches for a node in the hierarchy of the given root object by the given
   * node name.
   *
   * @static
   * @param {Object} root - The root object.
   * @param {string|number} nodeName - The name of the node.
   * @return {?Object} The found node. Returns `null` if no object was found.
   */
  static findNode(root, nodeName) {
    if (nodeName === void 0 || nodeName === "" || nodeName === "." || nodeName === -1 || nodeName === root.name || nodeName === root.uuid) {
      return root;
    }
    if (root.skeleton) {
      const bone = root.skeleton.getBoneByName(nodeName);
      if (bone !== void 0) {
        return bone;
      }
    }
    if (root.children) {
      const searchNodeSubtree = function(children) {
        for (let i = 0; i < children.length; i++) {
          const childNode = children[i];
          if (childNode.name === nodeName || childNode.uuid === nodeName) {
            return childNode;
          }
          const result = searchNodeSubtree(childNode.children);
          if (result) return result;
        }
        return null;
      };
      const subTreeNode = searchNodeSubtree(root.children);
      if (subTreeNode) {
        return subTreeNode;
      }
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(buffer, offset) {
    buffer[offset] = this.targetObject[this.propertyName];
  }
  _getValue_array(buffer, offset) {
    const source = this.resolvedProperty;
    for (let i = 0, n = source.length; i !== n; ++i) {
      buffer[offset++] = source[i];
    }
  }
  _getValue_arrayElement(buffer, offset) {
    buffer[offset] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(buffer, offset) {
    this.resolvedProperty.toArray(buffer, offset);
  }
  // Direct
  _setValue_direct(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
  }
  _setValue_direct_setNeedsUpdate(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.targetObject[this.propertyName] = buffer[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // EntireArray
  _setValue_array(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer[offset++];
    }
  }
  _setValue_array_setNeedsUpdate(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer[offset++];
    }
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(buffer, offset) {
    const dest = this.resolvedProperty;
    for (let i = 0, n = dest.length; i !== n; ++i) {
      dest[i] = buffer[offset++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // ArrayElement
  _setValue_arrayElement(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
  }
  _setValue_arrayElement_setNeedsUpdate(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
    this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.resolvedProperty[this.propertyIndex] = buffer[offset];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  // HasToFromArray
  _setValue_fromArray(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
  }
  _setValue_fromArray_setNeedsUpdate(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
    this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(buffer, offset) {
    this.resolvedProperty.fromArray(buffer, offset);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(targetArray, offset) {
    this.bind();
    this.getValue(targetArray, offset);
  }
  _setValue_unbound(sourceArray, offset) {
    this.bind();
    this.setValue(sourceArray, offset);
  }
  /**
   * Creates a getter / setter pair for the property tracked by this binding.
   */
  bind() {
    let targetObject = this.node;
    const parsedPath = this.parsedPath;
    const objectName = parsedPath.objectName;
    const propertyName = parsedPath.propertyName;
    let propertyIndex = parsedPath.propertyIndex;
    if (!targetObject) {
      targetObject = _PropertyBinding.findNode(this.rootNode, parsedPath.nodeName);
      this.node = targetObject;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (!targetObject) {
      warn("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (objectName) {
      let objectIndex = parsedPath.objectIndex;
      switch (objectName) {
        case "materials":
          if (!targetObject.material) {
            error("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.materials) {
            error("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          targetObject = targetObject.material.materials;
          break;
        case "bones":
          if (!targetObject.skeleton) {
            error("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          targetObject = targetObject.skeleton.bones;
          for (let i = 0; i < targetObject.length; i++) {
            if (targetObject[i].name === objectIndex) {
              objectIndex = i;
              break;
            }
          }
          break;
        case "map":
          if ("map" in targetObject) {
            targetObject = targetObject.map;
            break;
          }
          if (!targetObject.material) {
            error("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!targetObject.material.map) {
            error("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          targetObject = targetObject.material.map;
          break;
        default:
          if (targetObject[objectName] === void 0) {
            error("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          targetObject = targetObject[objectName];
      }
      if (objectIndex !== void 0) {
        if (targetObject[objectIndex] === void 0) {
          error("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, targetObject);
          return;
        }
        targetObject = targetObject[objectIndex];
      }
    }
    const nodeProperty = targetObject[propertyName];
    if (nodeProperty === void 0) {
      const nodeName = parsedPath.nodeName;
      error("PropertyBinding: Trying to update property for track: " + nodeName + "." + propertyName + " but it wasn't found.", targetObject);
      return;
    }
    let versioning = this.Versioning.None;
    this.targetObject = targetObject;
    if (targetObject.isMaterial === true) {
      versioning = this.Versioning.NeedsUpdate;
    } else if (targetObject.isObject3D === true) {
      versioning = this.Versioning.MatrixWorldNeedsUpdate;
    }
    let bindingType = this.BindingType.Direct;
    if (propertyIndex !== void 0) {
      if (propertyName === "morphTargetInfluences") {
        if (!targetObject.geometry) {
          error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!targetObject.geometry.morphAttributes) {
          error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        if (targetObject.morphTargetDictionary[propertyIndex] !== void 0) {
          propertyIndex = targetObject.morphTargetDictionary[propertyIndex];
        }
      }
      bindingType = this.BindingType.ArrayElement;
      this.resolvedProperty = nodeProperty;
      this.propertyIndex = propertyIndex;
    } else if (nodeProperty.fromArray !== void 0 && nodeProperty.toArray !== void 0) {
      bindingType = this.BindingType.HasFromToArray;
      this.resolvedProperty = nodeProperty;
    } else if (Array.isArray(nodeProperty)) {
      bindingType = this.BindingType.EntireArray;
      this.resolvedProperty = nodeProperty;
    } else {
      this.propertyName = propertyName;
    }
    this.getValue = this.GetterByBindingType[bindingType];
    this.setValue = this.SetterByBindingTypeAndVersioning[bindingType][versioning];
  }
  /**
   * Unbinds the property.
   */
  unbind() {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
};
PropertyBinding.Composite = Composite;
PropertyBinding.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
PropertyBinding.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
PropertyBinding.prototype.GetterByBindingType = [
  PropertyBinding.prototype._getValue_direct,
  PropertyBinding.prototype._getValue_array,
  PropertyBinding.prototype._getValue_arrayElement,
  PropertyBinding.prototype._getValue_toArray
];
PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    PropertyBinding.prototype._setValue_direct,
    PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
    PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    PropertyBinding.prototype._setValue_array,
    PropertyBinding.prototype._setValue_array_setNeedsUpdate,
    PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    PropertyBinding.prototype._setValue_arrayElement,
    PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
    PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    PropertyBinding.prototype._setValue_fromArray,
    PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
    PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var _controlInterpolantsResultBuffer = new Float32Array(1);
var Matrix2 = class _Matrix2 {
  static {
    _Matrix2.prototype.isMatrix2 = true;
  }
  /**
   * Constructs a new 2x2 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   */
  constructor(n11, n12, n21, n22) {
    this.elements = [
      1,
      0,
      0,
      1
    ];
    if (n11 !== void 0) {
      this.set(n11, n12, n21, n22);
    }
  }
  /**
   * Sets this matrix to the 2x2 identity matrix.
   *
   * @return {Matrix2} A reference to this matrix.
   */
  identity() {
    this.set(
      1,
      0,
      0,
      1
    );
    return this;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix2} A reference to this matrix.
   */
  fromArray(array, offset = 0) {
    for (let i = 0; i < 4; i++) {
      this.elements[i] = array[i + offset];
    }
    return this;
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} n11 - 1-1 matrix element.
   * @param {number} n12 - 1-2 matrix element.
   * @param {number} n21 - 2-1 matrix element.
   * @param {number} n22 - 2-2 matrix element.
   * @return {Matrix2} A reference to this matrix.
   */
  set(n11, n12, n21, n22) {
    const te = this.elements;
    te[0] = n11;
    te[2] = n12;
    te[1] = n21;
    te[3] = n22;
    return this;
  }
};
if (typeof __THREE_DEVTOOLS__ !== "undefined") {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: REVISION
  } }));
}
if (typeof window !== "undefined") {
  if (window.__THREE__) {
    warn("WARNING: Multiple instances of Three.js being imported.");
  } else {
    window.__THREE__ = REVISION;
  }
}

// node_modules/three/build/three.module.js
var alphahash_fragment = "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif";
var alphahash_pars_fragment = "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif";
var alphamap_fragment = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif";
var alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var alphatest_fragment = "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif";
var alphatest_pars_fragment = "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif";
var aomap_fragment = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif";
var aomap_pars_fragment = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif";
var batching_pars_vertex = "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif";
var batching_vertex = "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif";
var begin_vertex = "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif";
var beginnormal_vertex = "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif";
var bsdfs = "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated";
var iridescence_fragment = "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif";
var bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif";
var clipping_planes_fragment = "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif";
var clipping_planes_pars_fragment = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif";
var clipping_planes_pars_vertex = "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif";
var clipping_planes_vertex = "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif";
var color_fragment = "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif";
var color_pars_fragment = "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif";
var color_pars_vertex = "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif";
var color_vertex = "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif";
var common = "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated";
var cube_uv_reflection_fragment = "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif";
var defaultnormal_vertex = "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif";
var displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif";
var displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif";
var emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif";
var emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif";
var colorspace_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );";
var colorspace_pars_fragment = "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}";
var envmap_fragment = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif";
var envmap_common_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif";
var envmap_pars_fragment = "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif";
var envmap_pars_vertex = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif";
var envmap_vertex = "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif";
var fog_vertex = "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif";
var fog_pars_vertex = "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif";
var fog_fragment = "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif";
var fog_pars_fragment = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif";
var gradientmap_pars_fragment = "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}";
var lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif";
var lights_lambert_fragment = "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;";
var lights_lambert_pars_fragment = "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert";
var lights_pars_begin = "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>";
var envmap_physical_pars_fragment = "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif";
var lights_toon_fragment = "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;";
var lights_toon_pars_fragment = "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon";
var lights_phong_fragment = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;";
var lights_phong_pars_fragment = "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong";
var lights_physical_fragment = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif";
var lights_physical_pars_fragment = "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}";
var lights_fragment_begin = "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif";
var lights_fragment_maps = "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif";
var lights_fragment_end = "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif";
var lightprobes_pars_fragment = "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif";
var logdepthbuf_fragment = "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif";
var logdepthbuf_pars_fragment = "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif";
var logdepthbuf_pars_vertex = "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif";
var logdepthbuf_vertex = "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif";
var map_fragment = "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif";
var map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif";
var map_particle_fragment = "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif";
var map_particle_pars_fragment = "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif";
var metalnessmap_fragment = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif";
var metalnessmap_pars_fragment = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif";
var morphinstance_vertex = "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif";
var morphcolor_vertex = "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif";
var morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif";
var morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif";
var morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif";
var normal_fragment_begin = "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;";
var normal_fragment_maps = "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif";
var normal_pars_fragment = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_pars_vertex = "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif";
var normal_vertex = "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif";
var normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif";
var clearcoat_normal_fragment_begin = "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif";
var clearcoat_normal_fragment_maps = "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif";
var clearcoat_pars_fragment = "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif";
var iridescence_pars_fragment = "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif";
var opaque_fragment = "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );";
var packing = "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}";
var premultiplied_alpha_fragment = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif";
var project_vertex = "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;";
var dithering_fragment = "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif";
var dithering_pars_fragment = "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif";
var roughnessmap_fragment = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif";
var roughnessmap_pars_fragment = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif";
var shadowmap_pars_fragment = "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif";
var shadowmap_pars_vertex = "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif";
var shadowmap_vertex = "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif";
var shadowmask_pars_fragment = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}";
var skinbase_vertex = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
var skinning_pars_vertex = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif";
var skinning_vertex = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif";
var skinnormal_vertex = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif";
var specularmap_fragment = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif";
var specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif";
var tonemapping_fragment = "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif";
var tonemapping_pars_fragment = "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }";
var transmission_fragment = "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif";
var transmission_pars_fragment = "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif";
var uv_pars_fragment = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif";
var uv_pars_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif";
var uv_vertex = "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif";
var worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif";
var vertex$h = "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}";
var fragment$h = "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$g = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
var fragment$g = "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$f = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}";
var fragment$f = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$e = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}";
var fragment$e = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}";
var vertex$d = "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}";
var fragment$d = "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}";
var vertex$c = "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}";
var fragment$c = "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}";
var vertex$b = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
var fragment$b = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$a = "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$a = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$9 = "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$9 = "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$8 = "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}";
var fragment$8 = "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$7 = "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}";
var fragment$7 = "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}";
var vertex$6 = "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$6 = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$5 = "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}";
var fragment$5 = "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$4 = "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$4 = "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}";
var vertex$3 = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}";
var fragment$3 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$2 = "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}";
var fragment$2 = "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}";
var vertex$1 = "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}";
var fragment$1 = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}";
var ShaderChunk = {
  alphahash_fragment,
  alphahash_pars_fragment,
  alphamap_fragment,
  alphamap_pars_fragment,
  alphatest_fragment,
  alphatest_pars_fragment,
  aomap_fragment,
  aomap_pars_fragment,
  batching_pars_vertex,
  batching_vertex,
  begin_vertex,
  beginnormal_vertex,
  bsdfs,
  iridescence_fragment,
  bumpmap_pars_fragment,
  clipping_planes_fragment,
  clipping_planes_pars_fragment,
  clipping_planes_pars_vertex,
  clipping_planes_vertex,
  color_fragment,
  color_pars_fragment,
  color_pars_vertex,
  color_vertex,
  common,
  cube_uv_reflection_fragment,
  defaultnormal_vertex,
  displacementmap_pars_vertex,
  displacementmap_vertex,
  emissivemap_fragment,
  emissivemap_pars_fragment,
  colorspace_fragment,
  colorspace_pars_fragment,
  envmap_fragment,
  envmap_common_pars_fragment,
  envmap_pars_fragment,
  envmap_pars_vertex,
  envmap_physical_pars_fragment,
  envmap_vertex,
  fog_vertex,
  fog_pars_vertex,
  fog_fragment,
  fog_pars_fragment,
  gradientmap_pars_fragment,
  lightmap_pars_fragment,
  lights_lambert_fragment,
  lights_lambert_pars_fragment,
  lights_pars_begin,
  lights_toon_fragment,
  lights_toon_pars_fragment,
  lights_phong_fragment,
  lights_phong_pars_fragment,
  lights_physical_fragment,
  lights_physical_pars_fragment,
  lights_fragment_begin,
  lights_fragment_maps,
  lights_fragment_end,
  lightprobes_pars_fragment,
  logdepthbuf_fragment,
  logdepthbuf_pars_fragment,
  logdepthbuf_pars_vertex,
  logdepthbuf_vertex,
  map_fragment,
  map_pars_fragment,
  map_particle_fragment,
  map_particle_pars_fragment,
  metalnessmap_fragment,
  metalnessmap_pars_fragment,
  morphinstance_vertex,
  morphcolor_vertex,
  morphnormal_vertex,
  morphtarget_pars_vertex,
  morphtarget_vertex,
  normal_fragment_begin,
  normal_fragment_maps,
  normal_pars_fragment,
  normal_pars_vertex,
  normal_vertex,
  normalmap_pars_fragment,
  clearcoat_normal_fragment_begin,
  clearcoat_normal_fragment_maps,
  clearcoat_pars_fragment,
  iridescence_pars_fragment,
  opaque_fragment,
  packing,
  premultiplied_alpha_fragment,
  project_vertex,
  dithering_fragment,
  dithering_pars_fragment,
  roughnessmap_fragment,
  roughnessmap_pars_fragment,
  shadowmap_pars_fragment,
  shadowmap_pars_vertex,
  shadowmap_vertex,
  shadowmask_pars_fragment,
  skinbase_vertex,
  skinning_pars_vertex,
  skinning_vertex,
  skinnormal_vertex,
  specularmap_fragment,
  specularmap_pars_fragment,
  tonemapping_fragment,
  tonemapping_pars_fragment,
  transmission_fragment,
  transmission_pars_fragment,
  uv_pars_fragment,
  uv_pars_vertex,
  uv_vertex,
  worldpos_vertex,
  background_vert: vertex$h,
  background_frag: fragment$h,
  backgroundCube_vert: vertex$g,
  backgroundCube_frag: fragment$g,
  cube_vert: vertex$f,
  cube_frag: fragment$f,
  depth_vert: vertex$e,
  depth_frag: fragment$e,
  distance_vert: vertex$d,
  distance_frag: fragment$d,
  equirect_vert: vertex$c,
  equirect_frag: fragment$c,
  linedashed_vert: vertex$b,
  linedashed_frag: fragment$b,
  meshbasic_vert: vertex$a,
  meshbasic_frag: fragment$a,
  meshlambert_vert: vertex$9,
  meshlambert_frag: fragment$9,
  meshmatcap_vert: vertex$8,
  meshmatcap_frag: fragment$8,
  meshnormal_vert: vertex$7,
  meshnormal_frag: fragment$7,
  meshphong_vert: vertex$6,
  meshphong_frag: fragment$6,
  meshphysical_vert: vertex$5,
  meshphysical_frag: fragment$5,
  meshtoon_vert: vertex$4,
  meshtoon_frag: fragment$4,
  points_vert: vertex$3,
  points_frag: fragment$3,
  shadow_vert: vertex$2,
  shadow_frag: fragment$2,
  sprite_vert: vertex$1,
  sprite_frag: fragment$1
};
var UniformsLib = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Matrix3() },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 },
    // basic, lambert, phong
    dfgLUT: { value: null }
    // DFG LUT for physically-based rendering
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    normalScale: { value: /* @__PURE__ */ new Vector2(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Color(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: null },
    probesMin: { value: /* @__PURE__ */ new Vector3() },
    probesMax: { value: /* @__PURE__ */ new Vector3() },
    probesResolution: { value: /* @__PURE__ */ new Vector3() }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Matrix3() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Color(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Vector2(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Matrix3() },
    alphaTest: { value: 0 }
  }
};
var ShaderLib = {
  basic: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        specular: { value: /* @__PURE__ */ new Color(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.roughnessmap,
      UniformsLib.metalnessmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: /* @__PURE__ */ new Color(0) }
      }
    ]),
    vertexShader: ShaderChunk.meshtoon_vert,
    fragmentShader: ShaderChunk.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.points,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap
    ]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.meshnormal_vert,
    fragmentShader: ShaderChunk.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.sprite,
      UniformsLib.fog
    ]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Matrix3() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Matrix3() }
    },
    vertexShader: ShaderChunk.backgroundCube_vert,
    fragmentShader: ShaderChunk.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.common,
      UniformsLib.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new Vector3() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ShaderChunk.distance_vert,
    fragmentShader: ShaderChunk.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ mergeUniforms([
      UniformsLib.lights,
      UniformsLib.fog,
      {
        color: { value: /* @__PURE__ */ new Color(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
ShaderLib.physical = {
  uniforms: /* @__PURE__ */ mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Vector2(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Color(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Color(0) },
      specularColor: { value: /* @__PURE__ */ new Color(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Matrix3() },
      anisotropyVector: { value: /* @__PURE__ */ new Vector2() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Matrix3() }
    }
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
var _m$1 = /* @__PURE__ */ new Matrix3();
_m$1.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
var toneMappingMap = {
  [LinearToneMapping]: "LINEAR_TONE_MAPPING",
  [ReinhardToneMapping]: "REINHARD_TONE_MAPPING",
  [CineonToneMapping]: "CINEON_TONE_MAPPING",
  [ACESFilmicToneMapping]: "ACES_FILMIC_TONE_MAPPING",
  [AgXToneMapping]: "AGX_TONE_MAPPING",
  [NeutralToneMapping]: "NEUTRAL_TONE_MAPPING",
  [CustomToneMapping]: "CUSTOM_TONE_MAPPING"
};
var mat4array = new Float32Array(16);
var mat3array = new Float32Array(9);
var mat2array = new Float32Array(4);
var toneMappingFunctions = {
  [LinearToneMapping]: "Linear",
  [ReinhardToneMapping]: "Reinhard",
  [CineonToneMapping]: "Cineon",
  [ACESFilmicToneMapping]: "ACESFilmic",
  [AgXToneMapping]: "AgX",
  [NeutralToneMapping]: "Neutral",
  [CustomToneMapping]: "Custom"
};
var shadowMapTypeDefines = {
  [PCFShadowMap]: "SHADOWMAP_TYPE_PCF",
  [VSMShadowMap]: "SHADOWMAP_TYPE_VSM"
};
var envMapTypeDefines = {
  [CubeReflectionMapping]: "ENVMAP_TYPE_CUBE",
  [CubeRefractionMapping]: "ENVMAP_TYPE_CUBE",
  [CubeUVReflectionMapping]: "ENVMAP_TYPE_CUBE_UV"
};
var envMapModeDefines = {
  [CubeRefractionMapping]: "ENVMAP_MODE_REFRACTION"
};
var envMapBlendingDefines = {
  [MultiplyOperation]: "ENVMAP_BLENDING_MULTIPLY",
  [MixOperation]: "ENVMAP_BLENDING_MIX",
  [AddOperation]: "ENVMAP_BLENDING_ADD"
};
var _m = /* @__PURE__ */ new Matrix3();
_m.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
var DATA = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]);

// src/render/Projection.ts
var Projection = class _Projection {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_Projection.instance) _Projection.instance = new _Projection();
    return _Projection.instance;
  }
  /** 格子边长（正方形，像素） */
  get tileSize() {
    return dataManager.config.render.tileWidth;
  }
  /** 兼容旧字段 */
  get tileWidth() {
    return this.tileSize;
  }
  get tileHeight() {
    return this.tileSize;
  }
  /** 世界格坐标 → 屏幕坐标（z 为物体高度偏移，像素） */
  worldToScreen(row, col, z = 0) {
    return {
      x: col * this.tileSize,
      y: row * this.tileSize - z
    };
  }
  /** 格中心（用于实体站立点） */
  tileCenter(row, col, z = 0) {
    return this.worldToScreen(row + 0.5, col + 0.5, z);
  }
  /** 屏幕坐标 → 世界格坐标（取地面 z=0 平面，含小数） */
  screenToWorld(sx, sy) {
    return {
      col: sx / this.tileSize,
      row: sy / this.tileSize
    };
  }
};
var projection = Projection.getInstance();

// src/effects/ThreeParticleSystem.ts
var circleTex = null;
function getCircleTexture() {
  if (!circleTex) {
    const c = document.createElement("canvas");
    c.width = 16;
    c.height = 16;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(8, 8, 7, 0, Math.PI * 2);
    ctx.fill();
    circleTex = new CanvasTexture(c);
    circleTex.colorSpace = SRGBColorSpace;
  }
  return circleTex;
}
var ThreeParticleSystem = class _ThreeParticleSystem {
  static instance;
  items = [];
  constructor() {
  }
  static getInstance() {
    if (!_ThreeParticleSystem.instance) _ThreeParticleSystem.instance = new _ThreeParticleSystem();
    return _ThreeParticleSystem.instance;
  }
  get count() {
    return this.items.length;
  }
  /** 在 (x, y) 世界像素处爆发 count 个粒子 */
  burst(x, y, color, count, opts) {
    const cap = dataManager.config.render.maxParticles;
    const speed = opts?.speed ?? 0.08;
    const life = opts?.life ?? 600;
    const size = opts?.size ?? 4;
    for (let i = 0; i < count; i++) {
      const angle = Math.PI * 2 * i / count + Math.random() * 0.4;
      const sp = speed * (0.6 + Math.random() * 0.8);
      this.items.push({
        x,
        y,
        vx: Math.cos(angle) * sp,
        vy: Math.sin(angle) * sp,
        life,
        maxLife: life,
        color,
        size,
        view: null
      });
    }
    while (this.items.length > cap) this.removeAt(0);
  }
  update(deltaTime) {
    const alive = [];
    for (const p of this.items) {
      p.life -= deltaTime;
      p.x += p.vx * deltaTime;
      p.y += p.vy * deltaTime;
      p.vy += 8e-5 * deltaTime;
      if (p.life > 0) alive.push(p);
      else this.disposeView(p);
    }
    this.items = alive;
  }
  /** 每帧由 ThreeRenderer 调用：挂到粒子层并同步世界坐标 */
  syncTo(group) {
    const ts = projection.tileSize;
    for (const p of this.items) {
      if (!p.view) {
        const s = p.size * 2 / ts;
        p.view = new Sprite(new SpriteMaterial({
          map: getCircleTexture(),
          color: new Color(p.color),
          transparent: true,
          depthTest: true,
          depthWrite: false
        }));
        p.view.scale.set(s, s, 1);
        p.view.renderOrder = 3;
      }
      if (p.view.parent !== group) group.add(p.view);
      const progress = 1 - p.life / p.maxLife;
      p.view.position.set(p.x / ts, 0.5 + progress * 0.6, p.y / ts);
      p.view.material.opacity = Math.max(0, Math.min(1, p.life / p.maxLife));
    }
  }
  clear() {
    for (const p of this.items) this.disposeView(p);
    this.items = [];
  }
  removeAt(index) {
    const p = this.items[index];
    if (p) {
      this.disposeView(p);
      this.items.splice(index, 1);
    }
  }
  disposeView(p) {
    if (!p.view) return;
    p.view.parent?.remove(p.view);
    p.view.material.dispose();
    p.view = null;
  }
};

// src/effects/ParticleSystem.ts
var textCache = /* @__PURE__ */ new Map();
function getTextTexture(text, color, size) {
  const key = `${text}|${color}|${size}`;
  let tex = textCache.get(key);
  if (!tex) {
    const font = `bold ${size * 2}px "Microsoft YaHei", sans-serif`;
    const measure = document.createElement("canvas").getContext("2d");
    measure.font = font;
    const w = Math.max(8, Math.ceil(measure.measureText(text).width) + 20);
    const h = Math.ceil(size * 2 + 18);
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#000000";
    ctx.strokeText(text, w / 2, h / 2);
    ctx.fillStyle = color;
    ctx.fillText(text, w / 2, h / 2);
    tex = new CanvasTexture(canvas);
    tex.colorSpace = SRGBColorSpace;
    textCache.set(key, tex);
  }
  return tex;
}
var circleTex2 = null;
function getCircleTexture2() {
  if (!circleTex2) {
    const c = document.createElement("canvas");
    c.width = 16;
    c.height = 16;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(8, 8, 7, 0, Math.PI * 2);
    ctx.fill();
    circleTex2 = new CanvasTexture(c);
    circleTex2.colorSpace = SRGBColorSpace;
  }
  return circleTex2;
}
var ParticleSystem = class _ParticleSystem {
  static instance;
  particles = [];
  constructor() {
  }
  static getInstance() {
    if (!_ParticleSystem.instance) _ParticleSystem.instance = new _ParticleSystem();
    return _ParticleSystem.instance;
  }
  /** 飘字（世界格坐标） */
  floatText(col, row, text, color = "#ffffff") {
    const p = projection.tileCenter(row, col);
    this.push({
      x: p.x,
      y: p.y - 30,
      vx: 0,
      vy: -0.03,
      life: 1100,
      maxLife: 1100,
      color,
      size: 15,
      type: "text",
      text,
      opacity: 1
    });
  }
  /** 闪光粒子（拾取/升级），世界格坐标 —— 交由 GPU 批渲染系统 */
  sparkle(col, row, color = "#ffdd44", count = 8) {
    const p = projection.tileCenter(row, col);
    ThreeParticleSystem.getInstance().burst(p.x, p.y, color, count, { speed: 0.08, life: 600, size: 4 });
  }
  push(p) {
    const cap = Math.max(50, Math.floor(dataManager.config.render.maxParticles / 2));
    if (this.particles.length >= cap) this.destroyView(this.particles.shift());
    const ts = projection.tileSize;
    let view;
    if (p.type === "text" && p.text) {
      const tex = getTextTexture(p.text, p.color, p.size);
      const img = tex.image;
      const hUnits = p.size * 2 / ts;
      view = new Sprite(new SpriteMaterial({
        map: tex,
        transparent: true,
        depthTest: true,
        depthWrite: false
      }));
      view.scale.set(hUnits * (img.width / img.height), hUnits, 1);
    } else {
      const hUnits = p.size * 2 / ts;
      view = new Sprite(new SpriteMaterial({
        map: getCircleTexture2(),
        color: new Color(p.color),
        transparent: true,
        depthTest: true,
        depthWrite: false
      }));
      view.scale.set(hUnits, hUnits, 1);
    }
    view.renderOrder = 4;
    this.particles.push({ ...p, view });
  }
  update(deltaTime) {
    for (const p of this.particles) {
      p.life -= deltaTime;
      p.x += p.vx * deltaTime;
      p.y += p.vy * deltaTime;
      if (p.type === "circle") p.vy += 1e-4 * deltaTime;
      p.opacity = Math.max(0, Math.min(1, p.life / p.maxLife));
      if (p.life <= 0) this.destroyView(p);
    }
    this.particles = this.particles.filter((p) => p.life > 0);
  }
  /** 由 ThreeRenderer 每帧调用：挂到粒子层并同步世界坐标 */
  syncTo(group) {
    const ts = projection.tileSize;
    for (const p of this.particles) {
      if (p.view.parent !== group) group.add(p.view);
      const progress = 1 - p.life / p.maxLife;
      const y = p.type === "text" ? 1.2 + progress * 0.9 : 0.6 + progress * 0.4;
      p.view.position.set(p.x / ts, y, p.y / ts);
      p.view.material.opacity = p.opacity;
    }
  }
  destroyView(p) {
    p.view.parent?.remove(p.view);
    p.view.material.dispose();
  }
  clear() {
    for (const p of this.particles) this.destroyView(p);
    this.particles = [];
  }
};

// src/systems/ChestSystem.ts
var ChestSystem = class _ChestSystem {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_ChestSystem.instance) _ChestSystem.instance = new _ChestSystem();
    return _ChestSystem.instance;
  }
  /** 楼层段位金币 */
  goldForFloor(floorId) {
    const bands = dataManager.config.chestRewards.goldBands;
    const band = bands.find((b) => floorId >= b.minFloor && floorId <= b.maxFloor) ?? bands[bands.length - 1];
    return rng.randInt(band.min, band.max);
  }
  /** 开箱：金币按楼层段位 × 房间深度倍率；装备品质下限随深度提升（P0-1）。depth 缺省 1 = 原行为 */
  open(entity, roomType, depth = 1) {
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const cfg = dataManager.config.chestRewards;
    const grand = entity.chestTier === "grand";
    const floorId = player.state.currentFloor;
    if (entity.chestTier === "relic") {
      world.markOpened(entity.id);
      ParticleSystem.getInstance().sparkle(entity.x, entity.y, "#d9a6ff", 14);
      eventBus.emit("relicChoiceRequested", { entityId: entity.id, floor: floorId, count: 3 });
      eventBus.emit("chestOpened", { entityId: entity.id, roomType });
      return { gold: 0, equipment: false, equip: null, potion: null, relic: null };
    }
    const riskMul = Math.max(1, entity.rewardMul ?? 1);
    const riskTier = Math.max(1, entity.riskTier ?? 1);
    const depthMul = StatCalculator.getInstance().depthMultiplier(floorId, depth);
    const gold = Math.round(this.goldForFloor(floorId) * depthMul * (grand ? 2.5 : 1) * riskMul);
    const rewards = { gold, equipment: false, equip: null, potion: null, relic: null };
    if (cfg.goldAlways && gold > 0) player.gainGold(gold);
    const effDepth = depth + (riskTier - 1);
    if (grand || rng.chance(Math.min(1, cfg.equipmentChance * riskMul))) {
      const source = grand ? "boss" : "chest";
      let equip = EquipmentGenerator.getInstance().generate(source, { floorId, depth: effDepth });
      const shift = RelicManager.getInstance().value("chestQualityUp");
      if (shift !== 0) {
        const order = dataManager.equipment.qualityOrder;
        const idx = Math.max(0, Math.min(order.length - 1, order.indexOf(equip.quality) + shift));
        equip = EquipmentGenerator.getInstance().generate(source, { floorId, depth: effDepth, forcedQuality: order[idx] });
      }
      player.addEquipment(equip);
      rewards.equipment = true;
      rewards.equip = equip;
    }
    if (rng.chance(cfg.potionChance)) {
      const tier = this.potionTierForFloor(floorId);
      if (tier) {
        player.addPotion(tier, 1);
        rewards.potion = tier;
      }
    }
    const relicMul = dataManager.mapGen.content.risk.relicMul[riskTier - 1] ?? 1;
    rewards.relic = RelicManager.getInstance().rollDrop("chest", relicMul);
    world.markOpened(entity.id);
    const pt = { x: entity.x, y: entity.y };
    ParticleSystem.getInstance().sparkle(entity.x, entity.y, "#ffdd44", 10);
    eventBus.emit("chestOpened", { entityId: entity.id, roomType });
    return rewards;
  }
  /** 楼层对应品质药水（当前楼层可用的最高档） */
  potionTierForFloor(floorId) {
    const list = dataManager.potions.potions.filter((p) => floorId >= p.minFloor && floorId <= p.maxFloor).sort((a, b) => b.healPct - a.healPct);
    return list[0]?.tier ?? null;
  }
  /** 比当前楼层最高档低 steps 档的药水（怪物掉落用） */
  potionTierLower(floorId, steps) {
    const list = dataManager.potions.potions.filter((p) => floorId >= p.minFloor && floorId <= p.maxFloor).sort((a, b) => b.healPct - a.healPct);
    const idx = Math.min(steps, list.length - 1);
    return list[idx]?.tier ?? null;
  }
};

// src/systems/BattleSystem.ts
var BattleSession = class {
  entity;
  mon;
  log = [];
  logCursor = 0;
  monHp;
  turnCount = 0;
  dmgTaken = 0;
  potionUsedName = null;
  /** 本场战斗剩余的「用药资格」：一次资格 = 一次补满生命的机会（默认 1，赫尔墨斯双蛇杖可提升） */
  potionUsesLeft;
  outcome = null;
  constructor(entity, mon) {
    this.entity = entity;
    this.mon = mon;
    this.monHp = mon.hp;
    this.potionUsesLeft = Math.max(
      dataManager.config.battle.potionUsesPerBattle,
      RelicManager.getInstance().value("potionPerBattle")
    );
    this.line(`\u906D\u9047 ${mon.name}\uFF01`, "system");
  }
  get monsterHp() {
    return Math.max(0, this.monHp);
  }
  get monsterMaxHp() {
    return this.mon.hp;
  }
  get turns() {
    return this.turnCount;
  }
  get finished() {
    return this.outcome !== null;
  }
  get result() {
    return this.outcome;
  }
  /** 本场剩余用药资格（UI 展示 / 按钮禁用判定） */
  get potionUses() {
    return this.potionUsesLeft;
  }
  /** 当前是否还能使用回复药剂（有资格 + 有可用药水） */
  get potionAvailable() {
    return this.potionUsesLeft > 0 && !!this.bestPotion();
  }
  /** 自上次调用以来的新增日志行（面板增量渲染用） */
  drainNewLines() {
    const out = this.log.slice(this.logCursor);
    this.logCursor = this.log.length;
    return out;
  }
  /** 当前最优药水（不够回满则不算） */
  bestPotion() {
    const p = Player.getInstance();
    return p.bestPotionFor(p.maxHp - p.state.hp);
  }
  /** 生命是否低于托管自动喝药阈值（30%，与托管判定同源） */
  hpBelowAutoPotionThreshold() {
    const p = Player.getInstance();
    return p.state.hp > 0 && p.state.hp < p.maxHp * 0.3;
  }
  /** 托管：一口气打完整场（保持原行为/公式/30%自动喝药） */
  runAuto() {
    if (this.outcome) return this.outcome;
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    while (player.state.hp > 0 && this.monHp > 0 && this.turnCount < cfg.maxTurns) {
      this.turnCount++;
      this.playerAttack();
      if (this.monHp <= 0) break;
      this.monsterTurn();
      if (player.state.hp > 0 && player.state.hp < player.maxHp * 0.3 && this.potionUsesLeft > 0) {
        this.usePotionQualification(true);
      }
    }
    this.settle(this.turnCount >= cfg.maxTurns);
    return this.outcome;
  }
  /** 微操：执行玩家回合行动 →（怪物存活则）怪物回合；返回本回合新增日志 */
  stepManual(action) {
    if (this.outcome) return [];
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    this.turnCount++;
    if (action.type === "flee") {
      this.line("\u4F60\u9009\u62E9\u4E86\u64A4\u9000", "system");
      this.settle(false, true);
      return this.drainNewLines();
    }
    if (action.type === "potion") {
      if (this.potionUsesLeft <= 0) {
        this.line("\u672C\u573A\u6218\u6597\u7684\u7528\u836F\u673A\u4F1A\u5DF2\u7ECF\u7528\u5B8C\u4E86", "system");
        this.turnCount--;
        return this.drainNewLines();
      }
      if (!this.bestPotion()) {
        this.line("\u6CA1\u6709\u53EF\u7528\u7684\u836F\u6C34", "system");
        this.turnCount--;
        return this.drainNewLines();
      }
      const used = this.usePotionQualification(false);
      this.line(`\u7528\u6389\u4E00\u6B21\u7528\u836F\u673A\u4F1A\uFF0C\u5171\u996E\u4E0B ${used} \u74F6\uFF0C\u751F\u547D\u5DF2\u8865\u6EE1`, "system");
    } else {
      this.playerAttack();
    }
    if (!this.outcome && this.monHp > 0 && player.state.hp > 0) {
      this.monsterTurn();
    }
    if (!this.outcome && (this.monHp <= 0 || player.state.hp <= 0 || this.turnCount >= cfg.maxTurns)) {
      this.settle(this.turnCount >= cfg.maxTurns);
    }
    return this.drainNewLines();
  }
  // ============ 回合内部 ============
  line(text, kind) {
    this.log.push({ turn: this.turnCount, text, kind });
  }
  /** 玩家攻击回合（暴击/业火/屠龙/嗜血 + 遗物：暴击伤害/破防/精英增伤/追击/首击） */
  playerAttack() {
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    const stats = player.stats();
    const rm = RelicManager.getInstance();
    const monDef = Math.max(0, this.mon.defense * (1 - stats.armorPen / 100));
    const jitter = 1 + (Math.random() * 2 - 1) * cfg.damageJitter;
    const crit = rng.chance(stats.critRate / 100);
    const base = Math.max(cfg.minDamage, Math.round((stats.attack - monDef) * jitter));
    let dealt = crit ? Math.round(base * (cfg.critMultiplier + stats.critDamage / 100)) : base;
    const first = rm.consumeFirstStrike(player.state.currentFloor);
    let firstMul = 1;
    if (first) {
      if (rm.value("firstStrikeDouble") >= 2) firstMul *= 2;
      const boost = rm.value("firstStrikeBoost");
      if (boost > 1) firstMul *= boost;
    }
    if (firstMul !== 1) dealt = Math.round(dealt * firstMul);
    dealt += stats.fireDamage;
    if (this.mon.isBoss) dealt = Math.round(dealt * (1 + stats.bossDamage / 100));
    if (this.mon.isElite || this.mon.isBoss) dealt = Math.round(dealt * (1 + stats.eliteBossDamage / 100));
    if (rm.value("followUp") > 0 && rng.chance(rm.value("followUp") / 100)) {
      const extra = Math.round(dealt * 0.5);
      dealt += extra;
      this.line(`\u8FDE\u51FB\u5FBD\u7AE0\uFF1A\u8FFD\u52A0 ${extra} \u70B9\u4F24\u5BB3`, "player");
    }
    this.monHp -= dealt;
    const tag = `${firstMul !== 1 ? "\u9996\u51FB\xB7" : ""}${crit ? "\u66B4\u51FB\uFF01" : ""}`;
    this.line(`${tag}\u5BF9${this.mon.name}\u9020\u6210 ${dealt} \u70B9\u4F24\u5BB3${stats.fireDamage > 0 ? `\uFF08\u4E1A\u706B+${stats.fireDamage}\uFF09` : ""}`, "player");
    if (stats.lifesteal > 0 && player.state.hp < player.maxHp) {
      const heal = Math.round(dealt * stats.lifesteal / 100);
      if (heal > 0) {
        player.heal(heal);
        this.line(`\u55DC\u8840\u56DE\u590D ${heal} \u751F\u547D`, "player");
      }
    }
  }
  /** 怪物攻击回合（闪避判定 + 遗物：怪物攻击/减伤/增伤/荆棘反伤） */
  monsterTurn() {
    const player = Player.getInstance();
    const cfg = dataManager.config.battle;
    const stats = player.stats();
    if (rng.chance(stats.dodgeRate / 100)) {
      this.line(`\u95EA\u907F\u4E86${this.mon.name}\u7684\u653B\u51FB`, "player");
      return;
    }
    const monAtk = this.mon.attack * (1 + stats.monsterAttackUp / 100);
    let raw = Math.max(cfg.minDamage, Math.round((monAtk - stats.defense) * (1 + (Math.random() * 2 - 1) * cfg.damageJitter)));
    raw = Math.max(cfg.minDamage, Math.round(raw * (1 - stats.damageReduction / 100) * (1 + stats.damageTaken / 100)));
    player.damage(raw);
    this.dmgTaken += raw;
    this.line(`${this.mon.name}\u5BF9\u4F60\u9020\u6210 ${raw} \u70B9\u4F24\u5BB3`, "monster");
    if (stats.thorns > 0 && this.monHp > 0) {
      const reflect = Math.max(1, Math.round(raw * stats.thorns / 100));
      this.monHp -= reflect;
      this.line(`\u8346\u68D8\u4E4B\u7532\u53CD\u5F39 ${reflect} \u70B9\u4F24\u5BB3`, "player");
    }
  }
  /** 喝药（托管自动 / 微操手动共用） */
  drinkPotion(tier, auto) {
    const player = Player.getInstance();
    const potionDef = dataManager.getPotion(tier);
    player.usePotion(tier);
    this.potionUsedName = potionDef.name;
    this.line(`${auto ? "\u81EA\u52A8" : ""}\u996E\u4E0B${potionDef.name}`, "system");
  }
  /**
   * 用掉一次「用药资格」：连续饮用回复药剂，直至生命补满或药水耗尽。
   * 一次资格 = 一次补满生命的机会（同次机会内不限瓶数）；资格耗尽后本场战斗不能再用药。
   */
  usePotionQualification(auto) {
    const player = Player.getInstance();
    if (this.potionUsesLeft <= 0) return 0;
    let used = 0;
    while (player.state.hp > 0 && player.state.hp < player.maxHp) {
      const tier = this.bestPotion();
      if (!tier) break;
      const before = player.state.hp;
      this.drinkPotion(tier, auto);
      used++;
      if (player.state.hp <= before) break;
    }
    if (used > 0) this.potionUsesLeft--;
    return used;
  }
  // ============ 结算（托管/微操同源） ============
  settle(timeout, fled = false) {
    if (this.outcome) return;
    const player = Player.getInstance();
    const world = WorldManager.getInstance();
    const floorId = player.state.currentFloor;
    const win = this.monHp <= 0 || timeout && this.monHp / this.mon.hp < player.state.hp / player.maxHp;
    const result = {
      win,
      log: this.log,
      damageTaken: this.dmgTaken,
      turns: this.turnCount,
      expGained: 0,
      goldGained: 0,
      monsterName: this.mon.name,
      isBoss: this.mon.isBoss,
      isElite: this.mon.isElite
    };
    if (win) {
      result.expGained = this.mon.exp;
      result.goldGained = this.mon.gold;
      player.gainExp(this.mon.exp);
      player.gainGold(this.mon.gold);
      world.markDefeated(this.entity.id);
      this.line(`\u51FB\u8D25${this.mon.name}\uFF01\u83B7\u5F97 ${this.mon.exp} \u7ECF\u9A8C\u3001${this.mon.gold} \u91D1\u5E01`, "reward");
      const dropCfg = dataManager.config.monsterDrops;
      const dropDepth = this.entity.depth ?? 1;
      if (this.mon.isBoss || rng.chance(dropCfg.equipmentChance)) {
        const equip = EquipmentGenerator.getInstance().generate(this.mon.isBoss ? "boss" : "monster", { floorId, depth: dropDepth });
        player.addEquipment(equip);
        this.line(`\u6389\u843D\u4E86 ${equip.name}`, "reward");
      }
      if (!this.mon.isBoss && rng.chance(dropCfg.potionChance)) {
        const tier = ChestSystem.getInstance().potionTierLower(floorId, rng.randInt(1, 2));
        if (tier) {
          player.addPotion(tier, 1);
          this.line(`\u6389\u843D\u4E86 ${dataManager.getPotion(tier)?.name}`, "reward");
        }
      }
      if (this.mon.isBoss) {
        const relic = RelicManager.getInstance().rollDrop("boss");
        if (relic) this.line(`\u6389\u843D\u4E86\u9057\u7269\u3010${relic.name}\u3011`, "reward");
      } else if (this.mon.isElite) {
        const relic = RelicManager.getInstance().rollDrop("elite");
        if (relic) this.line(`\u6389\u843D\u4E86\u9057\u7269\u3010${relic.name}\u3011`, "reward");
      }
      if (this.potionUsedName) this.line(`\u6218\u6597\u4E2D\u6D88\u8017\u4E86${this.potionUsedName}`, "system");
      for (const l of RelicManager.getInstance().onKill()) this.line(l, "reward");
      eventBus.emit("monsterDefeated", {
        entityId: this.entity.id,
        name: this.mon.name,
        monsterId: this.entity.monsterId,
        isElite: this.mon.isElite,
        isBoss: this.mon.isBoss
      });
      if (this.mon.isBoss) eventBus.emit("bossDefeated", { floor: floorId, name: this.mon.name });
    } else if (player.state.hp <= 0) {
      this.line(`\u4F60\u88AB${this.mon.name}\u51FB\u8D25\u4E86\u2026\u2026`, "monster");
      eventBus.emit("playerDied", { cause: this.mon.name });
    } else {
      this.line(fled ? "\u4F60\u9000\u51FA\u4E86\u6218\u6597" : "\u6218\u6597\u80F6\u7740\uFF0C\u4F60\u88AB\u8FEB\u64A4\u9000", "system");
    }
    this.outcome = result;
    eventBus.emit("battleEnded", { result, manual: this.manual });
  }
  /** 微操会话标记（结算事件里区分面板行为）；托管会话保持 false */
  manual = false;
};
var BattleSystem = class _BattleSystem {
  static instance;
  constructor() {
  }
  static getInstance() {
    if (!_BattleSystem.instance) _BattleSystem.instance = new _BattleSystem();
    return _BattleSystem.instance;
  }
  /** 解析实体 → 战斗属性（填充期收敛属性优先，缺省实时计算） */
  resolveStats(entity) {
    const player = Player.getInstance();
    const def = dataManager.getMonster(entity.monsterId ?? "");
    if (!def) throw new Error(`\u672A\u77E5\u602A\u7269: ${entity.monsterId}`);
    return entity.stats ?? StatCalculator.getInstance().monsterStats(
      def,
      player.state.currentFloor,
      entity.kind === "boss" ? false : !!entity.isElite,
      entity.depth ?? 1
    );
  }
  /** 托管：执行战斗并结算（返回结果；胜利时调用方标记实体消亡） */
  battle(entity) {
    const mon = this.resolveStats(entity);
    const session2 = new BattleSession(entity, mon);
    return session2.runAuto();
  }
  /** 微操：建立战斗会话，由 BattlePanel 逐回合驱动 */
  beginManual(entity) {
    const mon = this.resolveStats(entity);
    const session2 = new BattleSession(entity, mon);
    session2.manual = true;
    return session2;
  }
  /** 战斗预测（悬浮窗展示：能否获胜/预计损血） */
  forecast(entity) {
    const player = Player.getInstance();
    const def = dataManager.getMonster(entity.monsterId ?? "");
    if (!def) return { winnable: false, estDamage: 0 };
    const mon = entity.stats ?? StatCalculator.getInstance().monsterStats(def, player.state.currentFloor, !!entity.isElite, entity.depth ?? 1);
    const stats = player.stats();
    const dmgOut = Math.max(1, stats.attack - mon.defense) + stats.fireDamage;
    const dmgIn = Math.max(1, mon.attack - stats.defense);
    const turnsToKill = Math.ceil(mon.hp / dmgOut);
    const estDamage = turnsToKill * dmgIn * (1 - stats.dodgeRate / 100);
    return { winnable: estDamage < player.state.hp, estDamage: Math.round(estDamage) };
  }
};

// src/test/tierTest.ts
var failures = 0;
function check(name, ok, detail = "") {
  if (!ok) {
    failures++;
    console.error(`  \u2717 ${name}${detail ? `\uFF1A${detail}` : ""}`);
  } else {
    console.log(`  \u2713 ${name}`);
  }
}
function strongPlayerState(floor) {
  const p = Player.getInstance().state;
  return {
    ...p,
    level: 40,
    hp: 1e5,
    baseMaxHp: 1e5,
    baseAttack: 3e3,
    baseDefense: 800,
    x: 1,
    y: 1,
    currentFloor: floor,
    currentRoomId: "",
    potions: { ...p.potions, crude: 5 }
  };
}
console.log("=== \u533A\u6BB5\u4E3B\u9898\u6620\u5C04 ===");
var expectTier = [
  [1, "base"],
  [15, "base"],
  [16, "garden"],
  [40, "garden"],
  [41, "library"],
  [60, "library"],
  [61, "observatory"],
  [80, "observatory"],
  [81, "clock"],
  [100, "clock"],
  [101, "summit"],
  [MAX_FLOOR, "summit"],
  [MAX_FLOOR + 9, "summit"]
];
for (const [floor, id] of expectTier) {
  check(`\u7B2C${floor}\u5C42 \u2192 ${id}`, tierOfFloor(floor).id === id, `\u5B9E\u9645 ${tierOfFloor(floor).id}`);
}
var startFloors = TIERS.map((t) => t.fromFloor);
check(`\u533A\u6BB5\u8D77\u70B9\u96C6\u5408 = [1,16,41,61,81,101]`, startFloors.join(",") === "1,16,41,61,81,101", startFloors.join(","));
check("isTierStartFloor(16)=true / (17)=false", isTierStartFloor(16) && !isTierStartFloor(17));
check("\u5854\u9876\u533A\u6BB5\u8986\u76D6 101\u2013110", MAX_FLOOR === 110 && TIERS[TIERS.length - 1].toFloor === 110);
console.log("=== \u5854\u9876\u5C01\u9876\uFF08\u7B2C110\u5C42\uFF09 ===");
var summitFloor = MapGenerator.getInstance().generate(MAX_FLOOR);
check("110\u5C42 kind = summit", summitFloor.kind === "summit", summitFloor.kind);
var allEntities = summitFloor.rooms.flatMap((r) => r.entities);
var gates = allEntities.filter((e) => e.kind === "gate");
check("110\u5C42\u5B58\u5728\u7EC8\u5C40\u4E4B\u95E8", gates.length === 1, `\u5B9E\u9645 ${gates.length}`);
check("110\u5C42\u65E0\u602A\u7269/Boss", allEntities.every((e) => e.kind !== "monster" && e.kind !== "boss"));
check("110\u5C42\u65E0\u697C\u68AF\uFF08\u95E8\u53D6\u4EE3\u5411\u4E0A\u901A\u9053\uFF09", allEntities.every((e) => e.kind !== "stair"));
check("110\u5C42\u65E0\u5B9D\u7BB1/\u836F\u6C34\uFF08\u7A7A\u65F7\u65E0\u6742\u7269\uFF09", allEntities.every((e) => e.kind !== "chest" && e.kind !== "potion"));
var endRoom = summitFloor.rooms.find((r) => r.type === "end");
check("\u5854\u9876\u5E73\u53F0\u4E3A\u5927\u623F\u95F4\uFF08\u226511\xD79\uFF09", endRoom.width >= 11 && endRoom.height >= 9, `${endRoom.width}x${endRoom.height}`);
var floor109 = MapGenerator.getInstance().generate(MAX_FLOOR - 1);
var stair109 = floor109.rooms.flatMap((r) => r.entities).find((e) => e.kind === "stair");
check("109\u5C42\u697C\u68AF\u6307\u5411110", stair109?.targetFloor === MAX_FLOOR, String(stair109?.targetFloor));
check("109\u5C42\u975E\u5854\u9876\u5C42", floor109.kind !== "summit", floor109.kind);
console.log("=== \u5404\u533A\u6BB5\u6837\u4F8B\u697C\u5C42\u751F\u6210 ===");
for (const f of [1, 2, 15, 16, 40, 41, 60, 61, 80, 81, 100, 101, 109]) {
  try {
    const floor = f === MAX_FLOOR ? summitFloor : MapGenerator.getInstance().generate(f);
    check(`\u7B2C${f}\u5C42\u751F\u6210\uFF08${tierOfFloor(f).id}\uFF09`, floor.rooms.length >= 2 && floor.grid.length > 0);
  } catch (err) {
    check(`\u7B2C${f}\u5C42\u751F\u6210`, false, String(err));
  }
}
console.log("=== \u6258\u7BA1/\u5FAE\u64CD\u6218\u6597 ===");
dataManager.loadAll();
var battleFloor = MapGenerator.getInstance().generate(3);
WorldManager.getInstance().loadFloor(battleFloor);
var monsterEntity = battleFloor.rooms.flatMap((r) => r.entities).find((e) => e.kind === "monster");
Player.getInstance().restore(strongPlayerState(3));
var autoEnded = null;
eventBus.on("battleEnded", (p) => {
  autoEnded = p;
});
var autoResult = BattleSystem.getInstance().battle(monsterEntity);
check("\u6258\u7BA1\uFF1A\u81EA\u52A8\u7ED3\u7B97\u80DC\u5229", autoResult.win === true);
check("\u6258\u7BA1\uFF1AbattleEnded \u4E8B\u4EF6 manual=false", autoEnded?.manual === false);
var manualFloor = MapGenerator.getInstance().generate(3);
WorldManager.getInstance().loadFloor(manualFloor);
var manualEntity = manualFloor.rooms.flatMap((r) => r.entities).find((e) => e.kind === "monster");
Player.getInstance().restore(strongPlayerState(3));
var manualEnded = null;
eventBus.on("battleEnded", (p) => {
  manualEnded = p;
});
var session = BattleSystem.getInstance().beginManual(manualEntity);
var guard = 0;
while (!session.finished && guard < 200) {
  session.stepManual({ type: "attack" });
  guard++;
}
check("\u5FAE\u64CD\uFF1A\u9010\u56DE\u5408\u653B\u51FB\u53EF\u6253\u5B8C", session.finished && session.result !== null);
check("\u5FAE\u64CD\uFF1A\u80DC\u5229\u7ED3\u679C\u4E0E\u6258\u7BA1\u4E00\u81F4", session.result?.win === true);
check("\u5FAE\u64CD\uFF1AbattleEnded \u4E8B\u4EF6 manual=true", manualEnded?.manual === true);
check("\u5FAE\u64CD\uFF1A\u83B7\u5F97\u7ECF\u9A8C\u4E0E\u91D1\u5E01", (session.result?.expGained ?? 0) > 0 && (session.result?.goldGained ?? 0) > 0);
var fleeFloor = MapGenerator.getInstance().generate(3);
WorldManager.getInstance().loadFloor(fleeFloor);
var fleeEntity = fleeFloor.rooms.flatMap((r) => r.entities).find((e) => e.kind === "monster");
Player.getInstance().restore(strongPlayerState(3));
var fleeSession = BattleSystem.getInstance().beginManual(fleeEntity);
fleeSession.stepManual({ type: "flee" });
check("\u5FAE\u64CD\uFF1A\u64A4\u9000\u5373\u7ED3\u675F\u4E14\u4E0D\u8BA1\u80DC", fleeSession.finished && fleeSession.result?.win === false);
var multiFloor = MapGenerator.getInstance().generate(4);
WorldManager.getInstance().loadFloor(multiFloor);
var multiEntity = multiFloor.rooms.flatMap((r) => r.entities).find((e) => e.kind === "monster");
Player.getInstance().restore({ ...strongPlayerState(4), baseAttack: 60, baseDefense: 500, hp: 9e3, baseMaxHp: 9e3 });
var multiSession = BattleSystem.getInstance().beginManual(multiEntity);
multiSession.stepManual({ type: "attack" });
check("\u5FAE\u64CD\uFF1A\u4E00\u56DE\u5408\u540E\u4E0D\u63D0\u524D\u7ED3\u7B97", !multiSession.finished, `finished=${multiSession.finished}`);
var multiTurns = 1;
while (!multiSession.finished && multiTurns < 90) {
  multiSession.stepManual({ type: "attack" });
  multiTurns++;
}
check("\u5FAE\u64CD\uFF1A\u591A\u56DE\u5408\u6253\u5B8C\u5E76\u83B7\u80DC", multiSession.finished && multiSession.result?.win === true && multiTurns > 2, `turns=${multiTurns}`);
Player.getInstance().restore({ ...strongPlayerState(3), hp: 29999 });
var s2 = BattleSystem.getInstance().beginManual(
  fleeFloor.rooms.flatMap((r) => r.entities).find((e) => e.kind === "monster")
);
check("30%\u9608\u503C\u5224\u5B9A\uFF08hp 29.999% \u2192 true\uFF09", s2.hpBelowAutoPotionThreshold() === true);
Player.getInstance().restore({ ...strongPlayerState(3), hp: 30001 });
check("30%\u9608\u503C\u5224\u5B9A\uFF08hp 30.001% \u2192 false\uFF09", s2.hpBelowAutoPotionThreshold() === false);
console.log(failures === 0 ? "\n\u533A\u6BB5/\u5854\u9876/\u6218\u6597 \u5168\u90E8\u901A\u8FC7 \u2714" : `
!!! ${failures} \u9879\u5931\u8D25 !!!`);
if (failures > 0) process.exit(1);
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
