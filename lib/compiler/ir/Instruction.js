var Instruction = function(action, location) {
  this.action = action;
  this.location = location;
  return this;
};

Instruction.prototype.accept = function(irVisitor) {
  irVisitor.visitInstruction(this);
};

exports.Instruction = Instruction;