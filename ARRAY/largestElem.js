

let arr=[1,2,9,5,7,4,11,8];

let largestElem =(arr)=>{
   let largest =arr[0];
   let secondLargest =arr[0]
   for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest =largest
        largest = arr[i]
    }
    if(arr[i]>secondLargest && arr[i] !== largest){
        secondLargest = arr[i]
    }
   }
   
   return {largest,secondLargest}
}
console.log(largestElem(arr));

