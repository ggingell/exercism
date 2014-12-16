(function() {
  
  var Clock = {
    at: function(h, m) {
      
      return {
        h: h,
        m: m,
        toString: function() {
          return zeroPad(h) + ":" + zeroPad(m);
        },
        plus: function(minutes) {
          var hours = Math.floor(minutes / 60);
          h += hours;
          m += (minutes - (hours * 60));
        },
        minus: function(minutes) {
          var hours = Math.floor(minutes / 60);
          h -= hours;
          m -= (minutes - (hours * 60));
        },
        equals: function(clock) {
          
        }
      }

      function zeroPad(n) {
        return (n.length === 1) ? '0' + n : n;
      }
    }
  }

  module.exports = Clock;
})();