
class Node {
    constructor(value){
        this.value =value;
        this.next = null;
    }
}

class StackLinkedList{
    constructor(){
        this.top =null;
    }

    push(value){
        const node = new Node(value)
        if(!this.top){
            this.top = node;
            return 
        }
        node.next = this.top;
        this.top =node;
    }

    pop(){
        if(!this.top){
            console.log('its empty');
            return 
        }
        let poppedValue = this.top.value
        this.top =this.top.next
        return poppedValue
    }

    display(){
        let current = this.top;
        let stackValue = [];
        while(current){
            stackValue.push(current.value)
            current = current.next
        }
        return stackValue.join(' --> ')
    }

    reverse(){
        let reverseStack = new StackLinkedList()
        if(!this.top){
            console.log('stack is empty');
            return
        }
        while(this.top){
            reverseStack.push(this.pop())
        }
        this.top=reverseStack.top

    }
}

let stack  = new StackLinkedList()

stack.push(2)
stack.push(4)
stack.push(9)
stack.push(3)
stack.push(5)

console.log(stack.display());
// console.log(stack.pop());

stack.reverse()
console.log(stack.display());
