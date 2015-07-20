'use strict';

var should = require('should');
var LadyBug = require('../lib/LadyBug').LadyBug;

describe('Runtime', function () {

  var checkLadyBugMoves = function(source, expectedMoves) {
    var movesContainer = [];
    var l = new LadyBug({
      onMoveForward: function(times) { movesContainer.push('Forward')},
      onMoveBackward: function(times) { movesContainer.push('Backward')},
      onTurnRight: function(times) { movesContainer.push('Right')},
      onTurnLeft: function(times) { movesContainer.push('Left')}
    });
    l.run(source);
    movesContainer.join(' ').should.be.equal(expectedMoves);
  };

  it('should stop everything if a compilation error is detected', function () {
    var l = new LadyBug({
      onTurnRight: function(times) { expected.push('Right'); }
    });
    try {
      l.run('(RI 3');
      should.fail();
    } catch (err) {
      (err).should.be.equal('Compilation error detected, stopping the program.');
    }
  });

  it('should move to the appropriate direction', function () {
    var directions = {
      'FO': 'MoveForward',
      'BA': 'MoveBackward',
      'RI': 'TurnRight',
      'LE': 'TurnLeft'
    };
    var expected = {};
    var handlers = {};
    for(var k in directions) {
      handlers['on' + directions[k]] = function(times) {
        expected[k] = directions[k];
      };
    }
    var l = new LadyBug(handlers);
    for(var k in directions) {
      l.run(k);
      expected[k].should.be.equal(directions[k]);
    }
  });

  it('should repeat the instruction 3 times', function () {
    checkLadyBugMoves('(RI) 3', 'Right Right Right');
  });

  it('should repeat a set of instruction 4 time', function () {
    checkLadyBugMoves('(FO RI) 4', 'Forward Right Forward Right Forward Right Forward Right');
  });

  it('should invoke a function', function () {
    checkLadyBugMoves('F[FO RI](F) 4', 'Forward Right Forward Right Forward Right Forward Right');
  });

  it('should raise an error when a function is invoked before its declaration', function () {
    var l = new LadyBug({});
    try {
      l.run('(F) 4 F[FO RI]');
      should.fail();
    } catch (err) {
      //TODO wrap the current exception is a NullPointer-ish error into a runtime exception
    }
  });

});
