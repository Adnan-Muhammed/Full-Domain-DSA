
let arr= [1,1,2,4,4,1,2,3,1,4,4,1,4];

let Max =(arr)=>{
    let max =0;
    let elem;
    for(i=0;i<arr.length;i++){
        let count =0;
        for(j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
            if(count>=max){
                max =count
                elem = arr[i]
            }
        }
    }
    return {elem, max}
}


console.log(Max(arr));