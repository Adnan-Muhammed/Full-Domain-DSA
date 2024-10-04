let sentence = "madam im adam";

let isPallindrome = (sentence) => {
    

  let cleanedSentence = sentence.toLowerCase().replace(/\s+/g, "");
  let left = 0;
  let right = cleanedSentence.length-1
  while(left<=right){
    if(cleanedSentence[left] !== cleanedSentence[right]){
        return false
    }
    left++;
    right--;
  }
  return sentence

};



if(isPallindrome(sentence)){
    console.log(true);
    console.log(isPallindrome(sentence));
}else{
    console.log(false);
    console.log(isPallindrome(sentence));
}