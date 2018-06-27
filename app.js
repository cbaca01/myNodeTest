var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
/*
var index = require('./routes/index');
var users = require('./routes/users');
*/
var app = express();

var handlebars = require('handlebars');
var express = require('express'); //BELOW THIS LINE
var exphbs  = require('express-handlebars'); //ADD THIS
var helpers = require('handlebars-helpers')();
var layouts = require('handlebars-layouts');
 
app.engine('hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'layout',
  partialsDir: [ path.join(__dirname, 'views/partials'), path.join(__dirname, 'views/administration') ],
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

handlebars.registerHelper(layouts(handlebars));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// include other libraries
// var routes = require('./routes/routes')(app); //This is the extra line

// importing our routes
fs = require('fs');
var ignoreArray = ['index.js', 'routes.js', 'users.js'];
var routesList = fs.readdirSync('./routes/');

// var routesList = ['properties', 'login'];
for (var i in routesList) {
	if (ignoreArray.indexOf(routesList[i]) == -1) {
    require('./routes/' + routesList[i])(app);
	}
}

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.log(err);

  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
