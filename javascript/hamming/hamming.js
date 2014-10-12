var Hamming = function() {};

Hamming.prototype.compute = function(top, bottom) {
  
  // Not needed for tests, but equal length was specified
  if(top.length !== bottom.length) {
    throw new SequenceMismatchException();
  }

  var mutations = 0,
      remaining = top.length;

  while(remaining--) {
    if(top[remaining] !== bottom[remaining]) {
      mutations++;
    }
  }
 
  return mutations;

};

var SequenceMismatchException = function() {
  this.message = "Sequence must have the same length!";
  this.toString = function() {
    return this.message
  };
}


module.exports = new Hamming();