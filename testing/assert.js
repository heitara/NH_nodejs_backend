function sum(a, b){
    assert(!isNaN(a), `${a} is not a number`);
    assert(!isNaN(b), `${b} is not a number`);

    if (a == 0) { return b; }
    // there is a bug in here
    if (b == 0) { return b; }

    return a + b;
}

const assert = require('node:assert');

assert(1 + 1 === 2, 'Sum is correct!');

// assert(1 + 1 === 3, 'Sum is incorrect!');

sum("hello", "Node!");

console.log("End!");


assert.strictEqual(sum(2, 2), 4, "sum() is not working as expected!");