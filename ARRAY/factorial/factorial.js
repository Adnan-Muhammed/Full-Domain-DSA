

let factorial =(n)=>{
    if(n<=1) return  true

    return n* factorial(n-1)
}

let res = factorial(5)
console.log(res);
