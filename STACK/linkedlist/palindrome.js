
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

    isPallindrome(){
        let stackValues = [];
        let current =this.top;
        while(current){
            stackValues.push(current.value)
            current = current.next
        }
        let reversedValues = [...stackValues].reverse()
        return JSON.stringify(stackValues) === JSON.stringify(reversedValues);
        
        
    }
    

    

}

let stack  = new StackLinkedList()
stack.push(3)
stack.push(2)
stack.push(4)
stack.push(2)
stack.push(3);
stack.push(5);

console.log(stack.display());
console.log(stack.pop());
console.log(stack.isPallindrome());

console.log(stack.display());
