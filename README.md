# random-bool

> Generate a random boolean (true/false).


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-bool/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-bool/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-bool)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-bool/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-bool)


## Install

```
$ npm install random-bool --save
```


## Usage

```js
var randomBool = require('random-bool');

randomBool(); // be equal to randomBool(1, 1) or randomBool(1, 1, false)
// => true/false

randomBool(1, 5, true);
// => true/false
```


## API

### randomBool()

Return `true` if `Math.random()` is equal or greater than `0.5`, else return `false`.

### randomBool(seed1, seed2, ref)

Randomly return a boolean value according to **probability**. 

The probability of return `!ref` is `seed1/(seed1 + seed2)`. And the probability of return `!!ref` is `seed12/(seed1 + seed2)`.

Look at the following special examples:

```js
var randomBool = require('random-bool');

randomBool(0, 1, true);
// => always return false

randomBool(1, 0, true);
// => always return true

randomBool(-1, 0, true);
// => always return true

randomBool(0, 0, true);
// => always return true

randomBool(-1, -1, true);
// => always return true
```


## Related



