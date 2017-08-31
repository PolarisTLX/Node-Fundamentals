var number, origin, destination;

exports.setNumber = function (num) {
	number = num;
};

exports.setOrigin = function (o) {
	origin = o;
};

exports.setDestination = function (d) {
	destination = d;
};

exports.getInfo = function () {
	return {
		ChosenNumber      : number,
		ChosenOrigin      : origin,
		ChosenDestination : destination
	};
};
