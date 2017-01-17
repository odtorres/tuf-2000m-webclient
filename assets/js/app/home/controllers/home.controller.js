angular.module('home').controller('HomeController', ['$scope', 'HomeService',
    function ($scope, HomeService) {
        $scope.registerFullText ="";
        $scope.registerObject ={};
        $scope.registerArray = [];

        HomeService.getRegisterAll().then(function successCallback(response) {    
            console.debug(response);
            $scope.registerFullText = response.data.registerValuesText;
            $scope.registerArray = response.data.registerValuesA;
            $scope.registerObject = response.data.registerValuesObject;
        }, function errorCallback(response) {
            console.error(response);
        });  

        $('.menu .item').tab();

    }
]);