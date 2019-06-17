import Cars from '../../models/cars';
const { pool } = require('../../services/db')

const cars = new Cars();

class CarsController{

    static newAd(req, res)
    {
        const data = {
            owner : req.body.owner,
            state : req.body.state,
            status : req.body.status,
            price : req.body.price,
            manufacturer : req.body.manufacturer,
            model : req.body.model,
            body_type : req.body.body_type,
        }  
        
        pool.connect((err, client, done) => { 
            const query = "INSERT INTO cars(owner, state, status, price, manufacturer, model, body_type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ";
             const values = [data.owner, data.state, data.status, data.price, data.manufacturer, data.model, data.body_type];

             client.query(query, values, (error, result) => {
                done();
                if(error)
                {
                    res.status(400).json({ status: 400, message: error });
                }
                return res.status(200).send({ status: 200, message: 'Car Ad successfully saved', data: result.rows[0] })
              });
        })
    }

    static updateAdvertStatus(req, res)
    {
        const id = parseInt(req.params.id)
        const data = {
            status: req.body.status
        }

        pool.connect((err, client, done) => 
        {
            const query = "UPDATE cars SET status=$1 WHERE id=$2";
            const values = [data.status, id];

            client.query(query, values, (error, result) => {
                done();
                if(error)
                {
                    res.status(400).json({ status: 400, message: error });
                }
                return res.status(200).send({ status: 200, message: 'Car status successfully updated', data: result.rows[0] })
            });
        })
    }

}

export default CarsController;
