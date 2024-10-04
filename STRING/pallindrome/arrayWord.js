let arrOfStr = ["madam", "hello", "racecar", "world", "level", "notapalindrome"];

let isPallindrome =(word)=>{
    let left =0;
    let right  =word.length-1;

    while(left<=right){
        if(word[left]!==word[right]){
            return false;
        }
        left++;
        right--;
    }
    return true
}


/////////////////////////////////////////////////////
let pallindromeArr = arrOfStr.filter((word)=>{   ////
    if(isPallindrome(word)){                     ////
        return word                              ////
    }                                            ////
})                                               ////
console.log(pallindromeArr);                     ////
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
arrOfStr.forEach((word)=>{
    if(isPallindrome(word)){
        console.log(word);
    }
})
//////////////////////////////////////////////////////
