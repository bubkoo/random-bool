var char   = require('chai');
var expect = char.expect;


describe('random-bool', function () {

  var randomBool = require('../../index');

  it('randomBool()', function () {
    expect(randomBool()).to.be.a('boolean');
  });

  it('randomBool(1)', function () {
    expect(randomBool(1)).to.be.a('boolean');
  });

  it('randomBool(1, 1)', function () {
    expect(randomBool(1, 1)).to.be.a('boolean');
  });

  it('randomBool(1, 1, true)', function () {
    expect(randomBool(1, 1, true)).to.be.a('boolean');
  });

  it('randomBool(0, 1, true)  => should always return false', function () {
    expect(randomBool(0, 1, true)).to.equal(false);
  });

  it('randomBool(0, 2, true)  => should always return false', function () {
    expect(randomBool(0, 2, true)).to.equal(false);
  });

  it('randomBool(1, 0, true)  => should always return true', function () {
    expect(randomBool(1, 0, true)).to.equal(true);
  });

  it('randomBool(-1, 0, true) => should always return true', function () {
    expect(randomBool(-1, 0, true)).to.equal(true);
  });

  it('randomBool(0, 0, true)  => should always return true', function () {
    expect(randomBool(0, 0, true)).to.equal(true);
  });

  it('randomBool(-1, 1, true) => should always return true', function () {
    expect(randomBool(-1, 1, true)).to.equal(true);
  });
});
