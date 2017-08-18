/*global angular*/
(function () {

  // angular app initialization
  var app = angular.module('app', [
    'ngMaterial',
    'ui.router',
    'md.data.table',
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');
  });

})();
