function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}

const numbers = [3, 5, 1, 10, 2];
console.log("Largest number:", findLargestNumber(numbers));
