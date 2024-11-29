#!/usr/bin/node
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  const totalAmount = 100;
  const totalShipping = 20;

  afterEach(function () {
    sinon.restore();
  });

  it('Verify Utils.calculateNumber is called once', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(spy);
  });

  it('Verify Utils.calculateNumber is called with the same argument',
    function () {
      const spy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(totalAmount, totalShipping);
      sinon.assert.calledWith(spy, 'SUM', totalAmount, totalShipping);
  });

  it('Verify the console.log output', function () {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(totalAmount, totalShipping);
    sinon.assert.calledWith(spy, 'The total is: 120');
    spy.restore();
  });
});
