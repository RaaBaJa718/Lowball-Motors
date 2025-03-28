import { Router } from 'express';
import { carRoutes } from './api/cars.js';
const router = Router();
router.use('/cars', carRoutes);
export default router;
