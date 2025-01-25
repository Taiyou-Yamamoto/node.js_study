const getAllTasks = (req, res) => {
  res.send('タスクを全て取得しました');
};
const createTask = (req, res) => {
  res.send('タスクを新規作成しました');
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
