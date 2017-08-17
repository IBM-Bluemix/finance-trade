(function(){
  var app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('portfolio', {
      url: '/portfolio',
      templateUrl: 'routes/portfolio/portfolio.html',
      css: 'routes/portfolio/portfolio.css'
    });
  });

  app.controller('PortfolioController', ['$scope', '$state', '$stateParams', 'PortfolioService',
    function($scope, $state, $stateParams, PortfolioService) {
      console.log('PortfolioController()');
      var controller = this;

      PortfolioService.getPortfolios().then(function(portfolios) {
        console.log(portfolios);
        $scope.portfolios = portfolios;
      });
    }]);

})();
