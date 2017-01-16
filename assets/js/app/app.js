var mainApplicationModuleName = 'tuf-2000m-webclient';
var mainApplicationModule = angular.module(mainApplicationModuleName,
    ['ngRoute', 'home']);

mainApplicationModule.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainApplicationModuleName]);
});


/**
 * Directives
 */
/*mainApplicationModule.directive('generalMenu', function () {
    return {
        restrict: 'E',
        templateUrl: function (elem, attr) {
            if (attr.type == "hidden") {
                return 'js/app/home/views/general.hidden.menu.view.html';
            } else {
                return 'js/app/home/views/general.menu.view.html';
            }
        }
    };
});

mainApplicationModule.directive('userDropdown', function () {
    return {
        restrict: 'E',
        templateUrl: function (elem, attr) {
            return 'js/app/home/views/user.dropdown.view.html';
        }
    };
});*/

