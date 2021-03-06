'use strict';

// Declare app level module which depends on filters, and services
angular.module('nodejs-controller', [
  'ngRoute',
  'nodejs-controller.filters',
  'nodejs-controller.services',
  'nodejs-controller.directives',
  'nodejs-controller.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shutdown', {templateUrl:'partials/shutdown.html', controller: 'ShutdownCtrl'});
  $routeProvider.when('/info', {templateUrl:'partials/info.html', controller: 'InfoCtrl'});
  $routeProvider.when('/uptime', {templateUrl:'partials/uptime.html', controller: 'UptimeCtrl'});
  $routeProvider.when('/load', {templateUrl:'partials/load.html', controller: 'LoadCtrl'});
  $routeProvider.when('/mem', {templateUrl:'partials/mem.html', controller: 'MemCtrl'});
  $routeProvider.when('/mounts', {templateUrl:'partials/mounts.html', controller: 'MountsCtrl'});
  $routeProvider.when('/network', {templateUrl:'partials/network.html', controller: 'NetworkCtrl'});
  $routeProvider.when('/ps', {templateUrl:'partials/ps.html', controller: 'PsCtrl'});
  /* Default route */
  $routeProvider.otherwise({redirectTo: '/shutdown'});
}]);
