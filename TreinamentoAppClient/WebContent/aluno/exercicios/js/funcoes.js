// função //
function a() {
   var a;
}


// funcao retornando literal //
function b() {
    return "oi";
}


// função passando escopo de uma função //
var c = d;

function d() {
    return "oi";
}


// função aninhada //

function e() {
    var e = 5;
    function f() {
        var f = 5;
        return f + e;
    }
    return f();
}


//função recebendo parâmetro padrão //
function g(x, y) {
    return x * y;
}
var g = g(2,3);


// função recebendo parâmetro rest(varags) //
function h(a, ...b) {
    var h = b;
    h[0] = 1;
    console.log(h[0]);
}


// função com this //
function i(x) {
    this.nome = x;
}

var j =new i("jun");
console.log(j.nome);

/*
 CONSIDERAÇÕES:
    Se possível, pratique mais o uso de função anonima.
    No mais, esá muito bom!
 */

