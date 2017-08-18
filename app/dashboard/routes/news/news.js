(function(){
  var app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('news', {
      url: '/news',
      templateUrl: 'routes/news/news.html',
      css: 'routes/news/news.css'
    });
  });

  app.controller('NewsController', ['$scope', '$state', '$stateParams', 'PortfolioService', 'NewsService',
    function($scope, $state, $stateParams, PortfolioService, NewsService) {
      var controller = this;

      $scope.availableRiskFactors = PortfolioService.getRiskFactors();
      $scope.selectedRiskFactor = $scope.availableRiskFactors[0];

      $scope.horizons = [
        { display: "24 hours", value: 24 },
        { display: "48 hours", value: 48 },
        { display: "7 days", value: 7 },
        { display: "28 days", value: 28 },
      ];
      $scope.selectedHorizon = $scope.horizons[0];

      $scope.selectHorizon = function(horizon) {
        $scope.selectedHorizon = horizon;
      };

      $scope.findArticles = function() {
        NewsService.findArticles($scope.selectedRiskFactor, $scope.selectedHorizon)
      };
    }]);

})();
