var houses = require('./kata');
var equal = require('assert').deepStrictEqual;

describe('visited houses count', function () {
  it('is initially 1', function () {
    equal(houses(''), 1);
  });
  it('is 2, after a step left', function () {
    equal(houses('<'), 2);
  });
}); 
