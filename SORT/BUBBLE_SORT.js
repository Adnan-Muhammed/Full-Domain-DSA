const arr = [1, 6, 7, 8, 9, 2, 3, 4, 5, 10];

let bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;

    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

let res = bubbleSort(arr);

console.log(res);
