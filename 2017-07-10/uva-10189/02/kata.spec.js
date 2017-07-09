var equal = require('assert').deepStrictEqual;
var kata = require('./kata');

[
  {
    input: '*',
    output: '*',
  },
  {
    input: '.',
    output: '0',
  },
].forEach(function (params) {
  describe('answer, when field is ' + params.input, function () {
    it('is ' + params.output, function () {
      equal(kata(params.input), params.output);
    });
  });
});
