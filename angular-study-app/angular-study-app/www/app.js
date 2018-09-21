var $$ = new Dom7;

var app = new Framework7({});




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

            .when("/cadastro", {

                templateUrl: "view/cadastro.html",
                controller: "cadastroController"
            })

            
            .otherwise({
                redirectTo: '/'
            });
        
    }]);



