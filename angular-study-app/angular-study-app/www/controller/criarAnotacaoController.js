angular.module('myApp').controller('criarAnotacaoController', ['$scope','$location',function ($scope,$location) {


    $scope.pageModel.page.name = $location.path();







}]);





