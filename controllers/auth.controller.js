const { registerUser, loginUser } = require('../services/auth.service');

// Controller to register a new user
const createNewUser = async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Controller to login user
const loginExistingUser = async (req, res) => {
  try {
    const result = await loginUser(req.body.email, req.body.password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { createNewUser, loginExistingUser };
