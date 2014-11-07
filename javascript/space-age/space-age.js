(function() {
    
  var SpaceAge = function(seconds) {

    var inEarthYears = seconds / 31557600;

    function onEarth() {
      return inEarthYears;
    }
    
    function onMercury() { // orbital period 0.2408467 Earth years
      return inEarthYears / 0.2408467;
    }

    function onVenus() { // orbital period 0.61519726 Earth years
      return inEarthYears / 0.61519726;
    }

    function onMars() { // orbital period 1.8808158 Earth years
      return inEarthYears / 1.8808158;
    }

    function onJupiter() { // orbital period 11.862615 Earth years
      return inEarthYears / 11.862615;
    }

    function onSaturn() { // orbital period 29.447498 Earth years
      return inEarthYears / 29.447498;
    }

    function onUranus() { // orbital period 84.016846 Earth years
      return inEarthYears / 84.016846;
    }

    function onNeptune() { // orbital period 164.79132 Earth years
      return inEarthYears / 164.79132;
    }

    return {
      get seconds() {
        return seconds;
      },
      set seconds(value) {
        inEarthYears = value / 31557600;
        seconds = value;
        return value;
      },
      onMercury: onMercury,
      onVenus: onVenus,
      onMars: onMars,
      onJupiter: onJupiter,
      onSaturn: onSaturn,
      onUranus: onUranus,
      onNeptune: onNeptune
    };

  };

  module.exports = SpaceAge;

})();