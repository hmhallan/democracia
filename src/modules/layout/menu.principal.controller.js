(function(){
	angular.module('democracia.controllers').controller('MenuController', ['$scope', '$location', function ($scope, $location) {

        $scope.location = $location;

    }]);
}).call(this);