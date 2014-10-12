

var Song = function() {};

Song.prototype.verse = function(verseIndex) {
  var verse = "I know an old lady who swallowed a " + getEdibleForVerse(verseIndex) + ".\n";
  verse += getRhymingLineForVerse(verseIndex);

  if(verseIndex === 1 || verseIndex === 8) {
    return verse;
  }

  //She swallowed the spider to catch the fly.
  var l = verseIndex;
  while(l > 1) {
    var extraPart = (l === 3) ? " that wriggled and jiggled and tickled inside her.\n" : ".\n";
    verse+= "She swallowed the " + getEdibleForVerse(l) + " to catch the " + getEdibleForVerse(l - 1) + extraPart;
    l--;
  }

  verse += getRhymingLineForVerse(1);

  return verse;
};

Song.prototype.verses = function(start, end) {
  var song = "";
  
  for (; start <= end; start++) {
    var lb = (start > 1) ? '\n' : '';
    song += lb + this.verse(start);
  };

  song += "\n";

  return song;
}

function getEdibleForVerse(verseIndex) {
  var edibles = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
  return edibles[verseIndex - 1];
}

function getRhymingLineForVerse(verseIndex) {
   var lines = [
    "I don't know why she swallowed the fly. Perhaps she'll die.",
    "It wriggled and jiggled and tickled inside her.",
    "How absurd to swallow a bird!",
    "Imagine that, to swallow a cat!",
    "What a hog, to swallow a dog!",
    "Just opened her throat and swallowed a goat!",
    "I don't know how she swallowed a cow!",
    "She's dead, of course!"
  ];

  return lines[verseIndex - 1] + "\n";
}

module.exports = new Song();