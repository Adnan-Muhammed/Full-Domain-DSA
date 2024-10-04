let arr = [ 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];


let quickSort =(arr)=>{
    if(arr.length<=1) return arr;
    let pivot = arr[0];
    let left =[];
    let right = [];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let res = quickSort(arr)
console.log(res);
