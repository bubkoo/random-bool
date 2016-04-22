var expect = require('chai').expect;


describe('random-bool', function () {

  var randomBool = require('../../');

  it('randomBool()', function () {
    expect(randomBool()).to.be.a('boolean');
  });

  it('randomBool(30)', function () {
    expect(randomBool(30)).to.be.a('boolean');
  });

  it('randomBool(0)    => should always be false', function () {
    expect(randomBool(0)).to.equal(false);
  });

  it('randomBool(100)  => should always be true', function () {
    expect(randomBool(100)).to.equal(true);
  });

  it('randomBool("a")  => should always be false', function () {
    expect(randomBool("a")).to.equal(false);
  });

  it('randomBool([])   => should always be false', function () {
    expect(randomBool([])).to.equal(false);
  });

  it('randomBool({})   => should always be false', function () {
    expect(randomBool({})).to.equal(false);
  });

});
