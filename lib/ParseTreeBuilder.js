var antlr4 = require('antlr4/index'),
    BugHuntsLexer = require('../antlr4/generated/BugHuntsLexer').BugHuntsLexer,
    BugHuntsParser = require('../antlr4/generated/BugHuntsParser').BugHuntsParser;

exports.buildParseTree = function(source) {
  var chars = new antlr4.InputStream(source);
  var lexer = new BugHuntsLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new BugHuntsParser(tokens);
  return parser.items();
};