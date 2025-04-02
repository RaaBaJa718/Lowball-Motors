import { Router } from 'express';
import { carRoutes } from './car-routes.js'; // Explicit .js file extension
import { userRouter } from './user-routes.js'; // Explicit .js file extension

const router = Router();

// Mount the car-related routes at /cars
router.use('/cars', carRoutes);

// Mount the user-related routes at /users
router.use('/users', userRouter);

export default router;