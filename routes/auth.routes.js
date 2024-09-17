import express from 'express';
const router = express.Router();
import { createNewUser, loginExistingUser } from '../controllers/auth.controller.js';

// Register user
router.post('/register', createNewUser);

// Login user
router.post('/login', loginExistingUser);

export default router;
