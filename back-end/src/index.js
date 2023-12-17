// EXPRESS DEFAULT // 
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// ROUTERS //
const indexRouter = require('./routes/index');
const pokemonRouter = require('./routes/pokemon');

//* APP SETUP *//
const app = express();

// CONFIG
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//* VIEW ENGINE SETUP *//
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//* JSON PARSER *// 
// req.body from express //! IMPORTANT
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* DB CONNECTION *//
const mongoConfig = require('./db/connection/mongo-config');
mongoConfig.connect();
const db = mongoConfig.mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//* MIDELWARE *//
app.use('/', indexRouter);
app.use('/pokemon', pokemonRouter);

//* ERROR HANDLING *//
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// INIT SERVER
app.listen(app.get('port'),()=>{
  console.log(`Server listening on port ${app.get('port')}`);
});
