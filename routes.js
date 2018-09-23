const express = require('express');
const router = express.Router();
const Todo = require('./models/todos');

router.use((req, res, next) => {
  console.log('Time', Date.now());
  next();
});
// Home route, render with the current DB.
router.get('/', (req, res) => {
  Todo.find({})
    .then(toDos => {
      //res.send({ todos });
      res.render('home', { toDos: toDos });
    })
    .catch(err => res.status(400).send(err));
});

// Add process, tes purpose
router.post('/api', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: Date.now()
  });
  console.log('todo post');
  todo
    .save()
    .then(todos => res.redirect('/'))
    .catch(err => res.status.send(err));
});

// Edit process, not using now.
router.put('/api/:id', (req, res) => {
  Todo.findOne({
    _id: req.params.id
  }).then(todos => {
    todos.text = req.body.text;
    todos.completed = req.body.completed;
    todos.completedAt = req.body.completedAt;
    todos.save().then(todo => {
      res.json(todos);
    });
  });
});

// Delete process, Use for DELETE Button
router.delete('/api/delete/:id', (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => {
      res.status.json({ err: err });
    });
});

// Make sure no "UPDATE" method with app.xxxx, use "PUT" instead.
router.put('/api/update/:id', (req, res) => {
  const data = req.body;
  console.log(data.completedCheck);
  Todo.updateOne(
    { _id: req.params.id },
    { $set: { completed: data.completedCheck } }
  )
    .then(() => {
      console.log('sucess');
    })
    .catch(err => {
      res.status.json({ err: err });
    });
});

//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res) {
  res.send('what???', 404);
});

module.exports = router;
