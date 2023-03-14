/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
// create a blank array so it doesn't reset
// create a helper function with array as argument
// write for loop
//  if element is an array, recurse with helper function
//  else push the element into the blank array
function flatten(array) {
  let flattened = [];

  /* function helper(array) {
    for (let i = 0; i < array.length; i++) {
      let el = array[i]

      if (Array.isArray(el)) {
        helper(el);
      } else {
        flattened.push(el);
      }
    }
  }

  helper(array); */

  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    if (Array.isArray(el)) {
      flattened = flattened.concat(flatten(el));
    } else {
      flattened.push(el);
    }
  }

  return flattened;
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
