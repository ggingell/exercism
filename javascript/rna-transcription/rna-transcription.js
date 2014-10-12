(function() {

  var toRna = function(sequence) {

    if(sequence && typeof sequence === 'string') {
      var rna = '',
          seq = sequence.toUpperCase().split(''),
          l = 0,
          dnaToRna = {
            'G': 'C',
            'C': 'G',
            'T': 'A',
            'A': 'U'
          };

      while(l < seq.length) {
        var s = seq[l];
        
        if(dnaToRna.hasOwnProperty(s)) {
          rna += dnaToRna[s];
          l++;
        } else {

          throw new InvalidNucleotideException(s);
          break;
        }
      }
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