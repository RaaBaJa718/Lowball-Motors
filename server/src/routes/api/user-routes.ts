import { Router } from 'express';

const userRouter = Router();

// Example user routes
userRouter.get('/', (_, res) => {
  res.send('Get all users');
});

userRouter.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

// Export `userRouter` as a named export
export { userRouter };