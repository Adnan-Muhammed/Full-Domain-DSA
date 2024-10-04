let arr = [1, 1, 2, 1, 2, 3, 1, 4, 9, 4, 1, 4];

let unique =(arr)=>{
    let count={};


    arr.forEach((elem)=>{
        count[elem]=
        (count[elem]||0)+1
    })
    // return count




    let unique={}
    for(let key in count){
        if(count[key]===1){
            unique[key]= count[key]
        }
    }

    return unique
}
console.log(unique(arr));

