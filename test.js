const assert = require("assert");
const y = require("./index.js");

assert.deepEqual(y`test string ${y}`(1), "test string 1");
assert.deepEqual(y`test string ${y}`(10), "test string 10");
assert.deepEqual(y`test string ${y} ${y}`(10, 20), "test string 10 10");
assert.deepEqual(y`test string ${y[0]} ${y[1]}`([10, 20]), "test string 10 20");
assert.deepEqual(y`test string ${y.a}`({ a: 3 }), "test string 3");
assert.deepEqual(y`test string ${y.length}`([1, 2, 3, 4]), "test string 4");
assert.deepEqual(y`test string ${y.a}`({}), "test string undefined");
assert.deepEqual(y`test string ${y}`({}), "test string [object Object]");
assert.deepEqual(y`test string ${y}`([1, 2, 3]), "test string 1,2,3");

const sharedY = y`test string ${y}`
assert.deepEqual(sharedY(14), "test string 14");
assert.deepEqual(sharedY(15), "test string 15");
assert.deepEqual(sharedY(16), "test string 16");
assert.deepEqual(sharedY(15), "test string 15");

const sharedProp = y`test string ${y.a}`
assert.deepEqual(sharedProp({ a: 3 }), "test string 3");
assert.deepEqual(sharedProp({ a: 4 }), "test string 4");
assert.deepEqual(sharedProp({ a: 5 }), "test string 5");
assert.deepEqual(sharedProp({ a: 4 }), "test string 4");

assert.throws(
  function() {
    y`test string ${y.a.b}`({});
  },
  TypeError
);
