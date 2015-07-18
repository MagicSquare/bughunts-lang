'use strict';

var should = require('should');
var compiler = require('../lib/compiler/BughuntsCompiler');

var checkIfCompile = function (source) {
  try {
    compiler.compile(source);
    should.fail();
  } catch (err) {
    (err.message).should.be.equal('Compilation error');
  }
};

describe('Compiler', function () {
  it("Should be properly parsed and loaded", function () {
  checkIfCompile('(FO 4');
  });
});