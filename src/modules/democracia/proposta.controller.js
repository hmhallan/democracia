(function(){
	angular.module('democracia.controllers').controller('PropostaController', ['$scope', function ($scope) {

		$scope.proposta = {};

		$scope.dateOptions = {
		    formatYear: 'yy',
		    opened: false,
		    startingDay: 1
		};

		$scope.togglePicker = function() {
		    $scope.dateOptions.opened = true;
		};

		$scope.enviarProposta = function(){
			if ( $scope.form.$valid ){
				console.info("enviar");
			}
		}
        
    }]);
}).call(this);