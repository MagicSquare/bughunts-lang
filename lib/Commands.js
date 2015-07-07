var howManyTimes = function(ctx) {
  return (ctx.param !== null) ? parseInt(ctx.param.text) : 1;
};

exports.commands = function(ladybug) {
  return {
    enterRuleFO: function(ctx) {
      ladybug.moveForward(howManyTimes(ctx));
    },
    enterRuleBA: function(ctx) {
      ladybug.moveBackward(howManyTimes(ctx));
    },
    enterRuleLE: function(ctx) {
      ladybug.turnLeft(howManyTimes(ctx));
    },
    enterRuleRI: function(ctx) {
      ladybug.turnRight(howManyTimes(ctx));
    }
  };
}