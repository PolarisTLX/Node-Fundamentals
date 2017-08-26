var http = require('http');

//this section (before http.createServer)
//is where you would put your application or your page
var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Welcome to Node Training and Fundamentals\n");
};

var server = http.createServer(handleRequest);

//'localhost'  CANNOT, repeat CANOOT! be set to anything you like
server.listen(3000, 'localhost');
//server.listen(3000, 'whatever');  //THIS WILL NOT WORK
