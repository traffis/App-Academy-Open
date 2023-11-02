class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const hash = this.hashMod(key);
    const keyValuePair = new KeyValuePair(key, value);

    if (this.data[hash] === null) {
      this.data[hash] = keyValuePair;
    } else {
      let currentNode = this.data[hash];

      while (currentNode.next !== null && currentNode.key !== keyValuePair.key) {
        currentNode = currentNode.next;
      }

      if (currentNode.key === keyValuePair.key) {
        currentNode.value = keyValuePair.value;
      } else {
        keyValuePair.next = this.data[hash];
        this.data[hash] = keyValuePair;
      }
    }

    this.count++;
  }


  read(key) {
    const hash = this.hashMod(key);
    let currentNode = this.data[hash];

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }

    return undefined;
  }


  resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity).fill(null);

    for (let i = 0; i < this.data.length; i++) {
      let currentNode = this.data[i];

      while (currentNode) {
        const hash = this.hashMod(currentNode.key);

        if (newData[hash] === null) {
          newData[hash] = currentNode;
        } else {
          currentNode.next = newData[hash];
        }

        currentNode = currentNode.next;
      }
    }

    this.data = newData;
  }


  delete(key) {
    const hash = this.hashMod(key);
    let currentNode = this.data[hash];

    if (!this.read(key)) {
      return "Key not found"
    }

    if (currentNode.key === key && currentNode.next === null) {
      this.data[hash] = null;
      this.count--;
    } else {
      let prevNode = currentNode;
      currentNode = currentNode.next;

      if (prevNode.key === key) {
        this.data[hash] = currentNode;
        this.count--;
        return prevNode;
      }

      while (currentNode) {
        if (currentNode.key === key) {
          prevNode.next = currentNode.next;
          this.count--;
          return currentNode;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
}


module.exports = HashTable;
