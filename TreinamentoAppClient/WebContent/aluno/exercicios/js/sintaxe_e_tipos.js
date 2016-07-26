/*
  1) Criar um comentario de linha simples e outro de linha dupla

    2) Criar uma variavel var,uma variavel de scopo de bloco let, uma constante const, para os tipos literais: Array, Boolean,interio,String e object;

    Variavel precisa começar com _ letra ou $. Depois pode conter _ [a-b],[0-9] e $
 */

// Exercicio 2:

var variavelGlobal = "Global";

function exercicio2() {
    const constArray=[101,"Array"];
    let variavelLet=9;
    const constBoolean=false;
    const constInteiro=100;
    const constString='true';
    const constObjeto={nome:"Danilo",endereço:101};

    console.log("variavelGlobal = " + variavelGlobal);
    console.log("variavelLet = " + variavelLet);
    console.log("constArray = " + constArray);
    if(!constBoolean){
        console.log("constBoolean = " + constBoolean);
    }
    console.log("constInteiro = " + constInteiro);
    console.log("constString = " + constString);
    console.log("constObjeto = " + constObjeto);
}

exercicio2();
