var Runtime = require('./BughuntsRuntime');

var LadyBugEngine = function(handlers) {
  this.onMoveForward  = handlers.onMoveForward || function() {};
  this.onMoveBackward = handlers.onMoveBackward || function() {};
  this.onTurnLeft     = handlers.onTurnLeft || function() {};
  this.onTurnRight    = handlers.onTurnRight || function() {};
  this.onIncrementInstructionCounter    = handlers.onIncrementInstructionCounter || function() {};
};

LadyBugEngine.prototype.incrementInstructionCounter = function() {
  this.onIncrementInstructionCounter();
};

LadyBugEngine.prototype.moveForward = function (times) {
  this.onMoveForward(times);
};

LadyBugEngine.prototype.moveBackward = function (times) {
  this.onMoveBackward(times);
};

LadyBugEngine.prototype.turnLeft = function (times) {
  this.onTurnLeft(times);
};

LadyBugEngine.prototype.turnRight = function (times) {
  this.onTurnRight(times);
};


var LadyBug = function(handlers) {
  this.engine = new LadyBugEngine(handlers);
};

LadyBug.prototype.run = function(source) {
  Runtime.run(source, this.engine);
};

exports.LadyBug = LadyBug;