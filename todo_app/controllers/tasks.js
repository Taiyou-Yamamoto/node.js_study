const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('タスクを全て取得しました');
};
const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getSingleTask = (req, res) => {
  res.send(`${req.params.id}タスクを取得しました`);
};
const updateTask = (req, res) => {
  res.send(`${req.params.id}タスクを更新しました`);
};
const deleteTask = (req, res) => {
  res.send(`${req.params.id}タスクを削除しました`);
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
