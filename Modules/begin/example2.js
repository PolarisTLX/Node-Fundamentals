var relay = require('./relay');
//NOTE  node will look in a folder called relay (./relay)
//and will EITHER select a file called relay.js
//OR    -  if not exists, a file called index.js

prefix = "Attention: ";
//let prefix = "Attention: ";  //let  makes this a local varialbe only and so it will not over-write "prefix" in other modules

relay('Box office closes at 10PM');
