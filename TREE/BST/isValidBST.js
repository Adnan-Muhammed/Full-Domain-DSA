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
  
    isValidBST(node = this.root,min= -Infinity , max = Infinity){

        if(node ===null){
            return true
        }

        if(node.value< min || node.value >max ){
            return false
        }

        return (
            this.isValidBST(node.left,min,node.value)&& this.isValidBST(node.right, node.value,max)
        )
    }
  }  


  

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(19);
bst.insert(4);
bst.insert(3);



preOrderResult = [];
bst.preOrder(bst.root, (value) => preOrderResult.push(value));
console.log("preOrderResult", preOrderResult);
