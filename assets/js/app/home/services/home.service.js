angular.module('home').service('HomeService', ['$http',
    function ($http) {
        this.getRegisterAll = function (data) {
            return $http({
                method: 'GET',
                url: '/register/all'
            });
        }
    }
]);