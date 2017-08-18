(function () {
  angular.module('app')
    .service('NewsService', ['$http', '$q', NewsService]);

  function NewsService($http, $q) {
    console.log('NewsService loading...');
    var self = this;
    return {
      findArticles: function(riskFactor, horizon) {
        console.log('Looking for', riskFactor, horizon);
        var deferred = $q.defer();
        $http.get('api/news.json').then(function(response) {
          deferred.resolve(response.data.portfolios);
        }).catch(function(err) {
          console.log(err);
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }

})();
