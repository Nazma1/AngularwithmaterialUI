var myApp1 = angular.module('crudModule');
myApp1.controller('searchController', function($scope, dataService) {
    $scope.searchDetails = function() {
        dataService.getPeople($scope.txtSearch)
            .success(function(response) {
                $scope.data = response;
            })
            .error(function(error) {
                $scope.data = error.statusText;
            });
    };
    $scope.removeData = function(id) {
        dataService.deleteAll(id)
            .success(function(response) {
                $scope.order = response;
                alert("successfully deleted");
                dataService.getAll()
                    .success(function(response) {
                        $scope.data = response;

                    })
            });
    };




});
