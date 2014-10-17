(function() {

  var dnaToRna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  var toRna = function(sequence) {

    if(sequence && typeof sequence === 'string') {
      var rna = '',
          seq = sequence.toUpperCase().split('');

      seq.forEach(function(s) {
        
        if(dnaToRna.hasOwnProperty(s)) {
          rna += dnaToRna[s];
        } else {
          throw new InvalidNucleotideException(s);
        }
      });
    }

    return rna;
  }

  function InvalidNucleotideException(offender) {
    
    this.toString = function() {

      return 'The nucleotide "' + offender + '" is invalid. Must be one of: G, C, A, or T.';
    };
  }

  module.exports = toRna;

})();