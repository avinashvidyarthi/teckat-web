// requiring node module
let express = require('express');
let path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

//creating express app
let app = express();

// defining port number
const PORT = process.env.PORT || 80;

// requiring routing
let indexRouter = require('./routes');

// for logging perpurse
app.use(logger('dev'));

// setting favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// plublic directry setup
app.use(express.static(path.join(__dirname, 'public')));

// view directory setup
app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.set('view engine', 'ejs');

// main routing
app.use('/', indexRouter);

// assgining port number
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));