/**
 * 
 */
function ExcessaoUsuario(mensagem) {
    this.erro = mensagem;
}

function testarErrosIf(parametro) {
    try {
        if (parametro == 1) {
            var excessao = new ExcessaoUsuario("Usuário Inválido");
            throw excessao;
        }
        else {
            alert("Executado com sucesso!");
        }
    }
    catch (ExcessaoUsuario) {
        alert(ExcessaoUsuario.erro);
    }
}

/* CONSIDERAÇÕES:
    Perfeito! Apenas notei que não escreveu o exercício de switch. Caso tenha alguma duvida sobre como criar o switch, me procure!
 */
