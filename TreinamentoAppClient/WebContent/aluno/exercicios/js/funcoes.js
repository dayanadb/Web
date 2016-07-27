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
function idadeAno(x,y){

}

//Funcao Parametro Rest
function typeRest (a,b, ...Args) {
    return null;

}
// Funcao com uso de "this"
function typeThis(){
    return this.a + this.c;
}


