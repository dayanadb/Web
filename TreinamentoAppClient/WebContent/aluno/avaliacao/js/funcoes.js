/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/
function tenhoNome() {
    return "Bem-Vindo";
}
var escopo;

function (n) {
    escopo = n;
}

var retorno;
function externa() {
    retorno = 0;
    return function interna() {
        retorno = 1;
        return retorno;
    };
}
