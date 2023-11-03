function anagrams(str1, str2) {
  const setStr1 = new Set(str1.split(''));

  for (let i = 0; i < str2.length; i++) {
    if (!setStr1.has(str2[i])) return false;
  }

  return true;
}


function commonElements(arr1, arr2) {
  const setArr1 = new Set(arr1);
  let array = [];

  for (let i = 0; i < arr2.length; i++) {
    if (setArr1.has(arr2[i])) array.push(arr2[i]);
  }

  return array;
}


function duplicate(arr) {
  const arrSet = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arrSet.has(arr[i])) arrSet.delete(arr[i]);
    else return arr[i];
  }
}


function twoSum(nums, target) {
  const numsObj = new Object();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (numsObj[nums[i]]) return true;
    else numsObj[diff] = nums[i];
  }

  return false;
}


function wordPattern(pattern, strings) {
  const obj = new Object();
  const patternSet = new Set(pattern.split(''));
  const stringsSet = new Set(strings);

  if (patternSet.size < stringsSet.size) {
    return false;
  }

  for (let i = 0; i < strings.length; i++) {
    if (!obj[strings[i]]) {
      obj[strings[i]] = pattern[i];
    } else {
      if (obj[strings[i]] !== pattern[i]) {
        return false;
      }
    }
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
