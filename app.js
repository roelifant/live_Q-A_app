const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const pug = require('pug');
const mongoose = require('mongoose');
const passport = require('passport');

mongoose.connect('mongodb://localhost/live_q-a_app', {
  useMongoClient: true,
});

//routes
const login = require('./app/routes/login.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public')); //vertelt waar de statische bestanden staan.

app.use("/", require('./app/routes/index'));
app.use("/login", login);

app.use('/', router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})