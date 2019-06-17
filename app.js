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

export default app;