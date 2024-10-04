class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    append(value){
        const node =new Node(value)
        if(!this.head){
            this.head = node
            return
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node

        
    }

    display(){
        let current =this.head;
        
        while(current){
            console.log(current.value);
            current = current.next
        }
    }

    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;

        while(current){
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

let list = new LinkedList()

list.append(2)
list.append(5)
list.append(7)

list.display()
list.reverse()
console.log('after reverse');

list.display()