class Calculator {
	constructor(total = 0) {
		this.total = total;
	}

	add = num => this.total += num;
	subtract = num => this.total -= num;
	divide = num => this.total /= num;
	multiply = num => this.total *= num;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
