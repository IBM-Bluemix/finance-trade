/*global angular*/
(function () {

  // angular app initialization
  var app = angular.module('app', [
    'ngMaterial',
    'ui.router',
    'angularCSS',
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/portfolio");
  });

})();
