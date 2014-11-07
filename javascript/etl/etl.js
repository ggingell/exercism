(function() {
  
  var transform = function(data) {
    
    var result = {};

    for(score in data) {
      var scoreList = data[score];
      for(i in scoreList) {
        var letter = scoreList[i];
        letter = letter.toLowerCase();
        result[letter] = parseInt(score);
      }
    }

    return result;
  };

  module.exports = transform;

})();