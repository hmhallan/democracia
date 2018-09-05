pragma solidity ^0.4.16;

contract Democracia {
    

    //definir uma struct chamada Proposta
    /*
        deve ter: 
         - titulo, descricao (string)
         - criador (address)
         - data final (int) -> data em solidity é timestamp
         - total de votos (int)
         - votos a favor (array de address)
         - votos contra (array de address)
         - status (int) -> se esta em andamento, foi rejeitada ou aceita
    */
    struct Proposta {
        string titulo;
    }

    //criar um array de Proposta como atributo do contrato
    Proposta[] public propostas;


    function criarProposta(string titulo, string descricao, uint dataFinal, uint totalVotos) public returns (bool) {
        
        //criar um 'objeto' (struct) de Proposta

        //adicionar ao array de propostas (atributo do contrato)

        return false;
    }

    function getTotaldePropostas() public view returns (uint) {
        //aqui, retornar o tamanho do array de propostas
        return 0;
    }
    
    function getProposta( uint index ) public view returns (uint, string, string, address, uint, uint, uint, uint) {
        
        //no caso, como não tem um "ID", as propostas serão identificadas pelo índice no array
        //esta função recebe o índice, busca a proposta no array e devolve os dados da proposta
        //Solidity não ainda suporta retornar uma strutct ou um array, então o retorno deve ser algo como (supondo que 'p' é a proposta):
        //return (index, p.titulo, p.descricao, p.criador, p.dataFinal, p.totalVotos, p.votosFavor.length, p.votosContra.length);

        if ( propostas.length >= index ) {

        }
    }

}
