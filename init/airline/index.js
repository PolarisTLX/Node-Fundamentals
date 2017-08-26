let http = require('http');
let express = require('express');

let app = express();

/// is the current folder
app.get('/', function(req, res) {
  res.end('Airline');
});

http.createServer(app).listen(3000, 'localhost');
