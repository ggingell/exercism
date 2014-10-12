//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if(input === '' || /^\s+$/.test(input)) { // Silence. (Empty or whitespace.)
    return 'Fine. Be that way!';
  }

  if(/[A-Z]?([a-z0-9\d]+[\!\.0-9\d\s]?[A-Z]*\?)$/mg.test(input)) { // Question.
    return 'Sure.';
  }

  if(/^[A-Z+][^a-z\n]+$/.test(input) 
    || /^([\,0-9*A-Z*\u00A0-\u0200*\s*A-Z*]+\!)$/mg.test(input)) { // Yelling.
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
};

module.exports = Bob;
