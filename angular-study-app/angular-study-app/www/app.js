var $$ = new Dom7;

var app = new Framework7({});




angular.module('myApp', ['ngRoute'])
    .run(['$rootScope', '$location', function ($rootScope, $location) {


        $rootScope.pageModel = {
            page: {
                name: $location.path()
            }
        }

        $rootScope.irParaHome = function () {
            $location.url("/home");
        }
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {
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

            .when("/home/criarAnotacao", {

                templateUrl: "view/criarAnotacao.html",
                controller: "criarAnotacaoController"
            })


            .otherwise({
                redirectTo: '/'
            });

    }])
    .config(['$httpProvider',function ($httpProvider) {

        $httpProvider.interceptors.push(function ($q) {
            return {
                'request': function (config) {
                    $('#processing').show();
                    return config;
                },

                'response': function (response) {
                    $('#processing').hide();
                    return response;
                }
            };



        });



    }]);


