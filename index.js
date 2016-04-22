'use strict';

var nil = require('is-nil');

module.exports = function (likelihood) {

  if (nil(likelihood)) {
    return Math.random() >= 0.5;
  }

  return Math.random() * 100 < likelihood;
};
