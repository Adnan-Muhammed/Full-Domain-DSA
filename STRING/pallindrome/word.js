let str = 'madam';

let isPallindrome =(str)=>{

    let left = 0;
    let right = str.length-1;


    if(str.length<=1)return true

    while(left<=right){    //
        if(str[left] !== str[right]){
            return false;
        }
        left++;           //
        right --;         //
    }                     //
    return true;          //

    // 
    //  //return isPallindrome(str.substring(1,str.length-1))
}

let res = isPallindrome(str)
console.log(res);
