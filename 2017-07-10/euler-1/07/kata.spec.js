var kata = require('./kata');
var equal = require('assert').deepStrictEqual;

[
  {d: [2, 5], n: 10, sum: 25},
  {d: [3, 5], n: 10, sum: 23},
  {d: [3, 5], n: 11, sum: 33},
  {d: [3, 5], n: 1000, sum: 233168}
].forEach(function (params) {
  describe('sum of multiples of ' + params.d.join(' or ') + ' of numbers below ' + params.n, function () {
    it('is ' + params.sum, function () {
      equal(kata(params.n, params.d), params.sum);
    });
  });
});
