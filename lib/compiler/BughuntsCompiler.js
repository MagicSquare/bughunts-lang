var antlr4 = require('antlr4/index'),
    BugHuntsLexer = require('./generated/BugHuntsLexer').BugHuntsLexer,
    BugHuntsParser = require('./generated/BugHuntsParser').BugHuntsParser,
    ParseTreeToIr = require('./ParseTreeToIr').ParseTreeToIr,
    DefaultErrorStrategy = require('antlr4/error/ErrorStrategy').DefaultErrorStrategy;

var BasicErrorListener = function () {
  this.errors = [];
  DefaultErrorStrategy.call(this);
  return this;
};

BasicErrorListener.prototype = Object.create(DefaultErrorStrategy.prototype);
BasicErrorListener.prototype.constructor = BasicErrorListener;

BasicErrorListener.prototype.reportError = function(recognizer, e) {
  this.errors.push(e);
};

var buildParseTree = function (source, errorHandler) {
  var chars = new antlr4.InputStream(source);
  var lexer = new BugHuntsLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new BugHuntsParser(tokens);
  parser._errHandler = errorHandler;
  return parser.program();
};

var BugHuntsCompiler = function() {
  this.errorHandler = new BasicErrorListener();
  return this;
};

BugHuntsCompiler.prototype.compile = function(source) {
  var astProgram = buildParseTree(source, this.errorHandler);
  var irProgram = new ParseTreeToIr().transform(astProgram);
  return irProgram;
};

BugHuntsCompiler.prototype.compilationErrors = function () {
  return this.errorHandler.errors;
};

exports.BugHuntsCompiler = BugHuntsCompiler;