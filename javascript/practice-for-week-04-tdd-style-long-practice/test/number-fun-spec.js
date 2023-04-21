const { expect } = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun');

describe('returnsThree function', function() {
  it('should return the number 3', function() {
    expect(returnsThree()).to.equal(3);
  });
});

describe('reciprocal function', function() {
  context('valid inputs', function() {
    it('should return the reciprocal of an integer', function() {
      expect(reciprocal(2)).to.equal(1 / 2);
    });

    it('should return the reciprocal of a decimal', function() {
      expect(reciprocal(2.5)).to.equal(1 / 2.5);
    })

    it('should return the reciprocal of a fraction', function() {
      expect(reciprocal(5 / 2)).to.equal(2 / 5);
    })
  });

  context('invalid inputs', function() {
    it('should throw an error if the input is not in the range 1 and 1000000, inclusive', function() {
      expect(() => reciprocal(0)).to.throw(TypeError);
      expect(() => reciprocal(1000001)).to.throw(TypeError);
    });

    it('should throw an error if the input is not a number', function() {
      expect(() => reciprocal('string')).to.throw(TypeError);
    });
  });
});
