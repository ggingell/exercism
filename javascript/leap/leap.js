(function() {

  function isLeapYear(year) {
    year = +year; // Easy force cast to Number

    if(year % 4 === 0) {
      
      if(year % 100 === 0 && year % 400 !== 0) {
        return false;
      }

      return true;
    }

    return false;
  }

  module.exports = isLeapYear;

})();