# BugHunts-Lang

## Origin
This module represents an attempt to fork what has been done in https://bitbucket.org/bugshunt/bugsbot/.

## Syntax
### Basic moves

The 4 basic moves (FOrward, BAckward, LEft, RIght) are handle by the runtime (ie. they have no existence in the language grammar. The purpose is to be able to "_translate_" easily the basic moves (FO = Avance = ->).
The future will tel us if it's a good idea or if by default the language is english-based and a UI-layer will do the translation.

### Iteration
An iteration is a set of instruction within parenthesis `()` we want to repeat a number of times.
* Syntax: `( instruction_1 instruction_2 etc. ) number_of_repetition
* Example: `( FO RI ) 3` equivalent to `FO RI FO RI FO RI`

### Function
A function is a set of instruction within square-brackets `F[]` (notice the `F` prefix), we want to define once an invoke many times (Note: currently function are procedure (no-args, no return)).
Note1: the function name is the square-bracket's prefix. Currently only one function can be declare, it's name is `F`.
Note2: A function can't be invoked before being define

* Declaration syntax: `F[ instruction_1 instruction_2 etc. ]`
* Invocation syntax: `F`
* Example: `F[(FO RI) 3] LE F FO` equivalent to `LE FO RI FO RI FO RI FO`

## Architecture
The architecture has been rewritten with only one purpose, spliting the language from its usage.

The top-level API is callback oriented. Basically it every move the ladybug made is a trigger.
```
  var LadyBug = require('../lib/LadyBug').LadyBug
  var ladybug = new LadyBug({
    onTurnRight: function(times) { expected = 'Right ' + times; }
  });
  ladybug.run('RI 3');
```

This choice permits to let the developer to choose how to integrate  the movement into its application (Scoring computation, visualisation, etc.)

## Language-building details
The `lib/BughuntsRuntime` ask to `lib/compiler/ParseTreeToIr` to build the AST (ParseTree) and to transform it into an IR view, using the `lib/compiler/ir/*` data structure.
Once the IR build, the `lib/compiler/BughuntsIrVisitor` visit every data structure and command the Ladybug engine in order to transform the instruction into actions.  
 
## Build
The tasks are automated with grunt. Basically
* `grunt antlr`: generates the grammar, lexer and so on
* `grunt test`: guess what...
* `grunt` : Trigger antrl and the tests


## Testing
The `test/compiler.test` permits to test the ANTLR 4 grammar where `test/runtime` verify that the instructions are properly mapped to Lady Bug actions. 