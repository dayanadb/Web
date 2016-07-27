/**
 * 
 */
//Função não anônima sem retorno
function semRetorno() {
    var a = 1;
    console.log(a);
}
semRetorno();
//Função não anônima retornando String
function retornaString() {
    var b = "Oi";
    return b;
}
var venhaString = retornaString();
console.log(venhaString);
//Declarar variável que armazene o escopo de função da primeira função criada
//FIz tambei com a segunda função pra testar a atribuição do escopo
var receptor = semRetorno;
var recebe = retornaString;
var x = recebe();
console.log(x);
//Função aninhada
function papai() {
    var contador = 4;

    function filha() {
        contador *= contador;
    }
    filha();
    return contador;
}
var mede = papai();
console.log(mede);
//Função que recebe um parâmetro
function funcionarioDoMes(bonus) {
    if (bonus <= 100) {
        return "unhappy";
    }
    else {
        return "happy"
    }
}
var mcfeliz = funcionarioDoMes(200);
console.log(mcfeliz);
//FUnção que recebe um parâmetro rest
function restme(...framboesa) {
    console.log(framboesa.length);
}
restme();
restme(1);
restme(158, 2, 45);
restme(54, 452, 346, 787, 3242389, 0);
//Função com o léxico this
function Lexico(prim, seg) {
    this.a = prim;
    this.b=seg;
}
var obj=new Lexico(12,14);
console.log(obj.a);
console.log(obj.b);