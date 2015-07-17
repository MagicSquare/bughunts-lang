var Repeat = function(times) {
  this.times = times;
  this.statements = [];
  return this;
};

Repeat.prototype.addStatement = function(statement) {
  this.statements.push(statement);
};

Repeat.prototype.accept = function(irVisitor) {
  irVisitor.visitRepeat(this);
};

exports.Repeat = Repeat;