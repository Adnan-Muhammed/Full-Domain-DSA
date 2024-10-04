let str ="hello world"

let reverse =(str)=>{

    let reversedStr =str[str.length-1]
    if(str.length==1) return reversedStr;

    return reversedStr + reverse(str.substring(0,str.length-1))
}
let reversedStr = reverse(str)
console.log(reversedStr);
