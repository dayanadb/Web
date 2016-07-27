//Função não anonima sem retorno
var a;

function FA() {
    var b = 1;
    a = b;
}
//Função não anonima com retorno String Literal
function fb() {
    var b = 2;
    a = b;
    return "literal";
}
//variavel com o escopo da primeira função
var c = FA();
//função aninhada
function fc() {
    var b = 1;
    a = b;

    function fd() {
        var c = 2;
        a = b;
        return a;
    }
}
//função com ao menos um parametro padrão
function fe(x){
    return x;
}
//função com um parametro rest
function ff(y, ...z){
    console.log(y);
    console.log(z.length);
}
//função com this
function fg(x){
    this.id = x;
}

var h = new fg("01");
console.log(h.id);


/*
 CONSIDERAÇÕES:
    Se possível, pratique alguma função anonima!
    No mais, está excelente!
 */
