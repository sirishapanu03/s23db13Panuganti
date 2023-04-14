var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cakesRouter = require('./routes/cakes');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var Cake = require('./models/cakes');
var resourceRouter = require('./routes/resource');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cakes', cakesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


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


// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await Cake.deleteMany();
 let cake1 = new Cake({cake_flavour:"Vanilla", weight:'2lb', cake_cost:20});
 cake1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });

 let cake2 = new
 Cake({cake_flavour:"Chocolate", weight:'1lb', cake_cost:20});
  cake2.save().then(doc=>{
    console.log("Second object saved")}
    ).catch(err=>{
    console.error(err)
    });

  let cake3 = new
  Cake({cake_flavour:"Oreo", weight:'3lb', cake_cost:20});
   cake3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)
    });

}
let reseed = true;
if (reseed) { recreateDB();}



 

module.exports = app;
