let arr = [ 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];


let bubbleSort = (arr)=>{
    let swapped;
    do{
        swapped =false;
        for(i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1] ]=[arr[i+1],arr[i]]
                swapped =true
            }
        }
    }
    while(swapped)
        return arr
}

let res = bubbleSort(arr)
console.log(res);
