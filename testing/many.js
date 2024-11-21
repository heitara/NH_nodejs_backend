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

test('Factorial function does throw', {skip: "Testing the skip option"},  () => {
    
    // n! = n * (n - 1) * ... * 1
    // 4 * 3 * 2 * 1 = 24
  
    assert.throws(() => {
        factorial(-1);
    }, `factorial function throws erros when invoked with negative values!`)
});

test('New Factorial function', {todo: 'Not implemented yet'},  () => {
    // TODO: finish the implemntation 
    assert.throws(() => {
        factorial(-1);
    }, `factorial function throws erros when invoked with negative values!`)
});

test('New Factorial function', {timeout: 1000}, async () => {
    // TODO: finish the implemntation 
    const one = 1;
    setTimeout(()=> {
        assert.strictEqual(one, 1, `1 is not equal to 1!`);
    }, 3000);
});

test('top level test', {timeout: 1000}, async (t) => {
    // The setTimeout() in the following subtest would cause it to outlive its
    // parent test if 'await' is removed on the next line. Once the parent test
    // completes, it will cancel any outstanding subtests.
    await t.test('longer running subtest #1', async (t) => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      });
    });

    await t.test('longer running subtest #2', async (t) => {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 1000);
        });
      });
}); 

// Different testing frameworks 
//https://jestjs.io/
//https://www.chaijs.com/
//https://www.cypress.io/
//https://mochajs.org/