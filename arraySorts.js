
let arr = [ 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];


let bubbleSort =(arr)=>{

    
    let swapped ;
    do{
        swapped = false;
        for(i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] =[arr[i+1],arr[i]]
                swapped =true
            }
        }
    }while(swapped)
        return arr;
}

let bubbleSorted = bubbleSort(arr.slice(0,arr.length));

console.log(bubbleSorted);

let insertionSort =(arr)=>{
    for(i=1;i<arr.length;i++){
        let j=i-1;
        let current = arr[i];
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1] =current
    }
    return arr
}

let insertionSorted = insertionSort(arr.slice(0,arr.length));

console.log(insertionSorted);



let quickSort =(arr)=>{

    if(arr.length<=1)return arr

    let pivot =arr[0];
    let left = [];
    let right =[];

    for(i=0;i<arr.length;i++){
        if(arr[i]===pivot) continue
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let quickSorted = quickSort(arr.slice())
console.log(quickSorted);


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





let mergeSort =(arr)=>{
    if(arr.length<=1)return arr

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))
}

let merge=(left,right)=>{
    let result =[];
    let leftIndex =0;
    let rightIndex =0;


    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        }else{
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return [...result,...left.slice(leftIndex),...right.slice(rightIndex)]
}

// let mergeSorted =mergeSort(arr)

// console.log(mergeSorted);




let mergeSort2 =(arr)=>{
    
    if(arr.length<=1) return arr;

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(mergeSort2(left),mergeSort2(right))
}


let merge2 =(left,right)=>{
    let result =[];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex <left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        }else{
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return [...result,...left.slice(leftIndex),...right.slice(rightIndex)]
}

let mergeResult = mergeSort2(arr)

console.log('1234', mergeResult);

