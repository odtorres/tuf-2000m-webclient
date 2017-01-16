angular.module('home').service('HomeService', ['$http',
    function ($http) {
        this.getRegisterObject = function (data) {
            return $http({
                method: 'GET',
                url: '/register/object'
            });
        }

        this.getRegisterFullText = function (data) {
            return $http({
                method: 'GET',
                url: '/register'
            });
        }
    }
]);