(function(){
  var app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('portfolio', {
      url: '/portfolio',
      templateUrl: 'routes/portfolio/portfolio.html',
      css: 'routes/portfolio/portfolio.css'
    });
  });

  app.controller('PortfolioController', ['$scope', '$state', '$stateParams',
    function($scope, $state, $stateParams) {
      var controller = this;
    }]);

})();
