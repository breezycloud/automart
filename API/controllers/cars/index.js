import { Router } from 'express';
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
  '/car',
  CarsController.newAd,
);

carsRouter.post(
  '/car/:id/status',
  CarsController.updateAdvertStatus,
);

export default carsRouter;
