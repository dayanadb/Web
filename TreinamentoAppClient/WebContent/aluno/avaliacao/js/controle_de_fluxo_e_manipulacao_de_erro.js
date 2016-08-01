/*
OK - 1) declare um bloco try...catch...finally e force um lancamento de exceção dentro da declaração try
OK - 2) Declare um bloco if...else if...else
*/

function Excecao(mensagem){
    this.erro = mensagem;
}

function lancaErro(parametro){
    try{
        if(parametro == 1){
            throw excecao = new Excecao("Exceção lançada");
        }else{
            alert("Executado com sucesso!");
        }
    }catch(Excecao){
        alert(Excecao.erro);
    }finally{

    }
}

