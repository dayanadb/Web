/*1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
2) Declare um bloco if...else if...else*/

var nome = retornaNome();

console.log(nome);

function retornaNome(id){

    try{

        if(id != undefined){
            return 'Maria';
        }else{
            throw new Error ('Preencha o id para retornar o nome');

        }

    }catch (Error){
         console.log('Preencha o id para retornar o nome');
    }
    finally{
        console.log("Função para retornar o nome") ;

    }
}

