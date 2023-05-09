const findMinimum = arr => {
  // Time Complexity: O(n)
  // Space Complexity: O(1)

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = arr => {
  // Time Complexity: O(n)
  // Space Complexity: O(1)

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] + arr[i-1];
  }
  return arr;
};

const evenNumOfChars = arr => {
  // Time Complexity: O(n)
  // Space Complexity: O(1)

  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];

    if (word.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

const smallerThanCurr = arr => {
  // Time Complexity: O(n^2)
  // Space Complexity: O(n)

  let numsSmallerThanCurr = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[j] < arr[i]) {
        count++;
      }
    }
    numsSmallerThanCurr.push(count);
  }
  return numsSmallerThanCurr;
};

const twoSum = (arr, target) => {
  // Time Complexity: O(n)
  // Space Complexity: O(n)

  let map = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - num;

    if (num in map) {
      return true;
    }
    
    map[diff] = num;
  }
  return false;
};

const secondLargest = arr => {
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  
  if (arr.length < 2) {
    return undefined;
  }

  let largest = arr[0];
  let secondLargest = arr[1];

  if (secondLargest > largest) {
    [largest, secondLargest] = [secondLargest, largest];
  }

  for (let i = 2; i < arr.length; i++) {
    const num = arr[i];

    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};

const shuffle = (arr) => {
  // Time Complexity: O(n)
  // Space Complexity: O(n)

  let shuffled = [...arr];

  for (let i = 0; i < arr.length; i++) {
    let randomNum = Math.floor(Math.random() * arr.length);
    [shuffled[i], shuffled[randomNum]] = [shuffled[randomNum], shuffled[i]];
  }
  return shuffled;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];