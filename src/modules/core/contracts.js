(function(){

    angular.module('democracia.services').service('contracts', ['$http', 'web3provider', '$q', function($http, web3provider, $q){
    
        return {
    
            democracia: function(){
    
                var deferred = $q.defer();
    
                //o truffle gera a versão json do contrato
                $http.get('./Democracia.json').then(function(response) {
                    
                    // busca os dados do json e instancia o wrapper do Truffle
                    var democracia = TruffleContract(response.data);
                    
                    // provider padrao: web3
                    democracia.setProvider(web3provider);
    
    
                    democracia.deployed().then(function(instance) {
                        deferred.resolve(instance);
                    });
    
                });
    
                return deferred.promise;
            }
    
        };
    
        }]);
    
    }).call(this);