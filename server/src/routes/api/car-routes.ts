import { Router } from 'express';
import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from '../../controllers/cars-controller.js'; // Explicitly add .js extension

const router = Router();

// GET /cars - Get all cars
router.get('/', getAllCars);

// GET /cars/:id - Get a car by ID
router.get('/:id', getCarById);

// POST /cars - Create a new car
router.post('/', createCar);

// PUT /cars/:id - Update a car by ID
router.put('/:id', updateCar);

// DELETE /cars/:id - Delete a car by ID
router.delete('/:id', deleteCar);

export { router as carRoutes };
