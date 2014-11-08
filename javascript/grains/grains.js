(function() {
  
  var Grains = function() {
    
    function square(limit) {
      var index = 0,
          result = 1;

      while(--limit) {
        result = result * 2;
      }

      return result;
    }

    function total() {
      var sq = 0,
          sum = 0;
      while(sq++ < 64) {
        sum += square(sq);
      }

      return sum;
    }

    return {
      square: square,
      total: total
    }
  };

  module.exports = Grains;

})();