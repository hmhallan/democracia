(function(){
	angular.module('democracia.controllers').controller('VotoController', ['$scope', function ($scope) {

		$scope.dateOptions = {
		    formatYear: 'yy',
		    opened: false,
		    startingDay: 1
		};

		$scope.togglePicker = function() {
		    $scope.dateOptions.opened = true;
		  };
        
    }]);
}).call(this);