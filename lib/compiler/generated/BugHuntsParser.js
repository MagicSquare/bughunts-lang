// Generated from C:\WORKSPACE\bughunts-lang/antlr4/BugHunts.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BugHuntsListener = require('./BugHuntsListener').BugHuntsListener;
var grammarFileName = "BugHunts.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\n/\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\6\2\20\n\2",
    "\r\2\16\2\21\3\3\3\3\3\3\3\3\5\3\30\n\3\3\4\3\4\3\5\3\5\6\5\36\n\5\r",
    "\5\16\5\37\3\5\3\5\3\6\3\6\3\7\3\7\6\7(\n\7\r\7\16\7)\3\7\3\7\3\7\3",
    "\7\2\2\b\2\4\6\b\n\f\2\2.\2\17\3\2\2\2\4\27\3\2\2\2\6\31\3\2\2\2\b\33",
    "\3\2\2\2\n#\3\2\2\2\f%\3\2\2\2\16\20\5\4\3\2\17\16\3\2\2\2\20\21\3\2",
    "\2\2\21\17\3\2\2\2\21\22\3\2\2\2\22\3\3\2\2\2\23\30\5\6\4\2\24\30\5",
    "\b\5\2\25\30\5\n\6\2\26\30\5\f\7\2\27\23\3\2\2\2\27\24\3\2\2\2\27\25",
    "\3\2\2\2\27\26\3\2\2\2\30\5\3\2\2\2\31\32\7\b\2\2\32\7\3\2\2\2\33\35",
    "\7\3\2\2\34\36\5\4\3\2\35\34\3\2\2\2\36\37\3\2\2\2\37\35\3\2\2\2\37",
    " \3\2\2\2 !\3\2\2\2!\"\7\4\2\2\"\t\3\2\2\2#$\7\5\2\2$\13\3\2\2\2%\'",
    "\7\6\2\2&(\5\4\3\2\'&\3\2\2\2()\3\2\2\2)\'\3\2\2\2)*\3\2\2\2*+\3\2\2",
    "\2+,\7\7\2\2,-\7\t\2\2-\r\3\2\2\2\6\21\27\37)"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'F['", "']'", "'F'", "'('", "')'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', "STRING", 
                      "NUMBER", "WS" ];

var ruleNames =  [ "program", "statement", "instruction", "functionDeclaration", 
                   "functionInvocation", "repeat" ];

function BugHuntsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BugHuntsParser.prototype = Object.create(antlr4.Parser.prototype);
BugHuntsParser.prototype.constructor = BugHuntsParser;

Object.defineProperty(BugHuntsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BugHuntsParser.EOF = antlr4.Token.EOF;
BugHuntsParser.T__0 = 1;
BugHuntsParser.T__1 = 2;
BugHuntsParser.T__2 = 3;
BugHuntsParser.T__3 = 4;
BugHuntsParser.T__4 = 5;
BugHuntsParser.STRING = 6;
BugHuntsParser.NUMBER = 7;
BugHuntsParser.WS = 8;

BugHuntsParser.RULE_program = 0;
BugHuntsParser.RULE_statement = 1;
BugHuntsParser.RULE_instruction = 2;
BugHuntsParser.RULE_functionDeclaration = 3;
BugHuntsParser.RULE_functionInvocation = 4;
BugHuntsParser.RULE_repeat = 5;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugHuntsParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.exitProgram(this);
	}
};




BugHuntsParser.ProgramContext = ProgramContext;

BugHuntsParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BugHuntsParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 12;
            this.statement();
            this.state = 15; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BugHuntsParser.T__0) | (1 << BugHuntsParser.T__2) | (1 << BugHuntsParser.T__3) | (1 << BugHuntsParser.STRING))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugHuntsParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.instruction = function() {
    return this.getTypedRuleContext(InstructionContext,0);
};

StatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

StatementContext.prototype.functionInvocation = function() {
    return this.getTypedRuleContext(FunctionInvocationContext,0);
};

StatementContext.prototype.repeat = function() {
    return this.getTypedRuleContext(RepeatContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.exitStatement(this);
	}
};




BugHuntsParser.StatementContext = StatementContext;

BugHuntsParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BugHuntsParser.RULE_statement);
    try {
        this.state = 21;
        switch(this._input.LA(1)) {
        case BugHuntsParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 17;
            this.instruction();
            break;
        case BugHuntsParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 18;
            this.functionDeclaration();
            break;
        case BugHuntsParser.T__2:
            this.enterOuterAlt(localctx, 3);
            this.state = 19;
            this.functionInvocation();
            break;
        case BugHuntsParser.T__3:
            this.enterOuterAlt(localctx, 4);
            this.state = 20;
            this.repeat();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugHuntsParser.RULE_instruction;
    this.action = null; // Token
    return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.STRING = function() {
    return this.getToken(BugHuntsParser.STRING, 0);
};

InstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.enterInstruction(this);
	}
};

InstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.exitInstruction(this);
	}
};




BugHuntsParser.InstructionContext = InstructionContext;

BugHuntsParser.prototype.instruction = function() {

    var localctx = new InstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BugHuntsParser.RULE_instruction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        localctx.action = this.match(BugHuntsParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugHuntsParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




BugHuntsParser.FunctionDeclarationContext = FunctionDeclarationContext;

BugHuntsParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BugHuntsParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.match(BugHuntsParser.T__0);
        this.state = 27; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 26;
            this.statement();
            this.state = 29; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BugHuntsParser.T__0) | (1 << BugHuntsParser.T__2) | (1 << BugHuntsParser.T__3) | (1 << BugHuntsParser.STRING))) !== 0));
        this.state = 31;
        this.match(BugHuntsParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionInvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugHuntsParser.RULE_functionInvocation;
    return this;
}

FunctionInvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionInvocationContext.prototype.constructor = FunctionInvocationContext;


FunctionInvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.enterFunctionInvocation(this);
	}
};

FunctionInvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.exitFunctionInvocation(this);
	}
};




BugHuntsParser.FunctionInvocationContext = FunctionInvocationContext;

BugHuntsParser.prototype.functionInvocation = function() {

    var localctx = new FunctionInvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BugHuntsParser.RULE_functionInvocation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(BugHuntsParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RepeatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BugHuntsParser.RULE_repeat;
    this.times = null; // Token
    return this;
}

RepeatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatContext.prototype.constructor = RepeatContext;

RepeatContext.prototype.NUMBER = function() {
    return this.getToken(BugHuntsParser.NUMBER, 0);
};

RepeatContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

RepeatContext.prototype.enterRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.enterRepeat(this);
	}
};

RepeatContext.prototype.exitRule = function(listener) {
    if(listener instanceof BugHuntsListener ) {
        listener.exitRepeat(this);
	}
};




BugHuntsParser.RepeatContext = RepeatContext;

BugHuntsParser.prototype.repeat = function() {

    var localctx = new RepeatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BugHuntsParser.RULE_repeat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(BugHuntsParser.T__3);
        this.state = 37; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 36;
            this.statement();
            this.state = 39; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BugHuntsParser.T__0) | (1 << BugHuntsParser.T__2) | (1 << BugHuntsParser.T__3) | (1 << BugHuntsParser.STRING))) !== 0));
        this.state = 41;
        this.match(BugHuntsParser.T__4);
        this.state = 42;
        localctx.times = this.match(BugHuntsParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.BugHuntsParser = BugHuntsParser;
