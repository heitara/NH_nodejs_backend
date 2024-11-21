const tools = require("./tools.js");
const sum = tools.sum;

const assert = require('node:assert');

assert(1 + 1 === 2, 'Sum is correct!');

// assert(1 + 1 === 3, 'Sum is incorrect!');

// sum("hello", "Node!");

assert.strictEqual(sum(2, 2), 4, "sum(2,2) is not working as expected!");

assert.strictEqual(sum(0, 1), 1, "sum(0,1) is not working as expected!");
assert.strictEqual(sum(0, 0), 0, "sum(0,0) is not working as expected!");
assert.strictEqual(sum(1, 0), 1, "sum(1,0) is not working as expected!");


console.log("End!");