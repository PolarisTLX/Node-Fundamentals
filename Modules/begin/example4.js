//require('os') is a built-in key-term
//this is how node finds out what Operating System the user is using
var os = require('os');

console.log('This code is running on: ' + os.type());
