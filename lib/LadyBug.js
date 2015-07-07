var Interpreter = require('./Interpreter').Interpreter;
    Commands = require('./Commands');

var LadyBugEngine = function(handlers) {
  this.onMoveForward  = handlers.onMoveForward || function() {};
  this.onMoveBackward = handlers.onMoveBackward || function() {};
  this.onTurnLeft     = handlers.onTurnLeft || function() {};
  this.onTurnRight    = handlers.onTurnRight || function() {};
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
  var engine = new LadyBugEngine(handlers);
  var commands = Commands.commands(engine);
  this.interpreter = new Interpreter(commands);
};

LadyBug.prototype.run = function(source) {
  this.interpreter.run(source);
};

exports.LadyBug = LadyBug;