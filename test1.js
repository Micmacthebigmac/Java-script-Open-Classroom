/* Les STATS Perso
---------------------------------------- */

let characterStatsArray = [
		tidusBaseStats,
		wakkaBaseStats
];


const maxCharacterHearthPoint = 9999;
const maxCharacterManaPoint = 999;

class characterStats {
	constructor (name, classtype, hearthPoint, mindPoint, powerPoint, magicPoint, mindPoint, physicalPoint) {
		this.classtype = Type;
		this.name = NAME;
		this.hearthPoint = HP;
		this.mindPoint = MP;
		this.powerPoint = FOR;
		this.magicPoint = MAG;
		this.mindPoint = MIN;
		this.physicalPoint = CONS;
	}
}

let tidusBaseStats = new characterStats ("tidus", "webDev", 305, 0, 5, 2, 10, 4);
let wakkaBaseStats = new characterStats ("wakka","ballPro", 3000, 50, 17, 25, 50, 40);
let auronBaseStats = new characterStats ("Auron", "Samourai", 4500, 12, 24, 10, 25, 30);
let kimahriBaseStats = new characterStats ("kimahri","Animator", 2500, 25, 22, 7, 27, 28);

let initialCharacter = characterStatsArray[0];

let secondCharacter = characterStatsArray[1];

tidusBaseStats.HP = 310;

characterStatsArray.push (auronBaseStats, kimahriBaseStats);


/*--------------------------------------*/

/*L' Experiences
 -----------------------*/


let level1ToNextLevelXp = 10;
let level2ToNextLevelXp = level1ToNextLevelXp * 2;	/* 20 */
let level3ToNextLevelXp = level2ToNextLevelXp * 2;	/* 40 */	
let level4ToNextLevelXp = level3ToNextLevelXp * 2;	/* 80 */
let level5ToNextLevelXp = level4ToNextLevelXp * 2;	/* 160 */
let level6ToNextLevelXp = level5ToNextLevelXp * 2;	/* 320 */
let level7ToNextLevelXp = level6ToNextLevelXp * 2;	/* 640 */
let level8ToNextLevelXp = level7ToNextLevelXp * 2;	/* 1280 */
let level9ToNextLevelXp = level8ToNextLevelXp * 2;	/* 2560 */
let level10ToNextLevelXp = level9ToNextLevelXp * 2;	/* 5120 */



/*---------------------------------------------*/


/* Collecter 
----------------------------------*/


let rings1InTheMap = 1;
let rings2InTheMap = 1;
let rings3InTheMap = 1;
let rings4InTheMap = 1;
let rings5InTheMap = 1;
let rings6InTheMap = 1;
let rings7InTheMap = 1;
let rings8InTheMap = 1;
let rings9InTheMap = 1;
let rings10InTheMap = 1;
let rings11InTheMap = 1;

ringsCollected = [rings11InTheMap, rings9InTheMap, rings10InTheMap, rings5InTheMap, rings2InTheMap
];

ringsHudCounter = ringsCollected.length;
ringsRemoveWhenTrade = ringsCollected.pop;


/*--------------------------------------------*/