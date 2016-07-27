/*
    Exercício Wesley
    Declarar uma variável de cada tipo para todas as declarações
*/

// Escopo Globa
var booleana;
var nula;
var indefinida;
var numero;
var texto;
var simbolo;
var objeto;

function inicializacaoVariaveis() {
    //Escopo Local
    booleana = true;
    nula = null;
    numero = 10;
    texto = "Texto";
    simbolo = Symbol("Símbolo");
    objeto = {nome: "Wesley",idade: 28};

    alert("Variáveis inicializadas");
}

function imprimirVariaves(){
    console.log(booleana);
    console.log(nula);
    console.log(numero);
    console.log(texto);
    console.log(simbolo);
    console.log(objeto);

    alert("Valores Impressos");
}

function usarLetConst(opcao){
    if(opcao == 1){
        let nome="Wesley";
        const empresa="Scopus";

        console.log(nome);
        console.log(empresa);

        alert(nome, empresa);
    }else{
        let nome="Outra pessoa";
        const empresa="Outra empresa";

        console.log(nome);
        console.log(empresa);
    }
}
