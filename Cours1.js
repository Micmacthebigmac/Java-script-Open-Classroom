let firstName = "Hervé";
let lastName = "Richard";

let numberofviewer = 255;
const daysperweek = 7;
let numberofviewerperdays = numberofviewer / daysperweek;
let numberofviewer++;
let numberofsuscriber -= 7;
let userSignedIn = true;
let userIsAdmin = false;
let positive = 42;
let negative = -42;
let decimal = 42.2;

let hervéRichardInfo = {
	prénom: "Hervé",
	Nom: "Richard",
	classe: "freeLance",
	hearthPoint: 305,
	mindPoint: 5,
	partyMemberAvaiable: true
};

let infoEnjalbert = new InfoPersonnages (
	"David",
	"Enjalbert",
	"samourai",
	4500,
	70,
	false
	);

let hervéClass = hervéRichardInfo.class;
let hervéHearthPoint = hervéRichardInfo.class;
let hervéMindPoint = hervéRichardInfo.class;
let hervéParyMemberAvaiable = hervéRichardInfo.partyMemberAvaiable;

class InfoPersonnages {
	constructor (prénom, nom, classe, hearthPoint, mindPoint, partyMemberAvaiable){
		this.prénom = prénom;
		this.nom = nom;
		this.classe = classe;
		this.hearthPoint = hearthPoint;
		this.mindPoint = mindPoint;
		this.partyMemberAvaiable = partyMemberAvaiable;
	}
}

console.log(typeof userIsSignedIn);
console.log(firstName + " " + lastName);