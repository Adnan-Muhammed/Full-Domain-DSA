let str = 'hello'


let replace = (string)=>{

    let str = string.split('')
    let i=0;
    while(str.length>=i){
        if(str[i]==='l'){
            console.log(str[i]);
            
            str[i] ='t'
        }
        i++;
    }
    return str.join().replace(/,/g,'')
}

let replaced = replace(str)
console.log(replaced);
