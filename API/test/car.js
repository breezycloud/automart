var expect  = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');



chai.use(chaiHttp);
chai.should();

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