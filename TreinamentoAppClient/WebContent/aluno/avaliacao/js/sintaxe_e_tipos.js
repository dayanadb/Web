/*
1) Declare uma variavel (undefined)
2) Inicialize a variavel acima com um literal 'Number'
3) Declare uma variável de escopo de bloco
*/

/*1*/
var a;
console.log(typeof(a));
/*2*/
a= 'Number';
console.log(typeof(a));
/*3*/
function funcao() {
    var escopo_bloco="Hello from the block";
    console.log(escopo_bloco);
}
funcao();
