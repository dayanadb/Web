/*

1º exercício:
Criar variáveis

*/


//Escopo Global

var booleana;
var nula;
var indefinida;
var texto;
var numero;
var simbolo;
var objeto;

function initVar() {
    booleana = true;
    nula = null;
    indefinida = undefined;
    texto = "Texto";
    numero = 0;
//    simbolo = new Symbol("Simbolo");
    objeto = {nome: "Annelisa", idade: 37};
}

function imprimirVar() {
    console.log(booleana);
    console.log(nula);
    console.log(indefinida);
    console.log(texto);
    console.log(numero);
    console.log(simbolo);
    console.log(objeto);
}

initVar();
imprimirVar();
