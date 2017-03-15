'use strict';

module.exports = function (options) {

  if (options && options.likelihood) {
    return Math.random() * 100 < options.likelihood;
  }

  return Math.random() >= 0.5;
};
