
function bubbleSort(arr) {
  let swapped = false;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {

    // If the current value is greater than its neighbor to the right
    if (arr[i] > arr[i + 1]) {

      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

      // Do not move this console.log
      console.log(arr.join(","));

      swapped = true;
    }
  }

  // If you get to the end of the array and swaps have occurred, repeat
  if (swapped) {
    bubbleSort(arr);
  }
  // Otherwise, return
  return arr;
}

module.exports = bubbleSort;
