// ============> file to validate a whether a tree is valid bst or not <====================== //

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class Binary {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const node = new Node(value);
      if (this.root === null) {
        this.root = node;
        return;
      }
      let current = this.root;
      while (true) {
        if (value <= current.value) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
    // isBST() {
    //   let prev = -Infinity;
    //   let valid = true;


    //   function isValid(node) {
    //     if (node !== null && valid) {
    //       isValid(node.left);
       
    //       prev = node.value;
    //       isValid(node.right);
    //     }
    //   }

    //   isValid(this.root);
    //   return valid;
    // }

    isBST(node=this.root, min = -Infinity, max = Infinity){
        if(node === null){
            return true
        }
        if(node.value<=min  || node.value >=max){
            return false;
        }

        return(this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max))
    }



  }
  const binary = new Binary();
  binary.insert(5);
  binary.insert(3);
  binary.insert(10);
  binary.insert(1);
  binary.insert(11);
  console.log(binary.isBST());