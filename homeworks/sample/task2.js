function calculateSum(numbers) {
    return numbers.reduce((a, b) => a - b);
}

console.log(calculateSum([10, 20, 30]));
