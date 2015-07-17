var antlr4 = require('antlr4/index'),
  BugHuntsListener = require('./generated/BugHuntsListener').BugHuntsListener,
  BugHuntsIr = require('./BugHuntsIr');

var ParseTreeToIr = function() {
  BugHuntsListener.call(this); // inherit default listener
  this.context = [];
  return this;
};

ParseTreeToIr.prototype = Object.create(BugHuntsListener.prototype);
ParseTreeToIr.prototype.constructor = BugHuntsListener;

// Enter a parse tree produced by BugHuntsParser#program.
ParseTreeToIr.prototype.enterProgram = function(ctx) {
  this.context.push(new BugHuntsIr.Program());
};

// Exit a parse tree produced by BugHuntsParser#program.
ParseTreeToIr.prototype.exitProgram = function(ctx) {
  this.program = this.context.pop();
};


// Enter a parse tree produced by BugHuntsParser#statement.
ParseTreeToIr.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#statement.
ParseTreeToIr.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#instruction.
ParseTreeToIr.prototype.enterInstruction = function(ctx) {
  var action = (ctx.action !== null) ? ctx.action.text : '??';
  this.context[this.context.length - 1].addStatement(new BugHuntsIr.Instruction(action));
};

// Exit a parse tree produced by BugHuntsParser#instruction.
ParseTreeToIr.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#repeat.
ParseTreeToIr.prototype.enterRepeat = function(ctx) {
  var times = (ctx.times !== null) ? parseInt(ctx.times.text) : 1;
  this.context.push(new BugHuntsIr.Repeat(times));
};

// Exit a parse tree produced by BugHuntsParser#repeat.
ParseTreeToIr.prototype.exitRepeat = function(ctx) {
  var repeat = this.context.pop();
  this.context[this.context.length - 1].addStatement(repeat);
};

ParseTreeToIr.prototype.transform = function(tree) {
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(this, tree);
  return this.program;
};

exports.ParseTreeToIr = ParseTreeToIr;