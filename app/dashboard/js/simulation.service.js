(function () {
  angular.module('app')
    .service('SimulationService', ['$http', '$q', SimulationService]);

  function SimulationService($http, $q) {
    console.log('SimulationService loading...');
    var values = { };
    return {
      simulate: function(instrumentIds, riskFactor, shockValue) {
        var deferred = $q.defer();
        $http.get('api/simulation.json').then(function(response) {
          deferred.resolve(response.data);
        }).catch(function(err) {
          console.log(err);
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }

})();
