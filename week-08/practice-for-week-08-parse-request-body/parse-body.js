function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map(data => data.split("="));
}

function thirdStep(input) {
  return input.map(data =>
    [data[0].replace("+", " "), data[1].replace("+", " ")]
  );
}

function fourthStep(input) {
  return input.map(data =>
    [decodeURIComponent(data[0]), decodeURIComponent(data[1])]
  );
}

function fifthStep(input) {
  return input.reduce((accumulator, current) => {
    let key = current[0];
    let value = current[1];

    accumulator[key] = value;
    return accumulator;
  }, {});
}

function parseBody(str) {
  if (str.length < 1) {
    return {};
  }

  let result = firstStep(str);
  result = secondStep(result);
  result = thirdStep(result);
  result = fourthStep(result);
  return fifthStep(result);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
