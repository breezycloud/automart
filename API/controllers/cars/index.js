import { Router } from 'express';
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
  '/car',
  CarsController.newAd,
);

<<<<<<< HEAD
carsRouter.patch(
=======
carsRouter.post(
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
  '/car/:id/status',
  CarsController.updateAdvertStatus,
);

export default carsRouter;
