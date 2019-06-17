import { Router } from 'express';
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
  '/car',
  CarsController.newAd,
);

export default carsRouter;
