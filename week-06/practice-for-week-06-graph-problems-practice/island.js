function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  if (row - 1 >= 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);

  // Check bottom
  if (row + 1 <= graph.length - 1 && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);

  // Check left
  if (col - 1 >= 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1]);

  // Check right
  if (col + 1 <= graph[row].length - 1 && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);

  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add(`${row},${col}`);

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    const currentNode = stack.pop();
    const row = currentNode[0];
    const col = currentNode[1];

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    getNeighbors(row, col, graph).forEach(neighbor => {
      const neighborRow = neighbor[0];
      const neighborCol = neighbor[1];

      if (!visited.has(`${neighborRow},${neighborCol}`)) {
        visited.add(`${neighborRow},${neighborCol}`);
        stack.push([neighborRow, neighborCol]);
      }
    });
  }

  return size;
}

module.exports = [getNeighbors, islandSize];
