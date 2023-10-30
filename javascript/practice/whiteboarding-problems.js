function logBetween(lowNum, highNum) {
  let array = [];

  for (let i = lowNum; i <= highNum; i++) {
    array.push(i);
  }

  return array;
}

console.log("logBetween:")
console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]
console.log("---------------------")

/****************************************************************/

function logBetweenStepper(min, max, step) {
  let array = [];

  for (let i = min; i <= max; i += step) {
    array.push(i);
  }

  return array;
}

console.log("logbetweenStepper:")
console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]
console.log("---------------------")

/****************************************************************/

function printReverse(min, max) {
  let array = [];

  for (let i = max - 1; i > min; i--) {
    array.push(i);
  }

  return array;
}

console.log("printReverse:")
console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]
console.log("---------------------")

/****************************************************************/

function fizzBuzz(max) {
  let array = [];

  for (let i = 0; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      array.push(i);
    }
  }

  return array;
}

console.log("fizzBuzz:")
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]
console.log("---------------------")

/****************************************************************/

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("isPrime:");
console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true
console.log("---------------------")

/****************************************************************/

function maxValue(array) {
  if (array.length === 0) {
    return null;
  }

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log("maxValue:");
console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43
console.log("---------------------")

/****************************************************************/

function myIndexOf(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log("myIndexOf:");
console.log(myIndexOf([1,2,3,4],4)); // => 3)
console.log(myIndexOf([5,6,7,8],2)); // => -1)
console.log("---------------------")

/****************************************************************/

function factorArray(array, number) {

}

/****************************************************************/

function oddRange(end) {

}

/****************************************************************/

function reverseHyphenString(string) {

}

/****************************************************************/

function intersect(arr1, arr2) {

}

/****************************************************************/

function mirrorArray(array) {

}

/****************************************************************/

function abbreviate(sentence) {

}

/****************************************************************/

function adults(people) {

}

/****************************************************************/

function countScores(people) {

}

/****************************************************************/

function firstNPrimes(n) {

}

/****************************************************************/

function peakFinder(array) {

}

/****************************************************************/

function divisibleByThreePairSum(array) {

}

/****************************************************************/

function zipArray(arr1, arr2) {

}

/****************************************************************/

function twoDimensionalTotal(array) {

}

/****************************************************************/

function countInnerElement(arr) {

}

/****************************************************************/

function twoDiff(array) {

}

/****************************************************************/

function arrayDiff(arr1, arr2) {

}

/****************************************************************/

function valueCounter(obj, val) {

}

/****************************************************************/

function elementCount(array) {

}

/****************************************************************/

function nextTwoPrimes(num) {

}

/****************************************************************/

function pairProduct(arr, num) {

}

/****************************************************************/

function twoDimensionalSize(array) {

}

/****************************************************************/

function longWordCount(string) {

}

/****************************************************************/

function factorial(n) {

}

/****************************************************************/

function lcm(num1, num2) {

}

/****************************************************************/

function hipsterfyWord(word) {

}

/****************************************************************/

function hipsterfy(sentence) {

}

/****************************************************************/

function objectToString(count) {

}

/****************************************************************/

function shortestWord(sentence) {

}

/****************************************************************/

function greatestCommonFactor(num1, num2) {

}

/****************************************************************/

function isPassing(assessments) {

}

/****************************************************************/

function valueConcat(array, obj) {

}

/****************************************************************/

function threeInARow(arr) {

}

/****************************************************************/

function variableNameify(words) {

}

/****************************************************************/

function threeIncreasing(arr) {

}

/****************************************************************/

function reverse2D(array) {

}

/****************************************************************/

function reverb(word) {

}

/****************************************************************/

function countRepeats(string) {

}

/****************************************************************/

function pairsToString(arr) {

}

/****************************************************************/

function countAdjacentSums(arr, n) {

}

/****************************************************************/

function signFlipCount(nums) {

}

/****************************************************************/

function powerSequence(base, length) {

}

/****************************************************************/

function collapseString(str) {

}

/****************************************************************/

function oddWordsOut(sentence) {

}

/****************************************************************/

function mindPsAndQs(str) {

}

/****************************************************************/

function commonFactors(num1, num2) {

}

/****************************************************************/

function commonPrimeFactors(num1, num2) {

}

/****************************************************************/

function splitHalfArray(array) {

}

/****************************************************************/

function threeUniqueVowels(string) {

}

/****************************************************************/

function vowelShift(sentence) {

}

/****************************************************************/

function hasSymmetry(array) {

}

/****************************************************************/

function evenSumArray(array) {

}

/****************************************************************/

function numsToWords(numString) {

}

/****************************************************************/

function moreDotLessDash(str) {

}
