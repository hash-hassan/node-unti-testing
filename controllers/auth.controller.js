import { registerUser, loginUser } from '../services/auth.service.js';

// Controller to register a new user
export const createNewUser = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Controller to login user
export const loginExistingUser = async (req, res) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
