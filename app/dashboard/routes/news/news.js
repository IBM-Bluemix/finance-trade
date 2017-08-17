(function(){
  var app = angular.module('app');

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('news', {
      url: '/news',
      templateUrl: 'routes/news/news.html',
      css: 'routes/news/news.css'
    });
  });

  app.controller('NewsController', ['$scope', '$state', '$stateParams',
    function($scope, $state, $stateParams) {
      var controller = this;
    }]);

})();
