var BugHuntsIrVisitor = function(ladybug) {
  this.ladybug = ladybug;
  this.functions = {};
  this.instructionIsPartOfStructure = false;
  return this;
};

BugHuntsIrVisitor.prototype.visitProgram = function (program) {
  for (var i = 0; i < program.statements.length; i++) {
    program.statements[i].accept(this);
  }
};

BugHuntsIrVisitor.prototype.visitRepeat = function (repeat) {
  this.instructionIsPartOfStructure = true;
  for (var i = 0; i < repeat.times; i++) {
    for (var j = 0; j < repeat.statements.length; j++) {
      repeat.statements[j].accept(this);
    }
  }
  this.instructionIsPartOfStructure = false;
  this.ladybug.incrementInstructionCounter(repeat.statements.length + 1);
};

BugHuntsIrVisitor.prototype.visitFunctionDeclaration = function(functionDeclaration) {
  this.functions[functionDeclaration.name] = functionDeclaration;
  this.ladybug.incrementInstructionCounter(functionDeclaration.statements.length);
};

BugHuntsIrVisitor.prototype.visitFunctionInvocation = function(functionInvocation) {
  this.instructionIsPartOfStructure = true;
  var functionName = functionInvocation.name;
  var functionDeclaration = this.functions[functionName];
  for (var i = 0; i < functionDeclaration.statements.length; i++) {
    functionDeclaration.statements[i].accept(this);
  }
  this.instructionIsPartOfStructure = false;
};

BugHuntsIrVisitor.prototype.visitInstruction = function (instruction) {
  switch(instruction.action) {
    case 'FO':
      this.ladybug.moveForward(1);
      if (!this.instructionIsPartOfStructure) {
        this.ladybug.incrementInstructionCounter();
      }
      break;
    case 'BA':
      this.ladybug.moveBackward(1);
      if (!this.instructionIsPartOfStructure) {
        this.ladybug.incrementInstructionCounter();
      }
      break;
    case 'LE':
      this.ladybug.turnLeft(1);
      if (!this.instructionIsPartOfStructure) {
        this.ladybug.incrementInstructionCounter();
      }
      break;
    case 'RI':
      this.ladybug.turnRight(1);
      if (!this.instructionIsPartOfStructure) {
        this.ladybug.incrementInstructionCounter();
      }
      break;
    default:
      console.log('Action ' + instruction.action + 'unknown');
  }
};

exports.BugHuntsIrVisitor = BugHuntsIrVisitor;
