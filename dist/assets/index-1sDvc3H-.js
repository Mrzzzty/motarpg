var Xh=Object.defineProperty;var Yh=(r,e,t)=>e in r?Xh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var O=(r,e,t)=>Yh(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Kh={maxHp:1e3,attack:30,defense:15,critRate:5,dodgeRate:3},Zh={base:20,power:1.5},Jh=[{minLevel:1,maxLevel:5,hp:125,attack:6,defense:3},{minLevel:6,maxLevel:10,hp:260,attack:10,defense:5},{minLevel:11,maxLevel:15,hp:250,attack:12,defense:6},{minLevel:16,maxLevel:20,hp:260,attack:14,defense:7},{minLevel:21,maxLevel:25,hp:100,attack:16,defense:8},{minLevel:26,maxLevel:30,hp:100,attack:18,defense:9},{minLevel:31,maxLevel:35,hp:230,attack:22,defense:11},{minLevel:36,maxLevel:40,hp:500,attack:26,defense:13},{minLevel:41,maxLevel:45,hp:1e3,attack:30,defense:15},{minLevel:46,maxLevel:50,hp:1e3,attack:34,defense:17},{minLevel:51,maxLevel:999,hp:1200,attack:38,defense:19}],Qh={floors:[1,5,10,15,20,25,30,35,40,45,50],hp:[165,310,485,685,900,1175,1500,1900,2400,3100,4150],atk:[40,75,120,200,280,340,420,520,680,950,1300],def:[7,14,21,30,40,52,66,84,106,136,183],exp:[15,40,100,180,280,400,550,720,900,1100,1350],gold:[20,20,45,90,90,160,160,275,275,425,425],overflowPerFloor:{hp:.08,atk:.05,def:.05,exp:.08,gold:.05}},jh={hp:0,atk:0,def:0},ed={damageJitter:.1,critMultiplier:1.8,maxTurns:60,minDamage:1},td={goldBands:[{minFloor:1,maxFloor:5,min:1,max:5},{minFloor:6,maxFloor:10,min:5,max:15},{minFloor:11,maxFloor:20,min:15,max:40},{minFloor:21,maxFloor:30,min:40,max:80},{minFloor:31,maxFloor:40,min:80,max:150},{minFloor:41,maxFloor:9999,min:150,max:250}],equipmentChance:.6,potionChance:.15,goldAlways:!0},nd={equipmentChance:.03,potionChance:.02},id={goldPenaltyRate:.2,hpRestorePct:1},sd={potionCountMin:2,potionCountMax:4,keyPriceBase:50,keyPricePer10Floors:30,keyCountMin:1,keyCountMax:3,equipmentCountMin:1,equipmentCountMax:2},rd={potionCountMin:2,potionCountMax:3,fountainCostBase:40,fountainCostPerFloor:12},ad={tileWidth:64,tileHeight:32,vignetteMax:.3,maxLights:20,maxParticles:1e3,gridLineWidth:1},od={bloom:{enabled:!0,strength:.5,radius:.45,threshold:.82},vignette:{enabled:!0,strength:.3,offset:1,darkness:1.1},adjustment:{enabled:!0,gamma:1.05,contrast:1.05,saturation:1.1,brightness:1}},ld={staticAlpha:.2,staticOffset:3,baseOffset:6,maxDynamic:20,samples:3,penumbra:6,tyndall:{length:150,width:30,alpha:.13,dustMin:5,dustMax:10}},cd={player:45,monsterNormal:38,monsterElite:52,boss:70,chest:18,potion:14,torch:55,pillar:70,npc:42,stair:10,carpet:4,cauldron:26,shelf:46,fountain:16,wallByRoom:{start:60,combat:65,elite:75,chest:55,merchant:55,witch:58,boss:90,rest:55,end:60},corridorWall:75},hd={level:2},dd={lerp:.12,transitionMs:400,roomPaddingPx:24},ud={fov:45,distance:5,height:12.5},fd={showDelayMs:200,hideDelayMs:300,offsetX:12,offsetY:12},pd={key:"motarpg_v2_save",version:"2.0.0",autosaveDefault:!0},md={moveRepeatMs:110,moveBufferMs:120},gd={playerBase:Kh,expFormula:Zh,growthTable:Jh,floorAnchors:Qh,bossStatBonus:jh,battle:ed,chestRewards:td,monsterDrops:nd,revive:id,merchant:sd,witch:rd,render:ad,postProcess:od,shadow:ld,heights:cd,raycast:hd,camera:dd,camera3D:ud,hover:fd,save:pd,input:md},vd=13,xd=11,_d=2,Md=[{minFloor:2,maxFloor:5,min:4,max:6},{minFloor:6,maxFloor:10,min:4,max:8},{minFloor:11,maxFloor:20,min:6,max:8},{minFloor:21,maxFloor:9999,min:6,max:12}],yd=12,Sd=5,bd=1,Ed={start:{width:5,height:5},end:{width:6,height:5},combat:{width:[6,7],height:[5,6]},elite:{width:[7,8],height:[6,7]},chest:{width:5,height:5},merchant:{width:6,height:6},witch:{width:[7,8],height:[6,7]},boss:{width:[9,10],height:[7,8]},rest:{width:5,height:5}},wd=4,Td=4,Ad={weights:{combat:1,elite:3,chest:-1,merchant:-2,witch:-3},forcePositiveAt:4,forceNegativeAt:-3},Rd={fewMaxRooms:7,fewCount:1,manyCount:2},Cd={minFloor:6,interval:6},Pd={maxLengthDiff:2},Id={extraChance:.25,extraMax:2,adjacentManhattan:1},Ld={monsterMinDistFromEntry:3,smallAreaMax:30,mediumAreaMax:42,density:{small:2,medium:3,large:4},chestRoomMin:2,chestRoomMax:3,otherRoomChestChance:.35,eliteRoomEliteMin:1,eliteRoomEliteMax:2,bossRoomAddsMin:0,bossRoomAddsMax:2,combatByDepth:[{maxDepth:1,monsters:[1,2],elites:[0,0],chests:[0,1],potions:[0,1]},{maxDepth:2,monsters:[2,2],elites:[0,1],chests:[0,1],potions:[1,1]},{maxDepth:9999,monsters:[2,3],elites:[1,1],chests:[1,1],potions:[1,1]}],eliteRoom:{elites:[1,1],monsters:[1,2],chests:[1,2],potions:[1,1]},treasureRoom:{chests:[2,3],monsters:[1,2],potions:[1,2]},merchantRoom:{chests:[0,1],potions:[1,2]},witchRoom:{shelves:[2,2]},bossRoom:{elites:[0,2],chests:[2,3],potions:[2,4]},exitRoom:{guards:[0,1],chests:[0,2],potions:[1,1]},startRoom:{potions:[1,1]},guard:{chestRadius:3,stairRadius:3},barrier:{fillWithPillars:!0},roomTorches:{start:[2,4],merchant:[4,4],witch:[4,4],boss:[6,8],end:[4,4]}},Dd={torchCorridorEvery:4,pillarMinRoomWidth:7,carpetRooms:["chest","boss"]},Ud={maxAttempts:40},Fd={cellSpacingX:vd,cellSpacingY:xd,gridRadius:_d,floorRoomCounts:Md,maxRooms:yd,bossFloorInterval:Sd,initialFloor:bd,roomSpecs:Ed,minRoomWidth:wd,minRoomHeight:Td,tension:Ad,merchantLimit:Rd,witchLimit:Cd,path:Pd,corridor:Id,content:Ld,decor:Dd,generation:Ud},Nd=[{id:"slime",name:"史莱姆",shape:"circle",color:"#44cc44",category:"normal",floorMin:1,floorMax:5,weight:30,hpMul:1,atkMul:.9,defMul:.8,goldMul:1,expMul:1,height:32,description:"最弱小的魔物，柔软无骨。"},{id:"bat",name:"蝙蝠",shape:"circle",color:"#9955cc",category:"normal",floorMin:1,floorMax:10,weight:25,hpMul:.7,atkMul:1.1,defMul:.5,goldMul:1,expMul:1,height:30,description:"盘旋的暗影，攻击刁钻。"},{id:"skeleton",name:"骷髅兵",shape:"square",color:"#dddddd",category:"normal",floorMin:3,floorMax:15,weight:25,hpMul:1.2,atkMul:1,defMul:1.2,goldMul:1.1,expMul:1.1,height:36,description:"不朽的卫兵，骨头拼成的战躯。"},{id:"gargoyle",name:"石像鬼",shape:"square",color:"#888899",category:"normal",floorMin:8,floorMax:25,weight:22,hpMul:1.5,atkMul:.9,defMul:1.3,goldMul:1.2,expMul:1.2,height:42,description:"石化的守卫，皮糙肉厚。"},{id:"shadow_wolf",name:"暗影狼",shape:"square",color:"#3344aa",category:"normal",floorMin:12,floorMax:35,weight:22,hpMul:1.1,atkMul:1.4,defMul:.8,goldMul:1.2,expMul:1.2,height:40,description:"影中疾行的猎手，撕咬致命。"},{id:"hellhound",name:"地狱犬",shape:"square",color:"#ff6622",category:"normal",floorMin:18,floorMax:45,weight:20,hpMul:1.3,atkMul:1.5,defMul:1,goldMul:1.3,expMul:1.3,height:44,description:"燃烧的恶犬，吐息灼人。"},{id:"dark_knight",name:"暗黑骑士",shape:"square",color:"#aa1133",category:"normal",floorMin:25,floorMax:9999,weight:20,hpMul:1.8,atkMul:1.2,defMul:1.4,goldMul:1.4,expMul:1.4,height:48,description:"堕落的骑士，攻防兼备。"},{id:"ancient_dragon",name:"远古巨龙",shape:"big_square",color:"#cc1122",category:"boss",floorMin:5,floorMax:9999,weight:0,hpMul:5,atkMul:.95,defMul:1.2,goldMul:5,expMul:8,height:70,description:"沉眠于塔底的灾厄，翼影蔽日。"}],Od=1.25,Bd=2,kd=2.5,zd={monsters:Nd,eliteStatMultiplier:Od,eliteGoldMultiplier:Bd,eliteExpMultiplier:kd},Gd=[{tier:"crude",name:"劣质药水",healPct:.2,price:20,color:"#dd6688",minFloor:1,maxFloor:5,icon:"🧪"},{tier:"normal",name:"普通药水",healPct:.3,price:40,color:"#ee3344",minFloor:3,maxFloor:15,icon:"🧪"},{tier:"quality",name:"优质药水",healPct:.45,price:100,color:"#bb1133",minFloor:10,maxFloor:30,icon:"🧪"},{tier:"strong",name:"强效药水",healPct:.6,price:250,color:"#990033",minFloor:25,maxFloor:40,icon:"⚗️"},{tier:"holy",name:"圣药",healPct:.8,price:600,color:"#ffdd44",minFloor:40,maxFloor:9999,icon:"⚗️"}],Hd={potions:Gd},Vd=["poor","common","fine","rare","epic","legendary","mythic"],Wd={poor:{name:"破烂",color:"#9e9e9e",statMultiplier:.6,affixCount:0,affixCountMax:0,sellMultiplier:.2,prefix:"破旧的",basePrice:5},common:{name:"普通",color:"#ffffff",statMultiplier:1,affixCount:0,affixCountMax:0,sellMultiplier:1,prefix:"",basePrice:10},fine:{name:"优秀",color:"#4488ff",statMultiplier:1.4,affixCount:1,affixCountMax:1,sellMultiplier:2,prefix:"精良的",basePrice:30},rare:{name:"稀有",color:"#aa44ff",statMultiplier:1.9,affixCount:2,affixCountMax:3,sellMultiplier:4,prefix:"优质的",basePrice:80,affixExtra:[{atEquipLevel:20,add:1}]},epic:{name:"史诗",color:"#ffaa00",statMultiplier:2.5,affixCount:3,affixCountMax:5,sellMultiplier:8,prefix:"精制的",basePrice:200,affixExtra:[{atEquipLevel:15,add:1}]},legendary:{name:"传说",color:"#ff5533",statMultiplier:3.5,affixCount:4,affixCountMax:7,sellMultiplier:16,prefix:"完美的",basePrice:500,affixExtra:[{atEquipLevel:10,add:1}]},mythic:{name:"神话",color:"#ff44dd",statMultiplier:5,affixCount:4,affixCountMax:4,sellMultiplier:35,prefix:"无双的",basePrice:1200}},qd=[{minFloor:1,maxFloor:5,weights:{poor:45,common:40,fine:12,rare:3,epic:0,legendary:0,mythic:0}},{minFloor:6,maxFloor:10,weights:{poor:10,common:50,fine:28,rare:10,epic:2,legendary:0,mythic:0}},{minFloor:11,maxFloor:20,weights:{poor:1,common:35,fine:35,rare:20,epic:8,legendary:1,mythic:0}},{minFloor:21,maxFloor:30,weights:{poor:1,common:15,fine:31,rare:30,epic:18,legendary:5,mythic:0}},{minFloor:31,maxFloor:40,weights:{poor:0,common:5,fine:20,rare:30,epic:30,legendary:15,mythic:0}},{minFloor:41,maxFloor:50,weights:{poor:0,common:0,fine:10,rare:25,epic:35,legendary:29.5,mythic:.5}},{minFloor:51,maxFloor:9999,weights:{poor:0,common:0,fine:8,rare:22,epic:33,legendary:35,mythic:2}}],$d=[{type:"sharp",name:"锋利",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:3,max:8},{maxEquipLevel:25,min:8,max:20},{maxEquipLevel:40,min:20,max:40},{maxEquipLevel:50,min:40,max:70}],description:"攻击 +{v}"},{type:"sturdy",name:"坚固",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:2,max:5},{maxEquipLevel:25,min:5,max:12},{maxEquipLevel:40,min:12,max:25},{maxEquipLevel:50,min:25,max:45}],description:"防御 +{v}"},{type:"vitality",name:"活力",minQuality:"fine",isPercent:!1,bands:[{maxEquipLevel:10,min:15,max:40},{maxEquipLevel:25,min:40,max:100},{maxEquipLevel:40,min:100,max:200},{maxEquipLevel:50,min:200,max:350}],description:"生命 +{v}"},{type:"precision",name:"精准",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:3},{maxEquipLevel:25,min:3,max:5},{maxEquipLevel:40,min:5,max:7},{maxEquipLevel:50,min:7,max:10}],description:"暴击率 +{v}%"},{type:"agility",name:"灵巧",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:2},{maxEquipLevel:25,min:2,max:4},{maxEquipLevel:40,min:4,max:6},{maxEquipLevel:50,min:6,max:8}],description:"闪避率 +{v}%"},{type:"savage",name:"强攻",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:2,max:4},{maxEquipLevel:25,min:4,max:7},{maxEquipLevel:40,min:7,max:10},{maxEquipLevel:50,min:10,max:15}],description:"攻击 +{v}%"},{type:"fortress",name:"铁壁",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:3},{maxEquipLevel:25,min:3,max:5},{maxEquipLevel:40,min:5,max:8},{maxEquipLevel:50,min:8,max:12}],description:"防御 +{v}%"},{type:"lifesteal",name:"嗜血",minQuality:"epic",isPercent:!0,bands:[{maxEquipLevel:10,min:1,max:2},{maxEquipLevel:25,min:2,max:3},{maxEquipLevel:40,min:3,max:4},{maxEquipLevel:50,min:4,max:6}],description:"攻击回复生命 {v}%"},{type:"hellfire",name:"业火",minQuality:"rare",isPercent:!1,bands:[{maxEquipLevel:10,min:3,max:8},{maxEquipLevel:25,min:8,max:18},{maxEquipLevel:40,min:18,max:35},{maxEquipLevel:50,min:35,max:60}],description:"附加火焰伤害 {v}"},{type:"greed",name:"贪婪",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"金币获取 +{v}%"},{type:"wisdom",name:"博学",minQuality:"rare",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"经验获取 +{v}%"},{type:"dragonslayer",name:"屠龙",minQuality:"epic",isPercent:!0,bands:[{maxEquipLevel:10,min:5,max:10},{maxEquipLevel:25,min:10,max:15},{maxEquipLevel:40,min:15,max:20},{maxEquipLevel:50,min:20,max:30}],description:"对Boss伤害 +{v}%"}],Xd=[{minEquipLevel:1,maxEquipLevel:5,values:{poor:[2,5],common:[4,8],fine:[8,15],rare:[15,25],epic:null,legendary:null}},{minEquipLevel:6,maxEquipLevel:10,values:{poor:[5,8],common:[8,15],fine:[15,25],rare:[25,40],epic:[40,55],legendary:null}},{minEquipLevel:11,maxEquipLevel:20,values:{poor:null,common:[15,25],fine:[25,40],rare:[40,60],epic:[60,85],legendary:[85,120]}},{minEquipLevel:21,maxEquipLevel:30,values:{poor:null,common:[25,35],fine:[35,55],rare:[55,80],epic:[80,110],legendary:[110,160]}},{minEquipLevel:31,maxEquipLevel:40,values:{poor:null,common:null,fine:[45,65],rare:[65,95],epic:[95,140],legendary:[140,200]}},{minEquipLevel:41,maxEquipLevel:50,values:{poor:null,common:null,fine:[60,80],rare:[80,120],epic:[120,180],legendary:[180,280]}}],Yd=[{minEquipLevel:1,maxEquipLevel:5,values:{poor:[1,3],common:[2,5],fine:[4,8],rare:[6,12],epic:null,legendary:null}},{minEquipLevel:6,maxEquipLevel:10,values:{poor:[2,4],common:[4,8],fine:[8,14],rare:[12,20],epic:[18,28],legendary:null}},{minEquipLevel:11,maxEquipLevel:20,values:{poor:null,common:[8,14],fine:[14,22],rare:[20,30],epic:[30,45],legendary:[45,60]}},{minEquipLevel:21,maxEquipLevel:30,values:{poor:null,common:[14,20],fine:[20,30],rare:[30,45],epic:[45,60],legendary:[60,85]}},{minEquipLevel:31,maxEquipLevel:40,values:{poor:null,common:null,fine:[25,35],rare:[35,55],epic:[55,75],legendary:[75,110]}},{minEquipLevel:41,maxEquipLevel:50,values:{poor:null,common:null,fine:[35,45],rare:[45,65],epic:[65,95],legendary:[95,140]}}],Kd=1.43,Zd={weapon:[{minEquipLevel:1,maxEquipLevel:10,names:["铁剑"]},{minEquipLevel:11,maxEquipLevel:20,names:["阔剑"]},{minEquipLevel:21,maxEquipLevel:30,names:["长剑"]},{minEquipLevel:31,maxEquipLevel:40,names:["符文剑"]},{minEquipLevel:41,maxEquipLevel:50,names:["龙魂剑"]}],armor:[{minEquipLevel:1,maxEquipLevel:10,names:["胸甲"]},{minEquipLevel:11,maxEquipLevel:20,names:["鳞甲"]},{minEquipLevel:21,maxEquipLevel:30,names:["板甲"]},{minEquipLevel:31,maxEquipLevel:40,names:["符文甲"]},{minEquipLevel:41,maxEquipLevel:50,names:["龙鳞甲"]}]},Jd={playerLevelFactor:.5,floorFactor:1,randomMin:-2,randomMax:3,min:1,max:50},Qd={sellMultiplier:1.6,min:100,max:5e3},jd={mythicAffixCount:4},eu={qualityOrder:Vd,quality:Wd,qualityByFloor:qd,affixes:$d,weaponTable:Xd,armorTable:Yd,mythicFromLegendary:Kd,baseNames:Zd,equipLevelFormula:Jd,buyPriceRule:Qd,affixSpecial:jd},tu=[{id:"npc_guide",name:"引导者·艾登",color:"#44dd99",lines:["欢迎来到无尽之塔，勇者。这座塔每层都由无数房间构成，路径由你选择。","用 WASD 或方向键移动，撞上怪物即会展开战斗。左键也能直接点选目标。","宝箱与商人会给你补给。装备品质从破烂到神话共七档，仔细对比再穿戴。","楼梯在终点房间。愿你脚下生风，剑下无情。","对了——死亡不是终点。塔会给你重来的机会，但会收走一部分金币。"]},{id:"npc_merchant",name:"商人·老古",color:"#44dd66",isMerchant:!0,lines:["哟，客人！稀罕物件应有尽有，看看？","药水按楼层进新货，早买早安心。","钥匙不嫌多，宝箱可等不了人。"]},{id:"npc_witch",name:"女巫·薇薇安",color:"#c78cff",isWitch:!0,lines:["嘘——别碰我的锅，那汤药还没醒。","塔里的怪物越深越凶，我的药水却越深越灵。要试试吗？","旁边那口泉水能洗去你的伤，不过……得付点金子。"]}],nu={npcs:tu},iu=[{id:"quest_talk_guide",name:"初来乍到",description:"与起点的引导者艾登对话，了解这座塔的规则。",objectives:[{type:"talk_npc",targetId:"npc_guide",quantity:1}],rewards:[{type:"potion",tier:"crude",value:2}],prerequisites:[],guidance:"走到绿色方块旁，左键对话。"},{id:"quest_first_blood",name:"初试锋芒",description:"击败一只史莱姆。",objectives:[{type:"defeat_monster",targetId:"slime",quantity:1}],rewards:[{type:"gold",value:30}],prerequisites:["quest_talk_guide"],guidance:"撞向红色方块即进入战斗。"},{id:"quest_first_chest",name:"开箱有喜",description:"打开一个宝箱。",objectives:[{type:"open_chest",quantity:1}],rewards:[{type:"gold",value:20}],prerequisites:["quest_talk_guide"],guidance:"左键点击金色宝箱。"},{id:"quest_first_equip",name:"披挂上阵",description:"穿戴一件装备。",objectives:[{type:"equip_item",quantity:1}],rewards:[{type:"equipment",quality:"poor"}],prerequisites:["quest_first_chest"],guidance:"按 B 打开背包，双击装备穿戴。"},{id:"quest_descend",name:"更下一层",description:"通过终点楼梯到达第 2 层。",objectives:[{type:"reach_floor",value:2,quantity:1}],rewards:[{type:"gold",value:50},{type:"potion",tier:"crude",value:1}],prerequisites:["quest_first_blood"],guidance:"找到房间角落的发光楼梯。"}],su={quests:iu},ru=!0,au={placeholder:ru},ou=[{id:"ev_gold_fairy",name:"金币妖精",icon:"🧚",minFloor:2,chance:.07,roomTypes:["combat","chest"],description:"一只金币妖精从阴影里窜出，翅膀上洒落着金粉。",options:[{text:"伸手去抓",effects:[{type:"gold",value:30,perFloor:6}]},{text:"目送它离开",effects:[]}]},{id:"ev_trap",name:"可疑的踏板",icon:"⚠️",minFloor:3,chance:.06,roomTypes:["combat","elite"],description:"脚下的石板忽然下陷——是陷阱！",options:[{text:"硬抗",effects:[{type:"damagePct",value:8}]},{text:"翻滚闪避（消耗体力）",effects:[{type:"damagePct",value:3}]}]},{id:"ev_spring",name:"神秘泉水",icon:"⛲",minFloor:2,chance:.06,roomTypes:["chest","merchant","end"],description:"角落里涌出一汪泛着微光的泉水。",options:[{text:"饮下泉水",effects:[{type:"healPct",value:20}]},{text:"谨慎起见，不喝",effects:[]}]},{id:"ev_scroll",name:"古老的卷轴",icon:"📜",minFloor:4,chance:.05,roomTypes:["combat","chest","elite"],description:"墙上嵌着一卷古旧的卷轴，字迹依稀可辨。",options:[{text:"研读卷轴",effects:[{type:"exp",value:25,perFloor:5}]},{text:"没有兴趣",effects:[]}]}],lu={events:ou},cu={start:"起点大厅",end:"终点之间",combat:"战斗室",elite:"精英殿堂",chest:"宝藏间",merchant:"商人营地",witch:"女巫酿药间",boss:"Boss巢穴",rest:"休整营地"},hu={attack:"左键攻击",pickup:"左键拾取",talk:"左键对话",open:"左键打开",stair:"点击或走上楼梯",trade:"左键交易",heal:"左键治疗"},du={gameTitle:"无尽之塔",floor:"第 {floor} 层",depth:"深度 {depth}",pathA:"路径A（高危）",pathB:"路径B（稳健）"},uu={firstEquipment:"获得装备！按 B 打开背包查看，双击可穿戴。装备对比中绿色为提升。",firstDeath:"你倒下了……但塔给予你重来的机会：在本层起点复活，损失 20% 金币。",tutorialWelcome:"欢迎来到无尽之塔。跟随右侧任务指引开始冒险吧。"},fu={player:"勇者",merchant:"商人",guide:"引导者",chest:"宝箱",chestOpened:"空宝箱",stair:"通往第 {floor} 层",carpet:"地毯",pillar:"石柱",potion:"药水",torch:"火把",cauldron:"熬药大锅",shelf:"药架",fountain:"治疗泉"},pu={roomNames:cu,hints:hu,titles:du,guidance:uu,labels:fu},mu={autoSave:!0},gu={defaults:mu},vi=class vi{constructor(){O(this,"loaded",!1)}static getInstance(){return vi.instance||(vi.instance=new vi),vi.instance}loadAll(){this.loaded=!0}get config(){return gd}get mapGen(){return Fd}get monsters(){return zd}get potions(){return Hd}get equipment(){return eu}get npcs(){return nu}get quests(){return su}get economy(){return au}get events(){return lu}get texts(){return pu}get settings(){return gu}getMonster(e){return this.monsters.monsters.find(t=>t.id===e)}getPotion(e){return this.potions.potions.find(t=>t.tier===e)}getNpc(e){return this.npcs.npcs.find(t=>t.id===e)}getQuest(e){return this.quests.quests.find(t=>t.id===e)}get isLoaded(){return this.loaded}};O(vi,"instance");let so=vi;const B=so.getInstance(),xi=class xi{constructor(){O(this,"handlers",new Map)}static getInstance(){return xi.instance||(xi.instance=new xi),xi.instance}on(e,t){let n=this.handlers.get(e);n||(n=new Set,this.handlers.set(e,n)),n.add(t)}once(e,t){const n=i=>{this.off(e,n),t(i)};this.on(e,n)}off(e,t){const n=this.handlers.get(e);n&&n.delete(t)}emit(e,t){const n=this.handlers.get(e);if(n)for(const i of[...n])try{i(t)}catch(s){console.error(`[EventBus] handler error on "${String(e)}"`,s)}}clear(){this.handlers.clear()}};O(xi,"instance");let ro=xi;const ee=ro.getInstance(),_i=class _i{constructor(){O(this,"started",!1);O(this,"paused",!1);O(this,"modalCount",0);O(this,"settings");this.settings={...B.settings.defaults}}static getInstance(){return _i.instance||(_i.instance=new _i),_i.instance}get modalOpen(){return this.modalCount>0}pushModal(){this.modalCount++}popModal(){this.modalCount=Math.max(0,this.modalCount-1)}setSetting(e,t){this.settings[e]=t,ee.emit("settingsChanged",{key:e,value:t})}};O(_i,"instance");let ao=_i;const lt=ao.getInstance(),Mi=class Mi{constructor(){}static getInstance(){return Mi.instance||(Mi.instance=new Mi),Mi.instance}get anchors(){return B.config.floorAnchors}anchorValue(e,t,n){const i=this.anchors.floors,s=i.length-1;if(t<=i[0])return e[0];if(t>=i[s]){const a=t-i[s];return e[s]*Math.pow(1+n,a)}for(let a=0;a<s;a++)if(t>=i[a]&&t<=i[a+1]){const o=(t-i[a])/(i[a+1]-i[a]);return e[a]+(e[a+1]-e[a])*o}return e[s]}monsterStats(e,t,n){const i=B.config,s=this.anchors,a=f=>Math.max(1,Math.round(f)),o=e.category==="boss";let l=this.anchorValue(s.hp,t,s.overflowPerFloor.hp)*e.hpMul,c=this.anchorValue(s.atk,t,s.overflowPerFloor.atk)*e.atkMul,h=this.anchorValue(s.def,t,s.overflowPerFloor.def)*e.defMul,u=this.anchorValue(s.exp,t,s.overflowPerFloor.exp)*e.expMul,d=this.anchorValue(s.gold,t,s.overflowPerFloor.gold)*e.goldMul;return o?(l*=1+i.bossStatBonus.hp,c*=1+i.bossStatBonus.atk,h*=1+i.bossStatBonus.def):n&&(l*=B.monsters.eliteStatMultiplier,c*=B.monsters.eliteStatMultiplier,h*=B.monsters.eliteStatMultiplier,d*=B.monsters.eliteGoldMultiplier,u*=B.monsters.eliteExpMultiplier),{name:n?`精英·${e.name}`:e.name,hp:a(l),attack:a(c),defense:a(h),exp:a(u),gold:a(d),isElite:n,isBoss:o}}playerBaseAt(e){const t=B.config,n=t.playerBase;let i=n.maxHp,s=n.attack,a=n.defense;for(let o=2;o<=e;o++){const l=t.growthTable.find(c=>o>=c.minLevel&&o<=c.maxLevel)??t.growthTable[t.growthTable.length-1];i+=l.hp,s+=l.attack,a+=l.defense}return{maxHp:i,attack:s,defense:a}}expToNext(e){const{base:t,power:n}=B.config.expFormula;return Math.round(t*Math.pow(e,n))}};O(Mi,"instance");let Bn=Mi;const vu=["poor","common","fine","rare","epic","legendary","mythic"],yi=class yi{constructor(){O(this,"state");const e=B.config.playerBase;this.state={level:1,exp:0,hp:e.maxHp,baseMaxHp:e.maxHp,baseAttack:e.attack,baseDefense:e.defense,baseCritRate:e.critRate,baseDodgeRate:e.dodgeRate,gold:0,keys:0,potions:{crude:0,normal:0,quality:0,strong:0,holy:0},hotbar:[null,null,null,null,null],weaponId:null,armorId:null,bag:[],x:0,y:0,currentFloor:1,currentRoomId:""}}static getInstance(){return yi.instance||(yi.instance=new yi),yi.instance}restore(e){this.state=e}get pos(){return{x:this.state.x,y:this.state.y}}equipped(){return this.state.bag.filter(e=>e.id===this.state.weaponId||e.id===this.state.armorId)}stats(){let e=this.state.baseAttack,t=this.state.baseDefense,n=this.state.baseMaxHp,i=this.state.baseCritRate,s=this.state.baseDodgeRate,a=0,o=0,l=0,c=0,h=0,u=0,d=0;for(const p of this.equipped())e+=p.attack,t+=p.defense;const f=this.equipped().flatMap(p=>p.affixes);for(const p of f)switch(p.type){case"sharp":e+=p.value;break;case"sturdy":t+=p.value;break;case"vitality":n+=p.value;break;case"precision":i+=p.value;break;case"agility":s+=p.value;break;case"savage":u+=p.value;break;case"fortress":d+=p.value;break;case"lifesteal":a+=p.value;break;case"hellfire":o+=p.value;break;case"greed":l+=p.value;break;case"wisdom":c+=p.value;break;case"dragonslayer":h+=p.value;break}return{maxHp:Math.round(n),attack:Math.round(e*(1+u/100)),defense:Math.round(t*(1+d/100)),critRate:Math.min(75,i),dodgeRate:Math.min(50,s),lifesteal:a,fireDamage:o,goldBonus:l,expBonus:c,bossDamage:h}}get maxHp(){return this.stats().maxHp}get attack(){return this.stats().attack}get defense(){return this.stats().defense}get isAlive(){return this.state.hp>0}heal(e){const t=this.maxHp,n=this.state.hp;this.state.hp=Math.min(t,this.state.hp+e);const i=this.state.hp-n;return i>0&&ee.emit("hpChanged",{oldValue:n,newValue:this.state.hp,delta:i}),i}damage(e){const t=this.state.hp;this.state.hp=Math.max(0,this.state.hp-e),ee.emit("hpChanged",{oldValue:t,newValue:this.state.hp,delta:this.state.hp-t})}gainExp(e){const t=1+this.stats().expBonus/100,n=Math.round(e*t),i=this.state.exp;this.state.exp+=n,ee.emit("expChanged",{oldValue:i,newValue:this.state.exp,delta:n}),this.checkLevelUp()}checkLevelUp(){const e=Bn.getInstance();let t=e.expToNext(this.state.level);for(;this.state.exp>=t&&this.state.level<999;){this.state.exp-=t;const n=this.state.level;this.state.level+=1;const i=e.playerBaseAt(this.state.level),s=i.maxHp-this.state.baseMaxHp,a=i.attack-this.state.baseAttack,o=i.defense-this.state.baseDefense;this.state.baseMaxHp=i.maxHp,this.state.baseAttack=i.attack,this.state.baseDefense=i.defense,this.state.hp+=s,ee.emit("levelUp",{oldLevel:n,newLevel:this.state.level,gainedHp:s,gainedAttack:a,gainedDefense:o}),t=e.expToNext(this.state.level)}}gainGold(e){const t=1+this.stats().goldBonus/100,n=Math.round(e*t),i=this.state.gold;this.state.gold+=n,ee.emit("goldChanged",{oldValue:i,newValue:this.state.gold,delta:n})}spendGold(e){if(this.state.gold<e)return!1;const t=this.state.gold;return this.state.gold-=e,ee.emit("goldChanged",{oldValue:t,newValue:this.state.gold,delta:-e}),!0}getPotionCount(e){return this.state.potions[e]??0}setHotbarSlot(e,t){e<0||e>=this.state.hotbar.length||(this.state.hotbar[e]=t)}swapHotbar(e,t){const n=this.state.hotbar;e<0||e>=n.length||t<0||t>=n.length||([n[e],n[t]]=[n[t],n[e]])}addPotion(e,t=1){this.state.potions[e]=this.getPotionCount(e)+t}usePotion(e){if(this.getPotionCount(e)<=0)return!1;const t=B.getPotion(e);if(!t)return!1;this.state.potions[e]-=1;const n=this.heal(Math.round(this.maxHp*t.healPct));return ee.emit("potionUsed",{tier:e,healed:n}),!0}bestPotionFor(e){const t=["crude","normal","quality","strong","holy"];for(const n of t){const i=B.getPotion(n);if(i&&this.getPotionCount(n)>0&&Math.round(this.maxHp*i.healPct)<=e)return n}for(const n of t)if(this.getPotionCount(n)>0)return n;return null}get weapon(){return this.state.bag.find(e=>e.id===this.state.weaponId)??null}get armor(){return this.state.bag.find(e=>e.id===this.state.armorId)??null}get unequippedBag(){return this.state.bag.filter(e=>e.id!==this.state.weaponId&&e.id!==this.state.armorId)}addEquipment(e){this.state.bag.push(e),ee.emit("equipmentGenerated",{equipment:e,source:e.source})}equip(e){const t=this.state.bag.find(s=>s.id===e);if(!t)return!1;const n=t.slot,i=n==="weapon"?this.state.weaponId:this.state.armorId;return i===e?!1:(n==="weapon"?this.state.weaponId=e:this.state.armorId=e,ee.emit("equipmentEquipped",{slot:n,equipmentId:e,oldId:i}),!0)}unequip(e){e==="weapon"?this.state.weaponId=null:this.state.armorId=null,ee.emit("equipmentEquipped",{slot:e,equipmentId:"",oldId:null})}removeEquipment(e){const t=this.state.bag.findIndex(i=>i.id===e);if(t<0)return null;this.state.weaponId===e&&(this.state.weaponId=null),this.state.armorId===e&&(this.state.armorId=null);const[n]=this.state.bag.splice(t,1);return n}qualityRank(e){return vu.indexOf(e)}};O(yi,"instance");let Re=yi;const sn=class sn{static setLevel(e){sn.level=e}static shouldLog(e){return sn.order[e]>=sn.order[sn.level]}static debug(...e){sn.shouldLog("debug")&&console.log("[DEBUG]",...e)}static info(...e){sn.shouldLog("info")&&console.log("[INFO]",...e)}static warn(...e){sn.shouldLog("warn")&&console.warn("[WARN]",...e)}static error(...e){sn.shouldLog("error")&&console.error("[ERROR]",...e)}};O(sn,"level","info"),O(sn,"order",{debug:0,info:1,warn:2,error:3});let Ft=sn;const Si=class Si{constructor(){O(this,"floor",null);O(this,"states",new Map);O(this,"gateKeys",new Set)}static getInstance(){return Si.instance||(Si.instance=new Si),Si.instance}loadFloor(e,t){if(this.floor=e,this.states.clear(),t)for(const[n,i]of Object.entries(t))this.states.set(n,i);this.recomputeGates(),Ft.info(`[World] 进入楼层${e.floorId}（${e.kind}） ${e.rooms.length}个房间`)}get currentFloor(){return this.floor}inBounds(e,t){return this.floor?e>=0&&e<this.floor.width&&t>=0&&t<this.floor.height:!1}isWalkable(e,t){return!(!this.floor||!this.inBounds(e,t)||this.floor.grid[t][e]!==0||this.gateKeys.has(`${e},${t}`))}tileAt(e,t){return this.inBounds(e,t)?this.floor.grid[t][e]:null}getRoomAt(e,t){if(!this.floor)return null;for(const n of this.floor.rooms)if(e>=n.x&&e<n.x+n.width&&t>=n.y&&t<n.y+n.height)return n;return null}getRoom(e){return this.floor?.rooms.find(t=>t.id===e)??null}getEntityState(e){return this.states.get(e)??{}}setState(e,t){this.states.set(e,{...this.getEntityState(e),...t})}markDefeated(e){this.setState(e,{isAlive:!1}),this.recomputeGates()}markOpened(e){this.setState(e,{isOpened:!0})}markTalked(e){this.setState(e,{isTalked:!0})}markUsed(e){this.setState(e,{isUsed:!0})}recomputeGates(){if(this.gateKeys.clear(),!this.floor||this.floor.kind!=="boss")return;const e=this.floor.rooms.find(n=>n.type==="boss");if(!(!e||!e.entities.some(n=>n.kind==="boss"&&this.isEntityAlive(n))))for(const n of e.doors)this.getRoom(n.toRoomId)?.type==="end"&&this.gateKeys.add(`${n.x},${n.y}`)}isGateLocked(e,t){return this.gateKeys.has(`${e},${t}`)}getGates(){if(!this.floor||this.floor.kind!=="boss")return[];const e=this.floor.rooms.find(t=>t.type==="boss");return e?e.doors.filter(t=>this.getRoom(t.toRoomId)?.type==="end").map(t=>({x:t.x,y:t.y,direction:t.direction,opened:!this.gateKeys.has(`${t.x},${t.y}`)})):[]}isEntityAlive(e){return e.kind==="monster"||e.kind==="boss"?this.getEntityState(e.id).isAlive!==!1:!0}isChestOpened(e){return this.getEntityState(e.id).isOpened===!0}getEntityAt(e,t){if(!this.floor)return null;for(const n of this.floor.rooms)if(!(e<n.x-1||e>n.x+n.width||t<n.y-1||t>n.y+n.height)){for(const i of n.entities)if(!(i.x!==e||i.y!==t)){if(i.kind==="monster"||i.kind==="boss"){if(!this.isEntityAlive(i))continue}else if(i.kind==="chest"){if(this.isChestOpened(i))continue}else if((i.kind==="potion"||i.kind==="fountain")&&this.getEntityState(i.id).isUsed===!0)continue;if(!(i.kind==="pillar"||i.kind==="carpet"||i.kind==="torch"||i.kind==="cauldron"||i.kind==="shelf"))return i}}return null}hasBlockingEntity(e,t){return this.getEntityAt(e,t)!==null}allEntities(){const e=[];if(!this.floor)return e;for(const t of this.floor.rooms)for(const n of t.entities)(n.kind==="monster"||n.kind==="boss")&&!this.isEntityAlive(n)||(n.kind==="potion"||n.kind==="fountain")&&this.getEntityState(n.id).isUsed===!0||e.push({entity:n,room:t});return e}exportEntityStates(){return Object.fromEntries(this.states)}reset(){this.floor=null,this.states.clear()}};O(Si,"instance");let He=Si;class pn{static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static lerp(e,t,n){return e+(t-e)*n}static manhattan(e,t,n,i){return Math.abs(e-n)+Math.abs(t-i)}static dist(e,t,n,i){return Math.hypot(e-n,t-i)}}const Me={next(){return Math.random()},randInt(r,e){return Math.floor(Math.random()*(e-r+1))+r},randFloat(r,e){return Math.random()*(e-r)+r},chance(r){return Math.random()<r},pick(r){return r[Math.floor(Math.random()*r.length)]},pickWeighted(r,e){const t=r.map(e),n=t.reduce((s,a)=>s+a,0);if(n<=0)return r[0];let i=Math.random()*n;for(let s=0;s<r.length;s++)if(i-=t[s],i<=0)return r[s];return r[r.length-1]},shuffle(r){const e=[...r];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}},bi=class bi{constructor(){}static getInstance(){return bi.instance||(bi.instance=new bi),bi.instance}getFloorKind(e){const t=B.mapGen;return e===t.initialFloor?"initial":e%t.bossFloorInterval===0?"boss":"normal"}allocate(e){const t=this.getFloorKind(e);if(t==="initial")return{floorId:e,kind:t,roomTypes:["start","end"]};if(t==="boss")return{floorId:e,kind:t,roomTypes:["rest","boss","end"]};const i=this.rollRoomCount(e)-2,s=this.allocateByTension(e,i);return{floorId:e,kind:t,roomTypes:["start",...s,"end"]}}rollRoomCount(e){const t=B.mapGen,n=t.floorRoomCounts.find(s=>e>=s.minFloor&&e<=s.maxFloor)??t.floorRoomCounts[t.floorRoomCounts.length-1],i=Me.randInt(n.min,n.max);return Math.min(i,t.maxRooms)}allocateByTension(e,t){const n=B.mapGen,i=n.tension.weights;let s=0,a=0;const o=[];for(let l=0;l<t;l++){const h=o.length+2<=n.merchantLimit.fewMaxRooms?n.merchantLimit.fewCount:n.merchantLimit.manyCount;let u;s>=n.tension.forcePositiveAt?u=!0:s<=n.tension.forceNegativeAt?u=!1:u=Me.chance(1/(1+Math.exp(-s)));let d;u?(d=a<h&&Me.chance(.3)?"merchant":"chest",d==="merchant"&&a++):d=Me.chance(.3)?"elite":"combat",o.push(d),s+=i[d]??0}if(this.isWitchFloor(e)){const l=o.findIndex(h=>h==="chest"),c=l>=0?l:o.length-1;c>=0&&(s-=i[o[c]]??0,o[c]="witch",s+=i.witch??0)}return Ft.debug(`[FloorGen] 楼层${e} 类型分配=${o.join(",")} 终态Tension=${s}`),o}isWitchFloor(e){const t=B.mapGen.witchLimit;return e>=t.minFloor&&(e-t.minFloor)%t.interval===0}};O(bi,"instance");let oo=bi;const Ei=class Ei{constructor(){}static getInstance(){return Ei.instance||(Ei.instance=new Ei),Ei.instance}plan(e){const t=e.roomTypes.slice(1,-1);if(e.kind!=="normal"||t.length<2)return e.roomTypes.map((f,p)=>({type:f,rail:p===0?"S":p===e.roomTypes.length-1?"E":"A",railIndex:Math.max(0,p-1),mountIndex:-1,isTrunk:!0}));const n=t.filter(f=>f==="combat"||f==="elite"),i=t.filter(f=>f==="chest"||f==="merchant"||f==="witch"),s=[...n];s.sort((f,p)=>(f==="elite"?0:1)-(p==="elite"?0:1));const a=[],o=[];s.forEach((f,p)=>{p%2===0?a.push(f):o.push(f)}),o.length===0&&a.length>=2&&o.push(a.pop()),a.length===0&&o.length>=2&&a.push(o.pop());const l=a.length+o.length,c=i.map(f=>{const p=f==="merchant"||f==="witch"?Math.floor(l/2):Me.randInt(Math.ceil(l/2),l-1);return{type:f,mountIndex:Math.min(p,l-1)}}),h=[{type:e.roomTypes[0],rail:"S",railIndex:0,mountIndex:-1,isTrunk:!0}],u=(f,p,v)=>{h.push({type:f,rail:p,railIndex:v,mountIndex:-1,isTrunk:!0});const g=v*2+(p==="A"?0:1),m=c.map((S,w)=>({...S,mi:w})).filter(S=>S.mountIndex===g);for(const S of m)h.push({type:S.type,rail:"side",railIndex:-1,mountIndex:g,isTrunk:!1})},d=Math.max(a.length,o.length);for(let f=0;f<d;f++)f<a.length&&u(a[f],"A",f),f<o.length&&u(o[f],"B",f);for(const f of c){const p=f.mountIndex;!h.some(g=>g.rail==="side"&&g.mountIndex===p&&g.type===f.type)&&!h.some(g=>g.mountIndex===p&&g.rail==="side")&&h.splice(h.length-1,0,{type:f.type,rail:"side",railIndex:-1,mountIndex:p,isTrunk:!1})}return h.push({type:"end",rail:"E",railIndex:0,mountIndex:-1,isTrunk:!0}),h}pathLengthDiff(e){const t=e.filter(i=>i.rail==="A").length,n=e.filter(i=>i.rail==="B").length;return Math.abs(t-n)}validateDiff(e){return this.pathLengthDiff(e)<=B.mapGen.path.maxLengthDiff}};O(Ei,"instance");let lo=Ei;const Qn=class Qn{static reset(){Qn.counter=0}static next(e){return Qn.counter+=1,`${e}_${Qn.counter.toString(36)}`}static equipmentId(){return Qn.counter+=1,`eq_${Date.now().toString(36)}_${Qn.counter.toString(36)}_${Math.floor(Math.random()*1e6).toString(36)}`}};O(Qn,"counter",0);let Vt=Qn;const Ma={north:{dx:0,dy:-1},south:{dx:0,dy:1},east:{dx:1,dy:0},west:{dx:-1,dy:0}},xu={north:"south",south:"north",east:"west",west:"east"},wi=class wi{constructor(){}static getInstance(){return wi.instance||(wi.instance=new wi),wi.instance}place(e,t){const n=B.mapGen,i=n.gridRadius,s=this.maxSpecWidth(),a=this.maxSpecHeight(),o=2*i*n.cellSpacingX+s,l=2*i*n.cellSpacingY+a,c=new Map,h=[],u=[],d=new Map;for(let p=0;p<t.length;p++){const v=t[p];let g=0,m=0,S=null;if(p===0)g=0,m=0;else{const _=h[p-1],A=this.biasTarget(v,t,h,d),I=this.chooseCell(_.gx,_.gy,c,u,A);if(!I)return null;g=I.gx,m=I.gy,S=I.direction}const w=`${g},${m}`;if(c.has(w))return null;c.set(w,p);const y=this.rollSize(v.type),T=(g+i)*n.cellSpacingX,b=(m+i)*n.cellSpacingY,R={id:`room_${e}_${p}`,floorId:e,type:v.type,order:p,gx:g,gy:m,width:y.width,height:y.height,x:T,y:b,centerX:T+Math.floor(y.width/2),centerY:b+Math.floor(y.height/2),fromDirection:S,depth:0,onPathA:v.rail==="A",onPathB:v.rail==="B",mountedOn:v.rail==="side"?this.mountedOnId(t,v,e):null,doors:[],entities:[]};h.push(R),(v.rail==="A"||v.rail==="B")&&d.set(`${v.rail}${v.railIndex}`,{gx:g,gy:m}),S&&u.push(S)}const f=Array.from({length:l},()=>Array.from({length:o},()=>-1));for(const p of h){for(let v=p.y;v<=p.y+p.height-1;v++)for(let g=p.x;g<=p.x+p.width-1;g++)f[v][g]=1;for(let v=p.y+1;v<=p.y+p.height-2;v++)for(let g=p.x+1;g<=p.x+p.width-2;g++)f[v][g]=0}return Vt.next("gen"),{rooms:h,grid:f}}biasTarget(e,t,n,i){if(e.rail==="A"&&e.railIndex>0)return i.get(`A${e.railIndex-1}`)??null;if(e.rail==="B"&&e.railIndex>0)return i.get(`B${e.railIndex-1}`)??null;if(e.rail==="B"&&e.railIndex===0)return{gx:0,gy:0};if(e.rail==="E"){const s=t.filter(a=>a.rail==="A").length-1;if(s>=0)return i.get(`A${s}`)??null}return null}chooseCell(e,t,n,i,s){const o=B.mapGen.gridRadius,l=2*Math.SQRT2+1e-9,c=i[i.length-1]??null,h=["north","south","east","west"],u=Me.shuffle(h),d=(p,v)=>Math.abs(p)<=o&&Math.abs(v)<=o,f=(p,v)=>{const g=[];for(const m of u){if(!p&&c&&m===xu[c]||!v&&this.isThirdStraight(m,i))continue;const{dx:S,dy:w}=Ma[m],y=e+S,T=t+w;if(n.has(`${y},${T}`)||!d(y,T)||pn.dist(y,T,0,0)>l)continue;let b=Me.next();s&&pn.manhattan(y,T,s.gx,s.gy)<=1&&(b+=3),g.push({gx:y,gy:T,direction:m,score:b})}return g.length===0?null:(g.sort((m,S)=>S.score-m.score),g[0])};return f(!1,!1)??f(!0,!1)??f(!0,!0)??this.nearestFreeCell(e,t,n,o)}isThirdStraight(e,t){const n=t.length;return n<2?!1:t[n-1]===e&&t[n-2]===e}nearestFreeCell(e,t,n,i){let s=null,a=1/0;for(const o of Object.keys(Ma)){const{dx:l,dy:c}=Ma[o],h=e+l,u=t+c;if(n.has(`${h},${u}`)||Math.abs(h)>i||Math.abs(u)>i||pn.dist(h,u,0,0)>2*Math.SQRT2+1e-9)continue;const d=pn.dist(h,u,0,0);d<a&&(a=d,s={gx:h,gy:u,direction:o})}return s}rollSize(e){const t=B.mapGen.roomSpecs[e],n=a=>Array.isArray(a)?Me.randInt(a[0],a[1]):a,i=Math.max(B.mapGen.minRoomWidth,n(t.width)),s=Math.max(B.mapGen.minRoomHeight,n(t.height));return{width:i+2,height:s+2}}maxSpecWidth(){let e=0;for(const t of Object.values(B.mapGen.roomSpecs)){const n=Array.isArray(t.width)?t.width[1]:t.width;e=Math.max(e,n)}return e+2}maxSpecHeight(){let e=0;for(const t of Object.values(B.mapGen.roomSpecs)){const n=Array.isArray(t.height)?t.height[1]:t.height;e=Math.max(e,n)}return e+2}mountedOnId(e,t,n){const i=e.indexOf(t);for(let s=i-1;s>=0;s--)if(e[s].isTrunk)return`room_${n}_${s}`;return null}};O(wi,"instance");let co=wi;const Ti=class Ti{constructor(){}static getInstance(){return Ti.instance||(Ti.instance=new Ti),Ti.instance}connect(e,t){const n=[],i=[],s=new Set;new Map(e.map(d=>[d.id,d]));const a=(d,f)=>{s.add(this.pairKey(d,f)),s.add(this.pairKey(f,d))},o=(d,f)=>s.has(this.pairKey(d,f));for(let d=0;d+1<e.length;d++){const f=e[d],p=e[d+1],v=this.carveCorridor(f,p,t);v&&(n.push({id:Vt.next("corr"),fromRoomId:f.id,toRoomId:p.id,tiles:v.tiles,extra:!1}),i.push({from:f.id,to:p.id}),a(f.id,p.id))}const l=B.mapGen.corridor,c=[];for(let d=0;d<e.length;d++)for(let f=d+1;f<e.length;f++){const p=e[d],v=e[f];o(p.id,v.id)||pn.manhattan(p.gx,p.gy,v.gx,v.gy)>l.adjacentManhattan||c.push({a:p,b:v,priority:this.shortcutPriority(p,v,e)})}c.sort((d,f)=>d.priority-f.priority||Me.next()-.5);let h=0,u=!1;for(const d of c){if(h>=l.extraMax)break;if(!Me.chance(l.extraChance))continue;const p=this.carveCorridor(d.a,d.b,t);p&&(n.push({id:Vt.next("corr"),fromRoomId:d.a.id,toRoomId:d.b.id,tiles:p.tiles,extra:!0}),i.push({from:d.a.id,to:d.b.id}),a(d.a.id,d.b.id),h++,d.priority<=1&&(u=!0))}if(!u){const d=c.find(f=>f.priority<=1&&!o(f.a.id,f.b.id)&&h<l.extraMax)??c.find(f=>f.priority<=2&&!o(f.a.id,f.b.id)&&h<l.extraMax);if(d){const f=this.carveCorridor(d.a,d.b,t);f&&(n.push({id:Vt.next("corr"),fromRoomId:d.a.id,toRoomId:d.b.id,tiles:f.tiles,extra:!0}),i.push({from:d.a.id,to:d.b.id}),a(d.a.id,d.b.id))}}return{corridors:n,connections:i}}shortcutPriority(e,t,n){const i=e.onPathA&&t.onPathA||e.onPathB&&t.onPathB,s=n[0],a=n[n.length-1],o=e===s&&t.onPathB||t===s&&e.onPathB||e===a&&t.onPathA||t===a&&e.onPathA;return i?this.railGap(e,t)===1?0:2:o?1:2}railGap(e,t){return Math.abs(e.order-t.order)}carveCorridor(e,t,n){if(e.gy===t.gy&&e.gx!==t.gx){const i=e.gx<t.gx?e:t,s=e.gx<t.gx?t:e,a=Math.max(i.y+1,s.y+1),o=Math.min(i.y+i.height-2,s.y+s.height-2);if(a>o)return null;const l=Math.floor((a+o)/2),c=[];for(let h=i.x+i.width;h<s.x;h++)this.insideGrid(n,h,l)&&(n[l][h]=0,c.push({x:h,y:l}));return this.carveDoor(i,s,l,"east",n),this.carveDoor(s,i,l,"west",n),{tiles:c}}if(e.gx===t.gx&&e.gy!==t.gy){const i=e.gy<t.gy?e:t,s=e.gy<t.gy?t:e,a=Math.max(i.x+1,s.x+1),o=Math.min(i.x+i.width-2,s.x+s.width-2);if(a>o)return null;const l=Math.floor((a+o)/2),c=[];for(let h=i.y+i.height;h<s.y;h++)this.insideGrid(n,l,h)&&(n[h][l]=0,c.push({x:l,y:h}));return this.carveDoor(i,s,l,"south",n),this.carveDoor(s,i,l,"north",n),{tiles:c}}return null}carveDoor(e,t,n,i,s){let a=0,o=0;if(i==="east"?(a=e.x+e.width-1,o=n):i==="west"?(a=e.x,o=n):i==="south"?(a=n,o=e.y+e.height-1):(a=n,o=e.y),!!this.insideGrid(s,a,o)){if(i==="east"||i==="west"){if(o<=e.y||o>=e.y+e.height-1)return}else if(a<=e.x||a>=e.x+e.width-1)return;s[o][a]=0,e.doors.push({x:a,y:o,direction:i,toRoomId:t.id})}}insideGrid(e,t,n){return n>=0&&n<e.length&&t>=0&&t<e[0].length}pairKey(e,t){return`${e}|${t}`}};O(Ti,"instance");let ho=Ti;const ya=[[0,1],[0,-1],[1,0],[-1,0]];class _u{constructor(e,t,n){O(this,"room");O(this,"grid");O(this,"floorId");O(this,"spots");O(this,"taken",new Set);this.room=e,this.grid=t,this.floorId=n,this.spots=this.computeSpots()}put(e){this.room.entities.push({...e,id:Vt.next("ent")}),this.taken.add(`${e.x},${e.y}`)}putBlocking(e,t,n){this.put({kind:e,x:t,y:n}),this.grid[n]?.[t]===0&&(this.grid[n][t]=2)}freeAt(e,t){return this.grid[t]?.[e]!==0||this.taken.has(`${e},${t}`)?!1:!this.room.entities.some(n=>n.x===e&&n.y===t)}inRoom(e,t){return e>=this.room.x&&e<this.room.x+this.room.width&&t>=this.room.y&&t<this.room.y+this.room.height}monsterAt(e,t,n){this.put({kind:"monster",monsterId:e,isElite:t,x:n.x,y:n.y})}computeSpots(){const e=this.room.doors.map(s=>({x:s.x,y:s.y}));e.length===0&&e.push({x:this.room.centerX,y:this.room.centerY});const t=new Map,n=[];for(const s of e)this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0&&(t.set(`${s.x},${s.y}`,0),n.push(s));for(;n.length>0;){const s=n.shift(),a=t.get(`${s.x},${s.y}`)??0;for(const[o,l]of ya){const c=s.x+o,h=s.y+l,u=`${c},${h}`;this.inRoom(c,h)&&this.grid[h]?.[c]===0&&(t.has(u)||(t.set(u,a+1),n.push({x:c,y:h})))}}const i=[];for(let s=this.room.y+1;s<=this.room.y+this.room.height-2;s++)for(let a=this.room.x+1;a<=this.room.x+this.room.width-2;a++)this.grid[s][a]===0&&i.push({x:a,y:s,dist:t.get(`${a},${s}`)??99});return i}innerOfDoor(e){switch(e.direction){case"east":return{x:e.x-1,y:e.y};case"west":return{x:e.x+1,y:e.y};case"north":return{x:e.x,y:e.y+1};default:return{x:e.x,y:e.y-1}}}mainPath(){const e=this.room.doors.map(s=>this.innerOfDoor(s)).filter(s=>this.inRoom(s.x,s.y)&&this.grid[s.y]?.[s.x]===0);if(e.length===0)return[{x:this.room.centerX,y:this.room.centerY}];if(e.length===1)return this.bfsPath(e[0],this.farthestFrom(e[0]));let t=[e[0],e[1]],n=-1;for(let s=0;s<e.length;s++)for(let a=s+1;a<e.length;a++){const o=Math.abs(e[s].x-e[a].x)+Math.abs(e[s].y-e[a].y);o>n&&(n=o,t=[e[s],e[a]])}const i=this.bfsPath(t[0],t[1]);return i.length>0?i:[t[0]]}bfsPath(e,t){const n=(c,h)=>`${c},${h}`,i=new Map,s=[e];for(i.set(n(e.x,e.y),null);s.length>0;){const c=s.shift();if(c.x===t.x&&c.y===t.y)break;for(const[h,u]of ya){const d=c.x+h,f=c.y+u;if(!this.inRoom(d,f)||this.grid[f]?.[d]!==0)continue;const p=n(d,f);i.has(p)||(i.set(p,n(c.x,c.y)),s.push({x:d,y:f}))}}const a=n(t.x,t.y);if(!i.has(a))return[];const o=[];let l=a;for(;l;){const[c,h]=l.split(",").map(Number);o.push({x:c,y:h}),l=i.get(l)??null}return o.reverse()}farthestFrom(e){let t=e,n=-1;for(const i of this.spots)i.dist>n&&(n=i.dist,t={x:i.x,y:i.y});return t}innerCorners(){const e=this.room;return[{x:e.x+1,y:e.y+1},{x:e.x+e.width-2,y:e.y+1},{x:e.x+1,y:e.y+e.height-2},{x:e.x+e.width-2,y:e.y+e.height-2}]}blockPath(e,t,n){if(e<=0||t.length===0)return 0;const i=this.mainPath();if(i.length<3)return 0;const s=Math.floor(i.length/2),a=i[s],o=i[s+1]??i[s-1],l=a.y===o.y,c=[];if(l)for(let v=this.room.y+1;v<=this.room.y+this.room.height-2;v++)this.grid[v]?.[a.x]===0&&c.push({x:a.x,y:v});else for(let v=this.room.x+1;v<=this.room.x+this.room.width-2;v++)this.grid[a.y]?.[v]===0&&c.push({x:v,y:a.y});if(c.length===0)return 0;const h=i[0],u=c.filter(v=>Math.abs(v.x-h.x)+Math.abs(v.y-h.y)>=2),d=u.length>0?u:c,f=Me.shuffle(d).slice(0,Math.min(e,d.length));let p=0;for(const v of f)this.taken.has(`${v.x},${v.y}`)||(this.monsterAt(Me.pickWeighted(t,g=>g.weight).id,n,v),p++);if(p>0&&B.mapGen.content.barrier.fillWithPillars)for(const v of d)this.taken.has(`${v.x},${v.y}`)||(this.put({kind:"pillar",x:v.x,y:v.y}),this.grid[v.y][v.x]=2);return p}guardAround(e,t,n,i,s,a=1){if(n<=0||i.length===0)return 0;const o=[];for(let c=t-a;c<=t+a;c++)for(let h=e-a;h<=e+a;h++)h===e&&c===t||this.inRoom(h,c)&&this.grid[c]?.[h]===0&&(this.taken.has(`${h},${c}`)||o.push({x:h,y:c}));const l=Me.shuffle(o).slice(0,Math.min(n,o.length));for(const c of l)this.monsterAt(Me.pickWeighted(i,h=>h.weight).id,s,c);return l.length}guardStair(e,t,n=!1){if(e<=0||t.length===0)return 0;const i={x:this.room.centerX,y:this.room.centerY},s=this.mainPath()[0]??{x:i.x,y:i.y+1},a=Math.sign(s.x-i.x),o=Math.sign(s.y-i.y),l=[];a!==0&&l.push({x:i.x+a,y:i.y},{x:i.x+a*2,y:i.y}),o!==0&&l.push({x:i.x,y:i.y+o},{x:i.x,y:i.y+o*2});let c=0;for(const h of l){if(c>=e)break;this.freeAt(h.x,h.y)&&(this.monsterAt(Me.pickWeighted(t,u=>u.weight).id,n,h),c++)}return c}placeMonsters(e,t,n){if(e<=0||n.length===0)return 0;const i=B.mapGen.content.monsterMinDistFromEntry,s=this.spots.filter(l=>l.dist>=i&&this.freeAt(l.x,l.y)),a=s.length>=e?s:this.spots.filter(l=>this.freeAt(l.x,l.y)),o=Me.shuffle(a).slice(0,e);for(const l of o)this.monsterAt(Me.pickWeighted(n,c=>c.weight).id,t,l);return o.length}placeCornerChests(e,t=!1){const n=[];if(e<=0)return n;const i=this.innerCorners().filter(a=>this.freeAt(a.x,a.y));return Me.shuffle(i).slice(0,Math.min(e,i.length)).forEach((a,o)=>{t&&o===0&&this.put({kind:"carpet",x:a.x,y:a.y}),this.put({kind:"chest",chestTier:"normal",x:a.x,y:a.y}),n.push(a)}),n}placePotions(e){if(e<=0)return 0;const t=this.spots.filter(s=>s.dist>=1&&s.dist<=4&&this.freeAt(s.x,s.y)),n=t.length>=e?t:this.spots.filter(s=>this.freeAt(s.x,s.y)),i=Me.shuffle(n).slice(0,Math.min(e,n.length));for(const s of i)this.put({kind:"potion",potionTier:this.pickPotionTier(),x:s.x,y:s.y});return i.length}pickPotionTier(){const e=B.potions.potions,t=e.filter(s=>this.floorId>=s.minFloor&&this.floorId<=s.maxFloor),n=t.length>0?t:e,i=n.map((s,a)=>({tier:s.tier,weight:n.length-a}));return Me.pickWeighted(i,s=>s.weight).tier}placeRoomTorches(){const e=B.mapGen.content.roomTorches[this.room.type];if(!e)return;const t=Me.randInt(e[0],e[1]);if(t<=0)return;let n=0;for(const i of this.wallRing()){if(n>=t)break;this.grid[i.y]?.[i.x]===1&&(this.room.entities.some(s=>s.x===i.x&&s.y===i.y)||(this.put({kind:"torch",x:i.x,y:i.y}),n++))}}wallRing(){const e=this.room,t=[];for(let s=e.x;s<e.x+e.width;s++)t.push({x:s,y:e.y},{x:s,y:e.y+e.height-1});for(let s=e.y+1;s<e.y+e.height-1;s++)t.push({x:e.x,y:s},{x:e.x+e.width-1,y:s});const n=[{x:e.x,y:e.y},{x:e.x+e.width-1,y:e.y},{x:e.x,y:e.y+e.height-1},{x:e.x+e.width-1,y:e.y+e.height-1}],i=s=>Math.min(...n.map(a=>Math.abs(s.x-a.x)+Math.abs(s.y-a.y)));return t.sort((s,a)=>i(s)-i(a))}placePillars(){if(!(this.room.width-2<B.mapGen.decor.pillarMinRoomWidth))for(const e of this.innerCorners())this.freeAt(e.x,e.y)&&(this.put({kind:"pillar",x:e.x,y:e.y}),this.grid[e.y][e.x]=2)}placeWitchRoom(e){const t=this.room.centerX,n=this.room.centerY,i=this.mainPath()[0]??{x:t,y:n+1};if(this.freeAt(t,n))this.put({kind:"npc",npcId:"npc_witch",x:t,y:n});else{const u=[...this.spots].filter(d=>this.freeAt(d.x,d.y)).sort((d,f)=>f.dist-d.dist)[0];u&&this.put({kind:"npc",npcId:"npc_witch",x:u.x,y:u.y})}const s=Math.sign(i.x-t),a=Math.sign(i.y-n),o=s!==0?{x:t+s,y:n}:{x:t,y:n+(a||1)};this.freeAt(o.x,o.y)&&this.putBlocking("cauldron",o.x,o.y);const l=s!==0?[{x:0,y:1},{x:0,y:-1}]:[{x:1,y:0},{x:-1,y:0}];let c=0;for(const u of l){if(c>=e)break;const d=t+u.x*2,f=n+u.y*2;this.freeAt(d,f)&&(this.putBlocking("shelf",d,f),c++)}if(c<e)for(const u of Me.shuffle(this.innerCorners())){if(c>=e)break;this.freeAt(u.x,u.y)&&(this.putBlocking("shelf",u.x,u.y),c++)}const h=Me.shuffle(this.innerCorners()).sort((u,d)=>Math.abs(d.x-i.x)+Math.abs(d.y-i.y)-(Math.abs(u.x-i.x)+Math.abs(u.y-i.y)));for(const u of h)if(this.freeAt(u.x,u.y)){this.put({kind:"fountain",x:u.x,y:u.y});break}}bandFor(e){const t=this.room.depth;return e.find(n=>t<=n.maxDepth)??e[e.length-1]}validate(e,t){const n=[],i=B.mapGen.content.guard,s=()=>this.room.entities.some(a=>a.kind==="monster"||a.kind==="boss");if((e==="combat"||e==="elite")&&t.length>0&&(!s()||this.canBypass())){const a=this.mainPath(),o=a[Math.floor(a.length/2)]??{x:this.room.centerX,y:this.room.centerY};this.freeAt(o.x,o.y)?this.monsterAt(Me.pickWeighted(t,l=>l.weight).id,!1,o):n.push("可绕过且无空位补怪")}for(const a of this.room.entities.filter(o=>o.kind==="chest"))!this.room.entities.some(l=>(l.kind==="monster"||l.kind==="boss")&&Math.abs(l.x-a.x)+Math.abs(l.y-a.y)<=i.chestRadius)&&t.length>0&&this.guardAround(a.x,a.y,1,t,!1,1)===0&&n.push("宝箱无守护且无空位");for(const a of this.room.entities.filter(o=>o.kind==="stair"))!this.room.entities.some(l=>(l.kind==="monster"||l.kind==="boss")&&Math.abs(l.x-a.x)+Math.abs(l.y-a.y)<=i.stairRadius)&&t.length>0&&this.guardStair(1,t)===0&&n.push("楼梯无守护且无空位");return n}canBypass(){const e=this.mainPath(),t=this.room.entities.find(o=>o.kind==="stair")??e[e.length-1],n=e[0];if(!t||!n)return!1;const i=new Set(this.room.entities.filter(o=>o.kind==="monster"||o.kind==="boss"||o.kind==="pillar").map(o=>`${o.x},${o.y}`)),s=new Set([`${n.x},${n.y}`]),a=[n];for(;a.length>0;){const o=a.shift();if(o.x===t.x&&o.y===t.y)return!0;for(const[l,c]of ya){const h=o.x+l,u=o.y+c,d=`${h},${u}`;this.inRoom(h,u)&&this.grid[u]?.[h]===0&&(i.has(d)||s.has(d)||(s.add(d),a.push({x:h,y:u})))}}return!1}}const Ai=class Ai{constructor(){}static getInstance(){return Ai.instance||(Ai.instance=new Ai),Ai.instance}fill(e,t,n,i,s){const a=B.mapGen.content,o=B.monsters.monsters.filter(u=>u.category==="normal"),l=o.filter(u=>i>=u.floorMin&&i<=u.floorMax),c=(l.length>0?l:o).map(u=>({id:u.id,weight:u.weight}));for(const u of e){const d=new _u(u,n,i);switch(u.type){case"start":{s==="initial"&&d.put({kind:"npc",npcId:"npc_guide",x:u.centerX,y:u.y+1}),d.placePotions(Me.randInt(a.startRoom.potions[0],a.startRoom.potions[1]));break}case"end":{d.put({kind:"stair",x:u.centerX,y:u.centerY,targetFloor:i+1}),s==="initial"?(d.put({kind:"chest",chestTier:"normal",x:u.x+1,y:u.y+1}),d.guardStair(1,c)):s==="boss"?(d.put({kind:"chest",chestTier:"grand",x:u.x+1,y:u.y+1}),d.put({kind:"chest",chestTier:"grand",x:u.x+u.width-2,y:u.y+u.height-2})):(d.guardStair(Me.randInt(a.exitRoom.guards[0],a.exitRoom.guards[1]),c),d.placeCornerChests(Me.randInt(a.exitRoom.chests[0],a.exitRoom.chests[1]))),d.placePotions(Me.randInt(a.exitRoom.potions[0],a.exitRoom.potions[1]));break}case"rest":break;case"merchant":{d.put({kind:"npc",npcId:"npc_merchant",x:u.centerX,y:u.centerY}),d.placePotions(Me.randInt(a.merchantRoom.potions[0],a.merchantRoom.potions[1])),d.placeCornerChests(Me.randInt(a.merchantRoom.chests[0],a.merchantRoom.chests[1]));break}case"witch":{d.placeWitchRoom(Me.randInt(a.witchRoom.shelves[0],a.witchRoom.shelves[1]));break}case"chest":{const f=d.placeCornerChests(Me.randInt(a.treasureRoom.chests[0],a.treasureRoom.chests[1]),!0);let p=Me.randInt(a.treasureRoom.monsters[0],a.treasureRoom.monsters[1]);for(const v of f){if(p<=0)break;p-=d.guardAround(v.x,v.y,1,c,!1,1)}d.placePotions(Me.randInt(a.treasureRoom.potions[0],a.treasureRoom.potions[1]));break}case"combat":{const f=d.bandFor(a.combatByDepth),p=this.densityCap(u),v=Math.max(1,Math.min(Me.randInt(f.monsters[0],f.monsters[1]),p));d.blockPath(v,c,!1)===0&&d.placeMonsters(v,!1,c);const g=Me.randInt(f.elites[0],f.elites[1]);g>0&&d.placeMonsters(g,!0,c),d.placeCornerChests(Me.randInt(f.chests[0],f.chests[1])),d.placePotions(Me.randInt(f.potions[0],f.potions[1]));break}case"elite":{d.blockPath(1,c,!0)===0&&d.placeMonsters(1,!0,c),d.placeMonsters(Me.randInt(a.eliteRoom.monsters[0],a.eliteRoom.monsters[1]),!1,c);const f=d.placeCornerChests(Me.randInt(a.eliteRoom.chests[0],a.eliteRoom.chests[1]),!0);for(const p of f)d.guardAround(p.x,p.y,1,c,!1,1);d.placePotions(Me.randInt(a.eliteRoom.potions[0],a.eliteRoom.potions[1]));break}case"boss":{d.put({kind:"carpet",x:u.centerX,y:u.centerY}),d.put({kind:"boss",monsterId:"ancient_dragon",x:u.centerX,y:u.centerY}),d.guardAround(u.centerX,u.centerY,Me.randInt(a.bossRoom.elites[0],a.bossRoom.elites[1]),c,!0,2),d.placeCornerChests(Me.randInt(a.bossRoom.chests[0],a.bossRoom.chests[1])),d.placePotions(Me.randInt(a.bossRoom.potions[0],a.bossRoom.potions[1]));break}}if(d.placeRoomTorches(),u.type!=="witch"&&d.placePillars(),!(u.type==="end"&&(s==="initial"||s==="boss"))){const f=d.validate(u.type,c);f.length>0&&console.warn(`[ContentFiller] 房间 ${u.id}(${u.type}) 内容验证未通过：${f.join("、")}`)}}const h=B.mapGen.decor.torchCorridorEvery;for(const u of t)u.tiles.forEach((d,f)=>{if(f%h!==Math.floor(h/2))return;const p=n[d.y-1]?.[d.x]===1?{x:d.x,y:d.y-1}:n[d.y+1]?.[d.x]===1?{x:d.x,y:d.y+1}:null;p&&!this.entityAt(e,p.x,p.y)&&e.find(g=>g.id===u.fromRoomId)?.entities.push({id:Vt.next("ent"),kind:"torch",x:p.x,y:p.y})})}densityCap(e){const t=B.mapGen.content,n=(e.width-2)*(e.height-2);return n<=t.smallAreaMax?t.density.small:n<=t.mediumAreaMax?t.density.medium:t.density.large}entityAt(e,t,n){return e.some(i=>i.entities.some(s=>s.x===t&&s.y===n))}};O(Ai,"instance");let uo=Ai;const Mu=500,Ri=class Ri{constructor(){}static getInstance(){return Ri.instance||(Ri.instance=new Ri),Ri.instance}validate(e,t,n){const i=[],s=this.buildAdjacency(e,t),a=e[0],o=e[e.length-1],l=this.bfs(a.id,s);for(const h of e)(s.get(h.id)??[]).length===0&&i.push(`房间${h.id}无连接（孤立）`),l.has(h.id)||i.push(`房间${h.id}不可从起点到达`);let c=[];if(n){if(c=this.enumeratePaths(a.id,o.id,s),c.length<2)i.push(`起点到终点仅${c.length}条路径（要求≥2）`);else{let u=!1;for(let d=0;d<c.length&&!u;d++)for(let f=d+1;f<c.length&&!u;f++)Math.abs(c[d]-c[f])<=B.mapGen.path.maxLengthDiff&&(u=!0);u||i.push(`路径长度差均>${B.mapGen.path.maxLengthDiff}：[${c.join(",")}]`)}e.some(u=>(u.onPathA||u.onPathB)&&(u.type==="combat"||u.type==="elite"))||i.push("主干上没有战斗房间")}return{pass:i.length===0,errors:i,pathLengths:c}}bfs(e,t){const n=new Map([[e,0]]),i=[e];for(;i.length>0;){const s=i.shift(),a=n.get(s);for(const o of t.get(s)??[])n.has(o)||(n.set(o,a+1),i.push(o))}return n}enumeratePaths(e,t,n){const i=[],s=new Set([e]),a=(o,l)=>{if(o===t)return i.push(l),i.length>=Mu;for(const c of n.get(o)??[]){if(s.has(c))continue;s.add(c);const h=a(c,l+1);if(s.delete(c),h)return!0}return!1};return a(e,1),i}buildAdjacency(e,t){const n=new Map(e.map(i=>[i.id,[]]));for(const i of t)n.get(i.from)?.push(i.to),n.get(i.to)?.push(i.from);return n}};O(Ri,"instance");let fo=Ri;const Ci=class Ci{constructor(){O(this,"lastAttempts",1)}static getInstance(){return Ci.instance||(Ci.instance=new Ci),Ci.instance}generate(e){const t=B.mapGen.generation.maxAttempts;let n=[];for(let i=1;i<=t;i++){try{const s=this.tryGenerate(e);if(s)return this.lastAttempts=i,s}catch(s){n=[String(s)]}(i===5||i===20)&&Ft.warn(`[MapGen] 楼层${e} 第${i}次尝试失败：${n.join("; ")||"拓扑验证未通过"}`)}throw new Error(`楼层${e}生成失败（${t}次尝试）：${n.join("; ")}`)}tryGenerate(e){const t=oo.getInstance(),n=lo.getInstance(),i=co.getInstance(),s=ho.getInstance(),a=uo.getInstance(),o=fo.getInstance(),l=t.allocate(e),c=n.plan(l);if(!n.validateDiff(c))return null;const h=i.place(e,c);if(!h)return null;const u=h.rooms,d=h.grid,f=s.connect(u,d),p=f.connections,v=new Map(u.map(w=>[w.id,[]]));for(const w of p)v.get(w.from)?.push(w.to),v.get(w.to)?.push(w.from);const g=o.bfs(u[0].id,v);for(const w of u)w.depth=g.get(w.id)??0;const m=o.validate(u,p,l.kind==="normal");if(!m.pass){if(l.kind==="normal")return null;throw new Error(`特殊层校验失败: ${m.errors.join("; ")}`)}a.fill(u,f.corridors,d,e,l.kind);const S=u[0];return{floorId:e,kind:l.kind,rooms:u,corridors:f.corridors,connections:p,grid:d,width:d[0].length,height:d.length,entryX:S.centerX,entryY:S.centerY}}describe(e){const t=[];t.push(`=== 楼层 ${e.floorId}（${e.kind}） ${e.rooms.length}个房间 ${e.corridors.length}条走廊 ===`);for(const n of this.roomsSorted(e)){const i=n.onPathA?"A":n.onPathB?"B":n.mountedOn?"侧室":"-";t.push(`#${n.order} ${n.type.padEnd(8,"　")} 网格(${n.gx},${n.gy}) 世界(${n.x},${n.y}) ${n.width}x${n.height} 深${n.depth} 路径${i} 来源${n.fromDirection??"根"} 门${n.doors.length} 实体${n.entities.length}`)}return t.push(`入口: (${e.entryX},${e.entryY}) 路径数: 见验证器`),t.join(`
`)}roomsSorted(e){return[...e.rooms].sort((t,n)=>t.order-n.order)}};O(Ci,"instance");let ar=Ci;const Pi=class Pi{constructor(){}static getInstance(){return Pi.instance||(Pi.instance=new Pi),Pi.instance}enterFloor(e,t=!0){const n=Re.getInstance(),i=n.state.currentFloor,s=ar.getInstance().generate(e);He.getInstance().loadFloor(s),n.state.currentFloor=e,n.state.x=s.entryX,n.state.y=s.entryY;const a=He.getInstance().getRoomAt(s.entryX,s.entryY);return n.state.currentRoomId=a?.id??s.rooms[0].id,ee.emit("floorChanged",{fromFloor:i,toFloor:e}),t||Ft.debug(`[Floor] 直接载入楼层${e}`),s}restoreFloor(e){const t=Re.getInstance();He.getInstance().loadFloor(e),t.state.currentFloor=e.floorId;const n=He.getInstance().getRoomAt(t.state.x,t.state.y);t.state.currentRoomId=n?.id??e.rooms[0].id}enterPrefabFloor(e){const t=Re.getInstance(),n=t.state.currentFloor;He.getInstance().loadFloor(e),t.state.currentFloor=e.floorId,t.state.x=e.entryX,t.state.y=e.entryY;const i=He.getInstance().getRoomAt(e.entryX,e.entryY);return t.state.currentRoomId=i?.id??e.rooms[0].id,ee.emit("floorChanged",{fromFloor:n,toFloor:e.floorId}),Ft.debug(`[Floor] 载入预制楼层${e.floorId}`),e}};O(Pi,"instance");let ri=Pi;const Kl={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6},Ii=class Ii{constructor(){}static getInstance(){return Ii.instance||(Ii.instance=new Ii),Ii.instance}rollQuality(e){const t=B.equipment.qualityByFloor,n=t.find(s=>e>=s.minFloor&&e<=s.maxFloor)??t[t.length-1],i=Object.entries(n.weights);return Me.pickWeighted(i,([,s])=>s)[0]}rollEquipLevel(e,t){const n=B.equipment.equipLevelFormula,i=Math.floor(e*n.playerLevelFactor+t*n.floorFactor+Me.randInt(n.randomMin,n.randomMax));return Math.max(n.min,Math.min(n.max,i))}generate(e,t={}){const n=Re.getInstance(),i=t.floorId??n.state.currentFloor,s=t.forcedQuality??this.rollQuality(i),a=t.slot??(Me.chance(.5)?"weapon":"armor"),o=this.rollEquipLevel(n.state.level,i),l=this.rollBaseValue(a,s,o),c=a==="weapon"?l:0,h=a==="armor"?l:0,u=this.rollAffixes(s,o),d=B.equipment.quality[s],f=this.baseName(a,o),p=this.buildName(d.prefix,f,u),v=Math.round(d.basePrice*(1+o*.05)*(1+u.length*.15)),g=B.equipment.buyPriceRule,m=Math.max(g.min,Math.min(g.max,Math.round(v*g.sellMultiplier)));return{id:Vt.equipmentId(),slot:a,baseName:f,name:p,level:o,quality:s,affixes:u,attack:c,defense:h,sellPrice:v,buyPrice:m,source:e}}tutorialWeapon(){return this.generate("tutorial",{forcedQuality:"poor",slot:"weapon",floorId:1})}rollBaseValue(e,t,n){const i=e==="weapon"?B.equipment.weaponTable:B.equipment.armorTable,a=(i.find(h=>n>=h.minEquipLevel&&n<=h.maxEquipLevel)??i[i.length-1]).values;let o=a[t]??null;if(!o&&t==="mythic"){const h=a.legendary;if(h){const u=B.equipment.mythicFromLegendary;o=[Math.round(h[0]*u),Math.round(h[1]*u)]}}const l=B.equipment.qualityOrder;let c=l.indexOf(t);for(;!o&&c>0;)c-=1,o=a[l[c]]??null;return o||(o=[1,2]),Me.randInt(o[0],o[1])}rollAffixes(e,t){const n=B.equipment.quality[e];let i=n.affixCount;if(n.affixExtra)for(const o of n.affixExtra)t>=o.atEquipLevel&&(i+=o.add);i=Math.min(i,n.affixCountMax),e==="mythic"&&(i=B.equipment.affixSpecial.mythicAffixCount);const s=B.equipment.affixes.filter(o=>Kl[e]>=Kl[o.minQuality]);return s.length===0?[]:Me.shuffle(s).slice(0,i).map(o=>{const l=o.bands.find(h=>t<=h.maxEquipLevel)??o.bands[o.bands.length-1],c=Me.randInt(l.min,l.max);return{type:o.type,name:o.name,value:c,isPercent:o.isPercent}})}baseName(e,t){const n=e==="weapon"?B.equipment.baseNames.weapon:B.equipment.baseNames.armor;return(n.find(s=>t>=s.minEquipLevel&&t<=s.maxEquipLevel)??n[n.length-1]).names[0]}buildName(e,t,n){let i=e?`${e}${t}`:t;for(const s of n)i+=`·${s.name}`;return i}};O(Ii,"instance");let ji=Ii;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="185",yu=0,Zl=1,Su=2,Jr=1,oh=2,sr=3,ai=0,qt=1,En=2,An=0,Cs=1,Ps=2,Jl=3,Ql=4,bu=5,mi=100,Eu=101,wu=102,Tu=103,Au=104,Ru=200,Cu=201,Pu=202,Iu=203,po=204,mo=205,Lu=206,Du=207,Uu=208,Fu=209,Nu=210,Ou=211,Bu=212,ku=213,zu=214,go=0,vo=1,xo=2,Us=3,_o=4,Mo=5,yo=6,So=7,lh=0,Gu=1,Hu=2,Rn=0,hl=1,dl=2,ul=3,fl=4,pl=5,ml=6,gl=7,ch=300,es=301,Fs=302,Sa=303,ba=304,pa=306,or=1e3,Fn=1001,bo=1002,Pt=1003,Vu=1004,yr=1005,Nt=1006,Ea=1007,ti=1008,Jt=1009,hh=1010,dh=1011,lr=1012,vl=1013,Cn=1014,mn=1015,Qt=1016,xl=1017,_l=1018,cr=1020,uh=35902,fh=35899,ph=1021,mh=1022,gn=1023,kn=1026,Zi=1027,Ml=1028,yl=1029,ts=1030,Sl=1031,bl=1033,Qr=33776,jr=33777,ea=33778,ta=33779,Eo=35840,wo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Io=37488,Lo=37489,sa=37490,Do=37491,Uo=37808,Fo=37809,No=37810,Oo=37811,Bo=37812,ko=37813,zo=37814,Go=37815,Ho=37816,Vo=37817,Wo=37818,qo=37819,$o=37820,Xo=37821,Yo=36492,Ko=36494,Zo=36495,Jo=36283,Qo=36284,ra=36285,jo=36286,Wu=3200,el=0,qu=1,ei="",Ct="srgb",aa="srgb-linear",oa="linear",Qe="srgb",os=7680,jl=519,$u=512,Xu=513,Yu=514,El=515,Ku=516,Zu=517,wl=518,Ju=519,tl=35044,ec="300 es",Tn=2e3,hr=2001;function Qu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function la(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ju(){const r=la("canvas");return r.style.display="block",r}const tc={};function ca(...r){const e="THREE."+r.shift();console.log(e,...r)}function gh(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function De(...r){r=gh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function qe(...r){r=gh(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Is(...r){const e=r.join(" ");e in tc||(tc[e]=!0,De(...r))}function ef(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const tf={[go]:vo,[xo]:yo,[_o]:So,[Us]:Mo,[vo]:go,[yo]:xo,[So]:_o,[Mo]:Us};class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,nl=180/Math.PI;function si(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[r&255]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function nf(r,e){return(r%e+e)%e}function Ta(r,e,t){return(1-t)*r+t*e}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fl=class Fl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;let Ce=Fl;class Hs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],p=s[a+2],v=s[a+3];if(u!==v||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*v;g<0&&(d=-d,f=-f,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+v*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+p*o,u=u*m+v*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nl=class Nl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nl.prototype.isVector3=!0;let U=Nl;const Aa=new U,nc=new Hs,Ol=class Ol{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],S=i[1],w=i[4],y=i[7],T=i[2],b=i[5],R=i[8];return s[0]=a*v+o*S+l*T,s[3]=a*g+o*w+l*b,s[6]=a*m+o*y+l*R,s[1]=c*v+h*S+u*T,s[4]=c*g+h*w+u*b,s[7]=c*m+h*y+u*R,s[2]=d*v+f*S+p*T,s[5]=d*g+f*w+p*b,s[8]=d*m+f*y+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ol.prototype.isMatrix3=!0;let Fe=Ol;const Ra=new Fe,ic=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sf(){const r={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[aa]:{primaries:e,whitePoint:n,transfer:oa,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),r}const We=sf();function Nn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=la("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let af=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ca(i[a].image)):s.push(Ca(i[a]))}else s=Ca(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ca(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let of=0;const Pa=new U;class Bt extends is{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Fn,i=Fn,s=Nt,a=ti,o=gn,l=Jt,c=Bt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=si(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=ch;Bt.DEFAULT_ANISOTROPY=1;const Bl=class Bl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(f+1)/2,T=(m+1)/2,b=(h+d)/4,R=(u+v)/4,_=(p+g)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=R/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=_/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=R/s,i=_/s),this.set(n,i,s,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bl.prototype.isVector4=!0;let ht=Bl;class lf extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Bt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Tl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends lf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vh extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cf extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fa=class fa{constructor(e,t,n,i,s,a,o,l,c,h,u,d,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,f,p,v,g)}set(e,t,n,i,s,a,o,l,c,h,u,d,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,df)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Wn.crossVectors(n,Yt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Wn.crossVectors(n,Yt)),Wn.normalize(),Sr.crossVectors(Yt,Wn),i[0]=Wn.x,i[4]=Sr.x,i[8]=Yt.x,i[1]=Wn.y,i[5]=Sr.y,i[9]=Yt.y,i[2]=Wn.z,i[6]=Sr.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],S=n[3],w=n[7],y=n[11],T=n[15],b=i[0],R=i[4],_=i[8],A=i[12],I=i[1],C=i[5],F=i[9],X=i[13],J=i[2],k=i[6],Y=i[10],V=i[14],j=i[3],ne=i[7],fe=i[11],ve=i[15];return s[0]=a*b+o*I+l*J+c*j,s[4]=a*R+o*C+l*k+c*ne,s[8]=a*_+o*F+l*Y+c*fe,s[12]=a*A+o*X+l*V+c*ve,s[1]=h*b+u*I+d*J+f*j,s[5]=h*R+u*C+d*k+f*ne,s[9]=h*_+u*F+d*Y+f*fe,s[13]=h*A+u*X+d*V+f*ve,s[2]=p*b+v*I+g*J+m*j,s[6]=p*R+v*C+g*k+m*ne,s[10]=p*_+v*F+g*Y+m*fe,s[14]=p*A+v*X+g*V+m*ve,s[3]=S*b+w*I+y*J+T*j,s[7]=S*R+w*C+y*k+T*ne,s[11]=S*_+w*F+y*Y+T*fe,s[15]=S*A+w*X+y*V+T*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],S=l*f-c*d,w=o*f-c*u,y=o*d-l*u,T=a*f-c*h,b=a*d-l*h,R=a*u-o*h;return t*(v*S-g*w+m*y)-n*(p*S-g*T+m*b)+i*(p*w-v*T+m*R)-s*(p*y-v*b+g*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],S=t*o-n*a,w=t*l-i*a,y=t*c-s*a,T=n*l-i*o,b=n*c-s*o,R=i*c-s*l,_=h*v-u*p,A=h*g-d*p,I=h*m-f*p,C=u*g-d*v,F=u*m-f*v,X=d*m-f*g,J=S*X-w*F+y*C+T*I-b*A+R*_;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/J;return e[0]=(o*X-l*F+c*C)*k,e[1]=(i*F-n*X-s*C)*k,e[2]=(v*R-g*b+m*T)*k,e[3]=(d*b-u*R-f*T)*k,e[4]=(l*I-a*X-c*A)*k,e[5]=(t*X-i*I+s*A)*k,e[6]=(g*y-p*R-m*w)*k,e[7]=(h*R-d*y+f*w)*k,e[8]=(a*F-o*I+c*_)*k,e[9]=(n*I-t*F-s*_)*k,e[10]=(p*b-v*y+m*S)*k,e[11]=(u*y-h*b-f*S)*k,e[12]=(o*A-a*C-l*_)*k,e[13]=(t*C-n*A+i*_)*k,e[14]=(v*w-p*T-g*S)*k,e[15]=(h*T-u*w+d*S)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,p=s*u,v=a*h,g=a*u,m=o*u,S=l*c,w=l*h,y=l*u,T=n.x,b=n.y,R=n.z;return i[0]=(1-(v+m))*T,i[1]=(f+y)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+m))*b,i[6]=(g+S)*b,i[7]=0,i[8]=(p+w)*R,i[9]=(g-S)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=cs.set(i[0],i[1],i[2]).length();const o=cs.set(i[4],i[5],i[6]).length(),l=cs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),hn.copy(this);const c=1/a,h=1/o,u=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Tn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let p,v;if(l)p=s/(a-s),v=a*s/(a-s);else if(o===Tn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===hr)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Tn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,v;if(l)p=1/(a-s),v=a/(a-s);else if(o===Tn)p=-2/(a-s),v=-(a+s)/(a-s);else if(o===hr)p=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fa.prototype.isMatrix4=!0;let rt=fa;const cs=new U,hn=new rt,hf=new U(0,0,0),df=new U(1,1,1),Wn=new U,Sr=new U,Yt=new U,rc=new rt,ac=new Hs;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uf=0;const oc=new U,hs=new Hs,Pn=new rt,br=new U,$s=new U,ff=new U,pf=new Hs,lc=new U(1,0,0),cc=new U(0,1,0),hc=new U(0,0,1),dc={type:"added"},mf={type:"removed"},ds={type:"childadded",child:null},Ia={type:"childremoved",child:null};class _t extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new U,t=new oi,n=new Hs,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Fe}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt($s,br,this.up):Pn.lookAt(br,$s,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(Pn),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),ds.child=e,this.dispatchEvent(ds),ds.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mf),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new U(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gf={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Da(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=nf(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Da(a,s,e+1/3),this.g=Da(a,s,e),this.b=Da(a,s,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return We.workingToColorSpace(Ut.copy(this),e),Math.round($e(Ut.r*255,0,255))*65536+Math.round($e(Ut.g*255,0,255))*256+Math.round($e(Ut.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,s=Ut.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ct){We.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Er);const n=Ta(qn.h,Er.h,t),i=Ta(qn.s,Er.s,t),s=Ta(qn.l,Er.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new ke;ke.NAMES=xh;class vf extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new U,In=new U,Ua=new U,Ln=new U,us=new U,fs=new U,uc=new U,Fa=new U,Na=new U,Oa=new U,Ba=new ht,ka=new ht,za=new ht;class an{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),In.subVectors(n,t),Ua.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(In),l=dn.dot(Ua),c=In.dot(In),h=In.dot(Ua),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Ba.setScalar(0),ka.setScalar(0),za.setScalar(0),Ba.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),za.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ba,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(za,s.z),a}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),In.subVectors(e,t),dn.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return an.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;us.subVectors(i,n),fs.subVectors(s,n),Fa.subVectors(e,n);const l=us.dot(Fa),c=fs.dot(Fa);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,i);const h=us.dot(Na),u=fs.dot(Na);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(us,a);Oa.subVectors(e,s);const f=us.dot(Oa),p=fs.dot(Oa);if(p>=0&&f<=p)return t.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(fs,o);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return uc.subVectors(s,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(uc,o);const m=1/(g+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(us,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ss{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Tr.subVectors(this.max,Xs),ps.subVectors(e.a,Xs),ms.subVectors(e.b,Xs),gs.subVectors(e.c,Xs),$n.subVectors(ms,ps),Xn.subVectors(gs,ms),hi.subVectors(ps,gs);let t=[0,-$n.z,$n.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,$n.z,0,-$n.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-$n.y,$n.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!Ga(t,ps,ms,gs,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,ps,ms,gs,Tr))?!1:(Ar.crossVectors($n,Xn),t=[Ar.x,Ar.y,Ar.z],Ga(t,ps,ms,gs,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],un=new U,wr=new ss,ps=new U,ms=new U,gs=new U,$n=new U,Xn=new U,hi=new U,Xs=new U,Tr=new U,Ar=new U,di=new U;function Ga(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){di.fromArray(r,s);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const St=new U,Rr=new Ce;let xf=0;class on extends is{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _h extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mh extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _f=new ss,Ys=new U,Ha=new U;class gr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_f.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Ha)),this.expandByPoint(Ys.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mf=0;const en=new rt,Va=new _t,vs=new U,Kt=new ss,Ks=new ss,At=new U;class Gt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qu(e)?Mh:_h)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Kt.min,Ks.min),Kt.expandByPoint(At),At.addVectors(Kt.max,Ks.max),Kt.expandByPoint(At)):(Kt.expandByPoint(Ks.min),Kt.expandByPoint(Ks.max))}Kt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),At.add(vs)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new U,l[_]=new U;const c=new U,h=new U,u=new U,d=new Ce,f=new Ce,p=new Ce,v=new U,g=new U;function m(_,A,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),d.fromBufferAttribute(s,_),f.fromBufferAttribute(s,A),p.fromBufferAttribute(s,I),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const C=1/(f.x*p.y-p.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(C),o[_].add(v),o[A].add(v),o[I].add(v),l[_].add(g),l[A].add(g),l[I].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let _=0,A=S.length;_<A;++_){const I=S[_],C=I.start,F=I.count;for(let X=C,J=C+F;X<J;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const w=new U,y=new U,T=new U,b=new U;function R(_){T.fromBufferAttribute(i,_),b.copy(T);const A=o[_];w.copy(A),w.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(b,A);const C=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,C)}for(let _=0,A=S.length;_<A;++_){const I=S[_],C=I.start,F=I.count;for(let X=C,J=C+F;X<J;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new on(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new U;class ha{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ha(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Sf=0;class Vs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Cs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends Vs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const Zs=new U,_s=new U,Ms=new U,ys=new Ce,Js=new Ce,yh=new rt,Cr=new U,Qs=new U,Pr=new U,fc=new Ce,Wa=new Ce,pc=new Ce;class Ji extends _t{constructor(e=new ni){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yf(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new ha(n,3,0,!1)),xs.setAttribute("uv",new ha(n,2,3,!1))}this.geometry=xs,this.material=e,this.center=new Ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Ms.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Ir(Cr.set(-.5,-.5,0),Ms,a,_s,i,s),Ir(Qs.set(.5,-.5,0),Ms,a,_s,i,s),Ir(Pr.set(.5,.5,0),Ms,a,_s,i,s),fc.set(0,0),Wa.set(1,0),pc.set(1,1);let o=e.ray.intersectTriangle(Cr,Qs,Pr,!1,Zs);if(o===null&&(Ir(Qs.set(-.5,.5,0),Ms,a,_s,i,s),Wa.set(0,1),o=e.ray.intersectTriangle(Cr,Pr,Qs,!1,Zs),o===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||t.push({distance:l,point:Zs.clone(),uv:an.getInterpolation(Zs,Cr,Qs,Pr,fc,Wa,pc,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ir(r,e,t,n,i,s){ys.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Js.x=s*ys.x-i*ys.y,Js.y=i*ys.x+s*ys.y):Js.copy(ys),r.copy(e),r.x+=Js.x,r.y+=Js.y,r.applyMatrix4(yh)}const Un=new U,qa=new U,Lr=new U,Yn=new U,$a=new U,Dr=new U,Xa=new U;class Sh{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qa.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(qa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Yn.dot(this.direction),l=-Yn.dot(Lr),c=Yn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=s*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qa).addScaledVector(Lr,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,s){$a.subVectors(t,e),Dr.subVectors(n,e),Xa.crossVectors($a,Dr);let a=this.direction.dot(Xa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(Dr.crossVectors(Yn,Dr));if(l<0)return null;const c=o*this.direction.dot($a.cross(Yn));if(c<0||l+c>a)return null;const h=-o*Yn.dot(Xa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ds extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mc=new rt,ui=new Sh,Ur=new gr,gc=new U,Fr=new U,Nr=new U,Or=new U,Ya=new U,Br=new U,vc=new U,kr=new U;class ct extends _t{constructor(e=new Gt,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ya.fromBufferAttribute(u,e),a?Br.addScaledVector(Ya,h):Br.addScaledVector(Ya.sub(t),h))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(Ur.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Ur,gc)===null||ui.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(s).invert(),ui.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,T=w;y<T;y+=3){const b=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);i=zr(this,m,e,n,c,h,u,b,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);i=zr(this,a,e,n,c,h,u,S,w,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,T=w;y<T;y+=3){const b=y,R=y+1,_=y+2;i=zr(this,m,e,n,c,h,u,b,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const S=g,w=g+1,y=g+2;i=zr(this,a,e,n,c,h,u,S,w,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function bf(r,e,t,n,i,s,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ai,o),l===null)return null;kr.copy(o),kr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:r}}function zr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Fr),r.getVertexPosition(l,Nr),r.getVertexPosition(c,Or);const h=bf(r,e,t,n,Fr,Nr,Or,vc);if(h){const u=new U;an.getBarycoord(vc,Fr,Nr,Or,u),i&&(h.uv=an.getInterpolatedAttribute(i,o,l,c,u,new Ce)),s&&(h.uv1=an.getInterpolatedAttribute(s,o,l,c,u,new Ce)),a&&(h.normal=an.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};an.getNormal(Fr,Nr,Or,d.normal),h.face=d,h.barycoord=u}return h}class bh extends Bt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Pt,h=Pt,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends on{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new rt,_c=new rt,Gr=[],Mc=new ss,Ef=new rt,js=new ct,er=new gr;class tr extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ef)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ss),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Mc.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Mc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),er.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ss),_c.multiplyMatrices(n,Ss),js.matrixWorld=_c,js.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=s,l.object=this,t.push(l)}Gr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bh(new Float32Array(i*this.count),i,this.count,Ml,mn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ka=new U,wf=new U,Tf=new Fe;class Jn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ka.subVectors(n,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tf.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new gr,Af=new Ce(.5,.5),Hr=new U;class Rl{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],S=s[12],w=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-a,f-h,m-p,T-S).normalize(),i[1].setComponents(c+a,f+h,m+p,T+S).normalize(),i[2].setComponents(c+o,f+u,m+v,T+w).normalize(),i[3].setComponents(c-o,f-u,m-v,T-w).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,m-g,T-y).normalize();else if(i[4].setComponents(c-l,f-d,m-g,T-y).normalize(),t===Tn)i[5].setComponents(c+l,f+d,m+g,T+y).normalize();else if(t===hr)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=Af.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends Bt{constructor(e=[],t=es,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vr extends Bt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends Bt{constructor(e,t,n=Cn,i,s,a,o=Pt,l=Pt,c,h=kn,u=1){if(h!==kn&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rf extends Ns{constructor(e,t=Cn,n=es,i,s,a=Pt,o=Pt,l,c=kn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rt extends Gt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function p(v,g,m,S,w,y,T,b,R,_,A){const I=y/R,C=T/_,F=y/2,X=T/2,J=b/2,k=R+1,Y=_+1;let V=0,j=0;const ne=new U;for(let fe=0;fe<Y;fe++){const ve=fe*C-X;for(let ye=0;ye<k;ye++){const Ke=ye*I-F;ne[v]=Ke*S,ne[g]=ve*w,ne[m]=J,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[m]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(ye/R),u.push(1-fe/_),V+=1}}for(let fe=0;fe<_;fe++)for(let ve=0;ve<R;ve++){const ye=d+ve+k*fe,Ke=d+ve+k*(fe+1),ut=d+(ve+1)+k*(fe+1),Ze=d+(ve+1)+k*fe;l.push(ye,Ke,Ze),l.push(Ke,ut,Ze),j+=6}o.addGroup(f,j,A),f+=j,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cl extends Gt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function S(){const y=new U,T=new U;let b=0;const R=(t-e)/n;for(let _=0;_<=s;_++){const A=[],I=_/s,C=I*(t-e)+e;for(let F=0;F<=i;F++){const X=F/i,J=X*l+o,k=Math.sin(J),Y=Math.cos(J);T.x=C*k,T.y=-I*n+g,T.z=C*Y,u.push(T.x,T.y,T.z),y.set(k,R,Y).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-I),A.push(p++)}v.push(A)}for(let _=0;_<i;_++)for(let A=0;A<s;A++){const I=v[A][_],C=v[A+1][_],F=v[A+1][_+1],X=v[A][_+1];(e>0||A!==0)&&(h.push(I,C,X),b+=3),(t>0||A!==s-1)&&(h.push(C,F,X),b+=3)}c.addGroup(m,b,0),m+=b}function w(y){const T=p,b=new Ce,R=new U;let _=0;const A=y===!0?e:t,I=y===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*I,0),d.push(0,I,0),f.push(.5,.5),p++;const C=p;for(let F=0;F<=i;F++){const J=F/i*l+o,k=Math.cos(J),Y=Math.sin(J);R.x=A*Y,R.y=g*I,R.z=A*k,u.push(R.x,R.y,R.z),d.push(0,I,0),b.x=k*.5+.5,b.y=Y*.5*I+.5,f.push(b.x,b.y),p++}for(let F=0;F<i;F++){const X=T+F,J=C+F;y===!0?h.push(J,J+1,X):h.push(J+1,J,X),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xr extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const S=m*d-a;for(let w=0;w<c;w++){const y=w*u-s;p.push(y,-S,0),v.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const w=S+c*m,y=S+c*(m+1),T=S+1+c*(m+1),b=S+1+c*m;f.push(w,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pl extends Gt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new U,p=new Ce;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=s+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const S=m+g,w=S,y=S+n+1,T=S+n+2,b=S+1;o.push(w,y,b),o.push(y,T,b)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Il extends Gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const S=[],w=m/n,y=a+w*o,T=e*Math.cos(y),b=Math.sqrt(e*e-T*T);let R=0;m===0&&a===0?R=.5/t:m===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const A=_/t,I=i+A*s;u.x=-b*Math.cos(I),u.y=T,u.z=b*Math.sin(I),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+R,1-w),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const w=h[m][S+1],y=h[m][S],T=h[m+1][S],b=h[m+1][S+1];(m!==0||a>0)&&f.push(w,y,b),(m!==n-1||l<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ll extends Gt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],u=[],d=new U,f=new U,p=new U;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let m=0;m<=i;m++){const S=m/i*s;f.x=(e+t*Math.cos(g))*Math.cos(S),f.y=(e+t*Math.cos(g))*Math.sin(S),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){const m=(i+1)*v+g-1,S=(i+1)*(v-1)+g-1,w=(i+1)*(v-1)+g,y=(i+1)*v+g;l.push(m,S,y),l.push(S,w,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(yc(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yc(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zt(r){const e={};for(let t=0;t<r.length;t++){const n=Os(r[t]);for(const i in n)e[i]=n[i]}return e}function yc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Cf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Th(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const dr={clone:Os,merge:zt};var Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ah extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tn extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lf extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Df extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dl extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Za=new rt,Sc=new U,bc=new U;class Rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vr=new U,Wr=new Hs,Mn=new U;class Ch extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vr,Wr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Wr,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vr,Wr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Wr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new U,Ec=new Ce,wc=new Ce;class Zt extends Ch{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,wc),t.subVectors(wc,Ec)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Uf extends Rh{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ja extends Dl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ma extends Ch{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ff extends Rh{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nf extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Ff}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Of extends Dl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const bs=-90,Es=1;class Bf extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(bs,Es,e,t);i.layers=this.layers,this.add(i);const s=new Zt(bs,Es,e,t);s.layers=this.layers,this.add(s);const a=new Zt(bs,Es,e,t);a.layers=this.layers,this.add(a);const o=new Zt(bs,Es,e,t);o.layers=this.layers,this.add(o);const l=new Zt(bs,Es,e,t);l.layers=this.layers,this.add(l);const c=new Zt(bs,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class kf extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Gf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Gf(){this._document.hidden===!1&&this.reset()}const Tc=new rt;class Hf{constructor(e,t,n=0,i=1/0){this.ray=new Sh(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tc),this}intersectObject(e,t=!0,n=[]){return il(e,this,n,t),n.sort(Ac),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)il(e[i],this,n,t);return n.sort(Ac),n}}function Ac(r,e){return r.distance-e.distance}function il(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)il(s[a],e,t,!0)}}const kl=class kl{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};kl.prototype.isMatrix2=!0;let Rc=kl;function Cc(r,e,t,n){const i=Vf(n);switch(t){case ph:return r*e;case Ml:return r*e/i.components*i.byteLength;case yl:return r*e/i.components*i.byteLength;case ts:return r*e*2/i.components*i.byteLength;case Sl:return r*e*2/i.components*i.byteLength;case mh:return r*e*3/i.components*i.byteLength;case gn:return r*e*4/i.components*i.byteLength;case bl:return r*e*4/i.components*i.byteLength;case Qr:case jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ao:return Math.max(r,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(r,8)*Math.max(e,8)/2;case Ro:case Co:case Io:case Lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Po:case sa:case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Ko:case Zo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jo:case Qo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ra:case jo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vf(r){switch(r){case Jt:case hh:return{byteLength:1,components:1};case lr:case dh:case Qt:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case Cn:case vl:case mn:return{byteLength:4,components:1};case uh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ph(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wf(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Vp=`uniform sampler2D dfgLUT;
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
}`,Wp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,hg=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,xg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:qf,alphahash_pars_fragment:$f,alphamap_fragment:Xf,alphamap_pars_fragment:Yf,alphatest_fragment:Kf,alphatest_pars_fragment:Zf,aomap_fragment:Jf,aomap_pars_fragment:Qf,batching_pars_vertex:jf,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:dp,color_pars_vertex:up,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:vp,displacementmap_vertex:xp,emissivemap_fragment:_p,emissivemap_pars_fragment:Mp,colorspace_fragment:yp,colorspace_pars_fragment:Sp,envmap_fragment:bp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:wp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Op,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Fp,lights_pars_begin:Np,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:zp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:qp,lights_fragment_end:$p,lightprobes_pars_fragment:Xp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:Qp,map_pars_fragment:jp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:dm,normal_pars_vertex:um,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:xm,opaque_fragment:_m,packing:Mm,premultiplied_alpha_fragment:ym,project_vertex:Sm,dithering_fragment:bm,dithering_pars_fragment:Em,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Fm,specularmap_pars_fragment:Nm,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:zm,uv_pars_fragment:Gm,uv_pars_vertex:Hm,uv_vertex:Vm,worldpos_vertex:Wm,background_vert:qm,background_frag:$m,backgroundCube_vert:Xm,backgroundCube_frag:Ym,cube_vert:Km,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distance_vert:jm,distance_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:dg,meshnormal_frag:ug,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:vg,meshtoon_frag:xg,points_vert:_g,points_frag:Mg,shadow_vert:yg,shadow_frag:Sg,sprite_vert:bg,sprite_frag:Eg},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},bn={basic:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:zt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:zt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:zt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:zt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:zt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:zt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:zt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:zt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:zt([ue.common,ue.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:zt([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};bn.physical={uniforms:zt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const qr={r:0,b:0,g:0},wg=new rt,Ih=new Fe;Ih.set(-1,0,0,0,1,0,0,0,1);function Tg(r,e,t,n,i,s){const a=new ke(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const y=S.backgroundBlurriness>0;w=e.get(w,y)}return w}function p(S){let w=!1;const y=f(S);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(S,w){const y=f(w);y&&(y.isCubeTexture||y.mapping===pa)?(c===void 0&&(c=new ct(new Rt(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Os(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ih),c.material.toneMapped=We.getTransfer(y.colorSpace)!==Qe,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ct(new xr(2,2),new Ot({name:"BackgroundMaterial",uniforms:Os(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=We.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(qr,Th(r)),t.buffers.color.setClear(qr.r,qr.g,qr.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:v,dispose:m}}function Ag(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(C,F,X,J,k){let Y=!1;const V=u(C,J,X,F);s!==V&&(s=V,c(s.object)),Y=f(C,J,X,k),Y&&p(C,J,X,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(C,F,X,J),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(C){return r.bindVertexArray(C)}function h(C){return r.deleteVertexArray(C)}function u(C,F,X,J){const k=J.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const V=C.isInstancedMesh===!0?C.id:0;let j=Y[V];j===void 0&&(j={},Y[V]=j);let ne=j[X.id];ne===void 0&&(ne={},j[X.id]=ne);let fe=ne[k];return fe===void 0&&(fe=d(l()),ne[k]=fe),fe}function d(C){const F=[],X=[],J=[];for(let k=0;k<t;k++)F[k]=0,X[k]=0,J[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:J,object:C,attributes:{},index:null}}function f(C,F,X,J){const k=s.attributes,Y=F.attributes;let V=0;const j=X.getAttributes();for(const ne in j)if(j[ne].location>=0){const ve=k[ne];let ye=Y[ne];if(ye===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;V++}return s.attributesNum!==V||s.index!==J}function p(C,F,X,J){const k={},Y=F.attributes;let V=0;const j=X.getAttributes();for(const ne in j)if(j[ne].location>=0){let ve=Y[ne];ve===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),k[ne]=ye,V++}s.attributes=k,s.attributesNum=V,s.index=J}function v(){const C=s.newAttributes;for(let F=0,X=C.length;F<X;F++)C[F]=0}function g(C){m(C,0)}function m(C,F){const X=s.newAttributes,J=s.enabledAttributes,k=s.attributeDivisors;X[C]=1,J[C]===0&&(r.enableVertexAttribArray(C),J[C]=1),k[C]!==F&&(r.vertexAttribDivisor(C,F),k[C]=F)}function S(){const C=s.newAttributes,F=s.enabledAttributes;for(let X=0,J=F.length;X<J;X++)F[X]!==C[X]&&(r.disableVertexAttribArray(X),F[X]=0)}function w(C,F,X,J,k,Y,V){V===!0?r.vertexAttribIPointer(C,F,X,k,Y):r.vertexAttribPointer(C,F,X,J,k,Y)}function y(C,F,X,J){v();const k=J.attributes,Y=X.getAttributes(),V=F.defaultAttributeValues;for(const j in Y){const ne=Y[j];if(ne.location>=0){let fe=k[j];if(fe===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const ve=fe.normalized,ye=fe.itemSize,Ke=e.get(fe);if(Ke===void 0)continue;const ut=Ke.buffer,Ze=Ke.type,Q=Ke.bytesPerElement,ae=Ze===r.INT||Ze===r.UNSIGNED_INT||fe.gpuType===vl;if(fe.isInterleavedBufferAttribute){const ie=fe.data,Ue=ie.stride,Ne=fe.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ne.locationSize;Ie++)m(ne.location+Ie,ie.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<ne.locationSize;Ie++)g(ne.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,ut);for(let Ie=0;Ie<ne.locationSize;Ie++)w(ne.location+Ie,ye/ne.locationSize,Ze,ve,Ue*Q,(Ne+ye/ne.locationSize*Ie)*Q,ae)}else{if(fe.isInstancedBufferAttribute){for(let ie=0;ie<ne.locationSize;ie++)m(ne.location+ie,fe.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ie=0;ie<ne.locationSize;ie++)g(ne.location+ie);r.bindBuffer(r.ARRAY_BUFFER,ut);for(let ie=0;ie<ne.locationSize;ie++)w(ne.location+ie,ye/ne.locationSize,Ze,ve,ye*Q,ye/ne.locationSize*ie*Q,ae)}}else if(V!==void 0){const ve=V[j];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(ne.location,ve);break;case 3:r.vertexAttrib3fv(ne.location,ve);break;case 4:r.vertexAttrib4fv(ne.location,ve);break;default:r.vertexAttrib1fv(ne.location,ve)}}}}S()}function T(){A();for(const C in n){const F=n[C];for(const X in F){const J=F[X];for(const k in J){const Y=J[k];for(const V in Y)h(Y[V].object),delete Y[V];delete J[k]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const X in F){const J=F[X];for(const k in J){const Y=J[k];for(const V in Y)h(Y[V].object),delete Y[V];delete J[k]}}delete n[C.id]}function R(C){for(const F in n){const X=n[F];for(const J in X){const k=X[J];if(k[C.id]===void 0)continue;const Y=k[C.id];for(const V in Y)h(Y[V].object),delete Y[V];delete k[C.id]}}}function _(C){for(const F in n){const X=n[F],J=C.isInstancedMesh===!0?C.id:0,k=X[J];if(k!==void 0){for(const Y in k){const V=k[Y];for(const j in V)h(V[j].object),delete V[j];delete k[Y]}delete X[J],Object.keys(X).length===0&&delete n[F]}}}function A(){I(),a=!0,s!==i&&(s=i,c(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function Rg(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Cg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==gn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!_)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:b}}function Pg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Jn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{const S=s?0:n,w=S*4;let y=m.clippingState||null;l.value=y,y=h(p,d,w,f);for(let T=0;T!==w;++T)y[T]=t[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=f;w!==v;++w,y+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const ii=4,Pc=[.125,.215,.35,.446,.526,.582],gi=20,Ig=256,nr=new ma,Ic=new ke;let Qa=null,ja=0,eo=0,to=!1;const Lg=new U;class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Lg}=s;Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,ja,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Qt,format:gn,colorSpace:aa,depthBuffer:!1},i=Dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Dg(s)),this._blurMaterial=Fg(s,e,t),this._ggxMaterial=Ug(s,e,t)}return i}_compileMaterial(e){const t=new ct(new Gt,e);this._renderer.compile(t,nr)}_sceneToCubeUV(e,t,n,i,s){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ic),u.toneMapping=Rn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Rt,new Ds({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(Ic),m=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const T=this._cubeSize;ws(i,y*T,w>2?T:0,T,T),u.setRenderTarget(i),m&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===Fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-ii?n-p+ii:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,ws(s,g,m,3*v,2*v),i.setRenderTarget(s),i.render(o,nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ws(e,g,m,3*v,2*v),i.setRenderTarget(e),i.render(o,nr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*gi-1),v=s/p,g=isFinite(s)?1+Math.floor(h*v):gi;g>gi&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gi}`);const m=[];let S=0;for(let R=0;R<gi;++R){const _=R/v,A=Math.exp(-_*_/2);m.push(A),R===0?S+=A:R<g&&(S+=2*A)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-n;const y=this._sizeLods[i],T=3*y*(i>w-ii?i-w+ii:0),b=4*(this._cubeSize-y);ws(t,T,b,3*y,2*y),l.setRenderTarget(t),l.render(u,nr)}}function Dg(r){const e=[],t=[],n=[];let i=r;const s=r-ii+1+Pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ii?l=Pc[a-r+ii-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,S=new Float32Array(v*p*f),w=new Float32Array(g*p*f),y=new Float32Array(m*p*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,_=b>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];S.set(A,v*p*b),w.set(d,g*p*b);const I=[b,b,b,b,b,b];y.set(I,m*p*b)}const T=new Gt;T.setAttribute("position",new on(S,v)),T.setAttribute("uv",new on(w,g)),T.setAttribute("faceIndex",new on(y,m)),n.push(new ct(T,null)),i>ii&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Dc(r,e,t){const n=new $t(r,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ug(r,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fg(r,e,t){const n=new Float32Array(gi),i=new U(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ga(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Uc(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Fc(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}class Lh extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rt(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:An});s.uniforms.tEquirect.value=t;const a=new ct(i,s),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=Nt),new Bf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Ng(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Sa||f===ba)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const v=new Lh(p.height);return v.fromEquirectangularTexture(r,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===Sa||f===ba,v=f===es||f===Fs;if(p||v){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Lc(r)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Lc(r)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Sa?d.mapping=es:f===ba&&(d.mapping=Fs),d}function l(d){let f=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Og(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Is("WebGLRenderer: "+n+" extension not supported."),i}}}function Bg(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const S=f.array;v=f.version;for(let w=0,y=S.length;w<y;w+=3){const T=S[w+0],b=S[w+1],R=S[w+2];d.push(T,b,b,R,R,T)}}else{const S=p.array;v=p.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const T=w+0,b=w+1,R=w+2;d.push(T,b,b,R,R,T)}}const g=new(p.count>=65535?Mh:_h)(d,1);g.version=v;const m=s.get(u);m&&e.remove(m),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function kg(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gg(r,e,t){const n=new WeakMap,i=new ht;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};var f=I;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let T=o.attributes.position.count*y,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*b*4*u),_=new vh(R,T,b,u);_.type=mn,_.needsUpdate=!0;const A=y*4;for(let C=0;C<u;C++){const F=m[C],X=S[C],J=w[C],k=T*b*4*C;for(let Y=0;Y<F.count;Y++){const V=Y*A;p===!0&&(i.fromBufferAttribute(F,Y),R[k+V+0]=i.x,R[k+V+1]=i.y,R[k+V+2]=i.z,R[k+V+3]=0),v===!0&&(i.fromBufferAttribute(X,Y),R[k+V+4]=i.x,R[k+V+5]=i.y,R[k+V+6]=i.z,R[k+V+7]=0),g===!0&&(i.fromBufferAttribute(J,Y),R[k+V+8]=i.x,R[k+V+9]=i.y,R[k+V+10]=i.z,R[k+V+11]=J.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Ce(T,b)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Hg(r,e,t,n,i){let s=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Vg={[hl]:"LINEAR_TONE_MAPPING",[dl]:"REINHARD_TONE_MAPPING",[ul]:"CINEON_TONE_MAPPING",[fl]:"ACES_FILMIC_TONE_MAPPING",[ml]:"AGX_TONE_MAPPING",[gl]:"NEUTRAL_TONE_MAPPING",[pl]:"CUSTOM_TONE_MAPPING"};function Wg(r,e,t,n,i,s){const a=new $t(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new Ns(e,t):void 0}),o=new $t(e,t,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),l=new Gt;l.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new dt([0,2,0,0,2,0],2));const c=new Ah({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ct(l,c),u=new ma(-1,1,1,-1,0,1);let d=null,f=null,p=!1,v,g=null,m=[],S=!1;this.setSize=function(w,y){a.setSize(w,y),o.setSize(w,y);for(let T=0;T<m.length;T++){const b=m[T];b.setSize&&b.setSize(w,y)}},this.setEffects=function(w){m=w,S=m.length>0&&m[0].isRenderPass===!0;const y=a.width,T=a.height;for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(y,T)}},this.begin=function(w,y){if(p||w.toneMapping===Rn&&m.length===0)return!1;if(g=y,y!==null){const T=y.width,b=y.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return S===!1&&w.setRenderTarget(a),v=w.toneMapping,w.toneMapping=Rn,!0},this.hasRenderPass=function(){return S},this.end=function(w,y){w.toneMapping=v,p=!0;let T=a,b=o;for(let R=0;R<m.length;R++){const _=m[R];if(_.enabled!==!1&&(_.render(w,b,T,y),_.needsSwap!==!1)){const A=T;T=b,b=A}}if(d!==w.outputColorSpace||f!==w.toneMapping){d=w.outputColorSpace,f=w.toneMapping,c.defines={},We.getTransfer(d)===Qe&&(c.defines.SRGB_TRANSFER="");const R=Vg[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(g),w.render(h,u),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Dh=new Bt,sl=new Ns(1,1),Uh=new vh,Fh=new cf,Nh=new Eh,Nc=[],Oc=[],Bc=new Float32Array(16),kc=new Float32Array(9),zc=new Float32Array(4);function Ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Nc[i];if(s===void 0&&(s=new Float32Array(i),Nc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function va(r,e){let t=Oc[e];t===void 0&&(t=new Int32Array(e),Oc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $g(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function Kg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;zc.set(n),r.uniformMatrix2fv(this.addr,!1,zc),wt(t,n)}}function Zg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;kc.set(n),r.uniformMatrix3fv(this.addr,!1,kc),wt(t,n)}}function Jg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Bc.set(n),r.uniformMatrix4fv(this.addr,!1,Bc),wt(t,n)}}function Qg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function n0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function i0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function s0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function r0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function a0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(sl.compareFunction=t.isReversedDepthBuffer()?wl:El,s=sl):s=Dh,t.setTexture2D(e||s,i)}function o0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fh,i)}function l0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nh,i)}function c0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uh,i)}function h0(r){switch(r){case 5126:return qg;case 35664:return $g;case 35665:return Xg;case 35666:return Yg;case 35674:return Kg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function d0(r,e){r.uniform1fv(this.addr,e)}function u0(r,e){const t=Ws(e,this.size,2);r.uniform2fv(this.addr,t)}function f0(r,e){const t=Ws(e,this.size,3);r.uniform3fv(this.addr,t)}function p0(r,e){const t=Ws(e,this.size,4);r.uniform4fv(this.addr,t)}function m0(r,e){const t=Ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function g0(r,e){const t=Ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function v0(r,e){const t=Ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function x0(r,e){r.uniform1iv(this.addr,e)}function _0(r,e){r.uniform2iv(this.addr,e)}function M0(r,e){r.uniform3iv(this.addr,e)}function y0(r,e){r.uniform4iv(this.addr,e)}function S0(r,e){r.uniform1uiv(this.addr,e)}function b0(r,e){r.uniform2uiv(this.addr,e)}function E0(r,e){r.uniform3uiv(this.addr,e)}function w0(r,e){r.uniform4uiv(this.addr,e)}function T0(r,e,t){const n=this.cache,i=e.length,s=va(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=sl:a=Dh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function A0(r,e,t){const n=this.cache,i=e.length,s=va(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fh,s[a])}function R0(r,e,t){const n=this.cache,i=e.length,s=va(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nh,s[a])}function C0(r,e,t){const n=this.cache,i=e.length,s=va(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Uh,s[a])}function P0(r){switch(r){case 5126:return d0;case 35664:return u0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return v0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return M0;case 35669:case 35673:return y0;case 5125:return S0;case 36294:return b0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}}class D0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Gc(r,e){r.seq.push(e),r.map[e.id]=e}function U0(r,e,t){const n=r.name,i=n.length;for(no.lastIndex=0;;){const s=no.exec(n),a=no.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gc(t,c===void 0?new I0(o,r,e):new L0(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new D0(o),Gc(t,u)),t=u}}}class na{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);U0(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Hc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const F0=37297;let N0=0;function O0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Vc=new Fe;function B0(r){We._getMatrix(Vc,We.workingColorSpace,r);const e=`mat3( ${Vc.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case oa:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+O0(r.getShaderSource(e),o)}else return s}function k0(r,e){const t=B0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z0={[hl]:"Linear",[dl]:"Reinhard",[ul]:"Cineon",[fl]:"ACESFilmic",[ml]:"AgX",[gl]:"Neutral",[pl]:"Custom"};function G0(r,e){const t=z0[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new U;function H0(){We.getLuminanceCoefficients($r);const r=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function W0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function rr(r){return r!==""}function qc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $c(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(r){return r.replace($0,Y0)}const X0=new Map;function Y0(r,e){let t=ze[e];if(t===void 0){const n=X0.get(e);if(n!==void 0)t=ze[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rl(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(r){return r.replace(K0,Z0)}function Z0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const J0={[Jr]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Q0(r){return J0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j0={[es]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function ev(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":j0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const tv={[Fs]:"ENVMAP_MODE_REFRACTION"};function nv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tv[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iv={[lh]:"ENVMAP_BLENDING_MULTIPLY",[Gu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function sv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":iv[r.combine]||"ENVMAP_BLENDING_NONE"}function rv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function av(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q0(t),c=ev(t),h=nv(t),u=sv(t),d=rv(t),f=V0(t),p=W0(s),v=i.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(g=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[Yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Rn?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=rl(a),a=qc(a,t),a=$c(a,t),o=rl(o),o=qc(o,t),o=$c(o,t),a=Xc(a),o=Xc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=S+g+a,y=S+m+o,T=Hc(i,i.VERTEX_SHADER,w),b=Hc(i,i.FRAGMENT_SHADER,y);i.attachShader(v,T),i.attachShader(v,b),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(C){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",X=i.getShaderInfoLog(T)||"",J=i.getShaderInfoLog(b)||"",k=F.trim(),Y=X.trim(),V=J.trim();let j=!0,ne=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,T,b);else{const fe=Wc(i,T,"vertex"),ve=Wc(i,b,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+fe+`
`+ve)}else k!==""?De("WebGLProgram: Program Info Log:",k):(Y===""||V==="")&&(ne=!1);ne&&(C.diagnostics={runnable:j,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:V,prefix:m}})}i.deleteShader(T),i.deleteShader(b),_=new na(i,v),A=q0(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(v,F0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let ov=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function hv(r){return r===ts||r===sa||r===ra}function dv(r,e,t,n,i,s){const a=new Al,o=new lv,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,A,I,C,F,X){const J=C.fog,k=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||Y,V),ne=j&&j.mapping===pa?j.image.height:null,fe=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ye=ve!==void 0?ve.length:0;let Ke=0;k.morphAttributes.position!==void 0&&(Ke=1),k.morphAttributes.normal!==void 0&&(Ke=2),k.morphAttributes.color!==void 0&&(Ke=3);let ut,Ze,Q,ae;if(fe){const Se=bn[fe];ut=Se.vertexShader,Ze=Se.fragmentShader}else{ut=_.vertexShader,Ze=_.fragmentShader;const Se=o.getVertexShaderStage(_),pt=o.getFragmentShaderStage(_);o.update(_,Se,pt),Q=Se.id,ae=pt.id}const ie=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,gt=!!_.map,Ve=!!_.matcap,nt=!!j,Je=!!_.aoMap,Xe=!!_.lightMap,Mt=!!_.bumpMap&&_.wireframe===!1,bt=!!_.normalMap,Tt=!!_.displacementMap,It=!!_.emissiveMap,ft=!!_.metalnessMap,yt=!!_.roughnessMap,L=_.anisotropy>0,Ht=_.clearcoat>0,je=_.dispersion>0,E=_.iridescence>0,x=_.sheen>0,N=_.transmission>0,H=L&&!!_.anisotropyMap,q=Ht&&!!_.clearcoatMap,se=Ht&&!!_.clearcoatNormalMap,oe=Ht&&!!_.clearcoatRoughnessMap,$=E&&!!_.iridescenceMap,Z=E&&!!_.iridescenceThicknessMap,le=x&&!!_.sheenColorMap,we=x&&!!_.sheenRoughnessMap,de=!!_.specularMap,ce=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Le=N&&!!_.transmissionMap,Oe=N&&!!_.thicknessMap,P=!!_.gradientMap,re=!!_.alphaMap,K=_.alphaTest>0,he=!!_.alphaHash,ge=!!_.extensions;let te=Rn;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=r.toneMapping);const Ee={shaderID:fe,shaderType:_.type,shaderName:_.name,vertexShader:ut,fragmentShader:Ze,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:Ve,envMap:nt,envMapMode:nt&&j.mapping,envMapCubeUVHeight:ne,aoMap:Je,lightMap:Xe,bumpMap:Mt,normalMap:bt,displacementMap:Tt,emissiveMap:It,normalMapObjectSpace:bt&&_.normalMapType===qu,normalMapTangentSpace:bt&&_.normalMapType===el,packedNormalMap:bt&&_.normalMapType===el&&hv(_.normalMap.format),metalnessMap:ft,roughnessMap:yt,anisotropy:L,anisotropyMap:H,clearcoat:Ht,clearcoatMap:q,clearcoatNormalMap:se,clearcoatRoughnessMap:oe,dispersion:je,iridescence:E,iridescenceMap:$,iridescenceThicknessMap:Z,sheen:x,sheenColorMap:le,sheenRoughnessMap:we,specularMap:de,specularColorMap:ce,specularIntensityMap:Pe,transmission:N,transmissionMap:Le,thicknessMap:Oe,gradientMap:P,opaque:_.transparent===!1&&_.blending===Cs&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:K,alphaHash:he,combine:_.combine,mapUv:gt&&p(_.map.channel),aoMapUv:Je&&p(_.aoMap.channel),lightMapUv:Xe&&p(_.lightMap.channel),bumpMapUv:Mt&&p(_.bumpMap.channel),normalMapUv:bt&&p(_.normalMap.channel),displacementMapUv:Tt&&p(_.displacementMap.channel),emissiveMapUv:It&&p(_.emissiveMap.channel),metalnessMapUv:ft&&p(_.metalnessMap.channel),roughnessMapUv:yt&&p(_.roughnessMap.channel),anisotropyMapUv:H&&p(_.anisotropyMap.channel),clearcoatMapUv:q&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(_.sheenRoughnessMap.channel),specularMapUv:de&&p(_.specularMap.channel),specularColorMapUv:ce&&p(_.specularColorMap.channel),specularIntensityMapUv:Pe&&p(_.specularIntensityMap.channel),transmissionMapUv:Le&&p(_.transmissionMap.channel),thicknessMapUv:Oe&&p(_.thicknessMap.channel),alphaMapUv:re&&p(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(bt||L),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(gt||re),fog:!!J,useFog:_.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ke,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===Qe,decodeVideoTextureEmissive:It&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===Qe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)A.push(I),A.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(A,_),S(A,_),A.push(r.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function m(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const A=f[_.type];let I;if(A){const C=bn[A];I=dr.clone(C.uniforms)}else I=_.uniforms;return I}function y(_,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new av(r,A,_,i),c.push(I),h.set(A,I)),I}function T(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function uv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Kc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,v,g,m){let S=r[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},r[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function l(d,f,p,v,g,m){const S=o(d,f,p,v,g,m);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):t.push(S)}function c(d,f,p,v,g,m){const S=o(d,f,p,v,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function h(d,f,p){t.length>1&&t.sort(d||fv),n.length>1&&n.sort(f||Kc),i.length>1&&i.sort(f||Kc),p&&(t.reverse(),n.reverse(),i.reverse())}function u(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:u,sort:h}}function pv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Zc,r.set(n,[a])):i>=s.length?(a=new Zc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function mv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function gv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let vv=0;function xv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _v(r){const e=new mv,t=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new rt,a=new rt;function o(c){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,S=0,w=0,y=0,T=0,b=0,R=0;c.sort(xv);for(let A=0,I=c.length;A<I;A++){const C=c[A],F=C.color,X=C.intensity,J=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ts?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*X,u+=F.g*X,d+=F.b*X;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],X);R++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const V=C.shadow,j=t.get(C);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=Y,f++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(F).multiplyScalar(X),Y.distance=J,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[v]=Y;const V=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,V.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[v]=V.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=k,y++}v++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(F).multiplyScalar(X),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=Y,g++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const V=C.shadow,j=t.get(C);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=C.shadow.matrix,w++}n.point[p]=Y,p++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(X),Y.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[m]=Y,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==f||_.pointLength!==p||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==S||_.numPointShadows!==w||_.numSpotShadows!==y||_.numSpotMaps!==T||_.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,_.directionalLength=f,_.pointLength=p,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=S,_.numPointShadows=w,_.numSpotShadows=y,_.numSpotMaps=T,_.numLightProbes=R,n.version=vv++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const w=c[m];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(w.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(w.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Jc(r){const e=new _v(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Mv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Jc(r),e.set(i,[o])):s>=a.length?(o=new Jc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`,bv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ev=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Qc=new rt,ir=new U,io=new U;function wv(r,e,t){let n=new Rl;const i=new Ce,s=new Ce,a=new ht,o=new Lf,l=new Df,c={},h=t.maxTextureSize,u={[ai]:qt,[qt]:ai,[En]:En},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:yv,fragmentShader:Sv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Gt;p.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let m=this.type;this.render=function(b,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===oh&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jr);const A=r.getRenderTarget(),I=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),F=r.state;F.setBlending(An),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=m!==this.type;X&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(k=>k.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,k=b.length;J<k;J++){const Y=b[J],V=Y.shadow;if(V===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();i.multiply(j),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,V.mapSize.y=s.y));const ne=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sr){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $t(i.x,i.y,{format:ts,type:Qt,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new Ns(i.x,i.y,mn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=kn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt}else Y.isPointLight?(V.map=new Lh(i.x),V.map.depthTexture=new Rf(i.x,Cn)):(V.map=new $t(i.x,i.y),V.map.depthTexture=new Ns(i.x,i.y,Cn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=kn,this.type===Jr?(V.map.depthTexture.compareFunction=ne?wl:El,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt);V.camera.updateProjectionMatrix()}const fe=V.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<fe;ve++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,ve),r.clear();else{ve===0&&(r.setRenderTarget(V.map),r.clear());const ye=V.getViewport(ve);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),F.viewport(a)}if(Y.isPointLight){const ye=V.camera,Ke=V.matrix,ut=Y.distance||ye.far;ut!==ye.far&&(ye.far=ut,ye.updateProjectionMatrix()),ir.setFromMatrixPosition(Y.matrixWorld),ye.position.copy(ir),io.copy(ye.position),io.add(bv[ve]),ye.up.copy(Ev[ve]),ye.lookAt(io),ye.updateMatrixWorld(),Ke.makeTranslation(-ir.x,-ir.y,-ir.z),Qc.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Qc,ye.coordinateSystem,ye.reversedDepth)}else V.updateMatrices(Y);n=V.getFrustum(),y(R,_,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===sr&&S(V,_),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(A,I,C)};function S(b,R){const _=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $t(i.x,i.y,{format:ts,type:Qt})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(R,null,_,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(R,null,_,f,v,null)}function w(b,R,_,A){let I=null;const C=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)I=C;else if(I=_.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=I.uuid,X=R.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let k=J[X];k===void 0&&(k=I.clone(),J[X]=k,R.addEventListener("dispose",T)),I=k}if(I.visible=R.visible,I.wireframe=R.wireframe,A===sr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:u[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=r.properties.get(I);F.light=_}return I}function y(b,R,_,A,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===sr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const X=e.update(b),J=b.material;if(Array.isArray(J)){const k=X.groups;for(let Y=0,V=k.length;Y<V;Y++){const j=k[Y],ne=J[j.materialIndex];if(ne&&ne.visible){const fe=w(b,ne,A,I);b.onBeforeShadow(r,b,R,_,X,fe,j),r.renderBufferDirect(_,null,X,fe,b,j),b.onAfterShadow(r,b,R,_,X,fe,j)}}}else if(J.visible){const k=w(b,J,A,I);b.onBeforeShadow(r,b,R,_,X,k,null),r.renderBufferDirect(_,null,X,k,b,null),b.onAfterShadow(r,b,R,_,X,k,null)}}const F=b.children;for(let X=0,J=F.length;X<J;X++)y(F[X],R,_,A,I)}function T(b){b.target.removeEventListener("dispose",T);for(const _ in c){const A=c[_],I=b.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Tv(r,e){function t(){let P=!1;const re=new ht;let K=null;const he=new ht(0,0,0,0);return{setMask:function(ge){K!==ge&&!P&&(r.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){P=ge},setClear:function(ge,te,Ee,Se,pt){pt===!0&&(ge*=Se,te*=Se,Ee*=Se),re.set(ge,te,Ee,Se),he.equals(re)===!1&&(r.clearColor(ge,te,Ee,Se),he.copy(re))},reset:function(){P=!1,K=null,he.set(-1,0,0,0)}}}function n(){let P=!1,re=!1,K=null,he=null,ge=null;return{setReversed:function(te){if(re!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=te;const Se=ge;ge=null,this.setClear(Se)}},getReversed:function(){return re},setTest:function(te){te?ie(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(te){K!==te&&!P&&(r.depthMask(te),K=te)},setFunc:function(te){if(re&&(te=tf[te]),he!==te){switch(te){case go:r.depthFunc(r.NEVER);break;case vo:r.depthFunc(r.ALWAYS);break;case xo:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case _o:r.depthFunc(r.EQUAL);break;case Mo:r.depthFunc(r.GEQUAL);break;case yo:r.depthFunc(r.GREATER);break;case So:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=te}},setLocked:function(te){P=te},setClear:function(te){ge!==te&&(ge=te,re&&(te=1-te),r.clearDepth(te))},reset:function(){P=!1,K=null,he=null,ge=null,re=!1}}}function i(){let P=!1,re=null,K=null,he=null,ge=null,te=null,Ee=null,Se=null,pt=null;return{setTest:function(at){P||(at?ie(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(at){re!==at&&!P&&(r.stencilMask(at),re=at)},setFunc:function(at,vn,xn){(K!==at||he!==vn||ge!==xn)&&(r.stencilFunc(at,vn,xn),K=at,he=vn,ge=xn)},setOp:function(at,vn,xn){(te!==at||Ee!==vn||Se!==xn)&&(r.stencilOp(at,vn,xn),te=at,Ee=vn,Se=xn)},setLocked:function(at){P=at},setClear:function(at){pt!==at&&(r.clearStencil(at),pt=at)},reset:function(){P=!1,re=null,K=null,he=null,ge=null,te=null,Ee=null,Se=null,pt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,w=null,y=null,T=null,b=null,R=null,_=new ke(0,0,0),A=0,I=!1,C=null,F=null,X=null,J=null,k=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=j>=1):ne.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=j>=2);let fe=null,ve={};const ye=r.getParameter(r.SCISSOR_BOX),Ke=r.getParameter(r.VIEWPORT),ut=new ht().fromArray(ye),Ze=new ht().fromArray(Ke);function Q(P,re,K,he){const ge=new Uint8Array(4),te=r.createTexture();r.bindTexture(P,te),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<K;Ee++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(re+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return te}const ae={};ae[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(Us),Mt(!1),bt(Zl),ie(r.CULL_FACE),Je(An);function ie(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Ue(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Ne(P,re){return d[P]!==re?(r.bindFramebuffer(P,re),d[P]=re,P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=re),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Ie(P,re){let K=p,he=!1;if(P){K=f.get(re),K===void 0&&(K=[],f.set(re,K));const ge=P.textures;if(K.length!==ge.length||K[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Ee=ge.length;te<Ee;te++)K[te]=r.COLOR_ATTACHMENT0+te;K.length=ge.length,he=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,he=!0);he&&r.drawBuffers(K)}function gt(P){return v!==P?(r.useProgram(P),v=P,!0):!1}const Ve={[mi]:r.FUNC_ADD,[Eu]:r.FUNC_SUBTRACT,[wu]:r.FUNC_REVERSE_SUBTRACT};Ve[Tu]=r.MIN,Ve[Au]=r.MAX;const nt={[Ru]:r.ZERO,[Cu]:r.ONE,[Pu]:r.SRC_COLOR,[po]:r.SRC_ALPHA,[Nu]:r.SRC_ALPHA_SATURATE,[Uu]:r.DST_COLOR,[Lu]:r.DST_ALPHA,[Iu]:r.ONE_MINUS_SRC_COLOR,[mo]:r.ONE_MINUS_SRC_ALPHA,[Fu]:r.ONE_MINUS_DST_COLOR,[Du]:r.ONE_MINUS_DST_ALPHA,[Ou]:r.CONSTANT_COLOR,[Bu]:r.ONE_MINUS_CONSTANT_COLOR,[ku]:r.CONSTANT_ALPHA,[zu]:r.ONE_MINUS_CONSTANT_ALPHA};function Je(P,re,K,he,ge,te,Ee,Se,pt,at){if(P===An){g===!0&&(Ue(r.BLEND),g=!1);return}if(g===!1&&(ie(r.BLEND),g=!0),P!==bu){if(P!==m||at!==I){if((S!==mi||T!==mi)&&(r.blendEquation(r.FUNC_ADD),S=mi,T=mi),at)switch(P){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ps:r.blendFunc(r.ONE,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ql:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",P);break}else switch(P){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Jl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",P);break}w=null,y=null,b=null,R=null,_.set(0,0,0),A=0,m=P,I=at}return}ge=ge||re,te=te||K,Ee=Ee||he,(re!==S||ge!==T)&&(r.blendEquationSeparate(Ve[re],Ve[ge]),S=re,T=ge),(K!==w||he!==y||te!==b||Ee!==R)&&(r.blendFuncSeparate(nt[K],nt[he],nt[te],nt[Ee]),w=K,y=he,b=te,R=Ee),(Se.equals(_)===!1||pt!==A)&&(r.blendColor(Se.r,Se.g,Se.b,pt),_.copy(Se),A=pt),m=P,I=!1}function Xe(P,re){P.side===En?Ue(r.CULL_FACE):ie(r.CULL_FACE);let K=P.side===qt;re&&(K=!K),Mt(K),P.blending===Cs&&P.transparent===!1?Je(An):Je(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),It(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(P){C!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),C=P)}function bt(P){P!==yu?(ie(r.CULL_FACE),P!==F&&(P===Zl?r.cullFace(r.BACK):P===Su?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),F=P}function Tt(P){P!==X&&(V&&r.lineWidth(P),X=P)}function It(P,re,K){P?(ie(r.POLYGON_OFFSET_FILL),(J!==re||k!==K)&&(J=re,k=K,a.getReversed()&&(re=-re),r.polygonOffset(re,K))):Ue(r.POLYGON_OFFSET_FILL)}function ft(P){P?ie(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function yt(P){P===void 0&&(P=r.TEXTURE0+Y-1),fe!==P&&(r.activeTexture(P),fe=P)}function L(P,re,K){K===void 0&&(fe===null?K=r.TEXTURE0+Y-1:K=fe);let he=ve[K];he===void 0&&(he={type:void 0,texture:void 0},ve[K]=he),(he.type!==P||he.texture!==re)&&(fe!==K&&(r.activeTexture(K),fe=K),r.bindTexture(P,re||ae[P]),he.type=P,he.texture=re)}function Ht(){const P=ve[fe];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function je(){try{r.compressedTexImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function E(){try{r.compressedTexImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function x(){try{r.texSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function N(){try{r.texSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function q(){try{r.compressedTexSubImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function se(){try{r.texStorage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function oe(){try{r.texStorage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function $(){try{r.texImage2D(...arguments)}catch(P){qe("WebGLState:",P)}}function Z(){try{r.texImage3D(...arguments)}catch(P){qe("WebGLState:",P)}}function le(P){return u[P]!==void 0?u[P]:r.getParameter(P)}function we(P,re){u[P]!==re&&(r.pixelStorei(P,re),u[P]=re)}function de(P){ut.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ut.copy(P))}function ce(P){Ze.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Ze.copy(P))}function Pe(P,re){let K=c.get(re);K===void 0&&(K=new WeakMap,c.set(re,K));let he=K.get(P);he===void 0&&(he=r.getUniformBlockIndex(re,P.name),K.set(P,he))}function Le(P,re){const he=c.get(re).get(P);l.get(re)!==he&&(r.uniformBlockBinding(re,he,P.__bindingPointIndex),l.set(re,he))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},fe=null,ve={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,S=null,w=null,y=null,T=null,b=null,R=null,_=new ke(0,0,0),A=0,I=!1,C=null,F=null,X=null,J=null,k=null,ut.set(0,0,r.canvas.width,r.canvas.height),Ze.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Ue,bindFramebuffer:Ne,drawBuffers:Ie,useProgram:gt,setBlending:Je,setMaterial:Xe,setFlipSided:Mt,setCullFace:bt,setLineWidth:Tt,setPolygonOffset:It,setScissorTest:ft,activeTexture:yt,bindTexture:L,unbindTexture:Ht,compressedTexImage2D:je,compressedTexImage3D:E,texImage2D:$,texImage3D:Z,pixelStorei:we,getParameter:le,updateUBOMapping:Pe,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:oe,texSubImage2D:x,texSubImage3D:N,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:de,viewport:ce,reset:Oe}}function Av(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,x){return p?new OffscreenCanvas(E,x):la("canvas")}function g(E,x,N){let H=1;const q=je(E);if((q.width>N||q.height>N)&&(H=N/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const se=Math.floor(H*q.width),oe=Math.floor(H*q.height);d===void 0&&(d=v(se,oe));const $=x?v(se,oe):d;return $.width=se,$.height=oe,$.getContext("2d").drawImage(E,0,0,se,oe),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+se+"x"+oe+")."),$}else return"data"in E&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function m(E){return E.generateMipmaps}function S(E){r.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(E,x,N,H,q,se=!1){if(E!==null){if(r[E]!==void 0)return r[E];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oe;H&&(oe=e.get("EXT_texture_norm16"),oe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===r.RED&&(N===r.FLOAT&&($=r.R32F),N===r.HALF_FLOAT&&($=r.R16F),N===r.UNSIGNED_BYTE&&($=r.R8),N===r.UNSIGNED_SHORT&&oe&&($=oe.R16_EXT),N===r.SHORT&&oe&&($=oe.R16_SNORM_EXT)),x===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.R8UI),N===r.UNSIGNED_SHORT&&($=r.R16UI),N===r.UNSIGNED_INT&&($=r.R32UI),N===r.BYTE&&($=r.R8I),N===r.SHORT&&($=r.R16I),N===r.INT&&($=r.R32I)),x===r.RG&&(N===r.FLOAT&&($=r.RG32F),N===r.HALF_FLOAT&&($=r.RG16F),N===r.UNSIGNED_BYTE&&($=r.RG8),N===r.UNSIGNED_SHORT&&oe&&($=oe.RG16_EXT),N===r.SHORT&&oe&&($=oe.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RG8UI),N===r.UNSIGNED_SHORT&&($=r.RG16UI),N===r.UNSIGNED_INT&&($=r.RG32UI),N===r.BYTE&&($=r.RG8I),N===r.SHORT&&($=r.RG16I),N===r.INT&&($=r.RG32I)),x===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RGB8UI),N===r.UNSIGNED_SHORT&&($=r.RGB16UI),N===r.UNSIGNED_INT&&($=r.RGB32UI),N===r.BYTE&&($=r.RGB8I),N===r.SHORT&&($=r.RGB16I),N===r.INT&&($=r.RGB32I)),x===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RGBA8UI),N===r.UNSIGNED_SHORT&&($=r.RGBA16UI),N===r.UNSIGNED_INT&&($=r.RGBA32UI),N===r.BYTE&&($=r.RGBA8I),N===r.SHORT&&($=r.RGBA16I),N===r.INT&&($=r.RGBA32I)),x===r.RGB&&(N===r.UNSIGNED_SHORT&&oe&&($=oe.RGB16_EXT),N===r.SHORT&&oe&&($=oe.RGB16_SNORM_EXT),N===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),x===r.RGBA){const Z=se?oa:We.getTransfer(q);N===r.FLOAT&&($=r.RGBA32F),N===r.HALF_FLOAT&&($=r.RGBA16F),N===r.UNSIGNED_BYTE&&($=Z===Qe?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT&&oe&&($=oe.RGBA16_EXT),N===r.SHORT&&oe&&($=oe.RGBA16_SNORM_EXT),N===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(E,x){let N;return E?x===null||x===Cn||x===cr?N=r.DEPTH24_STENCIL8:x===mn?N=r.DEPTH32F_STENCIL8:x===lr&&(N=r.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Cn||x===cr?N=r.DEPTH_COMPONENT24:x===mn?N=r.DEPTH_COMPONENT32F:x===lr&&(N=r.DEPTH_COMPONENT16),N}function b(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Nt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){const x=E.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function _(E){const x=E.target;x.removeEventListener("dispose",_),C(x)}function A(E){const x=n.get(E);if(x.__webglInit===void 0)return;const N=E.source,H=f.get(N);if(H){const q=H[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(E),Object.keys(H).length===0&&f.delete(N)}n.remove(E)}function I(E){const x=n.get(E);r.deleteTexture(x.__webglTexture);const N=E.source,H=f.get(N);delete H[x.__cacheKey],a.memory.textures--}function C(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let q=0;q<x.__webglFramebuffer[H].length;q++)r.deleteFramebuffer(x.__webglFramebuffer[H][q]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let H=0,q=N.length;H<q;H++){const se=n.get(N[H]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(N[H])}n.remove(E)}let F=0;function X(){F=0}function J(){return F}function k(E){F=E}function Y(){const E=F;return E>=i.maxTextures&&De("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),F+=1,E}function V(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function j(E,x){const N=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const H=E.image;if(H===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(N,E,x);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+x)}function ne(E,x){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ue(N,E,x);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+x)}function fe(E,x){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ue(N,E,x);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+x)}function ve(E,x){const N=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){Ne(N,E,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+x)}const ye={[or]:r.REPEAT,[Fn]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},Ke={[Pt]:r.NEAREST,[Vu]:r.NEAREST_MIPMAP_NEAREST,[yr]:r.NEAREST_MIPMAP_LINEAR,[Nt]:r.LINEAR,[Ea]:r.LINEAR_MIPMAP_NEAREST,[ti]:r.LINEAR_MIPMAP_LINEAR},ut={[$u]:r.NEVER,[Ju]:r.ALWAYS,[Xu]:r.LESS,[El]:r.LEQUAL,[Yu]:r.EQUAL,[wl]:r.GEQUAL,[Ku]:r.GREATER,[Zu]:r.NOTEQUAL};function Ze(E,x){if(x.type===mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Nt||x.magFilter===Ea||x.magFilter===yr||x.magFilter===ti||x.minFilter===Nt||x.minFilter===Ea||x.minFilter===yr||x.minFilter===ti)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,ye[x.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,ye[x.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,ye[x.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,Ke[x.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,Ke[x.minFilter]),x.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,ut[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pt||x.minFilter!==yr&&x.minFilter!==ti||x.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Q(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let q=f.get(H);q===void 0&&(q={},f.set(H,q));const se=V(x);if(se!==E.__cacheKey){q[se]===void 0&&(q[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),q[se].usedTimes++;const oe=q[E.__cacheKey];oe!==void 0&&(q[E.__cacheKey].usedTimes--,oe.usedTimes===0&&I(x)),E.__cacheKey=se,E.__webglTexture=q[se].texture}return N}function ae(E,x,N){return Math.floor(Math.floor(E/N)/x)}function ie(E,x,N,H){const se=E.updateRanges;if(se.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,N,H,x.data);else{se.sort((we,de)=>we.start-de.start);let oe=0;for(let we=1;we<se.length;we++){const de=se[oe],ce=se[we],Pe=de.start+de.count,Le=ae(ce.start,x.width,4),Oe=ae(de.start,x.width,4);ce.start<=Pe+1&&Le===Oe&&ae(ce.start+ce.count-1,x.width,4)===Le?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,se[oe]=ce)}se.length=oe+1;const $=t.getParameter(r.UNPACK_ROW_LENGTH),Z=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let we=0,de=se.length;we<de;we++){const ce=se[we],Pe=Math.floor(ce.start/4),Le=Math.ceil(ce.count/4),Oe=Pe%x.width,P=Math.floor(Pe/x.width),re=Le,K=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(r.UNPACK_SKIP_ROWS,P),t.texSubImage2D(r.TEXTURE_2D,0,Oe,P,re,K,N,H,x.data)}E.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function Ue(E,x,N){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);const q=Q(E,x),se=x.source;t.bindTexture(H,E.__webglTexture,r.TEXTURE0+N);const oe=n.get(se);if(se.version!==oe.__version||q===!0){if(t.activeTexture(r.TEXTURE0+N),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=We.getPrimaries(We.workingColorSpace),he=x.colorSpace===ei?null:We.getPrimaries(x.colorSpace),ge=x.colorSpace===ei||K===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=g(x.image,!1,i.maxTextureSize);Z=Ht(x,Z);const le=s.convert(x.format,x.colorSpace),we=s.convert(x.type);let de=y(x.internalFormat,le,we,x.normalized,x.colorSpace,x.isVideoTexture);Ze(H,x);let ce;const Pe=x.mipmaps,Le=x.isVideoTexture!==!0,Oe=oe.__version===void 0||q===!0,P=se.dataReady,re=b(x,Z);if(x.isDepthTexture)de=T(x.format===Zi,x.type),Oe&&(Le?t.texStorage2D(r.TEXTURE_2D,1,de,Z.width,Z.height):t.texImage2D(r.TEXTURE_2D,0,de,Z.width,Z.height,0,le,we,null));else if(x.isDataTexture)if(Pe.length>0){Le&&Oe&&t.texStorage2D(r.TEXTURE_2D,re,de,Pe[0].width,Pe[0].height);for(let K=0,he=Pe.length;K<he;K++)ce=Pe[K],Le?P&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ce.width,ce.height,le,we,ce.data):t.texImage2D(r.TEXTURE_2D,K,de,ce.width,ce.height,0,le,we,ce.data);x.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(r.TEXTURE_2D,re,de,Z.width,Z.height),P&&ie(x,Z,le,we)):t.texImage2D(r.TEXTURE_2D,0,de,Z.width,Z.height,0,le,we,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,de,Pe[0].width,Pe[0].height,Z.depth);for(let K=0,he=Pe.length;K<he;K++)if(ce=Pe[K],x.format!==gn)if(le!==null)if(Le){if(P)if(x.layerUpdates.size>0){const ge=Cc(ce.width,ce.height,x.format,x.type);for(const te of x.layerUpdates){const Ee=ce.data.subarray(te*ge/ce.data.BYTES_PER_ELEMENT,(te+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,te,ce.width,ce.height,1,le,Ee)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,Z.depth,le,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,de,ce.width,ce.height,Z.depth,0,ce.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,ce.width,ce.height,Z.depth,le,we,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,K,de,ce.width,ce.height,Z.depth,0,le,we,ce.data)}else{Le&&Oe&&t.texStorage2D(r.TEXTURE_2D,re,de,Pe[0].width,Pe[0].height);for(let K=0,he=Pe.length;K<he;K++)ce=Pe[K],x.format!==gn?le!==null?Le?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,K,de,ce.width,ce.height,0,ce.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?P&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,ce.width,ce.height,le,we,ce.data):t.texImage2D(r.TEXTURE_2D,K,de,ce.width,ce.height,0,le,we,ce.data)}else if(x.isDataArrayTexture)if(Le){if(Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,de,Z.width,Z.height,Z.depth),P)if(x.layerUpdates.size>0){const K=Cc(Z.width,Z.height,x.format,x.type);for(const he of x.layerUpdates){const ge=Z.data.subarray(he*K/Z.data.BYTES_PER_ELEMENT,(he+1)*K/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Z.width,Z.height,1,le,we,ge)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,we,Z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,Z.width,Z.height,Z.depth,0,le,we,Z.data);else if(x.isData3DTexture)Le?(Oe&&t.texStorage3D(r.TEXTURE_3D,re,de,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,we,Z.data)):t.texImage3D(r.TEXTURE_3D,0,de,Z.width,Z.height,Z.depth,0,le,we,Z.data);else if(x.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(r.TEXTURE_2D,re,de,Z.width,Z.height);else{let K=Z.width,he=Z.height;for(let ge=0;ge<re;ge++)t.texImage2D(r.TEXTURE_2D,ge,de,K,he,0,le,we,null),K>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const K=r.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),u.add(x),K.onpaint=he=>{const ge=he.changedElements;for(const te of u)ge.includes(te.image)&&(te.needsUpdate=!0)},K.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Z);else{const ge=r.RGBA,te=r.RGBA,Ee=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ge,te,Ee,Z)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Le&&Oe){const K=je(Pe[0]);t.texStorage2D(r.TEXTURE_2D,re,de,K.width,K.height)}for(let K=0,he=Pe.length;K<he;K++)ce=Pe[K],Le?P&&t.texSubImage2D(r.TEXTURE_2D,K,0,0,le,we,ce):t.texImage2D(r.TEXTURE_2D,K,de,le,we,ce);x.generateMipmaps=!1}else if(Le){if(Oe){const K=je(Z);t.texStorage2D(r.TEXTURE_2D,re,de,K.width,K.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,we,Z)}else t.texImage2D(r.TEXTURE_2D,0,de,le,we,Z);m(x)&&S(H),oe.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ne(E,x,N){if(x.image.length!==6)return;const H=Q(E,x),q=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+N);const se=n.get(q);if(q.version!==se.__version||H===!0){t.activeTexture(r.TEXTURE0+N);const oe=We.getPrimaries(We.workingColorSpace),$=x.colorSpace===ei?null:We.getPrimaries(x.colorSpace),Z=x.colorSpace===ei||oe===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,we=x.image[0]&&x.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!le&&!we?de[te]=g(x.image[te],!0,i.maxCubemapSize):de[te]=we?x.image[te].image:x.image[te],de[te]=Ht(x,de[te]);const ce=de[0],Pe=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Oe=y(x.internalFormat,Pe,Le,x.normalized,x.colorSpace),P=x.isVideoTexture!==!0,re=se.__version===void 0||H===!0,K=q.dataReady;let he=b(x,ce);Ze(r.TEXTURE_CUBE_MAP,x);let ge;if(le){P&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Oe,ce.width,ce.height);for(let te=0;te<6;te++){ge=de[te].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){const Se=ge[Ee];x.format!==gn?Pe!==null?P?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Oe,Se.width,Se.height,0,Se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Pe,Le,Se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Oe,Se.width,Se.height,0,Pe,Le,Se.data)}}}else{if(ge=x.mipmaps,P&&re){ge.length>0&&he++;const te=je(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Oe,te.width,te.height)}for(let te=0;te<6;te++)if(we){P?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,Pe,Le,de[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,de[te].width,de[te].height,0,Pe,Le,de[te].data);for(let Ee=0;Ee<ge.length;Ee++){const pt=ge[Ee].image[te].image;P?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,pt.width,pt.height,Pe,Le,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Oe,pt.width,pt.height,0,Pe,Le,pt.data)}}else{P?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,Le,de[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,Pe,Le,de[te]);for(let Ee=0;Ee<ge.length;Ee++){const Se=ge[Ee];P?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Pe,Le,Se.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Oe,Pe,Le,Se.image[te])}}}m(x)&&S(r.TEXTURE_CUBE_MAP),se.__version=q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ie(E,x,N,H,q,se){const oe=s.convert(N.format,N.colorSpace),$=s.convert(N.type),Z=y(N.internalFormat,oe,$,N.normalized,N.colorSpace),le=n.get(x),we=n.get(N);if(we.__renderTarget=x,!le.__hasExternalTextures){const de=Math.max(1,x.width>>se),ce=Math.max(1,x.height>>se);q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?t.texImage3D(q,se,Z,de,ce,x.depth,0,oe,$,null):t.texImage2D(q,se,Z,de,ce,0,oe,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),yt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,q,we.__webglTexture,0,ft(x)):(q===r.TEXTURE_2D||q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,q,we.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(E,x,N){if(r.bindRenderbuffer(r.RENDERBUFFER,E),x.depthBuffer){const H=x.depthTexture,q=H&&H.isDepthTexture?H.type:null,se=T(x.stencilBuffer,q),oe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;yt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft(x),se,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft(x),se,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,se,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,E)}else{const H=x.textures;for(let q=0;q<H.length;q++){const se=H[q],oe=s.convert(se.format,se.colorSpace),$=s.convert(se.type),Z=y(se.internalFormat,oe,$,se.normalized,se.colorSpace);yt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft(x),Z,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft(x),Z,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Z,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(E,x,N){const H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Ze(r.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),we=s.convert(x.depthTexture.type);let de;x.depthTexture.format===kn?de=r.DEPTH_COMPONENT24:x.depthTexture.format===Zi&&(de=r.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,x.width,x.height,0,le,we,null)}}else j(x.depthTexture,0);const se=q.__webglTexture,oe=ft(x),$=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Z=x.depthTexture.format===Zi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)yt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,$,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Z,$,se,0);else if(x.depthTexture.format===Zi)yt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,$,se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,Z,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(E){const x=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=H}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let H=0;H<6;H++)Ve(x.__webglFramebuffer[H],E,H);else{const H=E.texture.mipmaps;H&&H.length>0?Ve(x.__webglFramebuffer[0],E,0):Ve(x.__webglFramebuffer,E,0)}else if(N){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),gt(x.__webglDepthbuffer[H],E,!1);else{const q=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,se)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),gt(x.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(E,x,N){const H=n.get(E);x!==void 0&&Ie(H.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&nt(E)}function Xe(E){const x=E.texture,N=n.get(E),H=n.get(x);E.addEventListener("dispose",_);const q=E.textures,se=E.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,a.memory.textures++),se){N.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[$]=[];for(let Z=0;Z<x.mipmaps.length;Z++)N.__webglFramebuffer[$][Z]=r.createFramebuffer()}else N.__webglFramebuffer[$]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)N.__webglFramebuffer[$]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(oe)for(let $=0,Z=q.length;$<Z;$++){const le=n.get(q[$]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&yt(E)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){const Z=q[$];N.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[$]);const le=s.convert(Z.format,Z.colorSpace),we=s.convert(Z.type),de=y(Z.internalFormat,le,we,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),ce=ft(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,de,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,N.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),gt(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),Ze(r.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Ie(N.__webglFramebuffer[$][Z],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Z);else Ie(N.__webglFramebuffer[$],E,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(x)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let $=0,Z=q.length;$<Z;$++){const le=q[$],we=n.get(le);let de=r.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,we.__webglTexture),Ze(de,le),Ie(N.__webglFramebuffer,E,le,r.COLOR_ATTACHMENT0+$,de,0),m(le)&&S(de)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Ze($,x),x.mipmaps&&x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)Ie(N.__webglFramebuffer[Z],E,x,r.COLOR_ATTACHMENT0,$,Z);else Ie(N.__webglFramebuffer,E,x,r.COLOR_ATTACHMENT0,$,0);m(x)&&S($),t.unbindTexture()}E.depthBuffer&&nt(E)}function Mt(E){const x=E.textures;for(let N=0,H=x.length;N<H;N++){const q=x[N];if(m(q)){const se=w(E),oe=n.get(q).__webglTexture;t.bindTexture(se,oe),S(se),t.unbindTexture()}}}const bt=[],Tt=[];function It(E){if(E.samples>0){if(yt(E)===!1){const x=E.textures,N=E.width,H=E.height;let q=r.COLOR_BUFFER_BIT;const se=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(E),$=x.length>1;if($)for(let le=0;le<x.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Z=E.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<x.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=n.get(x[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,N,H,0,0,N,H,q,r.NEAREST),l===!0&&(bt.length=0,Tt.length=0,bt.push(r.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(bt.push(se),Tt.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<x.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const we=n.get(x[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,we,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ft(E){return Math.min(i.maxSamples,E.samples)}function yt(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Ht(E,x){const N=E.colorSpace,H=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==aa&&N!==ei&&(We.getTransfer(N)===Qe?(H!==gn||q!==Jt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",N)),x}function je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=J,this.setTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=ne,this.setTexture3D=fe,this.setTextureCube=ve,this.rebindTextures=Je,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rv(r,e){function t(n,i=ei){let s;const a=We.getTransfer(i);if(n===Jt)return r.UNSIGNED_BYTE;if(n===xl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return r.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return r.BYTE;if(n===dh)return r.SHORT;if(n===lr)return r.UNSIGNED_SHORT;if(n===vl)return r.INT;if(n===Cn)return r.UNSIGNED_INT;if(n===mn)return r.FLOAT;if(n===Qt)return r.HALF_FLOAT;if(n===ph)return r.ALPHA;if(n===mh)return r.RGB;if(n===gn)return r.RGBA;if(n===kn)return r.DEPTH_COMPONENT;if(n===Zi)return r.DEPTH_STENCIL;if(n===Ml)return r.RED;if(n===yl)return r.RED_INTEGER;if(n===ts)return r.RG;if(n===Sl)return r.RG_INTEGER;if(n===bl)return r.RGBA_INTEGER;if(n===Qr||n===jr||n===ea||n===ta)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===wo||n===To||n===Ao)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Co||n===Po||n===Io||n===Lo||n===sa||n===Do)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ro||n===Co)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Po)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Io)return s.COMPRESSED_R11_EAC;if(n===Lo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return s.COMPRESSED_RG11_EAC;if(n===Do)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===Fo||n===No||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Ho||n===Vo||n===Wo||n===qo||n===$o||n===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Uo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Ko||n===Zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Yo)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Qo||n===ra||n===jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
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

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ot({vertexShader:Cv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lv extends is{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new Iv,m={},S=t.getContextAttributes();let w=null,y=null;const T=[],b=[],R=new Ce;let _=null;const A=new Zt;A.viewport=new ht;const I=new Zt;I.viewport=new ht;const C=[A,I],F=new kf;let X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=T[Q];return ae===void 0&&(ae=new La,T[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=T[Q];return ae===void 0&&(ae=new La,T[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=T[Q];return ae===void 0&&(ae=new La,T[Q]=ae),ae.getHandSpace()};function k(Q){const ae=b.indexOf(Q.inputSource);if(ae===-1)return;const ie=T[ae];ie!==void 0&&(ie.update(Q.inputSource,Q.frame,c||a),ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",V);for(let Q=0;Q<T.length;Q++){const ae=b[Q];ae!==null&&(b[Q]=null,T[Q].disconnect(ae))}X=null,J=null,g.reset();for(const Q in m)delete m[Q];e.setRenderTarget(w),f=null,d=null,u=null,i=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ue=null,Ne=null;S.depth&&(Ne=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?Zi:kn,Ue=S.stencil?cr:Cn);const Ie={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $t(d.textureWidth,d.textureHeight,{format:gn,type:Jt,depthTexture:new Ns(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $t(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(Q){for(let ae=0;ae<Q.removed.length;ae++){const ie=Q.removed[ae],Ue=b.indexOf(ie);Ue>=0&&(b[Ue]=null,T[Ue].disconnect(ie))}for(let ae=0;ae<Q.added.length;ae++){const ie=Q.added[ae];let Ue=b.indexOf(ie);if(Ue===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=b.length){b.push(ie),Ue=Ie;break}else if(b[Ie]===null){b[Ie]=ie,Ue=Ie;break}if(Ue===-1)break}const Ne=T[Ue];Ne&&Ne.connect(ie)}}const j=new U,ne=new U;function fe(Q,ae,ie){j.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ie.matrixWorld);const Ue=j.distanceTo(ne),Ne=ae.projectionMatrix.elements,Ie=ie.projectionMatrix.elements,gt=Ne[14]/(Ne[10]-1),Ve=Ne[14]/(Ne[10]+1),nt=(Ne[9]+1)/Ne[5],Je=(Ne[9]-1)/Ne[5],Xe=(Ne[8]-1)/Ne[0],Mt=(Ie[8]+1)/Ie[0],bt=gt*Xe,Tt=gt*Mt,It=Ue/(-Xe+Mt),ft=It*-Xe;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(It),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const yt=gt+It,L=Ve+It,Ht=bt-ft,je=Tt+(Ue-ft),E=nt*Ve/L*yt,x=Je*Ve/L*yt;Q.projectionMatrix.makePerspective(Ht,je,E,x,yt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ve(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ae=Q.near,ie=Q.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),F.near=I.near=A.near=ae,F.far=I.far=A.far=ie,(X!==F.near||J!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,J=F.far),F.layers.mask=Q.layers.mask|6,A.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const Ue=Q.parent,Ne=F.cameras;ve(F,Ue);for(let Ie=0;Ie<Ne.length;Ie++)ve(Ne[Ie],Ue);Ne.length===2?fe(F,A,I):F.projectionMatrix.copy(A.projectionMatrix),ye(Q,F,Ue)};function ye(Q,ae,ie){ie===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=nl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Q){return m[Q]};let Ke=null;function ut(Q,ae){if(h=ae.getViewerPose(c||a),p=ae,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ue=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let Ve=0;Ve<ie.length;Ve++){const nt=ie[Ve];let Je=null;if(f!==null)Je=f.getViewport(nt);else{const Mt=u.getViewSubImage(d,nt);Je=Mt.viewport,Ve===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let Xe=C[Ve];Xe===void 0&&(Xe=new Zt,Xe.layers.enable(Ve),Xe.viewport=new ht,C[Ve]=Xe),Xe.matrix.fromArray(nt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(nt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Je.x,Je.y,Je.width,Je.height),Ve===0&&(F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(Xe)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Ve=u.getDepthInformation(ie[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,i.renderState)}if(Ne&&Ne.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<ie.length;Ve++){const nt=ie[Ve].camera;if(nt){let Je=m[nt];Je||(Je=new wh,m[nt]=Je);const Xe=u.getCameraImage(nt);Je.sourceTexture=Xe}}}}for(let ie=0;ie<T.length;ie++){const Ue=b[ie],Ne=T[ie];Ue!==null&&Ne!==void 0&&Ne.update(Ue,ae,c||a)}Ke&&Ke(Q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}const Ze=new Ph;Ze.setAnimationLoop(ut),this.setAnimationLoop=function(Q){Ke=Q},this.dispose=function(){}}}const Dv=new rt,Oh=new Fe;Oh.set(-1,0,0,0,1,0,0,0,1);function Uv(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Th(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),w=S.envMap,y=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Oh),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;n.uniformBlockBinding(y,b)}function c(y,T){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",S));const R=T.program;n.updateUBOMapping(y,R);const _=e.render.frame;s[y.id]!==_&&(d(y),s[y.id]=_)}function h(y){const T=u();y.__bindingPointIndex=T;const b=r.createBuffer(),R=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,R,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const T=i[y.id],b=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let _=0,A=b.length;_<A;_++){const I=b[_];if(Array.isArray(I))for(let C=0,F=I.length;C<F;C++)f(I[C],_,C,R);else f(I,_,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,T,b,R){if(v(y,T,b,R)===!0){const _=y.__offset,A=y.value;if(Array.isArray(A)){let I=0;for(let C=0;C<A.length;C++){const F=A[C],X=m(F);p(F,y.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,y.__data)}}function p(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function v(y,T,b,R){const _=y.value,A=T+"_"+b;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const I=R[A];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(y){const T=y.uniforms;let b=0;const R=16;for(let A=0,I=T.length;A<I;A++){const C=Array.isArray(T[A])?T[A]:[T[A]];for(let F=0,X=C.length;F<X;F++){const J=C[F],k=Array.isArray(J.value)?J.value:[J.value];for(let Y=0,V=k.length;Y<V;Y++){const j=k[Y],ne=m(j),fe=b%R,ve=fe%ne.boundary,ye=fe+ve;b+=ve,ye!==0&&R-ye<ne.storage&&(b+=R-ye),J.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=ne.storage}}}const _=b%R;return _>0&&(b+=R-_),y.__size=b,y.__cache={},this}function m(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):De("WebGLRenderer: Unsupported uniform value type.",y),T}function S(y){const T=y.target;T.removeEventListener("dispose",S);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function w(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function Ov(){return yn===null&&(yn=new bh(Nv,16,16,ts,Qt),yn.name="DFG_LUT",yn.minFilter=Nt,yn.magFilter=Nt,yn.wrapS=Fn,yn.wrapT=Fn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class Bv{constructor(e={}){const{canvas:t=ju(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Jt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=f,g=new Set([bl,Sl,yl]),m=new Set([Jt,Cn,lr,cr,xl,_l]),S=new Uint32Array(4),w=new Int32Array(4),y=new U;let T=null,b=null;const R=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let C=!1,F=null,X=null,J=null,k=null;this._outputColorSpace=Ct;let Y=0,V=0,j=null,ne=-1,fe=null;const ve=new ht,ye=new ht;let Ke=null;const ut=new ke(0);let Ze=0,Q=t.width,ae=t.height,ie=1,Ue=null,Ne=null;const Ie=new ht(0,0,Q,ae),gt=new ht(0,0,Q,ae);let Ve=!1;const nt=new Rl;let Je=!1,Xe=!1;const Mt=new rt,bt=new U,Tt=new ht,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function yt(){return j===null?ie:1}let L=n;function Ht(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cl}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",vn,!1),L===null){const D="webgl2";if(L=Ht(D,M),L===null)throw Ht(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw qe("WebGLRenderer: "+M.message),M}let je,E,x,N,H,q,se,oe,$,Z,le,we,de,ce,Pe,Le,Oe,P,re,K,he,ge,te;function Ee(){je=new Og(L),je.init(),he=new Rv(L,je),E=new Cg(L,je,e,he),x=new Tv(L,je),E.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),X=L.createFramebuffer(),J=L.createFramebuffer(),k=L.createFramebuffer(),N=new zg(L),H=new uv,q=new Av(L,je,x,H,E,he,N),se=new Ng(I),oe=new Wf(L),ge=new Ag(L,oe),$=new Bg(L,oe,N,ge),Z=new Hg(L,$,oe,ge,N),P=new Gg(L,E,q),Pe=new Pg(H),le=new dv(I,se,je,E,ge,Pe),we=new Uv(I,H),de=new pv,ce=new Mv(je),Oe=new Tg(I,se,x,Z,p,l),Le=new wv(I,Z,E),te=new Fv(L,N,E,x),re=new Rg(L,je,N),K=new kg(L,je,N),N.programs=le.programs,I.capabilities=E,I.extensions=je,I.properties=H,I.renderLists=de,I.shadowMap=Le,I.state=x,I.info=N}Ee(),v!==Jt&&(A=new Wg(v,t.width,t.height,o,i,s));const Se=new Lv(I,L);this.xr=Se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(Q,ae,!1))},this.getSize=function(M){return M.set(Q,ae)},this.setSize=function(M,D,W=!0){if(Se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,ae=D,t.width=Math.floor(M*ie),t.height=Math.floor(D*ie),W===!0&&(t.style.width=M+"px",t.style.height=D+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Q*ie,ae*ie).floor()},this.setDrawingBufferSize=function(M,D,W){Q=M,ae=D,ie=W,t.width=Math.floor(M*W),t.height=Math.floor(D*W),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(v===Jt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ve)},this.getViewport=function(M){return M.copy(Ie)},this.setViewport=function(M,D,W,z){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,D,W,z),x.viewport(ve.copy(Ie).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(gt)},this.setScissor=function(M,D,W,z){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,D,W,z),x.scissor(ye.copy(gt).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(M){x.setScissorTest(Ve=M)},this.setOpaqueSort=function(M){Ue=M},this.setTransparentSort=function(M){Ne=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,W=!0){let z=0;if(M){let G=!1;if(j!==null){const me=j.texture.format;G=g.has(me)}if(G){const me=j.texture.type,_e=m.has(me),pe=Oe.getClearColor(),be=Oe.getClearAlpha(),Te=pe.r,Be=pe.g,Ge=pe.b;_e?(S[0]=Te,S[1]=Be,S[2]=Ge,S[3]=be,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=Te,w[1]=Be,w[2]=Ge,w[3]=be,L.clearBufferiv(L.COLOR,0,w))}else z|=L.COLOR_BUFFER_BIT}D&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Oe.dispose(),de.dispose(),ce.dispose(),H.dispose(),se.dispose(),Z.dispose(),ge.dispose(),te.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Gl),Se.removeEventListener("sessionend",Hl),ci.stop()};function pt(M){M.preventDefault(),ca("WebGLRenderer: Context Lost."),C=!0}function at(){ca("WebGLRenderer: Context Restored."),C=!1;const M=N.autoReset,D=Le.enabled,W=Le.autoUpdate,z=Le.needsUpdate,G=Le.type;Ee(),N.autoReset=M,Le.enabled=D,Le.autoUpdate=W,Le.needsUpdate=z,Le.type=G}function vn(M){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xn(M){const D=M.target;D.removeEventListener("dispose",xn),zh(D)}function zh(M){Gh(M),H.remove(M)}function Gh(M){const D=H.get(M).programs;D!==void 0&&(D.forEach(function(W){le.releaseProgram(W)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,W,z,G,me){D===null&&(D=It);const _e=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=Wh(M,D,W,z,G);x.setMaterial(z,_e);let be=W.index,Te=1;if(z.wireframe===!0){if(be=$.getWireframeAttribute(W),be===void 0)return;Te=2}const Be=W.drawRange,Ge=W.attributes.position;let Ae=Be.start*Te,et=(Be.start+Be.count)*Te;me!==null&&(Ae=Math.max(Ae,me.start*Te),et=Math.min(et,(me.start+me.count)*Te)),be!==null?(Ae=Math.max(Ae,0),et=Math.min(et,be.count)):Ge!=null&&(Ae=Math.max(Ae,0),et=Math.min(et,Ge.count));const vt=et-Ae;if(vt<0||vt===1/0)return;ge.setup(G,z,pe,W,be);let mt,it=re;if(be!==null&&(mt=oe.get(be),it=K,it.setIndex(mt)),G.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*yt()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(G.isLine){let Lt=z.linewidth;Lt===void 0&&(Lt=1),x.setLineWidth(Lt*yt()),G.isLineSegments?it.setMode(L.LINES):G.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else G.isPoints?it.setMode(L.POINTS):G.isSprite&&it.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,xe=G._multiDrawCounts,Xt=G._multiDrawCount,Ye=be?oe.get(be).bytesPerElement:1,jt=H.get(z).currentProgram.getUniforms();for(let _n=0;_n<Xt;_n++)jt.setValue(L,"_gl_DrawID",_n),it.render(Lt[_n]/Ye,xe[_n])}else if(G.isInstancedMesh)it.renderInstances(Ae,vt,G.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xe=Math.min(W.instanceCount,Lt);it.renderInstances(Ae,vt,xe)}else it.render(Ae,vt)};function zl(M,D,W){M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Mr(M,D,W),M.side=ai,M.needsUpdate=!0,Mr(M,D,W),M.side=En):Mr(M,D,W)}this.compile=function(M,D,W=null){W===null&&(W=M),b=ce.get(W),b.init(D),_.push(b),W.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),M!==W&&M.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const z=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const me=G.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){const pe=me[_e];zl(pe,W,G),z.add(pe)}else zl(me,W,G),z.add(me)}),b=_.pop(),z},this.compileAsync=function(M,D,W=null){const z=this.compile(M,D,W);return new Promise(G=>{function me(){if(z.forEach(function(_e){H.get(_e).currentProgram.isReady()&&z.delete(_e)}),z.size===0){G(M);return}setTimeout(me,10)}je.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let xa=null;function Hh(M){xa&&xa(M)}function Gl(){ci.stop()}function Hl(){ci.start()}const ci=new Ph;ci.setAnimationLoop(Hh),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(M){xa=M,Se.setAnimationLoop(M),M===null?ci.stop():ci.start()},Se.addEventListener("sessionstart",Gl),Se.addEventListener("sessionend",Hl),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;F!==null&&F.renderStart(M,D);const W=Se.enabled===!0&&Se.isPresenting===!0,z=A!==null&&(j===null||W)&&A.begin(I,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(D),D=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,D,j),b=ce.get(M,_.length),b.init(D),b.state.textureUnits=q.getTextureUnits(),_.push(b),Mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(Mt,Tn,D.reversedDepth),Xe=this.localClippingEnabled,Je=Pe.init(this.clippingPlanes,Xe),T=de.get(M,R.length),T.init(),R.push(T),Se.enabled===!0&&Se.isPresenting===!0){const _e=I.xr.getDepthSensingMesh();_e!==null&&_a(_e,D,-1/0,I.sortObjects)}_a(M,D,0,I.sortObjects),T.finish(),I.sortObjects===!0&&T.sort(Ue,Ne,D.reversedDepth),ft=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ft&&Oe.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Pe.beginShadows();const G=b.state.shadowsArray;if(Le.render(G,M,D),Je===!0&&Pe.endShadows(),(z&&A.hasRenderPass())===!1){const _e=T.opaque,pe=T.transmissive;if(b.setupLights(),D.isArrayCamera){const be=D.cameras;if(pe.length>0)for(let Te=0,Be=be.length;Te<Be;Te++){const Ge=be[Te];Wl(_e,pe,M,Ge)}ft&&Oe.render(M);for(let Te=0,Be=be.length;Te<Be;Te++){const Ge=be[Te];Vl(T,M,Ge,Ge.viewport)}}else pe.length>0&&Wl(_e,pe,M,D),ft&&Oe.render(M),Vl(T,M,D)}j!==null&&V===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),z&&A.end(I),M.isScene===!0&&M.onAfterRender(I,M,D),ge.resetDefaultState(),ne=-1,fe=null,_.pop(),_.length>0?(b=_[_.length-1],q.setTextureUnits(b.state.textureUnits),Je===!0&&Pe.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,F!==null&&F.renderEnd()};function _a(M,D,W,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||nt.intersectsSprite(M)){z&&Tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Mt);const _e=Z.update(M),pe=M.material;pe.visible&&T.push(M,_e,pe,W,Tt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||nt.intersectsObject(M))){const _e=Z.update(M),pe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Tt.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Tt.copy(_e.boundingSphere.center)),Tt.applyMatrix4(M.matrixWorld).applyMatrix4(Mt)),Array.isArray(pe)){const be=_e.groups;for(let Te=0,Be=be.length;Te<Be;Te++){const Ge=be[Te],Ae=pe[Ge.materialIndex];Ae&&Ae.visible&&T.push(M,_e,Ae,W,Tt.z,Ge)}}else pe.visible&&T.push(M,_e,pe,W,Tt.z,null)}}const me=M.children;for(let _e=0,pe=me.length;_e<pe;_e++)_a(me[_e],D,W,z)}function Vl(M,D,W,z){const{opaque:G,transmissive:me,transparent:_e}=M;b.setupLightsView(W),Je===!0&&Pe.setGlobalState(I.clippingPlanes,W),z&&x.viewport(ve.copy(z)),G.length>0&&_r(G,D,W),me.length>0&&_r(me,D,W),_e.length>0&&_r(_e,D,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Wl(M,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Ae=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new $t(1,1,{generateMipmaps:!0,type:Ae?Qt:Jt,minFilter:ti,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const me=b.state.transmissionRenderTarget[z.id],_e=z.viewport||ve;me.setSize(_e.z*I.transmissionResolutionScale,_e.w*I.transmissionResolutionScale);const pe=I.getRenderTarget(),be=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget(me),I.getClearColor(ut),Ze=I.getClearAlpha(),Ze<1&&I.setClearColor(16777215,.5),I.clear(),ft&&Oe.render(W);const Be=I.toneMapping;I.toneMapping=Rn;const Ge=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Je===!0&&Pe.setGlobalState(I.clippingPlanes,z),_r(M,W,z),q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let et=0,vt=D.length;et<vt;et++){const mt=D[et],{object:it,geometry:Lt,material:xe,group:Xt}=mt;if(xe.side===En&&it.layers.test(z.layers)){const Ye=xe.side;xe.side=qt,xe.needsUpdate=!0,ql(it,W,z,Lt,xe,Xt),xe.side=Ye,xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(q.updateMultisampleRenderTarget(me),q.updateRenderTargetMipmap(me))}I.setRenderTarget(pe,be,Te),I.setClearColor(ut,Ze),Ge!==void 0&&(z.viewport=Ge),I.toneMapping=Be}function _r(M,D,W){const z=D.isScene===!0?D.overrideMaterial:null;for(let G=0,me=M.length;G<me;G++){const _e=M[G],{object:pe,geometry:be,group:Te}=_e;let Be=_e.material;Be.allowOverride===!0&&z!==null&&(Be=z),pe.layers.test(W.layers)&&ql(pe,D,W,be,Be,Te)}}function ql(M,D,W,z,G,me){M.onBeforeRender(I,D,W,z,G,me),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(I,D,W,z,M,me),G.transparent===!0&&G.side===En&&G.forceSinglePass===!1?(G.side=qt,G.needsUpdate=!0,I.renderBufferDirect(W,D,z,G,M,me),G.side=ai,G.needsUpdate=!0,I.renderBufferDirect(W,D,z,G,M,me),G.side=En):I.renderBufferDirect(W,D,z,G,M,me),M.onAfterRender(I,D,W,z,G,me)}function Mr(M,D,W){D.isScene!==!0&&(D=It);const z=H.get(M),G=b.state.lights,me=b.state.shadowsArray,_e=G.state.version,pe=le.getParameters(M,G.state,me,D,W,b.state.lightProbeGridArray),be=le.getProgramCacheKey(pe);let Te=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Be=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=se.get(M.envMap||z.environment,Be),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",xn),Te=new Map,z.programs=Te);let Ge=Te.get(be);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===_e)return Xl(M,pe),Ge}else pe.uniforms=le.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,W,pe),M.onBeforeCompile(pe,I),Ge=le.acquireProgram(pe,be),Te.set(be,Ge),z.uniforms=pe.uniforms;const Ae=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Pe.uniform),Xl(M,pe),z.needsLights=$h(M),z.lightsStateVersion=_e,z.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Ge,z.uniformsList=null,Ge}function $l(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=na.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Xl(M,D){const W=H.get(M);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Vh(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=M.length;W<z;W++){const G=M[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Wh(M,D,W,z,G){D.isScene!==!0&&(D=It),q.resetTextureUnits();const me=D.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,pe=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:We.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=se.get(z.envMap||_e,be),Be=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let mt=Rn;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(mt=I.toneMapping);const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=it!==void 0?it.length:0,xe=H.get(z),Xt=b.state.lights;if(Je===!0&&(Xe===!0||M!==fe)){const ot=M===fe&&z.id===ne;Pe.setState(z,M,ot)}let Ye=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Xt.state.version||xe.outputColorSpace!==pe||G.isBatchedMesh&&xe.batching===!1||!G.isBatchedMesh&&xe.batching===!0||G.isBatchedMesh&&xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&xe.instancing===!1||!G.isInstancedMesh&&xe.instancing===!0||G.isSkinnedMesh&&xe.skinning===!1||!G.isSkinnedMesh&&xe.skinning===!0||G.isInstancedMesh&&xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xe.instancingMorph===!1&&G.morphTexture!==null||xe.envMap!==Te||z.fog===!0&&xe.fog!==me||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Pe.numPlanes||xe.numIntersection!==Pe.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ge||xe.morphTargets!==Ae||xe.morphNormals!==et||xe.morphColors!==vt||xe.toneMapping!==mt||xe.morphTargetsCount!==Lt||!!xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,xe.__version=z.version);let jt=xe.currentProgram;Ye===!0&&(jt=Mr(z,D,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,jt,xe));let _n=!1,Gn=!1,rs=!1;const st=jt.getUniforms(),xt=xe.uniforms;if(x.useProgram(jt.program)&&(_n=!0,Gn=!0,rs=!0),z.id!==ne&&(ne=z.id,Gn=!0),xe.needsLights){const ot=Vh(b.state.lightProbeGridArray,G);xe.lightProbeGrid!==ot&&(xe.lightProbeGrid=ot,Gn=!0)}if(_n||fe!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(L,"projectionMatrix",M.projectionMatrix),st.setValue(L,"viewMatrix",M.matrixWorldInverse);const Vn=st.map.cameraPosition;Vn!==void 0&&Vn.setValue(L,bt.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&st.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),fe!==M&&(fe=M,Gn=!0,rs=!0)}if(xe.needsLights&&(Xt.state.directionalShadowMap.length>0&&st.setValue(L,"directionalShadowMap",Xt.state.directionalShadowMap,q),Xt.state.spotShadowMap.length>0&&st.setValue(L,"spotShadowMap",Xt.state.spotShadowMap,q),Xt.state.pointShadowMap.length>0&&st.setValue(L,"pointShadowMap",Xt.state.pointShadowMap,q)),G.isSkinnedMesh){st.setOptional(L,G,"bindMatrix"),st.setOptional(L,G,"bindMatrixInverse");const ot=G.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),st.setValue(L,"boneTexture",ot.boneTexture,q))}G.isBatchedMesh&&(st.setOptional(L,G,"batchingTexture"),st.setValue(L,"batchingTexture",G._matricesTexture,q),st.setOptional(L,G,"batchingIdTexture"),st.setValue(L,"batchingIdTexture",G._indirectTexture,q),st.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(L,"batchingColorTexture",G._colorsTexture,q));const Hn=W.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&P.update(G,W,jt),(Gn||xe.receiveShadow!==G.receiveShadow)&&(xe.receiveShadow=G.receiveShadow,st.setValue(L,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(xt.envMapIntensity.value=D.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Ov()),Gn){if(st.setValue(L,"toneMappingExposure",I.toneMappingExposure),xe.needsLights&&qh(xt,rs),me&&z.fog===!0&&we.refreshFogUniforms(xt,me),we.refreshMaterialUniforms(xt,z,ie,ae,b.state.transmissionRenderTarget[M.id]),xe.needsLights&&xe.lightProbeGrid){const ot=xe.lightProbeGrid;xt.probesSH.value=ot.texture,xt.probesMin.value.copy(ot.boundingBox.min),xt.probesMax.value.copy(ot.boundingBox.max),xt.probesResolution.value.copy(ot.resolution)}na.upload(L,$l(xe),xt,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(na.upload(L,$l(xe),xt,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(L,"center",G.center),st.setValue(L,"modelViewMatrix",G.modelViewMatrix),st.setValue(L,"normalMatrix",G.normalMatrix),st.setValue(L,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const ot=z.uniformsGroups;for(let Vn=0,as=ot.length;Vn<as;Vn++){const Yl=ot[Vn];te.update(Yl,jt),te.bind(Yl,jt)}}return jt}function qh(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function $h(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,D,W){const z=H.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=D,H.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const W=H.get(M);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,W=0){j=M,Y=D,V=W;let z=null,G=!1,me=!1;if(M){const pe=H.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,pe.__webglFramebuffer),ve.copy(M.viewport),ye.copy(M.scissor),Ke=M.scissorTest,x.viewport(ve),x.scissor(ye),x.setScissorTest(Ke),ne=-1;return}else if(pe.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(pe.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(pe.__boundDepthTexture!==Be){if(Be!==null&&H.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const Te=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?z=Te[D][W]:z=Te[D],G=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?z=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[W]:z=Te,ve.copy(M.viewport),ye.copy(M.scissor),Ke=M.scissorTest}else ve.copy(Ie).multiplyScalar(ie).floor(),ye.copy(gt).multiplyScalar(ie).floor(),Ke=Ve;if(W!==0&&(z=X),x.bindFramebuffer(L.FRAMEBUFFER,z)&&x.drawBuffers(M,z),x.viewport(ve),x.scissor(ye),x.setScissorTest(Ke),G){const pe=H.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,W)}else if(me){const pe=D;for(let be=0;be<M.textures.length;be++){const Te=H.get(M.textures[be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+be,Te.__webglTexture,W,pe)}}else if(M!==null&&W!==0){const pe=H.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,W)}ne=-1},this.readRenderTargetPixels=function(M,D,W,z,G,me,_e,pe=0){if(!(M&&M.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){x.bindFramebuffer(L.FRAMEBUFFER,be);try{const Te=M.textures[pe],Be=Te.format,Ge=Te.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!E.textureFormatReadable(Be)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(Ge)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&W>=0&&W<=M.height-G&&L.readPixels(D,W,z,G,he.convert(Be),he.convert(Ge),me)}finally{const Te=j!==null?H.get(j).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,D,W,z,G,me,_e,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be)if(D>=0&&D<=M.width-z&&W>=0&&W<=M.height-G){x.bindFramebuffer(L.FRAMEBUFFER,be);const Te=M.textures[pe],Be=Te.format,Ge=Te.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+pe),!E.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),L.readPixels(D,W,z,G,he.convert(Be),he.convert(Ge),0);const et=j!==null?H.get(j).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,et);const vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ef(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(Ae),L.deleteSync(vt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,W=0){const z=Math.pow(2,-W),G=Math.floor(M.image.width*z),me=Math.floor(M.image.height*z),_e=D!==null?D.x:0,pe=D!==null?D.y:0;q.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,_e,pe,G,me),x.unbindTexture()},this.copyTextureToTexture=function(M,D,W=null,z=null,G=0,me=0){let _e,pe,be,Te,Be,Ge,Ae,et,vt;const mt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(W!==null)_e=W.max.x-W.min.x,pe=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Be=W.min.y,Ge=W.isBox3?W.min.z:0;else{const xt=Math.pow(2,-G);_e=Math.floor(mt.width*xt),pe=Math.floor(mt.height*xt),M.isDataArrayTexture?be=mt.depth:M.isData3DTexture?be=Math.floor(mt.depth*xt):be=1,Te=0,Be=0,Ge=0}z!==null?(Ae=z.x,et=z.y,vt=z.z):(Ae=0,et=0,vt=0);const it=he.convert(D.format),Lt=he.convert(D.type);let xe;D.isData3DTexture?(q.setTexture3D(D,0),xe=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(q.setTexture2DArray(D,0),xe=L.TEXTURE_2D_ARRAY):(q.setTexture2D(D,0),xe=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Xt=x.getParameter(L.UNPACK_ROW_LENGTH),Ye=x.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=x.getParameter(L.UNPACK_SKIP_PIXELS),_n=x.getParameter(L.UNPACK_SKIP_ROWS),Gn=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),x.pixelStorei(L.UNPACK_SKIP_ROWS,Be),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);const rs=M.isDataArrayTexture||M.isData3DTexture,st=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const xt=H.get(M),Hn=H.get(D),ot=H.get(xt.__renderTarget),Vn=H.get(Hn.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,ot.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let as=0;as<be;as++)rs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(M).__webglTexture,G,Ge+as),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(D).__webglTexture,me,vt+as)),L.blitFramebuffer(Te,Be,_e,pe,Ae,et,_e,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||H.has(M)){const xt=H.get(M),Hn=H.get(D);x.bindFramebuffer(L.READ_FRAMEBUFFER,J),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let ot=0;ot<be;ot++)rs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,G,Ge+ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,G),st?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Hn.__webglTexture,me,vt+ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Hn.__webglTexture,me),G!==0?L.blitFramebuffer(Te,Be,_e,pe,Ae,et,_e,pe,L.COLOR_BUFFER_BIT,L.NEAREST):st?L.copyTexSubImage3D(xe,me,Ae,et,vt+ot,Te,Be,_e,pe):L.copyTexSubImage2D(xe,me,Ae,et,Te,Be,_e,pe);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else st?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(xe,me,Ae,et,vt,_e,pe,be,it,Lt,mt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,me,Ae,et,vt,_e,pe,be,it,mt.data):L.texSubImage3D(xe,me,Ae,et,vt,_e,pe,be,it,Lt,mt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,Ae,et,_e,pe,it,Lt,mt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,Ae,et,mt.width,mt.height,it,mt.data):L.texSubImage2D(L.TEXTURE_2D,me,Ae,et,_e,pe,it,Lt,mt);x.pixelStorei(L.UNPACK_ROW_LENGTH,Xt),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),x.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),x.pixelStorei(L.UNPACK_SKIP_ROWS,_n),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Gn),me===0&&D.generateMipmaps&&L.generateMipmap(xe),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){Y=0,V=0,j=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}const Li=class Li{constructor(){}static getInstance(){return Li.instance||(Li.instance=new Li),Li.instance}get tileSize(){return B.config.render.tileWidth}get tileWidth(){return this.tileSize}get tileHeight(){return this.tileSize}worldToScreen(e,t,n=0){return{x:t*this.tileSize,y:e*this.tileSize-n}}tileCenter(e,t,n=0){return this.worldToScreen(e+.5,t+.5,n)}screenToWorld(e,t){return{col:e/this.tileSize,row:t/this.tileSize}}};O(Li,"instance");let al=Li;const Wt=al.getInstance();let Xr=null;function kv(){if(!Xr){const r=document.createElement("canvas");r.width=16,r.height=16;const e=r.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(8,8,7,0,Math.PI*2),e.fill(),Xr=new vr(r),Xr.colorSpace=Ct}return Xr}const Di=class Di{constructor(){O(this,"items",[])}static getInstance(){return Di.instance||(Di.instance=new Di),Di.instance}get count(){return this.items.length}burst(e,t,n,i,s){const a=B.config.render.maxParticles,o=s?.speed??.08,l=s?.life??600,c=s?.size??4;for(let h=0;h<i;h++){const u=Math.PI*2*h/i+Math.random()*.4,d=o*(.6+Math.random()*.8);this.items.push({x:e,y:t,vx:Math.cos(u)*d,vy:Math.sin(u)*d,life:l,maxLife:l,color:n,size:c,view:null})}for(;this.items.length>a;)this.removeAt(0)}update(e){const t=[];for(const n of this.items)n.life-=e,n.x+=n.vx*e,n.y+=n.vy*e,n.vy+=8e-5*e,n.life>0?t.push(n):this.disposeView(n);this.items=t}syncTo(e){const t=Wt.tileSize;for(const n of this.items){if(!n.view){const s=n.size*2/t;n.view=new Ji(new ni({map:kv(),color:new ke(n.color),transparent:!0,depthTest:!0,depthWrite:!1})),n.view.scale.set(s,s,1),n.view.renderOrder=3}n.view.parent!==e&&e.add(n.view);const i=1-n.life/n.maxLife;n.view.position.set(n.x/t,.5+i*.6,n.y/t),n.view.material.opacity=Math.max(0,Math.min(1,n.life/n.maxLife))}}clear(){for(const e of this.items)this.disposeView(e);this.items=[]}removeAt(e){const t=this.items[e];t&&(this.disposeView(t),this.items.splice(e,1))}disposeView(e){e.view&&(e.view.parent?.remove(e.view),e.view.material.dispose(),e.view=null)}};O(Di,"instance");let ur=Di;const jc=new Map;function zv(r,e,t){const n=`${r}|${e}|${t}`;let i=jc.get(n);if(!i){const s=`bold ${t*2}px "Microsoft YaHei", sans-serif`,a=document.createElement("canvas").getContext("2d");a.font=s;const o=Math.max(8,Math.ceil(a.measureText(r).width)+20),l=Math.ceil(t*2+18),c=document.createElement("canvas");c.width=o,c.height=l;const h=c.getContext("2d");h.font=s,h.textAlign="center",h.textBaseline="middle",h.lineWidth=6,h.strokeStyle="#000000",h.strokeText(r,o/2,l/2),h.fillStyle=e,h.fillText(r,o/2,l/2),i=new vr(c),i.colorSpace=Ct,jc.set(n,i)}return i}let Yr=null;function Gv(){if(!Yr){const r=document.createElement("canvas");r.width=16,r.height=16;const e=r.getContext("2d");e.fillStyle="#ffffff",e.beginPath(),e.arc(8,8,7,0,Math.PI*2),e.fill(),Yr=new vr(r),Yr.colorSpace=Ct}return Yr}const Ui=class Ui{constructor(){O(this,"particles",[])}static getInstance(){return Ui.instance||(Ui.instance=new Ui),Ui.instance}floatText(e,t,n,i="#ffffff"){const s=Wt.tileCenter(t,e);this.push({x:s.x,y:s.y-30,vx:0,vy:-.03,life:1100,maxLife:1100,color:i,size:15,type:"text",text:n,opacity:1})}sparkle(e,t,n="#ffdd44",i=8){const s=Wt.tileCenter(t,e);ur.getInstance().burst(s.x,s.y,n,i,{speed:.08,life:600,size:4})}push(e){const t=Math.max(50,Math.floor(B.config.render.maxParticles/2));this.particles.length>=t&&this.destroyView(this.particles.shift());const n=Wt.tileSize;let i;if(e.type==="text"&&e.text){const s=zv(e.text,e.color,e.size),a=s.image,o=e.size*2/n;i=new Ji(new ni({map:s,transparent:!0,depthTest:!0,depthWrite:!1})),i.scale.set(o*(a.width/a.height),o,1)}else{const s=e.size*2/n;i=new Ji(new ni({map:Gv(),color:new ke(e.color),transparent:!0,depthTest:!0,depthWrite:!1})),i.scale.set(s,s,1)}i.renderOrder=4,this.particles.push({...e,view:i})}update(e){for(const t of this.particles)t.life-=e,t.x+=t.vx*e,t.y+=t.vy*e,t.type==="circle"&&(t.vy+=1e-4*e),t.opacity=Math.max(0,Math.min(1,t.life/t.maxLife)),t.life<=0&&this.destroyView(t);this.particles=this.particles.filter(t=>t.life>0)}syncTo(e){const t=Wt.tileSize;for(const n of this.particles){n.view.parent!==e&&e.add(n.view);const i=1-n.life/n.maxLife,s=n.type==="text"?1.2+i*.9:.6+i*.4;n.view.position.set(n.x/t,s,n.y/t),n.view.material.opacity=n.opacity}}destroyView(e){e.view.parent?.remove(e.view),e.view.material.dispose()}clear(){for(const e of this.particles)this.destroyView(e);this.particles=[]}};O(Ui,"instance");let rn=Ui;const Fi=class Fi{constructor(){}static getInstance(){return Fi.instance||(Fi.instance=new Fi),Fi.instance}goldForFloor(e){const t=B.config.chestRewards.goldBands,n=t.find(i=>e>=i.minFloor&&e<=i.maxFloor)??t[t.length-1];return Me.randInt(n.min,n.max)}open(e,t){const n=Re.getInstance(),i=He.getInstance(),s=B.config.chestRewards,a=e.chestTier==="grand",o=n.state.currentFloor,l=Math.round(this.goldForFloor(o)*(a?2.5:1)),c={gold:l,equipment:!1,potion:null};if(s.goldAlways&&l>0&&n.gainGold(l),a||Me.chance(s.equipmentChance)){const h=ji.getInstance().generate(a?"boss":"chest",{floorId:o});n.addEquipment(h),c.equipment=!0}if(Me.chance(s.potionChance)){const h=this.potionTierForFloor(o);h&&(n.addPotion(h,1),c.potion=h)}return i.markOpened(e.id),e.x,e.y,rn.getInstance().sparkle(e.x,e.y,"#ffdd44",10),ee.emit("chestOpened",{entityId:e.id,roomType:t}),c}potionTierForFloor(e){return B.potions.potions.filter(n=>e>=n.minFloor&&e<=n.maxFloor).sort((n,i)=>i.healPct-n.healPct)[0]?.tier??null}potionTierLower(e,t){const n=B.potions.potions.filter(s=>e>=s.minFloor&&e<=s.maxFloor).sort((s,a)=>a.healPct-s.healPct),i=Math.min(t,n.length-1);return n[i]?.tier??null}};O(Fi,"instance");let fr=Fi;const Ni=class Ni{constructor(){}static getInstance(){return Ni.instance||(Ni.instance=new Ni),Ni.instance}battle(e){const t=Re.getInstance(),n=He.getInstance(),i=B.getMonster(e.monsterId??""),s=t.state.currentFloor;if(!i)throw new Error(`未知怪物: ${e.monsterId}`);const a=Bn.getInstance().monsterStats(i,s,e.kind==="boss"?!1:!!e.isElite),o=B.config.battle,l=t.stats(),c=[];let h=a.hp,u=0,d=0,f=null;const p=(S,w)=>c.push({turn:d,text:S,kind:w});for(p(`遭遇 ${a.name}！`,"system");t.state.hp>0&&h>0&&d<o.maxTurns;){d++;let S=0;if(Me.chance((a.isBoss,l.critRate/100))){const w=Math.max(o.minDamage,Math.round((l.attack-a.defense)*(1+(Math.random()*2-1)*o.damageJitter)));S=Math.round(w*o.critMultiplier)+l.fireDamage,p(`暴击！对${a.name}造成 ${S} 点伤害`,"player")}else S=Math.max(o.minDamage,Math.round((l.attack-a.defense)*(1+(Math.random()*2-1)*o.damageJitter)))+l.fireDamage,p(`对${a.name}造成 ${S} 点伤害${l.fireDamage>0?`（业火+${l.fireDamage}）`:""}`,"player");if(a.isBoss&&(S=Math.round(S*(1+l.bossDamage/100))),h-=S,l.lifesteal>0&&t.state.hp<t.maxHp){const w=Math.round(S*l.lifesteal/100);w>0&&(t.heal(w),p(`嗜血回复 ${w} 生命`,"player"))}if(h<=0)break;if(Me.chance(l.dodgeRate/100))p(`闪避了${a.name}的攻击`,"player");else{const w=Math.max(o.minDamage,Math.round((a.attack-l.defense)*(1+(Math.random()*2-1)*o.damageJitter)));t.damage(w),u+=w,p(`${a.name}对你造成 ${w} 点伤害`,"monster")}if(t.state.hp>0&&t.state.hp<t.maxHp*.3){const w=t.bestPotionFor(t.maxHp-t.state.hp);if(w){const y=B.getPotion(w);t.usePotion(w),f=y.name,p(`自动饮下${y.name}`,"system")}}}const v=d>=o.maxTurns,g=h<=0||v&&h/a.hp<t.state.hp/t.maxHp,m={win:g,log:c,damageTaken:u,turns:d,expGained:0,goldGained:0,monsterName:a.name,isBoss:a.isBoss,isElite:a.isElite};if(g){m.expGained=a.exp,m.goldGained=a.gold,t.gainExp(a.exp),t.gainGold(a.gold),n.markDefeated(e.id),p(`击败${a.name}！获得 ${a.exp} 经验、${a.gold} 金币`,"reward");const S=B.config.monsterDrops;if(a.isBoss||Me.chance(S.equipmentChance)){const w=ji.getInstance().generate(a.isBoss?"boss":"monster",{floorId:s});t.addEquipment(w),p(`掉落了 ${w.name}`,"reward")}if(!a.isBoss&&Me.chance(S.potionChance)){const w=fr.getInstance().potionTierLower(s,Me.randInt(1,2));w&&(t.addPotion(w,1),p(`掉落了 ${B.getPotion(w)?.name}`,"reward"))}f&&p(`战斗中消耗了${f}`,"system"),ee.emit("monsterDefeated",{entityId:e.id,name:a.name,isElite:a.isElite,isBoss:a.isBoss}),a.isBoss&&ee.emit("bossDefeated",{floor:s,name:a.name})}else t.state.hp<=0?(p(`你被${a.name}击败了……`,"monster"),ee.emit("playerDied",{cause:a.name})):p("战斗胶着，你被迫撤退","system");return ee.emit("battleEnded",{result:m}),m}forecast(e){const t=Re.getInstance(),n=B.getMonster(e.monsterId??"");if(!n)return{winnable:!1,estDamage:0};const i=Bn.getInstance().monsterStats(n,t.state.currentFloor,!!e.isElite),s=t.stats(),a=Math.max(1,s.attack-i.defense)+s.fireDamage,o=Math.max(1,i.attack-s.defense),c=Math.ceil(i.hp/a)*o*(1-s.dodgeRate/100);return{winnable:c<t.state.hp,estDamage:Math.round(c)}}};O(Ni,"instance");let pr=Ni;const Oi=class Oi{constructor(){O(this,"camX",0);O(this,"camY",0);O(this,"targetX",0);O(this,"targetY",0);O(this,"snapped",!1)}static getInstance(){return Oi.instance||(Oi.instance=new Oi),Oi.instance}get x(){return this.camX}get y(){return this.camY}snapToPlayer(){const e=Re.getInstance().pos,t=Wt.tileCenter(e.y,e.x);this.camX=t.x,this.camY=t.y,this.targetX=t.x,this.targetY=t.y,this.snapped=!0}roomScreenBounds(e){const t=B.config.heights,n=Math.max(t.wallByRoom[e.type]??60,t.corridorWall),i=Wt.tileSize,s=B.config.camera.roomPaddingPx;return{minX:e.x*i-s,maxX:(e.x+e.width)*i+s,minY:e.y*i-n-s,maxY:(e.y+e.height)*i+s}}update(e){const t=Re.getInstance(),n=He.getInstance(),i=t.pos,s=Wt.tileCenter(i.y,i.x);this.targetX=s.x,this.targetY=s.y;const a=document.getElementById("game-canvas"),o=(a?.clientWidth??window.innerWidth)/2,l=(a?.clientHeight??window.innerHeight)/2,c=n.getRoomAt(i.x,i.y);if(c){const h=this.roomScreenBounds(c),u=h.maxX-h.minX,d=h.maxY-h.minY;if(u<=o*2&&d<=l*2)this.targetX=(h.minX+h.maxX)/2,this.targetY=(h.minY+h.maxY)/2;else{const f=(h.minX+h.maxX)/2,p=(h.minY+h.maxY)/2;u<=o*2?this.targetX=f:this.targetX=pn.clamp(this.targetX,h.minX+o,h.maxX-o),d<=l*2?this.targetY=p:this.targetY=pn.clamp(this.targetY,h.minY+l,h.maxY-l)}}else{const h=n.currentFloor;if(h){const u=this.roomScreenBounds({x:0,y:0,width:h.width,height:h.height,type:"combat"});this.targetX=pn.clamp(this.targetX,u.minX+o,u.maxX-o),this.targetY=pn.clamp(this.targetY,u.minY+l,u.maxY-l)}}if(!this.snapped)this.camX=this.targetX,this.camY=this.targetY,this.snapped=!0;else{const h=1-Math.pow(1-B.config.camera.lerp,e/16.67);this.camX=pn.lerp(this.camX,this.targetX,h),this.camY=pn.lerp(this.camY,this.targetY,h)}}};O(Oi,"instance");let ln=Oi;const Bi=class Bi{constructor(e){O(this,"el");O(this,"onConfirm",null);Bi.instance||(Bi.instance=this,this.el=document.createElement("div"),this.el.className="overlay-panel hidden confirm-panel",e.appendChild(this.el),window.addEventListener("keydown",t=>{t.key==="Enter"&&!this.el.classList.contains("hidden")&&this.confirm(),t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.cancel()}))}static getInstance(){if(!Bi.instance)throw new Error("ConfirmDialog 尚未初始化（需在 GameUI.build 中构造）");return Bi.instance}ask(e,t,n,i="✔ 确定",s="✖ 取消"){this.onConfirm=n,lt.pushModal(),this.el.classList.remove("hidden"),this.el.innerHTML=`
      <div class="dialog-box confirm-box">
        <div class="dialog-name">${e}</div>
        <div class="dialog-text">${t}</div>
        <div class="dim confirm-hint">（Enter 确认 · Esc 取消）</div>
        <div class="dialog-actions">
          <button id="confirm-cancel">${s}</button>
          <button id="confirm-ok" class="btn-primary">${i}</button>
        </div>
      </div>
    `,this.el.querySelector("#confirm-ok").addEventListener("click",()=>this.confirm()),this.el.querySelector("#confirm-cancel").addEventListener("click",()=>this.cancel()),this.el.querySelector("#confirm-ok").focus()}confirm(){const e=this.onConfirm;this.close(),e?.()}cancel(){this.close()}close(){this.el.classList.contains("hidden")||(this.onConfirm=null,this.el.classList.add("hidden"),lt.popModal())}};O(Bi,"instance");let da=Bi;const ki=class ki{constructor(){O(this,"lastRoomId","");O(this,"pathQueue",[]);O(this,"moving",!1);O(this,"moveBlockMs",0);O(this,"pendingInteract",null);ee.on("playerDied",()=>this.handleDeath())}static getInstance(){return ki.instance||(ki.instance=new ki),ki.instance}get inputBlocked(){return!lt.started||lt.paused||lt.modalOpen||!Re.getInstance().isAlive}tryMove(e,t){if(this.inputBlocked||this.moveBlockMs>0)return;this.pathQueue=[];const n=Re.getInstance(),i=n.state.x+e,s=n.state.y+t,a=He.getInstance(),o=a.getEntityAt(i,s);if(o){this.interact(o),this.startMoveBuffer();return}if(a.isGateLocked(i,s)){ee.emit("notification",{message:"铁门紧闭——击败 Boss 后才会开启",type:"warning",icon:"🚪"}),this.startMoveBuffer();return}a.isWalkable(i,s)&&(n.state.x=i,n.state.y=s,ee.emit("playerMoved",{x:i,y:s}),this.startMoveBuffer(),this.afterStep())}startMoveBuffer(){this.moveBlockMs=B.config.input.moveBufferMs}moveTo(e,t){if(this.inputBlocked)return;const n=He.getInstance();if(!n.inBounds(e,t))return;const i=Re.getInstance();if(i.state.x===e&&i.state.y===t)return;const s=n.getEntityAt(e,t);if(s){if(Math.abs(i.state.x-e)+Math.abs(i.state.y-t)===1){this.interact(s);return}const o=this.findPath(e,t,{stopAdjacent:!0});o&&(this.pathQueue=o,this.pendingInteract=s);return}if(!n.isWalkable(e,t))return;const a=this.findPath(e,t,{stopAdjacent:!1});a&&a.length>0&&(this.pathQueue=a)}update(e=0){if(this.moveBlockMs>0&&(this.moveBlockMs-=e),this.inputBlocked){this.pathQueue=[];return}if(this.checkRoomEnter(),this.moving||this.pathQueue.length===0||this.moveBlockMs>0)return;const t=this.pathQueue.shift(),n=Re.getInstance(),i=He.getInstance(),s=i.getEntityAt(t.x,t.y);if(s){this.pathQueue=[],this.interact(s);return}if(!i.isWalkable(t.x,t.y)){this.pathQueue=[];return}if(n.state.x=t.x,n.state.y=t.y,ee.emit("playerMoved",{x:t.x,y:t.y}),this.startMoveBuffer(),this.afterStep(),this.pathQueue.length===0&&this.pendingInteract){const a=this.pendingInteract;this.pendingInteract=null,i.getEntityAt(a.x,a.y)?.id===a.id&&this.interact(a)}}findPath(e,t,n){const i=He.getInstance(),s=i.currentFloor,a=Re.getInstance();if(!s)return null;const o={x:a.state.x,y:a.state.y},l=(d,f)=>`${d},${f}`,c=new Map([[l(o.x,o.y),null]]),h=[o],u=(d,f)=>n.stopAdjacent?Math.abs(d-e)+Math.abs(f-t)===1:d===e&&f===t;for(;h.length>0;){const d=h.shift();if(u(d.x,d.y)){const f=[];let p=d;for(;p;)f.unshift(p),p=c.get(l(p.x,p.y))??null;return f.shift(),f}for(const[f,p]of[[0,1],[0,-1],[1,0],[-1,0]]){const v=d.x+f,g=d.y+p,m=l(v,g);c.has(m)||i.isWalkable(v,g)&&(i.getEntityAt(v,g)||(c.set(m,d),h.push({x:v,y:g})))}}return null}interact(e){if(this.inputBlocked)return;const t=He.getInstance(),n=Re.getInstance(),i=da.getInstance();switch(e.kind){case"monster":case"boss":{const s=B.getMonster(e.monsterId??""),a=s?.name??"敌人",o=e.kind==="boss";i.ask(o?"⚠️ Boss 战":"⚔️ 战斗确认",`确定攻击 <b style="color:${s?.color??"#ff9999"}">${a}</b>${e.isElite?"（精英）":""} 吗？<br/><span class="dim">战败将在楼层起点复活并损失20%金币</span>`,()=>this.doBattle(e),"⚔️ 攻击");break}case"potion":{t.markUsed(e.id);const s=e.potionTier??"crude";n.addPotion(s);const a=B.getPotion(s);rn.getInstance().floatText(e.x,e.y,`+${a?.name??"药水"}`,a?.color??"#ff5a7a"),ee.emit("potionPicked",{entityId:e.id,tier:s,name:a?.name??"药水"});break}case"fountain":{if(t.getEntityState(e.id).isUsed===!0){ee.emit("notification",{message:"治疗泉已枯竭",type:"info",icon:"💧"});break}const s=B.config.witch,a=s.fountainCostBase+n.state.currentFloor*s.fountainCostPerFloor;if(n.state.gold<a){ee.emit("notification",{message:`需要 ${a} 金币才能汲取泉水`,type:"warning",icon:"💰"});break}i.ask("💧 治疗泉",`支付 <b>${a}</b> 金币，恢复全部生命？`,()=>{n.spendGold(a);const o=n.heal(n.maxHp);t.markUsed(e.id),rn.getInstance().floatText(e.x,e.y,`+${o} HP`,"#66ffcc"),ee.emit("fountainUsed",{cost:a,healed:o})},"💧 治疗");break}case"chest":{i.ask("🎁 开启宝箱",e.chestTier==="grand"?"确定开启<b>大宝箱</b>吗？":'确定开启宝箱吗？<br/><span class="dim">可能获得金币 / 装备 / 药水</span>',()=>this.doOpenChest(e),"🎁 开启");break}case"npc":{const s=B.getNpc(e.npcId??"");s&&ee.emit("npcTalked",{npcId:s.id,name:s.name});break}case"stair":{const s=e.targetFloor??n.state.currentFloor+1;i.ask("🪜 楼梯",`确定前往<b>第 ${s} 层</b>吗？`,()=>{ri.getInstance().enterFloor(s),ln.getInstance().snapToPlayer(),this.afterFloorChange()},"🪜 前往");break}}}doBattle(e){const t=Re.getInstance(),n=pr.getInstance().battle(e);n.win?rn.getInstance().floatText(e.x,e.y,`+${n.goldGained}💰`,"#ffdd44"):t.state.hp>0&&rn.getInstance().floatText(t.state.x,t.state.y,"撤退！","#ffaa44")}doOpenChest(e){const n=He.getInstance().getRoomAt(e.x,e.y),i=fr.getInstance().open(e,n?.type??"combat");let s=`+${i.gold} 金币`;i.potion&&(s+=` +${B.getPotion(i.potion)?.name??"药水"}`),i.equipment&&(s+=" +装备"),rn.getInstance().floatText(e.x,e.y,s,"#ffdd44")}afterStep(){this.checkRoomEnter()}afterFloorChange(){this.lastRoomId="",this.checkRoomEnter()}checkRoomEnter(){const e=He.getInstance(),t=Re.getInstance(),n=e.getRoomAt(t.state.x,t.state.y),i=n?.id??"";if(i===this.lastRoomId||(this.lastRoomId=i,!n))return;t.state.currentRoomId=i;const s=B.texts.roomNames?.[n.type]??n.type;if(ee.emit("roomEntered",{roomId:i,roomType:n.type,depth:n.depth,name:s}),n.type==="rest"&&e.getEntityState(`rest_${i}`).isUsed!==!0){e.markUsed(`rest_${i}`);const o=t.heal(Math.round(t.maxHp*.3));o>0&&rn.getInstance().floatText(t.state.x,t.state.y,`休整 +${o}`,"#66ff88")}const a=n.entities.find(o=>o.kind==="boss"&&e.isEntityAlive(o));if(a){const o=B.getMonster(a.monsterId??"");ee.emit("bossWarning",{floor:n.floorId,name:o?.name??"Boss"})}}handleDeath(){const e=Re.getInstance(),t=B.config.revive,n=Math.round(e.state.gold*t.goldPenaltyRate),s=He.getInstance().currentFloor;s&&(e.state.x=s.entryX,e.state.y=s.entryY),e.spendGold(Math.min(e.state.gold,n)),e.heal(Math.round(e.maxHp*t.hpRestorePct)),this.lastRoomId="",this.checkRoomEnter(),ln.getInstance().snapToPlayer(),ee.emit("playerRevived",{penaltyGold:n})}restart(){Re.getInstance().restore({...Re.getInstance().state,level:1,exp:0,hp:B.config.playerBase.maxHp,baseMaxHp:B.config.playerBase.maxHp,baseAttack:B.config.playerBase.attack,baseDefense:B.config.playerBase.defense,gold:0,keys:0,potions:{crude:0,normal:0,quality:0,strong:0,holy:0},weaponId:null,armorId:null,bag:[]}),ri.getInstance().enterFloor(1,!1),ln.getInstance().snapToPlayer(),this.lastRoomId="",this.checkRoomEnter(),ee.emit("gameRestarted",{})}};O(ki,"instance");let On=ki;const Ts={player:"#4488ff",enemyElite:"#ff8800",enemyBoss:"#ff0044",chestClosed:"#ffcc00",chestOpened:"#888888",stairDown:"#44ddff"},zi=class zi{constructor(){}static getInstance(){return zi.instance||(zi.instance=new zi),zi.instance}get half(){return Wt.tileSize/2}drawBox(e,t,n,i,s,a,o={}){const l=this.half*s,c=o.pulse?1+.06*o.pulse:1,h=l*c;e.save(),o.alpha!==void 0&&(e.globalAlpha=o.alpha),o.glow&&(e.save(),e.globalAlpha=(o.alpha??1)*.35*(.7+.3*Math.sin(performance.now()/300)),e.fillStyle=o.glow,e.beginPath(),e.ellipse(t,n-i/2,h*1.6,h*1.6+i/2,0,0,Math.PI*2),e.fill(),e.restore()),e.fillStyle=a.left,e.fillRect(t-h,n-h-i,h*2,i),e.fillStyle=a.right,e.fillRect(t-h,n-h,h*2,h*2),e.fillStyle=a.top,e.fillRect(t-h,n-h-i,h*2,h*2),e.lineWidth=2,e.strokeStyle=a.border,e.strokeRect(t-h,n-h-i,h*2,i+h*2),o.label&&(e.font='bold 13px "Microsoft YaHei", sans-serif',e.textAlign="center",e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.75)",e.strokeText(o.label,t,n-h-i-8),e.fillStyle=o.labelColor??"#ffffff",e.fillText(o.label,t,n-h-i-8)),e.restore()}drawPaperDoll(e,t,n,i,s){const a=Math.max(16,i),o=a*.16,l=-a*.86,c=l+o*1.15,h=-a*.38,u=a*.16,d=s.body,f=s.head??this.lighten(d,.3),p=s.accent??this.lighten(d,.45),v=s.border??this.darken(d,.45);e.save(),e.translate(t,n),e.lineJoin="round",e.lineWidth=Math.max(1.5,a*.035),e.strokeStyle=v,e.fillStyle=this.darken(d,.4);const g=a*.075,m=a*.055;for(const y of[-1,1])e.beginPath(),e.rect(y*m-g/2,h,g,-h),e.fill(),e.stroke();e.fillStyle=d,e.beginPath(),e.moveTo(-u*1.05,c),e.lineTo(u*1.05,c),e.lineTo(u*.82,h),e.lineTo(-u*.82,h),e.closePath(),e.fill(),e.stroke(),e.fillStyle=p,e.fillRect(-u*.9,h-a*.06,u*1.8,a*.05),e.fillStyle=this.darken(d,.16);const S=a*.06,w=(h-c)*.84;for(const y of[-1,1]){const T=y>0?u*1.02:-u*1.02-S;e.beginPath(),e.rect(T,c+a*.02,S,w),e.fill(),e.stroke()}if(s.elite){e.fillStyle=p;for(const y of[-1,1])e.beginPath(),e.ellipse(y*u*1.05,c+a*.02,a*.075,a*.05,0,0,Math.PI*2),e.fill(),e.stroke()}if(e.fillStyle=f,e.beginPath(),e.arc(0,l,o,0,Math.PI*2),e.fill(),e.stroke(),s.horns){e.fillStyle=p;for(const y of[-1,1])e.beginPath(),e.moveTo(y*o*.72,l-o*.42),e.lineTo(y*o*1.55,l-o*1.95),e.lineTo(y*o*.22,l-o*.92),e.closePath(),e.fill(),e.stroke()}e.fillStyle="rgba(20,20,28,0.9)";for(const y of[-1,1])e.beginPath(),e.ellipse(y*o*.36,l+o*.06,o*.15,o*.2,0,0,Math.PI*2),e.fill();if(s.weapon==="sword"){const y=u*1.32;e.fillStyle="#dfe6f2",e.beginPath(),e.rect(y,l-a*.01,a*.055,(h-l)*.96),e.fill(),e.stroke(),e.fillStyle=p,e.fillRect(y-a*.05,h-a*.11,a*.155,a*.035),e.fillStyle="#6b4a2a",e.fillRect(y+a*.005,h-a*.08,a*.045,a*.09)}else if(s.weapon==="claw"){e.strokeStyle=p,e.lineWidth=Math.max(1.5,a*.03);for(let y=0;y<3;y++){const T=c+a*.03+y*a*.05;e.beginPath(),e.moveTo(u*1.08,T),e.lineTo(u*1.72,T+a*.035),e.stroke()}e.strokeStyle=v,e.lineWidth=Math.max(1.5,a*.035)}else s.weapon==="staff"&&(e.strokeStyle="#7a5230",e.lineWidth=Math.max(2,a*.045),e.beginPath(),e.moveTo(-u*1.42,h),e.lineTo(-u*1.42,l-o*.5),e.stroke(),e.fillStyle=p,e.beginPath(),e.arc(-u*1.42,l-o*1.05,a*.06,0,Math.PI*2),e.fill(),e.stroke(),e.strokeStyle=v,e.lineWidth=Math.max(1.5,a*.035));if(s.label){const y=Math.max(18,Math.round(a*.44));e.font=`bold ${y}px "Microsoft YaHei", sans-serif`,e.textAlign="center",e.lineWidth=Math.max(3,y*.18),e.strokeStyle="rgba(0,0,0,0.78)";const T=l-o-(s.horns?a*.13:a*.06);e.strokeText(s.label,0,T),e.fillStyle=s.labelColor??"#ffffff",e.fillText(s.label,0,T)}e.restore()}drawPlayer(e,t,n){const i=B.config.heights.player;this.drawBox(e,t,n,i,.62,{top:"#66aaff",left:"#2266cc",right:"#3177dd",border:Ts.player},{label:"勇者",glow:"#4488ff"})}drawMonster(e,t,n,i,s,a,o,l){const c=o?.95:a?.78:.6,h=o?Ts.enemyBoss:a?Ts.enemyElite:s;this.drawBox(e,t,n,l,c,{top:this.lighten(s,.35),left:this.darken(s,.35),right:this.darken(s,.2),border:h},{label:i,labelColor:o?"#ff5566":a?"#ffcc44":"#ffffff",glow:o?"#ff2244":void 0})}drawChest(e,t,n,i,s){const a=B.config.heights.chest+(s?8:0),o=i?Ts.chestOpened:Ts.chestClosed,l=i?0:.5+.5*Math.sin(performance.now()/400);this.drawBox(e,t,n,a,s?.7:.55,{top:i?"#aaaaaa":"#ffe066",left:i?"#666666":"#b8860b",right:i?"#777777":"#daa520",border:o},{label:i?"":s?"大宝箱":"宝箱",labelColor:"#ffcc00",pulse:l})}drawNpc(e,t,n,i,s){const a=B.config.heights.npc;this.drawBox(e,t,n,a,.62,{top:this.lighten(s,.35),left:this.darken(s,.3),right:this.darken(s,.15),border:s},{label:i,labelColor:"#ffffff",pulse:.5+.5*Math.sin(performance.now()/500)})}drawStair(e,t,n,i){const s=.5+.5*Math.sin(performance.now()/600),a=this.half*.7;e.save(),e.globalAlpha=.3+.25*s,e.fillStyle=Ts.stairDown,e.beginPath(),e.ellipse(t,n,a*1.6,a*1.6,0,0,Math.PI*2),e.fill(),e.globalAlpha=1,e.fillStyle="#44ddff",e.fillRect(t-a,n-a,a*2,a*2),e.lineWidth=2,e.strokeStyle="#aaffff",e.strokeRect(t-a,n-a,a*2,a*2),e.font='bold 22px "Microsoft YaHei", sans-serif',e.textAlign="center",e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.78)",e.strokeText(`▼${i}`,t,n-a-12),e.fillStyle="#44ddff",e.fillText(`▼${i}`,t,n-a-8),e.restore()}drawTorch(e,t,n,i){const s=B.config.heights.torch,a=n-s;e.save(),e.strokeStyle="#7a5230",e.lineWidth=4,e.beginPath(),e.moveTo(t,n-(i>0?i*.55:0)),e.lineTo(t,a),e.stroke();const o=.7+.3*Math.abs(Math.sin(performance.now()/90));e.fillStyle="#ff8833",e.beginPath(),e.ellipse(t,a-4,5*o,9*o,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffcc66",e.beginPath(),e.ellipse(t,a-2,3*o,5*o,0,0,Math.PI*2),e.fill(),e.restore()}drawPillar(e,t,n){this.drawBox(e,t,n,B.config.heights.pillar,.4,{top:"#cccccc",left:"#777777",right:"#999999",border:"#aaaaaa"})}lighten(e,t){return this.mix(e,"#ffffff",t)}darken(e,t){return this.mix(e,"#000000",t)}mix(e,t,n){const i=this.parseHex(e),s=this.parseHex(t),a=Math.round(i.r+(s.r-i.r)*n),o=Math.round(i.g+(s.g-i.g)*n),l=Math.round(i.b+(s.b-i.b)*n);return`rgb(${a},${o},${l})`}parseHex(e){const t=e.replace("#","");return{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}}};O(zi,"instance",null);let ol=zi;const nn=ol.getInstance(),eh={start:{base:"#8a97a8",alt:"#8290a2",line:"rgba(255,255,255,0.10)"},end:{base:"#8fa3b8",alt:"#869bb0",line:"rgba(255,255,255,0.10)"},combat:{base:"#6f7987",alt:"#687280",line:"rgba(255,255,255,0.08)"},elite:{base:"#8e7a78",alt:"#867270",line:"rgba(255,255,255,0.08)"},chest:{base:"#9a9184",alt:"#928a7d",line:"rgba(255,255,255,0.10)"},merchant:{base:"#9a8f7e",alt:"#928779",line:"rgba(255,255,255,0.10)"},witch:{base:"#7d6f9a",alt:"#766893",line:"rgba(230,200,255,0.14)"},boss:{base:"#8a6f6f",alt:"#826868",line:"rgba(255,255,255,0.08)"},rest:{base:"#87987f",alt:"#809178",line:"rgba(255,255,255,0.10)"},corridor:{base:"#75808f",alt:"#6f7a89",line:"rgba(255,255,255,0.07)"}};function Zn(r,e,t){const n=document.createElement("canvas");n.width=Math.max(1,Math.ceil(r)),n.height=Math.max(1,Math.ceil(e));const i=n.getContext("2d");return t(i),n}function Sn(r,e,t){const n=a=>{const o=a.replace("#","");return{r:parseInt(o.slice(0,2),16),g:parseInt(o.slice(2,4),16),b:parseInt(o.slice(4,6),16)}},i=n(r),s=n(e);return`rgb(${Math.round(i.r+(s.r-i.r)*t)},${Math.round(i.g+(s.g-i.g)*t)},${Math.round(i.b+(s.b-i.b)*t)})`}class Hv{constructor(){O(this,"floorCache",new Map);O(this,"wallCache",new Map);O(this,"entityCache",new Map);O(this,"glowCache",new Map);O(this,"vignette",null);O(this,"cone",null);O(this,"chestOpened",!1)}get tile(){return Wt.tileSize}floor(e,t){const n=`floor_${e}_${t}`;let i=this.floorCache.get(n);if(!i){const s=eh[e]??eh.corridor,a=t===0?s.base:s.alt,o=this.tile;i=Zn(o,o,l=>{l.fillStyle=a,l.fillRect(0,0,o,o),l.strokeStyle=s.line,l.lineWidth=B.config.render.gridLineWidth,l.strokeRect(.5,.5,o-1,o-1)}),this.floorCache.set(n,i)}return i}carpet(){const e="carpet";let t=this.floorCache.get(e);if(!t){const n=this.tile;t=Zn(n,n,i=>{const s=n/2*.92;i.fillStyle="rgba(160,60,60,0.55)",i.fillRect(n/2-s,n/2-s,s*2,s*2),i.strokeStyle="rgba(220,150,80,0.5)",i.lineWidth=2,i.strokeRect(n/2-s,n/2-s,s*2,s*2)}),this.floorCache.set(e,t)}return t}wall(e,t,n){const i=`wall_${e}_${t?1:0}_${n?1:0}`;let s=this.wallCache.get(i);if(!s){const a=this.tile,o=a/2;s=Zn(a,a+e,l=>{l.fillStyle="rgba(0,0,0,0.2)",l.fillRect(0,a+e-2+3,a,5),l.translate(o,o+e);const c=n?"#6d6d75":t?"#565d6b":"#4b515e",h=n?"#9d9da6":t?"#7d8697":"#6f7889";l.fillStyle=c,l.fillRect(-o,-o-e,a,e),l.fillStyle=n?"#7d7d86":t?"#646c7b":"#565d6b",l.fillRect(-o,-o,a,a),l.fillStyle=h,l.fillRect(-o,-o-e,a,a),l.strokeStyle="rgba(20,24,32,0.55)",l.lineWidth=1.5,l.strokeRect(-o,-o-e,a,e+a),l.strokeStyle="rgba(15,18,26,0.35)",l.lineWidth=1;for(const u of[.35,.7]){const d=-o-e*u;l.beginPath(),l.moveTo(-o,d),l.lineTo(o,d),l.stroke()}}),this.wallCache.set(i,s)}return s}entity(e,t,n,i,s=!1){this.chestOpened=s;const a=this.entityKey(e,t,n,i);let o=this.entityCache.get(a);if(o)return o;const l=this.tile,c=l+110,h=l+i+70;return o=Zn(c,h,u=>{const d=c/2,f=h-l/2;switch(u.save(),u.translate(d,f),e.kind){case"monster":{const p=n;p&&(p.id==="slime"?nn.drawBox(u,0,0,i,e.isElite?.78:.6,{top:Sn(p.color,"#ffffff",.35),left:Sn(p.color,"#000000",.35),right:Sn(p.color,"#000000",.2),border:e.isElite?"#ff8800":p.color},{label:p.name,labelColor:e.isElite?"#ffcc44":"#ffffff"}):nn.drawPaperDoll(u,0,0,i,{body:p.color,border:e.isElite?"#ff8800":Sn(p.color,"#000000",.45),accent:e.isElite?"#ffcc44":Sn(p.color,"#ffffff",.42),label:p.name,labelColor:e.isElite?"#ffcc44":"#ffffff",weapon:"claw",elite:!!e.isElite,horns:!!e.isElite}));break}case"boss":{const p=n;p&&nn.drawPaperDoll(u,0,0,i,{body:p.color,border:"#ff0044",accent:"#ff6b7a",label:p.name,labelColor:"#ff8a95",weapon:"claw",elite:!0,horns:!0});break}case"chest":{const p=this.chestOpened,v=e.chestTier==="grand",g=B.config.heights.chest+(v?8:0);nn.drawBox(u,0,0,g,v?.7:.55,{top:p?"#aaaaaa":"#ffe066",left:p?"#666666":"#b8860b",right:p?"#777777":"#daa520",border:p?"#888888":"#ffcc00"},{label:p?"":v?"大宝箱":"宝箱",labelColor:"#ffcc00"});break}case"potion":{const v=B.getPotion(e.potionTier??"")?.color??"#ff5a7a",g=B.config.heights.potion;nn.drawBox(u,0,0,g,.36,{top:Sn(v,"#ffffff",.6),left:Sn(v,"#000000",.4),right:v,border:Sn(v,"#ffffff",.75)},{label:"药水",labelColor:v});break}case"cauldron":{const p=B.config.heights.cauldron;nn.drawBox(u,0,0,p,.58,{top:"#4a3a63",left:"#241d30",right:"#332844",border:"#8a63d6"},{label:"熬药大锅",labelColor:"#c9a3ff"}),u.fillStyle="rgba(126,255,178,0.9)",u.beginPath(),u.ellipse(0,-p,l*.2,l*.09,0,0,Math.PI*2),u.fill(),u.fillStyle="rgba(220,255,235,0.85)",u.beginPath(),u.ellipse(-l*.05,-p-1,l*.05,l*.025,0,0,Math.PI*2),u.fill();break}case"shelf":{const p=B.config.heights.shelf;nn.drawBox(u,0,0,p,.5,{top:"#8a6a45",left:"#4a3624",right:"#6b4e31",border:"#a9825a"},{label:"药架",labelColor:"#ffd9a0"});const v=["#ff6b8a","#6bd6ff","#8aff9e","#ffd166"];for(let g=0;g<v.length;g++)u.fillStyle=v[g],u.fillRect(-l*.28+g*l*.16,-p-l*.14,l*.1,l*.14);break}case"fountain":{const p=B.config.heights.fountain;nn.drawBox(u,0,0,p,.66,{top:"#cfe0e6",left:"#7f949c",right:"#a3b7bf",border:"#e6f7ff"},{label:"治疗泉",labelColor:"#8ff0ff"}),u.fillStyle="rgba(110,235,255,0.92)",u.beginPath(),u.ellipse(0,-p,l*.24,l*.1,0,0,Math.PI*2),u.fill(),u.fillStyle="rgba(235,255,255,0.9)",u.beginPath(),u.ellipse(0,-p-1,l*.08,l*.035,0,0,Math.PI*2),u.fill();break}case"npc":{const p=B.getNpc(e.npcId??""),v=p?.color??"#44dd66";nn.drawPaperDoll(u,0,0,B.config.heights.npc,{body:v,border:Sn(v,"#000000",.42),accent:Sn(v,"#ffffff",.45),label:p?.name??"NPC",weapon:"staff"});break}case"stair":{const p=l*.35;u.fillStyle="#44ddff",u.fillRect(-p,-p,p*2,p*2),u.lineWidth=2,u.strokeStyle="#aaffff",u.strokeRect(-p,-p,p*2,p*2),u.font='bold 13px "Microsoft YaHei", sans-serif',u.textAlign="center",u.lineWidth=3,u.strokeStyle="rgba(0,0,0,0.75)";const v=e.targetFloor??t.floorId+1;u.strokeText(`▼${v}`,0,-p-8),u.fillStyle="#44ddff",u.fillText(`▼${v}`,0,-p-8);break}case"torch":{const p=B.config.heights.wallByRoom[t.type]??B.config.heights.corridorWall;nn.drawTorch(u,0,0,p);break}case"pillar":{nn.drawPillar(u,0,0);break}}u.restore()}),this.entityCache.set(a,o),o}player(){const e="player";let t=this.entityCache.get(e);if(t)return t;const n=this.tile,i=B.config.heights.player,s=n+110,a=n+i+70;return t=Zn(s,a,o=>{const l=s/2,c=a-n/2;o.save(),o.translate(l,c),nn.drawPaperDoll(o,0,0,i,{body:"#3f7fd6",head:"#f0c8a0",accent:"#ffd24a",border:"#1b4a91",label:"勇者",labelColor:"#ffffff",weapon:"sword",elite:!0}),o.restore()}),this.entityCache.set(e,t),t}entityKey(e,t,n,i){switch(e.kind){case"monster":return`m_${n?.id??"?"}_${e.isElite?1:0}`;case"boss":return`b_${n?.id??"?"}`;case"chest":return`c_${this.chestOpened?1:0}_${e.chestTier==="grand"?1:0}`;case"npc":return`n_${e.npcId??"?"}`;case"stair":return`s_${e.targetFloor??t.floorId+1}`;case"torch":return`t_${t.type}`;case"pillar":return"p";case"potion":return`po_${e.potionTier??"?"}`;case"cauldron":return"cauldron";case"shelf":return"shelf";case"fountain":return"fountain";default:return`x_${e.kind}`}}glow(e){let t=this.glowCache.get(e);return t||(t=Zn(128,128,n=>{const i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,e),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,128,128)}),this.glowCache.set(e,t)),t}coneTex(){return this.cone||(this.cone=Zn(128,256,n=>{const i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.beginPath(),n.moveTo(128*.42,0),n.lineTo(128*.58,0),n.lineTo(128,256),n.lineTo(0,256),n.closePath(),n.fill()})),this.cone}vignetteTex(){return this.vignette||(this.vignette=Zn(512,512,t=>{const n=t.createRadialGradient(256,256,112.64,256,256,317.44);n.addColorStop(0,"#ffffff"),n.addColorStop(.55,"#dfe2ea"),n.addColorStop(1,"#9aa0b0"),t.fillStyle=n,t.fillRect(0,0,512,512)})),this.vignette}}const pi=new Hv,th=new WeakMap;function As(r){let e=th.get(r);return e||(e=new vr(r),e.colorSpace=Ct,e.magFilter=Pt,e.minFilter=ti,e.anisotropy=4,th.set(r,e)),e}let Rs=null;function nh(){if(!Rs){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");t.fillStyle="#8a7a6a",t.fillRect(0,0,128,128),t.strokeStyle="#6a5a4a",t.lineWidth=2;for(let n=0;n<8;n++)for(let i=0;i<8;i++){const s=i*16+n%2*8;t.strokeRect(s,n*16,16,16)}Rs=new vr(e),Rs.colorSpace=Ct,Rs.wrapS=or,Rs.wrapT=or}return Rs}const ia={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vv=new ma(-1,1,1,-1,0,1);class Wv extends Gt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const qv=new Wv;class Ul{constructor(e){this._mesh=new ct(qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bh extends qs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dr.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ul(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ih extends qs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class $v extends qs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bh(ia),this.copyPass.material.blending=An,this.timer=new zf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ih!==void 0&&(a instanceof ih?n=!0:a instanceof $v&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yv extends qs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Kv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bs extends qs{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(s,a,{type:Qt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new $t(s,a,{type:Qt});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new $t(s,a,{type:Qt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Kv;this.highPassUniforms=dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dr.clone(ia.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,premultipliedAlpha:!0,blending:Ps,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new Ds,this._fsQuad=new Ul(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ce(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Bs.BlurDirectionX=new Ce(1,0);Bs.BlurDirectionY=new Ce(0,1);const Kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zv extends qs{constructor(){super(),this.isOutputPass=!0,this.uniforms=dr.clone(Kr.uniforms),this.material=new Ah({name:Kr.name,uniforms:this.uniforms,vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader}),this._fsQuad=new Ul(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},We.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===hl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Jv={uniforms:{tDiffuse:{value:null},uVignetteStrength:{value:.3},uVignetteOffset:{value:1},uVignetteDarkness:{value:1.1},uGamma:{value:1.05},uContrast:{value:1.05},uSaturation:{value:1.1},uBrightness:{value:1}},vertexShader:`
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
  `};class Qv{constructor(){O(this,"composer",null);O(this,"bloomPass",null);O(this,"gradePass",null)}get ready(){return this.composer!==null}init(e,t,n,i,s){const a=B.config.postProcess,o=new Xv(e);o.setSize(i,s),o.addPass(new Yv(t,n));const l=new Bs(new Ce(i,s),a.bloom.strength,a.bloom.radius,a.bloom.threshold);l.enabled=a.bloom.enabled,o.addPass(l),this.bloomPass=l,o.addPass(new Zv);const c=new Bh(Jv),h=c.uniforms;h.uVignetteStrength.value=Math.min(a.vignette.strength,B.config.render.vignetteMax),h.uVignetteOffset.value=a.vignette.offset,h.uVignetteDarkness.value=a.vignette.darkness,h.uGamma.value=a.adjustment.gamma,h.uContrast.value=a.adjustment.contrast,h.uSaturation.value=a.adjustment.saturation,h.uBrightness.value=a.adjustment.brightness,c.enabled=a.vignette.enabled||a.adjustment.enabled,o.addPass(c),this.gradePass=c,this.composer=o}setSize(e,t){this.composer?.setSize(e,t),this.bloomPass?.setSize(e,t)}render(){this.composer?.render()}dispose(){this.bloomPass?.dispose(),this.gradePass?.dispose(),this.composer?.dispose(),this.composer=null,this.bloomPass=null,this.gradePass=null}}const Zr=new Qv,sh=2,jv=1.5,ex={start:16773853,combat:16757575,elite:16751164,chest:16765286,merchant:16771524,witch:13077759,boss:16734794,end:12376319,rest:16771524,corridor:16746564},tx=4,nx=12,ix=6,rh=.1,Gi=class Gi{constructor(){O(this,"hoverTile",null);O(this,"renderer",null);O(this,"scene",null);O(this,"camera",null);O(this,"container",null);O(this,"raycaster",new Hf);O(this,"ready",!1);O(this,"builtFloorId",-1);O(this,"floorGroup",new fn);O(this,"wallGroup",new fn);O(this,"entityGroup",new fn);O(this,"particleGroup",new fn);O(this,"hoverMesh",null);O(this,"playerSprite",null);O(this,"playerShadow",null);O(this,"gates",[]);O(this,"wallCells",new Map);O(this,"fadeCells",new Map);O(this,"fadePool",[]);O(this,"fadeScanTimer",0);O(this,"focusX",0);O(this,"focusZ",0);O(this,"focusInit",!1);O(this,"lastTimeMs",0);O(this,"shakeTime",0);O(this,"shakeTotal",0);O(this,"shakeIntensity",0);O(this,"ambient",null);O(this,"dirLight",null);O(this,"playerTorch",null);O(this,"torchLights",new Map);O(this,"glowLights",new Map);O(this,"glowSprites",[]);O(this,"dustItems",[])}static getInstance(){return Gi.instance||(Gi.instance=new Gi),Gi.instance}async init(e){this.container=e;const t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight,i=new vf;i.background=new ke(0),this.scene=i;const s=B.config.camera3D,a=new Zt(s.fov,t/n,.1,200);this.camera=a;let o;try{o=new Bv({antialias:!0})}catch(l){console.error("[Three] WebGL 初始化失败",l),e.innerHTML='<div style="padding:24px;color:#ff8888">当前环境不支持 WebGL，无法启动游戏渲染。</div>';return}o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(t,n),o.shadowMap.enabled=!0,o.shadowMap.type=oh,o.outputColorSpace=Ct,o.domElement.id="game-canvas",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.display="block",o.domElement.style.cursor="crosshair",e.appendChild(o.domElement),this.renderer=o,this.setupLights(),i.add(this.floorGroup,this.wallGroup,this.entityGroup,this.particleGroup),this.buildHoverMesh(),Zr.init(o,i,a,t,n),Gs.getInstance().attachCanvas(o.domElement),this.ready=!0,this.rebuildFloor(),ee.on("floorChanged",()=>this.rebuildFloor()),ee.on("saveLoaded",()=>this.rebuildFloor()),ee.on("gameRestarted",()=>this.rebuildFloor()),ee.on("monsterDefeated",()=>this.rebuildEntities()),ee.on("chestOpened",()=>this.rebuildEntities()),ee.on("potionPicked",()=>this.rebuildEntities()),ee.on("battleEnded",l=>{l.result.damageTaken>Re.getInstance().maxHp*.3&&this.shake(.3,320)}),ee.on("bossDefeated",()=>this.shake(.45,520)),ee.on("playerDied",()=>this.shake(.35,420)),window.addEventListener("resize",()=>this.resize())}setupLights(){if(!this.scene)return;this.ambient=new Of(4210784,.6),this.scene.add(this.ambient);const e=new Nf(16772829,.8);e.position.set(10,20,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=.5,e.shadow.camera.far=120;const t=24;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,e.shadow.bias=-6e-4,e.shadow.normalBias=.02,this.scene.add(e),this.scene.add(e.target),this.dirLight=e,this.playerTorch=new Ja(16764006,1.5,10),this.playerTorch.castShadow=!0,this.playerTorch.shadow.mapSize.set(1024,1024),this.playerTorch.shadow.bias=-.002,this.scene.add(this.playerTorch)}buildHoverMesh(){const e=new Pl(.34,.46,4),t=new Ds({color:16777215,transparent:!0,opacity:.6,side:En}),n=new ct(e,t);n.rotation.x=-Math.PI/2,n.rotation.z=Math.PI/4,n.position.y=.06,n.visible=!1,n.renderOrder=2,this.hoverMesh=n,this.scene?.add(n)}rebuildFloor(){if(!this.ready)return;const e=He.getInstance().currentFloor;if(e){this.builtFloorId=e.floorId,this.focusInit=!1;for(const t of[...this.fadeCells.keys()])this.releaseFadeWall(t);this.fadeCells.clear(),this.clearGroup(this.floorGroup),this.clearGroup(this.wallGroup),this.buildFloorTiles(e),this.buildWalls(e),this.rebuildEntities()}}roomGridOf(e){const t={};for(const n of e.rooms)for(let i=n.y;i<n.y+n.height;i++)for(let s=n.x;s<n.x+n.width;s++)t[`${s},${i}`]=n.type;return t}buildFloorTiles(e){const t=this.roomGridOf(e),n=new Map;for(let s=0;s<e.height;s++)for(let a=0;a<e.width;a++){if(e.grid[s][a]!==0)continue;const o=t[`${a},${s}`]??"corridor",l=(s+a)%2===0?0:1,c=`${o}_${l}`;let h=n.get(c);h||(h={roomKey:o,checker:l,cells:[]},n.set(c,h)),h.cells.push([a,s])}const i=new _t;for(const s of n.values()){const a=pi.floor(s.roomKey,s.checker),o=new tn({map:As(a),roughness:.85,metalness:.05}),l=new tr(new Rt(1,rh,1),o,s.cells.length);l.receiveShadow=!0,s.cells.forEach(([c,h],u)=>{i.position.set(c+.5,-rh/2,h+.5),i.updateMatrix(),l.setMatrixAt(u,i.matrix)}),l.instanceMatrix.needsUpdate=!0,this.floorGroup.add(l)}}buildWalls(e){const t=this.roomGridOf(e),n=B.config.heights,i=Wt.tileSize,s=new Map,a=new Map,o=[];for(let c=0;c<e.height;c++)for(let h=0;h<e.width;h++){const u=e.grid[c][h];if(u!==1&&u!==2)continue;const d=u===2,f=t[`${h},${c}`];if(!d&&!f){o.push([h,c]);continue}const p=d?n.pillar:n.wallByRoom[f]??n.corridorWall,v=Math.max(.5,p/i),g=v.toFixed(2),m=d?a:s;let S=m.get(g);S||(S={h:v,cells:[]},m.set(g,S)),S.cells.push([h,c])}const l=new _t;this.wallCells.clear();for(const c of s.values()){const h=new tn({map:nh(),roughness:.8,metalness:.08}),u=new tr(new Rt(1,c.h,1),h,c.cells.length);u.castShadow=!0,u.receiveShadow=!0,c.cells.forEach(([d,f],p)=>{l.position.set(d+.5,c.h/2,f+.5),l.updateMatrix(),u.setMatrixAt(p,l.matrix),this.wallCells.set(`${d},${f}`,{mesh:u,index:p,col:d,row:f,h:c.h})}),u.instanceMatrix.needsUpdate=!0,this.wallGroup.add(u)}for(const c of a.values()){const h=new tn({color:10329510,roughness:.7,metalness:.12}),u=new tr(new Rt(.4,c.h,.4),h,c.cells.length);u.castShadow=!0,u.receiveShadow=!0,c.cells.forEach(([d,f],p)=>{l.position.set(d+.5,c.h/2,f+.5),l.updateMatrix(),u.setMatrixAt(p,l.matrix)}),u.instanceMatrix.needsUpdate=!0,this.wallGroup.add(u)}o.length>0&&this.buildFences(o,Math.max(.5,n.corridorWall/i),e.grid)}buildFences(e,t,n){const i=[],s=[];for(const[h,u]of e)(n[u]?.[h-1]===1||n[u]?.[h+1]===1?i:s).push([h,u]);const a=Math.max(.4,t*.62),o=new tn({color:7037266,roughness:.75,metalness:.25}),l=new _t,c=(h,u)=>{if(h.length===0)return;const d=new tr(new Rt(.08,a,.08),o,h.length*2);d.castShadow=!0,d.receiveShadow=!0;let f=0;for(const[g,m]of h)for(const S of[-.24,.24])l.position.set(g+.5+(u?0:S),a/2,m+.5+(u?S:0)),l.updateMatrix(),d.setMatrixAt(f++,l.matrix);d.instanceMatrix.needsUpdate=!0,this.wallGroup.add(d);const p=new tr(new Rt(u?.1:.98,.08,u?.98:.1),o,h.length);p.castShadow=!0;let v=0;for(const[g,m]of h)l.position.set(g+.5,a*.86,m+.5),l.updateMatrix(),p.setMatrixAt(v++,l.matrix);p.instanceMatrix.needsUpdate=!0,this.wallGroup.add(p)};c(i,!1),c(s,!0)}computeOccludedWalls(){const e=new Set,t=He.getInstance().currentFloor;if(!t)return e;const n=t.grid,i=B.config.camera3D,s=this.focusX,a=this.focusZ+i.distance,o=(h,u)=>{if(n[u]?.[h]!==1)return;const d=`${h},${u}`;this.wallCells.has(d)&&e.add(d)},l=(h,u)=>{const d=h+.5,f=u+.5,p=s-d,v=a-f,g=Math.hypot(p,v);if(g<.001)return;const m=p/g,S=v/g,w=.2,y=Math.min(g,jv);for(let T=.5;T<=y;T+=w){const b=Math.floor(d+m*T),R=Math.floor(f+S*T);if(R<0||R>=t.height||b<0||b>=t.width)break;n[R][b]===1&&(o(b,R),o(b-1,R),o(b+1,R))}},c=Re.getInstance().pos;l(c.x,c.y);for(const{entity:h}of He.getInstance().allEntities())(h.kind==="monster"||h.kind==="boss"||h.kind==="chest"||h.kind==="npc"||h.kind==="stair")&&l(h.x,h.y);return e}updateWallFade(e){if(this.fadeScanTimer-=e,this.fadeScanTimer<=0){this.fadeScanTimer=120;const i=this.computeOccludedWalls();for(const s of i){const a=this.fadeCells.get(s);a?a.target=1:this.fadeCells.set(s,{progress:0,target:1})}for(const[s,a]of this.fadeCells)i.has(s)||(a.target=0)}const t=Math.min(1,e/180),n=[];for(const[i,s]of this.fadeCells){const a=s.progress;s.progress+=(s.target-s.progress)*t,Math.abs(s.target-s.progress)<.01&&(s.progress=s.target);const o=this.wallCells.get(i);if(!o){n.push(i);continue}a!==s.progress&&(s.progress>.02?(this.setWallInstanceHidden(o,!0),this.showFadeWall(i,o,s.progress)):(this.setWallInstanceHidden(o,!1),this.releaseFadeWall(i),s.target===0&&n.push(i)))}for(const i of n)this.fadeCells.delete(i)}setWallInstanceHidden(e,t){const n=new _t;t?(n.position.set(0,-999,0),n.scale.set(1e-4,1e-4,1e-4)):(n.position.set(e.col+.5,e.h/2,e.row+.5),n.scale.set(1,1,1)),n.updateMatrix(),e.mesh.setMatrixAt(e.index,n.matrix),e.mesh.instanceMatrix.needsUpdate=!0}showFadeWall(e,t,n){let i=this.fadePool.find(s=>s.key===e);if(!i){if(i=this.fadePool.find(s=>s.key===null),!i){const s=new ct(new Rt(1,1,1),new tn({map:nh(),roughness:.8,metalness:.08,transparent:!0,opacity:1,depthWrite:!1}));s.castShadow=!1,i={mesh:s,key:null},this.fadePool.push(i),this.scene?.add(s)}i.key=e}i.mesh.visible=!0,i.mesh.scale.set(1,t.h,1),i.mesh.position.set(t.col+.5,t.h/2,t.row+.5),i.mesh.material.opacity=1-n*.78}releaseFadeWall(e){const t=this.fadePool.find(n=>n.key===e);t&&(t.key=null,t.mesh.visible=!1)}rebuildEntities(){if(!this.ready)return;const e=He.getInstance(),t=e.currentFloor;if(!t)return;if(t.floorId!==this.builtFloorId){this.rebuildFloor();return}this.clearGroup(this.entityGroup);for(const l of this.torchLights.values())this.scene?.remove(l);this.torchLights.clear();for(const l of this.glowLights.values())this.scene?.remove(l);this.glowLights.clear(),this.glowSprites=[],this.dustItems=[],this.playerSprite=null,this.playerShadow=null;const n=this.gates;this.gates=[];const i=B.config.heights,s=Wt.tileSize;for(const{entity:l,room:c}of e.allEntities()){if(l.kind==="carpet")continue;const h=l.kind==="monster"||l.kind==="boss"?B.getMonster(l.monsterId??""):void 0,u=l.kind==="boss"?i.boss:l.kind==="monster"?l.isElite?i.monsterElite:h?.height??i.monsterNormal:l.kind==="chest"?i.chest+(l.chestTier==="grand"?8:0):l.kind==="npc"?i.npc:l.kind==="potion"?i.potion:l.kind==="cauldron"?i.cauldron:l.kind==="shelf"?i.shelf:l.kind==="fountain"?i.fountain:l.kind==="pillar"?i.pillar:i.torch;this.addEntity(l,c,h,u,s)}const a=pi.player(),o=Math.max(1.35,i.player/s*1.6);this.playerSprite=this.makePaperSprite(a,o),this.playerShadow=this.addGroundShadow(0,0,o*.3),this.syncPlayer(),this.entityGroup.add(this.playerSprite),this.buildGates(n)}addEntity(e,t,n,i,s){const a=e.x+.5,o=e.y+.5,l=e.kind==="chest"&&He.getInstance().isChestOpened(e);if(e.kind==="torch"){const d=new ct(new Rt(.1,.8,.1),new tn({color:7031338,roughness:.9}));d.position.set(a,.4,o),d.castShadow=!0,this.entityGroup.add(d);const f=new ct(new Il(.12,10,10),new Ds({color:16755251}));f.position.set(a,.9,o),this.entityGroup.add(f);const p=B.config.shadow.tyndall,v=Math.min(.95,p.length/s),g=Math.max(.35,p.width/s),m=new Ji(new ni({map:As(pi.coneTex()),color:16755285,blending:Ps,transparent:!0,depthTest:!0,depthWrite:!1,opacity:p.alpha}));m.scale.set(g,v,1),m.position.set(a,v/2,o),m.renderOrder=2,this.entityGroup.add(m);const S=Math.max(0,Math.min(p.dustMax,p.dustMin));for(let w=0;w<S;w++){const y=new Ji(new ni({map:As(pi.glow("#ffcc88")),blending:Ps,transparent:!0,depthWrite:!1,opacity:0}));y.scale.set(.06,.06,1),y.renderOrder=3,this.entityGroup.add(y),this.dustItems.push({sprite:y,baseX:a,baseZ:o,baseY:.1,phase:Math.random(),speed:.12+Math.random()*.1})}if(this.torchLights.size<nx){const w=new Ja(ex[t.type]??16746564,1,8);w.position.set(a,1,o),w.castShadow=this.torchLights.size<tx,w.castShadow&&w.shadow.mapSize.set(512,512),this.scene?.add(w),this.torchLights.set(e.id,w)}return}if(e.kind==="chest"){const d=this.buildChest(l,e.chestTier==="grand");d.position.set(a,0,o),this.entityGroup.add(d),l||(this.addGlowLight(e.id,16763972,.9,6,a,.7,o),this.addGlow("#ffcc44",.55,a,.45,o,3));return}if(e.kind==="stair"){for(let d=0;d<4;d++){const f=new ct(new Rt(.86,.12,.22),new tn({color:8952234,roughness:.8}));f.position.set(a,.06+d*.12,o-.33+d*.22),f.castShadow=!0,f.receiveShadow=!0,this.entityGroup.add(f)}this.addGlowLight(e.id,4513279,.8,6,a,.8,o),this.addGlow("#44ddff",.5,a,.35,o,1.2);return}const c=pi.entity(e,t,n,i,l),h=Math.max(1.05,Math.min(2.6,i/s*1.6)),u=this.makePaperSprite(c,h);if(u.position.set(a,this.footedY(u),o),this.entityGroup.add(u),this.addGroundShadow(a,o,h*.3),e.kind==="boss")this.addGlowLight(e.id,16720452,1.2,9,a,1.2,o),this.addGlow("#ff2244",1.1,a,u.position.y+u.scale.y*.2,o,.8);else if(e.kind==="monster"&&e.isElite)this.addGlow("#ff8800",.42,a,u.position.y+u.scale.y*.2,o,2);else if(e.kind==="potion"){const d=B.getPotion(e.potionTier??"");this.addGlow(d?.color??"#ff5a7a",.3,a,u.position.y+u.scale.y*.3,o,1.8)}else e.kind==="fountain"?(this.addGlow("#6bebff",.4,a,u.position.y+u.scale.y*.25,o,1.4),this.addGlowLight(e.id,7072767,.5,4,a,.6,o)):e.kind==="cauldron"&&this.addGlow("#7effb2",.32,a,u.position.y+u.scale.y*.4,o,2.2)}addGlowLight(e,t,n,i,s,a,o){if(this.glowLights.has(e)||this.glowLights.size>=ix)return;const l=new Ja(t,n,i);l.position.set(s,a,o),l.castShadow=!1,this.scene?.add(l),this.glowLights.set(e,l)}addGlow(e,t,n,i,s,a){const o=t*2,l=new ni({map:As(pi.glow(e)),blending:Ps,transparent:!0,depthTest:!0,depthWrite:!1,opacity:.8}),c=new Ji(l);c.scale.set(o,o,1),c.position.set(n,i,s),c.renderOrder=2,this.entityGroup.add(c),this.glowSprites.push({sprite:c,base:o,speed:a,phase:Math.random()*Math.PI*2})}buildChest(e,t){const n=new fn,i=t?1.25:1,s=.66*i,a=.32*i,o=.46*i,l=new tn({color:e?7034682:9067051,roughness:.78,metalness:.08}),c=new tn({color:e?4865318:6241050,roughness:.72,metalness:.12}),h=new tn({color:e?8158332:14264619,roughness:.35,metalness:.85}),u=new ct(new Rt(s,a,o),l);u.position.y=a/2,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const d=new fn;d.position.set(0,a,-o/2);const f=o/2,p=new ct(new Cl(f,f,s,20,1,!1,0,Math.PI),c);p.rotation.z=Math.PI/2,p.position.z=o/2,p.castShadow=!0,d.add(p);for(const g of[-s*.28,s*.28]){const m=new ct(new Ll(f*1.02,.018*i,8,18,Math.PI),h);m.rotation.y=Math.PI/2,m.position.set(g,0,o/2),d.add(m)}e&&(d.rotation.x=-2),n.add(d);for(const g of[-1,1])for(const m of[-1,1]){const S=new ct(new Rt(.035*i,a,.035*i),h);S.position.set(g*(s/2-.02*i),a/2,m*(o/2-.02*i)),S.castShadow=!0,n.add(S)}const v=new ct(new Rt(.11*i,.1*i,.03*i),new tn({color:e?5921370:16766814,roughness:.3,metalness:.9}));return v.position.set(0,a*.8,o/2+.012*i),n.add(v),n}makePaperSprite(e,t){const n=e.width/e.height,i=new ni({map:As(e),transparent:!0,depthTest:!0,depthWrite:!1}),s=new Ji(i);return s.scale.set(t*n,t,1),s.renderOrder=1,s.userData.footRatio=Wt.tileSize/2/e.height,s}footedY(e){const t=e.userData.footRatio??0;return e.scale.y*(.5-t)}addGroundShadow(e,t,n,i=.42){const s=new Ds({map:As(pi.glow("#000000")),transparent:!0,opacity:i,depthWrite:!1}),a=new ct(new xr(n*2,n*2),s);return a.rotation.x=-Math.PI/2,a.position.set(e,.015,t),a.renderOrder=1,this.entityGroup.add(a),a}buildGateMesh(e){const t=new fn,n=new tn({color:5857387,roughness:.45,metalness:.85});for(let i=0;i<5;i++){const s=new ct(new Rt(.1,1.2,.1),n);s.position.set((i-2)*.21,.6,0),s.castShadow=!0,t.add(s)}for(const i of[.28,.95]){const s=new ct(new Rt(1.06,.11,.13),n);s.position.set(0,i,0),s.castShadow=!0,t.add(s)}return e&&(t.rotation.y=Math.PI/2),t}buildGates(e){const t=He.getInstance();for(const n of t.getGates()){const i=n.direction==="east"||n.direction==="west",s=this.buildGateMesh(i),a=n.x+.5,o=n.y+.5,l=e?.find(c=>c.baseX===a&&c.baseZ===o);s.position.set(a,0,o),this.entityGroup.add(s),this.gates.push({group:s,baseX:a,baseZ:o,offX:i?0:1,offZ:i?1:0,open:l?l.open:n.opened?1:0,target:n.opened?1:0})}}syncPlayer(){if(!this.playerSprite)return;const e=Re.getInstance().pos;this.playerSprite.position.set(e.x+.5,this.footedY(this.playerSprite),e.y+.5),this.playerShadow&&this.playerShadow.position.set(e.x+.5,.015,e.y+.5)}render(e){if(!this.ready||!this.renderer||!this.scene||!this.camera)return;const t=He.getInstance().currentFloor;if(!t)return;t.floorId!==this.builtFloorId&&this.rebuildFloor();const n=He.getInstance(),i=Re.getInstance().pos,s=n.getRoomAt(i.x,i.y);let a,o;if(s){const f=s.x+s.width/2,p=s.y+s.height/2,v=i.x+.5-f,g=i.y+.5-p,m=Math.max(0,Math.abs(v)-(s.width/2-sh)),S=Math.max(0,Math.abs(g)-(s.height/2-sh));a=f+Math.sign(v)*m,o=p+Math.sign(g)*S}else{const f=this.corridorCenterAt(i.x,i.y);a=f?f.x:i.x+.5,o=f?f.z:i.y+.5}const l=this.lastTimeMs?Math.min(50,e-this.lastTimeMs):16.67,c=1-Math.pow(1-.12,l/16.67);this.focusInit?(this.focusX+=(a-this.focusX)*c,this.focusZ+=(o-this.focusZ)*c):(this.focusX=a,this.focusZ=o,this.focusInit=!0),this.lastTimeMs=e,this.updateWallFade(l);const h=B.config.camera3D;this.camera.position.set(this.focusX,h.height,this.focusZ+h.distance),this.camera.lookAt(this.focusX,0,this.focusZ),this.dirLight&&(this.dirLight.position.set(this.focusX+4,26,this.focusZ+6),this.dirLight.target.position.set(this.focusX,0,this.focusZ),this.dirLight.target.updateMatrixWorld()),this.syncPlayer(),this.playerTorch&&(this.playerTorch.position.set(i.x+.5,1.5,i.y+.5),this.playerTorch.intensity=1.5*(.9+.1*Math.sin(e/110)));let u=0;for(const f of this.torchLights.values())f.intensity=1*(.85+.15*Math.sin(e/130+u*1.7)),u++;if(this.hoverMesh){const f=!!this.hoverTile&&lt.started;this.hoverMesh.visible=f,f&&this.hoverTile&&this.hoverMesh.position.set(this.hoverTile.x+.5,.06,this.hoverTile.y+.5)}rn.getInstance().syncTo(this.particleGroup),ur.getInstance().syncTo(this.particleGroup);const d=e/1e3;for(const f of this.glowSprites){const p=.72+.28*Math.sin(d*f.speed+f.phase);f.sprite.material.opacity=p;const v=f.base*(.88+.12*p);f.sprite.scale.set(v,v,1)}for(const f of this.dustItems){const p=(d*f.speed+f.phase)%1;f.sprite.position.set(f.baseX+Math.sin(p*6+f.phase*9)*.06,f.baseY+p*.85,f.baseZ),f.sprite.material.opacity=Math.sin(p*Math.PI)*.3}for(const f of this.gates)Math.abs(f.open-f.target)<.002||(f.open+=(f.target-f.open)*Math.min(1,l/260),f.group.position.x=f.baseX+f.offX*f.open*1.15,f.group.position.z=f.baseZ+f.offZ*f.open*1.15);this.applyShake(l),Zr.ready?Zr.render():this.renderer.render(this.scene,this.camera)}shake(e,t=280){(this.shakeTime<=0||e>=this.shakeIntensity)&&(this.shakeIntensity=e,this.shakeTotal=t,this.shakeTime=t)}applyShake(e){if(this.shakeTime<=0||!this.camera)return;this.shakeTime=Math.max(0,this.shakeTime-e);const t=this.shakeTotal>0?this.shakeTime/this.shakeTotal:0,n=this.shakeIntensity*t;n>1e-4&&(this.camera.position.x+=(Math.random()-.5)*2*n,this.camera.position.y+=(Math.random()-.5)*2*n,this.camera.position.z+=(Math.random()-.5)*2*n),this.shakeTime<=0&&(this.shakeIntensity=0)}corridorCenterAt(e,t){const n=He.getInstance().currentFloor;if(!n)return null;for(const i of n.corridors){if(!i.tiles.some(c=>c.x===e&&c.y===t))continue;let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const c of i.tiles)c.x<s&&(s=c.x),c.x>a&&(a=c.x),c.y<o&&(o=c.y),c.y>l&&(l=c.y);return{x:(s+a+1)/2,z:(o+l+1)/2}}return null}screenToTile(e,t){if(!this.ready||!this.renderer||!this.camera)return null;const n=this.renderer.domElement.getBoundingClientRect();if(n.width===0||n.height===0)return null;const i=new Ce((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const s=new Jn(new U(0,1,0),0),a=new U;return this.raycaster.ray.intersectPlane(s,a)?{x:Math.floor(a.x),y:Math.floor(a.z)}:null}resize(){if(!this.ready||!this.renderer||!this.camera||!this.container)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),Zr.setSize(e,t)}clearGroup(e){for(let t=e.children.length-1;t>=0;t--){const n=e.children[t];e.remove(n);const i=n;i.children&&i.children.length>0&&this.clearGroup(i);const s=n;s.geometry&&s.geometry.dispose();const a=s.material;Array.isArray(a)?a.forEach(o=>o.dispose()):a?.dispose()}}};O(Gi,"instance");let ks=Gi;const Hi=class Hi{constructor(){O(this,"quests",new Map);O(this,"maxFloorReached",1);for(const e of B.quests.quests)this.quests.set(e.id,{id:e.id,progress:0,isCompleted:!1,isAccepted:e.prerequisites.length===0});this.bindEvents()}static getInstance(){return Hi.instance||(Hi.instance=new Hi),Hi.instance}bindEvents(){ee.on("npcTalked",e=>this.progress("talk_npc",e.npcId)),ee.on("monsterDefeated",e=>{const t=this.findObjective("defeat_monster");t&&(!t.objectives[0].targetId||t.objectives[0].targetId===e.entityId||this.matchByName(t,e.name))&&this.progress("defeat_monster")}),ee.on("chestOpened",()=>this.progress("open_chest")),ee.on("equipmentEquipped",()=>this.progress("equip_item")),ee.on("potionUsed",()=>this.progress("use_potion")),ee.on("floorChanged",e=>{this.maxFloorReached=Math.max(this.maxFloorReached,e.toFloor);for(const t of B.quests.quests){const n=t.objectives[0];if(n.type==="reach_floor"&&n.value!==void 0){const i=this.quests.get(t.id);i.isAccepted&&!i.isCompleted&&this.maxFloorReached>=n.value&&this.complete(t)}}})}matchByName(e,t){const n=e.objectives[0].targetId,i=B.getMonster(n??"");return i?.name===t||t.includes(i?.name??"\0")}findObjective(e){return B.quests.quests.find(t=>{const n=this.quests.get(t.id);return n.isAccepted&&!n.isCompleted&&t.objectives[0].type===e})??null}progress(e,t){const n=this.findObjective(e);if(!n)return;const i=n.objectives[0];if(i.type!==e||e==="talk_npc"&&i.targetId&&i.targetId!==t)return;const s=this.quests.get(n.id);s.progress+=1,ee.emit("questUpdated",{questId:n.id,progress:Math.min(s.progress,i.quantity),total:i.quantity}),s.progress>=i.quantity&&this.complete(n)}complete(e){const t=this.quests.get(e.id);t.isCompleted||(t.isCompleted=!0,this.grantRewards(e.rewards),ee.emit("questCompleted",{questId:e.id,name:e.name}),Ft.debug(`[Quest] 完成 ${e.name}`),this.autoAcceptNext())}autoAcceptNext(){for(const e of B.quests.quests){const t=this.quests.get(e.id);t.isAccepted||e.prerequisites.every(n=>this.quests.get(n)?.isCompleted)&&(t.isAccepted=!0,ee.emit("questAccepted",{questId:e.id}))}}grantRewards(e){const t=Re.getInstance();for(const n of e)switch(n.type){case"gold":t.gainGold(n.value??0);break;case"exp":t.gainExp(n.value??0);break;case"keys":t.state.keys+=n.value??1;break;case"potion":n.tier&&t.addPotion(n.tier,n.value??1);break;case"equipment":{const i=ji.getInstance().generate("quest",{forcedQuality:n.quality??"common"});t.addEquipment(i);break}}}get trackedQuest(){for(const e of B.quests.quests){const t=this.quests.get(e.id);if(t.isAccepted&&!t.isCompleted)return{def:t,quest:e}}return null}all(){return B.quests.quests.map(e=>({state:this.quests.get(e.id),def:e}))}exportStates(){return[...this.quests.values()]}restoreStates(e,t){for(const n of e)this.quests.set(n.id,{...n});this.maxFloorReached=t,this.autoAcceptNext()}};O(Hi,"instance");let li=Hi;const Vi=class Vi{constructor(){O(this,"kills",new Map);ee.on("monsterDefeated",e=>{e.entityId;const t=B.monsters.monsters.find(n=>e.name.includes(n.name));t&&this.kills.set(t.id,(this.kills.get(t.id)??0)+1)}),ee.on("bossDefeated",e=>{const t=B.monsters.monsters.find(n=>n.category==="boss"&&e.name.includes(n.name));t&&this.kills.set(t.id,(this.kills.get(t.id)??0)+1)})}static getInstance(){return Vi.instance||(Vi.instance=new Vi),Vi.instance}getKillCount(e){return this.kills.get(e)??0}isUnlocked(e){return this.getKillCount(e)>0}entries(){return B.monsters.monsters.filter(e=>e.weight>0||e.category==="boss").map(e=>({def:e,kills:this.getKillCount(e.id),unlocked:this.isUnlocked(e.id)}))}export(){return Object.fromEntries(this.kills)}restore(e){this.kills.clear();for(const[t,n]of Object.entries(e))this.kills.set(t,n)}};O(Vi,"instance");let ns=Vi;const Wi=class Wi{constructor(){O(this,"flags",{firstEquipment:!1,firstDeath:!1,welcomed:!1});ee.on("equipmentGenerated",e=>{e.source!=="tutorial"&&(this.flags.firstEquipment||(this.flags.firstEquipment=!0,ee.emit("firstEquipmentGained",{equipment:e.equipment}),ee.emit("notification",{message:B.texts.guidance?.firstEquipment??"获得装备！",type:"info",icon:"🗡️"})))}),ee.on("playerDied",()=>{this.flags.firstDeath||(this.flags.firstDeath=!0,ee.emit("notification",{message:B.texts.guidance?.firstDeath??"死亡后在本层起点复活，损失部分金币。",type:"warning",icon:"💀"}))})}static getInstance(){return Wi.instance||(Wi.instance=new Wi),Wi.instance}export(){return{...this.flags}}restore(e){this.flags={...this.flags,...e}}};O(Wi,"instance");let zs=Wi;const qi=class qi{constructor(){O(this,"stats",{totalMonstersDefeated:0,totalBossesDefeated:0,totalChestsOpened:0,steps:0});ee.on("floorChanged",e=>{e.toFloor>B.mapGen.initialFloor&&this.autoSave()}),ee.on("monsterDefeated",()=>{this.stats.totalMonstersDefeated++}),ee.on("bossDefeated",()=>{this.stats.totalBossesDefeated++}),ee.on("chestOpened",()=>{this.stats.totalChestsOpened++}),ee.on("playerMoved",()=>{this.stats.steps++})}static getInstance(){return qi.instance||(qi.instance=new qi),qi.instance}get storageKey(){return B.config.save.key}autoSave(){lt.settings.autoSave&&this.save("auto")}save(e){const t=He.getInstance(),n=t.currentFloor;if(!n)return!1;const i=Re.getInstance(),s={version:B.config.save.version,lastSaved:new Date().toISOString(),player:{...i.state,potions:{...i.state.potions},bag:[...i.state.bag]},quests:li.getInstance().exportStates(),bestiary:ns.getInstance().export(),floor:n,entityStates:t.exportEntityStates(),guidance:zs.getInstance().export(),settings:{...lt.settings},stats:{...this.stats}};try{return localStorage.setItem(this.storageKey,JSON.stringify(s)),ee.emit("saveCompleted",{trigger:e}),Ft.info(`[Save] ${e==="auto"?"自动":"手动"}存档完成（楼层${n.floorId}）`),!0}catch(a){return Ft.error("[Save] 存档失败",a),ee.emit("notification",{message:"存档失败：存储空间不足",type:"error",icon:"💾"}),!1}}hasSave(){return localStorage.getItem(this.storageKey)!==null}load(){const e=localStorage.getItem(this.storageKey);if(!e)return!1;try{const t=JSON.parse(e);return t.version!==B.config.save.version&&Ft.warn(`[Save] 版本不匹配 ${t.version} → ${B.config.save.version}`),(!Array.isArray(t.player.hotbar)||t.player.hotbar.length!==5)&&(t.player.hotbar=[null,null,null,null,null]),Re.getInstance().restore(t.player),ri.getInstance().restoreFloor(t.floor),He.getInstance().loadFloor(t.floor,t.entityStates),li.getInstance().restoreStates(t.quests,t.player.currentFloor),ns.getInstance().restore(t.bestiary),zs.getInstance().restore(t.guidance),lt.settings={...t.settings},this.stats={...t.stats},ln.getInstance().snapToPlayer(),ee.emit("saveLoaded",{}),Ft.info(`[Save] 读档完成（楼层${t.floor.floorId}）`),!0}catch(t){return Ft.error("[Save] 读档失败",t),!1}}clear(){localStorage.removeItem(this.storageKey),ee.emit("saveCleared",{})}get playStats(){return this.stats}};O(qi,"instance");let cn=qi;const $i=class $i{constructor(){O(this,"heldDirs",new Set);O(this,"repeatTimer",0);O(this,"mouseClient",null);O(this,"hover",null);O(this,"hoverShowTimer",null);O(this,"hoverHideTimer",null);O(this,"pendingHover",null);this.bindKeyboard()}attachCanvas(e){e.addEventListener("mousemove",t=>{this.mouseClient={x:t.clientX,y:t.clientY}}),e.addEventListener("mouseleave",()=>{this.mouseClient=null,this.scheduleHide()}),e.addEventListener("click",t=>{const n=this.clientToTile(t.clientX,t.clientY);n&&On.getInstance().moveTo(n.x,n.y)}),e.addEventListener("contextmenu",t=>t.preventDefault())}static getInstance(){return $i.instance||($i.instance=new $i),$i.instance}bindKeyboard(){window.addEventListener("keydown",e=>{if(e.repeat)return;const t=e.key.toLowerCase();if(lt.started&&!lt.modalOpen)switch(t){case"b":ee.emit("panelToggled",{panel:"inventory",open:!0});return;case"c":ee.emit("panelToggled",{panel:"character",open:!0});return;case"j":ee.emit("panelToggled",{panel:"quest",open:!0});return;case"g":ee.emit("panelToggled",{panel:"bestiary",open:!0});return}if(t==="escape")return;if(t==="k"&&!e.ctrlKey&&!e.metaKey&&lt.started){cn.getInstance().save("manual");return}if(t==="s"&&(e.ctrlKey||e.metaKey)){e.preventDefault(),lt.started&&cn.getInstance().save("manual");return}const n=parseInt(t,10);if(n>=1&&n<=5){const s=Re.getInstance(),a=s.state.hotbar[n-1];a&&s.getPotionCount(a)>0&&s.usePotion(a);return}const i=this.keyToDir(t);i&&(this.heldDirs.add(`${i[0]},${i[1]}`),this.repeatTimer=B.config.input.moveRepeatMs,On.getInstance().tryMove(i[0],i[1]),e.preventDefault())}),window.addEventListener("keyup",e=>{const t=this.keyToDir(e.key.toLowerCase());t&&this.heldDirs.delete(`${t[0]},${t[1]}`)}),window.addEventListener("blur",()=>this.heldDirs.clear())}keyToDir(e){switch(e){case"w":case"arrowup":return[0,-1];case"a":case"arrowleft":return[-1,0];case"d":case"arrowright":return[1,0];case"s":case"arrowdown":return[0,1];default:return null}}clientToTile(e,t){const n=ks.getInstance().screenToTile(e,t);if(n)return n;const i=document.getElementById("game-canvas");if(!i)return null;const s=i.getBoundingClientRect(),a=e-s.left-s.width/2+ln.getInstance().x,o=t-s.top-s.height/2+ln.getInstance().y,l=Wt.screenToWorld(a,o);return{x:Math.floor(l.col),y:Math.floor(l.row)}}update(e){if(this.heldDirs.size>0&&(this.repeatTimer-=e,this.repeatTimer<=0)){this.repeatTimer=B.config.input.moveRepeatMs;const t=[...this.heldDirs][this.heldDirs.size-1],n=this.dirVector(t);n&&On.getInstance().tryMove(n[0],n[1])}this.updateHover()}dirVector(e){switch(e){case"0,-1":return[0,-1];case"0,1":return[0,1];case"-1,0":return[-1,0];case"1,0":return[1,0];default:return null}}updateHover(){const e=B.config.hover;if(!this.mouseClient){this.scheduleHide();return}const t=this.clientToTile(this.mouseClient.x,this.mouseClient.y),n=He.getInstance();if(!t||!n.inBounds(t.x,t.y)){this.scheduleHide();return}const s={entity:n.getEntityAt(t.x,t.y),tile:t,tileType:n.tileAt(t.x,t.y)};this.pendingHover=s,ks.getInstance().hoverTile=t,this.hoverHideTimer!==null&&(window.clearTimeout(this.hoverHideTimer),this.hoverHideTimer=null),this.hoverShowTimer===null&&(this.hoverShowTimer=window.setTimeout(()=>{this.hoverShowTimer=null,this.pendingHover?.entity?this.hover=this.pendingHover:this.hover=null},e.showDelayMs))}scheduleHide(){this.hoverShowTimer!==null&&(window.clearTimeout(this.hoverShowTimer),this.hoverShowTimer=null),this.hoverHideTimer===null&&this.hover&&(this.hoverHideTimer=window.setTimeout(()=>{this.hoverHideTimer=null,this.hover=null},B.config.hover.hideDelayMs))}};O($i,"instance");let Gs=$i;class sx{constructor(e){O(this,"el");O(this,"lastKey","");this.el=e,document.addEventListener("mousemove",t=>{this.el.classList.contains("hidden")||this.position(t.clientX,t.clientY)})}update(e){if(!e?.entity){this.el.classList.contains("hidden")||(this.el.classList.add("hidden"),this.lastKey="");return}const t=e.entity,n=`${t.id}:${He.getInstance().getEntityState(t.id).isOpened?1:0}`;n!==this.lastKey&&(this.lastKey=n,this.el.innerHTML=this.renderContent(t),this.el.classList.remove("hidden"))}renderContent(e){const t=B.texts.hints??{};switch(e.kind){case"monster":case"boss":{const n=B.getMonster(e.monsterId??"");if(!n)return"";const i=Bn.getInstance().monsterStats(n,He.getInstance().currentFloor?.floorId??1,e.kind!=="boss"&&!!e.isElite),s=pr.getInstance().forecast(e),a=s.winnable?`<span class="ok">预计损耗 ${s.estDamage} HP</span>`:`<span class="bad">危险！预计损耗 ${s.estDamage} HP</span>`;return`
          <div class="tt-title" style="color:${n.color}">${i.name}</div>
          <div>❤️ ${i.hp}　⚔️ ${i.attack}　🛡️ ${i.defense}</div>
          <div class="dim">掉落：${i.gold}金币 / ${i.exp}经验${e.kind==="boss"?" / 必掉装备":""}</div>
          <div>${a}</div>
          <div class="tt-hint">（${t.attack??"左键攻击"}）</div>
        `}case"potion":{const n=B.getPotion(e.potionTier??"");return`
          <div class="tt-title" style="color:${n?.color??"#ff5a7a"}">${n?.name??"药水"}</div>
          <div class="dim">回复 ${Math.round((n?.healPct??0)*100)}% 生命</div>
          <div class="tt-hint">（${t.pickup??"左键拾取"}）</div>
        `}case"chest":{const n=He.getInstance().isChestOpened(e);return`
          <div class="tt-title" style="color:#ffcc00">${e.chestTier==="grand"?"大宝箱":"宝箱"}${n?"（已开启）":""}</div>
          ${n?'<div class="dim">空空如也</div>':'<div class="dim">金币 / 装备 / 药水</div>'}
          ${n?"":`<div class="tt-hint">（${t.open??"左键打开"}）</div>`}
        `}case"npc":{const n=B.getNpc(e.npcId??"");return n?`
          <div class="tt-title" style="color:${n.color}">${n.name}</div>
          <div class="dim">“${n.lines[0]}”</div>
          ${n.isWitch?'<div class="dim">可交易秘制药水</div>':""}
          <div class="tt-hint">（${n.isMerchant||n.isWitch?t.trade??"左键交易":t.talk??"左键对话"}）</div>
        `:""}case"fountain":{const n=He.getInstance(),i=n.getEntityState(e.id).isUsed===!0,s=B.config.witch,a=s.fountainCostBase+(n.currentFloor?.floorId??1)*s.fountainCostPerFloor;return`
          <div class="tt-title" style="color:#8ff0ff">治疗泉${i?"（已枯竭）":""}</div>
          ${i?'<div class="dim">泉水已干涸</div>':`<div class="dim">回复全部生命（🪙 ${a}）</div>`}
          ${i?"":`<div class="tt-hint">（${t.heal??"左键治疗"}）</div>`}
        `}case"stair":return`
          <div class="tt-title" style="color:#44ddff">通往第 ${e.targetFloor} 层</div>
          <div class="tt-hint">（${t.stair??"点击前往"}）</div>
        `;default:return""}}position(e,t){const n=B.config.hover,i=this.el.getBoundingClientRect();let s=e+n.offsetX,a=t+n.offsetY;s+i.width>window.innerWidth-8&&(s=e-i.width-n.offsetX),a+i.height>window.innerHeight-8&&(a=t-i.height-n.offsetY),this.el.style.left=`${s}px`,this.el.style.top=`${a}px`}}class ll{static init(e){this.host=e,ee.on("notification",t=>this.show(t.message,t.type,t.icon)),ee.on("questCompleted",t=>this.show(`任务完成：${t.name}`,"success","📋")),ee.on("levelUp",t=>this.show(`升级！Lv.${t.newLevel}（攻击+${t.gainedAttack} 防御+${t.gainedDefense} 生命+${t.gainedHp}）`,"success","⬆️")),ee.on("saveCompleted",t=>this.show(t.trigger==="auto"?"已自动存档":"已手动存档","info","💾")),ee.on("bossDefeated",t=>this.show(`击败Boss：${t.name}！`,"success","🏆")),ee.on("questAccepted",()=>{})}static show(e,t="info",n="ℹ️"){if(!this.host)return;const i=document.createElement("div");i.className=`notification ${t}`,i.innerHTML=`<span class="nt-icon">${n}</span><span>${e}</span>`,this.host.appendChild(i),window.setTimeout(()=>{i.classList.add("fade-out"),window.setTimeout(()=>i.remove(),400)},2800)}}O(ll,"host",null);const Xi=class Xi{constructor(){O(this,"shops",new Map)}static getInstance(){return Xi.instance||(Xi.instance=new Xi),Xi.instance}openShop(e,t){const n=`${e}@${t}`,i=this.shops.get(n);if(i)return i;const s=e==="npc_witch"?this.buildWitchStock(t):this.buildMerchantStock(t);return this.shops.set(n,s),s}buildWitchStock(e){const t=B.config.witch,n=B.potions.potions.filter(s=>e>=s.minFloor&&e<=s.maxFloor).sort((s,a)=>a.healPct-s.healPct);return(n.length>0?n:B.potions.potions).slice(0,2).map(s=>({kind:"potion",tier:s.tier,name:s.name,icon:s.icon,price:Math.round(s.price*1.2),quantity:Me.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(s.healPct*100)}% 生命（女巫秘制）`}))}buildMerchantStock(e){const t=B.config.merchant;Re.getInstance();const n=[],i=B.potions.potions.filter(c=>e>=c.minFloor&&e<=c.maxFloor).sort((c,h)=>h.healPct-c.healPct),s=i[0];s&&n.push({kind:"potion",tier:s.tier,name:s.name,icon:s.icon,price:s.price,quantity:Me.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(s.healPct*100)}% 生命`});const a=i[1];a&&n.push({kind:"potion",tier:a.tier,name:a.name,icon:a.icon,price:a.price,quantity:Me.randInt(t.potionCountMin,t.potionCountMax),desc:`回复 ${Math.round(a.healPct*100)}% 生命`});const o=Math.round(t.keyPriceBase+t.keyPricePer10Floors*Math.floor(e/10));n.push({kind:"key",name:"钥匙",icon:"🗝️",price:o,quantity:Me.randInt(t.keyCountMin,t.keyCountMax),desc:"开启上锁的宝箱"});const l=Me.randInt(t.equipmentCountMin,t.equipmentCountMax);for(let c=0;c<l;c++){const h=ji.getInstance().generate("merchant",{floorId:e});n.push({kind:"equipment",name:h.name,icon:h.slot==="weapon"?"🗡️":"🛡️",price:h.buyPrice,quantity:1,equipment:h,desc:h.slot==="weapon"?`攻击 +${h.attack}`:`防御 +${h.defense}`})}return n}buy(e,t,n){const s=this.openShop(e,t)[n];if(!s)return{ok:!1,reason:"无此商品"};if(s.quantity===0)return{ok:!1,reason:"已售罄"};const a=Re.getInstance();return a.spendGold(s.price)?(s.kind==="potion"&&s.tier?(a.addPotion(s.tier,1),ee.emit("potionPurchased",{tier:s.tier,price:s.price})):s.kind==="key"?(a.state.keys+=1,ee.emit("keyPurchased",{price:s.price})):s.kind==="equipment"&&s.equipment&&a.addEquipment(s.equipment),s.quantity>0&&(s.quantity-=1),{ok:!0}):{ok:!1,reason:"金币不足"}}sell(e){const t=Re.getInstance(),n=t.state.bag.find(i=>i.id===e);return n?n.isFavorite?{ok:!1,price:0,reason:"已收藏的装备无法回收"}:t.state.weaponId===e||t.state.armorId===e?{ok:!1,price:0,reason:"正在穿戴的装备无法回收"}:(t.removeEquipment(e),t.gainGold(n.sellPrice),ee.emit("equipmentSold",{equipmentId:e,price:n.sellPrice}),{ok:!0,price:n.sellPrice}):{ok:!1,price:0,reason:"无此装备"}}};O(Xi,"instance");let Qi=Xi;const ah={poor:0,common:1,fine:2,rare:3,epic:4,legendary:5,mythic:6};function rx(r,e=.16){const t=parseInt(r.slice(1),16);return`rgba(${t>>16&255}, ${t>>8&255}, ${t&255}, ${e})`}const jn=class jn{constructor(e,t,n){O(this,"el");O(this,"name");this.name=t,this.el=document.createElement("div"),this.el.className="overlay-panel hidden",this.el.dataset.panel=t,this.el.innerHTML=`<div class="op-box"><div class="op-head"><span>${n}</span><button class="op-close">✕</button></div><div class="op-body"></div></div>`,e.appendChild(this.el),this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.addEventListener("click",i=>{i.target===this.el&&this.close()})}get body(){return this.el.querySelector(".op-body")}get isOpen(){return!this.el.classList.contains("hidden")}open(){this.isOpen||(this.el.classList.remove("hidden"),jn.stack.push(this),lt.pushModal(),this.onOpen())}close(){this.isOpen&&(this.el.classList.add("hidden"),jn.stack=jn.stack.filter(e=>e!==this),lt.popModal())}onOpen(){}static closeTop(){const e=jn.stack[jn.stack.length-1];return e?(e.close(),!0):!1}};O(jn,"stack",[]);let zn=jn;class ax{constructor(e){O(this,"inventory");O(this,"character");O(this,"quest");O(this,"bestiary");O(this,"settings");O(this,"battleLog");this.inventory=new ox(e),this.character=new lx(e),this.quest=new cx(e),this.bestiary=new hx(e),this.settings=new dx(e),this.battleLog=new ux(e)}open(e){switch(e){case"inventory":this.inventory.open();break;case"character":this.character.open();break;case"quest":this.quest.open();break;case"bestiary":this.bestiary.open();break;case"settings":this.settings.open();break}}handleEscape(){zn.closeTop()}}class ox extends zn{constructor(t){super(t,"inventory","📦 背包");O(this,"selected",null);O(this,"filter","all");this.el.querySelector(".op-box").classList.add("op-box-inv"),ee.on("equipmentGenerated",()=>{this.isOpen&&this.render()}),ee.on("equipmentEquipped",()=>{this.isOpen&&this.render()}),ee.on("equipmentSold",()=>{this.isOpen&&this.render()}),ee.on("potionUsed",()=>{this.isOpen&&this.render()}),ee.on("potionPurchased",()=>{this.isOpen&&this.render()})}onOpen(){this.render()}render(){const t=Re.getInstance(),n=t.state.bag;this.selected=n.find(f=>f.id===this.selected?.id)??null;const i=n.filter(f=>this.filter==="weapon"?f.slot==="weapon":this.filter==="armor"?f.slot==="armor":!(this.filter==="potion"||this.filter==="other")),s=[{key:"all",label:"全部",count:n.length},{key:"weapon",label:"🗡️ 武器",count:n.filter(f=>f.slot==="weapon").length},{key:"armor",label:"🛡️ 胸甲",count:n.filter(f=>f.slot==="armor").length},{key:"potion",label:"🧪 药水",count:Object.values(t.state.potions).reduce((f,p)=>f+p,0)},{key:"other",label:"🗝️ 其他",count:t.state.keys>0?1:0}],a=[...i].sort((f,p)=>+!!p.isFavorite-+!!f.isFavorite),o=a.length===0?'<div class="dim inv-empty">此类没有物品</div>':a.map(f=>{const p=B.equipment.quality[f.quality],v=f.id===t.state.weaponId||f.id===t.state.armorId;return`<div class="bag-cell ${f.id===this.selected?.id?"active":""} ${f.isFavorite?"fav":""}"
                     draggable="true" data-id="${f.id}"
                     style="border-color:${p.color};background:${rx(p.color)}"
                     title="拖到左侧装备栏穿戴；点击查看详情">
          <div class="cell-icon" style="border-color:${p.color}">${f.slot==="weapon"?"🗡️":"🛡️"}</div>
          <div class="cell-name" style="color:${p.color}">${f.name}${f.isFavorite?" ⭐":""}</div>
          <div class="cell-sub dim">Lv.${f.level}${v?" 已穿戴":""}</div>
        </div>`}).join(""),l=["crude","normal","quality","strong","holy"].map(f=>{const p=B.getPotion(f),v=t.getPotionCount(f);return`<div class="potion-row" draggable="${v>0}" data-tier="${f}"
                  title="${v>0?"拖到底部快捷栏绑定；点击使用":"数量为0"}">
        <span>${p.icon} ${p.name}</span>
        <span>×${v} <span class="dim">(${Math.round(p.healPct*100)}%)</span></span>
        <button class="potion-use" data-tier-use="${f}" ${v===0?"disabled":""}>使用</button>
      </div>`}).join(""),c=`
      <div class="potion-row"><span>🗝️ 钥匙</span><span>×${t.state.keys}</span><span></span></div>
    `,h=this.filter==="potion"?`<div class="inv-potions"><div class="dim hotbar-hint">💡 将药水拖到底部快捷栏槽位绑定（数字键1-5快速使用）</div>${l}</div>`:this.filter==="other"?`<div class="inv-potions">${c}</div>`:`<div class="inv-list">${o}</div>`,u=f=>{const p=f==="weapon"?t.weapon:t.armor,v=p?B.equipment.quality[p.quality]:null;return`<div class="equip-slot ${p?"filled":"empty-slot"}" data-eslot="${f}">
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
        <div class="inv-middle">${h}</div>
        <div class="inv-detail">${this.filter==="potion"||this.filter==="other"?'<div class="dim">选择装备查看详情与对比</div>':this.selected?this.detailHtml(this.selected):'<div class="dim">选择一件装备查看详情与对比</div>'}</div>
      </div>
    `,this.body.querySelectorAll("[data-filter]").forEach(f=>{f.addEventListener("click",()=>{this.filter=f.dataset.filter,this.render()})}),this.body.querySelectorAll("[data-fav]").forEach(f=>{f.addEventListener("click",p=>{p.stopPropagation();const v=n.find(g=>g.id===f.dataset.fav);v&&(v.isFavorite=!v.isFavorite),this.render()})}),this.body.querySelectorAll(".bag-cell").forEach(f=>{const p=f;p.addEventListener("click",()=>{this.selected=n.find(v=>v.id===p.dataset.id)??null,this.render()}),p.addEventListener("dragstart",v=>{const g=v;g.dataTransfer?.setData("equip-id",p.dataset.id),g.dataTransfer&&(g.dataTransfer.effectAllowed="move")})}),this.body.querySelectorAll(".equip-slot").forEach(f=>{const p=f.dataset.eslot;f.addEventListener("dragover",v=>{v.preventDefault(),f.classList.add("drag-over")}),f.addEventListener("dragleave",()=>f.classList.remove("drag-over")),f.addEventListener("drop",v=>{v.preventDefault(),f.classList.remove("drag-over");const g=v.dataTransfer?.getData("equip-id"),m=g?n.find(S=>S.id===g):null;m&&m.slot===p?Re.getInstance().equip(g):m&&ee.emit("notification",{message:"该装备类型与此栏位不符",type:"warning",icon:"⚠️"})})}),this.body.querySelectorAll("[data-unequip]").forEach(f=>{f.addEventListener("click",()=>{Re.getInstance().unequip(f.dataset.unequip),this.render()})});const d=this.selected;this.body.querySelectorAll('[data-act="equip"]').forEach(f=>{f.addEventListener("click",()=>{d&&Re.getInstance().equip(d.id)})}),this.body.querySelectorAll('[data-act="sell"]').forEach(f=>{f.addEventListener("click",()=>{d&&Qi.getInstance().sell(d.id)})}),this.body.querySelectorAll("[data-tier-use]").forEach(f=>{f.addEventListener("click",()=>{Re.getInstance().usePotion(f.dataset.tierUse),this.render()})}),this.body.querySelectorAll('.potion-row[draggable="true"]').forEach(f=>{f.addEventListener("dragstart",p=>{const v=p;v.dataTransfer?.setData("potion-tier",f.dataset.tier),v.dataTransfer&&(v.dataTransfer.effectAllowed="copy")})})}detailHtml(t){const n=Re.getInstance(),i=B.equipment.quality[t.quality],s=t.slot==="weapon"?n.weapon:n.armor,a=(d,f,p)=>{const v=f-p,g=v>0?"up":v<0?"down":"dim",m=v>0?` <span class="${g}">(▲${v} vs 已穿戴)</span>`:v<0?` <span class="${g}">(▼${Math.abs(v)} vs 已穿戴)</span>`:"";return`<div>${d} ${f}${m}</div>`},o=s?.affixes??[],l=t.affixes.map(d=>{const f=o.find(v=>v.type===d.type),p=!f;return`<div class="affix-row ${p?"new-affix":""}">✦ ${d.name} Lv.${t.level}　${this.affixDesc(d)}${p?' <span class="up">[新]</span>':f&&f.value!==d.value?` <span class="${d.value>f.value?"up":"down"}">(${d.value>f.value?"▲":"▼"}${Math.abs(d.value-f.value)})</span>`:""}</div>`}),c=o.filter(d=>!t.affixes.some(f=>f.type===d.type)),h=c.map(d=>`<div class="affix-row down">✦ ${d.name} ${this.affixDesc(d)} <span>[缺失]</span></div>`).join("");let u="";if(s){const d=ah[t.quality]-ah[s.quality];d!==0&&(u=`<span class="${d>0?"up":"down"}">（${d>0?"品质提升▲":"品质下降▼"}）</span>`)}return`
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
        ${t.affixes.length>0||c.length>0?`<div class="affix-list">${l.join("")}${h}</div>`:""}
        <div class="dim">回收价：${t.sellPrice} 金币</div>
        <div class="eq-actions">
          <button data-act="equip" class="btn-primary">${s?"替换穿戴（旧装回背包）":"穿戴"}</button>
          <button data-act="sell" ${t.isFavorite?'disabled title="已收藏的装备无法回收"':""}>出售 +${t.sellPrice}🪙</button>
        </div>
      </div>
    `}affixDesc(t){return B.equipment.affixes.find(i=>i.name===t.name)?.description?.replace("{v}",String(t.value))??`${t.name}+${t.value}`}}class lx extends zn{constructor(e){super(e,"character","👤 角色")}onOpen(){const e=Re.getInstance(),t=e.stats(),n=(i,s)=>s?`<div class="char-equip" data-slot="${i}"><span>${i==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}</span><span style="color:${B.equipment.quality[s.quality].color}">${s.name}</span><button data-unequip="${i}">卸下</button></div>`:`<div class="char-equip dim"><span>${i==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}</span><span>未装备</span></div>`;this.body.innerHTML=`
      <div class="char-grid">
        <div>等级</div><div>Lv.${e.state.level}（${e.state.exp}/${Bn.getInstance().expToNext(e.state.level)} 经验）</div>
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
        <div>金币</div><div>🪙 ${e.state.gold}</div>
        <div>钥匙</div><div>🗝️ ${e.state.keys}</div>
        <div>楼层</div><div>第 ${e.state.currentFloor} 层</div>
      </div>
      <h3 class="sub-title">装备槽（共2个）</h3>
      ${n("weapon",e.weapon)}
      ${n("armor",e.armor)}
    `,this.body.querySelectorAll("[data-unequip]").forEach(i=>{i.addEventListener("click",()=>{Re.getInstance().unequip(i.dataset.unequip),this.onOpen()})})}}class cx extends zn{constructor(e){super(e,"quest","📋 任务")}onOpen(){const e=li.getInstance().all().map(({state:t,def:n})=>{const i=t.isCompleted?'<span class="ok">✔ 已完成</span>':t.isAccepted?`<span class="dim">进行中 ${Math.min(t.progress,n.objectives[0].quantity)}/${n.objectives[0].quantity}</span>`:'<span class="dim">未解锁</span>',s=n.rewards.map(a=>{switch(a.type){case"gold":return`${a.value}金币`;case"potion":return`${B.getPotion(a.tier??"crude")?.name}×${a.value??1}`;case"equipment":return"装备";case"exp":return`${a.value}经验`;case"keys":return`钥匙×${a.value??1}`;default:return""}}).join("、");return`<div class="quest-row ${t.isCompleted?"done":t.isAccepted?"active-quest":"locked"}">
        <div class="quest-name">${t.isAccepted||t.isCompleted?"📌":"🔒"} ${n.name} ${i}</div>
        <div class="dim">${n.description}</div>
        <div class="dim">奖励：${s}</div>
      </div>`}).join("");this.body.innerHTML=e}}class hx extends zn{constructor(e){super(e,"bestiary","📖 图鉴")}onOpen(){const e=Re.getInstance().state.currentFloor,t=ns.getInstance().entries().map(({def:n,kills:i,unlocked:s})=>{if(!s)return'<div class="bestiary-row locked"><span>？？？</span><span class="dim">尚未遭遇</span></div>';const a=Bn.getInstance().monsterStats(n,e,!1);return`<div class="bestiary-row">
        <span style="color:${n.color}">● ${n.name}${n.category==="boss"?"（Boss）":""}</span>
        <span class="dim">❤️${a.hp} ⚔️${a.attack} 🛡️${a.defense}</span>
        <span class="dim">击杀×${i}</span>
      </div>`}).join("");this.body.innerHTML=t}}class dx extends zn{constructor(e){super(e,"settings","⚙️ 设置")}onOpen(){this.body.innerHTML=`
      <div class="settings-rows">
        <label class="setting-row">
          <span>自动存档（到达新楼层时）</span>
          <input type="checkbox" id="opt-autosave" ${lt.settings.autoSave?"checked":""} />
        </label>
        <div class="setting-row dim">手动存档：任意时刻按 K 键（或 Ctrl+S）或点击 💾 按钮</div>
      </div>
      <div class="eq-actions">
        <button id="opt-save" class="btn-primary">💾 手动存档</button>
        <button id="opt-load">📂 读取存档</button>
        <button id="opt-clear" class="btn-danger">🗑️ 清除存档</button>
        <button id="opt-restart" class="btn-danger">🔄 重新开始</button>
      </div>
      <h3 class="sub-title">操作说明</h3>
      <div class="dim help-text">
        方向键/WASD移动 · 点击地板走一步 · 点击怪物/宝箱自动走近交互 · 悬浮查看信息<br/>
        B背包 C角色 J任务 G图鉴 Esc设置 K存档（或Ctrl+S）· 数字键1-5使用快捷栏（背包拖入药水绑定，右键解绑）<br/>
        撞向怪物即战斗 · 走上楼梯进入下一层
      </div>
    `;const e=this.body.querySelector("#opt-autosave");e.addEventListener("change",()=>{lt.setSetting("autoSave",e.checked)}),this.body.querySelector("#opt-save").addEventListener("click",()=>cn.getInstance().save("manual")),this.body.querySelector("#opt-load").addEventListener("click",()=>{cn.getInstance().load()&&this.close()}),this.body.querySelector("#opt-clear").addEventListener("click",()=>{window.confirm("确定清除存档？不可恢复。")&&cn.getInstance().clear()}),this.body.querySelector("#opt-restart").addEventListener("click",()=>{window.confirm("确定重新开始？当前进度将丢失（请先存档）。")&&(On.getInstance().restart(),this.close())})}}class ux extends zn{constructor(e){super(e,"battleLog","⚔️ 战斗"),ee.on("battleEnded",t=>{this.show(t.result.win?"🏆 战斗胜利":"💀 战斗失败",t.result.log.map(n=>`<div class="log-line ${n.kind}">${n.text}</div>`).join(""))})}show(e,t){this.el.querySelector(".op-head span").textContent=e,this.body.innerHTML=`${t}<div class="eq-actions"><button class="btn-primary op-close2">继续</button></div>`,this.open(),this.body.querySelector(".op-close2").addEventListener("click",()=>this.close())}}class fx{constructor(e){O(this,"el");O(this,"npcId","");O(this,"lineIndex",0);this.el=document.createElement("div"),this.el.className="overlay-panel hidden dialog-panel",e.appendChild(this.el),ee.on("npcTalked",t=>this.show(t.npcId)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}show(e){B.getNpc(e)&&(this.npcId=e,this.lineIndex=0,lt.pushModal(),this.el.classList.remove("hidden"),this.render())}render(){const e=B.getNpc(this.npcId),t=e.lines[this.lineIndex]??e.lines[e.lines.length-1],n=this.lineIndex<e.lines.length-1;this.el.innerHTML=`
      <div class="dialog-box">
        <div class="dialog-name" style="color:${e.color}">${e.name}</div>
        <div class="dialog-text">“${t}”</div>
        <div class="dialog-actions">
          ${e.isWitch?'<button id="dlg-shop" class="btn-primary">🧪 秘药</button>':e.isMerchant?'<button id="dlg-shop" class="btn-primary">🛒 交易</button>':""}
          ${n?'<button id="dlg-next">继续 ▶</button>':'<button id="dlg-close" class="btn-primary">结束对话</button>'}
        </div>
      </div>
    `,this.el.querySelector("#dlg-next")?.addEventListener("click",()=>{this.lineIndex++,this.render()}),this.el.querySelector("#dlg-close")?.addEventListener("click",()=>this.close()),this.el.querySelector("#dlg-shop")?.addEventListener("click",()=>{const i=Re.getInstance();this.close(),ee.emit("merchantOpened",{npcId:this.npcId,roomId:i.state.currentRoomId})})}close(){this.el.classList.add("hidden"),lt.popModal()}}class px{constructor(e){O(this,"el");O(this,"hoverEl");O(this,"npcId","");O(this,"tab","buy");this.el=document.createElement("div"),this.el.className="overlay-panel hidden",e.appendChild(this.el),this.hoverEl=document.createElement("div"),this.hoverEl.id="shop-hover",this.hoverEl.classList.add("hidden"),document.body.appendChild(this.hoverEl),ee.on("merchantOpened",t=>this.show(t.npcId)),ee.on("goldChanged",()=>{this.el.classList.contains("hidden")||this.render()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()}),document.addEventListener("mousemove",t=>{this.hoverEl.classList.contains("hidden")||this.positionHover(t.clientX,t.clientY)})}show(e){this.npcId=e,this.tab="buy",lt.pushModal(),this.el.classList.remove("hidden"),this.render()}render(){const e=Re.getInstance(),t=e.state.currentFloor,n=Qi.getInstance().openShop(this.npcId,t),i=this.npcId==="npc_witch",s=i?"buy":this.tab,a=n.map((c,h)=>{const u=c.quantity===0,d=e.state.gold>=c.price,f=c.equipment?B.equipment.quality[c.equipment.quality]:null,p=c.equipment&&f?`<div class="dim" style="color:${f.color}">${c.equipment.name} · ${c.equipment.affixes.map(g=>g.name).join("·")||"无词条"}</div>`:`<div class="dim">${c.desc}</div>`,v=c.equipment?` data-hover-equip="${h}"`:c.kind==="potion"&&c.tier?` data-hover-potion="${c.tier}"`:"";return`<div class="shop-row shop-item ${u?"soldout":""}"${v}>
        <div>
          <div>${c.icon} ${c.name} <span class="dim">×${c.quantity===-1?"∞":c.quantity}</span></div>
          ${p}
        </div>
        <button data-buy="${h}" ${u||!d?"disabled":""}>${c.price} 🪙</button>
      </div>`}).join(""),o=[...e.state.bag].sort((c,h)=>+!!h.isFavorite-+!!c.isFavorite),l=o.length===0?'<div class="dim">没有可回收的装备</div>':o.map(c=>{const h=B.equipment.quality[c.quality],u=c.id===e.state.weaponId||c.id===e.state.armorId,d=u||!!c.isFavorite,f=[c.isFavorite?'<span class="sell-tag fav-tag">⭐ 已收藏</span>':"",u?'<span class="sell-tag equipped-tag">已装备</span>':""].join("");return`<div class="shop-row shop-item" data-hover-sell="${c.id}">
          <div>
            <div><span style="color:${h.color}">${c.name}</span> <span class="dim">Lv.${c.level}</span> ${f}</div>
            <div class="dim">${c.slot==="weapon"?"🗡️ 武器":"🛡️ 胸甲"} · ⚔️${c.attack} 🛡️${c.defense}</div>
          </div>
          <button data-sell="${c.id}" ${d?"disabled":""}>+${c.sellPrice} 🪙</button>
        </div>`}).join("");this.el.innerHTML=`
      <div class="op-box op-box-inv">
        <div class="op-head"><span>${i?"🧪 女巫·薇薇安":"🛒 商人·老古"}</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="shop-header">
            <div class="shop-gold">持有金币：🪙 ${e.state.gold}</div>
            <div class="shop-tabs">
              <button class="inv-tab ${s==="buy"?"active":""}" data-shoptab="buy">${i?"🧪 秘药":"🛒 购买"}</button>
              ${i?"":`<button class="inv-tab ${s==="sell"?"active":""}" data-shoptab="sell">💰 回收</button>`}
            </div>
          </div>
          <div class="shop-content">${s==="buy"?a:l}</div>
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-shoptab]").forEach(c=>{c.addEventListener("click",()=>{this.tab=c.dataset.shoptab,this.render()})}),this.el.querySelectorAll("[data-buy]").forEach(c=>{c.addEventListener("click",()=>{const h=Qi.getInstance().buy(this.npcId,t,parseInt(c.dataset.buy,10));h.ok||ee.emit("notification",{message:h.reason??"购买失败",type:"warning",icon:"🛒"}),this.render()})}),this.el.querySelectorAll("[data-sell]").forEach(c=>{c.addEventListener("click",()=>{const h=Qi.getInstance().sell(c.dataset.sell);h.ok||ee.emit("notification",{message:h.reason??"回收失败",type:"warning",icon:"💰"}),this.render()})}),this.el.querySelectorAll("[data-hover-equip]").forEach(c=>{const h=n[parseInt(c.dataset.hoverEquip,10)];h?.equipment&&this.bindHover(c,()=>this.compareHtml(h.equipment))}),this.el.querySelectorAll("[data-hover-sell]").forEach(c=>{const h=e.state.bag.find(u=>u.id===c.dataset.hoverSell);h&&this.bindHover(c,()=>this.compareHtml(h))}),this.el.querySelectorAll("[data-hover-potion]").forEach(c=>{const h=B.getPotion(c.dataset.hoverPotion);h&&this.bindHover(c,()=>`
        <div class="hover-card">
          <div class="tt-title">${h.icon} ${h.name}</div>
          <div>❤️ 回复 ${Math.round(h.healPct*100)}% 最大生命</div>
          <div class="dim">售价：${h.price} 🪙（可拖入底部快捷栏）</div>
        </div>`)})}compareHtml(e){const t=Re.getInstance(),n=e.slot==="weapon"?t.weapon:t.armor,i=n?this.equipCard(n,"已穿戴"):`<div class="hover-card"><div class="tt-title dim">${e.slot==="weapon"?"🗡️ 武器":"🛡️ 胸甲"}栏</div><div class="dim">未穿戴装备</div></div>`;return this.equipCard(e,e.slot==="weapon"?"购买（武器）":"购买（胸甲）")+i}equipCard(e,t){const n=B.equipment.quality[e.quality];return`<div class="hover-card" style="border-color:${n.color}">
      <div class="tt-title" style="color:${n.color}">${e.name}</div>
      <div class="dim">${t} · ${n.name} · Lv.${e.level}</div>
      <div class="hover-stats">
        <div>⚔️ 攻击力 <b>${e.attack}</b></div>
        <div>🛡️ 防御力 <b>${e.defense}</b></div>
      </div>
      ${e.affixes.length>0?`<div class="affix-list">${e.affixes.map(i=>{const s=B.equipment.affixes.find(a=>a.name===i.name);return`<div class="affix-row">✦ ${i.name} ${s?.description?.replace("{v}",String(i.value))??`+${i.value}`}</div>`}).join("")}</div>`:'<div class="dim">无词条</div>'}
      <div class="dim">回收价 ${e.sellPrice} 🪙</div>
    </div>`}bindHover(e,t){e.addEventListener("mouseenter",()=>{this.hoverEl.innerHTML=t(),this.hoverEl.classList.remove("hidden")}),e.addEventListener("mouseleave",()=>this.hoverEl.classList.add("hidden"))}positionHover(e,t){const i=this.hoverEl.getBoundingClientRect();let s=e+14,a=t+14;s+i.width>window.innerWidth-8&&(s=e-i.width-14),a+i.height>window.innerHeight-8&&(a=Math.max(8,t-i.height-14)),this.hoverEl.style.left=`${s}px`,this.hoverEl.style.top=`${a}px`}close(){this.el.classList.add("hidden"),this.hoverEl.classList.add("hidden"),lt.popModal()}}class mx{constructor(e){O(this,"el");O(this,"triggeredRooms",new Set);this.el=document.createElement("div"),this.el.className="overlay-panel hidden event-panel",e.appendChild(this.el),ee.on("roomEntered",t=>this.maybeTrigger(t.roomId,t.roomType)),window.addEventListener("keydown",t=>{t.key==="Escape"&&!this.el.classList.contains("hidden")&&this.close()})}maybeTrigger(e,t){if(lt.modalOpen)return;const n=`${Re.getInstance().state.currentFloor}:${e}`;if(this.triggeredRooms.has(n))return;this.triggeredRooms.add(n);const i=Re.getInstance().state.currentFloor,o=B.events.events.filter(l=>i>=l.minFloor&&l.roomTypes.includes(t)&&Me.chance(l.chance))[0];o&&this.show(o)}show(e){lt.pushModal(),this.el.classList.remove("hidden");const t=Re.getInstance().state.currentFloor;this.el.innerHTML=`
      <div class="op-box">
        <div class="op-head"><span>${e.icon} ${e.name}</span><button class="op-close">✕</button></div>
        <div class="op-body">
          <div class="event-desc">${e.description}</div>
          ${e.options.map((n,i)=>`<button class="event-option" data-opt="${i}">${n.text}</button>`).join("")}
        </div>
      </div>
    `,this.el.querySelector(".op-close").addEventListener("click",()=>this.close()),this.el.querySelectorAll("[data-opt]").forEach(n=>{n.addEventListener("click",()=>{const i=e.options[parseInt(n.dataset.opt,10)];this.applyEffects(i.effects,t),this.close()})})}applyEffects(e,t){const n=Re.getInstance(),i=[];for(const s of e){const a=s.perFloor?s.value+s.perFloor*t:s.value;switch(s.type){case"gold":n.gainGold(Math.round(a)),i.push(`获得 ${Math.round(a)} 金币`);break;case"exp":n.gainExp(Math.round(a)),i.push(`获得 ${Math.round(a)} 经验`);break;case"healPct":{const o=n.heal(Math.round(n.maxHp*a/100));i.push(`回复 ${o} 生命`);break}case"damagePct":{const o=Math.round(n.maxHp*a/100);n.damage(o),i.push(`损失 ${o} 生命`);break}}}i.length>0&&(rn.getInstance().floatText(n.state.x,n.state.y,i.join("，"),"#ffdd66"),ee.emit("notification",{message:`${i.join("，")}`,type:"info",icon:"✨"}))}close(){this.el.classList.add("hidden"),lt.popModal()}}class gx{constructor(e){O(this,"el");this.el=e,this.show()}show(){const e=cn.getInstance().hasSave();this.el.classList.remove("hidden"),this.el.innerHTML=`
      <div class="title-box">
        <h1>${B.texts.titles?.gameTitle??"无尽之塔"}</h1>
        <div class="title-sub">魔塔RPG · 2.5D</div>
        <div class="title-buttons">
          <button id="title-new" class="btn-primary">⚔️ 开始新游戏</button>
          <button id="title-continue" ${e?"":"disabled"}>📂 继续冒险</button>
        </div>
        <div class="title-help dim">
          方向键/WASD 移动 · 点击地板走一步 · 点击怪物/宝箱交互 · 悬浮查看信息<br/>
          B 背包 · C 角色 · J 任务 · G 图鉴 · Esc 设置 · K 存档 · 1-5 快捷栏
        </div>
      </div>
    `,this.el.querySelector("#title-new").addEventListener("click",()=>this.start(!1)),this.el.querySelector("#title-continue").addEventListener("click",()=>this.start(!0))}start(e){e&&cn.getInstance().load()||ri.getInstance().enterFloor(1,!1),ln.getInstance().snapToPlayer(),On.getInstance(),this.el.classList.add("hidden"),mr.getInstance().showGame(),lt.started=!0,ee.emit("gameStarted",{}),ee.emit("notification",{message:B.texts.guidance?.tutorialWelcome??"欢迎来到无尽之塔",type:"info",icon:"🏰"})}}const vx={start:{icon:"↑",color:"#e8eaf0"},combat:{icon:"☠",color:"#ff9999"},elite:{icon:"!",color:"#ff3344"},merchant:{icon:"$",color:"#55dd77"},witch:{icon:"🧪",color:"#c78cff"},chest:{icon:"🪙",color:"#ffdd44"},boss:{icon:"💀",color:"#ff5555"},end:{icon:"↓",color:"#aaddff"},rest:{icon:"♨",color:"#ffaa66"}};class xx{constructor(e){O(this,"container");O(this,"canvas");this.container=document.createElement("div"),this.container.id="minimap",this.canvas=document.createElement("canvas"),this.canvas.className="minimap-canvas",this.container.appendChild(this.canvas),e.appendChild(this.container),ee.on("roomEntered",()=>this.refresh()),ee.on("floorChanged",()=>this.refresh()),ee.on("saveLoaded",()=>this.refresh()),ee.on("gameRestarted",()=>this.refresh())}refresh(){const e=He.getInstance().currentFloor,t=this.canvas.getContext("2d");if(!e||e.rooms.length===0){this.container.classList.add("hidden");return}this.container.classList.remove("hidden");const n=Math.min(...e.rooms.map(m=>m.gx)),i=Math.max(...e.rooms.map(m=>m.gx)),s=Math.min(...e.rooms.map(m=>m.gy)),a=Math.max(...e.rooms.map(m=>m.gy)),o=i-n+1,l=a-s+1,c=Math.max(12,Math.min(24,Math.floor(260/Math.max(o,l)))),h=10,u=o*c+h*2,d=l*c+h*2,f=window.devicePixelRatio||1;this.canvas.width=u*f,this.canvas.height=d*f,this.canvas.style.width=`${u}px`,this.canvas.style.height=`${d}px`,t.setTransform(f,0,0,f,0,0),t.clearRect(0,0,u,d);const p=m=>({x:h+(m.gx-n)*c,y:h+(m.gy-s)*c});t.strokeStyle="#6a7590",t.lineWidth=2,t.beginPath();for(const m of e.connections){const S=e.rooms.find(b=>b.id===m.from),w=e.rooms.find(b=>b.id===m.to);if(!S||!w)continue;const y=p(S),T=p(w);t.moveTo(y.x+c/2,y.y+c/2),t.lineTo(T.x+c/2,T.y+c/2)}t.stroke();const v=Re.getInstance().state.currentRoomId;for(const m of e.rooms){const S=p(m);t.fillStyle=m.id===v?"#5a6070":"#444a58",t.fillRect(S.x,S.y,c,c);const{icon:w,color:y}=vx[m.type];t.fillStyle=y,t.font=`${Math.floor(c*.62)}px "Microsoft YaHei", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(w,S.x+c/2,S.y+c/2+1)}const g=e.rooms.find(m=>m.id===v);if(g){const m=p(g);t.strokeStyle="#ffdd44",t.lineWidth=2,t.strokeRect(m.x-2.5,m.y-2.5,c+5,c+5)}}}const Yi=class Yi{constructor(){O(this,"leftHpFill");O(this,"leftHpText");O(this,"leftExpFill");O(this,"leftStats");O(this,"leftEquips");O(this,"roomInfoEl");O(this,"questTrackEl");O(this,"bottomPotions");O(this,"bossWarningEl");O(this,"panels");O(this,"tooltip");O(this,"miniMap");O(this,"hotbarBound",!1)}static getInstance(){return Yi.instance||(Yi.instance=new Yi),Yi.instance}build(){const e=document.getElementById("app");e.innerHTML=`
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
            <button data-panel="settings">⚙️ 设置(Esc)</button>
            <button id="btn-save">💾 存档(K)</button>
          </div>
        </footer>
        <div id="overlay-layer"></div>
      </div>
    `,ks.getInstance().init(document.getElementById("game-container")),this.tooltip=new sx(document.getElementById("tooltip")),ll.init(document.getElementById("notifications")),this.panels=new ax(document.getElementById("overlay-layer")),new fx(document.getElementById("overlay-layer")),new px(document.getElementById("overlay-layer")),new mx(document.getElementById("overlay-layer")),new da(document.getElementById("overlay-layer")),new gx(document.getElementById("title-screen")),this.leftHpFill=document.getElementById("hp-fill"),this.leftHpText=document.getElementById("hp-text"),this.leftExpFill=document.getElementById("exp-fill"),this.leftStats=document.getElementById("left-stats"),this.leftEquips=document.getElementById("left-equips"),this.roomInfoEl=document.getElementById("room-info"),this.questTrackEl=document.getElementById("quest-track"),this.bottomPotions=document.getElementById("quick-potions"),this.bossWarningEl=document.getElementById("boss-warning"),this.bottomPotions.innerHTML=[0,1,2,3,4].map(t=>`<div class="hotbar-slot" data-slot="${t}" title="快捷栏 ${t+1}：从背包拖入药水绑定；点击使用；右键解绑">
        <span class="key-num">${t+1}</span>
        <span class="slot-content"></span>
      </div>`).join(""),this.bindHotbarEvents(),document.querySelectorAll("#func-buttons button[data-panel]").forEach(t=>{t.addEventListener("click",()=>{ee.emit("panelToggled",{panel:t.dataset.panel,open:!0})})}),document.getElementById("btn-save").addEventListener("click",()=>{cn.getInstance().save("manual")}),this.miniMap=new xx(document.getElementById("center-area")),this.bindEvents(),this.refreshAll(),this.miniMap.refresh()}bindEvents(){const e=()=>this.refreshAll();for(const t of["hpChanged","goldChanged","expChanged","levelUp","potionUsed","potionPurchased","equipmentEquipped","equipmentGenerated","equipmentSold","keyPurchased","saveLoaded","gameRestarted","playerRevived"])ee.on(t,e);ee.on("roomEntered",t=>{this.roomInfoEl.textContent=`${t.name} · 深度${t.depth}`,this.refreshRight()}),ee.on("floorChanged",t=>{this.refreshRight(),this.roomInfoEl.textContent=`第 ${t.toFloor} 层`}),ee.on("questUpdated",()=>this.refreshRight()),ee.on("questCompleted",()=>this.refreshRight()),ee.on("bossWarning",t=>this.showBossWarning(t.floor,t.name)),ee.on("playerDied",()=>this.showDeathNotice()),ee.on("panelToggled",t=>{t.open&&this.panels.open(t.panel)}),window.addEventListener("keydown",t=>{if(t.key!=="Escape"||!lt.started)return;document.querySelector(".overlay-panel:not(.hidden)")?this.panels.handleEscape():this.panels.open("settings")})}updateHover(){const e=Gs.getInstance().hover;this.tooltip.update(e)}refreshAll(){const e=Re.getInstance(),t=e.stats(),n=Math.max(0,Math.min(100,e.state.hp/t.maxHp*100));this.leftHpFill.style.width=`${n}%`,this.leftHpText.textContent=`❤️ ${Math.ceil(e.state.hp)} / ${t.maxHp}`;const i=Bn.getInstance().expToNext(e.state.level);this.leftExpFill.style.width=`${Math.min(100,e.state.exp/i*100)}%`,this.leftStats.innerHTML=`
      <div>Lv.${e.state.level} <span id="exp-text" class="dim">(${e.state.exp}/${i} 经验)</span></div>
      <div>⚔️ 攻击 ${t.attack} <span class="dim">(基础${e.state.baseAttack})</span></div>
      <div>🛡️ 防御 ${t.defense} <span class="dim">(基础${e.state.baseDefense})</span></div>
      <div>🎯 暴击 ${t.critRate.toFixed(0)}%　💨 闪避 ${t.dodgeRate.toFixed(0)}%</div>
      ${t.lifesteal>0?`<div>🩸 嗜血 ${t.lifesteal}%</div>`:""}
      ${t.fireDamage>0?`<div>🔥 业火 +${t.fireDamage}</div>`:""}
      ${t.bossDamage>0?`<div>🐉 屠龙 +${t.bossDamage}%</div>`:""}
      <div>🪙 金币 ${e.state.gold}　🗝️ 钥匙 ${e.state.keys}</div>
    `;const s=(a,o)=>{if(!o)return`<div class="equip-item dim">${a}：未装备</div>`;const l=B.equipment.quality[o.quality];return`<div class="equip-item">${a}：<span style="color:${l?.color??"#fff"}">${o.name}</span></div>`};this.leftEquips.innerHTML=s("🗡️",e.weapon)+s("🛡️",e.armor),this.refreshHotbar(),this.refreshRight()}bindHotbarEvents(){if(this.hotbarBound)return;this.hotbarBound=!0;const e=Re.getInstance();this.bottomPotions.querySelectorAll(".hotbar-slot").forEach(t=>{const n=parseInt(t.dataset.slot,10);t.addEventListener("dragover",i=>{i.preventDefault(),t.classList.add("drag-over")}),t.addEventListener("dragleave",()=>t.classList.remove("drag-over")),t.addEventListener("drop",i=>{i.preventDefault(),t.classList.remove("drag-over");const s=i.dataTransfer?.getData("potion-tier");s&&(e.setHotbarSlot(n,s),this.refreshHotbar())}),t.addEventListener("click",()=>{const i=e.state.hotbar[n];i&&e.getPotionCount(i)>0&&e.usePotion(i)}),t.addEventListener("contextmenu",i=>{i.preventDefault(),e.state.hotbar[n]&&(e.setHotbarSlot(n,null),this.refreshHotbar())})})}refreshHotbar(){const e=Re.getInstance();this.bottomPotions.querySelectorAll(".hotbar-slot").forEach(t=>{const n=parseInt(t.dataset.slot,10),i=e.state.hotbar[n],s=t.querySelector(".slot-content");if(i){const a=B.getPotion(i),o=e.getPotionCount(i);t.classList.toggle("empty",o===0),s.innerHTML=`${a.icon}<span class="count">${o}</span>`,t.title=`${a.name}：回复${Math.round(a.healPct*100)}%生命（按此键使用；右键解绑）`}else t.classList.add("empty"),s.innerHTML=""})}refreshRight(){Re.getInstance();const t=He.getInstance().currentFloor,n=document.getElementById("floor-info");if(t){const s=t.kind==="initial"?"初始层":t.kind==="boss"?"Boss层":"";n.innerHTML=`<div class="floor-big">第 ${t.floorId} 层</div><div class="dim">${s} · ${t.rooms.length}个房间</div>`}const i=li.getInstance().trackedQuest;if(!i)this.questTrackEl.innerHTML='<div class="dim">暂无进行中的任务</div>';else{const s=i.quest.objectives[0];this.questTrackEl.innerHTML=`
        <div class="quest-name">📌 ${i.quest.name}</div>
        <div class="quest-desc">${i.quest.description}</div>
        <div class="quest-progress">${Math.min(i.def.progress,s.quantity)} / ${s.quantity}</div>
        <div class="quest-guide dim">💡 ${i.quest.guidance}</div>
      `}}showBossWarning(e,t){this.bossWarningEl.innerHTML=`<div class="boss-warning-text">⚠️ 警告：${t} 盘踞于此（第${e}层Boss）</div>`,this.bossWarningEl.classList.remove("hidden"),this.bossWarningEl.classList.add("flash"),window.setTimeout(()=>{this.bossWarningEl.classList.add("hidden"),this.bossWarningEl.classList.remove("flash")},2600)}showDeathNotice(){ll.show("你倒下了……在楼层起点复活（金币-20%）","warning","💀")}showGame(){document.getElementById("title-screen").classList.add("hidden"),document.getElementById("game-root").classList.remove("hidden"),this.refreshAll()}};O(Yi,"instance");let mr=Yi;const Ki=class Ki{constructor(){O(this,"running",!1);O(this,"lastTime",0);O(this,"lastProcessedTime",0);O(this,"watchdog",null)}static getInstance(){return Ki.instance||(Ki.instance=new Ki),Ki.instance}start(){this.running||(this.running=!0,this.lastTime=performance.now(),requestAnimationFrame(e=>this.frame(e)),this.watchdog=window.setInterval(()=>{this.running&&performance.now()-this.lastTime>120&&this.frame(performance.now())},50))}stop(){this.running=!1,this.watchdog!==null&&(window.clearInterval(this.watchdog),this.watchdog=null)}frame(e){if(!this.running||e<=this.lastProcessedTime)return;this.lastProcessedTime=e;const t=Math.min(50,e-this.lastTime);this.lastTime=e,ln.getInstance().update(t),Gs.getInstance().update(t),On.getInstance().update(t),rn.getInstance().update(t),ur.getInstance().update(t),ks.getInstance().render(e),mr.getInstance().updateHover(),requestAnimationFrame(n=>this.frame(n))}};O(Ki,"instance");let ua=Ki;const kh=[{d:"north",dx:0,dy:-1},{d:"south",dx:0,dy:1},{d:"west",dx:-1,dy:0},{d:"east",dx:1,dy:0}];function _x(r,e){const t=r.length,n=Math.max(...r.map(o=>o.length)),i=Array.from({length:t},()=>Array(n).fill(1)),s=[],a=B.monsters.monsters.filter(o=>o.category==="normal"&&e>=o.floorMin&&e<=o.floorMax);for(let o=0;o<t;o++)for(let l=0;l<n;l++){const c=r[o][l]??"1";switch(c){case"0":case" ":i[o][l]=0;break;case"1":i[o][l]=1;break;case"2":case"3":{if(i[o][l]=0,a.length===0)break;const h=Me.pickWeighted(a,u=>u.weight);s.push({id:Vt.next("ent"),kind:"monster",x:l,y:o,monsterId:h.id,isElite:c==="3"});break}case"4":i[o][l]=0,s.push({id:Vt.next("ent"),kind:"chest",x:l,y:o,chestTier:"normal"});break;case"5":i[o][l]=0,s.push({id:Vt.next("ent"),kind:"npc",x:l,y:o,npcId:"npc_merchant"});break;case"B":i[o][l]=0,s.push({id:Vt.next("ent"),kind:"boss",x:l,y:o,monsterId:"ancient_dragon"});break;case"D":i[o][l]=0,s.push({id:Vt.next("ent"),kind:"stair",x:l,y:o,targetFloor:e+1});break;case"S":i[o][l]=0;break;default:Ft.warn(`[Prefab] 楼层${e} (${l},${o}) 非法字符 '${c}'，按墙壁处理`),i[o][l]=1;break}}return{grid:i,entities:s}}function Mx(r,e,t,n){const i=(s,a)=>r.reduce((o,l,c)=>o||(s>=l.x&&s<l.x+l.w&&a>=l.y&&a<l.y+l.h?{id:`pf${e}_r${c}`}:null),null);return r.map((s,a)=>{const o=`pf${e}_r${a}`,l=(h,u)=>h>=s.x&&h<s.x+s.w&&u>=s.y&&u<s.y+s.h,c=[];for(let h=s.y;h<s.y+s.h;h++)for(let u=s.x;u<s.x+s.w;u++)if(!(!(u===s.x||u===s.x+s.w-1||h===s.y||h===s.y+s.h-1)||n[h]?.[u]!==0))for(const{d:f,dx:p,dy:v}of kh){const g=u+p,m=h+v;l(g,m)||n[m]?.[g]===0&&c.push({x:u,y:h,direction:f,toRoomId:i(g,m)?.id??""})}return{id:o,floorId:e,type:s.type,order:a,gx:s.x,gy:s.y,width:s.w,height:s.h,x:s.x,y:s.y,centerX:s.x+Math.floor(s.w/2),centerY:s.y+Math.floor(s.h/2),fromDirection:null,depth:0,onPathA:!1,onPathB:!1,mountedOn:null,doors:c,entities:t.filter(h=>h.x>=s.x&&h.x<s.x+s.w&&h.y>=s.y&&h.y<s.y+s.h)}})}function yx(r,e,t){const n=new Set;if(r[t]?.[e]!==0)return n;const i=[{x:e,y:t}];for(n.add(`${e},${t}`);i.length>0;){const s=i.shift();for(const{dx:a,dy:o}of kh){const l=s.x+a,c=s.y+o,h=`${l},${c}`;n.has(h)||r[c]?.[l]===0&&(n.add(h),i.push({x:l,y:c}))}}return n}function Sx(r){const{grid:e,entities:t}=_x(r.rows,r.floorId),n=e[0]?.length??0,i=e.length;let s=r.entry??null;if(!s)for(let h=0;h<i&&!s;h++)for(let u=0;u<n&&!s;u++)(r.rows[h]?.[u]??"1")==="S"&&(s={x:u,y:h});const a=Mx(r.rooms,r.floorId,t,e);if(a.length===0)throw new Error(`[Prefab] 楼层${r.floorId} 未定义任何房间`);const o=[s,a[0]?{x:a[0].centerX,y:a[0].centerY}:null].find(h=>!!h&&e[h.y]?.[h.x]===0);if(!o)throw new Error(`[Prefab] 楼层${r.floorId} 入口无效（必须是空地）`);for(const h of t){if(a.some(p=>h.x>=p.x&&h.x<p.x+p.width&&h.y>=p.y&&h.y<p.y+p.height))continue;let d=a[0],f=1/0;for(const p of a){const v=Math.abs(p.centerX-h.x)+Math.abs(p.centerY-h.y);v<f&&(f=v,d=p)}Ft.warn(`[Prefab] 楼层${r.floorId} 实体 ${h.id} (${h.x},${h.y}) 在所有房间外，挂到 ${d.id}`),d.entities.push(h)}const l=[],c=new Set;for(const h of a){const u=e[h.centerY]?.[h.centerX]===0?{x:h.centerX,y:h.centerY}:a.map(f=>({x:f.centerX,y:f.centerY})).find(f=>e[f.y]?.[f.x]===0);if(!u)continue;const d=yx(e,u.x,u.y);for(const f of a){if(f.id===h.id||e[f.centerY]?.[f.centerX]!==0||!d.has(`${f.centerX},${f.centerY}`))continue;const p=[h.id,f.id].sort().join("|");c.has(p)||(c.add(p),l.push({from:h.id,to:f.id}))}}return{floorId:r.floorId,kind:r.kind??"normal",rooms:a,corridors:[],connections:l,grid:e,width:n,height:i,entryX:o.x,entryY:o.y}}function bx(){B.loadAll(),mr.getInstance().build(),li.getInstance(),ns.getInstance(),zs.getInstance(),cn.getInstance(),Gs.getInstance(),ua.getInstance().start(),window.__motaDebug={get player(){return Re.getInstance()},get world(){return He.getInstance()},get camera(){return ln.getInstance()},gameLoop:ua.getInstance(),gameController:On.getInstance(),floorManager:ri.getInstance(),mapGenerator:ar.getInstance(),battle:pr.getInstance(),chest:fr.getInstance(),equipGen:ji.getInstance(),quest:li.getInstance(),bestiary:ns.getInstance(),merchant:Qi.getInstance(),save:cn.getInstance(),guidance:zs.getInstance(),describeFloor(){return ar.getInstance().describe(He.getInstance().currentFloor)},loadPrefab(r){ri.getInstance().enterPrefabFloor(Sx(r)),ln.getInstance().snapToPlayer()}},Ft.info("无尽之塔 2.5D · 启动完成")}bx();
