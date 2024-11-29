#!/usr/bin/node
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  /**
   * The test groups test for different value of `type` that is
   * passed to the function
   */
  describe('SUM', function () {
    it('sum whole numbers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('sum floating point number and whole number with rounding down', function () {
      expect(calculateNumber('SUM', 1.3, 3)).to.equal( 4);
    });

    it('sum floating point number and whole number with rounding up', function () {
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });

    it('sum floating point numbers', function () {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('sum zeros', function () {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('sum zero and a number', function () {
      expect(calculateNumber('SUM', 0, 10)).to.equal(10);
    });

    it('sum negative numbers with no rounding', function () {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('sum negative numbers with rounding', function () {
      // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
      expect(calculateNumber('SUM', -1.5, -1.5)).to.equal(-2);
    });
  });

  describe('SUBTRACT', function() {
    it('subtract whole numbers', function () {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('subtract floating point number and whole number with rounding down', function () {
      expect(calculateNumber('SUBTRACT', 3, 1.3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.3, 3)).to.equal(-2);
    });

    it('subtract floating point number and whole number with rounding up', function () {
      expect(calculateNumber('SUBTRACT', 3, 1.5)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    });

    it('subtract floating point numbers', function () {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT',  3.7, 1.5)).to.equal(2);
    });

    it('subtract zeros', function () {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('subtract zero and a whole number', function () {
      expect(calculateNumber('SUBTRACT', 0, 10)).to.equal(-10);
      expect(calculateNumber('SUBTRACT', 10, 0)).to.equal(10);
    });

    it('subtract negative numbers with no rounding', function () {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });

    it('subtract negative numbers with rounding down', function () {
      // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
      expect(calculateNumber('SUBTRACT', -1.5, -1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('divide whole numbers', function () {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });

    it('divide floating point number and whole number with rounding down', function () {
      expect(calculateNumber('DIVIDE', 3, 1.3)).to.equal(3);
      expect(calculateNumber('DIVIDE', 1.3, 3)).to.equal(0.3333333333333333);
    });

    it('divide floating point number and whole number with rounding up', function () {
      expect(calculateNumber('DIVIDE', 3, 1.5)).to.equal(1.5);
      expect(calculateNumber('DIVIDE', 1.5, 3)).to.equal(0.66666666666666666);
    });

    it('divide floating point numbers', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('divide zeros', function () {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });

    it('divide whole number and zero', function () {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });

    it('divide negative numbers with no rounding', function () {
      expect(calculateNumber('DIVIDE', -1, -3)).to.equal(0.3333333333333333);
    });

    it('divide negative number with rounding down', function () {
      // Note: Negative 0.5 is rounded to zero hence 1.5 is rounded to 1
      expect(calculateNumber('DIVIDE', -1.5, -1.5)).to.equal(1);
    });
  });
});
