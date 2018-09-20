angular.module('myApp')
    .controller('loginController', ['$scope',function ($scope) {



        $scope.model = {
            email: undefined,
            senha: undefined,
            lembrar: undefined
        }

        $scope.lembrarChange = function(){
            if (!$scope.model.lembrar) {
                alert("mudou");
            }
        }




    }]);
