﻿angular.module('myApp')
    .controller('loginController', ['$scope','$location',function ($scope,$location) {


        $scope.pageModel.page.name = $location.path();
        $scope.model = {
            email: undefined,
            senha: undefined,
            lembrar: false
        }

        $scope.lembrarChange = function(){
            if ($scope.model.lembrar) {
               
            }
        }

        $scope.logarUsuario = function(){
            $location.url('/home');
        }

        $scope.cadastrarUsuario = function () {

            $location.url('/cadastro');
        }




    }]);
