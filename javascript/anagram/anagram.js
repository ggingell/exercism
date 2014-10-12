var anagram = function(subject) {
  return new Anagram(subject);
};

var Anagram = function(subject) {
  this.subject = subject.toLowerCase();
  this.master = this.subject.split('').sort().join('','');
}

Anagram.prototype.matches = function() {

  var matches = [];
  var candidates = [];

  if(arguments.length === 0) {
    return matches;

  } else if(typeof arguments[0] === 'string') {
    candidates = Array.prototype.slice.call(arguments);

  } else if(Array.isArray(arguments[0])) { // IE9+ Only.
    candidates = arguments[0];

  }
  
  while(candidates.length > 0) {
    
    var c = candidates.shift();
    var _c = c.toLowerCase();

    if(this.subject !== _c) {
      if(this.master === _c.split('').sort().join('')) {
        matches.push(c);
      }
    }
  };

  return matches;
};

module.exports = anagram;