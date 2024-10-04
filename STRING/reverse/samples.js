// Code 1: Reverse each string in place
let strArr1 = ["welcome", "goodmorning"];

for (let i = 0; i < strArr1.length; i++) {
  // Convert each string into an array of characters, reverse it, and join it back
  strArr1[i] = strArr1[i].split('').reverse().join('');
}

console.log(strArr1);  // Output: [ 'emoclew', 'gninromdoog' ]





// Code 2: Reverse each string and then reverse the array
let strArr2 = ["welcome", "goodmorning"];

// Step 1: Reverse each string in place
for (let i = 0; i < strArr2.length; i++) {
  strArr2[i] = strArr2[i].split('').reverse().join('');
}

// Step 2: Reverse the array itself
strArr2.reverse();

console.log(strArr2);  // Output: [ 'gninromdoog', 'emoclew' ]
