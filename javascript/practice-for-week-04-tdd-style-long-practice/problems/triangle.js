class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  static validTriangles = [];

  static getValidTriangles() {
    return Triangle.validTriangles;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths() {
    if (this.side1 + this.side2 < this.side3 ||
        this.side1 + this.side3 < this.side2 ||
        this.side2 + this.side3 < this.side1) {
          return false;
    }
    return true;
  }

  validate() {
    this.isValidTriangle = this.hasValidSideLengths();

    if (this.isValidTriangle === true) {
      Triangle.validTriangles.push(this);
    }
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    super.validate();
  }

  isScalene() {
    if (this.side1 !== this.side2 &&
        this.side1 !== this.side3 &&
        this.side2 !== this.side3) {
          return true;
    }
    return false;
  }

  validate() {
    this.isValidScalene = this.isScalene();
  }
}

class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    super.validate();
  }

  isIsosceles() {
    if (this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3) {
          return true;
    }
    return false;
  }

  validate() {
    this.isValidIsosceles = this.isIsosceles();
  }
}

module.exports = {
  Triangle,
  Scalene,
  Isosceles
};