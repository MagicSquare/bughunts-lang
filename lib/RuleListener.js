var BugHuntsListener = require('../antlr4/generated/BugHuntsListener').BugHuntsListener;

// This class defines a complete listener for a parse tree produced by BugHuntsParser.
var RuleListener = function(commands) {
  BugHuntsListener.call(this); // inherit default listener
  //Override default listener with the runtime mapping commands
  for (var key in commands) {
    this[key] = commands[key];
  }
  return this;
};

RuleListener.prototype = Object.create(BugHuntsListener.prototype);
RuleListener.prototype.constructor = RuleListener;

exports.RuleListener = RuleListener;