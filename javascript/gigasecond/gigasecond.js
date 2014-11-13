(function() {
  
  var Gigasecond = function(date) {
    
    var gigasecond = Math.pow(10,12);
    var seconds = date.getTime() - 2800000;

    this.date = function() {
      return new Date(seconds + gigasecond);
    }
  };

  module.exports = Gigasecond;
})();