const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const Schema = mongoose.Schema;
// create schema
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

// mongoose.model('todos', ToDosSchema);
// const Todo = mongoose.model('Todo', {
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: Number
//   }
// });

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
