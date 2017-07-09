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
  {
    input: '*...\n....\n.*..\n....',
    output: '*100\n2210\n1*10\n1110',
  },
  {
    input: '**...\n.....\n.*...',
    output: '**100\n33200\n1*100',
  },

].forEach(function (params) {
  describe('answer, when field is:\n' + params.input, function () {
    it('is:\n' + params.output, function () {
      equal(kata(params.input), params.output);
    });
  });
});

