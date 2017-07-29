var houses = require('./kata');
var equal = require('assert').deepStrictEqual;

describe('visited houses', function () {
  it('is initially 0-0', function () {
    equal(houses(''), ['0-0']);
  });
  it('is 0-0, -1-0, after a step left', function () {
    equal(houses('<'), ['0-0', '-1-0']);
  });
  it('is 0-0, -1-0, after a step left and step right', function () {
    equal(houses('<>'), ['0-0', '-1-0']);
  });
}); 
