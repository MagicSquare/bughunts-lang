var Instruction = function(action) {
  this.action = action;
  return this;
};

Instruction.prototype.accept = function(irVisitor) {
  irVisitor.visitInstruction(this);
};

exports.Instruction = Instruction;