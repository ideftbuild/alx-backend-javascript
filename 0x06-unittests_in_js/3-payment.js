#!/usr/bin/node
const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log('The total is:', sum);
}

module.exports = sendPaymentRequestToApi;
