class Dog {
	constructor(name) {
		this.name = name;
	}

	static makeJet() {
		let jet = new Dog('Jet');
		return jet;
	}

	changeName = newName => this.name = newName;
	speak = word => `${this.name} says ${word}`;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
