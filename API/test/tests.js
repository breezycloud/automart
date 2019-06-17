import chai from 'chai';
import chaiHttp from 'chai-http';


chai.use(chaiHttp);
<<<<<<< HEAD
const expect = chai.expect;
const should = chai.should();


describe('Car Test', function() 
{
=======
const { expect } = chai;
const should = chai.should();


describe('Car Test', () => {
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
  describe('POST request: create new car ad', () => {
    const Car = {
      owner: 1,
      state: 'new',
      status: 'available',
      price: 4000,
      manufacturer: 'Mercedez Benz',
      model: 'SLS AMG',
<<<<<<< HEAD
      body_type: 'saloon'                      
    }   
    it('should be able to create car ad', (done) => {
      chai.request('http://localhost:5000/')
      .post('api/v1/car')
      .send(Car)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
          expect(200);        
      });
      done();    
    });
  })

  describe('PATCH request: should be able to update car status', () => {
    const id = 5;
    const updateRec = {
      status: 'available'
    };
    it('should be able to update car status', (done) => {
      chai.request('http://localhost:5000/')
      .patch(`api/v1/car/${ id }/status`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')  
      .send(updateRec)          
      .end((err, res) => {
        expect(200);                                  
      });
      done();
    })
  })


  describe('Order Test', () => {
    describe('PATCH request: should be able to update order price', () => {
      const orderId = 5;
      const updateRec ={
        price_offered: 3000.00
      };
      it('should be able to update order price', (done) => {
        chai.request('http://localhost:5000/')
        .patch(`api/v1/order/${ orderId }/price`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')  
        .send(updateRec) 
        .end((err, res) => {
          expect(200);                    
        });
      done();
    })
  })  
})
=======
      body_type: 'saloon',
    };
    it('should be able to create car ad', (done) => {
      chai.request('http://localhost:5000/')
        .post('api/v1/car')
        .send(Car)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(200);
        });
        done();
    });
  });

  describe('PATCH request: should be able to update car status', () => {
    const id = 6;
    const updateRec = {
      status: 'available'
    };
    
    it('should be able to update car status', (done) => {
      chai.request('http://localhost:5000/')
        .patch(`api/v1/car/${id}/status`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(updateRec)
        .end((err, res) => {
          expect(200);
        });
      done();
    });
  });
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
});
