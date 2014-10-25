(function() {

  function PhoneNumber(value) {
    
    this._number = '0000000000';

    var numberOnly = value.replace(/\D/g, '');
    var len = numberOnly.length;

    if(len === 10) {
      this._number = numberOnly;
    } else if(len === 11 && numberOnly.charAt(0) === '1') {
        this._number = numberOnly.substring(1);
    }

    this.number = function() {
      return this._number;
    }

    this.areaCode = function() {
      return this._number.substring(0, 3)
    }

    this.toString = function() {
      var areaCode = '(' + this.areaCode() + ')';
      var number = this._number.substring(3, 6) + '-'+ this._number.substring(6, 10);

      return areaCode + ' ' + number;
    }
  };

  module.exports = PhoneNumber;

})();