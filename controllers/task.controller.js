const { createTask, getTasksByUser, getTaskById, updateTask, deleteTask } = require('../services/task.service');

// Controller to create a new task
const createNewTask = async (req, res) => {
  try {
    const task = await createTask({ ...req.body, userId: req.user });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Controller to get all tasks for a user
const getUserTasks = async (req, res) => {
  try {
    const tasks = await getTasksByUser(req.user);
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Controller to get a task by its ID
const getTaskByIdController = async (req, res) => {
  try {
    const task = await getTaskById(req.params.id, req.user);
    res.json(task);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

// Controller to update a task
const updateTaskController = async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body, req.user);
    res.json(task);
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

// Controller to delete a task
const deleteTaskController = async (req, res) => {
  try {
    await deleteTask(req.params.id, req.user);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

module.exports = { createNewTask, getUserTasks, getTaskByIdController, updateTaskController, deleteTaskController };
