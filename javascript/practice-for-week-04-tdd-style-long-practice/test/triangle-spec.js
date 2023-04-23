const { expect } = require('chai');
const {Triangle, Scalene, Isosceles} = require('../problems/triangle');

describe('Triangle class', function() {
  let validTriangle;
  let invalidTriangle;

  beforeEach(() => {
    validTriangle = new Triangle(8, 9, 10);
    invalidTriangle = new Triangle(2, 4, 10);
    Triangle.validTriangles = [];
  });

  context('constructor', function() {
    it('should intake 3 lengths and set them as properties on the instance',
      function() {
        expect(validTriangle).to.have.all.keys('side1', 'side2', 'side3');
        expect(validTriangle.side1).to.equal(8);
        expect(validTriangle.side2).to.equal(9);
        expect(validTriangle.side3).to.equal(10);
    });
  });

  context('instance methods', function() {
    describe('getPerimeter method', function() {
      it('should return the perimeter of the Triangle instance', function() {
        expect(validTriangle.getPerimeter()).to.equal(27);
      })
    });

    describe('hasValidSideLengths method', function() {
      it('should return true if a triangle is valid, otherwise false if invalid',
        function() {
          expect(validTriangle.hasValidSideLengths()).to.be.true;
          expect(invalidTriangle.hasValidSideLengths()).to.be.false;
      });
    });

    describe('validate method', function() {
      it('should add an isValid property to the triangle instance with value of true if ' +
        'the triangle is valid, false if the triangle is invalid', function() {
          validTriangle.validate();
          expect(validTriangle).to.have.property('isValidTriangle', true);

          invalidTriangle.validate();
          expect(invalidTriangle).to.have.property('isValidTriangle', false);
      });
    });
  });

  context('static methods', function() {
    describe('getValidTriangles method', function() {
      it('should take in an arbitrary number of Triangle instances, and returns ' +
        'all of the instance that are valid triangles', function() {
          validTriangle.validate();
          invalidTriangle.validate();
          expect(Triangle.getValidTriangles()).to.eql([validTriangle]);
      });
    });
  });
});

describe('Scalene class', function() {
  let validScaleneTriangle;
  let invalidScaleneTriangle;

  beforeEach(() => {
    validScaleneTriangle = new Scalene(8, 9, 10);
    invalidScaleneTriangle = new Scalene(8, 8, 10);
  });

  it('should inherit from the Triangle class', function() {
    expect(validScaleneTriangle instanceof Triangle).to.be.true;
    expect(validScaleneTriangle.side1).to.equal(8);
    expect(validScaleneTriangle.side2).to.equal(9);
    expect(validScaleneTriangle.side3).to.equal(10);
    expect(validScaleneTriangle.isValidTriangle).to.equal(true);
  });

  context('instance methods', function() {
    describe('isScalene method', function() {
      it('should return true if it is a valid scalene triangle, otherwise ' +
        'false', function() {
          expect(validScaleneTriangle.isScalene()).to.be.true;
          expect(invalidScaleneTriangle.isScalene()).to.be.false;
      });
    });

    describe('validate method', function() {
      it('should add an isValidScalene property with a value of true if it ' +
        'is a valid scalene triangle, otherwise false', function() {
          validScaleneTriangle.validate();
          expect(validScaleneTriangle).to.have.property('isValidScalene', true);
          
          invalidScaleneTriangle.validate();
          expect(invalidScaleneTriangle).to.have.property('isValidScalene', false);
      });
    });
  });
});

describe('Isosceles class', function() {
  let validIsoscelesTriangle;
  let invalidIsoscelesTriangle;

  beforeEach(() => {
    validIsoscelesTriangle = new Isosceles(8, 8, 10);
    invalidIsoscelesTriangle = new Isosceles(8, 9, 10);
  });

  it('should inherit from the Triangle class', function() {
    expect(validIsoscelesTriangle instanceof Triangle).to.be.true;
    expect(validIsoscelesTriangle.side1).to.equal(8);
    expect(validIsoscelesTriangle.side2).to.equal(8);
    expect(validIsoscelesTriangle.side3).to.equal(10);
    expect(validIsoscelesTriangle.isValidTriangle).to.equal(true);
  });

  context('instance methods', function() {
    describe('isIsosceles method', function() {
      it('should return true if it is a valid isosceles triangle, otherwise ' +
        'false', function() {
          expect(validIsoscelesTriangle.isIsosceles()).to.be.true;
          expect(invalidIsoscelesTriangle.isIsosceles()).to.be.false;
      });
    });

    describe('validate method', function() {
      it('should add an isValidIsosceles property with a value of true if it ' +
        'is a valid isosceles triangle, otherwise false', function() {
          validIsoscelesTriangle.validate();
          expect(validIsoscelesTriangle).to.have.property('isValidIsosceles', true);

          invalidIsoscelesTriangle.validate();
          expect(invalidIsoscelesTriangle).to.have.property('isValidIsosceles', false);
      });
    });
  });
});
