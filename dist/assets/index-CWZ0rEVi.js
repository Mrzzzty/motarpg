var fd=Object.defineProperty;var pd=(r,e,t)=>e in r?fd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var C=(r,e,t)=>pd(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const md={maxHp:1e3,attack:30,defense:15,critRate:5,dodgeRate:3},gd={base:20,power:1.5},vd=[{minLevel:1,maxLevel:5,hp:125,attack:6,defense:3},{minLevel:6,maxLevel:10,hp:260,attack:10,defense:5},{minLevel:11,maxLevel:15,hp:250,attack:12,defense:6},{minLevel:16,maxLevel:20,hp:260,attack:14,defense:7},{minLevel:21,maxLevel:25,hp:100,attack:16,defense:8},{minLevel:26,maxLevel:30,hp:100,attack:18,defense:9},{minLevel:31,maxLevel:35,hp:230,attack:22,defense:11},{minLevel:36,maxLevel:40,hp:500,attack:26,defense:13},{minLevel:41,maxLevel:45,hp:1e3,attack:30,defense:15},{minLevel:46,maxLevel:50,hp:1e3,attack:34,defense:17},{minLevel:51,maxLevel:999,hp:1200,attack:38,defense:19}],xd={floors:[1,5,10,15,20,25,30,35,40,45,50],hp:[165,310,485,685,900,1175,1500,1900,2400,3100,4150],atk:[40,75,120,200,280,340,420,520,680,950,1300],def:[7,14,21,30,40,52,66,84,106,136,183],exp:[15,40,100,180,280,400,550,720,900,1100,1350],gold:[20,20,45,90,90,160,160,275,275,425,425],overflowPerFloor:{hp:.08,atk:.05,def:.05,exp:.08,gold:.05}},_d={hp:0,atk:0,def:0},yd={damageJitter:.1,critMultiplier:1.8,maxTurns:60,minDamage:1},Md={goldBands:[{minFloor:1,maxFloor:5,min:1,max:5},{minFloor:6,maxFloor:10,min:5,max:15},{minFloor:11,maxFloor:20,min:15,max:40},{minFloor:21,maxFloor:30,min:40,max:80},{minFloor:31,maxFloor:40,min:80,max:150},{minFloor:41,maxFloor:9999,min:150,max:250}],equipmentChance:.6,potionChance:.15,goldAlways:!0},bd={equipmentChance:.03,potionChance:.02},Sd={goldPenaltyRate:.2,hpRestorePct:1},Ed={potionCountMin:2,potionCountMax:4,keyPriceBase:50,keyPricePer10Floors:30,keyCountMin:1,keyCountMax:3,equipmentCountMin:1,equipmentCountMax:2},wd={potionCountMin:2,potionCountMax:3,fountainCostBase:40,fountainCostPerFloor:12},Td={tileWidth:64,tileHeight:32,vignetteMax:.3,maxLights:20,maxParticles:1e3,gridLineWidth:1},Ad={bloom:{enabled:!0,strength:.5,radius:.45,threshold:.82},vignette:{enabled:!0,strength:.3,offset:1,darkness:1.1},adjustment:{enabled:!0,gamma:1.05,contrast:1.05,saturation:1.1,brightness:1}},Rd={staticAlpha:.2,staticOffset:3,baseOffset:6,maxDynamic:20,samples:3,penumbra:6,tyndall:{length:150,width:30,alpha:.13,dustMin:5,dustMax:10}},Cd={player:45,monsterNormal:38,monsterElite:52,boss:70,chest:18,potion:14,torch:55,pillar:70,npc:42,stair:10,carpet:4,cauldron:26,shelf:46,fountain:16,wallByRoom:{start:60,combat:65,elite:75,chest:55,merchant:55,witch:58,boss:90,rest:55,end:60,blacksmith:65},corridorWall:75},Pd={level:2},Id={lerp:.12,transitionMs:400,roomPaddingPx:24},Ld={fov:45,distance:5,height:12.5},Dd={showDelayMs:200,hideDelayMs:300,offsetX:12,offsetY:12},Fd={key:"motarpg_v2_save",version:"2.0.0",autosaveDefault:!0},Ud={moveRepeatMs:110,moveBufferMs:120},Nd={playerBase:md,expFormula:gd,growthTable:vd,floorAnchors:xd,bossStatBonus:_d,battle:yd,chestRewards:Md,monsterDrops:bd,revive:Sd,merchant:Ed,witch:wd,render:Td,postProcess:Ad,shadow:Rd,heights:Cd,raycast:Pd,camera:Id,camera3D:Ld,hover:Dd,save:Fd,input:Ud},Od=13,kd=11,Bd=2,zd=[{minFloor:2,maxFloor:5,min:4,max:6},{minFloor:6,maxFloor:10,min:4,max:8},{minFloor:11,maxFloor:20,min:6,max:8},{minFloor:21,maxFloor:9999,min:6,max:12}],Gd=12,Hd=5,Vd=1,Wd={start:{width:5,height:5},end:{width:6,height:5},combat:{width:[7,9],height:[6,7]},elite:{width:[9,10],height:[7,8]},chest:{width:5,height:5},merchant:{width:6,height:6},witch:{width:[7,8],height:[6,7]},boss:{width:[9,10],height:[7,8]},rest:{width:5,height:5},blacksmith:{width:6,height:6}},qd=4,$d=4,Xd={weights:{combat:1,elite:3,chest:-1,merchant:-2,witch:-3,blacksmith:-1},forcePositiveAt:4,forceNegativeAt:-3},Yd={fewMaxRooms:7,fewCount:1,manyCount:2},Kd={minFloor:6,interval:6},Zd={maxLengthDiff:2},Jd={extraChance:.25,extraMax:2,adjacentManhattan:1},Qd={monsterMinDistFromEntry:3,smallAreaMax:30,mediumAreaMax:42,largeAreaMax:56,density:{small:2,medium:3,large:4,xlarge:5},chestRoomMin:2,chestRoomMax:3,otherRoomChestChance:.35,eliteRoomEliteMin:1,eliteRoomEliteMax:2,bossRoomAddsMin:0,bossRoomAddsMax:2,combatByDepth:[{maxDepth:1,monsters:[1,2],elites:[0,0],chests:[0,1],potions:[0,1]},{maxDepth:2,monsters:[2,2],elites:[0,1],chests:[0,1],potions:[1,1]},{maxDepth:3,monsters:[2,3],elites:[1,1],chests:[1,1],potions:[1,1]},{maxDepth:9999,monsters:[3,4],elites:[1,1],chests:[1,1],potions:[1,1]}],eliteRoom:{elites:[1,1],monsters:[1,2],chests:[1,2],potions:[1,1]},treasureRoom:{chests:[2,3],monsters:[1,2],potions:[1,2]},merchantRoom:{chests:[0,1],potions:[1,2]},witchRoom:{shelves:[2,2]},bossRoom:{elites:[0,2],chests:[2,3],potions:[2,4]},exitRoom:{guards:[0,1],chests:[0,2],potions:[1,1]},startRoom:{potions:[1,1]},guard:{chestRadius:3,stairRadius:3},barrier:{fillWithPillars:!0},roomTorches:{start:[2,4],merchant:[4,4],witch:[4,4],boss:[6,8],end:[4,4],blacksmith:[3,3]}},jd={torchCorridorEvery:4,pillarMinRoomWidth:7,carpetRooms:["chest","boss"]},eu={maxAttempts:40},tu={minFloor:4,interval:4},nu={cellSpacingX:Od,cellSpacingY:kd,gridRadius:Bd,floorRoomCounts:zd,maxRooms:Gd,bossFloorInterval:Hd,initialFloor:Vd,roomSpecs:Wd,minRoomWidth:qd,minRoomHeight:$d,tension:Xd,merchantLimit:Yd,witchLimit:Kd,path:Zd,corridor:Jd,content:Qd,decor:jd,generation:eu,blacksmithLimit:tu},iu=[{id:"slime",name:"史莱姆",shape:"circle",color:"#44cc44",category:"normal",floorMin:1,floorMax:5,weight:30,hpMul:1,atkMul:.9,defMul:.8,goldMul:1,expMul:1,height:32,description:"最弱小的魔物，柔软无骨。"},{id:"bat",name:"蝙蝠",shape:"circle",color:"#9955cc",category:"normal",floorMin:1,floorMax:10,weight:25,hpMul:.7,atkMul:1.1,defMul:.5,goldMul:1,expMul:1,height:30,description:"盘旋的暗影，攻击刁钻。"},{id:"skeleton",name:"骷髅兵",shape:"square",color:"#dddddd",category:"normal",floorMin:3,floorMax:15,weight:25,hpMul:1.2,atkMul:1,defMul:1.2,goldMul:1.1,expMul:1.1,height:36,description:"不朽的卫兵，骨头拼成的战躯。"},{id:"gargoyle",name:"石像鬼",shape:"square",color:"#888899",category:"normal",floorMin:8,floorMax:25,weight:22,hpMul:1.5,atkMul:.9,defMul:1.3,goldMul:1.2,expMul:1.2,height:42,description:"石化的守卫，皮糙肉厚。"},{id:"shadow_wolf",name:"暗影狼",shape:"square",color:"#3344aa",category:"normal",floorMin:12,floorMax:35,weight:22,hpMul:1.1,atkMul:1.4,defMul:.8,goldMul:1.2,expMul:1.2,height:40,description:"影中疾行的猎手，撕咬致命。"},{id:"hellhound",name:"地狱犬",shape:"square",color:"#ff6622",category:"normal",floorMin:18,floorMax:45,weight:20,hpMul:1.3,atkMul:1.5,defMul:1,goldMul:1.3,expMul:1.3,height:44,description:"燃烧的恶犬，吐息灼人。"},{id:"dark_knight",name:"暗黑骑士",shape:"square",color:"#aa1133",category:"normal",floorMin:25,floorMax:9999,weight:20,hpMul:1.8,atkMul:1.2,defMul:1.4,goldMul:1.4,expMul:1.4,height:48,description:"堕落的骑士，攻防兼备。"},{id:"ancient_dragon",name:"远古巨龙",shape:"big_square",color:"#cc1122",category:"boss",floorMin:5,floorMax:9999,weight:0,hpMul:5,atkMul:.95,defMul:1.2,goldMul:5,expMul:8,height:70,description:"沉眠于塔底的灾厄，翼影蔽日。"}],su=1.25,ru=2,au=2.5,ou={monsters:iu,eliteStatMultiplier:su,eliteGoldMultiplier:ru,eliteExpMultiplier:au},lu=[{tier:"crude",name:"劣质药水",healPct:.2,price:20,color:"#dd6688",minFloor:1,maxFloor:5,icon:"🧪"},{tier:"normal",name:"普通药水",healPct:.3,price:40,color:"#ee3344",minFloor:3,maxFloor:15,icon:"🧪"},{tier:"quality",name:"优质药水",healPct:.45,price:100,color:"#bb1133",minFloor:10,maxFloor:30,icon:"🧪"},{tier:"strong",name:"强效药水",healPct:.6,price:250,color:"#990033",minFloor:25,maxFloor:40,icon:"⚗️"},{tier:"holy",name:"圣药",healPct:.8,price:600,color:"#ffdd44",minFloor:40,maxFloor:9999,icon:"⚗️"}],cu={potions:lu},hu=["poor","common","fine","rare","epic","legendary","mythic"],du={poor:{name:"破烂",color:"#9e9e9e",statMultiplier:.6,affixCount:0,affixCountMax:0,sellMultiplier:.2,prefix:"破旧的",basePrice:5},common:{name:"普通",color:"#ffffff",statMultiplier:1,affixCount:0,affixCountMax:0,sellMultiplier:1,prefix:"",basePrice:10},fine:{name:"优秀",color:"#4488ff",statMultiplier:1.4,affixCount:1,affixCountMax:1,sellMultiplier:2,prefix:"精良的",basePrice:30},rare:{name:"稀有",color:"#aa44ff",statMultiplier:1.9,affixCount:2,affixCountMax:3,sellMultiplier:4,prefix:"优质的",basePrice:80,affixExtra:[{atEquipLevel:20,add:1}]},epic:{name:"史诗",color:"#ffaa00",statMultiplier:2.5,affixCount:3,affixCountMax:5,sellMultiplier:8,prefix:"精制的",basePrice:200,affixExtra:[{atEquipLevel:15,add:1}]},legendary:{name:"传说",color:"#ff5533",statMultiplier:3.5,affixCount:4,affixCountMax:7,sellMultiplier:16,prefix:"完美的",basePrice:500,affixExtra:[{atEquipLevel:10,add:1}]},mythic:{name:"神话",color:"#ff44dd",statMultiplier:5,affixCount:4,affixCountMax:4,sellMultiplier:35,prefix:"无双的",basePrice:1200}},uu=[{minFloor:1,maxFloor:5,weights:{poor:45,common:40,fine:12,rare:3,epic:0,legendary:0,mythic:0}},{minFloor:6,maxFloor:10,weights:{poor:10,common:50,fine:28,rare:10,epic:2,legendary:0,mythic:0}},{minFloor:11,maxFloor:20,weights:{poor:1,common:35,fine:35,rare:20,epic:8,legendary:1,mythic:0}},{minFloor:21,maxFloor:30,weights:{poor:1,common:15,fine:31,rare:30,epic:18,legendary:5,mythic:0}},{minFloor:31,maxFloor:40,weights:{poor:0,common:5,fine:20,rare:30,epic:30,legendary:15,mythic:0}},{minFloor:41,maxFloor:50,weights:{poor:0,common:0,fine:10,rare:25,epic:35,legendary:29.5,mythic:.5}},{minFloor:51,maxFloor:9999,weights:{poor:0,common:0,fine:8,rare:22,epic:33,legendary:35,mythic:2}}],fu=[{type:"sharp",name:"锋利",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:3,max:8},{maxEquipLevel:25,min:8,max:20},{maxEquipLevel:40,min:20,max:40},{maxEquipLevel:50,min:40,max:70}],description:"攻击 +{v}"},{type:"sturdy",name:"坚固",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:2,max:5},{maxEquipLevel:25,min:5,max:12},{maxEquipLevel:40,min:12,max:25},{maxEquipLevel:50,min:25,max:45}],description:"防御 +{v}"},{type:"vitality",name:"活力",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:15,max:40},{maxEquipLevel:25,min:40,max:100},{maxEquipLevel:40,min:100,max:200},{maxEquipLevel:50,min:200,max:350}],description:"生命 +{v}"},{type:"precision",name:"精准",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:3},{maxEquipLevel:25,min:3,max:5},{maxEquipLevel:40,min:5,max:7},{maxEquipLevel:50,min:7,max:10}],description:"暴击率 +{v}%"},{type:"agility",name:"灵巧",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:2},{maxEquipLevel:25,min:2,max:4},{maxEquipLevel:40,min:4,max:6},{maxEquipLevel:50,min:6,max:8}],description:"闪避率 +{v}%"},{type:"savage",name:"强攻",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:2,max:4},{maxEquipLevel:25,min:4,max:7},{maxEquipLevel:40,min:7,max:10},{maxEquipLevel:50,min:10,max:15}],description:"攻击 +{v}%"},{type:"fortress",name:"铁壁",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:3},{maxEquipLevel:25,min:3,max:5},{maxEquipLevel:40,min:5,max:8},{maxEquipLevel:50,min:8,max:12}],description:"防御 +{v}%"},{type:"lifesteal",name:"嗜血",minQuality:"epic",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:2},{maxEquipLevel:25,min:2,max:3},{maxEquipLevel:40,min:3,max:4},{maxEquipLevel:50,min:4,max:6}],description:"攻击回复生命 {v}%"},{type:"hellfire",name:"业火",minQuality:"rare",isPercent:!1,bands:[{maxEquipLevel:10,min:3,max:8},{maxEquipLevel:25,min:8,max:18},{maxEquipLevel:40,min:18,max:35},{maxEquipLevel:50,min:35,max:60}],description:"附加火焰伤害 {v}"},{type:"greed",name:"贪婪",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"金币获取 +{v}%"},{type:"wisdom",name:"博学",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"经验获取 +{v}%"},{type:"dragonslayer",name:"屠龙",minQuality:"epic",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"对Boss伤害 +{v}%"}],pu=[{minEquipLevel:1,maxEquipLevel:5,values:{poor:[2,5],common:[4,8],fine:[8,15],rare:[15,25],epic:null,legendary:null}},{minEquipLevel:6,maxEquipLevel:10,values:{poor:[5,8],common:[8,15],fine:[15,25],rare:[25,40],epic:[40,55],legendary:null}},{minEquipLevel:11,maxEquipLevel:20,values:{poor:null,common:[15,25],fine:[25,40],rare:[40,60],epic:[60,85],legendary:[85,120]}},{minEquipLevel:21,maxEquipLevel:30,values:{poor:null,common:[25,35],fine:[35,55],rare:[55,80],epic:[80,110],legendary:[110,160]}},{minEquipLevel:31,maxEquipLevel:40,values:{poor:null,common:null,fine:[45,65],rare:[65,95],epic:[95,140],legendary:[140,200]}},{minEquipLevel:41,maxEquipLevel:50,values:{poor:null,common:null,fine:[60,80],rare:[80,120],epic:[120,180],legendary:[180,280]}}],mu=[{minEquipLevel:1,maxEquipLevel:5,values:{poor:[1,3],common:[2,5],fine:[4,8],rare:[6,12],epic:null,legendary:null}},{minEquipLevel:6,maxEquipLevel:10,values:{poor:[2,4],common:[4,8],fine:[8,14],rare:[12,20],epic:[18,28],legendary:null}},{minEquipLevel:11,maxEquipLevel:20,values:{poor:null,common:[8,14],fine:[14,22],rare:[20,30],epic:[30,45],legendary:[45,60]}},{minEquipLevel:21,maxEquipLevel:30,values:{poor:null,common:[14,20],fine:[20,30],rare:[30,45],epic:[45,60],legendary:[60,85]}},{minEquipLevel:31,maxEquipLevel:40,values:{poor:null,common:null,fine:[25,35],rare:[35,55],epic:[55,75],legendary:[75,110]}},{minEquipLevel:41,maxEquipLevel:50,values:{poor:null,common:null,fine:[35,45],rare:[45,65],epic:[65,95],legendary:[95,140]}}],gu=1.43,vu={weapon:[{minEquipLevel:1,maxEquipLevel:10,names:["铁剑"]},{minEquipLevel:11,maxEquipLevel:20,names:["阔剑"]},{minEquipLevel:21,maxEquipLevel:30,names:["长剑"]},{minEquipLevel:31,maxEquipLevel:40,names:["符文剑"]},{minEquipLevel:41,maxEquipLevel:50,names:["龙魂剑"]}],armor:[{minEquipLevel:1,maxEquipLevel:10,names:["胸甲"]},{minEquipLevel:11,maxEquipLevel:20,names:["鳞甲"]},{minEquipLevel:21,maxEquipLevel:30,names:["板甲"]},{minEquipLevel:31,maxEquipLevel:40,names:["符文甲"]},{minEquipLevel:41,maxEquipLevel:50,names:["龙鳞甲"]}]},xu={playerLevelFactor:.5,floorFactor:1,randomMin:-2,randomMax:3,min:1,max:50},_u={sellMultiplier:1.6,min:100,max:5e3},yu={mythicAffixCount:4},Mu={qualityOrder:hu,quality:du,qualityByFloor:uu,affixes:fu,weaponTable:pu,armorTable:mu,mythicFromLegendary:gu,baseNames:vu,equipLevelFormula:xu,buyPriceRule:_u,affixSpecial:yu},bu=[{id:"npc_guide",name:"引导者·艾登",color:"#44dd99",lines:["欢迎来到无尽之塔，勇者。这座塔每层都由无数房间构成，路径由你选择。","用 WASD 或方向键移动，撞上怪物即会展开战斗。左键也能直接点选目标。","宝箱与商人会给你补给。装备品质从破烂到神话共七档，仔细对比再穿戴。","楼梯在终点房间。愿你脚下生风，剑下无情。","对了——死亡不是终点。塔会给你重来的机会，但会收走一部分金币。"],portrait:"img/eden.png"},{id:"npc_merchant",name:"商人·老古",color:"#44dd66",isMerchant:!0,lines:["哟，客人！稀罕物件应有尽有，看看？","药水按楼层进新货，早买早安心。","钥匙不嫌多，宝箱可等不了人。"]},{id:"npc_witch",name:"女巫·薇薇安",color:"#c78cff",isWitch:!0,lines:["嘘——别碰我的锅，那汤药还没醒。","塔里的怪物越深越凶，我的药水却越深越灵。要试试吗？","旁边那口泉水能洗去你的伤，不过……得付点金子。"]},{id:"npc_blacksmith",name:"铁匠·霍恩",color:"#ff9a3d",isBlacksmith:!0,lines:["铁砧不骗人。剑是好剑，就是还差口气——交给我。","重铸词条、锤炼等级、淬火提品质，都行，收费公道。","先说好：史诗往上的神兵我不碰，凡火淬不动。"]}],Su={npcs:bu},Eu=[{id:"quest_talk_guide",name:"初来乍到",description:"与起点的引导者艾登对话，了解这座塔的规则。",objectives:[{type:"talk_npc",targetId:"npc_guide",quantity:1}],rewards:[{type:"potion",tier:"crude",value:2}],prerequisites:[],guidance:"走到绿色方块旁，左键对话。"},{id:"quest_first_blood",name:"初试锋芒",description:"击败一只史莱姆。",objectives:[{type:"defeat_monster",targetId:"slime",quantity:1}],rewards:[{type:"gold",value:30}],prerequisites:["quest_talk_guide"],guidance:"撞向红色方块即进入战斗。"},{id:"quest_first_chest",name:"开箱有喜",description:"打开一个宝箱。",objectives:[{type:"open_chest",quantity:1}],rewards:[{type:"gold",value:20}],prerequisites:["quest_talk_guide"],guidance:"左键点击金色宝箱。"},{id:"quest_first_equip",name:"披挂上阵",description:"穿戴一件装备。",objectives:[{type:"equip_item",quantity:1}],rewards:[{type:"equipment",quality:"poor"}],prerequisites:["quest_first_chest"],guidance:"按 B 打开背包，双击装备穿戴。"},{id:"quest_descend",name:"更下一层",description:"通过终点楼梯到达第 2 层。",objectives:[{type:"reach_floor",value:2,quantity:1}],rewards:[{type:"gold",value:50},{type:"potion",tier:"crude",value:1}],prerequisites:["quest_first_blood"],guidance:"找到房间角落的发光楼梯。"}],wu={quests:Eu},Tu=!0,Au={placeholder:Tu},Ru=[{id:"ev_gold_fairy",name:"金币妖精",icon:"🧚",minFloor:2,chance:.07,roomTypes:["combat","chest"],description:"一只金币妖精从阴影里窜出，翅膀上洒落着金粉。",options:[{text:"伸手去抓",effects:[{type:"gold",value:30,perFloor:6}]},{text:"目送它离开",effects:[]}]},{id:"ev_trap",name:"可疑的踏板",icon:"⚠️",minFloor:3,chance:.06,roomTypes:["combat","elite"],description:"脚下的石板忽然下陷——是陷阱！",options:[{text:"硬抗",effects:[{type:"damagePct",value:8}]},{text:"翻滚闪避（消耗体力）",effects:[{type:"damagePct",value:3}]}]},{id:"ev_spring",name:"神秘泉水",icon:"⛲",minFloor:2,chance:.06,roomTypes:["chest","merchant","end"],description:"角落里涌出一汪泛着微光的泉水。",options:[{text:"饮下泉水",effects:[{type:"healPct",value:20}]},{text:"谨慎起见，不喝",effects:[]}]},{id:"ev_scroll",name:"古老的卷轴",icon:"📜",minFloor:4,chance:.05,roomTypes:["combat","chest","elite"],description:"墙上嵌着一卷古旧的卷轴，字迹依稀可辨。",options:[{text:"研读卷轴",effects:[{type:"exp",value:25,perFloor:5}]},{text:"没有兴趣",effects:[]}]}],Cu={events:Ru},Pu={start:"起点大厅",end:"终点之间",combat:"战斗室",elite:"精英殿堂",chest:"宝藏间",merchant:"商人营地",blacksmith:"铁匠铺",witch:"女巫酿药间",boss:"Boss巢穴",rest:"休整营地"},Iu={attack:"左键攻击",pickup:"左键拾取",talk:"左键对话",open:"左键打开",stair:"点击或走上楼梯",trade:"左键交易",heal:"左键治疗"},Lu={gameTitle:"无尽之塔",floor:"第 {floor} 层",depth:"深度 {depth}",pathA:"路径A（高危）",pathB:"路径B（稳健）"},Du={firstEquipment:"获得装备！按 B 打开背包查看，双击可穿戴。装备对比中绿色为提升。",firstDeath:"你倒下了……但塔给予你重来的机会：在本层起点复活，损失 20% 金币。",tutorialWelcome:"欢迎来到无尽之塔。跟随右侧任务指引开始冒险吧。"},Fu={player:"勇者",merchant:"商人",guide:"引导者",chest:"宝箱",chestOpened:"空宝箱",stair:"通往第 {floor} 层",carpet:"地毯",pillar:"石柱",potion:"药水",torch:"火把",cauldron:"熬药大锅",shelf:"药架",fountain:"治疗泉"},Uu={roomNames:Pu,hints:Iu,titles:Lu,guidance:Du,labels:Fu},Nu={autoSave:!0,fpsCap:0},Ou={defaults:Nu},wi=class wi{constructor(){C(this,"loaded",!1)}static getInstance(){return wi.instance||(wi.instance=new wi),wi.instance}loadAll(){this.loaded=!0}get config(){return Nd}potionIconSrc(e){return`img/p_${e}.png`}potionIconImg(e,t="potion-icon"){return`<img class="${t}" src="${this.potionIconSrc(e)}" alt="${e}" draggable="false">`}get mapGen(){return nu}get monsters(){return ou}get potions(){return cu}get equipment(){return Mu}get npcs(){return Su}get quests(){return wu}get economy(){return Au}get events(){return Cu}get texts(){return Uu}get settings(){return Ou}getMonster(e){return this.monsters.monsters.find(t=>t.id===e)}getPotion(e){return this.potions.potions.find(t=>t.tier===e)}getNpc(e){return this.npcs.npcs.find(t=>t.id===e)}getQuest(e){return this.quests.quests.find(t=>t.id===e)}get isLoaded(){return this.loaded}};C(wi,"instance");let yo=wi;const U=yo.getInstance(),Ti=class Ti{constructor(){C(this,"handlers",new Map)}static getInstance(){return Ti.instance||(Ti.instance=new Ti),Ti.instance}on(e,t){let n=this.handlers.get(e);n||(n=new Set,this.handlers.set(e,n)),n.add(t)}once(e,t){const n=i=>{this.off(e,n),t(i)};this.on(e,n)}off(e,t){const n=this.handlers.get(e);n&&n.delete(t)}emit(e,t){const n=this.handlers.get(e);if(n)for(const i of[...n])try{i(t)}catch(s){console.error(`[EventBus] handler error on "${String(e)}"`,s)}}clear(){this.handlers.clear()}};C(Ti,"instance");let Mo=Ti;const X=Mo.getInstance(),Ai=class Ai{constructor(){C(this,"started",!1);C(this,"paused",!1);C(this,"modalCount",0);C(this,"settings");C(this,"difficulty",2);this.settings={...U.settings.defaults};const e=Number(localStorage.getItem("motarpg_difficulty"));e>=1&&e<=7&&(this.difficulty=e)}static getInstance(){return Ai.instance||(Ai.instance=new Ai),Ai.instance}get modalOpen(){return this.modalCount>0}pushModal(){this.modalCount++}popModal(){this.modalCount=Math.max(0,this.modalCount-1)}setSetting(e,t){this.settings[e]=t,X.emit("settingsChanged",{key:e,value:t})}setDifficulty(e){this.difficulty=Math.max(1,Math.min(7,e)),localStorage.setItem("motarpg_difficulty",String(this.difficulty))}};C(Ai,"instance");let bo=Ai;const We=bo.getInstance(),Ri=class Ri{constructor(){}static getInstance(){return Ri.instance||(Ri.instance=new Ri),Ri.instance}get anchors(){return U.config.floorAnchors}anchorValue(e,t,n){const i=this.anchors.floors,s=i.length-1;if(t<=i[0])return e[0];if(t>=i[s]){const a=t-i[s];return e[s]*Math.pow(1+n,a)}for(let a=0;a<s;a++)if(t>=i[a]&&t<=i[a+1]){const o=(t-i[a])/(i[a+1]-i[a]);return e[a]+(e[a+1]-e[a])*o}return e[s]}monsterStats(e,t,n){const i=U.config,s=this.anchors,a=f=>Math.max(1,Math.round(f)),o=e.category==="boss";let l=this.anchorValue(s.hp,t,s.overflowPerFloor.hp)*e.hpMul,c=this.anchorValue(s.atk,t,s.overflowPerFloor.atk)*e.atkMul,d=this.anchorValue(s.def,t,s.overflowPerFloor.def)*e.defMul,u=this.anchorValue(s.exp,t,s.overflowPerFloor.exp)*e.expMul,h=this.anchorValue(s.gold,t,s.overflowPerFloor.gold)*e.goldMul;return o?(l*=1+i.bossStatBonus.hp,c*=1+i.bossStatBonus.atk,d*=1+i.bossStatBonus.def):n&&(l*=U.monsters.eliteStatMultiplier,c*=U.monsters.eliteStatMultiplier,d*=U.monsters.eliteStatMultiplier,h*=U.monsters.eliteGoldMultiplier,u*=U.monsters.eliteExpMultiplier),{name:n?`精英·${e.name}`:e.name,hp:a(l),attack:a(c),defense:a(d),exp:a(u),gold:a(h),isElite:n,isBoss:o}}playerBaseAt(e){const t=U.config,n=t.playerBase;let i=n.maxHp,s=n.attack,a=n.defense;for(let o=2;o<=e;o++){const l=t.growthTable.find(c=>o>=c.minLevel&&o<=c.maxLevel)??t.growthTable[t.growthTable.length-1];i+=l.hp,s+=l.attack,a+=l.defense}return{maxHp:i,attack:s,defense:a}}expToNext(e){const{base:t,power:n}=U.config.expFormula;return Math.round(t*Math.pow(e,n))}};C(Ri,"instance");let Kn=Ri;const ku=["poor","common","fine","rare","epic","legendary","mythic"],Ci=class Ci{constructor(){C(this,"state");const e=U.config.playerBase;this.state={level:1,exp:0,hp:e.maxHp,baseMaxHp:e.maxHp,baseAttack:e.attack,baseDefense:e.defense,baseCritRate:e.critRate,baseDodgeRate:e.dodgeRate,gold:0,keys:0,potions:{crude:0,normal:0,quality:0,strong:0,holy:0},hotbar:[null,null,null,null,null],weaponId:null,armorId:null,bag:[],x:0,y:0,currentFloor:1,currentRoomId:""}}static getInstance(){return Ci.instance||(Ci.instance=new Ci),Ci.instance}restore(e){this.state=e}get pos(){return{x:this.state.x,y:this.state.y}}equipped(){return this.state.bag.filter(e=>e.id===this.state.weaponId||e.id===this.state.armorId)}stats(){let e=this.state.baseAttack,t=this.state.baseDefense,n=this.state.baseMaxHp,i=this.state.baseCritRate,s=this.state.baseDodgeRate,a=0,o=0,l=0,c=0,d=0,u=0,h=0;for(const p of this.equipped())e+=p.attack,t+=p.defense;const f=this.equipped().flatMap(p=>p.affixes);for(const p of f)switch(p.type){case"sharp":e+=p.value;break;case"sturdy":t+=p.value;break;case"vitality":n+=p.value;break;case"precision":i+=p.value;break;case"agility":s+=p.value;break;case"savage":u+=p.value;break;case"fortress":h+=p.value;break;case"lifesteal":a+=p.value;break;case"hellfire":o+=p.value;break;case"greed":l+=p.value;break;case"wisdom":c+=p.value;break;case"dragonslayer":d+=p.value;break}return{maxHp:Math.round(n),attack:Math.round(e*(1+u/100)),defense:Math.round(t*(1+h/100)),critRate:Math.min(75,i),dodgeRate:Math.min(50,s),lifesteal:a,fireDamage:o,goldBonus:l,expBonus:c,bossDamage:d}}get maxHp(){return this.stats().maxHp}get attack(){return this.stats().attack}get defense(){return this.stats().defense}get isAlive(){return this.state.hp>0}heal(e){const t=this.maxHp,n=this.state.hp;this.state.hp=Math.min(t,this.state.hp+e);const i=this.state.hp-n;return i>0&&X.emit("hpChanged",{oldValue:n,newValue:this.state.hp,delta:i}),i}damage(e){const t=this.state.hp;this.state.hp=Math.max(0,this.state.hp-e),X.emit("hpChanged",{oldValue:t,newValue:this.state.hp,delta:this.state.hp-t})}gainExp(e){const t=1+this.stats().expBonus/100,n=Math.round(e*t),i=this.state.exp;this.state.exp+=n,X.emit("expChanged",{oldValue:i,newValue:this.state.exp,delta:n}),this.checkLevelUp()}checkLevelUp(){const e=Kn.getInstance();let t=e.expToNext(this.state.level);for(;this.state.exp>=t&&this.state.level<999;){this.state.exp-=t;const n=this.state.level;this.state.level+=1;const i=e.playerBaseAt(this.state.level),s=i.maxHp-this.state.baseMaxHp,a=i.attack-this.state.baseAttack,o=i.defense-this.state.baseDefense;this.state.baseMaxHp=i.maxHp,this.state.baseAttack=i.attack,this.state.baseDefense=i.defense,this.state.hp+=s,X.emit("levelUp",{oldLevel:n,newLevel:this.state.level,gainedHp:s,gainedAttack:a,gainedDefense:o}),t=e.expToNext(this.state.level)}}gainGold(e){const t=1+this.stats().goldBonus/100,n=Math.round(e*t),i=this.state.gold;this.state.gold+=n,X.emit("goldChanged",{oldValue:i,newValue:this.state.gold,delta:n})}spendGold(e){if(this.state.gold<e)return!1;const t=this.state.gold;return this.state.gold-=e,X.emit("goldChanged",{oldValue:t,newValue:this.state.gold,delta:-e}),!0}getPotionCount(e){return this.state.potions[e]??0}setHotbarSlot(e,t){e<0||e>=this.state.hotbar.length||(this.state.hotbar[e]=t)}swapHotbar(e,t){const n=this.state.hotbar;e<0||e>=n.length||t<0||t>=n.length||([n[e],n[t]]=[n[t],n[e]])}addPotion(e,t=1){this.state.potions[e]=this.getPotionCount(e)+t}usePotion(e){if(this.getPotionCount(e)<=0)return!1;const t=U.getPotion(e);if(!t)return!1;this.state.potions[e]-=1;const n=this.heal(Math.round(this.maxHp*t.healPct));return X.emit("potionUsed",{tier:e,healed:n}),!0}bestPotionFor(e){const t=["crude","normal","quality","strong","holy"];for(const n of t){const i=U.getPotion(n);if(i&&this.getPotionCount(n)>0&&Math.round(this.maxHp*i.healPct)<=e)return n}for(const n of t)if(this.getPotionCount(n)>0)return n;return null}get weapon(){return this.state.bag.find(e=>e.id===this.state.weaponId)??null}get armor(){return this.state.bag.find(e=>e.id===this.state.armorId)??null}get unequippedBag(){return this.state.bag.filter(e=>e.id!==this.state.weaponId&&e.id!==this.state.armorId)}addEquipment(e){this.state.bag.push(e),X.emit("equipmentGenerated",{equipment:e,source:e.source})}equip(e){const t=this.state.bag.find(s=>s.id===e);if(!t)return!1;const n=t.slot,i=n==="weapon"?this.state.weaponId:this.state.armorId;return i===e?!1:(n==="weapon"?this.state.weaponId=e:this.state.armorId=e,X.emit("equipmentEquipped",{slot:n,equipmentId:e,oldId:i}),!0)}unequip(e){e==="weapon"?this.state.weaponId=null:this.state.armorId=null,X.emit("equipmentEquipped",{slot:e,equipmentId:"",oldId:null})}removeEquipment(e){const t=this.state.bag.findIndex(i=>i.id===e);if(t<0)return null;this.state.weaponId===e&&(this.state.weaponId=null),this.state.armorId===e&&(this.state.armorId=null);const[n]=this.state.bag.splice(t,1);return n}qualityRank(e){return ku.indexOf(e)}};C(Ci,"instance");let Ee=Ci;const cn=class cn{static setLevel(e){cn.level=e}static shouldLog(e){return cn.order[e]>=cn.order[cn.level]}static debug(...e){cn.shouldLog("debug")&&console.log("[DEBUG]",...e)}static info(...e){cn.shouldLog("info")&&console.log("[INFO]",...e)}static warn(...e){cn.shouldLog("warn")&&console.warn("[WARN]",...e)}static error(...e){cn.shouldLog("error")&&console.error("[ERROR]",...e)}};C(cn,"level","info"),C(cn,"order",{debug:0,info:1,warn:2,error:3});let Ft=cn;const Pi=class Pi{constructor(){C(this,"floor",null);C(this,"states",new Map);C(this,"gateKeys",new Set)}static getInstance(){return Pi.instance||(Pi.instance=new Pi),Pi.instance}loadFloor(e,t){if(this.floor=e,this.states.clear(),t)for(const[n,i]of Object.entries(t))this.states.set(n,i);this.recomputeGates(),Ft.info(`[World] 进入楼层${e.floorId}（${e.kind}） ${e.rooms.length}个房间`)}get currentFloor(){return this.floor}inBounds(e,t){return this.floor?e>=0&&e<this.floor.width&&t>=0&&t<this.floor.height:!1}isWalkable(e,t){return!(!this.floor||!this.inBounds(e,t)||this.floor.grid[t][e]!==0||this.gateKeys.has(`${e},${t}`))}tileAt(e,t){return this.inBounds(e,t)?this.floor.grid[t][e]:null}getRoomAt(e,t){if(!this.floor)return null;for(const n of this.floor.rooms)if(e>=n.x&&e<n.x+n.width&&t>=n.y&&t<n.y+n.height)return n;return null}getRoom(e){return this.floor?.rooms.find(t=>t.id===e)??null}getEntityState(e){return this.states.get(e)??{}}setState(e,t){this.states.set(e,{...this.getEntityState(e),...t})}markDefeated(e){this.setState(e,{isAlive:!1}),this.recomputeGates()}markOpened(e){this.setState(e,{isOpened:!0})}markTalked(e){this.setState(e,{isTalked:!0})}markUsed(e){this.setState(e,{isUsed:!0})}recomputeGates(){if(this.gateKeys.clear(),!this.floor||this.floor.kind!=="boss")return;const e=this.floor.rooms.find(n=>n.type==="boss");if(!(!e||!e.entities.some(n=>n.kind==="boss"&&this.isEntityAlive(n))))for(const n of e.doors)this.getRoom(n.toRoomId)?.type==="end"&&this.gateKeys.add(`${n.x},${n.y}`)}isGateLocked(e,t){return this.gateKeys.has(`${e},${t}`)}getGates(){if(!this.floor||this.floor.kind!=="boss")return[];const e=this.floor.rooms.find(t=>t.type==="boss");return e?e.doors.filter(t=>this.getRoom(t.toRoomId)?.type==="end").map(t=>({x:t.x,y:t.y,direction:t.direction,opened:!this.gateKeys.has(`${t.x},${t.y}`)})):[]}isEntityAlive(e){return e.kind==="monster"||e.kind==="boss"?this.getEntityState(e.id).isAlive!==!1:!0}isChestOpened(e){return this.getEntityState(e.id).isOpened===!0}getEntityAt(e,t){if(!this.floor)return null;for(const n of this.floor.rooms)if(!(e<n.x-1||e>n.x+n.width||t<n.y-1||t>n.y+n.height)){for(const i of n.entities)if(!(i.x!==e||i.y!==t)){if(i.kind==="monster"||i.kind==="boss"){if(!this.isEntityAlive(i))continue}else if(i.kind==="chest"){if(this.isChestOpened(i))continue}else if((i.kind==="potion"||i.kind==="fountain")&&this.getEntityState(i.id).isUsed===!0)continue;if(!(i.kind==="pillar"||i.kind==="carpet"||i.kind==="torch"||i.kind==="cauldron"||i.kind==="shelf"))return i}}return null}hasBlockingEntity(e,t){return this.getEntityAt(e,t)!==null}allEntities(){const e=[];if(!this.floor)return e;for(const t of this.floor.rooms)for(const n of t.entities)(n.kind==="monster"||n.kind==="boss")&&!this.isEntityAlive(n)||(n.kind==="potion"||n.kind==="fountain")&&this.getEntityState(n.id).isUsed===!0||e.push({entity:n,room:t});return e}exportEntityStates(){return Object.fromEntries(this.states)}reset(){this.floor=null,this.states.clear()}};C(Pi,"instance");let Ge=Pi;class vn{static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static lerp(e,t,n){return e+(t-e)*n}static manhattan(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}static dist(e,t,n,i){return Math.hypot(e-n,t-i)}}const xe={next(){return Math.random()},randInt(r,e){return Math.floor(Math.random()*(e-r+1))+r},randFloat(r,e){return Math.random()*(e-r)+r},chance(r){return Math.random()<r},pick(r){return r[Math.floor(Math.random()*r.length)]},pickWeighted(r,e){const t=r.map(e),n=t.reduce((s,a)=>s+a,0);if(n<=0)return r[0];let i=Math.random()*n;for(let s=0;s<r.length;s++)if(i-=t[s],i<=0)return r[s];return r[r.length-1]},shuffle(r){const e=[...r];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}},Ii=class Ii{constructor(){}static getInstance(){return Ii.instance||(Ii.instance=new Ii),Ii.instance}getFloorKind(e){const t=U.mapGen;return e===t.initialFloor?"initial":e%t.bossFloorInterval===0?"boss":"normal"}allocate(e){const t=this.getFloorKind(e);if(t==="initial")return{floorId:e,kind:t,roomTypes:["start","end"]};if(t==="boss")return{floorId:e,kind:t,roomTypes:["rest","boss","end"]};const i=this.rollRoomCount(e)-2,s=this.allocateByTension(e,i);return{floorId:e,kind:t,roomTypes:["start",...s,"end"]}}rollRoomCount(e){const t=U.mapGen,n=t.floorRoomCounts.find(s=>e>=s.minFloor&&e<=s.maxFloor)??t.floorRoomCounts[t.floorRoomCounts.length-1],i=xe.randInt(n.min,n.max);return Math.min(i,t.maxRooms)}allocateByTension(e,t){const n=U.mapGen,i=n.tension.weights;let s=0,a=0;const o=[];for(let l=0;l<t;l++){const d=o.length+2<=n.merchantLimit.fewMaxRooms?n.merchantLimit.fewCount:n.merchantLimit.manyCount;let u;s>=n.tension.forcePositiveAt?u=!0:s<=n.tension.forceNegativeAt?u=!1:u=xe.chance(1/(1+Math.exp(-s)));let h;u?(h=a<d&&xe.chance(.3)?"merchant":"chest",h==="merchant"&&a++):h=xe.chance(.3)?"elite":"combat",o.push(h),s+=i[h]??0}if(this.isWitchFloor(e)){const l=o.findIndex(d=>d==="chest"),c=l>=0?l:o.length-1;c>=0&&(s-=i[o[c]]??0,o[c]="witch",s+=i.witch??0)}if(this.isBlacksmithFloor(e)&&!this.isWitchFloor(e)){const l=o.findIndex(d=>d==="chest"),c=l>=0?l:o.length-1;c>=0&&(s-=i[o[c]]??0,o[c]="blacksmith",s+=i.blacksmith??0)}return Ft.debug(`[FloorGen] 楼层${e} 类型分配=${o.join(",")} 终态Tension=${s}`),o}isWitchFloor(e){const t=U.mapGen.witchLimit;return e>=t.minFloor&&(e-t.minFloor)%t.interval===0}isBlacksmithFloor(e){const t=U.mapGen.blacksmithLimit;return e>=t.minFloor&&(e-t.minFloor)%t.interval===0}};C(Ii,"instance");let So=Ii;const Li=class Li{constructor(){}static getInstance(){return Li.instance||(Li.instance=new Li),Li.instance}plan(e){const t=e.roomTypes.slice(1,-1);if(e.kind!=="normal"||t.length<2)return e.roomTypes.map((f,p)=>({type:f,rail:p===0?"S":p===e.roomTypes.length-1?"E":"A",railIndex:Math.max(0,p-1),mountIndex:-1,isTrunk:!0}));const n=t.filter(f=>f==="combat"||f==="elite"),i=t.filter(f=>f==="chest"||f==="merchant"||f==="witch"||f==="blacksmith"),s=[...n];s.sort((f,p)=>(f==="elite"?0:1)-(p==="elite"?0:1));const a=[],o=[];s.forEach((f,p)=>{p%2===0?a.push(f):o.push(f)}),o.length===0&&a.length>=2&&o.push(a.pop()),a.length===0&&o.length>=2&&a.push(o.pop());const l=a.length+o.length,c=i.map(f=>{const p=f==="merchant"||f==="witch"||f==="blacksmith"?Math.floor(l/2):xe.randInt(Math.ceil(l/2),l-1);return{type:f,mountIndex:Math.min(p,l-1)}}),d=[{type:e.roomTypes[0],rail:"S",railIndex:0,mountIndex:-1,isTrunk:!0}],u=(f,p,v)=>{d.push({type:f,rail:p,railIndex:v,mountIndex:-1,isTrunk:!0});const m=v*2+(p==="A"?0:1),g=c.map((b,E)=>({...b,mi:E})).filter(b=>b.mountIndex===m);for(const b of g)d.push({type:b.type,rail:"side",railIndex:-1,mountIndex:m,isTrunk:!1})},h=Math.max(a.length,o.length);for(let f=0;f<h;f++)f<a.length&&u(a[f],"A",f),f<o.length&&u(o[f],"B",f);for(const f of c){const p=f.mountIndex;!d.some(m=>m.rail==="side"&&m.mountIndex===p&&m.type===f.type)&&!d.some(m=>m.mountIndex===p&&m.rail==="side")&&d.splice(d.length-1,0,{type:f.type,rail:"side",railIndex:-1,mountIndex:p,isTrunk:!1})}return d.push({type:"end",rail:"E",railIndex:0,mountIndex:-1,isTrunk:!0}),d}pathLengthDiff(e){const t=e.filter(i=>i.rail==="A").length,n=e.filter(i=>i.rail==="B").length;return Math.abs(t-n)}validateDiff(e){return this.pathLengthDiff(e)<=U.mapGen.path.maxLengthDiff}};C(Li,"instance");let Eo=Li;const li=class li{static reset(){li.counter=0}static next(e){return li.counter+=1,`${e}_${li.counter.toString(36)}`}static equipmentId(){return li.counter+=1,`eq_${Date.now().toString(36)}_${li.counter.toString(36)}_${Math.floor(Math.random()*1e6).toString(36)}`}};C(li,"counter",0);let Xt=li;const Da={north:{dx:0,dy:-1},south:{dx:0,dy:1},east:{dx:1,dy:0},west:{dx:-1,dy:0}},Bu={north:"south",south:"north",east:"west",west:"east"},Di=class Di{constructor(){}static getInstance(){return Di.instance||(Di.instance=new Di),Di.instance}place(e,t){const n=U.mapGen,i=n.gridRadius,s=this.maxSpecWidth(),a=this.maxSpecHeight(),o=2*i*n.cellSpacingX+s,l=2*i*n.cellSpacingY+a,c=new Map,d=[],u=[],h=new Map;for(let p=0;p<t.length;p++){const v=t[p];let m=0,g=0,b=null;if(p===0)m=0,g=0;else{const _=d[p-1],A=this.biasTarget(v,t,d,h),L=this.chooseCell(_.gx,_.gy,c,u,A);if(!L)return null;m=L.gx,g=L.gy,b=L.direction}const E=`${m},${g}`;if(c.has(E))return null;c.set(E,p);const y=this.rollSize(v.type),w=(m+i)*n.cellSpacingX,S=(g+i)*n.cellSpacingY,R={id:`room_${e}_${p}`,floorId:e,type:v.type,order:p,gx:m,gy:g,width:y.width,height:y.height,x:w,y:S,centerX:w+Math.floor(y.width/2),centerY:S+Math.floor(y.height/2),fromDirection:b,depth:0,onPathA:v.rail==="A",onPathB:v.rail==="B",mountedOn:v.rail==="side"?this.mountedOnId(t,v,e):null,doors:[],entities:[]};d.push(R),(v.rail==="A"||v.rail==="B")&&h.set(`${v.rail}${v.railIndex}`,{gx:m,gy:g}),b&&u.push(b)}const f=Array.from({length:l},()=>Array.from({length:o},()=>-1));for(const p of d){for(let v=p.y;v<=p.y+p.height-1;v++)for(let m=p.x;m<=p.x+p.width-1;m++)f[v][m]=1;for(let v=p.y+1;v<=p.y+p.height-2;v++)for(let m=p.x+1;m<=p.x+p.width-2;m++)f[v][m]=0}return Xt.next("gen"),{rooms:d,grid:f}}biasTarget(e,t,n,i){if(e.rail==="A"&&e.railIndex>0)return i.get(`A${e.railIndex-1}`)??null;if(e.rail==="B"&&e.railIndex>0)return i.get(`B${e.railIndex-1}`)??null;if(e.rail==="B"&&e.railIndex===0)return{gx:0,gy:0};if(e.rail==="E"){const s=t.filter(a=>a.rail==="A").length-1;if(s>=0)return i.get(`A${s}`)??null}return null}chooseCell(e,t,n,i,s){const o=U.mapGen.gridRadius,l=2*Math.SQRT2+1e-9,c=i[i.length-1]??null,d=["north","south","east","west"],u=xe.shuffle(d),h=(p,v)=>Math.abs(p)<=o&&Math.abs(v)<=o,f=(p,v)=>{const m=[];for(const g of u){if(!p&&c&&g===Bu[c]||!v&&this.isThirdStraight(g,i))continue;const{dx:b,dy:E}=Da[g],y=e+b,w=t+E;if(n.has(`${y},${w}`)||!h(y,w)||vn.dist(y,w,0,0)>l)continue;let S=xe.next();s&&vn.manhattan(y,w,s.gx,s.gy)<=1&&(S+=3),m.push({gx:y,gy:w,direction:g,score:S})}return m.length===0?null:(m.sort((g,b)=>b.score-g.score),m[0])};return f(!1,!1)??f(!0,!1)??f(!0,!0)??this.nearestFreeCell(e,t,n,o)}isThirdStraight(e,t){const n=t.length;return n<2?!1:t[n-1]===e&&t[n-2]===e}nearestFreeCell(e,t,n,i){let s=null,a=1/0;for(const o of Object.keys(Da)){const{dx:l,dy:c}=Da[o],d=e+l,u=t+c;if(n.has(`${d},${u}`)||Math.abs(d)>i||Math.abs(u)>i||vn.dist(d,u,0,0)>2*Math.SQRT2+1e-9)continue;const h=vn.dist(d,u,0,0);h<a&&(a=h,s={gx:d,gy:u,direction:o})}return s}rollSize(e){const t=U.mapGen.roomSpecs[e],n=a=>Array.isArray(a)?xe.randInt(a[0],a[1]):a,i=Math.max(U.mapGen.minRoomWidth,n(t.width)),s=Math.max(U.mapGen.minRoomHeight,n(t.height));return{width:i+2,height:s+2}}maxSpecWidth(){let e=0;for(const t of Object.values(U.mapGen.roomSpecs)){const n=Array.isArray(t.width)?t.width[1]:t.width;e=Math.max(e,n)}return e+2}maxSpecHeight(){let e=0;for(const t of Object.values(U.mapGen.roomSpecs)){const n=Array.isArray(t.height)?t.height[1]:t.height;e=Math.max(e,n)}return e+2}mountedOnId(e,t,n){const i=e.indexOf(t);for(let s=i-1;s>=0;s--)if(e[s].isTrunk)return`room_${n}_${s}`;return null}};C(Di,"instance");let wo=Di;const Fi=class Fi{constructor(){}static getInstance(){return Fi.instance||(Fi.instance=new Fi),Fi.instance}connect(e,t){const n=[],i=[],s=new Set;new Map(e.map(h=>[h.id,h]));const a=(h,f)=>{s.add(this.pairKey(h,f)),s.add(this.pairKey(f,h))},o=(h,f)=>s.has(this.pairKey(h,f));for(let h=0;h+1<e.length;h++){const f=e[h],p=e[h+1],v=this.carveCorridor(f,p,t);v&&(n.push({id:Xt.next("corr"),fromRoomId:f.id,toRoomId:p.id,tiles:v.tiles,extra:!1}),i.push({from:f.id,to:p.id}),a(f.id,p.id))}const l=U.mapGen.corridor,c=[];for(let h=0;h<e.length;h++)for(let f=h+1;f<e.length;f++){const p=e[h],v=e[f];o(p.id,v.id)||vn.manhattan(p.gx,p.gy,v.gx,v.gy)>l.adjacentManhattan||c.push({a:p,b:v,priority:this.shortcutPriority(p,v,e)})}c.sort((h,f)=>h.priority-f.priority||xe.next()-.5);let d=0,u=!1;for(const h of c){if(d>=l.extraMax)break;if(!xe.chance(l.extraChance))continue;const p=this.carveCorridor(h.a,h.b,t);p&&(n.push({id:Xt.next("corr"),fromRoomId:h.a.id,toRoomId:h.b.id,tiles:p.tiles,extra:!0}),i.push({from:h.a.id,to:h.b.id}),a(h.a.id,h.b.id),d++,h.priority<=1&&(u=!0))}if(!u){const h=c.find(f=>f.priority<=1&&!o(f.a.id,f.b.id)&&d<l.extraMax)??c.find(f=>f.priority<=2&&!o(f.a.id,f.b.id)&&d<l.extraMax);if(h){const f=this.carveCorridor(h.a,h.b,t);f&&(n.push({id:Xt.next("corr"),fromRoomId:h.a.id,toRoomId:h.b.id,tiles:f.tiles,extra:!0}),i.push({from:h.a.id,to:h.b.id}),a(h.a.id,h.b.id))}}return{corridors:n,connections:i}}shortcutPriority(e,t,n){const i=e.onPathA&&t.onPathA||e.onPathB&&t.onPathB,s=n[0],a=n[n.length-1],o=e===s&&t.onPathB||t===s&&e.onPathB||e===a&&t.onPathA||t===a&&e.onPathA;return i?this.railGap(e,t)===1?0:2:o?1:2}railGap(e,t){return Math.abs(e.order-t.order)}carveCorridor(e,t,n){if(e.gy===t.gy&&e.gx!==t.gx){const i=e.gx<t.gx?e:t,s=e.gx<t.gx?t:e,a=Math.max(i.y+1,s.y+1),o=Math.min(i.y+i.height-2,s.y+s.height-2);if(a>o)return null;const l=Math.floor((a+o)/2),c=[];for(let d=i.x+i.width;d<s.x;d++)this.insideGrid(n,d,l)&&(n[l][d]=0,c.push({x:d,y:l}));return this.carveDoor(i,s,l,"east",n),this.carveDoor(s,i,l,"west",n),{tiles:c}}if(e.gx===t.gx&&e.gy!==t.gy){const i=e.gy<t.gy?e:t,s=e.gy<t.gy?t:e,a=Math.max(i.x+1,s.x+1),o=Math.min(i.x+i.width-2,s.x+s.width-2);if(a>o)return null;const l=Math.floor((a+o)/2),c=[];for(let d=i.y+i.height;d<s.y;d++)this.insideGrid(n,l,d)&&(n[d][l]=0,c.push({x:l,y:d}));return this.carveDoor(i,s,l,"south",n),this.carveDoor(s,i,l,"north",n),{tiles:c}}return null}carveDoor(e,t,n,i,s){let a=0,o=0;if(i==="east"?(a=e.x+e.width-1,o=n):i==="west"?(a=e.x,o=n):i==="south"?(a=n,o=e.y+e.height-1):(a=n,o=e.y),!!this.insideGrid(s,a,o)){if(i==="east"||i==="west"){if(o<=e.y||o>=e.y+e.height-1)return}else if(a<=e.x||a>=e.x+e.width-1)return;s[o][a]=0,e.doors.push({x:a,y:o,direction:i,toRoomId:t.id})}}insideGrid(e,t,n){return n>=0&&n<e.length&&t>=0&&t<e[0].length}pairKey(e,t){return`${e}|${t}`}};C(Fi,"instance");let To=Fi;const Fa=[[0,1],[0,-1],[1,0],[-1,0]];class zu{constructor(e,t,n){C(this,"room");C(this,"grid");C(this,"floorId");C(this,"spots");C(this,"taken",new Set);this.room=e,this.grid=t,this.floorId=n,this.spots=this.computeSpots()}put(e){this.room.entities.push({...e,id:Xt.next("ent")}),this.taken.add(`${e.x},${e.y}`)}putBlocking(e,t,n){this.put({kind:e,x:t,y:n}),this.grid[n]?.[t]===0&&(this.grid[n][t]=2)}freeAt(e,t){return this.grid[t]?.[e]!==0||this.taken.has(`${e},${t}`)?!1:!this.room.entities.some(n=>n.x===e&&n.y===t)}inRoom(e,t){return e>=this.room.x&&e<this.room.x+this.room.width&&t>=this.room.y&&t<this.room.y+this.room.height}placeStairAgainstWall(e){const t=this.room.y+1,n=new Set(this.room.doors.map(i=>{const s=this.innerOfDoor(i);return`${s.x},${s.y}`}));for(let i=0;i<=this.room.width;i++){const s=i===0?0:i%2===1?(i+1)/2:-(i/2),a=this.room.centerX-1+s;if(a<this.room.x+1||a+1>this.room.x+this.room.width-2)continue;const o=[0,1].flatMap(l=>[0,1].map(c=>({x:a+c,y:t+l})));if(o.every(l=>this.freeAt(l.x,l.y))&&!o.some(l=>n.has(`${l.x},${l.y}`)))return this.put({kind:"stair",x:a,y:t,targetFloor:e,stairSpan:2}),this.put({kind:"stair",x:a+1,y:t,targetFloor:e,stairSpan:1}),this.put({kind:"stair",x:a,y:t+1,targetFloor:e,stairSpan:1}),this.put({kind:"stair",x:a+1,y:t+1,targetFloor:e,stairSpan:1}),!0}return!1}monsterAt(e,t,n){this.put({kind:"monster",monsterId:e,isElite:t,x:n.x,y:n.y})}computeSpots(){const e=this.room.doors.map(s=>({x:s.x,y:s.y}));e.length===0&&e.push({x:this.room.centerX,y:this.room.centerY});const t=new Map,n=[];for(const s of e)this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0&&(t.set(`${s.x},${s.y}`,0),n.push(s));for(;n.length>0;){const s=n.shift(),a=t.get(`${s.x},${s.y}`)??0;for(const[o,l]of Fa){const c=s.x+o,d=s.y+l,u=`${c},${d}`;this.inRoom(c,d)&&this.grid[d]?.[c]===0&&(t.has(u)||(t.set(u,a+1),n.push({x:c,y:d})))}}const i=[];for(let s=this.room.y+1;s<=this.room.y+this.room.height-2;s++)for(let a=this.room.x+1;a<=this.room.x+this.room.width-2;a++)this.grid[s][a]===0&&i.push({x:a,y:s,dist:t.get(`${a},${s}`)??99});return i}innerOfDoor(e){switch(e.direction){case"east":return{x:e.x-1,y:e.y};case"west":return{x:e.x+1,y:e.y};case"north":return{x:e.x,y:e.y+1};default:return{x:e.x,y:e.y-1}}}mainPath(){const e=this.room.doors.map(s=>this.innerOfDoor(s)).filter(s=>this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0);if(e.length===0)return[{x:this.room.centerX,y:this.room.centerY}];if(e.length===1)return this.bfsPath(e[0],this.farthestFrom(e[0]));let t=[e[0],e[1]],n=-1;for(let s=0;s<e.length;s++)for(let a=s+1;a<e.length;a++){const o=Math.abs(e[s].x-e[a].x)+Math.abs(e[s].y-e[a].y);o>n&&(n=o,t=[e[s],e[a]])}const i=this.bfsPath(t[0],t[1]);return i.length>0?i:[t[0]]}bfsPath(e,t){const n=(c,d)=>`${c},${d}`,i=new Map,s=[e];for(i.set(n(e.x,e.y),null);s.length>0;){const c=s.shift();if(c.x===t.x&&c.y===t.y)break;for(const[d,u]of Fa){const h=c.x+d,f=c.y+u;if(!this.inRoom(h,f)||this.grid[f]?.[h]!==0)continue;const p=n(h,f);i.has(p)||(i.set(p,n(c.x,c.y)),s.push({x:h,y:f}))}}const a=n(t.x,t.y);if(!i.has(a))return[];const o=[];let l=a;for(;l;){const[c,d]=l.split(",").map(Number);o.push({x:c,y:d}),l=i.get(l)??null}return o.reverse()}farthestFrom(e){let t=e,n=-1;for(const i of this.spots)i.dist>n&&(n=i.dist,t={x:i.x,y:i.y});return t}innerCorners(){const e=this.room;return[{x:e.x+1,y:e.y+1},{x:e.x+e.width-2,y:e.y+1},{x:e.x+1,y:e.y+e.height-2},{x:e.x+e.width-2,y:e.y+e.height-2}]}blockPath(e,t,n,i=.5){if(e<=0||t.length===0)return 0;const s=this.mainPath();if(s.length<3)return 0;const a=Math.max(1,Math.min(s.length-2,Math.round(s.length*i))),o=s[a],l=s[a+1]??s[a-1],c=o.y===l.y,d=[];if(c)for(let m=this.room.y+1;m<=this.room.y+this.room.height-2;m++)this.grid[m]?.[o.x]===0&&d.push({x:o.x,y:m});else for(let m=this.room.x+1;m<=this.room.x+this.room.width-2;m++)this.grid[o.y]?.[m]===0&&d.push({x:m,y:o.y});if(d.length===0)return 0;const u=s[0],h=d.filter(m=>Math.abs(m.x-u.x)+Math.abs(m.y-u.y)>=2),f=h.length>0?h:d,p=xe.shuffle(f).slice(0,Math.min(e,f.length));let v=0;for(const m of p)this.taken.has(`${m.x},${m.y}`)||(this.monsterAt(xe.pickWeighted(t,g=>g.weight).id,n,m),v++);if(v>0&&U.mapGen.content.barrier.fillWithPillars){const m=this.doorInnerCells();for(const g of f)this.taken.has(`${g.x},${g.y}`)||m.has(`${g.x},${g.y}`)||(this.put({kind:"pillar",x:g.x,y:g.y}),this.grid[g.y][g.x]=2)}return v}doorInnerCells(){return new Set(this.room.doors.map(e=>{const t=this.innerOfDoor(e);return`${t.x},${t.y}`}))}guardAround(e,t,n,i,s,a=1){if(n<=0||i.length===0)return 0;const o=[];for(let c=t-a;c<=t+a;c++)for(let d=e-a;d<=e+a;d++)d===e&&c===t||this.inRoom(d,c)&&this.grid[c]?.[d]===0&&(this.taken.has(`${d},${c}`)||o.push({x:d,y:c}));const l=xe.shuffle(o).slice(0,Math.min(n,o.length));for(const c of l)this.monsterAt(xe.pickWeighted(i,d=>d.weight).id,s,c);return l.length}guardStair(e,t,n=!1){if(e<=0||t.length===0)return 0;const i=this.room.entities.find(u=>u.kind==="stair"),s=i?{x:i.x,y:i.y}:{x:this.room.centerX,y:this.room.centerY},a=this.mainPath()[0]??{x:s.x,y:s.y+1},o=Math.sign(a.x-s.x),l=Math.sign(a.y-s.y),c=[];o!==0&&c.push({x:s.x+o,y:s.y},{x:s.x+o*2,y:s.y}),l!==0&&c.push({x:s.x,y:s.y+l},{x:s.x,y:s.y+l*2});let d=0;for(const u of c){if(d>=e)break;this.freeAt(u.x,u.y)&&(this.monsterAt(xe.pickWeighted(t,h=>h.weight).id,n,u),d++)}return d}placeMonsterAt(e,t,n){return this.freeAt(n.x,n.y)?(this.monsterAt(e,t,n),!0):!1}pickMonsterId(e){return e.length>0?xe.pickWeighted(e,t=>t.weight).id:null}placeArenaPillars(){const e=this.room.centerX,t=this.room.centerY,n=[{x:e-2,y:t},{x:e+2,y:t},{x:e,y:t-2},{x:e,y:t+2},{x:e-2,y:t-2},{x:e+2,y:t-2},{x:e-2,y:t+2},{x:e+2,y:t+2}],i=new Set;for(const a of this.room.doors){const o=this.innerOfDoor(a);i.add(`${o.x},${o.y}`)}for(const a of this.mainPath())i.add(`${a.x},${a.y}`);const s=n.filter(a=>this.inRoom(a.x,a.y)&&this.freeAt(a.x,a.y)&&!i.has(`${a.x},${a.y}`));if(s.length<4)return!1;for(const a of s)this.putBlocking("pillar",a.x,a.y);return!0}placeMonsters(e,t,n){if(e<=0||n.length===0)return 0;const i=U.mapGen.content.monsterMinDistFromEntry,s=this.spots.filter(l=>l.dist>=i&&this.freeAt(l.x,l.y)),a=s.length>=e?s:this.spots.filter(l=>this.freeAt(l.x,l.y)),o=xe.shuffle(a).slice(0,e);for(const l of o)this.monsterAt(xe.pickWeighted(n,c=>c.weight).id,t,l);return o.length}placeCornerChests(e,t=!1){const n=[];if(e<=0)return n;const i=this.innerCorners().filter(a=>this.freeAt(a.x,a.y));return xe.shuffle(i).slice(0,Math.min(e,i.length)).forEach((a,o)=>{t&&o===0&&this.put({kind:"carpet",x:a.x,y:a.y}),this.put({kind:"chest",chestTier:"normal",x:a.x,y:a.y}),n.push(a)}),n}placePotions(e){if(e<=0)return 0;const t=this.spots.filter(s=>s.dist>=1&&s.dist<=4&&this.freeAt(s.x,s.y)),n=t.length>=e?t:this.spots.filter(s=>this.freeAt(s.x,s.y)),i=xe.shuffle(n).slice(0,Math.min(e,n.length));for(const s of i)this.put({kind:"potion",potionTier:this.pickPotionTier(),x:s.x,y:s.y});return i.length}pickPotionTier(){const e=U.potions.potions,t=e.filter(s=>this.floorId>=s.minFloor&&this.floorId<=s.maxFloor),n=t.length>0?t:e,i=n.map((s,a)=>({tier:s.tier,weight:n.length-a}));return xe.pickWeighted(i,s=>s.weight).tier}placeRoomTorches(){const e=U.mapGen.content.roomTorches[this.room.type];if(!e)return;const t=xe.randInt(e[0],e[1]);if(t<=0)return;let n=0;for(const i of this.wallRing()){if(n>=t)break;this.grid[i.y]?.[i.x]===1&&(this.room.entities.some(s=>s.x===i.x&&s.y===i.y)||(this.put({kind:"torch",x:i.x,y:i.y}),n++))}}wallRing(){const e=this.room,t=[];for(let s=e.x;s<e.x+e.width;s++)t.push({x:s,y:e.y},{x:s,y:e.y+e.height-1});for(let s=e.y+1;s<e.y+e.height-1;s++)t.push({x:e.x,y:s},{x:e.x+e.width-1,y:s});const n=[{x:e.x,y:e.y},{x:e.x+e.width-1,y:e.y},{x:e.x,y:e.y+e.height-1},{x:e.x+e.width-1,y:e.y+e.height-1}],i=s=>Math.min(...n.map(a=>Math.abs(s.x-a.x)+Math.abs(s.y-a.y)));return t.sort((s,a)=>i(s)-i(a))}placePillars(){if(this.room.width-2<U.mapGen.decor.pillarMinRoomWidth)return;const e=this.doorInnerCells();for(const t of this.innerCorners())this.freeAt(t.x,t.y)&&(e.has(`${t.x},${t.y}`)||(this.put({kind:"pillar",x:t.x,y:t.y}),this.grid[t.y][t.x]=2))}placeWitchRoom(e){const t=this.room.centerX,n=this.room.centerY,i=this.mainPath()[0]??{x:t,y:n+1};if(this.freeAt(t,n))this.put({kind:"npc",npcId:"npc_witch",x:t,y:n});else{const u=[...this.spots].filter(h=>this.freeAt(h.x,h.y)).sort((h,f)=>f.dist-h.dist)[0];u&&this.put({kind:"npc",npcId:"npc_witch",x:u.x,y:u.y})}const s=Math.sign(i.x-t),a=Math.sign(i.y-n),o=s!==0?{x:t+s,y:n}:{x:t,y:n+(a||1)};this.freeAt(o.x,o.y)&&this.putBlocking("cauldron",o.x,o.y);const l=s!==0?[{x:0,y:1},{x:0,y:-1}]:[{x:1,y:0},{x:-1,y:0}];let c=0;for(const u of l){if(c>=e)break;const h=t+u.x*2,f=n+u.y*2;this.freeAt(h,f)&&(this.putBlocking("shelf",h,f),c++)}if(c<e)for(const u of xe.shuffle(this.innerCorners())){if(c>=e)break;this.freeAt(u.x,u.y)&&(this.putBlocking("shelf",u.x,u.y),c++)}const d=xe.shuffle(this.innerCorners()).sort((u,h)=>Math.abs(h.x-i.x)+Math.abs(h.y-i.y)-(Math.abs(u.x-i.x)+Math.abs(u.y-i.y)));for(const u of d)if(this.freeAt(u.x,u.y)){this.put({kind:"fountain",x:u.x,y:u.y});break}}bandFor(e){const t=this.room.depth;return e.find(n=>t<=n.maxDepth)??e[e.length-1]}validate(e,t){const n=[],i=U.mapGen.content.guard,s=()=>this.room.entities.some(a=>a.kind==="monster"||a.kind==="boss");if((e==="combat"||e==="elite")&&t.length>0&&(!s()||this.canBypass())){const a=this.mainPath(),o=a[Math.floor(a.length/2)]??{x:this.room.centerX,y:this.room.centerY};this.freeAt(o.x,o.y)?this.monsterAt(xe.pickWeighted(t,l=>l.weight).id,!1,o):n.push("可绕过且无空位补怪")}for(const a of this.room.entities.filter(o=>o.kind==="chest"))!this.room.entities.some(l=>(l.kind==="monster"||l.kind==="boss")&&Math.abs(l.x-a.x)+Math.abs(l.y-a.y)<=i.chestRadius)&&t.length>0&&this.guardAround(a.x,a.y,1,t,!1,1)===0&&n.push("宝箱无守护且无空位");for(const a of this.room.entities.filter(o=>o.kind==="stair"))!this.room.entities.some(l=>(l.kind==="monster"||l.kind==="boss")&&Math.abs(l.x-a.x)+Math.abs(l.y-a.y)<=i.stairRadius)&&t.length>0&&this.guardStair(1,t)===0&&n.push("楼梯无守护且无空位");return n}canBypass(){const e=this.mainPath(),t=this.room.entities.find(o=>o.kind==="stair")??e[e.length-1],n=e[0];if(!t||!n)return!1;const i=new Set(this.room.entities.filter(o=>o.kind==="monster"||o.kind==="boss"||o.kind==="pillar").map(o=>`${o.x},${o.y}`)),s=new Set([`${n.x},${n.y}`]),a=[n];for(;a.length>0;){const o=a.shift();if(o.x===t.x&&o.y===t.y)return!0;for(const[l,c]of Fa){const d=o.x+l,u=o.y+c,h=`${d},${u}`;this.inRoom(d,u)&&this.grid[u]?.[d]===0&&(i.has(h)||s.has(h)||(s.add(h),a.push({x:d,y:u})))}}return!1}}const Ui=class Ui{constructor(){}static getInstance(){return Ui.instance||(Ui.instance=new Ui),Ui.instance}fill(e,t,n,i,s){const a=U.mapGen.content,o=U.monsters.monsters.filter(u=>u.category==="normal"),l=o.filter(u=>i>=u.floorMin&&i<=u.floorMax),c=(l.length>0?l:o).map(u=>({id:u.id,weight:u.weight}));for(const u of e){const h=new zu(u,n,i);switch(u.type){case"start":{s==="initial"&&h.put({kind:"npc",npcId:"npc_guide",x:u.centerX,y:u.y+1}),h.placePotions(xe.randInt(a.startRoom.potions[0],a.startRoom.potions[1]));break}case"end":{if(!h.placeStairAgainstWall(i+1)){const f=u.centerX-1,p=u.centerY-1;if([0,1].flatMap(m=>[0,1].map(g=>({x:f+g,y:p+m}))).every(m=>h.freeAt(m.x,m.y)))h.put({kind:"stair",x:f,y:p,targetFloor:i+1,stairSpan:2}),h.put({kind:"stair",x:f+1,y:p,targetFloor:i+1,stairSpan:1}),h.put({kind:"stair",x:f,y:p+1,targetFloor:i+1,stairSpan:1}),h.put({kind:"stair",x:f+1,y:p+1,targetFloor:i+1,stairSpan:1});else{const m={x:u.centerX,y:u.y+1};h.freeAt(m.x,m.y)?h.put({kind:"stair",x:m.x,y:m.y,targetFloor:i+1}):h.put({kind:"stair",x:u.centerX,y:u.centerY,targetFloor:i+1})}}s==="initial"?(h.put({kind:"chest",chestTier:"normal",x:u.x+1,y:u.y+1}),h.guardStair(1,c)):s==="boss"?(h.put({kind:"chest",chestTier:"grand",x:u.x+1,y:u.y+1}),h.put({kind:"chest",chestTier:"grand",x:u.x+u.width-2,y:u.y+u.height-2})):(h.guardStair(xe.randInt(a.exitRoom.guards[0],a.exitRoom.guards[1]),c),h.placeCornerChests(xe.randInt(a.exitRoom.chests[0],a.exitRoom.chests[1]))),h.placePotions(xe.randInt(a.exitRoom.potions[0],a.exitRoom.potions[1]));break}case"rest":break;case"merchant":{h.put({kind:"npc",npcId:"npc_merchant",x:u.centerX,y:u.centerY}),h.placePotions(xe.randInt(a.merchantRoom.potions[0],a.merchantRoom.potions[1])),h.placeCornerChests(xe.randInt(a.merchantRoom.chests[0],a.merchantRoom.chests[1]));break}case"blacksmith":{h.put({kind:"npc",npcId:"npc_blacksmith",x:u.centerX,y:u.centerY});break}case"witch":{h.placeWitchRoom(xe.randInt(a.witchRoom.shelves[0],a.witchRoom.shelves[1]));break}case"chest":{const f=h.placeCornerChests(xe.randInt(a.treasureRoom.chests[0],a.treasureRoom.chests[1]),!0);let p=xe.randInt(a.treasureRoom.monsters[0],a.treasureRoom.monsters[1]);for(const v of f){if(p<=0)break;p-=h.guardAround(v.x,v.y,1,c,!1,1)}h.placePotions(xe.randInt(a.treasureRoom.potions[0],a.treasureRoom.potions[1]));break}case"combat":{const f=h.bandFor(a.combatByDepth),p=this.densityCap(u),v=Math.max(1,Math.min(xe.randInt(f.monsters[0],f.monsters[1]),p)),m=u.width-2>=8,g=u.height-2>=7,b=[{id:"barrier",weight:4},{id:"double",weight:m?2:0},{id:"arena",weight:m&&g?2:0},{id:"scattered",weight:2}],E=xe.pickWeighted(b,S=>S.weight).id;u.layout=E;let y=0;if(E==="double"){const S=Math.max(1,Math.floor(v/2));y=h.blockPath(S,c,!1,.32)+h.blockPath(v-S,c,!1,.68)}else E==="arena"?h.placeArenaPillars()&&(y=h.guardAround(u.centerX,u.centerY,v,c,!1,2)):E==="barrier"?y=h.blockPath(v,c,!1):y=h.placeMonsters(v,!1,c);y===0&&h.placeMonsters(v,!1,c);const w=xe.randInt(f.elites[0],f.elites[1]);w>0&&h.placeMonsters(w,!0,c),h.placeCornerChests(xe.randInt(f.chests[0],f.chests[1])),h.placePotions(xe.randInt(f.potions[0],f.potions[1]));break}case"elite":{const f=u.width-2>=9,p=u.height-2>=7,v=[{id:"barrier",weight:3},{id:"throne",weight:p?3:0},{id:"arena",weight:f&&p?2:0}],m=xe.pickWeighted(v,S=>S.weight).id;u.layout=`elite_${m}`;const g=h.mainPath(),b=g[g.length-1]??{x:u.centerX,y:u.centerY},E=h.pickMonsterId(c);m==="throne"&&E?h.placeMonsterAt(E,!0,b)||h.placeMonsterAt(E,!0,{x:b.x,y:b.y-1})||h.placeMonsterAt(E,!0,{x:b.x,y:b.y+1})||h.placeMonsterAt(E,!0,{x:b.x-1,y:b.y})||h.blockPath(1,c,!0):m==="arena"&&E?(!h.placeArenaPillars()||!h.placeMonsterAt(E,!0,{x:u.centerX,y:u.centerY}))&&h.placeMonsters(1,!0,c):h.blockPath(1,c,!0)===0&&h.placeMonsters(1,!0,c);const y=xe.randInt(a.eliteRoom.monsters[0],a.eliteRoom.monsters[1]);if(m==="throne"){const S=h.pickMonsterId(c);let R=0;if(S)for(const _ of[-1,1]){if(R>=y)break;(h.placeMonsterAt(S,!1,{x:b.x+_,y:b.y})||h.placeMonsterAt(S,!1,{x:b.x,y:b.y+_}))&&R++}R<y&&h.placeMonsters(y-R,!1,c)}else h.placeMonsters(y,!1,c);const w=h.placeCornerChests(xe.randInt(a.eliteRoom.chests[0],a.eliteRoom.chests[1]),!0);for(const S of w)h.guardAround(S.x,S.y,1,c,!1,1);h.placePotions(xe.randInt(a.eliteRoom.potions[0],a.eliteRoom.potions[1]));break}case"boss":{h.put({kind:"carpet",x:u.centerX,y:u.centerY}),h.put({kind:"boss",monsterId:"ancient_dragon",x:u.centerX,y:u.centerY}),h.guardAround(u.centerX,u.centerY,xe.randInt(a.bossRoom.elites[0],a.bossRoom.elites[1]),c,!0,2),h.placeCornerChests(xe.randInt(a.bossRoom.chests[0],a.bossRoom.chests[1])),h.placePotions(xe.randInt(a.bossRoom.potions[0],a.bossRoom.potions[1]));break}}if(h.placeRoomTorches(),u.type!=="witch"&&h.placePillars(),!(u.type==="end"&&(s==="initial"||s==="boss"))){const f=h.validate(u.type,c);f.length>0&&console.warn(`[ContentFiller] 房间 ${u.id}(${u.type}) 内容验证未通过：${f.join("、")}`)}}const d=U.mapGen.decor.torchCorridorEvery;for(const u of t)u.tiles.forEach((h,f)=>{if(f%d!==Math.floor(d/2))return;const p=n[h.y-1]?.[h.x]===1?{x:h.x,y:h.y-1}:n[h.y+1]?.[h.x]===1?{x:h.x,y:h.y+1}:null;p&&!this.entityAt(e,p.x,p.y)&&e.find(m=>m.id===u.fromRoomId)?.entities.push({id:Xt.next("ent"),kind:"torch",x:p.x,y:p.y})})}densityCap(e){const t=U.mapGen.content,n=(e.width-2)*(e.height-2);return n<=t.smallAreaMax?t.density.small:n<=t.mediumAreaMax?t.density.medium:t.density.large}entityAt(e,t,n){return e.some(i=>i.entities.some(s=>s.x===t&&s.y===n))}};C(Ui,"instance");let Ao=Ui;const Gu=500,Ni=class Ni{constructor(){}static getInstance(){return Ni.instance||(Ni.instance=new Ni),Ni.instance}validate(e,t,n){const i=[],s=this.buildAdjacency(e,t),a=e[0],o=e[e.length-1],l=this.bfs(a.id,s);for(const d of e)(s.get(d.id)??[]).length===0&&i.push(`房间${d.id}无连接（孤立）`),l.has(d.id)||i.push(`房间${d.id}不可从起点到达`);let c=[];if(n){if(c=this.enumeratePaths(a.id,o.id,s),c.length<2)i.push(`起点到终点仅${c.length}条路径（要求≥2）`);else{let u=!1;for(let h=0;h<c.length&&!u;h++)for(let f=h+1;f<c.length&&!u;f++)Math.abs(c[h]-c[f])<=U.mapGen.path.maxLengthDiff&&(u=!0);u||i.push(`路径长度差均>${U.mapGen.path.maxLengthDiff}：[${c.join(",")}]`)}e.some(u=>(u.onPathA||u.onPathB)&&(u.type==="combat"||u.type==="elite"))||i.push("主干上没有战斗房间")}return{pass:i.length===0,errors:i,pathLengths:c}}bfs(e,t){const n=new Map([[e,0]]),i=[e];for(;i.length>0;){const s=i.shift(),a=n.get(s);for(const o of t.get(s)??[])n.has(o)||(n.set(o,a+1),i.push(o))}return n}enumeratePaths(e,t,n){const i=[],s=new Set([e]),a=(o,l)=>{if(o===t)return i.push(l),i.length>=Gu;for(const c of n.get(o)??[]){if(s.has(c))continue;s.add(c);const d=a(c,l+1);if(s.delete(c),d)return!0}return!1};return a(e,1),i}buildAdjacency(e,t){const n=new Map(e.map(i=>[i.id,[]]));for(const i of t)n.get(i.from)?.push(i.to),n.get(i.to)?.push(i.from);return n}};C(Ni,"instance");let Ro=Ni;const Oi=class Oi{constructor(){C(this,"lastAttempts",1)}static getInstance(){return Oi.instance||(Oi.instance=new Oi),Oi.instance}generate(e){const t=U.mapGen.generation.maxAttempts;let n=[];for(let i=1;i<=t;i++){try{const s=this.tryGenerate(e);if(s)return this.lastAttempts=i,s}catch(s){n=[String(s)]}(i===5||i===20)&&Ft.warn(`[MapGen] 楼层${e} 第${i}次尝试失败：${n.join("; ")||"拓扑验证未通过"}`)}throw new Error(`楼层${e}生成失败（${t}次尝试）：${n.join("; ")}`)}tryGenerate(e){const t=So.getInstance(),n=Eo.getInstance(),i=wo.getInstance(),s=To.getInstance(),a=Ao.getInstance(),o=Ro.getInstance(),l=t.allocate(e),c=n.plan(l);if(!n.validateDiff(c))return null;const d=i.place(e,c);if(!d)return null;const u=d.rooms,h=d.grid,f=s.connect(u,h),p=f.connections,v=new Map(u.map(E=>[E.id,[]]));for(const E of p)v.get(E.from)?.push(E.to),v.get(E.to)?.push(E.from);const m=o.bfs(u[0].id,v);for(const E of u)E.depth=m.get(E.id)??0;const g=o.validate(u,p,l.kind==="normal");if(!g.pass){if(l.kind==="normal")return null;throw new Error(`特殊层校验失败: ${g.errors.join("; ")}`)}a.fill(u,f.corridors,h,e,l.kind);const b=u[0];return{floorId:e,kind:l.kind,rooms:u,corridors:f.corridors,connections:p,grid:h,width:h[0].length,height:h.length,entryX:b.centerX,entryY:b.centerY}}describe(e){const t=[];t.push(`=== 楼层 ${e.floorId}（${e.kind}） ${e.rooms.length}个房间 ${e.corridors.length}条走廊 ===`);for(const n of this.roomsSorted(e)){const i=n.onPathA?"A":n.onPathB?"B":n.mountedOn?"侧室":"-";t.push(`#${n.order} ${n.type.padEnd(8,"　")} 网格(${n.gx},${n.gy}) 世界(${n.x},${n.y}) ${n.width}x${n.height} 深${n.depth} 路径${i} 来源${n.fromDirection??"根"} 门${n.doors.length} 实体${n.entities.length}`)}return t.push(`入口: (${e.entryX},${e.entryY}) 路径数: 见验证器`),t.join(`
`)}roomsSorted(e){return[...e.rooms].sort((t,n)=>t.order-n.order)}};C(Oi,"instance");let fr=Oi;const ki=class ki{constructor(){}static getInstance(){return ki.instance||(ki.instance=new ki),ki.instance}enterFloor(e,t=!0){const n=Ee.getInstance(),i=n.state.currentFloor,s=fr.getInstance().generate(e);Ge.getInstance().loadFloor(s),n.state.currentFloor=e,n.state.x=s.entryX,n.state.y=s.entryY;const a=Ge.getInstance().getRoomAt(s.entryX,s.entryY);return n.state.currentRoomId=a?.id??s.rooms[0].id,X.emit("floorChanged",{fromFloor:i,toFloor:e}),t||Ft.debug(`[Floor] 直接载入楼层${e}`),s}restoreFloor(e){const t=Ee.getInstance();Ge.getInstance().loadFloor(e),t.state.currentFloor=e.floorId;const n=Ge.getInstance().getRoomAt(t.state.x,t.state.y);t.state.currentRoomId=n?.id??e.rooms[0].id}enterPrefabFloor(e){const t=Ee.getInstance(),n=t.state.currentFloor;Ge.getInstance().loadFloor(e),t.state.currentFloor=e.floorId,t.state.x=e.entryX,t.state.y=e.entryY;const i=Ge.getInstance().getRoomAt(e.entryX,e.entryY);return t.state.currentRoomId=i?.id??e.rooms[0].id,X.emit("floorChanged",{fromFloor:n,toFloor:e.floorId}),Ft.debug(`[Floor] 载入预制楼层${e.floorId}`),e}};C(ki,"instance");let pi=ki;const lc={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6},Bi=class Bi{constructor(){}static getInstance(){return Bi.instance||(Bi.instance=new Bi),Bi.instance}rollQuality(e){const t=U.equipment.qualityByFloor,n=t.find(s=>e>=s.minFloor&&e<=s.maxFloor)??t[t.length-1],i=Object.entries(n.weights);return xe.pickWeighted(i,([,s])=>s)[0]}rollEquipLevel(e,t){const n=U.equipment.equipLevelFormula,i=Math.floor(e*n.playerLevelFactor+t*n.floorFactor+xe.randInt(n.randomMin,n.randomMax));return Math.max(n.min,Math.min(n.max,i))}generate(e,t={}){const n=Ee.getInstance(),i=t.floorId??n.state.currentFloor,s=t.forcedQuality??this.rollQuality(i),a=t.slot??(xe.chance(.5)?"weapon":"armor"),o=this.rollEquipLevel(n.state.level,i),l=this.rollBaseValue(a,s,o),c=a==="weapon"?l:0,d=a==="armor"?l:0,u=this.rollAffixes(s,o),h=U.equipment.quality[s],f=this.baseName(a,o),p=this.buildName(h.prefix,f,u),v=Math.round(h.basePrice*(1+o*.05)*(1+u.length*.15)),m=U.equipment.buyPriceRule,g=Math.max(m.min,Math.min(m.max,Math.round(v*m.sellMultiplier)));return{id:Xt.equipmentId(),slot:a,baseName:f,name:p,level:o,quality:s,affixes:u,attack:c,defense:d,sellPrice:v,buyPrice:g,source:e}}tutorialWeapon(){return this.generate("tutorial",{forcedQuality:"poor",slot:"weapon",floorId:1})}reforge(e){return this.rebuild(e,{affixes:this.rollAffixes(e.quality,e.level)})}upgradeLevel(e){if(e.level>=50)return null;const t=e.level+1;return this.rebuild(e,{level:t,value:this.rollBaseValue(e.slot,e.quality,t),affixes:this.rollAffixes(e.quality,t)})}upgradeQuality(e){const t=U.equipment.qualityOrder,n=t.indexOf(e.quality),i=t[n+1];return!i||n+1>t.indexOf("epic")?null:this.rebuild(e,{quality:i,value:this.rollBaseValue(e.slot,i,e.level),affixes:this.rollAffixes(i,e.level)})}rebuild(e,t){const n=t.quality??e.quality,i=t.level??e.level,s=t.value??(e.slot==="weapon"?e.attack:e.defense),a=t.affixes??e.affixes,o=U.equipment.quality[n],l=this.buildName(o.prefix,e.baseName,a),c=Math.round(o.basePrice*(1+i*.05)*(1+a.length*.15)),d=U.equipment.buyPriceRule,u=Math.max(d.min,Math.min(d.max,Math.round(c*d.sellMultiplier)));return{...e,name:l,level:i,quality:n,affixes:a,attack:e.slot==="weapon"?s:0,defense:e.slot==="armor"?s:0,sellPrice:c,buyPrice:u}}rollBaseValue(e,t,n){const i=e==="weapon"?U.equipment.weaponTable:U.equipment.armorTable,a=(i.find(d=>n>=d.minEquipLevel&&n<=d.maxEquipLevel)??i[i.length-1]).values;let o=a[t]??null;if(!o&&t==="mythic"){const d=a.legendary;if(d){const u=U.equipment.mythicFromLegendary;o=[Math.round(d[0]*u),Math.round(d[1]*u)]}}const l=U.equipment.qualityOrder;let c=l.indexOf(t);for(;!o&&c>0;)c-=1,o=a[l[c]]??null;return o||(o=[1,2]),xe.randInt(o[0],o[1])}rollAffixes(e,t){const n=U.equipment.quality[e];let i=n.affixCount;if(n.affixExtra)for(const o of n.affixExtra)t>=o.atEquipLevel&&(i+=o.add);i=Math.min(i,n.affixCountMax),e==="mythic"&&(i=U.equipment.affixSpecial.mythicAffixCount);const s=U.equipment.affixes.filter(o=>lc[e]>=lc[o.minQuality]);return s.length===0?[]:xe.shuffle(s).slice(0,i).map(o=>{const l=o.bands.find(d=>t<=d.maxEquipLevel)??o.bands[o.bands.length-1],c=xe.randInt(l.min,l.max);return{type:o.type,name:o.name,value:c,isPercent:o.isPercent}})}baseName(e,t){const n=e==="weapon"?U.equipment.baseNames.weapon:U.equipment.baseNames.armor;return(n.find(s=>t>=s.minEquipLevel&&t<=s.maxEquipLevel)??n[n.length-1]).names[0]}buildName(e,t,n){let i=e?`${e}${t}`:t;for(const s of n)i+=`·${s.name}`;return i}};C(Bi,"instance");let Un=Bi;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="185",Hu=0,cc=1,Vu=2,aa=1,wh=2,hr=3,mi=0,Zt=1,Pn=2,Dn=0,Os=1,Wn=2,hc=3,dc=4,Wu=5,Si=100,qu=101,$u=102,Xu=103,Yu=104,Ku=200,Zu=201,Ju=202,Qu=203,Co=204,Po=205,ju=206,ef=207,tf=208,nf=209,sf=210,rf=211,af=212,of=213,lf=214,Io=0,Lo=1,Do=2,zs=3,Fo=4,Uo=5,No=6,Oo=7,Th=0,cf=1,hf=2,Fn=0,Tl=1,Al=2,Rl=3,Ta=4,Cl=5,Pl=6,Il=7,Ah=300,ls=301,Gs=302,Ua=303,Na=304,Aa=306,pr=1e3,$n=1001,ko=1002,It=1003,df=1004,Tr=1005,Gt=1006,Oa=1007,di=1008,nn=1009,Rh=1010,Ch=1011,mr=1012,Ll=1013,Nn=1014,xn=1015,sn=1016,Dl=1017,Fl=1018,gr=1020,Ph=35902,Ih=35899,Lh=1021,Dh=1022,_n=1023,Zn=1026,ss=1027,Ul=1028,Nl=1029,cs=1030,Ol=1031,kl=1033,oa=33776,la=33777,ca=33778,ha=33779,Bo=35840,zo=35841,Go=35842,Ho=35843,Vo=36196,Wo=37492,qo=37496,$o=37488,Xo=37489,pa=37490,Yo=37491,Ko=37808,Zo=37809,Jo=37810,Qo=37811,jo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,cl=36492,hl=36494,dl=36495,ul=36283,fl=36284,ma=36285,pl=36286,uf=3200,ml=0,ff=1,hi="",Pt="srgb",ga="srgb-linear",va="linear",et="srgb",gs=7680,uc=519,pf=512,mf=513,gf=514,Bl=515,vf=516,xf=517,zl=518,_f=519,gl=35044,fc="300 es",Ln=2e3,vr=2001;function yf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mf(){const r=xa("canvas");return r.style.display="block",r}const pc={};function _a(...r){const e="THREE."+r.shift();console.log(e,...r)}function Fh(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function De(...r){r=Fh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=Fh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ks(...r){const e=r.join(" ");e in pc||(pc[e]=!0,De(...r))}function bf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Sf={[Io]:Lo,[Do]:No,[Fo]:Oo,[zs]:Uo,[Lo]:Io,[No]:Do,[Oo]:Fo,[Uo]:zs};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ka=Math.PI/180,vl=180/Math.PI;function fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function Ef(r,e){return(r%e+e)%e}function Ba(r,e,t){return(1-t)*r+t*e}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yl=class Yl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yl.prototype.isVector2=!0;let Ce=Yl;class Ys{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3],h=s[a+0],f=s[a+1],p=s[a+2],v=s[a+3];if(u!==v||l!==h||c!==f||d!==p){let m=l*h+c*f+d*p+u*v;m<0&&(h=-h,f=-f,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){const b=Math.acos(m),E=Math.sin(b);g=Math.sin(g*b)/E,o=Math.sin(o*b)/E,l=l*g+h*o,c=c*g+f*o,d=d*g+p*o,u=u*g+v*o}else{l=l*g+h*o,c=c*g+f*o,d=d*g+p*o,u=u*g+v*o;const b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=s[a],h=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+d*u+l*f-c*h,e[t+1]=l*p+d*h+c*u-o*f,e[t+2]=c*p+d*f+o*h-l*u,e[t+3]=d*p-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),u=o(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-s*l,this._y=i*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kl=class Kl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-s*u,this.z=i+l*u+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kl.prototype.isVector3=!0;let N=Kl;const za=new N,mc=new Ys,Zl=class Zl{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],b=i[1],E=i[4],y=i[7],w=i[2],S=i[5],R=i[8];return s[0]=a*v+o*b+l*w,s[3]=a*m+o*E+l*S,s[6]=a*g+o*y+l*R,s[1]=c*v+d*b+u*w,s[4]=c*m+d*E+u*S,s[7]=c*g+d*y+u*R,s[2]=h*v+f*b+p*w,s[5]=h*m+f*E+p*S,s[8]=h*g+f*y+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*s*d+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*s,f=c*s-a*l,p=t*u+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-d*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(d*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zl.prototype.isMatrix3=!0;let Ne=Zl;const Ga=new Ne,gc=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const r={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?va:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ga]:{primaries:e,whitePoint:n,transfer:va,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:gc,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),r}const $e=wf();function Xn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class Tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=xa("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class Gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ha(i[a].image)):s.push(Ha(i[a]))}else s=Ha(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ha(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Rf=0;const Va=new N;class Ht extends ds{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=$n,i=$n,s=Gt,a=di,o=_n,l=nn,c=Ht.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=fi(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Ah;Ht.DEFAULT_ANISOTROPY=1;const Jl=class Jl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(f+1)/2,w=(g+1)/2,S=(d+h)/4,R=(u+v)/4,_=(p+m)/4;return E>y&&E>w?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=S/n,s=R/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=_/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=R/s,i=_/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(u-v)/b,this.z=(h-d)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jl.prototype.isVector4=!0;let ft=Jl;class Cf extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Ht(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Gl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jt extends Cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uh extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wa=class wa{constructor(e,t,n,i,s,a,o,l,c,d,u,h,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,d,u,h,f,p,v,m)}set(e,t,n,i,s,a,o,l,c,d,u,h,f,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,f=a*u,p=o*d,v=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,p=c*d,v=c*u;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,p=c*d,v=c*u;t[0]=h-v*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*d,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,f=a*u,p=o*d,v=o*u;t[0]=l*d,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*d,t[4]=v-h*u,t[8]=p*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+p,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Lf)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ei.crossVectors(n,jt),ei.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ei.crossVectors(n,jt)),ei.normalize(),Ar.crossVectors(jt,ei),i[0]=ei.x,i[4]=Ar.x,i[8]=jt.x,i[1]=ei.y,i[5]=Ar.y,i[9]=jt.y,i[2]=ei.z,i[6]=Ar.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],b=n[3],E=n[7],y=n[11],w=n[15],S=i[0],R=i[4],_=i[8],A=i[12],L=i[1],P=i[5],O=i[9],Y=i[13],Q=i[2],B=i[6],K=i[10],V=i[14],ee=i[3],ne=i[7],fe=i[11],ve=i[15];return s[0]=a*S+o*L+l*Q+c*ee,s[4]=a*R+o*P+l*B+c*ne,s[8]=a*_+o*O+l*K+c*fe,s[12]=a*A+o*Y+l*V+c*ve,s[1]=d*S+u*L+h*Q+f*ee,s[5]=d*R+u*P+h*B+f*ne,s[9]=d*_+u*O+h*K+f*fe,s[13]=d*A+u*Y+h*V+f*ve,s[2]=p*S+v*L+m*Q+g*ee,s[6]=p*R+v*P+m*B+g*ne,s[10]=p*_+v*O+m*K+g*fe,s[14]=p*A+v*Y+m*V+g*ve,s[3]=b*S+E*L+y*Q+w*ee,s[7]=b*R+E*P+y*B+w*ne,s[11]=b*_+E*O+y*K+w*fe,s[15]=b*A+E*Y+y*V+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],b=l*f-c*h,E=o*f-c*u,y=o*h-l*u,w=a*f-c*d,S=a*h-l*d,R=a*u-o*d;return t*(v*b-m*E+g*y)-n*(p*b-m*w+g*S)+i*(p*E-v*w+g*R)-s*(p*y-v*S+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(s*d-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],b=t*o-n*a,E=t*l-i*a,y=t*c-s*a,w=n*l-i*o,S=n*c-s*o,R=i*c-s*l,_=d*v-u*p,A=d*m-h*p,L=d*g-f*p,P=u*m-h*v,O=u*g-f*v,Y=h*g-f*m,Q=b*Y-E*O+y*P+w*L-S*A+R*_;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Q;return e[0]=(o*Y-l*O+c*P)*B,e[1]=(i*O-n*Y-s*P)*B,e[2]=(v*R-m*S+g*w)*B,e[3]=(h*S-u*R-f*w)*B,e[4]=(l*L-a*Y-c*A)*B,e[5]=(t*Y-i*L+s*A)*B,e[6]=(m*y-p*R-g*E)*B,e[7]=(d*R-h*y+f*E)*B,e[8]=(a*O-o*L+c*_)*B,e[9]=(n*L-t*O-s*_)*B,e[10]=(p*S-v*y+g*b)*B,e[11]=(u*y-d*S-f*b)*B,e[12]=(o*A-a*P-l*_)*B,e[13]=(t*P-n*A+i*_)*B,e[14]=(v*E-p*w-m*b)*B,e[15]=(d*w-u*E+h*b)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,d=a+a,u=o+o,h=s*c,f=s*d,p=s*u,v=a*d,m=a*u,g=o*u,b=l*c,E=l*d,y=l*u,w=n.x,S=n.y,R=n.z;return i[0]=(1-(v+g))*w,i[1]=(f+y)*w,i[2]=(p-E)*w,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(h+g))*S,i[6]=(m+b)*S,i[7]=0,i[8]=(p+E)*R,i[9]=(m-b)*R,i[10]=(1-(h+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(i[0],i[1],i[2]).length();const o=xs.set(i[4],i[5],i[6]).length(),l=xs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),fn.copy(this);const c=1/a,d=1/o,u=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=d,fn.elements[5]*=d,fn.elements[6]*=d,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ln,l=!1){const c=this.elements,d=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,v;if(l)p=s/(a-s),v=a*s/(a-s);else if(o===Ln)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===vr)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ln,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,v;if(l)p=1/(a-s),v=a/(a-s);else if(o===Ln)p=-2/(a-s),v=-(a+s)/(a-s);else if(o===vr)p=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wa.prototype.isMatrix4=!0;let st=wa;const xs=new N,fn=new st,If=new N(0,0,0),Lf=new N(1,1,1),ei=new N,Ar=new N,jt=new N,xc=new st,_c=new Ys;class gi{constructor(e=0,t=0,n=0,i=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _c.setFromEuler(this),this.setFromQuaternion(_c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const yc=new N,_s=new Ys,kn=new st,Rr=new N,Qs=new N,Ff=new N,Uf=new Ys,Mc=new N(1,0,0),bc=new N(0,1,0),Sc=new N(0,0,1),Ec={type:"added"},Nf={type:"removed"},ys={type:"childadded",child:null},Wa={type:"childremoved",child:null};class pt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new N,t=new gi,n=new Ys,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new Ne}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Sc,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Qs,Rr,this.up):kn.lookAt(Rr,Qs,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(kn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),ys.child=e,this.dispatchEvent(ys),ys.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Of={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function $a(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Ef(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$a(a,s,e+1/3),this.g=$a(a,s,e),this.b=$a(a,s,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Nh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return $e.workingToColorSpace(kt.copy(this),e),Math.round(Ye(kt.r*255,0,255))*65536+Math.round(Ye(kt.g*255,0,255))*256+Math.round(Ye(kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Pt){$e.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Cr);const n=Ba(ti.h,Cr.h,t),i=Ba(ti.s,Cr.s,t),s=Ba(ti.l,Cr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Oe;Oe.NAMES=Nh;class kf extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new N,Bn=new N,Xa=new N,zn=new N,Ms=new N,bs=new N,wc=new N,Ya=new N,Ka=new N,Za=new N,Ja=new ft,Qa=new ft,ja=new ft;class dn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),Bn.subVectors(n,t),Xa.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Bn),l=pn.dot(Xa),c=Bn.dot(Bn),d=Bn.dot(Xa),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,p=(a*d-o*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ja.setScalar(0),Qa.setScalar(0),ja.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ja,s.x),a.addScaledVector(Qa,s.y),a.addScaledVector(ja,s.z),a}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Bn.subVectors(e,t),pn.cross(Bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),pn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ms.subVectors(i,n),bs.subVectors(s,n),Ya.subVectors(e,n);const l=Ms.dot(Ya),c=bs.dot(Ya);if(l<=0&&c<=0)return t.copy(n);Ka.subVectors(e,i);const d=Ms.dot(Ka),u=bs.dot(Ka);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ms,a);Za.subVectors(e,s);const f=Ms.dot(Za),p=bs.dot(Za);if(p>=0&&f<=p)return t.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(bs,o);const m=d*p-f*u;if(m<=0&&u-d>=0&&f-p>=0)return wc.subVectors(s,i),o=(u-d)/(u-d+(f-p)),t.copy(i).addScaledVector(wc,o);const g=1/(m+v+h);return a=v*g,o=h*g,t.copy(n).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class us{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Ir.subVectors(this.max,js),Ss.subVectors(e.a,js),Es.subVectors(e.b,js),ws.subVectors(e.c,js),ni.subVectors(Es,Ss),ii.subVectors(ws,Es),_i.subVectors(Ss,ws);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!eo(t,Ss,Es,ws,Ir)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,Ss,Es,ws,Ir))?!1:(Lr.crossVectors(ni,ii),t=[Lr.x,Lr.y,Lr.z],eo(t,Ss,Es,ws,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new N,new N,new N,new N,new N,new N,new N,new N],mn=new N,Pr=new us,Ss=new N,Es=new N,ws=new N,ni=new N,ii=new N,_i=new N,js=new N,Ir=new N,Lr=new N,yi=new N;function eo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){yi.fromArray(r,s);const o=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),d=n.dot(yi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Et=new N,Dr=new Ce;let Bf=0;class qt extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Oh extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kh extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const zf=new us,er=new N,to=new N;class Ks{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(to)),this.expandByPoint(er.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gf=0;const an=new st,no=new pt,Ts=new N,en=new us,tr=new us,Ct=new N;class Lt extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yf(e)?kh:Oh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(en.min,tr.min),en.expandByPoint(Ct),Ct.addVectors(en.max,tr.max),en.expandByPoint(Ct)):(en.expandByPoint(tr.min),en.expandByPoint(tr.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ct.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),Ct.add(Ts)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new N,l[_]=new N;const c=new N,d=new N,u=new N,h=new Ce,f=new Ce,p=new Ce,v=new N,m=new N;function g(_,A,L){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,L),h.fromBufferAttribute(s,_),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,L),d.sub(c),u.sub(c),f.sub(h),p.sub(h);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(P),o[_].add(v),o[A].add(v),o[L].add(v),l[_].add(m),l[A].add(m),l[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,A=b.length;_<A;++_){const L=b[_],P=L.start,O=L.count;for(let Y=P,Q=P+O;Y<Q;Y+=3)g(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const E=new N,y=new N,w=new N,S=new N;function R(_){w.fromBufferAttribute(i,_),S.copy(w);const A=o[_];E.copy(A),E.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(S,A);const P=y.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,P)}for(let _=0,A=b.length;_<A;++_){const L=b[_],P=L.start,O=L.count;for(let Y=P,Q=P+O;Y<Q;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,d=new N,u=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*d;for(let g=0;g<d;g++)h[p++]=c[f++]}return new qt(h,d,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new N;class ya{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ya(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Vf=0;class fs extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Os,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const nr=new N,Rs=new N,Cs=new N,Ps=new Ce,ir=new Ce,Bh=new st,Fr=new N,sr=new N,Ur=new N,Tc=new Ce,io=new Ce,Ac=new Ce;class qn extends pt{constructor(e=new Rn){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hf(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new ya(n,3,0,!1)),As.setAttribute("uv",new ya(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new Ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Nr(Fr.set(-.5,-.5,0),Cs,a,Rs,i,s),Nr(sr.set(.5,-.5,0),Cs,a,Rs,i,s),Nr(Ur.set(.5,.5,0),Cs,a,Rs,i,s),Tc.set(0,0),io.set(1,0),Ac.set(1,1);let o=e.ray.intersectTriangle(Fr,sr,Ur,!1,nr);if(o===null&&(Nr(sr.set(-.5,.5,0),Cs,a,Rs,i,s),io.set(0,1),o=e.ray.intersectTriangle(Fr,Ur,sr,!1,nr),o===null))return;const l=e.ray.origin.distanceTo(nr);l<e.near||l>e.far||t.push({distance:l,point:nr.clone(),uv:dn.getInterpolation(nr,Fr,sr,Ur,Tc,io,Ac,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Nr(r,e,t,n,i,s){Ps.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ir.x=s*Ps.x-i*Ps.y,ir.y=i*Ps.x+s*Ps.y):ir.copy(Ps),r.copy(e),r.x+=ir.x,r.y+=ir.y,r.applyMatrix4(Bh)}const Hn=new N,so=new N,Or=new N,si=new N,ro=new N,kr=new N,ao=new N;class Vl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){so.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),si.copy(this.origin).sub(so);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Or),o=si.dot(this.direction),l=-si.dot(Or),c=si.lengthSq(),d=Math.abs(1-a*a);let u,h,f,p;if(d>0)if(u=a*l-o,h=a*o-l,p=s*d,u>=0)if(h>=-p)if(h<=p){const v=1/d;u*=v,h*=v,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(so).addScaledVector(Or,h),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,s){ro.subVectors(t,e),kr.subVectors(n,e),ao.crossVectors(ro,kr);let a=this.direction.dot(ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(kr.crossVectors(si,kr));if(l<0)return null;const c=o*this.direction.dot(ro.cross(si));if(c<0||l+c>a)return null;const d=-o*si.dot(ao);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rs extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rc=new st,Mi=new Vl,Br=new Ks,Cc=new N,zr=new N,Gr=new N,Hr=new N,oo=new N,Vr=new N,Pc=new N,Wr=new N;class Ue extends pt{constructor(e=new Lt,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(oo.fromBufferAttribute(u,e),a?Vr.addScaledVector(oo,d):Vr.addScaledVector(oo.sub(t),d))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(Br.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Br,Cc)===null||Mi.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Rc.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Rc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,w=E;y<w;y+=3){const S=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);i=qr(this,g,e,n,c,d,u,S,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const b=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);i=qr(this,a,e,n,c,d,u,b,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,w=E;y<w;y+=3){const S=y,R=y+1,_=y+2;i=qr(this,g,e,n,c,d,u,S,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const b=m,E=m+1,y=m+2;i=qr(this,a,e,n,c,d,u,b,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Wf(r,e,t,n,i,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===mi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:r}}function qr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,zr),r.getVertexPosition(l,Gr),r.getVertexPosition(c,Hr);const d=Wf(r,e,t,n,zr,Gr,Hr,Pc);if(d){const u=new N;dn.getBarycoord(Pc,zr,Gr,Hr,u),i&&(d.uv=dn.getInterpolatedAttribute(i,o,l,c,u,new Ce)),s&&(d.uv1=dn.getInterpolatedAttribute(s,o,l,c,u,new Ce)),a&&(d.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};dn.getNormal(zr,Gr,Hr,h.normal),d.face=h,d.barycoord=u}return d}class zh extends Ht{constructor(e=null,t=1,n=1,i,s,a,o,l,c=It,d=It,u,h){super(null,a,o,l,c,d,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ic extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new st,Lc=new st,$r=[],Dc=new us,qf=new st,rr=new Ue,ar=new Ks;class or extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new us),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Dc.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ks),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),ar.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Is),Lc.multiplyMatrices(n,Is),rr.matrixWorld=Lc,rr.raycast(e,$r);for(let a=0,o=$r.length;a<o;a++){const l=$r[a];l.instanceId=s,l.object=this,t.push(l)}$r.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zh(new Float32Array(i*this.count),i,this.count,Ul,xn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lo=new N,$f=new N,Xf=new Ne;class ai{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lo.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(lo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xf.getNormalMatrix(e),i=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Ks,Yf=new Ce(.5,.5),Xr=new N;class Wl{constructor(e=new ai,t=new ai,n=new ai,i=new ai,s=new ai,a=new ai){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],p=s[8],v=s[9],m=s[10],g=s[11],b=s[12],E=s[13],y=s[14],w=s[15];if(i[0].setComponents(c-a,f-d,g-p,w-b).normalize(),i[1].setComponents(c+a,f+d,g+p,w+b).normalize(),i[2].setComponents(c+o,f+u,g+v,w+E).normalize(),i[3].setComponents(c-o,f-u,g-v,w-E).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,g-m,w-y).normalize();else if(i[4].setComponents(c-l,f-h,g-m,w-y).normalize(),t===Ln)i[5].setComponents(c+l,f+h,g+m,w+y).normalize();else if(t===vr)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Yf.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xr.x=i.normal.x>0?e.max.x:e.min.x,Xr.y=i.normal.y>0?e.max.y:e.min.y,Xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kf extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fc=new st,xl=new Vl,Yr=new Ks,Kr=new N;class Zf extends pt{constructor(e=new Lt,t=new Kf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;Fc.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Fc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,v=f;p<v;p++){const m=c.getX(p);Kr.fromBufferAttribute(u,m),Uc(Kr,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=h,v=f;p<v;p++)Kr.fromBufferAttribute(u,p),Uc(Kr,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uc(r,e,t,n,i,s,a){const o=xl.distanceSqToPoint(r);if(o<t){const l=new N;xl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gh extends Ht{constructor(e=[],t=ls,n,i,s,a,o,l,c,d){super(e,t,n,i,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sr extends Ht{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends Ht{constructor(e,t,n=Nn,i,s,a,o=It,l=It,c,d=Zn,u=1){if(d!==Zn&&d!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jf extends Hs{constructor(e,t=Nn,n=ls,i,s,a=It,o=It,l,c=Zn){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hh extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ht extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function p(v,m,g,b,E,y,w,S,R,_,A){const L=y/R,P=w/_,O=y/2,Y=w/2,Q=S/2,B=R+1,K=_+1;let V=0,ee=0;const ne=new N;for(let fe=0;fe<K;fe++){const ve=fe*P-Y;for(let Me=0;Me<B;Me++){const Je=Me*L-O;ne[v]=Je*b,ne[m]=ve*E,ne[g]=Q,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[g]=S>0?1:-1,d.push(ne.x,ne.y,ne.z),u.push(Me/R),u.push(1-fe/_),V+=1}}for(let fe=0;fe<_;fe++)for(let ve=0;ve<R;ve++){const Me=h+ve+B*fe,Je=h+ve+B*(fe+1),mt=h+(ve+1)+B*(fe+1),Qe=h+(ve+1)+B*fe;l.push(Me,Je,Qe),l.push(Je,mt,Qe),ee+=6}o.addGroup(f,ee,A),f+=ee,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ma extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,d=new Ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oi extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const d=[],u=[],h=[],f=[];let p=0;const v=[],m=n/2;let g=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function b(){const y=new N,w=new N;let S=0;const R=(t-e)/n;for(let _=0;_<=s;_++){const A=[],L=_/s,P=L*(t-e)+e;for(let O=0;O<=i;O++){const Y=O/i,Q=Y*l+o,B=Math.sin(Q),K=Math.cos(Q);w.x=P*B,w.y=-L*n+m,w.z=P*K,u.push(w.x,w.y,w.z),y.set(B,R,K).normalize(),h.push(y.x,y.y,y.z),f.push(Y,1-L),A.push(p++)}v.push(A)}for(let _=0;_<i;_++)for(let A=0;A<s;A++){const L=v[A][_],P=v[A+1][_],O=v[A+1][_+1],Y=v[A][_+1];(e>0||A!==0)&&(d.push(L,P,Y),S+=3),(t>0||A!==s-1)&&(d.push(P,O,Y),S+=3)}c.addGroup(g,S,0),g+=S}function E(y){const w=p,S=new Ce,R=new N;let _=0;const A=y===!0?e:t,L=y===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*L,0),h.push(0,L,0),f.push(.5,.5),p++;const P=p;for(let O=0;O<=i;O++){const Q=O/i*l+o,B=Math.cos(Q),K=Math.sin(Q);R.x=A*K,R.y=m*L,R.z=A*B,u.push(R.x,R.y,R.z),h.push(0,L,0),S.x=B*.5+.5,S.y=K*.5*L+.5,f.push(S.x,S.y),p++}for(let O=0;O<i;O++){const Y=w+O,Q=P+O;y===!0?d.push(Q,Q+1,Y):d.push(Q+1,Q,Y),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class as extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,u=e/o,h=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<d;g++){const b=g*h-a;for(let E=0;E<c;E++){const y=E*u-s;p.push(y,-b,0),v.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const E=b+c*g,y=b+c*(g+1),w=b+1+c*(g+1),S=b+1+c*g;f.push(E,y,S),f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Lt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/i,f=new N,p=new Ce;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const g=s+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,d.push(p.x,p.y)}u+=h}for(let v=0;v<i;v++){const m=v*(n+1);for(let g=0;g<n;g++){const b=g+m,E=b,y=b+n+1,w=b+n+2,S=b+1;o.push(E,y,S),o.push(y,w,S)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ur extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new N,h=new N,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const b=[],E=g/n,y=a+E*o,w=e*Math.cos(y),S=Math.sqrt(e*e-w*w);let R=0;g===0&&a===0?R=.5/t:g===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const A=_/t,L=i+A*s;u.x=-S*Math.cos(L),u.y=w,u.z=S*Math.sin(L),p.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(A+R,1-E),b.push(c++)}d.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){const E=d[g][b+1],y=d[g][b],w=d[g+1][b],S=d[g+1][b+1];(g!==0||a>0)&&f.push(E,y,S),(g!==n-1||l<Math.PI)&&f.push(y,w,S)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ba extends Lt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],d=[],u=[],h=new N,f=new N,p=new N;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let g=0;g<=i;g++){const b=g/i*s;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),p.subVectors(f,h).normalize(),d.push(p.x,p.y,p.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,b=(i+1)*(v-1)+m-1,E=(i+1)*(v-1)+m,y=(i+1)*v+m;l.push(g,b,y),l.push(b,E,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Vs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Nc(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Nc(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=Vs(r[t]);for(const i in n)e[i]=n[i]}return e}function Nc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Qf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const xr={clone:Vs,merge:Wt};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new st().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Wh extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ut extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tp extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class np extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $l extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ip extends $l{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const co=new st,Oc=new N,kc=new N;class qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kc),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zr=new N,Jr=new Ys,En=new N;class $h extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Jr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,En.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zr,Jr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new N,Bc=new Ce,zc=new Ce;class tn extends $h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sp extends qh{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class ho extends $l{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ra extends $h{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rp extends qh{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new rp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ls=-90,Ds=1;class op extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Ls,Ds,e,t);i.layers=this.layers,this.add(i);const s=new tn(Ls,Ds,e,t);s.layers=this.layers,this.add(s);const a=new tn(Ls,Ds,e,t);a.layers=this.layers,this.add(a);const o=new tn(Ls,Ds,e,t);o.layers=this.layers,this.add(o);const l=new tn(Ls,Ds,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ls,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class lp extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=hp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function hp(){this._document.hidden===!1&&this.reset()}const Gc=new st;class dp{constructor(e,t,n=0,i=1/0){this.ray=new Vl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(e,t=!0,n=[]){return _l(e,this,n,t),n.sort(Hc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)_l(e[i],this,n,t);return n.sort(Hc),n}}function Hc(r,e){return r.distance-e.distance}function _l(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)_l(s[a],e,t,!0)}}const Ql=class Ql{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Ql.prototype.isMatrix2=!0;let Vc=Ql;function Wc(r,e,t,n){const i=up(n);switch(t){case Lh:return r*e;case Ul:return r*e/i.components*i.byteLength;case Nl:return r*e/i.components*i.byteLength;case cs:return r*e*2/i.components*i.byteLength;case Ol:return r*e*2/i.components*i.byteLength;case Dh:return r*e*3/i.components*i.byteLength;case _n:return r*e*4/i.components*i.byteLength;case kl:return r*e*4/i.components*i.byteLength;case oa:case la:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zo:case Ho:return Math.max(r,16)*Math.max(e,8)/4;case Bo:case Go:return Math.max(r,8)*Math.max(e,8)/2;case Vo:case Wo:case $o:case Xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qo:case pa:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cl:case hl:case dl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ul:case fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ma:case pl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function up(r){switch(r){case nn:case Rh:return{byteLength:1,components:1};case mr:case Ch:case sn:return{byteLength:2,components:1};case Dl:case Fl:return{byteLength:2,components:4};case Nn:case Ll:case xn:return{byteLength:4,components:1};case Ph:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fp(r){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){const p=u[h],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];r.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,um=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:vp,alphatest_fragment:xp,alphatest_pars_fragment:_p,aomap_fragment:yp,aomap_pars_fragment:Mp,batching_pars_vertex:bp,batching_vertex:Sp,begin_vertex:Ep,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Fp,color_pars_vertex:Up,color_vertex:Np,common:Op,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Gp,emissivemap_fragment:Hp,emissivemap_pars_fragment:Vp,colorspace_fragment:Wp,colorspace_pars_fragment:qp,envmap_fragment:$p,envmap_common_pars_fragment:Xp,envmap_pars_fragment:Yp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:am,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Qp,fog_fragment:jp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:dm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:bm,map_particle_fragment:Sm,map_particle_pars_fragment:Em,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Tm,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Fm,normal_pars_vertex:Um,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Gm,opaque_fragment:Hm,packing:Vm,premultiplied_alpha_fragment:Wm,project_vertex:qm,dithering_fragment:$m,dithering_pars_fragment:Xm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:jm,skinbase_vertex:eg,skinning_pars_vertex:tg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:og,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:dg,uv_vertex:ug,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:vg,cube_vert:xg,cube_frag:_g,depth_vert:yg,depth_frag:Mg,distance_vert:bg,distance_frag:Sg,equirect_vert:Eg,equirect_frag:wg,linedashed_vert:Tg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Fg,meshnormal_frag:Ug,meshphong_vert:Ng,meshphong_frag:Og,meshphysical_vert:kg,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:Gg,points_vert:Hg,points_frag:Vg,shadow_vert:Wg,shadow_frag:qg,sprite_vert:$g,sprite_frag:Xg},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Cn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Cn.physical={uniforms:Wt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Qr={r:0,b:0,g:0},Yg=new st,Yh=new Ne;Yh.set(-1,0,0,0,1,0,0,0,1);function Kg(r,e,t,n,i,s){const a=new Oe(0);let o=i===!0?0:1,l,c,d=null,u=0,h=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){const y=b.backgroundBlurriness>0;E=e.get(E,y)}return E}function p(b){let E=!1;const y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(b,E){const y=f(E);y&&(y.isCubeTexture||y.mapping===Aa)?(c===void 0&&(c=new Ue(new ht(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Vs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yh),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==et,(d!==y||u!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,h=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ue(new as(2,2),new Ut({name:"BackgroundMaterial",uniforms:Vs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,h=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(Qr,Vh(r)),t.buffers.color.setClear(Qr.r,Qr.g,Qr.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:p,addToRenderList:v,dispose:g}}function Zg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(P,O,Y,Q,B){let K=!1;const V=u(P,Q,Y,O);s!==V&&(s=V,c(s.object)),K=f(P,Q,Y,B),K&&p(P,Q,Y,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(P,O,Y,Q),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function d(P){return r.deleteVertexArray(P)}function u(P,O,Y,Q){const B=Q.wireframe===!0;let K=n[O.id];K===void 0&&(K={},n[O.id]=K);const V=P.isInstancedMesh===!0?P.id:0;let ee=K[V];ee===void 0&&(ee={},K[V]=ee);let ne=ee[Y.id];ne===void 0&&(ne={},ee[Y.id]=ne);let fe=ne[B];return fe===void 0&&(fe=h(l()),ne[B]=fe),fe}function h(P){const O=[],Y=[],Q=[];for(let B=0;B<t;B++)O[B]=0,Y[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:Q,object:P,attributes:{},index:null}}function f(P,O,Y,Q){const B=s.attributes,K=O.attributes;let V=0;const ee=Y.getAttributes();for(const ne in ee)if(ee[ne].location>=0){const ve=B[ne];let Me=K[ne];if(Me===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(Me=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(Me=P.instanceColor)),ve===void 0||ve.attribute!==Me||Me&&ve.data!==Me.data)return!0;V++}return s.attributesNum!==V||s.index!==Q}function p(P,O,Y,Q){const B={},K=O.attributes;let V=0;const ee=Y.getAttributes();for(const ne in ee)if(ee[ne].location>=0){let ve=K[ne];ve===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(ve=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(ve=P.instanceColor));const Me={};Me.attribute=ve,ve&&ve.data&&(Me.data=ve.data),B[ne]=Me,V++}s.attributes=B,s.attributesNum=V,s.index=Q}function v(){const P=s.newAttributes;for(let O=0,Y=P.length;O<Y;O++)P[O]=0}function m(P){g(P,0)}function g(P,O){const Y=s.newAttributes,Q=s.enabledAttributes,B=s.attributeDivisors;Y[P]=1,Q[P]===0&&(r.enableVertexAttribArray(P),Q[P]=1),B[P]!==O&&(r.vertexAttribDivisor(P,O),B[P]=O)}function b(){const P=s.newAttributes,O=s.enabledAttributes;for(let Y=0,Q=O.length;Y<Q;Y++)O[Y]!==P[Y]&&(r.disableVertexAttribArray(Y),O[Y]=0)}function E(P,O,Y,Q,B,K,V){V===!0?r.vertexAttribIPointer(P,O,Y,B,K):r.vertexAttribPointer(P,O,Y,Q,B,K)}function y(P,O,Y,Q){v();const B=Q.attributes,K=Y.getAttributes(),V=O.defaultAttributeValues;for(const ee in K){const ne=K[ee];if(ne.location>=0){let fe=B[ee];if(fe===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),fe!==void 0){const ve=fe.normalized,Me=fe.itemSize,Je=e.get(fe);if(Je===void 0)continue;const mt=Je.buffer,Qe=Je.type,j=Je.bytesPerElement,ae=Qe===r.INT||Qe===r.UNSIGNED_INT||fe.gpuType===Ll;if(fe.isInterleavedBufferAttribute){const ie=fe.data,Fe=ie.stride,ke=fe.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ne.locationSize;Ie++)g(ne.location+Ie,ie.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<ne.locationSize;Ie++)m(ne.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Ie=0;Ie<ne.locationSize;Ie++)E(ne.location+Ie,Me/ne.locationSize,Qe,ve,Fe*j,(ke+Me/ne.locationSize*Ie)*j,ae)}else{if(fe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)g(ne.location+ie,fe.meshPerAttribute);P.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ie=0;ie<ne.locationSize;ie++)E(ne.location+ie,Me/ne.locationSize,Qe,ve,Me*j,Me/ne.locationSize*ie*j,ae)}}else if(V!==void 0){const ve=V[ee];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(ne.location,ve);break;case 3:r.vertexAttrib3fv(ne.location,ve);break;case 4:r.vertexAttrib4fv(ne.location,ve);break;default:r.vertexAttrib1fv(ne.location,ve)}}}}b()}function w(){A();for(const P in n){const O=n[P];for(const Y in O){const Q=O[Y];for(const B in Q){const K=Q[B];for(const V in K)d(K[V].object),delete K[V];delete Q[B]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;const O=n[P.id];for(const Y in O){const Q=O[Y];for(const B in Q){const K=Q[B];for(const V in K)d(K[V].object),delete K[V];delete Q[B]}}delete n[P.id]}function R(P){for(const O in n){const Y=n[O];for(const Q in Y){const B=Y[Q];if(B[P.id]===void 0)continue;const K=B[P.id];for(const V in K)d(K[V].object),delete K[V];delete B[P.id]}}}function _(P){for(const O in n){const Y=n[O],Q=P.isInstancedMesh===!0?P.id:0,B=Y[Q];if(B!==void 0){for(const K in B){const V=B[K];for(const ee in V)d(V[ee].object),delete V[ee];delete B[K]}delete Y[Q],Object.keys(Y).length===0&&delete n[O]}}}function A(){L(),a=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Jg(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(r.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Qg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==_n&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==nn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!_)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(De("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:S}}function jg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ai,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?d(null):c();else{const b=s?0:n,E=b*4;let y=g.clippingState||null;l.value=y,y=d(p,h,E,f);for(let w=0;w!==E;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==v;++E,y+=4)a.copy(u[E]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const ui=4,qc=[.125,.215,.35,.446,.526,.582],Ei=20,e0=256,lr=new Ra,$c=new Oe;let uo=null,fo=0,po=0,mo=!1;const t0=new N;class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=t0}=s;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:sn,format:_n,colorSpace:ga,depthBuffer:!1},i=Yc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n0(s)),this._blurMaterial=s0(s,e,t),this._ggxMaterial=i0(s,e,t)}return i}_compileMaterial(e){const t=new Ue(new Lt,e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,i,s){const l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($c),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new ht,new rs({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,g=!0):(m.color.copy($c),g=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[E]));const w=this._cubeSize;Fs(i,y*w,E>2?w:0,w,w),u.setRenderTarget(i),g&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-ui?n-p+ui:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Fs(s,m,g,3*v,2*v),i.setRenderTarget(s),i.render(o,lr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,Fs(e,m,g,3*v,2*v),i.setRenderTarget(e),i.render(o,lr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),v=s/p,m=isFinite(s)?1+Math.floor(d*v):Ei;m>Ei&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const g=[];let b=0;for(let R=0;R<Ei;++R){const _=R/v,A=Math.exp(-_*_/2);g.push(A),R===0?b+=A:R<m&&(b+=2*A)}for(let R=0;R<g.length;R++)g[R]=g[R]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=p,h.mipInt.value=E-n;const y=this._sizeLods[i],w=3*y*(i>E-ui?i-E+ui:0),S=4*(this._cubeSize-y);Fs(t,w,S,3*y,2*y),l.setRenderTarget(t),l.render(u,lr)}}function n0(r){const e=[],t=[],n=[];let i=r;const s=r-ui+1+qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ui?l=qc[a-r+ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,v=3,m=2,g=1,b=new Float32Array(v*p*f),E=new Float32Array(m*p*f),y=new Float32Array(g*p*f);for(let S=0;S<f;S++){const R=S%3*2/3-1,_=S>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];b.set(A,v*p*S),E.set(h,m*p*S);const L=[S,S,S,S,S,S];y.set(L,g*p*S)}const w=new Lt;w.setAttribute("position",new qt(b,v)),w.setAttribute("uv",new qt(E,m)),w.setAttribute("faceIndex",new qt(y,g)),n.push(new Ue(w,null)),i>ui&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yc(r,e,t){const n=new Jt(r,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function i0(r,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function s0(r,e,t){const n=new Float32Array(Ei),i=new N(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Kc(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Zc(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kh extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ht(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Dn});s.uniforms.tEquirect.value=t;const a=new Ue(i,s),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Gt),new op(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function r0(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ua||f===Na)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new Kh(p.height);return v.fromEquirectangularTexture(r,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===Ua||f===Na,v=f===ls||f===Gs;if(p||v){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Xc(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Xc(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Ua?h.mapping=ls:f===Na&&(h.mapping=Gs),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function a0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ks("WebGLRenderer: "+n+" extension not supported."),i}}}function o0(r,e,t,n){const i={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,p=u.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const b=f.array;v=f.version;for(let E=0,y=b.length;E<y;E+=3){const w=b[E+0],S=b[E+1],R=b[E+2];h.push(w,S,S,R,R,w)}}else{const b=p.array;v=p.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const w=E+0,S=E+1,R=E+2;h.push(w,S,S,R,R,w)}}const m=new(p.count>=65535?kh:Oh)(h,1);m.version=v;const g=s.get(u);g&&e.remove(g),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function l0(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,h){r.drawElements(n,h,s,u*a),t.update(h,n,1)}function c(u,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,u*a,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function c0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function h0(r,e,t){const n=new WeakMap,i=new ft;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var f=L;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let w=o.attributes.position.count*y,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*S*4*u),_=new Uh(R,w,S,u);_.type=xn,_.needsUpdate=!0;const A=y*4;for(let P=0;P<u;P++){const O=g[P],Y=b[P],Q=E[P],B=w*S*4*P;for(let K=0;K<O.count;K++){const V=K*A;p===!0&&(i.fromBufferAttribute(O,K),R[B+V+0]=i.x,R[B+V+1]=i.y,R[B+V+2]=i.z,R[B+V+3]=0),v===!0&&(i.fromBufferAttribute(Y,K),R[B+V+4]=i.x,R[B+V+5]=i.y,R[B+V+6]=i.z,R[B+V+7]=0),m===!0&&(i.fromBufferAttribute(Q,K),R[B+V+8]=i.x,R[B+V+9]=i.y,R[B+V+10]=i.z,R[B+V+11]=Q.itemSize===4?i.w:1)}}h={count:u,texture:_,size:new Ce(w,S)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function d0(r,e,t,n,i){let s=new WeakMap;function a(c){const d=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const u0={[Tl]:"LINEAR_TONE_MAPPING",[Al]:"REINHARD_TONE_MAPPING",[Rl]:"CINEON_TONE_MAPPING",[Ta]:"ACES_FILMIC_TONE_MAPPING",[Pl]:"AGX_TONE_MAPPING",[Il]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function f0(r,e,t,n,i,s){const a=new Jt(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new Hs(e,t):void 0}),o=new Jt(e,t,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new Lt;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));const c=new Wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ue(l,c),u=new Ra(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,m=null,g=[],b=!1;this.setSize=function(E,y){a.setSize(E,y),o.setSize(E,y);for(let w=0;w<g.length;w++){const S=g[w];S.setSize&&S.setSize(E,y)}},this.setEffects=function(E){g=E,b=g.length>0&&g[0].isRenderPass===!0;const y=a.width,w=a.height;for(let S=0;S<g.length;S++){const R=g[S];R.setSize&&R.setSize(y,w)}},this.begin=function(E,y){if(p||E.toneMapping===Fn&&g.length===0)return!1;if(m=y,y!==null){const w=y.width,S=y.height;(a.width!==w||a.height!==S)&&this.setSize(w,S)}return b===!1&&E.setRenderTarget(a),v=E.toneMapping,E.toneMapping=Fn,!0},this.hasRenderPass=function(){return b},this.end=function(E,y){E.toneMapping=v,p=!0;let w=a,S=o;for(let R=0;R<g.length;R++){const _=g[R];if(_.enabled!==!1&&(_.render(E,S,w,y),_.needsSwap!==!1)){const A=w;w=S,S=A}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,c.defines={},$e.getTransfer(h)===et&&(c.defines.SRGB_TRANSFER="");const R=u0[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(m),E.render(d,u),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Zh=new Ht,yl=new Hs(1,1),Jh=new Uh,Qh=new Pf,jh=new Gh,Jc=[],Qc=[],jc=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function Zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Jc[i];if(s===void 0&&(s=new Float32Array(i),Jc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pa(r,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function p0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function g0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function v0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function x0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;th.set(n),r.uniformMatrix2fv(this.addr,!1,th),At(t,n)}}function _0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;eh.set(n),r.uniformMatrix3fv(this.addr,!1,eh),At(t,n)}}function y0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;jc.set(n),r.uniformMatrix4fv(this.addr,!1,jc),At(t,n)}}function M0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function b0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function S0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function w0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function T0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function R0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function C0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yl.compareFunction=t.isReversedDepthBuffer()?zl:Bl,s=yl):s=Zh,t.setTexture2D(e||s,i)}function P0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qh,i)}function I0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jh,i)}function L0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jh,i)}function D0(r){switch(r){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return v0;case 35674:return x0;case 35675:return _0;case 35676:return y0;case 5124:case 35670:return M0;case 35667:case 35671:return b0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return L0}}function F0(r,e){r.uniform1fv(this.addr,e)}function U0(r,e){const t=Zs(e,this.size,2);r.uniform2fv(this.addr,t)}function N0(r,e){const t=Zs(e,this.size,3);r.uniform3fv(this.addr,t)}function O0(r,e){const t=Zs(e,this.size,4);r.uniform4fv(this.addr,t)}function k0(r,e){const t=Zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function B0(r,e){const t=Zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function z0(r,e){const t=Zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function G0(r,e){r.uniform1iv(this.addr,e)}function H0(r,e){r.uniform2iv(this.addr,e)}function V0(r,e){r.uniform3iv(this.addr,e)}function W0(r,e){r.uniform4iv(this.addr,e)}function q0(r,e){r.uniform1uiv(this.addr,e)}function $0(r,e){r.uniform2uiv(this.addr,e)}function X0(r,e){r.uniform3uiv(this.addr,e)}function Y0(r,e){r.uniform4uiv(this.addr,e)}function K0(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=yl:a=Zh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Z0(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qh,s[a])}function J0(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||jh,s[a])}function Q0(r,e,t){const n=this.cache,i=e.length,s=Pa(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jh,s[a])}function j0(r){switch(r){case 5126:return F0;case 35664:return U0;case 35665:return N0;case 35666:return O0;case 35674:return k0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return G0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return q0;case 36294:return $0;case 36295:return X0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}class ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D0(t.type)}}class tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j0(t.type)}}class nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const go=/(\w+)(\])?(\[|\.)?/g;function nh(r,e){r.seq.push(e),r.map[e.id]=e}function iv(r,e,t){const n=r.name,i=n.length;for(go.lastIndex=0;;){const s=go.exec(n),a=go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nh(t,c===void 0?new ev(o,r,e):new tv(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new nv(o),nh(t,u)),t=u}}}class da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);iv(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ih(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const sv=37297;let rv=0;function av(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sh=new Ne;function ov(r){$e._getMatrix(sh,$e.workingColorSpace,r);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(r)){case va:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+av(r.getShaderSource(e),o)}else return s}function lv(r,e){const t=ov(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cv={[Tl]:"Linear",[Al]:"Reinhard",[Rl]:"Cineon",[Ta]:"ACESFilmic",[Pl]:"AgX",[Il]:"Neutral",[Cl]:"Custom"};function hv(r,e){const t=cv[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jr=new N;function dv(){$e.getLuminanceCoefficients(jr);const r=jr.x.toFixed(4),e=jr.y.toFixed(4),t=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function fv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function dr(r){return r!==""}function ah(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(r){return r.replace(mv,vv)}const gv=new Map;function vv(r,e){let t=He[e];if(t===void 0){const n=gv.get(e);if(n!==void 0)t=He[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ml(t)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(r){return r.replace(xv,_v)}function _v(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ch(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yv={[aa]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function Mv(r){return yv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bv={[ls]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function Sv(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":bv[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ev={[Gs]:"ENVMAP_MODE_REFRACTION"};function wv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ev[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Tv={[Th]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function Av(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Tv[r.combine]||"ENVMAP_BLENDING_NONE"}function Rv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Mv(t),c=Sv(t),d=wv(t),u=Av(t),h=Rv(t),f=uv(t),p=fv(s),v=i.createProgram();let m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),g.length>0&&(g+=`
`)):(m=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),g=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?He.tonemapping_pars_fragment:"",t.toneMapping!==Fn?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Ml(a),a=ah(a,t),a=oh(a,t),o=Ml(o),o=ah(o,t),o=oh(o,t),a=lh(a),o=lh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const E=b+m+a,y=b+g+o,w=ih(i,i.VERTEX_SHADER,E),S=ih(i,i.FRAGMENT_SHADER,y);i.attachShader(v,w),i.attachShader(v,S),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",Y=i.getShaderInfoLog(w)||"",Q=i.getShaderInfoLog(S)||"",B=O.trim(),K=Y.trim(),V=Q.trim();let ee=!0,ne=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,w,S);else{const fe=rh(i,w,"vertex"),ve=rh(i,S,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+fe+`
`+ve)}else B!==""?De("WebGLProgram: Program Info Log:",B):(K===""||V==="")&&(ne=!1);ne&&(P.diagnostics={runnable:ee,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(w),i.deleteShader(S),_=new da(i,v),A=pv(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(v,sv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=S,this}let Pv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lv(e),t.set(e,n)),n}}class Lv{constructor(e){this.id=Pv++,this.code=e,this.usedTimes=0}}function Dv(r){return r===cs||r===pa||r===ma}function Fv(r,e,t,n,i,s){const a=new Hl,o=new Iv,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,L,P,O,Y){const Q=P.fog,B=O.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=e.get(_.envMap||K,V),ne=ee&&ee.mapping===Aa?ee.image.height:null,fe=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ve=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Me=ve!==void 0?ve.length:0;let Je=0;B.morphAttributes.position!==void 0&&(Je=1),B.morphAttributes.normal!==void 0&&(Je=2),B.morphAttributes.color!==void 0&&(Je=3);let mt,Qe,j,ae;if(fe){const be=Cn[fe];mt=be.vertexShader,Qe=be.fragmentShader}else{mt=_.vertexShader,Qe=_.fragmentShader;const be=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,be,vt),j=be.id,ae=vt.id}const ie=r.getRenderTarget(),Fe=r.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,Ie=O.isBatchedMesh===!0,_t=!!_.map,qe=!!_.matcap,rt=!!ee,je=!!_.aoMap,Ke=!!_.lightMap,bt=!!_.bumpMap&&_.wireframe===!1,wt=!!_.normalMap,Rt=!!_.displacementMap,Dt=!!_.emissiveMap,gt=!!_.metalnessMap,St=!!_.roughnessMap,D=_.anisotropy>0,$t=_.clearcoat>0,tt=_.dispersion>0,T=_.iridescence>0,x=_.sheen>0,k=_.transmission>0,H=D&&!!_.anisotropyMap,q=$t&&!!_.clearcoatMap,se=$t&&!!_.clearcoatNormalMap,oe=$t&&!!_.clearcoatRoughnessMap,$=T&&!!_.iridescenceMap,J=T&&!!_.iridescenceThicknessMap,le=x&&!!_.sheenColorMap,Te=x&&!!_.sheenRoughnessMap,de=!!_.specularMap,ce=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Le=k&&!!_.transmissionMap,Be=k&&!!_.thicknessMap,I=!!_.gradientMap,re=!!_.alphaMap,Z=_.alphaTest>0,he=!!_.alphaHash,ge=!!_.extensions;let te=Fn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=r.toneMapping);const we={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:mt,fragmentShader:Qe,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:_t,matcap:qe,envMap:rt,envMapMode:rt&&ee.mapping,envMapCubeUVHeight:ne,aoMap:je,lightMap:Ke,bumpMap:bt,normalMap:wt,displacementMap:Rt,emissiveMap:Dt,normalMapObjectSpace:wt&&_.normalMapType===ff,normalMapTangentSpace:wt&&_.normalMapType===ml,packedNormalMap:wt&&_.normalMapType===ml&&Dv(_.normalMap.format),metalnessMap:gt,roughnessMap:St,anisotropy:D,anisotropyMap:H,clearcoat:$t,clearcoatMap:q,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:tt,iridescence:T,iridescenceMap:$,iridescenceThicknessMap:J,sheen:x,sheenColorMap:le,sheenRoughnessMap:Te,specularMap:de,specularColorMap:ce,specularIntensityMap:Pe,transmission:k,transmissionMap:Le,thicknessMap:Be,gradientMap:I,opaque:_.transparent===!1&&_.blending===Os&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:Z,alphaHash:he,combine:_.combine,mapUv:_t&&p(_.map.channel),aoMapUv:je&&p(_.aoMap.channel),lightMapUv:Ke&&p(_.lightMap.channel),bumpMapUv:bt&&p(_.bumpMap.channel),normalMapUv:wt&&p(_.normalMap.channel),displacementMapUv:Rt&&p(_.displacementMap.channel),emissiveMapUv:Dt&&p(_.emissiveMap.channel),metalnessMapUv:gt&&p(_.metalnessMap.channel),roughnessMapUv:St&&p(_.roughnessMap.channel),anisotropyMapUv:H&&p(_.anisotropyMap.channel),clearcoatMapUv:q&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(_.sheenRoughnessMap.channel),specularMapUv:de&&p(_.specularMap.channel),specularColorMapUv:ce&&p(_.specularColorMap.channel),specularIntensityMapUv:Pe&&p(_.specularIntensityMap.channel),transmissionMapUv:Le&&p(_.transmissionMap.channel),thicknessMapUv:Be&&p(_.thicknessMap.channel),alphaMapUv:re&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(wt||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(_t||re),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Fe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Je,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:_t&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:Dt&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===Zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)A.push(L),A.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(A,_),b(A,_),A.push(r.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function g(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const A=f[_.type];let L;if(A){const P=Cn[A];L=xr.clone(P.uniforms)}else L=_.uniforms;return L}function y(_,A){let L=d.get(A);return L!==void 0?++L.usedTimes:(L=new Cv(r,A,_,i),c.push(L),d.set(A,L)),L}function w(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:R}}function Uv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Nv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function hh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,v,m,g){let b=r[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},r[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=p,b.materialVariant=a(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=g),e++,b}function l(h,f,p,v,m,g){const b=o(h,f,p,v,m,g);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):t.push(b)}function c(h,f,p,v,m,g){const b=o(h,f,p,v,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):t.unshift(b)}function d(h,f,p){t.length>1&&t.sort(h||Nv),n.length>1&&n.sort(f||hh),i.length>1&&i.sort(f||hh),p&&(t.reverse(),n.reverse(),i.reverse())}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:d}}function Ov(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new dh,r.set(n,[a])):i>=s.length?(a=new dh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function kv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function Bv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let zv=0;function Gv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Hv(r){const e=new kv,t=Bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new st,a=new st;function o(c){let d=0,u=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,b=0,E=0,y=0,w=0,S=0,R=0;c.sort(Gv);for(let A=0,L=c.length;A<L;A++){const P=c[A],O=P.color,Y=P.intensity,Q=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===cs?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=O.r*Y,u+=O.g*Y,h+=O.b*Y;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],Y);R++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,ee=t.get(P);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[f]=ee,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=K,f++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(O).multiplyScalar(Y),K.distance=Q,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[v]=K;const V=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,V.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[v]=V.matrix,P.castShadow){const ee=t.get(P);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=B,y++}v++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(O).multiplyScalar(Y),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const V=P.shadow,ee=t.get(P);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=P.shadow.matrix,E++}n.point[p]=K,p++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(Y),K.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[g]=K,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==g||_.numDirectionalShadows!==b||_.numPointShadows!==E||_.numSpotShadows!==y||_.numSpotMaps!==w||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,_.directionalLength=f,_.pointLength=p,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=g,_.numDirectionalShadows=b,_.numPointShadows=E,_.numSpotShadows=y,_.numSpotMaps=w,_.numLightProbes=R,n.version=zv++)}function l(c,d){let u=0,h=0,f=0,p=0,v=0;const m=d.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){const E=c[g];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function uh(r){const e=new Hv(r),t=[],n=[],i=[];function s(h){u.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Vv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new uh(r),e.set(i,[o])):s>=a.length?(o=new uh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$v=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Xv=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],fh=new st,cr=new N,vo=new N;function Yv(r,e,t){let n=new Wl;const i=new Ce,s=new Ce,a=new ft,o=new tp,l=new np,c={},d=t.maxTextureSize,u={[mi]:Zt,[Zt]:mi,[Pn]:Pn},h=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Wv,fragmentShader:qv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Lt;p.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ue(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let g=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===wh&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=aa);const A=r.getRenderTarget(),L=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Dn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=g!==this.type;Y&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=S.length;Q<B;Q++){const K=S[Q],V=K.shadow;if(V===void 0){De("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ee=V.getFrameExtents();i.multiply(ee),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ee.x),i.x=s.x*ee.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ee.y),i.y=s.y*ee.y,V.mapSize.y=s.y));const ne=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===hr){if(K.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Jt(i.x,i.y,{format:cs,type:sn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Hs(i.x,i.y,xn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=Zn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It}else K.isPointLight?(V.map=new Kh(i.x),V.map.depthTexture=new Jf(i.x,Nn)):(V.map=new Jt(i.x,i.y),V.map.depthTexture=new Hs(i.x,i.y,Nn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=Zn,this.type===aa?(V.map.depthTexture.compareFunction=ne?zl:Bl,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It);V.camera.updateProjectionMatrix()}const fe=V.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<fe;ve++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,ve),r.clear();else{ve===0&&(r.setRenderTarget(V.map),r.clear());const Me=V.getViewport(ve);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(a)}if(K.isPointLight){const Me=V.camera,Je=V.matrix,mt=K.distance||Me.far;mt!==Me.far&&(Me.far=mt,Me.updateProjectionMatrix()),cr.setFromMatrixPosition(K.matrixWorld),Me.position.copy(cr),vo.copy(Me.position),vo.add($v[ve]),Me.up.copy(Xv[ve]),Me.lookAt(vo),Me.updateMatrixWorld(),Je.makeTranslation(-cr.x,-cr.y,-cr.z),fh.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(fh,Me.coordinateSystem,Me.reversedDepth)}else V.updateMatrices(K);n=V.getFrustum(),y(R,_,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===hr&&b(V,_),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,L,P)};function b(S,R){const _=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jt(i.x,i.y,{format:cs,type:sn})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(R,null,_,h,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(R,null,_,f,v,null)}function E(S,R,_,A){let L=null;const P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)L=P;else if(L=_.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=L.uuid,Y=R.uuid;let Q=c[O];Q===void 0&&(Q={},c[O]=Q);let B=Q[Y];B===void 0&&(B=L.clone(),Q[Y]=B,R.addEventListener("dispose",w)),L=B}if(L.visible=R.visible,L.wireframe=R.wireframe,A===hr?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:u[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=r.properties.get(L);O.light=_}return L}function y(S,R,_,A,L){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===hr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),Q=S.material;if(Array.isArray(Q)){const B=Y.groups;for(let K=0,V=B.length;K<V;K++){const ee=B[K],ne=Q[ee.materialIndex];if(ne&&ne.visible){const fe=E(S,ne,A,L);S.onBeforeShadow(r,S,R,_,Y,fe,ee),r.renderBufferDirect(_,null,Y,fe,S,ee),S.onAfterShadow(r,S,R,_,Y,fe,ee)}}}else if(Q.visible){const B=E(S,Q,A,L);S.onBeforeShadow(r,S,R,_,Y,B,null),r.renderBufferDirect(_,null,Y,B,S,null),S.onAfterShadow(r,S,R,_,Y,B,null)}}const O=S.children;for(let Y=0,Q=O.length;Y<Q;Y++)y(O[Y],R,_,A,L)}function w(S){S.target.removeEventListener("dispose",w);for(const _ in c){const A=c[_],L=S.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function Kv(r,e){function t(){let I=!1;const re=new ft;let Z=null;const he=new ft(0,0,0,0);return{setMask:function(ge){Z!==ge&&!I&&(r.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){I=ge},setClear:function(ge,te,we,be,vt){vt===!0&&(ge*=be,te*=be,we*=be),re.set(ge,te,we,be),he.equals(re)===!1&&(r.clearColor(ge,te,we,be),he.copy(re))},reset:function(){I=!1,Z=null,he.set(-1,0,0,0)}}}function n(){let I=!1,re=!1,Z=null,he=null,ge=null;return{setReversed:function(te){if(re!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),re=te;const be=ge;ge=null,this.setClear(be)}},getReversed:function(){return re},setTest:function(te){te?ie(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(te){Z!==te&&!I&&(r.depthMask(te),Z=te)},setFunc:function(te){if(re&&(te=Sf[te]),he!==te){switch(te){case Io:r.depthFunc(r.NEVER);break;case Lo:r.depthFunc(r.ALWAYS);break;case Do:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case Fo:r.depthFunc(r.EQUAL);break;case Uo:r.depthFunc(r.GEQUAL);break;case No:r.depthFunc(r.GREATER);break;case Oo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=te}},setLocked:function(te){I=te},setClear:function(te){ge!==te&&(ge=te,re&&(te=1-te),r.clearDepth(te))},reset:function(){I=!1,Z=null,he=null,ge=null,re=!1}}}function i(){let I=!1,re=null,Z=null,he=null,ge=null,te=null,we=null,be=null,vt=null;return{setTest:function(lt){I||(lt?ie(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(lt){re!==lt&&!I&&(r.stencilMask(lt),re=lt)},setFunc:function(lt,Mn,bn){(Z!==lt||he!==Mn||ge!==bn)&&(r.stencilFunc(lt,Mn,bn),Z=lt,he=Mn,ge=bn)},setOp:function(lt,Mn,bn){(te!==lt||we!==Mn||be!==bn)&&(r.stencilOp(lt,Mn,bn),te=lt,we=Mn,be=bn)},setLocked:function(lt){I=lt},setClear:function(lt){vt!==lt&&(r.clearStencil(lt),vt=lt)},reset:function(){I=!1,re=null,Z=null,he=null,ge=null,te=null,we=null,be=null,vt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},u={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,b=null,E=null,y=null,w=null,S=null,R=null,_=new Oe(0,0,0),A=0,L=!1,P=null,O=null,Y=null,Q=null,B=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ee=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=ee>=1):ne.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=ee>=2);let fe=null,ve={};const Me=r.getParameter(r.SCISSOR_BOX),Je=r.getParameter(r.VIEWPORT),mt=new ft().fromArray(Me),Qe=new ft().fromArray(Je);function j(I,re,Z,he){const ge=new Uint8Array(4),te=r.createTexture();r.bindTexture(I,te),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let we=0;we<Z;we++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(re+we,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return te}const ae={};ae[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(zs),bt(!1),wt(cc),ie(r.CULL_FACE),je(Dn);function ie(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function Fe(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function ke(I,re){return h[I]!==re?(r.bindFramebuffer(I,re),h[I]=re,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=re),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(I,re){let Z=p,he=!1;if(I){Z=f.get(re),Z===void 0&&(Z=[],f.set(re,Z));const ge=I.textures;if(Z.length!==ge.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let te=0,we=ge.length;te<we;te++)Z[te]=r.COLOR_ATTACHMENT0+te;Z.length=ge.length,he=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,he=!0);he&&r.drawBuffers(Z)}function _t(I){return v!==I?(r.useProgram(I),v=I,!0):!1}const qe={[Si]:r.FUNC_ADD,[qu]:r.FUNC_SUBTRACT,[$u]:r.FUNC_REVERSE_SUBTRACT};qe[Xu]=r.MIN,qe[Yu]=r.MAX;const rt={[Ku]:r.ZERO,[Zu]:r.ONE,[Ju]:r.SRC_COLOR,[Co]:r.SRC_ALPHA,[sf]:r.SRC_ALPHA_SATURATE,[tf]:r.DST_COLOR,[ju]:r.DST_ALPHA,[Qu]:r.ONE_MINUS_SRC_COLOR,[Po]:r.ONE_MINUS_SRC_ALPHA,[nf]:r.ONE_MINUS_DST_COLOR,[ef]:r.ONE_MINUS_DST_ALPHA,[rf]:r.CONSTANT_COLOR,[af]:r.ONE_MINUS_CONSTANT_COLOR,[of]:r.CONSTANT_ALPHA,[lf]:r.ONE_MINUS_CONSTANT_ALPHA};function je(I,re,Z,he,ge,te,we,be,vt,lt){if(I===Dn){m===!0&&(Fe(r.BLEND),m=!1);return}if(m===!1&&(ie(r.BLEND),m=!0),I!==Wu){if(I!==g||lt!==L){if((b!==Si||w!==Si)&&(r.blendEquation(r.FUNC_ADD),b=Si,w=Si),lt)switch(I){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wn:r.blendFunc(r.ONE,r.ONE);break;case hc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",I);break}else switch(I){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hc:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",I);break}E=null,y=null,S=null,R=null,_.set(0,0,0),A=0,g=I,L=lt}return}ge=ge||re,te=te||Z,we=we||he,(re!==b||ge!==w)&&(r.blendEquationSeparate(qe[re],qe[ge]),b=re,w=ge),(Z!==E||he!==y||te!==S||we!==R)&&(r.blendFuncSeparate(rt[Z],rt[he],rt[te],rt[we]),E=Z,y=he,S=te,R=we),(be.equals(_)===!1||vt!==A)&&(r.blendColor(be.r,be.g,be.b,vt),_.copy(be),A=vt),g=I,L=!1}function Ke(I,re){I.side===Pn?Fe(r.CULL_FACE):ie(r.CULL_FACE);let Z=I.side===Zt;re&&(Z=!Z),bt(Z),I.blending===Os&&I.transparent===!1?je(Dn):je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const he=I.stencilWrite;o.setTest(he),he&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(I){P!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),P=I)}function wt(I){I!==Hu?(ie(r.CULL_FACE),I!==O&&(I===cc?r.cullFace(r.BACK):I===Vu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),O=I}function Rt(I){I!==Y&&(V&&r.lineWidth(I),Y=I)}function Dt(I,re,Z){I?(ie(r.POLYGON_OFFSET_FILL),(Q!==re||B!==Z)&&(Q=re,B=Z,a.getReversed()&&(re=-re),r.polygonOffset(re,Z))):Fe(r.POLYGON_OFFSET_FILL)}function gt(I){I?ie(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function St(I){I===void 0&&(I=r.TEXTURE0+K-1),fe!==I&&(r.activeTexture(I),fe=I)}function D(I,re,Z){Z===void 0&&(fe===null?Z=r.TEXTURE0+K-1:Z=fe);let he=ve[Z];he===void 0&&(he={type:void 0,texture:void 0},ve[Z]=he),(he.type!==I||he.texture!==re)&&(fe!==Z&&(r.activeTexture(Z),fe=Z),r.bindTexture(I,re||ae[I]),he.type=I,he.texture=re)}function $t(){const I=ve[fe];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{r.compressedTexImage2D(...arguments)}catch(I){Xe("WebGLState:",I)}}function T(){try{r.compressedTexImage3D(...arguments)}catch(I){Xe("WebGLState:",I)}}function x(){try{r.texSubImage2D(...arguments)}catch(I){Xe("WebGLState:",I)}}function k(){try{r.texSubImage3D(...arguments)}catch(I){Xe("WebGLState:",I)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(I){Xe("WebGLState:",I)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(I){Xe("WebGLState:",I)}}function se(){try{r.texStorage2D(...arguments)}catch(I){Xe("WebGLState:",I)}}function oe(){try{r.texStorage3D(...arguments)}catch(I){Xe("WebGLState:",I)}}function $(){try{r.texImage2D(...arguments)}catch(I){Xe("WebGLState:",I)}}function J(){try{r.texImage3D(...arguments)}catch(I){Xe("WebGLState:",I)}}function le(I){return u[I]!==void 0?u[I]:r.getParameter(I)}function Te(I,re){u[I]!==re&&(r.pixelStorei(I,re),u[I]=re)}function de(I){mt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function ce(I){Qe.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Qe.copy(I))}function Pe(I,re){let Z=c.get(re);Z===void 0&&(Z=new WeakMap,c.set(re,Z));let he=Z.get(I);he===void 0&&(he=r.getUniformBlockIndex(re,I.name),Z.set(I,he))}function Le(I,re){const he=c.get(re).get(I);l.get(re)!==he&&(r.uniformBlockBinding(re,he,I.__bindingPointIndex),l.set(re,he))}function Be(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),d={},u={},fe=null,ve={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,b=null,E=null,y=null,w=null,S=null,R=null,_=new Oe(0,0,0),A=0,L=!1,P=null,O=null,Y=null,Q=null,B=null,mt.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Fe,bindFramebuffer:ke,drawBuffers:Ie,useProgram:_t,setBlending:je,setMaterial:Ke,setFlipSided:bt,setCullFace:wt,setLineWidth:Rt,setPolygonOffset:Dt,setScissorTest:gt,activeTexture:St,bindTexture:D,unbindTexture:$t,compressedTexImage2D:tt,compressedTexImage3D:T,texImage2D:$,texImage3D:J,pixelStorei:Te,getParameter:le,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:oe,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:de,viewport:ce,reset:Be}}function Zv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap,u=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return p?new OffscreenCanvas(T,x):xa("canvas")}function m(T,x,k){let H=1;const q=tt(T);if((q.width>k||q.height>k)&&(H=k/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const se=Math.floor(H*q.width),oe=Math.floor(H*q.height);h===void 0&&(h=v(se,oe));const $=x?v(se,oe):h;return $.width=se,$.height=oe,$.getContext("2d").drawImage(T,0,0,se,oe),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+se+"x"+oe+")."),$}else return"data"in T&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function g(T){return T.generateMipmaps}function b(T){r.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(T,x,k,H,q,se=!1){if(T!==null){if(r[T]!==void 0)return r[T];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8),k===r.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),k===r.SHORT&&oe&&($=oe.R16_SNORM_EXT)),x===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),x===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8),k===r.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),k===r.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),x===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),x===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),x===r.RGB&&(k===r.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),k===r.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),x===r.RGBA){const J=se?va:$e.getTransfer(q);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=J===et?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),k===r.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(T,x){let k;return T?x===null||x===Nn||x===gr?k=r.DEPTH24_STENCIL8:x===xn?k=r.DEPTH32F_STENCIL8:x===mr&&(k=r.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===gr?k=r.DEPTH_COMPONENT24:x===xn?k=r.DEPTH_COMPONENT32F:x===mr&&(k=r.DEPTH_COMPONENT16),k}function S(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&u.delete(x)}function _(T){const x=T.target;x.removeEventListener("dispose",_),P(x)}function A(T){const x=n.get(T);if(x.__webglInit===void 0)return;const k=T.source,H=f.get(k);if(H){const q=H[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&L(T),Object.keys(H).length===0&&f.delete(k)}n.remove(T)}function L(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const k=T.source,H=f.get(k);delete H[x.__cacheKey],a.memory.textures--}function P(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let q=0;q<x.__webglFramebuffer[H].length;q++)r.deleteFramebuffer(x.__webglFramebuffer[H][q]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=T.textures;for(let H=0,q=k.length;H<q;H++){const se=n.get(k[H]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(k[H])}n.remove(T)}let O=0;function Y(){O=0}function Q(){return O}function B(T){O=T}function K(){const T=O;return T>=i.maxTextures&&De("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),O+=1,T}function V(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ee(T,x){const k=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const H=T.image;if(H===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(k,T,x);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+x)}function ne(T,x){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Fe(k,T,x);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+x)}function fe(T,x){const k=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Fe(k,T,x);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+x)}function ve(T,x){const k=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&k.__version!==T.version){ke(k,T,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+x)}const Me={[pr]:r.REPEAT,[$n]:r.CLAMP_TO_EDGE,[ko]:r.MIRRORED_REPEAT},Je={[It]:r.NEAREST,[df]:r.NEAREST_MIPMAP_NEAREST,[Tr]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[Oa]:r.LINEAR_MIPMAP_NEAREST,[di]:r.LINEAR_MIPMAP_LINEAR},mt={[pf]:r.NEVER,[_f]:r.ALWAYS,[mf]:r.LESS,[Bl]:r.LEQUAL,[gf]:r.EQUAL,[zl]:r.GEQUAL,[vf]:r.GREATER,[xf]:r.NOTEQUAL};function Qe(T,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===Oa||x.magFilter===Tr||x.magFilter===di||x.minFilter===Gt||x.minFilter===Oa||x.minFilter===Tr||x.minFilter===di)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,Me[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,Me[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,Me[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,Je[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,Je[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,mt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==Tr&&x.minFilter!==di||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function j(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let q=f.get(H);q===void 0&&(q={},f.set(H,q));const se=V(x);if(se!==T.__cacheKey){q[se]===void 0&&(q[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),q[se].usedTimes++;const oe=q[T.__cacheKey];oe!==void 0&&(q[T.__cacheKey].usedTimes--,oe.usedTimes===0&&L(x)),T.__cacheKey=se,T.__webglTexture=q[se].texture}return k}function ae(T,x,k){return Math.floor(Math.floor(T/k)/x)}function ie(T,x,k,H){const se=T.updateRanges;if(se.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,k,H,x.data);else{se.sort((Te,de)=>Te.start-de.start);let oe=0;for(let Te=1;Te<se.length;Te++){const de=se[oe],ce=se[Te],Pe=de.start+de.count,Le=ae(ce.start,x.width,4),Be=ae(de.start,x.width,4);ce.start<=Pe+1&&Le===Be&&ae(ce.start+ce.count-1,x.width,4)===Le?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,se[oe]=ce)}se.length=oe+1;const $=t.getParameter(r.UNPACK_ROW_LENGTH),J=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Te=0,de=se.length;Te<de;Te++){const ce=se[Te],Pe=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),Be=Pe%x.width,I=Math.floor(Pe/x.width),re=Le,Z=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Be,I,re,Z,k,H,x.data)}T.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,J),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function Fe(T,x,k){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);const q=j(T,x),se=x.source;t.bindTexture(H,T.__webglTexture,r.TEXTURE0+k);const oe=n.get(se);if(se.version!==oe.__version||q===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Z=$e.getPrimaries($e.workingColorSpace),he=x.colorSpace===hi?null:$e.getPrimaries(x.colorSpace),ge=x.colorSpace===hi||Z===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,i.maxTextureSize);J=$t(x,J);const le=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let de=y(x.internalFormat,le,Te,x.normalized,x.colorSpace,x.isVideoTexture);Qe(H,x);let ce;const Pe=x.mipmaps,Le=x.isVideoTexture!==!0,Be=oe.__version===void 0||q===!0,I=se.dataReady,re=S(x,J);if(x.isDepthTexture)de=w(x.format===ss,x.type),Be&&(Le?t.texStorage2D(r.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,de,J.width,J.height,0,le,Te,null));else if(x.isDataTexture)if(Pe.length>0){Le&&Be&&t.texStorage2D(r.TEXTURE_2D,re,de,Pe[0].width,Pe[0].height);for(let Z=0,he=Pe.length;Z<he;Z++)ce=Pe[Z],Le?I&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(r.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Te,ce.data);x.generateMipmaps=!1}else Le?(Be&&t.texStorage2D(r.TEXTURE_2D,re,de,J.width,J.height),I&&ie(x,J,le,Te)):t.texImage2D(r.TEXTURE_2D,0,de,J.width,J.height,0,le,Te,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,de,Pe[0].width,Pe[0].height,J.depth);for(let Z=0,he=Pe.length;Z<he;Z++)if(ce=Pe[Z],x.format!==_n)if(le!==null)if(Le){if(I)if(x.layerUpdates.size>0){const ge=Wc(ce.width,ce.height,x.format,x.type);for(const te of x.layerUpdates){const we=ce.data.subarray(te*ge/ce.data.BYTES_PER_ELEMENT,(te+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,te,ce.width,ce.height,1,le,we)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,Te,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,le,Te,ce.data)}else{Le&&Be&&t.texStorage2D(r.TEXTURE_2D,re,de,Pe[0].width,Pe[0].height);for(let Z=0,he=Pe.length;Z<he;Z++)ce=Pe[Z],x.format!==_n?le!==null?Le?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,Z,de,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?I&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Te,ce.data):t.texImage2D(r.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Te,ce.data)}else if(x.isDataArrayTexture)if(Le){if(Be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,de,J.width,J.height,J.depth),I)if(x.layerUpdates.size>0){const Z=Wc(J.width,J.height,x.format,x.type);for(const he of x.layerUpdates){const ge=J.data.subarray(he*Z/J.data.BYTES_PER_ELEMENT,(he+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,Te,ge)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,Te,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,le,Te,J.data);else if(x.isData3DTexture)Le?(Be&&t.texStorage3D(r.TEXTURE_3D,re,de,J.width,J.height,J.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,Te,J.data)):t.texImage3D(r.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,le,Te,J.data);else if(x.isFramebufferTexture){if(Be)if(Le)t.texStorage2D(r.TEXTURE_2D,re,de,J.width,J.height);else{let Z=J.width,he=J.height;for(let ge=0;ge<re;ge++)t.texImage2D(r.TEXTURE_2D,ge,de,Z,he,0,le,Te,null),Z>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const Z=r.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),u.add(x),Z.onpaint=he=>{const ge=he.changedElements;for(const te of u)ge.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,J);else{const ge=r.RGBA,te=r.RGBA,we=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,te,we,J)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&Be){const Z=tt(Pe[0]);t.texStorage2D(r.TEXTURE_2D,re,de,Z.width,Z.height)}for(let Z=0,he=Pe.length;Z<he;Z++)ce=Pe[Z],Le?I&&t.texSubImage2D(r.TEXTURE_2D,Z,0,0,le,Te,ce):t.texImage2D(r.TEXTURE_2D,Z,de,le,Te,ce);x.generateMipmaps=!1}else if(Le){if(Be){const Z=tt(J);t.texStorage2D(r.TEXTURE_2D,re,de,Z.width,Z.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,Te,J)}else t.texImage2D(r.TEXTURE_2D,0,de,le,Te,J);g(x)&&b(H),oe.__version=se.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ke(T,x,k){if(x.image.length!==6)return;const H=j(T,x),q=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+k);const se=n.get(q);if(q.version!==se.__version||H===!0){t.activeTexture(r.TEXTURE0+k);const oe=$e.getPrimaries($e.workingColorSpace),$=x.colorSpace===hi?null:$e.getPrimaries(x.colorSpace),J=x.colorSpace===hi||oe===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!le&&!Te?de[te]=m(x.image[te],!0,i.maxCubemapSize):de[te]=Te?x.image[te].image:x.image[te],de[te]=$t(x,de[te]);const ce=de[0],Pe=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Be=y(x.internalFormat,Pe,Le,x.normalized,x.colorSpace),I=x.isVideoTexture!==!0,re=se.__version===void 0||H===!0,Z=q.dataReady;let he=S(x,ce);Qe(r.TEXTURE_CUBE_MAP,x);let ge;if(le){I&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Be,ce.width,ce.height);for(let te=0;te<6;te++){ge=de[te].mipmaps;for(let we=0;we<ge.length;we++){const be=ge[we];x.format!==_n?Pe!==null?I?Z&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Be,be.width,be.height,0,be.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,be.width,be.height,Pe,Le,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Be,be.width,be.height,0,Pe,Le,be.data)}}}else{if(ge=x.mipmaps,I&&re){ge.length>0&&he++;const te=tt(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Be,te.width,te.height)}for(let te=0;te<6;te++)if(Te){I?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Pe,Le,de[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,de[te].width,de[te].height,0,Pe,Le,de[te].data);for(let we=0;we<ge.length;we++){const vt=ge[we].image[te].image;I?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,vt.width,vt.height,Pe,Le,vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Be,vt.width,vt.height,0,Pe,Le,vt.data)}}else{I?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,Le,de[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,Pe,Le,de[te]);for(let we=0;we<ge.length;we++){const be=ge[we];I?Z&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Pe,Le,be.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Be,Pe,Le,be.image[te])}}}g(x)&&b(r.TEXTURE_CUBE_MAP),se.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ie(T,x,k,H,q,se){const oe=s.convert(k.format,k.colorSpace),$=s.convert(k.type),J=y(k.internalFormat,oe,$,k.normalized,k.colorSpace),le=n.get(x),Te=n.get(k);if(Te.__renderTarget=x,!le.__hasExternalTextures){const de=Math.max(1,x.width>>se),ce=Math.max(1,x.height>>se);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?t.texImage3D(q,se,J,de,ce,x.depth,0,oe,$,null):t.texImage2D(q,se,J,de,ce,0,oe,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),St(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,q,Te.__webglTexture,0,gt(x)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,q,Te.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _t(T,x,k){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const H=x.depthTexture,q=H&&H.isDepthTexture?H.type:null,se=w(x.stencilBuffer,q),oe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;St(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt(x),se,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt(x),se,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,se,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,T)}else{const H=x.textures;for(let q=0;q<H.length;q++){const se=H[q],oe=s.convert(se.format,se.colorSpace),$=s.convert(se.type),J=y(se.internalFormat,oe,$,se.normalized,se.colorSpace);St(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt(x),J,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt(x),J,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,J,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(T,x,k){const H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Qe(r.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),Te=s.convert(x.depthTexture.type);let de;x.depthTexture.format===Zn?de=r.DEPTH_COMPONENT24:x.depthTexture.format===ss&&(de=r.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,x.width,x.height,0,le,Te,null)}}else ee(x.depthTexture,0);const se=q.__webglTexture,oe=gt(x),$=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,J=x.depthTexture.format===ss?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)St(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,$,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,J,$,se,0);else if(x.depthTexture.format===ss)St(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,$,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,J,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(T){const x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const H=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=H}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)qe(x.__webglFramebuffer[H],T,H);else{const H=T.texture.mipmaps;H&&H.length>0?qe(x.__webglFramebuffer[0],T,0):qe(x.__webglFramebuffer,T,0)}else if(k){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),_t(x.__webglDepthbuffer[H],T,!1);else{const q=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,se)}}else{const H=T.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),_t(x.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(T,x,k){const H=n.get(T);x!==void 0&&Ie(H.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&rt(T)}function Ke(T){const x=T.texture,k=n.get(T),H=n.get(x);T.addEventListener("dispose",_);const q=T.textures,se=T.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let J=0;J<x.mipmaps.length;J++)k.__webglFramebuffer[$][J]=r.createFramebuffer()}else k.__webglFramebuffer[$]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)k.__webglFramebuffer[$]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(oe)for(let $=0,J=q.length;$<J;$++){const le=n.get(q[$]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&St(T)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){const J=q[$];k.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[$]);const le=s.convert(J.format,J.colorSpace),Te=s.convert(J.type),de=y(J.internalFormat,le,Te,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),ce=gt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,k.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),_t(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Qe(r.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Ie(k.__webglFramebuffer[$][J],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ie(k.__webglFramebuffer[$],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);g(x)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,J=q.length;$<J;$++){const le=q[$],Te=n.get(le);let de=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),Qe(de,le),Ie(k.__webglFramebuffer,T,le,r.COLOR_ATTACHMENT0+$,de,0),g(le)&&b(de)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Qe($,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Ie(k.__webglFramebuffer[J],T,x,r.COLOR_ATTACHMENT0,$,J);else Ie(k.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,$,0);g(x)&&b($),t.unbindTexture()}T.depthBuffer&&rt(T)}function bt(T){const x=T.textures;for(let k=0,H=x.length;k<H;k++){const q=x[k];if(g(q)){const se=E(T),oe=n.get(q).__webglTexture;t.bindTexture(se,oe),b(se),t.unbindTexture()}}}const wt=[],Rt=[];function Dt(T){if(T.samples>0){if(St(T)===!1){const x=T.textures,k=T.width,H=T.height;let q=r.COLOR_BUFFER_BIT;const se=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(T),$=x.length>1;if($)for(let le=0;le<x.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const J=T.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Te=n.get(x[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,k,H,0,0,k,H,q,r.NEAREST),l===!0&&(wt.length=0,Rt.length=0,wt.push(r.COLOR_ATTACHMENT0+le),T.depthBuffer&&T.resolveDepthBuffer===!1&&(wt.push(se),Rt.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<x.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Te=n.get(x[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,Te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function gt(T){return Math.min(i.maxSamples,T.samples)}function St(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(T){const x=a.render.frame;d.get(T)!==x&&(d.set(T,x),T.update())}function $t(T,x){const k=T.colorSpace,H=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==ga&&k!==hi&&($e.getTransfer(k)===et?(H!==_n||q!==nn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),x}function tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=ne,this.setTexture3D=fe,this.setTextureCube=ve,this.rebindTextures=je,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jv(r,e){function t(n,i=hi){let s;const a=$e.getTransfer(i);if(n===nn)return r.UNSIGNED_BYTE;if(n===Dl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return r.BYTE;if(n===Ch)return r.SHORT;if(n===mr)return r.UNSIGNED_SHORT;if(n===Ll)return r.INT;if(n===Nn)return r.UNSIGNED_INT;if(n===xn)return r.FLOAT;if(n===sn)return r.HALF_FLOAT;if(n===Lh)return r.ALPHA;if(n===Dh)return r.RGB;if(n===_n)return r.RGBA;if(n===Zn)return r.DEPTH_COMPONENT;if(n===ss)return r.DEPTH_STENCIL;if(n===Ul)return r.RED;if(n===Nl)return r.RED_INTEGER;if(n===cs)return r.RG;if(n===Ol)return r.RG_INTEGER;if(n===kl)return r.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ha)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===zo||n===Go||n===Ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Wo||n===qo||n===$o||n===Xo||n===pa||n===Yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vo||n===Wo)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===$o)return s.COMPRESSED_R11_EAC;if(n===Xo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===pa)return s.COMPRESSED_RG11_EAC;if(n===Yo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===Zo||n===Jo||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ko)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cl)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===fl||n===ma||n===pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ut({vertexShader:Qv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tx extends ds{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new ex,g={},b=t.getContextAttributes();let E=null,y=null;const w=[],S=[],R=new Ce;let _=null;const A=new tn;A.viewport=new ft;const L=new tn;L.viewport=new ft;const P=[A,L],O=new lp;let Y=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=w[j];return ae===void 0&&(ae=new qa,w[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=w[j];return ae===void 0&&(ae=new qa,w[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=w[j];return ae===void 0&&(ae=new qa,w[j]=ae),ae.getHandSpace()};function B(j){const ae=S.indexOf(j.inputSource);if(ae===-1)return;const ie=w[ae];ie!==void 0&&(ie.update(j.inputSource,j.frame,c||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",V);for(let j=0;j<w.length;j++){const ae=S[j];ae!==null&&(S[j]=null,w[j].disconnect(ae))}Y=null,Q=null,m.reset();for(const j in g)delete g[j];e.setRenderTarget(E),f=null,h=null,u=null,i=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",K),i.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Fe=null,ke=null;b.depth&&(ke=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?ss:Zn,Fe=b.stencil?gr:Nn);const Ie={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ie),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Jt(h.textureWidth,h.textureHeight,{format:_n,type:nn,depthTexture:new Hs(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jt(f.framebufferWidth,f.framebufferHeight,{format:_n,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(j){for(let ae=0;ae<j.removed.length;ae++){const ie=j.removed[ae],Fe=S.indexOf(ie);Fe>=0&&(S[Fe]=null,w[Fe].disconnect(ie))}for(let ae=0;ae<j.added.length;ae++){const ie=j.added[ae];let Fe=S.indexOf(ie);if(Fe===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=S.length){S.push(ie),Fe=Ie;break}else if(S[Ie]===null){S[Ie]=ie,Fe=Ie;break}if(Fe===-1)break}const ke=w[Fe];ke&&ke.connect(ie)}}const ee=new N,ne=new N;function fe(j,ae,ie){ee.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Fe=ee.distanceTo(ne),ke=ae.projectionMatrix.elements,Ie=ie.projectionMatrix.elements,_t=ke[14]/(ke[10]-1),qe=ke[14]/(ke[10]+1),rt=(ke[9]+1)/ke[5],je=(ke[9]-1)/ke[5],Ke=(ke[8]-1)/ke[0],bt=(Ie[8]+1)/Ie[0],wt=_t*Ke,Rt=_t*bt,Dt=Fe/(-Ke+bt),gt=Dt*-Ke;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(gt),j.translateZ(Dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ke[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const St=_t+Dt,D=qe+Dt,$t=wt-gt,tt=Rt+(Fe-gt),T=rt*qe/D*St,x=je*qe/D*St;j.projectionMatrix.makePerspective($t,tt,T,x,St,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),O.near=L.near=A.near=ae,O.far=L.far=A.far=ie,(Y!==O.near||Q!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,Q=O.far),O.layers.mask=j.layers.mask|6,A.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Fe=j.parent,ke=O.cameras;ve(O,Fe);for(let Ie=0;Ie<ke.length;Ie++)ve(ke[Ie],Fe);ke.length===2?fe(O,A,L):O.projectionMatrix.copy(A.projectionMatrix),Me(j,O,Fe)};function Me(j,ae,ie){ie===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return g[j]};let Je=null;function mt(j,ae){if(d=ae.getViewerPose(c||a),p=ae,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Fe=!1;ie.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let qe=0;qe<ie.length;qe++){const rt=ie[qe];let je=null;if(f!==null)je=f.getViewport(rt);else{const bt=u.getViewSubImage(h,rt);je=bt.viewport,qe===0&&(e.setRenderTargetTextures(y,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(y))}let Ke=P[qe];Ke===void 0&&(Ke=new tn,Ke.layers.enable(qe),Ke.viewport=new ft,P[qe]=Ke),Ke.matrix.fromArray(rt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(rt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(je.x,je.y,je.width,je.height),qe===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(Ke)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const qe=u.getDepthInformation(ie[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,i.renderState)}if(ke&&ke.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<ie.length;qe++){const rt=ie[qe].camera;if(rt){let je=g[rt];je||(je=new Hh,g[rt]=je);const Ke=u.getCameraImage(rt);je.sourceTexture=Ke}}}}for(let ie=0;ie<w.length;ie++){const Fe=S[ie],ke=w[ie];Fe!==null&&ke!==void 0&&ke.update(Fe,ae,c||a)}Je&&Je(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}const Qe=new Xh;Qe.setAnimationLoop(mt),this.setAnimationLoop=function(j){Je=j},this.dispose=function(){}}}const nx=new st,ed=new Ne;ed.set(-1,0,0,0,1,0,0,0,1);function ix(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Vh(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,b,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,b,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Zt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Zt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const b=e.get(g),E=b.envMap,y=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ed),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const S=w.program;n.uniformBlockBinding(y,S)}function c(y,w){let S=i[y.id];S===void 0&&(m(y),S=d(y),i[y.id]=S,y.addEventListener("dispose",b));const R=w.program;n.updateUBOMapping(y,R);const _=e.render.frame;s[y.id]!==_&&(h(y),s[y.id]=_)}function d(y){const w=u();y.__bindingPointIndex=w;const S=r.createBuffer(),R=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=i[y.id],S=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let _=0,A=S.length;_<A;_++){const L=S[_];if(Array.isArray(L))for(let P=0,O=L.length;P<O;P++)f(L[P],_,P,R);else f(L,_,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,w,S,R){if(v(y,w,S,R)===!0){const _=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let P=0;P<A.length;P++){const O=A[P],Y=g(O);p(O,y.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,y.__data)}}function p(y,w,S){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,S)}function v(y,w,S,R){const _=y.value,A=w+"_"+S;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const L=R[A];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(y){const w=y.uniforms;let S=0;const R=16;for(let A=0,L=w.length;A<L;A++){const P=Array.isArray(w[A])?w[A]:[w[A]];for(let O=0,Y=P.length;O<Y;O++){const Q=P[O],B=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,V=B.length;K<V;K++){const ee=B[K],ne=g(ee),fe=S%R,ve=fe%ne.boundary,Me=fe+ve;S+=ve,Me!==0&&R-Me<ne.storage&&(S+=R-Me),Q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=S,S+=ne.storage}}}const _=S%R;return _>0&&(S+=R-_),y.__size=S,y.__cache={},this}function g(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),w}function b(y){const w=y.target;w.removeEventListener("dispose",b);const S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function E(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:E}}const rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function ax(){return wn===null&&(wn=new zh(rx,16,16,cs,sn),wn.name="DFG_LUT",wn.minFilter=Gt,wn.magFilter=Gt,wn.wrapS=$n,wn.wrapT=$n,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class ox{constructor(e={}){const{canvas:t=Mf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=f,m=new Set([kl,Ol,Nl]),g=new Set([nn,Nn,mr,gr,Dl,Fl]),b=new Uint32Array(4),E=new Int32Array(4),y=new N;let w=null,S=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,O=null,Y=null,Q=null,B=null;this._outputColorSpace=Pt;let K=0,V=0,ee=null,ne=-1,fe=null;const ve=new ft,Me=new ft;let Je=null;const mt=new Oe(0);let Qe=0,j=t.width,ae=t.height,ie=1,Fe=null,ke=null;const Ie=new ft(0,0,j,ae),_t=new ft(0,0,j,ae);let qe=!1;const rt=new Wl;let je=!1,Ke=!1;const bt=new st,wt=new N,Rt=new ft,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function St(){return ee===null?ie:1}let D=n;function $t(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),D===null){const F="webgl2";if(D=$t(F,M),D===null)throw $t(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Xe("WebGLRenderer: "+M.message),M}let tt,T,x,k,H,q,se,oe,$,J,le,Te,de,ce,Pe,Le,Be,I,re,Z,he,ge,te;function we(){tt=new a0(D),tt.init(),he=new Jv(D,tt),T=new Qg(D,tt,e,he),x=new Kv(D,tt),T.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),Q=D.createFramebuffer(),B=D.createFramebuffer(),k=new c0(D),H=new Uv,q=new Zv(D,tt,x,H,T,he,k),se=new r0(L),oe=new fp(D),ge=new Zg(D,oe),$=new o0(D,oe,k,ge),J=new d0(D,$,oe,ge,k),I=new h0(D,T,q),Pe=new jg(H),le=new Fv(L,se,tt,T,ge,Pe),Te=new ix(L,H),de=new Ov,ce=new Vv(tt),Be=new Kg(L,se,x,J,p,l),Le=new Yv(L,J,T),te=new sx(D,k,T,x),re=new Jg(D,tt,k),Z=new l0(D,tt,k),k.programs=le.programs,L.capabilities=T,L.extensions=tt,L.properties=H,L.renderLists=de,L.shadowMap=Le,L.state=x,L.info=k}we(),v!==nn&&(A=new f0(v,t.width,t.height,o,i,s));const be=new tx(L,D);this.xr=be,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(j,ae,!1))},this.getSize=function(M){return M.set(j,ae)},this.setSize=function(M,F,W=!0){if(be.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ae=F,t.width=Math.floor(M*ie),t.height=Math.floor(F*ie),W===!0&&(t.style.width=M+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(j*ie,ae*ie).floor()},this.setDrawingBufferSize=function(M,F,W){j=M,ae=F,ie=W,t.width=Math.floor(M*W),t.height=Math.floor(F*W),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(v===nn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ve)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,F,W,z){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,F,W,z),x.viewport(ve.copy(Ie).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(_t)},this.setScissor=function(M,F,W,z){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,F,W,z),x.scissor(Me.copy(_t).multiplyScalar(ie).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){x.setScissorTest(qe=M)},this.setOpaqueSort=function(M){Fe=M},this.setTransparentSort=function(M){ke=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,W=!0){let z=0;if(M){let G=!1;if(ee!==null){const me=ee.texture.format;G=m.has(me)}if(G){const me=ee.texture.type,ye=g.has(me),pe=Be.getClearColor(),Se=Be.getClearAlpha(),Ae=pe.r,ze=pe.g,Ve=pe.b;ye?(b[0]=Ae,b[1]=ze,b[2]=Ve,b[3]=Se,D.clearBufferuiv(D.COLOR,0,b)):(E[0]=Ae,E[1]=ze,E[2]=Ve,E[3]=Se,D.clearBufferiv(D.COLOR,0,E))}else z|=D.COLOR_BUFFER_BIT}F&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Be.dispose(),de.dispose(),ce.dispose(),H.dispose(),se.dispose(),J.dispose(),ge.dispose(),te.dispose(),le.dispose(),be.dispose(),be.removeEventListener("sessionstart",ec),be.removeEventListener("sessionend",tc),xi.stop()};function vt(M){M.preventDefault(),_a("WebGLRenderer: Context Lost."),P=!0}function lt(){_a("WebGLRenderer: Context Restored."),P=!1;const M=k.autoReset,F=Le.enabled,W=Le.autoUpdate,z=Le.needsUpdate,G=Le.type;we(),k.autoReset=M,Le.enabled=F,Le.autoUpdate=W,Le.needsUpdate=z,Le.type=G}function Mn(M){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bn(M){const F=M.target;F.removeEventListener("dispose",bn),ad(F)}function ad(M){od(M),H.remove(M)}function od(M){const F=H.get(M).programs;F!==void 0&&(F.forEach(function(W){le.releaseProgram(W)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,W,z,G,me){F===null&&(F=Dt);const ye=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=hd(M,F,W,z,G);x.setMaterial(z,ye);let Se=W.index,Ae=1;if(z.wireframe===!0){if(Se=$.getWireframeAttribute(W),Se===void 0)return;Ae=2}const ze=W.drawRange,Ve=W.attributes.position;let Re=ze.start*Ae,nt=(ze.start+ze.count)*Ae;me!==null&&(Re=Math.max(Re,me.start*Ae),nt=Math.min(nt,(me.start+me.count)*Ae)),Se!==null?(Re=Math.max(Re,0),nt=Math.min(nt,Se.count)):Ve!=null&&(Re=Math.max(Re,0),nt=Math.min(nt,Ve.count));const yt=nt-Re;if(yt<0||yt===1/0)return;ge.setup(G,z,pe,W,Se);let xt,at=re;if(Se!==null&&(xt=oe.get(Se),at=Z,at.setIndex(xt)),G.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*St()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(G.isLine){let Nt=z.linewidth;Nt===void 0&&(Nt=1),x.setLineWidth(Nt*St()),G.isLineSegments?at.setMode(D.LINES):G.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else G.isPoints?at.setMode(D.POINTS):G.isSprite&&at.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Nt=G._multiDrawStarts,_e=G._multiDrawCounts,Qt=G._multiDrawCount,Ze=Se?oe.get(Se).bytesPerElement:1,rn=H.get(z).currentProgram.getUniforms();for(let Sn=0;Sn<Qt;Sn++)rn.setValue(D,"_gl_DrawID",Sn),at.render(Nt[Sn]/Ze,_e[Sn])}else if(G.isInstancedMesh)at.renderInstances(Re,yt,G.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Nt);at.renderInstances(Re,yt,_e)}else at.render(Re,yt)};function jl(M,F,W){M.transparent===!0&&M.side===Pn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,wr(M,F,W),M.side=mi,M.needsUpdate=!0,wr(M,F,W),M.side=Pn):wr(M,F,W)}this.compile=function(M,F,W=null){W===null&&(W=M),S=ce.get(W),S.init(F),_.push(S),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),M!==W&&M.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights();const z=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const pe=me[ye];jl(pe,W,G),z.add(pe)}else jl(me,W,G),z.add(me)}),S=_.pop(),z},this.compileAsync=function(M,F,W=null){const z=this.compile(M,F,W);return new Promise(G=>{function me(){if(z.forEach(function(ye){H.get(ye).currentProgram.isReady()&&z.delete(ye)}),z.size===0){G(M);return}setTimeout(me,10)}tt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ia=null;function ld(M){Ia&&Ia(M)}function ec(){xi.stop()}function tc(){xi.start()}const xi=new Xh;xi.setAnimationLoop(ld),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(M){Ia=M,be.setAnimationLoop(M),M===null?xi.stop():xi.start()},be.addEventListener("sessionstart",ec),be.addEventListener("sessionend",tc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(M,F);const W=be.enabled===!0&&be.isPresenting===!0,z=A!==null&&(ee===null||W)&&A.begin(L,ee);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,F,ee),S=ce.get(M,_.length),S.init(F),S.state.textureUnits=q.getTextureUnits(),_.push(S),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),rt.setFromProjectionMatrix(bt,Ln,F.reversedDepth),Ke=this.localClippingEnabled,je=Pe.init(this.clippingPlanes,Ke),w=de.get(M,R.length),w.init(),R.push(w),be.enabled===!0&&be.isPresenting===!0){const ye=L.xr.getDepthSensingMesh();ye!==null&&La(ye,F,-1/0,L.sortObjects)}La(M,F,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(Fe,ke,F.reversedDepth),gt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,gt&&Be.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Pe.beginShadows();const G=S.state.shadowsArray;if(Le.render(G,M,F),je===!0&&Pe.endShadows(),(z&&A.hasRenderPass())===!1){const ye=w.opaque,pe=w.transmissive;if(S.setupLights(),F.isArrayCamera){const Se=F.cameras;if(pe.length>0)for(let Ae=0,ze=Se.length;Ae<ze;Ae++){const Ve=Se[Ae];ic(ye,pe,M,Ve)}gt&&Be.render(M);for(let Ae=0,ze=Se.length;Ae<ze;Ae++){const Ve=Se[Ae];nc(w,M,Ve,Ve.viewport)}}else pe.length>0&&ic(ye,pe,M,F),gt&&Be.render(M),nc(w,M,F)}ee!==null&&V===0&&(q.updateMultisampleRenderTarget(ee),q.updateRenderTargetMipmap(ee)),z&&A.end(L),M.isScene===!0&&M.onAfterRender(L,M,F),ge.resetDefaultState(),ne=-1,fe=null,_.pop(),_.length>0?(S=_[_.length-1],q.setTextureUnits(S.state.textureUnits),je===!0&&Pe.setGlobalState(L.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,O!==null&&O.renderEnd()};function La(M,F,W,z){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||rt.intersectsSprite(M)){z&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);const ye=J.update(M),pe=M.material;pe.visible&&w.push(M,ye,pe,W,Rt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||rt.intersectsObject(M))){const ye=J.update(M),pe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Rt.copy(ye.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(pe)){const Se=ye.groups;for(let Ae=0,ze=Se.length;Ae<ze;Ae++){const Ve=Se[Ae],Re=pe[Ve.materialIndex];Re&&Re.visible&&w.push(M,ye,Re,W,Rt.z,Ve)}}else pe.visible&&w.push(M,ye,pe,W,Rt.z,null)}}const me=M.children;for(let ye=0,pe=me.length;ye<pe;ye++)La(me[ye],F,W,z)}function nc(M,F,W,z){const{opaque:G,transmissive:me,transparent:ye}=M;S.setupLightsView(W),je===!0&&Pe.setGlobalState(L.clippingPlanes,W),z&&x.viewport(ve.copy(z)),G.length>0&&Er(G,F,W),me.length>0&&Er(me,F,W),ye.length>0&&Er(ye,F,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ic(M,F,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[z.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[z.id]=new Jt(1,1,{generateMipmaps:!0,type:Re?sn:nn,minFilter:di,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const me=S.state.transmissionRenderTarget[z.id],ye=z.viewport||ve;me.setSize(ye.z*L.transmissionResolutionScale,ye.w*L.transmissionResolutionScale);const pe=L.getRenderTarget(),Se=L.getActiveCubeFace(),Ae=L.getActiveMipmapLevel();L.setRenderTarget(me),L.getClearColor(mt),Qe=L.getClearAlpha(),Qe<1&&L.setClearColor(16777215,.5),L.clear(),gt&&Be.render(W);const ze=L.toneMapping;L.toneMapping=Fn;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),S.setupLightsView(z),je===!0&&Pe.setGlobalState(L.clippingPlanes,z),Er(M,W,z),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let nt=0,yt=F.length;nt<yt;nt++){const xt=F[nt],{object:at,geometry:Nt,material:_e,group:Qt}=xt;if(_e.side===Pn&&at.layers.test(z.layers)){const Ze=_e.side;_e.side=Zt,_e.needsUpdate=!0,sc(at,W,z,Nt,_e,Qt),_e.side=Ze,_e.needsUpdate=!0,Re=!0}}Re===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}L.setRenderTarget(pe,Se,Ae),L.setClearColor(mt,Qe),Ve!==void 0&&(z.viewport=Ve),L.toneMapping=ze}function Er(M,F,W){const z=F.isScene===!0?F.overrideMaterial:null;for(let G=0,me=M.length;G<me;G++){const ye=M[G],{object:pe,geometry:Se,group:Ae}=ye;let ze=ye.material;ze.allowOverride===!0&&z!==null&&(ze=z),pe.layers.test(W.layers)&&sc(pe,F,W,Se,ze,Ae)}}function sc(M,F,W,z,G,me){M.onBeforeRender(L,F,W,z,G,me),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(L,F,W,z,M,me),G.transparent===!0&&G.side===Pn&&G.forceSinglePass===!1?(G.side=Zt,G.needsUpdate=!0,L.renderBufferDirect(W,F,z,G,M,me),G.side=mi,G.needsUpdate=!0,L.renderBufferDirect(W,F,z,G,M,me),G.side=Pn):L.renderBufferDirect(W,F,z,G,M,me),M.onAfterRender(L,F,W,z,G,me)}function wr(M,F,W){F.isScene!==!0&&(F=Dt);const z=H.get(M),G=S.state.lights,me=S.state.shadowsArray,ye=G.state.version,pe=le.getParameters(M,G.state,me,F,W,S.state.lightProbeGridArray),Se=le.getProgramCacheKey(pe);let Ae=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;const ze=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=se.get(M.envMap||z.environment,ze),z.envMapRotation=z.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",bn),Ae=new Map,z.programs=Ae);let Ve=Ae.get(Se);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===ye)return ac(M,pe),Ve}else pe.uniforms=le.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,W,pe),M.onBeforeCompile(pe,L),Ve=le.acquireProgram(pe,Se),Ae.set(Se,Ve),z.uniforms=pe.uniforms;const Re=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=Pe.uniform),ac(M,pe),z.needsLights=ud(M),z.lightsStateVersion=ye,z.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=S.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function rc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=da.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ac(M,F){const W=H.get(M);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function cd(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let W=0,z=M.length;W<z;W++){const G=M[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function hd(M,F,W,z,G){F.isScene!==!0&&(F=Dt),q.resetTextureUnits();const me=F.fog,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,pe=ee===null?L.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ae=se.get(z.envMap||ye,Se),ze=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,yt=!!W.morphAttributes.color;let xt=Fn;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(xt=L.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Nt=at!==void 0?at.length:0,_e=H.get(z),Qt=S.state.lights;if(je===!0&&(Ke===!0||M!==fe)){const ct=M===fe&&z.id===ne;Pe.setState(z,M,ct)}let Ze=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Qt.state.version||_e.outputColorSpace!==pe||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==Ae||z.fog===!0&&_e.fog!==me||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Pe.numPlanes||_e.numIntersection!==Pe.numIntersection)||_e.vertexAlphas!==ze||_e.vertexTangents!==Ve||_e.morphTargets!==Re||_e.morphNormals!==nt||_e.morphColors!==yt||_e.toneMapping!==xt||_e.morphTargetsCount!==Nt||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,_e.__version=z.version);let rn=_e.currentProgram;Ze===!0&&(rn=wr(z,F,G),O&&z.isNodeMaterial&&O.onUpdateProgram(z,rn,_e));let Sn=!1,Jn=!1,ps=!1;const ot=rn.getUniforms(),Mt=_e.uniforms;if(x.useProgram(rn.program)&&(Sn=!0,Jn=!0,ps=!0),z.id!==ne&&(ne=z.id,Jn=!0),_e.needsLights){const ct=cd(S.state.lightProbeGridArray,G);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,Jn=!0)}if(Sn||fe!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",M.projectionMatrix),ot.setValue(D,"viewMatrix",M.matrixWorldInverse);const jn=ot.map.cameraPosition;jn!==void 0&&jn.setValue(D,wt.setFromMatrixPosition(M.matrixWorld)),T.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),fe!==M&&(fe=M,Jn=!0,ps=!0)}if(_e.needsLights&&(Qt.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",Qt.state.directionalShadowMap,q),Qt.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",Qt.state.spotShadowMap,q),Qt.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",Qt.state.pointShadowMap,q)),G.isSkinnedMesh){ot.setOptional(D,G,"bindMatrix"),ot.setOptional(D,G,"bindMatrixInverse");const ct=G.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(D,"boneTexture",ct.boneTexture,q))}G.isBatchedMesh&&(ot.setOptional(D,G,"batchingTexture"),ot.setValue(D,"batchingTexture",G._matricesTexture,q),ot.setOptional(D,G,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",G._indirectTexture,q),ot.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",G._colorsTexture,q));const Qn=W.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&I.update(G,W,rn),(Jn||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,ot.setValue(D,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Mt.envMapIntensity.value=F.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=ax()),Jn){if(ot.setValue(D,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&dd(Mt,ps),me&&z.fog===!0&&Te.refreshFogUniforms(Mt,me),Te.refreshMaterialUniforms(Mt,z,ie,ae,S.state.transmissionRenderTarget[M.id]),_e.needsLights&&_e.lightProbeGrid){const ct=_e.lightProbeGrid;Mt.probesSH.value=ct.texture,Mt.probesMin.value.copy(ct.boundingBox.min),Mt.probesMax.value.copy(ct.boundingBox.max),Mt.probesResolution.value.copy(ct.resolution)}da.upload(D,rc(_e),Mt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(da.upload(D,rc(_e),Mt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(D,"center",G.center),ot.setValue(D,"modelViewMatrix",G.modelViewMatrix),ot.setValue(D,"normalMatrix",G.normalMatrix),ot.setValue(D,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const ct=z.uniformsGroups;for(let jn=0,ms=ct.length;jn<ms;jn++){const oc=ct[jn];te.update(oc,rn),te.bind(oc,rn)}}return rn}function dd(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function ud(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(M,F,W){const z=H.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=F,H.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const W=H.get(M);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,W=0){ee=M,K=F,V=W;let z=null,G=!1,me=!1;if(M){const pe=H.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),ve.copy(M.viewport),Me.copy(M.scissor),Je=M.scissorTest,x.viewport(ve),x.scissor(Me),x.setScissorTest(Je),ne=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(pe.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ze=M.depthTexture;if(pe.__boundDepthTexture!==ze){if(ze!==null&&H.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Ae=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?z=Ae[F][W]:z=Ae[F],G=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?z=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?z=Ae[W]:z=Ae,ve.copy(M.viewport),Me.copy(M.scissor),Je=M.scissorTest}else ve.copy(Ie).multiplyScalar(ie).floor(),Me.copy(_t).multiplyScalar(ie).floor(),Je=qe;if(W!==0&&(z=Y),x.bindFramebuffer(D.FRAMEBUFFER,z)&&x.drawBuffers(M,z),x.viewport(ve),x.scissor(Me),x.setScissorTest(Je),G){const pe=H.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,W)}else if(me){const pe=F;for(let Se=0;Se<M.textures.length;Se++){const Ae=H.get(M.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,W,pe)}}else if(M!==null&&W!==0){const pe=H.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,W)}ne=-1},this.readRenderTargetPixels=function(M,F,W,z,G,me,ye,pe=0){if(!(M&&M.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){x.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ae=M.textures[pe],ze=Ae.format,Ve=Ae.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!T.textureFormatReadable(ze)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Ve)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-z&&W>=0&&W<=M.height-G&&D.readPixels(F,W,z,G,he.convert(ze),he.convert(Ve),me)}finally{const Ae=ee!==null?H.get(ee).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,F,W,z,G,me,ye,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se)if(F>=0&&F<=M.width-z&&W>=0&&W<=M.height-G){x.bindFramebuffer(D.FRAMEBUFFER,Se);const Ae=M.textures[pe],ze=Ae.format,Ve=Ae.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!T.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(F,W,z,G,he.convert(ze),he.convert(Ve),0);const nt=ee!==null?H.get(ee).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,nt);const yt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await bf(D,yt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(Re),D.deleteSync(yt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,W=0){const z=Math.pow(2,-W),G=Math.floor(M.image.width*z),me=Math.floor(M.image.height*z),ye=F!==null?F.x:0,pe=F!==null?F.y:0;q.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ye,pe,G,me),x.unbindTexture()},this.copyTextureToTexture=function(M,F,W=null,z=null,G=0,me=0){let ye,pe,Se,Ae,ze,Ve,Re,nt,yt;const xt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(W!==null)ye=W.max.x-W.min.x,pe=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,ze=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Mt=Math.pow(2,-G);ye=Math.floor(xt.width*Mt),pe=Math.floor(xt.height*Mt),M.isDataArrayTexture?Se=xt.depth:M.isData3DTexture?Se=Math.floor(xt.depth*Mt):Se=1,Ae=0,ze=0,Ve=0}z!==null?(Re=z.x,nt=z.y,yt=z.z):(Re=0,nt=0,yt=0);const at=he.convert(F.format),Nt=he.convert(F.type);let _e;F.isData3DTexture?(q.setTexture3D(F,0),_e=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),_e=D.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),_e=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Qt=x.getParameter(D.UNPACK_ROW_LENGTH),Ze=x.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=x.getParameter(D.UNPACK_SKIP_PIXELS),Sn=x.getParameter(D.UNPACK_SKIP_ROWS),Jn=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),x.pixelStorei(D.UNPACK_SKIP_ROWS,ze),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const ps=M.isDataArrayTexture||M.isData3DTexture,ot=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Mt=H.get(M),Qn=H.get(F),ct=H.get(Mt.__renderTarget),jn=H.get(Qn.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,ct.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let ms=0;ms<Se;ms++)ps&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(M).__webglTexture,G,Ve+ms),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,H.get(F).__webglTexture,me,yt+ms)),D.blitFramebuffer(Ae,ze,ye,pe,Re,nt,ye,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||H.has(M)){const Mt=H.get(M),Qn=H.get(F);x.bindFramebuffer(D.READ_FRAMEBUFFER,Q),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let ct=0;ct<Se;ct++)ps?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,G,Ve+ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,G),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qn.__webglTexture,me,yt+ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qn.__webglTexture,me),G!==0?D.blitFramebuffer(Ae,ze,ye,pe,Re,nt,ye,pe,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(_e,me,Re,nt,yt+ct,Ae,ze,ye,pe):D.copyTexSubImage2D(_e,me,Re,nt,Ae,ze,ye,pe);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(_e,me,Re,nt,yt,ye,pe,Se,at,Nt,xt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,me,Re,nt,yt,ye,pe,Se,at,xt.data):D.texSubImage3D(_e,me,Re,nt,yt,ye,pe,Se,at,Nt,xt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,Re,nt,ye,pe,at,Nt,xt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,Re,nt,xt.width,xt.height,at,xt.data):D.texSubImage2D(D.TEXTURE_2D,me,Re,nt,ye,pe,at,Nt,xt);x.pixelStorei(D.UNPACK_ROW_LENGTH,Qt),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),x.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),x.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Jn),me===0&&F.generateMipmaps&&D.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){K=0,V=0,ee=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const zi=class zi{constructor(){}static getInstance(){return zi.instance||(zi.instance=new zi),zi.instance}get tileSize(){return U.config.render.tileWidth}get tileWidth(){return this.tileSize}get tileHeight(){return this.tileSize}worldToScreen(e,t,n=0){return{x:t*this.tileSize,y:e*this.tileSize-n}}tileCenter(e,t,n=0){return this.worldToScreen(e+.5,t+.5,n)}screenToWorld(e,t){return{col:e/this.tileSize,row:t/this.tileSize}}};C(zi,"instance");let bl=zi;const Yt=bl.getInstance();let ea=null;function lx(){if(!ea){const r=document.createElement("canvas");r.width=16,r.height=16;const e=r.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(8,8,7,0,Math.PI*2),e.fill(),ea=new Sr(r),ea.colorSpace=Pt}return ea}const Gi=class Gi{constructor(){C(this,"items",[])}static getInstance(){return Gi.instance||(Gi.instance=new Gi),Gi.instance}get count(){return this.items.length}burst(e,t,n,i,s){const a=U.config.render.maxParticles,o=s?.speed??.08,l=s?.life??600,c=s?.size??4;for(let d=0;d<i;d++){const u=Math.PI*2*d/i+Math.random()*.4,h=o*(.6+Math.random()*.8);this.items.push({x:e,y:t,vx:Math.cos(u)*h,vy:Math.sin(u)*h,life:l,maxLife:l,color:n,size:c,view:null})}for(;this.items.length>a;)this.removeAt(0)}update(e){const t=[];for(const n of this.items)n.life-=e,n.x+=n.vx*e,n.y+=n.vy*e,n.vy+=8e-5*e,n.life>0?t.push(n):this.disposeView(n);this.items=t}syncTo(e){const t=Yt.tileSize;for(const n of this.items){if(!n.view){const s=n.size*2/t;n.view=new qn(new Rn({map:lx(),color:new Oe(n.color),transparent:!0,depthTest:!0,depthWrite:!1})),n.view.scale.set(s,s,1),n.view.renderOrder=3}n.view.parent!==e&&e.add(n.view);const i=1-n.life/n.maxLife;n.view.position.set(n.x/t,.5+i*.6,n.y/t),n.view.material.opacity=Math.max(0,Math.min(1,n.life/n.maxLife))}}clear(){for(const e of this.items)this.disposeView(e);this.items=[]}removeAt(e){const t=this.items[e];t&&(this.disposeView(t),this.items.splice(e,1))}disposeView(e){e.view&&(e.view.parent?.remove(e.view),e.view.material.dispose(),e.view=null)}};C(Gi,"instance");let _r=Gi;const ph=new Map;function cx(r,e,t){const n=`${r}|${e}|${t}`;let i=ph.get(n);if(!i){const s=`bold ${t*2}px "Microsoft YaHei", sans-serif`,a=document.createElement("canvas").getContext("2d");a.font=s;const o=Math.max(8,Math.ceil(a.measureText(r).width)+20),l=Math.ceil(t*2+18),c=document.createElement("canvas");c.width=o,c.height=l;const d=c.getContext("2d");d.font=s,d.textAlign="center",d.textBaseline="middle",d.lineWidth=6,d.strokeStyle="#000000",d.strokeText(r,o/2,l/2),d.fillStyle=e,d.fillText(r,o/2,l/2),i=new Sr(c),i.colorSpace=Pt,ph.set(n,i)}return i}let ta=null;function hx(){if(!ta){const r=document.createElement("canvas");r.width=16,r.height=16;const e=r.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(8,8,7,0,Math.PI*2),e.fill(),ta=new Sr(r),ta.colorSpace=Pt}return ta}const Hi=class Hi{constructor(){C(this,"particles",[])}static getInstance(){return Hi.instance||(Hi.instance=new Hi),Hi.instance}floatText(e,t,n,i="#ffffff"){const s=Yt.tileCenter(t,e);this.push({x:s.x,y:s.y-30,vx:0,vy:-.03,life:1100,maxLife:1100,color:i,size:15,type:"text",text:n,opacity:1})}sparkle(e,t,n="#ffdd44",i=8){const s=Yt.tileCenter(t,e);_r.getInstance().burst(s.x,s.y,n,i,{speed:.08,life:600,size:4})}push(e){const t=Math.max(50,Math.floor(U.config.render.maxParticles/2));this.particles.length>=t&&this.destroyView(this.particles.shift());const n=Yt.tileSize;let i;if(e.type==="text"&&e.text){const s=cx(e.text,e.color,e.size),a=s.image,o=e.size*2/n;i=new qn(new Rn({map:s,transparent:!0,depthTest:!0,depthWrite:!1})),i.scale.set(o*(a.width/a.height),o,1)}else{const s=e.size*2/n;i=new qn(new Rn({map:hx(),color:new Oe(e.color),transparent:!0,depthTest:!0,depthWrite:!1})),i.scale.set(s,s,1)}i.renderOrder=4,this.particles.push({...e,view:i})}update(e){for(const t of this.particles)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.type==="circle"&&(t.vy+=1e-4*e),t.opacity=Math.max(0,Math.min(1,t.life/t.maxLife)),t.life<=0&&this.destroyView(t);this.particles=this.particles.filter(t=>t.life>0)}syncTo(e){const t=Yt.tileSize;for(const n of this.particles){n.view.parent!==e&&e.add(n.view);const i=1-n.life/n.maxLife,s=n.type==="text"?1.2+i*.9:.6+i*.4;n.view.position.set(n.x/t,s,n.y/t),n.view.material.opacity=n.opacity}}destroyView(e){e.view.parent?.remove(e.view),e.view.material.dispose()}clear(){for(const e of this.particles)this.destroyView(e);this.particles=[]}};C(Hi,"instance");let hn=Hi;const Vi=class Vi{constructor(){}static getInstance(){return Vi.instance||(Vi.instance=new Vi),Vi.instance}goldForFloor(e){const t=U.config.chestRewards.goldBands,n=t.find(i=>e>=i.minFloor&&e<=i.maxFloor)??t[t.length-1];return xe.randInt(n.min,n.max)}open(e,t){const n=Ee.getInstance(),i=Ge.getInstance(),s=U.config.chestRewards,a=e.chestTier==="grand",o=n.state.currentFloor,l=Math.round(this.goldForFloor(o)*(a?2.5:1)),c={gold:l,equipment:!1,equip:null,potion:null};if(s.goldAlways&&l>0&&n.gainGold(l),a||xe.chance(s.equipmentChance)){const d=Un.getInstance().generate(a?"boss":"chest",{floorId:o});n.addEquipment(d),c.equipment=!0,c.equip=d}if(xe.chance(s.potionChance)){const d=this.potionTierForFloor(o);d&&(n.addPotion(d,1),c.potion=d)}return i.markOpened(e.id),e.x,e.y,hn.getInstance().sparkle(e.x,e.y,"#ffdd44",10),X.emit("chestOpened",{entityId:e.id,roomType:t}),c}potionTierForFloor(e){return U.potions.potions.filter(n=>e>=n.minFloor&&e<=n.maxFloor).sort((n,i)=>i.healPct-n.healPct)[0]?.tier??null}potionTierLower(e,t){const n=U.potions.potions.filter(s=>e>=s.minFloor&&e<=s.maxFloor).sort((s,a)=>a.healPct-s.healPct),i=Math.min(t,n.length-1);return n[i]?.tier??null}};C(Vi,"instance");let yr=Vi;const Wi=class Wi{constructor(){}static getInstance(){return Wi.instance||(Wi.instance=new Wi),Wi.instance}battle(e){const t=Ee.getInstance(),n=Ge.getInstance(),i=U.getMonster(e.monsterId??""),s=t.state.currentFloor;if(!i)throw new Error(`未知怪物: ${e.monsterId}`);const a=Kn.getInstance().monsterStats(i,s,e.kind==="boss"?!1:!!e.isElite),o=U.config.battle,l=t.stats(),c=[];let d=a.hp,u=0,h=0,f=null;const p=(b,E)=>c.push({turn:h,text:b,kind:E});for(p(`遭遇 ${a.name}！`,"system");t.state.hp>0&&d>0&&h<o.maxTurns;){h++;let b=0;if(xe.chance((a.isBoss,l.critRate/100))){const E=Math.max(o.minDamage,Math.round((l.attack-a.defense)*(1+(Math.random()*2-1)*o.damageJitter)));b=Math.round(E*o.critMultiplier)+l.fireDamage,p(`暴击！对${a.name}造成 ${b} 点伤害`,"player")}else b=Math.max(o.minDamage,Math.round((l.attack-a.defense)*(1+(Math.random()*2-1)*o.damageJitter)))+l.fireDamage,p(`对${a.name}造成 ${b} 点伤害${l.fireDamage>0?`（业火+${l.fireDamage}）`:""}`,"player");if(a.isBoss&&(b=Math.round(b*(1+l.bossDamage/100))),d-=b,l.lifesteal>0&&t.state.hp<t.maxHp){const E=Math.round(b*l.lifesteal/100);E>0&&(t.heal(E),p(`嗜血回复 ${E} 生命`,"player"))}if(d<=0)break;if(xe.chance(l.dodgeRate/100))p(`闪避了${a.name}的攻击`,"player");else{const E=Math.max(o.minDamage,Math.round((a.attack-l.defense)*(1+(Math.random()*2-1)*o.damageJitter)));t.damage(E),u+=E,p(`${a.name}对你造成 ${E} 点伤害`,"monster")}if(t.state.hp>0&&t.state.hp<t.maxHp*.3){const E=t.bestPotionFor(t.maxHp-t.state.hp);if(E){const y=U.getPotion(E);t.usePotion(E),f=y.name,p(`自动饮下${y.name}`,"system")}}}const v=h>=o.maxTurns,m=d<=0||v&&d/a.hp<t.state.hp/t.maxHp,g={win:m,log:c,damageTaken:u,turns:h,expGained:0,goldGained:0,monsterName:a.name,isBoss:a.isBoss,isElite:a.isElite};if(m){g.expGained=a.exp,g.goldGained=a.gold,t.gainExp(a.exp),t.gainGold(a.gold),n.markDefeated(e.id),p(`击败${a.name}！获得 ${a.exp} 经验、${a.gold} 金币`,"reward");const b=U.config.monsterDrops;if(a.isBoss||xe.chance(b.equipmentChance)){const E=Un.getInstance().generate(a.isBoss?"boss":"monster",{floorId:s});t.addEquipment(E),p(`掉落了 ${E.name}`,"reward")}if(!a.isBoss&&xe.chance(b.potionChance)){const E=yr.getInstance().potionTierLower(s,xe.randInt(1,2));E&&(t.addPotion(E,1),p(`掉落了 ${U.getPotion(E)?.name}`,"reward"))}f&&p(`战斗中消耗了${f}`,"system"),X.emit("monsterDefeated",{entityId:e.id,name:a.name,isElite:a.isElite,isBoss:a.isBoss}),a.isBoss&&X.emit("bossDefeated",{floor:s,name:a.name})}else t.state.hp<=0?(p(`你被${a.name}击败了……`,"monster"),X.emit("playerDied",{cause:a.name})):p("战斗胶着，你被迫撤退","system");return X.emit("battleEnded",{result:g}),g}forecast(e){const t=Ee.getInstance(),n=U.getMonster(e.monsterId??"");if(!n)return{winnable:!1,estDamage:0};const i=Kn.getInstance().monsterStats(n,t.state.currentFloor,!!e.isElite),s=t.stats(),a=Math.max(1,s.attack-i.defense)+s.fireDamage,o=Math.max(1,i.attack-s.defense),c=Math.ceil(i.hp/a)*o*(1-s.dodgeRate/100);return{winnable:c<t.state.hp,estDamage:Math.round(c)}}};C(Wi,"instance");let Mr=Wi;const qi=class qi{constructor(){C(this,"camX",0);C(this,"camY",0);C(this,"targetX",0);C(this,"targetY",0);C(this,"snapped",!1)}static getInstance(){return qi.instance||(qi.instance=new qi),qi.instance}get x(){return this.camX}get y(){return this.camY}snapToPlayer(){const e=Ee.getInstance().pos,t=Yt.tileCenter(e.y,e.x);this.camX=t.x,this.camY=t.y,this.targetX=t.x,this.targetY=t.y,this.snapped=!0}roomScreenBounds(e){const t=U.config.heights,n=Math.max(t.wallByRoom[e.type]??60,t.corridorWall),i=Yt.tileSize,s=U.config.camera.roomPaddingPx;return{minX:e.x*i-s,maxX:(e.x+e.width)*i+s,minY:e.y*i-n-s,maxY:(e.y+e.height)*i+s}}update(e){const t=Ee.getInstance(),n=Ge.getInstance(),i=t.pos,s=Yt.tileCenter(i.y,i.x);this.targetX=s.x,this.targetY=s.y;const a=document.getElementById("game-canvas"),o=(a?.clientWidth??window.innerWidth)/2,l=(a?.clientHeight??window.innerHeight)/2,c=n.getRoomAt(i.x,i.y);if(c){const d=this.roomScreenBounds(c),u=d.maxX-d.minX,h=d.maxY-d.minY;if(u<=o*2&&h<=l*2)this.targetX=(d.minX+d.maxX)/2,this.targetY=(d.minY+d.maxY)/2;else{const f=(d.minX+d.maxX)/2,p=(d.minY+d.maxY)/2;u<=o*2?this.targetX=f:this.targetX=vn.clamp(this.targetX,d.minX+o,d.maxX-o),h<=l*2?this.targetY=p:this.targetY=vn.clamp(this.targetY,d.minY+l,d.maxY-l)}}else{const d=n.currentFloor;if(d){const u=this.roomScreenBounds({x:0,y:0,width:d.width,height:d.height,type:"combat"});this.targetX=vn.clamp(this.targetX,u.minX+o,u.maxX-o),this.targetY=vn.clamp(this.targetY,u.minY+l,u.maxY-l)}}if(!this.snapped)this.camX=this.targetX,this.camY=this.targetY,this.snapped=!0;else{const d=1-Math.pow(1-U.config.camera.lerp,e/16.67);this.camX=vn.lerp(this.camX,this.targetX,d),this.camY=vn.lerp(this.camY,this.targetY,d)}}};C(qi,"instance");let un=qi;const $i=class $i{constructor(e){C(this,"el");C(this,"onConfirm",null);$i.instance||($i.instance=this,this.el=document.createElement("div"),this.el.className="overlay-panel hidden confirm-panel",e.appendChild(this.el),window.addEventListener("keydown",t=>{t.key==="Enter"&&!this.el.classList.contains("hidden")&&this.confirm(),t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.cancel()}))}static getInstance(){if(!$i.instance)throw new Error("ConfirmDialog 尚未初始化（需在 GameUI.build 中构造）");return $i.instance}ask(e,t,n,i="✔ 确定",s="✖ 取消"){this.onConfirm=n,We.pushModal(),this.el.classList.remove("hidden"),this.el.innerHTML=`
      <div class="dialog-box confirm-box">
        <div class="dialog-name">${e}</div>
        <div class="dialog-text">${t}</div>
        <div class="dim confirm-hint">（Enter 确认 · Esc 取消）</div>
        <div class="dialog-actions">
          <button id="confirm-cancel">${s}</button>
          <button id="confirm-ok" class="btn-primary">${i}</button>
        </div>
      </div>
    `,this.el.querySelector("#confirm-ok").addEventListener("click",()=>this.confirm()),this.el.querySelector("#confirm-cancel").addEventListener("click",()=>this.cancel()),this.el.querySelector("#confirm-ok").focus()}confirm(){const e=this.onConfirm;this.close(),e?.()}cancel(){this.close()}close(){this.el.classList.contains("hidden")||(this.onConfirm=null,this.el.classList.add("hidden"),We.popModal())}};C($i,"instance");let Sa=$i;const Xi=class Xi{constructor(){C(this,"lastRoomId","");C(this,"pathQueue",[]);C(this,"moving",!1);C(this,"moveBlockMs",0);C(this,"pendingInteract",null);X.on("playerDied",()=>this.handleDeath())}static getInstance(){return Xi.instance||(Xi.instance=new Xi),Xi.instance}get inputBlocked(){return!We.started||We.paused||We.modalOpen||!Ee.getInstance().isAlive}tryMove(e,t){if(this.inputBlocked||this.moveBlockMs>0)return;this.pathQueue=[];const n=Ee.getInstance(),i=n.state.x+e,s=n.state.y+t,a=Ge.getInstance(),o=a.getEntityAt(i,s);if(o){this.interact(o),this.startMoveBuffer();return}if(a.isGateLocked(i,s)){X.emit("notification",{message:"铁门紧闭——击败 Boss 后才会开启",type:"warning",icon:"🚪"}),this.startMoveBuffer();return}a.isWalkable(i,s)&&(n.state.x=i,n.state.y=s,X.emit("playerMoved",{x:i,y:s}),this.startMoveBuffer(),this.afterStep())}startMoveBuffer(){this.moveBlockMs=U.config.input.moveBufferMs}moveTo(e,t){if(this.inputBlocked)return;const n=Ge.getInstance();if(!n.inBounds(e,t))return;const i=Ee.getInstance();if(i.state.x===e&&i.state.y===t)return;const s=n.getEntityAt(e,t);if(s){if(Math.abs(i.state.x-e)+Math.abs(i.state.y-t)===1){this.interact(s);return}const o=this.findPath(e,t,{stopAdjacent:!0});o&&(this.pathQueue=o,this.pendingInteract=s);return}if(!n.isWalkable(e,t))return;const a=this.findPath(e,t,{stopAdjacent:!1});a&&a.length>0&&(this.pathQueue=a)}update(e=0){if(this.moveBlockMs>0&&(this.moveBlockMs-=e),this.inputBlocked){this.pathQueue=[];return}if(this.checkRoomEnter(),this.moving||this.pathQueue.length===0||this.moveBlockMs>0)return;const t=this.pathQueue.shift(),n=Ee.getInstance(),i=Ge.getInstance(),s=i.getEntityAt(t.x,t.y);if(s){this.pathQueue=[],this.interact(s);return}if(!i.isWalkable(t.x,t.y)){this.pathQueue=[];return}if(n.state.x=t.x,n.state.y=t.y,X.emit("playerMoved",{x:t.x,y:t.y}),this.startMoveBuffer(),this.afterStep(),this.pathQueue.length===0&&this.pendingInteract){const a=this.pendingInteract;this.pendingInteract=null,i.getEntityAt(a.x,a.y)?.id===a.id&&this.interact(a)}}findPath(e,t,n){const i=Ge.getInstance(),s=i.currentFloor,a=Ee.getInstance();if(!s)return null;const o={x:a.state.x,y:a.state.y},l=(h,f)=>`${h},${f}`,c=new Map([[l(o.x,o.y),null]]),d=[o],u=(h,f)=>n.stopAdjacent?Math.abs(h-e)+Math.abs(f-t)===1:h===e&&f===t;for(;d.length>0;){const h=d.shift();if(u(h.x,h.y)){const f=[];let p=h;for(;p;)f.unshift(p),p=c.get(l(p.x,p.y))??null;return f.shift(),f}for(const[f,p]of[[0,1],[0,-1],[1,0],[-1,0]]){const v=h.x+f,m=h.y+p,g=l(v,m);c.has(g)||i.isWalkable(v,m)&&(i.getEntityAt(v,m)||(c.set(g,h),d.push({x:v,y:m})))}}return null}interact(e){if(this.inputBlocked)return;const t=Ge.getInstance(),n=Ee.getInstance(),i=Sa.getInstance();switch(e.kind){case"monster":case"boss":{const s=U.getMonster(e.monsterId??""),a=s?.name??"敌人",o=e.kind==="boss";i.ask(o?"⚠️ Boss 战":"⚔️ 战斗确认",`确定攻击 <b style="color:${s?.color??"#ff9999"}">${a}</b>${e.isElite?"（精英）":""} 吗？<br/><span class="dim">战败将在楼层起点复活并损失20%金币</span>`,()=>this.doBattle(e),"⚔️ 攻击");break}case"potion":{t.markUsed(e.id);const s=e.potionTier??"crude";n.addPotion(s);const a=U.getPotion(s);hn.getInstance().floatText(e.x,e.y,`+${a?.name??"药水"}`,a?.color??"#ff5a7a"),X.emit("potionPicked",{entityId:e.id,tier:s,name:a?.name??"药水"});break}case"fountain":{if(t.getEntityState(e.id).isUsed===!0){X.emit("notification",{message:"治疗泉已枯竭",type:"info",icon:"💧"});break}const s=U.config.witch,a=s.fountainCostBase+n.state.currentFloor*s.fountainCostPerFloor;if(n.state.gold<a){X.emit("notification",{message:`需要 ${a} 金币才能汲取泉水`,type:"warning",icon:"💰"});break}i.ask("💧 治疗泉",`支付 <b>${a}</b> 金币，恢复全部生命？`,()=>{n.spendGold(a);const o=n.heal(n.maxHp);t.markUsed(e.id),hn.getInstance().floatText(e.x,e.y,`+${o} HP`,"#66ffcc"),X.emit("fountainUsed",{cost:a,healed:o})},"💧 治疗");break}case"chest":{this.doOpenChest(e);break}case"npc":{const s=U.getNpc(e.npcId??"");s&&X.emit("npcTalked",{npcId:s.id,name:s.name});break}case"stair":{const s=e.targetFloor??n.state.currentFloor+1;i.ask("🪜 楼梯",`确定前往<b>第 ${s} 层</b>吗？`,()=>{pi.getInstance().enterFloor(s),un.getInstance().snapToPlayer(),this.afterFloorChange()},"🪜 前往");break}}}doBattle(e){const t=Ee.getInstance(),n=Mr.getInstance().battle(e);n.win?hn.getInstance().floatText(e.x,e.y,`+${n.goldGained}💰`,"#ffdd44"):t.state.hp>0&&hn.getInstance().floatText(t.state.x,t.state.y,"撤退！","#ffaa44")}doOpenChest(e){const n=Ge.getInstance().getRoomAt(e.x,e.y),i=yr.getInstance().open(e,n?.type??"combat");let s=`+${i.gold} 金币`;if(i.potion&&(s+=` +${U.getPotion(i.potion)?.name??"药水"}`),i.equipment&&(s+=" +装备"),hn.getInstance().floatText(e.x,e.y,s,"#ffdd44"),i.gold>0&&X.emit("notification",{message:`获得 ${i.gold} 金币`,type:"success",icon:"💰"}),i.equip){const a=U.equipment.quality[i.equip.quality]?.name;X.emit("notification",{message:`获得 ${i.equip.name}${a?`（${a}）`:""}`,type:"success",icon:"⚔️"})}i.potion&&X.emit("notification",{message:`获得 ${U.getPotion(i.potion)?.name??"药水"}`,type:"success",icon:"🧪"})}afterStep(){this.checkRoomEnter()}afterFloorChange(){this.lastRoomId="",this.checkRoomEnter()}checkRoomEnter(){const e=Ge.getInstance(),t=Ee.getInstance(),n=e.getRoomAt(t.state.x,t.state.y),i=n?.id??"";if(i===this.lastRoomId||(this.lastRoomId=i,!n))return;t.state.currentRoomId=i;const s=U.texts.roomNames?.[n.type]??n.type;if(X.emit("roomEntered",{roomId:i,roomType:n.type,depth:n.depth,name:s}),n.type==="rest"&&e.getEntityState(`rest_${i}`).isUsed!==!0){e.markUsed(`rest_${i}`);const o=t.heal(Math.round(t.maxHp*.3));o>0&&hn.getInstance().floatText(t.state.x,t.state.y,`休整 +${o}`,"#66ff88")}const a=n.entities.find(o=>o.kind==="boss"&&e.isEntityAlive(o));if(a){const o=U.getMonster(a.monsterId??"");X.emit("bossWarning",{floor:n.floorId,name:o?.name??"Boss"})}}handleDeath(){const e=Ee.getInstance(),t=U.config.revive,n=Math.round(e.state.gold*t.goldPenaltyRate),s=Ge.getInstance().currentFloor;s&&(e.state.x=s.entryX,e.state.y=s.entryY),e.spendGold(Math.min(e.state.gold,n)),e.heal(Math.round(e.maxHp*t.hpRestorePct)),this.lastRoomId="",this.checkRoomEnter(),un.getInstance().snapToPlayer(),X.emit("playerRevived",{penaltyGold:n})}restart(){Ee.getInstance().restore({...Ee.getInstance().state,level:1,exp:0,hp:U.config.playerBase.maxHp,baseMaxHp:U.config.playerBase.maxHp,baseAttack:U.config.playerBase.attack,baseDefense:U.config.playerBase.defense,gold:0,keys:0,potions:{crude:0,normal:0,quality:0,strong:0,holy:0},weaponId:null,armorId:null,bag:[]}),pi.getInstance().enterFloor(1,!1),un.getInstance().snapToPlayer(),this.lastRoomId="",this.checkRoomEnter(),X.emit("gameRestarted",{})}};C(Xi,"instance");let Yn=Xi;const Us={player:"#4488ff",enemyElite:"#ff8800",enemyBoss:"#ff0044",chestClosed:"#ffcc00",chestOpened:"#888888",stairDown:"#44ddff"},Yi=class Yi{constructor(){}static getInstance(){return Yi.instance||(Yi.instance=new Yi),Yi.instance}get half(){return Yt.tileSize/2}drawBox(e,t,n,i,s,a,o={}){const l=this.half*s,c=o.pulse?1+.06*o.pulse:1,d=l*c;e.save(),o.alpha!==void 0&&(e.globalAlpha=o.alpha),o.glow&&(e.save(),e.globalAlpha=(o.alpha??1)*.35*(.7+.3*Math.sin(performance.now()/300)),e.fillStyle=o.glow,e.beginPath(),e.ellipse(t,n-i/2,d*1.6,d*1.6+i/2,0,0,Math.PI*2),e.fill(),e.restore()),e.fillStyle=a.left,e.fillRect(t-d,n-d-i,d*2,i),e.fillStyle=a.right,e.fillRect(t-d,n-d,d*2,d*2),e.fillStyle=a.top,e.fillRect(t-d,n-d-i,d*2,d*2),e.lineWidth=2,e.strokeStyle=a.border,e.strokeRect(t-d,n-d-i,d*2,i+d*2),o.label&&(e.font='bold 13px "Microsoft YaHei", sans-serif',e.textAlign="center",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.75)",e.strokeText(o.label,t,n-d-i-8),e.fillStyle=o.labelColor??"#ffffff",e.fillText(o.label,t,n-d-i-8)),e.restore()}drawPaperDoll(e,t,n,i,s){const a=Math.max(16,i),o=a*.16,l=-a*.86,c=l+o*1.15,d=-a*.38,u=a*.16,h=s.body,f=s.head??this.lighten(h,.3),p=s.accent??this.lighten(h,.45),v=s.border??this.darken(h,.45);e.save(),e.translate(t,n),e.lineJoin="round",e.lineWidth=Math.max(1.5,a*.035),e.strokeStyle=v,e.fillStyle=this.darken(h,.4);const m=a*.075,g=a*.055;for(const y of[-1,1])e.beginPath(),e.rect(y*g-m/2,d,m,-d),e.fill(),e.stroke();e.fillStyle=h,e.beginPath(),e.moveTo(-u*1.05,c),e.lineTo(u*1.05,c),e.lineTo(u*.82,d),e.lineTo(-u*.82,d),e.closePath(),e.fill(),e.stroke(),e.fillStyle=p,e.fillRect(-u*.9,d-a*.06,u*1.8,a*.05),e.fillStyle=this.darken(h,.16);const b=a*.06,E=(d-c)*.84;for(const y of[-1,1]){const w=y>0?u*1.02:-u*1.02-b;e.beginPath(),e.rect(w,c+a*.02,b,E),e.fill(),e.stroke()}if(s.elite){e.fillStyle=p;for(const y of[-1,1])e.beginPath(),e.ellipse(y*u*1.05,c+a*.02,a*.075,a*.05,0,0,Math.PI*2),e.fill(),e.stroke()}if(e.fillStyle=f,e.beginPath(),e.arc(0,l,o,0,Math.PI*2),e.fill(),e.stroke(),s.horns){e.fillStyle=p;for(const y of[-1,1])e.beginPath(),e.moveTo(y*o*.72,l-o*.42),e.lineTo(y*o*1.55,l-o*1.95),e.lineTo(y*o*.22,l-o*.92),e.closePath(),e.fill(),e.stroke()}e.fillStyle="rgba(20,20,28,0.9)";for(const y of[-1,1])e.beginPath(),e.ellipse(y*o*.36,l+o*.06,o*.15,o*.2,0,0,Math.PI*2),e.fill();if(s.weapon==="sword"){const y=u*1.32;e.fillStyle="#dfe6f2",e.beginPath(),e.rect(y,l-a*.01,a*.055,(d-l)*.96),e.fill(),e.stroke(),e.fillStyle=p,e.fillRect(y-a*.05,d-a*.11,a*.155,a*.035),e.fillStyle="#6b4a2a",e.fillRect(y+a*.005,d-a*.08,a*.045,a*.09)}else if(s.weapon==="claw"){e.strokeStyle=p,e.lineWidth=Math.max(1.5,a*.03);for(let y=0;y<3;y++){const w=c+a*.03+y*a*.05;e.beginPath(),e.moveTo(u*1.08,w),e.lineTo(u*1.72,w+a*.035),e.stroke()}e.strokeStyle=v,e.lineWidth=Math.max(1.5,a*.035)}else s.weapon==="staff"&&(e.strokeStyle="#7a5230",e.lineWidth=Math.max(2,a*.045),e.beginPath(),e.moveTo(-u*1.42,d),e.lineTo(-u*1.42,l-o*.5),e.stroke(),e.fillStyle=p,e.beginPath(),e.arc(-u*1.42,l-o*1.05,a*.06,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=v,e.lineWidth=Math.max(1.5,a*.035));if(s.label){const y=Math.max(18,Math.round(a*.44));e.font=`bold ${y}px "Microsoft YaHei", sans-serif`,e.textAlign="center",e.lineWidth=Math.max(3,y*.18),e.strokeStyle="rgba(0,0,0,0.78)";const w=l-o-(s.horns?a*.13:a*.06);e.strokeText(s.label,0,w),e.fillStyle=s.labelColor??"#ffffff",e.fillText(s.label,0,w)}e.restore()}drawPlayer(e,t,n){const i=U.config.heights.player;this.drawBox(e,t,n,i,.62,{top:"#66aaff",left:"#2266cc",right:"#3177dd",border:Us.player},{label:"勇者",glow:"#4488ff"})}drawMonster(e,t,n,i,s,a,o,l){const c=o?.95:a?.78:.6,d=o?Us.enemyBoss:a?Us.enemyElite:s;this.drawBox(e,t,n,l,c,{top:this.lighten(s,.35),left:this.darken(s,.35),right:this.darken(s,.2),border:d},{label:i,labelColor:o?"#ff5566":a?"#ffcc44":"#ffffff",glow:o?"#ff2244":void 0})}drawChest(e,t,n,i,s){const a=U.config.heights.chest+(s?8:0),o=i?Us.chestOpened:Us.chestClosed,l=i?0:.5+.5*Math.sin(performance.now()/400);this.drawBox(e,t,n,a,s?.7:.55,{top:i?"#aaaaaa":"#ffe066",left:i?"#666666":"#b8860b",right:i?"#777777":"#daa520",border:o},{label:i?"":s?"大宝箱":"宝箱",labelColor:"#ffcc00",pulse:l})}drawNpc(e,t,n,i,s){const a=U.config.heights.npc;this.drawBox(e,t,n,a,.62,{top:this.lighten(s,.35),left:this.darken(s,.3),right:this.darken(s,.15),border:s},{label:i,labelColor:"#ffffff",pulse:.5+.5*Math.sin(performance.now()/500)})}drawStair(e,t,n,i){const s=.5+.5*Math.sin(performance.now()/600),a=this.half*.7;e.save(),e.globalAlpha=.3+.25*s,e.fillStyle=Us.stairDown,e.beginPath(),e.ellipse(t,n,a*1.6,a*1.6,0,0,Math.PI*2),e.fill(),e.globalAlpha=1,e.fillStyle="#44ddff",e.fillRect(t-a,n-a,a*2,a*2),e.lineWidth=2,e.strokeStyle="#aaffff",e.strokeRect(t-a,n-a,a*2,a*2),e.font='bold 22px "Microsoft YaHei", sans-serif',e.textAlign="center",e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.78)",e.strokeText(`▼${i}`,t,n-a-12),e.fillStyle="#44ddff",e.fillText(`▼${i}`,t,n-a-8),e.restore()}drawTorch(e,t,n,i){const s=U.config.heights.torch,a=n-s;e.save(),e.strokeStyle="#7a5230",e.lineWidth=4,e.beginPath(),e.moveTo(t,n-(i>0?i*.55:0)),e.lineTo(t,a),e.stroke();const o=.7+.3*Math.abs(Math.sin(performance.now()/90));e.fillStyle="#ff8833",e.beginPath(),e.ellipse(t,a-4,5*o,9*o,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffcc66",e.beginPath(),e.ellipse(t,a-2,3*o,5*o,0,0,Math.PI*2),e.fill(),e.restore()}drawPillar(e,t,n){this.drawBox(e,t,n,U.config.heights.pillar,.4,{top:"#cccccc",left:"#777777",right:"#999999",border:"#aaaaaa"})}lighten(e,t){return this.mix(e,"#ffffff",t)}darken(e,t){return this.mix(e,"#000000",t)}mix(e,t,n){const i=this.parseHex(e),s=this.parseHex(t),a=Math.round(i.r+(s.r-i.r)*n),o=Math.round(i.g+(s.g-i.g)*n),l=Math.round(i.b+(s.b-i.b)*n);return`rgb(${a},${o},${l})`}parseHex(e){const t=e.replace("#","");return{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}};C(Yi,"instance",null);let Sl=Yi;const on=Sl.getInstance(),dx="./",ux=["crude","normal","quality","strong","holy"],td=new Map;let na=null;function fx(){return na||(na=Promise.all(ux.map(r=>new Promise(e=>{const t=new Image;t.onload=()=>{td.set(r,t),e()},t.onerror=()=>{console.warn(`[PotionArt] 加载失败，回退占位盒: p_${r}.png`),e()},t.src=`${dx}img/p_${r}.png`}))).then(()=>{}),na)}function px(r){return td.get(r)??null}function mx(r,e,t,n,i){const s=px(e);if(!s||!s.complete||s.naturalWidth===0)return!1;const a=s.naturalWidth/s.naturalHeight,o=i,l=o*a;return r.save(),r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(s,t-l/2,n-o,l,o),r.restore(),!0}const mh={start:{base:"#8a97a8",alt:"#8290a2",line:"rgba(255,255,255,0.10)"},end:{base:"#8fa3b8",alt:"#869bb0",line:"rgba(255,255,255,0.10)"},combat:{base:"#6f7987",alt:"#687280",line:"rgba(255,255,255,0.08)"},elite:{base:"#8e7a78",alt:"#867270",line:"rgba(255,255,255,0.08)"},chest:{base:"#9a9184",alt:"#928a7d",line:"rgba(255,255,255,0.10)"},merchant:{base:"#9a8f7e",alt:"#928779",line:"rgba(255,255,255,0.10)"},blacksmith:{base:"#6e5a4a",alt:"#65523f",line:"rgba(255,180,90,0.12)"},witch:{base:"#7d6f9a",alt:"#766893",line:"rgba(230,200,255,0.14)"},boss:{base:"#8a6f6f",alt:"#826868",line:"rgba(255,255,255,0.08)"},rest:{base:"#87987f",alt:"#809178",line:"rgba(255,255,255,0.10)"},corridor:{base:"#75808f",alt:"#6f7a89",line:"rgba(255,255,255,0.07)"}};function ln(r,e,t){const n=document.createElement("canvas");n.width=Math.max(1,Math.ceil(r)),n.height=Math.max(1,Math.ceil(e));const i=n.getContext("2d");return t(i),n}function Tn(r,e,t){const n=a=>{const o=a.replace("#","");return{r:parseInt(o.slice(0,2),16),g:parseInt(o.slice(2,4),16),b:parseInt(o.slice(4,6),16)}},i=n(r),s=n(e);return`rgb(${Math.round(i.r+(s.r-i.r)*t)},${Math.round(i.g+(s.g-i.g)*t)},${Math.round(i.b+(s.b-i.b)*t)})`}class gx{constructor(){C(this,"floorCache",new Map);C(this,"wallCache",new Map);C(this,"entityCache",new Map);C(this,"glowCache",new Map);C(this,"vignette",null);C(this,"cone",null);C(this,"moon",null);C(this,"chestOpened",!1)}get tile(){return Yt.tileSize}floor(e,t){if(e==="corridor")return this.corridorFloor(t);const n=`floor_${e}_${t}`;let i=this.floorCache.get(n);if(!i){const s=mh[e]??mh.corridor,a=t===0?s.base:s.alt,o=this.tile;i=ln(o,o,l=>{l.fillStyle=a,l.fillRect(0,0,o,o),l.strokeStyle=s.line,l.lineWidth=U.config.render.gridLineWidth,l.strokeRect(.5,.5,o-1,o-1)}),this.floorCache.set(n,i)}return i}corridorFloor(e){const t=`floor_corridor_${e}`;let n=this.floorCache.get(t);if(!n){const i=this.tile;n=ln(i,i,s=>{s.fillStyle=e===0?"#4a3a26":"#443523",s.fillRect(0,0,i,i);const a=12;let o=e===0?7:13;const l=()=>(o=(o*16807+11)%9973,o/9973);for(let u=0;u<i;u+=a){const h=.85+l()*.3;s.fillStyle=`rgba(${Math.round(107*h)},${Math.round(84*h)},${Math.round(52*h)},1)`,s.fillRect(0,u,i,a-1),s.fillStyle="rgba(20,14,8,0.75)",s.fillRect(0,u+a-1,i,1);const f=Math.floor(l()*i);s.fillRect(f,u,1,a-1),l()>.55&&(s.fillStyle="rgba(30,20,10,0.5)",s.beginPath(),s.ellipse(l()*i,u+a/2,1.6,1.1,0,0,Math.PI*2),s.fill())}const c=(u,h,f,p,v)=>{const m=s.createRadialGradient(u,h,0,u,h,f);m.addColorStop(0,p),m.addColorStop(1,"rgba(0,0,0,0)"),s.globalAlpha=v,s.fillStyle=m,s.beginPath(),s.arc(u,h,f,0,Math.PI*2),s.fill(),s.globalAlpha=1},d=["rgba(38,74,38,0.9)","rgba(52,88,44,0.85)","rgba(28,60,32,0.95)"];for(let u=0;u<10;u++){const h=u<5,f=Math.floor(l()*4),p=h?f===2?i-2:f===3?2:l()*i:l()*i,v=h?f===0?2:f===1?i-2:l()*i:l()*i;c(p,v,3+l()*7,d[Math.floor(l()*d.length)],.5+l()*.35)}s.fillStyle="rgba(46,84,44,0.7)";for(let u=0;u<14;u++)s.fillRect(l()*i,l()*i,1,1)}),this.floorCache.set(t,n)}return n}carpet(){const e="carpet";let t=this.floorCache.get(e);if(!t){const n=this.tile;t=ln(n,n,i=>{const s=n/2*.92;i.fillStyle="rgba(160,60,60,0.55)",i.fillRect(n/2-s,n/2-s,s*2,s*2),i.strokeStyle="rgba(220,150,80,0.5)",i.lineWidth=2,i.strokeRect(n/2-s,n/2-s,s*2,s*2)}),this.floorCache.set(e,t)}return t}wall(e,t,n){const i=`wall_${e}_${t?1:0}_${n?1:0}`;let s=this.wallCache.get(i);if(!s){const a=this.tile,o=a/2;s=ln(a,a+e,l=>{l.fillStyle="rgba(0,0,0,0.2)",l.fillRect(0,a+e-2+3,a,5),l.translate(o,o+e);const c=n?"#6d6d75":t?"#565d6b":"#4b515e",d=n?"#9d9da6":t?"#7d8697":"#6f7889";l.fillStyle=c,l.fillRect(-o,-o-e,a,e),l.fillStyle=n?"#7d7d86":t?"#646c7b":"#565d6b",l.fillRect(-o,-o,a,a),l.fillStyle=d,l.fillRect(-o,-o-e,a,a),l.strokeStyle="rgba(20,24,32,0.55)",l.lineWidth=1.5,l.strokeRect(-o,-o-e,a,e+a),l.strokeStyle="rgba(15,18,26,0.35)",l.lineWidth=1;for(const u of[.35,.7]){const h=-o-e*u;l.beginPath(),l.moveTo(-o,h),l.lineTo(o,h),l.stroke()}}),this.wallCache.set(i,s)}return s}entity(e,t,n,i,s=!1){this.chestOpened=s;const a=this.entityKey(e,t,n,i);let o=this.entityCache.get(a);if(o)return o;const l=this.tile,c=l+110,d=l+i+70;return o=ln(c,d,u=>{const h=c/2,f=d-l/2;switch(u.save(),u.translate(h,f),e.kind){case"monster":{const p=n;p&&(p.id==="slime"?on.drawBox(u,0,0,i,e.isElite?.78:.6,{top:Tn(p.color,"#ffffff",.35),left:Tn(p.color,"#000000",.35),right:Tn(p.color,"#000000",.2),border:e.isElite?"#ff8800":p.color},{label:p.name,labelColor:e.isElite?"#ffcc44":"#ffffff"}):on.drawPaperDoll(u,0,0,i,{body:p.color,border:e.isElite?"#ff8800":Tn(p.color,"#000000",.45),accent:e.isElite?"#ffcc44":Tn(p.color,"#ffffff",.42),label:p.name,labelColor:e.isElite?"#ffcc44":"#ffffff",weapon:"claw",elite:!!e.isElite,horns:!!e.isElite}));break}case"boss":{const p=n;p&&on.drawPaperDoll(u,0,0,i,{body:p.color,border:"#ff0044",accent:"#ff6b7a",label:p.name,labelColor:"#ff8a95",weapon:"claw",elite:!0,horns:!0});break}case"chest":{const p=this.chestOpened,v=e.chestTier==="grand",m=U.config.heights.chest+(v?8:0);on.drawBox(u,0,0,m,v?.7:.55,{top:p?"#aaaaaa":"#ffe066",left:p?"#666666":"#b8860b",right:p?"#777777":"#daa520",border:p?"#888888":"#ffcc00"},{label:p?"":v?"大宝箱":"宝箱",labelColor:"#ffcc00"});break}case"potion":{const p=e.potionTier??"normal",m=U.getPotion(p)?.color??"#ff5a7a",g=U.config.heights.potion;mx(u,p,0,0,g)||on.drawBox(u,0,0,g,.36,{top:Tn(m,"#ffffff",.6),left:Tn(m,"#000000",.4),right:m,border:Tn(m,"#ffffff",.75)},{label:"药水",labelColor:m});break}case"cauldron":{const p=U.config.heights.cauldron;on.drawBox(u,0,0,p,.58,{top:"#4a3a63",left:"#241d30",right:"#332844",border:"#8a63d6"},{label:"熬药大锅",labelColor:"#c9a3ff"}),u.fillStyle="rgba(126,255,178,0.9)",u.beginPath(),u.ellipse(0,-p,l*.2,l*.09,0,0,Math.PI*2),u.fill(),u.fillStyle="rgba(220,255,235,0.85)",u.beginPath(),u.ellipse(-l*.05,-p-1,l*.05,l*.025,0,0,Math.PI*2),u.fill();break}case"shelf":{const p=U.config.heights.shelf;on.drawBox(u,0,0,p,.5,{top:"#8a6a45",left:"#4a3624",right:"#6b4e31",border:"#a9825a"},{label:"药架",labelColor:"#ffd9a0"});const v=["#ff6b8a","#6bd6ff","#8aff9e","#ffd166"];for(let m=0;m<v.length;m++)u.fillStyle=v[m],u.fillRect(-l*.28+m*l*.16,-p-l*.14,l*.1,l*.14);break}case"fountain":{const p=U.config.heights.fountain;on.drawBox(u,0,0,p,.66,{top:"#cfe0e6",left:"#7f949c",right:"#a3b7bf",border:"#e6f7ff"},{label:"治疗泉",labelColor:"#8ff0ff"}),u.fillStyle="rgba(110,235,255,0.92)",u.beginPath(),u.ellipse(0,-p,l*.24,l*.1,0,0,Math.PI*2),u.fill(),u.fillStyle="rgba(235,255,255,0.9)",u.beginPath(),u.ellipse(0,-p-1,l*.08,l*.035,0,0,Math.PI*2),u.fill();break}case"npc":{const p=U.getNpc(e.npcId??""),v=p?.color??"#44dd66";on.drawPaperDoll(u,0,0,U.config.heights.npc,{body:v,border:Tn(v,"#000000",.42),accent:Tn(v,"#ffffff",.45),label:p?.name??"NPC",weapon:"staff"});break}case"stair":{const p=l*.35;u.fillStyle="#44ddff",u.fillRect(-p,-p,p*2,p*2),u.lineWidth=2,u.strokeStyle="#aaffff",u.strokeRect(-p,-p,p*2,p*2),u.font='bold 13px "Microsoft YaHei", sans-serif',u.textAlign="center",u.lineWidth=3,u.strokeStyle="rgba(0,0,0,0.75)";const v=e.targetFloor??t.floorId+1;u.strokeText(`▼${v}`,0,-p-8),u.fillStyle="#44ddff",u.fillText(`▼${v}`,0,-p-8);break}case"torch":{const p=U.config.heights.wallByRoom[t.type]??U.config.heights.corridorWall;on.drawTorch(u,0,0,p);break}case"pillar":{on.drawPillar(u,0,0);break}}u.restore()}),this.entityCache.set(a,o),o}player(){const e="player";let t=this.entityCache.get(e);if(t)return t;const n=this.tile,i=U.config.heights.player,s=n+110,a=n+i+70;return t=ln(s,a,o=>{const l=s/2,c=a-n/2;o.save(),o.translate(l,c),on.drawPaperDoll(o,0,0,i,{body:"#3f7fd6",head:"#f0c8a0",accent:"#ffd24a",border:"#1b4a91",label:"勇者",labelColor:"#ffffff",weapon:"sword",elite:!0}),o.restore()}),this.entityCache.set(e,t),t}entityKey(e,t,n,i){switch(e.kind){case"monster":return`m_${n?.id??"?"}_${e.isElite?1:0}`;case"boss":return`b_${n?.id??"?"}`;case"chest":return`c_${this.chestOpened?1:0}_${e.chestTier==="grand"?1:0}`;case"npc":return`n_${e.npcId??"?"}`;case"stair":return`s_${e.targetFloor??t.floorId+1}`;case"torch":return`t_${t.type}`;case"pillar":return"p";case"potion":return`po_${e.potionTier??"?"}`;case"cauldron":return"cauldron";case"shelf":return"shelf";case"fountain":return"fountain";default:return`x_${e.kind}`}}glow(e,t=1){const n=`${e}@${t}`;let i=this.glowCache.get(n);if(!i){const s=a=>{const o=parseInt(e.slice(1),16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${a})`};i=ln(128,128,a=>{const o=a.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,s(t)),o.addColorStop(1,s(0)),a.fillStyle=o,a.fillRect(0,0,128,128)}),this.glowCache.set(n,i)}return i}stairRing(){let e=this.glowCache.get("__ring__");return e||(e=ln(256,256,t=>{for(const[n,i]of[[34,.05],[22,.09],[12,.18],[6,.4],[2.5,.95]])t.strokeStyle=`rgba(255,255,255,${i})`,t.lineWidth=n,t.strokeRect(64,64,128,128)}),this.glowCache.set("__ring__",e)),e}roomCarpet(e,t){const n=`carpet_${e}_${t}`;let i=this.floorCache.get(n);if(i)return i;const s=this.tile,a=Math.max(1,e)*s,o=Math.max(1,t)*s;return i=ln(a,o,l=>{l.fillStyle="#7e1e1e",l.fillRect(0,0,a,o);for(let m=0;m<o;m+=18)l.fillStyle=m%36===0?"rgba(0,0,0,0.10)":"rgba(255,120,90,0.05)",l.fillRect(0,m,a,9);const c=l.createRadialGradient(a/2,o/2,Math.min(a,o)*.35,a/2,o/2,Math.max(a,o)*.62);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0.22)"),l.fillStyle=c,l.fillRect(0,0,a,o);const d="#e8b93c",u="rgba(232,185,60,0.65)";l.strokeStyle=d,l.lineWidth=5,l.strokeRect(10,10,a-20,o-20),l.strokeStyle=u,l.lineWidth=2,l.setLineDash([9,6]),l.strokeRect(22,22,a-44,o-44),l.setLineDash([]);const h=(m,g,b,E)=>{l.fillStyle=E,l.beginPath(),l.moveTo(m,g-b),l.lineTo(m+b,g),l.lineTo(m,g+b),l.lineTo(m-b,g),l.closePath(),l.fill()},f=[[34,34],[a-34,34],[34,o-34],[a-34,o-34]];for(const[m,g]of f)h(m,g,11,d),h(m,g,5,"#8a5a2b");a>200&&o>200&&(l.strokeStyle=u,l.lineWidth=3,l.beginPath(),l.arc(a/2,o/2,Math.min(a,o)*.16,0,Math.PI*2),l.stroke(),l.lineWidth=1.5,l.beginPath(),l.arc(a/2,o/2,Math.min(a,o)*.11,0,Math.PI*2),l.stroke(),h(a/2,o/2,7,d)),l.fillStyle="rgba(232,185,60,0.4)";let p=e*31+t*17;const v=()=>(p=(p*16807+13)%9973,p/9973);for(let m=0;m<Math.floor(a*o/9e3);m++)l.fillRect(30+v()*(a-60),30+v()*(o-60),2,2)}),this.floorCache.set(n,i),i}moonDisc(){return this.moon||(this.moon=ln(256,256,n=>{n.fillStyle="#eef4ff",n.beginPath(),n.arc(256/2,256/2,102.4,0,Math.PI*2),n.fill(),n.globalAlpha=.14,n.fillStyle="#9aa4b8";const i=[[.42,.38,.16],[.58,.55,.2],[.4,.62,.12],[.62,.36,.1],[.52,.46,.26]];for(const[s,a,o]of i)n.beginPath(),n.arc(256*s,256*a,256*o,0,Math.PI*2),n.fill();n.globalAlpha=1})),this.moon}coneTex(){return this.cone||(this.cone=ln(128,256,n=>{const i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.42,0),n.lineTo(128*.58,0),n.lineTo(128,256),n.lineTo(0,256),n.closePath(),n.fill()})),this.cone}vignetteTex(){return this.vignette||(this.vignette=ln(512,512,t=>{const n=t.createRadialGradient(256,256,112.64,256,256,317.44);n.addColorStop(0,"#ffffff"),n.addColorStop(.55,"#dfe2ea"),n.addColorStop(1,"#9aa0b0"),t.fillStyle=n,t.fillRect(0,0,512,512)})),this.vignette}}const gn=new gx,vx="./",gh=`${vx}frames64.png`,ua=6,nd=13,xx=ua*nd;let id=null,ia=null;function _x(){return ia||(ia=new Promise((r,e)=>{const t=new Image;t.onload=()=>{const n=document.createElement("canvas");n.width=t.naturalWidth,n.height=t.naturalHeight;const i=n.getContext("2d");i.imageSmoothingEnabled=!1,i.drawImage(t,0,0),id=n,r(n)},t.onerror=()=>e(new Error(`[HeroAtlas] 加载失败: ${gh}`)),t.src=gh}),ia)}function yx(){return id}function Mx(r,e){const t=Math.max(0,Math.min(xx-1,e|0)),n=t%ua,i=Math.floor(t/ua),s=1/ua,a=1/nd;r.offset.set(n*s,1-(i+1)*a),r.repeat.set(s,a)}const vh={idle:{frames:[60],fps:1,loop:!0},walk:{frames:[48,49,50,51,52,53],fps:6,loop:!0},run:{frames:[48,49,50,51,52,53],fps:12,loop:!0},attack:{frames:[0,1,2,3,4,5],fps:14,loop:!1},cast:{frames:[36,37,38],fps:8,loop:!1},hurt:{frames:[66,67,68,69,70,71],fps:10,loop:!1},death:{frames:[24,25,26],fps:6,loop:!1}};class bx{constructor(e){C(this,"texture");C(this,"action","idle");C(this,"frameIdx",0);C(this,"elapsed",0);C(this,"done",!1);this.texture=e,this.applyCurrent()}getAction(){return this.action}isFinished(){return this.done}setAction(e){e===this.action&&!this.done||(this.action=e,this.frameIdx=0,this.elapsed=0,this.done=!1,this.applyCurrent())}update(e){const t=vh[this.action];this.elapsed+=e;const n=1e3/t.fps;let i=0;for(;this.elapsed>=n&&i++<8;)if(this.elapsed-=n,this.frameIdx+1<t.frames.length)this.frameIdx+=1,this.applyCurrent();else if(t.loop)this.frameIdx=0,this.applyCurrent();else{this.done=!0;break}}applyCurrent(){const e=vh[this.action];Mx(this.texture,e.frames[this.frameIdx])}}const xh=new WeakMap;function An(r){let e=xh.get(r);return e||(e=new Sr(r),e.colorSpace=Pt,e.magFilter=It,e.minFilter=di,e.anisotropy=4,xh.set(r,e)),e}let Ns=null;function _h(){if(!Ns){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#39423c",t.fillRect(0,0,128,128);const n=32,i=16;for(let s=0;s<128/i;s++)for(let a=-1;a<128/n+1;a++){const o=a*n+s%2*(n/2),l=s*i,c=.88+(s*7+a*13)%5*.06,d=Math.round(84*c),u=Math.round(100*c),h=Math.round(88*c);t.fillStyle=`rgb(${d},${u},${h})`,t.fillRect(o+1,l+1,n-2,i-2),t.fillStyle="rgba(210,225,210,0.16)",t.fillRect(o+1,l+1,n-2,1),t.fillRect(o+1,l+1,1,i-2),t.fillStyle="rgba(10,16,12,0.28)",t.fillRect(o+1,l+i-2,n-2,1),t.fillRect(o+n-2,l+1,1,i-2),(s*3+a*5)%4===0&&(t.fillStyle="rgba(30,42,34,0.3)",t.beginPath(),t.arc(o+8+(s*11+a*7)%16,l+4+(s*5+a*3)%8,2.2,0,Math.PI*2),t.fill())}Ns=new Sr(e),Ns.colorSpace=Pt,Ns.wrapS=pr,Ns.wrapT=pr}return Ns}const fa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sx=new Ra(-1,1,1,-1,0,1);class Ex extends Lt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const wx=new Ex;class Xl{constructor(e){this._mesh=new Ue(wx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class sd extends Js{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xr.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class yh extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Tx extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ax{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sd(fa),this.copyPass.material.blending=Dn,this.timer=new cp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(a instanceof yh?n=!0:a instanceof Tx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Rx extends Js{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Cx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ws extends Js{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(s,a,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Jt(s,a,{type:sn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new Jt(s,a,{type:sn});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=Cx;this.highPassUniforms=xr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ce(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xr.clone(fa.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,premultipliedAlpha:!0,blending:Wn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new rs,this._fsQuad=new Xl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ws.BlurDirectionX=new Ce(1,0);Ws.BlurDirectionY=new Ce(0,1);const sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Px extends Js{constructor(){super(),this.isOutputPass=!0,this.uniforms=xr.clone(sa.uniforms),this.material=new Wh({name:sa.name,uniforms:this.uniforms,vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader}),this._fsQuad=new Xl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Cl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ix={uniforms:{tDiffuse:{value:null},uVignetteStrength:{value:.3},uVignetteOffset:{value:1},uVignetteDarkness:{value:1.1},uGamma:{value:1.05},uContrast:{value:1.05},uSaturation:{value:1.1},uBrightness:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignetteStrength;
    uniform float uVignetteOffset;
    uniform float uVignetteDarkness;
    uniform float uGamma;
    uniform float uContrast;
    uniform float uSaturation;
    uniform float uBrightness;
    varying vec2 vUv;

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 color = max(tex.rgb, vec3(0.0));

      // 颜色校正：gamma → 对比度 → 饱和度 → 亮度
      color = pow(color, vec3(1.0 / max(uGamma, 0.001)));
      color = (color - 0.5) * uContrast + 0.5;
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      color = mix(vec3(luma), color, uSaturation);
      color *= uBrightness;

      // 暗角：径向压暗，最大压暗量 = uVignetteStrength（≤0.3，保证整体可读）
      vec2 p = (vUv - 0.5) * uVignetteOffset;
      float vig = smoothstep(0.35, 0.85, length(p) * uVignetteDarkness);
      color *= 1.0 - vig * uVignetteStrength;

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), tex.a);
    }
  `};class Lx{constructor(){C(this,"composer",null);C(this,"bloomPass",null);C(this,"gradePass",null)}get ready(){return this.composer!==null}init(e,t,n,i,s){const a=U.config.postProcess,o=new Ax(e);o.setSize(i,s),o.addPass(new Rx(t,n));const l=new Ws(new Ce(i,s),a.bloom.strength,a.bloom.radius,a.bloom.threshold);l.enabled=a.bloom.enabled,o.addPass(l),this.bloomPass=l,o.addPass(new Px);const c=new sd(Ix),d=c.uniforms;d.uVignetteStrength.value=Math.min(a.vignette.strength,U.config.render.vignetteMax),d.uVignetteOffset.value=a.vignette.offset,d.uVignetteDarkness.value=a.vignette.darkness,d.uGamma.value=a.adjustment.gamma,d.uContrast.value=a.adjustment.contrast,d.uSaturation.value=a.adjustment.saturation,d.uBrightness.value=a.adjustment.brightness,c.enabled=a.vignette.enabled||a.adjustment.enabled,o.addPass(c),this.gradePass=c,this.composer=o}setSize(e,t){this.composer?.setSize(e,t),this.bloomPass?.setSize(e,t)}render(){this.composer?.render()}dispose(){this.bloomPass?.dispose(),this.gradePass?.dispose(),this.composer?.dispose(),this.composer=null,this.bloomPass=null,this.gradePass=null}}const ra=new Lx,Mh=2,Dx=1.5,Fx={start:16773853,combat:16757575,elite:16751164,chest:16765286,merchant:16771524,blacksmith:16756832,witch:13077759,boss:16734794,end:12376319,rest:16771524,corridor:16746564},Ux=4,Nx=12,Ox=6,kx=.1,Bx=.55,bh=16,Bt=class Bt{constructor(){C(this,"hoverTile",null);C(this,"renderer",null);C(this,"scene",null);C(this,"camera",null);C(this,"container",null);C(this,"raycaster",new dp);C(this,"ready",!1);C(this,"builtFloorId",-1);C(this,"floorGroup",new zt);C(this,"wallGroup",new zt);C(this,"entityGroup",new zt);C(this,"particleGroup",new zt);C(this,"hoverMesh",null);C(this,"playerSprite",null);C(this,"heroAnimator",null);C(this,"heroBaseW",1);C(this,"heroFacesLeft",!0);C(this,"playerShadow",null);C(this,"gates",[]);C(this,"wallCells",new Map);C(this,"fadeCells",new Map);C(this,"fadePool",[]);C(this,"fadeScanTimer",0);C(this,"focusX",0);C(this,"focusZ",0);C(this,"focusInit",!1);C(this,"lastTimeMs",0);C(this,"shakeTime",0);C(this,"shakeTotal",0);C(this,"shakeIntensity",0);C(this,"ambient",null);C(this,"dirLight",null);C(this,"starField",null);C(this,"starMat",null);C(this,"moonGroup",null);C(this,"playerTorch",null);C(this,"torchLights",new Map);C(this,"glowLights",new Map);C(this,"torchPool",[]);C(this,"glowPool",[]);C(this,"torchCursor",0);C(this,"glowCursor",0);C(this,"glowSprites",[]);C(this,"dustItems",[]);C(this,"heroVis",{x:0,z:0,init:!1})}static getInstance(){return Bt.instance||(Bt.instance=new Bt),Bt.instance}async init(e){this.container=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight,i=new kf;i.background=new Oe(0),this.scene=i;const s=U.config.camera3D,a=new tn(s.fov,t/n,.1,200);this.camera=a;let o;try{o=new ox({antialias:!0})}catch(l){console.error("[Three] WebGL 初始化失败",l),e.innerHTML='<div style="padding:24px;color:#ff8888">当前环境不支持 WebGL，无法启动游戏渲染。</div>';return}o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(t,n),o.shadowMap.enabled=!0,o.shadowMap.type=wh,o.outputColorSpace=Pt,o.toneMapping=Ta,o.toneMappingExposure=1.15,o.domElement.id="game-canvas",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.display="block",o.domElement.style.cursor="crosshair",e.appendChild(o.domElement),this.renderer=o,this.setupLights(),i.add(this.floorGroup,this.wallGroup,this.entityGroup,this.particleGroup),this.buildHoverMesh(),this.buildStars(),ra.init(o,i,a,t,n),Xs.getInstance().attachCanvas(o.domElement),this.ready=!0,this.rebuildFloor(),X.on("floorChanged",()=>this.rebuildFloor()),X.on("saveLoaded",()=>this.rebuildFloor()),X.on("gameRestarted",()=>this.rebuildFloor()),X.on("monsterDefeated",()=>this.rebuildEntities()),X.on("chestOpened",()=>this.rebuildEntities()),X.on("potionPicked",()=>this.rebuildEntities()),X.on("battleEnded",l=>{l.result.damageTaken>Ee.getInstance().maxHp*.3&&this.shake(.3,320)}),X.on("bossDefeated",()=>this.shake(.45,520)),X.on("playerDied",()=>this.shake(.35,420)),window.addEventListener("resize",()=>this.resize())}setupLights(){if(!this.scene)return;this.ambient=new ip(5069426,2366226,.6),this.scene.add(this.ambient);const e=new ap(14674431,.55);e.position.set(Bt.MOON_OFFSET.x,Bt.MOON_OFFSET.y,Bt.MOON_OFFSET.z),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=140;const t=24;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-6e-4,e.shadow.normalBias=.02,e.shadow.radius=4,this.scene.add(e),this.scene.add(e.target),this.dirLight=e,this.moonGroup=new zt;const n=new qn(new Rn({map:An(gn.moonDisc()),transparent:!0,depthWrite:!1,fog:!1}));n.scale.set(7,7,1),this.moonGroup.add(n);const i=new qn(new Rn({map:An(gn.glow("rgba(225,235,255,0.85)")),blending:Wn,transparent:!0,depthWrite:!1,fog:!1,opacity:.38}));i.scale.set(24,24,1),i.renderOrder=-1,this.moonGroup.add(i),this.moonGroup.position.set(Bt.MOON_OFFSET.x,Bt.MOON_OFFSET.y,Bt.MOON_OFFSET.z),this.scene.add(this.moonGroup),this.playerTorch=new ho(16751165,1.5,10),this.playerTorch.decay=1.5,this.playerTorch.castShadow=!0,this.playerTorch.shadow.mapSize.set(1024,1024),this.playerTorch.shadow.bias=-.002,this.scene.add(this.playerTorch);for(let s=0;s<Nx;s++){const a=new ho(16748608,0,8);a.decay=1.6,s<Ux&&(a.castShadow=!0,a.shadow.mapSize.set(512,512),a.shadow.bias=-.002),this.scene.add(a),this.torchPool.push(a)}for(let s=0;s<Ox;s++){const a=new ho(16777215,0,6);this.scene.add(a),this.glowPool.push(a)}}buildStars(){if(!this.scene)return;const e=520,t=new Float32Array(e*3),n=new Float32Array(e),i=new Float32Array(e);for(let a=0;a<e;a++){const o=Math.random()*2-1,l=Math.random()*Math.PI*2,c=110+Math.random()*60,d=Math.sqrt(1-o*o);t[a*3]=c*d*Math.cos(l),t[a*3+1]=c*o,t[a*3+2]=c*d*Math.sin(l),n[a]=Math.random(),i[a]=1.2+Math.random()*Math.random()*4.5}const s=new Lt;s.setAttribute("position",new qt(t,3)),s.setAttribute("aPhase",new qt(n,1)),s.setAttribute("aSize",new qt(i,1)),this.starMat=new Ut({uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:Wn,vertexShader:`
        attribute float aPhase;
        attribute float aSize;
        uniform float uTime;
        varying float vTwinkle;
        varying float vWarm;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          // 双频闪烁：慢呼吸 + 快闪（每星相位不同）
          float t = uTime * 0.001 + aPhase * 6.2831;
          vTwinkle = 0.45 + 0.35 * sin(t * 1.7) + 0.2 * sin(t * 5.3 + 1.4);
          vWarm = fract(aPhase * 7.31);
          gl_PointSize = max(1.5, aSize * (420.0 / -mv.z));
        }
      `,fragmentShader:`
        varying float vTwinkle;
        varying float vWarm;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.06, length(d));
          // 大部分冷白星，少量暖星
          vec3 tint = mix(vec3(0.87, 0.92, 1.0), vec3(1.0, 0.94, 0.82), step(0.82, vWarm));
          gl_FragColor = vec4(tint, a * (0.3 + 0.7 * max(0.05, vTwinkle)));
        }
      `}),this.starField=new Zf(s,this.starMat),this.starField.frustumCulled=!1,this.scene.add(this.starField)}buildHoverMesh(){const e=new ql(.34,.46,4),t=new rs({color:16777215,transparent:!0,opacity:.6,side:Pn}),n=new Ue(e,t);n.rotation.x=-Math.PI/2,n.rotation.z=Math.PI/4,n.position.y=.06,n.visible=!1,n.renderOrder=2,this.hoverMesh=n,this.scene?.add(n)}rebuildFloor(){if(!this.ready)return;const e=Ge.getInstance().currentFloor;if(e){this.builtFloorId=e.floorId,this.focusInit=!1,this.heroVis.init=!1;for(const t of[...this.fadeCells.keys()])this.releaseFadeWall(t);this.fadeCells.clear(),this.clearGroup(this.floorGroup),this.clearGroup(this.wallGroup),this.buildFloorTiles(e),this.buildRoomCarpets(e),this.buildWalls(e),this.rebuildEntities()}}buildRoomCarpets(e){const t=new Set(["merchant","witch"]);for(const n of e.rooms){if(!t.has(n.type))continue;const i=n.width-2,s=n.height-2;if(i<=0||s<=0)continue;const a=new Ue(new as(i,s),new ut({map:An(gn.roomCarpet(i,s)),roughness:.94,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.rotation.x=-Math.PI/2,a.position.set(n.x+1+i/2,.012,n.y+1+s/2),a.receiveShadow=!0,this.floorGroup.add(a)}}roomGridOf(e){const t={};for(const n of e.rooms)for(let i=n.y;i<n.y+n.height;i++)for(let s=n.x;s<n.x+n.width;s++)t[`${s},${i}`]=n.type;return t}buildFloorTiles(e){const t=new Set;for(const a of e.rooms)for(const o of a.entities)if(o.kind==="stair"&&o.stairSpan===2)for(const[l,c]of[[0,0],[1,0],[0,1],[1,1]])t.add(`${o.x+l},${o.y+c}`);const n=this.roomGridOf(e),i=new Map;for(let a=0;a<e.height;a++)for(let o=0;o<e.width;o++){if(e.grid[a][o]!==0||t.has(`${o},${a}`))continue;const l=n[`${o},${a}`]??"corridor",c=(a+o)%2===0?0:1,d=`${l}_${c}`;let u=i.get(d);u||(u={roomKey:l,checker:c,cells:[]},i.set(d,u)),u.cells.push([o,a])}const s=new pt;for(const a of i.values()){const o=gn.floor(a.roomKey,a.checker),l=new ut({map:An(o),roughness:.85,metalness:.05}),c=a.roomKey==="corridor"?Bx:kx,d=new or(new ht(1,c,1),l,a.cells.length);d.receiveShadow=!0,a.cells.forEach(([u,h],f)=>{s.position.set(u+.5,-c/2,h+.5),s.updateMatrix(),d.setMatrixAt(f,s.matrix)}),d.instanceMatrix.needsUpdate=!0,this.floorGroup.add(d)}}buildWalls(e){const t=this.roomGridOf(e),n=U.config.heights,i=Yt.tileSize,s=new Map,a=new Map,o=[];for(let c=0;c<e.height;c++)for(let d=0;d<e.width;d++){const u=e.grid[c][d];if(u!==1&&u!==2)continue;const h=u===2,f=t[`${d},${c}`];if(!h&&!f){o.push([d,c]);continue}const p=h?n.pillar:n.wallByRoom[f]??n.corridorWall,v=Math.max(.5,p/i),m=v.toFixed(2),g=h?a:s;let b=g.get(m);b||(b={h:v,cells:[]},g.set(m,b)),b.cells.push([d,c])}const l=new pt;this.wallCells.clear();for(const c of s.values()){const d=new ut({map:_h(),roughness:.8,metalness:.08}),u=new or(new ht(1,c.h,1),d,c.cells.length);u.castShadow=!0,u.receiveShadow=!0,c.cells.forEach(([f,p],v)=>{l.position.set(f+.5,c.h/2,p+.5),l.updateMatrix(),u.setMatrixAt(v,l.matrix),this.wallCells.set(`${f},${p}`,{mesh:u,index:v,col:f,row:p,h:c.h})}),u.instanceMatrix.needsUpdate=!0,this.wallGroup.add(u);const h=new or(new ht(1,bh,1),new ut({color:3029043,roughness:.9,metalness:.05}),c.cells.length);h.receiveShadow=!1,c.cells.forEach(([f,p],v)=>{l.position.set(f+.5,-bh/2,p+.5),l.updateMatrix(),h.setMatrixAt(v,l.matrix)}),h.instanceMatrix.needsUpdate=!0,this.wallGroup.add(h)}for(const c of a.values())for(const[d,u]of c.cells){const h=new zt,f=new ut({color:7307124,roughness:.72,metalness:.12}),p=new ut({color:5727580,roughness:.8,metalness:.1}),v=new Ue(new ht(.52,.14,.52),p);v.position.y=.07;const m=Math.max(.2,c.h-.26),g=new Ue(new oi(.15,.19,m,10),f);g.position.y=.14+m/2;const b=new Ue(new ht(.48,.12,.48),p);b.position.y=.14+m+.06;for(const E of[v,g,b])E.castShadow=!0,E.receiveShadow=!0,h.add(E);h.position.set(d+.5,0,u+.5),this.wallGroup.add(h)}o.length>0&&this.buildFences(o,Math.max(.5,n.corridorWall/i),e.grid)}buildFences(e,t,n){const i=[],s=[];for(const[d,u]of e)(n[u]?.[d-1]===1||n[u]?.[d+1]===1?i:s).push([d,u]);const a=Math.max(.4,t*.62),o=new ut({color:7037266,roughness:.75,metalness:.25}),l=new pt,c=(d,u)=>{if(d.length===0)return;const h=new or(new ht(.08,a,.08),o,d.length*2);h.castShadow=!0,h.receiveShadow=!0;let f=0;for(const[m,g]of d)for(const b of[-.24,.24])l.position.set(m+.5+(u?0:b),a/2,g+.5+(u?b:0)),l.updateMatrix(),h.setMatrixAt(f++,l.matrix);h.instanceMatrix.needsUpdate=!0,this.wallGroup.add(h);const p=new or(new ht(u?.1:.98,.08,u?.98:.1),o,d.length);p.castShadow=!0;let v=0;for(const[m,g]of d)l.position.set(m+.5,a*.86,g+.5),l.updateMatrix(),p.setMatrixAt(v++,l.matrix);p.instanceMatrix.needsUpdate=!0,this.wallGroup.add(p)};c(i,!1),c(s,!0)}computeOccludedWalls(){const e=new Set,t=Ge.getInstance().currentFloor;if(!t)return e;const n=t.grid,i=U.config.camera3D,s=this.focusX,a=this.focusZ+i.distance,o=(d,u)=>{if(n[u]?.[d]!==1)return;const h=`${d},${u}`;this.wallCells.has(h)&&e.add(h)},l=(d,u)=>{const h=d+.5,f=u+.5,p=s-h,v=a-f,m=Math.hypot(p,v);if(m<.001)return;const g=p/m,b=v/m,E=.2,y=Math.min(m,Dx);for(let w=.5;w<=y;w+=E){const S=Math.floor(h+g*w),R=Math.floor(f+b*w);if(R<0||R>=t.height||S<0||S>=t.width)break;n[R][S]===1&&(o(S,R),o(S-1,R),o(S+1,R))}},c=Ee.getInstance().pos;l(c.x,c.y);for(const{entity:d}of Ge.getInstance().allEntities())(d.kind==="monster"||d.kind==="boss"||d.kind==="chest"||d.kind==="npc"||d.kind==="stair")&&l(d.x,d.y);return e}updateWallFade(e){if(this.fadeScanTimer-=e,this.fadeScanTimer<=0){this.fadeScanTimer=120;const i=this.computeOccludedWalls();for(const s of i){const a=this.fadeCells.get(s);a?a.target=1:this.fadeCells.set(s,{progress:0,target:1})}for(const[s,a]of this.fadeCells)i.has(s)||(a.target=0)}const t=Math.min(1,e/180),n=[];for(const[i,s]of this.fadeCells){const a=s.progress;s.progress+=(s.target-s.progress)*t,Math.abs(s.target-s.progress)<.01&&(s.progress=s.target);const o=this.wallCells.get(i);if(!o){n.push(i);continue}a!==s.progress&&(s.progress>.02?(this.setWallInstanceHidden(o,!0),this.showFadeWall(i,o,s.progress)):(this.setWallInstanceHidden(o,!1),this.releaseFadeWall(i),s.target===0&&n.push(i)))}for(const i of n)this.fadeCells.delete(i)}setWallInstanceHidden(e,t){const n=new pt;t?(n.position.set(0,-999,0),n.scale.set(1e-4,1e-4,1e-4)):(n.position.set(e.col+.5,e.h/2,e.row+.5),n.scale.set(1,1,1)),n.updateMatrix(),e.mesh.setMatrixAt(e.index,n.matrix),e.mesh.instanceMatrix.needsUpdate=!0}showFadeWall(e,t,n){let i=this.fadePool.find(s=>s.key===e);if(!i){if(i=this.fadePool.find(s=>s.key===null),!i){const s=new Ue(new ht(1,1,1),new ut({map:_h(),roughness:.8,metalness:.08,transparent:!0,opacity:1,depthWrite:!1}));s.castShadow=!0,i={mesh:s,key:null},this.fadePool.push(i),this.scene?.add(s)}i.key=e}i.mesh.visible=!0,i.mesh.scale.set(1,t.h,1),i.mesh.position.set(t.col+.5,t.h/2,t.row+.5),i.mesh.material.opacity=1-n*.78}releaseFadeWall(e){const t=this.fadePool.find(n=>n.key===e);t&&(t.key=null,t.mesh.visible=!1)}rebuildEntities(){if(!this.ready)return;const e=Ge.getInstance(),t=e.currentFloor;if(!t)return;if(t.floorId!==this.builtFloorId){this.rebuildFloor();return}this.clearGroup(this.entityGroup),this.torchCursor=0,this.glowCursor=0,this.torchLights.clear(),this.glowLights.clear();for(const c of this.torchPool)c.intensity=0;for(const c of this.glowPool)c.intensity=0;this.glowSprites=[],this.dustItems=[],this.playerSprite=null,this.playerShadow=null;const n=this.gates;this.gates=[];const i=U.config.heights,s=Yt.tileSize;for(const{entity:c,room:d}of e.allEntities()){if(c.kind==="carpet")continue;const u=c.kind==="monster"||c.kind==="boss"?U.getMonster(c.monsterId??""):void 0,h=c.kind==="boss"?i.boss:c.kind==="monster"?c.isElite?i.monsterElite:u?.height??i.monsterNormal:c.kind==="chest"?i.chest+(c.chestTier==="grand"?8:0):c.kind==="npc"?i.npc:c.kind==="potion"?i.potion:c.kind==="cauldron"?i.cauldron:c.kind==="shelf"?i.shelf:c.kind==="fountain"?i.fountain:c.kind==="pillar"?i.pillar:i.torch;this.addEntity(c,d,u,h,s)}const a=yx(),o=a?2:Math.max(1.35,i.player/s*1.6),l=a??gn.player();if(this.playerSprite=this.makePaperSprite(l,o),a&&(this.playerSprite.scale.set(o,o,1),this.playerSprite.userData.footRatio=5/64),this.heroBaseW=Math.abs(this.playerSprite.scale.x),this.playerShadow=this.addGroundShadow(0,0,o*.28),a){const c=this.playerSprite.material.map;this.heroAnimator=new bx(c)}else this.heroAnimator=null;this.syncPlayer(),this.entityGroup.add(this.playerSprite),this.buildGates(n)}addEntity(e,t,n,i,s){const a=e.x+.5,o=e.y+.5,l=e.kind==="chest"&&Ge.getInstance().isChestOpened(e);if(e.kind==="torch"){const h=Ge.getInstance().currentFloor;let f=a,p=o;for(const[R,_]of[[0,-1],[0,1],[-1,0],[1,0]])if(h?.grid[e.y+_]?.[e.x+R]===0){f=a+R*.44,p=o+_*.44;break}const v=new Ue(new ht(.1,.06,.1),new ut({color:4013378,roughness:.5,metalness:.7}));v.position.set(f-(f-a)*.35,.58,p-(p-o)*.35),this.entityGroup.add(v);const m=new Ue(new ht(.07,.34,.07),new ut({color:7031338,roughness:.9}));m.position.set(f,.72,p),m.castShadow=!0,this.entityGroup.add(m);const g=new Ue(new ur(.09,10,10),new rs({color:16747546}));g.position.set(f,.98,p),this.entityGroup.add(g);const b=U.config.shadow.tyndall,E=Math.min(.95,b.length/s),y=Math.max(.35,b.width/s),w=new qn(new Rn({map:An(gn.coneTex()),color:16750916,blending:Wn,transparent:!0,depthTest:!0,depthWrite:!1,opacity:b.alpha}));w.scale.set(y,E,1),w.position.set(f,E/2,p),w.renderOrder=2,this.entityGroup.add(w);const S=Math.max(0,Math.min(b.dustMax,b.dustMin));for(let R=0;R<S;R++){const _=new qn(new Rn({map:An(gn.glow("#ffcc88")),blending:Wn,transparent:!0,depthWrite:!1,opacity:0}));_.scale.set(.06,.06,1),_.renderOrder=3,this.entityGroup.add(_),this.dustItems.push({sprite:_,baseX:f,baseZ:p,baseY:.1,phase:Math.random(),speed:.12+Math.random()*.1})}if(this.torchCursor<this.torchPool.length){const R=this.torchPool[this.torchCursor++];R.color.setHex(Fx[t.type]??16748608),R.intensity=1,R.distance=8,R.position.set(f,.95,p),this.torchLights.set(e.id,R)}return}if(e.kind==="chest"){const h=this.buildChest(l,e.chestTier==="grand");h.position.set(a,0,o),this.entityGroup.add(h),l||this.addGlowLight(e.id,16763972,.55,5,a,.7,o);return}if(e.kind==="stair"){if(e.stairSpan===1)return;if(e.stairSpan===2){this.buildStaircase(e.x,e.y),this.addGlowLight(e.id,4513279,.8,6,a,.7,o);const h=new Ue(new as(2.9,2.9),new rs({map:An(gn.stairRing()),color:4513279,blending:Wn,transparent:!0,opacity:.55,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(a+.5,.045,o+.5),h.renderOrder=2,this.entityGroup.add(h);return}for(let h=0;h<4;h++){const f=new Ue(new ht(.86,.12,.22),new ut({color:8952234,roughness:.8}));f.position.set(a,.06+h*.12,o-.33+h*.22),f.castShadow=!0,f.receiveShadow=!0,this.entityGroup.add(f)}this.addGlowLight(e.id,4513279,.8,6,a,.8,o),this.addGlow("#44ddff",.5,a,.35,o,1.2);return}if(e.kind==="cauldron"){const h=new zt,f=new ut({color:2895667,roughness:.55,metalness:.75}),p=new Ue(new ur(.34,16,12,0,Math.PI*2,Math.PI*.35,Math.PI*.65),f);p.position.y=.36,p.castShadow=!0;const v=new Ue(new ba(.3,.035,10,24),f);v.rotation.x=Math.PI/2,v.position.y=.55,h.add(p,v);for(const g of[0,2.1,4.2]){const b=new Ue(new oi(.03,.045,.3,8),f);b.position.set(Math.cos(g)*.2,.15,Math.sin(g)*.2),h.add(b)}const m=new Ue(new Ma(.27,20),new ut({color:4643194,emissive:2067018,emissiveIntensity:.8,roughness:.3}));m.rotation.x=-Math.PI/2,m.position.y=.53,h.add(m),h.position.set(a,0,o),this.entityGroup.add(h),this.addGlow("#7effb2",.5,a,.62,o,2.2);return}if(e.kind==="shelf"){const h=new zt,f=new ut({color:6243628,roughness:.8}),p=new Ue(new ht(.86,1,.16),f);p.position.y=.5,p.castShadow=!0,h.add(p);const v=[10112475,4173418,14243135,4161497,14264619,6609215];for(let m=0;m<3;m++){const g=new Ue(new ht(.8,.05,.26),f);g.position.set(0,.22+m*.34,.08),g.castShadow=!0,h.add(g);for(let b=0;b<3;b++){const E=new ut({color:v[(m*3+b)%v.length],roughness:.25,metalness:.1,emissive:v[(m*3+b)%v.length],emissiveIntensity:.25}),y=new Ue(new oi(.035,.045,.13,8),E);y.position.set(-.26+b*.26,.32+m*.34,.08),h.add(y)}}h.position.set(a,0,o),this.entityGroup.add(h);return}if(e.kind==="fountain"){const h=new zt,f=new ut({color:8227476,roughness:.75}),p=new Ue(new oi(.42,.48,.22,20),f);p.position.y=.11,p.castShadow=!0,p.receiveShadow=!0;const v=new Ue(new Ma(.36,20),new ut({color:5888232,emissive:2062986,emissiveIntensity:.7,roughness:.2}));v.rotation.x=-Math.PI/2,v.position.y=.2;const m=new Ue(new oi(.06,.1,.42,10),f);m.position.y=.4;const g=new Ue(new ur(.09,10,10),new ut({color:10479858,emissive:4176076,emissiveIntensity:.9,roughness:.2}));g.position.y=.64,h.add(p,v,m,g),h.position.set(a,0,o),this.entityGroup.add(h),this.addGlow("#6bebff",.5,a,.5,o,1.4),this.addGlowLight(e.id,7072767,.5,4,a,.6,o);return}const c=gn.entity(e,t,n,i,l),d=Math.max(1.05,Math.min(2.6,i/s*1.6)),u=this.makePaperSprite(c,d);if(u.position.set(a,this.footedY(u),o),this.entityGroup.add(u),this.addGroundShadow(a,o,d*.3),e.kind==="boss")this.addGlowLight(e.id,16720452,1.2,9,a,1.2,o),this.addGlow("#ff2244",1.1,a,u.position.y+u.scale.y*.2,o,.8);else if(e.kind==="monster"&&e.isElite)this.addGlow("#ff8800",.42,a,u.position.y+u.scale.y*.2,o,2);else if(e.kind==="potion"){const h=U.getPotion(e.potionTier??"");this.addGlow(h?.color??"#ff5a7a",.3,a,u.position.y+u.scale.y*.3,o,1.8)}}buildStaircase(e,t){const a=new ut({color:8426403,roughness:.82});for(let c=0;c<6;c++){const d=-.1-c*.17,u=d- -1.15,h=new Ue(new ht(2,u,2/6),a);h.position.set(e+1,d-u/2,t+2-(c+.5)*(2/6)),h.castShadow=!0,h.receiveShadow=!0,this.entityGroup.add(h)}const o=new ut({color:5003878,roughness:.9});for(const c of[e+.04,e+1.96]){const d=new Ue(new ht(.09,1.32,2.08),o);d.position.set(c,-.55,t+1),this.entityGroup.add(d)}const l=new Ue(new ht(2,.26,.1),o);l.position.set(e+1,-.13,t+2.02),this.entityGroup.add(l)}addGlowLight(e,t,n,i,s,a,o){if(this.glowLights.has(e)||this.glowCursor>=this.glowPool.length)return;const l=this.glowPool[this.glowCursor++];l.color.setHex(t),l.intensity=n,l.distance=i,l.position.set(s,a,o),this.glowLights.set(e,l)}addGlow(e,t,n,i,s,a,o=.8,l=1){const c=t*2,d=new Rn({map:An(gn.glow(e,l)),blending:Wn,transparent:!0,depthTest:!0,depthWrite:!1,opacity:o}),u=new qn(d);u.scale.set(c,c,1),u.position.set(n,i,s),u.renderOrder=2,this.entityGroup.add(u),this.glowSprites.push({sprite:u,base:c,speed:a,phase:Math.random()*Math.PI*2})}buildChest(e,t){const n=new zt,i=t?1.25:1,s=.66*i,a=.32*i,o=.46*i,l=new ut({color:e?7034682:9067051,roughness:.78,metalness:.08}),c=new ut({color:e?4865318:6241050,roughness:.72,metalness:.12}),d=new ut({color:e?8158332:14264619,roughness:.35,metalness:.85}),u=new Ue(new ht(s,a,o),l);u.position.y=a/2,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const h=new zt;h.position.set(0,a,-o/2);const f=o/2,p=new Ue(new oi(f,f,s,20,1,!1,0,Math.PI),c);p.rotation.z=Math.PI/2,p.position.z=o/2,p.castShadow=!0,h.add(p);for(const m of[-s*.28,s*.28]){const g=new Ue(new ba(f*1.02,.018*i,8,18,Math.PI),d);g.rotation.y=Math.PI/2,g.position.set(m,0,o/2),h.add(g)}e&&(h.rotation.x=-2),n.add(h);for(const m of[-1,1])for(const g of[-1,1]){const b=new Ue(new ht(.035*i,a,.035*i),d);b.position.set(m*(s/2-.02*i),a/2,g*(o/2-.02*i)),b.castShadow=!0,n.add(b)}const v=new Ue(new ht(.11*i,.1*i,.03*i),new ut({color:e?5921370:16766814,roughness:.3,metalness:.9}));return v.position.set(0,a*.8,o/2+.012*i),n.add(v),n}makePaperSprite(e,t){const n=e.width/e.height,i=new Rn({map:An(e),transparent:!0,depthTest:!0,depthWrite:!1}),s=new qn(i);return s.scale.set(t*n,t,1),s.renderOrder=1,s.userData.footRatio=Yt.tileSize/2/e.height,s}footedY(e){const t=e.userData.footRatio??0;return e.scale.y*(.5-t)}setHeroAction(e){this.heroAnimator?.setAction(e)}getHeroAction(){return this.heroAnimator?.getAction()??null}addGroundShadow(e,t,n,i=.42){const s=new rs({map:An(gn.glow("#000000")),transparent:!0,opacity:i,depthWrite:!1}),a=new Ue(new as(n*2,n*2),s);return a.rotation.x=-Math.PI/2,a.position.set(e,.015,t),a.renderOrder=1,this.entityGroup.add(a),a}buildGateMesh(e){const t=new zt,n=new ut({color:5857387,roughness:.45,metalness:.85});for(let i=0;i<5;i++){const s=new Ue(new ht(.1,1.2,.1),n);s.position.set((i-2)*.21,.6,0),s.castShadow=!0,t.add(s)}for(const i of[.28,.95]){const s=new Ue(new ht(1.06,.11,.13),n);s.position.set(0,i,0),s.castShadow=!0,t.add(s)}return e&&(t.rotation.y=Math.PI/2),t}buildGates(e){const t=Ge.getInstance();for(const n of t.getGates()){const i=n.direction==="east"||n.direction==="west",s=this.buildGateMesh(i),a=n.x+.5,o=n.y+.5,l=e?.find(c=>c.baseX===a&&c.baseZ===o);s.position.set(a,0,o),this.entityGroup.add(s),this.gates.push({group:s,baseX:a,baseZ:o,offX:i?0:1,offZ:i?1:0,open:l?l.open:n.opened?1:0,target:n.opened?1:0})}}syncPlayer(e=16.67){if(!this.playerSprite)return;const t=Ee.getInstance().pos,n=t.x+.5,i=t.y+.5;this.heroVis.init||(this.heroVis.x=n,this.heroVis.z=i,this.heroVis.init=!0);const s=1-Math.exp(-e/45),a=Math.hypot(n-this.heroVis.x,i-this.heroVis.z);this.heroVis.x+=(n-this.heroVis.x)*s,this.heroVis.z+=(i-this.heroVis.z)*s,this.playerSprite.position.set(this.heroVis.x,this.footedY(this.playerSprite),this.heroVis.z),this.playerShadow&&this.playerShadow.position.set(this.heroVis.x,.015,this.heroVis.z);const o=n-this.heroVis.x;if(o>.005?this.heroFacesLeft=!1:o<-.005&&(this.heroFacesLeft=!0),this.playerSprite.scale.x=this.heroFacesLeft?this.heroBaseW:-this.heroBaseW,this.heroAnimator){const l=a>.02,c=this.heroAnimator.getAction();(c==="idle"||c==="walk")&&l!==(c==="walk")&&this.setHeroAction(l?"walk":"idle")}}render(e){if(!this.ready||!this.renderer||!this.scene||!this.camera)return;const t=Ge.getInstance().currentFloor;if(!t)return;t.floorId!==this.builtFloorId&&this.rebuildFloor();const n=Ge.getInstance(),i=Ee.getInstance().pos,s=n.getRoomAt(i.x,i.y);let a,o;if(s){const f=s.x+s.width/2,p=s.y+s.height/2,v=i.x+.5-f,m=i.y+.5-p,g=Math.max(0,Math.abs(v)-(s.width/2-Mh)),b=Math.max(0,Math.abs(m)-(s.height/2-Mh));a=f+Math.sign(v)*g,o=p+Math.sign(m)*b}else{const f=this.corridorCenterAt(i.x,i.y);a=f?f.x:i.x+.5,o=f?f.z:i.y+.5}const l=this.lastTimeMs?Math.min(50,e-this.lastTimeMs):16.67,c=1-Math.pow(1-.12,l/16.67);this.focusInit?(this.focusX+=(a-this.focusX)*c,this.focusZ+=(o-this.focusZ)*c):(this.focusX=a,this.focusZ=o,this.focusInit=!0),this.lastTimeMs=e,this.updateWallFade(l);const d=U.config.camera3D;if(this.camera.position.set(this.focusX,d.height,this.focusZ+d.distance),this.camera.lookAt(this.focusX,0,this.focusZ),this.starField&&this.starMat&&(this.starField.position.copy(this.camera.position),this.starMat.uniforms.uTime.value=e),this.dirLight){const f=Bt.MOON_OFFSET;this.dirLight.position.set(this.focusX+f.x,f.y,this.focusZ+f.z),this.dirLight.target.position.set(this.focusX,0,this.focusZ),this.dirLight.target.updateMatrixWorld()}if(this.moonGroup){const f=Bt.MOON_OFFSET;this.moonGroup.position.set(this.focusX+f.x,f.y,this.focusZ+f.z)}if(this.syncPlayer(l),this.heroAnimator&&this.heroAnimator.update(l),this.playerTorch){const f=e/1e3,p=.84+.1*Math.sin(f*9.3)+.05*Math.sin(f*23.7+1.3)+.04*Math.sin(f*4.1+.5);this.playerTorch.intensity=1.5*p,this.playerTorch.position.set(i.x+.5+Math.sin(f*7.1)*.035,1.5+Math.sin(f*5.3+2)*.025,i.y+.5+Math.cos(f*6.2)*.035)}let u=0;for(const f of this.torchLights.values())f.intensity=1*(.85+.15*Math.sin(e/130+u*1.7)),u++;if(this.hoverMesh){const f=!!this.hoverTile&&We.started;this.hoverMesh.visible=f,f&&this.hoverTile&&this.hoverMesh.position.set(this.hoverTile.x+.5,.06,this.hoverTile.y+.5)}hn.getInstance().syncTo(this.particleGroup),_r.getInstance().syncTo(this.particleGroup);const h=e/1e3;for(const f of this.glowSprites){const p=.72+.28*Math.sin(h*f.speed+f.phase);f.sprite.material.opacity=p;const v=f.base*(.88+.12*p);f.sprite.scale.set(v,v,1)}for(const f of this.dustItems){const p=(h*f.speed+f.phase)%1;f.sprite.position.set(f.baseX+Math.sin(p*6+f.phase*9)*.06,f.baseY+p*.85,f.baseZ),f.sprite.material.opacity=Math.sin(p*Math.PI)*.3}for(const f of this.gates)Math.abs(f.open-f.target)<.002||(f.open+=(f.target-f.open)*Math.min(1,l/260),f.group.position.x=f.baseX+f.offX*f.open*1.15,f.group.position.z=f.baseZ+f.offZ*f.open*1.15);this.applyShake(l),ra.ready?ra.render():this.renderer.render(this.scene,this.camera)}shake(e,t=280){(this.shakeTime<=0||e>=this.shakeIntensity)&&(this.shakeIntensity=e,this.shakeTotal=t,this.shakeTime=t)}applyShake(e){if(this.shakeTime<=0||!this.camera)return;this.shakeTime=Math.max(0,this.shakeTime-e);const t=this.shakeTotal>0?this.shakeTime/this.shakeTotal:0,n=this.shakeIntensity*t;n>1e-4&&(this.camera.position.x+=(Math.random()-.5)*2*n,this.camera.position.y+=(Math.random()-.5)*2*n,this.camera.position.z+=(Math.random()-.5)*2*n),this.shakeTime<=0&&(this.shakeIntensity=0)}corridorCenterAt(e,t){const n=Ge.getInstance().currentFloor;if(!n)return null;for(const i of n.corridors){if(!i.tiles.some(c=>c.x===e&&c.y===t))continue;let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const c of i.tiles)c.x<s&&(s=c.x),c.x>a&&(a=c.x),c.y<o&&(o=c.y),c.y>l&&(l=c.y);return{x:(s+a+1)/2,z:(o+l+1)/2}}return null}screenToTile(e,t){if(!this.ready||!this.renderer||!this.camera)return null;const n=this.renderer.domElement.getBoundingClientRect();if(n.width===0||n.height===0)return null;const i=new Ce((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const s=new ai(new N(0,1,0),0),a=new N;return this.raycaster.ray.intersectPlane(s,a)?{x:Math.floor(a.x),y:Math.floor(a.z)}:null}resize(){if(!this.ready||!this.renderer||!this.camera||!this.container)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),ra.setSize(e,t)}clearGroup(e){for(let t=e.children.length-1;t>=0;t--){const n=e.children[t];e.remove(n);const i=n;i.children&&i.children.length>0&&this.clearGroup(i);const s=n;s.geometry&&s.geometry.dispose();const a=s.material;Array.isArray(a)?a.forEach(o=>o.dispose()):a?.dispose()}}};C(Bt,"instance"),C(Bt,"MOON_OFFSET",{x:16,y:34,z:22});let qs=Bt;const Ki=class Ki{constructor(){C(this,"quests",new Map);C(this,"maxFloorReached",1);for(const e of U.quests.quests)this.quests.set(e.id,{id:e.id,progress:0,isCompleted:!1,isAccepted:e.prerequisites.length===0});this.bindEvents()}static getInstance(){return Ki.instance||(Ki.instance=new Ki),Ki.instance}bindEvents(){X.on("npcTalked",e=>this.progress("talk_npc",e.npcId)),X.on("monsterDefeated",e=>{const t=this.findObjective("defeat_monster");t&&(!t.objectives[0].targetId||t.objectives[0].targetId===e.entityId||this.matchByName(t,e.name))&&this.progress("defeat_monster")}),X.on("chestOpened",()=>this.progress("open_chest")),X.on("equipmentEquipped",()=>this.progress("equip_item")),X.on("potionUsed",()=>this.progress("use_potion")),X.on("floorChanged",e=>{this.maxFloorReached=Math.max(this.maxFloorReached,e.toFloor);for(const t of U.quests.quests){const n=t.objectives[0];if(n.type==="reach_floor"&&n.value!==void 0){const i=this.quests.get(t.id);i.isAccepted&&!i.isCompleted&&this.maxFloorReached>=n.value&&this.complete(t)}}})}matchByName(e,t){const n=e.objectives[0].targetId,i=U.getMonster(n??"");return i?.name===t||t.includes(i?.name??"\0")}findObjective(e){return U.quests.quests.find(t=>{const n=this.quests.get(t.id);return n.isAccepted&&!n.isCompleted&&t.objectives[0].type===e})??null}progress(e,t){const n=this.findObjective(e);if(!n)return;const i=n.objectives[0];if(i.type!==e||e==="talk_npc"&&i.targetId&&i.targetId!==t)return;const s=this.quests.get(n.id);s.progress+=1,X.emit("questUpdated",{questId:n.id,progress:Math.min(s.progress,i.quantity),total:i.quantity}),s.progress>=i.quantity&&this.complete(n)}complete(e){const t=this.quests.get(e.id);t.isCompleted||(t.isCompleted=!0,this.grantRewards(e.rewards),X.emit("questCompleted",{questId:e.id,name:e.name}),Ft.debug(`[Quest] 完成 ${e.name}`),this.autoAcceptNext())}autoAcceptNext(){for(const e of U.quests.quests){const t=this.quests.get(e.id);t.isAccepted||e.prerequisites.every(n=>this.quests.get(n)?.isCompleted)&&(t.isAccepted=!0,X.emit("questAccepted",{questId:e.id}))}}grantRewards(e){const t=Ee.getInstance();for(const n of e)switch(n.type){case"gold":t.gainGold(n.value??0);break;case"exp":t.gainExp(n.value??0);break;case"keys":t.state.keys+=n.value??1;break;case"potion":n.tier&&t.addPotion(n.tier,n.value??1);break;case"equipment":{const i=Un.getInstance().generate("quest",{forcedQuality:n.quality??"common"});t.addEquipment(i);break}}}get trackedQuest(){for(const e of U.quests.quests){const t=this.quests.get(e.id);if(t.isAccepted&&!t.isCompleted)return{def:t,quest:e}}return null}all(){return U.quests.quests.map(e=>({state:this.quests.get(e.id),def:e}))}exportStates(){return[...this.quests.values()]}restoreStates(e,t){for(const n of e)this.quests.set(n.id,{...n});this.maxFloorReached=t,this.autoAcceptNext()}};C(Ki,"instance");let vi=Ki;const Zi=class Zi{constructor(){C(this,"kills",new Map);X.on("monsterDefeated",e=>{e.entityId;const t=U.monsters.monsters.find(n=>e.name.includes(n.name));t&&this.kills.set(t.id,(this.kills.get(t.id)??0)+1)}),X.on("bossDefeated",e=>{const t=U.monsters.monsters.find(n=>n.category==="boss"&&e.name.includes(n.name));t&&this.kills.set(t.id,(this.kills.get(t.id)??0)+1)})}static getInstance(){return Zi.instance||(Zi.instance=new Zi),Zi.instance}getKillCount(e){return this.kills.get(e)??0}isUnlocked(e){return this.getKillCount(e)>0}entries(){return U.monsters.monsters.filter(e=>e.weight>0||e.category==="boss").map(e=>({def:e,kills:this.getKillCount(e.id),unlocked:this.isUnlocked(e.id)}))}export(){return Object.fromEntries(this.kills)}restore(e){this.kills.clear();for(const[t,n]of Object.entries(e))this.kills.set(t,n)}};C(Zi,"instance");let hs=Zi;const Vn={POTION_QUALITY:"potion_quality",POTION_STRONG:"potion_strong",POTION_HOLY:"potion_holy",EQUIP_RARE:"equip_rare",EQUIP_EPIC:"equip_epic"},xo=[{id:"first_kills",name:"初出茅庐",desc:"累计击败 10 只怪物",unlock:"解锁商人『优质药水』购买权",check:r=>r.kills>=10},{id:"hunter_30",name:"百战猎人",desc:"累计击败 30 只怪物",unlock:"解锁商人『强效药水』购买权",check:r=>r.kills>=30},{id:"dragon_slayer",name:"弑龙者",desc:"击败任意 Boss",unlock:"解锁商人『圣药』购买权",check:r=>r.bosses>=1},{id:"explorer_5",name:"探塔者",desc:"到达第 5 层",unlock:"解锁商人『稀有装备』上架权",check:r=>r.maxFloor>=5},{id:"treasure_8",name:"寻宝家",desc:"累计开启 8 个宝箱",unlock:"解锁商人『史诗装备』上架权",check:r=>r.chests>=8}],Ji=class Ji{constructor(){C(this,"unlocked",new Set);C(this,"kills",0);C(this,"bosses",0);C(this,"chests",0);C(this,"maxFloor",1);this.bindEvents()}static getInstance(){return Ji.instance||(Ji.instance=new Ji),Ji.instance}bindEvents(){X.on("monsterDefeated",e=>{this.kills++,e.isBoss&&this.bosses++,this.evaluate()}),X.on("bossDefeated",()=>{this.bosses++,this.evaluate()}),X.on("chestOpened",()=>{this.chests++,this.evaluate()}),X.on("floorChanged",e=>{this.maxFloor=Math.max(this.maxFloor,e.toFloor),this.evaluate()}),X.on("gameRestarted",()=>this.resetProgress())}restore(e,t){this.unlocked=new Set(Object.keys(e).filter(n=>e[n])),this.kills=t.totalMonstersDefeated,this.bosses=t.totalBossesDefeated,this.chests=t.totalChestsOpened,this.maxFloor=Math.max(1,Ee.getInstance().state.currentFloor),this.evaluate(!0)}export(){return Object.fromEntries([...this.unlocked].map(e=>[e,!0]))}isUnlocked(e){return this.unlocked.has(e)||this.checkByUnlockId(e)}checkByUnlockId(e){const t={kills:this.kills,bosses:this.bosses,chests:this.chests,maxFloor:this.maxFloor};return xo.some(n=>n.unlock.includes(Vn[e]??"\0")&&n.check(t))}list(){const e={kills:this.kills,bosses:this.bosses,chests:this.chests,maxFloor:this.maxFloor};return xo.map(t=>({id:t.id,name:t.name,desc:t.desc,unlock:t.unlock,done:t.check(e)}))}resetProgress(){this.unlocked.clear(),this.kills=0,this.bosses=0,this.chests=0,this.maxFloor=1}evaluate(e=!1){const t={kills:this.kills,bosses:this.bosses,chests:this.chests,maxFloor:this.maxFloor};for(const n of xo)this.unlocked.has(n.id)||!n.check(t)||(this.unlocked.add(n.id),e||(Ft.info(`[成就] ${n.name} 解锁：${n.unlock}`),X.emit("achievementUnlocked",{id:n.id,name:n.name,unlock:n.unlock}),X.emit("notification",{message:`🏆 成就达成「${n.name}」：${n.unlock}`,type:"success",icon:"🏆"})))}};C(Ji,"instance");let yn=Ji;const Qi=class Qi{constructor(){C(this,"flags",{firstEquipment:!1,firstDeath:!1,welcomed:!1});X.on("equipmentGenerated",e=>{e.source!=="tutorial"&&(this.flags.firstEquipment||(this.flags.firstEquipment=!0,X.emit("firstEquipmentGained",{equipment:e.equipment}),X.emit("notification",{message:U.texts.guidance?.firstEquipment??"获得装备！",type:"info",icon:"🗡️"})))}),X.on("playerDied",()=>{this.flags.firstDeath||(this.flags.firstDeath=!0,X.emit("notification",{message:U.texts.guidance?.firstDeath??"死亡后在本层起点复活，损失部分金币。",type:"warning",icon:"💀"}))})}static getInstance(){return Qi.instance||(Qi.instance=new Qi),Qi.instance}export(){return{...this.flags}}restore(e){this.flags={...this.flags,...e}}};C(Qi,"instance");let $s=Qi;const ji=class ji{constructor(){C(this,"stats",{totalMonstersDefeated:0,totalBossesDefeated:0,totalChestsOpened:0,steps:0});X.on("floorChanged",e=>{e.toFloor>U.mapGen.initialFloor&&this.autoSave()}),X.on("monsterDefeated",()=>{this.stats.totalMonstersDefeated++}),X.on("bossDefeated",()=>{this.stats.totalBossesDefeated++}),X.on("chestOpened",()=>{this.stats.totalChestsOpened++}),X.on("playerMoved",()=>{this.stats.steps++})}static getInstance(){return ji.instance||(ji.instance=new ji),ji.instance}get storageKey(){return U.config.save.key}autoSave(){We.settings.autoSave&&this.save("auto")}save(e){const t=Ge.getInstance(),n=t.currentFloor;if(!n)return!1;const i=Ee.getInstance(),s={version:U.config.save.version,lastSaved:new Date().toISOString(),player:{...i.state,potions:{...i.state.potions},bag:[...i.state.bag]},quests:vi.getInstance().exportStates(),bestiary:hs.getInstance().export(),floor:n,entityStates:t.exportEntityStates(),guidance:$s.getInstance().export(),settings:{...We.settings},achievements:yn.getInstance().export(),stats:{...this.stats}};try{return localStorage.setItem(this.storageKey,JSON.stringify(s)),X.emit("saveCompleted",{trigger:e}),Ft.info(`[Save] ${e==="auto"?"自动":"手动"}存档完成（楼层${n.floorId}）`),!0}catch(a){return Ft.error("[Save] 存档失败",a),X.emit("notification",{message:"存档失败：存储空间不足",type:"error",icon:"💾"}),!1}}hasSave(){return localStorage.getItem(this.storageKey)!==null}load(){const e=localStorage.getItem(this.storageKey);if(!e)return!1;try{const t=JSON.parse(e);return t.version!==U.config.save.version&&Ft.warn(`[Save] 版本不匹配 ${t.version} → ${U.config.save.version}`),(!Array.isArray(t.player.hotbar)||t.player.hotbar.length!==5)&&(t.player.hotbar=[null,null,null,null,null]),Ee.getInstance().restore(t.player),pi.getInstance().restoreFloor(t.floor),Ge.getInstance().loadFloor(t.floor,t.entityStates),vi.getInstance().restoreStates(t.quests,t.player.currentFloor),hs.getInstance().restore(t.bestiary),$s.getInstance().restore(t.guidance),We.settings={...U.settings.defaults,...t.settings},this.stats={...t.stats},yn.getInstance().restore(t.achievements??{},this.stats),un.getInstance().snapToPlayer(),X.emit("saveLoaded",{}),Ft.info(`[Save] 读档完成（楼层${t.floor.floorId}）`),!0}catch(t){return Ft.error("[Save] 读档失败",t),!1}}clear(){localStorage.removeItem(this.storageKey),X.emit("saveCleared",{})}get playStats(){return this.stats}};C(ji,"instance");let Kt=ji;const es=class es{constructor(){C(this,"heldDirs",new Set);C(this,"repeatTimer",0);C(this,"mouseClient",null);C(this,"hover",null);C(this,"hoverShowTimer",null);C(this,"hoverHideTimer",null);C(this,"pendingHover",null);this.bindKeyboard()}attachCanvas(e){e.addEventListener("mousemove",t=>{this.mouseClient={x:t.clientX,y:t.clientY}}),e.addEventListener("mouseleave",()=>{this.mouseClient=null,this.scheduleHide()}),e.addEventListener("click",t=>{const n=this.clientToTile(t.clientX,t.clientY);n&&Yn.getInstance().moveTo(n.x,n.y)}),e.addEventListener("contextmenu",t=>t.preventDefault())}static getInstance(){return es.instance||(es.instance=new es),es.instance}bindKeyboard(){window.addEventListener("keydown",e=>{if(e.repeat)return;const t=e.key.toLowerCase();if(We.started&&!We.modalOpen)switch(t){case"b":X.emit("panelToggled",{panel:"inventory",open:!0});return;case"c":X.emit("panelToggled",{panel:"character",open:!0});return;case"j":X.emit("panelToggled",{panel:"quest",open:!0});return;case"g":X.emit("panelToggled",{panel:"bestiary",open:!0});return}if(t==="escape")return;if(t==="k"&&!e.ctrlKey&&!e.metaKey&&We.started){Kt.getInstance().save("manual");return}if(t==="s"&&(e.ctrlKey||e.metaKey)){e.preventDefault(),We.started&&Kt.getInstance().save("manual");return}const n=parseInt(t,10);if(n>=1&&n<=5){const s=Ee.getInstance(),a=s.state.hotbar[n-1];a&&s.getPotionCount(a)>0&&s.usePotion(a);return}const i=this.keyToDir(t);i&&(this.heldDirs.add(`${i[0]},${i[1]}`),this.repeatTimer=U.config.input.moveRepeatMs,Yn.getInstance().tryMove(i[0],i[1]),e.preventDefault())}),window.addEventListener("keyup",e=>{const t=this.keyToDir(e.key.toLowerCase());t&&this.heldDirs.delete(`${t[0]},${t[1]}`)}),window.addEventListener("blur",()=>this.heldDirs.clear())}keyToDir(e){switch(e){case"w":case"arrowup":return[0,-1];case"a":case"arrowleft":return[-1,0];case"d":case"arrowright":return[1,0];case"s":case"arrowdown":return[0,1];default:return null}}clientToTile(e,t){const n=qs.getInstance().screenToTile(e,t);if(n)return n;const i=document.getElementById("game-canvas");if(!i)return null;const s=i.getBoundingClientRect(),a=e-s.left-s.width/2+un.getInstance().x,o=t-s.top-s.height/2+un.getInstance().y,l=Yt.screenToWorld(a,o);return{x:Math.floor(l.col),y:Math.floor(l.row)}}update(e){if(this.heldDirs.size>0&&(this.repeatTimer-=e,this.repeatTimer<=0)){this.repeatTimer=U.config.input.moveRepeatMs;const t=[...this.heldDirs][this.heldDirs.size-1],n=this.dirVector(t);n&&Yn.getInstance().tryMove(n[0],n[1])}this.updateHover()}dirVector(e){switch(e){case"0,-1":return[0,-1];case"0,1":return[0,1];case"-1,0":return[-1,0];case"1,0":return[1,0];default:return null}}updateHover(){const e=U.config.hover;if(!this.mouseClient){this.scheduleHide();return}const t=this.clientToTile(this.mouseClient.x,this.mouseClient.y),n=Ge.getInstance();if(!t||!n.inBounds(t.x,t.y)){this.scheduleHide();return}const s={entity:n.getEntityAt(t.x,t.y),tile:t,tileType:n.tileAt(t.x,t.y)};this.pendingHover=s,qs.getInstance().hoverTile=t,this.hoverHideTimer!==null&&(window.clearTimeout(this.hoverHideTimer),this.hoverHideTimer=null),this.hoverShowTimer===null&&(this.hoverShowTimer=window.setTimeout(()=>{this.hoverShowTimer=null,this.pendingHover?.entity?this.hover=this.pendingHover:this.hover=null},e.showDelayMs))}scheduleHide(){this.hoverShowTimer!==null&&(window.clearTimeout(this.hoverShowTimer),this.hoverShowTimer=null),this.hoverHideTimer===null&&this.hover&&(this.hoverHideTimer=window.setTimeout(()=>{this.hoverHideTimer=null,this.hover=null},U.config.hover.hideDelayMs))}};C(es,"instance");let Xs=es;class zx{constructor(e){C(this,"el");C(this,"lastKey","");this.el=e,document.addEventListener("mousemove",t=>{this.el.classList.contains("hidden")||this.position(t.clientX,t.clientY)})}update(e){if(!e?.entity){this.el.classList.contains("hidden")||(this.el.classList.add("hidden"),this.lastKey="");return}const t=e.entity,n=`${t.id}:${Ge.getInstance().getEntityState(t.id).isOpened?1:0}`;n!==this.lastKey&&(this.lastKey=n,this.el.innerHTML=this.renderContent(t),this.el.classList.remove("hidden"))}renderContent(e){const t=U.texts.hints??{};switch(e.kind){case"monster":case"boss":{const n=U.getMonster(e.monsterId??"");if(!n)return"";const i=Kn.getInstance().monsterStats(n,Ge.getInstance().currentFloor?.floorId??1,e.kind!=="boss"&&!!e.isElite),s=Mr.getInstance().forecast(e),a=s.winnable?`<span class="ok">预计损耗 ${s.estDamage} HP</span>`:`<span class="bad">危险！预计损耗 ${s.estDamage} HP</span>`;return`
          <div class="tt-title" style="color:${n.color}">${i.name}</div>
          <div>❤️ ${i.hp}　⚔️ ${i.attack}　🛡️ ${i.defense}</div>
          <div class="dim">掉落：${i.gold}金币 / ${i.exp}经验${e.kind==="boss"?" / 必掉装备":""}</div>
          <div>${a}</div>
          <div class="tt-hint">（${t.attack??"左键攻击"}）</div>
        `}case"potion":{const n=U.getPotion(e.potionTier??"");return`
          <div class="tt-title" style="color:${n?.color??"#ff5a7a"}">${n?.name??"药水"}</div>
          <div class="dim">回复 ${Math.round((n?.healPct??0)*100)}% 生命</div>
          <div class="tt-hint">（${t.pickup??"左键拾取"}）</div>
        `}case"chest":{const n=Ge.getInstance().isChestOpened(e);return`
          <div class="tt-title" style="color:#ffcc00">${e.chestTier==="grand"?"大宝箱":"宝箱"}${n?"（已开启）":""}</div>
          ${n?'<div class="dim">空空如也</div>':'<div class="dim">金币 / 装备 / 药水</div>'}
          ${n?"":`<div class="tt-hint">（${t.open??"左键打开"}）</div>`}
        `}case"npc":{const n=U.getNpc(e.npcId??"");return n?`
          <div class="tt-title" style="color:${n.color}">${n.name}</div>
          <div class="dim">“${n.lines[0]}”</div>
          ${n.isWitch?'<div class="dim">可交易秘制药水</div>':""}
          <div class="tt-hint">（${n.isMerchant||n.isWitch?t.trade??"左键交易":t.talk??"左键对话"}）</div>
        `:""}case"fountain":{const n=Ge.getInstance(),i=n.getEntityState(e.id).isUsed===!0,s=U.config.witch,a=s.fountainCostBase+(n.currentFloor?.floorId??1)*s.fountainCostPerFloor;return`
          <div class="tt-title" style="color:#8ff0ff">治疗泉${i?"（已枯竭）":""}</div>
          ${i?'<div class="dim">泉水已干涸</div>':`<div class="dim">回复全部生命（💰 ${a}）</div>`}
          ${i?"":`<div class="tt-hint">（${t.heal??"左键治疗"}）</div>`}
        `}case"stair":return`
          <div class="tt-title" style="color:#44ddff">通往第 ${e.targetFloor} 层</div>
          <div class="tt-hint">（${t.stair??"点击前往"}）</div>
        `;default:return""}}position(e,t){const n=U.config.hover,i=this.el.getBoundingClientRect();let s=e+n.offsetX,a=t+n.offsetY;s+i.width>window.innerWidth-8&&(s=e-i.width-n.offsetX),a+i.height>window.innerHeight-8&&(a=t-i.height-n.offsetY),this.el.style.left=`${s}px`,this.el.style.top=`${a}px`}}class El{static init(e){this.host=e,X.on("notification",t=>this.show(t.message,t.type,t.icon)),X.on("questCompleted",t=>this.show(`任务完成：${t.name}`,"success","📋")),X.on("levelUp",t=>this.show(`升级！Lv.${t.newLevel}（攻击+${t.gainedAttack} 防御+${t.gainedDefense} 生命+${t.gainedHp}）`,"success","⬆️")),X.on("saveCompleted",t=>this.show(t.trigger==="auto"?"已自动存档":"已手动存档","info","💾")),X.on("bossDefeated",t=>this.show(`击败Boss：${t.name}！`,"success","🏆")),X.on("questAccepted",()=>{})}static show(e,t="info",n="ℹ️"){if(!this.host)return;const i=document.createElement("div");i.className=`notification ${t}`,i.innerHTML=`<span class="nt-icon">${n}</span><span>${e}</span>`,this.host.appendChild(i),window.setTimeout(()=>{i.classList.add("fade-out"),window.setTimeout(()=>i.remove(),400)},2800)}}C(El,"host",null);const ts=class ts{constructor(){C(this,"shops",new Map)}static getInstance(){return ts.instance||(ts.instance=new ts),ts.instance}openShop(e,t){const n=`${e}@${t}`,i=this.shops.get(n);if(i)return i;const s=e==="npc_witch"?this.buildWitchStock(t):this.buildMerchantStock(t);return this.shops.set(n,s),s}buildWitchStock(e){const t=U.config.witch,n=yn.getInstance(),i={quality:Vn.POTION_QUALITY,strong:Vn.POTION_STRONG,holy:Vn.POTION_HOLY},s=U.potions.potions.filter(o=>e>=o.minFloor&&e<=o.maxFloor).filter(o=>!i[o.tier]||n.isUnlocked(i[o.tier])).sort((o,l)=>l.healPct-o.healPct);return(s.length>0?s:U.potions.potions).slice(0,2).map(o=>({kind:"potion",tier:o.tier,name:o.name,icon:o.icon,price:Math.round(o.price*1.2),quantity:xe.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(o.healPct*100)}% 生命（女巫秘制）`}))}buildMerchantStock(e){const t=U.config.merchant;Ee.getInstance();const n=[],i=yn.getInstance(),s={quality:Vn.POTION_QUALITY,strong:Vn.POTION_STRONG,holy:Vn.POTION_HOLY},a=U.potions.potions.filter(p=>e>=p.minFloor&&e<=p.maxFloor).filter(p=>!s[p.tier]||i.isUnlocked(s[p.tier])).sort((p,v)=>v.healPct-p.healPct),o=a[0];o&&n.push({kind:"potion",tier:o.tier,name:o.name,icon:o.icon,price:o.price,quantity:xe.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(o.healPct*100)}% 生命`});const l=a[1];l&&n.push({kind:"potion",tier:l.tier,name:l.name,icon:l.icon,price:l.price,quantity:xe.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(l.healPct*100)}% 生命`});const c=Math.round(t.keyPriceBase+t.keyPricePer10Floors*Math.floor(e/10));n.push({kind:"key",name:"钥匙",icon:"🗝️",price:c,quantity:xe.randInt(t.keyCountMin,t.keyCountMax),desc:"开启上锁的宝箱"});const d=yn.getInstance(),u=U.equipment.qualityOrder;let h=1;d.isUnlocked(Vn.EQUIP_RARE)&&(h=Math.max(h,u.indexOf("rare"))),d.isUnlocked(Vn.EQUIP_EPIC)&&(h=Math.max(h,u.indexOf("epic")));const f=xe.randInt(t.equipmentCountMin,t.equipmentCountMax);for(let p=0;p<f;p++){let v=Un.getInstance().generate("merchant",{floorId:e}),m=0;for(;u.indexOf(v.quality)>h&&m++<4;)v=Un.getInstance().generate("merchant",{floorId:e,forcedQuality:u[Math.max(0,Math.min(h,u.length-1))]});n.push({kind:"equipment",name:v.name,icon:v.slot==="weapon"?"🗡️":"🛡️",price:v.buyPrice,quantity:1,equipment:v,desc:v.slot==="weapon"?`攻击 +${v.attack}`:`防御 +${v.defense}`})}return n}buy(e,t,n){const s=this.openShop(e,t)[n];if(!s)return{ok:!1,reason:"无此商品"};if(s.quantity===0)return{ok:!1,reason:"已售罄"};const a=Ee.getInstance();return a.spendGold(s.price)?(s.kind==="potion"&&s.tier?(a.addPotion(s.tier,1),X.emit("potionPurchased",{tier:s.tier,price:s.price})):s.kind==="key"?(a.state.keys+=1,X.emit("keyPurchased",{price:s.price})):s.kind==="equipment"&&s.equipment&&a.addEquipment(s.equipment),s.quantity>0&&(s.quantity-=1),{ok:!0}):{ok:!1,reason:"金币不足"}}sell(e){const t=Ee.getInstance(),n=t.state.bag.find(i=>i.id===e);return n?n.isFavorite?{ok:!1,price:0,reason:"已收藏的装备无法回收"}:t.state.weaponId===e||t.state.armorId===e?{ok:!1,price:0,reason:"正在穿戴的装备无法回收"}:(t.removeEquipment(e),t.gainGold(n.sellPrice),X.emit("equipmentSold",{equipmentId:e,price:n.sellPrice}),{ok:!0,price:n.sellPrice}):{ok:!1,price:0,reason:"无此装备"}}};C(ts,"instance");let os=ts;const Sh={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6};function Gx(r,e=.16){const t=parseInt(r.slice(1),16);return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${e})`}const ci=class ci{constructor(e,t,n){C(this,"el");C(this,"name");this.name=t,this.el=document.createElement("div"),this.el.className="overlay-panel hidden",this.el.dataset.panel=t,this.el.innerHTML=`<div class="op-box"><div class="op-head"><span>${n}</span><button class="op-close">✕</button></div><div class="op-body"></div></div>`,e.appendChild(this.el),this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.addEventListener("click",i=>{i.target===this.el&&this.close()})}get body(){return this.el.querySelector(".op-body")}get isOpen(){return!this.el.classList.contains("hidden")}open(){this.isOpen||(this.el.classList.remove("hidden"),ci.stack.push(this),We.pushModal(),this.onOpen())}close(){this.isOpen&&(this.el.classList.add("hidden"),ci.stack=ci.stack.filter(e=>e!==this),We.popModal())}onOpen(){}static closeTop(){const e=ci.stack[ci.stack.length-1];return e?(e.close(),!0):!1}};C(ci,"stack",[]);let On=ci;class Hx{constructor(e){C(this,"inventory");C(this,"character");C(this,"quest");C(this,"bestiary");C(this,"achievements");C(this,"settings");C(this,"battleLog");this.inventory=new Vx(e),this.character=new Wx(e),this.quest=new qx(e),this.bestiary=new $x(e),this.achievements=new Xx(e),this.settings=new Yx(e),this.battleLog=new Kx(e)}open(e){switch(e){case"inventory":this.inventory.open();break;case"character":this.character.open();break;case"quest":this.quest.open();break;case"bestiary":this.bestiary.open();break;case"achievements":this.achievements.open();break;case"settings":this.settings.open();break}}handleEscape(){On.closeTop()}}class Vx extends On{constructor(t){super(t,"inventory","📦 背包");C(this,"selected",null);C(this,"filter","all");this.el.querySelector(".op-box").classList.add("op-box-inv"),X.on("equipmentGenerated",()=>{this.isOpen&&this.render()}),X.on("equipmentEquipped",()=>{this.isOpen&&this.render()}),X.on("equipmentSold",()=>{this.isOpen&&this.render()}),X.on("potionUsed",()=>{this.isOpen&&this.render()}),X.on("potionPurchased",()=>{this.isOpen&&this.render()})}onOpen(){this.render()}render(){const t=Ee.getInstance(),n=t.state.bag;this.selected=n.find(f=>f.id===this.selected?.id)??null;const i=n.filter(f=>this.filter==="weapon"?f.slot==="weapon":this.filter==="armor"?f.slot==="armor":!(this.filter==="potion"||this.filter==="other")),s=[{key:"all",label:"全部",count:n.length},{key:"weapon",label:"🗡️ 武器",count:n.filter(f=>f.slot==="weapon").length},{key:"armor",label:"🛡️ 胸甲",count:n.filter(f=>f.slot==="armor").length},{key:"potion",label:"🧪 药水",count:Object.values(t.state.potions).reduce((f,p)=>f+p,0)},{key:"other",label:"🗝️ 其他",count:t.state.keys>0?1:0}],a=[...i].sort((f,p)=>+!!p.isFavorite-+!!f.isFavorite),o=a.length===0?'<div class="dim inv-empty">此类没有物品</div>':a.map(f=>{const p=U.equipment.quality[f.quality],v=f.id===t.state.weaponId||f.id===t.state.armorId;return`<div class="bag-cell ${f.id===this.selected?.id?"active":""} ${f.isFavorite?"fav":""}"
                     draggable="true" data-id="${f.id}"
                     style="border-color:${p.color};background:${Gx(p.color)}"
                     title="拖到左侧装备栏穿戴；点击查看详情">
          <div class="cell-icon" style="border-color:${p.color}">${f.slot==="weapon"?"🗡️":"🛡️"}</div>
          <div class="cell-name" style="color:${p.color}">${f.name}${f.isFavorite?" ⭐":""}</div>
          <div class="cell-sub dim">Lv.${f.level}${v?" 已穿戴":""}</div>
        </div>`}).join(""),l=["crude","normal","quality","strong","holy"].map(f=>{const p=U.getPotion(f),v=t.getPotionCount(f);return`<div class="potion-row" draggable="${v>0}" data-tier="${f}"
                  title="${v>0?"拖到底部快捷栏绑定；点击使用":"数量为0"}">
        <span class="potion-name">${U.potionIconImg(f)} ${p.name}</span>
        <span>×${v} <span class="dim">(${Math.round(p.healPct*100)}%)</span></span>
        <button class="potion-use" data-tier-use="${f}" ${v===0?"disabled":""}>使用</button>
      </div>`}).join(""),c=`
      <div class="potion-row"><span>🗝️ 钥匙</span><span>×${t.state.keys}</span><span></span></div>
    `,d=this.filter==="potion"?`<div class="inv-potions"><div class="dim hotbar-hint">💡 将药水拖到底部快捷栏槽位绑定（数字键1-5快速使用）</div>${l}</div>`:this.filter==="other"?`<div class="inv-potions">${c}</div>`:`<div class="inv-list">${o}</div>`,u=f=>{const p=f==="weapon"?t.weapon:t.armor,v=p?U.equipment.quality[p.quality]:null;return`<div class="equip-slot ${p?"filled":"empty-slot"}" data-eslot="${f}">
        <div class="equip-slot-icon">${f==="weapon"?"🗡️":"🛡️"}</div>
        ${p&&v?`<div class="equip-slot-name" style="color:${v.color}">${p.name}</div>
             <button class="equip-slot-unequip" data-unequip="${f}">卸下</button>`:'<div class="equip-slot-name dim">空</div>'}
      </div>`};this.body.innerHTML=`
      <div class="inv-tabs">${s.map(f=>`<button class="inv-tab ${this.filter===f.key?"active":""}" data-filter="${f.key}">${f.label} <span class="dim">${f.count}</span></button>`).join("")}</div>
      <div class="inv-main">
        <div class="inv-equip-col">
          <h3 class="sub-title">装备栏</h3>
          ${u("weapon")}
          ${u("armor")}
          <div class="dim equip-hint">💡 拖动背包中的装备到对应栏位穿戴</div>
        </div>
        <div class="inv-middle">${d}</div>
        <div class="inv-detail">${this.filter==="potion"||this.filter==="other"?'<div class="dim">选择装备查看详情与对比</div>':this.selected?this.detailHtml(this.selected):'<div class="dim">选择一件装备查看详情与对比</div>'}</div>
      </div>
    `,this.body.querySelectorAll("[data-filter]").forEach(f=>{f.addEventListener("click",()=>{this.filter=f.dataset.filter,this.render()})}),this.body.querySelectorAll("[data-fav]").forEach(f=>{f.addEventListener("click",p=>{p.stopPropagation();const v=n.find(m=>m.id===f.dataset.fav);v&&(v.isFavorite=!v.isFavorite),this.render()})}),this.body.querySelectorAll(".bag-cell").forEach(f=>{const p=f;p.addEventListener("click",()=>{this.selected=n.find(v=>v.id===p.dataset.id)??null,this.render()}),p.addEventListener("dragstart",v=>{const m=v;m.dataTransfer?.setData("equip-id",p.dataset.id),m.dataTransfer&&(m.dataTransfer.effectAllowed="move")})}),this.body.querySelectorAll(".equip-slot").forEach(f=>{const p=f.dataset.eslot;f.addEventListener("dragover",v=>{v.preventDefault(),f.classList.add("drag-over")}),f.addEventListener("dragleave",()=>f.classList.remove("drag-over")),f.addEventListener("drop",v=>{v.preventDefault(),f.classList.remove("drag-over");const m=v.dataTransfer?.getData("equip-id"),g=m?n.find(b=>b.id===m):null;g&&g.slot===p?Ee.getInstance().equip(m):g&&X.emit("notification",{message:"该装备类型与此栏位不符",type:"warning",icon:"⚠️"})})}),this.body.querySelectorAll("[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{Ee.getInstance().unequip(f.dataset.unequip),this.render()})});const h=this.selected;this.body.querySelectorAll('[data-act="equip"]').forEach(f=>{f.addEventListener("click",()=>{h&&Ee.getInstance().equip(h.id)})}),this.body.querySelectorAll('[data-act="sell"]').forEach(f=>{f.addEventListener("click",()=>{h&&os.getInstance().sell(h.id)})}),this.body.querySelectorAll("[data-tier-use]").forEach(f=>{f.addEventListener("click",()=>{Ee.getInstance().usePotion(f.dataset.tierUse),this.render()})}),this.body.querySelectorAll('.potion-row[draggable="true"]').forEach(f=>{f.addEventListener("dragstart",p=>{const v=p;v.dataTransfer?.setData("potion-tier",f.dataset.tier),v.dataTransfer&&(v.dataTransfer.effectAllowed="copy")})})}detailHtml(t){const n=Ee.getInstance(),i=U.equipment.quality[t.quality],s=t.slot==="weapon"?n.weapon:n.armor,a=(h,f,p)=>{const v=f-p,m=v>0?"up":v<0?"down":"dim",g=v>0?` <span class="${m}">(▲${v} vs 已穿戴)</span>`:v<0?` <span class="${m}">(▼${Math.abs(v)} vs 已穿戴)</span>`:"";return`<div>${h} ${f}${g}</div>`},o=s?.affixes??[],l=t.affixes.map(h=>{const f=o.find(v=>v.type===h.type),p=!f;return`<div class="affix-row ${p?"new-affix":""}">✦ ${h.name} Lv.${t.level}　${this.affixDesc(h)}${p?' <span class="up">[新]</span>':f&&f.value!==h.value?` <span class="${h.value>f.value?"up":"down"}">(${h.value>f.value?"▲":"▼"}${Math.abs(h.value-f.value)})</span>`:""}</div>`}),c=o.filter(h=>!t.affixes.some(f=>f.type===h.type)),d=c.map(h=>`<div class="affix-row down">✦ ${h.name} ${this.affixDesc(h)} <span>[缺失]</span></div>`).join("");let u="";if(s){const h=Sh[t.quality]-Sh[s.quality];h!==0&&(u=`<span class="${h>0?"up":"down"}">（${h>0?"品质提升▲":"品质下降▼"}）</span>`)}return`
      <div class="eq-detail">
        <div class="eq-title-row">
          <div class="eq-title" style="color:${i.color}">${t.slot==="weapon"?"🗡️":"🛡️"} ${t.name}</div>
          <button class="fav-star detail-fav ${t.isFavorite?"on":""}" data-fav="${t.id}"
                  title="${t.isFavorite?"取消收藏":"收藏：置顶显示且无法回收"}">${t.isFavorite?"⭐ 已收藏":"☆ 收藏"}</button>
        </div>
        <div class="dim">品质：${i.name}${u}　装备等级：${t.level}</div>
        <div class="eq-stats">
          ${a("⚔️ 攻击力",t.attack,s?.attack??0)}
          ${a("🛡️ 防御力",t.defense,s?.defense??0)}
        </div>
        ${t.affixes.length>0||c.length>0?`<div class="affix-list">${l.join("")}${d}</div>`:""}
        <div class="dim">回收价：${t.sellPrice} 金币</div>
        <div class="eq-actions">
          <button data-act="equip" class="btn-primary">${s?"替换穿戴（旧装回背包）":"穿戴"}</button>
          <button data-act="sell" ${t.isFavorite?'disabled title="已收藏的装备无法回收"':""}>出售 +${t.sellPrice}💰</button>
        </div>
      </div>
    `}affixDesc(t){return U.equipment.affixes.find(i=>i.name===t.name)?.description?.replace("{v}",String(t.value))??`${t.name}+${t.value}`}}class Wx extends On{constructor(e){super(e,"character","👤 角色")}onOpen(){const e=Ee.getInstance(),t=e.stats(),n=(i,s)=>s?`<div class="char-equip" data-slot="${i}"><span>${i==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}</span><span style="color:${U.equipment.quality[s.quality].color}">${s.name}</span><button data-unequip="${i}">卸下</button></div>`:`<div class="char-equip dim"><span>${i==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}</span><span>未装备</span></div>`;this.body.innerHTML=`
      <div class="char-grid">
        <div>等级</div><div>Lv.${e.state.level}（${e.state.exp}/${Kn.getInstance().expToNext(e.state.level)} 经验）</div>
        <div>生命</div><div>${Math.ceil(e.state.hp)} / ${t.maxHp}</div>
        <div>攻击</div><div>${t.attack} <span class="dim">(基础 ${e.state.baseAttack})</span></div>
        <div>防御</div><div>${t.defense} <span class="dim">(基础 ${e.state.baseDefense})</span></div>
        <div>暴击率</div><div>${t.critRate.toFixed(0)}%</div>
        <div>闪避率</div><div>${t.dodgeRate.toFixed(0)}%</div>
        ${t.lifesteal>0?`<div>嗜血</div><div>${t.lifesteal}%</div>`:""}
        ${t.fireDamage>0?`<div>业火</div><div>+${t.fireDamage}</div>`:""}
        ${t.goldBonus>0?`<div>贪婪</div><div>+${t.goldBonus}%</div>`:""}
        ${t.expBonus>0?`<div>博学</div><div>+${t.expBonus}%</div>`:""}
        ${t.bossDamage>0?`<div>屠龙</div><div>+${t.bossDamage}%</div>`:""}
        <div>金币</div><div>💰 ${e.state.gold}</div>
        <div>钥匙</div><div>🗝️ ${e.state.keys}</div>
        <div>楼层</div><div>第 ${e.state.currentFloor} 层</div>
      </div>
      <h3 class="sub-title">装备槽（共2个）</h3>
      ${n("weapon",e.weapon)}
      ${n("armor",e.armor)}
    `,this.body.querySelectorAll("[data-unequip]").forEach(i=>{i.addEventListener("click",()=>{Ee.getInstance().unequip(i.dataset.unequip),this.onOpen()})})}}class qx extends On{constructor(e){super(e,"quest","📋 任务")}onOpen(){const e=vi.getInstance().all().map(({state:t,def:n})=>{const i=t.isCompleted?'<span class="ok">✔ 已完成</span>':t.isAccepted?`<span class="dim">进行中 ${Math.min(t.progress,n.objectives[0].quantity)}/${n.objectives[0].quantity}</span>`:'<span class="dim">未解锁</span>',s=n.rewards.map(a=>{switch(a.type){case"gold":return`${a.value}金币`;case"potion":return`${U.getPotion(a.tier??"crude")?.name}×${a.value??1}`;case"equipment":return"装备";case"exp":return`${a.value}经验`;case"keys":return`钥匙×${a.value??1}`;default:return""}}).join("、");return`<div class="quest-row ${t.isCompleted?"done":t.isAccepted?"active-quest":"locked"}">
        <div class="quest-name">${t.isAccepted||t.isCompleted?"📌":"🔒"} ${n.name} ${i}</div>
        <div class="dim">${n.description}</div>
        <div class="dim">奖励：${s}</div>
      </div>`}).join("");this.body.innerHTML=e}}class $x extends On{constructor(e){super(e,"bestiary","📖 图鉴")}onOpen(){const e=Ee.getInstance().state.currentFloor,t=hs.getInstance().entries().map(({def:n,kills:i,unlocked:s})=>{if(!s)return'<div class="bestiary-row locked"><span>？？？</span><span class="dim">尚未遭遇</span></div>';const a=Kn.getInstance().monsterStats(n,e,!1);return`<div class="bestiary-row">
        <span style="color:${n.color}">● ${n.name}${n.category==="boss"?"（Boss）":""}</span>
        <span class="dim">❤️${a.hp} ⚔️${a.attack} 🛡️${a.defense}</span>
        <span class="dim">击杀×${i}</span>
      </div>`}).join("");this.body.innerHTML=t}}class Xx extends On{constructor(e){super(e,"achievements","🏆 成就"),X.on("achievementUnlocked",()=>{this.isOpen&&this.render()})}onOpen(){this.render()}render(){const e=yn.getInstance().list().map(n=>`
      <div class="quest-row ${n.done?"done":""} achievement-row">
        <div class="quest-name">${n.done?"🏆":"🔒"} ${n.name}</div>
        <div class="dim">${n.desc}</div>
        <div class="${n.done?"ok":"dim"}">🎁 ${n.unlock}${n.done?"（已生效）":""}</div>
      </div>
    `).join(""),t=yn.getInstance().list().filter(n=>n.done).length;this.body.innerHTML=`
      <div class="dim" style="margin-bottom:8px">达成进度：${t} / ${yn.getInstance().list().length}。
      达成成即可解锁商人/女巫的高阶物品获取权。</div>
      ${e}
    `}}class Yx extends On{constructor(e){super(e,"settings","⚙️ 设置")}onOpen(){this.body.innerHTML=`
      <div class="settings-rows">
        <label class="setting-row">
          <span>自动存档（到达新楼层时）</span>
          <input type="checkbox" id="opt-autosave" ${We.settings.autoSave?"checked":""} />
        </label>
        <label class="setting-row">
          <span>帧率限制（省电/降温）</span>
          <select id="opt-fpscap" class="fps-select">
            <option value="0" ${We.settings.fpsCap===0?"selected":""}>不限制</option>
            <option value="60" ${We.settings.fpsCap===60?"selected":""}>60 FPS</option>
            <option value="45" ${We.settings.fpsCap===45?"selected":""}>45 FPS</option>
            <option value="30" ${We.settings.fpsCap===30?"selected":""}>30 FPS</option>
          </select>
        </label>
        <div class="setting-row dim">手动存档：任意时刻按 S 键或点击 💾 按钮</div>
      </div>
      <h3 class="sub-title">显示</h3>
      <div class="settings-rows">
        <label class="setting-row">
          <span>显示模式</span>
          <select id="opt-display" class="fps-select">
            <option value="windowed">窗口化</option>
            <option value="fullscreen">全屏</option>
            <option value="borderless">无边框窗口</option>
          </select>
        </label>
        <label class="setting-row">
          <span>分辨率（窗口尺寸）</span>
          <select id="opt-resolution" class="fps-select">
            <option value="1280x720">1280 × 720</option>
            <option value="1600x900">1600 × 900</option>
            <option value="1920x1080">1920 × 1080</option>
            <option value="2560x1440">2560 × 1440</option>
          </select>
        </label>
        <div class="setting-row dim" id="display-hint">全屏可随时用 F11 或改回窗口化退出；无边框窗口切换会自动存档并重载游戏。</div>
      </div>
      <div class="eq-actions">
        <button id="opt-save" class="btn-primary">💾 手动存档</button>
        <button id="opt-load">📂 读取存档</button>
        <button id="opt-title" class="btn-danger">🏠 回到首页</button>
        <button id="opt-clear" class="btn-danger">🗑️ 清除存档</button>
        <button id="opt-restart" class="btn-danger">🔄 重新开始</button>
      </div>
      <h3 class="sub-title">操作说明</h3>
      <div class="dim help-text">
        方向键/WASD移动 · 点击地板走一步 · 点击怪物/宝箱自动走近交互 · 悬浮查看信息<br/>
        B背包 C角色 J任务 G图鉴 Esc设置 K存档（或Ctrl+S）· 数字键1-5使用快捷栏（背包拖入药水绑定，右键解绑）<br/>
        撞向怪物即战斗 · 走上楼梯进入下一层
      </div>
    `;const e=this.body.querySelector("#opt-autosave");e.addEventListener("change",()=>{We.setSetting("autoSave",e.checked)});const t=this.body.querySelector("#opt-fpscap");t.addEventListener("change",()=>{We.setSetting("fpsCap",parseInt(t.value,10))}),this.initDisplaySettings(),this.body.querySelector("#opt-save").addEventListener("click",()=>Kt.getInstance().save("manual")),this.body.querySelector("#opt-load").addEventListener("click",()=>{Kt.getInstance().load()&&this.close()}),this.body.querySelector("#opt-clear").addEventListener("click",()=>{window.confirm("确定清除存档？不可恢复。")&&Kt.getInstance().clear()}),this.body.querySelector("#opt-title").addEventListener("click",()=>{window.confirm("回到首页？当前进度将自动存档。")&&(this.close(),X.emit("returnToTitle",{}))}),this.body.querySelector("#opt-restart").addEventListener("click",()=>{window.confirm("确定重新开始？当前进度将丢失（请先存档）。")&&(Yn.getInstance().restart(),this.close())})}initDisplaySettings(){const e=this.body.querySelector("#opt-display"),t=this.body.querySelector("#opt-resolution"),n=this.body.querySelector("#display-hint"),i=window.motaDesktop;let s={mode:"windowed",resolution:"1600x900"};try{s={...s,...JSON.parse(localStorage.getItem("motarpg_display")||"{}")}}catch{}e.value=s.mode,t.value=s.resolution,i||(n.textContent="浏览器环境：仅支持全屏/退出全屏（无边框窗口与分辨率为桌面版功能）。");const a=()=>{const o=e.value,l=t.value;localStorage.setItem("motarpg_display",JSON.stringify({mode:o,resolution:l})),i?(o==="borderless"&&s.mode!=="borderless"&&Kt.getInstance().save("manual"),i.setDisplayMode({mode:o,resolution:l})):o==="fullscreen"?document.documentElement.requestFullscreen?.().catch(()=>{}):document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{}),s={mode:o,resolution:l}};e.addEventListener("change",a),t.addEventListener("change",a)}}class Kx extends On{constructor(e){super(e,"battleLog","⚔️ 战斗"),X.on("battleEnded",t=>{this.show(t.result.win?"🏆 战斗胜利":"💀 战斗失败",t.result.log.map(n=>`<div class="log-line ${n.kind}">${n.text}</div>`).join(""))})}show(e,t){this.el.querySelector(".op-head span").textContent=e,this.body.innerHTML=`${t}<div class="eq-actions"><button class="btn-primary op-close2">继续</button></div>`,this.open(),this.body.querySelector(".op-close2").addEventListener("click",()=>this.close())}}class Zx{constructor(e){C(this,"el");C(this,"npcId","");C(this,"lineIndex",0);this.el=document.createElement("div"),this.el.className="overlay-panel hidden dialog-panel",e.appendChild(this.el),X.on("npcTalked",t=>this.show(t.npcId)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}show(e){U.getNpc(e)&&(this.npcId=e,this.lineIndex=0,We.pushModal(),this.el.classList.remove("hidden"),this.render())}render(){const e=U.getNpc(this.npcId),t=e.lines[this.lineIndex]??e.lines[e.lines.length-1],n=this.lineIndex<e.lines.length-1,i=e.portrait?`<img class="dialog-portrait" src="${e.portrait}" alt="${e.name}" draggable="false">`:"";this.el.innerHTML=`
      <div class="dialog-box">
        ${i}
        <div class="dialog-name" style="color:${e.color}">${e.name}</div>
        <div class="dialog-text">“${t}”</div>
        <div class="dialog-actions">
          ${e.isWitch?'<button id="dlg-shop" class="btn-primary">🧪 秘药</button>':e.isBlacksmith?'<button id="dlg-forge" class="btn-primary">⚒️ 锻造</button>':e.isMerchant?'<button id="dlg-shop" class="btn-primary">🛒 交易</button>':""}
          ${n?'<button id="dlg-next">继续 ▶</button>':'<button id="dlg-close" class="btn-primary">结束对话</button>'}
        </div>
      </div>
    `,this.el.querySelector("#dlg-next")?.addEventListener("click",()=>{this.lineIndex++,this.render()}),this.el.querySelector("#dlg-close")?.addEventListener("click",()=>this.close()),this.el.querySelector("#dlg-shop")?.addEventListener("click",()=>{const s=Ee.getInstance();this.close(),X.emit("merchantOpened",{npcId:this.npcId,roomId:s.state.currentRoomId})}),this.el.querySelector("#dlg-forge")?.addEventListener("click",()=>{const s=Ee.getInstance();this.close(),X.emit("blacksmithOpened",{npcId:this.npcId,roomId:s.state.currentRoomId})})}close(){this.el.classList.add("hidden"),We.popModal()}}class Jx{constructor(e){C(this,"el");C(this,"hoverEl");C(this,"npcId","");C(this,"tab","buy");this.el=document.createElement("div"),this.el.className="overlay-panel hidden",e.appendChild(this.el),this.hoverEl=document.createElement("div"),this.hoverEl.id="shop-hover",this.hoverEl.classList.add("hidden"),document.body.appendChild(this.hoverEl),X.on("merchantOpened",t=>this.show(t.npcId)),X.on("goldChanged",()=>{this.el.classList.contains("hidden")||this.render()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()}),document.addEventListener("mousemove",t=>{this.hoverEl.classList.contains("hidden")||this.positionHover(t.clientX,t.clientY)})}show(e){this.npcId=e,this.tab="buy",We.pushModal(),this.el.classList.remove("hidden"),this.render()}render(){const e=Ee.getInstance(),t=e.state.currentFloor,n=os.getInstance().openShop(this.npcId,t),i=this.npcId==="npc_witch",s=i?"buy":this.tab,a=n.map((c,d)=>{const u=c.quantity===0,h=e.state.gold>=c.price,f=c.equipment?U.equipment.quality[c.equipment.quality]:null,p=c.equipment&&f?`<div class="dim" style="color:${f.color}">${c.equipment.name} · ${c.equipment.affixes.map(g=>g.name).join("·")||"无词条"}</div>`:`<div class="dim">${c.desc}</div>`,v=c.equipment?` data-hover-equip="${d}"`:c.kind==="potion"&&c.tier?` data-hover-potion="${c.tier}"`:"",m=c.kind==="potion"&&c.tier?U.potionIconImg(c.tier):c.icon;return`<div class="shop-row shop-item ${u?"soldout":""}"${v}>
        <div>
          <div>${m} ${c.name} <span class="dim">×${c.quantity===-1?"∞":c.quantity}</span></div>
          ${p}
        </div>
        <button data-buy="${d}" ${u||!h?"disabled":""}>${c.price} 💰</button>
      </div>`}).join(""),o=[...e.state.bag].sort((c,d)=>+!!d.isFavorite-+!!c.isFavorite),l=o.length===0?'<div class="dim">没有可回收的装备</div>':o.map(c=>{const d=U.equipment.quality[c.quality],u=c.id===e.state.weaponId||c.id===e.state.armorId,h=u||!!c.isFavorite,f=[c.isFavorite?'<span class="sell-tag fav-tag">⭐ 已收藏</span>':"",u?'<span class="sell-tag equipped-tag">已装备</span>':""].join("");return`<div class="shop-row shop-item" data-hover-sell="${c.id}">
          <div>
            <div><span style="color:${d.color}">${c.name}</span> <span class="dim">Lv.${c.level}</span> ${f}</div>
            <div class="dim">${c.slot==="weapon"?"🗡️ 武器":"🛡️ 胸甲"} · ⚔️${c.attack} 🛡️${c.defense}</div>
          </div>
          <button data-sell="${c.id}" ${h?"disabled":""}>+${c.sellPrice} 💰</button>
        </div>`}).join("");this.el.innerHTML=`
      <div class="op-box op-box-inv">
        <div class="op-head"><span>${i?"🧪 女巫·薇薇安":"🛒 商人·老古"}</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="shop-header">
            <div class="shop-gold">持有金币：💰 ${e.state.gold}</div>
            <div class="shop-tabs">
              <button class="inv-tab ${s==="buy"?"active":""}" data-shoptab="buy">${i?"🧪 秘药":"🛒 购买"}</button>
              ${i?"":`<button class="inv-tab ${s==="sell"?"active":""}" data-shoptab="sell">💰 回收</button>`}
            </div>
          </div>
          <div class="shop-content">${s==="buy"?a:l}</div>
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-shoptab]").forEach(c=>{c.addEventListener("click",()=>{this.tab=c.dataset.shoptab,this.render()})}),this.el.querySelectorAll("[data-buy]").forEach(c=>{c.addEventListener("click",()=>{const d=os.getInstance().buy(this.npcId,t,parseInt(c.dataset.buy,10));d.ok||X.emit("notification",{message:d.reason??"购买失败",type:"warning",icon:"🛒"}),this.render()})}),this.el.querySelectorAll("[data-sell]").forEach(c=>{c.addEventListener("click",()=>{const d=os.getInstance().sell(c.dataset.sell);d.ok||X.emit("notification",{message:d.reason??"回收失败",type:"warning",icon:"💰"}),this.render()})}),this.el.querySelectorAll("[data-hover-equip]").forEach(c=>{const d=n[parseInt(c.dataset.hoverEquip,10)];d?.equipment&&this.bindHover(c,()=>this.compareHtml(d.equipment))}),this.el.querySelectorAll("[data-hover-sell]").forEach(c=>{const d=e.state.bag.find(u=>u.id===c.dataset.hoverSell);d&&this.bindHover(c,()=>this.compareHtml(d))}),this.el.querySelectorAll("[data-hover-potion]").forEach(c=>{const d=U.getPotion(c.dataset.hoverPotion);d&&this.bindHover(c,()=>`
        <div class="hover-card">
          <div class="tt-title"><img class="potion-icon" src="${U.potionIconSrc(c.dataset.hoverPotion)}" alt=""> ${d.name}</div>
          <div>❤️ 回复 ${Math.round(d.healPct*100)}% 最大生命</div>
          <div class="dim">售价：${d.price} 💰（可拖入底部快捷栏）</div>
        </div>`)})}compareHtml(e){const t=Ee.getInstance(),n=e.slot==="weapon"?t.weapon:t.armor,i=n?this.equipCard(n,"已穿戴"):`<div class="hover-card"><div class="tt-title dim">${e.slot==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}栏</div><div class="dim">未穿戴装备</div></div>`;return this.equipCard(e,e.slot==="weapon"?"购买（武器）":"购买（胸甲）")+i}equipCard(e,t){const n=U.equipment.quality[e.quality];return`<div class="hover-card" style="border-color:${n.color}">
      <div class="tt-title" style="color:${n.color}">${e.name}</div>
      <div class="dim">${t} · ${n.name} · Lv.${e.level}</div>
      <div class="hover-stats">
        <div>⚔️ 攻击力 <b>${e.attack}</b></div>
        <div>🛡️ 防御力 <b>${e.defense}</b></div>
      </div>
      ${e.affixes.length>0?`<div class="affix-list">${e.affixes.map(i=>{const s=U.equipment.affixes.find(a=>a.name===i.name);return`<div class="affix-row">✦ ${i.name} ${s?.description?.replace("{v}",String(i.value))??`+${i.value}`}</div>`}).join("")}</div>`:'<div class="dim">无词条</div>'}
      <div class="dim">回收价 ${e.sellPrice} 💰</div>
    </div>`}bindHover(e,t){e.addEventListener("mouseenter",()=>{this.hoverEl.innerHTML=t(),this.hoverEl.classList.remove("hidden")}),e.addEventListener("mouseleave",()=>this.hoverEl.classList.add("hidden"))}positionHover(e,t){const i=this.hoverEl.getBoundingClientRect();let s=e+14,a=t+14;s+i.width>window.innerWidth-8&&(s=e-i.width-14),a+i.height>window.innerHeight-8&&(a=Math.max(8,t-i.height-14)),this.hoverEl.style.left=`${s}px`,this.hoverEl.style.top=`${a}px`}close(){this.el.classList.add("hidden"),this.hoverEl.classList.add("hidden"),We.popModal()}}const Eh={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6};class Qx{constructor(e){C(this,"el");C(this,"npcId","");C(this,"selectedId",null);this.el=document.createElement("div"),this.el.className="overlay-panel hidden",e.appendChild(this.el),X.on("blacksmithOpened",t=>this.show(t.npcId)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}show(e){this.npcId=e,We.pushModal(),this.el.classList.remove("hidden"),this.render()}render(){const e=Ee.getInstance();Un.getInstance();const t=e.state.bag,n=t.find(a=>a.id===this.selectedId)??null,i=t.length===0?'<div class="dim inv-empty">背包里没有装备</div>':[...t].sort((a,o)=>+!!o.isFavorite-+!!a.isFavorite).map(a=>{const o=U.equipment.quality[a.quality],l=a.id===e.state.weaponId||a.id===e.state.armorId;return`<div class="bag-cell ${a.id===this.selectedId?"active":""}" data-id="${a.id}"
                         style="border-color:${o.color};background:rgba(30,34,42,0.9)">
              <div class="cell-icon" style="border-color:${o.color}">${a.slot==="weapon"?"🗡️":"🛡️"}</div>
              <div class="cell-name" style="color:${o.color}">${a.name}</div>
              <div class="cell-sub dim">Lv.${a.level}${l?" 已穿戴":""}</div>
            </div>`}).join("");let s='<div class="dim">选择一件装备进行锻造</div>';if(n){const a=U.equipment.quality[n.quality],o=Eh[n.quality]<Eh.epic,l=20+n.level*10,c=40+n.level*30,d=o?U.equipment.quality[_o(n.quality)].basePrice*3+n.level*15:0;s=`
        <div class="eq-detail">
          <div class="eq-title" style="color:${a.color}">${n.slot==="weapon"?"🗡️":"🛡️"} ${n.name}</div>
          <div class="dim">品质：${a.name} · Lv.${n.level}${n.id===e.state.weaponId||n.id===e.state.armorId?" · 已穿戴":""}</div>
          <div class="eq-stats">
            <div>⚔️ 攻击力 <b>${n.attack}</b></div>
            <div>🛡️ 防御力 <b>${n.defense}</b></div>
          </div>
          ${n.affixes.length>0?`<div class="affix-list">${n.affixes.map(u=>`<div class="affix-row">✦ ${u.name} ${u.value}${u.isPercent?"%":""}</div>`).join("")}</div>`:""}
          <div class="eq-actions bs-actions">
            <button data-forge="reforge" ${e.state.gold<l?"disabled":""}>🔨 重铸词条<br/><span class="dim">${l} 💰</span></button>
            <button data-forge="level" ${n.level>=50||e.state.gold<c?"disabled":""}>⚡ 锤炼升级<br/><span class="dim">${n.level>=50?"已满级":c+" 💰"}</span></button>
            <button data-forge="quality" ${!o||e.state.gold<d?"disabled":""}>🔥 淬火提品质<br/><span class="dim">${o?`${_o(n.quality)==="epic"?"→ 史诗 ":"→ "+U.equipment.quality[_o(n.quality)].name+" "}${d} 💰`:"史诗以上不可淬火"}</span></button>
          </div>
          <div class="dim bs-hint">锻造会覆盖原词条/数值，失败不扣费（必定成功）。</div>
        </div>
      `}this.el.innerHTML=`
      <div class="op-box op-box-inv">
        <div class="op-head"><span>⚒️ 铁匠铺·霍恩的锻炉</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="shop-header">
            <div class="shop-gold">持有金币：💰 ${e.state.gold}</div>
            <div class="dim">选择装备 → 选择锻造服务</div>
          </div>
          <div class="inv-main">
            <div class="inv-middle" style="height:100%"><div class="inv-list">${i}</div></div>
            <div></div>
            <div class="inv-detail">${s}</div>
          </div>
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll(".bag-cell").forEach(a=>{a.addEventListener("click",()=>{this.selectedId=a.dataset.id,this.render()})}),this.el.querySelectorAll("[data-forge]").forEach(a=>{a.addEventListener("click",()=>{n&&this.forge(n,a.dataset.forge)})})}forge(e,t){const n=Ee.getInstance(),i=Un.getInstance();let s=0,a=null,o="";if(t==="reforge")s=20+e.level*10,a=i.reforge(e),o="词条已重铸";else if(t==="level")s=40+e.level*30,a=i.upgradeLevel(e),o=`锤炼至 Lv.${e.level+1}`;else if(t==="quality"){const l=U.equipment.qualityOrder,c=l[l.indexOf(e.quality)+1];s=U.equipment.quality[c].basePrice*3+e.level*15,a=i.upgradeQuality(e),o=`淬火至「${U.equipment.quality[c].name}」`}if(!a){X.emit("notification",{message:"这件装备已到服务上限",type:"warning",icon:"⚒️"});return}if(!n.spendGold(s)){X.emit("notification",{message:"金币不足",type:"warning",icon:"💰"});return}Object.assign(e,a),X.emit("equipmentEquipped",{slot:e.slot,equipmentId:e.id,oldId:e.id}),X.emit("notification",{message:`⚒️ ${o}！`,type:"success",icon:"⚒️"}),this.render()}close(){this.el.classList.add("hidden"),We.popModal()}}function _o(r){const e=U.equipment.qualityOrder;return e[Math.min(e.length-1,e.indexOf(r)+1)]}class jx{constructor(e){C(this,"el");C(this,"triggeredRooms",new Set);this.el=document.createElement("div"),this.el.className="overlay-panel hidden event-panel",e.appendChild(this.el),X.on("roomEntered",t=>this.maybeTrigger(t.roomId,t.roomType)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}maybeTrigger(e,t){if(We.modalOpen)return;const n=`${Ee.getInstance().state.currentFloor}:${e}`;if(this.triggeredRooms.has(n))return;this.triggeredRooms.add(n);const i=Ee.getInstance().state.currentFloor,o=U.events.events.filter(l=>i>=l.minFloor&&l.roomTypes.includes(t)&&xe.chance(l.chance))[0];o&&this.show(o)}show(e){We.pushModal(),this.el.classList.remove("hidden");const t=Ee.getInstance().state.currentFloor;this.el.innerHTML=`
      <div class="op-box">
        <div class="op-head"><span>${e.icon} ${e.name}</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="event-desc">${e.description}</div>
          ${e.options.map((n,i)=>`<button class="event-option" data-opt="${i}">${n.text}</button>`).join("")}
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-opt]").forEach(n=>{n.addEventListener("click",()=>{const i=e.options[parseInt(n.dataset.opt,10)];this.applyEffects(i.effects,t),this.close()})})}applyEffects(e,t){const n=Ee.getInstance(),i=[];for(const s of e){const a=s.perFloor?s.value+s.perFloor*t:s.value;switch(s.type){case"gold":n.gainGold(Math.round(a)),i.push(`获得 ${Math.round(a)} 金币`);break;case"exp":n.gainExp(Math.round(a)),i.push(`获得 ${Math.round(a)} 经验`);break;case"healPct":{const o=n.heal(Math.round(n.maxHp*a/100));i.push(`回复 ${o} 生命`);break}case"damagePct":{const o=Math.round(n.maxHp*a/100);n.damage(o),i.push(`损失 ${o} 生命`);break}}}i.length>0&&(hn.getInstance().floatText(n.state.x,n.state.y,i.join("，"),"#ffdd66"),X.emit("notification",{message:`${i.join("，")}`,type:"info",icon:"✨"}))}close(){this.el.classList.add("hidden"),We.popModal()}}const e_=[{id:1,name:"摇篮曲",desc:"轻松体验"},{id:2,name:"普通",desc:"标准平衡"},{id:3,name:"困难",desc:"挑战加大"},{id:4,name:"噩梦",desc:"高强度"},{id:5,name:"地狱",desc:"极限数值"},{id:6,name:"炼狱",desc:"几乎无解"},{id:7,name:"天堂",desc:"终极挑战"}];class t_{constructor(e){C(this,"el");this.el=e,this.show()}show(){const e=Kt.getInstance().hasSave();this.el.classList.remove("hidden"),this.el.innerHTML=`
      <div class="title-box">
        <h1>${U.texts.titles?.gameTitle??"无尽之塔"}</h1>
        <div class="title-sub">魔塔RPG · 2.5D</div>
        <div class="title-buttons">
          <button id="title-new" class="btn-primary">⚔️ 开始新游戏</button>
          <button id="title-continue" ${e?"":"disabled"}>📂 继续冒险</button>
          <button id="title-exit">🚪 退出游戏</button>
        </div>
        <div class="title-help dim">
          方向键/WASD 移动 · 点击地板走一步 · 点击怪物/宝箱交互 · 悬浮查看信息<br/>
          B 背包 · C 角色 · J 任务 · G 图鉴 · Esc 设置 · K 存档 · 1-5 快捷栏
        </div>
      </div>
    `,this.el.querySelector("#title-new").addEventListener("click",()=>this.showSetup()),this.el.querySelector("#title-continue").addEventListener("click",()=>this.start(!0)),this.el.querySelector("#title-exit").addEventListener("click",()=>{window.motaDesktop?window.motaDesktop.quit():(window.close(),window.setTimeout(()=>{const t=this.el.querySelector("#title-exit");t&&(t.textContent="浏览器请用 Ctrl+W / Alt+F4 关闭")},300))})}showSetup(){const e=We.difficulty;this.el.innerHTML=`
      <div class="title-box">
        <h1 class="setup-title">新的冒险</h1>
        <div class="title-sub">选择难度</div>
        <div class="diff-grid">
          ${e_.map(t=>`
            <button class="diff-card ${t.id===e?"sel":""}" data-d="${t.id}">
              <span class="diff-name">${t.name}</span>
              <span class="diff-desc dim">${t.desc}</span>
            </button>`).join("")}
        </div>
        <div class="setup-row">
          <label class="setup-label" for="setup-seed">种子</label>
          <input id="setup-seed" class="setup-seed" type="text" placeholder="敬请期待" disabled />
        </div>
        <div class="dim setup-hint">种子系统开发中：同一种子将生成完全相同的世界</div>
        <div class="title-buttons setup-actions">
          <button id="setup-start" class="btn-primary">⚔️ 开始冒险</button>
          <button id="setup-back">← 返回</button>
        </div>
      </div>
    `;for(const t of Array.from(this.el.querySelectorAll(".diff-card")))t.addEventListener("click",()=>{this.el.querySelectorAll(".diff-card").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"),We.setDifficulty(Number(t.dataset.d))});this.el.querySelector("#setup-start").addEventListener("click",()=>this.start(!1)),this.el.querySelector("#setup-back").addEventListener("click",()=>this.show())}start(e){if(!(e&&Kt.getInstance().load()))if(!e)pi.getInstance().enterFloor(1,!1);else return;this.enterGame()}enterGame(){un.getInstance().snapToPlayer(),Yn.getInstance(),this.el.classList.add("hidden"),br.getInstance().showGame(),We.started=!0,X.emit("gameStarted",{}),X.emit("notification",{message:U.texts.guidance?.tutorialWelcome??"欢迎来到无尽之塔",type:"info",icon:"🏰"})}}const n_={start:{icon:"↑",color:"#e8eaf0"},combat:{icon:"☠",color:"#ff9999"},elite:{icon:"!",color:"#ff3344"},merchant:{icon:"$",color:"#55dd77"},blacksmith:{icon:"⚒️",color:"#ffb060"},witch:{icon:"🧪",color:"#c78cff"},chest:{icon:"💰",color:"#ffdd44"},boss:{icon:"💀",color:"#ff5555"},end:{icon:"↓",color:"#aaddff"},rest:{icon:"♨",color:"#ffaa66"}};class i_{constructor(e){C(this,"container");C(this,"canvas");this.container=document.createElement("div"),this.container.id="minimap",this.canvas=document.createElement("canvas"),this.canvas.className="minimap-canvas",this.container.appendChild(this.canvas),e.appendChild(this.container),X.on("roomEntered",()=>this.refresh()),X.on("floorChanged",()=>this.refresh()),X.on("saveLoaded",()=>this.refresh()),X.on("gameRestarted",()=>this.refresh())}refresh(){const e=Ge.getInstance().currentFloor,t=this.canvas.getContext("2d");if(!e||e.rooms.length===0){this.container.classList.add("hidden");return}this.container.classList.remove("hidden");const n=Math.min(...e.rooms.map(g=>g.gx)),i=Math.max(...e.rooms.map(g=>g.gx)),s=Math.min(...e.rooms.map(g=>g.gy)),a=Math.max(...e.rooms.map(g=>g.gy)),o=i-n+1,l=a-s+1,c=Math.max(12,Math.min(24,Math.floor(260/Math.max(o,l)))),d=10,u=o*c+d*2,h=l*c+d*2,f=window.devicePixelRatio||1;this.canvas.width=u*f,this.canvas.height=h*f,this.canvas.style.width=`${u}px`,this.canvas.style.height=`${h}px`,t.setTransform(f,0,0,f,0,0),t.clearRect(0,0,u,h);const p=g=>({x:d+(g.gx-n)*c,y:d+(g.gy-s)*c});t.strokeStyle="#6a7590",t.lineWidth=2,t.beginPath();for(const g of e.connections){const b=e.rooms.find(S=>S.id===g.from),E=e.rooms.find(S=>S.id===g.to);if(!b||!E)continue;const y=p(b),w=p(E);t.moveTo(y.x+c/2,y.y+c/2),t.lineTo(w.x+c/2,w.y+c/2)}t.stroke();const v=Ee.getInstance().state.currentRoomId;for(const g of e.rooms){const b=p(g);t.fillStyle=g.id===v?"#5a6070":"#444a58",t.fillRect(b.x,b.y,c,c);const{icon:E,color:y}=n_[g.type];t.fillStyle=y,t.font=`${Math.floor(c*.62)}px "Microsoft YaHei", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(E,b.x+c/2,b.y+c/2+1)}const m=e.rooms.find(g=>g.id===v);if(m){const g=p(m);t.strokeStyle="#ffdd44",t.lineWidth=2,t.strokeRect(g.x-2.5,g.y-2.5,c+5,c+5)}}}const ns=class ns{constructor(){C(this,"leftHpFill");C(this,"leftHpText");C(this,"leftExpFill");C(this,"leftStats");C(this,"leftEquips");C(this,"roomInfoEl");C(this,"questTrackEl");C(this,"bottomPotions");C(this,"bossWarningEl");C(this,"panels");C(this,"tooltip");C(this,"miniMap");C(this,"titleScreen",null);C(this,"hotbarBound",!1)}static getInstance(){return ns.instance||(ns.instance=new ns),ns.instance}build(){const e=document.getElementById("app");e.innerHTML=`
      <div id="title-screen"></div>
      <div id="game-root" class="hidden">
        <aside id="left-panel" class="side-panel">
          <h2 class="panel-title">👤 勇者</h2>
          <div class="hp-wrap">
            <div class="hp-bar"><div id="hp-fill" class="hp-fill"></div></div>
            <div id="hp-text" class="hp-text"></div>
          </div>
          <div class="exp-wrap">
            <div class="exp-bar"><div id="exp-fill" class="exp-fill"></div></div>
            <div id="exp-text" class="exp-text"></div>
          </div>
          <div id="left-stats" class="stat-list"></div>
          <h3 class="sub-title">装备</h3>
          <div id="left-equips" class="equip-list"></div>
        </aside>
        <main id="center-area">
          <div id="room-info" class="room-info"></div>
          <div id="game-container"></div>
          <div id="tooltip" class="hidden"></div>
          <div id="notifications"></div>
          <div id="boss-warning" class="hidden"></div>
        </main>
        <aside id="right-panel" class="side-panel">
          <h2 class="panel-title">📋 任务追踪</h2>
          <div id="quest-track"></div>
          <h2 class="panel-title" style="margin-top:12px">🗺️ 当前位置</h2>
          <div id="floor-info"></div>
        </aside>
        <footer id="bottom-bar">
          <div id="quick-potions"></div>
          <div id="func-buttons">
            <button data-panel="inventory">📦 背包(B)</button>
            <button data-panel="character">👤 角色(C)</button>
            <button data-panel="quest">📋 任务(J)</button>
            <button data-panel="bestiary">📖 图鉴(G)</button>
            <button data-panel="achievements">🏆 成就</button>
            <button data-panel="settings">⚙️ 设置(Esc)</button>
            <button id="btn-save">💾 存档(K)</button>
          </div>
        </footer>
        <div id="overlay-layer"></div>
      </div>
    `,qs.getInstance().init(document.getElementById("game-container")),this.tooltip=new zx(document.getElementById("tooltip")),El.init(document.getElementById("notifications")),this.panels=new Hx(document.getElementById("overlay-layer")),new Zx(document.getElementById("overlay-layer")),new Jx(document.getElementById("overlay-layer")),new Qx(document.getElementById("overlay-layer")),new jx(document.getElementById("overlay-layer")),new Sa(document.getElementById("overlay-layer")),this.titleScreen=new t_(document.getElementById("title-screen")),this.leftHpFill=document.getElementById("hp-fill"),this.leftHpText=document.getElementById("hp-text"),this.leftExpFill=document.getElementById("exp-fill"),this.leftStats=document.getElementById("left-stats"),this.leftEquips=document.getElementById("left-equips"),this.roomInfoEl=document.getElementById("room-info"),this.questTrackEl=document.getElementById("quest-track"),this.bottomPotions=document.getElementById("quick-potions"),this.bossWarningEl=document.getElementById("boss-warning"),this.bottomPotions.innerHTML=[0,1,2,3,4].map(t=>`<div class="hotbar-slot" data-slot="${t}" title="快捷栏 ${t+1}：从背包拖入药水绑定；点击使用；右键解绑">
        <span class="key-num">${t+1}</span>
        <span class="slot-content"></span>
      </div>`).join(""),this.bindHotbarEvents(),document.querySelectorAll("#func-buttons button[data-panel]").forEach(t=>{t.addEventListener("click",()=>{X.emit("panelToggled",{panel:t.dataset.panel,open:!0})})}),document.getElementById("btn-save").addEventListener("click",()=>{Kt.getInstance().save("manual")}),this.miniMap=new i_(document.getElementById("center-area")),this.bindEvents(),this.refreshAll(),this.miniMap.refresh()}bindEvents(){const e=()=>this.refreshAll();for(const t of["hpChanged","goldChanged","expChanged","levelUp","potionUsed","potionPurchased","equipmentEquipped","equipmentGenerated","equipmentSold","keyPurchased","saveLoaded","gameRestarted","playerRevived"])X.on(t,e);X.on("roomEntered",t=>{this.roomInfoEl.textContent=`${t.name} · 深度${t.depth}`,this.refreshRight()}),X.on("floorChanged",t=>{this.refreshRight(),this.roomInfoEl.textContent=`第 ${t.toFloor} 层`}),X.on("questUpdated",()=>this.refreshRight()),X.on("questCompleted",()=>this.refreshRight()),X.on("bossWarning",t=>this.showBossWarning(t.floor,t.name)),X.on("playerDied",()=>this.showDeathNotice()),X.on("returnToTitle",()=>this.returnToTitle()),X.on("panelToggled",t=>{t.open&&this.panels.open(t.panel)}),window.addEventListener("keydown",t=>{if(t.key!=="Escape"||!We.started)return;document.querySelector(".overlay-panel:not(.hidden)")?this.panels.handleEscape():this.panels.open("settings")})}updateHover(){const e=Xs.getInstance().hover;this.tooltip.update(e)}refreshAll(){const e=Ee.getInstance(),t=e.stats(),n=Math.max(0,Math.min(100,e.state.hp/t.maxHp*100));this.leftHpFill.style.width=`${n}%`,this.leftHpText.textContent=`❤️ ${Math.ceil(e.state.hp)} / ${t.maxHp}`;const i=Kn.getInstance().expToNext(e.state.level);this.leftExpFill.style.width=`${Math.min(100,e.state.exp/i*100)}%`,this.leftStats.innerHTML=`
      <div>Lv.${e.state.level} <span id="exp-text" class="dim">(${e.state.exp}/${i} 经验)</span></div>
      <div>⚔️ 攻击 ${t.attack} <span class="dim">(基础${e.state.baseAttack})</span></div>
      <div>🛡️ 防御 ${t.defense} <span class="dim">(基础${e.state.baseDefense})</span></div>
      <div>🎯 暴击 ${t.critRate.toFixed(0)}%　💨 闪避 ${t.dodgeRate.toFixed(0)}%</div>
      ${t.lifesteal>0?`<div>🩸 嗜血 ${t.lifesteal}%</div>`:""}
      ${t.fireDamage>0?`<div>🔥 业火 +${t.fireDamage}</div>`:""}
      ${t.bossDamage>0?`<div>🐉 屠龙 +${t.bossDamage}%</div>`:""}
      <div>💰 金币 ${e.state.gold}　🗝️ 钥匙 ${e.state.keys}</div>
    `;const s=(a,o)=>{if(!o)return`<div class="equip-item dim">${a}：未装备</div>`;const l=U.equipment.quality[o.quality];return`<div class="equip-item">${a}：<span style="color:${l?.color??"#fff"}">${o.name}</span></div>`};this.leftEquips.innerHTML=s("🗡️",e.weapon)+s("🛡️",e.armor),this.refreshHotbar(),this.refreshRight()}bindHotbarEvents(){if(this.hotbarBound)return;this.hotbarBound=!0;const e=Ee.getInstance();this.bottomPotions.querySelectorAll(".hotbar-slot").forEach(t=>{const n=parseInt(t.dataset.slot,10);t.addEventListener("dragover",i=>{i.preventDefault(),t.classList.add("drag-over")}),t.addEventListener("dragleave",()=>t.classList.remove("drag-over")),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("drag-over");const s=i.dataTransfer?.getData("potion-tier");s&&(e.setHotbarSlot(n,s),this.refreshHotbar())}),t.addEventListener("click",()=>{const i=e.state.hotbar[n];i&&e.getPotionCount(i)>0&&e.usePotion(i)}),t.addEventListener("contextmenu",i=>{i.preventDefault(),e.state.hotbar[n]&&(e.setHotbarSlot(n,null),this.refreshHotbar())})})}refreshHotbar(){const e=Ee.getInstance();this.bottomPotions.querySelectorAll(".hotbar-slot").forEach(t=>{const n=parseInt(t.dataset.slot,10),i=e.state.hotbar[n],s=t.querySelector(".slot-content");if(i){const a=U.getPotion(i),o=e.getPotionCount(i);t.classList.toggle("empty",o===0),s.innerHTML=`${U.potionIconImg(i,"potion-icon hotbar-icon")}<span class="count">${o}</span>`,t.title=`${a.name}：回复${Math.round(a.healPct*100)}%生命（按此键使用；右键解绑）`}else t.classList.add("empty"),s.innerHTML=""})}refreshRight(){Ee.getInstance();const t=Ge.getInstance().currentFloor,n=document.getElementById("floor-info");if(t){const s=t.kind==="initial"?"初始层":t.kind==="boss"?"Boss层":"";n.innerHTML=`<div class="floor-big">第 ${t.floorId} 层</div><div class="dim">${s} · ${t.rooms.length}个房间</div>`}const i=vi.getInstance().trackedQuest;if(!i)this.questTrackEl.innerHTML='<div class="dim">暂无进行中的任务</div>';else{const s=i.quest.objectives[0];this.questTrackEl.innerHTML=`
        <div class="quest-name">📌 ${i.quest.name}</div>
        <div class="quest-desc">${i.quest.description}</div>
        <div class="quest-progress">${Math.min(i.def.progress,s.quantity)} / ${s.quantity}</div>
        <div class="quest-guide dim">💡 ${i.quest.guidance}</div>
      `}}showBossWarning(e,t){this.bossWarningEl.innerHTML=`<div class="boss-warning-text">⚠️ 警告：${t} 盘踞于此（第${e}层Boss）</div>`,this.bossWarningEl.classList.remove("hidden"),this.bossWarningEl.classList.add("flash"),window.setTimeout(()=>{this.bossWarningEl.classList.add("hidden"),this.bossWarningEl.classList.remove("flash")},2600)}showDeathNotice(){El.show("你倒下了……在楼层起点复活（金币-20%）","warning","💀")}showGame(){document.getElementById("title-screen").classList.add("hidden"),document.getElementById("game-root").classList.remove("hidden"),this.refreshAll()}returnToTitle(){Kt.getInstance().save("manual"),We.started=!1,Ge.getInstance().reset(),document.getElementById("game-root").classList.add("hidden"),document.getElementById("title-screen").classList.remove("hidden"),this.titleScreen?.show()}};C(ns,"instance");let br=ns;const is=class is{constructor(){C(this,"running",!1);C(this,"lastTime",0);C(this,"lastProcessedTime",0);C(this,"lastRenderTime",0);C(this,"watchdog",null)}static getInstance(){return is.instance||(is.instance=new is),is.instance}start(){this.running||(this.running=!0,this.lastTime=performance.now(),requestAnimationFrame(e=>this.frame(e)),this.watchdog=window.setInterval(()=>{this.running&&performance.now()-this.lastTime>120&&this.frame(performance.now())},50))}stop(){this.running=!1,this.watchdog!==null&&(window.clearInterval(this.watchdog),this.watchdog=null)}frame(e){if(!this.running||e<=this.lastProcessedTime)return;this.lastProcessedTime=e;const t=We.settings.fpsCap;if(t>0&&e-this.lastRenderTime<1e3/t-1.5){requestAnimationFrame(i=>this.frame(i));return}this.lastRenderTime=e;const n=Math.min(50,e-this.lastTime);this.lastTime=e,un.getInstance().update(n),Xs.getInstance().update(n),Yn.getInstance().update(n),hn.getInstance().update(n),_r.getInstance().update(n),qs.getInstance().render(e),br.getInstance().updateHover(),requestAnimationFrame(i=>this.frame(i))}};C(is,"instance");let Ea=is;const rd=[{d:"north",dx:0,dy:-1},{d:"south",dx:0,dy:1},{d:"west",dx:-1,dy:0},{d:"east",dx:1,dy:0}];function s_(r,e){const t=r.length,n=Math.max(...r.map(o=>o.length)),i=Array.from({length:t},()=>Array(n).fill(1)),s=[],a=U.monsters.monsters.filter(o=>o.category==="normal"&&e>=o.floorMin&&e<=o.floorMax);for(let o=0;o<t;o++)for(let l=0;l<n;l++){const c=r[o][l]??"1";switch(c){case"0":case" ":i[o][l]=0;break;case"1":i[o][l]=1;break;case"2":case"3":{if(i[o][l]=0,a.length===0)break;const d=xe.pickWeighted(a,u=>u.weight);s.push({id:Xt.next("ent"),kind:"monster",x:l,y:o,monsterId:d.id,isElite:c==="3"});break}case"4":i[o][l]=0,s.push({id:Xt.next("ent"),kind:"chest",x:l,y:o,chestTier:"normal"});break;case"5":i[o][l]=0,s.push({id:Xt.next("ent"),kind:"npc",x:l,y:o,npcId:"npc_merchant"});break;case"B":i[o][l]=0,s.push({id:Xt.next("ent"),kind:"boss",x:l,y:o,monsterId:"ancient_dragon"});break;case"D":i[o][l]=0,s.push({id:Xt.next("ent"),kind:"stair",x:l,y:o,targetFloor:e+1});break;case"S":i[o][l]=0;break;default:Ft.warn(`[Prefab] 楼层${e} (${l},${o}) 非法字符 '${c}'，按墙壁处理`),i[o][l]=1;break}}return{grid:i,entities:s}}function r_(r,e,t,n){const i=(s,a)=>r.reduce((o,l,c)=>o||(s>=l.x&&s<l.x+l.w&&a>=l.y&&a<l.y+l.h?{id:`pf${e}_r${c}`}:null),null);return r.map((s,a)=>{const o=`pf${e}_r${a}`,l=(d,u)=>d>=s.x&&d<s.x+s.w&&u>=s.y&&u<s.y+s.h,c=[];for(let d=s.y;d<s.y+s.h;d++)for(let u=s.x;u<s.x+s.w;u++)if(!(!(u===s.x||u===s.x+s.w-1||d===s.y||d===s.y+s.h-1)||n[d]?.[u]!==0))for(const{d:f,dx:p,dy:v}of rd){const m=u+p,g=d+v;l(m,g)||n[g]?.[m]===0&&c.push({x:u,y:d,direction:f,toRoomId:i(m,g)?.id??""})}return{id:o,floorId:e,type:s.type,order:a,gx:s.x,gy:s.y,width:s.w,height:s.h,x:s.x,y:s.y,centerX:s.x+Math.floor(s.w/2),centerY:s.y+Math.floor(s.h/2),fromDirection:null,depth:0,onPathA:!1,onPathB:!1,mountedOn:null,doors:c,entities:t.filter(d=>d.x>=s.x&&d.x<s.x+s.w&&d.y>=s.y&&d.y<s.y+s.h)}})}function a_(r,e,t){const n=new Set;if(r[t]?.[e]!==0)return n;const i=[{x:e,y:t}];for(n.add(`${e},${t}`);i.length>0;){const s=i.shift();for(const{dx:a,dy:o}of rd){const l=s.x+a,c=s.y+o,d=`${l},${c}`;n.has(d)||r[c]?.[l]===0&&(n.add(d),i.push({x:l,y:c}))}}return n}function o_(r){const{grid:e,entities:t}=s_(r.rows,r.floorId),n=e[0]?.length??0,i=e.length;let s=r.entry??null;if(!s)for(let d=0;d<i&&!s;d++)for(let u=0;u<n&&!s;u++)(r.rows[d]?.[u]??"1")==="S"&&(s={x:u,y:d});const a=r_(r.rooms,r.floorId,t,e);if(a.length===0)throw new Error(`[Prefab] 楼层${r.floorId} 未定义任何房间`);const o=[s,a[0]?{x:a[0].centerX,y:a[0].centerY}:null].find(d=>!!d&&e[d.y]?.[d.x]===0);if(!o)throw new Error(`[Prefab] 楼层${r.floorId} 入口无效（必须是空地）`);for(const d of t){if(a.some(p=>d.x>=p.x&&d.x<p.x+p.width&&d.y>=p.y&&d.y<p.y+p.height))continue;let h=a[0],f=1/0;for(const p of a){const v=Math.abs(p.centerX-d.x)+Math.abs(p.centerY-d.y);v<f&&(f=v,h=p)}Ft.warn(`[Prefab] 楼层${r.floorId} 实体 ${d.id} (${d.x},${d.y}) 在所有房间外，挂到 ${h.id}`),h.entities.push(d)}const l=[],c=new Set;for(const d of a){const u=e[d.centerY]?.[d.centerX]===0?{x:d.centerX,y:d.centerY}:a.map(f=>({x:f.centerX,y:f.centerY})).find(f=>e[f.y]?.[f.x]===0);if(!u)continue;const h=a_(e,u.x,u.y);for(const f of a){if(f.id===d.id||e[f.centerY]?.[f.centerX]!==0||!h.has(`${f.centerX},${f.centerY}`))continue;const p=[d.id,f.id].sort().join("|");c.has(p)||(c.add(p),l.push({from:d.id,to:f.id}))}}return{floorId:r.floorId,kind:r.kind??"normal",rooms:a,corridors:[],connections:l,grid:e,width:n,height:i,entryX:o.x,entryY:o.y}}async function l_(){await fx();try{await _x()}catch(r){console.warn("[main] 主角图集加载失败，回退烘焙纹理",r)}U.loadAll(),br.getInstance().build();try{const r=localStorage.getItem("motarpg_display");r&&window.motaDesktop&&window.motaDesktop.setDisplayMode(JSON.parse(r))}catch{}vi.getInstance(),hs.getInstance(),yn.getInstance(),$s.getInstance(),Kt.getInstance(),Xs.getInstance(),Ea.getInstance().start(),window.__motaDebug={get player(){return Ee.getInstance()},get world(){return Ge.getInstance()},get camera(){return un.getInstance()},gameLoop:Ea.getInstance(),gameController:Yn.getInstance(),floorManager:pi.getInstance(),mapGenerator:fr.getInstance(),battle:Mr.getInstance(),chest:yr.getInstance(),equipGen:Un.getInstance(),quest:vi.getInstance(),bestiary:hs.getInstance(),merchant:os.getInstance(),save:Kt.getInstance(),guidance:$s.getInstance(),describeFloor(){return fr.getInstance().describe(Ge.getInstance().currentFloor)},loadPrefab(r){pi.getInstance().enterPrefabFloor(o_(r)),un.getInstance().snapToPlayer()}},Ft.info("无尽之塔 2.5D · 启动完成")}l_();
