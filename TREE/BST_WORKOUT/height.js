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

  preOrder(node, callBack) {
    if (node !== null) {
      callBack(node.value);
      this.preOrder(node.left, callBack);
      this.preOrder(node.right, callBack);
    }
  }

  heightOfTree (node){
    if(!node)  return -1
    let leftHeight = this.heightOfTree(node.left)
    let rightHeight = this.heightOfTree(node.right)

    return Math.max(leftHeight,rightHeight)+1
  }
}

const bst = new BinarySearchTree()

bst.insert(4)
bst.insert(7)
bst.insert(18)
bst.insert(3)
bst.insert(6)

console.log(bst.heightOfTree(bst.root));

