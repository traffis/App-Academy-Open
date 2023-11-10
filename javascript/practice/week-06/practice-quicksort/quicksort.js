function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  let pivotValue = arr[0];

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivotValue ? left.push(arr[i]) : right.push(arr[i]);
  }

  // Recursively sort the left
  let quicksortLeft = quicksort(left);

  // Recursively sort the right
  let quicksortRight = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...quicksortLeft, pivotValue, ...quicksortRight];
}


module.exports = [quicksort];
