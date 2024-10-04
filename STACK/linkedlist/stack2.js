class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList{
    constructor(){
        this.top = null;
    }

    push(value){
        const node = new Node(value)
        if(!this.top){
            this.top = node;
            return 
        }
        node.next = this.top;
        this.top = node;
    }
    pop(){
        if(!this.top){
            return 'its empty'
        }
        const poppedValue = this.top.value
        this.top =this.top.next
        return poppedValue
    }

    display(){
        if(!this.top){
            return 'its empty'
        }
        let stackValues = [];
        let current = this.top;
        while(current){
            stackValues.push(current.value)
            current = current.next;
        }
        return stackValues
    }
}

const stack  = new StackLinkedList();

stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)


console.log(stack.pop());

console.log(stack.display());
