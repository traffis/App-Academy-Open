function selectionSort(arr) {

  // Copy the original array
  let arrCopy = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arrCopy.length > 0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIdx = 0;
    for (let i = 0; i < arrCopy.length; i++) {
      minIdx = arrCopy[i] < arrCopy[minIdx] ? i : minIdx;
    }

    // Save and remove the value at the min index
    let value = arrCopy.splice(minIdx, 1)[0];

    // Add the min value to the end of the sorted array
    sorted.push(value);
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIdx = divider;
    for (let i = divider; i < arr.length; i++) {
      minIdx = arr[i] < arr[minIdx] ? i : minIdx;
    }

    // Shift every unsorted value to the left of the min value to the right by 1,
    // and put min value at divider
    for (let i = minIdx; i > divider; i--) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }

    // Increment the divider and repeat
    divider++;
  }
}


module.exports = [selectionSort, selectionSortInPlace];
