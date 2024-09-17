import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/index.js';

// Register user
export const registerUser = async (userData) => {
  const { username, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const user = new User({ username, email, password });
  await user.save();

  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  return { user, token };
};

// Login user
export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  return { user, token };
};
