import { Router } from 'express'
import OrdersController from './orderController';

const orderRouter = Router();


orderRouter.post(
    '/order',
    OrdersController.purchaseOrder
);


export default orderRouter;
