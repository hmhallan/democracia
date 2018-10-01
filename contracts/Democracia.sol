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


    function criarProposta(string titulo, string descricao, uint visivelAte, uint totalVotos) public {
        
        Proposta memory p;
        p.titulo = titulo;
        p.descricao = descricao;
        p.visivelAte = visivelAte;
        p.totalVotos = totalVotos;
        p.criador = msg.sender;
        p.status = 1;

        //adiciona ao array de propostas
        propostas.push(p);

    }

    function getTotaldePropostas() public view returns (uint) {
        if (propostas.length > 0) {
            return propostas.length;
        }
        return 0;
    }
    
    function getProposta( uint index ) public view returns (uint, string, string, address, uint, uint, uint, uint, uint) {
        if ( propostas.length >= index ) {
            Proposta storage p = propostas[index];
            return (index, p.titulo, p.descricao, p.criador, p.visivelAte, p.totalVotos, p.votosFavor.length, p.votosContra.length, p.status);
        }
    }

    function votar( uint index, uint voto ) public {
		
		//valida o tipo de voto
        require(voto == 1 || voto == 2);
			
		//busca a proposta
        Proposta storage p = propostas[index];
	
		//valida a data do voto
		//require( now < p.visivelAte );
		
		//valida voto duplicado
		//address votou = p.votosFavor.push[msg.sender] || p.votosContra.push[msg.sender];
		//require(!votou, "Já votou.");
		
		//efetua o voto
        if (voto == 1) {
            p.votosFavor.push(msg.sender);
        } else {
            p.votosContra.push(msg.sender);
        }
		
    }  

    function kill() public { //encerra o contrato (somente o owner pode fazer isso)
        if(msg.sender == owner) {
            selfdestruct(owner); 
        }
    }

}
