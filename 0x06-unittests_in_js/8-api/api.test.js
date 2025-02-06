const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';

describe('Index page', () => {

	it('Accessing / route should succeed without errors', (done) => {
		request(url, (error, response, body) => {
			expect(error).to.be.null;
			done();
		});
	});

	it('Verify the response body of the / route', (done) => {
		request(url, (error, response, body) => {
			expect(error).to.be.null;
			expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});
})
