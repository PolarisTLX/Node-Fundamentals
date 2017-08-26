//create 3 local variables
let number, origin, destination;

exports.setNumber = function (num) {
  number = num;
};

exports.setOrigin = function (orig) {
  origin = orig;
};

exports.setDestination = function (des) {
  destination = des;
};

exports.getInfo = function () {
  return {
    theNumber     : number,
    theOrigin     : origin,
    theDestination: destination
  };
};
