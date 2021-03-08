let deadByDaylight1;
let deadByDaylight2;
let deadByDaylight3;










let bookList = [
	deadByDaylight1,
	deadByDaylight2,
	deadByDaylight3,
];





for (let i = 0; i < bookList.length; i++) {
	
}

let multiplication = (firstNumber, secondNumber) => {
	const return = firstNumber * secondNumber;
}

resultat = multiplication(8,6);

class catInfo{
	constructor(name, gender, ready)
	{
		this.name = name;
		this.gender = gender;
		this.ready = false;
	}
	catReadyToBeTaked(name, gender, ready)
	{
		this.name = name;
		this.gender = gender;
		this.ready = true;
	}

}

let choupetteTheCat = new catInfo;
choupetteTheCat.catReadyToBeTaked('Choupette', 'Male');

class bankAccount{
	constructor (owner, solde)
	{
		this.owner = owner;
		this.solde = solde;
	}
	addMoney (amount) {
		this.solde += amount;
	}
	drawMoney (amount) {
		if (amount > this.balance) {
				console.log('NON');
		} else {
			this.solde -= amount;
		}
	}
}

let scaleBankAccount = new bankAccount('Scale Alexenderson','1000');

scaleBankAccount.drawMoney(100);





















