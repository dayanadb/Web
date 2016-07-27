//Funcao anonima

var anonima = function (){
    return null;
}
// Funcao não Anonima - retorna String
function nAnonima(){
    var st = "String Literal"
    return st;
}
//Variavel com escopo de Funcao;
var abc = nAnonima;


//Funcao aninhada
function aninhada (){
    var xyz;
    function aninhada2() {
        xyz = 10;
        return xyz * 10;
    }
}

//Funcao com parametro padrão
function idadeAno(x){
    var ano = 2016 - x;
    return ano;
}

//Funcao Parametro Rest
function typeRest (a,b, ...Args) {
    return null;

}
// Funcao com uso de "this"
function typeThis(){
    return this.a + this.c;
}


console.log("Funcao Anonima =  " + anonima);
console.log("Funcao  Não Anonima =  " +nAnonima);
console.log("Variavel de Escopo de Funcao =  " +abc);
console.log("Funcao Aninhada =  " +aninhada);
console.log("Funcao Parametro Padrão =  " +idadeAno);
console.log("Funcao Parametro Rest =  " +typeRest);
console.log("Funcao This =  " +typeThis);

