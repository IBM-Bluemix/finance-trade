(function(){
  var app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('portfolio', {
      url: '/portfolio',
      templateUrl: 'routes/portfolio/portfolio.html'
    });
  });

  app.controller('PortfolioController', ['$scope', '$state', '$stateParams', 'PortfolioService',
    function($scope, $state, $stateParams, PortfolioService) {
      console.log('PortfolioController()');
      var controller = this;

      $scope.selectedHoldings = [];

      PortfolioService.getPortfolios().then(function(portfolios) {
        console.log('Found', portfolios);
        $scope.portfolios = portfolios;
        if (portfolios.length > 0) {
          $scope.selectPortfolio(portfolios[0]);
        }
      });

      $scope.selectPortfolio = function(portfolio) {
        if (portfolio === $scope.selectedPortfolio) {
          return;
        }
        console.log('Selecting', portfolio.name);
        $scope.selectedPortfolio = portfolio;
        PortfolioService.getHoldings(portfolio).then(function(holdings) {
          console.log('Found', holdings);
          portfolio.holdings = holdings;
        });
      };

    }]);

})();
