const assert = require('node:assert');
const test = require('node:test');
function factorial(n) {
    if (n < 0) throw new Error('Negative numbers not allowed');
    return n === 0 ? 1 : n * factorial(n - 1);
}

test('Factorial function', () => {
    
    // n! = n * (n - 1) * ... * 1
    // 4 * 3 * 2 * 1 = 24
  
    assert.strictEqual(factorial(0), 1, `0! is 1.`);
    assert.strictEqual(factorial(4), 24, `4! is 24.`);
});

test('Factorial function doesn\'t throw', () => {
    
    // n! = n * (n - 1) * ... * 1
    // 4 * 3 * 2 * 1 = 24
  
    assert.doesNotThrow(() => {
        factorial(1);
    }, `factorial function shouldn't throw erros`)
});

test('Factorial function does throw',  () => {
    
    // n! = n * (n - 1) * ... * 1
    // 4 * 3 * 2 * 1 = 24
  
    assert.throws(() => {
        factorial(-1);
    }, `factorial function throws erros when invoked with negative values!`)
});