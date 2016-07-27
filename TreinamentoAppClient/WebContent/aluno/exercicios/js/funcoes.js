/**
 * 
 */
fun();
retorno();
fun3();
param(10);
paramrest("teste",10,20,30,40);

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


function paramrest(x, ...y) {
    var a = x;
    var b = y;
    console.log("a= " + a + " b= " + b.length );
}

/* declarar função que utilize o léxico this para referenciar a si mesmo dentro do próprio escopo. */


