var whisper = function (message) {
	console.log('proclaiming: ' + message);
};

exports.softly = whisper;

exports.loudly = function (message) {
	console.log('PROCLAIMING: ' + message);
};


//this can re-written the same to save space as?  :
/*
exports.softly = function (message) {
	console.log('proclaiming: ' + message);
};

exports.loudly = function (message) {
	console.log('PROCLAIMING: ' + message);
};
*/
