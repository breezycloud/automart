import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';

import app from '../../app';
chai.use(chaiHttp);
const { expect } = chai;


describe('Car Test', () => {
  describe('POST request: create new car ad', () => {
    const Car = {
      owner: 1,
      state: 'new',
      status: 'available',
      price: 4000,
      manufacturer: 'Mercedez Benz',
      model: 'SLS AMG',
      body_type: 'saloon',
    };
    it('should be able to create car ad', (done) => {
      chai.request(app)
        .post('api/v1/car')
        .send(Car)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
            expect(201);
        });
      done();
    });
  });
});
describe('Order Test', () => {
  describe('PATCH request: should be able to update order price', () => {
    const orderId = 5;
    const newPrice = 3000.00;
    it('should be able to update order price', (done) => {
      chai.request(app)
        .patch(`api/v1/order/${orderId}/price`)
        .end((err, res) => {
          expect(201);
        });
      done();
    });
  });
});
