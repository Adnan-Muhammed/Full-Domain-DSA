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
  insert( value) {
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


  isValid (node = this.root,min= -Infinity,max =Infinity ){
    if(!node) return true 
    if(node.value < min  ||  node.value >max){
        return false;
    }
    return (this.isValid(node.left,min,node.value) && this.isValid(node.right,node.value,max))
  }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(1);

let preOrderResult = [];

bst.preOrder(bst.root, (value) => preOrderResult.push(value));

console.log(preOrderResult);


console.log(bst.isValid());


