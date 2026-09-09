var Wd=Object.defineProperty;var qd=(a,e,t)=>e in a?Wd(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var w=(a,e,t)=>qd(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Xd={maxHp:1e3,attack:30,defense:15,critRate:5,dodgeRate:3},Yd={base:20,power:1.5},$d=[{minLevel:1,maxLevel:5,hp:125,attack:6,defense:3},{minLevel:6,maxLevel:10,hp:260,attack:10,defense:5},{minLevel:11,maxLevel:15,hp:250,attack:12,defense:6},{minLevel:16,maxLevel:20,hp:260,attack:14,defense:7},{minLevel:21,maxLevel:25,hp:100,attack:16,defense:8},{minLevel:26,maxLevel:30,hp:100,attack:18,defense:9},{minLevel:31,maxLevel:35,hp:230,attack:22,defense:11},{minLevel:36,maxLevel:40,hp:500,attack:26,defense:13},{minLevel:41,maxLevel:45,hp:1e3,attack:30,defense:15},{minLevel:46,maxLevel:50,hp:1e3,attack:34,defense:17},{minLevel:51,maxLevel:999,hp:1200,attack:38,defense:19}],Kd={floors:[1,5,10,15,20,25,30,35,40,45,50],hp:[165,310,485,685,900,1175,1500,1900,2400,3100,4150],atk:[40,75,120,200,280,340,420,520,680,950,1300],def:[7,14,21,30,40,52,66,84,106,136,183],exp:[15,40,100,180,280,400,550,720,900,1100,1350],gold:[20,20,45,90,90,160,160,275,275,425,425],overflowPerFloor:{hp:.08,atk:.05,def:.05,exp:.08,gold:.05}},Zd={hp:0,atk:0,def:0},Jd={damageJitter:.1,critMultiplier:1.8,maxTurns:60,minDamage:1},Qd={goldBands:[{minFloor:1,maxFloor:5,min:1,max:5},{minFloor:6,maxFloor:10,min:5,max:15},{minFloor:11,maxFloor:20,min:15,max:40},{minFloor:21,maxFloor:30,min:40,max:80},{minFloor:31,maxFloor:40,min:80,max:150},{minFloor:41,maxFloor:9999,min:150,max:250}],equipmentChance:.6,potionChance:.15,goldAlways:!0},jd={equipmentChance:.03,potionChance:.02},eu={goldPenaltyRate:.2,hpRestorePct:1},tu={potionCountMin:2,potionCountMax:4,keyPriceBase:50,keyPricePer10Floors:30,keyCountMin:1,keyCountMax:3,equipmentCountMin:1,equipmentCountMax:2},nu={potionCountMin:2,potionCountMax:3,fountainCostBase:40,fountainCostPerFloor:12},iu={tileWidth:64,tileHeight:32,vignetteMax:.3,maxLights:20,maxParticles:1e3,gridLineWidth:1},su={bloom:{enabled:!0,strength:.5,radius:.45,threshold:.82},vignette:{enabled:!0,strength:.3,offset:1,darkness:1.1},adjustment:{enabled:!0,gamma:1.05,contrast:1.05,saturation:1.1,brightness:1}},ru={staticAlpha:.45,staticOffset:3,baseOffset:6,maxDynamic:20,samples:3,penumbra:6,tyndall:{length:150,width:30,alpha:.13,dustMin:5,dustMax:10}},au={player:45,monsterNormal:38,monsterElite:52,boss:70,chest:18,potion:14,torch:55,pillar:70,npc:42,stair:10,carpet:4,cauldron:26,shelf:46,fountain:16,wallByRoom:{start:60,combat:65,elite:75,chest:55,merchant:55,witch:58,boss:90,rest:55,end:60,blacksmith:65},corridorWall:75},ou={level:2},lu={lerp:.12,transitionMs:400,roomPaddingPx:24},cu={fov:45,distance:5,height:12.5},hu={showDelayMs:200,hideDelayMs:300,offsetX:12,offsetY:12},du={key:"motarpg_v2_save",version:"2.0.0",autosaveDefault:!0},uu={moveRepeatMs:110,moveBufferMs:120},fu={playerBase:Xd,expFormula:Yd,growthTable:$d,floorAnchors:Kd,bossStatBonus:Zd,battle:Jd,chestRewards:Qd,monsterDrops:jd,revive:eu,merchant:tu,witch:nu,render:iu,postProcess:su,shadow:ru,heights:au,raycast:ou,camera:lu,camera3D:cu,hover:hu,save:du,input:uu},pu=13,mu=11,gu=2,vu=[{minFloor:2,maxFloor:5,min:4,max:6},{minFloor:6,maxFloor:10,min:4,max:8},{minFloor:11,maxFloor:20,min:6,max:8},{minFloor:21,maxFloor:9999,min:6,max:12}],xu=12,yu=5,Mu=1,bu={start:{width:5,height:5},end:{width:6,height:5},combat:{width:[7,9],height:[6,7]},elite:{width:[9,10],height:[7,8]},chest:{width:5,height:5},merchant:{width:6,height:6},witch:{width:[7,8],height:[6,7]},boss:{width:[9,10],height:[7,8]},rest:{width:5,height:5},blacksmith:{width:6,height:6}},_u=4,Su=4,wu={weights:{combat:1,elite:2,chest:-1,merchant:-2,witch:-2,blacksmith:-2},forcePositiveAt:5,forceNegativeAt:-4},Eu={fewMaxRooms:7,fewCount:1,manyCount:2},Tu={minFloor:6,interval:6},Au={maxLengthDiff:2},Cu={extraChance:.25,extraMax:2,adjacentManhattan:1},Ru={monsterMinDistFromEntry:3,smallAreaMax:30,mediumAreaMax:42,largeAreaMax:56,density:{small:2,medium:3,large:4,xlarge:5},chestRoomMin:2,chestRoomMax:3,otherRoomChestChance:.35,eliteRoomEliteMin:1,eliteRoomEliteMax:2,bossRoomAddsMin:0,bossRoomAddsMax:2,combatByDepth:[{maxDepth:1,monsters:[1,2],elites:[0,0],chests:[0,1],potions:[0,1]},{maxDepth:2,monsters:[2,2],elites:[0,1],chests:[0,1],potions:[1,1]},{maxDepth:3,monsters:[2,3],elites:[1,1],chests:[1,1],potions:[1,1]},{maxDepth:9999,monsters:[3,4],elites:[1,1],chests:[1,1],potions:[1,1]}],eliteRoom:{elites:[1,1],monsters:[1,2],chests:[1,2],potions:[1,1]},treasureRoom:{chests:[2,3],monsters:[1,2],potions:[1,2]},merchantRoom:{chests:[0,1],potions:[1,2]},witchRoom:{shelves:[2,2]},bossRoom:{elites:[0,2],chests:[2,3],potions:[2,4]},exitRoom:{guards:[0,1],chests:[0,2],potions:[1,1]},startRoom:{potions:[1,1]},guard:{chestRadius:2,stairRadius:3},barrier:{fillWithPillars:!0},roomTorches:{start:[2,4],merchant:[4,4],witch:[4,4],boss:[6,8],end:[4,4],blacksmith:[3,3]}},Pu={torchCorridorEvery:4,pillarMinRoomWidth:7,carpetRooms:["chest","boss"]},Iu={maxAttempts:40},Lu={minFloor:4,interval:4},Du={cellSpacingX:pu,cellSpacingY:mu,gridRadius:gu,floorRoomCounts:vu,maxRooms:xu,bossFloorInterval:yu,initialFloor:Mu,roomSpecs:bu,minRoomWidth:_u,minRoomHeight:Su,tension:wu,merchantLimit:Eu,witchLimit:Tu,path:Au,corridor:Cu,content:Ru,decor:Pu,generation:Iu,blacksmithLimit:Lu},Fu=[{id:"slime",name:"史莱姆",shape:"circle",color:"#44cc44",category:"normal",floorMin:1,floorMax:5,weight:30,hpMul:1,atkMul:.9,defMul:.8,goldMul:1,expMul:1,height:32,description:"最弱小的魔物，柔软无骨。"},{id:"bat",name:"蝙蝠",shape:"circle",color:"#9955cc",category:"normal",floorMin:1,floorMax:10,weight:25,hpMul:.7,atkMul:1.1,defMul:.5,goldMul:1,expMul:1,height:30,description:"盘旋的暗影，攻击刁钻。"},{id:"skeleton",name:"骷髅兵",shape:"square",color:"#dddddd",category:"normal",floorMin:3,floorMax:15,weight:25,hpMul:1.2,atkMul:1,defMul:1.2,goldMul:1.1,expMul:1.1,height:36,description:"不朽的卫兵，骨头拼成的战躯。"},{id:"gargoyle",name:"石像鬼",shape:"square",color:"#888899",category:"normal",floorMin:8,floorMax:25,weight:22,hpMul:1.5,atkMul:.9,defMul:1.3,goldMul:1.2,expMul:1.2,height:42,description:"石化的守卫，皮糙肉厚。"},{id:"shadow_wolf",name:"暗影狼",shape:"square",color:"#3344aa",category:"normal",floorMin:12,floorMax:35,weight:22,hpMul:1.1,atkMul:1.4,defMul:.8,goldMul:1.2,expMul:1.2,height:40,description:"影中疾行的猎手，撕咬致命。"},{id:"hellhound",name:"地狱犬",shape:"square",color:"#ff6622",category:"normal",floorMin:18,floorMax:45,weight:20,hpMul:1.3,atkMul:1.5,defMul:1,goldMul:1.3,expMul:1.3,height:44,description:"燃烧的恶犬，吐息灼人。"},{id:"dark_knight",name:"暗黑骑士",shape:"square",color:"#aa1133",category:"normal",floorMin:25,floorMax:9999,weight:20,hpMul:1.8,atkMul:1.2,defMul:1.4,goldMul:1.4,expMul:1.4,height:48,description:"堕落的骑士，攻防兼备。"},{id:"ancient_dragon",name:"远古巨龙",shape:"big_square",color:"#cc1122",category:"boss",floorMin:5,floorMax:9999,weight:0,hpMul:5,atkMul:.95,defMul:1.2,goldMul:5,expMul:8,height:70,description:"沉眠于塔底的灾厄，翼影蔽日。"}],Uu=1.25,Nu=2,Ou=2.5,ku={monsters:Fu,eliteStatMultiplier:Uu,eliteGoldMultiplier:Nu,eliteExpMultiplier:Ou},Bu=[{tier:"crude",name:"劣质药水",healPct:.2,price:20,color:"#dd6688",minFloor:1,maxFloor:5,icon:"🧪"},{tier:"normal",name:"普通药水",healPct:.3,price:40,color:"#ee3344",minFloor:3,maxFloor:15,icon:"🧪"},{tier:"quality",name:"优质药水",healPct:.45,price:100,color:"#bb1133",minFloor:10,maxFloor:30,icon:"🧪"},{tier:"strong",name:"强效药水",healPct:.6,price:250,color:"#990033",minFloor:25,maxFloor:40,icon:"⚗️"},{tier:"holy",name:"圣药",healPct:.8,price:600,color:"#ffdd44",minFloor:40,maxFloor:9999,icon:"⚗️"}],zu={potions:Bu},Gu=["poor","common","fine","rare","epic","legendary","mythic"],Hu={poor:{name:"破烂",color:"#9e9e9e",statMultiplier:.6,affixCount:0,affixCountMax:0,sellMultiplier:.2,prefix:"破旧的",basePrice:5},common:{name:"普通",color:"#ffffff",statMultiplier:1,affixCount:0,affixCountMax:0,sellMultiplier:1,prefix:"",basePrice:10},fine:{name:"优秀",color:"#4488ff",statMultiplier:1.4,affixCount:1,affixCountMax:1,sellMultiplier:2,prefix:"精良的",basePrice:30},rare:{name:"稀有",color:"#aa44ff",statMultiplier:1.9,affixCount:2,affixCountMax:3,sellMultiplier:4,prefix:"优质的",basePrice:80,affixExtra:[{atEquipLevel:20,add:1}]},epic:{name:"史诗",color:"#ffaa00",statMultiplier:2.5,affixCount:3,affixCountMax:5,sellMultiplier:8,prefix:"精制的",basePrice:200,affixExtra:[{atEquipLevel:15,add:1}]},legendary:{name:"传说",color:"#ff5533",statMultiplier:3.5,affixCount:4,affixCountMax:7,sellMultiplier:16,prefix:"完美的",basePrice:500,affixExtra:[{atEquipLevel:10,add:1}]},mythic:{name:"神话",color:"#ff44dd",statMultiplier:5,affixCount:4,affixCountMax:4,sellMultiplier:35,prefix:"无双的",basePrice:1200}},Vu=[{minFloor:1,maxFloor:5,weights:{poor:45,common:40,fine:12,rare:3,epic:0,legendary:0,mythic:0}},{minFloor:6,maxFloor:10,weights:{poor:10,common:50,fine:28,rare:10,epic:2,legendary:0,mythic:0}},{minFloor:11,maxFloor:20,weights:{poor:1,common:35,fine:35,rare:20,epic:8,legendary:1,mythic:0}},{minFloor:21,maxFloor:30,weights:{poor:1,common:15,fine:31,rare:30,epic:18,legendary:5,mythic:0}},{minFloor:31,maxFloor:40,weights:{poor:0,common:5,fine:20,rare:30,epic:30,legendary:15,mythic:0}},{minFloor:41,maxFloor:50,weights:{poor:0,common:0,fine:10,rare:25,epic:35,legendary:29.5,mythic:.5}},{minFloor:51,maxFloor:9999,weights:{poor:0,common:0,fine:8,rare:22,epic:33,legendary:35,mythic:2}}],Wu=[{type:"sharp",name:"锋利",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:3,max:8},{maxEquipLevel:25,min:8,max:20},{maxEquipLevel:40,min:20,max:40},{maxEquipLevel:50,min:40,max:70}],description:"攻击 +{v}"},{type:"sturdy",name:"坚固",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:2,max:5},{maxEquipLevel:25,min:5,max:12},{maxEquipLevel:40,min:12,max:25},{maxEquipLevel:50,min:25,max:45}],description:"防御 +{v}"},{type:"vitality",name:"活力",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:15,max:40},{maxEquipLevel:25,min:40,max:100},{maxEquipLevel:40,min:100,max:200},{maxEquipLevel:50,min:200,max:350}],description:"生命 +{v}"},{type:"precision",name:"精准",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:3},{maxEquipLevel:25,min:3,max:5},{maxEquipLevel:40,min:5,max:7},{maxEquipLevel:50,min:7,max:10}],description:"暴击率 +{v}%"},{type:"agility",name:"灵巧",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:2},{maxEquipLevel:25,min:2,max:4},{maxEquipLevel:40,min:4,max:6},{maxEquipLevel:50,min:6,max:8}],description:"闪避率 +{v}%"},{type:"savage",name:"强攻",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:2,max:4},{maxEquipLevel:25,min:4,max:7},{maxEquipLevel:40,min:7,max:10},{maxEquipLevel:50,min:10,max:15}],description:"攻击 +{v}%"},{type:"fortress",name:"铁壁",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:3},{maxEquipLevel:25,min:3,max:5},{maxEquipLevel:40,min:5,max:8},{maxEquipLevel:50,min:8,max:12}],description:"防御 +{v}%"},{type:"lifesteal",name:"嗜血",minQuality:"epic",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:2},{maxEquipLevel:25,min:2,max:3},{maxEquipLevel:40,min:3,max:4},{maxEquipLevel:50,min:4,max:6}],description:"攻击回复生命 {v}%"},{type:"hellfire",name:"业火",minQuality:"rare",isPercent:!1,bands:[{maxEquipLevel:10,min:3,max:8},{maxEquipLevel:25,min:8,max:18},{maxEquipLevel:40,min:18,max:35},{maxEquipLevel:50,min:35,max:60}],description:"附加火焰伤害 {v}"},{type:"greed",name:"贪婪",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"金币获取 +{v}%"},{type:"wisdom",name:"博学",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"经验获取 +{v}%"},{type:"dragonslayer",name:"屠龙",minQuality:"epic",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"对Boss伤害 +{v}%"}],qu=[{minEquipLevel:1,maxEquipLevel:5,values:{poor:[2,5],common:[4,8],fine:[8,15],rare:[15,25],epic:null,legendary:null}},{minEquipLevel:6,maxEquipLevel:10,values:{poor:[5,8],common:[8,15],fine:[15,25],rare:[25,40],epic:[40,55],legendary:null}},{minEquipLevel:11,maxEquipLevel:20,values:{poor:null,common:[15,25],fine:[25,40],rare:[40,60],epic:[60,85],legendary:[85,120]}},{minEquipLevel:21,maxEquipLevel:30,values:{poor:null,common:[25,35],fine:[35,55],rare:[55,80],epic:[80,110],legendary:[110,160]}},{minEquipLevel:31,maxEquipLevel:40,values:{poor:null,common:null,fine:[45,65],rare:[65,95],epic:[95,140],legendary:[140,200]}},{minEquipLevel:41,maxEquipLevel:50,values:{poor:null,common:null,fine:[60,80],rare:[80,120],epic:[120,180],legendary:[180,280]}}],Xu=[{minEquipLevel:1,maxEquipLevel:5,values:{poor:[1,3],common:[2,5],fine:[4,8],rare:[6,12],epic:null,legendary:null}},{minEquipLevel:6,maxEquipLevel:10,values:{poor:[2,4],common:[4,8],fine:[8,14],rare:[12,20],epic:[18,28],legendary:null}},{minEquipLevel:11,maxEquipLevel:20,values:{poor:null,common:[8,14],fine:[14,22],rare:[20,30],epic:[30,45],legendary:[45,60]}},{minEquipLevel:21,maxEquipLevel:30,values:{poor:null,common:[14,20],fine:[20,30],rare:[30,45],epic:[45,60],legendary:[60,85]}},{minEquipLevel:31,maxEquipLevel:40,values:{poor:null,common:null,fine:[25,35],rare:[35,55],epic:[55,75],legendary:[75,110]}},{minEquipLevel:41,maxEquipLevel:50,values:{poor:null,common:null,fine:[35,45],rare:[45,65],epic:[65,95],legendary:[95,140]}}],Yu=1.43,$u={weapon:[{minEquipLevel:1,maxEquipLevel:10,names:["铁剑"]},{minEquipLevel:11,maxEquipLevel:20,names:["阔剑"]},{minEquipLevel:21,maxEquipLevel:30,names:["长剑"]},{minEquipLevel:31,maxEquipLevel:40,names:["符文剑"]},{minEquipLevel:41,maxEquipLevel:50,names:["龙魂剑"]}],armor:[{minEquipLevel:1,maxEquipLevel:10,names:["胸甲"]},{minEquipLevel:11,maxEquipLevel:20,names:["鳞甲"]},{minEquipLevel:21,maxEquipLevel:30,names:["板甲"]},{minEquipLevel:31,maxEquipLevel:40,names:["符文甲"]},{minEquipLevel:41,maxEquipLevel:50,names:["龙鳞甲"]}]},Ku={playerLevelFactor:.5,floorFactor:1,randomMin:-2,randomMax:3,min:1,max:50},Zu={sellMultiplier:1.6,min:100,max:5e3},Ju={mythicAffixCount:4},Qu={qualityOrder:Gu,quality:Hu,qualityByFloor:Vu,affixes:Wu,weaponTable:qu,armorTable:Xu,mythicFromLegendary:Yu,baseNames:$u,equipLevelFormula:Ku,buyPriceRule:Zu,affixSpecial:Ju},ju=[{id:"npc_guide",name:"引导者·艾登",color:"#44dd99",lines:["欢迎来到无尽之塔，勇者。这座塔每层都由无数房间构成，路径由你选择。","用 WASD 或方向键移动，撞上怪物即会展开战斗。左键也能直接点选目标。","宝箱与商人会给你补给。装备品质从破烂到神话共七档，仔细对比再穿戴。","楼梯在终点房间。愿你脚下生风，剑下无情。","对了——死亡不是终点。塔会给你重来的机会，但会收走一部分金币。"],portrait:"img/eden.png"},{id:"npc_merchant",name:"商人·老古",color:"#44dd66",isMerchant:!0,lines:["哟，客人！稀罕物件应有尽有，看看？","药水按楼层进新货，早买早安心。","钥匙不嫌多，宝箱可等不了人。"]},{id:"npc_witch",name:"女巫·薇薇安",color:"#c78cff",isWitch:!0,lines:["嘘——别碰我的锅，那汤药还没醒。","塔里的怪物越深越凶，我的药水却越深越灵。要试试吗？","旁边那口泉水能洗去你的伤，不过……得付点金子。"]},{id:"npc_blacksmith",name:"铁匠·霍恩",color:"#ff9a3d",isBlacksmith:!0,lines:["铁砧不骗人。剑是好剑，就是还差口气——交给我。","重铸词条、锤炼等级、淬火提品质，都行，收费公道。","先说好：史诗往上的神兵我不碰，凡火淬不动。"]}],ef={npcs:ju},tf=[{id:"quest_talk_guide",name:"初来乍到",description:"与起点的引导者艾登对话，了解这座塔的规则。",objectives:[{type:"talk_npc",targetId:"npc_guide",quantity:1}],rewards:[{type:"potion",tier:"crude",value:2}],prerequisites:[],guidance:"走到绿色方块旁，左键对话。"},{id:"quest_first_blood",name:"初试锋芒",description:"击败一只史莱姆。",objectives:[{type:"defeat_monster",targetId:"slime",quantity:1}],rewards:[{type:"gold",value:30}],prerequisites:["quest_talk_guide"],guidance:"撞向红色方块即进入战斗。"},{id:"quest_first_chest",name:"开箱有喜",description:"打开一个宝箱。",objectives:[{type:"open_chest",quantity:1}],rewards:[{type:"gold",value:20}],prerequisites:["quest_talk_guide"],guidance:"左键点击金色宝箱。"},{id:"quest_first_equip",name:"披挂上阵",description:"穿戴一件装备。",objectives:[{type:"equip_item",quantity:1}],rewards:[{type:"equipment",quality:"poor"}],prerequisites:["quest_first_chest"],guidance:"按 B 打开背包，双击装备穿戴。"},{id:"quest_descend",name:"更下一层",description:"通过终点楼梯到达第 2 层。",objectives:[{type:"reach_floor",value:2,quantity:1}],rewards:[{type:"gold",value:50},{type:"potion",tier:"crude",value:1}],prerequisites:["quest_first_blood"],guidance:"找到房间角落的发光楼梯。"}],nf={quests:tf},sf=!0,rf={placeholder:sf},af=[{id:"ev_gold_fairy",name:"金币妖精",icon:"🧚",minFloor:2,chance:.07,roomTypes:["combat","chest"],description:"一只金币妖精从阴影里窜出，翅膀上洒落着金粉。",options:[{text:"伸手去抓",effects:[{type:"gold",value:30,perFloor:6}]},{text:"目送它离开",effects:[]}]},{id:"ev_trap",name:"可疑的踏板",icon:"⚠️",minFloor:3,chance:.06,roomTypes:["combat","elite"],description:"脚下的石板忽然下陷——是陷阱！",options:[{text:"硬抗",effects:[{type:"damagePct",value:8}]},{text:"翻滚闪避（消耗体力）",effects:[{type:"damagePct",value:3}]}]},{id:"ev_spring",name:"神秘泉水",icon:"⛲",minFloor:2,chance:.06,roomTypes:["chest","merchant","end"],description:"角落里涌出一汪泛着微光的泉水。",options:[{text:"饮下泉水",effects:[{type:"healPct",value:20}]},{text:"谨慎起见，不喝",effects:[]}]},{id:"ev_scroll",name:"古老的卷轴",icon:"📜",minFloor:4,chance:.05,roomTypes:["combat","chest","elite"],description:"墙上嵌着一卷古旧的卷轴，字迹依稀可辨。",options:[{text:"研读卷轴",effects:[{type:"exp",value:25,perFloor:5}]},{text:"没有兴趣",effects:[]}]}],of={events:af},lf={start:"起点大厅",end:"终点之间",combat:"战斗室",elite:"精英殿堂",chest:"宝藏间",merchant:"商人营地",blacksmith:"铁匠铺",witch:"女巫酿药间",boss:"Boss巢穴",rest:"休整营地"},cf={attack:"左键攻击",pickup:"左键拾取",talk:"左键对话",open:"左键打开",stair:"点击或走上楼梯",trade:"左键交易",heal:"左键治疗"},hf={gameTitle:"无尽之塔",floor:"第 {floor} 层",depth:"深度 {depth}",pathA:"路径A（高危）",pathB:"路径B（稳健）"},df={firstEquipment:"获得装备！按 B 打开背包查看，双击可穿戴。装备对比中绿色为提升。",firstDeath:"你倒下了……但塔给予你重来的机会：在本层起点复活，损失 20% 金币。",tutorialWelcome:"欢迎来到无尽之塔。跟随右侧任务指引开始冒险吧。"},uf={player:"勇者",merchant:"商人",guide:"引导者",chest:"宝箱",chestOpened:"空宝箱",stair:"通往第 {floor} 层",carpet:"地毯",pillar:"石柱",potion:"药水",torch:"火把",cauldron:"熬药大锅",shelf:"药架",fountain:"治疗泉"},ff={roomNames:lf,hints:cf,titles:hf,guidance:df,labels:uf},pf={autoSave:!0,fpsCap:0,battleMode:"auto"},mf={defaults:pf},Fi=class Fi{constructor(){w(this,"loaded",!1)}static getInstance(){return Fi.instance||(Fi.instance=new Fi),Fi.instance}loadAll(){this.loaded=!0}get config(){return fu}potionIconSrc(e){return`img/p_${e}.png`}potionIconImg(e,t="potion-icon"){return`<img class="${t}" src="${this.potionIconSrc(e)}" alt="${e}" draggable="false">`}get mapGen(){return Du}get monsters(){return ku}get potions(){return zu}get equipment(){return Qu}get npcs(){return ef}get quests(){return nf}get economy(){return rf}get events(){return of}get texts(){return ff}get settings(){return mf}getMonster(e){return this.monsters.monsters.find(t=>t.id===e)}getPotion(e){return this.potions.potions.find(t=>t.tier===e)}getNpc(e){return this.npcs.npcs.find(t=>t.id===e)}getQuest(e){return this.quests.quests.find(t=>t.id===e)}get isLoaded(){return this.loaded}};w(Fi,"instance");let Oo=Fi;const P=Oo.getInstance(),Ui=class Ui{constructor(){w(this,"handlers",new Map)}static getInstance(){return Ui.instance||(Ui.instance=new Ui),Ui.instance}on(e,t){let n=this.handlers.get(e);n||(n=new Set,this.handlers.set(e,n)),n.add(t)}once(e,t){const n=i=>{this.off(e,n),t(i)};this.on(e,n)}off(e,t){const n=this.handlers.get(e);n&&n.delete(t)}emit(e,t){const n=this.handlers.get(e);if(n)for(const i of[...n])try{i(t)}catch(s){console.error(`[EventBus] handler error on "${String(e)}"`,s)}}clear(){this.handlers.clear()}};w(Ui,"instance");let ko=Ui;const q=ko.getInstance(),Ni=class Ni{constructor(){w(this,"started",!1);w(this,"paused",!1);w(this,"modalCount",0);w(this,"settings");w(this,"difficulty",2);this.settings={...P.settings.defaults};const e=Number(localStorage.getItem("motarpg_difficulty"));e>=1&&e<=7&&(this.difficulty=e)}static getInstance(){return Ni.instance||(Ni.instance=new Ni),Ni.instance}get modalOpen(){return this.modalCount>0}pushModal(){this.modalCount++}popModal(){this.modalCount=Math.max(0,this.modalCount-1)}setSetting(e,t){this.settings[e]=t,q.emit("settingsChanged",{key:e,value:t})}setDifficulty(e){this.difficulty=Math.max(1,Math.min(7,e)),localStorage.setItem("motarpg_difficulty",String(this.difficulty))}};w(Ni,"instance");let Bo=Ni;const De=Bo.getInstance(),Oi=class Oi{constructor(){}static getInstance(){return Oi.instance||(Oi.instance=new Oi),Oi.instance}get anchors(){return P.config.floorAnchors}depthMultiplier(e,t){const n=e<=10?0:e<=30?1:2;if(t<=0)return[.8,.75,.7][n];if(t===1)return 1;if(t===2)return[1,1.1,1.1][n];if(t===3)return[1.1,1.1,1.2][n];const i=t-4;return[1.15+i*.1,1.15+i*.15,1.2+i*.2][n]}anchorValue(e,t,n){const i=this.anchors.floors,s=i.length-1;if(t<=i[0])return e[0];if(t>=i[s]){const r=t-i[s];return e[s]*Math.pow(1+n,r)}for(let r=0;r<s;r++)if(t>=i[r]&&t<=i[r+1]){const o=(t-i[r])/(i[r+1]-i[r]);return e[r]+(e[r+1]-e[r])*o}return e[s]}monsterStats(e,t,n,i=1){const s=P.config,r=this.anchors,o=v=>Math.max(1,Math.round(v)),l=e.category==="boss",c=this.depthMultiplier(t,i);let h=this.anchorValue(r.hp,t,r.overflowPerFloor.hp)*e.hpMul*c,f=this.anchorValue(r.atk,t,r.overflowPerFloor.atk)*e.atkMul*c,d=this.anchorValue(r.def,t,r.overflowPerFloor.def)*e.defMul*c,u=this.anchorValue(r.exp,t,r.overflowPerFloor.exp)*e.expMul*c,p=this.anchorValue(r.gold,t,r.overflowPerFloor.gold)*e.goldMul*c;return l?(h*=1+s.bossStatBonus.hp,f*=1+s.bossStatBonus.atk,d*=1+s.bossStatBonus.def):n&&(h*=P.monsters.eliteStatMultiplier,f*=P.monsters.eliteStatMultiplier,d*=P.monsters.eliteStatMultiplier,p*=P.monsters.eliteGoldMultiplier,u*=P.monsters.eliteExpMultiplier),{name:n?`精英·${e.name}`:e.name,hp:o(h),attack:o(f),defense:o(d),exp:o(u),gold:o(p),isElite:n,isBoss:l}}playerBaseAt(e){const t=P.config,n=t.playerBase;let i=n.maxHp,s=n.attack,r=n.defense;for(let o=2;o<=e;o++){const l=t.growthTable.find(c=>o>=c.minLevel&&o<=c.maxLevel)??t.growthTable[t.growthTable.length-1];i+=l.hp,s+=l.attack,r+=l.defense}return{maxHp:i,attack:s,defense:r}}expToNext(e){const{base:t,power:n}=P.config.expFormula;return Math.round(t*Math.pow(e,n))}};w(Oi,"instance");let tn=Oi;const gf=["poor","common","fine","rare","epic","legendary","mythic"],ki=class ki{constructor(){w(this,"state");const e=P.config.playerBase;this.state={level:1,exp:0,hp:e.maxHp,baseMaxHp:e.maxHp,baseAttack:e.attack,baseDefense:e.defense,baseCritRate:e.critRate,baseDodgeRate:e.dodgeRate,gold:0,keys:0,potions:{crude:0,normal:0,quality:0,strong:0,holy:0},hotbar:[null,null,null,null,null],weaponId:null,armorId:null,bag:[],x:0,y:0,currentFloor:1,currentRoomId:""}}static getInstance(){return ki.instance||(ki.instance=new ki),ki.instance}restore(e){this.state=e}get pos(){return{x:this.state.x,y:this.state.y}}equipped(){return this.state.bag.filter(e=>e.id===this.state.weaponId||e.id===this.state.armorId)}stats(){let e=this.state.baseAttack,t=this.state.baseDefense,n=this.state.baseMaxHp,i=this.state.baseCritRate,s=this.state.baseDodgeRate,r=0,o=0,l=0,c=0,h=0,f=0,d=0;for(const p of this.equipped())e+=p.attack,t+=p.defense;const u=this.equipped().flatMap(p=>p.affixes);for(const p of u)switch(p.type){case"sharp":e+=p.value;break;case"sturdy":t+=p.value;break;case"vitality":n+=p.value;break;case"precision":i+=p.value;break;case"agility":s+=p.value;break;case"savage":f+=p.value;break;case"fortress":d+=p.value;break;case"lifesteal":r+=p.value;break;case"hellfire":o+=p.value;break;case"greed":l+=p.value;break;case"wisdom":c+=p.value;break;case"dragonslayer":h+=p.value;break}return{maxHp:Math.round(n),attack:Math.round(e*(1+f/100)),defense:Math.round(t*(1+d/100)),critRate:Math.min(75,i),dodgeRate:Math.min(50,s),lifesteal:r,fireDamage:o,goldBonus:l,expBonus:c,bossDamage:h}}get maxHp(){return this.stats().maxHp}get attack(){return this.stats().attack}get defense(){return this.stats().defense}get isAlive(){return this.state.hp>0}heal(e){const t=this.maxHp,n=this.state.hp;this.state.hp=Math.min(t,this.state.hp+e);const i=this.state.hp-n;return i>0&&q.emit("hpChanged",{oldValue:n,newValue:this.state.hp,delta:i}),i}damage(e){const t=this.state.hp;this.state.hp=Math.max(0,this.state.hp-e),q.emit("hpChanged",{oldValue:t,newValue:this.state.hp,delta:this.state.hp-t})}gainExp(e){const t=1+this.stats().expBonus/100,n=Math.round(e*t),i=this.state.exp;this.state.exp+=n,q.emit("expChanged",{oldValue:i,newValue:this.state.exp,delta:n}),this.checkLevelUp()}checkLevelUp(){const e=tn.getInstance();let t=e.expToNext(this.state.level);for(;this.state.exp>=t&&this.state.level<999;){this.state.exp-=t;const n=this.state.level;this.state.level+=1;const i=e.playerBaseAt(this.state.level),s=i.maxHp-this.state.baseMaxHp,r=i.attack-this.state.baseAttack,o=i.defense-this.state.baseDefense;this.state.baseMaxHp=i.maxHp,this.state.baseAttack=i.attack,this.state.baseDefense=i.defense,this.state.hp+=s,q.emit("levelUp",{oldLevel:n,newLevel:this.state.level,gainedHp:s,gainedAttack:r,gainedDefense:o}),t=e.expToNext(this.state.level)}}gainGold(e){const t=1+this.stats().goldBonus/100,n=Math.round(e*t),i=this.state.gold;this.state.gold+=n,q.emit("goldChanged",{oldValue:i,newValue:this.state.gold,delta:n})}spendGold(e){if(this.state.gold<e)return!1;const t=this.state.gold;return this.state.gold-=e,q.emit("goldChanged",{oldValue:t,newValue:this.state.gold,delta:-e}),!0}getPotionCount(e){return this.state.potions[e]??0}setHotbarSlot(e,t){e<0||e>=this.state.hotbar.length||(this.state.hotbar[e]=t)}swapHotbar(e,t){const n=this.state.hotbar;e<0||e>=n.length||t<0||t>=n.length||([n[e],n[t]]=[n[t],n[e]])}addPotion(e,t=1){this.state.potions[e]=this.getPotionCount(e)+t}usePotion(e){if(this.getPotionCount(e)<=0)return!1;const t=P.getPotion(e);if(!t)return!1;this.state.potions[e]-=1;const n=this.heal(Math.round(this.maxHp*t.healPct));return q.emit("potionUsed",{tier:e,healed:n}),!0}bestPotionFor(e){const t=["crude","normal","quality","strong","holy"];for(const n of t){const i=P.getPotion(n);if(i&&this.getPotionCount(n)>0&&Math.round(this.maxHp*i.healPct)<=e)return n}for(const n of t)if(this.getPotionCount(n)>0)return n;return null}get weapon(){return this.state.bag.find(e=>e.id===this.state.weaponId)??null}get armor(){return this.state.bag.find(e=>e.id===this.state.armorId)??null}get unequippedBag(){return this.state.bag.filter(e=>e.id!==this.state.weaponId&&e.id!==this.state.armorId)}addEquipment(e){this.state.bag.push(e),q.emit("equipmentGenerated",{equipment:e,source:e.source})}equip(e){const t=this.state.bag.find(s=>s.id===e);if(!t)return!1;const n=t.slot,i=n==="weapon"?this.state.weaponId:this.state.armorId;return i===e?!1:(n==="weapon"?this.state.weaponId=e:this.state.armorId=e,q.emit("equipmentEquipped",{slot:n,equipmentId:e,oldId:i}),!0)}unequip(e){e==="weapon"?this.state.weaponId=null:this.state.armorId=null,q.emit("equipmentEquipped",{slot:e,equipmentId:"",oldId:null})}removeEquipment(e){const t=this.state.bag.findIndex(i=>i.id===e);if(t<0)return null;this.state.weaponId===e&&(this.state.weaponId=null),this.state.armorId===e&&(this.state.armorId=null);const[n]=this.state.bag.splice(t,1);return n}qualityRank(e){return gf.indexOf(e)}};w(ki,"instance");let ge=ki;const vn=class vn{static setLevel(e){vn.level=e}static shouldLog(e){return vn.order[e]>=vn.order[vn.level]}static debug(...e){vn.shouldLog("debug")&&console.log("[DEBUG]",...e)}static info(...e){vn.shouldLog("info")&&console.log("[INFO]",...e)}static warn(...e){vn.shouldLog("warn")&&console.warn("[WARN]",...e)}static error(...e){vn.shouldLog("error")&&console.error("[ERROR]",...e)}};w(vn,"level","info"),w(vn,"order",{debug:0,info:1,warn:2,error:3});let Pt=vn;const Bi=class Bi{constructor(){w(this,"floor",null);w(this,"states",new Map);w(this,"gateKeys",new Set)}static getInstance(){return Bi.instance||(Bi.instance=new Bi),Bi.instance}loadFloor(e,t){if(this.floor=e,this.states.clear(),t)for(const[n,i]of Object.entries(t))this.states.set(n,i);this.recomputeGates(),Pt.info(`[World] 进入楼层${e.floorId}（${e.kind}） ${e.rooms.length}个房间`)}get currentFloor(){return this.floor}inBounds(e,t){return this.floor?e>=0&&e<this.floor.width&&t>=0&&t<this.floor.height:!1}isWalkable(e,t){return!(!this.floor||!this.inBounds(e,t)||this.floor.grid[t][e]!==0||this.gateKeys.has(`${e},${t}`))}tileAt(e,t){return this.inBounds(e,t)?this.floor.grid[t][e]:null}getRoomAt(e,t){if(!this.floor)return null;for(const n of this.floor.rooms)if(e>=n.x&&e<n.x+n.width&&t>=n.y&&t<n.y+n.height)return n;return null}getRoom(e){return this.floor?.rooms.find(t=>t.id===e)??null}revealHiddenRoom(e){const t=this.floor;if(!t)return;const n=t.hiddenRooms??[],i=n.indexOf(e);if(i<0)return;for(let r=e.y;r<e.y+e.height;r++)for(let o=e.x;o<e.x+e.width;o++){if(!this.inBounds(o,r))continue;const l=o>e.x&&o<e.x+e.width-1&&r>e.y&&r<e.y+e.height-1;this.floor.grid[r][o]=l?0:1}const s=e.hiddenEntrance;s&&this.inBounds(s.x,s.y)&&(this.floor.grid[s.y][s.x]=0),n.splice(i,1),t.rooms.push(e),Pt.info(`[World] 发现隐藏房间 ${e.id}（深度${e.depth}）`)}getEntityState(e){return this.states.get(e)??{}}setState(e,t){this.states.set(e,{...this.getEntityState(e),...t})}markDefeated(e){this.setState(e,{isAlive:!1}),this.recomputeGates()}markOpened(e){this.setState(e,{isOpened:!0})}markTalked(e){this.setState(e,{isTalked:!0})}markUsed(e){this.setState(e,{isUsed:!0})}recomputeGates(){if(this.gateKeys.clear(),!this.floor||this.floor.kind!=="boss")return;const e=this.floor.rooms.find(n=>n.type==="boss");if(!(!e||!e.entities.some(n=>n.kind==="boss"&&this.isEntityAlive(n))))for(const n of e.doors)this.getRoom(n.toRoomId)?.type==="end"&&this.gateKeys.add(`${n.x},${n.y}`)}isGateLocked(e,t){return this.gateKeys.has(`${e},${t}`)}getGates(){if(!this.floor||this.floor.kind!=="boss")return[];const e=this.floor.rooms.find(t=>t.type==="boss");return e?e.doors.filter(t=>this.getRoom(t.toRoomId)?.type==="end").map(t=>({x:t.x,y:t.y,direction:t.direction,opened:!this.gateKeys.has(`${t.x},${t.y}`)})):[]}isEntityAlive(e){return e.kind==="monster"||e.kind==="boss"?this.getEntityState(e.id).isAlive!==!1:!0}isChestOpened(e){return this.getEntityState(e.id).isOpened===!0}getEntityAt(e,t){if(!this.floor)return null;for(const n of this.floor.rooms)if(!(e<n.x-1||e>n.x+n.width||t<n.y-1||t>n.y+n.height)){for(const i of n.entities)if(!(i.x!==e||i.y!==t)){if(i.kind==="monster"||i.kind==="boss"){if(!this.isEntityAlive(i))continue}else if(i.kind==="chest"){if(this.isChestOpened(i))continue}else if((i.kind==="potion"||i.kind==="fountain")&&this.getEntityState(i.id).isUsed===!0)continue;if(!(i.kind==="pillar"||i.kind==="carpet"||i.kind==="torch"||i.kind==="cauldron"||i.kind==="shelf"))return i}}return null}hasBlockingEntity(e,t){return this.getEntityAt(e,t)!==null}allEntities(){const e=[];if(!this.floor)return e;for(const t of this.floor.rooms)for(const n of t.entities)(n.kind==="monster"||n.kind==="boss")&&!this.isEntityAlive(n)||(n.kind==="potion"||n.kind==="fountain")&&this.getEntityState(n.id).isUsed===!0||e.push({entity:n,room:t});return e}exportEntityStates(){return Object.fromEntries(this.states)}reset(){this.floor=null,this.states.clear()}};w(Bi,"instance");let Be=Bi;class _n{static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static lerp(e,t,n){return e+(t-e)*n}static manhattan(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}static dist(e,t,n,i){return Math.hypot(e-n,t-i)}}const fe={next(){return Math.random()},randInt(a,e){return Math.floor(Math.random()*(e-a+1))+a},randFloat(a,e){return Math.random()*(e-a)+a},chance(a){return Math.random()<a},pick(a){return a[Math.floor(Math.random()*a.length)]},pickWeighted(a,e){const t=a.map(e),n=t.reduce((s,r)=>s+r,0);if(n<=0)return a[0];let i=Math.random()*n;for(let s=0;s<a.length;s++)if(i-=t[s],i<=0)return a[s];return a[a.length-1]},shuffle(a){const e=[...a];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}},xs=110,zo=[{id:"base",name:"塔楼底部",fullName:"塔楼底部 · 青砖世界",fromFloor:1,toFloor:15,titleCard:{big:"青砖之基",vibe:"冰冷的砖石围成一个世界，你从这里醒来。向上，是唯一的出路。",main:"#6b7b8c",sub:"#2b3a4a",glow:"#dfe9f4",fontClass:"tt-stone",bg:"brick"},light:{hemiSky:5069426,hemiGround:2366226,hemiIntensity:.45,dirColor:14674431,dirIntensity:.38},grade:{tint:[.88,.96,1.12],tintStrength:.22,vignette:.1},bgColor:329741,sky:!1,wall:"brick",windowView:"rooftops",particle:"none",floorTint:16777215,windowGlow:9414848,uiAccent:"#8fb3d9",uiAccentCool:"#5a7ba0"},{id:"garden",name:"底层",fullName:"底层 · 苔园与锻窟",fromFloor:16,toFloor:40,titleCard:{big:"苔园锻火",vibe:"藤蔓攀上熔炉，草木与铁砧共生。此处万物都在被锻造——包括你。",main:"#7db56a",sub:"#d9722e",glow:"#ffd9a0",fontClass:"tt-vine",bg:"moss"},light:{hemiSky:5929560,hemiGround:3153935,hemiIntensity:.5,dirColor:16771529,dirIntensity:.42},grade:{tint:[1.06,1,.88],tintStrength:.18,vignette:.2},bgColor:462601,sky:!1,wall:"moss",windowView:"garden",particle:"spore",floorTint:15398367,windowGlow:14250542,uiAccent:"#8fc77a",uiAccentCool:"#d9722e",whisper:"还在向上么？……也好。"},{id:"library",name:"中层",fullName:"中层 · 图书馆",fromFloor:41,toFloor:60,titleCard:{big:"静默书海",vibe:"书页的气息漫过石阶，千万卷沉默的知识在等你翻阅。",main:"#e8dcc0",sub:"#7a5a3a",glow:"#ffe9bd",fontClass:"tt-serif",bg:"book"},light:{hemiSky:6969928,hemiGround:2759696,hemiIntensity:.48,dirColor:16767392,dirIntensity:.4},grade:{tint:[1.1,1,.82],tintStrength:.2,vignette:.22},bgColor:854534,sky:!1,wall:"shelf",windowView:"clouds",particle:"dust",floorTint:16115922,windowGlow:15260864,uiAccent:"#e0c294",uiAccentCool:"#a0785a",whisper:"书页翻动的时候，塔也在读你。"},{id:"observatory",name:"高层",fullName:"高层 · 观星台",fromFloor:61,toFloor:80,titleCard:{big:"星垂旷野",vibe:"头顶是旋转的星河，脚下是渺小的塔身。离天，似乎近了一步。",main:"#8fb0e8",sub:"#5a3a7a",glow:"#b8c8ff",fontClass:"tt-star",bg:"stars",letterSpacing:.5},light:{hemiSky:3820146,hemiGround:1577512,hemiIntensity:.44,dirColor:12110079,dirIntensity:.38},grade:{tint:[.86,.92,1.16],tintStrength:.25,vignette:.26},bgColor:461074,sky:!0,wall:"starstone",windowView:"starry",particle:"stardust",floorTint:14673141,windowGlow:9416936,uiAccent:"#9ab8ea",uiAccentCool:"#8d7ad0",whisper:"星星不说话。它们只是在看。"},{id:"clock",name:"钟楼",fullName:"顶部前过渡 · 钟楼",fromFloor:81,toFloor:100,titleCard:{big:"时轮之巅",vibe:"巨大的齿轮在头顶咬合，时间被拧成发条。再往上，便是终点。",main:"#d9b878",sub:"#b08d57",glow:"#ffe2a8",fontClass:"tt-brass",bg:"gears"},light:{hemiSky:6050368,hemiGround:2366480,hemiIntensity:.46,dirColor:15258272,dirIntensity:.4},grade:{tint:[1.1,.98,.8],tintStrength:.2,vignette:.28},bgColor:723206,sky:!1,wall:"brass",windowView:"gears",particle:"ember",floorTint:15786696,windowGlow:14268536,uiAccent:"#d9b878",uiAccentCool:"#7a9ec4",whisper:"发条拧紧了。你听见了吗。"},{id:"summit",name:"塔顶",fullName:"塔顶",fromFloor:101,toFloor:xs,titleCard:{big:"登　顶",vibe:"你以为抵达了终点。门后却空无一物——或者说，是另一段旅程的起点。",main:"#f0e9d8",sub:"#d4af6a",glow:"#fff7e0",fontClass:"tt-minimal",bg:"halo",letterSpacing:.9},light:{hemiSky:9078904,hemiGround:3815470,hemiIntensity:.58,dirColor:16774880,dirIntensity:.5},grade:{tint:[1.06,1.04,.97],tintStrength:.12,vignette:.3},bgColor:1184282,sky:!0,wall:"marble",windowView:"light",particle:"none",floorTint:16775402,windowGlow:16773839,uiAccent:"#e6ddc4",uiAccentCool:"#d4af6a"}];function Go(a){let e=zo[0];for(const t of zo)if(a>=t.fromFloor)e=t;else break;return e}function Ho(a){return zo.some(e=>e.fromFloor===a)}const Rc={A:{combat:.8,elite:.7},B:{combat:1,elite:1.2}},vf={A:.45,B:.15},zi=class zi{constructor(){}static getInstance(){return zi.instance||(zi.instance=new zi),zi.instance}getFloorKind(e){const t=P.mapGen;return e===t.initialFloor?"initial":e===xs?"summit":e%t.bossFloorInterval===0?"boss":"normal"}allocate(e){const t=this.getFloorKind(e);if(t==="initial")return{floorId:e,kind:t,roomTypes:["start","end"]};if(t==="boss")return{floorId:e,kind:t,roomTypes:["rest","boss","end"]};if(t==="summit")return{floorId:e,kind:t,roomTypes:["start","end"]};const i=this.rollRoomCount(e)-2,{types:s,hints:r}=this.allocateByTension(e,i);return this.guaranteeEliteRoomsFloor(s,r),{floorId:e,kind:t,roomTypes:["start",...s,"end"],railHints:[null,...r,null]}}rollRoomCount(e){const t=P.mapGen,n=t.floorRoomCounts.find(s=>e>=s.minFloor&&e<=s.maxFloor)??t.floorRoomCounts[t.floorRoomCounts.length-1],i=fe.randInt(n.min,n.max);return Math.min(i,t.maxRooms)}allocateByTension(e,t){const n=P.mapGen,i=n.tension.weights,s={A:0,B:0};let r=0;const o=[],l=[];let c="A";const h=f=>{s[c]+=f};for(let f=0;f<t;f++){const u=o.length+2<=n.merchantLimit.fewMaxRooms?n.merchantLimit.fewCount:n.merchantLimit.manyCount;let p;s[c]>=n.tension.forcePositiveAt?p=!0:s[c]<=n.tension.forceNegativeAt?p=!1:p=fe.chance(1/(1+Math.exp(-s[c])));let v;if(p)v=r<u&&fe.chance(.3)?"merchant":"chest",v==="merchant"&&r++,h(i[v]??0),o.push(v),l.push(null);else{v=fe.chance(vf[c])?"elite":"combat";const m=v==="elite"?Rc[c].elite:Rc[c].combat;h((i[v]??0)*m),o.push(v),l.push(c),c=c==="A"?"B":"A"}}if(this.isWitchFloor(e)){const f=o.findIndex(u=>u==="chest"),d=f>=0?f:o.length-1;d>=0&&this.swapSafeRoom(o,l,d,"witch",s)}if(this.isBlacksmithFloor(e)&&!this.isWitchFloor(e)){const f=o.findIndex(u=>u==="chest"),d=f>=0?f:o.length-1;d>=0&&this.swapSafeRoom(o,l,d,"blacksmith",s)}return Pt.debug(`[FloorGen] 楼层${e} 类型分配=${o.join(",")} 终态Tension A=${s.A} B=${s.B}`),{types:o,hints:l}}swapSafeRoom(e,t,n,i,s){const r=P.mapGen.tension.weights,o=(r[i]??0)-(r[e[n]]??0);s.A+=o,s.B+=o,e[n]=i,t[n]=null}guaranteeEliteRoomsFloor(e,t){if(e.length+2<6)return;const n=e.reduce((l,c,h)=>(c==="elite"&&l.push(h),l),[]);if(n.length>2){for(const l of n.slice(0,n.length-2))e[l]="combat";return}if(n.length>0)return;const i=l=>e.reduce((c,h,f)=>(t[f]===l&&c.push(f),c),[]),s=(l,c)=>(c<=0||e[l[c-1]]!=="elite")&&(c+1>=l.length||e[l[c+1]]!=="elite"),r=(l,c)=>{const h=i(l),f=h.map((d,u)=>({ti:d,pos:u})).filter(d=>e[d.ti]==="combat");if(f.length>=2&&f[1].pos>=c&&s(h,f[1].pos))return f[1].ti;for(let d=f.length-1;d>=0;d--)if(f[d].pos>=c&&s(h,f[d].pos))return f[d].ti;return-1};let o=r("A",1);if(o<0&&(o=r("B",1)),o<0&&(o=r("A",0)),o>=0)e[o]="elite";else{const l=e.length-1;l>=0&&(e[l]="elite",t[l]="A")}}isWitchFloor(e){const t=P.mapGen.witchLimit;return e>=t.minFloor&&(e-t.minFloor)%t.interval===0}isBlacksmithFloor(e){const t=P.mapGen.blacksmithLimit;return e>=t.minFloor&&(e-t.minFloor)%t.interval===0}};w(zi,"instance");let Vo=zi;const Gi=class Gi{constructor(){}static getInstance(){return Gi.instance||(Gi.instance=new Gi),Gi.instance}plan(e){const t=e.roomTypes.slice(1,-1);if(e.kind!=="normal"||t.length<2)return e.roomTypes.map((d,u)=>({type:d,rail:u===0?"S":u===e.roomTypes.length-1?"E":"A",railIndex:Math.max(0,u-1),mountIndex:-1,isTrunk:!0}));const n=[],i=[],s=[],r=e.railHints;if(r)t.forEach((d,u)=>{const p=r[u+1];p==="A"?n.push(d):p==="B"?i.push(d):s.push(d)});else{const d=t.filter(p=>p==="combat"||p==="elite");s.push(...t.filter(p=>p==="chest"||p==="merchant"||p==="witch"||p==="blacksmith"));const u=[...d];u.sort((p,v)=>(p==="elite"?0:1)-(v==="elite"?0:1)),u.forEach((p,v)=>{v%2===0?n.push(p):i.push(p)})}i.length===0&&n.length>=2&&i.push(n.shift()),n.length===0&&i.length>=2&&n.push(i.shift()),this.deferLeadingElites(n),this.deferLeadingElites(i),this.enforceRailConstraints(n),this.enforceRailConstraints(i),this.deferLeadingElites(n),this.deferLeadingElites(i),this.guaranteeEliteRooms(n,i,t.length+2),this.insertRestRooms(n,i,t.length+2);const o=n.length+i.length,l=s.map(d=>{const u=d==="merchant"||d==="witch"||d==="blacksmith"?Math.floor(o/2):fe.randInt(Math.ceil(o/2),o-1);return{type:d,mountIndex:Math.min(u,o-1)}}),c=[{type:e.roomTypes[0],rail:"S",railIndex:0,mountIndex:-1,isTrunk:!0}],h=(d,u,p)=>{c.push({type:d,rail:u,railIndex:p,mountIndex:-1,isTrunk:!0});const v=p*2+(u==="A"?0:1),m=l.map((g,_)=>({...g,mi:_})).filter(g=>g.mountIndex===v);for(const g of m)c.push({type:g.type,rail:"side",railIndex:-1,mountIndex:v,isTrunk:!1})},f=Math.max(n.length,i.length);for(let d=0;d<f;d++)d<n.length&&h(n[d],"A",d),d<i.length&&h(i[d],"B",d);for(const d of l){const u=d.mountIndex;!c.some(v=>v.rail==="side"&&v.mountIndex===u&&v.type===d.type)&&!c.some(v=>v.mountIndex===u&&v.rail==="side")&&c.splice(c.length-1,0,{type:d.type,rail:"side",railIndex:-1,mountIndex:u,isTrunk:!1})}return c.push({type:"end",rail:"E",railIndex:0,mountIndex:-1,isTrunk:!0}),this.logRailTension(e.floorId,n,i),c}deferLeadingElites(e){if(!(e.length<2||e[0]!=="elite")){for(let t=1;t<e.length;t++)if(e[t]!=="elite"){[e[0],e[t]]=[e[t],e[0]];return}}}enforceRailConstraints(e){for(let t=1;t<e.length;t++)e[t]==="elite"&&e[t-1]==="elite"&&(e[t]="chest");for(let t=2;t<e.length;t++)e[t]==="combat"&&e[t-1]==="combat"&&e[t-2]==="combat"&&(e[t]="chest")}guaranteeEliteRooms(e,t,n){if(n<6)return;const i=e.filter(c=>c==="elite").length+t.filter(c=>c==="elite").length;if(i>=1){if(i>2){const c=h=>{const f=h.map((d,u)=>({t:d,i:u})).filter(d=>d.t==="elite").pop()?.i??-1;for(let d=0;d<h.length;d++)h[d]==="elite"&&d!==f&&(h[d]="combat")};c(e),c(t)}return}const s=(c,h)=>{const f=h?1:0;for(let d=c.length-1;d>=f;d--){if(c[d]!=="combat")continue;const u=d>0&&c[d-1]==="elite",p=d+1<c.length&&c[d+1]==="elite";if(!u&&!p)return d}return-1};let r=e,o=s(e,!0);if(o<0&&(r=t,o=s(t,!0)),o<0&&(r=e,o=s(e,!1)),o>=0){r[o]="elite",this.enforceRailConstraints(r);return}const l=e.length>0?e:t;l.length>0?l[l.length-1]="elite":e.push("elite")}insertRestRooms(e,t,n){const i={left:Math.max(0,P.mapGen.maxRooms-n)},s=r=>{let o=0;for(let l=0;l<r.length;l++)r[l]!=="combat"&&r[l]!=="elite"||(o++,o%4===0&&i.left>0&&(r.splice(l+1,0,"rest"),i.left--,l++))};s(e),s(t)}logRailTension(e,t,n){const i=P.mapGen.tension.weights,s={A:{combat:.8,elite:.7},B:{combat:1,elite:1.2}},r=(o,l)=>o.reduce((c,h)=>{const f=i[h]??0,d=h==="combat"?l.combat:h==="elite"?l.elite:1;return c+f*d},0);Pt.debug(`[PathGen] 楼层${e} A=[${t.join(",")}] T=${r(t,s.A).toFixed(1)} | B=[${n.join(",")}] T=${r(n,s.B).toFixed(1)}`)}pathLengthDiff(e){const t=e.filter(i=>i.rail==="A").length,n=e.filter(i=>i.rail==="B").length;return Math.abs(t-n)}validateDiff(e){return this.pathLengthDiff(e)<=P.mapGen.path.maxLengthDiff}};w(Gi,"instance");let Wo=Gi;const vi=class vi{static reset(){vi.counter=0}static next(e){return vi.counter+=1,`${e}_${vi.counter.toString(36)}`}static equipmentId(){return vi.counter+=1,`eq_${Date.now().toString(36)}_${vi.counter.toString(36)}_${Math.floor(Math.random()*1e6).toString(36)}`}};w(vi,"counter",0);let $t=vi;const Za={north:{dx:0,dy:-1},south:{dx:0,dy:1},east:{dx:1,dy:0},west:{dx:-1,dy:0}},xf={north:"south",south:"north",east:"west",west:"east"},Hi=class Hi{constructor(){}static getInstance(){return Hi.instance||(Hi.instance=new Hi),Hi.instance}place(e,t){const n=P.mapGen,i=n.gridRadius,s=this.maxSpecWidth(),r=this.maxSpecHeight(),o=2*i*n.cellSpacingX+s,l=2*i*n.cellSpacingY+r,c=new Map,h=[],f=[],d=new Map;for(let p=0;p<t.length;p++){const v=t[p];let m=0,g=0,_=null;if(p===0)m=0,g=0;else{const M=h[p-1],C=this.biasTarget(v,t,h,d),L=this.chooseCell(M.gx,M.gy,c,f,C);if(!L)return null;m=L.gx,g=L.gy,_=L.direction}const S=`${m},${g}`;if(c.has(S))return null;c.set(S,p);const y=this.rollSize(v.type,e),E=(m+i)*n.cellSpacingX,T=(g+i)*n.cellSpacingY,R={id:`room_${e}_${p}`,floorId:e,type:v.type,order:p,gx:m,gy:g,width:y.width,height:y.height,x:E,y:T,centerX:E+Math.floor(y.width/2),centerY:T+Math.floor(y.height/2),fromDirection:_,depth:0,onPathA:v.rail==="A",onPathB:v.rail==="B",mountedOn:v.rail==="side"?this.mountedOnId(t,v,e):null,doors:[],entities:[]};h.push(R),(v.rail==="A"||v.rail==="B")&&d.set(`${v.rail}${v.railIndex}`,{gx:m,gy:g}),_&&f.push(_)}const u=Array.from({length:l},()=>Array.from({length:o},()=>-1));for(const p of h){for(let v=p.y;v<=p.y+p.height-1;v++)for(let m=p.x;m<=p.x+p.width-1;m++)u[v][m]=1;for(let v=p.y+1;v<=p.y+p.height-2;v++)for(let m=p.x+1;m<=p.x+p.width-2;m++)u[v][m]=0}return $t.next("gen"),{rooms:h,grid:u}}biasTarget(e,t,n,i){if(e.rail==="A"&&e.railIndex>0)return i.get(`A${e.railIndex-1}`)??null;if(e.rail==="B"&&e.railIndex>0)return i.get(`B${e.railIndex-1}`)??null;if(e.rail==="B"&&e.railIndex===0)return{gx:0,gy:0};if(e.rail==="E"){const s=t.filter(r=>r.rail==="A").length-1;if(s>=0)return i.get(`A${s}`)??null}return null}chooseCell(e,t,n,i,s){const o=P.mapGen.gridRadius,l=2*Math.SQRT2+1e-9,c=i[i.length-1]??null,h=["north","south","east","west"],f=fe.shuffle(h),d=(p,v)=>Math.abs(p)<=o&&Math.abs(v)<=o,u=(p,v)=>{const m=[];for(const g of f){if(!p&&c&&g===xf[c]||!v&&this.isThirdStraight(g,i))continue;const{dx:_,dy:S}=Za[g],y=e+_,E=t+S;if(n.has(`${y},${E}`)||!d(y,E)||_n.dist(y,E,0,0)>l)continue;let T=fe.next();s&&_n.manhattan(y,E,s.gx,s.gy)<=1&&(T+=3),m.push({gx:y,gy:E,direction:g,score:T})}return m.length===0?null:(m.sort((g,_)=>_.score-g.score),m[0])};return u(!1,!1)??u(!0,!1)??u(!0,!0)??this.nearestFreeCell(e,t,n,o)}isThirdStraight(e,t){const n=t.length;return n<2?!1:t[n-1]===e&&t[n-2]===e}nearestFreeCell(e,t,n,i){let s=null,r=1/0;for(const o of Object.keys(Za)){const{dx:l,dy:c}=Za[o],h=e+l,f=t+c;if(n.has(`${h},${f}`)||Math.abs(h)>i||Math.abs(f)>i||_n.dist(h,f,0,0)>2*Math.SQRT2+1e-9)continue;const d=_n.dist(h,f,0,0);d<r&&(r=d,s={gx:h,gy:f,direction:o})}return s}rollSize(e,t=0){if(t===xs&&e==="end")return{width:13,height:11};const n=P.mapGen.roomSpecs[e],i=o=>Array.isArray(o)?fe.randInt(o[0],o[1]):o,s=Math.max(P.mapGen.minRoomWidth,i(n.width)),r=Math.max(P.mapGen.minRoomHeight,i(n.height));return{width:s+2,height:r+2}}maxSpecWidth(){let e=0;for(const t of Object.values(P.mapGen.roomSpecs)){const n=Array.isArray(t.width)?t.width[1]:t.width;e=Math.max(e,n)}return e+2}maxSpecHeight(){let e=0;for(const t of Object.values(P.mapGen.roomSpecs)){const n=Array.isArray(t.height)?t.height[1]:t.height;e=Math.max(e,n)}return e+2}mountedOnId(e,t,n){const i=e.indexOf(t);for(let s=i-1;s>=0;s--)if(e[s].isTrunk)return`room_${n}_${s}`;return null}};w(Hi,"instance");let qo=Hi;const Vi=class Vi{constructor(){}static getInstance(){return Vi.instance||(Vi.instance=new Vi),Vi.instance}connect(e,t){const n=[],i=[],s=new Set;new Map(e.map(d=>[d.id,d]));const r=(d,u)=>{s.add(this.pairKey(d,u)),s.add(this.pairKey(u,d))},o=(d,u)=>s.has(this.pairKey(d,u));for(let d=0;d+1<e.length;d++){const u=e[d],p=e[d+1],v=this.carveCorridor(u,p,t);v&&(n.push({id:$t.next("corr"),fromRoomId:u.id,toRoomId:p.id,tiles:v.tiles,extra:!1}),i.push({from:u.id,to:p.id}),r(u.id,p.id))}const l=P.mapGen.corridor,c=[];for(let d=0;d<e.length;d++)for(let u=d+1;u<e.length;u++){const p=e[d],v=e[u];o(p.id,v.id)||_n.manhattan(p.gx,p.gy,v.gx,v.gy)>l.adjacentManhattan||c.push({a:p,b:v,priority:this.shortcutPriority(p,v,e)})}c.sort((d,u)=>d.priority-u.priority||fe.next()-.5);let h=0,f=!1;for(const d of c){if(h>=l.extraMax)break;if(!fe.chance(l.extraChance))continue;const p=this.carveCorridor(d.a,d.b,t);p&&(n.push({id:$t.next("corr"),fromRoomId:d.a.id,toRoomId:d.b.id,tiles:p.tiles,extra:!0}),i.push({from:d.a.id,to:d.b.id}),r(d.a.id,d.b.id),h++,d.priority<=1&&(f=!0))}if(!f){const d=c.find(u=>u.priority<=1&&!o(u.a.id,u.b.id)&&h<l.extraMax)??c.find(u=>u.priority<=2&&!o(u.a.id,u.b.id)&&h<l.extraMax);if(d){const u=this.carveCorridor(d.a,d.b,t);u&&(n.push({id:$t.next("corr"),fromRoomId:d.a.id,toRoomId:d.b.id,tiles:u.tiles,extra:!0}),i.push({from:d.a.id,to:d.b.id}),r(d.a.id,d.b.id))}}return{corridors:n,connections:i}}spawnHiddenRooms(e,t,n,i){const s=new Map(e.map(l=>[l.id,l])),r=[];let o=0;for(const l of t.filter(c=>c.extra)){if(!fe.chance(.15)||l.tiles.length===0)continue;const c=this.trySpawnHidden(l,e,s,n,i,o);c&&(r.push(c),o++)}return r}trySpawnHidden(e,t,n,i,s,r){const o=P.mapGen,l=fe.shuffle([{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0}]),c=fe.shuffle([...e.tiles]);for(const h of c)for(const f of l){const d=h.x+f.dx,u=h.y+f.dy;if(!this.insideGrid(i,d,u)||i[u][d]===0)continue;const p=d+f.dx+(f.dx===0?-2:0),v=u+f.dy+(f.dy===0?-2:0),m=p-1,g=v-1,_=7,S=7;if(!this.rectFitsHidden(i,m,g,_,S,d,u))continue;i[u][d]=1;const y=n.get(e.fromRoomId)?.depth??1,E=n.get(e.toRoomId)?.depth??1,T=Math.min(y,E)+1;return{id:`hidden_${s}_${r}`,floorId:s,type:"chest",order:t.length+r,gx:Math.round((m-0)/o.cellSpacingX-o.gridRadius),gy:Math.round((g-0)/o.cellSpacingY-o.gridRadius),width:_,height:S,x:m,y:g,centerX:m+Math.floor(_/2),centerY:g+Math.floor(S/2),fromDirection:null,depth:T,onPathA:!1,onPathB:!1,mountedOn:null,hiddenEntrance:{x:d,y:u},doors:[],entities:[],layout:"hidden"}}return null}rectFitsHidden(e,t,n,i,s,r,o){for(let l=n;l<n+s;l++)for(let c=t;c<t+i;c++){if(!this.insideGrid(e,c,l))return!1;const h=e[l][c];if(c>t&&c<t+i-1&&l>n&&l<n+s-1){if(h!==-1)return!1}else{if(c===r&&l===o)continue;if(h===0)return!1}}return!0}shortcutPriority(e,t,n){const i=e.onPathA&&t.onPathA||e.onPathB&&t.onPathB,s=n[0],r=n[n.length-1],o=e===s&&t.onPathB||t===s&&e.onPathB||e===r&&t.onPathA||t===r&&e.onPathA;return i?this.railGap(e,t)===1?0:2:o?1:2}railGap(e,t){return Math.abs(e.order-t.order)}carveCorridor(e,t,n){if(e.gy===t.gy&&e.gx!==t.gx){const i=e.gx<t.gx?e:t,s=e.gx<t.gx?t:e,r=Math.max(i.y+1,s.y+1),o=Math.min(i.y+i.height-2,s.y+s.height-2);if(r>o)return null;const l=Math.floor((r+o)/2),c=[];for(let h=i.x+i.width;h<s.x;h++)this.insideGrid(n,h,l)&&(n[l][h]=0,c.push({x:h,y:l}));return this.carveDoor(i,s,l,"east",n),this.carveDoor(s,i,l,"west",n),{tiles:c}}if(e.gx===t.gx&&e.gy!==t.gy){const i=e.gy<t.gy?e:t,s=e.gy<t.gy?t:e,r=Math.max(i.x+1,s.x+1),o=Math.min(i.x+i.width-2,s.x+s.width-2);if(r>o)return null;const l=Math.floor((r+o)/2),c=[];for(let h=i.y+i.height;h<s.y;h++)this.insideGrid(n,l,h)&&(n[h][l]=0,c.push({x:l,y:h}));return this.carveDoor(i,s,l,"south",n),this.carveDoor(s,i,l,"north",n),{tiles:c}}return null}carveDoor(e,t,n,i,s){let r=0,o=0;if(i==="east"?(r=e.x+e.width-1,o=n):i==="west"?(r=e.x,o=n):i==="south"?(r=n,o=e.y+e.height-1):(r=n,o=e.y),!!this.insideGrid(s,r,o)){if(i==="east"||i==="west"){if(o<=e.y||o>=e.y+e.height-1)return}else if(r<=e.x||r>=e.x+e.width-1)return;s[o][r]=0,e.doors.push({x:r,y:o,direction:i,toRoomId:t.id})}}insideGrid(e,t,n){return n>=0&&n<e.length&&t>=0&&t<e[0].length}pairKey(e,t){return`${e}|${t}`}};w(Vi,"instance");let Xo=Vi;const Fr=[[0,1],[0,-1],[1,0],[-1,0]];class Pc{constructor(e,t,n){w(this,"room");w(this,"grid");w(this,"floorId");w(this,"spots");w(this,"taken",new Set);this.room=e,this.grid=t,this.floorId=n,this.spots=this.computeSpots()}put(e){this.room.entities.push({...e,id:$t.next("ent")}),this.taken.add(`${e.x},${e.y}`)}putBlocking(e,t,n){this.put({kind:e,x:t,y:n}),this.grid[n]?.[t]===0&&(this.grid[n][t]=2)}freeAt(e,t){return this.grid[t]?.[e]!==0||this.taken.has(`${e},${t}`)?!1:!this.room.entities.some(n=>n.x===e&&n.y===t)}inRoom(e,t){return e>=this.room.x&&e<this.room.x+this.room.width&&t>=this.room.y&&t<this.room.y+this.room.height}placeStairAgainstWall(e){const t=this.room.y+1,n=new Set(this.room.doors.map(i=>{const s=this.innerOfDoor(i);return`${s.x},${s.y}`}));for(let i=0;i<=this.room.width;i++){const s=i===0?0:i%2===1?(i+1)/2:-(i/2),r=this.room.centerX-1+s;if(r<this.room.x+1||r+1>this.room.x+this.room.width-2)continue;const o=[0,1].flatMap(l=>[0,1].map(c=>({x:r+c,y:t+l})));if(o.every(l=>this.freeAt(l.x,l.y))&&!o.some(l=>n.has(`${l.x},${l.y}`)))return this.put({kind:"stair",x:r,y:t,targetFloor:e,stairSpan:2}),this.put({kind:"stair",x:r+1,y:t,targetFloor:e,stairSpan:1}),this.put({kind:"stair",x:r,y:t+1,targetFloor:e,stairSpan:1}),this.put({kind:"stair",x:r+1,y:t+1,targetFloor:e,stairSpan:1}),!0}return!1}monsterAt(e,t,n){const i=P.getMonster(e),s=i?tn.getInstance().monsterStats(i,this.floorId,t,this.room.depth):void 0;this.put({kind:"monster",monsterId:e,isElite:t,x:n.x,y:n.y,depth:this.room.depth,stats:s})}monsterCount(){return this.room.entities.filter(e=>e.kind==="monster"||e.kind==="boss").length}monsterNear(e,t,n){return this.room.entities.some(i=>(i.kind==="monster"||i.kind==="boss")&&Math.abs(i.x-e)+Math.abs(i.y-t)<=n)}placeGuardCovering(e,t,n){if(t.length===0||e.length===0)return!1;let i=null,s=0;for(const r of this.spots){if(!this.freeAt(r.x,r.y))continue;let o=0;for(const l of e)Math.abs(l.x-r.x)+Math.abs(l.y-r.y)<=n&&o++;o>s&&(s=o,i={x:r.x,y:r.y})}return i?(this.monsterAt(fe.pickWeighted(t,r=>r.weight).id,!1,i),!0):!1}bossAt(e,t){const n=P.getMonster(e),i=n?tn.getInstance().monsterStats(n,this.floorId,!1,this.room.depth):void 0;this.put({kind:"boss",monsterId:e,x:t.x,y:t.y,depth:this.room.depth,stats:i})}computeSpots(){const e=this.room.doors.map(s=>({x:s.x,y:s.y}));e.length===0&&e.push({x:this.room.centerX,y:this.room.centerY});const t=new Map,n=[];for(const s of e)this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0&&(t.set(`${s.x},${s.y}`,0),n.push(s));for(;n.length>0;){const s=n.shift(),r=t.get(`${s.x},${s.y}`)??0;for(const[o,l]of Fr){const c=s.x+o,h=s.y+l,f=`${c},${h}`;this.inRoom(c,h)&&this.grid[h]?.[c]===0&&(t.has(f)||(t.set(f,r+1),n.push({x:c,y:h})))}}const i=[];for(let s=this.room.y+1;s<=this.room.y+this.room.height-2;s++)for(let r=this.room.x+1;r<=this.room.x+this.room.width-2;r++)this.grid[s][r]===0&&i.push({x:r,y:s,dist:t.get(`${r},${s}`)??99});return i}innerOfDoor(e){switch(e.direction){case"east":return{x:e.x-1,y:e.y};case"west":return{x:e.x+1,y:e.y};case"north":return{x:e.x,y:e.y+1};default:return{x:e.x,y:e.y-1}}}mainPath(){const e=this.room.doors.map(s=>this.innerOfDoor(s)).filter(s=>this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0);if(e.length===0)return[{x:this.room.centerX,y:this.room.centerY}];if(e.length===1)return this.bfsPath(e[0],this.farthestFrom(e[0]));let t=[e[0],e[1]],n=-1;for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){const o=Math.abs(e[s].x-e[r].x)+Math.abs(e[s].y-e[r].y);o>n&&(n=o,t=[e[s],e[r]])}const i=this.bfsPath(t[0],t[1]);return i.length>0?i:[t[0]]}bfsPath(e,t){const n=(c,h)=>`${c},${h}`,i=new Map,s=[e];for(i.set(n(e.x,e.y),null);s.length>0;){const c=s.shift();if(c.x===t.x&&c.y===t.y)break;for(const[h,f]of Fr){const d=c.x+h,u=c.y+f;if(!this.inRoom(d,u)||this.grid[u]?.[d]!==0)continue;const p=n(d,u);i.has(p)||(i.set(p,n(c.x,c.y)),s.push({x:d,y:u}))}}const r=n(t.x,t.y);if(!i.has(r))return[];const o=[];let l=r;for(;l;){const[c,h]=l.split(",").map(Number);o.push({x:c,y:h}),l=i.get(l)??null}return o.reverse()}farthestFrom(e){let t=e,n=-1;for(const i of this.spots)i.dist>n&&(n=i.dist,t={x:i.x,y:i.y});return t}innerCorners(){const e=this.room;return[{x:e.x+1,y:e.y+1},{x:e.x+e.width-2,y:e.y+1},{x:e.x+1,y:e.y+e.height-2},{x:e.x+e.width-2,y:e.y+e.height-2}]}blockPath(e,t,n,i=.5){if(e<=0||t.length===0)return 0;const s=this.mainPath();if(s.length<3)return 0;const r=Math.max(1,Math.min(s.length-2,Math.round(s.length*i))),o=s[r],l=s[r+1]??s[r-1],c=o.y===l.y,h=[];if(c)for(let m=this.room.y+1;m<=this.room.y+this.room.height-2;m++)this.grid[m]?.[o.x]===0&&h.push({x:o.x,y:m});else for(let m=this.room.x+1;m<=this.room.x+this.room.width-2;m++)this.grid[o.y]?.[m]===0&&h.push({x:m,y:o.y});if(h.length===0)return 0;const f=s[0],d=h.filter(m=>Math.abs(m.x-f.x)+Math.abs(m.y-f.y)>=2),u=d.length>0?d:h,p=fe.shuffle(u).slice(0,Math.min(e,u.length));let v=0;for(const m of p)this.taken.has(`${m.x},${m.y}`)||(this.monsterAt(fe.pickWeighted(t,g=>g.weight).id,n,m),v++);if(v>0&&P.mapGen.content.barrier.fillWithPillars){const m=this.doorInnerCells();for(const g of u)this.taken.has(`${g.x},${g.y}`)||m.has(`${g.x},${g.y}`)||(this.put({kind:"pillar",x:g.x,y:g.y}),this.grid[g.y][g.x]=2)}return v}doorInnerCells(){return new Set(this.room.doors.map(e=>{const t=this.innerOfDoor(e);return`${t.x},${t.y}`}))}guardAround(e,t,n,i,s,r=1){if(n<=0||i.length===0)return 0;const o=[];for(let c=t-r;c<=t+r;c++)for(let h=e-r;h<=e+r;h++)h===e&&c===t||this.inRoom(h,c)&&this.grid[c]?.[h]===0&&(this.taken.has(`${h},${c}`)||o.push({x:h,y:c}));const l=fe.shuffle(o).slice(0,Math.min(n,o.length));for(const c of l)this.monsterAt(fe.pickWeighted(i,h=>h.weight).id,s,c);return l.length}guardStair(e,t,n=!1){if(e<=0||t.length===0)return 0;const i=this.room.entities.find(f=>f.kind==="stair"),s=i?{x:i.x,y:i.y}:{x:this.room.centerX,y:this.room.centerY},r=this.mainPath()[0]??{x:s.x,y:s.y+1},o=Math.sign(r.x-s.x),l=Math.sign(r.y-s.y),c=[];o!==0&&c.push({x:s.x+o,y:s.y},{x:s.x+o*2,y:s.y}),l!==0&&c.push({x:s.x,y:s.y+l},{x:s.x,y:s.y+l*2});let h=0;for(const f of c){if(h>=e)break;this.freeAt(f.x,f.y)&&(this.monsterAt(fe.pickWeighted(t,d=>d.weight).id,n,f),h++)}return h}placeMonsterAt(e,t,n){return this.freeAt(n.x,n.y)?(this.monsterAt(e,t,n),!0):!1}placeMonsterUnchecked(e,t,n){return n.x<=this.room.x||n.x>=this.room.x+this.room.width-1||n.y<=this.room.y||n.y>=this.room.y+this.room.height-1||this.taken.has(`${n.x},${n.y}`)||this.room.entities.some(i=>i.x===n.x&&i.y===n.y)?!1:(this.monsterAt(e,t,n),!0)}pickMonsterId(e){return e.length>0?fe.pickWeighted(e,t=>t.weight).id:null}placeArenaPillars(){const e=this.room.centerX,t=this.room.centerY,n=[{x:e-2,y:t},{x:e+2,y:t},{x:e,y:t-2},{x:e,y:t+2},{x:e-2,y:t-2},{x:e+2,y:t-2},{x:e-2,y:t+2},{x:e+2,y:t+2}],i=new Set;for(const r of this.room.doors){const o=this.innerOfDoor(r);i.add(`${o.x},${o.y}`)}for(const r of this.mainPath())i.add(`${r.x},${r.y}`);const s=n.filter(r=>this.inRoom(r.x,r.y)&&this.freeAt(r.x,r.y)&&!i.has(`${r.x},${r.y}`));if(s.length<4)return!1;for(const r of s)this.putBlocking("pillar",r.x,r.y);return!0}placeMonsters(e,t,n){if(e<=0||n.length===0)return 0;const i=P.mapGen.content.monsterMinDistFromEntry,s=this.spots.filter(l=>l.dist>=i&&this.freeAt(l.x,l.y)),r=s.length>=e?s:this.spots.filter(l=>this.freeAt(l.x,l.y)),o=fe.shuffle(r).slice(0,e);for(const l of o)this.monsterAt(fe.pickWeighted(n,c=>c.weight).id,t,l);return o.length}placeCornerChests(e,t=!1){const n=[];if(e<=0)return n;const i=this.innerCorners().filter(r=>this.freeAt(r.x,r.y));return fe.shuffle(i).slice(0,Math.min(e,i.length)).forEach((r,o)=>{t&&o===0&&this.put({kind:"carpet",x:r.x,y:r.y}),this.put({kind:"chest",chestTier:"normal",x:r.x,y:r.y}),n.push(r)}),n}placePotions(e){if(e<=0)return 0;const t=this.spots.filter(s=>s.dist>=1&&s.dist<=4&&this.freeAt(s.x,s.y)),n=t.length>=e?t:this.spots.filter(s=>this.freeAt(s.x,s.y)),i=fe.shuffle(n).slice(0,Math.min(e,n.length));for(const s of i)this.put({kind:"potion",potionTier:this.pickPotionTier(),x:s.x,y:s.y});return i.length}pickPotionTier(){const e=P.potions.potions,t=e.filter(s=>this.floorId>=s.minFloor&&this.floorId<=s.maxFloor),n=t.length>0?t:e,i=n.map((s,r)=>({tier:s.tier,weight:n.length-r}));return fe.pickWeighted(i,s=>s.weight).tier}placeRoomTorches(){const e=P.mapGen.content.roomTorches[this.room.type];if(!e)return;const t=fe.randInt(e[0],e[1]);if(t<=0)return;let n=0;for(const i of this.wallRing()){if(n>=t)break;this.grid[i.y]?.[i.x]===1&&(this.room.entities.some(s=>s.x===i.x&&s.y===i.y)||(this.put({kind:"torch",x:i.x,y:i.y}),n++))}}wallRing(){const e=this.room,t=[];for(let s=e.x;s<e.x+e.width;s++)t.push({x:s,y:e.y},{x:s,y:e.y+e.height-1});for(let s=e.y+1;s<e.y+e.height-1;s++)t.push({x:e.x,y:s},{x:e.x+e.width-1,y:s});const n=[{x:e.x,y:e.y},{x:e.x+e.width-1,y:e.y},{x:e.x,y:e.y+e.height-1},{x:e.x+e.width-1,y:e.y+e.height-1}],i=s=>Math.min(...n.map(r=>Math.abs(s.x-r.x)+Math.abs(s.y-r.y)));return t.sort((s,r)=>i(s)-i(r))}placePillars(){if(this.room.width-2<P.mapGen.decor.pillarMinRoomWidth)return;const e=this.doorInnerCells();for(const t of this.innerCorners())this.freeAt(t.x,t.y)&&(e.has(`${t.x},${t.y}`)||(this.put({kind:"pillar",x:t.x,y:t.y}),this.grid[t.y][t.x]=2))}placeWitchRoom(e){const t=this.room.centerX,n=this.room.centerY,i=this.mainPath()[0]??{x:t,y:n+1},s=this.doorInnerCells(),r=(u,p)=>this.freeAt(u,p)&&!s.has(`${u},${p}`);if(this.freeAt(t,n))this.put({kind:"npc",npcId:"npc_witch",x:t,y:n});else{const u=[...this.spots].filter(p=>this.freeAt(p.x,p.y)).sort((p,v)=>v.dist-p.dist)[0];u&&this.put({kind:"npc",npcId:"npc_witch",x:u.x,y:u.y})}const o=Math.sign(i.x-t),l=Math.sign(i.y-n),c=o!==0?{x:t+o,y:n}:{x:t,y:n+(l||1)};r(c.x,c.y)&&this.putBlocking("cauldron",c.x,c.y);const h=o!==0?[{x:0,y:1},{x:0,y:-1}]:[{x:1,y:0},{x:-1,y:0}];let f=0;for(const u of h){if(f>=e)break;const p=t+u.x*2,v=n+u.y*2;r(p,v)&&(this.putBlocking("shelf",p,v),f++)}if(f<e)for(const u of fe.shuffle(this.innerCorners())){if(f>=e)break;r(u.x,u.y)&&(this.putBlocking("shelf",u.x,u.y),f++)}const d=fe.shuffle(this.innerCorners()).sort((u,p)=>Math.abs(p.x-i.x)+Math.abs(p.y-i.y)-(Math.abs(u.x-i.x)+Math.abs(u.y-i.y)));for(const u of d)if(this.freeAt(u.x,u.y)){this.put({kind:"fountain",x:u.x,y:u.y});break}}bandFor(e){const t=this.room.depth;return e.find(n=>t<=n.maxDepth)??e[e.length-1]}validate(e,t,n=1/0){const i=[],s=P.mapGen.content.guard,r=()=>this.room.entities.filter(o=>o.kind==="monster"||o.kind==="boss").length;if(this.ensureReachable(),e==="boss"&&t.length>0){if(this.bypassRoute()&&r()===0){const o=this.freeSpotOnRoute(this.mainPath());o&&this.monsterAt(fe.pickWeighted(t,l=>l.weight).id,!1,o)}}else if((e==="combat"||e==="elite")&&t.length>0){let o=this.bypassRoute(),l=0,c=!1;for(;o&&l<12;){const h=r()<n?this.freeSpotOnRoute(o):null;if(h)this.monsterAt(fe.pickWeighted(t,f=>f.weight).id,!1,h);else{const f=o[Math.floor(o.length/2)],d=Math.abs(o[o.length-1].x-o[0].x)>=Math.abs(o[o.length-1].y-o[0].y),u=[o[0],o[o.length-1]];if(this.sealWithPillarLine(f,d,u)||this.sealWithPillarLine(f,!d,u))c=!0;else{const p=this.freeSpotOnRoute(o,this.doorInnerCells());if(!p)break;this.put({kind:"pillar",x:p.x,y:p.y}),this.grid[p.y][p.x]=2,c=!0}}l++,c&&this.ensureReachable(),o=this.bypassRoute()}o&&i.push("可绕过且无空位补怪"),e==="elite"&&this.ensureEliteOnPath(this.mainPath(),t,n)}for(const o of this.room.entities.filter(l=>l.kind==="stair"))!this.monsterNear(o.x,o.y,s.stairRadius)&&t.length>0&&r()<n&&this.guardStair(1,t)===0&&!this.placeGuardCovering([{x:o.x,y:o.y}],t,s.stairRadius)&&i.push("楼梯无守护且无空位");if(e!=="boss"){const o=this.room.entities.filter(c=>c.kind==="chest");let l=o.filter(c=>!this.monsterNear(c.x,c.y,s.chestRadius));for(;l.length>0&&t.length>0&&r()<n&&this.placeGuardCovering(l,t,s.chestRadius);)l=o.filter(c=>!this.monsterNear(c.x,c.y,s.chestRadius));l.length>0&&i.push("宝箱无守护且无空位")}return i}bypassRoute(){const e=this.room.doors.map(s=>this.innerOfDoor(s)).filter(s=>this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0);if(e.length<2)return null;let t=[e[0],e[1]],n=-1;for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){const o=Math.abs(e[s].x-e[r].x)+Math.abs(e[s].y-e[r].y);o>n&&(n=o,t=[e[s],e[r]])}const i=new Set(this.room.entities.filter(s=>s.kind==="monster"||s.kind==="boss"||s.kind==="pillar").map(s=>`${s.x},${s.y}`));return this.bfsRoute(t[0],t[1],i)}bfsRoute(e,t,n){const i=(o,l)=>`${o},${l}`,s=new Map([[i(e.x,e.y),null]]),r=[e];for(;r.length>0;){const o=r.shift();if(o.x===t.x&&o.y===t.y){const l=[];let c=i(t.x,t.y);for(;c;){const[h,f]=c.split(",").map(Number);l.push({x:h,y:f}),c=s.get(c)??null}return l.reverse()}for(const[l,c]of Fr){const h=o.x+l,f=o.y+c,d=i(h,f);this.inRoom(h,f)&&this.grid[f]?.[h]===0&&(n.has(d)||s.has(d)||(s.set(d,i(o.x,o.y)),r.push({x:h,y:f})))}}return null}freeSpotOnRoute(e,t){const n=Math.floor(e.length/2);for(let i=0;i<e.length;i++)for(const s of[n+i,n-i]){const r=e[s];if(!(!r||!this.freeAt(r.x,r.y))&&!t?.has(`${r.x},${r.y}`))return r}return null}sealWithPillarLine(e,t,n){const i=this.doorInnerCells(),s=(u,p)=>this.room.entities.some(v=>v.kind==="monster"&&v.x===u&&v.y===p),r=(u,p)=>{const v=this.room.entities.find(m=>m.x===u&&m.y===p);return!v||v.kind==="monster"||v.kind==="boss"||v.kind==="pillar"},o=u=>{const p=[];if(t)for(let S=this.room.y+1;S<=this.room.y+this.room.height-2;S++)this.grid[S]?.[u]===0&&p.push({x:u,y:S});else for(let S=this.room.x+1;S<=this.room.x+this.room.width-2;S++)this.grid[u]?.[S]===0&&p.push({x:S,y:u});if(p.length===0||p.some(S=>i.has(`${S.x},${S.y}`)||!r(S.x,S.y)))return!1;const v=(S,y)=>this.inRoom(S,y)&&this.grid[y]?.[S]===0,m=S=>s(S.x,S.y)?t?v(S.x-1,S.y)&&v(S.x+1,S.y):v(S.x,S.y-1)&&v(S.x,S.y+1):!1,g=S=>this.freeAt(S.x,S.y)&&(t?v(S.x-1,S.y)&&v(S.x+1,S.y):v(S.x,S.y-1)&&v(S.x,S.y+1));if(!p.some(m)){const S=p.slice(Math.floor(p.length/2)).find(g)??p.find(g);if(!S||!this.relocateMonsterTo(S))return!1}let _=!1;for(const S of p)this.freeAt(S.x,S.y)&&(this.put({kind:"pillar",x:S.x,y:S.y}),this.grid[S.y][S.x]=2,_=!0);return _},l=u=>t?u.x:u.y,c=Math.min(l(n[0]),l(n[1])),h=Math.max(l(n[0]),l(n[1])),f=t?e.x:e.y,d=[];for(let u=c+1;u<h;u++)d.push(u);d.sort((u,p)=>Math.abs(u-f)-Math.abs(p-f));for(const u of d)if(!(t&&(u<=this.room.x||u>=this.room.x+this.room.width-1))&&!(!t&&(u<=this.room.y||u>=this.room.y+this.room.height-1))&&o(u))return!0;return!1}relocateMonsterTo(e){const t=this.room.entities.find(n=>n.kind==="monster"&&!(n.x===e.x&&n.y===e.y));return t?(this.taken.delete(`${t.x},${t.y}`),t.x=e.x,t.y=e.y,this.taken.add(`${e.x},${e.y}`),!0):!1}ensureEliteOnPath(e,t,n){const i=new Set(e.map(l=>`${l.x},${l.y}`));if(this.room.entities.some(l=>(l.kind==="monster"||l.kind==="boss")&&l.isElite&&i.has(`${l.x},${l.y}`)))return;if(this.room.entities.filter(l=>l.kind==="monster"||l.kind==="boss").length<n&&t.length>0){const l=this.freeSpotOnRoute(e);if(l){this.monsterAt(fe.pickWeighted(t,c=>c.weight).id,!0,l);return}}const o=this.room.entities.find(l=>l.kind==="monster"&&!l.isElite&&i.has(`${l.x},${l.y}`));o&&this.upgradeToElite(o)}upgradeToElite(e){e.isElite=!0;const t=P.getMonster(e.monsterId??"");t&&(e.stats=tn.getInstance().monsterStats(t,this.floorId,!0,this.room.depth))}ensureReachable(){for(const i of this.room.doors){const s=this.innerOfDoor(i);if(!this.inRoom(s.x,s.y)||this.grid[s.y]?.[s.x]===0)continue;const r=this.room.entities.find(o=>(o.kind==="pillar"||o.kind==="cauldron"||o.kind==="shelf")&&o.x===s.x&&o.y===s.y);r&&(this.room.entities=this.room.entities.filter(o=>o!==r),this.grid[s.y][s.x]=0)}const e=[];for(let i=this.room.y+1;i<=this.room.y+this.room.height-2;i++)for(let s=this.room.x+1;s<=this.room.x+this.room.width-2;s++)this.grid[i]?.[s]===0&&e.push({x:s,y:i});if(e.length===0)return;const n=this.room.doors.map(i=>this.innerOfDoor(i)).find(i=>this.inRoom(i.x,i.y)&&this.grid[i.y]?.[i.x]===0)??e[Math.floor(e.length/2)];for(let i=0;i<64;i++){const s=new Set([`${n.x},${n.y}`]),r=[n];for(;r.length>0;){const c=r.shift();for(const[h,f]of Fr){const d=c.x+h,u=c.y+f,p=`${d},${u}`;this.inRoom(d,u)&&this.grid[u]?.[d]===0&&(s.has(p)||(s.add(p),r.push({x:d,y:u})))}}const o=e.filter(c=>!s.has(`${c.x},${c.y}`));if(o.length===0)return;const l=this.room.entities.find(c=>(c.kind==="pillar"||c.kind==="cauldron"||c.kind==="shelf")&&o.some(h=>Math.abs(c.x-h.x)+Math.abs(c.y-h.y)===1));if(!l)return;this.room.entities=this.room.entities.filter(c=>c!==l),this.grid[l.y][l.x]=0}}}const Wi=class Wi{constructor(){}static getInstance(){return Wi.instance||(Wi.instance=new Wi),Wi.instance}fill(e,t,n,i,s,r=[]){const o=P.mapGen.content,l=P.monsters.monsters.filter(d=>d.category==="normal"),c=l.filter(d=>i>=d.floorMin&&i<=d.floorMax),h=(c.length>0?c:l).map(d=>({id:d.id,weight:d.weight}));for(const d of e){const u=new Pc(d,n,i);switch(d.type){case"start":{s==="initial"&&u.put({kind:"npc",npcId:"npc_guide",x:d.centerX,y:d.y+1}),s!=="summit"&&u.placePotions(fe.randInt(o.startRoom.potions[0],o.startRoom.potions[1]));break}case"end":{if(s==="summit"){const p={x:d.centerX,y:d.y+1};u.freeAt(p.x,p.y)?u.put({kind:"gate",x:p.x,y:p.y}):u.put({kind:"gate",x:d.centerX,y:d.centerY});break}if(!u.placeStairAgainstWall(i+1)){const p=d.centerX-1,v=d.centerY-1;if([0,1].flatMap(g=>[0,1].map(_=>({x:p+_,y:v+g}))).every(g=>u.freeAt(g.x,g.y)))u.put({kind:"stair",x:p,y:v,targetFloor:i+1,stairSpan:2}),u.put({kind:"stair",x:p+1,y:v,targetFloor:i+1,stairSpan:1}),u.put({kind:"stair",x:p,y:v+1,targetFloor:i+1,stairSpan:1}),u.put({kind:"stair",x:p+1,y:v+1,targetFloor:i+1,stairSpan:1});else{const g={x:d.centerX,y:d.y+1};u.freeAt(g.x,g.y)?u.put({kind:"stair",x:g.x,y:g.y,targetFloor:i+1}):u.put({kind:"stair",x:d.centerX,y:d.centerY,targetFloor:i+1})}}s==="initial"?(u.put({kind:"chest",chestTier:"normal",x:d.x+1,y:d.y+1}),u.guardStair(1,h)):s==="boss"?(u.put({kind:"chest",chestTier:"grand",x:d.x+1,y:d.y+1}),u.put({kind:"chest",chestTier:"grand",x:d.x+d.width-2,y:d.y+d.height-2})):(u.guardStair(fe.randInt(o.exitRoom.guards[0],o.exitRoom.guards[1]),h),u.placeCornerChests(fe.randInt(o.exitRoom.chests[0],o.exitRoom.chests[1]))),u.placePotions(fe.randInt(o.exitRoom.potions[0],o.exitRoom.potions[1]));break}case"rest":if(s==="normal"&&u.freeAt(d.centerX,d.centerY)){const p=P.potions.potions.filter(v=>i>=v.minFloor&&i<=v.maxFloor).sort((v,m)=>m.healPct-v.healPct)[0];p&&u.put({kind:"potion",potionTier:p.tier,x:d.centerX,y:d.centerY})}break;case"merchant":{u.put({kind:"npc",npcId:"npc_merchant",x:d.centerX,y:d.centerY}),u.placePotions(fe.randInt(o.merchantRoom.potions[0],o.merchantRoom.potions[1])),u.placeCornerChests(fe.randInt(o.merchantRoom.chests[0],o.merchantRoom.chests[1]));break}case"blacksmith":{u.put({kind:"npc",npcId:"npc_blacksmith",x:d.centerX,y:d.centerY});break}case"witch":{u.placeWitchRoom(fe.randInt(o.witchRoom.shelves[0],o.witchRoom.shelves[1]));break}case"chest":{const p=u.placeCornerChests(fe.randInt(o.treasureRoom.chests[0],o.treasureRoom.chests[1]),!0),v=this.densityCap(d);let m=Math.min(fe.randInt(o.treasureRoom.monsters[0],o.treasureRoom.monsters[1]),v-u.monsterCount()),g=p.filter(_=>!u.monsterNear(_.x,_.y,2));for(;m>0&&g.length>0&&u.placeGuardCovering(g,h,2);)m--,g=p.filter(_=>!u.monsterNear(_.x,_.y,2));u.placePotions(fe.randInt(o.treasureRoom.potions[0],o.treasureRoom.potions[1]));break}case"combat":{const p=u.bandFor(o.combatByDepth),v=this.densityCap(d),m=Math.max(1,Math.min(fe.randInt(p.monsters[0],p.monsters[1]),v-1)),g=d.width-2>=8,_=d.height-2>=7,S=[{id:"barrier",weight:4},{id:"double",weight:g?2:0},{id:"arena",weight:g&&_?2:0},{id:"scattered",weight:2}],y=fe.pickWeighted(S,R=>R.weight).id;d.layout=y;let E=0;if(y==="double"){const R=Math.max(1,Math.floor(m/2));E=u.blockPath(R,h,!1,.32)+u.blockPath(m-R,h,!1,.68)}else y==="arena"?u.placeArenaPillars()&&(E=u.guardAround(d.centerX,d.centerY,m,h,!1,2)):y==="barrier"?E=u.blockPath(m,h,!1):E=u.placeMonsters(m,!1,h);E===0&&u.placeMonsters(m,!1,h);const T=Math.min(fe.randInt(p.elites[0],p.elites[1]),Math.max(0,v-u.monsterCount()));T>0&&u.placeMonsters(T,!0,h),u.placeCornerChests(fe.randInt(p.chests[0],p.chests[1])),u.placePotions(fe.randInt(p.potions[0],p.potions[1]));break}case"elite":{const p=d.width-2>=9,v=d.height-2>=7,m=[{id:"barrier",weight:3},{id:"throne",weight:v?3:0},{id:"arena",weight:p&&v?2:0}],g=fe.pickWeighted(m,M=>M.weight).id;d.layout=`elite_${g}`;const _=u.mainPath(),S=_[_.length-1]??{x:d.centerX,y:d.centerY},y=u.pickMonsterId(h);g==="throne"&&y?u.placeMonsterAt(y,!0,S)||u.placeMonsterAt(y,!0,{x:S.x,y:S.y-1})||u.placeMonsterAt(y,!0,{x:S.x,y:S.y+1})||u.placeMonsterAt(y,!0,{x:S.x-1,y:S.y})||u.blockPath(1,h,!0):g==="arena"&&y?(!u.placeArenaPillars()||!u.placeMonsterAt(y,!0,{x:d.centerX,y:d.centerY}))&&u.placeMonsters(1,!0,h):u.blockPath(1,h,!0)===0&&u.placeMonsters(1,!0,h);const E=fe.randInt(o.eliteRoom.monsters[0],o.eliteRoom.monsters[1]);if(g==="throne"){const M=u.pickMonsterId(h);let C=0;if(M)for(const L of[-1,1]){if(C>=E)break;(u.placeMonsterAt(M,!1,{x:S.x+L,y:S.y})||u.placeMonsterAt(M,!1,{x:S.x,y:S.y+L}))&&C++}C<E&&u.placeMonsters(E-C,!1,h)}else u.placeMonsters(E,!1,h);const T=u.placeCornerChests(fe.randInt(o.eliteRoom.chests[0],o.eliteRoom.chests[1]),!0),R=this.densityCap(d);for(const M of T){if(u.monsterCount()>=R)break;u.guardAround(M.x,M.y,1,h,!1,1)}u.placePotions(fe.randInt(o.eliteRoom.potions[0],o.eliteRoom.potions[1]));break}case"boss":{const p=["standard"];i>=15&&p.push("arena"),i>=20&&p.push("gauntlet");let v=fe.pick(p);const m=d.centerX,g=d.centerY;if(v==="arena")if(!u.placeArenaPillars())v="standard";else{u.put({kind:"carpet",x:m,y:g}),u.bossAt("ancient_dragon",{x:m,y:g});const _=u.pickMonsterId(h);if(_){const S=[[{x:m-1,y:g-1},{x:m-2,y:g-1},{x:m-2,y:g+1}],[{x:m+1,y:g+1},{x:m+2,y:g+1},{x:m+2,y:g-1}]];let y=0;for(const E of S)for(const T of E)if(u.placeMonsterAt(_,!1,T)){y++;break}y<2&&u.placeMonsters(2-y,!1,h)}}if(v==="gauntlet"){const _=u.mainPath(),S=_[Math.max(0,_.length-2)]??{x:m,y:g},y=u.pickMonsterId(h);y&&(u.placeMonsterAt(y,!1,_[1]??{x:m,y:g}),u.placeMonsterAt(y,!1,_[2]??{x:m,y:g})),u.put({kind:"carpet",x:S.x,y:S.y}),u.bossAt("ancient_dragon",S),v="gauntlet_done"}v==="standard"&&(u.put({kind:"carpet",x:m,y:g}),u.bossAt("ancient_dragon",{x:m,y:g}),u.guardAround(m,g,fe.randInt(o.bossRoom.elites[0],o.bossRoom.elites[1]),h,!0,2)),d.layout=`boss_${v==="gauntlet_done"?"gauntlet":v}`,u.placeCornerChests(fe.randInt(o.bossRoom.chests[0],o.bossRoom.chests[1])),u.placePotions(fe.randInt(o.bossRoom.potions[0],o.bossRoom.potions[1]));break}}if(u.placeRoomTorches(),d.type!=="witch"&&u.placePillars(),!(d.type==="end"&&(s==="initial"||s==="boss"))){const p=u.validate(d.type,h,this.densityCap(d));p.length>0&&console.warn(`[ContentFiller] 房间 ${d.id}(${d.type}) 内容验证未通过：${p.join("、")}`)}}for(const d of r)this.fillHiddenRoom(d,n,i);this.convergeFloorStats([...e,...r],i);const f=P.mapGen.decor.torchCorridorEvery;for(const d of t)d.tiles.forEach((u,p)=>{if(p%f!==Math.floor(f/2))return;const v=n[u.y-1]?.[u.x]===1?{x:u.x,y:u.y-1}:n[u.y+1]?.[u.x]===1?{x:u.x,y:u.y+1}:null;v&&!this.entityAt(e,v.x,v.y)&&e.find(g=>g.id===d.fromRoomId)?.entities.push({id:$t.next("ent"),kind:"torch",x:v.x,y:v.y})})}densityCap(e){const t=P.mapGen.content,n=(e.width-2)*(e.height-2);return n<=t.smallAreaMax?t.density.small:n<=t.mediumAreaMax?t.density.medium:t.density.large}fillHiddenRoom(e,t,n){const i=new Pc(e,t,n),s=P.monsters.monsters.filter(u=>u.category==="normal"),r=s.filter(u=>n>=u.floorMin&&n<=u.floorMax),o=(r.length>0?r:s).map(u=>({id:u.id,weight:u.weight})),l=i.pickMonsterId(o),c=e.hiddenEntrance,h=[{x:e.x+1,y:e.y+1},{x:e.x+e.width-2,y:e.y+1},{x:e.x+1,y:e.y+e.height-2},{x:e.x+e.width-2,y:e.y+e.height-2}].sort((u,p)=>c?Math.abs(p.x-c.x)+Math.abs(p.y-c.y)-(Math.abs(u.x-c.x)+Math.abs(u.y-c.y)):0),f=h.find(u=>i.freeAt(u.x,u.y))??h[0];if(i.put({kind:"chest",chestTier:"grand",x:f.x,y:f.y}),l){const u=[{x:f.x,y:f.y+1},{x:f.x+1,y:f.y},{x:f.x,y:f.y-1},{x:f.x-1,y:f.y},{x:e.centerX,y:e.centerY}];for(const p of u)if(i.placeMonsterUnchecked(l,!0,p))break}let d=0;for(const u of[{x:e.x+1,y:e.y},{x:e.x+e.width-2,y:e.y+e.height-1}]){if(d>=2)break;t[u.y]?.[u.x]===1&&!e.entities.some(p=>p.x===u.x&&p.y===u.y)&&(i.put({kind:"torch",x:u.x,y:u.y}),d++)}}convergeFloorStats(e,t){const n=e.flatMap(c=>c.entities.filter(h=>h.kind==="monster"&&h.stats)).map(c=>c);if(n.length===0)return;const i=["hp","attack","defense"],s=(c,h,f)=>{c.stats[h]>f&&(c.stats[h]=Math.max(1,Math.floor(f)))},r=n.filter(c=>!c.isElite),o=r.length>0?r:n;for(const c of i){const h=Math.min(...o.map(f=>f.stats[c]));for(const f of r)s(f,c,h*1.4)}const l=tn.getInstance();for(const c of n.filter(h=>h.isElite)){const h=P.getMonster(c.monsterId??"");if(!h)continue;const f=l.monsterStats(h,t,!1,1);for(const d of i)s(c,d,f[d]*1.5)}for(const c of i){const h=Math.min(...n.map(f=>f.stats[c]));for(const f of n)s(f,c,h*1.8)}}entityAt(e,t,n){return e.some(i=>i.entities.some(s=>s.x===t&&s.y===n))}};w(Wi,"instance");let Yo=Wi;const yf=500,qi=class qi{constructor(){}static getInstance(){return qi.instance||(qi.instance=new qi),qi.instance}validate(e,t,n){const i=[],s=this.buildAdjacency(e,t),r=e[0],o=e[e.length-1],l=this.bfs(r.id,s);for(const h of e)(s.get(h.id)??[]).length===0&&i.push(`房间${h.id}无连接（孤立）`),l.has(h.id)||i.push(`房间${h.id}不可从起点到达`);let c=[];if(n){if(c=this.enumeratePaths(r.id,o.id,s),c.length<2)i.push(`起点到终点仅${c.length}条路径（要求≥2）`);else{let f=!1;for(let d=0;d<c.length&&!f;d++)for(let u=d+1;u<c.length&&!f;u++)Math.abs(c[d]-c[u])<=P.mapGen.path.maxLengthDiff&&(f=!0);f||i.push(`路径长度差均>${P.mapGen.path.maxLengthDiff}：[${c.join(",")}]`)}e.some(f=>(f.onPathA||f.onPathB)&&(f.type==="combat"||f.type==="elite"))||i.push("主干上没有战斗房间")}return{pass:i.length===0,errors:i,pathLengths:c}}bfs(e,t){const n=new Map([[e,0]]),i=[e];for(;i.length>0;){const s=i.shift(),r=n.get(s);for(const o of t.get(s)??[])n.has(o)||(n.set(o,r+1),i.push(o))}return n}enumeratePaths(e,t,n){const i=[],s=new Set([e]),r=(o,l)=>{if(o===t)return i.push(l),i.length>=yf;for(const c of n.get(o)??[]){if(s.has(c))continue;s.add(c);const h=r(c,l+1);if(s.delete(c),h)return!0}return!1};return r(e,1),i}buildAdjacency(e,t){const n=new Map(e.map(i=>[i.id,[]]));for(const i of t)n.get(i.from)?.push(i.to),n.get(i.to)?.push(i.from);return n}};w(qi,"instance");let $o=qi;const Xi=class Xi{constructor(){w(this,"lastAttempts",1)}static getInstance(){return Xi.instance||(Xi.instance=new Xi),Xi.instance}generate(e){const t=P.mapGen.generation.maxAttempts;let n=[];for(let i=1;i<=t;i++){try{const s=this.tryGenerate(e);if(s)return this.lastAttempts=i,s}catch(s){n=[String(s)]}(i===5||i===20)&&Pt.warn(`[MapGen] 楼层${e} 第${i}次尝试失败：${n.join("; ")||"拓扑验证未通过"}`)}throw new Error(`楼层${e}生成失败（${t}次尝试）：${n.join("; ")}`)}tryGenerate(e){const t=Vo.getInstance(),n=Wo.getInstance(),i=qo.getInstance(),s=Xo.getInstance(),r=Yo.getInstance(),o=$o.getInstance(),l=t.allocate(e),c=n.plan(l);if(!n.validateDiff(c))return null;const h=i.place(e,c);if(!h)return null;const f=h.rooms,d=h.grid,u=s.connect(f,d),p=u.connections,v=new Map(f.map(y=>[y.id,[]]));for(const y of p)v.get(y.from)?.push(y.to),v.get(y.to)?.push(y.from);const m=o.bfs(f[0].id,v);for(const y of f)y.depth=m.get(y.id)??0;const g=o.validate(f,p,l.kind==="normal");if(!g.pass){if(l.kind==="normal")return null;throw new Error(`特殊层校验失败: ${g.errors.join("; ")}`)}const _=l.kind==="normal"?s.spawnHiddenRooms(f,u.corridors,d,e):[];r.fill(f,u.corridors,d,e,l.kind,_);const S=f[0];return{floorId:e,kind:l.kind,rooms:f,hiddenRooms:_,corridors:u.corridors,connections:p,grid:d,width:d[0].length,height:d.length,entryX:S.centerX,entryY:S.centerY}}describe(e){const t=[];t.push(`=== 楼层 ${e.floorId}（${e.kind}） ${e.rooms.length}个房间 ${e.corridors.length}条走廊 ===`);for(const n of this.roomsSorted(e)){const i=n.onPathA?"A":n.onPathB?"B":n.mountedOn?"侧室":"-";t.push(`#${n.order} ${n.type.padEnd(8,"　")} 网格(${n.gx},${n.gy}) 世界(${n.x},${n.y}) ${n.width}x${n.height} 深${n.depth} 路径${i} 来源${n.fromDirection??"根"} 门${n.doors.length} 实体${n.entities.length}`)}return t.push(`入口: (${e.entryX},${e.entryY}) 路径数: 见验证器`),t.join(`
`)}roomsSorted(e){return[...e.rooms].sort((t,n)=>t.order-n.order)}};w(Xi,"instance");let tr=Xi;const xa=5,Yi=class Yi{constructor(){w(this,"pregen",new Map);w(this,"topUpTimer",null)}static getInstance(){return Yi.instance||(Yi.instance=new Yi),Yi.instance}enterFloor(e,t=!0){const n=Math.min(e,xs),i=ge.getInstance(),s=i.state.currentFloor,r=this.pregen.get(n),o=r??tr.getInstance().generate(n);r&&this.pregen.delete(n),Be.getInstance().loadFloor(o),i.state.currentFloor=n,i.state.x=o.entryX,i.state.y=o.entryY;const l=Be.getInstance().getRoomAt(o.entryX,o.entryY);return i.state.currentRoomId=l?.id??o.rooms[0].id,q.emit("floorChanged",{fromFloor:s,toFloor:n}),t||Pt.debug(`[Floor] 直接载入楼层${n}`),this.scheduleTopUp(n+1),o}restoreFloor(e){const t=ge.getInstance();Be.getInstance().loadFloor(e),t.state.currentFloor=e.floorId;const n=Be.getInstance().getRoomAt(t.state.x,t.state.y);t.state.currentRoomId=n?.id??e.rooms[0].id}pregenerateOne(e){this.pregen.has(e)||this.pregen.set(e,tr.getInstance().generate(e))}clearPregen(){this.pregen.clear(),this.topUpTimer!==null&&(window.clearTimeout(this.topUpTimer),this.topUpTimer=null)}scheduleTopUp(e){this.topUpTimer!==null&&window.clearTimeout(this.topUpTimer);let t=e;const n=()=>{t<e+xa&&t<=xs?(this.pregenerateOne(t++),this.topUpTimer=window.setTimeout(n,30)):this.topUpTimer=null};this.topUpTimer=window.setTimeout(n,60)}enterPrefabFloor(e){const t=ge.getInstance(),n=t.state.currentFloor;Be.getInstance().loadFloor(e),t.state.currentFloor=e.floorId,t.state.x=e.entryX,t.state.y=e.entryY;const i=Be.getInstance().getRoomAt(e.entryX,e.entryY);return t.state.currentRoomId=i?.id??e.rooms[0].id,q.emit("floorChanged",{fromFloor:n,toFloor:e.floorId}),Pt.debug(`[Floor] 载入预制楼层${e.floorId}`),e}};w(Yi,"instance");let On=Yi;const Ic={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6},$i=class $i{constructor(){}static getInstance(){return $i.instance||($i.instance=new $i),$i.instance}rollQuality(e){const t=P.equipment.qualityByFloor,n=t.find(s=>e>=s.minFloor&&e<=s.maxFloor)??t[t.length-1],i=Object.entries(n.weights);return fe.pickWeighted(i,([,s])=>s)[0]}rollEquipLevel(e,t){const n=P.equipment.equipLevelFormula,i=Math.floor(e*n.playerLevelFactor+t*n.floorFactor+fe.randInt(n.randomMin,n.randomMax));return Math.max(n.min,Math.min(n.max,i))}generate(e,t={}){const n=ge.getInstance(),i=t.floorId??n.state.currentFloor;let s=t.forcedQuality??this.rollQuality(i);!t.forcedQuality&&t.depth!==void 0&&t.depth>1&&(s=this.applyDepthQualityFloor(s,t.depth));const r=t.slot??(fe.chance(.5)?"weapon":"armor"),o=this.rollEquipLevel(n.state.level,i),l=this.rollBaseValue(r,s,o),c=r==="weapon"?l:0,h=r==="armor"?l:0,f=this.rollAffixes(s,o),d=P.equipment.quality[s],u=this.baseName(r,o),p=this.buildName(d.prefix,u,f),v=Math.round(d.basePrice*(1+o*.05)*(1+f.length*.15)),m=P.equipment.buyPriceRule,g=Math.max(m.min,Math.min(m.max,Math.round(v*m.sellMultiplier)));return{id:$t.equipmentId(),slot:r,baseName:u,name:p,level:o,quality:s,affixes:f,attack:c,defense:h,sellPrice:v,buyPrice:g,source:e}}tutorialWeapon(){return this.generate("tutorial",{forcedQuality:"poor",slot:"weapon",floorId:1})}applyDepthQualityFloor(e,t){const n=P.equipment.qualityOrder,i=n.indexOf("epic"),s=Math.min(Math.floor((t-1)/2),i);return n[Math.max(n.indexOf(e),s)]}reforge(e){return this.rebuild(e,{affixes:this.rollAffixes(e.quality,e.level)})}upgradeLevel(e){if(e.level>=50)return null;const t=e.level+1;return this.rebuild(e,{level:t,value:this.rollBaseValue(e.slot,e.quality,t),affixes:this.rollAffixes(e.quality,t)})}upgradeQuality(e){const t=P.equipment.qualityOrder,n=t.indexOf(e.quality),i=t[n+1];return!i||n+1>t.indexOf("epic")?null:this.rebuild(e,{quality:i,value:this.rollBaseValue(e.slot,i,e.level),affixes:this.rollAffixes(i,e.level)})}rebuild(e,t){const n=t.quality??e.quality,i=t.level??e.level,s=t.value??(e.slot==="weapon"?e.attack:e.defense),r=t.affixes??e.affixes,o=P.equipment.quality[n],l=this.buildName(o.prefix,e.baseName,r),c=Math.round(o.basePrice*(1+i*.05)*(1+r.length*.15)),h=P.equipment.buyPriceRule,f=Math.max(h.min,Math.min(h.max,Math.round(c*h.sellMultiplier)));return{...e,name:l,level:i,quality:n,affixes:r,attack:e.slot==="weapon"?s:0,defense:e.slot==="armor"?s:0,sellPrice:c,buyPrice:f}}rollBaseValue(e,t,n){const i=e==="weapon"?P.equipment.weaponTable:P.equipment.armorTable,r=(i.find(h=>n>=h.minEquipLevel&&n<=h.maxEquipLevel)??i[i.length-1]).values;let o=r[t]??null;if(!o&&t==="mythic"){const h=r.legendary;if(h){const f=P.equipment.mythicFromLegendary;o=[Math.round(h[0]*f),Math.round(h[1]*f)]}}const l=P.equipment.qualityOrder;let c=l.indexOf(t);for(;!o&&c>0;)c-=1,o=r[l[c]]??null;return o||(o=[1,2]),fe.randInt(o[0],o[1])}rollAffixes(e,t){const n=P.equipment.quality[e];let i=n.affixCount;if(n.affixExtra)for(const o of n.affixExtra)t>=o.atEquipLevel&&(i+=o.add);i=Math.min(i,n.affixCountMax),e==="mythic"&&(i=P.equipment.affixSpecial.mythicAffixCount);const s=P.equipment.affixes.filter(o=>Ic[e]>=Ic[o.minQuality]);return s.length===0?[]:fe.shuffle(s).slice(0,i).map(o=>{const l=o.bands.find(h=>t<=h.maxEquipLevel)??o.bands[o.bands.length-1],c=fe.randInt(l.min,l.max);return{type:o.type,name:o.name,value:c,isPercent:o.isPercent}})}baseName(e,t){const n=e==="weapon"?P.equipment.baseNames.weapon:P.equipment.baseNames.armor;return(n.find(s=>t>=s.minEquipLevel&&t<=s.maxEquipLevel)??n[n.length-1]).names[0]}buildName(e,t,n){let i=e?`${e}${t}`:t;for(const s of n)i+=`·${s.name}`;return i}};w($i,"instance");let Gn=$i;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="185",Mf=0,Lc=1,bf=2,ya=1,_f=2,Js=3,Si=0,nn=1,Dn=2,kn=0,Qs=1,ln=2,Dc=3,Fc=4,Sf=5,Li=100,wf=101,Ef=102,Tf=103,Af=104,Cf=200,Rf=201,Pf=202,If=203,Ko=204,Zo=205,Lf=206,Df=207,Ff=208,Uf=209,Nf=210,Of=211,kf=212,Bf=213,zf=214,Jo=0,Qo=1,jo=2,nr=3,el=4,tl=5,nl=6,il=7,nd=0,Gf=1,Hf=2,Bn=0,$l=1,Kl=2,Zl=3,Ga=4,Jl=5,Ql=6,jl=7,id=300,ys=301,ir=302,Ja=303,Qa=304,Ha=306,Hn=1e3,ti=1001,sl=1002,ft=1003,Vf=1004,Ur=1005,Ut=1006,ja=1007,Un=1008,dn=1009,sd=1010,rd=1011,Tr=1012,ec=1013,Vn=1014,Sn=1015,Wt=1016,tc=1017,nc=1018,Ar=1020,ad=35902,od=35899,ld=1021,cd=1022,wn=1023,ii=1026,gs=1027,ic=1028,sc=1029,Ms=1030,rc=1031,ac=1033,Ma=33776,ba=33777,_a=33778,Sa=33779,rl=35840,al=35841,ol=35842,ll=35843,cl=36196,hl=37492,dl=37496,ul=37488,fl=37489,Ca=37490,pl=37491,ml=37808,gl=37809,vl=37810,xl=37811,yl=37812,Ml=37813,bl=37814,_l=37815,Sl=37816,wl=37817,El=37818,Tl=37819,Al=37820,Cl=37821,Rl=36492,Pl=36494,Il=36495,Ll=36283,Dl=36284,Ra=36285,Fl=36286,Wf=3200,Ul=0,qf=1,yi="",Mt="srgb",Pa="srgb-linear",Ia="linear",nt="srgb",Ps=7680,Uc=519,Xf=512,Yf=513,$f=514,oc=515,Kf=516,Zf=517,lc=518,Jf=519,Nl=35044,Nc="300 es",Nn=2e3,Cr=2001;function Qf(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function La(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function jf(){const a=La("canvas");return a.style.display="block",a}const Oc={};function Da(...a){const e="THREE."+a.shift();console.log(e,...a)}function hd(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Ne(...a){a=hd(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ye(...a){a=hd(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function js(...a){const e=a.join(" ");e in Oc||(Oc[e]=!0,Ne(...a))}function ep(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const tp={[Jo]:Qo,[jo]:nl,[el]:il,[nr]:tl,[Qo]:Jo,[nl]:jo,[il]:el,[tl]:nr};class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eo=Math.PI/180,Ol=180/Math.PI;function bi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[a&255]+Gt[a>>8&255]+Gt[a>>16&255]+Gt[a>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function $e(a,e,t){return Math.max(e,Math.min(t,a))}function np(a,e){return(a%e+e)%e}function to(a,e,t){return(1-t)*a+t*e}function Fn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const mc=class mc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;let Ee=mc;class lr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=s[r+0],u=s[r+1],p=s[r+2],v=s[r+3];if(f!==v||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*v;m<0&&(d=-d,u=-u,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){const _=Math.acos(m),S=Math.sin(_);g=Math.sin(g*_)/S,o=Math.sin(o*_)/S,l=l*g+d*o,c=c*g+u*o,h=h*g+p*o,f=f*g+v*o}else{l=l*g+d*o,c=c*g+u*o,h=h*g+p*o,f=f*g+v*o;const _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[r],d=s[r+1],u=s[r+2],p=s[r+3];return e[t]=o*p+h*f+l*u-c*d,e[t+1]=l*p+h*d+c*f-o*u,e[t+2]=c*p+h*u+o*d-l*f,e[t+3]=h*p-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(s/2),d=l(n/2),u=l(i/2),p=l(s/2);switch(r){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(r-i)*u}else if(n>o&&n>f){const u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(s+c)/u}else if(o>f){const u=2*Math.sqrt(1+o-n-f);this._w=(s-c)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-o);this._w=(r-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gc=class gc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-s*i),f=2*(s*n-r*t);return this.x=t+l*c+r*f-o*h,this.y=n+l*h+o*c-s*f,this.z=i+l*f+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return no.copy(this).projectOnVector(e),this.sub(no)}reflect(e){return this.sub(no.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;let U=gc;const no=new U,kc=new lr,vc=class vc{constructor(e,t,n,i,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c)}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],v=i[0],m=i[3],g=i[6],_=i[1],S=i[4],y=i[7],E=i[2],T=i[5],R=i[8];return s[0]=r*v+o*_+l*E,s[3]=r*m+o*S+l*T,s[6]=r*g+o*y+l*R,s[1]=c*v+h*_+f*E,s[4]=c*m+h*S+f*T,s[7]=c*g+h*y+f*R,s[2]=d*v+u*_+p*E,s[5]=d*m+u*S+p*T,s[8]=d*g+u*y+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*r-o*c,d=o*l-h*s,u=c*s-r*l,p=t*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*r)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(io.makeScale(e,t)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(io.makeRotation(-e)),this}translate(e,t){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;let ke=vc;const io=new ke,Bc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ip(){const a={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===nt&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===nt&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Ia:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Pa]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Bc,fromXYZ:zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Bc,fromXYZ:zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),a}const Xe=ip();function ni(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function er(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Is;class sp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=La("canvas")),Is.width=e.width,Is.height=e.height;const i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ni(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rp=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(so(i[r].image)):s.push(so(i[r]))}else s=so(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function so(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?sp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let ap=0;const ro=new U;class Nt extends ws{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=ti,i=ti,s=Ut,r=Un,o=wn,l=dn,c=Nt.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=bi(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=id;Nt.DEFAULT_ANISOTROPY=1;const xc=class xc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(u+1)/2,E=(g+1)/2,T=(h+d)/4,R=(f+v)/4,M=(p+m)/4;return S>y&&S>E?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=R/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=M/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=M/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(f-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xc.prototype.isVector4=!0;let mt=xc;class op extends ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Nt(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new cc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ot extends op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dd extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const za=class za{constructor(e,t,n,i,s,r,o,l,c,h,f,d,u,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c,h,f,d,u,p,v,m)}set(e,t,n,i,s,r,o,l,c,h,f,d,u,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),r=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=r*h,u=r*f,p=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+u*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,u=l*f,p=c*h,v=c*f;t[0]=d+v*o,t[4]=p*o-u,t[8]=r*c,t[1]=r*f,t[5]=r*h,t[9]=-o,t[2]=u*o-p,t[6]=v+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,u=l*f,p=c*h,v=c*f;t[0]=d-v*o,t[4]=-r*f,t[8]=p+u*o,t[1]=u+p*o,t[5]=r*h,t[9]=v-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,u=r*f,p=o*h,v=o*f;t[0]=l*h,t[4]=p*c-u,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=u*c-p,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,u=r*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*f,t[8]=p*f+u,t[1]=f,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+p,t[10]=d-v*f}else if(e.order==="XZY"){const d=r*l,u=r*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+v,t[5]=r*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=o*h,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cp,e,hp)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),li.crossVectors(n,rn),li.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),li.crossVectors(n,rn)),li.normalize(),Nr.crossVectors(rn,li),i[0]=li.x,i[4]=Nr.x,i[8]=rn.x,i[1]=li.y,i[5]=Nr.y,i[9]=rn.y,i[2]=li.z,i[6]=Nr.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],v=n[6],m=n[10],g=n[14],_=n[3],S=n[7],y=n[11],E=n[15],T=i[0],R=i[4],M=i[8],C=i[12],L=i[1],I=i[5],O=i[9],$=i[13],Q=i[2],B=i[6],K=i[10],V=i[14],ee=i[3],ne=i[7],pe=i[11],ye=i[15];return s[0]=r*T+o*L+l*Q+c*ee,s[4]=r*R+o*I+l*B+c*ne,s[8]=r*M+o*O+l*K+c*pe,s[12]=r*C+o*$+l*V+c*ye,s[1]=h*T+f*L+d*Q+u*ee,s[5]=h*R+f*I+d*B+u*ne,s[9]=h*M+f*O+d*K+u*pe,s[13]=h*C+f*$+d*V+u*ye,s[2]=p*T+v*L+m*Q+g*ee,s[6]=p*R+v*I+m*B+g*ne,s[10]=p*M+v*O+m*K+g*pe,s[14]=p*C+v*$+m*V+g*ye,s[3]=_*T+S*L+y*Q+E*ee,s[7]=_*R+S*I+y*B+E*ne,s[11]=_*M+S*O+y*K+E*pe,s[15]=_*C+S*$+y*V+E*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],v=e[7],m=e[11],g=e[15],_=l*u-c*d,S=o*u-c*f,y=o*d-l*f,E=r*u-c*h,T=r*d-l*h,R=r*f-o*h;return t*(v*_-m*S+g*y)-n*(p*_-m*E+g*T)+i*(p*S-v*E+g*R)-s*(p*y-v*T+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(s*h-o*l)+i*(s*c-r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],v=e[13],m=e[14],g=e[15],_=t*o-n*r,S=t*l-i*r,y=t*c-s*r,E=n*l-i*o,T=n*c-s*o,R=i*c-s*l,M=h*v-f*p,C=h*m-d*p,L=h*g-u*p,I=f*m-d*v,O=f*g-u*v,$=d*g-u*m,Q=_*$-S*O+y*I+E*L-T*C+R*M;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Q;return e[0]=(o*$-l*O+c*I)*B,e[1]=(i*O-n*$-s*I)*B,e[2]=(v*R-m*T+g*E)*B,e[3]=(d*T-f*R-u*E)*B,e[4]=(l*L-r*$-c*C)*B,e[5]=(t*$-i*L+s*C)*B,e[6]=(m*y-p*R-g*S)*B,e[7]=(h*R-d*y+u*S)*B,e[8]=(r*O-o*L+c*M)*B,e[9]=(n*L-t*O-s*M)*B,e[10]=(p*T-v*y+g*_)*B,e[11]=(f*y-h*T-u*_)*B,e[12]=(o*C-r*I-l*M)*B,e[13]=(t*I-n*C+i*M)*B,e[14]=(v*S-p*E-m*_)*B,e[15]=(h*E-f*S+d*_)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,f=o+o,d=s*c,u=s*h,p=s*f,v=r*h,m=r*f,g=o*f,_=l*c,S=l*h,y=l*f,E=n.x,T=n.y,R=n.z;return i[0]=(1-(v+g))*E,i[1]=(u+y)*E,i[2]=(p-S)*E,i[3]=0,i[4]=(u-y)*T,i[5]=(1-(d+g))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(p+S)*R,i[9]=(m-_)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Ls.set(i[0],i[1],i[2]).length();const o=Ls.set(i[4],i[5],i[6]).length(),l=Ls.set(i[8],i[9],i[10]).length();s<0&&(r=-r),yn.copy(this);const c=1/r,h=1/o,f=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,r,o=Nn,l=!1){const c=this.elements,h=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let p,v;if(l)p=s/(r-s),v=r*s/(r-s);else if(o===Nn)p=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Cr)p=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Nn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i);let p,v;if(l)p=1/(r-s),v=r/(r-s);else if(o===Nn)p=-2/(r-s),v=-(r+s)/(r-s);else if(o===Cr)p=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};za.prototype.isMatrix4=!0;let at=za;const Ls=new U,yn=new at,cp=new U(0,0,0),hp=new U(1,1,1),li=new U,Nr=new U,rn=new U,Gc=new at,Hc=new lr;class wi{constructor(e=0,t=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-$e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dp=0;const Vc=new U,Ds=new lr,qn=new at,Or=new U,dr=new U,up=new U,fp=new lr,Wc=new U(1,0,0),qc=new U(0,1,0),Xc=new U(0,0,1),Yc={type:"added"},pp={type:"removed"},Fs={type:"childadded",child:null},ao={type:"childremoved",child:null};class pt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new U,t=new wi,n=new lr,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(dr,Or,this.up):qn.lookAt(Or,dr,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(qn),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),f=r(e.shapes),d=r(e.skeletons),u=r(e.animations),p=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new U(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class At extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mp={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},kr={h:0,s:0,l:0};function lo(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=np(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=lo(r,s,e+1/3),this.g=lo(r,s,e),this.b=lo(r,s,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Xe.workingToColorSpace(Ht.copy(this),e),Math.round($e(Ht.r*255,0,255))*65536+Math.round($e(Ht.g*255,0,255))*256+Math.round($e(Ht.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=h<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Mt){Xe.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(kr);const n=to(ci.h,kr.h,t),i=to(ci.s,kr.s,t),s=to(ci.l,kr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Le;Le.NAMES=ud;class gp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mn=new U,Xn=new U,co=new U,Yn=new U,Us=new U,Ns=new U,$c=new U,ho=new U,uo=new U,fo=new U,po=new mt,mo=new mt,go=new mt;class xn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),Xn.subVectors(n,t),co.subVectors(e,t);const r=Mn.dot(Mn),o=Mn.dot(Xn),l=Mn.dot(co),c=Xn.dot(Xn),h=Xn.dot(co),f=r*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,u=(c*l-o*h)*d,p=(r*h-o*l)*d;return s.set(1-u-p,p,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return po.setScalar(0),mo.setScalar(0),go.setScalar(0),po.fromBufferAttribute(e,t),mo.fromBufferAttribute(e,n),go.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(po,s.x),r.addScaledVector(mo,s.y),r.addScaledVector(go,s.z),r}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Xn.subVectors(e,t),Mn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Mn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Us.subVectors(i,n),Ns.subVectors(s,n),ho.subVectors(e,n);const l=Us.dot(ho),c=Ns.dot(ho);if(l<=0&&c<=0)return t.copy(n);uo.subVectors(e,i);const h=Us.dot(uo),f=Ns.dot(uo);if(h>=0&&f<=h)return t.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Us,r);fo.subVectors(e,s);const u=Us.dot(fo),p=Ns.dot(fo);if(p>=0&&u<=p)return t.copy(s);const v=u*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ns,o);const m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return $c.subVectors(s,i),o=(f-h)/(f-h+(u-p)),t.copy(i).addScaledVector($c,o);const g=1/(m+v+d);return r=v*g,o=d*g,t.copy(n).addScaledVector(Us,r).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Es{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,bn):bn.fromBufferAttribute(s,r),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),zr.subVectors(this.max,ur),Os.subVectors(e.a,ur),ks.subVectors(e.b,ur),Bs.subVectors(e.c,ur),hi.subVectors(ks,Os),di.subVectors(Bs,ks),Ci.subVectors(Os,Bs);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!vo(t,Os,ks,Bs,zr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Os,ks,Bs,zr))?!1:(Gr.crossVectors(hi,di),t=[Gr.x,Gr.y,Gr.z],vo(t,Os,ks,Bs,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new U,new U,new U,new U,new U,new U,new U,new U],bn=new U,Br=new Es,Os=new U,ks=new U,Bs=new U,hi=new U,di=new U,Ci=new U,ur=new U,zr=new U,Gr=new U,Ri=new U;function vo(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Ri.fromArray(a,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tt=new U,Hr=new Ee;let vp=0;class Kt extends ws{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fd extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const xp=new Es,fr=new U,xo=new U;class cr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(xo)),this.expandByPoint(fr.copy(e.center).sub(xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yp=0;const pn=new at,yo=new pt,zs=new U,an=new Es,pr=new Es,Ft=new U;class kt extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?pd:fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return yo.lookAt(e),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(an.min,pr.min),an.expandByPoint(Ft),Ft.addVectors(an.max,pr.max),an.expandByPoint(Ft)):(an.expandByPoint(pr.min),an.expandByPoint(pr.max))}an.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(e,c),Ft.add(zs)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new U,l[M]=new U;const c=new U,h=new U,f=new U,d=new Ee,u=new Ee,p=new Ee,v=new U,m=new U;function g(M,C,L){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,L),d.fromBufferAttribute(s,M),u.fromBufferAttribute(s,C),p.fromBufferAttribute(s,L),h.sub(c),f.sub(c),u.sub(d),p.sub(d);const I=1/(u.x*p.y-p.x*u.y);isFinite(I)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(I),o[M].add(v),o[C].add(v),o[L].add(v),l[M].add(m),l[C].add(m),l[L].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,C=_.length;M<C;++M){const L=_[M],I=L.start,O=L.count;for(let $=I,Q=I+O;$<Q;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const S=new U,y=new U,E=new U,T=new U;function R(M){E.fromBufferAttribute(i,M),T.copy(E);const C=o[M];S.copy(C),S.sub(E.multiplyScalar(E.dot(C))).normalize(),y.crossVectors(T,C);const I=y.dot(l[M])<0?-1:1;r.setXYZW(M,S.x,S.y,S.z,I)}for(let M=0,C=_.length;M<C;++M){const L=_[M],I=L.start,O=L.count;for(let $=I,Q=I+O;$<Q;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,r=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let d=0,u=e.count;d<u;d+=3){const p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let u=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new Kt(d,h,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new U;class Fa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let bp=0;class Ts extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Qs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yt extends Ts{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gs;const mr=new U,Hs=new U,Vs=new U,Ws=new Ee,gr=new Ee,md=new at,Vr=new U,vr=new U,Wr=new U,Kc=new Ee,Mo=new Ee,Zc=new Ee;class Qt extends pt{constructor(e=new Yt){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mp(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new Fa(n,3,0,!1)),Gs.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new Ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;qr(Vr.set(-.5,-.5,0),Vs,r,Hs,i,s),qr(vr.set(.5,-.5,0),Vs,r,Hs,i,s),qr(Wr.set(.5,.5,0),Vs,r,Hs,i,s),Kc.set(0,0),Mo.set(1,0),Zc.set(1,1);let o=e.ray.intersectTriangle(Vr,vr,Wr,!1,mr);if(o===null&&(qr(vr.set(-.5,.5,0),Vs,r,Hs,i,s),Mo.set(0,1),o=e.ray.intersectTriangle(Vr,Wr,vr,!1,mr),o===null))return;const l=e.ray.origin.distanceTo(mr);l<e.near||l>e.far||t.push({distance:l,point:mr.clone(),uv:xn.getInterpolation(mr,Vr,vr,Wr,Kc,Mo,Zc,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(a,e,t,n,i,s){Ws.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(gr.x=s*Ws.x-i*Ws.y,gr.y=i*Ws.x+s*Ws.y):gr.copy(Ws),a.copy(e),a.x+=gr.x,a.y+=gr.y,a.applyMatrix4(md)}const Kn=new U,bo=new U,Xr=new U,ui=new U,_o=new U,Yr=new U,So=new U;class dc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bo.copy(e).add(t).multiplyScalar(.5),Xr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(bo);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Xr),o=ui.dot(this.direction),l=-ui.dot(Xr),c=ui.lengthSq(),h=Math.abs(1-r*r);let f,d,u,p;if(h>0)if(f=r*l-o,d=r*o-l,p=s*h,f>=0)if(d>=-p)if(d<=p){const v=1/h;f*=v,d*=v,u=f*(f+r*d+2*o)+d*(r*f+d+2*l)+c}else d=s,f=Math.max(0,-(r*d+o)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(r*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-r*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(r*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=r>0?-s:s,f=Math.max(0,-(r*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(bo).addScaledVector(Xr,d),u}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,s){_o.subVectors(t,e),Yr.subVectors(n,e),So.crossVectors(_o,Yr);let r=this.direction.dot(So),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ui.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(ui,Yr));if(l<0)return null;const c=o*this.direction.dot(_o.cross(ui));if(c<0||l+c>r)return null;const h=-o*ui.dot(So);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jn extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jc=new at,Pi=new dc,$r=new cr,Qc=new U,Kr=new U,Zr=new U,Jr=new U,wo=new U,Qr=new U,jc=new U,jr=new U;class Pe extends pt{constructor(e=new kt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(wo.fromBufferAttribute(f,e),r?Qr.addScaledVector(wo,h):Qr.addScaledVector(wo.sub(t),h))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!($r.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere($r,Qc)===null||Pi.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=r[m.materialIndex],_=Math.max(m.start,u.start),S=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,E=S;y<E;y+=3){const T=o.getX(y),R=o.getX(y+1),M=o.getX(y+2);i=ea(this,g,e,n,c,h,f,T,R,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){const _=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=ea(this,r,e,n,c,h,f,_,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=d.length;p<v;p++){const m=d[p],g=r[m.materialIndex],_=Math.max(m.start,u.start),S=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,E=S;y<E;y+=3){const T=y,R=y+1,M=y+2;i=ea(this,g,e,n,c,h,f,T,R,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=p,g=v;m<g;m+=3){const _=m,S=m+1,y=m+2;i=ea(this,r,e,n,c,h,f,_,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _p(a,e,t,n,i,s,r,o){let l;if(e.side===nn?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Si,o),l===null)return null;jr.copy(o),jr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:a}}function ea(a,e,t,n,i,s,r,o,l,c){a.getVertexPosition(o,Kr),a.getVertexPosition(l,Zr),a.getVertexPosition(c,Jr);const h=_p(a,e,t,n,Kr,Zr,Jr,jc);if(h){const f=new U;xn.getBarycoord(jc,Kr,Zr,Jr,f),i&&(h.uv=xn.getInterpolatedAttribute(i,o,l,c,f,new Ee)),s&&(h.uv1=xn.getInterpolatedAttribute(s,o,l,c,f,new Ee)),r&&(h.normal=xn.getInterpolatedAttribute(r,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};xn.getNormal(Kr,Zr,Jr,d.normal),h.face=d,h.barycoord=f}return h}class gd extends Nt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=ft,h=ft,f,d){super(null,r,o,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eh extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qs=new at,th=new at,ta=[],nh=new Es,Sp=new at,xr=new Pe,yr=new cr;class Mr extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Es),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),nh.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qs),yr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qs),th.multiplyMatrices(n,qs),xr.matrixWorld=th,xr.raycast(e,ta);for(let r=0,o=ta.length;r<o;r++){const l=ta[r];l.instanceId=s,l.object=this,t.push(l)}ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gd(new Float32Array(i*this.count),i,this.count,ic,Sn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Eo=new U,wp=new U,Ep=new ke;class mi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Eo.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Eo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ep.getNormalMatrix(e),i=this.coplanarPoint(Eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new cr,Tp=new Ee(.5,.5),na=new U;class uc{constructor(e=new mi,t=new mi,n=new mi,i=new mi,s=new mi,r=new mi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){const i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],u=s[7],p=s[8],v=s[9],m=s[10],g=s[11],_=s[12],S=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-r,u-h,g-p,E-_).normalize(),i[1].setComponents(c+r,u+h,g+p,E+_).normalize(),i[2].setComponents(c+o,u+f,g+v,E+S).normalize(),i[3].setComponents(c-o,u-f,g-v,E-S).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,u-d,g-m,E-y).normalize();else if(i[4].setComponents(c-l,u-d,g-m,E-y).normalize(),t===Nn)i[5].setComponents(c+l,u+d,g+m,E+y).normalize();else if(t===Cr)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=Tp.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(na.x=i.normal.x>0?e.max.x:e.min.x,na.y=i.normal.y>0?e.max.y:e.min.y,na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ap extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new at,kl=new dc,ia=new cr,sa=new U;class Cp extends pt{constructor(e=new kt,t=new Ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=s,e.ray.intersectsSphere(ia)===!1)return;ih.copy(i).invert(),kl.copy(e.ray).applyMatrix4(ih);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let p=d,v=u;p<v;p++){const m=c.getX(p);sa.fromBufferAttribute(f,m),sh(sa,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),u=Math.min(f.count,r.start+r.count);for(let p=d,v=u;p<v;p++)sa.fromBufferAttribute(f,p),sh(sa,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sh(a,e,t,n,i,s,r){const o=kl.distanceSqToPoint(a);if(o<t){const l=new U;kl.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class vd extends Nt{constructor(e=[],t=ys,n,i,s,r,o,l,c,h){super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class si extends Nt{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bs extends Nt{constructor(e,t,n=Vn,i,s,r,o=ft,l=ft,c,h=ii,f=1){if(h!==ii&&h!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rp extends bs{constructor(e,t=Vn,n=ys,i,s,r=ft,o=ft,l,c=ii){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xd extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Je extends kt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],f=[];let d=0,u=0;p("z","y","x",-1,-1,n,t,e,r,s,0),p("z","y","x",1,-1,n,t,-e,r,s,1),p("x","z","y",1,1,e,n,t,i,r,2),p("x","z","y",1,-1,e,n,-t,i,r,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(f,2));function p(v,m,g,_,S,y,E,T,R,M,C){const L=y/R,I=E/M,O=y/2,$=E/2,Q=T/2,B=R+1,K=M+1;let V=0,ee=0;const ne=new U;for(let pe=0;pe<K;pe++){const ye=pe*I-$;for(let _e=0;_e<B;_e++){const Qe=_e*L-O;ne[v]=Qe*_,ne[m]=ye*S,ne[g]=Q,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[g]=T>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(_e/R),f.push(1-pe/M),V+=1}}for(let pe=0;pe<M;pe++)for(let ye=0;ye<R;ye++){const _e=d+ye+B*pe,Qe=d+ye+B*(pe+1),gt=d+(ye+1)+B*(pe+1),je=d+(ye+1)+B*pe;l.push(_e,Qe,je),l.push(Qe,gt,je),ee+=6}o.addGroup(u,ee,C),u+=ee,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ua extends kt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new U,h=new Ee;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const u=n+f/t*i;c.x=e*Math.cos(u),c.y=e*Math.sin(u),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jn extends kt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],d=[],u=[];let p=0;const v=[],m=n/2;let g=0;_(),r===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(u,2));function _(){const y=new U,E=new U;let T=0;const R=(t-e)/n;for(let M=0;M<=s;M++){const C=[],L=M/s,I=L*(t-e)+e;for(let O=0;O<=i;O++){const $=O/i,Q=$*l+o,B=Math.sin(Q),K=Math.cos(Q);E.x=I*B,E.y=-L*n+m,E.z=I*K,f.push(E.x,E.y,E.z),y.set(B,R,K).normalize(),d.push(y.x,y.y,y.z),u.push($,1-L),C.push(p++)}v.push(C)}for(let M=0;M<i;M++)for(let C=0;C<s;C++){const L=v[C][M],I=v[C+1][M],O=v[C+1][M+1],$=v[C][M+1];(e>0||C!==0)&&(h.push(L,I,$),T+=3),(t>0||C!==s-1)&&(h.push(I,O,$),T+=3)}c.addGroup(g,T,0),g+=T}function S(y){const E=p,T=new Ee,R=new U;let M=0;const C=y===!0?e:t,L=y===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,m*L,0),d.push(0,L,0),u.push(.5,.5),p++;const I=p;for(let O=0;O<=i;O++){const Q=O/i*l+o,B=Math.cos(Q),K=Math.sin(Q);R.x=C*K,R.y=m*L,R.z=C*B,f.push(R.x,R.y,R.z),d.push(0,L,0),T.x=B*.5+.5,T.y=K*.5*L+.5,u.push(T.x,T.y),p++}for(let O=0;O<i;O++){const $=E+O,Q=I+O;y===!0?h.push(Q,Q+1,$):h.push(Q+1,Q,$),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,d=t/l,u=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const _=g*d-r;for(let S=0;S<c;S++){const y=S*f-s;p.push(y,-_,0),v.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const S=_+c*g,y=_+c*(g+1),E=_+1+c*(g+1),T=_+1+c*g;u.push(S,y,T),u.push(y,E,T)}this.setIndex(u),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}class fc extends kt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const d=(t-e)/i,u=new U,p=new Ee;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const g=s+m/n*r;u.x=f*Math.cos(g),u.y=f*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/t+1)/2,p.y=(u.y/t+1)/2,h.push(p.x,p.y)}f+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let g=0;g<n;g++){const _=g+m,S=_,y=_+n+1,E=_+n+2,T=_+1;o.push(S,y,T),o.push(y,E,T)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wr extends kt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],f=new U,d=new U,u=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const _=[],S=g/n,y=r+S*o,E=e*Math.cos(y),T=Math.sqrt(e*e-E*E);let R=0;g===0&&r===0?R=.5/t:g===n&&l===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){const C=M/t,L=i+C*s;f.x=-T*Math.cos(L),f.y=E,f.z=T*Math.sin(L),p.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(C+R,1-S),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){const S=h[g][_+1],y=h[g][_],E=h[g+1][_],T=h[g+1][_+1];(g!==0||r>0)&&u.push(S,y,T),(g!==n-1||l<Math.PI)&&u.push(y,E,T)}this.setIndex(u),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Na extends kt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],d=new U,u=new U,p=new U;for(let v=0;v<=n;v++){const m=r+v/n*o;for(let g=0;g<=i;g++){const _=g/i*s;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),c.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(g/i),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,_=(i+1)*(v-1)+m-1,S=(i+1)*(v-1)+m,y=(i+1)*v+m;l.push(g,_,y),l.push(_,S,y)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function sr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];if(rh(i))i.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(rh(i[0])){const s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Xt(a){const e={};for(let t=0;t<a.length;t++){const n=sr(a[t]);for(const i in n)e[i]=n[i]}return e}function rh(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Pp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function yd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const _i={clone:sr,merge:Xt};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new at().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Md extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tt extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dp extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pc extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Up extends pc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const To=new at,ah=new U,oh=new U;class bd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Cr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ra=new U,aa=new lr,Rn=new U;class _d extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ra,aa,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ra,aa,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new U,lh=new Ee,ch=new Ee;class hn extends _d{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ol*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ol*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Np extends bd{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ao extends pc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Va extends _d{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Op extends bd{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kp extends pc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Xs=-90,Ys=1;class Bp extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(Xs,Ys,e,t);i.layers=this.layers,this.add(i);const s=new hn(Xs,Ys,e,t);s.layers=this.layers,this.add(s);const r=new hn(Xs,Ys,e,t);r.layers=this.layers,this.add(r);const o=new hn(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new hn(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const c=new hn(Xs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zp extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Hp(){this._document.hidden===!1&&this.reset()}const hh=new at;class Vp{constructor(e,t,n=0,i=1/0){this.ray=new dc(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(e,t=!0,n=[]){return Bl(e,this,n,t),n.sort(dh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bl(e[i],this,n,t);return n.sort(dh),n}}function dh(a,e){return a.distance-e.distance}function Bl(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)Bl(s[r],e,t,!0)}}const yc=class yc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};yc.prototype.isMatrix2=!0;let uh=yc;function fh(a,e,t,n){const i=Wp(n);switch(t){case ld:return a*e;case ic:return a*e/i.components*i.byteLength;case sc:return a*e/i.components*i.byteLength;case Ms:return a*e*2/i.components*i.byteLength;case rc:return a*e*2/i.components*i.byteLength;case cd:return a*e*3/i.components*i.byteLength;case wn:return a*e*4/i.components*i.byteLength;case ac:return a*e*4/i.components*i.byteLength;case Ma:case ba:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case _a:case Sa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case al:case ll:return Math.max(a,16)*Math.max(e,8)/4;case rl:case ol:return Math.max(a,8)*Math.max(e,8)/2;case cl:case hl:case ul:case fl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case dl:case Ca:case pl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Pl:case Il:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ll:case Dl:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ra:case Fl:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wp(a){switch(a){case dn:case sd:return{byteLength:1,components:1};case Tr:case rd:case Wt:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case Vn:case ec:case Sn:return{byteLength:4,components:1};case ad:case od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sd(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function qp(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=a.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=a.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=a.HALF_FLOAT:u=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=a.SHORT;else if(c instanceof Uint32Array)u=a.UNSIGNED_INT;else if(c instanceof Int32Array)u=a.INT;else if(c instanceof Int8Array)u=a.BYTE;else if(c instanceof Uint8Array)u=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){const p=f[d],v=f[u];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){const v=f[u];a.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:r}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Wm=`uniform sampler2D dfgLUT;
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
}`,qm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,jg=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,y0=`#define TOON
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
}`,M0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Xp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:Kp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:jp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:dm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:vm,displacementmap_pars_vertex:xm,displacementmap_vertex:ym,emissivemap_fragment:Mm,emissivemap_pars_fragment:bm,colorspace_fragment:_m,colorspace_pars_fragment:Sm,envmap_fragment:wm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Tm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:km,envmap_vertex:Cm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Nm,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Vm,lights_physical_pars_fragment:Wm,lights_fragment_begin:qm,lights_fragment_maps:Xm,lights_fragment_end:Ym,lightprobes_pars_fragment:$m,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Qm,map_fragment:jm,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:ag,morphnormal_vertex:og,morphtarget_pars_vertex:lg,morphtarget_vertex:cg,normal_fragment_begin:hg,normal_fragment_maps:dg,normal_pars_fragment:ug,normal_pars_vertex:fg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:yg,opaque_fragment:Mg,packing:bg,premultiplied_alpha_fragment:_g,project_vertex:Sg,dithering_fragment:wg,dithering_pars_fragment:Eg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Ig,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Fg,skinnormal_vertex:Ug,specularmap_fragment:Ng,specularmap_pars_fragment:Og,tonemapping_fragment:kg,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:Gg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:Wg,worldpos_vertex:qg,background_vert:Xg,background_frag:Yg,backgroundCube_vert:$g,backgroundCube_frag:Kg,cube_vert:Zg,cube_frag:Jg,depth_vert:Qg,depth_frag:jg,distance_vert:e0,distance_frag:t0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:a0,meshbasic_frag:o0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:h0,meshmatcap_frag:d0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:v0,meshtoon_vert:x0,meshtoon_frag:y0,points_vert:M0,points_frag:b0,shadow_vert:_0,shadow_frag:S0,sprite_vert:w0,sprite_frag:E0},ue={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ln={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ln.physical={uniforms:Xt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const oa={r:0,b:0,g:0},T0=new at,wd=new ke;wd.set(-1,0,0,0,1,0,0,0,1);function A0(a,e,t,n,i,s){const r=new Le(0);let o=i===!0?0:1,l,c,h=null,f=0,d=null;function u(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){const y=_.backgroundBlurriness>0;S=e.get(S,y)}return S}function p(_){let S=!1;const y=u(_);y===null?m(r,o):y&&y.isColor&&(m(y,1),S=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function v(_,S){const y=u(S);y&&(y.isCubeTexture||y.mapping===Ha)?(c===void 0&&(c=new Pe(new Je(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:sr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wd),c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==nt,(h!==y||f!==y.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=a.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pe(new ei(2,2),new Ct({name:"BackgroundMaterial",uniforms:sr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=a.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(oa,yd(a)),t.buffers.color.setClear(oa.r,oa.g,oa.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,S=1){r.set(_),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(r,o)},render:p,addToRenderList:v,dispose:g}}function C0(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function o(I,O,$,Q,B){let K=!1;const V=f(I,Q,$,O);s!==V&&(s=V,c(s.object)),K=u(I,Q,$,B),K&&p(I,Q,$,B),B!==null&&e.update(B,a.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(I,O,$,Q),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return a.createVertexArray()}function c(I){return a.bindVertexArray(I)}function h(I){return a.deleteVertexArray(I)}function f(I,O,$,Q){const B=Q.wireframe===!0;let K=n[O.id];K===void 0&&(K={},n[O.id]=K);const V=I.isInstancedMesh===!0?I.id:0;let ee=K[V];ee===void 0&&(ee={},K[V]=ee);let ne=ee[$.id];ne===void 0&&(ne={},ee[$.id]=ne);let pe=ne[B];return pe===void 0&&(pe=d(l()),ne[B]=pe),pe}function d(I){const O=[],$=[],Q=[];for(let B=0;B<t;B++)O[B]=0,$[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:Q,object:I,attributes:{},index:null}}function u(I,O,$,Q){const B=s.attributes,K=O.attributes;let V=0;const ee=$.getAttributes();for(const ne in ee)if(ee[ne].location>=0){const ye=B[ne];let _e=K[ne];if(_e===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),ye===void 0||ye.attribute!==_e||_e&&ye.data!==_e.data)return!0;V++}return s.attributesNum!==V||s.index!==Q}function p(I,O,$,Q){const B={},K=O.attributes;let V=0;const ee=$.getAttributes();for(const ne in ee)if(ee[ne].location>=0){let ye=K[ne];ye===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor));const _e={};_e.attribute=ye,ye&&ye.data&&(_e.data=ye.data),B[ne]=_e,V++}s.attributes=B,s.attributesNum=V,s.index=Q}function v(){const I=s.newAttributes;for(let O=0,$=I.length;O<$;O++)I[O]=0}function m(I){g(I,0)}function g(I,O){const $=s.newAttributes,Q=s.enabledAttributes,B=s.attributeDivisors;$[I]=1,Q[I]===0&&(a.enableVertexAttribArray(I),Q[I]=1),B[I]!==O&&(a.vertexAttribDivisor(I,O),B[I]=O)}function _(){const I=s.newAttributes,O=s.enabledAttributes;for(let $=0,Q=O.length;$<Q;$++)O[$]!==I[$]&&(a.disableVertexAttribArray($),O[$]=0)}function S(I,O,$,Q,B,K,V){V===!0?a.vertexAttribIPointer(I,O,$,B,K):a.vertexAttribPointer(I,O,$,Q,B,K)}function y(I,O,$,Q){v();const B=Q.attributes,K=$.getAttributes(),V=O.defaultAttributeValues;for(const ee in K){const ne=K[ee];if(ne.location>=0){let pe=B[ee];if(pe===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),pe!==void 0){const ye=pe.normalized,_e=pe.itemSize,Qe=e.get(pe);if(Qe===void 0)continue;const gt=Qe.buffer,je=Qe.type,j=Qe.bytesPerElement,ae=je===a.INT||je===a.UNSIGNED_INT||pe.gpuType===ec;if(pe.isInterleavedBufferAttribute){const ie=pe.data,Oe=ie.stride,ze=pe.offset;if(ie.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ne.locationSize;Fe++)g(ne.location+Fe,ie.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Fe=0;Fe<ne.locationSize;Fe++)m(ne.location+Fe);a.bindBuffer(a.ARRAY_BUFFER,gt);for(let Fe=0;Fe<ne.locationSize;Fe++)S(ne.location+Fe,_e/ne.locationSize,je,ye,Oe*j,(ze+_e/ne.locationSize*Fe)*j,ae)}else{if(pe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)g(ne.location+ie,pe.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie);a.bindBuffer(a.ARRAY_BUFFER,gt);for(let ie=0;ie<ne.locationSize;ie++)S(ne.location+ie,_e/ne.locationSize,je,ye,_e*j,_e/ne.locationSize*ie*j,ae)}}else if(V!==void 0){const ye=V[ee];if(ye!==void 0)switch(ye.length){case 2:a.vertexAttrib2fv(ne.location,ye);break;case 3:a.vertexAttrib3fv(ne.location,ye);break;case 4:a.vertexAttrib4fv(ne.location,ye);break;default:a.vertexAttrib1fv(ne.location,ye)}}}}_()}function E(){C();for(const I in n){const O=n[I];for(const $ in O){const Q=O[$];for(const B in Q){const K=Q[B];for(const V in K)h(K[V].object),delete K[V];delete Q[B]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const $ in O){const Q=O[$];for(const B in Q){const K=Q[B];for(const V in K)h(K[V].object),delete K[V];delete Q[B]}}delete n[I.id]}function R(I){for(const O in n){const $=n[O];for(const Q in $){const B=$[Q];if(B[I.id]===void 0)continue;const K=B[I.id];for(const V in K)h(K[V].object),delete K[V];delete B[I.id]}}}function M(I){for(const O in n){const $=n[O],Q=I.isInstancedMesh===!0?I.id:0,B=$[Q];if(B!==void 0){for(const K in B){const V=B[K];for(const ee in V)h(V[ee].object),delete V[ee];delete B[K]}delete $[Q],Object.keys($).length===0&&delete n[O]}}}function C(){L(),r=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function R0(a,e,t){let n;function i(l){n=l}function s(l,c){a.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(a.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function P0(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==wn&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const M=R===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==dn&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Sn&&!M)}function l(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),_=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),S=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=a.getParameter(a.MAX_SAMPLES),T=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:T}}function I0(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new mi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){const p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=a.get(f);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,S=_*4;let y=g.clippingState||null;l.value=y,y=h(p,d,S,u);for(let E=0;E!==S;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=u+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,y=u;S!==v;++S,y+=4)r.copy(f[S]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Mi=4,ph=[.125,.215,.35,.446,.526,.582],Di=20,L0=256,br=new Va,mh=new Le;let Co=null,Ro=0,Po=0,Io=!1;const D0=new U;class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:r=256,position:o=D0}=s;Co=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Co,Ro,Po),this._renderer.xr.enabled=Io,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Wt,format:wn,colorSpace:Pa,depthBuffer:!1},i=vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F0(s)),this._blurMaterial=N0(s,e,t),this._ggxMaterial=U0(s,e,t)}return i}_compileMaterial(e){const t=new Pe(new kt,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,i,s){const l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(mh),f.toneMapping=Bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new Je,new jn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(mh),g=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const E=this._cubeSize;$s(i,y*E,S>2?E:0,E,E),f.setRenderTarget(i),g&&f.render(v,l),f.render(e,l)}f.toneMapping=u,f.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ys||e.mapping===ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,u=f*d,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-Mi?n-p+Mi:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=p-t,$s(s,m,g,3*v,2*v),i.setRenderTarget(s),i.render(o,br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,$s(e,m,g,3*v,2*v),i.setRenderTarget(e),i.render(o,br)}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[i];f.material=c;const d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Di-1),v=s/p,m=isFinite(s)?1+Math.floor(h*v):Di;m>Di&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const g=[];let _=0;for(let R=0;R<Di;++R){const M=R/v,C=Math.exp(-M*M/2);g.push(C),R===0?_+=C:R<m&&(_+=2*C)}for(let R=0;R<g.length;R++)g[R]=g[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-n;const y=this._sizeLods[i],E=3*y*(i>S-Mi?i-S+Mi:0),T=4*(this._cubeSize-y);$s(t,E,T,3*y,2*y),l.setRenderTarget(t),l.render(f,br)}}function F0(a){const e=[],t=[],n=[];let i=a;const s=a-Mi+1+ph.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Mi?l=ph[r-a+Mi-1]:r===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,p=6,v=3,m=2,g=1,_=new Float32Array(v*p*u),S=new Float32Array(m*p*u),y=new Float32Array(g*p*u);for(let T=0;T<u;T++){const R=T%3*2/3-1,M=T>2?0:-1,C=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];_.set(C,v*p*T),S.set(d,m*p*T);const L=[T,T,T,T,T,T];y.set(L,g*p*T)}const E=new kt;E.setAttribute("position",new Kt(_,v)),E.setAttribute("uv",new Kt(S,m)),E.setAttribute("faceIndex",new Kt(y,g)),n.push(new Pe(E,null)),i>Mi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function vh(a,e,t){const n=new Ot(a,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function U0(a,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function N0(a,e,t){const n=new Float32Array(Di),i=new U(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function xh(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function yh(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}class Ed extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Je(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:kn});s.uniforms.tEquirect.value=t;const r=new Pe(i,s),o=t.minFilter;return t.minFilter===Un&&(t.minFilter=Ut),new Bp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}function O0(a){let e=new WeakMap,t=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?r(d):s(d)}function s(d){if(d&&d.isTexture){const u=d.mapping;if(u===Ja||u===Qa)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new Ed(p.height);return v.fromEquirectangularTexture(a,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function r(d){if(d&&d.isTexture){const u=d.mapping,p=u===Ja||u===Qa,v=u===ys||u===ir;if(p||v){let m=t.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new gh(a)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new gh(a)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===Ja?d.mapping=ys:u===Qa&&(d.mapping=ir),d}function l(d){let u=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&u++;return u===p}function c(d){const u=d.target;u.removeEventListener("dispose",c);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){const u=d.target;u.removeEventListener("dispose",h);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function k0(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&js("WebGLRenderer: "+n+" extension not supported."),i}}}function B0(a,e,t,n){const i={},s=new WeakMap;function r(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",r),delete i[d.id];const u=s.get(d);u&&(e.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const u in d)e.update(d[u],a.ARRAY_BUFFER)}function c(f){const d=[],u=f.index,p=f.attributes.position;let v=0;if(p===void 0)return;if(u!==null){const _=u.array;v=u.version;for(let S=0,y=_.length;S<y;S+=3){const E=_[S+0],T=_[S+1],R=_[S+2];d.push(E,T,T,R,R,E)}}else{const _=p.array;v=p.version;for(let S=0,y=_.length/3-1;S<y;S+=3){const E=S+0,T=S+1,R=S+2;d.push(E,T,T,R,R,E)}}const m=new(p.count>=65535?pd:fd)(d,1);m.version=v;const g=s.get(f);g&&e.remove(g),s.set(f,m)}function h(f){const d=s.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function z0(a,e,t){let n;function i(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function l(f,d){a.drawElements(n,d,s,f*r),t.update(d,n,1)}function c(f,d,u){u!==0&&(a.drawElementsInstanced(n,d,s,f*r,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,u);let v=0;for(let m=0;m<u;m++)v+=d[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function G0(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H0(a,e,t){const n=new WeakMap,i=new mt;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let L=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var u=L;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*T*4*f),M=new dd(R,E,T,f);M.type=Sn,M.needsUpdate=!0;const C=y*4;for(let I=0;I<f;I++){const O=g[I],$=_[I],Q=S[I],B=E*T*4*I;for(let K=0;K<O.count;K++){const V=K*C;p===!0&&(i.fromBufferAttribute(O,K),R[B+V+0]=i.x,R[B+V+1]=i.y,R[B+V+2]=i.z,R[B+V+3]=0),v===!0&&(i.fromBufferAttribute($,K),R[B+V+4]=i.x,R[B+V+5]=i.y,R[B+V+6]=i.z,R[B+V+7]=0),m===!0&&(i.fromBufferAttribute(Q,K),R[B+V+8]=i.x,R[B+V+9]=i.y,R[B+V+10]=i.z,R[B+V+11]=Q.itemSize===4?i.w:1)}}d={count:f,texture:M,size:new Ee(E,T)},n.set(o,d),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function V0(a,e,t,n,i){let s=new WeakMap;function r(c){const h=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const W0={[$l]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Ql]:"AGX_TONE_MAPPING",[jl]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function q0(a,e,t,n,i,s){const r=new Ot(e,t,{type:a,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new bs(e,t):void 0}),o=new Ot(e,t,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new kt;l.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ut([0,2,0,0,2,0],2));const c=new Md({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pe(l,c),f=new Va(-1,1,1,-1,0,1);let d=null,u=null,p=!1,v,m=null,g=[],_=!1;this.setSize=function(S,y){r.setSize(S,y),o.setSize(S,y);for(let E=0;E<g.length;E++){const T=g[E];T.setSize&&T.setSize(S,y)}},this.setEffects=function(S){g=S,_=g.length>0&&g[0].isRenderPass===!0;const y=r.width,E=r.height;for(let T=0;T<g.length;T++){const R=g[T];R.setSize&&R.setSize(y,E)}},this.begin=function(S,y){if(p||S.toneMapping===Bn&&g.length===0)return!1;if(m=y,y!==null){const E=y.width,T=y.height;(r.width!==E||r.height!==T)&&this.setSize(E,T)}return _===!1&&S.setRenderTarget(r),v=S.toneMapping,S.toneMapping=Bn,!0},this.hasRenderPass=function(){return _},this.end=function(S,y){S.toneMapping=v,p=!0;let E=r,T=o;for(let R=0;R<g.length;R++){const M=g[R];if(M.enabled!==!1&&(M.render(S,T,E,y),M.needsSwap!==!1)){const C=E;E=T,T=C}}if(d!==S.outputColorSpace||u!==S.toneMapping){d=S.outputColorSpace,u=S.toneMapping,c.defines={},Xe.getTransfer(d)===nt&&(c.defines.SRGB_TRANSFER="");const R=W0[u];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(m),S.render(h,f),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Td=new Nt,zl=new bs(1,1),Ad=new dd,Cd=new lp,Rd=new vd,Mh=[],bh=[],_h=new Float32Array(16),Sh=new Float32Array(9),wh=new Float32Array(4);function hr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Mh[i];if(s===void 0&&(s=new Float32Array(i),Mh[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function It(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Lt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function qa(a,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function X0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Y0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2fv(this.addr,e),Lt(t,e)}}function $0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;a.uniform3fv(this.addr,e),Lt(t,e)}}function K0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4fv(this.addr,e),Lt(t,e)}}function Z0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;wh.set(n),a.uniformMatrix2fv(this.addr,!1,wh),Lt(t,n)}}function J0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Sh.set(n),a.uniformMatrix3fv(this.addr,!1,Sh),Lt(t,n)}}function Q0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;_h.set(n),a.uniformMatrix4fv(this.addr,!1,_h),Lt(t,n)}}function j0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ev(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2iv(this.addr,e),Lt(t,e)}}function tv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3iv(this.addr,e),Lt(t,e)}}function nv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4iv(this.addr,e),Lt(t,e)}}function iv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function sv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;a.uniform2uiv(this.addr,e),Lt(t,e)}}function rv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;a.uniform3uiv(this.addr,e),Lt(t,e)}}function av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;a.uniform4uiv(this.addr,e),Lt(t,e)}}function ov(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?lc:oc,s=zl):s=Td,t.setTexture2D(e||s,i)}function lv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cd,i)}function cv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rd,i)}function hv(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ad,i)}function dv(a){switch(a){case 5126:return X0;case 35664:return Y0;case 35665:return $0;case 35666:return K0;case 35674:return Z0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return j0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}function uv(a,e){a.uniform1fv(this.addr,e)}function fv(a,e){const t=hr(e,this.size,2);a.uniform2fv(this.addr,t)}function pv(a,e){const t=hr(e,this.size,3);a.uniform3fv(this.addr,t)}function mv(a,e){const t=hr(e,this.size,4);a.uniform4fv(this.addr,t)}function gv(a,e){const t=hr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function vv(a,e){const t=hr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function xv(a,e){const t=hr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function yv(a,e){a.uniform1iv(this.addr,e)}function Mv(a,e){a.uniform2iv(this.addr,e)}function bv(a,e){a.uniform3iv(this.addr,e)}function _v(a,e){a.uniform4iv(this.addr,e)}function Sv(a,e){a.uniform1uiv(this.addr,e)}function wv(a,e){a.uniform2uiv(this.addr,e)}function Ev(a,e){a.uniform3uiv(this.addr,e)}function Tv(a,e){a.uniform4uiv(this.addr,e)}function Av(a,e,t){const n=this.cache,i=e.length,s=qa(t,i);It(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=zl:r=Td;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function Cv(a,e,t){const n=this.cache,i=e.length,s=qa(t,i);It(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Cd,s[r])}function Rv(a,e,t){const n=this.cache,i=e.length,s=qa(t,i);It(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Rd,s[r])}function Pv(a,e,t){const n=this.cache,i=e.length,s=qa(t,i);It(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Ad,s[r])}function Iv(a){switch(a){case 5126:return uv;case 35664:return fv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return Mv;case 35668:case 35672:return bv;case 35669:case 35673:return _v;case 5125:return Sv;case 36294:return wv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Pv}}class Lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}}class Dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iv(t.type)}}class Fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Eh(a,e){a.seq.push(e),a.map[e.id]=e}function Uv(a,e,t){const n=a.name,i=n.length;for(Lo.lastIndex=0;;){const s=Lo.exec(n),r=Lo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Eh(t,c===void 0?new Lv(o,a,e):new Dv(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new Fv(o),Eh(t,f)),t=f}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Uv(o,l,this)}const i=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Th(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Nv=37297;let Ov=0;function kv(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Ah=new ke;function Bv(a){Xe._getMatrix(Ah,Xe.workingColorSpace,a);const e=`mat3( ${Ah.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(a)){case Ia:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ch(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kv(a.getShaderSource(e),o)}else return s}function zv(a,e){const t=Bv(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Gv={[$l]:"Linear",[Kl]:"Reinhard",[Zl]:"Cineon",[Ga]:"ACESFilmic",[Ql]:"AgX",[jl]:"Neutral",[Jl]:"Custom"};function Hv(a,e){const t=Gv[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new U;function Vv(){Xe.getLuminanceCoefficients(la);const a=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function qv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xv(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Sr(a){return a!==""}function Rh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(a){return a.replace(Yv,Kv)}const $v=new Map;function Kv(a,e){let t=Ve[e];if(t===void 0){const n=$v.get(e);if(n!==void 0)t=Ve[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gl(t)}const Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(a){return a.replace(Zv,Jv)}function Jv(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lh(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qv={[ya]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function jv(a){return Qv[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ex={[ys]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function tx(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":ex[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const nx={[ir]:"ENVMAP_MODE_REFRACTION"};function ix(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sx={[nd]:"ENVMAP_BLENDING_MULTIPLY",[Gf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function rx(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":sx[a.combine]||"ENVMAP_BLENDING_NONE"}function ax(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ox(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=jv(t),c=tx(t),h=ix(t),f=rx(t),d=ax(t),u=Wv(t),p=qv(s),v=i.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Sr).join(`
`),g.length>0&&(g+=`
`)):(m=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),g=[Lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,zv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),r=Gl(r),r=Rh(r,t),r=Ph(r,t),o=Gl(o),o=Rh(o,t),o=Ph(o,t),r=Ih(r),o=Ih(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=_+m+r,y=_+g+o,E=Th(i,i.VERTEX_SHADER,S),T=Th(i,i.FRAGMENT_SHADER,y);i.attachShader(v,E),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(I){if(a.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",$=i.getShaderInfoLog(E)||"",Q=i.getShaderInfoLog(T)||"",B=O.trim(),K=$.trim(),V=Q.trim();let ee=!0,ne=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ee=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,E,T);else{const pe=Ch(i,E,"vertex"),ye=Ch(i,T,"fragment");Ye("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+pe+`
`+ye)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(K===""||V==="")&&(ne=!1);ne&&(I.diagnostics={runnable:ee,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(E),i.deleteShader(T),M=new wa(i,v),C=Xv(i,v)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(v,Nv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hx(e),t.set(e,n)),n}}class hx{constructor(e){this.id=lx++,this.code=e,this.usedTimes=0}}function dx(a){return a===Ms||a===Ca||a===Ra}function ux(a,e,t,n,i,s){const r=new hc,o=new cx,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,C,L,I,O,$){const Q=I.fog,B=O.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||K,V),ne=ee&&ee.mapping===Ha?ee.image.height:null,pe=u[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&Ne("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=ye!==void 0?ye.length:0;let Qe=0;B.morphAttributes.position!==void 0&&(Qe=1),B.morphAttributes.normal!==void 0&&(Qe=2),B.morphAttributes.color!==void 0&&(Qe=3);let gt,je,j,ae;if(pe){const Se=Ln[pe];gt=Se.vertexShader,je=Se.fragmentShader}else{gt=M.vertexShader,je=M.fragmentShader;const Se=o.getVertexShaderStage(M),xt=o.getFragmentShaderStage(M);o.update(M,Se,xt),j=Se.id,ae=xt.id}const ie=a.getRenderTarget(),Oe=a.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,bt=!!M.map,qe=!!M.matcap,ot=!!ee,et=!!M.aoMap,Ke=!!M.lightMap,wt=!!M.bumpMap&&M.wireframe===!1,Rt=!!M.normalMap,Dt=!!M.displacementMap,Bt=!!M.emissiveMap,vt=!!M.metalnessMap,Et=!!M.roughnessMap,F=M.anisotropy>0,Zt=M.clearcoat>0,it=M.dispersion>0,A=M.iridescence>0,x=M.sheen>0,k=M.transmission>0,H=F&&!!M.anisotropyMap,X=Zt&&!!M.clearcoatMap,se=Zt&&!!M.clearcoatNormalMap,oe=Zt&&!!M.clearcoatRoughnessMap,Y=A&&!!M.iridescenceMap,J=A&&!!M.iridescenceThicknessMap,le=x&&!!M.sheenColorMap,Ae=x&&!!M.sheenRoughnessMap,de=!!M.specularMap,ce=!!M.specularColorMap,Ie=!!M.specularIntensityMap,Ue=k&&!!M.transmissionMap,Ge=k&&!!M.thicknessMap,D=!!M.gradientMap,re=!!M.alphaMap,Z=M.alphaTest>0,he=!!M.alphaHash,xe=!!M.extensions;let te=Bn;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=a.toneMapping);const Te={shaderID:pe,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:je,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,outputColorSpace:ie===null?a.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:bt,matcap:qe,envMap:ot,envMapMode:ot&&ee.mapping,envMapCubeUVHeight:ne,aoMap:et,lightMap:Ke,bumpMap:wt,normalMap:Rt,displacementMap:Dt,emissiveMap:Bt,normalMapObjectSpace:Rt&&M.normalMapType===qf,normalMapTangentSpace:Rt&&M.normalMapType===Ul,packedNormalMap:Rt&&M.normalMapType===Ul&&dx(M.normalMap.format),metalnessMap:vt,roughnessMap:Et,anisotropy:F,anisotropyMap:H,clearcoat:Zt,clearcoatMap:X,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:it,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:x,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:de,specularColorMap:ce,specularIntensityMap:Ie,transmission:k,transmissionMap:Ue,thicknessMap:Ge,gradientMap:D,opaque:M.transparent===!1&&M.blending===Qs&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:Z,alphaHash:he,combine:M.combine,mapUv:bt&&p(M.map.channel),aoMapUv:et&&p(M.aoMap.channel),lightMapUv:Ke&&p(M.lightMap.channel),bumpMapUv:wt&&p(M.bumpMap.channel),normalMapUv:Rt&&p(M.normalMap.channel),displacementMapUv:Dt&&p(M.displacementMap.channel),emissiveMapUv:Bt&&p(M.emissiveMap.channel),metalnessMapUv:vt&&p(M.metalnessMap.channel),roughnessMapUv:Et&&p(M.roughnessMap.channel),anisotropyMapUv:H&&p(M.anisotropyMap.channel),clearcoatMapUv:X&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(M.sheenRoughnessMap.channel),specularMapUv:de&&p(M.specularMap.channel),specularColorMapUv:ce&&p(M.specularColorMap.channel),specularIntensityMapUv:Ie&&p(M.specularIntensityMap.channel),transmissionMapUv:Ue&&p(M.transmissionMap.channel),thicknessMapUv:Ge&&p(M.thicknessMap.channel),alphaMapUv:re&&p(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Rt||F),vertexNormals:!!B.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(bt||re),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||B.attributes.normal===void 0&&Rt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Oe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Qe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:te,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:Bt&&M.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Dn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)C.push(L),C.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(g(C,M),_(C,M),C.push(a.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function g(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function _(M,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),M.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),M.push(r.mask)}function S(M){const C=u[M.type];let L;if(C){const I=Ln[C];L=_i.clone(I.uniforms)}else L=M.uniforms;return L}function y(M,C){let L=h.get(C);return L!==void 0?++L.usedTimes:(L=new ox(a,C,M,i),c.push(L),h.set(C,L)),L}function E(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function T(M){o.remove(M)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:R}}function fx(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function px(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Dh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Fh(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,v,m,g){let _=a[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:p,materialVariant:r(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:g},a[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=p,_.materialVariant=r(d),_.groupOrder=v,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function l(d,u,p,v,m,g){const _=o(d,u,p,v,m,g);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function c(d,u,p,v,m,g){const _=o(d,u,p,v,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(d,u,p){t.length>1&&t.sort(d||px),n.length>1&&n.sort(u||Dh),i.length>1&&i.sort(u||Dh),p&&(t.reverse(),n.reverse(),i.reverse())}function f(){for(let d=e,u=a.length;d<u;d++){const p=a[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function mx(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Fh,a.set(n,[r])):i>=s.length?(r=new Fh,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function gx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Le};break;case"SpotLight":t={position:new U,direction:new U,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new U,halfWidth:new U,halfHeight:new U};break}return a[e.id]=t,t}}}function vx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let xx=0;function yx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Mx(a){const e=new gx,t=vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new at,r=new at;function o(c){let h=0,f=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,p=0,v=0,m=0,g=0,_=0,S=0,y=0,E=0,T=0,R=0;c.sort(yx);for(let C=0,L=c.length;C<L;C++){const I=c[C],O=I.color,$=I.intensity,Q=I.distance;let B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ms?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*$,f+=O.g*$,d+=O.b*$;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],$);R++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=B,n.directionalShadowMatrix[u]=I.shadow.matrix,_++}n.directional[u]=K,u++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(O).multiplyScalar($),K.distance=Q,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[v]=K;const V=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,V.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=V.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=B,y++}v++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(O).multiplyScalar($),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const V=I.shadow,ee=t.get(I);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=K,p++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar($),K.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[g]=K,g++}}m>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const M=n.hash;(M.directionalLength!==u||M.pointLength!==p||M.spotLength!==v||M.rectAreaLength!==m||M.hemiLength!==g||M.numDirectionalShadows!==_||M.numPointShadows!==S||M.numSpotShadows!==y||M.numSpotMaps!==E||M.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,M.directionalLength=u,M.pointLength=p,M.spotLength=v,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=_,M.numPointShadows=S,M.numSpotShadows=y,M.numSpotMaps=E,M.numLightProbes=R,n.version=xx++)}function l(c,h){let f=0,d=0,u=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const S=c[g];if(S.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(S.isSpotLight){const y=n.spot[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(S.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Uh(a){const e=new Mx(a),t=[],n=[],i=[];function s(d){f.camera=d,t.length=0,n.length=0,i.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function bx(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new Uh(a),e.set(i,[o])):s>=r.length?(o=new Uh(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`,wx=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ex=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Nh=new at,_r=new U,Do=new U;function Tx(a,e,t){let n=new uc;const i=new Ee,s=new Ee,r=new mt,o=new Dp,l=new Fp,c={},h=t.maxTextureSize,f={[Si]:nn,[nn]:Si,[Dn]:Dn},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:_x,fragmentShader:Sx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const p=new kt;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ya;let g=this.type;this.render=function(T,R,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===_f&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ya);const C=a.getRenderTarget(),L=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),O=a.state;O.setBlending(kn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const $=g!==this.type;$&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=T.length;Q<B;Q++){const K=T[Q],V=K.shadow;if(V===void 0){Ne("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ee=V.getFrameExtents();i.multiply(ee),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,V.mapSize.y=s.y));const ne=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Js){if(K.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ot(i.x,i.y,{format:Ms,type:Wt,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new bs(i.x,i.y,Sn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=ii,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ft,V.map.depthTexture.magFilter=ft}else K.isPointLight?(V.map=new Ed(i.x),V.map.depthTexture=new Rp(i.x,Vn)):(V.map=new Ot(i.x,i.y),V.map.depthTexture=new bs(i.x,i.y,Vn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=ii,this.type===ya?(V.map.depthTexture.compareFunction=ne?lc:oc,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ft,V.map.depthTexture.magFilter=ft);V.camera.updateProjectionMatrix()}const pe=V.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<pe;ye++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,ye),a.clear();else{ye===0&&(a.setRenderTarget(V.map),a.clear());const _e=V.getViewport(ye);r.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),O.viewport(r)}if(K.isPointLight){const _e=V.camera,Qe=V.matrix,gt=K.distance||_e.far;gt!==_e.far&&(_e.far=gt,_e.updateProjectionMatrix()),_r.setFromMatrixPosition(K.matrixWorld),_e.position.copy(_r),Do.copy(_e.position),Do.add(wx[ye]),_e.up.copy(Ex[ye]),_e.lookAt(Do),_e.updateMatrixWorld(),Qe.makeTranslation(-_r.x,-_r.y,-_r.z),Nh.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Nh,_e.coordinateSystem,_e.reversedDepth)}else V.updateMatrices(K);n=V.getFrustum(),y(R,M,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Js&&_(V,M),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,a.setRenderTarget(C,L,I)};function _(T,R){const M=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ot(i.x,i.y,{format:Ms,type:Wt})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(R,null,M,d,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(R,null,M,u,v,null)}function S(T,R,M,C){let L=null;const I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=M.isPointLight===!0?l:o,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=L.uuid,$=R.uuid;let Q=c[O];Q===void 0&&(Q={},c[O]=Q);let B=Q[$];B===void 0&&(B=L.clone(),Q[$]=B,R.addEventListener("dispose",E)),L=B}if(L.visible=R.visible,L.wireframe=R.wireframe,C===Js?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:f[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=a.properties.get(L);O.light=M}return L}function y(T,R,M,C,L){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Js)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const $=e.update(T),Q=T.material;if(Array.isArray(Q)){const B=$.groups;for(let K=0,V=B.length;K<V;K++){const ee=B[K],ne=Q[ee.materialIndex];if(ne&&ne.visible){const pe=S(T,ne,C,L);T.onBeforeShadow(a,T,R,M,$,pe,ee),a.renderBufferDirect(M,null,$,pe,T,ee),T.onAfterShadow(a,T,R,M,$,pe,ee)}}}else if(Q.visible){const B=S(T,Q,C,L);T.onBeforeShadow(a,T,R,M,$,B,null),a.renderBufferDirect(M,null,$,B,T,null),T.onAfterShadow(a,T,R,M,$,B,null)}}const O=T.children;for(let $=0,Q=O.length;$<Q;$++)y(O[$],R,M,C,L)}function E(T){T.target.removeEventListener("dispose",E);for(const M in c){const C=c[M],L=T.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function Ax(a,e){function t(){let D=!1;const re=new mt;let Z=null;const he=new mt(0,0,0,0);return{setMask:function(xe){Z!==xe&&!D&&(a.colorMask(xe,xe,xe,xe),Z=xe)},setLocked:function(xe){D=xe},setClear:function(xe,te,Te,Se,xt){xt===!0&&(xe*=Se,te*=Se,Te*=Se),re.set(xe,te,Te,Se),he.equals(re)===!1&&(a.clearColor(xe,te,Te,Se),he.copy(re))},reset:function(){D=!1,Z=null,he.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,Z=null,he=null,xe=null;return{setReversed:function(te){if(re!==te){const Te=e.get("EXT_clip_control");te?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),re=te;const Se=xe;xe=null,this.setClear(Se)}},getReversed:function(){return re},setTest:function(te){te?ie(a.DEPTH_TEST):Oe(a.DEPTH_TEST)},setMask:function(te){Z!==te&&!D&&(a.depthMask(te),Z=te)},setFunc:function(te){if(re&&(te=tp[te]),he!==te){switch(te){case Jo:a.depthFunc(a.NEVER);break;case Qo:a.depthFunc(a.ALWAYS);break;case jo:a.depthFunc(a.LESS);break;case nr:a.depthFunc(a.LEQUAL);break;case el:a.depthFunc(a.EQUAL);break;case tl:a.depthFunc(a.GEQUAL);break;case nl:a.depthFunc(a.GREATER);break;case il:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}he=te}},setLocked:function(te){D=te},setClear:function(te){xe!==te&&(xe=te,re&&(te=1-te),a.clearDepth(te))},reset:function(){D=!1,Z=null,he=null,xe=null,re=!1}}}function i(){let D=!1,re=null,Z=null,he=null,xe=null,te=null,Te=null,Se=null,xt=null;return{setTest:function(ht){D||(ht?ie(a.STENCIL_TEST):Oe(a.STENCIL_TEST))},setMask:function(ht){re!==ht&&!D&&(a.stencilMask(ht),re=ht)},setFunc:function(ht,Tn,An){(Z!==ht||he!==Tn||xe!==An)&&(a.stencilFunc(ht,Tn,An),Z=ht,he=Tn,xe=An)},setOp:function(ht,Tn,An){(te!==ht||Te!==Tn||Se!==An)&&(a.stencilOp(ht,Tn,An),te=ht,Te=Tn,Se=An)},setLocked:function(ht){D=ht},setClear:function(ht){xt!==ht&&(a.clearStencil(ht),xt=ht)},reset:function(){D=!1,re=null,Z=null,he=null,xe=null,te=null,Te=null,Se=null,xt=null}}}const s=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d={},u=new WeakMap,p=[],v=null,m=!1,g=null,_=null,S=null,y=null,E=null,T=null,R=null,M=new Le(0,0,0),C=0,L=!1,I=null,O=null,$=null,Q=null,B=null;const K=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ee=0;const ne=a.getParameter(a.VERSION);ne.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=ee>=1):ne.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=ee>=2);let pe=null,ye={};const _e=a.getParameter(a.SCISSOR_BOX),Qe=a.getParameter(a.VIEWPORT),gt=new mt().fromArray(_e),je=new mt().fromArray(Qe);function j(D,re,Z,he){const xe=new Uint8Array(4),te=a.createTexture();a.bindTexture(D,te),a.texParameteri(D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(D,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Te=0;Te<Z;Te++)D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY?a.texImage3D(re,0,a.RGBA,1,1,he,0,a.RGBA,a.UNSIGNED_BYTE,xe):a.texImage2D(re+Te,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,xe);return te}const ae={};ae[a.TEXTURE_2D]=j(a.TEXTURE_2D,a.TEXTURE_2D,1),ae[a.TEXTURE_CUBE_MAP]=j(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[a.TEXTURE_2D_ARRAY]=j(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ae[a.TEXTURE_3D]=j(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(a.DEPTH_TEST),r.setFunc(nr),wt(!1),Rt(Lc),ie(a.CULL_FACE),et(kn);function ie(D){h[D]!==!0&&(a.enable(D),h[D]=!0)}function Oe(D){h[D]!==!1&&(a.disable(D),h[D]=!1)}function ze(D,re){return d[D]!==re?(a.bindFramebuffer(D,re),d[D]=re,D===a.DRAW_FRAMEBUFFER&&(d[a.FRAMEBUFFER]=re),D===a.FRAMEBUFFER&&(d[a.DRAW_FRAMEBUFFER]=re),!0):!1}function Fe(D,re){let Z=p,he=!1;if(D){Z=u.get(re),Z===void 0&&(Z=[],u.set(re,Z));const xe=D.textures;if(Z.length!==xe.length||Z[0]!==a.COLOR_ATTACHMENT0){for(let te=0,Te=xe.length;te<Te;te++)Z[te]=a.COLOR_ATTACHMENT0+te;Z.length=xe.length,he=!0}}else Z[0]!==a.BACK&&(Z[0]=a.BACK,he=!0);he&&a.drawBuffers(Z)}function bt(D){return v!==D?(a.useProgram(D),v=D,!0):!1}const qe={[Li]:a.FUNC_ADD,[wf]:a.FUNC_SUBTRACT,[Ef]:a.FUNC_REVERSE_SUBTRACT};qe[Tf]=a.MIN,qe[Af]=a.MAX;const ot={[Cf]:a.ZERO,[Rf]:a.ONE,[Pf]:a.SRC_COLOR,[Ko]:a.SRC_ALPHA,[Nf]:a.SRC_ALPHA_SATURATE,[Ff]:a.DST_COLOR,[Lf]:a.DST_ALPHA,[If]:a.ONE_MINUS_SRC_COLOR,[Zo]:a.ONE_MINUS_SRC_ALPHA,[Uf]:a.ONE_MINUS_DST_COLOR,[Df]:a.ONE_MINUS_DST_ALPHA,[Of]:a.CONSTANT_COLOR,[kf]:a.ONE_MINUS_CONSTANT_COLOR,[Bf]:a.CONSTANT_ALPHA,[zf]:a.ONE_MINUS_CONSTANT_ALPHA};function et(D,re,Z,he,xe,te,Te,Se,xt,ht){if(D===kn){m===!0&&(Oe(a.BLEND),m=!1);return}if(m===!1&&(ie(a.BLEND),m=!0),D!==Sf){if(D!==g||ht!==L){if((_!==Li||E!==Li)&&(a.blendEquation(a.FUNC_ADD),_=Li,E=Li),ht)switch(D){case Qs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ln:a.blendFunc(a.ONE,a.ONE);break;case Dc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Fc:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ye("WebGLState: Invalid blending: ",D);break}else switch(D){case Qs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ln:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Dc:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",D);break}S=null,y=null,T=null,R=null,M.set(0,0,0),C=0,g=D,L=ht}return}xe=xe||re,te=te||Z,Te=Te||he,(re!==_||xe!==E)&&(a.blendEquationSeparate(qe[re],qe[xe]),_=re,E=xe),(Z!==S||he!==y||te!==T||Te!==R)&&(a.blendFuncSeparate(ot[Z],ot[he],ot[te],ot[Te]),S=Z,y=he,T=te,R=Te),(Se.equals(M)===!1||xt!==C)&&(a.blendColor(Se.r,Se.g,Se.b,xt),M.copy(Se),C=xt),g=D,L=!1}function Ke(D,re){D.side===Dn?Oe(a.CULL_FACE):ie(a.CULL_FACE);let Z=D.side===nn;re&&(Z=!Z),wt(Z),D.blending===Qs&&D.transparent===!1?et(kn):et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Bt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(a.SAMPLE_ALPHA_TO_COVERAGE):Oe(a.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){I!==D&&(D?a.frontFace(a.CW):a.frontFace(a.CCW),I=D)}function Rt(D){D!==Mf?(ie(a.CULL_FACE),D!==O&&(D===Lc?a.cullFace(a.BACK):D===bf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Oe(a.CULL_FACE),O=D}function Dt(D){D!==$&&(V&&a.lineWidth(D),$=D)}function Bt(D,re,Z){D?(ie(a.POLYGON_OFFSET_FILL),(Q!==re||B!==Z)&&(Q=re,B=Z,r.getReversed()&&(re=-re),a.polygonOffset(re,Z))):Oe(a.POLYGON_OFFSET_FILL)}function vt(D){D?ie(a.SCISSOR_TEST):Oe(a.SCISSOR_TEST)}function Et(D){D===void 0&&(D=a.TEXTURE0+K-1),pe!==D&&(a.activeTexture(D),pe=D)}function F(D,re,Z){Z===void 0&&(pe===null?Z=a.TEXTURE0+K-1:Z=pe);let he=ye[Z];he===void 0&&(he={type:void 0,texture:void 0},ye[Z]=he),(he.type!==D||he.texture!==re)&&(pe!==Z&&(a.activeTexture(Z),pe=Z),a.bindTexture(D,re||ae[D]),he.type=D,he.texture=re)}function Zt(){const D=ye[pe];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function it(){try{a.compressedTexImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function A(){try{a.compressedTexImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function x(){try{a.texSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function k(){try{a.texSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function H(){try{a.compressedTexSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function X(){try{a.compressedTexSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function se(){try{a.texStorage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function oe(){try{a.texStorage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function Y(){try{a.texImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function J(){try{a.texImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function le(D){return f[D]!==void 0?f[D]:a.getParameter(D)}function Ae(D,re){f[D]!==re&&(a.pixelStorei(D,re),f[D]=re)}function de(D){gt.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),gt.copy(D))}function ce(D){je.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function Ie(D,re){let Z=c.get(re);Z===void 0&&(Z=new WeakMap,c.set(re,Z));let he=Z.get(D);he===void 0&&(he=a.getUniformBlockIndex(re,D.name),Z.set(D,he))}function Ue(D,re){const he=c.get(re).get(D);l.get(re)!==he&&(a.uniformBlockBinding(re,he,D.__bindingPointIndex),l.set(re,he))}function Ge(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},f={},pe=null,ye={},d={},u=new WeakMap,p=[],v=null,m=!1,g=null,_=null,S=null,y=null,E=null,T=null,R=null,M=new Le(0,0,0),C=0,L=!1,I=null,O=null,$=null,Q=null,B=null,gt.set(0,0,a.canvas.width,a.canvas.height),je.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ie,disable:Oe,bindFramebuffer:ze,drawBuffers:Fe,useProgram:bt,setBlending:et,setMaterial:Ke,setFlipSided:wt,setCullFace:Rt,setLineWidth:Dt,setPolygonOffset:Bt,setScissorTest:vt,activeTexture:Et,bindTexture:F,unbindTexture:Zt,compressedTexImage2D:it,compressedTexImage3D:A,texImage2D:Y,texImage3D:J,pixelStorei:Ae,getParameter:le,updateUBOMapping:Ie,uniformBlockBinding:Ue,texStorage2D:se,texStorage3D:oe,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:H,compressedTexSubImage3D:X,scissor:de,viewport:ce,reset:Ge}}function Cx(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,f=new Set;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return p?new OffscreenCanvas(A,x):La("canvas")}function m(A,x,k){let H=1;const X=it(A);if((X.width>k||X.height>k)&&(H=k/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(H*X.width),oe=Math.floor(H*X.height);d===void 0&&(d=v(se,oe));const Y=x?v(se,oe):d;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(A,0,0,se,oe),Ne("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+se+"x"+oe+")."),Y}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function g(A){return A.generateMipmaps}function _(A){a.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?a.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(A,x,k,H,X,se=!1){if(A!==null){if(a[A]!==void 0)return a[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===a.RED&&(k===a.FLOAT&&(Y=a.R32F),k===a.HALF_FLOAT&&(Y=a.R16F),k===a.UNSIGNED_BYTE&&(Y=a.R8),k===a.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),k===a.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),x===a.RED_INTEGER&&(k===a.UNSIGNED_BYTE&&(Y=a.R8UI),k===a.UNSIGNED_SHORT&&(Y=a.R16UI),k===a.UNSIGNED_INT&&(Y=a.R32UI),k===a.BYTE&&(Y=a.R8I),k===a.SHORT&&(Y=a.R16I),k===a.INT&&(Y=a.R32I)),x===a.RG&&(k===a.FLOAT&&(Y=a.RG32F),k===a.HALF_FLOAT&&(Y=a.RG16F),k===a.UNSIGNED_BYTE&&(Y=a.RG8),k===a.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),k===a.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),x===a.RG_INTEGER&&(k===a.UNSIGNED_BYTE&&(Y=a.RG8UI),k===a.UNSIGNED_SHORT&&(Y=a.RG16UI),k===a.UNSIGNED_INT&&(Y=a.RG32UI),k===a.BYTE&&(Y=a.RG8I),k===a.SHORT&&(Y=a.RG16I),k===a.INT&&(Y=a.RG32I)),x===a.RGB_INTEGER&&(k===a.UNSIGNED_BYTE&&(Y=a.RGB8UI),k===a.UNSIGNED_SHORT&&(Y=a.RGB16UI),k===a.UNSIGNED_INT&&(Y=a.RGB32UI),k===a.BYTE&&(Y=a.RGB8I),k===a.SHORT&&(Y=a.RGB16I),k===a.INT&&(Y=a.RGB32I)),x===a.RGBA_INTEGER&&(k===a.UNSIGNED_BYTE&&(Y=a.RGBA8UI),k===a.UNSIGNED_SHORT&&(Y=a.RGBA16UI),k===a.UNSIGNED_INT&&(Y=a.RGBA32UI),k===a.BYTE&&(Y=a.RGBA8I),k===a.SHORT&&(Y=a.RGBA16I),k===a.INT&&(Y=a.RGBA32I)),x===a.RGB&&(k===a.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),k===a.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),k===a.UNSIGNED_INT_5_9_9_9_REV&&(Y=a.RGB9_E5),k===a.UNSIGNED_INT_10F_11F_11F_REV&&(Y=a.R11F_G11F_B10F)),x===a.RGBA){const J=se?Ia:Xe.getTransfer(X);k===a.FLOAT&&(Y=a.RGBA32F),k===a.HALF_FLOAT&&(Y=a.RGBA16F),k===a.UNSIGNED_BYTE&&(Y=J===nt?a.SRGB8_ALPHA8:a.RGBA8),k===a.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),k===a.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),k===a.UNSIGNED_SHORT_4_4_4_4&&(Y=a.RGBA4),k===a.UNSIGNED_SHORT_5_5_5_1&&(Y=a.RGB5_A1)}return(Y===a.R16F||Y===a.R32F||Y===a.RG16F||Y===a.RG32F||Y===a.RGBA16F||Y===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(A,x){let k;return A?x===null||x===Vn||x===Ar?k=a.DEPTH24_STENCIL8:x===Sn?k=a.DEPTH32F_STENCIL8:x===Tr&&(k=a.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===Ar?k=a.DEPTH_COMPONENT24:x===Sn?k=a.DEPTH_COMPONENT32F:x===Tr&&(k=a.DEPTH_COMPONENT16),k}function T(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==ft&&A.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),C(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function M(A){const x=A.target;x.removeEventListener("dispose",M),I(x)}function C(A){const x=n.get(A);if(x.__webglInit===void 0)return;const k=A.source,H=u.get(k);if(H){const X=H[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(A),Object.keys(H).length===0&&u.delete(k)}n.remove(A)}function L(A){const x=n.get(A);a.deleteTexture(x.__webglTexture);const k=A.source,H=u.get(k);delete H[x.__cacheKey],r.memory.textures--}function I(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let X=0;X<x.__webglFramebuffer[H].length;X++)a.deleteFramebuffer(x.__webglFramebuffer[H][X]);else a.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)a.deleteFramebuffer(x.__webglFramebuffer[H]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=A.textures;for(let H=0,X=k.length;H<X;H++){const se=n.get(k[H]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),r.memory.textures--),n.remove(k[H])}n.remove(A)}let O=0;function $(){O=0}function Q(){return O}function B(A){O=A}function K(){const A=O;return A>=i.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),O+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ee(A,x){const k=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const H=A.image;if(H===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+x)}function ne(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Oe(k,A,x);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+x)}function pe(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Oe(k,A,x);return}t.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+x)}function ye(A,x){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){ze(k,A,x);return}t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+x)}const _e={[Hn]:a.REPEAT,[ti]:a.CLAMP_TO_EDGE,[sl]:a.MIRRORED_REPEAT},Qe={[ft]:a.NEAREST,[Vf]:a.NEAREST_MIPMAP_NEAREST,[Ur]:a.NEAREST_MIPMAP_LINEAR,[Ut]:a.LINEAR,[ja]:a.LINEAR_MIPMAP_NEAREST,[Un]:a.LINEAR_MIPMAP_LINEAR},gt={[Xf]:a.NEVER,[Jf]:a.ALWAYS,[Yf]:a.LESS,[oc]:a.LEQUAL,[$f]:a.EQUAL,[lc]:a.GEQUAL,[Kf]:a.GREATER,[Zf]:a.NOTEQUAL};function je(A,x){if(x.type===Sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===ja||x.magFilter===Ur||x.magFilter===Un||x.minFilter===Ut||x.minFilter===ja||x.minFilter===Ur||x.minFilter===Un)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,_e[x.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,_e[x.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,_e[x.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,Qe[x.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,Qe[x.minFilter]),x.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,gt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ft||x.minFilter!==Ur&&x.minFilter!==Un||x.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function j(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let X=u.get(H);X===void 0&&(X={},u.set(H,X));const se=V(x);if(se!==A.__cacheKey){X[se]===void 0&&(X[se]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,k=!0),X[se].usedTimes++;const oe=X[A.__cacheKey];oe!==void 0&&(X[A.__cacheKey].usedTimes--,oe.usedTimes===0&&L(x)),A.__cacheKey=se,A.__webglTexture=X[se].texture}return k}function ae(A,x,k){return Math.floor(Math.floor(A/k)/x)}function ie(A,x,k,H){const se=A.updateRanges;if(se.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,x.width,x.height,k,H,x.data);else{se.sort((Ae,de)=>Ae.start-de.start);let oe=0;for(let Ae=1;Ae<se.length;Ae++){const de=se[oe],ce=se[Ae],Ie=de.start+de.count,Ue=ae(ce.start,x.width,4),Ge=ae(de.start,x.width,4);ce.start<=Ie+1&&Ue===Ge&&ae(ce.start+ce.count-1,x.width,4)===Ue?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,se[oe]=ce)}se.length=oe+1;const Y=t.getParameter(a.UNPACK_ROW_LENGTH),J=t.getParameter(a.UNPACK_SKIP_PIXELS),le=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,x.width);for(let Ae=0,de=se.length;Ae<de;Ae++){const ce=se[Ae],Ie=Math.floor(ce.start/4),Ue=Math.ceil(ce.count/4),Ge=Ie%x.width,D=Math.floor(Ie/x.width),re=Ue,Z=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(a.UNPACK_SKIP_ROWS,D),t.texSubImage2D(a.TEXTURE_2D,0,Ge,D,re,Z,k,H,x.data)}A.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,Y),t.pixelStorei(a.UNPACK_SKIP_PIXELS,J),t.pixelStorei(a.UNPACK_SKIP_ROWS,le)}}function Oe(A,x,k){let H=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=a.TEXTURE_3D);const X=j(A,x),se=x.source;t.bindTexture(H,A.__webglTexture,a.TEXTURE0+k);const oe=n.get(se);if(se.version!==oe.__version||X===!0){if(t.activeTexture(a.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const Z=Xe.getPrimaries(Xe.workingColorSpace),he=x.colorSpace===yi?null:Xe.getPrimaries(x.colorSpace),xe=x.colorSpace===yi||Z===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment);let J=m(x.image,!1,i.maxTextureSize);J=Zt(x,J);const le=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type);let de=y(x.internalFormat,le,Ae,x.normalized,x.colorSpace,x.isVideoTexture);je(H,x);let ce;const Ie=x.mipmaps,Ue=x.isVideoTexture!==!0,Ge=oe.__version===void 0||X===!0,D=se.dataReady,re=T(x,J);if(x.isDepthTexture)de=E(x.format===gs,x.type),Ge&&(Ue?t.texStorage2D(a.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(a.TEXTURE_2D,0,de,J.width,J.height,0,le,Ae,null));else if(x.isDataTexture)if(Ie.length>0){Ue&&Ge&&t.texStorage2D(a.TEXTURE_2D,re,de,Ie[0].width,Ie[0].height);for(let Z=0,he=Ie.length;Z<he;Z++)ce=Ie[Z],Ue?D&&t.texSubImage2D(a.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Ae,ce.data):t.texImage2D(a.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Ae,ce.data);x.generateMipmaps=!1}else Ue?(Ge&&t.texStorage2D(a.TEXTURE_2D,re,de,J.width,J.height),D&&ie(x,J,le,Ae)):t.texImage2D(a.TEXTURE_2D,0,de,J.width,J.height,0,le,Ae,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ue&&Ge&&t.texStorage3D(a.TEXTURE_2D_ARRAY,re,de,Ie[0].width,Ie[0].height,J.depth);for(let Z=0,he=Ie.length;Z<he;Z++)if(ce=Ie[Z],x.format!==wn)if(le!==null)if(Ue){if(D)if(x.layerUpdates.size>0){const xe=fh(ce.width,ce.height,x.format,x.type);for(const te of x.layerUpdates){const Te=ce.data.subarray(te*xe/ce.data.BYTES_PER_ELEMENT,(te+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Z,0,0,te,ce.width,ce.height,1,le,Te)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Z,0,0,0,ce.width,ce.height,J.depth,le,Ae,ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Z,de,ce.width,ce.height,J.depth,0,le,Ae,ce.data)}else{Ue&&Ge&&t.texStorage2D(a.TEXTURE_2D,re,de,Ie[0].width,Ie[0].height);for(let Z=0,he=Ie.length;Z<he;Z++)ce=Ie[Z],x.format!==wn?le!==null?Ue?D&&t.compressedTexSubImage2D(a.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(a.TEXTURE_2D,Z,de,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&t.texSubImage2D(a.TEXTURE_2D,Z,0,0,ce.width,ce.height,le,Ae,ce.data):t.texImage2D(a.TEXTURE_2D,Z,de,ce.width,ce.height,0,le,Ae,ce.data)}else if(x.isDataArrayTexture)if(Ue){if(Ge&&t.texStorage3D(a.TEXTURE_2D_ARRAY,re,de,J.width,J.height,J.depth),D)if(x.layerUpdates.size>0){const Z=fh(J.width,J.height,x.format,x.type);for(const he of x.layerUpdates){const xe=J.data.subarray(he*Z/J.data.BYTES_PER_ELEMENT,(he+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,le,Ae,xe)}x.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,Ae,J.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,le,Ae,J.data);else if(x.isData3DTexture)Ue?(Ge&&t.texStorage3D(a.TEXTURE_3D,re,de,J.width,J.height,J.depth),D&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,Ae,J.data)):t.texImage3D(a.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,le,Ae,J.data);else if(x.isFramebufferTexture){if(Ge)if(Ue)t.texStorage2D(a.TEXTURE_2D,re,de,J.width,J.height);else{let Z=J.width,he=J.height;for(let xe=0;xe<re;xe++)t.texImage2D(a.TEXTURE_2D,xe,de,Z,he,0,le,Ae,null),Z>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in a){const Z=a.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),f.add(x),Z.onpaint=he=>{const xe=he.changedElements;for(const te of f)xe.includes(te.image)&&(te.needsUpdate=!0)},Z.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,J);else{const xe=a.RGBA,te=a.RGBA,Te=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,xe,te,Te,J)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Ue&&Ge){const Z=it(Ie[0]);t.texStorage2D(a.TEXTURE_2D,re,de,Z.width,Z.height)}for(let Z=0,he=Ie.length;Z<he;Z++)ce=Ie[Z],Ue?D&&t.texSubImage2D(a.TEXTURE_2D,Z,0,0,le,Ae,ce):t.texImage2D(a.TEXTURE_2D,Z,de,le,Ae,ce);x.generateMipmaps=!1}else if(Ue){if(Ge){const Z=it(J);t.texStorage2D(a.TEXTURE_2D,re,de,Z.width,Z.height)}D&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,le,Ae,J)}else t.texImage2D(a.TEXTURE_2D,0,de,le,Ae,J);g(x)&&_(H),oe.__version=se.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ze(A,x,k){if(x.image.length!==6)return;const H=j(A,x),X=x.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+k);const se=n.get(X);if(X.version!==se.__version||H===!0){t.activeTexture(a.TEXTURE0+k);const oe=Xe.getPrimaries(Xe.workingColorSpace),Y=x.colorSpace===yi?null:Xe.getPrimaries(x.colorSpace),J=x.colorSpace===yi||oe===Y?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,Ae=x.image[0]&&x.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!le&&!Ae?de[te]=m(x.image[te],!0,i.maxCubemapSize):de[te]=Ae?x.image[te].image:x.image[te],de[te]=Zt(x,de[te]);const ce=de[0],Ie=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type),Ge=y(x.internalFormat,Ie,Ue,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,re=se.__version===void 0||H===!0,Z=X.dataReady;let he=T(x,ce);je(a.TEXTURE_CUBE_MAP,x);let xe;if(le){D&&re&&t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Ge,ce.width,ce.height);for(let te=0;te<6;te++){xe=de[te].mipmaps;for(let Te=0;Te<xe.length;Te++){const Se=xe[Te];x.format!==wn?Ie!==null?D?Z&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Se.width,Se.height,Ie,Se.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Ge,Se.width,Se.height,0,Se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Se.width,Se.height,Ie,Ue,Se.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,Ge,Se.width,Se.height,0,Ie,Ue,Se.data)}}}else{if(xe=x.mipmaps,D&&re){xe.length>0&&he++;const te=it(de[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,he,Ge,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){D?Z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Ie,Ue,de[te].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,de[te].width,de[te].height,0,Ie,Ue,de[te].data);for(let Te=0;Te<xe.length;Te++){const xt=xe[Te].image[te].image;D?Z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,xt.width,xt.height,Ie,Ue,xt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Ge,xt.width,xt.height,0,Ie,Ue,xt.data)}}else{D?Z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,Ue,de[te]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ge,Ie,Ue,de[te]);for(let Te=0;Te<xe.length;Te++){const Se=xe[Te];D?Z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,Ie,Ue,Se.image[te]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,Ge,Ie,Ue,Se.image[te])}}}g(x)&&_(a.TEXTURE_CUBE_MAP),se.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Fe(A,x,k,H,X,se){const oe=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),J=y(k.internalFormat,oe,Y,k.normalized,k.colorSpace),le=n.get(x),Ae=n.get(k);if(Ae.__renderTarget=x,!le.__hasExternalTextures){const de=Math.max(1,x.width>>se),ce=Math.max(1,x.height>>se);X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?t.texImage3D(X,se,J,de,ce,x.depth,0,oe,Y,null):t.texImage2D(X,se,J,de,ce,0,oe,Y,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),Et(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,H,X,Ae.__webglTexture,0,vt(x)):(X===a.TEXTURE_2D||X>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,H,X,Ae.__webglTexture,se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function bt(A,x,k){if(a.bindRenderbuffer(a.RENDERBUFFER,A),x.depthBuffer){const H=x.depthTexture,X=H&&H.isDepthTexture?H.type:null,se=E(x.stencilBuffer,X),oe=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Et(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt(x),se,x.width,x.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt(x),se,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,se,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,oe,a.RENDERBUFFER,A)}else{const H=x.textures;for(let X=0;X<H.length;X++){const se=H[X],oe=s.convert(se.format,se.colorSpace),Y=s.convert(se.type),J=y(se.internalFormat,oe,Y,se.normalized,se.colorSpace);Et(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt(x),J,x.width,x.height):k?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt(x),J,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,J,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function qe(A,x,k){const H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=n.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),je(a.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),Ae=s.convert(x.depthTexture.type);let de;x.depthTexture.format===ii?de=a.DEPTH_COMPONENT24:x.depthTexture.format===gs&&(de=a.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,x.width,x.height,0,le,Ae,null)}}else ee(x.depthTexture,0);const se=X.__webglTexture,oe=vt(x),Y=H?a.TEXTURE_CUBE_MAP_POSITIVE_X+k:a.TEXTURE_2D,J=x.depthTexture.format===gs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(x.depthTexture.format===ii)Et(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,Y,se,0,oe):a.framebufferTexture2D(a.FRAMEBUFFER,J,Y,se,0);else if(x.depthTexture.format===gs)Et(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,J,Y,se,0,oe):a.framebufferTexture2D(a.FRAMEBUFFER,J,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(A){const x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let H=0;H<6;H++)qe(x.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?qe(x.__webglFramebuffer[0],A,0):qe(x.__webglFramebuffer,A,0)}else if(k){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=a.createRenderbuffer(),bt(x.__webglDepthbuffer[H],A,!1);else{const X=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[H];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,se)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=a.createRenderbuffer(),bt(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,se)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function et(A,x,k){const H=n.get(A);x!==void 0&&Fe(H.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),k!==void 0&&ot(A)}function Ke(A){const x=A.texture,k=n.get(A),H=n.get(x);A.addEventListener("dispose",M);const X=A.textures,se=A.isWebGLCubeRenderTarget===!0,oe=X.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=a.createTexture()),H.__version=x.version,r.memory.textures++),se){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let J=0;J<x.mipmaps.length;J++)k.__webglFramebuffer[Y][J]=a.createFramebuffer()}else k.__webglFramebuffer[Y]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)k.__webglFramebuffer[Y]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(oe)for(let Y=0,J=X.length;Y<J;Y++){const le=n.get(X[Y]);le.__webglTexture===void 0&&(le.__webglTexture=a.createTexture(),r.memory.textures++)}if(A.samples>0&&Et(A)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){const J=X[Y];k.__webglColorRenderbuffer[Y]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const le=s.convert(J.format,J.colorSpace),Ae=s.convert(J.type),de=y(J.internalFormat,le,Ae,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),ce=vt(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,de,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Y,a.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),bt(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){t.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture),je(a.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Fe(k.__webglFramebuffer[Y][J],A,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Fe(k.__webglFramebuffer[Y],A,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);g(x)&&_(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,J=X.length;Y<J;Y++){const le=X[Y],Ae=n.get(le);let de=a.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),je(de,le),Fe(k.__webglFramebuffer,A,le,a.COLOR_ATTACHMENT0+Y,de,0),g(le)&&_(de)}t.unbindTexture()}else{let Y=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Y,H.__webglTexture),je(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)Fe(k.__webglFramebuffer[J],A,x,a.COLOR_ATTACHMENT0,Y,J);else Fe(k.__webglFramebuffer,A,x,a.COLOR_ATTACHMENT0,Y,0);g(x)&&_(Y),t.unbindTexture()}A.depthBuffer&&ot(A)}function wt(A){const x=A.textures;for(let k=0,H=x.length;k<H;k++){const X=x[k];if(g(X)){const se=S(A),oe=n.get(X).__webglTexture;t.bindTexture(se,oe),_(se),t.unbindTexture()}}}const Rt=[],Dt=[];function Bt(A){if(A.samples>0){if(Et(A)===!1){const x=A.textures,k=A.width,H=A.height;let X=a.COLOR_BUFFER_BIT;const se=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=n.get(A),Y=x.length>1;if(Y)for(let le=0;le<x.length;le++)t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=a.STENCIL_BUFFER_BIT)),Y){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ae=n.get(x[le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ae,0)}a.blitFramebuffer(0,0,k,H,0,0,k,H,X,a.NEAREST),l===!0&&(Rt.length=0,Dt.length=0,Rt.push(a.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(se),Dt.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Dt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<x.length;le++){t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const Ae=n.get(x[le]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,Ae,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function vt(A){return Math.min(i.maxSamples,A.samples)}function Et(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(A){const x=r.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Zt(A,x){const k=A.colorSpace,H=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Pa&&k!==yi&&(Xe.getTransfer(k)===nt?(H!==wn||X!==dn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",k)),x}function it(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=ee,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=ye,this.rebindTextures=et,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rx(a,e){function t(n,i=yi){let s;const r=Xe.getTransfer(i);if(n===dn)return a.UNSIGNED_BYTE;if(n===tc)return a.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return a.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===sd)return a.BYTE;if(n===rd)return a.SHORT;if(n===Tr)return a.UNSIGNED_SHORT;if(n===ec)return a.INT;if(n===Vn)return a.UNSIGNED_INT;if(n===Sn)return a.FLOAT;if(n===Wt)return a.HALF_FLOAT;if(n===ld)return a.ALPHA;if(n===cd)return a.RGB;if(n===wn)return a.RGBA;if(n===ii)return a.DEPTH_COMPONENT;if(n===gs)return a.DEPTH_STENCIL;if(n===ic)return a.RED;if(n===sc)return a.RED_INTEGER;if(n===Ms)return a.RG;if(n===rc)return a.RG_INTEGER;if(n===ac)return a.RGBA_INTEGER;if(n===Ma||n===ba||n===_a||n===Sa)if(r===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===al||n===ol||n===ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===hl||n===dl||n===ul||n===fl||n===Ca||n===pl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cl||n===hl)return r===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return s.COMPRESSED_R11_EAC;if(n===fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return s.COMPRESSED_RG11_EAC;if(n===pl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===vl||n===xl||n===yl||n===Ml||n===bl||n===_l||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return r===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Pl||n===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Rl)return r===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Dl||n===Ra||n===Fl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:Px,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends ws{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null;const v=typeof XRWebGLBinding<"u",m=new Lx,g={},_=t.getContextAttributes();let S=null,y=null;const E=[],T=[],R=new Ee;let M=null;const C=new hn;C.viewport=new mt;const L=new hn;L.viewport=new mt;const I=[C,L],O=new zp;let $=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=E[j];return ae===void 0&&(ae=new oo,E[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=E[j];return ae===void 0&&(ae=new oo,E[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=E[j];return ae===void 0&&(ae=new oo,E[j]=ae),ae.getHandSpace()};function B(j){const ae=T.indexOf(j.inputSource);if(ae===-1)return;const ie=E[ae];ie!==void 0&&(ie.update(j.inputSource,j.frame,c||r),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",V);for(let j=0;j<E.length;j++){const ae=T[j];ae!==null&&(T[j]=null,E[j].disconnect(ae))}$=null,Q=null,m.reset();for(const j in g)delete g[j];e.setRenderTarget(S),u=null,d=null,f=null,i=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",K),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Oe=null,ze=null;_.depth&&(ze=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=_.stencil?gs:ii,Oe=_.stencil?Ar:Vn);const Fe={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ot(d.textureWidth,d.textureHeight,{format:wn,type:dn,depthTexture:new bs(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ot(u.framebufferWidth,u.framebufferHeight,{format:wn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(j){for(let ae=0;ae<j.removed.length;ae++){const ie=j.removed[ae],Oe=T.indexOf(ie);Oe>=0&&(T[Oe]=null,E[Oe].disconnect(ie))}for(let ae=0;ae<j.added.length;ae++){const ie=j.added[ae];let Oe=T.indexOf(ie);if(Oe===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=T.length){T.push(ie),Oe=Fe;break}else if(T[Fe]===null){T[Fe]=ie,Oe=Fe;break}if(Oe===-1)break}const ze=E[Oe];ze&&ze.connect(ie)}}const ee=new U,ne=new U;function pe(j,ae,ie){ee.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Oe=ee.distanceTo(ne),ze=ae.projectionMatrix.elements,Fe=ie.projectionMatrix.elements,bt=ze[14]/(ze[10]-1),qe=ze[14]/(ze[10]+1),ot=(ze[9]+1)/ze[5],et=(ze[9]-1)/ze[5],Ke=(ze[8]-1)/ze[0],wt=(Fe[8]+1)/Fe[0],Rt=bt*Ke,Dt=bt*wt,Bt=Oe/(-Ke+wt),vt=Bt*-Ke;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(Bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ze[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Et=bt+Bt,F=qe+Bt,Zt=Rt-vt,it=Dt+(Oe-vt),A=ot*qe/F*Et,x=et*qe/F*Et;j.projectionMatrix.makePerspective(Zt,it,A,x,Et,F),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ae=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),O.near=L.near=C.near=ae,O.far=L.far=C.far=ie,($!==O.near||Q!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),$=O.near,Q=O.far),O.layers.mask=j.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Oe=j.parent,ze=O.cameras;ye(O,Oe);for(let Fe=0;Fe<ze.length;Fe++)ye(ze[Fe],Oe);ze.length===2?pe(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),_e(j,O,Oe)};function _e(j,ae,ie){ie===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ol*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(j){return g[j]};let Qe=null;function gt(j,ae){if(h=ae.getViewerPose(c||r),p=ae,h!==null){const ie=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Oe=!1;ie.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let qe=0;qe<ie.length;qe++){const ot=ie[qe];let et=null;if(u!==null)et=u.getViewport(ot);else{const wt=f.getViewSubImage(d,ot);et=wt.viewport,qe===0&&(e.setRenderTargetTextures(y,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(y))}let Ke=I[qe];Ke===void 0&&(Ke=new hn,Ke.layers.enable(qe),Ke.viewport=new mt,I[qe]=Ke),Ke.matrix.fromArray(ot.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ot.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(et.x,et.y,et.width,et.height),qe===0&&(O.matrix.copy(Ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(Ke)}const ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const qe=f.getDepthInformation(ie[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,i.renderState)}if(ze&&ze.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let qe=0;qe<ie.length;qe++){const ot=ie[qe].camera;if(ot){let et=g[ot];et||(et=new xd,g[ot]=et);const Ke=f.getCameraImage(ot);et.sourceTexture=Ke}}}}for(let ie=0;ie<E.length;ie++){const Oe=T[ie],ze=E[ie];Oe!==null&&ze!==void 0&&ze.update(Oe,ae,c||r)}Qe&&Qe(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}const je=new Sd;je.setAnimationLoop(gt),this.setAnimationLoop=function(j){Qe=j},this.dispose=function(){}}}const Fx=new at,Pd=new ke;Pd.set(-1,0,0,0,1,0,0,0,1);function Ux(a,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,yd(a)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===nn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===nn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=e.get(g),S=_.envMap,y=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nx(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const T=E.program;n.uniformBlockBinding(y,T)}function c(y,E){let T=i[y.id];T===void 0&&(m(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",_));const R=E.program;n.updateUBOMapping(y,R);const M=e.render.frame;s[y.id]!==M&&(d(y),s[y.id]=M)}function h(y){const E=f();y.__bindingPointIndex=E;const T=a.createBuffer(),R=y.__size,M=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,R,M),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,T),T}function f(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=i[y.id],T=y.uniforms,R=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let M=0,C=T.length;M<C;M++){const L=T[M];if(Array.isArray(L))for(let I=0,O=L.length;I<O;I++)u(L[I],M,I,R);else u(L,M,0,R)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function u(y,E,T,R){if(v(y,E,T,R)===!0){const M=y.__offset,C=y.value;if(Array.isArray(C)){let L=0;for(let I=0;I<C.length;I++){const O=C[I],$=g(O);p(O,y.__data,L),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(C,y.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,M,y.__data)}}function p(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function v(y,E,T,R){const M=y.value,C=E+"_"+T;if(R[C]===void 0)return typeof M=="number"||typeof M=="boolean"?R[C]=M:ArrayBuffer.isView(M)?R[C]=M.slice():R[C]=M.clone(),!0;{const L=R[C];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return R[C]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(L.equals(M)===!1)return L.copy(M),!0}}return!1}function m(y){const E=y.uniforms;let T=0;const R=16;for(let C=0,L=E.length;C<L;C++){const I=Array.isArray(E[C])?E[C]:[E[C]];for(let O=0,$=I.length;O<$;O++){const Q=I[O],B=Array.isArray(Q.value)?Q.value:[Q.value];for(let K=0,V=B.length;K<V;K++){const ee=B[K],ne=g(ee),pe=T%R,ye=pe%ne.boundary,_e=pe+ye;T+=ye,_e!==0&&R-_e<ne.storage&&(T+=R-_e),Q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=ne.storage}}}const M=T%R;return M>0&&(T+=R-M),y.__size=T,y.__cache={},this}function g(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",y),E}function _(y){const E=y.target;E.removeEventListener("dispose",_);const T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),a.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function S(){for(const y in i)a.deleteBuffer(i[y]);r=[],i={},s={}}return{bind:l,update:c,dispose:S}}const Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function kx(){return Pn===null&&(Pn=new gd(Ox,16,16,Ms,Wt),Pn.name="DFG_LUT",Pn.minFilter=Ut,Pn.magFilter=Ut,Pn.wrapS=ti,Pn.wrapT=ti,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class Bx{constructor(e={}){const{canvas:t=jf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=dn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const v=u,m=new Set([ac,rc,sc]),g=new Set([dn,Vn,Tr,Ar,tc,nc]),_=new Uint32Array(4),S=new Int32Array(4),y=new U;let E=null,T=null;const R=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,O=null,$=null,Q=null,B=null;this._outputColorSpace=Mt;let K=0,V=0,ee=null,ne=-1,pe=null;const ye=new mt,_e=new mt;let Qe=null;const gt=new Le(0);let je=0,j=t.width,ae=t.height,ie=1,Oe=null,ze=null;const Fe=new mt(0,0,j,ae),bt=new mt(0,0,j,ae);let qe=!1;const ot=new uc;let et=!1,Ke=!1;const wt=new at,Rt=new U,Dt=new mt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Et(){return ee===null?ie:1}let F=n;function Zt(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",Tn,!1),F===null){const N="webgl2";if(F=Zt(N,b),F===null)throw Zt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ye("WebGLRenderer: "+b.message),b}let it,A,x,k,H,X,se,oe,Y,J,le,Ae,de,ce,Ie,Ue,Ge,D,re,Z,he,xe,te;function Te(){it=new k0(F),it.init(),he=new Rx(F,it),A=new P0(F,it,e,he),x=new Ax(F,it),A.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),$=F.createFramebuffer(),Q=F.createFramebuffer(),B=F.createFramebuffer(),k=new G0(F),H=new fx,X=new Cx(F,it,x,H,A,he,k),se=new O0(L),oe=new qp(F),xe=new C0(F,oe),Y=new B0(F,oe,k,xe),J=new V0(F,Y,oe,xe,k),D=new H0(F,A,X),Ie=new I0(H),le=new ux(L,se,it,A,xe,Ie),Ae=new Ux(L,H),de=new mx,ce=new bx(it),Ge=new A0(L,se,x,J,p,l),Ue=new Tx(L,J,A),te=new Nx(F,k,A,x),re=new R0(F,it,k),Z=new z0(F,it,k),k.programs=le.programs,L.capabilities=A,L.extensions=it,L.properties=H,L.renderLists=de,L.shadowMap=Ue,L.state=x,L.info=k}Te(),v!==dn&&(C=new q0(v,t.width,t.height,o,i,s));const Se=new Dx(L,F);this.xr=Se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(j,ae,!1))},this.getSize=function(b){return b.set(j,ae)},this.setSize=function(b,N,W=!0){if(Se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ae=N,t.width=Math.floor(b*ie),t.height=Math.floor(N*ie),W===!0&&(t.style.width=b+"px",t.style.height=N+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(j*ie,ae*ie).floor()},this.setDrawingBufferSize=function(b,N,W){j=b,ae=N,ie=W,t.width=Math.floor(b*W),t.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(v===dn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ye)},this.getViewport=function(b){return b.copy(Fe)},this.setViewport=function(b,N,W,z){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,N,W,z),x.viewport(ye.copy(Fe).multiplyScalar(ie).round())},this.getScissor=function(b){return b.copy(bt)},this.setScissor=function(b,N,W,z){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,N,W,z),x.scissor(_e.copy(bt).multiplyScalar(ie).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){x.setScissorTest(qe=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){ze=b},this.getClearColor=function(b){return b.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,W=!0){let z=0;if(b){let G=!1;if(ee!==null){const ve=ee.texture.format;G=m.has(ve)}if(G){const ve=ee.texture.type,be=g.has(ve),me=Ge.getClearColor(),we=Ge.getClearAlpha(),Ce=me.r,He=me.g,We=me.b;be?(_[0]=Ce,_[1]=He,_[2]=We,_[3]=we,F.clearBufferuiv(F.COLOR,0,_)):(S[0]=Ce,S[1]=He,S[2]=We,S[3]=we,F.clearBufferiv(F.COLOR,0,S))}else z|=F.COLOR_BUFFER_BIT}N&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",Tn,!1),Ge.dispose(),de.dispose(),ce.dispose(),H.dispose(),se.dispose(),J.dispose(),xe.dispose(),te.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",bc),Se.removeEventListener("sessionend",_c),Ai.stop()};function xt(b){b.preventDefault(),Da("WebGLRenderer: Context Lost."),I=!0}function ht(){Da("WebGLRenderer: Context Restored."),I=!1;const b=k.autoReset,N=Ue.enabled,W=Ue.autoUpdate,z=Ue.needsUpdate,G=Ue.type;Te(),k.autoReset=b,Ue.enabled=N,Ue.autoUpdate=W,Ue.needsUpdate=z,Ue.type=G}function Tn(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function An(b){const N=b.target;N.removeEventListener("dispose",An),Od(N)}function Od(b){kd(b),H.remove(b)}function kd(b){const N=H.get(b).programs;N!==void 0&&(N.forEach(function(W){le.releaseProgram(W)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,z,G,ve){N===null&&(N=Bt);const be=G.isMesh&&G.matrixWorld.determinantAffine()<0,me=Gd(b,N,W,z,G);x.setMaterial(z,be);let we=W.index,Ce=1;if(z.wireframe===!0){if(we=Y.getWireframeAttribute(W),we===void 0)return;Ce=2}const He=W.drawRange,We=W.attributes.position;let Re=He.start*Ce,st=(He.start+He.count)*Ce;ve!==null&&(Re=Math.max(Re,ve.start*Ce),st=Math.min(st,(ve.start+ve.count)*Ce)),we!==null?(Re=Math.max(Re,0),st=Math.min(st,we.count)):We!=null&&(Re=Math.max(Re,0),st=Math.min(st,We.count));const _t=st-Re;if(_t<0||_t===1/0)return;xe.setup(G,z,me,W,we);let yt,lt=re;if(we!==null&&(yt=oe.get(we),lt=Z,lt.setIndex(yt)),G.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Et()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(G.isLine){let zt=z.linewidth;zt===void 0&&(zt=1),x.setLineWidth(zt*Et()),G.isLineSegments?lt.setMode(F.LINES):G.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else G.isPoints?lt.setMode(F.POINTS):G.isSprite&&lt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(it.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const zt=G._multiDrawStarts,Me=G._multiDrawCounts,sn=G._multiDrawCount,Ze=we?oe.get(we).bytesPerElement:1,fn=H.get(z).currentProgram.getUniforms();for(let Cn=0;Cn<sn;Cn++)fn.setValue(F,"_gl_DrawID",Cn),lt.render(zt[Cn]/Ze,Me[Cn])}else if(G.isInstancedMesh)lt.renderInstances(Re,_t,G.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,zt);lt.renderInstances(Re,_t,Me)}else lt.render(Re,_t)};function Mc(b,N,W){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=nn,b.needsUpdate=!0,Dr(b,N,W),b.side=Si,b.needsUpdate=!0,Dr(b,N,W),b.side=Dn):Dr(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),T=ce.get(W),T.init(N),M.push(T),W.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const me=ve[be];Mc(me,W,G),z.add(me)}else Mc(ve,W,G),z.add(ve)}),T=M.pop(),z},this.compileAsync=function(b,N,W=null){const z=this.compile(b,N,W);return new Promise(G=>{function ve(){if(z.forEach(function(be){H.get(be).currentProgram.isReady()&&z.delete(be)}),z.size===0){G(b);return}setTimeout(ve,10)}it.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let $a=null;function Bd(b){$a&&$a(b)}function bc(){Ai.stop()}function _c(){Ai.start()}const Ai=new Sd;Ai.setAnimationLoop(Bd),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(b){$a=b,Se.setAnimationLoop(b),b===null?Ai.stop():Ai.start()},Se.addEventListener("sessionstart",bc),Se.addEventListener("sessionend",_c),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(b,N);const W=Se.enabled===!0&&Se.isPresenting===!0,z=C!==null&&(ee===null||W)&&C.begin(L,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(N),N=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,N,ee),T=ce.get(b,M.length),T.init(N),T.state.textureUnits=X.getTextureUnits(),M.push(T),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(wt,Nn,N.reversedDepth),Ke=this.localClippingEnabled,et=Ie.init(this.clippingPlanes,Ke),E=de.get(b,R.length),E.init(),R.push(E),Se.enabled===!0&&Se.isPresenting===!0){const be=L.xr.getDepthSensingMesh();be!==null&&Ka(be,N,-1/0,L.sortObjects)}Ka(b,N,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(Oe,ze,N.reversedDepth),vt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,vt&&Ge.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Ie.beginShadows();const G=T.state.shadowsArray;if(Ue.render(G,b,N),et===!0&&Ie.endShadows(),(z&&C.hasRenderPass())===!1){const be=E.opaque,me=E.transmissive;if(T.setupLights(),N.isArrayCamera){const we=N.cameras;if(me.length>0)for(let Ce=0,He=we.length;Ce<He;Ce++){const We=we[Ce];wc(be,me,b,We)}vt&&Ge.render(b);for(let Ce=0,He=we.length;Ce<He;Ce++){const We=we[Ce];Sc(E,b,We,We.viewport)}}else me.length>0&&wc(be,me,b,N),vt&&Ge.render(b),Sc(E,b,N)}ee!==null&&V===0&&(X.updateMultisampleRenderTarget(ee),X.updateRenderTargetMipmap(ee)),z&&C.end(L),b.isScene===!0&&b.onAfterRender(L,b,N),xe.resetDefaultState(),ne=-1,pe=null,M.pop(),M.length>0?(T=M[M.length-1],X.setTextureUnits(T.state.textureUnits),et===!0&&Ie.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,O!==null&&O.renderEnd()};function Ka(b,N,W,z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ot.intersectsSprite(b)){z&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);const be=J.update(b),me=b.material;me.visible&&E.push(b,be,me,W,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ot.intersectsObject(b))){const be=J.update(b),me=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Dt.copy(be.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(me)){const we=be.groups;for(let Ce=0,He=we.length;Ce<He;Ce++){const We=we[Ce],Re=me[We.materialIndex];Re&&Re.visible&&E.push(b,be,Re,W,Dt.z,We)}}else me.visible&&E.push(b,be,me,W,Dt.z,null)}}const ve=b.children;for(let be=0,me=ve.length;be<me;be++)Ka(ve[be],N,W,z)}function Sc(b,N,W,z){const{opaque:G,transmissive:ve,transparent:be}=b;T.setupLightsView(W),et===!0&&Ie.setGlobalState(L.clippingPlanes,W),z&&x.viewport(ye.copy(z)),G.length>0&&Lr(G,N,W),ve.length>0&&Lr(ve,N,W),be.length>0&&Lr(be,N,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function wc(b,N,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Re=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Ot(1,1,{generateMipmaps:!0,type:Re?Wt:dn,minFilter:Un,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const ve=T.state.transmissionRenderTarget[z.id],be=z.viewport||ye;ve.setSize(be.z*L.transmissionResolutionScale,be.w*L.transmissionResolutionScale);const me=L.getRenderTarget(),we=L.getActiveCubeFace(),Ce=L.getActiveMipmapLevel();L.setRenderTarget(ve),L.getClearColor(gt),je=L.getClearAlpha(),je<1&&L.setClearColor(16777215,.5),L.clear(),vt&&Ge.render(W);const He=L.toneMapping;L.toneMapping=Bn;const We=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),et===!0&&Ie.setGlobalState(L.clippingPlanes,z),Lr(b,W,z),X.updateMultisampleRenderTarget(ve),X.updateRenderTargetMipmap(ve),it.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,_t=N.length;st<_t;st++){const yt=N[st],{object:lt,geometry:zt,material:Me,group:sn}=yt;if(Me.side===Dn&&lt.layers.test(z.layers)){const Ze=Me.side;Me.side=nn,Me.needsUpdate=!0,Ec(lt,W,z,zt,Me,sn),Me.side=Ze,Me.needsUpdate=!0,Re=!0}}Re===!0&&(X.updateMultisampleRenderTarget(ve),X.updateRenderTargetMipmap(ve))}L.setRenderTarget(me,we,Ce),L.setClearColor(gt,je),We!==void 0&&(z.viewport=We),L.toneMapping=He}function Lr(b,N,W){const z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ve=b.length;G<ve;G++){const be=b[G],{object:me,geometry:we,group:Ce}=be;let He=be.material;He.allowOverride===!0&&z!==null&&(He=z),me.layers.test(W.layers)&&Ec(me,N,W,we,He,Ce)}}function Ec(b,N,W,z,G,ve){b.onBeforeRender(L,N,W,z,G,ve),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(L,N,W,z,b,ve),G.transparent===!0&&G.side===Dn&&G.forceSinglePass===!1?(G.side=nn,G.needsUpdate=!0,L.renderBufferDirect(W,N,z,G,b,ve),G.side=Si,G.needsUpdate=!0,L.renderBufferDirect(W,N,z,G,b,ve),G.side=Dn):L.renderBufferDirect(W,N,z,G,b,ve),b.onAfterRender(L,N,W,z,G,ve)}function Dr(b,N,W){N.isScene!==!0&&(N=Bt);const z=H.get(b),G=T.state.lights,ve=T.state.shadowsArray,be=G.state.version,me=le.getParameters(b,G.state,ve,N,W,T.state.lightProbeGridArray),we=le.getProgramCacheKey(me);let Ce=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=se.get(b.envMap||z.environment,He),z.envMapRotation=z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",An),Ce=new Map,z.programs=Ce);let We=Ce.get(we);if(We!==void 0){if(z.currentProgram===We&&z.lightsStateVersion===be)return Ac(b,me),We}else me.uniforms=le.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,W,me),b.onBeforeCompile(me,L),We=le.acquireProgram(me,we),Ce.set(we,We),z.uniforms=me.uniforms;const Re=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=Ie.uniform),Ac(b,me),z.needsLights=Vd(b),z.lightsStateVersion=be,z.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=We,z.uniformsList=null,We}function Tc(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=wa.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Ac(b,N){const W=H.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function zd(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let W=0,z=b.length;W<z;W++){const G=b[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Gd(b,N,W,z,G){N.isScene!==!0&&(N=Bt),X.resetTextureUnits();const ve=N.fog,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,me=ee===null?L.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xe.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ce=se.get(z.envMap||be,we),He=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let yt=Bn;z.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(yt=L.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,zt=lt!==void 0?lt.length:0,Me=H.get(z),sn=T.state.lights;if(et===!0&&(Ke===!0||b!==pe)){const dt=b===pe&&z.id===ne;Ie.setState(z,b,dt)}let Ze=!1;z.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==sn.state.version||Me.outputColorSpace!==me||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Ce||z.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ie.numPlanes||Me.numIntersection!==Ie.numIntersection)||Me.vertexAlphas!==He||Me.vertexTangents!==We||Me.morphTargets!==Re||Me.morphNormals!==st||Me.morphColors!==_t||Me.toneMapping!==yt||Me.morphTargetsCount!==zt||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Me.__version=z.version);let fn=Me.currentProgram;Ze===!0&&(fn=Dr(z,N,G),O&&z.isNodeMaterial&&O.onUpdateProgram(z,fn,Me));let Cn=!1,ri=!1,Cs=!1;const ct=fn.getUniforms(),St=Me.uniforms;if(x.useProgram(fn.program)&&(Cn=!0,ri=!0,Cs=!0),z.id!==ne&&(ne=z.id,ri=!0),Me.needsLights){const dt=zd(T.state.lightProbeGridArray,G);Me.lightProbeGrid!==dt&&(Me.lightProbeGrid=dt,ri=!0)}if(Cn||pe!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",b.projectionMatrix),ct.setValue(F,"viewMatrix",b.matrixWorldInverse);const oi=ct.map.cameraPosition;oi!==void 0&&oi.setValue(F,Rt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),pe!==b&&(pe=b,ri=!0,Cs=!0)}if(Me.needsLights&&(sn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",sn.state.directionalShadowMap,X),sn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",sn.state.spotShadowMap,X),sn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",sn.state.pointShadowMap,X)),G.isSkinnedMesh){ct.setOptional(F,G,"bindMatrix"),ct.setOptional(F,G,"bindMatrixInverse");const dt=G.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(F,"boneTexture",dt.boneTexture,X))}G.isBatchedMesh&&(ct.setOptional(F,G,"batchingTexture"),ct.setValue(F,"batchingTexture",G._matricesTexture,X),ct.setOptional(F,G,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",G._indirectTexture,X),ct.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",G._colorsTexture,X));const ai=W.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&D.update(G,W,fn),(ri||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,ct.setValue(F,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=kx()),ri){if(ct.setValue(F,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&Hd(St,Cs),ve&&z.fog===!0&&Ae.refreshFogUniforms(St,ve),Ae.refreshMaterialUniforms(St,z,ie,ae,T.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const dt=Me.lightProbeGrid;St.probesSH.value=dt.texture,St.probesMin.value.copy(dt.boundingBox.min),St.probesMax.value.copy(dt.boundingBox.max),St.probesResolution.value.copy(dt.resolution)}wa.upload(F,Tc(Me),St,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(wa.upload(F,Tc(Me),St,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(F,"center",G.center),ct.setValue(F,"modelViewMatrix",G.modelViewMatrix),ct.setValue(F,"normalMatrix",G.normalMatrix),ct.setValue(F,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const dt=z.uniformsGroups;for(let oi=0,Rs=dt.length;oi<Rs;oi++){const Cc=dt[oi];te.update(Cc,fn),te.bind(Cc,fn)}}return fn}function Hd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Vd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,N,W){const z=H.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=N,H.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const W=H.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){ee=b,K=N,V=W;let z=null,G=!1,ve=!1;if(b){const me=H.get(b);if(me.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),ye.copy(b.viewport),_e.copy(b.scissor),Qe=b.scissorTest,x.viewport(ye),x.scissor(_e),x.setScissorTest(Qe),ne=-1;return}else if(me.__webglFramebuffer===void 0)X.setupRenderTarget(b);else if(me.__hasExternalTextures)X.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&H.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const Ce=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?z=Ce[N][W]:z=Ce[N],G=!0):b.samples>0&&X.useMultisampledRTT(b)===!1?z=H.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?z=Ce[W]:z=Ce,ye.copy(b.viewport),_e.copy(b.scissor),Qe=b.scissorTest}else ye.copy(Fe).multiplyScalar(ie).floor(),_e.copy(bt).multiplyScalar(ie).floor(),Qe=qe;if(W!==0&&(z=$),x.bindFramebuffer(F.FRAMEBUFFER,z)&&x.drawBuffers(b,z),x.viewport(ye),x.scissor(_e),x.setScissorTest(Qe),G){const me=H.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,W)}else if(ve){const me=N;for(let we=0;we<b.textures.length;we++){const Ce=H.get(b.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Ce.__webglTexture,W,me)}}else if(b!==null&&W!==0){const me=H.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,W)}ne=-1},this.readRenderTargetPixels=function(b,N,W,z,G,ve,be,me=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){x.bindFramebuffer(F.FRAMEBUFFER,we);try{const Ce=b.textures[me],He=Ce.format,We=Ce.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(He)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(We)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-z&&W>=0&&W<=b.height-G&&F.readPixels(N,W,z,G,he.convert(He),he.convert(We),ve)}finally{const Ce=ee!==null?H.get(ee).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,z,G,ve,be,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we)if(N>=0&&N<=b.width-z&&W>=0&&W<=b.height-G){x.bindFramebuffer(F.FRAMEBUFFER,we);const Ce=b.textures[me],He=Ce.format,We=Ce.type;if(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,ve.byteLength,F.STREAM_READ),F.readPixels(N,W,z,G,he.convert(He),he.convert(We),0);const st=ee!==null?H.get(ee).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,st);const _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ep(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ve),F.deleteBuffer(Re),F.deleteSync(_t),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,W=0){const z=Math.pow(2,-W),G=Math.floor(b.image.width*z),ve=Math.floor(b.image.height*z),be=N!==null?N.x:0,me=N!==null?N.y:0;X.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,be,me,G,ve),x.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,z=null,G=0,ve=0){let be,me,we,Ce,He,We,Re,st,_t;const yt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(W!==null)be=W.max.x-W.min.x,me=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,He=W.min.y,We=W.isBox3?W.min.z:0;else{const St=Math.pow(2,-G);be=Math.floor(yt.width*St),me=Math.floor(yt.height*St),b.isDataArrayTexture?we=yt.depth:b.isData3DTexture?we=Math.floor(yt.depth*St):we=1,Ce=0,He=0,We=0}z!==null?(Re=z.x,st=z.y,_t=z.z):(Re=0,st=0,_t=0);const lt=he.convert(N.format),zt=he.convert(N.type);let Me;N.isData3DTexture?(X.setTexture3D(N,0),Me=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),Me=F.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),Me=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const sn=x.getParameter(F.UNPACK_ROW_LENGTH),Ze=x.getParameter(F.UNPACK_IMAGE_HEIGHT),fn=x.getParameter(F.UNPACK_SKIP_PIXELS),Cn=x.getParameter(F.UNPACK_SKIP_ROWS),ri=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(F.UNPACK_SKIP_ROWS,He),x.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Cs=b.isDataArrayTexture||b.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const St=H.get(b),ai=H.get(N),dt=H.get(St.__renderTarget),oi=H.get(ai.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,dt.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Rs=0;Rs<we;Rs++)Cs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(b).__webglTexture,G,We+Rs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(N).__webglTexture,ve,_t+Rs)),F.blitFramebuffer(Ce,He,be,me,Re,st,be,me,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||H.has(b)){const St=H.get(b),ai=H.get(N);x.bindFramebuffer(F.READ_FRAMEBUFFER,Q),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let dt=0;dt<we;dt++)Cs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.__webglTexture,G,We+dt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,G),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ai.__webglTexture,ve,_t+dt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ai.__webglTexture,ve),G!==0?F.blitFramebuffer(Ce,He,be,me,Re,st,be,me,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(Me,ve,Re,st,_t+dt,Ce,He,be,me):F.copyTexSubImage2D(Me,ve,Re,st,Ce,He,be,me);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Me,ve,Re,st,_t,be,me,we,lt,zt,yt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Me,ve,Re,st,_t,be,me,we,lt,yt.data):F.texSubImage3D(Me,ve,Re,st,_t,be,me,we,lt,zt,yt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ve,Re,st,be,me,lt,zt,yt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ve,Re,st,yt.width,yt.height,lt,yt.data):F.texSubImage2D(F.TEXTURE_2D,ve,Re,st,be,me,lt,zt,yt);x.pixelStorei(F.UNPACK_ROW_LENGTH,sn),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),x.pixelStorei(F.UNPACK_SKIP_PIXELS,fn),x.pixelStorei(F.UNPACK_SKIP_ROWS,Cn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,ri),ve===0&&N.generateMipmaps&&F.generateMipmap(Me),x.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&X.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?X.setTextureCube(b,0):b.isData3DTexture?X.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?X.setTexture2DArray(b,0):X.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){K=0,V=0,ee=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Ki=class Ki{constructor(){}static getInstance(){return Ki.instance||(Ki.instance=new Ki),Ki.instance}get tileSize(){return P.config.render.tileWidth}get tileWidth(){return this.tileSize}get tileHeight(){return this.tileSize}worldToScreen(e,t,n=0){return{x:t*this.tileSize,y:e*this.tileSize-n}}tileCenter(e,t,n=0){return this.worldToScreen(e+.5,t+.5,n)}screenToWorld(e,t){return{col:e/this.tileSize,row:t/this.tileSize}}};w(Ki,"instance");let Hl=Ki;const jt=Hl.getInstance();let ca=null;function zx(){if(!ca){const a=document.createElement("canvas");a.width=16,a.height=16;const e=a.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(8,8,7,0,Math.PI*2),e.fill(),ca=new si(a),ca.colorSpace=Mt}return ca}const Zi=class Zi{constructor(){w(this,"items",[])}static getInstance(){return Zi.instance||(Zi.instance=new Zi),Zi.instance}get count(){return this.items.length}burst(e,t,n,i,s){const r=P.config.render.maxParticles,o=s?.speed??.08,l=s?.life??600,c=s?.size??4;for(let h=0;h<i;h++){const f=Math.PI*2*h/i+Math.random()*.4,d=o*(.6+Math.random()*.8);this.items.push({x:e,y:t,vx:Math.cos(f)*d,vy:Math.sin(f)*d,life:l,maxLife:l,color:n,size:c,view:null})}for(;this.items.length>r;)this.removeAt(0)}update(e){const t=[];for(const n of this.items)n.life-=e,n.x+=n.vx*e,n.y+=n.vy*e,n.vy+=8e-5*e,n.life>0?t.push(n):this.disposeView(n);this.items=t}syncTo(e){const t=jt.tileSize;for(const n of this.items){if(!n.view){const s=n.size*2/t;n.view=new Qt(new Yt({map:zx(),color:new Le(n.color),transparent:!0,depthTest:!0,depthWrite:!1})),n.view.scale.set(s,s,1),n.view.renderOrder=3}n.view.parent!==e&&e.add(n.view);const i=1-n.life/n.maxLife;n.view.position.set(n.x/t,.5+i*.6,n.y/t),n.view.material.opacity=Math.max(0,Math.min(1,n.life/n.maxLife))}}clear(){for(const e of this.items)this.disposeView(e);this.items=[]}removeAt(e){const t=this.items[e];t&&(this.disposeView(t),this.items.splice(e,1))}disposeView(e){e.view&&(e.view.parent?.remove(e.view),e.view.material.dispose(),e.view=null)}};w(Zi,"instance");let Rr=Zi;const Oh=new Map;function Gx(a,e,t){const n=`${a}|${e}|${t}`;let i=Oh.get(n);if(!i){const s=`bold ${t*2}px "Microsoft YaHei", sans-serif`,r=document.createElement("canvas").getContext("2d");r.font=s;const o=Math.max(8,Math.ceil(r.measureText(a).width)+20),l=Math.ceil(t*2+18),c=document.createElement("canvas");c.width=o,c.height=l;const h=c.getContext("2d");h.font=s,h.textAlign="center",h.textBaseline="middle",h.lineWidth=6,h.strokeStyle="#000000",h.strokeText(a,o/2,l/2),h.fillStyle=e,h.fillText(a,o/2,l/2),i=new si(c),i.colorSpace=Mt,Oh.set(n,i)}return i}let ha=null;function Hx(){if(!ha){const a=document.createElement("canvas");a.width=16,a.height=16;const e=a.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(8,8,7,0,Math.PI*2),e.fill(),ha=new si(a),ha.colorSpace=Mt}return ha}const Ji=class Ji{constructor(){w(this,"particles",[])}static getInstance(){return Ji.instance||(Ji.instance=new Ji),Ji.instance}floatText(e,t,n,i="#ffffff"){const s=jt.tileCenter(t,e);this.push({x:s.x,y:s.y-30,vx:0,vy:-.03,life:1100,maxLife:1100,color:i,size:15,type:"text",text:n,opacity:1})}sparkle(e,t,n="#ffdd44",i=8){const s=jt.tileCenter(t,e);Rr.getInstance().burst(s.x,s.y,n,i,{speed:.08,life:600,size:4})}push(e){const t=Math.max(50,Math.floor(P.config.render.maxParticles/2));this.particles.length>=t&&this.destroyView(this.particles.shift());const n=jt.tileSize;let i;if(e.type==="text"&&e.text){const s=Gx(e.text,e.color,e.size),r=s.image,o=e.size*2/n;i=new Qt(new Yt({map:s,transparent:!0,depthTest:!0,depthWrite:!1})),i.scale.set(o*(r.width/r.height),o,1)}else{const s=e.size*2/n;i=new Qt(new Yt({map:Hx(),color:new Le(e.color),transparent:!0,depthTest:!0,depthWrite:!1})),i.scale.set(s,s,1)}i.renderOrder=4,this.particles.push({...e,view:i})}update(e){for(const t of this.particles)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.type==="circle"&&(t.vy+=1e-4*e),t.opacity=Math.max(0,Math.min(1,t.life/t.maxLife)),t.life<=0&&this.destroyView(t);this.particles=this.particles.filter(t=>t.life>0)}syncTo(e){const t=jt.tileSize;for(const n of this.particles){n.view.parent!==e&&e.add(n.view);const i=1-n.life/n.maxLife,s=n.type==="text"?1.2+i*.9:.6+i*.4;n.view.position.set(n.x/t,s,n.y/t),n.view.material.opacity=n.opacity}}destroyView(e){e.view.parent?.remove(e.view),e.view.material.dispose()}clear(){for(const e of this.particles)this.destroyView(e);this.particles=[]}};w(Ji,"instance");let cn=Ji;const Qi=class Qi{constructor(){}static getInstance(){return Qi.instance||(Qi.instance=new Qi),Qi.instance}goldForFloor(e){const t=P.config.chestRewards.goldBands,n=t.find(i=>e>=i.minFloor&&e<=i.maxFloor)??t[t.length-1];return fe.randInt(n.min,n.max)}open(e,t,n=1){const i=ge.getInstance(),s=Be.getInstance(),r=P.config.chestRewards,o=e.chestTier==="grand",l=i.state.currentFloor,c=tn.getInstance().depthMultiplier(l,n),h=Math.round(this.goldForFloor(l)*c*(o?2.5:1)),f={gold:h,equipment:!1,equip:null,potion:null};if(r.goldAlways&&h>0&&i.gainGold(h),o||fe.chance(r.equipmentChance)){const d=Gn.getInstance().generate(o?"boss":"chest",{floorId:l,depth:n});i.addEquipment(d),f.equipment=!0,f.equip=d}if(fe.chance(r.potionChance)){const d=this.potionTierForFloor(l);d&&(i.addPotion(d,1),f.potion=d)}return s.markOpened(e.id),e.x,e.y,cn.getInstance().sparkle(e.x,e.y,"#ffdd44",10),q.emit("chestOpened",{entityId:e.id,roomType:t}),f}potionTierForFloor(e){return P.potions.potions.filter(n=>e>=n.minFloor&&e<=n.maxFloor).sort((n,i)=>i.healPct-n.healPct)[0]?.tier??null}potionTierLower(e,t){const n=P.potions.potions.filter(s=>e>=s.minFloor&&e<=s.maxFloor).sort((s,r)=>r.healPct-s.healPct),i=Math.min(t,n.length-1);return n[i]?.tier??null}};w(Qi,"instance");let Pr=Qi;class kh{constructor(e,t){w(this,"entity");w(this,"mon");w(this,"log",[]);w(this,"logCursor",0);w(this,"monHp");w(this,"turnCount",0);w(this,"dmgTaken",0);w(this,"potionUsedName",null);w(this,"outcome",null);w(this,"manual",!1);this.entity=e,this.mon=t,this.monHp=t.hp,this.line(`遭遇 ${t.name}！`,"system")}get monsterHp(){return Math.max(0,this.monHp)}get monsterMaxHp(){return this.mon.hp}get turns(){return this.turnCount}get finished(){return this.outcome!==null}get result(){return this.outcome}drainNewLines(){const e=this.log.slice(this.logCursor);return this.logCursor=this.log.length,e}bestPotion(){const e=ge.getInstance();return e.bestPotionFor(e.maxHp-e.state.hp)}hpBelowAutoPotionThreshold(){const e=ge.getInstance();return e.state.hp>0&&e.state.hp<e.maxHp*.3}runAuto(){if(this.outcome)return this.outcome;const e=ge.getInstance(),t=P.config.battle;for(;e.state.hp>0&&this.monHp>0&&this.turnCount<t.maxTurns&&(this.turnCount++,this.playerAttack(),!(this.monHp<=0));)if(this.monsterTurn(),e.state.hp>0&&e.state.hp<e.maxHp*.3){const n=e.bestPotionFor(e.maxHp-e.state.hp);n&&this.drinkPotion(n,!0)}return this.settle(this.turnCount>=t.maxTurns),this.outcome}stepManual(e){if(this.outcome)return[];const t=ge.getInstance(),n=P.config.battle;if(this.turnCount++,e.type==="flee")return this.line("你选择了撤退","system"),this.settle(!1,!0),this.drainNewLines();if(e.type==="potion"){const i=this.bestPotion();if(!i)return this.line("没有可用的药水","system"),this.turnCount--,this.drainNewLines();this.drinkPotion(i,!1)}else this.playerAttack();return!this.outcome&&this.monHp>0&&t.state.hp>0&&this.monsterTurn(),!this.outcome&&(this.monHp<=0||t.state.hp<=0||this.turnCount>=n.maxTurns)&&this.settle(this.turnCount>=n.maxTurns),this.drainNewLines()}line(e,t){this.log.push({turn:this.turnCount,text:e,kind:t})}playerAttack(){const e=ge.getInstance(),t=P.config.battle,n=e.stats();let i=0;if(fe.chance(n.critRate/100)){const s=Math.max(t.minDamage,Math.round((n.attack-this.mon.defense)*(1+(Math.random()*2-1)*t.damageJitter)));i=Math.round(s*t.critMultiplier)+n.fireDamage,this.line(`暴击！对${this.mon.name}造成 ${i} 点伤害`,"player")}else i=Math.max(t.minDamage,Math.round((n.attack-this.mon.defense)*(1+(Math.random()*2-1)*t.damageJitter)))+n.fireDamage,this.line(`对${this.mon.name}造成 ${i} 点伤害${n.fireDamage>0?`（业火+${n.fireDamage}）`:""}`,"player");if(this.mon.isBoss&&(i=Math.round(i*(1+n.bossDamage/100))),this.monHp-=i,n.lifesteal>0&&e.state.hp<e.maxHp){const s=Math.round(i*n.lifesteal/100);s>0&&(e.heal(s),this.line(`嗜血回复 ${s} 生命`,"player"))}}monsterTurn(){const e=ge.getInstance(),t=P.config.battle,n=e.stats();if(fe.chance(n.dodgeRate/100))this.line(`闪避了${this.mon.name}的攻击`,"player");else{const i=Math.max(t.minDamage,Math.round((this.mon.attack-n.defense)*(1+(Math.random()*2-1)*t.damageJitter)));e.damage(i),this.dmgTaken+=i,this.line(`${this.mon.name}对你造成 ${i} 点伤害`,"monster")}}drinkPotion(e,t){const n=ge.getInstance(),i=P.getPotion(e);n.usePotion(e),this.potionUsedName=i.name,this.line(`${t?"自动":""}饮下${i.name}`,"system")}settle(e,t=!1){if(this.outcome)return;const n=ge.getInstance(),i=Be.getInstance(),s=n.state.currentFloor,r=this.monHp<=0||e&&this.monHp/this.mon.hp<n.state.hp/n.maxHp,o={win:r,log:this.log,damageTaken:this.dmgTaken,turns:this.turnCount,expGained:0,goldGained:0,monsterName:this.mon.name,isBoss:this.mon.isBoss,isElite:this.mon.isElite};if(r){o.expGained=this.mon.exp,o.goldGained=this.mon.gold,n.gainExp(this.mon.exp),n.gainGold(this.mon.gold),i.markDefeated(this.entity.id),this.line(`击败${this.mon.name}！获得 ${this.mon.exp} 经验、${this.mon.gold} 金币`,"reward");const l=P.config.monsterDrops,c=this.entity.depth??1;if(this.mon.isBoss||fe.chance(l.equipmentChance)){const h=Gn.getInstance().generate(this.mon.isBoss?"boss":"monster",{floorId:s,depth:c});n.addEquipment(h),this.line(`掉落了 ${h.name}`,"reward")}if(!this.mon.isBoss&&fe.chance(l.potionChance)){const h=Pr.getInstance().potionTierLower(s,fe.randInt(1,2));h&&(n.addPotion(h,1),this.line(`掉落了 ${P.getPotion(h)?.name}`,"reward"))}this.potionUsedName&&this.line(`战斗中消耗了${this.potionUsedName}`,"system"),q.emit("monsterDefeated",{entityId:this.entity.id,name:this.mon.name,isElite:this.mon.isElite,isBoss:this.mon.isBoss}),this.mon.isBoss&&q.emit("bossDefeated",{floor:s,name:this.mon.name})}else n.state.hp<=0?(this.line(`你被${this.mon.name}击败了……`,"monster"),q.emit("playerDied",{cause:this.mon.name})):this.line(t?"你退出了战斗":"战斗胶着，你被迫撤退","system");this.outcome=o,q.emit("battleEnded",{result:o,manual:this.manual})}}const ji=class ji{constructor(){}static getInstance(){return ji.instance||(ji.instance=new ji),ji.instance}resolveStats(e){const t=ge.getInstance(),n=P.getMonster(e.monsterId??"");if(!n)throw new Error(`未知怪物: ${e.monsterId}`);return e.stats??tn.getInstance().monsterStats(n,t.state.currentFloor,e.kind==="boss"?!1:!!e.isElite,e.depth??1)}battle(e){const t=this.resolveStats(e);return new kh(e,t).runAuto()}beginManual(e){const t=this.resolveStats(e),n=new kh(e,t);return n.manual=!0,n}forecast(e){const t=ge.getInstance(),n=P.getMonster(e.monsterId??"");if(!n)return{winnable:!1,estDamage:0};const i=e.stats??tn.getInstance().monsterStats(n,t.state.currentFloor,!!e.isElite,e.depth??1),s=t.stats(),r=Math.max(1,s.attack-i.defense)+s.fireDamage,o=Math.max(1,i.attack-s.defense),c=Math.ceil(i.hp/r)*o*(1-s.dodgeRate/100);return{winnable:c<t.state.hp,estDamage:Math.round(c)}}};w(ji,"instance");let rr=ji;const es=class es{constructor(){w(this,"camX",0);w(this,"camY",0);w(this,"targetX",0);w(this,"targetY",0);w(this,"snapped",!1)}static getInstance(){return es.instance||(es.instance=new es),es.instance}get x(){return this.camX}get y(){return this.camY}snapToPlayer(){const e=ge.getInstance().pos,t=jt.tileCenter(e.y,e.x);this.camX=t.x,this.camY=t.y,this.targetX=t.x,this.targetY=t.y,this.snapped=!0}roomScreenBounds(e){const t=P.config.heights,n=Math.max(t.wallByRoom[e.type]??60,t.corridorWall),i=jt.tileSize,s=P.config.camera.roomPaddingPx;return{minX:e.x*i-s,maxX:(e.x+e.width)*i+s,minY:e.y*i-n-s,maxY:(e.y+e.height)*i+s}}update(e){const t=ge.getInstance(),n=Be.getInstance(),i=t.pos,s=jt.tileCenter(i.y,i.x);this.targetX=s.x,this.targetY=s.y;const r=document.getElementById("game-canvas"),o=(r?.clientWidth??window.innerWidth)/2,l=(r?.clientHeight??window.innerHeight)/2,c=n.getRoomAt(i.x,i.y);if(c){const h=this.roomScreenBounds(c),f=h.maxX-h.minX,d=h.maxY-h.minY;if(f<=o*2&&d<=l*2)this.targetX=(h.minX+h.maxX)/2,this.targetY=(h.minY+h.maxY)/2;else{const u=(h.minX+h.maxX)/2,p=(h.minY+h.maxY)/2;f<=o*2?this.targetX=u:this.targetX=_n.clamp(this.targetX,h.minX+o,h.maxX-o),d<=l*2?this.targetY=p:this.targetY=_n.clamp(this.targetY,h.minY+l,h.maxY-l)}}else{const h=n.currentFloor;if(h){const f=this.roomScreenBounds({x:0,y:0,width:h.width,height:h.height,type:"combat"});this.targetX=_n.clamp(this.targetX,f.minX+o,f.maxX-o),this.targetY=_n.clamp(this.targetY,f.minY+l,f.maxY-l)}}if(!this.snapped)this.camX=this.targetX,this.camY=this.targetY,this.snapped=!0;else{const h=1-Math.pow(1-P.config.camera.lerp,e/16.67);this.camX=_n.lerp(this.camX,this.targetX,h),this.camY=_n.lerp(this.camY,this.targetY,h)}}};w(es,"instance");let un=es;const ts=class ts{constructor(e){w(this,"el");w(this,"onConfirm",null);ts.instance||(ts.instance=this,this.el=document.createElement("div"),this.el.className="overlay-panel hidden confirm-panel",e.appendChild(this.el),window.addEventListener("keydown",t=>{t.key==="Enter"&&!this.el.classList.contains("hidden")&&this.confirm(),t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.cancel()}))}static getInstance(){if(!ts.instance)throw new Error("ConfirmDialog 尚未初始化（需在 GameUI.build 中构造）");return ts.instance}ask(e,t,n,i="✔ 确定",s="✖ 取消"){this.onConfirm=n,De.pushModal(),this.el.classList.remove("hidden"),this.el.innerHTML=`
      <div class="dialog-box confirm-box">
        <div class="dialog-name">${e}</div>
        <div class="dialog-text">${t}</div>
        <div class="dim confirm-hint">（Enter 确认 · Esc 取消）</div>
        <div class="dialog-actions">
          <button id="confirm-cancel">${s}</button>
          <button id="confirm-ok" class="btn-primary">${i}</button>
        </div>
      </div>
    `,this.el.querySelector("#confirm-ok").addEventListener("click",()=>this.confirm()),this.el.querySelector("#confirm-cancel").addEventListener("click",()=>this.cancel()),this.el.querySelector("#confirm-ok").focus()}confirm(){const e=this.onConfirm;this.close(),e?.()}cancel(){this.close()}close(){this.el.classList.contains("hidden")||(this.onConfirm=null,this.el.classList.add("hidden"),De.popModal())}};w(ts,"instance");let Oa=ts;class Vx{constructor(e){w(this,"el");w(this,"queue",[]);w(this,"busy",!1);w(this,"done",null);this.el=e}push(e,t){this.queue.push(...e),t&&(this.done=t),this.busy||this.next()}next(){const e=this.queue.shift();if(!e){this.busy=!1;const s=this.done;this.done=null,s?.();return}this.busy=!0;const t=document.createElement("div");t.className=`log-line ${e.kind}`,this.el.appendChild(t);let n=0;const i=()=>{n++,t.textContent=e.text.slice(0,n),this.el.scrollTop=this.el.scrollHeight,n<e.text.length?window.setTimeout(i,16):window.setTimeout(()=>this.next(),110)};i()}flushAll(e){for(const t of e){const n=document.createElement("div");n.className=`log-line ${t.kind}`,n.textContent=t.text,this.el.appendChild(n)}this.queue=[],this.el.scrollTop=this.el.scrollHeight}clear(){this.el.innerHTML="",this.queue=[],this.busy=!1,this.done=null}}const ns=class ns{constructor(){w(this,"el",null);w(this,"session",null);w(this,"onEnd",null);w(this,"typer",null);w(this,"nameEl");w(this,"playerFill");w(this,"playerNum");w(this,"playerBarRow");w(this,"monsterFill");w(this,"monsterNum");w(this,"logEl");w(this,"actionsEl");w(this,"potionBtn");w(this,"closeBtn")}static getInstance(){return ns.instance||(ns.instance=new ns),ns.instance}init(e){if(this.el)return;const t=document.createElement("div");t.className="overlay-panel hidden",t.dataset.panel="battle",t.innerHTML=`
      <div class="battle-box">
        <div class="battle-mode-strip">
          <span class="bms-label">战斗模式</span>
          <div class="seg-control">
            <button data-mode="auto">托管</button>
            <button data-mode="manual">微操</button>
          </div>
        </div>
        <div class="battle-title">⚔️ <span id="bp-mon"></span></div>
        <div class="battle-bars">
          <div class="bb-row" id="bp-row-player">
            <span class="bb-name">勇者</span>
            <div class="bb-bar"><div class="bb-fill" id="bp-fill-player"></div></div>
            <span class="bb-num" id="bp-num-player"></span>
          </div>
          <div class="bb-row">
            <span class="bb-name" id="bp-mon2"></span>
            <div class="bb-bar"><div class="bb-fill" id="bp-fill-mon"></div></div>
            <span class="bb-num" id="bp-num-mon"></span>
          </div>
        </div>
        <div class="battle-log" id="bp-log"></div>
        <div class="battle-actions" id="bp-actions">
          <button data-act="attack" class="bp-attack">⚔️ 攻击</button>
          <button data-act="potion" class="bp-potion">🧪 喝药</button>
          <button data-act="flee" class="bp-flee">🏃 撤退</button>
        </div>
        <div class="battle-foot">
          <button class="btn-primary hidden" id="bp-close">继续</button>
        </div>
      </div>`,e.appendChild(t),this.el=t,this.nameEl=t.querySelector("#bp-mon"),this.playerFill=t.querySelector("#bp-fill-player"),this.playerNum=t.querySelector("#bp-num-player"),this.playerBarRow=t.querySelector("#bp-row-player"),this.monsterFill=t.querySelector("#bp-fill-mon"),this.monsterNum=t.querySelector("#bp-num-mon"),this.logEl=t.querySelector("#bp-log"),this.actionsEl=t.querySelector("#bp-actions"),this.potionBtn=t.querySelector('[data-act="potion"]'),this.closeBtn=t.querySelector("#bp-close"),this.typer=new Vx(this.logEl),t.querySelectorAll(".seg-control button").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.mode;i!==De.settings.battleMode&&(De.setSetting("battleMode",i),this.syncModeStrip(),i==="auto"&&this.session&&!this.session.finished&&(this.session.runAuto(),this.typer?.flushAll(this.session.drainNewLines().map(s=>({text:s.text,kind:s.kind}))),this.finish()))})}),this.actionsEl.querySelectorAll("button[data-act]").forEach(n=>{n.addEventListener("click",()=>this.act(n.dataset.act))}),this.closeBtn.addEventListener("click",()=>this.close())}begin(e,t){if(!this.el||!this.typer)return;this.session=e,this.onEnd=t,this.el.classList.remove("hidden"),De.pushModal();const n=e.mon.isBoss?" · Boss":e.mon.isElite?" · 精英":"";this.nameEl.textContent=`${e.mon.name}${n}`,this.el.querySelector("#bp-mon2").textContent=e.mon.name,this.typer.clear(),this.logEl.innerHTML="",this.actionsEl.classList.remove("hidden"),this.closeBtn.classList.add("hidden"),this.syncModeStrip(),this.refreshBars(),this.typer.push(e.drainNewLines().map(i=>({text:i.text,kind:i.kind})))}act(e){const t=this.session;if(!t||t.finished||!this.typer)return;this.actionsEl.classList.add("bp-waiting");const n=t.stepManual({type:e});this.typer.push(n.map(i=>({text:i.text,kind:i.kind})),()=>{this.actionsEl.classList.remove("bp-waiting"),this.refreshBars(),t.finished&&this.finish()}),this.refreshBars()}finish(){this.session&&(this.refreshBars(),this.actionsEl.classList.add("hidden"),this.closeBtn.classList.remove("hidden"))}close(){if(!this.el)return;const e=this.session;if(e&&!e.finished)return;this.el.classList.add("hidden"),De.popModal();const t=this.onEnd,n=e?.result??null;this.session=null,this.onEnd=null,t&&n&&t(n)}refreshBars(){const e=this.session,t=ge.getInstance(),n=Math.max(0,Math.min(100,t.state.hp/t.maxHp*100));if(this.playerFill.style.width=`${n}%`,this.playerFill.className=`bb-fill ${Bh(n)}`,this.playerNum.textContent=`${Math.ceil(Math.max(0,t.state.hp))} / ${t.maxHp}`,this.playerBarRow.classList.toggle("bb-danger",e!==null&&!e.finished&&e.hpBelowAutoPotionThreshold()),e){const l=Math.max(0,Math.min(100,e.monsterHp/e.monsterMaxHp*100));this.monsterFill.style.width=`${l}%`,this.monsterFill.className=`bb-fill ${Bh(l)}`,this.monsterNum.textContent=`${Math.ceil(e.monsterHp)} / ${e.monsterMaxHp}`}const i=e&&!e.finished?e.bestPotion():null,s=i?P.getPotion(i):null,r=i?t.getPotionCount(i):0;this.potionBtn.disabled=!i;const o=e!==null&&!e.finished&&e.hpBelowAutoPotionThreshold();this.potionBtn.classList.toggle("bp-warn",!!o),this.potionBtn.innerHTML=s?`🧪 ${s.name} ×${r}${o?'<span class="bp-warn-tag">生命&lt;30%</span>':""}`:"🧪 无药水"}syncModeStrip(){this.el&&this.el.querySelectorAll(".seg-control button").forEach(e=>{const t=e.dataset.mode===De.settings.battleMode;e.classList.toggle("on",t)})}};w(ns,"instance");let ka=ns;function Bh(a){return a>=60?"bb-ok":a>=30?"bb-mid":"bb-low"}const Ks={player:"#4488ff",enemyElite:"#ff8800",enemyBoss:"#ff0044",chestClosed:"#ffcc00",chestOpened:"#888888",stairDown:"#44ddff"},is=class is{constructor(){}static getInstance(){return is.instance||(is.instance=new is),is.instance}get half(){return jt.tileSize/2}drawBox(e,t,n,i,s,r,o={}){const l=this.half*s,c=o.pulse?1+.06*o.pulse:1,h=l*c;e.save(),o.alpha!==void 0&&(e.globalAlpha=o.alpha),o.glow&&(e.save(),e.globalAlpha=(o.alpha??1)*.35*(.7+.3*Math.sin(performance.now()/300)),e.fillStyle=o.glow,e.beginPath(),e.ellipse(t,n-i/2,h*1.6,h*1.6+i/2,0,0,Math.PI*2),e.fill(),e.restore()),e.fillStyle=r.left,e.fillRect(t-h,n-h-i,h*2,i),e.fillStyle=r.right,e.fillRect(t-h,n-h,h*2,h*2),e.fillStyle=r.top,e.fillRect(t-h,n-h-i,h*2,h*2),e.lineWidth=2,e.strokeStyle=r.border,e.strokeRect(t-h,n-h-i,h*2,i+h*2),o.label&&(e.font='bold 13px "Microsoft YaHei", sans-serif',e.textAlign="center",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.75)",e.strokeText(o.label,t,n-h-i-8),e.fillStyle=o.labelColor??"#ffffff",e.fillText(o.label,t,n-h-i-8)),e.restore()}drawPaperDoll(e,t,n,i,s){const r=Math.max(16,i),o=r*.16,l=-r*.86,c=l+o*1.15,h=-r*.38,f=r*.16,d=s.body,u=s.head??this.lighten(d,.3),p=s.accent??this.lighten(d,.45),v=s.border??this.darken(d,.45);e.save(),e.translate(t,n),e.lineJoin="round",e.lineWidth=Math.max(1.5,r*.035),e.strokeStyle=v,e.fillStyle=this.darken(d,.4);const m=r*.075,g=r*.055;for(const y of[-1,1])e.beginPath(),e.rect(y*g-m/2,h,m,-h),e.fill(),e.stroke();e.fillStyle=d,e.beginPath(),e.moveTo(-f*1.05,c),e.lineTo(f*1.05,c),e.lineTo(f*.82,h),e.lineTo(-f*.82,h),e.closePath(),e.fill(),e.stroke(),e.fillStyle=p,e.fillRect(-f*.9,h-r*.06,f*1.8,r*.05),e.fillStyle=this.darken(d,.16);const _=r*.06,S=(h-c)*.84;for(const y of[-1,1]){const E=y>0?f*1.02:-f*1.02-_;e.beginPath(),e.rect(E,c+r*.02,_,S),e.fill(),e.stroke()}if(s.elite){e.fillStyle=p;for(const y of[-1,1])e.beginPath(),e.ellipse(y*f*1.05,c+r*.02,r*.075,r*.05,0,0,Math.PI*2),e.fill(),e.stroke()}if(e.fillStyle=u,e.beginPath(),e.arc(0,l,o,0,Math.PI*2),e.fill(),e.stroke(),s.horns){e.fillStyle=p;for(const y of[-1,1])e.beginPath(),e.moveTo(y*o*.72,l-o*.42),e.lineTo(y*o*1.55,l-o*1.95),e.lineTo(y*o*.22,l-o*.92),e.closePath(),e.fill(),e.stroke()}e.fillStyle="rgba(20,20,28,0.9)";for(const y of[-1,1])e.beginPath(),e.ellipse(y*o*.36,l+o*.06,o*.15,o*.2,0,0,Math.PI*2),e.fill();if(s.weapon==="sword"){const y=f*1.32;e.fillStyle="#dfe6f2",e.beginPath(),e.rect(y,l-r*.01,r*.055,(h-l)*.96),e.fill(),e.stroke(),e.fillStyle=p,e.fillRect(y-r*.05,h-r*.11,r*.155,r*.035),e.fillStyle="#6b4a2a",e.fillRect(y+r*.005,h-r*.08,r*.045,r*.09)}else if(s.weapon==="claw"){e.strokeStyle=p,e.lineWidth=Math.max(1.5,r*.03);for(let y=0;y<3;y++){const E=c+r*.03+y*r*.05;e.beginPath(),e.moveTo(f*1.08,E),e.lineTo(f*1.72,E+r*.035),e.stroke()}e.strokeStyle=v,e.lineWidth=Math.max(1.5,r*.035)}else s.weapon==="staff"&&(e.strokeStyle="#7a5230",e.lineWidth=Math.max(2,r*.045),e.beginPath(),e.moveTo(-f*1.42,h),e.lineTo(-f*1.42,l-o*.5),e.stroke(),e.fillStyle=p,e.beginPath(),e.arc(-f*1.42,l-o*1.05,r*.06,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=v,e.lineWidth=Math.max(1.5,r*.035));if(s.label){const y=Math.max(18,Math.round(r*.44));e.font=`bold ${y}px "Microsoft YaHei", sans-serif`,e.textAlign="center",e.lineWidth=Math.max(3,y*.18),e.strokeStyle="rgba(0,0,0,0.78)";const E=l-o-(s.horns?r*.13:r*.06);e.strokeText(s.label,0,E),e.fillStyle=s.labelColor??"#ffffff",e.fillText(s.label,0,E)}e.restore()}drawPlayer(e,t,n){const i=P.config.heights.player;this.drawBox(e,t,n,i,.62,{top:"#66aaff",left:"#2266cc",right:"#3177dd",border:Ks.player},{label:"勇者",glow:"#4488ff"})}drawMonster(e,t,n,i,s,r,o,l){const c=o?.95:r?.78:.6,h=o?Ks.enemyBoss:r?Ks.enemyElite:s;this.drawBox(e,t,n,l,c,{top:this.lighten(s,.35),left:this.darken(s,.35),right:this.darken(s,.2),border:h},{label:i,labelColor:o?"#ff5566":r?"#ffcc44":"#ffffff",glow:o?"#ff2244":void 0})}drawChest(e,t,n,i,s){const r=P.config.heights.chest+(s?8:0),o=i?Ks.chestOpened:Ks.chestClosed,l=i?0:.5+.5*Math.sin(performance.now()/400);this.drawBox(e,t,n,r,s?.7:.55,{top:i?"#aaaaaa":"#ffe066",left:i?"#666666":"#b8860b",right:i?"#777777":"#daa520",border:o},{label:i?"":s?"大宝箱":"宝箱",labelColor:"#ffcc00",pulse:l})}drawNpc(e,t,n,i,s){const r=P.config.heights.npc;this.drawBox(e,t,n,r,.62,{top:this.lighten(s,.35),left:this.darken(s,.3),right:this.darken(s,.15),border:s},{label:i,labelColor:"#ffffff",pulse:.5+.5*Math.sin(performance.now()/500)})}drawStair(e,t,n,i){const s=.5+.5*Math.sin(performance.now()/600),r=this.half*.7;e.save(),e.globalAlpha=.3+.25*s,e.fillStyle=Ks.stairDown,e.beginPath(),e.ellipse(t,n,r*1.6,r*1.6,0,0,Math.PI*2),e.fill(),e.globalAlpha=1,e.fillStyle="#44ddff",e.fillRect(t-r,n-r,r*2,r*2),e.lineWidth=2,e.strokeStyle="#aaffff",e.strokeRect(t-r,n-r,r*2,r*2),e.font='bold 22px "Microsoft YaHei", sans-serif',e.textAlign="center",e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.78)",e.strokeText(`▼${i}`,t,n-r-12),e.fillStyle="#44ddff",e.fillText(`▼${i}`,t,n-r-8),e.restore()}drawTorch(e,t,n,i){const s=P.config.heights.torch,r=n-s;e.save(),e.strokeStyle="#7a5230",e.lineWidth=4,e.beginPath(),e.moveTo(t,n-(i>0?i*.55:0)),e.lineTo(t,r),e.stroke();const o=.7+.3*Math.abs(Math.sin(performance.now()/90));e.fillStyle="#ff8833",e.beginPath(),e.ellipse(t,r-4,5*o,9*o,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffcc66",e.beginPath(),e.ellipse(t,r-2,3*o,5*o,0,0,Math.PI*2),e.fill(),e.restore()}drawPillar(e,t,n){this.drawBox(e,t,n,P.config.heights.pillar,.4,{top:"#cccccc",left:"#777777",right:"#999999",border:"#aaaaaa"})}lighten(e,t){return this.mix(e,"#ffffff",t)}darken(e,t){return this.mix(e,"#000000",t)}mix(e,t,n){const i=this.parseHex(e),s=this.parseHex(t),r=Math.round(i.r+(s.r-i.r)*n),o=Math.round(i.g+(s.g-i.g)*n),l=Math.round(i.b+(s.b-i.b)*n);return`rgb(${r},${o},${l})`}parseHex(e){const t=e.replace("#","");return{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}};w(is,"instance",null);let Vl=is;const mn=Vl.getInstance(),Wx="./",qx=["crude","normal","quality","strong","holy"],Id=new Map;let da=null;function Xx(){return da||(da=Promise.all(qx.map(a=>new Promise(e=>{const t=new Image;t.onload=()=>{Id.set(a,t),e()},t.onerror=()=>{console.warn(`[PotionArt] 加载失败，回退占位盒: p_${a}.png`),e()},t.src=`${Wx}img/p_${a}.png`}))).then(()=>{}),da)}function Yx(a){return Id.get(a)??null}function $x(a,e,t,n,i){const s=Yx(e);if(!s||!s.complete||s.naturalWidth===0)return!1;const r=s.naturalWidth/s.naturalHeight,o=i,l=o*r;return a.save(),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(s,t-l/2,n-o,l,o),a.restore(),!0}const zh={start:{base:"#8a97a8",alt:"#8290a2",line:"rgba(255,255,255,0.10)"},end:{base:"#8fa3b8",alt:"#869bb0",line:"rgba(255,255,255,0.10)"},combat:{base:"#6f7987",alt:"#687280",line:"rgba(255,255,255,0.08)"},elite:{base:"#8e7a78",alt:"#867270",line:"rgba(255,255,255,0.08)"},chest:{base:"#9a9184",alt:"#928a7d",line:"rgba(255,255,255,0.10)"},merchant:{base:"#9a8f7e",alt:"#928779",line:"rgba(255,255,255,0.10)"},blacksmith:{base:"#6e5a4a",alt:"#65523f",line:"rgba(255,180,90,0.12)"},witch:{base:"#7d6f9a",alt:"#766893",line:"rgba(230,200,255,0.14)"},boss:{base:"#8a6f6f",alt:"#826868",line:"rgba(255,255,255,0.08)"},rest:{base:"#87987f",alt:"#809178",line:"rgba(255,255,255,0.10)"},corridor:{base:"#75808f",alt:"#6f7a89",line:"rgba(255,255,255,0.07)"}};function gn(a,e,t){const n=document.createElement("canvas");n.width=Math.max(1,Math.ceil(a)),n.height=Math.max(1,Math.ceil(e));const i=n.getContext("2d");return t(i),n}function In(a,e,t){const n=r=>{const o=r.replace("#","");return{r:parseInt(o.slice(0,2),16),g:parseInt(o.slice(2,4),16),b:parseInt(o.slice(4,6),16)}},i=n(a),s=n(e);return`rgb(${Math.round(i.r+(s.r-i.r)*t)},${Math.round(i.g+(s.g-i.g)*t)},${Math.round(i.b+(s.b-i.b)*t)})`}class Kx{constructor(){w(this,"floorCache",new Map);w(this,"wallCache",new Map);w(this,"entityCache",new Map);w(this,"glowCache",new Map);w(this,"vignette",null);w(this,"cone",null);w(this,"moon",null);w(this,"chestOpened",!1)}get tile(){return jt.tileSize}floor(e,t){if(e==="corridor")return this.corridorFloor(t);const n=`floor_${e}_${t}`;let i=this.floorCache.get(n);if(!i){const s=zh[e]??zh.corridor,r=t===0?s.base:s.alt,o=this.tile;i=gn(o,o,l=>{l.fillStyle=r,l.fillRect(0,0,o,o),l.strokeStyle=s.line,l.lineWidth=P.config.render.gridLineWidth,l.strokeRect(.5,.5,o-1,o-1)}),this.floorCache.set(n,i)}return i}corridorFloor(e){const t=`floor_corridor_${e}`;let n=this.floorCache.get(t);if(!n){const i=this.tile;n=gn(i,i,s=>{s.fillStyle=e===0?"#4a3a26":"#443523",s.fillRect(0,0,i,i);const r=12;let o=e===0?7:13;const l=()=>(o=(o*16807+11)%9973,o/9973);for(let f=0;f<i;f+=r){const d=.85+l()*.3;s.fillStyle=`rgba(${Math.round(107*d)},${Math.round(84*d)},${Math.round(52*d)},1)`,s.fillRect(0,f,i,r-1),s.fillStyle="rgba(20,14,8,0.75)",s.fillRect(0,f+r-1,i,1);const u=Math.floor(l()*i);s.fillRect(u,f,1,r-1),l()>.55&&(s.fillStyle="rgba(30,20,10,0.5)",s.beginPath(),s.ellipse(l()*i,f+r/2,1.6,1.1,0,0,Math.PI*2),s.fill())}const c=(f,d,u,p,v)=>{const m=s.createRadialGradient(f,d,0,f,d,u);m.addColorStop(0,p),m.addColorStop(1,"rgba(0,0,0,0)"),s.globalAlpha=v,s.fillStyle=m,s.beginPath(),s.arc(f,d,u,0,Math.PI*2),s.fill(),s.globalAlpha=1},h=["rgba(38,74,38,0.9)","rgba(52,88,44,0.85)","rgba(28,60,32,0.95)"];for(let f=0;f<10;f++){const d=f<5,u=Math.floor(l()*4),p=d?u===2?i-2:u===3?2:l()*i:l()*i,v=d?u===0?2:u===1?i-2:l()*i:l()*i;c(p,v,3+l()*7,h[Math.floor(l()*h.length)],.5+l()*.35)}s.fillStyle="rgba(46,84,44,0.7)";for(let f=0;f<14;f++)s.fillRect(l()*i,l()*i,1,1)}),this.floorCache.set(t,n)}return n}carpet(){const e="carpet";let t=this.floorCache.get(e);if(!t){const n=this.tile;t=gn(n,n,i=>{const s=n/2*.92;i.fillStyle="rgba(160,60,60,0.55)",i.fillRect(n/2-s,n/2-s,s*2,s*2),i.strokeStyle="rgba(220,150,80,0.5)",i.lineWidth=2,i.strokeRect(n/2-s,n/2-s,s*2,s*2)}),this.floorCache.set(e,t)}return t}wall(e,t,n){const i=`wall_${e}_${t?1:0}_${n?1:0}`;let s=this.wallCache.get(i);if(!s){const r=this.tile,o=r/2;s=gn(r,r+e,l=>{l.fillStyle="rgba(0,0,0,0.2)",l.fillRect(0,r+e-2+3,r,5),l.translate(o,o+e);const c=n?"#6d6d75":t?"#565d6b":"#4b515e",h=n?"#9d9da6":t?"#7d8697":"#6f7889";l.fillStyle=c,l.fillRect(-o,-o-e,r,e),l.fillStyle=n?"#7d7d86":t?"#646c7b":"#565d6b",l.fillRect(-o,-o,r,r),l.fillStyle=h,l.fillRect(-o,-o-e,r,r),l.strokeStyle="rgba(20,24,32,0.55)",l.lineWidth=1.5,l.strokeRect(-o,-o-e,r,e+r),l.strokeStyle="rgba(15,18,26,0.35)",l.lineWidth=1;for(const f of[.35,.7]){const d=-o-e*f;l.beginPath(),l.moveTo(-o,d),l.lineTo(o,d),l.stroke()}}),this.wallCache.set(i,s)}return s}entity(e,t,n,i,s=!1){this.chestOpened=s;const r=this.entityKey(e,t,n,i);let o=this.entityCache.get(r);if(o)return o;const l=this.tile,c=l+110,h=l+i+70;return o=gn(c,h,f=>{const d=c/2,u=h-l/2;switch(f.save(),f.translate(d,u),e.kind){case"monster":{const p=n;p&&(p.id==="slime"?mn.drawBox(f,0,0,i,e.isElite?.78:.6,{top:In(p.color,"#ffffff",.35),left:In(p.color,"#000000",.35),right:In(p.color,"#000000",.2),border:e.isElite?"#ff8800":p.color},{label:p.name,labelColor:e.isElite?"#ffcc44":"#ffffff"}):mn.drawPaperDoll(f,0,0,i,{body:p.color,border:e.isElite?"#ff8800":In(p.color,"#000000",.45),accent:e.isElite?"#ffcc44":In(p.color,"#ffffff",.42),label:p.name,labelColor:e.isElite?"#ffcc44":"#ffffff",weapon:"claw",elite:!!e.isElite,horns:!!e.isElite}));break}case"boss":{const p=n;p&&mn.drawPaperDoll(f,0,0,i,{body:p.color,border:"#ff0044",accent:"#ff6b7a",label:p.name,labelColor:"#ff8a95",weapon:"claw",elite:!0,horns:!0});break}case"chest":{const p=this.chestOpened,v=e.chestTier==="grand",m=P.config.heights.chest+(v?8:0);mn.drawBox(f,0,0,m,v?.7:.55,{top:p?"#aaaaaa":"#ffe066",left:p?"#666666":"#b8860b",right:p?"#777777":"#daa520",border:p?"#888888":"#ffcc00"},{label:p?"":v?"大宝箱":"宝箱",labelColor:"#ffcc00"});break}case"potion":{const p=e.potionTier??"normal",m=P.getPotion(p)?.color??"#ff5a7a",g=P.config.heights.potion;$x(f,p,0,0,g)||mn.drawBox(f,0,0,g,.36,{top:In(m,"#ffffff",.6),left:In(m,"#000000",.4),right:m,border:In(m,"#ffffff",.75)},{label:"药水",labelColor:m});break}case"cauldron":{const p=P.config.heights.cauldron;mn.drawBox(f,0,0,p,.58,{top:"#4a3a63",left:"#241d30",right:"#332844",border:"#8a63d6"},{label:"熬药大锅",labelColor:"#c9a3ff"}),f.fillStyle="rgba(126,255,178,0.9)",f.beginPath(),f.ellipse(0,-p,l*.2,l*.09,0,0,Math.PI*2),f.fill(),f.fillStyle="rgba(220,255,235,0.85)",f.beginPath(),f.ellipse(-l*.05,-p-1,l*.05,l*.025,0,0,Math.PI*2),f.fill();break}case"shelf":{const p=P.config.heights.shelf;mn.drawBox(f,0,0,p,.5,{top:"#8a6a45",left:"#4a3624",right:"#6b4e31",border:"#a9825a"},{label:"药架",labelColor:"#ffd9a0"});const v=["#ff6b8a","#6bd6ff","#8aff9e","#ffd166"];for(let m=0;m<v.length;m++)f.fillStyle=v[m],f.fillRect(-l*.28+m*l*.16,-p-l*.14,l*.1,l*.14);break}case"fountain":{const p=P.config.heights.fountain;mn.drawBox(f,0,0,p,.66,{top:"#cfe0e6",left:"#7f949c",right:"#a3b7bf",border:"#e6f7ff"},{label:"治疗泉",labelColor:"#8ff0ff"}),f.fillStyle="rgba(110,235,255,0.92)",f.beginPath(),f.ellipse(0,-p,l*.24,l*.1,0,0,Math.PI*2),f.fill(),f.fillStyle="rgba(235,255,255,0.9)",f.beginPath(),f.ellipse(0,-p-1,l*.08,l*.035,0,0,Math.PI*2),f.fill();break}case"npc":{const p=P.getNpc(e.npcId??""),v=p?.color??"#44dd66";mn.drawPaperDoll(f,0,0,P.config.heights.npc,{body:v,border:In(v,"#000000",.42),accent:In(v,"#ffffff",.45),label:p?.name??"NPC",weapon:"staff"});break}case"stair":{const p=l*.35;f.fillStyle="#44ddff",f.fillRect(-p,-p,p*2,p*2),f.lineWidth=2,f.strokeStyle="#aaffff",f.strokeRect(-p,-p,p*2,p*2),f.font='bold 13px "Microsoft YaHei", sans-serif',f.textAlign="center",f.lineWidth=3,f.strokeStyle="rgba(0,0,0,0.75)";const v=e.targetFloor??t.floorId+1;f.strokeText(`▼${v}`,0,-p-8),f.fillStyle="#44ddff",f.fillText(`▼${v}`,0,-p-8);break}case"torch":{const p=P.config.heights.wallByRoom[t.type]??P.config.heights.corridorWall;mn.drawTorch(f,0,0,p);break}case"pillar":{mn.drawPillar(f,0,0);break}}f.restore()}),this.entityCache.set(r,o),o}player(){const e="player";let t=this.entityCache.get(e);if(t)return t;const n=this.tile,i=P.config.heights.player,s=n+110,r=n+i+70;return t=gn(s,r,o=>{const l=s/2,c=r-n/2;o.save(),o.translate(l,c),mn.drawPaperDoll(o,0,0,i,{body:"#3f7fd6",head:"#f0c8a0",accent:"#ffd24a",border:"#1b4a91",label:"勇者",labelColor:"#ffffff",weapon:"sword",elite:!0}),o.restore()}),this.entityCache.set(e,t),t}entityKey(e,t,n,i){switch(e.kind){case"monster":return`m_${n?.id??"?"}_${e.isElite?1:0}`;case"boss":return`b_${n?.id??"?"}`;case"chest":return`c_${this.chestOpened?1:0}_${e.chestTier==="grand"?1:0}`;case"npc":return`n_${e.npcId??"?"}`;case"stair":return`s_${e.targetFloor??t.floorId+1}`;case"torch":return`t_${t.type}`;case"pillar":return"p";case"potion":return`po_${e.potionTier??"?"}`;case"cauldron":return"cauldron";case"shelf":return"shelf";case"fountain":return"fountain";default:return`x_${e.kind}`}}glow(e,t=1){const n=`${e}@${t}`;let i=this.glowCache.get(n);if(!i){const s=r=>{const o=parseInt(e.slice(1),16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${r})`};i=gn(128,128,r=>{const o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,s(t)),o.addColorStop(1,s(0)),r.fillStyle=o,r.fillRect(0,0,128,128)}),this.glowCache.set(n,i)}return i}stairRing(){let e=this.glowCache.get("__ring__");return e||(e=gn(256,256,t=>{for(const[n,i]of[[34,.05],[22,.09],[12,.18],[6,.4],[2.5,.95]])t.strokeStyle=`rgba(255,255,255,${i})`,t.lineWidth=n,t.strokeRect(64,64,128,128)}),this.glowCache.set("__ring__",e)),e}roomCarpet(e,t){const n=`carpet_${e}_${t}`;let i=this.floorCache.get(n);if(i)return i;const s=this.tile,r=Math.max(1,e)*s,o=Math.max(1,t)*s;return i=gn(r,o,l=>{l.fillStyle="#7e1e1e",l.fillRect(0,0,r,o);for(let m=0;m<o;m+=18)l.fillStyle=m%36===0?"rgba(0,0,0,0.10)":"rgba(255,120,90,0.05)",l.fillRect(0,m,r,9);const c=l.createRadialGradient(r/2,o/2,Math.min(r,o)*.35,r/2,o/2,Math.max(r,o)*.62);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0.22)"),l.fillStyle=c,l.fillRect(0,0,r,o);const h="#e8b93c",f="rgba(232,185,60,0.65)";l.strokeStyle=h,l.lineWidth=5,l.strokeRect(10,10,r-20,o-20),l.strokeStyle=f,l.lineWidth=2,l.setLineDash([9,6]),l.strokeRect(22,22,r-44,o-44),l.setLineDash([]);const d=(m,g,_,S)=>{l.fillStyle=S,l.beginPath(),l.moveTo(m,g-_),l.lineTo(m+_,g),l.lineTo(m,g+_),l.lineTo(m-_,g),l.closePath(),l.fill()},u=[[34,34],[r-34,34],[34,o-34],[r-34,o-34]];for(const[m,g]of u)d(m,g,11,h),d(m,g,5,"#8a5a2b");r>200&&o>200&&(l.strokeStyle=f,l.lineWidth=3,l.beginPath(),l.arc(r/2,o/2,Math.min(r,o)*.16,0,Math.PI*2),l.stroke(),l.lineWidth=1.5,l.beginPath(),l.arc(r/2,o/2,Math.min(r,o)*.11,0,Math.PI*2),l.stroke(),d(r/2,o/2,7,h)),l.fillStyle="rgba(232,185,60,0.4)";let p=e*31+t*17;const v=()=>(p=(p*16807+13)%9973,p/9973);for(let m=0;m<Math.floor(r*o/9e3);m++)l.fillRect(30+v()*(r-60),30+v()*(o-60),2,2)}),this.floorCache.set(n,i),i}moonDisc(){return this.moon||(this.moon=gn(256,256,n=>{n.fillStyle="#eef4ff",n.beginPath(),n.arc(256/2,256/2,102.4,0,Math.PI*2),n.fill(),n.globalAlpha=.14,n.fillStyle="#9aa4b8";const i=[[.42,.38,.16],[.58,.55,.2],[.4,.62,.12],[.62,.36,.1],[.52,.46,.26]];for(const[s,r,o]of i)n.beginPath(),n.arc(256*s,256*r,256*o,0,Math.PI*2),n.fill();n.globalAlpha=1})),this.moon}coneTex(){return this.cone||(this.cone=gn(128,256,n=>{const i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.42,0),n.lineTo(128*.58,0),n.lineTo(128,256),n.lineTo(0,256),n.closePath(),n.fill()})),this.cone}vignetteTex(){return this.vignette||(this.vignette=gn(512,512,t=>{const n=t.createRadialGradient(256,256,112.64,256,256,317.44);n.addColorStop(0,"#ffffff"),n.addColorStop(.55,"#dfe2ea"),n.addColorStop(1,"#9aa0b0"),t.fillStyle=n,t.fillRect(0,0,512,512)})),this.vignette}}const Jt=new Kx,Zx="./",Gh=`${Zx}frames64.png`,Ea=6,Ld=13,Jx=Ea*Ld;let Dd=null,ua=null;function Qx(){return ua||(ua=new Promise((a,e)=>{const t=new Image;t.onload=()=>{const n=document.createElement("canvas");n.width=t.naturalWidth,n.height=t.naturalHeight;const i=n.getContext("2d");i.imageSmoothingEnabled=!1,i.drawImage(t,0,0),Dd=n,a(n)},t.onerror=()=>e(new Error(`[HeroAtlas] 加载失败: ${Gh}`)),t.src=Gh}),ua)}function jx(){return Dd}function ey(a,e){const t=Math.max(0,Math.min(Jx-1,e|0)),n=t%Ea,i=Math.floor(t/Ea),s=1/Ea,r=1/Ld;a.offset.set(n*s,1-(i+1)*r),a.repeat.set(s,r)}const ty={right:[48,49,50,51,52,53],left:[48,49,50,51,52,53],up:[54,55,56,57,58,59],down:[60,61,62,63,64,65]},ny={idle:{frames:[18,19,20,21,22,23],fps:4,loop:!0},walk:{frames:[48,49,50,51,52,53],fps:10,loop:!0},run:{frames:[48,49,50,51,52,53],fps:14,loop:!0},attack:{frames:[0,1,2,3,4,5],fps:14,loop:!1},cast:{frames:[36,37,38],fps:8,loop:!1},hurt:{frames:[66,67,68,69,70,71],fps:10,loop:!1},death:{frames:[24,25,26],fps:6,loop:!1}};class iy{constructor(e){w(this,"texture");w(this,"action","idle");w(this,"facing","down");w(this,"frameIdx",0);w(this,"elapsed",0);w(this,"done",!1);this.texture=e,this.applyCurrent()}getAction(){return this.action}isFinished(){return this.done}setFacing(e){e!==this.facing&&(this.facing=e,(this.action==="walk"||this.action==="run")&&(this.frameIdx=this.frameIdx%this.walkFrames().length,this.applyCurrent()))}getFacing(){return this.facing}setAction(e){e===this.action&&!this.done||(this.action=e,this.frameIdx=0,this.elapsed=0,this.done=!1,this.applyCurrent())}walkFrames(){return ty[this.facing]}activeDef(){const e=ny[this.action];return this.action==="walk"||this.action==="run"?{frames:this.walkFrames(),fps:e.fps,loop:e.loop}:e}update(e){const t=this.activeDef();this.elapsed+=e;const n=1e3/t.fps;let i=0;for(;this.elapsed>=n&&i++<8;)if(this.elapsed-=n,this.frameIdx+1<t.frames.length)this.frameIdx+=1,this.applyCurrent();else if(t.loop)this.frameIdx=0,this.applyCurrent();else{this.done=!0;break}}applyCurrent(){const e=this.activeDef(),t=e.frames[Math.min(this.frameIdx,e.frames.length-1)];ey(this.texture,t)}}const Hh=new WeakMap;function on(a){let e=Hh.get(a);return e||(e=new si(a),e.colorSpace=Mt,e.magFilter=ft,e.minFilter=Un,e.anisotropy=4,Hh.set(a,e)),e}let Zs=null;function Fd(){if(!Zs){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#39423c",t.fillRect(0,0,128,128);const n=32,i=16;for(let s=0;s<128/i;s++)for(let r=-1;r<128/n+1;r++){const o=r*n+s%2*(n/2),l=s*i,c=.88+(s*7+r*13)%5*.06,h=Math.round(84*c),f=Math.round(100*c),d=Math.round(88*c);t.fillStyle=`rgb(${h},${f},${d})`,t.fillRect(o+1,l+1,n-2,i-2),t.fillStyle="rgba(210,225,210,0.16)",t.fillRect(o+1,l+1,n-2,1),t.fillRect(o+1,l+1,1,i-2),t.fillStyle="rgba(10,16,12,0.28)",t.fillRect(o+1,l+i-2,n-2,1),t.fillRect(o+n-2,l+1,1,i-2),(s*3+r*5)%4===0&&(t.fillStyle="rgba(30,42,34,0.3)",t.beginPath(),t.arc(o+8+(s*11+r*7)%16,l+4+(s*5+r*3)%8,2.2,0,Math.PI*2),t.fill())}Zs=new si(e),Zs.colorSpace=Mt,Zs.wrapS=Hn,Zs.wrapT=Hn}return Zs}function Xa(a,e,t,n,i,s=.16,r=.28){a.fillStyle=`rgba(230,240,235,${s})`,a.fillRect(e+1,t+1,n-2,1),a.fillRect(e+1,t+1,1,i-2),a.fillStyle=`rgba(8,12,10,${r})`,a.fillRect(e+1,t+i-2,n-2,1),a.fillRect(e+n-2,t+1,1,i-2)}function sy(a){const t=a.getContext("2d");t.fillStyle="#2c3a2a",t.fillRect(0,0,128,128);const n=32,i=16;for(let s=0;s<128/i;s++)for(let r=-1;r<128/n+1;r++){const o=r*n+s%2*(n/2),l=s*i,c=.86+(s*5+r*11)%5*.07;t.fillStyle=`rgb(${Math.round(64*c)},${Math.round(94*c)},${Math.round(58*c)})`,t.fillRect(o+1,l+1,n-2,i-2),Xa(t,o,l,n,i),(s*2+r*7)%3===0&&(t.fillStyle="rgba(96,142,70,0.5)",t.beginPath(),t.ellipse(o+10+(s*7+r)%12,l+3,6.5,2.6,0,0,Math.PI*2),t.fill())}for(let s=0;s<4;s++){const r=16+s*32+s*13%10,o=34+s*29%46;t.strokeStyle="rgba(58,102,48,0.85)",t.lineWidth=2,t.beginPath(),t.moveTo(r,0),t.bezierCurveTo(r-6,o*.4,r+7,o*.7,r-2,o),t.stroke(),t.fillStyle="rgba(88,138,64,0.9)";for(let l=6;l<o;l+=9)t.beginPath(),t.ellipse(r+Math.sin(l*.35)*4,l,2.4,3.6,.5,0,Math.PI*2),t.fill()}}function ry(a){const t=a.getContext("2d");t.fillStyle="#38291a",t.fillRect(0,0,128,128);const n=["#8a4b3a","#6a563a","#55684a","#7a5560","#9a7a44","#4c5a6e","#8a6a2e","#5e4a6a"],i=[14,52,90];for(const s of i){t.fillStyle="#4a3626",t.fillRect(4,s+34,120,5),t.fillStyle="rgba(230,200,150,0.18)",t.fillRect(4,s+34,120,1);let r=6,o=s*7%8|0;for(;r<118;){const l=7+(r*13+s*3)%6,c=26+(r*7+s)%8,h=(r*17+s*5)%23===0?.16:0;t.save(),t.translate(r+l/2,s+34),t.rotate(h),t.fillStyle=n[o%n.length],t.fillRect(-l/2,-c,l,c),t.fillStyle="rgba(255,240,210,0.22)",t.fillRect(-l/2,-c,l,1),t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(-l/2+l-1,-c,1,c),t.restore(),r+=l+1,o++}}t.strokeStyle="#2c2013",t.lineWidth=6,t.strokeRect(3,3,122,122),t.strokeStyle="rgba(230,200,150,0.14)",t.lineWidth=1,t.strokeRect(6.5,6.5,115,115)}function ay(a){const t=a.getContext("2d");t.fillStyle="#232840",t.fillRect(0,0,128,128);const n=64,i=43;for(let s=0;s<4;s++)for(let r=-1;r<3;r++){const o=r*n+s%2*(n/2),l=s*i,c=.9+(s*3+r*7)%4*.05;t.fillStyle=`rgb(${Math.round(52*c)},${Math.round(60*c)},${Math.round(92*c)})`,t.fillRect(o+1,l+1,n-2,i-2),Xa(t,o,l,n,i,.12,.32),(s+r)%2===0&&(t.fillStyle="rgba(120,100,180,0.10)",t.fillRect(o+3,l+3,n-6,i-6))}for(let s=0;s<26;s++){const r=(s*37+11)%128,o=(s*61+23)%128;t.fillStyle="rgba(160,180,255,0.25)",t.beginPath(),t.arc(r,o,2,0,Math.PI*2),t.fill(),t.fillStyle="rgba(235,240,255,0.8)",t.fillRect(r-.5,o-.5,1,1)}}function oy(a){const t=a.getContext("2d");t.fillStyle="#6a5030",t.fillRect(0,0,128,128);const n=64,i=64;for(let r=0;r<2;r++)for(let o=0;o<2;o++){const l=o*n,c=r*i,h=.92+(r*3+o*5)%3*.06;t.fillStyle=`rgb(${Math.round(122*h)},${Math.round(97*h)},${Math.round(56*h)})`,t.fillRect(l+2,c+2,n-4,i-4),Xa(t,l+1,c+1,n-2,i-2,.22,.3);for(const[f,d]of[[10,10],[n-10,10],[10,i-10],[n-10,i-10]])t.fillStyle="#3a2c14",t.beginPath(),t.arc(l+f+.8,c+d+.8,3,0,Math.PI*2),t.fill(),t.fillStyle="#d9b878",t.beginPath(),t.arc(l+f,c+d,2.4,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,240,200,0.8)",t.beginPath(),t.arc(l+f-.7,c+d-.7,.9,0,Math.PI*2),t.fill()}t.globalAlpha=.07,t.fillStyle="#ffffff";for(let r=5;r<128;r+=7)t.fillRect(r,0,1,128);t.globalAlpha=1;const s=t.createLinearGradient(0,128,128,0);s.addColorStop(.3,"rgba(255,230,170,0)"),s.addColorStop(.5,"rgba(255,230,170,0.12)"),s.addColorStop(.7,"rgba(255,230,170,0)"),t.fillStyle=s,t.fillRect(0,0,128,128)}function ly(a){const t=a.getContext("2d");t.fillStyle="#cdc7b6",t.fillRect(0,0,128,128);const n=64,i=32;for(let s=0;s<4;s++)for(let r=-1;r<3;r++){const o=r*n+s%2*(n/2),l=s*i,c=.96+(s*5+r*3)%4*.03;t.fillStyle=`rgb(${Math.round(222*c)},${Math.round(216*c)},${Math.round(200*c)})`,t.fillRect(o+1,l+1,n-2,i-2),Xa(t,o,l,n,i,.32,.12),t.strokeStyle="rgba(190,160,100,0.4)",t.lineWidth=1,t.beginPath(),t.moveTo(o+6,l+i-5),t.bezierCurveTo(o+n*.4,l+4,o+n*.6,l+i-8,o+n-6,l+6),t.stroke()}for(let s=0;s<6;s++)t.fillStyle="rgba(212,175,106,0.55)",t.fillRect((s*47+19)%128,(s*71+31)%128,1.4,1.4)}const cy={brick:()=>Fd(),moss:sy,shelf:ry,starstone:ay,brass:oy,marble:ly},Vh=new Map;function Wh(a){if(a==="brick")return Fd();let e=Vh.get(a);if(!e){const t=document.createElement("canvas");t.width=128,t.height=128,cy[a](t),e=new si(t),e.colorSpace=Mt,e.wrapS=Hn,e.wrapT=Hn,Vh.set(a,e)}return e}const hy={rooftops(a){const e=a.getContext("2d"),t=a.width,n=a.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#3d4d61"),i.addColorStop(.65,"#26303e"),i.addColorStop(1,"#1a222c"),e.fillStyle=i,e.fillRect(0,0,t,n),e.fillStyle="#141b24";for(let r=0;r<5;r++){const o=14+r*17%12,l=22+r*23%26;e.fillRect(r*20-4,n*.62-l,o,l)}e.fillStyle="#0e141c";for(let r=0;r<4;r++){const o=22+r*13%10,l=34+r*19%20,c=r*26-6,h=n-l;e.fillRect(c,h,o,l),e.beginPath(),e.moveTo(c-2,h),e.lineTo(c+o/2,h-8),e.lineTo(c+o+2,h),e.closePath(),e.fill(),r%2===0&&(e.fillStyle="rgba(255,214,150,0.75)",e.fillRect(c+6,h+9,3,3),e.fillStyle="#0e141c")}const s=e.createLinearGradient(0,n*.4,0,n);s.addColorStop(0,"rgba(160,178,196,0)"),s.addColorStop(.5,"rgba(160,178,196,0.28)"),s.addColorStop(1,"rgba(160,178,196,0.5)"),e.fillStyle=s,e.fillRect(0,0,t,n)},garden(a){const e=a.getContext("2d"),t=a.width,n=a.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#241a10"),i.addColorStop(1,"#120c06"),e.fillStyle=i,e.fillRect(0,0,t,n);for(const[s,r,o]of[[t*.28,n*.72,16],[t*.66,n*.66,12]]){const l=e.createRadialGradient(s,r,1,s,r,o);l.addColorStop(0,"rgba(217,114,46,0.85)"),l.addColorStop(1,"rgba(217,114,46,0)"),e.fillStyle=l,e.beginPath(),e.arc(s,r,o,0,Math.PI*2),e.fill()}e.fillStyle="#1c2018",e.fillRect(0,n*.78,t,n*.22),e.fillStyle="#161a12";for(let s=0;s<4;s++)e.fillRect(s*26-3,n*.78-10-s*13%14,16,22);e.strokeStyle="rgba(64,106,52,0.9)",e.lineWidth=2.5;for(let s=0;s<3;s++){const r=14+s*30;e.beginPath(),e.moveTo(r,-2),e.bezierCurveTo(r-7,n*.3,r+8,n*.55,r-3,n*.82),e.stroke()}e.fillStyle="rgba(96,138,74,0.95)";for(let s=0;s<14;s++)e.beginPath(),e.ellipse((s*27+9)%t,(s*37+13)%n,2.6,4,.6,0,Math.PI*2),e.fill();e.fillStyle="rgba(150,200,120,0.7)";for(let s=0;s<8;s++)e.fillRect((s*41+7)%t,(s*29+11)%n,1.4,1.4)},clouds(a){const e=a.getContext("2d"),t=a.width,n=a.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#efe5cc"),i.addColorStop(.6,"#cdb994"),i.addColorStop(1,"#9a8460"),e.fillStyle=i,e.fillRect(0,0,t,n);const s=e.createRadialGradient(t/2,n*.42,4,t/2,n*.42,t*.55);s.addColorStop(0,"rgba(255,246,220,0.95)"),s.addColorStop(1,"rgba(255,246,220,0)"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(120,90,58,0.16)";for(let r=0;r<5;r++){const o=n*(.2+r*.16);e.beginPath(),e.ellipse(r*31%t,o,t*.55,7+r%3*3,0,0,Math.PI*2),e.fill()}},starry(a){const e=a.getContext("2d"),t=a.width,n=a.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#2e4a7a"),i.addColorStop(1,"#5a3a7a"),e.fillStyle=i,e.fillRect(0,0,t,n);const s=e.createRadialGradient(t/2,0,4,t/2,0,n*.8);s.addColorStop(0,"rgba(150,110,210,0.4)"),s.addColorStop(1,"rgba(150,110,210,0)"),e.fillStyle=s,e.fillRect(0,0,t,n);for(let r=0;r<40;r++){const o=(r*43+7)%t,l=(r*67+17)%n,c=r%9===0;e.fillStyle=c?"#ffffff":"rgba(230,238,255,0.85)",e.fillRect(o,l,c?2:1.2,c?2:1.2),c&&(e.fillStyle="rgba(255,255,255,0.5)",e.fillRect(o-2,l+.5,6,.8),e.fillRect(o+.5,l-2,.8,6))}e.fillStyle="#e9edff",e.beginPath(),e.arc(t*.74,n*.24,9,0,Math.PI*2),e.fill(),e.fillStyle="#40558a",e.beginPath(),e.arc(t*.74+4,n*.24-2,8.4,0,Math.PI*2),e.fill()},gears(a){const e=a.getContext("2d"),t=a.width,n=a.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#8d99a8"),i.addColorStop(.55,"#b8c4d0"),i.addColorStop(1,"#dfe6ec"),e.fillStyle=i,e.fillRect(0,0,t,n);const s=(r,o,l,c)=>{e.fillStyle="#37301f",e.beginPath(),e.arc(r,o,l,0,Math.PI*2),e.fill();for(let h=0;h<c;h++){const f=Math.PI*2*h/c;e.save(),e.translate(r+Math.cos(f)*l,o+Math.sin(f)*l),e.rotate(f),e.fillRect(-l*.09,-l*.09,l*.2,l*.18),e.restore()}e.fillStyle="#8d99a8",e.beginPath(),e.arc(r,o,l*.32,0,Math.PI*2),e.fill(),e.fillStyle="#2a2416",e.beginPath(),e.arc(r,o,l*.3,0,Math.PI*2),e.fill()};s(t*.34,n*.34,22,10),s(t*.66,n*.52,15,8),e.fillStyle="rgba(238,243,248,0.85)",e.fillRect(0,n*.72,t,n*.28);for(let r=0;r<6;r++)e.fillStyle=`rgba(200,212,224,${.5-r*.06})`,e.beginPath(),e.ellipse(r*37%t,n*(.74+r*.05),t*.6,5+r*2,0,0,Math.PI*2),e.fill()},light(a){const e=a.getContext("2d"),t=a.width,n=a.height,i=e.createRadialGradient(t/2,n*.45,2,t/2,n*.45,n*.75);i.addColorStop(0,"#ffffff"),i.addColorStop(.5,"#efe9d6"),i.addColorStop(1,"#c4bda6"),e.fillStyle=i,e.fillRect(0,0,t,n)}},qh=new Map;function dy(a){let e=qh.get(a);if(!e){const t=document.createElement("canvas");t.width=96,t.height=128,hy[a](t),e=new si(t),e.colorSpace=Mt,e.magFilter=Ut,e.minFilter=Un,a==="gears"&&(e.wrapS=Hn,e.repeat.set(1.6,1)),qh.set(a,e)}return e}let pi=null;function uy(){if(!pi){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#242b20",t.fillRect(0,0,128,128);const n=["#2a3323","#1f261c","#2e3122","#262d1f","#313425"];for(let i=0;i<22;i++){const s=(i*53+17)%128,r=(i*91+29)%128,o=9+i*37%16;t.fillStyle=n[i%n.length],t.globalAlpha=.5,t.beginPath(),t.ellipse(s,r,o,o*(.6+i*13%7/10),i*29%3,0,Math.PI*2),t.fill()}t.globalAlpha=1;for(let i=0;i<46;i++){const s=(i*41+11)%128,r=(i*67+23)%128;t.strokeStyle=i%3===0?"rgba(96,116,70,0.8)":"rgba(76,94,58,0.75)",t.lineWidth=1,t.beginPath(),t.moveTo(s,r),t.lineTo(s+(i%5-2),r-3-i%3),t.stroke()}for(let i=0;i<14;i++){const s=(i*83+31)%128,r=(i*47+59)%128;t.fillStyle="rgba(140,140,132,0.65)",t.fillRect(s,r,1.6,1.2),t.fillStyle="rgba(30,32,28,0.5)",t.fillRect(s,r+1.2,1.6,.8)}pi=new si(e),pi.colorSpace=Mt,pi.wrapS=Hn,pi.wrapT=Hn,pi.magFilter=ft,pi.minFilter=Un}return pi}const Ud=new Map;let fa=null;function fy(a){return new Promise((e,t)=>{const n=new Image;n.onload=()=>{const i=document.createElement("canvas");i.width=n.naturalWidth,i.height=n.naturalHeight,i.getContext("2d").drawImage(n,0,0),Ud.set(a,i),e(i)},n.onerror=()=>t(new Error(`[NpcArt] 立绘加载失败: ${a}`)),n.src=a})}function py(){if(fa)return fa;const a=[...new Set(P.npcs.npcs.filter(e=>e.portrait).map(e=>e.portrait))];return fa=Promise.allSettled(a.map(fy)).then(()=>{}),fa}function Xh(a){return Ud.get(a)??null}const Yh={spore:{colors:["#9ad97a","#ffb060","#9ad97a","#e8954a"],count:26,rise:.32,drift:.5,size:[.05,.11],shape:"dot"},dust:{colors:["#ffe9c0","#e8d0a0"],count:22,rise:.05,drift:.3,size:[.04,.09],shape:"dot"},stardust:{colors:["#cfe0ff","#e8eaff","#b0c0ff"],count:30,rise:-.04,drift:.55,size:[.04,.1],shape:"dot",meteorPerSec:.22},ember:{colors:["#7ab8ff","#a0d0ff","#5a9ae8"],count:20,rise:.1,drift:.22,size:[.05,.1],shape:"square"}};function $h(a){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");t.fillStyle="#ffffff",a==="dot"?(t.beginPath(),t.arc(8,8,7,0,Math.PI*2),t.fill()):t.fillRect(2,2,12,12);const n=new si(e);return n.colorSpace=Mt,n}const Qn=class Qn{constructor(){w(this,"group",null);w(this,"items",[]);w(this,"spec",null);w(this,"texCache",new Map);w(this,"meteor",null);w(this,"meteorCooldown",0)}static getInstance(){return Qn.instance||(Qn.instance=new Qn),Qn.instance}configure(e){if(this.spec!==(e==="none"?null:Yh[e])&&(this.clear(),e!=="none")){this.spec=Yh[e];for(let t=0;t<this.spec.count;t++)this.items.push(this.makeItem(this.spec,t))}}makeItem(e,t){const n=`t_${e.shape}`;let i=this.texCache.get(n);i||(i=$h(e.shape),this.texCache.set(n,i));const s=new Qt(new Yt({map:i,color:new Le(e.colors[t%e.colors.length]),transparent:!0,opacity:0,depthTest:!0,depthWrite:!1}));s.renderOrder=3;const[r,o]=e.size;return{sprite:s,phase:Math.random(),speed:.05+Math.random()*.08,drift:e.drift*(.5+Math.random()),colorIdx:t%e.colors.length,baseSize:r+Math.random()*(o-r)}}syncTo(e){if(this.group!==e){this.group=e;for(const t of this.items)e.add(t.sprite);this.meteor&&e.add(this.meteor.sprite)}}update(e,t,n,i){const s=this.spec;if(!s||!this.group)return;const r=Qn.RADIUS;for(const o of this.items){o.phase=(o.phase+o.speed*e)%1;const l=o.phase,c=o.phase*Math.PI*2+o.colorIdx*1.7,h=t+Math.sin(c)*r*(.35+o.drift/2*.65),f=n+Math.cos(c*.8+1.3)*r*.75,d=.3+l*(2.6+o.colorIdx%3*.8);o.sprite.position.set(h+Math.sin(i*.6+o.colorIdx*2.1)*o.drift,s.rise>=0?d:3.4-d,f+Math.cos(i*.5+o.colorIdx*1.3)*o.drift*.6);const u=o.sprite.material;u.opacity=Math.sin(l*Math.PI)*.75;const p=o.baseSize*(.8+.3*Math.sin(i*1.1+o.colorIdx));o.sprite.scale.set(p,p,1)}if(s.meteorPerSec&&s.meteorPerSec>0&&(this.meteorCooldown-=e,!this.meteor&&this.meteorCooldown<=0&&(this.meteorCooldown=1/s.meteorPerSec*(.6+Math.random()),this.spawnMeteor(t,n))),this.meteor){const o=this.meteor;o.life-=e,o.life<=0?(this.group.remove(o.sprite),o.sprite.material.dispose(),this.meteor=null):(o.sprite.position.x+=o.vx*e,o.sprite.position.z+=o.vz*e,o.sprite.position.y-=5.5*e,o.sprite.material.opacity=Math.min(1,o.life/o.maxLife*1.6)*.9)}}spawnMeteor(e,t){if(!this.group)return;const n=new Qt(new Yt({map:this.items[0]?.sprite.material.map??$h("dot"),color:new Le("#eaf2ff"),transparent:!0,opacity:.9,depthTest:!0,depthWrite:!1,blending:ln}));n.scale.set(.5,.05,1);const i=e+(Math.random()-.5)*10;n.position.set(i,9+Math.random()*4,t-4-Math.random()*4),n.renderOrder=4,this.group.add(n);const s=Math.random()>.5?1:-1;this.meteor={sprite:n,vx:s*(3.5+Math.random()*2),vz:1.2,life:.9,maxLife:.9}}clear(){for(const e of this.items)e.sprite.parent?.remove(e.sprite),e.sprite.material.dispose();this.items=[],this.meteor&&(this.meteor.sprite.parent?.remove(this.meteor.sprite),this.meteor.sprite.material.dispose(),this.meteor=null),this.spec=null}};w(Qn,"instance"),w(Qn,"RADIUS",13);let Er=Qn;const Ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class As{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const my=new Va(-1,1,1,-1,0,1);class gy extends kt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const vy=new gy;class Ya{constructor(e){this._mesh=new Pe(vy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,my)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Aa extends As{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_i.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ya(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kh extends As{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class xy extends As{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Aa(Ta),this.copyPass.material.blending=kn,this.timer=new Gp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kh!==void 0&&(r instanceof Kh?n=!0:r instanceof xy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class My extends As{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const by={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ar extends As{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(s,r,{type:Wt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ot(s,r,{type:Wt});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Ot(s,r,{type:Wt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}const o=by;this.highPassUniforms=_i.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ee(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_i.clone(Ta.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:Ta.vertexShader,fragmentShader:Ta.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new jn,this._fsQuad=new Ya(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ar.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ar.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ar.BlurDirectionX=new Ee(1,0);ar.BlurDirectionY=new Ee(0,1);const pa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class _y extends As{constructor(){super(),this.isOutputPass=!0,this.uniforms=_i.clone(pa.uniforms),this.material=new Md({name:pa.name,uniforms:this.uniforms,vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader}),this._fsQuad=new Ya(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$l?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Jl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ma={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ga={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Fo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Sy extends As{constructor(){super(),this._edgesRT=new Ot(1,1,{depthBuffer:!1,type:Wt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Ot(1,1,{depthBuffer:!1,type:Wt}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Nt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Ut,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Nt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=ft,this._searchTexture.minFilter=ft,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=_i.clone(ma.uniforms),this._materialEdges=new Ct({defines:Object.assign({},ma.defines),uniforms:this._uniformsEdges,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader}),this._uniformsWeights=_i.clone(ga.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Ct({defines:Object.assign({},ga.defines),uniforms:this._uniformsWeights,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._uniformsBlend=_i.clone(Fo.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Ct({uniforms:this._uniformsBlend,vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader}),this._fsQuad=new Ya(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const wy={uniforms:{tDiffuse:{value:null},tDepth:{value:null},uTexel:{value:new Ee(1/640,1/360)},uNear:{value:.1},uFar:{value:200},uDepthSlope:{value:.006},uDepthMin:{value:.03},uLumaThresh:{value:.55},uLumaStrength:{value:.32},uColor:{value:new Le(922137)},uStrength:{value:.9}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform sampler2D tDepth;
    uniform vec2 uTexel;
    uniform float uNear;
    uniform float uFar;
    uniform float uDepthSlope;
    uniform float uDepthMin;
    uniform float uLumaThresh;
    uniform float uLumaStrength;
    uniform vec3 uColor;
    uniform float uStrength;
    varying vec2 vUv;

    /** 透视深度 → 视空间线性距离 */
    float viewZ(vec2 uv) {
      float d = texture2D(tDepth, uv).x;
      float ndc = d * 2.0 - 1.0;
      return (2.0 * uNear * uFar) / (uFar + uNear - ndc * (uFar - uNear));
    }
    float luma(vec2 uv) {
      vec3 c = texture2D(tDiffuse, uv).rgb;
      return dot(c, vec3(0.299, 0.587, 0.114));
    }

    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 color = tex.rgb;

      // 深度边缘：几何外描边（墙/道具/楼梯的剪影线）
      float zc = viewZ(vUv);
      float dEdge = 0.0;
      if (zc < uFar * 0.985) { // 天空/虚空不出边
        float thresh = max(uDepthMin, uDepthSlope * max(zc, 1.0));
        float z1 = abs(viewZ(vUv + vec2(uTexel.x, 0.0)) - zc);
        float z2 = abs(viewZ(vUv - vec2(uTexel.x, 0.0)) - zc);
        float z3 = abs(viewZ(vUv + vec2(0.0, uTexel.y)) - zc);
        float z4 = abs(viewZ(vUv - vec2(0.0, uTexel.y)) - zc);
        dEdge = max(max(step(thresh, z1), step(thresh, z2)), max(step(thresh, z3), step(thresh, z4)));
      }

      // 亮度边缘：纸片人（Sprite 不写深度）与关键道具的描边加重
      float lc = luma(vUv);
      float l1 = abs(luma(vUv + vec2(uTexel.x, 0.0)) - lc);
      float l2 = abs(luma(vUv - vec2(uTexel.x, 0.0)) - lc);
      float l3 = abs(luma(vUv + vec2(0.0, uTexel.y)) - lc);
      float l4 = abs(luma(vUv - vec2(0.0, uTexel.y)) - lc);
      float mag = max(max(l1, l2), max(l3, l4));
      float lEdge = smoothstep(uLumaThresh, uLumaThresh * 2.2, mag) * uLumaStrength;

      float edge = clamp(dEdge + lEdge, 0.0, 1.0) * uStrength;
      color = mix(color, uColor, edge);
      gl_FragColor = vec4(color, tex.a);
    }
  `},Ey={uniforms:{tDiffuse:{value:null},uLevels:{value:8}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uLevels;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      vec3 color = max(tex.rgb, 0.0);
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      if (luma > 0.0005) {
        float lq = floor(sqrt(luma) * uLevels + 0.5) / uLevels;
        lq = lq * lq;
        // 钳制量化带来的亮度偏移：色阶是着色风格，不是曝光变化
        float scale = clamp(lq / luma, 0.72, 1.28);
        vec3 banded = color * scale;
        // 保留 12% 原始像素：软化色阶等高线的像素级 stair-step（锯齿感来源之一）
        gl_FragColor = vec4(mix(banded, color, 0.12), tex.a);
      } else {
        gl_FragColor = vec4(color, tex.a);
      }
    }
  `},Ty={uniforms:{tDiffuse:{value:null},uVignetteStrength:{value:.3},uVignetteOffset:{value:1},uVignetteDarkness:{value:1.1},uGamma:{value:1.05},uContrast:{value:1.05},uSaturation:{value:1.1},uBrightness:{value:1},uTint:{value:new U(1,1,1)},uTintStrength:{value:0}},vertexShader:`
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
    uniform vec3 uTint;
    uniform float uTintStrength;
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

      // per-tier 色温偏移（轻量 LUT：乘法色温）
      color *= mix(vec3(1.0), uTint, uTintStrength);

      // 暗角：径向压暗，最大压暗量 = uVignetteStrength（硬上限，保证整体可读）
      vec2 p = (vUv - 0.5) * uVignetteOffset;
      float vig = smoothstep(0.35, 0.85, length(p) * uVignetteDarkness);
      color *= 1.0 - vig * uVignetteStrength;

      gl_FragColor = vec4(clamp(color, 0.0, 1.0), tex.a);
    }
  `};class Ay{constructor(){w(this,"composer",null);w(this,"bloomPass",null);w(this,"gradePass",null);w(this,"edgePass",null);w(this,"posterizePass",null);w(this,"smaaPass",null);w(this,"renderer",null);w(this,"scene",null);w(this,"camera",null);w(this,"depthRT",null);w(this,"depthMat",new jn({color:0}));w(this,"tierTint",new U(1,1,1));w(this,"tierTintStrength",0);w(this,"tierVignette",.16);w(this,"cineTint",null);w(this,"cineStrength",0);w(this,"cineVignetteBoost",0);w(this,"curTint",new U(1,1,1));w(this,"curStrength",0);w(this,"curVignette",.16)}get ready(){return this.composer!==null}init(e,t,n,i,s){const r=P.config.postProcess;this.renderer=e,this.scene=t,this.camera=n;const o=e.getPixelRatio(),l=new Ot(Math.max(2,Math.floor(i*o)),Math.max(2,Math.floor(s*o)),{type:Wt,samples:4}),c=new yy(e,l);c.setSize(i,s),c.addPass(new My(t,n));const h=new ar(new Ee(i,s),r.bloom.strength,r.bloom.radius,r.bloom.threshold);h.enabled=r.bloom.enabled,c.addPass(h),this.bloomPass=h,c.addPass(new _y),this.buildDepthRT(Math.max(2,Math.floor(i/2)),Math.max(2,Math.floor(s/2)));const f=new Aa(wy);f.uniforms.uNear.value=this.camera.near,f.uniforms.uFar.value=this.camera.far,this.depthRT&&(f.uniforms.tDepth.value=this.depthRT.depthTexture),c.addPass(f),this.edgePass=f;const d=new Aa(Ey);d.uniforms.uLevels.value=4,c.addPass(d),this.posterizePass=d;const u=new Aa(Ty),p=u.uniforms;p.uVignetteOffset.value=r.vignette.offset,p.uVignetteDarkness.value=r.vignette.darkness,p.uGamma.value=r.adjustment.gamma,p.uContrast.value=r.adjustment.contrast,p.uSaturation.value=r.adjustment.saturation,p.uBrightness.value=r.adjustment.brightness,u.enabled=r.vignette.enabled||r.adjustment.enabled,c.addPass(u),this.gradePass=u;const v=new Sy;c.addPass(v),this.smaaPass=v,this.composer=c}buildDepthRT(e,t){this.depthRT?.dispose();const n=new bs(e,t);n.minFilter=ft,n.magFilter=ft;const i=new Ot(e,t,{depthTexture:n,depthBuffer:!0,minFilter:ft,magFilter:ft});this.depthRT=i,this.edgePass&&(this.edgePass.uniforms.tDepth.value=i.depthTexture,this.edgePass.uniforms.uTexel.value.set(1/e,1/t))}setTier(e){this.tierTint.set(e.grade.tint[0],e.grade.tint[1],e.grade.tint[2]),this.tierTintStrength=e.grade.tintStrength,this.tierVignette=e.grade.vignette}setCinematicTint(e,t,n=0){this.cineTint=new U(e[0],e[1],e[2]),this.cineStrength=t,this.cineVignetteBoost=n}clearCinematicTint(){this.cineTint=null,this.cineStrength=0,this.cineVignetteBoost=0}tick(e){const t=this.gradePass;if(!t)return;const n=Math.min(1,e/260),i=this.cineTint??this.tierTint,s=this.cineTint?this.cineStrength:this.tierTintStrength,r=P.config.render.vignetteMax,o=Math.min(r,this.tierVignette+this.cineVignetteBoost);this.curTint.lerp(i,n),this.curStrength+=(s-this.curStrength)*n,this.curVignette+=(o-this.curVignette)*n,t.uniforms.uTint.value.copy(this.curTint),t.uniforms.uTintStrength.value=this.curStrength,t.uniforms.uVignetteStrength.value=this.curVignette}setSize(e,t){this.composer?.setSize(e,t),this.bloomPass?.setSize(e,t),e>1&&t>1&&this.buildDepthRT(Math.floor(e/2),Math.floor(t/2))}renderDepthPrepass(){if(!this.renderer||!this.scene||!this.camera||!this.depthRT)return;const e=[];this.scene.traverse(i=>{(i.isSprite||i.isPoints)&&i.visible&&(i.visible=!1,e.push(i))});const t=this.scene.overrideMaterial,n=this.renderer.shadowMap.autoUpdate;this.renderer.shadowMap.autoUpdate=!1,this.scene.overrideMaterial=this.depthMat,this.renderer.setRenderTarget(this.depthRT),this.renderer.render(this.scene,this.camera),this.scene.overrideMaterial=t,this.renderer.shadowMap.autoUpdate=n,this.renderer.setRenderTarget(null);for(const i of e)i.visible=!0}render(){this.composer&&(this.edgePass?.enabled&&this.renderDepthPrepass(),this.composer.render())}dispose(){this.bloomPass?.dispose(),this.gradePass?.dispose(),this.edgePass?.dispose(),this.posterizePass?.dispose(),this.smaaPass?.dispose(),this.composer?.dispose(),this.depthRT?.dispose(),this.depthMat.dispose(),this.composer=null,this.bloomPass=null,this.gradePass=null,this.edgePass=null,this.posterizePass=null,this.smaaPass=null,this.depthRT=null}}const gi=new Ay,Zh=2,Cy=1.5,Ry={start:16773853,combat:16757575,elite:16751164,chest:16765286,merchant:16771524,blacksmith:16756832,witch:13077759,boss:16734794,end:12376319,rest:16771524,corridor:16746564},Py=12,Iy=6,Ly=.1,Dy=.55,va=16,Fy=-.12,Jh=.24,Vt=class Vt{constructor(){w(this,"hoverTile",null);w(this,"renderer",null);w(this,"scene",null);w(this,"camera",null);w(this,"container",null);w(this,"raycaster",new Vp);w(this,"ready",!1);w(this,"builtFloorId",-1);w(this,"floorGroup",new At);w(this,"wallGroup",new At);w(this,"entityGroup",new At);w(this,"particleGroup",new At);w(this,"hoverMesh",null);w(this,"playerSprite",null);w(this,"heroAnimator",null);w(this,"heroBaseW",1);w(this,"heroFacing","down");w(this,"playerShadow",null);w(this,"playerContact",null);w(this,"gates",[]);w(this,"wallCells",new Map);w(this,"fadeCells",new Map);w(this,"fadePool",[]);w(this,"fadeScanTimer",0);w(this,"focusX",0);w(this,"focusZ",0);w(this,"focusInit",!1);w(this,"lastTimeMs",0);w(this,"shakeTime",0);w(this,"shakeTotal",0);w(this,"shakeIntensity",0);w(this,"ambient",null);w(this,"dirLight",null);w(this,"starField",null);w(this,"starMat",null);w(this,"moonGroup",null);w(this,"playerTorch",null);w(this,"torchLights",new Map);w(this,"glowLights",new Map);w(this,"torchPool",[]);w(this,"glowPool",[]);w(this,"torchCursor",0);w(this,"glowCursor",0);w(this,"glowSprites",[]);w(this,"litSprites",[]);w(this,"dustItems",[]);w(this,"spiritFx",null);w(this,"spiritDots",[]);w(this,"phantoms",[]);w(this,"currentTier",Go(1));w(this,"windowScrollers",[]);w(this,"camFx",null);w(this,"baseFov",45);w(this,"heroVis",{x:0,z:0,init:!1});w(this,"lastContainerW",0);w(this,"lastContainerH",0)}static getInstance(){return Vt.instance||(Vt.instance=new Vt),Vt.instance}async init(e){this.container=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight,i=new gp;i.background=new Le(0),this.scene=i;const s=P.config.camera3D,r=new hn(s.fov,t/n,.1,200);this.camera=r,this.baseFov=s.fov;let o;try{o=new Bx({antialias:!0})}catch(l){console.error("[Three] WebGL 初始化失败",l),e.innerHTML='<div style="padding:24px;color:#ff8888">当前环境不支持 WebGL，无法启动游戏渲染。</div>';return}o.setPixelRatio(Math.min(Math.max(window.devicePixelRatio||1,1.5),2)),o.setSize(t,n),o.shadowMap.enabled=!0,o.shadowMap.type=Js,o.outputColorSpace=Mt,o.toneMapping=Ga,o.toneMappingExposure=1.35,o.domElement.id="game-canvas",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.display="block",o.domElement.style.cursor="crosshair",e.appendChild(o.domElement),this.renderer=o,this.setupLights(),i.add(this.floorGroup,this.wallGroup,this.entityGroup,this.particleGroup),this.buildHoverMesh(),this.buildStars(),gi.init(o,i,r,t,n),or.getInstance().attachCanvas(o.domElement),this.ready=!0,this.rebuildFloor(),q.on("floorChanged",l=>{this.rebuildFloor(),Ho(l.toFloor)&&l.toFloor!==1&&this.playTierSway()}),q.on("gameStarted",()=>{Be.getInstance().currentFloor?.floorId===1&&this.playIntroRise()}),q.on("saveLoaded",()=>this.rebuildFloor()),q.on("gameRestarted",()=>this.rebuildFloor()),q.on("monsterDefeated",()=>this.rebuildEntities()),q.on("chestOpened",()=>this.rebuildEntities()),q.on("potionPicked",()=>this.rebuildEntities()),q.on("battleEnded",l=>{l.result.damageTaken>ge.getInstance().maxHp*.3&&this.shake(.3,320)}),q.on("bossDefeated",()=>this.shake(.45,520)),q.on("playerDied",()=>this.shake(.35,420)),window.addEventListener("resize",()=>this.resize())}setupLights(){if(!this.scene)return;this.ambient=new Up(5069426,2366226,.6),this.scene.add(this.ambient);const e=new kp(14674431,.55);e.position.set(Vt.MOON_OFFSET.x,Vt.MOON_OFFSET.y,Vt.MOON_OFFSET.z),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=140;const t=24;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-6e-4,e.shadow.normalBias=.02,e.shadow.radius=6,e.shadow.blurSamples=12,this.scene.add(e),this.scene.add(e.target),this.dirLight=e,this.moonGroup=new At;const n=new Qt(new Yt({map:on(Jt.moonDisc()),transparent:!0,depthWrite:!1,fog:!1}));n.scale.set(7,7,1),this.moonGroup.add(n);const i=new Qt(new Yt({map:on(Jt.glow("rgba(225,235,255,0.85)")),blending:ln,transparent:!0,depthWrite:!1,fog:!1,opacity:.38}));i.scale.set(24,24,1),i.renderOrder=-1,this.moonGroup.add(i),this.moonGroup.position.set(Vt.MOON_OFFSET.x,Vt.MOON_OFFSET.y,Vt.MOON_OFFSET.z),this.scene.add(this.moonGroup),this.playerTorch=new Ao(16751165,1.7,11),this.playerTorch.decay=1.5,this.playerTorch.castShadow=!1,this.scene.add(this.playerTorch);for(let s=0;s<Py;s++){const r=new Ao(16748608,0,10);r.decay=1.6,this.scene.add(r),this.torchPool.push(r)}for(let s=0;s<Iy;s++){const r=new Ao(16777215,0,6);this.scene.add(r),this.glowPool.push(r)}}buildStars(){if(!this.scene)return;const e=520,t=new Float32Array(e*3),n=new Float32Array(e),i=new Float32Array(e);for(let r=0;r<e;r++){const o=Math.random()*2-1,l=Math.random()*Math.PI*2,c=110+Math.random()*60,h=Math.sqrt(1-o*o);t[r*3]=c*h*Math.cos(l),t[r*3+1]=c*o,t[r*3+2]=c*h*Math.sin(l),n[r]=Math.random(),i[r]=1.2+Math.random()*Math.random()*4.5}const s=new kt;s.setAttribute("position",new Kt(t,3)),s.setAttribute("aPhase",new Kt(n,1)),s.setAttribute("aSize",new Kt(i,1)),this.starMat=new Ct({uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:ln,vertexShader:`
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
      `}),this.starField=new Cp(s,this.starMat),this.starField.frustumCulled=!1,this.scene.add(this.starField)}buildHoverMesh(){const e=new fc(.34,.46,4),t=new jn({color:16777215,transparent:!0,opacity:.6,side:Dn}),n=new Pe(e,t);n.rotation.x=-Math.PI/2,n.rotation.z=Math.PI/4,n.position.y=.06,n.visible=!1,n.renderOrder=2,this.hoverMesh=n,this.scene?.add(n)}rebuildFloor(){if(!this.ready)return;const e=Be.getInstance().currentFloor;if(e){this.builtFloorId=e.floorId,this.applyTier(e.floorId),this.focusInit=!1,this.heroVis.init=!1;for(const t of[...this.fadeCells.keys()])this.releaseFadeWall(t);this.fadeCells.clear(),this.clearGroup(this.floorGroup),this.clearGroup(this.wallGroup),this.buildGround(e),this.buildFloorTiles(e),this.buildRoomCarpets(e),this.buildWalls(e),this.buildWindows(e),this.rebuildEntities()}}buildGround(e){const t=new Set;for(const l of e.rooms)for(const c of l.entities)if(c.kind==="stair"&&c.stairSpan===2)for(const[h,f]of[[0,0],[1,0],[0,1],[1,1]])t.add(`${c.x+h},${c.y+f}`);const n=[];for(let l=-va;l<e.height+va;l++)for(let c=-va;c<e.width+va;c++)l>=0&&l<e.height&&c>=0&&c<e.width&&t.has(`${c},${l}`)||n.push([c,l]);const i=new tt({map:uy(),roughness:.92,metalness:.02,color:this.currentTier.floorTint}),s=new Mr(new Je(1,Jh,1),i,n.length);s.receiveShadow=!0;const r=new pt,o=new Le;n.forEach(([l,c],h)=>{r.position.set(l+.5,Fy-Jh/2,c+.5),r.updateMatrix(),s.setMatrixAt(h,r.matrix);const f=Math.sin(l*127.1+c*311.7+7.7)*43758.5453,d=f-Math.floor(f);o.setScalar(.94+d*.12),s.setColorAt(h,o)}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.floorGroup.add(s)}applyTier(e){const t=Go(e);this.currentTier=t,this.ambient&&(this.ambient.color.setHex(t.light.hemiSky),this.ambient.groundColor.setHex(t.light.hemiGround),this.ambient.intensity=t.light.hemiIntensity),this.dirLight&&this.dirLight.color.setHex(t.light.dirColor),this.dirLight&&(this.dirLight.intensity=t.light.dirIntensity),this.scene&&(this.scene.background=new Le(t.bgColor)),this.starField&&(this.starField.visible=t.sky),this.moonGroup&&(this.moonGroup.visible=t.sky),gi.setTier(t),Er.getInstance().configure(t.particle),this.windowScrollers=[]}buildRoomCarpets(e){const t=new Set(["merchant","witch"]);for(const n of e.rooms){if(!t.has(n.type))continue;const i=n.width-2,s=n.height-2;if(i<=0||s<=0)continue;const r=new Pe(new ei(i,s),new tt({map:on(Jt.roomCarpet(i,s)),roughness:.94,metalness:.02,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));r.rotation.x=-Math.PI/2,r.position.set(n.x+1+i/2,.012,n.y+1+s/2),r.receiveShadow=!0,this.floorGroup.add(r)}}roomGridOf(e){const t={};for(const n of e.rooms)for(let i=n.y;i<n.y+n.height;i++)for(let s=n.x;s<n.x+n.width;s++)t[`${s},${i}`]=n.type;return t}buildFloorTiles(e){const t=new Set;for(const r of e.rooms)for(const o of r.entities)if(o.kind==="stair"&&o.stairSpan===2)for(const[l,c]of[[0,0],[1,0],[0,1],[1,1]])t.add(`${o.x+l},${o.y+c}`);const n=this.roomGridOf(e),i=new Map;for(let r=0;r<e.height;r++)for(let o=0;o<e.width;o++){if(e.grid[r][o]!==0||t.has(`${o},${r}`))continue;const l=n[`${o},${r}`]??"corridor",c=(r+o)%2===0?0:1,h=`${l}_${c}`;let f=i.get(h);f||(f={roomKey:l,checker:c,cells:[]},i.set(h,f)),f.cells.push([o,r])}const s=new pt;for(const r of i.values()){const o=Jt.floor(r.roomKey,r.checker),l=new tt({map:on(o),roughness:.85,metalness:.05,color:this.currentTier.floorTint}),c=r.roomKey==="corridor"?Dy:Ly,h=new Mr(new Je(1,c,1),l,r.cells.length);h.receiveShadow=!0;const f=new Le;r.cells.forEach(([d,u],p)=>{s.position.set(d+.5,-c/2,u+.5),s.updateMatrix(),h.setMatrixAt(p,s.matrix);const v=Math.sin(d*127.1+u*311.7)*43758.5453,m=v-Math.floor(v);f.setScalar(.94+m*.12),h.setColorAt(p,f)}),h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),this.floorGroup.add(h)}}buildWalls(e){const t=this.roomGridOf(e),n=P.config.heights,i=jt.tileSize,s=new Map,r=new Map,o=[];for(let h=0;h<e.height;h++)for(let f=0;f<e.width;f++){const d=e.grid[h][f];if(d!==1&&d!==2)continue;const u=d===2,p=t[`${f},${h}`];if(!u&&!p){o.push([f,h]);continue}const v=u?n.pillar:n.wallByRoom[p]??n.corridorWall,m=Math.max(.5,v/i),g=m.toFixed(2),_=u?r:s;let S=_.get(g);S||(S={h:m,cells:[]},_.set(g,S)),S.cells.push([f,h])}const l=new pt;this.wallCells.clear();const c=new tt({map:Wh(this.currentTier.wall),roughness:.8,metalness:.08});for(const h of s.values()){const f=c,d=new Mr(new Je(1,h.h+.16,1),f,h.cells.length);d.castShadow=!0,d.receiveShadow=!0,h.cells.forEach(([u,p],v)=>{l.position.set(u+.5,(h.h-.16)/2,p+.5),l.updateMatrix(),d.setMatrixAt(v,l.matrix),this.wallCells.set(`${u},${p}`,{mesh:d,index:v,col:u,row:p,h:h.h})}),d.instanceMatrix.needsUpdate=!0,this.wallGroup.add(d)}for(const h of r.values())for(const[f,d]of h.cells){const u=new At,p=new tt({color:7307124,roughness:.72,metalness:.12}),v=new tt({color:5727580,roughness:.8,metalness:.1}),m=new Pe(new Je(.52,.14,.52),v);m.position.y=.07;const g=Math.max(.2,h.h-.26),_=new Pe(new Jn(.15,.19,g,10),p);_.position.y=.14+g/2;const S=new Pe(new Je(.48,.12,.48),v);S.position.y=.14+g+.06;for(const y of[m,_,S])y.castShadow=!0,y.receiveShadow=!0,u.add(y);u.position.set(f+.5,-.14,d+.5),this.wallGroup.add(u)}o.length>0&&this.buildFences(o,Math.max(.5,n.corridorWall/i),e.grid)}buildFences(e,t,n){const i=[],s=[];for(const[h,f]of e)(n[f]?.[h-1]===1||n[f]?.[h+1]===1?i:s).push([h,f]);const r=Math.max(.4,t*.62),o=new tt({color:7037266,roughness:.75,metalness:.25}),l=new pt,c=(h,f)=>{if(h.length===0)return;const d=new Mr(new Je(.08,r,.08),o,h.length*2);d.castShadow=!0,d.receiveShadow=!0;let u=0;for(const[m,g]of h)for(const _ of[-.24,.24])l.position.set(m+.5+(f?0:_),r/2-.13,g+.5+(f?_:0)),l.updateMatrix(),d.setMatrixAt(u++,l.matrix);d.instanceMatrix.needsUpdate=!0,this.wallGroup.add(d);const p=new Mr(new Je(f?.1:.98,.08,f?.98:.1),o,h.length);p.castShadow=!0;let v=0;for(const[m,g]of h)l.position.set(m+.5,r*.86-.13,g+.5),l.updateMatrix(),p.setMatrixAt(v++,l.matrix);p.instanceMatrix.needsUpdate=!0,this.wallGroup.add(p)};c(i,!1),c(s,!0)}buildWindows(e){const t=this.currentTier,n=dy(t.windowView);t.windowView==="gears"&&this.windowScrollers.push({tex:n,speed:.012});const i=new tt({map:n,emissive:new Le(t.windowGlow),emissiveMap:n,emissiveIntensity:.75,roughness:.9}),s=new tt({color:t.wall==="brass"?9071935:4864038,roughness:.7,metalness:t.wall==="brass"?.55:.2}),r=.72,o=.92;for(const l of e.rooms){if(l.width<5)continue;let c=0;for(let h=l.y;h<l.y+l.height&&c<3;h++)for(let f=l.x;f<l.x+l.width&&c<3;f++){if(!(f===l.x||f===l.x+l.width-1||h===l.y||h===l.y+l.height-1)||e.grid[h]?.[f]!==1||(f*31+h*17)%5!==0)continue;let u=0,p=0;if(e.grid[h+1]?.[f]===0&&h===l.y)p=1;else if(e.grid[h-1]?.[f]===0&&h===l.y+l.height-1)p=-1;else if(e.grid[h]?.[f+1]===0&&f===l.x)u=1;else if(e.grid[h]?.[f-1]===0&&f===l.x+l.width-1)u=-1;else continue;const m=this.wallCells.get(`${f},${h}`)?.h??2,g=Math.min(m*.52,1.85),_=new At,S=new Pe(new ei(r,o),i);_.add(S);const y=.07,E=[[0,o/2+y/2,r+y*2,y,y],[0,-o/2-y/2,r+y*2,y,y],[-r/2-y/2,0,y,o,y],[r/2+y/2,0,y,o,y],[0,0,r,y*.55,y*.6],[0,0,y*.55,o,y*.6]];for(const[T,R,M,C,L]of E){const I=new Pe(new Je(M,C,L),s);I.position.set(T,R,.015),I.castShadow=!0,_.add(I)}_.position.set(f+.5+u*.545,g,h+.5+p*.545),_.rotation.y=p===1?0:p===-1?Math.PI:u===1?Math.PI/2:-Math.PI/2,this.wallGroup.add(_),c++}}}computeOccludedWalls(){const e=new Set,t=Be.getInstance().currentFloor;if(!t)return e;const n=t.grid,i=P.config.camera3D,s=this.focusX,r=this.focusZ+i.distance,o=(h,f)=>{if(n[f]?.[h]!==1)return;const d=`${h},${f}`;this.wallCells.has(d)&&e.add(d)},l=(h,f)=>{const d=h+.5,u=f+.5,p=s-d,v=r-u,m=Math.hypot(p,v);if(m<.001)return;const g=p/m,_=v/m,S=.2,y=Math.min(m,Cy);for(let E=.5;E<=y;E+=S){const T=Math.floor(d+g*E),R=Math.floor(u+_*E);if(R<0||R>=t.height||T<0||T>=t.width)break;n[R][T]===1&&(o(T,R),o(T-1,R),o(T+1,R))}},c=ge.getInstance().pos;l(c.x,c.y);for(const{entity:h}of Be.getInstance().allEntities())(h.kind==="monster"||h.kind==="boss"||h.kind==="chest"||h.kind==="npc"||h.kind==="stair")&&l(h.x,h.y);return e}updateWallFade(e){if(this.fadeScanTimer-=e,this.fadeScanTimer<=0){this.fadeScanTimer=120;const i=this.computeOccludedWalls();for(const s of i){const r=this.fadeCells.get(s);r?r.target=1:this.fadeCells.set(s,{progress:0,target:1})}for(const[s,r]of this.fadeCells)i.has(s)||(r.target=0)}const t=Math.min(1,e/180),n=[];for(const[i,s]of this.fadeCells){const r=s.progress;s.progress+=(s.target-s.progress)*t,Math.abs(s.target-s.progress)<.01&&(s.progress=s.target);const o=this.wallCells.get(i);if(!o){n.push(i);continue}r!==s.progress&&(s.progress>.02?(this.setWallInstanceHidden(o,!0),this.showFadeWall(i,o,s.progress)):(this.setWallInstanceHidden(o,!1),this.releaseFadeWall(i),s.target===0&&n.push(i)))}for(const i of n)this.fadeCells.delete(i)}setWallInstanceHidden(e,t){const n=new pt;t?(n.position.set(0,-999,0),n.scale.set(1e-4,1e-4,1e-4)):(n.position.set(e.col+.5,e.h/2,e.row+.5),n.scale.set(1,1,1)),n.updateMatrix(),e.mesh.setMatrixAt(e.index,n.matrix),e.mesh.instanceMatrix.needsUpdate=!0}showFadeWall(e,t,n){let i=this.fadePool.find(s=>s.key===e);if(!i){if(i=this.fadePool.find(s=>s.key===null),!i){const s=new Pe(new Je(1,1,1),new tt({map:Wh(this.currentTier.wall),roughness:.8,metalness:.08,transparent:!0,opacity:1,depthWrite:!1}));s.castShadow=!0,i={mesh:s,key:null},this.fadePool.push(i),this.scene?.add(s)}i.key=e}i.mesh.visible=!0,i.mesh.scale.set(1,t.h,1),i.mesh.position.set(t.col+.5,t.h/2,t.row+.5),i.mesh.material.opacity=1-n*.78}releaseFadeWall(e){const t=this.fadePool.find(n=>n.key===e);t&&(t.key=null,t.mesh.visible=!1)}rebuildEntities(){if(!this.ready)return;const e=Be.getInstance(),t=e.currentFloor;if(!t)return;if(t.floorId!==this.builtFloorId){this.rebuildFloor();return}this.clearGroup(this.entityGroup),this.torchCursor=0,this.glowCursor=0,this.torchLights.clear(),this.glowLights.clear();for(const c of this.torchPool)c.intensity=0;for(const c of this.glowPool)c.intensity=0;this.glowSprites=[],this.dustItems=[],this.spiritFx=null,this.spiritDots=[],this.playerSprite=null,this.playerShadow=null,this.playerContact=null,this.litSprites=[];const n=this.gates;this.gates=[];const i=P.config.heights,s=jt.tileSize;for(const{entity:c,room:h}of e.allEntities()){if(c.kind==="carpet")continue;const f=c.kind==="monster"||c.kind==="boss"?P.getMonster(c.monsterId??""):void 0,d=c.kind==="boss"?i.boss:c.kind==="monster"?c.isElite?i.monsterElite:f?.height??i.monsterNormal:c.kind==="chest"?i.chest+(c.chestTier==="grand"?8:0):c.kind==="npc"?i.npc:c.kind==="potion"?i.potion:c.kind==="cauldron"?i.cauldron:c.kind==="shelf"?i.shelf:c.kind==="fountain"?i.fountain:c.kind==="pillar"?i.pillar:i.torch;this.addEntity(c,h,f,d,s)}const r=jx(),o=r?2:Math.max(1.35,i.player/s*1.6),l=r??Jt.player();if(this.playerSprite=this.makePaperSprite(l,o),r&&(this.playerSprite.scale.set(o,o,1),this.playerSprite.userData.footRatio=5/64),this.heroBaseW=Math.abs(this.playerSprite.scale.x),this.playerShadow=this.addGroundShadow(0,0,o*.28),this.playerContact=this.addGroundShadow(0,0,o*.28*.6,Math.min(.85,P.config.shadow.staticAlpha*1.3)),r){const c=this.playerSprite.material.map;this.heroAnimator=new iy(c)}else this.heroAnimator=null;this.syncPlayer(),this.entityGroup.add(this.playerSprite),this.litSprites.push({sprite:this.playerSprite}),this.buildGates(n)}addEntity(e,t,n,i,s){const r=e.x+.5,o=e.y+.5,l=e.kind==="chest"&&Be.getInstance().isChestOpened(e);if(e.kind==="torch"){const d=Be.getInstance().currentFloor;let u=r,p=o;for(const[R,M]of[[0,-1],[0,1],[-1,0],[1,0]])if(d?.grid[e.y+M]?.[e.x+R]===0){u=r+R*.44,p=o+M*.44;break}const v=new Pe(new Je(.1,.06,.1),new tt({color:4013378,roughness:.5,metalness:.7}));v.position.set(u-(u-r)*.35,.58,p-(p-o)*.35),this.entityGroup.add(v);const m=new Pe(new Je(.07,.34,.07),new tt({color:7031338,roughness:.9}));m.position.set(u,.72,p),m.castShadow=!0,this.entityGroup.add(m);const g=new Pe(new wr(.09,10,10),new jn({color:16747546}));g.position.set(u,.98,p),this.entityGroup.add(g);const _=P.config.shadow.tyndall,S=Math.min(.95,_.length/s),y=Math.max(.35,_.width/s),E=new Qt(new Yt({map:on(Jt.coneTex()),color:16750916,blending:ln,transparent:!0,depthTest:!0,depthWrite:!1,opacity:_.alpha}));E.scale.set(y,S,1),E.position.set(u,S/2,p),E.renderOrder=2,this.entityGroup.add(E);const T=Math.max(0,Math.min(_.dustMax,_.dustMin));for(let R=0;R<T;R++){const M=new Qt(new Yt({map:on(Jt.glow("#ffcc88")),blending:ln,transparent:!0,depthWrite:!1,opacity:0}));M.scale.set(.06,.06,1),M.renderOrder=3,this.entityGroup.add(M),this.dustItems.push({sprite:M,baseX:u,baseZ:p,baseY:.1,phase:Math.random(),speed:.12+Math.random()*.1})}if(this.torchCursor<this.torchPool.length){const R=this.torchPool[this.torchCursor++];R.color.setHex(Ry[t.type]??16748608),R.intensity=1.5,R.distance=10,R.position.set(u,.95,p),this.torchLights.set(e.id,R)}return}if(e.kind==="chest"){const d=this.buildChest(l,e.chestTier==="grand");d.position.set(r,0,o),this.entityGroup.add(d),l||this.addGlowLight(e.id,16763972,.55,5,r,.7,o);return}if(e.kind==="stair"){if(e.stairSpan===1)return;if(e.stairSpan===2){this.buildStaircase(e.x,e.y),this.addGlowLight(e.id,4513279,.8,6,r,.7,o);const d=new Pe(new ei(2.9,2.9),new jn({map:on(Jt.stairRing()),color:4513279,blending:ln,transparent:!0,opacity:.55,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(r+.5,.045,o+.5),d.renderOrder=2,this.entityGroup.add(d);return}for(let d=0;d<4;d++){const u=new Pe(new Je(.86,.12,.22),new tt({color:8952234,roughness:.8}));u.position.set(r,.06+d*.12,o-.33+d*.22),u.castShadow=!0,u.receiveShadow=!0,this.entityGroup.add(u)}this.addGlowLight(e.id,4513279,.8,6,r,.8,o),this.addGlow("#44ddff",.5,r,.35,o,1.2);return}if(e.kind==="cauldron"){const d=new At,u=new tt({color:2895667,roughness:.55,metalness:.75}),p=new Pe(new wr(.34,16,12,0,Math.PI*2,Math.PI*.35,Math.PI*.65),u);p.position.y=.36,p.castShadow=!0;const v=new Pe(new Na(.3,.035,10,24),u);v.rotation.x=Math.PI/2,v.position.y=.55,d.add(p,v);for(const g of[0,2.1,4.2]){const _=new Pe(new Jn(.03,.045,.3,8),u);_.position.set(Math.cos(g)*.2,.15,Math.sin(g)*.2),d.add(_)}const m=new Pe(new Ua(.27,20),new tt({color:4643194,emissive:2067018,emissiveIntensity:.8,roughness:.3}));m.rotation.x=-Math.PI/2,m.position.y=.53,d.add(m),d.position.set(r,0,o),this.entityGroup.add(d),this.addGlow("#7effb2",.5,r,.62,o,2.2);return}if(e.kind==="shelf"){const d=new At,u=new tt({color:6243628,roughness:.8}),p=new Pe(new Je(.86,1,.16),u);p.position.y=.5,p.castShadow=!0,d.add(p);const v=[10112475,4173418,14243135,4161497,14264619,6609215];for(let m=0;m<3;m++){const g=new Pe(new Je(.8,.05,.26),u);g.position.set(0,.22+m*.34,.08),g.castShadow=!0,d.add(g);for(let _=0;_<3;_++){const S=new tt({color:v[(m*3+_)%v.length],roughness:.25,metalness:.1,emissive:v[(m*3+_)%v.length],emissiveIntensity:.25}),y=new Pe(new Jn(.035,.045,.13,8),S);y.position.set(-.26+_*.26,.32+m*.34,.08),d.add(y)}}d.position.set(r,0,o),this.entityGroup.add(d);return}if(e.kind==="fountain"){const d=new At,u=new tt({color:8227476,roughness:.75}),p=new Pe(new Jn(.42,.48,.22,20),u);p.position.y=.11,p.castShadow=!0,p.receiveShadow=!0;const v=new Pe(new Ua(.36,20),new tt({color:5888232,emissive:2062986,emissiveIntensity:.7,roughness:.2}));v.rotation.x=-Math.PI/2,v.position.y=.2;const m=new Pe(new Jn(.06,.1,.42,10),u);m.position.y=.4;const g=new Pe(new wr(.09,10,10),new tt({color:10479858,emissive:4176076,emissiveIntensity:.9,roughness:.2}));g.position.y=.64,d.add(p,v,m,g),d.position.set(r,0,o),this.entityGroup.add(d),this.addGlow("#6bebff",.5,r,.5,o,1.4),this.addGlowLight(e.id,7072767,.5,4,r,.6,o);return}if(e.kind==="gate"){const d=new At,u=new tt({color:14209728,roughness:.55,metalness:.12}),p=new tt({color:13938538,roughness:.32,metalness:.82});for(const _ of[-.62,.62]){const S=new Pe(new Je(.26,2.7,.26),u);S.position.set(_,1.35,0),S.castShadow=!0,d.add(S);const y=new Pe(new Je(.34,.12,.34),p);y.position.set(_,2.76,0),d.add(y)}const v=new Pe(new Je(1.78,.28,.3),u);v.position.set(0,2.85,0),v.castShadow=!0,d.add(v);const m=new Pe(new Je(.3,.24,.26),p);m.position.set(0,3.08,0),d.add(m);const g=new Pe(new ei(1,2.42),new jn({color:16249570,transparent:!0,opacity:.82}));g.position.set(0,1.25,.02),d.add(g),d.position.set(r,0,o),this.entityGroup.add(d),this.addGlowLight(e.id,16773320,1,7,r,1.5,o),this.addGlow("#fff2cf",1,r,1.3,o,.4);return}if(e.kind==="npc"){const d=P.getNpc(e.npcId??""),u=d?.portrait?Xh(d.portrait):null;if(u){const v=this.makePaperSprite(u,2.1);if(v.userData.footRatio=6/u.height,v.position.set(r,this.footedY(v),o),this.entityGroup.add(v),this.litSprites.push({sprite:v}),this.addGroundShadow(r,o,2.1*.26),e.npcId==="npc_guide"){v.material.opacity=.85;const m=new Qt(new Yt({map:on(Jt.glow("#9fc8d8")),blending:ln,transparent:!0,depthWrite:!1,opacity:.3}));m.scale.set(2.1*1.5,2.1*1.5,1),m.position.set(r,v.position.y+2.1*.45,o),m.renderOrder=2,this.entityGroup.add(m),this.spiritFx={halo:m,sprite:v,baseY:v.position.y};for(let g=0;g<5;g++){const _=new Qt(new Yt({map:on(Jt.glow("#e8f0f2")),blending:ln,transparent:!0,depthWrite:!1,opacity:0}));_.scale.set(.09,.09,1),_.renderOrder=3,this.entityGroup.add(_),this.spiritDots.push({sprite:_,baseX:r,baseZ:o,phase:Math.random(),speed:.1+Math.random()*.08})}this.addGlowLight(`${e.id}_candle`,16757854,1.15,8,r+1.1,.9,o+.7)}return}}if(e.kind==="pillar"){const d=Math.max(.6,i/s),u=new Le(this.currentTier.floorTint),p=new tt({color:new Le(7833468).multiply(u),roughness:.72,metalness:.12}),v=new tt({color:new Le(6122338).multiply(u),roughness:.8,metalness:.1}),m=new At,g=new Pe(new Je(.52,.14,.52),v);g.position.y=.07;const _=Math.max(.2,d-.26),S=new Pe(new Jn(.15,.19,_,10),p);S.position.y=.14+_/2;const y=new Pe(new Je(.48,.12,.48),v);y.position.y=.14+_+.06;for(const E of[g,S,y])E.castShadow=!0,E.receiveShadow=!0,m.add(E);m.position.set(r,0,o),this.entityGroup.add(m);return}const c=Jt.entity(e,t,n,i,l),h=Math.max(1.05,Math.min(2.6,i/s*1.6)),f=this.makePaperSprite(c,h);if(f.position.set(r,this.footedY(f),o),this.entityGroup.add(f),this.litSprites.push({sprite:f}),this.addGroundShadow(r,o,h*.42),e.kind==="boss"||e.kind==="monster"&&e.isElite){const d=Math.min(.85,P.config.shadow.staticAlpha*1.3);this.addGroundShadow(r,o,h*.42*.6,d)}if(e.kind==="boss")this.addGlowLight(e.id,16720452,1.2,9,r,1.2,o),this.addGlow("#ff2244",1.1,r,f.position.y+f.scale.y*.2,o,.8);else if(e.kind==="monster"&&e.isElite)this.addGlow("#ff8800",.42,r,f.position.y+f.scale.y*.2,o,2);else if(e.kind==="potion"){const d=P.getPotion(e.potionTier??"");this.addGlow(d?.color??"#ff5a7a",.3,r,f.position.y+f.scale.y*.3,o,1.8)}}buildStaircase(e,t){const r=new tt({color:8426403,roughness:.82});for(let c=0;c<6;c++){const h=-.1-c*.17,f=h- -1.15,d=new Pe(new Je(2,f,2/6),r);d.position.set(e+1,h-f/2,t+2-(c+.5)*(2/6)),d.castShadow=!0,d.receiveShadow=!0,this.entityGroup.add(d)}const o=new tt({color:5003878,roughness:.9});for(const c of[e+.04,e+1.96]){const h=new Pe(new Je(.09,1.32,2.08),o);h.position.set(c,-.55,t+1),this.entityGroup.add(h)}const l=new Pe(new Je(2,.26,.1),o);l.position.set(e+1,-.13,t+2.02),this.entityGroup.add(l)}addGlowLight(e,t,n,i,s,r,o){if(this.glowLights.has(e)||this.glowCursor>=this.glowPool.length)return;const l=this.glowPool[this.glowCursor++];l.color.setHex(t),l.intensity=n,l.distance=i,l.position.set(s,r,o),this.glowLights.set(e,l)}addGlow(e,t,n,i,s,r,o=.8,l=1){const c=t*2,h=new Yt({map:on(Jt.glow(e,l)),blending:ln,transparent:!0,depthTest:!0,depthWrite:!1,opacity:o}),f=new Qt(h);f.scale.set(c,c,1),f.position.set(n,i,s),f.renderOrder=2,this.entityGroup.add(f),this.glowSprites.push({sprite:f,base:c,speed:r,phase:Math.random()*Math.PI*2})}buildChest(e,t){const n=new At,i=t?1.25:1,s=.66*i,r=.32*i,o=.46*i,l=new tt({color:e?7034682:9067051,roughness:.78,metalness:.08}),c=new tt({color:e?4865318:6241050,roughness:.72,metalness:.12}),h=new tt({color:e?8158332:14264619,roughness:.35,metalness:.85}),f=new Pe(new Je(s,r,o),l);f.position.y=r/2,f.castShadow=!0,f.receiveShadow=!0,n.add(f);const d=new At;d.position.set(0,r,-o/2);const u=o/2,p=new Pe(new Jn(u,u,s,20,1,!1,0,Math.PI),c);p.rotation.z=Math.PI/2,p.position.z=o/2,p.castShadow=!0,d.add(p);for(const m of[-s*.28,s*.28]){const g=new Pe(new Na(u*1.02,.018*i,8,18,Math.PI),h);g.rotation.y=Math.PI/2,g.position.set(m,0,o/2),d.add(g)}e&&(d.rotation.x=-2),n.add(d);for(const m of[-1,1])for(const g of[-1,1]){const _=new Pe(new Je(.035*i,r,.035*i),h);_.position.set(m*(s/2-.02*i),r/2,g*(o/2-.02*i)),_.castShadow=!0,n.add(_)}const v=new Pe(new Je(.11*i,.1*i,.03*i),new tt({color:e?5921370:16766814,roughness:.3,metalness:.9}));return v.position.set(0,r*.8,o/2+.012*i),n.add(v),n}makePaperSprite(e,t){const n=e.width/e.height,i=new Yt({map:on(e),transparent:!0,depthTest:!0,depthWrite:!1}),s=new Qt(i);return s.scale.set(t*n,t,1),s.renderOrder=1,s.userData.footRatio=jt.tileSize/2/e.height,s}footedY(e){const t=e.userData.footRatio??0;return e.scale.y*(.5-t)}setHeroAction(e){this.heroAnimator?.setAction(e)}getHeroAction(){return this.heroAnimator?.getAction()??null}addGroundShadow(e,t,n,i){const s=i??P.config.shadow.staticAlpha,r=new jn({map:on(Jt.glow("#000000")),transparent:!0,opacity:s,depthWrite:!1}),o=new Pe(new ei(n*2,n*2),r);return o.rotation.x=-Math.PI/2,o.position.set(e,.015,t),o.renderOrder=1,this.entityGroup.add(o),o}buildGateMesh(e){const t=new At,n=new tt({color:5857387,roughness:.45,metalness:.85});for(let i=0;i<5;i++){const s=new Pe(new Je(.1,1.2,.1),n);s.position.set((i-2)*.21,.6,0),s.castShadow=!0,t.add(s)}for(const i of[.28,.95]){const s=new Pe(new Je(1.06,.11,.13),n);s.position.set(0,i,0),s.castShadow=!0,t.add(s)}return e&&(t.rotation.y=Math.PI/2),t}buildGates(e){const t=Be.getInstance();for(const n of t.getGates()){const i=n.direction==="east"||n.direction==="west",s=this.buildGateMesh(i),r=n.x+.5,o=n.y+.5,l=e?.find(c=>c.baseX===r&&c.baseZ===o);s.position.set(r,-.13,o),this.entityGroup.add(s),this.gates.push({group:s,baseX:r,baseZ:o,offX:i?0:1,offZ:i?1:0,open:l?l.open:n.opened?1:0,target:n.opened?1:0})}}syncPlayer(e=16.67){if(!this.playerSprite)return;const t=ge.getInstance().pos,n=t.x+.5,i=t.y+.5;this.heroVis.init||(this.heroVis.x=n,this.heroVis.z=i,this.heroVis.init=!0);const s=1-Math.exp(-e/45),r=Math.hypot(n-this.heroVis.x,i-this.heroVis.z);this.heroVis.x+=(n-this.heroVis.x)*s,this.heroVis.z+=(i-this.heroVis.z)*s,this.playerSprite.position.set(this.heroVis.x,this.footedY(this.playerSprite),this.heroVis.z),this.playerShadow&&this.playerShadow.position.set(this.heroVis.x,.015,this.heroVis.z),this.playerContact&&this.playerContact.position.set(this.heroVis.x,.02,this.heroVis.z);const o=n-this.heroVis.x,l=i-this.heroVis.z;let c=null;(Math.abs(o)>.005||Math.abs(l)>.005)&&(Math.abs(o)>=Math.abs(l)?c=o>0?"right":"left":c=l>0?"down":"up"),c&&(this.heroFacing=c,this.heroAnimator?.setFacing(c));const h=this.heroFacing==="left";if(this.playerSprite.scale.x=h?-this.heroBaseW:this.heroBaseW,this.heroAnimator){const f=r>.02,d=this.heroAnimator.getAction();(d==="idle"||d==="walk"||d==="run")&&f!==(d==="walk"||d==="run")&&this.setHeroAction(f?"walk":"idle")}}updateSpriteLighting(){if(!this.playerTorch)return;const e=.56,t=this.playerTorch,n=t.position.x,i=t.position.z;for(const{sprite:s}of this.litSprites){const r=s.position.x,o=s.position.z;let l=e;const c=Math.hypot(r-n,o-i);l+=t.intensity*.85*Math.pow(Math.max(0,1-c/11),1.5);for(const f of this.torchLights.values()){if(f.intensity<=.01)continue;const d=Math.hypot(r-f.position.x,o-f.position.z);l+=f.intensity*.85*Math.pow(Math.max(0,1-d/10),1.5)}const h=Math.min(1,Math.max(.4,l));s.material.color.setScalar(h)}}render(e){if(!this.ready||!this.renderer||!this.scene||!this.camera)return;const t=this.container?.clientWidth??0,n=this.container?.clientHeight??0;t>0&&n>0&&(t!==this.lastContainerW||n!==this.lastContainerH)&&(this.lastContainerW=t,this.lastContainerH=n,this.resize());const i=Be.getInstance().currentFloor;if(!i)return;i.floorId!==this.builtFloorId&&this.rebuildFloor();const s=Be.getInstance(),r=ge.getInstance().pos,o=s.getRoomAt(r.x,r.y);let l,c;if(o){const p=o.x+o.width/2,v=o.y+o.height/2,m=r.x+.5-p,g=r.y+.5-v,_=Math.max(0,Math.abs(m)-(o.width/2-Zh)),S=Math.max(0,Math.abs(g)-(o.height/2-Zh));l=p+Math.sign(m)*_,c=v+Math.sign(g)*S}else{const p=this.corridorCenterAt(r.x,r.y);l=p?p.x:r.x+.5,c=p?p.z:r.y+.5}const h=this.lastTimeMs?Math.min(50,e-this.lastTimeMs):16.67,f=1-Math.pow(1-.12,h/16.67);this.focusInit?(this.focusX+=(l-this.focusX)*f,this.focusZ+=(c-this.focusZ)*f):(this.focusX=l,this.focusZ=c,this.focusInit=!0),this.lastTimeMs=e,this.updateWallFade(h);const d=P.config.camera3D;if(this.camera.position.set(this.focusX,d.height,this.focusZ+d.distance),this.camera.lookAt(this.focusX,0,this.focusZ),this.applyCamFx(h,d),this.starField&&this.starMat&&(this.starField.position.copy(this.camera.position),this.starMat.uniforms.uTime.value=e),this.dirLight){const p=Vt.MOON_OFFSET;this.dirLight.position.set(this.focusX+p.x,p.y,this.focusZ+p.z),this.dirLight.target.position.set(this.focusX,0,this.focusZ),this.dirLight.target.updateMatrixWorld()}if(this.moonGroup){const p=Vt.MOON_OFFSET;this.moonGroup.position.set(this.focusX+p.x,p.y,this.focusZ+p.z)}if(this.syncPlayer(h),this.heroAnimator&&this.heroAnimator.update(h),this.playerTorch&&(this.playerTorch.intensity=1.7,this.playerTorch.position.set(r.x+.5,1.5,r.y+.5)),this.updateSpriteLighting(),this.hoverMesh){const p=!!this.hoverTile&&De.started;this.hoverMesh.visible=p,p&&this.hoverTile&&this.hoverMesh.position.set(this.hoverTile.x+.5,.06,this.hoverTile.y+.5)}cn.getInstance().syncTo(this.particleGroup),Rr.getInstance().syncTo(this.particleGroup);const u=e/1e3;for(const p of this.dustItems){const v=(u*p.speed+p.phase)%1;p.sprite.position.set(p.baseX+Math.sin(v*6+p.phase*9)*.06,p.baseY+v*.85,p.baseZ),p.sprite.material.opacity=Math.sin(v*Math.PI)*.3}for(const p of this.windowScrollers)p.tex.offset.x=(p.tex.offset.x+p.speed*h/1e3)%1;if(Er.getInstance().syncTo(this.particleGroup),Er.getInstance().update(h/1e3,this.focusX,this.focusZ,u),this.spiritFx){const p=Math.sin(u*1.3)*.05;this.spiritFx.sprite.position.y=this.spiritFx.baseY+p,this.spiritFx.halo.position.y=this.spiritFx.baseY+p+.95,this.spiritFx.halo.material.opacity=.28}for(const p of this.spiritDots){const v=(u*p.speed+p.phase)%1;p.sprite.position.set(p.baseX+Math.sin(p.phase*8.5+v*4)*.55,.25+v*2.1,p.baseZ+Math.cos(p.phase*6.2+v*3.4)*.4),p.sprite.material.opacity=Math.sin(v*Math.PI)*.5}for(const p of[...this.phantoms])this.updatePhantom(p,h,u);gi.tick(h);for(const p of this.gates)Math.abs(p.open-p.target)<.002||(p.open+=(p.target-p.open)*Math.min(1,h/260),p.group.position.x=p.baseX+p.offX*p.open*1.15,p.group.position.z=p.baseZ+p.offZ*p.open*1.15);this.applyShake(h),gi.ready?gi.render():this.renderer.render(this.scene,this.camera)}playIntroRise(){this.camFx={kind:"intro",t:0,dur:2400,hold:!1}}playTierSway(){this.camFx={kind:"sway",t:0,dur:2800,hold:!1}}playSummitWide(){this.camFx={kind:"wide",t:0,dur:2200,hold:!0}}playSummitDive(){this.camFx={kind:"dive",t:0,dur:1700,hold:!1},this.shake(.3,1700)}clearCamFx(){this.camFx=null,this.camera&&(this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix())}applyCamFx(e,t){const n=this.camFx;if(!n||!this.camera)return;n.t+=e;const i=Math.min(1,n.t/n.dur),s=1-Math.pow(1-i,3),r=i*i;if(n.kind==="intro")this.camera.position.y=1.5+(t.height-1.5)*s,this.camera.position.z=this.focusZ+t.distance*(.42+.58*s),this.camera.position.x+=Math.sin(i*Math.PI*2)*.3*(1-i),this.camera.lookAt(this.focusX,0,this.focusZ);else if(n.kind==="sway"){const o=Math.sin(i*Math.PI),l=t.distance*(1-.12*o);this.camera.position.z=this.focusZ+l,this.camera.position.x+=Math.sin(i*Math.PI*2)*.45*o,this.camera.lookAt(this.focusX,0,this.focusZ)}else if(n.kind==="wide"){const o=t.distance*(1+.62*s),l=t.height*(1+.32*s);this.camera.position.z=this.focusZ+o,this.camera.position.y=l,this.camera.lookAt(this.focusX,0,this.focusZ)}else n.kind==="dive"&&(this.camera.fov=this.baseFov+24*r,this.camera.updateProjectionMatrix(),this.camera.position.y=t.height*(1-r)-22*r,this.camera.position.z=this.focusZ+t.distance*(1-.45*r),this.camera.lookAt(this.focusX,-14*r,this.focusZ));i>=1&&!n.hold&&this.clearCamFx()}spawnGuidePhantom(){if(!this.scene)return;const e=ge.getInstance().pos,t=e.x+.5+1.6,n=e.y+.5-.4,i=new At,s=P.getNpc("npc_guide"),r=s?.portrait?Xh(s.portrait):null;let o=null;r&&(o=this.makePaperSprite(r,2.6),o.material.opacity=0,i.add(o));const l=new Qt(new Yt({map:on(Jt.glow("#9fc8d8")),blending:ln,transparent:!0,depthWrite:!1,opacity:0}));l.scale.set(4.2,4.2,1),l.position.y=1.2,i.add(l),i.position.set(t,.15,n),this.scene.add(i),this.phantoms.push({group:i,sprite:o,halo:l,t:0,state:"in",flickTimer:0})}fadeOutPhantoms(){for(const e of this.phantoms)e.state="out"}updatePhantom(e,t,n){e.t+=t;const i=e.sprite?.material,s=e.halo.material;if(e.state==="in"){const r=Math.min(1,e.t/1300);i&&(i.opacity=.55*r),s.opacity=.4*r,r>=1&&(e.state="hold")}else if(e.state==="hold"){e.flickTimer-=t,e.flickTimer<=0&&(e.flickTimer=110+Math.random()*90);const r=e.flickTimer<60?1:.62;i&&(i.opacity=(.42+Math.random()*.22)*r+.12),s.opacity=.3+.18*Math.sin(n*7.3);const o=1+Math.sin(n*18)*.035;e.sprite&&(e.sprite.scale.y=2.6*o),e.halo.scale.setScalar(4.2*(1+Math.sin(n*5.1)*.08))}else{const r=Math.max(0,1-e.t/900);i&&(i.opacity=.55*r),s.opacity=.4*r,r<=0&&(this.scene?.remove(e.group),e.group.traverse(o=>{o.material?.dispose()}),this.phantoms.splice(this.phantoms.indexOf(e),1))}}shake(e,t=280){(this.shakeTime<=0||e>=this.shakeIntensity)&&(this.shakeIntensity=e,this.shakeTotal=t,this.shakeTime=t)}applyShake(e){if(this.shakeTime<=0||!this.camera)return;this.shakeTime=Math.max(0,this.shakeTime-e);const t=this.shakeTotal>0?this.shakeTime/this.shakeTotal:0,n=this.shakeIntensity*t;n>1e-4&&(this.camera.position.x+=(Math.random()-.5)*2*n,this.camera.position.y+=(Math.random()-.5)*2*n,this.camera.position.z+=(Math.random()-.5)*2*n),this.shakeTime<=0&&(this.shakeIntensity=0)}corridorCenterAt(e,t){const n=Be.getInstance().currentFloor;if(!n)return null;for(const i of n.corridors){if(!i.tiles.some(c=>c.x===e&&c.y===t))continue;let s=1/0,r=-1/0,o=1/0,l=-1/0;for(const c of i.tiles)c.x<s&&(s=c.x),c.x>r&&(r=c.x),c.y<o&&(o=c.y),c.y>l&&(l=c.y);return{x:(s+r+1)/2,z:(o+l+1)/2}}return null}screenToTile(e,t){if(!this.ready||!this.renderer||!this.camera)return null;const n=this.renderer.domElement.getBoundingClientRect();if(n.width===0||n.height===0)return null;const i=new Ee((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const s=new mi(new U(0,1,0),0),r=new U;return this.raycaster.ray.intersectPlane(s,r)?{x:Math.floor(r.x),y:Math.floor(r.z)}:null}resize(){if(!this.ready||!this.renderer||!this.camera||!this.container)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;e<=0||t<=0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),gi.setSize(e,t))}clearGroup(e){for(let t=e.children.length-1;t>=0;t--){const n=e.children[t];e.remove(n);const i=n;i.children&&i.children.length>0&&this.clearGroup(i);const s=n;s.geometry&&s.geometry.dispose();const r=s.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r?.dispose()}}};w(Vt,"instance"),w(Vt,"MOON_OFFSET",{x:16,y:34,z:22});let _s=Vt;const ss=class ss{constructor(){w(this,"flags",{firstEquipment:!1,firstDeath:!1,welcomed:!1,summitRevealed:!1});q.on("equipmentGenerated",e=>{e.source!=="tutorial"&&(this.flags.firstEquipment||(this.flags.firstEquipment=!0,q.emit("firstEquipmentGained",{equipment:e.equipment}),q.emit("notification",{message:P.texts.guidance?.firstEquipment??"获得装备！",type:"info",icon:"🗡️"})))}),q.on("playerDied",()=>{this.flags.firstDeath||(this.flags.firstDeath=!0,q.emit("notification",{message:P.texts.guidance?.firstDeath??"死亡后在本层起点复活，损失部分金币。",type:"warning",icon:"💀"}))})}setFlag(e,t=!0){this.flags[e]=t}static getInstance(){return ss.instance||(ss.instance=new ss),ss.instance}export(){return{...this.flags}}restore(e){this.flags={...this.flags,...e}}};w(ss,"instance");let Ei=ss;const Uy=["你到了塔顶。","这里，什么都没有。","呵呵……呵呵呵……","你以为，真相在天上吗？","往下看——塔的根基之下，才是真正的起点。"],Ny=a=>new Promise(e=>window.setTimeout(e,a)),rs=class rs{constructor(){w(this,"el",null);w(this,"playing",!1);w(this,"skipped",!1);w(this,"skipResolve",null);w(this,"skipPromise",new Promise(()=>{}))}static getInstance(){return rs.instance||(rs.instance=new rs),rs.instance}ensureDom(){if(this.el)return;const e=document.createElement("div");e.id="summit-cinematic",e.className="hidden",e.innerHTML=`
      <div class="sc-skip dim">点击画面跳过 ›</div>
      <div class="sc-subtitle"></div>
      <div class="sc-flash"></div>
      <div class="sc-black hidden">
        <div class="sc-card">
          <div class="sc-act">第一幕 · 完</div>
          <div class="sc-line">塔基之下，另有深渊。</div>
          <div class="sc-tease">—— 地下篇 · 待启 ——</div>
          <div class="sc-actions">
            <button class="btn-primary" data-sc="stay">回到塔顶</button>
            <button data-sc="title">返回标题</button>
          </div>
        </div>
      </div>`,(document.getElementById("game-root")??document.body).appendChild(e),this.el=e,e.addEventListener("click",n=>{n.target.closest(".sc-actions")||this.requestSkip()})}requestSkip(){this.skipped||!this.playing||(this.skipped=!0,this.skipResolve?.())}wait(e){return this.skipped?Promise.resolve():Promise.race([Ny(e),this.skipPromise])}get revealed(){return Ei.getInstance().flags.summitRevealed}async play(){if(this.playing)return;this.playing=!0,this.skipped=!1,this.skipPromise=new Promise(i=>{this.skipResolve=i}),this.ensureDom();const e=this.el,t=_s.getInstance();De.pushModal(),e.classList.remove("hidden"),e.querySelector(".sc-black").classList.add("hidden");const n=e.querySelector(".sc-subtitle");n.textContent="";try{t.playSummitWide(),await this.wait(2300),this.skipped||(gi.setCinematicTint([.58,.82,1.1],.34,.08),t.spawnGuidePhantom());for(const r of Uy)await this.typeLine(n,r),await this.wait(r.length>6?1050:750);n.textContent="";const i=e.querySelector(".sc-flash");i.classList.add("on"),t.fadeOutPhantoms(),t.playSummitDive(),await this.wait(1700),i.classList.remove("on");const s=e.querySelector(".sc-black");s.classList.remove("hidden"),Ei.getInstance().setFlag("summitRevealed",!0),q.emit("summitRevealed",{}),await new Promise(r=>{const o=s.querySelector('[data-sc="stay"]'),l=s.querySelector('[data-sc="title"]');o.onclick=()=>r(),l.onclick=()=>{r(),q.emit("returnToTitle",{})}})}finally{this.teardown(t)}}async typeLine(e,t){if(this.skipped){e.textContent=t;return}e.textContent="";for(let n=1;n<=t.length;n++){if(this.skipped){e.textContent=t;return}e.textContent=t.slice(0,n),await this.wait(46)}}teardown(e){this.playing=!1,this.skipped=!1,this.skipResolve=null,e.clearCamFx(),e.fadeOutPhantoms(),gi.clearCinematicTint(),this.el?.classList.add("hidden"),De.popModal()}};w(rs,"instance");let Wl=rs;const as=class as{constructor(){w(this,"lastRoomId","");w(this,"pathQueue",[]);w(this,"moving",!1);w(this,"moveBlockMs",0);w(this,"teleportMode",!1);w(this,"pendingInteract",null);q.on("playerDied",()=>this.handleDeath())}static getInstance(){return as.instance||(as.instance=new as),as.instance}get inputBlocked(){return!De.started||De.paused||De.modalOpen||!ge.getInstance().isAlive}tryMove(e,t){if(this.inputBlocked||this.moveBlockMs>0)return;this.pathQueue=[];const n=ge.getInstance(),i=n.state.x+e,s=n.state.y+t,r=Be.getInstance(),o=r.getEntityAt(i,s);if(o){this.interact(o),this.startMoveBuffer();return}if(r.isGateLocked(i,s)){q.emit("notification",{message:"铁门紧闭——击败 Boss 后才会开启",type:"warning",icon:"🚪"}),this.startMoveBuffer();return}r.isWalkable(i,s)&&(n.state.x=i,n.state.y=s,q.emit("playerMoved",{x:i,y:s}),this.startMoveBuffer(),this.afterStep())}startMoveBuffer(){this.moveBlockMs=P.config.input.moveBufferMs}moveTo(e,t){if(this.inputBlocked)return;const n=Be.getInstance();if(!n.inBounds(e,t))return;const i=ge.getInstance();if(i.state.x===e&&i.state.y===t)return;if(this.teleportMode){this.pathQueue=[],this.pendingInteract=null;let o=e,l=t;if(!n.isWalkable(o,l)||!!n.getEntityAt(o,l)){const h=[[0,1],[0,-1],[1,0],[-1,0]].map(([f,d])=>({x:o+f,y:l+d})).find(f=>n.isWalkable(f.x,f.y)&&!n.getEntityAt(f.x,f.y));if(!h){q.emit("notification",{message:"该处无法落脚",type:"warning",icon:"🚫"});return}o=h.x,l=h.y}i.state.x=o,i.state.y=l,q.emit("playerMoved",{x:o,y:l}),this.afterStep();return}const s=n.getEntityAt(e,t);if(s){if(Math.abs(i.state.x-e)+Math.abs(i.state.y-t)===1){this.interact(s);return}const o=this.findPath(e,t,{stopAdjacent:!0});o&&(this.pathQueue=o,this.pendingInteract=s);return}if(!n.isWalkable(e,t))return;const r=this.findPath(e,t,{stopAdjacent:!1});r&&r.length>0&&(this.pathQueue=r)}update(e=0){if(this.moveBlockMs>0&&(this.moveBlockMs-=e),this.inputBlocked){this.pathQueue=[];return}if(this.checkRoomEnter(),this.moving||this.pathQueue.length===0||this.moveBlockMs>0)return;const t=this.pathQueue.shift(),n=ge.getInstance(),i=Be.getInstance(),s=i.getEntityAt(t.x,t.y);if(s){this.pathQueue=[],this.interact(s);return}if(!i.isWalkable(t.x,t.y)){this.pathQueue=[];return}if(n.state.x=t.x,n.state.y=t.y,q.emit("playerMoved",{x:t.x,y:t.y}),this.startMoveBuffer(),this.afterStep(),this.pathQueue.length===0&&this.pendingInteract){const r=this.pendingInteract;this.pendingInteract=null,i.getEntityAt(r.x,r.y)?.id===r.id&&this.interact(r)}}findPath(e,t,n){const i=Be.getInstance(),s=i.currentFloor,r=ge.getInstance();if(!s)return null;const o={x:r.state.x,y:r.state.y},l=(d,u)=>`${d},${u}`,c=new Map([[l(o.x,o.y),null]]),h=[o],f=(d,u)=>n.stopAdjacent?Math.abs(d-e)+Math.abs(u-t)===1:d===e&&u===t;for(;h.length>0;){const d=h.shift();if(f(d.x,d.y)){const u=[];let p=d;for(;p;)u.unshift(p),p=c.get(l(p.x,p.y))??null;return u.shift(),u}for(const[u,p]of[[0,1],[0,-1],[1,0],[-1,0]]){const v=d.x+u,m=d.y+p,g=l(v,m);c.has(g)||i.isWalkable(v,m)&&(i.getEntityAt(v,m)||(c.set(g,d),h.push({x:v,y:m})))}}return null}interact(e){if(this.inputBlocked)return;const t=Be.getInstance(),n=ge.getInstance(),i=Oa.getInstance();switch(e.kind){case"monster":case"boss":{const s=P.getMonster(e.monsterId??""),r=s?.name??"敌人",o=e.kind==="boss";i.ask(o?"⚠️ Boss 战":"⚔️ 战斗确认",`确定攻击 <b style="color:${s?.color??"#ff9999"}">${r}</b>${e.isElite?"（精英）":""} 吗？<br/><span class="dim">战败将在楼层起点复活并损失20%金币</span>`,()=>this.doBattle(e),"⚔️ 攻击");break}case"potion":{t.markUsed(e.id);const s=e.potionTier??"crude";n.addPotion(s);const r=P.getPotion(s);cn.getInstance().floatText(e.x,e.y,`+${r?.name??"药水"}`,r?.color??"#ff5a7a"),q.emit("potionPicked",{entityId:e.id,tier:s,name:r?.name??"药水"});break}case"fountain":{if(t.getEntityState(e.id).isUsed===!0){q.emit("notification",{message:"治疗泉已枯竭",type:"info",icon:"💧"});break}const s=P.config.witch,r=s.fountainCostBase+n.state.currentFloor*s.fountainCostPerFloor;if(n.state.gold<r){q.emit("notification",{message:`需要 ${r} 金币才能汲取泉水`,type:"warning",icon:"💰"});break}i.ask("💧 治疗泉",`支付 <b>${r}</b> 金币，恢复全部生命？`,()=>{n.spendGold(r);const o=n.heal(n.maxHp);t.markUsed(e.id),cn.getInstance().floatText(e.x,e.y,`+${o} HP`,"#66ffcc"),q.emit("fountainUsed",{cost:r,healed:o})},"💧 治疗");break}case"chest":{this.doOpenChest(e);break}case"npc":{const s=P.getNpc(e.npcId??"");s&&q.emit("npcTalked",{npcId:s.id,name:s.name});break}case"stair":{const s=e.targetFloor??n.state.currentFloor+1;i.ask("🪜 楼梯",`确定前往<b>第 ${s} 层</b>吗？`,()=>{On.getInstance().enterFloor(s),un.getInstance().snapToPlayer(),this.afterFloorChange()},"🪜 前往");break}case"gate":{const s=Wl.getInstance();s.revealed?q.emit("notification",{message:"门后空无一物。风，从很深的下面吹上来……",type:"info",icon:"🚪"}):s.play();break}}}doBattle(e){if(ge.getInstance(),De.settings.battleMode==="manual"){const n=rr.getInstance().beginManual(e);ka.getInstance().begin(n,i=>this.battleFloats(e,i));return}const t=rr.getInstance().battle(e);this.battleFloats(e,t)}battleFloats(e,t){const n=ge.getInstance();t.win?cn.getInstance().floatText(e.x,e.y,`+${t.goldGained}💰`,"#ffdd44"):n.state.hp>0&&cn.getInstance().floatText(n.state.x,n.state.y,"撤退！","#ffaa44")}doOpenChest(e){const n=Be.getInstance().getRoomAt(e.x,e.y),i=Pr.getInstance().open(e,n?.type??"combat",n?.depth??1);let s=`+${i.gold} 金币`;if(i.potion&&(s+=` +${P.getPotion(i.potion)?.name??"药水"}`),i.equipment&&(s+=" +装备"),cn.getInstance().floatText(e.x,e.y,s,"#ffdd44"),i.gold>0&&q.emit("notification",{message:`获得 ${i.gold} 金币`,type:"success",icon:"💰"}),i.equip){const r=P.equipment.quality[i.equip.quality]?.name;q.emit("notification",{message:`获得 ${i.equip.name}${r?`（${r}）`:""}`,type:"success",icon:"⚔️"})}i.potion&&q.emit("notification",{message:`获得 ${P.getPotion(i.potion)?.name??"药水"}`,type:"success",icon:"🧪"})}afterStep(){this.checkRoomEnter(),this.checkHiddenDiscovery()}afterFloorChange(){this.lastRoomId="",this.checkRoomEnter(),this.checkHiddenDiscovery()}checkHiddenDiscovery(){const e=Be.getInstance(),t=e.currentFloor;if(!t||!t.hiddenRooms||t.hiddenRooms.length===0)return;const n=ge.getInstance().state;for(const i of[...t.hiddenRooms]){const s=i.hiddenEntrance;s&&Math.abs(n.x-s.x)+Math.abs(n.y-s.y)<=1&&(e.revealHiddenRoom(i),q.emit("hiddenRoomDiscovered",{roomId:i.id,x:s.x,y:s.y}),q.emit("notification",{message:"墙后传来微光——发现了一间隐藏房间！",type:"success",icon:"🕯️"}),cn.getInstance().floatText(s.x,s.y,"发现隐藏房间！","#ffdd44"))}}checkRoomEnter(){const e=Be.getInstance(),t=ge.getInstance(),n=e.getRoomAt(t.state.x,t.state.y),i=n?.id??"";if(i===this.lastRoomId||(this.lastRoomId=i,!n))return;t.state.currentRoomId=i;const s=P.texts.roomNames?.[n.type]??n.type;if(q.emit("roomEntered",{roomId:i,roomType:n.type,depth:n.depth,name:s}),n.type==="rest"&&e.getEntityState(`rest_${i}`).isUsed!==!0){e.markUsed(`rest_${i}`);const o=t.heal(Math.round(t.maxHp*.3));o>0&&cn.getInstance().floatText(t.state.x,t.state.y,`休整 +${o}`,"#66ff88")}const r=n.entities.find(o=>o.kind==="boss"&&e.isEntityAlive(o));if(r){const o=P.getMonster(r.monsterId??"");q.emit("bossWarning",{floor:n.floorId,name:o?.name??"Boss"})}}handleDeath(){const e=ge.getInstance(),t=P.config.revive,n=Math.round(e.state.gold*t.goldPenaltyRate),s=Be.getInstance().currentFloor;s&&(e.state.x=s.entryX,e.state.y=s.entryY),e.spendGold(Math.min(e.state.gold,n)),e.heal(Math.round(e.maxHp*t.hpRestorePct)),this.lastRoomId="",this.checkRoomEnter(),un.getInstance().snapToPlayer(),q.emit("playerRevived",{penaltyGold:n})}restart(){On.getInstance().clearPregen(),ge.getInstance().restore({...ge.getInstance().state,level:1,exp:0,hp:P.config.playerBase.maxHp,baseMaxHp:P.config.playerBase.maxHp,baseAttack:P.config.playerBase.attack,baseDefense:P.config.playerBase.defense,gold:0,keys:0,potions:{crude:0,normal:0,quality:0,strong:0,holy:0},weaponId:null,armorId:null,bag:[]}),On.getInstance().enterFloor(1,!1),un.getInstance().snapToPlayer(),this.lastRoomId="",this.checkRoomEnter(),q.emit("gameRestarted",{})}};w(as,"instance");let zn=as;const os=class os{constructor(){w(this,"quests",new Map);w(this,"maxFloorReached",1);for(const e of P.quests.quests)this.quests.set(e.id,{id:e.id,progress:0,isCompleted:!1,isAccepted:e.prerequisites.length===0});this.bindEvents()}static getInstance(){return os.instance||(os.instance=new os),os.instance}bindEvents(){q.on("npcTalked",e=>this.progress("talk_npc",e.npcId)),q.on("monsterDefeated",e=>{const t=this.findObjective("defeat_monster");t&&(!t.objectives[0].targetId||t.objectives[0].targetId===e.entityId||this.matchByName(t,e.name))&&this.progress("defeat_monster")}),q.on("chestOpened",()=>this.progress("open_chest")),q.on("equipmentEquipped",()=>this.progress("equip_item")),q.on("potionUsed",()=>this.progress("use_potion")),q.on("floorChanged",e=>{this.maxFloorReached=Math.max(this.maxFloorReached,e.toFloor);for(const t of P.quests.quests){const n=t.objectives[0];if(n.type==="reach_floor"&&n.value!==void 0){const i=this.quests.get(t.id);i.isAccepted&&!i.isCompleted&&this.maxFloorReached>=n.value&&this.complete(t)}}})}matchByName(e,t){const n=e.objectives[0].targetId,i=P.getMonster(n??"");return i?.name===t||t.includes(i?.name??"\0")}findObjective(e){return P.quests.quests.find(t=>{const n=this.quests.get(t.id);return n.isAccepted&&!n.isCompleted&&t.objectives[0].type===e})??null}progress(e,t){const n=this.findObjective(e);if(!n)return;const i=n.objectives[0];if(i.type!==e||e==="talk_npc"&&i.targetId&&i.targetId!==t)return;const s=this.quests.get(n.id);s.progress+=1,q.emit("questUpdated",{questId:n.id,progress:Math.min(s.progress,i.quantity),total:i.quantity}),s.progress>=i.quantity&&this.complete(n)}complete(e){const t=this.quests.get(e.id);t.isCompleted||(t.isCompleted=!0,this.grantRewards(e.rewards),q.emit("questCompleted",{questId:e.id,name:e.name}),Pt.debug(`[Quest] 完成 ${e.name}`),this.autoAcceptNext())}autoAcceptNext(){for(const e of P.quests.quests){const t=this.quests.get(e.id);t.isAccepted||e.prerequisites.every(n=>this.quests.get(n)?.isCompleted)&&(t.isAccepted=!0,q.emit("questAccepted",{questId:e.id}))}}grantRewards(e){const t=ge.getInstance();for(const n of e)switch(n.type){case"gold":t.gainGold(n.value??0);break;case"exp":t.gainExp(n.value??0);break;case"keys":t.state.keys+=n.value??1;break;case"potion":n.tier&&t.addPotion(n.tier,n.value??1);break;case"equipment":{const i=Gn.getInstance().generate("quest",{forcedQuality:n.quality??"common"});t.addEquipment(i);break}}}get trackedQuest(){for(const e of P.quests.quests){const t=this.quests.get(e.id);if(t.isAccepted&&!t.isCompleted)return{def:t,quest:e}}return null}all(){return P.quests.quests.map(e=>({state:this.quests.get(e.id),def:e}))}exportStates(){return[...this.quests.values()]}restoreStates(e,t){for(const n of e)this.quests.set(n.id,{...n});this.maxFloorReached=t,this.autoAcceptNext()}};w(os,"instance");let Ti=os;const ls=class ls{constructor(){w(this,"kills",new Map);q.on("monsterDefeated",e=>{e.entityId;const t=P.monsters.monsters.find(n=>e.name.includes(n.name));t&&this.kills.set(t.id,(this.kills.get(t.id)??0)+1)}),q.on("bossDefeated",e=>{const t=P.monsters.monsters.find(n=>n.category==="boss"&&e.name.includes(n.name));t&&this.kills.set(t.id,(this.kills.get(t.id)??0)+1)})}static getInstance(){return ls.instance||(ls.instance=new ls),ls.instance}getKillCount(e){return this.kills.get(e)??0}isUnlocked(e){return this.getKillCount(e)>0}entries(){return P.monsters.monsters.filter(e=>e.weight>0||e.category==="boss").map(e=>({def:e,kills:this.getKillCount(e.id),unlocked:this.isUnlocked(e.id)}))}export(){return Object.fromEntries(this.kills)}restore(e){this.kills.clear();for(const[t,n]of Object.entries(e))this.kills.set(t,n)}};w(ls,"instance");let Ss=ls;const Zn={POTION_QUALITY:"potion_quality",POTION_STRONG:"potion_strong",POTION_HOLY:"potion_holy",EQUIP_RARE:"equip_rare",EQUIP_EPIC:"equip_epic"},Uo=[{id:"first_kills",name:"初出茅庐",desc:"累计击败 10 只怪物",unlock:"解锁商人『优质药水』购买权",check:a=>a.kills>=10},{id:"hunter_30",name:"百战猎人",desc:"累计击败 30 只怪物",unlock:"解锁商人『强效药水』购买权",check:a=>a.kills>=30},{id:"dragon_slayer",name:"弑龙者",desc:"击败任意 Boss",unlock:"解锁商人『圣药』购买权",check:a=>a.bosses>=1},{id:"explorer_5",name:"探塔者",desc:"到达第 5 层",unlock:"解锁商人『稀有装备』上架权",check:a=>a.maxFloor>=5},{id:"treasure_8",name:"寻宝家",desc:"累计开启 8 个宝箱",unlock:"解锁商人『史诗装备』上架权",check:a=>a.chests>=8}],cs=class cs{constructor(){w(this,"unlocked",new Set);w(this,"kills",0);w(this,"bosses",0);w(this,"chests",0);w(this,"maxFloor",1);this.bindEvents()}static getInstance(){return cs.instance||(cs.instance=new cs),cs.instance}bindEvents(){q.on("monsterDefeated",e=>{this.kills++,e.isBoss&&this.bosses++,this.evaluate()}),q.on("bossDefeated",()=>{this.bosses++,this.evaluate()}),q.on("chestOpened",()=>{this.chests++,this.evaluate()}),q.on("floorChanged",e=>{this.maxFloor=Math.max(this.maxFloor,e.toFloor),this.evaluate()}),q.on("gameRestarted",()=>this.resetProgress())}restore(e,t){this.unlocked=new Set(Object.keys(e).filter(n=>e[n])),this.kills=t.totalMonstersDefeated,this.bosses=t.totalBossesDefeated,this.chests=t.totalChestsOpened,this.maxFloor=Math.max(1,ge.getInstance().state.currentFloor),this.evaluate(!0)}export(){return Object.fromEntries([...this.unlocked].map(e=>[e,!0]))}isUnlocked(e){return this.unlocked.has(e)||this.checkByUnlockId(e)}checkByUnlockId(e){const t={kills:this.kills,bosses:this.bosses,chests:this.chests,maxFloor:this.maxFloor};return Uo.some(n=>n.unlock.includes(Zn[e]??"\0")&&n.check(t))}list(){const e={kills:this.kills,bosses:this.bosses,chests:this.chests,maxFloor:this.maxFloor};return Uo.map(t=>({id:t.id,name:t.name,desc:t.desc,unlock:t.unlock,done:t.check(e)}))}resetProgress(){this.unlocked.clear(),this.kills=0,this.bosses=0,this.chests=0,this.maxFloor=1}evaluate(e=!1){const t={kills:this.kills,bosses:this.bosses,chests:this.chests,maxFloor:this.maxFloor};for(const n of Uo)this.unlocked.has(n.id)||!n.check(t)||(this.unlocked.add(n.id),e||(Pt.info(`[成就] ${n.name} 解锁：${n.unlock}`),q.emit("achievementUnlocked",{id:n.id,name:n.name,unlock:n.unlock}),q.emit("notification",{message:`🏆 成就达成「${n.name}」：${n.unlock}`,type:"success",icon:"🏆"})))}};w(cs,"instance");let En=cs;const hs=class hs{constructor(){w(this,"stats",{totalMonstersDefeated:0,totalBossesDefeated:0,totalChestsOpened:0,steps:0});q.on("floorChanged",e=>{e.toFloor>P.mapGen.initialFloor&&this.autoSave()}),q.on("monsterDefeated",()=>{this.stats.totalMonstersDefeated++}),q.on("bossDefeated",()=>{this.stats.totalBossesDefeated++}),q.on("chestOpened",()=>{this.stats.totalChestsOpened++}),q.on("playerMoved",()=>{this.stats.steps++})}static getInstance(){return hs.instance||(hs.instance=new hs),hs.instance}get storageKey(){return P.config.save.key}autoSave(){De.settings.autoSave&&this.save("auto")}save(e){const t=Be.getInstance(),n=t.currentFloor;if(!n)return!1;const i=ge.getInstance(),s={version:P.config.save.version,lastSaved:new Date().toISOString(),player:{...i.state,potions:{...i.state.potions},bag:[...i.state.bag]},quests:Ti.getInstance().exportStates(),bestiary:Ss.getInstance().export(),floor:n,entityStates:t.exportEntityStates(),guidance:Ei.getInstance().export(),settings:{...De.settings},achievements:En.getInstance().export(),stats:{...this.stats}};try{return localStorage.setItem(this.storageKey,JSON.stringify(s)),q.emit("saveCompleted",{trigger:e}),Pt.info(`[Save] ${e==="auto"?"自动":"手动"}存档完成（楼层${n.floorId}）`),!0}catch(r){return Pt.error("[Save] 存档失败",r),q.emit("notification",{message:"存档失败：存储空间不足",type:"error",icon:"💾"}),!1}}hasSave(){return localStorage.getItem(this.storageKey)!==null}load(){const e=localStorage.getItem(this.storageKey);if(!e)return!1;try{const t=JSON.parse(e);return t.version!==P.config.save.version&&Pt.warn(`[Save] 版本不匹配 ${t.version} → ${P.config.save.version}`),(!Array.isArray(t.player.hotbar)||t.player.hotbar.length!==5)&&(t.player.hotbar=[null,null,null,null,null]),ge.getInstance().restore(t.player),On.getInstance().restoreFloor(t.floor),Be.getInstance().loadFloor(t.floor,t.entityStates),Ti.getInstance().restoreStates(t.quests,t.player.currentFloor),Ss.getInstance().restore(t.bestiary),Ei.getInstance().restore(t.guidance),De.settings={...P.settings.defaults,...t.settings},this.stats={...t.stats},En.getInstance().restore(t.achievements??{},this.stats),un.getInstance().snapToPlayer(),q.emit("saveLoaded",{}),Pt.info(`[Save] 读档完成（楼层${t.floor.floorId}）`),!0}catch(t){return Pt.error("[Save] 读档失败",t),!1}}clear(){localStorage.removeItem(this.storageKey),q.emit("saveCleared",{})}get playStats(){return this.stats}};w(hs,"instance");let en=hs;const ds=class ds{constructor(){w(this,"heldDirs",new Set);w(this,"repeatTimer",0);w(this,"mouseClient",null);w(this,"hover",null);w(this,"hoverShowTimer",null);w(this,"hoverHideTimer",null);w(this,"pendingHover",null);this.bindKeyboard()}attachCanvas(e){e.addEventListener("mousemove",t=>{this.mouseClient={x:t.clientX,y:t.clientY}}),e.addEventListener("mouseleave",()=>{this.mouseClient=null,this.scheduleHide()}),e.addEventListener("click",t=>{const n=this.clientToTile(t.clientX,t.clientY);n&&zn.getInstance().moveTo(n.x,n.y)}),e.addEventListener("contextmenu",t=>t.preventDefault())}static getInstance(){return ds.instance||(ds.instance=new ds),ds.instance}bindKeyboard(){window.addEventListener("keydown",e=>{if(e.repeat)return;const t=e.key.toLowerCase();if(De.started&&!De.modalOpen)switch(t){case"b":q.emit("panelToggled",{panel:"inventory",open:!0});return;case"c":q.emit("panelToggled",{panel:"character",open:!0});return;case"j":q.emit("panelToggled",{panel:"quest",open:!0});return;case"g":q.emit("panelToggled",{panel:"bestiary",open:!0});return}if(t==="escape")return;if(t==="k"&&!e.ctrlKey&&!e.metaKey&&De.started){en.getInstance().save("manual");return}if(t==="s"&&(e.ctrlKey||e.metaKey)){e.preventDefault(),De.started&&en.getInstance().save("manual");return}const n=parseInt(t,10);if(n>=1&&n<=5){const s=ge.getInstance(),r=s.state.hotbar[n-1];r&&s.getPotionCount(r)>0&&s.usePotion(r);return}const i=this.keyToDir(t);i&&(this.heldDirs.add(`${i[0]},${i[1]}`),this.repeatTimer=P.config.input.moveRepeatMs,zn.getInstance().tryMove(i[0],i[1]),e.preventDefault())}),window.addEventListener("keyup",e=>{const t=this.keyToDir(e.key.toLowerCase());t&&this.heldDirs.delete(`${t[0]},${t[1]}`)}),window.addEventListener("blur",()=>this.heldDirs.clear())}keyToDir(e){switch(e){case"w":case"arrowup":return[0,-1];case"a":case"arrowleft":return[-1,0];case"d":case"arrowright":return[1,0];case"s":case"arrowdown":return[0,1];default:return null}}clientToTile(e,t){const n=_s.getInstance().screenToTile(e,t);if(n)return n;const i=document.getElementById("game-canvas");if(!i)return null;const s=i.getBoundingClientRect(),r=e-s.left-s.width/2+un.getInstance().x,o=t-s.top-s.height/2+un.getInstance().y,l=jt.screenToWorld(r,o);return{x:Math.floor(l.col),y:Math.floor(l.row)}}update(e){if(this.heldDirs.size>0&&(this.repeatTimer-=e,this.repeatTimer<=0)){this.repeatTimer=P.config.input.moveRepeatMs;const t=[...this.heldDirs][this.heldDirs.size-1],n=this.dirVector(t);n&&zn.getInstance().tryMove(n[0],n[1])}this.updateHover()}dirVector(e){switch(e){case"0,-1":return[0,-1];case"0,1":return[0,1];case"-1,0":return[-1,0];case"1,0":return[1,0];default:return null}}updateHover(){const e=P.config.hover;if(!this.mouseClient){this.scheduleHide();return}const t=this.clientToTile(this.mouseClient.x,this.mouseClient.y),n=Be.getInstance();if(!t||!n.inBounds(t.x,t.y)){this.scheduleHide();return}const s={entity:n.getEntityAt(t.x,t.y),tile:t,tileType:n.tileAt(t.x,t.y)};this.pendingHover=s,_s.getInstance().hoverTile=t,this.hoverHideTimer!==null&&(window.clearTimeout(this.hoverHideTimer),this.hoverHideTimer=null),this.hoverShowTimer===null&&(this.hoverShowTimer=window.setTimeout(()=>{this.hoverShowTimer=null,this.pendingHover?.entity?this.hover=this.pendingHover:this.hover=null},e.showDelayMs))}scheduleHide(){this.hoverShowTimer!==null&&(window.clearTimeout(this.hoverShowTimer),this.hoverShowTimer=null),this.hoverHideTimer===null&&this.hover&&(this.hoverHideTimer=window.setTimeout(()=>{this.hoverHideTimer=null,this.hover=null},P.config.hover.hideDelayMs))}};w(ds,"instance");let or=ds;class Oy{constructor(e){w(this,"el");w(this,"lastKey","");this.el=e,document.addEventListener("mousemove",t=>{this.el.classList.contains("hidden")||this.position(t.clientX,t.clientY)})}update(e){if(!e?.entity){this.el.classList.contains("hidden")||(this.el.classList.add("hidden"),this.lastKey="");return}const t=e.entity,n=`${t.id}:${Be.getInstance().getEntityState(t.id).isOpened?1:0}`;n!==this.lastKey&&(this.lastKey=n,this.el.innerHTML=this.renderContent(t),this.el.classList.remove("hidden"))}renderContent(e){const t=P.texts.hints??{};switch(e.kind){case"monster":case"boss":{const n=P.getMonster(e.monsterId??"");if(!n)return"";const i=tn.getInstance().monsterStats(n,Be.getInstance().currentFloor?.floorId??1,e.kind!=="boss"&&!!e.isElite),s=rr.getInstance().forecast(e),r=s.winnable?`<span class="ok">预计损耗 ${s.estDamage} HP</span>`:`<span class="bad">危险！预计损耗 ${s.estDamage} HP</span>`;return`
          <div class="tt-title" style="color:${n.color}">${i.name}</div>
          <div>❤️ ${i.hp}　⚔️ ${i.attack}　🛡️ ${i.defense}</div>
          <div class="dim">掉落：${i.gold}金币 / ${i.exp}经验${e.kind==="boss"?" / 必掉装备":""}</div>
          <div>${r}</div>
          <div class="tt-hint">（${t.attack??"左键攻击"}）</div>
        `}case"potion":{const n=P.getPotion(e.potionTier??"");return`
          <div class="tt-title" style="color:${n?.color??"#ff5a7a"}">${n?.name??"药水"}</div>
          <div class="dim">回复 ${Math.round((n?.healPct??0)*100)}% 生命</div>
          <div class="tt-hint">（${t.pickup??"左键拾取"}）</div>
        `}case"chest":{const n=Be.getInstance().isChestOpened(e);return`
          <div class="tt-title" style="color:#ffcc00">${e.chestTier==="grand"?"大宝箱":"宝箱"}${n?"（已开启）":""}</div>
          ${n?'<div class="dim">空空如也</div>':'<div class="dim">金币 / 装备 / 药水</div>'}
          ${n?"":`<div class="tt-hint">（${t.open??"左键打开"}）</div>`}
        `}case"npc":{const n=P.getNpc(e.npcId??"");return n?`
          <div class="tt-title" style="color:${n.color}">${n.name}</div>
          <div class="dim">“${n.lines[0]}”</div>
          ${n.isWitch?'<div class="dim">可交易秘制药水</div>':""}
          <div class="tt-hint">（${n.isMerchant||n.isWitch?t.trade??"左键交易":t.talk??"左键对话"}）</div>
        `:""}case"fountain":{const n=Be.getInstance(),i=n.getEntityState(e.id).isUsed===!0,s=P.config.witch,r=s.fountainCostBase+(n.currentFloor?.floorId??1)*s.fountainCostPerFloor;return`
          <div class="tt-title" style="color:#8ff0ff">治疗泉${i?"（已枯竭）":""}</div>
          ${i?'<div class="dim">泉水已干涸</div>':`<div class="dim">回复全部生命（💰 ${r}）</div>`}
          ${i?"":`<div class="tt-hint">（${t.heal??"左键治疗"}）</div>`}
        `}case"stair":return`
          <div class="tt-title" style="color:#44ddff">通往第 ${e.targetFloor} 层</div>
          <div class="tt-hint">（${t.stair??"点击前往"}）</div>
        `;default:return""}}position(e,t){const n=P.config.hover,i=this.el.getBoundingClientRect();let s=e+n.offsetX,r=t+n.offsetY;s+i.width>window.innerWidth-8&&(s=e-i.width-n.offsetX),r+i.height>window.innerHeight-8&&(r=t-i.height-n.offsetY),this.el.style.left=`${s}px`,this.el.style.top=`${r}px`}}class ql{static init(e){this.host=e,q.on("notification",t=>this.show(t.message,t.type,t.icon)),q.on("questCompleted",t=>this.show(`任务完成：${t.name}`,"success","📋")),q.on("levelUp",t=>this.show(`升级！Lv.${t.newLevel}（攻击+${t.gainedAttack} 防御+${t.gainedDefense} 生命+${t.gainedHp}）`,"success","⬆️")),q.on("saveCompleted",t=>this.show(t.trigger==="auto"?"已自动存档":"已手动存档","info","💾")),q.on("bossDefeated",t=>this.show(`击败Boss：${t.name}！`,"success","🏆")),q.on("questAccepted",()=>{})}static show(e,t="info",n="ℹ️"){if(!this.host)return;const i=document.createElement("div");i.className=`notification ${t}`,i.innerHTML=`<span class="nt-icon">${n}</span><span>${e}</span>`,this.host.appendChild(i),window.setTimeout(()=>{i.classList.add("fade-out"),window.setTimeout(()=>i.remove(),400)},2800)}}w(ql,"host",null);const us=class us{constructor(){w(this,"shops",new Map)}static getInstance(){return us.instance||(us.instance=new us),us.instance}openShop(e,t){const n=`${e}@${t}`,i=this.shops.get(n);if(i)return i;const s=e==="npc_witch"?this.buildWitchStock(t):this.buildMerchantStock(t);return this.shops.set(n,s),s}buildWitchStock(e){const t=P.config.witch,n=En.getInstance(),i={quality:Zn.POTION_QUALITY,strong:Zn.POTION_STRONG,holy:Zn.POTION_HOLY},s=P.potions.potions.filter(o=>e>=o.minFloor&&e<=o.maxFloor).filter(o=>!i[o.tier]||n.isUnlocked(i[o.tier])).sort((o,l)=>l.healPct-o.healPct);return(s.length>0?s:P.potions.potions).slice(0,2).map(o=>({kind:"potion",tier:o.tier,name:o.name,icon:o.icon,price:Math.round(o.price*1.2),quantity:fe.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(o.healPct*100)}% 生命（女巫秘制）`}))}buildMerchantStock(e){const t=P.config.merchant;ge.getInstance();const n=[],i=En.getInstance(),s={quality:Zn.POTION_QUALITY,strong:Zn.POTION_STRONG,holy:Zn.POTION_HOLY},r=P.potions.potions.filter(p=>e>=p.minFloor&&e<=p.maxFloor).filter(p=>!s[p.tier]||i.isUnlocked(s[p.tier])).sort((p,v)=>v.healPct-p.healPct),o=r[0];o&&n.push({kind:"potion",tier:o.tier,name:o.name,icon:o.icon,price:o.price,quantity:fe.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(o.healPct*100)}% 生命`});const l=r[1];l&&n.push({kind:"potion",tier:l.tier,name:l.name,icon:l.icon,price:l.price,quantity:fe.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(l.healPct*100)}% 生命`});const c=Math.round(t.keyPriceBase+t.keyPricePer10Floors*Math.floor(e/10));n.push({kind:"key",name:"钥匙",icon:"🗝️",price:c,quantity:fe.randInt(t.keyCountMin,t.keyCountMax),desc:"开启上锁的宝箱"});const h=En.getInstance(),f=P.equipment.qualityOrder;let d=1;h.isUnlocked(Zn.EQUIP_RARE)&&(d=Math.max(d,f.indexOf("rare"))),h.isUnlocked(Zn.EQUIP_EPIC)&&(d=Math.max(d,f.indexOf("epic")));const u=fe.randInt(t.equipmentCountMin,t.equipmentCountMax);for(let p=0;p<u;p++){let v=Gn.getInstance().generate("merchant",{floorId:e}),m=0;for(;f.indexOf(v.quality)>d&&m++<4;)v=Gn.getInstance().generate("merchant",{floorId:e,forcedQuality:f[Math.max(0,Math.min(d,f.length-1))]});n.push({kind:"equipment",name:v.name,icon:v.slot==="weapon"?"🗡️":"🛡️",price:v.buyPrice,quantity:1,equipment:v,desc:v.slot==="weapon"?`攻击 +${v.attack}`:`防御 +${v.defense}`})}return n}buy(e,t,n){const s=this.openShop(e,t)[n];if(!s)return{ok:!1,reason:"无此商品"};if(s.quantity===0)return{ok:!1,reason:"已售罄"};const r=ge.getInstance();return r.spendGold(s.price)?(s.kind==="potion"&&s.tier?(r.addPotion(s.tier,1),q.emit("potionPurchased",{tier:s.tier,price:s.price})):s.kind==="key"?(r.state.keys+=1,q.emit("keyPurchased",{price:s.price})):s.kind==="equipment"&&s.equipment&&r.addEquipment(s.equipment),s.quantity>0&&(s.quantity-=1),{ok:!0}):{ok:!1,reason:"金币不足"}}sell(e){const t=ge.getInstance(),n=t.state.bag.find(i=>i.id===e);return n?n.isFavorite?{ok:!1,price:0,reason:"已收藏的装备无法回收"}:t.state.weaponId===e||t.state.armorId===e?{ok:!1,price:0,reason:"正在穿戴的装备无法回收"}:(t.removeEquipment(e),t.gainGold(n.sellPrice),q.emit("equipmentSold",{equipmentId:e,price:n.sellPrice}),{ok:!0,price:n.sellPrice}):{ok:!1,price:0,reason:"无此装备"}}};w(us,"instance");let vs=us;const Qh={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6};function ky(a,e=.16){const t=parseInt(a.slice(1),16);return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${e})`}const xi=class xi{constructor(e,t,n){w(this,"el");w(this,"name");this.name=t,this.el=document.createElement("div"),this.el.className="overlay-panel hidden",this.el.dataset.panel=t,this.el.innerHTML=`<div class="op-box"><div class="op-head"><span>${n}</span><button class="op-close">✕</button></div><div class="op-body"></div></div>`,e.appendChild(this.el),this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.addEventListener("click",i=>{i.target===this.el&&this.close()})}get body(){return this.el.querySelector(".op-body")}get isOpen(){return!this.el.classList.contains("hidden")}open(){this.isOpen||(this.el.classList.remove("hidden"),xi.stack.push(this),De.pushModal(),this.onOpen())}close(){this.isOpen&&(this.el.classList.add("hidden"),xi.stack=xi.stack.filter(e=>e!==this),De.popModal())}onOpen(){}static closeTop(){const e=xi.stack[xi.stack.length-1];return e?(e.close(),!0):!1}};w(xi,"stack",[]);let Wn=xi;class By{constructor(e){w(this,"inventory");w(this,"character");w(this,"quest");w(this,"bestiary");w(this,"achievements");w(this,"settings");w(this,"battleLog");this.inventory=new zy(e),this.character=new Gy(e),this.quest=new Hy(e),this.bestiary=new Vy(e),this.achievements=new Wy(e),this.settings=new qy(e),this.battleLog=new Xy(e)}open(e){switch(e){case"inventory":this.inventory.open();break;case"character":this.character.open();break;case"quest":this.quest.open();break;case"bestiary":this.bestiary.open();break;case"achievements":this.achievements.open();break;case"settings":this.settings.open();break}}handleEscape(){Wn.closeTop()}}class zy extends Wn{constructor(t){super(t,"inventory","📦 背包");w(this,"selected",null);w(this,"filter","all");this.el.querySelector(".op-box").classList.add("op-box-inv"),q.on("equipmentGenerated",()=>{this.isOpen&&this.render()}),q.on("equipmentEquipped",()=>{this.isOpen&&this.render()}),q.on("equipmentSold",()=>{this.isOpen&&this.render()}),q.on("potionUsed",()=>{this.isOpen&&this.render()}),q.on("potionPurchased",()=>{this.isOpen&&this.render()})}onOpen(){this.render()}render(){const t=ge.getInstance(),n=t.state.bag;this.selected=n.find(u=>u.id===this.selected?.id)??null;const i=n.filter(u=>this.filter==="weapon"?u.slot==="weapon":this.filter==="armor"?u.slot==="armor":!(this.filter==="potion"||this.filter==="other")),s=[{key:"all",label:"全部",count:n.length},{key:"weapon",label:"🗡️ 武器",count:n.filter(u=>u.slot==="weapon").length},{key:"armor",label:"🛡️ 胸甲",count:n.filter(u=>u.slot==="armor").length},{key:"potion",label:"🧪 药水",count:Object.values(t.state.potions).reduce((u,p)=>u+p,0)},{key:"other",label:"🗝️ 其他",count:t.state.keys>0?1:0}],r=[...i].sort((u,p)=>+!!p.isFavorite-+!!u.isFavorite),o=r.length===0?'<div class="dim inv-empty">此类没有物品</div>':r.map(u=>{const p=P.equipment.quality[u.quality],v=u.id===t.state.weaponId||u.id===t.state.armorId;return`<div class="bag-cell ${u.id===this.selected?.id?"active":""} ${u.isFavorite?"fav":""}"
                     draggable="true" data-id="${u.id}"
                     style="border-color:${p.color};background:${ky(p.color)}"
                     title="拖到左侧装备栏穿戴；点击查看详情">
          <div class="cell-icon" style="border-color:${p.color}">${u.slot==="weapon"?"🗡️":"🛡️"}</div>
          <div class="cell-name" style="color:${p.color}">${u.name}${u.isFavorite?" ⭐":""}</div>
          <div class="cell-sub dim">Lv.${u.level}${v?" 已穿戴":""}</div>
        </div>`}).join(""),l=["crude","normal","quality","strong","holy"].map(u=>{const p=P.getPotion(u),v=t.getPotionCount(u);return`<div class="potion-row" draggable="${v>0}" data-tier="${u}"
                  title="${v>0?"拖到底部快捷栏绑定；点击使用":"数量为0"}">
        <span class="potion-name">${P.potionIconImg(u)} ${p.name}</span>
        <span>×${v} <span class="dim">(${Math.round(p.healPct*100)}%)</span></span>
        <button class="potion-use" data-tier-use="${u}" ${v===0?"disabled":""}>使用</button>
      </div>`}).join(""),c=`
      <div class="potion-row"><span>🗝️ 钥匙</span><span>×${t.state.keys}</span><span></span></div>
    `,h=this.filter==="potion"?`<div class="inv-potions"><div class="dim hotbar-hint">💡 将药水拖到底部快捷栏槽位绑定（数字键1-5快速使用）</div>${l}</div>`:this.filter==="other"?`<div class="inv-potions">${c}</div>`:`<div class="inv-list">${o}</div>`,f=u=>{const p=u==="weapon"?t.weapon:t.armor,v=p?P.equipment.quality[p.quality]:null;return`<div class="equip-slot ${p?"filled":"empty-slot"}" data-eslot="${u}">
        <div class="equip-slot-icon">${u==="weapon"?"🗡️":"🛡️"}</div>
        ${p&&v?`<div class="equip-slot-name" style="color:${v.color}">${p.name}</div>
             <button class="equip-slot-unequip" data-unequip="${u}">卸下</button>`:'<div class="equip-slot-name dim">空</div>'}
      </div>`};this.body.innerHTML=`
      <div class="inv-tabs">${s.map(u=>`<button class="inv-tab ${this.filter===u.key?"active":""}" data-filter="${u.key}">${u.label} <span class="dim">${u.count}</span></button>`).join("")}</div>
      <div class="inv-main">
        <div class="inv-equip-col">
          <h3 class="sub-title">装备栏</h3>
          ${f("weapon")}
          ${f("armor")}
          <div class="dim equip-hint">💡 拖动背包中的装备到对应栏位穿戴</div>
        </div>
        <div class="inv-middle">${h}</div>
        <div class="inv-detail">${this.filter==="potion"||this.filter==="other"?'<div class="dim">选择装备查看详情与对比</div>':this.selected?this.detailHtml(this.selected):'<div class="dim">选择一件装备查看详情与对比</div>'}</div>
      </div>
    `,this.body.querySelectorAll("[data-filter]").forEach(u=>{u.addEventListener("click",()=>{this.filter=u.dataset.filter,this.render()})}),this.body.querySelectorAll("[data-fav]").forEach(u=>{u.addEventListener("click",p=>{p.stopPropagation();const v=n.find(m=>m.id===u.dataset.fav);v&&(v.isFavorite=!v.isFavorite),this.render()})}),this.body.querySelectorAll(".bag-cell").forEach(u=>{const p=u;p.addEventListener("click",()=>{this.selected=n.find(v=>v.id===p.dataset.id)??null,this.render()}),p.addEventListener("dragstart",v=>{const m=v;m.dataTransfer?.setData("equip-id",p.dataset.id),m.dataTransfer&&(m.dataTransfer.effectAllowed="move")})}),this.body.querySelectorAll(".equip-slot").forEach(u=>{const p=u.dataset.eslot;u.addEventListener("dragover",v=>{v.preventDefault(),u.classList.add("drag-over")}),u.addEventListener("dragleave",()=>u.classList.remove("drag-over")),u.addEventListener("drop",v=>{v.preventDefault(),u.classList.remove("drag-over");const m=v.dataTransfer?.getData("equip-id"),g=m?n.find(_=>_.id===m):null;g&&g.slot===p?ge.getInstance().equip(m):g&&q.emit("notification",{message:"该装备类型与此栏位不符",type:"warning",icon:"⚠️"})})}),this.body.querySelectorAll("[data-unequip]").forEach(u=>{u.addEventListener("click",()=>{ge.getInstance().unequip(u.dataset.unequip),this.render()})});const d=this.selected;this.body.querySelectorAll('[data-act="equip"]').forEach(u=>{u.addEventListener("click",()=>{d&&ge.getInstance().equip(d.id)})}),this.body.querySelectorAll('[data-act="sell"]').forEach(u=>{u.addEventListener("click",()=>{d&&vs.getInstance().sell(d.id)})}),this.body.querySelectorAll("[data-tier-use]").forEach(u=>{u.addEventListener("click",()=>{ge.getInstance().usePotion(u.dataset.tierUse),this.render()})}),this.body.querySelectorAll('.potion-row[draggable="true"]').forEach(u=>{u.addEventListener("dragstart",p=>{const v=p;v.dataTransfer?.setData("potion-tier",u.dataset.tier),v.dataTransfer&&(v.dataTransfer.effectAllowed="copy")})})}detailHtml(t){const n=ge.getInstance(),i=P.equipment.quality[t.quality],s=t.slot==="weapon"?n.weapon:n.armor,r=(d,u,p)=>{const v=u-p,m=v>0?"up":v<0?"down":"dim",g=v>0?` <span class="${m}">(▲${v} vs 已穿戴)</span>`:v<0?` <span class="${m}">(▼${Math.abs(v)} vs 已穿戴)</span>`:"";return`<div>${d} ${u}${g}</div>`},o=s?.affixes??[],l=t.affixes.map(d=>{const u=o.find(v=>v.type===d.type),p=!u;return`<div class="affix-row ${p?"new-affix":""}">✦ ${d.name} Lv.${t.level}　${this.affixDesc(d)}${p?' <span class="up">[新]</span>':u&&u.value!==d.value?` <span class="${d.value>u.value?"up":"down"}">(${d.value>u.value?"▲":"▼"}${Math.abs(d.value-u.value)})</span>`:""}</div>`}),c=o.filter(d=>!t.affixes.some(u=>u.type===d.type)),h=c.map(d=>`<div class="affix-row down">✦ ${d.name} ${this.affixDesc(d)} <span>[缺失]</span></div>`).join("");let f="";if(s){const d=Qh[t.quality]-Qh[s.quality];d!==0&&(f=`<span class="${d>0?"up":"down"}">（${d>0?"品质提升▲":"品质下降▼"}）</span>`)}return`
      <div class="eq-detail">
        <div class="eq-title-row">
          <div class="eq-title" style="color:${i.color}">${t.slot==="weapon"?"🗡️":"🛡️"} ${t.name}</div>
          <button class="fav-star detail-fav ${t.isFavorite?"on":""}" data-fav="${t.id}"
                  title="${t.isFavorite?"取消收藏":"收藏：置顶显示且无法回收"}">${t.isFavorite?"⭐ 已收藏":"☆ 收藏"}</button>
        </div>
        <div class="dim">品质：${i.name}${f}　装备等级：${t.level}</div>
        <div class="eq-stats">
          ${r("⚔️ 攻击力",t.attack,s?.attack??0)}
          ${r("🛡️ 防御力",t.defense,s?.defense??0)}
        </div>
        ${t.affixes.length>0||c.length>0?`<div class="affix-list">${l.join("")}${h}</div>`:""}
        <div class="dim">回收价：${t.sellPrice} 金币</div>
        <div class="eq-actions">
          <button data-act="equip" class="btn-primary">${s?"替换穿戴（旧装回背包）":"穿戴"}</button>
          <button data-act="sell" ${t.isFavorite?'disabled title="已收藏的装备无法回收"':""}>出售 +${t.sellPrice}💰</button>
        </div>
      </div>
    `}affixDesc(t){return P.equipment.affixes.find(i=>i.name===t.name)?.description?.replace("{v}",String(t.value))??`${t.name}+${t.value}`}}class Gy extends Wn{constructor(e){super(e,"character","👤 角色")}onOpen(){const e=ge.getInstance(),t=e.stats(),n=(i,s)=>s?`<div class="char-equip" data-slot="${i}"><span>${i==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}</span><span style="color:${P.equipment.quality[s.quality].color}">${s.name}</span><button data-unequip="${i}">卸下</button></div>`:`<div class="char-equip dim"><span>${i==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}</span><span>未装备</span></div>`;this.body.innerHTML=`
      <div class="char-grid">
        <div>等级</div><div>Lv.${e.state.level}（${e.state.exp}/${tn.getInstance().expToNext(e.state.level)} 经验）</div>
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
    `,this.body.querySelectorAll("[data-unequip]").forEach(i=>{i.addEventListener("click",()=>{ge.getInstance().unequip(i.dataset.unequip),this.onOpen()})})}}class Hy extends Wn{constructor(e){super(e,"quest","📋 任务")}onOpen(){const e=Ti.getInstance().all().map(({state:t,def:n})=>{const i=t.isCompleted?'<span class="ok">✔ 已完成</span>':t.isAccepted?`<span class="dim">进行中 ${Math.min(t.progress,n.objectives[0].quantity)}/${n.objectives[0].quantity}</span>`:'<span class="dim">未解锁</span>',s=n.rewards.map(r=>{switch(r.type){case"gold":return`${r.value}金币`;case"potion":return`${P.getPotion(r.tier??"crude")?.name}×${r.value??1}`;case"equipment":return"装备";case"exp":return`${r.value}经验`;case"keys":return`钥匙×${r.value??1}`;default:return""}}).join("、");return`<div class="quest-row ${t.isCompleted?"done":t.isAccepted?"active-quest":"locked"}">
        <div class="quest-name">${t.isAccepted||t.isCompleted?"📌":"🔒"} ${n.name} ${i}</div>
        <div class="dim">${n.description}</div>
        <div class="dim">奖励：${s}</div>
      </div>`}).join("");this.body.innerHTML=e}}class Vy extends Wn{constructor(e){super(e,"bestiary","📖 图鉴")}onOpen(){const e=ge.getInstance().state.currentFloor,t=Ss.getInstance().entries().map(({def:n,kills:i,unlocked:s})=>{if(!s)return'<div class="bestiary-row locked"><span>？？？</span><span class="dim">尚未遭遇</span></div>';const r=tn.getInstance().monsterStats(n,e,!1);return`<div class="bestiary-row">
        <span style="color:${n.color}">● ${n.name}${n.category==="boss"?"（Boss）":""}</span>
        <span class="dim">❤️${r.hp} ⚔️${r.attack} 🛡️${r.defense}</span>
        <span class="dim">击杀×${i}</span>
      </div>`}).join("");this.body.innerHTML=t}}class Wy extends Wn{constructor(e){super(e,"achievements","🏆 成就"),q.on("achievementUnlocked",()=>{this.isOpen&&this.render()})}onOpen(){this.render()}render(){const e=En.getInstance().list().map(n=>`
      <div class="quest-row ${n.done?"done":""} achievement-row">
        <div class="quest-name">${n.done?"🏆":"🔒"} ${n.name}</div>
        <div class="dim">${n.desc}</div>
        <div class="${n.done?"ok":"dim"}">🎁 ${n.unlock}${n.done?"（已生效）":""}</div>
      </div>
    `).join(""),t=En.getInstance().list().filter(n=>n.done).length;this.body.innerHTML=`
      <div class="dim" style="margin-bottom:8px">达成进度：${t} / ${En.getInstance().list().length}。
      达成成即可解锁商人/女巫的高阶物品获取权。</div>
      ${e}
    `}}class qy extends Wn{constructor(e){super(e,"settings","⚙️ 设置")}onOpen(){this.body.innerHTML=`
      <div class="settings-rows">
        <label class="setting-row">
          <span>自动存档（到达新楼层时）</span>
          <input type="checkbox" id="opt-autosave" ${De.settings.autoSave?"checked":""} />
        </label>
        <label class="setting-row">
          <span>帧率限制（省电/降温）</span>
          <select id="opt-fpscap" class="fps-select">
            <option value="0" ${De.settings.fpsCap===0?"selected":""}>不限制</option>
            <option value="60" ${De.settings.fpsCap===60?"selected":""}>60 FPS</option>
            <option value="45" ${De.settings.fpsCap===45?"selected":""}>45 FPS</option>
            <option value="30" ${De.settings.fpsCap===30?"selected":""}>30 FPS</option>
          </select>
        </label>
        <div class="setting-row">
          <span>战斗模式（托管=自动结算+30%自动喝药；微操=逐回合手动）</span>
          <div class="seg-control" id="opt-battlemode">
            <button data-mode="auto" class="${De.settings.battleMode==="auto"?"on":""}">托管</button>
            <button data-mode="manual" class="${De.settings.battleMode==="manual"?"on":""}">微操</button>
          </div>
        </div>
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
    `;const e=this.body.querySelector("#opt-autosave");e.addEventListener("change",()=>{De.setSetting("autoSave",e.checked)});const t=this.body.querySelector("#opt-fpscap");t.addEventListener("change",()=>{De.setSetting("fpsCap",parseInt(t.value,10))}),this.body.querySelectorAll("#opt-battlemode button").forEach(n=>{n.addEventListener("click",()=>{De.setSetting("battleMode",n.dataset.mode),this.body.querySelectorAll("#opt-battlemode button").forEach(i=>{i.classList.toggle("on",i===n)})})}),this.initDisplaySettings(),this.body.querySelector("#opt-save").addEventListener("click",()=>en.getInstance().save("manual")),this.body.querySelector("#opt-load").addEventListener("click",()=>{en.getInstance().load()&&this.close()}),this.body.querySelector("#opt-clear").addEventListener("click",()=>{window.confirm("确定清除存档？不可恢复。")&&en.getInstance().clear()}),this.body.querySelector("#opt-title").addEventListener("click",()=>{window.confirm("回到首页？当前进度将自动存档。")&&(this.close(),q.emit("returnToTitle",{}))}),this.body.querySelector("#opt-restart").addEventListener("click",()=>{window.confirm("确定重新开始？当前进度将丢失（请先存档）。")&&(zn.getInstance().restart(),this.close())})}initDisplaySettings(){const e=this.body.querySelector("#opt-display"),t=this.body.querySelector("#opt-resolution"),n=this.body.querySelector("#display-hint"),i=window.motaDesktop;let s={mode:"windowed",resolution:"1600x900"};try{s={...s,...JSON.parse(localStorage.getItem("motarpg_display")||"{}")}}catch{}e.value=s.mode,t.value=s.resolution,i||(n.textContent="浏览器环境：仅支持全屏/退出全屏（无边框窗口与分辨率为桌面版功能）。");const r=()=>{const o=e.value,l=t.value;localStorage.setItem("motarpg_display",JSON.stringify({mode:o,resolution:l})),i?(o==="borderless"&&s.mode!=="borderless"&&en.getInstance().save("manual"),i.setDisplayMode({mode:o,resolution:l})):o==="fullscreen"?document.documentElement.requestFullscreen?.().catch(()=>{}):document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{}),s={mode:o,resolution:l}};e.addEventListener("change",r),t.addEventListener("change",r)}}class Xy extends Wn{constructor(e){super(e,"battleLog","⚔️ 战斗"),q.on("battleEnded",t=>{if(t.manual)return;this.show(t.result.win?"🏆 战斗胜利":"💀 战斗失败",`
        <div class="battle-mode-strip static">
          <span class="bms-label">战斗模式</span>
          <div class="seg-control">
            <button class="on">托管</button>
            <button data-mode="manual">微操</button>
          </div>
        </div>`+t.result.log.map(i=>`<div class="log-line ${i.kind}">${i.text}</div>`).join(""))})}show(e,t){this.el.querySelector(".op-head span").textContent=e,this.body.innerHTML=`${t}<div class="eq-actions"><button class="btn-primary op-close2">继续</button></div>`,this.open(),this.body.querySelectorAll('.seg-control button[data-mode="manual"]').forEach(n=>{n.addEventListener("click",()=>De.setSetting("battleMode","manual"))}),this.body.querySelector(".op-close2").addEventListener("click",()=>this.close())}}class Yy{constructor(e){w(this,"el");w(this,"npcId","");w(this,"lineIndex",0);this.el=document.createElement("div"),this.el.className="overlay-panel hidden dialog-panel",e.appendChild(this.el),q.on("npcTalked",t=>this.show(t.npcId)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}show(e){P.getNpc(e)&&(this.npcId=e,this.lineIndex=0,De.pushModal(),this.el.classList.remove("hidden"),this.render())}render(){const e=P.getNpc(this.npcId),t=e.lines[this.lineIndex]??e.lines[e.lines.length-1],n=this.lineIndex<e.lines.length-1,i=e.portrait?`<img class="dialog-portrait" src="${e.portrait}" alt="${e.name}" draggable="false">`:"";this.el.innerHTML=`
      <div class="dialog-box">
        ${i}
        <div class="dialog-name" style="color:${e.color}">${e.name}</div>
        <div class="dialog-text">“${t}”</div>
        <div class="dialog-actions">
          ${e.isWitch?'<button id="dlg-shop" class="btn-primary">🧪 秘药</button>':e.isBlacksmith?'<button id="dlg-forge" class="btn-primary">⚒️ 锻造</button>':e.isMerchant?'<button id="dlg-shop" class="btn-primary">🛒 交易</button>':""}
          ${n?'<button id="dlg-next">继续 ▶</button>':'<button id="dlg-close" class="btn-primary">结束对话</button>'}
        </div>
      </div>
    `,this.el.querySelector("#dlg-next")?.addEventListener("click",()=>{this.lineIndex++,this.render()}),this.el.querySelector("#dlg-close")?.addEventListener("click",()=>this.close()),this.el.querySelector("#dlg-shop")?.addEventListener("click",()=>{const s=ge.getInstance();this.close(),q.emit("merchantOpened",{npcId:this.npcId,roomId:s.state.currentRoomId})}),this.el.querySelector("#dlg-forge")?.addEventListener("click",()=>{const s=ge.getInstance();this.close(),q.emit("blacksmithOpened",{npcId:this.npcId,roomId:s.state.currentRoomId})})}close(){this.el.classList.add("hidden"),De.popModal()}}class $y{constructor(e){w(this,"el");w(this,"hoverEl");w(this,"npcId","");w(this,"tab","buy");this.el=document.createElement("div"),this.el.className="overlay-panel hidden",e.appendChild(this.el),this.hoverEl=document.createElement("div"),this.hoverEl.id="shop-hover",this.hoverEl.classList.add("hidden"),document.body.appendChild(this.hoverEl),q.on("merchantOpened",t=>this.show(t.npcId)),q.on("goldChanged",()=>{this.el.classList.contains("hidden")||this.render()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()}),document.addEventListener("mousemove",t=>{this.hoverEl.classList.contains("hidden")||this.positionHover(t.clientX,t.clientY)})}show(e){this.npcId=e,this.tab="buy",De.pushModal(),this.el.classList.remove("hidden"),this.render()}render(){const e=ge.getInstance(),t=e.state.currentFloor,n=vs.getInstance().openShop(this.npcId,t),i=this.npcId==="npc_witch",s=i?"buy":this.tab,r=n.map((c,h)=>{const f=c.quantity===0,d=e.state.gold>=c.price,u=c.equipment?P.equipment.quality[c.equipment.quality]:null,p=c.equipment&&u?`<div class="dim" style="color:${u.color}">${c.equipment.name} · ${c.equipment.affixes.map(g=>g.name).join("·")||"无词条"}</div>`:`<div class="dim">${c.desc}</div>`,v=c.equipment?` data-hover-equip="${h}"`:c.kind==="potion"&&c.tier?` data-hover-potion="${c.tier}"`:"",m=c.kind==="potion"&&c.tier?P.potionIconImg(c.tier):c.icon;return`<div class="shop-row shop-item ${f?"soldout":""}"${v}>
        <div>
          <div>${m} ${c.name} <span class="dim">×${c.quantity===-1?"∞":c.quantity}</span></div>
          ${p}
        </div>
        <button data-buy="${h}" ${f||!d?"disabled":""}>${c.price} 💰</button>
      </div>`}).join(""),o=[...e.state.bag].sort((c,h)=>+!!h.isFavorite-+!!c.isFavorite),l=o.length===0?'<div class="dim">没有可回收的装备</div>':o.map(c=>{const h=P.equipment.quality[c.quality],f=c.id===e.state.weaponId||c.id===e.state.armorId,d=f||!!c.isFavorite,u=[c.isFavorite?'<span class="sell-tag fav-tag">⭐ 已收藏</span>':"",f?'<span class="sell-tag equipped-tag">已装备</span>':""].join("");return`<div class="shop-row shop-item" data-hover-sell="${c.id}">
          <div>
            <div><span style="color:${h.color}">${c.name}</span> <span class="dim">Lv.${c.level}</span> ${u}</div>
            <div class="dim">${c.slot==="weapon"?"🗡️ 武器":"🛡️ 胸甲"} · ⚔️${c.attack} 🛡️${c.defense}</div>
          </div>
          <button data-sell="${c.id}" ${d?"disabled":""}>+${c.sellPrice} 💰</button>
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
          <div class="shop-content">${s==="buy"?r:l}</div>
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-shoptab]").forEach(c=>{c.addEventListener("click",()=>{this.tab=c.dataset.shoptab,this.render()})}),this.el.querySelectorAll("[data-buy]").forEach(c=>{c.addEventListener("click",()=>{const h=vs.getInstance().buy(this.npcId,t,parseInt(c.dataset.buy,10));h.ok||q.emit("notification",{message:h.reason??"购买失败",type:"warning",icon:"🛒"}),this.render()})}),this.el.querySelectorAll("[data-sell]").forEach(c=>{c.addEventListener("click",()=>{const h=vs.getInstance().sell(c.dataset.sell);h.ok||q.emit("notification",{message:h.reason??"回收失败",type:"warning",icon:"💰"}),this.render()})}),this.el.querySelectorAll("[data-hover-equip]").forEach(c=>{const h=n[parseInt(c.dataset.hoverEquip,10)];h?.equipment&&this.bindHover(c,()=>this.compareHtml(h.equipment))}),this.el.querySelectorAll("[data-hover-sell]").forEach(c=>{const h=e.state.bag.find(f=>f.id===c.dataset.hoverSell);h&&this.bindHover(c,()=>this.compareHtml(h))}),this.el.querySelectorAll("[data-hover-potion]").forEach(c=>{const h=P.getPotion(c.dataset.hoverPotion);h&&this.bindHover(c,()=>`
        <div class="hover-card">
          <div class="tt-title"><img class="potion-icon" src="${P.potionIconSrc(c.dataset.hoverPotion)}" alt=""> ${h.name}</div>
          <div>❤️ 回复 ${Math.round(h.healPct*100)}% 最大生命</div>
          <div class="dim">售价：${h.price} 💰（可拖入底部快捷栏）</div>
        </div>`)})}compareHtml(e){const t=ge.getInstance(),n=e.slot==="weapon"?t.weapon:t.armor,i=n?this.equipCard(n,"已穿戴"):`<div class="hover-card"><div class="tt-title dim">${e.slot==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}栏</div><div class="dim">未穿戴装备</div></div>`;return this.equipCard(e,e.slot==="weapon"?"购买（武器）":"购买（胸甲）")+i}equipCard(e,t){const n=P.equipment.quality[e.quality];return`<div class="hover-card" style="border-color:${n.color}">
      <div class="tt-title" style="color:${n.color}">${e.name}</div>
      <div class="dim">${t} · ${n.name} · Lv.${e.level}</div>
      <div class="hover-stats">
        <div>⚔️ 攻击力 <b>${e.attack}</b></div>
        <div>🛡️ 防御力 <b>${e.defense}</b></div>
      </div>
      ${e.affixes.length>0?`<div class="affix-list">${e.affixes.map(i=>{const s=P.equipment.affixes.find(r=>r.name===i.name);return`<div class="affix-row">✦ ${i.name} ${s?.description?.replace("{v}",String(i.value))??`+${i.value}`}</div>`}).join("")}</div>`:'<div class="dim">无词条</div>'}
      <div class="dim">回收价 ${e.sellPrice} 💰</div>
    </div>`}bindHover(e,t){e.addEventListener("mouseenter",()=>{this.hoverEl.innerHTML=t(),this.hoverEl.classList.remove("hidden")}),e.addEventListener("mouseleave",()=>this.hoverEl.classList.add("hidden"))}positionHover(e,t){const i=this.hoverEl.getBoundingClientRect();let s=e+14,r=t+14;s+i.width>window.innerWidth-8&&(s=e-i.width-14),r+i.height>window.innerHeight-8&&(r=Math.max(8,t-i.height-14)),this.hoverEl.style.left=`${s}px`,this.hoverEl.style.top=`${r}px`}close(){this.el.classList.add("hidden"),this.hoverEl.classList.add("hidden"),De.popModal()}}const jh={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6};class Ky{constructor(e){w(this,"el");w(this,"npcId","");w(this,"selectedId",null);this.el=document.createElement("div"),this.el.className="overlay-panel hidden",e.appendChild(this.el),q.on("blacksmithOpened",t=>this.show(t.npcId)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}show(e){this.npcId=e,De.pushModal(),this.el.classList.remove("hidden"),this.render()}render(){const e=ge.getInstance();Gn.getInstance();const t=e.state.bag,n=t.find(r=>r.id===this.selectedId)??null,i=t.length===0?'<div class="dim inv-empty">背包里没有装备</div>':[...t].sort((r,o)=>+!!o.isFavorite-+!!r.isFavorite).map(r=>{const o=P.equipment.quality[r.quality],l=r.id===e.state.weaponId||r.id===e.state.armorId;return`<div class="bag-cell ${r.id===this.selectedId?"active":""}" data-id="${r.id}"
                         style="border-color:${o.color};background:rgba(30,34,42,0.9)">
              <div class="cell-icon" style="border-color:${o.color}">${r.slot==="weapon"?"🗡️":"🛡️"}</div>
              <div class="cell-name" style="color:${o.color}">${r.name}</div>
              <div class="cell-sub dim">Lv.${r.level}${l?" 已穿戴":""}</div>
            </div>`}).join("");let s='<div class="dim">选择一件装备进行锻造</div>';if(n){const r=P.equipment.quality[n.quality],o=jh[n.quality]<jh.epic,l=20+n.level*10,c=40+n.level*30,h=o?P.equipment.quality[No(n.quality)].basePrice*3+n.level*15:0;s=`
        <div class="eq-detail">
          <div class="eq-title" style="color:${r.color}">${n.slot==="weapon"?"🗡️":"🛡️"} ${n.name}</div>
          <div class="dim">品质：${r.name} · Lv.${n.level}${n.id===e.state.weaponId||n.id===e.state.armorId?" · 已穿戴":""}</div>
          <div class="eq-stats">
            <div>⚔️ 攻击力 <b>${n.attack}</b></div>
            <div>🛡️ 防御力 <b>${n.defense}</b></div>
          </div>
          ${n.affixes.length>0?`<div class="affix-list">${n.affixes.map(f=>`<div class="affix-row">✦ ${f.name} ${f.value}${f.isPercent?"%":""}</div>`).join("")}</div>`:""}
          <div class="eq-actions bs-actions">
            <button data-forge="reforge" ${e.state.gold<l?"disabled":""}>🔨 重铸词条<br/><span class="dim">${l} 💰</span></button>
            <button data-forge="level" ${n.level>=50||e.state.gold<c?"disabled":""}>⚡ 锤炼升级<br/><span class="dim">${n.level>=50?"已满级":c+" 💰"}</span></button>
            <button data-forge="quality" ${!o||e.state.gold<h?"disabled":""}>🔥 淬火提品质<br/><span class="dim">${o?`${No(n.quality)==="epic"?"→ 史诗 ":"→ "+P.equipment.quality[No(n.quality)].name+" "}${h} 💰`:"史诗以上不可淬火"}</span></button>
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
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll(".bag-cell").forEach(r=>{r.addEventListener("click",()=>{this.selectedId=r.dataset.id,this.render()})}),this.el.querySelectorAll("[data-forge]").forEach(r=>{r.addEventListener("click",()=>{n&&this.forge(n,r.dataset.forge)})})}forge(e,t){const n=ge.getInstance(),i=Gn.getInstance();let s=0,r=null,o="";if(t==="reforge")s=20+e.level*10,r=i.reforge(e),o="词条已重铸";else if(t==="level")s=40+e.level*30,r=i.upgradeLevel(e),o=`锤炼至 Lv.${e.level+1}`;else if(t==="quality"){const l=P.equipment.qualityOrder,c=l[l.indexOf(e.quality)+1];s=P.equipment.quality[c].basePrice*3+e.level*15,r=i.upgradeQuality(e),o=`淬火至「${P.equipment.quality[c].name}」`}if(!r){q.emit("notification",{message:"这件装备已到服务上限",type:"warning",icon:"⚒️"});return}if(!n.spendGold(s)){q.emit("notification",{message:"金币不足",type:"warning",icon:"💰"});return}Object.assign(e,r),q.emit("equipmentEquipped",{slot:e.slot,equipmentId:e.id,oldId:e.id}),q.emit("notification",{message:`⚒️ ${o}！`,type:"success",icon:"⚒️"}),this.render()}close(){this.el.classList.add("hidden"),De.popModal()}}function No(a){const e=P.equipment.qualityOrder;return e[Math.min(e.length-1,e.indexOf(a)+1)]}class Zy{constructor(e){w(this,"el");w(this,"triggeredRooms",new Set);this.el=document.createElement("div"),this.el.className="overlay-panel hidden event-panel",e.appendChild(this.el),q.on("roomEntered",t=>this.maybeTrigger(t.roomId,t.roomType)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}maybeTrigger(e,t){if(De.modalOpen)return;const n=`${ge.getInstance().state.currentFloor}:${e}`;if(this.triggeredRooms.has(n))return;this.triggeredRooms.add(n);const i=ge.getInstance().state.currentFloor,o=P.events.events.filter(l=>i>=l.minFloor&&l.roomTypes.includes(t)&&fe.chance(l.chance))[0];o&&this.show(o)}show(e){De.pushModal(),this.el.classList.remove("hidden");const t=ge.getInstance().state.currentFloor;this.el.innerHTML=`
      <div class="op-box">
        <div class="op-head"><span>${e.icon} ${e.name}</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="event-desc">${e.description}</div>
          ${e.options.map((n,i)=>`<button class="event-option" data-opt="${i}">${n.text}</button>`).join("")}
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-opt]").forEach(n=>{n.addEventListener("click",()=>{const i=e.options[parseInt(n.dataset.opt,10)];this.applyEffects(i.effects,t),this.close()})})}applyEffects(e,t){const n=ge.getInstance(),i=[];for(const s of e){const r=s.perFloor?s.value+s.perFloor*t:s.value;switch(s.type){case"gold":n.gainGold(Math.round(r)),i.push(`获得 ${Math.round(r)} 金币`);break;case"exp":n.gainExp(Math.round(r)),i.push(`获得 ${Math.round(r)} 经验`);break;case"healPct":{const o=n.heal(Math.round(n.maxHp*r/100));i.push(`回复 ${o} 生命`);break}case"damagePct":{const o=Math.round(n.maxHp*r/100);n.damage(o),i.push(`损失 ${o} 生命`);break}}}i.length>0&&(cn.getInstance().floatText(n.state.x,n.state.y,i.join("，"),"#ffdd66"),q.emit("notification",{message:`${i.join("，")}`,type:"info",icon:"✨"}))}close(){this.el.classList.add("hidden"),De.popModal()}}const Jy=[{id:1,name:"摇篮曲",desc:"轻松体验"},{id:2,name:"普通",desc:"标准平衡"},{id:3,name:"困难",desc:"挑战加大"},{id:4,name:"噩梦",desc:"高强度"},{id:5,name:"地狱",desc:"极限数值"},{id:6,name:"炼狱",desc:"几乎无解"},{id:7,name:"天堂",desc:"终极挑战"}];class Qy{constructor(e){w(this,"el");w(this,"worldGenEl",null);this.el=e,this.show()}show(){const e=en.getInstance().hasSave();this.el.classList.remove("hidden"),this.el.innerHTML=`
      <div class="title-box">
        <h1>${P.texts.titles?.gameTitle??"无尽之塔"}</h1>
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
    `,this.el.querySelector("#title-new").addEventListener("click",()=>this.showSetup()),this.el.querySelector("#title-continue").addEventListener("click",()=>this.start(!0)),this.el.querySelector("#title-exit").addEventListener("click",()=>{window.motaDesktop?window.motaDesktop.quit():(window.close(),window.setTimeout(()=>{const t=this.el.querySelector("#title-exit");t&&(t.textContent="浏览器请用 Ctrl+W / Alt+F4 关闭")},300))})}showSetup(){const e=De.difficulty;this.el.innerHTML=`
      <div class="title-box">
        <h1 class="setup-title">新的冒险</h1>
        <div class="title-sub">选择难度</div>
        <div class="diff-grid">
          ${Jy.map(t=>`
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
    `;for(const t of Array.from(this.el.querySelectorAll(".diff-card")))t.addEventListener("click",()=>{this.el.querySelectorAll(".diff-card").forEach(n=>n.classList.remove("sel")),t.classList.add("sel"),De.setDifficulty(Number(t.dataset.d))});this.el.querySelector("#setup-start").addEventListener("click",()=>this.start(!1)),this.el.querySelector("#setup-back").addEventListener("click",()=>this.show())}async start(e){this.showWorldGen();const t=On.getInstance();t.clearPregen();try{if(e){if(!en.getInstance().load()){this.hideWorldGen();return}const n=ge.getInstance().state.currentFloor;for(let i=1;i<=xa;i++)t.pregenerateOne(n+i),await this.genStep(i,xa)}else{const n=xa+1;for(let i=0;i<n;i++)t.pregenerateOne(1+i),await this.genStep(i+1,n);t.enterFloor(1,!1)}}finally{this.hideWorldGen()}this.enterGame()}showWorldGen(){const e=document.createElement("div");e.className="worldgen-overlay",e.innerHTML=`
      <div class="worldgen-stars"></div>
      <div class="worldgen-box">
        <div class="worldgen-icon">🏰</div>
        <div class="worldgen-title">正在构筑无尽之塔</div>
        <div class="worldgen-bar"><div class="worldgen-fill"></div></div>
        <div class="worldgen-status dim">预备楼层…</div>
        <div class="worldgen-tip dim">提前构筑后续楼层，让冒险不再等待</div>
      </div>
    `,document.body.appendChild(e),this.worldGenEl=e}async genStep(e,t){const n=this.worldGenEl;if(n){const i=Math.round(e/t*100);n.querySelector(".worldgen-fill").style.width=`${i}%`,n.querySelector(".worldgen-status").textContent=`已构筑 ${e} / ${t} 层`}await new Promise(i=>requestAnimationFrame(()=>i()))}hideWorldGen(){this.worldGenEl?.remove(),this.worldGenEl=null}enterGame(){un.getInstance().snapToPlayer(),zn.getInstance(),this.el.classList.add("hidden"),Ir.getInstance().showGame(),De.started=!0,q.emit("gameStarted",{}),q.emit("notification",{message:P.texts.guidance?.tutorialWelcome??"欢迎来到无尽之塔",type:"info",icon:"🏰"})}}const jy={start:{icon:"↑",color:"#e8eaf0"},combat:{icon:"☠",color:"#ff9999"},elite:{icon:"!",color:"#ff3344"},merchant:{icon:"$",color:"#55dd77"},blacksmith:{icon:"⚒️",color:"#ffb060"},witch:{icon:"🧪",color:"#c78cff"},chest:{icon:"💰",color:"#ffdd44"},boss:{icon:"💀",color:"#ff5555"},end:{icon:"↓",color:"#aaddff"},rest:{icon:"♨",color:"#ffaa66"}};class eM{constructor(e){w(this,"container");w(this,"canvas");this.container=document.createElement("div"),this.container.id="minimap",this.canvas=document.createElement("canvas"),this.canvas.className="minimap-canvas",this.container.appendChild(this.canvas),e.appendChild(this.container),q.on("roomEntered",()=>this.refresh()),q.on("floorChanged",()=>this.refresh()),q.on("saveLoaded",()=>this.refresh()),q.on("gameRestarted",()=>this.refresh())}refresh(){const e=Be.getInstance().currentFloor,t=this.canvas.getContext("2d");if(!e||e.rooms.length===0){this.container.classList.add("hidden");return}this.container.classList.remove("hidden");const n=Math.min(...e.rooms.map(g=>g.gx)),i=Math.max(...e.rooms.map(g=>g.gx)),s=Math.min(...e.rooms.map(g=>g.gy)),r=Math.max(...e.rooms.map(g=>g.gy)),o=i-n+1,l=r-s+1,c=Math.max(12,Math.min(24,Math.floor(260/Math.max(o,l)))),h=10,f=o*c+h*2,d=l*c+h*2,u=window.devicePixelRatio||1;this.canvas.width=f*u,this.canvas.height=d*u,this.canvas.style.width=`${f}px`,this.canvas.style.height=`${d}px`,t.setTransform(u,0,0,u,0,0),t.clearRect(0,0,f,d);const p=g=>({x:h+(g.gx-n)*c,y:h+(g.gy-s)*c});t.strokeStyle="#6a7590",t.lineWidth=2,t.beginPath();for(const g of e.connections){const _=e.rooms.find(T=>T.id===g.from),S=e.rooms.find(T=>T.id===g.to);if(!_||!S)continue;const y=p(_),E=p(S);t.moveTo(y.x+c/2,y.y+c/2),t.lineTo(E.x+c/2,E.y+c/2)}t.stroke();const v=ge.getInstance().state.currentRoomId;for(const g of e.rooms){const _=p(g);t.fillStyle=g.id===v?"#5a6070":"#444a58",t.fillRect(_.x,_.y,c,c);const{icon:S,color:y}=jy[g.type];t.fillStyle=y,t.font=`${Math.floor(c*.62)}px "Microsoft YaHei", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(S,_.x+c/2,_.y+c/2+1)}const m=e.rooms.find(g=>g.id===v);if(m){const g=p(m);t.strokeStyle="#ffdd44",t.lineWidth=2,t.strokeRect(g.x-2.5,g.y-2.5,c+5,c+5)}}}const ed=new Map;function tM(a){const e=ed.get(a.id);if(e)return e;const t=512,n=288,i=document.createElement("canvas");i.width=t,i.height=n;const s=i.getContext("2d"),r=a.titleCard.bg;if(r==="brick"){s.fillStyle="#2b3a4a",s.fillRect(0,0,t,n);for(let c=0;c<n/18;c++)for(let h=-1;h<t/40+1;h++){const f=h*40+c%2*20,d=c*18,u=.85+(c*7+h*13)%5*.06;s.fillStyle=`rgba(${Math.round(107*u)},${Math.round(123*u)},${Math.round(140*u)},0.55)`,s.fillRect(f+1,d+1,38,16)}}else if(r==="moss"){const c=s.createLinearGradient(0,0,0,n);c.addColorStop(0,"#1c2a1a"),c.addColorStop(1,"#33200f"),s.fillStyle=c,s.fillRect(0,0,t,n),s.strokeStyle="rgba(125,181,106,0.5)";for(let h=0;h<6;h++){const f=30+h*82;s.lineWidth=2.5,s.beginPath(),s.moveTo(f,-4),s.bezierCurveTo(f-22,n*.4,f+26,n*.7,f-8,n+6),s.stroke()}for(let h=0;h<24;h++)s.fillStyle=h%3===0?"rgba(255,176,96,0.75)":"rgba(154,217,122,0.7)",s.fillRect((h*61+13)%t,(h*47+7)%n,2.2,2.2)}else if(r==="book"){const c=s.createRadialGradient(t/2,n*.62,10,t/2,n*.62,n);c.addColorStop(0,"#5c4630"),c.addColorStop(1,"#241a10"),s.fillStyle=c,s.fillRect(0,0,t,n),s.fillStyle="rgba(232,220,192,0.85)",s.beginPath(),s.moveTo(t/2,n*.78),s.bezierCurveTo(t*.32,n*.66,t*.22,n*.72,t*.14,n*.7),s.lineTo(t*.14,n*.52),s.bezierCurveTo(t*.24,n*.5,t*.36,n*.56,t/2,n*.62),s.bezierCurveTo(t*.64,n*.56,t*.76,n*.5,t*.86,n*.52),s.lineTo(t*.86,n*.7),s.bezierCurveTo(t*.78,n*.72,t*.68,n*.66,t/2,n*.78),s.closePath(),s.fill(),s.strokeStyle="rgba(122,90,58,0.9)",s.lineWidth=3,s.beginPath(),s.moveTo(t/2,n*.62),s.lineTo(t/2,n*.78),s.stroke()}else if(r==="stars"){const c=s.createLinearGradient(0,0,0,n);c.addColorStop(0,"#2e4a7a"),c.addColorStop(1,"#5a3a7a"),s.fillStyle=c,s.fillRect(0,0,t,n);for(let h=0;h<90;h++){const f=h%11===0;s.fillStyle=f?"#ffffff":"rgba(230,238,255,0.8)";const d=(h*97+31)%t,u=(h*53+17)%n;s.fillRect(d,u,f?2.4:1.4,f?2.4:1.4),f&&(s.fillStyle="rgba(255,255,255,0.4)",s.fillRect(d-3,u+.6,8,.8),s.fillRect(d+.6,u-3,.8,8))}}else if(r==="gears"){const c=s.createLinearGradient(0,0,0,n);c.addColorStop(0,"#8d99a8"),c.addColorStop(1,"#dfe6ec"),s.fillStyle=c,s.fillRect(0,0,t,n);const h=(f,d,u,p)=>{s.fillStyle="rgba(55,48,31,0.88)",s.beginPath(),s.arc(f,d,u,0,Math.PI*2),s.fill();for(let v=0;v<p;v++){const m=Math.PI*2*v/p;s.save(),s.translate(f+Math.cos(m)*u,d+Math.sin(m)*u),s.rotate(m),s.fillRect(-u*.1,-u*.1,u*.22,u*.2),s.restore()}s.fillStyle="#9aa6b4",s.beginPath(),s.arc(f,d,u*.34,0,Math.PI*2),s.fill()};h(t*.3,n*.36,52,12),h(t*.68,n*.6,36,10)}else{const c=s.createRadialGradient(t/2,n/2,10,t/2,n/2,n*.8);c.addColorStop(0,"rgba(248,242,225,0.9)"),c.addColorStop(1,"rgba(196,189,166,0)"),s.fillStyle=c,s.fillRect(0,0,t,n)}const o=s.createRadialGradient(t/2,n/2,n*.3,t/2,n/2,n*.95);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.66)"),s.fillStyle=o,s.fillRect(0,0,t,n);const l=i.toDataURL("image/png");return ed.set(a.id,l),l}class nM{constructor(e){w(this,"el");w(this,"bgEl");w(this,"subEl");w(this,"bigEl");w(this,"vibeEl");w(this,"tipEl");w(this,"whisperEl");w(this,"timers",[]);w(this,"pendingTier",null);const t=document.createElement("div");t.id="tier-title",t.className="hidden",t.innerHTML=`
      <div class="tt-bg"></div>
      <div class="tt-body">
        <div class="tt-sub"></div>
        <div class="tt-big"></div>
        <div class="tt-vibe"></div>
      </div>`,e.appendChild(t),this.el=t,this.bgEl=t.querySelector(".tt-bg"),this.subEl=t.querySelector(".tt-sub"),this.bigEl=t.querySelector(".tt-big"),this.vibeEl=t.querySelector(".tt-vibe");const n=document.createElement("div");n.id="floor-tip",n.className="hidden",n.innerHTML='<div class="ft-section"></div><div class="ft-floor"></div>',e.appendChild(n),this.tipEl=n;const i=document.createElement("div");i.id="whisper",i.className="hidden",e.appendChild(i),this.whisperEl=i,q.on("floorChanged",s=>this.onFloorChanged(s.toFloor)),q.on("gameStarted",()=>{const s=ge.getInstance().state.currentFloor;if(this.pendingTier&&s===this.pendingTier.fromFloor){const r=this.pendingTier;this.pendingTier=null,this.showCard(r),this.showTip(r,s,!0)}})}onFloorChanged(e){const t=Go(e);if(this.applyTierVars(t),!De.started){e===1&&(this.pendingTier=t);return}this.showTip(t,e,Ho(e)),Ho(e)&&this.showCard(t)}applyTierVars(e){const t=document.getElementById("game-root");t&&(t.style.setProperty("--accent",e.uiAccent),t.style.setProperty("--accent-cool",e.uiAccentCool))}showCard(e){this.clearTimers();const t=e.titleCard;this.el.style.setProperty("--tt-main",t.main),this.el.style.setProperty("--tt-sub2",t.sub),this.el.style.setProperty("--tt-glow",t.glow),this.bgEl.style.backgroundImage=`url(${tM(e)})`,this.bgEl.className="tt-bg",t.bg==="stars"&&this.bgEl.classList.add("tt-rotate-slow"),t.bg==="gears"&&this.bgEl.classList.add("tt-rotate-slower"),this.subEl.textContent=e.fullName,this.bigEl.textContent=t.big,this.bigEl.className=`tt-big ${t.fontClass}`,this.bigEl.style.letterSpacing=t.letterSpacing!=null?`${t.letterSpacing}em`:"",this.vibeEl.textContent=t.vibe,this.el.classList.remove("hidden","tt-out"),this.el.classList.add("tt-in");const n=e.fromFloor===1?5200:3800;this.timers.push(window.setTimeout(()=>{this.el.classList.remove("tt-in"),this.el.classList.add("tt-out"),this.timers.push(window.setTimeout(()=>this.el.classList.add("hidden"),950))},n)),e.whisper&&this.timers.push(window.setTimeout(()=>this.showWhisper(e.whisper),n-500))}showTip(e,t,n){const i=this.tipEl.querySelector(".ft-section"),s=this.tipEl.querySelector(".ft-floor");i.textContent=n?`进入【${e.name}】`:"",i.classList.toggle("hidden",!n),s.textContent=`第 ${t} 层`,s.style.setProperty("--ft-color",e.uiAccent),this.tipEl.classList.remove("hidden"),this.tipEl.classList.remove("ft-out"),this.timers.push(window.setTimeout(()=>{this.tipEl.classList.add("ft-out"),this.timers.push(window.setTimeout(()=>this.tipEl.classList.add("hidden"),420))},n?2400:1500))}showWhisper(e){this.whisperEl.textContent=e,this.whisperEl.classList.remove("hidden","wh-out"),this.whisperEl.classList.add("wh-in"),this.timers.push(window.setTimeout(()=>{this.whisperEl.classList.remove("wh-in"),this.whisperEl.classList.add("wh-out"),this.timers.push(window.setTimeout(()=>this.whisperEl.classList.add("hidden"),1200))},4200))}clearTimers(){for(const e of this.timers)window.clearTimeout(e);this.timers=[]}}function td(a,e){return{id:$t.equipmentId(),slot:a,baseName:e,name:`[调试] ${e}`,level:110,quality:"mythic",affixes:[{type:"precision",name:"精准",value:100,isPercent:!0},{type:"agility",name:"灵巧",value:100,isPercent:!0},{type:"lifesteal",name:"嗜血",value:100,isPercent:!0},{type:"dragonslayer",name:"屠龙",value:999999,isPercent:!0}],attack:999999,defense:999999,sellPrice:1,buyPrice:0,source:"tutorial"}}const fs=class fs{constructor(){w(this,"el",null);w(this,"floorInput",null);w(this,"teleportCheck",null)}static getInstance(){return fs.instance||(fs.instance=new fs),fs.instance}init(e){if(this.el)return;const t=document.createElement("div");t.id="debug-console",t.className="hidden",t.innerHTML=`
      <div class="dc-head">调试控制台 <span class="dim">~ 开关</span></div>
      <div class="dc-row">
        <span class="dc-label">楼层</span>
        <input id="dc-floor" type="number" min="1" max="${xs}" value="1" />
        <button id="dc-goto">前往</button>
      </div>
      <div class="dc-row">
        <button id="dc-equip">⚔️ 调试装备 ×999999</button>
      </div>
      <label class="dc-row">
        <input type="checkbox" id="dc-teleport" />
        <span>点击传送（无视寻路）</span>
      </label>`,e.appendChild(t),this.el=t,this.floorInput=t.querySelector("#dc-floor"),this.teleportCheck=t.querySelector("#dc-teleport"),t.querySelector("#dc-goto").addEventListener("click",()=>this.gotoFloor()),this.floorInput.addEventListener("keydown",n=>{n.key==="Enter"&&this.gotoFloor(),n.stopPropagation()}),t.querySelector("#dc-equip").addEventListener("click",()=>this.giveDebugGear()),this.teleportCheck.addEventListener("change",()=>{zn.getInstance().teleportMode=this.teleportCheck.checked,q.emit("notification",{message:this.teleportCheck.checked?"点击传送：已开启（点击地板即瞬移）":"点击传送：已关闭",type:"info",icon:"🧪"})}),window.addEventListener("keydown",n=>{n.key!=="`"&&n.key!=="~"||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||(n.preventDefault(),this.toggle())})}toggle(){this.el?.classList.toggle("hidden")}gotoFloor(){const e=parseInt(this.floorInput?.value??"1",10);if(!Number.isFinite(e))return;const t=Math.max(1,Math.min(xs,e));On.getInstance().enterFloor(t),un.getInstance().snapToPlayer(),q.emit("notification",{message:`已传送到第 ${t} 层`,type:"info",icon:"🧪"})}giveDebugGear(){const e=ge.getInstance(),t=td("weapon","万物斩"),n=td("armor","不朽甲");e.addEquipment(t),e.addEquipment(n),e.equip(t.id),e.equip(n.id),q.emit("notification",{message:"已装备 [调试] 万物斩 / 不朽甲（攻防 999999）",type:"success",icon:"⚔️"})}};w(fs,"instance");let Xl=fs;const ps=class ps{constructor(){w(this,"leftHpFill");w(this,"leftHpText");w(this,"leftExpFill");w(this,"leftStats");w(this,"leftEquips");w(this,"roomInfoEl");w(this,"questTrackEl");w(this,"bottomPotions");w(this,"bossWarningEl");w(this,"panels");w(this,"tooltip");w(this,"miniMap");w(this,"titleScreen",null);w(this,"hotbarBound",!1)}static getInstance(){return ps.instance||(ps.instance=new ps),ps.instance}build(){const e=document.getElementById("app");e.innerHTML=`
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
    `,_s.getInstance().init(document.getElementById("game-container")),this.tooltip=new Oy(document.getElementById("tooltip")),ql.init(document.getElementById("notifications")),this.panels=new By(document.getElementById("overlay-layer")),new Yy(document.getElementById("overlay-layer")),new $y(document.getElementById("overlay-layer")),new Ky(document.getElementById("overlay-layer")),new Zy(document.getElementById("overlay-layer")),new Oa(document.getElementById("overlay-layer")),ka.getInstance().init(document.getElementById("overlay-layer")),new nM(document.getElementById("center-area")),Xl.getInstance().init(document.getElementById("center-area")),this.titleScreen=new Qy(document.getElementById("title-screen")),this.leftHpFill=document.getElementById("hp-fill"),this.leftHpText=document.getElementById("hp-text"),this.leftExpFill=document.getElementById("exp-fill"),this.leftStats=document.getElementById("left-stats"),this.leftEquips=document.getElementById("left-equips"),this.roomInfoEl=document.getElementById("room-info"),this.questTrackEl=document.getElementById("quest-track"),this.bottomPotions=document.getElementById("quick-potions"),this.bossWarningEl=document.getElementById("boss-warning"),this.bottomPotions.innerHTML=[0,1,2,3,4].map(t=>`<div class="hotbar-slot" data-slot="${t}" title="快捷栏 ${t+1}：从背包拖入药水绑定；点击使用；右键解绑">
        <span class="key-num">${t+1}</span>
        <span class="slot-content"></span>
      </div>`).join(""),this.bindHotbarEvents(),document.querySelectorAll("#func-buttons button[data-panel]").forEach(t=>{t.addEventListener("click",()=>{q.emit("panelToggled",{panel:t.dataset.panel,open:!0})})}),document.getElementById("btn-save").addEventListener("click",()=>{en.getInstance().save("manual")}),this.miniMap=new eM(document.getElementById("center-area")),this.bindEvents(),this.refreshAll(),this.miniMap.refresh()}bindEvents(){const e=()=>this.refreshAll();for(const t of["hpChanged","goldChanged","expChanged","levelUp","potionUsed","potionPurchased","equipmentEquipped","equipmentGenerated","equipmentSold","keyPurchased","saveLoaded","gameRestarted","playerRevived"])q.on(t,e);q.on("roomEntered",t=>{this.roomInfoEl.textContent=`${t.name} · 深度${t.depth}`,this.refreshRight()}),q.on("floorChanged",t=>{this.refreshRight(),this.roomInfoEl.textContent=`第 ${t.toFloor} 层`}),q.on("questUpdated",()=>this.refreshRight()),q.on("questCompleted",()=>this.refreshRight()),q.on("bossWarning",t=>this.showBossWarning(t.floor,t.name)),q.on("playerDied",()=>this.showDeathNotice()),q.on("returnToTitle",()=>this.returnToTitle()),q.on("panelToggled",t=>{t.open&&this.panels.open(t.panel)}),window.addEventListener("keydown",t=>{if(t.key!=="Escape"||!De.started)return;!document.querySelector(".overlay-panel:not(.hidden)")&&!De.modalOpen?this.panels.open("settings"):this.panels.handleEscape()})}updateHover(){const e=or.getInstance().hover;this.tooltip.update(e)}refreshAll(){const e=ge.getInstance(),t=e.stats(),n=Math.max(0,Math.min(100,e.state.hp/t.maxHp*100));this.leftHpFill.style.width=`${n}%`,this.leftHpText.textContent=`❤️ ${Math.ceil(e.state.hp)} / ${t.maxHp}`;const i=tn.getInstance().expToNext(e.state.level);this.leftExpFill.style.width=`${Math.min(100,e.state.exp/i*100)}%`,this.leftStats.innerHTML=`
      <div>Lv.${e.state.level} <span id="exp-text" class="dim">(${e.state.exp}/${i} 经验)</span></div>
      <div>⚔️ 攻击 ${t.attack} <span class="dim">(基础${e.state.baseAttack})</span></div>
      <div>🛡️ 防御 ${t.defense} <span class="dim">(基础${e.state.baseDefense})</span></div>
      <div>🎯 暴击 ${t.critRate.toFixed(0)}%　💨 闪避 ${t.dodgeRate.toFixed(0)}%</div>
      ${t.lifesteal>0?`<div>🩸 嗜血 ${t.lifesteal}%</div>`:""}
      ${t.fireDamage>0?`<div>🔥 业火 +${t.fireDamage}</div>`:""}
      ${t.bossDamage>0?`<div>🐉 屠龙 +${t.bossDamage}%</div>`:""}
      <div>💰 金币 ${e.state.gold}　🗝️ 钥匙 ${e.state.keys}</div>
    `;const s=(r,o)=>{if(!o)return`<div class="equip-item dim">${r}：未装备</div>`;const l=P.equipment.quality[o.quality];return`<div class="equip-item">${r}：<span style="color:${l?.color??"#fff"}">${o.name}</span></div>`};this.leftEquips.innerHTML=s("🗡️",e.weapon)+s("🛡️",e.armor),this.refreshHotbar(),this.refreshRight()}bindHotbarEvents(){if(this.hotbarBound)return;this.hotbarBound=!0;const e=ge.getInstance();this.bottomPotions.querySelectorAll(".hotbar-slot").forEach(t=>{const n=parseInt(t.dataset.slot,10);t.addEventListener("dragover",i=>{i.preventDefault(),t.classList.add("drag-over")}),t.addEventListener("dragleave",()=>t.classList.remove("drag-over")),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("drag-over");const s=i.dataTransfer?.getData("potion-tier");s&&(e.setHotbarSlot(n,s),this.refreshHotbar())}),t.addEventListener("click",()=>{const i=e.state.hotbar[n];i&&e.getPotionCount(i)>0&&e.usePotion(i)}),t.addEventListener("contextmenu",i=>{i.preventDefault(),e.state.hotbar[n]&&(e.setHotbarSlot(n,null),this.refreshHotbar())})})}refreshHotbar(){const e=ge.getInstance();this.bottomPotions.querySelectorAll(".hotbar-slot").forEach(t=>{const n=parseInt(t.dataset.slot,10),i=e.state.hotbar[n],s=t.querySelector(".slot-content");if(i){const r=P.getPotion(i),o=e.getPotionCount(i);t.classList.toggle("empty",o===0),s.innerHTML=`${P.potionIconImg(i,"potion-icon hotbar-icon")}<span class="count">${o}</span>`,t.title=`${r.name}：回复${Math.round(r.healPct*100)}%生命（按此键使用；右键解绑）`}else t.classList.add("empty"),s.innerHTML=""})}refreshRight(){ge.getInstance();const t=Be.getInstance().currentFloor,n=document.getElementById("floor-info");if(t){const s=t.kind==="initial"?"初始层":t.kind==="boss"?"Boss层":t.kind==="summit"?"塔顶":"";n.innerHTML=`<div class="floor-big">第 ${t.floorId} 层</div><div class="dim">${s} · ${t.rooms.length}个房间</div>`}const i=Ti.getInstance().trackedQuest;if(!i)this.questTrackEl.innerHTML='<div class="dim">暂无进行中的任务</div>';else{const s=i.quest.objectives[0];this.questTrackEl.innerHTML=`
        <div class="quest-name">📌 ${i.quest.name}</div>
        <div class="quest-desc">${i.quest.description}</div>
        <div class="quest-progress">${Math.min(i.def.progress,s.quantity)} / ${s.quantity}</div>
        <div class="quest-guide dim">💡 ${i.quest.guidance}</div>
      `}}showBossWarning(e,t){this.bossWarningEl.innerHTML=`<div class="boss-warning-text">⚠️ 警告：${t} 盘踞于此（第${e}层Boss）</div>`,this.bossWarningEl.classList.remove("hidden"),this.bossWarningEl.classList.add("flash"),window.setTimeout(()=>{this.bossWarningEl.classList.add("hidden"),this.bossWarningEl.classList.remove("flash")},2600)}showDeathNotice(){ql.show("你倒下了……在楼层起点复活（金币-20%）","warning","💀")}showGame(){document.getElementById("title-screen").classList.add("hidden"),document.getElementById("game-root").classList.remove("hidden"),this.refreshAll()}returnToTitle(){en.getInstance().save("manual"),De.started=!1,Be.getInstance().reset(),document.getElementById("game-root").classList.add("hidden"),document.getElementById("title-screen").classList.remove("hidden"),this.titleScreen?.show()}};w(ps,"instance");let Ir=ps;const ms=class ms{constructor(){w(this,"running",!1);w(this,"lastTime",0);w(this,"lastProcessedTime",0);w(this,"lastRenderTime",0);w(this,"watchdog",null)}static getInstance(){return ms.instance||(ms.instance=new ms),ms.instance}start(){this.running||(this.running=!0,this.lastTime=performance.now(),requestAnimationFrame(e=>this.frame(e)),this.watchdog=window.setInterval(()=>{this.running&&performance.now()-this.lastTime>120&&this.frame(performance.now())},50))}stop(){this.running=!1,this.watchdog!==null&&(window.clearInterval(this.watchdog),this.watchdog=null)}frame(e){if(!this.running||e<=this.lastProcessedTime)return;this.lastProcessedTime=e;const t=De.settings.fpsCap;if(t>0&&e-this.lastRenderTime<1e3/t-1.5){requestAnimationFrame(i=>this.frame(i));return}this.lastRenderTime=e;const n=Math.min(50,e-this.lastTime);this.lastTime=e,un.getInstance().update(n),or.getInstance().update(n),zn.getInstance().update(n),cn.getInstance().update(n),Rr.getInstance().update(n),_s.getInstance().render(e),Ir.getInstance().updateHover(),requestAnimationFrame(i=>this.frame(i))}};w(ms,"instance");let Ba=ms;const Nd=[{d:"north",dx:0,dy:-1},{d:"south",dx:0,dy:1},{d:"west",dx:-1,dy:0},{d:"east",dx:1,dy:0}];function iM(a,e){const t=a.length,n=Math.max(...a.map(o=>o.length)),i=Array.from({length:t},()=>Array(n).fill(1)),s=[],r=P.monsters.monsters.filter(o=>o.category==="normal"&&e>=o.floorMin&&e<=o.floorMax);for(let o=0;o<t;o++)for(let l=0;l<n;l++){const c=a[o][l]??"1";switch(c){case"0":case" ":i[o][l]=0;break;case"1":i[o][l]=1;break;case"2":case"3":{if(i[o][l]=0,r.length===0)break;const h=fe.pickWeighted(r,f=>f.weight);s.push({id:$t.next("ent"),kind:"monster",x:l,y:o,monsterId:h.id,isElite:c==="3"});break}case"4":i[o][l]=0,s.push({id:$t.next("ent"),kind:"chest",x:l,y:o,chestTier:"normal"});break;case"5":i[o][l]=0,s.push({id:$t.next("ent"),kind:"npc",x:l,y:o,npcId:"npc_merchant"});break;case"B":i[o][l]=0,s.push({id:$t.next("ent"),kind:"boss",x:l,y:o,monsterId:"ancient_dragon"});break;case"D":i[o][l]=0,s.push({id:$t.next("ent"),kind:"stair",x:l,y:o,targetFloor:e+1});break;case"S":i[o][l]=0;break;default:Pt.warn(`[Prefab] 楼层${e} (${l},${o}) 非法字符 '${c}'，按墙壁处理`),i[o][l]=1;break}}return{grid:i,entities:s}}function sM(a,e,t,n){const i=(s,r)=>a.reduce((o,l,c)=>o||(s>=l.x&&s<l.x+l.w&&r>=l.y&&r<l.y+l.h?{id:`pf${e}_r${c}`}:null),null);return a.map((s,r)=>{const o=`pf${e}_r${r}`,l=(h,f)=>h>=s.x&&h<s.x+s.w&&f>=s.y&&f<s.y+s.h,c=[];for(let h=s.y;h<s.y+s.h;h++)for(let f=s.x;f<s.x+s.w;f++)if(!(!(f===s.x||f===s.x+s.w-1||h===s.y||h===s.y+s.h-1)||n[h]?.[f]!==0))for(const{d:u,dx:p,dy:v}of Nd){const m=f+p,g=h+v;l(m,g)||n[g]?.[m]===0&&c.push({x:f,y:h,direction:u,toRoomId:i(m,g)?.id??""})}return{id:o,floorId:e,type:s.type,order:r,gx:s.x,gy:s.y,width:s.w,height:s.h,x:s.x,y:s.y,centerX:s.x+Math.floor(s.w/2),centerY:s.y+Math.floor(s.h/2),fromDirection:null,depth:0,onPathA:!1,onPathB:!1,mountedOn:null,doors:c,entities:t.filter(h=>h.x>=s.x&&h.x<s.x+s.w&&h.y>=s.y&&h.y<s.y+s.h)}})}function rM(a,e,t){const n=new Set;if(a[t]?.[e]!==0)return n;const i=[{x:e,y:t}];for(n.add(`${e},${t}`);i.length>0;){const s=i.shift();for(const{dx:r,dy:o}of Nd){const l=s.x+r,c=s.y+o,h=`${l},${c}`;n.has(h)||a[c]?.[l]===0&&(n.add(h),i.push({x:l,y:c}))}}return n}function aM(a){const{grid:e,entities:t}=iM(a.rows,a.floorId),n=e[0]?.length??0,i=e.length;let s=a.entry??null;if(!s)for(let h=0;h<i&&!s;h++)for(let f=0;f<n&&!s;f++)(a.rows[h]?.[f]??"1")==="S"&&(s={x:f,y:h});const r=sM(a.rooms,a.floorId,t,e);if(r.length===0)throw new Error(`[Prefab] 楼层${a.floorId} 未定义任何房间`);const o=[s,r[0]?{x:r[0].centerX,y:r[0].centerY}:null].find(h=>!!h&&e[h.y]?.[h.x]===0);if(!o)throw new Error(`[Prefab] 楼层${a.floorId} 入口无效（必须是空地）`);for(const h of t){if(r.some(p=>h.x>=p.x&&h.x<p.x+p.width&&h.y>=p.y&&h.y<p.y+p.height))continue;let d=r[0],u=1/0;for(const p of r){const v=Math.abs(p.centerX-h.x)+Math.abs(p.centerY-h.y);v<u&&(u=v,d=p)}Pt.warn(`[Prefab] 楼层${a.floorId} 实体 ${h.id} (${h.x},${h.y}) 在所有房间外，挂到 ${d.id}`),d.entities.push(h)}const l=[],c=new Set;for(const h of r){const f=e[h.centerY]?.[h.centerX]===0?{x:h.centerX,y:h.centerY}:r.map(u=>({x:u.centerX,y:u.centerY})).find(u=>e[u.y]?.[u.x]===0);if(!f)continue;const d=rM(e,f.x,f.y);for(const u of r){if(u.id===h.id||e[u.centerY]?.[u.centerX]!==0||!d.has(`${u.centerX},${u.centerY}`))continue;const p=[h.id,u.id].sort().join("|");c.has(p)||(c.add(p),l.push({from:h.id,to:u.id}))}}return{floorId:a.floorId,kind:a.kind??"normal",rooms:r,corridors:[],connections:l,grid:e,width:n,height:i,entryX:o.x,entryY:o.y}}async function oM(){await Xx();try{await Qx()}catch(a){console.warn("[main] 主角图集加载失败，回退烘焙纹理",a)}try{await py()}catch(a){console.warn("[main] NPC 立绘加载失败，回退占位模型",a)}P.loadAll(),Ir.getInstance().build();try{const a=localStorage.getItem("motarpg_display");a&&window.motaDesktop&&window.motaDesktop.setDisplayMode(JSON.parse(a))}catch{}Ti.getInstance(),Ss.getInstance(),En.getInstance(),Ei.getInstance(),en.getInstance(),or.getInstance(),Ba.getInstance().start(),window.__motaDebug={get player(){return ge.getInstance()},get world(){return Be.getInstance()},get camera(){return un.getInstance()},gameLoop:Ba.getInstance(),gameController:zn.getInstance(),floorManager:On.getInstance(),mapGenerator:tr.getInstance(),battle:rr.getInstance(),chest:Pr.getInstance(),equipGen:Gn.getInstance(),quest:Ti.getInstance(),bestiary:Ss.getInstance(),merchant:vs.getInstance(),save:en.getInstance(),guidance:Ei.getInstance(),describeFloor(){return tr.getInstance().describe(Be.getInstance().currentFloor)},loadPrefab(a){On.getInstance().enterPrefabFloor(aM(a)),un.getInstance().snapToPlayer()}},Pt.info("无尽之塔 2.5D · 启动完成")}oM();
