var antlr4 = require('antlr4/index'),
    BugHuntsLexer = require('./generated/BugHuntsLexer').BugHuntsLexer,
    BugHuntsParser = require('./generated/BugHuntsParser').BugHuntsParser,
    ParseTreeToIr = require('./ParseTreeToIr').ParseTreeToIr,
    DefaultErrorStrategy = require('antlr4/error/ErrorStrategy').DefaultErrorStrategy;

exports.compile = function(source) {
  var astProgram = buildParseTree(source);
  var irProgram = new ParseTreeToIr().transform(astProgram);
  return irProgram;
};

var BasicErrorListener = function () {
  DefaultErrorStrategy.call(this);
  return this;
};

BasicErrorListener.prototype = Object.create(DefaultErrorStrategy.prototype);
BasicErrorListener.prototype.constructor = BasicErrorListener;

BasicErrorListener.prototype.reportError = function(recognizer, e) {
  throw new Error("Compilation error");
};

var buildParseTree = function (source) {
  var chars = new antlr4.InputStream(source);
  var lexer = new BugHuntsLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new BugHuntsParser(tokens);
  parser._errHandler = new BasicErrorListener();
  return parser.program();
};