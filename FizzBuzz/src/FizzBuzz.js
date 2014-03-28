var ruleTuples = [[function fizzBuzzRule (number) {
      return number % 5 === 0 && number % 3 === 0;
    }, function fizzBuzzResult (number) {
      return "FizzBuzz";
    }],
    [function fizzRule (number) {
      return number % 3 === 0;
    }, function fizzResult (number) {
      return "Fizz";
    }],
    [function buzzRule (number) {
      return number % 5 === 0;
    }, function buzzResult (number) {
      return "Buzz";
    }],
    [function defaultRule (number) {
      return true;
    }, function defaultResult (number) {
      return number.toString();
    }]];

exports.fizzBuzz = function fizzBuzz (number) {
    var matchedRuleTuple = ruleTuples.filter(function (ruleTuple) {
      return ruleTuple[0](number) === true;
    })[0];

    return matchedRuleTuple[1](number);
  };