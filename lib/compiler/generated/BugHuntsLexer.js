// Generated from C:\WORKSPACE\bughunts-lang/antlr4/BugHunts.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\n/\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\6\7 \n\7\r\7",
    "\16\7!\3\b\6\b%\n\b\r\b\16\b&\3\t\6\t*\n\t\r\t\16\t+\3\t\3\t\2\2\n\3",
    "\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\3\2\5\4\2C\\c|\3\2\62;\5\2\13\f\17",
    "\17\"\"\61\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2",
    "\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\3\23\3\2\2\2\5\26\3\2\2\2",
    "\7\30\3\2\2\2\t\32\3\2\2\2\13\34\3\2\2\2\r\37\3\2\2\2\17$\3\2\2\2\21",
    ")\3\2\2\2\23\24\7H\2\2\24\25\7]\2\2\25\4\3\2\2\2\26\27\7_\2\2\27\6\3",
    "\2\2\2\30\31\7H\2\2\31\b\3\2\2\2\32\33\7*\2\2\33\n\3\2\2\2\34\35\7+",
    "\2\2\35\f\3\2\2\2\36 \t\2\2\2\37\36\3\2\2\2 !\3\2\2\2!\37\3\2\2\2!\"",
    "\3\2\2\2\"\16\3\2\2\2#%\t\3\2\2$#\3\2\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2",
    "\2\2\'\20\3\2\2\2(*\t\4\2\2)(\3\2\2\2*+\3\2\2\2+)\3\2\2\2+,\3\2\2\2",
    ",-\3\2\2\2-.\b\t\2\2.\22\3\2\2\2\6\2!&+\3\b\2\2"].join("");


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
BugHuntsLexer.T__2 = 3;
BugHuntsLexer.T__3 = 4;
BugHuntsLexer.T__4 = 5;
BugHuntsLexer.STRING = 6;
BugHuntsLexer.NUMBER = 7;
BugHuntsLexer.WS = 8;


BugHuntsLexer.modeNames = [ "DEFAULT_MODE" ];

BugHuntsLexer.literalNames = [ 'null', "'F['", "']'", "'F'", "'('", "')'" ];

BugHuntsLexer.symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 
                                'null', "STRING", "NUMBER", "WS" ];

BugHuntsLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "STRING", 
                            "NUMBER", "WS" ];

BugHuntsLexer.grammarFileName = "BugHunts.g4";



exports.BugHuntsLexer = BugHuntsLexer;

