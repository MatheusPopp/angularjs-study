angular.module('myApp')
    .controller('homeController', ['$scope','$location', function ($scope,$location) {

        $scope.pageModel.page.name = $location.path();
        $scope.model = {
            page: {
                name: $location.path()
            }
        }

        $scope.criarAnotacao = function () {
            $location.url('/home/criarAnotacao');
            
        }


    }]);