function myMap(inputArray, callback) {
  if (!Array.isArray(inputArray)) {
    throw new TypeError('Please input an array');
  }

  const newArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const el = inputArray[i];
    newArray.push(callback(el));
  }

  return newArray;
}

module.exports = myMap;
