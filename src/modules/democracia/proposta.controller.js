(function(){
	angular.module('democracia.controllers').controller('PropostaController', ['$scope', '$uibModal', 'api', '$location', function ($scope, $uibModal, api, $location) {

		$scope.proposta = {};

		$scope.enviarProposta = function(){
			if ( $scope.form.$valid ){
				var modal = $uibModal.open({
					templateUrl: 'modules/layout/modal.confirmacao.html',
					controller: 'ModalConfirmacaoController'
				});

				//callback do modal
				modal.result.then(
					//confirmou
					function (carteira) {
						
						api.proposta.criarProposta( $scope.proposta, carteira ).then(
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
									//encaminha para a tela de listagem
									$location.path("/lista-propostas");
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
		}

		$scope.limparCampos = function(){
			$scope.proposta = {};
			$scope.form.$setPristine();
			$scope.getTotalPropostas(); 
		}

		//total de propostas no rodapé
		$scope.getTotalPropostas = function(){
			api.proposta.getTotaldePropostas().then(function(retorno){
				$scope.totalDePropostas = retorno;
			});
		}
		$scope.getTotalPropostas(); 

		//funções do picker
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