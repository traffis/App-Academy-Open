class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  static validTriangles = [];

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
    this.isValid = this.hasValidSideLengths();

    if (this.isValid === true) {
      Triangle.validTriangles.push(this);
    }
  }

  static getValidTriangles() {
    return this.validTriangles;
  }
}
