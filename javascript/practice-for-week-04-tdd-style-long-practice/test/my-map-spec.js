const { expect } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
const myMap = require('../problems/my-map');
chai.use(spies);

describe('myMap function', function() {
  let array;
  let callback;
  let callbackSpy;
  let func;

  beforeEach(() => {
    callback = el => el * 2;
    callbackSpy = chai.spy(callback);
    array = [1, 2, 3];
    func = myMap(array, callbackSpy);
  });

  it('should return a new array where the callback function has been called on ' +
    'each element', function() {
      let mappedArray = array.map(el => el * 2);

      expect(array).to.eql([1, 2, 3]);
      expect(func).to.eql(mappedArray);
  });

  it('should not call the built-in Array.map method', function() {
    const map = chai.spy.on(array, 'map');
    expect(map).to.not.have.been.called();
  });

  it('should invoke the passed-in callback function once for each element', function() {
    expect(callbackSpy).to.be.spy;
    expect(callbackSpy).to.have.been.called.exactly(array.length);
  });

  it('should throw an error if the input is not an array', function() {
    expect(() => myMap(0, callbackSpy)).to.throw(TypeError);
  });
});
