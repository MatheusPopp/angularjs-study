angular.module('myApp')
    .controller('cadastroController', ['$scope','$location',function ($scope,$location) {


        $scope.cadastrar = function () {
            alert($scope.model.nome + $scope.model.email + $scope.model.genero + $scope.model.data_nasc);;
        }
        $scope.sair = function () {
            $location.url('/');
        }

        $scope.model = {
            nome: undefined,
            email: undefined,
            genero: "masculino",
            data_nasc: undefined
        }









    }]);