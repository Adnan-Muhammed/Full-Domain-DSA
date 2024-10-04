
let str ="hello world"

let reverse =(str,elem=1)=>{
    if(str.length>=elem){
        let letter = str[str.length-elem]
        return letter + reverse(str,elem+1)
    }
    return ''
}
let reversedStr = reverse(str)

console.log(reversedStr);
