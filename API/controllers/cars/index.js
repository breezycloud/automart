import { Router } from 'express';
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
  '/car',
  CarsController.newAd,
);

carsRouter.patch(
  '/car/:id/status',
  CarsController.updateAdvertStatus,
);

carsRouter.patch(
  '/car/:id/price',
  CarsController.updateCarPrice,
);

export default carsRouter;
