(function() {
  
  function School() {

    this._roster = {};

    this.add = function(name, grade) {
      if(!this._roster.hasOwnProperty(grade)) {
        this._roster[grade] = [];
      }

      this._roster[grade].push(name);
      this._roster[grade] = this._roster[grade].sort();
    }

    this.grade = function(grade) {
      return this._roster[grade] || [];
    }

    this.roster = function() {

      return this._roster;
    }

  }

  module.exports = School;

})();