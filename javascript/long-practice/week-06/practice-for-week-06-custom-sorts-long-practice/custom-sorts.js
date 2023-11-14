function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1;
    if (a % 2 === 1 && b % 2 === 0) return -1;
    return a - b;
  });
}

function validAnagrams(s, t) {
  let sArray = s.split('').sort();
  let tArray = t.split('').sort();
  return sArray.every((el, idx) => el === tArray[idx]);
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    if (a.toString().length < b.toString().length) return 1;
    if (a.toString().length > b.toString().length) return -1;
    return a - b;
  });
}

function frequencySort(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }

  return arr.sort((a, b) => {
    if (frequency[a] > frequency[b]) return 1;
    if (frequency[a] < frequency[b]) return -1;
    return b - a;
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
