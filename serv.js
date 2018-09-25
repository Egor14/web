const restify = require('restify');

const server = restify.createServer({
	name: 'My Server App',
	version: '1.0.0'
});

server.get('/hello', function (req, res, next){
	console.log('/hello .. was called');
	res.send('Hello world');
	return next();
});

server.get('/hello/:name', function (req, res, next){
	console.log('/hello' + req.params.name);
	res.send('Hello, ' + req.params.name);
	return next();
});

server.listen(8080,
	() => console.log('Server UP!'));