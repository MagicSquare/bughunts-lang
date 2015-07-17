grammar BugHunts;


program
  : statement+
  ;

statement
  : instruction
  | repeat
  ;

instruction
 : action=STRING
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