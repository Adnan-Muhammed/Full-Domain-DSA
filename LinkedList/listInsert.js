class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head= null;
    }


    append(value){
        const node =new Node(value);
        if(!this.head){
            this.head = node;
            return node;
        }

        let current = this.head;
        while(current.next){
            current = current.next
        }
        current.next = node
    }


    preppend(value){
        const node = new Node(value);

        node.next = this.head;
        this.head = node
    }



    // insertion ascending order 
    insertOrder(value){
        const node  = new Node;

        if(!this.head){
            this.head = node;
            return;
        }

        if(this.head.value>=value){
            node.next =this.head;
            this.head= node;
            return;
        }

        let current = this.head;
        while(current.next && current.next.value<value){
            current =current.next
        }

        node.next = current.next;
        current.next = node;
    }

    reverseOrder(){
        let prev = null;
        let current = this.head;
        let next = null;

        while(current !==null){
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }
        this.head = prev
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

let list = new LinkedList;

list.append(3)
list.append(4)
list.append(6)
list.append(8)
list.preppend('1')
list.preppend('2')
list.preppend('3')

let res =  list.print()
console.log(res);
