class MaxHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp(){
        let current = this.heap.length-1;
        while(current>0){
            let parent =Math.floor((current-1)/2);
            if(this.heap[current]>this.heap[parent]){
                this.swap(current,parent)
                current = parent
            }else{
                break;
            }
        }
    }
    swap(current,parent){
        let temp = this.heap[current];
        this.heap[current] = this.heap[parent]
        this.heap[parent] = temp
    }




    
    extractMax(){
        let largestValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return largestValue
    }
    heapifyDown(){
        let current = 0;
        while(true){
            let leftChild = 2 *current+1;
            let rightChild =2* current+2;
            let largest = current;

            if(leftChild< this.heap.length && this.heap[leftChild]>this.heap[largest]){
                largest = leftChild
            }
            if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[largest]){
                largest = rightChild
            }

            if(largest !== current){
                this.swap(current,largest);
                current = largest;
            }else{
                break;
            }
        }
    }






}

let maxHeap = new MaxHeap()

maxHeap.insert(2)
maxHeap.insert(5)
maxHeap.insert(8)
maxHeap.insert(4)
maxHeap.insert(9)
maxHeap.insert(3)

console.log(maxHeap.heap);
console.log(maxHeap.extractMax());
console.log(maxHeap.heap);

