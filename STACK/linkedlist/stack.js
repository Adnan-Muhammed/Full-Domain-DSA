const { clearScreenDown } = require("readline");

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList{
    constructor(){
        this.top =null;
    }

    push(value){
        const node = new Node(value);
        if(!this.top){
            this.top=node;
            return;
        }
        node.next =this.top;
        this.top =node;
    }

    pop(){
        let poppedValue ;
        if(!this.top){
            return 'its empty'
        }
        poppedValue =this.top.value;
        this.top =this.top.next;
        return poppedValue;
    }

    peek(){
        if(!this.top){
            return null;
        }
        return this.top.value
    }

    display(){
        let stackValues = [];
        if(!this.top){
            return 'its empty'
        }
        let current = this.top;
        while(current){
            stackValues.push(current.value)
            current = current.next
        }
        return stackValues.join(' -> ')
    }
}

let stack = new StackLinkedList();

stack.push(3)
stack.push(4)
stack.push(1)
stack.push(6)

// console.log(stack.pop());

// console.log(stack.peek());

console.log(stack.display());


