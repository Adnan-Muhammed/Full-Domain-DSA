let arr = [1, 1, 2, 1, 2, 3, 1, 4,4,4,4,4, 9, 4, 1, 4];

let count = {};
arr.forEach((elem) => {
    count[elem] = (count[elem] || 0) + 1;
});



let maxCount = Math.max(...Object.values(count));
let maxElem = Object.keys(count).find(key => count[key] === maxCount);


let maxElem4 = null;
let maxCount4 = 0;
for (let key in count4) {
    if (count4[key] > maxCount4) {
        maxCount4 = count4[key];
        maxElem4 = key;
    }
}

