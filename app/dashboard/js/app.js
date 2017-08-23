/*global angular*/
(function () {

  // listen for request sent over XHR and automatically show/hide spinner
  angular.module('ngLoadingSpinner', [])
    .directive('spinner', ['$http', function ($http) {
      return {
        link: function (scope, elm, attrs) {
          scope.isLoading = function () {
            return $http.pendingRequests.length > 0;
          };
          scope.$watch(scope.isLoading, function (loading) {
            if (loading) {
              document.getElementById('loadingProgress').style.visibility = "visible";
            } else {
              document.getElementById('loadingProgress').style.visibility = "hidden";
            }
          });
        }
      };
    }]);

  // angular app initialization
  var app = angular.module('app', [
    'ngMaterial',
    'ngLoadingSpinner',
    'ui.router',
    'md.data.table',
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');
  });

  app.controller('SidebarController', ['$scope', 'StateService',
    function($scope, StateService) {
      console.log('SidebarController()');

      $scope.state = StateService;
    }]);

})();
