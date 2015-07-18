var Program = function() {
  this.statements = [];
  return this;
};

Program.prototype.addStatement = function(statement) {
  this.statements.push(statement);
};

Program.prototype.accept = function(irVisitor) {
  irVisitor.visitProgram(this);
};

exports.Program = Program;