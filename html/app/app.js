(function () {

    var app = angular.module('travosApp',
        ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        var viewBase = '/html/app/views/';

        $routeProvider
            .when('/signin', {
                controller: 'LoginController',
                templateUrl: viewBase + 'login.html'
            })
            .when('/login/:redirect*?', {
                controller: 'LoginController',
                templateUrl: viewBase + 'login.html'
            })
            .when('/dashboard', {
                controller: 'DashboardController',
                templateUrl: viewBase + 'dashboard/index.html'
            })
            .when('/products', {
                controller: 'ProductsController',
                templateUrl: viewBase + 'products/index.html'
            })
            .otherwise({ redirectTo: '/signin' });

    }]);
}());