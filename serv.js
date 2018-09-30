var express = require('express')
var path = require('path');
var bodyParser = require("body-parser");

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


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

app.get('/sign', function(req, res) {
	res.sendFile(__dirname + '/sign.html');
});

app.post('/sign', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.sendFile('C:/Documents/Sublime/First/index.html');
})

app.listen(3000);