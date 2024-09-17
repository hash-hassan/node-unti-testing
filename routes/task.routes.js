import express from 'express';
import { AuthMiddleware } from '../common/middlewares/index.js';  // Ensure .js extension is present
import {
  createNewTask,
  getUserTasks,
  getTaskByIdController,
  updateTaskController,
  deleteTaskController
} from '../controllers/task.controller.js';
const router = express.Router();

// Create a new task
router.post('/tasks', AuthMiddleware, createNewTask);

// Get all tasks for the authenticated user
router.get('/tasks', AuthMiddleware, getUserTasks);

// Get a task by ID
router.get('/tasks/:id', AuthMiddleware, getTaskByIdController);

// Update a task
router.put('/tasks/:id', AuthMiddleware, updateTaskController);

// Delete a task
router.delete('/tasks/:id', AuthMiddleware, deleteTaskController);

export default router
