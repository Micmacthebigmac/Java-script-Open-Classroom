let firstName = "Leon";
let lastName = "Kennedy";

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

let chrisRedfieldInfo = {
	prénom: "Chris",
	Nom: "Redfield",
	classe: "BSAA",
	hearthPoint: 305,
	mindPoint: 5,
	partyMemberAvaiable: true
};

let infoCloud = new InfoPersonnages (
	"Cloud",
	"Strife",
	"samourai",
	4500,
	70,
	false
	);


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