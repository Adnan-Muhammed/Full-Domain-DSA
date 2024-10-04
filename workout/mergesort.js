let arr = [6, 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];

let mergeSort = (arr)=>  {


  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right))
};








let merge = (left,right)=>{

    let result =[];
    let leftIndex=0;
    let rightIndex =0;

    while(leftIndex<left.length && rightIndex<right.length){

        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        }else{
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];



}


let result = mergeSort(arr)

console.log(result);


// let arr = [6, 8, 3, 2, 7, 6, 1, 9, 5, 10, 4];

// let mergeSort = function(arr)  {

//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// };

// let merge = function(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);  // Fixed typo here
//             rightIndex++;
//         }
//     }

//     return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
// }

// let result = mergeSort(arr);

// console.log(result);  // Output will be a sorted array

