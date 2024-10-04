class Node{
    constructor(value){
        this.value =value;
        this.next = null;
    }
}

class QueueLinkedList{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        const node = new Node(value)
        if(!this.front){
            // this.rear = node
            // this.front = this.rear;
            this.front = this.rear = node;
            return;
        }
        this.rear.next = node;
        this.rear = node;
    }

    dequeue(){
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if(!this.front){
            this.rear = null
        }
        return dequeuedValue
    }

    display(){
        let current = this.front;
        let queueValues = [];
        while(current){
            queueValues.push(current.value)
            current = current.next
        }
        return queueValues.join(' --> ')
    }
}

const queue = new QueueLinkedList();
queue.enqueue(3)
queue.enqueue(8)
queue.enqueue(2)
queue.enqueue(9)
queue.enqueue(7)

console.log(queue.display());

console.log(queue.dequeue());

console.log(queue.display());
