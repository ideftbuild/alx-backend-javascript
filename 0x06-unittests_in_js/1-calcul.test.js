#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  /**
   * The test groups test for different value of `type` that is
   * passed to the function
   */
  describe('SUM', function () {
    it('sum whole numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('sum floating point number and whole number with rounding down', function () {
      assert.strictEqual(calculateNumber('SUM', 1.3, 3), 4);
    });

    it('sum floating point number and whole number with rounding up', function () {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
    });

    it('sum floating point numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('sum zeros', function () {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('sum zero and a number', function () {
      assert.strictEqual(calculateNumber('SUM', 0, 10), 10);
    });

    it('sum negative numbers with no rounding', function () {
      assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    });

    it('sum negative numbers with rounding', function () {
      // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
      assert.strictEqual(calculateNumber('SUM', -1.5, -1.5), -2);
    });
  });

  describe('SUBTRACT', function() {
    it('subtract whole numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('subtract floating point number and whole number with rounding down', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.3), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 3), -2);
    });

    it('subtract floating point number and whole number with rounding up', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.5), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3), -1);
    });

    it('subtract floating point numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT',  3.7, 1.5,), 2);
    });

    it('subtract zeros', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('subtract zero and a whole number', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 10), -10);
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 0), 10);
    });

    it('subtract negative numbers with no rounding', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
    });

    it('subtract negative numbers with rounding down', function () {
      // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -1.5), 0);
    });
  });

  describe('DIVIDE', function () {
    it('divide whole numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2), 1.5);
    });

    it('divide floating point number and whole number with rounding down', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 1.3), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 3), 0.3333333333333333);
    });

    it('divide floating point number and whole number with rounding up', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 1.5), 1.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3), 0.66666666666666666);
    });

    it('divide floating point numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5),0.2);
    });

    it('divide zeros', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('divide whole number and zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });

    it('divide negative numbers with no rounding', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1, -3), 0.3333333333333333);
    });

    it('divide negative number with rounding down', function () {
      // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -1.5), 1);
    });
  });
});
