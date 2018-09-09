pragma solidity ^0.4.16;

contract Democracia {

    address owner = msg.sender; //dono do contrato é o criador 
    

    //struct da Proposta
    struct Proposta {
        string titulo;
        string descricao;
        address criador;
        uint visivelAte;
        uint totalVotos;
        address[] votosFavor;
        address[] votosContra;
        uint status;
    }

    //criar um array de Proposta como atributo do contrato
    Proposta[] public propostas;


    function criarProposta(string titulo, string descricao, uint visivelAte, uint totalVotos) public returns (bool) {
        
        Proposta memory p;
        p.titulo = titulo;
        p.descricao = descricao;
        p.visivelAte = visivelAte;
        p.totalVotos = totalVotos;
        p.criador = msg.sender;
        p.status = 1;

        //adiciona ao array de propostas
        propostas.push(p);

        //retorna o indice do array da proposta criada
        return true;
    }

    function getTotaldePropostas() public view returns (uint) {
        if (propostas.length > 0) {
            return propostas.length;
        }
        return 0;
    }
    
    function getProposta( uint index ) public view returns (uint, string, string, address, uint, uint, uint, uint) {
        if ( propostas.length >= index ) {
            Proposta storage p = propostas[index];
            return (index, p.titulo, p.descricao, p.criador, p.visivelAte, p.totalVotos, p.votosFavor.length, p.votosContra.length);
        }
    }

    function kill() public { //encerra o contrato (somente o owner pode fazer isso)
        if(msg.sender == owner) {
            selfdestruct(owner); 
        }
    }

}
