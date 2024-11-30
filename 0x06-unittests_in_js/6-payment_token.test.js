#!/usr/bin/node
const getPaymentTokenFromAPI = require('./6-payment_token.js');
const { expect } = require('chai');

describe('getPaymentTokenFromApi', function () {
  it('returns a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true).then(res => {
      expect(res).to.deep.equal({data: 'Successful response from the API'});
      done();
    }).catch(done);
  });

  it('returns a successful response when success is false', function () {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});