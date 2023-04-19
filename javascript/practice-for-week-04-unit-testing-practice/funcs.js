function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') {
    throw new Error();
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

function myRange(min, max, step = 1) {
  let arr = [];

  if (max < min) {
    return arr;
  }

  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }

  return arr;
}


module.exports = { isFive, isOdd, myRange };
