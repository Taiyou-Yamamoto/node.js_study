const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'タスク名を入れてください'],
    trim: true,
    maxlength: [20, 'タスク名は２０文字以内で決めてください'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
}); //ES6

module.exports = mongoose.model('Task', TaskSchema);
