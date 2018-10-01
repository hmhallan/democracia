(function(){

    angular.module('democracia.services').service('api', [ 'contracts', '$q', function(contracts, $q){
    
        return {
    
            proposta: {
    
                criarProposta: function( proposta, account ){
                    //cria uma promise (assincrono)
                    var deferred = $q.defer();

                    //busca o contrato democracia
                    contracts.democracia().then(function(instance){
                        
                        //chama a função "criar proposta" do contrato
                        instance.criarProposta( proposta.titulo, proposta.descricao, proposta.visivelAte.getTime(), proposta.totalVotos, {from: account, gas: 6721975} ).then(function(result) {
                            //resolve a promise com o retorno da transacao
                            deferred.resolve(result);
                        }).catch(e => {
                            //rejeita a promise com a exceção que ocorreu
							deferred.reject(e);
						});
                    });
                    return deferred.promise;
                },
    
                getProposta: function(index){
                    //cria uma promise (assincrono)
                    var deferred = $q.defer();

                    //busca o contrato democracia
                    contracts.democracia().then(function(instance){

                        //chama a função "get proposta" do contrato
                        instance.getProposta.call( index ).then(function(data) {
                            var proposta = {
                                id: data[0].toNumber(),
                                titulo: data[1],
                                descricao: data[2],
                                criador: data[3],
                                visivelAte: data[4].toNumber(),
                                totalVotos: data[5].toNumber(),
                                votosFavor: data[6],
                                votosContra: data[7]
                            };

                            //calcula informacoes
                            proposta.votantes = proposta.votosFavor.length + proposta.votosContra.length;
                            proposta.percFavor = (proposta.votosFavor.length / proposta.votantes) * 100;
                            proposta.percContra = (proposta.votosContra.length / proposta.votantes) * 100;
                            if (!proposta.percFavor){
                                proposta.percFavor = 0;
                            }
                            if (!proposta.percContra){
                                proposta.percContra = 0;
                            }

                            //resolve a promise com a proposta retornada do contrato
                            deferred.resolve(proposta);
                        }).catch(e => {
                            //rejeita a promise com a exceção que ocorreu
							deferred.reject(e);
						});
                    });
                    return deferred.promise;
                },
    
                getTotaldePropostas: function(){
                     //cria uma promise (assincrono)
                    var deferred = $q.defer();

                    //busca o contrato democracia
                    contracts.democracia().then(function(instance){

                        //chama a função "get total de propostas" do contrato
                        instance.getTotaldePropostas.call().then(function(data) {

                            //resolve a promise com o total de propostas
                            deferred.resolve(data.toNumber());
                        }).catch(e => {
                            //rejeita a promise com a exceção que ocorreu
							deferred.reject(e);
						});
                    });
                    return deferred.promise;
                },
    
                votar: function( proposta, voto, account ){
                     //cria uma promise (assincrono)
                    var deferred = $q.defer();

                    //busca o contrato democracia
                    contracts.democracia().then(function(instance){
                        
                        //chama a função "votar" do contrato passando o tipo de voto (1: favor, 2: contra)
                        instance.votar( proposta.id, voto, {from: account, gas: 6721975} ).then(function(result) {
                            //resolve a promise com o retorno da transacao
                            deferred.resolve(result);
                        }).catch(e => {
                            //rejeita a promise com a exceção que ocorreu
							deferred.reject(e);
						});
                    });
                    return deferred.promise;
                }
            }
    
            
        };
    
        }]);
    
    }).call(this);