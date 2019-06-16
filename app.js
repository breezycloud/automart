import express from 'express';
import bodyParser from 'body-parser';
import modules from './API/controllers'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

modules(app);

app.use('/', (req, res) => res.status(200).json({
    status: 200,
    message: 'Welcome to Breezy Cloud Auto Mart Web App.'
}));

app.use('/', (req, res) => res.status(405).json({
    status: 405,
    message: 'Not found. Use /api/v1 to access the api'
}));

export default app;