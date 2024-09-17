import { User } from '../models'

// Get user by ID
const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  return user;
};

module.exports = { getUserById };
