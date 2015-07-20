grammar BugHunts;


program
  : statement+
  ;

statement
  : instruction
  | functionDeclaration
  | functionInvocation
  | repeat
  ;

instruction
 : action=STRING
 ;

functionDeclaration
  : 'F[' statement+ ']'
  ;

functionInvocation
  : 'F'
  ;

repeat
  : '(' statement+ ')' times=NUMBER
  ;

STRING
    : [a-zA-Z]+
    ;
    
NUMBER
    : [0-9]+
    ;

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines