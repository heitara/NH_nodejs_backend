const assert = require('node:assert');
const { sum } = require('./tools');

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: '1', // fails with b: 2
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
// const obj4 = { __proto__: obj1 };

assert.deepEqual(obj1, obj1, 'Objects are not equal!');


// Values of b are different:
assert.deepEqual(obj1, obj2);

//assert.deepStrictEqual(obj1, obj2); // these are different

assert.deepEqual(obj1, obj3);

// assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}

assert.doesNotThrow(
    () => {
        // throw new TypeError('Wrong value');
        sum(7, 7);
    },
    SyntaxError,
);


assert.ifError(null); //OK
assert.ifError(undefined); //OK


assert.match('I will pass', /pass/);//OK