'use strict';

var should = require('should');
var LadyBug = require('../lib/LadyBug').LadyBug;

describe('Parser', function () {
  it("Should move to the appropriate direction", function () {
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

  it("Should repeat the instruction 3 times", function () {
    var expected = [];
    var l = new LadyBug({
      onTurnRight: function(times) { expected.push('Right'); }
    });
    l.run('(RI) 3');
    expected.join(' ').should.be.equal('Right Right Right');
  });

  it("Should repeat a set of instruction 4 times", function () {
    var expected = [];
    var l = new LadyBug({
      onMoveForward: function(times) { expected.push('Forward')},
      onTurnRight: function(times) { expected.push('Right')}
    });
    l.run('(FO RI) 4');
    expected.join(' ').should.be.equal('Forward Right Forward Right Forward Right Forward Right');
  });

});
