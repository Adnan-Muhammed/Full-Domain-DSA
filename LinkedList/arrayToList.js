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

    arrayToList(array){
        for(let value of array){
            this.append(value)
        }
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

   }

   

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
// list.append(6);
// list.append(7);
// list.append(8);
// list.append(9);
// list.append(10);

let arr=[11,12,13,14,15]

list.arrayToList(arr)


list.print()