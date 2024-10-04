let sentence = "madam im adam";

let isPallindrome = (sentence) => {

  let cleanedSentence = sentence.toLowerCase().replace(/\s+/g, "");
  let reversedSentence = cleanedSentence.split('').reverse().join('')

  
  return cleanedSentence === reversedSentence;
};

if(isPallindrome(sentence)){
    console.log(true);
    
}else{
    console.log(false);
}