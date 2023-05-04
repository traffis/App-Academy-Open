function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (typeof n !== 'number') {
    throw new TypeError('n is not a number, please input a number')
  } else if (n < 1 || n > 1000000) {
    throw new TypeError('n is out of range, please use a number between 1 and 1000000');
  }

  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
