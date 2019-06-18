const pg = require('pg');

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
