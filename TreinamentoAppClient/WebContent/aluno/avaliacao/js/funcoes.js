/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/


function teste() {
    console.log("bem vindo");
    return "bem vindo";
}

var te = function (a, b) {};

function fun3() {
    console.log("teste");


    function retorno() {
        console.log("função com retorno");
        return "função com retorno";
    }

    return retorno();
}
