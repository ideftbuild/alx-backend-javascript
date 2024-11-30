#!/usr/bin/node
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let mockOutput = null;

  beforeEach(function () {
    mockOutput = sinon.spy(console, 'log');
  });

  afterEach(function () {
    mockOutput.restore();
  });

  it('Verify that the console is called once and is logging the string `The total is 120`',
    function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(mockOutput);
    sinon.assert.calledWith(mockOutput, 'The total is: 120');
    });

  it('Verify that the console is called once and is logging the string `The total is 20`',
    function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(mockOutput);
    sinon.assert.calledWith(mockOutput, 'The total is: 20');
    });
})