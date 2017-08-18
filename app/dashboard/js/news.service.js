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
          var result = response.data;
          result.counts = {
            positive: result.results.filter(function(article) { return article.enriched_text.sentiment.document.label === 'positive' }).length,
            negative: result.results.filter(function(article) { return article.enriched_text.sentiment.document.label === 'negative' }).length,
            neutral: result.results.filter(function(article) { return article.enriched_text.sentiment.document.label === 'neutral' }).length,
          };
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
