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
    const mockCalculateNumber = sinon.stub(Utils, 'calculateNumber');
    mockCalculateNumber.returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(mockCalculateNumber);
  });

  it('Verify Utils.calculateNumber is called with the same argument',
    function () {
      const mockCalculateNumber = sinon.stub(Utils, 'calculateNumber');
      mockCalculateNumber.returns(10);
      sendPaymentRequestToApi(totalAmount, totalShipping);
      sinon.assert.calledWith(mockCalculateNumber, 'SUM', totalAmount, totalShipping);
  });

  it('Verify the console.log output', function () {
    const mockLog = sinon.spy(console, 'log');
    const mockCalculateNumber = sinon.stub(Utils, 'calculateNumber');
    mockCalculateNumber.returns(10);
    sendPaymentRequestToApi(totalAmount, totalShipping);
    sinon.assert.calledWith(mockLog, 'The total is: 10');
    mockLog.restore();
    mockCalculateNumber.restore();
  });
});
