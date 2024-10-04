const fibonacci = (n) => {

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    // 


    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence
    // return sequence.slice(0,n)
};

// Example usage
let res = fibonacci(1);
console.log(res); // Output: [0, 1, 1, 2, 3]
