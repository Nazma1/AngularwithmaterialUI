(function() {
    'use strict';

    angular.module('views')
        .service('viewService', ['$q', viewService]);


    function viewService($q) {
        var views = [{
            name: 'iphone',
            avatar: 'downloads/iphone.svg'
        }, {
            name: 'mac',
            avatar: 'downloads/mac.svg'
        }, {
            name: 'android',
            avatar: 'downloads/android.svg'
        }, {
            name: 'tablet',
            avatar: 'downloads/tablet.svg'
        }, {
            name: 'games',
            avatar: 'downloads/games.svg'
        }, {
            name: 'star',
            avatar: 'downloads/star.svg'
        }, ];

        return {
            loadAllViews: function() {
                // Simulate async nature of real remote calls
                return $q.when(views);
            },
            fun1: function() {
                console.log('hello');
            }
        };
    }

})();
