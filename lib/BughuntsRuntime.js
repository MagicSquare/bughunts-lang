var BughuntsCompiler = require('./compiler/BughuntsCompiler'),
  BugHuntsIrVisitor = require('./compiler/BughuntsIrVisitor').BugHuntsIrVisitor;

exports.run = function(source, ladybug) {
  var irProgram = BughuntsCompiler.compile(source);
  var irVisitor = new BugHuntsIrVisitor(ladybug);
  irVisitor.visitProgram(irProgram);
};
