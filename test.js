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

assert.throws(
  function() {
    y`test string ${y.a.b}`({});
  },
  {
    name: "TypeError",
    message: "Cannot read property 'b' of undefined"
  }
);
