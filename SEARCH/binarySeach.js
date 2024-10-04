let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let binarySearch =(arr,target)=>{

    let left =arr[0];
    let right = arr[arr.length-1];


    while(left<=right){
        // console.log(right);
        let mid =Math.floor((left+right)/2)
        

        if(arr[mid]===target){
            return mid;
        }

        if(arr[mid]<target){
            left = mid+1
        }
        else{
            right =mid-1
        }
    }
    
    return 'no data'



}

let res = binarySearch(arr,7);
console.log(res);
