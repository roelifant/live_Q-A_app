const express = require('express');
const app = express();
const path = require('path');
const pug = require('pug');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public')); //vertelt waar de statische bestanden staan.

app.get('/', function (req, res) { //router voor index pagina
    //res.send('Hello World!')
    res.render('index', {});
})

app.get('/login', function (req, res) { //router voor "test" pagina
    res.render('login', {})
})

app.get('/signin', function (req, res) { //router voor "test" pagina
    res.render('signin', {})
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})