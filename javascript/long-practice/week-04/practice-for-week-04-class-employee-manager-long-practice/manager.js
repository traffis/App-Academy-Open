const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        let bonus = (this.salary + this._totalSubSalary(this.employees)) * multiplier;
        return bonus;
    }

    _totalSubSalary() {
        let sum = 0;

        this.employees.forEach(employee => {
            sum += employee.salary;

            if (employee instanceof Manager) {
                sum += employee._totalSubSalary(employee.employees);
            }
        });

        return sum;
    }
}

module.exports = Manager;
