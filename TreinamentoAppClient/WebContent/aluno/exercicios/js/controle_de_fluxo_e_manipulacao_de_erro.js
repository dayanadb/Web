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

function testarIteracao(){
    var flag = true;

    while(flag){
        for(var i = 0; i < 10; i++){
            console.log(i);
            continue;
        }
        flag = false;
    }

    console.log("Saindo de testarIteracao");
}
