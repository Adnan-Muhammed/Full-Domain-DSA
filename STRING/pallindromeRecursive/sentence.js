let sentence = "madam im adam";

let isPallindrome = (sentence) => {
    

  let cleanedSentence = sentence.toLowerCase().replace(/\s+/g,"");
  let left = 0;
  let right = cleanedSentence.length-1
//   while(left<=right){
    if(cleanedSentence.length<=1) return true
    if(cleanedSentence[left] !== cleanedSentence[right]){
        return false
    }
    // left++;
    // right--;
//   }
//   return sentence
  
  return isPallindrome(cleanedSentence.substring(1,cleanedSentence.length-1))


};



if(isPallindrome(sentence)){
    console.log(true);
    console.log(isPallindrome(sentence));
}else{
    console.log(false,11);
    console.log(isPallindrome(sentence));
}