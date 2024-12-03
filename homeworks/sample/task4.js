function slowFunction(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += i + j;
        }
    }
    return sum;
}

console.log("Result:", slowFunction(10000));

