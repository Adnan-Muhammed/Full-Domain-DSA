

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let binaryRecursiveSearch = (arr,target,left,right)=>{


    while(left<=right){

        let mid = Math.floor((left+right)/2)
        if(arr[mid]===target){
            return {target,index:mid};
        }
        if(arr[mid]<target){
            return binaryRecursiveSearch(arr,target, mid+1,arr.length-1)
        }else{
            return binaryRecursiveSearch(arr,target,0,mid-1)
        }
    }
    return 'target not found'

}

let res =  binaryRecursiveSearch(arr,target = 7,  left = 0, right = arr.length-1)

console.log(res);
