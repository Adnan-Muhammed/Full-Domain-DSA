class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class QueueLinkedList{
    constructor(){
        this.front =null;
        this.rear = null;
    }

    // enqueue(value){
    //     const node = new Node(value);
    //     if(!this.front){
    //         this.front = this.rear =node;
    //         return
    //     }
    //     this.rear.next = node;
    //     this.rear = node
    // }

find(){


}
    enqueue(value){
        const node =new Node(value)
        if(!this.front){
            this.front = this.rear = node
            return
        }
        this.rear.next = node;
        this.rear = node;
    }

    dequeue(){
        if(!this.front){
            console.log('its empty');
            return 'its empty'
        }
        let enqueuedValue = this.front.value
        this.front =this.front.next
        if(!this.front){
            this.rear = null
        }
        return enqueuedValue
    }




    // dequeue(){
    //     if(!this.front){
    //         console.log('its empty');
    //         return
    //     }
    //     const dequeuedValue = this.front.value;
    //     this.front =this.front.next
    //     if(!this.front){
    //         this.rear = null;
    //     }
    //     return dequeuedValue
    // }
    

    display(){
        let queueValues=[]
        if(!this.front){
            return 'its empty'
        }
        let current = this.front;
        while(current){
            queueValues.push(current.value)
            current = current.next
        }
        return queueValues.join(' --> ')
    }
}

let queue = new QueueLinkedList()

queue.enqueue(2)
queue.enqueue(6)
queue.enqueue(4)
queue.enqueue(8)
console.log(queue.display());
// queue.dequeue()
console.log(queue.dequeue());


console.log(queue.display());
