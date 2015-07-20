// Generated from C:\WORKSPACE\bughunts-lang/antlr4/BugHunts.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by BugHuntsParser.
function BugHuntsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

BugHuntsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
BugHuntsListener.prototype.constructor = BugHuntsListener;

// Enter a parse tree produced by BugHuntsParser#program.
BugHuntsListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#program.
BugHuntsListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#statement.
BugHuntsListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#statement.
BugHuntsListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#instruction.
BugHuntsListener.prototype.enterInstruction = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#instruction.
BugHuntsListener.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#functionDeclaration.
BugHuntsListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#functionDeclaration.
BugHuntsListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#functionInvocation.
BugHuntsListener.prototype.enterFunctionInvocation = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#functionInvocation.
BugHuntsListener.prototype.exitFunctionInvocation = function(ctx) {
};


// Enter a parse tree produced by BugHuntsParser#repeat.
BugHuntsListener.prototype.enterRepeat = function(ctx) {
};

// Exit a parse tree produced by BugHuntsParser#repeat.
BugHuntsListener.prototype.exitRepeat = function(ctx) {
};



exports.BugHuntsListener = BugHuntsListener;