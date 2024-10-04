

let arr = [ 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];

let selectionSort =(arr)=>{
    for(i=0;i<arr.length;i++){
        let minIndex = i;
        for(j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }

        if(minIndex !==i){
            [arr[minIndex],arr[i]]=[arr[i],arr[minIndex] ]
        }
    }
    return arr
}

let selectionSorted = selectionSort(arr);
console.log(selectionSorted);