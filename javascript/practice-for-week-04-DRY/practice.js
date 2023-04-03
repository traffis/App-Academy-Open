function isFirstNumBigger(num1, num2) {
  if (num1 > num2) {
    return true;
  }

  return false;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;

  if (isFirstNumBigger(num1, num2)) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }

  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum;

  if (isFirstNumBigger(num1, num2)) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum;

  if (isFirstNumBigger(sum1, sum2)) {
    bigNum = sum1;
  } else {
    bigNum = sum2;
  }

  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;

  if (isFirstNumBigger(weight1, weight2)) {
    smallDog = weight2;
  } else {
    smallDog = weight1;
  }

  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};