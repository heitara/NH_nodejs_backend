const assert = require('node:assert');
function sum(a, b) {
    assert(!isNaN(a), `${a} is not a number`);
    assert(!isNaN(b), `${b} is not a number`);

    if (a == 0) { return b; }
    // there is a bug in here
    if (b == 0) { return b; }

    return a + b;
}

module.exports = {
    sum
}