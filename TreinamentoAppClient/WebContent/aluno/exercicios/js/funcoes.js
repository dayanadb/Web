<<<<<<< HEAD
/*
 CONSIDERAÇÕES:
    Caso tenha tido alguma dificuldade que impediu de fazer estes exercícios, favor me contate para fazermos um reforço individual!
=======
/**
 *
 1) Declarar uma função não anonima sem retorno
 2) Declarar uma função não anonima que retorne uma String literal
 3) Declarar uma variável que armazene o escopo de função da primeira função criada
 4) Declarar uma função aninhada
 5) Declarar uma função que receba ao menos um parâmetro padrão
 6) Declarar uma função que receba um parâmetro rest
 7) Declarar uma função que utilize o léxico this para referenciar a si mesmo dentro do próprio escopo
>>>>>>> origin/danbuchner
 */


function funcaoNaoAnonima(){
    this.nome = "Funcao Nao Anonima";
    var a = "a";
    console.log("Esta é uma função não anonima.");
    function funcaoAninhada(){
        console.log("Esta é uma função aninhada.");
    }
    funcaoAninhada();
}

function funcaoNaoAnonimaRetorno(){
    console.log("Esta é uma função não anonima com retorno.");
    return "Esta é uma função não anonima com retorno.";
}

function funcaoParametro(p){
    console.log("Esta é uma função não anonima com parametro = " + p);
    return "Esta é uma função não anonima com retorno.";
}

function funcaoParametroRest(p,...rest){
    console.log("Esta é uma função não anonima com parametro rest. ");
    console.log("p = " + p);
    for(var a of rest){
         console.log("rest = " + a);
    }
    return "Esta é uma função não anonima com retorno.";
}

var varFunc = new funcaoNaoAnonima();

funcaoNaoAnonimaRetorno();
funcaoNaoAnonima();

funcaoParametro(500);
funcaoParametroRest("Parametro p",10,15,12,"Rest");

console.log("Nome dentro da função funcaoNaoAnonima : " + varFunc.nome);
varFunc.a="passando valor a a";
console.log("Nome dentro da função funcaoNaoAnonima : " + varFunc.a);
