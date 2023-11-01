const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const hash = this.hashMod(key);
    const keyValuePair = new KeyValuePair(key, value);

    if (this.data[hash] !== null) {
      throw new Error("hash collision or same key/value pair already exists!");
    }

    this.data[hash] = keyValuePair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    const hash = this.hashMod(key);
    const keyValuePair = new KeyValuePair(key, value);

    if (this.data[hash] === null) {
      this.data[hash] = keyValuePair;
    } else {
      keyValuePair.next = this.data[hash];
      this.data[hash] = keyValuePair;
    }

    this.count++;
  }

  insert(key, value) {
    const hash = this.hashMod(key);
    const keyValuePair = new KeyValuePair(key, value);

    if (this.data[hash] === null) {
      this.data[hash] = keyValuePair;
      this.count++;
    } else {
      let currentNode = this.data[hash];

      while (currentNode.next !== null && currentNode.key !== keyValuePair.key) {
        currentNode = currentNode.next;
      }

      if (currentNode.key === keyValuePair.key) {
        currentNode.value = keyValuePair.value;
      } else {
        this.insertWithHashCollisions(key, value);
      }
    }
  }
}


module.exports = HashTable;
