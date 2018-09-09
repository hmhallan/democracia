(function(){
	
    angular.module('democracia.services')
    
    .service('web3provider', [ 'BLOCKCHAIN_CONFIG', function (BLOCKCHAIN_CONFIG) {

        if (typeof web3 !== 'undefined') {
            var web3provider = web3.currentProvider;
            return web3provider;
        } else {
            //cria um provider web3 com os dados das constantes
            var web3provider = new Web3.providers.HttpProvider("http://" + BLOCKCHAIN_CONFIG.server + ":" + BLOCKCHAIN_CONFIG.port);
            return web3provider;
        }

    }])
    
    .service('web3', [ 'web3provider', function (web3provider) {
            return new Web3(web3provider);
    }]);
    
    
}).call(this);