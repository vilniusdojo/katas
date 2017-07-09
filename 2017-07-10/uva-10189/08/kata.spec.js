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
  {
    input: '*.',
    output: '*1',
  },
  {
    input: '*..',
    output: '*10',
  },
  {
    input: '*.*',
    output: '*2*',
  },
  {
    input: '.**',
    output: '1**',
  },
  {
    input: '*\n.',
    output: '*\n1',
  },
  {
    input: '.\n*',
    output: '1\n*',
  },
  {
    input: '***\n*.*\n***',
    output: '***\n*8*\n***',
  },
].forEach(function (params) {
  describe('answer, when field is:\n' + params.input, function () {
    it('is:\n' + params.output, function () {
      equal(kata(params.input), params.output);
    });
  });
});

