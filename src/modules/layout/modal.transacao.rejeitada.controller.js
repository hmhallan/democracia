(function(){
    angular.module('democracia.controllers').controller('ModalTransacaoRejeitadaController', ['$scope', '$uibModalInstance', 'ex', function ($scope, $uibModalInstance, ex) {    
    
        $scope.ex = ex;

        $scope.sair = function() {
            $uibModalInstance.close();
        };

    }]);

}).call(this);