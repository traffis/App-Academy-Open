class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    let newData = [];
    if (val) {
      newData[0] = val;

      for (let i = 0; i < this.data.length; i++) {
        newData[i + 1] = this.data[i];
      }
    }
    this.data = newData;
    this.length++;
  }

}


module.exports = DynamicArray;
