# yassium
ES2015 Template Tag for Python-like format strings. Powered by [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

[![Build Status](https://travis-ci.org/zemlanin/yassium.svg?branch=master)](https://travis-ci.org/zemlanin/yassium)

## Installation
```
$ npm install yassium
```

## Usage
```js
import y from "yassium";

const simplePlaceholder = y`hello ${y}`;
simplePlaceholder("world") === "hello world";

const nestedValue = y`my favorite number is ${y.lol.length}`;
nestedValue({ lol: ["something"] }) === "my favorite number is 1";
```
