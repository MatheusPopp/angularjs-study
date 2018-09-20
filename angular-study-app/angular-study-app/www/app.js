angular.module('myApp', ['ngRoute'])
    .run(['$rootScope','$location', function ($rootScope,$location) {


        $rootScope.pageModel = {
            page: {
                name: $location.path()
            }
        }
    }])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl: "view/login.html",
                controller: "loginController"
             })
            .when("/home", {
                templateUrl: "view/home.html",
                controller: 'homeController'

            })

            
            .otherwise({
                redirectTo: '/'
            });
        
    }]);