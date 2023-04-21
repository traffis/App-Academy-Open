const { expect } = require('chai');
const Person = require('../problems/person');

describe('Person class', function() {
  let john;
  let max;

  beforeEach(() => {
    john = new Person('John', 21);
    max = new Person('Max', 20);
  });

  context('constructor', function() {
    it('should take a name and age and set them as properties of the instance',
      function() {
        expect(john).to.have.all.keys('name', 'age');
        expect(john.name).to.equal('John');
        expect(john.age).to.equal(21);
    });
  });

  context('instance methods', function() {
    describe('sayHello method', function() {
      it("should return a string of the Person instance's name and a greeting message",
        function() {
          expect(john.sayHello()).to.equal('Hello, my name is John');
      });
    });

    describe('visit method', function() {
      it('should return a string stating that this instance visited the passed-in ' +
        'person instance', function() {
          expect(john.visit(max)).to.equal('John visited Max');
      });
    });

    describe('switchVisit method', function() {
      it('should invoke the visit function of otherPerson, passing in the current ' +
        'instance as the argument', function() {
          expect(john.switchVisit(max)).to.equal('Max visited John');
      });
    });

    describe('update method', function() {
      context('valid inputs', function() {
        it("should set Person instance's name and age to match passed-in object's " +
          "values", function() {
            const obj = {name: 'Jon', age: 22};

            john.update(obj);
            expect(john.name).to.equal('Jon');
            expect(john.age).to.equal(22);
          });
      });

      context('invalid inputs', function() {
        it('should throw a TypeError if obj is not an object', function() {
          expect(() => john.update(0)).to.throw(TypeError);
        });

        it('should throw a TypeError if the passed in object does not have a name ' +
          'and age property', function() {
            let name = {name: 'Jon'};
            let age = {age: 22};

            expect(() => john.update(name)).to.throw(TypeError);
            expect(() => john.update(age)).to.throw(TypeError);
        });
      });
    });

    describe('tryUpdate method', function() {
      context('successful invocation', function() {
        let obj = {name: 'Jon', age: 22};
        it('should return true if the update method was successfully invoked',
          function() {
            expect(john.tryUpdate(obj)).to.be.true;
            expect(john.name).to.equal('Jon');
            expect(john.age).to.equal(22);
        });
      });

      context('unsuccessful invocation', function() {
        it('should return false if the update method was not invoked', function() {
          expect(john.tryUpdate()).to.be.false;
          expect(john.name).to.equal('John');
          expect(john.age).to.equal(21);
        });
      });
    });
  });

  context('static methods', function() {
    describe('greetAll method', function() {
      it('should throw an error if the argument is not an array', function() {
        expect(() => john.greetAll()).to.throw(TypeError);
      });

      it('should return an array with results from sayHello method called on each ' +
        'Person instance in the passed-in array', function() {
          let people = [john, max];

          expect(Person.greetAll(people)).to.eql([
            'Hello, my name is John',
            'Hello, my name is Max'
          ]);
      });
    });
  });
});
