import { Router } from 'express';
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
  '/car',
  CarsController.newAd,
);

<<<<<<< HEAD
<<<<<<< HEAD
carsRouter.patch(
=======
carsRouter.post(
>>>>>>> feat(update car status): update car advert status [Finishes #166726256]
=======
carsRouter.post(
>>>>>>> 263151bbf12c645fa2e4ddfe4b1c067f0c4ac042
  '/car/:id/status',
  CarsController.updateAdvertStatus,
);

export default carsRouter;
