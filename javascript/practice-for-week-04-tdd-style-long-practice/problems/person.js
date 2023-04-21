class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object') {
      throw new TypeError('obj is not an object');
    } else if (!('name' in obj) || !('age' in obj)) {
      throw new TypeError('obj does not have both name and age properties');
    };

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      console.log(`${error.name}: ${error.message}`);
      return false;
    }
  }

  static greetAll(obj) {
    if (!Array.isArray(obj)) {
      throw new TypeError('obj is not an array');
    }

    const greetings = [];

    obj.forEach(person => {
      greetings.push(person.sayHello());
    });

    return greetings;
  }
}

module.exports = Person;
