var myApp1 = angular.module('crudModule');
myApp1.controller('tableController', function($scope, dataService) {
    // $scope.player = [];
    // var page = 0;
    // var end = 10;
    // $scope.prev = false;
    // $scope.next = false;

    //load all the student details
    $scope.loadAllDetails = function() {
        var start = 0;
        dataService.getAll(start)
            .success(function(response) {
                $scope.data = response;
                console.log($scope.data);
            })
            .error(function(error) {
                $scope.data = error.statusText;

            });
    };

});
