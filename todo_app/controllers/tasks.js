const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const getSingleTask = await Task.findOne({ _id: req.params.id }).exec();
    if (!getSingleTask) {
      return res.status(404).json(`_id:${req.params.id}は存在しません`);
    }
    res.status(200).json(getSingleTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  res.send(`${req.params.id}タスクを更新しました`);
};

const deleteTask = async (req, res) => {
  res.send(`${req.params.id}タスクを削除しました`);
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
