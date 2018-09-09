(function(){
    angular.module('democracia.controllers').controller('ModalConfirmacaoController', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {    
    
        $scope.confirmar = function() {
            if ( $scope.form.$valid ){
                $uibModalInstance.close( $scope.carteira );
            }
        };
    
        $scope.cancelar = function() {
            $uibModalInstance.dismiss();
        };

    }]);

}).call(this);