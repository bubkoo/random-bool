var expect = require('chai').expect;


describe('random-bool', function () {

  var randomBool = require('../../');

  it('randomBool()', function () {
    expect(randomBool()).to.be.a('boolean');
  });

  it('randomBool({ likelihood: 30 })', function () {
    expect(randomBool({ likelihood: 30 })).to.be.a('boolean');
  });

  it('randomBool({ likelihood: 0 })   => should always be false', function () {
    expect(randomBool({ likelihood: 0 })).to.equal(false);
  });

  it('randomBool({ likelihood: 100 }) => should always be true', function () {
    expect(randomBool({ likelihood: 100 })).to.equal(true);
  });

  it('randomBool({ likelihood: "a" }) => should always be false', function () {
    expect(randomBool({ likelihood: "a" })).to.equal(false);
  });

  it('randomBool({ likelihood: [] })  => should always be false', function () {
    expect(randomBool({ likelihood: [] })).to.equal(false);
  });

  it('randomBool({ likelihood: {} })  => should always be false', function () {
    expect(randomBool({ likelihood: {} })).to.equal(false);
  });

});
