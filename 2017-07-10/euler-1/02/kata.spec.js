var kata = require('./kata');
var equal = require('assert').deepStrictEqual;

describe('sum of multiples of 3 or 5 of numbers below 10', function () {
  it('is 23', function () {
    equal(kata(10, [3, 5]), 23);
  });
});

describe('sum of multiples of 3 or 5 of numbers below 11', function () {
  it('is 33', function () {
    equal(kata(11, [3, 5]), 33);
  });
});
