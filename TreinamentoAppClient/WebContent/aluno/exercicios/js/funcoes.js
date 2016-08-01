/**
 * 
 */

var a = "";

//sem retorno
function comer(){
    a = "Fome";
}

//retornar uma String

function comer(){
    a = "Comida"
    return (a);
}

//armazene o escopo de função da 1º função criada
var b = function(){
    var c = comer();
}

//função aninhada
function e(){
    var d = 10;
    function f(){
        console.log(d);
    }
}

//parâmetro
var x = 40;
function somar(x){
    var i = 10 + x;
    console.log(i);
}

//parametro rest
function menos(rest){
    var h = 50 - rest;
}

//this
function y(){
    var idade = 10;
    this.idade = 15;
}
