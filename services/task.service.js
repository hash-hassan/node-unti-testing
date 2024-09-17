import { Task } from '../models/index.js';

// Create task
export const createTask = async (taskData) => {
  const task = new Task(taskData);
  await task.save();
  return task;
};

// Get tasks by user
export const getTasksByUser = async (userId) => {
  const tasks = await Task.find({ userId });
  return tasks;
};

// Get task by ID
export const getTaskById = async (taskId, userId) => {
  const task = await Task.findById(taskId);
  if (!task || task.userId.toString() !== userId) throw new Error('Task not found');
  return task;
};

// Update task
export const updateTask = async (taskId, updatedData, userId) => {
  const task = await Task.findById(taskId);
  if (!task || task.userId.toString() !== userId) throw new Error('Task not found');

  Object.assign(task, updatedData);
  await task.save();
  return task;
};

// Delete task
export const deleteTask = async (taskId, userId) => {
  const task = await Task.findById(taskId);
  if (!task || task.userId.toString() !== userId) throw new Error('Task not found');

  await task.remove();
  return true;
};

