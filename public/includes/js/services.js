myApp.factory('dataService', ['$http', function($http) {
    var obj = {};
    // var page = 1;
    obj.deleteAll = function(id) {
        return $http.delete('http://localhost:8080/users/' + id);
    }
    obj.postAll = function(order) {
        return $http.post("http://localhost:8080/users", order);
    }
    obj.getAll = function(start) {
        return $http.get("http://localhost:8080/users?_start=0&_limit=10");
    }
    obj.getPeople = function(txtSearch) {
        return $http.get('http://localhost:8080/users?id=' + txtSearch);
    }
    obj.editServ = function(d) {
        return $http.get("http://localhost:8080/users/" + d);
    }
    obj.updateServ = function(id, order) {
        return $http.put("http://localhost:8080/users/" + id, order);
    }


    return obj;
}]);
