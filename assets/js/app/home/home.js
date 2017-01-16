angular.module('home', []);

angular.module('home').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'js/app/home/views/home.view.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);