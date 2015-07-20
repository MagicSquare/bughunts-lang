var BughuntsCompiler = require('./compiler/BughuntsCompiler').BugHuntsCompiler,
  BugHuntsIrVisitor = require('./compiler/BughuntsIrVisitor').BugHuntsIrVisitor;

exports.run = function(source, ladybug) {
  var compiler = new BughuntsCompiler();
  var irProgram = compiler.compile(source);
  if (compiler.compilationErrors().length === 0) {
    var irVisitor = new BugHuntsIrVisitor(ladybug);
    irVisitor.visitProgram(irProgram);
  } else {
    throw 'Compilation error detected, stopping the program.'
  }
};
