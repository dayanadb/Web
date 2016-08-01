/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/




//1----------------------------------
function bemVindo(){
    return "bem-vindo";
}

console.log(bemVindo());
//-----------------------------------

//2----------------------------------
var funcao = function (){};
//-----------------------------------

//3----------------------------------
function deFora(){
    function deDentro(){

        return "resultado de dentro";
    }
    return deDentro();
}

console.log(deFora());

//-----------------------------------
