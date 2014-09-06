(function () {

    var LoginController = function ($scope, $location) {
        var path = '/';
        $scope.email = null;
        $scope.password = null;
        $scope.errorMessage = null;
        $scope.isEmailValid = true;

        $scope.login = function () {
            // authService.login($scope.email, $scope.password).then(function (status) {
            //     //$routeParams.redirect will have the route
            //     //they were trying to go to initially
            //     if (!status) {
            //         $scope.errorMessage = 'Unable to login';
            //         return;
            //     }

            //     if (status && $routeParams && $routeParams.redirect) {
            //         path = path + $routeParams.redirect;
            //     }

            //     $location.path(path);
            // });
            $location.path(path + 'dashboard');
        };
    };

    LoginController.$inject = ['$scope', '$location'];

    angular.module('travosApp')
        .controller('LoginController', LoginController);

}());