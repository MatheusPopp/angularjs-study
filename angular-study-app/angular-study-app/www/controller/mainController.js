angular.module('myApp')
    .controller('mainController', ['$scope','$location', function ($scope,$location) {


        $scope.sair = function () {

            $location.url('/');

        }

       




    }]);