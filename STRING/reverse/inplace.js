

let strArr = ["welcome", "goodmorning","friends"];

for(let i=0;i<strArr.length;i++){    // both are same

    strArr[i]=strArr[i].split('').reverse().join('');
    
}
strArr.reverse()

console.log(strArr); // [ 'sdneirf' ,  'gninromdoog' , 'emoclew' ]
