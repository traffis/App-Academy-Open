class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (this.manager === undefined) {
            this.manager = null;
        } else {
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        let bonus = (this.salary) * multiplier;
        return bonus;
    }
}

module.exports = Employee;
