# BugHunts-Lang

## Origin

This module represents an attempt to fork what has been done in https://bitbucket.org/bugshunt/bugsbot/.

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