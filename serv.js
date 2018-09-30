var express = require('express')
var path = require('path');
var bodyParser = require("body-parser");

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


var lot_1 = {
  name: "YEEZY BOOST 350 V2 'ZEBRA'",
  url: 'https://raw.githubusercontent.com/Egor14/web/master/yeezy_zebra.png',
  price : 200
};

var lot_2 = {
  name: "NIKE AIR JORDAN",
  url: 'https://raw.githubusercontent.com/Egor14/web/master/jordan.png',
  price : 100
};

var lot_3 = {
  name: "NIKE AIR MAX",
  url: 'https://raw.githubusercontent.com/Egor14/web/master/air.png',
  price : 70
};

var lot_1Json = JSON.stringify(lot_1);
var lot_2Json = JSON.stringify(lot_2);
var lot_3Json = JSON.stringify(lot_3);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

/*app.get('/1', function(req, res) {
	res.render('main', {lot: 'https://raw.githubusercontent.com/Egor14/web/master/yeezy_zebra.png', description: 'YEEZY BOOST 350 V2 "ZEBRA"'});
});

app.get('/2', function(req, res) {
	res.render('main', {lot: 'https://raw.githubusercontent.com/Egor14/web/master/jordan.png', description: 'NIKE AIR JORDAN'});
});

app.get('/3', function(req, res) {
	res.render('main', {lot: 'https://raw.githubusercontent.com/Egor14/web/master/air.png', description: 'NIKE AIR MAX'});
});*/

app.get('/1', function(req, res) {
	res.render('main', {lot: lot_1Json});
});

app.get('/2', function(req, res) {
	res.render('main', {lot: lot_2Json});
});

app.get('/3', function(req, res) {
	res.render('main', {lot: lot_3Json});
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