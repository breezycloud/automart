import carsRouter from './cars';
import orderRouter from './orders'


const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, carsRouter);
    app.use(apiPrefix, orderRouter);

    return app;
};


export default routes;