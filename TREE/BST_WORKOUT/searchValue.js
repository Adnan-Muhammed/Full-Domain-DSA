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

  search(node, value) {
    if (node == null) return false;
    if (node.value === value){
        console.log(value);
        
        return true;
    } 
    if (value < node.value) {
      return this.search(node.left, value);
    } else {
      return this.search(node.right, value);
    }
  }
}

const bst = new BinarySearchTree()

bst.insert(18)
bst.insert(62)
bst.insert(7)
bst.insert(12)
bst.insert(3)

let valueExists =  bst.search(bst.root,32)
console.log(valueExists);
