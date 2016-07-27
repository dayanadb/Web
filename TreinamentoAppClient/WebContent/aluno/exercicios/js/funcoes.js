/**
 * 
 */
fun();
retorno();
fun3();
param(10);

function fun() {
    console.log("teste de função não anonima");
}

function retorno() {
    console.log("teste de função não anonima com retorno");
    return "teste de função não anomina com retorno";
}
/* declarar um variavel que armazene o escopo da função da 1a. função criada */
/* declarar função aninhada */
function fun3() {
    console.log("teste de função não anonima");
    retorno();

    function retorno() {
        console.log("teste de função não anonima com retorno");
        return "teste de função não anomina com retorno";
    }
}

/* função que receba ao menos um parametro */
function param (x) {
     console.log("teste de função não anonima com parametros" + x);
}

