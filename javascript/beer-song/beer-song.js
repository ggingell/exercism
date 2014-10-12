var Song = function() {
  this.mainVerseTemplate = "# {nounA} of beer on the wall, # {nounA} of beer.\nTake {ref} down and pass it around, @ {nounB} of beer on the wall.\n";
  this.endVerseTemplate = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
};

Song.prototype.verse = function(bottleCount) {

  var nextBottleCount = bottleCount - 1,
    verse = this.mainVerseTemplate.replace(/\#/g, bottleCount).replace(/\@/g, (nextBottleCount === 0) ? 'no more' : nextBottleCount); 
  
  verse = verse.replace('{ref}', (nextBottleCount === 0) ? 'it' : 'one');

  if(bottleCount > 2) {
    verse = verse.replace(/\{nounA\}/g, 'bottles').replace(/\{nounB\}/g, 'bottles');
  } else if(bottleCount === 2) {
    verse = verse.replace(/\{nounA\}/g, 'bottles').replace(/\{nounB\}/g, 'bottle');
  } else if(bottleCount === 1) {
    verse = verse.replace(/\{nounA\}/g, 'bottle').replace(/\{nounB\}/g, 'bottles');
  } else {
    verse = this.endVerseTemplate;
  }

  return verse;
}

Song.prototype.sing = function(startVerse, endVerse) {
  
  var song = '',
      isLastVerse = false;

  if(!endVerse) {
    endVerse = 0;
  }

  while(startVerse >= endVerse) {
    isLastVerse = (startVerse === endVerse);
    song += this.verse(startVerse) + ((isLastVerse) ? "" : "\n");
    
    startVerse--;
  }

  return song;
}


module.exports = new Song();