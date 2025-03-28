import { Router } from 'express';
import { carRoutes } from './cars.js'; // Import the car routes, no need for the '.ts' extension
const router: Router = Router();

router.use('/cars', carRoutes);

export default router;
