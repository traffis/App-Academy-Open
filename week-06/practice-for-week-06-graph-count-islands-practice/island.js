function getNeighbors(row, col, matrix) {
  const neighbors = [];

  // Check top
  if (row - 1 >= 0 && matrix[row - 1][col] === 1)
    neighbors.push([row - 1, col]);

  // Check top right
  if (row - 1 >= 0
      && col + 1 < matrix[row].length
      && matrix[row - 1][col + 1] === 1)
    neighbors.push([row - 1, col + 1]);

  // Check right
  if (col + 1 < matrix[row].length && matrix[row][col + 1] === 1)
    neighbors.push([row, col + 1]);

  // Check bottom right
  if (col + 1 < matrix[row].length
      && row + 1 < matrix.length
      && matrix[row + 1][col + 1] === 1)
    neighbors.push([row + 1, col + 1]);

  // Check bottom
  if (row + 1 < matrix.length && matrix[row + 1][col] === 1)
    neighbors.push([row + 1, col]);

  // Check bottom left
  if (row + 1 < matrix.length
      && col - 1 >= 0
      && matrix[row + 1][col - 1] === 1)
    neighbors.push([row + 1, col - 1]);

  // Check left
  if (col - 1 >= 0 && matrix[row][col - 1] === 1)
    neighbors.push([row, col - 1]);

  // Check top left
  if (col - 1 >= 0
      && row - 1 >= 0
      && matrix[row - 1][col - 1] === 1)
    neighbors.push([row - 1, col - 1]);

  return neighbors;
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited,
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  const visited = new Set();
  let count = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1 && !visited.has(`${row},${col}`)) {
        count++;

        const stack = [[row, col]];
        visited.add(`${row}.${col}`);

        while (stack.length > 0) {
          const currentNode = stack.pop();
          const currentNodeRow = currentNode[0];
          const currentNodeCol = currentNode[1];

          getNeighbors(currentNodeRow, currentNodeCol, matrix).forEach(neighbor => {
            const neighborRow = neighbor[0];
            const neighborCol = neighbor[1];

            if (!visited.has(`${neighborRow},${neighborCol}`)) {
              visited.add(`${neighborRow},${neighborCol}`);
              stack.push(neighbor);
            }
          });
        }
      }
    }
  }
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
