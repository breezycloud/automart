const pg = require('pg');

<<<<<<< HEAD
=======

>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
const con = {
  user: 'andela', // this is the db user credential
  database: 'automart_db',
  password: 'andela123',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(con);

pool.on('connect', () => {
  console.log('connected to the Database');
});

const createTables = () => {
<<<<<<< HEAD
  const carsTable = `CREATE TABLE IF NOT EXISTS
        cars(
          id SERIAL PRIMARY KEY,
          owner INT NOT NULL,
          Created_on Date NOT NULL,
          state VARCHAR(6) NOT NULL,
          status VARCHAR(10) NOT NULL,
          price money NOT NULL,
          manufacturer VARCHAR(20) NOT NULL,
          model VARCHAR(20) NOT NULL,
          body_type VARCHAR(20) NOT NULL
        )`;
  pool.query(carsTable)
=======
  const queryCreate = `CREATE TABLE IF NOT EXISTS carss
  (
    id bigserial NOT NULL PRIMARY KEY,
    owner INT NOT NULL,
    Created_on VARCHAR(30) NOT NULL,
    state VARCHAR(10) NOT NULL,
    status VARCHAR(10) NOT NULL,
    price money NOT NULL,
    manufacturer VARCHAR(30) NOT NULL,
    model VARCHAR(20) NOT NULL,
    body_type VARCHAR(20) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS orders
  (
    id bigserial NOT NULL PRIMARY KEY,
    car_id int NOT NULL,
    created_on VARCHAR(30),
    status VARCHAR(10),
    price money NOT NULL,
    price_offered money NOT NULL
  );`;
  console.log('Create table script:\n', queryCreate);
  pool.query(queryCreate)
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


// export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};

require('make-runnable');
