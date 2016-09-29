var myApp = angular.module('crudModule', ['ngMaterial', 'views', 'ui.router']);
myApp.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('Home', {
            url: '/',
            views: {
                'header': {
                    templateUrl: '/templates/pages/header.html'
                        // controller: 'HeaderController'
                },

                'footer': {
                    templateUrl: '/templates/pages/footer.html'
                        // controller: 'FooterController'
                }
            }
        })
        .state('add', {
            url: '/add',
            views: {
                'content': {
                    templateUrl: 'templates/detailsView.html',
                    controller: 'detailController'
                },

            }

        })
        .state('search', {
            url: '/search',
            views: {
                'content': {
                    templateUrl: 'templates/search-player.html',
                    controller: 'searchController'
                },
                'footer': {
                    templateUrl: 'templates/pages/footer.html'

                }

            }

        })
        .state('edit', {
            url: '/edit/:id',
            views: {
                'content': {
                    templateUrl: 'templates/detailsView.html',
                    controller: 'editController'
                }

            }

        })
        .state('graphpage1', {
            url: '/graphpage1',
            views: {
                'content': {
                    templateUrl: "includes/barGraph.html",
                    controller: 'graphContlr'
                }
            }
        })
        .state('display', {
            url: '/display',
            views: {
                'content': {
                    templateUrl: 'templates/tableview.html',
                    controller: 'tableController'

                }
            }

        });

    // $mdThemingProvider.theme('default')
    //     .primaryPalette('brown');


}]);

myApp.controller('editController', function($scope, $stateParams, dataService) {
    console.log('hi');
    this.id = $stateParams.id;
    var id = this.id;
    $scope.mdlEdit = function(id) {
        dataService.editServ(id)
            .success(function(response) {
                $scope.order = response;
                console.log($scope.order);
            });
    };
    $scope.mdlEdit(id);

    $scope.mdlUpdate = function(id, order) {
        dataService.updateServ(id, order)
            .success(function(response) {
                $scope.data = [response];
                alert("successfully updated");
            });
    };

});

myApp.directive('addPlayer', function() {
    return {
        restrict: 'E',
        templateUrl: 'add-player.html'

    };

});

// myApp.directive('editPlayer', function() {
//     return {
//         restrict: 'E',
//         templateUrl: 'edit-player.html'

//     };

// });

myApp.directive('searchPlayer', function() {
    return {
        restrict: 'E',
        templateUrl: 'search-player.html'

    };

});
