let strArr = ["welcome", "goodmorning"];

let newStr = strArr
  .map((str) => {
    return str.split("").reverse().join("");
  })
  .reverse();

console.log(newStr);
