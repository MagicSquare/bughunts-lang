// Generated from C:\WORKSPACE\bughunts-lang/antlr4/BugHunts.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BugHuntsListener = require('./BugHuntsListener').BugHuntsListener;
var grammarFileName = "BugHunts.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\7\37\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\3\2\6\2\f\n\2\r\2\16\2\r\3\3",
    "\3\3\5\3\22\n\3\3\4\3\4\3\5\3\5\6\5\30\n\5\r\5\16\5\31\3\5\3\5\3\5\3",
    "\5\2\2\6\2\4\6\b\2\2\35\2\13\3\2\2\2\4\21\3\2\2\2\6\23\3\2\2\2\b\25",
    "\3\2\2\2\n\f\5\4\3\2\13\n\3\2\2\2\f\r\3\2\2\2\r\13\3\2\2\2\r\16\3\2",
    "\2\2\16\3\3\2\2\2\17\22\5\6\4\2\20\22\5\b\5\2\21\17\3\2\2\2\21\20\3",
    "\2\2\2\22\5\3\2\2\2\23\24\7\5\2\2\24\7\3\2\2\2\25\27\7\3\2\2\26\30\5",
    "\4\3\2\27\26\3\2\2\2\30\31\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\33",
    "\3\2\2\2\33\34\7\4\2\2\34\35\7\6\2\2\35\t\3\2\2\2\5\r\21\31"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "')'" ];

var symbolicNames = [ 'null', 'null', 'null', "STRING", "NUMBER", "WS" ];

var ruleNames =  [ "program", "statement", "instruction", "repeat" ];

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
BugHuntsParser.STRING = 3;
BugHuntsParser.NUMBER = 4;
BugHuntsParser.WS = 5;

BugHuntsParser.RULE_program = 0;
BugHuntsParser.RULE_statement = 1;
BugHuntsParser.RULE_instruction = 2;
BugHuntsParser.RULE_repeat = 3;

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
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.statement();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BugHuntsParser.T__0 || _la===BugHuntsParser.STRING);
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
        this.state = 15;
        switch(this._input.LA(1)) {
        case BugHuntsParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 13;
            this.instruction();
            break;
        case BugHuntsParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
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
        this.state = 17;
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
    this.enterRule(localctx, 6, BugHuntsParser.RULE_repeat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.match(BugHuntsParser.T__0);
        this.state = 21; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 20;
            this.statement();
            this.state = 23; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BugHuntsParser.T__0 || _la===BugHuntsParser.STRING);
        this.state = 25;
        this.match(BugHuntsParser.T__1);
        this.state = 26;
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
