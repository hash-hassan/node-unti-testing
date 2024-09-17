import { User } from '../models/index.js'

// Get user by ID
export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  return user;
};
