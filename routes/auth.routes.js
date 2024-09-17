const express = require('express');
const router = express.Router();
const { createNewUser, loginExistingUser } = require('../controllers/auth.controller');

// Register user
router.post('/register', createNewUser);

// Login user
router.post('/login', loginExistingUser);

module.exports = router;
