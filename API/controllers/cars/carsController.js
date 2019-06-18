import Cars from '../../models/cars';
<<<<<<< HEAD
<<<<<<< HEAD
=======

const { pool } = require('../../services/db');
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
=======

const { pool } = require('../../services/db');
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042

const cars = new Cars();

class CarsController {
  static newAd(req, res) {
    const data = {
      owner: req.body.owner,
      state: req.body.state,
      status: req.body.status,
      price: req.body.price,
      manufacturer: req.body.manufacturer,
      model: req.body.model,
      body_type: req.body.body_type,
    };

    pool.connect((err, client, done) => {
<<<<<<< HEAD
      const query = 'INSERT INTO cars(owner, state, status, price, manufacturer, model, body_type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ';
=======
      const query = 'INSERT INTO cars(owner, state, status, price, manufacturer, model, body_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ';
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042
      const values = [data.owner, data.state, data.status, data.price, data.manufacturer, data.model, data.body_type];

      client.query(query, values, (error, result) => {
        done();
        if (error) {
          res.status(400).json({ status: 400, message: error });
        }
        return res.status(200).send({ status: 200, message: 'Car Ad successfully saved', data: result.rows[0] });
      });
    });
  }

<<<<<<< HEAD
  static updateAdvertStatus(req, res) {
    const id = parseInt(req.params.id);
    const data = {
      status: req.body.status,
=======
  static updateAdvertStatus(req, res){
    const id = parseInt(req.params.id);
    const data = {
      status: req.body.status
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042
    };

    pool.connect((err, client, done) => {
      const query = 'UPDATE cars SET status=$1 WHERE id=$2';
      const values = [data.status, id];

      client.query(query, values, (error, result) => {
        done();
<<<<<<< HEAD
        if (error) {
          res.status(400).json({ status: 400, message: error });
        }
        return res.status(200).send({ status: 200, message: 'Car status successfully updated', data: result.rows[0] });
=======
        if(error){
          res.status(400).json({ status: 400, message: error });
        }
        return res.status(202).send({ status: 202, message: 'Car status successfully updated' });
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042
      });
    });
  }
}

export default CarsController;
