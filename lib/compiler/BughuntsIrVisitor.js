var BugHuntsIrVisitor = function(ladybug) {
    this.ladybug = ladybug;
    this.functions = {};
    this.functionsUsed = {};
    this.instructionIsPartOfStructure = false;

    this.movements = {
        'FO': this.ladybug.moveForward,
        'BA': this.ladybug.moveBackward,
        'LE': this.ladybug.turnLeft,
        'RI': this.ladybug.turnRight
    };
    return this;
};

BugHuntsIrVisitor.prototype.visitProgram = function (program) {
    for (var i = 0; i < program.statements.length; i++) {
        program.statements[i].accept(this);
    }
};

BugHuntsIrVisitor.prototype.visitRepeat = function (repeat) {
    for (var j = 0; j < repeat.statements.length; j++) { // First repeat counts all instructions
        repeat.statements[j].accept(this);
    }

    this.instructionIsPartOfStructure = true;

    for (var i = 1; i < repeat.times; i++) { // Next repeats don't count
        for (var j = 0; j < repeat.statements.length; j++) {
            repeat.statements[j].accept(this);
        }
    }
    this.instructionIsPartOfStructure = false;
    this.ladybug.incrementInstructionCounter(); // One instruction for the number of repeat
};

BugHuntsIrVisitor.prototype.visitFunctionDeclaration = function(functionDeclaration) {
    this.functions[functionDeclaration.name] = functionDeclaration;
};

BugHuntsIrVisitor.prototype.visitFunctionInvocation = function(functionInvocation) {
    var isPartOfStructure = this.instructionIsPartOfStructure;

    this.instructionIsPartOfStructure = true;

    var functionName = functionInvocation.name;
    var functionDeclaration = this.functions[functionName];
    for (var i = 0; i < functionDeclaration.statements.length; i++) {
        functionDeclaration.statements[i].accept(this);
    }
    if (!isPartOfStructure){
        this.instructionIsPartOfStructure = false;
    }

    if (this.functionsUsed[functionName]){
        if (!isPartOfStructure){
            this.ladybug.incrementInstructionCounter(); // 1 instruction if the function has already been called
        }
    }else{ // count all instructions for the first call
        this.ladybug.incrementInstructionCounter(functionDeclaration.statements.length + 1);
        this.functionsUsed[functionName] = true;
    }
};

BugHuntsIrVisitor.prototype.visitInstruction = function (instruction) {

    if (instruction.action in this.movements) {
        this.movements[instruction.action].call(this.ladybug, 1, instruction.location);
        if (!this.instructionIsPartOfStructure) {
            this.ladybug.incrementInstructionCounter();
        }
    }
    else {
        console.log('Action ' + instruction.action + 'unknown');
    }

};

exports.BugHuntsIrVisitor = BugHuntsIrVisitor;
