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
      if (node.left == null) {
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

  preOrder(node, callBack) {
    if (node !== null) {
      callBack(node.value);
      this.preOrder(node.left, callBack);
      this.preOrder(node.right, callBack);
    }
  }

  inOrder(node, callBack) {
    if (node !== null) {
      this.inOrder(node.left, callBack);
      callBack(node.value);
      this.inOrder(node.right, callBack);
    }
  }
  postOrder(node, callBack) {
    if (node !== null) {
      this.postOrder(node.left, callBack);
      this.postOrder(node.right, callBack);
      callBack(node.value);
    }
  }



// getHeight(node) {
//   if (node === null) {
//       return -1;
//   }
//   const leftHeight = this.getHeight(node.left);
//   const rightHeight = this.getHeight(node.right);
//   return Math.max(leftHeight, rightHeight) +1;
// }

getHeight(node){
  if(node ===null) return -1;

  const leftHeight = this.getHeight(node.left)
  const rightHeight = this.getHeight(node.right)
  return Math.max(leftHeight,rightHeight)+1
}







isBalanced(node) {
  if (node === null) {
      return true;
  }

  const leftHeight = this.getHeight(node.left);
  const rightHeight = this.getHeight(node.right);

  if (Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) {
      return true;
  }
  return false;
}

// findMaxNode(node){
//   if(node.right ===null){
//     return node.value
//   }
//   this.findMaxNode(node.right)
// }

findMaxNode(node) {
  if (node === null) return null; 

  // Traverse to the rightmost node
  while (node.right !== null) {
    node = node.right;
  }
  return node.value; // Return the maximum value found
}



}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(19);
bst.insert(4);
bst.insert(3);


preOrderResult = [];
inOrderResult = [];
postOrderResult = [];
bst.preOrder(bst.root, (value) => preOrderResult.push(value));
bst.inOrder(bst.root, (value) => inOrderResult.push(value));
bst.postOrder(bst.root, (value) => postOrderResult.push(value));

console.log("preOrderResult", preOrderResult);
console.log("inOrderResult", inOrderResult);
console.log("postOrderResult", postOrderResult);



let maxNode = bst.findMaxNode(bst.root)
// console.log(maxNode.value);



let heightofTree  = bst.getHeight(bst.root)
console.log(heightofTree);

let isBalancedTree = bst.isBalanced(bst.root)
// console.log(isBalancedTree);
