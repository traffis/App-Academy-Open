const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString function', function() {
  it('should return a reversed string', function() {
    expect(reverseString('fun')).to.equal('nuf');
  });

  it('should throw a TypeError when the input is not a string', function() {
    expect(() => reverseString(1)).to.throw(TypeError);
  });
})
