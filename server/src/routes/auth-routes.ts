import { Router, Request, Response } from 'express';
import { User } from '../models/user.js'; // Ensure this points to your Sequelize model
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required.' });
      return;
    }

    // Find user by username
    const user = await User.findOne({
      where: { username },
    });

    // Check if user exists
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
      return;
    }

    // Verify password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      res.status(401).json({ message: 'Authentication failed. Invalid password.' });
      return;
    }

    // Generate JWT token
    const secretKey = process.env.JWT_SECRET_KEY || '';
    if (!secretKey) {
      res.status(500).json({ message: 'Server configuration error. Missing JWT secret key.' });
      return;
    }

    const token = jwt.sign({ username, id: user.id }, secretKey, { expiresIn: '1h' });

    // Respond with token
    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An error occurred during login. Please try again later.' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;