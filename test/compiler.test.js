'use strict';

var should = require('should');
var BugHuntsCompiler = require('../lib/compiler/BughuntsCompiler').BugHuntsCompiler;

var reportParsingErrors = function (source) {
  var compiler = new BugHuntsCompiler();
  compiler.compile(source);
  return compiler.compilationErrors();
};

var checkIfCompile = function (source) {
  (reportParsingErrors(source).length).should.be.equal(0);
};

describe('Compiler', function () {
  it('should fail a syntax error detected', function () {
    var errors = reportParsingErrors('(FO 4');
    (errors.length).should.be.equal(1);
  });
  it('should parse a function declaration', function () {
    checkIfCompile('F[ FO RI ] ( F ) 4');
  });
});