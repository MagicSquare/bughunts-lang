var antlr4 = require('antlr4/index'),
    ParseTreeBuilder = require('./ParseTreeBuilder'),
    RuleListener = require('./RuleListener').RuleListener;

var Interpreter = function (commands) {
  this.commands = commands || {};
};

Interpreter.prototype.run = function(source) {
  var tree = ParseTreeBuilder.buildParseTree(source);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(new RuleListener(this.commands), tree);
};

exports.Interpreter = Interpreter;