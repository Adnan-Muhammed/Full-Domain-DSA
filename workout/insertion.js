let arr = [ 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];

let insertionSort =(arr)=>{
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let current = arr[i];
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] =current
    }
    return arr
}

let res = insertionSort(arr)
console.log(res);
