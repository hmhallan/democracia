var Democracia = artifacts.require("./Democracia.sol");

contract('Democracia', function(accounts) {

    //armazena a instancia do contrato
    var d1;
    var account = accounts[0];

    beforeEach(function() {
        return Democracia.deployed()
        .then(function(instance) {
            d1 = instance;
        });
    });

    it("Deve cadastrar uma nova proposta", function() {

        return d1.criarProposta.call("Proposta de Voto", "Aqui vai o texto da minha proposta", new Date().getTime(), 100, {from: account, gas: 4712388})
        .then(function(result) {
            assert.equal(result, true, "Erro ao adicionar nova proposta");
        });

    });

    it("Deve retornar uma proposta cadastrada", function() {

        var index = -1;
        return d1.criarProposta.call("Proposta de Voto 2", "Aqui vai o texto da minha segunda proposta", new Date().getTime(), 200, {from: account, gas: 4712388})
        .then(function(result) {
            assert.equal(result, true, "Erro ao adicionar nova proposta");
            return d1.getTotaldePropostas();
            
        }).then(function(total) {
            assert.equal(total.toNumber(), 1, "total de propostas está errado");
            return d1.getProposta(index);
        }).then(function(proposta) {
            assert.equal(proposta[0], "Proposta de Voto 2", "Erro no título da proposta");
        });

    });

});
