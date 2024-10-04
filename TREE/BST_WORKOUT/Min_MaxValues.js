class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertChildNode(this.root, newNode);
    }
  }

  insertChildNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertChildNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertChildNode(node.right, newNode);
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(18);
bst.insert(62);
bst.insert(7);
bst.insert(12);
bst.insert(3);







function findMin(node) {
  if (!node) return null;
  while (node.left) {
    node = node.left;
  }
  return node.value;
}

function findMax(node) {
  if (!node) return null;
  while (node.right) {
    node = node.right;
  }
  return node.value;
}

let minValue = findMin(bst.root);
let maxValue = findMax(bst.root);

console.log("minValue", minValue);
console.log("maxValue", maxValue);
