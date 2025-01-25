const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

// router.get('/', (req, res) =>{
// res.send('タスクを全て取得しました');
// })

router.get('/', getAllTasks);

router.get('/:id', getSingleTask);

router.post('/', createTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
