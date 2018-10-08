var express = require('express');
var Pusher = require('pusher');
var path = require('path');
var bodyParser = require("body-parser");
var msgpack = require("msgpack-lite");

var pusher = new Pusher({
  appId: '616886',
  key: '861cada503bdd961e815',
  secret: 'a542ddc62ab5800362df',
  cluster: 'eu',
  encrypted: true
});

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


var lot_1 = {
  name: "YEEZY BOOST 350 V2 'ZEBRA'",
  url: 'https://raw.githubusercontent.com/Egor14/web/master/yeezy_zebra.png',
  price : 200,
  lotID: 1,
  time: '00:50'
};

var lot_2 = {
  name: "NIKE AIR JORDAN",
  url: 'https://raw.githubusercontent.com/Egor14/web/master/jordan.png',
  price : 100,
  lotID: 2,
  time: '00:50'
};

var lot_3 = {
  name: "NIKE AIR MAX",
  url: 'https://raw.githubusercontent.com/Egor14/web/master/air.png',
  price : 70,
  lotID: 3,
  time: '00:50'
};

function pack(msgpack, id){
if (id == '1') {
    var lot_1Json = JSON.stringify(lot_1);
    var lot_1messPack = msgpack.encode(lot_1Json);
    return lot_1messPack;
  } else if (id == '2') {
    var lot_2Json = JSON.stringify(lot_2);
    var lot_2messPack = msgpack.encode(lot_2Json);
    return lot_2messPack;
  } else if (id == '3') {
    var lot_3Json = JSON.stringify(lot_3);
    var lot_3messPack = msgpack.encode(lot_3Json);
    return lot_3messPack;
  }  

  /*var lot_1Json = JSON.stringify(lot_1);
  var lot_2Json = JSON.stringify(lot_2);
  var lot_3Json = JSON.stringify(lot_3);

  var lot_1messPack = msgpack.encode(lot_1Json);
  var lot_2messPack = msgpack.encode(lot_2Json);
  var lot_3messPack = msgpack.encode(lot_3Json);

  return lot_1messPack;*/
}


var lot_1Json = JSON.stringify(lot_1);
var lot_2Json = JSON.stringify(lot_2);
var lot_3Json = JSON.stringify(lot_3);

var lot_1messPack = msgpack.encode(lot_1Json);
var lot_2messPack = msgpack.encode(lot_2Json);
var lot_3messPack = msgpack.encode(lot_3Json);


app.get('/', function(req, res) {
  /*pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
  });*/
	res.sendFile(__dirname + '/index.html');
});

app.get('/1', function(req, res) {
	res.render('main', {lot: lot_1messPack, msgpack: msgpack});
});

app.get('/2', function(req, res) {
	res.render('main', {lot: lot_2messPack, msgpack: msgpack});
});

app.get('/3', function(req, res) {
	res.render('main', {lot: lot_3messPack, msgpack: msgpack});
});

app.get('/sign', function(req, res) {
	res.sendFile(__dirname + '/sign.html');
});

app.post('/sign', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.sendFile(__dirname + '/index.html');
})

app.post('/update/:id', urlencodedParser, function (req, res) {
  if (req.params.id == '1') {
    lot_1.price += Number(req.body.Price);
    lot_1messPack = pack(msgpack, req.params.id);
    res.redirect('/1');
  } else if (req.params.id == '2') {
    lot_2.price += Number(req.body.Price);
    lot_2messPack = pack(msgpack, req.params.id);
    res.redirect('/2');
  } else if (req.params.id == '3') {
    lot_3.price += Number(req.body.Price);
    lot_3messPack = pack(msgpack, req.params.id);
    res.redirect('/3');
  }  
})

app.listen(3000);