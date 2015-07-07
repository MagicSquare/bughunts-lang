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
From a language perspective the structure is very very basic. Based on the grammar ANTLR parse a text file and build a ParseTree (it's the AbstractSyntaxTree - AST)
(think about XML parsing and DOM). Then ANTLR proposes a walker which will go trough each node of the Tree. For each item's, the walker
will trigger an event catched by a Listener (good old-fashioned SAX parsing in Java ;). For a standard language, at that stage we would build an *Intermediate Representation* (IR) of the language blocks (instruction, loops, etc.) to ensure the semantic of the code.
In our case, it would be overkilled... so the rules are directly plugged to the 'runtime' (erk...), thanks to *Commands*. A command is nothing more than a match between a node of the parse Tree (`enterRuleFO`) and a runtime actions (`ladybug.moveForward(...)`). So far, it works ;)

Of course, thoughts and remarks are welcomed!

## Build
The tasks are autmated with grunt. Basically
* `grunt antlr`: generates the grammar, lexer and so on
* `grunt test`: guess what...
* `grunt` : Trigger antrl and the tests

The ANTLR generate files are not tracked (have a look to the `.gitignore`) because they have zero and I prefer to regenerate them when needed rather than wondering if they are up to date or not.
