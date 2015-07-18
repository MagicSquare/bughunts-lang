var BugHuntsIrVisitor = function(ladybug) {
  this.ladybug = ladybug;
  return this;
};

BugHuntsIrVisitor.prototype.visitProgram = function (program) {
  for (var i = 0; i < program.statements.length; i++) {
    program.statements[i].accept(this);
  }
};

BugHuntsIrVisitor.prototype.visitRepeat = function (repeat) {
  for (var i = 0; i < repeat.times; i++) {
    for (var j = 0; j < repeat.statements.length; j++) {
      repeat.statements[j].accept(this);
    }
  }
};

BugHuntsIrVisitor.prototype.visitInstruction = function (instruction) {
  switch(instruction.action) {
    case 'FO':
      this.ladybug.moveForward(1);
      break;
    case 'BA':
      this.ladybug.moveBackward(1);
      break;
    case 'LE':
      this.ladybug.turnLeft(1);
      break;
    case 'RI':
      this.ladybug.turnRight(1);
      break;
    default:
    console.log('Action ' + instruction.action + 'unknown');
  }
};

exports.BugHuntsIrVisitor = BugHuntsIrVisitor;