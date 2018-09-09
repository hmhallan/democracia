(function(){

    angular.module('democracia.services').service('api', [ 'web3', 'contracts', '$q', function(web3, contracts, $q){
    
        return {
    
            firstAccount: function(){
                var deferred = $q.defer();
    
                web3.eth.getAccounts(function(error, accounts) {
                    if (error) {
                        console.log(error);
                    }
                    var account = accounts[0];
                    deferred.resolve(account);
                });
    
                return deferred.promise;
            },
    
            proposta: {
    
                criarProposta: function( proposta, account ){
                    //cria uma promise (assincrono)
                    var deferred = $q.defer();

                    //busca o contrato democracia
                    contracts.democracia().then(function(instance){
                        
                        //chama a função "criar proposta" do contrato
                        instance.criarProposta( proposta.titulo, proposta.descricao, proposta.visivelAte, proposta.totalVotos, {from: account} ).then(function(result) {
                            //var event = instance.CreatedProposalEvent();
                            //in this case, return the event that will be fired when the add in the blockchain is mined
                            //deferred.resolve(event);
                            deferred.resolve(result);
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
                                votosFavor: data[6].toNumber(),
                                votosContra: data[6].toNumber()
                            };

                            //resolve a promise com a proposta retornada do contrato
                            deferred.resolve(proposta);
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
                        }); 
                    });
                    return deferred.promise;
                }
            }
    
            
        };
    
        }]);
    
    }).call(this);