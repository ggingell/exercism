var dna = function(sequence) {
  
  var dna = new DNA();
  dna.setSequence(sequence);

  return dna;
};

var DNA = function() {

  this.sequence = '';
  this.splitSequence = [];
};

DNA.prototype.count = function(nucleotide) {

  var count = 0,
      seq = this.sequence.split('');
  
  while(seq.length > 0) {
    var n = seq.shift();
    if(n === nucleotide) {
      count++;
    }
  }

  return count;
};

DNA.prototype.histogram = function() {

  var hist = this.getEmptyHistogram(),
      seq = this.sequence.split('');
  
  while(seq.length > 0) {
    var n = seq.pop();
    hist[n]++;
  }

  return hist;
};

DNA.prototype.getEmptyHistogram = function() {

  return {A: 0, T: 0, C: 0, G: 0};
};

DNA.prototype.setSequence = function(sequence) {

  if(sequence && typeof sequence === 'string') {
    this.sequence = sequence.toUpperCase();
    this.splitSequence = seq = this.sequence.split('');

    while(seq.length > 0) {
      var n = seq.pop();
      if( !this.isValidNucleotide(n) ) {
        throw new InvalidNucleotideException();
      }
    }
  }
};

DNA.prototype.isValidNucleotide = function(n) {

  return 'ATCG'.indexOf(n) > -1;
};

function InvalidNucleotideException(offender) {
  
  this.toString = function() {

    return 'The nucleotide "' + offender + '" is invalid. Must be one of: G, C, A, or T.';
  };
}

module.exports = dna;