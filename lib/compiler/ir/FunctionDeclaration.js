var FunctionDeclaration = function() {
  this.name = 'F';
  this.statements = [];
  return this;
};

FunctionDeclaration.prototype.addStatement = function(statement) {
  this.statements.push(statement);
};

FunctionDeclaration.prototype.accept = function(irVisitor) {
  irVisitor.visitFunctionDeclaration(this);
};

exports.FunctionDeclaration = FunctionDeclaration;