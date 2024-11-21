function sum(a, b){
    assert(!isNaN(a), `${a} is not a number`);
    assert(!isNaN(b), `${b} is not a number`);
    return a + b;
}

const assert = require('node:assert');

assert(1 + 1 === 2, 'Sum is correct!');

assert(1 + 1 === 3, 'Sum is incorrect!');

console.log("End!");

