var express = require('express')

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/1', function(req, res) {
	res.render('main', {lot: 'https://raw.githubusercontent.com/Egor14/web/master/yeezy_zebra.png', description: 'YEEZY BOOST 350 V2 "ZEBRA"'});
});

app.get('/2', function(req, res) {
	res.render('main', {lot: 'https://raw.githubusercontent.com/Egor14/web/master/jordan.png', description: 'NIKE AIR JORDAN'});
});

app.get('/3', function(req, res) {
	res.render('main', {lot: 'https://raw.githubusercontent.com/Egor14/web/master/air.png', description: 'NIKE AIR MAX'});
});

app.listen(3000);