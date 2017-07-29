var kata = require('./kata');
var houses = kata.houses.bind(kata);
var housesByTwoSantas = kata.housesByTwoSantas.bind(kata);
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
  it('is 0-0, 1-0, after a step right and step left', function () {
    equal(houses('><'), ['0-0', '1-0']);
  });
  it('is 0-0, 0-1, after a step up', function () {
    equal(houses('^'), ['0-0', '0-1']);
  });
  it('is 0-0, 0--1, after a step down', function () {
    equal(houses('v'), ['0-0', '0--1']);
  });
});

describe('two santas', function () {
  it('is initially 0-0', function () {
    equal(housesByTwoSantas(''), ['0-0']);
  });
  it('is 0-0, -1-0, 1-0, when script is <>', function () {
    equal(housesByTwoSantas('<>'), ['0-0', '-1-0', '1-0']);
  });
}); 
