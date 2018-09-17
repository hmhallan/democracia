(function(){
	angular.module('democracia.controllers').controller('ListaPropostasController', ['$scope', '$uibModal', 'api', function ($scope, $uibModal, api) {

        $scope.listarPropostas = function(){
            
            $scope.propostas = [];
            
            //implementar aqui a busca de propostas cadastradas

            //1 - buscar (via api) o total de propostas
            api.proposta.getTotaldePropostas().then(function(retorno){
                $scope.totalDePropostas = retorno;

                //2 - iterar o total de propostas, buscando cada uma delas (através da api também) e adicionando na listagem
                for ( var i = 0; i < $scope.totalDePropostas; i++ ){
                    api.proposta.getProposta( i ).then(function(proposta){ 
                        $scope.propostas.push(proposta);
                    });
                }

            }); 
        }

        $scope.listarPropostas();

    }]);
}).call(this);