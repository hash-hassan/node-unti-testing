const { Task } = require('../models');

// Create task
const createTask = async (taskData) => {
  const task = new Task(taskData);
  await task.save();
  return task;
};

// Get tasks by user
const getTasksByUser = async (userId) => {
  const tasks = await Task.find({ userId });
  return tasks;
};

// Get task by ID
const getTaskById = async (taskId, userId) => {
  const task = await Task.findById(taskId);
  if (!task || task.userId.toString() !== userId) throw new Error('Task not found');
  return task;
};

// Update task
const updateTask = async (taskId, updatedData, userId) => {
  const task = await Task.findById(taskId);
  if (!task || task.userId.toString() !== userId) throw new Error('Task not found');

  Object.assign(task, updatedData);
  await task.save();
  return task;
};

// Delete task
const deleteTask = async (taskId, userId) => {
  const task = await Task.findById(taskId);
  if (!task || task.userId.toString() !== userId) throw new Error('Task not found');

  await task.remove();
  return true;
};

module.exports = { createTask, getTasksByUser, getTaskById, updateTask, deleteTask };
