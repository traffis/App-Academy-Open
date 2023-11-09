// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let mid = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left half
  let leftSort = mergeSort(left);

  // Recursively sort the right half
  let rightSort = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSort, rightSort);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const arr = [];

  // Point to the first value of each array
  let pointerA = 0;
  let pointerB = 0;

  // While there are still values in each array...
  while (pointerA < arrA.length || pointerB < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[pointerA] < arrB[pointerB] || arrB[pointerB] === undefined) {
      arr.push(arrA[pointerA]);
      pointerA++;
    } else {
      arr.push(arrB[pointerB]);
      pointerB++;
    }
  }

  // Return the return array
  return arr;
}

module.exports = [merge, mergeSort];
