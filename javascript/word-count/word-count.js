var words = function(input) {
  var counts = {};
  var words = input.split(/\s+/);

  for(var i = words.length - 1; i >= 0; i--) {
    var w = words[i];

    if(counts.hasOwnProperty(w)) {
      counts[w]++;
    } else {
      counts[w] = 1;
    }
  };

  return counts;
};

module.exports = words;
