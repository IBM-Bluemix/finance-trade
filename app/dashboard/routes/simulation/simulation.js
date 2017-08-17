(function(){
  var app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('simulation', {
      url: '/simulation',
      templateUrl: 'routes/simulation/simulation.html',
      css: 'routes/simulation/simulation.css'
    });
  });

  app.controller('SimulationController', ['$scope', '$state', '$stateParams',
    function($scope, $state, $stateParams) {
      var controller = this;
    }]);

})();
