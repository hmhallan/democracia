(function(){
	angular.module('democracia.controllers').controller('ListaPropostasController', ['$scope', '$uibModal', 'api', function ($scope, $uibModal, api) {

        $scope.listarPropostas = function(){
            
            $scope.propostas = [];
            
            //implementar aqui a busca de propostas cadastradas

            //1 - buscar (via api) o total de propostas
            //esta funcionalidade inclusive ja esta implementada na tela de cadastro de propostas (é exibido no rodapé)

            //2 - iterar o total de propostas, buscando cada uma delas (através da api também) e adicionando na listagem
            //ex: $scope.propostas.push( proposta );
        }

        $scope.listarPropostas();

    }]);
}).call(this);