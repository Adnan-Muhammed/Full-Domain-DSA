let arrOfStr = [
  "madam",
  "hello",
  "racecar",
  "world",
  "level",
  "notapalindrome",
];


let isPallindrome =(word)=>{
    if(word.length<=1) return word

    if(word[0]!==word[word.length-1]){
        return false
    }
    return isPallindrome(word.substring(1,word.length-1))
}




// /////////////////////////////////////////////////////////////////////
// let pallindromes = arrOfStr.filter(word=>isPallindrome(word))     ///
// console.log(pallindromes);                                        ///
// /////////////////////////////////////////////////////////////////////


// //////////////////////////////////////
// arrOfStr.forEach((word)=>{        ////
//     if (isPallindrome(word)) {    ////
//         console.log(word);        ////
//                                   ////
//     }                             ////
// })                                ////
// //////////////////////////////////////


