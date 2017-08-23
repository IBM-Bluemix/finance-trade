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
        // $http.post(`/api/news/${encodeURIComponent(riskFactor.search)}`,
        //   {
        //     company: riskFactor.search,
        //     daysDate: horizon.days
        //   }).then(function(response) {
          var result = response.data;
          result.counts = {
            positive: result.results.filter(function(article) { return article.enriched_text.sentiment.document.label === 'positive' }).length,
            negative: result.results.filter(function(article) { return article.enriched_text.sentiment.document.label === 'negative' }).length,
            neutral: result.results.filter(function(article) { return article.enriched_text.sentiment.document.label === 'neutral' }).length,
          };

          // Check if negative sentiments are > then positive sentiments and set shockType values to fall or rise
          var totalPositiveCount_NegativeCount = 0;
          if(result.counts.negative >= result.counts.positive) {
            totalPositiveCount_NegativeCount = result.counts.negative - result.counts.positive;
          //     $scope.shockType = 'fall';
          } else {
            totalPositiveCount_NegativeCount = result.counts.positive - result.counts.negative;
          //     $scope.shockType = 'rise';
          }

          // Setting shock values
          var shockValue = 0;
          if (totalPositiveCount_NegativeCount >= 1 && totalPositiveCount_NegativeCount <= 3) {
            shockValue = 0.7;
          }
          if (totalPositiveCount_NegativeCount >= 4 && totalPositiveCount_NegativeCount <= 6) {
            shockValue = 0.9;
          }
          if(totalPositiveCount_NegativeCount >= 7 && totalPositiveCount_NegativeCount <= 10){
            shockValue = 1.1;
          }
          if (totalPositiveCount_NegativeCount > 10) {
            shockValue = 1.3;
          }
          result.shockValue = shockValue;

          deferred.resolve(result);
        }).catch(function(err) {
          console.log(err);
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }

})();
