const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false
  },
  completedAt: {
    type: Number,
    required: false
  }
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
