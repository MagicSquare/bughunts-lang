var FunctionInvocation = function() {
  this.name = 'F';
  return this;
};

FunctionInvocation.prototype.accept = function(irVisitor) {
  irVisitor.visitFunctionInvocation(this);
};

exports.FunctionInvocation = FunctionInvocation;