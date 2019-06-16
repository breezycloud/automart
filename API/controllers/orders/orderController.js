const { pool } = require('../../services/db');



class OrderController{
    static purchaseOrder(req, res)
    {
        const data = {

            car_id : req.body.car_id,
            status : req.body.status,
            price : req.body.price,
            price_offered : req.body.price_offered,        
        }  

        pool.connect((err, client, done) => { 
            const query = "INSERT INTO orders(car_id, status, price, price_offered) VALUES ($1, $2, $3, $4) RETURNING * ";
             const values = [data.car_id, data.status, data.price, data.price_offered];

             client.query(query, values, (error, result) => {
                done();
                if(error)
                {
                    res.status(400).json({ status: 400, message: error });
                }
                return res.status(200).send({ status: 200, message: 'Purchase order successfully created', data: result.rows[0] })
              });
        })       
    }
}

export default OrderController;