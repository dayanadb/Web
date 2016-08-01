/*
OK - 1) Declare uma função não-anonima que retorne 'bem-vindo'
OK - 2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
OK - 3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna
*/

function bemVindo(){
    return "bem-vindo";
}

function bemVindoAnonima(){
    var anonima = bemVindo();
}

function funcaoExterna(){
    var funcao = function funcaoInterna(){}
    return funcao;
}
