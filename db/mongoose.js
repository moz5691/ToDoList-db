const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useMongoClient: true
};

mongoose
  .connect(
    'mongodb://gt-user:gt13579@ds147589.mlab.com:47589/gt-code',
    // 'mongodb://localhost/todos',
    options
  )
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));

module.exports = { mongoose };
