(function() {
  
  var Triangle = function(a, b, c) {

    return {
      kind: function() {

        validateDimensions();

        if(a == b && b == c) {
          return "equilateral";
        }

        if(a == b || a == c || b == c) {
          return "isosceles";
        } 

        return "scalene";
      }
    }

    function validateDimensions() {
      if(a <= 0 || b <= 0 || c <= 0) {
        throw new NegativeValuesException();
      }

      if(a + b <= c || a + c <= b || b + c <= a) {
        throw new SideLengthValuesException();
      }
    }
    
    function NegativeValuesException() {
      var message = "Negative values not allowed.";
      return {
        "message": message,
        "name": "NegativeValuesException",
        "toString": function() {
          return message;
        }
      }
    }

    function SideLengthValuesException() {
      var message = "The sum of two side lengths is greater than the third side. That is an impossible shape.";
      return {
        "message": message,
        "name": "SideLengthValuesException",
        "toString": function() {
          return message;
        }
      }
    }
  };

  module.exports = Triangle;
})();