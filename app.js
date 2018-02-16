var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var VerifyToken = require('./controllers/VerifyToken');

var UserController = require('./controllers/UserController');
app.use('/users', UserController);

var AuthController = require('./controllers/AuthController');
app.use('/api/auth', AuthController);

app.use(bodyParser.urlencoded({ extended: true }));

// app.set('views', __dirname + '/public/views');

app.set('view engine', '.html')

function sendViewMiddleware(req, res, next) {
  res.sendView = function(view) {
    return res.sendFile(__dirname + "/views/" + view);
  }
  next();
}
app.use(sendViewMiddleware);
app.use(express.static(__dirname + '/views'));

app.get('/inicio',function(req,res){
  res.sendView('inicio.html');
})



module.exports = app;
