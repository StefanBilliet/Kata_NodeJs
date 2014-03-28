var assert = require("chai").assert;
var data_driven = require("data-driven");
var sut = require("../src/FizzBuzz");

  describe('FizzBuzz', function(){
    data_driven([{value: 3}, {value: 6}, {value: 9}], function () {
      it('should return "Fizz" if the number is dividable by 3', function(ctx){
        assert.equal(sut.fizzBuzz(ctx.value), "Fizz");
      });
    });

    data_driven([{value: 5}, {value: 10}], function () {
      it('should return "Buzz" if the number is dividable by 5', function(ctx){
        assert.equal(sut.fizzBuzz(ctx.value), "Buzz");
      });
    });

    data_driven([{value: 15}, {value: 30}], function () {
      it('should return "FizzBuzz" if the number is dividable by 3 and 5', function(ctx){
        assert.equal(sut.fizzBuzz(ctx.value), "FizzBuzz");
      });
    });

    data_driven([{value: 1}, {value: 2}, {value: 23}], function () {
      it('should return the number if the number is not dividable by 3 or 5', function(ctx){
        assert.equal(sut.fizzBuzz(ctx.value), ctx.value.toString());
      });
    });
  });