/*1) Declare uma função não-anonima que retorne 'bem-vindo'
2) Declare uma função anonima (armazenando o escopo dentro de uma variavel), sem retorno
3) DEclare uma função (anonima ou não-anonima) e dentro desta declare outro função 'interna'. Faça com que a função mais externa retorne a mais interna*/
/*1*/
function saudacoes() {
    return "bem-vindo";
}
console.log(saudacoes());
/*2*/
var anonimo = function () {
    console.log("Sou uma função anônima.");
};
anonimo();
/*3*/
function inOut() {
    function inside() {
        console.log("Sou a função mais interna.");
    }
    inside();
}
inOut();
