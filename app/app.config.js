'use strict'

angular.module('marvelHeroesApp')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/home', {
    template: '<main-page></main-page>',
  });
  $routeProvider.otherwise({redirectTo: '/home'});
}]);