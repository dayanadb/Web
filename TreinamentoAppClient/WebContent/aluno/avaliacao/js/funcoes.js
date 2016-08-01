console.log('FUNCOES');
//1) Declare uma função não-anonima que retorne 'bem-vindo'
function welcome () {
    return 'Bem-vindo';
}

//2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
var funcao = function() {

};

/* 3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/
var mensagem = function() {
    function geraMensagem() {
        return 'Eu sou uma mensagem da função interna';
    }
    return geraMensagem();
}

console.log(welcome());
console.log(mensagem());
