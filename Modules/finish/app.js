//this will target the file in the sub folder flight
//which will be eithe flight.js or index.js
//the name whould match what is in teh package.json file (the section "main: index.js")
let flight = require('./flight');

//these three functions we wrote in index.js
flight.setOrigin('Toronto');
flight.setDestination('Guelph');
flight.setNumber(356);

//.getInfo is another function we wrote in app.js that creates an object with the information we told it
console.log(flight.getInfo());


//EXAMPLE TO DEMOSTRATE CASHING
let anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());
