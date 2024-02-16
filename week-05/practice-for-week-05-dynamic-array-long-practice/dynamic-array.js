class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const val = this.read(this.length - 1);
    this.data[this.length - 1] = undefined;
    this.length--;
    return val;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const val = this.read(0);

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.read(i + 1);
    }

    this.length--;
    return val;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    let tempVal = this.read(0);
    this.data[0] = val;

    for (let i = 1; i <= this.length; i++) {
      const nextTempVal = this.read(i);
      this.data[i] = tempVal;
      tempVal = nextTempVal;
    }

    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.read(i) === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.read(i);
    }

    this.data = newData;
  }

}


module.exports = DynamicArray;
