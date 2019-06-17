var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Order Test', function() {

    describe('PATCH request: should be able to update order price', function () {
        const order_id = 5,  new_price = 3000.00;
        it('should be able to update order price', (done) => {
            chai.request('http://localhost:5000/')
            .patch(`api/v1/order/${ order_id }/price`)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);  
                res.body.should.be.a('object');
                res.body.should.have.property('price_offered').eql(new_price);
            });
            done();
        })
    })

})