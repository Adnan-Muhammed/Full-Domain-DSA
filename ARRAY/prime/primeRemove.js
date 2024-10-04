
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let isPrime =(value)=>{
    if(value<=1)return false

    for(let i=2;i<=Math.sqrt(value);i++){
        if(value% i ===0){
            return false
        }
    }
    return true
}

let primeRemove =(arr)=>{
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            arr.splice(i,1)
            i--;
        }
    }
    return arr
}

let res = primeRemove(arr);
console.log(res);

