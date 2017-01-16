angular.module('home').controller('HomeController', ['$scope', 'HomeService',
    function ($scope, HomeService) {

        HomeService.getRegisterObject().then(function successCallback(response) {
            $scope.registerObject = response.data;
            console.debug($scope.registerObject);
            
        }, function errorCallback(response) {
            console.error(response);
        });

        HomeService.getRegisterFullText().then(function successCallback(response) {
            $scope.registerFullText = response.data;
            
        }, function errorCallback(response) {
            console.error(response);
        });

        $('.menu .item').tab();

    }
]);