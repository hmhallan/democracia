(function(){
    angular.module('democracia.controllers').controller('ModalTransacaoEfetuadaController', ['$scope', '$uibModalInstance', 'transacao', function ($scope, $uibModalInstance, transacao) {    
    
        $scope.transacao = transacao;

        $scope.sair = function() {
            $uibModalInstance.close();
        };

    }]);

}).call(this);