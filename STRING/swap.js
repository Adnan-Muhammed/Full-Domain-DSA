let str = "asdfghj";
// let str = "147932";

let swap = (str) => {
    let str2 = str.split(''); 
    let str3 = str2.sort();              
    return str3.join('');      
}

console.log(swap(str)); 
