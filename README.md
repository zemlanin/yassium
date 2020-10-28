# yassium
ES2015 Template Tag for Python-like format strings. Powered by [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

[![Build Status](https://github.com/zemlanin/yassium/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/zemlanin/yassium/actions)

## Installation
```
$ npm install yassium
```

## Usage
```js
const y = require("yassium");

const simplePlaceholder = y`hello ${y}`;
simplePlaceholder("world") === "hello world";

const nestedValue = y`my favorite number is ${y.lol.length}`;
nestedValue({ lol: ["something"] }) === "my favorite number is 1";
```

## Links
- [Source code](https://github.com/zemlanin/yassium)
- [npm](https://www.npmjs.com/package/yassium)
- [RunKit demo](https://runkit.com/npm/yassium)
