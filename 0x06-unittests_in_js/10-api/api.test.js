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

	it('Correct status code when :id is a number', (done) => {
		request(url + '/cart/12', (error, response, body) => {
			expect(error).to.be.null;
			expect(body).to.equal('Payment methods for cart 12');
			done();
		});
	});

	it('Correct status code when :id is not a number (=> 404)', (done) => {
		request(url + '/cart/ae', (error, response, body) => {
			expect(error).to.be.null;
			expect(response.statusCode).to.be.at.least(404);
			done();
		});
	});

	it('Verify the /login route', (done) => {
		const requestBody = { userName: 'Akan' };
		const options = {
			url: url + '/login',
			method: 'POST',
			json: true,
			body: requestBody,
		};

		request.post(options, (error, response, body) => {
			expect(error).to.be.null;
			expect(body).to.equal('Welcome ' + requestBody.userName);
			done();
		});
	});

	it('Verify the /available_payments route', (done) => {

		const options = {
			url: url + '/available_payments',
			json: true,
		};

		request(options, (error, response, body) => {
			expect(error).to.be.null;
			expect(body).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } })
			done();
		});
	});
});
