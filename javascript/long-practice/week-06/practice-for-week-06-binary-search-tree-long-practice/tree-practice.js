const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let minNode = rootNode;
  let currentNodeLeft = rootNode.left;

  while (currentNodeLeft) {
    if (currentNodeLeft.val < minNode.val) minNode = currentNodeLeft;
    currentNodeLeft = currentNodeLeft.left;
  }

  return minNode.val;
}

function findMaxBST (rootNode) {
  let maxNode = rootNode;
  let currentNodeRight = rootNode.right;

  while (currentNodeRight) {
    if (currentNodeRight.val > maxNode.val) maxNode = currentNodeRight;
    currentNodeRight = currentNodeRight.right;
  }

  return maxNode.val;
}

function findMinBT (rootNode) {
  if (rootNode === null) return;

  let minValue = rootNode.val;
  let leftMinValue = findMinBT(rootNode.left);
  let rightMinValue = findMinBT(rootNode.right);

  if (leftMinValue < minValue) minValue = leftMinValue;
  if (rightMinValue < minValue) minValue = rightMinValue;

  return minValue;
}

function findMaxBT (rootNode) {
  if (rootNode === null) return;

  let maxValue = rootNode.val;
  let leftMaxValue = findMaxBT(rootNode.left);
  let rightMaxValue = findMaxBT(rootNode.right);

  if (leftMaxValue > maxValue) maxValue = leftMaxValue;
  if (rightMaxValue > maxValue) maxValue = rightMaxValue;

  return maxValue;
}

function getHeight (rootNode) {
  if (rootNode === null) return -1;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

function countNodes (rootNode) {
  if (rootNode === null) return 0;
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function balancedTree (rootNode) {
  const queue = [rootNode];

  while (queue.length > 0) {
    let node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    let diff = Math.abs(getHeight(node.left) - getHeight(node.right));
    if (diff > 1) return false;
  }

  return true;
}

function getParentNode (rootNode, target) {
  if (rootNode.val === target) return null;

  const queue = [rootNode]

  while (queue.length > 0) {
    let removed = queue.shift();

    if (removed.left) {
      if (removed.left.val === target) return removed;
      queue.push(removed.left);
    }

    if (removed.right) {
      if (removed.right.val === target) return removed;
      queue.push(removed.right);
    }
  }

  return undefined;
}

function inOrderPredecessor (rootNode, target) {
  if (!rootNode) return null;

  const stack = [];
  let currentNode = rootNode;
  let prevNode = null;

  while (true) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else if (stack.length > 0) {
      currentNode = stack.pop();

      if (target === currentNode.val && prevNode === null) return null;
      if (target === currentNode.val) return prevNode.val;

      prevNode = currentNode;
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let node, parent;
  let found = findNode(rootNode, target);

  // Undefined if the target cannot be found
  // Set target based on parent
  if (found) {
    node = found[0];
    parent = found[1];
  } else {
    return undefined
  }

  if (node){
    if (!node.left && !node.right && !parent) {
      // Case 0: Zero children and no parent:
      // return null

      return null;
    } else if (!node.left && !node.right && parent) {
      // Case 1: Zero children:
      //   Set the parent that points to it to null

      parent.val > node.val ? parent.left = null : parent.right = null;
    } else if (node.left && node.right) {
      // Case 2: Two children:
      //  Set the value to its in-order predecessor, then delete the predecessor
      //  Replace target node with the left most child on its right side,
      //  or the right most child on its left side.
      //  Then delete the child that it was replaced with.

      let val = inOrderPredecessor(rootNode, target);
      deleteNodeBST(rootNode, val);
      node.val = val;
    } else if (node.left && !node.right) {
      // Case 3: One child:
      // Make the parent point to the child

      parent.val > node.val ? parent.left = node.left : parent.right = node.left;
    } else if (!node.left && node.right) {
      // Still Case 3

      parent.val > node.val ? parent.left = node.right : parent.right = node.right;
    }
  }

}

const findNode = function (rootNode, val, prev = null) {
  if (!rootNode) {
    return null;
  } else if (rootNode.val === val) {
    return [rootNode, prev];
  } else if (rootNode.val > val) {
    return findNode(rootNode.left, val, rootNode);
  } else {
    return findNode(rootNode.right, val, rootNode);
  }
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
