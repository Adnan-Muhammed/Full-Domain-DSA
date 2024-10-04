


let str = ["welcome", "goodmorning"];





let newArr = [];
for (let i = 0; i < str.length; i++) {
  let newStr = "";
  for (let j = str[i].length-1; j >= 0; j--) {
    newStr += str[i][j];
    
}
console.log(newStr);

newArr.push(newStr);
}

console.log(newArr);
