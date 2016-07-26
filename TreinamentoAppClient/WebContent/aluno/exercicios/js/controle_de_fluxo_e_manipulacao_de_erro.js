/**
 * 
 */

function ExcessaoUsuario(mensagem){
    this.erro = mensagem;
}

function testarErrosIf(parametro){

    try{
        if(parametro == 1){
            var excessao = new ExcessaoUsuario("Usuário Inválido");
            throw excessao;
        }else{
            alert("Executado com sucesso!");
        }
    }catch(ExcessaoUsuario){
        alert(ExcessaoUsuario.erro);
    }
}
