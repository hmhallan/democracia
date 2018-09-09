pragma solidity ^0.4.16;

contract Democracia {
    

    //struct da Proposta
    struct Proposta {
        string titulo;
        string descricao;
        address criador;
        uint dataFinal;
        uint totalVotos;
        address[] votosFavor;
        address[] votosContra;
        uint status;
    }

    //criar um array de Proposta como atributo do contrato
    Proposta[] public propostas;


    function criarProposta(string titulo, string descricao, uint dataFinal, uint totalVotos) public returns (bool) {
        
        Proposta memory p;
        p.titulo = titulo;
        p.descricao = descricao;
        p.dataFinal = dataFinal;
        p.totalVotos = totalVotos;
        p.criador = msg.sender;
        p.status = 1;

        //adiciona ao array de propostas
        propostas.push(p);

        //retorna o indice do array da proposta criada
        return true;
    }

    function getTotaldePropostas() public view returns (uint) {
        return propostas.length;
    }
    
    function getProposta( uint index ) public view returns (uint, string, string, address, uint, uint, uint, uint) {
        if ( propostas.length >= index ) {
            Proposta storage p = propostas[index];
            return (index, p.titulo, p.descricao, p.criador, p.dataFinal, p.totalVotos, p.votosFavor.length, p.votosContra.length);
        }
    }

}
