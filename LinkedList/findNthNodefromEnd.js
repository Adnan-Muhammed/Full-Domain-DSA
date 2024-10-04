class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.next = null;
    }


    append(value) {
        const node = new Node(value);
        if (!this.head) {
          this.head = node;
          return;
        }
    
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }

    print(){
        let current = this.head;
        let listArray=[];
        while(current){
            console.log(current.value);
            listArray.push(current.value)
            current = current.next      
        }
        return listArray
    }

    findNthFromEnd(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;
    
        // Move firstPointer n steps ahead
        for (let i = 0; i < n; i++) {
          if (!firstPointer) return null; // n is greater than the length of the list
          firstPointer = firstPointer.next;
        }
        console.log(firstPointer.value);
        
    
        // Move both pointers until firstPointer reaches the end
        while (firstPointer) {
           
            console.log('first',firstPointer.value);
            console.log('second',secondPointer.value);
            
            
            
          firstPointer = firstPointer.next;
          secondPointer = secondPointer.next;
        }
    
        return secondPointer.value; // This is the Nth node from the end
      }
    
   }

   

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.append(10);
// list.print()
console.log('-=-=-=-=-=-');


let res = list.findNthFromEnd(8)
console.log(res);
