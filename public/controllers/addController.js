var myApp1 = angular.module('crudModule');
myApp1.controller('detailController', function($scope, dataService, $location) {
    $scope.mdlSave = function() {
        dataService.postAll($scope.order)
            .success(function(response) {
                $scope.data = [response];
                $scope.message = "added Successfully";
                $location.path("#/index"); //to clear the path
            })
            .error(function(error) {
                $scope.data = error.statusText;
            });
    };


});
