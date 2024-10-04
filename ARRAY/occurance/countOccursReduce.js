let arr = [1, 1, 2, 1, 2, 3, 1, 4, 9, 4, 1, 4];


let arr2 = arr.reduce((acc,elem)=>{
     acc[elem] =(acc[elem] ||0)+1
     return acc
},{})

console.log(arr2);


