import { createTask, getTasksByUser, getTaskById, updateTask, deleteTask,  } from '../services/task.service.js'

// Controller to create a new task
export const createNewTask = async (req, res) => {
  try {
    const task = await createTask({ ...req.body, userId: req.user });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Controller to get all tasks for a user
export const getUserTasks = async (req, res) => {
  try {
    const tasks = await getTasksByUser(req.user);
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Controller to get a task by its ID
export const getTaskByIdController = async (req, res) => {
  try {
    const task = await getTaskById(req.params.id, req.user);
    res.json(task);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

// Controller to update a task
export const updateTaskController = async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body, req.user);
    res.json(task);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

// Controller to delete a task
export const deleteTaskController = async (req, res) => {
  try {
    await deleteTask(req.params.id, req.user);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
