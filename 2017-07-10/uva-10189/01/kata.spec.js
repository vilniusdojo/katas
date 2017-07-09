var equal = require('assert').deepStrictEqual;
var kata = require('./kata');

describe('answer, when field is *', function () {
  it('is *', function () {
    equal(kata(`*`), `*`);
  });
});
