class MinHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    heapifyUp(){
        let current = this.heap.length-1;
        while(current>0){
            let parent = Math.floor((current-1)/2)
                if(this.heap[current]<this.heap[parent]){
                    this.swap(current,parent)
                    current = parent
                }else{
                    break;
                }
        }
    }
    swap(current,parent){
        let temp = this.heap[current];
        this.heap[current] =this.heap[parent];
        this.heap[parent] = temp;
    }


    

extractMin(){
    let smallest = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return smallest
}
heapifyDown(){
    let current =0;
    while(true){
        let leftChild = 2* current+1;
        let rightChild =2* current +2;
        let smallest  = current

        if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
            smallest =leftChild
        }
        if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
            smallest = rightChild
        }
        if(smallest !==current){
            this.swap(current,smallest)
            smallest = current
        }else{
            break;
        }
    }
}


    




}

let minHeap = new MinHeap()

minHeap.insert(3)
minHeap.insert(7)
minHeap.insert(2)
minHeap.insert(6)
minHeap.insert(5)

console.log(minHeap.heap);

console.log(minHeap.extractMin());
console.log(minHeap.heap);





