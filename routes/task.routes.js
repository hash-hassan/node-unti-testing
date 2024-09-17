const express = require('express')
const router = express.Router()
const { AuthMiddleware } = require('../common/middlewares');
const {
  createNewTask,
  getUserTasks,
  getTaskByIdController,
  updateTaskController,
  deleteTaskController
} = require('../controllers/task.controller');

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

module.exports = router;
