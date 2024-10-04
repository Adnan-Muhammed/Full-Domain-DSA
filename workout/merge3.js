let arr = [ 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];



let mergeSort = (arr)=>{

    if(arr.length<=1) return arr;

    let mid = Math.floor(arr.length/2)
    let left =arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))
}

let merge =(left,right)=>{
    let result = [];
    let leftIndex = 0;
    let rightIndex =0;

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]< right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        }else{
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex) ]
}

let res = mergeSort(arr);

console.log(res);
