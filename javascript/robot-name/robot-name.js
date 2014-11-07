(function() {
  
  function Robot() {

    var name = getRandName();

    return {
      
      reset: function() {
        name = getRandName();
      },

      get name() {
        return name;
      }
    };

    function getRandName() {
      var letters = getRandLetter() + getRandLetter();
      return letters + getRandInRange(100, 999);
    }

    function getRandLetter() {
      return String.fromCharCode(getRandInRange(65, 90));
    }

    function getRandInRange(min, max) {
        return String(Math.floor(Math.random() * (max - min)) + min);
    }

  }

  module.exports = Robot;

})();