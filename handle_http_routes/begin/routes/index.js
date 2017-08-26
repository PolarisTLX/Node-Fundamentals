
/*
 * GET home page.
 */

//need to go up one directory, so need to be '../'
var flight = require('./flight');

// flight objects

var flight1 = flight({
	number: 1,
	origin: 'LAX',
	destination: 'DCA',
	departs: '9AM',
	arrives: '4PM'
});

var flight2 = flight({
	number: 2,
	origin: 'LAX',
	destination: 'PDX',
	departs: '10AM',
	arrives: '12PM'
});

exports.flight1 = function(req, res){
  //title: 'Express'  makes the browser tab name to be 'Express'
  //res.render('index', { title: 'Express' });
  res.json(flight1.getInformation());
};

exports.flight2 = function(req, res){
  res.json(flight2.getInformation());
};
