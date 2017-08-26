prefix = 'Relaying: ';  //this allows prefix to be re-written in other modules
//let prefix = 'Relaying: ';  //this PREVENTS prefix from being re-written in order modules

module.exports = function (message) {
	//this looks for local variables of prefix and message first (example let prefix)
	//if prefix is just a global variable (no "let"), then it might be over-written by another modules importing this module
	console.log(prefix + message);
};
