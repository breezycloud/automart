import { Router } from 'express';
import OrdersController from './orderController';

const orderRouter = Router();


orderRouter.post(
  '/order',
<<<<<<< HEAD
  OrdersController.purchaseOrder
=======
  OrdersController.purchaseOrder,
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042
);

orderRouter.patch(
  '/order/:id/price',
<<<<<<< HEAD
  OrdersController.updateOrder
=======
  OrdersController.updateOrder,
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042
);

export default orderRouter;
