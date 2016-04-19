var recordTemperature = function(newtempeature) {
  var Temperatures = [];
  Temperatures.push(newtempeature);
  return Temperatures;
};



var getCurrentMedian = function(Temperatures) {
  var size = Temperatures.length;

  for (var i = size - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (Temperatures[j - 1] > Temperatures[j]) {
        var temp = Temperatures[j - 1];
        Temperatures[j - 1] = Temperatures[j];
        Temperatures[j] = temp;
      }
    }
  }
             

  var middle = Math.floor((size) / 2);
  if (size === 0) {
    return ("Enter Temperatures");
  } else if (size % 2) {
    return (Temperatures[middle]);
  } else {

    return ((parseInt(Temperatures[middle]) + parseInt(Temperatures[middle - 1])) / 2);
  }
};




var app = angular.module('app', []);
app.value('version', '0.0.1');

app.controller('tempCntrl', ['$scope', 'TemperatureMoniter', function($scope, TemperatureMoniter) {

  $scope.Temperatures = [];
  $scope.recordTemperature = function() {
    $scope.Temperatures = TemperatureMoniter.recordTemperature($scope.newtempeature);
    $scope.newtempeature = "";

  };

  $scope.getCurrentMedian = function() {
    $scope.CurrentMedian = TemperatureMoniter.getCurrentMedian($scope.Temperatures);
  };
}]);



app.factory('TemperatureMoniter', function() {

  var Temperatures = [];
  var factory = {
    recordTemperature: function(newtempeature) {
      Temperatures.push(newtempeature);
     
      return Temperatures;
    },

    getCurrentMedian: function(Temperatures) {
      var size = Temperatures.length;

      for (var i = size - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
          if (Temperatures[j - 1] > Temperatures[j]) {
            var temp = Temperatures[j - 1];
            Temperatures[j - 1] = Temperatures[j];
            Temperatures[j] = temp;
          }
        }
      }

      var middle = Math.floor((size) / 2);
      if (size === 0) {
        return ("Enter Temperatures");
      } else if (size % 2) {
        return (Temperatures[middle]);
      } else {

        return ((parseInt(Temperatures[middle]) + parseInt(Temperatures[middle - 1])) / 2);
      }
    }
  };
  return factory;
});