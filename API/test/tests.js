import chai from 'chai';
import chaiHttp from 'chai-Http';

chai.use(chaiHttp);
var expect = chai.expect;
var should = chai.should();

describe('Car Test', function() 
{
    describe('POST request: create new car ad', function()
    {
      const Car = {
        owner: 1,
        state: 'new',
        status: 'available',
        price: 4000,
        manufacturer: 'Mercedez Benz',
        model: 'SLS AMG',
        body_type: 'saloon'                      
    }
    
    it('should be able to create car ad', function(done){
        chai.request('http://localhost:5000/')
        .post('api/v1/car')
        .send(Car)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);        
            });
        done();    
        });
    })
});
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

});