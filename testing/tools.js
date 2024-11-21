const assert = require('node:assert');
function sum(a, b) {
    assert(!isNaN(a), `${a} is not a number`);
    assert(!isNaN(b), `${b} is not a number`);

    if (a == 0) { return b; }
    if (b == 0) { return a; }

    return a + b;
}

module.exports = {
    sum
}