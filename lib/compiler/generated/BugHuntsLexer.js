// Generated from C:\WORKSPACE\bughunts-lang/antlr4/BugHunts.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\7\"\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\3\3\3\3",
    "\4\6\4\23\n\4\r\4\16\4\24\3\5\6\5\30\n\5\r\5\16\5\31\3\6\6\6\35\n\6",
    "\r\6\16\6\36\3\6\3\6\2\2\7\3\3\5\4\7\5\t\6\13\7\3\2\5\4\2C\\c|\3\2\62",
    ";\5\2\13\f\17\17\"\"$\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2",
    "\2\2\13\3\2\2\2\3\r\3\2\2\2\5\17\3\2\2\2\7\22\3\2\2\2\t\27\3\2\2\2\13",
    "\34\3\2\2\2\r\16\7*\2\2\16\4\3\2\2\2\17\20\7+\2\2\20\6\3\2\2\2\21\23",
    "\t\2\2\2\22\21\3\2\2\2\23\24\3\2\2\2\24\22\3\2\2\2\24\25\3\2\2\2\25",
    "\b\3\2\2\2\26\30\t\3\2\2\27\26\3\2\2\2\30\31\3\2\2\2\31\27\3\2\2\2\31",
    "\32\3\2\2\2\32\n\3\2\2\2\33\35\t\4\2\2\34\33\3\2\2\2\35\36\3\2\2\2\36",
    "\34\3\2\2\2\36\37\3\2\2\2\37 \3\2\2\2 !\b\6\2\2!\f\3\2\2\2\6\2\24\31",
    "\36\3\b\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function BugHuntsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

BugHuntsLexer.prototype = Object.create(antlr4.Lexer.prototype);
BugHuntsLexer.prototype.constructor = BugHuntsLexer;

BugHuntsLexer.EOF = antlr4.Token.EOF;
BugHuntsLexer.T__0 = 1;
BugHuntsLexer.T__1 = 2;
BugHuntsLexer.STRING = 3;
BugHuntsLexer.NUMBER = 4;
BugHuntsLexer.WS = 5;


BugHuntsLexer.modeNames = [ "DEFAULT_MODE" ];

BugHuntsLexer.literalNames = [ 'null', "'('", "')'" ];

BugHuntsLexer.symbolicNames = [ 'null', 'null', 'null', "STRING", "NUMBER", 
                                "WS" ];

BugHuntsLexer.ruleNames = [ "T__0", "T__1", "STRING", "NUMBER", "WS" ];

BugHuntsLexer.grammarFileName = "BugHunts.g4";



exports.BugHuntsLexer = BugHuntsLexer;

