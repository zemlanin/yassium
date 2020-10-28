var path = "f8fd710e-05cb-46b9-a711-e3ad7c342064";

function id(v) {
  return v;
}

function compileValue(v) {
  if (v === yassium) {
    return id;
  }

  if (v && v[path]) {
    return function compiled(obj) {
      var r = obj;
      var i = 0;

      while (i < v[path].length) {
        r = r[v[path][i++]];
      }

      return r;
    };
  }

  return v;
}

function yassium(strings) {
  var values = Array.prototype.splice.call(arguments, 1);
  var compiledValues = values.map(compileValue);

  return function yassiumRender(obj) {
    var result = [strings[0]];
    var expr;

    for (var i = 0; i < compiledValues.length; i++) {
      expr = compiledValues[i];
      result.push(String(expr(obj)), strings[i + 1]);
    }

    expr = null;

    return result.join("");
  };
}

Object.defineProperty(yassium, path, {
  value: [],
  enumerable: false,
});

function proxyGet(obj, prop) {
  if (prop === path) {
    return obj[path];
  }

  var target = {};

  Object.defineProperty(target, path, {
    value: obj[path].concat(prop),
    enumerable: false,
  });

  return new Proxy(target, {
    get: proxyGet,
  });
}

module.exports = new Proxy(yassium, {
  get: proxyGet,
});
