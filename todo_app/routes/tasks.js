const express = require('express');
const router = express.Router();

router.get('/api/v1/tasks', (req, res) => {
  res.send('タスクを全て取得しました');
});

router.get('/api/v1/tasks/:id', (req, res) => {
  res.send(`${req.params.id}タスクを取得しました`);
});

router.patch('/api/v1/tasks/:id', (req, res) => {
  res.send(`${req.params.id}タスクを更新しました`);
});

router.delete('/api/v1/tasks/:id', (req, res) => {
  res.send(`${req.params.id}タスクを削除しました`);
});

router.post('/api/v1/tasks', (req, res) => {
  res.send('タスクを新規作成しました');
});

module.exports = router;
