const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const { mongoose } = require('./db/mongoose');
const Todo = require('./models/todos');
const routes = require('./routes.js');
const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});
