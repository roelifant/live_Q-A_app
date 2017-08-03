const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const pug = require('pug');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public')); //vertelt waar de statische bestanden staan.

router.get('/', function (req, res) { //router voor index pagina
    //res.send('Hello World!')
    res.render('index', {});
})

router.get('/login', function (req, res) { //router voor "login" pagina
    res.render('login', {});
})

router.get('/signin', function (req, res) { //router voor "signin" pagina
    res.render('signin', {});
})

app.use('/', router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})