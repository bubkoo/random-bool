'use strict';


function fixSeed(seed) {

  if (typeof seed !== 'number') {
    seed = parseInt(seed, 10);
  }

  return isNaN(seed) || !isFinite(seed) ? 1 : seed;
}


module.exports = function (seed1, seed2, ref) {

  if (arguments.length === 0) {
    return Math.random() >= 0.5;
  }

  seed1 = fixSeed(seed1);
  seed2 = fixSeed(seed2);

  if ((seed1 + seed2) === 0) {
    return !!ref;
  }

  return Math.random() >= seed1 / (seed1 + seed2) ? !ref : !!ref;
};
