#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('sum whole numbers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

 it('sum floating point number and whole number with no rounding ', function () {
   assert.strictEqual(calculateNumber(1.3, 3), 4);
 });

  it('sum floating point number and whole number with rounding', function () {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });

  it('sum two floating point numbers', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('sum zeros', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('sum zero and a number', function () {
    assert.strictEqual(calculateNumber(0, 10), 10);
  });

  it('sum two negative numbers with no rounding', function () {
   assert.strictEqual(calculateNumber(-1, -3), -4);
  });

  it('sum two negative number with rounding', function () {
    // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
  });
});
