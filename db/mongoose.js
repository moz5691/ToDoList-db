const mongoose = require('mongoose');
/* map global promise */
mongoose.Promise = global.Promise;

const options = {
  useNewUrlParser: true,
  useMongoClient: true
  // autoIndex: false, // Don't build indexes
  // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  // reconnectInterval: 500, // Reconnect every 500ms
  // poolSize: 10, // Maintain up to 10 socket connections
  // // If not connected, return errors immediately rather than waiting for reconnect
  // bufferMaxEntries: 0,
  // connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  // socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
  //  family: 4 // Use IPv4, skip trying IPv6
};

mongoose
  .connect(
    'mongodb://gt-user:gt13579@ds147589.mlab.com:47589/gt-code',
    options
  )
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));

module.exports = { mongoose };

//mongodb://<dbuser>:<dbpassword>@ds147589.mlab.com:47589/gt-code
// .connect('mongodb://localhost/todos')
