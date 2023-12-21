var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var productRouter = require('./routes/product');
var categoryRouter = require('./routes/category');
var brandRouter = require('./routes/brand');
const { engine, create } = require('express-handlebars');

const app = express();

const hbs = require('express-handlebars').create({
  helpers: {
    isIdEqual: function (id1, id2) {
      return id1.toString() === id2.toString();
    },
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// 2
var mongoose = require('mongoose');
var url = "mongodb+srv://asm2cloud:asm2cloud@chieulvgch211406.z7lcgau.mongodb.net/ToyStore";
mongoose.set('strictQuery', true); 
mongoose.connect(url)
  .then(() => console.log('Connect DB successfully'))
  .catch((err) => console.log(err));

// 3
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
