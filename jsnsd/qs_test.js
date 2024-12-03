const assert = require('assert');
const qs = require('qs');

assert.deepEqual(qs.parse('foo=bar&foo=baz'), { foo: ['bar', 'baz'] });
assert.deepEqual(qs.parse('foo=bar&foo=baz', { duplicates: 'combine' }), { foo: ['bar', 'baz'] });
assert.deepEqual(qs.parse('foo=bar&foo=baz', { duplicates: 'first' }), { foo: 'bar' });
assert.deepEqual(qs.parse('foo=bar&foo=baz', { duplicates: 'last' }), { foo: 'baz' });