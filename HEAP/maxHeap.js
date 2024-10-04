class MaxHeap{
    constructor(){
        this.heap =[]
    }

    insert(value){
        this.heap.push(value)
        this.heapify()
    }

    heapify(){
        let current = this.heap.length-1
        while(current>0){
            let parent = Math.floor((current-1)/2)
            if(this.heap[current]>this.heap[parent]){
                this.swap(current,parent)
                current = parent;
            }else{
                break;
            }
        }
    }
    swap(current,parent){
        let temp = this.heap[current];
        this.heap[current]= this.heap[parent]
        this.heap[parent] = temp
    }
}

const maxHeap = new MaxHeap()

maxHeap.insert(9)
maxHeap.insert(10)
maxHeap.insert(5)
maxHeap.insert(3)
maxHeap.insert(6)

console.log(maxHeap.heap);
