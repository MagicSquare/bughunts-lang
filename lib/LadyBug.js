var Runtime = require('./BughuntsRuntime');

var LadyBugEngine = function(handlers) {
  this.onMoveForward  = handlers.onMoveForward || function() {};
  this.onMoveBackward = handlers.onMoveBackward || function() {};
  this.onTurnLeft     = handlers.onTurnLeft || function() {};
  this.onTurnRight    = handlers.onTurnRight || function() {};
  this.onIncrementInstructionCounter    = handlers.onIncrementInstructionCounter || function() {};
};

LadyBugEngine.prototype.incrementInstructionCounter = function(times) {
  this.onIncrementInstructionCounter(times);
};

LadyBugEngine.prototype.moveForward = function (times, location) {
  this.onMoveForward(times, location);
};

LadyBugEngine.prototype.moveBackward = function (times, location) {
  this.onMoveBackward(times, location);
};

LadyBugEngine.prototype.turnLeft = function (times, location) {
  this.onTurnLeft(times, location);
};

LadyBugEngine.prototype.turnRight = function (times, location) {
  this.onTurnRight(times, location);
};


var LadyBug = function(handlers) {
  this.engine = new LadyBugEngine(handlers);
};

LadyBug.prototype.run = function(source) {
  Runtime.run(source, this.engine);
};

exports.LadyBug = LadyBug;