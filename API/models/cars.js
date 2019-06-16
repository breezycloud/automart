import pg from 'pg';
const { pool } = require('../services/db')
class Cars{

    newCar(owner, created_on, state, status, price, manufacturer, model, body_type)
    {
        pool.connect((err, client, done) => { 
            const query = 'INSERT INTO cars(owner, created_on, state, status, price, manufacturer, model, body_type) '
             + ' VALUES ($1, $2, $3, $4, $5, $6, $7 $8) RETURNING *';
             const values = [owner, created_on, state, status, price, manufacturer, model, body_type];

             client.query(query, values, (error, result) => {
                done();
                 return result.rows;
              });
        })

    }
    postAD(email, manufacturer, model, price, state, status){
        const id = this.getNewId(this.cars);
        this.cars.push({
            id: id,
            email,
            created_on: moment.now(),
            manufacturer,
            model,
            price,
            state,
            status
        });

        const newCarAd = this.cars[id - 1];
        return newCarAd; 
    }

    deleteCar(id)
    {
        return this.cars.find(findCar => findCar.id == id);
       
    }

    allCars()
    {
        return this.cars;
    }
    

}

export default Cars;