(function(){
	angular.module('democracia.controllers').controller('ListaPropostasController', ['$scope', '$uibModal', 'api', 'VOTO', function ($scope, $uibModal, api, VOTO) {

        $scope.listarPropostas = function(){
            
            $scope.propostas = [];

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

        $scope.votarFavor = function(proposta){
            $scope.votar(proposta, VOTO.favor);
        }

        $scope.votarContra = function(){
            $scope.votar(proposta, VOTO.contra);
        }

        $scope.votar = function( proposta, voto ){
            var modal = $uibModal.open({
                templateUrl: 'modules/layout/modal.confirmacao.html',
                controller: 'ModalConfirmacaoController'
            });

            //callback do modal
            modal.result.then(
                //confirmou
                function (carteira) {
                    
                    api.proposta.votar( proposta, voto, carteira ).then(
                        function(retorno){
                            var modalOk = $uibModal.open({
                                templateUrl: 'modules/layout/modal.transacao.efetuada.html',
                                controller: 'ModalTransacaoEfetuadaController',
                                size: 'lg',
                                resolve: {
                                    transacao: function(){
                                        return retorno;
                                    }
                                }
                            });
                            modalOk.result.then(function(){
                                //atualiza a lista de respostas
                                $scope.listarPropostas();
                            });
                        },
                        function(error){
                            console.error(error);
                            var modalError = $uibModal.open({
                                templateUrl: 'modules/layout/modal.transacao.rejeitada.html',
                                controller: 'ModalTransacaoRejeitadaController',
                                size: 'lg',
                                resolve: {
                                    ex: function(){
                                        return error;
                                    }
                                }
                            });
                        });

                }, 
                //cancelou
                function(){}
            );
        }

        $scope.listarPropostas();

    }]);
}).call(this);